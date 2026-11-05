// The guides drawn around the World content (docs/threejs-spark-integration.md "Camera 向けの部品"): the ground grid's
// spacing and a Camera's frustum.
import { DEG2RAD } from "../pano_camera_math.js";
import { lensFilmDirection, lensRadius } from "../pano_lens.js";
import { worldRotation } from "../pano_world.js";
import { add, apply } from "./vec.js";

// The ground grid on the World XZ plane for content of size radius: lines every power of ten that
// gives at least 10 cells across the content, 20 cells each way of the origin.
export function gridSpec(radius) {
  const step = 10 ** Math.floor(Math.log10(Math.max(radius, 1e-6) / 5));
  return { step, size: step * 40, divisions: 40 };
}

// --- Camera guides: a Camera's frustum (studio/camera_marker.js draws it).

// The shape of a Camera value's frustum `length` ahead: { apex, outline, spokes, top }. `apex` is its position,
// `outline` the far edge as a closed loop of World points (the four corners of the rectangle at its hFOV and aspect,
// or a lens Camera's image edge, null where a point is past 180° off the axis), `spokes` the indices of the outline
// points joined to the apex, and `top` the triangle above the top edge that marks its up (null when a point of it is
// past 180°).
export function cameraFrustumShape(camera, length) {
  const rotation = worldRotation(camera.yaw_deg, camera.pitch_deg, camera.roll_deg);
  if (camera.curve !== undefined && camera.curve !== 1) return lensFrustumShape(camera, rotation, length);
  const halfW = Math.tan(camera.hFOV_deg * 0.5 * DEG2RAD) * length;
  const halfH = halfW / camera.aspect;
  const at = (x, y, z) => add(camera.position, apply(rotation, [x, y, z]));
  const outline = [at(-halfW, -halfH, -length), at(halfW, -halfH, -length), at(halfW, halfH, -length), at(-halfW, halfH, -length)];
  const top = upMark(halfW, halfH).map(([x, y]) => at(x, y, -length));
  return { apex: [...camera.position], outline, spokes: [0, 1, 2, 3], top, lens: false };
}

// The triangle above a frame of half width `halfW` and half height `halfH` that marks its up, as [x, y] film points.
// Its gap and height follow the width alone (the 16:9 look), so the triangle keeps its shape whatever the aspect.
const UP_MARK_GAP = 0.1 * 9 / 16;
const UP_MARK_HEIGHT = 0.4 * 9 / 16;
function upMark(halfW, halfH) {
  const base = halfH + halfW * UP_MARK_GAP;
  return [[-halfW * 0.5, base], [0, base + halfW * UP_MARK_HEIGHT], [halfW * 0.5, base]];
}

// A lens Camera's frustum (ADR 0042): its image's edges as the rays they shoot (pano_lens.js lensFilmDirection),
// `length` out, joined to the Camera at the corners and the edges' middles, and the mark above the top. An edge
// point past 180° off the axis is null.
const LENS_FRUSTUM_STEPS = 8;

function lensFrustumShape(camera, rotation, length) {
  const halfX = lensRadius(camera.hFOV_deg * 0.5 * DEG2RAD, camera.curve);
  const halfY = halfX / camera.aspect;
  const at = (x, y) => {
    const ray = lensFilmDirection(x, y, camera.curve);
    return ray && add(camera.position, apply(rotation, ray.map((value) => value * length)));
  };
  const corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  const outline = [];
  corners.forEach(([x0, y0], index) => {
    const [x1, y1] = corners[(index + 1) % 4];
    for (let step = 0; step < LENS_FRUSTUM_STEPS; step += 1) {
      const t = step / LENS_FRUSTUM_STEPS;
      outline.push(at((x0 + (x1 - x0) * t) * halfX, (y0 + (y1 - y0) * t) * halfY));
    }
  });
  const spokes = outline.map((_, index) => index).filter((index) => index % (LENS_FRUSTUM_STEPS / 2) === 0);
  const top = upMark(halfX, halfY).map(([x, y]) => at(x, y));
  return { apex: [...camera.position], outline, spokes, top: top.every(Boolean) ? top : null, lens: true };
}
