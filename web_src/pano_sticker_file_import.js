import { fileSource } from "./pano_editor_state.js";
import { FILE_3D_EXTENSIONS, is3dFileName } from "./pano_scene_state.js";

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

// --- 3D files (docs/editor-interaction.md "3D ファイルを置く流れ"). Only Panorama Studio's editor
// (editor/sticker_import.js) takes them; the legacy nodes' image checks above stay images only.

// The largest 3D file that uploads: Load3D's 100 MB (MAX_UPLOAD_SIZE_MB of ComfyUI_frontend's Load3dUtils.ts).
export const FILE_3D_MAX_BYTES = 100 * 1024 * 1024;

// What Add to World lets the file picker choose: images and the 3D files.
export const WORLD_FILE_ACCEPT = ["image/*", ...FILE_3D_EXTENSIONS].join(",");

// Whether a file is a 3D file, by its name's extension (is3dFileSource's table).
export function isSticker3dFile(file) {
  return !!file && is3dFileName(file.name);
}

// Whether a drag over Panorama Studio's editor may hold a file it takes: an image, or a 3D file. While
// dragging the names are not readable, so an item of no type, application/octet-stream or a model/ type
// counts too; the drop decides by the file.
export function dragHasStudioFile(dataTransfer) {
  if (!dataTransfer) return false;
  if (dataTransfer.items?.length) {
    return Array.from(dataTransfer.items).some((item) => {
      const type = String(item?.type || "").trim().toLowerCase();
      return item?.kind === "file"
        && (!type || type.startsWith("image/") || type.startsWith("model/") || type === "application/octet-stream");
    });
  }
  return Array.from(dataTransfer.files || []).some((file) => isStickerImageFile(file) || isSticker3dFile(file));
}

// Why a 3D file is refused before it uploads, or null when it is not too large.
export function file3dTooLargeMessage(file) {
  const size = Number(file?.size || 0);
  if (size <= FILE_3D_MAX_BYTES) return null;
  return `${file.name} is too large (${(size / 1024 / 1024).toFixed(1)} MB). The largest 3D file is ${FILE_3D_MAX_BYTES / 1024 / 1024} MB.`;
}

// Uploads a 3D file as Load3D does, to ComfyUI's input/3d (`image`, `subfolder` 3d, `type` input, no
// `overwrite`: the server keeps a file of the same name and contents, else saves it under a new name), and
// returns its file Source. Throws an Error that says why it did not upload.
export async function uploadWorld3dFile(file, { fetchApi } = {}) {
  if (!isSticker3dFile(file)) throw new TypeError("A 3D file is required.");
  if (typeof fetchApi !== "function") throw new TypeError("fetchApi is required.");
  const tooLarge = file3dTooLargeMessage(file);
  if (tooLarge) throw new Error(tooLarge);
  const body = new FormData();
  body.append("image", file);
  body.append("subfolder", "3d");
  body.append("type", "input");
  let response;
  try {
    response = await fetchApi("/upload/image", { method: "POST", body });
  } catch (error) {
    throw new Error(`Could not upload ${file.name} (${error?.message || error}).`);
  }
  if (!response || response.status !== 200) {
    const status = response ? `${response.status}${response.statusText ? ` ${response.statusText}` : ""}` : "no response";
    throw new Error(`Could not upload ${file.name} (${status}).`);
  }
  const data = await response.json();
  const filename = String(data?.name || "").trim();
  if (!filename) throw new Error(`Could not upload ${file.name} (the server returned no file name).`);
  return fileSource({ filename, subfolder: String(data?.subfolder ?? "3d"), storage: String(data?.type || "input") });
}
