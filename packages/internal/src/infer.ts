import ShortUniqueId from "short-unique-id";
import {
  ArrayType,
  ObjectType,
  PrimitiveType,
  Property,
  PropertyType,
  Schema,
} from "./types";

export class SchemaInferrer {
  protected readonly propertyTypeInferrer = new PropertyTypeInferrer();

  *infer(obj: Record<string, any>): Generator<Property> {
    for (const key in obj) {
      const type = this.propertyTypeInferrer.infer(obj[key]);
      if (type instanceof ObjectType) {
        yield new Property({
          name: key,
          required: true,
          type: new ObjectType(
            new Schema({
              name: `${key}-${randomString()}`,
              properties: Array.from(this.infer(obj[key])),
            }),
          ),
        });
      } else if (
        type instanceof ArrayType &&
        type.element instanceof ObjectType
      ) {
        yield new Property({
          name: key,
          required: true,
          type: new ArrayType(
            new ObjectType(
              new Schema({
                name: `${key}-${randomString()}`,
                properties: Array.from(this.infer(obj[key].at(0))),
              }),
            ),
          ),
        });
      } else {
        yield new Property({
          name: key,
          required: true,
          type,
        });
      }
    }
  }
}

class PropertyTypeInferrer {
  infer(obj: any): PropertyType {
    if (Array.isArray(obj)) {
      return new ArrayType(this.infer(obj[0]));
    } else if (isObject(obj)) {
      return new ObjectType(
        new Schema({
          name: "",
          properties: [],
        }),
      );
    } else if (isCafe24Boolean(obj) || isCafe24Enum(obj)) {
      return new PrimitiveType("enum");
    } else if (isCafe24Datetime(obj)) {
      return new PrimitiveType("datetime");
    } else if (isCafe24Date(obj)) {
      return new PrimitiveType("date");
    } else if (isString(obj)) {
      return new PrimitiveType("string");
    } else if (typeof obj === "number") {
      return new PrimitiveType("number");
    } else {
      return new PrimitiveType("any");
    }

    function isCafe24Boolean(obj: any): obj is "T" | "F" {
      return obj === "T" || obj === "F";
    }

    function isCafe24Enum(obj: any): obj is string {
      return isString(obj) && obj.length === 1 && /[A-Z]{1}/.test(obj);
    }

    function isCafe24Date(obj: any): obj is string {
      return isString(obj) && /\d{4}-\d{2}-\d{2}/.test(obj);
    }

    function isCafe24Datetime(obj: any): obj is string {
      return isString(obj) && /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(obj);
    }

    function isString(obj: any): obj is string {
      return typeof obj === "string";
    }
  }
}

const suuid = new ShortUniqueId();

function randomString() {
  return suuid.randomUUID(8);
}

function isObject(obj: any): obj is Record<string, any> {
  return typeof obj === "object" && obj !== null;
}
