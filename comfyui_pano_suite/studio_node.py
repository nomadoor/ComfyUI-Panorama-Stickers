"""The Panorama Studio node (`docs/studio-node.md`): its schema, the output size, the run key the node surface
compares, and the `sticker_state` its Frame Camera hands on; the Scene is built by `scene_build.py` and rendered
by `scene_render.py`."""
import json
import math

from comfy_api.latest import io

from .core.render import Projection
from .core.scene_state import CAMERA_LANES, DEFAULT_EASING, STICKER_STATE_KIND
from .media_ui import _flush_warnings
from .pano_scene import PanoScene
from .port_sticker import _port_pose_ui
from .scene_build import _build_scene, _scene_output
from .scene_render import _render_outputs


MoGeGeometry = io.Custom("MOGE_GEOMETRY")
DA3Geometry = io.Custom("DA3_GEOMETRY")
MESH_FILE_TYPES = [io.File3DGLB, io.File3DGLTF, io.File3DFBX, io.File3DOBJ, io.File3DSTL, io.File3DUSDZ, io.File3DAny]
SPLAT_FILE_TYPES = [io.File3DPLY, io.File3DSPLAT, io.File3DSPZ, io.File3DKSPLAT, io.File3DSplatAny]


def _camera_sticker_state(state: dict, width: int, height: int) -> str:
    """`sticker_state` v2: each Lane of the state's Camera as its Keyframes at the fps the state records them at
    (not rebased to the Timeline fps, which would move them by up to half a frame), or its value as one Keyframe."""
    camera = state["camera"]
    lanes = {
        name: camera[name]["keyframes"] or [{"frame": 0, "value": camera[name]["value"], "easing": list(DEFAULT_EASING)}]
        for name, _value in CAMERA_LANES
    }
    payload = {"kind": STICKER_STATE_KIND, "version": 2, "fps": state["timeline"]["fps"], "camera": lanes, "source_aspect": width / height}
    return json.dumps(payload, ensure_ascii=True, separators=(",", ":"))


# The longest side of Panorama Studio's output (ADR 0048): 16 MP at 4 : 1 is 8192 x 2048.
STUDIO_MAX_OUTPUT_SIDE = 8192


def _to_multiple(value: float, multiple: int) -> int:
    """`value` rounded to a multiple of `multiple` (Python's round, as ComfyUI's Resolution Selector), at least one."""
    return max(multiple, round(value / multiple) * multiple)


