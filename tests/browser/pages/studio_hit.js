// A temporary dev comparison (docs/space-and-view.md "比べるための仮の設定"): the new editor (web_src/studio/editor.js)
// on a stand-in Panorama Studio node with one 3D file Sticker whose GLB is two small cubes at opposite corners of its
// box, so the middle of its box is empty, for tests/browser/studio_hit.spec.js. `?mode=` is the hit test setting
// (web_src/studio/hit_test.js HIT_TEST_SETTING_ID). ComfyUI is not used: the page stands in for the node's 3D file
// route and serves the GLB from a blob URL. The page reports through window.__studio.
import { BoxGeometry, Mesh, MeshBasicMaterial, Scene, SphereGeometry } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { itemCoarseGrid } from "/web_src/pano_coarse_grid.js";
import { editorSession } from "/web_src/pano_node_bridge.js";
import { evaluateSticker } from "/web_src/pano_scene_eval.js";
import { projectPoint, transformPoint } from "/web_src/pano_space.js";
import { HIT_TEST_SETTING_ID } from "/web_src/studio/hit_test.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

const params = new URLSearchParams(location.search);
const mode = params.get("mode") ?? "current";
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

const studio = (window.__studio = { ready: false, error: null, mode });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const bytes = await pairGlb();
  const glb = URL.createObjectURL(new Blob([bytes], { type: "model/gltf-binary" }));
  // The time (ms) the coarse grid of this GLB takes to build, on a copy parsed here (the view builds its own once).
  studio.gridBuildMs = async () => {
    const gltf = await new GLTFLoader().parseAsync(bytes.buffer.slice(0), "");
    const start = performance.now();
    itemCoarseGrid({ kind: "mesh", object: gltf.scene, box: BOX });
    return performance.now() - start;
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
  const app = { getNodeImageUrls: () => [], nodeOutputs: {}, ui: { settings: { getSettingValue: (id) => (id === HIT_TEST_SETTING_ID ? mode : undefined) } } };
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
  // The cost (ms) of deciding what is under the pointer in this page's mode (stage_objects.js objectUnder), over `n`
  // points across the stage: per hover and per press; the first hover (a coarse grid is built then); and for
  // "pixels" the square pick the hover draws once a frame (its part in the frame, and until its read back ends).
  studio.measure = async (n = 400) => {
    const { objects, view } = editor.stage().hitTest;
    const target = objects();
    const landing = editor.stage().landing;
    const { width, height } = landing.size();
    const points = Array.from({ length: n }, (_, i) => ({ x: ((i * 37) % 97) / 97 * width, y: ((i * 53) % 89) / 89 * height }));
    const first = performance.now();
    target.objectUnder(points[0], "hover");
    const firstMs = performance.now() - first;
    const time = (purpose) => {
      const start = performance.now();
      for (const point of points) target.objectUnder(point, purpose);
      return (performance.now() - start) / n;
    };
    const hoverMs = time("hover");
    const pressMs = time("press");
    let asyncDrawMs = null;
    let asyncReadMs = null;
    if (mode === "pixels") {
      const camera = landing.camera();
      let draw = 0;
      let read = 0;
      const m = 40;
      for (let i = 0; i < m; i += 1) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const start = performance.now();
        const promise = view().pickStickerNear(camera, points[i].x, points[i].y, width, height, { radius: 3, async: true });
        draw += performance.now() - start;
        await promise;
        read += performance.now() - start;
      }
      asyncDrawMs = draw / m;
      asyncReadMs = read / m;
    }
    return { mode, heavy, firstMs, hoverMs, pressMs, asyncDrawMs, asyncReadMs };
  };
  studio.cursor = () => document.querySelector("[data-stage-canvas]").style.cursor;
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
