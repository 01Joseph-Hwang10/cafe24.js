interface PropertyInit {
  name: string;
  description?: string;
  required?: boolean;
  embed?: boolean;
  type: PropertyType;
  default?: any;
  example?: any;
}

export class Property {
  /**
   * @description
   * Name of the property.
   */
  public name: string;
  /**
   * @description
   * Description of the property.
   */
  public description?: string;
  /**
   * @description
   * Whether the property is required or not.
   */
  public required?: boolean;
  /**
   * @description
   * Whether the property is embed or not.
   */
  public embed?: boolean;
  /**
   * @description
   * Type of the property.
   */
  public type: PropertyType;
  /**
   * @description
   * Default value of the property.
   */
  public default?: any;
  /**
   * @description
   * Example value of the property.
   */
  public example?: any;

  static fromJSON(json: PropertyInit): Property {
    return new Property({
      name: json.name,
      description: json.description,
      required: json.required,
      type: PropertyType.fromJSON(json.type),
      default: json.default,
      example: json.example,
      embed: json.embed,
    });
  }

  constructor(opts: PropertyInit) {
    this.name = opts.name;
    this.description = opts.description;
    this.required = opts.required;
    this.type = opts.type;
    this.default = opts.default;
    this.example = opts.example;
    this.embed = opts.embed;
  }

  toJSON() {
    return {
      name: this.name,
      description: this.description,
      required: this.required,
      embed: this.embed,
      type: this.type.toJSON(),
      default: this.default,
      example: this.example,
    };
  }
}

export class PropertyType {
  static fromJSON(json: { type: "object"; schema: Schema }): ObjectType;
  static fromJSON(json: { type: "array"; element: PropertyType }): ArrayType;
  static fromJSON(json: { type: "literal"; value: string }): LiteralType;
  static fromJSON(json: { type: string }): PrimitiveType;
  static fromJSON(json: {
    type: string;
    schema?: Schema;
    element?: PropertyType;
    value?: string;
  }) {
    switch (json.type) {
      case "object":
        return new ObjectType(Schema.fromJSON(json.schema!));
      case "array":
        return new ArrayType(PropertyType.fromJSON(json.element!));
      case "literal":
        return new LiteralType(json.value!);
      default:
        return new PrimitiveType(json.type as any);
    }
  }

  constructor(public type: string) {}

  toString() {
    return this.type;
  }

  toJSON() {
    return { type: this.type };
  }
}

export class PrimitiveType extends PropertyType {
  constructor(
    type:
      | "string"
      | "number"
      | "boolean"
      | "enum"
      | "date"
      | "datetime"
      | "any",
  ) {
    super(type);
  }

  override toString(): string {
    switch (this.type) {
      case "string":
      case "number":
      case "any":
        return this.type;
      case "boolean":
      case "enum":
        return "Cafe24Enum";
      case "date":
        return "Cafe24Date";
      case "datetime":
        return "Cafe24Datetime";
      default:
        throw new Error(`Unknown primitive type: ${this.type}`);
    }
  }
}

export class ObjectType extends PropertyType {
  constructor(public schema: Schema) {
    super("object");
  }

  override toJSON() {
    return {
      type: this.type,
      schema: this.schema.toJSON(),
    };
  }
}

export class ArrayType extends PropertyType {
  constructor(public element: PropertyType) {
    super("array");
  }

  override toString() {
    return `Array<${this.element.toString()}>`;
  }

  override toJSON() {
    return {
      type: this.type,
      element: this.element.toJSON(),
    };
  }
}

export class LiteralType extends PropertyType {
  constructor(public readonly value: string) {
    super("literal");
  }

  override toString() {
    return this.value;
  }

  override toJSON() {
    return {
      type: this.type,
      value: this.value,
    };
  }
}

interface SchemaInit {
  name: string;
  properties: Property[];
  example?: string;
}

export class Schema {
  public name: string;
  public properties: Property[];
  public example?: string;

  get fields() {
    return this.properties.filter(({ embed }) => !embed);
  }

  get embeds() {
    return this.properties.filter(({ embed }) => embed);
  }

  static fromJSON(json: SchemaInit): Schema {
    return new Schema({
      name: json.name,
      properties: json.properties.map(Property.fromJSON),
      example: json.example,
    });
  }

  constructor(opts: SchemaInit) {
    this.name = opts.name;
    this.properties = opts.properties;
    this.example = opts.example;
  }

  toJSON() {
    return {
      name: this.name,
      properties: this.properties.map(p => p.toJSON()),
      example: this.example,
    };
  }
}
