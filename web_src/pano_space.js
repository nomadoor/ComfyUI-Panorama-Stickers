// The editor's view of the World (3DoF and 6DoF): the Viewport camera's navigation in space, where the `scene`
// content and the world Stickers are placed, and the guides drawn around them. Positions are World
// glTF arrays [x, y, z] (ADR 0023); angles stay in the panorama convention and reach World only
// through worldRotation (pano_world.js).
//
// The Viewport camera is { position, yaw_deg, pitch_deg, hFOV_deg, distance }: the editor's own view,
// never saved (CONTEXT.md). distance is how far ahead its pivot is: the point on its axis that a drag or a
// wheel step over empty space turns around and zooms toward. An orbit or a wheel step over the World
// content works on the point under the pointer instead (navigationTarget), and leaves the pivot at that
// point's depth, so the pivot stays in sight. A pan always moves at the pivot's depth (panDepth), never at
// the depth of what the pointer is over, so a drag of the same length moves the view the same way.
//
// The parts live in space/, one module per rule of the living specs that own them (docs/editor-interaction.md,
// docs/threejs-spark-integration.md); this module is what the rest of the suite imports.
export {
  DEFAULT_DISTANCE,
  depthOf,
  frameView,
  initialSpaceView,
  navigationTarget,
  orbitView,
  panDepth,
  panView,
  pivotOf,
  reuseWheelPick,
  sameViewpoint,
  START_VIEW,
  spaceModeView,
  switchSpaceMode,
  viewAxes,
  viewFitFov,
  ZOOM_STEP,
  zoomView,
} from "./space/view.js";
export {
  DEFAULT_VIEW_HFOV,
  fit3dPosition,
  FIT_FALLBACK_FOV_DEG,
  FIT_MARGIN,
  fitDistance,
  NEW_WORLD_STICKER_DISTANCE,
} from "./space/fit.js";
export {
  cameraForward,
  placedCamera,
  projectPoint,
  spaceCamera,
} from "./space/camera.js";
export {
  DEPTH_GRID_PREFETCH,
  fileStickerKey,
  fileStickerRequests,
  multiviewKey,
  sceneFilesOf,
  sceneItemIndex,
  sceneRequest,
  sceneTransform,
  SPLAT_TO_SCENE,
  stateAnimationClips,
  stickerAnimationClips,
  stickerContentRequest,
  stickerContentUrls,
} from "./space/content_requests.js";
export {
  boundingSphere,
  boxCorners,
  contentPoints,
  frameSphere,
  lensPatch,
  planeCorners,
  planeOutlineSegments,
  sceneContentBox,
  sceneItemBox,
  transformPoint,
  worldStickerPlane,
} from "./space/bounds.js";
export {
  facingRotation,
  NEW_STICKER_HFOV,
} from "./space/placement.js";
export {
  gizmoDragLanes,
  uniformScale,
} from "./space/gizmo.js";
export {
  cameraFrustumShape,
  gridSpec,
} from "./space/guides.js";
