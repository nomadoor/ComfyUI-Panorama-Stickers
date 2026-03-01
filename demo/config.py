from __future__ import annotations

DEFAULT_PROMPT = (
    "Fill the green spaces according to the image. "
    "Outpaint as a seamless 360 equirectangular panorama (2:1). "
    "Keep the horizon level. Match left and right edges."
)

DEFAULT_SEED = 1234
DEFAULT_CFG_SCALE = 5.0
DEFAULT_STEPS = 20
DEFAULT_LORA_STRENGTH = 0.9

# Default to the public Hugging Face repo. Weights are cached by huggingface_hub
# outside this git repo on first use.
MODEL_ID = "black-forest-labs/FLUX.2-klein-base-4B"
LORA_SOURCE = ""
LORA_ADAPTER = "pano_demo"
LOCAL_FILES_ONLY = False

try:
    from .config_local import *  # noqa: F401,F403
except ImportError:
    pass
