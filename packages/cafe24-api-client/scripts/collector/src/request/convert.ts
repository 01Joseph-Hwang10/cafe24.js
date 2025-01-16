import {
  ArrayRow,
  ChildAttributeTable,
  KeyValueTable,
  PropertyRow,
} from "./table";
import {
  ArrayType,
  ObjectType,
  PrimitiveType,
  Property,
  Schema,
  getOrEmpty,
} from "internal";

export class KeyValueTableConverter {
  protected readonly childAttributeTableConverter =
    new ChildAttributeTableConverter();

  toProperties(table: KeyValueTable): Property[] {
    return table.rows.map(row => {
      return new Property({
        name: row.key.name,
        description:
          `@description\n${row.value.description}` +
          getOrEmpty(
            row.key.constraints && `\n\n@constraints\n${row.key.constraints}`,
          ),
        required: row.key.isRequired,
        default: row.value.default,
        embed: row.key.isEmbed,
        type: row.childAttributes
          ? this.childAttributeTableConverter.toObjectType(row.childAttributes)
          : new PrimitiveType("any"),
      });
    });
  }

  toSchema(name: string, table: KeyValueTable): Schema {
    return new Schema({
      name,
      properties: this.toProperties(table),
    });
  }
}

export class ChildAttributeTableConverter {
  toObjectType(table: ChildAttributeTable): ObjectType {
    return new ObjectType(
      new Schema({
        name: table.id,
        properties: table.rows.map(row => {
          if (row instanceof PropertyRow) {
            return new Property({
              name: row.name,
              description: getOrEmpty(
                row.description && `@description\n${row.description}`,
              ),
              required: row.isRequired,
              default: row.default,
              type: new PrimitiveType("any"),
            });
          } else if (row instanceof ArrayRow) {
            return new Property({
              name: row.name,
              description: getOrEmpty(
                row.description && `@description\n${row.description}`,
              ),
              required: row.isRequired,
              type: new ArrayType(this.toObjectType(row.schema)),
            });
          } else {
            throw new Error(`Unknown row type: ${row}`);
          }
        }),
      }),
    );
  }
}
