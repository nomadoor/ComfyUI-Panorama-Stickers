// The Viewport camera's navigation in space (docs/editor-interaction.md "視点のモード", "ピボット・パン・ホイールの規則",
// Frame Selected's distance, the Camera's orbit and zoom): the view modes, the pivot, orbit, pan, wheel steps and the
// fit of a sphere. The view is { position, yaw_deg, pitch_deg, hFOV_deg, distance } (pano_space.js).
import { DEG2RAD, RAD2DEG, VIEW_PITCH_LIMIT_DEG, clamp, pinholeHalfTangents, shortestYawDelta, wrapYaw } from "../pano_camera_math.js";
import { worldRotation } from "../pano_world.js";
import { DEFAULT_VIEW_HFOV, fitDistance } from "./fit.js";
import { add, apply, column, dot, sub } from "./vec.js";

// A zoom step toward a point is this part of the distance to it.
const ZOOM_STEP = 0.15;
// A zoom step is never shorter than this part of the content's size (or of 1 without content), so it
// keeps going as it comes close; it still stops ZOOM_STOP_RATIO of that size short of the point.
const MIN_ZOOM_RATIO = 0.01;
const ZOOM_STOP_RATIO = 0.001;
// Over empty space the point a drag or a wheel step works on is never closer than this part of the
// content's size, so a view that came up to its pivot or to the content's center still moves.
const MIN_TARGET_RATIO = 0.05;
// A wheel step reuses the point picked for an earlier one within this many pixels of the pointer and this
// many ms of the pick; a pick that took longer than the budget is reused while the wheel keeps turning.
const WHEEL_PICK_SLOP = 4;
const WHEEL_PICK_MS = 250;
const WHEEL_PICK_BUDGET_MS = 16;
// Pivot distance of a view that has nothing to frame yet.
export const DEFAULT_DISTANCE = 1;

// The difference two views may have and still be the same view (the numbers' error).
const SAME_VIEW_EPSILON = 1e-6;

// The start view (docs/space-and-view.md "開いたときの視点と Reset View" 始めの視点): the World origin, yaw 0, pitch 0 at
// DEFAULT_VIEW_HFOV, where the new UI's Reset View (studio/view_camera.js RESET_VIEW) and the Preview node's Scene viewer's
// Reset view (pano_scene_viewer.js) go, and where they are off.
// Reset View's tooltip while the view is at the start view, where it is off (docs/studio-ui.md "右下の View の群",
// docs/preview-node.md "ノード上"; the new UI's and the Preview node's).
export const START_VIEW_TIP = "Reset view · Already at the start";
export const START_VIEW = Object.freeze({ position: Object.freeze([0, 0, 0]), yaw_deg: 0, pitch_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV });

// Whether views a and b ({ position, yaw_deg, pitch_deg, hFOV_deg }) are the same: the position, pitch and FOV within
// the numbers' error, the yaw too round 360° (docs/space-and-view.md "開いたときの視点と Reset View" 始めの視点; a
// pivot or T is not compared). Reset View is off at its start view by this (studio/view_camera.js atResetView,
// pano_scene_viewer.js).
export function sameViewpoint(a, b) {
  const close = (x, y) => Math.abs(x - y) <= SAME_VIEW_EPSILON;
  return a.position.every((value, axis) => close(value, b.position[axis]))
    && close(shortestYawDelta(a.yaw_deg, b.yaw_deg), 0) && close(a.pitch_deg, b.pitch_deg) && close(a.hFOV_deg, b.hFOV_deg);
}

// The World axes of a view turned yaw / pitch / roll: right, up and forward (local -Z).
export function viewAxes(yawDeg, pitchDeg, rollDeg = 0) {
  const rotation = worldRotation(yawDeg, pitchDeg, rollDeg);
  const back = column(rotation, 2);
  return { right: column(rotation, 0), up: column(rotation, 1), forward: [-back[0], -back[1], -back[2]] };
}

// The Viewport camera when the editor opens: at the World origin, where the Stickers ERP is taken from,
// looking where the panorama view looks.
export function initialSpaceView(yawDeg, pitchDeg, hFovDeg) {
  return { position: [0, 0, 0], yaw_deg: yawDeg, pitch_deg: pitchDeg, hFOV_deg: hFovDeg, distance: DEFAULT_DISTANCE };
}

