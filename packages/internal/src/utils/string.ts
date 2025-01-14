import { map } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

export function getOrEmpty(value?: any): string {
  return getOrElse(value, "");
}

export function getOrElse<T>(value: T | undefined, defaultValue: T): T {
  return value || defaultValue;
}

export function indent(source: string, space: number) {
  return pipe(
    source.split("\n"),
    map(line => `${" ".repeat(space)}${line}`),
    lines => lines.join("\n"),
  );
}
