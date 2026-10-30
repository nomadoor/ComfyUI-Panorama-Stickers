import assert from "node:assert/strict";
import test from "node:test";

import { createMediaSession } from "../web_src/editor/media_session.js";

// docs/threejs-spark-integration.md: the editor's media of a 3D file Sticker. It has no image (its item draws), its
// editor file comes from the route once per Source, and a file that could not be read says why on the stage.
function session(route) {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.HTMLVideoElement = class {};
  const images = [];
  globalThis.Image = class { constructor() { images.push(this); } };
  const asked = [];
  const state = { coverage: 360, stickers: [] };
  const media = createMediaSession({
    api: {
      fetchApi: async (path, options) => {
        asked.push({ path, body: JSON.parse(options.body) });
        return { status: route.status, json: async () => route.body };
      },
    },
    comfyMedia: { uiList: () => [], uiValue: () => null },
    editor: {}, imageCache: new Map(), mediaAssetSource: (asset) => `/view?filename=${asset.filename}`,
    mediaSource: (entry) => `/view?filename=${entry.filename}&type=${entry.type}`,
    node: { id: 7, inputs: [] }, scheduler: { requestFrame: () => 0, cancelFrame() {} }, stageWrap: {}, state,
    stateV2: true, studio: true, type: "stickers", uiState: { videoTransport: {} },
  });
  let draws = 0;
  media.connect({
    backgroundVideoPlace: () => null, isExternalSticker: (item) => item?.source?.kind === "port", requestDraw: () => { draws += 1; },
    setTimelineFrame() {}, skyStickers: () => [], syncTimeline() {}, timelineSpanFrames: () => 1, upstreamStickers: () => [],
  });
  return { media, state, images, asked, draws: () => draws };
}

function cleanup() {
  delete globalThis.ResizeObserver;
  delete globalThis.HTMLVideoElement;
  delete globalThis.Image;
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 0));
const sticker = (id, filename) => ({ id, placement: "world", source: { kind: "file", filename, subfolder: "3d", storage: "input" } });

test("a 3D file Sticker has no image to load, an image Sticker has", () => {
  try {
    const { media, images, asked } = session({ status: 200, body: {} });
    assert.equal(media.getStickerImage(sticker("sticker_1", "chair.glb")), null);
    assert.equal(images.length, 0);
    assert.equal(asked.length, 0);
    assert.notEqual(media.getStickerImage(sticker("sticker_2", "photo.png")), null);
    assert.equal(images.length, 1);
  } finally {
    cleanup();
  }
});

test("a 3D file's editor file is asked for once, and is there once the route answered", async () => {
  try {
    const { media, asked, draws } = session({ status: 200, body: { kind: "mesh", unlit: false, file: { filename: "e.glb", type: "temp" } } });
    const chair = sticker("sticker_1", "chair.glb");
    assert.equal(media.file3dEditorFile(chair), null);
    assert.equal(media.file3dEditorFile(chair), null);
    await settle();
    assert.deepEqual(asked, [{ path: "/panorama_suite/file_3d", body: { filename: "chair.glb", subfolder: "3d", storage: "input" } }]);
    assert.equal(draws(), 1);
    assert.deepEqual(media.file3dEditorFile(chair), { kind: "mesh", unlit: false, url: "/view?filename=e.glb&type=temp", generation: 0 });
    assert.equal(media.file3dEditorFile(sticker("sticker_2", "photo.png")), null);
    assert.equal(asked.length, 1);
    assert.equal(media.file3dNotice(), "");
  } finally {
    cleanup();
  }
});

test("a 3D file in the editor that could not be read says why while its Sticker is there", async () => {
  const error = "Could not read the 3D file 3d/rig.fbx: Unsupported format";
  try {
    const { media, state } = session({ status: 422, body: { error } });
    const rig = sticker("sticker_1", "rig.fbx");
    state.stickers.push(rig);
    assert.equal(media.file3dEditorFile(rig), null);
    await settle();
    // The Sticker stays; only the text tells.
    assert.equal(media.file3dEditorFile(rig), null);
    assert.equal(media.file3dNotice(), error);
    assert.equal(state.stickers.length, 1);
    // Without the Sticker there is nothing to tell.
    state.stickers.length = 0;
    assert.equal(media.file3dNotice(), "");
  } finally {
    cleanup();
  }
});
