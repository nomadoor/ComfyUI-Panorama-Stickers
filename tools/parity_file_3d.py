"""The node's side of the 3D file Sticker parity scene (docs/render-contract.md, "エディタとの一致（照明の場面）",
"3D ファイルの Sticker の場面"). A milestone tool, not a CI test; nothing it writes is committed.

usage: python tools/parity_file_3d.py <work dir>      (with ComfyUI on PYTHONPATH)

It makes a box with normals and a checker texture, writes it with the core's save_glb as <work dir>/input/3d/box.glb,
places it as a 3D file `file` Source `world` Sticker in front of a Camera (turned so that three faces show), and
renders the first frame with Panorama Studio itself (`_resolve_sources` -> `render_frame`) on a black background.
It writes, for tools/parity_file_3d.mjs:

  scene.json   {"state", "glb", "unlit", "width", "height"}: the state, the editor file of the box as the editor's
               route returns it (copied into the work directory), and whether it draws without light
  output.png   the node's frame

It also makes the DA3_GEOMETRY mono scene (docs/render-contract.md, "エディタとの一致（DA3 mono の場面）") in
<work dir>/da3/: a synthetic 256 x 144 frame without intrinsics, connected to `scene` and shot twice, and the MoGe
scene in <work dir>/moge/ (2 perspective frames, `_moge_sequence`), the same way; each writes

  scene.json   {"kind": "depth_grid", "meta", "depth", "image", "video", "shots", "width", "height"}: the editor meta
               as the node gives it (`pano_scene_meta`) with its `video` entry left out, the depth file, the frame's
               image as a PNG (color (a)), the color proxy MP4 (color (b)), and per shot {"name", "state", "output"}
  depth_<i>.f32 (every frame; "depth" lists them), image.png, proxy.mp4, output_<shot>.png (frame 0)

And it makes the lens scenes (docs/render-contract.md, "エディタとの一致（レンズの場面）"; ADR 0042) in <work dir>/lens/:
for each lens curve of LENS_CASES, the box over an ERP background and a SPLAT shell alone, both on bg_color
#204060, LENS_SIZE square, and writes

  scene.json   {"size", "erp", "glb", "unlit", "splat_meta", "cases": [{"name", "curve", "hfov", "mesh", "splat",
               "output", "splat_output"}], "sticker_image", "sticker_source", "sticker_cases": [{"name", "state",
               "output"}]}: the ERP as a PNG, the box's editor GLB and mark, the SPLAT's `pano_scene_meta`, and per curve
               the states of the two shots and the node's frames; then the Sticker scenes (LENS_STICKER_CASES): a `sky`
               Sticker of one curve shot through a Camera of another, and a `world` Sticker's sphere patch (`lens`)
               shot from its lens center and from the side, on bg_color alone, their `file` Source (`sticker_source`)
               being `sticker_image` (low-frequency: smooth color bands under a soft 2 x 2 checker)
  erp.png, editor_box.glb, scene.ply (the SPLAT's editor file), output_<name>.png, output_<name>_splat.png,
  sticker.png, output_<sticker case>.png

ComfyUI's input and temp folders are pointed into the work directory while it runs.
"""
import json
import math
import shutil
import sys
from pathlib import Path

import numpy as np
import torch
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

SIZE = 1024
HFOV_DEG = 60.0
# The box sits 3 ahead of the Camera, turned so that its front, right, and top faces show.
BOX_POSITION = [0.0, 0.0, -3.0]
BOX_ROTATION = {"yaw_deg": 35.0, "pitch_deg": 25.0, "roll_deg": 0.0}


