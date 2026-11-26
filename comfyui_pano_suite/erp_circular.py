"""Panorama Circular RoPE and Panorama Circular VAE: two nodes that remove the left/right seam of a 360° ERP made with
Qwen Image 2.1 (docs/erp-circular.md, ADR 0068).

The module has three layers: pure math that knows no model, its application to Qwen Image 2.1, and two thin nodes."""
import contextlib
import math

import comfy.model_management
import torch
import torch.nn.functional as F
from comfy_api.latest import io

from . import core_adapters
from .core_adapters import VAE


def snap_to_whole_turns(omega, period):
    """The RoPE frequencies `omega` (radians per token) with every band that turns, over `period` tokens, a number of
    times whose nearest whole number is at least 1 replaced by the frequency that turns exactly that whole number of
    times. Slower bands are returned unchanged."""
    turns = torch.round(omega * period / (2 * math.pi))
    return torch.where(turns >= 1, turns * (2 * math.pi / period), omega)


def _rotations(angles):
    """RoPE rotation matrices [..., 2, 2] for angles [...], laid out as comfy.ldm.flux.math.rope lays them out."""
    cos, sin = torch.cos(angles), torch.sin(angles)
    return torch.stack([cos, -sin, sin, cos], dim=-1).unflatten(-1, (2, 2))


class CircularEmbedND(torch.nn.Module):
    """Qwen Image 2.1's position embedder with the width axis of image tokens made periodic over the target image.

    Wraps the model's own embedder and keeps its table; only the snapped width bands of image tokens are rewritten.
    In the sequence that build_sequence makes, each image's tokens share one time value and text tokens each have
    their own, and the target image comes last."""

    def __init__(self, base):
        super().__init__()
        self.base = base

    def forward(self, ids):
        table = self.base(ids)
        time, width = ids[..., 0], ids[..., -1]
        same_as_next = time[..., 1:] == time[..., :-1]
        is_image = F.pad(same_as_next, (1, 0)) | F.pad(same_as_next, (0, 1))
        is_target = time == time[..., -1:]
        period = (torch.where(is_target, width, -math.inf).amax(-1, keepdim=True)
                  - torch.where(is_target, width, math.inf).amin(-1, keepdim=True) + 1)

        device = ids.device if comfy.model_management.supports_fp64(ids.device) else torch.device("cpu")
        dim = self.base.axes_dim[-1]
        omega = 1.0 / self.base.theta ** torch.linspace(0, (dim - 2) / dim, steps=dim // 2, dtype=torch.float64, device=device)
        period = period.to(device=device, dtype=torch.float64).unsqueeze(-1)
        snapped = snap_to_whole_turns(omega, period)  # [batch, 1, bands]
        angles = width.to(device=device, dtype=torch.float32).unsqueeze(-1) * snapped
        periodic = _rotations(angles).to(dtype=table.dtype, device=table.device)  # [batch, tokens, bands, 2, 2]

        start = sum(self.base.axes_dim[:-1]) // 2
        rewrite = is_image.unsqueeze(-1) & (snapped != omega).to(table.device)  # [batch, tokens, bands]
        width_part = torch.where(rewrite[:, None, :, :, None, None], periodic.unsqueeze(1), table[..., start:, :, :])
        return torch.cat([table[..., :start, :, :], width_part], dim=-3)


def wrap_columns(x, pad):
    """`x` with `pad` columns from the opposite side added on the left and on the right."""
    return torch.cat([x[..., -pad:], x, x[..., :pad]], dim=-1)


def crop_columns(x, pad):
    """`x` without its `pad` leftmost and rightmost columns."""
    return x[..., pad:x.shape[-1] - pad]


@contextlib.contextmanager
def _wrapping(module):
    """While open, every horizontally padded convolution in `module` wraps left and right instead of padding with
    zeros, and the encoder's right-only zero pad fills from the left edge. Vertical padding stays zero.

    A convolution sees its input with `pad` columns from the opposite side added, pads with zeros as usual, and its
    output loses `pad` columns on each side again: the columns left are what a horizontally circular convolution
    gives. The hooks are the only change and come off on exit, so the module is exactly as before."""
    hooks = []
    try:
        for layer in module.modules():
            if isinstance(layer, (torch.nn.Conv2d, torch.nn.Conv3d)) and layer.padding != "valid":
                pad = layer.padding[-1] if not isinstance(layer.padding, str) else None
                if pad == 0:
                    continue
                if pad is None or layer.stride[-1] != 1:
                    raise ValueError("Panorama Circular VAE can wrap only stride-1 convolutions with numeric padding.")
                hooks.append(layer.register_forward_pre_hook(
                    lambda _layer, args, pad=pad: (wrap_columns(args[0], pad), *args[1:])))
                hooks.append(layer.register_forward_hook(lambda _layer, _args, out, pad=pad: crop_columns(out, pad)))
            elif isinstance(layer, torch.nn.ZeroPad2d) and tuple(layer.padding) == (0, 1, 0, 1):
                hooks.append(layer.register_forward_hook(_fill_right_pad_from_left))
        yield
    finally:
        for hook in hooks:
            hook.remove()


def _fill_right_pad_from_left(_layer, args, out):
    out[..., :-1, -1] = args[0][..., 0]
    return out


def _refuse_tiled(*_args, **_kwargs):
    raise RuntimeError(
        "Panorama Circular VAE cannot encode or decode in tiles: each tile would wrap on its own and draw false seams. "
        "This also happens when the VAE runs out of memory and ComfyUI falls back to tiles; free VRAM or use a smaller "
        "image.")


class CircularVAE(VAE):
    """A VAE whose encode and decode wrap left and right (docs/erp-circular.md). The wrapping exists only while this
    VAE encodes or decodes, so the shared model, and any other VAE on it, is untouched. A clone stays circular."""

    # comfy.sd.VAE.clone() builds a plain VAE(no_init=True) and copies its fields over, so the class is set afterwards.
    @classmethod
    def from_vae(cls, vae):
        circular = vae.clone()
        circular.__class__ = cls
        return circular

    def clone(self):
        circular = super().clone()
        circular.__class__ = type(self)
        return circular

    def encode(self, *args, **kwargs):
        with _wrapping(self.first_stage_model):
            return super().encode(*args, **kwargs)

    def decode(self, *args, **kwargs):
        with _wrapping(self.first_stage_model):
            return super().decode(*args, **kwargs)

    # Every way comfy.sd.VAE splits work into tiles, including its fallback when memory runs out.
    decode_tiled = encode_tiled = decode_tiled_ = encode_tiled_ = _refuse_tiled
    decode_tiled_1d = encode_tiled_1d = decode_tiled_3d = encode_tiled_3d = _refuse_tiled
    _decode_tiled_owned = _encode_tiled_owned = _refuse_tiled


def _require_core():
    if core_adapters.CIRCULAR_UNAVAILABLE:
        raise ValueError(core_adapters.CIRCULAR_UNAVAILABLE)


class PanoramaCircularRoPENode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaCircularRoPE",
            display_name="Panorama Circular RoPE",
            category="Panorama Suite",
            description=(
                "Make Qwen Image 2.1 draw a 360° ERP whose left and right edges join: the horizontal position encoding "
                "(RoPE) becomes periodic over the image width. Use it together with Panorama Circular VAE for both the "
                "reference encode and the decode; with a plain VAE the edges show a zipper."
            ),
            inputs=[io.Model.Input("model")],
            outputs=[io.Model.Output("model", display_name="model")],
        )

    @classmethod
    def execute(cls, model):
        _require_core()
        if not isinstance(model.get_model_object("diffusion_model"), core_adapters.QwenImage21Transformer2DModel):
            raise ValueError("Panorama Circular RoPE works only with Qwen Image 2.1 models.")
        embedder = model.get_model_object("diffusion_model.pe_embedder")
        if isinstance(embedder, CircularEmbedND):
            return io.NodeOutput(model)
        if not (hasattr(embedder, "axes_dim") and hasattr(embedder, "theta")):
            raise ValueError("Panorama Circular RoPE cannot work on this model: another node has already replaced its "
                             "position encoding.")
        patched = model.clone()
        patched.add_object_patch("diffusion_model.pe_embedder", CircularEmbedND(embedder))
        return io.NodeOutput(patched)


