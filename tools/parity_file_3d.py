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


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("usage: python tools/parity_file_3d.py <work dir>")
    main(Path(sys.argv[1]).resolve())
