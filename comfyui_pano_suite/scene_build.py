"""The Scene that Panorama Studio builds from its state and inputs (`docs/studio-node.md`, "上流の Scene"): its
Sticker and painting sources, the upstream Scene's layers with this state's overrides, the Timeline, and the
media `ui` for the editors; and the `scene` output passed downstream."""
from collections import Counter
from dataclasses import replace

from . import file_3d
from . import media_ui as media_ui_module
from .comfy_image_resolver import resolve_painting_layer_payload
from .core.paint_state import empty_painting_state
from .core.render import SceneSources, StickerSource
from .core.scene_inherit import apply_upstream_overrides
from .core.scene_state import DEFAULT_ANIMATION, is_3d_file_source, load_scene_state
from .core.state import hex_to_rgb01, normalize_coverage
from .core.stickers import load_source_rgba
from .file_3d import _check_da3_inputs, _check_moge_inputs, _file_3d_error, _read_file_3d, _read_scene_file
from .media_ui import _bg_media_ui, _merge_ui_payload, _port_media_ui
from .pano_scene import PanoSceneValue, SceneLayer
from .port_sticker import _port_media, _port_rgba
from .scene_mesh import mesh_animation
from .scene_timeline import _decide_timeline, _open_media, _timing_video
from .sticker_media import PortMedia


def _resolve_sources(state: dict, port: PortMedia | None, warnings: list[str]) -> SceneSources:
    """Read every Sticker source into memory; the port Sticker's source holds the first frame of `port`, and
    3D media has none (`_render_frames` makes it for each pass). A 3D file `file` Source is read as its SPLAT or MESH
    into `contents`, for a `world` Sticker only. A hidden painting (`painting_visible`) is not drawn, its mask
    included. A source that cannot be read adds to `warnings`, and its Sticker is not drawn."""
    stickers, contents = {}, {}
    port_image = None if port is None or port.is_3d else _port_rgba(port.first_frame)
    for item in state["stickers"]:
        source = item["source"]
        if source["kind"] == "port":
            if port_image is not None:
                stickers[item["id"]] = StickerSource(port_image, item["crop"], item.get("z_index", 0), derive_vfov=True)
            continue
        if is_3d_file_source(source):
            content, reason = (None, "a sky Sticker cannot show a 3D file") if item["placement"] == "sky" else _read_file_3d(source)
            if content is None:
                warnings.append(f"{_file_3d_error(source, reason)} Sticker {item['id']} is not drawn.")
            else:
                contents[item["id"]] = content
            continue
        rgba = load_source_rgba(source)
        if rgba is None:
            warnings.append(f"Could not read the source of Sticker {item['id']}; it is not drawn.")
            continue
        stickers[item["id"]] = StickerSource(rgba, item["crop"], item.get("z_index", 0))
    return _painting_sources(state, stickers, contents)


def _painting_sources(state: dict, stickers: dict, contents: dict | None = None) -> SceneSources:
    """`SceneSources` of the Sticker sources `stickers`, the 3D files read for Stickers (`contents`), and the
    painting of `state`, empty when it is hidden."""
    contents = {} if contents is None else contents
    if not state["painting_visible"]:
        return SceneSources(stickers, empty_painting_state(), contents=contents)
    return SceneSources(stickers, state["painting"], resolve_painting_layer_payload(state["painting_layer"]), contents)


def _override_layers(upstream: PanoSceneValue, records: list[dict], warnings: list[str]) -> tuple[tuple, list[tuple]]:
    """The layers of the Scene `upstream` with this state's overrides (`upstream` records, ADR 0030) applied, and
    the ends of the Clip ranges the overrides set, as (Timeline frame of the layer, its `timeline.fps`); a port
    Sticker's Clip range without a duration ends with its media at the Timeline fps (`upstream.rate`).

    A record applies to the layer whose state has its `id`; with several such layers (a duplicated Studio), only to
    the nearest downstream one, with a warning. A layer that no record changes is the same `SceneLayer`."""
    ids = [layer.state["id"] for layer in upstream.layers]
    counts = Counter(ids)
    layers = list(upstream.layers)
    ends = []
    for record in records:
        if record["layer"] not in counts:
            continue
        if counts[record["layer"]] > 1:
            warnings.append(f"Scene id {record['layer']} is on {counts[record['layer']]} upstream Panorama Studio nodes; its overrides apply to the nearest one only.")
        index = len(ids) - 1 - ids[::-1].index(record["layer"])
        layers[index], layer_ends = _override_layer(layers[index], record, float(upstream.rate))
        ends += layer_ends
    return tuple(layers), ends


