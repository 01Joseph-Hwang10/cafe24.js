import { WebhookDefinition } from "./webhook-definition";

export interface WebhookSpec {
  events: WebhookDefinition[];
}
