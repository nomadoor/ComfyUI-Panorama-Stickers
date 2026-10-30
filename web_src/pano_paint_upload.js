// The paint layer uploaded for the node (`painting_layer`, docs/editor-architecture.md; the node reads it with
// comfy_image_resolver.py resolve_painting_layer_payload): the pixels an editor draws of its paint, as PNGs in ComfyUI's
// input. The old editor (editor/paint_layers.js syncPaintingLayerAsync) and the new one (studio/paint_upload.js) send
// it with these functions, so the two write the same files and the same `painting_layer`.

// The strokes and raster objects of each layer of `painting`.
export function paintingCompositeCount(painting) {
  const paintCount = Array.isArray(painting?.paint?.strokes) ? painting.paint.strokes.length : 0;
  const maskCount = Array.isArray(painting?.mask?.strokes) ? painting.mask.strokes.length : 0;
  const rasterObjects = Array.isArray(painting?.raster_objects) ? painting.raster_objects : [];
  let paintRasterCount = 0;
  let maskRasterCount = 0;
  rasterObjects.forEach((item) => {
    if (String(item?.layerKind || "paint") === "mask") maskRasterCount += 1;
    else paintRasterCount += 1;
  });
  return {
    paintCount,
    maskCount,
    paintRasterCount,
    maskRasterCount,
    totalPaintCount: paintCount + paintRasterCount,
    totalMaskCount: maskCount + maskRasterCount,
  };
}

// Uploads `canvas` as the PNG `filename` through ComfyUI's API (`api.fetchApi`) and returns its comfy_image reference.
export async function uploadPaintCanvas(api, canvas, filename) {
  const blob = await new Promise((r) => canvas.toBlob(r, "image/png"));
  const body = new FormData();
  body.append("image", blob, filename);
  // Cutout export resolves these layers on the backend during prompt execution,
  // so store them like other editor assets instead of relying on temp lifetime.
  body.append("type", "input");
  body.append("subfolder", "panorama_stickers");
  body.append("overwrite", "1");
  const resp = await api.fetchApi("/upload/image", { method: "POST", body });
  if (!resp || resp.status !== 200) throw new Error(`upload failed (${resp?.status})`);
  const data = await resp.json();
  const fn = String(data?.name || "").trim();
  if (!fn) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: fn,
    subfolder: String(data?.subfolder || "panorama_stickers"),
    storage: String(data?.type || "input"),
  };
}

// Uploads the paint layer of the node `nodeId` and returns its `painting_layer` ({ paint, mask, groups, revision }):
// with paint (counts.totalPaintCount), `paintCanvas` (the stroke groups composed in order) and each group of
// `groupIds` that groupCanvas(gid) gives a canvas for; with a mask (counts.totalMaskCount), `maskCanvas`.
export async function uploadPaintingLayer(api, { nodeId, counts, paintCanvas, maskCanvas, groupIds, groupCanvas, revision }) {
  let paintRef = null;
  let maskRef = null;
  const groupRefs = [];
  if (counts.totalPaintCount > 0) {
    paintRef = await uploadPaintCanvas(api, paintCanvas, `pano_paint_${nodeId}.png`);
    for (const actionGroupId of groupIds) {
      const gid = String(actionGroupId || "").trim();
      if (!gid) continue;
      const canvas = groupCanvas(gid);
      if (!canvas) continue;
      const safeGid = gid.replace(/[^a-zA-Z0-9_-]+/g, "_");
      const groupRef = await uploadPaintCanvas(api, canvas, `pano_group_${nodeId}_${safeGid}.png`);
      if (groupRef) {
        groupRefs.push({
          id: gid,
          actionGroupId: gid,
          image: groupRef,
        });
      }
    }
  }
  if (counts.totalMaskCount > 0) {
    maskRef = await uploadPaintCanvas(api, maskCanvas, `pano_mask_${nodeId}.png`);
  }
  return {
    paint: paintRef,
    mask: maskRef,
    groups: groupRefs,
    revision,
  };
}
