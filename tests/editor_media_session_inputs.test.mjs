import assert from "node:assert/strict";
import test from "node:test";

import { createMediaSession } from "../web_src/editor/media_session.js";

// The old editor (docs/editor-architecture.md) shows the background linked to the node: Panorama Studio's input is
// `background` since ADR 0048 (`bg_media` before it, docs/studio-node.md "Panorama Studio"); the legacy nodes keep
// their own names.
function session({ type = "stickers", inputs = [] } = {}) {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.HTMLVideoElement = class {};
  const asked = [];
  const media = createMediaSession({
    api: { fetchApi: async () => ({ status: 404, json: async () => ({}) }) },
    comfyMedia: { uiList: () => [], uiValue: () => null, linkedVideoFile: () => "" },
    editor: {}, imageCache: new Map(), mediaAssetSource: () => "", mediaSource: () => "",
    loadPreferredExactLinkedImage: (node, names) => {
      asked.push([...names]);
      return null;
    },
    mediaUiImage: () => null, stillCanvas: { width: 0, height: 0 },
    node: { id: 7, inputs }, scheduler: { requestFrame: () => 0, cancelFrame() {} }, stageWrap: {}, state: { coverage: 360, stickers: [] },
    type, uiState: { videoTransport: {} },
  });
  media.connect({ cancelLiveEdits() {}, isExternalSticker: () => false, requestDraw() {}, skyStickers: () => [] });
  return { media, asked };
}

function cleanup() {
  delete globalThis.ResizeObserver;
  delete globalThis.HTMLVideoElement;
}

test("the old Stickers editor reads the background from `background` and `bg_media` too", () => {
  try {
    const { media, asked } = session({ inputs: [{ name: "scene" }, { name: "background" }, { name: "world" }] });
    media.getConnectedErpImage();
    assert.ok(asked.at(-1).includes("background"), JSON.stringify(asked));
    assert.ok(asked.at(-1).includes("bg_media"));
  } finally {
    cleanup();
  }
});

test("the legacy Stickers and Cutout editors keep their own input names", () => {
  try {
    const stickers = session({ inputs: [{ name: "bg_erp" }] });
    stickers.media.getConnectedErpImage();
    assert.ok(stickers.asked.at(-1).includes("bg_erp"));
    const cutout = session({ type: "cutout", inputs: [{ name: "erp_image" }] });
    cutout.media.getConnectedErpImage();
    assert.deepEqual(cutout.asked.at(-1), ["erp_image", "bg_erp"]);
  } finally {
    cleanup();
  }
});

// docs/editor-interaction.md「ポインタの取り消しとフォーカスの喪失」: a run's result cancels a pointer's edit under way
// before the background VIDEO follows the run.
test("a run's result cancels a pointer's edit under way before the background VIDEO is read again", () => {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.HTMLVideoElement = class {
    constructor() { this.dataset = {}; }
    addEventListener() {}
    removeEventListener() {}
    getAttribute() { return null; }
  };
  try {
    const order = [];
    const node = { id: 7, inputs: [], get comfyClass() { order.push("video"); return "PanoramaStickers"; } };
    const media = createMediaSession({
      comfyMedia: { uiList: () => [], uiValue: () => null, linkedVideoFile: () => "" },
      editor: {}, imageCache: new Map(), mediaAssetSource: () => "", mediaSource: () => "",
      loadPreferredExactLinkedImage: () => null, mediaUiImage: () => null, stillCanvas: { width: 0, height: 0 },
      node, scheduler: { requestFrame: () => 0, cancelFrame() {} }, stageWrap: {}, state: { coverage: 360, stickers: [] },
      type: "stickers", uiState: { videoTransport: {} }, videoEl: new globalThis.HTMLVideoElement(),
    });
    media.connect({ cancelLiveEdits: () => order.push("cancel"), isExternalSticker: () => false, requestDraw() {}, skyStickers: () => [] });
    order.length = 0;
    try {
      media.applyRunResult();
    } catch {
      // The stand-in VIDEO element plays nothing; only the order matters here.
    }
    assert.deepEqual(order.slice(0, 2), ["cancel", "video"]);
  } finally {
    cleanup();
  }
});
