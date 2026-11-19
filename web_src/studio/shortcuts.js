// The new UI's editor keys and its list of shortcuts (docs/studio-ui.md "ショートカットの一覧"). EDITOR_KEYS is the one
// table of the editor's keys: studio/editor.js and studio/stage.js (Escape) take the keys it names, and the list shows
// the same entries, so the two cannot drift. Which key goes to the stage at all is the caller's (stageOwnsKey).
import { MOVE_KEYS } from "../pano_view_keys.js";
import { GESTURE_NAMES } from "./input_names.js";
import { GIZMO_MODES } from "./selection_bar.js";
import { FINE_FACTOR } from "./ui_drag.js";
import { navigationAction } from "./view_input.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";

// Whether the page runs on a Mac (or an iPhone / iPad): the list of shortcuts names Cmd and Option there.
export function isMacPlatform() {
  return /Mac|iPhone|iPad/.test(globalThis.navigator?.platform || globalThis.navigator?.userAgent || "");
}

const ctrlOrMeta = (event) => !!(event.ctrlKey || event.metaKey);
const keyOf = (event) => String(event.key || "");

// The letter of Ctrl / Cmd + C, X or V: the key's letter, or its place on the keyboard for a layout whose letters
// are not Latin; else null.
const LETTER_CODES = Object.freeze({ KeyC: "c", KeyX: "x", KeyV: "v" });
function modLetter(event) {
  const key = keyOf(event).toLowerCase();
  if (Object.values(LETTER_CODES).includes(key)) return key;
  return /^[a-z]$/.test(key) ? null : LETTER_CODES[event.code] ?? null;
}
const modLetterKey = (action, letter) => Object.freeze({
  action,
  keys: [["Mod", letter.toUpperCase()]],
  match: (event) => ctrlOrMeta(event) && !event.altKey && !event.shiftKey && modLetter(event) === letter,
});

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
  // The Keyframes' copy, cut and paste at the playhead (docs/timeline-ui.md "Keyframe のコピーと貼り付け").
  modLetterKey("copy-keys", "c"),
  modLetterKey("cut-keys", "x"),
  modLetterKey("paste-keys", "v"),
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

// --- The list (docs/studio-ui.md "ショートカットの一覧"): every operation that works on the screen, in groups with fixed
// seats. The View group is a table of the mouse's gestures by Alt, so operations that differ only by Alt sit side by
// side; the movement keys are drawn as they lie on the keyboard.

const keysOf = (action) => EDITOR_KEYS.find((entry) => entry.action === action).keys;
const keyRow = (label, ...actions) => ({
  label,
  keys: actions.flatMap(keysOf),
  refs: actions.map((action) => `key:${action}`),
});

// A row of a pointer gesture, which its owner handles (the list only shows it): `keys` the modifiers held, `gesture`
// what to do and on what ("drag a ring"), `icon` the path line's part it is done on ("point" | "handle" | "line").
const gestureRow = (label, keys, gesture, ref, icon = null) => ({ label, keys, gesture, icon, refs: [`pointer:${ref}`] });

const NAVIGATION_LABELS = Object.freeze({ look: "Look around", orbit: "Orbit", pan: "Pan", joystick: "Move forward / back" });
const navigationLabel = (button, altKey) => NAVIGATION_LABELS[navigationAction({ button, altKey, shiftKey: false, ctrlKey: false, metaKey: false })] ?? null;
const LEFT = 0;
const MIDDLE = 1;
const RIGHT = 2;

