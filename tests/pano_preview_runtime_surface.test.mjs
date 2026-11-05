// Characterization of the node surface in web_src/pano_preview_runtime.js (attachPanoramaPreviewImpl), driven only
// through its exports with fake nodes, DOM and ComfyUI (tests/node_surface_fakes.mjs). These pin today's behaviour so the
// closure can be split into node_surface/*.js without editing the tests (Issue #135, stage 0).
import assert from "node:assert/strict";
import test from "node:test";

import {
  apiListeners,
  createFakeNode,
  fakeApp,
  resizeObservers,
  runFrames,
  surfaceElements,
  widgetOf,
  windowListeners,
} from "./node_surface_fakes.mjs";

const runtime = await import("../web_src/pano_preview_runtime.js");
const { editorSession, mediaCache, nodeSurface, stateSync } = await import("../web_src/pano_node_bridge.js");
const { LEGACY_BACKGROUND_COLOR } = await import("../web_src/pano_editor_state.js");

// Every attached node is torn down after its test, also when the test failed before doing it, so one failure does not
// leave listeners or a playing surface behind for the next tests.
const attached = new Set();
const attachPanoramaPreview = (node, options) => {
  attached.add(node);
  return runtime.attachPanoramaPreview(node, options);
};
const attachCutoutPreview = (node, options) => {
  attached.add(node);
  return runtime.attachCutoutPreview(node, options);
};
test.afterEach(() => {
  for (const node of attached) {
    editorSession(node).open = false;
    // Still attached: the surface's onRemoved tears it down (and stops the executed listener).
    if (nodeSurface(node).dom) node.onRemoved?.();
    nodeSurface(node).restore?.();
    delete fakeApp.nodeOutputs[String(node.id)];
  }
  attached.clear();
});

const STUDIO = "PanoramaStudio";
const LEGACY = "PanoramaStickers";
const CUTOUT = "PanoramaCutout";
const VIDEO = (filename) => ({ filename, subfolder: "", type: "temp", format: "video/mp4" });

function studioNode({ state = { version: 2 }, output = null, widgets = {} } = {}) {
  const node = createFakeNode({
    type: STUDIO,
    studio: true,
    widgets: { state_json: JSON.stringify(state), background_color: "#112233", background_range: 360, ...widgets },
  });
  if (output) fakeApp.nodeOutputs[String(node.id)] = output;
  return node;
}

// Attaches a Panorama Studio surface, shows it (in the page, with a size), and records what each sync gives the
// playback's follow(); `answer` replaces follow()'s return when given.
function attachStudio(node, { answer } = {}) {
  attachPanoramaPreview(node, {});
  runFrames();
  const { root, wrap, canvas } = surfaceElements(node);
  root.connected = true;
  wrap.clientWidth = 320;
  wrap.clientHeight = 200;
  const surface = nodeSurface(node);
  const playback = surface.playback.playback;
  const follows = [];
  const original = playback.follow;
  playback.follow = function (args) {
    follows.push(args);
    const out = original.call(this, args);
    return answer === undefined ? out : answer;
  };
  const observer = resizeObservers.find((entry) => entry.targets.has(wrap));
  const sync = () => {
    observer.trigger();
    return follows.at(-1);
  };
  return { surface, root, wrap, canvas, follows, sync, model: () => surface.stickers.model };
}

function detach(node) {
  node.onRemoved?.();
  delete fakeApp.nodeOutputs[String(node.id)];
}

// --- Hooks -------------------------------------------------------------------------------------------------------

const HOOKS = ["onExecuted", "onConnectionsChange", "onResize", "onRemoved", "onDragOver", "onDragDrop"];

function previousHooks(node, answers = {}) {
  const calls = [];
  for (const name of HOOKS) {
    node[name] = function (...args) {
      calls.push({ name, self: this, args });
      return name in answers ? answers[name] : `${name}-out`;
    };
  }
  return { calls, hooks: Object.fromEntries(HOOKS.map((name) => [name, node[name]])) };
}

