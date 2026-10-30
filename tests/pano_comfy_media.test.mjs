import assert from "node:assert/strict";
import test from "node:test";

import { createComfyMediaAdapter } from "../web_src/pano_comfy_media.js";

class FakeImage {
  static instances = [];

  constructor() {
    this.attempts = [];
    FakeImage.instances.push(this);
  }

  set src(value) {
    this.currentSrc = String(value);
    this.attempts.push(this.currentSrc);
  }

  get src() {
    return this.currentSrc || "";
  }
}

function createImageState() {
  return {
    markImageLoading(image, source) {
      image.loadState = "loading";
      image.loadSource = source;
    },
    markImageReady(image, source) {
      image.loadState = "ready";
      image.loadSource = source;
    },
    markImageFailed(image, source) {
      image.loadState = "failed";
      image.loadSource = source;
    },
    isImageLoadFailed(image) {
      return image?.loadState === "failed";
    },
  };
}

// A node as the ComfyUI frontend exposes it: connectivity through getInputLink(slot), an LLink with
// origin_id and origin_slot. Reading the deprecated input.link fails the test. Like LiteGraph,
// getInputLink throws before the node is in a graph (graph: null).
function comfyNode({ inputs, links = [], graph = {}, ...rest }) {
  return {
    ...rest,
    graph,
    inputs: inputs.map((input) => Object.defineProperty({ ...input }, "link", {
      get() { throw new Error("input.link is deprecated"); },
    })),
    getInputLink(slot) {
      if (!this.graph) throw new Error("NullGraphError");
      return links[slot] ?? null;
    },
  };
}

function createAdapter(overrides = {}) {
  const app = overrides.app || { nodeOutputs: {} };
  const api = overrides.api || { apiURL: (route) => `/api${route}` };
  return createComfyMediaAdapter({
    app,
    api,
    ImageCtor: overrides.ImageCtor || class {},
    imageState: overrides.imageState || {},
  });
}

test("normalizes Comfy image entries and sticker assets through the public API URL", () => {
  const media = createAdapter();

  assert.equal(
    media.source({ filename: "frame 01.png", subfolder: "shots/a", type: "temp" }),
    "/api/view?filename=frame+01.png&type=temp&subfolder=shots%2Fa",
  );
  assert.equal(media.source({ src: "blob:preview" }), "blob:preview");
  assert.equal(media.assetSource({ type: "dataurl", value: "data:image/png;base64,AA==" }), "data:image/png;base64,AA==");
  assert.equal(
    media.assetSource({ type: "comfy_image", filename: "asset.png", subfolder: "stickers", storage: "input" }),
    "/api/view?filename=asset.png&type=input&subfolder=stickers",
  );
});

test("reads only directly keyed node outputs and exposes UI payload values", () => {
  const direct = {
    ui: {
      pano_input_images: [{ filename: "input.png" }],
      pano_video_meta: { fps: 24 },
    },
  };
  const media = createAdapter({
    app: {
      nodeOutputs: new Map([
        [7, direct],
        ["prompt:8", { images: [{ filename: "scoped.png" }] }],
      ]),
    },
  });

  assert.equal(media.output("7"), direct);
  assert.equal(media.output(8), null);
  assert.deepEqual(media.uiList({ id: 7 }, "pano_input_images"), [{ filename: "input.png" }]);
  assert.deepEqual(media.uiValue({ id: 7 }, "pano_video_meta"), { fps: 24 });
  assert.deepEqual(media.uiList({ id: 9 }, "missing"), []);
  assert.equal(media.uiValue({ id: 9 }, "missing"), null);
});

