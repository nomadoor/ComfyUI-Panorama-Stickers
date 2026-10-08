// Plays Panorama Studio's Timeline on its node surface (docs/panorama-stickers-node-surface-spec.md).
// The surface shows NODE_SURFACE_FRAME until it plays. Play loops the Timeline at its fps; pause keeps
// the frame on screen, where the surface then edits, and play goes on from it. The frame lives only
// here, so a reload shows NODE_SURFACE_FRAME again. The background VIDEO plays muted through the
// editor's playback state machine (pano_video_playback.js); `video` is the surface's own element.
//
// The port Sticker's MP4 follows the playhead in `stickerVideo` (createVideoFollower), muted too; an
// RGBA IMAGE batch shows its PNGs instead (createFrameSequence, loaded with createImage).
//
// readState() is the node's working state v2. onFrame, onCapture and onChange are those of
// createVideoPlayback; onChange also runs when the VIDEO of a source fails. onStickerCapture is the
// follower's onCapture. With `camera` (Panorama Studio, #89) the Camera's Keyframes count, as in its editor.
// The Timeline is exactly the output's length (pano_timeline.js timelineSpan), as in the editor.
import { backgroundPlace, backgroundShownAt, createFrameSequence, portMediaTime } from "./pano_port_media.js";
import { NODE_SURFACE_FRAME } from "./pano_stickers_node_surface.js";
import { isTimed, timelineSpan } from "./pano_timeline.js";
import { createVideoFollower, createVideoPlayback } from "./pano_video_playback.js";

// Whether the node surface is on screen: not collapsed, and its element is in the page and laid out
// (not inside a subgraph or a graph not shown).
export function surfaceShown(element, collapsed) {
  return !collapsed && element.isConnected && element.clientWidth > 0;
}

export function createNodePlayback({ video, stickerVideo, createImage, clock, readState, onFrame, onCapture, onStickerCapture, onChange, camera = false }) {
  // The background VIDEO chosen for the node, and the one the element loads: none while out of sight.
  let chosen = "";
  let loaded = "";
  // The chosen VIDEO's length in seconds, kept while the element lets it go.
  let duration = 0;
  const failed = new Set();
  // The port Sticker's MP4 or PNGs and their meta ({ src, meta } or { frames, meta }), or null, and
  // the time of it at the playhead.
  let sticker = null;
  let stickerTime = null;
  // What the node's result says of its other inputs for the Auto length (follow's `media`).
  let media = {};
  const fps = () => readState().timeline.fps;
  const port = (state) => state.stickers.find((item) => item.source.kind === "port");
  // The background as autoTimelineLength reads it. Without one from the node's result (`media.bg` undefined), the
  // VIDEO the surface plays counts, by its length.
  const background = () => (media.bg !== undefined ? media.bg : chosen && duration > 0 ? { video: true, frames: Math.round(duration * fps()), duration } : null);
  // The Clip range of the background the surface shows: the node's own, or an upstream background's
  // (`media.bg` null) in the Timeline's frames (`media.upstreamClip`, null with the default one).
  const backgroundClip = () => (media.bg === null ? media.upstreamClip ?? null : readState().background.clip);
  // The editor's Timeline span: the output's length.
  const span = () => timelineSpan(readState(), {
    ...media,
    bg: background(),
    port: sticker?.meta ?? media.port ?? null,
    camera,
  });
  const playback = createVideoPlayback({
    video,
    clock,
    fps,
    span,
    loop: () => true,
    place: () => {
      const clip = backgroundClip();
      return clip ? backgroundPlace(clip) : null;
    },
    onFrame,
    onCapture,
    onChange,
  });
  const onMetadata = () => {
    if (loaded === chosen && Number.isFinite(video.duration)) duration = video.duration;
  };
  const onError = () => {
    if (!loaded) return;
    failed.add(loaded);
    onChange();
  };
  const follower = createVideoFollower({ video: stickerVideo, onCapture: onStickerCapture, onChange });
  const frames = createFrameSequence({ createImage, onLoad: onChange });
  video.muted = true;
  video.addEventListener("loadedmetadata", onMetadata);
  video.addEventListener("error", onError);

  // Loads src into the element, or none. The playback shows its frame from the new source.
  function load(src) {
    if (src === loaded) return;
    loaded = src;
    video.pause();
    if (src) video.src = src;
    else video.removeAttribute("src");
    video.load();
    playback.setSource(!!src);
  }

  // Pauses on the frame on screen (the editor's stop).
  function pause() {
    if (playback.playing) playback.stop();
  }

  // The port Sticker's MP4 at the playhead's frame.
  function followSticker(state) {
    const portSticker = port(state);
    stickerTime = sticker && portSticker ? portMediaTime(portSticker.clip, playback.frame, state.timeline.fps, sticker.meta) : null;
    follower.follow({
      src: sticker?.src || "",
      time: stickerTime,
      playing: playback.advancing,
      fps: state.timeline.fps,
    });
  }

  return {
    get frame() {
      return playback.frame;
    },
    get playing() {
      return playback.playing;
    },
    get showsVideo() {
      return playback.showsVideo;
    },
    get source() {
      return loaded;
    },
    // Whether the background shows at the playhead (backgroundShownAt); where it does not, the surface shows
    // bg_color, as the node's output does.
    get backgroundShows() {
      const clip = backgroundClip();
      // An upstream background ends with its media (`media.upstreamMedia`), which an upstream Scene set at its own fps.
      if (media.bg === null) return !clip || backgroundShownAt(clip, playback.frame, fps(), media.upstreamMedia ?? null, true);
      return !clip || backgroundShownAt(clip, playback.frame, fps(), background(), !!media.upstream);
    },
    pause,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return sticker;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(still, fallback) {
      if (sticker?.frames) return frames.picture(sticker.frames, stickerTime, sticker.meta, fallback);
      return follower.picture(still, fallback);
    },
    toggle() {
      if (playback.playing) playback.stop();
      else playback.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in, which `upstreamClip`
    // places and `upstreamMedia` ({ video, frames, duration } of its MP4) ends). Out of sight, the node pauses and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown, sources, state, sticker: portMedia = null, media: inputs = {} }) {
      sticker = shown ? portMedia : null;
      media = inputs;
      if (!shown) {
        pause();
        load("");
        followSticker(state);
        return false;
      }
      for (const src of failed) {
        if (!sources.includes(src)) failed.delete(src);
      }
      const next = sources.find((src) => src && !failed.has(src)) || "";
      const changed = next !== chosen;
      if (changed) {
        chosen = next;
        duration = 0;
      }
      load(chosen);
      const playable = isTimed(state, { camera }) || (!!chosen && playback.state !== "error") || !!sticker;
      if (!playable) pause();
      const reset = changed || !playable || (!playback.playing && playback.frame >= span());
      if (reset && playback.frame !== NODE_SURFACE_FRAME) playback.seek(NODE_SURFACE_FRAME);
      followSticker(state);
      return playable;
    },
    dispose() {
      playback.dispose();
      follower.dispose();
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("error", onError);
      video.pause();
      video.removeAttribute("src");
      video.load();
      loaded = "";
    },
  };
}
