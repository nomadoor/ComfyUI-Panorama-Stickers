// The new Preview window (docs/studio-ui.md "Preview のウィンドウ", ADR 0044): the Panorama Preview node's source shown
// read-only on the new editor's stage (stage.js), filling the window. An IMAGE or a VIDEO source; a PANO_SCENE source
// still opens the old window (web_src/editor_choice.js previewUsesNewWindow). A VIDEO plays with its sound through the
// editor's background playback (pano_media_session.js createBackgroundVideo) under the bottom playback strip. Nothing
// is written to the node. The Vue shell is StudioPreviewWindow.vue.
import { createApp, reactive } from "vue";
import StudioPreviewWindow from "../components/studio/StudioPreviewWindow.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { createBackgroundVideo, isDecodedImageReady, mediaRevisionToken, videoMetaEntry } from "../pano_media_session.js";
import { isNodeOutputMediaCurrent, videoLinked } from "../pano_preview_video.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { guardEditorKeys } from "./key_guard.js";
import { createStage, stageUi } from "./stage.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { readLoopSetting, writeLoopSetting } from "./timeline_actions.js";
import { openingView } from "./view_camera.js";

// The Preview node's input that carries what it shows.
const SOURCE_INPUTS = ["source"];
// Where the node's result has its VIDEO (Python's "default" preview contract, node_runtime.py PREVIEW_UI_KEYS, which
// nodes.py _video_preview_ui writes for PanoramaPreviewNode).
const PREVIEW_VIDEO_KEYS = { videoKey: "pano_videos", metaKey: "pano_video_meta" };
// The fps a VIDEO plays at when its result does not say (the Timeline's default).
const DEFAULT_FPS = 24;
// The ground height of a Preview: the editor's default (docs/space-and-view.md "目の高さ").
const PREVIEW_GROUND = -1.6;

const openNodes = new WeakSet();
const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// Opens the window for `node` (app, api: ComfyUI's). Returns { close, stage }, or null when it is open already.
// storage keeps the loop switch (the editor's, localStorage).
export async function openPreviewWindow(node, { app = null, api = null, storage = globalThis.localStorage } = {}) {
  if (!node || openNodes.has(node)) return null;
  openNodes.add(node);
  try {
    await installStudioStylesheet();
  } catch (error) {
    openNodes.delete(node);
    throw error;
  }
  const media = createComfyMediaAdapter({ app, api });
  let stage = null;
  let closed = false;
  let releaseKeyGuard = () => {};
  const ui = reactive({ ...stageUi(), fullscreen: false });
  // The playback strip (a VIDEO source only): the frame shown, its count and fps, whether it plays and loops.
  const playbackView = reactive({ video: videoLinked(node, SOURCE_INPUTS), frame: 0, frames: 1, fps: DEFAULT_FPS, playing: false, loop: readLoopSetting(storage) });

  let image = null;
  let status = "none";
  if (media.resolvePreferredExactLinkedSource(node, SOURCE_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, SOURCE_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      stage?.redraw(DRAW_REASON.MEDIA);
    }, `preview-window:${SOURCE_INPUTS.join("|")}`);
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = normalizeCoverageValue(undefined);
  const imageBackground = () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null);

  // --- The VIDEO source: the node's own result first, then the file its source loads directly.
  let videoElement = null;
  let videoStill = null;
  let backgroundVideo = null;
  const redraw = (reason) => stage?.redraw(reason);
  function refreshVideo() {
    if (!backgroundVideo) return;
    const keys = PREVIEW_VIDEO_KEYS;
    const own = isNodeOutputMediaCurrent(node, "background") ? media.uiList(node, keys.videoKey)[0] || null : null;
    const chosen = backgroundVideo.choose({
      own: media.source(own),
      file: media.linkedVideoFile(node, SOURCE_INPUTS),
      meta: () => videoMetaEntry(media.uiValue(node, keys.metaKey)),
      fps: playbackView.fps,
    });
    backgroundVideo.load(chosen.src, { loop: false, muted: false, volume: 1 });
    if (Number(chosen.fps) > 0) playbackView.fps = Number(chosen.fps);
    if (Number(chosen.frameCount) > 0) playbackView.frames = Math.floor(Number(chosen.frameCount));
  }
  if (playbackView.video) {
    videoElement = createPanoVideo(document, "preview.background");
    videoElement.playsInline = true;
    videoElement.preload = "auto";
    videoElement.crossOrigin = "anonymous";
    videoElement.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none";
    videoStill = createPanoCanvas({ label: "preview.still" });
    const onNews = () => {
      if (closed) return;
      refreshVideo();
      redraw(DRAW_REASON.MEDIA);
    };
    backgroundVideo = createBackgroundVideo({
      video: videoElement,
      still: videoStill,
      clock: {
        now: () => performance.now(),
        requestFrame: (callback) => requestAnimationFrame(callback),
        cancelFrame: (id) => cancelAnimationFrame(id),
      },
      fps: () => playbackView.fps,
      span: () => Math.max(1, playbackView.frames),
      loop: () => playbackView.loop,
      onFrame: (frame) => {
        playbackView.frame = frame;
        redraw(DRAW_REASON.PLAYHEAD);
      },
      onChange: () => {
        playbackView.playing = backgroundVideo.playback.playing;
        redraw(DRAW_REASON.PLAYHEAD);
      },
      onStill: () => !closed && redraw(DRAW_REASON.MEDIA),
      onReady: onNews,
      onError: onNews,
    });
    refreshVideo();
  }
  const background = () => {
    const shown = backgroundVideo?.displaySource();
    if (shown && isDecodedImageReady(shown)) return { media: shown, revision: mediaRevisionToken(shown), coverage, source: backgroundVideo.source };
    return imageBackground();
  };

  const output = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 };
  const world = { ground: PREVIEW_GROUND, camera: null };
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);

  const close = () => {
    if (closed) return;
    closed = true;
    releaseKeyGuard();
    if (backgroundVideo) {
      backgroundVideo.playback.stop();
      backgroundVideo.close();
      videoElement.remove();
      releasePanoCanvas(videoStill);
    }
    stage?.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    if (document.fullscreenElement) document.exitFullscreen?.().catch?.(() => {});
  };
  const controller = {
    onStage: ({ canvas, root }) => {
      releaseKeyGuard = guardEditorKeys(root);
      const opening = openingView({ output, world: { ...world, boxes: [], content: null }, frameAvailable: false });
      stage = createStage({ canvas, root, opening, output, world, background, content: () => null, ui, onEscape: () => close() });
      return stage;
    },
    close: () => close(),
    resetView: () => stage?.resetView(),
    grid: (shown) => {
      ui.gridHidden = !shown;
      stage?.redraw();
    },
    play: () => {
      refreshVideo();
      backgroundVideo?.playback.toggle();
    },
    seek: (frame) => {
      refreshVideo();
      backgroundVideo?.playback.seek(frame);
    },
    loop: (on) => {
      playbackView.loop = !!on;
      writeLoopSetting(storage, playbackView.loop);
    },
    fullscreen: (root) => {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else root?.requestFullscreen?.();
    },
  };
  const vueApp = createApp(StudioPreviewWindow, { nodeTitle: String(node.title || "Panorama Preview"), ui, playback: playbackView, controller });
  vueApp.mount(mountHost);
  if (videoElement) mountHost.appendChild(videoElement);
  return { close, stage: () => stage, playback: playbackView };
}
