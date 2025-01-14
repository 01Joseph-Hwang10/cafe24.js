import { Schema, SchemaInferrer } from "internal";
import * as JSONC from "jsonc-parser";
import { eventScopeTable, nameTable } from "./lookup";

export class WebhookDefinitionTable {
  public readonly defs: WebhookDefinition[];
  protected readonly schema: SchemaInferrer;

  constructor(
    protected readonly root: HTMLTableElement,
    opts?: { logger: Console },
  ) {
    const { logger = console } = opts || {};
    this.schema = new SchemaInferrer();

    const rows = Array.from(
      root.querySelectorAll<HTMLTableRowElement>(":scope > tbody > tr"),
    );

    this.defs = [];

    for (const row of rows) {
      const [eventNoRaw, description, example] = Array.from(
        row.querySelectorAll<HTMLTableCellElement>(":scope > td"),
      ).map(td => td.innerText.trim());
      const eventNo = Number(eventNoRaw);

      logger.log(`Collecting webhook definition: ${eventNo}`);

      const name = nameTable.get(eventNo)!;
      const scopes = eventScopeTable.get(eventNo)!;

      // There's some edge cases where the example is not provided
      // bacause it shares the same schema with the previous example
      // In this case, we'll try to infer the schema from the last example
      const parsedExample = tryParseJSON(example || this.defs.at(-1)!.example!);

      const schema = new Schema({
        name,
        properties: Array.from(this.schema.infer(parsedExample)),
      });

      this.defs.push({
        name,
        eventNo,
        description,
        schema,
        scopes,
        example: JSON.stringify(parsedExample, null, 2),
      });
    }
  }
}

export interface WebhookDefinition {
  name: string;
  eventNo: number;
  description?: string;
  schema: Schema;
  scopes: string[];
  example?: string;
}

function tryParseJSON(json: string): any {
  // #1. Try parse
  const { parsed, error } = parseOrNull(json);
  if (parsed) return parsed;

  // #2. Try to fix: Attach another curly brace to the end
  const { parsed: curlyBraceAttached } = parseOrNull(json + "}");
  if (curlyBraceAttached) return curlyBraceAttached;

  // #3. Try to fix: Detach the last curly brace
  const { parsed: curlyBraceDetached } = parseOrNull(json.trim().slice(0, -1));
  if (curlyBraceDetached) return curlyBraceDetached;

  // #4. Throw the original error
  throw error;

  function parseOrNull(json: string): { parsed?: any; error?: any } {
    try {
      return { parsed: JSONC.parse(json) };
    } catch (error) {
      return { error };
    }
  }
}
