// The stage canvas's pointer and wheel: which gesture a press starts (look around, select, move, scale,
// rotate, paint, the Frame view's drags), and the dispatch of a move, a release and a cancel to the gesture
// under way (editor.interaction.kind). The gestures are in the pointer_*.js modules: pointer_view.js (looking
// around), pointer_frame.js (the Frame view's pan and roll of the shot), pointer_paint.js (strokes),
// pointer_marquee.js, pointer_transform.js (one item's move, scale and rotate) and pointer_multi_move.js.
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { readWheelDirection } from "../pano_wheel.js";

export function createPointerInput(deps) {
  const {
    canvas, editor, paintColorPop, readOnly, shotEditor, viewController,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelPaintStroke, cancelViewTransition, clearSelection, commitState, endFrameGesture, endLookDrag, endMarquee,
    endPaintStroke, endTransform, getMultiSelectionGeom, getSelected, getSelectedItems, handleHit, hideTooltip,
    hitObjectAt, invalidateLivePaintPreviewCaches, isItemLocked, moveLassoFill, moveLookDrag, moveMarquee, moveMulti,
    movePaintStroke, movePanFrame, moveRasterObject, moveRollFrame, moveStrokeGroup, moveItem, objectGeom,
    paintingShown, pushHistory, requestDraw, restoreGestureSnapshot, rotateItem, scaleItem, scaleRasterObject,
    scaleStrokeGroup, screenPos, screenPosCss, setPointerPos, setSelectedItem, startAxisScale, startEmptyDrag,
    startFrameRoll, startHitMove, startLookDrag, startMove, startMultiMove, startPaintStroke, startPanFrame,
    startRotate, startScale, supportsErpPainting, supportsFramePainting, syncViewToggleState, takeGestureSnapshot,
    updateCursor, updateSelectionMenu, updateSidePanel, wheelFrameView;

  // Where the pointer went down on the canvas, until its first move.
  let editPointerDown = null;
  // The pointer of the gesture under way: another pointer's events leave it alone.
  let gesturePointerId = null;

  // A pointer going down while a gesture is under way (a second finger or pen) is ignored. A gesture that starts keeps its start values (takeGestureSnapshot) for cancelGesture; a paint
  // stroke takes them only when the Frame view's edge commits a part of it (paint_input.js).
  function onCanvasPointerDown(e) {
    if (editor.interaction) return;
    startGesture(e);
    const it = editor.interaction;
    if (!it) return;
    gesturePointerId = e.pointerId;
    if (it.kind !== "paint_stroke" && it.kind !== "paint_lasso_fill") takeGestureSnapshot(it);
  }

  // Whether a pointer event is another pointer's than the gesture's under way.
  function otherPointer(e) {
    return !!editor.interaction && gesturePointerId !== null && e?.pointerId !== undefined && e.pointerId !== gesturePointerId;
  }

  // The checks go in this order, and the first that takes the press starts its gesture.
  function startGesture(e) {
    const p = screenPos(e);
    editPointerDown = p;
    setPointerPos(p, true);
    // Grabbing the view stops a transition where it shows, and the drag starts from there.
    cancelViewTransition();
    viewController.state.inertia.active = false;
    viewController.state.inertia.vx = 0;
    viewController.state.inertia.vy = 0;
    if (e.button === 1) {
      e.preventDefault();
      if (editor.mode === "frame") startPanFrame(p, e.pointerId);
      else startLookDrag(e, p, editor.mode === "unwrap" ? p : screenPosCss(e));
      return;
    }
    if (e.button !== 0) return;
    if (editor.mode === "frame" && (e.altKey || e.shiftKey) && !readOnly) {
      startFrameRoll(e, p);
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
      startPaintStroke(e, p);
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
    // A handle of the canvas selection: a multi-selection only moves, one item scales, rotates or moves.
    if (selectedItems.length > 1 && selGeom?.visible) {
      const h = selectedItems.some((item) => isItemLocked(item)) ? { kind: "none" } : handleHit(selGeom, p);
      if (h.kind === "move") {
        startMultiMove(e, p, selectedItems, selGeom);
        return;
      }
    } else if (selected && selGeom?.visible) {
      const h = isItemLocked(selected) ? { kind: "none" } : handleHit(selGeom, p, selected);
      if (h.kind === "scale") {
        startScale(e, p, selected, selGeom, h);
        return;
      }
      if (h.kind === "scale_x" || h.kind === "scale_y") {
        startAxisScale(e, p, selected, selGeom, h);
        return;
      }
      if (h.kind === "rotate") {
        startRotate(e, p, selected, selGeom);
        return;
      }
      if (h.kind === "move") {
        startMove(e, p, selected, selGeom);
        return;
      }
    }

    // A press on an item selects it (a new selection commits the old one, pruning nothing: it is not an
    // edit) and moves it, unless it is locked.
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
      startHitMove(e, p, hit);
      return;
    }

    // A press on empty space clears the selection (committing it) and looks around in the panorama view.
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

  function onCanvasPointerMove(e) {
    if (otherPointer(e)) return;
    const p = screenPos(e);
    setPointerPos(p, true);
    if (!editor.interaction) {
      updateCursor(p);
      return;
    }
    updateCursor(p);
    const it = editor.interaction;
    if (editPointerDown && (p.x !== editPointerDown.x || p.y !== editPointerDown.y)) {
      editPointerDown = null;
      // The pointer moved: an item edit that lets go is an Undo step (endTransform), a click is not.
      it.moved = true;
    }

    if (it.kind === "paint_stroke") {
      movePaintStroke(it, e);
      return;
    }
    if (it.kind === "paint_lasso_fill") {
      moveLassoFill(it, e);
      return;
    }
    if (it.kind === "view") {
      moveLookDrag(it, p, e);
      return;
    }
    if (it.kind === "pan_frame") {
      movePanFrame(it, p);
      return;
    }
    if (it.kind === "roll_frame") {
      moveRollFrame(it, p, e);
      return;
    }
    if (it.kind === "move") {
      moveItem(it, p);
      return;
    }
    if (it.kind === "move_stroke_group") {
      moveStrokeGroup(it, p);
      return;
    }
    if (it.kind === "move_raster_object") {
      moveRasterObject(it, p);
      return;
    }
    if (it.kind === "scale_raster_object") {
      scaleRasterObject(it, p);
      return;
    }
    if (it.kind === "move_multi") {
      moveMulti(it, p);
      return;
    }
    if (it.kind === "scale_stroke_group") {
      scaleStrokeGroup(it, p);
      return;
    }
    if (it.kind === "marquee_select") {
      moveMarquee(it, p);
      return;
    }
    if (it.kind === "scale" || it.kind === "scale_x" || it.kind === "scale_y") {
      scaleItem(it, p);
      return;
    }
    if (it.kind === "rotate") {
      rotateItem(it, p, e);
      return;
    }
  }

  function onCanvasPointerUp(e) {
    if (otherPointer(e)) return;
    const ended = editor.interaction;
    if (ended?.kind === "roll_frame" && ended.source === "knob") return;
    if (editor.interaction?.kind === "paint_stroke" || editor.interaction?.kind === "paint_lasso_fill") {
      endPaintStroke();
    } else if (editor.interaction?.kind === "marquee_select") {
      endMarquee();
    } else if (["pan_frame", "roll_frame"].includes(editor.interaction?.kind)) {
      endFrameGesture();
    } else if (editor.interaction && editor.interaction.kind !== "view") {
      endTransform();
    }
    editor.interaction = null;
    gesturePointerId = null;
    if (ended?.kind === "roll_frame") hideTooltip();
    invalidateLivePaintPreviewCaches();
    if (ended && ended.kind === "view") {
      endLookDrag();
    }
    syncViewToggleState();
    updateSelectionMenu();
    updateCursor(editor.pointerPos);
    requestDraw();
  }

  // The gesture's pointer went away without letting go: the browser took it (pointercancel), or it lost
  // the capture without a pointerup.
  function onCanvasPointerCancel(e) {
    if (otherPointer(e)) return;
    cancelGesture();
  }

  // Cancels the gesture under way (docs/editor-architecture.md「操作の取り消し」): its records go back to its
  // start values (restoreGestureSnapshot), with no Undo step and nothing written to state_json. A paint
  // stroke is discarded whole; the view stops where it is, without coasting. Returns whether one was
  // under way.
  function cancelGesture() {
    const it = editor.interaction;
    if (!it) return false;
    if (it.kind === "paint_stroke" || it.kind === "paint_lasso_fill") cancelPaintStroke();
    if (it.kind === "view") viewController.stopMotion();
    if (it.kind === "roll_frame") hideTooltip();
    editor.interaction = null;
    gesturePointerId = null;
    restoreGestureSnapshot(it);
    invalidateLivePaintPreviewCaches();
    syncViewToggleState();
    updateSidePanel();
    updateSelectionMenu();
    updateCursor(editor.pointerPos);
    requestDraw();
    return true;
  }

  // Cancels whatever edit a pointer has under way on the canvas (cancelGesture): before Undo, Delete and a run's
  // result, and when the window loses the focus or Escape is pressed. Returns whether one was under way.
  function cancelLiveEdits() {
    return cancelGesture();
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
      const direction = readWheelDirection(e);
      if (direction) wheelFrameView(screenPos(e), direction);
      e.preventDefault();
      return;
    }
    if (editor.mode !== "pano") return;
    cancelViewTransition();
    if (viewController.applyWheelEvent(e)) {
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
    }
    e.preventDefault();
  }

  return {
    connect(api) {
      ({
        cancelPaintStroke, cancelViewTransition, clearSelection, commitState, endFrameGesture, endLookDrag, endMarquee,
        endPaintStroke, endTransform, getMultiSelectionGeom, getSelected, getSelectedItems, handleHit, hideTooltip,
        hitObjectAt, invalidateLivePaintPreviewCaches, isItemLocked, moveLassoFill, moveLookDrag, moveMarquee, moveMulti,
        movePaintStroke, movePanFrame, moveRasterObject, moveRollFrame, moveStrokeGroup, moveItem, objectGeom,
        paintingShown, pushHistory, requestDraw, restoreGestureSnapshot, rotateItem, scaleItem, scaleRasterObject,
        scaleStrokeGroup, screenPos, screenPosCss, setPointerPos, setSelectedItem, startAxisScale, startEmptyDrag,
        startFrameRoll, startHitMove, startLookDrag, startMove, startMultiMove, startPaintStroke, startPanFrame,
        startRotate, startScale, supportsErpPainting, supportsFramePainting, syncViewToggleState, takeGestureSnapshot,
        updateCursor, updateSelectionMenu, updateSidePanel, wheelFrameView,
      } = api);
    },
    onCanvasPointerDown, onCanvasPointerMove, onCanvasPointerUp, onCanvasPointerCancel, onCanvasMouseMove,
    cancelGesture, cancelLiveEdits,
    onCanvasWheel,
  };
}
