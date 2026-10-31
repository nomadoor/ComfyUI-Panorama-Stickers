// Finding the World object under the pointer (docs/space-and-view.md "ホバーの判定"): the ray through the coarse
// grid of each 3D item (web_src/studio/hit_test.js), the grid and its building ahead of time in idle slices
// (web_src/pano_coarse_grid.js), and that the stage's hover and press agree and read no GPU
// (web_src/studio/stage_objects.js). The three.js view is a stand-in.
import assert from "node:assert/strict";
import test from "node:test";

import {
  COARSE_GRID_CELLS,
  COARSE_GRID_SLICE_MS,
  coarseGridBuilder,
  coarseGridKey,
  createCoarseGrid,
  createCoarseGridBuilds,
  itemCoarseGrid,
  markPoint,
  markTriangle,
} from "../web_src/pano_coarse_grid.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { boxCorners, projectPoint, transformPoint } from "../web_src/pano_space.js";
import { cameraRay, coarseUnder, marchCoarseGrid } from "../web_src/studio/hit_test.js";
import { createStudioSession } from "../web_src/studio/session.js";
import { stageContent } from "../web_src/studio/stage_content.js";
import { createStageObjects } from "../web_src/studio/stage_objects.js";
import { stageCamera } from "../web_src/studio/stage_view.js";

const W = 1000;
const H = 500;
const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -5] }, W, H, 50);
const unit = { min: [-1, -1, -1], max: [1, 1, 1] };
const placed = (position, scale = 1) => ({ position, scale, yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });
const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// A box guide as world_guides.js worldGuideItems makes one.
function boxGuide(id, box, value, url = null) {
  const corners = boxCorners(box).map((p) => transformPoint(value, p));
  return { id, kind: "box", locked: false, url, value, corners, segments: [], center: transformPoint(value, box.min.map((v, axis) => (v + box.max[axis]) / 2)) };
}

// A grid over `unit` whose only solid cells are around two opposite corners: the middle of the box is empty.
function hollowGrid() {
  const grid = createCoarseGrid(unit);
  markPoint(grid, [-0.95, -0.95, 0.95]);
  markPoint(grid, [0.95, 0.95, 0.95]);
  return grid;
}

test("the camera ray's point at t lies at depth t on the screen point it was made for", () => {
  const point = { x: 730, y: 120 };
  const ray = cameraRay(camera, point, W, H);
  const p = ray.origin.map((value, axis) => value + ray.direction[axis] * 7);
  const projected = projectPoint(camera, p, W, H);
  assert.ok(Math.abs(projected.x - point.x) < 1e-9 && Math.abs(projected.y - point.y) < 1e-9);
  assert.ok(Math.abs(projected.z - 7) < 1e-9);
});

test("a ray is stopped at the first solid cell it enters, passes empty ones, and starts in a solid one at once", () => {
  const grid = createCoarseGrid({ min: [0, 0, 0], max: [4, 4, 4] }, 4);
  markPoint(grid, [2.5, 0.5, 0.5]);
  // Along +X at y = z = 0.5: through cells 0 and 1, into cell 2 at x = 2, from x = -1.
  assert.equal(marchCoarseGrid(grid, [-1, 0.5, 0.5], [1, 0, 0]), 3);
  // Along -X from the far side: enters cell 2 at x = 3.
  assert.equal(marchCoarseGrid(grid, [6, 0.5, 0.5], [-2, 0, 0]), 1.5);
  // At y = 1.5 every cell is empty.
  assert.equal(marchCoarseGrid(grid, [-1, 1.5, 0.5], [1, 0, 0]), null);
  // Misses the box.
  assert.equal(marchCoarseGrid(grid, [-1, 5, 0.5], [1, 0, 0]), null);
  // From inside the solid cell.
  assert.equal(marchCoarseGrid(grid, [2.5, 0.5, 0.5], [0, 1, 0]), 0);
  // A slanted ray through the cell's corner region.
  const t = marchCoarseGrid(grid, [0, 0, 0.5], [1, 0.2, 0]);
  assert.ok(t !== null && Math.abs(t - 2) < 1e-9);
});

