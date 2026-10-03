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

const LEFT = 0;
const MIDDLE = 1;
const RIGHT = 2;

function drag(button, modifiers = {}) {
  return { button, shiftKey: false, altKey: false, ctrlKey: false, metaKey: false, ...modifiers };
}

function table(preset) {
  const rows = {};
  for (const button of [LEFT, MIDDLE, RIGHT]) {
    for (const [name, modifiers] of [["", {}], ["shift+", { shiftKey: true }], ["alt+", { altKey: true }]]) {
      const action = viewDragAction(preset, drag(button, modifiers));
      if (action) rows[`${name}${["left", "middle", "right"][button]}`] = action;
    }
  }
  return rows;
}

test("the default 3D view controls look with the middle button, orbit with the right, pan with Shift", () => {
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.default), {
    middle: "look",
    "shift+middle": "pan",
    right: "orbit",
    "shift+right": "pan",
  });
});

test("the Blender-like preset orbits with the middle button, pans with Shift + middle and looks with the right", () => {
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.blender), {
    middle: "orbit",
    "shift+middle": "pan",
    right: "look",
  });
});

test("the Unity-like preset looks with the right button, orbits with Alt + left and pans with the middle", () => {
  assert.deepEqual(table(VIEW_CONTROL_PRESETS.unity), {
    "alt+left": "orbit",
    middle: "pan",
    right: "look",
  });
});

test("every preset can look around without touching an object, and leaves the plain left drag to the tools", () => {
  for (const [id, preset] of Object.entries(VIEW_CONTROL_PRESETS)) {
    // A binding acts wherever the drag starts, over an object too.
    assert.ok(preset.bindings.some((binding) => binding.action === "look" && binding.button !== LEFT), id);
    for (const action of ["look", "orbit", "pan"]) assert.ok(preset.bindings.some((binding) => binding.action === action), `${id} ${action}`);
    // The left button edits objects and looks around on empty space, as in 3DoF.
    assert.equal(viewDragAction(preset, drag(LEFT)), null, id);
    // Ctrl + left is the marquee selection.
    assert.equal(viewDragAction(preset, drag(LEFT, { ctrlKey: true })), null, id);
    assert.equal(viewDragAction(preset, drag(RIGHT, { ctrlKey: true })), null, id);
    // Each button and modifiers has one action.
    const keys = preset.bindings.map((binding) => `${binding.button}:${!!binding.shift}:${!!binding.alt}`);
    assert.equal(new Set(keys).size, keys.length, id);
  }
});

test("a preset that drags with the right button keeps the context menu from opening", () => {
  for (const preset of Object.values(VIEW_CONTROL_PRESETS)) assert.equal(presetUsesButton(preset, RIGHT), true);
  assert.equal(presetUsesButton({ bindings: [{ button: MIDDLE, action: "look" }] }, RIGHT), false);
});

test("the preset is ComfyUI's setting, and an unknown value is the default", () => {
  assert.equal(VIEW_CONTROLS_SETTING.id, VIEW_CONTROLS_SETTING_ID);
  assert.equal(VIEW_CONTROLS_SETTING.name, "3D view controls");
  assert.equal(VIEW_CONTROLS_SETTING.type, "combo");
  assert.equal(VIEW_CONTROLS_SETTING.defaultValue, "default");
  assert.deepEqual(VIEW_CONTROLS_SETTING.options.map((option) => option.value), ["default", "blender", "unity"]);
  assert.equal(viewControlsPreset("blender"), VIEW_CONTROL_PRESETS.blender);
  assert.equal(viewControlsPreset(undefined), VIEW_CONTROL_PRESETS.default);
  assert.equal(viewControlsPreset("toString"), VIEW_CONTROL_PRESETS.default);
  const extension = createPanoEditorExtension({ app: {}, openEditor() {}, attachStickers() {}, attachCutout() {}, attachPreview() {} });
  assert.deepEqual(extension.settings, [VIEW_CONTROLS_SETTING]);
});
