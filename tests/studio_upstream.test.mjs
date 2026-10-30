// The upstream Scene in the new editor (web_src/studio/upstream.js, docs/studio-ui.md "ノードの入力から来た物"): its
// layers from the node's result, drawn and shown read-only in the Timeline, the name of their group, the Auto length,
// waiting for a run, and the upstream background when the node has none of its own.
import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createStudioUpstream, upstreamBackground, upstreamNodeName } from "../web_src/studio/upstream.js";

class FakeImage {}
globalThis.Image ??= FakeImage;

const layerState = {
  version: 2,
  id: "scene_up",
  timeline: { fps: 24 },
  stickers: [{ id: "sticker_1", placement: "world", source: { kind: "file", filename: "a.png", subfolder: "", storage: "input" }, position: { value: [0, 0, -3] } }],
};

function setup({ list = [{ state: layerState, ui: {} }], linkType = "PANO_SCENE", state = loadSceneState({ version: 2 }), frames = [48] } = {}) {
  return createStudioUpstream({
    list: () => list,
    linkType: () => linkType,
    uiList: (key) => (key === "pano_upstream_frames" ? frames : []),
    state: () => state,
    nodeName: (key) => (key === "scene_up" ? "Studio Up" : null),
    mediaSource: (entry) => entry,
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    revisionOf: () => "r",
    playing: () => false,
  });
}

test("the upstream layers show read-only in the Timeline, named after the Studio they came from", () => {
  const upstream = setup();
  const [layer] = upstream.timelineLayers();
  assert.equal(layer.key, "scene_up");
  assert.equal(layer.name, "Studio Up");
  assert.equal(layer.readOnly, true);
  assert.equal(layer.editable, true);
  assert.deepEqual(layer.sceneState.stickers.map((sticker) => sticker.id), ["upstream:scene_up:sticker_1"]);
  assert.deepEqual(upstream.working().map((item) => item.key), ["scene_up"]);
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

test("the upstream background stands in only while the node's own background is not linked", () => {
  const ui = {
    pano_upstream_input_images: ["/up.png"],
    pano_upstream_coverage: [180],
    pano_upstream_bg_color: [[1, 0, 0]],
    pano_upstream_bg_clip: [{ clip: { start: 12, in: 0, duration: 24 }, fps: 12 }],
  };
  const uiList = (key) => ui[key] ?? [];
  const bg = upstreamBackground({ uiList, current: true, ownLinked: false, fps: 24 });
  assert.equal(bg.imageKey, "pano_upstream_input_images");
  assert.equal(bg.coverage, 180);
  assert.equal(bg.color, "#ff0000");
  // Its Studio's Clip range, in this editor's frames (seconds kept).
  assert.deepEqual(bg.place, { start: 24, in: 0, duration: 48 });
  assert.equal(upstreamBackground({ uiList, current: true, ownLinked: true, fps: 24 }), null, "the node's own background replaces it");
  assert.equal(upstreamBackground({ uiList, current: false, ownLinked: false, fps: 24 }), null);
  assert.equal(upstreamBackground({ uiList: () => [], current: true, ownLinked: false, fps: 24 }), null);
  assert.deepEqual(upstreamBackground({ uiList: (key) => (key === "pano_upstream_input_images" ? ["/up.png"] : []), current: true, ownLinked: false, fps: 24 }).place, { start: 0, in: 0, duration: null });
});
