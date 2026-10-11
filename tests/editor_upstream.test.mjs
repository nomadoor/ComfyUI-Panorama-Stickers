import assert from "node:assert/strict";
import test from "node:test";

import { createCommands } from "../web_src/editor/commands.js";
import { createCommit } from "../web_src/editor/commit.js";
import { createHistory, createEditorHistory } from "../web_src/editor/history.js";
import { createHitTest } from "../web_src/editor/hit_test.js";
import { createItems } from "../web_src/editor/items.js";
import { createSelection } from "../web_src/editor/selection.js";
import { createSidePanelEvents } from "../web_src/editor/side_panel_events.js";
import { createUpstream } from "../web_src/editor/upstream.js";
import { setStickerPose } from "../web_src/pano_editor_state.js";
import { loadSceneState, sceneStateText } from "../web_src/pano_scene_state.js";
import { readEditorSource } from "./editor_source.mjs";

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

// An upstream module on a node whose result holds `output.ui`; set output.ui to rerun. `state` is the editor's.
function setup(state = loadSceneState({ version: 2, timeline: { fps: 24 } }), editor = { frame: 0 }) {
  const output = { ui: {} };
  const comfyMedia = {
    uiValue: (node, key) => (Object.hasOwn(output.ui, key) ? output.ui[key] : null),
    uiList: (node, key) => (Array.isArray(output.ui[key]) ? output.ui[key] : []),
  };
  const upstream = createUpstream({
    comfyMedia,
    editor,
    mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    mediaSource: (entry) => (entry ? `/view?filename=${entry.filename}` : ""),
    node: { id: 1, inputs: [{ name: "scene" }], graph: null },
    state,
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
      ["#0:scene", ["/view?filename=a.ply"]],
      ["#1:scene", ["/view?filename=b.ply"]],
    ]);
    output.ui = { pano_upstream_layers: [layer({}, scene("b"))] };
    assert.deepEqual(upstream.upstreamViewInput().items.map((item) => [item.slot, item.urls]), [["#0:scene", ["/view?filename=b.ply"]]]);
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
      state: loadSceneState({ version: 2 }),
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
  const uiState = { videoTransport: { ready: true, duration: 20, frameCount: 480 } };
  const timeline = createTimeline({ editor: {}, node: {}, readOnly: false, sceneV2: true, state: loadSceneState({ version: 2, timeline: { fps: 24 } }), stateV2: true, studio: true, timeline: {}, timelinePlayhead: {}, uiState, videoEl: null, videoTimelineFps: () => null });
  let upstream = { imageKey: "pano_upstream_input_images" };
  timeline.connect({
    getPortMediaMeta: () => null, isExternalSticker: () => false, sceneFiles: () => null, stickerFiles: () => null, file3dEditorFile: () => null, upstreamBackground: () => upstream,
    upstreamLinked: () => true, upstreamOutput: () => ({ frames: 240, ends: [] }),
  });
  assert.equal(timeline.timelineSpanFrames(), 240);
  // The node's own background widens it as the node does.
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
      editor: { frame: 0 }, mediaAssetSource: () => "", mediaSource: () => "", node, state: loadSceneState({ version: 2 }), studio: true,
    });
    upstream.connect({ getDesiredPaintTargetDescriptor: () => ({}), getMediaRevisionToken: () => "", playback: {}, requestDraw() {} });
    assert.match(upstream.upstreamNotice(), /^bg_media is not used/);
    links.bg_media = { origin_id: 4, origin_slot: 0, type: "IMAGE" };
    assert.match(upstream.upstreamNotice(), /^bg_media is not used/);
  } finally {
    setNodeOutputLookup(() => null);
  }
});

const drawnIds = (input) => [...input.sky, ...input.stickers].map((item) => item.id);

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
    assert.deepEqual(drawnIds(upstream.upstreamViewInput()), ["upstream:scene_a:sticker_1"]);
  } finally {
    restore();
  }
});

test("the working copies are made again for a new result and after Undo restores the state, and never write the state", () => {
  browserStubs();
  try {
    // The editor's working state keeps its session fields (`active`) beside the loaded state.
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 }, stickers: [sky("sticker_1")] }), active: {} };
    const before = structuredClone(state);
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] })] };
    assert.deepEqual(drawnIds(upstream.upstreamViewInput()), ["upstream:scene_a:sticker_1", "upstream:scene_a:sticker_2"]);
    // A new result.
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_2")] })] };
    assert.deepEqual(drawnIds(upstream.upstreamViewInput()), ["upstream:scene_a:sticker_2"]);
    assert.deepEqual(state, before);

    // Undo restores a state that deleted sticker_2, as restoreHistory does.
    const restored = { ...loadSceneState({ ...before, upstream: [{ layer: "scene_a", fps: 24, deleted: ["sticker_2"] }] }), active: {} };
    const editor = { historyController: createEditorHistory(restored), frame: 0 };
    editor.historyController.commitActionGroup(JSON.stringify(state));
    const noop = () => {};
    const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
    history.connect({
      clearWorldSelection: noop, commitState: noop, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
      markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop },
      rebuildUpstreamWorking: upstream.rebuildUpstreamWorking, releaseHiddenSelection: noop, requestDraw: noop,
      stopTimelinePlayback: noop, storedEditorState: () => state, syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop,
      syncUndoRedoButtons: noop, updateSidePanel: noop,
    });
    history.restoreHistory(-1);
    assert.deepEqual(state.upstream, restored.upstream);
    assert.deepEqual(upstream.upstreamViewInput().sky, []);
    // The working copies never enter the state's Stickers.
    assert.deepEqual(state.stickers, before.stickers);
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
    const input = upstream.upstreamViewInput();
    assert.deepEqual(input.sky.map((item) => item.id), ["upstream:scene_a:p"]);
    assert.equal(made.images.find((src) => /f\d+\.png/.test(src)), "/view?filename=f12.png");
  } finally {
    restore();
  }
});

test("Undo on a v1 state (no Timeline, not Panorama Studio) restores, selects and commits without upstream layers", () => {
  browserStubs();
  try {
    const state = { version: 1, stickers: [{ id: "a" }], active: { selected_sticker_id: "a" } };
    const { upstream } = setup(state);
    const editor = { historyController: createEditorHistory({ ...state, stickers: [] }), frame: 0 };
    editor.historyController.commitActionGroup(JSON.stringify(state));
    let commits = 0;
    const noop = () => {};
    const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: false, studio: false, type: "stickers" });
    history.connect({
      clearWorldSelection: noop, commitState: () => { commits += 1; }, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
      markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop },
      rebuildUpstreamWorking: upstream.rebuildUpstreamWorking, releaseHiddenSelection: noop, requestDraw: noop,
      stopTimelinePlayback: noop, storedEditorState: () => state, syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop,
      syncUndoRedoButtons: noop, updateSidePanel: noop,
    });
    history.restoreHistory(-1);
    assert.deepEqual(state.stickers, []);
    assert.equal(editor.selectedId, "a");
    assert.equal(commits, 1);
    // Without upstream layers the rebuild touches nothing, also called directly.
    upstream.rebuildUpstreamWorking();
  } finally {
    restore();
  }
});

test("a Timeline fps change makes the working copies again, and the same result and fps keep them", () => {
  browserStubs();
  try {
    const state = loadSceneState({ version: 2, timeline: { fps: 24 } });
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", timeline: { fps: 30 }, stickers: [sky("s", { clip: { start: 30, in: 0 } })] })] };
    const working = () => upstream.upstreamEntries()[0].working;
    upstream.upstreamViewInput();
    const first = working();
    upstream.upstreamViewInput();
    assert.equal(working(), first);
    assert.equal(first.sceneState.stickers[0].clip.start, 24);
    state.timeline.fps = 60;
    upstream.upstreamViewInput();
    assert.notEqual(working(), first);
    assert.equal(working().sceneState.timeline.fps, 60);
    assert.equal(working().sceneState.stickers[0].clip.start, 60);
  } finally {
    restore();
  }
});

