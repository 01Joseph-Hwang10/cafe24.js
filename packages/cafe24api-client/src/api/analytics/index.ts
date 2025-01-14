/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { Auth } from "../auth";
import {
  Client as BaseClient,
  type ClientOptions,
  type RequestOptions,
} from "./client";
import { Endpoints } from "./generated/endpoints";

class Client extends BaseClient {
  constructor(options: ClientOptions) {
    super(options);
    Object.assign(this, Auth(this));
    Object.assign(this, Endpoints(this));
  }
}

interface Client extends Auth, Endpoints {}

export { Client, ClientOptions, RequestOptions };
