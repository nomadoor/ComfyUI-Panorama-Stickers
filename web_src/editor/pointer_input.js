// The stage canvas's pointer and wheel: what a press starts (look around, select, move, scale, rotate, paint,
// the gizmo, the Frame view's drags), what a move does to it and how it ends. Playback keeps running until
// an edit's first move (restartEditAtStoppedFrame).
import { beginCutoutRollGesture, panCutoutShotByScreenDelta } from "../pano_cutout_node_surface.js";
import { deriveCutoutAspectLabelFromFov } from "../pano_cutout_view_math.js";
import { setWorldStickerTransform } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import { gizmoDragLanes, orbitView, panView } from "../pano_space.js";
import { setLaneValue } from "../pano_timeline.js";
import { viewDragAction } from "../pano_view_controls.js";
import { readWheelDirection } from "../pano_wheel.js";
import { RAD2DEG } from "./constants.js";
import { cloneJson, dirToYawPitch, makePaintId } from "./helpers.js";

export function createPointerInput(deps) {
  const {
    canvas, dragFrames, editor, editorView, node, paintColorPop, readOnly, runtime, sceneV2, shotEditor, state,
    stateV2, timeline, type, viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let _segmentFrameLassoFill, _segmentFrameStroke, appendLassoPoint, appendPaintPoint, applyRasterObjectOffset,
    applyRasterObjectTransform, applySharedRollInteractionPoint, applyStrokeGroupOffset,
    applyStrokeGroupTransform, buildFreehandStrokeRecord, buildLassoFillStrokeRecord, cameraShoots,
    cancelFrameCameraGesture, cancelViewTransition, clearSelection, commitAndRefreshNode, commitPaintInteraction,
    commitState, currentSpaceCamera, cutoutCamera, dragFrame, editorViewInput, ensureGroupFrame, frameContext,
    frameLocalPointToWorldDir, frameSpaceView, frameTarget, getActiveCutoutShot, getActivePaintTargetDescriptor,
    getCutoutSelectableItems, getCutoutSelectableItemsForHit, getFrameViewLayout, getFrameViewRect, getList,
    getMultiSelectionGeom, getPaintingGroupList, getRasterObjectCenterUv, getRasterObjectList,
    getSelectableRasterObjectItems, getSelectableStrokeGroupItems, getSelected, getSelectedItems,
    getStrokeGroupCenterUv, getStrokeGroupStrokes, getUnwrapRect, handleHit, hideTooltip, hitObjectAt,
    invalidateLivePaintPreviewCaches, isCameraSelected, isFreeFrameView, isFreeSpaceView, isItemLocked,
    isRasterObjectItem, isSceneSticker, isShotItem, isSpaceView, isStickerItem, isStrokeGroupItem,
    markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty, objectGeom,
    paintingShown, parseRasterObjectSelectionId, playback, poseOf, pushHistory, rectFromPoints,
    rectIntersectsGeom, refreshPaintEngineRevisionCache, requestDraw, screenPos, screenPosCss,
    screenPosToErpPoint, screenPosToFrameAsErpPoint, screenToWorldDir, selectWorldSticker, selectedWorldSticker,
    setPointerPos, setSelectedItem, setSelectedItems, setSpaceView, shortestWrappedDelta, spaceViewState,
    startAnimation, startCameraPress, startFrameDrag, startPanFrame, startSpaceDrag, stickerById, stopTimelinePlayback,
    supportsErpPainting, supportsFramePainting, syncCutoutShot, syncFloatingViewButtonState, syncFrameRollKnob,
    syncSidePanelControls, syncTimeline, syncViewToggleState, updateCursor, updateSelectionMenu, updateSidePanel,
    viewControls, writePose, zoomFrameAt, zoomFrameViewAt, zoomSpaceAt;

  // Where the pointer went down on the canvas, until its first move.
  let editPointerDown = null;

  // Looking around and selecting keep the Timeline playing. A paint stroke stops it at once; any
  // other edit stops it on its first move (restartEditAtStoppedFrame), so a click only selects.
  function onCanvasPointerDown(e) {
    if (timeline.selection) {
      timeline.selection = null;
      syncTimeline();
    }
    const p = screenPos(e);
    editPointerDown = p;
    setPointerPos(p, true);
    // Grabbing the view stops a transition where it shows, and the drag starts from there.
    cancelViewTransition();
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    // In 6DoF the drags of the 3D view controls move the view with any tool (pano_view_controls.js); the
    // middle and the right button do nothing else there.
    const freeSpace = isFreeSpaceView();
    const freeFrame = isFreeFrameView();
    const spaceAction = freeSpace || freeFrame ? viewDragAction(viewControls(), e) : null;
    if (freeFrame && spaceAction) {
      e.preventDefault();
      // Looking around turns the Camera where it stands, as a left drag in the Frame view does.
      if (spaceAction === "look") startPanFrame(p, e.pointerId);
      else startFrameDrag(spaceAction, p, e.pointerId);
      return;
    }
    if (spaceAction === "look") {
      e.preventDefault();
      const dragPos = screenPosCss(e);
      editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
      viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (spaceAction) {
      e.preventDefault();
      startSpaceDrag(spaceAction, p, e.pointerId);
      return;
    }
    if ((freeSpace || freeFrame) && e.button !== 0) {
      e.preventDefault();
      return;
    }
    if (e.button === 1) {
      e.preventDefault();
      if (editor.mode === "frame") {
        const shot = getActiveCutoutShot();
        if (!shot || readOnly || shot.locked === true) return;
        editor.interaction = {
          kind: "pan_frame",
          shot,
          last: p,
          start: {
            yaw_deg: Number(shot.yaw_deg || 0),
            pitch_deg: Number(shot.pitch_deg || 0),
          },
          changed: false,
        };
      } else {
        const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
        editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
        viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }
    if (e.button !== 0) return;
    if (editor.mode === "frame" && (e.altKey || e.shiftKey) && !readOnly) {
      const shot = getActiveCutoutShot();
      const rect = getFrameViewRect(shot);
      if (!shot || shot.locked === true || !rect) return;
      const rollGesture = beginCutoutRollGesture({
        frame: rect,
        point: p,
        startRollDeg: Number(shot.roll_deg ?? shot.rot_deg ?? 0),
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        allowAlt: true,
      });
      if (!rollGesture) return;
      editor.interaction = {
        kind: "roll_frame",
        shot,
        center: rollGesture.center,
        lastAngle: rollGesture.lastAngle,
        accumulatedRad: rollGesture.accumulatedRad,
        rollGesture,
        start: { roll_deg: Number(shot.roll_deg ?? shot.rot_deg ?? 0) },
        changed: false,
        altStarted: rollGesture.source === "alt",
        source: rollGesture.source,
      };
      canvas.setPointerCapture(e.pointerId);
      e.preventDefault();
      syncFrameRollKnob();
      requestDraw({ localOnly: true });
      return;
    }
    if (editor.mode === "frame" && editor.primaryTool === "cursor") {
      startPanFrame(p, e.pointerId);
      e.preventDefault();
      return;
    }
    if (readOnly) {
      if (editor.mode === "pano") startEmptyDrag(e, p);
      return;
    }
    if (paintColorPop && !paintColorPop.hidden) {
      return;
    }

    if ((editor.primaryTool === "paint" || editor.primaryTool === "mask") && (supportsErpPainting() || supportsFramePainting())) {
      // A hidden painting takes no strokes, as a hidden layer takes no paint in image editors.
      if (!paintingShown()) return;
      stopTimelinePlayback();
      const layerKind = editor.primaryTool === "mask" ? "mask" : "paint";
      const toolKind = editor.primaryTool === "mask" ? editor.maskTool : editor.paintTool;
      const activeShot = editor.mode === "frame" && supportsFramePainting() ? getActiveCutoutShot() : null;
      // Always use ERP_GLOBAL: frame-view strokes are converted to world-space ERP UV
      // via the frame's projection so they stay fixed in the panorama when the frame moves.
      const targetSpace = { kind: "ERP_GLOBAL" };
      const startPoint = activeShot
        ? screenPosToFrameAsErpPoint(p, activeShot, performance.now())
        : screenPosToErpPoint(p, performance.now());
      if (!startPoint) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: toolKind === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind,
        _livePreviewToken: makePaintId("live"),
        stroke: toolKind === "lasso_fill"
          ? buildLassoFillStrokeRecord(layerKind, toolKind, [startPoint], targetSpace)
          : buildFreehandStrokeRecord(layerKind, toolKind, [startPoint], targetSpace),
      };
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) {
        editor.paintEngine.beginStroke(editor.interaction.stroke, targetDescriptor);
        if (editor.interaction.kind === "paint_stroke") {
          // Seed the incremental renderer with the first point
          const engineTarget = editor.paintEngine.ensureTarget(targetDescriptor);
          const cx = Number(startPoint?.u ?? startPoint?.x ?? 0);
          const cy = Number(startPoint?.v ?? startPoint?.y ?? 0);
          editor.paintEngine.appendStrokePoint(engineTarget, cx, cy, editor.interaction.stroke);
        } else {
          // Lasso fill: use full-redraw path
          editor.paintEngine.updateActiveStroke(editor.interaction.stroke, targetDescriptor);
        }
      }
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw();
      return;
    }

    const selectedItems = getSelectedItems();
    const selected = getSelected();
    const selGeom = selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : (selected ? objectGeom(selected) : null);

    if (editor.primaryTool === "cursor" && (e.ctrlKey || e.metaKey)) {
      editor.interaction = { kind: "marquee_select", start: p, current: p };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
      return;
    }
    if (editor.primaryTool === "cursor" && cameraShoots() && isFreeSpaceView() && startCameraPress(e, p)) return;
    if (editor.primaryTool === "cursor" && sceneV2 && isSpaceView() && startWorldStickerPress(e, p)) return;

    if (selectedItems.length > 1 && selGeom?.visible) {
      const h = selectedItems.some((item) => isItemLocked(item)) ? { kind: "none" } : handleHit(selGeom, p);
      if (h.kind === "move") {
        editor.interaction = {
          kind: "move_multi",
          items: selectedItems.map((item) => item),
          offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
          startCenter: { x: selGeom.center.x, y: selGeom.center.y },
          stickerSnapshots: selectedItems
            .filter((item) => isStickerItem(item))
            .map((item) => ({
              id: String(item.id || ""),
              yaw_deg: Number(poseOf(item).yaw_deg || 0),
              pitch_deg: Number(poseOf(item).pitch_deg || 0),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
            })),
          strokeSnapshots: selectedItems
            .filter((item) => isStrokeGroupItem(item))
            .map((item) => ({
              id: String(item.actionGroupId || item.id || ""),
              layerKind: String(item.layerKind || "paint"),
              snapshot: cloneJson(getStrokeGroupStrokes(item.actionGroupId, item.layerKind)),
              frameSnapshot: cloneJson(ensureGroupFrame(item.actionGroupId, item.layerKind)),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getStrokeGroupCenterUv(item.actionGroupId, item.layerKind),
            })),
          rasterSnapshots: selectedItems
            .filter((item) => isRasterObjectItem(item))
            .map((item) => ({
              id: parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""),
              snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""))),
              center: (() => {
                const geom = objectGeom(item);
                return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
              })(),
              centerUv: getRasterObjectCenterUv(item),
            })),
        };
        updateCursor(p);
        canvas.setPointerCapture(e.pointerId);
        return;
      }
    } else if (selected && selGeom?.visible) {
      const h = isItemLocked(selected) ? { kind: "none" } : handleHit(selGeom, p, selected);
      if (h.kind === "scale") {
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "scale_stroke_group",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
            cursor: h.cursor,
          }
          : isRasterObjectItem(selected)
          ? {
            kind: "scale_raster_object",
            item: selected,
            center: selGeom.center,
            startDist: Math.max(1, Math.hypot(p.x - selGeom.center.x, p.y - selGeom.center.y)),
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
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
        return;
      }
      if (h.kind === "scale_x" || h.kind === "scale_y") {
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
        return;
      }
      if (h.kind === "rotate") {
        editor.interaction = isStrokeGroupItem(selected)
          ? {
            kind: "rotate_stroke_group",
            item: selected,
            center: selGeom.center,
            startAng: Math.atan2(p.y - selGeom.center.y, p.x - selGeom.center.x),
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
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
        return;
      }
      if (h.kind === "move") {
        if (isStrokeGroupItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_stroke_group",
            item: selected,
            startUv,
            snapshot: cloneJson(getStrokeGroupStrokes(selected.actionGroupId, selected.layerKind)),
            frameSnapshot: cloneJson(ensureGroupFrame(selected.actionGroupId, selected.layerKind)),
          };
          updateCursor(p);
          canvas.setPointerCapture(e.pointerId);
          return;
        }
        if (isRasterObjectItem(selected)) {
          const startUv = editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now());
          editor.interaction = {
            kind: "move_raster_object",
            item: selected,
            startUv,
            snapshot: cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(selected.rasterObjectId || selected.id || ""))),
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
        return;
      }
    }

    const hit = hitObjectAt(p);
    if (hit) {
      const isNewSelection = editor.selectedId !== hit.item.id;
      if (isNewSelection && editor.selectedId) {
        pushHistory();
        commitState();
      }
      setSelectedItem(hit.item);
      if (shotEditor && isNewSelection) editor.cutoutAspectOpen = false;
      if (isNewSelection) updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      if (isItemLocked(hit.item)) {
        updateCursor(p);
        return;
      }
      editor.interaction = {
        kind: isStrokeGroupItem(hit.item) ? "move_stroke_group" : (isRasterObjectItem(hit.item) ? "move_raster_object" : "move"),
        item: hit.item,
        offset: { x: p.x - hit.geom.center.x, y: p.y - hit.geom.center.y },
        startUv: (isStrokeGroupItem(hit.item) || isRasterObjectItem(hit.item))
          ? (editor.mode === "frame"
            ? (() => {
              const shot = getActiveCutoutShot();
              return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
            })()
            : screenPosToErpPoint(p, performance.now()))
          : null,
        snapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(getStrokeGroupStrokes(hit.item.actionGroupId, hit.item.layerKind))
          : (isRasterObjectItem(hit.item)
            ? cloneJson(getRasterObjectList().find((entry) => String(entry?.id || "") === parseRasterObjectSelectionId(hit.item.rasterObjectId || hit.item.id || "")))
            : null),
        frameSnapshot: isStrokeGroupItem(hit.item)
          ? cloneJson(ensureGroupFrame(hit.item.actionGroupId, hit.item.layerKind))
          : null,
      };
      updateCursor(p);
      canvas.setPointerCapture(e.pointerId);
      return;
    }

    const hadSelection = !!editor.selectedId;
    if (hadSelection) {
      pushHistory();
      commitState();
    }
    clearSelection();
    if (hadSelection) updateSidePanel();
    updateSelectionMenu();
    requestDraw();

    if (editor.mode === "pano") startEmptyDrag(e, p);
  }

  // The selected world Sticker's gizmo at canvas point p (pano_three_view.js gizmoPointer): "hover",
  // "down", "move" or "up".
  function worldGizmoPointer(phase, p) {
    return editorView.gizmoPointer(phase, currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
  }

  // A left press with the cursor tool in the space view (#72): on a handle of the selected world
  // Sticker's gizmo it grabs the handle; on a world Sticker (the nearest content under the pointer, by
  // pick) it selects it. A world Sticker is in front of the Sky, so it comes before the sky Stickers,
  // except for the scale and rotate handles of a selected sky Sticker. The `scene` content is not
  // selectable and leaves the press to the sky Stickers, as before. Dragging a world Sticker itself only
  // selects it; the gizmo moves it. Returns whether the press was taken.
  function startWorldStickerPress(e, p) {
    const gizmo = editorViewInput().space?.gizmo;
    if (gizmo && worldGizmoPointer("hover", p) !== null && worldGizmoPointer("down", p)) {
      editor.interaction = {
        kind: "world_gizmo",
        id: editor.worldSelectedId,
        mode: gizmo.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: gizmo.transform,
        base: evaluateSticker(selectedWorldSticker(), editor.frame),
        changed: false,
      };
      canvas.setPointerCapture(e.pointerId);
      updateCursor(p);
      return true;
    }
    // The handles of the canvas selection, as the press would find them below.
    const selectedItems = getSelectedItems();
    const selected = getSelected();
    const handle = selectedItems.length > 1
      ? (selectedItems.some((item) => isItemLocked(item)) ? "none" : handleHit(getMultiSelectionGeom(selectedItems), p).kind)
      : (selected && !isItemLocked(selected) ? handleHit(objectGeom(selected), p, selected).kind : "none");
    if (handle !== "none" && handle !== "move") return false;
    const id = editorView.pickSticker(currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
    if (stickerById(id)?.placement !== "world") return false;
    if (editor.worldSelectedId !== id) {
      if (editor.selectedId) {
        pushHistory();
        commitState();
      }
      selectWorldSticker(id);
      updateSidePanel();
      updateSelectionMenu();
      syncFloatingViewButtonState();
      requestDraw();
    }
    editor.interaction = { kind: "world_select" };
    canvas.setPointerCapture(e.pointerId);
    return true;
  }

  // The gizmo highlights the handle under the pointer, and the cursor shows it can be grabbed.
  function hoverWorldGizmo(p) {
    const shown = !!(editor.worldSelectedId || isCameraSelected()) && editor.primaryTool === "cursor" && isSpaceView() && !!editorViewInput().space?.gizmo;
    const axis = shown ? worldGizmoPointer("hover", p) : null;
    if (axis === editor.gizmoAxis) return;
    editor.gizmoAxis = axis;
    runtime.backgroundDirty = true;
    requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
  }

  // A gizmo drag of the selected world Sticker: the Lane of the gizmo's mode, by the recording rule.
  function dragWorldGizmo(it, p) {
    const moved = worldGizmoPointer("move", p);
    if (moved && it.camera) {
      // The Camera's Lane of the gizmo's mode, by the recording rule; the shot follows it.
      for (const [name, value] of Object.entries(gizmoDragLanes(it.mode, it.base, it.start, moved))) setLaneValue(state.camera, name, editor.frame, value);
      syncCutoutShot();
      it.changed = true;
      dragFrames.request("sidePanel");
      requestDraw({ localOnly: true });
      return;
    }
    const sticker = stickerById(it.id);
    if (!moved || !sticker) return;
    setWorldStickerTransform(sticker, editor.frame, gizmoDragLanes(it.mode, it.base, it.start, moved));
    it.changed = true;
    markObjectVisualsDirty();
    dragFrames.request("sidePanel");
    requestDraw({ localOnly: true });
  }

  // A press of startWorldStickerPress() ends: a gizmo drag that changed the Sticker is one Undo step.
  function endWorldStickerPress(ended) {
    editor.interaction = null;
    editor.gizmoAxis = null;
    if (ended.kind === "world_gizmo") {
      worldGizmoPointer("up", editor.pointerPos);
      runtime.backgroundDirty = true;
      if (ended.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    }
    updateCursor(editor.pointerPos);
    requestDraw();
  }

  // A left drag on empty space of the panorama view looks around; in 6DoF it does what the 3D view
  // controls preset does there (pano_view_controls.js emptyLeft), or nothing.
  function startEmptyDrag(e, p) {
    if (isFreeSpaceView()) {
      const action = viewControls().emptyLeft;
      if (action) startSpaceDrag(action, p, e.pointerId);
      return;
    }
    const dragPos = screenPosCss(e);
    editor.interaction = { kind: "view", last: dragPos, lastTs: performance.now() };
    viewController.startDrag(dragPos.x, dragPos.y, e.pointerId, performance.now());
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  // Playback ran on from the pointer going down to its first move. It stops here on the frame shown,
  // and a Sticker edit starts over from that frame's values, as if the pointer went down there.
  // Paint strokes and raster objects do not change over time and keep their start.
  function restartEditAtStoppedFrame(it, down) {
    if (!stateV2 || !playback.playing) return;
    playback.stop();
    if (it.kind === "frame_pan") return;
    if (it.kind === "frame_orbit") {
      // The Camera moved with playback: the point the orbit turns about is picked again from where it stopped.
      const context = frameContext();
      if (context) it.pivot = frameTarget(context, frameSpaceView(context), down);
      return;
    }
    if (it.kind === "world_gizmo") {
      const sticker = stickerById(it.id);
      if (it.camera) it.base = cutoutCamera();
      else if (sticker) it.base = evaluateSticker(sticker, editor.frame);
      return;
    }
    if (it.kind === "move_multi") {
      const geom = getMultiSelectionGeom(it.items);
      if (!geom?.visible) return;
      it.offset = { x: down.x - geom.center.x, y: down.y - geom.center.y };
      it.startCenter = { x: geom.center.x, y: geom.center.y };
      for (const snap of it.stickerSnapshots) {
        const item = it.items.find((entry) => String(entry?.id || "") === snap.id);
        const itemGeom = item ? objectGeom(item) : null;
        if (!itemGeom?.visible) continue;
        snap.yaw_deg = Number(poseOf(item).yaw_deg || 0);
        snap.pitch_deg = Number(poseOf(item).pitch_deg || 0);
        snap.center = { x: itemGeom.center.x, y: itemGeom.center.y };
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(it.kind)) return;
    const geom = objectGeom(it.item);
    if (!geom?.visible) return;
    const pose = poseOf(it.item);
    if (it.kind === "move") {
      it.offset = { x: down.x - geom.center.x, y: down.y - geom.center.y };
      return;
    }
    it.center = geom.center;
    if (it.kind === "rotate") {
      it.startRot = Number(pose.rot_deg || pose.roll_deg || 0);
      it.startAng = Math.atan2(down.y - geom.center.y, down.x - geom.center.x);
      return;
    }
    it.startDist = Math.max(1, Math.hypot(down.x - geom.center.x, down.y - geom.center.y));
    it.startHFOV = Number(pose.hFOV_deg || 20);
    it.startVFOV = Number(pose.vFOV_deg || 20);
  }

  function onCanvasPointerMove(e) {
    const p = screenPos(e);
    setPointerPos(p, true);
    if (!editor.interaction) {
      hoverWorldGizmo(p);
      updateCursor(p);
      return;
    }
    updateCursor(p);
    const it = editor.interaction;
    if (editPointerDown && (p.x !== editPointerDown.x || p.y !== editPointerDown.y)) {
      const down = editPointerDown;
      editPointerDown = null;
      if (!["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(it.kind)) restartEditAtStoppedFrame(it, down);
    }

    if (it.kind === "world_select") return;
    if (it.kind === "world_gizmo") {
      dragWorldGizmo(it, p);
      return;
    }

    if (it.kind === "paint_stroke") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          // Frame-boundary guard: segment the stroke on exit, restart on re-entry.
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return; // drop point — no artifact
            }
            if (it._outOfFrame) {
              // Re-entered: commit previous inside-frame segment, start fresh
              it._outOfFrame = false;
              _segmentFrameStroke(it);
            }
          }
        }
        // appendPaintPoint now calls appendStrokePoint internally (O(1) incremental rendering)
        if (appendPaintPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      return;
    }

    if (it.kind === "paint_lasso_fill") {
      const samples = typeof e.getCoalescedEvents === "function" ? e.getCoalescedEvents() : [e];
      let changed = false;
      samples.forEach((sample) => {
        const sp = screenPos(sample);
        if (editor.mode === "frame") {
          const shot = getActiveCutoutShot();
          const rect = shot ? getFrameViewRect(shot) : null;
          if (rect) {
            const fx = (sp.x - rect.x) / Math.max(1, rect.w);
            const fy = (sp.y - rect.y) / Math.max(1, rect.h);
            const inFrame = fx >= 0 && fx <= 1 && fy >= 0 && fy <= 1;
            if (!inFrame) {
              it._outOfFrame = true;
              return;
            }
            if (it._outOfFrame) {
              it._outOfFrame = false;
              _segmentFrameLassoFill(it);
            }
          }
        }
        if (appendLassoPoint(it, sp, performance.now())) changed = true;
      });
      if (changed) {
        const targetDescriptor = getActivePaintTargetDescriptor(it);
        if (targetDescriptor) editor.paintEngine.updateActiveStroke(it.stroke, targetDescriptor);
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "view") {
      const now = performance.now();
      const dragPos = editor.mode === "unwrap" ? p : screenPosCss(e);
      viewController.moveDrag(dragPos.x, dragPos.y, editor.mode === "unwrap" ? "unwrap" : "pano", now);
      it.lastTs = now;
      it.last = dragPos;
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
      return;
    }

    if (it.kind === "frame_pan" || it.kind === "frame_orbit") {
      dragFrame(it, p);
      return;
    }

    if (it.kind === "space_pan" || it.kind === "space_orbit") {
      const view = spaceViewState();
      setSpaceView(it.kind === "space_pan"
        ? panView(view, p.x - it.last.x, p.y - it.last.y, canvas.width, canvas.height, it.depth)
        : orbitView(view, p.x - it.last.x, p.y - it.last.y, canvas.height, it.pivot));
      it.last = p;
      return;
    }

    if (it.kind === "pan_frame") {
      const layout = getFrameViewLayout(it.shot);
      if (!layout || !it.shot) return;
      const dx = p.x - it.last.x;
      const dy = p.y - it.last.y;
      const nextShot = panCutoutShotByScreenDelta(it.shot, {
        dx,
        dy,
        focalPx: layout.focalPx,
        invertX: state.ui_settings?.invert_view_x === true,
        invertY: state.ui_settings?.invert_view_y === true,
      });
      it.shot.yaw_deg = nextShot.yaw_deg;
      it.shot.pitch_deg = nextShot.pitch_deg;
      it.changed = it.changed || Math.abs(dx) > 0 || Math.abs(dy) > 0;
      it.last = p;
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "roll_frame") {
      if (it.source === "knob") return;
      applySharedRollInteractionPoint(it, p, e);
      return;
    }

    if (it.kind === "move") {
      const tx = p.x - it.offset.x;
      const ty = p.y - it.offset.y;
      if (editor.mode === "frame" && shotEditor) {
        const shot = getActiveCutoutShot();
        const rect = getFrameViewRect(shot);
        if (!shot || !rect) return;
        const framePoint = {
          x: clamp((tx - rect.x) / Math.max(1, rect.w), 0, 1),
          y: clamp((ty - rect.y) / Math.max(1, rect.h), 0, 1),
        };
        const dir = frameLocalPointToWorldDir(shot, framePoint);
        if (!dir) return;
        const yp = dirToYawPitch(dir);
        writePose(it.item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
      } else if (editor.mode === "unwrap") {
        const r = getUnwrapRect();
        const nx = clamp((tx - r.x) / Math.max(r.w, 1), 0, 1);
        const ny = clamp((ty - r.y) / Math.max(r.h, 1), 0, 1);
        writePose(it.item, { yaw_deg: wrapYaw(nx * 360 - 180), pitch_deg: clamp(90 - ny * 180, -90, 90) });
      } else {
        const dir = screenToWorldDir(tx, ty);
        const yp = dirToYawPitch(dir);
        writePose(it.item, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
      }
      if (isStickerItem(it.item)) {
        markObjectVisualsDirty();
      }
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "move_stroke_group") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyStrokeGroupOffset(it.item?.actionGroupId, du, dv, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "move_raster_object") {
      const currentUv = editor.mode === "frame"
        ? (() => {
          const shot = getActiveCutoutShot();
          return shot ? screenPosToFrameAsErpPoint(p, shot, performance.now()) : null;
        })()
        : screenPosToErpPoint(p, performance.now());
      if (!currentUv || !it.startUv) return;
      const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(it.startUv.u || 0));
      const dv = Number(currentUv.v || 0) - Number(it.startUv.v || 0);
      if (applyRasterObjectOffset(it.item?.rasterObjectId || it.item?.id || "", du, dv, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "scale_raster_object") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyRasterObjectTransform(it.item?.rasterObjectId || it.item?.id || "", ratio, it.snapshot)) {
        markPaintCompositeVisualsDirty();
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "move_multi") {
      const tx = p.x - Number(it.offset?.x || 0);
      const ty = p.y - Number(it.offset?.y || 0);
      let changed = false;
      let paintStrokeChanged = false;
      let rasterChanged = false;
      const dx = tx - Number(it.startCenter?.x || tx);
      const dy = ty - Number(it.startCenter?.y || ty);
      for (const snap of (Array.isArray(it.stickerSnapshots) ? it.stickerSnapshots : [])) {
        const sticker = (type === "cutout" ? getCutoutSelectableItems() : getList()).find((entry) => String(entry?.id || "") === String(snap.id || ""));
        if (!sticker || !isStickerItem(sticker)) continue;
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        if (editor.mode === "frame" && shotEditor) {
          const shot = getActiveCutoutShot();
          const rect = getFrameViewRect(shot);
          if (!shot || !rect) continue;
          const framePoint = {
            x: clamp((targetScreen.x - rect.x) / Math.max(1, rect.w), 0, 1),
            y: clamp((targetScreen.y - rect.y) / Math.max(1, rect.h), 0, 1),
          };
          const dir = frameLocalPointToWorldDir(shot, framePoint);
          if (!dir) continue;
          const yp = dirToYawPitch(dir);
          writePose(sticker, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
        } else if (editor.mode === "unwrap") {
          const r = getUnwrapRect();
          const nx = clamp((targetScreen.x - r.x) / Math.max(r.w, 1), 0, 1);
          const ny = clamp((targetScreen.y - r.y) / Math.max(r.h, 1), 0, 1);
          writePose(sticker, { yaw_deg: wrapYaw(nx * 360 - 180), pitch_deg: clamp(90 - ny * 180, -90, 90) });
        } else {
          const dir = screenToWorldDir(targetScreen.x, targetScreen.y);
          const yp = dirToYawPitch(dir);
          writePose(sticker, { yaw_deg: yp.yaw, pitch_deg: yp.pitch });
        }
        changed = true;
      }
      for (const snap of (Array.isArray(it.strokeSnapshots) ? it.strokeSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForGroup = snap.centerUv || null;
        if (currentUv && startUvForGroup) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForGroup.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForGroup.v || 0);
          if (applyStrokeGroupOffset(snap.id, du, dv, snap.snapshot, snap.layerKind, snap.frameSnapshot)) {
            changed = true;
            paintStrokeChanged = true;
          }
        }
      }
      for (const snap of (Array.isArray(it.rasterSnapshots) ? it.rasterSnapshots : [])) {
        const targetScreen = {
          x: Number(snap.center?.x || 0) + dx,
          y: Number(snap.center?.y || 0) + dy,
        };
        const currentUv = editor.mode === "frame"
          ? (() => {
            const shot = getActiveCutoutShot();
            return shot ? screenPosToFrameAsErpPoint(targetScreen, shot, performance.now()) : null;
          })()
          : screenPosToErpPoint(targetScreen, performance.now());
        const startUvForObject = snap.centerUv || null;
        if (currentUv && startUvForObject) {
          const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForObject.u || 0));
          const dv = Number(currentUv.v || 0) - Number(startUvForObject.v || 0);
          if (applyRasterObjectOffset(snap.id, du, dv, snap.snapshot)) {
            changed = true;
            rasterChanged = true;
          }
        }
      }
      if (changed) {
        if (paintStrokeChanged) {
          markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        } else if (rasterChanged) {
          markPaintCompositeVisualsDirty();
        } else {
          markObjectVisualsDirty();
        }
        requestDraw({ localOnly: true });
      }
      return;
    }

    if (it.kind === "scale_stroke_group") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / Math.max(1, Number(it.startDist || 1));
      if (applyStrokeGroupTransform(it.item?.actionGroupId, ratio, 0, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "rotate_stroke_group") {
      let delta = (Math.atan2(p.y - it.center.y, p.x - it.center.x) - Number(it.startAng || 0)) * RAD2DEG;
      if (e.shiftKey) delta = Math.round(delta / 45) * 45;
      if (applyStrokeGroupTransform(it.item?.actionGroupId, 1, delta, it.snapshot, it.item?.layerKind, it.frameSnapshot)) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
        requestDraw({ localOnly: true, reason: DRAW_REASON.PAINT });
      }
      return;
    }

    if (it.kind === "marquee_select") {
      it.current = p;
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
      return;
    }

    if (it.kind === "scale") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179), vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_x") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { hFOV_deg: clamp(it.startHFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "scale_y") {
      const d = Math.max(1, Math.hypot(p.x - it.center.x, p.y - it.center.y));
      const ratio = d / it.startDist;
      writePose(it.item, { vFOV_deg: clamp(it.startVFOV * ratio, 1, 179) });
      if (!isSceneSticker(it.item)) it.item.aspect_id = deriveCutoutAspectLabelFromFov(it.item);
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
      return;
    }

    if (it.kind === "rotate") {
      const a = Math.atan2(p.y - it.center.y, p.x - it.center.x);
      let delta = (a - it.startAng) * RAD2DEG;
      let out = it.startRot - delta;
      if (e.shiftKey) out = Math.round(out / 45) * 45;
      writePose(it.item, { [isStickerItem(it.item) ? "rot_deg" : "roll_deg"]: out });
      if (isStickerItem(it.item)) markObjectVisualsDirty();
      requestDraw({ localOnly: true });
    }
  }

  function onCanvasPointerUp() {
    const ended = editor.interaction;
    if (ended?.kind === "roll_frame" && ended.source === "knob") return;
    if (ended?.kind === "space_pan" || ended?.kind === "space_orbit") {
      editor.interaction = null;
      updateCursor(editor.pointerPos);
      updateSelectionMenu();
      return;
    }
    if (ended?.kind === "world_select" || ended?.kind === "world_gizmo") {
      endWorldStickerPress(ended);
      return;
    }
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const didCommit = commitPaintInteraction(editor.interaction);
      // _hasCommittedSegments: set when frame boundary segmented a stroke mid-drag.
      // Even if the final segment is empty (pointer ended outside frame), we still need
      // to push history for the previously committed inside-frame segments.
      const hadSegments = Boolean(editor.interaction._hasCommittedSegments);
      if (didCommit || hadSegments) {
        markPaintStrokeVisualsDirty();
        // Invalidate the persistent frame so objectGeom() recomputes bbox on next select.
        const committedGroupId = String(editor.interaction.stroke?.actionGroupId || "").trim();
        if (committedGroupId) {
          const grpEntry = getPaintingGroupList().find((g) => String(g?.actionGroupId || "") === committedGroupId);
          if (grpEntry) grpEntry.frame = null;
        }
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) {
          if (!didCommit) {
            // Final segment was empty (stroke ended outside frame); cancel engine stroke.
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
          } else if (String(editor.interaction.stroke?.toolKind || "") === "eraser") {
            editor.paintEngine.cancelActiveStroke(targetDescriptor);
            refreshPaintEngineRevisionCache();
          } else {
            editor.paintEngine.commitActiveStroke(editor.interaction.stroke, targetDescriptor);
          }
        }
        pushHistory();
        commitState();
        updateSidePanel();
        updateSelectionMenu();
        node.setDirtyCanvas(true, true);
        requestDraw();
      } else {
        const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
        if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
      }
    } else if (editor.interaction?.kind === "marquee_select") {
      const rect = rectFromPoints(editor.interaction.start, editor.interaction.current);
      const pool = [
        ...(type === "cutout"
          ? getCutoutSelectableItemsForHit().filter((item) => !isShotItem(item))
          : [...getList()]),
        ...getSelectableStrokeGroupItems(),
        ...getSelectableRasterObjectItems(),
      ];
      const hits = pool.filter((item) => rectIntersectsGeom(rect, objectGeom(item)));
      setSelectedItems(hits, hits[hits.length - 1]?.id || null);
      if (shotEditor && hits.length) editor.cutoutAspectOpen = false;
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
    } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes(editor.interaction?.kind)) {
      if (editor.interaction.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    } else if (editor.interaction && editor.interaction.kind !== "view") {
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
    editor.interaction = null;
    if (ended?.kind === "roll_frame") hideTooltip();
    invalidateLivePaintPreviewCaches();
    if (ended && ended.kind === "view") {
      startAnimation(() => viewController.endDrag(performance.now()));
    }
    syncViewToggleState();
    updateSelectionMenu();
    updateCursor(editor.pointerPos);
    requestDraw();
  }

  function onCanvasPointerCancel() {
    if (cancelFrameCameraGesture()) return;
    if (editor.interaction?.kind === "world_select" || editor.interaction?.kind === "world_gizmo") {
      endWorldStickerPress(editor.interaction);
      return;
    }
    if (editor.interaction?.kind === "view") {
      startAnimation(() => viewController.endDrag(performance.now()));
    }
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      invalidateLivePaintPreviewCaches();
      const targetDescriptor = getActivePaintTargetDescriptor(editor.interaction);
      if (targetDescriptor) editor.paintEngine.cancelActiveStroke(targetDescriptor);
    }
    editor.interaction = null;
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateCursor(editor.pointerPos);
    requestDraw({ localOnly: true });
  }

  function onCanvasMouseMove(e) {
    const p = screenPos(e);
    const pointerChanged = setPointerPos(p, true);
    if (editor.interaction) return;
    updateCursor(p);
    if (pointerChanged && editor.mode === "frame" && editor.primaryTool === "cursor") {
      requestDraw({ localOnly: true, reason: DRAW_REASON.OVERLAY });
    }
  }

  function onCanvasWheel(e) {
    if (editor.mode === "frame") {
      const p = screenPos(e);
      const direction = readWheelDirection(e);
      // Edits stop Panorama Studio's playback, so the wheel keys the frame shown.
      if (direction) stopTimelinePlayback();
      // With World content the wheel moves the Camera toward the point under the pointer, as in 6DoF.
      if (direction && isFreeFrameView()) zoomFrameAt(p, -direction);
      else if (direction && zoomFrameViewAt(p, direction)) requestDraw({ localOnly: true });
      e.preventDefault();
      return;
    }
    if (editor.mode !== "pano") return;
    cancelViewTransition();
    if (isFreeSpaceView()) {
      const direction = readWheelDirection(e);
      // The wheel zooms the panorama view in (direction < 0); in space it moves toward the point under
      // the pointer the same way.
      if (direction) zoomSpaceAt(screenPos(e), -direction);
    } else if (viewController.applyWheelEvent(e)) {
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
    }
    e.preventDefault();
  }

  return {
    connect(api) {
      ({
        _segmentFrameLassoFill, _segmentFrameStroke, appendLassoPoint, appendPaintPoint, applyRasterObjectOffset,
        applyRasterObjectTransform, applySharedRollInteractionPoint, applyStrokeGroupOffset,
        applyStrokeGroupTransform, buildFreehandStrokeRecord, buildLassoFillStrokeRecord, cameraShoots,
        cancelFrameCameraGesture, cancelViewTransition, clearSelection, commitAndRefreshNode, commitPaintInteraction,
        commitState, currentSpaceCamera, cutoutCamera, dragFrame, editorViewInput, ensureGroupFrame, frameContext,
        frameLocalPointToWorldDir, frameSpaceView, frameTarget, getActiveCutoutShot, getActivePaintTargetDescriptor,
        getCutoutSelectableItems, getCutoutSelectableItemsForHit, getFrameViewLayout, getFrameViewRect, getList,
        getMultiSelectionGeom, getPaintingGroupList, getRasterObjectCenterUv, getRasterObjectList,
        getSelectableRasterObjectItems, getSelectableStrokeGroupItems, getSelected, getSelectedItems,
        getStrokeGroupCenterUv, getStrokeGroupStrokes, getUnwrapRect, handleHit, hideTooltip, hitObjectAt,
        invalidateLivePaintPreviewCaches, isCameraSelected, isFreeFrameView, isFreeSpaceView, isItemLocked,
        isRasterObjectItem, isSceneSticker, isShotItem, isSpaceView, isStickerItem, isStrokeGroupItem,
        markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty, objectGeom,
        paintingShown, parseRasterObjectSelectionId, playback, poseOf, pushHistory, rectFromPoints,
        rectIntersectsGeom, refreshPaintEngineRevisionCache, requestDraw, screenPos, screenPosCss,
        screenPosToErpPoint, screenPosToFrameAsErpPoint, screenToWorldDir, selectWorldSticker, selectedWorldSticker,
        setPointerPos, setSelectedItem, setSelectedItems, setSpaceView, shortestWrappedDelta, spaceViewState,
        startAnimation, startCameraPress, startFrameDrag, startPanFrame, startSpaceDrag, stickerById, stopTimelinePlayback,
        supportsErpPainting, supportsFramePainting, syncCutoutShot, syncFloatingViewButtonState, syncFrameRollKnob,
        syncSidePanelControls, syncTimeline, syncViewToggleState, updateCursor, updateSelectionMenu, updateSidePanel,
        viewControls, writePose, zoomFrameAt, zoomFrameViewAt, zoomSpaceAt,
      } = api);
    },
    onCanvasPointerDown, worldGizmoPointer, hoverWorldGizmo, onCanvasPointerMove, onCanvasPointerUp,
    onCanvasPointerCancel, onCanvasMouseMove, onCanvasWheel,
  };
}
