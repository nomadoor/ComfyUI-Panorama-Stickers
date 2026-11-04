import assert from "node:assert/strict";
import test from "node:test";

import { createModalEvents } from "../web_src/editor/modal_events.js";

// docs/vue-ui-boundary.md: the old editor's custom aspect action reads the values PanoCutoutAspectPicker.vue puts on
// the button it clicked (data-custom-width, data-custom-height), never by searching the DOM.
test("the editor's custom aspect action reads its values from the picker's button, without searching the DOM", () => {
  const noSearch = (name) => () => { throw new Error(`the DOM was searched: ${name}`); };
  const dom = { querySelector: noSearch("querySelector"), querySelectorAll: noSearch("querySelectorAll") };
  const attributes = { "data-action": "frame-aspect-custom", "data-custom-width": "21", "data-custom-height": "9" };
  // The button the click landed on: the click routing finds it by its own selector; it has no other ancestor.
  const button = {
    ...dom,
    dataset: { action: "frame-aspect-custom", customWidth: "21", customHeight: "9" },
    getAttribute: (name) => attributes[name] ?? null,
    matches: () => false,
    closest: (selector) => (selector.includes("[data-action]") ? button : null),
  };
  const shot = { id: "shot", locked: false };
  const calls = [];
  const record = (name) => (...args) => { calls.push([name, ...args]); return true; };
  const uiState = { frameRail: { aspectOpen: true } };
  const events = createModalEvents({ editor: { mode: "frame" }, node: {}, overlay: dom, readOnly: false, root: dom, runtime: {}, shotEditor: true, timers: {}, tooltip: null, uiState, videoEl: null });
  const api = new Proxy({}, { get: (target, name) => record(String(name)) });
  events.connect(new Proxy({}, {
    get: (target, name) => (name === "getActiveCutoutShot" ? () => shot : api[name]),
    has: () => true,
  }));
  const previousDocument = globalThis.document;
  globalThis.document = dom;
  try {
    events.onRootClick({ target: button, preventDefault() {}, stopPropagation() {} });
  } finally {
    globalThis.document = previousDocument;
  }
  assert.deepEqual(calls.find(([name]) => name === "applyCutoutAspectCustom"), ["applyCutoutAspectCustom", shot, "21", "9"]);
  assert.equal(uiState.frameRail.aspectOpen, false);
  assert.ok(calls.some(([name]) => name === "commitAndRefreshNode"));
});
