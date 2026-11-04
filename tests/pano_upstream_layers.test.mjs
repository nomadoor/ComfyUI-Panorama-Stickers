import assert from "node:assert/strict";
import test from "node:test";

import { loadSceneState } from "../web_src/pano_scene_state.js";
import { createUpstreamLayers } from "../web_src/pano_upstream_layers.js";

// The layers of an upstream Scene read from a node's result and what the views draw of them (pano_upstream_layers.js,
// docs/editor-interaction.md "上流の Scene"): how their media are let go and what they draw.

// The browser parts the module makes: images (counted by URL), and the port VIDEO and its still.
function browserStubs() {
  const made = { images: [], videos: [] };
  globalThis.Image = class {
    set src(value) {
      this._src = value;
      made.images.push(value);
    }
    get src() { return this._src; }
  };
  const element = (tag) => {
    if (tag === "canvas") return { width: 0, height: 0, getContext: () => null };
    const video = {
      readyState: 0,
      paused: true,
      attributes: new Set(),
      listeners: new Map(),
      addEventListener(type, listener) { this.listeners.set(type, listener); },
      removeEventListener(type) { this.listeners.delete(type); },
      pause() { this.paused = true; },
      load() {},
      removeAttribute(name) { this.attributes.delete(name); this._src = ""; },
      set src(value) { this._src = value; this.attributes.add("src"); },
      get src() { return this._src; },
    };
    made.videos.push(video);
    return video;
  };
  globalThis.document = { createElement: element };
  return made;
}

function restore() {
  delete globalThis.Image;
  delete globalThis.document;
  delete globalThis.HTMLVideoElement;
}

const sky = (id, extra = {}) => ({ id, placement: "sky", source: { kind: "file", filename: `${id}.png` }, ...extra });

// The layers of a node whose result holds `output.ui`; set output.ui to rerun. `state` holds the Timeline fps and the
// override records; viewInput() draws at `editor.frame`.
function setup(state = loadSceneState({ version: 2, timeline: { fps: 24 } }), editor = { frame: 0 }) {
  const output = { ui: {} };
  const layers = createUpstreamLayers({
    list: () => (Array.isArray(output.ui.pano_upstream_layers) ? output.ui.pano_upstream_layers : null),
    fps: () => state.timeline.fps,
    records: () => state.upstream,
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    mediaSource: (entry) => (entry ? `/view?filename=${entry.filename}` : ""),
    revisionOf: (media) => media.src ?? "",
    paintTarget: () => ({ kind: "ERP_GLOBAL", width: 64, height: 32 }),
    playing: () => false,
  });
  const upstream = { viewInput: () => layers.viewInput(editor.frame), dispose: () => layers.dispose() };
  return { output, upstream };
}

const layer = (state, ui = {}) => ({ state: { version: 2, ...state }, ui });
const portUi = (name) => ({
  pano_sticker_input_images: [{ filename: `${name}.png` }],
  pano_sticker_input_videos: [{ filename: `${name}.mp4` }],
  pano_sticker_input_video_meta: [{ kind: "VIDEO", fps: 24, frames: 48, duration: 2 }],
});
const drawnIds = (input) => [...input.sky, ...input.stickers].map((item) => item.id);

test("a rerun lets the port VIDEO of the layers before go, and closing lets the rest go", () => {
  const made = browserStubs();
  try {
    const { output, upstream } = setup();
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("a"))] };
    upstream.viewInput();
    assert.equal(made.videos.length, 1);
    assert.equal(made.videos[0].src, "/view?filename=a.mp4");
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("b"))] };
    upstream.viewInput();
    assert.equal(made.videos[0].attributes.has("src"), false);
    assert.equal(made.videos[0].listeners.size, 0);
    assert.equal(made.videos[1].src, "/view?filename=b.mp4");
    upstream.dispose();
    assert.equal(made.videos[1].attributes.has("src"), false);
    // A result that goes stale (the input relinked) lets its media go as well.
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("c"))] };
    upstream.viewInput();
    output.ui = {};
    assert.deepEqual(upstream.viewInput(), { sky: [], stickers: [], items: [] });
    assert.equal(made.videos[2].attributes.has("src"), false);
  } finally {
    restore();
  }
});

