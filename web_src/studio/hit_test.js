// A temporary dev comparison (docs/space-and-view.md "比べるための仮の設定"; delete it once the owner has chosen):
// which World object is under the pointer, decided one way for both the hover and the click, in one of the modes the
// ComfyUI setting HIT_TEST_SETTING picks. stage_objects.js objectUnder calls this module for both.
//
//   "current": today's: the hover by the guide (world_guides.js hoverGuide), the click by the GPU pick of the pixel.
//   "box":     the hover and the click by the guide; a box the view stands in, with a corner behind the view, or
//              covering BOX_SCREEN_SHARE of the stage or more falls back to the GPU pick of the pixels (so a click on
//              nothing can still let the selection go).
//   "pixels":  the hover and the click by the GPU pick of what is drawn within PIXEL_TOLERANCE px of the pointer; the
//              hover's pick runs at most once a frame and is read back without waiting (createHoverPicker).
//   "coarse":  the hover and the click by the coarse occupancy grid of each 3D item (pano_coarse_grid.js), the ray
//              marched on the CPU (marchCoarseGrid); a plane by its outline, a box whose item has no grid yet by its
//              guide.
import { projectPoint } from "../pano_space.js";
import { quaternionToRotation, worldRotation } from "../pano_world.js";
import { hoverGuide, pointInPolygon } from "./world_guides.js";

export const HIT_TEST_SETTING_ID = "PanoramaSuite.Editor.HitTest";
export const HIT_TEST_MODES = Object.freeze(["current", "box", "pixels", "coarse"]);

// The ComfyUI setting (an extension's `settings`). Today's behavior until the owner chooses.
export const HIT_TEST_SETTING = {
  id: HIT_TEST_SETTING_ID,
  category: ["Panorama Suite", "Editor", "Hit test (dev)"],
  name: "Panorama Studio (dev): object hit test",
  tooltip: "A temporary setting to compare how the new editor finds the object under the pointer. current: hover by box, click by pixels. box: both by box. pixels: both by drawn pixels. coarse: both by a coarse grid of each 3D object.",
  type: "combo",
  options: [...HIT_TEST_MODES],
  defaultValue: "current",
};

// The mode the setting's value names, else "current".
export function hitTestMode(value) {
  return HIT_TEST_MODES.includes(value) ? value : "current";
}

// "box": the part of the stage a box's screen rectangle covers from which it falls back to the pixels.
export const BOX_SCREEN_SHARE = 0.6;
// "pixels": how far (CSS px) from the pointer a drawn pixel of an object still hits it.
export const PIXEL_TOLERANCE = 3;

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// Whether the view of `camera` stands inside the box guide `item` (world_guides.js: its 8 corners in boxCorners'
// order, turned and scaled alike, so its edges from corner 0 are its axes).
export function viewInsideBox(item, camera) {
  const [c0] = item.corners;
  const p = sub(camera.position, c0);
  for (const other of [4, 2, 1]) {
    const edge = sub(item.corners[other], c0);
    const length = dot(edge, edge);
    const along = length > 0 ? dot(p, edge) / length : 0;
    if (along < 0 || along > 1) return false;
  }
  return true;
}

// "box": whether the box guide `item` falls back to the pixels on a width x height stage seen from `camera`: the view
// stands inside it, a corner is behind the view, or its screen rectangle (cut to the stage) covers BOX_SCREEN_SHARE of
// the stage or more. A plane never does (its outline is its shape).
export function boxFallsBack(item, camera, width, height) {
  if (item.kind !== "box") return false;
  if (viewInsideBox(item, camera)) return true;
  const projected = item.corners.map((corner) => projectPoint(camera, corner, width, height));
  if (projected.some((p) => !p)) return true;
  const xs = projected.map((p) => p.x);
  const ys = projected.map((p) => p.y);
  const w = Math.max(0, Math.min(width, Math.max(...xs)) - Math.max(0, Math.min(...xs)));
  const h = Math.max(0, Math.min(height, Math.max(...ys)) - Math.max(0, Math.min(...ys)));
  return w * h >= BOX_SCREEN_SHARE * width * height;
}

// "box": the guide under `point` by the box test, leaving out the boxes that fall back: { id, fallback } where `id` is
// the hit (or null) and `fallback` whether any box fell back (then a miss is asked of the pixels).
export function boxUnder(items, camera, point, width, height) {
  const kept = [];
  let fallback = false;
  for (const item of items) {
    if (boxFallsBack(item, camera, width, height)) fallback = true;
    else kept.push(item);
  }
  return { id: hoverGuide(kept, camera, point, width, height), fallback };
}

// The ray through `point` (CSS px of a width x height stage seen from `camera`): its origin and a direction whose part
// along the view axis is 1, so origin + direction * t lies at depth t.
export function cameraRay(camera, point, width, height) {
  const rotation = quaternionToRotation(camera.quaternion);
  const column = (index) => [rotation[0][index], rotation[1][index], rotation[2][index]];
  const right = column(0);
  const up = column(1);
  const forward = column(2).map((value) => -value);
  const tanY = Math.tan(camera.fovY_deg * Math.PI / 360);
  const tanX = tanY * camera.aspect;
  const sx = (point.x / width * 2 - 1) * tanX;
  const sy = (1 - point.y / height * 2) * tanY;
  return { origin: [...camera.position], direction: [0, 1, 2].map((axis) => forward[axis] + right[axis] * sx + up[axis] * sy) };
}