// --- ADR 0030 T8: selecting and editing the upstream elements, written back as the node's overrides.

const noop = () => {};

// The editor's history over `state`, writing the upstream edits back at each step as the editor does.
function editorHistory(state, upstream, editor = { historyController: createEditorHistory(state), frame: 0 }) {
  const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  history.connect({
    clearWorldSelection: noop, commitState: upstream.syncUpstreamEdits, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
    markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop },
    pruneUpstreamRecords: upstream.pruneUpstreamRecords, rebuildUpstreamWorking: upstream.rebuildUpstreamWorking,
    releaseHiddenSelection: noop, requestDraw: noop, stopTimelinePlayback: noop, storedEditorState: () => state,
    syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop, syncUndoRedoButtons: noop,
    syncUpstreamEdits: upstream.syncUpstreamEdits, updateSidePanel: noop,
  });
  return history;
}

test("an upstream edit is written back at its Undo step, and Undo and Redo bring back the records and the working copies", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 } }), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] })] };
    upstream.upstreamViewInput();
    const history = editorHistory(state, upstream);
    const [edited] = upstream.upstreamStickers();
    setStickerPose(edited, 0, { yaw_deg: 30 });
    history.pushHistory();
    assert.deepEqual(state.upstream, [{
      layer: "scene_a", fps: 24, deleted: [], scene: {},
      stickers: [{ id: "sticker_1", placement: "sky", direction: { value: { yaw_deg: 30, pitch_deg: 0 }, keyframes: [] } }],
    }]);
    // The upstream layer's own state and the node's own Stickers are not touched.
    assert.equal(output.ui.pano_upstream_layers[0].state.stickers[0].direction, undefined);
    assert.deepEqual(state.stickers, []);

    history.restoreHistory(-1);
    assert.deepEqual(state.upstream, []);
    const [undone] = upstream.upstreamStickers();
    assert.notEqual(undone, edited);
    assert.equal(undone.direction.value.yaw_deg, 0);
    // The baseline follows the restored working copies: nothing is written again.
    upstream.syncUpstreamEdits();
    assert.deepEqual(state.upstream, []);

    history.restoreHistory(1);
    assert.equal(state.upstream[0].stickers[0].direction.value.yaw_deg, 30);
    assert.equal(upstream.upstreamStickers()[0].direction.value.yaw_deg, 30);
    upstream.syncUpstreamEdits();
    assert.equal(state.upstream.length, 1);
  } finally {
    restore();
  }
});

test("opening and closing over upstream layers writes nothing, also at another fps; an edit is written without the editor's fields", () => {
  browserStubs();
  try {
    const saved = {
      version: 2,
      id: "scene_c",
      timeline: { fps: 24 },
      upstream: [{ layer: "scene_b", fps: 30, stickers: [{ id: "sticker_1", placement: "sky", roll: { value: 3, keyframes: [{ frame: 7, value: 9 }] } }] }],
    };
    const text = sceneStateText(loadSceneState(saved));
    const state = { ...loadSceneState(text), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_b", timeline: { fps: 30 }, stickers: [sky("sticker_1", { clip: { start: 15, in: 0 } }), sky("sticker_2")] })] };
    upstream.upstreamViewInput();
    const widget = { value: text };
    const commit = createCommit({ app: null, bgWidget: null, cameraV2: true, coverageWidget: null, node: { __panoSceneStateV2: true, properties: {} }, presetWidget: null, readOnly: false, state, stateWidget: widget });
    commit.connect({
      needsPaintingLayerSync: () => false, resolveEditorOutputPresetWidth: (value) => value, storedEditorState: () => state,
      syncCutoutShot: noop, syncPaintingLayerAsync: noop, syncPortHandoff: noop, syncUpstreamEdits: upstream.syncUpstreamEdits,
    });
    commit.commitState();
    assert.equal(widget.value, text);
    // An edit: the record of the edited layer is rewritten at the editor's fps, without the editor's own fields.
    upstream.upstreamStickers()[1].visible = false;
    commit.commitState();
    assert.notEqual(widget.value, text);
    assert.doesNotMatch(widget.value, /origin|upstream:/);
    const written = loadSceneState(widget.value).upstream;
    assert.deepEqual(written.map((record) => [record.layer, record.fps]), [["scene_b", 24]]);
    assert.deepEqual(written[0].stickers.map((item) => [item.id, Object.keys(item)]), [
      ["sticker_1", ["id", "placement", "roll"]],
      ["sticker_2", ["id", "placement", "visible"]],
    ]);
    // The record's Keyframe, 7 frames at 30 fps after the Clip range's origin, is at the editor's 24 fps now.
    assert.deepEqual(written[0].stickers[0].roll.keyframes.map((key) => key.frame), [6]);
  } finally {
    restore();
  }
});

// The editor's items and selection over the upstream module of setup(): the modules that find items by id.
function editorItems(state, upstream, editor = { frame: 0 }) {
  const items = createItems({ canvas: {}, editor, sceneV2: true, state, stateV2: true, type: "stickers" });
  const selection = createSelection({ editor, readOnly: false, runtime: {}, sceneV2: true, shotEditor: true, state, timeline: {}, type: "stickers" });
  items.connect({ upstreamStickers: upstream.upstreamStickers, upstreamStickerImage: upstream.upstreamStickerImage });
  selection.connect({
    ...items,
    getStrokeGroupItem: () => null,
    getRasterObjectItem: () => null,
    isStrokeGroupItem: () => false,
    isRasterObjectItem: () => false,
    pushHistory: noop,
    commitAndRefreshNode: noop,
    updateSelectionMenu: noop,
    updateSidePanel: noop,
    requestDraw: noop,
  });
  return { ...items, ...selection };
}

test("the upstream elements are found by their ids where the editor's own are: selection, world selection, inspector and lock", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 }, stickers: [sky("sticker_1")] }), active: {} };
    const { output, upstream } = setup(state);
    const plane = { id: "sticker_3", placement: "world", source: { kind: "file", filename: "w.png" } };
    output.ui = {
      pano_upstream_layers: [
        layer({ id: "scene_a", stickers: [sky("sticker_1", { z_index: 2 }), sky("sticker_2", { z_index: 1 }), plane] }),
        // Locked upstream: only inherited, it is not unlocked here.
        layer({ stickers: [sky("sticker_1", { locked: true })] }),
      ],
    };
    const editor = { frame: 0, selectedId: "upstream:scene_a:sticker_1", worldSelectedId: "upstream:scene_a:sticker_3" };
    const found = editorItems(state, upstream, editor);
    // The canvas's lists: the node's own first, then the upstream sky Stickers from back to front.
    assert.deepEqual(found.getCutoutSelectableItems().map((item) => item.id), [
      "sticker_1", "upstream:scene_a:sticker_2", "upstream:scene_a:sticker_1", "upstream:#1:sticker_1",
    ]);
    assert.deepEqual(found.getList().map((item) => item.id), found.getCutoutSelectableItems().map((item) => item.id));
    const selected = found.getSelected();
    assert.equal(selected, upstream.upstreamStickers()[0]);
    assert.equal(found.isStickerItem(selected) && found.isSceneSticker(selected), true);
    assert.equal(found.selectedWorldSticker(), upstream.upstreamStickers()[2]);
    assert.equal(found.stickerById("sticker_1"), state.stickers[0]);
    // The pose the inspector and the canvas read, and write, is the working Sticker's.
    found.writePose(selected, { yaw_deg: 25 });
    assert.equal(found.poseOf(selected).yaw_deg, 25);
    assert.equal(state.stickers[0].direction.value.yaw_deg, 0);
    // Editable, and lockable, while its layer keeps overrides; a layer without a Scene id is only inherited.
    assert.equal(found.isItemLocked(selected), false);
    assert.equal(found.worldStickerEditable(found.selectedWorldSticker()), true);
    const inherited = upstream.upstreamStickers()[3];
    assert.equal(found.isItemLocked(inherited), true);
    editor.selectedIds = [inherited.id];
    found.toggleSelectedLock();
    assert.equal(inherited.locked, true);
    editor.selectedIds = [selected.id];
    found.toggleSelectedLock();
    assert.equal(selected.locked, true);
    assert.equal(found.isItemLocked(selected), true);
    // Selecting an upstream element keeps its working id out of the node's properties.
    found.setSelectedItem(state.stickers[0]);
    assert.equal(state.active.selected_sticker_id, "sticker_1");
    found.setSelectedItem(selected);
    assert.equal(editor.selectedId, selected.id);
    assert.equal(state.active.selected_sticker_id, null);
    found.setSelectedItems([state.stickers[0], selected], selected.id);
    assert.equal(state.active.selected_sticker_id, null);
    found.setSelectedItems([selected, state.stickers[0]], "sticker_1");
    assert.equal(state.active.selected_sticker_id, "sticker_1");
  } finally {
    restore();
  }
});

