export class ParameterDefinitionTable {
  protected readonly defs: ParameterDefinition[];

  constructor(protected readonly root: HTMLTableElement) {
    const rows = Array.from(
      root.querySelectorAll<HTMLTableRowElement>(":scope > tbody > tr"),
    );

    this.defs = [];

    for (const row of rows) {
      const [name, ...descriptions] = Array.from(
        row.querySelectorAll<HTMLTableCellElement>("td"),
      ).map(td => td.innerText.trim());
      this.defs.push({ name, description: descriptions.join("\n\n") });
    }
  }

  toRecord(): Record<string, string> {
    return Object.fromEntries(
      this.defs.map(({ name, description }) => [name, description]),
    );
  }
}

interface ParameterDefinition {
  name: string;
  description: string;
}
