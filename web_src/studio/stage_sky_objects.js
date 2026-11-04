// The sky images on the new UI's stage (docs/studio-ui.md "ペイントのまとまり" "押したときの順" 5, "上流の物の編集"): the
// sky images as the geometry helpers read them, the node's own Sky objects in the order a press hits them, and the drag
// of a sky image (stage_objects.js asks for them). It builds no DOM.
import { mediaSize } from "../pano_editor_view.js";
import { setStickerPose, skyStickerVfov } from "../pano_editor_state.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import { upstreamStickerLocked } from "../pano_upstream.js";
import {
  moveStickerToScreenPoint,
  rotateStickerFromPointer,
  scaleStickerAxisFromPointer,
  scaleStickerFromPointer,
} from "../pano_sticker_geometry.js";
import { paintObjectRowOf } from "../pano_paint_objects.js";
import { paintIndex } from "./stage_paint_objects.js";
import { ROTATE_SNAP_DEG } from "./view_scale.js";

// A sky image as the geometry helpers read it (pano_sticker_geometry.js) from its evaluated pose `value`.
function skyItem(sticker, value) {
  return {
    id: sticker.id,
    yaw_deg: value.yaw_deg,
    pitch_deg: value.pitch_deg,
    rot_deg: value.roll_deg,
    hFOV_deg: value.hFOV_deg,
    vFOV_deg: value.vFOV_deg,
    curve: value.curve,
    z_index: Number(sticker.z_index || 0),
    locked: upstreamStickerLocked(sticker),
  };
}

// The upstream sky images drawn at `frame` as the geometry helpers read them, in the order a press hits them
// (docs/studio-ui.md "上流の物の編集" "選ぶ"): from the downstream layer, in a layer from the front (the larger z_index,
// a tie the later one, as drawn). Each pose is its working copy's at the frame, its vFOV as drawn (a port Sticker's
// follows its media). `upstream` is the working layers (farthest first).
export function upstreamSkyItems(upstream, content, frame) {
  if (!content || !upstream.length) return [];
  const drawn = new Map(content.layers.filter((layer) => layer.kind === "sticker").map((layer) => [layer.id, layer]));
  return [...upstream].reverse().flatMap((layer) => layer.sceneState.stickers
    .map((sticker, index) => ({ sticker, index }))
    .filter(({ sticker }) => sticker.placement === "sky" && drawn.has(sticker.id))
    .sort((a, b) => Number(b.sticker.z_index || 0) - Number(a.sticker.z_index || 0) || b.index - a.index)
    .map(({ sticker }) => {
      const value = evaluateSticker(sticker, frame);
      return skyItem(sticker, { ...value, vFOV_deg: skyStickerVfov(sticker, value, mediaSize(drawn.get(sticker.id).media)) });
    }));
}

// The sky images drawn at the playhead as the geometry helpers read them (pano_sticker_geometry.js): their evaluated
// pose, in list order.
export function skyItems(state, content) {
  if (!content) return [];
  const drawn = new Set(content.layers.filter((layer) => layer.kind === "sticker").map((layer) => layer.id));
  const items = [];
  state.stickers.forEach((sticker, index) => {
    if (sticker.placement !== "sky" || !drawn.has(sticker.id)) return;
    items.push(skyItem(sticker, content.evaluated.stickers[index]));
  });
  return items;
}

// The node's own Sky objects as drawn, front to back (docs/studio-ui.md "ペイントのまとまり" "押したときの順" 5): the sky
// images and the paint groups (paintIndex) by the order they are drawn (pano_editor_view.js skyLayers over
// pano_paint_layers.js skyPaintLayers: by z_index, a paint group's truncated as drawn, ties the sky images, then the
// stroke groups, then the raster objects, each in list order), reversed. Each is { kind: "sky", row, item } or
// { kind: "group" | "raster", id, row, item, locked }. The upstream sky images (upstreamSkyItems, at `frame` of the
// working layers `upstream`) lie under the node's own Sky and come after them.
export function skyObjects(state, content, upstream = [], frame = 0) {
  const entries = skyItems(state, content).map((item) => ({ kind: "sky", row: item.id, item, zIndex: item.z_index }));
  const index = paintIndex(state);
  for (const [id, { group }] of index.groups) {
    entries.push({ kind: "group", id, row: paintObjectRowOf("group", id), item: group, locked: group.locked === true, zIndex: Math.trunc(Number(group.z_index) || 0) });
  }
  for (const item of index.rasters) {
    entries.push({ kind: "raster", id: item.id, row: paintObjectRowOf("raster", item.id), item, locked: item.locked === true, zIndex: Math.trunc(Number(item.z_index) || 0) });
  }
  const own = entries.map((entry, order) => ({ entry, order }))
    .sort((a, b) => b.entry.zIndex - a.entry.zIndex || b.order - a.order)
    .map(({ entry }) => entry);
  return [...own, ...upstreamSkyItems(upstream, content, frame).map((item) => ({ kind: "sky", row: item.id, item }))];
}

// The drag of a sky image (stage_objects.js createStageObjects): playhead() is the Timeline frame, projection() the
// stage's view now (pano_editor_view.js viewProjection), edits the stage's edits, draftOf(id) and stickerOf(scene, id)
// stage_objects.js's.
export function createSkyDrag({ playhead, projection, edits, draftOf, stickerOf }) {
  // A drag of a sky image: `kind` "move" (its direction follows the pointer), "scale" (both FOVs), "scale_x" /
  // "scale_y" (one), "rotate" (the Roll), from `geometry` and `item` where it started.
  function skyDrag(kind, item, geometry, point) {
    const frame = playhead();
    const center = geometry.center;
    const offset = { x: point.x - center.x, y: point.y - center.y };
    const startDistance = Math.max(1, Math.hypot(point.x - center.x, point.y - center.y));
    const startAngle = Math.atan2(point.y - center.y, point.x - center.x);
    const copy = draftOf(item.id);
    const write = (pose) => edits.live((draft) => {
      const sticker = stickerOf(draft, item.id);
      if (!sticker) return false;
      setStickerPose(sticker, frame, pose);
      return true;
    }, copy);
    return {
      move(next, event = {}) {
        if (kind === "move") {
          const moved = moveStickerToScreenPoint(item, { x: next.x - offset.x, y: next.y - offset.y }, projection());
          // Past a lens Camera's limit there is no ray: the image stays where it was last.
          if (!moved) return;
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

  return skyDrag;
}
