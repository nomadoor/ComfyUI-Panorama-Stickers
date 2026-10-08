// The paint the on-node surfaces (pano_preview_runtime.js) draw: the node state's paint as Sky layers
// (skyPaintLayers), drawn by the surface's own paint engine and raster object canvases, kept in the surface's
// record (pano_node_bridge.js nodeSurface).
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { skyPaintLayers } from "./pano_paint_layers.js";
import { normalizePaintingState } from "./pano_paint_types.js";
import { createRasterObjectSurfaceCache, resolveRasterPreviewSize } from "./pano_raster_object_surface.js";

// The surfaces do not show the mask. The engine is made when a stroke group is drawn. A hidden painting draws
// nothing and lets go of the raster objects' canvases, which are drawn again when it shows.
// createEngine makes the paint engine (pano_paint_engine.js createPaintEngineManager).
export function surfacePaintLayers(surface, state, createEngine = createPaintEngineManager) {
  const painted = { ...state, painting: surfacePainting(surface, state.painting) };
  const previewSize = resolveRasterPreviewSize(state.output_preset);
  const rasterIds = [];
  let engine = null;
  const layers = skyPaintLayers(painted, {
    group: (id) => {
      engine ??= surfacePaintEngine(surface, painted, createEngine);
      const media = engine?.getGroupDisplayCanvas(id);
      return media && { media, revision: `${surface.paintRevisionKey}:${id}` };
    },
    raster: (item) => {
      surface.rasterCache ??= createRasterObjectSurfaceCache();
      surface.rasterReady ??= () => surface.dom?.requestDraw?.();
      rasterIds.push(item.id);
      const resolved = surface.rasterCache.get(item, previewSize.width, previewSize.height, surface.rasterReady);
      return resolved && { media: resolved.source, revision: resolved.revision };
    },
  });
  surface.rasterCache?.retain(rasterIds);
  return layers;
}

// The state's painting normalized (the legacy nodes' state holds the widget's painting as it is, or none), kept
// while the state holds the same painting.
function surfacePainting(surface, painting) {
  if (!surface.paintState || surface.paintState.painting !== painting) {
    surface.paintState = { painting, normalized: normalizePaintingState(painting) };
  }
  return surface.paintState.normalized;
}

// The surface's paint engine with the strokes of `state`, or null without strokes. It is drawn again when the
// painting changes, and paintRevisionKey counts the times, so the views upload its canvases again.
function surfacePaintEngine(surface, state, createEngine) {
  const { painting } = state;
  if (!painting.paint.strokes.length && !painting.mask.strokes.length) return null;
  // The editor's ERP paint workspace: the strokes are in panorama UV, whatever the size of the linked image.
  const width = Math.max(1, Number(state.output_preset || 2048));
  const descriptor = { kind: "ERP_GLOBAL", width, height: Math.max(1, Math.round(width * 0.5)) };
  const descriptorKey = `${descriptor.width}x${descriptor.height}`;
  if (!surface.paintEngine || surface.paintDescriptorKey !== descriptorKey) {
    surface.paintEngine = createEngine(descriptor);
    surface.paintDescriptorKey = descriptorKey;
    surface.paintRevision = null;
  }
  if (surface.paintRevision !== painting) {
    surface.paintRevision = painting;
    surface.paintRevisionKey = String((Number(surface.paintRevisionKey) || 0) + 1);
    surface.paintEngine.rebuildCommitted(state);
  }
  return surface.paintEngine;
}
