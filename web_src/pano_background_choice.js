// Which background a view shows (docs/timeline-ui.md "どの背景を出すか"): the node's own background or the upstream
// Scene's, the run result `ui` keys its picture and VIDEO are read from, its span (360 or 180), its bg_color, where its
// Clip range puts it on the Timeline, whether it shows at a frame (bg_color in its place where not), the VIDEO
// candidates, and the background the Auto length counts. The new UI's editor (studio/editor.js), the Preview window
// (studio/preview_window.js), Panorama Studio's node surface (pano_preview_runtime.js) and the Preview node's Scene
// viewer (pano_scene_viewer.js) ask here. It holds no media: loading, playing and letting go of the pictures and VIDEOs
// stay with the callers (docs/studio-node-surface.md "見えないときとエディタを開いている間").
//
// The callers do not all show the same background yet: BACKGROUND_CALLERS keeps each one's current behaviour, one row
// per caller and one column per difference (handoff/refactor/surface.md D1, D2, D4, D5, D7, D8, D13). Making two callers
// agree is a behaviour change: it edits a cell of the table, after the owner decides it.
import { normalizeCoverageValue } from "./pano_editor_state.js";
import { backgroundClipAt, backgroundShownAt, bgColorBackground } from "./pano_port_media.js";
import { STUDIO_BACKGROUND_INPUT_NAMES, BACKGROUND_INPUT_NAMES } from "./pano_preview_video.js";
import { clipActive } from "./pano_scene_eval.js";
import { upstreamBackgroundOf, upstreamBgColor } from "./pano_upstream.js";

// The run result `ui` keys of a background (Python: node_runtime.py PREVIEW_UI_KEYS "stickers_bg" and "default", and
// nodes.py _upstream_ui, which puts the upstream Studio's under `pano_upstream_`).
export const BACKGROUND_UI_KEYS = Object.freeze({
  studio: Object.freeze({ image: "pano_input_images", video: "pano_input_videos", meta: "pano_input_video_meta" }),
  preview: Object.freeze({ image: "pano_input_images", video: "pano_videos", meta: "pano_video_meta" }),
  upstream: Object.freeze({
    image: "pano_upstream_input_images",
    video: "pano_upstream_input_videos",
    meta: "pano_upstream_input_video_meta",
    coverage: "pano_upstream_coverage",
    color: "pano_upstream_bg_color",
    clip: "pano_upstream_bg_clip",
  }),
});

// Each caller's current behaviour where they differ.
// - keys: the BACKGROUND_UI_KEYS entry of the node's own background (null: the caller has none).
// - inputs: the inputs whose file stands in for the own background before a run.
// - upstreamWhen (D5): when the upstream Scene's background stands in: "own-unlinked" (the node's own background input
//   is not linked and the `scene` result is current), "result" (the current `scene` result has one), "scene" (the
//   source is a PANO_SCENE).
// - ownWhen (D5): when the node's own background is the one shown otherwise: "linked" (its input is linked), "always"
//   (the node surface does not look at the link: it shows what the result and the inputs give, placed by its Clip range).
// - upstreamPicture (D1, D12): whether the upstream background's picture and VIDEO show; false shows only its bg_color,
//   and reads the picture, the VIDEO and the span from the node's own keys and inputs even while it stands in.
// - colorFrom: where bg_color comes from besides an upstream background's own: "node" (the background_color / bg_color
//   widget), "scene" (the Scene's pano_upstream_bg_color).
// - colorFallback (D2): the color when that has none.
// - ownUnder (D4): bgMediaEnd's `under` for the node's own background: "never", or "upstream-layers" (when the node
//   has upstream layers).
// - lengthFrom (D7): what the Auto length counts of the background: "loaded" (the VIDEO the caller loaded), "result"
//   (the meta in the run result).
// - endsWithMedia (D8): whether an upstream background gives way to bg_color past the end of its media.
// - fill (D13): when bg_color shows without a background picture: "never", "scene" (a Scene without a background),
//   "always" (unless one is loading).
export const BACKGROUND_CALLERS = Object.freeze({
  editor: Object.freeze({
    keys: "studio", inputs: STUDIO_BACKGROUND_INPUT_NAMES, upstreamWhen: "own-unlinked", ownWhen: "linked", upstreamPicture: true, colorFrom: "node",
    colorFallback: "#00ff00", ownUnder: "never", lengthFrom: "loaded", endsWithMedia: true, fill: "never",
  }),
  window: Object.freeze({
    keys: "preview", inputs: ["source"], upstreamWhen: "scene", ownWhen: "linked", upstreamPicture: true, colorFrom: "scene",
    colorFallback: "#000000", ownUnder: "never", lengthFrom: "loaded", endsWithMedia: true, fill: "scene",
  }),
  surface: Object.freeze({
    keys: "studio", inputs: BACKGROUND_INPUT_NAMES, upstreamWhen: "result", ownWhen: "always", upstreamPicture: false, colorFrom: "node",
    colorFallback: "#000000", ownUnder: "upstream-layers", lengthFrom: "result", endsWithMedia: true, fill: "always",
  }),
  viewer: Object.freeze({
    keys: null, inputs: [], upstreamWhen: "scene", ownWhen: "linked", upstreamPicture: true, colorFrom: "scene",
    colorFallback: "#000000", ownUnder: "never", lengthFrom: "result", endsWithMedia: false, fill: "always",
  }),
});

