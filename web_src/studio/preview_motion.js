// The Preview window's view (docs/space-and-view.md "Preview のウィンドウ"): its feel and what it takes from the node and
// gives back. The operations move the view (view_camera.js createViewCamera, the destination); the view shown follows it
// by PREVIEW_DAMPING ^ (1000 dt) of the difference each frame, except during an eased action, which keeps its length. A
// look, orbit or pan drag let go while moving coasts at the speed of its last moves (ADR 0010's window, as
// pano_interaction_controller.js) and slows as the look's inertia does. stage.js takes this as its `follow`.
import { clamp, shortestYawDelta, wrapYaw } from "../pano_camera_math.js";
import { PANO_INERTIA_DAMPING, PANO_INERTIA_START_SPEED, PANO_INERTIA_STOP_SPEED } from "../pano_interaction_controller.js";
import { loadSceneState, sceneGround } from "../pano_scene_state.js";
import { initialTarget } from "./view_camera.js";
import { FRAME_FALLBACK_SECONDS, ORBIT_DEG_PER_PIXEL, PITCH_LIMIT, PREVIEW_DAMPING, frameSeconds } from "./view_scale.js";

// The drags that coast.
const COASTING = new Set(["look", "orbit", "pan"]);
// ADR 0010: the moves of the last SAMPLE_MS are kept, those within WINDOW_MS of the release give the speed.
const SAMPLE_MS = 100;
const WINDOW_MS = 80;
// The view shown counts as there when every difference is under this.
const SETTLED = 1e-6;

const finite = (value) => typeof value === "number" && Number.isFinite(value);
// A pointer speed (CSS px / s) as the inertia's thresholds count it (degrees / s).
const angular = (pxPerSecond) => Math.abs(pxPerSecond) * ORBIT_DEG_PER_PIXEL;

function copyPose(p) {
  return { position: [...p.position], yaw_deg: p.yaw_deg, pitch_deg: p.pitch_deg, roll_deg: p.roll_deg ?? 0, target: [...p.target] };
}

// pose: the view shown at first (the view camera's pose).
export function createPreviewMotion({ pose: start }) {
  let shown = copyPose(start);
  let settled = true;
  // The drag's moves: { ms, x, y } of the pointer's path so far (CSS px, summed).
  let samples = [];
  let path = { x: 0, y: 0 };
  // The coast: { action, vx, vy } (px / s), or null.
  let coast = null;

  function follow(goal, seconds, eased) {
    if (eased) {
      shown = copyPose(goal);
      settled = true;
      return;
    }
    const k = PREVIEW_DAMPING ** (1000 * seconds);
    const position = shown.position.map((value, axis) => goal.position[axis] + (value - goal.position[axis]) * k);
    const target = shown.target.map((value, axis) => goal.target[axis] + (value - goal.target[axis]) * k);
    const yaw = shortestYawDelta(goal.yaw_deg, shown.yaw_deg) * k;
    const pitch = (shown.pitch_deg - goal.pitch_deg) * k;
    const far = Math.max(Math.abs(yaw), Math.abs(pitch),
      ...position.map((value, axis) => Math.abs(value - goal.position[axis])),
      ...target.map((value, axis) => Math.abs(value - goal.target[axis])));
    if (far < SETTLED) {
      shown = copyPose(goal);
      settled = true;
      return;
    }
    shown = { position, yaw_deg: wrapYaw(goal.yaw_deg + yaw), pitch_deg: goal.pitch_deg + pitch, roll_deg: goal.roll_deg ?? 0, target };
    settled = false;
  }

  return {
    // The view shown now.
    pose: () => copyPose(shown),
    // Whether a coast runs or the view shown has not reached the moved view.
    animating: () => !!coast || !settled,
    coasting: () => !!coast,
    // A drag's move of (dx, dy) px at `ms` (any clock in ms; the release uses the same).
    sample(action, dx, dy, ms) {
      if (!COASTING.has(action)) return;
      path = { x: path.x + dx, y: path.y + dy };
      samples.push({ ms, ...path });
      while (samples.length > 1 && samples[0].ms < ms - SAMPLE_MS) samples.shift();
    },
    // The drag is let go at `ms`: whether it coasts (fast enough within the window before the release).
    release(action, ms) {
      const recent = samples.filter((sample) => ms - sample.ms <= WINDOW_MS);
      samples = [];
      path = { x: 0, y: 0 };
      coast = null;
      if (!COASTING.has(action) || recent.length < 2) return false;
      const first = recent[0];
      const last = recent.at(-1);
      const seconds = Math.max(0.001, (last.ms - first.ms) / 1000);
      const vx = (last.x - first.x) / seconds;
      const vy = (last.y - first.y) / seconds;
      if (angular(Math.hypot(vx, vy)) <= PANO_INERTIA_START_SPEED) return false;
      coast = { action, vx, vy };
      return true;
    },
    // Stops the coast where it is (a press, another operation, the focus lost); whether one ran. The drag's samples go.
    stop() {
      const had = !!coast;
      coast = null;
      samples = [];
      path = { x: 0, y: 0 };
      return had;
    },
    // A frame of `seconds` (counted as view_scale.js frameSeconds does; 0 counts FRAME_FALLBACK_SECONDS): the coast moves `camera` as a
    // drag of its speed for that time would, then the view shown follows. Returns { result, ended }: the coast's move
    // (view_camera.js's { moved, notice }) or null, and whether the coast ended in this frame (it stops at the bound).
    step(seconds, camera) {
      const dt = seconds > 0 ? frameSeconds(seconds) : FRAME_FALLBACK_SECONDS;
      let result = null;
      let ended = false;
      if (coast) {
        result = camera[coast.action](coast.vx * dt, coast.vy * dt);
        const damping = Math.exp(-PANO_INERTIA_DAMPING * dt);
        coast.vx *= damping;
        coast.vy *= damping;
        const slow = angular(coast.vx) < PANO_INERTIA_STOP_SPEED && angular(coast.vy) < PANO_INERTIA_STOP_SPEED;
        if (slow || result?.notice === "bound") {
          coast = null;
          ended = true;
        }
      }
      follow(camera.pose(), dt, camera.animating());
      return { result, ended };
    },
  };
}

