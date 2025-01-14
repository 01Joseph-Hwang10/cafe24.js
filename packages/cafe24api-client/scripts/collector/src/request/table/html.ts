export function parseHTML(html: string) {
  return Document.parseHTMLUnsafe(html).querySelector<HTMLBodyElement>("body")!;
}

export function splitElements(
  target: Element[],
  separator: (el: Element) => boolean,
) {
  const result: Element[][] = [];
  let current: Element[] = [];
  for (const el of target) {
    if (separator(el)) {
      result.push(current);
      current = [];
    } else {
      current.push(el);
    }
  }
  result.push(current);
  return result;
}