def _is_qwen_image21_vae(vae):
    # Wan 2.2's video VAE is the same class; Qwen Image 2.1's takes one image at a time, without patches.
    model = getattr(vae, "first_stage_model", None)
    return (type(vae) is VAE and isinstance(model, core_adapters.WanVAE) and vae.latent_dim == 2 and model.patch_size == 1
            and model.encoder.conv1.kernel_size[0] == 1)


class PanoramaCircularVAENode(io.ComfyNode):
    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaCircularVAE",
            display_name="Panorama Circular VAE",
            category="Panorama Suite",
            description=(
                "A Qwen Image 2.1 VAE whose encode and decode join the left and right edges of a 360° ERP. Use it with "
                "Panorama Circular RoPE, for both the reference encode and the decode. Tiled encode and decode are "
                "refused, since every tile would wrap on its own."
            ),
            inputs=[io.Vae.Input("vae")],
            outputs=[io.Vae.Output("vae", display_name="vae")],
        )

    @classmethod
    def execute(cls, vae):
        _require_core()
        if isinstance(vae, CircularVAE):
            return io.NodeOutput(vae)
        if not hasattr(VAE, "clone"):
            raise ValueError("Panorama Circular VAE needs ComfyUI v0.44.0 or later.")
        if not _is_qwen_image21_vae(vae):
            raise ValueError("Panorama Circular VAE works only with the Qwen Image 2.1 VAE.")
        return io.NodeOutput(CircularVAE.from_vae(vae))
