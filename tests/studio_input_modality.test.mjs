import assert from "node:assert/strict";
import test from "node:test";
import { inputModeOf, trackInputMode } from "../web_src/studio/input_modality.js";

// docs/design.md "フォーカス": a press puts the editor in the pointer mode, the keys that move the focus or work the
// focused part in the keyboard mode, other keys keep the mode.

test("a press is the pointer; Tab, arrows, Home, End, PageUp, PageDown, Enter and Space are the keyboard; other keys keep it", () => {
  assert.equal(inputModeOf({ type: "pointerdown" }), "pointer");
  for (const key of ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Enter", " "]) {
    assert.equal(inputModeOf({ type: "keydown", key }), "keyboard", key);
  }
  for (const key of ["z", "Shift", "Control", "Escape", "Delete"]) assert.equal(inputModeOf({ type: "keydown", key }), null, key);
  assert.equal(inputModeOf({ type: "pointermove" }), null);
});

test("the root keeps the mode in data-input, from captured events, until stopped", () => {
  const listeners = [];
  const root = {
    dataset: {},
    addEventListener: (type, fn, capture) => listeners.push({ type, fn, capture }),
    removeEventListener: (type, fn) => listeners.splice(listeners.findIndex((item) => item.type === type && item.fn === fn), 1),
  };
  const send = (event) => listeners.filter((item) => item.type === event.type).forEach((item) => item.fn(event));
  const stop = trackInputMode(root);
  assert.ok(listeners.every((item) => item.capture === true));
  send({ type: "pointerdown" });
  assert.equal(root.dataset.input, "pointer");
  send({ type: "keydown", key: "z" });
  assert.equal(root.dataset.input, "pointer");
  send({ type: "keydown", key: "Tab" });
  assert.equal(root.dataset.input, "keyboard");
  stop();
  assert.equal(listeners.length, 0);
});
