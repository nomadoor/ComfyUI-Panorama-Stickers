<script setup>
import { nextTick, onBeforeUnmount, reactive, ref, watch } from "vue";
import { TIP_DELAY, TIP_SKIP, placeTip, splitTipKeys, tipSide } from "../../studio/tooltip.js";

// The editor's one tooltip layer (docs/studio-ui.md "ツールチップ"). Controls write their explanation in `data-tip`
// (never `title`, which the browser shows at the cursor); this layer listens on `root` (the editor's frame), shows the
// bubble beside the hovered or keyboard-focused control (studio/tooltip.js placeTip) and hides it on a press, a wheel,
// a key or when the pointer leaves. It sits inside the frame, over the floats, and takes no pointer.
const props = defineProps({
  root: { type: Object, default: null },
});

const bubble = ref(null);
const tip = reactive({ visible: false, text: "", keys: "", left: 0, top: 0, side: "top" });

let target = null; // The control whose bubble shows or waits.
let timer = 0;
let frame = 0;
let hiddenAt = -Infinity; // When the last bubble hid (for TIP_SKIP).
let pressed = false; // A button is held: nothing shows until the pointer leaves the control it went up on.
let pressedOn = null;

const tipOf = (element) => element?.getAttribute?.("data-tip") || "";
const controlOf = (node) => (node instanceof Element ? node.closest("[data-tip]") : null);

function clearTimer() {
  if (timer) clearTimeout(timer);
  timer = 0;
}

function hide() {
  clearTimer();
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
  if (tip.visible) hiddenAt = performance.now();
  tip.visible = false;
  target = null;
}

// Measures the control and the bubble and places it; keeps doing so each frame while shown, so a control that moves
// or changes its text carries its bubble along. A control gone from the page or left without a text hides it.
function place() {
  frame = 0;
  const root = props.root;
  if (!target || !root || !target.isConnected || !root.contains(target)) return hide();
  const text = tipOf(target);
  if (!text) return hide();
  const split = splitTipKeys(text);
  tip.text = split.text;
  tip.keys = split.keys;
  const box = bubble.value;
  if (box) {
    const bounds = root.getBoundingClientRect();
    const anchor = target.getBoundingClientRect();
    const at = placeTip({ anchor, size: { width: box.offsetWidth, height: box.offsetHeight }, bounds, side: tipSide(target) });
    tip.left = at.left - bounds.left;
    tip.top = at.top - bounds.top;
    tip.side = at.side;
  }
  tip.visible = true;
  frame = requestAnimationFrame(place);
}

async function show(element) {
  clearTimer();
  target = element;
  // Write the text first so the bubble is measured at its size, then place it.
  const split = splitTipKeys(tipOf(element));
  tip.text = split.text;
  tip.keys = split.keys;
  await nextTick();
  if (target !== element) return;
  if (frame) cancelAnimationFrame(frame);
  place();
}

function wait(element) {
  clearTimer();
  target = element;
  if (tip.visible || performance.now() - hiddenAt < TIP_SKIP) {
    show(element);
    return;
  }
  timer = setTimeout(() => {
    timer = 0;
    if (target === element) show(element);
  }, TIP_DELAY);
}

function onOver(event) {
  const control = controlOf(event.target);
  if (control === target) return;
  if (!control) {
    if (target) hide();
    return;
  }
  if (pressed || event.buttons || control === pressedOn) {
    if (target) hide();
    return;
  }
  if (tip.visible) hiddenAt = performance.now();
  tip.visible = false;
  wait(control);
}

function onOut(event) {
  const from = controlOf(event.target);
  const to = controlOf(event.relatedTarget);
  if (from && from === pressedOn && to !== from) pressedOn = null;
  if (!target || from !== target || to === target) return;
  hide();
}

function onDown(event) {
  pressed = true;
  pressedOn = controlOf(event.target);
  hide();
}

function onUp() {
  pressed = false;
}

function onFocusIn(event) {
  const control = controlOf(event.target);
  if (!control || props.root?.dataset.input !== "keyboard") return;
  show(control);
}

function onFocusOut(event) {
  if (target && controlOf(event.target) === target && document.activeElement !== target) hide();
}

// A key hides the bubble, except the Tab that moves the focus to the next one (focusin shows that one).
function onKey(event) {
  if (event.key !== "Tab") hide();
}

const LISTENERS = [
  ["pointerover", onOver],
  ["pointerout", onOut],
  ["pointerdown", onDown, true],
  ["pointerup", onUp, true],
  ["pointercancel", onUp, true],
  ["wheel", hide, true],
  ["keydown", onKey, true],
  ["focusin", onFocusIn],
  ["focusout", onFocusOut],
];

function listen(root, on) {
  if (!root) return;
  for (const [type, fn, capture] of LISTENERS) (on ? root.addEventListener : root.removeEventListener).call(root, type, fn, capture === true);
}

watch(() => props.root, (root, old) => {
  listen(old, false);
  hide();
  listen(root, true);
}, { immediate: true });
// A press released outside the frame still ends the press.
window.addEventListener("pointerup", onUp, true);
onBeforeUnmount(() => {
  listen(props.root, false);
  window.removeEventListener("pointerup", onUp, true);
  hide();
});
</script>

<template>
  <div
    ref="bubble"
    class="pano-studio-tip"
    :class="{ 'is-shown': tip.visible }"
    :data-side="tip.side"
    data-tooltip
    role="tooltip"
    :aria-hidden="tip.visible ? null : 'true'"
    :style="{ left: `${tip.left}px`, top: `${tip.top}px` }"
  >{{ tip.text }}<kbd v-if="tip.keys" class="pano-studio-tip-keys">{{ tip.keys }}</kbd></div>
</template>
