// The new UI's editor keys and its list of shortcuts (docs/studio-ui.md "ショートカットの一覧"). EDITOR_KEYS is the one
// table of the editor's keys: studio/editor.js and studio/stage.js (Escape) take the keys it names, and the list shows
// the same entries, so the two cannot drift. Which key goes to the stage at all is the caller's (stageOwnsKey).
import { GIZMO_MODES } from "./selection_bar.js";

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