test("the legacy Stickers surface wraps every node hook, calls the previous one with the node and its arguments, and returns its answer", async () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "", bg_color: "#000000" } });
  const { calls, hooks } = previousHooks(node);
  attachPanoramaPreview(node, {});
  for (const name of HOOKS) assert.notEqual(node[name], hooks[name], `${name} is wrapped`);

  const output = { ui: {} };
  assert.equal(node.onExecuted(output), "onExecuted-out");
  assert.equal(node.onConnectionsChange(1, 0, true), "onConnectionsChange-out");
  assert.equal(node.onResize([10, 20]), "onResize-out");
  assert.deepEqual(calls.map(({ name, self, args }) => [name, self === node, args]), [
    ["onExecuted", true, [output]],
    ["onConnectionsChange", true, [1, 0, true]],
    ["onResize", true, [[10, 20]]],
  ]);
  await Promise.resolve();

  // A previous drag hook that takes the drag wins; the surface's own answer otherwise.
  calls.length = 0;
  const image = { dataTransfer: { items: [{ kind: "file", type: "image/png" }], files: [] } };
  assert.equal(node.onDragOver(image), true);
  assert.equal(node.onDragDrop({ dataTransfer: { files: [] } }), false);
  assert.deepEqual(calls.map(({ name, self }) => [name, self === node]), [["onDragOver", true], ["onDragDrop", true]]);

  calls.length = 0;
  assert.equal(node.onRemoved(), "onRemoved-out");
  assert.deepEqual(calls.map(({ name, self }) => [name, self === node]), [["onRemoved", true]]);
  for (const name of HOOKS) assert.equal(node[name], hooks[name], `${name} is restored`);
  assert.equal(nodeSurface(node).dom, null);
});

test("a previous drag hook that answers true decides the drag; otherwise the surface takes an image file and shows its drop cue", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  const { calls } = previousHooks(node, { onDragOver: false, onDragDrop: true });
  attachPanoramaPreview(node, {});
  const model = nodeSurface(node).stickers.model;

  assert.equal(node.onDragOver({ dataTransfer: { items: [{ kind: "string", type: "text/plain" }] } }), false);
  assert.equal(model.dropActive, false);
  assert.equal(calls.filter(({ name }) => name === "onDragOver").length, 1);
  detach(node);
});

test("a previous drag-over hook that answers true takes the drag even without an image file", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  previousHooks(node, { onDragOver: true });
  attachPanoramaPreview(node, {});
  const model = nodeSurface(node).stickers.model;
  assert.equal(node.onDragOver({ dataTransfer: { items: [{ kind: "string", type: "text/plain" }] } }), true);
  assert.equal(model.dropActive, false);
  detach(node);
});

test("an image drag over the surface shows its drop cue when the previous hook does not take it", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  const { calls } = previousHooks(node, { onDragOver: false, onDragDrop: true });
  attachPanoramaPreview(node, {});
  const model = nodeSurface(node).stickers.model;
  assert.equal(node.onDragOver({ dataTransfer: { items: [{ kind: "file", type: "image/png" }] } }), true);
  assert.equal(model.dropActive, true);
  // The previous drop hook took it: the surface does not.
  assert.equal(node.onDragDrop({ dataTransfer: { files: [{ name: "a.png", type: "image/png" }] } }), true);
  assert.equal(model.importing, false);
  assert.equal(calls.filter(({ name }) => name === "onDragDrop").length, 1);
  detach(node);
});

test("without previous hooks the surface installs its own and teardown leaves the node without them", async () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  for (const name of HOOKS) assert.equal(typeof node[name], "function", `${name} is installed`);
  assert.equal(node.onExecuted({ ui: {} }), undefined);
  assert.equal(node.onConnectionsChange(1, 0), undefined);
  assert.equal(node.onResize(), undefined);
  await Promise.resolve();
  assert.equal(node.onRemoved(), undefined);
  for (const name of HOOKS) assert.equal(node[name], undefined, `${name} is gone`);
});

