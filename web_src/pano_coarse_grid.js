// A temporary dev comparison (docs/space-and-view.md "比べるための仮の設定"): the coarse occupancy grid of a loaded
// `scene` or 3D Sticker item, for the "coarse" object hit test (web_src/studio/hit_test.js marchCoarseGrid). The grid
// spans the item's box in the `scene` glTF frame (a SPLAT's turned from 3DGS coordinates, as pano_space.js
// sceneItemBox turns its box) with COARSE_GRID_CELLS cells a side; a cell that holds a mesh triangle, a depth grid
// point or a splat center is solid. The three.js view builds it once per loaded item, the first time it is asked
// (pano_three_view.js sceneGrid). In the three.js chunk; it reads the objects by their fields and imports nothing
// eager, so Node tests it with plain objects.
import { depthGridPoint } from "./pano_depth_grid.js";

export const COARSE_GRID_CELLS = 16;
// The most points a depth grid's item adds: its pixels are taken every `stride` rows and columns to stay under it.
const DEPTH_GRID_POINTS = 262144;

// An empty grid of n x n x n cells over box { min, max } (an axis of no length gets a small one): { min, max, n,
// cells (Uint8Array, 1 solid; index x + n * (y + n * z)) }.
export function createCoarseGrid(box, n = COARSE_GRID_CELLS) {
  const min = [...box.min];
  const max = [...box.max];
  const span = Math.max(...max.map((value, axis) => value - min[axis]), 1e-6);
  for (let axis = 0; axis < 3; axis += 1) {
    if (max[axis] - min[axis] < span * 1e-3) {
      const half = span * 5e-4;
      min[axis] -= half;
      max[axis] += half;
    }
  }
  return { min, max, n, cells: new Uint8Array(n * n * n) };
}

function cellOf(grid, axis, value) {
  const { min, max, n } = grid;
  return Math.min(n - 1, Math.max(0, Math.floor(((value - min[axis]) / (max[axis] - min[axis])) * n)));
}

// Marks the cell of the point p ([x, y, z] in the grid's frame); a point outside the box marks the nearest cell.
export function markPoint(grid, p) {
  if (!Number.isFinite(p[0]) || !Number.isFinite(p[1]) || !Number.isFinite(p[2])) return;
  const { n } = grid;
  grid.cells[cellOf(grid, 0, p[0]) + n * (cellOf(grid, 1, p[1]) + n * cellOf(grid, 2, p[2]))] = 1;
}

// Marks the cells the triangle a, b, c passes through: points on it no farther apart than half the smallest cell.
export function markTriangle(grid, a, b, c) {
  const cell = Math.min(...[0, 1, 2].map((axis) => (grid.max[axis] - grid.min[axis]) / grid.n));
  const edge = Math.max(
    Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]),
    Math.hypot(c[0] - b[0], c[1] - b[1], c[2] - b[2]),
    Math.hypot(a[0] - c[0], a[1] - c[1], a[2] - c[2]),
  );
  const steps = Math.min(64, Math.max(1, Math.ceil(edge / (cell * 0.5))));
  const p = [0, 0, 0];
  for (let i = 0; i <= steps; i += 1) {
    for (let j = 0; j <= steps - i; j += 1) {
      const u = i / steps;
      const v = j / steps;
      const w = 1 - u - v;
      for (let axis = 0; axis < 3; axis += 1) p[axis] = a[axis] * w + b[axis] * u + c[axis] * v;
      markPoint(grid, p);
    }
  }
}

// The point p moved by the column-major 4 x 4 matrix m (three.js Matrix4.elements).
function applyMatrix(m, p) {
  return [
    m[0] * p[0] + m[4] * p[1] + m[8] * p[2] + m[12],
    m[1] * p[0] + m[5] * p[1] + m[9] * p[2] + m[13],
    m[2] * p[0] + m[6] * p[1] + m[10] * p[2] + m[14],
  ];
}

