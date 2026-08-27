let stylesheetReadyPromise = null;

export function installPanoSuiteStylesheet() {
  if (stylesheetReadyPromise) return stylesheetReadyPromise;
  stylesheetReadyPromise = new Promise((resolve) => {
    const existing = document.getElementById("pano-suite-style-link");
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => {
        existing.dataset.loaded = "true";
        resolve();
      }, { once: true });
      existing.addEventListener("error", () => resolve(), { once: true });
      return;
    }
    const link = document.createElement("link");
    link.id = "pano-suite-style-link";
    link.rel = "stylesheet";
    link.href = new URL("./pano_editor.css", import.meta.url).toString();
    link.addEventListener("load", () => {
      link.dataset.loaded = "true";
      resolve();
    }, { once: true });
    link.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(link);
  });
  return stylesheetReadyPromise;
}
