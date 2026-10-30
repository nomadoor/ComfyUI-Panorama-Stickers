// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node with one 3D file Sticker whose GLB is two
// small cubes at opposite corners of its box, so the middle of its box is empty, for tests/browser/studio_hit.spec.js
// (docs/space-and-view.md "ホバーの判定"). ComfyUI is not used: the page stands in for the node's 3D file route and
// serves the GLB from a blob URL. The page reports through window.__studio.
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene, SphereGeometry } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { COARSE_GRID_IDLE_TIMEOUT_MS, createCoarseGridBuilds, itemCoarseGrid } from "/web_src/pano_coarse_grid.js";
import { editorSession } from "/web_src/pano_node_bridge.js";
import { evaluateSticker } from "/web_src/pano_scene_eval.js";
import { projectPoint, transformPoint } from "/web_src/pano_space.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const params = new URLSearchParams(location.search);
// `?heavy=1`: the cubes are spheres of about 240k triangles each, for the measurement.
const heavy = params.get("heavy") === "1";

// Two 0.5 cubes at opposite corners of the box [-1, 1]^3: (-0.75, -0.75, 0.75) and (0.75, 0.75, 0.75).
const CUBES = [[-0.75, -0.75, 0.75], [0.75, 0.75, 0.75]];
const BOX = { min: [-1, -1, -1], max: [1, 1, 1] };
async function pairGlb() {
  const scene = new Scene();
  for (const [index, position] of CUBES.entries()) {
    const geometry = heavy ? new SphereGeometry(0.25, 400, 300) : new BoxGeometry(0.5, 0.5, 0.5);
    const mesh = new Mesh(geometry, new MeshBasicMaterial({ color: index ? 0xd9573f : 0x2f7d5b }));
    mesh.position.set(...position);
    scene.add(mesh);
  }
  // The box's far corners, so the GLB's box is the whole [-1, 1]^3.
  for (const position of [[-1, -1, -1], [1, 1, 1]]) {
    const mesh = new Mesh(new BoxGeometry(0.001, 0.001, 0.001), new MeshBasicMaterial({ color: 0x000000 }));
    mesh.position.set(...position.map((v) => v * 0.9995));
    scene.add(mesh);
  }
  return new Uint8Array(await new GLTFExporter().parseAsync(scene, { binary: true }));
}

const STATE = {
  version: 2,
  timeline: { fps: 24, length: 48 },
  camera: {
    projection: "perspective",
    aspect: 16 / 9,
    position: { value: [0, 0, 4] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
    fov: { value: 60 },
  },
  stickers: [
    {
      id: "model",
      placement: "world",
      source: { kind: "file", filename: "pair.glb", subfolder: "3d", storage: "input" },
      position: { value: [0, 0, -6] },
      rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
      scale: { value: 1 },
    },
  ],
};

const studio = (window.__studio = { ready: false, error: null, heavy });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const bytes = await pairGlb();
  const glb = URL.createObjectURL(new Blob([bytes], { type: "model/gltf-binary" }));
  // The building of this GLB's grid on a copy parsed here (the view builds its own once), measured: at once
  // (itemCoarseGrid), and in idle slices as the view builds it (createCoarseGridBuilds with requestIdleCallback) while
  // frames are drawn: the longest slice, the longest gap between two frames, and the time from asking to ready (ms).
  studio.gridBuild = async () => {
    const parse = async () => (await new GLTFLoader().parseAsync(bytes.buffer.slice(0), "")).scene;
    const object = await parse();
    const startAll = performance.now();
    const whole = itemCoarseGrid({ kind: "mesh", object, box: BOX });
    const allMs = performance.now() - startAll;
    const sliced = await parse();
    let longestSlice = 0;
    let slices = 0;
    const schedule = (run) => requestIdleCallback(() => {
      const start = performance.now();
      run();
      longestSlice = Math.max(longestSlice, performance.now() - start);
      slices += 1;
    }, { timeout: COARSE_GRID_IDLE_TIMEOUT_MS });
    let done = null;
    const ready = new Promise((resolve) => (done = resolve));
    const builds = createCoarseGridBuilds({ schedule, now: () => performance.now(), onReady: () => done(performance.now()) });
    let longestFrame = 0;
    let last = null;
    let frames = 0;
    let running = true;
    const tick = (time) => {
      if (last !== null) longestFrame = Math.max(longestFrame, time - last);
      last = time;
      frames += 1;
      if (running) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const asked = performance.now();
    const item = { kind: "mesh", object: sliced, box: BOX, state: "loaded" };
    builds.want("pair", item);
    const readyAt = await ready;
    running = false;
    const cells = builds.get("pair").cells;
    const same = cells.every((value, index) => value === whole.cells[index]);
    const solid = cells.reduce((total, value) => total + value, 0);
    return { allMs, readyMs: readyAt - asked, longestSlice, slices, longestFrame, frames, same, solid };
  };
  // A pointer move over the stage to the page point `point`, timed: { ms (its handlers), cursor (once the editor's UI
  // has caught up) }.
  studio.move = async (point) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const event = new PointerEvent("pointermove", { clientX: point.x, clientY: point.y, pointerType: "mouse", pointerId: 1, bubbles: true });
    const start = performance.now();
    canvas.dispatchEvent(event);
    const ms = performance.now() - start;
    await new Promise((resolve) => setTimeout(resolve, 0));
    return { ms, cursor: canvas.style.cursor };
  };
  const api = {
    apiURL: (route) => route,
    fetchApi: async (path) => {
      if (path === "/panorama_suite/file_3d") return new Response(JSON.stringify({ kind: "mesh", unlit: true, file: { url: glb }, box: BOX }), { status: 200 });
      return new Response("{}", { status: 404 });
    },
  };
  const node = {
    id: 21,
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: [],
    widgets: [{ name: "state_json", value: JSON.stringify(STATE) }],
    graph: { getNodeById: () => null },
    getInputLink: () => null,
    getInputNode: () => null,
  };
  const app = { getNodeImageUrls: () => [], nodeOutputs: {}, ui: { settings: { getSettingValue: () => undefined } } };
  editorSession(node).view = rememberView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, target: [0, 0, -6] }, "panorama");
  const editor = await openStudioEditor(node, { app, api, storage: memoryStorage });
  studio.session = editor.session;
  studio.close = () => editor.close();
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  // Where the model's point p (its own frame) lands on the page, from the stage's view now.
  studio.at = (p) => {
    const landing = editor.stage().landing;
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    const { width, height } = landing.size();
    const value = evaluateSticker(editor.session.state.stickers[0], 0);
    const q = projectPoint(landing.camera(), transformPoint(value, p), width, height);
    return { x: rect.left + q.x, y: rect.top + q.y };
  };
  studio.cubes = CUBES;
  studio.cursor = () => document.querySelector("[data-stage-canvas]").style.cursor;
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
