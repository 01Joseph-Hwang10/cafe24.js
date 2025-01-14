/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const walkJson = require("./walk-json");

const internalPackages = [
  // Package name goes here
  "cafe24api-client",
  "cafe24-webhook",
  "cafe24-types",
  "cafe24-get-auth-code",
  "internal",
];

const targets = [
  // Package root path goes here
  "packages/cafe24api-client",
  "packages/cafe24-webhook",
  "packages/cafe24-types",
  "packages/cafe24-get-auth-code",
  "packages/internal",
];

targets.forEach(target => {
  const packageJsonPath = join(target, "package.json");
  walkJson(packageJsonPath, (key, value) => {
    if (internalPackages.includes(key)) {
      return "workspace:^";
    }
    return value;
  });
});
