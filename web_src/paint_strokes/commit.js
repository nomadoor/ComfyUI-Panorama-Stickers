// Committing a finished stroke to the painting (docs/scene-state-v2.md `painting`), and the painting of a state.
import { normalizePaintingState } from "../pano_paint_types.js";
import { erasePaint } from "./eraser.js";
import { paintingLayerStrokes } from "./groups.js";
import { processFreehandPoints } from "./record.js";

// --- Committing a stroke.

// Commits the finished stroke `stroke` of the layer `layerKind` to `painting`: a freehand stroke gets its durable
// processedPoints; a paint stroke (not the eraser) gets its stroke group (ensureGroup(actionGroupId), which adds it:
// ensurePaintGroup) and goes on the paint layer, a mask stroke on the mask layer; the paint eraser erases (erasePaint,
// with the sources eraser() gives). Returns whether the painting changed (a lasso of fewer than 3 points or a stroke
// with no point does not).
export function commitPaintStroke(painting, layerKind, stroke, { ensureGroup, eraser }) {
  const geometry = stroke?.geometry || null;
  if (!geometry) return false;
  const toolKind = String(stroke?.toolKind || "pen");
  if (layerKind === "paint" && toolKind === "eraser") {
    if (geometry.geometryKind !== "lasso_fill") {
      geometry.processedPoints = processFreehandPoints(geometry.rawPoints || geometry.points || [], stroke.targetSpace, true);
    }
    const sources = eraser();
    return sources ? erasePaint(painting, stroke, sources) : false;
  }
  const shouldCreatePaintGroup = layerKind === "paint" && toolKind !== "eraser";
  if (geometry.geometryKind === "lasso_fill") {
    const points = Array.isArray(geometry.points) ? geometry.points : [];
    if (points.length < 3) return false;
    if (shouldCreatePaintGroup) ensureGroup(stroke?.actionGroupId);
    paintingLayerStrokes(painting, layerKind).push(stroke);
    return true;
  }
  const rawPoints = geometry.rawPoints || geometry.points || [];
  if (rawPoints.length < 1) return false;
  // ADR 0006: processedPoints is durable; rasterizer (Python) uses it directly.
  geometry.processedPoints = processFreehandPoints(rawPoints, stroke.targetSpace, true);
  if (shouldCreatePaintGroup) ensureGroup(stroke?.actionGroupId);
  paintingLayerStrokes(painting, layerKind).push(stroke);
  return true;
}

// The painting of a state, made when it has none.
export function statePainting(state) {
  return state.painting || (state.painting = normalizePaintingState(null));
}
