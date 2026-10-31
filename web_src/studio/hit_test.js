// Which World object is under the pointer, one decision for the hover and the click (docs/space-and-view.md
// "ホバーの判定"; stage_objects.js objectUnder calls it): the ray through the pointer marched on the CPU through the
// coarse occupancy grid of each 3D item (pano_coarse_grid.js; marchCoarseGrid), a box whose item has no grid yet by its
// guide (world_guides.js hoverGuide), a plane by its outline. The shallowest hit wins.
import { lensStageRay } from "../pano_lens.js";
import { projectPoint } from "../pano_space.js";
import { quaternionToRotation, worldRotation } from "../pano_world.js";
import { hoverGuide } from "./world_guides.js";

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];

// The ray through `point` (CSS px of a width x height stage seen from `camera`): its origin and a direction whose part
// along the view axis is 1, so origin + direction * t lies at depth t. On a camera carrying a lens picture
// (pano_lens.js withLensImage) the direction is one unit long, so t is the distance from the eye (the depth
// projectPoint gives there), or null past the lens's limit.
export function cameraRay(camera, point, width, height) {
  if (camera.lensImage) return lensStageRay(camera, point.x, point.y);
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

// The least t >= 0 where origin + direction * t enters a solid cell of `grid` (pano_coarse_grid.js
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

// The id of the World object under `point`, or null. A box guide with a grid (gridOf(item.url), in its
// item's frame) is hit where the ray meets a solid cell, at that depth; a box without one yet by its guide's
// rectangle, a plane by its outline, both at their center's depth (as hoverGuide). The shallowest hit wins.
export function coarseUnder(items, gridOf, camera, point, width, height) {
  const ray = cameraRay(camera, point, width, height);
  if (!ray) return null;
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
