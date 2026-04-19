import {
  normalizePanoramaCameraOutput,
  normalizePanoramaCameraView,
} from "./pano_scene_camera.js";

export function mountPanoramaSceneCamera(camera, container, options = {}) {
  if (!camera || !container || typeof container.appendChild !== "function") {
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  }

  const canvas = document.createElement("canvas");
  canvas.className = String(options?.className || "pano-scene-camera-canvas");
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.display = "block";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let currentView = normalizePanoramaCameraView(options?.view || {});
  let disposed = false;
  let rafId = 0;

  function readOutput() {
    const width = Number(options?.width || container.clientWidth || canvas.clientWidth || 1);
    const height = Number(options?.height || container.clientHeight || canvas.clientHeight || 1);
    const dpr = Number(options?.dpr || window.devicePixelRatio || 1);
    const output = normalizePanoramaCameraOutput({ width, height, dpr });
    canvas.width = Math.max(1, Math.round(output.width * output.dpr));
    canvas.height = Math.max(1, Math.round(output.height * output.dpr));
    canvas.style.width = `${output.width}px`;
    canvas.style.height = `${output.height}px`;
    return output;
  }

  function present() {
    if (disposed || !ctx) return false;
    const output = readOutput();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return camera.renderToContext(
      ctx,
      { x: 0, y: 0, w: canvas.width, h: canvas.height },
      currentView,
      { ...output, width: canvas.width, height: canvas.height, dpr: 1 },
    );
  }

  function requestRender() {
    if (disposed || rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      present();
    });
  }

  const resizeObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver(() => requestRender())
    : null;
  resizeObserver?.observe(container);

  requestRender();

  return {
    canvas,
    setView(nextView) {
      currentView = normalizePanoramaCameraView(nextView || {});
      requestRender();
    },
    getView() {
      return { ...currentView };
    },
    present,
    requestRender,
    unmount() {
      disposed = true;
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      canvas.remove();
    },
  };
}
