import assert from "node:assert/strict";
import test from "node:test";

import { createComfyMediaAdapter, executionIdMatches, preferredImageInputsForNode } from "../web_src/pano_comfy_media.js";
import { BACKGROUND_INPUT_NAMES, setNodeOutputLookup } from "../web_src/pano_preview_video.js";

// The read profiles of pano_comfy_media.js: how the old editor and the new UI ("editor"), the node surfaces of
// pano_preview_runtime.js ("nodeSurface") and the Preview node's runtime pano_preview_previewnode.js ("previewNode")
// read ComfyUI's results. These pin what each reader did before its copy moved here; where the profiles differ is an
// owner question (handoff refactor comfymedia D1-D8), not a choice of these tests.

const api = { apiURL: (route) => `/api${route}` };
const adapter = (read, app = { nodeOutputs: {} }) => createComfyMediaAdapter({ app, api, read });
const SUBGRAPH = "a1b2c3d4-0000-4000-8000-000000000001";

test("execution ids: a last part matches, an id ending in ':' differs only in the previewNode reading", () => {
  // [a, b, nodeSurface (empty parts dropped), previewNode (empty last part kept)]
  const table = [
    ["12", "12", true, true],
    ["12:5", "5", true, true],
    ["12:7:5", "5", true, true],
    [`${SUBGRAPH}:5`, "5", true, true],
    ["12:5", "12", false, false],
    ["7:5", "12:5", true, true],
    ["12:", "12", true, false],
    ["5:", "7:", false, true],
    [":", "::", false, true],
    ["12: 5", "5", true, true],
    ["", "", false, false],
  ];
  for (const [a, b, surface, preview] of table) {
    assert.equal(executionIdMatches(a, b), surface, `${a} ~ ${b}`);
    assert.equal(executionIdMatches(a, b, { keepEmptyTail: true }), preview, `${a} ~ ${b} (empty tail)`);
  }
});

test("/view URLs of ui entries in each profile", () => {
  // [entry, editor, nodeSurface, previewNode]
  const table = [
    [{ filename: "a.png", type: "temp" }, "type=temp", "type=temp", "type=temp"],
    [{ filename: "a.png", type: "temp", storage: "input" }, "type=temp", "type=input", "type=input"],
    [{ filename: "a.png", type: "comfy_image" }, "type=comfy_image", "type=output", "type=output"],
    [{ filename: "a.png" }, "type=output", "type=output", "type=output"],
    [{ filename: "a.png", storage: "input", subfolder: "s" }, "type=output&subfolder=s", "type=input&subfolder=s", "type=input&subfolder=s"],
  ];
  for (const [entry, ...expected] of table) {
    ["editor", "nodeSurface", "previewNode"].forEach((read, index) => {
      assert.equal(adapter(read).source(entry), `/api/view?filename=a.png&${expected[index]}`, `${read} ${JSON.stringify(entry)}`);
    });
  }
  const padded = { filename: " a.png ", type: "output" };
  assert.equal(adapter("editor").source(padded), "/api/view?filename=+a.png+&type=output");
  assert.equal(adapter("nodeSurface").source(padded), "/api/view?filename=+a.png+&type=output");
  assert.equal(adapter("previewNode").source(padded), "/api/view?filename=a.png&type=output");
  assert.equal(adapter("previewNode").source({ filename: "  " }), "");
});

test("candidates: strings, tuples, src and url; a tuple of entries differs only in the previewNode reading", () => {
  for (const read of ["editor", "nodeSurface", "previewNode"]) {
    const media = adapter(read);
    assert.equal(media.source(["a.png", "sub", "temp"]), "/api/view?filename=a.png&type=temp&subfolder=sub");
    assert.equal(media.source(["x.png"]), "x.png");
    assert.equal(media.source([null, "b.png"]), "b.png");
    assert.equal(media.source(" /view?x=1 "), "/view?x=1");
    assert.equal(media.source({ src: "blob:1" }), "blob:1");
    assert.equal(media.source({ url: "data:x" }), "data:x");
    assert.equal(media.source([]), "");
    assert.equal(media.source(null), "");
  }
  const entries = [{ filename: "a.png", type: "temp" }, { filename: "b.png" }];
  const broken = "/api/view?filename=%5Bobject+Object%5D&type=output&subfolder=%5Bobject+Object%5D";
  assert.equal(adapter("editor").source(entries), broken);
  assert.equal(adapter("nodeSurface").source(entries), broken);
  assert.equal(adapter("previewNode").source(entries), "/api/view?filename=a.png&type=temp");
});

