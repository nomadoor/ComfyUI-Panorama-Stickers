import { normalizeCoverageValue, parsePanoEditorState } from "./pano_editor_state.js";
import { applyCutoutNodeSurfaceAction } from "./pano_cutout_node_surface.js";
import { isPanoramaPreviewNodeName, isPanoramaPreviewSceneNodeName } from "./pano_preview_identity.js";
import { linkedInputType } from "./pano_preview_video.js";
import { runExternalStickerSync } from "./pano_external_sticker_sync.js";
import { chainWidgetCallback } from "./pano_widget_callback.js";
import { VIEW_CONTROLS_SETTING } from "./pano_view_controls.js";
import { DIAGNOSTICS_EXPORT_COMMAND, DIAGNOSTICS_SETTING } from "./pano_diagnostics.js";
import { disposeNodeRuntime, editorSession, nodeSurface, peekSceneViewer, previewNode, stateSync } from "./pano_node_bridge.js";

const STATE_WIDGET = "state_json";

function getWidget(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name) || null;
}

function initializeNewCutoutFrame(node) {
  const stateWidget = getWidget(node, STATE_WIDGET);
  if (!stateWidget) return false;
  const raw = String(stateWidget.value ?? "").trim();
  if (raw && raw !== "{}") return false;
  const state = parsePanoEditorState(raw, {
    coverage: getWidget(node, "coverage")?.value,
  });
  const result = applyCutoutNodeSurfaceAction(state, { type: "add-frame" });
  if (!result.changed) return false;
  const text = JSON.stringify(result.state);
  stateWidget.value = text;
  stateWidget.callback?.(text);
  return true;
}

function syncCoverageWidgetRedraw(node, app) {
  if (!node || stateSync(node).coverageSyncInstalled) return;
  // Panorama Studio and the Preview name it `background_range` (ADR 0048); the legacy nodes `coverage`.
  const coverageWidget = getWidget(node, "background_range") ?? getWidget(node, "coverage");
  if (!coverageWidget) return;
  chainWidgetCallback(coverageWidget, () => {
    const sync = stateSync(node);
    sync.parsedState = null;
    sync.liveState = null;
    previewNode(node).runtime?.requestDraw?.();
    nodeSurface(node).dom?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
    node.graph?.setDirtyCanvas?.(true, true);
    app?.canvas?.setDirty?.(true, true);
  });
  stateSync(node).coverageSyncInstalled = true;
}

