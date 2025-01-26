import { HTTPFetchResponse } from "./http-agent";

export class Cafe24APIError extends Error {
  public readonly status: number;
  public readonly statusText: string;

  static fromResonse(response: HTTPFetchResponse) {
    return new Cafe24APIError({
      status: response.status,
      statusText: response.statusText,
      message: response.data?.error?.message ?? JSON.stringify(response.data),
    });
  }

  constructor(options: {
    status: number;
    statusText: string;
    message: string;
  }) {
    const { status, statusText, message } = options;
    super(message);
    this.status = status;
    this.statusText = statusText;
  }
}