test("the nodeSurface profile builds the same view candidates and asset URLs as before", () => {
  const media = adapter("nodeSurface");
  assert.deepEqual(media.sourceCandidates("renders/final.png"), [
    "/api/view?filename=final.png&type=temp&subfolder=renders",
    "/api/view?filename=final.png&type=output&subfolder=renders",
    "/api/view?filename=final.png&type=input&subfolder=renders",
    "renders/final.png",
  ]);
  assert.deepEqual(media.sourceCandidates("/view?filename=a.png"), ["/view?filename=a.png"]);
  assert.deepEqual(media.sourceCandidates(""), []);
  assert.equal(media.assetSource({ type: "comfy_image", filename: "s.png", subfolder: "stk", storage: "temp" }), "/api/view?filename=s.png&type=temp&subfolder=stk");
  assert.equal(media.assetSource({ type: "comfy_image", filename: "s.png" }), "/api/view?filename=s.png&type=input");
  assert.equal(media.assetSource({ type: "dataurl", value: "data:x" }), "data:x");
});

test("a profile is named; an unknown name throws", () => {
  assert.throws(() => adapter("nodeSurface ".trim() + "x"), /Unknown ComfyUI read profile/);
  assert.throws(() => adapter("toString"), /Unknown ComfyUI read profile/);
});

test("a node's result: by its id in a Map or an object; the node surfaces and the Preview node also by a key naming it", () => {
  const own = { images: ["own"] };
  const inner = { images: ["inner"] };
  const store = { 12: own, [`${SUBGRAPH}:5`]: inner, "12:": { images: ["odd"] } };
  for (const read of ["editor", "nodeSurface", "previewNode"]) {
    assert.equal(adapter(read, { nodeOutputs: store }).output(12), own, read);
    assert.equal(adapter(read, { nodeOutputs: new Map([["12", own]]) }).output(12), own, read);
    assert.equal(adapter(read, { nodeOutputs: new Map([[12, own]]) }).output("12"), own, read);
    assert.equal(adapter(read, { nodeOutputs: store }).output(null), null, read);
    assert.equal(adapter(read, { nodeOutputs: store }).output(99), null, read);
  }
  // A node in a subgraph knows only its own id (5); app.nodeOutputs keys it by its locator id.
  assert.equal(adapter("editor", { nodeOutputs: store }).output(5), null);
  assert.equal(adapter("nodeSurface", { nodeOutputs: store }).output(5), inner);
  assert.equal(adapter("previewNode", { nodeOutputs: store }).output(5), inner);
  assert.equal(adapter("nodeSurface", { nodeOutputs: new Map(Object.entries(store)) }).output(5), inner);
  // A key ending in ":" names its last part only for the node surfaces.
  const odd = { "7:": { images: ["odd"] } };
  assert.deepEqual(adapter("nodeSurface", { nodeOutputs: odd }).output(7), { images: ["odd"] });
  assert.equal(adapter("previewNode", { nodeOutputs: odd }).output(7), null);
});

// A node as the ComfyUI frontend exposes it (as tests/pano_comfy_media.test.mjs has it): links by slot.
function comfyNode({ id = 40, inputs, links = [], graph = { getNodeById: () => null }, ...rest }) {
  return {
    ...rest,
    id,
    graph,
    inputs,
    getInputLink(slot) {
      return links[slot] ?? null;
    },
    isInputConnected(slot) {
      return !!links[slot];
    },
  };
}

// The node surfaces read their own result only while it is current (pano_preview_video.js isNodeOutputMediaCurrent),
// which finds the result through setNodeOutputLookup, as pano_preview_runtime.js sets it.
function surfaceSetup(nodeOutputs, extra = {}) {
  const app = { nodeOutputs, ...extra };
  const media = adapter("nodeSurface", app);
  setNodeOutputLookup((node) => media.output(node.id));
  return { app, media };
}

test("the node surfaces' image inputs: the preferred names the node has, then its background inputs", () => {
  const node = comfyNode({ inputs: [{ name: "audio" }, { name: "bg_media" }, { name: "erp_image" }, { name: "source" }] });
  assert.deepEqual(preferredImageInputsForNode(node, ["erp_image", "missing"]), ["erp_image", "bg_media", "source"]);
  assert.deepEqual(preferredImageInputsForNode(comfyNode({ inputs: [{ name: "audio" }] }), ["x"]), ["x"]);
  assert.ok(BACKGROUND_INPUT_NAMES.includes("erp_image"));
});

