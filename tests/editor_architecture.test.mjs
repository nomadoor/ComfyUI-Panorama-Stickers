import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { EDITOR_FILES } from "./editor_source.mjs";

const source = (file) => readFileSync(new URL(`../web_src/${file}`, import.meta.url), "utf8");
const importsOf = (text) => [...text.matchAll(/^import [\s\S]*? from "([^"]+)";$/gm)].map((match) => match[1]);
const modules = EDITOR_FILES.filter((file) => file.startsWith("editor/"));
const factories = modules.filter((file) => /^export function create\w+\(deps\) \{$/m.test(source(file)));
// The editor modules that hold no behavior of their own, which any module may import.
const SHARED = new Set(["./constants.js", "./helpers.js", "./ui_settings.js", "./video_thumbnail_cache.js"]);

test("the editor modules depend on the shared libraries of web_src, never on pano_editor.js or each other", () => {
  assert.ok(factories.length > 20);
  for (const file of modules) {
    for (const from of importsOf(source(file))) {
      assert.ok(!from.startsWith("../../"), `${file} imports ${from}: ComfyUI's app and api come through deps`);
      assert.notEqual(from, "../pano_editor.js", file);
      if (from.startsWith("./")) assert.ok(SHARED.has(from), `${file} imports ${from}: modules call each other through connect()`);
    }
  }
});

test("showEditor makes every editor module once, through createEditorModules", () => {
  const editor = source("pano_editor.js");
  const made = editor.match(/\} = createEditorModules\(\{[\s\S]*?\}, \[([\s\S]*?)\]\);/)[1].split(",").map((name) => name.trim()).filter(Boolean);
  assert.equal(new Set(made).size, made.length);
  for (const file of factories) {
    const factory = source(file).match(/^export function (create\w+)\(deps\) \{$/m)[1];
    assert.ok(made.includes(factory), `${factory} (${file}) is not made`);
    assert.match(editor, new RegExp(`import \\{[^}]*\\b${factory}\\b[^}]*\\} from "\\./${file.replace(".", "\\.")}";`));
  }
  assert.equal(made.length, factories.length);
});

test("a module takes the names it calls in other modules through connect(), and gives back what it defines", () => {
  for (const file of factories) {
    const text = source(file);
    const linked = text.match(/^  let ([\s\S]*?);$/m);
    const connect = text.match(/^    connect\(api\) \{\n      \(\{([^}]*)\} = api\);\n    \},$/m);
    if (!connect) {
      assert.match(text, /^    connect\(\) \{\},$/m, file);
      continue;
    }
    const names = connect[1].split(/[\s,]+/).filter(Boolean);
    assert.ok(linked, file);
    assert.deepEqual(linked[1].split(/[\s,]+/).filter(Boolean), names, `${file}: the names declared for connect() are the names it binds`);
  }
});
