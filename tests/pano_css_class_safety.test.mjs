import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

// ComfyUI's frontend ships Tailwind utilities on the same document (e.g. `.hidden { display: none }`), so a
// bare utility name used as our own state class hides or restyles our elements. State classes use an
// `is-` prefix instead.
const UTILITY_NAMES = ["hidden", "block", "flex", "grid", "invisible", "visible", "contents"];

test("Vue components do not bind bare Tailwind utility names as state classes", () => {
  const dir = new URL("../web_src/components/", import.meta.url);
  const names = readdirSync(dir, { recursive: true }).filter((file) => file.endsWith(".vue"));
  assert.ok(names.includes("shared/SvgIcon.vue"));
  for (const name of names) {
    const source = readFileSync(new URL(name, dir), "utf8");
    for (const utility of UTILITY_NAMES) {
      const bound = new RegExp(`:class="[^"]*[{,]\\s*['\\x60]?${utility}['\\x60]?\\s*:`);
      assert.doesNotMatch(source, bound, `${name} binds the class "${utility}"`);
    }
  }
});
