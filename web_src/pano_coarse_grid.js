// The coarse occupancy grid of a loaded 3D Sticker item, for the hover and the click on World objects
// (docs/space-and-view.md "ホバーの判定"; web_src/studio/hit_test.js marchCoarseGrid). The grid spans the item's box in
// the `scene` glTF frame (a SPLAT's turned from 3DGS coordinates, as pano_space.js sceneItemBox turns its box) with
// COARSE_GRID_CELLS cells a side; a cell that holds a mesh triangle, a depth grid point or a splat center is solid.
// The three.js view builds it once per item, ahead of any query, in idle time slices (createCoarseGridBuilds). In the
// three.js chunk; it reads the objects by their fields and imports nothing eager, so Node tests it with plain objects.
import { depthGridPoint } from "./pano_depth_grid.js";

export const COARSE_GRID_CELLS = 16;
// The most time (ms) one idle slice spends building grids, and the longest wait for the next slice when the page is
// never idle.
export const COARSE_GRID_SLICE_MS = 4;
export const COARSE_GRID_IDLE_TIMEOUT_MS = 100;
// How many cells marked between two looks at the clock while building.
const WORK_PER_CHECK = 512;
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
// Returns how many points it marked (the work it took).
export function markTriangle(grid, a, b, c) {
  const cell = Math.min(...[0, 1, 2].map((axis) => (grid.max[axis] - grid.min[axis]) / grid.n));
  const edge = Math.max(
    Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]),
    Math.hypot(c[0] - b[0], c[1] - b[1], c[2] - b[2]),
    Math.hypot(a[0] - c[0], a[1] - c[1], a[2] - c[2]),
  );
  const steps = Math.min(64, Math.max(1, Math.ceil(edge / (cell * 0.5))));
  const p = [0, 0, 0];
  let marked = 0;
  for (let i = 0; i <= steps; i += 1) {
    for (let j = 0; j <= steps - i; j += 1) {
      const u = i / steps;
      const v = j / steps;
      const w = 1 - u - v;
      for (let axis = 0; axis < 3; axis += 1) p[axis] = a[axis] * w + b[axis] * u + c[axis] * v;
      markPoint(grid, p);
      marked += 1;
    }
  }
  return marked;
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

// The work of marking a mesh object's triangles (its geometry's position attribute, indexed or not), each corner moved
// by `matrix`: yields now and then (after about WORK_PER_CHECK points).
function* markMesh(grid, object, matrix) {
  const position = object.geometry?.attributes?.position;
  if (!position) return;
  const index = object.geometry.index;
  const count = index ? index.count : position.count;
  const point = (k) => {
    const at = index ? index.getX(k) : k;
    return applyMatrix(matrix, [position.getX(at), position.getY(at), position.getZ(at)]);
  };
  let work = 0;
  if (object.isPoints || object.isLine) {
    for (let k = 0; k < count; k += 1) {
      markPoint(grid, point(k));
      if ((work += 1) >= WORK_PER_CHECK) work = yield* pause();
    }
    return;
  }
  for (let k = 0; k + 2 < count; k += 3) {
    work += markTriangle(grid, point(k), point(k + 1), point(k + 2));
    if (work >= WORK_PER_CHECK) work = yield* pause();
  }
}

function* pause() {
  yield;
  return 0;
}

// The work of marking a depth grid item's points (pano_depth_grid.js depthGridPoint) from its depth texture and K's
// inverse, as they are when the work is made.
function* markDepthGrid(grid, object) {
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
    yield;
  }
}

// The work of marking a SPLAT's centers (Spark), turned from 3DGS coordinates: by index through its PackedSplats when
// it has them (so the work yields), else all at once through forEachSplat.
function* markSplats(grid, object) {
  const packed = object.packedSplats;
  if (packed?.getSplat && Number.isInteger(packed.numSplats)) {
    for (let index = 0; index < packed.numSplats; index += 1) {
      const { center } = packed.getSplat(index);
      markPoint(grid, [center.x, -center.y, -center.z]);
      if (index % WORK_PER_CHECK === WORK_PER_CHECK - 1) yield;
    }
    return;
  }
  object.forEachSplat?.((index, center) => markPoint(grid, [center.x, -center.y, -center.z]));
}

