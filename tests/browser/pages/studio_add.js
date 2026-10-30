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
import { evaluateSticker } from "/web_src/pano_scene_eval.js";
import { projectPoint, sceneTransform, transformPoint } from "/web_src/pano_space.js";
import { gizmoHandles } from "/web_src/studio/gizmo_overlay.js";

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

// An ERP: a sky and a ground, stripes every 30° of yaw; with ?bg=white, a white sky over a pale ground (to see the
// overlay on a light picture).
async function makeErp() {
  const white = new URLSearchParams(location.search).get("bg") === "white";
  const canvas = canvasOf(1024, 512, (g) => {
    if (white) {
      g.fillStyle = "#f7f7f5";
      g.fillRect(0, 0, 1024, 256);
      g.fillStyle = "#e4e1da";
      g.fillRect(0, 256, 1024, 256);
      return;
    }
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

// A 1 x 2 x 1 box GLB (its bottom at -1), checkered, and its box as the route gives it; `offset` moves the box away
// from the file's origin (as many GLBs are made).
async function boxGlb(offset = [0, 0, 0]) {
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
  const mesh = new Mesh(new BoxGeometry(1, 2, 1), new MeshStandardMaterial({ map: texture, metalness: 0, roughness: 1 }));
  mesh.position.set(...offset);
  scene.add(mesh);
  return new Uint8Array(await new GLTFExporter().parseAsync(scene, { binary: true }));
}
const GLB_BOX = { min: [-0.5, -1, -0.5], max: [0.5, 1, 0.5] };
// The off-center GLB: the same box moved 3 to the right and 1 up from its origin.
const OFFSET = [3, 1, 0];
const OFFSET_BOX = { min: [2.5, 0, -0.5], max: [3.5, 2, 0.5] };
const BOXES = { "box.glb": GLB_BOX, "offset.glb": OFFSET_BOX };

const toBase64 = (bytes) => {
  let text = "";
  for (let i = 0; i < bytes.length; i += 0x8000) text += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(text);
};

// routeDelay: ms the 3D file route waits before it answers (a slow load).
const studio = (window.__studio = { ready: false, error: null, uploads: [], routes: [], routeDelay: 0 });
const storage = new Map();
const memoryStorage = { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, String(value)) };

try {
  const erp = await makeErp();
  const glb = await boxGlb();
  const offsetGlb = await boxGlb(OFFSET);
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
    offset: { name: "offset.glb", mimeType: "model/gltf-binary", base64: toBase64(offsetGlb) },
    // The same box under another name, so its route is asked anew (the route's answers are kept per file).
    slow: { name: "slow.glb", mimeType: "model/gltf-binary", base64: toBase64(glb) },
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
        if (studio.routeDelay) await new Promise((resolve) => setTimeout(resolve, studio.routeDelay));
        const url = served.get(`${values.subfolder}/${values.filename}`);
        return new Response(JSON.stringify({ kind: "mesh", unlit: false, file: { url }, box: BOXES[values.filename] ?? GLB_BOX }), { status: 200 });
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
  // Where the box of the placed 3D file `id` has its center on the page, and its gizmo's handles in `mode` there as
  // gizmo_overlay.js makes them on that center (page px), from the stage's view now.
  const stageView = () => {
    const landing = editor.stage().landing;
    const rect = document.querySelector("[data-stage-canvas]").getBoundingClientRect();
    return { camera: landing.camera(), size: landing.size(), rect };
  };
  const centerOf = (id) => {
    const sticker = editor.session.state.stickers.find((item) => item.id === id);
    const value = evaluateSticker(sticker, 0);
    const box = BOXES[sticker.source.filename];
    return { value, world: transformPoint(value, box.min.map((v, axis) => (v + box.max[axis]) / 2)) };
  };
  studio.boxCenter = (id) => {
    const { camera, size, rect } = stageView();
    const p = projectPoint(camera, centerOf(id).world, size.width, size.height);
    return { x: rect.left + p.x, y: rect.top + p.y, stageX: p.x, stageY: p.y };
  };
  studio.handles = (id, mode) => {
    const { camera, size, rect } = stageView();
    const { value, world } = centerOf(id);
    const h = gizmoHandles({ mode, transform: sceneTransform(value), center: world }, camera, size.width, size.height);
    const page = (p) => (p ? { x: rect.left + p.x, y: rect.top + p.y } : null);
    return {
      center: page(h.center),
      axes: Object.fromEntries(h.axes.map((axis) => [axis.name, page(axis.end)])),
      planes: Object.fromEntries(h.planes.map((plane) => [plane.name, plane.shown ? page({ x: plane.points.reduce((t, q) => t + q.x, 0) / 4, y: plane.points.reduce((t, q) => t + q.y, 0) / 4 }) : null])),
      ring: Object.fromEntries(h.rings.map((ring) => [ring.name, ring.points.filter((q) => q && q.front).map(page)])),
    };
  };
  // The bounding box (stage CSS px) of the overlay's pixels near the selected guide's yellow, or null.
  studio.yellowBox = () => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const ratio = overlay.width / overlay.getBoundingClientRect().width;
    const data = overlay.getContext("2d").getImageData(0, 0, overlay.width, overlay.height).data;
    let box = null;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] > 200 && Math.abs(data[i] - 0xe8) < 24 && Math.abs(data[i + 1] - 0xcf) < 24 && Math.abs(data[i + 2] - 0x74) < 32) {
        const x = ((i / 4) % overlay.width) / ratio;
        const y = Math.floor(i / 4 / overlay.width) / ratio;
        box = box ? { left: Math.min(box.left, x), top: Math.min(box.top, y), right: Math.max(box.right, x), bottom: Math.max(box.bottom, y) } : { left: x, top: y, right: x, bottom: y };
      }
    }
    return box;
  };
  // The overlay's pixel at (x, y) stage CSS px: [r, g, b, a].
  studio.overlayAt = (x, y) => {
    const overlay = document.querySelector("[data-stage-overlay]");
    const ratio = overlay.width / overlay.getBoundingClientRect().width;
    return Array.from(overlay.getContext("2d").getImageData(Math.round(x * ratio), Math.round(y * ratio), 1, 1).data);
  };
  // Records, each frame for `ms`, the stage's pixel at (x, y) stage CSS px and whether the loading guide shows.
  studio.record = (x, y, ms) => new Promise((resolve) => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 1;
    probe.height = 1;
    const g = probe.getContext("2d", { willReadFrequently: true });
    const frames = [];
    const start = performance.now();
    const step = () => {
      const ratio = canvas.width / canvas.getBoundingClientRect().width;
      g.clearRect(0, 0, 1, 1);
      g.drawImage(canvas, Math.round(x * ratio), Math.round(y * ratio), 1, 1, 0, 0, 1, 1);
      frames.push({ t: performance.now() - start, px: Array.from(g.getImageData(0, 0, 1, 1).data), loading: document.querySelector("[data-stage-overlay]").hasAttribute("data-loading-guide") });
      if (performance.now() - start < ms) requestAnimationFrame(after);
      else resolve(frames);
    };
    // Read after the frame's callbacks (the stage's draw among them) have run, so every drawn frame is seen.
    const after = () => setTimeout(step, 0);
    requestAnimationFrame(after);
  });
  studio.ready = true;
} catch (error) {
  studio.error = String(error?.stack || error);
  studio.ready = true;
}