// The column-major 4 x 4 matrix of an affine matrix's inverse.
function invertAffine(m) {
  const [a, b, c, , d, e, f, , g, h, i] = m;
  const det = a * (e * i - f * h) - d * (b * i - c * h) + g * (b * f - c * e);
  if (!det) return null;
  const r = [
    (e * i - f * h) / det, (c * h - b * i) / det, (b * f - c * e) / det,
    (f * g - d * i) / det, (a * i - c * g) / det, (c * d - a * f) / det,
    (d * h - e * g) / det, (b * g - a * h) / det, (a * e - b * d) / det,
  ];
  const t = [m[12], m[13], m[14]];
  const tx = -(r[0] * t[0] + r[3] * t[1] + r[6] * t[2]);
  const ty = -(r[1] * t[0] + r[4] * t[1] + r[7] * t[2]);
  const tz = -(r[2] * t[0] + r[5] * t[1] + r[8] * t[2]);
  return [r[0], r[1], r[2], 0, r[3], r[4], r[5], 0, r[6], r[7], r[8], 0, tx, ty, tz, 1];
}

function multiply(a, b) {
  const out = new Array(16).fill(0);
  for (let col = 0; col < 4; col += 1) {
    for (let row = 0; row < 4; row += 1) {
      let sum = 0;
      for (let k = 0; k < 4; k += 1) sum += a[k * 4 + row] * b[col * 4 + k];
      out[col * 4 + row] = sum;
    }
  }
  return out;
}

// The triangles of a mesh object (its geometry's position attribute, indexed or not), each corner moved by `matrix`.
function markMesh(grid, object, matrix) {
  const position = object.geometry?.attributes?.position;
  if (!position) return;
  const index = object.geometry.index;
  const count = index ? index.count : position.count;
  const point = (k) => {
    const at = index ? index.getX(k) : k;
    return applyMatrix(matrix, [position.getX(at), position.getY(at), position.getZ(at)]);
  };
  if (object.isPoints || object.isLine) {
    for (let k = 0; k < count; k += 1) markPoint(grid, point(k));
    return;
  }
  for (let k = 0; k + 2 < count; k += 3) markTriangle(grid, point(k), point(k + 1), point(k + 2));
}

// A depth grid item's points (pano_depth_grid.js depthGridPoint) from its depth texture and K's inverse.
function markDepthGrid(grid, object) {
  const uniforms = object.material?.uniforms;
  const image = uniforms?.depthMap?.value?.image;
  const elements = uniforms?.inverseK?.value?.elements;
  if (!image?.data || !elements) return;
  // The uniform is a three.js Matrix3 (column-major); depthGridPoint takes it by rows.
  const inverse = [0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => elements[col * 3 + row]));
  const { data, width, height } = image;
  const stride = Math.max(1, Math.ceil(Math.sqrt((width * height) / DEPTH_GRID_POINTS)));
  for (let y = 0; y < height; y += stride) {
    for (let x = 0; x < width; x += stride) {
      const depth = data[y * width + x];
      if (depth > 0) markPoint(grid, depthGridPoint(inverse, x, y, depth));
    }
  }
}

// The coarse grid of a loaded item ({ kind, object, box }, pano_scene_items.js), or null without a box. A mesh's
// triangles are taken in their place under the item's root (an animated one in its rest pose), a SPLAT's centers
// (Spark's forEachSplat) turned from 3DGS coordinates, a depth grid's points.
export function itemCoarseGrid({ kind, object, box }, n = COARSE_GRID_CELLS) {
  if (!box || !object) return null;
  if (kind === "splat") {
    const grid = createCoarseGrid({ min: [box.min[0], 0 - box.max[1], 0 - box.max[2]], max: [box.max[0], 0 - box.min[1], 0 - box.min[2]] }, n);
    object.forEachSplat?.((index, center) => markPoint(grid, [center.x, -center.y, -center.z]));
    return grid;
  }
  const grid = createCoarseGrid(box, n);
  if (kind === "depth_grid" || object.userData?.depthGrid) {
    markDepthGrid(grid, object);
    return grid;
  }
  object.updateMatrixWorld?.(true);
  const rootInverse = object.matrixWorld ? invertAffine(object.matrixWorld.elements) : null;
  const visit = (node) => {
    if (node.isMesh || node.isPoints || node.isLine) {
      const world = node.matrixWorld?.elements;
      const matrix = world && rootInverse ? multiply(rootInverse, world) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      markMesh(grid, node, matrix);
    }
  };
  if (object.traverse) object.traverse(visit);
  else visit(object);
  return grid;
}
