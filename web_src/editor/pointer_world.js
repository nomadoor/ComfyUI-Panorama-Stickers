// The pointer gestures on world Stickers in the space view: a press that grabs a handle of the selected
// world Sticker's gizmo ("world_gizmo") or selects a world Sticker ("world_select"), the gizmo's drag and
// hover, and their end. The Camera's gizmo press is camera.js startCameraPress; its drag and end are here.
import { setWorldStickerTransform } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import { gizmoDragLanes } from "../pano_space.js";
import { setLaneValue } from "../pano_timeline.js";

export function createPointerWorld(deps) {
  const { canvas, dragFrames, editor, editorView, runtime, state } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, commitState, currentSpaceCamera, editorViewInput, getMultiSelectionGeom, getSelected,
    getSelectedItems, handleHit, isCameraSelected, isItemLocked, isSpaceView, markObjectVisualsDirty, objectGeom,
    pushHistory, requestDraw, selectWorldSticker, selectedWorldSticker, stickerById, syncCutoutShot,
    syncFloatingViewButtonState, updateCursor, updateSelectionMenu, updateSidePanel;

  // The selected world Sticker's gizmo at canvas point p (pano_three_view.js gizmoPointer): "hover",
  // "down", "move" or "up".
  function worldGizmoPointer(phase, p) {
    return editorView.gizmoPointer(phase, currentSpaceCamera(), p.x, p.y, canvas.width, canvas.height);
  }

  // A left press with the cursor tool in the space view: on a handle of the selected world
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
      // Selecting is not an edit: the step prunes nothing.
      if (editor.selectedId) {
        pushHistory({ prune: false });
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

  // The gizmo lets go of the handle it holds (a gizmo drag's end, or its cancel in pointer_input.js).
  function releaseWorldGizmo() {
    editor.gizmoAxis = null;
    worldGizmoPointer("up", editor.pointerPos);
    runtime.backgroundDirty = true;
  }

  // A press of startWorldStickerPress() ends: a gizmo drag that changed the Sticker is one Undo step.
  function endWorldStickerPress(ended) {
    editor.interaction = null;
    editor.gizmoAxis = null;
    if (ended.kind === "world_gizmo") {
      releaseWorldGizmo();
      if (ended.changed) {
        pushHistory();
        commitAndRefreshNode();
        updateSidePanel();
      }
    }
    updateCursor(editor.pointerPos);
    requestDraw();
  }

  return {
    connect(api) {
      ({
        commitAndRefreshNode, commitState, currentSpaceCamera, editorViewInput, getMultiSelectionGeom, getSelected,
        getSelectedItems, handleHit, isCameraSelected, isItemLocked, isSpaceView, markObjectVisualsDirty, objectGeom,
        pushHistory, requestDraw, selectWorldSticker, selectedWorldSticker, stickerById, syncCutoutShot,
        syncFloatingViewButtonState, updateCursor, updateSelectionMenu, updateSidePanel,
      } = api);
    },
    worldGizmoPointer, startWorldStickerPress, hoverWorldGizmo, dragWorldGizmo, endWorldStickerPress, releaseWorldGizmo,
  };
}
