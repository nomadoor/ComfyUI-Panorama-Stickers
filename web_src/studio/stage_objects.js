// Selecting and editing the objects on the new UI's stage (docs/studio-ui.md "下の中央のバー", "ペイントのまとまり",
// "Camera タブ"; docs/space-and-view.md "マウスとキー", "World の物のガイド", "カーソル"). stage.js owns the pointer and
// asks this module what a left press without Alt does, what the pointer is over, what gizmo to draw and what to draw
// on the overlay. It builds no DOM.
//
// A left press, in this order (docs/studio-ui.md "ペイントのまとまり" "押したときの順"):
//   1. a handle of the gizmo of the selected World object or Camera (3D tab only; gizmo_overlay.js): drags it;
//   2. a handle of the selected sky image (a corner scales both FOVs, an edge one, the rotate handle the Roll), or a
//      corner of the selected paint group (scales it); not while locked, 3D tab only;
//   3. the World object under the pointer (objectUnder: the same test as the hover, hit_test.js coarseUnder): selects
//      it (its drag does nothing: the gizmo moves it);
//   4. the Camera's mark (3D tab; camera_marker.js: anywhere on its filled shape or near its lines): selects the Camera;
//   5. the node's own Sky from the visual front (skyObjects: the sky images and the paint groups by the draw order,
//      reversed): selects it and its drag turns a sky image (its direction) or moves a paint group (not a locked one);
//   6. nothing: the stage looks around, and a press let go without moving lets the selection go.
// In the Camera tab a press only selects (steps 3 to 5 without a drag), and no gizmo or handle shows.
//
// A drag writes through `edits`: edits.live(apply) on each move (apply(draft) changes a copy of the state the drag
// started from), edits.commit() at the end (one Undo step when it changed something), edits.cancel() when it is given
// up. An object's drag writes its Lanes by the recording rule (docs/timeline-ui.md "記録の規則"); a paint group's writes
// the painting as it is (it has no Lanes).
import { viewProjection } from "../pano_editor_view.js";
import { setStickerPose, setWorldStickerTransform } from "../pano_editor_state.js";
import { evaluateCamera, evaluateSticker } from "../pano_scene_eval.js";
import { gizmoDragLanes, sceneTransform } from "../pano_space.js";
import { hitFrameAffordance } from "../pano_sticker_affordance.js";
import {
  buildStickerGeometry,
  moveStickerToScreenPoint,
  rotateStickerFromPointer,
  scaleStickerAxisFromPointer,
  scaleStickerFromPointer,
} from "../pano_sticker_geometry.js";
import { setLaneValue } from "../pano_timeline.js";
import { pointInPoly } from "../pano_math.js";
import {
  countedPaintGroups, frameCornersUv, groupStrokes, offsetRasterObject, offsetStrokeGroup, paintCornerHandle, paintObjectOf,
  paintObjectRowOf, pointerDistance, pointerScaleRatio, rasterAlphaHits, rasterObjectAlphaAt, rasterObjectCornersUv,
  scaleRasterObject, skyStickersOf, strokeHitLineWidth, strokePathsHit, strokePoints, transformStrokeGroup,
} from "../pano_paint_objects.js";
import {
  brushPresetIdForTool, directionOfErpPoint, erpPointOfDirection, shortestWrappedDelta, strokeGroupFrame, syncPaintGroups,
} from "../pano_paint_strokes.js";
import { cameraOf } from "./defaults.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";
import { shownGizmoMode, selectedKind } from "./selection_bar.js";
import { cameraMarkerHit, cameraMarkerLength, cameraMarkerScreen, cameraMarkerShape, cameraMarkerShown } from "./camera_marker.js";
import { gizmoDrag as startGizmoDrag, gizmoGuideSegment, gizmoHandles, gizmoHit } from "./gizmo_overlay.js";
import { guideLook, pointInPolygon, screenSegment, worldGuideItems } from "./world_guides.js";
import { coarseUnder } from "./hit_test.js";

