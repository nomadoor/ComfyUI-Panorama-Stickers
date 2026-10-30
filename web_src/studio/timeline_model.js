// The new UI's Timeline as data (pure): from the state, the upstream layers, the selection and the playhead to the bar,
// the rows with their dots and Clip ranges, and the upstream groups, for StudioTimeline.vue. The rules are
// docs/timeline-ui.md's; the order of the bar and of a row's head is docs/studio-ui.md "タイムラインのバー". The
// Lane rules themselves (which Lanes a row keys, its pins) are pano_timeline.js's, called here.
//
// `ctx`, shared with timeline_actions.js, is what the shell gives the Timeline:
//   state       the working state v2 (a snapshot; nothing here changes it). Its `camera` may be null: the Camera row
//               then shows the default Camera (timelineCamera)
//   upstream    the upstream layers, farthest first: [{ key, name, sceneState, editable, record, scene, deleted,
//               portMeta }] (editor/upstream.js upstreamTimelineLayers, with `name` the upstream node's title and
//               `portMeta` the media meta of its port Sticker; optional `sceneItems`, the number of items of its 3D
//               content, and `animations`, its animated 3D files' clips as media.animations)
//   media       what timelineSpan knows of the inputs (pano_timeline.js autoTimelineLength), `port` the node's own port
//               Sticker's media meta
//   spanOf      optional (ctx, openClip) => span, in place of timelineSpan(state, media) (for an upstream layer's
//               Clip range that sets the Auto length)
//   background  null, or { end, video } while the node's own bg_media has a row (`end` where its media ends, or null;
//               `video` whether a VIDEO is linked to it, before its length is known too)
//   sceneRow    whether the `scene` input is linked (not to an upstream Scene)
//   fpsLocked   whether a VIDEO sets the Timeline fps
//   readOnly    a read-only editor
// A selection is { row, keys }: `row` the id of the selected object's row (or null), `keys` the selected Keyframes
// [{ row, lane, frame }], `lane` null for a pin of a closed row (all the row's Lanes at that frame), `frame` in the
// owner's own frames (the Clip frames of a Sticker or `scene`), so a selection moves with its Clip range.
import { ICON } from "../icons.js";
import { animationCycleFrames } from "../pano_animation.js";
import { sceneStickerLabel } from "../pano_editor_state.js";
import { portMediaFrames } from "../pano_port_media.js";
import { defaultClip } from "../pano_scene_state.js";
import { FRAME_EPSILON } from "../pano_scene_eval.js";
import {
  BACKGROUND_ROW,
  hasPainting,
  LANE_LABELS,
  laneNames,
  ownerTimed,
  PAINTING_ROW,
  rowKeyframes,
  timelineSpan,
} from "../pano_timeline.js";
import { upstreamLayerOverridden, upstreamRowId } from "../pano_upstream.js";
import { cameraOf } from "./defaults.js";

export const CAMERA_ROW = "camera";
export const SCENE_ROW = "scene";

// The Camera the Camera row shows and edits: the state's, or the default Camera (defaults.js; not written to the state
// by reading, docs/studio-node.md "入れる順番"; an edit of the Camera row writes it).
export function timelineCamera(state) {
  return cameraOf(state);
}

// The Timeline's span (the output's length) for ctx, `openClip` counted as a Clip range without a duration.
export function spanOf(ctx, openClip = null) {
  if (ctx.spanOf) return ctx.spanOf(ctx, openClip);
  return timelineSpan(ctx.state, { ...(ctx.media || {}), camera: true, openClip });
}

const clipOffset = (owner) => (owner?.clip ? owner.clip.start - owner.clip.in : 0);

