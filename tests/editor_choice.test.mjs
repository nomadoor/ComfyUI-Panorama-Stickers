import assert from "node:assert/strict";
import test from "node:test";
import { createEditorChooser, NEW_UI_SETTING, NEW_UI_SETTING_ID } from "../web_src/editor_choice.js";

function chooser(on) {
  const calls = [];
  const openEditor = createEditorChooser({
    newUiOn: () => on,
    openOld: (...args) => calls.push(["old", ...args]),
    openStudio: (...args) => calls.push(["studio", ...args]),
  });
  return { openEditor, calls };
}

const studioNode = { __panoStudio: true };
const stickersNode = { __panoStudio: false };

test("the new editor's setting is a boolean, off by default", () => {
  assert.equal(NEW_UI_SETTING.id, NEW_UI_SETTING_ID);
  assert.equal(NEW_UI_SETTING_ID, "PanoramaSuite.Editor.NewUI");
  assert.equal(NEW_UI_SETTING.name, "Panorama Studio: new editor (in development)");
  assert.equal(NEW_UI_SETTING.type, "boolean");
  assert.equal(NEW_UI_SETTING.defaultValue, false);
});

test("with the setting off or unset, every node opens the old editor with what it was given", () => {
  for (const on of [false, undefined, null]) {
    const { openEditor, calls } = chooser(on);
    openEditor(studioNode, "stickers");
    openEditor(stickersNode, "stickers");
    openEditor(stickersNode, "cutout");
    openEditor(studioNode, "stickers", { readOnly: true, hideSidebar: false });
    assert.deepEqual(calls, [
      ["old", studioNode, "stickers", {}],
      ["old", stickersNode, "stickers", {}],
      ["old", stickersNode, "cutout", {}],
      ["old", studioNode, "stickers", { readOnly: true, hideSidebar: false }],
    ]);
  }
});

test("with the setting on, only Panorama Studio's editor opens the new editor", () => {
  const { openEditor, calls } = chooser(true);
  openEditor(studioNode, "stickers");
  openEditor(stickersNode, "stickers");
  openEditor(stickersNode, "cutout");
  openEditor({}, "stickers", { readOnly: true });
  assert.deepEqual(calls, [
    ["studio", studioNode],
    ["old", stickersNode, "stickers", {}],
    ["old", stickersNode, "cutout", {}],
    ["old", {}, "stickers", { readOnly: true }],
  ]);
});
