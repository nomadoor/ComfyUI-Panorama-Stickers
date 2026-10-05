// What Panorama Studio's node surface shows before a run: what the node shoots and the output size, by the
// rule `_studio_output_size` (nodes.py) runs (ADR 0029). tests/test_studio_status_parity.py holds the two together.
import { evaluateCamera } from "./pano_scene_eval.js";
import { CAMERA_LANES } from "./pano_scene_state.js";
import { rotationToQuaternion, worldRotation } from "./pano_world.js";

export const STUDIO_DEFAULT_ERP_WIDTH = 2048;
export const STUDIO_MAX_OUTPUT_SIDE = 4096;

const round = (value) => Math.floor(value + 0.5);
const evenSide = (value) => Math.max(2, 2 * round(value / 2));

// The Camera that shoots the output: the state's, or null without one or when it is hidden.
function studioCamera(state) {
  return state.camera && state.camera.visible ? state.camera : null;
}

// The Timeline frames the run evaluates for a state without media (`_decide_timeline` without a VIDEO, an
// IMAGE batch, port media or an upstream Scene): `timeline.length`, else the latest Clip end, else the
// Camera's latest Keyframe, else one frame. Media that the run reads can make the Timeline longer or shorter.
export function studioTimelineFrames(state) {
  const clipEnds = [state.scene.clip, ...state.stickers.map((sticker) => sticker.clip)]
    .filter((clip) => clip.duration !== null)
    .map((clip) => clip.start + clip.duration);
  const keys = state.camera
    ? CAMERA_LANES.flatMap(([name]) => state.camera[name].keyframes.map((key) => key.frame))
    : [];
  let length = 1;
  if (state.timeline.length) length = Math.max(1, round(state.timeline.length));
  else if (clipEnds.length) length = Math.max(1, round(Math.max(...clipEnds)));
  else if (keys.length) length = Math.max(1, round(Math.max(...keys)) + 1);
  return Array.from({ length }, (_, frame) => frame);
}

// The output { width, height }, with `reducedFrom` (the size before the longest side was capped, or null)
// and `defaulted` (auto without bg_media). `bgWidth` is the bg_media width, or null without bg_media.
export function studioOutputSize(state, frames, outputSize, coverage, bgWidth) {
  const defaulted = outputSize === "auto" && bgWidth == null;
  let width;
  if (outputSize !== "auto") width = Number(outputSize);
  else if (defaulted) width = STUDIO_DEFAULT_ERP_WIDTH;
  else width = Math.floor(bgWidth * 360 / coverage);
  const camera = studioCamera(state);
  if (!camera || camera.projection === "erp") {
    return { width: Math.floor(width * coverage / 360), height: Math.floor(width / 2), reducedFrom: null, defaulted };
  }
  const hfov = Math.max(...frames.map((frame) => evaluateCamera(camera, frame).hFOV_deg));
  const shotWidth = width / Math.PI * Math.tan(hfov * Math.PI / 360);
  const shotHeight = shotWidth / camera.aspect;
  const size = [evenSide(shotWidth), evenSide(shotHeight)];
  if (Math.max(...size) <= STUDIO_MAX_OUTPUT_SIDE) return { width: size[0], height: size[1], reducedFrom: null, defaulted };
  const scale = STUDIO_MAX_OUTPUT_SIDE / Math.max(shotWidth, shotHeight);
  return { width: evenSide(shotWidth * scale), height: evenSide(shotHeight * scale), reducedFrom: size, defaulted };
}

// The key of the inputs a run's size and output came from (`_studio_run_key` in nodes.py): FNV-1a (32 bit)
// over the code points of `state_json`, output_size, coverage and bg_color (the widget values) joined by NUL.
export function studioRunKey(stateText, outputSize, coverage, bgColor) {
  let value = 0x811c9dc5;
  for (const char of `${stateText}\0${outputSize}\0${coverage}\0${bgColor}`) {
    value = Math.imul(value ^ char.codePointAt(0), 0x01000193) >>> 0;
  }
  return value.toString(16).padStart(8, "0");
}

