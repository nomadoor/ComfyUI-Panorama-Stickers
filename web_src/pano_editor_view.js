// Editor view: derives what the three.js view draws from state v2 and loads the view on demand.
// #71 adds the World layers and the Viewport camera's movement in space here.
import { HIDDEN_PREVIEW_OPACITY } from "./pano_gl_scene.js";
import { evaluateSceneState } from "./pano_scene_eval.js";
import { DEG2RAD, RAD2DEG } from "./pano_camera_math.js";
import { rotationToQuaternion, worldRotation } from "./pano_world.js";

// The three.js camera for a panorama view with the Camera value's angles. hFOV_deg spans the view
// width like the previous renderer, so the vertical FOV follows the view's aspect.
export function viewportCamera(view, width, height) {
  const aspect = width / height;
  const tanHalfH = Math.tan(view.hFOV_deg * 0.5 * DEG2RAD);
  return {
    quaternion: rotationToQuaternion(worldRotation(view.yaw_deg, view.pitch_deg, view.roll_deg)),
    fovY_deg: 2 * Math.atan(tanHalfH / aspect) * RAD2DEG,
    aspect,
  };
}

// Sky layers from back to front: the state's sky Stickers evaluated at the Timeline frame, and the
// paint layers (ERP canvases). Sky Stickers and paint share one z_index axis; #52 adds z_index to
// the sky Stickers of state v2, and until then the editor's z_index is passed in.
// media(sticker) returns { media, revision } for a Sticker, or null.
export function skyLayers(sceneState, frame, { media, zIndex, paintLayers }) {
  const evaluated = evaluateSceneState(sceneState, frame);
  const layers = [];
  sceneState.stickers.forEach((sticker, index) => {
    const value = evaluated.stickers[index];
    if (sticker.placement !== "sky") return;
    // A hidden port Sticker stays faintly visible so it can be found and shown again.
    const hiddenPort = sticker.source.kind === "port" && !sticker.visible;
    if (!value.active && !hiddenPort) return;
    const shown = media(sticker);
    if (!shown) return;
    const tanX = Math.tan(value.hFOV_deg * 0.5 * DEG2RAD);
    const tanY = Math.tan(value.vFOV_deg * 0.5 * DEG2RAD);
    const { crop } = sticker;
    layers.push({
      kind: "sticker",
      id: sticker.id,
      media: shown.media,
      revision: shown.revision,
      opacity: hiddenPort ? HIDDEN_PREVIEW_OPACITY : value.opacity,
      zIndex: zIndex(sticker),
      quaternion: rotationToQuaternion(worldRotation(value.yaw_deg, value.pitch_deg, value.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * crop.x0 - 1) * tanX,
        x1: (2 * crop.x1 - 1) * tanX,
        y0: (1 - 2 * crop.y1) * tanY,
        y1: (1 - 2 * crop.y0) * tanY,
      },
    });
  });
  for (const layer of paintLayers) layers.push({ kind: "erp", ...layer });
  return layers.sort((a, b) => a.zIndex - b.zIndex);
}

// onReady runs once the view can render. onFailed runs when the chunk or WebGL is unavailable, and
// the editor then draws with the previous renderer.
export function createEditorView({ onReady, onFailed }) {
  let view = null;
  let disposed = false;
  const editorView = {
    failed: false,
    // Returns the rendered canvas, or null until the view has loaded.
    render(input) {
      return view ? view.render(input) : null;
    },
    dispose() {
      disposed = true;
      view?.dispose();
      view = null;
    },
  };
  import("./pano_three_view.js").then((module) => {
    if (disposed) return;
    view = module.createThreeView();
    onReady();
  }).catch((error) => {
    console.error("[PanoramaStickers] three.js view is unavailable; using the previous renderer", error);
    editorView.failed = true;
    onFailed();
  });
  return editorView;
}
