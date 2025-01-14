import { pipe } from "fp-ts/lib/function";

export function keymap(fn: (key: string) => string) {
  return (obj: { [key: string]: any }) => {
    return pipe(
      Object.entries(obj),
      entries => entries.map(([key, value]) => [fn(key), value]),
      entries => Object.fromEntries(entries),
    );
  };
}

export function valmap(fn: (value: any) => any) {
  return (obj: { [key: string]: any }) => {
    return pipe(
      Object.entries(obj),
      entries => entries.map(([key, value]) => [key, fn(value)]),
      entries => Object.fromEntries(entries),
    );
  };
}

export function keyfilter(fn: (key: string) => boolean) {
  return (obj: { [key: string]: any }) => {
    return pipe(
      Object.entries(obj),
      entries => entries.filter(([key]) => fn(key)),
      entries => Object.fromEntries(entries),
    );
  };
}

export function valfilter(fn: (value: any) => boolean) {
  return (obj: { [key: string]: any }) => {
    return pipe(
      Object.entries(obj),
      entries => entries.filter(([, value]) => fn(value)),
      entries => Object.fromEntries(entries),
    );
  };
}
