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
<work dir>/da3/: a synthetic 256 x 144 frame without intrinsics, connected to `scene` and shot twice, and writes

  scene.json   {"kind": "depth_grid", "meta", "depth", "image", "video", "shots", "width", "height"}: the editor meta
               as the node gives it (`pano_scene_meta`) with its `video` entry left out, the depth file, the frame's
               image as a PNG (color (a)), the color proxy MP4 (color (b)), and per shot {"name", "state", "output"}
  depth_0.f32, image.png, proxy.mp4, output_<shot>.png

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


def _da3_scene(work: Path):
    import folder_paths

    from comfyui_pano_suite import nodes

    work.mkdir(parents=True, exist_ok=True)
    geometry, image = _da3_mono()
    Image.fromarray(image, mode="RGB").save(work / "image.png")
    erp_width = next(width for width in range(SIZE, 8 * SIZE) if nodes._even_side(width / math.pi * math.tan(math.radians(DA3_HFOV_DEG) / 2)) == SIZE)
    # From the DA3 camera (the image lies on the output), and from the side, looking back at the plane's middle.
    shots = {"front": ([0.0, 0.0, 0.0], 0.0), "side": ([1.2, 0.3, 0.0], -25.0)}
    scene = {"kind": "depth_grid", "depth": ["depth_0.f32"], "image": "image.png", "video": "proxy.mp4", "shots": [], "width": SIZE, "height": SIZE}
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
            [entry] = output.ui["pano_scene_files"]
            temp = Path(folder_paths.get_temp_directory())
            shutil.copyfile(temp / entry["subfolder"] / entry["filename"], work / "depth_0.f32")
            shutil.copyfile(temp / meta["video"]["subfolder"] / meta["video"]["filename"], work / "proxy.mp4")
            scene["meta"] = {key: value for key, value in meta.items() if key != "video"}
    (work / "scene.json").write_text(json.dumps(scene, indent=2) + "\n", encoding="utf-8")
    print(f"DA3 mono: {SIZE} x {SIZE}, shots {list(shots)} -> {work}")


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
    _da3_scene(work / "da3")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: python tools/parity_file_3d.py <work dir>")
    main(Path(sys.argv[1]).resolve())
