import assert from "node:assert/strict";
import test from "node:test";

import {
  BACKGROUND_INPUT_NAMES,
  STICKER_INPUT_NAMES,
  createLoopingPreviewVideo,
  isNodeOutputMediaCurrent,
  isRepeatedOutput,
  isTrackedMediaInputConnectionChange,
  isVideoFile,
  outputSourceToken,
  sourceNodeIds,
  resolvePreviewVideoSource,
  restoreLoadedNodeOutput,
  setNodeOutputLookup,
  trackRunOutputs,
  videoLinked,
  workflowInputOrigins,
} from "../web_src/pano_preview_video.js";

class FakeVideo {
  constructor() {
    this.listeners = new Map();
    this.paused = true;
    this.ended = false;
    this.playCalls = 0;
    this.pauseCalls = 0;
    this.loadCalls = 0;
    this.frameCallbacks = new Map();
    this.nextFrameCallbackId = 0;
    this.cancelledFrameCallbacks = [];
  }

  addEventListener(name, listener) {
    if (!this.listeners.has(name)) this.listeners.set(name, new Set());
    this.listeners.get(name).add(listener);
  }

  removeEventListener(name, listener) {
    this.listeners.get(name)?.delete(listener);
  }

  dispatch(name) {
    for (const listener of [...(this.listeners.get(name) || [])]) listener();
  }

  play() {
    this.playCalls += 1;
    this.paused = false;
    this.dispatch("play");
    return Promise.resolve();
  }

  pause() {
    this.pauseCalls += 1;
    this.paused = true;
    this.dispatch("pause");
  }

  load() {
    this.loadCalls += 1;
  }

  requestVideoFrameCallback(callback) {
    this.nextFrameCallbackId += 1;
    this.frameCallbacks.set(this.nextFrameCallbackId, callback);
    return this.nextFrameCallbackId;
  }

  cancelVideoFrameCallback(id) {
    this.cancelledFrameCallbacks.push(id);
    this.frameCallbacks.delete(id);
  }

  removeAttribute(name) {
    if (name === "src") this.src = "";
  }
}

test("Cutout selects its input ERP video instead of its rectilinear output video", () => {
  const output = {
    ui: {
      pano_input_videos: [{ filename: "erp-input.mp4", type: "temp", format: "video/mp4" }],
      pano_videos: [{ filename: "rect-output.mp4", type: "temp", format: "video/mp4" }],
    },
  };
  const source = (entry) => entry ? `/view/${entry.filename}` : "";

  assert.equal(
    resolvePreviewVideoSource(output, ["pano_input_videos"], source),
    "/view/erp-input.mp4",
  );
  assert.equal(
    resolvePreviewVideoSource(output, ["pano_videos"], source),
    "/view/rect-output.mp4",
  );
});

test("node preview video autoplays muted in a loop and publishes every presented frame", async () => {
  const video = new FakeVideo();
  let presentedFrames = 0;
  const player = createLoopingPreviewVideo({
    documentRef: { createElement: () => video },
    src: "/view/erp-input.mp4",
    onFrame: () => { presentedFrames += 1; },
  });

  assert.equal(player.video, video);
  assert.equal(video.muted, true);
  assert.equal(video.loop, true);
  assert.equal(video.autoplay, true);
  assert.equal(video.playsInline, true);
  assert.equal(video.src, "/view/erp-input.mp4");
  assert.equal(video.loadCalls, 1);

  video.dispatch("canplay");
  await Promise.resolve();
  assert.equal(video.playCalls, 1);
  assert.equal(video.frameCallbacks.size, 1);

  const callback = [...video.frameCallbacks.values()][0];
  video.frameCallbacks.clear();
  callback();
  assert.ok(presentedFrames >= 2);
  assert.equal(video.frameCallbacks.size, 1);

  const framesBeforeDestroy = presentedFrames;
  player.destroy();
  assert.equal(video.paused, true);
  assert.equal(video.src, "");
  assert.equal(video.frameCallbacks.size, 0);
  assert.equal(presentedFrames, framesBeforeDestroy);
});

// A PanoramaStickersNode in a graph whose links are { link id: [origin node id, origin slot] }.
function graphNode(links, inputLinks, { id = 9, graphId = "wf-1" } = {}) {
  const graph = { id: graphId, links: new Map(Object.entries(links).map(([linkId, [origin, slot]]) => [Number(linkId), { origin_id: origin, origin_slot: slot }])) };
  return {
    id,
    comfyClass: "PanoramaStickersNode",
    graph,
    inputs: ["bg_media", "scene", "sticker"].map((name) => ({ name, link: inputLinks[name] ?? null })),
    getInputLink(slot) {
      return this.graph.links.get(this.inputs[slot].link) || null;
    },
  };
}