// --- ADR 0030 T10: delete, revert, restore and prune.

// The editor over `state` with the upstream module of setup(): its items and selection, history, commit (to
// `widget`) and commands, wired as the editor wires them.
function editorSession(state, upstream, editor, widget = { value: sceneStateText(state) }) {
  Object.assign(editor, { historyController: createEditorHistory(state) });
  const found = editorItems(state, upstream, editor);
  const history = editorHistory(state, upstream, editor);
  const commit = createCommit({ app: null, bgWidget: null, cameraV2: true, coverageWidget: null, node: { __panoSceneStateV2: true, properties: {}, setDirtyCanvas: noop }, presetWidget: null, readOnly: false, state, stateWidget: widget });
  commit.connect({
    needsPaintingLayerSync: () => false, resolveEditorOutputPresetWidth: (value) => value, storedEditorState: () => state,
    syncCutoutShot: noop, syncPaintingLayerAsync: noop, syncPortHandoff: noop, syncUpstreamEdits: upstream.syncUpstreamEdits,
  });
  const commands = createCommands({ editor, readOnly: false, sceneV2: true, state, studio: true, type: "stickers", uiState: {} });
  commands.connect({
    ...found,
    ...upstream,
    clearWorldSelection: () => { editor.worldSelectedId = null; },
    commitAndRefreshNode: commit.commitAndRefreshNode,
    isRasterObjectItem: () => false,
    isStrokeGroupItem: () => false,
    markObjectVisualsDirty: noop,
    pruneUnusedAssets: noop,
    pushHistory: history.pushHistory,
    releaseHiddenSelection: noop,
    requestDraw: noop,
    stopTimelinePlayback: noop,
    syncFloatingViewButtonState: noop,
    updateSelectionMenu: noop,
    updateSidePanel: noop,
  });
  return { ...found, history, commit, commands, widget };
}

const stickerIds = (upstream) => upstream.upstreamStickers().map((item) => item.id);

test("Delete of an upstream element writes its tombstone and drops its override; it is drawn no more, and Undo brings it back", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({
      version: 2,
      timeline: { fps: 24 },
      upstream: [{ layer: "scene_a", fps: 30, stickers: [{ id: "sticker_1", placement: "sky", visible: true, roll: { value: 5, keyframes: [] } }, { id: "sticker_2", placement: "sky", z_index: 4 }] }],
    }), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2"), sky("sticker_3")] })] };
    upstream.upstreamViewInput();
    const editor = { frame: 0, selectedId: "upstream:scene_a:sticker_1", selectedIds: ["upstream:scene_a:sticker_1"] };
    const session = editorSession(state, upstream, editor);
    const text = session.widget.value;
    session.commands.deleteSelected();
    // One record, ids only in `deleted`; the record keeps its fps, the other override stays.
    assert.deepEqual(state.upstream, [{ layer: "scene_a", fps: 30, deleted: ["sticker_1"], stickers: [{ id: "sticker_2", placement: "sky", z_index: 4 }], scene: {} }]);
    assert.deepEqual(loadSceneState(session.widget.value).upstream, state.upstream);
    assert.equal(editor.selectedId, null);
    assert.deepEqual(stickerIds(upstream), ["upstream:scene_a:sticker_2", "upstream:scene_a:sticker_3"]);
    // sticker_2 keeps its z_index override and is drawn in front.
    assert.deepEqual(drawnIds(upstream.upstreamViewInput()), ["upstream:scene_a:sticker_3", "upstream:scene_a:sticker_2"]);
    // A layer without a record gets one at the editor's fps.
    output.ui = { pano_upstream_layers: [...output.ui.pano_upstream_layers, layer({ id: "scene_b", stickers: [sky("sticker_1")] })] };
    upstream.upstreamViewInput();
    editor.selectedId = "upstream:scene_b:sticker_1";
    editor.selectedIds = [editor.selectedId];
    session.commands.deleteSelected();
    assert.deepEqual(state.upstream[1], { layer: "scene_b", fps: 24, deleted: ["sticker_1"], stickers: [], scene: {} });
    // Undo steps back one delete each.
    session.history.restoreHistory(-1);
    assert.equal(state.upstream.length, 1);
    session.history.restoreHistory(-1);
    assert.deepEqual(state.upstream, loadSceneState(text).upstream);
    assert.equal(stickerIds(upstream).length, 4);
  } finally {
    restore();
  }
});

test("a selection of own and upstream elements is deleted in one Undo step", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 }, stickers: [sky("sticker_1"), sky("sticker_2")] }), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] })] };
    upstream.upstreamViewInput();
    const editor = { frame: 0, selectedId: "sticker_1", selectedIds: ["sticker_1", "upstream:scene_a:sticker_2"] };
    const session = editorSession(state, upstream, editor);
    const steps = editor.historyController.entries.length;
    session.commands.deleteSelected();
    assert.equal(editor.historyController.entries.length, steps + 1);
    assert.deepEqual(state.stickers.map((item) => item.id), ["sticker_2"]);
    assert.deepEqual(state.upstream[0].deleted, ["sticker_2"]);
    assert.deepEqual(stickerIds(upstream), ["upstream:scene_a:sticker_1"]);
    session.history.restoreHistory(-1);
    assert.deepEqual(state.stickers.map((item) => item.id), ["sticker_1", "sticker_2"]);
    assert.deepEqual(state.upstream, []);
    assert.deepEqual(stickerIds(upstream), ["upstream:scene_a:sticker_1", "upstream:scene_a:sticker_2"]);
  } finally {
    restore();
  }
});

test("Delete leaves an element of a layer that is only inherited, and a locked one, sky or world", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 } }), active: {} };
    const plane = { id: "sticker_2", placement: "world", source: { kind: "file", filename: "w.png" } };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [
      layer({ stickers: [sky("sticker_1"), plane] }),
      layer({ id: "scene_a", stickers: [sky("sticker_1", { locked: true })] }),
    ] };
    upstream.upstreamViewInput();
    const editor = { frame: 0, selectedId: "upstream:#0:sticker_1", selectedIds: ["upstream:#0:sticker_1"], worldSelectedId: "upstream:#0:sticker_2" };
    const session = editorSession(state, upstream, editor);
    const text = session.widget.value;
    assert.equal(session.commands.deleteSelectedWorldSticker(), true);
    session.commands.deleteSelected();
    editor.selectedId = "upstream:scene_a:sticker_1";
    editor.selectedIds = [editor.selectedId];
    session.commands.deleteSelected();
    assert.deepEqual(state.upstream, []);
    assert.equal(session.widget.value, text);
    assert.equal(editor.historyController.entries.length, 1);
    assert.equal(stickerIds(upstream).length, 3);
  } finally {
    restore();
  }
});

