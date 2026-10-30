// Selecting and editing the objects on the new UI's stage (docs/studio-ui.md "下の中央のバー", "Camera タブ";
// docs/space-and-view.md "マウスとキー", "World の物のガイド", "カーソル"; the press order of docs/editor-interaction.md
// "`world` の Sticker の操作"). stage.js owns the pointer and asks this module what a left press without Alt does,
// what the pointer is over, what gizmo to draw and what to draw on the overlay. It builds no DOM.
//
// A left press, in this order:
//   1. a handle of the gizmo of the selected World object or Camera (3D tab only; gizmo_overlay.js): drags it;
//   2. a handle of the selected sky image (a corner scales both FOVs, an edge one, the rotate handle the Roll);
//   3. the World object under the pointer by the GPU pick (pano_three_view.js pickSticker): selects it (its drag does
//      nothing: the gizmo moves it);
//   4. the Camera's mark (3D tab; camera_marker.js: anywhere on its filled shape or near its lines): selects the Camera;
//   5. a sky image under the pointer, front to back (the selected one's body included): selects it and its drag turns
//      it (its direction);
//   6. nothing: the stage looks around, and a press let go without moving lets the selection go.
// In the Camera tab a press only selects (steps 3 and 5 without a drag), and no gizmo or handle shows.
//
// A drag writes the object's Lanes by the recording rule (docs/timeline-ui.md "記録の規則") through `edits`:
// edits.live(apply) on each move (apply(draft) changes a copy of the state the drag started from), edits.commit() at
// the end (one Undo step when it changed something), edits.cancel() when it is given up.
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
import { cameraOf } from "./defaults.js";
import { shownGizmoMode, selectedKind } from "./selection_bar.js";
import { cameraMarkerHit, cameraMarkerLength, cameraMarkerScreen, cameraMarkerShape, cameraMarkerShown } from "./camera_marker.js";
import { gizmoDrag as startGizmoDrag, gizmoGuideSegment, gizmoHandles, gizmoHit } from "./gizmo_overlay.js";
import { guideLook, hoverGuide, pointInPolygon, screenSegment, worldGuideItems } from "./world_guides.js";

// The cursor over an object's body (hit_test.js's rule: the default arrow; handles bring their own).
const BODY_CURSOR = "default";

// The sky images drawn at the playhead as the geometry helpers read them (pano_sticker_geometry.js): their evaluated
// pose, front to back.
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
  return items.sort((a, b) => b.z_index - a.z_index);
}

// The sky image under `point`, front to back: { item, geometry } or null. Its body is inside its edge.
function skyUnder(items, projection, point) {
  for (const item of items) {
    const geometry = buildStickerGeometry(item, projection);
    if (geometry.visible && pointInPolygon(point, geometry.boundaryEdges.flat())) return { item, geometry };
  }
  return null;
}

