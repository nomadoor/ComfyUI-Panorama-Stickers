import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { EDITOR_FILES } from "./editor_source.mjs";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

// The old editor and the legacy node surfaces read a node's links through LiteGraph's getInputLink and
// isInputConnected, never the deprecated input.link. Kept as a structural rule that tests/architecture.test.mjs does
// not cover yet (ADR 0050).
test("connectivity is read through getInputLink and isInputConnected, not the deprecated input.link", async () => {
  for (const file of ["pano_comfy_media.js", ...EDITOR_FILES, "pano_preview_previewnode.js", "pano_preview_runtime.js"]) {
    const source = await read(`../web_src/${file}`);
    assert.doesNotMatch(source, /\.link\b(?!s)/, file);
  }
});
