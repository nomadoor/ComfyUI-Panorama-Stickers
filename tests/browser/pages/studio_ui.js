// The new UI's primitives (web_src/components/studio/Studio*.vue) in dark and light, for
// tests/browser/studio_ui.spec.js: no console errors, the font loads, the styles hold, and the fields, sliders and
// dots send the events their docs promise. The page reports through window.__check and logs events in window.__events.
import { createApp } from "vue";
import StudioUiScene from "./StudioUiScene.vue";

const check = (window.__check = { done: false, error: null, fonts: null, textBox: null });
window.__events = [];

try {
  createApp(StudioUiScene, { onEvent: (event) => window.__events.push(event) }).mount("#app");
  const faces = ["500 12px", "600 12px", "700 12px"];
  await Promise.all(faces.map((face) => document.fonts.load(`${face} "Plus Jakarta Sans"`)));
  await document.fonts.ready;
  const width = (weight) => {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = `${weight} 40px "Plus Jakarta Sans"`;
    return ctx.measureText("Position 1.20 Opacity").width;
  };
  check.fonts = {
    loaded: faces.map((face) => document.fonts.check(`${face} "Plus Jakarta Sans"`)),
    width500: width(500),
    width700: width(700),
  };
  check.textBox = CSS.supports("text-box", "trim-both cap alphabetic");
} catch (error) {
  check.error = String(error?.stack || error);
}
check.done = true;