test("Delete of an upstream world Sticker, and of its 3D port, keeps the 3D items loaded so Undo does not load them again", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 } }), active: {} };
    const { output, upstream } = setup(state);
    const port = { id: "sticker_1", placement: "world", source: { kind: "port" } };
    output.ui = { pano_upstream_layers: [layer(
      { id: "scene_a", stickers: [port] },
      { pano_sticker_files: [{ filename: "c.glb" }], pano_sticker_meta: [{ kind: "mesh" }] },
    )] };
    const item = () => upstream.upstreamViewInput().items.find((entry) => entry.slot === "scene_a:sticker");
    const before = item();
    assert.ok(before.request);
    const editor = { frame: 0, worldSelectedId: "upstream:scene_a:sticker_1" };
    const session = editorSession(state, upstream, editor);
    assert.equal(session.commands.deleteSelectedWorldSticker(), true);
    assert.equal(editor.worldSelectedId, null);
    assert.deepEqual(state.upstream[0].deleted, ["sticker_1"]);
    // Asked for no more, as a hidden one is, but its URLs stay, so the view keeps the items.
    assert.equal(item().request, null);
    assert.deepEqual(item().urls, before.urls);
    session.history.restoreHistory(-1);
    assert.deepEqual(item().urls, before.urls);
    assert.equal(item().request.url, before.request.url);
  } finally {
    restore();
  }
});

test("Revert to upstream drops an element's override, or one Lane of it, and Restore deleted brings its layer's deleted elements back", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({
      version: 2,
      timeline: { fps: 24 },
      upstream: [{
        layer: "scene_a",
        fps: 24,
        deleted: ["sticker_3", "sticker_4"],
        stickers: [{ id: "sticker_1", placement: "sky", visible: true, roll: { value: 5, keyframes: [] }, opacity: { value: 0.5, keyframes: [] } }],
      }],
    }), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1", { roll: { value: 1 } }), sky("sticker_2"), sky("sticker_3"), sky("sticker_4")] })] };
    upstream.upstreamViewInput();
    const working = () => upstream.upstreamStickers()[0];
    // An edit not yet written back is written with the revert, so the revert does not lose it.
    setStickerPose(working(), 0, { yaw_deg: 20 });
    assert.equal(upstream.revertUpstreamSticker(working(), "roll"), true);
    assert.deepEqual(Object.keys(state.upstream[0].stickers[0]), ["id", "placement", "visible", "direction", "opacity"]);
    assert.equal(working().roll.value, 1);
    assert.equal(working().direction.value.yaw_deg, 20);
    // Nothing to revert: a Lane it does not override, or not a Lane.
    assert.equal(upstream.revertUpstreamSticker(working(), "roll"), false);
    assert.equal(upstream.revertUpstreamSticker(working(), "id"), false);
    assert.equal(upstream.revertUpstreamSticker(upstream.upstreamStickers()[1]), false);
    assert.equal(upstream.revertUpstreamSticker(working()), true);
    assert.deepEqual(state.upstream[0].stickers, []);
    assert.equal(working().opacity.value, 1);
    assert.equal(working().direction.value.yaw_deg, 0);
    // Only the deleted elements the layer still has are counted.
    state.upstream[0].deleted.push("sticker_9");
    assert.equal(upstream.upstreamTimelineLayers()[0].deleted, 2);
    assert.equal(upstream.restoreUpstreamDeleted("scene_a"), true);
    // The record, left with nothing, is dropped.
    assert.deepEqual(state.upstream, []);
    assert.equal(upstream.upstreamStickers().length, 4);
    assert.equal(upstream.restoreUpstreamDeleted("scene_a"), false);
  } finally {
    restore();
  }
});

test("an Undo step prunes the overrides of elements gone upstream while the result is current, never a missing layer's, and opening and closing writes nothing", () => {
  browserStubs();
  try {
    const saved = loadSceneState({
      version: 2,
      timeline: { fps: 24 },
      stickers: [sky("sticker_1")],
      upstream: [
        { layer: "scene_a", fps: 24, deleted: ["sticker_2", "sticker_9"], stickers: [{ id: "sticker_1", placement: "sky", visible: false }, { id: "sticker_8", placement: "sky", visible: false }] },
        // A layer not in the result (relinked, or not run yet).
        { layer: "scene_x", fps: 24, deleted: ["sticker_1"] },
      ],
    });
    const text = sceneStateText(saved);
    const state = { ...loadSceneState(text), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] })] };
    upstream.upstreamViewInput();
    const editor = { frame: 0 };
    const session = editorSession(state, upstream, editor, { value: text });
    // Opening and closing: the state is written as it was.
    session.commit.commitState();
    assert.equal(session.widget.value, text);
    // An edit of the node's own Sticker prunes with its Undo step.
    setStickerPose(state.stickers[0], 0, { yaw_deg: 10 });
    session.history.pushHistory();
    session.commit.commitState();
    assert.deepEqual(state.upstream, [
      { layer: "scene_a", fps: 24, deleted: ["sticker_2"], stickers: [{ id: "sticker_1", placement: "sky", visible: false }], scene: {} },
      { layer: "scene_x", fps: 24, deleted: ["sticker_1"], stickers: [], scene: {} },
    ]);
    assert.deepEqual(loadSceneState(session.widget.value).upstream, state.upstream);
    // Without a current result nothing is pruned.
    state.upstream = loadSceneState(text).upstream;
    output.ui = {};
    session.history.pushHistory();
    assert.deepEqual(state.upstream, loadSceneState(text).upstream);
  } finally {
    restore();
  }
});

test("the editor's first Undo step at boot prunes nothing, so opening and closing writes nothing over stale overrides", () => {
  // The boot (pano_editor.js) adds its first step as the initial one.
  assert.match(readEditorSource(), /runBootStep\("history", \(\) => pushHistory\(\{ initial: true \}\)\)/);
  browserStubs();
  try {
    const text = sceneStateText(loadSceneState({
      version: 2,
      timeline: { fps: 24 },
      upstream: [{ layer: "scene_a", fps: 24, deleted: ["gone_1"], stickers: [{ id: "gone_2", placement: "sky", visible: false }] }],
    }));
    const state = { ...loadSceneState(text), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1")] })] };
    upstream.upstreamViewInput();
    const editor = { frame: 0 };
    const session = editorSession(state, upstream, editor, { value: text });
    session.history.pushHistory({ initial: true });
    session.commit.commitState();
    assert.equal(session.widget.value, text);
    // The first edit prunes.
    session.history.pushHistory();
    assert.deepEqual(state.upstream, []);
  } finally {
    restore();
  }
});

test("Restore deleted is one command, for the Timeline's layer header: an Undo step and a commit, and nothing without deleted elements", () => {
  browserStubs();
  try {
    const state = { ...loadSceneState({ version: 2, timeline: { fps: 24 }, upstream: [{ layer: "scene_a", fps: 24, deleted: ["sticker_2"] }] }), active: {} };
    const { output, upstream } = setup(state);
    output.ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [sky("sticker_1"), sky("sticker_2")] })] };
    upstream.upstreamViewInput();
    const editor = { frame: 0 };
    const session = editorSession(state, upstream, editor);
    const text = session.widget.value;
    session.commands.restoreUpstreamDeletedCommand("scene_a");
    assert.deepEqual(state.upstream, []);
    assert.equal(editor.historyController.entries.length, 2);
    assert.notEqual(session.widget.value, text);
    assert.equal(stickerIds(upstream).length, 2);
    session.commands.restoreUpstreamDeletedCommand("scene_a");
    assert.equal(editor.historyController.entries.length, 2);
  } finally {
    restore();
  }
});

