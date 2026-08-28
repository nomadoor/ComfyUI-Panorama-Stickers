function mediaFreshnessByChannel(node) {
  if (!node) return null;
  if (!node.__panoNodeOutputMediaFreshness || typeof node.__panoNodeOutputMediaFreshness !== "object") {
    node.__panoNodeOutputMediaFreshness = Object.create(null);
  }
  return node.__panoNodeOutputMediaFreshness;
}

export function isNodeOutputMediaCurrent(node, channel = "") {
  const key = String(channel || "").trim();
  if (!key) return node?.__panoNodeOutputMediaCurrent !== false;
  const freshness = mediaFreshnessByChannel(node);
  if (Object.prototype.hasOwnProperty.call(freshness, key)) return freshness[key] !== false;
  return node?.__panoNodeOutputMediaCurrent !== false;
}

export function markNodeOutputMediaStale(node, channel = "") {
  if (!node) return;
  const key = String(channel || "").trim();
  if (key) {
    mediaFreshnessByChannel(node)[key] = false;
    return;
  }
  node.__panoNodeOutputMediaCurrent = false;
}

export function markNodeOutputMediaCurrent(node, channel = "") {
  if (!node) return;
  const key = String(channel || "").trim();
  if (key) {
    mediaFreshnessByChannel(node)[key] = true;
    return;
  }
  node.__panoNodeOutputMediaCurrent = true;
  const freshness = mediaFreshnessByChannel(node);
  Object.keys(freshness).forEach((name) => { freshness[name] = true; });
}

export function isTrackedMediaInputConnectionChange(
  node,
  type,
  slotIndex,
  trackedNames = ["erp_image", "bg_erp"],
) {
  const normalizedType = String(type ?? "").trim().toLowerCase();
  const isInput = type === 1 || normalizedType === "input";
  if (!isInput) return false;
  const input = Array.isArray(node?.inputs) ? node.inputs[Number(slotIndex)] : null;
  return trackedNames.includes(String(input?.name || ""));
}

export function resolvePreviewVideoSource(output, videoKeys = [], sourceFromCandidate = null) {
  const resolveSource = typeof sourceFromCandidate === "function"
    ? sourceFromCandidate
    : (candidate) => String(candidate?.src || candidate?.url || candidate || "").trim();
  for (const key of videoKeys) {
    const groups = [output?.ui?.[key], output?.[key]];
    for (const group of groups) {
      if (!Array.isArray(group)) continue;
      for (const candidate of group) {
        const src = resolveSource(candidate);
        if (!src) continue;
        if (/\.mp4(\?|$)/i.test(src) || String(candidate?.format || "").toLowerCase() === "video/mp4") {
          return src;
        }
      }
    }
  }
  return "";
}

export function createLoopingPreviewVideo({
  documentRef = typeof document !== "undefined" ? document : null,
  src = "",
  onFrame = null,
} = {}) {
  const video = documentRef?.createElement?.("video") || null;
  if (!video || !src) return null;
  const publishFrame = typeof onFrame === "function" ? onFrame : () => {};
  let destroyed = false;
  let frameCallbackId = 0;
  const supportsVideoFrameCallback = typeof video.requestVideoFrameCallback === "function";

  const queueFramePump = () => {
    if (destroyed || !supportsVideoFrameCallback || frameCallbackId || video.paused || video.ended) return;
    frameCallbackId = video.requestVideoFrameCallback(() => {
      frameCallbackId = 0;
      if (destroyed) return;
      publishFrame();
      queueFramePump();
    });
  };
  const onReady = () => {
    if (destroyed) return;
    publishFrame();
    try {
      Promise.resolve(video.play()).then(queueFramePump).catch(() => {});
    } catch {
      // Autoplay can be blocked despite the video being muted.
    }
  };
  const onTick = () => publishFrame();
  const onPlay = () => {
    publishFrame();
    queueFramePump();
  };
  const onPause = () => publishFrame();

  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.crossOrigin = "anonymous";
  video.addEventListener("loadedmetadata", onReady, { once: true });
  video.addEventListener("canplay", onReady, { once: true });
  if (!supportsVideoFrameCallback) video.addEventListener("timeupdate", onTick);
  video.addEventListener("play", onPlay);
  video.addEventListener("pause", onPause);
  video.src = src;
  video.load();

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    if (frameCallbackId && typeof video.cancelVideoFrameCallback === "function") {
      video.cancelVideoFrameCallback(frameCallbackId);
      frameCallbackId = 0;
    }
    video.removeEventListener("loadedmetadata", onReady);
    video.removeEventListener("canplay", onReady);
    video.removeEventListener("timeupdate", onTick);
    video.removeEventListener("play", onPlay);
    video.removeEventListener("pause", onPause);
    video.pause();
    video.removeAttribute?.("src");
    video.load?.();
  };

  return { video, destroy };
}