// The cursor over an object's body (hit_test.js's rule: the default arrow; handles bring their own).
const BODY_CURSOR = "default";

// The sky images drawn at the playhead as the geometry helpers read them (pano_sticker_geometry.js): their evaluated
// pose, in list order.
function skyItems(state, content) {
  if (!content) return [];
  const drawn = new Set(content.layers.filter((layer) => layer.kind === "sticker").map((layer) => layer.id));
  const items = [];
  state.stickers.forEach((sticker, index) => {
    if (sticker.placement !== "sky" || !drawn.has(sticker.id)) return;
    const value = content.evaluated.stickers[index];
    items.push({
      id: sticker.id,
      yaw_deg: value.yaw_deg,
      pitch_deg: value.pitch_deg,
      rot_deg: value.roll_deg,
      hFOV_deg: value.hFOV_deg,
      vFOV_deg: value.vFOV_deg,
      curve: value.curve,
      z_index: Number(sticker.z_index || 0),
      locked: sticker.locked === true,
    });
  });
  return items;
}

// The paint of a state as the Cursor grabs it, made once per state (states are never changed in place): its stroke
// groups that have strokes ({ group, strokes, frame } by actionGroupId: the counted groups, pano_paint_objects.js
// countedPaintGroups) and its paint raster objects. Empty while the painting is hidden.
const paintIndexes = new WeakMap();
function paintIndex(state) {
  let index = paintIndexes.get(state);
  if (index) return index;
  index = { groups: new Map(), rasters: [] };
  if (state.painting && state.painting_visible !== false) {
    for (const group of countedPaintGroups(state.painting, skyStickersOf(state))) {
      const id = String(group.actionGroupId || "");
      const strokes = groupStrokes(state.painting.paint?.strokes, id);
      const frame = strokeGroupFrame(strokes);
      if (frame) index.groups.set(id, { group, strokes, frame });
    }
    index.rasters = (state.painting.raster_objects ?? []).filter((item) => String(item.layerKind || "paint") === "paint");
  }
  paintIndexes.set(state, index);
  return index;
}

// The node's own Sky objects as drawn, front to back (docs/studio-ui.md "ペイントのまとまり" "押したときの順" 5): the sky
// images and the paint groups (paintIndex) by the order they are drawn (pano_editor_view.js skyLayers over
// pano_paint_layers.js skyPaintLayers: by z_index, a paint group's truncated as drawn, ties the sky images, then the
// stroke groups, then the raster objects, each in list order), reversed. Each is { kind: "sky", row, item } or
// { kind: "group" | "raster", id, row, item, locked }. The upstream Stickers lie under the node's own Sky and are not
// among them.
function skyObjects(state, content) {
  const entries = skyItems(state, content).map((item) => ({ kind: "sky", row: item.id, item, zIndex: item.z_index }));
  const index = paintIndex(state);
  for (const [id, { group }] of index.groups) {
    entries.push({ kind: "group", id, row: paintObjectRowOf("group", id), item: group, locked: group.locked === true, zIndex: Math.trunc(Number(group.z_index) || 0) });
  }
  for (const item of index.rasters) {
    entries.push({ kind: "raster", id: item.id, row: paintObjectRowOf("raster", item.id), item, locked: item.locked === true, zIndex: Math.trunc(Number(item.z_index) || 0) });
  }
  return entries.map((entry, order) => ({ entry, order }))
    .sort((a, b) => b.entry.zIndex - a.entry.zIndex || b.order - a.order)
    .map(({ entry }) => entry);
}

// Where the ERP point `point` lands on the screen of `projection` (pano_editor_view.js viewProjection): { x, y }, or
// null behind the view. The Sky lies at infinity, so only the direction counts.
function screenOfErp(projection, point) {
  const at = projection.project(directionOfErpPoint(point));
  return at.z > 1e-4 ? { x: at.x, y: at.y } : null;
}

