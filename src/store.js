/**
 * Create a new webstate store.
 *
 * @param {Object} initialState - The initial state shape and values.
 * @returns {Object} Store with get, set, reset, and subscribe methods.
 */
export function createStore(initialState = {}) {
  let state = structuredClone(initialState);
  let snapshot = structuredClone(state);
  const listeners = new Set();

  function get(key) {
    if (key === undefined) {
      return structuredClone(state);
    }
    return structuredClone(state[key]);
  }

  function getSnapshot() {
    return this.snapshot;
  }

  function set(key, value) {
    if (state[key] === value) {
      return;
    }
    state[key] = value;
    snapshot = structuredClone(state);
    notify();
  }

  function reset(resetState = initialState) {
    state = structuredClone(resetState);
    notify();
  }

  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function notify() {
    for (const listener of listeners) {
      listener(structuredClone(state));
    }
  }

  return { get, getSnapshot, set, reset, subscribe };
}
