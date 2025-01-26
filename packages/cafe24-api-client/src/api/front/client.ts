import { pipe } from "fp-ts/lib/function";
import * as base from "../client";
import { valfilter } from "../../utils";

export class Client extends base.Client {
  protected clientId?: string;

  constructor(options: ClientOptions) {
    super(options);
    this.clientId = options.clientId;
  }

  public setClientId(clientId: string) {
    this.clientId = clientId;
    return this;
  }

  public override createHeaders(
    headers?: Record<string, any>,
  ): Record<string, any> {
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

export interface RequestOptions<
  Field extends string = string,
  Embed extends string = string,
> extends base.RequestOptions<Field, Embed> {}