function isHexColorString(value) {
  const text = String(value ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(text) || /^#?[0-9a-fA-F]{3}$/.test(text);
}

function looksLikeJsonObjectString(value) {
  const text = String(value ?? "").trim();
  return text.startsWith("{") && text.endsWith("}");
}

function migratePanoramaStickersWidgetOrder(node) {
  if (!node) return;
  const coverage = getWidget(node, "coverage");
  const background = getWidget(node, "bg_color");
  const stateWidget = getWidget(node, STATE_WIDGET);
  const stickerState = getWidget(node, "sticker_state");
  if (!coverage || !background || !stateWidget) return;
  const coverageRaw = String(coverage.value ?? "").trim();
  const backgroundRaw = String(background.value ?? "").trim();
  const stateRaw = String(stateWidget.value ?? "").trim();
  const needsMigration = !/^(180|360)$/.test(coverageRaw)
    && isHexColorString(coverageRaw)
    && (looksLikeJsonObjectString(backgroundRaw) || backgroundRaw === "");
  if (!needsMigration) return;
  let migratedCoverage = "360";
  if (looksLikeJsonObjectString(backgroundRaw)) {
    try {
      migratedCoverage = String(normalizeCoverageValue(JSON.parse(backgroundRaw)?.coverage));
    } catch {
      migratedCoverage = "360";
    }
  }
  coverage.value = migratedCoverage;
  coverage.callback?.(migratedCoverage);
  background.value = coverageRaw;
  background.callback?.(coverageRaw);
  stateWidget.value = backgroundRaw;
  stateWidget.callback?.(backgroundRaw);
  if (stickerState) {
    stickerState.value = stateRaw;
    stickerState.callback?.(stateRaw);
  }
  node.setDirtyCanvas?.(true, true);
}

function hideWidget(node, widgetName) {
  const widgets = Array.isArray(node?.widgets) ? node.widgets : [];
  widgets.forEach((widget) => {
    const name = String(widget?.name || "");
    if (!(name === widgetName || name.trim() === widgetName || name.toLowerCase().includes(String(widgetName).toLowerCase()))) return;
    if (widget.__panoHidden) return;
    widget.__panoHidden = true;
    widget.__panoComputeSizeBeforeHide = widget.computeSize;
    widget.computeSize = () => [0, 0];
    widget.type = "hidden";
    widget.hidden = true;
    widget.options = { ...(widget.options || {}), hidden: true };
    if (widget.element?.style) widget.element.style.display = "none";
    if (widget.parentEl?.style) widget.parentEl.style.display = "none";
  });
}

function ensureActionButtonWidget(node, buttonText, callback) {
  if (!node || typeof node.addWidget !== "function") return null;
  const widgets = Array.isArray(node.widgets) ? node.widgets : [];
  let widget = widgets.find((entry) => String(entry?.name || "") === String(buttonText));
  if (widget) {
    widget.callback = callback;
    widget.hidden = false;
    widget.__panoHidden = false;
    widget.type = "button";
    widget.options = { ...(widget.options || {}), hidden: false };
    if (typeof widget.__panoComputeSizeBeforeHide === "function") {
      widget.computeSize = widget.__panoComputeSizeBeforeHide;
    }
    delete widget.__panoComputeSizeBeforeHide;
    if (widget.element?.style) widget.element.style.display = "";
    if (widget.parentEl?.style) widget.parentEl.style.display = "";
    const computedSize = typeof widget.computeSize === "function" ? widget.computeSize() : null;
    if (!Array.isArray(computedSize)
      || Number(computedSize[0] || 0) <= 0
      || Number(computedSize[1] || 0) <= 0) {
      widget.computeSize = () => [Math.max(120, Number(node?.size?.[0] || 0) - 20), 30];
    }
    return widget;
  }
  widget = node.addWidget("button", buttonText, null, callback);
  if (widget) widget.serialize = false;
  return widget;
}

async function waitForPendingStickerUploads(node, { tolerateOperationFailure = false } = {}) {
  const pending = stateSync(node)?.pendingStickerUploads;
  if (!pending) return;
  while (pending.size > 0) {
    const entries = Array.from(pending.entries());
    if (tolerateOperationFailure) {
      await Promise.allSettled(entries.map(([, promise]) => promise));
    } else {
      await Promise.all(entries.map(([, promise]) => promise));
    }
    entries.forEach(([assetId, promise]) => {
      if (pending.get(assetId) === promise) pending.delete(assetId);
    });
  }
}

export function queuePendingStickerOperation(node, operationId, operation) {
  if (!node || typeof operation !== "function") {
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  }
  const sync = stateSync(node);
  const previous = sync.stickerOperationTail;
  const ready = previous && typeof previous.then === "function"
    ? previous.catch(() => undefined)
    : Promise.resolve();
  const pending = ready.then(() => operation());
  const tail = pending.catch(() => undefined);
  sync.stickerOperationTail = tail;
  sync.pendingStickerUploads.set(operationId, pending);
  const cleanup = () => {
    if (sync.pendingStickerUploads.get(operationId) === pending) {
      sync.pendingStickerUploads.delete(operationId);
    }
  };
  pending.then(cleanup, cleanup);
  tail.then(() => {
    if (sync.stickerOperationTail === tail) sync.stickerOperationTail = null;
  });
  return pending;
}

export async function flushPanoStateProducers(node, options = {}) {
  await waitForPendingStickerUploads(node, options);
  const flushers = Array.from(stateSync(node)?.flushers ?? []);
  for (const flush of flushers) await flush();
  await editorSession(node)?.flushBeforeQueue?.();
}

function installStateQueueBarrier(node, stateWidget) {
  if (!stateWidget || stateWidget.__panoQueueBarrierInstalled) return;
  stateWidget.__panoQueueBarrierInstalled = true;
  const previousSerializeValue = typeof stateWidget.serializeValue === "function"
    ? stateWidget.serializeValue
    : null;
  stateWidget.serializeValue = async function (...args) {
    await flushPanoStateProducers(node);
    return previousSerializeValue
      ? previousSerializeValue.apply(this, args)
      : this.value;
  };
}

function cleanupPreviewBindings(node) {
  const surface = nodeSurface(node);
  try { surface.restore?.(); } catch { }
  surface.dom = null;
  surface.attached = false;
  surface.mountKey = null;
}

// LiteGraph calls onRemoved for a deleted node and for each node of a cleared or reloaded graph.
function disposeRuntimeOnRemoved(nodeType) {
  const previous = nodeType.prototype.onRemoved;
  nodeType.prototype.onRemoved = function () {
    const result = previous ? previous.apply(this, arguments) : undefined;
    disposeNodeRuntime(this);
    return result;
  };
}

function ensurePanoramaPreviewImageOutput(node) {
  const outputs = Array.isArray(node?.outputs) ? node.outputs : [];
  const hasImageOutput = outputs.some((output) => (
    String(output?.name || "") === "image" && String(output?.type || "") === "IMAGE"
  ));
  if (!hasImageOutput) node?.addOutput?.("image", "IMAGE");
}

function installEditorButton(nodeType, {
  app,
  matchType,
  buttonText,
  openEditor,
  attachStickers,
  attachCutout,
  enableStickersPreview,
  sceneStateV2 = false,
  studio = false,
}) {
  if (!nodeType?.prototype) return;

  function installOrUpdate(node) {
    const mountKey = `editor_btn|${matchType}`;
    const surface = nodeSurface(node);
    if (surface.attached === true && surface.mountKey === mountKey) return;
    cleanupPreviewBindings(node);
    syncCoverageWidgetRedraw(node, app);
    hideWidget(node, STATE_WIDGET);

    const stateWidget = getWidget(node, STATE_WIDGET);
    installStateQueueBarrier(node, stateWidget);
    if (stateWidget && !stateSync(node).stateRedrawInstalled) {
      stateSync(node).stateRedrawInstalled = true;
      chainWidgetCallback(stateWidget, () => node.setDirtyCanvas?.(true, false));
    }

    if (matchType === "PanoramaStickers") {
      // Panorama Studio keeps state v2 in state_json (see pano_editor_state.js). Its editor is the Stickers
      // editor with a Camera the user adds; its node surface only shows the Scene, without editing or playback
      // (PanoStudioNodeSurface.vue in pano_preview_runtime.js).
      node.__panoSceneStateV2 = sceneStateV2;
      node.__panoStudio = studio;
      const background = getWidget(node, "bg_color");
      if (!sceneStateV2 && background && (background.value == null || String(background.value).trim() === "" || String(background.value).toLowerCase() === "#000000")) {
        background.value = "#00ff00";
        background.callback?.("#00ff00");
      }
      ensureActionButtonWidget(node, buttonText, () => openEditor(node, "stickers"));
      if (enableStickersPreview) {
        attachStickers(node, {
          enabled: true,
          buttonText,
          onOpen: () => openEditor(node, "stickers"),
        });
        if (surface.stickers) hideWidget(node, buttonText);
        if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) node.size = [360, 260];
      }
      surface.attached = true;
      surface.mountKey = mountKey;
      return;
    }

    // The legacy Cutout edits v1.
    node.__panoSceneStateV2 = false;
    ensureActionButtonWidget(node, buttonText, () => openEditor(node, "cutout"));
    attachCutout(node, {
      buttonText,
      onOpen: () => openEditor(node, "cutout"),
    });
    if (surface.cutout) hideWidget(node, buttonText);
    if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) node.size = [360, 260];
    surface.attached = true;
    surface.mountKey = mountKey;
  }

  for (const hook of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const previous = nodeType.prototype[hook];
    nodeType.prototype[hook] = function () {
      const result = previous ? previous.apply(this, arguments) : undefined;
      if (hook === "onNodeCreated" && matchType === "PanoramaCutout") {
        initializeNewCutoutFrame(this);
      }
      if (hook === "onConfigure" && matchType === "PanoramaStickers" && !sceneStateV2 && this.widgets) {
        migratePanoramaStickersWidgetOrder(this);
      }
      const attached = nodeSurface(this).attached;
      if (hook === "onNodeCreated" || this.widgets) installOrUpdate(this);
      // LiteGraph.createNode runs onNodeCreated before graph.add, so a node attached then syncs its
      // sticker input once it is in the graph.
      if (hook === "onAdded" && attached) runExternalStickerSync(this, "attach");
      return result;
    };
  }
  disposeRuntimeOnRemoved(nodeType);
}

