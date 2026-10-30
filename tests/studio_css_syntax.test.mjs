// web/pano_studio.css is joined by hand when branches are merged (sections appended at its end); a lost brace there
// breaks every rule after it and every browser page that loads it. Check that the braces balance and never close
// more than they opened, outside comments and strings.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("the new UI stylesheet's braces balance", () => {
  const css = readFileSync(new URL("../web/pano_studio.css", import.meta.url), "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "\"\"");
  let depth = 0;
  css.split("\n").forEach((line, index) => {
    for (const ch of line) {
      if (ch === "{") depth += 1;
      if (ch === "}") depth -= 1;
      assert.ok(depth >= 0, `a brace closes more than it opened at line ${index + 1}`);
    }
  });
  assert.equal(depth, 0);
});
