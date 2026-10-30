"""ComfyUI picks its device when comfy.model_management is first imported, and without CUDA (a CPU-only torch, as in
CI) that import fails unless the core is told to use the CPU. Its --cpu flag is not parsed outside main.py, so tests
set it here before anything imports the core: in-process via conftest.py, and in each Python subprocess a test runs."""


def use_cpu_without_cuda():
    try:
        import torch
        import comfy.cli_args
    except ImportError:
        return
    if not torch.cuda.is_available():
        comfy.cli_args.args.cpu = True
