import assert from "node:assert/strict";
import test from "node:test";
import { createEditorChooser, createStudioPreloader, NEW_UI_SETTING, NEW_UI_SETTING_ID, previewUsesNewWindow } from "../web_src/editor_choice.js";

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
  assert.equal(NEW_UI_SETTING.name, "Panorama Studio: new editor");
  assert.equal(NEW_UI_SETTING.type, "boolean");
  assert.equal(NEW_UI_SETTING.defaultValue, true);
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

test("the new editor preloads once, when the page is idle, only while the setting is on", () => {
  let on = false;
  const idle = [];
  let loads = 0;
  const check = createStudioPreloader({ newUiOn: () => on, preload: () => (loads += 1), whenIdle: (callback) => idle.push(callback) });
  check();
  assert.equal(idle.length, 0);
  on = true;
  check();
  check();
  assert.equal(idle.length, 1);
  assert.equal(loads, 0);
  idle[0]();
  assert.equal(loads, 1);
});

test("with the setting on, the Preview's read-only opening goes to the new window only when it takes the node", () => {
  for (const on of [true, false]) {
    const calls = [];
    const previewNode = { comfyClass: "PanoramaPreviewNode" };
    const openEditor = createEditorChooser({
      newUiOn: () => on,
      openOld: (...args) => calls.push(["old", ...args]),
      openStudio: (...args) => calls.push(["studio", ...args]),
      openPreview: (...args) => calls.push(["preview", ...args]),
      previewTakes: (node) => node === previewNode,
    });
    openEditor(previewNode, "stickers", { readOnly: true, hideSidebar: false });
    openEditor(stickersNode, "stickers", { readOnly: true, hideSidebar: false });
    assert.deepEqual(calls, [
      on ? ["preview", previewNode] : ["old", previewNode, "stickers", { readOnly: true, hideSidebar: false }],
      ["old", stickersNode, "stickers", { readOnly: true, hideSidebar: false }],
    ]);
  }
});

test("the new Preview window takes the Panorama Preview node with an IMAGE source only", () => {
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "IMAGE" }), true);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "VIDEO" }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "PANO_SCENE" }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "" }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaStickerPreview", sourceType: "IMAGE" }), false);
});
