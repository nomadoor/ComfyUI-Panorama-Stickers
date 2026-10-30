// The picture a node's IMAGE input shows in the new UI (the Studio editor's background, the Preview window's IMAGE),
// read as docs/adr/0003-external-input-sticker-failure-boundaries.md (Amendment 2026-03-11) has it: the node's own
// run result first (`pano_input_images`, the picture its run got, saved as a temp file; the only place an IMAGE made
// by another node is), then the file its linked input loads directly (pano_comfy_media.js, before a run), also when
// the result's picture does not load. The result is read only while it is current for the input
// (pano_preview_video.js isNodeOutputMediaCurrent).
import { isNodeOutputMediaCurrent } from "../pano_preview_video.js";

// The key of the node's own result that has the picture its input got (node_runtime.py PREVIEW_UI_KEYS "image").
export const NODE_INPUT_IMAGE_KEY = "pano_input_images";

const loaded = (image) => !!image?.complete && image.naturalWidth > 0;

// media: pano_comfy_media.js createComfyMediaAdapter's; inputs: the input names, the first linked one read; channel:
// the isNodeOutputMediaCurrent channel of those inputs; cacheKey: the linked image's cache key; onChange(): the
// picture settled. Returns { image(), state() }: state() is "none" (nothing to show), "loading", "ready" or "failed".
export function loadNodeInputImage({ media, node, inputs, channel, cacheKey, onChange = () => {}, current = isNodeOutputMediaCurrent }) {
  let image = null;
  let status = "none";
  const settleWith = (settled) => {
    if (settled !== image) return;
    status = loaded(settled) ? "ready" : "failed";
    onChange();
  };
  const linked = () => (media.resolvePreferredExactLinkedSource(node, inputs).src
    ? media.loadPreferredExactLinkedImage(node, inputs, settleWith, cacheKey)
    : null);
  const own = current(node, channel)
    ? media.uiImage(node, NODE_INPUT_IMAGE_KEY, new Map(), (settled) => {
      if (settled !== image) return;
      if (loaded(settled)) {
        status = "ready";
      } else {
        image = linked();
        status = image ? (loaded(image) ? "ready" : "loading") : "failed";
      }
      onChange();
    })
    : null;
  image = own ?? linked();
  // A cached image may have loaded already.
  if (image) status = loaded(image) ? "ready" : "loading";
  return { image: () => image, state: () => status };
}
