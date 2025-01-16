import { camel, snake } from "case";
import { map } from "fp-ts/lib/Array";
import { identity, pipe } from "fp-ts/lib/function";
import { ArrayType, ObjectType, Property, Schema } from "../types";
import { getOrEmpty } from "../utils";
import { TypescriptInterfaceWriter } from "./writer";

export class TypescriptInterfaceGenerator {
  protected readonly interface = new TypescriptInterfaceWriter();
  protected readonly propertyCaseFormatter: (name: string) => string;

  constructor(opts?: { propertyCase?: "camel" | "snake" | "none" }) {
    const { propertyCase = "camel" } = opts || {};

    switch (propertyCase) {
      case "camel":
        this.propertyCaseFormatter = camel;
        break;
      case "snake":
        this.propertyCaseFormatter = snake;
        break;
      case "none":
      default:
        this.propertyCaseFormatter = identity;
        break;
    }
  }

  generateFromSchema(
    name: string | null,
    schema: Schema,
    opts?: { description?: string; exports?: boolean },
  ): string {
    const { description, exports } = opts || {};
    return this.interface.write({
      name,
      exports,
      description:
        getOrEmpty(description && `${description}\n\n`) +
        getOrEmpty(
          schema.example && `@example\n\`\`\`json\n${schema.example}\n\`\`\``,
        ),
      properties: pipe(
        schema.fields,
        filterDuplicates,
        map(property => {
          let type: string;

          if (property.type instanceof ObjectType) {
            type = this.generateFromSchema(null, property.type.schema);
          } else if (
            property.type instanceof ArrayType &&
            property.type.element instanceof ObjectType
          ) {
            type = `Array<${this.generateFromSchema(null, property.type.element.schema)}>`;
          } else {
            type = property.type.toString();
          }

          return {
            name: this.propertyCaseFormatter(property.name),
            type,
            description: property.description,
            required: property.required,
          };
        }),
      ),
    });

    function filterDuplicates(properties: Property[]): Property[] {
      const lookup = new Set<string>();
      return properties.filter(property => {
        if (lookup.has(property.name)) {
          return false;
        }
        lookup.add(property.name);
        return true;
      });
    }
  }
}
