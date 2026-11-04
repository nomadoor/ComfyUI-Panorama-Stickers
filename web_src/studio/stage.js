// The new UI's stage (docs/studio-ui.md "画面の区画", docs/space-and-view.md): the bridge between the stage's canvas,
// the pointer and the keys, the viewpoint (view_camera.js, view_input.js) and the lower three.js view
// (pano_editor_view.js createEditorView). It owns the render loop (pano_frame_scheduler.js), which moves the eased
// actions, the joystick and the movement keys, and draws. It builds no DOM: StudioEditor.vue renders the stage and
// hands over its canvas and root, and reads `ui` (a Vue reactive object) for the notice, the cursor and the knobs.
// Its parts: the Camera tab's Frame view (stage_frame_view.js), the Output window (stage_output.js), the pointer and
// the keys (stage_input.js), the objects (stage_objects.js).
import { createEditorView, deviceLens, shotLensImage, viewProjection } from "../pano_editor_view.js";
import { DRAW_REASON, createFrameScheduler } from "../pano_frame_scheduler.js";
import { createStageObjects } from "./stage_objects.js";
import { drawStageOverlay } from "./stage_overlay.js";
import { createStageFrameView } from "./stage_frame_view.js";
import { createStageInput } from "./stage_input.js";
import { LIVE_ERP_OWNER, OUTPUT_ERP_OWNER, OUTPUT_OWNER, createStageOutput } from "./stage_output.js";
import { liveErpSize } from "./erp_preview.js";
import { outputErpInput } from "./output_picture.js";
import { STAGE_CLEAR_COLOR, stageCamera, stageRenderInput, stageRenderSize } from "./stage_view.js";
import { createNotice, createViewCamera, frameSelectedSphere, orbitCenter } from "./view_camera.js";
import { KNOB_CURSOR, createViewInput, createWheelSteps, knobAction, litKnobs, stageCursor } from "./view_input.js";
import { BOUND_NOTICE_SECONDS, frameSeconds } from "./view_scale.js";
import { projectPoint } from "../pano_space.js";
import { markOnView, orbitMarkPoint, orbitMarkerAlpha, orbitMarkerFading } from "./orbit_marker.js";

// The owners (pano_three_view.js) the live ERP of the Camera tab's Panorama mode, the Output window's Frame picture and
// its live ERP draw for (stage_output.js).
export { LIVE_ERP_OWNER, OUTPUT_ERP_OWNER, OUTPUT_OWNER };

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
    // A loading guide's band of light runs on the overlay (load_reveal.js; the overlay is marked data-loading-guide).
    loadingGuide: false,
    // The Hide Grid switch: the grid is hidden (the shell writes it).
    gridHidden: false,
    // Set orbit center waits for a click on the stage (docs/space-and-view.md "Set orbit center"): the button shows it,
    // the top line says what to do, the stage's cursor is a crosshair.
    pickingCenter: false,
  };
}

