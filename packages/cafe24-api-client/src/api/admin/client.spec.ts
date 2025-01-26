import { Client } from "./index";
import { ClientOptions } from "./client";
import { NoopHTTPAgent } from "../../http-agent";

describe("admin.Client", () => {
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
    it("should create headers with accessToken", () => {
      const client = createClient();
      const accessToken = "test-access-token";
      client.setAccessToken(accessToken);
      const headers = client.createHeaders({});
      expect(headers).toEqual({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      });
    });

    it("should create headers with authorization", () => {
      const client = createClient();
      const auth = "test-auth";
      const headers = client.createHeaders({ Authorization: auth });
      expect(headers).toEqual({
        "Content-Type": "application/json",
        Authorization: auth,
      });
    });
  });

  describe("copy", () => {
    it(
      "should copy it in reasonable time",
      () => {
        const client = createClient();
        const copy = client.copy();
        expect(copy).not.toBe(client);
      },
      { timeout: 100 },
    );
  });

  describe("methods", () => {
    it("should call some methods", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent, accessToken: "token" });

      await client.activitylogs.retrieveAListOfActionLogs({} as any);
      await client.products.createAProduct({} as any);
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
