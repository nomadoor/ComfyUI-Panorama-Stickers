import { createHash } from "node:crypto";
import { readFile, readdir, rm, mkdtemp } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = path.join(repoRoot, "vite.lib.config.js");
const defaultWebDir = path.join(repoRoot, "web");
// Chunks loaded on demand; see vite.lib.config.js.
const LAZY_DIR = ".lazy";

function parseWebDir(argv) {
  if (argv.length === 0) return defaultWebDir;
  if (argv.length === 2 && argv[0] === "--web" && argv[1]) {
    return path.resolve(process.cwd(), argv[1]);
  }
  throw new Error("Usage: node tools/check_panorama_bundle.mjs [--web <dir>]");
}

async function listBuiltFiles(webDir) {
  const lazy = await readdir(path.join(webDir, LAZY_DIR)).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  return ["panorama_suite.js", ...lazy.filter((name) => name.endsWith(".js")).sort().map((name) => `${LAZY_DIR}/${name}`)];
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

async function checkFile(name, generatedDir, webDir) {
  const generated = await readFile(path.join(generatedDir, name));
  const checked = await readFile(path.join(webDir, name)).catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (!checked) {
    console.error(`web/${name} is missing.`);
    return false;
  }
  if (generated.equals(checked)) return true;
  const difference = firstDifference(generated, checked);
  console.error(`web/${name} is out of sync.`);
  console.error(`First difference: line ${difference.line}, column ${difference.column}.`);
  console.error(`Generated: ${generated.length} bytes, sha256 ${shortSha256(generated)}.`);
  console.error(`Checked: ${checked.length} bytes, sha256 ${shortSha256(checked)}.`);
  return false;
}

async function main() {
  const webDir = parseWebDir(process.argv.slice(2));
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

    const generatedFiles = await listBuiltFiles(tempDir);
    let inSync = true;
    for (const name of generatedFiles) {
      if (!await checkFile(name, tempDir, webDir)) inSync = false;
    }
    for (const name of await listBuiltFiles(webDir)) {
      if (generatedFiles.includes(name)) continue;
      console.error(`web/${name} is not produced by the build; delete it.`);
      inSync = false;
    }
    if (inSync) {
      console.log("Frontend bundle is in sync.");
      return;
    }
    console.error("Frontend bundle is out of sync.");
    console.error("Run `npm run build:web` to update web/panorama_suite.js and web/.lazy/.");
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
