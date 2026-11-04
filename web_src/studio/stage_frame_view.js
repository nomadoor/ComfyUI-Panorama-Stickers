// The Camera tab's Frame view on the new UI's stage (docs/space-and-view.md "Frame 表示"): what the stage shows, the
// Frame view's viewpoint (a viewpoint of its own, whose moves go to the Camera's Lanes) and the box the stage is seen
// in, the viewpoint the stage's operations move, and the Frame view's moves held live until they are one Undo step.
// stage.js createStage puts it together; `shared` is the stage's state its parts share (stage.js). It builds no DOM.
import { shortestYawDelta } from "../pano_camera_math.js";
import { cameraFrameHit, frameViewFov, stageCamera } from "./stage_view.js";
import { createViewCamera } from "./view_camera.js";
import { PITCH_LIMIT } from "./view_scale.js";

// cameraTab, camera (the 3D tab's viewpoint), world, content: createStage's. shownPose(): the 3D tab's view as it shows
// (stage.js).
export function createStageFrameView(shared, { cameraTab, camera, world, content, shownPose }) {
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
    if (!shared.frameCamera) {
      shared.frameCamera = createViewCamera({ pose: { ...want, target: want.position }, frame: true });
      shared.frameCamera.setWorld({ ground: world.ground, boxes: content()?.boxes ?? [], content: content()?.sphere ?? null, camera: null });
      shared.frameCamera.enter(want);
    }
    shared.frameCamera.setScreen({ width: frame.width, height: frame.height, hFOV_deg: frameViewFov(shot) });
    if (!shared.frameGesture && !shared.drag && !shared.keysMoving && !samePose(shared.frameCamera.pose(), want)) shared.frameCamera.enter(want);
  }

  // Where and how the stage is seen now: { camera, objectCamera, x, y, width, height, lens, shot } — the three.js camera of the view
  // (stage_view.js stageCamera(), or the Frame view's cameraFrameView()) and the box it spans in the stage's CSS px.
  // Pointer points are in that box (local()) for the hits, the guides and the objects. `objectCamera` is what the
  // guides, the hover, the gizmo and the handles go by: `camera`, carrying a lens Camera's bent picture
  // (pano_lens.js withLensImage) on its Frame view.
  function viewport() {
    if (viewMode() === "frame") {
      const shot = cameraTab.shot();
      const frame = cameraTab.frame();
      if (frame?.width > 0 && frame?.height > 0) {
        syncFrameCamera(shot, frame);
        const pose = shared.frameCamera.pose();
        const distance = Math.hypot(...pose.target.map((value, axis) => value - pose.position[axis]));
        const fit = { frame, width: shared.size.width, height: shared.size.height, distance, radius: shared.frameCamera.bound() };
        // `lens` and `drawCamera` draw the picture; `camera`, `objectCamera` and `hitLens` are what the hits, the guides,
        // the gizmo and the pan go by (stage_view.js cameraFrameHit).
        const { view, hit, hitLens, objectCamera } = cameraFrameHit(shot, fit);
        return {
          camera: hit.camera, drawCamera: view.camera, objectCamera,
          x: view.rect.x, y: view.rect.y, width: view.rect.w, height: view.rect.h,
          lens: view.lens, hitLens, shot: view.shot,
        };
      }
    }
    const view = stageCamera(shownPose(), shared.size.width, shared.size.height, camera.bound());
    return { camera: view, objectCamera: view, x: 0, y: 0, width: shared.size.width, height: shared.size.height, lens: null, hitLens: null, shot: null };
  }

  // The viewpoint the stage's operations move now, or null where nothing moves (Panorama mode, a locked Camera, a
  // read-only editor, a frame not laid out yet, and an object's drag in the Frame view: both would write the state as
  // one gesture).
  function navCamera() {
    const mode = viewMode();
    if (mode === "space") return camera;
    if (mode !== "frame" || !cameraTab.movable() || shared.drag?.action === "object") return null;
    const frame = cameraTab.frame();
    if (!(frame?.width > 0 && frame?.height > 0)) return null;
    syncFrameCamera(cameraTab.shot(), frame);
    return shared.frameCamera;
  }

  // A move of the Frame view goes to the Camera, held live as `kind` until it is one Undo step.
  // The gesture that started the change keeps it: keys or a wheel step during a drag join the drag's step.
  function writeFrame(kind) {
    const pose = shared.frameCamera.pose();
    cameraTab.edits.live({ position: pose.position, yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg });
    shared.frameGesture ??= kind;
  }

  function commitFrame() {
    clearTimeout(shared.wheelTimer);
    shared.wheelTimer = 0;
    if (!shared.frameGesture) return;
    shared.frameGesture = null;
    cameraTab.edits.commit();
  }

  function cancelFrame() {
    clearTimeout(shared.wheelTimer);
    shared.wheelTimer = 0;
    if (!shared.frameGesture) return;
    shared.frameGesture = null;
    cameraTab.edits.cancel();
  }

  return { viewMode, viewport, navCamera, writeFrame, commitFrame, cancelFrame };
}
