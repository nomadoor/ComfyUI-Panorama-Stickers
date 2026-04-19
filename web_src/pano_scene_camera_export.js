import {
  normalizePanoramaCameraOutput,
  normalizePanoramaCameraView,
} from "./pano_scene_camera.js";

function canvasToBlob(canvas, format, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to export panorama scene camera frame."));
    }, format, quality);
  });
}

export async function exportPanoramaSceneCameraFrame(camera, options = {}) {
  if (!camera || typeof camera.renderFrame !== "function") {
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  }
  const view = normalizePanoramaCameraView(options?.camera || options?.view || {});
  const explicitOutput = options?.output || options?.camera?.output || options?.view?.output || null;
  const output = normalizePanoramaCameraOutput(
    explicitOutput || {
      width: options?.width,
      height: options?.height,
      dpr: options?.dpr,
    }
  );
  const surface = camera.renderFrame(view, output);
  if (!surface) throw new Error("Panorama scene camera render returned null.");
  const format = String(options?.format || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png";
  const quality = options?.quality == null ? 0.92 : Number(options.quality);
  return canvasToBlob(surface, format, quality);
}
