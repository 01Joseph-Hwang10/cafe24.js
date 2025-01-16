export function unique<T = any>(array: T[]) {
  return Array.from(new Set(array));
}
