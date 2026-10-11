<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import PanoEasingGraph from "./PanoEasingGraph.vue";
import PanoUpstreamOrigin from "./PanoUpstreamOrigin.vue";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  nodeTitle: { type: String, default: "Panorama Stickers" },
  model: { type: Object, default: () => ({}) },
  easing: { type: Object, default: null },
});
const emit = defineEmits(["timeline"]);

const hasModel = computed(() => {
  const model = props.model;
  if (!model || typeof model !== "object") return false;
  return Object.keys(model).length > 0 && !!model.coverage;
});

function rangeStyle(param) {
  return { "--v": `${Number(param?.fillPct || 0)}%` };
}

function isParamDisabled(param, model) {
  return model?.paramsDisabled === true || param?.enabled === false;
}

// The number fields of the grouped rows, by param key, for dragging their labels.
const fieldInputs = {};

// A drag on a grouped field's label changes its value by `drag` per pixel (a tenth with Shift), through
// the field's own input and change events, which the editor handles as for typing; a click without a
// drag puts the caret in the field.
function onScrubDown(event, field) {
  const input = fieldInputs[field.key];
  if (event.button !== 0 || !input || isParamDisabled(field, props.model)) return;
  event.preventDefault();
  const handle = event.currentTarget;
  const startX = event.clientX;
  const start = Number(input.value) || 0;
  let moved = false;
  handle.setPointerCapture(event.pointerId);
  const move = (ev) => {
    if (!moved && Math.abs(ev.clientX - startX) < 3) return;
    moved = true;
    const next = start + (ev.clientX - startX) * field.drag * (ev.shiftKey ? 0.1 : 1);
    input.value = String(Number(next.toFixed(3)));
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
  const end = () => {
    handle.removeEventListener("pointermove", move);
    handle.removeEventListener("pointerup", end);
    handle.removeEventListener("pointercancel", end);
    handle.removeEventListener("lostpointercapture", end);
    if (moved) input.dispatchEvent(new Event("change", { bubbles: true }));
    else input.focus();
  };
  handle.addEventListener("pointermove", move);
  handle.addEventListener("pointerup", end);
  handle.addEventListener("pointercancel", end);
  handle.addEventListener("lostpointercapture", end);
}
</script>

<template>
  <div class="pano-side" data-side>
    <div class="pano-side-head">
      <div class="pano-side-title">
        <span class="pano-side-title-icon" aria-hidden="true">
          <SvgIcon :icon="ICON.globe" />
        </span>
        <span>{{ nodeTitle }}</span>
      </div>
      <div class="pano-side-actions" />
    </div>
    <div class="pano-divider" />
    <div v-if="hasModel" class="pano-side-scroll">
      <div class="pano-inspector">
        <div class="pano-section-title">
          <span>Scene</span>
        </div>
        <div class="pano-ui-row pano-coverage-row">
          <label>Coverage</label>
          <div
            class="pano-segment"
            data-setting="coverage"
            :data-selected="model.coverage?.value === 180 ? '1' : '0'"
          >
            <button
              class="pano-segment-btn"
              type="button"
              data-action="coverage-set"
              data-coverage="360"
              :aria-pressed="model.coverage?.value === 360 ? 'true' : 'false'"
              :disabled="model.coverage?.disabled === true"
            >360</button>
            <button
              class="pano-segment-btn"
              type="button"
              data-action="coverage-set"
              data-coverage="180"
              :aria-pressed="model.coverage?.value === 180 ? 'true' : 'false'"
              :disabled="model.coverage?.disabled === true"
            >180</button>
          </div>
        </div>

        <div v-if="model.transformTitle !== false" class="pano-section-title">
          <span>Transform</span>
          <span class="meta">{{ model.upstream?.origin || "" }}</span>
        </div>

        <div v-if="model.selectionPicker" class="pano-field-wide pano-target-row">
          <label>{{ model.selectionPicker.label }}</label>
          <div class="pano-picker" data-picker="selection">
            <button
              class="pano-picker-trigger"
              type="button"
              data-action="toggle-selection-picker"
              :disabled="model.selectionPicker.disabled === true"
            >
              <span class="pano-picker-label">
                <span
                  v-if="model.selectionPicker.currentIcon"
                  class="pano-picker-item-icon"
                  aria-hidden="true"
                >
                  <SvgIcon :icon="model.selectionPicker.currentIcon" />
                </span>
                <span>{{ model.selectionPicker.currentLabel }}</span>
              </span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop" :hidden="model.selectionPicker.open !== true">
              <button
                v-for="item in model.selectionPicker.items || []"
                :key="item.id"
                type="button"
                class="pano-picker-item"
                :class="{ active: item.active === true }"
                data-action="select-picker-item"
                :data-selection-id="item.id"
              >
                <span
                  v-if="item.icon"
                  class="pano-picker-item-icon"
                  aria-hidden="true"
                >
                  <SvgIcon :icon="item.icon" />
                </span>
                <span>{{ item.label }}</span>
              </button>
            </div>
          </div>
        </div>

        <div v-if="model.copyStateButton" class="pano-state-actions">
          <button
            class="pano-btn subtle pano-btn-tight pano-btn-copy"
            type="button"
            data-action="copy-state-inline"
            :disabled="model.copyStateButton.disabled === true"
          >
            <SvgIcon :icon="ICON.copy" />
            <span>{{ model.copyStateButton.label }}</span>
          </button>
        </div>

        <div class="pano-params" :class="{ disabled: model.paramsDisabled === true }">
          <template v-if="(model.notes || []).length">
            <div v-for="note in model.notes" :key="note" class="pano-param-note">{{ note }}</div>
          </template>
          <template v-else>
            <template v-for="row in model.rows || []" :key="row.key">
              <div v-if="row.grouped" class="pano-field pano-field-group" :data-key="row.key">
                <label>{{ row.label }}</label>
                <div class="pano-field-group-values">
                  <div v-for="field in row.fields" :key="field.key" class="pano-axis-field">
                    <span
                      class="pano-axis"
                      :class="{ disabled: isParamDisabled(field, model) }"
                      :title="field.label"
                      @pointerdown="onScrubDown($event, field)"
                    >{{ field.short }}</span>
                    <input
                      :ref="(el) => { fieldInputs[field.key] = el; }"
                      type="number"
                      :min="field.min"
                      :max="field.max"
                      :step="field.step"
                      :value="field.displayValue"
                      :disabled="isParamDisabled(field, model)"
                      :aria-label="`${row.label} ${field.label}`"
                      data-action="param-input"
                      data-input-kind="number"
                      :data-param-key="field.key"
                    >
                  </div>
                </div>
              </div>
              <div v-else-if="row.fields[0].options" class="pano-field" :data-key="row.key" :data-tip="row.fields[0].tip || null">
                <label>{{ row.label }}</label>
                <select
                  :disabled="isParamDisabled(row.fields[0], model)"
                  :aria-label="row.label"
                  data-action="param-input"
                  data-input-kind="select"
                  :data-param-key="row.fields[0].key"
                >
                  <option
                    v-for="option in row.fields[0].options"
                    :key="option.value"
                    :value="option.value"
                    :selected="option.value === row.fields[0].value"
                  >{{ option.label }}</option>
                </select>
              </div>
              <div v-else class="pano-field" :data-key="row.key" :data-tip="row.fields[0].tip || null">
                <label>{{ row.label }}</label>
                <input
                  type="range"
                  :min="row.fields[0].min"
                  :max="row.fields[0].max"
                  :step="row.fields[0].step"
                  :value="row.fields[0].value"
                  :disabled="isParamDisabled(row.fields[0], model)"
                  :style="rangeStyle(row.fields[0])"
                  data-action="param-input"
                  data-input-kind="range"
                  :data-param-key="row.fields[0].key"
                >
                <input
                  type="number"
                  :min="row.fields[0].min"
                  :max="row.fields[0].max"
                  :step="row.fields[0].step"
                  :value="row.fields[0].displayValue"
                  :disabled="isParamDisabled(row.fields[0], model)"
                  data-action="param-input"
                  data-input-kind="number"
                  :data-param-key="row.fields[0].key"
                >
              </div>
            </template>
          </template>
        </div>

        <PanoUpstreamOrigin :model="model.upstream" />

        <PanoEasingGraph :model="easing" @timeline="emit('timeline', $event)" />

        <details v-if="model.uiSettings" class="pano-ui-settings" :open="model.uiSettings.open === true">
          <summary>
            <span class="pano-ui-summary-label">UI Settings</span>
            <span class="pano-ui-caret" aria-hidden="true">
              <SvgIcon :icon="ICON.chevron" />
            </span>
          </summary>
          <div class="pano-ui-settings-body">
            <div class="pano-ui-row">
              <label>Drag X</label>
              <div class="pano-segment" data-setting="invert-x" :data-selected="model.uiSettings.invertX ? '1' : '0'">
                <button class="pano-segment-btn" type="button" data-action="set-invert-x" data-value="0" :aria-pressed="model.uiSettings.invertX ? 'false' : 'true'">Normal</button>
                <button class="pano-segment-btn" type="button" data-action="set-invert-x" data-value="1" :aria-pressed="model.uiSettings.invertX ? 'true' : 'false'">Inverted</button>
              </div>
            </div>
            <div class="pano-ui-row">
              <label>Drag Y</label>
              <div class="pano-segment" data-setting="invert-y" :data-selected="model.uiSettings.invertY ? '1' : '0'">
                <button class="pano-segment-btn" type="button" data-action="set-invert-y" data-value="0" :aria-pressed="model.uiSettings.invertY ? 'false' : 'true'">Normal</button>
                <button class="pano-segment-btn" type="button" data-action="set-invert-y" data-value="1" :aria-pressed="model.uiSettings.invertY ? 'true' : 'false'">Inverted</button>
              </div>
            </div>
            <div class="pano-ui-row">
              <span />
              <button class="pano-btn subtle" type="button" data-action="ui-reset-defaults">Reset Defaults</button>
            </div>
          </div>
        </details>
      </div>
    </div>

    <div v-if="(model.footerButtons || []).length" class="pano-side-footer">
      <button
        v-for="button in model.footerButtons"
        :key="button.action"
        class="pano-btn"
        :class="{ 'pano-btn-primary': button.primary === true }"
        type="button"
        :data-action="button.action"
      >{{ button.label }}</button>
    </div>
  </div>
</template>
