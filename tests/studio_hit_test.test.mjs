// A temporary dev comparison (docs/space-and-view.md "比べるための仮の設定"): the modes of finding the World object
// under the pointer (web_src/studio/hit_test.js), the coarse grid they march (web_src/pano_coarse_grid.js), the square
// GPU pick's choice (web_src/pano_pick.js nearestSquareHit), and that the stage's hover and press agree in every mode
// (web_src/studio/stage_objects.js objectUnder). The three.js view is a stand-in.
import assert from "node:assert/strict";
import test from "node:test";

import { COARSE_GRID_CELLS, createCoarseGrid, itemCoarseGrid, markPoint, markTriangle } from "../web_src/pano_coarse_grid.js";
import { nearestSquareHit, packPick24, pickSquareWindow } from "../web_src/pano_pick.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { boxCorners, projectPoint, transformPoint } from "../web_src/pano_space.js";
import {
  BOX_SCREEN_SHARE,
  HIT_TEST_SETTING,
  boxFallsBack,
  boxUnder,
  cameraRay,
  coarseUnder,
  createHoverPicker,
  hitTestMode,
  marchCoarseGrid,
  viewInsideBox,
} from "../web_src/studio/hit_test.js";
import { createStudioSession } from "../web_src/studio/session.js";
import { stageContent } from "../web_src/studio/stage_content.js";
import { createStageObjects } from "../web_src/studio/stage_objects.js";
import { stageCamera } from "../web_src/studio/stage_view.js";

const W = 1000;
const H = 500;
const camera = stageCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -5] }, W, H, 50);
const unit = { min: [-1, -1, -1], max: [1, 1, 1] };
const placed = (position, scale = 1) => ({ position, scale, yaw_deg: 0, pitch_deg: 0, roll_deg: 0 });

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

test("the setting names four modes, today's by default; an unknown value is today's", () => {
  assert.deepEqual(HIT_TEST_SETTING.options, ["current", "box", "pixels", "coarse"]);
  assert.equal(HIT_TEST_SETTING.defaultValue, "current");
  assert.equal(hitTestMode("coarse"), "coarse");
  assert.equal(hitTestMode(undefined), "current");
  assert.equal(hitTestMode("nope"), "current");
});

test("box: a small box ahead is hit inside its screen rectangle, even where nothing of it is", () => {
  const item = boxGuide("a", unit, placed([0, 0, -10]));
  assert.equal(boxFallsBack(item, camera, W, H), false);
  assert.deepEqual(boxUnder([item], camera, { x: W / 2, y: H / 2 }, W, H), { id: "a", fallback: false });
  assert.deepEqual(boxUnder([item], camera, { x: 10, y: 10 }, W, H), { id: null, fallback: false });
});

test("box: a box the view stands in, one with a corner behind the view, and one covering most of the stage fall back", () => {
  const around = boxGuide("in", unit, placed([0, 0, 0], 3));
  assert.equal(viewInsideBox(around, camera), true);
  assert.equal(boxFallsBack(around, camera, W, H), true);
  const behind = boxGuide("behind", unit, placed([0, 0, -1.5]));
  assert.equal(viewInsideBox(behind, camera), false);
  assert.equal(boxFallsBack(behind, camera, W, H), true, "its near corners are behind the view");
  // Just ahead of the view and wide: its rectangle covers the stage, though the view is outside it.
  const wide = boxGuide("wide", unit, placed([0, 0, -2.2]));
  const projected = wide.corners.map((p) => projectPoint(camera, p, W, H));
  assert.ok(projected.every(Boolean));
  assert.equal(boxFallsBack(wide, camera, W, H), true);
  // Farther off, the same box covers less than BOX_SCREEN_SHARE.
  const far = boxGuide("far", unit, placed([0, 0, -6]));
  assert.equal(boxFallsBack(far, camera, W, H), false);
  assert.ok(BOX_SCREEN_SHARE > 0 && BOX_SCREEN_SHARE < 1);
  // A plane never falls back.
  assert.equal(boxFallsBack({ ...far, kind: "plane" }, camera, W, H), false);
  // The box that falls back is not hit by the box test; the miss is asked of the pixels.
  assert.deepEqual(boxUnder([around, far], camera, { x: 10, y: 10 }, W, H), { id: null, fallback: true });
  assert.deepEqual(boxUnder([around, far], camera, { x: W / 2, y: H / 2 }, W, H), { id: "far", fallback: true });
});

