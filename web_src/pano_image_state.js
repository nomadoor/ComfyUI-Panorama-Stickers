export const IMAGE_LOADING = "loading";
export const IMAGE_READY = "ready";
export const IMAGE_FAILED = "failed";

export function markImageLoading(image, source = "") {
  if (!image) return image;
  image.__panoLoadState = IMAGE_LOADING;
  image.__panoLoadSource = String(source || image.currentSrc || image.src || "");
  return image;
}

export function markImageReady(image, source = "") {
  if (!image) return image;
  image.__panoLoadState = IMAGE_READY;
  image.__panoLoadSource = String(source || image.currentSrc || image.src || "");
  return image;
}

export function markImageFailed(image, source = "") {
  if (!image) return image;
  image.__panoLoadState = IMAGE_FAILED;
  image.__panoLoadSource = String(source || image.currentSrc || image.src || "");
  return image;
}

export function getImageLoadState(image, isDecodedReady) {
  // Stage aggregation treats an absent optional image as settled, not pending.
  if (!image) return IMAGE_READY;
  if (image.__panoLoadState === IMAGE_FAILED) return IMAGE_FAILED;
  if (typeof isDecodedReady === "function" && isDecodedReady(image)) return IMAGE_READY;
  return IMAGE_LOADING;
}

export function isImageLoadFailed(image) {
  return getImageLoadState(image) === IMAGE_FAILED;
}

export function stageImageStatus({ presented, background = IMAGE_READY, stickers = [] } = {}) {
  if (!presented) return { status: IMAGE_LOADING, detail: "boot" };
  const stickerStates = Array.isArray(stickers) ? stickers : [];
  const backgroundLoading = background === IMAGE_LOADING;
  const stickersLoading = stickerStates.includes(IMAGE_LOADING);
  if (backgroundLoading && stickersLoading) return { status: IMAGE_LOADING, detail: "mixed" };
  if (backgroundLoading) return { status: IMAGE_LOADING, detail: "background" };
  if (stickersLoading) return { status: IMAGE_LOADING, detail: "stickers" };

  const backgroundFailed = background === IMAGE_FAILED;
  const stickersFailed = stickerStates.includes(IMAGE_FAILED);
  if (backgroundFailed && stickersFailed) return { status: IMAGE_FAILED, detail: "mixed" };
  if (backgroundFailed) return { status: IMAGE_FAILED, detail: "background" };
  if (stickersFailed) return { status: IMAGE_FAILED, detail: "stickers" };
  return { status: IMAGE_READY, detail: "" };
}
