"""The files this package writes to ComfyUI's temp directory for the editor (MP4, PNG, PLY, GLB), bounded by bytes.

ComfyUI clears its temp directory only when it starts and exits, so each written file is registered here
(`TempFiles.writing`), and once they total more than `TEMP_MAX_BYTES`, the least recently used are deleted. A file
that the current run (prompt) wrote or put in an output's `ui` (`entry_from_path`) is not deleted during that run. The
`ui` entry of such a file has `pano_evictable` set, so that an editor that cannot open it later (404) can ask for the
workflow to be run again (`docs/runtime-resources.md`).
"""
import logging
import tempfile
import threading
from collections import OrderedDict
from contextlib import contextmanager
from pathlib import Path

try:
    import folder_paths
except Exception:  # pragma: no cover - optional in tests
    folder_paths = None

# The most the registered temp files may total before the oldest are deleted.
TEMP_MAX_BYTES = 5 * 1024 ** 3

_log = logging.getLogger(__name__)


def _resolve_temp_root() -> Path:
    if folder_paths is not None:
        try:
            return Path(folder_paths.get_temp_directory())
        except Exception:
            pass
    return Path(tempfile.gettempdir()) / "comfyui_panorama_stickers"


def ensure_temp_root() -> Path:
    root = _resolve_temp_root()
    root.mkdir(parents=True, exist_ok=True)
    return root


def temp_file_path(name: str) -> Path:
    """The path of a file `name` in ComfyUI's temp directory, which ComfyUI clears on start and exit."""
    return ensure_temp_root() / name


@contextmanager
def removed_on_failure(paths):
    """Remove the files of `paths` (a path, or a list that the block fills) when the block fails or is cancelled, so
    that no partial file is left. A file that cannot be removed (open elsewhere, as Windows refuses) is left for
    ComfyUI to clear; the block's own error is raised."""
    try:
        yield
    except BaseException:
        for path in [paths] if isinstance(paths, (str, Path)) else paths:
            remove_temp_file(Path(path))
        raise


def remove_temp_file(path: Path) -> bool:
    """Delete a file; whether it is gone. A file that cannot be deleted now, such as one a browser still plays on
    Windows, is left and logged."""
    try:
        path.unlink(missing_ok=True)
    except OSError as error:
        _log.debug("Panorama Stickers: could not delete the temp file %s now (%s).", path, error)
        return False
    return True


class TempFiles:
    """The registry of the temp files. `current_run()` names the run (prompt) executing now, or None outside one; the
    host sets it (`node_runtime.py`). Files of the current run are kept even past `max_bytes`."""

    def __init__(self, max_bytes: int = TEMP_MAX_BYTES, current_run=None):
        self.max_bytes = max_bytes
        self.current_run = current_run
        # path -> [bytes, the run that last wrote or used it]
        self._files = OrderedDict()
        self._lock = threading.Lock()

    @property
    def bytes(self) -> int:
        return sum(size for size, _run in self._files.values())

    def _run(self):
        return None if self.current_run is None else self.current_run()

    @contextmanager
    def writing(self, paths):
        """Register the files of `paths` (a path, or a list that the block fills) once the block has written them, and
        remove them when it fails or is cancelled."""
        with removed_on_failure(paths):
            yield
        self.add(*([paths] if isinstance(paths, (str, Path)) else paths))

    def add(self, *paths):
        """Register written files as used by the current run, then delete the oldest past `max_bytes`."""
        run = self._run()
        with self._lock:
            for path in paths:
                path = Path(path)
                self._files.pop(path, None)
                self._files[path] = [path.stat().st_size, run]
            self._evict(run)

    def use(self, path):
        """Mark a registered file as used by the current run, so that it is kept during the run."""
        with self._lock:
            entry = self._files.get(Path(path))
            if entry is not None:
                entry[1] = self._run()
                self._files.move_to_end(Path(path))

    def is_registered(self, path) -> bool:
        return Path(path) in self._files

    def _evict(self, run):
        total = sum(size for size, _run in self._files.values())
        for path in list(self._files):
            if total <= self.max_bytes:
                return
            size, used = self._files[path]
            if run is not None and used == run:
                continue
            # A file that cannot be deleted now stays registered and counted, and is tried again at the next write.
            if not remove_temp_file(path):
                continue
            del self._files[path]
            total -= size
            _log.debug("Panorama Stickers: deleted the temp file %s to keep temp under %d bytes.", path, self.max_bytes)


TEMP_FILES = TempFiles()


def entry_from_path(path: Path, *, media_type: str) -> dict:
    """The `ui` entry of a file in ComfyUI's temp directory, marked as used by the current run; a registered file has
    `pano_evictable` set."""
    root = ensure_temp_root().resolve()
    target = Path(path).resolve()
    try:
        subfolder = target.relative_to(root).parent.as_posix()
    except ValueError:
        subfolder = ""
    entry = {
        "filename": target.name,
        "subfolder": "" if subfolder == "." else subfolder,
        "type": "temp",
        "storage": "temp",
        "format": media_type,
    }
    if TEMP_FILES.is_registered(path):
        TEMP_FILES.use(path)
        entry["pano_evictable"] = True
    return entry