test("teardown restores only the hooks that are still the surface's", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  const { hooks } = previousHooks(node);
  attachPanoramaPreview(node, {});
  const laterResize = () => "later";
  node.onResize = laterResize;
  node.onRemoved();
  assert.equal(node.onResize, laterResize);
  for (const name of HOOKS.filter((entry) => entry !== "onResize")) assert.equal(node[name], hooks[name]);
});

test("Panorama Studio and the Cutout surface do not take drags: only onExecuted, onConnectionsChange, onResize and onRemoved are wrapped", () => {
  for (const [node, attach] of [
    [studioNode(), attachPanoramaPreview],
    [createFakeNode({ type: CUTOUT, widgets: { state_json: "" } }), attachCutoutPreview],
  ]) {
    const { hooks } = previousHooks(node);
    attach(node, {});
    assert.equal(nodeSurface(node).mode, attach === attachCutoutPreview ? "cutout" : "stickers");
    for (const name of ["onExecuted", "onConnectionsChange", "onResize", "onRemoved"]) assert.notEqual(node[name], hooks[name], name);
    assert.equal(node.onDragOver, hooks.onDragOver);
    assert.equal(node.onDragDrop, hooks.onDragDrop);
    node.onRemoved();
    for (const name of HOOKS) assert.equal(node[name], hooks[name], name);
  }
});

test("attaching again on the same route does not wrap the hooks twice", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  const wrapped = Object.fromEntries(HOOKS.map((name) => [name, node[name]]));
  const opened = [];
  attachPanoramaPreview(node, { onOpen: () => opened.push(1) });
  for (const name of HOOKS) assert.equal(node[name], wrapped[name], name);
  // The second attach only takes the new Open callback.
  nodeSurface(node).openEditor();
  assert.deepEqual(opened, [1]);
  detach(node);
});

test("onResize marks the node resized by the user; onExecuted marks the output as a run's and clears the built-in preview images", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  assert.notEqual(nodeSurface(node).userResized, true);
  node.onResize();
  assert.equal(nodeSurface(node).userResized, true);

  node.imgs = [{}, {}];
  node.onExecuted({ ui: {} });
  assert.equal(mediaCache(node).outputFromRun, true);
  assert.deepEqual(node.imgs, []);
  detach(node);
});

test("onConnectionsChange calls the previous hook before the surface refreshes, then refreshes again in a microtask", async () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  const order = [];
  node.onConnectionsChange = () => {
    order.push("previous");
  };
  attachPanoramaPreview(node, {});
  node.imgs = [{}];
  node.onConnectionsChange(1, 0, true);
  order.push(node.imgs.length === 0 ? "refreshed" : "not refreshed");
  node.imgs = [{}];
  await Promise.resolve();
  order.push(node.imgs.length === 0 ? "refreshed again" : "not refreshed again");
  assert.deepEqual(order, ["previous", "refreshed", "refreshed again"]);
  detach(node);
});

test("the watched widgets' callbacks are chained (the previous runs with its this and arguments) and restored on teardown", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "", bg_color: "#000000", coverage: 360 } });
  const calls = [];
  const original = function (...args) {
    calls.push([this, ...args]);
    return "kept";
  };
  widgetOf(node, "state_json").callback = original;
  widgetOf(node, "coverage").callback = original;
  attachPanoramaPreview(node, {});
  const stateWidget = widgetOf(node, "state_json");
  assert.notEqual(stateWidget.callback, original);
  // The legacy surface watches state_json, background_color and bg_color, not coverage.
  assert.equal(widgetOf(node, "coverage").callback, original);
  assert.equal(typeof widgetOf(node, "bg_color").callback, "function");
  assert.equal(stateWidget.callback.call(stateWidget, "{}", "x"), "kept");
  assert.deepEqual(calls, [[stateWidget, "{}", "x"]]);
  node.onRemoved();
  assert.equal(stateWidget.callback, original);
  assert.equal(widgetOf(node, "bg_color").callback, undefined);
});