test("the inspector's revert buttons reach the upstream module only while the panel has them enabled", () => {
  const calls = [];
  const sticker = { id: "upstream:scene_a:sticker_1", origin: { layer: "scene_a", id: "sticker_1" }, placement: "sky" };
  const own = { id: "sticker_1", placement: "sky", source: { kind: "port" } };
  let selected = sticker;
  const lane = (name, disabled, action = "revert-upstream") => ({ name, disabled, action });
  const uiState = { sidePanel: { upstream: {
    revertAll: { disabled: false },
    lanes: [lane("direction", true), lane("roll", false), lane("size", true), lane("opacity", true)],
  } } };
  const events = createSidePanelEvents({ cameraV2: true, coverageWidget: null, editor: {}, node: {}, previewMode: false, runtime: {}, shotEditor: true, state: {}, studio: true, type: "stickers", uiState });
  const record = (name) => (...args) => { calls.push([name, ...args]); return true; };
  events.connect({
    commitAndRefreshNode: record("commit"),
    getSelected: () => selected,
    markObjectVisualsDirty: noop,
    pushHistory: record("push"),
    releaseHiddenSelection: noop,
    requestDraw: noop,
    revertPortHandoffLane: record("handoff"),
    revertUpstreamSticker: record("revert"),
    selectedWorldSticker: () => null,
    stopTimelinePlayback: noop,
    updateSelectionMenu: noop,
    updateSidePanel: noop,
  });
  const click = (action, laneName = null) => {
    const target = { getAttribute: (name) => (name === "data-action" ? action : name === "data-lane" ? laneName : null) };
    return events.onSidePanelClick({ target: { closest: () => target } });
  };
  click("revert-upstream");
  click("revert-upstream", "roll");
  click("revert-upstream", "direction");
  // Restore deleted is not the inspector's (it is on the layer's Timeline header).
  click("restore-upstream-deleted");
  assert.deepEqual(calls, [
    ["revert", sticker, null], ["push"], ["commit"],
    ["revert", sticker, "roll"], ["push"], ["commit"],
  ]);
  calls.length = 0;
  uiState.sidePanel.upstream.revertAll.disabled = true;
  click("revert-upstream");
  assert.deepEqual(calls, []);
  // The node's own port Sticker: its Lane buttons revert the Pose handoff, while enabled.
  selected = own;
  uiState.sidePanel.upstream.lanes = [lane("direction", false, "revert-handoff-lane"), lane("roll", true, "revert-handoff-lane")];
  click("revert-handoff-lane", "direction");
  click("revert-handoff-lane", "roll");
  click("revert-upstream", "direction");
  assert.deepEqual(calls, [["handoff", "direction"]]);
});

test("the upstream sky Stickers are hit under the node's own items and over its Camera, the front one first", () => {
  const square = (x0, y0, x1, y1) => ({ visible: true, corners: [{ x: x0, y: y0 }, { x: x1, y: y0 }, { x: x1, y: y1 }, { x: x0, y: y1 }] });
  const own = { id: "sticker_1" };
  const back = { id: "upstream:a:sticker_1", origin: { layer: "a", id: "sticker_1" } };
  const front = { id: "upstream:b:sticker_1", origin: { layer: "b", id: "sticker_1" } };
  const camera = { id: "camera" };
  const geoms = new Map([[own, square(0, 0, 10, 10)], [back, square(5, 5, 30, 30)], [front, square(20, 20, 40, 40)], [camera, square(0, 0, 100, 100)]]);
  const hit = createHitTest({ editor: { mode: "pano" }, readOnly: false, shotEditor: true, type: "stickers" });
  hit.connect({
    getOrderedDisplayListObjects: () => [{ type: "sticker", z_index: 0, item: own }],
    getCutoutSelectableItemsForHit: () => [own, camera],
    upstreamSkyStickers: () => [back, front],
    isShotItem: (item) => item === camera,
    isStrokeGroupItem: () => false,
    isRasterObjectItem: () => false,
    objectGeom: (item) => geoms.get(item),
  });
  const at = (x, y) => hit.hitObjectAt({ x, y })?.item ?? null;
  assert.equal(at(7, 7), own);
  assert.equal(at(12, 12), back);
  assert.equal(at(25, 25), front);
  assert.equal(at(60, 60), camera);
});

// --- ADR 0030 T9: the upstream layers' Timeline rows, edited through the editor's Timeline actions.

// The editor's Timeline over the upstream module of setup(): the real Timeline, its actions, items and history,
// each Undo step writing the upstream edits back. Returns them with the Undo steps counted.
// `overrides` replace what the editor gives the Timeline.
async function editorTimeline(state, upstream, overrides = {}) {
  const { createTimeline } = await import("../web_src/editor/timeline.js");
  const { createTimelineActions } = await import("../web_src/editor/timeline_actions.js");
  // The Timeline asks whether its VIDEO element plays a source.
  globalThis.HTMLVideoElement ??= class {};
  const editor = { frame: 0, historyController: createEditorHistory(state) };
  const timelineState = { selection: null, openRows: new Set(), drag: null };
  const uiState = { videoTransport: {}, timeline: null };
  const node = { id: 1, inputs: [{ name: "scene" }], graph: null };
  const items = createItems({ canvas: {}, editor, sceneV2: true, state, stateV2: true, type: "stickers" });
  items.connect({ upstreamStickers: upstream.upstreamStickers, upstreamStickerImage: upstream.upstreamStickerImage });
  const history = createHistory({ editor, readOnly: false, runtime: {}, state, stateV2: true, studio: true, type: "stickers" });
  const timeline = createTimeline({
    editor, node, readOnly: false, sceneV2: true, state, stateV2: true, studio: true, timeline: timelineState,
    timelinePlayhead: { frame: { value: 0 } }, uiState, videoEl: null, videoTimelineFps: () => null,
  });
  const actions = createTimelineActions({ dragFrames: { request: noop, cancel: noop }, editor, readOnly: false, state, stateV2: true, timeline: timelineState, uiState });
  const steps = { count: 0, selected: [] };
  history.connect({
    clearWorldSelection: noop, commitState: upstream.syncUpstreamEdits, getActiveCutoutShot: () => null, isUploadingSticker: () => false,
    markObjectVisualsDirty: noop, markPaintStrokeVisualsDirty: noop, playback: { seek: noop },
    pruneUpstreamRecords: upstream.pruneUpstreamRecords, rebuildUpstreamWorking: upstream.rebuildUpstreamWorking,
    releaseHiddenSelection: noop, requestDraw: noop, stopTimelinePlayback: noop, storedEditorState: () => state,
    syncCutoutShot: noop, syncPaintUi: noop, syncPortHandoff: noop, syncUndoRedoButtons: noop,
    syncUpstreamEdits: upstream.syncUpstreamEdits, updateSidePanel: noop,
  });
  const api = {
    ...items, ...upstream, ...timeline,
    commitAndRefreshNode: upstream.syncUpstreamEdits, getPortMediaMeta: () => null, hasCamera: () => false, inspectorTimed: () => false,
    isExternalSticker: (item) => item?.source?.kind === "port", loading3dIds: () => new Set(), markObjectVisualsDirty: noop, playback: { frame: 0, seek: noop, stop: noop },
    sceneFiles: () => null, stickerFiles: () => null, file3dEditorFile: () => null,
    pushHistory: () => {
      steps.count += 1;
      history.pushHistory();
    },
    refreshModalVideoSource: noop, releaseHiddenSelection: noop, requestDraw: noop, syncCutoutShot: noop, syncSidePanelModel: noop,
    updateSelectionMenu: noop, updateSidePanel: noop, upstreamBackground: () => null, upstreamLinked: () => true,
    cameraShoots: () => false, changeTimelineFps: noop, getActiveCutoutShot: () => null, jumpTimelineTo: noop,
    selectWorldSticker: (id) => steps.selected.push(["world", id]), setSelectedItem: (item) => steps.selected.push(["sky", item?.id ?? null]),
    syncFloatingViewButtonState: noop, toggleVideoMuted: noop, togglePlayback: noop,
    ...overrides,
  };
  const commands = createCommands({ editor, readOnly: false, sceneV2: true, state, studio: true, type: "stickers", uiState });
  Object.assign(api, commands);
  timeline.connect(api);
  commands.connect({ ...api, stopTimelinePlayback: timeline.stopTimelinePlayback });
  actions.connect({ ...api, syncTimeline: timeline.syncTimeline });
  return { act: actions.onTimelineAction, editor, history, steps, timeline, timelineState, uiState };
}

