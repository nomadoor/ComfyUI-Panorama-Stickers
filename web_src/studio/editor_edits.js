// The new UI's editor's edits (editor.js openStudioEditor puts it together): the inspector's, the Timeline's, Undo and
// Redo, Delete and the Keyframes' clipboard, the stage's edits of the selected object and the bar at the bottom
// center, the Camera tab, and writing to the node (state_json, the paint layer on closing). `ctx` is the editor's
// context (editor.js).
import { executionIdMatches } from "../pano_comfy_media.js";
import { queuePendingStickerOperation } from "../pano_sticker_operations.js";
import { cameraShot } from "../pano_editor_state.js";
import { loadSceneState } from "../pano_scene_state.js";
import { needsPaintLayer, textWithPaintLayer, uploadPaintLayer } from "./paint_upload.js";
import { cameraOf, editableCamera, moveCameraPose } from "./camera_state.js";
import { LINE_TEXT } from "./notice_line.js";

// The edits and writing to the node.
export function createEditorEdits(ctx) {
  // --- Edits.

  // What the inspector's edits read (inspector_actions.js applyInspectorEdit's context), with the upstream working
  // copies an upstream object's edit changes (docs/studio-ui.md "上流の物の編集").
  const inspectorContext = () => ({ playhead: ctx.view.playhead, imageSizes: ctx.view.imageSizes, animations: ctx.view.animations, portSize: ctx.view.portSize, upstream: ctx.view.upstreamWorking, handoff: ctx.session.portHandoff });

  // [inputs] A result of this node while the editor is open: the port Sticker is shown with its Pose handoff
  // (docs/studio-ui.md "`port` の Sticker"; during a drag, once it ends). ComfyUI stores the output before this
  // listener runs (its own `executed` listener came first).
  const onExecuted = (event) => {
    if (ctx.closed || ctx.readOnly) return;
    const detail = event?.detail ?? {};
    if (!executionIdMatches(String(detail.display_node ?? detail.node ?? "").trim(), ctx.node.id)) return;
    if (ctx.session.setPortHandoff(ctx.currentHandoff())) ctx.sync();
  };
  ctx.api?.addEventListener?.("executed", onExecuted);

  function inspectorEdit(edit) {
    // A wheel run of the Camera tab's Frame view still waiting to be one Undo step is one first.
    ctx.stage?.settle();
    const outcome = ctx.session.applyInspector(edit, inspectorContext());
    if (outcome.stopPlayback) ctx.playback.stop();
    ctx.sync();
  }

  function timelineEdit(payload) {
    ctx.stage?.settle();
    const outcome = ctx.session.applyTimeline(payload);
    if (!outcome.changed) return;
    if (outcome.stopPlayback) ctx.playback.stop();
    // A new fps keeps the playhead's time in seconds.
    if (outcome.fps) ctx.playback.seek(Math.round(ctx.view.playhead * outcome.fps.to / outcome.fps.from));
    ctx.sync();
  }

  function historyStep(direction) {
    ctx.stage?.settle();
    // A stroke under way is given up first (docs/studio-ui.md "ペイントの道具").
    ctx.paint.cancel();
    const outcome = direction < 0 ? ctx.session.undo() : ctx.session.redo();
    if (!outcome) return;
    ctx.playback.stop();
    if (outcome.fps) ctx.playback.seek(Math.round(ctx.view.playhead * outcome.fps.to / outcome.fps.from));
    ctx.sync();
  }

  // Delete: the selected Keyframes first (<StudioTimeline> handleDelete), else the selected object.
  // The copied Keyframes (docs/timeline-ui.md "Keyframe のコピーと貼り付け"): the editor's own, kept while it is open.
  let keyClipboard = null;
  // The keys "copy-keys", "cut-keys" and "paste-keys" (shortcuts.js): returns whether the editor took the key.
  function keyClipboardKey(action) {
    if (action === "paste-keys") return !!keyClipboard && !!ctx.timeline?.pasteKeys(keyClipboard);
    const copied = ctx.timeline?.copyKeys() ?? null;
    if (!copied) return false;
    keyClipboard = copied;
    if (action === "cut-keys") ctx.timeline.handleDelete();
    return true;
  }
  function deleteSelection() {
    if (ctx.timeline?.handleDelete()) return;
    const outcome = ctx.session.deleteSelectedObject();
    if (outcome.notice) ctx.notice(outcome.notice);
    if (outcome.changed) {
      ctx.playback.stop();
      ctx.sync();
    }
  }

  // --- The stage's edits of the selected object and the bar at the bottom center (docs/studio-ui.md "下の中央のバー").

  // An outcome of the session's object edits: playback stops on a drag's first change, and the views follow.
  function objectOutcome(outcome) {
    if (!outcome.changed) return;
    if (outcome.stopPlayback || outcome.history) ctx.playback.stop();
    ctx.sync();
  }

  const objectEdits = {
    live: (apply, copy) => objectOutcome(ctx.session.gesture(apply, copy)),
    commit: () => objectOutcome(ctx.session.commitGesture()),
    cancel: () => objectOutcome(ctx.session.cancelGesture()),
  };

  // --- The Camera tab (docs/studio-ui.md "Camera タブ"): the Frame view's moves of the Camera, written to its Lanes by
  // the recording rule (camera_state.js moveCameraPose) as one drag of the session (one Undo step at its end).
  const cameraEdits = {
    live: (pose) => objectOutcome(ctx.session.gesture((draft) => {
      const camera = editableCamera(draft);
      if (camera.locked === true) return false;
      // A move back onto the start writes nothing, and the state is the start again (each move starts from it).
      moveCameraPose(camera, ctx.view.playhead, pose);
      return true;
    })),
    commit: () => objectOutcome(ctx.session.commitGesture()),
    cancel: () => objectOutcome(ctx.session.cancelGesture()),
  };
  // [inputs] An upstream background's bg_color while it stands in.
  const backgroundColor = () => parseInt(ctx.backgroundNow().color.replace("#", ""), 16) || 0;
  const cameraTab = {
    tab: () => ctx.view.tab,
    mode: () => (cameraOf(ctx.session.state).projection === "erp" ? "panorama" : "frame"),
    shot: () => cameraShot(cameraOf(ctx.session.state), ctx.view.playhead),
    erpRange: () => cameraOf(ctx.session.state).erp_range,
    frame: () => ctx.frameRect,
    erpCanvas: () => ctx.erpCanvas,
    movable: () => !ctx.readOnly && cameraOf(ctx.session.state).locked !== true,
    backgroundColor,
    output: () => ctx.outputCanvases,
    edits: cameraEdits,
  };

  // The left column's Camera button (docs/studio-ui.md "エディタの中の Camera"): the Camera to the 3D tab's view, as one
  // Undo step (Panorama mode switching to Frame). The view does not move. A move selects the Camera (session.js) and
  // says so at the top center with the viewfinder cue over the stage, since the Camera at the view is not drawn.
  function cameraToView() {
    if (ctx.view.tab !== "3d" || !ctx.stage) return;
    ctx.stage.settle();
    const outcome = ctx.session.cameraToView(ctx.stage.pose(), ctx.view.playhead);
    objectOutcome(outcome);
    if (!outcome.changed) return;
    ctx.doneNotice(LINE_TEXT.cameraMoved);
    ctx.ui.cameraCue += 1;
  }

  function setTab(tab) {
    if (tab !== "3d" && tab !== "camera") return;
    if (ctx.view.tab === tab) return;
    ctx.view.tab = tab;
    // [add-drop] The Sky / World choice is the 3D tab's: it closes with the tab.
    ctx.addFiles.cancelChoice();
    // The Camera tab does not paint: the tool goes back to Cursor.
    if (tab === "camera") ctx.setTool("cursor");
    ctx.redraw();
  }

  function selectObject(row) {
    if (ctx.session.selectObject(row)) ctx.sync();
  }

  function setGizmoMode(mode) {
    if (!mode || ctx.view.gizmoMode === mode) return;
    ctx.view.gizmoMode = mode;
    ctx.redraw();
  }

  function barPress(key) {
    if (key.startsWith("gizmo:")) setGizmoMode(key.slice("gizmo:".length));
    else if (key === "lock") objectOutcome(ctx.session.toggleLock());
    else if (key === "duplicate") objectOutcome(ctx.session.duplicateSelected());
    else if (key === "front" || key === "back") objectOutcome(ctx.session.orderSelected(key));
    else if (key === "revert") objectOutcome(ctx.session.revertSelected(inspectorContext()));
    else if (key === "delete") deleteSelection();
  }

  // --- Writing to the node.

  function save() {
    if (ctx.readOnly || !ctx.stateWidget) return false;
    const text = ctx.session.stateText(ctx.node, ctx.stateWidget.value);
    if (text === null) return false;
    ctx.stateWidget.value = text;
    ctx.stateWidget.callback?.(text);
    ctx.node.setDirtyCanvas?.(true, true);
    return true;
  }

  // The paint layer (docs/studio-ui.md "ペイントの道具"): on closing, the pixels the editor draws of its paint go to
  // ComfyUI's input as the old editor sends them, and `painting_layer` to state_json while its painting is still the one
  // closed with. A prompt queued meanwhile waits for it (pano_editor_extension.js queuePendingStickerOperation). Not
  // while a stroke is under way (closing gives it up first).
  function uploadPaintLayerOnClose() {
    const nodeId = String(ctx.node.id ?? "0");
    if (ctx.readOnly || !ctx.stateWidget || !ctx.api?.fetchApi || !needsPaintLayer(ctx.session.state, nodeId)) return;
    const painting = loadSceneState(String(ctx.stateWidget.value ?? "")).painting;
    const sources = ctx.paint.nodeLayer();
    queuePendingStickerOperation(ctx.node, `paint-layer:${nodeId}`, async () => {
      const layer = await uploadPaintLayer(ctx.api, { nodeId, painting, sources });
      const text = textWithPaintLayer(String(ctx.stateWidget.value ?? ""), painting, layer);
      if (text === null) return;
      ctx.stateWidget.value = text;
      ctx.stateWidget.callback?.(text);
      ctx.node.setDirtyCanvas?.(true, true);
    }).catch((error) => {
      console.error("[PanoramaPaintingLayerSync] close upload failed", error);
    });
  }

  // frameRect: the frame box the shell laid out (StudioCameraFrame.vue's rect, the stage's CSS px); erpCanvas: the canvas
  // in it that shows the live ERP; outputCanvases: the Output window's canvases while it is open ({ frame, erp }), else null.
  return { onExecuted, inspectorEdit, timelineEdit, historyStep, timeline: null, keyClipboardKey, deleteSelection, objectEdits, frameRect: null, erpCanvas: null, outputCanvases: null, cameraTab, cameraToView, setTab, selectObject, setGizmoMode, barPress, save, uploadPaintLayerOnClose };
}
