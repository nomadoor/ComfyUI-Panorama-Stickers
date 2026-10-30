// Timers that end together. The editor sets its timeouts through one (showEditor's `timers`) and clears them all
// when it closes, so none runs after it.
export function createTimers() {
  const pending = new Set();
  return {
    // Runs `run` after `ms`, unless cleared first. Returns its id.
    set(run, ms) {
      const id = globalThis.setTimeout(() => {
        pending.delete(id);
        run();
      }, ms);
      pending.add(id);
      return id;
    },
    clear(id) {
      if (!id) return;
      globalThis.clearTimeout(id);
      pending.delete(id);
    },
    clearAll() {
      for (const id of pending) globalThis.clearTimeout(id);
      pending.clear();
    },
  };
}
