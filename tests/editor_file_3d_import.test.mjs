import assert from "node:assert/strict";
import test from "node:test";

import { createStickerImport } from "../web_src/editor/sticker_import.js";

// The old editor (the legacy nodes) takes images only: a 3D file is neither dropped nor cued (3D files are placed in
// the new UI, docs/editor-interaction.md "3D ファイルを置く流れ").
function harness() {
  const calls = { uploads: [] };
  const state = { stickers: [], assets: {} };
  const dragCue = { active: false, depth: 0 };
  const module = createStickerImport({
    api: { fetchApi: async (path, options) => { calls.uploads.push({ path, body: options.body }); return { status: 500 }; } },
    dragCue,
    editor: { selectedId: null, viewYaw: 0, viewPitch: 0 },
    imageCache: new Map(),
    node: {},
    readOnly: false,
    stageWrap: { classList: { toggle() {} } },
    state,
    type: "stickers",
    vueModal: null,
  });
  const noop = () => {};
  module.connect({
    commitAndRefreshNode: noop, computeStickerVFov: () => 30, forceCursorTool: noop, getNextStickerZIndex: () => 0,
    getSelected: () => null, isExternalSticker: () => false, isStickerItem: () => true, markObjectVisualsDirty: noop,
    pushHistory: noop, requestDraw: noop, setSelectedItem: noop, updateSelectionMenu: noop, updateSidePanel: noop,
  });
  return { module, state, calls, dragCue };
}

const glb = (size = 4) => new File([new Uint8Array(size)], "chair.glb");

test("the legacy modal takes no 3D file: a drop adds nothing, and its drag shows no drop cue", () => {
  const legacy = harness();
  legacy.module.onCanvasDrop({ preventDefault() {}, stopPropagation() {}, dataTransfer: { files: [glb()] } });
  assert.deepEqual(legacy.state.stickers, []);
  assert.equal(legacy.calls.uploads.length, 0);
  const dragged = { preventDefault() {}, dataTransfer: { items: [{ kind: "file", type: "model/gltf-binary" }], files: [] } };
  legacy.module.onWindowDragEnter(dragged);
  assert.equal(legacy.dragCue.active, false);
});
