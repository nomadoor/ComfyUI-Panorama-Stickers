import assert from "node:assert/strict";
import test from "node:test";

import { createDiagnostics, DIAGNOSTICS_EXPORT_COMMAND } from "../web_src/pano_diagnostics.js";
import { VIEW_CONTROLS_SETTING } from "../web_src/pano_view_controls.js";
import { readWebSource, webSourceFiles } from "./editor_source.mjs";

// The extension's name as people see it in ComfyUI (CONTEXT.md "ComfyUI の中の名前"): Panorama Stickers everywhere,
// while the ids keep "PanoramaSuite" so chosen settings stay.

test("the settings' headings, the diagnostics command and its file say Panorama Stickers; the ids stay", () => {
  assert.deepEqual(VIEW_CONTROLS_SETTING.category, ["Panorama Stickers", "Editor", "3D view controls"]);
  assert.equal(VIEW_CONTROLS_SETTING.id, "PanoramaSuite.Editor.ViewControls");
  assert.equal(DIAGNOSTICS_EXPORT_COMMAND.label, "Export Panorama Stickers diagnostics");
  assert.equal(DIAGNOSTICS_EXPORT_COMMAND.id, "PanoramaSuite.Debug.ExportDiagnostics");
  const links = [];
  const diagnostics = createDiagnostics({
    clock: () => Date.UTC(2026, 10, 28, 12, 34, 56, 789),
    document: () => ({ createElement: () => { const link = { click() { links.push(link.download); } }; return link; } }),
  });
  diagnostics.download();
  assert.deepEqual(links, ["panorama-stickers-diagnostics-2026-11-28T12-34-56-789Z.json"]);
});

test("no frontend file shows the old name or its console mark", () => {
  const files = webSourceFiles();
  assert.ok(files.includes("pano_diagnostics.js") && files.includes("studio/camera_ui.js"));
  for (const name of files) {
    const source = readWebSource(name);
    assert.doesNotMatch(source, /Panorama Suite/, name);
    // The extension's console mark is [PanoramaStickers]; the old [PanoramaSuite] is gone.
    assert.doesNotMatch(source, /\[PanoramaSuite\]|\[Panorama Stickers\]/, name);
  }
});