def _box():
    """A unit box with one normal and a full uv square per face, as (vertices, faces, normals, uvs)."""
    faces_axes = [((1, 0, 0), (0, 0, -1), (0, 1, 0)), ((-1, 0, 0), (0, 0, 1), (0, 1, 0)), ((0, 1, 0), (1, 0, 0), (0, 0, -1)),
                  ((0, -1, 0), (1, 0, 0), (0, 0, 1)), ((0, 0, 1), (1, 0, 0), (0, 1, 0)), ((0, 0, -1), (-1, 0, 0), (0, 1, 0))]
    vertices, normals, uvs, faces = [], [], [], []
    for normal, right, up in faces_axes:
        n, r, u = (np.asarray(axis, dtype=np.float32) for axis in (normal, right, up))
        base = len(vertices)
        for x, y in ((-1, 1), (1, 1), (1, -1), (-1, -1)):
            vertices.append(0.5 * (n + x * r + y * u))
            normals.append(n)
            uvs.append(((x + 1) / 2, (1 - y) / 2))
        faces += [[base, base + 3, base + 2], [base, base + 2, base + 1]]
    as_tensor = lambda values, dtype=torch.float32: torch.tensor(np.asarray(values), dtype=dtype)  # noqa: E731
    return as_tensor(vertices), as_tensor(faces, torch.int64), as_tensor(normals), as_tensor(uvs)


def _checker(size=256, squares=8):
    rows, columns = np.mgrid[:size, :size] * squares // size
    on = ((rows + columns) % 2 == 0)[..., None]
    return Image.fromarray(np.where(on, np.array([230, 190, 50]), np.array([30, 60, 140])).astype(np.uint8), mode="RGB")


DA3_WIDTH, DA3_HEIGHT = 256, 144
# The core's default K (fx = 0.7 W, principal point at the middle): the view that lays the image onto the output.
DA3_HFOV_DEG = math.degrees(2.0 * math.atan(DA3_WIDTH / 2.0 / (0.7 * DA3_WIDTH)))