// The output ERP of the node's last run (`pano_output_erp`, a temp image entry with its `coverage`) that the
// surface shows in place of drawing the Scene, or null: only while `run`'s key says the run had this state
// and these widgets (as for its size), and the node shoots an ERP (no Camera, or an `erp` one), which already
// holds everything the run drew.
export function studioRunErp(state, { stateText = "", outputSize, coverage, bgColor = "", run = null, erp = null }) {
  const camera = studioCamera(state);
  if (!erp || !run || (camera && camera.projection !== "erp")) return null;
  return run.key === studioRunKey(stateText, outputSize, String(coverage), bgColor) ? erp : null;
}

// The rotation of the view's ERP dome (a quaternion in World, ADR 0023) that lays the run's output ERP back
// where the run shot it from: the Camera's rotation at frame 0 (camera_basis, core/render.py `_rays`), or none
// without a Camera. tests/test_studio_run_erp_orientation.py holds it to the run.
export function studioRunQuaternion(state) {
  const camera = studioCamera(state);
  if (!camera) return { x: 0, y: 0, z: 0, w: 1 };
  const { yaw_deg: yaw, pitch_deg: pitch, roll_deg: roll } = evaluateCamera(camera, 0);
  return rotationToQuaternion(worldRotation(yaw, pitch, roll));
}

// The node surface's status: `shot` (ERP, or the Camera and its projection), `size` ("W × H", or "auto"
// while the bg_media width is not known yet: `bgWidth` undefined) and `note` (whether the surface shows the
// last run's output, `showingRun`, then the cap, or auto without bg_media; empty otherwise). `run` is the size the node's last run reported (`pano_output_size`); it wins
// while its key says the run had this `stateText` (the state_json text), output_size and coverage, since
// media and an upstream Scene can give the run another Timeline and coverage than the state alone.
export function studioNodeStatus(state, { stateText = "", outputSize, coverage, bgColor = "", bgWidth, run = null, showingRun = false }) {
  const camera = studioCamera(state);
  let shot = "ERP";
  if (camera) shot = camera.projection === "erp" ? `Camera · ${coverage}°` : "Camera · Perspective";
  let size;
  if (run && run.key === studioRunKey(stateText, outputSize, String(coverage), bgColor)) {
    size = { width: run.width, height: run.height, reducedFrom: run.reduced_from, defaulted: outputSize === "auto" && bgWidth === null };
  } else if (outputSize === "auto" && bgWidth === undefined) {
    return { shot, size: "auto", note: showingRun ? "Showing the last run" : "" };
  } else {
    size = studioOutputSize(state, studioTimelineFrames(state), outputSize, coverage, bgWidth);
  }
  const notes = showingRun ? ["Showing the last run"] : [];
  if (size.reducedFrom) notes.push(`Capped at ${STUDIO_MAX_OUTPUT_SIDE} (${size.reducedFrom[0]} × ${size.reducedFrom[1]})`);
  else if (size.defaulted) notes.push("auto: no bg_media");
  return { shot, size: `${size.width} × ${size.height}`, note: notes.join(" · ") };
}

// Returns status(options, loadState): the studioNodeStatus of `options` with the state of loadState(),
// or null when the options are those of the previous call (the status has not changed). The bg_media
// width counts only for output_size auto.
export function createStudioStatus() {
  let previous = null;
  return (options, loadState) => {
    const bgWidth = options.outputSize === "auto" ? options.bgWidth : null;
    const key = JSON.stringify([options.stateText, options.outputSize, options.coverage, options.bgColor ?? "", bgWidth === undefined ? "pending" : bgWidth, options.run ?? null, !!options.showingRun]);
    if (key === previous) return null;
    previous = key;
    return studioNodeStatus(loadState(), { ...options, bgWidth });
  };
}
