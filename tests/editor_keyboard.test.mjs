import assert from "node:assert/strict";
import test from "node:test";

import { createCommands } from "../web_src/editor/commands.js";
import { createKeyboard } from "../web_src/editor/keyboard.js";

const body = { tagName: "BODY" };

function setup({ freeSpace = true, confirm = false } = {}) {
  globalThis.document = { body, documentElement: { tagName: "HTML" }, hidden: false };
  const inside = new Set();
  const overlay = { contains: (target) => inside.has(target) };
  const calls = [];
  const keyboard = createKeyboard({
    editor: {},
    overlay,
    readOnly: false,
    stateV2: true,
    timeline: {},
    uiState: { timeline: { visible: true }, confirmDialog: { visible: confirm } },
  });
  const space = { free: freeSpace };
  keyboard.connect({
    cancelFrameCameraGesture() {},
    cancelViewTransition: () => calls.push("cancel"),
    closeEditor() {},
    deleteSelected() {},
    deleteSelectedKeyframes() {},
    deleteSelectedWorldSticker() {},
    getHistoryCapabilities() {},
    getSelected() {},
    canKeyMove: () => space.free,
    endFrameKeyMove: () => calls.push("end"),
    restoreHistory() {},
    setFullscreenState() {},
    startAnimation: (start) => {
      start();
      calls.push("wake");
    },
    syncFrameRollKnob() {},
    togglePlayback() {},
    updateCursor() {},
  });
  const element = (tagName, type = "") => {
    const el = { tagName, type };
    inside.add(el);
    return el;
  };
  return { keyboard, calls, space, element };
}

function key(code, target, patch = {}) {
  const event = {
    code,
    key: code.replace(/^Key/, "").toLowerCase(),
    timeStamp: 100,
    shiftKey: false,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    repeat: false,
    prevented: false,
    stopped: false,
    composedPath: () => [target],
    preventDefault() { this.prevented = true; },
    stopPropagation() { this.stopped = true; },
    ...patch,
  };
  return event;
}

test("a movement key on the 6DoF stage is taken from ComfyUI and starts the frames", (t) => {
  t.after(() => delete globalThis.document);
  const { keyboard, calls, element } = setup();
  const canvas = element("CANVAS");
  const down = key("KeyW", canvas);
  keyboard.onMoveKeyDown(down);
  assert.equal(down.prevented, true);
  assert.equal(down.stopped, true, "ComfyUI's own W (the workflows sidebar) does not run");
  assert.deepEqual(calls, ["cancel", "wake"]);
  assert.equal(keyboard.moveKeys.held, true);
  assert.deepEqual(keyboard.moveKeys.direction(), { forward: 1, right: 0, up: 0 });
  const up = key("KeyW", canvas);
  keyboard.onMoveKeyUp(up);
  assert.equal(up.stopped, true);
  assert.equal(keyboard.moveKeys.held, false);
});

test("a held key repeating neither stops a transition nor restarts the clock", (t) => {
  t.after(() => delete globalThis.document);
  const { keyboard, calls } = setup();
  keyboard.onMoveKeyDown(key("KeyD", body));
  calls.length = 0;
  const again = key("KeyD", body, { repeat: true, timeStamp: 900 });
  keyboard.onMoveKeyDown(again);
  assert.equal(again.prevented, true);
  assert.deepEqual(calls, ["wake"]);
  assert.equal(keyboard.moveKeys.elapsed(1100), 1);
});

test("Shift and Alt set the speed from any key event", (t) => {
  t.after(() => delete globalThis.document);
  const { keyboard } = setup();
  keyboard.onMoveKeyDown(key("KeyW", body));
  keyboard.onMoveKeyDown(key("ShiftLeft", body, { shiftKey: true }));
  assert.equal(keyboard.moveKeys.speed(1), 4);
  keyboard.onMoveKeyUp(key("ShiftLeft", body));
  keyboard.onMoveKeyDown(key("AltLeft", body, { altKey: true }));
  assert.equal(keyboard.moveKeys.speed(1), 0.25);
});

