// The editor's background VIDEO (ADR 0019, ADR 0024, docs/timeline-ui.md "再生の状態" and "背景の行"): which VIDEO
// plays (the node's own result first, then a file the background input loads directly, never one that failed), its
// length, fps and audio from the result's meta, loading it into the element, the playback of the Timeline that drives
// it (pano_video_playback.js createVideoPlayback), the still of its last confirmed frame, and what the views draw of it.
// Both editors use it: the old one (editor/media_session.js, which adds the legacy transport and its filmstrip) and
// the new one (studio/editor.js).
import { isPanoramaPreviewNodeName } from "./pano_preview_identity.js";
import { createVideoPlayback } from "./pano_video_playback.js";

const HAVE_CURRENT_DATA = 2;

// The keys of the node's result ({ videoKey, metaKey }) that hold the background VIDEO an editor shows: the
// Preview's own, an upstream Scene's background (`upstream`, pano_upstream.js upstreamBackgroundOf), or the editor
// MP4 of the Stickers / Cutout / Panorama Studio background input. `nodeName` is the node's class; `type` the editor's.
export function backgroundVideoKeys({ nodeName = "", upstream = null, type = "stickers" } = {}) {
  if (isPanoramaPreviewNodeName(nodeName)) return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  if (upstream) return { videoKey: upstream.videoKey, metaKey: upstream.metaKey };
  if (type === "stickers" || type === "cutout") return { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" };
  return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
}

// The meta entry of a VIDEO in a result's `ui` value (a list of one, or the entry itself), or null.
export function videoMetaEntry(meta) {
  if (Array.isArray(meta) && meta.length > 0 && meta[0] && typeof meta[0] === "object") return meta[0];
  if (meta && typeof meta === "object") return meta;
  return null;
}

// Whether a VIDEO element has audio, as far as the browser tells; `fallback` when it does not.
export function detectVideoHasAudio(video, fallback = false) {
  if (!(typeof HTMLVideoElement !== "undefined" && video instanceof HTMLVideoElement)) return false;
  try {
    if (Array.isArray(video.audioTracks) && video.audioTracks.length > 0) return true;
    if (video.audioTracks && typeof video.audioTracks.length === "number" && video.audioTracks.length > 0) return true;
  } catch {
    // Ignore browser-specific audioTracks access issues.
  }
  try {
    if (typeof video.mozHasAudio === "boolean") return video.mozHasAudio;
  } catch {
    // Ignore Firefox-only property access issues.
  }
  try {
    if (Number(video.webkitAudioDecodedByteCount || 0) > 0) return true;
  } catch {
    // Ignore WebKit-only property access issues.
  }
  return !!fallback;
}

const isVideo = (media) => typeof HTMLVideoElement !== "undefined" && media instanceof HTMLVideoElement;
const isCanvas = (media) => typeof HTMLCanvasElement !== "undefined" && media instanceof HTMLCanvasElement;
const isImage = (media) => typeof HTMLImageElement !== "undefined" && media instanceof HTMLImageElement;

// The revision of a layer's or the background's media (pano_three_view.js uploads again when it changes). A VIDEO's
// VideoTexture uploads each new frame by itself, so its revision is its source and size; a canvas (a still) counts its
// frames in __panoFrameIdx.
export function mediaRevisionToken(media) {
  if (!media) return "none";
  if (isVideo(media)) {
    return [
      String(media.currentSrc || media.src || ""),
      Number(media.videoWidth || 0),
      Number(media.videoHeight || 0),
    ].join("|");
  }
  if (isCanvas(media)) {
    return [
      "canvas",
      Number(media.width || 0),
      Number(media.height || 0),
      String(media.__panoFrameIdx || 0),
    ].join("|");
  }
  return [
    String(media.currentSrc || media.src || ""),
    Number(media.naturalWidth || media.width || 0),
    Number(media.naturalHeight || media.height || 0),
  ].join("|");
}

// Whether an image, a VIDEO or a canvas has a picture to draw.
export function isDecodedImageReady(img) {
  if (!img) return false;
  if (isImage(img)) {
    return !!img.complete
      && Number(img.naturalWidth || img.width || 0) > 0
      && Number(img.naturalHeight || img.height || 0) > 0;
  }
  if (isVideo(img)) {
    return Number(img.videoWidth || 0) > 0
      && Number(img.videoHeight || 0) > 0
      && Number(img.readyState || 0) >= 2;
  }
  return Number(img.width || img.naturalWidth || 0) > 0
    && Number(img.height || img.naturalHeight || 0) > 0;
}

// The background VIDEO or IMAGE batch an editor shows, as the Auto length reads it (pano_timeline.js
// autoTimelineLength): { video, frames, duration } from what choose() learned of the loaded source (`source`:
// { ready, frameCount, duration }), or null before it knows a length. `video` is whether it counts as a VIDEO (a
// VIDEO link, or an upstream background).
export function backgroundVideoMedia(source, video) {
  if (!(source?.ready && source.frameCount > 0)) return null;
  return { video: !!video, frames: source.frameCount, duration: Number(source.duration || 0) };
}

// The node's own background as the Auto length reads it: its VIDEO or IMAGE batch (`loaded`, backgroundVideoMedia),
// else a linked IMAGE as a single image (an IMAGE batch before a run too); null without a link.
export function backgroundLengthMedia(loaded, { linked, videoLinked }) {
  return loaded ?? (linked && !videoLinked ? { frames: 1 } : null);
}

// The background VIDEO of an editor. `video` is its HTMLVideoElement (or null: an editor without one), `still` the
// canvas its still is copied into. clock, fps, span, loop, place, onFrame and onChange are createVideoPlayback's;
// onStill() runs when a new still was captured, onStillDropped() when the still of one source was let go, onReady()
// when the element learns more of its source (metadata, data), onError() after a failed source was noted (choose()
// skips it from then on).
export function createBackgroundVideo({
  video,
  still,
  clock,
  fps,
  span,
  loop,
  place = () => null,
  onFrame,
  onChange,
  onStill = () => {},
  onStillDropped = () => {},
  onReady = () => {},
  onError = () => {},
}) {
  const element = isVideo(video) ? video : null;
  // Sources that failed to load (a temp MP4 the server deleted) are not tried again in this editor.
  const failedSrcs = new Set();
  let videoFailed = false;
  // The fps of the editor's own background VIDEO result, 0 for a file without one.
  let metaFps = 0;

  // ADR 0019: copies the VIDEO's picture into the still (its last confirmed frame).
  function captureStill() {
    if (!element) return false;
    if (Number(element.videoWidth || 0) < 1 || Number(element.videoHeight || 0) < 1) return false;
    const width = Number(element.videoWidth || 0);
    const height = Number(element.videoHeight || 0);
    if (still.width !== width || still.height !== height) {
      still.width = width;
      still.height = height;
    }
    const ctx2d = still.getContext("2d");
    if (!ctx2d) return false;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(element, 0, 0, width, height);
    still.__panoFrameIdx = Number(still.__panoFrameIdx || 0) + 1;
    return true;
  }

  const playback = createVideoPlayback({
    video: element,
    clock,
    fps,
    span,
    loop,
    place,
    onFrame,
    onCapture: () => {
      if (captureStill()) onStill();
    },
    onChange,
  });

  // The still of one source must not show for the next.
  function dropStill() {
    still.__panoFrameIdx = 0;
    onStillDropped();
  }

  const listeners = [];
  if (element) {
    const onVideoError = () => {
      const src = element.dataset.panoSrc;
      if (!src) return;
      failedSrcs.add(src);
      onError();
    };
    for (const [type, listener] of [
      ["loadedmetadata", onReady],
      ["loadeddata", onReady],
      ["canplay", onReady],
      ["error", onVideoError],
    ]) {
      element.addEventListener(type, listener);
      listeners.push(() => element.removeEventListener(type, listener));
    }
  }

  // Lets the listeners and the playback go. The element keeps its source (close() lets it go too).
  function dispose() {
    for (const release of listeners.splice(0)) release();
    playback.dispose();
  }

  return {
    playback,
    // The failed sources (choose() skips them).
    failedSrcs,
    // Whether the last choose() found only sources that failed.
    get failed() {
      return videoFailed;
    },
    // The fps of the meta of the source the last choose() picked, 0 without one.
    get metaFps() {
      return metaFps;
    },
    // The source the element has loaded ("" without one).
    get source() {
      return element?.dataset.panoSrc || "";
    },
    // Picks the VIDEO to play: the node's own result (`own`, a URL or "") first, then a video file the background
    // input loads directly (`file`), skipping the failed ones. `meta()` is the own result's meta entry
    // (videoMetaEntry), read only when the own result is picked; without one, the length comes from the file and the
    // fps is `fps` (the Timeline's). `audio` is what detectVideoHasAudio falls back to. Returns { src, fps, duration,
    // frameCount, hasAudio }, src "" for none.
    choose({ own = "", file = "", meta = () => null, fps: fallbackFps, audio = false }) {
      const candidates = [own, file].filter(Boolean);
      const nextSrc = candidates.find((src) => !failedSrcs.has(src)) || "";
      videoFailed = !nextSrc && candidates.length > 0;
      const entry = nextSrc && nextSrc === own ? meta() : null;
      metaFps = Number(entry?.fps) > 0 ? Number(entry.fps) : 0;
      const sourceFps = Math.max(1, Number(entry?.fps || fallbackFps));
      const fileDuration = element?.dataset.panoSrc === nextSrc && Number.isFinite(element.duration) ? element.duration : 0;
      const duration = Number(entry?.duration || (entry?.frames > 0 ? entry.frames / sourceFps : fileDuration));
      const frameCount = Math.max(0, Number(entry?.frames || Math.round(duration * sourceFps)));
      const hasAudio = !!entry?.has_audio || detectVideoHasAudio(element, audio);
      return { src: nextSrc, fps: sourceFps, duration, frameCount, hasAudio };
    },
    // Loads `src` into the element ("loaded"), or lets its source go for "" ("removed"); null when nothing changed.
    // A new source starts with `loop`, `muted` and `volume` (0..1), and the playback shows the playhead's frame of
    // it once it loads; the still of the source before is dropped.
    load(src, { loop: ownLoop = false, muted = false, volume = 1 } = {}) {
      if (!element) return null;
      if (src && element.dataset.panoSrc !== src) {
        element.pause();
        dropStill();
        element.dataset.panoSrc = src;
        element.loop = !!ownLoop;
        element.muted = !!muted;
        element.volume = Math.max(0, Math.min(1, Number(volume ?? 1)));
        element.src = src;
        element.load();
        playback.setSource(true);
        return "loaded";
      }
      if (!src && element.getAttribute("src")) {
        element.pause();
        element.removeAttribute("src");
        delete element.dataset.panoSrc;
        element.load();
        dropStill();
        playback.setSource(false);
        return "removed";
      }
      return null;
    },
    captureStill,
    dropStill,
    // ADR 0019: the VIDEO is on screen while it plays; otherwise its last confirmed frame, the still. null before
    // either has a picture.
    displaySource() {
      if (
        !playback.showsVideo
        && Number(still.width || 0) > 0
        && Number(still.height || 0) > 0
        && Number(still.__panoFrameIdx || 0) > 0
      ) {
        return still;
      }
      if (
        element
        && Number(element.videoWidth || 0) > 0
        && Number(element.videoHeight || 0) > 0
        && Number(element.readyState || 0) >= HAVE_CURRENT_DATA
      ) {
        return element;
      }
      return null;
    },
    dispose,
    // When the editor closes: the VIDEO stops, the listeners and the playback go, and the VIDEO lets go of its
    // source, so the browser stops loading and decoding it.
    close() {
      element?.pause();
      dispose();
      if (element) {
        element.removeAttribute("src");
        element.load();
      }
    },
  };
}
