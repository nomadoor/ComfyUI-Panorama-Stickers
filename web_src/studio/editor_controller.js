// What the new UI's editor answers (editor.js openStudioEditor puts it together): the keys while it is open, Escape
// with no view drag to let go, and the controller StudioEditor.vue calls. `ctx` is the editor's context (editor.js).
import { markRaw } from "vue";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { createDropInput } from "./drop_input.js";
import { guardEditorKeys } from "./key_guard.js";
import { closeColor, painting as paintingTool } from "./paint_bar.js";
import { gizmoModeOfKey, selectedKind } from "./selection_bar.js";
import { editorKeyAction } from "./shortcuts.js";
import { createStage } from "./stage.js";
import { outputView } from "./stage_view.js";
import { writeLoopSetting } from "./timeline_actions.js";
import { openingView } from "./view_camera.js";

// The keys and the controller.
export function createEditorController(ctx) {
  // --- Keys while the editor is open: Undo / Redo, Delete, Space, 1 / 2 / 3, the table of shortcuts.js, the Keyframes'
  // copy, cut and paste. The stage takes the movement keys and Escape.
  function onKeyDown(event) {
    if (!ctx.rootElement || !stageOwnsKey(event, ctx.rootElement)) return;
    const action = editorKeyAction(event);
    if (!action || action === "escape") return;
    if (action === "copy-keys" || action === "cut-keys" || action === "paste-keys") {
      // Not taken, C and X keep the browser's copy of selected text; V never pastes (nothing outside a field takes it).
      if (!ctx.keyClipboardKey(action) && action !== "paste-keys") return;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (action.startsWith("gizmo:")) {
      // The gizmo's Move, Rotate, Scale for the selected object that has them.
      const mode = action.slice("gizmo:".length);
      if (gizmoModeOfKey(selectedKind(ctx.session.state, ctx.session.selection.row, ctx.view.upstreamWorking), event.key) !== mode) return;
      event.preventDefault();
      event.stopPropagation();
      ctx.setGizmoMode(mode);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (action === "undo") ctx.historyStep(-1);
    else if (action === "redo") ctx.historyStep(1);
    else if (action === "delete") ctx.deleteSelection();
    else if (action === "play") ctx.togglePlayback();
    else if (action === "shortcuts") ctx.view.shortcuts = !ctx.view.shortcuts;
  }

  // Escape with no view drag to let go (docs/studio-ui.md "閉じ方"): Clear's question, the Sky / World choice, the list
  // of shortcuts, a painting tool, the Keyframe selection, then the object's, then the editor closes.
  function onEscape() {
    // Step 4: Clear's question is answered "Cancel".
    if (ctx.view.confirm) {
      ctx.answerClear(false);
      return;
    }
    // [add-drop] Step 5: the Sky / World choice closes, placing nothing.
    if (ctx.addFiles.escape()) return;
    // Step 6: the list of shortcuts closes.
    if (ctx.view.shortcuts) {
      ctx.view.shortcuts = false;
      return;
    }
    // Step 7: the Custom color's popover closes, then a painting tool goes back to Cursor.
    if (ctx.tools.colorStart) {
      closeColor(ctx.tools, true);
      ctx.syncTools();
      return;
    }
    if (paintingTool(ctx.tools)) {
      ctx.setTool("cursor");
      return;
    }
    if (ctx.session.escape()) ctx.sync();
    else ctx.close();
  }

  // --- What StudioEditor.vue calls.
  const controller = markRaw({
    onStage: ({ canvas, overlay = null, root }) => {
      ctx.rootElement = root;
      // No key or clipboard event of the editor reaches ComfyUI behind it (docs/studio-ui.md "キーとクリップボードを
      // ComfyUI に渡さない").
      ctx.releaseKeyGuard();
      ctx.releaseKeyGuard = guardEditorKeys(root);
      const output = outputView(ctx.session.state, 0);
      const opening = openingView({ memory: ctx.nodeSession.view, output, world: { ...ctx.world, boxes: ctx.content()?.boxes ?? [], content: null }, frameAvailable: false });
      ctx.stage = createStage({
        canvas,
        overlay,
        objects: {
          state: () => ctx.session.state,
          playhead: () => ctx.view.playhead,
          selection: () => ctx.session.selection.row,
          select: ctx.selectObject,
          edits: ctx.objectEdits,
          mode: () => ctx.view.gizmoMode,
          tab: () => ctx.view.tab,
          readOnly: () => ctx.readOnly,
          loading: ctx.reveal,
          rasterAlpha: (item, u, v) => ctx.paint.rasterAlpha(item, u, v),
          upstream: () => ctx.upstream.working(),
        },
        cameraTab: ctx.cameraTab,
        root,
        opening,
        world: ctx.world,
        background: ctx.stageBackground,
        content: ctx.content,
        selected: () => ctx.selectionOf(ctx.session.selection.row),
        ui: ctx.ui,
        onEscape,
        motion: ctx.reveal,
        paint: ctx.paintDeps,
      });
      // [add-drop] Files dragged over the stage's window.
      ctx.dropInput = createDropInput({ element: canvas.parentElement, canvas, root, add: ctx.addFiles, takes: () => !ctx.readOnly && ctx.view.tab === "3d" });
      return ctx.stage;
    },
    onTimeline: (api) => {
      ctx.timeline = api;
    },
    close: () => ctx.close(),
    inspectorEdit: ctx.inspectorEdit,
    timelineEdit: ctx.timelineEdit,
    select: (selection) => {
      ctx.session.select(selection);
      ctx.sync();
    },
    seek: (frame) => ctx.seek(frame),
    play: () => ctx.togglePlayback(),
    loop: (on) => {
      ctx.view.loop = !!on;
      writeLoopSetting(ctx.storage, ctx.view.loop);
    },
    frameSelected: (row) => ctx.stage?.frameSelected(ctx.selectionOf(row)),
    setTab: ctx.setTab,
    // The Camera tab's frame box moved or resized, and the canvas that shows the live ERP in it (null when it goes).
    frameRect: (rect) => {
      ctx.frameRect = rect;
      ctx.redraw(DRAW_REASON.RESIZE);
    },
    erpCanvas: (element) => {
      ctx.erpCanvas = element ?? null;
      ctx.redraw(DRAW_REASON.RESIZE);
    },
    // The Output window opened, folded or resized: its canvases ({ frame, erp }, null while folded).
    output: (canvases) => {
      ctx.outputCanvases = canvases && (canvases.frame || canvases.erp) ? canvases : null;
      ctx.redraw(DRAW_REASON.RESIZE);
    },
    bar: ctx.barPress,
    rail: (key) => {
      if (key === "undo") ctx.historyStep(-1);
      else if (key === "redo") ctx.historyStep(1);
      else if (key === "cursor" || key === "paint" || key === "mask") ctx.setTool(key);
      else if (key === "camera") ctx.cameraToView();
    },
    // The bar of a painting tool, and the answer to Clear's question.
    paint: ctx.paintEdit,
    confirm: ctx.answerClear,
    // [add-drop] The files picked with Add, and the Sky / World choice (StudioPlaceChoice.vue).
    addFiles: (files) => ctx.addFiles.pick(files),
    place: (placement) => ctx.addFiles.choose(placement),
    cancelPlace: () => ctx.addFiles.cancelChoice(),
    // The list of shortcuts opened or closed ("?", a press outside it).
    shortcuts: (open) => {
      ctx.view.shortcuts = !!open;
    },
  });

  return { rootElement: null, releaseKeyGuard: () => {}, onKeyDown, controller };
}
