<script setup>
import { computed, nextTick, onBeforeUnmount, ref } from "vue";
import {
  clampValue, dragStep, dragValue, formatNumber, parseNumber, passedDragThreshold,
} from "../../studio/ui_drag.js";

// A value box of the inspector (docs/studio-ui.md "欄"). No fill until hovered. Dragging the box left and right
// changes the value: the cursor is hidden by pointer lock so the drag does not stop at the screen edge, and when
// the lock is refused the same drag runs with the cursor shown. Shift makes it 1/10. Releasing without moving
// opens the box for typing. Escape during a drag (or the browser ending the lock with Escape) puts the value back.
//
// Presentational: `value` in; `input` (each change during a drag or on typing), `change` (once when a drag or a
// typed value ends with a different value: one Undo step), `cancel` (a drag or typing given up; an `input` with the
// value from before comes first when a drag had moved it) out.
const props = defineProps({
  value: { type: Number, default: 0 },
  // The short axis name before the value ("X").
  axis: { type: String, default: "" },
  // The unit after the value ("°", "%").
  unit: { type: String, default: "" },
  // The value one pixel of drag moves.
  step: { type: Number, default: 0.01 },
  // Decimals shown and sent.
  precision: { type: Number, default: 2 },
  min: { type: Number, default: -Infinity },
  max: { type: Number, default: Infinity },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "" },
  // Text for a value, and a value for typed text (null when it holds none); default: numbers with `precision`.
  format: { type: Function, default: null },
  parse: { type: Function, default: null },
});
const emit = defineEmits(["input", "change", "cancel"]);

const root = ref(null);
const input = ref(null);
const editing = ref(false);
const draft = ref("");
const dragging = ref(false);
// The value shown while a drag runs, so the box answers before the owner sends the new value back.
const live = ref(null);

const shown = computed(() => (live.value ?? props.value));
const text = computed(() => (props.format ? props.format(shown.value) : formatNumber(shown.value, props.precision)));
const limits = computed(() => ({ step: props.step, precision: props.precision, min: props.min, max: props.max }));

let drag = null;

function onPointerDown(event) {
  if (props.disabled || editing.value || event.button !== 0 || drag) return;
  event.preventDefault();
  drag = {
    pointerId: event.pointerId,
    start: props.value,
    raw: props.value,
    sent: props.value,
    dx: 0,
    dy: 0,
    locked: false,
    ending: false,
  };
  root.value?.setPointerCapture?.(event.pointerId);
  window.addEventListener("pointermove", onPointerMove, true);
  window.addEventListener("pointerup", onPointerUp, true);
  window.addEventListener("pointercancel", onPointerCancel, true);
  window.addEventListener("keydown", onDragKeydown, true);
  document.addEventListener("pointerlockchange", onLockChange);
}

function requestLock() {
  const el = root.value;
  if (!el?.requestPointerLock) return;
  try {
    const result = el.requestPointerLock();
    // A refused lock: the drag keeps running with the cursor shown.
    result?.catch?.(() => {});
  } catch {
    // Same: no lock, the drag runs without it.
  }
}

function onPointerMove(event) {
  if (!drag || (event.pointerId !== drag.pointerId && !drag.locked)) return;
  if (!dragging.value) {
    drag.dx += event.movementX || 0;
    drag.dy += event.movementY || 0;
    if (!passedDragThreshold(drag.dx, drag.dy)) return;
    dragging.value = true;
    requestLock();
    drag.raw = dragStep(drag.raw, drag.dx, { ...limits.value, fine: event.shiftKey });
  } else {
    drag.raw = dragStep(drag.raw, event.movementX, { ...limits.value, fine: event.shiftKey });
  }
  const next = dragValue(drag.raw, limits.value);
  if (next !== drag.sent) {
    drag.sent = next;
    live.value = next;
    emit("input", next);
  }
}

function onPointerUp(event) {
  if (!drag || (event.pointerId !== drag.pointerId && !drag.locked)) return;
  const { start, sent } = drag;
  const moved = dragging.value;
  endDrag();
  if (!moved) {
    startEditing();
    return;
  }
  if (sent !== start) emit("change", sent);
}

function onPointerCancel(event) {
  if (drag && event.pointerId === drag.pointerId) cancelDrag();
}

