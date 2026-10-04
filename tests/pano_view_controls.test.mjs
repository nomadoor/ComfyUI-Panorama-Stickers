import assert from "node:assert/strict";
import test from "node:test";

import {
  VIEW_CONTROLS_SETTING,
  VIEW_CONTROLS_SETTING_ID,
  VIEW_CONTROL_PRESETS,
  presetUsesButton,
  viewControlsPreset,
  viewDragAction,
} from "../web_src/pano_view_controls.js";
import { createPanoEditorExtension } from "../web_src/pano_editor_extension.js";
import { DIAGNOSTICS_SETTING } from "../web_src/pano_diagnostics.js";

const LEFT = 0;
const MIDDLE = 1;
const RIGHT = 2;

function drag(button, modifiers = {}) {
  return { button, shiftKey: false, altKey: false, ctrlKey: false, metaKey: false, ...modifiers };
}

// What each drag does in a preset: the bindings, and the left drag on empty space ("empty left").
function table(preset) {
  const rows = {};
  for (const button of [LEFT, MIDDLE, RIGHT]) {
    for (const [name, modifiers] of [["", {}], ["shift+", { shiftKey: true }], ["alt+", { altKey: true }]]) {
      const action = viewDragAction(preset, drag(button, modifiers));
      if (action) rows[`${name}${["left", "middle", "right"][button]}`] = action;
    }
  }
  if (preset.emptyLeft) rows["empty left"] = preset.emptyLeft;
  return rows;
}

test("the default 3D view controls orbit with the right button and on empty space, and pan with the middle or Shift + right", () => {
  // Like core's Load3D (OrbitControls) and Sketchfab; no look around in place.
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.default), {
    middle: "pan",
    right: "orbit",
    "shift+right": "pan",
    "empty left": "orbit",
  });
});

test("the Blender-like preset orbits with the middle button and pans with Shift + middle, as Blender does", () => {
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.blender), {
    middle: "orbit",
    "shift+middle": "pan",
  });
});

test("the Unity-like preset flies with the right button, orbits with Alt + left and pans with the middle", () => {
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.unity), {
    "alt+left": "orbit",
    middle: "pan",
    right: "look",
  });
});

test("every preset turns and pans the view without touching an object, and leaves the plain left drag to the tools", () => {
  for (const [id, preset] of Object.entries(VIEW_CONTROL_PRESETS)) {
    // A binding acts wherever the drag starts, over an object too; none is a plain left drag.
    assert.ok(preset.bindings.every((binding) => binding.button !== LEFT || binding.alt || binding.shift), id);
    assert.ok(preset.bindings.some((binding) => binding.action === "orbit" || binding.action === "look"), `${id} turn`);
    assert.ok(preset.bindings.some((binding) => binding.action === "pan"), `${id} pan`);
    // The left button edits the object under it; on empty space it does the preset's emptyLeft.
    assert.equal(viewDragAction(preset, drag(LEFT)), null, id);
    assert.ok(preset.emptyLeft === null || ["orbit", "pan"].includes(preset.emptyLeft), id);
    // Ctrl + left is the marquee selection.
    assert.equal(viewDragAction(preset, drag(LEFT, { ctrlKey: true })), null, id);
    assert.equal(viewDragAction(preset, drag(RIGHT, { ctrlKey: true })), null, id);
    // Each button and modifiers has one action.
    const keys = preset.bindings.map((binding) => `${binding.button}:${!!binding.shift}:${!!binding.alt}`);
    assert.equal(new Set(keys).size, keys.length, id);
  }
  // Only Unity looks around in place in 6DoF.
  assert.deepEqual(Object.entries(VIEW_CONTROL_PRESETS).filter(([, preset]) => preset.bindings.some((binding) => binding.action === "look")).map(([id]) => id), ["unity"]);
});

test("a preset that drags with the right button keeps the context menu from opening", () => {
  assert.equal(presetUsesButton(VIEW_CONTROL_PRESETS.default, RIGHT), true);
  assert.equal(presetUsesButton(VIEW_CONTROL_PRESETS.unity, RIGHT), true);
  assert.equal(presetUsesButton(VIEW_CONTROL_PRESETS.blender, RIGHT), false);
});

test("the preset is ComfyUI's setting, and an unknown value is the default", () => {
  assert.equal(VIEW_CONTROLS_SETTING.id, VIEW_CONTROLS_SETTING_ID);
  assert.equal(VIEW_CONTROLS_SETTING.name, "3D view controls");
  assert.equal(VIEW_CONTROLS_SETTING.type, "combo");
  assert.equal(VIEW_CONTROLS_SETTING.defaultValue, "default");
  assert.deepEqual(VIEW_CONTROLS_SETTING.options.map((option) => option.value), ["default", "blender", "unity"]);
  // A label names what the preset adds to the app it is like; the saved values stay.
  assert.deepEqual(VIEW_CONTROLS_SETTING.options.map((option) => option.text), ["Default", "Blender-like", "Unity-like"]);
  assert.equal(viewControlsPreset("blender"), VIEW_CONTROL_PRESETS.blender);
  assert.equal(viewControlsPreset(undefined), VIEW_CONTROL_PRESETS.default);
  assert.equal(viewControlsPreset("toString"), VIEW_CONTROL_PRESETS.default);
  const extension = createPanoEditorExtension({ app: {}, openEditor() {}, attachStickers() {}, attachCutout() {}, attachPreview() {} });
  assert.deepEqual(extension.settings, [VIEW_CONTROLS_SETTING, DIAGNOSTICS_SETTING]);
});
