function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

export function resolveRasterPreviewSize(outputPreset, maxWidth = 1024) {
  const requestedWidth = Math.max(1, Math.round(finite(outputPreset, 2048)));
  const width = Math.min(requestedWidth, Math.max(1, Math.round(finite(maxWidth, 1024))));
  return { width, height: Math.max(1, Math.round(width * 0.5)) };
}

export function buildRasterObjectErpPlacement(item, erpWidth, erpHeight) {
  const width = finite(erpWidth);
  const height = finite(erpHeight);
  const bbox = item?.bbox;
  if (!bbox || width < 1 || height < 1) return null;
  const u0 = finite(bbox.u0);
  const v0 = finite(bbox.v0);
  const u1 = finite(bbox.u1);
  const v1 = finite(bbox.v1);
  if (u1 <= u0 || v1 <= v0) return null;
  const transform = item?.transform || {};
  return {
    centerX: ((u0 + u1) * 0.5 + finite(transform.du)) * width,
    centerY: ((v0 + v1) * 0.5 + finite(transform.dv)) * height,
    width: (u1 - u0) * width,
    height: (v1 - v0) * height,
    rotationRad: finite(transform.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, finite(transform.scale, 1)),
    wrapOffsets: [-width, 0, width],
  };
}

function rasterRevision(item, width, height) {
  const dataUrl = String(item?.rasterDataUrl || "");
  const bbox = item?.bbox || {};
  const transform = item?.transform || {};
  return [
    String(item?.id || ""),
    width,
    height,
    dataUrl.length,
    dataUrl.slice(-24),
    bbox.u0,
    bbox.v0,
    bbox.u1,
    bbox.v1,
    transform.du,
    transform.dv,
    transform.rot_deg,
    transform.scale,
  ].join(":");
}

export function createRasterObjectSurfaceCache() {
  const images = new Map();
  const surfaces = new Map();

  function trimImages() {
    if (images.size <= 16) return;
    for (const [key, entry] of images) {
      if (images.size <= 16) break;
      if (!entry.settled) continue;
      entry.image.onload = null;
      entry.image.onerror = null;
      images.delete(key);
    }
  }

  function getImage(dataUrl, onReady) {
    let entry = images.get(dataUrl);
    if (entry) {
      images.delete(dataUrl);
      images.set(dataUrl, entry);
      if (!entry.settled && typeof onReady === "function") entry.listeners.add(onReady);
      return entry.image;
    }
    const image = new Image();
    entry = { image, listeners: new Set(typeof onReady === "function" ? [onReady] : []), settled: false };
    images.set(dataUrl, entry);
    const settle = () => {
      entry.settled = true;
      const listeners = [...entry.listeners];
      entry.listeners.clear();
      listeners.forEach((listener) => listener());
      trimImages();
    };
    image.onload = settle;
    image.onerror = settle;
    image.src = dataUrl;
    trimImages();
    return image;
  }

  function get(item, erpWidth, erpHeight, onReady = null) {
    if (!item || item.visible === false || String(item.layerKind || "paint") !== "paint") return null;
    const dataUrl = String(item.rasterDataUrl || "").trim();
    const placement = buildRasterObjectErpPlacement(item, erpWidth, erpHeight);
    if (!dataUrl.startsWith("data:") || !placement) return null;
    const revision = rasterRevision(item, erpWidth, erpHeight);
    const objectKey = String(item?.id || "").trim() || revision;
    const cached = surfaces.get(objectKey);
    if (cached?.revision === revision) return { source: cached.source, revision };
    const image = getImage(dataUrl, onReady);
    const imageWidth = Number(image.naturalWidth || image.width || 0);
    const imageHeight = Number(image.naturalHeight || image.height || 0);
    if (!image.complete || imageWidth < 1 || imageHeight < 1) return null;
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(erpWidth));
    canvas.height = Math.max(1, Math.round(erpHeight));
    const context = canvas.getContext("2d");
    if (!context) return null;
    placement.wrapOffsets.forEach((wrapOffset) => {
      context.save();
      context.translate(placement.centerX + wrapOffset, placement.centerY);
      context.rotate(placement.rotationRad);
      context.scale(placement.scale, placement.scale);
      context.drawImage(
        image,
        -placement.width * 0.5,
        -placement.height * 0.5,
        placement.width,
        placement.height,
      );
      context.restore();
    });
    surfaces.set(objectKey, { revision, source: canvas });
    return { source: canvas, revision };
  }

  return {
    get,
    retain(objectIds = []) {
      const retained = new Set(Array.from(objectIds, (id) => String(id || "").trim()).filter(Boolean));
      for (const key of surfaces.keys()) {
        if (!retained.has(key)) surfaces.delete(key);
      }
    },
    dispose() {
      images.forEach((entry) => {
        entry.listeners.clear();
        entry.image.onload = null;
        entry.image.onerror = null;
      });
      images.clear();
      surfaces.clear();
    },
  };
}
