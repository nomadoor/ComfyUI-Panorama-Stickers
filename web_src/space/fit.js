// Fitting a 3D Sticker in view (docs/editor-interaction.md "3D の Sticker を収めて置く"): the distance a sphere fits a
// view at, the sphere of a box, and where a new 3D Sticker goes. Frame Selected (space/view.js frameView) fits with the
// same distance.
import { DEG2RAD, vFovFromHfov } from "../pano_camera_math.js";
import { worldRotation } from "../pano_world.js";
import { add, apply } from "./vec.js";

// --- Fitting a 3D Sticker in view (docs/editor-interaction.md "3D の Sticker を収めて置く"; core/world.py has the
// same values, both checked against tests/fixtures/place_3d/fit.json).

// The default horizontal FOV of Panorama Studio's view in the editor and on the node.
export const DEFAULT_VIEW_HFOV = 100;
// The space between a fitted sphere and the edges of the view.
export const FIT_MARGIN = 1.1;
// The nearest a new 3D Sticker goes, in World units (the editor keeps it past twice its near plane too).
export const FIT_3D_MIN_DISTANCE = 0.1;
// The FOV a fit takes when it is given none: DEFAULT_VIEW_HFOV made the vertical FOV of a 16:9 view (the node's
// PORT_3D_FIT_FOV_DEG).
export const FIT_FALLBACK_FOV_DEG = vFovFromHfov(DEFAULT_VIEW_HFOV, 9 / 16);

function fitFov(fovDeg) {
  return Number.isFinite(fovDeg) && fovDeg > 0 ? fovDeg : FIT_FALLBACK_FOV_DEG;
}

// How far from its center a sphere of `radius` fits a view of `fovDeg` (the smaller of its FOVs), with
// FIT_MARGIN. Frame Selected (frameView) and the placing of a new 3D Sticker (fit3dPosition) both use it.
export function fitDistance(radius, fovDeg) {
  return radius / Math.sin(fitFov(fovDeg) * 0.5 * DEG2RAD) * FIT_MARGIN;
}

// The sphere a fit takes around a box { min, max } in the content's own (scene glTF) frame, as the route gives
// it: no sceneItemBox turn, which is for the boxes three.js loads. null for no box or a malformed one.
export function fitSphereOfBox(box) {
  const triple = (value) => Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === "number" && Number.isFinite(item));
  if (!box || typeof box !== "object" || !triple(box.min) || !triple(box.max)) return null;
  if (box.min.some((value, axis) => value > box.max[axis])) return null;
  const center = box.min.map((value, axis) => (value + box.max[axis]) / 2);
  const radius = Math.hypot(...box.max.map((value, axis) => value - box.min[axis])) / 2;
  return { center, radius };
}

// Where a new 3D Sticker turned by `rotation` ({ yaw_deg, pitch_deg, roll_deg }) goes so its content, of bounding
// `sphere` ({ center, radius } in its own frame), fits a view at `eye` looking along `dir` with a FOV of `fovDeg`:
// the sphere's center lands at max(fitDistance, minDistance) along dir. Without a sphere (or a broken one) its
// origin goes NEW_WORLD_STICKER_DISTANCE along dir.
export function fit3dPosition(eye, dir, sphere, rotation, fovDeg, minDistance) {
  const length = Math.hypot(...dir);
  const unit = dir.map((value) => value / length);
  const valid = sphere && sphere.center.every(Number.isFinite) && Number.isFinite(sphere.radius) && sphere.radius >= 0;
  const center = valid ? sphere.center : [0, 0, 0];
  const distance = valid ? Math.max(fitDistance(sphere.radius, fovDeg), minDistance) : NEW_WORLD_STICKER_DISTANCE;
  const turned = apply(worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg), center);
  return add(eye, unit, distance).map((value, axis) => value - turned[axis]);
}

// A new world image without World content goes this far ahead of the view; with content it goes half the radius
// of the content's bounding sphere ahead. A new 3D Sticker goes this far along its direction while its content is
// not known, or when it has none (fit3dPosition; core/world.py has the same constant).
export const NEW_WORLD_STICKER_DISTANCE = 2;
