import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { createEditorModules } from "../web_src/editor/modules.js";
import { EDITOR_FILES } from "./editor_source.mjs";

const editor = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
const wiring = editor.match(/  const \{([\s\S]*?)\} = createEditorModules\(\{([\s\S]*?)\}, \[([\s\S]*?)\]\);/);
const names = (text) => text.split(/[\s,]+/).filter(Boolean);

// What the modules' factories do when they are made, in a browser: observe the stage, ask for a frame.
function browserStubs() {
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.HTMLVideoElement = class {};
  globalThis.window = { devicePixelRatio: 1 };
}

test("showEditor gives the modules every name they take and takes only names they give", async () => {
  browserStubs();
  try {
    const factories = [];
    for (const file of EDITOR_FILES.filter((name) => name.startsWith("editor/"))) {
      const module = await import(`../web_src/${file}`);
      for (const [name, value] of Object.entries(module)) if (/^create[A-Z]\w*$/.test(name) && name !== "createEditorModules" && value.length === 1) factories.push([name, value]);
    }
    const made = names(wiring[3]);
    const byName = new Map(factories);
    const provided = Object.fromEntries(names(wiring[2]).map((name) => [name, {
      requestFrame: () => 0,
      cancelFrame() {},
      getBoundingClientRect: () => ({ width: 0, height: 0 }),
      addEventListener() {},
    }]));
    const api = createEditorModules(provided, made.map((name) => byName.get(name)));
    // showEditor's own destructuring: every name it takes is there.
    for (const name of names(wiring[1])) assert.ok(api[name] !== undefined, name);
  } finally {
    delete globalThis.ResizeObserver;
    delete globalThis.HTMLVideoElement;
    delete globalThis.window;
  }
});