function onDragKeydown(event) {
  if (!drag || event.key !== "Escape") return;
  // Escape here undoes the drag only; it must not reach the editor (which would close).
  event.preventDefault();
  event.stopPropagation();
  cancelDrag();
}

function onLockChange() {
  if (!drag) return;
  const lockedNow = document.pointerLockElement === root.value;
  if (lockedNow) {
    drag.locked = true;
    return;
  }
  // The browser ended the lock (Escape) while the drag was running: the same as Escape. The Escape key event may
  // still arrive after this; it is kept from the editor for a moment so it does not close it.
  if (drag.locked && !drag.ending) {
    cancelDrag();
    swallowEscape();
  }
}

const ESCAPE_AFTER_LOCK_MS = 500;

function swallowEscape() {
  const swallow = (event) => {
    if (event.key !== "Escape") return;
    event.preventDefault();
    event.stopPropagation();
  };
  window.addEventListener("keydown", swallow, true);
  setTimeout(() => window.removeEventListener("keydown", swallow, true), ESCAPE_AFTER_LOCK_MS);
}

function cancelDrag() {
  if (!drag) return;
  const { start, sent } = drag;
  endDrag();
  if (sent !== start) emit("input", start);
  emit("cancel");
}

function endDrag() {
  if (!drag) return;
  drag.ending = true;
  if (document.pointerLockElement === root.value) document.exitPointerLock?.();
  try {
    root.value?.releasePointerCapture?.(drag.pointerId);
  } catch {
    // The capture was already gone.
  }
  window.removeEventListener("pointermove", onPointerMove, true);
  window.removeEventListener("pointerup", onPointerUp, true);
  window.removeEventListener("pointercancel", onPointerCancel, true);
  window.removeEventListener("keydown", onDragKeydown, true);
  document.removeEventListener("pointerlockchange", onLockChange);
  drag = null;
  dragging.value = false;
  live.value = null;
}

async function startEditing() {
  if (props.disabled) return;
  draft.value = text.value;
  editing.value = true;
  await nextTick();
  input.value?.focus();
  input.value?.select();
}

function commitEditing() {
  if (!editing.value) return;
  editing.value = false;
  const typed = props.parse ? props.parse(draft.value) : parseNumber(draft.value);
  if (typed == null || !Number.isFinite(typed)) {
    emit("cancel");
    return;
  }
  const next = clampValue(props.parse ? typed : dragValue(typed, limits.value), props.min, props.max);
  if (next === props.value) return;
  emit("input", next);
  emit("change", next);
}

function onInputKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    commitEditing();
    root.value?.focus();
  } else if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    editing.value = false;
    emit("cancel");
    root.value?.focus();
  }
}

function onKeydown(event) {
  // Keys typed in the open box bubble here too; only keys on the box itself open it.
  if (event.target !== root.value || editing.value || props.disabled) return;
  if (event.key === "Enter" || event.key === "F2") {
    event.preventDefault();
    startEditing();
  }
}

onBeforeUnmount(endDrag);

defineExpose({ startEditing });
</script>

<template>
  <div
    ref="root"
    class="pano-studio-field pano-studio-num"
    :class="{ 'is-dragging': dragging, 'is-editing': editing }"
    role="spinbutton"
    :tabindex="disabled ? -1 : 0"
    :aria-label="label || axis || null"
    :aria-valuenow="shown"
    :aria-valuetext="text"
    :aria-valuemin="Number.isFinite(min) ? min : null"
    :aria-valuemax="Number.isFinite(max) ? max : null"
    :aria-disabled="disabled ? 'true' : null"
    @pointerdown="onPointerDown"
    @keydown="onKeydown"
  >
    <span v-if="axis" class="pano-studio-field-axis pano-studio-cap">{{ axis }}</span>
    <input
      v-if="editing"
      ref="input"
      v-model="draft"
      class="pano-studio-field-input"
      spellcheck="false"
      :aria-label="label || axis || null"
      @keydown="onInputKeydown"
      @blur="commitEditing"
      @pointerdown.stop
    >
    <template v-else>
      <span class="pano-studio-field-value pano-studio-cap">{{ text }}</span>
      <span v-if="unit" class="pano-studio-field-unit pano-studio-cap">{{ unit }}</span>
    </template>
  </div>
</template>
