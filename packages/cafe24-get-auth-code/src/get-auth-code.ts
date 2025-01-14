import { z } from "zod";
import ShortUniqueId from "short-unique-id";
import puppeteer from "puppeteer";
import {
  APP_INSTALLED_PAGE_URI,
  BUTTON_SELECTOR,
  CHANGE_PASSWORD_NEXT_TIME_BUTTON_SELECTOR,
  CHANGE_PASSWORD_PAGE_URI,
  GRANT_PERMISSIONS_BUTTON_SELECTOR,
  GRANT_PERMISSIONS_PAGE_URI,
  MALL_ID_INPUT_SELECTOR,
  PAGE_NAVIGATION_TIMEOUT,
  PASSWORD_INPUT_SELECTOR,
} from "./selectors";

const suuid = new ShortUniqueId({ length: 32 });

export async function getAuthCode(opts: GetAuthCodeOptions) {
  // Validate options
  const options = GetAuthCodeOptions.parse(opts);

  // Destructure options
  const {
    mallId,
    password,
    clientId,
    scope,
    redirectUri = "https://cafe24.com",
    debug = false,
    state = suuid.randomUUID(),
  } = options;

  // Construct auth code request page url
  const authCodeRequestPageUrl = `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirectUri}&scope=${scope}`;

  // Launch browser
  const browser = await puppeteer.launch({
    headless: !debug,
    devtools: debug,
  });

  let result: GetAuthCodeResult;

  try {
    // Create page
    const page = await browser.newPage();

    // Go to auth code page
    await page.goto(authCodeRequestPageUrl);

    const keyInto = async (selector: string, value: string) => {
      const input = await page.$(selector);
      if (!input) {
        throw new Error(
          `Failed to get input element with selector: ${selector}`,
        );
      }
      await input.type(value);
    };

    // Key in mall id and password
    await keyInto(MALL_ID_INPUT_SELECTOR, mallId);
    await keyInto(PASSWORD_INPUT_SELECTOR, password);

    // Click button
    await page.click(BUTTON_SELECTOR);

    const waitForNextPage = async () => {
      await page.waitForNavigation({ timeout: PAGE_NAVIGATION_TIMEOUT });
    };

    // Wait for next page to load
    await waitForNextPage();

    if (page.url().match(CHANGE_PASSWORD_PAGE_URI)) {
      // If next page is Password Change page,
      // we need to click "change password next time" button
      await page.click(CHANGE_PASSWORD_NEXT_TIME_BUTTON_SELECTOR);

      // Wait for next page to load
      await waitForNextPage();
    }

    if (page.url().match(GRANT_PERMISSIONS_PAGE_URI)) {
      // If next page is Grant Permissions page,
      // we need to click "grant permissions" button
      await page.click(GRANT_PERMISSIONS_BUTTON_SELECTOR);

      // Wait for next page to load
      await waitForNextPage();
    }

    if (page.url().match(APP_INSTALLED_PAGE_URI)) {
      // If next page is App Installed page,
      // we need to wait for next page to load
      await waitForNextPage();
    }

    // Get search params from current page url
    const { searchParams } = new URL(page.url());

    // Set entries of search params to result
    result = {
      ...Object.fromEntries(searchParams.entries()),
      success: true,
    } as any as GetAuthCodeResult;
  } catch (error) {
    // Set error to result
    result = { success: false, error };
  } finally {
    // Close browser
    await browser.close();
  }

  // Return result
  return result;
}

export interface GetAuthCodeOptions {
  /**
   * @description
   * Cafe24 mall id.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_MALL_ID` environment variable.
   */
  mallId: string;
  /**
   * @description
   * Cafe24 mall password.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_MALL_PASSWORD` environment variable.
   */
  password: string;
  /**
   * @description
   * Cafe24 app client id.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_CLIENT_ID` environment variable.
   */
  clientId: string;
  /**
   * @description
   * Cafe24 auth state.
   *
   * This value is optional, and if not provided,
   * it will be generated automatically.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_STATE` environment variable.
   */
  state?: string;
  /**
   * @description
   * Cafe24 auth redirect uri.
   *
   * This value is optional, and if not provided,
   * it defaults to `https://cafe24.com`.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_REDIRECT_URI` environment variable.
   */
  redirectUri?: string;
  /**
   * @description
   * Cafe24 auth scope.
   *
   * This value should be comma separated string
   * with valid scope values.
   *
   * You can provide this by either directly keying in
   * or provide `CAFE24_AUTH_SCOPE` environment variable.
   */
  scope: string;
  /**
   * @description
   * Whether to run in debug mode.
   */
  debug?: boolean;
}

export const GetAuthCodeOptions = z.object({
  mallId: z.string(),
  password: z.string(),
  clientId: z.string(),
  state: z.string().optional(),
  redirectUri: z.string().optional(),
  scope: z.string(),
  debug: z.boolean().optional(),
});

export type GetAuthCodeResult =
  | {
      success: true;
      /**
       * @description
       * Cafe24 API auth code
       */
      code: string;
      /**
       * @description
       * Cafe24 API auth code state
       */
      state: string;
    }
  | {
      success: false;
      error: any;
    };
