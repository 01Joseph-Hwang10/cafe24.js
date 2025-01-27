import { Logger } from "./logger";

export class ConsoleLogger extends Logger {
  constructor(protected readonly logger: Console = console) {
    super();
  }

  verbose(message: string): void {
    this.logger.debug(message);
  }
  debug(message: string): void {
    this.logger.log(message);
  }
  log(message: string): void {
    this.logger.info(message);
  }
  warn(message: string): void {
    this.logger.warn(message);
  }
  error(message: string): void {
    this.logger.error(message);
  }
  fatal(message: string): void {
    this.logger.error(message);
  }
}
