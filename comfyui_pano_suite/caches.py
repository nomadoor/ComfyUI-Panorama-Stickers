"""Memory accounting of what this package keeps or uploads."""
import numpy as np
import torch


def nbytes(value) -> int:
    """The bytes of the arrays and tensors in `value`: an array or tensor, a list, tuple, or dict of them, or an
    object holding them as attributes (SPLAT, MESH). Anything else counts 0."""
    if isinstance(value, np.ndarray):
        return value.nbytes
    if isinstance(value, torch.Tensor):
        return value.numel() * value.element_size()
    if isinstance(value, dict):
        return sum(nbytes(item) for item in value.values())
    if isinstance(value, (list, tuple)):
        return sum(nbytes(item) for item in value)
    if hasattr(value, "__dict__") and not callable(value):
        return sum(nbytes(item) for item in vars(value).values())
    return 0