// Every row of the Timeline as an entry: { id, kind, owner, sceneState, layer, offset, label, icon }, the node's own
// (`own`) and per upstream layer (`groups`). `kind` is background, camera, sticker, painting or scene; `owner` holds
// the Lanes or the Clip range (null for a painting); `layer` is the upstream layer of an upstream row, else null;
// `offset` turns the owner's frames into Timeline frames.
export function timelineEntries(ctx) {
  const { state } = ctx;
  const upstream = ctx.upstream || [];
  const stateEntries = (sceneState, layer, sceneShown) => {
    const sky = sceneState.stickers.filter((sticker) => sticker.placement === "sky").sort((a, b) => b.z_index - a.z_index);
    const world = sceneState.stickers.filter((sticker) => sticker.placement === "world");
    const out = [...sky, ...world].map((sticker) => ({
      id: sticker.id,
      kind: "sticker",
      owner: sticker,
      sceneState,
      layer,
      offset: clipOffset(sticker),
      label: sceneStickerLabel(sticker.origin ? { ...sticker, id: sticker.origin.id } : sticker),
      // docs/design.md "アイコン": the Sky mark is view-360, the World mark a box.
      icon: sticker.placement === "sky" ? ICON.pano : ICON.box,
    }));
    if (hasPainting(sceneState.painting) || !sceneState.painting_visible) {
      out.push({ id: layer ? upstreamRowId(layer.key, "painting") : PAINTING_ROW, kind: "painting", owner: null, sceneState, layer, offset: 0, label: "Paint", icon: ICON.paintbrush_vertical_tool });
    }
    if (sceneShown) {
      out.push({ id: layer ? upstreamRowId(layer.key, "scene") : SCENE_ROW, kind: "scene", owner: sceneState.scene, sceneState, layer, offset: clipOffset(sceneState.scene), label: "Scene", icon: ICON.box });
    }
    return out;
  };
  const own = [];
  if (ctx.background) own.push({ id: BACKGROUND_ROW, kind: "background", owner: state.background, sceneState: state, layer: null, offset: clipOffset(state.background), label: "Background", icon: ICON.unwrap });
  own.push({ id: CAMERA_ROW, kind: "camera", owner: timelineCamera(state), sceneState: state, layer: null, offset: 0, label: "Camera", icon: ICON.camera });
  // The node's own `scene` is not drawn under an upstream Scene, so its row does not show then.
  own.push(...stateEntries(state, null, !upstream.length && (!!ctx.sceneRow || ownerTimed(state.scene))));
  return {
    own,
    groups: upstream.map((layer) => ({
      layer,
      entries: stateEntries(layer.sceneState, layer, !!layer.scene || ownerTimed(layer.sceneState.scene) || !layer.sceneState.scene.visible),
    })),
  };
}

// The entry of the row `id`, or null.
export function findEntry(ctx, id) {
  const { own, groups } = timelineEntries(ctx);
  return [...own, ...groups.flatMap((group) => group.entries)].find((entry) => entry.id === id) ?? null;
}

// Whether the row's own state may change here: not read-only, and an upstream layer's only while the node keeps
// its overrides (ADR 0030).
export function entryWritable(ctx, entry) {
  return !ctx.readOnly && (!entry.layer || entry.layer.editable);
}

// Whether the row's Keyframes may change: writable, not locked, and not an upstream `scene` (no override holds its
// Lanes).
export function entryKeysEditable(ctx, entry) {
  return entryWritable(ctx, entry) && !!entry.owner && entry.owner.locked !== true && !(entry.layer && entry.kind === "scene") && entry.kind !== "background";
}

// Whether the row's Clip range may change: writable and not locked.
export function entryClipEditable(ctx, entry) {
  return entryWritable(ctx, entry) && !!entry.owner?.clip && entry.owner.locked !== true;
}

// Whether the row's thing shows (its eye).
export function entryVisible(entry) {
  if (entry.kind === "painting") return entry.sceneState.painting_visible !== false;
  if (entry.kind === "background") return true;
  return entry.owner.visible !== false;
}

// Whether a row keys its Lanes with its row dot and opens into Lane lines: the Camera and the Stickers.
export function entryKeyable(entry) {
  return entry.kind === "camera" || entry.kind === "sticker";
}