test("Panorama Studio watches its size and background widgets too", () => {
  const node = studioNode({ widgets: { megapixels: 1, multiple: 16 } });
  attachPanoramaPreview(node, {});
  for (const name of ["state_json", "background_color", "background_range", "megapixels", "multiple"]) {
    assert.equal(typeof widgetOf(node, name).callback, "function", name);
  }
  detach(node);
  for (const name of ["state_json", "background_color", "background_range", "megapixels", "multiple"]) {
    assert.equal(widgetOf(node, name).callback, undefined, name);
  }
});

test("the surface listens for window keydown and ComfyUI's executed events while attached, and stops on teardown", () => {
  const keydownBefore = windowListeners.get("keydown")?.size ?? 0;
  // pano_preview_video.js trackRunOutputs listens for executed from the runtime's load on.
  const executedBefore = apiListeners.get("executed")?.size ?? 0;
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  assert.equal(windowListeners.get("keydown").size, keydownBefore + 1);
  assert.equal(apiListeners.get("executed").size, executedBefore + 1);
  const { canvas } = surfaceElements(node);
  assert.ok(canvas.listenerCount("lostpointercapture") > 0);
  node.onRemoved();
  assert.equal(windowListeners.get("keydown").size, keydownBefore);
  assert.equal(apiListeners.get("executed").size, executedBefore);
  assert.equal(canvas.listenerCount("lostpointercapture"), 0);
});

test("teardown disconnects the resize observer and removes the DOM widget", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  const { widget, wrap } = surfaceElements(node);
  const observer = resizeObservers.find((entry) => entry.targets.has(wrap));
  assert.ok(node.widgets.includes(widget));
  assert.equal(nodeSurface(node).dom.widget, widget);
  node.onRemoved();
  assert.equal(observer.disconnected, true);
  assert.equal(nodeSurface(node).dom, null);
  assert.equal(nodeSurface(node).restore, null);
});

// --- getCachedState ----------------------------------------------------------------------------------------------

test("the legacy surface parses state_json with the node's bg_color and coverage, falling back to the defaults", () => {
  const cases = [
    [{ state_json: "not json", bg_color: "#abcdef", coverage: 180 }, { bg_color: "#abcdef", coverage: 180, stickers: [], shots: [] }],
    // Without a bg_color widget (the legacy Cutout has none) the legacy nodes' default shows, as in the old editor.
    [{ state_json: "" }, { bg_color: LEGACY_BACKGROUND_COLOR, coverage: 360, stickers: [], shots: [] }],
    // The node's bg_color widget wins over the state's (as in the editor); here there is none, so the default shows.
    [{ state_json: JSON.stringify({ coverage: 180, stickers: "x", shots: [], bg_color: "#010203" }), coverage: 360 }, { bg_color: LEGACY_BACKGROUND_COLOR, coverage: 360, stickers: [], shots: [] }],
  ];
  for (const [widgets, expected] of cases) {
    const node = createFakeNode({ type: LEGACY, widgets });
    attachPanoramaPreview(node, {});
    const cache = stateSync(node).parsedState;
    const { parsed } = cache;
    assert.equal(cache.source, String(widgets.state_json));
    for (const [key, value] of Object.entries(expected)) assert.deepEqual(parsed[key], value, `${JSON.stringify(widgets)} ${key}`);
    assert.equal(parsed.version, 1);
    assert.equal(parsed.projection_model, "pinhole_rectilinear");
    assert.deepEqual(parsed.active, { selected_sticker_id: null, selected_shot_id: null });
    detach(node);
  }
});

