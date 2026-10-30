import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cp, mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkerPath = path.join(repoRoot, "tools", "check_panorama_bundle.mjs");
const trackedWebDir = path.join(repoRoot, "web");

function runChecker(webDir) {
  return spawnSync(process.execPath, [checkerPath, "--web", webDir], { cwd: repoRoot, encoding: "utf8" });
}

async function withWebCopy(fn) {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "panorama-bundle-check-"));
  try {
    await cp(trackedWebDir, tempDir, { recursive: true });
    await fn(tempDir);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

test("reports a stale generated bundle without changing the checked file", async () => {
  await withWebCopy(async (webDir) => {
    const bundlePath = path.join(webDir, "panorama_suite.js");
    const staleBundle = Buffer.concat([await readFile(bundlePath), Buffer.from("\n// stale fixture\n")]);
    await writeFile(bundlePath, staleBundle);

    const result = runChecker(webDir);

    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.match(result.stderr, /web\/panorama_suite\.js is out of sync\./);
    assert.match(result.stderr, /First difference: line \d+, column \d+\./);
    assert.match(result.stderr, /Generated: \d+ bytes, sha256 [a-f0-9]{12}\./);
    assert.match(result.stderr, /Checked: \d+ bytes, sha256 [a-f0-9]{12}\./);
    assert.match(result.stderr, /Run `npm run build:web` to update web\/panorama_suite\.js and web\/\.lazy\/\./);
    assert.deepEqual(await readFile(bundlePath), staleBundle);
  });
});

test("reports stale and leftover chunks in web/.lazy", async () => {
  await withWebCopy(async (webDir) => {
    const [chunkName] = (await readdir(path.join(webDir, ".lazy"))).filter((name) => name.startsWith("pano_three_view-"));
    const chunkPath = path.join(webDir, ".lazy", chunkName);
    await writeFile(chunkPath, Buffer.concat([await readFile(chunkPath), Buffer.from("\n// stale fixture\n")]));
    await writeFile(path.join(webDir, ".lazy", "old_chunk.js"), "export {};\n");

    const result = runChecker(webDir);

    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.match(result.stderr, new RegExp(`web/\\.lazy/${chunkName.replace(".", "\\.")} is out of sync\\.`));
    assert.match(result.stderr, /web\/\.lazy\/old_chunk\.js is not produced by the build; delete it\./);
  });
});

test("reports three.js in the eagerly loaded bundle", async () => {
  await withWebCopy(async (webDir) => {
    const bundlePath = path.join(webDir, "panorama_suite.js");
    await writeFile(bundlePath, Buffer.concat([await readFile(bundlePath), Buffer.from("\n// Three.js Authors\n")]));

    const result = runChecker(webDir);

    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.match(result.stderr, /web\/panorama_suite\.js includes three\.js; it must load lazily\./);
  });
});