const DEFAULT_PLACE = Object.freeze({ start: 0, in: 0, duration: null });

function callerRow(caller) {
  const row = BACKGROUND_CALLERS[caller];
  if (!row) throw new Error(`Unknown background caller: ${caller}`);
  return row;
}

// The upstream background standing in (pano_upstream.js upstreamBackgroundOf's), or null.
function upstreamOf(row, { uiList, current, ownLinked, scene }) {
  if (row.upstreamWhen === "scene") return scene ? upstreamBackgroundOf(uiList) : null;
  if (!current("scene")) return null;
  if (row.upstreamWhen === "own-unlinked" && ownLinked) return null;
  return upstreamBackgroundOf(uiList);
}

// Which background `caller` ("editor", "window", "surface", "viewer") shows. Pure: it may be called on each draw.
// uiList(key): a list of the node's run result; current(channel): pano_preview_video.js isNodeOutputMediaCurrent for
// the node; ownLinked: the node's own background input is linked; scene: its source is a PANO_SCENE (window, viewer);
// widget(name): the node's widget of that name, or null; clip: the node's own background Clip range
// (state.background.clip); fps: the Timeline fps. `colorBackground` makes a bg_color background (a test's stand-in).
// Returns { caller, from ("own", "upstream", "none"), upstream (upstreamBackgroundOf's, or null), keys (the `ui` keys
// its picture and VIDEO are read from, or null), fileInputs, coverage, color ("#rrggbb"), place (its Clip range in
// the Timeline frames, null where nothing places it), scene, ownLinked, fps }.
export function chooseBackground(caller, {
  uiList, current = () => true, ownLinked = false, scene = false, widget = () => null, clip = null, fps = 24,
}, { colorBackground = bgColorBackground } = {}) {
  const row = callerRow(caller);
  const upstream = upstreamOf(row, { uiList, current, ownLinked, scene });
  let from = "none";
  if (upstream) from = "upstream";
  else if (!(row.upstreamWhen === "scene" && scene) && (row.ownWhen === "always" || ownLinked)) from = "own";
  const upstreamPicture = !!upstream && row.upstreamPicture;
  const ownKeys = row.keys ? BACKGROUND_UI_KEYS[row.keys] : null;
  const keys = upstreamPicture
    ? { image: upstream.imageKey, video: upstream.videoKey, meta: upstream.metaKey }
    : ownKeys && { image: ownKeys.image, video: ownKeys.video, meta: ownKeys.meta };
  const rangeWidget = widget("background_range") ?? widget("coverage");
  const coverage = upstreamPicture ? upstream.coverage : normalizeCoverageValue(rangeWidget?.value);
  let color;
  if (row.colorFrom === "scene") {
    color = upstreamBgColor(uiList) ?? row.colorFallback;
  } else {
    const own = String((widget("background_color") ?? widget("bg_color"))?.value || row.colorFallback);
    color = upstream?.color || own;
  }
  let place = null;
  if (upstream) place = upstream.clip ? backgroundClipAt(upstream.clip.clip, upstream.clip.fps, fps) : DEFAULT_PLACE;
  else if (from === "own") place = clip ?? null;
  return {
    caller,
    from,
    upstream,
    keys,
    fileInputs: upstreamPicture || scene ? [] : [...row.inputs],
    coverage,
    color,
    place,
    scene: !!scene,
    ownLinked: !!ownLinked,
    fps,
    colorBackground,
  };
}

