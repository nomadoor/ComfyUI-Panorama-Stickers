// The screen geometry of the canvas items (sky Stickers, shots, stroke groups, raster objects), cached per
// view, which the overlay draws and the hit testing reads.
import { BRUSH_PRESETS, DEFAULT_BRUSH_PRESET_ID } from "../pano_brush_presets.js";
import { yawPitchToDir } from "../pano_camera_math.js";
import { clamp } from "../pano_math.js";
import { smoothstep } from "./helpers.js";

export function createObjectGeometry(deps) {
  const {
    cameraV2, canvas, editor, state,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let currentViewProjection, cutoutStickers, ensureGroupFrame, getActiveCutoutShot, getBrushPresetIdForTool,
    getFrameCornersUv, getFrameViewRect, getRasterObjectCenterUv, getRasterObjectGeomCacheKey,
    getRasterObjectTransformedErpPoints, getSceneItemGeomCacheKey, getStickerFrame, getStrokeGeomCacheKey,
    getStrokeGroupCenterUv, getStrokeGroupStrokes, isFreeSpaceView, isRasterObjectItem, isSceneSticker,
    isShotItem, isStickerItem, isStrokeGroupItem, paintingShown, poseOf, projectDir, projectDirUnwrap,
    projectEditorPoints, projectErpPointToEditor, sceneStickerShown, stickerCornersDir, stickerDirFromFrame,
    stickerSampleDir, worldDirToFrameLocalPoint;

  function buildStrokeGroupGeom(item, cacheKey) {
    const actionGroupId = String(item.actionGroupId || item.id || "").trim();
    const strokes = getStrokeGroupStrokes(actionGroupId, item.layerKind);
    const frame = ensureGroupFrame(actionGroupId, item.layerKind, strokes);
    const centerPoint = frame?.centerUv || getStrokeGroupCenterUv(actionGroupId, item.layerKind, strokes);
    const unwrapRefU = editor.mode === "unwrap" ? Number(centerPoint?.u || 0) : null;
    const strokePaths = [];
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    for (const stroke of strokes) {
      const geometry = stroke?.geometry || null;
      const srcPoints = geometry?.geometryKind === "lasso_fill"
        ? geometry?.points
        : (geometry?.processedPoints || geometry?.rawPoints || geometry?.points || []);
      const pts = projectEditorPoints(srcPoints, frameShot, frameRect, unwrapRefU)
        .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y));
      if (!pts.length) continue;
      const presetId = getBrushPresetIdForTool(String(stroke?.toolKind || "pen"));
      const preset = BRUSH_PRESETS[presetId] || BRUSH_PRESETS[DEFAULT_BRUSH_PRESET_ID];
      strokePaths.push({
        points: pts,
        closed: String(geometry?.geometryKind || "") === "lasso_fill",
        lineWidth: Math.max(10, Number(stroke?.size || 10) * Math.max(0.1, Number(preset?.sizeScale ?? 1)) + 10),
        layerKind: String(stroke?.layerKind || item.layerKind || "paint"),
      });
    }
    const center = projectErpPointToEditor(centerPoint, null, frameShot, frameRect, unwrapRefU);
    if (!center) {
      const hidden = { visible: false, kind: "strokeGroup" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const cornersUv = getFrameCornersUv(frame);
    const corners = cornersUv
      .map((pt) => projectErpPointToEditor(pt, center.x, frameShot, frameRect, unwrapRefU))
      .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y))
      .map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }));
    if (corners.length < 4) {
      const hidden = { visible: false, kind: "strokeGroup" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const edgeMidpoint = (a, b) => ({
      x: (Number(a?.x || 0) + Number(b?.x || 0)) * 0.5,
      y: (Number(a?.y || 0) + Number(b?.y || 0)) * 0.5,
      a,
      b,
    });
    const topMid = edgeMidpoint(corners[0], corners[1]);
    const rightMid = edgeMidpoint(corners[1], corners[2]);
    const bottomMid = edgeMidpoint(corners[2], corners[3]);
    const leftMid = edgeMidpoint(corners[3], corners[0]);
    const geom = {
      kind: "strokeGroup",
      center: { x: Number(center.x || 0), y: Number(center.y || 0) },
      corners,
      edgeMidpoints: [
        { edge: "top", ...topMid },
        { edge: "right", ...rightMid },
        { edge: "bottom", ...bottomMid },
        { edge: "left", ...leftMid },
      ],
      rotateStemBase: { x: topMid.x, y: topMid.y },
      rotateHandle: { x: topMid.x, y: topMid.y - 30 },
      strokePaths,
      visible: true,
    };
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
  }

  function buildRasterObjectGeom(item, cacheKey) {
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    const centerUv = getRasterObjectCenterUv(item);
    const unwrapRefU = editor.mode === "unwrap" ? Number(centerUv?.u || 0) : null;
    const centerPoint = projectErpPointToEditor(centerUv, null, frameShot, frameRect, unwrapRefU);
    const erpPoints = getRasterObjectTransformedErpPoints(item);
    const projected = erpPoints
      .map((pt) => projectErpPointToEditor(pt, centerPoint?.x ?? null, frameShot, frameRect, unwrapRefU))
      .filter((pt) => Number.isFinite(pt?.x) && Number.isFinite(pt?.y));
    if (!Array.isArray(projected) || projected.length < 4) {
      const hidden = { visible: false, kind: "rasterObject" };
      editor._strokeGeomCache.set(cacheKey, hidden);
      return hidden;
    }
    const corners = projected.slice(0, 4).map((pt) => ({ x: Number(pt?.x || 0), y: Number(pt?.y || 0) }));
    const center = {
      x: corners.reduce((sum, pt) => sum + Number(pt.x || 0), 0) / corners.length,
      y: corners.reduce((sum, pt) => sum + Number(pt.y || 0), 0) / corners.length,
    };
    const geom = {
      kind: "rasterObject",
      center,
      corners,
      visible: true,
    };
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
  }

  function projectSceneItemDir(dir, refX = null, frameShot = null, frameRect = null, options = {}) {
    // A lens image's point past 180° off its axis has no direction (ADR 0042).
    if (!dir) return null;
    if (editor.mode === "frame") {
      const shot = frameShot || getActiveCutoutShot();
      const rect = frameRect || getFrameViewRect(shot);
      if (!shot || !rect) return null;
      const local = shot ? worldDirToFrameLocalPoint(shot, dir) : null;
      return local ? {
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
        z: 1,
      } : null;
    }
    if (editor.mode === "unwrap") return projectDirUnwrap(dir, refX);
    const nearZ = 1e-4;
    const point = currentViewProjection().project(dir, nearZ);
    if (!Number.isFinite(point.z)) return null;
    if (point.z <= nearZ && !options?.clipBehind) return null;
    const w = canvas.width;
    const h = canvas.height;
    const guard = Math.max(w, h) * 2.0;
    return {
      x: clamp(point.x, -guard, w + guard),
      y: clamp(point.y, -guard, h + guard),
      z: Math.max(point.z, nearZ),
      rawZ: point.z,
      clipped: point.z <= nearZ,
    };
  }

  function sceneItemVisibilityAlpha(item, points = []) {
    if (editor.mode !== "pano" || isStickerItem(item)) return 1;
    const depths = points
      .map((point) => Number(point?.rawZ ?? point?.z))
      .filter((z) => Number.isFinite(z));
    if (!depths.length) return 1;
    return smoothstep(0.035, 0.2, Math.min(...depths));
  }

  function buildSceneItemGeom(item) {
    if (isSceneSticker(item) && !sceneStickerShown(item)) return { visible: false };
    const pose = poseOf(item);
    const centerDir = yawPitchToDir(Number(pose.yaw_deg || 0), Number(pose.pitch_deg || 0));
    const frameShot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    const frameRect = frameShot ? getFrameViewRect(frameShot) : null;
    const clipBehind = editor.mode === "pano" && (isStickerItem(item) || isShotItem(item));
    const projectOptions = clipBehind ? { clipBehind: true } : null;
    const center = (() => {
      return projectSceneItemDir(centerDir, null, frameShot, frameRect, projectOptions);
    })();
    if (!center) return { visible: false };
    const frame = getStickerFrame(item);
    const cornersDir = stickerCornersDir(item);
    const corners = cornersDir
      .map((d) => projectSceneItemDir(d, center.x, frameShot, frameRect, projectOptions))
      .filter((p) => Number.isFinite(p?.x) && Number.isFinite(p?.y));
    if (corners.length < 4) return { visible: false };
    const rotateStemBaseDir = stickerDirFromFrame(frame, 0, frame.tanY);
    const rotateHandleDir = stickerDirFromFrame(frame, 0, frame.tanY + Math.max(frame.tanY * 0.43, 0.053));
    const rotateStemBase = projectSceneItemDir(rotateStemBaseDir, center.x, frameShot, frameRect, projectOptions);
    if (!rotateStemBase) return { visible: false };
    const rotateHandleHint = projectSceneItemDir(rotateHandleDir, rotateStemBase?.x ?? center.x, frameShot, frameRect, projectOptions);
    const handleDx = (rotateHandleHint?.x ?? rotateStemBase.x) - rotateStemBase.x;
    const handleDy = (rotateHandleHint?.y ?? rotateStemBase.y) - rotateStemBase.y;
    const handleLen = Math.hypot(handleDx, handleDy) || 1;
    const rotateHandle = {
      x: rotateStemBase.x + (handleDx / handleLen) * 30,
      y: rotateStemBase.y + (handleDy / handleLen) * 30,
    };
    const topEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, 0, frame.tanY), center.x, frameShot, frameRect, projectOptions);
    const rightEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, frame.tanX, 0), center.x, frameShot, frameRect, projectOptions);
    const bottomEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, 0, -frame.tanY), center.x, frameShot, frameRect, projectOptions);
    const leftEdgeCenter = projectSceneItemDir(stickerDirFromFrame(frame, -frame.tanX, 0), center.x, frameShot, frameRect, projectOptions);
    if (!topEdgeCenter || !rightEdgeCenter || !bottomEdgeCenter || !leftEdgeCenter) return { visible: false };
    const projectedPoints = [
      center,
      ...corners,
      rotateStemBase,
      rotateHandleHint,
      topEdgeCenter,
      rightEdgeCenter,
      bottomEdgeCenter,
      leftEdgeCenter,
    ];
    if (clipBehind && !projectedPoints.some((point) => Number(point?.rawZ ?? point?.z) > 1e-4)) return { visible: false };
    const visibilityAlpha = sceneItemVisibilityAlpha(item, projectedPoints);
    const edgeMidpoints = [
      {
        edge: "top",
        x: topEdgeCenter.x,
        y: topEdgeCenter.y,
        a: { x: corners[0].x, y: corners[0].y },
        b: { x: corners[1].x, y: corners[1].y },
      },
      {
        edge: "right",
        x: rightEdgeCenter.x,
        y: rightEdgeCenter.y,
        a: { x: corners[1].x, y: corners[1].y },
        b: { x: corners[2].x, y: corners[2].y },
      },
      {
        edge: "bottom",
        x: bottomEdgeCenter.x,
        y: bottomEdgeCenter.y,
        a: { x: corners[2].x, y: corners[2].y },
        b: { x: corners[3].x, y: corners[3].y },
      },
      {
        edge: "left",
        x: leftEdgeCenter.x,
        y: leftEdgeCenter.y,
        a: { x: corners[3].x, y: corners[3].y },
        b: { x: corners[0].x, y: corners[0].y },
      },
    ];
    return {
      center: { x: center.x, y: center.y },
      corners: corners.map((c) => ({ x: c.x, y: c.y })),
      edgeMidpoints,
      rotateStemBase: { x: rotateStemBase.x, y: rotateStemBase.y },
      rotateHandle,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha,
      visible: true,
    };
  }

  function objectGeom(item) {
    // In 6DoF Panorama Studio's Camera is its frustum in space, picked and moved with the gizmo.
    if (cameraV2 && isShotItem(item) && isFreeSpaceView()) return { visible: false };
    if (!paintingShown() && (isStrokeGroupItem(item) || isRasterObjectItem(item))) return { visible: false };
    if (isStrokeGroupItem(item)) {
      const actionGroupId = String(item.actionGroupId || item.id || "").trim();
      const cacheKey = getStrokeGeomCacheKey(actionGroupId, item.layerKind);
      const cached = editor._strokeGeomCache.get(cacheKey);
      if (cached) return cached;
      if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
      return buildStrokeGroupGeom(item, cacheKey);
    }
    if (isRasterObjectItem(item)) {
      const cacheKey = getRasterObjectGeomCacheKey(item);
      const cached = editor._strokeGeomCache.get(cacheKey);
      if (cached) return cached;
      if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
      return buildRasterObjectGeom(item, cacheKey);
    }
    const cacheKey = getSceneItemGeomCacheKey(item);
    const cached = editor._strokeGeomCache.get(cacheKey);
    if (cached) return cached;
    if (editor._strokeGeomCache.size > 256) editor._strokeGeomCache.clear();
    const geom = buildSceneItemGeom(item);
    editor._strokeGeomCache.set(cacheKey, geom);
    return geom;
  }

  function sampleStickerEdge(item, edge, steps, refX = null) {
    const out = [];
    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      let u = 0;
      let v = 0;
      if (edge === 0) { u = t; v = 0; }         // top
      else if (edge === 1) { u = 1; v = t; }    // right
      else if (edge === 2) { u = 1 - t; v = 1; } // bottom
      else { u = 0; v = 1 - t; }                // left

      const d = stickerSampleDir(item, u, v);
      const p = !d ? null : editor.mode === "unwrap" ? projectDirUnwrap(d, refX) : projectDir(d);
      if (p) out.push(p);
    }
    return out;
  }

  function getCutoutSelectableItemsForDisplay() {
    const shots = [...(Array.isArray(state.shots) ? state.shots : [])];
    const stickers = [...cutoutStickers()]
      .sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
    return [...shots, ...stickers];
  }

  function getCutoutSelectableItemsForHit() {
    const shots = [...(Array.isArray(state.shots) ? state.shots : [])];
    const stickers = [...cutoutStickers()]
      .sort((a, b) => Number(b.z_index || 0) - Number(a.z_index || 0));
    return [...stickers, ...shots];
  }

  return {
    connect(api) {
      ({
        currentViewProjection, cutoutStickers, ensureGroupFrame, getActiveCutoutShot, getBrushPresetIdForTool,
        getFrameCornersUv, getFrameViewRect, getRasterObjectCenterUv, getRasterObjectGeomCacheKey,
        getRasterObjectTransformedErpPoints, getSceneItemGeomCacheKey, getStickerFrame, getStrokeGeomCacheKey,
        getStrokeGroupCenterUv, getStrokeGroupStrokes, isFreeSpaceView, isRasterObjectItem, isSceneSticker,
        isShotItem, isStickerItem, isStrokeGroupItem, paintingShown, poseOf, projectDir, projectDirUnwrap,
        projectEditorPoints, projectErpPointToEditor, sceneStickerShown, stickerCornersDir, stickerDirFromFrame,
        stickerSampleDir, worldDirToFrameLocalPoint,
      } = api);
    },
    projectSceneItemDir, objectGeom, sampleStickerEdge, getCutoutSelectableItemsForDisplay,
    getCutoutSelectableItemsForHit,
  };
}
