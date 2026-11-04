"""The PANO_SCENE value (`docs/studio-node.md`, "`PANO_SCENE`"): the Scene a Panorama Studio derives on each
execution, layer by layer, and the port type that carries it."""
from dataclasses import dataclass
from fractions import Fraction

from comfy_api.latest import io

from .core.render import SceneSources
from .sticker_media import PortMedia

PanoScene = io.Custom("PANO_SCENE")


@dataclass(frozen=True, eq=False)
class SceneLayer:
    """One Panorama Studio's own part of a Scene (ADR 0029): its state bound to its inputs.

    `state` is the loaded `state_json` with the port Sticker appended when missing, and `sources` its Sticker
    sources read into memory; the port Sticker's source is a template holding the first frame of `port`, the
    media on the sticker input (None without one), whose frames come from `port.frames()` at `port.index_at`.
    3D media has no template: `port.frames()` is its content, and `_port_source_at` the item to draw. `scene` is
    the 3D media on the `scene` input (None without one), a 3D file as the SPLAT or MESH read from it
    (`_read_scene_file`), as is the 3D media in `port`. `media_ui` is the part of the execution `ui` that shows the
    layer's own media in an editor (the `sticker` media and the `scene` and 3D Sticker editor files); the files are
    the producing node's and are not written again.
    """

    state: dict
    sources: SceneSources
    port: PortMedia | None
    scene: object
    media_ui: dict


@dataclass(frozen=True, eq=False)
class PanoSceneValue:
    """The PANO_SCENE output: a Scene derived on each execution from the states and inputs of a chain of nodes
    (ADR 0025, ADR 0029).

    `layers` holds a `SceneLayer` for each node of the chain, from the farthest upstream to the node that made it,
    flat: a PANO_SCENE never holds another. `bg_media` (IMAGE, VIDEO, or None) is the input as given, `coverage`
    its span, and `bg_color` 0..1 RGB, all from the farthest upstream node that has a `bg_media`. `bg_ui` is the
    `ui` that shows that `bg_media` in an editor, and `bg_clip` its Clip range (`background.clip`) with the
    `timeline.fps` of that node's state, or None without `bg_media`. The output size is not part of it; each
    consumer sets its own. `rate` is the Timeline fps as the fraction (a)
    decided (`fps` as a float), `times` each output frame's time in seconds (Fraction), and `time_base` the step
    those times are rounded to (0: exact). `frames` holds per output frame the `bg_media` frame to draw and, for
    each layer, the Timeline frame of its state to evaluate, the `port` frame, and the `scene` item, as
    `_decide_timeline` returns them. `media_ui` is the part of the producing node's execution `ui` that shows its
    media in an editor (with the upstream layers, `docs/studio-node.md`); a consumer passes it on in its own
    `ui`. Consumers must not modify it; the same value reaches every node linked to the output.
    """

    layers: tuple
    bg_media: object
    coverage: int
    bg_color: tuple
    rate: Fraction
    times: tuple
    time_base: Fraction
    frames: tuple
    bg_ui: dict
    media_ui: dict
    bg_clip: tuple | None = None

    @property
    def fps(self) -> float:
        return float(self.rate)
