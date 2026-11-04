<script setup>
// The new Preview window's shell (docs/studio-ui.md "Preview のウィンドウ"): the stage fills the window; ✕ at the top
// right, the view knobs, Set orbit center and "?" at the right middle, the View group (StudioViewButtons.vue: the FOV
// number and its reset, Reset View, the grid switch) with Fullscreen at the bottom right; at the top center only Set orbit center's waiting line (docs/space-and-view.md "Set orbit center").
// No inspector, timeline, left rail or bottom bar. A VIDEO source has the playback strip at the bottom: play / pause,
// the loop switch, the seek bar and the time, in the node surface's order. web_src/studio/preview_window.js owns what
// it shows. `playback`: { video, frame, frames, fps, playing, loop }. `controller`: onStage({ canvas, overlay, root }), close(),
// resetView(), grid(shown), play(), seek(frame), loop(on), fullscreen(root).
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import { createBackdropClose } from "../../studio/backdrop.js";
import { trackInputMode } from "../../studio/input_modality.js";
import { isMacPlatform, shortcutGroups } from "../../studio/shortcuts.js";
import { topLine } from "../../studio/notice_line.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioNavWidget from "./StudioNavWidget.vue";
import StudioNotice from "./StudioNotice.vue";
import StudioShortcuts from "./StudioShortcuts.vue";
import StudioTooltip from "./StudioTooltip.vue";
import StudioViewButtons from "./StudioViewButtons.vue";

const props = defineProps({
  nodeTitle: { type: String, default: "" },
  ui: { type: Object, required: true },
  playback: { type: Object, required: true },
  controller: { type: Object, required: true },
});

const root = ref(null);
const canvas = ref(null);
const nav = ref(null);
const overlay = ref(null);
const help = ref(false);
const fullscreen = ref(false);
let stage = null;
let stopInputMode = null;

const onFullscreenChange = () => {
  fullscreen.value = !!document.fullscreenElement;
};
onMounted(() => {
  stopInputMode = trackInputMode(root.value);
  stage = props.controller.onStage({ canvas: canvas.value, overlay: overlay.value, root: root.value }) ?? null;
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
const isMac = isMacPlatform();
const shortcuts = computed(() => shortcutGroups({ context: "preview", playable: props.playback.video, mac: isMac }));
const helpButton = () => nav.value?.helpButton() ?? null;
// The window has no top line but Set orbit center's waiting one (docs/studio-ui.md "Preview のウィンドウ").
const waitLine = computed(() => topLine({ pickingCenter: !!props.ui.pickingCenter }));

// --- The playback strip's time: "m:ss / m:ss" (the frame shown, the length).
function clock(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
const timeText = computed(() => `${clock(props.playback.frame / props.playback.fps)} / ${clock(props.playback.frames / props.playback.fps)}`);
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
        <canvas ref="overlay" class="pano-studio-stage-overlay" data-stage-overlay aria-hidden="true" />
        <div v-if="waitLine.text" class="pano-studio-at-notice">
          <StudioNotice :text="waitLine.text" :kind="waitLine.kind" />
        </div>
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
            :center-picking="!!ui.pickingCenter"
            @hover="(knob) => stage?.toolbarHover(knob)"
            @center="stage?.pickCenter()"
            @knob="(knob, event) => stage?.knobDown(knob, event)"
            @help="help = !help"
          />
        </div>
        <div v-if="help" class="pano-studio-at-shortcuts">
          <StudioShortcuts :groups="shortcuts" :toggle="helpButton" @close="help = false" />
        </div>
        <StudioViewButtons
          class="pano-studio-at-buttons"
          :fov="ui.fov"
          :frame-selected="false"
          :grid-shown="!ui.gridHidden"
          :at-start="ui.atStart"
          @fov="(value) => stage?.setFov(value)"
          @fov-reset="stage?.resetFov()"
          @reset-view="controller.resetView()"
          @grid="(shown) => controller.grid(shown)"
        >
          <StudioIconButton
            data-action="fullscreen"
            :icon="fullscreen ? ICON.fullscreen_close : ICON.fullscreen"
            :label="fullscreen ? 'Exit fullscreen' : 'Fullscreen'"
            @press="controller.fullscreen(root)"
          />
        </StudioViewButtons>
      </div>
      <div v-if="playback.video" class="pano-studio-preview-strip" data-region="playback">
        <StudioIconButton
          data-action="play"
          :icon="playback.playing ? ICON.pause : ICON.play"
          :label="playback.playing ? 'Pause' : 'Play'"
          @press="controller.play()"
        />
        <StudioIconButton
          data-action="loop"
          role="switch"
          :aria-checked="String(playback.loop)"
          :icon="playback.loop ? ICON.loop : ICON.loop_off"
          label="Loop"
          :tip="playback.loop ? 'Loop: on' : 'Loop: off'"
          @press="controller.loop(!playback.loop)"
        />
        <input
          class="pano-studio-preview-seek"
          type="range"
          min="0"
          :max="Math.max(0, playback.frames - 1)"
          step="1"
          :value="playback.frame"
          aria-label="Seek"
          data-seek
          @input="(event) => controller.seek(Number(event.target.value))"
        >
        <span class="pano-studio-preview-time" data-time>{{ timeText }}</span>
      </div>
      <StudioTooltip :root="root" />
    </div>
  </div>
</template>
