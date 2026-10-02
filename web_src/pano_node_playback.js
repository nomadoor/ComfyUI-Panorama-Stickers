// Plays PanoramaStickersNode's Timeline on its node surface (docs/panorama-stickers-node-surface-spec.md).
// The surface shows NODE_SURFACE_FRAME until it plays. Play loops the Timeline at its fps; pause keeps
// the frame on screen, where the surface then edits, and play goes on from it. The frame lives only
// here, so a reload shows NODE_SURFACE_FRAME again. The background VIDEO plays muted through the
// editor's playback state machine (pano_video_playback.js); `video` is the surface's own element.
//
// readState() is the node's working state v2. onFrame, onCapture and onChange are those of
// createVideoPlayback; onChange also runs when the VIDEO of a source fails.
import { NODE_SURFACE_FRAME } from "./pano_stickers_node_surface.js";
import { isTimed, timelineSpan } from "./pano_timeline.js";
import { createVideoPlayback } from "./pano_video_playback.js";

// Whether the node surface is on screen: not collapsed, and its element is in the page and laid out
// (not inside a subgraph or a graph not shown).
export function surfaceShown(element, collapsed) {
  return !collapsed && element.isConnected && element.clientWidth > 0;
}

export function createNodePlayback({ video, clock, pageHidden, readState, onFrame, onCapture, onChange }) {
  // The background VIDEO chosen for the node, and the one the element loads: none while out of sight.
  let chosen = "";
  let loaded = "";
  // The chosen VIDEO's length in seconds, kept while the element lets it go.
  let duration = 0;
  const failed = new Set();
  const fps = () => readState().timeline.fps;
  // The editor's Timeline span: the Timeline length (5 s without one), widened to the VIDEO.
  const span = () => timelineSpan(readState(), {
    minimum: Math.round(fps() * 5),
    frames: chosen ? Math.round(duration * fps()) : 0,
  });
  const playback = createVideoPlayback({
    video,
    clock,
    pageHidden,
    fps,
    span,
    loop: () => true,
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
    pause,
    toggle() {
      if (playback.playing) playback.stop();
      else playback.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. Out of sight,
    // the node pauses and lets its VIDEO go, keeping the frame. Another background VIDEO, a Timeline
    // that no longer reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown, sources, state }) {
      if (!shown) {
        pause();
        load("");
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
      const playable = isTimed(state) || (!!chosen && playback.state !== "error");
      if (!playable) pause();
      const reset = changed || !playable || (!playback.playing && playback.frame >= span());
      if (reset && playback.frame !== NODE_SURFACE_FRAME) playback.seek(NODE_SURFACE_FRAME);
      return playable;
    },
    dispose() {
      playback.dispose();
      video.removeEventListener("loadedmetadata", onMetadata);
      video.removeEventListener("error", onError);
      video.pause();
      video.removeAttribute("src");
      video.load();
      loaded = "";
    },
  };
}