// "coarse": the least t >= 0 where origin + direction * t enters a solid cell of `grid` (pano_coarse_grid.js
// createCoarseGrid: { min, max, n, cells }, both in its frame), or null when the ray meets none (3D DDA through the
// cells, Amanatides and Woo).
export function marchCoarseGrid(grid, origin, direction) {
  const { min, max, n, cells } = grid;
  let enter = 0;
  let leave = Infinity;
  for (let axis = 0; axis < 3; axis += 1) {
    if (direction[axis] === 0) {
      if (origin[axis] < min[axis] || origin[axis] > max[axis]) return null;
      continue;
    }
    const a = (min[axis] - origin[axis]) / direction[axis];
    const b = (max[axis] - origin[axis]) / direction[axis];
    enter = Math.max(enter, Math.min(a, b));
    leave = Math.min(leave, Math.max(a, b));
  }
  if (enter > leave) return null;
  const size = [0, 1, 2].map((axis) => (max[axis] - min[axis]) / n);
  const cell = [0, 0, 0];
  const step = [0, 0, 0];
  const next = [Infinity, Infinity, Infinity];
  const delta = [Infinity, Infinity, Infinity];
  for (let axis = 0; axis < 3; axis += 1) {
    const at = origin[axis] + direction[axis] * enter;
    cell[axis] = Math.min(n - 1, Math.max(0, Math.floor((at - min[axis]) / size[axis])));
    if (direction[axis] > 0) {
      step[axis] = 1;
      next[axis] = (min[axis] + (cell[axis] + 1) * size[axis] - origin[axis]) / direction[axis];
      delta[axis] = size[axis] / direction[axis];
    } else if (direction[axis] < 0) {
      step[axis] = -1;
      next[axis] = (min[axis] + cell[axis] * size[axis] - origin[axis]) / direction[axis];
      delta[axis] = -size[axis] / direction[axis];
    }
  }
  let t = enter;
  while (t <= leave) {
    if (cells[cell[0] + n * (cell[1] + n * cell[2])]) return t;
    const axis = next[0] < next[1] ? (next[0] < next[2] ? 0 : 2) : (next[1] < next[2] ? 1 : 2);
    t = next[axis];
    cell[axis] += step[axis];
    if (cell[axis] < 0 || cell[axis] >= n) return null;
    next[axis] += delta[axis];
  }
  return null;
}

// "coarse": the id of the World object under `point`, or null. A box guide with a grid (gridOf(item.url), in its
// item's frame) is hit where the ray meets a solid cell, at that depth; a box without one yet by its guide's
// rectangle, a plane by its outline, both at their center's depth (as hoverGuide). The shallowest hit wins.
export function coarseUnder(items, gridOf, camera, point, width, height) {
  const ray = cameraRay(camera, point, width, height);
  let best = null;
  for (const item of items) {
    let depth = null;
    const grid = item.kind === "box" && item.url ? gridOf(item.url) : null;
    if (grid && item.value) {
      const { position, scale, yaw_deg, pitch_deg, roll_deg } = item.value;
      if (!(scale > 0)) continue;
      const rotation = worldRotation(yaw_deg, pitch_deg, roll_deg);
      // The inverse of position + scale R x: R^T (p - position) / scale; t keeps its meaning as the map is affine.
      const local = (v) => [0, 1, 2].map((axis) => (rotation[0][axis] * v[0] + rotation[1][axis] * v[1] + rotation[2][axis] * v[2]) / scale);
      depth = marchCoarseGrid(grid, local(sub(ray.origin, position)), local(ray.direction));
      if (depth !== null && depth < camera.near) depth = null;
    } else if (hoverGuide([item], camera, point, width, height)) {
      const center = projectPoint(camera, item.center, width, height);
      depth = center ? center.z : Infinity;
    }
    if (depth !== null && (!best || depth < best.depth)) best = { id: item.id, depth };
  }
  return best?.id ?? null;
}

// "pixels": the hover's GPU pick, at most one a frame and one at a time, read back without waiting. request(key, pick)
// returns the id found for `key` (the pointer and the view it was asked for), or the last one found while the pick
// for `key` runs; it asks for a pick at the next frame when `key` is new. pick() returns a promise of the id.
// onResult(changed) runs when a pick ends (changed: its id differs from the one before). clear() forgets it all.
export function createHoverPicker({ requestFrame, onResult = () => {} }) {
  let wanted = null;
  let scheduled = false;
  let running = false;
  let last = { key: null, id: null };
  let generation = 0;

  function schedule() {
    if (scheduled || running || !wanted) return;
    scheduled = true;
    requestFrame(run);
  }

  function run() {
    scheduled = false;
    if (!wanted) return;
    const job = wanted;
    const ran = generation;
    wanted = null;
    running = true;
    // The pick draws now, in this frame; its read back ends later.
    let read;
    try {
      read = Promise.resolve(job.pick());
    } catch (error) {
      read = Promise.reject(error);
    }
    read.then((id) => id ?? null, () => null).then((id) => {
      running = false;
      if (ran !== generation) {
        schedule();
        return;
      }
      const changed = id !== last.id;
      last = { key: job.key, id };
      schedule();
      onResult(changed);
    });
  }

  return {
    request(key, pick) {
      if (key === last.key) {
        wanted = null;
        return last.id;
      }
      if (wanted?.key !== key) wanted = { key, pick };
      schedule();
      return last.id;
    },
    clear() {
      generation += 1;
      wanted = null;
      last = { key: null, id: null };
    },
    // For the tests: whether a pick is asked for or running.
    busy: () => scheduled || running,
  };
}
