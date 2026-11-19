// docs/studio-ui.md "ショートカットの一覧" (web_src/studio/shortcuts.js): the editor's key table the handlers read, and
// the list built from it, the movement keys' table and the buttons' table, so the list cannot drift from the keys.
import assert from "node:assert/strict";
import test from "node:test";

import { MOVE_KEY_CODES } from "../web_src/pano_view_keys.js";
import { EDITOR_KEYS, editorKeyAction, shortcutList } from "../web_src/studio/shortcuts.js";
import { FINE_FACTOR } from "../web_src/studio/ui_drag.js";
import { navigationAction } from "../web_src/studio/view_input.js";
import { ROTATE_SNAP_DEG } from "../web_src/studio/view_scale.js";

const key = (fields) => ({ key: "", code: "", ctrlKey: false, metaKey: false, altKey: false, shiftKey: false, repeat: false, ...fields });
// Every ref the list shows, wherever it shows it: the header's close keys, the View table's cells, the movement keys,
// the rows.
function refsOf(list) {
  const refs = [...list.close.refs];
  for (const group of list.groups) {
    for (const row of group.table?.rows ?? []) for (const cell of row.cells) if (cell) refs.push(...cell.refs);
    if (group.moves) refs.push(...group.moves.rows.flat().map((item) => item.ref), ...group.moves.fast.refs);
    for (const row of group.rows) refs.push(...row.refs);
  }
  return refs;
}
const groupOf = (list, id) => list.groups.find((group) => group.id === id);
const rowOf = (list, label) => list.groups.flatMap((group) => group.rows).find((row) => row.label === label);
const labelsOf = (list) => list.groups.flatMap((group) => group.rows.map((row) => row.label));
// The View table as { gesture: [as is, with Alt] } labels ("—" where nothing).
const tableOf = (list) => Object.fromEntries((groupOf(list, "view").table?.rows ?? []).map((row) => [row.gesture, row.cells.map((cell) => cell?.label ?? "—")]));
const full = shortcutList({ tab: "3d", panorama: false, readOnly: false, mac: false });

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

