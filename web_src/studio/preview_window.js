// The new Preview window (docs/studio-ui.md "Preview のウィンドウ", ADR 0044): the Panorama Preview node's source shown
// read-only on the new editor's stage (stage.js), filling the window. An IMAGE, a VIDEO or a PANO_SCENE source: a Scene
// draws its layers as the Studio editor draws an upstream Scene (upstream.js, stage_content.js), with its background
// and its Timeline (pano_timeline_fps / pano_timeline_frames of the node's result). A VIDEO plays with its sound through the
// editor's background playback (pano_media_session.js createBackgroundVideo) under the bottom playback strip. Nothing
// is written to the node. The Vue shell is StudioPreviewWindow.vue.
import { createApp, reactive } from "vue";
import StudioPreviewWindow from "../components/studio/StudioPreviewWindow.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { createBackgroundVideo, isDecodedImageReady, mediaRevisionToken, videoMetaEntry } from "../pano_media_session.js";
import { backgroundPlace } from "../pano_port_media.js";
import { isNodeOutputMediaCurrent, linkedInputType, videoLinked } from "../pano_preview_video.js";
import { loadSceneState } from "../pano_scene_state.js";
import { PANO_SCENE_TYPE } from "../pano_upstream.js";
import { createStageMedia, stageContent } from "./stage_content.js";
import { createStudioUpstream, upstreamBackground } from "./upstream.js";
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
  const isScene = linkedInputType(node, "source") === PANO_SCENE_TYPE;
  const isVideo = !isScene && videoLinked(node, SOURCE_INPUTS);
  const resultNumber = (key) => Number(media.uiList(node, key)[0]);
  const sceneFps = resultNumber("pano_timeline_fps") > 0 ? resultNumber("pano_timeline_fps") : DEFAULT_FPS;
  const sceneFrames = Math.max(1, Math.floor(resultNumber("pano_timeline_frames") || 1));
  // `video`: the strip shows (a VIDEO, or a Scene longer than one frame).
  const playbackView = reactive({
    video: isVideo || (isScene && sceneFrames > 1),
    frame: 0,
    frames: isScene ? sceneFrames : 1,
    fps: isScene ? sceneFps : DEFAULT_FPS,
    playing: false,
    loop: readLoopSetting(storage),
  });

  // --- A Scene: its layers (read-only) and the background its Studio gave it.
  const sceneState = (() => {
    const empty = loadSceneState(null);
    return { ...empty, timeline: { ...empty.timeline, fps: sceneFps } };
  })();
  const sceneBg = isScene ? upstreamBackground({ uiList: (key) => media.uiList(node, key), current: true, ownLinked: false, fps: sceneFps }) : null;
  const stageMedia = isScene
    ? createStageMedia({ assetSource: media.assetSource, source: media.source, fetchApi: api?.fetchApi ? (path, options) => api.fetchApi(path, options) : null, onChange: () => !closed && stage?.redraw(DRAW_REASON.MEDIA) })
    : null;
  const upstreamList = () => {
    const value = media.uiValue(node, "pano_upstream_layers");
    return Array.isArray(value) && value.length ? value : null;
  };
  const upstream = isScene
    ? createStudioUpstream({
      list: upstreamList,
      linkType: () => linkedInputType(node, "source"),
      uiList: (key) => media.uiList(node, key),
      state: () => sceneState,
      nodeName: () => null,
      mediaSource: media.source,
      mediaAssetSource: media.assetSource,
      revisionOf: mediaRevisionToken,
      playing: () => playbackView.playing,
      editorFile: (sticker) => stageMedia.editorFile(sticker),
      onMedia: () => !closed && stage?.redraw(DRAW_REASON.MEDIA),
    })
    : null;
  const content = () => (isScene
    ? stageContent(sceneState, playbackView.frame, {
      media: (sticker) => stageMedia.media(sticker),
      editorFile: stageMedia.editorFile,
      sceneBox: (url) => stage?.sceneBox(url) ?? null,
      upstream: upstream.viewInput(playbackView.frame),
    })
    : null);

  let image = null;
  let status = "none";
  if (sceneBg?.imageKey) {
    image = media.uiImage(node, sceneBg.imageKey, new Map(), (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      stage?.redraw(DRAW_REASON.MEDIA);
    });
    if (image) status = loaded(image) ? "ready" : "loading";
  } else if (!isScene && media.resolvePreferredExactLinkedSource(node, SOURCE_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, SOURCE_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      stage?.redraw(DRAW_REASON.MEDIA);
    }, `preview-window:${SOURCE_INPUTS.join("|")}`);
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = sceneBg?.coverage ?? normalizeCoverageValue(undefined);
  const imageBackground = () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null);

  // --- The VIDEO source: the node's own result first, then the file its source loads directly.
  let videoElement = null;
  let videoStill = null;
  let backgroundVideo = null;
  const redraw = (reason) => stage?.redraw(reason);
  function refreshVideo() {
    if (!backgroundVideo) return;
    const keys = sceneBg ?? PREVIEW_VIDEO_KEYS;
    const own = sceneBg || isNodeOutputMediaCurrent(node, "background") ? media.uiList(node, keys.videoKey)[0] || null : null;
    const chosen = backgroundVideo.choose({
      own: media.source(own),
      file: isScene ? "" : media.linkedVideoFile(node, SOURCE_INPUTS),
      meta: () => videoMetaEntry(media.uiValue(node, keys.metaKey)),
      fps: playbackView.fps,
    });
    backgroundVideo.load(chosen.src, { loop: false, muted: false, volume: 1 });
    // A Scene keeps its Timeline's fps and length; a VIDEO source has its own.
    if (isScene) return;
    if (Number(chosen.fps) > 0) playbackView.fps = Number(chosen.fps);
    if (Number(chosen.frameCount) > 0) playbackView.frames = Math.floor(Number(chosen.frameCount));
  }
  if (isVideo || isScene) {
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
      place: () => (sceneBg ? backgroundPlace(sceneBg.place) : null),
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
    stageMedia?.dispose();
    upstream?.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    if (document.fullscreenElement) document.exitFullscreen?.().catch?.(() => {});
  };
  const controller = {
    onStage: ({ canvas, root }) => {
      releaseKeyGuard = guardEditorKeys(root);
      const opening = openingView({ output, world: { ...world, boxes: [], content: null }, frameAvailable: false });
      stage = createStage({ canvas, root, opening, output, world, background, content, ui, onEscape: () => close() });
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
