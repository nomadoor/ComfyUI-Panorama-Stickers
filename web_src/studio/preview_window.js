// The new Preview window (docs/studio-ui.md "Preview のウィンドウ", ADR 0044): the Panorama Preview node's source shown
// read-only on the new editor's stage (stage.js), filling the window. First slice: an IMAGE source only; a VIDEO or a
// PANO_SCENE source still opens the old window (web_src/editor_choice.js previewUsesNewWindow). Nothing is written to
// the node. The Vue shell is StudioPreviewWindow.vue.
import { createApp, reactive } from "vue";
import StudioPreviewWindow from "../components/studio/StudioPreviewWindow.vue";
import { createComfyMediaAdapter } from "../pano_comfy_media.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { guardEditorKeys } from "./key_guard.js";
import { createStage, stageUi } from "./stage.js";
import { installStudioStylesheet } from "./stylesheet.js";
import { openingView } from "./view_camera.js";

// The Preview node's input that carries what it shows.
const SOURCE_INPUTS = ["source"];
// The ground height of a Preview: the editor's default (docs/space-and-view.md "目の高さ").
const PREVIEW_GROUND = -1.6;

const openNodes = new WeakSet();
const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// Opens the window for `node` (app, api: ComfyUI's). Returns { close, stage }, or null when it is open already.
export async function openPreviewWindow(node, { app = null, api = null } = {}) {
  if (!node || openNodes.has(node)) return null;
  openNodes.add(node);
  try {
    await installStudioStylesheet();
  } catch (error) {
    openNodes.delete(node);
    throw error;
  }
  const media = createComfyMediaAdapter({ app, api });
  let stage = null;
  let closed = false;
  let releaseKeyGuard = () => {};
  const ui = reactive({ ...stageUi(), fullscreen: false });

  let image = null;
  let status = "none";
  if (media.resolvePreferredExactLinkedSource(node, SOURCE_INPUTS).src) {
    image = media.loadPreferredExactLinkedImage(node, SOURCE_INPUTS, (settled) => {
      status = loaded(settled) ? "ready" : "failed";
      stage?.redraw(DRAW_REASON.MEDIA);
    }, `preview-window:${SOURCE_INPUTS.join("|")}`);
    if (image) status = loaded(image) ? "ready" : "loading";
  }
  const coverage = normalizeCoverageValue(undefined);
  const background = () => (status === "ready" ? { media: image, revision: image.currentSrc || image.src, coverage } : null);

  const output = { position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0 };
  const world = { ground: PREVIEW_GROUND, camera: null };
  const mountHost = document.createElement("div");
  document.body.appendChild(mountHost);

  const close = () => {
    if (closed) return;
    closed = true;
    releaseKeyGuard();
    stage?.dispose();
    vueApp.unmount();
    mountHost.remove();
    openNodes.delete(node);
    if (document.fullscreenElement) document.exitFullscreen?.().catch?.(() => {});
  };
  const controller = {
    onStage: ({ canvas, root }) => {
      releaseKeyGuard = guardEditorKeys(root);
      const opening = openingView({ output, world: { ...world, boxes: [], content: null }, frameAvailable: false });
      stage = createStage({ canvas, root, opening, output, world, background, content: () => null, ui, onEscape: () => close() });
      return stage;
    },
    close: () => close(),
    resetView: () => stage?.resetView(),
    grid: (shown) => {
      ui.gridHidden = !shown;
      stage?.redraw();
    },
    fullscreen: (root) => {
      if (document.fullscreenElement) document.exitFullscreen?.();
      else root?.requestFullscreen?.();
    },
  };
  const vueApp = createApp(StudioPreviewWindow, { nodeTitle: String(node.title || "Panorama Preview"), ui, controller });
  vueApp.mount(mountHost);
  return { close, stage: () => stage };
}
