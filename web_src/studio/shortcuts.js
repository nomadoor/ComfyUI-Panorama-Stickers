// The new UI's editor keys and its list of shortcuts (docs/studio-ui.md "ショートカットの一覧"). EDITOR_KEYS is the one
// table of the editor's keys: studio/editor.js and studio/stage.js (Escape) take the keys it names, and the list shows
// the same entries, so the two cannot drift. Which key goes to the stage at all is the caller's (stageOwnsKey).
import { MOVE_KEYS } from "../pano_view_keys.js";
import { GIZMO_MODES } from "./selection_bar.js";
import { FINE_FACTOR } from "./ui_drag.js";
import { navigationAction } from "./view_input.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";

const ctrlOrMeta = (event) => !!(event.ctrlKey || event.metaKey);
const keyOf = (event) => String(event.key || "");

// { action, keys, match(event) }. keys: the key combinations that do it, each a list of key caps as the list shows
// them ("Mod" is Ctrl, or ⌘ on macOS). The entries are disjoint: one key event matches one entry at most.
export const EDITOR_KEYS = Object.freeze([
  Object.freeze({
    action: "undo",
    keys: [["Mod", "Z"]],
    match: (event) => ctrlOrMeta(event) && !event.altKey && !event.shiftKey && keyOf(event).toLowerCase() === "z",
  }),
  Object.freeze({
    action: "redo",
    keys: [["Shift", "Mod", "Z"]],
    match: (event) => ctrlOrMeta(event) && !event.altKey && !!event.shiftKey && keyOf(event).toLowerCase() === "z",
  }),
  Object.freeze({
    action: "delete",
    keys: [["Delete"], ["Backspace"]],
    match: (event) => !ctrlOrMeta(event) && (event.key === "Delete" || event.key === "Backspace"),
  }),
  // A key repeat of Space does nothing (docs/timeline-ui.md "タイムラインの表示").
  Object.freeze({
    action: "play",
    keys: [["Space"]],
    match: (event) => !ctrlOrMeta(event) && event.code === "Space" && !event.repeat,
  }),
  // 1, 2, 3: the gizmo's modes (selection_bar.js GIZMO_MODES), for the selected object that has the mode.
  ...GIZMO_MODES.map((entry) => Object.freeze({
    action: `gizmo:${entry.mode}`,
    keys: [[entry.key]],
    match: (event) => !ctrlOrMeta(event) && !event.altKey && event.key === entry.key,
  })),
  // "?" opens and closes the list (Shift types it on most layouts, so Shift is allowed).
  Object.freeze({
    action: "shortcuts",
    keys: [["?"]],
    match: (event) => !ctrlOrMeta(event) && !event.altKey && event.key === "?",
  }),
  // Escape takes back one thing (docs/studio-ui.md "閉じ方"); the stage receives it (stage.js).
  Object.freeze({
    action: "escape",
    keys: [["Esc"]],
    match: (event) => event.key === "Escape",
  }),
]);

// The action of EDITOR_KEYS a keydown `event` asks for, or null.
export function editorKeyAction(event) {
  return EDITOR_KEYS.find((entry) => entry.match(event))?.action ?? null;
}

// --- The list.

const keysOf = (action) => EDITOR_KEYS.find((entry) => entry.action === action).keys;
const keyRow = (label, ...actions) => ({
  label,
  keys: actions.flatMap(keysOf),
  refs: actions.map((action) => `key:${action}`),
});

// The buttons the stage's navigation takes (view_input.js navigationAction), as the list names them.
const BUTTON_NAMES = Object.freeze({ 0: "Drag", 2: "Right-drag", 1: "Middle-drag" });
const NAVIGATION_LABELS = Object.freeze({ look: "Look around", orbit: "Orbit", pan: "Pan", joystick: "Move forward / back" });

// action -> { keys, refs } of every button and Alt that starts it.
function navigationRows() {
  const rows = {};
  for (const altKey of [false, true]) {
    for (const [button, name] of Object.entries(BUTTON_NAMES)) {
      const action = navigationAction({ button: Number(button), altKey, shiftKey: false, ctrlKey: false, metaKey: false });
      if (!action || !NAVIGATION_LABELS[action]) continue;
      rows[action] ??= { label: NAVIGATION_LABELS[action], keys: [], refs: [] };
      rows[action].keys.push(altKey ? ["Alt", name] : [name]);
      rows[action].refs.push(`button:${button}${altKey ? "+alt" : ""}`);
    }
  }
  return rows;
}

