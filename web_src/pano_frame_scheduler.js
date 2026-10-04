// The editor's frames: the one place it asks the browser for an animation frame. A frame runs only when
// something asks for one. requestDraw(reason) draws the next frame once for that reason; requestFrame(callback)
// runs callback at the start of the next frame, before it draws, like requestAnimationFrame (the playback
// and a drag's batched work use it, so their frame and the draw are one). While animating() is true after a
// frame (a view transition, inertia, playback, a drag, a fade), the next frame is drawn too. Otherwise,
// nothing runs until the next request.
//
// draw(ts, reasons) draws a frame; reasons is the Set of DRAW_REASON values asked for since the last one,
// empty for a frame drawn only because something animates. stateRevision counts the STATE requests: what is
// derived from the working state is made again when it changes, and only then.
//
// Which reason to give: STATE whenever the working state may have changed (the default of the editor's
// requestDraw, so a missing reason never leaves a stale frame). Another reason only where the state surely
// stays: the view, the playhead, the painting being drawn, media, the overlay.
export const DRAW_REASON = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // The painting changed (a stroke being drawn, strokes or rasters moved): its layers are drawn again from
  // the paint engine's canvases, while the Stickers and the Camera stay.
  PAINT: "paint",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item loaded, Spark sorted.
  MEDIA: "media",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context",
});

const REASONS = new Set(Object.values(DRAW_REASON));

// A callback or the draw that throws is reported to onError; the rest of the frame and the next frames go on.
export function createFrameScheduler({ requestAnimationFrame, cancelAnimationFrame, draw, animating, onError = (error) => console.error("[PanoramaStickers] editor frame callback failed", error) }) {
  let frameId = 0;
  let inFrame = false;
  let stopped = false;
  let reasons = new Set();
  let callbacks = new Map();
  let nextCallback = 1;
  let stateRevision = 0;

  function guarded(run) {
    try {
      run();
    } catch (error) {
      onError(error);
    }
  }

  // Requests made while a frame runs are decided at its end.
  function schedule() {
    if (!frameId && !inFrame && !stopped) frameId = requestAnimationFrame(run);
  }

  function run(ts) {
    frameId = 0;
    inFrame = true;
    try {
      const due = callbacks;
      callbacks = new Map();
      for (const callback of due.values()) guarded(() => callback(ts));
      if (stopped) return;
      const asked = reasons;
      reasons = new Set();
      if (asked.size || animating()) guarded(() => draw(ts, asked));
    } finally {
      inFrame = false;
    }
    // What the frame asked for, and an animation still going, take the next frame.
    if (reasons.size || callbacks.size || animating()) schedule();
  }

  return {
    requestDraw(reason) {
      if (!REASONS.has(reason)) throw new Error(`Unknown draw reason: ${reason}`);
      if (reason === DRAW_REASON.STATE) stateRevision += 1;
      reasons.add(reason);
      schedule();
    },
    requestFrame(callback) {
      const id = nextCallback++;
      callbacks.set(id, callback);
      schedule();
      return id;
    },
    cancelFrame(id) {
      callbacks.delete(id);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      schedule();
    },
    get stateRevision() {
      return stateRevision;
    },
    // Whether a frame is pending.
    get pending() {
      return frameId !== 0;
    },
    stop() {
      stopped = true;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      callbacks.clear();
      reasons.clear();
    },
  };
}