// Whether a row's thing has a time of its own, so its row shows a Clip range bar (docs/timeline-ui.md "Clip range の
// バー（新しい UI）"): a background VIDEO or IMAGE batch, a port Sticker's VIDEO or batch, an animated 3D file, a
// `scene` with two or more items; and, so a trimmed range is never hidden, any Clip range that is not the default.
// An upstream row reads its layer's media (`portMeta`, `sceneItems`, `animations`) where an own row reads ctx's.
export function hasOwnTime(ctx, entry) {
  const owner = entry.owner;
  const clip = owner?.clip;
  if (!clip) return false;
  if (!defaultClip(clip)) return true;
  const { layer } = entry;
  const media = ctx.media || {};
  if (entry.kind === "background") {
    const bg = media.bg;
    return !!(bg?.video || bg?.frames > 1 || ctx.background?.video);
  }
  const animations = layer ? layer.animations : media.animations;
  const clips = entry.kind === "scene" ? animations?.scene : animations?.stickers?.[owner.id];
  if (clips && animationCycleFrames(clips, owner.animation, ctx.state.timeline.fps) !== null) return true;
  if (entry.kind === "scene") return (layer ? layer.sceneItems : media.sceneItems) > 1;
  if (owner.source?.kind !== "port") return false;
  const meta = layer ? layer.portMeta : media.port;
  return !!meta && (meta.kind === "VIDEO" || meta.frames > 1);
}

// Where the bar of a row's Clip range ends, in Timeline frames: its duration's end; without one, where its media ends
// (the background's `end`, a port Sticker's media, pano_port_media.js portMediaFrames), or null (the Timeline's end)
// while that is not known or for other content.
export function clipBarEnd(ctx, entry) {
  const clip = entry.owner?.clip;
  if (!clip) return null;
  if (clip.duration !== null) return clip.start + clip.duration;
  if (entry.kind === "background") return ctx.background?.end ?? null;
  if (entry.owner.source?.kind !== "port") return null;
  const meta = entry.layer ? entry.layer.portMeta : ctx.media?.port;
  return meta ? portMediaFrames(clip, ctx.state.timeline.fps, meta) : null;
}

const inSpan = (frame, span) => frame > -FRAME_EPSILON && frame < span - FRAME_EPSILON;

// The Timeline frames of the Keyframes prev and next jump between (docs/timeline-ui.md "前後の Keyframe へ飛ぶ"):
// the selected row's (every Lane, the lens Lane too), or else every shown row's; never those past the output's end.
export function jumpFrames(ctx, selection, span) {
  const { own, groups } = timelineEntries(ctx);
  const all = [...own, ...groups.flatMap((group) => group.entries)];
  const chosen = selection?.row ? all.filter((entry) => entry.id === selection.row) : all.filter(entryVisible);
  const frames = new Set();
  for (const entry of chosen) {
    if (!entry.owner) continue;
    for (const name of laneNames(entry.owner)) {
      for (const key of entry.owner[name].keyframes) {
        const frame = key.frame + entry.offset;
        if (inSpan(frame, span)) frames.add(frame);
      }
    }
  }
  return [...frames].sort((a, b) => a - b);
}

// The Keyframe frame before (direction -1) or after (+1) the playhead in `frames`, or null at the end (no wrapping).
export function nearestKeyFrame(frames, playhead, direction) {
  if (direction < 0) return [...frames].reverse().find((frame) => frame < playhead - FRAME_EPSILON) ?? null;
  return frames.find((frame) => frame > playhead + FRAME_EPSILON) ?? null;
}

// The time of a Timeline frame as the bar shows it: minutes, seconds and the frame inside the second ("00:03.06" for
// frame 78 at 24 fps).
export function timecode(frame, fps) {
  const seconds = Math.floor(frame / fps + 1e-9);
  const inSecond = Math.max(0, Math.round(frame - seconds * fps));
  const digits = Math.max(2, String(Math.max(1, Math.ceil(fps) - 1)).length);
  const pad = (value, size) => String(value).padStart(size, "0");
  return `${pad(Math.floor(seconds / 60), 2)}:${pad(seconds % 60, 2)}.${pad(inSecond, digits)}`;
}

// The x of a Timeline frame on a track `width` wide with `pad` on both ends: frame 0 at the left pad, the last frame
// (span - 1) at the right one.
export function frameToX(frame, span, width, pad) {
  if (span <= 1) return pad;
  return pad + (frame / (span - 1)) * (width - 2 * pad);
}

