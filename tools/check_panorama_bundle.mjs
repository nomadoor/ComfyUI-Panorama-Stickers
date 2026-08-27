import { createHash } from "node:crypto";
import { readFile, rm, mkdtemp } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(repoRoot, "vite.lib.config.js");
const defaultBundlePath = path.join(repoRoot, "web", "panorama_suite.js");

function parseBundlePath(argv) {
  if (argv.length === 0) return defaultBundlePath;
  if (argv.length === 2 && argv[0] === "--bundle" && argv[1]) {
    return path.resolve(process.cwd(), argv[1]);
  }
  throw new Error("Usage: node tools/check_panorama_bundle.mjs [--bundle <path>]");
}

function shortSha256(content) {
  return createHash("sha256").update(content).digest("hex").slice(0, 12);
}

function firstDifference(generated, checked) {
  const commonLength = Math.min(generated.length, checked.length);
  let index = 0;
  while (index < commonLength && generated[index] === checked[index]) index += 1;

  const preceding = generated.subarray(0, index).toString("utf8");
  const lines = preceding.split("\n");
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

async function main() {
  const checkedBundlePath = parseBundlePath(process.argv.slice(2));
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "panorama-bundle-check-"));

  try {
    await build({
      configFile: configPath,
      root: repoRoot,
      logLevel: "silent",
      build: {
        outDir: tempDir,
        emptyOutDir: true,
      },
    });

    const generated = await readFile(path.join(tempDir, "panorama_suite.js"));
    const checked = await readFile(checkedBundlePath);
    if (generated.equals(checked)) {
      console.log("Frontend bundle is in sync.");
      return;
    }

    const difference = firstDifference(generated, checked);
    console.error("Frontend bundle is out of sync.");
    console.error(`First difference: line ${difference.line}, column ${difference.column}.`);
    console.error(`Generated: ${generated.length} bytes, sha256 ${shortSha256(generated)}.`);
    console.error(`Checked: ${checked.length} bytes, sha256 ${shortSha256(checked)}.`);
    console.error("Run `npm run build:web` to update web/panorama_suite.js.");
    process.exitCode = 1;
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 2;
}