// state(), content() (stage_content.js stageContent()), playhead(): the working state, what is drawn of it and the
// Timeline frame. camera() and size(): the stage's three.js camera (stage_view.js stageCamera()) and its CSS size.
// selection(): the selected row ("camera", a Sticker id, or null); select(row) selects (null lets go). mode(): the
// gizmo's mode. tab(): "3d" or "camera". ground(): the ground height. readOnly(): no edits. loading: load_reveal.js
// createLoadReveal()'s for the guides of 3D files just placed (their stand-in box and band), or null.
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
}) {
  let hovered = null;
  // The gizmo's handle under the pointer, and the one being dragged (gizmo_overlay.js gizmoHit's names).
  let gizmoAxis = null;
  let draggedAxis = null;
  // The axis guide line of the gizmo drag under way (gizmo_overlay.js gizmoDrag's `guide`), or null.
  let dragGuide = null;

  const editable = () => !readOnly() && tab() === "3d";

  function stickerOf(id) {
    return state().stickers.find((item) => item.id === id) ?? null;
  }

  function cameraValue() {
    const shown = cameraOf(state());
    return { ...evaluateCamera(shown, playhead()), projection: shown.projection, visible: shown.visible !== false };
  }

  function projection() {
    const { width, height } = size();
    return viewProjection(camera(), width, height);
  }

  // --- What shows.

  // The gizmo to show ({ mode, transform, center }, gizmo_overlay.js) or null: on the selected World object where it
  // shows and can be edited, or on the selected Camera, in the 3D tab. A World object's gizmo sits on its guide's center
  // (docs/studio-ui.md "ギズモ" "物の中心"; a 3D file's origin can lie far outside its content), the Camera's on its
  // position.
  function gizmo() {
    if (!editable()) return null;
    const row = selection();
    const kind = selectedKind(state(), row);
    if (kind === "camera") {
      const value = cameraValue();
      if (!value.visible) return null;
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

  // --- The CPU hover (docs/space-and-view.md "ホバーの判定"): no GPU read on a pointer move.

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
      const { width, height } = size();
      over = hoverGuide(guides(), camera(), point, width, height);
      if (cursor === null && over) cursor = BODY_CURSOR;
      if (cursor === null && cameraMarkerHit(cameraMarker(), point)) cursor = BODY_CURSOR;
      if (cursor === null && skyUnder(skyItems(state(), content()), projection(), point)) cursor = BODY_CURSOR;
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
    dragGuide = grab.guide ?? null;
    return {
      move(next) {
        const now = size();
        const moved = grab.move(camera(), next, now.width, now.height);
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
        dragGuide = null;
        edits.commit();
      },
      cancel() {
        draggedAxis = null;
        dragGuide = null;
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
          const turned = rotateStickerFromPointer(item, startAngle, Math.atan2(next.y - center.y, next.x - center.x), !!event.shiftKey);
          write({ rot_deg: turned.rot_deg });
        }
      },
      end: () => edits.commit(),
      cancel: () => edits.cancel(),
    };
  }

  // A press that selects and whose drag does nothing.
  const selectOnly = () => ({ move() {}, end() {}, cancel() {} });

  // What a left press without Alt at `point` does: a drag handler { move(point, event), end(), cancel() }, or null
  // when it touches nothing (the stage looks around; its click without a move lets the selection go).
  function press(point) {
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
    }
    const { width, height } = size();
    const picked = editorView.pickSticker(camera(), point.x, point.y, width, height);
    if (picked && stickerOf(picked)?.placement === "world") {
      select(picked);
      return selectOnly();
    }
    if (cameraMarkerHit(cameraMarker(), point)) {
      select("camera");
      return selectOnly();
    }
    const sky = skyUnder(skyItems(state(), content()), projection(), point);
    if (sky) {
      select(sky.item.id);
      return canEdit && !sky.item.locked ? skyDrag("move", sky.item, sky.geometry, point) : selectOnly();
    }
    return null;
  }

  // --- The overlay (stage_overlay.js draws it): the guides with their looks, the Camera's mark with its look, the
  // gizmo's handles with the one lit, the selected sky image's frame and handles.
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
    const shownHandles = handles();
    const { width, height } = size();
    const guideLine = shownHandles && dragGuide ? screenSegment(camera(), gizmoGuideSegment(dragGuide, camera()), width, height) : null;
    return {
      guides: items,
      // A guide's band runs now (StudioEditor.vue marks the overlay: data-loading-guide).
      loading: items.some((item) => item.shimmer > 0),
      camera: marker ? { screen: marker, look: row === "camera" ? "selected" : "normal" } : null,
      // The handle dragged, else the one under the pointer (none while Alt is held), is lit.
      // While an axis handle is dragged, its guide line ({ name, a, b } in CSS px) runs across the stage.
      gizmo: shownHandles ? {
        handles: shownHandles,
        active: draggedAxis ?? (altHeld ? null : gizmoAxis),
        guide: guideLine ? { name: dragGuide.name, a: guideLine[0], b: guideLine[1] } : null,
      } : null,
      sky: sky ? { geometry: sky.geometry, handles: editable() && !sky.item.locked } : null,
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
