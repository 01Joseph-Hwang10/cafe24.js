import { Schema } from "internal";

export interface Endpoint {
  name: string;
  description?: string;
  path: string;
  method: string;
  scopes: string[];
  rateLimit: number;
  request?: Schema;
  response?: Schema;
  reference?: string;
}

export interface APISpec {
  [namespace: string]: {
    [scope: string]: {
      /**
       * @description
       * In format of "namespace/scope" API.
       */
      id: string;
      description?: string;
      reference?: string;
      schema?: Schema;
      endpoints: Endpoint[];
    };
  };
}
