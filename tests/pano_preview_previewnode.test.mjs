// The Preview node's runtime (web_src/pano_preview_previewnode.js attachPreviewNodeRuntime) in Node with the fakes of
// tests/node_surface_fakes.mjs: how it listens to the coverage widget (docs/studio-node-surface.md, the widget callback
// row: pano_widget_callback.js chainWidgetCallback).
import assert from "node:assert/strict";
import test from "node:test";

import { createFakeNode } from "./node_surface_fakes.mjs";

const { attachPreviewNodeRuntime } = await import("../web_src/pano_preview_previewnode.js");
const { previewNode } = await import("../web_src/pano_node_bridge.js");

function attached(widgetName) {
  const node = createFakeNode({ type: "PanoramaPreview", widgets: { [widgetName]: "360" } });
  const widget = node.widgets.find((item) => item.name === widgetName);
  const calls = [];
  widget.callback = function (value) {
    calls.push([this, value]);
    if (value === "throw") throw new Error("the widget's own callback failed");
  };
  attachPreviewNodeRuntime(node, {});
  const runtime = previewNode(node).runtime;
  let draws = 0;
  runtime.requestDraw = () => {
    draws += 1;
  };
  return { node, widget, calls, runtime, draws: () => draws };
}

test("the coverage widget's callback runs with its own this and arguments, and the change draws again even when it throws", () => {
  for (const name of ["coverage", "background_range"]) {
    const { node, widget, calls, draws } = attached(name);
    widget.callback.call(widget, "180", "canvas", node);
    assert.deepEqual(calls, [[widget, "180"]]);
    assert.equal(draws(), 1);
    assert.throws(() => widget.callback.call(widget, "throw"), /failed/);
    assert.equal(draws(), 2, `${name}: the redraw is asked for although the callback before threw`);
    node.onRemoved();
  }
});

test("teardown keeps a callback chained onto the coverage widget after the runtime, and stops only its own listener", () => {
  const { node, widget, calls, draws } = attached("coverage");
  const before = widget.callback;
  const later = [];
  widget.callback = function (...args) {
    later.push(args[0]);
    return before.apply(this, args);
  };
  node.onRemoved();
  const drawn = draws();
  widget.callback.call(widget, "90");
  assert.deepEqual(later, ["90"], "the callback chained later is still the widget's");
  assert.deepEqual(calls.map(([, value]) => value), ["90"]);
  assert.equal(draws(), drawn, "the torn-down runtime does not draw");
});
