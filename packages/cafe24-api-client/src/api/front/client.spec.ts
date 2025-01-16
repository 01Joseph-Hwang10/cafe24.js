import { Client } from "./index";
import { ClientOptions } from "./client";

describe("front.Client", () => {
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
    it("should create headers with clientId", () => {
      const client = createClient();
      const headers = client.createHeaders();
      expect(headers).toEqual({
        "Content-Type": "application/json",
        "X-Cafe24-Client-Id": "test-client-id",
      });
    });
  });

  describe("methods", () => {
    it("should be able to call some methods", async () => {
      const fetch = createFetch();
      const client = createClient({ fetch });

      await client.products.retrieveAListOfProducts(
        {},
        {
          fields: ["adultCertification", "approveStatus"],
          embed: ["additionalimages", "benefits"],
        },
      );
      await client.mainsproducts.retrieveAListOfProductsInMainCategory(
        {} as any,
      );
      await client.carts.createAShoppingCart({} as any);
    });
  });
});

function createClient(opts?: ClientOptions) {
  return new Client({
    mallId: "test",
    clientId: "test-client-id",
    ...opts,
  });
}

function createFetch() {
  return vi
    .fn()
    .mockResolvedValue({ json: vi.fn().mockResolvedValue({}), ok: true });
}
