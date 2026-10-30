// The Camera's output drawn live (docs/studio-ui.md "Output の小窓", docs/studio-node-surface.md "撮る Camera の出力をその場で
// 描く"): the render inputs the editor's Output window and Panorama Studio's node surface give the lower three.js view, so
// both draw the same picture. Pure: the callers draw them (pano_three_view.js render / renderLiveErp).
import { shotCamera, shotLensImage } from "../pano_editor_view.js";
import { placedCamera } from "../pano_space.js";
import { liveErpView } from "./erp_preview.js";
import { STAGE_CLEAR_COLOR, stageRenderInput } from "./stage_view.js";
import { eyeHeight } from "./view_scale.js";

// The near and far planes of a camera at the Camera's position: the eye height of `ground` ahead, within the world
// bound of `radius` about the origin (pano_space.js placedCamera).
function planesAt(camera, shot, ground, radius) {
  return placedCamera(camera, shot.position, eyeHeight(ground), { center: [0, 0, 0], radius });
}

// Frame mode: the render input (pano_three_view.js render) of the Camera `shot` (pano_editor_state.js cameraShot) as the
// output shoots it, without the ground grid (an edit guide). `background`, `content` (stage_content.js stageContent) and
// `ground` are the stage's; `radius` the world bound. The picture is width x height pixels: drawn into `rect` of a
// canvas of canvasWidth x canvasHeight (the stage's), or, without `rect`, at that size (the shared view's own canvas).
// A lens Camera (κ ≠ 1) draws through its lens image, `backgroundColor` past its reach; `lensKind` is the kind of lens
// image drawn before (pano_lens.js lensRenderPlan's `previous`), and the input's `lens.kind` the one drawn now.
export function outputFrameInput({ shot, ground, radius, width, height, background, content, backgroundColor, lensKind = null, owner, rect = null, canvasWidth = width, canvasHeight = height }) {
  const camera = planesAt(shotCamera(shot), shot, ground, radius);
  const lens = shotLensImage(shot, width, height, backgroundColor, null, lensKind);
  const input = stageRenderInput({ camera, canvasWidth, canvasHeight, background, ground, gridHidden: true, content, rect, lens, owner });
  return rect ? input : { ...input, rect: null, width, height };
}

// Panorama mode: the input of pano_three_view.js renderLiveErp for the live ERP from the Camera's position, `width` x
// `height` pixels (erp_preview.js liveErpSize) on `canvas`, over `erpRange` (360 or 180), without the ground grid unless
// `gridHidden` is false (the Camera tab's frame draws it).
export function outputErpInput({ shot, erpRange, ground, radius, width, height, background, content, owner, canvas, gridHidden = true }) {
  const planes = planesAt({}, shot, ground, radius);
  const input = stageRenderInput({ camera: null, canvasWidth: 1, canvasHeight: 1, background, ground, gridHidden, content });
  return {
    owner,
    canvas,
    view: liveErpView(shot, erpRange),
    width,
    height,
    near: planes.near,
    far: planes.far,
    background: input.background,
    layers: input.layers,
    space: input.space,
    clearColor: STAGE_CLEAR_COLOR,
  };
}
