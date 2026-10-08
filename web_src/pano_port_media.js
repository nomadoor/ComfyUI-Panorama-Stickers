// The port Sticker's media on the Timeline, placed by its Clip range as sticker_media.py PortMedia
// places it (ADR 0024): which time of its editor MP4 (`pano_sticker_input_videos`) shows at a
// Timeline frame. `meta` is the MP4's `pano_sticker_input_video_meta`: `kind` ("VIDEO" or "IMAGE"),
// `fps`, `frames`, `duration` (the time where the media ends) and for a VIDEO `pts_tolerance`, the
// seconds before a PTS that count as its frame. Timeline frames are those of the state, at its
// Timeline fps `fps`.
import { createPanoCanvas } from "./pano_diagnostics.js";
import { clipActive } from "./pano_scene_eval.js";
import { defaultClip } from "./pano_scene_state.js";

// A time a hair before a PTS (1/1000 frame) counts as that frame, as in frameShownAt.
const PTS_HAIR = 1e-3;

// The time in the MP4 that shows at Timeline `frame`, or null where the port Sticker shows none of
// it: outside its Clip range `clip`, or outside the media. A VIDEO plays in real time from start - in
// and shows its last frame with PTS <= t. An IMAGE batch is a sequence at the Timeline fps: the
// nearest image, sought at the middle of its frame in the MP4 (evenly spaced at meta.fps).
export function portMediaTime(clip, frame, fps, meta) {
  if (!clipActive(clip, frame)) return null;
  const clipFrame = frame - (clip.start - clip.in);
  if (meta.kind === "IMAGE") {
    const index = Math.floor(clipFrame + 0.5);
    return index >= 0 && index < meta.frames ? (index + 0.5) / meta.fps : null;
  }
  const time = clipFrame / fps + Math.max(PTS_HAIR / fps, Number(meta.pts_tolerance) || 0);
  return time >= 0 && time < meta.duration ? time : null;
}

// The Timeline frames up to where the media ends (PortMedia.end) when that ends the Clip range (one
// without a duration): where the Timeline draws its bar to and what the Auto length counts
// (autoTimelineLength); else 0.
export function portMediaFrames(clip, fps, meta) {
  if (clip.duration !== null) return 0;
  return Math.round(clip.start - clip.in + (meta.kind === "IMAGE" ? meta.frames : meta.duration * fps));
}

// The Timeline frame where Panorama Studio's own background media ends, placed by its Clip range `clip`
// (`background.clip`) as a port Sticker's media is (PortMedia.end): from start - in, its frames, or the time its
// last frame ends for a VIDEO that does not set the Timeline (`under`: an upstream Scene sets it). `bg` is the
// background as autoTimelineLength reads it ({ video, frames, duration }). Where its bar ends without a duration,
// and what the Auto length counts.
export function bgMediaEnd(clip, fps, bg, under = false) {
  return clip.start - clip.in + (bg.video && under ? bg.duration * fps : bg.frames);
}

// A background Clip range `clip` of a state at `fromFps` in the Timeline frames of `toFps`, keeping its seconds
// (an upstream background's, pano_upstream.js upstreamBackgroundOf). The frames are not rounded: they only place
// the media.
export function backgroundClipAt(clip, fromFps, toFps) {
  const ratio = toFps / fromFps;
  return { start: clip.start * ratio, in: clip.in * ratio, duration: clip.duration === null ? null : clip.duration * ratio };
}

// Where the background's Clip range `clip` puts its VIDEO on the Timeline (createVideoPlayback's `place`), or null
// for the default Clip range, with which the VIDEO starts at frame 0 as before the Clip range: its first frame at
// start - in, shown from start until start + duration (Infinity without a duration: until the VIDEO ends).
export function backgroundPlace(clip) {
  if (defaultClip(clip)) return null;
  return { origin: clip.start - clip.in, start: clip.start, end: clip.duration === null ? Infinity : clip.start + clip.duration };
}

