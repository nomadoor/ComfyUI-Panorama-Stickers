"""Applying a downstream Panorama Studio's `upstream` override record to an upstream layer (ADR 0030).

The rules are documented in docs/scene-state-v2.md ("上流の上書き"). web_src/pano_scene_inherit.js
must produce the same result for the same input.
"""

from .scene_state import rebase_upstream_record


def apply_upstream_overrides(layer_state: dict, record: dict | None) -> dict:
    """The upstream layer's normalized state with the record's overrides applied.

    Neither input is changed; the result shares the unchanged parts of `layer_state`. Without a
    record for this layer, or when nothing in it matches, `layer_state` itself is returned.
    """
    if record is None or record["layer"] != layer_state["id"]:
        return layer_state
    if record["fps"] != layer_state["timeline"]["fps"]:
        record = rebase_upstream_record(record, layer_state)
    deleted = set(record["deleted"])
    overrides = {override["id"]: override for override in record["stickers"]}
    applied = bool(record["scene"]) or "painting_visible" in record
    stickers = []
    for sticker in layer_state["stickers"]:
        if sticker["id"] in deleted:
            applied = True
            continue
        override = overrides.get(sticker["id"])
        # An override made for the other placement has Lanes this Sticker does not have.
        if override is not None and override["placement"] == sticker["placement"]:
            sticker = {**sticker, **override}
            applied = True
        stickers.append(sticker)
    if not applied:
        return layer_state
    return {
        **layer_state,
        "scene": {**layer_state["scene"], **record["scene"]},
        "stickers": stickers,
        "painting_visible": record.get("painting_visible", layer_state["painting_visible"]),
        "upstream": [],
    }