test("the camera ray's point at t lies at depth t on the screen point it was made for", () => {
  const point = { x: 730, y: 120 };
  const ray = cameraRay(camera, point, W, H);
  const p = ray.origin.map((value, axis) => value + ray.direction[axis] * 7);
  const projected = projectPoint(camera, p, W, H);
  assert.ok(Math.abs(projected.x - point.x) < 1e-9 && Math.abs(projected.y - point.y) < 1e-9);
  assert.ok(Math.abs(projected.z - 7) < 1e-9);
});

test("coarse: a ray is stopped at the first solid cell it enters, passes empty ones, and starts in a solid one at once", () => {
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

test("coarse: a grid marks the cells a triangle passes through, not only its corners", () => {
  const grid = createCoarseGrid({ min: [0, 0, 0], max: [8, 8, 8] }, 8);
  markTriangle(grid, [0.5, 0.5, 0.5], [7.5, 0.5, 0.5], [0.5, 7.5, 0.5]);
  const solid = (x, y, z) => grid.cells[x + 8 * (y + 8 * z)] === 1;
  assert.equal(solid(3, 0, 0), true, "along its edge");
  assert.equal(solid(2, 2, 0), true, "inside it");
  assert.equal(solid(6, 6, 0), false, "beyond its long edge");
  assert.equal(solid(2, 2, 1), false, "off its plane");
});

test("coarse: an item's grid from a mesh's triangles (in their place under the root) and from a SPLAT's centers (turned from 3DGS)", () => {
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

test("coarse: the empty middle of a box is not hit, its solid corner is, and a box without a grid is hit by its rectangle", () => {
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

test("pixels: the square pick takes the drawn pixel nearest the pointer, on a float and an RGBA8 target", () => {
  const side = 5;
  const float = new Float32Array(side * side * 4);
  // Id 3 at the corner (0, 0), id 7 one pixel right of the center (row 2, col 3).
  float[0] = 3;
  float[1] = 9;
  float[(2 * side + 3) * 4] = 7;
  float[(2 * side + 3) * 4 + 1] = 4;
  assert.deepEqual(nearestSquareHit(float, side, true), { id: 7, depth: 4 });
  const bytes = new Uint8Array(side * side * 4);
  bytes.set(packPick24(300), (4 * side + 4) * 4);
  assert.deepEqual(nearestSquareHit(bytes, side, false), { id: 300, depth: null });
  assert.equal(nearestSquareHit(new Float32Array(side * side * 4), side, true), null);
  assert.deepEqual(pickSquareWindow(100, 50, 800, 600, 2), { fullWidth: 800, fullHeight: 600, x: 97.5, y: 47.5, width: 5, height: 5 });
});

// A stand-in for requestAnimationFrame: run() runs the frame's callbacks.
function frames() {
  let queue = [];
  return {
    requestFrame: (callback) => queue.push(callback),
    run() {
      const now = queue;
      queue = [];
      now.forEach((callback) => callback());
      return now.length;
    },
    get pending() {
      return queue.length;
    },
  };
}
const settle = () => new Promise((resolve) => setTimeout(resolve, 0));

test("pixels: the hover's pick runs at most once a frame and one at a time, for the newest pointer, and is not waited for", async () => {
  const clock = frames();
  const results = [];
  const picker = createHoverPicker({ requestFrame: clock.requestFrame, onResult: (changed) => results.push(changed) });
  const asked = [];
  const pick = (id) => () => {
    asked.push(id);
    return Promise.resolve(id);
  };
  // Three moves in one frame: nothing is known yet, and one frame is asked for.
  assert.equal(picker.request("a", pick("A")), null);
  assert.equal(picker.request("b", pick("B")), null);
  assert.equal(picker.request("c", pick("C")), null);
  assert.equal(clock.pending, 1);
  clock.run();
  assert.deepEqual(asked, ["C"], "only the newest pointer is picked");
  // While it runs, a new move asks for no frame.
  assert.equal(picker.request("d", pick("D")), null, "the hover goes on with what it knows: the pick is not waited for");
  assert.equal(clock.pending, 0);
  await settle();
  assert.deepEqual(results, [true]);
  assert.equal(picker.request("c", pick("C")), "C", "the id found for that pointer");
  // The ended pick asked for the next frame for "d" — but "c" came back meanwhile and is known: nothing more runs.
  clock.run();
  assert.deepEqual(asked, ["C"]);
  // A new pointer: the last id shows until its pick ends.
  assert.equal(picker.request("e", pick(null)), "C");
  clock.run();
  await settle();
  assert.equal(picker.request("e", pick(null)), null);
  assert.deepEqual(results, [true, true]);
  // A pick that ends after clear() (the pointer left) is dropped.
  picker.request("f", pick("F"));
  clock.run();
  picker.clear();
  await settle();
  assert.deepEqual(results, [true, true]);
  assert.equal(picker.request("f", pick("F")), null);
});

// --- The stage: hover and press agree in every mode.

const MODEL_VALUE = placed([0, 0, -6]);
// What the stand-in GPU draws of the model: its two solid corners, 30 px around each.
const DRAWN = [[-0.95, -0.95, 0.95], [0.95, 0.95, 0.95]].map((p) => projectPoint(camera, transformPoint(MODEL_VALUE, p), W, H));
const drawnAt = (x, y, radius = 0) => (DRAWN.some((p) => Math.hypot(p.x - x, p.y - y) <= 30 + radius) ? "model" : null);

function stageSetup(mode) {
  const session = createStudioSession({
    state: loadSceneState({
      version: 2,
      camera: { projection: "perspective", position: { value: [0, 30, 30] }, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } } },
      stickers: [{ id: "model", placement: "world", source: { kind: "file", filename: "model.glb", subfolder: "3d", storage: "input" }, position: { value: MODEL_VALUE.position } }],
    }),
  });
  const sceneBox = (url) => (url.startsWith("file3d:") ? unit : null);
  const editorFile = () => ({ kind: "mesh", unlit: true, url: "/view/model.glb", generation: 1 });
  const clock = frames();
  const counts = { sync: 0, async: 0, grid: 0 };
  const editorView = {
    sceneBox,
    sceneGrid: (url) => {
      counts.grid += 1;
      return url.startsWith("file3d:") ? hollowGrid() : null;
    },
    pickSticker: (view, x, y) => {
      counts.sync += 1;
      return drawnAt(x, y);
    },
    pickStickerNear: (view, x, y, width, height, { radius = 0, async = false } = {}) => {
      if (async) {
        counts.async += 1;
        return Promise.resolve(drawnAt(x, y, radius));
      }
      counts.sync += 1;
      return drawnAt(x, y, radius);
    },
  };
  let cached = null;
  const content = () => {
    if (!cached || cached.state !== session.state) cached = { state: session.state, value: stageContent(session.state, 0, { media: () => null, editorFile, sceneBox }) };
    return cached.value;
  };
  let hoverAgain = 0;
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
    hitMode: () => mode,
    onHover: () => (hoverAgain += 1),
    requestFrame: clock.requestFrame,
  });
  // The guide's look: whether the hover lit it.
  const lit = () => objects.overlay().guides.some((guide) => guide.look === "hover");
  return { session, objects, clock, counts, lit, hoverAgain: () => hoverAgain };
}

// The hover at `point` once its pick (if any) has ended: whether the guide is lit and the cursor shows an object.
async function hoverSettled(setup, point) {
  setup.objects.hover(point);
  setup.clock.run();
  await settle();
  const { cursor } = setup.objects.hover(point);
  return { lit: setup.lit(), cursor };
}

const MIDDLE = { x: W / 2, y: H / 2 };
const SOLID = DRAWN[0];
const NEAR_EDGE = { x: DRAWN[0].x + 32, y: DRAWN[0].y };
const OUTSIDE = { x: 20, y: 20 };

for (const [mode, want] of Object.entries({
  // Where the hover lights the guide / where a press selects, at the empty middle of the box, on what is drawn, a few px
  // off what is drawn, and outside the box.
  current: { middle: [true, false], solid: [true, true], edge: [true, false], outside: [false, false] },
  box: { middle: [true, true], solid: [true, true], edge: [true, true], outside: [false, false] },
  pixels: { middle: [false, false], solid: [true, true], edge: [true, true], outside: [false, false] },
  coarse: { middle: [false, false], solid: [true, true], edge: null, outside: [false, false] },
})) {
  test(`stage, "${mode}": the hover and the press ${mode === "current" ? "disagree in the empty middle of the box (today's)" : "agree"}`, async () => {
    const points = { middle: MIDDLE, solid: SOLID, edge: NEAR_EDGE, outside: OUTSIDE };
    for (const [name, point] of Object.entries(points)) {
      if (!want[name]) continue;
      const setup = stageSetup(mode);
      const hovered = await hoverSettled(setup, point);
      assert.equal(hovered.lit, want[name][0], `${name}: hover lit`);
      assert.equal(hovered.cursor !== null, want[name][0], `${name}: the cursor`);
      setup.objects.leave();
      setup.objects.press(point);
      assert.equal(setup.session.selection.row === "model", want[name][1], `${name}: press selects`);
      if (mode !== "current") assert.equal(want[name][0], want[name][1], `${name}: hover and press agree`);
    }
  });
}

test("stage: only the pixels mode reads the GPU on a hover, never synchronously, and asks the stage to hover again", async () => {
  for (const mode of ["current", "box", "coarse"]) {
    const setup = stageSetup(mode);
    await hoverSettled(setup, SOLID);
    assert.deepEqual([setup.counts.sync, setup.counts.async], [0, 0], `${mode}: no GPU read on a hover`);
  }
  const setup = stageSetup("pixels");
  setup.objects.hover(SOLID);
  assert.equal(setup.lit(), false, "not lit before the pick ends");
  setup.objects.hover({ x: SOLID.x + 1, y: SOLID.y });
  setup.clock.run();
  await settle();
  assert.deepEqual([setup.counts.sync, setup.counts.async], [0, 1], "one pick for two moves in a frame");
  assert.equal(setup.hoverAgain(), 1);
  setup.objects.hover({ x: SOLID.x + 1, y: SOLID.y });
  assert.equal(setup.lit(), true);
});

test("stage, box: a box the view stands in falls back to the pixels, so a click on nothing inside it lets go", async () => {
  const setup = stageSetup("box");
  const inside = stageCamera({ position: [0, 0, -6], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, target: [0, 0, -11] }, W, H, 50);
  // The view stands in the model's box: the stand-in GPU draws nothing there.
  setup.objects.press(MIDDLE);
  assert.equal(setup.session.selection.row, "model", "from outside, the box's middle selects");
  setup.session.selectObject(null);
  const near = createStageObjects({
    editorView: { sceneBox: () => unit, pickSticker: () => null, pickStickerNear: () => Promise.resolve(null) },
    camera: () => inside,
    size: () => ({ width: W, height: H }),
    state: () => setup.session.state,
    content: () => stageContent(setup.session.state, 0, { media: () => null, editorFile: () => ({ kind: "mesh", unlit: true, url: "/view/model.glb", generation: 1 }), sceneBox: () => unit }),
    playhead: () => 0,
    selection: () => setup.session.selection.row,
    select: (row) => setup.session.selectObject(row),
    edits: { live() {}, commit() {}, cancel() {} },
    hitMode: () => "box",
    requestFrame: setup.clock.requestFrame,
  });
  assert.equal(near.press(MIDDLE), null, "from inside, a press on nothing touches nothing (the stage looks around and lets go)");
  assert.equal(setup.session.selection.row, null);
});
