import assert from "node:assert/strict";
import test from "node:test";

import { buildSelectionMenuModel } from "../web_src/pano_editor_ui_state.js";

test("the sole Cutout frame exposes an explicit delete action", () => {
  const shot = { id: "frame_1", locked: false };
  const model = buildSelectionMenuModel({
    type: "cutout",
    selected: shot,
    selectedItems: [shot],
    selectedKind: "shot",
    geom: {
      visible: true,
      corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }],
    },
    allLocked: false,
    selectedLocked: false,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
  });

  assert.equal(model.visible, true);
  assert.ok(model.items.some((item) => item.action === "delete"));
});

test("locked modal selections disable destructive and ordering actions", () => {
  const selected = { id: "sticker_1", locked: true };
  const model = buildSelectionMenuModel({
    type: "stickers",
    selected,
    selectedItems: [selected],
    selectedKind: "image",
    geom: {
      visible: true,
      corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }],
    },
    allLocked: true,
    anyLocked: true,
    selectedLocked: true,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
  });

  for (const action of ["bring-front", "send-back", "delete"]) {
    assert.equal(model.items.find((item) => item.action === action)?.disabled, true);
  }
});
