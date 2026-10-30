import assert from "node:assert/strict";
import test from "node:test";

import { createMediaSession } from "../web_src/editor/media_session.js";

// The old editor (docs/editor-architecture.md) shows the background linked to the node: Panorama Studio's input is
// `background` since ADR 0048 (`bg_media` before it, docs/studio-node.md "Panorama Studio"); the legacy nodes keep
// their own names.
function session({ type = "stickers", studio = true, inputs = [] } = {}) {
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
    stateV2: studio, studio, type, uiState: { videoTransport: {} },
  });
  media.connect({
    backgroundVideoPlace: () => null, isExternalSticker: () => false, requestDraw() {}, setTimelineFrame() {}, skyStickers: () => [],
    syncTimeline() {}, timelineSpanFrames: () => 1, upstreamStickers: () => [],
  });
  return { media, asked };
}

function cleanup() {
  delete globalThis.ResizeObserver;
  delete globalThis.HTMLVideoElement;
}

test("Panorama Studio's background is read from `background` as well as `bg_media`", () => {
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
    const stickers = session({ studio: false, inputs: [{ name: "bg_erp" }] });
    stickers.media.getConnectedErpImage();
    assert.ok(stickers.asked.at(-1).includes("bg_erp"));
    const cutout = session({ type: "cutout", studio: false, inputs: [{ name: "erp_image" }] });
    cutout.media.getConnectedErpImage();
    assert.deepEqual(cutout.asked.at(-1), ["erp_image", "bg_erp"]);
  } finally {
    cleanup();
  }
});
