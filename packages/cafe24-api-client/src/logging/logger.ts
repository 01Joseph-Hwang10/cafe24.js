export interface Logger {
  verbose(message: string): void;
  debug(message: string): void;
  log(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  fatal(message: string): void;
}

export type LogLevel = keyof Logger;
