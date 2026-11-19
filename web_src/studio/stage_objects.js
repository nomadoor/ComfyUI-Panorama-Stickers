// Selecting and editing the objects on the new UI's stage (docs/studio-ui.md "下の中央のバー", "ペイントのまとまり",
// "Camera タブ"; docs/space-and-view.md "マウスとキー", "World の物のガイド", "カーソル"). stage.js owns the pointer and
// asks this module what a left press without Alt does, what the pointer is over, what gizmo to draw and what to draw
// on the overlay. It builds no DOM. The sky images' part is stage_sky_objects.js, the paint groups' stage_paint_objects.js.
//
// A left press, in this order (docs/studio-ui.md "ペイントのまとまり" "押したときの順"):
//   1. a handle of the selected object's path line (3D tab; path_line.js): bends that side of its Keyframe;
//   2. a handle of the gizmo of the selected World object or Camera (gizmo_overlay.js): drags it;
//   3. a handle of the selected sky image (a corner scales both FOVs, an edge one, the rotate handle the Roll), or the
//      rotate handle (turns it) or a corner (scales it) of the selected paint group; not while locked;
//   4. a Keyframe point of the path line: selects that Keyframe (Shift adds), takes the playhead to it, and its drag
//      moves its position on the plane facing the view;
//   5. the path line: takes the playhead to the frame there, and follows the pointer while it is held;
//   6. the World object under the pointer (objectUnder: the same test as the hover, hit_test.js coarseUnder): selects
//      it (its drag does nothing: the gizmo moves it);
//   7. the Camera's mark (3D tab; camera_marker.js: anywhere on its filled shape or near its lines): selects the Camera;
//   8. the node's own Sky from the visual front (skyObjects: the sky images and the paint groups by the draw order,
//      reversed), then the upstream sky images under it (from the downstream layer, in a layer from the front): selects
//      it and its drag turns a sky image (its direction) or moves a paint group (not a locked one);
//   9. nothing: the stage looks around, and a press let go without moving lets the selection go.
// A locked or read-only object's path line is drawn and its points and line move the playhead, but nothing moves.
// The upstream objects (docs/studio-ui.md "上流の物の編集") are found by their working ids in the working layers
// (`upstream`) and count as the node's own: the upstream World objects in 6 (their guides, world_guides.js), the sky
// images after 8, the selected one's gizmo or handles in 2 and 3. Their drags change their working copies (the session
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
import { clipOrigin, evaluateSticker, ownerPeriod } from "../pano_scene_eval.js";
import { isUpstreamSticker, upstreamStickerLocked } from "../pano_upstream.js";
import { gizmoDragLanes, sceneTransform } from "../pano_space.js";
import { hitFrameAffordance, ROTATE_HANDLE_HIT_PX } from "../pano_sticker_affordance.js";
import { buildStickerGeometry } from "../pano_sticker_geometry.js";
import { dist2, pointInPoly } from "../pano_math.js";
import {
  paintCornerHandle, paintObjectOf, rasterAlphaHits, rasterObjectAlphaAt, strokeDotHit, strokePathsHit,
} from "../pano_paint_objects.js";
import { cameraAt, setCameraLanes } from "./camera_state.js";
import { findSticker, ownerLength } from "./row_object.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";
import { shownGizmoMode, selectedKind } from "./selection_bar.js";
import { cameraMarkerHit, cameraMarkerLength, cameraMarkerScreen, cameraMarkerShape, cameraMarkerShown } from "./camera_marker.js";
import { gizmoDrag as startGizmoDrag, gizmoGuideSegment, gizmoGuides, gizmoHandles, gizmoHit } from "./gizmo_overlay.js";
import { guideLook, pointInPolygon, screenLines, visibleBoxSegments, worldGuideItems } from "./world_guides.js";
import { coarseUnder } from "./hit_test.js";
import { createPaintDrags, erpUnder, paintFrame, paintPaths, selectOnly, viewKey } from "./stage_paint_objects.js";
import {
  PATH_TICK_FRAMES, dragPoint, easedSegments, frameNear, handleUnder, keyUnder, onLine, pathHandles, pathOf, pathScreen,
  togglePointCorner, writeHandle,
} from "./path_line.js";
import { projectPoint } from "../space/camera.js";
import { lookMarkPoint, lookingAt } from "./look_at.js";
import { createSkyDrag, skyItems, skyObjects, upstreamSkyItems } from "./stage_sky_objects.js";
import { handedOff } from "./port_offset.js";

