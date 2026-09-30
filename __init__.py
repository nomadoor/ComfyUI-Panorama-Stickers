"""ComfyUI extension entrypoint.

Keep this file limited to the extension entrypoint and web asset directory so
the package import path stays predictable for ComfyUI and tests.
"""

try:
    from .comfyui_pano_suite.nodes import comfy_entrypoint
except ImportError:
    # Allow direct module loading in test runners without package context.
    from comfyui_pano_suite.nodes import comfy_entrypoint

# ComfyUI recursively scans this directory for frontend assets.
WEB_DIRECTORY = "web"

__all__ = ["comfy_entrypoint", "WEB_DIRECTORY"]
