import { events } from "./event-map";

describe("events", () => {
  it("should be able to instantiate events from event map", () => {
    const OnAppDeleted = events[90077];
    const data = new OnAppDeleted({
      eventNo: 90077,
      resource: {
        mallId: "test",
        clientId: "test",
        appName: "test",
        deletedDate: "test",
      },
    });
    expect(data).toBeInstanceOf(OnAppDeleted);
  });
});
