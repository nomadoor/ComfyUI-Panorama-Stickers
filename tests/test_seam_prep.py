"""PanoramaSeamPrep: how far the seam moves and where the mask's band is (docs/seam-prep.md)."""
import inspect
import math

import pytest
import torch

from comfyui_pano_suite.seam_prep import PanoramaSeamPrepNode


def _columns(width, height=3):
    # Each pixel holds its own column of the input, so the output shows where each input column went.
    x = torch.arange(width, dtype=torch.float32) / width
    return x.view(1, 1, width, 1).expand(1, height, width, 3).contiguous()


def _prep(width, seam_width, offset, blur=0):
    image, mask, blurred = PanoramaSeamPrepNode.execute(_columns(width), seam_width, offset, blur).args
    return image, mask, blurred


def _seam(image):
    """The seam in the output: the x whose pixel is the input's column 0 (the seam is on its left edge)."""
    return int(torch.nonzero(image[0, 0, :, 0] == 0.0)[0])


def _band(mask):
    xs = torch.nonzero(mask[0, 0] > 0.5).flatten()
    return int(xs[0]), int(xs[-1]) + 1


def _before(width, seam_width, offset, blur):
    """The node's outputs before the offset was limited (frozen here to keep even widths in range unchanged)."""
    img = _columns(width)
    doubled = torch.cat((img, img), dim=2)
    start_x = max(0, min(int(width // 2 - offset), width))
    prepared = doubled[:, :, start_x:start_x + width, :].contiguous().clamp(0.0, 1.0)
    center_x = width * 0.5 + offset
    x = torch.arange(width, dtype=torch.float32)
    band = ((x >= center_x - seam_width * 0.5) & (x < center_x + seam_width * 0.5)).float()
    mask = band.view(1, 1, width).expand(1, img.shape[1], width).contiguous()
    return prepared, mask, PanoramaSeamPrepNode._blur_mask(mask, blur)


def _limits(width, seam_width):
    # The offsets that keep the band [x_s - floor(sw/2), x_s + ceil(sw/2)) inside the image, x_s = ceil(W/2) + offset.
    return seam_width // 2 - math.ceil(width / 2), width // 2 - math.ceil(seam_width / 2)


@pytest.mark.parametrize("width, seam_width, offset", [(1024, 64, 600), (1024, 64, -600), (1024, 63, 2048), (1025, 63, 600),
                                                       (1025, 63, -600), (1025, 64, 2048), (1025, 64, -2048)])
def test_an_offset_past_the_edge_stops_where_the_whole_band_is_in_the_image(width, seam_width, offset):
    image, mask, blurred = _prep(width, seam_width, offset, blur=4)
    lo, hi = _limits(width, seam_width)
    limited = min(max(offset, lo), hi)

    seam = _seam(image)
    assert seam == math.ceil(width / 2) + limited
    assert _band(mask) == (seam - seam_width // 2, seam + math.ceil(seam_width / 2))
    assert int((mask[0, 0] > 0.5).sum()) == seam_width
    assert torch.equal(blurred, PanoramaSeamPrepNode._blur_mask(mask, 4))
    # At the limit the band touches the edge it was moved towards.
    assert _band(mask)[1] == width if offset > 0 else _band(mask)[0] == 0


@pytest.mark.parametrize("seam_width", [63, 64])
@pytest.mark.parametrize("offset", [0, 100, -100])
def test_with_an_odd_width_the_band_is_centred_on_the_seam(seam_width, offset):
    # An odd band has its extra pixel on the right of the seam.
    image, mask, _blurred = _prep(1025, seam_width, offset)
    seam = _seam(image)

    assert seam == 513 + offset
    assert _band(mask) == (seam - seam_width // 2, seam + math.ceil(seam_width / 2))


def test_with_an_odd_width_and_an_odd_band_the_limits_keep_the_band_touching_each_edge():
    # The seam is right of the middle (ceil(W/2)) and the extra pixel is on its right: 480 to the right, 482 to the left.
    assert _limits(1025, 63) == (-482, 480)
    for offset, seam in ((480, 993), (481, 993), (-482, 31), (-483, 31)):
        image, mask, _blurred = _prep(1025, 63, offset)
        assert _seam(image) == seam
        assert _band(mask) == (seam - 31, seam + 32)
    assert _band(_prep(1025, 63, 481)[1])[1] == 1025
    assert _band(_prep(1025, 63, -483)[1])[0] == 0


@pytest.mark.parametrize("width, seam_width, offset", [(1024, 64, 0), (1024, 64, 480), (1024, 64, -480), (1024, 63, 480),
                                                       (1024, 63, -481), (1024, 63, 17), (64, 8, -7), (64, 1, 31)])
def test_an_even_width_in_range_gives_the_same_pixels_as_before(width, seam_width, offset):
    after = _prep(width, seam_width, offset, blur=5)
    before = _before(width, seam_width, offset, 5)

    for a, b in zip(after, before):
        assert torch.equal(a, b)


@pytest.mark.parametrize("width, seam_width", [(64, 64), (64, 100), (65, 65), (65, 2048)])
@pytest.mark.parametrize("offset", [0, 30, -30])
def test_a_band_as_wide_as_the_image_does_not_move_the_seam_and_covers_everything(width, seam_width, offset):
    image, mask, _blurred = _prep(width, seam_width, offset)

    assert _seam(image) == math.ceil(width / 2)
    assert bool((mask == 1.0).all())


def test_every_image_of_a_batch_gets_the_same_shift_and_band():
    batch = torch.cat([_columns(1024), _columns(1024).flip(2)], dim=0)
    image, mask, blurred = PanoramaSeamPrepNode.execute(batch, 64, 600, 4).args
    single, single_mask, single_blurred = PanoramaSeamPrepNode.execute(batch[:1], 64, 600, 4).args
    assert image.shape == batch.shape and mask.shape == (2, 3, 1024)
    assert torch.equal(image[:1], single)
    start_x = 1024 - _seam(single)
    assert torch.equal(image[1:], torch.cat((batch[1:], batch[1:]), dim=2)[:, :, start_x:start_x + 1024])
    assert torch.equal(mask[0], mask[1]) and torch.equal(mask[:1], single_mask)
    assert torch.equal(blurred[0], blurred[1]) and torch.allclose(blurred[:1], single_blurred, atol=1e-6)


def test_execute_defaults_are_the_schema_defaults():
    # A call that omits an input gets what ComfyUI would pass for it.
    defaults = {name: param.default for name, param in inspect.signature(PanoramaSeamPrepNode.execute).parameters.items()
                if param.default is not inspect.Parameter.empty}
    schema = {input_.id: input_.default for input_ in PanoramaSeamPrepNode.define_schema().inputs if input_.id in defaults}
    assert defaults == schema == {"seam_width_px": 64, "seam_center_offset_px": 0, "mask_blur_px": 10}