test("a grid marks the cells a triangle passes through, not only its corners", () => {
  const grid = createCoarseGrid({ min: [0, 0, 0], max: [8, 8, 8] }, 8);
  markTriangle(grid, [0.5, 0.5, 0.5], [7.5, 0.5, 0.5], [0.5, 7.5, 0.5]);
  const solid = (x, y, z) => grid.cells[x + 8 * (y + 8 * z)] === 1;
  assert.equal(solid(3, 0, 0), true, "along its edge");
  assert.equal(solid(2, 2, 0), true, "inside it");
  assert.equal(solid(6, 6, 0), false, "beyond its long edge");
  assert.equal(solid(2, 2, 1), false, "off its plane");
});

test("an item's grid from a mesh's triangles (in their place under the root) and from a SPLAT's centers (turned from 3DGS)", () => {
  const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const attribute = (values) => ({ count: values.length / 3, getX: (i) => values[i * 3], getY: (i) => values[i * 3 + 1], getZ: (i) => values[i * 3 + 2] });
  // One small triangle near (0.9, 0.9, 0.9) of the unit box, its mesh moved by +0.5 in X under the root.
  const mesh = {
    isMesh: true,
    geometry: { attributes: { position: attribute([0.3, 0.9, 0.9, 0.4, 0.9, 0.9, 0.3, 0.95, 0.9]) }, index: null },
    matrixWorld: { elements: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.5, 0, 0, 1] },
  };
  const root = { matrixWorld: { elements: identity }, updateMatrixWorld() {}, traverse: (visit) => [root, mesh].forEach(visit) };
  const grid = itemCoarseGrid({ kind: "mesh", object: root, box: unit });
  assert.equal(grid.n, COARSE_GRID_CELLS);
  const n = grid.n;
  const cell = (p) => p.map((v, axis) => Math.min(n - 1, Math.floor(((v - grid.min[axis]) / (grid.max[axis] - grid.min[axis])) * n)));
  const at = ([x, y, z]) => grid.cells[x + n * (y + n * z)];
  assert.equal(at(cell([0.85, 0.9, 0.9])), 1, "the triangle where the mesh's matrix puts it");
  assert.equal(at(cell([0.3, 0.9, 0.9])), 0, "not where it is in the mesh's own frame");
  assert.equal(grid.cells.reduce((a, b) => a + b, 0) <= 2, true);
  // A SPLAT: its box in 3DGS coordinates; a center at 3DGS (0.5, 0.5, 0.5) is at (0.5, -0.5, -0.5) in the scene frame.
  const splat = { forEachSplat: (callback) => callback(0, { x: 0.5, y: 0.5, z: 0.5 }) };
  const splatGrid = itemCoarseGrid({ kind: "splat", object: splat, box: { min: [0, 0, 0], max: [1, 1, 1] } });
  assert.deepEqual(splatGrid.min, [0, -1, -1]);
  assert.deepEqual(splatGrid.max, [1, 0, 0]);
  const m = splatGrid.n;
  assert.equal(splatGrid.cells[m / 2 + m * (m / 2 + m * (m / 2))], 1);
  assert.equal(itemCoarseGrid({ kind: "mesh", object: root, box: null }), null);
});

test("the empty middle of a box is not hit, its solid corner is, and a box without a grid is hit by its rectangle", () => {
  const value = placed([0, 0, -6]);
  const item = boxGuide("model", unit, value, "file3d:model");
  const grids = { "file3d:model": hollowGrid() };
  const gridOf = (url) => grids[url] ?? null;
  const middle = { x: W / 2, y: H / 2 };
  assert.equal(coarseUnder([item], gridOf, camera, middle, W, H), null);
  const corner = projectPoint(camera, transformPoint(value, [-0.95, -0.95, 0.95]), W, H);
  assert.equal(coarseUnder([item], gridOf, camera, corner, W, H), "model");
  const loading = boxGuide("loading", unit, value, null);
  assert.equal(coarseUnder([loading], gridOf, camera, middle, W, H), "loading");
  // Of two, the shallower solid hit: a hollow box in front of a full one behind it.
  const fullGrid = createCoarseGrid(unit);
  fullGrid.cells.fill(1);
  grids["file3d:back"] = fullGrid;
  const back = boxGuide("back", unit, placed([0, 0, -12], 2), "file3d:back");
  assert.equal(coarseUnder([item, back], gridOf, camera, middle, W, H), "back", "through the empty middle to the one behind");
  assert.equal(coarseUnder([item, back], gridOf, camera, corner, W, H), "model");
});

