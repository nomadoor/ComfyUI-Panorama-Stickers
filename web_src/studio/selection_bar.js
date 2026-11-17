// The bar at the bottom center of the stage (docs/studio-ui.md "下の中央のバー"): what it shows for the selected
// object, and the gizmo's modes on the keys 1, 2 and 3. Pure; components/studio/StudioSelectionBar.vue draws it and
// studio/editor.js does what its buttons say.
import { ICON } from "../icons.js";
import { paintObjectOf } from "../pano_paint_objects.js";
import { clipOrigin } from "../pano_scene_eval.js";
import { is3dFileSource } from "../pano_scene_state.js";
import { UPSTREAM_INHERITED_TIP as INHERITED_TIP, isUpstreamSticker, upstreamStickerInherited, upstreamStickerOverridden } from "../pano_upstream.js";
import { stickerChangedRows } from "./inspector_model.js";
import { lookingAt } from "./look_at.js";
import { pointTargets, pointType } from "./path_line.js";
import { findSticker } from "./row_object.js";
import { objectLabel } from "./timeline_model.js";

// The gizmo's modes (pano_three_view.js createGizmo) and their keys.
export const GIZMO_MODES = Object.freeze([
  Object.freeze({ mode: "translate", key: "1", label: "Move", icon: ICON.gizmo_move }),
  Object.freeze({ mode: "rotate", key: "2", label: "Rotate", icon: ICON.gizmo_rotate }),
  Object.freeze({ mode: "scale", key: "3", label: "Scale", icon: ICON.gizmo_scale }),
]);

// The kind of the object of the row `row` in `state` (an upstream object's in the working layers `upstream`): "sky",
// "world-image", "world-3d", "camera", "paint" (a stroke group or a paint raster object, pano_paint_objects.js
// paintObjectOf), or null (nothing, or a row that is no object).
export function selectedKind(state, row, upstream = []) {
  if (!row) return null;
  if (row === "camera") return "camera";
  if (paintObjectOf(state, row)) return "paint";
  const sticker = findSticker(state, upstream, row);
  if (!sticker) return null;
  if (sticker.placement === "sky") return "sky";
  return is3dFileSource(sticker.source) || sticker.source.kind === "port" ? "world-3d" : "world-image";
}

// The gizmo modes an object of `kind` has: Move, Rotate and Scale for the World objects, Move and Rotate for the
// Camera, none for a sky image.
function gizmoModes(kind) {
  if (kind === "world-image" || kind === "world-3d") return GIZMO_MODES;
  if (kind === "camera") return GIZMO_MODES.slice(0, 2);
  return [];
}

// The gizmo's mode for an object of `kind` while the editor's mode is `mode`: a mode it does not have (the Camera has
// no Scale; no Rotate while it looks at a target, `looking`) shows as Move.
export function shownGizmoMode(kind, mode, looking = false) {
  if (looking && kind === "camera" && mode === "rotate") return "translate";
  return gizmoModes(kind).some((entry) => entry.mode === mode) ? mode : "translate";
}

// The mode the key `key` (KeyboardEvent.key) chooses for an object of `kind`, or null when the key chooses none (the
// Camera's 2 while it looks at a target, `looking`).
export function gizmoModeOfKey(kind, key, looking = false) {
  const mode = gizmoModes(kind).find((entry) => entry.key === key)?.mode ?? null;
  return looking && kind === "camera" && mode === "rotate" ? null : mode;
}

const LATER = "in development";

// The point types (docs/studio-ui.md "軌道の線" "点の種類"), always on the bar of a World object and the Camera.
export const POINT_TYPES = Object.freeze([
  Object.freeze({ type: "auto", label: "Auto", icon: ICON.point_auto, tip: "Auto · automatic handles" }),
  Object.freeze({ type: "bezier", label: "Bezier", icon: ICON.point_bezier, tip: "Bezier · your handles" }),
  Object.freeze({ type: "corner", label: "Corner", icon: ICON.point_corner, tip: "Corner · sharp turn" }),
]);

