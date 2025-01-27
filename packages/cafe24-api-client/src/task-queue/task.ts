export interface Task<D = any> {
  id: string;
  executor: () => Promise<D>;
  callback: (error?: any, result?: D) => void;
}

export function isTask(v: any): v is Task {
  return (
    isTaskInit(v) &&
    typeof v.id === "string" &&
    typeof v.callback === "function"
  );
}

export type TaskInit<D = any> = Partial<Task<D>> & Pick<Task<D>, "executor">;

export function isTaskInit<D = any>(v: any): v is TaskInit<D> {
  return v && typeof v === "object" && typeof v.executor === "function";
}
