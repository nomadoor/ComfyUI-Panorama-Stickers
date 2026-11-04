// The new UI's editor's background and the playback of the Timeline (editor.js openStudioEditor puts it together):
// the background VIDEO that drives the playback, which background the stage draws at the playhead, and the background
// image with what the top-center line knows of it. `ctx` is the editor's context (editor.js).
import { createPanoCanvas, createPanoVideo } from "../pano_diagnostics.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { backgroundVideoMedia, createBackgroundVideo, isDecodedImageReady, mediaRevisionToken, videoMetaEntry } from "../pano_media_session.js";
import { backgroundAt, backgroundLength, backgroundShowsAt, backgroundVideoCandidates } from "../pano_background_choice.js";
import { backgroundPlace } from "../pano_port_media.js";
import { videoLinked } from "../pano_preview_video.js";
import { outputView } from "./stage_view.js";
import { spanOf } from "./timeline_model.js";
import { nodeBackground, BACKGROUND_INPUTS } from "./editor_inputs.js";

// The background VIDEO and the playback.
export function createEditorPlayback(ctx) {
  // --- The background VIDEO and the playback of the Timeline that drives it (pano_media_session.js, as the old
  // editor): the VIDEO plays with its audio and its presented frames move the playhead; without one, or outside its
  // Clip range and past its end, a clock does. The element is the editor's own, hidden.
  const backgroundVideoElement = createPanoVideo(document, "studio.background");
  backgroundVideoElement.playsInline = true;
  backgroundVideoElement.preload = "auto";
  backgroundVideoElement.crossOrigin = "anonymous";
  backgroundVideoElement.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
  const backgroundStill = createPanoCanvas({ label: "studio.still" });
  // What the last choose() learned of the VIDEO (backgroundVideoMedia's `source`).
  let videoSource = { ready: false, frameCount: 0, duration: 0 };
  const onVideoNews = () => {
    if (ctx.closed) return;
    refreshVideo();
    ctx.syncMedia();
    ctx.syncBackground();
    ctx.redraw(DRAW_REASON.MEDIA);
  };
  const backgroundVideo = createBackgroundVideo({
    video: backgroundVideoElement,
    still: backgroundStill,
    clock: {
      now: () => performance.now(),
      requestFrame: (callback) => requestAnimationFrame(callback),
      cancelFrame: (id) => cancelAnimationFrame(id),
    },
    fps: () => ctx.session.state.timeline.fps,
    span: () => spanOf(ctx.timelineCtx()),
    loop: () => ctx.view.loop,
    // The node's own background is where its Clip range puts it (docs/timeline-ui.md "背景の行").
    // [inputs] An upstream background is where its Studio's Clip range puts it.
    place: () => {
      const { place } = ctx.backgroundNow();
      return place ? backgroundPlace(place) : null;
    },
    onFrame: (frame) => {
      ctx.view.playhead = frame;
      ctx.world.camera = outputView(ctx.session.state, frame).position;
      ctx.redraw();
    },
    onChange: () => {
      ctx.view.playing = playback.playing;
      if (ctx.closed) return;
      ctx.syncBackground();
      ctx.redraw(DRAW_REASON.PLAYHEAD);
    },
    onStill: () => {
      if (ctx.closed) return;
      ctx.syncBackground();
      ctx.redraw(DRAW_REASON.MEDIA);
    },
    onReady: onVideoNews,
    onError: onVideoNews,
  });
  const { playback } = backgroundVideo;

  // Picks the background VIDEO (the node's own result, then a video file the background input loads directly) and
  // loads it; a result that came since the last call is picked up here.
  function refreshVideo() {
    // [inputs] An upstream background's VIDEO is in the result under its own keys; no file stands in for it.
    const choice = ctx.backgroundNow();
    const { own, file } = backgroundVideoCandidates(choice, { uiList: ctx.uiList, current: ctx.current, source: ctx.media.source, linkedVideoFile: (inputs) => ctx.media.linkedVideoFile(ctx.node, inputs) });
    const chosen = backgroundVideo.choose({
      own,
      file,
      meta: () => videoMetaEntry(ctx.media.uiValue(ctx.node, choice.keys.meta)),
      fps: ctx.session.state.timeline.fps,
    });
    backgroundVideo.load(chosen.src, { loop: false, muted: false, volume: 1 });
    videoSource = { ready: !!chosen.src, frameCount: chosen.frameCount, duration: chosen.duration };
  }

  // The node's own background as the Auto length reads it (pano_media_session.js).
  function backgroundMedia() {
    // [inputs] An upstream background is in the upstream length already (pano_upstream_frames).
    return backgroundLength(ctx.backgroundNow(), { uiList: ctx.uiList, current: ctx.current, videoLinked: videoLinked(ctx.node, BACKGROUND_INPUTS), loaded: videoSource }).bg;
  }

  // A moved, trimmed or restored background Clip range changes the VIDEO's time at the playhead: it is sought again.
  let backgroundClipKey = null;
  function seekMovedBackground() {
    const clip = ctx.session.state.background.clip;
    const key = `${clip.start}:${clip.in}:${clip.duration}`;
    if (backgroundClipKey !== null && key !== backgroundClipKey && backgroundVideo.source && !playback.playing) playback.seek(ctx.view.playhead);
    backgroundClipKey = key;
  }

  // The background the stage draws at the playhead: bg_color outside its Clip range and media (as the node's output),
  // else the VIDEO or its still once one has a picture, else the image.
  function stageBackground() {
    const choice = ctx.backgroundNow();
    // [inputs] An upstream background shows inside its Studio's Clip range and media, its bg_color outside them (an
    // upstream VIDEO ends at its duration, docs/timeline-ui.md "背景の行").
    const length = choice.from === "upstream" ? backgroundVideoMedia(videoSource, true) : ctx.view.media.bg ?? null;
    const shows = backgroundShowsAt(choice, ctx.view.playhead, { length });
    const shown = backgroundVideo.displaySource();
    // The VIDEO and its still are one source, so a seek keeps the frame before (pano_three_view.js). The picture keeps
    // the span the editor opened with.
    const picture = shown && isDecodedImageReady(shown)
      ? { media: shown, revision: mediaRevisionToken(shown), coverage: ctx.background.coverage, source: backgroundVideo.source }
      : ctx.background.get();
    return backgroundAt(choice, { shows, picture });
  }

  // Play / pause (the play button, Space), and a seek: a VIDEO that came with a result since the last one is picked up.
  function togglePlayback() {
    refreshVideo();
    playback.toggle();
  }
  function seek(frame) {
    refreshVideo();
    playback.seek(frame);
  }

  return { backgroundVideoElement, backgroundStill, backgroundVideo, playback, refreshVideo, backgroundMedia, seekMovedBackground, stageBackground, togglePlayback, seek };
}

// The background image (made once `ui` is: editor_view.js createEditorUi).
export function createEditorBackground(ctx) {
  const background = nodeBackground(ctx.node, ctx.media, () => {
    syncBackground();
    ctx.redraw(DRAW_REASON.MEDIA);
  }, ctx.backgroundNow());
  // What the top-center line knows of the background: the VIDEO's while one is loaded, else the image's.
  function syncBackground() {
    const image = background.state();
    if (ctx.backgroundVideo.source) ctx.ui.background = ctx.backgroundVideo.displaySource() ? "ready" : "loading";
    else ctx.ui.background = image === "ready" || !ctx.backgroundVideo.failed ? image : "failed";
    ctx.ui.empty = ctx.stageEmpty();
  }

  return { background, syncBackground };
}