// The building of a loaded item's ({ kind, object, box }, pano_scene_items.js) grid, a step at a time: { grid,
// step(timeUp) } where step works until timeUp() is true (it looks between bits of WORK_PER_CHECK points) or the grid
// is done, and returns whether it is done; null without a box. The shape is taken as it is now: a mesh's nodes' places
// under the item's root are kept here (an animated one stays in the pose it has now, while it plays on), a depth
// grid's depth data is the one it has now.
export function coarseGridBuilder({ kind, object, box }, n = COARSE_GRID_CELLS) {
  if (!box || !object) return null;
  let grid;
  let work;
  if (kind === "splat") {
    grid = createCoarseGrid({ min: [box.min[0], 0 - box.max[1], 0 - box.max[2]], max: [box.max[0], 0 - box.min[1], 0 - box.min[2]] }, n);
    work = markSplats(grid, object);
  } else if (kind === "depth_grid" || object.userData?.depthGrid) {
    grid = createCoarseGrid(box, n);
    work = markDepthGrid(grid, object);
  } else {
    grid = createCoarseGrid(box, n);
    object.updateMatrixWorld?.(true);
    const rootInverse = object.matrixWorld ? invertAffine(object.matrixWorld.elements) : null;
    const meshes = [];
    const visit = (node) => {
      if (node.isMesh || node.isPoints || node.isLine) {
        const world = node.matrixWorld?.elements;
        meshes.push([node, world && rootInverse ? multiply(rootInverse, world) : [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]]);
      }
    };
    if (object.traverse) object.traverse(visit);
    else visit(object);
    work = (function* () {
      for (const [node, matrix] of meshes) yield* markMesh(grid, node, matrix);
    })();
  }
  let done = false;
  return {
    grid,
    step(timeUp = () => false) {
      while (!done) {
        if (work.next().done) done = true;
        else if (timeUp()) break;
      }
      return done;
    },
  };
}

// The coarse grid of a loaded item, built at once (coarseGridBuilder), or null without a box.
export function itemCoarseGrid(item, n = COARSE_GRID_CELLS) {
  const builder = coarseGridBuilder(item, n);
  if (!builder) return null;
  builder.step();
  return builder.grid;
}

// The key of the grid an input's items share (an input of pano_three_view.js: a 3D file Sticker's request, or the
// port Sticker's, whose batch has an item per frame): the Sticker, the kind, where it loads from and its first item.
// One grid stands for every item of a batch (built from the first item drawn), so a played batch builds one.
export function coarseGridKey(input) {
  return JSON.stringify([input.id ?? null, input.kind ?? null, input.src ?? null, input.urls?.[0] ?? input.url ?? null, input.urls?.length ?? 1]);
}

// The grids of the loaded items, built ahead of any query without holding up a frame. want(key, item) asks once for
// the grid of `key` (coarseGridKey; later calls for it do nothing) from `item`: its builder is made now
// (coarseGridBuilder: the shape as it is now), and its building waits in line. Each slice (schedule(run):
// requestIdleCallback or a stand-in) builds the waiting grids in order until `sliceMs` of now() has gone, and asks
// for another slice while any wait. get(key) returns the grid once it is done, else null (it never builds). An item
// no longer loaded (item.state, when it has one) while it waits is let go, and its key may be asked for again; a done
// grid keeps no hold on its item. onReady() runs when a grid is done. close() stops it all.
export function createCoarseGridBuilds({ schedule, now, sliceMs = COARSE_GRID_SLICE_MS, onReady = () => {} }) {
  const entries = new Map();
  const waiting = [];
  let asked = false;
  let closed = false;

  function ask() {
    if (asked || closed || !waiting.length) return;
    asked = true;
    schedule(run);
  }

  function run() {
    asked = false;
    if (closed) return;
    const end = now() + sliceMs;
    const timeUp = () => now() >= end;
    while (waiting.length && !timeUp()) {
      const entry = waiting[0];
      if (entry.item.state !== undefined && entry.item.state !== "loaded") {
        waiting.shift();
        entries.delete(entry.key);
        continue;
      }
      let done;
      try {
        done = entry.builder.step(timeUp);
      } catch (error) {
        console.error("[PanoramaStickers] Building an item's hit grid failed", error);
        entry.builder = null;
        done = true;
      }
      if (!done) break;
      waiting.shift();
      entry.grid = entry.builder?.grid ?? null;
      entry.done = true;
      entry.builder = null;
      entry.item = null;
      onReady();
    }
    ask();
  }

  return {
    want(key, item) {
      if (closed || !item || entries.has(key)) return;
      const builder = coarseGridBuilder(item);
      const entry = { key, item: builder ? item : null, builder, grid: null, done: !builder };
      entries.set(key, entry);
      if (builder) {
        waiting.push(entry);
        ask();
      }
    },
    get(key) {
      const entry = entries.get(key);
      return entry?.done ? entry.grid : null;
    },
    close() {
      closed = true;
      waiting.length = 0;
    },
  };
}
