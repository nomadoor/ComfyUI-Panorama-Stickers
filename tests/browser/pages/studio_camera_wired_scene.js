// The Camera and the markers of tests/browser/pages/studio_camera_wired.js, shared with its spec (which imports this
// module, not the page's, so the page does not run twice).
// The Camera, and the markers around it: [name, yaw, pitch, rgb] at MARKER_DISTANCE from the Camera.
export const CAMERA = { position: [0.2, -0.1, -0.3], yaw: 30, pitch: 6, roll: -4, fov: 60 };
export const MARKER_DISTANCE = 3;
export const MARKERS = [
  ["front", 0, 0, [255, 0, 0]],
  ["right", 90, 0, [0, 255, 0]],
  ["back", 180, 0, [0, 0, 255]],
  ["left", -90, 0, [255, 255, 0]],
];
export const SKY_MARKER = ["sky", -45, 30, [255, 0, 255]];
