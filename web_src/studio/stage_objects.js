// Selecting and editing the objects on the new UI's stage (docs/studio-ui.md "下の中央のバー", "ペイントのまとまり",
// "Camera タブ"; docs/space-and-view.md "マウスとキー", "World の物のガイド", "カーソル"). stage.js owns the pointer and
// asks this module what a left press without Alt does, what the pointer is over, what gizmo to draw and what to draw
// on the overlay. It builds no DOM. The sky images' part is stage_sky_objects.js, the paint groups' stage_paint_objects.js.
//
// A left press, in this order (docs/studio-ui.md "ペイントのまとまり" "押したときの順"):
//   1. a handle of the gizmo of the selected World object or Camera (gizmo_overlay.js): drags it;
//   2. a handle of the selected sky image (a corner scales both FOVs, an edge one, the rotate handle the Roll), or the
//      rotate handle (turns it) or a corner (scales it) of the selected paint group; not while locked;
//   3. the World object under the pointer (objectUnder: the same test as the hover, hit_test.js coarseUnder): selects
//      it (its drag does nothing: the gizmo moves it);
//   4. the Camera's mark (3D tab; camera_marker.js: anywhere on its filled shape or near its lines): selects the Camera;
//   5. the node's own Sky from the visual front (skyObjects: the sky images and the paint groups by the draw order,
//      reversed), then the upstream sky images under it (from the downstream layer, in a layer from the front): selects
//      it and its drag turns a sky image (its direction) or moves a paint group (not a locked one);
//   6. nothing: the stage looks around, and a press let go without moving lets the selection go.
// The upstream objects (docs/studio-ui.md "上流の物の編集") are found by their working ids in the working layers
// (`upstream`) and count as the node's own: the upstream World objects in 3 (their guides, world_guides.js), the sky
// images after 5, the selected one's gizmo or handles in 1 and 2. Their drags change their working copies (the session
// writes them back as overrides); one of a layer whose overrides cannot be kept is locked.
// The Camera tab's Frame view does the same for the selected object (its gizmo, its handles, its body: docs/studio-ui.md
// "Camera タブ", ADR 0051); a press on any other object, or on a locked one, selects it and its drag is the stage's,
// which moves the Camera (the handler says `passes`). The Camera selected there shows no gizmo (the view is inside it).
// On a lens Camera's Frame view `camera()` carries the bent picture (pano_lens.js withLensImage): the guides, the hover,
// the gizmo, the handles and the drags all map through it (docs/space-and-view.md "レンズの Camera の当たり").
//
// A drag writes through `edits`: edits.live(apply) on each move (apply(draft) changes a copy of the state the drag
// started from), edits.commit() at the end (one Undo step when it changed something), edits.cancel() when it is given
// up. An object's drag writes its Lanes by the recording rule (docs/timeline-ui.md "記録の規則"); a paint group's writes
// the painting as it is (it has no Lanes).
import { viewProjection } from "../pano_editor_view.js";
import { setWorldStickerTransform } from "../pano_editor_state.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import { isUpstreamSticker, upstreamStickerLocked } from "../pano_upstream.js";
import { gizmoDragLanes, sceneTransform } from "../pano_space.js";
import { hitFrameAffordance, ROTATE_HANDLE_HIT_PX } from "../pano_sticker_affordance.js";
import { buildStickerGeometry } from "../pano_sticker_geometry.js";
import { dist2, pointInPoly } from "../pano_math.js";
import {
  paintCornerHandle, paintObjectOf, rasterAlphaHits, rasterObjectAlphaAt, strokeDotHit, strokePathsHit,
} from "../pano_paint_objects.js";
import { cameraAt, setCameraLanes } from "./camera_state.js";
import { findSticker } from "./row_object.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";
import { shownGizmoMode, selectedKind } from "./selection_bar.js";
import { cameraMarkerHit, cameraMarkerLength, cameraMarkerScreen, cameraMarkerShape, cameraMarkerShown } from "./camera_marker.js";
import { gizmoDrag as startGizmoDrag, gizmoGuideSegment, gizmoHandles, gizmoHit } from "./gizmo_overlay.js";
import { guideLook, pointInPolygon, screenLines, worldGuideItems } from "./world_guides.js";
import { coarseUnder } from "./hit_test.js";
import { createPaintDrags, erpUnder, paintFrame, paintPaths, selectOnly, viewKey } from "./stage_paint_objects.js";
import { createSkyDrag, skyItems, skyObjects, upstreamSkyItems } from "./stage_sky_objects.js";

