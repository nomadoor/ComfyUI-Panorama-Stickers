import assert from "node:assert/strict";
import test from "node:test";

import {
  removeTrackedDomWidget,
  trackDomWidgetRemoval,
} from "../web_src/pano_dom_widget_lifecycle.js";

test("tracked DOM widget removal unregisters once and keeps widget values aligned", () => {
  let removeCalls = 0;
  const before = { name: "before" };
  const widget = trackDomWidgetRemoval({
    name: "preview",
    onRemove() { removeCalls += 1; },
  });
  const after = { name: "after" };
  const node = {
    widgets: [before, widget, after],
    widgets_values: ["before", "preview", "after"],
  };

  assert.equal(removeTrackedDomWidget(node, widget), true);
  widget.onRemove();

  assert.equal(removeCalls, 1);
  assert.deepEqual(node.widgets, [before, after]);
  assert.deepEqual(node.widgets_values, ["before", "after"]);
});
