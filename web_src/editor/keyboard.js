// The editor's keys, listened to on the window while it is open: Escape, Delete, Space for playback,
// W A S D Q E moving the 6DoF view and the Frame view's Camera, the modifiers of the marquee and the tools, and Undo / Redo.
import { createMoveKeys, isMoveKey } from "../pano_view_keys.js";
import { TEXT_INPUT_TYPES } from "./constants.js";

export function createKeyboard(deps) {
  const {
    editor, overlay, readOnly, stateV2, timeline, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let canKeyMove, cancelFrameCameraGesture, cancelViewTransition, closeEditor, deleteSelected,
    deleteSelectedKeyframes, deleteSelectedWorldSticker, endFrameKeyMove, getHistoryCapabilities, getSelected,
    restoreHistory, setFullscreenState, settleCanvasConfirm, startAnimation, syncFrameRollKnob, togglePlayback,
    updateCursor;

  // The movement keys held down (pano_view_keys.js); space.js moves the view by them each frame.
  const moveKeys = createMoveKeys();

  // Escape takes back one thing, the innermost: the confirm dialog (Cancel), a field being typed in (it
  // leaves the field), the Frame view's Camera gesture, full screen, and last the editor itself.
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
    // Unlike Undo, Delete removes what is selected, so no form control takes it to the stage: Backspace on a focused
    // slider or checkbox deletes nothing.
    if (!stageOwnsKey(ev) || isFormControl(ev.composedPath()[0])) return;
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
  // Whether a key is the stage's: focus on the stage or a button or slider of the editor, not in a field
  // being typed in, and no dialog over the editor (its confirm dialog, or another ComfyUI dialog on top).
  function stageOwnsKey(ev) {
    if (uiState.confirmDialog.visible) return false;
    const t = ev.composedPath()[0];
    if (t !== document.body && t !== document.documentElement && !overlay.contains(t)) return false;
    return !isTextField(t);
  }
  // Any input of the editor's form (a field, a slider, a checkbox).
  function isFormControl(t) {
    return (t?.tagName || "").toUpperCase() === "INPUT" || isTextField(t);
  }
  // A field being typed in: a text-like input, a textarea, a select or editable text (not a slider, a
  // checkbox or a button).
  function isTextField(t) {
    const tag = (t?.tagName || "").toUpperCase();
    if (tag === "INPUT") return TEXT_INPUT_TYPES.has(String(t.type || "text").toLowerCase());
    return tag === "TEXTAREA" || tag === "SELECT" || !!t?.isContentEditable;
  }
  // Space plays and stops the Timeline like its play button, also over a focused button or slider.
  // Space with Ctrl, Meta or Alt is left to the browser and the OS, and typing keeps its spaces.
  function spaceTogglesPlayback(ev) {
    if (ev.code !== "Space" || ev.ctrlKey || ev.metaKey || ev.altKey) return false;
    if (readOnly || !stateV2 || !uiState.timeline.visible) return false;
    return stageOwnsKey(ev);
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
  // W A S D Q E move the 6DoF view, and the Frame view's Camera, while held, with Shift faster and Alt
  // slower, whatever the pointer does (canKeyMove, space.js stepKeyMove). While the stage has the keys
  // they are taken from ComfyUI (its W and A open sidebars behind the editor) and the browser (Alt + D, E,
  // F) also where nothing moves (3DoF, Unwrap); Ctrl and Meta leave them to the browser and the OS.
  // Pressing one where it moves stops a view transition, as grabbing the view does.
  function onMoveKeyDown(ev) {
    moveKeys.modifiers(ev);
    if (!isMoveKey(ev.code)) return;
    // A held key repeating where the stage does not have the keys (focus gone to a field) lets go, so
    // typing there does not move the view.
    if (!stageOwnsKey(ev)) {
      releaseMoveKey(ev.code);
      return;
    }
    if (ev.ctrlKey || ev.metaKey) return;
    ev.preventDefault();
    ev.stopPropagation();
    if (!canKeyMove()) return;
    moveKeys.press(ev.code, ev.timeStamp);
    if (!ev.repeat) cancelViewTransition();
    startAnimation(() => {});
  }
  // A key let go is released wherever the focus has gone. macOS sends no keyup for a key let go while
  // Meta is down, so Meta going up lets every key go.
  function onMoveKeyUp(ev) {
    moveKeys.modifiers(ev);
    if (ev.key === "Meta") releaseMoveKeys();
    if (!releaseMoveKey(ev.code)) return;
    ev.preventDefault();
    ev.stopPropagation();
  }
  // The last key let go ends the move: the Frame view's Camera moved by it is one Undo step.
  function releaseMoveKey(code) {
    if (!moveKeys.release(code)) return false;
    if (!moveKeys.held) endFrameKeyMove();
    return true;
  }
  function releaseMoveKeys() {
    if (!moveKeys.held) return;
    moveKeys.releaseAll();
    endFrameKeyMove();
  }
  function onVisibilityChange() {
    if (document.hidden) releaseMoveKeys();
  }
  // Chromium sends no keyup while the context menu is open.
  function onContextMenu() {
    releaseMoveKeys();
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
    releaseMoveKeys();
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
        canKeyMove, cancelFrameCameraGesture, cancelViewTransition, closeEditor, deleteSelected,
        deleteSelectedKeyframes, deleteSelectedWorldSticker, endFrameKeyMove, getHistoryCapabilities, getSelected,
        restoreHistory, setFullscreenState, settleCanvasConfirm, startAnimation, syncFrameRollKnob, togglePlayback,
        updateCursor,
      } = api);
    },
    moveKeys, onEscClose, onDeleteKey, onSpaceKey, onSpaceKeyUp, onMoveKeyDown, onMoveKeyUp, onVisibilityChange,
    onContextMenu, onModifierKeyChange, onWindowBlur, onUndoRedoKey,
  };
}
