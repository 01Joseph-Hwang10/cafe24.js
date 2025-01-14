import * as acorn from "acorn";
import * as walk from "acorn-walk";
import * as astring from "astring";
import { ObjectExpression } from "acorn";
import { lower } from "case";
import { Schema } from "internal";
import { APISpec } from "./types";
import { KeyValueTable, KeyValueTableConverter, parseHTML } from "./request";
import { SchemaInferrer } from "./response";

export function collect() {
  const spec: APISpec = {};
  const kvTableConverter = new KeyValueTableConverter();
  const schemaInferrer = new SchemaInferrer();

  //
  // Collect namespaces
  // We exclude first element because it is an introduction
  //
  const [, ...namespaces] = Array.from(
    document.querySelectorAll<HTMLLIElement>("div#toc > li"),
  );

  for (const namespace of namespaces) {
    //
    // Create namespace
    //
    const ns = lower(
      namespace.querySelector<HTMLHeadingElement>(":scope > h4")!.innerText,
    );
    spec[ns] = {};

    //
    // Collect scopes
    //
    const scopes = Array.from(namespace.querySelectorAll(":scope > ul > li"));
    for (const scope of scopes) {
      //
      // Create scope
      //
      const scopeReference = new URL(
        scope.querySelector<HTMLAnchorElement>(":scope > a")!.href,
      );
      const scopeId = scopeReference.hash.slice(1);
      const scopeDescription = document
        .querySelector<HTMLHeadingElement>(`#${scopeId}`)!
        .closest<HTMLDivElement>("div.description")!
        .querySelector<HTMLParagraphElement>(":scope > p")?.innerText;
      spec[ns][scopeId] = {
        id: `${ns}/${scopeId}`,
        description: scopeDescription,
        reference: scopeReference.toString(),
        endpoints: [],
      };
      console.log(`Collecting Scope: ${ns}/${scopeId}`);

      //
      // Collect schema & endpoint IDs
      //
      const methods = Array.from(scope.querySelectorAll(":scope > ul > li"));
      const refs = methods.map(
        method =>
          new URL(method.querySelector<HTMLAnchorElement>(":scope > a")!.href),
      );
      const schema =
        refs.at(0)?.toString().endsWith("properties") && refs.at(0);
      const endpoints = schema ? refs.slice(1) : refs;

      //
      // Collect schema (if exists)
      //
      if (schema) {
        const schemaId = schema.hash.slice(1);
        console.log(`Collecting Schema: ${schemaId}`);
        const schemaHeading = document.querySelector<HTMLHeadingElement>(
          `h3#${schemaId}`,
        )!;
        spec[ns][scopeId].schema = kvTableConverter.toSchema(
          schemaId,
          new KeyValueTable(
            schemaHeading
              .closest<HTMLDivElement>("div.description")!
              .querySelector<HTMLTableElement>("table")!,
          ),
        );
      }

      //
      // Collect endpoints
      //
      for (const endpoint of endpoints) {
        const endpointId = endpoint.hash.slice(1);
        console.log(`Collecting Endpoint: ${endpointId}`);
        const endpointHeading = document.querySelector<HTMLHeadingElement>(
          `h3#${endpointId}`,
        )!;
        const requestContainer =
          endpointHeading.closest<HTMLDivElement>("div.description")!;
        const exampleCodeContainer = endpointHeading
          .closest<HTMLDivElement>("section.endpoint.method")!
          .querySelector<HTMLDivElement>(":scope > div:last-child")!;

        //
        // Collect endpiont path & method
        //
        const endpointDesc = requestContainer.querySelector<HTMLDivElement>(
          ":scope > div.endpoint-desc",
        )!;
        const pathSpec = parseHTML(
          endpointDesc.querySelector<HTMLParagraphElement>(":scope > p")!
            .innerHTML,
        );
        const methodSpan =
          pathSpec.querySelector<HTMLSpanElement>(":scope > span")!;
        const method = methodSpan.innerText.trim();
        methodSpan.remove();
        const path = pathSpec.innerText.trim();

        //
        // Collect description
        //
        const description =
          requestContainer.querySelector<HTMLParagraphElement>(
            ":scope > p",
          )?.innerText;

        //
        // Collect scope
        //
        const basicSpec = new KeyValueTable(
          requestContainer.querySelector(":scope > div.table-area > table")!,
        ).toRecord();
        const scopes = [
          /\(([a-z._]+)\)/.exec(basicSpec["SCOPE"])?.at(1),
        ].filter(scope => typeof scope === "string");

        //
        // Collect request schema
        //
        const requestProperties = kvTableConverter.toProperties(
          new KeyValueTable(
            requestContainer.querySelector(
              ":scope > div.table-area:last-child > table",
            )!,
          ),
        );

        // We collect request payload example only for POST and PUT methods
        // for now because it's a hassle to parse the example code for other methods
        let requestPayloadExample: string | undefined;
        if (method === "POST" || method === "PUT") {
          const requestCodeExample =
            exampleCodeContainer.querySelector<HTMLSpanElement>(
              ":scope > div.code-data.request > pre > code",
            )!.innerText;
          try {
            walk.simple(
              acorn.parse(requestCodeExample, {
                ecmaVersion: "latest",
              }),
              {
                VariableDeclarator(node) {
                  if (
                    node.id.type === "Identifier" &&
                    node.id.name === "payload"
                  ) {
                    const rawPayloadCode = astring.generate(
                      node.init as ObjectExpression,
                    );
                    const payload = JSON.parse(rawPayloadCode);
                    requestPayloadExample = JSON.stringify({
                      shop_no: payload.shop_no,
                      ...payload.request,
                    });
                  }
                },
              },
            );
          } catch (error) {
            console.warn(
              `Failed to parse request payload example for endpoint ${endpointId}`,
            );
          }
        }
        const requestSchema = new Schema({
          name: `${endpointId}-request`,
          properties: requestProperties,
          example: requestPayloadExample,
        });

        //
        // Collect response schema
        //
        const responsePayloadExample =
          exampleCodeContainer.querySelector<HTMLSpanElement>(
            ":scope > div.code-data.response > pre > code",
          )!.innerText;
        const responseSchema = new Schema({
          name: `${endpointId}-response`,
          properties: Array.from(
            schemaInferrer.infer(JSON.parse(responsePayloadExample)),
          ),
          example: responsePayloadExample,
        });

        //
        // Add endpoint
        //
        spec[ns][scopeId].endpoints.push({
          name: endpointId,
          description,
          path,
          method,
          scopes,
          rateLimit: parseInt(basicSpec["호출건수 제한"] || "0"),
          request: requestSchema,
          response: responseSchema,
          reference: endpoint.toString(),
        });
      }
    }
  }

  // Return the collected spec
  return spec;
}
