// Add and the drop on the new UI's stage (docs/studio-ui.md "Add とドロップの見せ方", docs/space-and-view.md "Add と
// ドロップ"): a file picked with Add or dropped on the stage becomes a Sticker. An image picked with Add waits for the
// Sky / World choice; a dropped one goes where the drop point lands; a 3D file always goes into the World. While a file
// is dragged over the stage, the mark of where it would land shows (landing.js dropMarker).
//
// A placed object goes into the session at once, selected (session.js addPlaced); its file uploads to ComfyUI's input
// (pano_sticker_file_import.js, the node's documented I/O) and placing becomes one Undo step when it has
// (settlePlaced); a failure takes it away with no step (dropPlaced) and says why on the top-center line. An image
// shows from the decoded file while it uploads (media()); a 3D file shows nothing until its route's editor file draws
// (docs/editor-interaction.md "3D ファイルを置く流れ"), and the line says it is loading meanwhile.
//
// The placements still uploading are the node's (`pending`, shared by the node's editors): an editor closed while one
// uploads keeps it until it ends and then writes it (late()), unless the node's editor was opened again meanwhile,
// which takes it over when it is made (docs/studio-ui.md "Add とドロップの見せ方"). The upload settles or drops it
// in whichever editor holds it then (`owner`).
//
// No DOM here: drop_input.js takes the drag events, StudioPlaceChoice.vue and StudioDropMarker.vue show `ui`.
import { fileSource, newSceneSticker, newWorldSceneSticker } from "../pano_editor_state.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import {
  decodeStickerImageFile,
  file3dTooLargeMessage,
  isSticker3dFile,
  isStickerImageFile,
  uploadStickerAssetFile,
  uploadWorld3dFile,
} from "../pano_sticker_file_import.js";
import { dropMarker, file3dPosition, file3dTransform, groundBelow, groundLanding, landingBoxes, landingHit, skyPose, worldImageTransform } from "./landing.js";
import { stageRay } from "./stage_view.js";

// The texts of the top-center line (docs/studio-ui.md "Add とドロップの見せ方").
export const ADD_TEXT = Object.freeze({
  loading3d: "Loading 3D model…",
  noGround: "There is no ground to place it on",
  unreadable: (name) => `Could not read ${name}`,
  uploadFailed: (name, why) => `Could not upload ${name} (${why})`,
});

// How often the line checks whether a placed 3D file has drawn (ms).
const DRAWN_POLL_MS = 150;

// The file of `files` to place: the first image, else the first 3D file, else null (docs/studio-ui.md "Add とドロップの
// 見せ方": as the old UI).
export function fileToPlace(files) {
  const list = Array.from(files ?? []);
  return list.find((file) => isStickerImageFile(file)) ?? list.find((file) => isSticker3dFile(file)) ?? null;
}

// The kind of mark for a drag's items (DataTransferItemList or an array of { kind, type }): "image" when its first file
// item's type is an image's, else "3d" (names cannot be read while dragging). null without a file item.
export function dragKind(items) {
  const item = Array.from(items ?? []).find((entry) => entry?.kind === "file");
  if (!item) return null;
  return String(item.type || "").toLowerCase().startsWith("image/") ? "image" : "3d";
}

