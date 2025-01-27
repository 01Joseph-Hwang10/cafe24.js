export abstract class Logger {
  abstract verbose(message: string): void;
  abstract debug(message: string): void;
  abstract log(message: string): void;
  abstract warn(message: string): void;
  abstract error(message: string): void;
  abstract fatal(message: string): void;
}

export type LogLevel = keyof Logger;
