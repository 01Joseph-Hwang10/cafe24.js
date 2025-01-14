import qs from "qs";
import { Client, ClientOptions } from "./client";

const data = { foo: "bar" };
const fields = ["foo", "bar"];
const options = {
  fields,
  headers: { "Content-Type": "application/json" },
};
const response = { data };

const expectedUrl = "https://test.cafe24api.com/test";
const expectedParams = {
  fields: ["foo", "bar"].join(","),
  foo: "bar",
};
const expectedBody = {
  shop_no: 1,
  fields: ["foo", "bar"].join(","),
  request: {
    foo: "bar",
  },
};

describe("base.Client", () => {
  describe("constructor", () => {
    let client: Client;
    it("should create instance", () => {
      client = new Client({ mallId: "test" });
      expect(client).toBeInstanceOf(Client);
    });

    it("should have mallId", () => {
      expect(client.getMallId()).toEqual("test");
    });

    it("should have url", () => {
      expect(client.url).toEqual("https://test.cafe24api.com");
    });
  });

  describe("createBody", () => {
    it("should create body with default shop_no", () => {
      const client = createClient();
      const body = client.createBody(data, fields);
      expect(body).toEqual({
        shop_no: 1,
        fields: fields.join(","),
        request: data,
      });
    });

    it("should create body with custom shop_no", () => {
      const client = createClient();
      const body = client.createBody({ foo: "bar", shop_no: 2 }, fields);
      expect(body).toEqual({
        shop_no: 2,
        fields: fields.join(","),
        request: data,
      });
    });
  });

  describe("createParams", () => {
    it("should create params", () => {
      const client = createClient();
      const params = client.createParams(data, fields);
      expect(params).toEqual({
        ...data,
        fields: fields.join(","),
      });
    });
  });

  describe("createRequest", () => {
    it("should create request with GET method", async () => {
      const fetch = createFetch();
      const client = createClient({ fetch });

      const result = await client.createRequest("GET", "/test", data, options);
      expect(result).toEqual(response);
      expect(fetch).toHaveBeenCalledWith(
        `${expectedUrl}?${qs.stringify(expectedParams, { encode: false })}`,
        {
          method: "GET",
          headers: options.headers,
        },
      );
    });

    it("should create request with DELETE method", async () => {
      const fetch = createFetch();
      const client = createClient({ fetch });

      const result = await client.createRequest(
        "DELETE",
        "/test",
        data,
        options,
      );
      expect(result).toEqual(response);
      expect(fetch).toHaveBeenCalledWith(expect.any(String), {
        method: "DELETE",
        headers: options.headers,
      });
    });

    it("should create request with POST method", async () => {
      const fetch = createFetch();
      const client = createClient({ fetch });

      const result = await client.createRequest("POST", "/test", data, options);
      expect(result).toEqual(response);
      expect(fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "POST",
        body: JSON.stringify(expectedBody),
        headers: options.headers,
      });
    });

    it("should create request with PUT method", async () => {
      const fetch = createFetch();
      const client = createClient({ fetch });

      const result = await client.createRequest("PUT", "/test", data, options);
      expect(result).toEqual(response);
      expect(fetch).toHaveBeenCalledWith(expectedUrl, {
        method: "PUT",
        body: JSON.stringify(expectedBody),
        headers: options.headers,
      });
    });
  });
});

function createClient(opts?: ClientOptions) {
  return new Client({ mallId: "test", taskQueue: true, ...opts });
}

function createFetch() {
  return vi
    .fn()
    .mockResolvedValue({ json: vi.fn().mockResolvedValue(response), ok: true });
}
