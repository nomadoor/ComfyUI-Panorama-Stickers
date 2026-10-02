// The port Sticker's media on the Timeline, placed by its Clip range as sticker_media.py PortMedia
// places it (ADR 0024): which time of its editor MP4 (`pano_sticker_input_videos`) shows at a
// Timeline frame. `meta` is the MP4's `pano_sticker_input_video_meta`: `kind` ("VIDEO" or "IMAGE"),
// `fps`, `frames`, `duration` (the time where the media ends) and for a VIDEO `pts_tolerance`, the
// seconds before a PTS that count as its frame. Timeline frames are those of the state, at its
// Timeline fps `fps`.
import { clipActive } from "./pano_scene_eval.js";

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
// without a duration), for timelineSpan's `frames`; else 0.
export function portMediaFrames(clip, fps, meta) {
  if (clip.duration !== null) return 0;
  return Math.round(clip.start - clip.in + (meta.kind === "IMAGE" ? meta.frames : meta.duration * fps));
}

// The image of an IMAGE batch at a time from portMediaTime.
export function portImageIndex(time, meta) {
  return Math.floor(time * meta.fps);
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
