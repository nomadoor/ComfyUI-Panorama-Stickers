// What the selection's row names in the new UI (docs/studio-ui.md, the owner table's row of the selected row's
// object): "camera", "scene", an own Sticker's id, or an upstream element's working id (`upstream:<key>:<id>`,
// pano_upstream.js upstreamWorkingLayers). Each caller gives the upstream layers it looks in: the bar at the bottom
// center, the stage, the inspector and the session look in the working layers (docs/studio-ui.md "上流の物の編集").
// Pure.

// The working Sticker with the id `id`: the state's own, then, in the upstream working layers `upstream`, an upstream
// one. Without upstream layers ([]), only the state's own.
export function findSticker(state, upstream, id) {
  return state.stickers.find((item) => item.id === id)
    ?? upstream.flatMap((layer) => layer.sceneState.stickers).find((item) => item.id === id)
    ?? null;
}

// The output length whose loop the owner `owner` follows (docs/scene-state-v2.md "ループ"): an upstream working
// Sticker its layer's (the length of the node that made it, at the working fps), anything else `length`, the node's own.
export function ownerLength(upstream, owner, length) {
  if (!owner?.origin) return length;
  const layer = upstream.find((item) => item.sceneState.stickers.includes(owner));
  return layer ? layer.length ?? null : length;
}

// The owner of a Keyframe selection group's Lanes (selection.keyframes[i].owner): "camera" (the state's Camera), "scene", or a Sticker's id (findSticker).
export function keyframeOwner(state, upstream, id) {
  if (id === "camera") return state.camera;
  if (id === "scene") return state.scene;
  return findSticker(state, upstream, id);
}
