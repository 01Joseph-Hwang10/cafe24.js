import { Logger } from "./logger";

interface LabeledLoggerOptions {
  label: string | string[];
  logger: Logger;
}

export class LabeledLogger extends Logger {
  public readonly label: string;
  protected readonly logger: Logger;

  constructor(options: LabeledLoggerOptions) {
    super();
    const { label, logger } = options;
    this.label = Array.isArray(label) ? label.join(":") : label;
    this.logger = logger;
  }

  public verbose(message: string) {
    this.logger.verbose(`[${this.label}] ${message}`);
  }

  public debug(message: string) {
    this.logger.debug(`[${this.label}] ${message}`);
  }

  public log(message: string) {
    this.logger.log(`[${this.label}] ${message}`);
  }

  public warn(message: string) {
    this.logger.warn(`[${this.label}] ${message}`);
  }

  public error(message: string) {
    this.logger.error(`[${this.label}] ${message}`);
  }

  public fatal(message: string) {
    this.logger.fatal(`[${this.label}] ${message}`);
  }

  public extend(label: string | string[]): LabeledLogger {
    const formattedLabel = Array.isArray(label) ? label.join(":") : label;
    return new LabeledLogger({
      label: `${this.label}:${formattedLabel}`,
      logger: this.logger,
    });
  }
}
