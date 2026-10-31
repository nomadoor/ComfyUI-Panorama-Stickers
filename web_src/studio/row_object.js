// What the selection's row names in the new UI (docs/studio-ui.md, the owner table's row of the selected row's
// object): "camera", "scene", an own Sticker's id, or an upstream element's working id (`upstream:<key>:<id>`,
// pano_upstream.js upstreamWorkingLayers). Each caller says whether it looks in the upstream layers: the bar at the
// bottom center and the stage do not (upstream elements are read-only there), the inspector does. Pure.
import { cameraOf } from "./camera_state.js";

// The working Sticker with the id `id`: the state's own, then, in the upstream working layers `upstream`, an upstream
// one. Without upstream layers ([]), only the state's own.
export function findSticker(state, upstream, id) {
  return state.stickers.find((item) => item.id === id)
    ?? upstream.flatMap((layer) => layer.sceneState.stickers).find((item) => item.id === id)
    ?? null;
}

// The owner of a Keyframe selection's Lanes (selection.keyframes.owner): "camera" (the state's Camera, or a default
// one: camera_state.js cameraOf), "scene", or a Sticker's id (findSticker).
export function keyframeOwner(state, upstream, id) {
  if (id === "camera") return cameraOf(state);
  if (id === "scene") return state.scene;
  return findSticker(state, upstream, id);
}
