// The move of a multi-selection ("move_multi"): every selected sky Sticker, stroke group and raster
// object moves by the pointer's delta from where its center was on the screen. pointer_input.js starts it
// on the selection's move area; letting go is pointer_transform.js endTransform.
export function createPointerMultiMove(deps) {
  const { canvas, editor, type } = deps;
  // Bound by connect() to the other modules and showEditor.
  let applyRasterObjectOffset, applyStrokeGroupOffset, editUvAt, getCutoutSelectableItems, getList,
    getRasterObjectCenterUv, getStrokeGroupCenterUv, isRasterObjectItem, isStickerItem, isStrokeGroupItem,
    markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty, objectGeom,
    parseRasterObjectSelectionId, poseOf, rasterObjectSnapshot, requestDraw, shortestWrappedDelta,
    strokeGroupFrameSnapshot, strokeGroupSnapshot, updateCursor, writePoseAtScreenPoint;

  // The item's center on the screen as the move starts, or the press point when it is not shown.
  function screenCenterAt(item, p) {
    const geom = objectGeom(item);
    return geom?.visible ? { x: Number(geom.center?.x || 0), y: Number(geom.center?.y || 0) } : { x: p.x, y: p.y };
  }

  function startMultiMove(e, p, selectedItems, selGeom) {
    editor.interaction = {
      kind: "move_multi",
      items: selectedItems.map((item) => item),
      offset: { x: p.x - selGeom.center.x, y: p.y - selGeom.center.y },
      startCenter: { x: selGeom.center.x, y: selGeom.center.y },
      stickerSnapshots: selectedItems
        .filter((item) => isStickerItem(item))
        .map((item) => ({
          id: String(item.id || ""),
          yaw_deg: Number(poseOf(item).yaw_deg || 0),
          pitch_deg: Number(poseOf(item).pitch_deg || 0),
          center: screenCenterAt(item, p),
        })),
      strokeSnapshots: selectedItems
        .filter((item) => isStrokeGroupItem(item))
        .map((item) => ({
          id: String(item.actionGroupId || item.id || ""),
          layerKind: String(item.layerKind || "paint"),
          snapshot: strokeGroupSnapshot(item),
          frameSnapshot: strokeGroupFrameSnapshot(item),
          center: screenCenterAt(item, p),
          centerUv: getStrokeGroupCenterUv(item.actionGroupId, item.layerKind),
        })),
      rasterSnapshots: selectedItems
        .filter((item) => isRasterObjectItem(item))
        .map((item) => ({
          id: parseRasterObjectSelectionId(item.rasterObjectId || item.id || ""),
          snapshot: rasterObjectSnapshot(item),
          center: screenCenterAt(item, p),
          centerUv: getRasterObjectCenterUv(item),
        })),
    };
    updateCursor(p);
    canvas.setPointerCapture(e.pointerId);
  }

  function moveMulti(it, p) {
    const tx = p.x - Number(it.offset?.x || 0);
    const ty = p.y - Number(it.offset?.y || 0);
    let changed = false;
    let paintStrokeChanged = false;
    let rasterChanged = false;
    const dx = tx - Number(it.startCenter?.x || tx);
    const dy = ty - Number(it.startCenter?.y || ty);
    for (const snap of (Array.isArray(it.stickerSnapshots) ? it.stickerSnapshots : [])) {
      const sticker = (type === "cutout" ? getCutoutSelectableItems() : getList()).find((entry) => String(entry?.id || "") === String(snap.id || ""));
      if (!sticker || !isStickerItem(sticker)) continue;
      const targetScreen = {
        x: Number(snap.center?.x || 0) + dx,
        y: Number(snap.center?.y || 0) + dy,
      };
      if (!writePoseAtScreenPoint(sticker, targetScreen.x, targetScreen.y)) continue;
      changed = true;
    }
    for (const snap of (Array.isArray(it.strokeSnapshots) ? it.strokeSnapshots : [])) {
      const targetScreen = {
        x: Number(snap.center?.x || 0) + dx,
        y: Number(snap.center?.y || 0) + dy,
      };
      const currentUv = editUvAt(targetScreen);
      const startUvForGroup = snap.centerUv || null;
      if (currentUv && startUvForGroup) {
        const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForGroup.u || 0));
        const dv = Number(currentUv.v || 0) - Number(startUvForGroup.v || 0);
        if (applyStrokeGroupOffset(snap.id, du, dv, snap.snapshot, snap.layerKind, snap.frameSnapshot)) {
          changed = true;
          paintStrokeChanged = true;
        }
      }
    }
    for (const snap of (Array.isArray(it.rasterSnapshots) ? it.rasterSnapshots : [])) {
      const targetScreen = {
        x: Number(snap.center?.x || 0) + dx,
        y: Number(snap.center?.y || 0) + dy,
      };
      const currentUv = editUvAt(targetScreen);
      const startUvForObject = snap.centerUv || null;
      if (currentUv && startUvForObject) {
        const du = shortestWrappedDelta(Number(currentUv.u || 0), Number(startUvForObject.u || 0));
        const dv = Number(currentUv.v || 0) - Number(startUvForObject.v || 0);
        if (applyRasterObjectOffset(snap.id, du, dv, snap.snapshot)) {
          changed = true;
          rasterChanged = true;
        }
      }
    }
    if (changed) {
      if (paintStrokeChanged) {
        markPaintStrokeVisualsDirty({ rebuildPaintEngine: false });
      } else if (rasterChanged) {
        markPaintCompositeVisualsDirty();
      } else {
        markObjectVisualsDirty();
      }
      requestDraw({ localOnly: true });
    }
  }

  return {
    connect(api) {
      ({
        applyRasterObjectOffset, applyStrokeGroupOffset, editUvAt, getCutoutSelectableItems, getList,
        getRasterObjectCenterUv, getStrokeGroupCenterUv, isRasterObjectItem, isStickerItem, isStrokeGroupItem,
        markObjectVisualsDirty, markPaintCompositeVisualsDirty, markPaintStrokeVisualsDirty, objectGeom,
        parseRasterObjectSelectionId, poseOf, rasterObjectSnapshot, requestDraw, shortestWrappedDelta,
        strokeGroupFrameSnapshot, strokeGroupSnapshot, updateCursor, writePoseAtScreenPoint,
      } = api);
    },
    startMultiMove, moveMulti,
  };
}