test("the legacy Stickers and Cutout surfaces read state_json as the editor does (parsePanoEditorState)", async () => {
  const { parsePanoEditorState } = await import("../web_src/pano_editor_state.js");
  const text = JSON.stringify({
    output_preset: 1024,
    stickers: [{ id: "a", visible: 0, locked: "yes" }, { id: "b" }],
    shots: [{ id: "s", yaw_deg: 10, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, vFOV_deg: 40, out_w: 512, out_h: 256, locked: 1 }],
    painting: { paint: { strokes: "x" } },
  });
  for (const type of [LEGACY, CUTOUT]) {
    const node = createFakeNode({ type, widgets: { state_json: text, bg_color: "#abcdef", coverage: 180, output_preset: "2048" } });
    attachPanoramaPreview(node, {});
    const { parsed } = stateSync(node).parsedState;
    const editor = parsePanoEditorState(text, { outputPreset: "2048", backgroundColor: "#abcdef", coverage: 180, sharedUiSettings: null });
    assert.deepEqual(parsed, editor, type);
    assert.deepEqual(parsed.stickers.map((item) => [item.visible, item.locked]), [[true, false], [true, false]]);
    assert.equal("out_w" in parsed.shots[0], false);
    detach(node);
  }
  // The legacy Cutout has no bg_color widget: the surface, the old editor and a new frame use the one default.
  const cutout = createFakeNode({ type: CUTOUT, widgets: { state_json: text, coverage: 360 } });
  attachPanoramaPreview(cutout, {});
  assert.equal(stateSync(cutout).parsedState.parsed.bg_color, LEGACY_BACKGROUND_COLOR);
  assert.equal(parsePanoEditorState(text).bg_color, LEGACY_BACKGROUND_COLOR);
  detach(cutout);
});

test("the legacy surface reads the live state before state_json", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: JSON.stringify({ shots: [{ id: "widget" }] }) } });
  stateSync(node).liveState = JSON.stringify({ shots: [{ id: "live" }] });
  attachPanoramaPreview(node, {});
  assert.deepEqual(stateSync(node).parsedState.parsed.shots.map((shot) => shot.id), ["live"]);
  detach(node);
});

test("Panorama Studio's state is parsed once and reused while its source, live version, background color and range stay the same", () => {
  const node = studioNode({ state: { version: 2, timeline: { fps: 24 } } });
  const { sync } = attachStudio(node);
  const first = sync().state;
  assert.equal(first.version, 2);
  assert.equal(first.timeline.fps, 24);
  assert.equal(first.coverage, 360);
  assert.equal(stateSync(node).parsedState.parsed, first);
  assert.equal(sync().state, first, "nothing changed: the parsed state is reused");

  const stateWidget = widgetOf(node, "state_json");
  stateWidget.value = JSON.stringify({ version: 2, timeline: { fps: 30 } });
  const second = sync().state;
  assert.notEqual(second, first, "state_json changed");
  assert.equal(second.timeline.fps, 30);
  assert.equal(sync().state, second);

  widgetOf(node, "background_color").value = "#445566";
  const third = sync().state;
  assert.notEqual(third, second, "background_color changed");
  assert.equal(stateSync(node).parsedState.bg, "#445566");

  widgetOf(node, "background_range").value = 180;
  const fourth = sync().state;
  assert.notEqual(fourth, third, "background_range changed");
  assert.equal(fourth.coverage, 180);
  assert.equal(sync().state, fourth);

  stateSync(node).liveStateVersion += 1;
  const fifth = sync().state;
  assert.notEqual(fifth, fourth, "the live state version changed");
  assert.equal(sync().state, fifth);
  detach(node);
});

