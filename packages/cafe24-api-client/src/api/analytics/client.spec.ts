import { NoopHTTPAgent } from "../../http-agent";
import { ClientOptions } from "./client";
import { Client } from "./index";

describe("analytics.Client", () => {
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

  describe("methods", () => {
    it("should call some methods", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent, accessToken: "token" });

      await client.adeffectaddetails.listAllAdeffectAddetails({} as any);
      await client.cartsaction.listAllCartsAction({} as any);
    });
  });
});

function createClient(opts?: ClientOptions) {
  return new Client({
    mallId: "test",
    ...opts,
  });
}

function createHTTPAgent() {
  return new NoopHTTPAgent();
}
