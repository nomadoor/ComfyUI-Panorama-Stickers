import assert from "node:assert/strict";
import test from "node:test";

import { createUpstream } from "../web_src/editor/upstream.js";

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
}

const sky = (id, extra = {}) => ({ id, placement: "sky", source: { kind: "file", filename: `${id}.png` }, ...extra });

// An upstream module on a node whose result holds `output.ui`; set output.ui to rerun.
function setup() {
  const output = { ui: {} };
  const comfyMedia = {
    uiValue: (node, key) => (Object.hasOwn(output.ui, key) ? output.ui[key] : null),
    uiList: (node, key) => (Array.isArray(output.ui[key]) ? output.ui[key] : []),
  };
  const upstream = createUpstream({
    comfyMedia,
    editor: { frame: 0 },
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    mediaSource: (entry) => (entry ? `/view?filename=${entry.filename}` : ""),
    node: { id: 1, inputs: [{ name: "scene" }], graph: null },
    state: { timeline: { fps: 24 } },
    studio: true,
  });
  upstream.connect({
    getDesiredPaintTargetDescriptor: () => ({ kind: "ERP_GLOBAL", width: 64, height: 32 }),
    getMediaRevisionToken: (media) => media.src ?? "",
    playback: { advancing: false },
    requestDraw() {},
  });
  return { output, upstream };
}

const layer = (state, ui = {}) => ({ state: { version: 2, ...state }, ui });
const portUi = (name) => ({
  pano_sticker_input_images: [{ filename: `${name}.png` }],
  pano_sticker_input_videos: [{ filename: `${name}.mp4` }],
  pano_sticker_input_video_meta: [{ kind: "VIDEO", fps: 24, frames: 48, duration: 2 }],
});

test("a rerun lets the port VIDEO of the layers before go, and closing lets the rest go", () => {
  const made = browserStubs();
  try {
    const { output, upstream } = setup();
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("a"))] };
    upstream.upstreamViewInput();
    assert.equal(made.videos.length, 1);
    assert.equal(made.videos[0].src, "/view?filename=a.mp4");
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("b"))] };
    upstream.upstreamViewInput();
    assert.equal(made.videos[0].attributes.has("src"), false);
    assert.equal(made.videos[0].listeners.size, 0);
    assert.equal(made.videos[1].src, "/view?filename=b.mp4");
    upstream.disposeUpstream();
    assert.equal(made.videos[1].attributes.has("src"), false);
    // A result that goes stale (the input relinked) lets its media go as well.
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("p", { source: { kind: "port" } })] }, portUi("c"))] };
    upstream.upstreamViewInput();
    output.ui = {};
    assert.deepEqual(upstream.upstreamViewInput(), { sky: [], stickers: [], items: [] });
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
    upstream.upstreamViewInput();
    assert.deepEqual(made.images.sort(), ["/view?filename=a.png", "/view?filename=b.png"]);
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("a")] })] };
    upstream.upstreamViewInput();
    assert.equal(made.images.length, 2);
    output.ui = { pano_upstream_layers: [layer({ stickers: [sky("a"), sky("b")] })] };
    upstream.upstreamViewInput();
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
    assert.deepEqual(upstream.upstreamViewInput().items.map((item) => [item.slot, item.urls]), [
      ["0:scene", ["/view?filename=a.ply"]],
      ["1:scene", ["/view?filename=b.ply"]],
    ]);
    output.ui = { pano_upstream_layers: [layer({}, scene("b"))] };
    assert.deepEqual(upstream.upstreamViewInput().items.map((item) => [item.slot, item.urls]), [["0:scene", ["/view?filename=b.ply"]]]);
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
    assert.deepEqual(upstream.upstreamViewInput().sky, []);
    assert.deepEqual(upstream.upstreamViewInput().sky, []);
  } finally {
    restore();
  }
});

test("the stage notes a linked Scene that waits for a run, and the warning that bg_media is not used", () => {
  browserStubs();
  try {
    const { output, upstream } = setup();
    const node = { id: 1, inputs: [{ name: "scene" }], graph: { getNodeById: () => null }, getInputLink: () => ({ origin_id: 2, origin_slot: 0, type: "PANO_SCENE" }) };
    const linked = createUpstream({
      comfyMedia: { uiValue: (n, key) => output.ui[key] ?? null, uiList: (n, key) => output.ui[key] ?? [] },
      editor: { frame: 0 },
      mediaAssetSource: () => "",
      mediaSource: () => "",
      node,
      state: { timeline: { fps: 24 } },
      studio: true,
    });
    linked.connect({ getDesiredPaintTargetDescriptor: () => ({}), getMediaRevisionToken: () => "", playback: {}, requestDraw() {} });
    assert.equal(linked.upstreamNotice(), "Run the workflow to show the upstream scene.");
    assert.equal(linked.upstreamLinked(), true);
    output.ui = {
      pano_upstream_layers: [layer({})],
      pano_sticker_warnings: ["Output preset is auto", "bg_media is not used: the scene input has a background of its own."],
    };
    assert.equal(linked.upstreamNotice(), "bg_media is not used: the scene input has a background of its own.");
    // A link of no known type is upstream only by its result, and does not wait for one.
    output.ui = {};
    assert.equal(upstream.upstreamNotice(), "");
    assert.equal(upstream.upstreamLinked(), false);
    output.ui = { pano_upstream_layers: [layer({})] };
    assert.equal(upstream.upstreamLinked(), true);
  } finally {
    restore();
  }
});

