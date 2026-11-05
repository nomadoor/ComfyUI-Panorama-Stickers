// The pointer gestures that move the view: looking around (the "view" drag of the panorama view and
// Unwrap), and a left drag on empty space. pointer_input.js decides when they start.
import { DRAW_REASON } from "../pano_frame_scheduler.js";

export function createPointerView(deps) {
  const { canvas, editor, viewController } = deps;
  // Bound by connect() to the other modules and showEditor.
  let requestDraw, screenPosCss, startAnimation, updateCursor;

  // Looks around from dragPos: CSS pixels in the panorama view, canvas pixels in Unwrap.
  function startLookDrag(e, p, dragPos) {
    editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
    viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // A left drag on empty space of the panorama view looks around.
  function startEmptyDrag(e, p) {
    startLookDrag(e, p, screenPosCss(e));
  }

  function moveLookDrag(it, p, e) {
    const now = performance.now();
    const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
    viewController.moveDrag(dragPos.x, dragPos.y, editor.mode === "unwrap" ? "unwrap" : "pano", now);
    it.lastTs = now;
    it.last = dragPos;
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  // Letting go of the view lets it coast (the view controller's inertia).
  function endLookDrag() {
    startAnimation(() => viewController.endDrag(performance.now()));
  }

  return {
    connect(api) {
      ({
        requestDraw, screenPosCss, startAnimation, updateCursor,
      } = api);
    },
    startLookDrag, startEmptyDrag, moveLookDrag, endLookDrag,
  };
}
