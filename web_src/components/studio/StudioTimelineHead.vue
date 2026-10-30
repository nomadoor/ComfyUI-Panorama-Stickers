<script setup>
import { ICON } from "../../icons.js";
import SvgIcon from "../shared/SvgIcon.vue";
import StudioKeyDot from "./StudioKeyDot.vue";

// The head of a Timeline row (docs/studio-ui.md "タイムラインのバー": eye, ▶, the Sky / World icon, name, row dot),
// or of one of its Lane lines (`lane`: indented name only). A row without an eye, a ▶ or a dot keeps their places,
// so names and dots line up down the column. An upstream row keeps the place of the "overridden" dot after its name.
// Presentational: `row` (timeline_model.js) in; `eye`, `expand`, `select`, `frame` (double-click on the name) and
// `key` (the row dot) out.
const props = defineProps({
  row: { type: Object, required: true },
  lane: { type: Object, default: null },
});
const emit = defineEmits(["eye", "expand", "select", "frame", "key"]);

function onEye() {
  if (!props.row.eye?.disabled) emit("eye");
}

function onExpand() {
  if (props.row.expand === "yes") emit("expand");
}
</script>

<template>
  <div v-if="lane" class="pano-studio-tl-head is-lane" :class="{ 'is-selected': row.selected }" :data-head="`${row.id}:${lane.lane}`">
    <span class="pano-studio-tl-head-name">{{ lane.label }}</span>
  </div>
  <div
    v-else
    class="pano-studio-tl-head"
    :class="{ 'is-selected': row.selected, 'is-hidden': row.eye && row.eye.icon === ICON.eye_dashed }"
    :data-head="row.id"
  >
    <button
      v-if="row.eye"
      type="button"
      class="pano-studio-tl-head-btn"
      :aria-label="row.eye.label"
      :title="row.eye.tip"
      :aria-disabled="row.eye.disabled ? 'true' : null"
      data-part="eye"
      @click="onEye"
    >
      <SvgIcon :icon="row.eye.icon" />
    </button>
    <span v-else class="pano-studio-tl-head-gap" />
    <button
      v-if="row.expand !== 'none'"
      type="button"
      class="pano-studio-tl-head-btn pano-studio-tl-expand"
      :class="{ 'is-open': row.open }"
      :aria-label="row.open ? 'Close the Lanes' : 'Open the Lanes'"
      :aria-expanded="row.expand === 'yes' ? (row.open ? 'true' : 'false') : null"
      :aria-disabled="row.expand === 'yes' ? null : 'true'"
      data-part="expand"
      @click="onExpand"
    >
      <span class="pano-studio-tl-tri" aria-hidden="true" />
    </button>
    <span v-else class="pano-studio-tl-head-gap" />
    <SvgIcon class-name="pano-studio-tl-head-icon" :icon="row.icon" />
    <span
      class="pano-studio-tl-head-name"
      :title="row.nameTip"
      data-part="name"
      @click="emit('select')"
      @dblclick="emit('frame')"
    >{{ row.label }}</span>
    <span
      v-if="row.upstream"
      class="pano-studio-tl-override"
      :class="{ 'is-on': row.overridden }"
      :title="row.overridden ? 'Overridden in this node' : null"
    />
    <StudioKeyDot
      v-if="row.dot"
      :state="row.dot.state"
      :disabled="row.dot.disabled"
      label="Keyframe the row"
      :tip="row.dot.tip"
      data-part="dot"
      @toggle="emit('key')"
    />
    <span v-else class="pano-studio-tl-head-dot-gap" />
  </div>
</template>
