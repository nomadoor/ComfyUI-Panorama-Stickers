"""The server route the editor asks for the editor file of a 3D file `file` Source (`docs/studio-node.md`, "3D ファイル
の `file` の Source のエディタ用ファイル"): read-only, from ComfyUI's input folder only, with the node's own reader and
editor-file writer, so that what the editor shows before a run is what the node draws.

`register_routes` adds it to ComfyUI's server when this package is imported; outside ComfyUI (tests, scripts) there
is no server and nothing is registered.
"""
import asyncio
import logging

from aiohttp import web

from .core.scene_state import is_3d_file_source, normalize_source
from .nodes import FILE_NOT_FOUND, NEITHER_3D_READER, _file_3d_error, _read_file_3d, _scene_ui

FILE_3D_ROUTE = "/panorama_suite/file_3d"

_log = logging.getLogger(__name__)


def _file_3d_response(body) -> tuple[int, dict]:
    """The status and JSON for a request `body`: 200 with the kind the editor loads, for a mesh whether it is
    `unlit`, and the `ui` entry of its editor file; 400 for a body that is not a Source of a 3D file in the input
    folder that is there; 422 when the reader cannot read the file. Errors are `{"error": text}`."""
    if not isinstance(body, dict) or not isinstance(body.get("filename"), str) or not body["filename"].strip():
        return 400, {"error": "The request needs a JSON object with the filename of a 3D file."}
    source = normalize_source({**body, "kind": "file"})
    if not is_3d_file_source(source):
        return 400, {"error": _file_3d_error(source, f"it is {NEITHER_3D_READER}")}
    if source["storage"] != "input":
        return 400, {"error": _file_3d_error(source, "only files in the input folder are read")}
    content, reason = _read_file_3d(source)
    if content is None:
        return (400 if reason == FILE_NOT_FOUND else 422), {"error": _file_3d_error(source, reason)}
    ui = _scene_ui(content, in_execution=False)
    meta = ui["pano_scene_meta"][0]
    return 200, {**meta, "file": ui["pano_scene_files"][0]}


async def file_3d_editor_file(request) -> web.Response:
    """POST FILE_3D_ROUTE: the response for the JSON body (`_file_3d_response`), read in another thread so that the
    server's event loop does not wait for the file."""
    try:
        body = await request.json()
    except ValueError:
        return web.json_response({"error": "The request body is not JSON."}, status=400)
    status, payload = await asyncio.to_thread(_file_3d_response, body)
    return web.json_response(payload, status=status)


def register_routes() -> bool:
    """Add the route to ComfyUI's server; whether it was added. Without ComfyUI's server (no `server` module, or
    no running `PromptServer`) nothing is added, and loading the nodes goes on."""
    try:
        from server import PromptServer
    except ImportError:
        return False
    instance = getattr(PromptServer, "instance", None)
    if instance is None:
        return False
    instance.routes.post(FILE_3D_ROUTE)(file_3d_editor_file)
    _log.debug("Panorama Stickers: registered %s", FILE_3D_ROUTE)
    return True
