// Paint strokes and the paint engine: the points of a freehand stroke, its radius, how it rasterizes, the
// revisions that tell the paint engine and the display caches to rebuild, and the raster objects made
// from a painted canvas.
import { createPaintEngineManager } from "../pano_paint_engine.js";
import {
  createRasterFrozenObjectsFromCanvas, createRasterSurface, paintTargetDescriptor,
  processFreehandPoints as processStrokePoints, rasterizeStrokeToSurface,
} from "../pano_paint_strokes.js";

export function createPaintStrokes(deps) {
  const {
    editor, runtime, state,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let invalidatePaintingLayerState, resolveEditorOutputPresetWidth;

  function processFreehandPoints(rawPoints, targetSpace, finalPass = false) {
    return processStrokePoints(rawPoints, targetSpace, finalPass);
  }

  function getPaintingRevisionKey() {
    // Tracks stroke changes (commit, undo/redo, clear all).
    const descriptor = getDesiredPaintTargetDescriptor();
    return `${String(editor.paintStrokeRevision)}:${descriptor.width}x${descriptor.height}`;
  }

  function getPaintingCompositeRevisionKey() {
    const descriptor = getDesiredPaintTargetDescriptor();
    return `${String(editor.paintStrokeRevision)}:${String(editor.paintCompositeRevision)}:${descriptor.width}x${descriptor.height}`;
  }

  function bumpPaintingStrokeRevision() {
    editor.paintStrokeRevision += 1;
    editor.paintCompositeRevision += 1;
  }

  function bumpPaintingCompositeRevision() {
    editor.paintCompositeRevision += 1;
  }

  function invalidateObjectVisualCaches() {
    editor._sortedItemsCache = null;
    editor._strokeGeomCache.clear();
  }

  function refreshPaintEngineRevisionCache() {
    editor.paintEngineRevisionKey = null;
    editor.paintEngine?.rebuildCommitted?.(state);
    editor.paintEngineRevisionKey = getPaintingRevisionKey();
  }

  function markObjectVisualsDirty() {
    invalidateObjectVisualCaches();
    runtime.backgroundDirty = true;
    runtime.dirty = true;
  }

  function markPaintStrokeVisualsDirty({ rebuildPaintEngine = false } = {}) {
    invalidatePaintingLayerState();
    bumpPaintingStrokeRevision();
    markObjectVisualsDirty();
    if (rebuildPaintEngine) {
      refreshPaintEngineRevisionCache();
    }
  }

  function markPaintCompositeVisualsDirty() {
    invalidatePaintingLayerState();
    bumpPaintingCompositeRevision();
    markObjectVisualsDirty();
  }

  function rebuildPaintEngineIfNeeded() {
    const descriptor = getDesiredPaintTargetDescriptor();
    const descriptorKey = `${descriptor.width}x${descriptor.height}`;
    if (editor.paintEngineDescriptorKey !== descriptorKey) {
      editor.paintEngine = createPaintEngineManager(descriptor);
      editor.paintEngineDescriptorKey = descriptorKey;
      editor.paintEngineRevisionKey = "";
    }
    const key = getPaintingRevisionKey();
    if (editor.paintEngineRevisionKey === key) return;
    editor.paintEngineRevisionKey = key;
    editor.paintEngine?.rebuildCommitted(state);
  }

  function getDesiredPaintTargetDescriptor() {
    // Root treatment: the ERP paint/mask workspace is its own coordinate space.
    // It must not inherit arbitrary connected-image dimensions, otherwise non-ERP
    // inputs can distort all panorama paint rendering.
    return paintTargetDescriptor(Math.max(1, resolveEditorOutputPresetWidth(Number(state?.output_preset || 2048))));
  }

  function getActivePaintTargetDescriptor() {
    return getDesiredPaintTargetDescriptor();
  }

  return {
    connect(api) {
      ({
        invalidatePaintingLayerState, resolveEditorOutputPresetWidth,
      } = api);
    },
    processFreehandPoints, createRasterSurface, getPaintingRevisionKey, getPaintingCompositeRevisionKey,
    refreshPaintEngineRevisionCache, markObjectVisualsDirty,
    markPaintStrokeVisualsDirty, markPaintCompositeVisualsDirty, rebuildPaintEngineIfNeeded,
    getDesiredPaintTargetDescriptor, getActivePaintTargetDescriptor, rasterizeStrokeToSurface,
    createRasterFrozenObjectsFromCanvas,
  };
}
