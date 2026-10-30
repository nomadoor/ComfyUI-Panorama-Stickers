// The new UI's stage (docs/studio-ui.md "画面の区画", docs/space-and-view.md): the bridge between the stage's canvas,
// the pointer and the keys, the viewpoint (view_camera.js, view_input.js) and the lower three.js view
// (pano_editor_view.js createEditorView). It owns the render loop (pano_frame_scheduler.js), which moves the eased
// actions, the joystick and the movement keys, and draws. It builds no DOM: StudioEditor.vue renders the stage and
// hands over its canvas and root, and reads `ui` (a Vue reactive object) for the notice, the cursor and the knobs.
import { createEditorView } from "../pano_editor_view.js";
import { DRAW_REASON, createFrameScheduler } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { isMoveKey } from "../pano_view_keys.js";
import { createStageObjects } from "./stage_objects.js";
import { drawStageOverlay } from "./stage_overlay.js";
import { STAGE_CLEAR_COLOR, stageCamera, stageRenderInput, stageRenderSize, surfaceHit } from "./stage_view.js";
import { createNotice, createViewCamera, frameSelectedSphere, orbitCenter } from "./view_camera.js";
import { KNOB_CURSOR, createViewInput, createWheelSteps, knobAction, litKnobs, navigationAction, stageCursor } from "./view_input.js";
import { BOUND_NOTICE_SECONDS, frameSeconds } from "./view_scale.js";

// The fields of `ui` the stage writes (the shell reads them).
export function stageUi() {
  return {
    // The three.js view: "loading", "ready" or "failed" (the chunk or WebGL is unavailable).
    view: "loading",
    // The one-line notice (VIEW_NOTICES' text) or null.
    notice: null,
    // The stage's CSS cursor.
    cursor: "",
    // The knobs lit now ("orbit", "pan", "move").
    lit: [],
    // A knob is being dragged: the whole editor shows the grabbing cursor.
    knobDrag: false,
    // The Hide Grid switch: the grid and the origin mark are hidden (the shell writes it).
    gridHidden: false,
  };
}

