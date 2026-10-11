"""The editor's route for the editor file of a 3D file `file` Source (docs/studio-node.md, "3D ファイルの `file` の
Source のエディタ用ファイル")."""
import asyncio
import json
import sys
import threading
import types

import pytest
import torch

pytest.importorskip("comfy_extras.nodes_gaussian_splat", reason="ComfyUI core is required to read 3D files")

import folder_paths
from aiohttp import web
from comfy_api.latest import Types
from comfy_extras.nodes_gaussian_splat import SplatToFile3D
from comfy_extras.nodes_save_3d import save_glb

from comfyui_pano_suite import nodes, routes
from comfyui_pano_suite.core.temp_files import TEMP_FILES
from scene_test_helpers import blob, blobs, temp_entry_path, triangle_glb

SQUARE = [[-0.5, 0.5, 0.0], [0.5, 0.5, 0.0], [0.5, -0.5, 0.0], [-0.5, -0.5, 0.0]]
SQUARE_FACES = [[0, 3, 2], [0, 2, 1]]


class _Request:
    def __init__(self, text: str):
        self.text = text

    async def json(self):
        return json.loads(self.text)


def _post(body) -> tuple[int, dict]:
    response = asyncio.run(routes.file_3d_editor_file(_Request(body if isinstance(body, str) else json.dumps(body))))
    return response.status, json.loads(response.text)


@pytest.fixture
def input_dir(tmp_path, monkeypatch):
    directory = tmp_path / "input"
    (directory / "3d").mkdir(parents=True)
    output = tmp_path / "output"
    (output / "3d").mkdir(parents=True)
    monkeypatch.setattr(folder_paths, "get_input_directory", lambda: str(directory))
    monkeypatch.setattr(folder_paths, "get_output_directory", lambda: str(output))
    return directory


def _glb(path, unlit=False):
    colors = torch.tensor([[0.2, 0.6, 0.9]] * 4)
    path.write_bytes(save_glb(torch.tensor(SQUARE), torch.tensor(SQUARE_FACES), vertex_colors=colors, unlit=unlit))
    return path


def test_a_mesh_file_gets_its_editor_glb_and_its_unlit_mark(input_dir):
    _glb(input_dir / "3d" / "lit.glb")
    _glb(input_dir / "3d" / "flat.glb", unlit=True)

    status, lit = _post({"filename": "lit.glb", "subfolder": "3d", "storage": "input"})
    _status, flat = _post({"filename": " flat.glb ", "subfolder": "/3d/"})

    assert status == 200 and lit["kind"] == "mesh" and lit["unlit"] is False and flat["unlit"] is True
    # The content's box in its own glTF frame (`content_box`), for the editor to fit the new Sticker with.
    assert lit["box"] == {"min": [-0.5, -0.5, 0.0], "max": [0.5, 0.5, 0.0]}
    entry = lit["file"]
    assert entry["type"] == "temp" and entry["format"] == "model/gltf-binary" and entry["pano_evictable"] is True
    path = temp_entry_path(entry)
    assert path.exists() and path.read_bytes()[:4] == b"glTF"
    # Written outside a run: registered without one, so it is not kept past the temp limit.
    assert TEMP_FILES._files[path][1] is None


def test_a_splat_file_gets_its_editor_ply(input_dir):
    SplatToFile3D.execute(blobs(blob((0.0, 0.0, 0.0), (1.0, 0.0, 0.0))), "ply").result[0].save_to(str(input_dir / "3d" / "blob.ply"))

    status, payload = _post({"filename": "blob.ply", "subfolder": "3d"})

    assert status == 200 and payload["kind"] == "splat" and "unlit" not in payload
    assert payload["box"] == {"min": [0.0, 0.0, 0.0], "max": [0.0, 0.0, 0.0]}
    assert payload["file"]["format"] == "application/ply" and temp_entry_path(payload["file"]).exists()


def test_the_route_and_the_node_read_a_file_once_and_share_its_editor_file(input_dir, monkeypatch):
    path = _glb(input_dir / "3d" / "model.glb")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    monkeypatch.setattr(nodes, "read_mesh_file", lambda file: reads.append(file) or read(file))
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: writes.append(progress) or write(value, progress))

    _status, payload = _post({"filename": "model.glb", "subfolder": "3d"})
    again = _post({"filename": "model.glb", "subfolder": "3d"})[1]
    on_input = nodes._scene_ui(nodes._read_scene_file(Types.File3D(str(path)), "scene"))

    assert len(reads) == 1 and len(writes) == 1
    # Outside a run the writer checks no Cancel and reports no progress.
    assert writes == [None]
    assert again["file"] == payload["file"] and on_input["pano_scene_files"][0]["filename"] == payload["file"]["filename"]


def test_concurrent_requests_for_one_file_read_and_write_it_once(input_dir, monkeypatch):
    _glb(input_dir / "3d" / "model.glb")
    reads, writes = [], []
    read, write = nodes.read_mesh_file, nodes.write_editor_files
    started = threading.Barrier(4, timeout=10)

    def slow_read(file):
        reads.append(threading.current_thread().name)
        return read(file)

    monkeypatch.setattr(nodes, "read_mesh_file", slow_read)
    monkeypatch.setattr(nodes, "write_editor_files", lambda value, progress=None: writes.append(1) or write(value, progress))
    results = []

    def request():
        started.wait()
        results.append(routes._file_3d_response({"filename": "model.glb", "subfolder": "3d"}))

    threads = [threading.Thread(target=request) for _ in range(4)]
    for thread in threads:
        thread.start()
    for thread in threads:
        thread.join(30)

    assert len(reads) == 1 and len(writes) == 1
    assert len({payload["file"]["filename"] for _status, payload in results}) == 1


