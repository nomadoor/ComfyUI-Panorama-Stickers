"""ComfyUI extension entrypoint.

Keep this file limited to the extension entrypoint and web asset directory so
the package import path stays predictable for ComfyUI and tests.
"""

import sys

# ComfyUI registers the package in sys.modules before running this file. Deciding by that, rather than by
# catching ImportError, lets an import error from a too-old ComfyUI core surface with its own message.
if __package__ in sys.modules:
    from .comfyui_pano_suite.nodes import comfy_entrypoint
else:
    # Direct module loading in test runners, without the package registered.
    from comfyui_pano_suite.nodes import comfy_entrypoint

# ComfyUI recursively scans this directory for frontend assets.
WEB_DIRECTORY = "web"

__all__ = ["comfy_entrypoint", "WEB_DIRECTORY"]
