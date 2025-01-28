import wait from "wait";
import dayjs from "dayjs";
import ShortUniqueId from "short-unique-id";
import { Logger, NoopLogger } from "../logging";
import { isTaskInit, Task, TaskInit } from "./task";
import { raise } from "../error";

export interface TaskQueueOptions {
  /**
   * @description Interval time between tasks
   * @default 500
   */
  interval?: number;
  /**
   * @description Backoff time when an error occurs
   * @default 10000
   */
  backoff?: number;
  /**
   * @description Maximum number of retries
   * @default 3
   */
  maxRetry?: number;
  /**
   * @description Status codes not to take into account
   *              as a fail count when retrying.
   *
   *              Task queue finds this error status from the error object you throw.
   *              You should include `status` property in the error object
   *              if you want to use this option.
   * @default [429, 503]
   */
  maxRetryIgnoreStatus?: number[];
  /**
   * @description Status codes that should be considered as backoff status.
   *              If the error status is in this list, the task queue will wait
   *              for a backoff amount of time before retrying.
   *
   * @default [429, 503]
   */
  backoffStatus?: number[];
  /**
   * @description
   * Timeout for each task in milliseconds.
   *
   * @default 1000 * 30 (30 seconds)
   */
  timeout?: number;
  /**
   * @description
   * Logger instance to use for logging.
   * If not provided, {@link NoopLogger} will be used.
   *
   * @default NoopLogger
   */
  logger?: Logger;
}

const { randomUUID: suuid } = new ShortUniqueId({ length: 6 });

export class TaskQueue {
  protected readonly interval: number;
  protected readonly backoff: number;
  protected readonly maxRetry: number;
  protected readonly maxRetryIgnoreStatus: number[];
  protected readonly backoffStatus: number[];
  protected readonly taskTimeout: number;
  protected readonly logger: Logger;

  protected tasks: Task[];
  protected shouldStop: boolean;
  protected retry: number;

  constructor(options?: TaskQueueOptions) {
    this.interval = options?.interval ?? 500;
    this.backoff = options?.backoff ?? 10000;
    this.maxRetry = options?.maxRetry ?? 3;
    this.maxRetryIgnoreStatus = options?.maxRetryIgnoreStatus ?? [429, 503];
    this.backoffStatus = options?.backoffStatus ?? [429, 503];
    this.taskTimeout = options?.timeout ?? 1000 * 30;
    this.logger = options?.logger ?? new NoopLogger();

    this.tasks = [];
    this.shouldStop = true;
    this.retry = 0;

    this.startRunning = this.startRunning.bind(this);
    this.stopRunning = this.stopRunning.bind(this);
    this.enqueue = this.enqueue.bind(this);
    this.clear = this.clear.bind(this);
    this.handleNextTask = this.handleNextTask.bind(this);
  }

  public get running(): boolean {
    return !this.shouldStop;
  }

  public get length() {
    return this.tasks.length;
  }

  protected async handleNextTask() {
    // If we should stop, stop
    if (this.shouldStop) {
      this.logger.debug("Task queue stopped");
      return;
    }

    // Get the first task in the queue
    const task = this.tasks.at(0);

    // Execute the task if exists
    if (task) {
      try {
        this.logger.debug(
          `[${dayjs().toISOString()}] Task(${task.id}) started (attempt: ${this.retry + 1})`,
        );
        const result = await Promise.race([
          task.executor(),
          wait(this.taskTimeout).then(() =>
            raise(new Error("Task timeout exceeded")),
          ),
        ]);
        this.logger.debug(
          `[${dayjs().toISOString()}] Task(${task.id}) completed`,
        );
        this.logger.verbose(
          `Calling callback for Task(${task.id}) with result: ${JSON.stringify(result, null, 2)}`,
        );
        task.callback(undefined, result);

        // Remove the task from the queue and reset the number of retries
        this.tasks.shift();
        this.logger.verbose(`Removed Task(${task.id}) from the queue`);
        this.reset();
      } catch (error: any) {
        this.logger.debug(
          `[${dayjs().toISOString()}] Task(${task.id}) failed: ${formatError(error)}`,
        );

        const status = error?.status;
        this.logger.debug(`Received status code: ${status}`);

        // If the number of retries exceeds the maximum number of retries,
        // stop executing the task and throw an error
        if (this.retry >= this.maxRetry) {
          this.logger.verbose(
            "Maximum number of retries exceeded. Throwing an error",
          );
          task?.callback(error);

          // Remove the task from the queue and reset the states
          this.tasks.shift();
          this.logger.verbose(`Removed Task(${task.id}) from the queue`);
          this.reset();
        } else {
          // Only count up the number of retries
          // when the error status is not in the ignore list
          if (!this.maxRetryIgnoreStatus.includes(status)) {
            this.retry++;
            this.logger.verbose(
              `Incremented the number of retries: ${this.retry}`,
            );
          }

          if (this.backoffStatus.includes(status)) {
            // Wait for a backoff amount of time
            // if the error status is in the backoff status list
            this.logger.verbose(`Waiting ${this.backoff}ms for backoff`);
            await wait(this.backoff);
          }
        }
      }
    }
    // Wait for a while
    this.logger.verbose(`Waiting ${this.interval}ms before the next task`);
    await wait(this.interval);

    // Handle the next task
    this.handleNextTask();
  }

  public startRunning() {
    this.shouldStop = false;
    this.handleNextTask();
    this.logger.debug("Task queue started");
  }

  public stopRunning() {
    this.shouldStop = true;
    this.logger.debug("Task queue termination requested");
  }

  enqueue<D = any>(executor: Task<D>["executor"]): Promise<D>;
  enqueue<D = any>(
    executor: Task<D>["executor"],
    callback: Task<D>["callback"],
  ): Promise<string>;
  enqueue<D = any>(task: TaskInit<D>): Promise<string>;
  enqueue<D = any>(
    executorOrTask: Task<D>["executor"] | TaskInit<D>,
    callbackOrUndefined?: Task<D>["callback"],
  ): Promise<D | string> {
    let id: Task<D>["id"];
    let executor: Task<D>["executor"];
    let callback: Task<D>["callback"] | undefined;

    if (isTaskInit(executorOrTask)) {
      id = executorOrTask.id ?? suuid();
      executor = executorOrTask.executor;
      callback = executorOrTask.callback;
    } else {
      id = suuid();
      executor = executorOrTask as Task<D>["executor"];
      callback = callbackOrUndefined;
    }

    if (typeof callback === "function") {
      this.tasks.push({ id, executor, callback });
      this.logger.debug(`Task(${id}) enqueued`);
      return Promise.resolve(id);
    }

    const promise = new Promise((resolve, reject) => {
      this.tasks.push({
        id,
        executor,
        callback: (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      });
    });
    this.logger.debug(`Task(${id}) enqueued`);
    return promise as Promise<D>;
  }

  public clear() {
    this.reset();
    this.tasks = [];
    this.logger.verbose("Task queue cleared");
  }

  public reset() {
    this.retry = 0;
    this.logger.verbose(`Task queue states reset`);
  }
}

function formatError(error: any) {
  return error instanceof Error ? error : JSON.stringify(error, null, 2);
}
