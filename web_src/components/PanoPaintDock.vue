<script setup>
import { ICON } from "../icons.js";
import PanoIconButton from "./shared/PanoIconButton.vue";

defineProps({
  paintSwatches: { type: Array, default: () => [] },
  panes: { type: Array, default: () => [] },
  state: { type: Object, default: () => ({}) },
});

function swatchStyle(swatch) {
  return { "--swatch": String(swatch?.cssColor || "") };
}

function historyStyle(color) {
  return color ? { "--swatch": String(color.cssColor || "") } : {};
}

</script>

<template>
  <div class="pano-paint-dock" :class="{ 'is-hidden': state.visible === false }" data-paint-dock>
    <div
      v-for="pane in panes"
      :key="pane.key"
      class="pano-paint-pane"
      :class="{ 'is-active': state.activePane === pane.key }"
      :data-paint-pane="pane.key"
    >
      <div
        v-if="pane.showColorFloat"
        class="pano-paint-color-float"
        :class="{ disabled: state.colorEnabled === false }"
        data-paint-color-row
        :hidden="state.showColorRow === false"
      >
        <button
          v-for="swatch in paintSwatches"
          :key="swatch.id"
          class="pano-paint-color-dot"
          :class="{ active: state.activeSwatchId === swatch.id }"
          type="button"
          :data-paint-color-swatch="swatch.id"
          :aria-label="swatch.label"
          :style="swatchStyle(swatch)"
          :aria-pressed="state.activeSwatchId === swatch.id ? 'true' : 'false'"
          :disabled="state.colorEnabled === false"
        />
        <button
          class="pano-paint-color-dot pano-paint-color-dot-rainbow"
          :class="{ active: state.customColorActive === true }"
          type="button"
          data-paint-color-custom
          aria-label="Custom color"
          :aria-pressed="state.customColorActive === true ? 'true' : 'false'"
          :disabled="state.colorEnabled === false"
          :style="{ '--custom-color': String(state.customColorCss || '') }"
        />
        <div
          class="pano-paint-color-pop"
          data-paint-color-pop
          :hidden="state.colorPopOpen !== true"
          :style="{
            '--picker-hue-color': String(state.pickerHueColor || ''),
            '--picker-sat': String(state.pickerSat || '0%'),
            '--picker-val': String(state.pickerVal || '0%'),
            '--picker-hue': String(state.pickerHue || '0%'),
          }"
        >
          <div class="pano-paint-color-pop-head">
            <span class="pano-paint-color-preview" data-paint-color-preview :style="{ background: String(state.customColorCss || '') }" />
            <span class="pano-paint-color-pop-label">Custom Color</span>
          </div>
          <div class="pano-paint-color-field">
            <div class="pano-paint-sv-panel" data-paint-color-sv>
              <div
                class="pano-paint-sv-cursor"
                data-paint-color-sv-cursor
                :style="{ left: String(state.pickerSvLeft || '0%'), top: String(state.pickerSvTop || '0%') }"
              />
            </div>
            <div class="pano-paint-hue-strip" data-paint-hue-strip>
              <div class="pano-paint-hue-handle" data-paint-hue-handle :style="{ left: String(state.pickerHueLeft || '0%') }" />
            </div>
          </div>
          <label class="pano-paint-color-field">
            <span>Opacity</span>
            <div class="pano-paint-alpha-wrap">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                :value="state.alphaValue ?? 100"
                data-paint-alpha-slider
              >
              <span data-paint-alpha-value>{{ state.alphaText || "100%" }}</span>
            </div>
          </label>
          <div class="pano-paint-color-history" data-paint-color-history-wrap :hidden="state.historyVisible === false">
            <div class="pano-paint-color-history-list" data-paint-color-history>
              <button
                v-for="entry in state.historyEntries || []"
                :key="entry.index"
                class="pano-paint-color-history-dot"
                :class="{ empty: !entry.color }"
                type="button"
                :data-paint-history-index="entry.index"
                :aria-label="`Recent color ${entry.index + 1}`"
                :disabled="!entry.color"
                :style="historyStyle(entry.color)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="pano-paint-footer" :data-paint-footer="pane.footer">
        <div class="pano-paint-footer-group" :data-paint-group="pane.group">
          <PanoIconButton
            v-for="tool in pane.tools"
            :key="`${pane.key}-${tool.key}`"
            :icon="tool.icon"
            :label="tool.label"
            :tip="tool.tip"
            :extra-class="{ active: state.activeTools?.[pane.key] === tool.key }"
            :attrs="{ [tool.attr]: tool.key }"
          />
        </div>
        <div class="pano-paint-size-row" :class="{ disabled: state.sizeDisabled === true }" data-paint-size-row :hidden="state.showSizeRow === false">
          <input
            class="pano-paint-size-slider"
            data-paint-size-slider
            type="range"
            min="1"
            max="120"
            step="1"
            :value="state.sizeValue ?? 10"
            :disabled="state.sizeDisabled === true"
            :style="{ '--v': String(state.sizeFill || '0%') }"
          >
          <span class="pano-paint-size-value" data-paint-size-value>{{ state.sizeText || "10" }}</span>
        </div>
        <div class="pano-paint-clear-row" data-paint-clear-row :hidden="!(state.clearVisible?.[pane.key] ?? !pane.clearHidden)">
          <PanoIconButton
            :icon="ICON.clear"
            :label="pane.clearLabel"
            :tip="pane.clearTip"
            extra-class="pano-paint-layer-clear"
            :attrs="{ 'data-paint-layer-clear-current': pane.clearTarget }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