// A stand-in clock: now() is the time spent; reading a vertex costs `cost` ms of it (the work of building a grid).
function workClock(cost) {
  let time = 0;
  return { now: () => time, spend: () => (time += cost), advance: (ms) => (time += ms) };
}

// A mesh item of `count` small triangles spread over `unit` (a position attribute read through getX/getY/getZ, which
// spends the clock's time), its root and mesh in place.
function meshItem(count, clock = null, extra = {}) {
  const values = [];
  for (let k = 0; k < count; k += 1) {
    const x = ((k * 37) % 101) / 101 * 1.8 - 0.9;
    const y = ((k * 53) % 89) / 89 * 1.8 - 0.9;
    const z = ((k * 71) % 97) / 97 * 1.8 - 0.9;
    values.push(x, y, z, x + 0.01, y, z, x, y + 0.01, z);
  }
  const read = (offset) => (i) => {
    clock?.spend();
    return values[i * 3 + offset];
  };
  const position = { count: values.length / 3, getX: read(0), getY: read(1), getZ: read(2) };
  const mesh = { isMesh: true, geometry: { attributes: { position }, index: null }, matrixWorld: { elements: [...IDENTITY] } };
  const root = { matrixWorld: { elements: [...IDENTITY] }, updateMatrixWorld() {}, traverse: (visit) => [root, mesh].forEach(visit) };
  return { kind: "mesh", object: root, box: unit, mesh, ...extra };
}

test("a grid built in steps is the grid built at once, and each step stops soon after its time is up", () => {
  const whole = itemCoarseGrid(meshItem(20000));
  const clock = workClock(0.002);
  const builder = coarseGridBuilder(meshItem(20000, clock));
  let steps = 0;
  let longest = 0;
  for (;;) {
    const start = clock.now();
    const end = start + COARSE_GRID_SLICE_MS;
    const done = builder.step(() => clock.now() >= end);
    longest = Math.max(longest, clock.now() - start);
    steps += 1;
    if (done) break;
  }
  assert.ok(steps > 10, `it took ${steps} steps`);
  // A step looks at the clock after about 512 points (here 0.002 ms a vertex read, 3 reads a point): ~3 ms late at most.
  assert.ok(longest <= COARSE_GRID_SLICE_MS + 3.5, `the longest step took ${longest} ms`);
  assert.deepEqual(builder.grid.cells, whole.cells);
  assert.ok(whole.cells.some(Boolean));
});

test("a mesh is taken in the pose it has when its building is asked for, not as it moves while it is built", () => {
  const item = meshItem(2000);
  const still = itemCoarseGrid(meshItem(2000));
  const builder = coarseGridBuilder(item);
  // An animation moves the mesh after the building was asked for.
  item.mesh.matrixWorld.elements[12] = 0.5;
  builder.step();
  assert.deepEqual(builder.grid.cells, still.cells);
});

// Stand-ins for requestIdleCallback: run() runs the asked slices.
function idle() {
  let queue = [];
  return {
    schedule: (run) => queue.push(run),
    run() {
      const now = queue;
      queue = [];
      now.forEach((run) => run());
      return now.length;
    },
    get pending() {
      return queue.length;
    },
  };
}

