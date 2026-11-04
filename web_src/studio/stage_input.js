// The pointer and the keys on the new UI's stage (docs/space-and-view.md "マウスとキー", "キーを離したものとするとき";
// docs/studio-ui.md "閉じ方"): the hits under the pointer, the gestures (the view's drags, an object's, a stroke), and
// the stage's events with their listeners. stage.js createStage puts it together; `shared` is the stage's state its
// parts share (stage.js). It builds no DOM.
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { MOVE_KEY_CODES, isMoveKey } from "../pano_view_keys.js";
import { editorKeyAction } from "./shortcuts.js";
import { lensPickView, lensPinholePoint, surfaceHit } from "./stage_view.js";
import { orbitCenter } from "./view_camera.js";
import { navigationAction, wheelMeaning } from "./view_input.js";
import { FRAME_WHEEL_REST_MS } from "./view_scale.js";

// A double click that comes within this long after Set orbit center's press is the one its clicks made (a browser's
// double click interval is about 500 ms): it does not set T again.
const DOUBLE_CLICK_AFTER_PICK_MS = 600;

// How far (CSS px) a left press may move and still be a click that lets the selection go.
const CLICK_SLOP = 3;

// canvas, root, world, selected, onEscape, follow, paint, win, now, objectDeps (createStage's `objects`): createStage's.
// camera, input, wheelSteps, editorView, scheduler, objects: the stage's viewpoint, keys, wheel, three.js view, render
// loop and objects. The rest are the functions of stage.js and stage_frame_view.js the gestures call.
export function createStageInput(shared, {
  canvas, root, world, selected, onEscape, follow, paint, win, now, objectDeps,
  camera, input, wheelSteps, editorView, scheduler, objects,
  viewMode, viewport, navCamera, commitFrame, cancelFrame,
  stopCoast, local, objectsOn, paintOn, directionsOf, samplesOf, moved, setPicking, setCenterAt, syncUi, requestDraw, resize,
}) {
  // When (now(), ms) the wait's press last set T: the double click its clicks may make is not a second one.
  let pickedAt = -Infinity;

  // --- Hits.

  function pointOf(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  // The middle of the view (the Frame view's frame), in the stage's CSS px.
  function center() {
    const view = viewport();
    return { x: view.x + view.width / 2, y: view.y + view.height / 2 };
  }

  // Where a pick at `point` (the stage's CSS px) looks: { camera, x, y, width, height }, the view's camera and the point
  // in its box; on a lens Camera's Frame view the cube face its ray crosses and its pixel there (stage_view.js
  // lensPickView), null past 180° off the axis.
  function pickView(point) {
    const view = viewport();
    const { x, y } = local(point, view);
    if (view.hitLens) return lensPickView({ camera: view.camera, lens: view.hitLens }, x, y);
    return { camera: view.camera, x, y, width: view.width, height: view.height };
  }

  // The surface hit under `point` (the stage's CSS px): the GPU pick of the World content (pano_three_view.js pick) and
  // the ground. Read on a press and a wheel step only, never on a pointer move.
  function hitAt(point) {
    const at = pickView(point);
    if (!at) return null;
    const picked = editorView.pick(at.camera, at.x, at.y, at.width, at.height);
    return surfaceHit(at.camera, at.x, at.y, at.width, at.height, { ground: world.ground, picked });
  }

  // On a lens Camera's Frame view, the point a pan takes the pointer at `point` (the stage's CSS px) as (stage_view.js
  // lensPinholePoint), or null where it takes none; elsewhere the point itself.
  function panPoint(point) {
    const view = viewport();
    if (!view.hitLens) return point;
    const at = lensPinholePoint(view.hitLens, point.x - view.x, point.y - view.y);
    return at && { x: at.x + view.x, y: at.y + view.y };
  }

  // What the pointer is over (stage_objects.js hover, the CPU test): the cursor, and a redraw when a guide or the
  // gizmo's handle lights up or goes out.
  function hoverAt(point) {
    shared.pointer = point;
    if (paintOn()) {
      // The brush ring follows the pointer; nothing lights up under it.
      shared.objectCursor = null;
      objects?.leave();
      requestDraw(DRAW_REASON.OVERLAY);
      return;
    }
    if (!objects || !editorView.ready) return;
    const on = point && objectsOn();
    const { cursor, changed } = on ? objects.hover(local(point), { altHeld: input.altHeld() }) : { cursor: null, changed: objects.leave() };
    shared.objectCursor = cursor;
    if (changed) requestDraw();
  }

  function insideStage(point) {
    return point.x >= 0 && point.y >= 0 && point.x <= shared.size.width && point.y <= shared.size.height;
  }

  // --- Gestures.

  function begin(action, point, pointerId, knob = null) {
    stopCoast();
    const view = navCamera();
    if (view === shared.frameCamera) commitFrame();
    const frame = view === shared.frameCamera;
    switch (action) {
      case "orbit":
        view?.beginOrbit(orbitCenter({ selection: frame ? objectSelection() : selected(), frame }));
        break;
      case "pan":
        view?.beginPan(hitAt(knob ? center() : point));
        break;
      case "joystick":
        view?.beginJoystick();
        break;
      default:
        break;
    }
    input.beginGesture(action);
    // A pan on a lens Camera follows the pointer's pinhole point (panPoint), the knob's its own px.
    shared.drag = { action, pointerId, last: point, start: point, offset: 0, knob, camera: view, panLast: action === "pan" && !knob ? panPoint(point) : null };
    syncUi();
    requestDraw();
  }

  function move(point, event = {}) {
    if (Math.hypot(point.x - shared.drag.start.x, point.y - shared.drag.start.y) > CLICK_SLOP) shared.drag.moved = true;
    if (shared.drag.action === "paint") {
      shared.drag.last = point;
      shared.drag.handler.move(point, event);
      requestDraw();
      return;
    }
    if (shared.drag.action === "object") {
      shared.drag.last = point;
      if (shared.drag.moved) shared.drag.handler.move(point, event);
      requestDraw();
      return;
    }
    const dx = point.x - shared.drag.last.x;
    const dy = point.y - shared.drag.last.y;
    shared.drag.last = point;
    if (shared.drag.action === "joystick") {
      shared.drag.offset = shared.drag.start.y - point.y;
      scheduler.wake();
      return;
    }
    if (!dx && !dy) return;
    const view = shared.drag.camera;
    if (!view) return;
    if (shared.drag.action === "look") moved(view, view.look(dx, dy), "drag");
    else if (shared.drag.action === "orbit") moved(view, view.orbit(dx, dy), "drag");
    else if (shared.drag.action === "pan") {
      const at = shared.drag.knob ? null : panPoint(point);
      if (at && shared.drag.panLast) moved(view, view.pan(at.x - shared.drag.panLast.x, at.y - shared.drag.panLast.y), "drag");
      else if (shared.drag.knob) moved(view, view.pan(dx, dy), "drag");
      if (at) shared.drag.panLast = at;
    }
    if (view === camera) follow?.sample(shared.drag.action, dx, dy, now());
    requestDraw();
  }

  // A drag ends: let go (`cancel` false) or given up (Escape, the focus lost). A left click on nothing that did not
  // move lets the selection go.
  function end(cancel = false) {
    if (!shared.drag) return;
    const ended = shared.drag;
    shared.drag = null;
    if (ended.action === "object" || ended.action === "paint") {
      if (cancel) ended.handler.cancel();
      else ended.handler.end();
      if (shared.pointer) hoverAt(shared.pointer);
      syncUi();
      requestDraw();
      return;
    }
    if (!cancel && ended.click && !ended.moved && viewMode() !== "erp") objectDeps?.select(null);
    input.endGesture();
    // With `follow`, a drag let go while moving coasts on its gesture (its pan keeps the depth it grabbed).
    const coasts = !cancel && ended.camera === camera && !!follow?.release(ended.action, now());
    if (cancel) follow?.stop();
    if (!shared.keysMoving && !coasts) ended.camera?.endGesture();
    if (ended.camera === shared.frameCamera && shared.frameCamera) {
      if (cancel) cancelFrame();
      else commitFrame();
    }
    syncUi();
    requestDraw();
  }

  // The movement keys started on `keysCamera` and all of them are let go: the gesture ends (one Undo step in the
  // Frame view).
  function endKeys() {
    shared.keysCamera?.endGesture();
    if (shared.keysCamera === shared.frameCamera && shared.frameCamera && shared.frameGesture === "keys") commitFrame();
    shared.keysCamera = null;
  }

  // The selection the Camera tab's orbit and Frame Selected use: a World object only (the Camera itself does not count).
  function objectSelection() {
    const selection = selected();
    return selection?.kind === "object" ? selection : null;
  }

  // A left press on the objects (stage_objects.js press), in the view's box (on a lens Camera's bent picture too).
  function pressObject(point) {
    return objects.press(local(point, viewport()));
  }

  // --- The stage's events.

  function onPointerDown(event) {
    if (shared.drag) return;
    input.modifiers(event);
    const point = pointOf(event);
    const plainLeft = event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
    // Panorama mode's frame only shows: nothing on the stage moves or selects there.
    if (viewMode() === "erp") return;
    // Set orbit center waits: the left press sets T there and does nothing else (no look, no selection, no stroke).
    if (shared.picking && event.button === 0) {
      event.preventDefault();
      pickedAt = now();
      setPicking(false);
      if (viewMode() === "space") setCenterAt(point);
      return;
    }
    // A painting tool: a plain left press paints (nothing happens where it cannot, a hidden painting).
    if (plainLeft && paintOn()) {
      event.preventDefault();
      const view = viewport();
      const handler = paint.press(local(point, view), directionsOf(view), samplesOf);
      if (!handler) return;
      canvas.setPointerCapture?.(event.pointerId);
      shared.pointer = point;
      shared.drag = { action: "paint", pointerId: event.pointerId, last: local(point, view), start: local(point, view), offset: 0, knob: null, handler, moved: false };
      syncUi();
      requestDraw();
      return;
    }
    // The selected object's gizmo, handles and body take the press, in the Camera tab too; there a press on another
    // object selects it and its drag moves the Camera (`passes`, docs/space-and-view.md "Frame 表示"). A press on
    // nothing lets the selection go on its click.
    let pressedObject = false;
    let handler = plainLeft && objects && editorView.ready ? pressObject(point) : null;
    if (handler?.passes) {
      handler.end();
      handler = null;
      pressedObject = true;
    }
    if (handler) {
      event.preventDefault();
      canvas.setPointerCapture?.(event.pointerId);
      objects.leave();
      // A Frame view's change still waiting (a wheel run) is one Undo step before the object's edit.
      if (viewMode() === "frame") commitFrame();
      const at = local(point);
      shared.drag = { action: "object", pointerId: event.pointerId, last: at, start: at, offset: 0, knob: null, handler, moved: false };
      syncUi();
      requestDraw();
      return;
    }
    const action = navigationAction(event);
    if (!action || action === "object") return;
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    begin(action, point, event.pointerId);
    if (shared.drag && plainLeft && !pressedObject) shared.drag.click = true;
  }

  // The middle button's press would start the browser's autoscroll.
  function onMouseDown(event) {
    if (event.button === 1) event.preventDefault();
  }

  function onPointerMove(event) {
    if (!shared.drag || event.pointerId !== shared.drag.pointerId) {
      if (!shared.drag) {
        if (event.altKey !== input.altHeld()) {
          input.modifiers(event);
          requestDraw(DRAW_REASON.OVERLAY);
        }
        const point = pointOf(event);
        hoverAt(event.target === canvas && insideStage(point) ? point : null);
        syncUi();
      }
      return;
    }
    const point = shared.drag.knob ? { x: event.clientX, y: event.clientY } : pointOf(event);
    if (shared.drag.action === "paint") shared.pointer = point;
    move(shared.drag.action === "object" || shared.drag.action === "paint" ? local(point) : point, event);
  }

  function onPointerUp(event) {
    if (shared.drag && event.pointerId === shared.drag.pointerId) end(event.type === "pointercancel");
  }

  function onWheel(event) {
    const meaning = wheelMeaning(event);
    // Meta + wheel stays the browser's; Ctrl + wheel (a pinch) zooms and is not the page's zoom (docs/space-and-view.md
    // "マウスとキー").
    if (!meaning) return;
    event.preventDefault();
    const step = wheelSteps.push(event);
    if (!step) return;
    if (meaning === "zoom") {
      zoom(step);
      return;
    }
    const view = navCamera();
    if (!view) return;
    stopCoast();
    // A wheel run in the Frame view is a gesture of its own: another one under way is one step first (one during a
    // drag joins the drag's).
    if (view === shared.frameCamera && shared.frameGesture && shared.frameGesture !== "wheel" && !shared.drag) commitFrame();
    moved(view, view.wheel(step, hitAt(pointOf(event))), "wheel");
    if (view === shared.frameCamera && shared.frameGesture === "wheel" && !shared.drag) {
      clearTimeout(shared.wheelTimer);
      shared.wheelTimer = setTimeout(commitFrame, FRAME_WHEEL_REST_MS);
    }
    requestDraw();
  }

  // One zoom step (docs/space-and-view.md "寄る"): the 3D tab's and the Preview window's view changes its FOV at once (a
  // coast stops, as another operation starts).
  function zoom(step) {
    if (viewMode() !== "space") return;
    stopCoast();
    if (camera.zoom(step).moved) requestDraw();
  }

  // A double click turns the view to what is under the pointer (World image planes included, the one exception); in the
  // Camera tab's Frame view it turns the Camera (docs/space-and-view.md "Frame 表示").
  // With Alt held too (docs/space-and-view.md "マウスとキー"); nothing while a painting tool is chosen.
  function onDoubleClick(event) {
    const mode = viewMode();
    if (event.button !== 0 || (mode !== "space" && mode !== "frame") || paintOn() || (mode === "frame" && paint?.active())) return;
    if (now() - pickedAt < DOUBLE_CLICK_AFTER_PICK_MS) return;
    setCenterAt(pointOf(event));
  }

  function onContextMenu(event) {
    event.preventDefault();
  }

  // A context menu opened anywhere in the editor: Chromium sends no keyup while it is open, so every movement key
  // counts as released (docs/editor-interaction.md "キーボードの移動", "止める").
  function onAnyContextMenu() {
    if (releaseKeys()) scheduler.wake();
  }

  // The pointer capture was lost without a pointerup (the element went away): the drag ends there.
  function onLostCapture(event) {
    if (shared.drag && event.pointerId === shared.drag.pointerId) end(shared.drag.action === "object" || shared.drag.action === "paint");
  }

  // --- Keys, while the editor is open.

  // Escape takes back one thing (docs/studio-ui.md "閉じ方"): a view drag under way is let go; else the editor takes
  // back what is next in its order, or closes. A value box's drag takes its own Escape first, on the window's capture.
  function onEscapeKey(event) {
    if (editorKeyAction(event) !== "escape" || !stageOwnsKey(event, root)) return;
    event.preventDefault();
    event.stopPropagation();
    // A view drag under way takes Escape first, then Set orbit center's wait (docs/studio-ui.md "閉じ方").
    if (shared.drag) end(true);
    else if (shared.picking) setPicking(false);
    else onEscape();
  }

  function onKeyDown(event) {
    const alt = input.altHeld();
    input.modifiers(event);
    if (alt !== input.altHeld() && shared.pointer && !shared.drag) hoverAt(shared.pointer);
    if (alt !== input.altHeld()) requestDraw(DRAW_REASON.OVERLAY);
    // Shift pressed while a movement key is held makes it fast at once: the keys' modifiers follow every key event
    // (view_input.js keyUp passes them on and releases nothing for a key that is not held).
    if (!isMoveKey(event.code)) input.keyUp({ code: event.code, shiftKey: event.shiftKey });
    syncUi();
    if (!isMoveKey(event.code)) return;
    // A held key repeating where the stage does not have the keys (a field) lets go.
    if (!stageOwnsKey(event, root)) {
      input.keyUp(event);
      return;
    }
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    event.stopPropagation();
    if (input.keyDown(event, now()) && !shared.keysMoving) {
      stopCoast();
      const view = navCamera();
      if (view === shared.frameCamera && shared.frameGesture && shared.frameGesture !== "keys" && !shared.drag) commitFrame();
      if (!shared.drag) view?.beginKeys();
      shared.keysCamera = view;
      shared.keysMoving = true;
    }
    syncUi();
    scheduler.wake();
  }

  function onKeyUp(event) {
    const alt = input.altHeld();
    input.modifiers(event);
    if (alt !== input.altHeld() && shared.pointer && !shared.drag) hoverAt(shared.pointer);
    if (alt !== input.altHeld()) requestDraw(DRAW_REASON.OVERLAY);
    // macOS sends no keyup for a key let go while Meta is down: Meta going up lets every key go.
    const released = event.key === "Meta" ? releaseKeys() : input.keyUp(event);
    if (released && isMoveKey(event.code)) {
      event.preventDefault();
      event.stopPropagation();
    }
    // The next frame finds whether a key is still held, and ends the move when none is.
    scheduler.wake();
    syncUi();
  }

  function releaseKeys() {
    let released = false;
    for (const code of MOVE_KEY_CODES) released = input.keyUp({ code, shiftKey: false }) || released;
    return released;
  }

  // The window lost focus or the page was hidden: Alt up, every key released, the hover gone, the drag ended.
  function onLostFocus() {
    follow?.stop();
    setPicking(false);
    input.lostFocus();
    shared.keysMoving = false;
    wheelSteps.reset();
    if (shared.drag?.action === "object" || shared.drag?.action === "paint") {
      const ended = shared.drag;
      shared.drag = null;
      ended.handler.cancel();
    } else if (shared.drag) {
      const ended = shared.drag;
      shared.drag = null;
      ended.camera?.endGesture();
      // A drag of the Frame view ends as if let go: what it moved is one Undo step (docs/space-and-view.md "ウィンドウが
      // フォーカスを失ったとき").
    }
    endKeys();
    commitFrame();
    if (objects?.leave()) requestDraw();
    shared.objectCursor = null;
    camera.endGesture();
    syncUi();
    requestDraw();
  }

  function onVisibility() {
    if (win.document.visibilityState === "hidden") onLostFocus();
  }

  // The stage's listeners: added once the stage is made, removed when it is disposed.
  let resizeObserver = null;
  function listen() {
    resizeObserver = typeof win.ResizeObserver === "function"
      ? new win.ResizeObserver(() => {
        resize();
        requestDraw(DRAW_REASON.RESIZE);
      })
      : null;
    resizeObserver?.observe(canvas);

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("dblclick", onDoubleClick);
    canvas.addEventListener("contextmenu", onContextMenu);
    canvas.addEventListener("auxclick", onContextMenu);
    canvas.addEventListener("lostpointercapture", onLostCapture);
    root?.addEventListener("contextmenu", onAnyContextMenu, true);
    root?.addEventListener("lostpointercapture", onLostCapture, true);
    win.addEventListener("pointermove", onPointerMove, true);
    win.addEventListener("pointerup", onPointerUp, true);
    win.addEventListener("pointercancel", onPointerUp, true);
    // The movement keys are taken on the window's capture, before ComfyUI's (its W and A open sidebars behind the
    // editor); Escape on the document's capture, after a value box's drag has taken its own on the window's.
    win.addEventListener("keydown", onKeyDown, true);
    win.addEventListener("keyup", onKeyUp, true);
    win.document.addEventListener("keydown", onEscapeKey, true);
    win.addEventListener("blur", onLostFocus);
    win.document.addEventListener("visibilitychange", onVisibility);
  }

  function unlisten() {
    resizeObserver?.disconnect();
    canvas.removeEventListener("pointerdown", onPointerDown);
    canvas.removeEventListener("mousedown", onMouseDown);
    canvas.removeEventListener("wheel", onWheel);
    canvas.removeEventListener("dblclick", onDoubleClick);
    canvas.removeEventListener("contextmenu", onContextMenu);
    canvas.removeEventListener("auxclick", onContextMenu);
    canvas.removeEventListener("lostpointercapture", onLostCapture);
    root?.removeEventListener("contextmenu", onAnyContextMenu, true);
    root?.removeEventListener("lostpointercapture", onLostCapture, true);
    win.removeEventListener("pointermove", onPointerMove, true);
    win.removeEventListener("pointerup", onPointerUp, true);
    win.removeEventListener("pointercancel", onPointerUp, true);
    win.removeEventListener("keydown", onKeyDown, true);
    win.removeEventListener("keyup", onKeyUp, true);
    win.document.removeEventListener("keydown", onEscapeKey, true);
    win.removeEventListener("blur", onLostFocus);
    win.document.removeEventListener("visibilitychange", onVisibility);
  }

  return { pointOf, hitAt, hoverAt, begin, end, endKeys, objectSelection, listen, unlisten };
}