// One upstream layer with a keyed sky Sticker, a world Sticker, 3D content, a hidden painting and a `scene` Clip range.
const timedLayer = (extra = {}) => layer({
  id: "scene_a",
  scene: { clip: { start: 0, in: 0, duration: 48 } },
  stickers: [
    sky("sticker_1", { direction: { value: { yaw_deg: 0, pitch_deg: 0 }, keyframes: [{ frame: 0, value: { yaw_deg: 0, pitch_deg: 0 } }, { frame: 12, value: { yaw_deg: 40, pitch_deg: 0 } }] } }),
    { id: "sticker_2", placement: "world", source: { kind: "file", filename: "w.png" }, position: { value: [0, 0, -2] } },
  ],
  painting_visible: false,
  ...extra,
}, { pano_scene_files: [{ filename: "a.ply" }], pano_scene_meta: [{ kind: "ply" }] });

async function timelineOver(ui, saved = { version: 2, timeline: { fps: 24 } }, overrides = {}) {
  const state = { ...loadSceneState(saved), active: {} };
  const { output, upstream } = setup(state);
  // The upstream Scene of timedLayer() is 48 frames long.
  output.ui = { pano_upstream_frames: [48], ...ui };
  const editing = await editorTimeline(state, upstream, overrides);
  return { state, output, upstream, ...editing };
}

const drag = (act, action, delta) => {
  act({ ...action, phase: "start", delta: 0 });
  act({ ...action, phase: "move", delta });
  act({ ...action, phase: "end", delta });
};

test("the Timeline model has a group per upstream layer, its rows at the editor's frames, and the node's own rows first", async () => {
  browserStubs();
  try {
    const { state, timeline, uiState } = await timelineOver({ pano_upstream_layers: [timedLayer(), layer({ stickers: [sky("sticker_1")] })] }, {
      version: 2, timeline: { fps: 24 }, stickers: [sky("own")],
    });
    const before = structuredClone(state);
    timeline.syncTimeline();
    assert.deepEqual(uiState.timeline.rows.map((row) => row.id), ["own"]);
    assert.deepEqual(uiState.timeline.groups.map((group) => group.label), ["Upstream · scene_a", "Upstream · #1 · inherited only"]);
    assert.deepEqual(uiState.timeline.groups[0].rows.map((row) => [row.id, row.clip]), [
      ["upstream:scene_a:sticker_1", { start: 0, end: null }],
      ["upstream:scene_a:sticker_2", { start: 0, end: null }],
      ["upstream:scene_a:painting", null],
      ["upstream:scene_a:scene", { start: 0, end: 48 }],
    ]);
    assert.deepEqual(uiState.timeline.groups[0].rows[0].keys.map((key) => key.frame), [0, 12]);
    // Building the model writes nothing.
    assert.deepEqual(state, before);
  } finally {
    restore();
  }
});

test("each Timeline action on an upstream row writes only its own override, as one Undo step", async () => {
  browserStubs();
  try {
    const row = "upstream:scene_a:sticker_1";
    const cases = [
      ["key-row", ({ act, editor }) => {
        editor.frame = 6;
        act({ type: "key-row", owner: row });
      }, (record) => assert.deepEqual(record.stickers.map((item) => Object.keys(item)), [["id", "placement", "direction", "roll", "size", "opacity"]])],
      ["move a Keyframe", ({ act }) => {
        act({ type: "select-keys", owner: row, lane: "direction", frames: [12], additive: false });
        drag(act, { type: "move-keys" }, 3);
      }, (record) => {
        assert.deepEqual(record.stickers.map((item) => Object.keys(item)), [["id", "placement", "direction"]]);
        assert.deepEqual(record.stickers[0].direction.keyframes.map((key) => key.frame), [0, 15]);
      }],
      ["delete a Keyframe", ({ act, timeline }) => {
        act({ type: "select-keys", owner: row, lane: null, frames: [12], additive: false });
        timeline.deleteSelectedKeyframes();
      }, (record) => assert.deepEqual(record.stickers[0].direction.keyframes.map((key) => key.frame), [0])],
      ["easing", ({ act }) => {
        act({ type: "select-keys", owner: row, lane: "direction", frames: [0], additive: false });
        act({ type: "easing", easing: "hold", commit: true });
      }, (record) => {
        assert.deepEqual(record.stickers.map((item) => Object.keys(item)), [["id", "placement", "direction"]]);
        assert.equal(record.stickers[0].direction.keyframes[0].easing, "hold");
      }],
      ["move the Clip range", ({ act }) => drag(act, { type: "clip", id: row, mode: "move" }, 5),
        (record) => assert.deepEqual(record.stickers, [{ id: "sticker_1", placement: "sky", clip: { start: 5, in: 0, duration: null } }])],
      ["trim the scene's end", ({ act }) => drag(act, { type: "clip", id: "upstream:scene_a:scene", mode: "end" }, -8),
        (record) => assert.deepEqual([record.stickers, record.scene], [[], { clip: { start: 0, in: 0, duration: 40 } }])],
      ["the world Sticker's eye", ({ act }) => act({ type: "toggle-visible", id: "upstream:scene_a:sticker_2" }),
        (record) => assert.deepEqual(record.stickers, [{ id: "sticker_2", placement: "world", visible: false }])],
      ["the painting's eye", ({ act }) => act({ type: "toggle-visible", id: "upstream:scene_a:painting" }),
        (record) => assert.deepEqual([record.stickers, record.scene, record.painting_visible], [[], {}, true])],
      ["the scene's eye", ({ act }) => act({ type: "toggle-visible", id: "upstream:scene_a:scene" }),
        (record) => assert.deepEqual([record.stickers, record.scene, Object.hasOwn(record, "painting_visible")], [[], { visible: false }, false])],
    ];
    for (const [name, run, check] of cases) {
      const editing = await timelineOver({ pano_upstream_layers: [timedLayer()] }, { version: 2, timeline: { fps: 24 }, stickers: [sky("own")] });
      const { state, output, steps } = editing;
      const own = structuredClone(state.stickers);
      run(editing);
      assert.equal(steps.count, 1, name);
      assert.equal(state.upstream.length, 1, name);
      assert.deepEqual([state.upstream[0].layer, state.upstream[0].fps, state.upstream[0].deleted], ["scene_a", 24, []], name);
      check(state.upstream[0]);
      // The node's own Stickers and the upstream layer as it came are not touched.
      assert.deepEqual(state.stickers, own, name);
      assert.deepEqual(output.ui.pano_upstream_layers[0], timedLayer(), name);
    }
  } finally {
    restore();
  }
});

test("the eye of an upstream row shows a hidden upstream element again, and the editor draws it", async () => {
  browserStubs();
  try {
    const { act, state, upstream, steps } = await timelineOver({ pano_upstream_layers: [timedLayer()] }, {
      version: 2, timeline: { fps: 24 }, upstream: [{ layer: "scene_a", fps: 24, stickers: [{ id: "sticker_1", placement: "sky", visible: false, locked: true }] }],
    });
    const drawnSky = () => upstream.upstreamViewInput().sky.map((item) => item.id);
    assert.deepEqual(drawnSky(), []);
    // Its row is not selected while hidden; a locked element's eye still works, as the node's own.
    act({ type: "select-row", id: "upstream:scene_a:sticker_1" });
    assert.deepEqual(steps.selected, []);
    act({ type: "toggle-visible", id: "upstream:scene_a:sticker_1" });
    assert.deepEqual(state.upstream[0].stickers, [{ id: "sticker_1", placement: "sky", visible: true, locked: true }]);
    assert.deepEqual(drawnSky(), ["upstream:scene_a:sticker_1"]);
    act({ type: "select-row", id: "upstream:scene_a:sticker_1" });
    act({ type: "select-row", id: "upstream:scene_a:sticker_2" });
    assert.deepEqual(steps.selected, [["sky", "upstream:scene_a:sticker_1"], ["world", "upstream:scene_a:sticker_2"]]);
    // Locked: its Keyframes and Clip range do not change.
    drag(act, { type: "clip", id: "upstream:scene_a:sticker_1", mode: "move" }, 5);
    act({ type: "key-row", owner: "upstream:scene_a:sticker_1" });
    assert.equal(steps.count, 1);
  } finally {
    restore();
  }
});

