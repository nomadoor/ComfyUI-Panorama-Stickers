from __future__ import annotations

from demo.app import STATIC_DIR, demo


if __name__ == "__main__":
    demo.launch(server_name="0.0.0.0", server_port=7860, allowed_paths=[str(STATIC_DIR)])
