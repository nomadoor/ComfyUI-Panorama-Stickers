import assert from "node:assert/strict";
import test from "node:test";
import { readWebSource, webSourceFiles } from "./editor_source.mjs";

// What may still read a slot's `link` field: a serialized workflow's node (plain JSON, no LiteGraph node to ask).
const SERIALIZED_LINK_READERS = new Set(["pano_preview_video.js"]);

// The editors and the node surfaces read a node's links through LiteGraph's getInputLink and isInputConnected, never
// the deprecated input.link. Kept as a structural rule that tests/architecture.test.mjs does not cover yet (ADR 0050).
// It reads every frontend file, so it holds wherever a function moves.
test("connectivity is read through getInputLink and isInputConnected, not the deprecated input.link", () => {
  const files = webSourceFiles().filter((file) => !SERIALIZED_LINK_READERS.has(file));
  assert.ok(files.includes("pano_editor.js") && files.includes("pano_preview_runtime.js"));
  for (const file of files) {
    // A comment line may name the field (only whole lines, so a "https://" in a string is never cut).
    const code = readWebSource(file).replace(/^\s*\/\/.*$/gm, "");
    assert.doesNotMatch(code, /\.link\b(?!s)/, file);
  }
});
