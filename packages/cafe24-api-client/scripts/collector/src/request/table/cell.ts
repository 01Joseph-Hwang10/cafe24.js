import { pipe } from "fp-ts/lib/function";
import { parseHTML } from "./html";
import { filter } from "fp-ts/lib/Array";
import { not } from "fp-ts/lib/Predicate";
import { isDefault, isEmbed, isRequired } from "./predicates";

export class Cell {
  constructor(public readonly root: HTMLTableCellElement) {
    if (!(root instanceof HTMLTableCellElement)) {
      throw new Error("Cell must be a table cell element");
    }
  }
}

export class KeyCell extends Cell {
  public readonly name: string;
  public readonly isRequired: boolean;
  public readonly isEmbed: boolean;
  public readonly constraints?: string[];

  constructor(root: HTMLTableCellElement) {
    super(root);
    const html = parseHTML(root.innerHTML);
    const constraintsParagraph = html.querySelector(":scope > p");
    if (constraintsParagraph) {
      this.constraints = constraintsParagraph.innerHTML
        .split("<br>")
        .map(parseHTML)
        .map(html => html.innerText.trim());
      constraintsParagraph.remove();
    }
    const lines = html.innerText;
    this.isRequired = isRequired(lines);
    this.isEmbed = isEmbed(lines);
    this.name = lines.replace("Required", "").replace("embed", "").trim();
  }
}

export class ValueCell extends Cell {
  public readonly description: string;
  public readonly default?: any;

  constructor(root: HTMLTableCellElement) {
    super(root);
    this.description = pipe(
      root.innerText.split("\n"),
      filter(not(isDefault)),
      lines => lines.join("\n"),
    );
    this.default = pipe(
      root.innerText.split("\n"),
      filter(isDefault),
      ([line]) => line?.replace("DEFAULT", "")?.trim(),
    );
  }
}
