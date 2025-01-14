/**
 * @fileoverview
 *
 * This script is used to generate types for webhook schemas of Cafe24 API.
 *
 * The script uses Puppeteer to navigate to the Cafe24 documentation page
 * and scrape the schemas and their details.
 *
 * Usage:
 *   vite-node scripts/generator/generate.ts [...options]
 *
 * Options:
 *   --debug             Enable debug mode.
 *   --no-cache          Disable caching of the API spec.
 */

import "zx/globals";
import puppeteer from "puppeteer";
import {
  getOrEmpty,
  raise,
  readFile,
  readJson,
  Schema,
  TypescriptInterfaceGenerator,
  writeFile,
  writeJson,
  TypescriptObjectWriter,
  ObjectFieldProperty,
} from "internal";
import { findUpSync } from "find-up";
import { dirname, join } from "path";
import { WebhookSpec } from "../collector/src/types";
import { nameTable } from "../collector/src/lookup";

const WORKSPACE_ROOT = dirname(findUpSync("package.json")!);

const WEBHOOK_SPEC_COLLECTOR_SCRIPT = readFile(
  join(WORKSPACE_ROOT, "scripts/collector/dist/index.js"),
);

const EXTRA_TYPES_CODE = `
export abstract class Event {
  constructor(data: any) {
    Object.assign(this, data);
  }
}
`;

async function generateWebhookSpec() {
  const browser = await puppeteer.launch({
    headless: !debug,
    devtools: debug,
    protocolTimeout: 1000 * 60 * 60 * 24, // 24 hours
  });

  // Navigate to the page
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url);

  // Wait for the page to load (including javascript)
  await page.waitForSelector("#title1");
  await page.waitForSelector("#title2");
  await page.waitForSelector("#title3");
  await page.waitForSelector("#title4");

  const result = (await executeOnBrowser(`
    return await window.__collector.collect();  
  `)) as WebhookSpec;

  await page.close();
  await browser.close();

  return result;

  async function executeOnBrowser(code: string) {
    return await page.evaluate(`
      (async () => {
        window.__debug = ${debug};
        ${WEBHOOK_SPEC_COLLECTOR_SCRIPT};
        ${code};
      })()
    `);
  }
}

async function generate() {
  // Collect webhook schemas
  let rawSpec: WebhookSpec;
  if (cache) {
    rawSpec = readJson(webhookSpecPath);
  } else {
    rawSpec = await generateWebhookSpec();
    writeJson(webhookSpecPath, rawSpec);
  }

  // Hydrate the webhook spec
  const spec = hydrateWebhookSpec(rawSpec);

  // Generate types
  const interfaceGenerator = new TypescriptInterfaceGenerator({
    propertyCase: "none",
  });
  const interfaceSourceCode = spec.events
    .map(({ name, schema, eventNo, scopes, description, example }) =>
      interfaceGenerator.generateFromSchema(name, schema, {
        exports: true,
        description:
          getOrEmpty(eventNo && `@event ${eventNo}\n\n`) +
          getOrEmpty(description && `@description\n${description}\n\n`) +
          getOrEmpty(
            scopes &&
              `Scopes:\n${scopes.map(scope => `- ${scope}`).join("\n")}\n\n`,
          ) +
          getOrEmpty(example && `@example\n\`\`\`json\n${example}\n\`\`\``),
      }),
    )
    .join("\n\n");
  // Generate classes
  const classSourceCode = spec.events
    .map(({ name }) => name)
    .map(
      name =>
        `export class ${name} extends Event {\n` +
        `  constructor(data: ${name}) {\n` +
        `    super(data);\n` +
        `  }\n` +
        `}`,
    )
    .join("\n");
  writeFile(
    typesPath,
    "/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */\n" +
      "import {\n" +
      "  Cafe24Boolean,\n" +
      "  Cafe24Date,\n" +
      "  Cafe24Enum,\n" +
      "  Cafe24Datetime,\n" +
      '} from "cafe24-types";\n\n\n' +
      interfaceSourceCode +
      "\n\n" +
      EXTRA_TYPES_CODE +
      "\n\n" +
      classSourceCode +
      "\n\n",
  );

  // Generate event map
  const objectWriter = new TypescriptObjectWriter();
  const eventMapSourceCode = objectWriter.write({
    properties: Array.from(nameTable.entries()).map<ObjectFieldProperty>(
      ([eventNo, eventName]) => ({
        type: "field",
        name: eventNo.toString(),
        value: `t.${eventName}`,
      }),
    ),
  });
  writeFile(
    eventMapPath,
    "import * as t from './types';\n\n" +
      "export const events = " +
      eventMapSourceCode +
      "\n\n",
  );

  // Lint & format
  await $`eslint --fix ${typesPath}`;
  await $`eslint --fix ${eventMapPath}`;

  return 0;

  function hydrateWebhookSpec(spec: WebhookSpec) {
    for (const event of spec.events) {
      event.schema = Schema.fromJSON(event.schema);
    }
    return spec;
  }
}

const debug = !!argv.debug;
const cache = argv.cache !== false;
const url =
  "https://developers.cafe24.com/app/front/app/develop/webhook/sample";
const webhookSpecPath = join(
  WORKSPACE_ROOT,
  "scripts/generator/generated/webhook-spec.json",
);
const typesPath = join(WORKSPACE_ROOT, "src/types/types.ts");
const eventMapPath = join(WORKSPACE_ROOT, "src/types/event-map.ts");

debug && console.log(`Debug mode enabled.`);
cache && console.log(`Caching enabled.`);
console.log(`Generating types for webhook schemas...`);

generate().then(process.exit).catch(raise);
