/* eslint-disable @typescript-eslint/no-var-requires */
const { readFileSync, writeFileSync } = require("fs");
const { isAbsolute, join } = require("path");

/**
 * @description
 * Walks over the JSON file entries
 * and updates them with the provided reviver.
 *
 * @param {string} path
 * @param {(key: string, value: any) => any} reviver
 */
function walkJson(path, reviver) {
  const fullPath = getFullPath(path);
  const evaluated = JSON.parse(readFileSync(fullPath, "utf-8"), reviver);
  writeFileSync(fullPath, JSON.stringify(evaluated, null, 2));
}

/**
 * @description
 * Get evaluated full absolute path.
 *
 * @param {string} path
 * @returns {string}
 */
function getFullPath(path) {
  return isAbsolute(path) ? path : join(process.cwd(), path);
}

module.exports = walkJson;
