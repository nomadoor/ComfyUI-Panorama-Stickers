// Measures how the buttons of every float over the stage sit (docs/design.md "フロートの中央揃え"), for
// tests/browser/studio_float_centering.spec.js. It runs in the page (passed to page.evaluate, so it is
// self-contained). For each button of each float it gives, in CSS px (positive = right / down):
//   group: the button's center against its float's center on the cross axis (x for a column, y for a row);
//   fill:  the center of the lit / chosen fill (a segmented control's thumb) against the button's center (x and y);
//   icon:  the center of the icon's svg box against the button's center (x and y); for a button with an icon and
//          text, the union of its content;
//   ink:   where the icon's drawing (its svg geometry, stroke left out) is centered against the button's center (x
//          and y). Tabler's drawing of an icon, reported, not a layout offset.
export function measureFloats() {
  const center = (r) => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  const round = (v) => Math.round(v * 100) / 100;
  const shown = (el) => {
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && getComputedStyle(el).visibility !== "hidden";
  };
  const nameOf = (el) =>
    el.getAttribute("aria-label") || el.dataset.action || el.dataset.tool || el.dataset.knob || el.dataset.value || el.className;
  const where = (float) => {
    const at = float.closest("[class*='pano-studio-at-']");
    const area = at ? [...at.classList].find((c) => c.startsWith("pano-studio-at-")).slice("pano-studio-at-".length) : "";
    const preview = float.closest("[data-preview-window]") ? "preview/" : "";
    const own = [...float.classList].filter((c) => c !== "pano-studio-float" && c.startsWith("pano-studio-")).join(".");
    return `${preview}${area || own}${area && float.classList.contains("pano-studio-paint-colors") ? "/colors" : ""}`;
  };
  const rows = [];
  const add = (float, group, button, column) => {
    const g = center(group.getBoundingClientRect());
    const b = button.getBoundingClientRect();
    const c = center(b);
    const row = {
      float: where(float),
      button: String(nameOf(button)).slice(0, 40),
      axis: column ? "x" : "y",
      size: `${round(b.width)}x${round(b.height)}`,
      group: round(column ? c.x - g.x : c.y - g.y),
      fillX: 0,
      fillY: 0,
      iconX: null,
      iconY: null,
      inkX: null,
      inkY: null,
    };
    const thumb = button.classList.contains("is-active") && button.parentElement.querySelector(":scope > .pano-studio-seg-thumb");
    if (thumb) {
      const t = center(thumb.getBoundingClientRect());
      row.fillX = round(t.x - c.x);
      row.fillY = round(t.y - c.y);
    }
    const parts = [...button.children].filter(shown);
    if (parts.length) {
      const rects = parts.map((p) => p.getBoundingClientRect());
      const left = Math.min(...rects.map((r) => r.left));
      const right = Math.max(...rects.map((r) => r.right));
      const top = Math.min(...rects.map((r) => r.top));
      const bottom = Math.max(...rects.map((r) => r.bottom));
      row.iconX = round((left + right) / 2 - c.x);
      row.iconY = round((top + bottom) / 2 - c.y);
    }
    const svg = parts.length === 1 && parts[0].tagName.toLowerCase() === "svg" ? parts[0] : null;
    if (svg) {
      const box = svg.getBBox();
      const r = svg.getBoundingClientRect();
      const scale = r.width / (svg.viewBox.baseVal?.width || r.width);
      row.inkX = round(r.left + (box.x + box.width / 2) * scale - c.x);
      row.inkY = round(r.top + (box.y + box.height / 2) * scale - c.y);
    }
    rows.push(row);
  };
  for (const float of document.querySelectorAll(".pano-studio-float")) {
    if (!shown(float)) continue;
    const style = getComputedStyle(float);
    const column = style.flexDirection === "column" && style.display.includes("flex");
    for (const button of float.querySelectorAll("button")) if (shown(button)) add(float, float, button, column);
  }
  // The Output window's folded pill is one button; its chevron at the right end is measured as the button.
  const pill = document.querySelector(".pano-studio-output.is-collapsed .pano-studio-output-pill");
  const fold = pill?.querySelector(".pano-studio-output-chevron");
  if (pill && fold && shown(fold)) add(pill.closest(".pano-studio-output"), pill, fold, false);
  return rows;
}