test("resolves only preferred exact inputs using editor source priority and origin slot", () => {
  const origins = [{ id: 101, imgs: [{ src: "/node-erp.png" }] }, { id: 102, imgs: [{ src: "/node-bg.png" }] }];
  const node = comfyNode({
    id: 5,
    inputs: [
      { name: "erp_image", type: "IMAGE" },
      { name: "bg_erp", type: "IMAGE" },
      { name: "other_image", type: "IMAGE" },
    ],
    links: [
      { origin_id: 101, origin_slot: 0 },
      { origin_id: 102, origin_slot: 1 },
      { origin_id: 103, origin_slot: 0 },
    ],
    getInputNode(index) {
      return origins[index] || { id: 103, imgs: [{ src: "/other.png" }] };
    },
  });
  const media = createAdapter({
    app: {
      nodeOutputs: {
        102: { images: [{ filename: "output.png" }], ui: { images: [{ filename: "ui.png" }] } },
      },
      getNodeImageUrls(origin) {
        return origin.id === 102 ? ["/app-slot-0.png", "/app-slot-1.png"] : [];
      },
    },
  });

  assert.deepEqual(media.resolvePreferredExactLinkedSource(node, ["bg_erp", "erp_image"]), {
    src: "/app-slot-1.png",
    srcCandidates: ["/app-slot-1.png", "/app-slot-0.png"],
    sourceType: "appNodeImageUrls",
    inputName: "bg_erp",
  });
  assert.deepEqual(media.resolvePreferredExactLinkedSource(node, ["missing"]), {
    src: "",
    sourceType: "",
    inputName: "",
  });
});

test("follows subgraph outputs and keeps standard and UI image candidates in order", () => {
  const outputNode = { id: 202 };
  const subgraphNode = {
    id: 201,
    isSubgraphNode: () => true,
    resolveSubgraphOutputLink: (slot) => slot === 2 ? { outputNode } : null,
  };
  const node = comfyNode({
    id: 6,
    inputs: [{ name: "erp_image", type: "IMAGE" }],
    links: [{ origin_id: 201, origin_slot: 2 }],
    getInputNode: () => subgraphNode,
  });
  const media = createAdapter({
    app: {
      nodeOutputs: {
        202: {
          images: [{ filename: "first.png" }, { filename: "second.png" }],
          ui: { images: [{ filename: "ui-first.png" }, { filename: "ui-second.png" }, { filename: "ui-third.png" }] },
        },
      },
      getNodeImageUrls: () => [],
    },
  });

  const resolved = media.resolvePreferredExactLinkedSource(node, ["erp_image"]);
  const token = new URLSearchParams(resolved.src.split("?")[1]).get("pano_src");
  assert.ok(token);
  assert.deepEqual(resolved, {
    src: `/api/view?filename=first.png&type=output&pano_src=${token}`,
    srcCandidates: [
      "/api/view?filename=first.png&type=output",
      "/api/view?filename=second.png&type=output",
      "/api/view?filename=ui-third.png&type=output",
      "/api/view?filename=ui-first.png&type=output",
      "/api/view?filename=ui-second.png&type=output",
    ].map((src) => `${src}&pano_src=${token}`),
    sourceType: "nodeOutputs",
    inputName: "erp_image",
  });
});

// LoadVideo after a browser reload: ComfyUI's upload widget puts the chosen file in its output.
function loadVideoGraph(output) {
  const app = { nodeOutputs: { 30: output } };
  const node = comfyNode({
    id: 9,
    inputs: [{ name: "bg_media", type: "IMAGE,VIDEO" }],
    links: [{ origin_id: 30, origin_slot: 0 }],
    getInputNode: () => ({ id: 30 }),
  });
  return { app, node };
}

test("a background input loading a video file directly gives that file to the editor's video, not to an <img>", () => {
  const { app, node } = loadVideoGraph({ images: [{ filename: "pano.mp4", subfolder: "", type: "input" }], animated: [true] });
  const media = createAdapter({ app, ImageCtor: FakeImage, imageState: createImageState() });
  FakeImage.instances = [];

  const src = media.linkedVideoFile(node, ["bg_media", "bg_erp"]);

  assert.match(src, /^\/api\/view\?filename=pano\.mp4&type=input&pano_src=\w+$/);
  assert.equal(media.linkedVideoFile(node, ["bg_media"]), src);
  assert.equal(media.loadPreferredExactLinkedImage(node, ["bg_media"]), null);
  assert.equal(FakeImage.instances.length, 0);
});

