/**
 * @fileoverview
 *
 * This script is used to generate the API client code for the Cafe24 API.
 *
 * The script uses Puppeteer to navigate to the Cafe24 API documentation page
 * and scrape the API endpoints and their details.
 *
 * Usage:
 *   vite-node scripts/generator/generate.ts [...options]
 *
 * Options:
 *   --debug             Enable debug mode.
 *   --no-cache          Disable caching of the API spec.
 */

import "zx/globals";
import { raise } from "internal";
import { generateForTarget, Target } from "./target";

const debug = !!argv.debug;
const cache = argv.cache !== false;

const targets: Target[] = [
  {
    name: "admin",
    url: "https://developers.cafe24.com/docs/api/admin",
    apiSpec: {
      path: "<workspaceRoot>/scripts/generator/generated/admin.api-spec.json",
      useCached: cache,
    },
    endpoints: {
      path: "<workspaceRoot>/src/api/admin/generated/endpoints.ts",
    },
    postprocess: content =>
      content.replace(
        "9000000000000000031: number;",
        "[couponId: string]: number;",
      ),
  },
  {
    name: "front",
    url: "https://developers.cafe24.com/docs/api/front",
    apiSpec: {
      path: "<workspaceRoot>/scripts/generator/generated/front.api-spec.json",
      useCached: cache,
    },
    endpoints: {
      path: "<workspaceRoot>/src/api/front/generated/endpoints.ts",
    },
  },
  {
    name: "dcollection",
    url: "https://developers.cafe24.com/docs/api/dcollection",
    apiSpec: {
      path: "<workspaceRoot>/scripts/generator/generated/dcollection.api-spec.json",
      useCached: cache,
    },
    endpoints: {
      path: "<workspaceRoot>/src/api/dcollection/generated/endpoints.ts",
    },
  },
  {
    name: "analytics",
    url: "https://developers.cafe24.com/docs/api/cafe24data",
    apiSpec: {
      path: "<workspaceRoot>/scripts/generator/generated/analytics.api-spec.json",
      useCached: cache,
    },
    endpoints: {
      path: "<workspaceRoot>/src/api/analytics/generated/endpoints.ts",
    },
  },
];

async function generate() {
  debug && console.log("Debug mode enabled.");
  cache && console.log("Caching enabled.");

  for (const target of targets) {
    console.log(`Generating API client for target: ${target.name}`);
    await generateForTarget(target, { debug: debug });
  }
  return 0;
}

generate().then(process.exit).catch(raise);