function rewire(node, name, origin, slot = 0) {
  const id = Math.max(0, ...node.graph.links.keys()) + 1;
  node.graph.links.set(id, { origin_id: origin, origin_slot: slot });
  node.inputs.find((input) => input.name === name).link = id;
}

// The workflow a prompt is queued with, as the server keeps it in extra_pnginfo (links in the 0.4 form).
function serialize(...nodes) {
  return {
    nodes: nodes.map((node) => ({ id: node.id, type: node.comfyClass, inputs: node.inputs.map(({ name, link }) => ({ name, link })) })),
    links: [...nodes[0].graph.links].map(([id, link]) => [id, link.origin_id, link.origin_slot, 0, 0, "*"]),
  };
}

function job(outputs, workflow) {
  const prompt = Object.fromEntries(Object.keys(outputs).map((id) => [id, { class_type: "PanoramaStickersNode", inputs: {} }]));
  return { outputs, workflow: { prompt, extra_data: { extra_pnginfo: { workflow } } } };
}

// ComfyUI's app as far as outputs go: app.nodeOutputs holds copies of what `executed` delivered.
const app = { rootGraph: null, nodeOutputs: {}, extensionManager: null };
setNodeOutputLookup((node) => app.nodeOutputs[String(node.id)]);

function useGraph(node) {
  app.rootGraph = node.graph;
  app.nodeOutputs = {};
  app.extensionManager = null;
}

// The server's jobs API (GET /api/jobs?… and /api/jobs/{id}) and its websocket events.
class FakeApi extends EventTarget {
  constructor({ list = [], jobs = {}, jsonless = false } = {}) {
    super();
    Object.assign(this, { list, jobs, jsonless, calls: [], nextId: 0 });
  }

  async fetchApi(path) {
    this.calls.push(path);
    if (this.jsonless) return { ok: false, status: 404, json: async () => { throw new SyntaxError("Unexpected token '4'"); } };
    if (path.startsWith("/jobs?")) return { ok: true, json: async () => ({ jobs: this.list }) };
    const id = decodeURIComponent(path.slice("/jobs/".length));
    return { ok: id in this.jobs, json: async () => this.jobs[id] || { error: "Job not found" } };
  }

  emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

const settle = () => new Promise((resolve) => setImmediate(resolve));

// Queues `nodes` as they are linked now; the returned function delivers `output` for the first node the way
// ComfyUI does (`executed`, a copy in app.nodeOutputs) and ends the run.
function queue(api, nodes, output, end = "execution_success") {
  const promptId = `p${++api.nextId}`;
  api.jobs[promptId] = job({ [nodes[0].id]: output }, serialize(...nodes));
  return async () => {
    api.emit("executed", { node: String(nodes[0].id), display_node: String(nodes[0].id), output, prompt_id: promptId });
    app.nodeOutputs[String(nodes[0].id)] = structuredClone(output);
    api.emit(end, { prompt_id: promptId });
    await settle();
  };
}

function trackedApi(options) {
  const api = new FakeApi(options);
  trackRunOutputs(api);
  return api;
}

function bgOutput(name) {
  return { pano_input_images: [{ filename: `${name}.png`, subfolder: "", type: "temp" }] };
}

test("a run's output keeps the links its job ran on, read once the run ends", async () => {
  const api = trackedApi();
  const node = graphNode({ 1: [4, 0], 2: [5, 0] }, { bg_media: 1, sticker: 2 }, { graphId: "wf-run" });
  useGraph(node);
  const run = queue(api, [node], bgOutput("queued-then-rewired"));

  rewire(node, "bg_media", 7);
  api.emit("executed", { node: "9", display_node: "9", output: bgOutput("queued-then-rewired"), prompt_id: "p1" });
  app.nodeOutputs["9"] = bgOutput("queued-then-rewired");
  // Until the job is read, the output has no record and counts as current.
  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
  await run();

  assert.deepEqual(api.calls, ["/jobs/p1"]);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
  assert.equal(isNodeOutputMediaCurrent(node, "external-sticker"), true);
  rewire(node, "bg_media", 4);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
  node.inputs[2].link = null;
  assert.equal(isNodeOutputMediaCurrent(node, "external-sticker"), false);
});

test("an interrupted run records what it made, and a run without panorama media is not looked up", async () => {
  const api = trackedApi();
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { graphId: "wf-interrupted" });
  useGraph(node);
  await queue(api, [node], bgOutput("interrupted"), "execution_interrupted")();
  rewire(node, "bg_media", 7);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);