test("Panorama Studio's live state replaces state_json as the source, and its removal goes back to state_json", () => {
  const node = studioNode({ state: { version: 2, timeline: { fps: 24 } } });
  const { sync } = attachStudio(node);
  const fromWidget = sync().state;
  const live = { version: 2, timeline: { fps: 12 } };
  stateSync(node).liveState = JSON.stringify(live);
  const fromLive = sync().state;
  assert.notEqual(fromLive, fromWidget);
  assert.equal(stateSync(node).parsedState.source, JSON.stringify(live));
  assert.equal(fromLive.timeline.fps, 12);
  assert.equal(sync().state, fromLive);

  stateSync(node).liveState = null;
  const back = sync().state;
  assert.notEqual(back, fromLive);
  assert.equal(back.timeline.fps, 24);
  detach(node);
});

test("a cleared cache is parsed again", () => {
  const node = studioNode();
  const { sync } = attachStudio(node);
  const first = sync().state;
  stateSync(node).parsedState = null;
  const second = sync().state;
  assert.notEqual(second, first);
  assert.deepEqual(second.timeline, first.timeline);
  detach(node);
});

// --- syncSurfacePlayback -----------------------------------------------------------------------------------------

test("a shown Panorama Studio surface follows with its background VIDEO candidates, its port Sticker and its Timeline media", () => {
  const node = studioNode({ output: { ui: { pano_input_video_meta: [{ frames: 48, duration: 2 }], pano_input_videos: [VIDEO("bg.mp4")] } } });
  const { sync } = attachStudio(node);
  const args = sync();
  assert.equal(args.shown, true);
  assert.deepEqual(args.sources, ["/view?filename=bg.mp4&type=temp", ""]);
  assert.equal(args.sticker, null);
  assert.deepEqual(args.media.bg, { video: false, frames: 48, duration: 2 });
  detach(node);
});

test("collapsed, under its open editor, out of the page or without a width, the surface follows hidden and lets its inputs go", () => {
  const hide = {
    collapsed: (node) => {
      node.flags.collapsed = true;
    },
    editor: (node) => {
      editorSession(node).open = true;
    },
    detached: (_node, parts) => {
      parts.root.connected = false;
    },
    narrow: (_node, parts) => {
      parts.wrap.clientWidth = 0;
    },
  };
  for (const [name, apply] of Object.entries(hide)) {
    const node = studioNode({ output: { ui: { pano_input_videos: [VIDEO("bg.mp4")], pano_sticker_input_video_meta: [{ frames: 3 }], pano_sticker_input_videos: [VIDEO("p.mp4")] } } });
    const parts = attachStudio(node, { answer: true });
    assert.equal(parts.sync().shown, true, name);
    assert.equal(parts.model().playable, true, name);
    let released = 0;
    const inputs = parts.surface.studioInputs;
    const release = inputs.release;
    inputs.release = function () {
      released += 1;
      return release.call(this);
    };
    apply(node, parts);
    const args = parts.sync();
    assert.equal(args.shown, false, name);
    assert.deepEqual(args.sources, [], name);
    assert.equal(args.sticker, null, name);
    assert.deepEqual(args.media, {}, name);
    assert.ok(released >= 1, `${name}: released`);
    editorSession(node).open = false;
    detach(node);
  }
});

test("shown again, the surface follows its media again", () => {
  const node = studioNode({ output: { ui: { pano_input_videos: [VIDEO("bg.mp4")] } } });
  const parts = attachStudio(node);
  node.flags.collapsed = true;
  assert.equal(parts.sync().shown, false);
  node.flags.collapsed = false;
  const args = parts.sync();
  assert.equal(args.shown, true);
  assert.deepEqual(args.sources, ["/view?filename=bg.mp4&type=temp", ""]);
  detach(node);
});

test("the surface model's playable is follow()'s answer and playing is the playback's", () => {
  for (const answer of [true, false]) {
    const node = studioNode();
    const parts = attachStudio(node, { answer });
    parts.sync();
    assert.equal(parts.model().playable, answer);
    assert.equal(parts.model().playing, parts.surface.playback.playback.playing);
    detach(node);
  }
});

