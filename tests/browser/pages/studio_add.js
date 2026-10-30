// The new editor (web_src/studio/editor.js) on a stand-in Panorama Studio node with an ERP background and an empty
// state, for tests/browser/studio_add.spec.js (Add and the drop: docs/studio-ui.md "Add とドロップの見せ方",
// docs/space-and-view.md "Add とドロップ"). ComfyUI is not used: the page stands in for its upload (/upload/image) and
// for the node's 3D file route (/panorama_suite/file_3d), and serves the uploaded files from blob URLs. The GLB is a box
// made here with three.js's GLTFExporter; the image is drawn on a canvas. The page reports through window.__studio.
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

// An ERP: a sky and a ground, stripes every 30° of yaw.
async function makeErp() {
  const canvas = canvasOf(1024, 512, (g) => {
    const sky = g.createLinearGradient(0, 0, 0, 256);
    sky.addColorStop(0, "#3a6fb0");
    sky.addColorStop(1, "#bcd6ee");
    g.fillStyle = sky;
    g.fillRect(0, 0, 1024, 256);
    g.fillStyle = "#6b5a3e";
    g.fillRect(0, 256, 1024, 256);
    for (let i = 0; i < 12; i += 1) {
      g.fillStyle = `hsl(${i * 30} 70% 50%)`;
      g.fillRect(i * (1024 / 12), 200, 20, 112);
    }
  });
  return URL.createObjectURL(await new Promise((resolve) => canvas.toBlob(resolve, "image/png")));
}

// A 1 x 2 x 1 box GLB (its bottom at -1), checkered, and its box as the route gives it.
async function boxGlb() {
  const texture = new CanvasTexture(canvasOf(64, 64, (g) => {
    for (let y = 0; y < 8; y += 1) {
      for (let x = 0; x < 8; x += 1) {
        g.fillStyle = (x + y) % 2 ? "#e0e0e0" : "#c0563f";
        g.fillRect(x * 8, y * 8, 8, 8);
      }
    }
  }));
  texture.colorSpace = SRGBColorSpace;
  const scene = new Scene();
  scene.add(new Mesh(new BoxGeometry(1, 2, 1), new MeshStandardMaterial({ map: texture, metalness: 0, roughness: 1 })));
  return new Uint8Array(await new GLTFExporter().parseAsync(scene, { binary: true }));
}
const GLB_BOX = { min: [-0.5, -1, -0.5], max: [0.5, 1, 0.5] };

const toBase64 = (bytes) => {
  let text = "";
  for (let i = 0; i < bytes.length; i += 0x8000) text += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(text);
};

const studio = (window.__studio = { ready: false, error: null, uploads: [], routes: [] });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const erp = await makeErp();
  const glb = await boxGlb();
  const photo = canvasOf(320, 200, (g) => {
    g.fillStyle = "#2f7d5b";
    g.fillRect(0, 0, 320, 200);
    g.fillStyle = "#f4f1e8";
    g.fillRect(24, 24, 272, 152);
    g.fillStyle = "#d9573f";
    g.beginPath();
    g.arc(160, 100, 48, 0, Math.PI * 2);
    g.fill();
  });
  const photoBytes = new Uint8Array(await (await new Promise((resolve) => photo.toBlob(resolve, "image/png"))).arrayBuffer());
  // The files the test hands to the file picker and to the drop.
  studio.files = {
    glb: { name: "box.glb", mimeType: "model/gltf-binary", base64: toBase64(glb) },
    photo: { name: "photo.png", mimeType: "image/png", base64: toBase64(photoBytes) },
  };

  // The uploaded files by "subfolder/name", served as blob URLs.
  const served = new Map();
  const viewUrl = (route) => {
    const params = new URLSearchParams(route.slice(route.indexOf("?") + 1));
    const key = `${params.get("subfolder") || ""}/${params.get("filename")}`;
    return served.get(key) ?? route;
  };
  const api = {
    apiURL: (route) => (route.startsWith("/view?") ? viewUrl(route) : route),
    fetchApi: async (path, options = {}) => {
      if (path === "/upload/image") {
        const file = options.body.get("image");
        const subfolder = options.body.get("subfolder");
        studio.uploads.push({ name: file.name, subfolder });
        served.set(`${subfolder}/${file.name}`, URL.createObjectURL(file));
        return new Response(JSON.stringify({ name: file.name, subfolder, type: "input" }), { status: 200 });
      }
      if (path === "/panorama_suite/file_3d") {
        const values = JSON.parse(options.body);
        studio.routes.push(values);
        const url = served.get(`${values.subfolder}/${values.filename}`);
        return new Response(JSON.stringify({ kind: "mesh", unlit: false, file: { url }, box: GLB_BOX }), { status: 200 });
      }
      return new Response("{}", { status: 404 });
    },
  };

  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 21,
    title: "Panorama Studio",
    __panoStudio: true,
    __panoSceneStateV2: true,
    inputs: [{ name: "bg_media", link: 1 }],
    widgets: [{ name: "state_json", value: "" }],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0 } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const app = { getNodeImageUrls: (target) => (target === origin ? [erp] : []), nodeOutputs: {} };
  // The view looks a little down from the origin: the sky in the upper half, the ground in the lower.
  studio.pose = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: -8, target: [0, -1.12, -7.92] };
  editorSession(node).view = rememberView(studio.pose, "panorama");
  const editor = await openStudioEditor(node, { app, api, storage: memoryStorage });
  studio.session = editor.session;
  studio.node = node;
  studio.close = () => editor.close();
  studio.rendererOf = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const gl = canvas.getContext("webgl2");
    const info = gl?.getExtension("WEBGL_debug_renderer_info");
    return gl ? (info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : null;
  };
  // The count of overlay pixels near the selected guide's yellow.
  studio.yellowPixels = () => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 24 && Math.abs(data[i + 1] - 0xcf) < 24 && Math.abs(data[i + 2] - 0x74) < 32) count += 1;
    }
    return count;
  };
  // A File of the test's files.
  studio.file = (key) => {
    const { name, mimeType, base64 } = studio.files[key];
    return new File([Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))], name, { type: mimeType });
  };
  // Drags `key`'s file over the stage at (x, y) page px (`type` "dragover", "dragleave" or "drop"): the events go to the
  // element under the point, as the browser sends them.
  studio.drag = (type, key, x, y) => {
    const transfer = new DataTransfer();
    transfer.items.add(studio.file(key));
    const target = document.elementFromPoint(x, y);
    target.dispatchEvent(new DragEvent(type, { dataTransfer: transfer, clientX: x, clientY: y, bubbles: true, cancelable: true }));
    return target.className?.baseVal ?? target.className;
  };
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
