const CORE_URL = String(window.__PANO_DEMO_CORE_URL__ || "").trim();

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function isDebugEnabled() {
  if (window.__PANO_DEMO_DEBUG__ === true) return true;
  try {
    const params = new URLSearchParams(window.location.search || "");
    return params.get("debug") === "1";
  } catch {
    return false;
  }
}

function debugLog(message, extra = null) {
  if (!isDebugEnabled()) return;
  const line = extra == null
    ? `[PanoramaDemo] ${message}`
    : `[PanoramaDemo] ${message} ${typeof extra === "string" ? extra : JSON.stringify(extra)}`;
  try {
    console.log(line);
  } catch {}
}

function markMountError(target, message) {
  if (!(target instanceof HTMLElement)) return;
  target.innerHTML = "";
  const box = document.createElement("div");
  box.style.display = "grid";
  box.style.placeItems = "center";
  box.style.height = "100%";
  box.style.minHeight = "320px";
  box.style.padding = "16px";
  box.style.boxSizing = "border-box";
  box.style.background = "#111";
  box.style.color = "#fff";
  box.style.border = "1px solid rgba(255,255,255,0.12)";
  box.style.borderRadius = "10px";
  box.style.font = "13px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace";
  box.textContent = message;
  target.appendChild(box);
}

function waitForElement(selector, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const node = qs(selector);
      if (node) {
        resolve(node);
        return;
      }
      if (Date.now() - start > timeoutMs) {
        reject(new Error(`Missing element: ${selector}`));
        return;
      }
      window.setTimeout(tick, 50);
    };
    tick();
  });
}

function findValueInput(elemId) {
  const root = document.getElementById(elemId);
  if (!root) return null;
  if (root instanceof HTMLTextAreaElement || root instanceof HTMLInputElement) return root;
  return root.querySelector("textarea") || root.querySelector("input");
}

function writeValue(elemId, value) {
  const input = findValueInput(elemId);
  if (!input) return;
  const next = String(value || "");
  if (input.value === next) return;
  input.value = next;
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
}

function findComponentRoot(elemId) {
  const direct = document.getElementById(elemId);
  if (direct) return direct;
  const escaped = typeof CSS !== "undefined" && typeof CSS.escape === "function" ? CSS.escape(elemId) : elemId;
  return document.querySelector(`#${escaped}`);
}

function findRenderedImageWithin(root) {
  if (!(root instanceof Element)) return null;
  const selectors = ["picture img", "button img", "img"];
  const seen = new Set();
  const candidates = [];
  for (const selector of selectors) {
    const found = root.querySelectorAll(selector);
    for (const node of found) {
      if (!(node instanceof HTMLImageElement)) continue;
      if (seen.has(node)) continue;
      seen.add(node);
      candidates.push(node);
    }
  }
  return candidates.find((img) => String(img.getAttribute("src") || img.src || "").trim()) || candidates[0] || null;
}

function getCandidateRoots(elemId) {
  const base = findComponentRoot(elemId);
  if (!base) return [];
  const roots = [base];
  if (base.parentElement) roots.push(base.parentElement);
  if (base.parentElement?.parentElement) roots.push(base.parentElement.parentElement);
  return roots.filter(Boolean);
}

function getRenderedImage(elemId) {
  const roots = getCandidateRoots(elemId);
  for (const root of roots) {
    const img = findRenderedImageWithin(root);
    if (img) return img;
  }
  return null;
}

function getImageSrc(elemId) {
  const img = getRenderedImage(elemId);
  if (!img) return "";
  return String(img.getAttribute("src") || img.src || "").trim();
}

function observeImageSrc(elemId, onChange) {
  let currentSrc = "";
  let observer = null;
  let observedRoot = null;

  const scan = () => {
    const nextRoot = getCandidateRoots(elemId)[0] || null;
    if (nextRoot && nextRoot !== observedRoot) {
      observer?.disconnect();
      observer = new MutationObserver(() => {
        scan();
      });
      observer.observe(nextRoot, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["src"],
      });
      observedRoot = nextRoot;
    }
    const nextSrc = getImageSrc(elemId);
    if (!nextSrc || nextSrc === currentSrc) return;
    currentSrc = nextSrc;
    onChange(nextSrc);
  };

  const ensureBound = () => {
    scan();
    if (observedRoot) return;
    window.setTimeout(ensureBound, 100);
  };

  ensureBound();
  return () => {
    observer?.disconnect();
  };
}

function clearImage(elemId) {
  const img = getRenderedImage(elemId);
  if (img) img.removeAttribute("src");
}

