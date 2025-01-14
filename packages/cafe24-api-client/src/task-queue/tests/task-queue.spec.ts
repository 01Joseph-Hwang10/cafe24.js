import { TaskQueue } from "../task-queue";

const range = (start: number, end?: number) => {
  if (!end) {
    end = start;
    start = 0;
  }
  return Array.from({ length: end - start }, (_, i) => i + start);
};

const withQueue = (callback: (queue: TaskQueue) => Promise<void>) => {
  return async () => {
    const queue = new TaskQueue({
      interval: 50, // Shorten the interval for testing
      backoff: 50, // Shorten the backoff for testing
      maxRetry: 2, // Shorten the max retry for testing
    });
    queue.startRunning();
    await callback(queue);
    queue.stopRunning();
  };
};

describe("TaskQueue", () => {
  test(
    "every tasks are successful",
    withQueue(async queue => {
      const tasks = range(10).map((_, i) => async () => i);
      expect(await Promise.all(tasks.map(queue.enqueue))).toEqual(range(10));
    }),
  );

  test(
    "some tasks fails exceeding max retry limit but with status code in ignore list",
    withQueue(async queue => {
      const tasks = range(5).map((_, i) => {
        let thrown = 0;
        return async () => {
          // Throw 429 error more than max retry limit
          if (thrown++ < 3) {
            throw { status: 429 };
          }
          return i;
        };
      });
      expect(await Promise.all(tasks.map(queue.enqueue))).toEqual(range(5));
    }),
  );

  test(
    "some tasks fails exceeding max retry limit",
    withQueue(async queue => {
      const tasks = range(4)
        .map((_, i) => async () => i)
        .concat(() => {
          throw { status: 500 };
        });
      await expect(() => Promise.all(tasks.map(queue.enqueue))).rejects.toEqual(
        {
          status: 500,
        },
      );
    }),
  );
});
