import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkerPath = path.join(repoRoot, "tools", "check_panorama_bundle.mjs");
const trackedBundlePath = path.join(repoRoot, "web", "panorama_suite.js");

test("reports a stale generated bundle without changing the checked file", async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "panorama-bundle-check-"));
  const staleBundlePath = path.join(tempDir, "panorama_suite.js");

  try {
    const trackedBundle = await readFile(trackedBundlePath);
    const staleBundle = Buffer.concat([trackedBundle, Buffer.from("\n// stale fixture\n")]);
    await writeFile(staleBundlePath, staleBundle);

    const result = spawnSync(
      process.execPath,
      [checkerPath, "--bundle", staleBundlePath],
      { cwd: repoRoot, encoding: "utf8" },
    );

    assert.equal(result.status, 1, result.stderr || result.stdout);
    assert.match(result.stderr, /Frontend bundle is out of sync\./);
    assert.match(result.stderr, /First difference: line \d+, column \d+\./);
    assert.match(result.stderr, /Generated: \d+ bytes, sha256 [a-f0-9]{12}\./);
    assert.match(result.stderr, /Checked: \d+ bytes, sha256 [a-f0-9]{12}\./);
    assert.match(result.stderr, /Run `npm run build:web` to update web\/panorama_suite\.js\./);
    assert.deepEqual(await readFile(staleBundlePath), staleBundle);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});
