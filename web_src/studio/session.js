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
// The selection is the Timeline's { row, keys } (timeline_model.js): `row` the selected object's row id ("camera", a
// Sticker id, or a paint group's `paint_group:<actionGroupId>` / `raster:<id>`, pano_paint_objects.js paintObjectRow),
// `keys` the selected Keyframes. The inspector reads it through inspectorSelection().
import { createEditorHistory, duplicateSceneSticker, editorStateWrite, restoredHistoryState, takeStickerId } from "../pano_editor_state.js";
import { rebaseSceneState, stickerCounter } from "../pano_scene_state.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { deletePaintObjects, numberSkyOrder, paintObjectOf, paintObjectRow, restackSkyOrder, skyDisplayList } from "../pano_paint_objects.js";
import { syncPaintGroups } from "../pano_paint_strokes.js";
import { normalizePaintingState } from "../pano_paint_types.js";
import { cameraToView as moveCameraToView } from "./camera_ui.js";
import { defaultCamera } from "./defaults.js";
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

// The inspector's selection (inspector_model.js buildInspectorModel) for the Timeline's: the selected object (a paint
// group shows the Paint card), and the Easing panel's Keyframes (the first group's; the panel's edit reaches every
// group, applyInspector).
export function inspectorSelection(selection) {
  const row = selection?.row ?? null;
  const keyframes = keyframeGroups(selection)[0] ?? null;
  if (paintObjectRow(row)) return { ids: [], paint: true, keyframes };
  return { ids: row ? [row] : [], keyframes };
}

