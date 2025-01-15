/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import type { RequestOptions } from "../client";
import { Client as BaseClient, type ClientOptions } from "./client";
import { Endpoints } from "./generated/endpoints";

class Client extends BaseClient {
  constructor(options: ClientOptions) {
    super(options);
    Object.assign(this, Endpoints(this));
  }

  override copy() {
    return new Client({
      mallId: this.mallId,
      taskQueue: this.taskQueue,
      errorPolicy: this.errorPolicy,
      fetchPolicy: this.fetchPolicy,
      clientId: this.clientId,
    });
  }
}

interface Client extends Endpoints {}

export { Client, ClientOptions, RequestOptions };
