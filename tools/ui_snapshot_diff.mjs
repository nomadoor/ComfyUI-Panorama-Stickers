// Compares two tools/ui_snapshot.mjs outputs: node tools/ui_snapshot_diff.mjs <before> <after>. Prints every
// element or style value that differs, and exits 1 if any does.
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const [before, after] = process.argv.slice(2);
let differences = 0;
// Only the setup that changes how the page lays out must match; where the files came from is what is compared.
const meta = (dir) => JSON.stringify((existsSync(join(dir, "meta.json")) ? JSON.parse(readFileSync(join(dir, "meta.json"), "utf8")) : {}).vueNodes);
if (meta(before) !== meta(after)) {
  console.log(`the runs differ in setup: Node 2.0 ${meta(before)} vs ${meta(after)}`);
  differences += 1;
}
for (const file of readdirSync(before).filter((name) => name.endsWith(".json") && !["problems.json", "meta.json"].includes(name))) {
  if (!existsSync(join(after, file))) {
    console.log(`${file}: missing after`);
    differences += 1;
    continue;
  }
  const a = JSON.parse(readFileSync(join(before, file), "utf8")) || {};
  const b = JSON.parse(readFileSync(join(after, file), "utf8")) || {};
  for (const path of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (!a[path] || !b[path]) {
      console.log(`${file}: ${a[path] ? "removed" : "added"} ${path}`);
      differences += 1;
      continue;
    }
    for (const name of new Set([...Object.keys(a[path]), ...Object.keys(b[path])])) {
      if (a[path][name] !== b[path][name]) {
        console.log(`${file}: ${path} ${name}: ${a[path][name]} -> ${b[path][name]}`);
        differences += 1;
      }
    }
  }
}
console.log(`${differences} differences`);
process.exit(differences ? 1 : 0);