def test_the_file_is_read_off_the_event_loop_thread(input_dir, monkeypatch):
    _glb(input_dir / "3d" / "model.glb")
    threads = []
    respond = routes._file_3d_response
    monkeypatch.setattr(routes, "_file_3d_response", lambda body: threads.append(threading.current_thread()) or respond(body))

    status, _payload = _post({"filename": "model.glb", "subfolder": "3d"})

    assert status == 200 and threads and threads[0] is not threading.main_thread()


@pytest.mark.parametrize("body, error", [
    ("{not json", "The request body is not JSON."),
    ("[1]", "The request needs a JSON object with the filename of a 3D file."),
    ({"subfolder": "3d"}, "The request needs a JSON object with the filename of a 3D file."),
    ({"filename": "  "}, "The request needs a JSON object with the filename of a 3D file."),
    ({"filename": "photo.png", "subfolder": "3d"}, "Could not read the 3D file 3d/photo.png: it is neither a splat file (a PLY with 3DGS properties, SPLAT, SPZ, KSPLAT) nor a mesh file (GLB, GLTF, OBJ, STL)."),
    ({"filename": "model.glb", "subfolder": "3d", "storage": "output"}, "Could not read the 3D file 3d/model.glb: only files in the input folder are read."),
    ({"filename": "model.glb", "subfolder": "3d", "storage": "temp"}, "Could not read the 3D file 3d/model.glb: only files in the input folder are read."),
    ({"filename": "missing.glb", "subfolder": "3d"}, "Could not read the 3D file 3d/missing.glb: the file was not found."),
    ({"filename": "secret.glb", "subfolder": "../outside"}, "Could not read the 3D file ../outside/secret.glb: the file was not found."),
])
def test_requests_for_what_is_not_a_3d_file_in_the_input_folder_are_400(input_dir, body, error):
    _glb(input_dir / "3d" / "photo.png")
    (input_dir.parent / "output" / "3d" / "model.glb").write_bytes(b"")
    (input_dir.parent / "outside").mkdir()
    _glb(input_dir.parent / "outside" / "secret.glb")

    assert _post(body) == (400, {"error": error})


def test_files_the_readers_cannot_read_are_422(input_dir):
    (input_dir / "3d" / "model.fbx").write_bytes(b"Kaydara FBX Binary")
    (input_dir / "3d" / "points.ply").write_bytes(b"ply\nformat ascii 1.0\nelement vertex 1\nproperty float x\nproperty float y\nproperty float z\nend_header\n0 0 0\n")

    fbx = _post({"filename": "model.fbx", "subfolder": "3d"})
    ply = _post({"filename": "points.ply", "subfolder": "3d"})

    assert fbx[0] == 422 and fbx[1]["error"].startswith("Could not read the 3D file 3d/model.fbx: Get3DComponents: .fbx parsing is not supported")
    assert ply == (422, {"error": "Could not read the 3D file 3d/points.ply: it is neither a splat file (a PLY with 3DGS properties, SPLAT, SPZ, KSPLAT) nor a mesh file (GLB, GLTF, OBJ, STL)."})


def test_a_compressed_gltf_is_422_naming_its_extension(input_dir):
    (input_dir / "3d" / "draco.glb").write_bytes(triangle_glb(["KHR_draco_mesh_compression"]))

    assert _post({"filename": "draco.glb", "subfolder": "3d"}) == (422, {"error": (
        "Could not read the 3D file 3d/draco.glb: it uses the glTF extension KHR_draco_mesh_compression, which Panorama "
        "Studio cannot draw; export the model without this compression.")})


def test_the_route_is_registered_on_comfyuis_server_and_skipped_without_one(monkeypatch):
    table = web.RouteTableDef()
    server = types.ModuleType("server")
    server.PromptServer = type("PromptServer", (), {"instance": types.SimpleNamespace(routes=table)})
    monkeypatch.setitem(sys.modules, "server", server)

    assert routes.register_routes() is True
    assert [(route.method, route.path, route.handler) for route in table] == [("POST", "/panorama_suite/file_3d", routes.file_3d_editor_file)]

    server.PromptServer = type("PromptServer", (), {})
    assert routes.register_routes() is False
    monkeypatch.setitem(sys.modules, "server", None)
    assert routes.register_routes() is False


def test_the_package_entrypoint_registers_the_route_when_it_is_imported(monkeypatch):
    import importlib.util
    from pathlib import Path

    table = web.RouteTableDef()
    server = types.ModuleType("server")
    server.PromptServer = type("PromptServer", (), {"instance": types.SimpleNamespace(routes=table)})
    monkeypatch.setitem(sys.modules, "server", server)

    def load():
        entry = Path(__file__).resolve().parent.parent / "__init__.py"
        spec = importlib.util.spec_from_file_location("pano_suite_entrypoint_test", entry)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        return module

    module = load()
    assert [(route.method, route.path) for route in table] == [("POST", "/panorama_suite/file_3d")]
    assert module.WEB_DIRECTORY == "web"
    # Without a running server the import still loads the nodes and adds nothing.
    server.PromptServer = type("PromptServer", (), {})
    assert load().comfy_entrypoint is not None and len(list(table)) == 1
