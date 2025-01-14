/**
 * @fileoverview
 * This is the entry point for the collector script,
 * which will be injected to the browser and executed
 * to collect the API endpoints and their details.
 */

import { collect } from "./collect";
import {
  clickDetailButtons,
  clickToggleButtons,
  waitForLastCodeBlock,
} from "./setup";

class Collector {
  async collect() {
    return await withDebugger(collect);
  }

  async clickDetailButtons() {
    return await withDebugger(clickDetailButtons);
  }

  async clickToggleButtons() {
    return await withDebugger(clickToggleButtons);
  }

  async waitForLastCodeBlock() {
    return await withDebugger(waitForLastCodeBlock);
  }
}

async function withDebugger(callback: () => any | Promise<any>) {
  try {
    return await callback();
  } catch (error) {
    console.error(error);
    if (window.__debug) {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  }
}

declare global {
  interface Window {
    __debug?: boolean;
    __collector: Collector;
  }
}

/**
 * @description
 * As IIFE cannot return a vaule,
 * we need to assign the result to a global variable
 * and access it from outside.
 */
window.__collector = new Collector();