test("only a state v2 node plays on its surface: the legacy Stickers and Cutout surfaces have no playback", () => {
  const legacy = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(legacy, {});
  assert.ok(!nodeSurface(legacy).playback);
  detach(legacy);
  const cutout = createFakeNode({ type: CUTOUT, widgets: { state_json: "" } });
  attachCutoutPreview(cutout, {});
  assert.ok(!nodeSurface(cutout).playback);
  detach(cutout);
});

test("teardown disposes the playback and the Studio inputs", () => {
  const node = studioNode();
  const parts = attachStudio(node);
  const playback = parts.surface.playback;
  let disposed = 0;
  const dispose = parts.surface.studioInputs.dispose;
  parts.surface.studioInputs.dispose = function () {
    disposed += 1;
    return dispose.call(this);
  };
  node.onRemoved();
  assert.equal(disposed, 1);
  assert.equal(parts.surface.playback, null);
  assert.equal(parts.surface.studioInputs, null);
  assert.equal(playback.video.parentElement, null);
  assert.equal(playback.stickerVideo.parentElement, null);
});

// --- surfaceTimelineMedia ----------------------------------------------------------------------------------------

test("surfaceTimelineMedia for typical results", () => {
  const cases = [
    ["no result", null, { version: 2 }, { port: null, sceneItems: 0, animations: { scene: null, stickers: {} } }],
    [
      "the background VIDEO's meta",
      { ui: { pano_input_video_meta: [{ frames: 48, duration: 2 }], pano_input_videos: [VIDEO("bg.mp4")] } },
      { version: 2 },
      { bg: { video: false, frames: 48, duration: 2 }, port: null, sceneItems: 0, animations: { scene: null, stickers: {} } },
    ],
    [
      "the scene files and their clips",
      { ui: { pano_scene_files: [{ filename: "a.glb" }, { filename: "b.glb" }], pano_scene_meta: [{ animation: { clips: [{ name: "Walk", duration: 1.5 }] } }] } },
      { version: 2 },
      { port: null, sceneItems: 2, animations: { scene: [{ name: "Walk", duration: 1.5 }], stickers: {} } },
    ],
    [
      "the port Sticker's MP4",
      { ui: { pano_sticker_input_video_meta: [{ kind: "VIDEO", frames: 30, fps: 24, duration: 1.25 }], pano_sticker_input_videos: [VIDEO("p.mp4")] } },
      { version: 2, stickers: [{ id: "p", source: { kind: "port" } }] },
      { port: { kind: "VIDEO", frames: 30, fps: 24, duration: 1.25 }, sceneItems: 0, animations: { scene: null, stickers: {} } },
    ],
    [
      "the port Sticker's IMAGE batch",
      { ui: { pano_sticker_files: [{ filename: "1.png" }, { filename: "2.png" }, { filename: "3.png" }] } },
      { version: 2 },
      { port: { kind: "IMAGE", frames: 3 }, sceneItems: 0, animations: { scene: null, stickers: {} } },
    ],
    [
      "upstream layers",
      { ui: { pano_upstream_layers: [{ kind: "background" }] } },
      { version: 2 },
      { port: null, upstream: { frames: 0, ends: [] }, animations: { scene: null, stickers: {} } },
    ],
  ];
  for (const [name, output, state, expected] of cases) {
    const node = studioNode({ state, output });
    const { sync } = attachStudio(node);
    assert.deepEqual(sync().media, expected, name);
    detach(node);
  }
});

test("the port Sticker's MP4 is followed as the sticker media", () => {
  const meta = { kind: "VIDEO", frames: 30, fps: 24, duration: 1.25 };
  const node = studioNode({
    state: { version: 2, stickers: [{ id: "p", source: { kind: "port" } }] },
    output: { ui: { pano_sticker_input_video_meta: [meta], pano_sticker_input_videos: [VIDEO("p.mp4")] } },
  });
  const { sync } = attachStudio(node);
  assert.deepEqual(sync().sticker, { src: "/view?filename=p.mp4&type=temp", meta });
  detach(node);
});

