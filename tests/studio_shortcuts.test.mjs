// docs/studio-ui.md "ショートカットの一覧" (web_src/studio/shortcuts.js): the editor's key table the handlers read, and
// the list built from it, the movement keys' table and the buttons' table, so the list cannot drift from the keys.
import assert from "node:assert/strict";
import test from "node:test";

import { MOVE_KEY_CODES } from "../web_src/pano_view_keys.js";
import { EDITOR_KEYS, editorKeyAction, shortcutGroups } from "../web_src/studio/shortcuts.js";
import { FINE_FACTOR } from "../web_src/studio/ui_drag.js";
import { navigationAction } from "../web_src/studio/view_input.js";
import { ROTATE_SNAP_DEG } from "../web_src/studio/view_scale.js";

const key = (fields) => ({ key: "", code: "", ctrlKey: false, metaKey: false, altKey: false, shiftKey: false, repeat: false, ...fields });
const refsOf = (groups) => groups.flatMap((group) => group.rows.flatMap((row) => row.refs));
const rowOf = (groups, label) => groups.flatMap((group) => group.rows).find((row) => row.label === label);
const full = shortcutGroups({ tab: "3d", panorama: false, readOnly: false, mac: false });

test("every key of the handlers' tables is in the list, and the list names no key outside them", () => {
  const refs = refsOf(full);
  const tableRefs = [
    ...EDITOR_KEYS.map((entry) => `key:${entry.action}`),
    ...MOVE_KEY_CODES.map((code) => `code:${code}`),
  ];
  for (const ref of tableRefs) assert.ok(refs.includes(ref), `${ref} is in the list`);
  for (const ref of refs.filter((item) => item.startsWith("key:") || item.startsWith("code:"))) {
    assert.ok(tableRefs.includes(ref), `${ref} is a key the handlers take`);
  }
  assert.equal(new Set(refs).size, refs.length, "each key once");
});

test("every button and Alt the stage's navigation takes is in the list, each under the operation it starts", () => {
  const listed = new Map();
  for (const group of full) for (const row of group.rows) for (const ref of row.refs) if (ref.startsWith("button:")) listed.set(ref, row.label);
  const labels = { look: "Look around", orbit: "Orbit", pan: "Pan", joystick: "Move forward / back" };
  const taken = [];
  for (const button of [0, 1, 2, 3, 4]) {
    for (const altKey of [false, true]) {
      const action = navigationAction({ button, altKey, shiftKey: false, ctrlKey: false, metaKey: false });
      if (!action) continue;
      const ref = `button:${button}${altKey ? "+alt" : ""}`;
      taken.push(ref);
      assert.equal(listed.get(ref), labels[action], ref);
    }
  }
  assert.deepEqual([...listed.keys()].sort(), taken.sort());
});

test("the list shows each key as the table has it, Ctrl as ⌘ on macOS", () => {
  assert.deepEqual(rowOf(full, "Undo").keys, [["Ctrl", "Z"]]);
  assert.deepEqual(rowOf(full, "Redo").keys, [["Shift", "Ctrl", "Z"]]);
  const mac = shortcutGroups({ tab: "3d", panorama: false, readOnly: false, mac: true });
  assert.deepEqual(rowOf(mac, "Undo").keys, [["⌘", "Z"]]);
  assert.deepEqual(rowOf(full, "Delete").keys, [["Delete"], ["Backspace"]]);
  assert.deepEqual(rowOf(full, "Move / Rotate / Scale").keys, [["1"], ["2"], ["3"]]);
  assert.deepEqual(rowOf(full, "Move forward / back").keys, [["Alt", "Middle-drag"]]);
  assert.deepEqual(rowOf(full, "Move").keys, [["W"], ["S"], ["A"], ["D"], ["Q"], ["E"]]);
  assert.deepEqual(rowOf(full, "Orbit").keys, [["Alt", "Drag"], ["Alt", "Right-drag"]]);
  assert.deepEqual(rowOf(full, "Show shortcuts").keys, [["?"]]);
  assert.deepEqual(rowOf(full, "Step back / close").keys, [["Esc"]]);
  assert.deepEqual(rowOf(full, "Copy keyframes").keys, [["Ctrl", "C"]]);
  assert.deepEqual(rowOf(full, "Cut keyframes").keys, [["Ctrl", "X"]]);
  assert.deepEqual(rowOf(mac, "Paste at the playhead").keys, [["⌘", "V"]]);
});