// The ERP point under the screen point `point` of `projection`.
function erpUnder(projection, point) {
  return erpPointOfDirection(projection.ray(point.x, point.y));
}

// A paint group's frame on the screen of `projection`: { visible, center, corners } (a stroke group's frame is its
// strokeGroupFrame, a raster object's its transformed box), as the old editor's editor/object_geometry.js. Not visible
// when its center or a corner is behind the view: the frame and its handles are not drawn then (its strokes are still
// hit, paintPaths).
function paintFrame(state, object, projection) {
  let center = null;
  let cornersUv;
  if (object.kind === "group") {
    const entry = paintIndex(state).groups.get(object.id);
    if (!entry) return { visible: false };
    center = screenOfErp(projection, entry.frame.centerUv);
    cornersUv = frameCornersUv(entry.frame);
  } else {
    cornersUv = rasterObjectCornersUv(object.item);
  }
  const corners = cornersUv.map((point) => screenOfErp(projection, point));
  if (corners.length < 4 || corners.some((corner) => !corner)) return { visible: false };
  if (object.kind === "raster") center = { x: corners.reduce((sum, p) => sum + p.x, 0) / 4, y: corners.reduce((sum, p) => sum + p.y, 0) / 4 };
  if (!center) return { visible: false };
  return { visible: true, center, corners };
}

// A stroke group's strokes on the screen of `projection`, as pano_paint_objects.js strokePathsHit takes them: each
// stroke's points in front of the view, closed for a lasso, with the width it is hit within.
function paintPaths(state, id, projection) {
  const entry = paintIndex(state).groups.get(id);
  if (!entry) return [];
  return entry.strokes.map((stroke) => {
    const points = strokePoints(stroke);
    return {
      points: (Array.isArray(points) ? points : []).map((point) => screenOfErp(projection, point)).filter(Boolean),
      closed: String(stroke?.geometry?.geometryKind || "") === "lasso_fill",
      lineWidth: strokeHitLineWidth(stroke, brushPresetIdForTool(String(stroke?.toolKind || "pen"))),
    };
  }).filter((path) => path.points.length);
}

// What a drag of the paint group `object` copies of the state `base` (session.js gesture's copy): the stroke group's
// strokes or the raster object, and the groups' entries (written with the counted groups); everything else is shared.
function paintDraft(base, object) {
  const painting = base.painting;
  const own = (stroke) => object.kind === "group" && String(stroke?.actionGroupId || "").trim() === object.id;
  return {
    ...base,
    painting: {
      ...painting,
      groups: (painting.groups ?? []).map((group) => ({ ...group })),
      paint: { ...painting.paint, strokes: (painting.paint?.strokes ?? []).map((stroke) => (own(stroke) ? structuredClone(stroke) : stroke)) },
      raster_objects: (painting.raster_objects ?? []).map((item) => (object.kind === "raster" && item.id === object.id ? { ...item, transform: { ...item.transform } } : item)),
    },
  };
}

// The key of a view (a three.js camera setup seen at width x height px) for the caches of the paint's screen shapes.
function viewKey(camera, width, height) {
  const q = camera.quaternion;
  return `${q.x},${q.y},${q.z},${q.w}|${camera.fovY_deg}|${camera.aspect}|${width}|${height}`;
}