// The view in a space view mode: 3DoF stands at `origin`, where the output is taken from (the World
// origin for the Stickers ERP, the Camera's position in the Cutout editor), so it shows what the output
// sees around; 6DoF moves freely.
export function spaceModeView(mode, view, origin = [0, 0, 0]) {
  return mode === "6dof" ? view : { ...view, position: [...origin] };
}

// The space view's mode and place ({ mode, position, moved }) switched to mode. Back in 3DoF the view
// stands at `origin` again and its pivot goes back to the content's size (moved false); 6DoF starts
// where 3DoF stands. The direction and the FOV are not here, so they stay.
export function switchSpaceMode(space, mode, origin = [0, 0, 0]) {
  return mode === "3dof" ? { mode, position: [...origin], moved: false } : { ...space, mode };
}

// The axes of a view, with its roll (the Frame view's Camera has one; the Viewport camera has none).
function axesOf(view) {
  return viewAxes(view.yaw_deg, view.pitch_deg, view.roll_deg ?? 0);
}

export function pivotOf(view) {
  return add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, view.distance);
}

// How far ahead of the view p is, along its axis.
export function depthOf(view, p) {
  return dot(sub(p, view.position), viewAxes(view.yaw_deg, view.pitch_deg).forward);
}

function minimumTarget(scale) {
  return Math.max(scale, 1e-6) * MIN_TARGET_RATIO;
}

// The point an orbit or a wheel step works on: the World content under the pointer (hit, from the
// three.js view's raycast), else the content's center while the view has not moved and the center is
// ahead (center is null once it has), else the view's pivot. Without a hit the point is at least
// MIN_TARGET_RATIO of the content's size (scale) away, so the view does not stick to it.
export function navigationTarget(view, hit, center = null, scale = DEFAULT_DISTANCE) {
  if (hit) return hit;
  const minimum = minimumTarget(scale);
  if (center && depthOf(view, center) > 0) {
    const offset = sub(center, view.position);
    const distance = Math.hypot(...offset);
    return distance >= minimum ? center : add(view.position, offset, minimum / distance);
  }
  return add(view.position, viewAxes(view.yaw_deg, view.pitch_deg).forward, Math.max(view.distance, minimum));
}

// The depth a pan moves at: the pivot's, at least MIN_TARGET_RATIO of the content's size (scale), like
// Blender's pan with Auto Depth off. What the pointer is over is not used: its depth ranges from a
// Sticker a few cm ahead to the far side of a SPLAT's box, so a drag of the same length would move the
// view by amounts hundreds of times apart.
export function panDepth(view, scale = DEFAULT_DISTANCE) {
  return Math.max(view.distance, minimumTarget(scale));
}

// Whether a wheel step `next` ({ x, y, time, key, view }) reuses the point the step `last` picked
// ({ x, y, time, cost, key, view, wheelTime, hit }: where and when it picked, how long the pick took, the
// content and the view after its last step, and when that step was). Picking a large mesh or SPLAT takes
// tens of ms, and a zoom keeps the point under a still pointer. The content (key) and the view must be as
// the last step left them, and the pointer within WHEEL_PICK_SLOP pixels of the pick; then it reuses the
// point for WHEEL_PICK_MS after the pick, or, after a pick over WHEEL_PICK_BUDGET_MS, for as long as the
// wheel keeps turning.
export function reuseWheelPick(last, next) {
  if (!last || last.key !== next.key || last.view !== next.view) return false;
  if (Math.hypot(next.x - last.x, next.y - last.y) > WHEEL_PICK_SLOP) return false;
  return next.time - last.time < WHEEL_PICK_MS || (last.cost > WHEEL_PICK_BUDGET_MS && next.time - last.wheelTime < WHEEL_PICK_MS);
}

export function tanHalfFov(view, width, height) {
  return pinholeHalfTangents(view.hFOV_deg, height / width);
}

// The FOV, in degrees, a view of width x height pixels fits content in: the smaller of its horizontal FOV
// (hFOV_deg) and its vertical one.
export function viewFitFov(view, width, height) {
  const { tanX, tanY } = tanHalfFov(view, width, height);
  return 2 * Math.atan(Math.min(tanX, tanY)) * RAD2DEG;
}

