// Writing a state_json widget tells ComfyUI the workflow changed (web_src/pano_state_widget.js): ComfyUI keeps the
// workflow it restores after a reload as of its last mouseup or keyup, and the editor's close button writes after one.
import assert from "node:assert/strict";
import test from "node:test";

import { setWorkflowChangeNotifier, writeStateWidget } from "../web_src/pano_state_widget.js";

test("a write sets the value, runs the widget's callback, then tells ComfyUI the workflow changed", () => {
  const order = [];
  const widget = { value: "", callback: (text) => order.push(`callback ${text}`) };
  setWorkflowChangeNotifier(() => order.push(`noted ${widget.value}`));
  writeStateWidget(widget, "{\"version\":2}");
  assert.deepEqual(order, ["callback {\"version\":2}", "noted {\"version\":2}"]);
  // Without a notifier, or one that throws, the widget is still written.
  setWorkflowChangeNotifier(null);
  writeStateWidget(widget, "a");
  assert.equal(widget.value, "a");
  const warn = console.warn;
  console.warn = () => {};
  setWorkflowChangeNotifier(() => { throw new Error("no tracker"); });
  writeStateWidget(widget, "b");
  console.warn = warn;
  assert.equal(widget.value, "b");
  setWorkflowChangeNotifier(null);
});