test("nodeSurfaceLinkedSource: the node's own pano_input_images first, only while current", () => {
  const own = { pano_input_images: [{ filename: "own_bg.png", type: "temp" }] };
  const origin = { id: 30, imgs: [{ src: "/origin.png" }] };
  const link = { origin_id: 30, origin_slot: 0 };
  const node = comfyNode({
    id: 41,
    inputs: [{ name: "erp_image", type: "IMAGE" }],
    links: [link],
    getInputNode: () => origin,
  });
  const { media } = surfaceSetup({ 41: own });
  const logs = [];
  assert.deepEqual(media.nodeSurfaceLinkedSource(node, ["erp_image"], { log: (tag, payload) => logs.push([tag, payload.stage]) }), {
    src: "/api/view?filename=own_bg.png&type=temp", sourceType: "selfOutput", inputName: "own",
  });
  assert.deepEqual(logs, [["image-resolve", "hit"]]);
  // Another link: the result is not the inputs' any more, the linked origin is read.
  link.origin_id = 31;
  const stale = media.nodeSurfaceLinkedSource(node, ["erp_image"]);
  assert.deepEqual(stale, { src: "/origin.png", sourceType: "nodeImgs", inputName: "erp_image" });
});

test("nodeSurfaceLinkedSource: result images (no ui.images, videos skipped, slot first, pano_src) before getNodeImageUrls", () => {
  const originOutput = {
    images: [{ filename: "clip.mp4", type: "input" }, { filename: "zero.png", type: "temp" }, { filename: "one.png", type: "temp" }],
    ui: { images: [{ filename: "ui.png", type: "temp" }] },
  };
  const origin = { id: 32 };
  const node = comfyNode({
    id: 42,
    inputs: [{ name: "erp_image", type: "IMAGE" }],
    links: [{ origin_id: 32, origin_slot: 2 }],
    getInputNode: () => origin,
  });
  const { media } = surfaceSetup({ 32: originOutput }, { getNodeImageUrls: () => ["/app.png"] });
  const resolved = media.nodeSurfaceLinkedSource(node, ["erp_image"]);
  assert.equal(resolved.sourceType, "nodeOutputs");
  assert.match(resolved.src, /^\/api\/view\?filename=one\.png&type=temp&pano_src=/);
  // Only ui.images: not read; getNodeImageUrls is, without skipping videos.
  const { media: other } = surfaceSetup({ 32: { ui: originOutput.ui } }, { getNodeImageUrls: () => ["/api/view?filename=clip.mp4&type=input", "/app.png"] });
  assert.deepEqual(other.nodeSurfaceLinkedSource(node, ["erp_image"]), {
    src: "/api/view?filename=clip.mp4&type=input", sourceType: "appNodeImageUrls", inputName: "erp_image",
  });
});

test("nodeSurfaceLinkedSource: the origin's imgs, then a LoadImage widget; inputs in order, through a subgraph", () => {
  const loadImage = { id: 33, comfyClass: "LoadImage", widgets: [{ name: "image", value: "pano file.png" }] };
  const other = { id: 34, type: "Other", widgets: [{ name: "Image", value: "plain.png" }] };
  const inner = { id: 35, imgs: [{ src: "/inner.png" }] };
  const subgraph = { id: 36, isSubgraphNode: () => true, resolveSubgraphOutputLink: (slot) => (slot === 1 ? { outputNode: inner } : null) };
  const origins = [subgraph, loadImage, other];
  const node = (order) => comfyNode({
    id: 43,
    inputs: [{ name: "scene" }, { name: "bg_erp", type: "IMAGE" }, { name: "extra", type: "IMAGE" }],
    links: order,
    getInputNode: (slot) => origins[slot],
  });
  const { media } = surfaceSetup({});
  assert.deepEqual(media.nodeSurfaceLinkedSource(node([null, { origin_id: 33, origin_slot: 0 }, null]), []), {
    src: "/api/view?filename=pano%20file.png&type=input&subfolder=", sourceType: "widget", inputName: "bg_erp",
  });
  // Not LoadImage: the widget's value as it is. The background input comes before the other IMAGE input.
  origins[1] = other;
  assert.deepEqual(media.nodeSurfaceLinkedSource(node([null, { origin_id: 34 }, { origin_id: 33 }]), []), {
    src: "plain.png", sourceType: "widget", inputName: "bg_erp",
  });
  // An IMAGE-typed input not among the names is read too; a subgraph is read through to the node inside.
  origins[2] = subgraph;
  assert.deepEqual(media.nodeSurfaceLinkedSource(node([null, null, { origin_id: 36, origin_slot: 1 }]), []), {
    src: "/inner.png", sourceType: "nodeImgs", inputName: "extra",
  });
  assert.deepEqual(media.nodeSurfaceLinkedSource(comfyNode({ inputs: [] }), []), { src: "", sourceType: "", inputName: "" });
  assert.deepEqual(media.nodeSurfaceLinkedSource(node([null, null, null]), []), { src: "", sourceType: "", inputName: "" });
});

