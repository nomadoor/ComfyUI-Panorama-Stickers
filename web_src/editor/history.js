// The editor's Undo history: what a snapshot keeps, how many are kept, and undo / redo.
import { makePanoEditorHistorySnapshot, restoredHistoryState } from "../pano_editor_state.js";
import { createHistoryController } from "../pano_paint_history.js";

// The steps an editor keeps. Each is the whole state as JSON, without its history and painting layer
// (makePanoEditorHistorySnapshot).
export const HISTORY_LIMIT = 80;

export function historySnapshot(state) {
  return JSON.stringify(makePanoEditorHistorySnapshot(state));
}

// The history of an editor opening on `state`, which is its first step.
export function createEditorHistory(state) {
  return createHistoryController(HISTORY_LIMIT, { version: 1, entries: [historySnapshot(state)], index: 0 });
}

// The id the editor of `type` selects from a state: the Stickers editor (and Panorama Studio) keeps the
// selected Sticker, the Cutout editor the selected shot.
export function savedSelectionId(type, state) {
  return (type === "stickers" ? state.active?.selected_sticker_id : state.active?.selected_shot_id) ?? null;
}

export function createHistory(deps) {
  const {
    editor, readOnly, runtime, state, stateV2, studio, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelLiveEdits, clearWorldSelection, commitState, getActiveCutoutShot, isUploadingSticker, markObjectVisualsDirty,
    markPaintStrokeVisualsDirty, playback, pruneUpstreamRecords, rebuildUpstreamWorking, releaseHiddenSelection,
    requestDraw, stopTimelinePlayback, storedEditorState, syncCutoutShot, syncPaintUi, syncPortHandoff,
    syncUndoRedoButtons, syncUpstreamEdits, updateSidePanel;

  // A step keeps the state as the node keeps it: the port Sticker shown with the Pose handoff is its stored
  // one (ADR 0030), shown again with the handoff of the moment when the step is restored, and the edits of the
  // upstream elements are in its `upstream` records, without the overrides of elements gone upstream. Only an
  // edit prunes them (docs/editor-interaction.md「上書きの掃除」): the `initial` step the editor adds as it opens,
  // and the step a selection change takes (`prune: false`), prune nothing, so opening, selecting and closing
  // write nothing.
  function pushHistory({ initial = false, prune = !initial } = {}) {
    // An Undo step ends the inspector's Lens curve edit (editor/side_panel_events.js).
    editor.lensCurveEdit = null;
    if (readOnly) return;
    syncCutoutShot();
    syncPortHandoff();
    syncUpstreamEdits();
    if (prune) pruneUpstreamRecords();
    // A Sticker still uploading has no file to restore; the snapshot waits for the upload, which pushes one.
    if (stateV2 && state.stickers.some(isUploadingSticker)) return;
    editor.historyController.commitActionGroup(historySnapshot(storedEditorState()));
    syncUndoRedoButtons();
  }

  function restoreHistory(step) {
    if (readOnly) return;
    // An edit a pointer has under way is cancelled first, so it writes nothing into the restored state.
    cancelLiveEdits();
    editor.lensCurveEdit = null;
    stopTimelinePlayback();
    const snapshot = step < 0 ? editor.historyController.undo() : editor.historyController.redo();
    syncUndoRedoButtons();
    if (!snapshot) return;
    const restored = restoredHistoryState(state, snapshot);
    const fps = state.timeline?.fps;
    const backgroundClip = JSON.stringify(state.background?.clip);
    Object.keys(state).forEach((k) => delete state[k]);
    Object.assign(state, restored.state);
    syncCutoutShot(false);
    syncPortHandoff({ restored: true });
    // The upstream working copies follow the restored overrides (ADR 0030), and edits are found from them.
    if (stateV2) rebuildUpstreamWorking();
    // Undoing an fps change keeps the playhead's time in seconds.
    if (stateV2 && state.timeline.fps !== fps) playback.seek(Math.round(editor.frame * state.timeline.fps / fps));
    // The background VIDEO shows the time its restored Clip range puts at the playhead.
    else if (stateV2 && JSON.stringify(state.background.clip) !== backgroundClip) playback.seek(editor.frame);
    editor.selectedId = savedSelectionId(type, state);
    // Panorama Studio's Camera stays selected while the restored state has it (#89).
    if (studio && !editor.selectedId && state.active.selected_shot_id) editor.selectedId = getActiveCutoutShot()?.id ?? null;
    editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
    if (editor.selectedId) clearWorldSelection();
    releaseHiddenSelection();
    runtime.backgroundDirty = true;
    if (restored.paintingChanged) markPaintStrokeVisualsDirty();
    else markObjectVisualsDirty();
    syncPaintUi();
    updateSidePanel();
    commitState();
    requestDraw({ cause: "cutout_frame" });
  }

  function getHistoryCapabilities() {
    const historyEntries = Array.isArray(editor.historyController?.entries) ? editor.historyController.entries : [];
    const historyIndex = Number(editor.historyController?.index);
    return {
      canUndo: !readOnly && historyEntries.length > 1 && historyIndex > 0,
      canRedo: !readOnly && historyEntries.length > 1 && historyIndex >= 0 && historyIndex < historyEntries.length - 1,
    };
  }

  return {
    connect(api) {
      ({
        cancelLiveEdits, clearWorldSelection, commitState, getActiveCutoutShot, isUploadingSticker, markObjectVisualsDirty,
        markPaintStrokeVisualsDirty, playback, pruneUpstreamRecords, rebuildUpstreamWorking, releaseHiddenSelection,
        requestDraw, stopTimelinePlayback, storedEditorState, syncCutoutShot, syncPaintUi, syncPortHandoff,
        syncUndoRedoButtons, syncUpstreamEdits, updateSidePanel,
      } = api);
    },
    pushHistory, restoreHistory, getHistoryCapabilities,
  };
}