// The cursor over an object's body (hit_test.js's rule: the default arrow; handles bring their own).
const BODY_CURSOR = "default";
// The top line over an edge handle of a returned shot (docs/studio-ui.md "一行の知らせの種類").
const STRETCH_HINT = "Can't stretch a returned shot";

// Whether a frame handle scales one axis (an edge handle).
const oneAxis = (handle) => handle.kind === "scale_x" || handle.kind === "scale_y";

// state(), content() (stage_content.js stageContent()), playhead(): the working state, what is drawn of it and the
// Timeline frame. camera() and size(): the stage's three.js camera (stage_view.js stageCamera(); on a lens Camera's
// Frame view one carrying its picture, pano_lens.js withLensImage) and its CSS size.
// selection(): the selected row ("camera", a Sticker id, a paint group's `paint_group:` / `raster:` row, or null); select(row) selects (null lets go). mode(): the
// gizmo's mode. tab(): "3d" or "camera". ground(): the ground
// height. readOnly(): no edits. upstream(): the upstream working layers (studio/upstream.js working(); [] without).
// loading: load_reveal.js
// createLoadReveal()'s for the guides of 3D file Stickers whose items have not drawn (their stand-in box and band), or null.
// rasterAlpha(item, u, v): the alpha (0..255) of a paint raster object's image at a point of its box (0..1 across), or
// null while it cannot be read (studio/paint.js rasterAlpha); a raster object is then hit anywhere in its box.
// The path line (docs/studio-ui.md "軌道の線"): keys() the Timeline's selected Keyframes ([{ row, lane, frame }]),
// selectKeys(row, keys) selects Keyframes of a row (the Timeline's selection), seek(frame) takes the playhead to a Timeline
// frame, playing() whether it plays, hint(text) the top line's hint while the pointer is over an edge handle of a returned shot
// (null: none),
// length() the output length (the loop period), tool() the left column's tool (the line shows with Cursor). shot(): the
// sticker_state that places the port Sticker, or null (its drags write its offset; its edge handles do not stretch it).
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
  keys = () => [],
  selectKeys = () => {},
  seek = () => {},
  playing = () => false,
  hint = () => {},
  length = () => null,
  tool = () => "cursor",
  simplifyGhost = () => null,
  shot = () => null,
}) {
  let hovered = null;
  // The gizmo's handle under the pointer, and the one being dragged (gizmo_overlay.js gizmoHit's names).
  let gizmoAxis = null;
  let draggedAxis = null;
  // Where the pointer was when gizmoAxis was found, to check it still is on that handle when the overlay is drawn.
  let gizmoPoint = null;
  // The axis guide lines of the gizmo drag under way (gizmo_overlay.js gizmoDrag's `guides`), or none.
  let dragGuides = [];
  // The part of the path line under the pointer ({ kind: "handle" | "point" | "line", index, side, frame, x, y }), and
  // the handle being dragged ({ index, side }), or null.
  let pathHovered = null;
  let pathDragged = null;
  // The hint sent to the top line (hint()), so it is sent again only when it changes.
  let hintShown = null;

  // The objects can be edited on the stage: not read-only.
  const editable = () => !readOnly();

  function cameraValue() {
    return cameraAt(state(), playhead(), length(), content()?.lookBoxes ?? null);
  }

  // The Sticker with the id `id`: the node's own, else an upstream working copy (a drag changes it in place).
  const stickerOf = (scene, id) => findSticker(scene, upstream(), id);
  // The output length a Sticker's loop follows: an upstream one's layer's, else the node's (row_object.js ownerLength).
  const lengthOf = (sticker) => ownerLength(upstream(), sticker, length());
  // What a drag of the Sticker `id` copies of the state it started from (session.js gesture's copy): an upstream
  // object's drag changes its working copy, not the state, so the state is only replaced.
  const draftOf = (id) => (isUpstreamSticker(stickerOf(state(), id)) ? (base) => ({ ...base }) : undefined);
  // The evaluated value of a World Sticker at the playhead: the node's own from what is drawn, an upstream one from its
  // working copy.
  function stickerValue(sticker) {
    if (isUpstreamSticker(sticker)) return evaluateSticker(sticker, playhead(), lengthOf(sticker));
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
  const skyDrag = createSkyDrag({ playhead, projection, edits, draftOf, stickerOf, lengthOf, shot, fps: () => state().timeline.fps, state, upstream });
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
      return { mode: shownGizmoMode(kind, mode(), lookingAt(state(), playhead(), length())), transform: sceneTransform({ ...value, scale: 1 }) };
    }
    if (kind !== "world-image" && kind !== "world-3d") return null;
    const sticker = stickerOf(state(), row);
    const value = sticker ? stickerValue(sticker) : null;
    if (!sticker || upstreamStickerLocked(sticker) || !value?.active) return null;
    const guide = guides().find((item) => item.id === row);
    return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform(value), center: guide ? [...guide.center] : null };
  }

  // The selected sky image's geometry with its handles (pano_sticker_geometry.js), or null: the node's own or an
  // upstream one. `handed`: a sticker_state places it (its edge handles do not stretch it).
  function selectedSky() {
    const row = selection();
    const item = skyItems(state(), content()).find((entry) => entry.id === row)
      ?? (String(row ?? "").startsWith("upstream:") ? upstreamSkyItems(upstream(), content(), playhead()).find((entry) => entry.id === row) : null);
    if (!item) return null;
    const geometry = buildStickerGeometry(item, projection());
    return geometry.visible ? { item, geometry, handed: handedOff(findSticker(state(), upstream(), row), shot()) } : null;
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
    const length = cameraMarkerLength(ground());
    return cameraMarkerScreen(cameraMarkerShape(value, value.projection, length), view, width, height);
  }

  // --- The path line (docs/studio-ui.md "軌道の線").

  // The selected object whose path line shows: { row, owner, offset (its time base's Timeline frame 0), length (the output
