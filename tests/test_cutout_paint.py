import base64
import io
import numpy as np
from PIL import Image

from comfyui_pano_suite.core.cutout import build_cutout_sampling_map, cutout_from_erp, sample_cutout_from_sampling_map
from comfyui_pano_suite.core.painting import (
    _uv_bbox_to_pixels,
    painting_state_has_renderables,
    render_painting_to_cutout,
)


def _png_data_url(rgba: np.ndarray) -> str:
    image = Image.fromarray(rgba.astype(np.uint8), "RGBA")
    buf = io.BytesIO()
    image.save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("ascii")


def test_render_painting_to_cutout_projects_erp_strokes_into_frame():
    painting = {
        "version": 1,
        "paint": {
            "strokes": [{
                "id": "erp_paint",
                "actionGroupId": "ag_1",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "paint",
                "toolKind": "pen",
                "brushPresetId": None,
                "color": {"r": 1.0, "g": 0.0, "b": 0.0, "a": 1.0},
                "size": 6,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 1,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [
                        {"u": 0.49, "v": 0.5, "t": 0},
                        {"u": 0.51, "v": 0.5, "t": 1},
                    ],
                },
            }],
        },
        "mask": {
            "strokes": [{
                "id": "erp_mask",
                "actionGroupId": "ag_2",
                "targetSpace": {"kind": "ERP_GLOBAL"},
                "layerKind": "mask",
                "toolKind": "pen",
                "brushPresetId": None,
                "color": None,
                "size": 20,
                "opacity": 1.0,
                "hardness": None,
                "flow": None,
                "spacing": None,
                "createdAt": 2,
                "geometry": {
                    "geometryKind": "freehand_open",
                    "points": [
                        {"u": 0.48, "v": 0.5, "t": 0},
                        {"u": 0.52, "v": 0.5, "t": 1},
                    ],
                },
            }],
        },
    }
    shot = {
        "id": "frame_1",
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "roll_deg": 0.0,
        "hFOV_deg": 90.0,
        "vFOV_deg": 90.0,
    }

    paint_rgba, mask_bw = render_painting_to_cutout(painting, shot, 128, 128)

    assert paint_rgba.shape == (128, 128, 4)
    assert mask_bw.shape == (128, 128)
    assert float(np.max(paint_rgba[..., 3])) > 0.0
    assert float(np.max(mask_bw)) > 0.0


def test_render_painting_to_cutout_projects_raster_objects_into_frame():
    rgba = np.zeros((24, 24, 4), dtype=np.uint8)
    rgba[..., 2] = 255
    rgba[..., 3] = 255
    painting = {
        "version": 1,
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "raster_objects": [{
            "id": "rast_cutout",
            "type": "raster_frozen",
            "layerKind": "paint",
            "z_index": 0,
            "bbox": {"u0": 0.48, "v0": 0.45, "u1": 0.52, "v1": 0.55},
            "rasterDataUrl": _png_data_url(rgba),
            "transform": {"du": 0.0, "dv": 0.0, "rot_deg": 0.0, "scale": 1.0},
        }],
    }
    shot = {
        "id": "frame_raster",
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "roll_deg": 0.0,
        "hFOV_deg": 90.0,
        "vFOV_deg": 90.0,
    }

    paint_rgba, mask_bw = render_painting_to_cutout(painting, shot, 128, 128)

    assert paint_rgba.shape == (128, 128, 4)
    assert float(np.max(mask_bw)) == 0.0
    assert float(np.max(paint_rgba[..., 2])) > 0.9
    alpha_nonzero = np.argwhere(paint_rgba[..., 3] > 0.25)
    assert alpha_nonzero.size > 0
    center_y, center_x = alpha_nonzero.mean(axis=0)
    assert 48 <= center_x <= 80
    assert 40 <= center_y <= 88


def test_cutout_sampling_map_matches_direct_cutout_render():
    erp = np.zeros((64, 128, 3), dtype=np.float32)
    erp[:, :, 1] = np.linspace(0.0, 1.0, 128, dtype=np.float32)[None, :]
    shot = {
        "id": "frame_sampling",
        "yaw_deg": 5.0,
        "pitch_deg": -3.0,
        "roll_deg": 8.0,
        "hFOV_deg": 80.0,
        "vFOV_deg": 60.0,
    }
    sampling_map = build_cutout_sampling_map(
        erp.shape,
        shot["yaw_deg"],
        shot["pitch_deg"],
        shot["hFOV_deg"],
        shot["vFOV_deg"],
        shot["roll_deg"],
        96,
        72,
        360,
    )
    direct = cutout_from_erp(erp, 5.0, -3.0, 80.0, 60.0, 8.0, 96, 72, 360)
    mapped = sample_cutout_from_sampling_map(erp, sampling_map)
    assert np.allclose(direct, mapped, atol=1e-5)


def test_uv_bbox_to_pixels_keeps_thin_non_wrapping_bbox_non_wrapped():
    x0, y0, x1, y1, dst_w, dst_h = _uv_bbox_to_pixels(
        {"u0": 0.1001, "v0": 0.2, "u1": 0.1002, "v1": 0.4},
        {"du": 0.0, "dv": 0.0},
        8,
        8,
    )

    assert x0 == x1
    assert dst_w == 1
    assert dst_h >= 1


def test_render_painting_to_cutout_ignores_stale_painting_layer_payload():
    painting = {
        "version": 1,
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "raster_objects": [],
    }
    shot = {
        "id": "frame_empty",
        "yaw_deg": 0.0,
        "pitch_deg": 0.0,
        "roll_deg": 0.0,
        "hFOV_deg": 90.0,
        "vFOV_deg": 90.0,
    }
    stale_layer = {
        "paint": {"type": "comfy_image", "storage": "temp", "filename": "stale.png"},
        "mask": {"type": "comfy_image", "storage": "temp", "filename": "stale-mask.png"},
    }

    paint_rgba, mask_bw = render_painting_to_cutout(
        painting,
        shot,
        128,
        128,
        painting_layer=stale_layer,
    )

    assert paint_rgba.shape == (128, 128, 4)
    assert mask_bw.shape == (128, 128)
    assert float(np.max(paint_rgba[..., 3])) == 0.0
    assert float(np.max(mask_bw)) == 0.0



def test_painting_state_has_renderables_detects_empty_and_non_empty():
    assert painting_state_has_renderables(None) is False
    assert painting_state_has_renderables({
        "version": 1,
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "raster_objects": [],
    }) is False
    assert painting_state_has_renderables({
        "version": 1,
        "paint": {"strokes": [{"id": "s1"}]},
        "mask": {"strokes": []},
        "raster_objects": [],
    }) is True
    assert painting_state_has_renderables({
        "version": 1,
        "paint": {"strokes": []},
        "mask": {"strokes": []},
        "raster_objects": [{"id": "r1"}],
    }) is True
