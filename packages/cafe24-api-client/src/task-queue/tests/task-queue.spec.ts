import dayjs from "dayjs";
import { TaskQueue } from "../task-queue";

const QUEUE_INTERVAL = 100; // Shorten the interval for testing
const QUEUE_BACKOFF = 250; // Shorten the backoff for testing
const QUEUE_MAX_RETRY = 2; // Shorten the max retry for testing

interface Execution {
  id: number | string;
  timestamp: number;
}

describe("TaskQueue", () => {
  test(
    "every tasks are successful",
    withQueue(async queue => {
      const executions: Execution[] = [];
      const tasks = range(10).map(
        (_, i) => async () =>
          executions.push({
            id: i,
            timestamp: dayjs().valueOf(),
          }),
      );

      await Promise.all(tasks.map(queue.enqueue));
      expect(executions).toHaveLength(10);
      new SlidingWindow(executions, 2)
        .reduce(([a, b]) => b.timestamp - a.timestamp)
        .forEach(diff => expect(diff).toBeGreaterThanOrEqual(QUEUE_INTERVAL));
    }),
  );

  test(
    "some tasks fails due to rate limiting",
    withQueue(async queue => {
      const executions: Execution[] = [];
      let thrown = 0;
      const tasks = [
        async () => executions.push({ id: 0, timestamp: dayjs().valueOf() }),
        async () => executions.push({ id: 1, timestamp: dayjs().valueOf() }),
        async () => {
          if (thrown++ < 3) {
            throw { status: 429 };
          } else {
            executions.push({ id: 2, timestamp: dayjs().valueOf() });
          }
        },
      ];

      await Promise.all(tasks.map(queue.enqueue));
      expect(executions).toHaveLength(3);
      expect(
        executions.at(-1)!.timestamp - executions.at(-2)!.timestamp,
      ).toBeGreaterThanOrEqual(
        QUEUE_INTERVAL + // Normal wait between tasks
          QUEUE_BACKOFF * 3, // Backoff time for rate limiting
      );
    }),
  );

  test(
    "some tasks fails exceeding max retry limit",
    withQueue(async queue => {
      const executions: Execution[] = [];
      const tasks = [
        async () => executions.push({ id: 0, timestamp: dayjs().valueOf() }),
        async () => executions.push({ id: 1, timestamp: dayjs().valueOf() }),
        async () => {
          throw { status: 500 };
        },
      ];

      await Promise.all(tasks.map(queue.enqueue));
      const timestamp = dayjs().valueOf();
      expect(executions).toHaveLength(2);
      expect(timestamp - executions.at(-1)!.timestamp).toBeGreaterThanOrEqual(
        QUEUE_INTERVAL * 2 + // Waits for previous tasks
          QUEUE_INTERVAL * 2, // Retries for failed task
      );
    }),
  );
});

class SlidingWindow<T, R> {
  constructor(
    protected readonly source: Array<T>,
    protected readonly windowSize: number,
  ) {}

  /**
   * @description
   * Reduces given array with
   */
  reduce(callback: (current: Array<T>) => R): Array<R> {
    const result: Array<R> = [];
    for (let i = 0; i < this.source.length - this.windowSize + 1; i++) {
      result.push(callback(this.source.slice(i, i + this.windowSize)));
    }
    return result;
  }
}

function range(start: number, end?: number) {
  if (!end) {
    end = start;
    start = 0;
  }
  return Array.from({ length: end - start }, (_, i) => i + start);
}

function withQueue(callback: (queue: TaskQueue) => Promise<void>) {
  return async () => {
    const queue = new TaskQueue({
      interval: QUEUE_INTERVAL,
      backoff: QUEUE_BACKOFF,
      maxRetry: QUEUE_MAX_RETRY,
    });
    queue.startRunning();
    await callback(queue);
    queue.stopRunning();
  };
}
