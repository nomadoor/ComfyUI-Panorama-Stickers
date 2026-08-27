import { normalizeCoverageValue } from "./pano_editor_state.js";
import { isPanoramaPreviewNodeName } from "./pano_preview_identity.js";

const STATE_WIDGET = "state_json";

function getWidget(node, name) {
  return node?.widgets?.find((widget) => widget?.name === name) || null;
}

function syncCoverageWidgetRedraw(node, app) {
  if (!node || node.__panoCoverageWidgetSyncInstalled) return;
  const coverageWidget = getWidget(node, "coverage");
  if (!coverageWidget) return;
  const previous = typeof coverageWidget.callback === "function"
    ? coverageWidget.callback.bind(coverageWidget)
    : null;
  coverageWidget.callback = function (...args) {
    const result = previous ? previous(...args) : undefined;
    node.__panoStateCache = null;
    node.__panoLiveStateOverride = null;
    node.__panoWrappedErpCache = null;
    node.__panoPanoBackgroundCache = null;
    node.__panoPreviewNodeRuntime?.requestDraw?.();
    node.__panoDomPreview?.requestDraw?.();
    node.setDirtyCanvas?.(true, true);
    node.graph?.setDirtyCanvas?.(true, true);
    app?.canvas?.setDirty?.(true, true);
    return result;
  };
  node.__panoCoverageWidgetSyncInstalled = true;
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
    if (widget.element?.style) widget.element.style.display = "";
    if (widget.parentEl?.style) widget.parentEl.style.display = "";
    if (typeof widget.computeSize !== "function" || widget.computeSize() == null || widget.hidden) {
      widget.computeSize = () => [Math.max(120, Number(node?.size?.[0] || 0) - 20), 30];
    }
    return widget;
  }
  widget = node.addWidget("button", buttonText, null, callback);
  if (widget) widget.serialize = false;
  return widget;
}

async function waitForPendingStickerUploads(node) {
  const pending = node?.__panoPendingStickerUploads;
  if (!(pending instanceof Map)) return;
  while (pending.size > 0) {
    const entries = Array.from(pending.entries());
    await Promise.all(entries.map(([, promise]) => promise));
    entries.forEach(([assetId, promise]) => {
      if (pending.get(assetId) === promise) pending.delete(assetId);
    });
  }
}

export function queuePendingStickerOperation(node, operationId, operation) {
  if (!node || typeof operation !== "function") {
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  }
  if (!(node.__panoPendingStickerUploads instanceof Map)) {
    node.__panoPendingStickerUploads = new Map();
  }
  const previous = node.__panoStickerOperationTail;
  const ready = previous && typeof previous.then === "function"
    ? previous.catch(() => undefined)
    : Promise.resolve();
  const pending = ready.then(() => operation());
  const tail = pending.catch(() => undefined);
  node.__panoStickerOperationTail = tail;
  node.__panoPendingStickerUploads.set(operationId, pending);
  const cleanup = () => {
    if (node.__panoPendingStickerUploads?.get?.(operationId) === pending) {
      node.__panoPendingStickerUploads.delete(operationId);
    }
  };
  pending.then(cleanup, cleanup);
  tail.then(() => {
    if (node.__panoStickerOperationTail === tail) node.__panoStickerOperationTail = null;
  });
  return pending;
}

function installStateQueueBarrier(node, stateWidget) {
  if (!stateWidget || stateWidget.__panoQueueBarrierInstalled) return;
  stateWidget.__panoQueueBarrierInstalled = true;
  const previousSerializeValue = typeof stateWidget.serializeValue === "function"
    ? stateWidget.serializeValue
    : null;
  stateWidget.serializeValue = async function (...args) {
    await waitForPendingStickerUploads(node);
    await node.__panoFlushStateBeforeQueue?.();
    return previousSerializeValue
      ? previousSerializeValue.apply(this, args)
      : this.value;
  };
}

