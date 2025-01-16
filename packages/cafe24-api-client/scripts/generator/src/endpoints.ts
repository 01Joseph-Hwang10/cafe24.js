import { pipe } from "fp-ts/lib/function";
import { APISpec } from "../../collector/src/types";
import {
  ObjectLiteralProperty,
  TypescriptEndpointMethodWriter,
  TypescriptInterfaceGenerator,
  TypescriptObjectWriter,
  getOrElse,
  getOrEmpty,
  Schema,
  TypescriptJSDocWriter,
  ObjectType,
  ArrayType,
} from "internal";
import { map } from "fp-ts/lib/Array";
import { camel, pascal } from "case";

export function generateEndpointsModule(spec: APISpec) {
  const jsdoc = new TypescriptJSDocWriter();
  const interfaceGenerator = new TypescriptInterfaceGenerator();
  const endpointMethodWriter = new TypescriptEndpointMethodWriter();
  const objectWriter = new TypescriptObjectWriter();

  const scopes: Map<string, EvaluatableScope> = new Map();
  const request = {
    interfaces: [] as string[],
    embedTypes: [] as string[],
  };
  const response = {
    fieldTypes: [] as string[],
    interfaces: [] as string[],
  };

  for (const ns in spec) {
    for (const s in spec[ns]) {
      const scope = spec[ns][s];
      const endpoints: ObjectLiteralProperty[] = pipe(
        scope.endpoints,
        map(endpoint => {
          if (endpoint.request) {
            request.interfaces.push(
              generateInterfaceFromSchema(endpoint.request),
            );
            request.embedTypes.push(
              generateEmbedTypes(
                `${pascal(endpoint.name)}Embeds`,
                endpoint.request,
              ),
            );
          }
          if (endpoint.response) {
            response.interfaces.push(
              generateInterfaceFromSchema(endpoint.response),
            );
            response.fieldTypes.push(
              inferFieldTypes(
                `${pascal(endpoint.name)}Fields`,
                endpoint.response,
              ),
            );
          }

          const requestName =
            endpoint.request?.name && pascal(endpoint.request.name);
          const responseName =
            endpoint.response?.name && pascal(endpoint.response.name);

          return {
            type: "literal",
            content: endpointMethodWriter.write({
              method: endpoint.method,
              path: endpoint.path,
              names: {
                method: camel(endpoint.name),
                request: getOrElse(requestName, "any"),
                response: getOrElse(responseName, "any"),
                fields: `${pascal(endpoint.name)}Fields`,
                embeds: `${pascal(endpoint.name)}Embeds`,
              },
              description:
                getOrEmpty(
                  endpoint.description &&
                    `@description\n${endpoint.description}\n\n`,
                ) +
                getOrEmpty(
                  endpoint.scopes &&
                    `Scopes:\n${endpoint.scopes.map(scope => `- ${scope}`).join("\n")}\n\n`,
                ) +
                getOrEmpty(endpoint.reference && `@see ${endpoint.reference}`),
            }),
          };
        }),
      );
      const scopeName = s.replaceAll("_", "").replaceAll("-", "");
      const methods: EvaluatableScope = {
        name: scopeName,
        endpoints,
        description:
          getOrEmpty(
            scope.description && `@description\n${scope.description}`,
          ) + getOrEmpty(scope.reference && `\n\n@see ${scope.reference}`),
      };
      if (scopes.has(scopeName)) {
        scopes.get(scopeName)!.endpoints.push(...endpoints);
      } else {
        scopes.set(scopeName, methods);
      }
    }
  }

  return (
    "/* eslint-disable @typescript-eslint/no-unused-vars */\n" +
    "/* eslint-disable @typescript-eslint/ban-types */\n" +
    "import {\n" +
    "  Cafe24Boolean,\n" +
    "  Cafe24Date,\n" +
    "  Cafe24Enum,\n" +
    "  Cafe24Datetime,\n" +
    '} from "cafe24-types";\n' +
    'import * as base from "../client";\n\n\n' +
    "export type Endpoints = ReturnType<typeof Endpoints>;\n" +
    "export const Endpoints = (self: base.Client) => (" +
    objectWriter.write({
      properties: Array.from(scopes.values()).map(scope => ({
        type: "field",
        name: scope.name,
        value: objectWriter.write({
          properties: scope.endpoints,
        }),
        description: scope.description,
      })),
    }) +
    ");\n\n" +
    request.interfaces.join("\n\n") +
    "\n\n" +
    request.embedTypes.join("\n\n") +
    "\n\n" +
    response.interfaces.join("\n\n") +
    "\n\n" +
    response.fieldTypes.join("\n\n") +
    "\n\n"
  );

  function generateInterfaceFromSchema(schema: Schema) {
    return interfaceGenerator.generateFromSchema(pascal(schema.name), schema);
  }

  function generateEmbedTypes(name: string, schema: Schema) {
    if (schema.embeds.length === 0) {
      return `type ${name} = string;`;
    } else {
      const embedLiterals = schema.embeds.map(
        ({ name, description }) =>
          getOrEmpty(description && jsdoc.write(description) + "\n") +
          `| "${camel(name)}"\n`,
      );
      return `type ${name} = \n ${embedLiterals.join("\n")};\n`;
    }
  }

  function inferFieldTypes(name: string, schema: Schema) {
    const responseName = pascal(schema.name);
    const firstProperty = schema.properties.at(0);
    if (firstProperty?.type instanceof ObjectType) {
      return `type ${name} = keyof ${responseName}['${camel(firstProperty.name)}']`;
    } else if (
      firstProperty?.type instanceof ArrayType &&
      firstProperty.type.element instanceof ObjectType
    ) {
      return `type ${name} = keyof ${responseName}['${camel(firstProperty.name)}'][number]`;
    } else {
      return `type ${name} = string;`;
    }
  }
}

interface EvaluatableScope {
  name: string;
  endpoints: ObjectLiteralProperty[];
  description?: string;
}
