import urljoin from "url-join";
import { pipe } from "fp-ts/lib/function";
import { TaskQueue, TaskQueueOptions } from "../task-queue";
import {
  valfilter,
  objectToCamelCase,
  objectToSnakeCase,
  unique,
} from "../utils";
import { Cafe24APIError } from "../error";
import {
  AxiosHTTPAgent,
  HTTPAgent,
  HTTPFetchResponse,
  HTTPMethod,
  HTTPMutationMethod,
  HTTPQueryMethod,
  URLBuilder,
} from "../http-agent";
import { Logger, NoopLogger, LabeledLogger } from "../logging";
import ShortUniqueId from "short-unique-id";

/**
 * @description
 * Error policy for API requests.
 *
 * - `none`: If error occurs, throw an error.
 * - `all`: If error occurs, return the error response.
 *          Note that this option returns the error response
 *          only if the error is an AxiosError.
 *          Otherwise, it throws an error.
 */
export type ErrorPolicy = "none" | "all";

/**
 * @description
 * Fetch policy for API requests.
 *
 * - `none`: Execute the request immediately.
 * - `queue`: The request will be queued to {@link TaskQueue}.
 *            You should provide {@link Cafe24APIClientOptions.taskQueue} option
 *            when creating a client to use this option.
 */
export type FetchPolicy = "none" | "queue";

export interface ClientOptions {
  /**
   * @description
   * Cafe24 shopping mall ID.
   */
  mallId?: string;
  taskQueue?: TaskQueue | TaskQueueOptions | boolean;
  /** @default 'none' */
  errorPolicy?: ErrorPolicy;
  /** @default 'none' */
  fetchPolicy?: FetchPolicy;
  /**
   * @description
   * Fetch agent instance to use for making requests.
   *
   * @default AxiosHTTPAgent
   */
  agent?: HTTPAgent;
  /**
   * @description
   * Logger instance to use for logging.
   * If not provided, {@link NoopLogger} will be used.
   *
   * @default NoopLogger
   */
  logger?: Logger;
}

const { randomUUID: suuid } = new ShortUniqueId({ length: 6 });

export class Client {
  /**
   * @description
   * Unique identifier for the client
   * for utility purposes.
   */
  public readonly id: string;
  protected readonly taskQueue?: TaskQueue;
  protected readonly errorPolicy?: ErrorPolicy;
  protected readonly fetchPolicy?: FetchPolicy;
  protected readonly agent: HTTPAgent;
  protected readonly logger: Logger;
  /**
   * @description
   * Cafe24 shopping mall ID.
   */
  protected mallId?: string;
  protected isDisposed: boolean;

  get url() {
    if (!this.mallId) {
      throw new Error("mallId is not defined");
    }
    return `https://${this.mallId}.cafe24api.com`;
  }

  constructor(options: ClientOptions) {
    this.id = suuid();
    this.mallId = options.mallId;
    this.errorPolicy = options.errorPolicy || "none";
    this.fetchPolicy = options.fetchPolicy || "none";

    this.isDisposed = false;
    this.agent = options.agent ?? new AxiosHTTPAgent();
    const logger = new LabeledLogger({
      label: ["cafe24-api-client", `Client(${this.id})`],
      logger: options.logger ?? new NoopLogger(),
    });
    this.logger = logger;

    const defaultTaskQueueOptions: TaskQueueOptions = {
      logger: logger.extend("TaskQueue"),
    };
    if (options.taskQueue instanceof TaskQueue) {
      this.taskQueue = options.taskQueue;
    } else if (typeof options.taskQueue === "object") {
      this.taskQueue = new TaskQueue({
        ...defaultTaskQueueOptions,
        ...options.taskQueue,
      });
    } else if (options.taskQueue) {
      this.taskQueue = new TaskQueue(defaultTaskQueueOptions);
    } else {
      this.taskQueue = undefined;
    }
    this.taskQueue?.startRunning();
  }

  public get taskQueueIsEnabled(): boolean {
    return !!this.taskQueue;
  }

  public get disposed(): boolean {
    return this.isDisposed;
  }

  public copy() {
    return new Client({
      mallId: this.mallId,
      taskQueue: this.taskQueue,
      errorPolicy: this.errorPolicy,
      fetchPolicy: this.fetchPolicy,
    });
  }

  public dispose(): void {
    this.taskQueue?.stopRunning();
    this.isDisposed = true;
  }

  public getMallId() {
    return this.mallId;
  }

  public setMallId(mallId: string) {
    this.mallId = mallId;
    return this;
  }

  /**
   * @description
   * Create a request body for those APIs
   * that require a request body. (i.e. POST, PUT)
   *
   * @param data
   * @param fields Comma-separated list of fields to include in the response.
   */
  public createBody(data: Record<string, any>, fields?: string[]): any {
    const { shop_no = 1, ...request } = objectToSnakeCase(data) ?? {};
    const body = {
      shop_no,
      fields: fields?.join(","),
      request: pipe(
        request,
        valfilter(v => v !== undefined),
      ),
    };
    return pipe(
      body,
      valfilter(v => v !== undefined),
    );
  }

