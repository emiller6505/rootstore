export function createStore<T extends Record<string, unknown>>(
  initialState?: T
): {
  get(): T;
  get<K extends keyof T>(key: K): T[K];
  getSnapshot(): T;
  set<K extends keyof T>(key: K, value: T[K]): void;
  reset(resetState?: T): void;
  subscribe(listener: (state: T) => void): () => void;
};
