import assert from "node:assert/strict";
import test from "node:test";
import { normalizePaintingState } from "../web_src/pano_paint_types.js";
import {
  brushPresetIdForTool, brushStrokeSize, commitPaintStroke, ensurePaintGroup, erpPointOfDirection, freehandStrokeRecord,
  lassoFillStrokeRecord, nextPaintZIndex, paintTargetDescriptor, syncPaintGroups, takesStrokePoint,
} from "../web_src/pano_paint_strokes.js";

// The lower paint strokes (web_src/pano_paint_strokes.js): the record a stroke gets and how it goes into the painting,
// which the old editor and the new UI share (docs/editor-architecture.md, docs/studio-ui.md "ペイントの道具").

const brush = { brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 }, activePresetId: "pen", paintColor: { r: 0, g: 1, b: 0, a: 1 }, viewMode: "pano" };
const point = (u, v, t = 0) => ({ targetKind: "ERP_GLOBAL", u, v, t });

test("a freehand stroke's record keeps the brush, its size as an ERP radius and its points", () => {
  const stroke = freehandStrokeRecord("paint", "pen", [point(0.4, 0.5)], { kind: "ERP_GLOBAL" }, brush);
  assert.match(stroke.id, /^paint_[0-9a-f]+$/);
  assert.match(stroke.actionGroupId, /^ag_[0-9a-f]+$/);
  assert.deepEqual(stroke.targetSpace, { kind: "ERP_GLOBAL", viewMode: "pano" });
  assert.equal(stroke.size, 20);
  assert.equal(stroke.radiusModel, "erp_uv_norm");
  assert.equal(stroke.radiusValue, 10 / 2048);
  assert.deepEqual(stroke.color, { r: 0, g: 1, b: 0, a: 1 });
  assert.equal(stroke.geometry.geometryKind, "freehand_open");
  assert.deepEqual(stroke.geometry.rawPoints, [{ ...point(0.4, 0.5), widthScale: 1, pressureLike: 1 }]);
  // The preset's render values go with it (pano_brush_presets.js applyPresetToStroke).
  assert.equal(stroke.stampKind, "round");
  // A mask stroke is black whatever the paint color.
  assert.deepEqual(freehandStrokeRecord("mask", "pen", [], { kind: "ERP_GLOBAL" }, brush).color, { r: 0, g: 0, b: 0, a: 1 });
});

test("the eraser and the lasso take the pen's and the last chosen preset's size", () => {
  assert.equal(brushPresetIdForTool("eraser", "marker"), "pen");
  assert.equal(brushPresetIdForTool("lasso_fill", "marker"), "marker");
  assert.equal(brushPresetIdForTool("brush", "marker"), "brush");
  assert.equal(brushStrokeSize("eraser", { ...brush, brushSizes: { pen: 7 } }), 7);
  const lasso = lassoFillStrokeRecord("paint", "lasso_fill", [], { kind: "ERP_GLOBAL" }, brush);
  assert.equal(lasso.geometry.geometryKind, "lasso_fill");
  assert.equal(lasso.radiusModel, null);
});

test("a sample too close to the last one is dropped", () => {
  assert.equal(takesStrokePoint(null, point(0.5, 0.5)), true);
  assert.equal(takesStrokePoint(point(0.5, 0.5), point(0.501, 0.501)), false);
  assert.equal(takesStrokePoint(point(0.5, 0.5), point(0.502, 0.5)), true);
});

test("a panorama direction's ERP point: forward (+z) is the middle, up the top", () => {
  assert.deepEqual(erpPointOfDirection({ x: 0, y: 0, z: 1 }, 5), { targetKind: "ERP_GLOBAL", u: 0.5, v: 0.5, t: 5 });
  assert.equal(erpPointOfDirection({ x: 1, y: 0, z: 0 }).u, 0.75);
  assert.equal(erpPointOfDirection({ x: 0, y: 1, z: 0 }).v, 0);
  assert.deepEqual(paintTargetDescriptor(), { kind: "ERP_GLOBAL", width: 2048, height: 1024 });
});

test("a paint stroke goes into a new group over the sky Stickers and the paint; a mask stroke has none", () => {
  const painting = normalizePaintingState(null);
  const sky = [{ z_index: 3 }];
  const stroke = freehandStrokeRecord("paint", "pen", [point(0.4, 0.5), point(0.45, 0.5)], { kind: "ERP_GLOBAL" }, brush);
  const ensureGroup = (gid) => ensurePaintGroup(painting, sky, gid);
  assert.equal(commitPaintStroke(painting, "paint", stroke, { ensureGroup, eraser: () => null }), true);
  assert.deepEqual(painting.paint.strokes, [stroke]);
  assert.ok(stroke.geometry.processedPoints.length > 2);
  assert.deepEqual(painting.groups, [{ id: stroke.actionGroupId, type: "strokeGroup", actionGroupId: stroke.actionGroupId, z_index: 4, locked: false, frame: null }]);
  assert.equal(nextPaintZIndex(painting, sky), 5);
  const mask = freehandStrokeRecord("mask", "pen", [point(0.2, 0.2)], { kind: "ERP_GLOBAL" }, brush);
  assert.equal(commitPaintStroke(painting, "mask", mask, { ensureGroup, eraser: () => null }), true);
  assert.deepEqual(painting.mask.strokes, [mask]);
  assert.equal(painting.groups.length, 1);
  // A lasso of fewer than 3 points and a stroke with no point change nothing.
  const lasso = lassoFillStrokeRecord("paint", "lasso_fill", [point(0.1, 0.1), point(0.2, 0.1)], { kind: "ERP_GLOBAL" }, brush);
  assert.equal(commitPaintStroke(painting, "paint", lasso, { ensureGroup, eraser: () => null }), false);
  const empty = freehandStrokeRecord("paint", "pen", [], { kind: "ERP_GLOBAL" }, brush);
  assert.equal(commitPaintStroke(painting, "paint", empty, { ensureGroup, eraser: () => null }), false);
  assert.equal(painting.paint.strokes.length, 1);
});

test("the groups follow the strokes: one without strokes goes, a missing one comes on top", () => {
  const painting = {
    paint: { strokes: [{ actionGroupId: "b" }] },
    mask: { strokes: [] },
    groups: [{ id: "a", type: "strokeGroup", actionGroupId: "a", z_index: 2 }],
    raster_objects: [],
  };
  const groups = syncPaintGroups(painting, [{ z_index: 0 }]);
  assert.deepEqual(groups.map((group) => [group.actionGroupId, group.z_index]), [["b", 3]]);
  assert.equal(painting.groups, groups);
});
