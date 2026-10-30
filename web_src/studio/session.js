// The new editor's session (docs/studio-ui.md, docs/timeline-ui.md): the working state v2, the selection the Timeline
// and the inspector share, one Undo history for both, Delete and Escape in their orders, and the text the editor
// writes to the node's state_json. Pure: no DOM, no node; studio/editor.js puts it together with the node, the
// playback and the Vue shell.
//
// The working state is replaced, never changed in place, on every edit, so the shell's views (shallow reactive) see
// each change, and a state handed out before an edit (a Timeline drag's start, a gesture's base) stays as it was:
// the inspector's edits (inspector_actions.js, which change in place) are applied to a copy, the Timeline's
// (timeline_actions.js) are new states already.
//
// The selection is the Timeline's { row, keys } (timeline_model.js): `row` the selected object's row id ("camera" or a
// Sticker id), `keys` the selected Keyframes. The inspector reads it through inspectorSelection().
import { createEditorHistory, duplicateSceneSticker, editorStateWrite, restoredHistoryState, takeStickerId } from "../pano_editor_state.js";
import { rebaseSceneState } from "../pano_scene_state.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { applyInspectorEdit } from "./inspector_actions.js";
import { ROW_LANES } from "./inspector_model.js";
import { BACKGROUND_ROW, PAINTING_ROW } from "../pano_timeline.js";

const EMPTY_SELECTION = Object.freeze({ row: null, keys: [] });
const NO_KEY_ROWS = new Set([BACKGROUND_ROW, PAINTING_ROW]);

export const CAMERA_UNDELETABLE = "The camera can't be deleted";

// The selected Keyframes per owner and Lane: [{ owner, lane, frames }] in the order they were first selected, `lane`
// null for a closed row's pin (all the row's Lanes at its frame), `frames` sorted. An open row's Keyframes keep their
// Lanes apart, so an Easing edit changes only their own Lanes (docs/timeline-ui.md "行とポチ"). The background and the
// painting have no Easing and are left out.
export function keyframeGroups(selection) {
  const groups = new Map();
  for (const key of selection?.keys ?? []) {
    if (NO_KEY_ROWS.has(key.row)) continue;
    const lane = key.lane ?? null;
    const id = `${key.row}\u0000${lane ?? ""}`;
    if (!groups.has(id)) groups.set(id, { owner: key.row, lane, frames: new Set() });
    groups.get(id).frames.add(key.frame);
  }
  return [...groups.values()].map(({ owner, lane, frames }) => ({ owner, lane, frames: [...frames].sort((a, b) => a - b) }));
}

// The inspector's selection (inspector_model.js buildInspectorModel) for the Timeline's: the selected object, and the
// Easing panel's Keyframes (the first group's; the panel's edit reaches every group, applyInspector).
export function inspectorSelection(selection) {
  const row = selection?.row ?? null;
  return { ids: row ? [row] : [], keyframes: keyframeGroups(selection)[0] ?? null };
}

const result = (changed, extra = {}) => ({ changed, history: false, stopPlayback: false, ...extra });

