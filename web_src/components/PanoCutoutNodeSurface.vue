<script setup>
import { ICON } from "../icons.js";
import PanoCutoutAspectPicker from "./PanoCutoutAspectPicker.vue";
import PanoCutoutNodeHelp from "./PanoCutoutNodeHelp.vue";
import PanoIconButton from "./PanoIconButton.vue";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  model: { type: Object, default: () => ({}) },
  onAction: { type: Function, default: null },
});

function emitAction(action) {
  props.onAction?.(action);
}
</script>

<template>
  <div class="pano-cutout-node-surface">
    <div
      class="pano-cutout-node-toolbar"
      role="toolbar"
      aria-label="Cutout frame controls"
      @pointerdown.stop
      @wheel.stop
    >
      <button
        class="pano-btn pano-btn-texticon pano-cutout-node-full-editor"
        type="button"
        data-action="open-editor"
        @click="emitAction({ type: 'open-editor' })"
      >
        <SvgIcon :icon="ICON.fullscreen" />
        <span class="label">Full Editor</span>
      </button>
      <PanoIconButton
        :icon="model.hasShot ? ICON.delete : ICON.plus_circle"
        :label="model.hasShot ? 'Delete Frame' : 'Add Frame'"
        :tip="model.hasShot ? 'Delete frame' : 'Add frame'"
        extra-class="pano-cutout-node-frame-action"
        :attrs="{ 'data-action': model.hasShot ? 'delete-frame' : 'add-frame' }"
        @click="emitAction({ type: model.hasShot ? 'delete-frame' : 'add-frame' })"
      />
      <PanoCutoutAspectPicker
        :model="model"
        mode="node"
        @action="emitAction"
      />
      <button
        class="pano-btn pano-cutout-node-roll-value"
        type="button"
        aria-label="Current roll"
        :title="`Roll ${model.rollLabel || '0.0°'} · Double-click to reset`"
        :disabled="model.hasShot === false || model.locked === true"
        @dblclick.stop.prevent="emitAction({ type: 'set-roll', value: 0 })"
      >
        <SvgIcon :icon="ICON.roll" />
        <span class="value">{{ model.rollLabel || "0.0°" }}</span>
      </button>
      <PanoIconButton
        :icon="ICON.rotate_90"
        label="Toggle Portrait/Landscape"
        tip="Toggle portrait/landscape"
        extra-class="pano-cutout-node-swap"
        :attrs="{
          'data-action': 'swap-aspect',
          disabled: model.hasShot === false || model.locked === true,
        }"
        @click="emitAction({ type: 'swap-aspect' })"
      />
      <PanoCutoutNodeHelp />
    </div>
    <div
      v-if="model.hasShot === false"
      class="pano-cutout-node-empty-note"
    >
      Choose a view · + Add Frame
    </div>
  </div>
</template>