function installStandalonePreviewNode(nodeType) {
  if (!nodeType?.prototype) return;
  const previous = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function () {
    const result = previous ? previous.apply(this, arguments) : undefined;
    if (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) this.size = [360, 260];
    return result;
  };
  const previousConfigure = nodeType.prototype.onConfigure;
  nodeType.prototype.onConfigure = function () {
    const result = previousConfigure ? previousConfigure.apply(this, arguments) : undefined;
    ensurePanoramaPreviewImageOutput(this);
    return result;
  };
  disposeRuntimeOnRemoved(nodeType);
}

function installStandalonePreviewInstance(node, {
  app,
  openEditor,
  attachPreview,
  requestFrame,
}) {
  const install = previewNode(node);
  if (!install || install.installDone || install.installProbeActive) return;
  install.installProbeActive = true;
  const tryInstall = () => {
    // A node removed while it waits for its graph is not installed (disposeNodeRuntime forgets its record).
    if (previewNode(node) !== install) return;
    const ready = Number(node?.id ?? -1) >= 0 && !!node?.graph;
    const tries = install.installProbeTries + 1;
    install.installProbeTries = tries;
    if (!ready && tries < 40) {
      requestFrame(tryInstall);
      return;
    }
    syncCoverageWidgetRedraw(node, app);
    const openPreview = (target = node) => openEditor(target, "stickers", { readOnly: true, hideSidebar: false });
    ensureActionButtonWidget(node, "Open Preview", () => openPreview(node));
    attachPreview(node, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: openPreview,
    });
    if (install.surface) hideWidget(node, "Open Preview");
    install.installDone = true;
    install.installProbeActive = false;
  };
  requestFrame(tryInstall);
}

