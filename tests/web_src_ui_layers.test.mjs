import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { SRC, importGraph } from "./web_src_imports.mjs";

// ADR 0044 "新旧の境": the new UI (Panorama Studio's editor and the Preview's window) and the old UI do not
// import each other. web_src/main.js, the entry, is the one module that imports both.

const OLD_UI_FILES = [
  "pano_editor.js",
  "pano_editor_ui_state.js",
  "modal_shell_presets.js",
  ...[
    "PanoModal", "PanoToolRail", "PanoFrameRail", "PanoFrameRollKnob", "PanoPaintDock", "PanoPaintOverlays",
    "PanoSidePanel", "PanoSelectionMenu", "PanoSegments", "PanoConfirmDialog", "PanoTooltip", "PanoImageFilePicker",
    "PanoFloatingRight", "PanoViewToggle", "PanoUpstreamOrigin", "PanoEasingGraph", "PanoTimeline",
    "PanoTimelineGroup", "PanoCutoutAspectPicker",
  ].map((name) => `components/${name}.vue`),
];

const relative = (file) => path.relative(SRC, file).split(path.sep).join("/");
const isOldUi = (file) => {
  const name = relative(file);
  return OLD_UI_FILES.includes(name) || /^editor\/[^/]+\.js$/.test(name);
};
const isNewUi = (file) => /^(studio|components\/studio)\//.test(relative(file));

// The imports that cross the line, as "from -> to".
function crossings(graph) {
  const found = [];
  for (const [from, targets] of graph) {
    for (const to of targets) {
      if ((isNewUi(from) && isOldUi(to)) || (isOldUi(from) && isNewUi(to))) found.push(`${relative(from)} -> ${relative(to)}`);
    }
  }
  return found;
}

test("the files ADR 0044 names as the old UI exist", () => {
  for (const name of OLD_UI_FILES) assert.ok(existsSync(path.join(SRC, name)), name);
});

test("crossings finds an import across the line in either direction and none within a side", () => {
  const file = (name) => path.join(SRC, name);
  const graph = new Map([
    [file("studio/editor.js"), [file("editor/items.js"), file("pano_space.js")]],
    [file("components/PanoModal.vue"), [file("components/studio/StudioEditor.vue"), file("components/shared/SvgIcon.vue")]],
    [file("main.js"), [file("pano_editor.js"), file("studio/editor.js")]],
  ]);
  assert.deepEqual(crossings(graph), [
    "studio/editor.js -> editor/items.js",
    "components/PanoModal.vue -> components/studio/StudioEditor.vue",
  ]);
});

test("the new UI and the old UI do not import each other", () => {
  assert.deepEqual(crossings(importGraph()), []);
});
