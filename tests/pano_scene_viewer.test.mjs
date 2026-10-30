import assert from "node:assert/strict";
import test from "node:test";

import { sceneViewer, sceneViewerWindowClosed, sceneViewerWindowOpened } from "../web_src/pano_node_bridge.js";
import { createSceneViewer, createSceneViewerHost, sceneViewerRecord } from "../web_src/pano_scene_viewer.js";
import { DEFAULT_VIEW_HFOV } from "../web_src/pano_space.js";
import { VIEW_CONTROL_PRESETS } from "../web_src/pano_view_controls.js";

// docs/preview-node.md "`PANO_SCENE` を見る": the Preview's read-only viewer of a Scene.
const layer = (stickers = []) => ({
  state: { version: 2, id: "scene_a", stickers },
  ui: { pano_scene_files: [{ filename: "a.glb" }, { filename: "b.glb" }], pano_scene_meta: [{ kind: "mesh", unlit: true }] },
});
const sky = { id: "sticker_1", placement: "sky", source: { kind: "file", filename: "s.png" } };

function viewer({ ui = {}, record = sceneViewerRecord(), hit = null, surface = {}, editorFile = null, refreshFile } = {}) {
  const lists = { pano_upstream_layers: [layer([sky])], pano_timeline_fps: [24], pano_timeline_frames: [48], pano_upstream_bg_color: [[0, 0, 0]], pano_upstream_coverage: [360], ...ui };
  const picks = [];
  let changes = 0;
  globalThis.Image ??= class { };
  // bg_color draws on a small canvas.
  globalThis.document ??= { createElement: () => ({ getContext: () => ({ fillRect() {} }) }) };
  const made = createSceneViewer({
    record,
    uiList: (key) => lists[key] ?? [],
    mediaSource: (entry) => (entry ? `/view?filename=${entry.filename}` : ""),
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    surface: {
      pickSurface: (...args) => {
        picks.push(args);
        return hit;
      },
      contentRevision: () => 1,
      sceneBox: () => ({ min: [-1, -1, -3], max: [1, 1, -1] }),
      sceneItemError: () => null,
      ...surface,
    },
    size: () => ({ width: 400, height: 200 }),
    viewControls: () => VIEW_CONTROL_PRESETS.default,
    revisionOf: () => 1,
    editorFile,
    refreshFile,
    createVideo: () => ({ addEventListener() {}, removeEventListener() {}, pause() {}, load() {}, removeAttribute() {} }),
    createCanvas: () => ({ getContext: () => null }),
    releaseCanvas: () => {},
    onChange: () => { changes += 1; },
  });
  return { viewer: made, record, picks, changes: () => changes };
}

test("a Scene opens in 6DoF at the World origin looking at the ERP's front, at the editor's default FOV", () => {
  const record = sceneViewerRecord();
  assert.deepEqual(
    [record.view.spaceMode, record.view.viewPosition, record.view.viewYaw, record.view.viewPitch, record.view.viewFov, record.frame, record.playing],
    ["6dof", [0, 0, 0], 0, 0, DEFAULT_VIEW_HFOV, 0, false],
  );
});

test("the viewer draws every layer as the editor draws an upstream layer, and nothing to edit", () => {
  const { viewer: v } = viewer();
  const input = v.input();
  assert.deepEqual(input.space.upstreamItems.map((item) => [item.slot, item.request?.url]), [["scene_a:scene", "/view?filename=a.glb"]]);
  // Its Sky Stickers too.
  assert.deepEqual(input.layers.map((item) => item.id), ["upstream:scene_a:sticker_1"]);
  // No gizmo, no Camera lines, no own Stickers or `scene`.
  assert.equal(input.space.gizmo, null);
  assert.deepEqual(input.space.lines, []);
  assert.deepEqual(input.space.stickers, []);
  assert.equal(input.space.scene, null);
  // The grid shows, and Hide Grid hides it.
  assert.ok(input.space.grid);
  v.toggleGrid();
  assert.equal(v.input().space.grid, null);
  // The camera stands where the view is, sized to the content.
  assert.deepEqual(input.camera.position, [0, 0, 0]);
});

test("the playhead plays the Scene's frames, loops at the end, and stays put on an input without time", () => {
  const { viewer: v, record } = viewer();
  assert.deepEqual([v.frames(), v.hasTime()], [48, true]);
  v.togglePlay();
  assert.equal(record.playing, true);
  v.tick(1000);
  v.tick(2000);
  assert.equal(record.frame, 24);
  v.tick(3500);
  // 36 frames on from 24 is 60: past the end it goes round to 12.
  assert.equal(record.frame, 12);
  // Frames of the display, shorter than a frame of the Scene, add up.
  for (let i = 1; i <= 60; i += 1) v.tick(3500 + i * (1000 / 60) + 0.1);
  assert.equal(record.frame, 36);
  v.seek(40);
  assert.equal(record.frame, 40);
  assert.deepEqual(v.transport().currentTimeLabel, "0:01");
  // A Scene of one frame has no time: the bar stays, disabled, and playing does nothing.
  const still = viewer({ ui: { pano_timeline_frames: [1] } });
  assert.equal(still.viewer.hasTime(), false);
  assert.equal(still.viewer.transport().ready, false);
  still.viewer.togglePlay();
  assert.equal(still.record.playing, false);
});

