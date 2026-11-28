// The unit Panorama Studio shows the Camera's H FOV in (docs/studio-ui.md "H FOV の単位"): "deg" or "mm", the focal
// length of a 36 mm wide sensor (pano_lens.js fovToFocalMm). The inspector's box, the Camera tab's FOV ruler head and
// its FOV number follow it. It is chosen in ComfyUI's settings (registered by pano_editor_extension.js, kept by
// ComfyUI's core, as 3D view controls in pano_view_controls.js), not in the editor: a choice made once, not switched
// while working. The editor reads it when it opens (studio/editor_view.js) and follows a change while open
// (studio/editor.js, onFovUnitChange).
export const FOV_UNIT_SETTING_ID = "PanoramaSuite.Editor.FovUnit";

const listeners = new Set();

export function fovUnitOf(unit) {
  return unit === "mm" ? "mm" : "deg";
}

export const FOV_UNIT_SETTING = {
  id: FOV_UNIT_SETTING_ID,
  category: ["Panorama Suite", "Editor", "H FOV unit"],
  name: "H FOV unit",
  tooltip: "How Panorama Studio shows the Camera's H FOV. Focal length assumes a 36 mm wide sensor; the state always keeps degrees.",
  type: "combo",
  options: [
    { value: "deg", text: "Degrees" },
    { value: "mm", text: "Focal length (mm, 36 mm wide sensor)" },
  ],
  defaultValue: "deg",
  onChange: (value) => {
    for (const listener of listeners) listener(fovUnitOf(value));
  },
};

// The unit set in ComfyUI's settings of `app` ("deg" without them).
export function readFovUnit(app) {
  try {
    return fovUnitOf(app?.ui?.settings?.getSettingValue?.(FOV_UNIT_SETTING_ID));
  } catch {
    return "deg";
  }
}

// Calls `listener(unit)` each time the setting changes; returns what stops it.
export function onFovUnitChange(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
