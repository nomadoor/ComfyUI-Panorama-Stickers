import assert from "node:assert/strict";
import test from "node:test";

import { buildSelectionMenuModel, floatingRightState, frameViewButton, inspectorRows, selectionMenuPlacement } from "../web_src/pano_editor_ui_state.js";
import { buildModalShellPreset } from "../web_src/modal_shell_presets.js";

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

test("the inspector puts grouped fields side by side in one row and the others alone with a slider", () => {
  const param = (key, label) => ({ key, label, value: 0, displayValue: "0" });
  const rows = inspectorRows([
    param("position_x", "X"), param("position_y", "Y"), param("position_z", "Z"),
    param("yaw_deg", "Yaw"), param("pitch_deg", "Pitch"), param("rot_deg", "Roll"),
    param("hFOV_deg", "H FOV"), param("vFOV_deg", "V FOV"),
    param("scale", "Scale"), param("opacity", "Opacity"),
  ]);
  assert.deepEqual(rows.map((row) => [row.label, row.grouped, row.fields.map((field) => field.short ?? field.label)]), [
    ["Position", true, ["X", "Y", "Z"]],
    ["Rotation", true, ["Y", "P", "R"]],
    ["FOV", true, ["H", "V"]],
    ["Scale", false, ["Scale"]],
    ["Opacity", false, ["Opacity"]],
  ]);
  assert.deepEqual(rows[1].fields.map((field) => [field.key, field.label, field.drag]), [["yaw_deg", "Yaw", 0.5], ["pitch_deg", "Pitch", 0.5], ["rot_deg", "Roll", 0.5]]);
});

test("a selection menu goes below its target, above it when it does not fit, and inside the canvas otherwise", () => {
  // 400 x 300 canvas, a 100 x 40 menu; 14px from the edges, 18px from the target.
  const place = (anchor) => selectionMenuPlacement(anchor, 100, 40, 400, 300);
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 100, maxY: 150 }), { left: 150, top: 168 });
  // Near the bottom it goes above the target.
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 200, maxY: 260 }), { left: 150, top: 142 });
  // A target filling the canvas: neither fits, so the menu stays at the bottom edge inside it.
  assert.deepEqual(place({ minX: 0, maxX: 400, minY: 20, maxY: 290 }), { left: 150, top: 246 });
  // A target off the canvas below or above still gets a menu inside it.
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 600, maxY: 700 }), { left: 150, top: 246 });
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: -300, maxY: -200 }), { left: 150, top: 14 });
  // And sideways it stays inside too.
  assert.deepEqual(place({ minX: 380, maxX: 500, minY: 100, maxY: 150 }), { left: 286, top: 168 });
  assert.equal(place({ minX: NaN, maxX: 1, minY: 1, maxY: 1 }), null);
});

test("no bottom-right button moves when another one shows, hides or changes", () => {
  const states = [];
  for (const readOnly of [false, true]) {
    for (const frameMode of [false, true]) {
      for (const showGrid of [false, true]) states.push({ readOnly, frameMode, showGrid });
    }
  }
  for (const preset of [buildModalShellPreset("stickers"), buildModalShellPreset("cutout")]) {
    for (const state of states) {
      const floating = floatingRightState(state);
      // The buttons always show: nothing here hides one.
      for (const patch of Object.values(floating.buttons)) assert.equal("visible" in patch, false);
      assert.deepEqual(Object.keys(floating.buttons).filter((action) => !preset.floatingButtons.some((button) => button.action === action)), []);
      assert.equal(preset.floatingButtons.some((button) => "visible" in button), false);
      assert.equal("space" in floating, false);
    }
  }
});

test("the Cutout's Frame tab stays in place, disabled while it has no frame to show", () => {
  assert.deepEqual(frameViewButton({ hasShot: false }), { disabled: true, tip: null });
  assert.deepEqual(frameViewButton({ hasShot: true }), { disabled: false, tip: null });
});