// length its loop follows), period, canEdit },
  // or null. In the 3D tab with the Cursor tool, the Camera or one World object with two position Keyframes or more.
  function pathTarget() {
    if (tab() !== "3d" || tool() !== "cursor") return null;
    const row = selection();
    const kind = selectedKind(state(), row, upstream());
    let owner = null;
    let canEdit = editable();
    if (kind === "camera") {
      owner = state().camera;
      canEdit = canEdit && owner.locked !== true;
    } else if (kind === "world-image" || kind === "world-3d") {
      owner = stickerOf(state(), row);
      canEdit = canEdit && !!owner && !upstreamStickerLocked(owner) && owner.locked !== true;
    }
    if (!owner || (owner.position?.keyframes.length ?? 0) < 2) return null;
    const ownLength = kind === "camera" ? length() : lengthOf(owner);
    return { row, owner, offset: owner.clip ? clipOrigin(owner.clip) : 0, length: ownLength, period: ownerPeriod(owner, ownLength), canEdit };
  }

  // The path line now ({ target, path, screen }), its path made again only when the owner or its position Lane changes
  // and its screen points when the view does too. An upstream working copy is changed in place by a drag (stickerOf),
  // so the Lane's text is compared, not only the owner.
  let pathMade = { owner: null, lane: null, period: null, offset: null, path: null, key: null, screen: null };
  function pathNow() {
    const target = pathTarget();
    if (!target) return null;
    const lane = JSON.stringify(target.owner.position);
    if (pathMade.owner !== target.owner || pathMade.lane !== lane || pathMade.period !== target.period || pathMade.offset !== target.offset) {
      pathMade = { owner: target.owner, lane, period: target.period, offset: target.offset, path: pathOf(target.owner, target.period, target.offset), key: null, screen: null };
    }
    if (!pathMade.path) return null;
    const { width, height } = size();
    const view = camera();
    const key = `${viewKey(view, width, height)}|${view.position.join(",")}`;
    if (pathMade.key !== key) {
      pathMade.key = key;
      pathMade.screen = pathScreen(pathMade.path, view, width, height);
    }
    return { target, path: pathMade.path, screen: pathMade.screen };
  }

  // The selected Keyframes of the path's row on its position Lane (a closed row's pins and the position Lane's), as frames
  // of its own time base.
  function pathSelectedFrames(target) {
    return keys().filter((key) => key.row === target.row && (key.lane === null || key.lane === "position")).map((key) => key.frame);
  }

  // The Keyframe whose handles show (docs/studio-ui.md "軌道の線" "ハンドル"): the one selected Keyframe, else (not while
  // it plays) the one at the playhead; its index, or null.
  function handleKey(shown) {
    const { target, path } = shown;
    const selected = pathSelectedFrames(target).filter((frame) => path.keys.some((key) => key.frame === frame));
    if (selected.length === 1) return path.keys.find((key) => key.frame === selected[0]).index;
    if (selected.length || playing()) return null;
    const at = playhead() - target.offset;
    return path.keys.find((key) => Math.abs(key.frame - at) <= 1e-6)?.index ?? null;
  }

  // The handles on the screen of the Keyframe `index` ([{ side, offset, written, x, y }]).
  function screenHandles(shown, index) {
    if (index === null) return [];
    const { width, height } = size();
    return pathHandles(shown.path, index).flatMap((handle) => {
      const p = projectPoint(camera(), handle.tip, width, height);
      return p ? [{ ...handle, x: p.x, y: p.y }] : [];
    });
  }

  // The part of the path line under `point`: a handle, a Keyframe point, or the line (with its nearest frame), or null.
  // Handles and points only count where the order puts them (handlesFirst: the handle; else the point and the line).
  function pathPart(point, shown = pathNow(), { handles = true, rest = true } = {}) {
    if (!shown) return null;
    if (handles && shown.target.canEdit) {
      const index = handleKey(shown);
      const handle = handleUnder(screenHandles(shown, index), point);
      if (handle) return { kind: "handle", index, side: handle.side, x: handle.x, y: handle.y };
    }
    if (!rest) return null;
    const index = keyUnder(shown.screen, point);
    if (index !== null) return { kind: "point", index, frame: shown.path.keys[index].frame, ...shown.screen.keys[index] };
    if (onLine(shown.screen, point)) {
      const frame = frameNear(shown.screen, point);
      if (frame !== null) return { kind: "line", frame, x: point.x, y: point.y };
    }
    return null;
  }

  // The working copy of the path's owner in a drag's draft.
  function pathOwnerIn(draft, row) {
    return row === "camera" ? draft.camera : stickerOf(draft, row);
  }

  // A drag of the handle `part` (pathPart): it moves on the plane through its tip facing the view and writes that side
  // (path_line.js writeHandle: the other side lines up unless it is a corner).
  function handleDrag(part, shown, point) {
    const { row, period } = shown.target;
    const handle = pathHandles(shown.path, part.index).find((item) => item.side === part.side);
    const keyValue = shown.path.keys[part.index].value;
    const { width, height } = size();
    const start = dragPoint(camera(), point, width, height, handle.tip);
    if (!start) return null;
    pathDragged = { index: part.index, side: part.side };
    const copy = row === "camera" ? undefined : draftOf(row);
    return {
      move(next) {
        const now = size();
        const at = dragPoint(camera(), next, now.width, now.height, handle.tip);
        if (!at) return;
        const tip = handle.tip.map((value, axis) => value + at[axis] - start[axis]);
        edits.live((draft) => {
          const owner = pathOwnerIn(draft, row);
          if (!owner) return false;
          writeHandle(owner, part.index, part.side, tip.map((value, axis) => value - keyValue[axis]), period);
          return true;
        }, copy);
      },
      end() {
        pathDragged = null;
        edits.commit();
      },
      cancel() {
        pathDragged = null;
        edits.cancel();
      },
    };
  }

  // A press on the Keyframe point `part`: selects it (Shift adds or takes it off) and takes the playhead to it; its drag
  // moves its position on the plane through it facing the view (one Undo step). A locked one only selects.
  function pointPress(part, shown, point, { shiftKey = false } = {}) {
    const { target } = shown;
    const frame = part.frame;
    const selected = keys().filter((key) => key.row === target.row);
    const has = selected.some((key) => (key.lane === null || key.lane === "position") && key.frame === frame);
    let next = [{ row: target.row, lane: "position", frame }];
    if (shiftKey) next = has ? selected.filter((key) => key.frame !== frame || (key.lane !== null && key.lane !== "position")) : [...selected, ...next];
    else if (has) next = selected;
    selectKeys(target.row, next);
    seek(frame + target.offset);
    if (!target.canEdit || shiftKey) return selectOnly();
    const value = shown.path.keys[part.index].value;
    const { width, height } = size();
    const start = dragPoint(camera(), point, width, height, value);
    if (!start) return selectOnly();
    const { row } = target;
    const copy = row === "camera" ? undefined : draftOf(row);
    return {
      move(next) {
        const now = size();
        const at = dragPoint(camera(), next, now.width, now.height, value);
        if (!at) return;
        edits.live((draft) => {
          const owner = pathOwnerIn(draft, row);
          const key = owner?.position.keyframes[part.index];
          if (!key) return false;
          key.value = value.map((c, axis) => c + at[axis] - start[axis]);
          return true;
        }, copy);
      },
      end() {
        edits.commit();
      },
      cancel() {
        edits.cancel();
      },
    };
  }

  // A press on the line: the playhead to the frame there, following the pointer while it is held. A looping line runs
  // one period from its first Keyframe; a frame past the output's last is the same place a period earlier
  // (docs/studio-ui.md "軌道の線").
  // A period longer than the output (an upstream layer's) can put that place before the output's start, where it never
  // shows: the output's last frame then, as a span that got shorter brings the playhead back.
  function onTimeline(frame) {
    const target = pathTarget();
    const last = (length() ?? Infinity) - 1;
    if (!(frame > last)) return frame;
    const earlier = target?.period ? frame - target.period : frame;
    return earlier >= 0 && earlier <= last ? earlier : last;
  }
  function linePress(part, shown) {
    seek(onTimeline(part.frame));
    return {
      move(next) {
        const now = pathNow();
        const frame = now ? frameNear(now.screen, next) : null;
        if (frame !== null) seek(onTimeline(frame));
      },
      end() {},
      cancel() {},
    };
  }

  // A double click on a Keyframe point of the editable path line: Corner, or back to Auto from a corner, as one Undo
  // step; the point takes it (also under the gizmo's center), so it does not set the orbit center. Whether it took it.
  function doubleClick(point) {
    const shown = pathNow();
    if (!shown?.target.canEdit) return false;
    const index = keyUnder(shown.screen, point);
    if (index === null) return false;
    const { row, period } = shown.target;
    edits.live((draft) => {
      const owner = pathOwnerIn(draft, row);
      if (!owner) return false;
      togglePointCorner(owner, index, period);
      return true;
    }, row === "camera" ? undefined : draftOf(row));
    edits.commit();
    return true;
  }

  // The original path of the row Simplify is adjusting, on the screen (path_line.js pathScreen's segments), or null.
  function ghostScreen(target) {
    const ghost = simplifyGhost();
    if (!ghost?.owner || ghost.row !== target.row) return null;
    const path = pathOf(ghost.owner, target.period, target.offset);
    if (!path) return null;
    const { width, height } = size();
    return pathScreen(path, camera(), width, height).segments;
  }

  // The path line as stage_overlay.js draws it, or null.
  function pathOverlay(altHeld) {
    const shown = pathNow();
    if (!shown) return null;
    const { target, path, screen } = shown;
    const selected = new Set(pathSelectedFrames(target));
    const eased = selected.size ? easedSegments(target.owner, [...selected], target.length) : new Set();
    const hot = altHeld ? null : pathHovered;
    // A locked object's path is gray and shows no handles (docs/studio-ui.md "軌道の線").
    const locked = target.owner.locked === true;
    const index = locked ? null : handleKey(shown);
    return {
      locked,
      segments: screen.segments.map((segment) => ({ ...segment, eased: eased.has(segment.k) })),
      keys: screen.keys.map((key, i) => (key ? {
        x: key.x,
        y: key.y,
        corner: path.keys[i].type === "corner",
        selected: selected.has(path.keys[i].frame),
        hot: hot?.kind === "point" && hot.index === i,
      } : null)),
      handles: index === null || !screen.keys[index] ? [] : screenHandles(shown, index).map((handle) => ({
        x: handle.x,
        y: handle.y,
        from: screen.keys[index],
        written: handle.written,
        hot: (pathDragged ? pathDragged.index === index && pathDragged.side === handle.side : hot?.kind === "handle" && hot.side === handle.side),
      })),
      ticks: screen.frames.filter((item) => item.frame % PATH_TICK_FRAMES === 0),
      // While Simplify is adjusted, the original path stays as a faint line (docs/studio-ui.md "軌道の線").
      ghost: ghostScreen(target),
      frame: hot?.kind === "line" ? { x: hot.x, y: hot.y, frame: hot.frame } : null,
    };
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

  // The hovered gizmo handle while the shown gizmo `shownHandles` still has it under the point where it was found, else
  // null: a mode switch or the object moving under a resting pointer leaves none. The overlay draws this one, and a
  // hover compares against it.
  function hoveredHandle(shownHandles) {
    return gizmoAxis && gizmoPoint && gizmoHit(shownHandles, gizmoPoint) === gizmoAxis ? gizmoAxis : null;
  }

  // What the pointer at `point` is over: { cursor (null over nothing touchable), changed (the drawing changed) }.
  function hover(point, { altHeld = false } = {}) {
    let cursor = null;
    let stretchHint = false;
    let axis = null;
    let over = null;
    let part = null;
    const shownPath = point && !altHeld ? pathNow() : null;
    if (point && !altHeld) {
      part = pathPart(point, shownPath, { rest: false });
      if (part) cursor = "grab";
      axis = cursor === null ? gizmoHit(handles(), point) : null;
      if (axis !== null) cursor = "grab";
      const sky = editable() ? selectedSky() : null;
      if (cursor === null && sky && !sky.item.locked) {
        const handle = hitFrameAffordance(sky.geometry, point, { edges: true });
        // The edge handles of a returned shot do not stretch it: the top line says why (docs/editor-interaction.md).
        if (oneAxis(handle) && sky.handed) stretchHint = true;
        else if (handle.kind !== "none" && handle.kind !== "move") cursor = handle.cursor;
      }
      const paint = editable() ? selectedPaint() : null;
      if (cursor === null && paint && !paint.object.locked) cursor = paintHandleAt(paint, point)?.cursor ?? null;
      if (cursor === null) {
        part = pathPart(point, shownPath, { handles: false });
        if (part) cursor = part.kind === "point" && shownPath.target.canEdit ? "grab" : "pointer";
      }
      over = cursor === null ? objectUnder(point) : null;
      if (cursor === null && over) cursor = BODY_CURSOR;
      if (cursor === null && cameraMarkerHit(cameraMarker(), point)) cursor = BODY_CURSOR;
      if (cursor === null && skyObjectUnder(point)) cursor = BODY_CURSOR;
    }
    const samePart = (a, b) => (a?.kind ?? null) === (b?.kind ?? null) && a?.index === b?.index && a?.side === b?.side && a?.frame === b?.frame;
    const changed = over !== hovered || axis !== hoveredHandle(handles()) || !samePart(part, pathHovered);
    hovered = over;
    gizmoAxis = axis;
    gizmoPoint = axis !== null ? { ...point } : null;
    // The path line shows no hint on the top line (docs/studio-ui.md "軌道の線"); only a returned shot's edge handles do.
    const text = stretchHint ? STRETCH_HINT : null;
    if (text !== hintShown) hint(text);
    hintShown = text;
    pathHovered = part;
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
    const owned = row === "camera" ? null : stickerOf(state(), row);
    const ownLength = row === "camera" ? length() : lengthOf(owned);
    const base = row === "camera" ? cameraValue() : evaluateSticker(owned, frame, ownLength);
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
            setCameraLanes(draft.camera, frame, lanes, ownLength);
            return true;
          }
          const sticker = stickerOf(draft, row);
          if (!sticker) return false;
          setWorldStickerTransform(sticker, frame, lanes, ownLength);
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
  function press(point, { shiftKey = false } = {}) {
    const canEdit = editable();
    // In the Camera tab only the selected object that can be edited takes the drag; a press on another one, or on a
    // locked one, selects it and passes (the drag moves the Camera).
    const passes = (row, locked) => tab() !== "3d" && !(canEdit && row === selection() && !locked);
    const shownPath = pathNow();
    // Shift takes only a Keyframe point (it adds to the selection); anything else keeps the stage's Shift.
    if (shiftKey) {
      const part = pathPart(point, shownPath, { handles: false });
      return part?.kind === "point" ? pointPress(part, shownPath, point, { shiftKey }) : null;
    }
    const handlePart = pathPart(point, shownPath, { rest: false });
    if (handlePart) {
      const drag = handleDrag(handlePart, shownPath, point);
      if (drag) return drag;
    }
    if (canEdit) {
      const drag = gizmoDrag(point);
      if (drag) return drag;
      const sky = selectedSky();
      if (sky && !sky.item.locked) {
        const handle = hitFrameAffordance(sky.geometry, point, { edges: true });
        // An edge handle of a returned shot takes the press and moves nothing.
        if (oneAxis(handle) && sky.handed) return selectOnly();
        if (handle.kind === "scale" || oneAxis(handle) || handle.kind === "rotate") {
          return skyDrag(handle.kind, sky.item, sky.geometry, point);
        }
      }
      const paint = selectedPaint();
      const paintHandle = paint && !paint.object.locked ? paintHandleAt(paint, point) : null;
      if (paintHandle) return paintDrag(paintHandle.kind, paint.object, paint.geometry, point);
    }
    const part = pathPart(point, shownPath, { handles: false });
    if (part?.kind === "point") return pointPress(part, shownPath, point);
    if (part?.kind === "line") return linePress(part, shownPath);
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
  // The Look at marks (docs/studio-ui.md "Look at" "見ている点の印"): the point the Camera looks at, the line to it from the
  // Camera in the 3D tab, and while Pick waits the faint mark at what a click would pick (`hover`, a World point).
  function lookOverlay(hover) {
    const { width, height } = size();
    const at = (point) => (point ? projectPoint(camera(), point, width, height) : null);
    const point = lookMarkPoint(state(), playhead(), length(), content()?.lookBoxes ?? null);
    const mark = at(point);
    const from = mark && tab() === "3d" ? at(cameraValue().position) : null;
    const preview = at(hover);
    if (!mark && !preview) return null;
    return { mark: mark ? { x: mark.x, y: mark.y } : null, from: from ? { x: from.x, y: from.y } : null, preview: preview ? { x: preview.x, y: preview.y } : null };
  }

  function overlay({ altHeld = false, gridHidden = false, lookHover = null } = {}) {
    const row = selection();
    // A 3D file Sticker still loading: its guide's band of light while it loads and fades in (load_reveal.js). A guide not
    // drawn (the grid hidden and not selected) shows no band, which then does not keep the stage drawing.
    const phase = loading ? loading.phase() : 0;
    loading?.overlayDrawn?.();
    const items = guides().map((item) => {
      const look = guideLook({ selected: item.id === row, hovered: item.id === hovered, locked: item.locked, altHeld, gridHidden });
      if (loading && item.loading && look) loading.guideDrawn?.(item.id);
      const shimmer = loading && item.kind === "box" ? loading.shimmer(item.id) : 0;
      return {
        // A box leaves out its edges behind it (world_guides.js visibleBoxSegments).
        segments: item.kind === "box" ? visibleBoxSegments(item.corners, camera().position) : item.segments,
        corners: item.corners,
        look,
        // An upstream object's selected guide is dashed (docs/studio-ui.md "上流の物の編集" "見せる").
        dashed: !!item.upstream && item.id === row,
        ...(shimmer > 0 ? { shimmer, phase } : {}),
      };
    }).filter((item) => item.look);
    const marker = cameraMarker();
    const sky = selectedSky();
    const paint = selectedPaint();
    const shownGizmo = gizmo();
    const shownHandles = handles(shownGizmo);
    const { width, height } = size();
    // The handle dragged, else the one under the pointer (none while Alt is held; hoveredHandle).
    const active = draggedAxis ?? (altHeld ? null : hoveredHandle(shownHandles));
    // Its axis guide lines: those of the drag while one lasts (through where it was grabbed), else the hovered handle's.
    const shownGuides = draggedAxis ? dragGuides : gizmoGuides(shownGizmo, shownHandles, active);
    const guideLines = shownHandles ? shownGuides.flatMap((guide) => screenLines(camera(), gizmoGuideSegment(guide, camera()), width, height)
      .map((points) => ({ name: guide.name, points }))) : [];
    return {
      guides: items,
      // A guide's band runs now (StudioEditor.vue marks the overlay: data-loading-guide).
      loading: items.some((item) => item.shimmer > 0),
      camera: marker ? { screen: marker, look: row === "camera" ? "selected" : "normal" } : null,
      // The selected object's path line (docs/studio-ui.md "軌道の線").
      path: pathOverlay(altHeld),
      look: lookOverlay(lookHover),
      // The handle dragged, else the one under the pointer (none while Alt is held), is lit and the others dim
      // (gizmo_overlay.js gizmoEmphasis). While the pointer is on a handle or drags it, its axis guide lines
      // ([{ name, points }] in CSS px: an axis's one, a plane square's two) run across the stage.
      gizmo: shownHandles ? {
        handles: shownHandles,
        active,
        guides: guideLines,
      } : null,
      // A returned shot's edge handles show disabled (docs/editor-interaction.md).
      sky: sky ? { geometry: sky.geometry, handles: editable() && !sky.item.locked, locked: !!sky.item.locked, dashed: isUpstreamSticker(stickerOf(state(), sky.item.id)), edgesDisabled: sky.handed } : null,
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
    doubleClick,
    overlay,
    // The pointer left the stage, or a drag began: nothing is hovered.
    leave() {
      const changed = hovered !== null || gizmoAxis !== null || pathHovered !== null;
      hovered = null;
      gizmoAxis = null;
      if (hintShown !== null) hint(null);
      hintShown = null;
      pathHovered = null;
      return changed;
    },
  };
}
