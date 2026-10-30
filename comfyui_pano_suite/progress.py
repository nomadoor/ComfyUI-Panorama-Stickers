"""Progress and Cancel for the long loops of an execution: writing a video or the editor files, and scanning a video."""
import comfy.model_management
from comfy.utils import ProgressBar


def loop_progress():
    """A `progress(done, total)` callback for one long loop of the running node. Each call raises ComfyUI's interrupt
    when Cancel was pressed, so the loop stops at that step, and moves the node's progress bar to `done` of `total`
    (None: unknown, the bar stays)."""
    bar = ProgressBar(1)

    def report(done: int, total: int | None = None):
        comfy.model_management.throw_exception_if_processing_interrupted()
        if total:
            bar.update_absolute(done, total)

    return report