def _override_layer(layer: SceneLayer, record: dict, rate: float) -> tuple[SceneLayer, list[tuple]]:
    """`layer` with the override `record` applied (`apply_upstream_overrides`), its sources and port following the
    applied state, and the ends of the Clip ranges the record set (`_override_layers`). Neither input is changed."""
    state = apply_upstream_overrides(layer.state, record)
    if state is layer.state:
        return layer, []
    fps = state["timeline"]["fps"]
    stickers = {item["id"]: item for item in state["stickers"]}
    # `crop` and `z_index` are drawn from the source; a deleted Sticker has none.
    sources = {}
    for sticker_id, source in layer.sources.stickers.items():
        item = stickers.get(sticker_id)
        if item is not None:
            crop, z_index = item["crop"], item.get("z_index", 0)
            sources[sticker_id] = source if (crop, z_index) == (source.crop, source.z_index) else replace(source, crop=crop, z_index=z_index)
    # A deleted Sticker keeps no 3D file either.
    contents = {sticker_id: content for sticker_id, content in layer.sources.contents.items() if sticker_id in stickers}
    if state["painting_visible"] == layer.state["painting_visible"]:
        sources = replace(layer.sources, stickers=sources, contents=contents)
    else:
        sources = _painting_sources(state, sources, contents)
    port = layer.port
    if port is not None and port.sticker_id not in stickers:
        port = None
    elif port is not None and stickers[port.sticker_id]["clip"] != port.clip:
        # The media starts where the overridden Clip range puts it.
        port = port.with_clip(stickers[port.sticker_id]["clip"])
    overridden = {override["id"] for override in record["stickers"]
                  if "clip" in override and override["id"] in stickers and stickers[override["id"]]["placement"] == override["placement"]}
    clips = [stickers[sticker_id]["clip"] for sticker_id in overridden]
    if "clip" in record["scene"]:
        clips.append(state["scene"]["clip"])
    ends = [(clip["start"] + clip["duration"], fps) for clip in clips if clip["duration"] is not None]
    if port is not None and port.sticker_id in overridden and port.clip["duration"] is None:
        # Without a duration, the port Sticker ends with media that has frames, as in `_decide_timeline`.
        port_end = port.end(rate)
        if port_end is not None:
            ends.append((port_end, fps))
    return replace(layer, state=state, sources=sources, port=port), ends


def _build_scene(state_json: str, background, world, scene, sticker, sticker_state, background_color, background_range, warnings: list[str]):
    """The Scene that Studio builds from its inputs, as the PANO_SCENE value: the state with the port Sticker
    appended when missing, its sources, the Timeline (counting the state's Camera), and the media `ui` for the
    editors. Also returns the opened background and the port Sticker the state stored before (None without one).
    A source that cannot be read adds to `warnings`.

    `world` is the place's base 3D, drawn as this layer's `scene` content. A Scene on the `scene` input (ADR 0029,
    only a PANO_SCENE: ADR 0048) puts its layers under this state's, with the state's overrides of them (`upstream`,
    ADR 0030) applied (`_override_layers`), and sets the Timeline fps; its base 3D and `world` are drawn together.
    The editor `ui` shows the upstream layers as they came, without these overrides.
    The node's own `background`, when connected, is used with its `background_range` and `background_color`, in
    place of the upstream Scene's (ADR 0048); else the upstream background, when it has one, with its range and
    color, is passed on."""
    if scene is not None and not isinstance(scene, PanoSceneValue):
        raise TypeError("Panorama Studio: scene takes only the scene output (PANO_SCENE) of another Panorama Studio; "
                        f"connect 3D to world instead, not {type(scene).__name__}.")
    upstream = scene
    world = _read_scene_file(world, "world")
    sticker = _read_scene_file(sticker, "sticker")
    _check_da3_inputs(world, sticker)
    _check_moge_inputs(world, sticker)
    state = load_scene_state(state_json)
    stored_port = next((item for item in state["stickers"] if item["source"]["kind"] == "port"), None)
    port, handoff = _port_media(state, sticker, sticker_state, warnings)
    sources = _resolve_sources(state, port, warnings)
    inherited_bg = background is None and upstream is not None and upstream.bg_media is not None
    if inherited_bg:
        bg_media, coverage, bg_rgb = upstream.bg_media, upstream.coverage, upstream.bg_color
    else:
        bg_media, coverage = background, normalize_coverage(background_range)
        bg_rgb = tuple(hex_to_rgb01(background_color).tolist())
    bg = _open_media(bg_media, "background")
    # The upstream with this state's overrides applied (ADR 0030), which is drawn and passed on.
    applied, overridden_ends = upstream, []
    if upstream is not None:
        layers, overridden_ends = _override_layers(upstream, state["upstream"], warnings)
        applied = replace(upstream, layers=layers)
    _animation_warnings(state, world, port, sources.contents, warnings)
    rate, times, time_base, frames = _decide_timeline(state, bg, port, file_3d._scene_content(world), upstream=applied, overridden_ends=overridden_ends,
                                                      contents=sources.contents, inherited_bg=inherited_bg)
    fps = float(rate)
    # The `ui` shows the input media in the editor and on the node, under the legacy node's keys.
    layer_ui = {}
    if world is not None:
        _merge_ui_payload(layer_ui, media_ui_module._scene_ui(world, fps=fps))
    if port is not None:
        _merge_ui_payload(layer_ui, _port_media_ui(port, fps, time_base))
    if inherited_bg:
        bg_ui = upstream.bg_ui
    else:
        bg_ui = {} if bg_media is None else _bg_media_ui(bg_media, bg, fps)
    media_ui = {**layer_ui}
    if handoff is not None:
        # What sticker_state hands to the port Sticker on this run, for the editor to show apart from the overrides.
        media_ui["pano_sticker_handoff"] = [{"placement": "sky", "lanes": handoff, "fps": state["timeline"]["fps"]}]
    if upstream is None:
        _merge_ui_payload(media_ui, bg_ui)
        if _timing_video(bg, port) is not None:
            # The editor rebases the state to this fps and does not let it be edited (ADR 0024).
            media_ui["pano_timeline_fps"] = [fps]
    else:
        _merge_ui_payload(media_ui, _upstream_ui(upstream, bg_ui if inherited_bg else None))
        if not inherited_bg:
            _merge_ui_payload(media_ui, bg_ui)
        # The upstream Scene sets the Timeline fps; the editor shows its length too.
        media_ui.update(_timeline_ui(fps, len(frames)))
    layer = SceneLayer(state, sources, port, world, layer_ui)
    layers = (layer,) if upstream is None else (*applied.layers, layer)
    if inherited_bg:
        bg_clip = upstream.bg_clip
    else:
        bg_clip = None if bg_media is None else (state["background"]["clip"], state["timeline"]["fps"])
    built = PanoSceneValue(layers, bg_media, coverage, bg_rgb, rate, tuple(times), time_base, frames, bg_ui, media_ui, bg_clip)
    return built, bg, stored_port


