// The new Preview window (docs/studio-ui.md "Preview のウィンドウ", ADR 0044): the Panorama Preview node's source shown
// read-only on the new editor's stage (stage.js), filling the window. An IMAGE, a VIDEO or a PANO_SCENE source: a Scene
// draws its layers as the Studio editor draws an upstream Scene (upstream.js, stage_content.js), with its background
// and its Timeline (pano_timeline_fps / pano_timeline_frames of the node's result). A VIDEO plays with its sound through the
// editor's background playback (pano_media_session.js createBackgroundVideo) under the bottom playback strip. Nothing
// is written to the node. The view follows and coasts (preview_motion.js); it opens where the node's view is and hands
// back on close, and the node's display (a Scene's viewer, an IMAGE / VIDEO source's VIDEO) stops while the window is
// open and hands its playhead over and back (docs/space-and-view.md, docs/studio-ui.md "Preview のウィンドウ"). The Vue
// shell is StudioPreviewWindow.vue.
import { createApp, reactive } from "vue";
import StudioPreviewWindow from "../components/studio/StudioPreviewWindow.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { backgroundAt, backgroundShowsAt, backgroundVideoCandidates, chooseBackground } from "../pano_background_choice.js";
import { backgroundVideoMedia, createBackgroundVideo, isDecodedImageReady, mediaRevisionToken, videoMetaEntry } from "../pano_media_session.js";
import { peekPreviewNode, peekSceneViewer, sceneViewerWindowClosed, sceneViewerWindowOpened } from "../pano_node_bridge.js";
import { backgroundPlace } from "../pano_port_media.js";
import { stageOwnsKey } from "../pano_key_focus.js";
import { inputLinked, isNodeOutputMediaCurrent, linkedInputType, videoLinked } from "../pano_preview_video.js";
import { loadSceneState } from "../pano_scene_state.js";
import { PANO_SCENE_TYPE } from "../pano_upstream.js";
import { createDepthColors } from "../pano_depth_color.js";
import { createStageMedia, stageContent } from "./stage_content.js";
import { createStudioUpstream } from "./upstream.js";
import { loadNodeInputImage } from "./node_image.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { frameShownAt } from "../pano_video_playback.js";
import { guardEditorKeys } from "./key_guard.js";
import { createPreviewMotion, previewGround, previewHandBack, previewOpening } from "./preview_motion.js";
import { editorKeyAction } from "./shortcuts.js";
import { createStage, stageUi } from "./stage.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { readLoopSetting, writeLoopSetting } from "./timeline_actions.js";

