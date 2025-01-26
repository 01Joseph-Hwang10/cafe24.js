import { HTTPAgent, HTTPFetchRequest, HTTPFetchResponse } from "../agent";

/**
 * @description
 * A no-op HTTP agent that always returns a successful response.
 *
 * This agent is for testing purposes.
 * Do not use this agent other than testing.
 */
export class NoopHTTPAgent extends HTTPAgent {
  constructor() {
    super();
  }

  override fetch(config: HTTPFetchRequest): Promise<HTTPFetchResponse> {
    return Promise.resolve({
      ok: true,
      config,
      data: undefined,
      status: 200,
      statusText: "OK",
      headers: {},
    });
  }
}
