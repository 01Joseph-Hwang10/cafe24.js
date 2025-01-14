import { not } from "fp-ts/lib/Predicate";
import { parseHTML } from "./html";
import { isDefault, isRequired } from "./predicates";
import { filter } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

/**
 * @description
 * This class reads nested tables that appear in the API documentation.
 */
export class ChildAttributeTable {
  public readonly id: string;
  public readonly rows: Row[];

  get isRequired() {
    return this.rows.some(row => row.isRequired);
  }

  static fromTableRow(row: HTMLTableRowElement) {
    return new ChildAttributeTable(
      row.querySelector<HTMLDivElement>(":scope > td > div > div:last-child")!,
    );
  }

  constructor(protected readonly root: HTMLDivElement) {
    this.id = root.id;

    const paragraphs = Array.from(
      root.querySelectorAll<HTMLParagraphElement>(":scope > div.card-body > p"),
    );

    this.rows = [];
    for (const paragraph of paragraphs) {
      if (isChildAttribute(paragraph.nextElementSibling)) {
        const schema = new ChildAttributeTable(
          paragraph.nextElementSibling.querySelector<HTMLDivElement>(
            ":scope > div:last-child",
          )!,
        );
        this.rows.push(new ArrayRow(paragraph, schema));
      } else {
        this.rows.push(new PropertyRow(paragraph));
      }
    }

    function isChildAttribute(
      element: Element | null,
    ): element is HTMLDivElement {
      return element instanceof HTMLDivElement;
    }
  }
}

export interface Row {
  readonly name: string;
  readonly description?: string;
  readonly isRequired?: boolean;
}

export class PropertyRow implements Row {
  public readonly name: string;
  public readonly isRequired?: boolean;
  public readonly description?: string;
  public readonly default?: any;

  constructor(protected readonly root: HTMLParagraphElement) {
    const [name, ...rest] = root.innerHTML.split("<br>");

    this.name = parseHTML(name).innerText;
    this.isRequired = !!rest.find(isRequired);
    const defaultValue = rest.find(isDefault);
    if (defaultValue) {
      this.default = parseHTML(defaultValue)
        .innerText.replace("DEFAULT", "")
        .trim();
    }
    this.description = pipe(
      rest,
      filter(not(isRequired)),
      filter(not(isDefault)),
      lines => lines.join("\n"),
      html => parseHTML(html).innerText,
    );
  }
}

export class ArrayRow implements Row {
  public readonly name: string;
  public readonly description?: string;

  get isRequired() {
    return this.schema.isRequired;
  }

  constructor(
    protected readonly header: HTMLParagraphElement,
    public readonly schema: ChildAttributeTable,
  ) {
    this.name = header.querySelector("strong")!.innerText;
  }
}
