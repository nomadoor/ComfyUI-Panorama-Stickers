// Painting with the pointer: the paint and mask tools, the brush cursor and size preview, the stroke and
// lasso records a drag builds, the eraser, and committing a stroke to the painting.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "../pano_brush_presets.js";
import { clamp } from "../pano_math.js";
import {
  brushPresetIdForTool, commitPaintStroke, freehandStrokeRecord, lassoFillStrokeRecord, paintingLayerStrokes,
  statePainting, strokeSample, takesStrokePoint,
} from "../pano_paint_strokes.js";
import { LASSO_CURSOR_HOTSPOT_X, LASSO_CURSOR_HOTSPOT_Y, LASSO_CURSOR_SIZE, RAD2DEG } from "./constants.js";
import { cloneColor, colorToCss, getLassoCursorBackground } from "./helpers.js";

export function createPaintInput(deps) {
  const {
    editor, paintCursorEl, paintSizePreviewEl, paintSizePreviewSampleEl, state, timers,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let buildRasterObjectEditCanvas, clearSelection,
    ensureGroupFrame, ensurePaintingGroupEntry, getActiveCutoutShot, getActivePaintTargetDescriptor,
    getDisplayListObjects, getStrokeGroupStrokes,
    rebuildPaintEngineIfNeeded, screenPosToErpPoint,
    screenPosToFrameAsErpPoint, supportsFramePainting, takeGestureSnapshot;

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

  function getBrushPresetIdForTool(toolKind) {
    return brushPresetIdForTool(toolKind, editor.activeBrushPresetId);
  }

  // The tools' settings a stroke's record takes (pano_paint_strokes.js).
  function brushSettings() {
    return { brushSizes: editor.brushSizes, activePresetId: editor.activeBrushPresetId, paintColor: editor.paintColor, viewMode: editor.mode || "pano" };
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
    return freehandStrokeRecord(layerKind, toolKind, points, targetSpace, brushSettings());
  }

  function buildLassoFillStrokeRecord(layerKind, toolKind, points, targetSpace) {
    return lassoFillStrokeRecord(layerKind, toolKind, points, targetSpace, brushSettings());
  }

  function getPaintingLayerList(layerKind) {
    return paintingLayerStrokes(statePainting(state), layerKind);
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
    if (!takesStrokePoint(rawPoints[rawPoints.length - 1], next)) return false;
    const sample = strokeSample(next);
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
    if (!takesStrokePoint(points[points.length - 1], next)) return false;
    points.push(strokeSample(next));
    return true;
  }

  // The paint eraser's sources (pano_paint_strokes.js erasePaint): the engine's committed group canvases and the
  // raster objects' ERP canvases.
  function paintEraserSources() {
    rebuildPaintEngineIfNeeded();
    return {
      descriptor: getActivePaintTargetDescriptor(),
      groupStrokes: (gid) => getStrokeGroupStrokes(gid, "paint"),
      groupFrame: (group, strokes) => ensureGroupFrame(group?.actionGroupId || group?.id || "", "paint", strokes),
      groupCanvas: (gid) => editor.paintEngine?.getGroupTarget?.(gid)?.committedPaint?.canvas || null,
      rasterCanvas: (item) => buildRasterObjectEditCanvas(item, null),
      topZ: () => getDisplayListObjects().reduce((max, entry) => Math.max(max, Number(entry?.z_index || 0)), -1),
    };
  }

  // Commit the current frame-stroke segment to state and start a fresh stroke with the
  // same action group.  Called when the pointer crosses the frame boundary mid-drag so
  // that the segment drawn inside the frame is preserved without a "teleport" line to
  // wherever the pointer re-enters.
  function _segmentFrameStroke(it) {
    const rawPoints = it.stroke?.geometry?.rawPoints || it.stroke?.geometry?.points || [];
    if (rawPoints.length >= 1) {
      // The painting as the stroke started, which cancelling the stroke puts back (pointer_input.js cancelGesture).
      takeGestureSnapshot(it);
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
      takeGestureSnapshot(it);
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
    const changed = commitPaintStroke(statePainting(state), interaction?.layerKind, interaction?.stroke, {
      ensureGroup: ensurePaintingGroupEntry,
      eraser: paintEraserSources,
    });
    const erased = changed && interaction.layerKind === "paint" && String(interaction?.stroke?.toolKind || "") === "eraser";
    if (erased) clearSelection({ preservePanelValues: false });
    return changed;
  }

  return {
    connect(api) {
      ({
        buildRasterObjectEditCanvas, clearSelection,
        ensureGroupFrame, ensurePaintingGroupEntry, getActiveCutoutShot, getActivePaintTargetDescriptor,
        getDisplayListObjects, getStrokeGroupStrokes,
        rebuildPaintEngineIfNeeded, screenPosToErpPoint,
        screenPosToFrameAsErpPoint, supportsFramePainting, takeGestureSnapshot,
      } = api);
    },
    isActiveLassoTool, supportsErpPainting, getBrushPresetIdForTool, isPaintCursorEnabled,
    isActivePaintCursorVisible, setPointerPos, syncPaintCursorElement, showPaintSizePreview,
    hidePaintSizePreview, buildFreehandStrokeRecord, buildLassoFillStrokeRecord, getPaintingLayerList,
    appendPaintPoint, appendLassoPoint, _segmentFrameStroke, _segmentFrameLassoFill, commitPaintInteraction,
  };
}
