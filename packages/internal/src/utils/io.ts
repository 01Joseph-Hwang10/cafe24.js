import {
  existsSync,
  mkdirSync,
  readFileSync,
  WriteFileOptions,
  writeFileSync,
} from "fs";
import { dirname } from "path";

export function readFile(path: string) {
  return readFileSync(path, "utf-8");
}

export function writeFile(path: string, data: string, opts?: WriteFileOptions) {
  if (!existsSync(dirname(path))) {
    mkdirSync(dirname(path), { recursive: true });
  }
  return writeFileSync(path, data, opts);
}

export function readJson(path: string) {
  return JSON.parse(readFile(path));
}

export function writeJson(path: string, data: any, opts?: WriteFileOptions) {
  return writeFile(path, JSON.stringify(data, null, 2), opts);
}
