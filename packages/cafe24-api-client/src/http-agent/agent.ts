/**
 * @description
 * HTTP agent for making requests.
 *
 * Implement this class to create custom HTTP agent.
 */
export abstract class HTTPAgent {
  abstract fetch(config: HTTPFetchRequest): Promise<HTTPFetchResponse>;
}

export interface HTTPFetchRequest<
  Options extends Record<string, any> = Record<string, any>,
> {
  url: string;
  method: HTTPMethod;
  headers?: Record<string, string>;
  /**
   * @description
   * Record that will be serialized to query string
   */
  params?: Record<string, any>;
  /**
   * @description
   * Record that will be serialized to request body
   */
  data?: Record<string, any>;
  /**
   * @description
   * Extra options for each fetch provider
   */
  options?: Options;
}

export interface HTTPFetchResponse<
  D = any,
  E extends Record<string, any> = Record<string, any>,
> {
  ok: boolean;
  config: HTTPFetchRequest;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: D;
  extensions?: E;
}

export type HTTPMethod = HTTPQueryMethod | HTTPMutationMethod;

export namespace HTTPMethod {
  export function isQuery(method: HTTPMethod): method is HTTPQueryMethod {
    return !isMutation(method);
  }

  export function isMutation(method: HTTPMethod): method is HTTPMutationMethod {
    return ["POST", "PUT", "PATCH"].includes(method);
  }
}

export type HTTPQueryMethod =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE";

export type HTTPMutationMethod = "POST" | "PUT" | "PATCH";
