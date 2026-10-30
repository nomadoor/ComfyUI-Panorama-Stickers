// The Camera tab's layout (StudioCameraTabScene.vue) for tests/browser/studio_camera_tab.spec.js and the side-by-side
// with design-drafts/frame-4.html. ?aspect=16:9|1:1|9:16, ?mode=frame|panorama. In Panorama mode the frame shows the
// live ERP (web_src/pano_live_erp.js) of live_erp_scene.js from the origin. Reports through window.__check; events in
// window.__events.
import { createApp } from "vue";
import * as THREE from "three";
import { createLiveErp } from "../../../web_src/pano_live_erp.js";
import { liveErpSize, liveErpView } from "../../../web_src/studio/erp_preview.js";
import { buildScene } from "./live_erp_scene.js";
import StudioCameraTabScene from "./StudioCameraTabScene.vue";

const check = (window.__check = { done: false, error: null, rect: null, erp: null, renderer: null });
window.__events = [];

const params = new URLSearchParams(location.search);
const [aw, ah] = (params.get("aspect") ?? "16:9").split(":").map(Number);
const mode = params.get("mode") ?? "frame";

let erp = null;
let scene = null;
function makeErp(rect) {
  if (!erp) {
    const renderer = new THREE.WebGLRenderer({ canvas: document.createElement("canvas"), antialias: false });
    renderer.setSize(4, 4, false);
    const gl = renderer.getContext();
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    check.renderer = info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    ({ scene } = buildScene());
    erp = createLiveErp({ renderer, canvas: document.createElement("canvas"), near: 0.05, far: 200 });
    erp.setView(liveErpView({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: -4 }));
  }
  const size = liveErpSize(rect.width, rect.height, window.devicePixelRatio || 1);
  erp.setSize(size.width, size.height);
  const drew = erp.draw({ scene });
  // How many times it drew: a box that did not change draws nothing again.
  check.erp = { ...size, draws: (check.erp?.draws ?? 0) + (drew.faces || drew.pass ? 1 : 0) };
  return erp.canvas;
}

try {
  createApp(StudioCameraTabScene, {
    aspect: aw / ah,
    mode,
    makeErp,
    onEvent: (event) => window.__events.push(event),
    onRect: (rect) => (check.rect = rect),
  }).mount("#app");
  await Promise.all(["500 12px", "600 12px"].map((face) => document.fonts.load(`${face} "Plus Jakarta Sans"`)));
  await document.fonts.ready;
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
} catch (error) {
  check.error = String(error?.stack || error);
}
check.done = true;
