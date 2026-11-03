// The bar at the bottom center of the stage (docs/studio-ui.md "下の中央のバー"): what it shows for the selected
// object, and the gizmo's modes on the keys 1, 2 and 3. Pure; components/studio/StudioSelectionBar.vue draws it and
// studio/editor.js does what its buttons say.
import { ICON } from "../icons.js";
import { sceneStickerLabel } from "../pano_editor_state.js";
import { paintObjectOf } from "../pano_paint_objects.js";
import { is3dFileSource } from "../pano_scene_state.js";
import { isUpstreamSticker, upstreamStickerEditable } from "../pano_upstream.js";
import { findSticker } from "./row_object.js";

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
export function gizmoModes(kind) {
  if (kind === "world-image" || kind === "world-3d") return GIZMO_MODES;
  if (kind === "camera") return GIZMO_MODES.slice(0, 2);
  return [];
}

// The gizmo's mode for an object of `kind` while the editor's mode is `mode`: a mode it does not have (the Camera has
// no Scale) shows as Move.
export function shownGizmoMode(kind, mode) {
  return gizmoModes(kind).some((entry) => entry.mode === mode) ? mode : "translate";
}

// The mode the key `key` (KeyboardEvent.key) chooses for an object of `kind`, or null when the key chooses none.
export function gizmoModeOfKey(kind, key) {
  return gizmoModes(kind).find((entry) => entry.key === key)?.mode ?? null;
}

const LATER = "in development";
// Why an upstream object's edits are off in a layer whose overrides cannot be kept (docs/studio-ui.md "上流の物の編集").
const INHERITED_TIP = "Inherited only: edit it in its own Panorama Studio";

// The bar for the row `row` of `state` with the gizmo in `mode`, in the tab `tab` ("3d" or "camera"): null when it is
// not shown (nothing selected; the Camera in the Camera tab, ADR 0055), else
// { kind, icon, name, fixedName, groups: [[{ key, icon, label, tip, active, disabled }]] }. `fixedName`: the name is the
// kind's (the Camera, a paint group), and its field fits the text instead of the one width of the names users give
// (docs/design.md "下の中央のバーの名前の欄"). `readOnly` disables the edits. `upstream` is the working layers an upstream
// object is found in (docs/studio-ui.md "上流の物の編集": its bar is its kind's, with Back to source, and without
// Duplicate, Replace and the order).
// The Lock of the Camera turns `camera.locked` over (docs/scene-state-v2.md). A paint group has Bring to front / Send to
// back and Lock / Delete (docs/studio-ui.md "ペイントのまとまり"). Not yet here: the multi-selection; Replace waits for a
// file picker below the old UI.
export function selectionBar({ state, row, mode = "translate", readOnly = false, tab = "3d", upstream = [] }) {
  const kind = selectedKind(state, row, upstream);
  if (!kind) return null;
  if (kind === "camera" && tab === "camera") return null;
  const button = (key, icon, label, extra = {}) => ({ key, icon, label, tip: extra.tip ?? label, active: !!extra.active, disabled: !!extra.disabled });
  const shown = shownGizmoMode(kind, mode);
  const gizmo = gizmoModes(kind).map((entry) => button(`gizmo:${entry.mode}`, entry.icon, entry.label, {
    tip: `${entry.label} (${entry.key})`,
    active: entry.mode === shown,
  }));
  const lockButton = (locked) => button("lock", locked ? ICON.lock_closed : ICON.lock_open, locked ? "Unlock" : "Lock", { disabled: readOnly });
  if (kind === "camera") {
    return { kind, icon: ICON.camera, name: "Camera", fixedName: true, groups: [gizmo, [lockButton(state.camera?.locked === true)]] };
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
  const inherited = theirs && !upstreamStickerEditable(sticker);
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
  const groups = [first, copy, keep];
  if (theirs || port) {
    const tip = inherited ? INHERITED_TIP : `Back to source · every value back to the ${theirs ? "upstream's" : "input's"}`;
    groups.push([button("revert", ICON.back_initial, "Back to source", { disabled: edits, tip })]);
  }
  return { kind, icon: kind === "sky" ? ICON.pano : ICON.box, name: sceneStickerLabel(sticker), fixedName: false, groups };
}
