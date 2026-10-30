// What is under the pointer: the canvas items and their handles, the selection rects, and the cursor that
// shows it. The upstream Scene's sky Stickers (ADR 0030) lie under the node's own Sky, so they are hit after it.
import { hitFrameAffordance, hitStickerSelectionAffordance } from "../pano_sticker_affordance.js";
import { paintCornerHandle, strokeDotHit, strokeHitThreshold, strokePathsHit } from "../pano_paint_objects.js";
import { FRAME_ROLL_CURSOR } from "./constants.js";
import { distToSegment2, pointInPoly } from "./helpers.js";

export function createHitTest(deps) {
  const {
    editor, readOnly, shotEditor, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let erpPointToWorldDir, getActiveCutoutShot, getCutoutSelectableItemsForHit, getFrameViewRect,
    getOrderedDisplayListObjects, getRasterObjectItem, getSelected, getStrokeGroupItem, hitRasterObjectAt,
    isActivePaintCursorVisible, isErpCamera, isItemLocked, isRasterObjectItem, isShotItem, isStickerItem,
    isStrokeGroupItem, makeRasterObjectSelectionId, makeStrokeGroupSelectionId, objectGeom,
    screenPosToFrameAsErpPoint, setCanvasCursor, syncPaintCursorElement, upstreamSkyStickers, worldDirToFrameLocalPoint;

  // The upstream sky Stickers from front to back.
  function upstreamHitOrder() {
    return upstreamSkyStickers().reverse();
  }

  function hitObjectAt(p) {
    if (shotEditor && editor.mode === "frame") {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || !rect) return null;
      const insideRect = Number(p?.x || 0) >= Number(rect.x || 0)
        && Number(p?.x || 0) <= Number(rect.x || 0) + Number(rect.w || 0)
        && Number(p?.y || 0) >= Number(rect.y || 0)
        && Number(p?.y || 0) <= Number(rect.y || 0) + Number(rect.h || 0);
      if (!insideRect) return null;
      const erpPoint = screenPosToFrameAsErpPoint(p, shot, performance.now());
      const dir = erpPoint ? erpPointToWorldDir(erpPoint) : null;
      if (dir) {
        for (const item of getCutoutSelectableItemsForHit()) {
          if (!isStickerItem(item)) continue;
          const local = worldDirToFrameLocalPoint(item, dir);
          if (!local) continue;
          if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
            const geom = objectGeom(item);
            if (geom?.visible) return { item, geom };
          }
        }
      }
      const items = getOrderedDisplayListObjects(false).slice().sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0));
      for (const entry of items) {
        if (entry.type === "strokeGroup") {
          const item = getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (!geom?.visible) continue;
          if (strokePathsHit(p, geom.strokePaths)) return { item, geom };
          continue;
        }
        if (entry.type === "rasterObject") {
          const item = getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
          if (!item) continue;
          const geom = objectGeom(item);
          if (hitRasterObjectAt(item, geom, p, erpPoint)) return { item, geom };
          continue;
        }
        const item = entry.item;
        if (!item || !isStickerItem(item)) continue;
        if (!dir) continue;
        const local = worldDirToFrameLocalPoint(item, dir);
        if (!local) continue;
        if (Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1) {
          const geom = objectGeom(item);
          if (geom?.visible) return { item, geom };
        }
      }
      if (!dir) return null;
      for (const item of upstreamHitOrder()) {
        const local = worldDirToFrameLocalPoint(item, dir);
        if (!local || !(Number(local.x) >= 0 && Number(local.x) <= 1 && Number(local.y) >= 0 && Number(local.y) <= 1)) continue;
        const geom = objectGeom(item);
        if (geom?.visible) return { item, geom };
      }
      return null;
    }
    const items = [
      ...getOrderedDisplayListObjects(false)
      .slice()
      .sort((a, b) => Number(b?.z_index || 0) - Number(a?.z_index || 0))
      .map((entry) => {
        if (entry.type === "strokeGroup") {
          return getStrokeGroupItem(makeStrokeGroupSelectionId("paint", entry.actionGroupId || entry.id || ""));
        }
        if (entry.type === "rasterObject") {
          return getRasterObjectItem(makeRasterObjectSelectionId(entry.item?.id || entry.id || ""));
        }
        return entry.item;
      })
      .filter(Boolean),
      ...upstreamHitOrder(),
      ...(shotEditor ? getCutoutSelectableItemsForHit().filter((item) => isShotItem(item)) : []),
    ];
    for (const item of items) {
      if (isStrokeGroupItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        if (strokePathsHit(p, geom.strokePaths)) return { item, geom };
        continue;
      }
      if (isRasterObjectItem(item)) {
        const geom = objectGeom(item);
        if (!geom?.visible) continue;
        if (hitRasterObjectAt(item, geom, p)) return { item, geom };
        continue;
      }
      const g = objectGeom(item);
      if (!g.visible) continue;
      if (pointInPoly(p, g.outline?.length >= 4 ? g.outline : g.corners)) return { item, geom: g };
    }
    return null;
  }

  function handleHit(geom, p, item = null) {
    if (!geom || !geom.visible) return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    if (isStickerItem(item)) return hitStickerSelectionAffordance(geom, p);
    if (geom.kind === "strokeGroup") {
      // A dot's corners are about on it: a press on the dot moves it (pano_paint_objects.js strokeDotHit).
      if (strokeDotHit(p, geom.strokePaths)) return { kind: "move", cursor: "default" };
      const corner = paintCornerHandle(geom, p);
      if (corner) return corner;
      const paths = Array.isArray(geom.strokePaths) ? geom.strokePaths : [];
      for (const path of paths) {
        const pts = Array.isArray(path?.points) ? path.points : [];
        if (path.closed && pts.length >= 3 && pointInPoly(p, pts)) return { kind: "move", cursor: "default" };
        const threshold = strokeHitThreshold(path?.lineWidth);
        for (let i = 0; i < pts.length - 1; i += 1) {
          if (distToSegment2(p, pts[i], pts[i + 1]) <= threshold * threshold) return { kind: "move", cursor: "default" };
        }
      }
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
    if (geom.kind === "rasterObject") {
      const corner = paintCornerHandle(geom, p);
      if (corner) return corner;
      if (pointInPoly(p, geom.corners)) return { kind: "move", cursor: "default" };
      return { kind: "none", cursor: editor.mode === "pano" ? "grab" : "default" };
    }
    return hitFrameAffordance(geom, p, {
      edges: type === "cutout" || isShotItem(item),
      resize: !(isShotItem(item) && isErpCamera()),
      emptyCursor: editor.mode === "pano" ? "grab" : "default",
    });
  }

  function rectFromPoints(a, b) {
    return {
      x0: Math.min(Number(a?.x || 0), Number(b?.x || 0)),
      y0: Math.min(Number(a?.y || 0), Number(b?.y || 0)),
      x1: Math.max(Number(a?.x || 0), Number(b?.x || 0)),
      y1: Math.max(Number(a?.y || 0), Number(b?.y || 0)),
    };
  }

  function rectContainsPoint(rect, point) {
    return !!rect && !!point
      && Number(point.x) >= Number(rect.x0)
      && Number(point.x) <= Number(rect.x1)
      && Number(point.y) >= Number(rect.y0)
      && Number(point.y) <= Number(rect.y1);
  }

  function rectIntersectsGeom(rect, geom) {
    if (!rect || !geom?.visible || !Array.isArray(geom.corners)) return false;
    if (geom.corners.some((corner) => rectContainsPoint(rect, corner))) return true;
    const cx = (Number(rect.x0) + Number(rect.x1)) * 0.5;
    const cy = (Number(rect.y0) + Number(rect.y1)) * 0.5;
    if (pointInPoly({ x: cx, y: cy }, geom.corners)) return true;
    return false;
  }

  function updateCursor(p) {
    syncPaintCursorElement();
    if (editor.interaction) {
      if (editor.interaction.kind === "paint_stroke" || editor.interaction.kind === "paint_lasso_fill") setCanvasCursor("none");
      else if (editor.interaction.kind === "view") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "pan_frame") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "space_pan" || editor.interaction.kind === "frame_pan") setCanvasCursor("move");
      else if (editor.interaction.kind === "space_orbit" || editor.interaction.kind === "frame_orbit") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "world_gizmo") setCanvasCursor("grabbing");
      else if (editor.interaction.kind === "roll_frame") setCanvasCursor("grabbing");
    else if (editor.interaction.kind === "move" || editor.interaction.kind === "move_multi" || editor.interaction.kind === "move_stroke_group" || editor.interaction.kind === "move_raster_object") setCanvasCursor("move");
      else if (editor.interaction.kind === "scale" || editor.interaction.kind === "scale_x" || editor.interaction.kind === "scale_y" || editor.interaction.kind === "scale_raster_object") setCanvasCursor(editor.interaction.cursor || "nwse-resize");
      else if (editor.interaction.kind === "rotate") setCanvasCursor("grabbing");
      else setCanvasCursor("default");
      return;
    }
    if (isActivePaintCursorVisible()) {
      setCanvasCursor("none");
      return;
    }
    if (editor.mode === "frame") {
      if (editor.altModifier && !readOnly) {
        setCanvasCursor(FRAME_ROLL_CURSOR);
        return;
      }
      if (editor.primaryTool !== "cursor") {
        setCanvasCursor("default");
        return;
      }
      setCanvasCursor("grab");
      return;
    }
    if (editor.primaryTool === "cursor" && editor.marqueeModifier) {
      setCanvasCursor("default");
      return;
    }
    if (editor.gizmoAxis) {
      setCanvasCursor("grab");
      return;
    }
    const selected = getSelected();
    const geom = selected ? objectGeom(selected) : null;
    const selectedLocked = selected ? isItemLocked(selected) : false;
    const h = selectedLocked ? { kind: "none", cursor: "default" } : handleHit(geom, p, selected);
    if (!selectedLocked && h.kind !== "none") {
      setCanvasCursor(h.cursor);
      return;
    }
    if (editor.primaryTool === "cursor") {
      const hit = hitObjectAt(p);
      if (hit) {
        setCanvasCursor("default");
        return;
      }
    }
    setCanvasCursor(editor.mode === "pano" ? "grab" : "default");
  }

  return {
    connect(api) {
      ({
        erpPointToWorldDir, getActiveCutoutShot, getCutoutSelectableItemsForHit, getFrameViewRect,
        getOrderedDisplayListObjects, getRasterObjectItem, getSelected, getStrokeGroupItem, hitRasterObjectAt,
        isActivePaintCursorVisible, isErpCamera, isItemLocked, isRasterObjectItem, isShotItem, isStickerItem,
        isStrokeGroupItem, makeRasterObjectSelectionId, makeStrokeGroupSelectionId, objectGeom,
        screenPosToFrameAsErpPoint, setCanvasCursor, syncPaintCursorElement, upstreamSkyStickers, worldDirToFrameLocalPoint,
      } = api);
    },
    hitObjectAt, handleHit, rectFromPoints, rectIntersectsGeom, updateCursor,
  };
}
