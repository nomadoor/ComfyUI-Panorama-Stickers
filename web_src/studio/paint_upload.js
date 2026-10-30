// The paint layer the new UI uploads when it closes (docs/studio-ui.md "ペイントの道具"): the pixels the editor draws
// of its paint (paint.js nodeLayer), sent as the old editor sends them (pano_paint_upload.js), and the `painting_layer`
// the node then draws instead of its own drawing of the strokes. When a layer is needed, its revision, and how it goes
// into state_json.
import { paintingLayerNeedsSync } from "../pano_editor_state.js";
import { paintTargetDescriptor } from "../pano_paint_strokes.js";
import { paintingCompositeCount, uploadPaintingLayer } from "../pano_paint_upload.js";
import { loadSceneState, sceneStateText } from "../pano_scene_state.js";

// Whether the working state `state` needs its paint layer uploaded for the node `nodeId`: it has paint or a mask and no
// layer of the paint's size (`descriptor`) in this node's files (pano_editor_state.js paintingLayerNeedsSync).
export function needsPaintLayer(state, nodeId, descriptor = paintTargetDescriptor()) {
  const counts = paintingCompositeCount(state.painting);
  return paintingLayerNeedsSync(state.painting_layer, {
    paintCount: counts.totalPaintCount,
    maskCount: counts.totalMaskCount,
    width: descriptor.width,
    height: descriptor.height,
    nodeId: String(nodeId),
  });
}

// The revision of the layer of `painting`: a hash of the painting, then the paint's size (which paintingLayerNeedsSync reads).
export function paintLayerRevision(painting, descriptor = paintTargetDescriptor()) {
  const text = JSON.stringify(painting ?? null);
  let hash = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  return `studio_${(hash >>> 0).toString(16).padStart(8, "0")}:${descriptor.width}x${descriptor.height}`;
}

// Uploads the paint layer of `painting` for the node `nodeId` from `sources` (paint.js nodeLayer: { groupIds, paintCanvas,
// maskCanvas, groupCanvas }) and returns its `painting_layer`.
export function uploadPaintLayer(api, { nodeId, painting, sources, descriptor = paintTargetDescriptor() }) {
  return uploadPaintingLayer(api, {
    nodeId: String(nodeId),
    counts: paintingCompositeCount(painting),
    paintCanvas: sources.paintCanvas,
    maskCanvas: sources.maskCanvas,
    groupIds: sources.groupIds,
    groupCanvas: sources.groupCanvas,
    revision: paintLayerRevision(painting, descriptor),
  });
}

// state_json's `current` text with `layer` as its painting_layer, while its painting is still `painting` (the one
// uploaded); null when it is not, or when the text cannot be read. The rest of the text stays as it is.
export function textWithPaintLayer(current, painting, layer) {
  let scene;
  try {
    scene = loadSceneState(current);
  } catch {
    return null;
  }
  if (JSON.stringify(scene.painting) !== JSON.stringify(painting)) return null;
  return sceneStateText({ ...scene, painting_layer: layer });
}
