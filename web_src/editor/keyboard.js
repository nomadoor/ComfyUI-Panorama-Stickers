// The editor's keys, listened to on the window while it is open: Escape, Delete, W A S D Q E kept from ComfyUI, the
// modifiers of the marquee and the tools, and Undo / Redo.
import { isMoveKey } from "../pano_view_keys.js";
import { isFormControl, isTextField, stageOwnsKey as keyIsStages } from "../pano_key_focus.js";

export function createKeyboard(deps) {
  const {
    editor, overlay, readOnly, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelLiveEdits, closeEditor, deleteSelected, getHistoryCapabilities, getSelected, restoreHistory,
    setFullscreenState, settleCanvasConfirm, syncFrameRollKnob, updateCursor;

  // Escape takes back one thing, the innermost: the confirm dialog (Cancel), a field being typed in (it
  // leaves the field), a pointer's edit under way (any gesture), full screen, and last the editor itself.
  function onEscClose(ev) {
    if (ev.key !== "Escape") return;
    if (uiState.confirmDialog.visible) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      settleCanvasConfirm(false);
      return;
    }
    const target = ev.composedPath()[0];
    if (overlay.contains(target) && isTextField(target)) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      target.blur?.();
      return;
    }
    if (cancelLiveEdits()) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      return;
    }
    if (editor.fullscreen && document.fullscreenElement === overlay) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      document.exitFullscreen?.().catch(() => { });
      return;
    }
    if (editor.fullscreen) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation?.();
      setFullscreenState(false);
      return;
    }
    ev.preventDefault();
    ev.stopPropagation();
    ev.stopImmediatePropagation?.();
    void closeEditor();
  }
  function onDeleteKey(ev) {
    const key = String(ev.key || "");
    const code = String(ev.code || "");
    const keyCode = Number(ev.keyCode || 0);
    const isDeleteKey = key === "Delete" || code === "Delete" || keyCode === 46;
    const isBackspaceKey = key === "Backspace" || code === "Backspace" || keyCode === 8;
    if (!isDeleteKey && !isBackspaceKey) return;
    // Unlike Undo, Delete removes what is selected, so no form control takes it to the stage: Backspace on a focused
    // slider or checkbox deletes nothing.
    if (!stageOwnsKey(ev) || isFormControl(ev.composedPath()[0])) return;
    const selected = getSelected();
    if (!selected) return;
    deleteSelected();
    ev.preventDefault();
    ev.stopPropagation();
  }
  // Whether a key is the stage's: focus on the stage or a button or slider of the editor, not in a field
  // being typed in, and no dialog over the editor (its confirm dialog, or another ComfyUI dialog on top).
  function stageOwnsKey(ev) {
    return keyIsStages(ev, overlay, { dialogOpen: uiState.confirmDialog.visible });
  }
  // W A S D Q E move nothing in this editor, but while the stage has the keys they are taken from ComfyUI (its W and
  // A open sidebars behind the editor) and the browser (Alt + D, E, F); Ctrl and Meta leave them to the browser and
  // the OS.
  function onMoveKeyDown(ev) {
    if (!isMoveKey(ev.code) || !stageOwnsKey(ev)) return;
    if (ev.ctrlKey || ev.metaKey) return;
    ev.preventDefault();
    ev.stopPropagation();
  }
  function onModifierKeyChange(ev) {
    const next = !!(ev.ctrlKey || ev.metaKey);
    const nextAlt = !!ev.altKey;
    if (editor.marqueeModifier === next && editor.altModifier === nextAlt) return;
    editor.marqueeModifier = next;
    editor.altModifier = nextAlt;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  }
  // Leaving the window cancels a pointer's edit under way: its pointerup may never come, and a hover afterwards
  // must not move anything.
  function onWindowBlur() {
    cancelLiveEdits();
    editor.marqueeModifier = false;
    editor.altModifier = false;
    syncFrameRollKnob();
    updateCursor(editor.pointerPos);
  }
  function onUndoRedoKey(ev) {
    if (readOnly) return;
    if (!ev.ctrlKey && !ev.metaKey) return;
    const key = String(ev.key || "").toLowerCase();
    const code = String(ev.code || "");
    if (key !== "z" && code !== "KeyZ") return;
    if (!stageOwnsKey(ev)) return;
    const { canUndo, canRedo } = getHistoryCapabilities();
    if ((ev.shiftKey && !canRedo) || (!ev.shiftKey && !canUndo)) return;
    restoreHistory(ev.shiftKey ? 1 : -1);
    ev.preventDefault();
    ev.stopPropagation();
  }

  return {
    connect(api) {
      ({
        cancelLiveEdits, closeEditor, deleteSelected, getHistoryCapabilities, getSelected, restoreHistory,
        setFullscreenState, settleCanvasConfirm, syncFrameRollKnob, updateCursor,
      } = api);
    },
    onEscClose, onDeleteKey, onMoveKeyDown, onModifierKeyChange, onWindowBlur, onUndoRedoKey,
  };
}
