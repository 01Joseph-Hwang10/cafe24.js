import dayjs from "dayjs";
import wait from "wait";

type Task<D = any> = {
  executor: () => Promise<D>;
  callback: (error?: any, result?: D) => void;
};

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
   * @description Maximum time span of the task queue in milliseconds.
   *              If the task queue is running for a long time,
   *              it will be stopped automatically after this time.
   * @default 1000 * 60 * 60 * 24 * 7 (7 days)
   */
  maxTimeSpan?: number;
}

export class TaskQueue {
  protected interval: number;
  protected backoff: number;
  protected maxRetry: number;
  protected maxRetryIgnoreStatus: number[];
  protected backoffStatus: number[];
  protected maxTimeSpan?: number;
  protected timeoutStopAt?: dayjs.Dayjs;

  protected tasks: Task[];
  protected shouldStop: boolean;
  protected retry: number;

  constructor(options?: TaskQueueOptions) {
    this.interval = options?.interval ?? 500;
    this.backoff = options?.backoff ?? 10000;
    this.maxRetry = options?.maxRetry ?? 3;
    this.maxRetryIgnoreStatus = options?.maxRetryIgnoreStatus ?? [429, 503];
    this.backoffStatus = options?.backoffStatus ?? [429, 503];
    this.maxTimeSpan = options?.maxTimeSpan ?? 1000 * 60 * 60 * 24 * 7;
    this.timeoutStopAt = dayjs().add(this.maxTimeSpan, "millisecond");

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
    // Get the first task in the queue
    const task = this.tasks.at(0);
    try {
      // Execute the task if exists
      if (task) {
        const result = await task.executor();
        task.callback(undefined, result);

        // Remove the task from the queue and reset the number of retries
        this.tasks.shift();
        this.retry = 0;
      }

      // If we should stop, stop
      if (this.shouldStop) return;

      // If the task queue is running for a long time,
      // stop executing the task and throw an error
      if (dayjs().isAfter(this.timeoutStopAt)) {
        this.stopRunning();
        task?.callback(new Error("Task queue timeout"));
        return;
      }

      // Wait for a while and try again
      await wait(this.interval);
    } catch (error: any) {
      // Error logging logic

      // If the number of retries exceeds the maximum number of retries,
      // stop executing the task and throw an error
      if (this.retry >= this.maxRetry) {
        this.stopRunning();
        task?.callback(error);
        return;
      }

      // Only count up the number of retries
      // when the error status is not in the ignore list
      if (!this.maxRetryIgnoreStatus.includes(error?.status)) {
        this.retry++;
      }

      if (this.backoffStatus.includes(error?.status)) {
        // Wait for a backoff amount of time
        // if the error status is in the backoff status list
        await wait(this.backoff);
      } else {
        // Wait for a while and try again
        await wait(this.interval);
      }
    }
    this.handleNextTask();
  }

  public startRunning() {
    this.shouldStop = false;
    this.handleNextTask();
  }

  public stopRunning() {
    this.shouldStop = true;
  }

  async enqueue<D = any>(executor: Task<D>["executor"]): Promise<D>;
  async enqueue<D = any>(
    executor: Task<D>["executor"],
    callback: Task<D>["callback"],
  ): Promise<number>;
  async enqueue<D = any>(
    executor: Task<D>["executor"],
    callback?: Task<D>["callback"],
  ): Promise<D | number> {
    if (typeof callback === "function") {
      return this.tasks.push({
        executor,
        callback,
      });
    }
    return new Promise<D>((resolve, reject) => {
      this.tasks.push({
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
  }

  public clear() {
    this.tasks = [];
  }
}
