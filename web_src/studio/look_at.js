// The Camera's Look at in the new UI (docs/studio-ui.md "Look at"; the rules: docs/scene-state-v2.md "Look at", ADR
// 0065): the content boxes the evaluation reads, the target picked on the stage as the share of a box, the point the
// mark shows, what the inspector and the bar say. Pure: the state in, values out.
import { clipFrame, evaluateLane, laneSegment, laneView, lookAtPoint, ownerPeriod } from "../pano_scene_eval.js";
import { is3dFileSource, lookAtOn } from "../pano_scene_state.js";
import { setLaneTarget } from "../pano_timeline.js";
import { worldRotation } from "../pano_world.js";
import { cropEmpty } from "../space/bounds.js";
import { objectLabel } from "./timeline_model.js";

// The ids of the Stickers the Camera's Look at Lane points at, its value's and its Keyframes'.
export function lookAtTargets(camera) {
  const lane = camera?.look_at;
  if (!lane) return [];
  return [...new Set([lane.value, ...lane.keyframes.map((key) => key.value)].filter((target) => target?.sticker).map((target) => target.sticker))];
}

// The content boxes ({ center, size }, the Sticker's own glTF frame before its turn and scale) of the Stickers the
// Camera looks at, by id (docs/scene-state-v2.md "Look at" "中身の箱"): a 3D content's box (`content(sticker)`, a box
// { min, max } once loaded, else null), an image plane centered, 1 wide and as tall as its cropped image (`image(sticker)`,
// its size { width, height } px once known, else null). One not known yet is left out: its point is its position
// until it loads.
export function lookAtBoxes(state, { image = () => null, content = () => null } = {}, ids = lookAtTargets(state.camera)) {
  const boxes = {};
  for (const id of ids) {
    const sticker = state.stickers.find((item) => item.id === id);
    if (!sticker || sticker.placement !== "world") continue;
    const box = content(sticker);
    if (box) {
      boxes[id] = { center: box.min.map((low, axis) => (low + box.max[axis]) / 2), size: box.min.map((low, axis) => box.max[axis] - low) };
      continue;
    }
    if (is3dFileSource(sticker.source)) continue;
    const size = image(sticker);
    const { crop } = sticker;
    const width = size ? size.width * (crop.x1 - crop.x0) : 0;
    // An empty crop draws no plane and has no box: its point is the Sticker's position.
    if (width > 0 && !cropEmpty(crop)) boxes[id] = { center: [0, 0, 0], size: [1, size.height * (crop.y1 - crop.y0) / width, 0] };
  }
  return boxes;
}

// The target a press at the World `point` on the World Sticker `sticker` picks (docs/studio-ui.md "Look at" "Pick"): the
// point as the share of its content box (`box`, or none: zero) from the box's center, before the Sticker's turn and scale
// at the Timeline frame `frame`. `length` is the output length.
export function pickedTarget(sticker, point, frame, box, length = null) {
  const period = ownerPeriod(sticker, length);
  const own = clipFrame(sticker.clip, frame);
  const position = evaluateLane(sticker, "position", own, period);
  const rotation = evaluateLane(sticker, "rotation", own, period);
  const scale = Math.max(1e-6, evaluateLane(sticker, "scale", own, period));
  const turn = worldRotation(rotation.yaw_deg, rotation.pitch_deg, rotation.roll_deg);
  const d = point.map((value, axis) => value - position[axis]);
  // The turn is a rotation: its transpose undoes it.
  const local = [0, 1, 2].map((axis) => (turn[0][axis] * d[0] + turn[1][axis] * d[1] + turn[2][axis] * d[2]) / scale);
  const center = box?.center ?? [0, 0, 0];
  const size = box?.size ?? [0, 0, 0];
  const offset = local.map((value, axis) => (size[axis] > 1e-9 ? (value - center[axis]) / size[axis] : 0));
  return { sticker: sticker.id, offset };
}

// The World point the Camera looks at the Timeline frame `frame`, the mark's (docs/studio-ui.md "Look at" "見ている点の
// 印"), or null without a target: the target of the Look at Lane there (the one a segment starts from).
export function lookMarkPoint(state, frame, length = null, boxes = null) {
  return lookAtPoint(state.camera, frame, length, { stickers: state.stickers, boxes });
}

// The name the inspector shows for the Camera's target now, or null without one: the Sticker's row name, a point's
// "Point".
export function lookTargetName(state, frame, length = null) {
  const camera = state.camera;
  if (!lookAtOn(camera.look_at)) return null;
  const target = evaluateLane(camera, "look_at", frame, ownerPeriod(camera, length));
  if (!target) return null;
  if (target.point) return "Point";
  // A Sticker that is gone (kept in the Lane for Undo) or sky is no target (docs/scene-state-v2.md "Look at" "相手の位置").
  const sticker = state.stickers.find((item) => item.id === target.sticker);
  return sticker && sticker.placement === "world" ? objectLabel(sticker) : null;
}

// Whether the Camera looks at a target now (its Look at Lane has a target at the frame).
export function lookingAt(state, frame, length = null) {
  return lookTargetName(state, frame, length) !== null;
}

// Whether the Timeline frame `frame` is inside a segment of the Look at Lane between two different targets, where the
// Camera tab's drag and wheel stop (docs/studio-ui.md "Look at").
export function lookSwitching(camera, frame, length = null) {
  const keys = camera?.look_at?.keyframes ?? [];
  if (keys.length < 2) return false;
  // The segment the frame is in, read as the evaluation reads it (a looping Camera's last one runs back to the first).
  const view = laneView(keys, ownerPeriod(camera, length));
  const at = laneSegment(view, frame);
  if (at.key !== undefined) return false;
  return JSON.stringify(view.at(at.k).value) !== JSON.stringify(view.at(at.k + 1).value);
}

// The target the Camera's Look at shows at the Timeline frame `frame`, where it is kept: { index: null, target } for the
// Lane's value (no Keyframes), else { index, target } of the Keyframe it comes from (the one at the frame, or the one
// its segment starts from). Targets do not move as numbers, so an edit of the shown one changes that one.
export function shownLookTarget(camera, frame, length = null) {
  const lane = camera.look_at;
  const keys = lane.keyframes;
  if (!keys.length) return { index: null, target: lane.value };
  const at = laneSegment(laneView(keys, ownerPeriod(camera, length)), frame);
  const index = ((((at.key ?? at.k) % keys.length) + keys.length) % keys.length);
  return { index, target: keys[index].value };
}

// Writes `target` (a Look at target or null) as the Camera's at the Timeline frame `frame` by the recording rule
// (pano_timeline.js setLaneTarget: the Lane's value without Keyframes, else the Keyframe there, added when missing).
// Returns whether it changed.
export function writeLookTarget(camera, frame, target, length = null) {
  const before = JSON.stringify(camera.look_at);
  setLaneTarget(camera, "look_at", frame, target === null ? null : structuredClone(target), length);
  return JSON.stringify(camera.look_at) !== before;
}

// Writes the offset `offset` ([x, y, z], each a share of the content box) of the target the Camera's Look at shows at
// the Timeline frame `frame` (shownLookTarget), when it is a Sticker, by the recording rule (writeLookTarget). Returns
// whether it changed.
export function setLookOffset(camera, frame, offset, length = null) {
  const { target } = shownLookTarget(camera, frame, length);
  if (!target?.sticker || offset.some((value) => !Number.isFinite(value))) return false;
  return writeLookTarget(camera, frame, { sticker: target.sticker, offset: [...offset] }, length);
}
