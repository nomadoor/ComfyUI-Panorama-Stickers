import { readdirSync, readFileSync } from "node:fs";

const WEB_SRC = new URL("../web_src/", import.meta.url);

// Every source file of the frontend under web_src/ (subfolders included), as paths relative to it, sorted.
// Rules that hold for the whole frontend read this list, so they keep reading every file when one is split or moved.
export function webSourceFiles(extensions = [".js", ".vue"]) {
  return readdirSync(WEB_SRC, { recursive: true })
    .map((name) => String(name).split("\\").join("/"))
    .filter((name) => extensions.some((extension) => name.endsWith(extension)))
    .sort();
}

// The Panorama editor's code: pano_editor.js, which puts the editor together, and its modules under
// web_src/editor/ (subfolders included). Tests that read the editor's code read all of it, wherever a function lives.
export const EDITOR_FILES = [
  "pano_editor.js",
  ...webSourceFiles([".js"]).filter((name) => name.startsWith("editor/")),
];

export function readWebSource(file) {
  return readFileSync(new URL(file, WEB_SRC), "utf8");
}

export function readEditorSource() {
  return EDITOR_FILES.map(readWebSource).join("\n");
}
