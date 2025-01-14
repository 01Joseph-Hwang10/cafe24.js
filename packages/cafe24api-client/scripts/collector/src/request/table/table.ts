import { pipe } from "fp-ts/lib/function";
import { filter } from "fp-ts/lib/Array";
import { KeyCell, ValueCell } from "./cell";
import { ChildAttributeTable } from "./child-attr";
import { not } from "fp-ts/lib/Predicate";

/**
 * @description
 * Reads tables appearing in the API documentation.
 */
export class KeyValueTable {
  public readonly rows: Row[];

  constructor(protected readonly root: HTMLTableElement) {
    const [, ...rows] = pipe(
      Array.from(root.rows),
      filter(not(isChildAttributeRow)),
    );

    // Validate table dimension
    rows.forEach(row => {
      if (row.cells.length !== 2) {
        throw new Error("Table must have exactly 2 columns");
      }
    });

    this.rows = rows.map(
      row =>
        new Row(
          new KeyCell(row.cells.item(0)!),
          new ValueCell(row.cells.item(1)!),
          isChildAttributeRow(row.nextElementSibling)
            ? ChildAttributeTable.fromTableRow(
                row.nextElementSibling as HTMLTableRowElement,
              )
            : undefined,
        ),
    );

    function isChildAttributeRow(row: Element | null): boolean {
      return (
        row instanceof HTMLTableRowElement &&
        row?.getAttribute("colspan") === "2"
      );
    }
  }

  toRecord(): Record<string, any> {
    return this.rows.reduce(
      (acc, row) => ({ ...acc, [row.key.name]: row.value.description.trim() }),
      {} as Record<string, any>,
    );
  }
}

class Row {
  constructor(
    public readonly key: KeyCell,
    public readonly value: ValueCell,
    public readonly childAttributes?: ChildAttributeTable,
  ) {}
}