test("re-uploading a file under the same name gives a new URL, so the browser cache cannot replay the old file", () => {
  const { app, node } = loadVideoGraph({ images: [{ filename: "pano.mp4", subfolder: "", type: "input" }] });
  const media = createAdapter({ app });
  const before = media.linkedVideoFile(node, ["bg_media"]);

  // The upload widget sets a new output object with the same file name.
  app.nodeOutputs[30] = { images: [{ filename: "pano.mp4", subfolder: "", type: "input" }] };

  const after = media.linkedVideoFile(node, ["bg_media"]);
  assert.notEqual(after, before);
  assert.equal(after.split("&pano_src=")[0], before.split("&pano_src=")[0]);
});

test("only a directly loaded video file plays: an image source or an unlinked input gives none", () => {
  const { app, node } = loadVideoGraph({ images: [{ filename: "pano.png", subfolder: "", type: "input" }] });
  const media = createAdapter({ app });

  assert.equal(media.linkedVideoFile(node, ["bg_media"]), "");
  assert.equal(media.linkedVideoFile(comfyNode({ id: 9, inputs: [{ name: "bg_media" }] }), ["bg_media"]), "");
});

test("falls back from outputs to node images and LoadImage widgets without changing inputs", () => {
  const nodeImageOrigin = { id: 211, imgs: [{ src: "/node-image.png" }] };
  const widgetOrigin = {
    id: 212,
    comfyClass: "LoadImage",
    widgets: [{ name: "image", value: "input file.png" }],
  };
  const node = comfyNode({
    inputs: [
      { name: "erp_image", type: "IMAGE" },
      { name: "bg_erp", type: "IMAGE" },
    ],
    links: [
      { origin_id: 211, origin_slot: 0 },
      { origin_id: 212, origin_slot: 0 },
    ],
    graph: { _nodes_by_id: { 212: widgetOrigin } },
    getInputNode(index) {
      if (index === 0) return nodeImageOrigin;
      throw new Error("graph is still restoring");
    },
  });
  const media = createAdapter({ app: { nodeOutputs: {}, getNodeImageUrls: () => [] } });

  assert.deepEqual(media.resolvePreferredExactLinkedSource(node, ["erp_image"]), {
    src: "/node-image.png",
    srcCandidates: ["/node-image.png"],
    sourceType: "nodeImgs",
    inputName: "erp_image",
  });
  assert.deepEqual(media.resolvePreferredExactLinkedSource(node, ["bg_erp"]), {
    src: "/api/view?filename=input%20file.png&type=input&subfolder=",
    sourceType: "widget",
    inputName: "bg_erp",
  });
});

test("loads exact linked images with fallback, terminal failure caching, and failed-only retry", () => {
  FakeImage.instances = [];
  const origin = { id: 301 };
  const dirtyCalls = [];
  const node = comfyNode({
    id: 9,
    inputs: [{ name: "erp_image", type: "IMAGE" }],
    links: [{ origin_id: 301, origin_slot: 0 }],
    getInputNode: () => origin,
    setDirtyCanvas: (...args) => dirtyCalls.push(args),
  });
  const media = createAdapter({
    app: {
      nodeOutputs: {},
      getNodeImageUrls: () => ["renders/final.png"],
    },
    ImageCtor: FakeImage,
    imageState: createImageState(),
  });
  let settled = 0;

  const failed = media.loadPreferredExactLinkedImage(node, ["erp_image"], () => { settled += 1; }, "background");
  assert.deepEqual(failed.attempts, ["/api/view?filename=final.png&type=temp&subfolder=renders"]);
  failed.onerror();
  failed.onerror();
  failed.onerror();
  failed.onerror();
  assert.deepEqual(failed.attempts, [
    "/api/view?filename=final.png&type=temp&subfolder=renders",
    "/api/view?filename=final.png&type=output&subfolder=renders",
    "/api/view?filename=final.png&type=input&subfolder=renders",
    "renders/final.png",
  ]);
  assert.equal(failed.loadState, "failed");
  assert.equal(settled, 1);
  assert.deepEqual(dirtyCalls, [[true, true]]);
  assert.equal(media.loadPreferredExactLinkedImage(node, ["erp_image"], null, "background"), failed);

  media.clearFailedLinkedImages(node);
  const ready = media.loadPreferredExactLinkedImage(node, ["erp_image"], null, "background");
  assert.notEqual(ready, failed);
  ready.onload();
  assert.equal(ready.loadState, "ready");
  media.clearFailedLinkedImages(node);
  assert.equal(media.loadPreferredExactLinkedImage(node, ["erp_image"], null, "background"), ready);
});