def _studio_output_size(state: dict, megapixels: float, multiple: int, warnings: list[str]) -> tuple[int, int, tuple | None]:
    """The Studio output's size (ADR 0048; docs/studio-node.md "出力の大きさ"): `megapixels` x 1024 x 1024 pixels in
    sides that are multiples of `multiple`, by the state's Camera. A Panorama (`erp`) Camera keeps 2 : 1 (an
    `erp_range` of 180: 1 : 1) exactly: the height is rounded first and the width is that times the ratio. A Frame
    (`perspective`) Camera is `aspect` : 1 with each side rounded, as the Resolution Selector does. The FOV, the lens
    curve and the Keyframes do not count. A longest side past STUDIO_MAX_OUTPUT_SIDE is brought to the largest
    multiple under it, keeping the ratio, with a warning. web_src/pano_studio_status.js `studioOutputSize` gives the
    same (tests/fixtures/studio_output_size.json). Returns the width, the height, and the size before that reduction
    (None when it was not reduced)."""
    camera = state["camera"]
    total = megapixels * 1024 * 1024
    if camera["projection"] == "erp":
        ratio = 1 if camera["erp_range"] == 180 else 2
        height = _to_multiple(math.sqrt(total / ratio), multiple)
        size = (height * ratio, height)
        if height * ratio <= STUDIO_MAX_OUTPUT_SIDE:
            return *size, None
        reduced_height = max(multiple, STUDIO_MAX_OUTPUT_SIDE // (ratio * multiple) * multiple)
        reduced = (reduced_height * ratio, reduced_height)
    else:
        aspect = camera["aspect"]
        scale = math.sqrt(total / aspect)
        size = (_to_multiple(aspect * scale, multiple), _to_multiple(scale, multiple))
        if max(size) <= STUDIO_MAX_OUTPUT_SIDE:
            return *size, None
        # The longest side at the cap (the largest multiple under it), the other at the same ratio.
        longest = STUDIO_MAX_OUTPUT_SIDE // multiple * multiple
        fit = STUDIO_MAX_OUTPUT_SIDE / max(aspect * scale, scale)
        reduced = (longest, _to_multiple(scale * fit, multiple)) if aspect >= 1 else (_to_multiple(aspect * scale * fit, multiple), longest)
    warnings.append(f"The output would be {size[0]}x{size[1]}; it is reduced to {reduced[0]}x{reduced[1]} "
                    f"(the longest side is at most {STUDIO_MAX_OUTPUT_SIDE}).")
    return *reduced, size


def _key_number(value) -> str:
    """A widget number as JS writes it (String(Number(value))): a whole float without ".0"."""
    number = float(value)
    return str(int(number)) if number.is_integer() else repr(number)


def _studio_run_key(state_json: str, megapixels, multiple, background_range: str, background_color: str) -> str:
    """The key of the inputs a Studio run's size and output came from: FNV-1a (32 bit) over the code points of the
    five values joined by NUL, as `studioRunKey` (web_src/pano_studio_status.js) makes it, so that the node surface
    shows the run's size and output only while they are unchanged."""
    value = 0x811C9DC5
    for char in f"{state_json}\0{_key_number(megapixels)}\0{_key_number(multiple)}\0{background_range}\0{background_color}":
        value = ((value ^ ord(char)) * 0x01000193) & 0xFFFFFFFF
    return f"{value:08x}"


class PanoramaStudioNode(io.ComfyNode):
    """Builds the Scene and shoots it (ADR 0029) through the state's Camera, which is always there (ADR 0048): an ERP
    from its position and rotation (Panorama, `erp`), or its image (Frame, `perspective`)."""

    @classmethod
    def define_schema(cls):
        return io.Schema(
            node_id="PanoramaStudio",
            display_name="Panorama Studio",
            category="Panorama Suite",
            # By role (ADR 0048): the Scene it carries on, then from the far background to the things placed.
            inputs=[
                PanoScene.Input("scene", optional=True),
                io.MultiType.Input(io.Image.Input("background"), types=[io.Video], optional=True),
                io.MultiType.Input("world", types=[io.Splat, io.Mesh, *MESH_FILE_TYPES, *SPLAT_FILE_TYPES, MoGeGeometry, DA3Geometry], optional=True),
                io.MultiType.Input(io.Image.Input("sticker"), types=[io.Video, io.Mesh, io.Splat, *MESH_FILE_TYPES, *SPLAT_FILE_TYPES, MoGeGeometry, DA3Geometry], optional=True),
                io.String.Input("sticker_state", default="", multiline=False, dynamic_prompts=False, optional=True, force_input=True),
                io.Color.Input("background_color", default="#00ff00"),
                io.Combo.Input("background_range", options=["360", "180"], default="360"),
                io.Float.Input("megapixels", default=2.0, min=0.1, max=16.0, step=0.1),
                io.Int.Input("multiple", default=8, min=8, max=128, step=4, advanced=True),
                io.String.Input("state_json", default="", multiline=True, dynamic_prompts=False, advanced=True),
            ],
            # Mirroring the inputs, with `scene` on top so that the links between Studios run straight.
            outputs=[
                PanoScene.Output("scene"),
                io.Image.Output("first_frame"),
                io.Mask.Output("first_frame_mask"),
                io.Video.Output("video"),
                io.String.Output("sticker_state"),
            ],
            # An output node runs on every queue, so the editor receives the media in the `ui` even
            # when nothing downstream consumes the outputs.
            is_output_node=True,
        )

    @classmethod
    def execute(cls, background_color="#00ff00", background_range="360", megapixels=2.0, multiple=8, state_json="",
                scene=None, background=None, world=None, sticker=None, sticker_state=""):
        warnings = []
        built, bg, stored_port = _build_scene(state_json, background, world, scene, sticker, sticker_state, background_color, background_range, warnings)
        state = built.layers[-1].state
        camera = state["camera"]
        width, height, reduced_from = _studio_output_size(state, megapixels, multiple, warnings)
        # The Camera shoots whether it is shown or hidden (ADR 0048); `built.coverage` is the background's range.
        if camera["projection"] == "erp":
            projection = Projection.erp(width, height, camera["erp_range"], built.coverage)

            def capture(evaluated):
                return evaluated["camera"], projection
        else:
            def capture(evaluated):
                return evaluated["camera"], Projection.perspective(width, height, evaluated["camera"]["hFOV_deg"], built.coverage, evaluated["camera"]["curve"])

        image, mask, video = _render_outputs(built, bg, capture, (width, height))
        # Only a Frame Camera hands its pose to a Sticker (Pose handoff).
        handoff = _camera_sticker_state(state, width, height) if camera["projection"] == "perspective" else ""
        ui_ret = {**built.media_ui, **_port_pose_ui(state, built.layers[-1].port, stored_port)}
        # The size the run gave, which media and an upstream Scene can make differ from what the surface works out.
        ui_ret["pano_output_size"] = [{"width": width, "height": height, "capped": reduced_from is not None,
                                       "reduced_from": None if reduced_from is None else list(reduced_from),
                                       "key": _studio_run_key(state_json, megapixels, multiple, background_range, background_color)}]
        _flush_warnings(ui_ret, "pano_sticker_warnings", warnings)
        # The `scene` output is the World that is shot, without the Camera (ADR 0029).
        return io.NodeOutput(_scene_output(built), image, mask, video, handoff, ui=ui_ret)
