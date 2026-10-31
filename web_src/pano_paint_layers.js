// The paint of a state as its Sky layers, in the order the node draws them (core/render.py `_sky_layers`,
// docs/scene-state-v2.md "Sky の重なり順"). The places that show paint draw the pixels through a paint display
// (pano_paint_display.js createPaintDisplay, the one caller); this decides which layers there are and where they go.

// The id of a paint object's Sky layer, which the new editor also selects it by (pano_paint_objects.js paintObjectRow):
// `kind` "group" (a stroke group, `id` its actionGroupId) gives `paint_group:<id>`, "raster" (a raster object) `raster:<id>`.
export const PAINT_GROUP_ROW = "paint_group:";
export const PAINT_RASTER_ROW = "raster:";
export function paintObjectRowOf(kind, id) {
  return `${kind === "raster" ? PAINT_RASTER_ROW : PAINT_GROUP_ROW}${id}`;
}

// The paint of `state` ({ painting, painting_visible, stickers }) as { id, media, revision, changed?, opacity, zIndex } from
// back to front, for skyLayers (pano_editor_view.js) to put among the sky Stickers by zIndex, Stickers first on ties:
// the stroke groups and the paint raster objects at their z_index (groups first on ties, each in list order), then
// the strokes of no group of the painting, and the mask over everything. None while the painting is hidden.
// The sources give a layer's { media, revision, changed? }, or null when it has nothing to draw (`changed`, when a
// source knows it, gives where the media changed since a revision before: pano_paint_damage.js); group(actionGroupId) a
// stroke group's canvas (null when the engine has no strokes of the group), raster(item) a raster object's ERP
// canvas, and mask() the mask's display (null without a mask, or where the mask is not shown).
export function skyPaintLayers(state, { group, raster, mask = () => null }) {
  if (state.painting_visible === false) return [];
  const { groups, paint, raster_objects: rasters } = state.painting;
  const listed = new Set(groups.map(groupId));
  const ordered = [
    ...groups.map((item) => ({ id: paintObjectRowOf("group", groupId(item)), zIndex: zIndexOf(item), shown: () => group(groupId(item)) })),
    ...rasters.filter((item) => item.layerKind === "paint")
      .map((item) => ({ id: paintObjectRowOf("raster", item.id), zIndex: zIndexOf(item), shown: () => raster(item) })),
  ].sort((a, b) => a.zIndex - b.zIndex);
  const layers = [];
  const add = (id, zIndex, shown) => {
    if (!shown) return;
    const layer = { id, media: shown.media, revision: shown.revision, opacity: 1, zIndex };
    if (shown.changed) layer.changed = shown.changed;
    layers.push(layer);
  };
  for (const entry of ordered) add(entry.id, entry.zIndex, entry.shown());
  const top = Math.max(-1, ...layers.map((layer) => layer.zIndex), ...state.stickers.map(zIndexOf)) + 1;
  const loose = new Set(paint.strokes.map((stroke) => stroke.actionGroupId).filter((id) => !listed.has(id)));
  for (const id of loose) add(paintObjectRowOf("group", id), top, group(id));
  add("mask_display", top, mask());
  return layers;
}

// The mask display of a paint engine (pano_paint_engine.js getMaskDisplay) as a skyPaintLayers source.
export function engineMask(engine) {
  return engine?.getMaskDisplay() ?? null;
}

function groupId(item) {
  return String(item.actionGroupId || item.id || "");
}

// As the node's display list reads it (core/display_list.py `_safe_int`): a raster object's z_index may be fractional.
function zIndexOf(item) {
  return Math.trunc(Number(item.z_index) || 0);
}
