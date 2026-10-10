// The pointer gestures that transform one canvas item: move, scale (both axes, "scale_x", "scale_y") and
// rotate of a sky Sticker or the shot ("move", "scale", "scale_x", "scale_y", "rotate"), of a stroke group
// ("move_stroke_group", "scale_stroke_group", "rotate_stroke_group") and of a raster object
// ("move_raster_object", "scale_raster_object"). pointer_input.js decides from the handle under the press
// which one starts. Letting go of any item edit, a multi-selection move (pointer_multi_move.js) too, is
// one Undo step (endTransform).
import { deriveCutoutAspectLabelFromFov, deriveHorizontalFovDeg, fovPairKeepingAspect, getCutoutCameraParams } from "../pano_cutout_view_math.js";
import { CAMERA_SHOT_ID } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { RAD2DEG } from "./constants.js";
import { cloneJson, dirToYawPitch } from "./helpers.js";

export function createPointerTransform(deps) {
  const { canvas, editor, node, shotEditor } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applyRasterObjectOffset, applyRasterObjectTransform, applyStrokeGroupOffset, applyStrokeGroupTransform,
    commitState, ensureGroupFrame, frameLocalPointToWorldDir, getActiveCutoutShot, getFrameViewRect,
    getRasterObjectList, getStrokeGroupStrokes, getUnwrapRect, isRasterObjectItem, isSceneSticker, isStickerItem,
    isStrokeGroupItem, markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty,
    parseRasterObjectSelectionId, poseOf, pushHistory, requestDraw, screenPosToErpPoint, screenPosToFrameAsErpPoint,
    screenToWorldDir, shortestWrappedDelta, syncSidePanelControls, updateCursor, updateSelectionMenu, writePose;

  // The ERP point under canvas point p that a paint item moves by: through the active shot in the Frame
  // view (null without one), on the panorama elsewhere.
  function editUvAt(p) {
    return editor.mode === "frame"
      ? (() => {
        const shot = getActiveCutoutShot();
        return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
      })()
      : screenPosToErpPoint(p, performance.now());
  }

  // The strokes and the frame of a stroke group, and the record of a raster object, as a drag starts.
  function strokeGroupSnapshot(item) {
    return cloneJson(getStrokeGroupStrokes(item.actionGroupId, item.layerKind));
  }

  function strokeGroupFrameSnapshot(item) {
    return cloneJson(ensureGroupFrame(item.actionGroupId, item.layerKind));
  }

  function rasterObjectSnapshot(item) {
    return cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(item.rasterObjectId || item.id || "")));
  }

  // Writes the yaw and pitch that put item at canvas point (x, y): through the active shot in a shot
  // editor's Frame view, the Unwrap rect, or the view. Returns false when the Frame view has no shot, rect
  // or direction there, and writes nothing.
  function writePoseAtScreenPoint(item, x, y) {
    if (editor.mode === "frame" && shotEditor) {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || !rect) return false;
      const framePoint = {
        x: clamp((x - rect.x) / Math.max(1, rect.w), 0, 1),
        y: clamp((y - rect.y) / Math.max(1, rect.h), 0, 1),
      };
      const dir = frameLocalPointToWorldDir(shot, framePoint);
      if (!dir) return false;
      const yp = dirToYawPitch(dir);
      writePose(item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
    } else if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      const nx = clamp((x - r.x) / Math.max(r.w, 1), 0, 1);
      const ny = clamp((y - r.y) / Math.max(r.h, 1), 0, 1);
      writePose(item, { yaw_deg: wrapYaw(nx * 360 - 180), pitch_deg: clamp(90 - ny * 180, -90, 90) });
    } else {
      const dir = screenToWorldDir(x, y);
      const yp = dirToYawPitch(dir);
      writePose(item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
    }
    return true;
  }

  // ---- Starting on a handle of the selected item (selGeom its geometry, h the handle).

  function startScale(e, p, selected, selGeom, h) {
    editor.interaction = isStrokeGroupItem(selected)
      ? {
        kind: "scale_stroke_group",
        item: selected,
        center: selGeom.center,
        startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
        snapshot: strokeGroupSnapshot(selected),
        frameSnapshot: strokeGroupFrameSnapshot(selected),
        cursor: h.cursor,
      }
      : isRasterObjectItem(selected)
      ? {
        kind: "scale_raster_object",
        item: selected,
        center: selGeom.center,
        startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
        snapshot: rasterObjectSnapshot(selected),
        cursor: h.cursor,
      }
      : {
        kind: "scale",
        item: selected,
        center: selGeom.center,
        startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
        startHFOV: Number(poseOf(selected).hFOV_deg || 20),
        startVFOV: Number(poseOf(selected).vFOV_deg || 20),
        cursor: h.cursor,
      };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // The edge handles ("scale_x", "scale_y").
  function startAxisScale(e, p, selected, selGeom, h) {
    editor.interaction = {
      kind: h.kind,
      item: selected,
      center: selGeom.center,
      startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
      startHFOV: Number(poseOf(selected).hFOV_deg || 20),
      startVFOV: Number(poseOf(selected).vFOV_deg || 20),
      cursor: h.cursor,
      edge: h.edge,
    };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  function startRotate(e, p, selected, selGeom) {
    editor.interaction = isStrokeGroupItem(selected)
      ? {
        kind: "rotate_stroke_group",
        item: selected,
        center: selGeom.center,
        startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
        snapshot: strokeGroupSnapshot(selected),
        frameSnapshot: strokeGroupFrameSnapshot(selected),
      }
      : {
        kind: "rotate",
        item: selected,
        center: selGeom.center,
        startRot: Number(poseOf(selected).rot_deg || poseOf(selected).roll_deg || 0),
        startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
      };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  function startMove(e, p, selected, selGeom) {
    if (isStrokeGroupItem(selected)) {
      const startUv = editUvAt(p);
      editor.interaction = {
        kind: "move_stroke_group",
        item: selected,
        startUv,
        snapshot: strokeGroupSnapshot(selected),
        frameSnapshot: strokeGroupFrameSnapshot(selected),
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (isRasterObjectItem(selected)) {
      const startUv = editUvAt(p);
      editor.interaction = {
        kind: "move_raster_object",
        item: selected,
        startUv,
        snapshot: rasterObjectSnapshot(selected),
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    editor.interaction = {
      kind: "move",
      item: selected,
      offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
    };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // A press on an item that was not under a handle (hitObjectAt's hit) moves it.
  function startHitMove(e, p, hit) {
    editor.interaction = {
      kind: isStrokeGroupItem(hit.item) ? "move_stroke_group" : (isRasterObjectItem(hit.item) ? "move_raster_object" : "move"),
      item: hit.item,
      offset: { x: p.x - hit.geom.center.x, y: p.y - hit.geom.center.y },
      startUv: (isStrokeGroupItem(hit.item) || isRasterObjectItem(hit.item))
        ? editUvAt(p)
        : null,
      snapshot: isStrokeGroupItem(hit.item)
        ? strokeGroupSnapshot(hit.item)
        : (isRasterObjectItem(hit.item)
          ? rasterObjectSnapshot(hit.item)
          : null),
      frameSnapshot: isStrokeGroupItem(hit.item)
        ? strokeGroupFrameSnapshot(hit.item)
        : null,
    };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // ---- Moves.

  function moveItem(it, p) {
    const tx = p.x - it.offset.x;
    const ty = p.y - it.offset.y;
    if (!writePoseAtScreenPoint(it.item, tx, ty)) return;
    if (isStickerItem(it.item)) {
      markObjectVisualsDirty();
    }
    requestDraw({ localOnly: true });
  }

  function moveStrokeGroup(it, p) {
    const currentUv = editUvAt(p);
    if (!currentUv || !it.startUv) return;
    const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
    const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
    if (applyStrokeGroupOffset(it.item?.actionGroupId, du, dv, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
      markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  function moveRasterObject(it, p) {
    const currentUv = editUvAt(p);
    if (!currentUv || !it.startUv) return;
    const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
    const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
    if (applyRasterObjectOffset(it.item?.rasterObjectId || it.item?.id || "", du, dv, it.snapshot)) {
      markPaintCompositeVisualsDirty();
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  function scaleRasterObject(it, p) {
    const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
    const ratio = d / Math.max(1, Number(it.startDist || 1));
    if (applyRasterObjectTransform(it.item?.rasterObjectId || it.item?.id || "", ratio, it.snapshot)) {
      markPaintCompositeVisualsDirty();
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  function scaleStrokeGroup(it, p) {
    const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
    const ratio = d / Math.max(1, Number(it.startDist || 1));
    if (applyStrokeGroupTransform(it.item?.actionGroupId, ratio, 0, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
      markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  function rotateStrokeGroup(it, p, e) {
    let delta = (Math.atan2(p.y - it.center.y, p.x - it.center.x) - Number(it.startAng || 0)) * RAD2DEG;
    if (e.shiftKey) delta = Math.round(delta / 45) * 45;
    if (applyStrokeGroupTransform(it.item?.actionGroupId, 1, delta, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
      markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
      requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
    }
  }

  // "scale" writes both FOVs, "scale_x" the hFOV, "scale_y" the vFOV. Panorama Studio's Camera keeps its frame's
  // aspect (docs/editor-interaction.md): each handle changes its angle of view, its hFOV from the handle's axis.
  function scaleItem(it, p) {
    const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
    const ratio = d / it.startDist;
    if (it.item?.id === CAMERA_SHOT_ID) {
      const start = { ...it.item, hFOV_deg: it.startHFOV, vFOV_deg: it.startVFOV };
      const { aspect, curve } = getCutoutCameraParams(start);
      const hFov = it.kind === "scale_y" ? deriveHorizontalFovDeg(it.startVFOV * ratio, aspect, curve) : it.startHFOV * ratio;
      writePose(it.item, fovPairKeepingAspect(start, hFov));
      requestDraw({ localOnly: true });
      return;
    }
    if (it.kind === "scale") writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179), vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
    else if (it.kind === "scale_x") writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179) });
    else writePose(it.item, { vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
    if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
    if (isStickerItem(it.item)) markObjectVisualsDirty();
    requestDraw({ localOnly: true });
  }

  function rotateItem(it, p, e) {
    const a = Math.atan2(p.y - it.center.y, p.x - it.center.x);
    let delta = (a - it.startAng) * RAD2DEG;
    let out = it.startRot - delta;
    if (e.shiftKey) out = Math.round(out / 45) * 45;
    writePose(it.item, { [isStickerItem(it.item) ? "rot_deg" : "roll_deg"]: out });
    if (isStickerItem(it.item)) markObjectVisualsDirty();
    requestDraw({ localOnly: true });
  }

  // ---- The end of an item edit (any gesture pointer_input.js does not end otherwise).

  function endTransform() {
    let compositeChanged = false;
    if (editor.interaction.kind === "move_stroke_group"
      || editor.interaction.kind === "scale_stroke_group"
      || editor.interaction.kind === "rotate_stroke_group") {
      compositeChanged = true;
    }
    if (editor.interaction.kind === "move_raster_object" || editor.interaction.kind === "scale_raster_object") {
      compositeChanged = true;
    }
    if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length) {
      compositeChanged = true;
    }
    if (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.rasterSnapshots) && editor.interaction.rasterSnapshots.length) {
      compositeChanged = true;
    }
    if (compositeChanged) {
      const strokeDragKinds = ["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"];
      const isStrokeDrag = strokeDragKinds.includes(editor.interaction.kind)
        || (editor.interaction.kind === "move_multi" && Array.isArray(editor.interaction.strokeSnapshots) && editor.interaction.strokeSnapshots.length);
      if (isStrokeDrag) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: true });
      } else {
        markPaintCompositeVisualsDirty();
      }
    }
    pushHistory();
    commitState();
    node.setDirtyCanvas(true, true);
    syncSidePanelControls();
    updateSelectionMenu();
    requestDraw();
  }

  return {
    connect(api) {
      ({
        applyRasterObjectOffset, applyRasterObjectTransform, applyStrokeGroupOffset, applyStrokeGroupTransform,
        commitState, ensureGroupFrame, frameLocalPointToWorldDir, getActiveCutoutShot, getFrameViewRect,
        getRasterObjectList, getStrokeGroupStrokes, getUnwrapRect, isRasterObjectItem, isSceneSticker, isStickerItem,
        isStrokeGroupItem, markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty,
        parseRasterObjectSelectionId, poseOf, pushHistory, requestDraw, screenPosToErpPoint, screenPosToFrameAsErpPoint,
        screenToWorldDir, shortestWrappedDelta, syncSidePanelControls, updateCursor, updateSelectionMenu, writePose,
      } = api);
    },
    editUvAt, strokeGroupSnapshot, strokeGroupFrameSnapshot, rasterObjectSnapshot, writePoseAtScreenPoint,
    startScale, startAxisScale, startRotate, startMove, startHitMove,
    moveItem, moveStrokeGroup, moveRasterObject, scaleRasterObject, scaleStrokeGroup, rotateStrokeGroup, scaleItem,
    rotateItem, endTransform,
  };
}
