// The suite's hand-written stylesheets (web/*.css), each loaded once as a <link> (docs/design.md).
const stylesheetReady = new Map();

// Loads the stylesheet at href once as <link id="{id}">; resolves when it has loaded or failed.
export function installStylesheet(id, href) {
  if (stylesheetReady.has(id)) return stylesheetReady.get(id);
  const ready = new Promise((resolve) => {
    const existing = document.getElementById(id);
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
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    link.addEventListener("load", () => {
      link.dataset.loaded = "true";
      resolve();
    }, { once: true });
    link.addEventListener("error", () => resolve(), { once: true });
    document.head.appendChild(link);
  });
  stylesheetReady.set(id, ready);
  return ready;
}

// The old UI's and the node surfaces' stylesheet, web/pano_editor.css.
export function installPanoSuiteStylesheet() {
  return installStylesheet("pano-suite-style-link", new URL("./pano_editor.css", import.meta.url).toString());
}
