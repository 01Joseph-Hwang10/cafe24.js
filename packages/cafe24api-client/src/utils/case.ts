import { camel, snake } from "case";

export class ObjectCaseConverter {
  constructor(protected readonly convertCase: CaseConverter) {}

  convert<T = any>(obj: T): T {
    if (typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.convert(item)) as any;
    }

    const newObj: any = {};
    for (const key in obj) {
      const newKey = this.convertCase(key);
      newObj[newKey] = this.convert((obj as any)[key]);
    }
    return newObj;
  }
}

type CaseConverter = (str: string) => string;

export function objectToCamelCase<T = any>(obj: T): T {
  return new ObjectCaseConverter(camel).convert(obj);
}

export function objectToSnakeCase<T = any>(obj: T): T {
  return new ObjectCaseConverter(snake).convert(obj);
}
