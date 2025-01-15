import * as base from "../client";

export class Client extends base.Client {
  protected credentials: Partial<Credentials>;

  protected get password() {
    for (const key in this.credentials) {
      if (!this.credentials[key as keyof Credentials]) {
        throw new Error(`${key} is not defined`);
      }
    }
    return btoa(
      `${this.credentials.clientId}:${this.credentials.clientSecret}`,
    );
  }

  constructor(options: ClientOptions) {
    super(options);
    this.credentials = {
      clientId: options.clientId,
      clientSecret: options.clientSecret,
    };
  }

  public setCredentials(credentials: Credentials) {
    this.credentials = credentials;
    return this;
  }

  public override createHeaders(headers?: Record<string, any>): HeadersInit {
    return {
      Authorization: `Basic ${this.password}`,
      ...super.createHeaders(headers),
    };
  }
}

interface Credentials {
  clientId: string;
  clientSecret: string;
}

export interface ClientOptions
  extends base.ClientOptions,
    Partial<Credentials> {}

export interface RequestOptions extends base.RequestOptions {}
