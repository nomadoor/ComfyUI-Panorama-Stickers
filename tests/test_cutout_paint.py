from comfyui_pano_suite.core.painting import (
    painting_state_has_renderables,
    raster_object_pixel_ranges,
)


def test_a_thin_raster_box_covers_one_pixel_and_does_not_wrap():
    ranges = raster_object_pixel_ranges(
        {"bbox": {"u0": 0.1001, "v0": 0.2, "u1": 0.1002, "v1": 0.4}, "transform": {"du": 0.0, "dv": 0.0}},
        8,
        8,
    )

    assert ranges == [(0, 1, 1, 4)]


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