// The movement keys (pano_view_keys.js MOVE_KEYS), in the order of `moves` ([axis, sign]).
function moveRow(label, moves) {
  const codes = moves.map(([axis, sign]) => Object.keys(MOVE_KEYS).find((code) => MOVE_KEYS[code][0] === axis && MOVE_KEYS[code][1] === sign));
  return { label, keys: codes.map((code) => [code.replace(/^Key/, "")]), refs: codes.map((code) => `code:${code}`) };
}

// A row of a pointer gesture with a modifier, which its owner handles (the list only shows it).
const gestureRow = (label, keys, ref) => ({ label, keys, refs: [`pointer:${ref}`] });

// The groups of the list for the screen now: [{ id, title, note, rows: [{ label, keys: [[cap]], refs }] }].
// tab: "3d" | "camera"; panorama: the Camera's mode is Panorama; readOnly: the editor edits nothing; mac: Ctrl shows
// as ⌘. A row's `keys` are the combinations that do it; `refs` name the table entries they come from.
export function shortcutGroups({ tab = "3d", panorama = false, readOnly = false, mac = false } = {}) {
  const space = tab !== "camera";
  const still = !space && panorama;
  const edits = !readOnly;
  const nav = navigationRows();

  const view = still
    ? []
    : [
      nav.look,
      nav.orbit,
      nav.pan,
      nav.joystick,
      moveRow("Move", [["forward", 1], ["forward", -1], ["right", -1], ["right", 1], ["up", -1], ["up", 1]]),
      gestureRow("Move faster (hold)", [["Shift"]], "move-fast"),
      gestureRow("Zoom to the pointer", [["Wheel"]], "wheel"),
      ...(space ? [gestureRow("Look at a point", [["Double-click"]], "double-click")] : []),
    ];
  const objects = [
    ...(still ? [] : [gestureRow("Select", [["Click"]], "click")]),
    ...(space && edits ? [
      { label: "Move / Rotate / Scale", ...(() => {
        const actions = GIZMO_MODES.map((entry) => `gizmo:${entry.mode}`);
        return { keys: actions.flatMap(keysOf), refs: actions.map((action) => `key:${action}`) };
      })() },
      gestureRow(`Rotate in ${ROTATE_SNAP_DEG}° steps`, [["Shift", "Drag"]], "rotate-snap"),
    ] : []),
    ...(edits ? [keyRow("Delete", "delete")] : []),
  ];
  const timeline = [
    keyRow("Play / pause", "play"),
    gestureRow("Add to selection", [["Shift", "Click"], ["Shift", "Drag"]], "add-keyframes"),
  ];
  const editor = [
    ...(edits ? [keyRow("Undo", "undo"), keyRow("Redo", "redo"), gestureRow(`Fine steps (×${FINE_FACTOR})`, [["Shift", "Drag"]], "fine")] : []),
    // The Camera tab's Roll ruler stops at the rotation's steps with Shift (frame_layout.js rulerSnapValue).
    ...(edits && !space ? [gestureRow(`Roll in ${ROTATE_SNAP_DEG}° steps`, [["Shift", "Drag"]], "roll-snap")] : []),
    keyRow("Show shortcuts", "shortcuts"),
    keyRow("Step back / close", "escape"),
  ];

  const mod = mac ? "⌘" : "Ctrl";
  const shown = (rows) => rows.map((row) => ({ ...row, keys: row.keys.map((combo) => combo.map((cap) => (cap === "Mod" ? mod : cap))) }));
  let note = null;
  if (still) note = "Nothing moves the view in Panorama mode.";
  else if (!space) note = "These move the Camera.";
  return [
    { id: "view", title: "View", note, rows: shown(view) },
    { id: "objects", title: "Objects", note: null, rows: shown(objects) },
    { id: "timeline", title: "Timeline", note: null, rows: shown(timeline) },
    { id: "editor", title: "Editor", note: null, rows: shown(editor) },
  ];
}
