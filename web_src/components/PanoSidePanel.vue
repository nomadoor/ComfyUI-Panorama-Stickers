<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  nodeTitle: { type: String, default: "Panorama Stickers" },
  model: { type: Object, default: () => ({}) },
});

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
            <div
              v-for="param in model.params || []"
              :key="param.key"
              class="pano-field"
              :data-key="param.key"
            >
              <label>{{ param.label }}</label>
              <input
                type="range"
                :min="param.min"
                :max="param.max"
                :step="param.step"
                :value="param.value"
                :disabled="isParamDisabled(param, model)"
                :style="rangeStyle(param)"
                data-action="param-input"
                data-input-kind="range"
                :data-param-key="param.key"
              >
              <input
                type="number"
                :min="param.min"
                :max="param.max"
                :step="param.step"
                :value="param.displayValue"
                :disabled="isParamDisabled(param, model)"
                data-action="param-input"
                data-input-kind="number"
                :data-param-key="param.key"
              >
            </div>
          </template>
        </div>

        <template v-if="(model.visibilityRows || []).length">
          <div class="pano-divider" />
          <div class="pano-visibility-section">
            <div class="pano-section-title">
              <span>Layers</span>
            </div>
            <div class="pano-visibility-stack">
              <div
                v-for="row in model.visibilityRows"
                :key="row.key"
                class="pano-visibility-row"
                :class="{ 'is-hidden': row.visible === false, 'is-disabled': row.enabled === false }"
                :data-visibility-row="row.key"
              >
                <span class="pano-visibility-name">
                  <span class="pano-visibility-name-icon" aria-hidden="true">
                    <SvgIcon :icon="row.icon" />
                  </span>
                  <span>{{ row.label }}</span>
                </span>
                <button
                  class="pano-visibility-toggle"
                  type="button"
                  data-action="toggle-visibility"
                  :data-visibility="row.key"
                  :aria-label="row.ariaLabel"
                  :aria-pressed="row.visible === true ? 'true' : 'false'"
                  :data-tip="row.tip"
                  :disabled="row.enabled === false"
                  :class="{ active: row.visible === true }"
                >
                  <SvgIcon :icon="row.visible === true ? ICON.eye : ICON.eye_dashed" />
                </button>
              </div>
            </div>
          </div>
        </template>

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
              <label for="pano-ui-quality">Render Quality</label>
              <div class="pano-picker pano-ui-picker" data-ui-picker="quality">
                <button id="pano-ui-quality" class="pano-picker-trigger" type="button" data-action="toggle-quality-picker">
                  <span class="pano-picker-label">{{ model.uiSettings.qualityLabel }}</span>
                  <span class="pano-picker-caret">▾</span>
                </button>
                <div class="pano-picker-pop" :hidden="model.uiSettings.qualityOpen !== true">
                  <button
                    v-for="option in model.uiSettings.qualityOptions || []"
                    :key="option.value"
                    type="button"
                    class="pano-picker-item"
                    :class="{ active: option.active === true }"
                    data-action="set-quality"
                    :data-quality="option.value"
                  >{{ option.label }}</button>
                </div>
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
