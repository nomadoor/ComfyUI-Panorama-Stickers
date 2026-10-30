// What the new UI's Timeline does (pure): selecting rows and Keyframes, moving and deleting Keyframes, the row dot,
// the eye, Clip range drags, the jump to the previous or next Keyframe, the length and fps fields, and the loop
// setting. The rules are docs/timeline-ui.md's; the Lane edits themselves are pano_timeline.js's, called here.
//
// Nothing here changes what it is given: an edit returns { state, upstream }, the new state (the same object when
// only upstream layers changed) and the new working copies of the upstream layers it changed ({ [key]: sceneState }).
// Unchanged parts are shared, the upstream painting too. `ctx` and selections are as timeline_model.js describes.
// The shell applies an edit (applyEdit), records it as one Undo step and stops playback where the spec says so.
import { clipActive, FRAME_EPSILON } from "../pano_scene_eval.js";
import {
  deleteKeyframes,
  enteredTimelineFps,
  enteredTimelineLength,
  keyAllLanes,
  moveClip,
  moveKeyframes,
  rowLaneNames,
  trimClipEnd,
  trimClipStart,
} from "../pano_timeline.js";
import {
  clipBarEnd,
  entryClipEditable,
  entryKeyable,
  entryKeysEditable,
  entryVisible,
  entryWritable,
  findEntry,
  jumpFrames,
  nearestKeyFrame,
  spanOf,
  timelineCamera,
} from "./timeline_model.js";

// A copy-on-write draft of ctx's state and upstream working copies: owner(entry) gives a copy of the entry's owner
// that may be changed, made once per owner; result() gives the edit.
function createDraft(ctx) {
  let state = ctx.state;
  let stateCopied = false;
  const layers = new Map();
  const copied = new Set();
  const sceneStateOf = (entry) => {
    if (entry.layer) {
      const { key } = entry.layer;
      if (!layers.has(key)) layers.set(key, { ...entry.layer.sceneState });
      return layers.get(key);
    }
    if (!stateCopied) {
      state = { ...state };
      stateCopied = true;
    }
    return state;
  };
  return {
    owner(entry) {
      const target = sceneStateOf(entry);
      const id = `${entry.layer?.key ?? ""}\u0000${entry.kind}\u0000${entry.id}`;
      const first = !copied.has(id);
      copied.add(id);
      if (entry.kind === "sticker") {
        if (first) {
          target.stickers = target.stickers.map((sticker) => (sticker.id === entry.id ? structuredClone(sticker) : sticker));
        }
        return target.stickers.find((sticker) => sticker.id === entry.id);
      }
      // The Camera of a state without one is the default Camera, written by its first edit.
      if (entry.kind === "camera" && first) target.camera = structuredClone(target.camera ?? timelineCamera(target));
      else if (first) target[entry.kind] = structuredClone(target[entry.kind]);
      return target[entry.kind];
    },
    sceneState: sceneStateOf,
    result() {
      return { state, upstream: Object.fromEntries(layers) };
    },
  };
}

// ctx with an edit applied: the new state, and each changed upstream layer with its new working copy.
export function applyEdit(ctx, edit) {
  const upstream = (ctx.upstream || []).map((layer) => (
    edit.upstream && Object.hasOwn(edit.upstream, layer.key) ? { ...layer, sceneState: edit.upstream[layer.key] } : layer
  ));
  return { ...ctx, state: edit.state, upstream };
}

// A click on a row (docs/timeline-ui.md "タイムラインの表示"): { selection, seek } or null when the row's thing is
// hidden (what is hidden is not selected). The Camera and the Stickers are selected; the background, the painting and
// the `scene` select nothing. A Sticker outside its Clip range first moves the playhead to its start (`seek`).
// Keyframes selected before are let go, so Delete then acts on the row's object.
export function selectRow(ctx, selection, id, playhead) {
  const entry = findEntry(ctx, id);
  if (!entry || !entryVisible(entry)) return null;
  if (entry.kind !== "camera" && entry.kind !== "sticker") return { selection: { row: null, keys: [] }, seek: null };
  const seek = entry.kind === "sticker" && !clipActive(entry.owner.clip, playhead) ? entry.owner.clip.start : null;
  return { selection: { row: id, keys: [] }, seek };
}

const sameKey = (a, b) => a.row === b.row && a.lane === b.lane && a.frame === b.frame;

