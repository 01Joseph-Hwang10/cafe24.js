import { Client, ClientOptions } from "./client";
import { HTTPFetchRequest, NoopHTTPAgent } from "../http-agent";

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

  describe("createQueries", () => {
    it("should create queries", () => {
      const client = createClient();
      const queries = client.createQueries(data, fields);
      expect(queries).toEqual({
        fields: fields.join(","),
        ...data,
      });
    });
  });

  describe("createRequest", () => {
    it("should create request with GET method", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent });

      const result = await client.createRequest("GET", "/test", data, options);
      expect(result).toEqual(response);
      expect(agent.fetch).toHaveBeenCalledWith({
        url: expectedUrl,
        method: "GET",
        headers: options.headers,
        params: expectedParams,
      });
    });

    it("should create request with DELETE method", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent });

      const result = await client.createRequest(
        "DELETE",
        "/test",
        data,
        options,
      );
      expect(result).toEqual(response);
      expect(agent.fetch).toHaveBeenCalledWith({
        url: expect.any(String),
        method: "DELETE",
        headers: options.headers,
        params: expectedParams,
      });
    });

    it("should create request with POST method", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent });

      const result = await client.createRequest("POST", "/test", data, options);
      expect(result).toEqual(response);
      expect(agent.fetch).toHaveBeenCalledWith({
        url: expectedUrl,
        method: "POST",
        data: expectedBody,
        headers: options.headers,
      });
    });

    it("should create request with PUT method", async () => {
      const agent = createHTTPAgent();
      const client = createClient({ agent });

      const result = await client.createRequest("PUT", "/test", data, options);
      expect(result).toEqual(response);
      expect(agent.fetch).toHaveBeenCalledWith({
        url: expectedUrl,
        method: "PUT",
        data: expectedBody,
        headers: options.headers,
      });
    });
  });
});

function createClient(opts?: ClientOptions) {
  return new Client({ mallId: "test", taskQueue: true, ...opts });
}

function createHTTPAgent() {
  const agent = new NoopHTTPAgent();
  vi.spyOn(agent, "fetch").mockImplementation((config: HTTPFetchRequest) =>
    Promise.resolve({
      ok: true,
      config,
      data: response,
      status: 200,
      statusText: "OK",
      headers: {},
    }),
  );
  return agent;
}
