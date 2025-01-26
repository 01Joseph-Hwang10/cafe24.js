import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from "axios";
import { HTTPAgent, HTTPFetchRequest, HTTPFetchResponse } from "../agent";

/**
 * @description
 * Axios HTTP agent for making requests.
 */
export class AxiosHTTPAgent extends HTTPAgent {
  constructor(protected readonly agent: AxiosInstance = axios) {
    super();
  }

  override async fetch<D = any>(
    config: HTTPFetchRequest<Partial<AxiosRequestConfig<D>>>,
  ): Promise<HTTPFetchResponse> {
    const { url, method, headers, params, data, options } = config;
    try {
      const response = await this.agent.request({
        url,
        method,
        headers,
        params,
        data,
        ...options,
      });
      return {
        ok: true,
        config,
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as Record<string, string>,
        extensions: {
          config: response.config,
          request: response.request,
        },
      };
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          ok: false,
          config,
          data: error.response?.data,
          status: error.response?.status ?? 500,
          statusText: error.response?.statusText ?? "Internal Server Error",
          headers: error.response?.headers as Record<string, string>,
          extensions: {
            config: error.config,
            request: error.request,
          },
        };
      }
      throw error;
    }
  }
}
