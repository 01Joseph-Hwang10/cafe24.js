import "zx/globals";
import puppeteer from "puppeteer";
import { dirname, join } from "path";
import { findUpSync } from "find-up";
import { readFile, Schema } from "internal";
import { APISpec } from "../../collector/src/types";

const API_SPEC_COLLECTOR_SCRIPT = readFile(
  join(dirname(findUpSync("package.json")!), "scripts/collector/dist/index.js"),
);

export async function generateAPISpec(opts: {
  url: string;
  debug?: boolean;
}): Promise<APISpec> {
  const { url, debug } = opts;
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
  await page.waitForSelector(".page-wrapper > .content");

  await executeOnBrowser(`
    // Click every "더보기" button to expand all the API endpoints
    await window.__collector.clickDetailButtons();

    // Click every button with selector 'button.btn.collapsed'
    await window.__collector.clickToggleButtons();
  `);

  // Waits until last element (code block) is loaded
  const lastCodeBlockSelector =
    ".page-wrapper > .content > section:last-of-type .code-data.response pre";
  await page.waitForSelector(lastCodeBlockSelector);
  await executeOnBrowser(`
    await window.__collector.waitForLastCodeBlock();  
  `);

  // Run the collector script
  const result = (await executeOnBrowser(`
    return await window.__collector.collect();  
  `)) as APISpec;

  // Clean up
  await page.close();
  await browser.close();

  // Hydrate the result:
  // This is necessary because the result is a plain object
  // and we need to convert the schema objects to instances of Schema
  return hydrateAPISpec(result);

  async function executeOnBrowser(code: string) {
    return await page.evaluate(`
      (async () => {
        window.__debug = ${debug};
        ${API_SPEC_COLLECTOR_SCRIPT};
        ${code};
      })()
    `);
  }
}

export function hydrateAPISpec(spec: APISpec): APISpec {
  for (const ns in spec) {
    for (const s in spec[ns]) {
      const scope = spec[ns][s];
      if (scope.schema) {
        scope.schema = Schema.fromJSON(scope.schema as any);
      }
      for (const endpoint of scope.endpoints) {
        endpoint.request = Schema.fromJSON(endpoint.request as any);
        endpoint.response = Schema.fromJSON(endpoint.response as any);
      }
    }
  }
  return spec;
}