// The Preview of IMAGE, VIDEO and PANO_SCENE (`PanoramaPreviewNode`, docs/preview-node.md "ノード上の表示"). Its
// `source` is a MatchType that passes the input through, so it gets no `image` output. What shows `source` follows
// the type linked to it, before any run: a Scene in the Scene viewer, IMAGE and VIDEO in the legacy Preview's
// runtime reading `source`. A changed link switches it.
function installScenePreviewNode(nodeType, { requestFrame, onExecuted }) {
  if (!nodeType?.prototype) return;
  const previousCreated = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function () {
    const result = previousCreated ? previousCreated.apply(this, arguments) : undefined;
    if (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) this.size = [360, 260];
    return result;
  };
  // The legacy runtime wraps the node's own hooks and calls these; the switch waits for a frame so that it does
  // not tear the runtime down inside its own hook.
  const previousConnections = nodeType.prototype.onConnectionsChange;
  nodeType.prototype.onConnectionsChange = function () {
    const result = previousConnections ? previousConnections.apply(this, arguments) : undefined;
    const node = this;
    const install = previewNode(node);
    if (install?.installDone) requestFrame(() => install.sync?.());
    return result;
  };
  const previousExecuted = nodeType.prototype.onExecuted;
  nodeType.prototype.onExecuted = function () {
    const result = previousExecuted ? previousExecuted.apply(this, arguments) : undefined;
    if (previewNode(this)?.display === "scene") onExecuted?.(this);
    return result;
  };
  disposeRuntimeOnRemoved(nodeType);
}

function scenePreviewDisplay(node) {
  return linkedInputType(node, "source") === "PANO_SCENE" ? "scene" : "media";
}