// canvas: the stage's <canvas>; root: the editor's root element (whose keys the stage takes, stageOwnsKey).
// opening: view_camera.js openingView()'s { pose } (Reset View goes to view_camera.js RESET_VIEW, the World origin).
// world: { ground, camera } (the ground height, the Camera's position at the playhead), read at each
// frame (the editor changes its fields and asks for a redraw). background(): the background to draw ({ media,
// revision, coverage }) or null. content(): the working state's content at the playhead (stage_content.js
// stageContent()) or null. selected(): what is selected for the orbit's center and Frame Selected (view_camera.js
// orbitCenter: null, { kind: "object", sphere } or { kind: "camera", position }). ui: stageUi()'s fields, reactive.
// onEscape(): Escape with no view drag to let go; the editor takes back one thing or closes (docs/studio-ui.md "閉じ方").
// overlay: the 2D canvas over the stage's (the guides, the Camera's mark, the gizmo, the sky image's handles; null draws
// none).
// objects: what selecting and editing the objects needs (stage_objects.js createStageObjects: state, playhead,
// selection, select, edits, mode, tab, readOnly, upstream); without it the stage does not touch objects.
// cameraTab: the Camera tab (docs/studio-ui.md "Camera タブ", docs/space-and-view.md "Frame 表示"), read at each frame:
// tab() ("3d" or "camera"), mode() ("frame" or "panorama": the Camera's projection), shot() (the Camera at the
// playhead, pano_editor_state.js cameraShot), erpRange() (360 or 180), frame() (the frame box in the stage's CSS px,
// frame_layout.js frameRect, or null before it is laid out), erpCanvas() (the 2D canvas in the frame that shows the
// live ERP, or null), movable() (the Camera may move: not locked, not read-only), backgroundColor() (the node's
// background color, a hex RGB: past a lens's reach), output() (the Output window's canvases while it is open:
// { frame, erp }, a "bitmaprenderer" canvas for Frame mode and a 2D one for the live ERP, or null), and edits ({ live(pose), commit(), cancel() }: the Frame view's
// moves of the Camera, pose { position, yaw_deg, pitch_deg }, written to its Lanes by the editor). Without it the
// stage shows the 3D tab only.
// paint: the paint tools on the stage (studio/paint.js, docs/studio-ui.md "ペイントの道具"): active() (a painting tool is
// chosen), press(point, dirAt, samples) (a stroke starts at the view's point: its drag's handler, or null when it does
// not paint) and ring(point, dirAt) (the brush ring at the pointer, or null). dirAt(point) is the direction (the
// panorama convention) through a point of the view. Painting is the 3D tab's; a plain left press paints there.
// motion: what moves on its own besides the view (load_reveal.js createLoadReveal()'s animating(), revealing()): while
// animating() the stage draws each frame, and while revealing() an item fades in, so the Output window draws again too.
// follow: the Preview window's feel (preview_motion.js createPreviewMotion): the view shown follows the moved view and a
// drag let go coasts. Without it (the editor) the view shown is the moved view.
export function createStage({
  canvas,
  overlay = null,
  objects: objectDeps = null,
  cameraTab = null,
  root,
  opening,
  world,
  background = () => null,
  content = () => null,
  selected = () => null,
  ui,
  onEscape = () => {},
  motion: ownMotion = null,
  paint = null,
  follow = null,
  view: makeView = createEditorView,
  win = window,
  now = () => performance.now(),
}) {
  const camera = createViewCamera({ pose: opening.pose });
  camera.setWorld({ ground: world.ground, boxes: content()?.boxes ?? [], content: null, camera: world.camera ?? null });
  const input = createViewInput();
  const wheelSteps = createWheelSteps();
  const notice = createNotice();
  // The state the stage's parts share (stage_frame_view.js, stage_output.js, stage_input.js).
  const shared = {
    size: { width: 1, height: 1 },
    disposed: false,
    // The drag under way: { action, pointerId, last: { x, y }, start: { x, y }, offset, knob, handler, moved }; `action`
    // "object" is a press on an object (stage_objects.js), whose `handler` takes the moves.
    drag: null,
    // Where the pointer is over the stage (CSS px), null off it; and the cursor of what it is over.
    pointer: null,
    objectCursor: null,
    // Movement keys moved the view in the last frame, or one went down since (input.keyMotion() counts the time it
    // asks for, so it is read once a frame, in draw()).
    keysMoving: false,
    // Whether the Set orbit center button waits for a click on the stage (StudioNavWidget.vue).
    picking: false,
    // The Frame view's viewpoint (view_camera.js, `frame`), made when the Frame view first shows.
    frameCamera: null,
    // The Frame view's change not yet one Undo step: "drag", "keys" or "wheel" (the editor holds it live), or null.
    frameGesture: null,
    wheelTimer: 0,
    // The viewpoint the movement keys started on (stage_input.js endKeys).
    keysCamera: null,
  };
  let lastFrame = 0;
  let noticeTimer = 0;
  // When (now(), ms) a double click or Set orbit center last set T, for the orbit center's mark (orbit_marker.js), or null.
  let setAt = null;
  // The viewpoint T was set on (the 3D tab's or the Frame view's): the mark shows on that one only.
  let setOn = null;
  // The view toolbar's button the pointer is over ("orbit", "center") or null.
  let toolbarHover = null;

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
    onSplats: (owner) => scheduler.requestDraw(owner === OUTPUT_OWNER || owner === OUTPUT_ERP_OWNER ? DRAW_REASON.SPLAT_PREVIEW : DRAW_REASON.SPLAT_STAGE),
    onRestored: () => {
      resize();
      scheduler.requestDraw(DRAW_REASON.CONTEXT);
    },
  });

  const scheduler = createFrameScheduler({
    requestAnimationFrame: (callback) => win.requestAnimationFrame(callback),
    cancelAnimationFrame: (id) => win.cancelAnimationFrame(id),
    draw,
    animating: () => camera.animating() || shared.drag?.action === "joystick" || shared.keysMoving || !!ownMotion?.animating() || !!follow?.animating(),
  });

  const objects = objectDeps ? createStageObjects({
    ...objectDeps,
    editorView,
    // On a lens Camera's Frame view the camera carries its bent picture (docs/space-and-view.md "レンズの Camera の当たり").
    camera: () => viewport().objectCamera,
    size: () => {
      const { width, height } = viewport();
      return { width, height };
    },
    content: () => content(),
    ground: () => world.ground,
  }) : null;

  // --- The Camera tab: the Frame view, where the viewpoint is the Camera itself (a viewpoint of its own, whose moves
  // go to the Camera's Lanes), and Panorama mode, where the frame shows the live ERP and nothing moves.
  const { viewMode, viewport, navCamera, writeFrame, commitFrame, cancelFrame } = createStageFrameView(shared, { cameraTab, camera, world, content, shownPose });

  // The kind of lens image the Frame view drew last (pano_lens.js lensRenderPlan's `previous`).
  let lensKind = null;
  // The mode the last frame drew ("space", "frame", "erp"), and the live ERP's last result (for the tests).
  let lastMode = "space";
  let liveErp = null;

  // The 3D tab's view as it shows: the moved view, or with `follow` the view that follows it.
  function shownPose() {
    return follow ? follow.pose() : camera.pose();
  }

  // A coast under way (follow) stops where it is: another operation starts.
  function stopCoast() {
    if (follow?.stop() && !shared.drag && !shared.keysMoving) camera.endGesture();
  }

  function local(point, view = viewport()) {
    return { x: point.x - view.x, y: point.y - view.y };
  }

  // The guides and the CPU hover show on the 3D tab and the Frame view (a lens Camera's mapped onto its bent picture:
  // docs/space-and-view.md "レンズの Camera の当たり").
  function objectsOn() {
    const mode = viewMode();
    return !!objects && (mode === "space" || mode === "frame");
  }

  // A painting tool is chosen and the stage paints (the 3D tab, once the view is ready).
  function paintOn() {
    return !!paint && paint.active() && viewMode() === "space" && editorView.ready;
  }

  // The direction (the panorama convention) through a point of the view `view` (viewport()).
  function directionsOf(view) {
    const projection = viewProjection(view.camera, view.width, view.height);
    return (point) => projection.ray(point.x, point.y);
  }

  // The view's points of a pointer move: its coalesced events, else the move's own point.
  function samplesOf(event, at) {
    const list = typeof event?.getCoalescedEvents === "function" ? event.getCoalescedEvents() : [];
    if (!list.length) return [at];
    const view = viewport();
    return list.map((sample) => local(pointOf(sample), view));
  }

  // A move's result on `moved` (the viewpoint that moved): the notice, and the Camera's Lanes in the Frame view.
  function moved(view, result, kind) {
    report(result);
    if (view === shared.frameCamera && shared.frameCamera && result?.moved) writeFrame(kind);
  }

  // --- Drawing.

  function resize() {
    const rect = canvas.getBoundingClientRect();
    shared.size = { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
    camera.setScreen({ width: shared.size.width, height: shared.size.height });
    const ratio = win.devicePixelRatio || 1;
    const screenWidth = win.screen?.width || shared.size.width;
    const screenHeight = win.screen?.height || shared.size.height;
    const device = stageRenderSize(shared.size.width, shared.size.height, ratio, Math.max(screenWidth, shared.size.width), Math.max(screenHeight, shared.size.height));
    editorView.resize(device.width, device.height);
  }

  function draw(ts, reasons = new Set()) {
    if (ownMotion?.revealing()) reasons.add(DRAW_REASON.MEDIA);
    // Whether anything that moves the 3D picture runs this frame (an eased move that ends now still draws).
    const moving = camera.animating() || !!shared.drag || shared.keysMoving || !!ownMotion?.animating() || !!follow?.animating();
    const seconds = lastFrame ? frameSeconds((ts - lastFrame) / 1000) : 0;
    lastFrame = ts;
    camera.step(seconds);
    const motion = input.keyMotion(ts);
    if (shared.keysMoving && !motion && !shared.drag) endKeys();
    shared.keysMoving = !!motion;
    // Keys still held across a change of mode go on with the viewpoint that moves now.
    if (motion && !shared.keysCamera && !shared.drag) {
      shared.keysCamera = navCamera();
      shared.keysCamera?.beginKeys();
    }
    // An object's drag in the Frame view holds the state's gesture: the Camera waits until it ends.
    const keysHeld = !!shared.frameCamera && shared.keysCamera === shared.frameCamera && shared.drag?.action === "object";
    if (motion && shared.keysCamera && !keysHeld) moved(shared.keysCamera, shared.keysCamera.keys(motion.direction, motion.seconds, motion.fast), "keys");
    if (shared.drag?.action === "joystick" && seconds > 0 && shared.drag.camera) moved(shared.drag.camera, shared.drag.camera.joystick(shared.drag.offset, seconds), "drag");
    if (follow) {
      const coasted = follow.step(seconds, camera);
      report(coasted.result);
      if (coasted.ended && !shared.drag && !shared.keysMoving) camera.endGesture();
    }
    if (!camera.animating() && !motion && shared.drag?.action !== "joystick" && !follow?.animating()) lastFrame = 0;
    // The mark after T was set fades on frames of its own (overlay only); this frame draws it at no strength once it is
    // gone, and then they stop.
    if (setAt !== null) {
      if (orbitMarkerFading(sinceSet())) requestDraw(DRAW_REASON.OVERLAY);
      else setAt = null;
    }
    if (!editorView.ready) return;
    const shown = content();
    camera.setWorld({ ground: world.ground, boxes: shown?.boxes ?? [], camera: world.camera ?? null, content: shown?.sphere ?? null });
    shared.frameCamera?.setWorld({ ground: world.ground, boxes: shown?.boxes ?? [], camera: null, content: shown?.sphere ?? null });
    const mode = viewMode();
    const modeChanged = mode !== lastMode;
    if (modeChanged) changeMode(mode);
    // Only the 2D overlay changed (the orbit center's mark, the brush ring, a hover): the 3D picture and the Output
    // window stay as they are.
    const overlayOnly = !moving && !modeChanged && !motion && reasons.size > 0 && [...reasons].every((reason) => reason === DRAW_REASON.OVERLAY);
    if (overlayOnly) {
      drawOverlay();
      syncUi();
      return;
    }
    // The Output window's Frame picture goes first, in a corner of the canvas the stage's frame then covers.
    const output = outputTarget();
    if (output?.kind === "frame") drawOutputFrame(shown, output, reasons);
    if (mode === "erp") drawLiveErp(shown);
    else drawStage(shown, mode);
    if (output?.kind === "erp") drawOutputErp(shown, output, reasons);
    drawOverlay();
    syncUi();
  }

  // The mode changed (a tab, the Camera's projection): what was under way ends, the live ERP lets go when it hides.
  function changeMode(mode) {
    if (shared.drag) end(true);
    if (shared.keysMoving) endKeys();
    commitFrame();
    if (lastMode === "erp") {
      editorView.releaseSplats(LIVE_ERP_OWNER);
      liveErp = null;
    }
    // Entering the Frame view starts from the Camera's first T (docs/space-and-view.md "Frame 表示").
    if (mode === "frame") shared.frameCamera = null;
    setPicking(false);
    lastMode = mode;
  }

  // Set orbit center waits for a click (`on`) or no longer (docs/space-and-view.md "Set orbit center").
  function setPicking(on) {
    if (shared.picking === on) return;
    shared.picking = on;
    ui.pickingCenter = on;
    syncUi();
    requestDraw(DRAW_REASON.OVERLAY);
  }

  // T where a double click or Set orbit center's click points (`point`, the stage's CSS px): the view turns to it
  // (view_camera.js focus) and the orbit center's mark shows there, fading.
  // In the Frame view the Camera turns at once, one Undo step of its own (a wheel run still waiting is one first).
  function setCenterAt(point) {
    stopCoast();
    const view = viewMode() === "frame" ? navCamera() : camera;
    if (!view) return;
    if (view === shared.frameCamera) commitFrame();
    const result = view.focus(hitAt(point));
    if (result.moved) {
      setAt = now();
      setOn = view;
    }
    moved(view, result, "focus");
    if (view === shared.frameCamera) commitFrame();
    requestDraw();
  }

  // --- The Output window (docs/studio-ui.md "Output の小窓"): the Camera's output, drawn at the window's device
  // pixels only when what it shows can have changed (a reason other than OUTPUT_KEEPS, a new size or kind).
  const { outputTarget, drawOutputFrame, drawOutputErp, stop: stopOutput } = createStageOutput(shared, { canvas, cameraTab, world, background, win, editorView, camera });

  // The 3D tab's view over the whole canvas, or the Camera tab's Frame view through the Camera into its rect.
  function drawStage(shown, mode) {
    const view = viewport();
    const clearColor = ui.background === "loading" ? null : STAGE_CLEAR_COLOR;
    let rect = null;
    let lens = null;
    if (mode === "frame") {
      editorView.clear(clearColor);
      if (!view.shot) return;
      const sx = canvas.width / shared.size.width;
      const sy = canvas.height / shared.size.height;
      rect = { x: view.x * sx, y: view.y * sy, w: view.width * sx, h: view.height * sy };
      lens = view.lens ? shotLensImage(view.shot, rect.w, rect.h, cameraTab.backgroundColor(), deviceLens(view.lens, sx), lensKind) : null;
      lensKind = lens?.kind ?? null;
    }
    editorView.render(stageRenderInput({
      camera: view.drawCamera ?? view.camera,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      background: background(),
      ground: world.ground,
      gridHidden: ui.gridHidden,
      clearColor,
      content: shown,
      rect,
      lens,
    }));
  }

  // Panorama mode: the live ERP from the Camera's position in the frame's canvas, at the frame's device pixels
  // (docs/threejs-spark-integration.md "Panorama モードの ERP の表示"); the stage's own canvas is cleared. The ground
  // grid is drawn into it unless it is hidden, so the place shows here too (docs/space-and-view.md "地面のグリッドと原点の
  // 印"; the Output window's ERP has none).
  function drawLiveErp(shown) {
    editorView.clear(STAGE_CLEAR_COLOR);
    const frame = cameraTab.frame();
    const target = cameraTab.erpCanvas();
    if (!(frame?.width > 0 && frame?.height > 0) || !target) return;
    const range = cameraTab.erpRange();
    const pixels = liveErpSize(frame.width, frame.height, win.devicePixelRatio || 1, range);
    const drawn = editorView.renderLiveErp(outputErpInput({
      shot: cameraTab.shot(),
      erpRange: range,
      ground: world.ground,
      radius: camera.bound(),
      width: pixels.width,
      height: pixels.height,
      background: background(),
      content: shown,
      owner: LIVE_ERP_OWNER,
      canvas: target,
      gridHidden: ui.gridHidden,
    }));
    // What drew: the last call's, and the time of the last one that drew the faces.
    if (drawn && (drawn.faces || drawn.pass)) liveErp = { ...drawn, facesMs: drawn.faces ? drawn.ms : liveErp?.facesMs ?? null };
  }

  // The 2D overlay, at the canvas's CSS size times the device pixel ratio.
  function drawOverlay() {
    if (!overlay) return;
    const ratio = win.devicePixelRatio || 1;
    const width = Math.max(1, Math.round(shared.size.width * ratio));
    const height = Math.max(1, Math.round(shared.size.height * ratio));
    if (overlay.width !== width || overlay.height !== height) {
      overlay.width = width;
      overlay.height = height;
    }
    const ctx = overlay.getContext("2d");
    if (!ctx) return;
    const view = viewport();
    const scene = objectsOn() ? objects.overlay({ altHeld: input.altHeld(), gridHidden: ui.gridHidden }) : null;
    // No brush ring while Set orbit center waits (its press paints nothing; the cursor is a crosshair).
    const ring = paintOn() && !shared.picking && shared.pointer && (!shared.drag || shared.drag.action === "paint") ? paint.ring(local(shared.pointer, view), directionsOf(view)) : null;
    drawStageOverlay(ctx, {
      camera: view.objectCamera,
      width: view.width,
      height: view.height,
      origin: { x: view.x, y: view.y },
      ratio,
      scene,
      ring,
      orbit: orbitMark(view),
    });
    const loading = !!scene?.loading;
    if (ui.loadingGuide !== loading) ui.loadingGuide = loading;
  }

  // Seconds since a double click or Set orbit center last set T, or null.
  function sinceSet() {
    return setAt === null ? null : (now() - setAt) / 1000;
  }

  // The orbit center's mark (docs/space-and-view.md "オービットの中心の印"; orbit_marker.js) on the 3D tab, the Frame view
  // (a Camera that can move) and the Preview window: { x, y, alpha } in the view's CSS px, or null. Its point is a World
  // point (orbit_marker.js orbitMarkPoint) with T as it is set (the destination, not one an eased move carries).
  function orbitMark(view) {
    const mode = viewMode();
    if (mode !== "space" && mode !== "frame") return null;
    const nav = mode === "space" ? camera : (shared.frameCamera && cameraTab.movable() ? shared.frameCamera : null);
    if (!nav) return null;
    const frame = nav === shared.frameCamera;
    const state = {
      alt: input.altHeld(),
      orbitKnob: toolbarHover === "orbit",
      // Set orbit center works in the 3D tab only.
      centerButton: !frame && toolbarHover === "center",
      picking: !frame && shared.picking,
      orbiting: shared.drag?.action === "orbit" && shared.drag.camera === nav,
      sinceSet: setOn === nav ? sinceSet() : null,
    };
    const alpha = orbitMarkerAlpha(state);
    if (!(alpha > 0)) return null;
    // The next orbit's center is looked up only when the mark can be on it.
    const wantsCenter = (state.alt || state.orbitKnob) && !state.orbiting && !state.picking;
    const nextCenter = wantsCenter ? orbitCenter({ selection: frame ? objectSelection() : selected(), frame }) : null;
    const point = orbitMarkPoint({ ...state, target: nav.destination().target, nextCenter });
    // The Frame view's camera spans more than the frame box (its context reaches the stage's edges): the mark stays in
    // the box.
    const frameBox = frame ? cameraTab.frame() : null;
    const box = frameBox
      ? { x: frameBox.x - view.x, y: frameBox.y - view.y, width: frameBox.width, height: frameBox.height }
      : { x: 0, y: 0, width: view.width, height: view.height };
    const at = markOnView(projectPoint(view.objectCamera, point, view.width, view.height), box);
    return at ? { ...at, alpha, box } : null;
  }

  // A change of size (the stage's canvas, the Camera tab's frame box or its ERP canvas, the Output window) draws at once,
  // before the browser paints: a resized canvas is cleared and would otherwise show so, or stretched, for a frame
  // (docs/timeline-ui.md: the view is drawn again at its new size in the same frame).
  function requestDraw(reason = DRAW_REASON.VIEW) {
    if (shared.disposed) return;
    scheduler.requestDraw(reason);
    if (reason === DRAW_REASON.RESIZE) scheduler.flush(now());
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
    ui.lit = litKnobs({ gesture, keysMoving: shared.keysMoving, altHeld: input.altHeld() });
    ui.knobDrag = !!shared.drag?.knob;
    const dragged = shared.drag?.action === "object" ? shared.objectCursor : null;
    // Set orbit center waits for a click.
    if (shared.picking && !shared.drag) {
      ui.cursor = "crosshair";
      return;
    }
    // A painting tool shows its brush ring in place of the cursor (a crosshair for the lasso), but while the view moves.
    if (paintOn() && !shared.drag?.knob && (!shared.drag || shared.drag.action === "paint")) {
      const view = viewport();
      ui.cursor = shared.pointer && paint.ring(local(shared.pointer, view), directionsOf(view)) ? "none" : "crosshair";
      return;
    }
    ui.cursor = shared.drag?.knob ? KNOB_CURSOR.drag : (dragged ?? stageCursor({ gesture, altHeld: input.altHeld(), objectCursor: shared.drag ? null : shared.objectCursor }));
  }

  // --- The pointer and the keys (stage_input.js).
  const { pointOf, hitAt, hoverAt, begin, end, endKeys, objectSelection, listen, unlisten } = createStageInput(shared, {
    canvas, root, world, selected, onEscape, follow, paint, win, now, objectDeps,
    camera, input, wheelSteps, editorView, scheduler, objects,
    viewMode, viewport, navCamera, commitFrame, cancelFrame,
    stopCoast, local, objectsOn, paintOn, directionsOf, samplesOf, moved, setPicking, setCenterAt, syncUi, requestDraw, resize,
  });

  listen();

  syncUi();

  return {
    // A knob's drag starts (StudioNavWidget.vue: "orbit", "pan" or "move"); the pan grabs the surface hit at the
    // screen center. Its moves come through the window's pointer events.
    knobDown(knob, event) {
      const action = knobAction(knob);
      if (!action || shared.drag || event.button !== 0 || !navCamera()) return;
      event.preventDefault();
      event.currentTarget?.setPointerCapture?.(event.pointerId);
      input.modifiers(event);
      begin(action, { x: event.clientX, y: event.clientY }, event.pointerId, knob);
    },
    // The pointer is over a button of the view toolbar (StudioNavWidget.vue: "orbit", "center") or left it (null): the
    // orbit center's mark shows while it is there.
    toolbarHover(knob) {
      const next = knob === "orbit" || knob === "center" ? knob : null;
      if (toolbarHover === next) return;
      toolbarHover = next;
      requestDraw(DRAW_REASON.OVERLAY);
    },
    // Set orbit center was pressed: it waits for a click on the stage, or stops waiting when it already did. The 3D tab
    // only (the Preview window's stage is a 3D view too).
    pickCenter() {
      setPicking(!shared.picking && viewMode() === "space");
    },
    // The Frame view's change still waiting (a wheel run) becomes one Undo step now: before another edit or a step.
    settle() {
      if (!shared.drag && !shared.keysMoving) commitFrame();
    },
    // Reset View: to the World origin, level, yaw 0 (view_camera.js RESET_VIEW; ADR 0058). Not in the Camera tab.
    resetView() {
      if (viewMode() !== "space") return;
      stopCoast();
      report(camera.reset());
      requestDraw();
    },
    // Frame Selected: the selected object (selected(), or `selection` when given: a Timeline row's double click), else
    // the whole World content; with nothing to frame it says so. In the Frame view it moves the Camera at once, as one
    // Undo step (a selected Camera does not count there); in Panorama mode nothing moves.
    frameSelected(selection = selected()) {
      const view = navCamera();
      if (!view) return;
      const frame = view === shared.frameCamera;
      if (frame) commitFrame();
      const chosen = frame ? (selection?.kind === "object" ? selection : null) : selection;
      moved(view, view.frameSelected(frameSelectedSphere({ selection: chosen, content: content()?.sphere ?? null, ground: world.ground })), "drag");
      if (frame) commitFrame();
      requestDraw();
    },
    // The shell changed something the stage draws (the grid switch, a background that loaded).
    redraw(reason = DRAW_REASON.STATE) {
      requestDraw(reason);
    },
    // The chosen tool or brush changed (docs/studio-ui.md "ペイントの道具"): the cursor and the brush ring follow; a
    // stroke under way when the tools change (a tool chosen with the keys) is given up.
    toolChanged() {
      if (shared.drag?.action === "paint" && !paint?.active()) end(true);
      if (shared.pointer) hoverAt(shared.pointer);
      syncUi();
      requestDraw(DRAW_REASON.OVERLAY);
    },
    // The box of a loaded World item (the lower view's), null while it loads.
    sceneBox: (url) => editorView.sceneBox(url),
    sceneItemError: (key) => editorView.sceneItemError(key),
    // [add-drop] What Add and the drop need of the view (studio/add_files.js): the three.js camera, the stage's CSS
    // size, the pose (its T), the world bound, and the GPU pick of the World content under a point (null while the
    // view is not ready).
    // They are the 3D tab's (the editor takes no file in the Camera tab).
    landing: {
      camera: () => stageCamera(camera.pose(), shared.size.width, shared.size.height, camera.bound()),
      size: () => shared.size,
      pose: () => camera.pose(),
      bound: () => camera.bound(),
      pick: ({ x, y }) => (editorView.ready ? editorView.pick(stageCamera(camera.pose(), shared.size.width, shared.size.height, camera.bound()), x, y, shared.size.width, shared.size.height) : null),
    },
    // The pose to remember on close: where an eased move goes.
    destination: () => camera.destination(),
    pose: () => camera.pose(),
    // The live ERP's last draw that drew something ({ faces, pass, counts, ms, facesMs }, pano_three_view.js
    // renderLiveErp) while Panorama mode shows, else null; and what the stage shows ("space", "frame", "erp").
    liveErp: () => liveErp,
    mode: () => viewMode(),
    // The Frame view's viewport in the stage's CSS px ({ camera, x, y, width, height }), for the tests.
    viewport: () => {
      const { camera: view, x, y, width, height } = viewport();
      return { camera: view, x, y, width, height };
    },
    dispose() {
      if (shared.disposed) return;
      shared.disposed = true;
      commitFrame();
      stopOutput();
      camera.stop();
      clearTimeout(noticeTimer);
      scheduler.stop();
      unlisten();
      editorView.dispose();
    },
  };
}
