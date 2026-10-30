// Selecting and editing the objects on the new UI's stage (docs/studio-ui.md "下の中央のバー", "Camera タブ";
// docs/space-and-view.md "マウスとキー", "World の物のガイド", "カーソル"; the press order of docs/editor-interaction.md
// "`world` の Sticker の操作"). stage.js owns the pointer and asks this module what a left press without Alt does,
// what the pointer is over, what gizmo to draw and what to draw on the overlay. It builds no DOM.
//
// A left press, in this order:
//   1. a handle of the gizmo of the selected World object or Camera (3D tab only): drags it;
//   2. a handle of the selected sky image (a corner scales both FOVs, an edge one, the rotate handle the Roll);
//   3. the World object under the pointer by the GPU pick (pano_three_view.js pickSticker): selects it (its drag does
//      nothing: the gizmo moves it);
//   4. a line of the Camera's mark (3D tab; pano_space.js segmentsHit): selects the Camera;
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
import { gizmoDragLanes, sceneTransform, segmentsHit } from "../pano_space.js";
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
import { eyeHeight, eyeLengths } from "./view_scale.js";
import { CAMERA_HIT_PIXELS, cameraGuideSegments, guideLook, hoverGuide, pointInPolygon, worldGuideItems } from "./world_guides.js";

// The gizmo's colors (docs/design.md "新しい UI の見た目": X coral, Y lime, Z ice), the handle under the pointer white.
export const GIZMO_COLORS = Object.freeze({ x: "#f37159", y: "#d6e797", z: "#aecedb", active: "#ffffff" });

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
// gizmo's mode. tab(): "3d" or "camera". ground(): the ground height. readOnly(): no edits.
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
}) {
  let hovered = null;
  let gizmoAxis = null;

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

  // The gizmo to draw ({ mode, transform, colors }) or null: on the selected World object where it shows and can be
  // edited, or on the selected Camera, in the 3D tab.
  function gizmo() {
    if (!editable()) return null;
    const row = selection();
    const kind = selectedKind(state(), row);
    if (kind === "camera") {
      const value = cameraValue();
      if (!value.visible) return null;
      return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform({ ...value, scale: 1 }), colors: GIZMO_COLORS };
    }
    if (kind !== "world-image" && kind !== "world-3d") return null;
    const sticker = stickerOf(row);
    const value = content()?.evaluated.stickers.find((item) => item.id === row);
    if (!sticker || sticker.locked || !value?.active) return null;
    return { mode: shownGizmoMode(kind, mode()), transform: sceneTransform(value), colors: GIZMO_COLORS };
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
    return worldGuideItems(state(), content(), (url) => editorView.sceneBox(url));
  }

  // The Camera's mark, or null while it is hidden or while the view stands inside it (the view opens at the Camera's
  // position: its mark would then wrap the view and catch every press).
  function cameraSegments() {
    const value = cameraValue();
    if (!value.visible) return null;
    const { CAMERA_GUIDE_LENGTH } = eyeLengths(eyeHeight(ground()));
    const from = camera().position;
    if (Math.hypot(...value.position.map((v, axis) => v - from[axis])) < CAMERA_GUIDE_LENGTH) return null;
    return cameraGuideSegments(value, value.projection, ground());
  }

  // --- The CPU hover (docs/space-and-view.md "ホバーの判定"): no GPU read on a pointer move.

  function gizmoPointer(phase, point) {
    const { width, height } = size();
    return editorView.gizmoPointer(phase, camera(), point.x, point.y, width, height);
  }

  // What the pointer at `point` is over: { cursor (null over nothing touchable), changed (the drawing changed) }.
  function hover(point, { altHeld = false } = {}) {
    let cursor = null;
    let axis = null;
    let over = null;
    if (point && !altHeld) {
      if (gizmo()) axis = gizmoPointer("hover", point);
      if (axis !== null) cursor = "grab";
      const sky = editable() ? selectedSky() : null;
      if (cursor === null && sky && !sky.item.locked) {
        const handle = hitFrameAffordance(sky.geometry, point, { edges: true });
        if (handle.kind !== "none" && handle.kind !== "move") cursor = handle.cursor;
      }
      const { width, height } = size();
      over = hoverGuide(guides(), camera(), point, width, height);
      if (cursor === null && over) cursor = BODY_CURSOR;
      if (cursor === null && tab() === "3d") {
        const segments = cameraSegments();
        if (segments && segmentsHit(camera(), segments, point, width, height, CAMERA_HIT_PIXELS)) cursor = BODY_CURSOR;
      }
      if (cursor === null && skyUnder(skyItems(state(), content()), projection(), point)) cursor = BODY_CURSOR;
    }
    const changed = over !== hovered || axis !== gizmoAxis;
    hovered = over;
    gizmoAxis = axis;
    return { cursor, changed };
  }

  // --- Presses.

  // A drag of the gizmo: the Lane of its mode (gizmoDragLanes), on the World object or the Camera.
  function gizmoDrag(point) {
    const shown = gizmo();
    if (!shown || gizmoPointer("hover", point) === null || !gizmoPointer("down", point)) return null;
    const row = selection();
    const frame = playhead();
    const base = row === "camera" ? cameraValue() : evaluateSticker(stickerOf(row), frame);
    return {
      move(next) {
        const moved = gizmoPointer("move", next);
        if (!moved) return;
        const lanes = gizmoDragLanes(shown.mode, base, shown.transform, moved);
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
        gizmoPointer("up", point);
        edits.commit();
      },
      cancel() {
        gizmoPointer("up", point);
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
    if (tab() === "3d") {
      const segments = cameraSegments();
      if (segments && segmentsHit(camera(), segments, point, width, height, CAMERA_HIT_PIXELS)) {
        select("camera");
        return selectOnly();
      }
    }
    const sky = skyUnder(skyItems(state(), content()), projection(), point);
    if (sky) {
      select(sky.item.id);
      return canEdit && !sky.item.locked ? skyDrag("move", sky.item, sky.geometry, point) : selectOnly();
    }
    return null;
  }

  // --- The overlay (stage_overlay.js draws it): the guides with their looks, the Camera's mark, the selected sky
  // image's frame and handles.
  function overlay({ altHeld = false, gridHidden = false } = {}) {
    const row = selection();
    const shownTab = tab();
    const items = guides().map((item) => ({
      segments: item.segments,
      look: guideLook({ selected: item.id === row, hovered: item.id === hovered, locked: item.locked, altHeld, gridHidden, tab: shownTab }),
    })).filter((item) => item.look);
    const segments = shownTab === "3d" ? cameraSegments() : null;
    const cameraLook = segments ? guideLook({ selected: row === "camera", altHeld, gridHidden: false, tab: shownTab }) : null;
    const sky = selectedSky();
    return {
      guides: items,
      camera: segments && cameraLook ? { segments, look: cameraLook } : null,
      sky: sky ? { geometry: sky.geometry, handles: editable() && !sky.item.locked } : null,
    };
  }

  return {
    gizmo,
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