// The cursor over an object's body (hit_test.js's rule: the default arrow; handles bring their own).
const BODY_CURSOR = "default";

// state(), content() (stage_content.js stageContent()), playhead(): the working state, what is drawn of it and the
// Timeline frame. camera() and size(): the stage's three.js camera (stage_view.js stageCamera(); on a lens Camera's
// Frame view one carrying its picture, pano_lens.js withLensImage) and its CSS size.
// selection(): the selected row ("camera", a Sticker id, a paint group's `paint_group:` / `raster:` row, or null); select(row) selects (null lets go). mode(): the
// gizmo's mode. tab(): "3d" or "camera". ground(): the ground
// height. readOnly(): no edits. upstream(): the upstream working layers (studio/upstream.js working(); [] without).
// loading: load_reveal.js
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
  upstream = () => [],
}) {
  let hovered = null;
  // The gizmo's handle under the pointer, and the one being dragged (gizmo_overlay.js gizmoHit's names).
  let gizmoAxis = null;
  let draggedAxis = null;
  // The axis guide lines of the gizmo drag under way (gizmo_overlay.js gizmoDrag's `guides`), or none.
  let dragGuides = [];

  // The objects can be edited on the stage: not read-only.
  const editable = () => !readOnly();

  function cameraValue() {
    return cameraAt(state(), playhead());
  }

  // The Sticker with the id `id`: the node's own, else an upstream working copy (a drag changes it in place).
  const stickerOf = (scene, id) => findSticker(scene, upstream(), id);
  // What a drag of the Sticker `id` copies of the state it started from (session.js gesture's copy): an upstream
  // object's drag changes its working copy, not the state, so the state is only replaced.
  const draftOf = (id) => (isUpstreamSticker(stickerOf(state(), id)) ? (base) => ({ ...base }) : undefined);
  // The evaluated value of a World Sticker at the playhead: the node's own from what is drawn, an upstream one from its
  // working copy.
  function stickerValue(sticker) {
    if (isUpstreamSticker(sticker)) return evaluateSticker(sticker, playhead());
    return content()?.evaluated.stickers.find((item) => item.id === sticker.id) ?? null;
  }

  // The stage's view now ({ key, projection, state, frames, paths }), with the paint's screen shapes made in it for the
  // state they were made for: a hover does not project the paint again until the view or the state changes.
  let seen = null;
  function stageView() {
    const { width, height } = size();
    const view = camera();
    const key = viewKey(view, width, height);
    if (seen?.key !== key) seen = { key, projection: viewProjection(view, width, height), state: null, frames: new Map(), paths: new Map() };
    const entry = seen;
    if (entry.state !== state()) {
      entry.state = state();
      entry.frames.clear();
      entry.paths.clear();
    }
    return entry;
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

  // The drags of a sky image and of a paint group (stage_sky_objects.js, stage_paint_objects.js).
  const skyDrag = createSkyDrag({ playhead, projection, edits, draftOf, stickerOf });
  const { paintDrag } = createPaintDrags({ state, projection, edits });

  // --- What shows.

  // The gizmo to show ({ mode, transform, center }, gizmo_overlay.js) or null: on the selected World object where it
  // shows and can be edited, or on the selected Camera in the 3D tab; not on a locked one. A World object's gizmo sits on its guide's center
  // (docs/studio-ui.md "ギズモ" "物の中心"; a 3D file's origin can lie far outside its content), the Camera's on its
  // position.
  function gizmo() {
    if (!editable()) return null;
    const row = selection();
    const kind = selectedKind(state(), row, upstream());
    if (kind === "camera") {
      if (tab() !== "3d") return null;
      const value = cameraValue();
      if (!value.visible || state().camera.locked === true) return null;
      return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform({ ...value, scale: 1 }) };
    }
    if (kind !== "world-image" && kind !== "world-3d") return null;
    const sticker = stickerOf(state(), row);
    const value = sticker ? stickerValue(sticker) : null;
    if (!sticker || upstreamStickerLocked(sticker) || !value?.active) return null;
    const guide = guides().find((item) => item.id === row);
    return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform(value), center: guide ? [...guide.center] : null };
  }

  // The selected sky image's geometry with its handles (pano_sticker_geometry.js), or null: the node's own or an
  // upstream one.
  function selectedSky() {
    const row = selection();
    const item = skyItems(state(), content()).find((entry) => entry.id === row)
      ?? (String(row ?? "").startsWith("upstream:") ? upstreamSkyItems(upstream(), content(), playhead()).find((entry) => entry.id === row) : null);
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

  // The handle of the selected paint group `paint` (selectedPaint) under `point` ({ kind: "rotate" | "scale", cursor }),
  // or null. The rotate handle comes first (a small frame turns too); a corner is not hit on the dot of a stroke group
  // that is only dots, whose corners lie about on it (pano_paint_objects.js strokeDotHit: the dot moves).
  function paintHandleAt(paint, point) {
    if (dist2(paint.geometry.rotateHandle, point) <= ROTATE_HANDLE_HIT_PX * ROTATE_HANDLE_HIT_PX) return { kind: "rotate", cursor: "grab" };
    if (paint.object.kind === "group" && strokeDotHit(point, pathsIn(stageView(), paint.object))) return null;
    return paintCornerHandle(paint.geometry, point);
  }

  // The Sky objects in order (skyObjects), made again only when the state or what is drawn changes (an edit of an
  // upstream working copy replaces the state too).
  let ordered = { state: null, content: null, objects: [] };
  function skyObjectsNow() {
    const scene = state();
    const shown = content();
    if (ordered.state !== scene || ordered.content !== shown) ordered = { state: scene, content: shown, objects: skyObjects(scene, shown, upstream(), playhead()) };
    return ordered.objects;
  }

  // The Sky object under `point`, front to back (skyObjects):
  // { object, geometry } or null (geometry: a sky image's, or a paint group's frame). A sky image is hit inside its
  // edge, a stroke group along its strokes wherever its frame is (pano_paint_objects.js strokePathsHit), a raster
  // object inside its box on the screen where its pixels show (rasterAlphaHits).
  function skyObjectUnder(point) {
    const view = stageView();
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
      if (!geometry.visible || !pointInPoly(point, geometry.outline)) continue;
      const under = erpUnder(view.projection, point);
      if (!under) continue;
      const alpha = rasterObjectAlphaAt(object.item, under, (u, v) => rasterAlpha(object.item, u, v));
      if (rasterAlphaHits(alpha)) return { object, geometry };
    }
    return null;
  }

  function guides() {
    return worldGuideItems(state(), content(), (url) => editorView.sceneBox(url), (id) => loading?.pendingBox(id) ?? null, upstream());
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

  // The id of the World object under `point`, or null.
  function objectUnder(point) {
    const { width, height } = size();
    return coarseUnder(guides(), (url) => editorView.sceneGrid?.(url) ?? null, camera(), point, width, height);
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
      if (cursor === null && paint && !paint.object.locked) cursor = paintHandleAt(paint, point)?.cursor ?? null;
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
    const base = row === "camera" ? cameraValue() : evaluateSticker(stickerOf(state(), row), frame);
    const copy = row === "camera" ? undefined : draftOf(row);
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
            setCameraLanes(draft.camera, frame, lanes);
            return true;
          }
          const sticker = stickerOf(draft, row);
          if (!sticker) return false;
          setWorldStickerTransform(sticker, frame, lanes);
          return true;
        }, copy);
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

  // A press whose drag the stage takes (it moves the Camera): selects, as selectOnly (stage_paint_objects.js).
  const passOn = () => ({ ...selectOnly(), passes: true });

  // What a left press without Alt at `point` does: a drag handler { move(point, event), end(), cancel() }, or null
  // when it touches nothing (the stage looks around; its click without a move lets the selection go).
  function press(point) {
    const canEdit = editable();
    // In the Camera tab only the selected object that can be edited takes the drag; a press on another one, or on a
    // locked one, selects it and passes (the drag moves the Camera).
    const passes = (row, locked) => tab() !== "3d" && !(canEdit && row === selection() && !locked);
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
      const paintHandle = paint && !paint.object.locked ? paintHandleAt(paint, point) : null;
      if (paintHandle) return paintDrag(paintHandle.kind, paint.object, paint.geometry, point);
    }
    const picked = objectUnder(point);
    if (picked) {
      const pass = passes(picked, !!guides().find((item) => item.id === picked)?.locked);
      select(picked);
      return pass ? passOn() : selectOnly();
    }
    if (cameraMarkerHit(cameraMarker(), point)) {
      select("camera");
      return selectOnly();
    }
    const under = skyObjectUnder(point);
    if (under) {
      const { object, geometry } = under;
      const pass = passes(object.row, object.kind === "sky" ? !!object.item.locked : !!object.locked);
      select(object.row);
      if (pass) return passOn();
      if (object.kind === "sky") return canEdit && !object.item.locked ? skyDrag("move", object.item, geometry, point) : selectOnly();
      return canEdit && !object.locked ? paintDrag("move", object, geometry, point) : selectOnly();
    }
    return null;
  }

  // --- The overlay (stage_overlay.js draws it): the guides with their looks, the Camera's mark with its look, the
  // gizmo's handles with the one lit, the selected sky image's or paint group's frame and handles.
  function overlay({ altHeld = false, gridHidden = false } = {}) {
    const row = selection();
    // A 3D file just placed: its guide's band of light while it loads and fades in (load_reveal.js).
    const phase = loading ? loading.phase() : 0;
    const items = guides().map((item) => {
      const shimmer = loading && item.kind === "box" ? loading.shimmer(item.id) : 0;
      return {
        segments: item.segments,
        corners: item.corners,
        look: guideLook({ selected: item.id === row, hovered: item.id === hovered, locked: item.locked, altHeld, gridHidden }),
        // An upstream object's selected guide is dashed (docs/studio-ui.md "上流の物の編集" "見せる").
        dashed: !!item.upstream && item.id === row,
        ...(shimmer > 0 ? { shimmer, phase } : {}),
      };
    }).filter((item) => item.look);
    const marker = cameraMarker();
    const sky = selectedSky();
    const paint = selectedPaint();
    const shownHandles = handles();
    const { width, height } = size();
    const guideLines = shownHandles ? dragGuides.flatMap((guide) => screenLines(camera(), gizmoGuideSegment(guide, camera()), width, height)
      .map((points) => ({ name: guide.name, points }))) : [];
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
      sky: sky ? { geometry: sky.geometry, handles: editable() && !sky.item.locked, dashed: isUpstreamSticker(stickerOf(state(), sky.item.id)) } : null,
      // The selected paint group's frame (its corners, its edge `outline` (bent on a lens Camera's picture), screen
      // center and rotate handle with its stem's base in CSS px), with its corner and rotate handles unless it is locked.
      paint: paint ? {
        corners: paint.geometry.corners,
        outline: paint.geometry.outline,
        center: paint.geometry.center,
        rotateStemBase: paint.geometry.rotateStemBase,
        rotateHandle: paint.geometry.rotateHandle,
        handles: editable() && !paint.object.locked,
      } : null,
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