// A click on a Keyframe or a box drawn on the tracks (docs/timeline-ui.md "Keyframe の選び方"): `hits` become the
// selected Keyframes, or are added to them with `additive` (Shift). No hits without Shift clears them.
export function selectKeys(selection, hits, { additive = false } = {}) {
  const base = additive ? [...(selection?.keys || [])] : [];
  for (const hit of hits) if (!base.some((key) => sameKey(key, hit))) base.push(hit);
  return { row: selection?.row ?? null, keys: base };
}

// What the Delete key acts on: the selected Keyframes first, else the selected object, else nothing.
export function deleteTarget(selection) {
  if (selection?.keys?.length) return "keys";
  return selection?.row ? "object" : null;
}

// The selected Keyframes per row and Lane that exist and may change: [{ entry, lanes: Map(lane -> frames) }]. A pin
// stands for the row's Lanes (rowLaneNames) at its frame.
function editableKeys(ctx, selection) {
  const groups = new Map();
  for (const key of selection?.keys || []) {
    let group = groups.get(key.row);
    if (!group) {
      const entry = findEntry(ctx, key.row);
      if (!entry || !entryKeysEditable(ctx, entry)) continue;
      group = { entry, lanes: new Map() };
      groups.set(key.row, group);
    }
    const { owner } = group.entry;
    for (const name of key.lane ? [key.lane] : rowLaneNames(owner)) {
      if (!owner[name]?.keyframes.some((item) => Math.abs(item.frame - key.frame) <= FRAME_EPSILON)) continue;
      if (!group.lanes.has(name)) group.lanes.set(name, []);
      const list = group.lanes.get(name);
      if (!list.includes(key.frame)) list.push(key.frame);
    }
  }
  return [...groups.values()].filter((group) => group.lanes.size);
}

// Dragging the selected Keyframes by `delta` frames from where they are in ctx (the drag's start): every one moves by
// the same frames, held so that none passes Timeline frame 0 or the last frame (limit - 1, `limit` the span when the
// drag started). Keyframes already past either are not pushed further. { edit, selection, delta }, or null when none
// of them may move (locked, inherited only, an upstream `scene`'s).
export function moveKeys(ctx, selection, delta, limit) {
  const groups = editableKeys(ctx, selection);
  if (!groups.length) return null;
  let applied = delta;
  for (const { entry, lanes } of groups) {
    for (const list of lanes.values()) {
      const floor = -entry.offset;
      const ceiling = limit - 1 - entry.offset;
      applied = Math.min(applied, Math.max(0, ceiling - Math.max(...list)));
      applied = Math.max(applied, Math.min(0, floor - Math.min(...list)));
    }
  }
  const draft = createDraft(ctx);
  for (const { entry, lanes } of groups) {
    const owner = draft.owner(entry);
    for (const [name, list] of lanes) moveKeyframes(owner, [name], list, applied, -entry.offset, limit - 1 - entry.offset);
  }
  const moved = new Set(groups.map((group) => group.entry.id));
  const keys = (selection.keys || []).map((key) => (moved.has(key.row) ? { ...key, frame: key.frame + applied } : key));
  return { edit: draft.result(), selection: { ...selection, keys }, delta: applied };
}

// Delete of the selected Keyframes: a Lane left without Keyframes keeps its value at the playhead (pano_timeline.js
// deleteKeyframes). { edit, selection } with no Keyframes selected, or null when none may be deleted.
export function deleteKeys(ctx, selection, playhead) {
  const groups = editableKeys(ctx, selection);
  if (!groups.length) return null;
  const draft = createDraft(ctx);
  for (const { entry, lanes } of groups) {
    const owner = draft.owner(entry);
    for (const [name, list] of lanes) deleteKeyframes(owner, [name], list, playhead - entry.offset);
  }
  return { edit: draft.result(), selection: { row: selection.row ?? null, keys: [] } };
}

// The row dot (docs/timeline-ui.md "記録の規則"): every Lane of the row but the lens ones gets a Keyframe at the
// playhead with its value there. The edit, or null when it would change nothing or the row cannot be keyed.
export function keyRow(ctx, id, playhead) {
  const entry = findEntry(ctx, id);
  if (!entry || !entryKeyable(entry) || !entryKeysEditable(ctx, entry)) return null;
  const frame = playhead - entry.offset;
  const missing = rowLaneNames(entry.owner).some((name) => !entry.owner[name].keyframes.some((key) => Math.abs(key.frame - frame) <= FRAME_EPSILON));
  if (!missing) return null;
  const draft = createDraft(ctx);
  keyAllLanes(draft.owner(entry), frame);
  return draft.result();
}

