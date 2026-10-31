<script setup>
import { CAMERA_ASPECT_MAX, CAMERA_ASPECT_MIN } from "../../pano_editor_state.js";
import { aspectLabel, parseAspect } from "../../studio/ui_aspect.js";
import { roundValue } from "../../studio/ui_drag.js";
import StudioAspectSlider from "./StudioAspectSlider.vue";
import StudioCard from "./StudioCard.vue";
import StudioInspectorRow from "./StudioInspectorRow.vue";
import StudioModeTiles from "./StudioModeTiles.vue";
import StudioNumberField from "./StudioNumberField.vue";
import StudioSegmented from "./StudioSegmented.vue";
import StudioSlider from "./StudioSlider.vue";

// One card of the inspector (docs/studio-ui.md "種類ごとの中身", "Camera のカード"): its heading and its rows, from a
// card of web_src/studio/inspector_model.js. Presentational: every change goes out as `edit` (the shapes of
// web_src/studio/inspector_actions.js), with the card's target.
const props = defineProps({
  card: { type: Object, required: true },
});
const emit = defineEmits(["edit"]);

// The lens fields where a Lens drag began, so every edit of the drag keeps the center scale of its start.
const lensStart = new Map();

function send(edit) {
  emit("edit", { target: props.card.target, ...edit });
}

function fieldEdit(row, field, phase, value) {
  const edit = { type: "field", field: field.field, value, phase };
  if (row.lensStart) {
    if (!lensStart.has(row.id)) lensStart.set(row.id, row.lensStart);
    edit.start = lensStart.get(row.id);
    if (phase !== "input") lensStart.delete(row.id);
  }
  send(edit);
}

// The handlers of a value box or slider of `field`; a slider's value is rounded to the box's precision.
function on(row, field, { round = false } = {}) {
  const value = (v) => (round ? roundValue(v, field.precision) : v);
  return {
    onInput: (v) => fieldEdit(row, field, "input", value(v)),
    onChange: (v) => fieldEdit(row, field, "commit", value(v)),
    onCancel: () => fieldEdit(row, field, "cancel"),
  };
}

function boxProps(row, field) {
  return {
    value: field.value,
    axis: field.axis || "",
    unit: field.unit,
    step: field.step,
    precision: field.precision,
    min: field.min,
    max: field.max,
    disabled: field.disabled,
    label: field.axis ? `${row.name} ${field.axis}` : row.name,
    "data-field": field.field,
  };
}
</script>

<template>
  <StudioCard :title="card.title" :icon="card.icon" :note="card.note" :data-card="card.kind">
    <template v-for="row in card.rows" :key="row.id">
      <div v-if="row.control === 'heading'" class="pano-studio-card-subhead pano-studio-cap" :data-row="row.name">{{ row.name }}</div>
      <StudioModeTiles
        v-else-if="row.control === 'mode'"
        :options="row.options"
        :value="row.value"
        :disabled="row.disabled"
        :label="row.name"
        :tip="row.tip"
        :data-row="row.name"
        @select="(value) => send({ type: 'choice', field: 'projection', value })"
      />
      <StudioInspectorRow
        v-else
        :name="row.name"
        :layout="row.layout"
        :key-state="row.keyState"
        :key-disabled="row.keyDisabled"
        :resettable="row.resettable"
        :at-default="row.atDefault"
        :disabled="row.disabled"
        :marked="row.marked"
        :tip="row.tip"
        @key-toggle="send({ type: 'key', row: row.id })"
        @reset="send({ type: 'reset', row: row.id })"
      >
        <template v-if="row.control === 'fields'">
          <StudioNumberField v-for="field in row.fields" :key="field.field" v-bind="{ ...boxProps(row, field), ...on(row, field) }" />
        </template>

        <template v-else-if="row.control === 'ground'">
          <StudioNumberField v-bind="{ ...boxProps(row, row.fields[0]), ...on(row, row.fields[0]) }" />
          <button
            type="button"
            class="pano-studio-text-btn"
            data-action="set-ground"
            :data-tip="row.setGround.tip"
            :aria-disabled="row.setGround.disabled ? 'true' : null"
            @click="row.setGround.disabled || send({ type: 'set-ground' })"
          >Set ground</button>
        </template>

        <template v-else-if="row.control === 'choice'">
          <StudioSegmented
            :options="row.options"
            :value="row.value"
            :disabled="row.disabled"
            :label="row.name"
            fill
            @select="(value) => send({ type: 'choice', field: 'erp_range', value })"
          />
        </template>

        <template v-else-if="row.control === 'select'">
          <select
            class="pano-studio-select"
            :disabled="row.disabled"
            :aria-label="row.name"
            @change="(event) => send({ type: 'choice', field: row.id, value: Number(event.target.value) })"
          >
            <option v-for="option in row.options" :key="option.value" :value="option.value" :selected="option.value === row.value">{{ option.label }}</option>
          </select>
        </template>

        <template v-if="row.control === 'slider'" #control>
          <StudioSlider
            :value="row.fields[0].value"
            :min="row.slider.min"
            :max="row.slider.max"
            :step="row.slider.step"
            :disabled="row.disabled"
            :label="row.name"
            :data-slider="row.slider.field"
            v-bind="on(row, row.fields[0], { round: true })"
          />
        </template>
        <template v-if="row.control === 'slider'" #value>
          <StudioNumberField v-bind="{ ...boxProps(row, row.fields[0]), ...on(row, row.fields[0]) }" />
        </template>

        <template v-if="row.control === 'aspect'" #control>
          <StudioAspectSlider :value="row.fields[0].value" :disabled="row.disabled" data-slider="aspect" v-bind="on(row, row.fields[0])" />
        </template>
        <template v-if="row.control === 'aspect'" #value>
          <StudioNumberField
            v-bind="{ ...boxProps(row, row.fields[0]), ...on(row, row.fields[0]) }"
            :min="CAMERA_ASPECT_MIN"
            :max="CAMERA_ASPECT_MAX"
            :format="aspectLabel"
            :parse="parseAspect"
          />
        </template>
      </StudioInspectorRow>
    </template>
  </StudioCard>
</template>
