import { pipe } from "fp-ts/lib/function";
import * as base from "../client";
import { valfilter } from "../../utils";

export class Client extends base.Client {
  protected accessToken?: string;

  constructor(options: ClientOptions) {
    super(options);
    this.accessToken = options.accessToken;
  }

  public setAccessToken(token: string) {
    this.accessToken = token;
    return this;
  }

  public override createHeaders(headers?: Record<string, any>): HeadersInit {
    return pipe(
      {
        Authorization: this.accessToken && `Bearer ${this.accessToken}`,
        ...super.createHeaders(headers),
      },
      valfilter(v => v !== undefined),
    );
  }

  public override async createRequest<
    T extends Record<string, any>,
    R extends Record<string, any> = Record<string, any>,
  >(
    method: base.HTTPMethod,
    path: string,
    payload: Record<string, any>,
    options?: RequestOptions<T>,
  ): Promise<R> {
    if (options?.accessToken) {
      options.headers = this.createHeaders({
        Authorization: `Bearer ${options.accessToken}`,
        ...options.headers,
      });
    }
    const resolved = await super.createRequest(method, path, payload, options);
    return resolved as R;
  }
}

export interface ClientOptions extends base.ClientOptions {
  accessToken?: string;
}

export interface RequestOptions<Response extends Record<string, any>>
  extends base.RequestOptions<Response> {
  accessToken?: string;
}
