// What the line under Panorama Studio's node surface picture says: how the Camera shoots and the output size, by the
// rule `_studio_output_size` (nodes.py) runs (ADR 0048). tests/test_studio_status_parity.py holds the two together
// over tests/fixtures/studio_output_size.json.
export const STUDIO_MAX_OUTPUT_SIDE = 8192;

// The `megapixels` and `multiple` widgets as numbers, `read(name)` giving a widget's value (or undefined without one),
// with the node's defaults (nodes.py PanoramaStudioNode: 2.0 and 8) for a missing one. The node surface reads them on
// each draw; the editor once, when it opens (docs/studio-ui.md "Output の小窓").
export const STUDIO_SIZE_DEFAULTS = Object.freeze({ megapixels: 2, multiple: 8 });
export function studioSizeWidgets(read) {
  return {
    megapixels: Number(read("megapixels") ?? STUDIO_SIZE_DEFAULTS.megapixels),
    multiple: Number(read("multiple") ?? STUDIO_SIZE_DEFAULTS.multiple),
  };
}

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

// The node surface's status (the line under its picture): `mode` ("panorama" or "frame", for the line's icon), `shot`
// (how the Camera shoots), `size` ("W × H"), `ratio` (the output's width / height, the picture's shape) and `cap` (the
// size before STUDIO_MAX_OUTPUT_SIDE brought it down, as the size's tooltip, or ""). `run` is the size the node's last run
// reported (`pano_output_size`); it wins while its key says the run had this `stateText` (the state_json text) and these
// widgets, since media and an upstream Scene can give the run what the state alone does not.
export function studioNodeStatus(state, { stateText = "", megapixels, multiple, backgroundRange = 360, backgroundColor = "", run = null }) {
  const estimate = studioOutputSize(state, megapixels, multiple);
  const size = run && run.key === studioRunKey(stateText, megapixels, multiple, String(backgroundRange), backgroundColor)
    ? { width: run.width, height: run.height, reducedFrom: run.reduced_from }
    : estimate;
  return {
    mode: state.camera.projection === "erp" ? "panorama" : "frame",
    shot: shotName(state.camera, size),
    size: `${size.width} × ${size.height}`,
    ratio: size.width / size.height,
    cap: size.reducedFrom ? `Capped at ${STUDIO_MAX_OUTPUT_SIDE} (${size.reducedFrom[0]} × ${size.reducedFrom[1]})` : "",
  };
}

// Returns status(options, loadState): the studioNodeStatus of `options` with the state of loadState(),
// or null when the options are those of the previous call (the status has not changed).
export function createStudioStatus() {
  let previous = null;
  return (options, loadState) => {
    const key = JSON.stringify([options.stateText, options.megapixels, options.multiple, options.backgroundRange ?? 360, options.backgroundColor ?? "", options.run ?? null]);
    if (key === previous) return null;
    previous = key;
    return studioNodeStatus(loadState(), options);
  };
}
