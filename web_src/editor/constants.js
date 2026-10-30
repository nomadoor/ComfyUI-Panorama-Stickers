// Constants of the Panorama editor (showEditor in pano_editor.js and the modules of web_src/editor/).
export const STATE_WIDGET = "state_json";
export const EXTERNAL_STICKER_ID = "sticker_image_1";
// A world Sticker's inspector fields that have no upper limit (the smallest scale they set is WORLD_MIN_SCALE in
// pano_editor_state.js).
export const WORLD_UNLIMITED_FIELDS = new Set(["position_x", "position_y", "position_z", "scale"]);
export const EXTERNAL_STICKER_SOURCE_KIND = "external_image";
// The port Sticker's `ui` keys belong to the lower layer (pano_port_media.js).
export { EXTERNAL_STICKER_PREVIEW_KEY, PORT_FRAMES_KEY, PORT_VIDEO_KEY, PORT_VIDEO_META_KEY } from "../pano_port_media.js";
export const ENABLE_STICKERS_NODE_PREVIEW = true;
export const PAINT_COLOR_SWATCHES = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } },
];
export const DEG2RAD = Math.PI / 180;
export const RAD2DEG = 180 / Math.PI;
// Fraction of the UI-safe rect the camera gate fills. The gate is always
// aspect-fitted to that rect, so every aspect gets the largest frame the
// viewport allows. 1 means "touch the safe edges"; the safe rect already
// carries the padding that keeps the gate clear of the floating UI.
export const FRAME_GATE_OCCUPANCY = 1;
export const CUTOUT_FRAME_ACCENT = "rgb(255, 221, 87)";
// Panorama Studio's Camera in space: its frustum (the accent while selected) and its trajectory.
export const CUTOUT_FRUSTUM_COLOR = "rgb(228, 228, 231)";
export const CUTOUT_TRAJECTORY_COLOR = "rgb(180, 150, 60)";
export const FRAME_ROLL_CURSOR = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`;
// Vertical room kept for `.pano-floating-right` when measuring the Frame safe
// rect: its CSS bottom offset plus its collapsed min-height. Deliberately a
// constant, see measureFrameSafeRect().
export const FLOATING_RIGHT_RESERVED_PX = 64;
// Breathing room between the camera gate and the surrounding floating UI. The
// side rails sit right next to the gate edges, so they get a wider gap than the
// top/bottom chrome.
export const FRAME_GATE_SIDE_GAP_PX = 40;
export const FRAME_GATE_EDGE_GAP_PX = 16;
export const CUTOUT_PANO_DIM_ALPHA = 0.45;
export const CUTOUT_PANO_DIM_TRANSITION_MS = 180;
export const FRAME_ROLL_OVERLAY_TRANSITION_MS = 160;
export const LASSO_CURSOR_SIZE = 24;
export const LASSO_CURSOR_HOTSPOT_X = 4;
export const LASSO_CURSOR_HOTSPOT_Y = 4;
