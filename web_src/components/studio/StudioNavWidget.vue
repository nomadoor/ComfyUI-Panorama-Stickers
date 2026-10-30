<script setup>
import { ref } from "vue";
import { ICON } from "../../icons.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The view knobs at the right of the stage (docs/space-and-view.md "視点の操作の部品"): the sphere (orbit), the hand
// (pan) and the arrows (forward / back), each dragged, never a button that flips; below them "?", the list of
// shortcuts, lit while the list is open (`helpOpen`; docs/studio-ui.md "ショートカットの一覧"). A knob lights while its
// operation runs, however it is driven (`lit`). The wheel and the context menu over the knobs do not reach the stage.
// Presentational: `knob` out with the pointerdown of a knob's drag, `help` out when "?" is pressed; `helpButton()`
// gives the "?" button's element (the list's presses there are not outside it).
defineProps({
  // The knobs lit now: "orbit", "pan", "move".
  lit: { type: Array, default: () => [] },
  disabled: { type: Boolean, default: false },
  disabledTip: { type: String, default: "" },
  helpOpen: { type: Boolean, default: false },
});
const emit = defineEmits(["knob", "help"]);
const help = ref(null);
defineExpose({ helpButton: () => help.value?.$el ?? null });

const KNOBS = [
  { key: "orbit", icon: ICON.sphere, label: "Orbit", tip: "Drag to orbit · Alt+drag in the view" },
  { key: "pan", icon: ICON.hand, label: "Pan", tip: "Drag to pan · middle-drag in the view" },
  { key: "move", icon: ICON.arrows_vertical, label: "Move forward/back", tip: "Drag to move forward/back · Alt+middle-drag" },
];
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
        :lit="lit.includes(knob.key)"
        :disabled="disabled"
        @pointerdown="!disabled && emit('knob', knob.key, $event)"
      />
      <span class="pano-studio-sep" />
      <StudioIconButton
        ref="help"
        data-action="shortcuts"
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
