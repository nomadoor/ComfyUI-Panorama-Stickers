// The editor's side of the parity scenes of docs/render-contract.md: the 3D file Sticker ("エディタとの一致（照明の
// 場面）", "3D ファイルの Sticker の場面") and the DA3_GEOMETRY mono depth grid ("エディタとの一致（DA3 mono の場面）").
// A milestone tool, not a CI test: it draws what tools/parity_file_3d.py wrote into a work directory with the parts
// the editor's space view draws with, reads the frames back and compares them with the node's frames. Nothing it
// writes is committed.
//
// usage: node tools/parity_file_3d.mjs <work dir>
//
// The work directory holds, from tools/parity_file_3d.py:
//   scene.json  { "state": state v2 with its Camera and the 3D file Sticker, "glb": the GLB's file name in the work
//               directory (the editor file the route would return), "unlit": whether the item draws without light
//               (MESH.unlit), "width": 1024, "height": 1024 }
//   output.png  the node's frame of the same state (optional: without it only editor.png is written)
//   da3/        (optional) the DA3 mono scene: scene.json { "kind": "depth_grid", "meta": the node's pano_scene_meta
//               item without `video`, "depth": [its depth files, one per frame], "image": frame 0's image as a PNG,
//               "video": the color proxy MP4, "shots": [{ "name", "state", "output" }] (outputs of frame 0), "width",
//               "height" }, and the files it names
//   moge/       (optional) the MOGE_GEOMETRY perspective sequence (ADR 0040), the same shape with several frames
// and gets editor.png (with output.png also diff.png, the per-pixel difference x8, and parity.json). In da3/ and
// moge/, per shot, frame 0's grid is drawn twice: with the colors of image.png ((a) the shape: editor_<shot>_image.png, held to the
// 3D file's tolerance) and with the colors of the proxy, its <video> paused at the item's time and drawn as a
// VideoTexture as when it plays ((b) the proxy:
// editor_<shot>_proxy.png, held to the proxy's looser tolerance), each with its diff_*.png; its parity.json has the
// numbers.
//
// Headless Chromium runs with `--use-angle=vulkan --enable-features=Vulkan`, which picks Mesa's llvmpipe
// (lavapipe) where its Vulkan ICD is installed (ADR 0037 "一致の測り方"). The frames are compared only when the
// WebGL renderer is llvmpipe; on any other renderer the tool fails without comparing. The page is a file:// page:
// no server and no network.
import { access, readFile, realpath, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "@playwright/test";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// ADR 0037: inside a one-pixel border, mean <= 1/255 and at most 0.5% of pixels over 8/255 (provisional). The DA3
// proxy's colors carry the H.264 error: mean <= 2/255 and at most 1% over 16/255 (provisional, to tighten once
// measured).
const SHAPE = { mean: 1, over: 8, fraction: 0.005 };
const PROXY = { mean: 2, over: 16, fraction: 0.01 };
// The proxy is 4:2:0, so its colors are kept per 2 x 2 source pixels: next to an edge between a colored band and the
// gray checker the chroma bleeds by up to a block (measured: over 99% of the pixels over 16/255 lie within 6 output
// pixels of such an edge). The spec looks at the bands inside, away from their edges (docs/render-contract.md "エディタ
// との一致（DA3 mono の場面）"), so (b) leaves out the pixels within one chroma block (2 source pixels, in output
// pixels) of an edge between colored and gray in the node's frame. Luma edges (the checker) stay in.
const CHROMA_BLOCK = 2;
const LOAD_MS = 30000;

function usage(message) {
  if (message) console.error(message);
  console.error("usage: node tools/parity_file_3d.mjs <work dir>");
  process.exit(2);
}

const workDir = process.argv[2] ? path.resolve(process.argv[2]) : usage();
if (process.argv.length > 3) usage("Only the work directory is taken.");

const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const exists = (file) => access(file).then(() => true, () => false);
const base64 = async (file) => (await readFile(file)).toString("base64");
const png = (dataUrl) => Buffer.from(dataUrl.split(",")[1], "base64");

const scene = await readJson(path.join(workDir, "scene.json")).catch(() => usage(`No scene.json in ${workDir}.`));
const width = scene.width ?? 1024;
const height = scene.height ?? 1024;
// The depth grid scenes there are: [label, dir, scene].
const depthScenes = [];
for (const [label, name] of [["DA3 mono", "da3"], ["MoGe perspective sequence", "moge"]]) {
  const dir = path.join(workDir, name);
  if (await exists(path.join(dir, "scene.json"))) depthScenes.push([label, dir, await readJson(path.join(dir, "scene.json"))]);
}

// The page imports the editor's modules from web_src and three from node_modules through an import map.
const modules = pathToFileURL(await realpath(path.join(repoRoot, "node_modules"))).href;
const webSrc = pathToFileURL(path.join(repoRoot, "web_src")).href;
const pagePath = path.join(workDir, "parity_file_3d.html");
await writeFile(pagePath, `<!doctype html>
<meta charset="utf-8">
<title>3D parity</title>
<body style="margin:0;background:#000">
<script type="importmap">
${JSON.stringify({ imports: {
  three: `${modules}/three/build/three.module.js`,
  "three/examples/jsm/": `${modules}/three/examples/jsm/`,
  "three/addons/": `${modules}/three/examples/jsm/`,
  "@sparkjsdev/spark": `${modules}/@sparkjsdev/spark/dist/spark.module.js`,
} })}
</script>
<script type="module">
import { createThreeView } from "${webSrc}/pano_three_view.js";
import { cameraShot } from "${webSrc}/pano_editor_state.js";
import { shotCamera } from "${webSrc}/pano_editor_view.js";
import { evaluateSceneState } from "${webSrc}/pano_scene_eval.js";
import { loadSceneState } from "${webSrc}/pano_scene_state.js";
import { fileStickerRequests, sceneFilesOf, sceneRequest } from "${webSrc}/pano_space.js";

const bytesOf = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
const blobUrl = (base64, type) => URL.createObjectURL(new Blob([bytesOf(base64)], { type }));

function makeView(width, height) {
  let update = () => {};
  const view = createThreeView({
    createCanvas: () => document.body.appendChild(document.createElement("canvas")),
    onUpdate: () => update(),
  });
  view.resize(width, height);
  const gl = view.canvas.getContext("webgl2");
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  const renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  const probe = document.createElement("canvas");
  probe.width = width;
  probe.height = height;
  const probe2d = probe.getContext("2d", { willReadFrequently: true });
  // Draws until the item loaded and a few frames after, so its textures are uploaded; returns the frame as a PNG
  // and its pixels.
  async function capture(input, loadMs) {
    const draw = () => {
      view.render({ rect: { x: 0, y: 0, w: width, h: height }, background: null, layers: [], clearColor: 0x000000, ...input });
      probe2d.drawImage(view.canvas, 0, 0, width, height);
    };
    const begin = performance.now();
    let loaded = 0;
    while (loaded < 3) {
      await new Promise((resolve) => { update = resolve; requestAnimationFrame(resolve); });
      draw();
      if (view.stats().sceneItems.loaded > 0) loaded += 1;
      else if (performance.now() - begin > loadMs) throw new Error("The item did not load.");
    }
    return { png: probe.toDataURL("image/png"), pixels: Array.from(probe2d.getImageData(0, 0, width, height).data) };
  }
  return { renderer, capture, dispose: () => view.dispose() };
}

function shotOf(state) {
  if (!state.camera) throw new Error("The state has no Camera.");
  const shot = cameraShot(state.camera, 0);
  return { ...shotCamera(shot), position: shot.position, near: 0.01, far: 1000 };
}

window.renderParity = async ({ glbBase64, state: raw, unlit, width, height, loadMs }) => {
  const url = blobUrl(glbBase64, "model/gltf-binary");
  const { renderer, capture, dispose } = makeView(width, height);
  const state = loadSceneState(raw);
  const entries = fileStickerRequests(state, evaluateSceneState(state, 0), () => ({ kind: "mesh", unlit, url, generation: 0 }));
  if (entries.length !== 1 || !entries[0].request) throw new Error("The state needs one active world Sticker of a 3D file.");
  const space = {
    grid: null, sceneUrls: [], scene: null, stickerUrls: [], sticker: null,
    fileStickers: [entries[0].request], fileStickerKeys: [entries[0].key],
    stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null,
  };
  const frame = await capture({ camera: shotOf(state), space }, loadMs);
  dispose();
  return { renderer, editor: frame.png, pixels: frame.pixels };
};

// The proxy at the item's time (0) as the <video> itself, paused there: it draws as a VideoTexture, the upload a
// playing proxy has (three keeps a VideoTexture in RGBA8 and the shader decodes its sRGB), not the still the follower
// copies off it when the playhead stops (a canvas, uploaded as SRGB8_ALPHA8).
async function proxyVideo(base64) {
  const video = document.createElement("video");
  video.muted = true;
  video.src = blobUrl(base64, "video/mp4");
  await new Promise((resolve, reject) => {
    video.onloadeddata = resolve;
    video.onerror = () => reject(new Error("This Chromium cannot decode the proxy MP4 (H.264): (b) needs a Chromium that can, or Chrome."));
  });
  await new Promise((resolve) => { video.onseeked = resolve; video.currentTime = 0; });
  video.pause();
  return video;
}

// The DA3 mono depth grid of each shot, with the colors of the frame's image (a) and of the proxy (b).
window.renderDepthGrid = async ({ meta, depthBase64s, imageBase64, videoBase64, shots, width, height, loadMs }) => {
  const depthUrls = depthBase64s.map((value) => blobUrl(value, "application/octet-stream"));
  const image = await createImageBitmap(new Blob([bytesOf(imageBase64)], { type: "image/png" }), { colorSpaceConversion: "none" });
  let proxy = null;
  let proxyError = null;
  try {
    proxy = await proxyVideo(videoBase64);
  } catch (error) {
    proxyError = String(error.message || error);
  }
  const files = sceneFilesOf(depthUrls.map((url) => ({ filename: url })), [{ ...meta, video: { filename: "proxy" } }], (entry) => (entry.filename === "proxy" ? "proxy" : entry.filename));
  if (!files) throw new Error("The meta is not a depth grid's.");
  const results = [];
  for (const shot of shots) {
    const state = loadSceneState(shot.state);
    const request = sceneRequest(files, evaluateSceneState(state, 0).scene);
    if (!request?.url) throw new Error("The scene is not shown at frame 0.");
    const frames = {};
    for (const [name, media] of [["image", image], ["proxy", proxy]]) {
      if (!media) continue;
      const { renderer, capture, dispose } = makeView(width, height);
      const space = {
        grid: null, sceneUrls: files.urls.filter(Boolean), scene: { ...request, color: { media, revision: 1, source: name } },
        stickerUrls: [], sticker: null, stickers: [], lines: [], upstreamItems: [], upstreamStickers: [], gizmo: null,
      };
      frames[name] = { renderer, ...(await capture({ camera: shotOf(state), space }, loadMs)) };
      dispose();
    }
    results.push({ name: shot.name, frames });
  }
  return { results, proxyError };
};

// Two frames' difference inside a one-pixel border: mean of |a - b| over RGB (of 255), the part of pixels whose
// largest channel difference is over \`over\`, and the difference x8 as a PNG.
window.compareParity = async ({ editorPixels, outputBase64, width, height, over, chromaEdge = 0 }) => {
  const image = await createImageBitmap(new Blob([bytesOf(outputBase64)], { type: "image/png" }), { colorSpaceConversion: "none", premultiplyAlpha: "none" });
  if (image.width !== width || image.height !== height) throw new Error(\`The output is \${image.width} x \${image.height}, not \${width} x \${height}.\`);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0);
  const node = ctx.getImageData(0, 0, width, height).data;
  // With chromaEdge, the pixels within chromaEdge of an edge between colored and gray pixels of the node's frame.
  const nearEdge = new Uint8Array(width * height);
  if (chromaEdge > 0) {
    const colored = new Uint8Array(width * height);
    for (let p = 0; p < width * height; p += 1) {
      const r = node[p * 4];
      const g = node[p * 4 + 1];
      const b = node[p * 4 + 2];
      colored[p] = Math.max(r, g, b) - Math.min(r, g, b) > 40 ? 1 : 0;
    }
    const edge = new Uint8Array(width * height);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const p = y * width + x;
        if ((x + 1 < width && colored[p + 1] !== colored[p]) || (y + 1 < height && colored[p + width] !== colored[p])) edge[p] = 1;
      }
    }
    // A square of side 2 chromaEdge + 1 around each edge pixel, in two passes.
    const rows = new Uint8Array(width * height);
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        if (!edge[y * width + x]) continue;
        for (let dx = -chromaEdge; dx <= chromaEdge; dx += 1) if (x + dx >= 0 && x + dx < width) rows[y * width + x + dx] = 1;
      }
    }
    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        if (!rows[y * width + x]) continue;
        for (let dy = -chromaEdge; dy <= chromaEdge; dy += 1) if (y + dy >= 0 && y + dy < height) nearEdge[(y + dy) * width + x] = 1;
      }
    }
  }
  const diff = ctx.createImageData(width, height);
  let sum = 0;
  let count = 0;
  let overCount = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const inside = x > 0 && y > 0 && x < width - 1 && y < height - 1 && !nearEdge[y * width + x];
      let largest = 0;
      for (let c = 0; c < 3; c += 1) {
        const d = Math.abs(editorPixels[i + c] - node[i + c]);
        diff.data[i + c] = Math.min(255, d * 8);
        largest = Math.max(largest, d);
        if (inside) sum += d;
      }
      diff.data[i + 3] = 255;
      if (inside) {
        count += 1;
        if (largest > over) overCount += 1;
      }
    }
  }
  ctx.putImageData(diff, 0, 0);
  return { mean: sum / (count * 3), overFraction: overCount / count, excluded: nearEdge.reduce((total, value) => total + value, 0), diff: canvas.toDataURL("image/png") };
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

  // Compares one frame with the node's (`output`, a PNG in `dir`) to `limits`, writing its diff; returns the numbers.
  const compare = async (pixels, dir, output, diffName, limits, chromaEdge = 0) => {
    const compared = await page.evaluate((input) => window.compareParity(input), {
      editorPixels: pixels, outputBase64: await base64(path.join(dir, output)), width, height, over: limits.over, chromaEdge,
    });
    if (chromaEdge) console.log(`  ${diffName}: ${compared.excluded} pixels within ${chromaEdge} of a color edge left out`);
    await writeFile(path.join(dir, diffName), png(compared.diff));
    const pass = compared.mean <= limits.mean && compared.overFraction <= limits.fraction;
    console.log(`  ${diffName}: mean ${compared.mean.toFixed(3)}/255 (limit ${limits.mean}), over ${limits.over}/255 ${(compared.overFraction * 100).toFixed(3)}% (limit ${limits.fraction * 100}%) ${pass ? "pass" : "FAIL"}`);
    if (!pass) failed = true;
    return { mean: compared.mean, [`over_${limits.over}_fraction`]: compared.overFraction, limits, pass, ...(chromaEdge ? { chroma_edge: chromaEdge, excluded: compared.excluded } : {}) };
  };
  // The baseline is llvmpipe's: another renderer is not compared (ADR 0037).
  const llvmpipe = (renderer) => {
    console.log(`renderer: ${renderer}`);
    if (/llvmpipe/i.test(renderer)) return true;
    console.error("The WebGL renderer is not llvmpipe, so the frames are not compared. Install Mesa's Vulkan driver (lavapipe).");
    failed = true;
    return false;
  };

  // The 3D file Sticker.
  const box = await page.evaluate((input) => window.renderParity(input), {
    glbBase64: await base64(path.join(workDir, String(scene.glb ?? ""))), state: scene.state, unlit: scene.unlit === true, width, height, loadMs: LOAD_MS,
  });
  await writeFile(path.join(workDir, "editor.png"), png(box.editor));
  console.log(`3D file Sticker: ${path.join(workDir, "editor.png")}`);
  if (llvmpipe(box.renderer)) {
    if (await exists(path.join(workDir, "output.png"))) {
      const report = { renderer: box.renderer, ...(await compare(box.pixels, workDir, "output.png", "diff.png", SHAPE)) };
      await writeFile(path.join(workDir, "parity.json"), `${JSON.stringify(report, null, 2)}\n`);
    } else {
      console.log("No output.png in the work directory: nothing to compare.");
    }
  }

  // The depth grids (DA3 mono, MoGe perspective sequence), each at frame 0.
  for (const [label, dir, grid3d] of depthScenes) {
    if (grid3d.kind !== "depth_grid" || !grid3d.depth?.length) throw new Error(`${dir}/scene.json is not a depth grid scene.`);
    const grid = await page.evaluate((input) => window.renderDepthGrid(input), {
      meta: grid3d.meta,
      depthBase64s: await Promise.all(grid3d.depth.map((name) => base64(path.join(dir, name)))),
      imageBase64: await base64(path.join(dir, grid3d.image)),
      videoBase64: await base64(path.join(dir, grid3d.video)),
      shots: grid3d.shots,
      width: grid3d.width ?? width,
      height: grid3d.height ?? height,
      loadMs: LOAD_MS,
    });
    console.log(`${label} depth grid (${grid3d.depth.length} frames, frame 0): ${dir}`);
    if (grid.proxyError) {
      console.error(`  (b) not drawn: ${grid.proxyError}`);
      failed = true;
    }
    const report = { frames: grid3d.depth.length, shots: {} };
    for (const { name, frames } of grid.results) {
      const shot = grid3d.shots.find((item) => item.name === name);
      report.shots[name] = {};
      for (const [kind, limits] of [["image", SHAPE], ["proxy", PROXY]]) {
        const frame = frames[kind];
        if (!frame) continue;
        await writeFile(path.join(dir, `editor_${name}_${kind}.png`), png(frame.png));
        report.renderer = frame.renderer;
        if (!llvmpipe(frame.renderer)) continue;
        if (!(await exists(path.join(dir, shot.output)))) {
          console.log(`  No ${shot.output}: nothing to compare.`);
          continue;
        }
        // The proxy's chroma block in output pixels: the output is this many pixels per source pixel.
        const chromaEdge = kind === "proxy" ? Math.ceil(CHROMA_BLOCK * (grid3d.width ?? width) / grid3d.meta.width) : 0;
        report.shots[name][kind] = await compare(frame.pixels, dir, shot.output, `diff_${name}_${kind}.png`, limits, chromaEdge);
      }
    }
    await writeFile(path.join(dir, "parity.json"), `${JSON.stringify(report, null, 2)}\n`);
  }
  if (problems.length) {
    console.error(problems.join("\n"));
    failed = true;
  }
} finally {
  await browser.close();
}
console.log(failed ? "FAIL" : "pass");
process.exit(failed ? 1 : 0);
