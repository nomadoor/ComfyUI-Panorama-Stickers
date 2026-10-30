import test from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

// docs/design.md "新しい UI の見た目": the new UI's components carry no <style>; their classes live in
// web/pano_studio.css, and every `pano-studio-*` class a component uses is defined there.
const dir = new URL("../web_src/components/studio/", import.meta.url);
const css = readFileSync(new URL("../web/pano_studio.css", import.meta.url), "utf8");
const files = readdirSync(dir).filter((name) => name.endsWith(".vue"));

test("the new UI's components have no <style> block", () => {
  assert.ok(files.includes("StudioNumberField.vue"));
  for (const name of files) assert.doesNotMatch(readFileSync(new URL(name, dir), "utf8"), /<style[\s>]/, name);
});

test("every pano-studio-* class the components use is defined in web/pano_studio.css", () => {
  for (const name of files) {
    const source = readFileSync(new URL(name, dir), "utf8");
    for (const [cls] of source.matchAll(/pano-studio-[a-z0-9-]+/g)) {
      assert.ok(css.includes(`.${cls}`), `${name} uses .${cls}, which web/pano_studio.css does not define`);
    }
  }
});

test("the stylesheet uses no shadows and no backdrop blur", () => {
  assert.doesNotMatch(css, /box-shadow\s*:(?!\s*none)/);
  assert.doesNotMatch(css, /backdrop-filter/);
});

// docs/studio-ui.md "ツールチップ": the new UI's controls write their explanation in data-tip for the editor's tooltip
// layer, never in the browser's title (shown at the cursor, where it cannot be placed). StudioCard's `title` is its
// prop (the heading's text), not the attribute.
test("no component of the new UI sets the title attribute", () => {
  for (const name of files) {
    const source = readFileSync(new URL(name, dir), "utf8");
    const template = source.slice(source.indexOf("<template>"));
    for (const [tag] of template.matchAll(/<[a-z][a-z0-9-]*\b[^>]*>/g)) {
      assert.doesNotMatch(tag, /\s(?::|v-bind:)?title=/, `${name}: ${tag}`);
    }
  }
});
