import { ArrayType, LiteralType, ObjectType, Schema } from "internal";
import { ParameterDefinitionTable } from "./parameter-definition";
import {
  WebhookDefinition,
  WebhookDefinitionTable,
} from "./webhook-definition";

export function collect() {
  return {
    events: Array.from<WebhookDefinition>([]).concat(
      collectAppWebhooks(),
      collectShopWebhooks(),
    ),
  };
}

function collectAppWebhooks() {
  const parameterDeinitions = new ParameterDefinitionTable(
    document
      .querySelector("div#title2 > h2")!
      .nextElementSibling!.querySelector<HTMLTableElement>(":scope > table")!,
  );

  const webhookDefinitions = Array.from(
    document.querySelectorAll<HTMLTableElement>(
      "div#title1 > div.mEditBoard > table",
    ),
  )
    .map(table => new WebhookDefinitionTable(table))
    .map(({ defs }) => defs)
    .flat();

  return hydrateDefinitions(webhookDefinitions, parameterDeinitions);
}

function collectShopWebhooks() {
  const parameterDeinitions = new ParameterDefinitionTable(
    document
      .querySelector("div#title4")!
      .nextElementSibling!.querySelector<HTMLTableElement>(":scope > table")!,
  );

  const webhookDefinitions = Array.from(
    document.querySelectorAll<HTMLTableElement>(
      "div#title2 > div.mEditBoard > table",
    ),
  )
    .slice(1, -1)
    .map(table => new WebhookDefinitionTable(table))
    .map(({ defs }) => defs)
    .flat();

  return hydrateDefinitions(webhookDefinitions, parameterDeinitions);
}

function hydrateDefinitions(
  definitions: WebhookDefinition[],
  parameterDeinitions: ParameterDefinitionTable,
) {
  const lookup = parameterDeinitions.toRecord();

  for (const definition of definitions) {
    definition.schema = hydrateSchema(definition.schema, {
      lookup,
    });

    for (const property of definition.schema.properties) {
      if (property.name === "event_no") {
        property.type = new LiteralType(definition.eventNo.toString());
        property.description = undefined;
      }
    }
  }

  return definitions;
}

function hydrateSchema(schema: Schema, opts: { lookup: Record<string, any> }) {
  const { lookup } = opts;

  for (const property of schema.properties) {
    const description = lookup[property.name];
    if (description) {
      property.description = `@description\n${description}`;
    }

    if (property.type instanceof ObjectType) {
      property.type.schema = hydrateSchema(property.type.schema, opts);
    } else if (
      property.type instanceof ArrayType &&
      property.type.element instanceof ObjectType
    ) {
      property.type.element.schema = hydrateSchema(
        property.type.element.schema,
        opts,
      );
    } else {
      // No further hydration needed
    }
  }

  return schema;
}
