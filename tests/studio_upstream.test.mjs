// The upstream Scene in the new editor (web_src/studio/upstream.js, docs/studio-ui.md "ノードの入力から来た物"): its
// layers from the node's result, drawn and shown in the Timeline, the name of their group, their edits written back
// (docs/studio-ui.md "上流の物の編集"), the Auto length, waiting for a run, and the upstream background when the node
// has none of its own.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createStudioUpstream, upstreamNodeName } from "../web_src/studio/upstream.js";

class FakeImage {}
globalThis.Image ??= FakeImage;

const layerState = {
  version: 2,
  id: "scene_up",
  timeline: { fps: 24 },
  stickers: [{ id: "sticker_1", placement: "world", source: { kind: "file", filename: "a.png", subfolder: "", storage: "input" }, position: { value: [0, 0, -3] } }],
};

function setup({ list = [{ state: layerState, ui: {} }], linkType = "PANO_SCENE", state = loadSceneState({ version: 2 }), frames = [48], nodeName = (key) => (key === "scene_up" ? "Studio Up" : null) } = {}) {
  const box = { state };
  return createStudioUpstream({
    list: () => list,
    linkType: () => linkType,
    uiList: (key) => (key === "pano_upstream_frames" ? frames : []),
    state: () => box.state,
    setRecords: (records) => {
      box.state = { ...box.state, upstream: records };
    },
    nodeName,
    mediaSource: (entry) => entry,
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    revisionOf: () => "r",
    playing: () => false,
  });
}

test("the upstream layers show in the Timeline and the inspector, named after the Studio they came from", () => {
  const upstream = setup();
  const [layer] = upstream.timelineLayers();
  assert.equal(layer.key, "scene_up");
  assert.equal(layer.name, "Studio Up");
  assert.equal(layer.editable, true);
  assert.equal(Object.hasOwn(layer, "readOnly"), false);
  assert.deepEqual(layer.sceneState.stickers.map((sticker) => sticker.id), ["upstream:scene_up:sticker_1"]);
  assert.deepEqual(upstream.working().map((item) => [item.key, item.name]), [["scene_up", "Studio Up"]]);
  assert.equal(upstream.working()[0].sceneState, layer.sceneState, "both show the one working copy");
});

test("an edit of a working copy is written back as the state's records, and its Clip range counts in the Auto length", () => {
  const upstream = setup();
  const [layer] = upstream.working();
  const sticker = layer.sceneState.stickers[0];
  sticker.clip = { start: 40, in: 0, duration: 30 };
  assert.deepEqual(upstream.output().ends, [70], "an edit not written back yet counts already");
  assert.equal(upstream.edits.sync(), true);
  assert.deepEqual(upstream.output().ends, [70], "the record's Clip range counts once written");
  assert.equal(upstream.edits.sync(), false);
});

test("the upstream layers count in the Auto length, and the editor waits for a run while the result has none", () => {
  const upstream = setup();
  assert.deepEqual(upstream.output(), { frames: 48, ends: [] });
  assert.equal(upstream.pending(), false);
  const before = setup({ list: null });
  assert.equal(before.pending(), true);
  assert.deepEqual(before.timelineLayers(), []);
  assert.equal(before.output(), null);
  assert.equal(before.viewInput(0), null);
  assert.equal(setup({ list: null, linkType: "" }).pending(), false, "no Scene linked: nothing to wait for");
});

test("what the stage draws of the upstream layers at a frame", () => {
  const input = setup().viewInput(0);
  assert.deepEqual(Object.keys(input).sort(), ["items", "sky", "stickers"]);
  assert.deepEqual(input.sky, []);
});

test("the upstream Studio's name is the title of the Panorama Studio on the graph whose state has the layer's Scene id", () => {
  const nodes = [
    { comfyClass: "PanoramaStudio", title: "Studio A", widgets: [{ name: "state_json", value: JSON.stringify({ version: 2, id: "scene_a" }) }] },
    { comfyClass: "PanoramaStudio", title: "Broken", widgets: [{ name: "state_json", value: "{" }] },
    { comfyClass: "LoadImage", title: "Load", widgets: [] },
  ];
  assert.equal(upstreamNodeName(nodes, "scene_a"), "Studio A");
  assert.equal(upstreamNodeName(nodes, "scene_b"), null);
  assert.equal(upstreamNodeName(nodes, "#0"), null);
});


// The stage reads the working layers on each draw and pointer move: the Studios' names (each a parse of every
// Panorama Studio's state_json) are found once per result, and the list stays one object until the copies change.
test("the working layers keep their names and their list across reads, until a new result or a rebuild", () => {
  let lookups = 0;
  const box = { list: [{ state: layerState, ui: {} }] };
  const upstream = setup({ list: null, nodeName: () => { lookups += 1; return "Studio Up"; } });
  const counted = createStudioUpstream({
    list: () => box.list,
    linkType: () => "PANO_SCENE",
    uiList: () => [],
    state: () => loadSceneState({ version: 2 }),
    setRecords() {},
    nodeName: () => { lookups += 1; return "Studio Up"; },
    mediaSource: (entry) => entry,
    mediaAssetSource: () => "",
    revisionOf: () => "r",
    playing: () => false,
  });
  const first = counted.working();
  for (let index = 0; index < 50; index += 1) assert.equal(counted.working(), first);
  assert.equal(lookups, 1);
  assert.equal(first[0].name, "Studio Up");
  counted.edits.rebuild();
  const rebuilt = counted.working();
  assert.notEqual(rebuilt, first, "made again: a new list");
  assert.equal(lookups, 1, "the same result: its names are kept");
  box.list = [{ state: layerState, ui: {} }];
  counted.working();
  assert.equal(lookups, 2, "a new result: its names are found again");
  assert.deepEqual(upstream.working(), []);
});

// The upstream length is the result's pano_upstream_frames only (docs/studio-node.md: the node always gives it with an
// upstream); the node's own pano_timeline_frames is not read in its place.
test("without pano_upstream_frames the upstream counts no frames, whatever pano_timeline_frames says", () => {
  const upstream = createStudioUpstream({
    list: () => [{ state: layerState, ui: {} }],
    linkType: () => "PANO_SCENE",
    uiList: (key) => (key === "pano_timeline_frames" ? [90] : []),
    state: () => loadSceneState({ version: 2 }),
    setRecords: () => {},
    mediaSource: (entry) => entry,
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    revisionOf: () => "r",
    playing: () => false,
  });
  assert.equal(upstream.output().frames, 0);
});