// canvas: the stage's <canvas>; root: the editor's root element (whose keys the stage takes, stageOwnsKey).
// opening: view_camera.js openingView()'s { pose }; output: the output view Reset View goes to ({ position, yaw_deg,
// pitch_deg }). world: { ground, camera } (the ground height, the Camera's position at the playhead), read at each
// frame (the editor changes its fields and asks for a redraw). background(): the background to draw ({ media,
// revision, coverage }) or null. content(): the working state's content at the playhead (stage_content.js
// stageContent()) or null. selected(): what is selected for the orbit's center and Frame Selected (view_camera.js
// orbitCenter: null, { kind: "object", sphere } or { kind: "camera", position }). ui: stageUi()'s fields, reactive.
// onEscape(): Escape with no view drag to let go; the editor takes back one thing or closes (docs/studio-ui.md "閉じ方").
// overlay: the 2D canvas over the stage's (the guides, the Camera's mark, the sky image's handles; null draws none).
// objects: what selecting and editing the objects needs (stage_objects.js createStageObjects: state, playhead,
// selection, select, edits, mode, tab, readOnly); without it the stage does not touch objects.
export function createStage({
  canvas,
  overlay = null,
  objects: objectDeps = null,
  root,
  opening,
  output,
  world,
  background = () => null,
  content = () => null,
  selected = () => null,
  ui,
  onEscape = () => {},
  view: makeView = createEditorView,
  win = window,
  now = () => performance.now(),
}) {
  const camera = createViewCamera({ pose: opening.pose });
  camera.setWorld({ ground: world.ground, boxes: [], content: null, camera: world.camera ?? null });
  const input = createViewInput();
  const wheelSteps = createWheelSteps();
  const notice = createNotice();
  let size = { width: 1, height: 1 };
  let disposed = false;
  // The drag under way: { action, pointerId, last: { x, y }, start: { x, y }, offset, knob, handler, moved }; `action`
  // "object" is a press on an object (stage_objects.js), whose `handler` takes the moves.
  let drag = null;
  // Where the pointer is over the stage (CSS px), null off it; and the cursor of what it is over.
  let pointer = null;
  let objectCursor = null;
  // How far (CSS px) a left press may move and still be a click that lets the selection go.
  const CLICK_SLOP = 3;
  let lastFrame = 0;
  let noticeTimer = 0;
  // Movement keys moved the view in the last frame, or one went down since (input.keyMotion() counts the time it
  // asks for, so it is read once a frame, in draw()).
  let keysMoving = false;

  const editorView = makeView({
    canvas,
    onReady: () => {
      ui.view = "ready";
      resize();
      scheduler.requestDraw(DRAW_REASON.CONTEXT);
    },
    onFailed: () => {
      ui.view = "failed";
    },
    onUpdate: () => scheduler.requestDraw(DRAW_REASON.MEDIA),
    onSplats: () => scheduler.requestDraw(DRAW_REASON.SPLAT_STAGE),
    onRestored: () => {
      resize();
      scheduler.requestDraw(DRAW_REASON.CONTEXT);
    },
  });

  const scheduler = createFrameScheduler({
    requestAnimationFrame: (callback) => win.requestAnimationFrame(callback),
    cancelAnimationFrame: (id) => win.cancelAnimationFrame(id),
    draw,
    animating: () => camera.animating() || drag?.action === "joystick" || keysMoving,
  });

  const objects = objectDeps ? createStageObjects({
    ...objectDeps,
    editorView,
    camera: () => cameraNow(),
    size: () => size,
    content: () => content(),
    ground: () => world.ground,
  }) : null;

  // --- Drawing.

  function cameraNow() {
    return stageCamera(camera.pose(), size.width, size.height, camera.bound());
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    size = { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
    camera.setScreen({ width: size.width, height: size.height });
    const ratio = win.devicePixelRatio || 1;
    const screenWidth = win.screen?.width || size.width;
    const screenHeight = win.screen?.height || size.height;
    const device = stageRenderSize(size.width, size.height, ratio, Math.max(screenWidth, size.width), Math.max(screenHeight, size.height));
    editorView.resize(device.width, device.height);
  }

  function draw(ts) {
    const seconds = lastFrame ? frameSeconds((ts - lastFrame) / 1000) : 0;
    lastFrame = ts;
    camera.step(seconds);
    const motion = input.keyMotion(ts);
    if (keysMoving && !motion && !drag) camera.endGesture();
    keysMoving = !!motion;
    if (motion) report(camera.keys(motion.direction, motion.seconds, motion.fast));
    if (drag?.action === "joystick" && seconds > 0) report(camera.joystick(drag.offset, seconds));
    if (!camera.animating() && !motion && drag?.action !== "joystick") lastFrame = 0;
    if (!editorView.ready) return;
    const shown = content();
    camera.setWorld({ ground: world.ground, camera: world.camera ?? null, content: shown?.sphere ?? null });
    editorView.render(stageRenderInput({
      camera: cameraNow(),
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      background: background(),
      ground: world.ground,
      gridHidden: ui.gridHidden,
      clearColor: ui.background === "loading" ? null : STAGE_CLEAR_COLOR,
      content: shown,
      gizmo: objects ? objects.gizmo() : null,
    }));
    drawOverlay();
    syncUi();
  }

  // The 2D overlay, at the canvas's CSS size times the device pixel ratio.
  function drawOverlay() {
    if (!overlay) return;
    const ratio = win.devicePixelRatio || 1;
    const width = Math.max(1, Math.round(size.width * ratio));
    const height = Math.max(1, Math.round(size.height * ratio));
    if (overlay.width !== width || overlay.height !== height) {
      overlay.width = width;
      overlay.height = height;
    }
    const ctx = overlay.getContext("2d");
    if (!ctx) return;
    drawStageOverlay(ctx, {
      camera: cameraNow(),
      width: size.width,
      height: size.height,
      ratio,
      scene: objects ? objects.overlay({ altHeld: input.altHeld(), gridHidden: ui.gridHidden }) : null,
    });
  }

  function requestDraw(reason = DRAW_REASON.VIEW) {
    if (!disposed) scheduler.requestDraw(reason);
  }

  // --- The notice, the cursor and the knobs.

  function report(result) {
    if (!result?.notice) return;
    notice.show(result.notice, now() / 1000);
    ui.notice = notice.current(now() / 1000);
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      ui.notice = notice.current(now() / 1000);
    }, BOUND_NOTICE_SECONDS * 1000 + 20);
  }

  function syncUi() {
    const gesture = input.gesture();
    ui.lit = litKnobs({ gesture, keysMoving, altHeld: input.altHeld() });
    ui.knobDrag = !!drag?.knob;
    const dragged = drag?.action === "object" ? objectCursor : null;
    ui.cursor = drag?.knob ? KNOB_CURSOR.drag : (dragged ?? stageCursor({ gesture, altHeld: input.altHeld(), objectCursor: drag ? null : objectCursor }));
  }

  // --- Hits.

  function pointOf(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function center() {
    return { x: size.width / 2, y: size.height / 2 };
  }

  // The surface hit under (x, y): the GPU pick of the World content (pano_three_view.js pick) and the ground.
  function hitAt({ x, y }) {
    const view = cameraNow();
    const picked = editorView.pick(view, x, y, size.width, size.height);
    return surfaceHit(view, x, y, size.width, size.height, { ground: world.ground, picked });
  }

  // What the pointer is over (stage_objects.js hover, the CPU test): the cursor, and a redraw when a guide or the
  // gizmo's handle lights up or goes out.
  function hoverAt(point) {
    pointer = point;
    if (!objects || !editorView.ready) return;
    const { cursor, changed } = point ? objects.hover(point, { altHeld: input.altHeld() }) : { cursor: null, changed: objects.leave() };
    objectCursor = cursor;
    if (changed) requestDraw();
  }

  function insideStage(point) {
    return point.x >= 0 && point.y >= 0 && point.x <= size.width && point.y <= size.height;
  }

  // --- Gestures.

  function begin(action, point, pointerId, knob = null) {
    switch (action) {
      case "orbit":
        camera.beginOrbit(orbitCenter({ selection: selected() }));
        break;
      case "pan":
        camera.beginPan(hitAt(knob ? center() : point));
        break;
      case "joystick":
        camera.beginJoystick();
        break;
      default:
        break;
    }
    input.beginGesture(action);
    drag = { action, pointerId, last: point, start: point, offset: 0, knob };
    syncUi();
    requestDraw();
  }

  function move(point, event = {}) {
    if (Math.hypot(point.x - drag.start.x, point.y - drag.start.y) > CLICK_SLOP) drag.moved = true;
    if (drag.action === "object") {
      drag.last = point;
      if (drag.moved) drag.handler.move(point, event);
      requestDraw();
      return;
    }
    const dx = point.x - drag.last.x;
    const dy = point.y - drag.last.y;
    drag.last = point;
    if (drag.action === "joystick") {
      drag.offset = drag.start.y - point.y;
      scheduler.wake();
      return;
    }
    if (!dx && !dy) return;
    if (drag.action === "look") report(camera.look(dx, dy));
    else if (drag.action === "orbit") report(camera.orbit(dx, dy));
    else if (drag.action === "pan") report(camera.pan(dx, dy));
    requestDraw();
  }

  // A drag ends: let go (`cancel` false) or given up (Escape, the focus lost). A left click on nothing that did not
  // move lets the selection go.
  function end(cancel = false) {
    if (!drag) return;
    const ended = drag;
    drag = null;
    if (ended.action === "object") {
      if (cancel) ended.handler.cancel();
      else ended.handler.end();
      if (pointer) hoverAt(pointer);
      syncUi();
      requestDraw();
      return;
    }
    if (!cancel && ended.click && !ended.moved) objectDeps?.select(null);
    input.endGesture();
    if (!keysMoving) camera.endGesture();
    syncUi();
    requestDraw();
  }

  // --- The stage's events.

  function onPointerDown(event) {
    if (drag) return;
    input.modifiers(event);
    const point = pointOf(event);
    const plainLeft = event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
    const handler = plainLeft && objects && editorView.ready ? objects.press(point) : null;
    if (handler) {
      event.preventDefault();
      canvas.setPointerCapture?.(event.pointerId);
      objects.leave();
      drag = { action: "object", pointerId: event.pointerId, last: point, start: point, offset: 0, knob: null, handler, moved: false };
      syncUi();
      requestDraw();
      return;
    }
    const action = navigationAction(event);
    if (!action || action === "object") return;
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    begin(action, point, event.pointerId);
    if (drag && plainLeft) drag.click = true;
  }

  // The middle button's press would start the browser's autoscroll.
  function onMouseDown(event) {
    if (event.button === 1) event.preventDefault();
  }

  function onPointerMove(event) {
    if (!drag || event.pointerId !== drag.pointerId) {
      if (!drag) {
        if (event.altKey !== input.altHeld()) input.modifiers(event);
        const point = pointOf(event);
        hoverAt(event.target === canvas && insideStage(point) ? point : null);
        syncUi();
      }
      return;
    }
    move(drag.knob ? { x: event.clientX, y: event.clientY } : pointOf(event), event);
  }

  function onPointerUp(event) {
    if (drag && event.pointerId === drag.pointerId) end(event.type === "pointercancel");
  }

  function onWheel(event) {
    event.preventDefault();
    const step = wheelSteps.push(event);
    if (!step) return;
    report(camera.wheel(step, hitAt(pointOf(event))));
    requestDraw();
  }

  // A double click turns the view to what is under the pointer (World image planes included, the one exception).
  function onDoubleClick(event) {
    if (event.button !== 0 || event.altKey) return;
    report(camera.focus(hitAt(pointOf(event))));
    requestDraw();
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
    if (drag && event.pointerId === drag.pointerId) end(drag.action === "object");
  }

  // --- Keys, while the editor is open.

  // Escape takes back one thing (docs/studio-ui.md "閉じ方"): a view drag under way is let go; else the editor takes
  // back what is next in its order, or closes. A value box's drag takes its own Escape first, on the window's capture.
  function onEscapeKey(event) {
    if (event.key !== "Escape" || !stageOwnsKey(event, root)) return;
    event.preventDefault();
    event.stopPropagation();
    if (drag) end(true);
    else onEscape();
  }

  function onKeyDown(event) {
    const alt = input.altHeld();
    input.modifiers(event);
    if (alt !== input.altHeld() && pointer && !drag) hoverAt(pointer);
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
    if (input.keyDown(event, now()) && !keysMoving) {
      if (!drag) camera.beginKeys();
      keysMoving = true;
    }
    syncUi();
    scheduler.wake();
  }

  function onKeyUp(event) {
    const alt = input.altHeld();
    input.modifiers(event);
    if (alt !== input.altHeld() && pointer && !drag) hoverAt(pointer);
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
    for (const code of ["KeyW", "KeyA", "KeyS", "KeyD", "KeyQ", "KeyE"]) released = input.keyUp({ code, shiftKey: false }) || released;
    return released;
  }

  // The window lost focus or the page was hidden: Alt up, every key released, the hover gone, the drag ended.
  function onLostFocus() {
    input.lostFocus();
    keysMoving = false;
    wheelSteps.reset();
    if (drag?.action === "object") {
      const ended = drag;
      drag = null;
      ended.handler.cancel();
    } else if (drag) {
      drag = null;
      camera.endGesture();
    }
    if (objects?.leave()) requestDraw();
    objectCursor = null;
    camera.endGesture();
    syncUi();
    requestDraw();
  }

  function onVisibility() {
    if (win.document.visibilityState === "hidden") onLostFocus();
  }

  const resizeObserver = typeof win.ResizeObserver === "function"
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

  syncUi();

  return {
    // A knob's drag starts (StudioNavWidget.vue: "orbit", "pan" or "move"); the pan grabs the surface hit at the
    // screen center. Its moves come through the window's pointer events.
    knobDown(knob, event) {
      const action = knobAction(knob);
      if (!action || drag || event.button !== 0) return;
      event.preventDefault();
      event.currentTarget?.setPointerCapture?.(event.pointerId);
      input.modifiers(event);
      begin(action, { x: event.clientX, y: event.clientY }, event.pointerId, knob);
    },
    // Reset View: to the output view the editor opened with.
    resetView() {
      report(camera.reset(output));
      requestDraw();
    },
    // Frame Selected: the selected object (selected(), or `selection` when given: a Timeline row's double click), else
    // the whole World content; with nothing to frame it says so.
    frameSelected(selection = selected()) {
      report(camera.frameSelected(frameSelectedSphere({ selection, content: content()?.sphere ?? null, ground: world.ground })));
      requestDraw();
    },
    // The shell changed something the stage draws (the grid switch, a background that loaded).
    redraw(reason = DRAW_REASON.STATE) {
      requestDraw(reason);
    },
    // The box of a loaded World item (the lower view's), null while it loads.
    sceneBox: (url) => editorView.sceneBox(url),
    // The pose to remember on close: where an eased move goes.
    destination: () => camera.destination(),
    pose: () => camera.pose(),
    dispose() {
      if (disposed) return;
      disposed = true;
      camera.stop();
      clearTimeout(noticeTimer);
      scheduler.stop();
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
      editorView.dispose();
    },
  };
}
