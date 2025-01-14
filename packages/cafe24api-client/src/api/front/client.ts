import { pipe } from "fp-ts/lib/function";
import * as base from "../client";
import { valfilter } from "../../utils";

export class Client extends base.Client {
  protected clientId?: string;

  constructor(options: ClientOptions) {
    super(options);
    this.clientId = options.clientId;
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

  public setClientId(clientId: string) {
    this.clientId = clientId;
    return this;
  }

  public override createHeaders(headers?: Record<string, any>): HeadersInit {
    return pipe(
      {
        "X-Cafe24-Client-Id": this.clientId,
        ...super.createHeaders(headers),
      },
      valfilter(v => v !== undefined),
    );
  }
}

export interface ClientOptions extends base.ClientOptions {
  clientId?: string;
}
