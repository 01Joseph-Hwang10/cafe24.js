export type RequestType<T extends (...args: any) => any> = Parameters<T>[0];

export type ResponseType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;