// Turns the view about the point `pivot` (its own pivot by default) by a pointer drag of (dx, dy) pixels
// on a view `height` pixels tall, like three.js OrbitControls (and core's Load3D): a drag across the view's
// height turns it a full turn, and the content follows the pointer. The pivot stays where it is on the
// screen, so turning about a point off the view's axis does not jump; the view's own pivot moves to its
// depth. A rolled view (the Frame view's Camera) keeps its roll and takes the drag in its own screen axes.
export function orbitView(view, dx, dy, height, pivot = pivotOf(view)) {
  const roll = view.roll_deg ?? 0;
  const [turnX, turnY] = unrolled(dx, dy, roll);
  const yaw = wrapYaw(view.yaw_deg + turnX / height * 360);
  const pitch = clamp(view.pitch_deg - turnY / height * 360, -VIEW_PITCH_LIMIT_DEG, VIEW_PITCH_LIMIT_DEG);
  const before = worldRotation(view.yaw_deg, view.pitch_deg, roll);
  const after = worldRotation(yaw, pitch, roll);
  // The view's offset from the pivot in its own frame stays, so the pivot keeps its place on the screen.
  const offset = sub(view.position, pivot);
  const local = [0, 1, 2].map((axis) => dot(column(before, axis), offset));
  const turned = { ...view, yaw_deg: yaw, pitch_deg: pitch, position: add(pivot, apply(after, local)) };
  return { ...turned, distance: depthOf(turned, pivot) };
}

// A drag of (dx, dy) pixels on a view rolled rollDeg, in the axes of the same view without roll.
function unrolled(dx, dy, rollDeg) {
  const c = Math.cos(rollDeg * DEG2RAD);
  const s = Math.sin(rollDeg * DEG2RAD);
  return [dx * c + dy * s, dy * c - dx * s];
}

// Moves the view across itself by a drag of (dx, dy) pixels, so a point `depth` ahead (panDepth(), or
// the pivot's depth by default) follows the pointer exactly, along the view's own (rolled) screen axes.
// The pivot goes to that depth.
export function panView(view, dx, dy, width, height, depth = view.distance) {
  const { right, up } = axesOf(view);
  const perPixel = 2 * depth * tanHalfFov(view, width, height).tanY / height;
  return { ...view, position: add(add(view.position, right, -dx * perPixel), up, dy * perPixel), distance: depth };
}

// One wheel step toward the point `target` (direction > 0) or away from it, along the line from the view
// to it, so the point stays under the pointer (zoom to cursor). A step is ZOOM_STEP of the distance to
// the point, and at least a part of the content's size (scale) so it does not stall as it comes close,
// but never reaches the point: it stops just short of it. Out, a step of ZOOM_STEP undoes one in. The pivot goes to
// the point's depth, but no closer than MIN_TARGET_RATIO of the content's size, so wheel steps up to a
// wall do not leave a pivot that later moves the view hardly at all.
export function zoomView(view, target, direction, scale = DEFAULT_DISTANCE) {
  const offset = sub(target, view.position);
  const distance = Math.hypot(...offset);
  if (!(distance > 0) || !direction) return view;
  const size = Math.max(scale, 1e-6);
  const minimum = size * MIN_ZOOM_RATIO;
  const step = direction > 0
    ? Math.min(Math.max(distance * ZOOM_STEP, minimum), distance - size * ZOOM_STOP_RATIO)
    : -Math.max(distance * ZOOM_STEP / (1 - ZOOM_STEP), minimum);
  // Already as close as it goes.
  if (direction > 0 && step <= 0) return view;
  const moved = { ...view, position: add(view.position, offset, step / distance) };
  return { ...moved, distance: Math.max(depthOf(moved, target), minimumTarget(scale)) };
}

// The view keeping its direction that fits the sphere { center, radius } in a width x height view.
export function frameView(view, sphere, width, height) {
  const distance = fitDistance(Math.max(sphere.radius, 1e-6), viewFitFov(view, width, height));
  const { forward } = viewAxes(view.yaw_deg, view.pitch_deg);
  return { ...view, position: add(sphere.center, forward, -distance), distance };
}
