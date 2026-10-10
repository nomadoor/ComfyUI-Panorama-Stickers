// What Panorama Studio's node surface shows before a run: what the node shoots and the output size, by the
// rule `_studio_output_size` (nodes.py) runs (ADR 0029). tests/test_studio_status_parity.py holds the two together.
import { lensRadius } from "./pano_lens.js";
import { evaluateCamera } from "./pano_scene_eval.js";
import { BROKEN_SPAN, timelineSpan } from "./pano_timeline.js";
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
// IMAGE batch, port media or an upstream Scene: pano_timeline.js timelineSpan). Media that the run reads can
// make the Timeline longer or shorter. A broken length (not a finite number) gives no frames, rather than
// BROKEN_SPAN of them to evaluate.
export function studioTimelineFrames(state) {
  const span = timelineSpan(state, { camera: true });
  return span === BROKEN_SPAN ? [] : Array.from({ length: span }, (_, frame) => frame);
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
  // 2·f·g_κ(hFOV ÷ 2) at each output frame, the widest, f = width ÷ 2π: the lens curve (ADR 0042) keeps f at the
  // center, so a pinhole (κ = 1) is the usual 2·f·tan(hFOV ÷ 2).
  const shotWidth = Math.max(...frames.map((frame) => {
    const value = evaluateCamera(camera, frame);
    return width / Math.PI * lensRadius(value.hFOV_deg * Math.PI / 360, value.curve);
  }));
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

// The output of the node's last run that the surface shows once there is one (ADR 0029), or null before any
// run: { kind, entry, current }. `kind` is "erp" for an ERP output (`pano_output_erp`, a temp image entry with
// its `coverage`), to look around in, and "frame" for a perspective Camera's first frame (`pano_output_frame`),
// shown flat. `current` says the run still matches: its media were the inputs' (else `run` is null) and its
// key is that of this state_json text and these widgets, as for its size.
export function studioRunOutput({ stateText = "", outputSize, coverage, bgColor = "", run = null, erp = null, frame = null }) {
  const entry = erp || frame;
  if (!entry) return null;
  return { kind: erp ? "erp" : "frame", entry, current: !!run && run.key === studioRunKey(stateText, outputSize, String(coverage), bgColor) };
}

// The rotation of the view's ERP dome (a quaternion in World, ADR 0023) that lays the run's output ERP back
// where the run shot it from: the `rotation` the run returns with `pano_output_erp` (its Camera's yaw_deg,
// pitch_deg and roll_deg at frame 0, camera_basis in core/render.py `_rays`), or none (null) without a Camera.
// tests/test_studio_run_erp_orientation.py holds it to the run.
export function studioRunQuaternion(rotation) {
  if (!rotation) return { x: 0, y: 0, z: 0, w: 1 };
  return rotationToQuaternion(worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg));
}

// What the note says first about what the surface shows (`display`): the current run's output ("run", nothing
// to say), the output of a run the inputs no longer match ("edited"), the Scene drawn live before any run
// ("not-run"), or drawn live because the run's output cannot be loaded ("unavailable").
const DISPLAY_NOTES = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again",
};

// The node surface's status: `shot` (ERP, or the Camera and its projection), `size` ("W × H", or "auto"
// while the bg_media width is not known yet: `bgWidth` undefined) and `note` (DISPLAY_NOTES of `display`,
// then the cap, or auto without bg_media). `run` is the size the node's last run reported (`pano_output_size`); it wins
// while its key says the run had this `stateText` (the state_json text), output_size and coverage, since
// media and an upstream Scene can give the run another Timeline and coverage than the state alone.
export function studioNodeStatus(state, { stateText = "", outputSize, coverage, bgColor = "", bgWidth, run = null, display = "run" }) {
  const camera = studioCamera(state);
  let shot = "ERP";
  if (camera) shot = camera.projection === "erp" ? `Camera · ${coverage}°` : "Camera · Perspective";
  let size;
  if (run && run.key === studioRunKey(stateText, outputSize, String(coverage), bgColor)) {
    size = { width: run.width, height: run.height, reducedFrom: run.reduced_from, defaulted: outputSize === "auto" && bgWidth === null };
  } else if (outputSize === "auto" && bgWidth === undefined) {
    return { shot, size: "auto", note: DISPLAY_NOTES[display] };
  } else {
    size = studioOutputSize(state, studioTimelineFrames(state), outputSize, coverage, bgWidth);
  }
  const notes = DISPLAY_NOTES[display] ? [DISPLAY_NOTES[display]] : [];
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
    const key = JSON.stringify([options.stateText, options.outputSize, options.coverage, options.bgColor ?? "", bgWidth === undefined ? "pending" : bgWidth, options.run ?? null, options.display ?? "run"]);
    if (key === previous) return null;
    previous = key;
    return studioNodeStatus(loadState(), { ...options, bgWidth });
  };
}
