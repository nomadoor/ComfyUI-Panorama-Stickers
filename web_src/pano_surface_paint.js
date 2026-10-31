// The paint the on-node surfaces (pano_preview_runtime.js) draw: the node state's paint as Sky layers, drawn by the
// surface's paint display (pano_paint_display.js, the node surface's rules), kept in the surface's record
// (pano_node_bridge.js nodeSurface).
import { createPaintEngineManager } from "./pano_paint_engine.js";
import { createPaintDisplay, PAINT_DISPLAY_PLACES } from "./pano_paint_display.js";
import { normalizePaintingState } from "./pano_paint_types.js";

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

// The size of the raster objects' canvases on a node surface: the output preset's width, at most `maxWidth`, by half.
export function resolveRasterPreviewSize(outputPreset, maxWidth = 1024) {
  const requestedWidth = Math.max(1, Math.round(finite(outputPreset, 2048)));
  const width = Math.min(requestedWidth, Math.max(1, Math.round(finite(maxWidth, 1024))));
  return { width, height: Math.max(1, Math.round(width * 0.5)) };
}

// The surfaces do not show the mask. The engine is made when a stroke group is drawn, at the editor's ERP paint
// workspace (the strokes are in panorama UV, whatever the size of the linked image), and drawn again when the painting
// changes. A hidden painting draws nothing and lets go of the raster objects' canvases, which are drawn again when it
// shows. createEngine makes the paint engine (pano_paint_engine.js createPaintEngineManager).
export function surfacePaintLayers(surface, state, createEngine = createPaintEngineManager) {
  const painted = { ...state, painting: surfacePainting(surface, state.painting) };
  // What this draw gives the display: the state (its output preset sizes the engine and the rasters) and the engine maker.
  surface.paintInput = { state, createEngine };
  surface.paintDisplay ??= createPaintDisplay({
    ...PAINT_DISPLAY_PLACES.surface,
    size: () => {
      const width = Math.max(1, Number(surface.paintInput.state.output_preset || 2048));
      return { kind: "ERP_GLOBAL", width, height: Math.max(1, Math.round(width * 0.5)) };
    },
    rasterSize: () => resolveRasterPreviewSize(surface.paintInput.state.output_preset),
    onReady: () => surface.dom?.requestDraw?.(),
    createEngine: (descriptor) => surface.paintInput.createEngine(descriptor),
    label: "raster-object",
  });
  return surface.paintDisplay.layers(painted);
}

// The state's painting normalized (the legacy nodes' state holds the widget's painting as it is, or none), kept
// while the state holds the same painting.
function surfacePainting(surface, painting) {
  if (!surface.paintState || surface.paintState.painting !== painting) {
    surface.paintState = { painting, normalized: normalizePaintingState(painting) };
  }
  return surface.paintState.normalized;
}
