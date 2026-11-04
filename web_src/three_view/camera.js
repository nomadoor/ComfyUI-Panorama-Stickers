// Turning and placing the three.js cameras of the view (pano_three_view.js createThreeView) from a camera setup
// (pano_editor_view.js viewportCamera, shotCamera; pano_space.js spaceCamera). Part of the three.js chunk.
import { Vector2 } from "three";

export function applyViewportCamera(camera, setup) {
  const { quaternion } = setup;
  camera.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
  camera.fov = setup.fovY_deg;
  camera.aspect = setup.aspect;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
}

// The camera of setup, drawing the part `offset` of its view (visibleWindow() with the whole view's size as
// fullWidth and fullHeight), or all of it.
export function setView(target, setup, offset = null) {
  if (offset) target.setViewOffset(offset.fullWidth, offset.fullHeight, offset.offsetX, offset.offsetY, offset.width, offset.height);
  else target.clearViewOffset();
  applyViewportCamera(target, setup);
}

export function setCamera(target, setup, offset = null) {
  setView(target, setup, offset);
  target.position.set(...setup.position);
  target.near = setup.near;
  target.far = setup.far;
  target.updateProjectionMatrix();
  target.updateMatrixWorld();
}

// (x, y) of a width x height view as three.js normalized device coordinates.
export function devicePoint(x, y, width, height) {
  return new Vector2(x / width * 2 - 1, 1 - y / height * 2);
}
