import assert from "node:assert/strict";
import test from "node:test";
import { readEditorSource } from "./editor_source.mjs";

// docs/vue-ui-boundary.md: the old editor's custom aspect action reads the values PanoCutoutAspectPicker.vue puts on
// the button it clicked, never by searching the DOM. Kept as a structural rule that tests/architecture.test.mjs does
// not cover yet (ADR 0050).
test("the editor's custom aspect action reads its values from the picker's button, without searching the DOM", () => {
  const editor = readEditorSource();
  const customStart = editor.indexOf('if (action === "frame-aspect-custom")');
  const customEnd = editor.indexOf('\n      if (action === "frame-rotate-90")', customStart);
  assert.ok(customStart >= 0 && customEnd > customStart);
  assert.doesNotMatch(editor.slice(customStart, customEnd), /closest|querySelector/);
});
