// What Panorama Studio's node surface shows before a run: what the node shoots and the output size, by the
// rule `_studio_output_size` (nodes.py) runs (ADR 0029). tests/test_studio_status_parity.py holds the two together.
import { evaluateCamera } from "./pano_scene_eval.js";
import { CAMERA_LANES } from "./pano_scene_state.js";

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

// The key of the inputs a run's size came from (`_studio_run_key` in nodes.py): FNV-1a (32 bit) over the
// code points of `state_json`, output_size and coverage (the widget values) joined by NUL.
export function studioRunKey(stateText, outputSize, coverage) {
  let value = 0x811c9dc5;
  for (const char of `${stateText}\0${outputSize}\0${coverage}`) {
    value = Math.imul(value ^ char.codePointAt(0), 0x01000193) >>> 0;
  }
  return value.toString(16).padStart(8, "0");
}

// The node surface's status: `shot` (ERP, or the Camera and its projection), `size` ("W × H", or "auto"
// while the bg_media width is not known yet: `bgWidth` undefined) and `note` (the cap, or auto without
// bg_media; empty otherwise). `run` is the size the node's last run reported (`pano_output_size`); it wins
// while its key says the run had this `stateText` (the state_json text), output_size and coverage, since
// media and an upstream Scene can give the run another Timeline and coverage than the state alone.
export function studioNodeStatus(state, { stateText = "", outputSize, coverage, bgWidth, run = null }) {
  const camera = studioCamera(state);
  let shot = "ERP";
  if (camera) shot = camera.projection === "erp" ? `Camera · ${coverage}°` : "Camera · Perspective";
  let size;
  if (run && run.key === studioRunKey(stateText, outputSize, String(coverage))) {
    size = { width: run.width, height: run.height, reducedFrom: run.reduced_from, defaulted: outputSize === "auto" && bgWidth === null };
  } else if (outputSize === "auto" && bgWidth === undefined) {
    return { shot, size: "auto", note: "" };
  } else {
    size = studioOutputSize(state, studioTimelineFrames(state), outputSize, coverage, bgWidth);
  }
  let note = "";
  if (size.reducedFrom) note = `Capped at ${STUDIO_MAX_OUTPUT_SIDE} (${size.reducedFrom[0]} × ${size.reducedFrom[1]})`;
  else if (size.defaulted) note = "auto: no bg_media";
  return { shot, size: `${size.width} × ${size.height}`, note };
}

// Returns status(options, loadState): the studioNodeStatus of `options` with the state of loadState(),
// or null when the options are those of the previous call (the status has not changed). The bg_media
// width counts only for output_size auto.
export function createStudioStatus() {
  let previous = null;
  return (options, loadState) => {
    const bgWidth = options.outputSize === "auto" ? options.bgWidth : null;
    const key = JSON.stringify([options.stateText, options.outputSize, options.coverage, bgWidth === undefined ? "pending" : bgWidth, options.run ?? null]);
    if (key === previous) return null;
    previous = key;
    return studioNodeStatus(loadState(), { ...options, bgWidth });
  };
}