test("the rows of a layer that is only inherited are shown but change nothing, as locked rows", async () => {
  browserStubs();
  try {
    const inherited = layer({ ...timedLayer().state, id: undefined });
    const { act, state, upstream, steps, timeline, timelineState } = await timelineOver({ pano_upstream_layers: [inherited] });
    const before = structuredClone(upstream.upstreamEntries()[0].working.sceneState);
    const row = "upstream:#0:sticker_1";
    act({ type: "toggle-visible", id: row });
    act({ type: "toggle-visible", id: "upstream:#0:painting" });
    act({ type: "toggle-visible", id: "upstream:#0:scene" });
    act({ type: "key-row", owner: row });
    drag(act, { type: "clip", id: row, mode: "move" }, 5);
    drag(act, { type: "clip", id: "upstream:#0:scene", mode: "end" }, -5);
    act({ type: "select-keys", owner: row, lane: null, frames: [12], additive: false });
    assert.deepEqual(timelineState.selection, { owner: row, lane: null, frames: [12] });
    drag(act, { type: "move-keys" }, 3);
    act({ type: "easing", easing: "hold", commit: true });
    timeline.deleteSelectedKeyframes();
    assert.equal(steps.count, 0);
    assert.deepEqual(state.upstream, []);
    assert.deepEqual(upstream.upstreamEntries()[0].working.sceneState, before);
    assert.equal(timeline.timelineEditable(row), false);
  } finally {
    restore();
  }
});

test("an upstream scene row moves its Clip range but none of its Keyframes", async () => {
  browserStubs();
  try {
    const keyed = layer({ ...timedLayer().state, scene: { clip: { start: 0, in: 0, duration: 48 }, scale: { value: 1, keyframes: [{ frame: 0, value: 1 }, { frame: 10, value: 2 }] } } });
    const { act, state, steps } = await timelineOver({ pano_upstream_layers: [keyed] });
    act({ type: "select-keys", owner: "upstream:scene_a:scene", lane: null, frames: [10], additive: false });
    drag(act, { type: "move-keys" }, 3);
    act({ type: "key-row", owner: "upstream:scene_a:scene" });
    assert.equal(steps.count, 0);
    assert.deepEqual(state.upstream, []);
  } finally {
    restore();
  }
});

test("Undo and Redo of a Timeline edit of an upstream row bring back its records and its working copy", async () => {
  browserStubs();
  try {
    const { act, history, state, upstream } = await timelineOver({ pano_upstream_layers: [timedLayer()] });
    const working = () => upstream.upstreamStickers()[0];
    drag(act, { type: "clip", id: "upstream:scene_a:sticker_1", mode: "move" }, 5);
    act({ type: "toggle-visible", id: "upstream:scene_a:painting" });
    assert.equal(state.upstream[0].painting_visible, true);
    history.restoreHistory(-1);
    assert.equal(Object.hasOwn(state.upstream[0], "painting_visible"), false);
    assert.equal(upstream.upstreamEntries()[0].working.sceneState.painting_visible, false);
    assert.equal(working().clip.start, 5);
    history.restoreHistory(-1);
    assert.deepEqual(state.upstream, []);
    assert.equal(working().clip.start, 0);
    // Nothing is written again from the restored working copies.
    upstream.syncUpstreamEdits();
    assert.deepEqual(state.upstream, []);
    history.restoreHistory(1);
    assert.equal(working().clip.start, 5);
    assert.deepEqual(state.upstream[0].stickers, [{ id: "sticker_1", placement: "sky", clip: { start: 5, in: 0, duration: null } }]);
  } finally {
    restore();
  }
});

test("the Auto length reaches the end of an upstream Clip range this node overrides, as the node's output does", async () => {
  browserStubs();
  try {
    const { act, state, timeline, upstream } = await timelineOver({ pano_upstream_layers: [timedLayer()] });
    assert.deepEqual(upstream.upstreamOutput(), { frames: 48, ends: [] });
    assert.equal(timeline.timelineSpanFrames(), 48);
    // Without a duration a Clip range ends nowhere.
    drag(act, { type: "clip", id: "upstream:scene_a:sticker_1", mode: "move" }, 30);
    assert.deepEqual(upstream.upstreamOutput().ends, []);
    // Nothing is dragged past the end: the `scene`'s end stays at 48 until the length makes room.
    drag(act, { type: "clip", id: "upstream:scene_a:scene", mode: "end" }, 22);
    assert.equal(Object.hasOwn(state.upstream[0].scene, "clip"), false);
    act({ type: "length", length: 200 });
    drag(act, { type: "clip", id: "upstream:scene_a:scene", mode: "end" }, 22);
    assert.deepEqual(state.upstream[0].scene, { clip: { start: 0, in: 0, duration: 70 } });
    assert.deepEqual(upstream.upstreamOutput().ends, [70]);
    assert.equal(timeline.timelineSpanFrames(), 200);
    // Back to Auto, the overridden end lengthens the output past the upstream Scene's.
    act({ type: "length", length: null });
    assert.equal(timeline.timelineSpanFrames(), 70);
    // The Clip range being dragged counts as one without a duration.
    assert.deepEqual(upstream.upstreamOutput(upstream.upstreamEntries()[0].working.sceneState.scene.clip).ends, []);
  } finally {
    restore();
  }
});

test("a result from before pano_upstream_frames gives the node's output length as the upstream Scene's", async () => {
  browserStubs();
  try {
    const { upstream } = await timelineOver({ pano_upstream_layers: [timedLayer()], pano_upstream_frames: undefined, pano_timeline_frames: [60] });
    assert.equal(upstream.upstreamOutput().frames, 60);
  } finally {
    restore();
  }
});

test("opening, showing the Timeline and closing over upstream rows writes nothing", async () => {
  browserStubs();
  try {
    const saved = { version: 2, id: "scene_c", timeline: { fps: 24 }, upstream: [{ layer: "scene_a", fps: 30, scene: { clip: { start: 3, in: 0, duration: 30 } } }] };
    const { state, timeline, upstream, act } = await timelineOver({ pano_upstream_layers: [timedLayer()] }, saved);
    const records = state.upstream;
    timeline.syncTimeline();
    act({ type: "toggle-row", id: "upstream:scene_a:sticker_1" });
    act({ type: "select-keys", owner: "upstream:scene_a:sticker_1", lane: null, frames: [0], additive: false });
    // A click on a Clip range (no movement) is no edit.
    drag(act, { type: "clip", id: "upstream:scene_a:sticker_1", mode: "move" }, 0);
    upstream.syncUpstreamEdits();
    assert.equal(state.upstream, records);
  } finally {
    restore();
  }
});

