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
//               item without `video`, "depth": [its depth files], "image": the frame's image as a PNG, "video": the
//               color proxy MP4, "shots": [{ "name", "state", "output" }], "width", "height" }, and the files it names
// and gets editor.png (with output.png also diff.png, the per-pixel difference x8, and parity.json). In da3/, per
// shot, the grid is drawn twice: with the colors of image.png ((a) the shape: editor_<shot>_image.png, held to the
// 3D file's tolerance) and with the colors of the proxy at the stopped playhead ((b) the proxy:
// editor_<shot>_proxy.png, held to the proxy's looser tolerance), each with its diff_*.png; da3/parity.json has the
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
const da3Dir = path.join(workDir, "da3");
const da3 = (await exists(path.join(da3Dir, "scene.json"))) ? await readJson(path.join(da3Dir, "scene.json")) : null;

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

// The proxy's picture at time 0 as the editor's follower captures it when the playhead is stopped: a still canvas.
async function proxyStill(base64) {
  const video = document.createElement("video");
  video.muted = true;
  video.src = blobUrl(base64, "video/mp4");
  await new Promise((resolve, reject) => {
    video.onloadeddata = resolve;
    video.onerror = () => reject(new Error("This Chromium cannot decode the proxy MP4 (H.264): (b) needs a Chromium that can, or Chrome."));
  });
  // As the follower does: seek to the time and take the picture once the seek is done (a picture taken on
  // loadeddata alone can be empty).
  await new Promise((resolve) => { video.onseeked = resolve; video.currentTime = 0; });
  const still = document.createElement("canvas");
  still.width = video.videoWidth;
  still.height = video.videoHeight;
  still.getContext("2d").drawImage(video, 0, 0);
  return still;
}

// The DA3 mono depth grid of each shot, with the colors of the frame's image (a) and of the proxy (b).
window.renderDepthGrid = async ({ meta, depthBase64, imageBase64, videoBase64, shots, width, height, loadMs }) => {
  const depthUrl = blobUrl(depthBase64, "application/octet-stream");
  const image = await createImageBitmap(new Blob([bytesOf(imageBase64)], { type: "image/png" }), { colorSpaceConversion: "none" });
  let proxy = null;
  let proxyError = null;
  try {
    proxy = await proxyStill(videoBase64);
  } catch (error) {
    proxyError = String(error.message || error);
  }
  const files = sceneFilesOf([{ filename: "depth" }], [{ ...meta, video: { filename: "proxy" } }], (entry) => (entry.filename === "depth" ? depthUrl : "proxy"));
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

  // The DA3 mono depth grid.
  if (da3) {
    if (da3.kind !== "depth_grid" || da3.depth?.length !== 1) throw new Error("da3/scene.json is not one depth grid frame.");
    const grid = await page.evaluate((input) => window.renderDepthGrid(input), {
      meta: da3.meta,
      depthBase64: await base64(path.join(da3Dir, da3.depth[0])),
      imageBase64: await base64(path.join(da3Dir, da3.image)),
      videoBase64: await base64(path.join(da3Dir, da3.video)),
      shots: da3.shots,
      width: da3.width ?? width,
      height: da3.height ?? height,
      loadMs: LOAD_MS,
    });
    console.log(`DA3 mono depth grid: ${da3Dir}`);
    if (grid.proxyError) {
      console.error(`  (b) not drawn: ${grid.proxyError}`);
      failed = true;
    }
    const report = { shots: {} };
    for (const { name, frames } of grid.results) {
      const shot = da3.shots.find((item) => item.name === name);
      report.shots[name] = {};
      for (const [kind, limits] of [["image", SHAPE], ["proxy", PROXY]]) {
        const frame = frames[kind];
        if (!frame) continue;
        await writeFile(path.join(da3Dir, `editor_${name}_${kind}.png`), png(frame.png));
        report.renderer = frame.renderer;
        if (!llvmpipe(frame.renderer)) continue;
        if (!(await exists(path.join(da3Dir, shot.output)))) {
          console.log(`  No ${shot.output}: nothing to compare.`);
          continue;
        }
        // The proxy's chroma block in output pixels: the output is this many pixels per source pixel.
        const chromaEdge = kind === "proxy" ? Math.ceil(CHROMA_BLOCK * (da3.width ?? width) / da3.meta.width) : 0;
        report.shots[name][kind] = await compare(frame.pixels, da3Dir, shot.output, `diff_${name}_${kind}.png`, limits, chromaEdge);
      }
    }
    await writeFile(path.join(da3Dir, "parity.json"), `${JSON.stringify(report, null, 2)}\n`);
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