test("the port Sticker's 3D clips count in the animations", () => {
  const clips = [{ name: "Spin", duration: 2 }];
  const node = studioNode({
    state: { version: 2, stickers: [{ id: "p", source: { kind: "port" } }] },
    output: { ui: { pano_sticker_meta: [{ animation: { clips } }] } },
  });
  const { sync } = attachStudio(node);
  const { animations } = sync().media;
  assert.equal(animations.scene, null);
  assert.deepEqual(animations, { scene: null, stickers: animations.stickers });
  assert.deepEqual(Object.values(animations.stickers), [clips]);
  detach(node);
});

// One rule, one owner (pano_comfy_media.js resultUiList): the node surface reads a result's `ui` lists as the editor
// does. A `ui` whose value under the key is not a list falls back to the result's own list (it gave [] before).
test("the node surface reads a result's ui list as the media adapter does", async () => {
  const { ownOutputUiList } = await import("../web_src/node_surface/media.js");
  const node = createFakeNode({ type: STUDIO, studio: true });
  fakeApp.nodeOutputs[String(node.id)] = { ui: { pano_timeline_fps: 12, pano_timeline_frames: [5] }, pano_timeline_fps: [30], pano_timeline_frames: [9] };
  try {
    assert.deepEqual(ownOutputUiList(node, "pano_timeline_fps"), [30]);
    assert.deepEqual(ownOutputUiList(node, "pano_timeline_frames"), [5]);
    assert.deepEqual(ownOutputUiList(node, "pano_missing"), []);
  } finally {
    delete fakeApp.nodeOutputs[String(node.id)];
  }
});

// docs/legacy-node-surfaces.md: the legacy nodes never use `curve`; their surfaces draw a v1 shot or Sticker as a pinhole,
// as Python's legacy output does.
test("a legacy node surface reads a v1 state's shots and Stickers without their curve", async () => {
  const { getCachedState } = await import("../web_src/node_surface/state.js");
  const shot = { id: "shot", yaw_deg: -30, pitch_deg: 5, roll_deg: 0, hFOV_deg: 90, vFOV_deg: 60 };
  const sticker = { id: "s", asset_id: "a", yaw_deg: 20, pitch_deg: 10, rot_deg: 0, hFOV_deg: 70, vFOV_deg: 50 };
  const node = createFakeNode({
    type: CUTOUT,
    widgets: { state_json: JSON.stringify({ version: 1, shots: [{ ...shot, curve: 0.5 }], stickers: [{ ...sticker, curve: 0.5, initial_pose: { ...sticker, curve: 0.5 } }] }) },
  });
  const pinhole = createFakeNode({
    type: CUTOUT,
    widgets: { state_json: JSON.stringify({ version: 1, shots: [shot], stickers: [{ ...sticker, initial_pose: { ...sticker } }] }) },
  });
  const state = getCachedState(node);
  const expected = getCachedState(pinhole);
  assert.deepEqual(state.shots, expected.shots);
  assert.deepEqual(state.stickers, expected.stickers);
});

// The surface takes away only its own DOM widget: the names older ComfyUI frontends used are not looked for.
test("teardown removes the surface's DOM widget and leaves a widget of an old frontend's name", () => {
  const node = createFakeNode({ type: LEGACY, widgets: { state_json: "" } });
  attachPanoramaPreview(node, {});
  const own = nodeSurface(node).dom.widget;
  const old = { name: "pano_preview", type: "pano_preview" };
  node.widgets.push(old);
  nodeSurface(node).controller.teardown();
  assert.equal(node.widgets.includes(own), false);
  assert.equal(node.widgets.includes(old), true);
});
