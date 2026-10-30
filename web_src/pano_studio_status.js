// What Panorama Studio's node surface shows before a run: how the Camera shoots and the output size, by the
// rule `_studio_output_size` (nodes.py) runs (ADR 0048). tests/test_studio_status_parity.py holds the two together
// over tests/fixtures/studio_output_size.json.
import { rotationToQuaternion, worldRotation } from "./pano_world.js";

export const STUDIO_MAX_OUTPUT_SIDE = 8192;

// Python's round(): to the nearest integer, a half to the even one (ComfyUI's Resolution Selector rounds so).
function roundHalfEven(value) {
  const floor = Math.floor(value);
  const rest = value - floor;
  if (rest > 0.5) return floor + 1;
  if (rest < 0.5) return floor;
  return floor % 2 === 0 ? floor : floor + 1;
}

// `value` rounded to a multiple of `multiple`, at least one of it.
const toMultiple = (value, multiple) => Math.max(multiple, roundHalfEven(value / multiple) * multiple);

// The output { width, height } from the `megapixels` and `multiple` widgets and the state's Camera (it always has
// one, ADR 0048), with `reducedFrom` (the size before the longest side was brought to STUDIO_MAX_OUTPUT_SIDE, or
// null). A Panorama (erp) Camera keeps 2 : 1 (180: 1 : 1) exactly: the height is rounded first and the width is
// that times the ratio. A Frame Camera is `aspect` : 1, each side rounded, as the Resolution Selector does. The FOV,
// the lens curve and the Keyframes do not count.
export function studioOutputSize(state, megapixels, multiple) {
  const camera = state.camera;
  const total = Number(megapixels) * 1024 * 1024;
  const step = Number(multiple);
  if (camera.projection === "erp") {
    const ratio = camera.erp_range === 180 ? 1 : 2;
    const height = toMultiple(Math.sqrt(total / ratio), step);
    if (height * ratio <= STUDIO_MAX_OUTPUT_SIDE) return { width: height * ratio, height, reducedFrom: null };
    const reduced = Math.max(step, Math.floor(STUDIO_MAX_OUTPUT_SIDE / (ratio * step)) * step);
    return { width: reduced * ratio, height: reduced, reducedFrom: [height * ratio, height] };
  }
  const scale = Math.sqrt(total / camera.aspect);
  const width = toMultiple(camera.aspect * scale, step);
  const height = toMultiple(scale, step);
  if (Math.max(width, height) <= STUDIO_MAX_OUTPUT_SIDE) return { width, height, reducedFrom: null };
  // The longest side at the cap (the largest multiple under it), the other at the same ratio.
  const longest = Math.floor(STUDIO_MAX_OUTPUT_SIDE / step) * step;
  const fit = STUDIO_MAX_OUTPUT_SIDE / Math.max(camera.aspect * scale, scale);
  return camera.aspect >= 1
    ? { width: longest, height: toMultiple(scale * fit, step), reducedFrom: [width, height] }
    : { width: toMultiple(camera.aspect * scale * fit, step), height: longest, reducedFrom: [width, height] };
}

// The key of the inputs a run's size and output came from (`_studio_run_key` in nodes.py): FNV-1a (32 bit) over the
// code points of `state_json`, megapixels, multiple, background_range and background_color (the widget values)
// joined by NUL. The numbers are written as JS writes them (a whole megapixels without ".0", as Python is made to).
export function studioRunKey(stateText, megapixels, multiple, backgroundRange, backgroundColor) {
  let value = 0x811c9dc5;
  for (const char of `${stateText}\0${String(Number(megapixels))}\0${String(Number(multiple))}\0${backgroundRange}\0${backgroundColor}`) {
    value = Math.imul(value ^ char.codePointAt(0), 0x01000193) >>> 0;
  }
  return value.toString(16).padStart(8, "0");
}

// The output of the node's last run that the surface shows once there is one (ADR 0029), or null before any
// run: { kind, entry, current }. `kind` is "erp" for an ERP output (`pano_output_erp`, a temp image entry with
// its `coverage`), to look around in, and "frame" for a perspective Camera's first frame (`pano_output_frame`),
// shown flat. `current` says the run still matches: its media were the inputs' (else `run` is null) and its
// key is that of this state_json text and these widgets, as for its size.
export function studioRunOutput({ stateText = "", megapixels, multiple, backgroundRange = 360, backgroundColor = "", run = null, erp = null, frame = null }) {
  const entry = erp || frame;
  if (!entry) return null;
  return { kind: erp ? "erp" : "frame", entry, current: !!run && run.key === studioRunKey(stateText, megapixels, multiple, String(backgroundRange), backgroundColor) };
}

// The rotation of the view's ERP dome (a quaternion in World, ADR 0023) that lays the run's output ERP back
// where the run shot it from: the `rotation` the run returns with `pano_output_erp` (its Camera's yaw_deg,
// pitch_deg and roll_deg at frame 0, camera_basis in core/render.py `_rays`; none (null) from a run before the
// Camera was always there).
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

// The Frame aspects the status names (docs/studio-node-surface.md); an aspect within 1% of one is named by it.
const FRAME_PRESETS = [[16, 9], [3, 2], [4, 3], [1, 1], [3, 4], [2, 3], [9, 16]];

// How the state's Camera shoots, as the status line names it: "Panorama 360°" / "Panorama 180°", or "Frame W:H"
// with the preset nearest its aspect within 1%, else the output size's width and height.
function shotName(camera, size) {
  if (camera.projection === "erp") return `Panorama ${camera.erp_range === 180 ? 180 : 360}°`;
  let best = null;
  for (const [w, h] of FRAME_PRESETS) {
    const off = Math.abs(camera.aspect / (w / h) - 1);
    if (off <= 0.01 && (!best || off < best.off)) best = { off, name: `${w}:${h}` };
  }
  return `Frame ${best ? best.name : `${size.width}:${size.height}`}`;
}

// The node surface's status: `shot` (how the Camera shoots), `size` ("W × H") and `note` (DISPLAY_NOTES of `display`,
// then the cap). `run` is the size the node's last run reported (`pano_output_size`); it wins while its key says the
// run had this `stateText` (the state_json text) and these widgets, since media and an upstream Scene can give the
// run what the state alone does not.
export function studioNodeStatus(state, { stateText = "", megapixels, multiple, backgroundRange = 360, backgroundColor = "", run = null, display = "run" }) {
  const estimate = studioOutputSize(state, megapixels, multiple);
  const size = run && run.key === studioRunKey(stateText, megapixels, multiple, String(backgroundRange), backgroundColor)
    ? { width: run.width, height: run.height, reducedFrom: run.reduced_from }
    : estimate;
  const notes = DISPLAY_NOTES[display] ? [DISPLAY_NOTES[display]] : [];
  if (size.reducedFrom) notes.push(`Capped at ${STUDIO_MAX_OUTPUT_SIDE} (${size.reducedFrom[0]} × ${size.reducedFrom[1]})`);
  return { shot: shotName(state.camera, size), size: `${size.width} × ${size.height}`, note: notes.join(" · ") };
}

// Returns status(options, loadState): the studioNodeStatus of `options` with the state of loadState(),
// or null when the options are those of the previous call (the status has not changed).
export function createStudioStatus() {
  let previous = null;
  return (options, loadState) => {
    const key = JSON.stringify([options.stateText, options.megapixels, options.multiple, options.backgroundRange ?? 360, options.backgroundColor ?? "", options.run ?? null, options.display ?? "run"]);
    if (key === previous) return null;
    previous = key;
    return studioNodeStatus(loadState(), options);
  };
}