test("a port Sticker's bar without a duration ends with its media, the node's own and an upstream one's", async () => {
  browserStubs();
  try {
    const port = { id: "sticker_1", placement: "sky", source: { kind: "port" }, clip: { start: 4, in: 0 } };
    const ui = { pano_upstream_layers: [layer({ id: "scene_a", stickers: [port] }, portUi("a"))] };
    const saved = { version: 2, timeline: { fps: 24 }, stickers: [{ id: "own", source: { kind: "port" }, clip: { start: 6, in: 2 } }] };
    const meta = { kind: "VIDEO", fps: 30, frames: 90, duration: 3 };
    const { act, state, timeline, uiState } = await timelineOver(ui, saved, { getPortMediaMeta: () => meta });
    timeline.syncTimeline();
    const ends = () => [...uiState.timeline.rows, ...uiState.timeline.groups[0].rows].map((row) => [row.id, row.clip?.end ?? null]);
    // The own media ends at 6 - 2 + 3 s; the upstream one at 4 + 2 s. Neither runs to the Timeline's end.
    assert.deepEqual(ends(), [["own", 76], ["upstream:scene_a:sticker_1", 52]]);
    assert.equal(uiState.timeline.span, 76, "the own port media ends the output");
    // A trim of its end starts where its bar ends, and stops at the Timeline's end.
    drag(act, { type: "clip", id: "own", mode: "end" }, -10);
    assert.deepEqual(state.stickers[0].clip, { start: 6, in: 2, duration: 60 });
  } finally {
    restore();
  }
});

test("the playhead goes back onto the Timeline when the output gets shorter, so nothing is keyed past it", async () => {
  browserStubs();
  try {
    const seeks = [];
    const playback = { frame: 60, seek: (frame) => seeks.push(frame), stop: noop };
    const { act, timeline } = await timelineOver({ pano_upstream_layers: [timedLayer()] }, undefined, { playback });
    timeline.syncTimeline();
    assert.deepEqual(seeks, [47]);
    playback.frame = 20;
    act({ type: "length", length: 12 });
    // The editor's updateSidePanel syncs the Timeline after the edit.
    timeline.syncTimeline();
    assert.deepEqual(seeks, [47, 11]);
  } finally {
    restore();
  }
});

test("Keyframes past the output's end leave the selection: they are neither deleted nor dragged with the shown ones", async () => {
  browserStubs();
  try {
    const keys = [0, 80].map((frame) => ({ frame, value: 1 - frame / 100, easing: "linear" }));
    const saved = { version: 2, timeline: { fps: 24, length: 100 }, stickers: [sky("own", { opacity: { value: 1, keyframes: keys } })] };
    const frames = (state) => state.stickers[0].opacity.keyframes.map((key) => key.frame);
    const shorter = async () => {
      const editing = await timelineOver({ pano_upstream_layers: [timedLayer()] }, saved);
      editing.act({ type: "select-keys", owner: "own", lane: "opacity", frames: [0, 80], additive: false });
      editing.act({ type: "length", length: 10 });
      editing.timeline.syncTimeline();
      return editing;
    };
    // Only frame 80 selected: it leaves the selection, so Delete has nothing to delete.
    const alone = await timelineOver({ pano_upstream_layers: [timedLayer()] }, saved);
    alone.act({ type: "select-keys", owner: "own", lane: "opacity", frames: [80], additive: false });
    alone.act({ type: "length", length: 10 });
    alone.timeline.syncTimeline();
    assert.equal(alone.timelineState.selection, null);
    assert.deepEqual(frames(alone.state), [0, 80]);
    // Both selected: the drag moves only the shown one.
    const mixed = await shorter();
    assert.deepEqual(mixed.timelineState.selection.frames, [0]);
    drag(mixed.act, { type: "move-keys" }, 3);
    assert.deepEqual(frames(mixed.state), [3, 80]);
  } finally {
    restore();
  }
});

test("upstream Clip ranges keep their start and Keyframes stay inside the output when dragged, as the node's own", async () => {
  browserStubs();
  try {
    const ui = { pano_upstream_layers: [timedLayer()] };
    const { act, timeline, upstream } = await timelineOver(ui);
    // An open Clip range moved by 150 stops with its start on the last frame; it does not lengthen the output.
    drag(act, { type: "clip", id: "upstream:scene_a:sticker_1", mode: "move" }, 150);
    assert.equal(upstream.upstreamStickers()[0].clip.start, 47);
    assert.equal(timeline.timelineSpanFrames(), 48);
    // A Clip range whose overridden end would set a longer derived length stops at the current end: a drag
    // never lengthens the output.
    drag(act, { type: "clip", id: "upstream:scene_a:scene", mode: "move" }, 100);
    assert.deepEqual(upstream.upstreamEntries()[0].working.sceneState.scene.clip, { start: 0, in: 0, duration: 48 });
    assert.equal(timeline.timelineSpanFrames(), 48);
    // A Keyframe moved by 118 stops on the last frame (sticker_1 starts at 0).
    const { act: act2, timeline: timeline2, upstream: upstream2 } = await timelineOver(ui);
    act2({ type: "select-keys", owner: "upstream:scene_a:sticker_1", lane: "direction", frames: [12], additive: false });
    drag(act2, { type: "move-keys" }, 118);
    assert.deepEqual(upstream2.upstreamStickers()[0].direction.keyframes.map((key) => key.frame), [0, 47]);
    assert.equal(timeline2.timelineSpanFrames(), 48);
  } finally {
    restore();
  }
});

test("the header of an upstream group restores the layer's deleted elements and reverts its scene and paint, each as one Undo step", async () => {
  browserStubs();
  try {
    const saved = {
      version: 2,
      timeline: { fps: 24 },
      upstream: [{ layer: "scene_a", fps: 24, deleted: ["sticker_2", "gone"], stickers: [{ id: "sticker_1", placement: "sky", visible: false }], scene: { visible: false }, painting_visible: true }],
    };
    const { act, state, steps, timeline, uiState, upstream } = await timelineOver({ pano_upstream_layers: [timedLayer(), layer({ stickers: [sky("sticker_1")] })] }, saved);
    timeline.syncTimeline();
    const [group, inherited] = uiState.timeline.groups;
    // Only a deleted element the layer still has is counted.
    assert.deepEqual([group.restore, group.revert], [{ label: "Restore deleted (1)", disabled: false }, { disabled: false }]);
    assert.deepEqual([inherited.restore.disabled, inherited.revert.disabled], [true, true]);
    act({ type: "revert-upstream-layer", key: "scene_a" });
    assert.equal(steps.count, 1);
    assert.deepEqual(state.upstream[0].scene, {});
    assert.equal(Object.hasOwn(state.upstream[0], "painting_visible"), false);
    assert.equal(upstream.upstreamEntries()[0].working.sceneState.scene.visible, true);
    assert.equal(upstream.upstreamEntries()[0].working.sceneState.painting_visible, false);
    assert.equal(uiState.timeline.groups[0].revert.disabled, true);
    act({ type: "restore-upstream-deleted", key: "scene_a" });
    assert.equal(steps.count, 2);
    assert.deepEqual(state.upstream[0].deleted, []);
    assert.equal(upstream.upstreamEntries()[0].working.sceneState.stickers.length, 2);
    assert.equal(uiState.timeline.groups[0].restore.disabled, true);
    // Nothing more to do, and an inherited layer: no step.
    act({ type: "revert-upstream-layer", key: "scene_a" });
    act({ type: "restore-upstream-deleted", key: "scene_a" });
    act({ type: "restore-upstream-deleted", key: "#1" });
    assert.equal(steps.count, 2);
  } finally {
    restore();
  }
});

test("the Keyframe offset of a row without an owner (the painting's) is 0", async () => {
  browserStubs();
  try {
    const { timeline } = await timelineOver({ pano_upstream_layers: [timedLayer()] });
    assert.equal(timeline.timelineOffset("painting"), 0);
    assert.equal(timeline.timelineOffset("upstream:scene_a:painting"), 0);
  } finally {
    restore();
  }
});

test("the Easing panel shows only for Keyframes the Timeline can change", async () => {
  browserStubs();
  try {
    const { act, uiState } = await timelineOver({ pano_upstream_layers: [timedLayer(), layer({ ...timedLayer().state, id: undefined })] });
    act({ type: "select-keys", owner: "upstream:scene_a:sticker_1", lane: "direction", frames: [0], additive: false });
    assert.notEqual(uiState.easing, null);
    act({ type: "select-keys", owner: "upstream:#1:sticker_1", lane: "direction", frames: [0], additive: false });
    assert.equal(uiState.easing, null);
  } finally {
    restore();
  }
});