// The Timeline frame nearest to x on that track, held to 0..span - 1.
export function xToFrame(x, span, width, pad) {
  if (span <= 1) return 0;
  const frame = Math.round(((x - pad) / (width - 2 * pad)) * (span - 1));
  return Math.min(span - 1, Math.max(0, frame));
}

// The fractional Timeline frame at x on that track, not rounded nor held (a box drawn on the tracks).
export function xToFrameExact(x, span, width, pad) {
  if (span <= 1) return 0;
  return ((x - pad) / (width - 2 * pad)) * (span - 1);
}

// The Keyframes of lines `from`..`to` (model.lines indexes, either order) between Timeline frames f0 and f1 (either
// order), as selection keys.
export function keysInRange(lines, from, to, f0, f1) {
  const [a, b] = [Math.min(from, to), Math.max(from, to)];
  const [lo, hi] = [Math.min(f0, f1), Math.max(f0, f1)];
  const hits = [];
  for (const line of lines.slice(Math.max(0, a), b + 1)) {
    for (const key of line.keys) {
      if (key.frame >= lo - FRAME_EPSILON && key.frame <= hi + FRAME_EPSILON) hits.push({ row: line.row, lane: line.lane, frame: key.ownerFrame });
    }
  }
  return hits;
}

const keyId = (row, lane, frame) => `${row}\u0000${lane ?? ""}\u0000${frame}`;

const INHERITED_TIP = "Inherited only: this node cannot keep changes to this layer";

// Why a row's controls are disabled, or "" when they are not.
function blockedTip(ctx, entry, { locked = true } = {}) {
  if (ctx.readOnly) return "Read-only";
  if (entry.layer && !entry.layer.editable) return INHERITED_TIP;
  if (locked && entry.owner?.locked === true) return "Locked";
  return "";
}

function rowDotState(entry, playhead) {
  const pins = rowKeyframes(entry.owner);
  const at = playhead - entry.offset;
  if (pins.some((pin) => pin.full && Math.abs(pin.frame - at) <= FRAME_EPSILON)) return "now";
  return pins.length ? "has" : "none";
}

function overridden(entry) {
  const record = entry.layer?.record;
  if (!record) return false;
  if (entry.kind === "painting") return Object.hasOwn(record, "painting_visible");
  if (entry.kind === "scene") return Object.keys(record.scene || {}).length > 0;
  const { origin, placement } = entry.owner;
  return !!record.stickers?.some((item) => item.id === origin?.id && item.placement === placement);
}

