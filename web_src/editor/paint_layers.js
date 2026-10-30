// The paint as the views show it and the node gets it: the display layers of the stroke groups, raster
// objects and mask, the raster objects' images and alpha, the live eraser preview, and the painting layer
// uploaded for the node.
import { createPanoCanvas } from "../pano_diagnostics.js";
import { paintingLayerNeedsSync } from "../pano_editor_state.js";
import { paintingCompositeCount, uploadPaintingLayer } from "../pano_paint_upload.js";
import { createDamageLog } from "../pano_paint_damage.js";
import { engineMask, skyPaintLayers } from "../pano_paint_layers.js";
import { rasterEraserDisplay } from "../pano_raster_eraser.js";
import { clamp } from "../pano_math.js";
import { cloneJson, drawRasterObjectErp, pointInPoly } from "./helpers.js";

// Global registry: nodeId → Promise for in-flight paint layer uploads.
const _paintLayerUploadRegistry = new Map();

export function createPaintLayers(deps) {
  const {
    api, editor, node, rasterErpCanvasCache, rasterImageAlphaCache,
    rasterImageCache, state,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitState, createRasterSurface, getActivePaintTargetDescriptor,
    getDesiredPaintTargetDescriptor, getOrderedDisplayListObjects,
    getOrderedPaintGroupIds, getPaintingCompositeRevisionKey,
    inverseTransformErpPointAround, parseRasterObjectSelectionId, processFreehandPoints,
    rasterizeStrokeToSurface, rebuildPaintEngineIfNeeded, requestDraw, screenPosToErpPoint, shortestWrappedDelta;

  function isPaintCompositeInteraction(interaction = editor.interaction) {
    const kind = String(interaction?.kind || "");
    if (kind === "paint_stroke" || kind === "paint_lasso_fill") return true;
    if (kind === "move_stroke_group" || kind === "scale_stroke_group" || kind === "rotate_stroke_group") return true;
    if (kind === "move_raster_object" || kind === "scale_raster_object") return true;
    if (kind === "move_multi") {
      const hasStrokeSnapshots = Array.isArray(interaction?.strokeSnapshots) && interaction.strokeSnapshots.length > 0;
      const hasRasterSnapshots = Array.isArray(interaction?.rasterSnapshots) && interaction.rasterSnapshots.length > 0;
      return hasStrokeSnapshots || hasRasterSnapshots;
    }
    return false;
  }

  function getSharedLivePaintSurface() {
    let livePaint = null;
    try {
      const orderedGroupIds = getOrderedPaintGroupIds();
      const displayPaint = editor.paintEngine?.getErpTarget?.(orderedGroupIds)?.displayPaint?.canvas || null;
      if (displayPaint) {
        livePaint = {
          source: displayPaint,
          revision: `${getPaintingCompositeRevisionKey()}:${getLivePaintRevisionSuffix()}`,
        };
      }
    } catch {
      livePaint = null;
    }
    return livePaint;
  }

  function getLivePaintRevisionSuffix() {
    const interaction = editor.interaction;
    const interactionKind = String(interaction?.kind || "");
    if (!isPaintCompositeInteraction(interaction)) return "";
    if (interactionKind === "paint_stroke" || interactionKind === "paint_lasso_fill") {
      const geometry = interaction?.stroke?.geometry || null;
      const layerKind = String(interaction?.stroke?.layerKind || "");
      const pointCount = geometry?.rawPoints?.length ?? geometry?.points?.length ?? 0;
      const stamp = String(interaction?._livePreviewToken || "");
      return `_${layerKind || "paint"}_${interactionKind}_live${stamp}_${pointCount}_${editor.livePaintInteractionRevision}`;
    }
    const groupId = String(interaction?.item?.actionGroupId || "");
    const rasterId = String(interaction?.item?.rasterObjectId || interaction?.item?.id || "");
    return `_${interactionKind}_${groupId || rasterId || "active"}_${editor.livePaintInteractionRevision}`;
  }

  function getRasterObjectImage(item, onLoad = null) {
    const dataUrl = String(item?.rasterDataUrl || "").trim();
    if (!dataUrl) return null;
    const cached = rasterImageCache.get(dataUrl);
    if (cached) {
      if (cached.complete || cached.width || cached.naturalWidth) return cached;
      return cached;
    }
    const img = new Image();
    img.onload = () => {
      if (typeof onLoad === "function") onLoad();
    };
    img.src = dataUrl;
    rasterImageCache.set(dataUrl, img);
    return img;
  }

  function getRasterObjectAlphaSurface(item) {
    const dataUrl = String(item?.rasterDataUrl || "").trim();
    if (!dataUrl) return null;
    const cached = rasterImageAlphaCache.get(dataUrl);
    if (cached) return cached.ready ? cached : null;
    const img = getRasterObjectImage(item, () => {
      const entry = rasterImageAlphaCache.get(dataUrl);
      if (entry) entry.ready = false;
      requestDraw({ localOnly: true });
    });
    if (!img || !(img.complete || img.width || img.naturalWidth)) return null;
    const width = Number(img.naturalWidth || img.width || 0);
    const height = Number(img.naturalHeight || img.height || 0);
    if (width < 1 || height < 1) return null;
    const canvasEl = createPanoCanvas({ label: "editor.image-pixels" });
    canvasEl.width = width;
    canvasEl.height = height;
    const ctx2d = canvasEl.getContext("2d", { willReadFrequently: true });
    if (!ctx2d) return null;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(img, 0, 0, width, height);
    const alpha = ctx2d.getImageData(0, 0, width, height).data;
    const entry = { canvas: canvasEl, width, height, alpha, ready: true };
    rasterImageAlphaCache.set(dataUrl, entry);
    return entry;
  }

  function sampleRasterObjectAlphaAt(item, erpPoint) {
    if (!item || !erpPoint) return null;
    const bbox = item?.bbox || null;
    if (!bbox) return null;
    const tf = item?.transform || {};
    const center = {
      u: (Number(bbox.u0 || 0) + Number(bbox.u1 || 0)) * 0.5,
      v: (Number(bbox.v0 || 0) + Number(bbox.v1 || 0)) * 0.5,
    };
    const untranslated = {
      u: ((Number(erpPoint.u || 0) - Number(tf.du || 0)) % 1 + 1) % 1,
      v: Number(erpPoint.v || 0) - Number(tf.dv || 0),
    };
    const basePoint = inverseTransformErpPointAround(
      untranslated,
      center,
      Number(tf.scale || 1),
      Number(tf.rot_deg || 0),
    );
    const bw = Number(bbox.u1 || 0) - Number(bbox.u0 || 0);
    const bh = Number(bbox.v1 || 0) - Number(bbox.v0 || 0);
    if (!(bw > 1e-6) || !(bh > 1e-6)) return null;
    const localU = shortestWrappedDelta(Number(basePoint.u || 0), Number(bbox.u0 || 0)) / bw;
    const localV = (Number(basePoint.v || 0) - Number(bbox.v0 || 0)) / bh;
    if (localU < 0 || localU > 1 || localV < 0 || localV > 1) return 0;
    const surface = getRasterObjectAlphaSurface(item);
    if (!surface) return null;
    const sx = clamp(Math.floor(localU * surface.width), 0, surface.width - 1);
    const sy = clamp(Math.floor(localV * surface.height), 0, surface.height - 1);
    return Number(surface.alpha[(sy * surface.width + sx) * 4 + 3] || 0);
  }

  function hitRasterObjectAt(item, geom, p, erpPoint = null) {
    if (!geom?.visible || !pointInPoly(p, geom.corners)) return false;
    const samplePoint = erpPoint || screenPosToErpPoint(p, performance.now());
    const alpha = sampleRasterObjectAlphaAt(item, samplePoint);
    if (alpha === null) return true;
    return alpha > 8;
  }

  // The size of the paint engine's ERP canvases (without composing them).
  function getRasterCompositeErpSize() {
    const descriptor = editor.paintEngine?.descriptor || null;
    const width = Math.max(1, Number(descriptor?.width || 2048));
    const height = Math.max(1, Number(descriptor?.height || 1024));
    return { width, height };
  }

  function getActivePaintEraserPreviewInfo() {
    const interaction = editor.interaction;
    if (interaction?.kind !== "paint_stroke") return null;
    const stroke = interaction?.stroke || null;
    if (!stroke || String(stroke?.layerKind || "") !== "paint" || String(stroke?.toolKind || "") !== "eraser") return null;
    const erpDesc = getActivePaintTargetDescriptor();
    const liveKey = `${getLivePaintRevisionSuffix()}:${erpDesc.width}:${erpDesc.height}`;
    if (editor._activePaintEraserPreviewInfo?.cacheKey === liveKey) {
      return editor._activePaintEraserPreviewInfo.value || null;
    }
    const previewStroke = cloneJson(stroke);
    const geometry = previewStroke?.geometry || null;
    if (geometry && String(geometry.geometryKind || "") !== "lasso_fill") {
      const raw = Array.isArray(geometry.rawPoints) && geometry.rawPoints.length
        ? geometry.rawPoints
        : (Array.isArray(geometry.points) ? geometry.points : []);
      geometry.processedPoints = processFreehandPoints(raw, previewStroke.targetSpace, true);
    }
    // One canvas for the eraser's preview, cleared where it was drawn before: a fresh canvas with the stroke.
    let surface = editor._activePaintEraserSurface || null;
    if (!surface || surface.canvas.width !== erpDesc.width || surface.canvas.height !== erpDesc.height) {
      surface = editor._activePaintEraserSurface = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
      editor._activePaintEraserBox = null;
    }
    const before = editor._activePaintEraserBox;
    if (before) surface.ctx.clearRect(before.x0, before.y0, before.x1 - before.x0, before.y1 - before.y0);
    editor._activePaintEraserBox = null;
    const box = rasterizeStrokeToSurface(surface, previewStroke, { w: erpDesc.width, h: erpDesc.height });
    if (!box) return null;
    editor._activePaintEraserBox = box;
    // Where its pixels are over 8 (all of them are in the box it drew).
    let minX = erpDesc.width;
    let minY = erpDesc.height;
    let maxX = -1;
    let maxY = -1;
    const boxW = box.x1 - box.x0;
    const boxH = box.y1 - box.y0;
    const data = boxW > 0 && boxH > 0 ? surface.ctx?.getImageData(box.x0, box.y0, boxW, boxH)?.data || null : new Uint8ClampedArray(0);
    if (!data) return null;
    for (let y = 0; y < boxH; y += 1) {
      for (let x = 0; x < boxW; x += 1) {
        if (data[(y * boxW + x) * 4 + 3] <= 8) continue;
        if (x + box.x0 < minX) minX = x + box.x0;
        if (y + box.y0 < minY) minY = y + box.y0;
        if (x + box.x0 > maxX) maxX = x + box.x0;
        if (y + box.y0 > maxY) maxY = y + box.y0;
      }
    }
    if (maxX < minX || maxY < minY) {
      editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: null };
      return null;
    }
    const info = {
      surface,
      bounds: { minX, minY, maxX, maxY },
      box,
      key: `${liveKey}:${minX}:${minY}:${maxX}:${maxY}`,
    };
    editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: info };
    return info;
  }

  function invalidateLivePaintPreviewCaches() {
    editor._activePaintEraserPreviewInfo = null;
  }

  const imageIds = new WeakMap();
  let nextImageId = 1;
  function imageIdOf(img) {
    if (!imageIds.has(img)) imageIds.set(img, nextImageId++);
    return imageIds.get(img);
  }

  function buildRasterObjectEditCanvas(item, onLoad = null) {
    const rid = parseRasterObjectSelectionId(item?.rasterObjectId || item?.id || "");
    const bbox = item?.bbox || null;
    if (!rid || !bbox) return null;
    const img = getRasterObjectImage(item, onLoad);
    if (!img || !(img.complete || img.width || img.naturalWidth)) return null;
    const { width, height } = getRasterCompositeErpSize();
    const tf = item?.transform || {};
    const key = [
      rid,
      width,
      height,
      bbox.u0,
      bbox.v0,
      bbox.u1,
      bbox.v1,
      tf.du,
      tf.dv,
      tf.rot_deg,
      tf.scale,
      // The image it draws (a new data URL is another image), rather than the painting's revision, so a stroke
      // elsewhere does not draw it again.
      imageIdOf(img),
    ].join(":");
    const cached = rasterErpCanvasCache.get(key);
    if (cached) return cached;
    if (rasterErpCanvasCache.size > 64) rasterErpCanvasCache.clear();
    const erpCanvas = createPanoCanvas({ label: "editor.raster-erp" });
    erpCanvas.width = width;
    erpCanvas.height = height;
    const erpCtx = erpCanvas.getContext("2d");
    if (!erpCtx) return null;
    drawRasterObjectErp(erpCtx, img, item, width, height);
    rasterErpCanvasCache.set(key, erpCanvas);
    return erpCanvas;
  }

  let _paintLayerSyncRevision = null;
  let _paintLayerSyncPending = false;

  function needsPaintingLayerSync() {
    const counts = paintingCompositeCount(state.painting);
    const { width, height } = getDesiredPaintTargetDescriptor();
    return paintingLayerNeedsSync(state.painting_layer, { paintCount: counts.totalPaintCount, maskCount: counts.totalMaskCount, width, height, nodeId: String(node.id ?? "0") });
  }

  function syncPaintingLayerAsync() {
    const nodeId = String(node.id ?? "0");
    const currentPending = _paintLayerUploadRegistry.get(nodeId);
    if (_paintLayerSyncPending && currentPending) return currentPending;
    const promise = (async () => {
      const rev = getPaintingCompositeRevisionKey();
      const counts = paintingCompositeCount(state.painting);
      if (counts.totalPaintCount <= 0 && counts.totalMaskCount <= 0) {
        if (state.painting_layer !== null) {
          state.painting_layer = null;
          _paintLayerSyncRevision = rev;
          commitState();
        }
        return;
      }
      if (_paintLayerSyncRevision === rev) return;
      if (_paintLayerSyncPending) return;
      _paintLayerSyncPending = true;
      try {
        rebuildPaintEngineIfNeeded();
        const orderedGroupIds = getOrderedPaintGroupIds(false);
        const erpTarget = editor.paintEngine?.getErpTarget?.(orderedGroupIds) || null;
        const paintCanvas = erpTarget?.displayPaint?.canvas || null;
        const maskCanvas = erpTarget?.committedMask?.canvas || null;
        const width = Math.max(1, Number(erpTarget?.descriptor?.width || paintCanvas?.width || maskCanvas?.width || 2048));
        const height = Math.max(1, Number(erpTarget?.descriptor?.height || paintCanvas?.height || maskCanvas?.height || 1024));
        if ((!paintCanvas && counts.totalPaintCount > 0) || (!maskCanvas && counts.totalMaskCount > 0)) {
          if (!editor._paintLayerSyncBlankSurface
            || Number(editor._paintLayerSyncBlankSurface.canvas?.width || 0) !== width
            || Number(editor._paintLayerSyncBlankSurface.canvas?.height || 0) !== height) {
            editor._paintLayerSyncBlankSurface = createRasterSurface(width, height);
          }
          editor._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, width, height);
        }
        const uploadPaintCanvas = paintCanvas || (counts.totalPaintCount > 0 ? editor._paintLayerSyncBlankSurface?.canvas || null : null);
        const uploadMaskCanvas = maskCanvas || (counts.totalMaskCount > 0 ? editor._paintLayerSyncBlankSurface?.canvas || null : null);
        if (!uploadPaintCanvas && !uploadMaskCanvas) return;
        const layer = await uploadPaintingLayer(api, {
          nodeId,
          counts,
          paintCanvas: uploadPaintCanvas,
          maskCanvas: uploadMaskCanvas,
          groupIds: orderedGroupIds,
          groupCanvas: (gid) => editor.paintEngine?.getGroupDisplayCanvas?.(gid) || null,
          revision: rev,
        });
        if (rev === getPaintingCompositeRevisionKey()) {
          state.painting_layer = layer;
          _paintLayerSyncRevision = rev;
          commitState();
        }
      } catch (err) {
        throw err;
      } finally {
        _paintLayerSyncPending = false;
      }
    })();
    _paintLayerUploadRegistry.set(nodeId, promise);
    promise.finally(() => {
      if (_paintLayerUploadRegistry.get(nodeId) === promise) {
        _paintLayerUploadRegistry.delete(nodeId);
      }
    });
    return promise;
  }

  // The paint the views draw (skyPaintLayers): the engine's stroke groups with the live stroke (the engine's
  // display of each group, whose revision moves only when that group's display changes), the group being drawn
  // at the z_index it takes (getOrderedDisplayListObjects), the raster objects with the live eraser, and the mask.
  function buildEditorViewPaintLayers() {
    const groups = getOrderedDisplayListObjects(true)
      .filter((entry) => entry.type === "strokeGroup")
      .map((entry) => ({ actionGroupId: entry.actionGroupId, z_index: entry.z_index }));
    const engine = editor.paintEngine;
    // The live eraser's preview is made only when a raster object shows it.
    let eraserInfo;
    const eraserPreview = () => (eraserInfo === undefined ? (eraserInfo = getActivePaintEraserPreviewInfo()) : eraserInfo);
    const shownRasters = new Set();
    const layers = skyPaintLayers({ ...state, painting: { ...state.painting, groups } }, {
      group: (id) => engine?.getGroupDisplay(id) ?? null,
      raster: (item) => {
        const baseSource = buildRasterObjectEditCanvas(item, () => requestDraw());
        if (!baseSource) return null;
        const id = String(item.id);
        shownRasters.add(id);
        if (!rasterDisplays.has(id)) rasterDisplays.set(id, { log: createDamageLog(), base: null });
        return rasterEraserDisplay(rasterDisplays.get(id), baseSource, item, eraserPreview(),
          (width, height) => createRasterSurface(width, height, { readback: true }));
      },
      mask: () => engineMask(engine),
    });
    for (const id of [...rasterDisplays.keys()]) if (!shownRasters.has(id)) rasterDisplays.delete(id);
    return layers;
  }

  // The raster objects' records as the views draw them (rasterEraserDisplay), by id.
  const rasterDisplays = new Map();

  function invalidatePaintingLayerState() {
    if (state.painting_layer !== null) {
      state.painting_layer = null;
    }
    _paintLayerSyncRevision = "";
  }

  return {
    connect(api) {
      ({
        commitState, createRasterSurface, getActivePaintTargetDescriptor,
        getDesiredPaintTargetDescriptor, getOrderedDisplayListObjects,
        getOrderedPaintGroupIds, getPaintingCompositeRevisionKey,
        inverseTransformErpPointAround, parseRasterObjectSelectionId, processFreehandPoints,
        rasterizeStrokeToSurface, rebuildPaintEngineIfNeeded, requestDraw, screenPosToErpPoint, shortestWrappedDelta,
      } = api);
    },
    getSharedLivePaintSurface, getLivePaintRevisionSuffix, isPaintCompositeInteraction, hitRasterObjectAt,
    invalidateLivePaintPreviewCaches, buildRasterObjectEditCanvas, needsPaintingLayerSync,
    syncPaintingLayerAsync, invalidatePaintingLayerState, buildEditorViewPaintLayers,
  };
}
