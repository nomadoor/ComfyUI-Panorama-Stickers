// The editor's keys, listened to on the window while it is open: Escape, Delete, Space for playback,
// the modifiers of the marquee and the tools, and Undo / Redo.
import { TEXT_INPUT_TYPES } from "./constants.js";

export function createKeyboard(deps) {
  const {
    editor, overlay, readOnly, stateV2, timeline, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelFrameCameraGesture, closeEditor, deleteSelected, deleteSelectedKeyframes, deleteSelectedWorldSticker,
    getHistoryCapabilities, getSelected, restoreHistory, setFullscreenState, syncFrameRollKnob, togglePlayback,
    updateCursor;

  function onEscClose(ev) {
    if (ev.key !== "Escape") return;
    if (cancelFrameCameraGesture()) {
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
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    if (timeline.selection) {
      deleteSelectedKeyframes();
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    if (deleteSelectedWorldSticker()) {
      ev.preventDefault();
      ev.stopPropagation();
      return;
    }
    const selected = getSelected();
    if (!selected) return;
    deleteSelected();
    ev.preventDefault();
    ev.stopPropagation();
  }
  // Space plays and stops the Timeline like its play button, also over a focused button or slider.
  // Space with Ctrl, Meta or Alt is left to the browser and the OS, and typing keeps its spaces.
  // Focus outside the editor (another ComfyUI dialog on top) keeps Space for itself.
  function spaceTogglesPlayback(ev) {
    if (ev.code !== "Space" || ev.ctrlKey || ev.metaKey || ev.altKey) return false;
    if (readOnly || !stateV2 || !uiState.timeline.visible || uiState.confirmDialog.visible) return false;
    const t = ev.composedPath()[0];
    if (t !== document.body && t !== document.documentElement && !overlay.contains(t)) return false;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT") return !TEXT_INPUT_TYPES.has(String(t.type || "text").toLowerCase());
    return tag !== "TEXTAREA" && tag !== "SELECT" && !t?.isContentEditable;
  }
  function onSpaceKey(ev) {
    if (!spaceTogglesPlayback(ev)) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (!ev.repeat) togglePlayback();
  }
  // Firefox clicks a focused button on keyup, so the keyup is held back too.
  function onSpaceKeyUp(ev) {
    if (!spaceTogglesPlayback(ev)) return;
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
  function onWindowBlur() {
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
    const t = ev.target;
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT" || tag === "TEXTAREA" || t?.isContentEditable) return;
    const { canUndo, canRedo } = getHistoryCapabilities();
    if ((ev.shiftKey && !canRedo) || (!ev.shiftKey && !canUndo)) return;
    restoreHistory(ev.shiftKey ? 1 : -1);
    ev.preventDefault();
    ev.stopPropagation();
  }

  return {
    connect(api) {
      ({
        cancelFrameCameraGesture, closeEditor, deleteSelected, deleteSelectedKeyframes, deleteSelectedWorldSticker,
        getHistoryCapabilities, getSelected, restoreHistory, setFullscreenState, syncFrameRollKnob, togglePlayback,
        updateCursor,
      } = api);
    },
    onEscClose, onDeleteKey, onSpaceKey, onSpaceKeyUp, onModifierKeyChange, onWindowBlur, onUndoRedoKey,
  };
}