def _da3_mono():
    """The synthetic DA3_GEOMETRY mono of the scene: a slanted plane (2 to about 3 ahead, gentle enough to keep every
    pixel) with one step (+0.5 from column 160), the top-left corner sky (1.0), the bottom-right corner of low
    confidence, a few NaN pixels; its image a 16-pixel checker of a light and a dark gray (edges on even pixels,
    brightness alone differs) with two plain color bands (for the color matrix)."""
    y, x = torch.meshgrid(torch.arange(DA3_HEIGHT, dtype=torch.float32), torch.arange(DA3_WIDTH, dtype=torch.float32), indexing="ij")
    depth = 2.0 + 0.004 * x + 0.002 * y + (x >= 160).float() * 0.5
    for row, column in ((70, 30), (71, 90), (90, 200), (20, 220)):
        depth[row, column] = float("nan")
    sky = torch.zeros_like(depth)
    sky[:30, :40] = 1.0
    confidence = torch.ones_like(depth)
    confidence[-30:, -40:] = 0.0
    light, dark = np.array([200, 200, 200]), np.array([70, 70, 70])
    checker = (((x // 16) + (y // 16)) % 2 == 0).numpy()[..., None]
    image = np.where(checker, light, dark).astype(np.uint8)
    image[96:112, 48:208] = (210, 70, 40)
    image[116:132, 48:208] = (40, 90, 210)
    return {"depth": depth[None], "image": torch.tensor(image, dtype=torch.float32)[None] / 255.0, "mode": "mono",
            "sky": sky[None], "confidence": confidence[None]}, image


def _moge_sequence():
    """The synthetic MOGE_GEOMETRY of the MoGe scene: 2 frames of the same plane and step as `_da3_mono`, its points
    the core's `depth_map_to_point_map` of that depth through a normalized K with the same view (as MoGeInference
    makes them with force_projection), the top-left corner outside `mask`, and the same image."""
    from comfyui_pano_suite.core_adapters import depth_map_to_point_map

    da3, image = _da3_mono()
    depth = torch.nan_to_num(da3["depth"][0], nan=2.5).expand(2, DA3_HEIGHT, DA3_WIDTH).contiguous()
    k = torch.tensor([[0.7, 0.0, 0.5], [0.0, 0.7 * DA3_WIDTH / DA3_HEIGHT, 0.5], [0.0, 0.0, 1.0]])[None].repeat(2, 1, 1)
    mask = torch.ones((2, DA3_HEIGHT, DA3_WIDTH), dtype=torch.bool)
    mask[:, :30, :40] = False
    return {"points": depth_map_to_point_map(depth, k), "depth": depth, "mask": mask, "intrinsics": k,
            "image": da3["image"].expand(2, DA3_HEIGHT, DA3_WIDTH, 3).contiguous()}, image


def _depth_grid_scene(work: Path, geometry: dict, image, label: str):
    import folder_paths

    from comfyui_pano_suite import nodes

    work.mkdir(parents=True, exist_ok=True)
    Image.fromarray(image, mode="RGB").save(work / "image.png")
    erp_width = next(width for width in range(SIZE, 8 * SIZE) if nodes._even_side(width / math.pi * math.tan(math.radians(DA3_HFOV_DEG) / 2)) == SIZE)
    # From the DA3 camera (the image lies on the output), and from the side, looking back at the plane's middle.
    shots = {"front": ([0.0, 0.0, 0.0], 0.0), "side": ([1.2, 0.3, 0.0], -25.0)}
    scene = {"kind": "depth_grid", "depth": [], "image": "image.png", "video": "proxy.mp4", "shots": [], "width": SIZE, "height": SIZE}
    for name, (position, yaw) in shots.items():
        state = {"version": 2, "camera": {"aspect": 1.0, "fov": {"value": DA3_HFOV_DEG}, "position": {"value": position},
                                          "rotation": {"value": {"yaw_deg": yaw, "pitch_deg": 0.0, "roll_deg": 0.0}}}}
        output = nodes.PanoramaStudioNode.execute(state_json=json.dumps(state), bg_color="#000000", coverage="360", output_size=str(erp_width), scene=geometry)
        frame = output.result[0][0]
        if tuple(frame.shape[:2]) != (SIZE, SIZE):
            raise SystemExit(f"The node drew {tuple(frame.shape[:2])}, not {SIZE} x {SIZE}.")
        Image.fromarray((frame.clamp(0.0, 1.0) * 255.0 + 0.5).floor().byte().cpu().numpy(), mode="RGB").save(work / f"output_{name}.png")
        scene["shots"].append({"name": name, "state": state, "output": f"output_{name}.png"})
        if name == "front":
            [meta] = output.ui["pano_scene_meta"]
            if meta["kind"] != "depth_grid":
                raise SystemExit(f"The {label} scene went to the editor as {meta['kind']}, not a depth grid.")
            temp = Path(folder_paths.get_temp_directory())
            for index, entry in enumerate(output.ui["pano_scene_files"]):
                shutil.copyfile(temp / entry["subfolder"] / entry["filename"], work / f"depth_{index}.f32")
                scene["depth"].append(f"depth_{index}.f32")
            shutil.copyfile(temp / meta["video"]["subfolder"] / meta["video"]["filename"], work / "proxy.mp4")
            scene["meta"] = {key: value for key, value in meta.items() if key != "video"}
    (work / "scene.json").write_text(json.dumps(scene, indent=2) + "\n", encoding="utf-8")
    print(f"{label}: {SIZE} x {SIZE}, shots {list(shots)} of frame 0 -> {work}")


LENS_SIZE = 512
# (name, κ, hFOV): the pinhole, a κ below 1 at 90 degrees, the stereographic lens, and the equidistant fisheye.
LENS_CASES = (("k1", 1.0, 90.0), ("k0_7", 0.7, 90.0), ("k0_5", 0.5, 140.0), ("k0", 0.0, 220.0))
LENS_BG_COLOR = "#204060"
_FORWARD = {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}
# (name, Camera, the Sticker's placement and Lanes): docs/render-contract.md, "エディタとの一致（レンズの場面）".
LENS_STICKER_CASES = (
    # A κ 0.5 `sky` Sticker through a pinhole, and a pinhole one through κ 0.5.
    ("sky_k0_5_by_k1", {"curve": 1.0, "hfov": 100.0, "position": [0.0, 0.0, 0.0], "rotation": _FORWARD},
     {"placement": "sky", "curve": {"value": 0.5}, "size": {"value": {"hFOV_deg": 140.0, "vFOV_deg": 140.0}}}),
    ("sky_k1_by_k0_5", {"curve": 0.5, "hfov": 140.0, "position": [0.0, 0.0, 0.0], "rotation": _FORWARD},
     {"placement": "sky", "size": {"value": {"hFOV_deg": 60.0, "vFOV_deg": 60.0}}}),
    # A κ 0, hFOV 220 `world` patch (as Pose handoff hands it: radius 2 around the origin) from its lens center, and
    # from the side, where the parallax shows its shape.
    ("world_k0_220_center", {"curve": 0.0, "hfov": 220.0, "position": [0.0, 0.0, 0.0], "rotation": _FORWARD},
     {"placement": "world", "position": {"value": [0.0, 0.0, -2.0]}, "scale": {"value": 4.0 * math.radians(110.0)},
      "lens": {"value": {"curve": 0.0, "hFOV_deg": 220.0}}}),
    ("world_k0_220_side", {"curve": 0.5, "hfov": 140.0, "position": [0.6, 0.2, 0.4], "rotation": {"yaw_deg": -15.0, "pitch_deg": -5.0, "roll_deg": 0.0}},
     {"placement": "world", "position": {"value": [0.0, 0.0, -2.0]}, "scale": {"value": 4.0 * math.radians(110.0)},
      "lens": {"value": {"curve": 0.0, "hFOV_deg": 220.0}}}),
)


def _lens_erp():
    """A low-frequency ERP (1024 x 512): smooth hue bands across, under an 8 x 4 checker of light and dark."""
    height, width = 512, 1024
    x = np.arange(width)[None, :].repeat(height, 0)
    y = np.arange(height)[:, None].repeat(width, 1)
    rgb = np.stack([0.5 + 0.35 * np.cos(2 * np.pi * (x / width - k / 3)) for k in range(3)], -1)
    checker = (((x * 8 // width) + (y * 4 // height)) % 2 == 0)[..., None]
    return (np.clip(np.where(checker, rgb * 1.15, rgb * 0.75), 0, 1) * 255 + 0.5).astype(np.uint8)


def _lens_splat():
    """A shell of 3000 large blobs 4 ahead in the SPLAT's 3DGS frame (Z forward), colored by direction (smooth)."""
    from comfy_api.latest import Types

    from comfyui_pano_suite.core_adapters import _C0

    generator = torch.Generator().manual_seed(3)
    count = 3000
    direction = torch.nn.functional.normalize(torch.randn((count, 3), generator=generator), dim=-1)
    positions = direction * 1.2 + torch.tensor([0.0, 0.0, 4.0])
    colors = (direction * 0.4 + 0.5).clamp(0, 1)
    rotations = torch.nn.functional.normalize(torch.randn((count, 4), generator=generator), dim=-1)
    return Types.SPLAT(positions[None], torch.full((1, count, 3), 0.12), rotations[None], torch.full((1, count, 1), 0.9),
                       ((colors - 0.5) / _C0)[None, :, None, :])


def _lens_scenes(work: Path, editor_glb: Path, unlit: bool):
    import folder_paths

    from comfyui_pano_suite import nodes
    from comfyui_pano_suite.core.math import lens_radius

    work.mkdir(parents=True, exist_ok=True)
    erp = _lens_erp()
    Image.fromarray(erp, mode="RGB").save(work / "erp.png")
    bg = torch.tensor(erp, dtype=torch.float32)[None] / 255.0
    shutil.copyfile(editor_glb, work / "editor_box.glb")
    splat = _lens_splat()
    scene = {"size": LENS_SIZE, "erp": "erp.png", "glb": "editor_box.glb", "unlit": unlit, "cases": []}

    def shoot(state, width, **inputs):
        output = nodes.PanoramaStudioNode.execute(state_json=json.dumps(state), bg_color=LENS_BG_COLOR, coverage="360", output_size=str(width), **inputs)
        frame = output.result[0][0]
        if tuple(frame.shape[:2]) != (LENS_SIZE, LENS_SIZE):
            raise SystemExit(f"The node drew {tuple(frame.shape[:2])}, not {LENS_SIZE} x {LENS_SIZE}.")
        return output, Image.fromarray((frame.clamp(0.0, 1.0) * 255.0 + 0.5).floor().byte().cpu().numpy(), mode="RGB")

    for name, curve, hfov in LENS_CASES:
        # The ERP width that gives LENS_SIZE through this lens (the node's own size rule).
        width = next(w for w in range(256, 64 * LENS_SIZE) if nodes._even_side(w / math.pi * lens_radius(math.radians(hfov) / 2, curve)) == LENS_SIZE)
        camera = {"aspect": 1.0, "fov": {"value": hfov}, "curve": {"value": curve}}
        mesh = {"version": 2, "camera": {**camera, "rotation": {"value": {"yaw_deg": 20.0, "pitch_deg": 10.0, "roll_deg": 0.0}}},
                "stickers": [{"id": "box", "placement": "world", "source": {"kind": "file", "filename": "box.glb", "subfolder": "3d", "storage": "input"},
                              "position": {"value": [-0.6, 0.3, -2.6]}, "rotation": {"value": BOX_ROTATION}, "scale": {"value": 1.0}}]}
        _output, image = shoot(mesh, width, bg_media=bg)
        image.save(work / f"output_{name}.png")
        # The SPLAT alone, the Camera facing it (its 3DGS frame looks along +Z, the Camera's front at rotation 0).
        look = {"version": 2, "camera": {**camera, "rotation": {"value": {"yaw_deg": 0.0, "pitch_deg": 0.0, "roll_deg": 0.0}}}}
        output, image = shoot(look, width, scene=splat)
        image.save(work / f"output_{name}_splat.png")
        if "splat_meta" not in scene:
            [entry] = output.ui["pano_scene_files"]
            shutil.copyfile(Path(folder_paths.get_temp_directory()) / entry["subfolder"] / entry["filename"], work / "scene.ply")
            scene["splat_meta"] = output.ui["pano_scene_meta"]
        scene["cases"].append({"name": name, "curve": curve, "hfov": hfov, "mesh": mesh, "splat": look,
                               "output": f"output_{name}.png", "splat_output": f"output_{name}_splat.png"})
    # The Sticker scenes: a `file` Source in ComfyUI's input folder.
    # Low-frequency material (docs/render-contract.md): smooth color bands, and a 2 x 2 checker of soft brightness.
    rows, columns = np.mgrid[:256, :256]
    hue = columns / 256.0
    bands = np.stack([0.5 + 0.35 * np.cos(2 * np.pi * (hue - k / 3)) for k in range(3)], -1)
    light = (((rows * 2 // 256) + (columns * 2 // 256)) % 2 == 0)[..., None]
    sticker = (np.clip(np.where(light, bands * 1.15, bands * 0.75), 0, 1) * 255 + 0.5).astype(np.uint8)
    Image.fromarray(sticker, mode="RGB").save(work / "sticker.png")
    stickers_dir = Path(folder_paths.get_input_directory()) / "panorama_stickers"
    stickers_dir.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(work / "sticker.png", stickers_dir / "sticker.png")
    source = {"kind": "file", "filename": "sticker.png", "subfolder": "panorama_stickers", "storage": "input"}
    scene.update(sticker_image="sticker.png", sticker_source=source, sticker_cases=[])
    for name, camera, sticker_value in LENS_STICKER_CASES:
        width = next(w for w in range(256, 64 * LENS_SIZE)
                     if nodes._even_side(w / math.pi * lens_radius(math.radians(camera["hfov"]) / 2, camera["curve"])) == LENS_SIZE)
        state = {"version": 2, "camera": {"aspect": 1.0, "fov": {"value": camera["hfov"]}, "curve": {"value": camera["curve"]},
                                          "position": {"value": camera["position"]}, "rotation": {"value": camera["rotation"]}},
                 "stickers": [{"id": "lens_sticker", "source": source, **sticker_value}]}
        _output, image = shoot(state, width)
        image.save(work / f"output_{name}.png")
        scene["sticker_cases"].append({"name": name, "state": state, "output": f"output_{name}.png"})
    (work / "scene.json").write_text(json.dumps(scene, indent=2) + "\n", encoding="utf-8")
    print(f"lens: {LENS_SIZE} x {LENS_SIZE}, cases {[case[0] for case in LENS_CASES]}, Sticker cases {[case[0] for case in LENS_STICKER_CASES]} -> {work}")


def main(work: Path):
    import folder_paths
    from comfy_extras.nodes_save_3d import save_glb

    from comfyui_pano_suite import nodes, routes

    work.mkdir(parents=True, exist_ok=True)
    (work / "input" / "3d").mkdir(parents=True, exist_ok=True)
    (work / "temp").mkdir(exist_ok=True)
    folder_paths.set_input_directory(str(work / "input"))
    folder_paths.set_temp_directory(str(work / "temp"))

    vertices, faces, normals, uvs = _box()
    (work / "input" / "3d" / "box.glb").write_bytes(save_glb(vertices, faces, uvs=uvs, normals=normals, texture_image=_checker()))
    state = {
        "version": 2,
        "camera": {"aspect": 1.0, "fov": {"value": HFOV_DEG}},
        "stickers": [{
            "id": "box", "placement": "world",
            "source": {"kind": "file", "filename": "box.glb", "subfolder": "3d", "storage": "input"},
            "position": {"value": BOX_POSITION}, "rotation": {"value": BOX_ROTATION}, "scale": {"value": 1.0},
        }],
    }

    # The editor file and the mark, as the editor's route returns them.
    status, payload = routes._file_3d_response({"filename": "box.glb", "subfolder": "3d", "storage": "input"})
    if status != 200:
        raise SystemExit(f"The route refused the box: {payload}")
    shutil.copyfile(Path(folder_paths.get_temp_directory()) / payload["file"]["subfolder"] / payload["file"]["filename"], work / "editor_box.glb")

    # Studio makes a perspective Camera's output 2 f tan(hFOV / 2) wide with f = ERP width / 2 pi: pick the ERP width
    # that gives SIZE (the node's own size rule, called with a width its menu does not list).
    erp_width = next(width for width in range(SIZE, 8 * SIZE) if nodes._even_side(width / math.pi * math.tan(math.radians(HFOV_DEG) / 2)) == SIZE)
    output = nodes.PanoramaStudioNode.execute(state_json=json.dumps(state), bg_color="#000000", coverage="360", output_size=str(erp_width))
    if output.ui.get("pano_sticker_warnings"):
        raise SystemExit(f"The node warned: {output.ui['pano_sticker_warnings']}")
    frame = output.result[0][0]
    height, width = frame.shape[:2]
    if (width, height) != (SIZE, SIZE):
        raise SystemExit(f"The node drew {width} x {height}, not {SIZE} x {SIZE}.")
    Image.fromarray((frame.clamp(0.0, 1.0) * 255.0 + 0.5).floor().byte().cpu().numpy(), mode="RGB").save(work / "output.png")
    scene = {"state": state, "glb": "editor_box.glb", "unlit": payload["unlit"], "width": width, "height": height}
    (work / "scene.json").write_text(json.dumps(scene, indent=2) + "\n", encoding="utf-8")
    print(f"{width} x {height} -> {work / 'output.png'}, {work / 'scene.json'}")
    _depth_grid_scene(work / "da3", *_da3_mono(), "DA3 mono")
    _depth_grid_scene(work / "moge", *_moge_sequence(), "MoGe")
    _lens_scenes(work / "lens", work / "editor_box.glb", payload["unlit"])


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: python tools/parity_file_3d.py <work dir>")
    main(Path(sys.argv[1]).resolve())
