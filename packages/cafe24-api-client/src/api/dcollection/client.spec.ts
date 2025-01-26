import btoa from "btoa";
import { Client } from "./index";
import { ClientOptions } from "./client";
import { NoopHTTPAgent } from "../../http-agent";

const credentials = {
  clientId: "test-client-id",
  clientSecret: "test-client-secret",
};

describe("dcollection.Client", () => {
  describe("constructor", () => {
    let client: Client;
    it("should create instance", () => {
      client = createClient();
      expect(client).toBeInstanceOf(Client);
    });

    it("should have mallId", () => {
      expect(client.getMallId()).toEqual("test");
    });

    it("should have url", () => {
      expect(client.url).toEqual("https://test.cafe24api.com");
    });
  });

  describe("createHeaders", () => {
    it("should create headers with basic auth header", () => {
      const client = createClient();
      const headers = client.createHeaders();

      expect(headers).toEqual({
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${credentials.clientId}:${credentials.clientSecret}`)}`,
      });
    });
  });

  describe("methods", () => {
    it("should call some methods", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent });

      await client.products.retrieveAListOfProducts({} as any);
      await client.productsstandardtags.retrieveAListOfProductTagProperties(
        {} as any,
      );
    });
  });
});

function createClient(opts?: ClientOptions) {
  return new Client({
    mallId: "test",
    ...credentials,
    ...opts,
  });
}

function createHTTPAgent() {
  return new NoopHTTPAgent();
}
