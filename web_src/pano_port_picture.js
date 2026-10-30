// The port Sticker's picture at a Timeline frame, from a result's `ui` (docs/timeline-ui.md "`port` の Sticker の素材の
// 表示"): its editor MP4 (`pano_sticker_input_videos`) follows the playhead through a VIDEO of its own, the PNGs of an
// RGBA IMAGE batch (`pano_sticker_input_frames`) show one per frame, else its first frame (`pano_sticker_input_images`)
// shows. Where its media shows nothing (outside its Clip range, past its end) there is no picture. One instance per
// port Sticker shown: an upstream layer's (pano_upstream_layers.js) or Studio's own (studio/port_media.js).
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "./pano_diagnostics.js";
import {
  EXTERNAL_STICKER_PREVIEW_KEY,
  PORT_FRAMES_KEY,
  PORT_VIDEO_KEY,
  PORT_VIDEO_META_KEY,
  createFrameSequence,
  portMediaSource,
  portMediaTime,
} from "./pano_port_media.js";
import { createVideoFollower } from "./pano_video_playback.js";

// image(src): the image of a URL (loaded once by the caller, null for none). mediaSource(entry): the URL of a `ui`
// file entry. revisionOf(media): a picture's revision. fps(): the Timeline fps of the Clip ranges given. playing():
// whether the playhead advances. onMedia(): a picture changed (draw again). `label` names the VIDEO and its still
// (pano_diagnostics.js).
export function createPortPicture({ image, mediaSource, revisionOf, fps, playing, onMedia = () => {}, label = "port" }) {
  let frames = null;
  let follower = null;
  let video = null;
  let still = null;

  function videoFollower() {
    if (follower) return follower;
    video = createPanoVideo(document, `${label}-video`);
    video.playsInline = true;
    video.preload = "auto";
    still = createPanoCanvas({ label: `${label}-still` });
    still.__panoFrameIdx = 0;
    follower = createVideoFollower({
      video,
      onCapture: () => {
        const width = Number(video.videoWidth || 0);
        const height = Number(video.videoHeight || 0);
        if (width < 1 || height < 1) return;
        still.width = width;
        still.height = height;
        still.getContext("2d")?.drawImage(video, 0, 0);
        still.__panoFrameIdx += 1;
        onMedia();
      },
      onChange: onMedia,
    });
    return follower;
  }

  // The picture at Timeline `frame` of a port Sticker with the Clip range `clip` (in the frames of fps()), from the
  // `ui` read by list(key): { media, revision, source }, or null.
  function picture(list, clip, frame) {
    const rate = fps();
    const meta = list(PORT_VIDEO_META_KEY)[0];
    const urls = list(PORT_FRAMES_KEY).map(mediaSource).filter(Boolean);
    const src = mediaSource(list(PORT_VIDEO_KEY)[0] || null);
    const media = meta && typeof meta === "object" ? (urls.length ? { frames: urls, meta } : src ? { src, meta } : null) : null;
    const first = image(mediaSource(list(EXTERNAL_STICKER_PREVIEW_KEY)[0] || null));
    const time = media ? portMediaTime(clip, frame, rate, media.meta) : null;
    let shown = first;
    if (media?.frames) {
      frames ||= createFrameSequence({
        createImage: (url, onLoad) => {
          const img = new Image();
          img.onload = onLoad;
          img.onerror = onLoad;
          img.src = url;
          return img;
        },
        onLoad: onMedia,
      });
      shown = frames.picture(media.frames, time, media.meta, first);
    } else if (media?.src) {
      const following = videoFollower();
      following.follow({ src: media.src, time, playing: playing(), fps: rate });
      shown = following.picture(still, first);
    }
    return shown ? { media: shown, revision: revisionOf(shown), source: portMediaSource(media, first) } : null;
  }

  // Lets go of the VIDEO and its still.
  function dispose() {
    follower?.dispose();
    if (still) releasePanoCanvas(still);
    follower = null;
    video = null;
    still = null;
    frames = null;
  }

  return { picture, dispose };
}
