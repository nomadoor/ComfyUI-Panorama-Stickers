<script setup>
import { ref } from "vue";
import { ICON } from "../../icons.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The view knobs at the right of the stage (docs/space-and-view.md "視点の操作の部品"): the sphere (orbit), the four
// arrows (pan) and the road's arrows (forward / back), each dragged, never a button that flips; below them "?", the list of
// shortcuts, lit while the list is open (`helpOpen`; docs/studio-ui.md "ショートカットの一覧"). A knob lights while its
// operation runs, however it is driven (`lit`). The wheel and the context menu over the knobs do not reach the stage.
// Presentational: `knob` out with the pointerdown of a knob's drag, `help` out when "?" is pressed; `helpButton()`
// gives the "?" button's element (the list's presses there are not outside it).
defineProps({
  // The knobs lit now: "orbit", "pan", "move".
  lit: { type: Array, default: () => [] },
  // The knob being dragged, or null: it alone takes the strong fill; the other lit knobs take the hover's fill
  // (docs/space-and-view.md "視点の操作の部品").
  knobDrag: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  disabledTip: { type: String, default: "" },
  helpOpen: { type: Boolean, default: false },
  // Set orbit center waits for a click on the stage (docs/space-and-view.md "Set orbit center"), and why it is disabled
  // ("" when it is not; it works in the 3D tab and the Preview window only).
  centerPicking: { type: Boolean, default: false },
  centerOff: { type: String, default: "" },
});
// `hover` out with the button the pointer comes over ("orbit", "center") or null when it leaves, so the stage shows the
// orbit center's mark (docs/space-and-view.md "オービットの中心の印"); `center` out when Set orbit center is pressed.
const emit = defineEmits(["knob", "help", "hover", "center"]);
const help = ref(null);
defineExpose({ helpButton: () => help.value?.$el ?? null });

const KNOBS = [
  { key: "orbit", icon: ICON.sphere, label: "Orbit", tip: "Orbit (Alt+Drag)" },
  { key: "pan", icon: ICON.pan_move, label: "Pan", tip: "Pan (Right-drag)" },
  { key: "move", icon: ICON.depth_move, label: "Move forward/back", tip: "Move forward/back (Alt+Right-drag)" },
];
// Set orbit center's tooltips, idle and while it waits for a click (docs/space-and-view.md "Set orbit center").
const CENTER_TIP = Object.freeze({
  idle: "Set orbit center (Double-click)",
  picking: "Click a spot to orbit around · Esc to cancel",
});
</script>

<template>
  <div class="pano-studio-nav" @wheel.prevent.stop @contextmenu.prevent.stop>
    <StudioFloatGroup layout="knobs" label="View">
      <StudioIconButton
        v-for="knob in KNOBS"
        :key="knob.key"
        :data-knob="knob.key"
        size="knob"
        :icon="knob.icon"
        :label="knob.label"
        :tip="disabled && disabledTip ? disabledTip : knob.tip"
        :lit="knobDrag === knob.key"
        :hint="knobDrag !== knob.key && lit.includes(knob.key)"
        :disabled="disabled"
        @pointerdown="!disabled && emit('knob', knob.key, $event)"
        @pointerenter="knob.key === 'orbit' && !disabled && emit('hover', 'orbit')"
        @pointerleave="knob.key === 'orbit' && emit('hover', null)"
      />
      <span class="pano-studio-sep" />
      <StudioIconButton
        data-action="orbit-center"
        size="knob"
        :icon="ICON.orbit_center"
        label="Set orbit center"
        :tip="centerOff || (centerPicking ? CENTER_TIP.picking : CENTER_TIP.idle)"
        :class="{ 'is-waiting': centerPicking }"
        :disabled="!!centerOff"
        :aria-pressed="centerPicking ? 'true' : 'false'"
        @pointerenter="!centerOff && emit('hover', 'center')"
        @pointerleave="emit('hover', null)"
        @press="emit('center')"
      />
      <StudioIconButton
        ref="help"
        data-action="shortcuts"
        size="knob"
        :icon="ICON.help"
        label="Shortcuts"
        tip="Shortcuts"
        :lit="helpOpen"
        :aria-expanded="helpOpen ? 'true' : 'false'"
        aria-controls="pano-studio-shortcuts"
        @press="emit('help')"
      />
    </StudioFloatGroup>
  </div>
</template>
