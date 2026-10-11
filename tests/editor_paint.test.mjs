import assert from "node:assert/strict";
import test from "node:test";

import { createCommands } from "../web_src/editor/commands.js";
import { createPaintStrokes } from "../web_src/editor/paint_strokes.js";

// A 2D canvas of `width` x `height` whose pixels are `alpha` (row by row), with the calls a lasso fill makes.
function fakeCanvas(width = 0, height = 0, alpha = []) {
  const canvas = {
    width,
    height,
    getContext: () => ({
      getImageData: (x, y, w, h) => {
        const data = new Uint8ClampedArray(w * h * 4);
        alpha.forEach((value, index) => { data[index * 4 + 3] = value; });
        return { data };
      },
      createImageData: (w, h) => ({ data: new Uint8ClampedArray(w * h * 4) }),
      putImageData() {},
    }),
    toDataURL: () => "data:image/png;base64,",
  };
  return canvas;
}

test("a lasso fill's raster objects let their working canvases go once encoded", (t) => {
  const made = [];
  globalThis.document = { createElement: () => { const canvas = fakeCanvas(); made.push(canvas); return canvas; } };
  t.after(() => delete globalThis.document);
  const strokes = createPaintStrokes({ editor: {}, runtime: {}, state: {} });
  // Two separate filled pixels: two raster objects.
  const source = fakeCanvas(6, 1, [255, 0, 0, 255, 0, 0]);
  const objects = strokes.createRasterFrozenObjectsFromCanvas(source, "paint");
  assert.equal(objects.length, 2);
  assert.equal(made.length, 2);
  for (const canvas of made) assert.deepEqual([canvas.width, canvas.height], [0, 0]);
});

test("Clear Paint during a paint stroke cancels the stroke in the paint engine", async () => {
  for (const kind of ["paint_stroke", "paint_lasso_fill"]) {
    const cancelled = [];
    const editor = {
      interaction: { kind, layerKind: "paint" },
      paintEngine: { cancelActiveStroke: (target) => cancelled.push(target) },
    };
    const uiState = { confirmDialog: { visible: false } };
    const state = { painting: { raster_objects: [] } };
    const commands = createCommands({ editor, readOnly: false, state, type: "stickers", uiState });
    const noop = () => {};
    commands.connect({
      commitAndRefreshNode: noop, getActivePaintTargetDescriptor: () => "target", getPaintingGroupList: () => [],
      getPaintingLayerList: () => [], getRasterObjectList: () => [], markPaintStrokeVisualsDirty: noop, pushHistory: noop,
      requestDraw: noop, syncPaintUi: noop, updateSelectionMenu: noop, updateSidePanel: noop,
    });
    const clearing = commands.clearPaintingLayer("paint");
    assert.equal(uiState.confirmDialog.visible, true, kind);
    commands.settleCanvasConfirm(true);
    await clearing;
    assert.deepEqual(cancelled, ["target"], kind);
    assert.equal(editor.interaction, null, kind);
  }
});
