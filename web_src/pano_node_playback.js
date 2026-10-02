// Plays PanoramaStickersNode's Timeline on its node surface (docs/panorama-stickers-node-surface-spec.md).
// The surface edits Timeline frame NODE_SURFACE_FRAME, so playback starts there, loops the Timeline at
// its fps and goes back there when it stops. The background VIDEO plays muted through the editor's
// playback state machine (pano_video_playback.js); `video` is the surface's own element.
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
  let source = "";
  const failed = new Set();
  const fps = () => readState().timeline.fps;
  const playback = createVideoPlayback({
    video,
    clock,
    pageHidden,
    fps,
    // The editor's Timeline span: the Timeline length (5 s without one), widened to the VIDEO.
    span: () => timelineSpan(readState(), {
      minimum: Math.round(fps() * 5),
      frames: source && Number.isFinite(video.duration) ? Math.round(video.duration * fps()) : 0,
    }),
    loop: () => true,
    onFrame,
    onCapture,
    onChange,
  });
  const onError = () => {
    if (!source) return;
    failed.add(source);
    onChange();
  };
  video.muted = true;
  video.addEventListener("error", onError);

  function stop() {
    if (playback.playing) playback.seek(NODE_SURFACE_FRAME);
  }

  // Plays the first of `candidates` (VIDEO URLs, best first) that has not failed, or none. A change
  // stops playback. A failed URL is tried again once it has left the candidates.
  function setSources(candidates) {
    for (const src of failed) {
      if (!candidates.includes(src)) failed.delete(src);
    }
    const next = candidates.find((src) => src && !failed.has(src)) || "";
    if (next === source) return;
    source = next;
    video.pause();
    if (next) video.src = next;
    else video.removeAttribute("src");
    video.load();
    playback.setSource(!!next);
    if (playback.frame !== NODE_SURFACE_FRAME) playback.seek(NODE_SURFACE_FRAME);
  }

  // The play button shows when the scene changes over time or the background is a VIDEO that loads.
  function available(state) {
    return isTimed(state) || (!!source && playback.state !== "error");
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
      return source;
    },
    stop,
    toggle() {
      if (playback.playing) stop();
      else playback.play();
    },
    // Follows the node: a surface not shown stops and lets its VIDEO go. Returns whether the play
    // button shows.
    follow({ shown, sources, state }) {
      setSources(shown ? sources : []);
      const playable = shown && available(state);
      if (!playable) stop();
      return playable;
    },
    dispose() {
      playback.dispose();
      video.removeEventListener("error", onError);
      video.pause();
      video.removeAttribute("src");
      video.load();
      source = "";
    },
  };
}