test("the view moves by the editor's 3D view controls: a left drag on empty space orbits about the surface, the wheel zooms to it", () => {
  const { viewer: v, record, picks } = viewer({ hit: [0, 0, -2] });
  assert.equal(v.pointerDown({ button: 0, x: 200, y: 100 }), true);
  v.pointerMove({ x: 240, y: 100 });
  v.pointerUp();
  assert.equal(picks.length, 1);
  assert.notEqual(record.view.viewYaw, 0);
  const before = [...record.view.viewPosition];
  v.wheel(1, { x: 200, y: 100 });
  assert.notDeepEqual(record.view.viewPosition, before);
  // Reset view goes back to the origin's front over a transition.
  v.resetView();
  v.tick(performance.now() + 10000);
  assert.deepEqual([record.view.viewPosition, record.view.viewYaw, record.view.viewPitch], [[0, 0, 0], 0, 0]);
});

test("with several Previews only the one last used draws; each keeps its own view and playhead", () => {
  const host = createSceneViewerHost();
  const a = {};
  const b = {};
  // Each draws its first picture; after that only the active one.
  assert.equal(host.shouldDraw(a), true);
  host.drew(a);
  assert.equal(host.shouldDraw(b), true);
  host.drew(b);
  host.touch(a);
  assert.deepEqual([host.shouldDraw(a), host.shouldDraw(b)], [true, false]);
  host.touch(b);
  assert.deepEqual([host.shouldDraw(a), host.shouldDraw(b)], [false, true]);
  // Studio's editor open: none draws.
  assert.equal(host.shouldDraw(b, { editorOpen: true }), false);
  // The views are apart: moving one leaves the other where it was.
  const first = viewer({ hit: [0, 0, -2] });
  const second = viewer();
  first.viewer.wheel(1, { x: 200, y: 100 });
  assert.notDeepEqual(first.record.view.viewPosition, [0, 0, 0]);
  assert.deepEqual(second.record.view.viewPosition, [0, 0, 0]);
});

// An inactive Preview's first picture is the one with its Scene's items (sceneViewerHost counts it drawn only then).
test("the viewer tells when every item of its picture has loaded or failed", () => {
  const boxes = new Map();
  const errors = new Map();
  const { viewer: v } = viewer({ surface: { sceneBox: (url) => boxes.get(url) ?? null, sceneItemError: (url) => errors.get(url) ?? null } });
  v.input();
  assert.equal(v.itemsLoaded(), false);
  boxes.set("/view?filename=a.glb", { min: [-1, -1, -1], max: [1, 1, 1] });
  assert.equal(v.itemsLoaded(), true);
  boxes.clear();
  errors.set("/view?filename=a.glb", "HTTP 500");
  assert.equal(v.itemsLoaded(), true);
});

// docs/threejs-spark-integration.md "空間の表示": an editor file gone from temp (404) is asked for again, as in the editor.
test("a 3D file Sticker of the Scene whose editor file is gone is asked for again; other failures are not", () => {
  const source = { kind: "file", filename: "m.glb" };
  const model = { id: "model", placement: "world", source };
  const asked = [];
  let error = "HTTP 404 Not Found";
  const { viewer: v } = viewer({
    ui: { pano_upstream_layers: [layer([model])] },
    editorFile: () => ({ kind: "mesh", unlit: true, url: "/m.glb", generation: 0 }),
    refreshFile: (given) => asked.push(given),
    // The Sticker's item fails; the Scene's own `scene` loads.
    surface: { sceneItemError: (key) => (key.includes("a.glb") ? null : error) },
  });
  v.input();
  assert.equal(asked.length, 1);
  assert.equal(asked[0].filename, "m.glb");
  error = "HTTP 500";
  v.input();
  assert.equal(asked.length, 1);
});

test("closing the window hands the node the window's last view and playhead, and the node draws on from them", () => {
  const node = {};
  const owner = sceneViewer(node);
  owner.record = sceneViewerRecord();
  let activated = 0;
  owner.surface = { activate: () => { activated += 1; }, detach() {} };
  sceneViewerWindowOpened(node, { close() {} });
  assert.equal(owner.windowOpen, true);
  // The window's viewer moves the node's record.
  const shown = viewer({ record: owner.record, hit: [0, 0, -2] });
  shown.viewer.wheel(1, { x: 200, y: 100 });
  shown.viewer.seek(30);
  sceneViewerWindowClosed(node);
  assert.deepEqual([owner.windowOpen, owner.window, activated], [false, null, 1]);
  assert.notDeepEqual(owner.record.view.viewPosition, [0, 0, 0]);
  assert.equal(owner.record.frame, 30);
});