// The point-type buttons of `owner` (the Camera or a World object): on the selected position Keyframes of its row
// (`keys`, the selection's), else the one at the playhead (`playhead`, a Timeline frame; `offset` its time base's 0),
// but not while it plays (`playing`): the playhead passing Keyframes would make them flicker, as the handles would.
// The type of all of them is lit (none when they differ). Off, with the reason, without a Keyframe to act on, and while
// it cannot be edited (`blocked`: the reason, or "").
function pointButtons(button, owner, row, keys, playhead, offset, blocked, playing = false) {
  const lane = owner.position?.keyframes ?? [];
  const frames = keys.filter((key) => key.row === row && (key.lane === null || key.lane === "position")).map((key) => key.frame);
  const targets = frames.length || !playing ? pointTargets(owner, frames, playhead - offset) : [];
  const types = new Set(lane.filter((key) => targets.includes(key.frame)).map(pointType));
  let why = blocked;
  if (!why && !lane.length) why = "No Keyframes";
  else if (!why && !targets.length) why = playing ? "Playing" : "No Keyframe at the playhead";
  return POINT_TYPES.map((entry) => button(`point:${entry.type}`, entry.icon, entry.label, {
    tip: why ? `${entry.label} · ${why}` : entry.tip,
    active: !why && types.size === 1 && types.has(entry.type),
    disabled: !!why,
  }));
}

// Back to source of an input's or an upstream object (docs/studio-ui.md "下の中央のバー"): pressable only with something to
// put back (an upstream object: any entry of its record, upstreamStickerOverridden; an input's: a row away from the
// input's value, stickerChangedRows) while it can change, in the override colour then (`overridden`); the tooltip says
// why it is not, the first of: inherited only, read-only, locked, nothing to put back.
function revertButton(button, state, sticker, { readOnly, locked, inherited, upstream, inputs }) {
  const theirs = isUpstreamSticker(sticker);
  const source = theirs ? "upstream" : "input";
  const changed = theirs ? upstreamStickerOverridden(state.upstream ?? [], sticker) : stickerChangedRows(state, sticker, { ...inputs, upstream }).length > 0;
  let tip = `Back to source · every value back to the ${source}'s`;
  if (inherited) tip = INHERITED_TIP;
  else if (readOnly) tip = "Back to source · Read-only";
  else if (locked) tip = "Back to source · locked";
  else if (!changed) tip = `Back to source · as ${theirs ? "upstream" : "the input"} has it`;
  const pressable = changed && !inherited && !readOnly && !locked;
  return button("revert", ICON.back_initial, "Back to source", { disabled: !pressable, overridden: pressable, tip });
}

