// The editor's side of the 3D file Sticker parity scene (docs/render-contract.md "エディタとの一致（照明の場面）",
// "3D ファイルの Sticker の場面"). A milestone tool, not a CI test: it draws the GLB and state that
// tools/parity_file_3d.py wrote into a work directory with the parts the editor's space view draws with
// (pano_space.js fileStickerRequests, the 3D Sticker queue and loadSceneItem, the default lights, buildWorld of
// pano_three_view.js), reads the frame back, and compares it with the node's frame. Nothing it writes is committed.
//
// usage: node tools/parity_file_3d.mjs <work dir>
//
// The work directory holds, from tools/parity_file_3d.py:
//   scene.json  { "state": state v2 with its Camera and the 3D file Sticker, "glb": the GLB's file name in the work
//               directory (the editor file the route would return), "unlit": whether the item draws without light
//               (MESH.unlit), "width": 1024, "height": 1024 }
//   output.png  the node's frame of the same state (optional: without it only editor.png is written)
// and gets editor.png, and with output.png also diff.png (the per-pixel difference, x8) and parity.json.
//
// Headless Chromium runs with `--use-angle=vulkan --enable-features=Vulkan`, which picks Mesa's llvmpipe
// (lavapipe) where its Vulkan ICD is installed (ADR 0037 "一致の測り方"). The frames are compared only when the
// WebGL renderer is llvmpipe; on any other renderer the tool fails without comparing. The page is a file:// page:
// no server and no network.
import { readFile, realpath, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// ADR 0037: inside a one-pixel border, mean <= 1/255 and at most 0.5% of pixels over 8/255 (provisional).
const MAX_MEAN = 1;
const PIXEL_OVER = 8;
const MAX_OVER_FRACTION = 0.005;
const LOAD_MS = 30000;

function usage(message) {
  if (message) console.error(message);
  console.error("usage: node tools/parity_file_3d.mjs <work dir>");
  process.exit(2);
}

const workDir = process.argv[2] ? path.resolve(process.argv[2]) : usage();
if (process.argv.length > 3) usage("Only the work directory is taken.");

const scene = JSON.parse(await readFile(path.join(workDir, "scene.json"), "utf8").catch(() => usage(`No scene.json in ${workDir}.`)));
const width = scene.width ?? 1024;
const height = scene.height ?? 1024;
const glb = await readFile(path.join(workDir, String(scene.glb ?? "")));
const output = await readFile(path.join(workDir, "output.png")).catch(() => null);

// The page imports the editor's modules from web_src and three from node_modules through an import map.
const modules = pathToFileURL(await realpath(path.join(repoRoot, "node_modules"))).href;
const webSrc = pathToFileURL(path.join(repoRoot, "web_src")).href;
const pagePath = path.join(workDir, "parity_file_3d.html");
await writeFile(pagePath, `<!doctype html>
<meta charset="utf-8">
<title>3D file parity</title>
<body style="margin:0;background:#000">
<script type="importmap">
${JSON.stringify({ imports: {
  three: `${modules}/three/build/three.module.js`,
  "three/examples/jsm/": `${modules}/three/examples/jsm/`,
  "@sparkjsdev/spark": `${modules}/@sparkjsdev/spark/dist/spark.module.js`,
} })}
</script>
<script type="module">
import { createThreeView } from "${webSrc}/pano_three_view.js";
import { cameraShot } from "${webSrc}/pano_editor_state.js";
import { shotCamera } from "${webSrc}/pano_editor_view.js";
import { evaluateSceneState } from "${webSrc}/pano_scene_eval.js";
import { loadSceneState } from "${webSrc}/pano_scene_state.js";
import { fileStickerRequests } from "${webSrc}/pano_space.js";

window.renderParity = async ({ glbBase64, state: raw, unlit, width, height, loadMs }) => {
  const bytes = Uint8Array.from(atob(glbBase64), (c) => c.charCodeAt(0));
  const url = URL.createObjectURL(new Blob([bytes], { type: "model/gltf-binary" }));
  let update = () => {};
  const view = createThreeView({
    createCanvas: () => document.body.appendChild(document.createElement("canvas")),
    onUpdate: () => update(),
  });
  view.resize(width, height);
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const state = loadSceneState(raw);
  if (!state.camera) throw new Error("The state has no Camera.");
  const entries = fileStickerRequests(state, evaluateSceneState(state, 0), () => ({ kind: "mesh", unlit, url, generation: 0 }));
  if (entries.length !== 1 || !entries[0].request) throw new Error("The state needs one active world Sticker of a 3D file.");
  const space = {
    grid: null, sceneUrls: [], scene: null, stickerUrls: [], sticker: null,
    fileStickers: [entries[0].request], fileStickerKeys: [entries[0].key],
    stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null,
  };
  const shot = cameraShot(state.camera, 0);
  const camera = { ...shotCamera(shot), position: shot.position, near: 0.01, far: 1000 };
  const probe = document.createElement("canvas");
  probe.width = width;
  probe.height = height;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  const draw = () => {
    view.render({ rect: { x: 0, y: 0, w: width, h: height }, camera, background: null, layers: [], space, clearColor: 0x000000 });
    probe2d.drawImage(view.canvas, 0, 0, width, height);
  };
  // Draw until the item loaded and a few frames after, so its texture is uploaded.
  const begin = performance.now();
  let loaded = 0;
  while (loaded < 3) {
    await new Promise((resolve) => { update = resolve; requestAnimationFrame(resolve); });
    draw();
    if (view.stats().sceneItems.loaded > 0) loaded += 1;
    else if (performance.now() - begin > loadMs) throw new Error("The GLB did not load.");
  }
  const editor = probe.toDataURL("image/png");
  view.dispose();
  return { renderer, editor, pixels: Array.from(probe2d.getImageData(0, 0, width, height).data) };
};

// The two frames' difference inside a one-pixel border: mean of |a - b| over RGB (of 255), the part of pixels whose
// largest channel difference is over \`over\`, and the difference x8 as a PNG.
window.compareParity = async ({ editorPixels, outputBase64, width, height, over }) => {
  const image = await createImageBitmap(new Blob([Uint8Array.from(atob(outputBase64), (c) => c.charCodeAt(0))], { type: "image/png" }), { colorSpaceConversion: "none", premultiplyAlpha: "none" });
  if (image.width !== width || image.height !== height) throw new Error(\`output.png is \${image.width} x \${image.height}, not \${width} x \${height}.\`);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  const node = ctx.getImageData(0, 0, width, height).data;
  const diff = ctx.createImageData(width, height);
  let sum = 0;
  let count = 0;
  let overCount = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      let largest = 0;
      for (let c = 0; c < 3; c += 1) {
        const d = Math.abs(editorPixels[i + c] - node[i + c]);
        diff.data[i + c] = Math.min(255, d * 8);
        largest = Math.max(largest, d);
        if (x > 0 && y > 0 && x < width - 1 && y < height - 1) sum += d;
      }
      diff.data[i + 3] = 255;
      if (x > 0 && y > 0 && x < width - 1 && y < height - 1) {
        count += 1;
        if (largest > over) overCount += 1;
      }
    }
  }
  ctx.putImageData(diff, 0, 0);
  return { mean: sum / (count * 3), overFraction: overCount / count, diff: canvas.toDataURL("image/png") };
};
window.__ready = true;
</script>
`);

const browser = await chromium.launch({
  headless: true,
  args: ["--allow-file-access-from-files", "--ignore-gpu-blocklist", "--use-angle=vulkan", "--enable-features=Vulkan"],
});
let failed = false;
try {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, offline: true });
  const page = await context.newPage();
  const problems = [];
  page.on("console", (message) => { if (message.type() === "error") problems.push(`console: ${message.text()}`); });
  page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
  page.on("request", (request) => {
    const url = request.url();
    if (!url.startsWith("file:") && !url.startsWith("blob:") && !url.startsWith("data:")) problems.push(`non-file request: ${url}`);
  });
  await page.goto(pathToFileURL(pagePath).href);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });
  const result = await page.evaluate((input) => window.renderParity(input), {
    glbBase64: glb.toString("base64"), state: scene.state, unlit: scene.unlit === true, width, height, loadMs: LOAD_MS,
  });
  console.log(`renderer: ${result.renderer}`);
  await writeFile(path.join(workDir, "editor.png"), Buffer.from(result.editor.split(",")[1], "base64"));
  console.log(`editor: ${path.join(workDir, "editor.png")}`);
  if (problems.length) {
    console.error(problems.join("\n"));
    failed = true;
  }
  // The baseline is llvmpipe's: another renderer is not compared (ADR 0037).
  if (!/llvmpipe/i.test(result.renderer)) {
    console.error("The WebGL renderer is not llvmpipe, so the frames are not compared. Install Mesa's Vulkan driver (lavapipe).");
    failed = true;
  } else if (!output) {
    console.log("No output.png in the work directory: nothing to compare.");
  } else {
    const compared = await page.evaluate((input) => window.compareParity(input), {
      editorPixels: result.pixels, outputBase64: output.toString("base64"), width, height, over: PIXEL_OVER,
    });
    await writeFile(path.join(workDir, "diff.png"), Buffer.from(compared.diff.split(",")[1], "base64"));
    const pass = compared.mean <= MAX_MEAN && compared.overFraction <= MAX_OVER_FRACTION;
    const report = {
      renderer: result.renderer,
      mean: compared.mean,
      over_8_fraction: compared.overFraction,
      limits: { mean: MAX_MEAN, over_8_fraction: MAX_OVER_FRACTION },
      pass,
    };
    await writeFile(path.join(workDir, "parity.json"), `${JSON.stringify(report, null, 2)}\n`);
    console.log(`mean |editor - output|: ${compared.mean.toFixed(3)}/255 (limit ${MAX_MEAN}/255)`);
    console.log(`pixels over 8/255: ${(compared.overFraction * 100).toFixed(3)}% (limit ${MAX_OVER_FRACTION * 100}%)`);
    console.log(pass ? "pass" : "FAIL");
    if (!pass) failed = true;
  }
} finally {
  await browser.close();
}
process.exit(failed ? 1 : 0);
