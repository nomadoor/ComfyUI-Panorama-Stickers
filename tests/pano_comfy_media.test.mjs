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
  const node = {
    id: 5,
    inputs: [
      { name: "erp_image", type: "IMAGE", link: 11 },
      { name: "bg_erp", type: "IMAGE", link: 12 },
      { name: "other_image", type: "IMAGE", link: 13 },
    ],
    graph: {
      links: {
        11: { origin_id: 101, origin_slot: 0 },
        12: { origin_id: 102, origin_slot: 1 },
        13: { origin_id: 103, origin_slot: 0 },
      },
    },
    getInputNode(index) {
      return origins[index] || { id: 103, imgs: [{ src: "/other.png" }] };
    },
  };
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
  const node = {
    id: 6,
    inputs: [{ name: "erp_image", type: "IMAGE", link: 21 }],
    graph: { links: new Map([[21, [21, 201, 2]]]) },
    getInputNode: () => subgraphNode,
    getInputLink: () => ({ origin_slot: 2 }),
  };
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

  assert.deepEqual(media.resolvePreferredExactLinkedSource(node, ["erp_image"]), {
    src: "/api/view?filename=first.png&type=output",
    srcCandidates: [
      "/api/view?filename=first.png&type=output",
      "/api/view?filename=second.png&type=output",
      "/api/view?filename=ui-third.png&type=output",
      "/api/view?filename=ui-first.png&type=output",
      "/api/view?filename=ui-second.png&type=output",
    ],
    sourceType: "nodeOutputs",
    inputName: "erp_image",
  });
});

test("falls back from outputs to node images and LoadImage widgets without changing inputs", () => {
  const nodeImageOrigin = { id: 211, imgs: [{ src: "/node-image.png" }] };
  const widgetOrigin = {
    id: 212,
    comfyClass: "LoadImage",
    widgets: [{ name: "image", value: "input file.png" }],
  };
  const node = {
    inputs: [
      { name: "erp_image", type: "IMAGE", link: 22 },
      { name: "bg_erp", type: "IMAGE", link: 23 },
    ],
    graph: {
      links: {
        22: { origin_id: 211, origin_slot: 0 },
        23: { origin_id: 212, origin_slot: 0 },
      },
      _nodes_by_id: { 212: widgetOrigin },
    },
    getInputNode(index) {
      if (index === 0) return nodeImageOrigin;
      throw new Error("graph is still restoring");
    },
  };
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
  const node = {
    id: 9,
    inputs: [{ name: "erp_image", type: "IMAGE", link: 31 }],
    graph: { links: { 31: { origin_id: 301, origin_slot: 0 } } },
    getInputNode: () => origin,
    setDirtyCanvas: (...args) => dirtyCalls.push(args),
  };
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
  const linkedNode = {
    inputs: [{ name: "sticker_state", link: 41 }],
    graph: { links: { 41: { origin_id: 401, origin_slot: 1 } } },
    widgets: [{ name: "sticker_state", value: "widget-state" }],
  };
  const widgetNode = {
    inputs: [{ name: "sticker_state", link: null }],
    widgets: [{ name: "sticker_state", value: "widget-state" }],
  };

  assert.equal(media.linkedValue(linkedNode, "sticker_state"), "linked-state");
  assert.equal(media.linkedValue(widgetNode, "sticker_state"), "widget-state");
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
