import { Cafe24FrontSDK } from "./sdk";

describe("Cafe24FrontSDK", () => {
  let sdk: Cafe24FrontSDK;

  it("should be defined", () => {
    const instance = new Proxy(
      {},
      {
        get: () => {
          return () => {};
        },
      },
    );
    sdk = new Cafe24FrontSDK({ client_id: "test_client_id" }, instance);
    expect(sdk).toBeDefined();
  });

  it("should be able to call methods", () => {
    sdk.MALL_ID;
    sdk.getCustomerIDInfo();
    sdk.getOrderDetailInfo({
      shop_no: "test_shop_no",
      order_id: "test_order_id",
    });
  });
});
