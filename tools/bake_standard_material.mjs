// Bake what three.js draws for MeshStandardMaterial under the default lights, for tests/test_mesh_render.py to
// compare `shade_standard` with (docs/render-contract.md, "光の式").
//
// usage: node tools/bake_standard_material.mjs
//
// Each case is a small flat plane (just wider than the 1 degree view, so that its corners stay near the pixel and
// interpolate precisely) with the given normal, base color, metalness, roughness, and emissive, seen along the
// given view direction by a 1 x 1 float render target, so that the one pixel shows the plane's center in linear
// light (no output color space, no tone mapping). The page is a file:// page in the system temp directory that
// imports the repository's three.js; nothing is fetched from the network. Writes
// tests/fixtures/standard_material_r184.json; bake it again when three.js is updated (ADR 0031).
import { chromium } from "@playwright/test";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lighting = JSON.parse(readFileSync(path.join(root, "tests/fixtures/default_lighting.json"), "utf8"));
const three = pathToFileURL(path.join(root, "node_modules/three/build/three.module.js")).href;
const revision = JSON.parse(readFileSync(path.join(root, "node_modules/three/package.json"), "utf8")).version;

// A fixed pseudo-random sequence, so that the cases do not change between bakes.
let seed = 12345;
function random() {
  seed = (seed * 1103515245 + 12345) % 2147483648;
  return seed / 2147483648;
}
function unit() {
  for (;;) {
    const v = [random() * 2 - 1, random() * 2 - 1, random() * 2 - 1];
    const length = Math.hypot(...v);
    if (length > 0.2 && length < 1) return v.map((x) => x / length);
  }
}

const cases = [];
const metals = [0, 0.3, 1];
const roughs = [0, 0.2, 0.5, 0.8, 1];
for (let i = 0; i < 48; i++) {
  let normal;
  let view;
  do {
    normal = unit();
    view = unit();
  } while (normal[0] * view[0] + normal[1] * view[1] + normal[2] * view[2] < 0.1);
  cases.push({
    normal,
    view,
    base: [random(), random(), random()],
    metalness: metals[i % metals.length],
    roughness: roughs[i % roughs.length],
    emissive: i % 4 === 3 ? [random() * 0.5, random() * 0.5, random() * 0.5] : [0, 0, 0],
  });
}

const page_html = `<!doctype html>
<meta charset="utf-8">
<script type="importmap">{ "imports": { "three": ${JSON.stringify(three)} } }</script>
<script type="module">
import * as THREE from "three";
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.toneMapping = THREE.NoToneMapping;
const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.FloatType });
window.render = (lights, item) => {
  const scene = new THREE.Scene();
  for (const light of lights) {
    const color = new THREE.Color().setRGB(...light.color, THREE.LinearSRGBColorSpace);
    if (light.type === "ambient") {
      scene.add(new THREE.AmbientLight(color, light.intensity));
    } else {
      const directional = new THREE.DirectionalLight(color, light.intensity);
      directional.position.set(...light.position);
      scene.add(directional);
    }
  }
  const material = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, metalness: item.metalness, roughness: item.roughness });
  material.color.setRGB(...item.base, THREE.LinearSRGBColorSpace);
  material.emissive.setRGB(...item.emissive, THREE.LinearSRGBColorSpace);
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), material);
  plane.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...item.normal));
  scene.add(plane);
  const camera = new THREE.PerspectiveCamera(1, 1, 0.1, 100);
  camera.position.set(...item.view.map((x) => x * 3));
  camera.up.set(Math.abs(item.view[1]) > 0.9 ? 1 : 0, Math.abs(item.view[1]) > 0.9 ? 0 : 1, 0);
  camera.lookAt(0, 0, 0);
  renderer.setRenderTarget(target);
  renderer.render(scene, camera);
  const pixel = new Float32Array(4);
  renderer.readRenderTargetPixels(target, 0, 0, 1, 1, pixel);
  const gl = renderer.getContext();
  const info = gl.getExtension("WEBGL_debug_renderer_info");
  return { color: Array.from(pixel.slice(0, 3)), renderer: info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) };
};
window.ready = true;
</script>`;

const directory = mkdtempSync(path.join(tmpdir(), "pano-bake-"));
const page_path = path.join(directory, "page.html");
writeFileSync(page_path, page_html);
const browser = await chromium.launch({ headless: true, args: ["--allow-file-access-from-files"] });
try {
  const page = await browser.newPage();
  const problems = [];
  page.on("pageerror", (error) => problems.push(error.message));
  page.on("console", (message) => message.type() === "error" && problems.push(message.text()));
  page.on("request", (request) => !request.url().startsWith("file:") && problems.push(`non-file request: ${request.url()}`));
  await page.goto(pathToFileURL(page_path).href);
  await page.waitForFunction(() => window.ready === true, null, { timeout: 30000 });
  let renderer = null;
  for (const item of cases) {
    const result = await page.evaluate(([lights, value]) => window.render(lights, value), [lighting.lights, item]);
    item.expected = result.color;
    renderer = result.renderer;
  }
  if (problems.length) throw new Error(problems.join("\n"));
  const out = path.join(root, "tests/fixtures/standard_material_r184.json");
  writeFileSync(out, JSON.stringify({ three: revision, renderer, lights: "default_lighting.json", cases }, null, 1) + "\n");
  console.log(`${cases.length} cases, three ${revision}, ${renderer} -> ${out}`);
} finally {
  await browser.close();
  rmSync(directory, { recursive: true, force: true });
}