  await queue(api, [node], { images: [{ filename: "ComfyUI_temp_00001_.png", subfolder: "", type: "temp" }] })();
  assert.deepEqual(api.calls, ["/jobs/p1"]);
});

test("an undo after rewiring leaves an output made from the old input stale, without asking the server", async () => {
  const api = trackedApi();
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { graphId: "wf-undo" });
  useGraph(node);
  await queue(api, [node], bgOutput("undo"))();
  rewire(node, "bg_media", 7);
  api.calls.length = 0;

  // Ctrl+Z of an unrelated change: loadGraphData(state, clean=false) keeps the outputs and calls
  // loadedGraphNode for every node, links as they are now.
  assert.equal(await restoreLoadedNodeOutput(node, app, api), null);

  assert.deepEqual(api.calls, []);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
});

test("a workflow tab's outputs come back as copies after the load, keep their links, and are not looked up", async () => {
  const api = trackedApi({ list: [{ id: "old" }], jobs: { old: job({ 9: bgOutput("tab-history") }, {}) } });
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { graphId: "wf-tab" });
  useGraph(node);
  await queue(api, [node], bgOutput("tab"))();
  rewire(node, "bg_media", 7);
  api.calls.length = 0;

  // Switching away stores the outputs in the tab's change tracker; switching back clears them, loads the
  // graph (loadedGraphNode), and then restores copies of them.
  const tracker = { nodeOutputs: structuredClone(app.nodeOutputs) };
  app.extensionManager = { workflow: { openWorkflows: [{ activeState: { id: "wf-tab" }, changeTracker: tracker }] } };
  app.nodeOutputs = {};
  const restored = await restoreLoadedNodeOutput(node, app, api);
  app.nodeOutputs = structuredClone(tracker.nodeOutputs);

  assert.equal(restored, null);
  assert.deepEqual(api.calls, []);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
  rewire(node, "bg_media", 4);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
});

test("workflow input origins read both serialized link formats and nodes inside subgraphs", () => {
  const legacy = {
    nodes: [{ id: 9, inputs: [{ name: "bg_media", link: 3 }, { name: "sticker", link: null }] }],
    links: [[3, 4, 1, 9, 0, "VIDEO"]],
  };
  const current = {
    nodes: [{ id: 9, inputs: [{ name: "bg_media", link: 3 }] }, { id: 12, type: "sub-a" }],
    links: [{ id: 3, origin_id: 4, origin_slot: 1, target_id: 9, target_slot: 0, type: "VIDEO" }],
    definitions: { subgraphs: [{
      id: "sub-a",
      nodes: [{ id: 5, inputs: [{ name: "bg_media", link: 1 }] }],
      links: [{ id: 1, origin_id: -10, origin_slot: 0, target_id: 5, target_slot: 0, type: "IMAGE" }],
    }] },
  };

  assert.deepEqual(workflowInputOrigins(legacy, "9"), { bg_media: "4:1" });
  assert.deepEqual(workflowInputOrigins(current, 9), { bg_media: "4:1" });
  assert.deepEqual(workflowInputOrigins(current, "12:5"), { bg_media: "-10:0" });
  assert.deepEqual(workflowInputOrigins(undefined, 9), {});
});

test("the output of a node inside a subgraph is recorded by its execution id", async () => {
  const api = trackedApi();
  const workflow = {
    nodes: [{ id: 12, type: "sub-a" }],
    links: [],
    definitions: { subgraphs: [{ id: "sub-a", nodes: [{ id: 5, inputs: [{ name: "bg_media", link: 1 }] }], links: [[1, 3, 0, 5, 0, "IMAGE"]] }] },
  };
  const output = bgOutput("subgraph");
  api.jobs.inner = job({ "12:5": output }, workflow);
  const node = graphNode({ 1: [3, 0] }, { bg_media: 1 }, { id: 5, graphId: "sub-a" });

  api.emit("executed", { node: "12:5", display_node: "12:5", output, prompt_id: "inner" });
  api.emit("execution_success", { prompt_id: "inner" });
  await settle();
  app.nodeOutputs["5"] = structuredClone(output);

  rewire(node, "bg_media", 8);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);
});

test("a node without a recorded output source treats its output as current", () => {
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { id: 31 });
  app.nodeOutputs["31"] = bgOutput("never-recorded");
  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
  assert.equal(isNodeOutputMediaCurrent(graphNode({}, {}, { id: 32 }), "background"), true);
});

