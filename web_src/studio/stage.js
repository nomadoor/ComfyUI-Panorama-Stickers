// The new UI's stage (docs/studio-ui.md "画面の区画", docs/space-and-view.md): the bridge between the stage's canvas,
// the pointer and the keys, the viewpoint (view_camera.js, view_input.js) and the lower three.js view
// (pano_editor_view.js createEditorView). It owns the render loop (pano_frame_scheduler.js), which moves the eased
// actions, the joystick and the movement keys, and draws. It builds no DOM: StudioEditor.vue renders the stage and
// hands over its canvas and root, and reads `ui` (a Vue reactive object) for the notice, the cursor and the knobs.
import { createEditorView, deviceLens, shotCamera, shotLensImage } from "../pano_editor_view.js";
import { DRAW_REASON, createFrameScheduler } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { MOVE_KEY_CODES, isMoveKey } from "../pano_view_keys.js";
import { createStageObjects } from "./stage_objects.js";
import { drawStageOverlay } from "./stage_overlay.js";
import { editorKeyAction } from "./shortcuts.js";
import { placedCamera } from "../pano_space.js";
import { shortestYawDelta } from "../pano_camera_math.js";
import { liveErpSize, liveErpView } from "./erp_preview.js";
import { STAGE_CLEAR_COLOR, cameraFrameView, stageCamera, stageRenderInput, stageRenderSize, surfaceHit } from "./stage_view.js";
import { createNotice, createViewCamera, frameSelectedSphere, orbitCenter } from "./view_camera.js";
import { KNOB_CURSOR, createViewInput, createWheelSteps, knobAction, litKnobs, navigationAction, stageCursor } from "./view_input.js";
import { BOUND_NOTICE_SECONDS, FRAME_WHEEL_REST_MS, PITCH_LIMIT, eyeHeight, frameSeconds } from "./view_scale.js";