// The Preview node's input that carries what it shows.
const SOURCE_INPUTS = ["source"];
// The fps a VIDEO plays at when its result does not say (the Timeline's default).
const DEFAULT_FPS = 24;

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
  // What the opening makes, let go by release (below) when the window closes or the opening throws on the way.
  let stageMedia = null;
  let upstream = null;
  let depthColors = null;
  let videoElement = null;
  let videoStill = null;
  let backgroundVideo = null;
  let mountHost = null;
  let vueApp = null;
  let onKeyDown = null;
  // The node's view and playhead the window goes on from: a Scene viewer's record, or the IMAGE / VIDEO runtime.
  let sceneRecord = null;
  let imageRuntime = null;
  // What the node handed over when the window opened (its playhead), and whether its Scene viewer was told.
  let handOver = null;
  let sceneViewerTold = false;
  // Whether the IMAGE / VIDEO runtime was told the window opens (it pauses its VIDEO then).
  let imageRuntimeTold = false;
  // What the node's VIDEO handed over when the window opened: { time, playing }, or null without one on the node.
  let nodeVideoHandOver = null;
  // The playback strip (a VIDEO source only): the frame shown, its count and fps, whether it plays and loops.
  let playbackView = null;
  // Lets go of what the window made. finished: the window opened, so the node goes on from where the window was going
  // and from its playhead; an opening that threw gives the node back what it handed over.
  const release = (finished) => {
    closed = true;
    if (finished) {
      const last = stage?.destination();
      if (last) previewHandBack(last, { scene: sceneRecord?.view ?? null, image: imageRuntime });
    }
    const lastFrame = playbackView ? Math.max(0, Math.min(playbackView.frames - 1, playbackView.frame)) : 0;
    const lastPlaying = !!playbackView?.video && !!playbackView?.playing;
    if (sceneRecord && finished) {
      sceneRecord.frame = lastFrame;
      sceneRecord.playing = lastPlaying;
    } else if (sceneRecord && handOver) {
      sceneRecord.playing = handOver.playing;
    }
    if (onKeyDown) document.removeEventListener("keydown", onKeyDown, true);
    releaseKeyGuard();
    if (backgroundVideo) {
      backgroundVideo.playback.stop();
      backgroundVideo.close();
    }
    videoElement?.remove();
    if (videoStill) releasePanoCanvas(videoStill);
    stage?.dispose();
    stageMedia?.dispose();
    upstream?.dispose();
    depthColors?.dispose();
    vueApp?.unmount();
    mountHost?.remove();
    openNodes.delete(node);
    if (sceneViewerTold) sceneViewerWindowClosed(node);
    // The node's VIDEO goes on from the window's playhead (its time is that frame's PTS), or from where it was.
    if (finished) imageRuntime?.windowClosed?.(nodeVideoHandOver ? { time: lastFrame / playbackView.fps, playing: lastPlaying } : {});
    else if (imageRuntimeTold) imageRuntime?.windowClosed?.(nodeVideoHandOver ?? {});
    imageRuntime?.requestDraw?.();
    if (finished && document.fullscreenElement) document.exitFullscreen?.().catch?.(() => {});
  };
  const close = () => {
    if (!closed) release(true);
  };
  try {
    // The grids (ground and sky) start shown, as in the editor (docs/space-and-view.md "Preview のウィンドウ", ADR 0058).
    const ui = reactive({ ...stageUi(), gridHidden: false, fullscreen: false });
    const isScene = linkedInputType(node, "source") === PANO_SCENE_TYPE;
    const isVideo = !isScene && videoLinked(node, SOURCE_INPUTS);
    const resultNumber = (key) => Number(media.uiList(node, key)[0]);
    const sceneFps = resultNumber("pano_timeline_fps") > 0 ? resultNumber("pano_timeline_fps") : DEFAULT_FPS;
    const sceneFrames = Math.max(1, Math.floor(resultNumber("pano_timeline_frames") || 1));
    sceneRecord = isScene ? peekSceneViewer(node)?.record ?? null : null;
    imageRuntime = isScene ? null : peekPreviewNode(node)?.runtime ?? null;
    // `video`: the strip shows (a VIDEO, or a Scene longer than one frame).
    playbackView = reactive({
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
    // Which background shows (pano_background_choice.js, caller "window"): a Scene's own, chosen when the window opens; an
    // IMAGE or a VIDEO source's, read from the Preview's keys. Its span (the node's background_range) and a Scene's
    // bg_color are read again on each draw.
    const choiceInputs = () => ({
      uiList: (key) => media.uiList(node, key),
      current: (channel) => isNodeOutputMediaCurrent(node, channel),
      ownLinked: true,
      scene: isScene,
      widget: (name) => node.widgets?.find?.((widget) => widget?.name === name) ?? null,
      fps: sceneFps,
    });
    const opened = chooseBackground("window", choiceInputs());
    // The color stays the open-time Scene background's own while it has one, else this draw's (as before a result that
    // came while the window is open).
    const drawChoice = () => {
      const now = chooseBackground("window", choiceInputs());
      return {
        ...opened,
        coverage: opened.from === "upstream" ? opened.coverage : now.coverage,
        color: opened.upstream?.color ?? now.color,
      };
    };
    stageMedia = isScene
      ? createStageMedia({ assetSource: media.assetSource, source: media.source, fetchApi: api?.fetchApi ? (path, options) => api.fetchApi(path, options) : null, onChange: () => !closed && stage?.redraw(DRAW_REASON.MEDIA) })
      : null;
    const upstreamList = () => {
      const value = media.uiValue(node, "pano_upstream_layers");
      return Array.isArray(value) && value.length ? value : null;
    };
    upstream = isScene
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
    // The colors of the Scene's depth grids (docs/threejs-spark-integration.md "DA3_GEOMETRY mono の深度のグリッド"), as
    // the Studio editor draws them.
    depthColors = isScene
      ? createDepthColors({
        createVideo: () => createPanoVideo(document, "preview-window.depth-video"),
        createCanvas: () => createPanoCanvas({ label: "preview-window.depth-still" }),
        releaseCanvas: releasePanoCanvas,
        onChange: () => !closed && stage?.redraw(DRAW_REASON.MEDIA),
      })
      : null;
    function content() {
      if (!isScene) return null;
      const value = stageContent(sceneState, playbackView.frame, {
        media: (sticker) => stageMedia.media(sticker),
        editorFile: stageMedia.editorFile,
        sceneBox: (url) => stage?.sceneBox(url) ?? null,
        upstream: upstream.viewInput(playbackView.frame),
        depthColor: (slot, video) => depthColors.picture(slot, video, !!backgroundVideo?.playback.advancing),
        playing: !!backgroundVideo?.playback.advancing,
      });
      depthColors.retain(value.space.depthSlots);
      return value;
    }

    let image = null;
    let status = "none";
    if (opened.from === "upstream") {
      image = media.uiImage(node, opened.keys.image, new Map(), (settled) => {
        status = loaded(settled) ? "ready" : "failed";
        stage?.redraw(DRAW_REASON.MEDIA);
      });
      if (image) status = loaded(image) ? "ready" : "loading";
    } else if (!isScene) {
      // An IMAGE: the node's own result first, then the file its source loads directly (node_image.js, ADR 0003).
      const picture = loadNodeInputImage({
        media,
        node,
        inputs: SOURCE_INPUTS,
        channel: "background",
        cacheKey: `preview-window:${SOURCE_INPUTS.join("|")}`,
        onChange: () => {
          image = picture.image();
          status = picture.state();
          stage?.redraw(DRAW_REASON.MEDIA);
        },
      });
      image = picture.image();
      status = picture.state();
    }
    const imagePicture = () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src } : null);

    // --- The VIDEO source: the node's own result first, then the file its source loads directly.
    // What the chosen VIDEO is known to be (the length a Scene's background shows within).
    let videoSource = { ready: false, frameCount: 0, duration: 0 };
    const redraw = (reason) => stage?.redraw(reason);
    function refreshVideo() {
      if (!backgroundVideo) return;
      const { own, file } = backgroundVideoCandidates(opened, {
        uiList: (key) => media.uiList(node, key),
        current: (channel) => isNodeOutputMediaCurrent(node, channel),
        source: media.source,
        linkedVideoFile: (inputs) => media.linkedVideoFile(node, inputs),
      });
      const chosen = backgroundVideo.choose({
        own,
        file,
        meta: () => videoMetaEntry(media.uiValue(node, opened.keys.meta)),
        fps: playbackView.fps,
      });
      backgroundVideo.load(chosen.src, { loop: false, muted: false, volume: 1 });
      videoSource = { ready: !!chosen.src, frameCount: chosen.frameCount, duration: chosen.duration };
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
        place: () => (opened.place ? backgroundPlace(opened.place) : null),
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
    // The background at the playhead: a Scene's bg_color where its background does not show and all over without one,
    // else the VIDEO or its still once one has a picture, else the image.
    const background = () => {
      const choice = drawChoice();
      const shows = backgroundShowsAt(choice, playbackView.frame, { length: backgroundVideoMedia(videoSource, true) });
      const shown = backgroundVideo?.displaySource();
      const picture = shown && isDecodedImageReady(shown)
        ? { media: shown, revision: mediaRevisionToken(shown), source: backgroundVideo.source }
        : imagePicture();
      return backgroundAt(choice, { shows, picture });
    };

    // The window opens at the node's view; Reset View goes to the origin (stage.js, docs/space-and-view.md "Preview のウィンドウ").
    const world = { ground: isScene ? previewGround(upstreamList()) : previewGround(null), camera: null };
    mountHost = document.createElement("div");
    document.body.appendChild(mountHost);

    // Space plays and pauses, as in the editor (shortcuts.js `play`), where the stage has the keys.
    onKeyDown = (event) => {
      const root = mountHost.querySelector("[data-preview-window]");
      if (!root || !stageOwnsKey(event, root) || editorKeyAction(event) !== "play") return;
      event.preventDefault();
      event.stopPropagation();
      if (playbackView.video) controller.play();
    };
    const controller = {
      onStage: ({ canvas, overlay = null, root }) => {
        releaseKeyGuard = guardEditorKeys(root);
        const opening = previewOpening({ scene: sceneRecord?.view, image: imageRuntime?.view }, { ...world, boxes: [], content: null });
        const follow = createPreviewMotion({ pose: opening.pose });
        // The overlay draws the orbit center's mark (docs/space-and-view.md "オービットの中心の印").
        // With nothing linked to `source` there is nothing to zoom into: no Sky-only notice (docs/space-and-view.md "Sky
        // だけのときのホイール").
        stage = createStage({ canvas, overlay, root, opening, world, background, content, ui, follow, skyOnlyNotice: inputLinked(node, SOURCE_INPUTS), onEscape: () => close() });
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
    vueApp = createApp(StudioPreviewWindow, { nodeTitle: String(node.title || "Panorama Preview"), ui, playback: playbackView, controller });
    vueApp.mount(mountHost);
    if (videoElement) mountHost.appendChild(videoElement);
    document.addEventListener("keydown", onKeyDown, true);
    // The node hands its playhead over and stops while the window is open: a Scene's node viewer (it does not draw
    // meanwhile), or an IMAGE / VIDEO source's VIDEO on the node (docs/studio-ui.md "Preview のウィンドウ").
    if (isScene) {
      handOver = { frame: Math.floor(Number(sceneRecord?.frame) || 0), playing: !!sceneRecord?.playing };
      if (sceneRecord) {
        sceneRecord.playing = false;
        peekSceneViewer(node)?.surface?.rest?.();
      }
      sceneViewerTold = true;
      sceneViewerWindowOpened(node, { close });
    } else {
      imageRuntimeTold = true;
      nodeVideoHandOver = imageRuntime?.windowOpened?.() ?? null;
      if (nodeVideoHandOver) handOver = { frame: frameShownAt(nodeVideoHandOver.time, playbackView.fps), playing: nodeVideoHandOver.playing };
    }
    if (handOver) {
      const frame = Math.max(0, Math.min(playbackView.frames - 1, handOver.frame));
      if (frame > 0) backgroundVideo?.playback.seek(frame);
      playbackView.frame = backgroundVideo?.playback.frame ?? frame;
      if (handOver.playing && playbackView.video) backgroundVideo?.playback.play();
    }
  } catch (error) {
    // The caller gets the error that stopped the opening.
    try {
      release(false);
    } catch (releaseError) {
      console.warn("[PanoramaPreview] letting go of a failed opening", releaseError);
    } finally {
      openNodes.delete(node);
    }
    throw error;
  }
  return { close, stage: () => stage, playback: playbackView };
}

