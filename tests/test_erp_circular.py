"""Panorama Circular RoPE and Panorama Circular VAE: the ERP seam rules (docs/erp-circular.md)."""
import math

import pytest
import torch

from comfyui_pano_suite import erp_circular


def _rope_omega(dim, theta=10000):
    # The frequencies comfy.ldm.flux.math.rope uses for one axis.
    scale = torch.linspace(0, (dim - 2) / dim, steps=dim // 2, dtype=torch.float64)
    return 1.0 / (theta ** scale)


def test_snapped_bands_turn_a_whole_number_of_times_over_the_period_and_the_rest_keep_their_value():
    omega = _rope_omega(56)
    snapped = erp_circular.snap_to_whole_turns(omega, 180)
    turns = omega * 180 / (2 * math.pi)
    changed = torch.round(turns) >= 1
    new_turns = snapped * 180 / (2 * math.pi)
    assert torch.allclose(new_turns[changed], torch.round(new_turns[changed]), atol=1e-9)
    assert torch.equal(snapped[~changed], omega[~changed])
    assert torch.all(snapped[changed] > 0)


def test_a_2880_wide_qwen_image_21_image_snaps_13_of_its_28_horizontal_bands():
    omega = _rope_omega(56)
    snapped = erp_circular.snap_to_whole_turns(omega, 2880 // 16)
    assert int((snapped != omega).sum()) == 13
    assert torch.equal(snapped[13:], omega[13:])


def test_a_band_turning_more_than_half_a_time_snaps_and_a_slower_band_does_not():
    period = 100
    omega = torch.tensor([0.49, 0.51, 0.77, 1.0, 2.4], dtype=torch.float64) * 2 * math.pi / period
    snapped = erp_circular.snap_to_whole_turns(omega, period)
    assert (snapped * period / (2 * math.pi)).tolist() == pytest.approx([0.49, 1.0, 1.0, 1.0, 2.0])


# --- Panorama Circular RoPE: which tokens and axes change, and the period -------------------------------------------

AXES = (4, 6, 6)  # a small Qwen Image 2.1: (time, height, width) RoPE dims
WIDTH_SLICE = slice((AXES[0] + AXES[1]) // 2, None)  # the width axis's bands in the pe table


def _tiny_qwen():
    import comfy.ops
    from comfy.ldm.qwen_image21.model import QwenImage21Transformer2DModel

    model = QwenImage21Transformer2DModel(
        in_channels=4, out_channels=4, num_layers=1, attention_head_dim=sum(AXES), num_attention_heads=1,
        context_in_dim=8, axes_dims_rope=AXES, operations=comfy.ops.disable_weight_init)
    for parameter in model.parameters():
        torch.nn.init.normal_(parameter)
    return model


def _sequence_ids(model, target_hw, text_len, ref_hws=(), slots=None):
    """The ids that Qwen Image 2.1's build_sequence hands to pe_embedder."""
    seen = {}
    real = model.pe_embedder.forward

    def record(ids):
        seen["ids"] = ids
        return real(ids)

    model.pe_embedder.forward = record
    try:
        refs = [torch.randn(1, 4, h, w) for h, w in ref_hws]
        model.build_sequence(torch.randn(1, 4, *target_hw), torch.randn(1, text_len, 8), refs, slots or [0] * len(refs))
    finally:
        del model.pe_embedder.forward
    return seen["ids"]


def _circular(model):
    return erp_circular.CircularEmbedND(model.pe_embedder)


def test_build_sequence_puts_the_target_image_last_and_gives_each_image_one_time_value():
    model = _tiny_qwen()
    ids = _sequence_ids(model, (3, 6), text_len=5, ref_hws=[(2, 8)], slots=[2])[0]
    time = ids[:, 0]
    target = ids[-18:]
    assert torch.all(target[:, 0] == time[-1]) and int((time == time[-1]).sum()) == 18
    assert torch.equal(target[:, 2].unique(), torch.arange(-3.0, 3.0))


def test_text_tokens_and_the_time_and_height_axes_keep_the_original_table():
    model = _tiny_qwen()
    ids = _sequence_ids(model, (3, 6), text_len=5, ref_hws=[(2, 8)], slots=[2])
    base, circular = model.pe_embedder(ids), _circular(model)(ids)
    assert circular.shape == base.shape
    is_text = torch.zeros(ids.shape[1], dtype=torch.bool)
    is_text[:2] = True
    is_text[18:21] = True  # 2 text tokens, the 16-token reference, 3 text tokens, then the target
    assert torch.equal(circular[:, :, is_text], base[:, :, is_text])
    assert torch.equal(circular[..., :WIDTH_SLICE.start, :, :], base[..., :WIDTH_SLICE.start, :, :])
    assert not torch.equal(circular[:, :, ~is_text][..., WIDTH_SLICE, :, :], base[:, :, ~is_text][..., WIDTH_SLICE, :, :])


def _width_table(table, ids, time_value, width_value):
    rows = (ids[0, :, 0] == time_value) & (ids[0, :, 2] == width_value)
    return table[0, 0, rows][0, WIDTH_SLICE.start]  # the fastest width band of one such token


def test_the_period_is_the_target_width_even_when_a_reference_is_wider():
    # Width 6 has the fastest band (1 rad per token, 0.95 turns) snapped to one turn per 6 tokens, so a
    # reference token 6 columns to the right of another gets the same rotation. A period of 8 would not.
    model = _tiny_qwen()
    ids = _sequence_ids(model, (2, 6), text_len=3, ref_hws=[(2, 16)], slots=[3])
    table = _circular(model)(ids)
    ref_time = ids[0, 3, 0]
    assert torch.allclose(_width_table(table, ids, ref_time, -5.0), _width_table(table, ids, ref_time, 1.0), atol=1e-6)


def test_the_table_is_the_cores_rope_at_the_snapped_frequencies():
    # The core's own rope() at positions scaled by snapped/original frequency gives, band by band, the rotation the
    # snapped frequency should give: the same angle, sign and layout. Text tokens and slow bands keep the core's table.
    from comfy.ldm.flux.math import rope

    model = _tiny_qwen()
    ids = _sequence_ids(model, (3, 6), text_len=4, ref_hws=[(2, 7)], slots=[2])
    table = _circular(model)(ids)
    dim = AXES[2]
    omega = _rope_omega(dim)
    ratio = erp_circular.snap_to_whole_turns(omega, 6) / omega
    width = ids[..., 2]
    expected = torch.stack([rope(width * float(r), dim, 10000)[:, :, band] for band, r in enumerate(ratio)], dim=2)
    is_text = (ids[0, :, 0].unsqueeze(1) != ids[0, :, 0].unsqueeze(0)).sum(1) == ids.shape[1] - 1
    image_part = table[0, 0, ~is_text][:, WIDTH_SLICE.start:]
    assert torch.allclose(image_part, expected[0, ~is_text], atol=1e-6)
    assert torch.equal(table[0, 0, is_text], model.pe_embedder(ids)[0, 0, is_text])


def test_a_short_prompt_does_not_turn_an_image_token_into_text():
    # With one text token the target sits at time 1, so its token at height 1, width 1 reads (1, 1, 1) like text.
    model = _tiny_qwen()
    ids = _sequence_ids(model, (4, 4), text_len=1)
    table = _circular(model)(ids)
    lookalike = (ids[0] == torch.tensor([1.0, 1.0, 1.0])).all(dim=1)
    neighbor = (ids[0] == torch.tensor([1.0, 0.0, 1.0])).all(dim=1)
    assert bool(lookalike.any())
    assert torch.equal(table[0, 0, lookalike][..., WIDTH_SLICE, :, :], table[0, 0, neighbor][..., WIDTH_SLICE, :, :])


# --- Panorama Circular VAE: wrapping, the original untouched, tiled refused --------------------------------------------

def _tiny_qwen_vae():
    """A comfy.sd.VAE that ComfyUI detects as Qwen Image 2.1's (Wan 2.2 layout, temporal kernel 1), with few channels."""
    import comfy.sd
    from comfy.ldm.wan.vae2_2 import WanVAE

    torch.manual_seed(0)
    model = WanVAE(dim=4, dec_dim=4, z_dim=64, dim_mult=[1, 2, 4, 8, 8], num_res_blocks=2, attn_scales=[],
                   temperal_downsample=[False, True, True, True], dropout=0.0, image_channels=4, patch_size=1,
                   temporal_kernel=1)
    sd = {key: torch.randn_like(value) * 0.2 for key, value in model.state_dict().items()}
    return comfy.sd.VAE(sd=sd, dtype=torch.float32)


def _needs_vae_clone(test):
    """VAE.clone, which CircularVAE builds on, is in ComfyUI v0.44.0 and later; CI pins an older core."""
    import comfy.sd

    return pytest.mark.skipif(not hasattr(comfy.sd.VAE, "clone"), reason="this ComfyUI has no VAE.clone (v0.44.0+)")(test)


def _image(width=64, height=32):
    torch.manual_seed(1)
    return torch.rand(1, height, width, 3)


def _wrapped(vae, run):
    """Runs `run` with the VAE's model wrapping, as CircularVAE's encode and decode do (works without VAE.clone)."""
    with erp_circular._wrapping(vae.first_stage_model):
        return run()


def test_wrapping_joins_left_and_right_in_encode_and_decode():
    # Only a horizontally wrapped VAE commutes with turning the panorama: shift the input 16 px (one latent column)
    # and the output shifts by the same amount, all the way to the edges.
    vae, image = _tiny_qwen_vae(), _image()
    latent = _wrapped(vae, lambda: vae.encode(image))
    shifted = _wrapped(vae, lambda: vae.encode(torch.roll(image, 16, dims=2)))
    assert torch.allclose(shifted, torch.roll(latent, 1, dims=-1), atol=1e-4)
    picture = _wrapped(vae, lambda: vae.decode(latent))
    turned = _wrapped(vae, lambda: vae.decode(torch.roll(latent, 1, dims=-1)))
    assert torch.allclose(turned, torch.roll(picture, 16, dims=2), atol=1e-4)


def test_the_plain_vae_does_not_wrap():
    # The check above would pass for any VAE if it were too loose; the plain one must fail it.
    vae = _tiny_qwen_vae()
    latent = vae.encode(_image())
    assert not torch.allclose(vae.decode(torch.roll(latent, 1, dims=-1)), torch.roll(vae.decode(latent), 16, dims=2), atol=1e-4)


def test_wrapping_does_not_depend_on_decoding_in_row_strips(monkeypatch):
    import comfy.ldm.wan.vae2_2 as vae2_2

    vae = _tiny_qwen_vae()
    latent = vae.encode(_image())
    whole = _wrapped(vae, lambda: vae.decode(latent))
    monkeypatch.setattr(vae2_2, "STRIP_ELEMS", 64)  # many row strips; the plain VAE also moves by ~4e-5 here
    assert torch.allclose(_wrapped(vae, lambda: vae.decode(latent)), whole, atol=1e-4)


def test_the_vae_gives_the_same_bits_after_wrapping_ended():
    vae, image = _tiny_qwen_vae(), _image()
    latent_before = vae.encode(image)
    picture_before = vae.decode(latent_before)
    _wrapped(vae, lambda: vae.decode(vae.encode(image)))
    assert torch.equal(vae.encode(image), latent_before)
    assert torch.equal(vae.decode(latent_before), picture_before)


@_needs_vae_clone
def test_the_circular_vae_wraps_through_its_own_encode_and_decode():
    vae = _tiny_qwen_vae()
    circular, image = erp_circular.CircularVAE.from_vae(vae), _image()
    assert torch.equal(circular.encode(image), _wrapped(vae, lambda: vae.encode(image)))
    latent = vae.encode(image)
    assert torch.equal(circular.decode(latent), _wrapped(vae, lambda: vae.decode(latent)))


@_needs_vae_clone
@pytest.mark.parametrize("method", ["decode_tiled", "encode_tiled", "decode_tiled_", "encode_tiled_"])
def test_tiled_paths_are_refused_also_after_a_clone(method):
    circular = erp_circular.CircularVAE.from_vae(_tiny_qwen_vae())
    for vae in (circular, circular.clone()):
        assert isinstance(vae, erp_circular.CircularVAE)
        with pytest.raises(RuntimeError, match="in tiles"):
            getattr(vae, method)(torch.zeros(1, 64, 2, 4))


# --- The two nodes: what they accept, and passing twice ----------------------------------------------------------------

def _patcher(diffusion_model):
    import comfy.model_patcher

    holder = torch.nn.Module()
    holder.diffusion_model = diffusion_model
    return comfy.model_patcher.ModelPatcher(holder, load_device=torch.device("cpu"), offload_device=torch.device("cpu"))


def test_the_rope_node_patches_a_clone_and_leaves_the_input_model_alone():
    model = _patcher(_tiny_qwen())
    original = model.get_model_object("diffusion_model.pe_embedder")
    out = erp_circular.PanoramaCircularRoPENode.execute(model).args[0]
    assert out is not model
    assert isinstance(out.get_model_object("diffusion_model.pe_embedder"), erp_circular.CircularEmbedND)
    assert out.get_model_object("diffusion_model.pe_embedder").base is original
    assert model.get_model_object("diffusion_model.pe_embedder") is original


def test_the_rope_node_returns_a_model_it_already_patched_as_it_is():
    once = erp_circular.PanoramaCircularRoPENode.execute(_patcher(_tiny_qwen())).args[0]
    assert erp_circular.PanoramaCircularRoPENode.execute(once).args[0] is once


def test_the_rope_node_refuses_a_model_that_is_not_qwen_image_21():
    with pytest.raises(ValueError, match="Qwen Image 2.1"):
        erp_circular.PanoramaCircularRoPENode.execute(_patcher(torch.nn.Linear(2, 2)))


@_needs_vae_clone
def test_the_vae_node_returns_a_circular_vae_and_passing_it_again_changes_nothing():
    vae = _tiny_qwen_vae()
    once = erp_circular.PanoramaCircularVAENode.execute(vae).args[0]
    assert isinstance(once, erp_circular.CircularVAE) and not isinstance(vae, erp_circular.CircularVAE)
    assert erp_circular.PanoramaCircularVAENode.execute(once).args[0] is once


@_needs_vae_clone
def test_the_vae_node_refuses_a_vae_that_is_not_qwen_image_21s():
    import comfy.sd
    from comfy.ldm.wan.vae2_2 import WanVAE

    # A Wan 2.2 video VAE is the same class with a temporal kernel of 3 and 2x2 patches.
    video = WanVAE(dim=4, dec_dim=4, z_dim=48, dim_mult=[1, 2, 4, 4], num_res_blocks=2, attn_scales=[],
                   temperal_downsample=[False, True, True], dropout=0.0)
    wan22 = comfy.sd.VAE(no_init=True)
    wan22.first_stage_model, wan22.latent_dim = video, 3
    with pytest.raises(ValueError, match="Qwen Image 2.1"):
        erp_circular.PanoramaCircularVAENode.execute(wan22)


def test_the_rope_node_refuses_a_position_encoding_another_node_replaced():
    model = _patcher(_tiny_qwen())
    model.add_object_patch("diffusion_model.pe_embedder", torch.nn.Identity())
    with pytest.raises(ValueError, match="already replaced"):
        erp_circular.PanoramaCircularRoPENode.execute(model)


def test_wrapping_refuses_a_strided_padded_convolution():
    layer = torch.nn.Conv2d(1, 1, 3, stride=2, padding=1)
    with pytest.raises(ValueError, match="stride-1"):
        with erp_circular._wrapping(layer):
            pass
    assert not layer._forward_pre_hooks and not layer._forward_hooks


@_needs_vae_clone
def test_a_clone_of_the_circular_vae_shares_the_model_and_stays_circular():
    circular = erp_circular.CircularVAE.from_vae(_tiny_qwen_vae())
    copy = circular.clone()
    assert type(copy) is erp_circular.CircularVAE and copy.first_stage_model is circular.first_stage_model


def test_the_vae_node_says_when_comfyui_has_no_vae_clone(monkeypatch):
    monkeypatch.setattr(erp_circular, "VAE", object)
    with pytest.raises(ValueError, match="v0.44.0"):
        erp_circular.PanoramaCircularVAENode.execute(_tiny_qwen_vae())


def test_both_nodes_stop_with_the_reason_when_comfyui_has_no_qwen_image_21(monkeypatch):
    from comfyui_pano_suite import core_adapters

    monkeypatch.setattr(core_adapters, "CIRCULAR_UNAVAILABLE", "no Qwen Image 2.1 in this ComfyUI")
    with pytest.raises(ValueError, match="no Qwen Image 2.1"):
        erp_circular.PanoramaCircularRoPENode.execute(_patcher(_tiny_qwen()))
    with pytest.raises(ValueError, match="no Qwen Image 2.1"):
        erp_circular.PanoramaCircularVAENode.execute(_tiny_qwen_vae())


def test_a_fresh_clone_gets_the_patch_while_a_patched_clone_is_loaded():
    # ComfyUI keeps a patched model loaded; a new clone of the same model must still be patched, not taken for one.
    base = _patcher(_tiny_qwen())
    first = erp_circular.PanoramaCircularRoPENode.execute(base.clone()).args[0]
    first.patch_model()
    try:
        second = erp_circular.PanoramaCircularRoPENode.execute(base.clone()).args[0]
        assert isinstance(second.object_patches.get("diffusion_model.pe_embedder"), erp_circular.CircularEmbedND)
        assert not isinstance(second.object_patches["diffusion_model.pe_embedder"].base, erp_circular.CircularEmbedND)
    finally:
        first.unpatch_model()
    assert not isinstance(base.get_model_object("diffusion_model.pe_embedder"), erp_circular.CircularEmbedND)
