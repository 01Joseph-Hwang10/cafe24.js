import { join } from "path";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  preserveEntrySignatures: false,
  input: join(__dirname, "src/index.ts"),
  output: {
    compact: true,
    format: "iife",
    dir: join(__dirname, "dist"),
  },
  plugins: [
    typescript({
      tsconfig: join(__dirname, "tsconfig.bundle.json"),
      outputToFilesystem: true,
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
  ],
};

export default config;
