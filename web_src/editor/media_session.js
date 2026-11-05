// The media the editor shows: the background (ERP image, VIDEO and its still, its bg_color), the Sticker images, the
// node's ui values for them, the legacy VIDEO transport with its filmstrip and its play button, and what a run's result
// brings to the open editor. It makes the VIDEO playback, and lets it go (disposeMediaSession).
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { runExternalStickerSync } from "../pano_external_sticker_sync.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import {
  IMAGE_FAILED,
  IMAGE_LOADING,
  getImageLoadState,
  isImageLoadFailed,
  markImageFailed,
  markImageLoading,
  markImageReady,
  stageImageStatus,
} from "../pano_image_state.js";
import { STUDIO_BACKGROUND_INPUT_NAMES, isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import {
  backgroundVideoKeys,
  createBackgroundVideo,
  detectVideoHasAudio as videoHasAudio,
  isDecodedImageReady,
  mediaRevisionToken,
  videoMetaEntry,
} from "../pano_media_session.js";
import { EXTERNAL_STICKER_PREVIEW_KEY } from "./constants.js";
import { getCachedVideoThumbnails, setCachedVideoThumbnails } from "./video_thumbnail_cache.js";

export function createMediaSession(deps) {
  const {
    comfyMedia, editor, editorView, floatingRightEl, imageCache, loadPreferredExactLinkedImage,
    mediaAssetSource, mediaSource, mediaUiImage, node, readOnly, runtime,
    scheduler, stageWrap, state, stillCanvas, type, uiState, videoEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cancelLiveEdits, isExternalSticker, requestDraw, skyStickers;

  const videoState = {
    thumbnailJobId: 0,
    thumbnailSrc: "",
    // Sources whose filmstrip could not be built; a refresh does not build it again.
    thumbnailFailedSrcs: new Set(),
    // The legacy transport's slider paused playback and plays again when it is let go.
    resumeAfterScrub: false,
  };
  const VIDEO_THUMBNAIL_COUNT = 9;
  const videoCleanupFns = [];
  let videoTransportLayoutRaf = 0;
  const syncVideoTransportLayout = () => {
    const stageRect = stageWrap?.getBoundingClientRect?.();
    const rightRect = floatingRightEl?.getBoundingClientRect?.();
    const stageWidth = Math.max(0, Number(stageRect?.width || 0));
    const rightWidth = rightRect ? Math.max(0, Number(rightRect.width || 0)) : 0;
    const modalSideInset = 14;
    const transportGap = 12;
    const rightReserve = rightWidth > 0 ? (rightWidth + modalSideInset + transportGap) : 72;
    const availableWidth = Math.max(280, Math.floor(stageWidth - (rightReserve * 2)));
    const shellMaxWidthPx = editor.fullscreen
      ? Math.min(1200, availableWidth)
      : availableWidth;
    uiState.videoTransport.shellMaxWidthPx = shellMaxWidthPx;
  };
  const queueVideoTransportLayout = () => {
    if (videoTransportLayoutRaf) return;
    videoTransportLayoutRaf = scheduler.requestFrame(() => {
      videoTransportLayoutRaf = 0;
      syncVideoTransportLayout();
    });
  };
  const detectVideoHasAudio = (video) => videoHasAudio(video, uiState.videoTransport.hasAudio);
  const transportLayoutObserver = typeof ResizeObserver !== "undefined"
    ? new ResizeObserver(() => queueVideoTransportLayout())
    : null;
  transportLayoutObserver?.observe(stageWrap);
  if (floatingRightEl) transportLayoutObserver?.observe(floatingRightEl);
  videoCleanupFns.push(() => {
    if (videoTransportLayoutRaf) {
      scheduler.cancelFrame(videoTransportLayoutRaf);
      videoTransportLayoutRaf = 0;
    }
    transportLayoutObserver?.disconnect?.();
  });
  queueVideoTransportLayout();
  const resetVideoThumbnails = () => {
    videoState.thumbnailJobId += 1;
    videoState.thumbnailSrc = "";
    uiState.videoTransport.thumbnails = [];
    uiState.videoTransport.thumbnailCount = VIDEO_THUMBNAIL_COUNT;
  };
  const buildVideoThumbnails = async (src, duration, fps) => {
    const safeSrc = String(src || "").trim();
    if (!safeSrc) {
      resetVideoThumbnails();
      return;
    }
    const cached = getCachedVideoThumbnails(safeSrc);
    if (cached) {
      videoState.thumbnailSrc = safeSrc;
      uiState.videoTransport.thumbnails = cached.thumbnails;
      uiState.videoTransport.thumbnailCount = cached.thumbnailCount;
      return;
    }
    const jobId = ++videoState.thumbnailJobId;
    videoState.thumbnailSrc = safeSrc;
    uiState.videoTransport.thumbnails = [];
    uiState.videoTransport.thumbnailCount = VIDEO_THUMBNAIL_COUNT;
    const thumbVideo = createPanoVideo(document, "editor.thumbnails");
    thumbVideo.preload = "auto";
    thumbVideo.muted = true;
    thumbVideo.playsInline = true;
    thumbVideo.crossOrigin = "anonymous";
    const canvas = createPanoCanvas({ label: "editor.thumbnail" });
    // The element and the canvas are let go however the job ends: built, failed, or replaced by another.
    try {
      const loaded = await new Promise((resolve) => {
        let settled = false;
        const finish = (ok) => {
          if (settled) return;
          settled = true;
          resolve(ok);
        };
        thumbVideo.addEventListener("loadedmetadata", () => finish(true), { once: true });
        thumbVideo.addEventListener("canplay", () => finish(true), { once: true });
        thumbVideo.addEventListener("error", () => finish(false), { once: true });
        thumbVideo.src = safeSrc;
        thumbVideo.load();
      });
      if (videoState.thumbnailJobId !== jobId) return;
      const videoWidth = Number(thumbVideo.videoWidth || 0);
      const videoHeight = Number(thumbVideo.videoHeight || 0);
      if (!loaded || videoWidth < 1 || videoHeight < 1) {
        videoState.thumbnailFailedSrcs.add(safeSrc);
        return;
      }
      const sampleDuration = Math.max(0, Number(thumbVideo.duration || duration || 0));
      const thumbHeight = 46;
      const thumbWidth = Math.max(72, Math.round((videoWidth / videoHeight) * thumbHeight));
      canvas.width = thumbWidth;
      canvas.height = thumbHeight;
      const ctx2d = canvas.getContext("2d");
      if (!ctx2d) return;
      const thumbnails = [];
      const seekTo = (time) => new Promise((resolve) => {
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          resolve();
        };
        thumbVideo.addEventListener("seeked", finish, { once: true });
        thumbVideo.addEventListener("error", finish, { once: true });
        try {
          thumbVideo.currentTime = time;
        } catch {
          finish();
        }
      });
      for (let index = 0; index < VIDEO_THUMBNAIL_COUNT; index += 1) {
        if (videoState.thumbnailJobId !== jobId) return;
        const ratio = VIDEO_THUMBNAIL_COUNT <= 1 ? 0 : index / (VIDEO_THUMBNAIL_COUNT - 1);
        const target = sampleDuration > 0
          ? Math.max(0, Math.min(sampleDuration - Math.max(0.001, 0.5 / Math.max(1, Number(fps || 24))), sampleDuration * ratio))
          : 0;
        await seekTo(target);
        if (videoState.thumbnailJobId !== jobId) return;
        ctx2d.clearRect(0, 0, thumbWidth, thumbHeight);
        ctx2d.drawImage(thumbVideo, 0, 0, thumbWidth, thumbHeight);
        thumbnails.push({
          id: `thumb-${index}`,
          src: canvas.toDataURL("image/jpeg", 0.72),
          time: target,
          label: formatVideoTime(target),
        });
      }
      if (videoState.thumbnailJobId !== jobId) return;
      uiState.videoTransport.thumbnails = thumbnails;
      uiState.videoTransport.thumbnailCount = thumbnails.length || VIDEO_THUMBNAIL_COUNT;
      setCachedVideoThumbnails(safeSrc, {
        thumbnails,
        thumbnailCount: thumbnails.length || VIDEO_THUMBNAIL_COUNT,
        duration: sampleDuration,
        fps,
      });
    } finally {
      thumbVideo.removeAttribute("src");
      thumbVideo.load();
      releasePanoCanvas(canvas);
    }
  };
  videoCleanupFns.push(() => {
    resetVideoThumbnails();
  });
  // The background VIDEO (pano_media_session.js) and its playback: the legacy transport, on a Timeline of the VIDEO's
  // own length. The legacy transport loops seamlessly through the VIDEO's own loop, so its playback then has no end.
  const background = createBackgroundVideo({
    video: videoEl,
    still: stillCanvas,
    clock: {
      now: () => performance.now(),
      requestFrame: (callback) => scheduler.requestFrame(callback),
      cancelFrame: (id) => scheduler.cancelFrame(id),
    },
    fps: playbackFps,
    span: () => {
      const frames = Math.round(Number(uiState.videoTransport.duration || 0) * playbackFps());
      return videoEl.loop || !(frames > 0) ? Infinity : frames;
    },
    loop: () => false,
    place: () => null,
    onFrame: () => {
      syncVideoTransportState();
      requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.PLAYHEAD });
    },
    onStill: () => {
      runtime.backgroundDirty = true;
    },
    onStillDropped: () => {
      runtime.backgroundDirty = true;
    },
    onChange: () => {
      syncVideoTransportState();
      requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.PLAYHEAD });
    },
    // The VIDEO's length and audio are known from its metadata on.
    onReady: () => {
      refreshModalVideoSource();
      requestDraw({ cause: "frame_view", localOnly: true });
    },
    onError: () => {
      refreshModalVideoSource();
      requestDraw();
    },
  });
  const { playback } = background;
  videoCleanupFns.push(() => background.dispose());
  if (videoEl instanceof HTMLVideoElement) {
    const onVolumeChange = () => {
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
    };
    videoEl.addEventListener("volumechange", onVolumeChange);
    videoCleanupFns.push(() => videoEl.removeEventListener("volumechange", onVolumeChange));
  }
  function getNodeUiList(key) {
    return comfyMedia.uiList(node, key);
  }
  function getNodeUiValue(key) {
    return comfyMedia.uiValue(node, key);
  }
  function getModalVideoUiKeys() {
    const nodeName = String(node?.comfyClass || node?.type || "");
    return backgroundVideoKeys({ nodeName, upstream: null, type });
  }
  function getVideoMetaEntry() {
    const { metaKey } = getModalVideoUiKeys();
    return videoMetaEntry(getNodeUiValue(metaKey));
  }
  const getMediaRevisionToken = mediaRevisionToken;
  function formatVideoTime(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds || 0)));
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }
  // Without a known fps the legacy transport counts milliseconds, so its slider seeks to the time itself.
  function playbackFps() {
    return background.metaFps || 1000;
  }
  // The transport shows the playback's frame and state; `extra` brings what the source refresh learned.
  function syncVideoTransportState(extra = {}) {
    const duration = Number(extra.duration ?? uiState.videoTransport.duration ?? 0);
    const fps = Math.max(1, Number(extra.fps ?? uiState.videoTransport.fps ?? 24));
    const current = playback.frame / playbackFps();
    const ready = Object.prototype.hasOwnProperty.call(extra, "ready")
      ? !!extra.ready
      : !!uiState.videoTransport.ready;
    const playing = playback.playing;
    const visible = Object.prototype.hasOwnProperty.call(extra, "visible")
      ? !!extra.visible
      : !!uiState.videoTransport.visible;
    const muted = Object.prototype.hasOwnProperty.call(extra, "muted")
      ? !!extra.muted
      : !!(videoEl instanceof HTMLVideoElement ? videoEl.muted : uiState.videoTransport.muted);
    const volume = Number(
      Object.prototype.hasOwnProperty.call(extra, "volume")
        ? extra.volume
        : (videoEl instanceof HTMLVideoElement ? videoEl.volume : uiState.videoTransport.volume)
    );
    const hasAudio = Object.prototype.hasOwnProperty.call(extra, "hasAudio")
      ? !!extra.hasAudio
      : detectVideoHasAudio(videoEl);
    const loop = Object.prototype.hasOwnProperty.call(extra, "loop")
      ? !!extra.loop
      : !!uiState.videoTransport.loop;
    Object.assign(uiState.videoTransport, {
      ready,
      playing,
      visible,
      loop,
      currentTime: Number.isFinite(current) ? current : 0,
      duration: Number.isFinite(duration) ? duration : 0,
      progressPct: duration > 1e-6 ? Math.max(0, Math.min(100, (current / duration) * 100)) : 0,
      currentTimeLabel: formatVideoTime(current),
      durationLabel: formatVideoTime(duration),
      frameCount: Math.max(0, Number(extra.frameCount ?? uiState.videoTransport.frameCount ?? 0)),
      fps,
      hasAudio,
      muted,
      volume: Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1)) * 100),
      thumbnails: Array.isArray(extra.thumbnails) ? extra.thumbnails : uiState.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(extra.thumbnailCount ?? uiState.videoTransport.thumbnailCount ?? VIDEO_THUMBNAIL_COUNT)),
    });
  }
  function getVideoTransportVisible() {
    return !!(videoEl instanceof HTMLVideoElement
      && videoEl.getAttribute("src")
      && editor.primaryTool !== "paint"
      && editor.primaryTool !== "mask");
  }
  // Mutes or unmutes the background VIDEO: the video transport's button.
  function toggleVideoMuted() {
    if (!(videoEl instanceof HTMLVideoElement)) return;
    if (!uiState.videoTransport.hasAudio) return;
    const nextMuted = !videoEl.muted;
    videoEl.muted = nextMuted;
    if (!nextMuted && Number(videoEl.volume || 0) <= 0) {
      videoEl.volume = Math.max(0.01, Number(uiState.videoTransport.volume || 1));
    }
    syncVideoTransportState({
      hasAudio: uiState.videoTransport.hasAudio,
      muted: videoEl.muted,
      volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
    });
  }
  function syncVideoTransportVisibility() {
    syncVideoTransportState({
      visible: getVideoTransportVisible(),
    });
  }
  // ADR 0019: the VIDEO is on screen while it plays; otherwise its last confirmed frame, the still.
  function getDisplayBackgroundSource() {
    return background.displaySource();
  }
  function refreshModalVideoSource() {
    if (!(videoEl instanceof HTMLVideoElement)) return null;
    const { videoKey } = getModalVideoUiKeys();
    const ownEntry = isNodeOutputMediaCurrent(node, "background") ? getNodeUiList(videoKey)[0] || null : null;
    // The node's own result wins. Without one, a video file the background input loads directly plays,
    // with its length from the file and the Timeline's fps (pano_media_session.js choose).
    const { src: nextSrc, fps, duration, frameCount, hasAudio } = background.choose({
      own: mediaSource(ownEntry),
      file: comfyMedia.linkedVideoFile(node, backgroundInputNames()),
      meta: getVideoMetaEntry,
      fps: 24,
      audio: uiState.videoTransport.hasAudio,
    });
    // The legacy transport starts a new source at 0.
    const loaded = background.load(nextSrc, {
      loop: !!uiState.videoTransport.loop,
      muted: !!uiState.videoTransport.muted,
      volume: uiState.videoTransport.volume ?? 1,
    });
    if (loaded === "loaded") playback.seek(0);
    // The legacy transport loops through the VIDEO's own loop.
    videoEl.loop = !!uiState.videoTransport.loop;
    if (nextSrc && videoState.thumbnailSrc !== nextSrc && !videoState.thumbnailFailedSrcs.has(nextSrc)) {
      void buildVideoThumbnails(nextSrc, duration, fps);
    }
    if (!nextSrc) {
      resetVideoThumbnails();
    }
    syncVideoTransportState({
      ready: !!nextSrc,
      visible: !!nextSrc && getVideoTransportVisible(),
      duration,
      frameCount,
      fps,
      hasAudio,
      loop: !!videoEl.loop,
      muted: !!videoEl.muted,
      volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      thumbnailCount: uiState.videoTransport.thumbnailCount,
    });
    return nextSrc || null;
  }
  function getStickerUiImage(key, onLoad = null) {
    return mediaUiImage(node, key, imageCache, onLoad || (() => requestDraw()));
  }

  // The media of the sticker input shows from the node's result only while that result is current;
  // after the input changes, the Sticker shows as a frame until the node runs again.
  function getExternalStickerPreviewImage(onLoad = null) {
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    return getStickerUiImage(EXTERNAL_STICKER_PREVIEW_KEY, onLoad);
  }

  function getStickerImage(stickerOrAssetId) {
    if (stickerOrAssetId && typeof stickerOrAssetId === "object"
      && (isExternalSticker(stickerOrAssetId) || stickerOrAssetId.external === true)) {
      return getExternalStickerPreviewImage(() => {
        runExternalStickerSync(node, "image-loaded");
      });
    }
    const assetId = (stickerOrAssetId && typeof stickerOrAssetId === "object")
      ? String(stickerOrAssetId.asset_id || stickerOrAssetId.assetId || "")
      : String(stickerOrAssetId || "");
    if (!assetId) return null;
    const cached = imageCache.get(assetId);
    if (cached) return cached;
    const asset = state.assets?.[assetId];
    const src = mediaAssetSource(asset);
    if (!src) return null;
    const img = new Image();
    markImageLoading(img, src);
    img.onload = () => {
      markImageReady(img, src);
      requestDraw();
    };
    img.onerror = () => {
      markImageFailed(img, src);
      requestDraw();
    };
    img.src = src;
    imageCache.set(assetId, img);
    return img;
  }

  function getConnectedErpImage() {
    if (type === "cutout") {
      const displaySource = getDisplayBackgroundSource();
      if (displaySource) return displaySource;
      const linked = loadPreferredExactLinkedImage(
        node,
        ["erp_image", "bg_erp"],
        () => requestDraw(),
        "background:cutout:erp_image|bg_erp",
      );
      if (linked && !isImageLoadFailed(linked)) return linked;
      const uiImg = mediaUiImage(node, "pano_input_images", imageCache, () => requestDraw());
      return uiImg || linked || null;
    }
    const displaySource = getDisplayBackgroundSource();
    if (displaySource) return displaySource;
    const uiImg = isNodeOutputMediaCurrent(node, "background")
      ? mediaUiImage(node, "pano_input_images", imageCache, () => requestDraw())
      : null;
    if (uiImg && !isImageLoadFailed(uiImg)) return uiImg;
    // A background video still loading.
    if (videoEl instanceof HTMLVideoElement && videoEl.dataset.panoSrc) return videoEl;
    const preferred = backgroundInputNames();
    const img = loadPreferredExactLinkedImage(node, preferred, () => requestDraw(), `background:${preferred.join("|")}`);
    return img || uiImg || null;
  }

  // The span of the background ERP.
  function backgroundCoverage() {
    return normalizeCoverageValue(state.coverage);
  }

  function backgroundInputNames() {
    if (type === "cutout") return ["erp_image", "bg_erp"];
    const inputNames = Array.isArray(node?.inputs)
      ? node.inputs.map((i) => String(i?.name || ""))
      : [];
    const hasEpr = inputNames.includes("erp_image");
    const hasBg = inputNames.includes("bg_erp");
    if (readOnly && (hasEpr || hasBg)) return hasEpr ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"];
    return type === "stickers" ? [...STUDIO_BACKGROUND_INPUT_NAMES, "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }

  function getStageImageStatus() {
    if (editorView.failed) return { status: IMAGE_FAILED, detail: "renderer" };
    if (!editorView.ready) return { status: IMAGE_LOADING, detail: "boot" };
    const bgImg = getConnectedErpImage();
    const backgroundState = background.failed ? IMAGE_FAILED : getImageLoadState(bgImg, isDecodedImageReady);
    const stickerStates = [];
    for (const item of skyStickers()) {
      if (item?.visible === false) continue;
      const img = getStickerImage(item);
      stickerStates.push(getImageLoadState(img, isDecodedImageReady));
    }
    return stageImageStatus({
      presented: runtime.hasPresentedFrame,
      background: backgroundState,
      stickers: stickerStates,
    });
  }

  // The bg_color the views draw where the background shows nothing.
  function backgroundColor() {
    return state.bg_color;
  }

  // The legacy transport's play button. With a background VIDEO the video plays with its audio and its presented
  // frames move the transport.
  function togglePlayback() {
    // The background VIDEO of the node's current result, loaded here when the node ran after the editor opened.
    refreshModalVideoSource();
    playback.toggle();
  }

  // A run's result reached the open editor (its `executed`): an edit a pointer has under way is cancelled
  // first, then the background VIDEO follows the run.
  function applyRunResult() {
    cancelLiveEdits();
    refreshModalVideoSource();
  }

  // Lets go of what the session made when the editor closes: the background VIDEO stops, the playback, the
  // listeners and the filmstrip job are released, and then the VIDEO lets go of its source, so the browser stops
  // loading and decoding it.
  function disposeMediaSession() {
    if (videoEl instanceof HTMLVideoElement) videoEl.pause();
    videoCleanupFns.forEach((fn) => {
      try { fn(); } catch { }
    });
    if (videoEl instanceof HTMLVideoElement) {
      videoEl.removeAttribute("src");
      videoEl.load();
    }
  }

  return {
    connect(api) {
      ({ cancelLiveEdits, isExternalSticker, requestDraw, skyStickers } = api);
    },
    videoState, queueVideoTransportLayout, playback, getNodeUiValue,
    getMediaRevisionToken, playbackFps, syncVideoTransportState, toggleVideoMuted, syncVideoTransportVisibility,
    refreshModalVideoSource, getStickerUiImage, getExternalStickerPreviewImage,
    getStickerImage, getConnectedErpImage, backgroundCoverage, backgroundColor, isDecodedImageReady, getStageImageStatus,
    togglePlayback, applyRunResult, disposeMediaSession,
  };
}