test("a rerun keeps the images its layers still show and drops the others", () => {
  const made = browserStubs();
  try {
    const { output, upstream } = setup();
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("a"), sky("b")] })] };
    upstream.viewInput();
    assert.deepEqual(made.images.sort(), ["/view?filename=a.png", "/view?filename=b.png"]);
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("a")] })] };
    upstream.viewInput();
    assert.equal(made.images.length, 2);
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("a"), sky("b")] })] };
    upstream.viewInput();
    assert.deepEqual(made.images.slice(2), ["/view?filename=b.png"]);
  } finally {
    restore();
  }
});

test("the 3D items follow the layers when a rerun drops one: a slot takes the next layer's files", () => {
  browserStubs();
  try {
    const { output, upstream } = setup();
    const scene = (name) => ({ pano_scene_files: [{ filename: `${name}.ply` }], pano_scene_meta: [{ kind: "splat" }] });
    output.ui = { pano_upstream_layers: [layer({}, scene("a")), layer({}, scene("b"))] };
    assert.deepEqual(upstream.viewInput().items.map((item) => [item.slot, item.urls]), [
      ["#0:scene", ["/view?filename=a.ply"]],
      ["#1:scene", ["/view?filename=b.ply"]],
    ]);
    output.ui = { pano_upstream_layers: [layer({}, scene("b"))] };
    assert.deepEqual(upstream.viewInput().items.map((item) => [item.slot, item.urls]), [["#0:scene", ["/view?filename=b.ply"]]]);
  } finally {
    restore();
  }
});

test("a painting with stroke groups but no strokes draws nothing instead of failing", () => {
  browserStubs();
  try {
    const { output, upstream } = setup();
    const raster = { id: "r", type: "raster_frozen", layerKind: "paint", z_index: 1, rasterDataUrl: "data:image/png;base64,AA", bbox: { u0: 0, v0: 0, u1: 0.1, v1: 0.1 } };
    output.ui = { pano_upstream_layers: [layer({ painting: { version: 1, groups: [{ id: "g", actionGroupId: "g", z_index: 0 }], raster_objects: [raster] } })] };
    // The raster's image has not loaded, so nothing shows yet; the group without strokes never does.
    assert.deepEqual(upstream.viewInput().sky, []);
    assert.deepEqual(upstream.viewInput().sky, []);
  } finally {
    restore();
  }
});

// ADR 0030: the editor draws the upstream layers with the node's own overrides applied, as the node does.
test("the upstream layers are drawn with the state's overrides, and a deleted element is not drawn", () => {
  browserStubs();
  try {
    const state = loadSceneState({
      version: 2,
      timeline: { fps: 24 },
      upstream: [{ layer: "scene_a", fps: 24, deleted: ["sticker_2"], stickers: [{ id: "sticker_3", placement: "sky", visible: false }] }],
    });
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2"), sky("sticker_3")] })] };
    assert.deepEqual(drawnIds(upstream.viewInput()), ["upstream:scene_a:sticker_1"]);
  } finally {
    restore();
  }
});

test("a layer at another fps is drawn at the editor's frame, and its port media keeps the layer's time", () => {
  const made = browserStubs();
  try {
    const editor = { frame: 36 };
    const { output, upstream } = setup(loadSceneState({ version: 2, timeline: { fps: 24 } }), editor);
    const frames = Array.from({ length: 30 }, (_, index) => ({ filename: `f${index}.png` }));
    // At 30 fps the port Sticker starts at 1 s; 1.5 s into the node's 24 fps Timeline is its frame 15, as the
    // node picks it (batch_index of 45 - 30 layer frames at 24 / 30).
    output.ui = {
      pano_upstream_layers: [layer(
        { id: "scene_a", timeline: { fps: 30 }, stickers: [sky("p", { source: { kind: "port" }, clip: { start: 30, in: 0 } })] },
        { pano_sticker_input_images: [{ filename: "first.png" }], pano_sticker_input_frames: frames, pano_sticker_input_video_meta: [{ kind: "IMAGE", fps: 24, frames: 30 }] },
      )],
    };
    const input = upstream.viewInput();
    assert.deepEqual(input.sky.map((item) => item.id), ["upstream:scene_a:p"]);
    assert.equal(made.images.find((src) => /f\d+\.png/.test(src)), "/view?filename=f12.png");
  } finally {
    restore();
  }
});
