export function shouldTogglePreviewPlaybackFromKey(event, root) {
  if (!event || event.target !== root) return false;
  return event.key === " " || event.key === "Spacebar";
}

// The Preview node's canvas in device pixels: its CSS size x devicePixelRatio, no larger than `screen`
// ({ width, height } in CSS pixels, the window) shows at that ratio, scaled down evenly. A graph zoomed in
// far shows only a part of the node, so no pixel that is seen is lost. maxSide limits a side only when
// given (the shared three.js view keeps its own canvas within what the GPU draws to).
export function measurePreviewCanvasSize(rect, devicePixelRatio = 1, maxSide = Infinity, screen = null) {
  const candidateScale = Number(devicePixelRatio);
  const scale = Number.isFinite(candidateScale) && candidateScale > 0 ? candidateScale : 1;
  const cssWidth = Number(rect?.width);
  const cssHeight = Number(rect?.height);
  const physicalWidth = Math.max(0, Number.isFinite(cssWidth) ? cssWidth : 0) * scale;
  const physicalHeight = Math.max(0, Number.isFinite(cssHeight) ? cssHeight : 0) * scale;
  const candidateMaxSide = Number(maxSide);
  const limit = candidateMaxSide > 0 ? candidateMaxSide : Infinity;
  const largestSide = Math.max(physicalWidth, physicalHeight);
  let fitScale = largestSide > 0 ? Math.min(1, limit / largestSide) : 1;
  if (screen && physicalWidth > 0 && physicalHeight > 0) {
    fitScale = Math.min(fitScale, (screen.width * scale) / physicalWidth, (screen.height * scale) / physicalHeight);
  }
  return {
    width: Math.max(1, Math.round(physicalWidth * fitScale)),
    height: Math.max(1, Math.round(physicalHeight * fitScale)),
  };
}

export function createPreviewFullscreenController({
  root,
  documentRef = typeof document !== "undefined" ? document : null,
  onChange = null,
  onFallback = null,
} = {}) {
  const publishChange = typeof onChange === "function" ? onChange : () => {};
  const openFallback = typeof onFallback === "function" ? onFallback : () => {};
  let destroyed = false;
  let lastPublished = null;

  const isActive = () => !!root && documentRef?.fullscreenElement === root;
  const publish = () => {
    const active = isActive();
    if (active === lastPublished) return active;
    lastPublished = active;
    publishChange(active);
    return active;
  };
  const onFullscreenChange = () => publish();
  documentRef?.addEventListener?.("fullscreenchange", onFullscreenChange);
  publish();

  const toggle = async () => {
    if (destroyed || !root || !documentRef) return false;
    if (isActive()) {
      try {
        await documentRef.exitFullscreen?.();
      } catch {
        // A browser-owned fullscreen transition may already be in progress.
      }
      if (destroyed) return false;
      publish();
      return isActive();
    }
    if (documentRef.fullscreenEnabled && typeof root.requestFullscreen === "function") {
      try {
        await root.requestFullscreen();
        if (destroyed) return false;
        if (isActive()) {
          publish();
          return true;
        }
      } catch {
        // Preserve the existing read-only Preview as the supported fallback.
      }
    }
    if (destroyed) return false;
    openFallback();
    publish();
    return false;
  };

  const destroy = () => {
    if (destroyed) return;
    destroyed = true;
    documentRef?.removeEventListener?.("fullscreenchange", onFullscreenChange);
    if (isActive()) {
      try {
        const pending = documentRef.exitFullscreen?.();
        pending?.catch?.(() => {});
      } catch {
        // The element will leave fullscreen when it is detached.
      }
    }
    lastPublished = false;
    publishChange(false);
  };

  return { toggle, isActive, destroy };
}

// The new Preview window opens on the node (docs/studio-ui.md "Preview のウィンドウ"): the node's VIDEO (or null) stops
// and hands over where it is and whether it played: { time (seconds), playing }, or null without a VIDEO.
export function pauseNodeVideoForWindow(video) {
  if (!video) return null;
  const handOver = { time: Math.max(0, Number(video.currentTime) || 0), playing: !video.paused && !video.ended };
  video.pause();
  return handOver;
}

// The window closed: the node's VIDEO goes on from the window's last time and playing state. It plays only when the
// node is on screen (`shown`), as a VIDEO out of sight does not play.
export function resumeNodeVideoFromWindow(video, { time = null, playing = false } = {}, shown = true) {
  if (!video) return;
  const at = Number(time);
  if (Number.isFinite(at)) {
    const duration = Number(video.duration);
    video.currentTime = Number.isFinite(duration) && duration > 0 ? Math.min(Math.max(0, at), duration) : Math.max(0, at);
  }
  if (playing && shown) void video.play()?.catch?.(() => {});
  else video.pause();
}