test("the grids are built in idle slices of at most the slice's time, in order, and asking for one never builds it", () => {
  const clock = workClock(0.002);
  const slices = idle();
  const ready = [];
  const builds = createCoarseGridBuilds({ schedule: slices.schedule, now: clock.now, onReady: () => ready.push(clock.now()) });
  const big = { ...meshItem(30000, clock), state: "loaded" };
  const small = { ...meshItem(10, clock), state: "loaded" };
  builds.want("big", big);
  builds.want("small", small);
  builds.want("big", big);
  assert.equal(slices.pending, 1, "one slice asked for");
  assert.equal(clock.now(), 0, "nothing is built when it is asked for");
  // Asking for the grid before it is done returns nothing and does no work.
  for (let i = 0; i < 100; i += 1) assert.equal(builds.get("big"), null);
  assert.equal(clock.now(), 0);
  let count = 0;
  let longest = 0;
  while (slices.pending) {
    const start = clock.now();
    slices.run();
    longest = Math.max(longest, clock.now() - start);
    count += 1;
    // Between slices the page draws its frames.
    clock.advance(16);
  }
  assert.ok(count > 10, `${count} slices`);
  assert.ok(longest <= COARSE_GRID_SLICE_MS + 3.5, `the longest slice took ${longest} ms`);
  assert.equal(ready.length, 2);
  assert.deepEqual(builds.get("big").cells, itemCoarseGrid(meshItem(30000)).cells);
  assert.deepEqual(builds.get("small").cells, itemCoarseGrid(meshItem(10)).cells);
  // Asked for again, or for another item of the same key (the next frame of a batch): kept, not built again.
  builds.want("big", big);
  builds.want("big", { ...meshItem(5), state: "loaded" });
  assert.equal(slices.pending, 0);
});

test("an item let go while it waits is dropped, one without a box has no grid, and close() stops the slices", () => {
  const slices = idle();
  const builds = createCoarseGridBuilds({ schedule: slices.schedule, now: () => 0 });
  const gone = { ...meshItem(100), state: "loaded" };
  const boxless = { ...meshItem(100), box: null, state: "loaded" };
  builds.want("gone", gone);
  builds.want("boxless", boxless);
  gone.state = "queued";
  slices.run();
  assert.equal(builds.get("gone"), null);
  assert.equal(builds.get("boxless"), null);
  // The key let go may be asked for again, from another item.
  builds.want("gone", { ...meshItem(100), state: "loaded" });
  slices.run();
  assert.ok(builds.get("gone"));
  const later = { ...meshItem(100), state: "loaded" };
  builds.want("later", later);
  builds.close();
  slices.run();
  assert.equal(builds.get("later"), null);
  assert.equal(slices.pending, 0);
});

test("the frames of a batch share one grid key; another Sticker, kind, file or batch gets its own", () => {
  const batch = { id: "port", kind: "mesh", urls: ["/f0.glb", "/f1.glb", "/f2.glb"] };
  assert.equal(coarseGridKey({ ...batch, url: "/f0.glb" }), coarseGridKey({ ...batch, url: "/f2.glb" }));
  assert.notEqual(coarseGridKey(batch), coarseGridKey({ ...batch, id: "other" }));
  assert.notEqual(coarseGridKey(batch), coarseGridKey({ ...batch, kind: "splat" }));
  assert.notEqual(coarseGridKey(batch), coarseGridKey({ ...batch, urls: ["/g0.glb", "/f1.glb", "/f2.glb"] }));
  const file = { id: "model", kind: "mesh", url: "file3d:1:model", urls: ["file3d:1:model"], src: "/view/a.glb" };
  assert.notEqual(coarseGridKey(file), coarseGridKey({ ...file, src: "/view/b.glb" }));
  assert.notEqual(coarseGridKey(file), coarseGridKey({ ...file, url: "file3d:2:model", urls: ["file3d:2:model"] }));
});

test("a SPLAT with packed splats is built a part at a time, the same as through forEachSplat", () => {
  const centers = Array.from({ length: 5000 }, (_, i) => ({ x: (i % 50) / 50, y: ((i * 7) % 50) / 50, z: ((i * 13) % 50) / 50 }));
  const box = { min: [0, 0, 0], max: [1, 1, 1] };
  const all = itemCoarseGrid({ kind: "splat", box, object: { forEachSplat: (callback) => centers.forEach((center, i) => callback(i, center)) } });
  let reads = 0;
  const packed = { numSplats: centers.length, getSplat: (i) => (reads += 1, { center: centers[i] }) };
  const builder = coarseGridBuilder({ kind: "splat", box, object: { packedSplats: packed, forEachSplat() { throw new Error("not this way"); } } });
  let calls = 0;
  builder.step(() => (calls += 1) >= 1);
  assert.ok(reads < centers.length, "the first step stopped part way");
  builder.step();
  assert.deepEqual(builder.grid.cells, all.cells);
});

