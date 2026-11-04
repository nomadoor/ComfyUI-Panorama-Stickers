// The editor's Undo history: undo / redo of the old UI's editor. What a snapshot keeps and how many are kept is
// pano_editor_state.js's (HISTORY_LIMIT, historySnapshot, createEditorHistory), shared with the new UI.
import { restoredHistoryState } from "../pano_editor_state.js";

export { HISTORY_LIMIT, createEditorHistory, historySnapshot } from "../pano_editor_state.js";

// The id the editor of `type` selects from a state: the Stickers editor keeps the selected Sticker, the Cutout
// editor the selected shot.
export function savedSelectionId(type, state) {
  return (type === "stickers" ? state.active?.selected_sticker_id : state.active?.selected_shot_id) ?? null;
}

export function createHistory(deps) {
  const {
    editor, readOnly, runtime, state, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelLiveEdits, commitState, markObjectVisualsDirty, markPaintStrokeVisualsDirty, releaseHiddenSelection,
    requestDraw, syncPaintUi, syncUndoRedoButtons, updateSidePanel;

  function pushHistory() {
    if (readOnly) return;
    editor.historyController.record(state);
    syncUndoRedoButtons();
  }

  function restoreHistory(step) {
    if (readOnly) return;
    // An edit a pointer has under way is cancelled first, so it writes nothing into the restored state.
    cancelLiveEdits();
    const snapshot = step < 0 ? editor.historyController.undo() : editor.historyController.redo();
    syncUndoRedoButtons();
    if (!snapshot) return;
    const restored = restoredHistoryState(state, snapshot);
    Object.keys(state).forEach((k) => delete state[k]);
    Object.assign(state, restored.state);
    editor.selectedId = savedSelectionId(type, state);
    editor.selectedIds = editor.selectedId ? [editor.selectedId] : [];
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
    const historyLength = Number(editor.historyController?.length) || 0;
    const historyIndex = Number(editor.historyController?.index);
    return {
      canUndo: !readOnly && historyLength > 1 && historyIndex > 0,
      canRedo: !readOnly && historyLength > 1 && historyIndex >= 0 && historyIndex < historyLength - 1,
    };
  }

  return {
    connect(api) {
      ({
        cancelLiveEdits, commitState, markObjectVisualsDirty, markPaintStrokeVisualsDirty, releaseHiddenSelection,
        requestDraw, syncPaintUi, syncUndoRedoButtons, updateSidePanel,
      } = api);
    },
    pushHistory, restoreHistory, getHistoryCapabilities,
  };
}
