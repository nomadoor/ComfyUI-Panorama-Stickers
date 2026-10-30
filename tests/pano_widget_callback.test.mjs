import assert from "node:assert/strict";
import test from "node:test";

import { chainWidgetCallback } from "../web_src/pano_widget_callback.js";

// ComfyUI's number widget callback reads `this` (its options) and is called with (value, canvas, node, ...).
function numberWidget() {
  const widget = {
    options: { round: 0.1 },
    value: 2,
    calls: [],
    callback(value, canvas, node) {
      this.calls.push([value, canvas, node]);
      this.value = Math.round(value / this.options.round) * this.options.round;
    },
  };
  return widget;
}

test("a chained callback calls the previous one with the same this and arguments, then the listener", () => {
  const widget = numberWidget();
  const heard = [];
  chainWidgetCallback(widget, (...args) => heard.push(args));
  widget.callback(1.04, "canvas", "node");
  assert.deepEqual(widget.calls, [[1.04, "canvas", "node"]]);
  assert.equal(widget.value, 1);
  assert.deepEqual(heard, [[1.04, "canvas", "node"]]);
});

test("the listener runs even when the previous callback throws, and the error still reaches the caller", () => {
  const widget = { callback() { throw new Error("frontend"); } };
  let heard = 0;
  chainWidgetCallback(widget, () => { heard += 1; });
  assert.throws(() => widget.callback(3), /frontend/);
  assert.equal(heard, 1);
});

test("several listeners chain, and each restore takes back only its own", () => {
  const widget = numberWidget();
  const heard = [];
  const restoreA = chainWidgetCallback(widget, () => heard.push("a"));
  const restoreB = chainWidgetCallback(widget, () => heard.push("b"));
  widget.callback(1, null, null);
  assert.deepEqual(heard, ["a", "b"]);
  // A, restored first while B wraps it, stops listening but keeps B's chain whole.
  restoreA();
  widget.callback(1, null, null);
  assert.deepEqual(heard, ["a", "b", "b"]);
  restoreB();
  widget.callback(1, null, null);
  assert.deepEqual(heard, ["a", "b", "b"]);
  assert.equal(widget.calls.length, 3);
});

test("a widget without a callback gets one, and restore removes it", () => {
  const widget = {};
  let heard = 0;
  const restore = chainWidgetCallback(widget, () => { heard += 1; });
  widget.callback("x");
  assert.equal(heard, 1);
  restore();
  assert.equal(widget.callback, undefined);
});

test("no widget chains nothing", () => {
  assert.doesNotThrow(() => chainWidgetCallback(null, () => {})());
});
