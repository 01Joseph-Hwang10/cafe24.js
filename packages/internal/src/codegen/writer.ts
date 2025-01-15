import { map } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";
import { getOrEmpty, indent } from "../utils";

export class TypescriptEndpointMethodWriter {
  protected readonly jsdoc = new TypescriptJSDocWriter();

  write(opts: {
    name: string;
    method: string;
    path: string;
    request: string;
    response: string;
    description?: string;
  }) {
    const { name, method, path, request, response, description } = opts;
    return (
      getOrEmpty(description && this.jsdoc.write(description)) +
      `${name}(\n` +
      `  request: ${request},\n` +
      `  options?: base.RequestOptions<${response}>,\n` +
      `): Promise<${response}> {\n` +
      `  return self.createRequest("${method}", "${path}", request, options);\n` +
      `},\n`
    );
  }
}

export class TypescriptJSDocWriter {
  write(description: string) {
    return (
      "/**\n" +
      pipe(
        description.split("\n"),
        map(line => ` * ${line}`),
        lines => lines.join("\n"),
      ) +
      "\n */\n"
    );
  }
}

export class TypescriptObjectWriter {
  protected readonly jsdoc: TypescriptJSDocWriter = new TypescriptJSDocWriter();

  write(opts: { properties: ObjectProperty[] }) {
    const { properties } = opts || {};
    return (
      "{\n" +
      indent(
        pipe(
          properties,
          map(property => {
            if (property.type === "field") {
              const { name, value, description } = property;
              return (
                getOrEmpty(description && this.jsdoc.write(description)) +
                `${name}: ${value},\n`
              );
            } else if (property.type === "literal") {
              const { content } = property;
              return content;
            } else {
              throw new Error("Invalid property type");
            }
          }),
          lines => lines.join(""),
        ),
        2,
      ) +
      "}\n"
    );
  }
}

export type ObjectProperty = ObjectFieldProperty | ObjectLiteralProperty;

export interface ObjectFieldProperty {
  type: "field";
  name: string;
  value: string;
  description?: string;
}

export interface ObjectLiteralProperty {
  type: "literal";
  content: string;
}

export class TypescriptInterfaceWriter {
  protected readonly jsdoc: TypescriptJSDocWriter = new TypescriptJSDocWriter();

  write(opts: {
    name?: string | null;
    description?: string;
    exports?: boolean;
    properties: InterfaceProperty[];
  }) {
    const { name, description, properties, exports = false } = opts;
    return (
      getOrEmpty(description && this.jsdoc.write(description)) +
      getOrEmpty(exports && name && "export ") +
      getOrEmpty(name && `interface ${name} `) +
      `{\n` +
      indent(
        pipe(
          properties,
          map(
            ({ name, description, required, type }) =>
              getOrEmpty(description && this.jsdoc.write(description)) +
              `${name}${getOrEmpty(!required && "?")}: ${type};\n`,
          ),
          lines => lines.join(""),
        ),
        2,
      ) +
      "}\n"
    );
  }
}

export interface InterfaceProperty {
  name: string;
  type: string;
  required?: boolean;
  description?: string;
}
