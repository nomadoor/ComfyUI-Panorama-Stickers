import assert from "node:assert/strict";
import test from "node:test";
import { createEditorChooser, createStudioPreloader, previewUsesNewWindow } from "../web_src/editor_choice.js";

function chooser() {
  const calls = [];
  const openEditor = createEditorChooser({
    openOld: (...args) => calls.push(["old", ...args]),
    openStudio: (...args) => calls.push(["studio", ...args]),
  });
  return { openEditor, calls };
}

const studioNode = { __panoStudio: true };
const stickersNode = { __panoStudio: false };

// ADR 0062: there is no setting; Panorama Studio always opens the new editor, also when asked read-only.
test("Panorama Studio's editor always opens the new editor, read-only too; the other nodes open the old editor", () => {
  const { openEditor, calls } = chooser();
  openEditor(studioNode, "stickers");
  openEditor(studioNode, "stickers", { readOnly: true, hideSidebar: false });
  openEditor(stickersNode, "stickers");
  openEditor(stickersNode, "cutout");
  openEditor({}, "stickers", { readOnly: true });
  assert.deepEqual(calls, [
    ["studio", studioNode],
    ["studio", studioNode],
    ["old", stickersNode, "stickers", {}],
    ["old", stickersNode, "cutout", {}],
    ["old", {}, "stickers", { readOnly: true }],
  ]);
});

test("the new editor preloads once, when the page is idle", () => {
  const idle = [];
  let loads = 0;
  const check = createStudioPreloader({ preload: () => (loads += 1), whenIdle: (callback) => idle.push(callback) });
  check();
  check();
  assert.equal(idle.length, 1);
  assert.equal(loads, 0);
  idle[0]();
  assert.equal(loads, 1);
});

test("the Preview's read-only opening goes to the new window only when it takes the node", () => {
  const calls = [];
  const previewNode = { comfyClass: "PanoramaPreviewNode" };
  const openEditor = createEditorChooser({
    openOld: (...args) => calls.push(["old", ...args]),
    openStudio: (...args) => calls.push(["studio", ...args]),
    openPreview: (...args) => calls.push(["preview", ...args]),
    previewTakes: (node) => node === previewNode,
  });
  openEditor(previewNode, "stickers", { readOnly: true, hideSidebar: false });
  openEditor(stickersNode, "stickers", { readOnly: true, hideSidebar: false });
  assert.deepEqual(calls, [
    ["preview", previewNode],
    ["old", stickersNode, "stickers", { readOnly: true, hideSidebar: false }],
  ]);
});

// docs/preview-node.md "ノード上": the node surface's top-right button asks the chooser whether the window takes the node.
test("the chooser says whether the new Preview window takes a node, by previewTakes", () => {
  const previewNode = { comfyClass: "PanoramaPreviewNode" };
  const takes = createEditorChooser({
    openOld() {},
    openStudio() {},
    openPreview() {},
    previewTakes: (node) => node === previewNode,
  }).previewWindowTakes;
  assert.equal(takes(previewNode), true);
  assert.equal(takes({}), false);
  assert.equal(createEditorChooser({ openOld() {}, openStudio() {}, previewTakes: () => true }).previewWindowTakes(previewNode), false);
});

test("the new Preview window takes the Panorama Preview node with an IMAGE or a VIDEO source only", () => {
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "IMAGE" }), true);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "VIDEO" }), true);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "PANO_SCENE" }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "" }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaStickerPreview", sourceType: "IMAGE" }), false);
});

test("with nothing linked to its source (no link on the slot), the Panorama Preview node opens the new window too", () => {
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "", sourceLinked: false }), true);
  // A link whose type is not known (an untyped Reroute) keeps the browser's fullscreen.
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "", sourceLinked: true }), false);
  assert.equal(previewUsesNewWindow({ type: "PanoramaPreviewNode", sourceType: "IMAGE", sourceLinked: true }), true);
  assert.equal(previewUsesNewWindow({ type: "PanoramaStickerPreview", sourceType: "", sourceLinked: false }), false);
});