def _animation_warnings(state: dict, world, port: PortMedia | None, contents: dict, warnings: list[str]):
    """Say which animated 3D files are asked for a clip they do not have; they play their first clip."""
    owners = [("the world input", state["scene"], world)]
    for item in state["stickers"]:
        media = port.media if item["source"]["kind"] == "port" and port is not None and port.is_3d else contents.get(item["id"])
        owners.append((f"Sticker {item['id']}", item, media))
    for name, owner, media in owners:
        animation = mesh_animation(media)
        clip = (owner.get("animation") or DEFAULT_ANIMATION)["clip"]
        if animation is not None and animation.clips and animation.clip_index(clip) is None:
            warnings.append(f"The 3D file of {name} has no clip named {clip!r}; it plays its first clip, {animation.clips[0].name!r}.")


def _timeline_ui(fps: float, frame_count: int) -> dict:
    """The `ui` of a Timeline: its fps (`pano_timeline_fps`) and length in output frames (`pano_timeline_frames`)."""
    return {"pano_timeline_fps": [fps], "pano_timeline_frames": [frame_count]}


def _upstream_ui(upstream: PanoSceneValue, bg_ui: dict | None) -> dict:
    """The `ui` that shows the layers of the Scene on the `scene` input in the editor, apart from the node's own
    media: `pano_upstream_layers` with each layer's state (with its Scene `id`, ADR 0030) and media `ui` from the
    farthest upstream, its output frame count (`pano_upstream_frames`, which the editor's Auto length counts),
    its coverage and color (`pano_upstream_coverage`, `pano_upstream_bg_color`, given with or without a background:
    the Preview, which has none of its own, draws with them), and the upstream background (`bg_ui`, None when it has
    none) under `pano_upstream_` keys with its Clip range (`pano_upstream_bg_clip`: the `background.clip` of the
    Studio it came from, with that state's `timeline.fps`)."""
    ui = {
        "pano_upstream_layers": [{"state": layer.state, "ui": layer.media_ui} for layer in upstream.layers],
        "pano_upstream_frames": [len(upstream.frames)],
        "pano_upstream_coverage": [upstream.coverage],
        "pano_upstream_bg_color": [list(upstream.bg_color)],
    }
    if bg_ui is not None:
        ui.update({key.replace("pano_", "pano_upstream_", 1): value for key, value in bg_ui.items()})
        if upstream.bg_clip is not None:
            ui["pano_upstream_bg_clip"] = [{"clip": upstream.bg_clip[0], "fps": upstream.bg_clip[1]}]
    return ui


def _scene_output(built: PanoSceneValue) -> PanoSceneValue:
    """The `scene` output of Studio: `built` with its own layer's state without the Camera (ADR 0029) and without
    its overrides of the upstream layers (`upstream`), which the layers before it already have applied: downstream
    receives the applied form (ADR 0030). The state keeps its `id`, which downstream keys its own overrides to."""
    layer = built.layers[-1]
    return replace(built, layers=(*built.layers[:-1], replace(layer, state={**layer.state, "camera": None, "upstream": []})))
