import { events } from "./event-map";

declare module "./event-map" {
  export type events = {
    [K in keyof typeof events]: InstanceType<(typeof events)[K]>;
  };
}

export { events };
export * from "./types";
