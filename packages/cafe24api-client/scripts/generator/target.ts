import "zx/globals";
import { findUpSync } from "find-up";
import { generateAPISpec, hydrateAPISpec } from "./src/api-spec";
import { readFile, readJson, writeFile, writeJson } from "internal";
import { generateEndpointsModule } from "./src/endpoints";
import { dirname } from "path";
import { identity } from "fp-ts/lib/function";
import { APISpec } from "../collector/src/types";
import { existsSync } from "fs";

const IRREGULAR_WHITE_SPACE = " ";

export async function generateForTarget(
  target: Target,
  opts?: { debug?: boolean },
) {
  const { debug = false } = opts || {};
  const {
    url,
    apiSpec: apiSpecOpts,
    endpoints,
    postprocess = identity,
  } = target;
  const apiSpecJsonPath = resolvePath(apiSpecOpts.path);
  const endpointModulePath = resolvePath(endpoints.path);
  // Generate API spec
  let apiSpec: APISpec;
  if (apiSpecOpts.useCached && existsSync(apiSpecJsonPath)) {
    apiSpec = hydrateAPISpec(await readJson(apiSpecJsonPath));
  } else {
    apiSpec = await generateAPISpec({
      url,
      debug,
    });
    await writeJson(apiSpecJsonPath, apiSpec);
  }

  // Generate endpoints module
  const endpointsModule = generateEndpointsModule(apiSpec);
  writeFile(endpointModulePath, endpointsModule);

  // Postprocess && lint & format
  writeFile(
    endpointModulePath,
    postprocess(
      readFile(endpointModulePath).replaceAll(IRREGULAR_WHITE_SPACE, " "),
    ),
  );
  await $`eslint --fix ${endpointModulePath}`;
}

export interface Target {
  name: string;
  url: string;
  apiSpec: {
    path: string;
    useCached?: boolean;
  };
  endpoints: {
    path: string;
  };
  postprocess?: (content: string) => string;
}

function resolvePath(path: string) {
  return path.replace("<workspaceRoot>", dirname(findUpSync("package.json")!));
}
