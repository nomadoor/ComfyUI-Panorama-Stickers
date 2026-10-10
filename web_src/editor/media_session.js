// The media the editor shows: the background (ERP image, VIDEO and its still), the port Sticker's VIDEO and
// frames, the Sticker images, the node's ui values for them, and the legacy VIDEO transport with its
// filmstrip. It makes the VIDEO playback and the port's follower, and lets them go (disposeMediaSession).
import { createPanoCanvas, createPanoVideo, releasePanoCanvas } from "../pano_diagnostics.js";
import { normalizeCoverageValue, sourceAsset } from "../pano_editor_state.js";
import { runExternalStickerSync } from "../pano_external_sticker_sync.js";
import { createDepthColors } from "../pano_depth_color.js";
import { createFile3dEditorFiles } from "../pano_file_3d.js";
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
import { createFrameSequence, portMediaMeta, portMediaSource, portMediaTime } from "../pano_port_media.js";
import { isPanoramaPreviewNodeName } from "../pano_preview_identity.js";
import { isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import { is3dFileSource } from "../pano_scene_state.js";
import { sceneFilesOf } from "../pano_space.js";
import { upstreamBackgroundOf } from "../pano_upstream.js";
import { createVideoFollower, createVideoPlayback } from "../pano_video_playback.js";
import {
  EXTERNAL_STICKER_PREVIEW_KEY,
  PORT_FRAMES_KEY,
  PORT_VIDEO_KEY,
  PORT_VIDEO_META_KEY,
} from "./constants.js";
import { getCachedVideoThumbnails, setCachedVideoThumbnails } from "./video_thumbnail_cache.js";

export function createMediaSession(deps) {
  const {
    api, comfyMedia, editor, editorView, floatingRightEl, imageCache, loadPreferredExactLinkedImage,
    mediaAssetSource, mediaSource, mediaUiImage, node, portStillCanvas, portVideoEl, readOnly, runtime,
    scheduler, stageWrap, state, stateV2, stillCanvas, studio, timelinePlayhead, type, uiState, videoEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let backgroundVideoPlace, isExternalSticker, requestDraw, setTimelineFrame, skyStickers, syncTimeline, timelineSpanFrames,
    upstreamStickers;

  // The editor files of the 3D file Sources (pano_file_3d.js), asked for once each while the editor is open
  // (Panorama Studio only).
  const file3dFiles = stateV2
    ? createFile3dEditorFiles({ fetchApi: (path, options) => api.fetchApi(path, options), onUpdate: () => requestDraw() })
    : null;

  const videoState = {
    thumbnailJobId: 0,
    thumbnailSrc: "",
    // Sources whose filmstrip could not be built; a refresh does not build it again.
    thumbnailFailedSrcs: new Set(),
    // Sources that failed to load (a temp MP4 the server deleted) are not tried again in this editor.
    failedSrcs: new Set(),
    videoFailed: false,
    // The legacy transport's slider paused playback and plays again when it is let go.
    resumeAfterScrub: false,
    // The fps of the editor's own background VIDEO result, 0 for a file without one.
    metaFps: 0,
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
  const detectVideoHasAudio = (video) => {
    if (!(video instanceof HTMLVideoElement)) return false;
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
    return !!uiState.videoTransport.hasAudio;
  };
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
  // The background VIDEO's playback: Panorama Studio's Timeline, else the legacy transport, on
  // a Timeline of the VIDEO's own length. The legacy transport loops seamlessly through the VIDEO's
  // own loop, so its playback then has no end.
  const playback = createVideoPlayback({
    video: videoEl instanceof HTMLVideoElement ? videoEl : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (callback) => scheduler.requestFrame(callback),
      cancelFrame: (id) => scheduler.cancelFrame(id),
    },
    fps: playbackFps,
    span: () => {
      if (stateV2) return timelineSpanFrames();
      const frames = Math.round(Number(uiState.videoTransport.duration || 0) * playbackFps());
      return videoEl.loop || !(frames > 0) ? Infinity : frames;
    },
    loop: () => stateV2,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => backgroundVideoPlace(),
    onFrame: (frame) => {
      if (stateV2) setTimelineFrame(frame);
      else syncVideoTransportState();
      requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.PLAYHEAD });
    },
    onCapture: () => {
      if (captureStillFrameFromVideo()) runtime.backgroundDirty = true;
    },
    onChange: () => {
      syncVideoTransportState();
      timelinePlayhead.playing.value = playback.playing;
      syncTimeline();
      requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.PLAYHEAD });
    },
  });
  videoCleanupFns.push(() => playback.dispose());
  // Panorama Studio's port Sticker plays its MP4 along the playhead, muted (#83).
  const portVideo = stateV2 && portVideoEl instanceof HTMLVideoElement
    ? createVideoFollower({
      video: portVideoEl,
      onCapture: () => {
        const width = Number(portVideoEl.videoWidth || 0);
        const height = Number(portVideoEl.videoHeight || 0);
        if (width < 1 || height < 1) return;
        portStillCanvas.width = width;
        portStillCanvas.height = height;
        portStillCanvas.getContext("2d")?.drawImage(portVideoEl, 0, 0);
        portStillCanvas.__panoFrameIdx += 1;
        requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA });
      },
      onChange: () => requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA }),
    })
    : null;
  if (portVideo) videoCleanupFns.push(() => portVideo.dispose());
  // The colors of the depth grids (DA3_GEOMETRY mono), a proxy MP4 per input following the playhead.
  const depthColors = stateV2
    ? createDepthColors({
      createVideo: () => createPanoVideo(document, "editor.depth-video"),
      createCanvas: () => createPanoCanvas({ label: "editor.depth-still" }),
      releaseCanvas: releasePanoCanvas,
      onChange: () => requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA }),
    })
    : null;
  if (depthColors) videoCleanupFns.push(() => depthColors.dispose());
  // An RGBA IMAGE batch on the port shows its PNGs instead, which keep its alpha.
  const portFrames = stateV2
    ? createFrameSequence({
      createImage: (src, onLoad) => {
        const image = new Image();
        image.onload = onLoad;
        image.onerror = onLoad;
        image.src = src;
        return image;
      },
      onLoad: () => requestDraw({ cause: "frame_view", localOnly: true, reason: DRAW_REASON.MEDIA }),
    })
    : null;
  if (videoEl instanceof HTMLVideoElement) {
    // The VIDEO's length and audio are known from its metadata on.
    const onVideoReady = () => {
      refreshModalVideoSource();
      requestDraw({ cause: "frame_view", localOnly: true });
    };
    const onVolumeChange = () => {
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
    };
    const onVideoError = () => {
      const src = videoEl.dataset.panoSrc;
      if (!src) return;
      videoState.failedSrcs.add(src);
      refreshModalVideoSource();
      requestDraw();
    };
    for (const [type, listener] of [
      ["loadedmetadata", onVideoReady],
      ["loadeddata", onVideoReady],
      ["canplay", onVideoReady],
      ["volumechange", onVolumeChange],
      ["error", onVideoError],
    ]) {
      videoEl.addEventListener(type, listener);
      videoCleanupFns.push(() => videoEl.removeEventListener(type, listener));
    }
  }
  function getNodeUiList(key) {
    return comfyMedia.uiList(node, key);
  }
  function getNodeUiValue(key) {
    return comfyMedia.uiValue(node, key);
  }
  function getModalVideoUiKeys() {
    const nodeName = String(node?.comfyClass || node?.type || node?.title || "");
    if (isPanoramaPreviewNodeName(nodeName)) {
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    }
    const upstream = upstreamBackground();
    if (upstream) return { videoKey: upstream.videoKey, metaKey: upstream.metaKey };
    if (type === "stickers" || type === "cutout") {
      return { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" };
    }
    return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function getVideoMetaEntry() {
    const { metaKey } = getModalVideoUiKeys();
    const meta = getNodeUiValue(metaKey);
    if (Array.isArray(meta) && meta.length > 0 && meta[0] && typeof meta[0] === "object") return meta[0];
    if (meta && typeof meta === "object") return meta;
    return null;
  }
  function getMediaRevisionToken(media) {
    if (!media) return "none";
    // A VIDEO's VideoTexture uploads each new frame by itself (pano_three_view.js).
    if (media instanceof HTMLVideoElement) {
      return [
        String(media.currentSrc || media.src || ""),
        Number(media.videoWidth || 0),
        Number(media.videoHeight || 0),
      ].join("|");
    }
    if (media instanceof HTMLCanvasElement) {
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
  function formatVideoTime(seconds) {
    const total = Math.max(0, Math.floor(Number(seconds || 0)));
    const mins = Math.floor(total / 60);
    const secs = total % 60;
    return `${mins}:${String(secs).padStart(2, "0")}`;
  }
  // Without a known fps the legacy transport counts milliseconds, so its slider seeks to the time itself.
  function playbackFps() {
    return stateV2 ? state.timeline.fps : videoState.metaFps || 1000;
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
  // Panorama Studio plays the background VIDEO from the Timeline, so the video's own transport is hidden.
  function getVideoTransportVisible() {
    return !!(videoEl instanceof HTMLVideoElement
      && !stateV2
      && videoEl.getAttribute("src")
      && editor.primaryTool !== "paint"
      && editor.primaryTool !== "mask");
  }
  // Mutes or unmutes the background VIDEO: the video transport's button, or the Timeline's for Panorama Studio.
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
  function captureStillFrameFromVideo() {
    if (!(videoEl instanceof HTMLVideoElement)) return false;
    if (Number(videoEl.videoWidth || 0) < 1 || Number(videoEl.videoHeight || 0) < 1) return false;
    const width = Number(videoEl.videoWidth || 0);
    const height = Number(videoEl.videoHeight || 0);
    if (stillCanvas.width !== width || stillCanvas.height !== height) {
      stillCanvas.width = width;
      stillCanvas.height = height;
    }
    const ctx2d = stillCanvas.getContext("2d");
    if (!ctx2d) return false;
    ctx2d.clearRect(0, 0, width, height);
    ctx2d.drawImage(videoEl, 0, 0, width, height);
    stillCanvas.__panoFrameIdx = Number(stillCanvas.__panoFrameIdx || 0) + 1;
    return true;
  }
  // ADR 0019: the VIDEO is on screen while it plays; otherwise its last confirmed frame, the still.
  function getDisplayBackgroundSource() {
    if (
      !playback.showsVideo
      && Number(stillCanvas.width || 0) > 0
      && Number(stillCanvas.height || 0) > 0
      && Number(stillCanvas.__panoFrameIdx || 0) > 0
    ) {
      return stillCanvas;
    }
    if (
      videoEl instanceof HTMLVideoElement
      && Number(videoEl.videoWidth || 0) > 0
      && Number(videoEl.videoHeight || 0) > 0
      && Number(videoEl.readyState || 0) >= 2
    ) {
      return videoEl;
    }
    return null;
  }
  // The still of one source must not show for the next.
  function dropVideoStill() {
    stillCanvas.__panoFrameIdx = 0;
    runtime.backgroundDirty = true;
  }
  function refreshModalVideoSource() {
    if (!(videoEl instanceof HTMLVideoElement)) return null;
    const { videoKey } = getModalVideoUiKeys();
    const ownEntry = upstreamBackground() || isNodeOutputMediaCurrent(node, "background") ? getNodeUiList(videoKey)[0] || null : null;
    const ownSrc = mediaSource(ownEntry);
    // The node's own result wins. Without one, a video file the background input loads directly plays,
    // with its length from the file and the Timeline's fps.
    const candidates = [ownSrc, comfyMedia.linkedVideoFile(node, backgroundInputNames())].filter(Boolean);
    const nextSrc = candidates.find((src) => !videoState.failedSrcs.has(src)) || "";
    videoState.videoFailed = !nextSrc && candidates.length > 0;
    const meta = nextSrc && nextSrc === ownSrc ? getVideoMetaEntry() : null;
    videoState.metaFps = Number(meta?.fps) > 0 ? Number(meta.fps) : 0;
    const fps = Math.max(1, Number(meta?.fps || (stateV2 ? state.timeline.fps : 24)));
    const fileDuration = videoEl.dataset.panoSrc === nextSrc && Number.isFinite(videoEl.duration) ? videoEl.duration : 0;
    const duration = Number(meta?.duration || (meta?.frames > 0 ? meta.frames / fps : fileDuration));
    const frameCount = Math.max(0, Number(meta?.frames || Math.round(duration * fps)));
    const hasAudio = !!meta?.has_audio || detectVideoHasAudio(videoEl);
    // Panorama Studio shows the playhead's frame of a new source; the legacy transport starts it at 0.
    if (nextSrc && videoEl.dataset.panoSrc !== nextSrc) {
      videoEl.pause();
      dropVideoStill();
      videoEl.dataset.panoSrc = nextSrc;
      videoEl.loop = !stateV2 && !!uiState.videoTransport.loop;
      videoEl.muted = !!uiState.videoTransport.muted;
      videoEl.volume = Math.max(0, Math.min(1, Number(uiState.videoTransport.volume ?? 1)));
      videoEl.src = nextSrc;
      videoEl.load();
      playback.setSource(true);
      if (!stateV2) playback.seek(0);
    } else if (!nextSrc && videoEl.getAttribute("src")) {
      videoEl.pause();
      videoEl.removeAttribute("src");
      delete videoEl.dataset.panoSrc;
      videoEl.load();
      dropVideoStill();
      resetVideoThumbnails();
      playback.setSource(false);
    }
    // The legacy transport loops through the VIDEO's own loop; Panorama Studio's playback sets it.
    if (!stateV2) videoEl.loop = !!uiState.videoTransport.loop;
    if (nextSrc && !stateV2 && videoState.thumbnailSrc !== nextSrc && !videoState.thumbnailFailedSrcs.has(nextSrc)) {
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

  // The port Sticker's MP4 ({ src, meta }) or the PNGs of an RGBA IMAGE batch ({ frames, meta }) in
  // the node's current result, or null.
  function getPortMedia() {
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    const meta = getNodeUiList(PORT_VIDEO_META_KEY)[0];
    if (!meta || typeof meta !== "object") return null;
    const frames = getNodeUiList(PORT_FRAMES_KEY).map(mediaSource).filter(Boolean);
    if (frames.length) return { frames, meta };
    const src = mediaSource(getNodeUiList(PORT_VIDEO_KEY)[0] || null);
    return src ? { src, meta } : null;
  }

  // The port Sticker's media as the Timeline's length counts it (portMediaMeta) in the node's current result,
  // or null.
  function getPortMediaMeta() {
    return isNodeOutputMediaCurrent(node, "external-sticker") ? portMediaMeta(getNodeUiList) : null;
  }

  // Has the port Sticker's MP4 follow the playhead, and returns the port Sticker's picture there
  // ({ media, revision, source }): the playing VIDEO, the still of its frame, or the PNG of its image,
  // else the first frame until there is one; null where the media shows nothing (ADR 0024).
  function followPortSticker() {
    const port = state.stickers.find(isExternalSticker);
    const media = port ? getPortMedia() : null;
    const time = media ? portMediaTime(port.clip, editor.frame, state.timeline.fps, media.meta) : null;
    portVideo.follow({ src: media?.src || "", time, playing: playback.advancing, fps: state.timeline.fps });
    const first = port ? getStickerImage(port) : null;
    const picture = media?.frames
      ? portFrames.picture(media.frames, time, media.meta, first)
      : portVideo.picture(portStillCanvas, first);
    return picture ? { media: picture, revision: getMediaRevisionToken(picture), source: portMediaSource(media, first) } : null;
  }

  // The `scene` input's editor files in the node's current result (docs/studio-node.md): the kind
  // the editor loads and a URL per item, null for an empty item. null without a current result.
  function sceneFiles() {
    if (!stateV2 || !isNodeOutputMediaCurrent(node, "scene")) return null;
    return sceneFilesOf(getNodeUiList("pano_scene_files"), getNodeUiList("pano_scene_meta"), mediaSource);
  }

  // The `sticker` input's 3D media (#63) in the node's current result, in the shape of sceneFiles().
  function stickerFiles() {
    if (!stateV2 || !isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    return sceneFilesOf(getNodeUiList("pano_sticker_files"), getNodeUiList("pano_sticker_meta"), mediaSource);
  }

  // The colors of the depth grid of input `name` (a request's `video`, pano_space.js sceneRequest) at the
  // playhead: { media, revision, source }, or null until its video has a picture.
  function depthColor(name, video) {
    return depthColors?.picture(name, video, playback.advancing) ?? null;
  }

  // Lets the depth grid videos of the inputs not in `names` go.
  function retainDepthColors(names) {
    depthColors?.retain(names);
  }

  // The editor file of a 3D file Sticker (docs/threejs-spark-integration.md): { kind, unlit, url, generation } once
  // the route answered, else null. The first call for its Source asks the route.
  function file3dEditorFile(sticker) {
    if (!file3dFiles || !is3dFileSource(sticker?.source)) return null;
    const entry = file3dFiles.get(sticker.source);
    const url = entry.state === "ready" ? mediaSource(entry.file) : null;
    return url ? { kind: entry.kind, unlit: entry.unlit, url, generation: entry.generation } : null;
  }

  // The route's answer for a 3D file's Source, once it came ({ state "ready" or "failed", error, ... }).
  function requestFile3d(source) {
    return file3dFiles.request(source);
  }

  // Asks the route again for a Source whose editor file is gone (404).
  function refreshFile3d(source) {
    file3dFiles?.refresh(source);
  }

  // The node's text for a 3D file of a Sticker in the editor (its own or the upstream Scene's) that could not be
  // read, or "". A Sticker that is there keeps its place; only the text tells.
  function file3dNotice() {
    if (!file3dFiles) return "";
    const failures = file3dFiles.failures();
    if (!failures.length) return "";
    const sources = [...state.stickers, ...upstreamStickers()].map((sticker) => sticker.source).filter(is3dFileSource);
    const same = (a, b) => a.filename === b.filename && (a.subfolder ?? "") === b.subfolder && (a.storage ?? "input") === b.storage;
    return failures.find((failure) => sources.some((source) => same(source, failure.source)))?.error ?? "";
  }

  function getStickerImage(stickerOrAssetId) {
    // A 3D file has no image: its item draws instead (file3dEditorFile).
    if (stateV2 && is3dFileSource(stickerOrAssetId?.source)) return null;
    if (stickerOrAssetId && typeof stickerOrAssetId === "object"
      && (isExternalSticker(stickerOrAssetId) || stickerOrAssetId.external === true)) {
      return getExternalStickerPreviewImage(() => {
        runExternalStickerSync(node, "image-loaded");
      });
    }
    const assetId = stateV2
      ? stickerImageKey(stickerOrAssetId)
      : (stickerOrAssetId && typeof stickerOrAssetId === "object")
        ? String(stickerOrAssetId.asset_id || stickerOrAssetId.assetId || "")
        : String(stickerOrAssetId || "");
    if (!assetId) return null;
    const cached = imageCache.get(assetId);
    if (cached) return cached;
    const asset = stateV2 ? sourceAsset(stickerOrAssetId.source) : state.assets?.[assetId];
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

  // The image cache key of a Sticker of state v2. An image being uploaded or embedded as a data URL
  // is cached under the Sticker's id.
  function stickerImageKey(item) {
    const { source } = item;
    return source.filename ? `file:${source.storage}:${source.subfolder}:${source.filename}` : `sticker:${item.id}`;
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
    // The upstream Scene's background takes the place of the node's own (Panorama Studio, #90).
    const upstream = upstreamBackground();
    const uiImg = upstream || isNodeOutputMediaCurrent(node, "background")
      ? mediaUiImage(node, upstream?.imageKey ?? "pano_input_images", imageCache, () => requestDraw())
      : null;
    if (uiImg && !isImageLoadFailed(uiImg)) return uiImg;
    // A background video still loading.
    if (videoEl instanceof HTMLVideoElement && videoEl.dataset.panoSrc) return videoEl;
    // The node's own bg_media is not used, so it does not stand in.
    if (upstream) return uiImg;
    const preferred = backgroundInputNames();
    const img = loadPreferredExactLinkedImage(node, preferred, () => requestDraw(), `background:${preferred.join("|")}`);
    return img || uiImg || null;
  }

  // The background of the Scene on Panorama Studio's `scene` input in the node's current result (#90), used in
  // place of its own bg_media: { imageKey, videoKey, metaKey, coverage } (pano_upstream.js), or null. It comes
  // through `scene` alone, so a relinked bg_media (which the node does not use) leaves it current.
  function upstreamBackground() {
    if (!studio || !isNodeOutputMediaCurrent(node, "scene")) return null;
    return upstreamBackgroundOf(getNodeUiList);
  }

  // The span of the background ERP: the upstream Scene's when its background shows, else the node's own.
  function backgroundCoverage() {
    return upstreamBackground()?.coverage ?? normalizeCoverageValue(state.coverage);
  }

  function backgroundInputNames() {
    // With the upstream Scene's background, the node's own bg_media is not shown.
    if (upstreamBackground()) return [];
    if (type === "cutout") return ["erp_image", "bg_erp"];
    const inputNames = Array.isArray(node?.inputs)
      ? node.inputs.map((i) => String(i?.name || ""))
      : [];
    const hasEpr = inputNames.includes("erp_image");
    const hasBg = inputNames.includes("bg_erp");
    if (readOnly && (hasEpr || hasBg)) return hasEpr ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"];
    return type === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }

  function isDecodedImageReady(img) {
    if (!img) return false;
    if (img instanceof HTMLImageElement) {
      return !!img.complete
        && Number(img.naturalWidth || img.width || 0) > 0
        && Number(img.naturalHeight || img.height || 0) > 0;
    }
    if (img instanceof HTMLVideoElement) {
      return Number(img.videoWidth || 0) > 0
        && Number(img.videoHeight || 0) > 0
        && Number(img.readyState || 0) >= 2;
    }
    return Number(img.width || img.naturalWidth || 0) > 0
      && Number(img.height || img.naturalHeight || 0) > 0;
  }

  function getStageImageStatus() {
    if (editorView.failed) return { status: IMAGE_FAILED, detail: "renderer" };
    if (!editorView.ready) return { status: IMAGE_LOADING, detail: "boot" };
    const bgImg = getConnectedErpImage();
    const backgroundState = videoState.videoFailed ? IMAGE_FAILED : getImageLoadState(bgImg, isDecodedImageReady);
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

  // Lets go of what the session made when the editor closes: the background VIDEO stops, and the playback,
  // the port's follower, the listeners and the filmstrip job are released.
  function disposeMediaSession() {
    file3dFiles?.close();
    if (videoEl instanceof HTMLVideoElement) videoEl.pause();
    videoCleanupFns.forEach((fn) => {
      try { fn(); } catch { }
    });
  }

  return {
    connect(api) {
      ({
        backgroundVideoPlace, isExternalSticker, requestDraw, setTimelineFrame, skyStickers, syncTimeline, timelineSpanFrames,
        upstreamStickers,
      } = api);
    },
    videoState, queueVideoTransportLayout, playback, portVideo, getNodeUiValue,
    getMediaRevisionToken, playbackFps, syncVideoTransportState, toggleVideoMuted, syncVideoTransportVisibility,
    refreshModalVideoSource, getStickerUiImage, getExternalStickerPreviewImage, getPortMediaMeta, followPortSticker,
    getStickerImage, stickerImageKey, getConnectedErpImage, backgroundCoverage, upstreamBackground, isDecodedImageReady, getStageImageStatus, sceneFiles,
    stickerFiles, depthColor, retainDepthColors, file3dEditorFile, requestFile3d, refreshFile3d, file3dNotice, disposeMediaSession,
  };
}