// session: session.js's. ui: the editor's reactive report, whose fields this writes: `choice` (null or { name }: the
// Sky / World choice shows), `drop` (null or the drag's mark: dropMarker()'s with `sky`, the `pointer` { x, y } and the
// `stage` { width, height }), `adding` (a placed
// 3D file is loading) and `addWarning` (the last failure's text, or null).
// view(): what the stage gives (stage.js `landing`: camera(), size(), pose(), bound(), pick(point)), null before it is
// made. ground(): the ground height. content(), sceneBox(url): the content at the playhead (stage_content.js) and a loaded
// item's box. playhead(): the Timeline frame.
// uploadImage(file), upload3d(file): the uploads (default: ComfyUI's /upload/image through `fetchApi`). route(source):
// the 3D file route's answer once it came (stage_content.js createStageMedia().request). decode(file): the image's
// { image, width, height }. queue(id, operation): runs the upload so a queued prompt waits for it
// (pano_editor_extension.js queuePendingStickerOperation). changed(): the state or `ui` changed (the editor syncs).
// stopPlayback(), notice(text): the playback stops; a stopped notice shows. late(): a placement was settled after the
// editor closed and no editor took it over (the editor writes it). pending: the node's placements still uploading
// (a Set the node's editors share, pano_node_bridge.js editorSession(node).placements); the ones of a closed editor
// are taken over here. reveal: load_reveal.js createLoadReveal()'s, told what is placed and its box.
// The shell may leave it out; then nothing is told.
export function createAddFiles({
  session,
  ui,
  view = () => null,
  ground = () => 0,
  content = () => null,
  sceneBox = () => null,
  playhead = () => 0,
  fetchApi = null,
  uploadImage = (file) => uploadStickerAssetFile(file, { fetchApi }),
  upload3d = (file) => uploadWorld3dFile(file, { fetchApi }),
  route = async () => ({ state: "failed", error: "The 3D file route is not available." }),
  decode = (file) => decodeStickerImageFile(file),
  queue = (id, operation) => operation(),
  changed = () => {},
  stopPlayback = () => {},
  notice = () => {},
  late = () => {},
  reveal = null,
  timers = { set: (fn, ms) => setTimeout(fn, ms), clear: (id) => clearTimeout(id) },
  pending = new Set(),
}) {
  let closed = false;
  // The decoded images of placed images by Sticker id, drawn until the uploaded file has loaded.
  const local = new Map();
  // The image waiting for the Sky / World choice: { file, decoded }.
  let waiting = null;
  // The placed 3D files whose item has not drawn yet, and the poll that watches them.
  const loading = new Set();
  let poll = 0;

  function update() {
    if (closed) late();
    else changed();
  }

  function warn(text) {
    ui.addWarning = text;
    update();
  }

  // --- Where the view's rays land.

  function landingView() {
    const stage = view();
    if (!stage) return null;
    const pose = stage.pose();
    return { stage, camera: stage.camera(), size: stage.size(), pose, radius: stage.bound(), ground: ground() };
  }

  function rayAt(v, point) {
    return stageRay(v.camera, point.x, point.y, v.size.width, v.size.height);
  }

  const centerOf = (v) => ({ x: v.size.width / 2, y: v.size.height / 2 });

  // The surface hit through `point` with the GPU pick (the drop, Add), inside the bound, or null.
  function pickedHit(v, point, ray) {
    return landingHit(ray, { ground: v.ground, picked: v.stage.pick(point), radius: v.radius });
  }

  // --- Placing.

  const blank = () => ({ kind: "file", filename: "" });

  function frontZ(state) {
    return Math.max(0, ...state.stickers.filter((item) => item.placement === "sky").map((item) => Number(item.z_index || 0))) + 1;
  }

  // An image placed as `place` ({ placement: "sky", pose } or { placement: "world", transform }).
  function placeImage(file, decoded, place) {
    ui.addWarning = null;
    stopPlayback();
    const id = session.addPlaced((newId, draft) => (place.placement === "sky"
      ? newSceneSticker(newId, blank(), place.pose, frontZ(draft))
      : newWorldSceneSticker(newId, blank(), place.transform)));
    if (!id) return null;
    local.set(id, decoded);
    const placement = track(id, "image", decoded);
    update();
    const done = queue(`add:${id}`, async () => {
      let uploaded;
      try {
        uploaded = await uploadImage(file);
      } catch (error) {
        finish(placement).fail(placement, ADD_TEXT.uploadFailed(file.name, error?.message || error));
        return;
      }
      finish(placement).settle(placement, (sticker) => {
        sticker.source = fileSource(uploaded);
      });
    });
    return { id, done };
  }

  // A 3D file landing at `point`, seen from `eye` (docs/space-and-view.md "3D ファイル").
  function place3d(file, point, v) {
    ui.addWarning = null;
    const tooLarge = file3dTooLargeMessage(file);
    if (tooLarge) {
      warn(tooLarge);
      return null;
    }
    stopPlayback();
    const transform = file3dTransform(point, { eye: v.camera.position, viewYaw: v.pose.yaw_deg });
    const id = session.addPlaced((newId) => newWorldSceneSticker(newId, blank(), transform));
    if (!id) return null;
    reveal?.start(id);
    loading.add(id);
    syncLoading();
    const placement = track(id, "3d", null);
    update();
    const done = queue(`add:${id}`, async () => {
      let source;
      let answer;
      try {
        source = await upload3d(file);
        answer = await route(source);
        if (answer?.state !== "ready") throw new Error(answer?.error || `Could not read the 3D file ${file.name}.`);
      } catch (error) {
        finish(placement).fail(placement, String(error?.message || error));
        return;
      }
      const owner = finish(placement);
      owner.box(placement, answer.box);
      owner.settle(placement, (sticker, frame) => {
        sticker.source = source;
        // The place follows the box unless it was moved or keyed while it uploaded.
        const lane = sticker.position;
        const untouched = !lane.keyframes.length && lane.value.every((value, axis) => value === transform.position[axis]);
        if (!untouched) return;
        const position = file3dPosition(point, answer.box, evaluateSticker(sticker, frame));
        if (position) lane.value = position;
      });
    });
    return { id, done };
  }

  // --- The node's placements still uploading, and the editor that holds each (docs/studio-ui.md "Add とドロップの見せ方").

  // What the upload of a placement held here does when it ends.
  const owner = {
    closed: () => closed,
    // The placed Sticker as this editor has it now, or null when it is gone.
    sticker: (placement) => session.state.stickers.find((item) => item.id === placement.id) ?? null,
    // The upload ended: apply(sticker, playhead) completes the Sticker (session.js settlePlaced).
    settle(placement, apply) {
      const settled = session.settlePlaced(placement.id, (sticker) => apply(sticker, playhead()));
      if (!settled) loading.delete(placement.id);
      syncLoading();
      update();
      return settled;
    },
    // The upload failed: the placed object goes, with no step, and the line says why.
    fail(placement, text) {
      loading.delete(placement.id);
      reveal?.drop(placement.id);
      syncLoading();
      session.dropPlaced(placement.id);
      warn(text);
    },
    box: (placement, box) => reveal?.box(placement.id, box),
  };

  // A placement of this editor: { id, kind ("image" or "3d"), decoded (an image's decoded file), owner }.
  function track(id, kind, decoded) {
    const placement = { id, kind, decoded, owner };
    pending.add(placement);
    return placement;
  }

  // The upload of `placement` ended: it is no longer pending. Returns the editor that holds it now.
  function finish(placement) {
    pending.delete(placement);
    return placement.owner;
  }

  // A placement of an editor of the node closed while it uploaded comes here, as that editor left it.
  function adopt(placement) {
    if (session.readOnly || placement.owner === owner || !placement.owner.closed()) return;
    const sticker = placement.owner.sticker(placement);
    if (!sticker) return;
    const id = session.adoptPlaced(sticker);
    if (!id) return;
    placement.id = id;
    placement.owner = owner;
    if (placement.decoded) local.set(id, placement.decoded);
    if (placement.kind === "3d") {
      reveal?.start(id);
      loading.add(id);
    }
  }

  // --- The line while a placed 3D file loads: until its item has drawn, it is gone, or it is not shown at the playhead.

  function drawnOrGone(id) {
    const sticker = session.state.stickers.find((item) => item.id === id);
    if (!sticker) return true;
    // Its upload has not answered yet.
    if (!sticker.source.filename) return false;
    const request = content()?.space?.fileStickers?.find((item) => item.id === id);
    return !request || !!sceneBox(request.url);
  }

  function syncLoading() {
    for (const id of [...loading]) if (drawnOrGone(id)) loading.delete(id);
    const adding = loading.size > 0;
    if (ui.adding !== adding) ui.adding = adding;
    if (adding && !poll && !closed) {
      poll = timers.set(() => {
        poll = 0;
        const before = loading.size;
        syncLoading();
        if (loading.size !== before) update();
      }, DRAWN_POLL_MS);
    }
  }

  for (const placement of [...pending]) adopt(placement);
  syncLoading();

  // --- The Sky / World choice of an image picked with Add.

  function cancelChoice() {
    if (!waiting) return false;
    waiting = null;
    ui.choice = null;
    update();
    return true;
  }

  // Sky or World pressed: the image goes along the screen center's ray as that placement (docs/space-and-view.md
  // "Add とドロップ").
  function choose(placement) {
    if (!waiting) return null;
    const { file, decoded } = waiting;
    waiting = null;
    ui.choice = null;
    const v = landingView();
    if (!v) {
      update();
      return null;
    }
    const center = centerOf(v);
    const ray = rayAt(v, center);
    if (placement === "sky") return placeImage(file, decoded, { placement: "sky", pose: skyPose(ray.direction, decoded) });
    const point = pickedHit(v, center, ray) ?? groundBelow(v.pose.target, v.ground);
    return placeImage(file, decoded, { placement: "world", transform: worldImageTransform(point, { ground: v.ground, eye: v.camera.position, size: decoded, viewYaw: v.pose.yaw_deg }) });
  }

  // Files picked with Add: an image waits for the choice once it has loaded; a 3D file goes into the World along the
  // screen center's ray, or on the ground below T without a hit.
  async function pick(files) {
    if (session.readOnly || closed) return null;
    cancelChoice();
    const file = fileToPlace(files);
    if (!file) return null;
    if (isSticker3dFile(file) && !isStickerImageFile(file)) {
      const v = landingView();
      if (!v) return null;
      const center = centerOf(v);
      const point = pickedHit(v, center, rayAt(v, center)) ?? groundBelow(v.pose.target, v.ground);
      return place3d(file, point, v);
    }
    let decoded;
    try {
      decoded = await decode(file);
    } catch {
      warn(ADD_TEXT.unreadable(file.name));
      return null;
    }
    if (closed) return null;
    waiting = { file, decoded };
    ui.addWarning = null;
    ui.choice = { name: String(file.name || "") };
    update();
    return null;
  }

  // --- The drag over the stage.

  // A file is dragged over the stage at `point` (CSS px of the stage); `kind` dragKind()'s. The choice closes; the
  // mark of where it lands shows (the CPU hit: the ground and the 3D Stickers' boxes).
  function dragOver(point, kind) {
    if (session.readOnly || closed || !kind) return;
    if (waiting) cancelChoice();
    const v = landingView();
    if (!v) return;
    const ray = rayAt(v, point);
    const hit = landingHit(ray, { ground: v.ground, boxes: landingBoxes(content(), sceneBox), radius: v.radius });
    const mark = dropMarker({ kind, ray, hit, camera: v.camera, width: v.size.width, height: v.size.height, ground: v.ground, radius: v.radius, viewYaw: v.pose.yaw_deg });
    // The label's place is worked out where its size is known (StudioDropMarker.vue, landing.js dropLabelPlace).
    ui.drop = mark ? { ...mark, sky: mark.placement === "sky", pointer: { ...point }, stage: { ...v.size } } : null;
  }

  // The drag left the stage, or ended elsewhere.
  function dragLeave() {
    if (ui.drop) ui.drop = null;
  }

  // Files dropped at `point`: where it lands decides (the GPU hit, with the `scene` content), with no choice.
  async function drop(point, files) {
    dragLeave();
    if (session.readOnly || closed) return null;
    const file = fileToPlace(files);
    const v = file ? landingView() : null;
    if (!v) return null;
    const ray = rayAt(v, point);
    const hit = pickedHit(v, point, ray);
    if (isStickerImageFile(file)) {
      let decoded;
      try {
        decoded = await decode(file);
      } catch {
        warn(ADD_TEXT.unreadable(file.name));
        return null;
      }
      if (closed) return null;
      if (!hit) return placeImage(file, decoded, { placement: "sky", pose: skyPose(ray.direction, decoded) });
      return placeImage(file, decoded, { placement: "world", transform: worldImageTransform(hit, { ground: v.ground, eye: v.camera.position, size: decoded, viewYaw: v.pose.yaw_deg }) });
    }
    const point3d = hit ?? groundLanding(ray, { ground: v.ground, radius: v.radius, viewYaw: v.pose.yaw_deg });
    if (!point3d) {
      notice(ADD_TEXT.noGround);
      return null;
    }
    return place3d(file, point3d, v);
  }

  return {
    pick,
    choose,
    cancelChoice,
    dragOver,
    dragLeave,
    drop,
    // Escape's step 3 of docs/studio-ui.md "閉じ方": the choice closes, placing nothing. Returns whether it did.
    escape: () => cancelChoice(),
    // The layer media of a placed image ({ media, revision }) while its uploaded file has not loaded, else null.
    media(sticker) {
      const image = local.get(sticker.id);
      return image ? { media: image.image, revision: `added:${sticker.id}` } : null;
    },
    // The sizes of the placed images by id ({ width, height } px).
    sizes(state) {
      const sizes = {};
      for (const sticker of state.stickers) {
        const image = local.get(sticker.id);
        if (image) sizes[sticker.id] = { width: image.width, height: image.height };
      }
      return sizes;
    },
    // Whether the line should check again (a content change may have drawn a placed 3D file).
    refresh: () => syncLoading(),
    close() {
      closed = true;
      timers.clear(poll);
      poll = 0;
      waiting = null;
    },
  };
}