test("loads UI payload images once and reports both ready and failed settlement", () => {
  FakeImage.instances = [];
  const media = createAdapter({
    app: {
      nodeOutputs: {
        10: { ui: { pano_input_images: [{ filename: "preview.png", type: "temp" }] } },
      },
    },
    ImageCtor: FakeImage,
    imageState: createImageState(),
  });
  const cache = new Map();
  const settled = [];

  const image = media.uiImage({ id: 10 }, "pano_input_images", cache, (value) => settled.push(value.loadState));
  assert.equal(image.src, "/api/view?filename=preview.png&type=temp");
  image.onerror();
  assert.deepEqual(settled, ["failed"]);
  assert.equal(media.uiImage({ id: 10 }, "pano_input_images", cache), image);
});

test("invalidating one UI preview reloads only that dedicated preview key", () => {
  FakeImage.instances = [];
  const media = createAdapter({
    app: {
      nodeOutputs: {
        10: {
          ui: {
            pano_input_images: [{ filename: "background.png", type: "temp" }],
            pano_sticker_input_images: [{ filename: "replacement.png", type: "temp" }],
          },
        },
      },
    },
    ImageCtor: FakeImage,
    imageState: createImageState(),
  });
  const cache = new Map();
  const node = { id: 10 };
  const background = media.uiImage(node, "pano_input_images", cache);
  const originalSticker = media.uiImage(node, "pano_sticker_input_images", cache);

  media.invalidateUiImage(cache, "pano_sticker_input_images");
  const reloadedSticker = media.uiImage(node, "pano_sticker_input_images", cache);

  assert.equal(media.uiImage(node, "pano_input_images", cache), background);
  assert.notEqual(reloadedSticker, originalSticker);
  assert.equal(reloadedSticker.src, "/api/view?filename=replacement.png&type=temp");
});

test("reads linked string values from the origin slot before falling back to the widget", () => {
  const media = createAdapter({
    app: {
      nodeOutputs: {
        401: { data: { result: ["first", "linked-state"] } },
      },
    },
  });
  const linkedNode = comfyNode({
    inputs: [{ name: "sticker_state" }],
    links: [{ origin_id: 401, origin_slot: 1 }],
    widgets: [{ name: "sticker_state", value: "widget-state" }],
  });
  const widgetNode = comfyNode({
    inputs: [{ name: "sticker_state" }],
    widgets: [{ name: "sticker_state", value: "widget-state" }],
  });

  assert.equal(media.linkedValue(linkedNode, "sticker_state"), "linked-state");
  assert.equal(media.linkedValue(widgetNode, "sticker_state"), "widget-state");
});

test("a node that is not in a graph yet has no linked sources or values", () => {
  const media = createAdapter({ app: { nodeOutputs: { 401: { data: { result: ["linked-state"] } } } } });
  const node = comfyNode({
    graph: null,
    inputs: [{ name: "bg_media" }, { name: "sticker_state" }],
    links: [{ origin_id: 400, origin_slot: 0 }, { origin_id: 401, origin_slot: 0 }],
    widgets: [{ name: "sticker_state", value: "widget-state" }],
  });

  assert.equal(media.resolvePreferredExactLinkedSource(node, ["bg_media"]).src, "");
  assert.equal(media.linkedValue(node, "sticker_state"), "widget-state");
});