  /**
   * @description
   * Create a request query params for those APIs
   * that require a request query params. (i.e. GET, DELETE)
   *
   * @param data
   * @param fields Comma-separated list of fields to include in the response.
   */
  public createQueries(
    data: Record<string, any>,
    fields?: string[],
    embeds?: string[],
  ): Record<string, any> {
    const params = {
      fields: objectToSnakeCase(fields)?.join(","),
      embed: objectToSnakeCase(embeds)?.join(","),
      ...objectToSnakeCase(data),
    };
    return pipe(
      params,
      valfilter(v => v !== undefined),
    );
  }

  /**
   * @description
   * Create a request headers for API requests.
   */
  public createHeaders(headers?: Record<string, any>): Record<string, any> {
    return {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  public async createRequest<
    D extends Record<string, any>,
    R extends Record<string, any> = Record<string, any>,
  >(
    method: HTTPMethod,
    path: string,
    payload: D,
    options?: RequestOptions,
  ): Promise<R> {
    // If the client is disposed, throw an error
    if (this.isDisposed) {
      throw new Error("The client is disposed. Create a new client for use.");
    }

    const errorPolicy = options?.errorPolicy ?? this.errorPolicy;
    const fetchPolicy = options?.fetchPolicy ?? this.fetchPolicy;

    const formatSubstitutions = options?.format?.request ?? objectToSnakeCase;
    const formattedPath = new URLBuilder().build(
      path,
      formatSubstitutions(payload),
    );

    let fetcher: () => Promise<HTTPFetchResponse>;
    if (HTTPMethod.isQuery(method)) {
      fetcher = () =>
        this.createQueryRequest(method, formattedPath, payload, options);
    } else if (HTTPMethod.isMutation(method)) {
      fetcher = () =>
        this.createMutationRequest(method, formattedPath, payload, options);
    } else {
      throw new Error(`Unsupported method: ${method}`);
    }

    const withDebugger = <T extends HTTPFetchResponse>(
      callback: () => T | Promise<T>,
    ) => {
      return async (): Promise<T> => {
        const start = Date.now();
        this.logger.log(`requesting - ${method} ${formattedPath}`);
        const result = await callback();
        const end = Date.now();
        this.logger.log(
          `server responded with status ${result.status} - ` +
            `${method} ${formattedPath}`,
        );
        this.logger.debug(`took ${end - start}ms`);
        return result;
      };
    };

    let request: () => Promise<HTTPFetchResponse>;
    if (errorPolicy === "none") {
      request = withDebugger(async () => {
        const response = await fetcher();
        if (!response.ok) {
          throw Cafe24APIError.fromResonse(response);
        }
        return response;
      });
    } else {
      request = withDebugger(fetcher);
    }

    const resolve = async () => {
      const response = await request();
      const formatter = options?.format?.response ?? objectToCamelCase;
      return formatter(response.data);
    };

    if (this.taskQueueIsEnabled && fetchPolicy === "queue") {
      return await this.taskQueue?.enqueue(resolve);
    }

    return await resolve();
  }

  protected createQueryRequest(
    method: HTTPQueryMethod,
    path: string,
    payload: Record<string, any>,
    options?: RequestOptions,
  ) {
    const formatter = options?.format?.request ?? this.createQueries;

    const url = urljoin(this.url, path);
    const headers = this.createHeaders(options?.headers);
    const params = formatter(
      payload,
      options?.fields && unique(options.fields),
      options?.embed && unique(options.embed),
    );
    this.logger.verbose(`headers: ${JSON.stringify(headers, null, 2)}`);
    this.logger.verbose(`payload: ${JSON.stringify(params, null, 2)}`);
    this.logger.verbose(`options: ${JSON.stringify(options, null, 2)}`);

    return this.agent.fetch({
      url,
      method,
      headers,
      params,
      options: options?.requestConfig,
    });
  }

  protected createMutationRequest(
    method: HTTPMutationMethod,
    path: string,
    payload: Record<string, any>,
    options?: RequestOptions,
  ) {
    const formatter = options?.format?.request ?? this.createBody;

    const url = urljoin(this.url, path);
    const headers = this.createHeaders(options?.headers);
    const data = formatter(payload, options?.fields && unique(options.fields));
    this.logger.verbose(`headers: ${JSON.stringify(headers, null, 2)}`);
    this.logger.verbose(`payload: ${JSON.stringify(data, null, 2)}`);
    this.logger.verbose(`options: ${JSON.stringify(options, null, 2)}`);

    return this.agent.fetch({
      url,
      method,
      headers,
      data,
      options: options?.requestConfig,
    });
  }
}

export interface RequestOptions<
  Field extends string = string,
  Embed extends string = string,
> {
  /**
   * @description
   * List of fields to include in the response.
   */
  fields?: Field[];
  /**
   * @description
   * List of embed fields to include in the response.
   */
  embed?: Embed[];
  /**
   * @description
   * Additional headers to be included in the request.
   */
  headers?: Record<string, any>;
  /**
   * @description
   * Additional request configurations.
   */
  requestConfig?: any;
  fetchPolicy?: FetchPolicy;
  errorPolicy?: ErrorPolicy;
  /**
   * @description
   * Formatter function to format the request payload.
   *
   * If not given, default formatter will be used.
   */
  format?: {
    request?: Formatter;
    response?: Formatter;
  };
}

type Formatter = (
  data: Record<string, any>,
  fields?: string[],
  embeds?: string[],
) => any;