// The View group's table: a row per gesture of the mouse ({ gesture, mouse: "left" | "right" | "wheel", cells: [as is,
// with Alt], each { label, refs } or null }) and the line under it. The drags come from view_input.js navigationAction;
// the middle button's refs go to the Drag row's cells when it does what the left does, which the line under the table
// says. `zoom`: the label of Alt + wheel, or null where it does nothing; `pinch`: the line's words for the pinch.
function viewTable({ zoom, pinch }) {
  const cell = (label, refs) => (label ? { label, refs } : null);
  const dragCell = (altKey) => {
    const label = navigationLabel(LEFT, altKey);
    const alt = altKey ? "+alt" : "";
    const refs = [`button:${LEFT}${alt}`];
    if (navigationLabel(MIDDLE, altKey) === label) refs.push(`button:${MIDDLE}${alt}`);
    return cell(label, refs);
  };
  const rows = [
    { gesture: GESTURE_NAMES.drag, mouse: "left", cells: [dragCell(false), dragCell(true)] },
    { gesture: GESTURE_NAMES.rightDrag, mouse: "right", cells: [cell(navigationLabel(RIGHT, false), [`button:${RIGHT}`]), cell(navigationLabel(RIGHT, true), [`button:${RIGHT}+alt`])] },
    { gesture: GESTURE_NAMES.wheel, mouse: "wheel", cells: [cell("Move toward the pointer", ["pointer:wheel"]), cell(zoom, ["pointer:zoom"])] },
    // Alt does not change a double click (docs/space-and-view.md "マウスとキー").
    { gesture: GESTURE_NAMES.doubleClick, mouse: "left", cells: [cell("Look at that point", ["pointer:double-click"]), cell("Look at that point", ["pointer:double-click+alt"])] },
  ];
  const middleLikeLeft = [false, true].every((altKey) => navigationLabel(MIDDLE, altKey) === navigationLabel(LEFT, altKey));
  // A middle button that does something else gets a row of its own.
  if (!middleLikeLeft) {
    rows.splice(1, 0, { gesture: GESTURE_NAMES.middleDrag, mouse: "middle", cells: [false, true].map((altKey) => cell(navigationLabel(MIDDLE, altKey), [`button:${MIDDLE}${altKey ? "+alt" : ""}`])) });
  }
  const notes = [];
  if (middleLikeLeft) notes.push(`${GESTURE_NAMES.middleDrag} works like ${GESTURE_NAMES.drag}.`);
  if (zoom) notes.push(`${GESTURE_NAMES.pinch} ${pinch} like Alt + ${GESTURE_NAMES.wheel}.`);
  return { head: ["as is", "Alt"], rows, note: notes.join(" ") };
}

// The movement keys (pano_view_keys.js MOVE_KEYS) as they lie on the keyboard: rows of { cap, name, ref }, then Shift.
const MOVE_LAYOUT = Object.freeze([
  [["up", -1, "down"], ["forward", 1, "forward"], ["up", 1, "up"]],
  [["right", -1, "left"], ["forward", -1, "back"], ["right", 1, "right"]],
]);
function moveKeys() {
  const codeOf = (axis, sign) => Object.keys(MOVE_KEYS).find((code) => MOVE_KEYS[code][0] === axis && MOVE_KEYS[code][1] === sign);
  const rows = MOVE_LAYOUT.map((row) => row.map(([axis, sign, name]) => {
    const code = codeOf(axis, sign);
    return { cap: code.replace(/^Key/, ""), name, ref: `code:${code}` };
  }));
  return { label: "Move", rows, fast: { keys: [["Shift"]], label: "to move faster", refs: ["pointer:move-fast"] } };
}