// The owners (pano_three_view.js) the live ERP of the Camera tab's Panorama mode, the Output window's Frame picture and
// its live ERP draw for.
export const LIVE_ERP_OWNER = "studio-live-erp";
export const OUTPUT_OWNER = "studio-output";
export const OUTPUT_ERP_OWNER = "studio-output-erp";
// The reasons that leave the Output window's picture as it is: the stage's view, its overlay, its own Spark sort.
const OUTPUT_KEEPS = new Set([DRAW_REASON.VIEW, DRAW_REASON.OVERLAY, DRAW_REASON.SPLAT_STAGE]);

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
// overlay: the 2D canvas over the stage's (the guides, the Camera's mark, the gizmo, the sky image's handles; null draws
// none).
// objects: what selecting and editing the objects needs (stage_objects.js createStageObjects: state, playhead,
// selection, select, edits, mode, tab, readOnly); without it the stage does not touch objects.
// cameraTab: the Camera tab (docs/studio-ui.md "Camera タブ", docs/space-and-view.md "Frame 表示"), read at each frame:
// tab() ("3d" or "camera"), mode() ("frame" or "panorama": the Camera's projection), shot() (the Camera at the
// playhead, pano_editor_state.js cameraShot), erpRange() (360 or 180), frame() (the frame box in the stage's CSS px,
// frame_layout.js frameRect, or null before it is laid out), erpCanvas() (the 2D canvas in the frame that shows the
// live ERP, or null), movable() (the Camera may move: not locked, not read-only), backgroundColor() (the node's
// background color, a hex RGB: past a lens's reach), output() (the Output window's canvases while it is open:
// { frame, erp }, a "bitmaprenderer" canvas for Frame mode and a 2D one for the live ERP, or null), and edits ({ live(pose), commit(), cancel() }: the Frame view's
// moves of the Camera, pose { position, yaw_deg, pitch_deg }, written to its Lanes by the editor). Without it the
// stage shows the 3D tab only.
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
  output,
  world,
  background = () => null,
  content = () => null,
  selected = () => null,
  ui,
  onEscape = () => {},
  motion: ownMotion = null,
  follow = null,
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
    animating: () => camera.animating() || drag?.action === "joystick" || keysMoving || !!ownMotion?.animating() || !!follow?.animating(),
  });

  const objects = objectDeps ? createStageObjects({
    ...objectDeps,
    editorView,
    camera: () => viewport().camera,
    size: () => {
      const { width, height } = viewport();
      return { width, height };
    },
    content: () => content(),
    ground: () => world.ground,
  }) : null;

  // --- The Camera tab: the Frame view, where the viewpoint is the Camera itself (a viewpoint of its own, whose moves
  // go to the Camera's Lanes), and Panorama mode, where the frame shows the live ERP and nothing moves.

  // The Frame view's viewpoint (view_camera.js, `frame`), made when the Frame view first shows.
  let frameCamera = null;
  // The Frame view's change not yet one Undo step: "drag", "keys" or "wheel" (the editor holds it live), or null.
  let frameGesture = null;
  let wheelTimer = 0;
  // The kind of lens image the Frame view drew last (pano_lens.js lensRenderPlan's `previous`).
  let lensKind = null;
  // The mode the last frame drew ("space", "frame", "erp"), and the live ERP's last result (for the tests).
  let lastMode = "space";
  let liveErp = null;

  // What the stage shows: "space" (the 3D tab), "frame" (the Camera tab in Frame mode) or "erp" (in Panorama mode).
  function viewMode() {
    if (!cameraTab || cameraTab.tab() !== "camera") return "space";
    return cameraTab.mode() === "panorama" ? "erp" : "frame";
  }

  // The pose the Frame view takes of the Camera (its pitch within the view's PITCH_LIMIT, as enter() keeps it).
  function cameraPose(shot) {
    const pitch = Math.min(PITCH_LIMIT, Math.max(-PITCH_LIMIT, shot.pitch_deg));
    return { position: [...shot.position], yaw_deg: shot.yaw_deg, pitch_deg: pitch, roll_deg: shot.roll_deg ?? 0 };
  }

  function samePose(a, b) {
    const close = (x, y) => Math.abs(x - y) < 1e-6;
    return a.position.every((value, axis) => close(value, b.position[axis]))
      && close(shortestYawDelta(a.yaw_deg, b.yaw_deg), 0) && close(a.pitch_deg, b.pitch_deg) && close(a.roll_deg ?? 0, b.roll_deg ?? 0);
  }

  // The Frame view's viewpoint follows the Camera (an Undo, the playhead, a ruler, the inspector), from its first T,
  // except while one of its own moves is under way.
  function syncFrameCamera(shot, frame) {
    const want = cameraPose(shot);
    if (!frameCamera) {
      frameCamera = createViewCamera({ pose: { ...want, target: want.position }, frame: true });
      frameCamera.setWorld({ ground: world.ground, boxes: [], content: content()?.sphere ?? null, camera: null });
      frameCamera.enter(want);
    }
    frameCamera.setScreen({ width: frame.width, height: frame.height, hFOV_deg: shot.hFOV_deg });
    if (!frameGesture && !drag && !keysMoving && !samePose(frameCamera.pose(), want)) frameCamera.enter(want);
  }

  // Where and how the stage is seen now: { camera, x, y, width, height, lens, shot } — the three.js camera of the view
  // (stage_view.js stageCamera(), or the Frame view's cameraFrameView()) and the box it spans in the stage's CSS px.
  // Pointer points are in that box (local()) for the hits, the guides and the objects.
  function viewport() {
    if (viewMode() === "frame") {
      const shot = cameraTab.shot();
      const frame = cameraTab.frame();
      if (frame?.width > 0 && frame?.height > 0) {
        syncFrameCamera(shot, frame);
        const pose = frameCamera.pose();
        const distance = Math.hypot(...pose.target.map((value, axis) => value - pose.position[axis]));
        const view = cameraFrameView({ shot, frame, width: size.width, height: size.height, distance, radius: frameCamera.bound() });
        return { camera: view.camera, x: view.rect.x, y: view.rect.y, width: view.rect.w, height: view.rect.h, lens: view.lens, shot: view.shot };
      }
    }
    return { camera: stageCamera(shownPose(), size.width, size.height, camera.bound()), x: 0, y: 0, width: size.width, height: size.height, lens: null, shot: null };
  }

  // The 3D tab's view as it shows: the moved view, or with `follow` the view that follows it.
  function shownPose() {
    return follow ? follow.pose() : camera.pose();
  }

  // A coast under way (follow) stops where it is: another operation starts.
  function stopCoast() {
    if (follow?.stop() && !drag && !keysMoving) camera.endGesture();
  }

  function local(point, view = viewport()) {
    return { x: point.x - view.x, y: point.y - view.y };
  }

  // Objects are selected (and edited, in the 3D tab) on the 3D tab and the Frame view of a pinhole Camera. A lens
  // Camera's picture is bent, so the pinhole hits and guides would not lie on it (lensPickWindow is not wired yet).
  function objectsOn() {
    const mode = viewMode();
    return !!objects && (mode === "space" || (mode === "frame" && !viewport().lens));
  }

  // The viewpoint the stage's operations move now, or null where nothing moves (Panorama mode, a locked Camera, a
  // read-only editor, a frame not laid out yet).
  function navCamera() {
    const mode = viewMode();
    if (mode === "space") return camera;
    if (mode !== "frame" || !cameraTab.movable()) return null;
    const frame = cameraTab.frame();
    if (!(frame?.width > 0 && frame?.height > 0)) return null;
    syncFrameCamera(cameraTab.shot(), frame);
    return frameCamera;
  }

  // A move of the Frame view goes to the Camera, held live as `kind` until it is one Undo step.
  // The gesture that started the change keeps it: keys or a wheel step during a drag join the drag's step.
  function writeFrame(kind) {
    const pose = frameCamera.pose();
    cameraTab.edits.live({ position: pose.position, yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg });
    frameGesture ??= kind;
  }

  function commitFrame() {
    clearTimeout(wheelTimer);
    wheelTimer = 0;
    if (!frameGesture) return;
    frameGesture = null;
    cameraTab.edits.commit();
  }

  function cancelFrame() {
    clearTimeout(wheelTimer);
    wheelTimer = 0;
    if (!frameGesture) return;
    frameGesture = null;
    cameraTab.edits.cancel();
  }

  // A move's result on `moved` (the viewpoint that moved): the notice, and the Camera's Lanes in the Frame view.
  function moved(view, result, kind) {
    report(result);
    if (view === frameCamera && frameCamera && result?.moved) writeFrame(kind);
  }

  // --- Drawing.

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

  function draw(ts, reasons = new Set()) {
    if (ownMotion?.revealing()) reasons.add(DRAW_REASON.MEDIA);
    const seconds = lastFrame ? frameSeconds((ts - lastFrame) / 1000) : 0;
    lastFrame = ts;
    camera.step(seconds);
    const motion = input.keyMotion(ts);
    if (keysMoving && !motion && !drag) endKeys();
    keysMoving = !!motion;
    // Keys still held across a change of mode go on with the viewpoint that moves now.
    if (motion && !keysCamera && !drag) {
      keysCamera = navCamera();
      keysCamera?.beginKeys();
    }
    if (motion && keysCamera) moved(keysCamera, keysCamera.keys(motion.direction, motion.seconds, motion.fast), "keys");
    if (drag?.action === "joystick" && seconds > 0 && drag.camera) moved(drag.camera, drag.camera.joystick(drag.offset, seconds), "drag");
    if (follow) {
      const coasted = follow.step(seconds, camera);
      report(coasted.result);
      if (coasted.ended && !drag && !keysMoving) camera.endGesture();
    }
    if (!camera.animating() && !motion && drag?.action !== "joystick" && !follow?.animating()) lastFrame = 0;
    if (!editorView.ready) return;
    const shown = content();
    camera.setWorld({ ground: world.ground, camera: world.camera ?? null, content: shown?.sphere ?? null });
    frameCamera?.setWorld({ ground: world.ground, camera: null, content: shown?.sphere ?? null });
    const mode = viewMode();
    if (mode !== lastMode) changeMode(mode);
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
    if (drag) end(true);
    if (keysMoving) endKeys();
    commitFrame();
    if (lastMode === "erp") {
      editorView.releaseSplats(LIVE_ERP_OWNER);
      liveErp = null;
    }
    // Entering the Frame view starts from the Camera's first T (docs/space-and-view.md "Frame 表示").
    if (mode === "frame") frameCamera = null;
    lastMode = mode;
  }

  // --- The Output window (docs/studio-ui.md "Output の小窓"): the Camera's output, drawn at the window's device
  // pixels only when what it shows can have changed (a reason other than OUTPUT_KEEPS, a new size or kind).

  let outputDrawn = null;
  let outputLensKind = null;
  let outputFrames = 0;
  let outputFailed = false;

  // What the Output window shows now: { kind: "frame" | "erp", canvas, width, height } (device px), or null while it
  // is folded. What it held before lets go when that changes.
  function outputTarget() {
    const canvases = cameraTab?.output?.() ?? null;
    const kind = cameraTab ? (cameraTab.mode() === "panorama" ? "erp" : "frame") : null;
    const target = canvases && kind ? canvases[kind] : null;
    // Its layout size: the window's open and fold animations scale it by a transform, which does not change what it shows.
    const box = target ? { width: target.clientWidth, height: target.clientHeight } : null;
    if (!target || !(box?.width > 0 && box?.height > 0)) {
      releaseOutput();
      return null;
    }
    if (outputDrawn && outputDrawn.kind !== kind) releaseOutput();
    const dpr = win.devicePixelRatio || 1;
    return { kind, canvas: target, width: Math.max(1, Math.round(box.width * dpr)), height: Math.max(1, Math.round(box.height * dpr)) };
  }

  function releaseOutput() {
    if (!outputDrawn) return;
    editorView.releaseSplats(outputDrawn.kind === "erp" ? OUTPUT_ERP_OWNER : OUTPUT_OWNER);
    outputDrawn = null;
  }

  function outputStale(target, reasons) {
    return !outputDrawn || outputDrawn.canvas !== target.canvas || outputDrawn.width !== target.width || outputDrawn.height !== target.height
      || [...reasons].some((reason) => !OUTPUT_KEEPS.has(reason));
  }

  // Frame mode: the Camera's picture as the output shoots it (no grid), drawn in the canvas's bottom left corner and
  // taken as an ImageBitmap for the window's "bitmaprenderer" canvas (docs/threejs-spark-integration.md "エディタの描画を
  // 直接表示する", the camera preview's way: no 2D canvas, no copy on each frame).
  function drawOutputFrame(shown, target, reasons) {
    if (outputFailed || !outputStale(target, reasons)) return;
    const fit = Math.min(1, canvas.width / target.width, canvas.height / target.height);
    const width = Math.max(1, Math.floor(target.width * fit));
    const height = Math.max(1, Math.floor(target.height * fit));
    const shot = cameraTab.shot();
    const view = placedCamera(shotCamera(shot), shot.position, eyeHeight(world.ground), { center: [0, 0, 0], radius: camera.bound() });
    const lens = shotLensImage(shot, width, height, cameraTab.backgroundColor(), null, outputLensKind);
    outputLensKind = lens?.kind ?? null;
    const surface = editorView.render(stageRenderInput({
      camera: view,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
      background: background(),
      ground: world.ground,
      gridHidden: true,
      content: shown,
      rect: { x: 0, y: canvas.height - height, w: width, h: height },
      lens,
      owner: OUTPUT_OWNER,
    }));
    if (!surface) return;
    outputDrawn = { kind: "frame", canvas: target.canvas, width: target.width, height: target.height };
    const request = ++outputFrames;
    const shownOn = target.canvas;
    createImageBitmap(surface.canvas, surface.x, surface.y, surface.width, surface.height).then((bitmap) => {
      if (request !== outputFrames || disposed) {
        bitmap.close();
        return;
      }
      shownOn.getContext("bitmaprenderer")?.transferFromImageBitmap(bitmap);
    }).catch((error) => {
      if (request !== outputFrames || disposed || outputFailed) return;
      outputFailed = true;
      outputDrawn = null;
      console.error("[PanoramaStickers] the Output window's picture failed", error);
    });
  }

  // Panorama mode: the live ERP from the Camera's position at the window's pixels, without the ground grid (an edit
  // guide; the Camera tab's frame draws its own ERP with it).
  function drawOutputErp(shown, target, reasons) {
    const pixels = liveErpSize(target.width / (win.devicePixelRatio || 1), target.height / (win.devicePixelRatio || 1), win.devicePixelRatio || 1, cameraTab.erpRange());
    if (!outputStale(target, reasons)) return;
    const shot = cameraTab.shot();
    const planes = placedCamera({}, shot.position, eyeHeight(world.ground), { center: [0, 0, 0], radius: camera.bound() });
    const input = stageRenderInput({ camera: null, canvasWidth: 1, canvasHeight: 1, background: background(), ground: world.ground, gridHidden: true, content: shown });
    const drawn = editorView.renderLiveErp({
      owner: OUTPUT_ERP_OWNER,
      canvas: target.canvas,
      view: liveErpView(shot, cameraTab.erpRange()),
      width: pixels.width,
      height: pixels.height,
      near: planes.near,
      far: planes.far,
      background: input.background,
      layers: input.layers,
      space: input.space,
      clearColor: STAGE_CLEAR_COLOR,
    });
    if (drawn) outputDrawn = { kind: "erp", canvas: target.canvas, width: target.width, height: target.height };
  }

  // The 3D tab's view over the whole canvas, or the Camera tab's Frame view through the Camera into its rect.
  function drawStage(shown, mode) {
    const view = viewport();
    const clearColor = ui.background === "loading" ? null : STAGE_CLEAR_COLOR;
    let rect = null;
    let lens = null;
    if (mode === "frame") {
      editorView.clear(clearColor);
      if (!view.shot) return;
      const sx = canvas.width / size.width;
      const sy = canvas.height / size.height;
      rect = { x: view.x * sx, y: view.y * sy, w: view.width * sx, h: view.height * sy };
      lens = view.lens ? shotLensImage(view.shot, rect.w, rect.h, cameraTab.backgroundColor(), deviceLens(view.lens, sx), lensKind) : null;
      lensKind = lens?.kind ?? null;
    }
    editorView.render(stageRenderInput({
      camera: view.camera,
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
    const shot = cameraTab.shot();
    const range = cameraTab.erpRange();
    const pixels = liveErpSize(frame.width, frame.height, win.devicePixelRatio || 1, range);
    const planes = placedCamera({}, shot.position, eyeHeight(world.ground), { center: [0, 0, 0], radius: camera.bound() });
    const input = stageRenderInput({ camera: null, canvasWidth: 1, canvasHeight: 1, background: background(), ground: world.ground, gridHidden: ui.gridHidden, content: shown });
    const drawn = editorView.renderLiveErp({
      owner: LIVE_ERP_OWNER,
      canvas: target,
      view: liveErpView(shot, range),
      width: pixels.width,
      height: pixels.height,
      near: planes.near,
      far: planes.far,
      background: input.background,
      layers: input.layers,
      space: input.space,
      clearColor: STAGE_CLEAR_COLOR,
    });
    // What drew: the last call's, and the time of the last one that drew the faces.
    if (drawn && (drawn.faces || drawn.pass)) liveErp = { ...drawn, facesMs: drawn.faces ? drawn.ms : liveErp?.facesMs ?? null };
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
    const view = viewport();
    const scene = objectsOn() ? objects.overlay({ altHeld: input.altHeld(), gridHidden: ui.gridHidden }) : null;
    drawStageOverlay(ctx, {
      camera: view.camera,
      width: view.width,
      height: view.height,
      origin: { x: view.x, y: view.y },
      ratio,
      scene,
    });
    const loading = !!scene?.loading;
    if (ui.loadingGuide !== loading) ui.loadingGuide = loading;
  }

  // A change of size (the stage's canvas, the Camera tab's frame box or its ERP canvas, the Output window) draws at once,
  // before the browser paints: a resized canvas is cleared and would otherwise show so, or stretched, for a frame
  // (docs/timeline-ui.md: the view is drawn again at its new size in the same frame).
  function requestDraw(reason = DRAW_REASON.VIEW) {
    if (disposed) return;
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

  // The middle of the view (the Frame view's frame), in the stage's CSS px.
  function center() {
    const view = viewport();
    return { x: view.x + view.width / 2, y: view.y + view.height / 2 };
  }

  // The surface hit under `point` (the stage's CSS px): the GPU pick of the World content (pano_three_view.js pick) and
  // the ground. A lens Camera's bent picture is not hit (lensPickWindow is not wired yet): its moves use T.
  function hitAt(point) {
    const view = viewport();
    if (view.lens) return null;
    const { x, y } = local(point, view);
    const picked = editorView.pick(view.camera, x, y, view.width, view.height);
    return surfaceHit(view.camera, x, y, view.width, view.height, { ground: world.ground, picked });
  }

  // What the pointer is over (stage_objects.js hover, the CPU test): the cursor, and a redraw when a guide or the
  // gizmo's handle lights up or goes out.
  function hoverAt(point) {
    pointer = point;
    if (!objects || !editorView.ready) return;
    const on = point && objectsOn();
    const { cursor, changed } = on ? objects.hover(local(point), { altHeld: input.altHeld() }) : { cursor: null, changed: objects.leave() };
    objectCursor = cursor;
    if (changed) requestDraw();
  }

  function insideStage(point) {
    return point.x >= 0 && point.y >= 0 && point.x <= size.width && point.y <= size.height;
  }

  // --- Gestures.

  // On a lens Camera's Frame view a click selects nothing and a pan grabs nothing (lensPickWindow is not wired yet):
  // the stage says so (docs/space-and-view.md "黙って何もしない操作").
  function reportLensPick() {
    if (viewMode() === "frame" && viewport().lens) report({ notice: "lens-pick" });
  }

  function begin(action, point, pointerId, knob = null) {
    stopCoast();
    const view = navCamera();
    if (view === frameCamera) commitFrame();
    const frame = view === frameCamera;
    switch (action) {
      case "orbit":
        view?.beginOrbit(orbitCenter({ selection: frame ? objectSelection() : selected(), frame }));
        break;
      case "pan":
        view?.beginPan(hitAt(knob ? center() : point));
        if (frame && !knob) reportLensPick();
        break;
      case "joystick":
        view?.beginJoystick();
        break;
      default:
        break;
    }
    input.beginGesture(action);
    drag = { action, pointerId, last: point, start: point, offset: 0, knob, camera: view };
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
    const view = drag.camera;
    if (!view) return;
    if (drag.action === "look") moved(view, view.look(dx, dy), "drag");
    else if (drag.action === "orbit") moved(view, view.orbit(dx, dy), "drag");
    else if (drag.action === "pan") moved(view, view.pan(dx, dy), "drag");
    if (view === camera) follow?.sample(drag.action, dx, dy, now());
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
    if (!cancel && ended.click && !ended.moved && viewMode() !== "erp") {
      objectDeps?.select(null);
      if (ended.camera === frameCamera) reportLensPick();
    }
    input.endGesture();
    // With `follow`, a drag let go while moving coasts on its gesture (its pan keeps the depth it grabbed).
    const coasts = !cancel && ended.camera === camera && !!follow?.release(ended.action, now());
    if (cancel) follow?.stop();
    if (!keysMoving && !coasts) ended.camera?.endGesture();
    if (ended.camera === frameCamera && frameCamera) {
      if (cancel) cancelFrame();
      else commitFrame();
    }
    syncUi();
    requestDraw();
  }

  // The movement keys started on `keysCamera` and all of them are let go: the gesture ends (one Undo step in the
  // Frame view).
  let keysCamera = null;
  function endKeys() {
    keysCamera?.endGesture();
    if (keysCamera === frameCamera && frameCamera && frameGesture === "keys") commitFrame();
    keysCamera = null;
  }

  // The selection the Camera tab's orbit and Frame Selected use: a World object only (the Camera itself does not count).
  function objectSelection() {
    const selection = selected();
    return selection?.kind === "object" ? selection : null;
  }

  // --- The stage's events.

  function onPointerDown(event) {
    if (drag) return;
    input.modifiers(event);
    const point = pointOf(event);
    const plainLeft = event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey;
    // Panorama mode's frame only shows: nothing on the stage moves or selects there.
    if (viewMode() === "erp") return;
    // In the Camera tab a press on an object selects it, and the drag still moves the Camera (docs/space-and-view.md
    // "Frame 表示"); a press on nothing lets the selection go on its click.
    let pressedObject = false;
    let handler = plainLeft && objectsOn() && editorView.ready ? objects.press(local(point)) : null;
    if (handler && viewMode() !== "space") {
      handler.end();
      handler = null;
      pressedObject = true;
    }
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
    if (drag && plainLeft && !pressedObject) drag.click = true;
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
    const point = drag.knob ? { x: event.clientX, y: event.clientY } : pointOf(event);
    move(drag.action === "object" ? local(point) : point, event);
  }

  function onPointerUp(event) {
    if (drag && event.pointerId === drag.pointerId) end(event.type === "pointercancel");
  }

  function onWheel(event) {
    event.preventDefault();
    const step = wheelSteps.push(event);
    if (!step) return;
    const view = navCamera();
    if (!view) return;
    stopCoast();
    // A wheel run in the Frame view is a gesture of its own: another one under way is one step first (one during a
    // drag joins the drag's).
    if (view === frameCamera && frameGesture && frameGesture !== "wheel" && !drag) commitFrame();
    moved(view, view.wheel(step, hitAt(pointOf(event))), "wheel");
    if (view === frameCamera && frameGesture === "wheel" && !drag) {
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(commitFrame, FRAME_WHEEL_REST_MS);
    }
    requestDraw();
  }

  // A double click turns the view to what is under the pointer (World image planes included, the one exception). Not in
  // the Camera tab (docs/space-and-view.md "Frame 表示").
  function onDoubleClick(event) {
    if (event.button !== 0 || event.altKey || viewMode() !== "space") return;
    stopCoast();
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
    if (editorKeyAction(event) !== "escape" || !stageOwnsKey(event, root)) return;
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
      stopCoast();
      const view = navCamera();
      if (view === frameCamera && frameGesture && frameGesture !== "keys" && !drag) commitFrame();
      if (!drag) view?.beginKeys();
      keysCamera = view;
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
    for (const code of MOVE_KEY_CODES) released = input.keyUp({ code, shiftKey: false }) || released;
    return released;
  }

  // The window lost focus or the page was hidden: Alt up, every key released, the hover gone, the drag ended.
  function onLostFocus() {
    follow?.stop();
    input.lostFocus();
    keysMoving = false;
    wheelSteps.reset();
    if (drag?.action === "object") {
      const ended = drag;
      drag = null;
      ended.handler.cancel();
    } else if (drag) {
      const ended = drag;
      drag = null;
      ended.camera?.endGesture();
      // A drag of the Frame view ends as if let go: what it moved is one Undo step (docs/space-and-view.md "ウィンドウが
      // フォーカスを失ったとき").
    }
    endKeys();
    commitFrame();
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
      if (!action || drag || event.button !== 0 || !navCamera()) return;
      event.preventDefault();
      event.currentTarget?.setPointerCapture?.(event.pointerId);
      input.modifiers(event);
      begin(action, { x: event.clientX, y: event.clientY }, event.pointerId, knob);
    },
    // The Frame view's change still waiting (a wheel run) becomes one Undo step now: before another edit or a step.
    settle() {
      if (!drag && !keysMoving) commitFrame();
    },
    // Reset View: to the output view the editor opened with. Not in the Camera tab.
    resetView() {
      if (viewMode() !== "space") return;
      stopCoast();
      report(camera.reset(output));
      requestDraw();
    },
    // Frame Selected: the selected object (selected(), or `selection` when given: a Timeline row's double click), else
    // the whole World content; with nothing to frame it says so. In the Frame view it moves the Camera at once, as one
    // Undo step (a selected Camera does not count there); in Panorama mode nothing moves.
    frameSelected(selection = selected()) {
      const view = navCamera();
      if (!view) return;
      const frame = view === frameCamera;
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
    // The box of a loaded World item (the lower view's), null while it loads.
    sceneBox: (url) => editorView.sceneBox(url),
    // [add-drop] What Add and the drop need of the view (studio/add_files.js): the three.js camera, the stage's CSS
    // size, the pose (its T), the world bound, and the GPU pick of the World content under a point (null while the
    // view is not ready).
    // They are the 3D tab's (the editor takes no file in the Camera tab).
    landing: {
      camera: () => stageCamera(camera.pose(), size.width, size.height, camera.bound()),
      size: () => size,
      pose: () => camera.pose(),
      bound: () => camera.bound(),
      pick: ({ x, y }) => (editorView.ready ? editorView.pick(stageCamera(camera.pose(), size.width, size.height, camera.bound()), x, y, size.width, size.height) : null),
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
      if (disposed) return;
      disposed = true;
      commitFrame();
      outputFrames += 1;
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