test("the upstream background shows while the scene result is current, also right after bg_media is relinked", async () => {
  const { createMediaSession } = await import("../web_src/editor/media_session.js");
  const { setNodeOutputLookup } = await import("../web_src/pano_preview_video.js");
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.HTMLVideoElement = class {};
  const links = { scene: { origin_id: 2, origin_slot: 0, type: "PANO_SCENE" }, bg_media: { origin_id: 3, origin_slot: 0, type: "IMAGE" } };
  const inputs = [{ name: "bg_media" }, { name: "scene" }];
  const node = { id: 7, inputs, graph: {}, getInputLink: (slot) => links[inputs[slot].name] ?? null };
  const output = { ui: { pano_upstream_layers: [], pano_upstream_input_images: [{ filename: "up.png" }], pano_upstream_coverage: [180] } };
  setNodeOutputLookup((target) => (target === node ? output : null));
  try {
    const session = createMediaSession({
      comfyMedia: { uiList: (n, key) => output.ui[key] ?? [], uiValue: (n, key) => output.ui[key] ?? null },
      editor: {}, node, scheduler: { requestFrame: () => 0, cancelFrame() {} }, stageWrap: {}, state: { coverage: 360 },
      stateV2: true, studio: true, type: "stickers", uiState: { videoTransport: {} },
    });
    assert.equal(session.upstreamBackground().imageKey, "pano_upstream_input_images");
    assert.equal(session.backgroundCoverage(), 180);
    // The own bg_media relinked: the output is stale for it, but the upstream background still stands in.
    links.bg_media = { origin_id: 4, origin_slot: 0, type: "IMAGE" };
    assert.equal(session.upstreamBackground().imageKey, "pano_upstream_input_images");
    // The scene relinked: the upstream background is gone until the next run.
    links.scene = { origin_id: 5, origin_slot: 0, type: "PANO_SCENE" };
    assert.equal(session.upstreamBackground(), null);
    assert.equal(session.backgroundCoverage(), 360);
  } finally {
    setNodeOutputLookup(() => null);
    delete globalThis.ResizeObserver;
    delete globalThis.HTMLVideoElement;
  }
});

test("with the upstream background the auto length is the upstream Scene's, not the background VIDEO's", async () => {
  const { createTimeline } = await import("../web_src/editor/timeline.js");
  const { loadSceneState } = await import("../web_src/pano_scene_state.js");
  const uiState = { videoTransport: { ready: true, duration: 20 } };
  const timeline = createTimeline({ editor: {}, node: {}, readOnly: false, sceneV2: true, state: loadSceneState({ version: 2, timeline: { fps: 24 } }), stateV2: true, studio: true, timeline: {}, timelinePlayhead: {}, uiState, videoEl: null, videoTimelineFps: () => null });
  let upstream = { imageKey: "pano_upstream_input_images" };
  timeline.connect({ getPortMedia: () => null, isExternalSticker: () => false, upstreamBackground: () => upstream, upstreamSpanFrames: () => 240 });
  assert.equal(timeline.timelineSpanFrames(), 240);
  // The node's own background VIDEO widens it as before.
  upstream = null;
  assert.equal(timeline.timelineSpanFrames(), 480);
});

test("the bg_media warning shows while the scene result is current, also right after bg_media is relinked", async () => {
  const { setNodeOutputLookup } = await import("../web_src/pano_preview_video.js");
  const output = { ui: { pano_upstream_layers: [layer({})], pano_sticker_warnings: ["bg_media is not used: the scene input has a background of its own."] } };
  const links = { scene: { origin_id: 2, origin_slot: 0, type: "PANO_SCENE" }, bg_media: { origin_id: 3, origin_slot: 0, type: "IMAGE" } };
  const inputs = [{ name: "bg_media" }, { name: "scene" }];
  const node = { id: 8, inputs, graph: { getNodeById: () => null }, getInputLink: (slot) => links[inputs[slot].name] ?? null };
  setNodeOutputLookup((target) => (target === node ? output : null));
  try {
    const upstream = createUpstream({
      comfyMedia: { uiValue: (n, key) => output.ui[key] ?? null, uiList: (n, key) => output.ui[key] ?? [] },
      editor: { frame: 0 }, mediaAssetSource: () => "", mediaSource: () => "", node, state: { timeline: { fps: 24 } }, studio: true,
    });
    upstream.connect({ getDesiredPaintTargetDescriptor: () => ({}), getMediaRevisionToken: () => "", playback: {}, requestDraw() {} });
    assert.match(upstream.upstreamNotice(), /^bg_media is not used/);
    links.bg_media = { origin_id: 4, origin_slot: 0, type: "IMAGE" };
    assert.match(upstream.upstreamNotice(), /^bg_media is not used/);
  } finally {
    setNodeOutputLookup(() => null);
  }
});