function installScenePreviewInstance(node, { app, openEditor, attachPreview, attachSceneViewer, openSceneViewer, requestFrame }) {
  const install = previewNode(node);
  if (!install || install.installDone || install.installProbeActive) return;
  install.installProbeActive = true;
  const openMedia = (target = node) => openEditor(target, "stickers", { readOnly: true, hideSidebar: false });
  const open = () => (install.display === "scene" ? openSceneViewer?.(node) : openMedia(node));
  install.sync = () => {
    if (previewNode(node) !== install) return;
    const display = scenePreviewDisplay(node);
    if (display === install.display) return;
    if (install.display === "scene") peekSceneViewer(node)?.surface?.detach?.();
    if (install.display === "media") install.runtime?.teardown?.();
    install.display = display;
    if (display === "scene") {
      attachSceneViewer?.(node);
    } else {
      // With the new window taking this node, the surface's top-right button opens it instead of the browser's
      // fullscreen (docs/preview-node.md "ノード上").
      attachPreview(node, {
        buttonText: "Open Preview",
        modalTitle: "Panorama Preview",
        imageInputName: "source",
        onOpen: openMedia,
        opensWindow: () => openEditor.previewWindowTakes?.(node) === true,
      });
    }
    if (install.surface || peekSceneViewer(node)?.surface) hideWidget(node, "Open Preview");
    else ensureActionButtonWidget(node, "Open Preview", open);
    node.setDirtyCanvas?.(true, true);
  };
  const tryInstall = () => {
    if (previewNode(node) !== install) return;
    const ready = Number(node?.id ?? -1) >= 0 && !!node?.graph;
    const tries = install.installProbeTries + 1;
    install.installProbeTries = tries;
    if (!ready && tries < 40) {
      requestFrame(tryInstall);
      return;
    }
    syncCoverageWidgetRedraw(node, app);
    ensureActionButtonWidget(node, "Open Preview", open);
    install.installDone = true;
    install.installProbeActive = false;
    install.sync();
  };
  requestFrame(tryInstall);
}

export function createPanoEditorExtension({
  app,
  openEditor,
  attachStickers,
  attachCutout,
  attachPreview,
  attachSceneViewer = null,
  openSceneViewer = null,
  onSceneViewerExecuted = null,
  restoreOutput,
  requestFrame,
  enableStickersPreview = false,
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [VIEW_CONTROLS_SETTING, DIAGNOSTICS_SETTING],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [DIAGNOSTICS_EXPORT_COMMAND],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [DIAGNOSTICS_EXPORT_COMMAND.id] }],
    beforeRegisterNodeDef(nodeType, nodeData) {
      const name = String(nodeData?.name || "");
      if (name === "PanoramaStickers" || name === "Panorama Stickers") {
        installEditorButton(nodeType, {
          app,
          matchType: "PanoramaStickers",
          buttonText: "Open Stickers Editor",
          openEditor,
          attachStickers,
          attachCutout,
          enableStickersPreview,
        });
      }
      if (name === "PanoramaStudio") {
        installEditorButton(nodeType, {
          app,
          matchType: "PanoramaStickers",
          buttonText: "Open Studio Editor",
          openEditor,
          attachStickers,
          attachCutout,
          enableStickersPreview,
          sceneStateV2: true,
          studio: true,
        });
      }
      if (name === "PanoramaCutout" || name === "Panorama Cutout") {
        installEditorButton(nodeType, {
          app,
          matchType: "PanoramaCutout",
          buttonText: "Open Cutout Editor",
          openEditor,
          attachStickers,
          attachCutout,
          enableStickersPreview,
        });
      }
      if (isPanoramaPreviewNodeName(name)) installStandalonePreviewNode(nodeType);
      if (isPanoramaPreviewSceneNodeName(name)) installScenePreviewNode(nodeType, { requestFrame, onExecuted: onSceneViewerExecuted });
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(node) {
      if (nodeSurface(node).attached) void restoreOutput(node);
    },
    nodeCreated(node) {
      const name = String(node?.comfyClass || node?.type || node?.title || "");
      syncCoverageWidgetRedraw(node, app);
      if (isPanoramaPreviewSceneNodeName(name)) {
        installScenePreviewInstance(node, { app, openEditor, attachPreview, attachSceneViewer, openSceneViewer, requestFrame });
        return;
      }
      if (!isPanoramaPreviewNodeName(name)) return;
      installStandalonePreviewInstance(node, { app, openEditor, attachPreview, requestFrame });
    },
  };
}
