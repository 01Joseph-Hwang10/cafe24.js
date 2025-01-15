import qs from "qs";
import fetch from "cross-fetch";
import urljoin from "url-join";
import { pipe } from "fp-ts/lib/function";
import { TaskQueue, TaskQueueOptions } from "../task-queue";
import { valfilter, objectToCamelCase, objectToSnakeCase } from "../utils";
import { map } from "fp-ts/lib/Array";
import { Cafe24APIError } from "../error";

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
  mallId?: string;
  taskQueue?: TaskQueue | TaskQueueOptions | boolean;
  /** @default 'none' */
  errorPolicy?: ErrorPolicy;
  /** @default 'none' */
  fetchPolicy?: FetchPolicy;
  fetch?: typeof fetch;
}

export class Client {
  protected mallId?: string;
  protected readonly taskQueue?: TaskQueue;
  protected readonly errorPolicy?: ErrorPolicy;
  protected readonly fetchPolicy?: FetchPolicy;
  protected readonly fetch: typeof fetch;
  protected isDisposed: boolean;

  get url() {
    if (!this.mallId) {
      throw new Error("mallId is not defined");
    }
    return `https://${this.mallId}.cafe24api.com`;
  }

  constructor(options: ClientOptions) {
    this.mallId = options.mallId;
    this.errorPolicy = options.errorPolicy || "none";
    this.fetchPolicy = options.fetchPolicy || "none";

    if (options.taskQueue instanceof TaskQueue) {
      this.taskQueue = options.taskQueue;
    } else if (typeof options.taskQueue === "object") {
      this.taskQueue = new TaskQueue(options.taskQueue);
    } else if (options.taskQueue) {
      this.taskQueue = new TaskQueue();
    } else {
      this.taskQueue = undefined;
    }
    this.taskQueue?.startRunning();

    this.isDisposed = false;
    this.fetch = options.fetch ?? fetch;
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
  public createBody(
    data: Record<string, any>,
    fields?: string[],
  ): Record<string, any> {
    const { shop_no = 1, ...request } = data ?? {};
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
   * Create a request params for those APIs
   * that require a request params. (i.e. GET, DELETE)
   *
   * @param data
   * @param fields Comma-separated list of fields to include in the response.
   */
  public createParams(
    data: Record<string, any>,
    fields?: string[],
  ): Record<string, any> {
    const params = {
      fields: fields?.join(","),
      ...data,
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
  public createHeaders(headers?: Record<string, any>): HeadersInit {
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
    payload: Record<string, any>,
    options?: RequestOptions<D>,
  ): Promise<R> {
    // If the client is disposed, throw an error
    if (this.isDisposed) {
      throw new Error("The client is disposed. Create a new client for use.");
    }

    const errorPolicy = options?.errorPolicy ?? this.errorPolicy;
    const fetchPolicy = options?.fetchPolicy ?? this.fetchPolicy;

    const formattedPayload = objectToSnakeCase(payload);
    const formattedPath = pipe(
      path.split("/"),
      map(
        segment =>
          (segment.startsWith("{") && formattedPayload[segment.slice(1, -1)]) ||
          segment,
      ),
      segments => segments.join("/"),
    );

    let request: () => Promise<Response>;
    if (isQuery(method)) {
      request = () =>
        this.createQueryRequest(
          method,
          formattedPath,
          formattedPayload,
          options,
        );
    } else if (isMutation(method)) {
      request = () =>
        this.createMutationRequest(
          method,
          formattedPath,
          formattedPayload,
          options,
        );
    } else {
      throw new Error(`Unsupported method: ${method}`);
    }

    if (errorPolicy === "none") {
      const originalRequest = request;
      request = async () => {
        const response = await originalRequest();
        if (!response.ok) {
          const error = await Cafe24APIError.fromResonse(response);
          throw error;
        }
        return response;
      };
    }

    const resolve = async () => {
      const response = await request();
      const payload = await response.json().catch(() => null);
      if (payload) {
        return objectToCamelCase(payload);
      }
      return await response.text();
    };

    if (this.taskQueueIsEnabled && fetchPolicy === "queue") {
      return await this.taskQueue?.enqueue(resolve);
    }

    return await resolve();
  }

  protected async createQueryRequest<T extends Record<string, any>>(
    method: HTTPQueryMethod,
    path: string,
    payload: Record<string, any>,
    options?: RequestOptions<T>,
  ) {
    const formatter = options?.format ?? this.createParams;

    const url = urljoin(this.url, path);
    const headers = this.createHeaders(options?.headers);
    const params = formatter(payload, options?.fields as string[] | undefined);

    return this.fetch(`${url}?${qs.stringify(params, { encode: false })}`, {
      method,
      headers,
      ...options?.requestConfig,
    });
  }

  protected async createMutationRequest<T extends Record<string, any>>(
    method: HTTPMutationMethod,
    path: string,
    payload: Record<string, any>,
    options?: RequestOptions<T>,
  ) {
    const formatter = options?.format ?? this.createBody;

    const url = urljoin(this.url, path);
    const headers = this.createHeaders(options?.headers);
    const body = formatter(payload, options?.fields as string[] | undefined);

    return this.fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
      ...options?.requestConfig,
    });
  }
}

export type HTTPMethod = HTTPQueryMethod | HTTPMutationMethod;

type HTTPQueryMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE";

type HTTPMutationMethod = "POST" | "PUT" | "PATCH";

function isQuery(method: HTTPMethod): method is HTTPQueryMethod {
  return !isMutation(method);
}

function isMutation(method: HTTPMethod): method is HTTPMutationMethod {
  return ["POST", "PUT", "PATCH"].includes(method);
}

export interface RequestOptions<Input extends Record<string, any>> {
  /**
   * @description
   * List of fields to include in the response.
   */
  fields?: (keyof Input)[];
  /**
   * @description
   * Additional headers to be included in the request.
   */
  headers?: Record<string, any>;
  /**
   * @description
   * Additional request configurations.
   */
  requestConfig?: RequestInit;
  fetchPolicy?: FetchPolicy;
  errorPolicy?: ErrorPolicy;
  /**
   * @description
   * Formatter function to format the request payload.
   *
   * If not given, default formatter will be used.
   */
  format?: Formatter;
}

type Formatter = (data: Record<string, any>, fields?: string[]) => any;
