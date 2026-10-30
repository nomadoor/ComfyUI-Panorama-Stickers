<script setup>
// The new Preview window's shell (docs/studio-ui.md "Preview のウィンドウ"): the stage fills the window; ✕ at the top
// right, the view knobs and "?" at the right middle, Reset View, the grid switch and Fullscreen at the bottom right.
// No inspector, timeline, left rail or bottom bar. web_src/studio/preview_window.js owns what it shows.
// `controller`: onStage({ canvas, root }), close(), resetView(), grid(shown), fullscreen(root).
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import { createBackdropClose } from "../../studio/backdrop.js";
import { trackInputMode } from "../../studio/input_modality.js";
import { shortcutGroups } from "../../studio/shortcuts.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioNavWidget from "./StudioNavWidget.vue";
import StudioShortcuts from "./StudioShortcuts.vue";
import StudioTooltip from "./StudioTooltip.vue";

const props = defineProps({
  nodeTitle: { type: String, default: "" },
  ui: { type: Object, required: true },
  controller: { type: Object, required: true },
});

const root = ref(null);
const canvas = ref(null);
const nav = ref(null);
const help = ref(false);
const fullscreen = ref(false);
let stage = null;
let stopInputMode = null;

const onFullscreenChange = () => {
  fullscreen.value = !!document.fullscreenElement;
};
onMounted(() => {
  stopInputMode = trackInputMode(root.value);
  stage = props.controller.onStage({ canvas: canvas.value, root: root.value }) ?? null;
  root.value?.focus({ preventScroll: true });
  document.addEventListener("fullscreenchange", onFullscreenChange);
});
onBeforeUnmount(() => {
  stopInputMode?.();
  document.removeEventListener("fullscreenchange", onFullscreenChange);
});

const backdrop = createBackdropClose();
function onBackdropUp(event) {
  if (backdrop.up(event)) props.controller.close();
}
const isMac = /Mac|iPhone|iPad/.test(globalThis.navigator?.platform || globalThis.navigator?.userAgent || "");
const shortcuts = computed(() => shortcutGroups({ tab: "3d", panorama: false, readOnly: true, mac: isMac }));
const helpButton = () => nav.value?.helpButton() ?? null;
</script>

<template>
  <div class="pano-studio-backdrop" data-region="backdrop" @pointerdown="backdrop.down" @pointerup="onBackdropUp">
    <div
      ref="root"
      class="pano-studio pano-studio-preview"
      :class="{ 'is-knob-drag': ui.knobDrag }"
      role="dialog"
      tabindex="-1"
      aria-modal="true"
      :aria-label="nodeTitle"
      data-preview-window
    >
      <div class="pano-studio-stage" data-region="stage">
        <canvas ref="canvas" class="pano-studio-stage-canvas" data-stage-canvas :style="{ cursor: ui.cursor || null }" />
        <div class="pano-studio-at-close">
          <StudioFloatGroup layout="row" label="Window">
            <StudioIconButton :icon="ICON.close" label="Close" data-action="close" @press="controller.close()" />
          </StudioFloatGroup>
        </div>
        <div class="pano-studio-at-nav">
          <StudioNavWidget
            ref="nav"
            :lit="ui.lit"
            :help-open="help"
            @knob="(knob, event) => stage?.knobDown(knob, event)"
            @help="help = !help"
          />
        </div>
        <div v-if="help" class="pano-studio-at-shortcuts">
          <StudioShortcuts :groups="shortcuts" :toggle="helpButton" @close="help = false" />
        </div>
        <div class="pano-studio-at-buttons">
          <StudioFloatGroup layout="row" label="View">
            <StudioIconButton data-action="reset-view" :icon="ICON.reset" label="Reset view" @press="controller.resetView()" />
            <StudioIconButton
              data-action="grid"
              role="switch"
              :aria-checked="String(!ui.gridHidden)"
              :icon="ui.gridHidden ? ICON.grid_off : ICON.grid"
              label="Grid"
              :tip="ui.gridHidden ? 'Ground grid: hidden' : 'Ground grid: shown'"
              @press="controller.grid(ui.gridHidden)"
            />
            <StudioIconButton
              data-action="fullscreen"
              :icon="fullscreen ? ICON.fullscreen_close : ICON.fullscreen"
              :label="fullscreen ? 'Exit fullscreen' : 'Fullscreen'"
              @press="controller.fullscreen(root)"
            />
          </StudioFloatGroup>
        </div>
      </div>
      <StudioTooltip :root="root" />
    </div>
  </div>
</template>