function downloadHref(href, filename) {
  const src = String(href || "").trim();
  if (!src) return;
  const link = document.createElement("a");
  link.href = src;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function bindDownload(button, getSrc, filename) {
  if (!button) return;
  button.addEventListener("click", () => {
    downloadHref(getSrc(), filename);
  });
}

async function boot() {
  debugLog("boot:start");
  if (!CORE_URL) {
    throw new Error("window.__PANO_DEMO_CORE_URL__ is missing");
  }

  const [
    stickersMount,
    cutoutMount,
    generateBtnRoot,
    renderBtnRoot,
    generatedErpRoot,
  ] = await Promise.all([
    waitForElement("#pano-stickers-mount"),
    waitForElement("#pano-cutout-mount"),
    waitForElement("#pano-generate-btn button, #pano-generate-btn"),
    waitForElement("#pano-render-cutout-btn button, #pano-render-cutout-btn"),
    waitForElement("#pano-generated-erp-image"),
  ]);

  debugLog("boot:mounts_ready", {
    stickers: !!stickersMount,
    cutout: !!cutoutMount,
    generate: !!generateBtnRoot,
    render: !!renderBtnRoot,
    erpRoot: !!generatedErpRoot,
  });

  const { createEmbeddedEditor } = await import(CORE_URL);
  debugLog("boot:core_loaded", { hasCreateEmbeddedEditor: typeof createEmbeddedEditor === "function" });

  let stickersEditor;
  let cutoutEditor;
  try {
    stickersEditor = createEmbeddedEditor(stickersMount, {
      type: "stickers",
      hideSidebar: false,
      onStateChange(nextState) {
        writeValue("pano-stickers-state", JSON.stringify(nextState || {}));
      },
    });
  } catch (err) {
    const text = err?.stack || err?.message || String(err);
    markMountError(stickersMount, `Stickers editor failed:\n${text}`);
    throw err;
  }
  try {
    cutoutEditor = createEmbeddedEditor(cutoutMount, {
      type: "cutout",
      hideSidebar: false,
      onStateChange(nextState) {
        writeValue("pano-cutout-state", JSON.stringify(nextState || {}));
      },
    });
  } catch (err) {
    const text = err?.stack || err?.message || String(err);
    markMountError(cutoutMount, `Cutout editor failed:\n${text}`);
    throw err;
  }

  const generateButton = generateBtnRoot instanceof HTMLButtonElement ? generateBtnRoot : generateBtnRoot.querySelector("button");
  const renderButton = renderBtnRoot instanceof HTMLButtonElement ? renderBtnRoot : renderBtnRoot.querySelector("button");
  if (renderButton) renderButton.disabled = !getImageSrc("pano-generated-erp-image");

  let lastErpSrc = "";
  let erpPreload = null;
  const syncGeneratedErp = (src) => {
    const nextSrc = String(src || "").trim();
    if (!nextSrc || nextSrc === lastErpSrc) return;
    lastErpSrc = nextSrc;
    debugLog("state:generated_erp_ready", { src: nextSrc });
    cutoutEditor.setErpPreview(nextSrc);
    cutoutEditor.requestDraw?.();
    erpPreload = new Image();
    erpPreload.onload = () => {
      if (lastErpSrc !== nextSrc) return;
      cutoutEditor.requestDraw?.();
    };
    erpPreload.src = nextSrc;
    if (renderButton) renderButton.disabled = false;
    clearImage("pano-frame-preview");
    cutoutMount.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  observeImageSrc("pano-generated-erp-image", syncGeneratedErp);

  generateButton?.addEventListener("click", () => {
    debugLog("action:generate_click");
    if (renderButton) renderButton.disabled = true;
    writeValue("pano-stickers-state", JSON.stringify(stickersEditor.getState()));
  });

  renderButton?.addEventListener("click", () => {
    debugLog("action:render_click");
    writeValue("pano-cutout-state", JSON.stringify(cutoutEditor.getState()));
  });

  bindDownload(
    qs("#pano-save-erp-btn button, #pano-save-erp-btn"),
    () => getImageSrc("pano-generated-erp-image"),
    "panorama_erp.png"
  );
  bindDownload(
    qs("#pano-save-frame-btn button, #pano-save-frame-btn"),
    () => getImageSrc("pano-frame-preview"),
    "panorama_cutout.png"
  );

  const initialErpSrc = getImageSrc("pano-generated-erp-image");
  if (initialErpSrc) {
    syncGeneratedErp(initialErpSrc);
  }

  debugLog("boot:complete");
}

boot().catch((err) => {
  const text = err?.stack || err?.message || String(err);
  debugLog("boot:fatal", text);
  try {
    console.error("[PanoramaDemo] host boot failed", err);
  } catch {}
});