// Whether the background of `choice` shows at Timeline `frame` (backgroundShownAt); where it does not, its bg_color
// shows. `length` is the background as backgroundLength gives it to this (`bg` for the own background, `upstreamMedia`
// for an upstream one), null while not known; `upstreamLayers` whether the node has upstream layers (ownUnder).
export function backgroundShowsAt(choice, frame, { length = null, upstreamLayers = false } = {}) {
  const row = callerRow(choice.caller);
  const { place, fps } = choice;
  if (!place) return true;
  if (choice.from === "upstream") return row.endsWithMedia ? backgroundShownAt(place, frame, fps, length ?? null, true) : clipActive(place, frame);
  const under = row.ownUnder === "upstream-layers" ? !!upstreamLayers : false;
  return backgroundShownAt(place, frame, fps, length ?? null, under);
}

// The background the view draws ({ media, revision, coverage, source? }), or null (nothing, or still loading).
// `shows` is backgroundShowsAt's answer (the node surface's playback gives its own); `picture` the caller's ready
// picture ({ media, revision, source?, coverage? }: its VIDEO, its still or its image; coverage defaults to the
// choice's), or null; `pending` whether a picture is loading (no bg_color is drawn in its place meanwhile).
export function backgroundAt(choice, { shows = true, picture = null, pending = false } = {}) {
  const row = callerRow(choice.caller);
  if (!shows) return choice.colorBackground(choice.color);
  // A Scene without a background is its bg_color all over.
  if ((row.fill === "scene" || row.fill === "always") && choice.scene && choice.from === "none") return choice.colorBackground(choice.color);
  if (picture) return { ...picture, coverage: picture.coverage ?? choice.coverage };
  if (row.fill === "always" && !pending) return choice.colorBackground(choice.color);
  return null;
}

// The background VIDEO candidates, best first: { own, file } as URLs ("" for none; a null source counts as none, as
// pano_media_session.js choose() and pano_node_playback.js follow() skip empty ones). `own` is the run result's VIDEO
// (read while the result is current for the background, or from an upstream background standing in), `file` the
// video file the background input loads directly (none for an upstream background or a Scene). uiList(key) and
// current(channel) as chooseBackground's; source(entry) the URL of a result's file entry; linkedVideoFile(inputs) the
// URL of the video file the first linked of `inputs` loads, or "".
export function backgroundVideoCandidates(choice, { uiList, current = () => true, source, linkedVideoFile = () => "" }) {
  const upstreamPicture = choice.from === "upstream" && callerRow(choice.caller).upstreamPicture;
  const entry = choice.keys && (upstreamPicture || current("background")) ? uiList(choice.keys.video)[0] || null : null;
  return {
    own: String((entry && source(entry)) || ""),
    file: choice.fileInputs.length ? String(linkedVideoFile(choice.fileInputs) || "") : "",
  };
}

// The background as the Auto length (pano_timeline.js autoTimelineLength) and backgroundShowsAt read it.
// "loaded" (the editor): `loaded` is what the caller learned of the VIDEO it loaded ({ ready, frameCount, duration },
// pano_media_session.js backgroundVideoMedia's `source`); returns { bg } (null for an upstream background, which the
// upstream length holds) and, for an upstream background, { upstreamMedia } (its loaded VIDEO).
// "result" (the node surface): from the run result's meta; returns { bg } (left out while no result gives it),
// or for an upstream background { bg: null, upstreamClip, upstreamMedia? } as pano_node_playback.js follow() reads them.
// `videoLinked` is whether a VIDEO is linked to the own background input.
export function backgroundLength(choice, { uiList, current = () => true, videoLinked = false, loaded = null }) {
  const row = callerRow(choice.caller);
  const upstream = choice.from === "upstream" ? choice.upstream : null;
  if (row.lengthFrom === "loaded") {
    const media = (video) => (loaded?.ready && loaded.frameCount > 0 ? { video: !!video, frames: loaded.frameCount, duration: Number(loaded.duration || 0) } : null);
    if (upstream) return { bg: null, upstreamMedia: media(true) };
    const own = media(videoLinked);
    return { bg: own ?? (choice.ownLinked && !videoLinked ? { frames: 1 } : null) };
  }
  if (upstream) {
    const out = { bg: null, upstreamClip: upstream.clip && backgroundClipAt(upstream.clip.clip, upstream.clip.fps, choice.fps) };
    const meta = uiList(upstream.metaKey)[0];
    if (meta && typeof meta === "object") out.upstreamMedia = { video: true, frames: Number(meta.frames), duration: Number(meta.duration) };
    return out;
  }
  if (!choice.keys || !current("background")) return {};
  const meta = uiList(choice.keys.meta)[0];
  return meta && typeof meta === "object" ? { bg: { video: !!videoLinked, frames: Number(meta.frames), duration: Number(meta.duration) } } : {};
}
