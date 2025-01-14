import * as t from "./types";

describe("types", () => {
  it("should be able to instantiate types", () => {
    const data = new t.OnAppDeleted({
      eventNo: 90077,
      resource: {
        mallId: "test",
        clientId: "test",
        appName: "test",
        deletedDate: "test",
      },
    });
    expect(data).toBeInstanceOf(t.OnAppDeleted);
  });
});
