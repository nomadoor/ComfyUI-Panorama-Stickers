export function isPanoramaPreviewNodeName(nameRaw) {
  const name = String(nameRaw || "").trim();
  if (!name) return false;

  if (name === "PanoramaPreview" || name === "Panorama Preview") return true;

  return /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(name);
}


// The Preview of IMAGE, VIDEO and PANO_SCENE (`PanoramaPreviewNode`, docs/preview-node.md), apart from the legacy
// `PanoramaPreview` above.
export function isPanoramaPreviewSceneNodeName(nameRaw) {
  return String(nameRaw || "").trim() === "PanoramaPreviewNode";
}