test("the keys stay with typing, other dialogs, Ctrl or Meta, and views that do not move", (t) => {
  t.after(() => delete globalThis.document);
  const cases = [
    ["a text field", (s) => s.element("INPUT", "text")],
    ["a number field", (s) => s.element("INPUT", "number")],
    ["a textarea", (s) => s.element("TEXTAREA")],
    ["a select", (s) => s.element("SELECT")],
    ["editable text", (s) => Object.assign(s.element("DIV"), { isContentEditable: true })],
    ["a dialog outside the editor", () => ({ tagName: "BUTTON" })],
  ];
  for (const [name, target] of cases) {
    const s = setup();
    const event = key("KeyW", target(s));
    s.keyboard.onMoveKeyDown(event);
    assert.equal(event.prevented, false, name);
    assert.equal(s.keyboard.moveKeys.held, false, name);
  }
  const confirm = setup({ confirm: true });
  confirm.keyboard.onMoveKeyDown(key("KeyW", body));
  assert.equal(confirm.keyboard.moveKeys.held, false, "the confirm dialog");
  const still = setup({ freeSpace: false });
  const event = key("KeyW", body);
  still.keyboard.onMoveKeyDown(event);
  assert.equal(still.keyboard.moveKeys.held, false, "3DoF, Unwrap: nothing moves");
  for (const modifier of ["ctrlKey", "metaKey"]) {
    const s = setup();
    const withModifier = key("KeyS", body, { [modifier]: true });
    s.keyboard.onMoveKeyDown(withModifier);
    assert.equal(withModifier.prevented, false, modifier);
    assert.equal(s.keyboard.moveKeys.held, false, modifier);
  }
  const slider = setup();
  slider.keyboard.onMoveKeyDown(key("KeyW", slider.element("INPUT", "range")));
  assert.equal(slider.keyboard.moveKeys.held, true, "a focused slider or button keeps the stage's keys");
});

test("a key let go is released wherever the focus is, and only a held key's release is taken", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.space.free = false;
  const up = key("KeyW", s.element("INPUT", "text"));
  s.keyboard.onMoveKeyUp(up);
  assert.equal(s.keyboard.moveKeys.held, false);
  const other = key("KeyW", body);
  s.keyboard.onMoveKeyUp(other);
  assert.equal(other.stopped, false);
});

test("leaving the window, hiding the page or Meta going up lets every key go", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.keyboard.onWindowBlur();
  assert.equal(s.keyboard.moveKeys.held, false, "blur");
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  globalThis.document.hidden = true;
  s.keyboard.onVisibilityChange();
  assert.equal(s.keyboard.moveKeys.held, false, "hidden");
  // macOS sends no keyup for a key let go while Meta is down.
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.keyboard.onMoveKeyUp(key("MetaLeft", body, { key: "Meta" }));
  assert.equal(s.keyboard.moveKeys.held, false, "Meta");
});

test("a held key repeating into a text field lets go, so typing there does not move the view", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.keyboard.onMoveKeyDown(key("KeyD", body));
  const typed = key("KeyW", s.element("INPUT", "text"), { repeat: true });
  s.keyboard.onMoveKeyDown(typed);
  assert.equal(typed.prevented, false, "the field gets its letter");
  assert.deepEqual(s.keyboard.moveKeys.direction(), { forward: 0, right: 1, up: 0 });
});

test("the context menu lets every key go: Chromium sends no keyup while it is open", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.keyboard.onContextMenu();
  assert.equal(s.keyboard.moveKeys.held, false);
});

test("where nothing moves, the stage still takes the movement keys from ComfyUI, and leaves other keys", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup({ freeSpace: false });
  for (const code of ["KeyW", "KeyA", "KeyS", "KeyD", "KeyQ", "KeyE"]) {
    const event = key(code, body);
    s.keyboard.onMoveKeyDown(event);
    assert.equal(event.prevented, true, code);
    assert.equal(event.stopped, true, code);
  }
  assert.equal(s.keyboard.moveKeys.held, false);
  assert.deepEqual(s.calls, [], "no transition stops and no frames run");
  const other = key("KeyR", body);
  s.keyboard.onMoveKeyDown(other);
  assert.equal(other.prevented, false, "ComfyUI keeps its other keys");
  const ctrl = key("KeyW", body, { ctrlKey: true });
  s.keyboard.onMoveKeyDown(ctrl);
  assert.equal(ctrl.prevented, false, "Ctrl + W stays the browser's");
});

