// The filmstrips of the VIDEO transport, kept across editor openings for the last few sources.
const _videoThumbnailCache = new Map();
const VIDEO_THUMBNAIL_CACHE_LIMIT = 12;

export function getCachedVideoThumbnails(src) {
  const key = String(src || "").trim();
  if (!key) return null;
  const cached = _videoThumbnailCache.get(key);
  if (!cached || !Array.isArray(cached.thumbnails) || !cached.thumbnails.length) return null;
  _videoThumbnailCache.delete(key);
  _videoThumbnailCache.set(key, cached);
  return cached;
}

export function setCachedVideoThumbnails(src, entry) {
  const key = String(src || "").trim();
  if (!key) return;
  const thumbnails = Array.isArray(entry?.thumbnails) ? entry.thumbnails : [];
  if (!thumbnails.length) return;
  _videoThumbnailCache.delete(key);
  _videoThumbnailCache.set(key, {
    thumbnails,
    thumbnailCount: Math.max(1, Number(entry?.thumbnailCount || thumbnails.length)),
    duration: Math.max(0, Number(entry?.duration || 0)),
    fps: Math.max(1, Number(entry?.fps || 24)),
  });
  while (_videoThumbnailCache.size > VIDEO_THUMBNAIL_CACHE_LIMIT) {
    const oldestKey = _videoThumbnailCache.keys().next().value;
    if (!oldestKey) break;
    _videoThumbnailCache.delete(oldestKey);
  }
}