test("previewNodeLinkedImageUrl: own pano_input_images (current or not), then the origin's results in group order", () => {
  const origin = { id: 50, imgs: [{ src: "/imgs.png" }], widgets: [{ name: "image", value: " typed.png " }] };
  const app = {
    graph: { getNodeById: (id) => (id === 50 ? origin : null) },
    getNodeImageUrls: () => [],
    nodeOutputs: {},
  };
  const media = adapter("previewNode", app);
  setNodeOutputLookup(() => null);
  const node = comfyNode({
    id: 51,
    inputs: [{ name: "erp_image", type: "IMAGE" }, { name: "audio", type: "AUDIO" }],
    links: [{ origin_id: "50", origin_slot: 1 }],
  });
  // The node's own result, ui first, without asking whether it is current.
  app.nodeOutputs = { 51: { ui: { pano_input_images: [{ filename: "own_ui.png", type: "temp" }] }, pano_input_images: ["/own_flat.png"] } };
  assert.equal(media.previewNodeLinkedImageUrl(node), "/api/view?filename=own_ui.png&type=temp");
  // The origin's images, videos not skipped, no slot preference, no pano_src.
  app.nodeOutputs = { 50: { images: [{ filename: "clip.mp4", type: "input" }, { filename: "b.png", type: "temp" }] } };
  assert.equal(media.previewNodeLinkedImageUrl(node), "/api/view?filename=clip.mp4&type=input");
  app.nodeOutputs = { 50: { pano_input_images: ["/origin_flat.png"], ui: { pano_input_images: ["/origin_ui.png"] } } };
  assert.equal(media.previewNodeLinkedImageUrl(node), "/origin_ui.png");
  // Then getNodeImageUrls, imgs, and the image widget's value of any node, trimmed, as an input file.
  app.nodeOutputs = {};
  app.getNodeImageUrls = () => ["/app.png"];
  assert.equal(media.previewNodeLinkedImageUrl(node), "/app.png");
  app.getNodeImageUrls = () => [];
  assert.equal(media.previewNodeLinkedImageUrl(node), "/imgs.png");
  origin.imgs = [];
  assert.equal(media.previewNodeLinkedImageUrl(node), "/api/view?filename=typed.png&type=input&subfolder=");
  origin.widgets = [];
  assert.equal(media.previewNodeLinkedImageUrl(node), "");
});

test("previewNodeLinkedImageUrl: the named input, else the first connected IMAGE input; a missing link reads nothing", () => {
  const first = { id: 60, imgs: [{ src: "/first.png" }] };
  const second = { id: 61, imgs: [{ src: "/second.png" }] };
  const app = { graph: { getNodeById: (id) => ({ 60: first, 61: second })[id] ?? null }, nodeOutputs: {} };
  const media = adapter("previewNode", app);
  setNodeOutputLookup(() => null);
  const inputs = [{ name: "other", type: "IMAGE" }, { name: "erp_image", type: "IMAGE" }];
  assert.equal(media.previewNodeLinkedImageUrl(comfyNode({ inputs, links: [{ origin_id: 60 }, { origin_id: 61 }] })), "/second.png");
  assert.equal(media.previewNodeLinkedImageUrl(comfyNode({ inputs, links: [{ origin_id: 60 }, null] })), "/first.png");
  assert.equal(media.previewNodeLinkedImageUrl(comfyNode({ inputs, links: [] })), "");
  assert.equal(media.previewNodeLinkedImageUrl(comfyNode({ inputs, links: [{ origin_id: "x" }] })), "");
});

test("previewNodeOwnVideoUrl: the first MP4 of pano_videos then images, ui before flat, by extension or format", () => {
  const app = { nodeOutputs: {} };
  const media = adapter("previewNode", app);
  const node = { id: 70 };
  // The extension is read off the URL's end, so an entry counts by its format (as the node writes it).
  app.nodeOutputs = { 70: { images: ["/x/a.mp4"], pano_videos: [{ filename: "v.mp4", type: "temp" }, { filename: "w.mp4", type: "temp", format: "video/mp4" }] } };
  assert.equal(media.previewNodeOwnVideoUrl(node), "/api/view?filename=w.mp4&type=temp");
  app.nodeOutputs = { 70: { images: ["/x/a.mp4?r=1"], pano_videos: [{ filename: "v.mp4", type: "temp" }] } };
  assert.equal(media.previewNodeOwnVideoUrl(node), "/x/a.mp4?r=1");
  app.nodeOutputs = { 70: { ui: { images: [{ filename: "clip", type: "temp", format: "video/mp4" }] }, images: [{ filename: "b.mp4" }] } };
  assert.equal(media.previewNodeOwnVideoUrl(node), "/api/view?filename=clip&type=temp");
  app.nodeOutputs = { 70: { images: [{ filename: "a.png" }] } };
  assert.equal(media.previewNodeOwnVideoUrl(node), "");
  assert.equal(media.previewNodeOwnVideoUrl({ id: 71 }), "");
});
