import { readdirSync, readFileSync } from "node:fs";

// The Panorama editor's code: pano_editor.js, which puts the editor together, and its modules under
// web_src/editor/. Tests that read the editor's code read all of it, wherever a function lives.
export const EDITOR_FILES = [
  "pano_editor.js",
  ...readdirSync(new URL("../web_src/editor/", import.meta.url))
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => `editor/${name}`),
];

export function readEditorSource() {
  return EDITOR_FILES.map((file) => readFileSync(new URL(`../web_src/${file}`, import.meta.url), "utf8")).join("\n");
}
