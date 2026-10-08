"""The Sky paint layers the frontend draws (`skyPaintLayers` in web_src/pano_paint_layers.js, put among the sky
Stickers by `skyLayers`) are those the node draws (`_sky_layers` in core/render.py), in the same order."""

import json
import shutil
import subprocess
import textwrap
from pathlib import Path

import numpy as np
import pytest

from comfyui_pano_suite.core.render import StickerSource, _sky_layers
from comfyui_pano_suite.core.scene_eval import evaluate_scene_state
from comfyui_pano_suite.core.scene_state import load_scene_state
from comfyui_pano_suite.nodes import _painting_sources

REPO_ROOT = Path(__file__).resolve().parent.parent
# An opaque 2 x 2 PNG.
PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVR4nGNk+M/wn4GBgYGJAQoAHhgCAu/QjeYAAAAASUVORK5CYII="


def stroke(stroke_id, group, *, layer="paint", tool="pen", u=0.5):
    return {
        "id": stroke_id,
        "actionGroupId": group,
        "layerKind": layer,
        "toolKind": tool,
        "targetSpace": {"kind": "ERP_GLOBAL"},
        "size": 40,
        "opacity": 1,
        "color": {"r": 1, "g": 0, "b": 0, "a": 1},
        "geometry": {"geometryKind": "freehand_open", "points": [{"u": u, "v": 0.5}, {"u": u + 0.05, "v": 0.55}]},
    }


def raster(raster_id, z_index, layer="paint"):
    return {
        "id": raster_id,
        "type": "raster_frozen",
        "layerKind": layer,
        "z_index": z_index,
        "bbox": {"u0": 0.2, "v0": 0.2, "u1": 0.4, "v1": 0.6},
        "rasterDataUrl": PNG,
    }


def sky(sticker_id, z_index):
    return {"id": sticker_id, "placement": "sky", "z_index": z_index, "source": {"kind": "file", "filename": f"{sticker_id}.png"}}


def group(group_id, z_index):
    return {"id": group_id, "actionGroupId": group_id, "z_index": z_index}


def state(stickers=(), groups=(), strokes=(), mask=(), rasters=(), visible=True):
    return {
        "version": 2,
        "stickers": list(stickers),
        "painting": {"version": 1, "groups": list(groups), "paint": {"strokes": list(strokes)}, "mask": {"strokes": list(mask)}, "raster_objects": list(rasters)},
        "painting_visible": visible,
    }


CASES = {
    "empty": state(),
    "empty_with_stickers": state(stickers=[sky("s0", 0), sky("s1", 2)]),
    "loose_strokes": state(stickers=[sky("s0", 5)], strokes=[stroke("a", "free1"), stroke("b", "free2", u=0.1)]),
    "loose_strokes_alone": state(strokes=[stroke("a", "free1")]),
    "groups_interleaved": state(
        stickers=[sky("s0", 0), sky("s1", 2), sky("s2", 4)],
        groups=[group("g3", 3), group("g1", 1), group("g2", 2), group("g0", 0)],
        strokes=[stroke("a", "g0"), stroke("b", "g1"), stroke("c", "g2"), stroke("d", "g3")],
    ),
    "groups_and_loose": state(
        stickers=[sky("s0", 1)],
        groups=[group("g0", 0), group("g2", 2)],
        strokes=[stroke("a", "g2"), stroke("b", "free"), stroke("c", "g0")],
    ),
    "group_without_strokes": state(
        stickers=[sky("s0", 1)],
        groups=[group("g0", 0), group("empty", 2), group("g3", 3)],
        strokes=[stroke("a", "g0"), stroke("b", "g3")],
    ),
    "mask": state(
        stickers=[sky("s0", 1)],
        groups=[group("g0", 0)],
        strokes=[stroke("a", "g0")],
        mask=[stroke("m", "mg", layer="mask")],
    ),
    "mask_alone": state(mask=[stroke("m", "mg", layer="mask")]),
    "rasters": state(
        stickers=[sky("s0", 1), sky("s1", 3)],
        groups=[group("g0", 1), group("g1", 3)],
        strokes=[stroke("a", "g0"), stroke("b", "g1")],
        rasters=[raster("r3", 3), raster("r0", 0), raster("rm", 2, layer="mask"), raster("r1", 1), raster("r1b", 1.7), raster("r1c", 1.2)],
    ),
    "rasters_alone": state(rasters=[raster("r1", 1), raster("r0", 0)]),
    "hidden": state(
        stickers=[sky("s0", 1)],
        groups=[group("g0", 0)],
        strokes=[stroke("a", "g0"), stroke("b", "free")],
        mask=[stroke("m", "mg", layer="mask")],
        rasters=[raster("r0", 2)],
        visible=False,
    ),
}