test("after a browser reload the nodes of a graph share one look at the job history and keep the inputs each job ran on", async () => {
  const first = bgOutput("reload-9");
  const second = bgOutput("reload-10");
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { graphId: "wf-reload" });
  const other = graphNode({}, {}, { id: 10 });
  other.graph = node.graph;
  const api = trackedApi({
    list: [{ id: "newer" }, { id: "older" }],
    jobs: { newer: job({ 2: { images: [] } }, {}), older: job({ 9: first, 10: second }, serialize(node, other)) },
  });
  // The reloaded graph: bg_media still comes from node 4, nodeOutputs is empty.
  useGraph(node);

  // loadedGraphNode calls both in one synchronous pass.
  const [restored, restoredOther] = await Promise.all([restoreLoadedNodeOutput(node, app, api), restoreLoadedNodeOutput(other, app, api)]);

  assert.match(api.calls[0], /^\/jobs\?workflow_id=wf-reload&status=completed,failed,cancelled&limit=\d+$/);
  assert.deepEqual(api.calls.slice(1), ["/jobs/newer", "/jobs/older"]);
  assert.equal(restored, first);
  assert.equal(restoredOther, second);
  assert.equal(app.nodeOutputs["9"], first);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), true);
  rewire(node, "bg_media", 3);
  assert.equal(isNodeOutputMediaCurrent(node, "background"), false);

  // The next load looks again.
  app.nodeOutputs = {};
  await restoreLoadedNodeOutput(node, app, api);
  assert.equal(api.calls.filter((path) => path.startsWith("/jobs?")).length, 2);
});

test("a node the history has nothing for is not looked up again until a run succeeds", async () => {
  const api = trackedApi({ list: [{ id: "a" }], jobs: { a: job({ 2: { images: [] } }, {}) } });
  const node = graphNode({}, {}, { graphId: "wf-nothing" });
  useGraph(node);

  assert.equal(await restoreLoadedNodeOutput(node, app, api), null);
  const asked = api.calls.length;
  // Repeated undo in a tab that never ran.
  assert.equal(await restoreLoadedNodeOutput(node, app, api), null);
  assert.equal(api.calls.length, asked);

  api.emit("execution_success", { prompt_id: "elsewhere" });
  await restoreLoadedNodeOutput(node, app, api);
  assert.ok(api.calls.length > asked);
});

test("a restore that ComfyUI's own outputs overtake leaves them in place", async () => {
  const node = graphNode({ 1: [4, 0] }, { bg_media: 1 }, { graphId: "wf-overtaken" });
  useGraph(node);
  const api = trackedApi({ list: [{ id: "a" }], jobs: { a: job({ 9: bgOutput("overtaken-history") }, serialize(node)) } });

  const restoring = restoreLoadedNodeOutput(node, app, api);
  const own = bgOutput("overtaken-own");
  await Promise.resolve();
  app.nodeOutputs["9"] = own;

  assert.equal(await restoring, null);
  assert.equal(app.nodeOutputs["9"], own);
});

test("the job history gives nothing for another node class, and a server without the jobs API is not asked again", async () => {
  const node = graphNode({}, {}, { graphId: "wf-other-class" });
  useGraph(node);
  const other = job({ 9: { pano_input_images: [] } }, serialize(node));
  other.workflow.prompt[9].class_type = "PreviewImage";
  assert.equal(await restoreLoadedNodeOutput(node, app, trackedApi({ list: [{ id: "a" }], jobs: { a: other } })), null);
  assert.deepEqual(app.nodeOutputs, {});

  const api = trackedApi({ jsonless: true });
  const missing = graphNode({}, {}, { graphId: "wf-no-jobs-api" });
  useGraph(missing);
  assert.equal(await restoreLoadedNodeOutput(missing, app, api), null);
  await settle();
  const asked = api.calls.length;
  await restoreLoadedNodeOutput(missing, app, api);
  await queue(api, [missing], bgOutput("no-jobs-api"))();
  assert.equal(api.calls.length, asked);
});

test("a node preview video whose file is gone reports it, so the node surface falls back", () => {
  const video = new FakeVideo();
  let frames = 0;
  const player = createLoopingPreviewVideo({
    documentRef: { createElement: () => video },
    src: "/view?filename=pano_video_evicted.mp4&type=temp",
    onFrame: () => { frames += 1; },
  });

  assert.equal(player.failed(), false);
  video.dispatch("error");
  assert.equal(player.failed(), true);
  assert.equal(frames, 1);
  player.destroy();
  assert.equal(video.listeners.get("error").size, 0);
});

test("video files are told apart from images by entry and by /view URL", () => {
  assert.equal(isVideoFile({ filename: "pano.MP4" }), true);
  assert.equal(isVideoFile({ filename: "pano.png" }), false);
  assert.equal(isVideoFile("/api/view?filename=clip.webm&type=input&rand=0.3"), true);
  assert.equal(isVideoFile("/api/view?filename=still.png&type=input"), false);
  assert.equal(isVideoFile("/media/clip.mov"), true);
});

