// The new Preview window (web_src/studio/preview_window.js) opened on a stand-in Panorama Preview node whose `source`
// is linked to an ERP made in the page, for tests/browser/preview_window.spec.js. ComfyUI is not used. ComfyUI's key
// listeners are stood in for by listeners on window and document (window.__comfy).
import { openPreviewWindow } from "/web_src/studio/preview_window.js";

const getContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (type, options = {}) {
  return getContext.call(this, type, type.startsWith("webgl") ? { ...options, preserveDrawingBuffer: true } : options);
};

async function makeErp() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  g.fillStyle = "#3a6fb0";
  g.fillRect(0, 0, 1024, 256);
  g.fillStyle = "#6b5a3e";
  g.fillRect(0, 256, 1024, 256);
  for (let i = 0; i < 12; i += 1) {
    g.fillStyle = `hsl(${i * 30} 70% 50%)`;
    g.fillRect(i * (1024 / 12), 200, 20, 112);
  }
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  return URL.createObjectURL(blob);
}

const preview = (window.__preview = { ready: false, error: null });
const heard = (window.__comfy = []);
for (const target of [window, document]) {
  for (const type of ["keydown", "keyup", "keypress"]) {
    target.addEventListener(type, (event) => heard.push(`${type}:${event.key}`));
  }
}
try {
  const url = await makeErp();
  const origin = { id: 7, title: "Load Image" };
  const node = {
    id: 21,
    title: "Panorama Preview",
    comfyClass: "PanoramaPreviewNode",
    inputs: [{ name: "source", link: 1 }],
    widgets: [],
    graph: { getNodeById: (id) => (id === 7 ? origin : null) },
    getInputLink: (index) => (index === 0 ? { origin_id: 7, origin_slot: 0, type: "IMAGE" } : null),
    getInputNode: (index) => (index === 0 ? origin : null),
  };
  const app = { getNodeImageUrls: (target) => (target === origin ? [url] : []), nodeOutputs: {} };
  let win = null;
  preview.open = async () => {
    win = await openPreviewWindow(node, { app, api: null });
    return !!win;
  };
  preview.close = () => win?.close();
  // The mean color of the stage's middle band.
  preview.sample = () => {
    const canvas = document.querySelector("[data-stage-canvas]");
    const probe = document.createElement("canvas");
    probe.width = 32;
    probe.height = 18;
    const g = probe.getContext("2d", { willReadFrequently: true });
    g.drawImage(canvas, 0, 0, 32, 18);
    const data = g.getImageData(0, 0, 32, 18).data;
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) sum += data[i] + data[i + 1] + data[i + 2];
    return sum / (data.length / 4) / 3;
  };
  preview.ready = true;
} catch (error) {
  preview.error = String(error?.stack || error);
  preview.ready = true;
}