// The bar for the row `row` of `state` with the gizmo in `mode`, in the tab `tab` ("3d" or "camera"): null when it is
// not shown (nothing selected; the Camera in the Camera tab, ADR 0055), else
// { kind, icon, name, fixedName, groups: [[{ key, icon, label, tip, active, disabled }]] }. `fixedName`: the name is the
// kind's (the Camera, a paint group), and its field fits the text instead of the one width of the names users give
// (docs/design.md "下の中央のバーの名前の欄"). `readOnly` disables the edits. `upstream` is the working layers an upstream
// object is found in (docs/studio-ui.md "上流の物の編集": its bar is its kind's, with Back to source, and without
// Duplicate, Replace and the order). `inputs` is what an input's object's rows read (inspector_model.js: playhead,
// portSize, imageSizes, animations), for whether its Back to source has anything to put back.
// The Lock of the Camera turns `camera.locked` over (docs/scene-state-v2.md). A paint group has Bring to front / Send to
// back and Lock / Delete (docs/studio-ui.md "ペイントのまとまり"). Not yet here: the multi-selection; Replace waits for a
// file picker below the old UI.
// `keys` is the selection's Keyframes ([{ row, lane, frame }]) and `playhead` the Timeline frame, for the point types.
export function selectionBar({ state, row, mode = "translate", readOnly = false, tab = "3d", upstream = [], inputs = {}, keys = [], playhead = 0, length = null, playing = false }) {
  const kind = selectedKind(state, row, upstream);
  if (!kind) return null;
  if (kind === "camera" && tab === "camera") return null;
  const button = (key, icon, label, extra = {}) => ({ key, icon, label, tip: extra.tip ?? label, active: !!extra.active, disabled: !!extra.disabled, overridden: !!extra.overridden });
  // The Camera looking at a target has its Rotate where it is, off (docs/studio-ui.md "Look at").
  const looking = kind === "camera" && lookingAt(state, playhead, length);
  const shown = shownGizmoMode(kind, mode, looking);
  const gizmo = gizmoModes(kind).map((entry) => button(`gizmo:${entry.mode}`, entry.icon, entry.label, looking && entry.mode === "rotate"
    ? { tip: "Rotate · Set by Look at", disabled: true }
    : { tip: `${entry.label} (${entry.key})`, active: entry.mode === shown }));
  const lockButton = (locked) => button("lock", locked ? ICON.lock_closed : ICON.lock_open, locked ? "Unlock" : "Lock", { disabled: readOnly });
  if (kind === "camera") {
    const locked = state.camera.locked === true;
    const points = pointButtons(button, state.camera, row, keys, playhead, 0, readOnly ? "Read-only" : locked ? "Locked" : "", playing);
    return { kind, icon: ICON.camera, name: "Camera", fixedName: true, groups: [gizmo, points, [lockButton(locked)]] };
  }
  if (kind === "paint") {
    const { locked } = paintObjectOf(state, row);
    const disabled = readOnly || locked;
    return {
      kind,
      icon: ICON.palette_tool,
      name: "Paint",
      fixedName: true,
      groups: [
        [button("front", ICON.order_front, "Bring to front", { disabled }), button("back", ICON.order_back, "Send to back", { disabled })],
        [lockButton(locked), button("delete", ICON.delete, "Delete", { disabled, tip: "Delete (Del)" })],
      ],
    };
  }
  const sticker = findSticker(state, upstream, row);
  const locked = sticker.locked === true;
  const theirs = isUpstreamSticker(sticker);
  const port = sticker.source.kind === "port";
  // An object of a layer whose overrides cannot be kept: every edit off, as locked, Lock too.
  const inherited = upstreamStickerInherited(sticker);
  const edits = readOnly || locked || inherited;
  // Off for an input's or an upstream object, with the reason in its tip.
  const notFor = theirs ? "not for an upstream object" : port ? "not for an input's object" : null;
  const offFor = (label, tip = label) => (inherited ? { disabled: true, tip: INHERITED_TIP } : notFor ? { disabled: true, tip: `${label} · ${notFor}` } : { tip });
  const first = kind === "sky"
    ? [
      button("front", ICON.order_front, "Bring to front", theirs ? offFor("Bring to front") : { disabled: edits }),
      button("back", ICON.order_back, "Send to back", theirs ? offFor("Send to back") : { disabled: edits }),
    ]
    : gizmo;
  const copy = [
    button("duplicate", ICON.duplicate, "Duplicate", notFor ? offFor("Duplicate") : { disabled: readOnly }),
    button("replace", ICON.replace_image, "Replace", notFor ? offFor("Replace") : { disabled: true, tip: `Replace · ${LATER}` }),
  ];
  const keep = [
    inherited ? button("lock", locked ? ICON.lock_closed : ICON.lock_open, locked ? "Unlock" : "Lock", { disabled: true, tip: INHERITED_TIP }) : lockButton(locked),
    button("delete", ICON.delete, "Delete", port ? offFor("Delete") : inherited ? offFor("Delete") : { disabled: edits, tip: "Delete (Del)" }),
  ];
  const groups = kind === "sky" ? [first, copy, keep] : [first, pointButtons(button, sticker, row, keys, playhead, sticker.clip ? clipOrigin(sticker.clip) : 0,
    inherited ? INHERITED_TIP : readOnly ? "Read-only" : locked ? "Locked" : "", playing), copy, keep];
  if (theirs || port) groups.push([revertButton(button, state, sticker, { readOnly, locked, inherited, upstream, inputs })]);
  return { kind, icon: kind === "sky" ? ICON.pano : ICON.box, name: objectLabel(sticker), fixedName: false, groups };
}