test("the groups come in their order, and the numbers in the rows are their owners'", () => {
  assert.deepEqual(full.map((group) => group.title), ["View", "Objects", "Timeline", "Editor"]);
  assert.ok(rowOf(full, `Rotate in ${ROTATE_SNAP_DEG}° steps`), "Shift on the gizmo's Rotate and the sky image's handle");
  assert.ok(rowOf(full, `Fine steps (×${FINE_FACTOR})`), "Shift on a value's drag");
});

test("the list shows only what works on the screen: the tab, Panorama mode, a read-only editor", () => {
  const labels = (groups) => groups.flatMap((group) => group.rows.map((row) => row.label));
  const frame = shortcutGroups({ tab: "camera", panorama: false, readOnly: false, mac: false });
  assert.equal(frame[0].note, "These move the Camera.");
  assert.ok(!labels(frame).includes("Look at a point"), "no double-click in the Frame view");
  assert.ok(!labels(frame).includes("Move / Rotate / Scale"), "no gizmo in the Camera tab");
  assert.ok(labels(frame).includes("Select"));
  assert.ok(labels(frame).includes(`Roll in ${ROTATE_SNAP_DEG}° steps`), "Shift on the Roll ruler");
  assert.ok(!labels(full).includes(`Roll in ${ROTATE_SNAP_DEG}° steps`), "no Roll ruler in the 3D tab");
  const erp = shortcutGroups({ tab: "camera", panorama: true, readOnly: false, mac: false });
  assert.equal(erp[0].note, "Nothing moves the view in Panorama mode.");
  assert.deepEqual(erp[0].rows, []);
  assert.ok(!labels(erp).includes("Select"), "nothing selects in Panorama mode's frame");
  const readOnly = shortcutGroups({ tab: "3d", panorama: false, readOnly: true, mac: false });
  for (const label of ["Undo", "Redo", "Delete", "Move / Rotate / Scale", `Fine steps (×${FINE_FACTOR})`, "Copy keyframes", "Cut keyframes", "Paste at the playhead"]) {
    assert.ok(!labels(readOnly).includes(label), `${label} is not shown read-only`);
  }
  assert.ok(labels(readOnly).includes("Show shortcuts") && labels(readOnly).includes("Play / pause"));
  assert.equal(full[0].note, null);
});

test("editorKeyAction: one action per key event, as the handlers had them", () => {
  assert.equal(editorKeyAction(key({ key: "z", ctrlKey: true })), "undo");
  assert.equal(editorKeyAction(key({ key: "Z", metaKey: true, shiftKey: true })), "redo");
  assert.equal(editorKeyAction(key({ key: "z", ctrlKey: true, altKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "Backspace" })), "delete");
  assert.equal(editorKeyAction(key({ key: "Delete", ctrlKey: true })), null);
  assert.equal(editorKeyAction(key({ key: " ", code: "Space" })), "play");
  assert.equal(editorKeyAction(key({ key: " ", code: "Space", repeat: true })), null);
  assert.equal(editorKeyAction(key({ key: "2" })), "gizmo:rotate");
  assert.equal(editorKeyAction(key({ key: "2", altKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "Escape", shiftKey: true })), "escape");
  assert.equal(editorKeyAction(key({ key: "?", shiftKey: true })), "shortcuts");
  assert.equal(editorKeyAction(key({ key: "?", ctrlKey: true, shiftKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "?", altKey: true, shiftKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "w", code: "KeyW" })), null, "the movement keys are the stage's");
  // The Keyframes' copy, cut and paste (docs/timeline-ui.md "Keyframe のコピーと貼り付け"): by the key's letter, by its
  // place for a layout whose letters are not Latin.
  assert.equal(editorKeyAction(key({ key: "c", code: "KeyC", ctrlKey: true })), "copy-keys");
  assert.equal(editorKeyAction(key({ key: "x", code: "KeyX", metaKey: true })), "cut-keys");
  assert.equal(editorKeyAction(key({ key: "v", code: "KeyV", ctrlKey: true })), "paste-keys");
  assert.equal(editorKeyAction(key({ key: "м", code: "KeyV", ctrlKey: true })), "paste-keys");
  assert.equal(editorKeyAction(key({ key: "c", code: "KeyI", ctrlKey: true })), "copy-keys");
  assert.equal(editorKeyAction(key({ key: "j", code: "KeyC", ctrlKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "v", code: "KeyV", ctrlKey: true, shiftKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "v", code: "KeyV", ctrlKey: true, altKey: true })), null);
  assert.equal(editorKeyAction(key({ key: "v", code: "KeyV" })), null);
});
