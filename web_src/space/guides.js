// The guides drawn around the World content (docs/threejs-spark-integration.md "Camera 向けの部品"): the ground grid's
// spacing, a Camera's frustum and its trajectory over the Timeline, and hitting them on screen.
import { DEG2RAD, clamp } from "../pano_camera_math.js";
import { lensFilmDirection, lensRadius } from "../pano_lens.js";
import { evaluateLane } from "../pano_scene_eval.js";
import { worldRotation } from "../pano_world.js";
import { projectPoint } from "./camera.js";
import { add, apply } from "./vec.js";

// The ground grid on the World XZ plane for content of size radius: lines every power of ten that
// gives at least 10 cells across the content, 20 cells each way of the origin.
export function gridSpec(radius) {
  const step = 10 ** Math.floor(Math.log10(Math.max(radius, 1e-6) / 5));
  return { step, size: step * 40, divisions: 40 };
}

// --- Camera guides: a Camera's frustum and its trajectory over the Timeline. Panorama Studio's editor
// draws them with renderSpace's `lines`.

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

// Line segments [a, b] of a Camera value's frustum `length` ahead (cameraFrustumShape): the four edges from its
// position, the far rectangle at its hFOV and aspect, and a triangle above the rectangle that marks its up. A lens
// Camera's has its image edge with lines from the Camera to the corners and the edges' middles.
export function cameraFrustumSegments(camera, length) {
  const { apex, outline, spokes, top, lens } = cameraFrustumShape(camera, length);
  const segments = [];
  if (lens) {
    outline.forEach((point, index) => {
      const next = outline[(index + 1) % outline.length];
      if (point && next) segments.push([point, next]);
      if (point && spokes.includes(index)) segments.push([apex, point]);
    });
  } else {
    for (const index of spokes) segments.push([apex, outline[index]]);
    outline.forEach((corner, index) => segments.push([corner, outline[(index + 1) % outline.length]]));
  }
  if (top) segments.push([top[0], top[1]], [top[1], top[2]], [top[2], top[0]]);
  return segments;
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

// Whether the canvas point p is within `tolerance` pixels of one of the World segments (a Camera's
// frustum, cameraFrustumSegments()) in a width x height view from camera (a spaceCamera()). A segment
// counts where both its ends are in front of the view.
export function segmentsHit(camera, segments, p, width, height, tolerance = 6) {
  return segments.some(([a, b]) => {
    const pa = projectPoint(camera, a, width, height);
    const pb = projectPoint(camera, b, width, height);
    if (!pa || !pb) return false;
    const dx = pb.x - pa.x;
    const dy = pb.y - pa.y;
    const t = clamp(((p.x - pa.x) * dx + (p.y - pa.y) * dy) / Math.max(dx * dx + dy * dy, 1e-12), 0, 1);
    return Math.hypot(pa.x + dx * t - p.x, pa.y + dy * t - p.y) <= tolerance;
  });
}

// The segments of a polyline through points (a cameraTrajectory()).
export function polylineSegments(points) {
  return points.slice(1).map((point, index) => [points[index], point]);
}

// The Camera's positions over the Timeline frames [0, frames), at most `samples` of them evenly spaced
// with the last frame included, from the evaluator; one position when its position Lane has no
// Keyframes.
export function cameraTrajectory(state, frames, samples = 2000) {
  const { camera } = state;
  if (!camera.position.keyframes.length) return [evaluateLane(camera, "position", 0)];
  const last = Math.max(frames - 1, 0);
  const count = Math.min(samples, last + 1);
  return Array.from({ length: count }, (_, index) => {
    const frame = count === 1 ? 0 : index * last / (count - 1);
    return evaluateLane(camera, "position", frame);
  });
}