test("a key move ends when the last key goes up or every key is let go, once", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.keyboard.onMoveKeyDown(key("KeyD", body));
  s.calls.length = 0;
  s.keyboard.onMoveKeyUp(key("KeyW", body));
  assert.deepEqual(s.calls, [], "a key still held");
  s.keyboard.onMoveKeyUp(key("KeyD", body));
  assert.deepEqual(s.calls, ["end"]);
  s.keyboard.onMoveKeyUp(key("KeyD", body));
  assert.deepEqual(s.calls, ["end"], "a key not held ends nothing");
  for (const leave of [(k) => k.onWindowBlur(), (k) => k.onContextMenu(), (k) => k.onMoveKeyUp(key("MetaLeft", body, { key: "Meta" }))]) {
    s.keyboard.onMoveKeyDown(key("KeyW", body));
    s.calls.length = 0;
    leave(s.keyboard);
    assert.deepEqual(s.calls, ["end"]);
  }
  s.keyboard.onMoveKeyDown(key("KeyW", body));
  s.calls.length = 0;
  s.keyboard.onMoveKeyDown(key("KeyW", s.element("INPUT", "text"), { repeat: true }));
  assert.deepEqual(s.calls, ["end"], "focus gone to a field");
});

// Escape with the confirm dialog open, or in a field, takes back only that (docs/editor-interaction.md): the
// commands' confirm dialog (commands.js) answers Cancel, and a field is left; the editor stays open.
function escapeSetup() {
  globalThis.document = { body, documentElement: { tagName: "HTML" }, hidden: false };
  const inside = new Set();
  const uiState = { timeline: { visible: true }, confirmDialog: { visible: false } };
  const strokes = [{ id: "s1" }];
  const commands = createCommands({ editor: { interaction: null }, readOnly: false, state: {}, type: "stickers", uiState });
  commands.connect({ getPaintingLayerList: () => strokes });
  const closed = [];
  const keyboard = createKeyboard({ editor: {}, overlay: { contains: (target) => inside.has(target) }, readOnly: false, stateV2: true, timeline: {}, uiState });
  keyboard.connect({
    cancelFrameCameraGesture: () => false,
    closeEditor: () => closed.push("close"),
    settleCanvasConfirm: commands.settleCanvasConfirm,
  });
  const element = (tagName, type = "") => {
    const el = { tagName, type, blurred: false, blur() { this.blurred = true; } };
    inside.add(el);
    return el;
  };
  return { keyboard, commands, uiState, strokes, closed, element };
}

test("Escape with the confirm dialog open cancels it and leaves the editor open", async (t) => {
  t.after(() => delete globalThis.document);
  const s = escapeSetup();
  const clearing = s.commands.clearPaintingLayer("paint");
  assert.equal(s.uiState.confirmDialog.visible, true);
  const escape = key("Escape", s.element("BUTTON"), { key: "Escape", stopImmediatePropagation() {} });
  s.keyboard.onEscClose(escape);
  await clearing;
  assert.equal(s.uiState.confirmDialog.visible, false);
  assert.deepEqual(s.strokes, [{ id: "s1" }], "nothing cleared");
  assert.deepEqual(s.closed, []);
  assert.equal(escape.prevented, true);
});

test("Escape in a field only leaves the field; on a slider it closes the editor", (t) => {
  t.after(() => delete globalThis.document);
  const s = escapeSetup();
  const field = s.element("INPUT", "number");
  s.keyboard.onEscClose(key("Escape", field, { key: "Escape", stopImmediatePropagation() {} }));
  assert.equal(field.blurred, true);
  assert.deepEqual(s.closed, []);
  const slider = s.element("INPUT", "range");
  s.keyboard.onEscClose(key("Escape", slider, { key: "Escape", stopImmediatePropagation() {} }));
  assert.equal(slider.blurred, false);
  assert.deepEqual(s.closed, ["close"]);
});

test("Undo works with a slider or a checkbox focused, Delete does not, and a text field keeps both", (t) => {
  t.after(() => delete globalThis.document);
  for (const [tagName, type, owned] of [["INPUT", "range", true], ["INPUT", "checkbox", true], ["INPUT", "text", false], ["TEXTAREA", "", false]]) {
    const s = setup();
    const calls = [];
    s.keyboard.connect({
      deleteSelected: () => calls.push("delete"), deleteSelectedWorldSticker: () => false, getSelected: () => ({ id: "a" }),
      getHistoryCapabilities: () => ({ canUndo: true, canRedo: true }), restoreHistory: (step) => calls.push(`history ${step}`),
    });
    const target = s.element(tagName, type);
    s.keyboard.onDeleteKey(key("Delete", target, { key: "Delete", target }));
    s.keyboard.onUndoRedoKey(key("KeyZ", target, { key: "z", ctrlKey: true, target }));
    assert.deepEqual(calls, owned ? ["history -1"] : [], `${tagName} ${type}`);
  }
});