// The list for the screen now: { name, columns, close: { keys, refs }, groups: [{ id, title, column, aside, note, table,
// moves, rows: [{ label, keys: [[cap]], gesture, icon, refs }] }] }.
// context: "editor" (Panorama Studio's editor) | "preview" (the Preview window: nothing to select or edit, the 3D tab's
// view, no timeline; docs/studio-ui.md "ショートカットの一覧"). tab: "3d" | "camera"; panorama: the Camera's mode is
// Panorama; readOnly: the editor edits nothing; locked: the Camera is locked; playable: the Preview window has its
// playback strip; mac: Ctrl shows as ⌘. A row's `keys` are the combinations that do it; `refs` name the table entries
// they come from. Every group keeps its seat on every screen of the editor: one with nothing to show says why (`note`).
export function shortcutList({ context = "editor", tab = "3d", panorama = false, readOnly = false, locked = false, playable = false, mac = false } = {}) {
  const preview = context === "preview";
  const space = preview || tab !== "camera";
  const still = !space && panorama;
  const edits = !preview && !readOnly;
  // Alt + wheel: the view's FOV, or in the Frame view the Camera's H FOV, which a read-only editor or a locked Camera does
  // not change (docs/space-and-view.md "寄る"). Ctrl + wheel is the pinch and not shown.
  const zoom = space ? "Zoom (FOV)" : !readOnly && !locked ? "Change Camera FOV" : null;

  const view = {
    id: "view",
    title: "View",
    column: 0,
    aside: !space && !still ? "These move the Camera." : null,
    note: still ? "Nothing moves the view in Panorama mode." : null,
    table: still ? null : viewTable({ zoom, pinch: space ? "zooms" : "changes the FOV" }),
    moves: still ? null : moveKeys(),
    rows: [],
  };
  const objects = {
    id: "objects",
    title: "Objects",
    column: 1,
    aside: null,
    note: space ? null : "Move, Rotate and Scale are in the 3D tab.",
    table: null,
    moves: null,
    rows: [
      ...(still ? [] : [gestureRow("Select", [], "Click it", "click")]),
      ...(space && edits ? [
        { label: "Move / Rotate / Scale", ...(() => {
          const actions = GIZMO_MODES.map((entry) => `gizmo:${entry.mode}`);
          return { keys: actions.flatMap(keysOf), refs: actions.map((action) => `key:${action}`) };
        })() },
        gestureRow(`Rotate in ${ROTATE_SNAP_DEG}° steps`, [["Shift"]], "drag a ring", "rotate-snap"),
      ] : []),
      ...(edits ? [keyRow("Delete", "delete")] : []),
    ],
  };
  // The path line (docs/studio-ui.md "軌道の線") is drawn in the 3D tab only.
  const path = {
    id: "path",
    title: "Path line",
    column: 1,
    aside: null,
    note: space ? null : "The path line is drawn in the 3D tab.",
    table: null,
    moves: null,
    rows: space ? [
      gestureRow("Go to that Keyframe", [], "Click a point", "path-point", "point"),
      ...(edits ? [gestureRow("Corner ⇄ Auto", [], "Double-click a point", "path-corner", "point"), gestureRow("Bend", [], "Drag a handle", "path-handle", "handle")] : []),
      gestureRow("Go to that frame", [], "Click the line", "path-line", "line"),
    ] : [],
  };
  const timeline = {
    id: preview ? "playback" : "timeline",
    title: preview ? "Playback" : "Timeline",
    column: preview ? 1 : 2,
    aside: null,
    note: null,
    table: null,
    moves: null,
    rows: preview ? (playable ? [keyRow("Play / pause", "play")] : []) : [
      keyRow("Play / pause", "play"),
      gestureRow("Add to selection", [["Shift"]], "click / drag", "add-keyframes"),
      ...(edits ? [keyRow("Copy / Cut / Paste", "copy-keys", "cut-keys", "paste-keys")] : []),
    ],
  };
  const editing = {
    id: "editing",
    title: "Editing",
    column: preview ? 1 : 2,
    aside: null,
    note: null,
    table: null,
    moves: null,
    rows: [
      ...(edits ? [keyRow("Undo", "undo"), keyRow("Redo", "redo"), gestureRow(`Fine steps (×${FINE_FACTOR})`, [["Shift"]], "drag a value", "fine")] : []),
      // The Camera tab's Roll ruler stops at the rotation's steps with Shift (frame_layout.js rulerSnapValue).
      ...(edits && !space ? [gestureRow(`Roll in ${ROTATE_SNAP_DEG}° steps`, [["Shift"]], "drag the Roll ruler", "roll-snap")] : []),
      keyRow("Step back / close", "escape"),
    ],
  };

  const mod = mac ? "⌘" : "Ctrl";
  const shown = (keys) => keys.map((combo) => combo.map((cap) => (cap === "Mod" ? mod : cap)));
  const groups = (preview ? [view, timeline, editing] : [view, objects, path, timeline, editing])
    .map((group) => ({ ...group, rows: group.rows.map((row) => ({ gesture: null, icon: null, ...row, keys: shown(row.keys) })) }));
  let name = null;
  if (!preview) name = space ? "3D tab" : still ? "Camera tab · Panorama" : "Camera tab · Frame";
  return {
    name,
    columns: preview ? 2 : 3,
    close: { keys: [...keysOf("shortcuts"), ...keysOf("escape")], refs: ["key:shortcuts"] },
    // The Preview window shows no group without anything in it; the editor keeps every group in its seat.
    groups: preview ? groups.filter((group) => group.rows.length || group.table || group.note) : groups,
  };
}
