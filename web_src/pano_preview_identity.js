// The legacy Preview (`PanoramaPreview`), by its node id only.
export function isPanoramaPreviewNodeName(nameRaw) {
  return String(nameRaw || "").trim() === "PanoramaPreview";
}


// The Preview of IMAGE, VIDEO and PANO_SCENE (`PanoramaPreviewNode`, docs/preview-node.md), apart from the legacy
// `PanoramaPreview` above.
export function isPanoramaPreviewSceneNodeName(nameRaw) {
  return String(nameRaw || "").trim() === "PanoramaPreviewNode";
}
