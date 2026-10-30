// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node whose inputs bring objects, for
// tests/browser/studio_inputs.spec.js (docs/studio-ui.md "ノードの入力から来た物"). The node's result is made in the page
// as a run would leave it (docs/studio-node.md "実行結果の `ui`"); ComfyUI is not used. `?case=` picks the inputs:
//   port      the `sticker` input's image, its port Sticker a sky image in front of the view
//   port3d    the `sticker` input's GLB, its port Sticker a world object in front of the view
//   upstream  another Studio's Scene on `scene`: a sky image, a world board and its background
//   upstream-own  the same with the node's own `background` linked too
// The page reports through window.__studio.
import { BoxGeometry, CanvasTexture, Mesh, MeshStandardMaterial, SRGBColorSpace, Scene } from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { editorSession } from "/web_src/pano_node_bridge.js";
import { openStudioEditor } from "/web_src/studio/editor.js";
import { rememberView } from "/web_src/studio/view_camera.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

function canvasOf(width, height, draw) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  draw(canvas.getContext("2d"));
  return canvas;
}
const dataUrl = (width, height, draw) => canvasOf(width, height, draw).toDataURL("image/png");
const fill = (color) => (g) => {
  g.fillStyle = color;
  g.fillRect(0, 0, g.canvas.width, g.canvas.height);
};

// A solid ERP of `color`.
const erp = (color) => dataUrl(512, 256, fill(color));

// A 1 x 1 x 1 box GLB, orange.
async function boxGlb() {
  const texture = new CanvasTexture(canvasOf(8, 8, fill("#e07a1f")));
  texture.colorSpace = SRGBColorSpace;
  const scene = new Scene();
  scene.add(new Mesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ map: texture, metalness: 0, roughness: 1, emissive: 0xe07a1f, emissiveIntensity: 0.6 })));
  const bytes = new Uint8Array(await new GLTFExporter().parseAsync(scene, { binary: true }));
  return URL.createObjectURL(new Blob([bytes], { type: "model/gltf-binary" }));
}

const params = new URLSearchParams(location.search);
const which = params.get("case") || "port";
const studio = (window.__studio = { ready: false, error: null, case: which });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

// The colors the spec reads back.
export const COLORS = { port: "#d0302a", upstreamSky: "#2a9ad0", upstreamBoard: "#30b050", upstreamBg: "#40205a", ownBg: "#8a8a20" };

function portCase() {
  return {
    state: {
      version: 2,
      timeline: { fps: 24 },
      stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "port" }, direction: { value: { yaw_deg: 0, pitch_deg: 0 } }, size: { value: { hFOV_deg: 40, vFOV_deg: 40 } } }],
    },
    inputs: [{ name: "sticker", type: "IMAGE" }],
    result: { pano_sticker_input_images: [dataUrl(200, 100, fill(COLORS.port))] },
  };
}

async function port3dCase() {
  return {
    state: {
      version: 2,
      timeline: { fps: 24 },
      stickers: [{ id: "sticker_1", placement: "world", source: { kind: "port" }, position: { value: [0, 0, -3] }, scale: { value: 1 } }],
    },
    inputs: [{ name: "sticker", type: "MESH" }],
    result: { pano_sticker_files: [await boxGlb()], pano_sticker_meta: [{ kind: "mesh", unlit: false }] },
  };
}

function upstreamCase(own) {
  const layer = {
    version: 2,
    id: "scene_up",
    timeline: { fps: 24 },
    camera: null,
    stickers: [
      { id: "sticker_1", placement: "sky", source: { kind: "file", data_url: dataUrl(160, 120, fill(COLORS.upstreamSky)) }, direction: { value: { yaw_deg: 0, pitch_deg: 0 } }, size: { value: { hFOV_deg: 30, vFOV_deg: 22.5 } } },
      { id: "sticker_2", placement: "world", source: { kind: "file", data_url: dataUrl(128, 128, fill(COLORS.upstreamBoard)) }, position: { value: [1.6, 0, -3] }, scale: { value: 1.2 } },
    ],
  };
  return {
    state: { version: 2, timeline: { fps: 24 }, stickers: [] },
    inputs: [{ name: "scene", type: "PANO_SCENE" }, ...(own ? [{ name: "background", type: "IMAGE", image: erp(COLORS.ownBg) }] : [])],
    result: {
      pano_upstream_layers: [{ state: layer, ui: {} }],
      pano_upstream_frames: [48],
      pano_upstream_coverage: [360],
      pano_upstream_bg_color: [[0, 0, 0]],
      pano_upstream_input_images: [erp(COLORS.upstreamBg)],
      pano_timeline_fps: [24],
    },
    // The upstream Studio on the graph, whose title names the layer's group.
    upstreamNode: { id: 5, title: "Studio Up", comfyClass: "PanoramaStudio", widgets: [{ name: "state_json", value: JSON.stringify(layer) }] },
  };
}

try {
  const setup = which === "port" ? portCase() : which === "port3d" ? await port3dCase() : upstreamCase(which === "upstream-own");
  // Each input comes from a node of its own: ids 100, 101, ...
  const origins = setup.inputs.map((input, index) => ({ id: 100 + index, title: input.name, type: input.type, image: input.image ?? null }));
  const graphNodes = [...origins, ...(setup.upstreamNode ? [setup.upstreamNode] : [])];
  const node = {
    id: 31,
    title: "Panorama Studio",
    comfyClass: "PanoramaStudio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: setup.inputs.map((input, index) => ({ name: input.name, link: index + 1 })),
    widgets: [{ name: "state_json", value: JSON.stringify(setup.state) }, { name: "background_color", value: "#000000" }],
    graph: { getNodeById: (id) => graphNodes.find((item) => item.id === id) ?? null, _nodes: graphNodes, nodes: graphNodes },
    getInputLink: (index) => (origins[index] ? { origin_id: origins[index].id, origin_slot: 0, type: origins[index].type } : null),
    getInputNode: (index) => origins[index] ?? null,
  };
  graphNodes.push(node);
  const app = {
    graph: node.graph,
    getNodeImageUrls: (target) => (target?.image ? [target.image] : []),
    nodeOutputs: { 31: setup.result },
  };
  // The view stands at the origin looking at the front, where the sky images and the 3D object are.
  editorSession(node).view = rememberView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, target: [0, 0, -3] }, "panorama");
  const editor = await openStudioEditor(node, { app, api: null, storage: memoryStorage });
  studio.session = editor.session;
  studio.close = () => editor.close();
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  // The stage's color at (x, y) page px: [r, g, b].
  studio.stageAt = (x, y) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const rect = canvas.getBoundingClientRect();
    const probe = canvasOf(1, 1, (g) => g.drawImage(canvas, ((x - rect.left) / rect.width) * canvas.width, ((y - rect.top) / rect.height) * canvas.height, 1, 1, 0, 0, 1, 1));
    return Array.from(probe.getContext("2d").getImageData(0, 0, 1, 1).data.slice(0, 3));
  };
  studio.colors = COLORS;
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