// state(), content() (stage_content.js stageContent()), playhead(): the working state, what is drawn of it and the
// Timeline frame. camera() and size(): the stage's three.js camera (stage_view.js stageCamera()) and its CSS size.
// selection(): the selected row ("camera", a Sticker id, a paint group's `paint_group:` / `raster:` row, or null); select(row) selects (null lets go). mode(): the
// gizmo's mode. tab(): "3d" or "camera". ground(): the ground height. readOnly(): no edits. loading: load_reveal.js
// createLoadReveal()'s for the guides of 3D files just placed (their stand-in box and band), or null.
// rasterAlpha(item, u, v): the alpha (0..255) of a paint raster object's image at a point of its box (0..1 across), or
// null while it cannot be read (studio/paint.js rasterAlpha); a raster object is then hit anywhere in its box.
export function createStageObjects({
  editorView,
  camera,
  size,
  state,
  content,
  playhead,
  selection,
  select,
  edits,
  mode = () => "translate",
  tab = () => "3d",
  ground = () => -1.6,
  readOnly = () => false,
  loading = null,
  rasterAlpha = () => null,
}) {
  let hovered = null;
  // The gizmo's handle under the pointer, and the one being dragged (gizmo_overlay.js gizmoHit's names).
  let gizmoAxis = null;
  let draggedAxis = null;
  // The axis guide lines of the gizmo drag under way (gizmo_overlay.js gizmoDrag's `guides`), or none.
  let dragGuides = [];

  const editable = () => !readOnly() && tab() === "3d";

  function stickerOf(id) {
    return state().stickers.find((item) => item.id === id) ?? null;
  }

  function cameraValue() {
    const shown = cameraOf(state());
    return { ...evaluateCamera(shown, playhead()), projection: shown.projection, visible: shown.visible !== false };
  }

  // The views seen lately ({ key, projection, state, frames, paths }: the stage's, and a lens Camera's cube face), with
  // the paint's screen shapes made in them for the state they were made for: a hover does not project the paint again
  // until the view or the state changes.
  const views = [];
  function viewOf(view, width, height) {
    const key = viewKey(view, width, height);
    let entry = views.find((item) => item.key === key);
    if (!entry) {
      entry = { key, projection: viewProjection(view, width, height), state: null, frames: new Map(), paths: new Map() };
      views.unshift(entry);
      views.length = Math.min(views.length, 2);
    }
    if (entry.state !== state()) {
      entry.state = state();
      entry.frames.clear();
      entry.paths.clear();
    }
    return entry;
  }

  function stageView() {
    const { width, height } = size();
    return viewOf(camera(), width, height);
  }

  function projection() {
    return stageView().projection;
  }

  function frameIn(view, object) {
    if (!view.frames.has(object.row)) view.frames.set(object.row, paintFrame(view.state, object, view.projection));
    return view.frames.get(object.row);
  }

  function pathsIn(view, object) {
    if (!view.paths.has(object.row)) view.paths.set(object.row, paintPaths(view.state, object.id, view.projection));
    return view.paths.get(object.row);
  }

  // --- What shows.

  // The gizmo to show ({ mode, transform, center }, gizmo_overlay.js) or null: on the selected World object where it
  // shows and can be edited, or on the selected Camera, in the 3D tab; not on a locked one. A World object's gizmo sits on its guide's center
  // (docs/studio-ui.md "ギズモ" "物の中心"; a 3D file's origin can lie far outside its content), the Camera's on its
  // position.
  function gizmo() {
    if (!editable()) return null;
    const row = selection();
    const kind = selectedKind(state(), row);
    if (kind === "camera") {
      const value = cameraValue();
      if (!value.visible || cameraOf(state()).locked === true) return null;
      return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform({ ...value, scale: 1 }) };
    }
    if (kind !== "world-image" && kind !== "world-3d") return null;
    const sticker = stickerOf(row);
    const value = content()?.evaluated.stickers.find((item) => item.id === row);
    if (!sticker || sticker.locked || !value?.active) return null;
    const guide = guides().find((item) => item.id === row);
    return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform(value), center: guide ? [...guide.center] : null };
  }

  // The selected sky image's geometry with its handles (pano_sticker_geometry.js), or null.
  function selectedSky() {
    const row = selection();
    const item = skyItems(state(), content()).find((entry) => entry.id === row);
    if (!item) return null;
    const geometry = buildStickerGeometry(item, projection());
    return geometry.visible ? { item, geometry } : null;
  }

  // The selected paint group with its geometry on the stage ({ object, geometry }, paintFrame), or null: not while
  // the painting is hidden or it is out of the view.
  function selectedPaint() {
    const scene = state();
    if (scene.painting_visible === false) return null;
    const object = paintObjectOf(scene, selection());
    if (!object) return null;
    const geometry = frameIn(stageView(), object);
    return geometry.visible ? { object, geometry } : null;
  }

  // The node's own Sky objects in order (skyObjects), made again only when the state or what is drawn changes.
  let ordered = { state: null, content: null, objects: [] };
  function skyObjectsNow() {
    const scene = state();
    const shown = content();
    if (ordered.state !== scene || ordered.content !== shown) ordered = { state: scene, content: shown, objects: skyObjects(scene, shown) };
    return ordered.objects;
  }

  // The node's own Sky object under `point` in `view` (viewOf: the stage's by default), front to back (skyObjects):
  // { object, geometry } or null (geometry: a sky image's, or a paint group's frame). A sky image is hit inside its
  // edge, a stroke group along its strokes wherever its frame is (pano_paint_objects.js strokePathsHit), a raster
  // object inside its box on the screen where its pixels show (rasterAlphaHits).
  function skyObjectUnder(point, view = stageView()) {
    for (const object of skyObjectsNow()) {
      if (object.kind === "sky") {
        const geometry = buildStickerGeometry(object.item, view.projection);
        if (geometry.visible && pointInPolygon(point, geometry.boundaryEdges.flat())) return { object, geometry };
        continue;
      }
      if (object.kind === "group") {
        if (strokePathsHit(point, pathsIn(view, object))) return { object, geometry: frameIn(view, object) };
        continue;
      }
      const geometry = frameIn(view, object);
      if (!geometry.visible || !pointInPoly(point, geometry.corners)) continue;
      const alpha = rasterObjectAlphaAt(object.item, erpUnder(view.projection, point), (u, v) => rasterAlpha(object.item, u, v));
      if (rasterAlphaHits(alpha)) return { object, geometry };
    }
    return null;
  }

  function guides() {
    return worldGuideItems(state(), content(), (url) => editorView.sceneBox(url), (id) => loading?.pendingBox(id) ?? null);
  }

  // The Camera's mark on screen (camera_marker.js cameraMarkerScreen), or null: in the 3D tab only, and not while it
  // is hidden or the view stands inside it (camera_marker.js cameraMarkerShown).
  function cameraMarker() {
    if (tab() !== "3d") return null;
    const value = cameraValue();
    const view = camera();
    if (!cameraMarkerShown(value, view.position, ground())) return null;
    const { width, height } = size();
    const length = cameraMarkerLength(value, view, height, ground());
    return cameraMarkerScreen(cameraMarkerShape(value, value.projection, length), view, width, height);
  }

  // --- Which World object is under the pointer: one decision for the hover and the press (docs/space-and-view.md
  // "ホバーの判定"): the coarse grid of each 3D item (hit_test.js coarseUnder; a box whose grid is not built yet by its
  // guide), a plane by its outline. No GPU read.

  // The id of the World object under `point`, or null. `through` ({ camera, width, height }) is the view a lens
  // Camera's press tests in instead of the stage's (press()).
  function objectUnder(point, through = null) {
    const { width, height } = through ?? size();
    return coarseUnder(guides(), (url) => editorView.sceneGrid?.(url) ?? null, through?.camera ?? camera(), point, width, height);
  }

  // --- The hover.

  // The selected object's gizmo handles on screen (gizmo_overlay.js gizmoHandles), or null.
  function handles(shown = gizmo()) {
    const { width, height } = size();
    return shown ? gizmoHandles(shown, camera(), width, height) : null;
  }

  // What the pointer at `point` is over: { cursor (null over nothing touchable), changed (the drawing changed) }.
  function hover(point, { altHeld = false } = {}) {
    let cursor = null;
    let axis = null;
    let over = null;
    if (point && !altHeld) {
      axis = gizmoHit(handles(), point);
      if (axis !== null) cursor = "grab";
      const sky = editable() ? selectedSky() : null;
      if (cursor === null && sky && !sky.item.locked) {
        const handle = hitFrameAffordance(sky.geometry, point, { edges: true });
        if (handle.kind !== "none" && handle.kind !== "move") cursor = handle.cursor;
      }
      const paint = editable() ? selectedPaint() : null;
      if (cursor === null && paint && !paint.object.locked) cursor = paintCornerHandle(paint.geometry, point)?.cursor ?? null;
      over = objectUnder(point);
      if (cursor === null && over) cursor = BODY_CURSOR;
      if (cursor === null && cameraMarkerHit(cameraMarker(), point)) cursor = BODY_CURSOR;
      if (cursor === null && skyObjectUnder(point)) cursor = BODY_CURSOR;
    }
    const changed = over !== hovered || axis !== gizmoAxis;
    hovered = over;
    gizmoAxis = axis;
    return { cursor, changed };
  }

  // --- Presses.

  // A drag of the gizmo (gizmo_overlay.js gizmoDrag): the Lane of its mode (gizmoDragLanes), on the World object or
  // the Camera.
  function gizmoDrag(point) {
    const shown = gizmo();
    const axis = gizmoHit(handles(shown), point);
    const { width, height } = size();
    const grab = axis ? startGizmoDrag(shown, axis, camera(), point, width, height) : null;
    if (!grab) return null;
    const row = selection();
    const frame = playhead();
    const base = row === "camera" ? cameraValue() : evaluateSticker(stickerOf(row), frame);
    draggedAxis = axis;
    dragGuides = grab.guides ?? [];
    return {
      move(next, event = {}) {
        const now = size();
        // Shift stops a turn at ROTATE_SNAP_DEG multiples of its axis's angle.
        const moved = grab.move(camera(), next, now.width, now.height, { snap: event.shiftKey ? ROTATE_SNAP_DEG : 0 });
        if (!moved) return;
        const lanes = gizmoDragLanes(shown.mode, base, shown.transform, moved);
        // Rotate and Scale keep the guide's center in place: an object whose origin is elsewhere moves too.
        if (shown.mode !== "translate" && row !== "camera") {
          const shift = moved.position.map((value, axis) => value - shown.transform.position[axis]);
          if (shift.some((value) => Math.abs(value) > 1e-9)) lanes.position = base.position.map((value, axis) => value + shift[axis]);
        }
        edits.live((draft) => {
          if (row === "camera") {
            draft.camera ??= cameraOf(draft);
            for (const [name, value] of Object.entries(lanes)) setLaneValue(draft.camera, name, frame, value);
            return true;
          }
          const sticker = draft.stickers.find((item) => item.id === row);
          if (!sticker) return false;
          setWorldStickerTransform(sticker, frame, lanes);
          return true;
        });
      },
      end() {
        draggedAxis = null;
        dragGuides = [];
        edits.commit();
      },
      cancel() {
        draggedAxis = null;
        dragGuides = [];
        edits.cancel();
      },
    };
  }

  // A drag of a sky image: `kind` "move" (its direction follows the pointer), "scale" (both FOVs), "scale_x" /
  // "scale_y" (one), "rotate" (the Roll), from `geometry` and `item` where it started.
  function skyDrag(kind, item, geometry, point) {
    const frame = playhead();
    const center = geometry.center;
    const offset = { x: point.x - center.x, y: point.y - center.y };
    const startDistance = Math.max(1, Math.hypot(point.x - center.x, point.y - center.y));
    const startAngle = Math.atan2(point.y - center.y, point.x - center.x);
    const write = (pose) => edits.live((draft) => {
      const sticker = draft.stickers.find((entry) => entry.id === item.id);
      if (!sticker) return false;
      setStickerPose(sticker, frame, pose);
      return true;
    });
    return {
      move(next, event = {}) {
        if (kind === "move") {
          const moved = moveStickerToScreenPoint(item, { x: next.x - offset.x, y: next.y - offset.y }, projection());
          write({ yaw_deg: moved.yaw_deg, pitch_deg: moved.pitch_deg });
          return;
        }
        const distance = Math.hypot(next.x - center.x, next.y - center.y);
        if (kind === "scale") {
          const scaled = scaleStickerFromPointer(item, startDistance, distance);
          write({ hFOV_deg: scaled.hFOV_deg, vFOV_deg: scaled.vFOV_deg });
        } else if (kind === "scale_x" || kind === "scale_y") {
          const field = kind === "scale_x" ? "hFOV_deg" : "vFOV_deg";
          write({ [field]: scaleStickerAxisFromPointer(item, kind, startDistance, distance)[field] });
        } else if (kind === "rotate") {
          const turned = rotateStickerFromPointer(item, startAngle, Math.atan2(next.y - center.y, next.x - center.x), !!event.shiftKey, ROTATE_SNAP_DEG);
          write({ rot_deg: turned.rot_deg });
        }
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A drag of a paint group (docs/studio-ui.md "ペイントのまとまり"): `kind` "move" (the body: the ERP difference between
  // the press and the pointer, the seam crossed the short way, added to its points or its raster transform) or "scale"
  // (a corner: the pointer's distance from the frame's screen center over the press's, about its frame's ERP center
  // for a stroke group, on its transform's scale for a raster object), from `geometry` where it started. The painting
  // is written as it is (no Lanes), with its counted groups, and drops the uploaded `painting_layer`.
  function paintDrag(kind, object, geometry, point) {
    const start = erpUnder(projection(), point);
    const center = geometry.center;
    const startDistance = center ? pointerDistance(center, point) : 1;
    const pivot = object.kind === "group" ? paintIndex(state()).groups.get(object.id)?.frame.centerUv : null;
    return {
      move(next) {
        const at = erpUnder(projection(), next);
        edits.live((draft) => {
          const painting = draft.painting;
          if (!painting) return false;
          syncPaintGroups(painting, skyStickersOf(draft));
          let changed;
          if (object.kind === "group") {
            const strokes = painting.paint.strokes;
            changed = kind === "move"
              ? offsetStrokeGroup(strokes, object.id, shortestWrappedDelta(at.u, start.u), at.v - start.v)
              : transformStrokeGroup(strokes, object.id, pointerScaleRatio(center, startDistance, next), 0, null, pivot);
          } else {
            const item = painting.raster_objects.find((entry) => entry.id === object.id);
            if (!item) return false;
            changed = kind === "move"
              ? offsetRasterObject(item, shortestWrappedDelta(at.u, start.u), at.v - start.v)
              : scaleRasterObject(item, pointerScaleRatio(center, startDistance, next));
          }
          if (!changed) return false;
          draft.painting_layer = null;
          return true;
        }, (base) => paintDraft(base, object));
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A press that selects and whose drag does nothing.
  const selectOnly = () => ({ move() {}, end() {}, cancel() {} });

  // What a left press without Alt at `point` does: a drag handler { move(point, event), end(), cancel() }, or null
  // when it touches nothing (the stage looks around; its click without a move lets the selection go).
  // `through` ({ camera, width, height }, with `point` in its px) is the view a lens Camera's Frame view picks in (stage_view.js
  // lensPickView: a cube face's pinhole): the World objects (objectUnder) and the sky images are tested there (docs/space-and-view.md
  // "レンズの Camera の当たり"). The stage hands it in the Camera tab only, where a press only selects.
  function press(point, through = null) {
    const canEdit = editable();
    if (canEdit) {
      const drag = gizmoDrag(point);
      if (drag) return drag;
      const sky = selectedSky();
      if (sky && !sky.item.locked) {
        const handle = hitFrameAffordance(sky.geometry, point, { edges: true });
        if (handle.kind === "scale" || handle.kind === "scale_x" || handle.kind === "scale_y" || handle.kind === "rotate") {
          return skyDrag(handle.kind, sky.item, sky.geometry, point);
        }
      }
      const paint = selectedPaint();
      if (paint && !paint.object.locked && paintCornerHandle(paint.geometry, point)) return paintDrag("scale", paint.object, paint.geometry, point);
    }
    const view = through ?? { camera: camera(), ...size() };
    const picked = objectUnder(point, through);
    if (picked) {
      select(picked);
      return selectOnly();
    }
    if (cameraMarkerHit(cameraMarker(), point)) {
      select("camera");
      return selectOnly();
    }
    const under = skyObjectUnder(point, through ? viewOf(view.camera, view.width, view.height) : stageView());
    if (under) {
      const { object, geometry } = under;
      select(object.row);
      if (object.kind === "sky") return canEdit && !object.item.locked ? skyDrag("move", object.item, geometry, point) : selectOnly();
      return canEdit && !object.locked ? paintDrag("move", object, geometry, point) : selectOnly();
    }
    return null;
  }

  // --- The overlay (stage_overlay.js draws it): the guides with their looks, the Camera's mark with its look, the
  // gizmo's handles with the one lit, the selected sky image's or paint group's frame and handles.
  function overlay({ altHeld = false, gridHidden = false } = {}) {
    const row = selection();
    const shownTab = tab();
    // A 3D file just placed: its guide's band of light while it loads and fades in (load_reveal.js).
    const phase = loading ? loading.phase() : 0;
    const items = guides().map((item) => {
      const shimmer = loading && item.kind === "box" ? loading.shimmer(item.id) : 0;
      return {
        segments: item.segments,
        corners: item.corners,
        look: guideLook({ selected: item.id === row, hovered: item.id === hovered, locked: item.locked, altHeld, gridHidden, tab: shownTab }),
        ...(shimmer > 0 ? { shimmer, phase } : {}),
      };
    }).filter((item) => item.look);
    const marker = cameraMarker();
    const sky = selectedSky();
    const paint = selectedPaint();
    const shownHandles = handles();
    const { width, height } = size();
    const guideLines = shownHandles ? dragGuides.map((guide) => {
      const line = screenSegment(camera(), gizmoGuideSegment(guide, camera()), width, height);
      return line ? { name: guide.name, a: line[0], b: line[1] } : null;
    }).filter(Boolean) : [];
    return {
      guides: items,
      // A guide's band runs now (StudioEditor.vue marks the overlay: data-loading-guide).
      loading: items.some((item) => item.shimmer > 0),
      camera: marker ? { screen: marker, look: row === "camera" ? "selected" : "normal" } : null,
      // The handle dragged, else the one under the pointer (none while Alt is held), is lit.
      // While a handle is dragged, its axis guide lines ([{ name, a, b }] in CSS px: an axis's one, a plane square's two)
      // run across the stage.
      gizmo: shownHandles ? {
        handles: shownHandles,
        active: draggedAxis ?? (altHeld ? null : gizmoAxis),
        guides: guideLines,
      } : null,
      sky: sky ? { geometry: sky.geometry, handles: editable() && !sky.item.locked } : null,
      // The selected paint group's frame (its corners and screen center in CSS px), with its corner handles unless it is
      // locked or in the Camera tab.
      paint: paint ? { corners: paint.geometry.corners, center: paint.geometry.center, handles: editable() && !paint.object.locked } : null,
    };
  }

  return {
    hover,
    press,
    overlay,
    // The pointer left the stage, or a drag began: nothing is hovered.
    leave() {
      const changed = hovered !== null || gizmoAxis !== null;
      hovered = null;
      gizmoAxis = null;
      return changed;
    },
  };
}