test("every button and Alt the stage's navigation takes is in the View table, in the cell of the operation it starts", () => {
  const listed = new Map();
  for (const row of groupOf(full, "view").table.rows) {
    for (const cell of row.cells) for (const ref of cell?.refs ?? []) if (ref.startsWith("button:")) listed.set(ref, cell.label);
  }
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

// The table puts operations that differ only by Alt side by side (docs/studio-ui.md "ショートカットの一覧").
test("the View group is a table of the mouse's gestures by Alt, with the movement keys as they lie", () => {
  const view = groupOf(full, "view");
  assert.deepEqual(view.table.head, ["as is", "Alt"]);
  assert.deepEqual(tableOf(full), {
    Drag: ["Look around", "Orbit"],
    "Right-drag": ["Pan", "Move forward / back"],
    Wheel: ["Move toward the pointer", "Zoom (FOV)"],
    "Double-click": ["Look at that point", "—"],
  });
  assert.deepEqual(view.table.rows.map((row) => row.mouse), ["left", "right", "wheel", "left"]);
  assert.equal(view.table.note, "Middle-drag works like Drag. Pinch zooms like Alt + Wheel.");
  assert.deepEqual(view.moves.rows.map((row) => row.map((item) => `${item.cap} ${item.name}`)), [
    ["Q down", "W forward", "E up"],
    ["A left", "S back", "D right"],
  ]);
  assert.deepEqual(view.moves.fast.keys, [["Shift"]]);
  // Ctrl + wheel is the pinch and never shown.
  assert.ok(!refsOf(full).some((ref) => /ctrl/i.test(ref)));
});

test("the list shows each key as the table has it, Ctrl as ⌘ on macOS, and what a gesture is done on", () => {
  assert.deepEqual(rowOf(full, "Undo").keys, [["Ctrl", "Z"]]);
  assert.deepEqual(rowOf(full, "Redo").keys, [["Shift", "Ctrl", "Z"]]);
  const mac = shortcutList({ tab: "3d", panorama: false, readOnly: false, mac: true });
  assert.deepEqual(rowOf(mac, "Undo").keys, [["⌘", "Z"]]);
  assert.deepEqual(rowOf(full, "Delete").keys, [["Delete"], ["Backspace"]]);
  assert.deepEqual(rowOf(full, "Move / Rotate / Scale").keys, [["1"], ["2"], ["3"]]);
  assert.deepEqual(rowOf(full, "Step back / close").keys, [["Esc"]]);
  assert.deepEqual(rowOf(full, "Copy / Cut / Paste").keys, [["Ctrl", "C"], ["Ctrl", "X"], ["Ctrl", "V"]]);
  assert.deepEqual(rowOf(mac, "Copy / Cut / Paste").keys, [["⌘", "C"], ["⌘", "X"], ["⌘", "V"]]);
  // The same Shift + drag means different things on different things: each row says on what.
  assert.deepEqual([`Rotate in ${ROTATE_SNAP_DEG}° steps`, `Fine steps (×${FINE_FACTOR})`, "Add to selection"].map((label) => [rowOf(full, label).keys, rowOf(full, label).gesture]), [
    [[["Shift"]], "drag a ring"],
    [[["Shift"]], "drag a value"],
    [[["Shift"]], "click / drag"],
  ]);
  assert.deepEqual(rowOf(full, "Select").gesture, "Click it");
  // "?" and Escape close it, named once in the header rather than in a row.
  assert.deepEqual(full.close.keys, [["?"], ["Esc"]]);
  assert.equal(rowOf(full, "Show shortcuts"), undefined);
});

test("the groups keep their seats: three columns in the editor, the path line's operations in the 3D tab", () => {
  assert.equal(full.name, "3D tab");
  assert.equal(full.columns, 3);
  assert.deepEqual(full.groups.map((group) => [group.id, group.title, group.column]), [
    ["view", "View", 0],
    ["objects", "Objects", 1],
    ["path", "Path line", 1],
    ["timeline", "Timeline", 2],
    ["editing", "Editing", 2],
  ]);
  assert.deepEqual(groupOf(full, "path").rows.map((row) => [row.label, row.gesture, row.icon]), [
    ["Go to that Keyframe", "Click a point", "point"],
    ["Corner ⇄ Auto", "Double-click a point", "point"],
    ["Bend", "Drag a handle", "handle"],
    ["Go to that frame", "Click the line", "line"],
  ]);
  for (const options of [{ tab: "camera" }, { tab: "camera", panorama: true }, { tab: "3d", readOnly: true }]) {
    assert.deepEqual(shortcutList(options).groups.map((group) => [group.id, group.column]), full.groups.map((group) => [group.id, group.column]), JSON.stringify(options));
  }
});

test("the list shows only what works on the screen: the tab, Panorama mode, a read-only editor", () => {
  const frame = shortcutList({ tab: "camera", panorama: false, readOnly: false, mac: false });
  assert.equal(frame.name, "Camera tab · Frame");
  assert.equal(groupOf(frame, "view").aside, "These move the Camera.");
  // A double click turns the Camera in the Frame view (docs/space-and-view.md "マウスとキー").
  assert.deepEqual(tableOf(frame)["Double-click"], ["Look at that point", "—"]);
  assert.ok(!labelsOf(frame).includes("Move / Rotate / Scale"), "no gizmo in the Camera tab");
  assert.equal(groupOf(frame, "objects").note, "Move, Rotate and Scale are in the 3D tab.");
  assert.deepEqual(groupOf(frame, "path").rows, []);
  assert.equal(groupOf(frame, "path").note, "The path line is drawn in the 3D tab.");
  assert.ok(labelsOf(frame).includes("Select"));
  assert.deepEqual(rowOf(frame, `Roll in ${ROTATE_SNAP_DEG}° steps`).gesture, "drag the Roll ruler");
  assert.ok(!labelsOf(full).includes(`Roll in ${ROTATE_SNAP_DEG}° steps`), "no Roll ruler in the 3D tab");
  const erp = shortcutList({ tab: "camera", panorama: true, readOnly: false, mac: false });
  assert.equal(erp.name, "Camera tab · Panorama");
  assert.equal(groupOf(erp, "view").table, null);
  assert.equal(groupOf(erp, "view").moves, null);
  assert.equal(groupOf(erp, "view").note, "Nothing moves the view in Panorama mode.");
  assert.ok(!labelsOf(erp).includes("Select"), "nothing selects in Panorama mode's frame");
  const readOnly = shortcutList({ tab: "3d", panorama: false, readOnly: true, mac: false });
  for (const label of ["Undo", "Redo", "Delete", "Move / Rotate / Scale", `Fine steps (×${FINE_FACTOR})`, "Copy / Cut / Paste", "Corner ⇄ Auto", "Bend"]) {
    assert.ok(!labelsOf(readOnly).includes(label), `${label} is not shown read-only`);
  }
  assert.ok(labelsOf(readOnly).includes("Play / pause") && labelsOf(readOnly).includes("Go to that Keyframe"));
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


test("the Preview window's list (context preview) has no selection or editing rows, only the view, play and the window's keys", () => {
  const preview = shortcutList({ context: "preview", playable: true, mac: false });
  assert.equal(preview.name, null);
  assert.equal(preview.columns, 2);
  for (const label of ["Select", "Add to selection", "Move / Rotate / Scale", `Rotate in ${ROTATE_SNAP_DEG}° steps`, "Delete",
    "Copy / Cut / Paste", "Undo", "Redo", `Fine steps (×${FINE_FACTOR})`, `Roll in ${ROTATE_SNAP_DEG}° steps`, "Go to that Keyframe"]) {
    assert.ok(!labelsOf(preview).includes(label), `${label} is not in the Preview's list`);
  }
  for (const ref of refsOf(preview).filter((item) => item.startsWith("key:"))) {
    assert.ok(["key:play", "key:shortcuts", "key:escape"].includes(ref), `${ref} is a key the Preview window takes`);
  }
  assert.deepEqual(preview.groups.map((group) => [group.id, group.column]), [["view", 0], ["playback", 1], ["editing", 1]]);
  assert.equal(groupOf(preview, "playback").title, "Playback");
  // The view is the editor's 3D tab's, from the same tables.
  assert.deepEqual(groupOf(preview, "view").table, groupOf(full, "view").table);
  assert.deepEqual(rowOf(preview, "Play / pause").keys, [["Space"]]);
  assert.deepEqual(groupOf(preview, "editing").rows.map((row) => row.label), ["Step back / close"]);
  // Without the playback strip, Space does nothing there, so the row and its group are not shown.
  const still = shortcutList({ context: "preview", playable: false });
  assert.deepEqual(still.groups.map((group) => group.id), ["view", "editing"]);
});

// docs/studio-ui.md "ショートカットの一覧" (ADR 0061): the wheel moves toward the pointer; Alt + wheel and a pinch zoom
// (always in the 3D tab and the Preview window; named Change Camera FOV in the Camera tab's Frame mode, and only where the
// Camera moves); Panorama mode has no table.
test("the Wheel row: Move toward the pointer, and Zoom (FOV) or Change Camera FOV where it works", () => {
  assert.deepEqual(tableOf(shortcutList({ tab: "3d", readOnly: true })).Wheel, ["Move toward the pointer", "Zoom (FOV)"]);
  assert.deepEqual(tableOf(shortcutList({ context: "preview" })).Wheel, ["Move toward the pointer", "Zoom (FOV)"]);
  const frame = shortcutList({ tab: "camera", panorama: false });
  assert.deepEqual(tableOf(frame).Wheel, ["Move toward the pointer", "Change Camera FOV"]);
  assert.equal(groupOf(frame, "view").table.note, "Middle-drag works like Drag. Pinch changes the FOV like Alt + Wheel.");
  for (const options of [{ readOnly: true }, { locked: true }]) {
    const off = shortcutList({ tab: "camera", panorama: false, ...options });
    assert.deepEqual(tableOf(off).Wheel, ["Move toward the pointer", "—"]);
    assert.equal(groupOf(off, "view").table.note, "Middle-drag works like Drag.", "no pinch where it does nothing");
  }
});
