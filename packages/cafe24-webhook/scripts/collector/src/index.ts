/**
 * @fileoverview
 * This is the entry point for the collector script,
 * which will be injected to the browser and executed
 * to collect webhook schemas and their details.
 */

import { collect } from "./collect";

class Collector {
  async collect() {
    return await withDebugger(collect);
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
