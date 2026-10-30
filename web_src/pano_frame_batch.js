// Work that a drag asks for on each move, run at most once per animation frame instead. `tasks` maps
// a name to its work. `request(name)` marks it pending; the next frame runs each pending task once,
// in the order of `tasks`. `cancel()` drops what is pending, as a drag's end does the work itself.
export function createFrameBatch({ requestFrame, cancelFrame, tasks }) {
  const pending = new Set();
  let frame = null;

  function run() {
    frame = null;
    for (const [name, task] of Object.entries(tasks)) {
      if (pending.delete(name)) task();
    }
  }

  return {
    request(name) {
      pending.add(name);
      frame ??= requestFrame(run);
    },
    cancel() {
      pending.clear();
      if (frame !== null) cancelFrame(frame);
      frame = null;
    },
  };
}
