// The mouse controls of the editor's space view (#71). 3DoF stands at the World origin and looks around
// like the panorama view; 6DoF moves the Viewport camera through the World with the controls of the
// preset chosen in ComfyUI's settings (VIEW_CONTROLS_SETTING). ComfyUI saves the setting.
//
// A preset maps a drag that starts with a button (0 left, 1 middle, 2 right) and modifiers to how the
// Viewport camera moves: "orbit" turns it around the point under the pointer, "pan" moves it across the
// view at its pivot's depth, "look" turns it in place. These bindings act wherever the drag starts, over an
// object too, so every preset moves the view without touching an object. A left drag without modifiers
// edits the object under it; on empty space it does the preset's `emptyLeft` (null: nothing moves). The
// wheel zooms toward the point under the pointer in every preset (pano_space.js zoomView).
//
// A preset is named after the app it is like and names what it adds to that app's own controls.
export const VIEW_CONTROL_PRESETS = Object.freeze({
  // Core's Load3D (three.js OrbitControls) and Sketchfab: the left and the right button orbit, Shift pans.
  default: {
    label: "Default",
    emptyLeft: "orbit",
    bindings: [
      { button: 1, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: true, action: "pan" },
    ],
  },
  // Blender's 3D viewport. A left drag on empty space is Blender's box select, which the editor has as
  // Ctrl + drag.
  blender: {
    label: "Blender-like",
    emptyLeft: null,
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: true, action: "pan" },
    ],
  },
  // Unity's Scene view: the right button flies (looks around in place). A left drag on empty space is
  // Unity's rectangle select, which the editor has as Ctrl + drag.
  unity: {
    label: "Unity-like",
    emptyLeft: null,
    bindings: [
      { button: 2, action: "look" },
      { button: 0, alt: true, action: "orbit" },
      { button: 1, action: "pan" },
    ],
  },
});

export const VIEW_CONTROLS_SETTING_ID = "PanoramaSuite.Editor.ViewControls";

// The ComfyUI setting (an extension's `settings`) that picks the preset. ComfyUI keeps the object it is
// given, so it is not frozen.
export const VIEW_CONTROLS_SETTING = {
  id: VIEW_CONTROLS_SETTING_ID,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(VIEW_CONTROL_PRESETS).map(([value, preset]) => ({ value, text: preset.label })),
  defaultValue: "default",
};

// The preset of a setting value; an unknown value is the default.
export function viewControlsPreset(value) {
  return Object.hasOwn(VIEW_CONTROL_PRESETS, value) ? VIEW_CONTROL_PRESETS[value] : VIEW_CONTROL_PRESETS.default;
}

// How a 6DoF drag that starts with this button and these modifiers moves the view, or null when the
// preset leaves it to the editor's tools. Ctrl and Meta are the tools' (marquee selection).
export function viewDragAction(preset, { button, shiftKey = false, altKey = false, ctrlKey = false, metaKey = false }) {
  if (ctrlKey || metaKey) return null;
  const binding = preset.bindings.find((item) => (
    item.button === button && !!item.shift === shiftKey && !!item.alt === altKey
  ));
  return binding?.action ?? null;
}

// Whether a preset drags with this button, so its press does not open the context menu.
export function presetUsesButton(preset, button) {
  return preset.bindings.some((item) => item.button === button);
}