// The Timeline for StudioTimeline.vue. `openRows` holds the ids of the open rows. Rows:
//   { id, label, icon, eye, expand, open, selected, dot, upstream, overridden, clip, clipEditable, keysEditable,
//     offset, pins, lanes, nameTip }
// `eye` null for a row without one (its place is kept); `expand` "yes", "disabled" (no Lanes to open) or "none";
// `dot` null for a row without Lanes, else { state, disabled, tip }; `clip` { start, end } in Timeline frames, `end`
// null where the bar runs to the Timeline's end, or null for a row without a bar (hasOwnTime); `pins` and each Lane's `keys` { frame, ownerFrame, selected, full }.
// `lines` lists the track lines top to bottom (a row's, then its open Lanes'), the ones keysInRange reads.
export function buildStudioTimeline(ctx, { selection = null, playhead = 0, playing = false, loop = true, openRows = new Set() } = {}) {
  const { state } = ctx;
  const span = spanOf(ctx);
  const chosen = new Set((selection?.keys || []).map((key) => keyId(key.row, key.lane, key.frame)));
  const lines = [];
  const rowOf = (entry) => {
    const keyable = entryKeyable(entry);
    const visible = entryVisible(entry);
    const eyeBlocked = blockedTip(ctx, entry, { locked: false });
    const dotBlocked = blockedTip(ctx, entry);
    const keyedLanes = entry.owner ? laneNames(entry.owner) : [];
    const open = keyable && openRows.has(entry.id);
    const pins = entry.owner
      ? rowKeyframes(entry.owner)
        .map((pin) => ({ frame: pin.frame + entry.offset, ownerFrame: pin.frame, full: pin.full, selected: chosen.has(keyId(entry.id, null, pin.frame)) }))
        .filter((pin) => inSpan(pin.frame, span))
      : [];
    const lanes = open
      ? keyedLanes.map((name) => ({
        lane: name,
        label: LANE_LABELS[name] ?? name,
        keys: entry.owner[name].keyframes
          .map((key) => ({
            frame: key.frame + entry.offset,
            ownerFrame: key.frame,
            full: true,
            selected: chosen.has(keyId(entry.id, name, key.frame)) || chosen.has(keyId(entry.id, null, key.frame)),
          }))
          .filter((key) => inSpan(key.frame, span)),
      }))
      : [];
    lines.push({ row: entry.id, lane: null, keys: pins });
    for (const lane of lanes) lines.push({ row: entry.id, lane: lane.lane, keys: lane.keys });
    const clip = entry.owner?.clip;
    return {
      id: entry.id,
      kind: entry.kind,
      label: entry.label,
      icon: entry.icon,
      eye: entry.kind === "background" ? null : {
        icon: visible ? ICON.eye : ICON.eye_dashed,
        label: visible ? "Hide" : "Show",
        disabled: !!eyeBlocked,
        tip: eyeBlocked || (visible ? "Hide" : "Show"),
      },
      expand: keyable ? "yes" : entry.kind === "painting" ? "none" : "disabled",
      open,
      selected: !!selection?.row && selection.row === entry.id,
      dot: keyable ? { state: rowDotState(entry, playhead), disabled: !!dotBlocked, tip: dotBlocked || "Keyframe all values here (not the lens)" } : null,
      upstream: !!entry.layer,
      overridden: overridden(entry),
      clip: clip && hasOwnTime(ctx, entry) ? { start: clip.start, end: clipBarEnd(ctx, entry) } : null,
      clipEditable: entryClipEditable(ctx, entry),
      keysEditable: entryKeysEditable(ctx, entry),
      offset: entry.offset,
      pins,
      lanes,
      nameTip: entry.kind === "painting" || entry.kind === "background" ? entry.label : `${entry.label} — double-click to frame it`,
    };
  };
  const { own, groups } = timelineEntries(ctx);
  const rows = own.map(rowOf);
  const groupModels = groups.map(({ layer, entries }) => {
    const editable = !!layer.editable && !ctx.readOnly;
    const deleted = layer.editable ? layer.deleted || 0 : 0;
    return {
      key: layer.key,
      label: `From ${layer.name || layer.key}${layer.editable ? "" : " · inherited only"}`,
      tip: "Items from the scene input. Changes here are saved in this node.",
      revert: {
        disabled: !editable || !upstreamLayerOverridden(layer.record ?? null),
        tip: layer.editable ? "Revert this layer's scene and painting to upstream" : INHERITED_TIP,
      },
      restore: { label: `Restore deleted (${deleted})`, disabled: !editable || deleted === 0 },
      rows: entries.map(rowOf),
    };
  });
  const frames = jumpFrames(ctx, selection, span);
  const prev = nearestKeyFrame(frames, playhead, -1);
  const next = nearestKeyFrame(frames, playhead, 1);
  const { fps, length } = state.timeline;
  return {
    span,
    bar: {
      playable: span > 1,
      playing,
      loop,
      timecode: timecode(playhead, fps),
      frame: playhead,
      frameText: `${playhead} / ${span}`,
      fps,
      fpsLocked: !!ctx.fpsLocked || !!ctx.readOnly,
      fpsTip: ctx.fpsLocked ? "Set by the video input" : "Timeline fps",
      length: length ?? span,
      lengthLocked: !!ctx.readOnly,
      lengthResetDisabled: length === null || !!ctx.readOnly,
      prev: { frame: prev, disabled: prev === null },
      next: { frame: next, disabled: next === null },
      readOnly: !!ctx.readOnly,
    },
    rows,
    groups: groupModels,
    lines,
  };
}
