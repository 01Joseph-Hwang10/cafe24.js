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
} from "internal";
import { map } from "fp-ts/lib/Array";
import { camel, pascal } from "case";

export function generateEndpointsModule(spec: APISpec) {
  const interfaceGenerator = new TypescriptInterfaceGenerator();
  const generateInterfaceFromSchema = (schema: Schema) =>
    interfaceGenerator.generateFromSchema(pascal(schema.name), schema);

  const endpointMethodWriter = new TypescriptEndpointMethodWriter();
  const objectWriter = new TypescriptObjectWriter();

  const scopes: Map<string, EvaluatableScope> = new Map();
  const requests: string[] = [];
  const responses: string[] = [];

  for (const ns in spec) {
    for (const s in spec[ns]) {
      const scope = spec[ns][s];
      const endpoints: ObjectLiteralProperty[] = pipe(
        scope.endpoints,
        map(endpoint => {
          if (endpoint.request) {
            requests.push(generateInterfaceFromSchema(endpoint.request));
          }
          if (endpoint.response) {
            responses.push(generateInterfaceFromSchema(endpoint.response));
          }
          const requestName = getOrElse(
            endpoint.request?.name && pascal(endpoint.request.name),
            "any",
          );
          const responseName = getOrElse(
            endpoint.response?.name && pascal(endpoint.response.name),
            "any",
          );

          return {
            type: "literal",
            content: endpointMethodWriter.write({
              name: camel(endpoint.name),
              method: endpoint.method,
              path: endpoint.path,
              request: requestName,
              response: responseName,
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
    requests.join("\n\n") +
    "\n\n" +
    responses.join("\n\n") +
    "\n\n"
  );
}

interface EvaluatableScope {
  name: string;
  endpoints: ObjectLiteralProperty[];
  description?: string;
}
