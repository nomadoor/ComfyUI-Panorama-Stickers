import { createPanoGlRenderer } from "./pano_gl_renderer.js";
import { createPanoramaTargetPool } from "./pano_render_targets.js";
import { createPanoramaRendererStateController } from "./pano_render_state.js";

export function createPanoramaRenderCore(options = {}) {
  const rendererFactory =
    typeof options?.rendererFactory === "function"
      ? options.rendererFactory
      : (rendererOptions) => createPanoGlRenderer(rendererOptions);
  const targetPoolFactory =
    typeof options?.targetPoolFactory === "function"
      ? options.targetPoolFactory
      : () => createPanoramaTargetPool();
  const stateControllerFactory =
    typeof options?.stateControllerFactory === "function"
      ? options.stateControllerFactory
      : (rendererState) => createPanoramaRendererStateController(rendererState);
  const renderer = rendererFactory(options);
  const directTargetCanvas = options?.targetCanvas || null;
  const targets = targetPoolFactory();
  let currentDescriptor = null;
  const state = stateControllerFactory({
    syncState(descriptor = {}) {
      if (typeof renderer.syncState === "function") {
        const nextDescriptor = { ...descriptor };
        const synced = renderer.syncState(nextDescriptor);
        if (!synced) return synced;
        currentDescriptor = nextDescriptor;
        return synced;
      }
      currentDescriptor = { ...descriptor };
      return true;
    },
  });

  function syncState(descriptor = {}) {
    return state.sync(descriptor);
  }

  function renderView(view = {}, params = {}) {
    if (!currentDescriptor) return null;
    return renderer.renderScene({
      ...currentDescriptor,
      view,
      width: params.width,
      height: params.height,
      dpr: params.dpr,
      backgroundOpacity: params.backgroundOpacity ?? currentDescriptor.backgroundOpacity ?? 1,
      showMaskTint: params.showMaskTint ?? currentDescriptor.showMaskTint ?? false,
    });
  }

  function renderToContext(ctx, rect, view = {}, params = {}) {
    if (!rect) return false;
    const renderScale = Math.min(1, Math.max(0.1, Number(params.renderScale ?? 1)));
    const surface = renderView(view, {
      ...params,
      width: Math.max(1, Math.round(rect.w * renderScale)),
      height: Math.max(1, Math.round(rect.h * renderScale)),
    });
    if (!surface) return false;
    if (!ctx) {
      return !!directTargetCanvas && surface === directTargetCanvas;
    }
    if (ctx.canvas && surface === ctx.canvas) return true;
    ctx.drawImage(surface, rect.x, rect.y, rect.w, rect.h);
    return true;
  }

  function renderToTarget(targetId, view = {}, params = {}) {
    const width = Number(params.width || 0);
    const height = Number(params.height || 0);
    if (!(width > 0) || !(height > 0)) return null;
    const entry = targets.ensureTarget(targetId, width, height);
    if (!entry) return null;
    const surface = renderView(view, {
      ...params,
      width,
      height,
    });
    if (!surface) return null;
    entry.ctx.clearRect(0, 0, entry.canvas.width, entry.canvas.height);
    entry.ctx.drawImage(surface, 0, 0, entry.canvas.width, entry.canvas.height);
    return entry.canvas;
  }

  function clearTarget(targetId) {
    targets.clearTarget(targetId);
  }

  function dispose() {
    targets.dispose();
    renderer.dispose?.();
    currentDescriptor = null;
  }

  function clearState() {
    currentDescriptor = null;
    state.clear();
  }

  return {
    isSupported: typeof renderer.isSupported === "function" ? () => renderer.isSupported() : () => false,
    syncState,
    renderView,
    renderToContext,
    renderToTarget,
    clearTarget,
    snapshotState: state.snapshot,
    clearState,
    dispose,
  };
}
