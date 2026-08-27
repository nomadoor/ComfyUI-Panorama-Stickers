<script setup>
import { ref } from "vue";

const emit = defineEmits(["file-selected", "file-cancelled"]);
const inputRef = ref(null);
let pendingIntent;
let requestOpen = false;

function takePendingIntent() {
  if (!requestOpen) return { active: false, intent: undefined };
  const intent = pendingIntent;
  pendingIntent = undefined;
  requestOpen = false;
  return { active: true, intent };
}

function open(intent) {
  const input = inputRef.value;
  if (!(input instanceof HTMLInputElement)) return false;
  pendingIntent = intent;
  requestOpen = true;
  input.value = "";
  input.click();
  return true;
}

function onChange(event) {
  const { active, intent } = takePendingIntent();
  if (!active) return;
  const file = event.target?.files?.[0] || null;
  if (file) {
    emit("file-selected", { intent, file });
    return;
  }
  emit("file-cancelled", { intent });
}

function onCancel() {
  const { active, intent } = takePendingIntent();
  if (active) emit("file-cancelled", { intent });
}

defineExpose({ open });
</script>

<template>
  <input
    ref="inputRef"
    hidden
    type="file"
    accept="image/*"
    tabindex="-1"
    aria-hidden="true"
    @change="onChange"
    @cancel="onCancel"
  >
</template>
