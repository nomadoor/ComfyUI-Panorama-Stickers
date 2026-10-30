// The port Sticker's media in the new editor (docs/studio-ui.md "ノードの入力から来た物"): what the `sticker` input
// shows, from the node's current result (docs/studio-node.md "実行結果の `ui`"). Its picture at the playhead (the first
// frame, the editor MP4 following the playhead, or the PNGs of an RGBA IMAGE batch: pano_port_picture.js), the size of
// its first frame (a sky port Sticker's vFOV follows it), its media meta (the Timeline's Auto length, pano_port_media.js
// portMediaMeta) and its 3D media (pano_space.js sceneFilesOf of `pano_sticker_files`). A result from before the input
// was relinked shows nothing (current()).
import { mediaRevisionToken } from "../pano_media_session.js";
import { EXTERNAL_STICKER_PREVIEW_KEY, portMediaMeta } from "../pano_port_media.js";
import { createPortPicture } from "../pano_port_picture.js";
import { sceneFilesOf } from "../pano_space.js";

const loaded = (image) => !!image?.complete && Number(image.naturalWidth) > 0;

// uiList(key): a list of the node's result. source(entry): the URL of a `ui` file entry. current(): whether the result
// is the `sticker` input's as it is linked now (pano_preview_video.js isNodeOutputMediaCurrent "external-sticker").
// fps(): the Timeline fps; playing(): whether the playhead advances. onChange(): a picture loaded or changed.
export function createPortMedia({ uiList, source, current, fps, playing, onChange = () => {}, ImageCtor = globalThis.Image }) {
  const images = new Map();
  let closed = false;
  const changed = () => {
    if (!closed) onChange();
  };

  function image(src) {
    if (!src) return null;
    let img = images.get(src);
    if (!img) {
      img = new ImageCtor();
      img.onload = changed;
      img.onerror = changed;
      img.src = src;
      images.set(src, img);
    }
    return img;
  }

  // An image counts once it has loaded: until then a picture is none.
  const loadedImage = (src) => {
    const img = image(src);
    return loaded(img) ? img : null;
  };
  const portPicture = createPortPicture({
    image: loadedImage,
    mediaSource: source,
    revisionOf: mediaRevisionToken,
    fps,
    playing,
    onMedia: changed,
    label: "studio.port",
  });

  const firstImage = () => (current() ? image(source(uiList(EXTERNAL_STICKER_PREVIEW_KEY)[0] || null)) : null);

  return {
    // The picture of `sticker` at Timeline `frame` ({ media, revision, source }), or null: not the port Sticker, hidden
    // (a hidden Sticker is not drawn), no current result, or nothing loaded yet.
    picture(sticker, frame) {
      if (sticker?.source?.kind !== "port" || sticker.visible === false || !current()) return null;
      return portPicture.picture(uiList, sticker.clip, frame);
    },
    // The size of the input's first frame ({ width, height } px) once it has loaded, else null.
    size() {
      const img = firstImage();
      return loaded(img) ? { width: Number(img.naturalWidth), height: Number(img.naturalHeight) } : null;
    },
    // The input's media as the Timeline's Auto length counts it, or null.
    meta: () => (current() ? portMediaMeta(uiList) : null),
    // The input's 3D media (sceneFilesOf), or null.
    files: () => (current() ? sceneFilesOf(uiList("pano_sticker_files"), uiList("pano_sticker_meta"), source) : null),
    dispose() {
      closed = true;
      portPicture.dispose();
      for (const img of images.values()) {
        img.onload = null;
        img.onerror = null;
        img.removeAttribute?.("src");
      }
      images.clear();
    },
  };
}