test("a run's output keeps its URL token across copies, and each uploaded output gets its own", () => {
  const run = { images: [{ filename: "ComfyUI_temp_abcde_00001_.png", subfolder: "", type: "temp" }] };
  assert.equal(outputSourceToken(structuredClone(run)), outputSourceToken(run));

  // An upload over the same file name gives LoadImage a new output object with the same content.
  const upload = { images: [{ filename: "pano.png", subfolder: "", type: "input" }] };
  assert.equal(outputSourceToken(upload), outputSourceToken(upload));
  assert.notEqual(outputSourceToken(structuredClone(upload)), outputSourceToken(upload));
});

// A run that takes a node from ComfyUI's execution cache sends `executed` again with a copy of the stored
// output. Showing it as new media would load the node's video again although nothing ran.
test("an output sent again by a cached run is a repeat, and a new run's output is not", () => {
  const seen = new Map();
  const run = {
    pano_input_images: [{ filename: "pano_preview_00001_.png", subfolder: "", type: "temp" }],
    pano_input_videos: [{ filename: "pano_video_0123456789ab.mp4", subfolder: "pano_suite", type: "temp" }],
  };
  assert.equal(isRepeatedOutput(seen, "2", run), false);
  assert.equal(isRepeatedOutput(seen, "2", structuredClone(run)), true);
  assert.equal(isRepeatedOutput(seen, "1", structuredClone(run)), false);

  const next = structuredClone(run);
  next.pano_input_images[0].filename = "pano_preview_00002_.png";
  assert.equal(isRepeatedOutput(seen, "2", next), false);
  assert.equal(isRepeatedOutput(seen, "2", run), false);
});

// Only an output the node reads can change its media: its own, or one of a node that its media inputs come
// from, however far up. A run of an unrelated node must not load the node's video again.
test("the source nodes of a node's media inputs are found up the whole input chain, and no others", () => {
  const load = { id: 1, inputs: [] };
  const components = { id: 13, inputs: [{ name: "video" }] };
  const other = { id: 20, inputs: [] };
  const sticker = { id: 21, inputs: [] };
  const node = { id: 2, inputs: [{ name: "bg_media" }, { name: "sticker" }] };
  const links = new Map([[node, [components, sticker]], [components, [load]], [load, []], [sticker, []], [other, []]]);
  const originOf = (current, slot) => links.get(current)?.[slot] ?? null;

  assert.deepEqual([...sourceNodeIds(node, [0], originOf)].sort(), ["1", "13"]);
  assert.deepEqual([...sourceNodeIds(node, [0, 1], originOf)].sort(), ["1", "13", "21"]);
  assert.deepEqual([...sourceNodeIds(node, [], originOf)], []);

  // A cycle through a broken graph ends.
  links.set(load, [components]);
  load.inputs = [{ name: "loop" }];
  assert.deepEqual([...sourceNodeIds(node, [0], originOf)].sort(), ["1", "13"]);
});

test("only a tracked ERP input connection change invalidates node output media", () => {
  const node = {
    inputs: [
      { name: "erp_image" },
      { name: "audio" },
    ],
  };

  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 0), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, "input", 0), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 1), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, 2, 0), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, "output", 0), false);
});

test("the new Stickers node's MultiType bg_media and sticker inputs are tracked by name", () => {
  const node = {
    inputs: [
      { name: "bg_media", type: "IMAGE,VIDEO" },
      { name: "scene", type: "SPLAT,MESH" },
      { name: "sticker", type: "IMAGE,VIDEO,MESH,SPLAT" },
    ],
  };

  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 0), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 2), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 2, STICKER_INPUT_NAMES), true);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 0, STICKER_INPUT_NAMES), false);
  assert.equal(isTrackedMediaInputConnectionChange(node, 1, 1, [...BACKGROUND_INPUT_NAMES, ...STICKER_INPUT_NAMES]), false);
});

test("a VIDEO linked to an input is seen from the link's type", () => {
  const node = graphNode({ 1: [3, 0], 2: [4, 0] }, { bg_media: 1, sticker: 2 });
  node.graph.links.get(1).type = "IMAGE";
  node.graph.links.get(2).type = "VIDEO";

  assert.equal(videoLinked(node, ["bg_media"]), false);
  assert.equal(videoLinked(node, ["bg_media", "sticker"]), true);
  assert.equal(videoLinked(graphNode({}, {}), ["bg_media", "sticker"]), false);
});
