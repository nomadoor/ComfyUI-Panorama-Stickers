import assert from "node:assert/strict";
import test from "node:test";

import { createCommands } from "../web_src/editor/commands.js";
import { createKeyboard } from "../web_src/editor/keyboard.js";

const body = { tagName: "BODY" };

function setup({ confirm = false } = {}) {
  globalThis.document = { body, documentElement: { tagName: "HTML" }, hidden: false };
  const inside = new Set();
  const overlay = { contains: (target) => inside.has(target) };
  const calls = [];
  const keyboard = createKeyboard({
    editor: {},
    overlay,
    readOnly: false,
    uiState: { confirmDialog: { visible: confirm } },
  });
  keyboard.connect({
    cancelLiveEdits: () => false,
    closeEditor() {},
    deleteSelected() {},
    getHistoryCapabilities() {},
    getSelected() {},
    restoreHistory() {},
    setFullscreenState() {},
    syncFrameRollKnob() {},
    updateCursor() {},
  });
  const element = (tagName, type = "") => {
    const el = { tagName, type };
    inside.add(el);
    return el;
  };
  return { keyboard, calls, element };
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

test("the movement keys stay with typing, other dialogs, Ctrl or Meta", (t) => {
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
  }
  const confirm = setup({ confirm: true });
  const behindDialog = key("KeyW", body);
  confirm.keyboard.onMoveKeyDown(behindDialog);
  assert.equal(behindDialog.prevented, false, "the confirm dialog");
  for (const modifier of ["ctrlKey", "metaKey"]) {
    const s = setup();
    const withModifier = key("KeyS", body, { [modifier]: true });
    s.keyboard.onMoveKeyDown(withModifier);
    assert.equal(withModifier.prevented, false, modifier);
  }
  const slider = setup();
  const onSlider = key("KeyW", slider.element("INPUT", "range"));
  slider.keyboard.onMoveKeyDown(onSlider);
  assert.equal(onSlider.prevented, true, "a focused slider or button keeps the stage's keys");
});

test("the stage takes the movement keys from ComfyUI though nothing moves, and leaves other keys", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  for (const code of ["KeyW", "KeyA", "KeyS", "KeyD", "KeyQ", "KeyE"]) {
    const event = key(code, body);
    s.keyboard.onMoveKeyDown(event);
    assert.equal(event.prevented, true, code);
    assert.equal(event.stopped, true, code);
  }
  assert.deepEqual(s.calls, []);
  const other = key("KeyR", body);
  s.keyboard.onMoveKeyDown(other);
  assert.equal(other.prevented, false, "ComfyUI keeps its other keys");
  const ctrl = key("KeyW", body, { ctrlKey: true });
  s.keyboard.onMoveKeyDown(ctrl);
  assert.equal(ctrl.prevented, false, "Ctrl + W stays the browser's");
});

// Escape with the confirm dialog open, or in a field, takes back only that (docs/editor-interaction.md): the
// commands' confirm dialog (commands.js) answers Cancel, and a field is left; the editor stays open.
function escapeSetup() {
  globalThis.document = { body, documentElement: { tagName: "HTML" }, hidden: false };
  const inside = new Set();
  const uiState = { confirmDialog: { visible: false } };
  const strokes = [{ id: "s1" }];
  const commands = createCommands({ editor: { interaction: null }, readOnly: false, state: {}, type: "stickers", uiState });
  commands.connect({ getPaintingLayerList: () => strokes });
  const closed = [];
  const keyboard = createKeyboard({ editor: {}, overlay: { contains: (target) => inside.has(target) }, readOnly: false, uiState });
  keyboard.connect({
    cancelLiveEdits: () => false,
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
      cancelLiveEdits: () => false,
      deleteSelected: () => calls.push("delete"), getSelected: () => ({ id: "a" }),
      getHistoryCapabilities: () => ({ canUndo: true, canRedo: true }), restoreHistory: (step) => calls.push(`history ${step}`),
    });
    const target = s.element(tagName, type);
    s.keyboard.onDeleteKey(key("Delete", target, { key: "Delete", target }));
    s.keyboard.onUndoRedoKey(key("KeyZ", target, { key: "z", ctrlKey: true, target }));
    assert.deepEqual(calls, owned ? ["history -1"] : [], `${tagName} ${type}`);
  }
});

// docs/editor-interaction.md「ポインタの取り消しとフォーカスの喪失」.
test("leaving the window cancels a pointer's edit under way, and Escape cancels any of them before closing", (t) => {
  t.after(() => delete globalThis.document);
  const s = setup();
  const closed = [];
  let live = true;
  let cancels = 0;
  s.keyboard.connect({
    cancelLiveEdits: () => { cancels += 1; const was = live; live = false; return was; },
    closeEditor: () => closed.push("close"), settleCanvasConfirm() {}, syncFrameRollKnob() {}, updateCursor() {},
  });
  s.keyboard.onWindowBlur();
  assert.equal(cancels, 1);
  live = true;
  const escape = () => key("Escape", body, { key: "Escape", stopImmediatePropagation() {} });
  const first = escape();
  s.keyboard.onEscClose(first);
  assert.equal(first.prevented, true);
  assert.deepEqual(closed, [], "the edit is cancelled; the editor stays open");
  s.keyboard.onEscClose(escape());
  assert.deepEqual(closed, ["close"]);
});
