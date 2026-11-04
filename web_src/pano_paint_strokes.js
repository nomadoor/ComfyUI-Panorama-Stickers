// The paint and mask strokes the editors record, below both UIs (docs/editor-architecture.md "Paint layers"): the
// colors the brushes offer, a stroke's record and its points, how a stroke rasterizes, the stroke groups and their
// z_index, committing a stroke to the painting (docs/scene-state-v2.md `painting`), and the paint eraser, which turns
// the paint it touches into raster objects. The old editor (editor/paint_strokes.js, paint_input.js, items.js) and the
// new UI's (studio/paint.js) record strokes through these, so both write the same painting. Pure except for the
// canvases a raster needs; the paint engine's pixels (pano_paint_engine.js) are the caller's.
//
// The parts live in paint_strokes/ (colors, a stroke's record, rasterizing, the stroke groups, the eraser, committing);
// this module is what the rest of the suite imports.
export { directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta } from "./pano_paint_sphere.js";
export {
  cloneColor,
  colorsApproximatelyEqual,
  colorToCss,
  hsv01ToRgb,
  isPresetPaintColor,
  PAINT_COLOR_SWATCHES,
  rgb01ToHsv,
} from "./paint_strokes/color.js";
export {
  brushPresetIdForTool,
  brushStrokeSize,
  freehandStrokeRecord,
  lassoFillStrokeRecord,
  makePaintId,
  paintTargetDescriptor,
  processFreehandPoints,
  strokeSample,
  takesStrokePoint,
} from "./paint_strokes/record.js";
export {
  createRasterFrozenObjectsFromCanvas,
  createRasterSurface,
  rasterizeStrokeToSurface,
} from "./paint_strokes/raster.js";
export {
  ensurePaintGroup,
  frameDirectionAt,
  frameTangentOf,
  isPoleDirection,
  nextPaintZIndex,
  paintingGroups,
  paintingLayerStrokes,
  strokeGroupAxes,
  strokeGroupFrame,
  strokePoints,
  syncPaintGroups,
  topDisplayZIndex,
} from "./paint_strokes/groups.js";
export {
  erasePaint,
} from "./paint_strokes/eraser.js";
export {
  commitPaintStroke,
  statePainting,
} from "./paint_strokes/commit.js";
