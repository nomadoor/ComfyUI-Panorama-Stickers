export function isPanoramaPreviewNodeName(nameRaw) {
  const name = String(nameRaw || "").trim();
  if (!name) return false;

  if (name === "PanoramaPreview" || name === "Panorama Preview") return true;

  return /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(name);
}