// state: the working state v2 the editor opens on (loadSceneState's). readOnly: a read-only editor (no edits, nothing
// written).
export function createStudioSession({ state: opening, readOnly = false }) {
  let state = opening;
  let selection = EMPTY_SELECTION;
  // The state before the first live change of a gesture (a value box's or the Easing graph's drag, a Timeline drag),
  // which its cancel puts back; null between gestures.
  let gestureBase = null;
  const history = createEditorHistory(state);

  function record() {
    history.record(state);
    gestureBase = null;
  }

  // A selection whose object is gone lets it go; its Keyframes go with any change of the state's shape.
  function keepSelection(next = selection) {
    const row = next.row && (next.row === "camera" || state.stickers.some((item) => item.id === next.row)) ? next.row : null;
    selection = { row, keys: next.keys ?? [] };
  }

  function applyInspector(edit, context = {}) {
    if (readOnly) return result(false);
    if (edit.phase === "cancel") {
      if (gestureBase) state = gestureBase;
      gestureBase = null;
      return result(true, { cancel: true });
    }
    const draft = structuredClone(state);
    const easing = edit.type === "easing" || edit.type === "easing-reset";
    const groups = easing ? keyframeGroups(selection) : [];
    let outcome;
    if (easing && groups.length > 1) {
      // The panel's edit reaches every selected group's Keyframes (docs/timeline-ui.md "Easing").
      const outcomes = groups.map((keyframes) => applyInspectorEdit(draft, { ...edit, keyframes }, { ...context, readOnly }));
      outcome = outcomes.reduce((all, one) => ({ ...all, changed: all.changed || one.changed, history: all.history || one.history }), result(false));
    } else {
      outcome = applyInspectorEdit(draft, edit, { ...context, readOnly });
    }
    if (!outcome.changed) return outcome;
    if (!outcome.history && !gestureBase) gestureBase = state;
    state = draft;
    if (outcome.history) record();
    return outcome;
  }

  // An edit of <StudioTimeline> (its `edit` event).
  function applyTimeline(payload) {
    if (readOnly) return result(false, { fps: null });
    if (payload.kind === "fps") {
      const from = state.timeline.fps;
      const ground = state.ground;
      state = rebaseSceneState(state, payload.fps);
      if (ground !== undefined) state.ground = ground;
      selection = { row: selection.row, keys: [] };
      record();
      return result(true, { history: true, stopPlayback: true, fps: { from, to: state.timeline.fps } });
    }
    if (payload.kind !== "state") return result(false, { fps: null });
    const stopPlayback = payload.stopsPlayback !== false;
    if (payload.phase === "live") {
      if (!gestureBase) gestureBase = state;
      state = payload.state;
      if (payload.selection) selection = payload.selection;
      return result(true, { stopPlayback, fps: null });
    }
    state = payload.state;
    if (payload.phase === "cancel") {
      gestureBase = null;
      if (payload.selection) selection = payload.selection;
      return result(true, { stopPlayback, fps: null });
    }
    keepSelection(payload.selection ?? selection);
    record();
    return result(true, { history: true, stopPlayback, fps: null });
  }

  // Delete with no Keyframes selected (docs/timeline-ui.md "記録の規則": the Keyframes go first, <StudioTimeline>
  // handleDelete): the selected Sticker goes. The Camera cannot be deleted (docs/studio-ui.md "下の中央のバー").
  // A port Sticker and an upstream element are not deleted here yet.
  function deleteSelectedObject() {
    const { row } = selection;
    if (readOnly || !row) return { changed: false, notice: null };
    if (row === "camera") return { changed: false, notice: CAMERA_UNDELETABLE };
    const sticker = state.stickers.find((item) => item.id === row);
    if (!sticker || sticker.locked || sticker.source.kind === "port" || isUpstreamSticker(sticker)) return { changed: false, notice: null };
    state = { ...state, stickers: state.stickers.filter((item) => item !== sticker) };
    selection = EMPTY_SELECTION;
    record();
    return { changed: true, notice: null };
  }

  // --- The stage's edits of the selected object (docs/studio-ui.md "下の中央のバー", docs/editor-interaction.md
  // "`world` の Sticker の操作"): a drag on the stage (the gizmo, a sky image's handles) and the bar's buttons.

  // A drag's change: apply(draft) changes a copy of the state the drag started from (each move starts again from it,
  // so a move writes where the pointer is, not on top of the move before) and returns whether it changed anything.
  // The first change keeps that start, which cancelGesture() puts back.
  function gesture(apply) {
    if (readOnly) return result(false);
    const base = gestureBase ?? state;
    const draft = structuredClone(base);
    if (!apply(draft)) return result(false);
    gestureBase = base;
    state = draft;
    return result(true, { stopPlayback: true });
  }

  // A drag ends: what it changed is one Undo step; a drag that changed nothing writes none.
  function commitGesture() {
    if (!gestureBase) return result(false);
    record();
    return result(true, { history: true });
  }

  // A drag is given up (Escape, the window lost the focus): the state it started from comes back, with no step.
  function cancelGesture() {
    if (!gestureBase) return result(false);
    state = gestureBase;
    gestureBase = null;
    return result(true, { cancel: true });
  }

  const selectedSticker = () => state.stickers.find((item) => item.id === selection.row) ?? null;

  // An edit of the selected Sticker as one Undo step: edit(draft, sticker) changes the copy and returns whether it did.
  function editSelected(edit) {
    const sticker = selectedSticker();
    if (readOnly || !sticker || gestureBase) return result(false);
    const draft = structuredClone(state);
    const copy = draft.stickers.find((item) => item.id === sticker.id);
    if (!edit(draft, copy)) return result(false);
    state = draft;
    keepSelection();
    record();
    return result(true, { history: true });
  }

  // Lock: the selected Sticker's `locked` turns over (the Camera's waits for `camera.locked` in the loaders).
  function toggleLock() {
    return editSelected((draft, sticker) => {
      sticker.locked = !sticker.locked;
      return true;
    });
  }

  // Duplicate: a copy of the selected Sticker under a new id, selected. A sky image's copy is turned 8° to the right
  // and goes in front (pano_editor_state.js duplicateSceneSticker); a World object's copy stays where it is, for the
  // gizmo to move. Not for a port Sticker or an upstream element.
  function duplicateSelected() {
    let copyId = null;
    const outcome = editSelected((draft, sticker) => {
      if (sticker.source.kind === "port" || isUpstreamSticker(sticker)) return false;
      const id = takeStickerId(draft);
      const front = Math.max(0, ...draft.stickers.map((item) => Number(item.z_index || 0))) + 1;
      const copy = sticker.placement === "sky" ? duplicateSceneSticker(sticker, id, front) : { ...structuredClone(sticker), id };
      draft.stickers.push(copy);
      copyId = id;
      return true;
    });
    if (copyId) selection = { row: copyId, keys: [] };
    return outcome;
  }

  // Bring to front / Send to back (`where` "front" or "back"): the selected sky image's place among the sky images,
  // which are numbered again in their order.
  function orderSelected(where) {
    return editSelected((draft, sticker) => {
      if (sticker.placement !== "sky" || sticker.locked) return false;
      const sky = draft.stickers.filter((item) => item.placement === "sky").sort((a, b) => Number(a.z_index || 0) - Number(b.z_index || 0));
      const rest = sky.filter((item) => item !== sticker);
      const order = where === "front" ? [...rest, sticker] : [sticker, ...rest];
      const before = sky.map((item) => item.z_index);
      order.forEach((item, index) => {
        item.z_index = index;
      });
      return sky.some((item, index) => item.z_index !== before[index]);
    });
  }

  // Back to source: every row of the selected port Sticker or upstream element back to the input's or the upstream's
  // value (each row's reset of the inspector, inspector_actions.js), as one Undo step. `context` is the inspector's.
  function revertSelected(context = {}) {
    return editSelected((draft, sticker) => {
      if (sticker.locked || !(sticker.source.kind === "port" || isUpstreamSticker(sticker))) return false;
      let changed = false;
      for (const row of Object.keys(ROW_LANES[sticker.placement] ?? {})) {
        const outcome = applyInspectorEdit(draft, { type: "reset", target: { kind: "sticker", id: sticker.id }, row }, { ...context, readOnly });
        changed = outcome.changed || changed;
      }
      return changed;
    });
  }

  // Escape's steps 5 and 6 of docs/studio-ui.md "閉じ方": the Keyframe selection, then the object's. Returns what it
  // let go ("keys", "object"), or null when nothing is selected (the editor closes then).
  function escape() {
    if (selection.keys.length) {
      selection = { row: selection.row, keys: [] };
      return "keys";
    }
    if (selection.row) {
      selection = EMPTY_SELECTION;
      return "object";
    }
    return null;
  }

  // Undo (-1) or Redo (+1): { fps } ({ from, to } when the step changed the Timeline fps, else null), or null when
  // there is no step that way, or while a drag is under way (its live change is neither a step nor given up: the drag
  // ends with its own commit or cancel, which a step in between would undo or redo behind its back).
  function step(direction) {
    if (readOnly || gestureBase) return null;
    const snapshot = direction < 0 ? history.undo() : history.redo();
    if (!snapshot) return null;
    const from = state.timeline.fps;
    state = restoredHistoryState(state, snapshot).state;
    keepSelection({ row: selection.row, keys: [] });
    return { fps: state.timeline.fps === from ? null : { from, to: state.timeline.fps } };
  }

  return {
    get state() {
      return state;
    },
    get selection() {
      return selection;
    },
    get canUndo() {
      return !readOnly && history.length > 1 && history.index > 0;
    },
    get canRedo() {
      return !readOnly && history.length > 1 && history.index >= 0 && history.index < history.length - 1;
    },
    readOnly,
    select(next) {
      selection = { row: next?.row ?? null, keys: next?.keys ?? [] };
    },
    // The stage selects an object (null lets the selection go): the Keyframes selected stay with the same object only.
    selectObject(row) {
      const next = row && (row === "camera" || state.stickers.some((item) => item.id === row)) ? row : null;
      if (next === selection.row) return false;
      selection = { row: next, keys: [] };
      return true;
    },
    gesture,
    commitGesture,
    cancelGesture,
    toggleLock,
    duplicateSelected,
    orderSelected,
    revertSelected,
    applyInspector,
    applyTimeline,
    deleteSelectedObject,
    escape,
    undo: () => step(-1),
    redo: () => step(1),
    // The text to write to state_json over the widget's `current` text (pano_editor_state.js editorStateWrite: null
    // when `current` already means the state, its fps rebased included; a Scene id given on the first write), or null.
    stateText(node, current) {
      if (readOnly) return null;
      return editorStateWrite(node, state, String(current ?? ""), { rebased: true });
    },
  };
}
