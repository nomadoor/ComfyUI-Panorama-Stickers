// Whether ComfyUI is running a job (docs/threejs-spark-integration.md "生成を邪魔しない"), from its api's `status`
// event: running while its queue has a job (`detail.exec_info.queue_remaining > 0`, the job running counted). The
// server sends `status` to every client whenever its queue changes and again to a client that (re)connects, so a job
// queued from another tab or client counts, and a job that ended while the socket was down does not stay running. A
// `status` without a queue (the frontend sends one with no detail when the socket closes) is not running. The editor
// then loads nothing at rest and lets go of the items it does not draw, so the job and the browser do not fight over
// memory and the GPU.

function queueRunning(detail) {
  const remaining = Number(detail?.exec_info?.queue_remaining);
  return Number.isFinite(remaining) && remaining > 0;
}

// api: ComfyUI's (addEventListener / removeEventListener), or null (never running). onChange(running) runs when it
// changes. Returns { running(), dispose() }.
export function watchComfyRunning(api, onChange = () => {}) {
  let running = false;
  const listener = (event) => {
    const next = queueRunning(event?.detail);
    if (running === next) return;
    running = next;
    onChange(running);
  };
  if (api?.addEventListener) api.addEventListener("status", listener);
  return {
    running: () => running,
    dispose() {
      if (api?.removeEventListener) api.removeEventListener("status", listener);
    },
  };
}