// The eye (docs/timeline-ui.md "表示（目のアイコン）"): { edit, selection } or null (the background has no eye; a
// read-only editor and an inherited-only layer change nothing). Locked things toggle too. Hiding the selected object
// lets it go.
export function toggleVisible(ctx, selection, id) {
  const entry = findEntry(ctx, id);
  if (!entry || entry.kind === "background" || !entryWritable(ctx, entry)) return null;
  const draft = createDraft(ctx);
  const visible = entryVisible(entry);
  if (entry.kind === "painting") draft.sceneState(entry).painting_visible = !visible;
  else draft.owner(entry).visible = !visible;
  const released = visible && selection?.row === id;
  return { edit: draft.result(), selection: released ? { ...selection, row: null } : selection };
}

// The start of a Clip range drag on the row `id`: { id, base, limit, span, end }, or null when its Clip range cannot
// change. `limit` is the span now, which the drag keeps; `span` the span this Clip range does not set (it reopens an
// end trimmed up to it); `end` where its bar ends.
export function startClipDrag(ctx, id) {
  const entry = findEntry(ctx, id);
  if (!entry || !entryClipEditable(ctx, entry)) return null;
  const { clip } = entry.owner;
  const limit = spanOf(ctx);
  const end = clipBarEnd(ctx, entry) ?? limit;
  return { id, base: { ...clip }, limit, span: spanOf(ctx, clip), end };
}

// The Clip range of a drag moved (`mode` "move") or trimmed ("start", "end") by `delta` frames from where it was in
// ctx (the drag's start). A moved bar keeps its start on the Timeline and may run past the end; a trim stops at the
// end; a drag never lengthens the output: a bar whose end sets the Auto length goes back by what it added.
export function applyClipDrag(ctx, drag, mode, delta) {
  const entry = findEntry(ctx, drag.id);
  if (!entry) return null;
  const draft = createDraft(ctx);
  const owner = draft.owner(entry);
  const { base, limit } = drag;
  owner.clip = { ...base };
  if (delta && mode === "move") {
    moveClip(owner.clip, Math.min(delta, Math.max(0, limit - 1 - base.start)));
    const excess = spanOf(applyEdit(ctx, draft.result())) - limit;
    if (excess > 0) moveClip(owner.clip, -excess);
  } else if (delta && mode === "start") {
    trimClipStart(owner.clip, Math.min(base.start + delta, Math.max(limit - 1, base.start)));
  } else if (delta) {
    trimClipEnd(owner.clip, Math.min(drag.end + delta, Math.max(limit, drag.end)), drag.span);
  }
  return draft.result();
}

// Whether a Clip range drag's edit (applyClipDrag) leaves the Clip range other than where the drag began: a drag that
// comes back, or a click, changes nothing and records nothing.
export function clipDragChanged(ctx, drag, edit) {
  if (!edit) return false;
  const clip = findEntry(applyEdit(ctx, edit), drag.id)?.owner?.clip;
  return !!clip && ["start", "in", "duration"].some((field) => clip[field] !== drag.base[field]);
}

// The frame prev (direction -1) or next (+1) moves the playhead to (docs/timeline-ui.md "前後の Keyframe へ飛ぶ"),
// or null at the end.
export function jumpTarget(ctx, selection, playhead, direction) {
  return nearestKeyFrame(jumpFrames(ctx, selection, spanOf(ctx)), playhead, direction);
}

// The length field (a number) and its reset (null): the edit, or null when it changes nothing or is refused.
export function lengthEdit(ctx, value) {
  if (ctx.readOnly) return null;
  const length = enteredTimelineLength(value);
  if (length === undefined || length === ctx.state.timeline.length) return null;
  return { state: { ...ctx.state, timeline: { ...ctx.state.timeline, length } }, upstream: {} };
}

// The fps field: the fps to rebase to (the shell rebases, keeping times in seconds), or null when a VIDEO sets it,
// the editor is read-only, it is the fps already, or it is not a positive number.
export function enteredFps(ctx, value) {
  if (ctx.fpsLocked || ctx.readOnly) return null;
  const fps = enteredTimelineFps(value);
  return fps === null || fps === ctx.state.timeline.fps ? null : fps;
}

// The loop switch (docs/timeline-ui.md "タイムラインの長さ"): on by default, an editor setting kept per browser.
export const LOOP_SETTING_KEY = "PanoramaSuite.Studio.TimelineLoop";

export function readLoopSetting(storage) {
  try {
    return storage?.getItem(LOOP_SETTING_KEY) !== "0";
  } catch {
    return true;
  }
}

export function writeLoopSetting(storage, on) {
  try {
    storage?.setItem(LOOP_SETTING_KEY, on ? "1" : "0");
  } catch {
    // Blocked storage: the switch still works for this session.
  }
}
