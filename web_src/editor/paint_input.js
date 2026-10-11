// Painting with the pointer: the paint and mask tools, the brush cursor and size preview, the stroke and
// lasso records a drag builds, the eraser, and committing a stroke to the painting.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID, applyPresetToStroke } from "../pano_brush_presets.js";
import { clamp } from "../pano_math.js";
import { normalizePaintingState } from "../pano_paint_types.js";
import { LASSO_CURSOR_HOTSPOT_X, LASSO_CURSOR_HOTSPOT_Y, LASSO_CURSOR_SIZE, RAD2DEG } from "./constants.js";
import { cloneColor, colorToCss, getLassoCursorBackground, logPaintDebug, makePaintId } from "./helpers.js";

export function createPaintInput(deps) {
  const {
    editor, paintCursorEl, paintSizePreviewEl, paintSizePreviewSampleEl, state, timers,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let buildRasterObjectEditCanvas, clearSelection, createRasterFrozenObjectsFromCanvas, createRasterSurface,
    ensureGroupFrame, ensurePaintingGroupEntry, getActiveCutoutShot, getActivePaintTargetDescriptor,
    getDisplayListObjects, getPaintingGroupList, getRasterObjectList, getStrokeGroupStrokes,
    processFreehandPoints, rasterizeStrokeToSurface, rebuildPaintEngineIfNeeded, screenPosToErpPoint,
    screenPosToFrameAsErpPoint, supportsFramePainting;

  let paintSizePreviewTimer = 0;

  function getActivePaintToolKind() {
    return editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
  }
  function isActiveLassoTool() {
    return String(getActivePaintToolKind() || "") === "lasso_fill";
  }

  function supportsErpPainting() {
    return editor.mode === "pano" || editor.mode === "unwrap";
  }

  function captureStrokeRadiusSpec(targetSpace, sizePx) {
    const r = Number(sizePx || 0) * 0.5;
    // ERP: normalize against 2048 (full equirectangular canvas reference width).
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, r / 2048),
    };
  }

  function getBrushPresetIdForTool(toolKind) {
    const kind = String(toolKind || "").trim();
    if (kind === "eraser") return DEFAULT_BRUSH_PRESET_ID;
    if (BRUSH_PRESETS[kind]) return kind;
    return editor.activeBrushPresetId || DEFAULT_BRUSH_PRESET_ID;
  }

  function isPaintCursorEnabled() {
    return (editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting());
  }

  function isActivePaintCursorVisible() {
    return isPaintCursorEnabled() && editor.pointerPos?.inside === true;
  }

  function setPointerPos(p, inside = true) {
    const nextX = Number(p?.x || 0);
    const nextY = Number(p?.y || 0);
    const nextInside = inside !== false;
    const prev = editor.pointerPos || { x: 0, y: 0, inside: false };
    const changed = prev.inside !== nextInside || Math.abs(prev.x - nextX) > 0.01 || Math.abs(prev.y - nextY) > 0.01;
    editor.pointerPos = { x: nextX, y: nextY, inside: nextInside };
    return changed;
  }

  function getActivePaintCursorDescriptor() {
    if (!isActivePaintCursorVisible()) return null;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(3, size * 0.5);
    const baseColor = layerKind === "mask"
      ? (toolKind === "lasso_fill"
        ? { r: 0, g: 0, b: 0, a: 1 }
        : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 })
      : (toolKind === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : cloneColor(editor.paintColor));
    const fillAlpha = layerKind === "mask"
      ? (toolKind === "lasso_fill" ? 0.18 : 0.2)
      : (toolKind === "eraser" ? 0.06 : clamp(Math.max(0.16, Number(baseColor.a ?? 1) * 0.3), 0.16, 0.52));
    const strokeAlpha = layerKind === "mask"
      ? 0.95
      : (toolKind === "eraser" ? 0.75 : clamp(Math.max(0.46, Number(baseColor.a ?? 1) * 0.92), 0.46, 1));
    return {
      layerKind,
      toolKind,
      preset,
      radius,
      fillStyle: colorToCss(baseColor, fillAlpha),
      strokeStyle: colorToCss(baseColor, strokeAlpha),
      x: Number(editor.pointerPos?.x || 0),
      y: Number(editor.pointerPos?.y || 0),
      hotspotX: radius,
      hotspotY: radius,
    };
  }

  function syncPaintCursorElement() {
    const cursor = getActivePaintCursorDescriptor();
    if (!paintCursorEl) return;
    if (!cursor) {
      paintCursorEl.style.display = "none";
      return;
    }

    let width = cursor.radius * 2;
    let height = cursor.radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = cursor.fillStyle;
    let border = `1px solid rgba(222, 222, 222, 0.72)`;
    let boxShadow = `0 0 0 1px rgba(52, 52, 52, 0.72)`;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";
    let hotspotX = Number(cursor.hotspotX ?? width * 0.5);
    let hotspotY = Number(cursor.hotspotY ?? height * 0.5);

    if (cursor.toolKind === "lasso_fill") {
      width = LASSO_CURSOR_SIZE;
      height = LASSO_CURSOR_SIZE;
      borderRadius = "0";
      border = "0";
      boxShadow = "none";
      hotspotX = LASSO_CURSOR_HOTSPOT_X;
      hotspotY = LASSO_CURSOR_HOTSPOT_Y;
      background = getLassoCursorBackground(cursor.fillStyle, borderColorOuter, borderColorInner);
    } else if (cursor.layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)`;
    } else if (cursor.toolKind === "marker") {
      const aspect = Math.max(1, Number(cursor.preset?.aspect ?? 1));
      width = Math.max(10, cursor.radius * 2 * aspect);
      height = Math.max(6, cursor.radius * 2);
      borderRadius = `${Math.min(6, height * 0.42)}px`;
      rotateDeg = Number(cursor.preset?.angle?.value || 0) * RAD2DEG;
    } else if (cursor.toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${cursor.strokeStyle} 0%, ${cursor.fillStyle} 45%, rgba(0,0,0,0) 100%)`;
    } else if (cursor.toolKind === "eraser") {
      background = "rgba(255,255,255,0.14)";
    }

    paintCursorEl.style.display = "block";
    paintCursorEl.style.width = `${Math.round(width)}px`;
    paintCursorEl.style.height = `${Math.round(height)}px`;
    paintCursorEl.style.borderRadius = borderRadius;
    paintCursorEl.style.border = border;
    paintCursorEl.style.boxShadow = boxShadow;
    paintCursorEl.style.background = background;
    paintCursorEl.style.backgroundRepeat = "no-repeat";
    paintCursorEl.style.backgroundPosition = "center";
    paintCursorEl.style.backgroundSize = "contain";
    paintCursorEl.style.transform = `translate(${Math.round(cursor.x - hotspotX)}px, ${Math.round(cursor.y - hotspotY)}px) rotate(${rotateDeg}deg)`;
  }

  function showPaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewSampleEl) return;
    const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
    const toolKind = layerKind === "mask" ? editor.maskTool : editor.paintTool;
    if (toolKind === "lasso_fill") return;
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = Number(editor.brushSizes[presetId] ?? 10);
    const size = Math.max(1, rawSize) * Math.max(0.1, Number(preset.sizeScale ?? 1));
    const radius = Math.max(6, size * 0.5);
    const isEraser = toolKind === "eraser";
    const baseColor = layerKind === "mask"
      ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 }
      : (isEraser ? { r: 1, g: 1, b: 1, a: 0.22 } : cloneColor(editor.paintColor));
    const fill = layerKind === "mask"
      ? colorToCss(baseColor, 0.22)
      : (isEraser ? "rgba(255,255,255,0.14)" : colorToCss(baseColor, clamp(Math.max(0.18, Number(baseColor.a ?? 1) * 0.34), 0.18, 0.56)));
    const stroke = layerKind === "mask"
      ? colorToCss(baseColor, 0.96)
      : (isEraser ? "rgba(255,255,255,0.72)" : colorToCss(baseColor, clamp(Math.max(0.56, Number(baseColor.a ?? 1) * 0.96), 0.56, 1)));

    let width = radius * 2;
    let height = radius * 2;
    let borderRadius = "999px";
    let rotateDeg = 0;
    let background = fill;
    const borderColorInner = "rgba(222, 222, 222, 0.72)";
    const borderColorOuter = "rgba(52, 52, 52, 0.72)";

    if (layerKind === "mask") {
      background = `repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)`;
    } else if (toolKind === "marker") {
      const aspect = Math.max(1, Number(preset?.aspect ?? 1));
      width = Math.max(16, radius * 2 * aspect);
      height = Math.max(10, radius * 2);
      borderRadius = `${Math.min(8, height * 0.42)}px`;
      rotateDeg = Number(preset?.angle?.value || 0) * RAD2DEG;
    } else if (toolKind === "brush") {
      background = `radial-gradient(circle at 50% 50%, ${stroke} 0%, ${fill} 48%, rgba(0,0,0,0) 100%)`;
    } else if (toolKind === "lasso_fill") {
      width = Math.max(18, radius * 1.8);
      height = width;
      background = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${stroke} 43%, ${stroke} 58%, rgba(0,0,0,0) 59%)`;
    } else if (isEraser) {
      background = "rgba(255,255,255,0.12)";
    }

    paintSizePreviewSampleEl.style.width = `${Math.round(width)}px`;
    paintSizePreviewSampleEl.style.height = `${Math.round(height)}px`;
    paintSizePreviewSampleEl.style.borderRadius = borderRadius;
    paintSizePreviewSampleEl.style.background = background;
    paintSizePreviewSampleEl.style.border = `1px solid ${borderColorInner}`;
    paintSizePreviewSampleEl.style.boxShadow = `0 0 0 1px ${borderColorOuter}`;
    paintSizePreviewSampleEl.style.transform = `rotate(${rotateDeg}deg)`;

    timers.clear(paintSizePreviewTimer);
    paintSizePreviewTimer = 0;
    paintSizePreviewEl.classList.remove("fade-out");
    paintSizePreviewEl.classList.add("show");
  }

  function hidePaintSizePreview() {
    if (!paintSizePreviewEl || !paintSizePreviewEl.classList.contains("show")) return;
    paintSizePreviewEl.classList.add("fade-out");
    timers.clear(paintSizePreviewTimer);
    paintSizePreviewTimer = timers.set(() => {
      paintSizePreviewEl.classList.remove("show", "fade-out");
      paintSizePreviewTimer = 0;
    }, 180);
  }

  function buildFreehandStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const rawSize = editor.brushSizes[presetId] ?? 10;
    const size = Math.max(1, rawSize) * Math.max(0.1, preset.sizeScale ?? 1);
    const radiusSpec = captureStrokeRadiusSpec(targetSpace, size);
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: radiusSpec.radiusModel,
      radiusValue: radiusSpec.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: preparedPoints.map((pt) => ({ ...pt })),
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("stroke-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      size: Number(stroke.size || 0),
      radiusModel: String(stroke.radiusModel || ""),
      radiusValue: Number(stroke.radiusValue || 0),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function buildLassoFillStrokeRecord(layerKind, toolKind, points, targetSpace) {
    const preparedPoints = points.map((pt) => ({
      ...pt,
      t: Number(pt?.t || 0),
      widthScale: Number.isFinite(Number(pt?.widthScale)) ? Math.max(0, Number(pt.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(pt?.pressureLike)) ? Math.max(0, Number(pt.pressureLike)) : 1,
    }));
    const presetId = getBrushPresetIdForTool(toolKind);
    const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
    const stroke = {
      id: makePaintId(layerKind),
      actionGroupId: makePaintId("ag"),
      targetSpace: targetSpace && typeof targetSpace === "object"
        ? { ...targetSpace, viewMode: String(editor.mode || "pano") }
        : { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "pano") },
      layerKind,
      toolKind,
      size: 10,
      createdAt: Date.now(),
      color: layerKind === "paint" ? { ...editor.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: preparedPoints.map((pt) => ({ ...pt })),
      },
    };
    applyPresetToStroke(stroke, preset);
    logPaintDebug("lasso-created", {
      mode: editor.mode,
      layerKind,
      toolKind,
      presetId,
      presetAspect: Number(preset.aspect ?? 1),
      strokeAspect: Number(stroke.aspect ?? 1),
      stampKind: String(stroke.stampKind || ""),
      targetSpace: { ...stroke.targetSpace },
    });
    return stroke;
  }

  function getPaintingLayerList(layerKind) {
    const root = state.painting || (state.painting = normalizePaintingState(null));
    const layer = root[layerKind] || (root[layerKind] = { strokes: [] });
    if (!Array.isArray(layer.strokes)) layer.strokes = [];
    return layer.strokes;
  }

  function appendPaintPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      // Frame view: convert screen position to ERP UV via frame's world projection.
      // This keeps strokes world-fixed regardless of subsequent frame camera moves.
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
      if (!next) return false; // out-of-frame — caller (pointermove) handles segmentation
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    if (!next) return false;
    const rawPoints = interaction.stroke.geometry.rawPoints || interaction.stroke.geometry.points;
    const points = interaction.stroke.geometry.points;
    // Dedup against raw coords so OEF smoothing doesn't cause points to be incorrectly skipped
    const prevRaw = rawPoints[rawPoints.length - 1];
    if (prevRaw) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prevRaw.u ?? prevRaw.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prevRaw.v ?? prevRaw.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    const sample = {
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    };
    rawPoints.push({ ...sample });
    points.push({ ...sample });
    // Incremental rendering: send raw point to engine (O(1), no full re-render)
    const targetDescriptor = getActivePaintTargetDescriptor(interaction);
    if (targetDescriptor) {
      const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
      editor.paintEngine.appendStrokePoint(engineTarget, Number(sample.u ?? 0), Number(sample.v ?? 0), interaction.stroke);
    }
    return true;
  }

  function appendLassoPoint(interaction, pos, ts = performance.now()) {
    let next;
    if (editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      if (!shot) return false;
      next = screenPosToFrameAsErpPoint(pos, shot, ts);
    } else {
      next = screenPosToErpPoint(pos, ts);
    }
    const points = interaction?.stroke?.geometry?.points;
    if (!next || !Array.isArray(points)) return false;
    const prev = points[points.length - 1];
    if (prev) {
      const du = Math.abs(Number(next.u ?? next.x ?? 0) - Number(prev.u ?? prev.x ?? 0));
      const dv = Math.abs(Number(next.v ?? next.y ?? 0) - Number(prev.v ?? prev.y ?? 0));
      if (du < 0.0015 && dv < 0.0015) return false;
    }
    points.push({
      ...next,
      t: Number(next?.t || 0),
      widthScale: 1,
      pressureLike: 1,
    });
    return true;
  }

  function applyPaintEraserInteraction(interaction) {
    const eraserStroke = interaction?.stroke || null;
    if (!eraserStroke || interaction?.layerKind !== "paint" || String(eraserStroke?.toolKind || "") !== "eraser") return false;
    rebuildPaintEngineIfNeeded();
    const erpDesc = getActivePaintTargetDescriptor();
    const eraserSurface = createRasterSurface(erpDesc.width, erpDesc.height);
    if (!rasterizeStrokeToSurface(eraserSurface, eraserStroke, { w: erpDesc.width, h: erpDesc.height })) return false;
    const eraserData = eraserSurface.ctx?.getImageData(0, 0, erpDesc.width, erpDesc.height)?.data || null;
    if (!eraserData) return false;

    const groupMeta = new Map(getPaintingGroupList().map((group) => [String(group?.actionGroupId || group?.id || "").trim(), group ? { ...group } : null]));
    const nextStrokes = [];
    const nextGroups = [];
    const nextRasterObjects = [...getRasterObjectList().filter((item) => String(item?.layerKind || "paint") !== "paint")];
    let changed = false;
    let nextReplacementZ = getDisplayListObjects().reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1) + 1;

    function getAlphaBoundsFromData(alphaData, width, height, threshold = 8) {
      let minX = width;
      let minY = height;
      let maxX = -1;
      let maxY = -1;
      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          if (alphaData[(y * width + x) * 4 + 3] <= threshold) continue;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
      if (maxX < minX || maxY < minY) return null;
      return { minX, minY, maxX, maxY };
    }

    const eraserBoundsPx = getAlphaBoundsFromData(eraserData, erpDesc.width, erpDesc.height, 8);
    if (!eraserBoundsPx) return false;

    function boxesIntersect(a, b) {
      if (!a || !b) return false;
      return !(a.maxX < b.minX || b.maxX < a.minX || a.maxY < b.minY || b.maxY < a.minY);
    }

    function getGroupApproxBoundsPx(group, strokes) {
      const frame = ensureGroupFrame(group?.actionGroupId || group?.id || "", "paint", strokes);
      if (!frame) return null;
      const minU = frame.centerUv.u - frame.halfW;
      const maxU = frame.centerUv.u + frame.halfW;
      const minV = frame.centerUv.v - frame.halfH;
      const maxV = frame.centerUv.v + frame.halfH;
      const width = erpDesc.width;
      const height = erpDesc.height;
      return {
        minX: Math.floor(((minU % 1 + 1) % 1) * width),
        maxX: Math.ceil((((maxU % 1 + 1) % 1) * width)),
        minY: Math.floor(clamp(minV, 0, 1) * height),
        maxY: Math.ceil(clamp(maxV, 0, 1) * height),
        wraps: (maxU - minU) >= 1 || minU < 0 || maxU > 1,
      };
    }

    function getRasterApproxBoundsPx(item) {
      const bbox = item?.bbox || null;
      if (!bbox) return null;
      const tf = item?.transform || {};
      const width = erpDesc.width;
      const height = erpDesc.height;
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

    function approxBoundsHit(bounds) {
      if (!bounds) return true;
      if (bounds.wraps) {
        return boxesIntersect(eraserBoundsPx, { minX: 0, maxX: bounds.maxX, minY: bounds.minY, maxY: bounds.maxY })
          || boxesIntersect(eraserBoundsPx, { minX: bounds.minX, maxX: erpDesc.width - 1, minY: bounds.minY, maxY: bounds.maxY });
      }
      return boxesIntersect(eraserBoundsPx, bounds);
    }

    function eraseCanvasAndDetectTouch(sourceCanvas) {
      if (!sourceCanvas) return { touched: false, canvas: null };
      const working = createRasterSurface(erpDesc.width, erpDesc.height, { readback: true });
      working.ctx.drawImage(sourceCanvas, 0, 0);
      const beforeData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      working.ctx.save();
      working.ctx.globalCompositeOperation = "destination-out";
      working.ctx.drawImage(eraserSurface.canvas, 0, 0);
      working.ctx.restore();
      const afterData = working.ctx.getImageData(0, 0, erpDesc.width, erpDesc.height);
      for (let i = 0; i < erpDesc.width * erpDesc.height; i += 1) {
        const eraserAlpha = eraserData[i * 4 + 3];
        if (eraserAlpha <= 8) continue;
        const beforeAlpha = beforeData.data[i * 4 + 3];
        const afterAlpha = afterData.data[i * 4 + 3];
        if (beforeAlpha > afterAlpha) {
          return { touched: true, canvas: working.canvas };
        }
      }
      return { touched: false, canvas: null };
    }

    function createReplacementObjects(canvas, layerKind, baseMeta) {
      const baseZ = Number(baseMeta?.z_index);
      const created = createRasterFrozenObjectsFromCanvas(canvas, layerKind, baseMeta).map((item, index) => ({
        ...item,
        z_index: Number.isFinite(baseZ) ? baseZ + (index * 0.001) : nextReplacementZ + (index * 0.001),
      }));
      if (created.length) {
        nextReplacementZ = Math.max(nextReplacementZ, ...created.map((item) => Number(item?.z_index || 0))) + 1;
      }
      return created;
    }

    for (const group of getPaintingGroupList()) {
      const gid = String(group?.actionGroupId || group?.id || "").trim();
      if (!gid) continue;
      const groupStrokes = getStrokeGroupStrokes(gid, "paint");
      if (!approxBoundsHit(getGroupApproxBoundsPx(group, groupStrokes))) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const groupTarget = editor.paintEngine?.getGroupTarget?.(gid) || null;
      const groupCanvas = groupTarget?.committedPaint?.canvas || null;
      if (!groupCanvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(groupCanvas);
      if (!erased.touched || !erased.canvas) {
        nextGroups.push(group);
        nextStrokes.push(...groupStrokes);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", groupMeta.get(gid) || group || {});
      nextRasterObjects.push(...created);
    }

    for (const rasterObject of getRasterObjectList().filter((item) => String(item?.layerKind || "paint") === "paint")) {
      if (!approxBoundsHit(getRasterApproxBoundsPx(rasterObject))) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const rasterCanvas = buildRasterObjectEditCanvas(rasterObject, null);
      if (!rasterCanvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      const erased = eraseCanvasAndDetectTouch(rasterCanvas);
      if (!erased.touched || !erased.canvas) {
        nextRasterObjects.push(rasterObject);
        continue;
      }
      changed = true;
      const created = createReplacementObjects(erased.canvas, "paint", rasterObject);
      nextRasterObjects.push(...created);
    }

    if (!changed) return false;
    state.painting.paint.strokes = nextStrokes;
    state.painting.groups = nextGroups.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    state.painting.raster_objects = nextRasterObjects.sort((a, b) => Number(a?.z_index || 0) - Number(b?.z_index || 0));
    clearSelection({ preservePanelValues: false });
    return true;
  }

  // Commit the current frame-stroke segment to state and start a fresh stroke with the
  // same action group.  Called when the pointer crosses the frame boundary mid-drag so
  // that the segment drawn inside the frame is preserved without a "teleport" line to
  // wherever the pointer re-enters.
  function _segmentFrameStroke(it) {
    const rawPoints = it.stroke?.geometry?.rawPoints || it.stroke?.geometry?.points || [];
    if (rawPoints.length >= 1) {
      // Save the completed inside-frame segment.
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) {
        if (String(it.stroke?.toolKind || "") === "eraser") {
          editor.paintEngine.cancelActiveStroke(targetDescriptor);
        } else {
          editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
        }
      }
      it._hasCommittedSegments = true;
    }
    // Start a new blank stroke — same tool/layer/style but fresh geometry.
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildFreehandStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId; // keep same undo group
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function _segmentFrameLassoFill(it) {
    const points = it.stroke?.geometry?.points || [];
    if (points.length >= 3) {
      commitPaintInteraction(it);
      const targetDescriptor = getActivePaintTargetDescriptor(it);
      if (targetDescriptor) editor.paintEngine.commitActiveStroke(it.stroke, targetDescriptor);
      it._hasCommittedSegments = true;
    }
    const prev = it.stroke;
    const targetSpace = { kind: "ERP_GLOBAL", viewMode: String(editor.mode || "frame") };
    const newStroke = buildLassoFillStrokeRecord(it.layerKind, prev.toolKind, [], targetSpace);
    newStroke.actionGroupId = prev.actionGroupId;
    it.stroke = newStroke;
    const targetDescriptor = getActivePaintTargetDescriptor(it);
    if (targetDescriptor) {
      editor.paintEngine.beginStroke(newStroke, targetDescriptor);
    }
  }

  function commitPaintInteraction(interaction) {
    const geometry = interaction?.stroke?.geometry || null;
    if (!geometry) return false;
    const toolKind = String(interaction?.stroke?.toolKind || "pen");
    if (interaction.layerKind === "paint" && toolKind === "eraser") {
      if (geometry.geometryKind !== "lasso_fill") {
        geometry.processedPoints = processFreehandPoints(geometry.rawPoints || geometry.points || [], interaction.stroke.targetSpace, true);
      }
      return applyPaintEraserInteraction(interaction);
    }
    const shouldCreatePaintGroup = interaction.layerKind === "paint" && toolKind !== "eraser";
    if (geometry.geometryKind === "lasso_fill") {
      const points = Array.isArray(geometry.points) ? geometry.points : [];
      if (points.length < 3) return false;
      if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
      getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
      return true;
    }
    const rawPoints = geometry.rawPoints || geometry.points || [];
    if (rawPoints.length < 1) return false;
    // ADR 0006: processedPoints is durable; rasterizer (Python) uses it directly.
    geometry.processedPoints = processFreehandPoints(rawPoints, interaction.stroke.targetSpace, true);
    if (shouldCreatePaintGroup) ensurePaintingGroupEntry(interaction.stroke?.actionGroupId);
    getPaintingLayerList(interaction.layerKind).push(interaction.stroke);
    return true;
  }

  return {
    connect(api) {
      ({
        buildRasterObjectEditCanvas, clearSelection, createRasterFrozenObjectsFromCanvas, createRasterSurface,
        ensureGroupFrame, ensurePaintingGroupEntry, getActiveCutoutShot, getActivePaintTargetDescriptor,
        getDisplayListObjects, getPaintingGroupList, getRasterObjectList, getStrokeGroupStrokes,
        processFreehandPoints, rasterizeStrokeToSurface, rebuildPaintEngineIfNeeded, screenPosToErpPoint,
        screenPosToFrameAsErpPoint, supportsFramePainting,
      } = api);
    },
    isActiveLassoTool, supportsErpPainting, getBrushPresetIdForTool, isPaintCursorEnabled,
    isActivePaintCursorVisible, setPointerPos, syncPaintCursorElement, showPaintSizePreview,
    hidePaintSizePreview, buildFreehandStrokeRecord, buildLassoFillStrokeRecord, getPaintingLayerList,
    appendPaintPoint, appendLassoPoint, _segmentFrameStroke, _segmentFrameLassoFill, commitPaintInteraction,
  };
}