// Whether the row `row` names an object of `state`: the Camera, a Sticker, or a paint group (pano_paint_objects.js).
function rowInState(state, row) {
  return row === "camera" || state.stickers.some((item) => item.id === row) || !!paintObjectOf(state, row);
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
  // A placed object was settled while a gesture was under way: placing it is recorded when the gesture ends, even when
  // the gesture is given up.
  let settledInGesture = false;
  // The placed objects not settled yet (addPlaced, adoptPlaced): they have no Undo step, so a step taken back or
  // done again leaves them in (docs/studio-ui.md "Add とドロップの見せ方").
  const unsettled = new Set();
  const history = createEditorHistory(state);

  function record() {
    history.record(state);
    gestureBase = null;
    settledInGesture = false;
  }

  // A selection whose object is gone lets it go; its Keyframes go with any change of the state's shape.
  function keepSelection(next = selection) {
    const row = next.row && rowInState(state, next.row) ? next.row : null;
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
    const paint = paintObjectOf(state, row);
    if (paint) {
      if (paint.locked) return { changed: false, notice: null };
      const outcome = editPainting((draft) => {
        deletePaintObjects(draft.painting, paint.kind === "group" ? { groupIds: [paint.id] } : { rasterIds: [paint.id] });
        return true;
      });
      if (outcome.changed) selection = EMPTY_SELECTION;
      return { changed: outcome.changed, notice: null };
    }
    const sticker = state.stickers.find((item) => item.id === row);
    if (!sticker || sticker.locked || sticker.source.kind === "port" || isUpstreamSticker(sticker)) return { changed: false, notice: null };
    state = { ...state, stickers: state.stickers.filter((item) => item !== sticker) };
    unsettled.delete(sticker.id);
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
    if (settledInGesture) record();
    return result(true, { cancel: true });
  }

  // --- Add and the drop (docs/studio-ui.md "Add とドロップの見せ方", docs/editor-interaction.md "3D ファイルを置く流れ"):
  // a placed object goes into the state at once and is selected, with no Undo step; settlePlaced() then makes placing it
  // one step (its file has uploaded), or dropPlaced() takes it away again and leaves no step.

  // make(id, draft) returns the new Sticker under the id taken from the state's counter; `draft` is the state it goes
  // into (for the sky images' order). Returns the id, or null in a read-only editor.
  function addPlaced(make) {
    if (readOnly) return null;
    const draft = { ...state, stickers: [...state.stickers] };
    const id = takeStickerId(draft);
    draft.stickers.push(make(id, draft));
    state = draft;
    unsettled.add(id);
    selection = { row: id, keys: [] };
    return id;
  }

  // A placed object handed over from an editor of the node closed while it uploaded (add_files.js): `sticker` as that
  // editor left it goes in under its id (a new one when the id is taken here), not selected, with no Undo step, and is
  // settled or dropped as one placed here. Returns its id, or null in a read-only editor.
  function adoptPlaced(sticker) {
    if (readOnly) return null;
    const draft = { ...state, stickers: [...state.stickers] };
    let id = sticker.id;
    if (draft.stickers.some((item) => item.id === id)) {
      id = takeStickerId(draft);
    } else {
      // The counter only goes up past an id in use (docs/scene-state-v2.md "Sticker の id の採番").
      const number = /^sticker_(\d+)$/.exec(String(id))?.[1];
      if (number && BigInt(number) >= BigInt(draft.next_sticker_id ?? 1)) draft.next_sticker_id = stickerCounter(BigInt(number) + 1n);
    }
    draft.stickers.push({ ...structuredClone(sticker), id });
    state = draft;
    unsettled.add(id);
    return id;
  }

  // A copy of `from` with apply(sticker, copy) done to the Sticker `id`'s copy, or null when it is not there.
  function withPlaced(from, id, apply) {
    if (!from.stickers.some((item) => item.id === id)) return null;
    const copy = structuredClone(from);
    apply(copy.stickers.find((item) => item.id === id), copy);
    return copy;
  }

  // The placed Sticker `id` is complete: apply(sticker, draft) changes its copy (its Source, its place), and that is
  // one Undo step. false when it is gone (Undo took it, it was deleted). During a gesture the change goes under the
  // gesture's start too, and the step waits for the gesture's end.
  function settlePlaced(id, apply) {
    if (readOnly) return false;
    const next = withPlaced(state, id, apply);
    if (!next) return false;
    state = next;
    unsettled.delete(id);
    if (gestureBase) {
      gestureBase = withPlaced(gestureBase, id, apply) ?? gestureBase;
      settledInGesture = true;
      return true;
    }
    record();
    return true;
  }

  // The placed Sticker `id` could not be completed: it goes, with no Undo step. Returns whether it was there.
  function dropPlaced(id) {
    unsettled.delete(id);
    if (!state.stickers.some((item) => item.id === id)) return false;
    const without = (from) => ({ ...from, stickers: from.stickers.filter((item) => item.id !== id) });
    state = without(state);
    if (gestureBase) gestureBase = without(gestureBase);
    keepSelection();
    return true;
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

  // An edit of the Camera as one Undo step: edit(camera) changes the draft's Camera and returns whether it did.
  function editCamera(edit) {
    if (readOnly || gestureBase) return result(false);
    const draft = structuredClone(state);
    draft.camera ??= defaultCamera();
    if (!edit(draft.camera)) return result(false);
    state = draft;
    record();
    return result(true, { history: true });
  }

  // Lock: the selected Sticker's `locked`, the selected Camera's `camera.locked`, or the selected paint group's (the
  // stroke group's entry, written with the counted groups, or the raster object's) turns over.
  function toggleLock() {
    const paint = paintObjectOf(state, selection.row);
    if (paint) {
      return editPainting((draft) => {
        const item = paint.kind === "group"
          ? syncPaintGroups(draft.painting, draft.stickers.filter((sticker) => sticker.placement === "sky")).find((group) => String(group.actionGroupId || "") === paint.id)
          : draft.painting.raster_objects.find((entry) => entry.id === paint.id);
        if (!item) return false;
        item.locked = item.locked !== true;
        return true;
      });
    }
    if (selection.row === "camera") {
      return editCamera((camera) => {
        camera.locked = camera.locked !== true;
        return true;
      });
    }
    return editSelected((draft, sticker) => {
      sticker.locked = !sticker.locked;
      return true;
    });
  }

  // The left column's Camera button (docs/studio-ui.md "エディタの中の Camera"): the Camera to the view `pose` at the
  // Timeline frame `playhead` (camera_ui.js cameraToView, Panorama mode switching to Frame), as one Undo step. Not
  // while the Camera is locked. A move selects the Camera (the inspector shows its card); nothing moved changes nothing.
  function cameraToView(pose, playhead) {
    if (state.camera?.locked === true) return result(false);
    const outcome = editCamera((camera) => moveCameraToView(camera, playhead, pose));
    if (outcome.changed) selection = { row: "camera", keys: [] };
    return outcome;
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

  // Bring to front / Send to back (`where` "front" or "back"): the selected sky image or paint group goes to the front
  // or the back of the node's own Sky (its sky images, stroke groups and paint raster objects on one z_index axis), and
  // they are all numbered again from 0 in their order (pano_paint_objects.js, as the old editor). Nothing changes when
  // it is there already. A changed painting drops the uploaded `painting_layer`.
  function orderSelected(where) {
    const row = selection.row;
    const paint = paintObjectOf(state, row);
    const sticker = selectedSticker();
    if (readOnly || gestureBase) return result(false);
    if (paint ? paint.locked : (!sticker || sticker.placement !== "sky" || sticker.locked || isUpstreamSticker(sticker))) return result(false);
    const draft = structuredClone(state);
    const ordered = skyDisplayList(draft);
    numberSkyOrder(ordered);
    const next = restackSkyOrder(ordered, (entry) => entry.key === row, where);
    if (!next) return result(false);
    numberSkyOrder(next);
    if (next.some((entry) => paintObjectRow(entry.key))) draft.painting_layer = null;
    state = draft;
    keepSelection();
    record();
    return result(true, { history: true });
  }

  // --- The painting (docs/studio-ui.md "ペイントの道具"): a stroke and a Clear are one Undo step each.

  // An edit of the painting: apply(draft) changes a copy of the state (its `painting`, made when missing) and returns
  // whether it changed it. A changed painting drops the uploaded `painting_layer` (the node draws from `painting`).
  function editPainting(apply) {
    if (readOnly || gestureBase) return result(false);
    const draft = structuredClone(state);
    draft.painting ??= normalizePaintingState(null);
    if (!apply(draft)) return result(false);
    draft.painting_layer = null;
    state = draft;
    keepSelection();
    record();
    return result(true, { history: true, stopPlayback: true });
  }

  // Whether the layer `layerKind` ("paint" or "mask") has anything to clear: strokes or raster objects.
  function paintingHas(layerKind) {
    const painting = state.painting;
    if (!painting) return false;
    return (painting[layerKind]?.strokes?.length ?? 0) > 0 || (painting.raster_objects ?? []).some((item) => (item.layerKind || "paint") === layerKind);
  }

  // Clear paint / Clear mask: the layer's strokes and raster objects go (the paint's stroke groups too), as one step.
  function clearPainting(layerKind) {
    const kind = layerKind === "mask" ? "mask" : "paint";
    if (!paintingHas(kind)) return result(false);
    return editPainting((draft) => {
      const { painting } = draft;
      painting[kind] = { ...(painting[kind] ?? {}), strokes: [] };
      painting.raster_objects = (painting.raster_objects ?? []).filter((item) => String(item?.layerKind || "paint") !== kind);
      if (kind === "paint") painting.groups = [];
      return true;
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
    const placed = state.stickers.filter((item) => unsettled.has(item.id));
    state = restoredHistoryState(state, snapshot).state;
    // A placed object still uploading stays, as it is now.
    const missing = placed.filter((item) => !state.stickers.some((other) => other.id === item.id));
    if (missing.length) state = { ...state, stickers: [...state.stickers, ...missing] };
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
      const next = row && rowInState(state, row) ? row : null;
      if (next === selection.row) return false;
      selection = { row: next, keys: [] };
      return true;
    },
    gesture,
    commitGesture,
    cancelGesture,
    addPlaced,
    adoptPlaced,
    settlePlaced,
    dropPlaced,
    toggleLock,
    cameraToView,
    duplicateSelected,
    orderSelected,
    revertSelected,
    editPainting,
    paintingHas,
    clearPainting,
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
