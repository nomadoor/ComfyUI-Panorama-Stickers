// The paint as the views show it and the node gets it: the display layers of the stroke groups, raster
// objects and mask, the raster objects' images and alpha, the live eraser preview, and the painting layer
// uploaded for the node.
import { createPanoCanvas } from "../pano_diagnostics.js";
import { paintingLayerNeedsSync } from "../pano_editor_state.js";
import { clamp } from "../pano_math.js";
import { DEG2RAD } from "./constants.js";
import { cloneJson, paintingCompositeCount, pointInPoly } from "./helpers.js";

// Global registry: nodeId → Promise for in-flight paint layer uploads.
const _paintLayerUploadRegistry = new Map();

export function createPaintLayers(deps) {
  const {
    api, cutoutV2, editor, node, rasterErpCanvasCache, rasterImageAlphaCache,
    rasterImageCache, state,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitState, createRasterSurface, ensureGroupFrame, getActivePaintTargetDescriptor,
    getDesiredPaintTargetDescriptor, getDisplayPaintRevisionKey, getOrderedDisplayListObjects,
    getOrderedPaintGroupIds, getPaintingCompositeRevisionKey, getPaintingRevisionKey, getStrokeGroupStrokes,
    inverseTransformErpPointAround, paintingShown, parseRasterObjectSelectionId, processFreehandPoints,
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

  function getRasterCompositeErpSize() {
    const erpTarget = editor.paintEngine?.getErpTarget?.(getOrderedPaintGroupIds(false)) || null;
    const width = Math.max(1, Number(erpTarget?.descriptor?.width || erpTarget?.displayPaint?.canvas?.width || 2048));
    const height = Math.max(1, Number(erpTarget?.descriptor?.height || erpTarget?.displayPaint?.canvas?.height || 1024));
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
    const surface = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
    if (!rasterizeStrokeToSurface(surface, previewStroke, { w: erpDesc.width, h: erpDesc.height })) return null;
    const data = surface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
    if (!data) return null;
    let minX = erpDesc.width;
    let minY = erpDesc.height;
    let maxX = -1;
    let maxY = -1;
    for (let y = 0; y < erpDesc.height; y += 1) {
      for (let x = 0; x < erpDesc.width; x += 1) {
        if (data[(y * erpDesc.width + x) * 4 + 3] <= 8) continue;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
    if (maxX < minX || maxY < minY) {
      editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: null };
      return null;
    }
    const info = {
      surface,
      bounds: { minX, minY, maxX, maxY },
      key: `${liveKey}:${minX}:${minY}:${maxX}:${maxY}`,
    };
    editor._activePaintEraserPreviewInfo = { cacheKey: liveKey, value: info };
    editor._liveEraserPreviewCanvasCache = new Map();
    return info;
  }

  function invalidateLivePaintPreviewCaches() {
    editor._activePaintEraserPreviewInfo = null;
    editor._liveEraserPreviewCanvasCache = null;
  }

  function getPaintObjectApproxErpBounds(entry, width, height) {
    if (!entry) return null;
    if (entry.type === "rasterObject" && entry.item?.bbox) {
      const bbox = entry.item.bbox;
      const tf = entry.item?.transform || {};
      const u0 = Number(bbox.u0 || 0) + Number(tf.du || 0);
      const u1 = Number(bbox.u1 || 0) + Number(tf.du || 0);
      const v0 = Number(bbox.v0 || 0) + Number(tf.dv || 0);
      const v1 = Number(bbox.v1 || 0) + Number(tf.dv || 0);
      return {
        minX: Math.floor((((u0 % 1) + 1) % 1) * width),
        maxX: Math.ceil((((u1 % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(v0, 0, 1) * height),
        maxY: Math.ceil(clamp(v1, 0, 1) * height),
        wraps: (u1 - u0) >= 1 || u0 < 0 || u1 > 1,
      };
    }
    if (entry.type === "strokeGroup") {
      const strokes = getStrokeGroupStrokes(entry.actionGroupId, "paint");
      const frame = ensureGroupFrame(entry.actionGroupId, "paint", strokes);
      if (!frame) return null;
      const minU = frame.centerUv.u - frame.halfW;
      const maxU = frame.centerUv.u + frame.halfW;
      const minV = frame.centerUv.v - frame.halfH;
      const maxV = frame.centerUv.v + frame.halfH;
      return {
        minX: Math.floor((((minU % 1) + 1) % 1) * width),
        maxX: Math.ceil((((maxU % 1) + 1) % 1) * width),
        minY: Math.floor(clamp(minV, 0, 1) * height),
        maxY: Math.ceil(clamp(maxV, 0, 1) * height),
        wraps: (maxU - minU) >= 1 || minU < 0 || maxU > 1,
      };
    }
    return null;
  }

  function erpBoundsIntersect(a, b, width) {
    if (!a || !b) return false;
    const split = (box) => {
      if (!box.wraps) return [box];
      return [
        { minX: 0, maxX: box.maxX, minY: box.minY, maxY: box.maxY, wraps: false },
        { minX: box.minX, maxX: width - 1, minY: box.minY, maxY: box.maxY, wraps: false },
      ];
    };
    const aa = split(a);
    const bb = split(b);
    return aa.some((x) => bb.some((y) => !(x.maxX < y.minX || y.maxX < x.minX || x.maxY < y.minY || y.maxY < x.minY)));
  }

  function getLiveEraserAppliedCanvas(sourceCanvas, entry, previewInfo) {
    if (!sourceCanvas || !entry || !previewInfo?.surface?.canvas) return sourceCanvas;
    if (entry.type !== "rasterObject") return sourceCanvas;
    const width = Number(sourceCanvas.width || previewInfo.surface.canvas.width || 0);
    const height = Number(sourceCanvas.height || previewInfo.surface.canvas.height || 0);
    if (width < 1 || height < 1) return sourceCanvas;
    const objectBounds = getPaintObjectApproxErpBounds(entry, width, height);
    if (objectBounds && !erpBoundsIntersect(objectBounds, previewInfo.bounds, width)) return sourceCanvas;
    const rid = String(entry.item?.id || entry.id || "");
    const tf = entry.item?.transform || {};
    const cacheKey = `${previewInfo.key}:${rid}:${width}:${height}:${Number(tf.du || 0).toFixed(6)}:${Number(tf.dv || 0).toFixed(6)}:${Number(tf.rot_deg || 0).toFixed(3)}:${Number(tf.scale || 1).toFixed(4)}`;
    const cache = editor._liveEraserPreviewCanvasCache instanceof Map
      ? editor._liveEraserPreviewCanvasCache
      : (editor._liveEraserPreviewCanvasCache = new Map());
    if (cache.has(cacheKey)) return cache.get(cacheKey);
    const minX = clamp(Math.floor(Number(previewInfo.bounds?.minX || 0)), 0, Math.max(0, width - 1));
    const minY = clamp(Math.floor(Number(previewInfo.bounds?.minY || 0)), 0, Math.max(0, height - 1));
    const maxX = clamp(Math.ceil(Number(previewInfo.bounds?.maxX || 0)), minX, Math.max(0, width - 1));
    const maxY = clamp(Math.ceil(Number(previewInfo.bounds?.maxY || 0)), minY, Math.max(0, height - 1));
    const regionW = Math.max(1, maxX - minX + 1);
    const regionH = Math.max(1, maxY - minY + 1);
    const surface = createRasterSurface(width, height, { readback: true });
    surface.ctx.clearRect(0, 0, width, height);
    surface.ctx.drawImage(sourceCanvas, 0, 0);
    const beforeData = surface.ctx.getImageData(minX, minY, regionW, regionH);
    surface.ctx.save();
    surface.ctx.globalCompositeOperation = "destination-out";
    surface.ctx.drawImage(previewInfo.surface.canvas, 0, 0);
    surface.ctx.restore();
    const afterData = surface.ctx.getImageData(minX, minY, regionW, regionH);
    let touched = false;
    for (let i = 0; i < regionW * regionH; i += 1) {
      const beforeAlpha = beforeData.data[i * 4 + 3];
      const afterAlpha = afterData.data[i * 4 + 3];
      if (beforeAlpha > afterAlpha) {
        touched = true;
        break;
      }
    }
    if (!touched) {
      cache.set(cacheKey, sourceCanvas);
      return sourceCanvas;
    }
    if (cache.size > 64) cache.clear();
    cache.set(cacheKey, surface.canvas);
    return surface.canvas;
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
      getPaintingRevisionKey(),
    ].join(":");
    const cached = rasterErpCanvasCache.get(key);
    if (cached) return cached;
    if (rasterErpCanvasCache.size > 64) rasterErpCanvasCache.clear();
    const erpCanvas = createPanoCanvas({ label: "editor.raster-erp" });
    erpCanvas.width = width;
    erpCanvas.height = height;
    const erpCtx = erpCanvas.getContext("2d");
    if (!erpCtx) return null;
    const px = Number(bbox.u0 || 0) * width;
    const py = Number(bbox.v0 || 0) * height;
    const pw = Math.max(1, (Number(bbox.u1 || 0) - Number(bbox.u0 || 0)) * width);
    const ph = Math.max(1, (Number(bbox.v1 || 0) - Number(bbox.v0 || 0)) * height);
    const cx = px + pw * 0.5 + (Number(tf.du || 0) * width);
    const cy = py + ph * 0.5 + (Number(tf.dv || 0) * height);
    const rot = Number(tf.rot_deg || 0) * DEG2RAD;
    const scale = Math.max(0.01, Number(tf.scale || 1));
    for (const wrapOffset of [-width, 0, width]) {
      erpCtx.save();
      erpCtx.translate(cx + wrapOffset, cy);
      erpCtx.rotate(rot);
      erpCtx.scale(scale, scale);
      erpCtx.drawImage(img, -pw * 0.5, -ph * 0.5, pw, ph);
      erpCtx.restore();
    }
    rasterErpCanvasCache.set(key, erpCanvas);
    return erpCanvas;
  }

  async function uploadCanvasAsPaintLayer(canvas, filename) {
    const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
    const body = new FormData();
    body.append("image", blob, filename);
    // Cutout export resolves these layers on the backend during prompt execution,
    // so store them like other editor assets instead of relying on temp lifetime.
    body.append("type", "input");
    body.append("subfolder", "panorama_stickers");
    body.append("overwrite", "1");
    const resp = await api.fetchApi("/upload/image", { method: "POST", body });
    if (!resp || resp.status !== 200) throw new Error(`upload failed (${resp?.status})`);
    const data = await resp.json();
    const fn = String(data?.name || "").trim();
    if (!fn) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: fn,
      subfolder: String(data?.subfolder || "panorama_stickers"),
      storage: String(data?.type || "input"),
    };
  }

  let _paintLayerSyncRevision = null;
  let _paintLayerSyncPending = false;

  // PanoramaCutoutNode's editor does not paint (#77): the painting it shows is its state's or the Scene's,
  // and its layer stays as it was saved.
  function needsPaintingLayerSync() {
    if (cutoutV2) return false;
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
        let paintRef = null;
        let maskRef = null;
        const groupRefs = [];
        if (counts.totalPaintCount > 0) {
          paintRef = await uploadCanvasAsPaintLayer(uploadPaintCanvas, `pano_paint_${nodeId}.png`);
          for (const actionGroupId of orderedGroupIds) {
            const gid = String(actionGroupId || "").trim();
            if (!gid) continue;
            const groupCanvas = editor.paintEngine?.getGroupDisplayCanvas?.(gid) || null;
            if (!groupCanvas) continue;
            const safeGid = gid.replace(/[^a-zA-Z0-9_-]+/g, "_");
            const groupRef = await uploadCanvasAsPaintLayer(groupCanvas, `pano_group_${nodeId}_${safeGid}.png`);
            if (groupRef) {
              groupRefs.push({
                id: gid,
                actionGroupId: gid,
                image: groupRef,
              });
            }
          }
        }
        if (counts.totalMaskCount > 0) {
          maskRef = await uploadCanvasAsPaintLayer(uploadMaskCanvas, `pano_mask_${nodeId}.png`);
        }
        if (rev === getPaintingCompositeRevisionKey()) {
          state.painting_layer = {
            paint: paintRef,
            mask: maskRef,
            groups: groupRefs,
            revision: rev,
          };
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

  // The mask's layer, on top of everything; none without a mask. The paint engine keeps its canvas
  // and rebuilds it only when the mask changes.
  function appendMaskDisplayLayerEntry(entries) {
    const source = editor.paintEngine?.getMaskDisplayCanvas() || null;
    if (!source) return entries;
    const revision = `mask_display:${editor.paintEngine.getMaskDisplayRevision()}`;
    const topLayerZ = entries.reduce((max, entry) => Math.max(max, Number(entry?.zIndex || 0)), -1);
    const topStickerZ = (Array.isArray(state.stickers) ? state.stickers : [])
      .reduce((max, item) => Math.max(max, Number(item?.z_index || 0)), -1);
    const topZ = Math.max(topLayerZ, topStickerZ);
    entries.push({
      id: "mask_display",
      source,
      revision,
      zIndex: topZ + 1,
      opacity: 1,
      visible: true,
    });
    return entries;
  }

  function buildModalInterleavedLayerEntries() {
    const ordered = getOrderedDisplayListObjects(true);
    const previewInfo = getActivePaintEraserPreviewInfo();
    const entries = [];
    for (const entry of ordered) {
      if (entry?.type === "strokeGroup") {
        const gid = String(entry.actionGroupId || entry.id || "");
        if (!gid) continue;
        const source = editor.paintEngine?.getGroupDisplayCanvas?.(gid) || null;
        if (!source) continue;
        entries.push({
          id: `paint_group:${gid}`,
          source,
          revision: `${getDisplayPaintRevisionKey()}:${gid}`,
          zIndex: Number(entry?.z_index || 0),
          opacity: 1,
          visible: true,
        });
        continue;
      }
      if (entry?.type === "rasterObject") {
        const item = entry.item || null;
        const rid = parseRasterObjectSelectionId(item?.id || entry.id || "");
        if (!rid) continue;
        const baseSource = buildRasterObjectEditCanvas(item, () => requestDraw());
        if (!baseSource) continue;
        const source = getLiveEraserAppliedCanvas(baseSource, entry, previewInfo);
        const tf = item?.transform || {};
        entries.push({
          id: `raster:${rid}`,
          source,
          revision: [
            getPaintingCompositeRevisionKey(),
            previewInfo?.key || "",
            rid,
            Number(tf.du || 0).toFixed(6),
            Number(tf.dv || 0).toFixed(6),
            Number(tf.rot_deg || 0).toFixed(3),
            Number(tf.scale || 1).toFixed(4),
          ].join(":"),
          zIndex: Number(entry?.z_index || 0),
          opacity: 1,
          visible: item?.visible !== false,
        });
      }
    }
    return appendMaskDisplayLayerEntry(entries);
  }

  // The paint the views draw; none while the painting is hidden.
  function buildEditorViewPaintLayers() {
    if (!paintingShown()) return [];
    return buildModalInterleavedLayerEntries()
      .filter((entry) => entry.visible !== false)
      .map((entry) => ({ id: entry.id, media: entry.source, revision: entry.revision, opacity: entry.opacity, zIndex: entry.zIndex }));
  }

  function invalidatePaintingLayerState() {
    if (state.painting_layer !== null) {
      state.painting_layer = null;
    }
    _paintLayerSyncRevision = "";
  }

  return {
    connect(api) {
      ({
        commitState, createRasterSurface, ensureGroupFrame, getActivePaintTargetDescriptor,
        getDesiredPaintTargetDescriptor, getDisplayPaintRevisionKey, getOrderedDisplayListObjects,
        getOrderedPaintGroupIds, getPaintingCompositeRevisionKey, getPaintingRevisionKey, getStrokeGroupStrokes,
        inverseTransformErpPointAround, paintingShown, parseRasterObjectSelectionId, processFreehandPoints,
        rasterizeStrokeToSurface, rebuildPaintEngineIfNeeded, requestDraw, screenPosToErpPoint, shortestWrappedDelta,
      } = api);
    },
    getSharedLivePaintSurface, getLivePaintRevisionSuffix, isPaintCompositeInteraction, hitRasterObjectAt,
    invalidateLivePaintPreviewCaches, buildRasterObjectEditCanvas, needsPaintingLayerSync,
    syncPaintingLayerAsync, invalidatePaintingLayerState, buildEditorViewPaintLayers,
  };
}