// --- The stage: the hover and the press agree, and neither reads the GPU.

const MODEL_VALUE = placed([0, 0, -6]);
const CORNERS = [[-0.95, -0.95, 0.95], [0.95, 0.95, 0.95]].map((p) => projectPoint(camera, transformPoint(MODEL_VALUE, p), W, H));

function stageSetup({ grid = true } = {}) {
  const session = createStudioSession({
    state: loadSceneState({
      version: 2,
      camera: { projection: "perspective", position: { value: [0, 30, 30] }, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } } },
      stickers: [{ id: "model", placement: "world", source: { kind: "file", filename: "model.glb", subfolder: "3d", storage: "input" }, position: { value: MODEL_VALUE.position } }],
    }),
  });
  const sceneBox = (url) => (url.startsWith("file3d:") ? unit : null);
  const editorFile = () => ({ kind: "mesh", unlit: true, url: "/view/model.glb", generation: 1 });
  const counts = { gpu: 0 };
  const hollow = hollowGrid();
  const editorView = {
    sceneBox,
    sceneGrid: (url) => (grid && url.startsWith("file3d:") ? hollow : null),
    pickSticker: () => {
      counts.gpu += 1;
      return "model";
    },
    pick: () => {
      counts.gpu += 1;
      return null;
    },
  };
  let cached = null;
  const content = () => {
    if (!cached || cached.state !== session.state) cached = { state: session.state, value: stageContent(session.state, 0, { media: () => null, editorFile, sceneBox }) };
    return cached.value;
  };
  const objects = createStageObjects({
    editorView,
    camera: () => camera,
    size: () => ({ width: W, height: H }),
    state: () => session.state,
    content,
    playhead: () => 0,
    selection: () => session.selection.row,
    select: (row) => session.selectObject(row),
    edits: { live: (apply) => session.gesture(apply), commit: () => session.commitGesture(), cancel: () => session.cancelGesture() },
  });
  // The guide's look: whether the hover lit it.
  const lit = () => objects.overlay().guides.some((guide) => guide.look === "hover");
  return { session, objects, counts, lit };
}

const MIDDLE = { x: W / 2, y: H / 2 };
const OUTSIDE = { x: 20, y: 20 };

for (const [name, grid, want] of [
  // [hover lights it, press selects] at the empty middle of the box, on a solid corner, and outside the box.
  ["with its grid", true, { middle: false, solid: true, outside: false }],
  ["before its grid is built (by its box)", false, { middle: true, solid: true, outside: false }],
]) {
  test(`stage, a 3D file ${name}: the hover and the press agree, and neither reads the GPU`, () => {
    for (const [where, point] of Object.entries({ middle: MIDDLE, solid: CORNERS[0], outside: OUTSIDE })) {
      const setup = stageSetup({ grid });
      const { cursor } = setup.objects.hover(point);
      assert.equal(setup.lit(), want[where], `${where}: hover lit`);
      assert.equal(cursor !== null, want[where], `${where}: the cursor`);
      setup.objects.leave();
      const drag = setup.objects.press(point);
      assert.equal(setup.session.selection.row === "model", want[where], `${where}: press selects`);
      assert.equal(drag === null, !want[where], `${where}: a press on nothing touches nothing`);
      assert.equal(setup.counts.gpu, 0, `${where}: no GPU read`);
    }
  });
}

test("on a lens Camera's picture the hit ray goes back through the lens to the point it maps", async () => {
  const { lensProjectPoint, withLensImage } = await import("../web_src/pano_lens.js");
  const view = stageCamera({ position: [0, 0, 0], yaw_deg: 20, pitch_deg: 5, roll_deg: 0, target: [0, 0, -5] }, 800, 400, 50);
  const lens = withLensImage(view, { curve: 0.5, focalPx: 300, centerX: 400, centerY: 200 });
  const point = [2, -1, -1];
  const at = lensProjectPoint(lens, point);
  const ray = cameraRay(lens, at, 800, 400);
  const along = point.map((value, axis) => ray.origin[axis] + ray.direction[axis] * at.z);
  along.forEach((value, axis) => assert.ok(Math.abs(value - point[axis]) < 1e-9));
});
