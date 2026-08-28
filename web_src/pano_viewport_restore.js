export function createViewportRestoreScheduler({ requestFrame, cancelFrame, restore } = {}) {
  let frameId = 0;
  let snapshot = null;
  let disposed = false;

  const schedule = (nextSnapshot) => {
    if (disposed || frameId || typeof requestFrame !== "function") return false;
    snapshot = nextSnapshot;
    frameId = requestFrame(() => {
      frameId = 0;
      const pending = snapshot;
      snapshot = null;
      if (!disposed) restore?.(pending);
    });
    return true;
  };

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    if (frameId && typeof cancelFrame === "function") cancelFrame(frameId);
    frameId = 0;
    snapshot = null;
  };

  return { schedule, dispose };
}
