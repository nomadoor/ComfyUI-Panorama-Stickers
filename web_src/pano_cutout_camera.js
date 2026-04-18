import { buildCutoutViewParamsFromShot } from "./pano_gl_scene.js";
import { createPanoramaSceneCamera } from "./pano_scene_camera.js";
import { exportPanoramaSceneCameraFrame } from "./pano_scene_camera_export.js";
import { mountPanoramaSceneCamera } from "./pano_scene_camera_dom.js";

export function createCutoutCamera(options = {}) {
  const camera = createPanoramaSceneCamera({
    ...options,
    targetId: String(options?.targetId || "cutout_camera"),
  });

  return {
    ...camera,
    renderShot(shot, output = {}) {
      return camera.renderFrame(buildCutoutViewParamsFromShot(shot), output);
    },
    renderShotToContext(ctx, rect, shot, output = {}) {
      return camera.renderToContext(ctx, rect, buildCutoutViewParamsFromShot(shot), output);
    },
    mount(container, options = {}) {
      const initialView = options?.shot ? buildCutoutViewParamsFromShot(options.shot) : options?.view;
      return mountPanoramaSceneCamera(camera, container, { ...options, view: initialView });
    },
    exportFrame(options = {}) {
      const next = options?.shot
        ? { ...options, camera: buildCutoutViewParamsFromShot(options.shot) }
        : options;
      return exportPanoramaSceneCameraFrame(camera, next);
    },
  };
}