function cleanupPreviewBindings(node) {
  try { node.__panoDomRestore?.(); } catch { }
  try { node.__panoLegacyRestore?.(); } catch { }
  node.__panoDomPreview = null;
  node.__panoLegacyPreviewHooked = false;
  node.__panoPreviewHooked = false;
  node.__panoPreviewAttached = false;
  node.__panoPreviewMountKey = null;
}

function installEditorButton(nodeType, {
  app,
  matchType,
  buttonText,
  openEditor,
  attachStickers,
  attachCutout,
  enableStickersPreview,
}) {
  if (!nodeType?.prototype) return;

  function installOrUpdate(node) {
    const mountKey = `editor_btn|${matchType}`;
    if (node.__panoPreviewAttached === true && node.__panoPreviewMountKey === mountKey) return;
    cleanupPreviewBindings(node);
    syncCoverageWidgetRedraw(node, app);
    hideWidget(node, STATE_WIDGET);

    const stateWidget = getWidget(node, STATE_WIDGET);
    installStateQueueBarrier(node, stateWidget);
    if (stateWidget && !stateWidget.__panoPreviewPatchedCb) {
      stateWidget.__panoPreviewPatchedCb = true;
      const previous = stateWidget.callback;
      stateWidget.callback = (value) => {
        const result = previous ? previous(value) : undefined;
        node.setDirtyCanvas?.(true, false);
        return result;
      };
    }

    if (matchType === "PanoramaStickers") {
      const background = getWidget(node, "bg_color");
      if (background && (background.value == null || String(background.value).trim() === "" || String(background.value).toLowerCase() === "#000000")) {
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
        if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) node.size = [360, 260];
      }
      node.__panoPreviewAttached = true;
      node.__panoPreviewMountKey = mountKey;
      return;
    }

    ensureActionButtonWidget(node, buttonText, () => openEditor(node, "cutout"));
    attachCutout(node, {
      buttonText,
      onOpen: () => openEditor(node, "cutout"),
    });
    if (!Array.isArray(node.size) || node.size[0] < 10 || node.size[1] < 10) node.size = [360, 260];
    node.__panoPreviewAttached = true;
    node.__panoPreviewMountKey = mountKey;
  }

  for (const hook of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const previous = nodeType.prototype[hook];
    nodeType.prototype[hook] = function () {
      const result = previous ? previous.apply(this, arguments) : undefined;
      if (hook === "onConfigure" && matchType === "PanoramaStickers" && this.widgets) {
        migratePanoramaStickersWidgetOrder(this);
      }
      if (hook === "onNodeCreated" || this.widgets) installOrUpdate(this);
      return result;
    };
  }
}

function installStandalonePreviewNode(nodeType) {
  if (!nodeType?.prototype) return;
  const previous = nodeType.prototype.onNodeCreated;
  nodeType.prototype.onNodeCreated = function () {
    const result = previous ? previous.apply(this, arguments) : undefined;
    if (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) this.size = [360, 260];
    return result;
  };
}

function installStandalonePreviewInstance(node, {
  app,
  openEditor,
  attachPreview,
  requestFrame,
}) {
  if (!node || node.__panoStandaloneInstallDone || node.__panoStandaloneInstallProbeActive) return;
  node.__panoStandaloneInstallProbeActive = true;
  const tryInstall = () => {
    const ready = Number(node?.id ?? -1) >= 0 && !!node?.graph;
    const tries = Number(node.__panoStandaloneInstallProbeTries || 0) + 1;
    node.__panoStandaloneInstallProbeTries = tries;
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
    node.__panoStandaloneInstallDone = true;
    node.__panoStandaloneInstallProbeActive = false;
  };
  requestFrame(tryInstall);
}

export function createPanoEditorExtension({
  app,
  openEditor,
  attachStickers,
  attachCutout,
  attachPreview,
  requestFrame,
  enableStickersPreview = false,
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
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
    },
    nodeCreated(node) {
      const name = String(node?.comfyClass || node?.type || node?.title || "");
      syncCoverageWidgetRedraw(node, app);
      if (!isPanoramaPreviewNodeName(name)) return;
      installStandalonePreviewInstance(node, { app, openEditor, attachPreview, requestFrame });
    },
  };
}
