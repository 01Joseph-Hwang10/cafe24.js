#!/usr/bin/env node

/* eslint-disable no-undef */
/**
 * @fileoverview
 * CLI program that retrieves
 * [cafe24 api auth code](https://developers.cafe24.com/docs/en/api/admin/#get-authentication-code)
 *
 * Usage:
 * ```sh
 * cafe24-get-auth-code \
 *   --mall-id <mall-id> \
 *   --password <password> \
 *   --client-id <client-id> \
 *   --scope <scope> \
 *   [...options]
 * ```
 *
 * Options:
 * - [Required] `--mall-id`: cafe24 mall id (Environment variable: `CAFE24_MALL_ID`)
 * - [Required] `--password`: cafe24 password (Environment variable: `CAFE24_MALL_PASSWORD`)
 * - [Required] `--client-id`: cafe24 client id (from [cafe24 developer console](https://developers.cafe24.com/))
 *                             (Environment variable: `CAFE24_CLIENT_ID`)
 * - [Required] `--scope`: comma seperated cafe24 api scopes (Environment variable: `CAFE24_AUTH_SCOPE`)
 * - [Optional] `--redirect-uri`: redirect uri (default: `https://cafe24.com`)
 *                                (Environment variable: `CAFE24_AUTH_REDIRECT_URI`)
 * - [Optional] `--state`: state (default: randomly generated)
 *                         (Environment variable: `CAFE24_AUTH_STATE`)
 * - [Optional] `--debug`: Enable debug mode
 * - [Optionap] `--env-file`: Load environment variables from a file. (default: `.env`)
 */

import "zx/globals";
import dotenv from "dotenv";
import { getAuthCode } from "../dist/index.js";

dotenv.config({
  path: argv.envFile || ".env",
});

const options = {
  mallId: argv.mallId || process.env.CAFE24_MALL_ID,
  password: argv.password || process.env.CAFE24_MALL_PASSWORD,
  clientId: argv.clientId || process.env.CAFE24_CLIENT_ID,
  scope: argv.scope || process.env.CAFE24_AUTH_SCOPE,
  redirectUri: argv.redirectUri || process.env.CAFE24_AUTH_REDIRECT_URI,
  state: argv.state || process.env.CAFE24_AUTH_STATE,
  debug: argv.debug,
};

const result = await getAuthCode(options);

if (!result.success) {
  console.error(result.error);
  process.exit(1);
}

const { code } = result;
console.log(code);
process.exit(0);