JS_SCRIPT = textwrap.dedent(
    """
    import { readFileSync } from "node:fs";
    import { skyPaintLayers } from "./web_src/pano_paint_layers.js";
    import { skyLayers } from "./web_src/pano_editor_view.js";
    import { loadSceneState } from "./web_src/pano_scene_state.js";

    const image = { naturalWidth: 2, naturalHeight: 2 };
    const out = {};
    for (const [name, raw] of Object.entries(JSON.parse(readFileSync(0, "utf8")))) {
      const state = loadSceneState(raw);
      const { painting } = state;
      // As a paint engine draws the painting: a canvas for each group with a paint stroke, and a mask display with a mask stroke.
      const engineGroups = new Set(painting.paint.strokes.filter((item) => item.toolKind !== "eraser").map((item) => item.actionGroupId));
      const paintLayers = skyPaintLayers(state, {
        group: (id) => (engineGroups.has(id) ? { media: image, revision: id } : null),
        raster: (item) => ({ media: image, revision: item.id }),
        mask: () => (painting.mask.strokes.length ? { media: image, revision: "mask" } : null),
      });
      const layers = skyLayers(state, 0, { media: () => ({ media: image, revision: 0 }), zIndex: (sticker) => sticker.z_index, paintLayers });
      out[name] = layers.map((layer) => [layer.kind, layer.id]);
    }
    console.log(JSON.stringify(out));
    """
)


@pytest.fixture(scope="module")
def js_out():
    if shutil.which("node") is None:
        pytest.skip("node.js is required")
    proc = subprocess.run(
        ["node", "--input-type=module", "-e", JS_SCRIPT],
        cwd=REPO_ROOT,
        input=json.dumps(CASES),
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(proc.stdout)


def node_layers(raw):
    """The node's Sky layers of `raw` as (kind, id): its sky Stickers, its paint groups, rasters and the strokes of no
    group ("flat"), and whether it has a mask."""
    loaded = load_scene_state(json.dumps(raw))
    stickers = {
        item["id"]: StickerSource(np.full((2, 2, 4), 255, dtype=np.uint8), item["crop"], item.get("z_index", 0))
        for item in loaded["stickers"]
    }
    sources = _painting_sources(loaded, stickers)
    paint = {}
    layers, mask = _sky_layers(evaluate_scene_state(loaded, 0), sources, (128, 64), "cpu", {}, paint)
    rasters = {id(item): item["id"] for item in sources.painting["raster_objects"]}
    keys = {id(value[1][0]): key for key, value in paint.items() if key != "mask" and isinstance(value, tuple) and value[1] is not None}
    out = []
    for layer in layers:
        if layer[0] == "sticker":
            out.append(["sticker", layer[3]["sticker"]["id"]])
            continue
        key = keys[id(layer[1])]
        out.append(["flat", None] if key[0] == "flat" else ["group", key[1]] if key[0] == "group" else ["raster", rasters[key[1]]])
    return out, mask is not None


def frontend_layers(js):
    """The frontend's Sky layers as node_layers gives them: the groups of no group of the painting, which the
    frontend draws one by one on top, as the one "flat" layer of the node."""
    out = []
    mask = False
    for kind, layer_id in js:
        if kind == "sticker":
            out.append(["sticker", layer_id])
        elif layer_id == "mask_display":
            mask = True
        elif layer_id.startswith("raster:"):
            out.append(["raster", layer_id.removeprefix("raster:")])
        else:
            out.append(["group", layer_id.removeprefix("paint_group:")])
    return out, mask


@pytest.mark.parametrize("name", list(CASES))
def test_the_frontend_paint_layers_are_the_nodes(js_out, name):
    raw = CASES[name]
    expected, expected_mask = node_layers(raw)
    layers, mask = frontend_layers(js_out[name])
    groups = {item["actionGroupId"] for item in raw["painting"]["groups"]}
    loose = [layer for layer in layers if layer[0] == "group" and layer[1] not in groups]
    if loose:
        # The strokes of no group are the top layers.
        assert layers[-len(loose):] == loose
        layers = layers[:-len(loose)] + [["flat", None]]
    assert layers == expected
    # The paint engine's mask display holds the mask strokes only; the node's MASK also has the mask raster objects.
    has_mask_strokes = raw["painting_visible"] and bool(raw["painting"]["mask"]["strokes"])
    assert mask == has_mask_strokes
    assert expected_mask >= has_mask_strokes


def test_the_cases_cover_each_kind_of_layer():
    kinds = {kind for raw in CASES.values() for kind, _id in node_layers(raw)[0]}
    assert kinds == {"sticker", "group", "raster", "flat"}
    assert node_layers(CASES["mask"])[1] and not node_layers(CASES["hidden"])[1]