test("uses the backend source-state hash and falls back to hashing the exact linked state", () => {
  const stateRaw = '{"kind":"pano_sticker_state","version":1,"pose":{"yaw_deg":12,"pitch_deg":-3,"roll_deg":4,"hFOV_deg":55},"source_aspect":1.5}';
  const media = createAdapter({
    app: {
      nodeOutputs: {
        10: { ui: { pano_sticker_input_state_hash: ["backend-hash"] } },
      },
    },
  });

  assert.equal(media.externalStateHash({ id: 10 }, stateRaw), "backend-hash");
  assert.equal(media.externalStateHash({ id: 11 }, stateRaw), "575416577");
  assert.equal(media.externalStateHash({ id: 11 }, '{"note":"🧭"}'), "199228564");
});

test("Panorama Studio shows linked bg_media before a run and its own result after, also after a reload", () => {
  const loadImage = { id: 3, comfyClass: "LoadImage", widgets: [{ name: "image", value: "pano.png" }] };
  const loadSticker = { id: 4, comfyClass: "LoadImage", widgets: [{ name: "image", value: "sticker.png" }] };
  const node = comfyNode({
    id: 12,
    inputs: [
      { name: "bg_media", type: "IMAGE,VIDEO" },
      { name: "scene", type: "SPLAT,MESH,MOGE_GEOMETRY" },
      { name: "sticker", type: "IMAGE,VIDEO,MESH,SPLAT" },
    ],
    links: [{ origin_id: 3, origin_slot: 0 }, null, { origin_id: 4, origin_slot: 0 }],
    getInputNode: (slot) => [loadImage, null, loadSticker][slot],
  });
  const app = { nodeOutputs: {}, getNodeImageUrls: () => [] };
  const media = createAdapter({ app });

  const linked = media.resolvePreferredExactLinkedSource(node, ["bg_media", "bg_erp", "erp_image"]);
  assert.equal(linked.src, "/api/view?filename=pano.png&type=input&subfolder=");
  assert.equal(linked.inputName, "bg_media");
  assert.deepEqual(media.uiList(node, "pano_sticker_input_images"), []);

  // ComfyUI keeps the `ui` of the executed message under the node id, without a `ui` wrapper.
  const output = {
    pano_input_images: [{ filename: "bg.png", subfolder: "", type: "temp" }],
    pano_input_videos: [{ filename: "bg.mp4", subfolder: "", type: "temp", format: "video/mp4" }],
    pano_input_video_meta: [{ fps: 25, frames: 30, duration: 1.2, has_audio: true }],
    pano_sticker_input_images: [{ filename: "port.png", subfolder: "", type: "temp" }],
    pano_sticker_input_videos: [{ filename: "port.mp4", subfolder: "", type: "temp", format: "video/mp4" }],
    pano_sticker_input_video_meta: [{ kind: "VIDEO", fps: 30, frames: 45, duration: 1.5, has_audio: false }],
    pano_sticker_input_frames: [{ filename: "port_00000.png", subfolder: "", type: "temp", format: "image/png" }],
  };
  app.nodeOutputs = { 12: output };
  const read = () => [
    media.source(media.uiList(node, "pano_input_images")[0]),
    media.source(media.uiList(node, "pano_input_videos")[0]),
    media.uiValue(node, "pano_input_video_meta")[0].frames,
    media.source(media.uiList(node, "pano_sticker_input_images")[0]),
    media.source(media.uiList(node, "pano_sticker_input_videos")[0]),
    media.uiList(node, "pano_sticker_input_video_meta")[0].duration,
    media.source(media.uiList(node, "pano_sticker_input_frames")[0]),
  ];
  const executed = read();
  assert.deepEqual(executed, [
    "/api/view?filename=bg.png&type=temp",
    "/api/view?filename=bg.mp4&type=temp",
    30,
    "/api/view?filename=port.png&type=temp",
    "/api/view?filename=port.mp4&type=temp",
    1.5,
    "/api/view?filename=port_00000.png&type=temp",
  ]);

  // A reload restores the outputs as a clone keyed by the node locator id.
  app.nodeOutputs = structuredClone({ "12": output });
  assert.deepEqual(read(), executed);
});