// Whether the background shows at Timeline `frame` (the node shows bg_color where it does not): inside its Clip
// range, and before the end of media with frames (`bg` as bgMediaEnd reads it; null for a single image or while it
// is not known). With the default Clip range it always shows, as before the Clip range (the editor keeps the
// VIDEO's last frame past its end).
export function backgroundShownAt(clip, frame, fps, bg = null, under = false) {
  if (defaultClip(clip)) return true;
  if (!clipActive(clip, frame)) return false;
  return !(bg?.video || bg?.frames > 1) || frame < bgMediaEnd(clip, fps, bg, under);
}

// The bg_color backgrounds made last, by color; the editor and the node surfaces can show different colors at once.
const colorBackgrounds = new Map();
const COLOR_BACKGROUNDS_KEPT = 8;

// What the views draw as the background where it does not show (backgroundShownAt): bg_color over the whole
// ERP, as the node draws it, in the views' background shape ({ media, revision, coverage, source }), a small
// canvas of the color.
export function bgColorBackground(color) {
  let background = colorBackgrounds.get(color);
  if (!background) {
    const canvas = createPanoCanvas({ label: "background.color", width: 2, height: 1 });
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background = { media: canvas, revision: color, coverage: 360, source: `bg_color:${color}` };
    if (colorBackgrounds.size >= COLOR_BACKGROUNDS_KEPT) colorBackgrounds.delete(colorBackgrounds.keys().next().value);
    colorBackgrounds.set(color, background);
  }
  return background;
}

// The port Sticker's media as portMediaFrames reads it, from a result's `ui` (`list(key)`: its list under a
// key): the meta of its MP4 or PNGs (`pano_sticker_input_video_meta`), or for 3D media with two or more items
// their count as kind "IMAGE" (`pano_sticker_files`, a sequence at the Timeline fps like an IMAGE batch). null
// for a single frame or item, which ends nothing (PortMedia.end).
export function portMediaMeta(list) {
  const meta = list("pano_sticker_input_video_meta")[0];
  if (meta && typeof meta === "object") return meta;
  const items = list("pano_sticker_files").length;
  return items > 1 ? { kind: "IMAGE", frames: items } : null;
}

// The image of an IMAGE batch at a time from portMediaTime.
export function portImageIndex(time, meta) {
  return Math.floor(time * meta.fps);
}

// What the port Sticker's picture shows, as the `source` of its layer (pano_three_view.js
// layerTexture): the MP4's URL or the PNGs of `media` ({ src } or { frames }), whose stills and first
// frame `first` are pictures of it too, else `first` itself. A media swap on the port changes it, so
// the picture of the media before never stands in for the next.
export function portMediaSource(media, first) {
  return media?.src || media?.frames?.join("\n") || first;
}

// Images loaded ahead of the playhead's one, so playback finds them ready.
const PRELOAD_AHEAD = 4;

// An RGBA IMAGE batch as one PNG per image (`pano_sticker_input_frames`; an MP4 has no alpha).
// picture() returns the image of a time from portMediaTime once it has loaded, and loads the next
// few; until it loads, the image shown before, else `fallback` (the first frame). Only those images
// are kept. createImage(src) starts loading an image and calls onLoad when it ends.
export function createFrameSequence({ createImage, onLoad }) {
  let urls = [];
  const images = new Map();
  let shown = null;

  function load(index) {
    if (!images.has(index)) images.set(index, createImage(urls[index], onLoad));
    return images.get(index);
  }

  return {
    picture(nextUrls, time, meta, fallback) {
      if (nextUrls.length !== urls.length || nextUrls.some((url, index) => url !== urls[index])) {
        urls = nextUrls;
        images.clear();
        shown = null;
      }
      if (time === null) return null;
      const index = portImageIndex(time, meta);
      for (let next = index; next < Math.min(urls.length, index + PRELOAD_AHEAD + 1); next += 1) load(next);
      for (const key of images.keys()) {
        if ((key < index || key > index + PRELOAD_AHEAD) && key !== shown) images.delete(key);
      }
      const current = images.get(index);
      if (current?.complete && current.naturalWidth > 0) {
        if (shown !== null && shown !== index) images.delete(shown);
        shown = index;
      }
      return shown === null ? fallback : images.get(shown);
    },
  };
}