// The pose the window opens with (docs/space-and-view.md "Preview のウィンドウ"): a Scene's node view (`scene`: the
// Scene viewer's record view, pano_scene_viewer.js sceneViewerRecord) gives P, yaw and pitch; an IMAGE or VIDEO node view
// (`image`: the legacy Preview runtime's view { yaw, pitch, fov }) gives yaw and pitch from the origin; else the origin.
export function previewOpeningPose({ scene = null, image = null } = {}) {
  const origin = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 };
  if (scene) {
    const position = scene.viewPosition;
    if (!Array.isArray(position) || position.length !== 3 || !position.every(finite) || !finite(scene.viewYaw) || !finite(scene.viewPitch)) return origin;
    return { position: [...position], yaw_deg: scene.viewYaw, pitch_deg: scene.viewPitch };
  }
  if (image) {
    if (!finite(image.yaw) || !finite(image.pitch)) return origin;
    return { position: [0, 0, 0], yaw_deg: image.yaw, pitch_deg: image.pitch };
  }
  return origin;
}

// The view the window opens with (stage.js's `opening`): the node's view (previewOpeningPose's `node`), its pitch within
// PITCH_LIMIT, with the first T in `world` ({ ground, boxes, content, camera }).
export function previewOpening(node, world) {
  const p = previewOpeningPose(node);
  const pose = { position: p.position, yaw_deg: wrapYaw(p.yaw_deg), pitch_deg: clamp(p.pitch_deg, -PITCH_LIMIT, PITCH_LIMIT), roll_deg: 0 };
  return { pose: { ...pose, target: initialTarget({ ...pose, target: pose.position }, world) } };
}

// Hands the window's last view (`pose`, where it was going) back to the node: a Scene viewer's record view takes P,
// yaw and pitch (and stops any move of its own); an IMAGE or VIDEO runtime (`image`, with its `view`) takes yaw and
// pitch and keeps its FOV.
export function previewHandBack(pose, { scene = null, image = null } = {}) {
  if (scene) {
    scene.viewPosition = [...pose.position];
    scene.viewYaw = pose.yaw_deg;
    scene.viewPitch = pose.pitch_deg;
    scene.viewTransition = null;
    scene.viewMoved = true;
  }
  if (image) image.view = { ...image.view, yaw: wrapYaw(pose.yaw_deg), pitch: pose.pitch_deg };
}

// The ground a Preview stands on (docs/scene-state-v2.md `ground`, read by pano_scene_state.js sceneGround): a Scene's
// layers' states (from the farthest upstream; the Preview has no layer of its own), else GROUND_DEFAULT (an IMAGE or a
// VIDEO too). A layer that cannot be read counts as one without a ground.
export function previewGround(layers) {
  const states = (Array.isArray(layers) ? layers : []).map((layer) => {
    try {
      return loadSceneState(layer?.state ?? null);
    } catch {
      return {};
    }
  });
  return sceneGround({}, states);
}
