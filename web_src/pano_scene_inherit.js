// Applying a downstream Panorama Studio's `upstream` override record to an upstream layer (ADR 0030).
// The rules are documented in docs/scene-state-v2.md ("上流の上書き"). comfyui_pano_suite/core/scene_inherit.py
// must produce the same result for the same input.

import { rebaseUpstreamRecord } from "./pano_scene_state.js";

// The upstream layer's normalized state with the record's overrides applied. Neither input is changed; the
// result shares the unchanged parts of layerState. Without a record for this layer, or when nothing in it
// matches, layerState itself is returned.
export function applyUpstreamOverrides(layerState, record) {
  if (record == null || record.layer !== layerState.id) return layerState;
  const rebased = record.fps === layerState.timeline.fps ? record : rebaseUpstreamRecord(record, layerState);
  const deleted = new Set(rebased.deleted);
  const overrides = new Map(rebased.stickers.map((override) => [override.id, override]));
  let applied = Object.keys(rebased.scene).length > 0 || Object.hasOwn(rebased, "painting_visible");
  const stickers = [];
  for (const sticker of layerState.stickers) {
    if (deleted.has(sticker.id)) {
      applied = true;
      continue;
    }
    const override = overrides.get(sticker.id);
    // An override made for the other placement has Lanes this Sticker does not have.
    if (override !== undefined && override.placement === sticker.placement) {
      stickers.push({ ...sticker, ...override });
      applied = true;
    } else {
      stickers.push(sticker);
    }
  }
  if (!applied) return layerState;
  return {
    ...layerState,
    scene: { ...layerState.scene, ...rebased.scene },
    stickers,
    painting_visible: Object.hasOwn(rebased, "painting_visible") ? rebased.painting_visible : layerState.painting_visible,
    upstream: [],
  };
}
