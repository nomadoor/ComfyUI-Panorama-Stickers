import assert from "node:assert/strict";
import test from "node:test";
import { GUARDED_EVENTS, guardEditorKeys } from "../web_src/studio/key_guard.js";

// docs/studio-ui.md "キーとクリップボードを ComfyUI に渡さない": the key and clipboard events from inside the editor, and
// from the page itself (the focus on body), stop at the editor's root or at body, on the bubbling side, so ComfyUI's
// listeners on window and document never get them; the browser's own action (typing, pasting text) is not stopped.

function element(name) {
  const listeners = [];
  return {
    name,
    listeners,
    addEventListener: (type, fn, capture) => listeners.push({ type, fn, capture: !!capture }),
    removeEventListener: (type, fn, capture) => {
      const index = listeners.findIndex((item) => item.type === type && item.fn === fn && item.capture === !!capture);
      if (index >= 0) listeners.splice(index, 1);
    },
  };
}

function event(type, target) {
  return {
    type,
    target,
    stopped: false,
    prevented: false,
    stopPropagation() {
      this.stopped = true;
    },
    preventDefault() {
      this.prevented = true;
    },
  };
}

const send = (node, ev) => node.listeners.filter((item) => item.type === ev.type).forEach((item) => item.fn(ev));

test("the key and clipboard events are keydown, keyup, keypress, copy, cut and paste", () => {
  assert.deepEqual([...GUARDED_EVENTS].sort(), ["copy", "cut", "keydown", "keypress", "keyup", "paste"]);
});

test("an event from inside the editor, a text field too, stops at the root without its default being prevented", () => {
  const root = element("root");
  const body = element("body");
  guardEditorKeys(root, { body });
  for (const type of GUARDED_EVENTS) {
    const ev = event(type, { tagName: "INPUT", type: "text" });
    send(root, ev);
    assert.equal(ev.stopped, true, type);
    assert.equal(ev.prevented, false, type);
  }
  // Only the bubbling side: the editor's own parts get their events first.
  assert.ok(root.listeners.every((item) => item.capture === false));
  assert.ok(body.listeners.every((item) => item.capture === false));
});

test("an event from body stops there; one from another element outside the editor (a ComfyUI dialog) goes on", () => {
  const root = element("root");
  const body = element("body");
  guardEditorKeys(root, { body });
  const fromBody = event("paste", body);
  send(body, fromBody);
  assert.equal(fromBody.stopped, true);
  const fromDialog = event("keydown", { tagName: "DIV" });
  send(body, fromDialog);
  assert.equal(fromDialog.stopped, false);
});

test("the guard goes when the editor closes", () => {
  const root = element("root");
  const body = element("body");
  const stop = guardEditorKeys(root, { body });
  assert.equal(root.listeners.length, GUARDED_EVENTS.length);
  assert.equal(body.listeners.length, GUARDED_EVENTS.length);
  stop();
  assert.equal(root.listeners.length, 0);
  assert.equal(body.listeners.length, 0);
});
