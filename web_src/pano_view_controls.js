// The mouse controls of the editor's space view (#71). 3DoF stands at the World origin and looks around
// like the panorama view; 6DoF moves the Viewport camera through the World with the controls of the
// preset chosen in ComfyUI's settings (VIEW_CONTROLS_SETTING). ComfyUI saves the setting.
//
// A preset maps a drag that starts with a button (0 left, 1 middle, 2 right) and modifiers to how the
// Viewport camera moves: "look" turns it in place, "orbit" turns it around its pivot, "pan" moves it
// across the view. A left drag without modifiers is in no preset: it edits the object under the pointer
// and looks around on empty space, in 3DoF and in every preset. The wheel dollies toward the pivot in
// every preset. Every preset has a "look" that works over objects too, so the view can always move
// without touching an object.
export const VIEW_CONTROL_PRESETS = Object.freeze({
  default: {
    label: "Default",
    bindings: [
      { button: 1, action: "look" },
      { button: 1, shift: true, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: true, action: "pan" },
    ],
  },
  blender: {
    label: "Blender-like",
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: true, action: "pan" },
      { button: 2, action: "look" },
    ],
  },
  unity: {
    label: "Unity-like",
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
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. Dragging on empty space with the left button always looks around.",
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
