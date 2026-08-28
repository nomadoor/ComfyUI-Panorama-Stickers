const IMAGE_SUFFIX_RE = /\.(png|jpe?g|webp|gif|bmp)$/i;

export function isStickerImageFile(file) {
  if (!file) return false;
  if (String(file.type || "").toLowerCase().startsWith("image/")) return true;
  return IMAGE_SUFFIX_RE.test(String(file.name || ""));
}

export function dragHasStickerImageFile(dataTransfer) {
  if (!dataTransfer) return false;
  if (dataTransfer.items?.length) {
    return Array.from(dataTransfer.items).some((item) => {
      const type = String(item?.type || "").trim().toLowerCase();
      return item?.kind === "file"
        && (!type || type.startsWith("image/") || type === "application/octet-stream");
    });
  }
  return Array.from(dataTransfer.files || []).some((file) => isStickerImageFile(file));
}

export function bindStickerDropTarget(target, options = {}) {
  if (!target?.addEventListener || !target?.removeEventListener) return () => {};
  const onActive = typeof options.onActive === "function" ? options.onActive : () => {};
  const onDrop = typeof options.onDrop === "function" ? options.onDrop : () => {};
  const stopAcceptedEvent = (event) => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    event?.stopImmediatePropagation?.();
  };
  const activate = (event) => {
    if (!dragHasStickerImageFile(event?.dataTransfer)) return;
    stopAcceptedEvent(event);
    try { event.dataTransfer.dropEffect = "copy"; } catch { }
    onActive(true);
  };
  const leave = (event) => {
    if (event?.relatedTarget && target.contains?.(event.relatedTarget)) return;
    onActive(false);
  };
  const drop = (event) => {
    const file = Array.from(event?.dataTransfer?.files || []).find((entry) => isStickerImageFile(entry));
    if (!file) {
      onActive(false);
      return;
    }
    stopAcceptedEvent(event);
    onActive(false);
    onDrop(file);
  };
  target.addEventListener("dragenter", activate, true);
  target.addEventListener("dragover", activate, true);
  target.addEventListener("dragleave", leave, true);
  target.addEventListener("drop", drop, true);
  return () => {
    target.removeEventListener("dragenter", activate, true);
    target.removeEventListener("dragover", activate, true);
    target.removeEventListener("dragleave", leave, true);
    target.removeEventListener("drop", drop, true);
    onActive(false);
  };
}

export async function decodeStickerImageFile(file, options = {}) {
  if (!isStickerImageFile(file)) throw new TypeError("A supported image file is required.");
  const ImageCtor = options.ImageCtor || globalThis.Image;
  const createObjectURL = options.createObjectURL || globalThis.URL?.createObjectURL?.bind(globalThis.URL);
  const revokeObjectURL = options.revokeObjectURL || globalThis.URL?.revokeObjectURL?.bind(globalThis.URL);
  if (typeof ImageCtor !== "function" || typeof createObjectURL !== "function") {
    throw new Error("Image decoding is unavailable.");
  }
  const url = createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const candidate = new ImageCtor();
      candidate.onload = () => resolve(candidate);
      candidate.onerror = () => reject(new Error("image load failed"));
      candidate.src = url;
    });
    return {
      image,
      width: Math.max(1, Number(image.naturalWidth || image.width || 1)),
      height: Math.max(1, Number(image.naturalHeight || image.height || 1)),
    };
  } finally {
    revokeObjectURL?.(url);
  }
}

export async function uploadStickerAssetFile(file, { fetchApi } = {}) {
  if (!isStickerImageFile(file)) throw new TypeError("A supported image file is required.");
  if (typeof fetchApi !== "function") throw new TypeError("fetchApi is required.");
  const body = new FormData();
  body.append("image", file);
  body.append("type", "input");
  body.append("subfolder", "panorama_stickers");
  const response = await fetchApi("/upload/image", { method: "POST", body });
  if (!response || response.status !== 200) {
    throw new Error(`upload failed (${response?.status || "no-response"})`);
  }
  const data = await response.json();
  const filename = String(data?.name || "").trim();
  if (!filename) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename,
    subfolder: String(data?.subfolder || "panorama_stickers"),
    storage: String(data?.type || "input"),
    name: String(file?.name || "sticker.png"),
  };
}
