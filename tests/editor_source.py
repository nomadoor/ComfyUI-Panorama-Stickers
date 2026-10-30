from pathlib import Path

WEB_SRC = Path(__file__).resolve().parent.parent / "web_src"


def editor_files():
    """The Panorama editor's code: pano_editor.js and its modules under web_src/editor/."""
    return [WEB_SRC / "pano_editor.js", *sorted((WEB_SRC / "editor").glob("*.js"))]


def editor_source():
    return "\n".join(path.read_text(encoding="utf-8") for path in editor_files())
