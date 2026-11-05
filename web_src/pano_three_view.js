// three.js view of the editor. Vite emits this module, three.js (with its GLTFLoader) and the `scene`
// item loading as a chunk in web/.lazy/, which ComfyUI does not load as an extension, and
// pano_editor_view.js imports it when an editor opens. Spark is a chunk of its own, imported when a
// SPLAT first loads. Keep it free of modules the eager bundle also uses, so the chunk holds only these
// libraries and these files instead of importing back from panorama_suite.js; pano_editor_view.js and
// pano_space.js do the math.
//
// Every render sets the scene up from the given layers. Only GPU resources (meshes, materials, textures,
// the loaded `scene` items and the World's objects) are reused between renders; nothing here is saved.
// The parts of the view live in three_view/ (the shaders, the Sky's meshes, the lens pass, the GPU pick, the gizmo),
// inside the same chunk; this module builds the World, owns the layer textures and puts the parts together.
import {
  AmbientLight,
  AxesHelper,
  Box2,
  ClampToEdgeWrapping,
  Color,
  DirectionalLight,
  DoubleSide,
  GridHelper,
  Group,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  NoColorSpace,
  SRGBColorSpace,
  Scene,
  SphereGeometry,
  Texture,
  Vector2,
  Vector4,
  VideoTexture,
  WebGLRenderer,
} from "three";
import { COARSE_GRID_IDLE_TIMEOUT_MS, coarseGridKey, createCoarseGridBuilds } from "./pano_coarse_grid.js";
import { createSceneItems } from "./pano_scene_items.js";
import { disposeObject, disposeSceneItem, loadSceneItem, loadSpark, poseAnimation } from "./pano_scene_loaders.js";
import { createSparkViews } from "./pano_spark_views.js";
import { createGroundGrid } from "./pano_ground_grid.js";
import { createLiveErp } from "./pano_live_erp.js";
import {
  LENS_PATCH_FRAGMENT,
  LENS_PATCH_VERTEX,
  STICKER_VERTEX,
  WORLD_STICKER_FRAGMENT,
} from "./three_view/shaders.js";
import { applyViewportCamera, devicePoint, setCamera, setView } from "./three_view/camera.js";
import { createLines, createMaterial, pooled } from "./three_view/meshes.js";
import { createPlainValue, sameValue } from "./three_view/values.js";
import { createLensPass } from "./three_view/lens_pass.js";
import { createPicker, pickPass } from "./three_view/picker.js";
import { createGizmo } from "./three_view/gizmo.js";
import { createSkyMeshes, placeSticker, unwrapStickerUniforms } from "./three_view/sky.js";

export { applyViewportCamera, createGizmo, pickPass, placeSticker, sameValue, unwrapStickerUniforms };

// The lights of the World pass (docs/render-contract.md "既定の照明", which owns the values; Python's
// mesh_render.py has the same, both checked against tests/fixtures/default_lighting.json). No shadows.
const light = (type, intensity, position = null) => Object.freeze({
  type,
  color: Object.freeze([1, 1, 1]),
  intensity,
  ...(position ? { position: Object.freeze(position) } : {}),
});
export const DEFAULT_LIGHTS = Object.freeze([
  light("ambient", 1.5),
  light("directional", 2.4, [0, 10, 10]),
  light("directional", 1.5, [0, 10, -10]),
  light("directional", 0.9, [-10, 0, 0]),
  light("directional", 0.9, [10, 0, 0]),
  light("directional", 0.6, [0, -10, 0]),
]);

// The default lights in a group the World holds as it is, apart from the `scene` and Sticker transforms: each
// directional light shines from its position toward the World origin, where its target is. They fall only on
// the MeshStandardMaterial of a lit GLB; MeshBasicMaterial and Spark do not see them.
export function createDefaultLights(lights = DEFAULT_LIGHTS) {
  const group = new Group();
  for (const { type, color, intensity, position } of lights) {
    const rgb = new Color(...color);
    if (type === "ambient") {
      group.add(new AmbientLight(rgb, intensity));
      continue;
    }
    const directional = new DirectionalLight(rgb, intensity);
    directional.position.set(...position);
    directional.target.position.set(0, 0, 0);
    group.add(directional, directional.target);
  }
  return group;
}

// What the 3D Sticker queue (createSceneItems requestMany) is asked for in one render of a space input: `drawn`,
// the requests of the port Sticker's item and the 3D file Stickers' items shown at this frame, and `inputs`, those
// with a keep-only input of every key whose item stays loaded (stickerUrls, fileStickerKeys), so a 3D Sticker hidden
// or outside its Clip range keeps its item and shows it again without loading.
export function stickerItemInputs(space) {
  const drawn = [...(space.sticker ? [space.sticker] : []), ...(space.fileStickers ?? [])];
  return { drawn, inputs: [...drawn, { urls: [...(space.stickerUrls ?? []), ...(space.fileStickerKeys ?? [])] }] };
}

const ORIGIN_COLOR = 0xffdd57;

// The size of a media element: the chunk's copy of pano_editor_view.js mediaSize, held equal by tests/chunk_copies.test.mjs.
export function mediaSize(media) {
  return {
    width: Number(media.videoWidth || media.naturalWidth || media.width || 0),
    height: Number(media.videoHeight || media.naturalHeight || media.height || 0),
  };
}

// Textures are premultiplied on upload and sampled without mipmaps, like the previous WebGL
// renderer, so the blend below composites them the same way. A plain Texture sizes its storage from
// width/height, which a <video> leaves at 0, so a VIDEO takes a VideoTexture. A VideoTexture uploads
// each frame the video presents by itself, so a layer's revision does not decide when it updates.
function createTexture(media, flipY) {
  const texture = media instanceof HTMLVideoElement ? new VideoTexture(media) : new Texture(media);
  texture.premultiplyAlpha = true;
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.wrapT = ClampToEdgeWrapping;
  texture.flipY = flipY;
  texture.needsUpdate = true;
  return texture;
}

// Uploads only `rects` (pano_paint_damage.js rectangles, in the picture's pixels) of a layer texture's canvas
// again, through WebGLRenderer.copyTextureToTexture: for a source texture three has not uploaded, it calls
// texSubImage2D(TEXTURE_2D, 0, x, y, width, height, format, type, canvas) with UNPACK_ROW_LENGTH at the
// canvas's width and UNPACK_SKIP_PIXELS / UNPACK_SKIP_ROWS at the rectangle (three r184
// src/renderers/WebGLRenderer.js `copyTextureToTexture`), and the unpack flags of the destination texture. So
// the rectangles get the very pixels a whole upload gives them. The source is a texture of the same canvas
// that is never uploaded itself. Returns false where a whole upload is needed instead: a texture three has not
// uploaded yet, a VIDEO, a flipped or color-converted one, or a canvas larger than the GPU's textures (which
// three uploads resized). Leaves the unpack flags off afterwards, as each draw does (settleUnpack).
const regionSources = new WeakMap();
const regionBox = new Box2();
const regionAt = new Vector2();
function uploadTextureRegions(renderer, texture, rects) {
  const media = texture.image;
  const max = renderer.capabilities.maxTextureSize;
  if (texture.isVideoTexture || texture.flipY || texture.colorSpace !== NoColorSpace || texture.version === 0) return false;
  if (!renderer.properties.has(texture) || !(media?.width <= max && media?.height <= max)) return false;
  let source = regionSources.get(texture);
  if (source?.image !== media) regionSources.set(texture, source = new Texture(media));
  const gl = renderer.getContext();
  // What three's whole upload of a NoColorSpace texture sets (WebGLTextures.js uploadTexture).
  renderer.state.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.NONE);
  for (const rect of rects) {
    regionBox.min.set(rect.x0, rect.y0);
    regionBox.max.set(rect.x1, rect.y1);
    renderer.copyTextureToTexture(source, texture, regionBox, regionAt.set(rect.x0, rect.y0));
  }
  renderer.state.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
  renderer.state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  return true;
}

// The texture of a depth grid's colors (the proxy's picture, pano_depth_color.js): sRGB, linear, clamped, without
// mips, as the GLBs' sampler (docs/render-contract.md "テクスチャの標本化"). Never flipped (the shader reads the
// picture's top row at v 0): three.js cannot flip an ImageBitmap, so a flip would turn a bitmap's colors upside down
// against a VIDEO's or a canvas's.
function depthColorTexture(media) {
  const texture = media instanceof HTMLVideoElement ? new VideoTexture(media) : new Texture(media);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.generateMipmaps = false;
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;
  texture.flipY = false;
  texture.needsUpdate = true;
  return texture;
}

// The color textures of the depth grids: one per input (`slot`: the `scene`, a 3D Sticker, an upstream layer's) and
// picture, which every item of that input draws with, made by make(media). Each owner of the view (the editor's stage
// and Output window, each node surface on the shared view) holds its own slots: texture(owner, slot, { media, revision })
// gives the texture of the owner's slot for its picture, uploaded again for a new revision; another picture (the
// playing VIDEO in place of the still) or another size moves the owner to that picture's texture. Owners showing the
// same picture under the same slot (the editor's stage and Output window) share one texture; owners with different
// pictures under the same slot name (two Studio nodes' `scene`) have one each, so drawing them in turn makes nothing
// again. retain(owner, slots) lets go of the owner's other slots, release(owner) of all of its; a texture no owner
// holds is freed. They are not counted against SCENE_ITEM_BUDGET: one picture per input.
export function createDepthColorTextures(make) {
  // slot -> the entries of that slot ({ slot, media, revision, texture, width, height, owners })
  const bySlot = new Map();
  // owner -> slot -> the entry it holds
  const held = new Map();

  function drop(owner, slot) {
    const slots = held.get(owner);
    const entry = slots?.get(slot);
    if (!entry) return;
    slots.delete(slot);
    if (!slots.size) held.delete(owner);
    entry.owners.delete(owner);
    if (entry.owners.size) return;
    entry.texture.dispose();
    const list = bySlot.get(slot).filter((item) => item !== entry);
    if (list.length) bySlot.set(slot, list);
    else bySlot.delete(slot);
  }

  return {
    texture(owner, slot, { media, revision }) {
      const size = mediaSize(media);
      const fits = (entry) => entry.media === media && entry.width === size.width && entry.height === size.height;
      const current = held.get(owner)?.get(slot);
      let entry = current && fits(current) ? current : (bySlot.get(slot) ?? []).find(fits);
      if (current && current !== entry) drop(owner, slot);
      if (!entry) {
        entry = { slot, media, revision, texture: make(media), ...size, owners: new Set() };
        bySlot.set(slot, [...(bySlot.get(slot) ?? []), entry]);
      } else if (entry.revision !== revision) {
        entry.revision = revision;
        entry.texture.needsUpdate = true;
      }
      entry.owners.add(owner);
      if (!held.has(owner)) held.set(owner, new Map());
      held.get(owner).set(slot, entry);
      return entry.texture;
    },
    retain(owner, keep) {
      for (const slot of [...(held.get(owner)?.keys() ?? [])]) if (!keep.includes(slot)) drop(owner, slot);
    },
    release(owner) {
      this.retain(owner, []);
    },
    get size() {
      let count = 0;
      bySlot.forEach((list) => {
        count += list.length;
      });
      return count;
    },
    dispose() {
      bySlot.forEach((list) => list.forEach((entry) => entry.texture.dispose()));
      bySlot.clear();
      held.clear();
    },
  };
}

function hasVideo(media) {
  return typeof HTMLVideoElement !== "undefined" && media instanceof HTMLVideoElement;
}

// A <video> has a picture to upload from HAVE_CURRENT_DATA on; before that (loading, seeking) its
// upload is empty.
function hasContent(media) {
  const size = mediaSize(media);
  if (!(size.width > 0 && size.height > 0)) return false;
  return !(media instanceof HTMLVideoElement) || media.readyState >= HTMLVideoElement.HAVE_CURRENT_DATA;
}

// The layer textures of one view, which its owners share: one texture per media, flipY and wrapS however
// many owners draw it, so the editor's stage and its camera preview upload one 1080p background, and a
// playing VIDEO has one VideoTexture. They are one WebGL context's, so any owner can draw with them.
// `source` names what the media shows (a VIDEO's URL for the VIDEO, its stills and its first frame; the
// media itself by default). A layer whose media changes within its source keeps the texture of its owner's
// draw before until the new media has a picture, so a VIDEO that is loading or seeking never shows an empty
// upload in place of the frame before. Another source never shows the picture of the one before: a media
// that shows another source, or changes size, gets a new texture, and the one before stays for the owners
// that drew it until they move on. Each draw marks the textures its owner uses; a texture no owner uses any
// more is disposed.
//
// A layer whose revision changes is uploaded again: only where it changed when the layer says where
// (`changed(revision)` gives the rectangles changed since the revision before, pano_paint_damage.js) and
// uploadRegions(texture, rects) can upload them (uploadTextureRegions), whole otherwise.
//
// draw(owner) starts a draw of owner: { drawable(layer), texture(layer, wrapS, flipY), end() }. A 360 ERP
// wraps around horizontally; a 180 ERP and a Sticker clamp at their edges. release(owner) drops the marks
// of an owner that stops drawing.
export function createLayerTextures({ uploadRegions = null } = {}) {
  // media -> "flipY:wrapS" -> the current { texture, media, key, source, revision, width, height, users }
  const entries = new Map();
  // Every entry whose texture is held: the current ones and those replaced while an owner still draws them.
  const held = new Set();
  // owner -> layer id -> the entry its last draw used
  const shown = new Map();

  function forget(entry) {
    entry.texture.dispose();
    held.delete(entry);
    const byKey = entries.get(entry.media);
    if (byKey?.get(entry.key) !== entry) return;
    byKey.delete(entry.key);
    if (!byKey.size) entries.delete(entry.media);
  }

  function unuse(entry, owner) {
    entry.users.delete(owner);
    if (!entry.users.size) forget(entry);
  }

  function texture(previous, used, { id, media, revision, changed, source: named }, wrapS, flipY) {
    const source = named ?? media;
    const size = mediaSize(media);
    const before = previous.get(id);
    if (before?.source === source && before.media !== media && !hasContent(media)) {
      used.set(id, before);
      return before.texture;
    }
    let byKey = entries.get(media);
    if (!byKey) entries.set(media, byKey = new Map());
    const key = `${flipY}:${wrapS}`;
    let entry = byKey.get(key);
    // A layer that moves to another canvas of the same size and says where it changed (a paint group's
    // display going to the canvas with the live stroke and back) keeps its texture, uploaded only there.
    if (!entry && uploadRegions && changed && before && before.key === key && before.media !== media
      && byKey.size === 0 && before.width === size.width && before.height === size.height && !hasVideo(before.media)) {
      const rects = changed(before.revision);
      if (rects) {
        const beforeKeys = entries.get(before.media);
        if (beforeKeys?.get(key) === before) {
          beforeKeys.delete(key);
          if (!beforeKeys.size) entries.delete(before.media);
        }
        before.media = media;
        before.source = source;
        before.texture.image = media;
        byKey.set(key, before);
        before.revision = revision;
        if (rects.length && !uploadRegions(before.texture, rects)) before.texture.needsUpdate = true;
        used.set(id, before);
        return before.texture;
      }
    }
    if (entry && (entry.source !== source || entry.width !== size.width || entry.height !== size.height)) {
      byKey.delete(key);
      if (!entry.users.size) forget(entry);
      entry = null;
    }
    if (!entry) {
      const created = createTexture(media, flipY);
      created.wrapS = wrapS;
      entry = { texture: created, media, key, source, revision, ...size, users: new Set() };
      byKey.set(key, entry);
      held.add(entry);
    } else if (entry.revision !== revision) {
      const rects = uploadRegions && changed ? changed(entry.revision) : null;
      entry.revision = revision;
      if (!rects || (rects.length && !uploadRegions(entry.texture, rects))) entry.texture.needsUpdate = true;
    }
    used.set(id, entry);
    return entry.texture;
  }

  return {
    draw(owner) {
      const previous = shown.get(owner) ?? new Map();
      const used = new Map();
      return {
        // The owner drawing (the depth grids' color textures are held by it too).
        owner,
        // Whether a layer draws: once its media has a picture, or with the texture its source had in the
        // owner's draw before while the new media has none.
        drawable: ({ id, media, source }) => hasContent(media) || previous.get(id)?.source === (source ?? media),
        texture: (layer, wrapS, flipY) => texture(previous, used, layer, wrapS, flipY),
        end() {
          const kept = new Set(used.values());
          kept.forEach((entry) => entry.users.add(owner));
          previous.forEach((entry) => {
            if (!kept.has(entry) && entry.users.has(owner)) unuse(entry, owner);
          });
          shown.set(owner, used);
        },
      };
    },
    release(owner) {
      shown.get(owner)?.forEach((entry) => {
        if (entry.users.has(owner)) unuse(entry, owner);
      });
      shown.delete(owner);
    },
    // How many textures it holds (the diagnostics' layerTextures).
    get size() {
      return held.size;
    },
    dispose() {
      held.forEach((entry) => entry.texture.dispose());
      held.clear();
      entries.clear();
      shown.clear();
    },
  };
}

// width x height in device pixels, kept to what the GPU can draw to (maxSide, the smaller of
// MAX_RENDERBUFFER_SIZE and MAX_TEXTURE_SIZE): a larger size is scaled down evenly. Nothing else limits it.
export function fitRenderSize(width, height, maxSide) {
  const scale = Math.min(1, maxSide / Math.max(width, height, 1));
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

// Where a view drawn into rect ({ x, y, w, h } in canvas pixels from the top left, which may reach past
// the canvas) shows on a canvasWidth x canvasHeight canvas: { x, y, width, height } of the canvas in
// whole pixels, and offsetX, offsetY of that part in the whole view (three.js setViewOffset), or null when
// none of it shows. Only the part on the canvas is drawn, at the canvas's own pixels.
export function visibleWindow(rect, canvasWidth, canvasHeight) {
  const x0 = Math.max(0, Math.round(rect.x));
  const y0 = Math.max(0, Math.round(rect.y));
  const x1 = Math.min(canvasWidth, Math.round(rect.x + rect.w));
  const y1 = Math.min(canvasHeight, Math.round(rect.y + rect.h));
  if (x1 <= x0 || y1 <= y0) return null;
  return { x: x0, y: y0, width: x1 - x0, height: y1 - y0, offsetX: x0 - rect.x, offsetY: y0 - rect.y };
}

// Puts children in parent in this order, unless it holds them so already. Returns whether it changed.
export function setChildren(parent, children) {
  if (parent.children.length === children.length && children.every((child, index) => parent.children[index] === child)) return false;
  parent.clear();
  if (children.length) parent.add(...children);
  return true;
}

// The line objects of `sets` ([{ segments, color }], createLines) kept in cache ({ sets, lines }): made
// again only when the sets change, and the ones before are freed then.
export function cachedLines(cache, sets) {
  if (sameValue(cache.sets, sets)) return cache.lines;
  cache.lines.forEach((line) => disposeObject(line));
  cache.sets = sets;
  cache.lines = sets.map(createLines);
  return cache.lines;
}

// onUpdate runs when something every view draws changes by itself: a `scene` item finished loading, or Spark
// loaded. onSplats(owner) runs when the Spark renderer of owner's view (pano_spark_views.js) has new splats or
// a new order to draw: only that view draws again. createCanvas makes the view's canvas
// (pano_diagnostics.js createPanoCanvas; the chunk does not import from the eager bundle). ownWorlds: each owner draws a
// World of its own (the nodes' shared view, pano_preview_view.js: each node its own inputs), so each holds its own
// `scene` and 3D Sticker items; without, every owner draws the one World (the editor's stage and its windows).
// Loads of `scene` items running at once; scrubbing a MoGe VIDEO queues the rest.
const SCENE_LOADS = 2;

export function createThreeView({ onUpdate = () => {}, onSplats = () => {}, createCanvas, ownWorlds = false }) {
  const canvas = createCanvas();
  // The World is depth tested, so the canvas has a depth buffer; the Sky draws without it.
  // three leaves the context's unpack state at its last texture upload (premultiplied Sky layers), and Spark
  // later uploads its sort order (an RGBA32UI texture from a Uint32Array) with raw texSubImage2D outside any
  // render, resetting only UNPACK_FLIP_Y. Chrome crashes the tab (STATUS_BREAKPOINT) on an integer upload
  // with UNPACK_PREMULTIPLY_ALPHA set, so each draw leaves both unpack flags off, through three's state so
  // its cache stays true.
  function settleUnpack() {
    const gl = renderer.getContext();
    renderer.state.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    renderer.state.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
  }

  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: true,
    stencil: false,
  });
  renderer.setClearColor(0x000000, 0);
  // The largest side the GPU draws to: the canvas and every texture stay within it.
  const gl = renderer.getContext();
  const maxSide = Math.min(renderer.capabilities.maxTextureSize, gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
  const camera = new PerspectiveCamera(60, 1, 0.1, 100000);
  const scene = new Scene();
  // The World draws over the Sky in a second pass, from the view's position.
  const worldCamera = new PerspectiveCamera();
  const world = new Scene();
  const worldStickers = [];
  const createWorldSticker = () => {
    const material = createMaterial(STICKER_VERTEX, WORLD_STICKER_FRAGMENT, { crop: { value: new Vector4() } });
    material.side = DoubleSide;
    material.depthTest = true;
    material.depthWrite = true;
    return new Mesh(planeGeometry, material);
  };
  let guides = null;
  // The new UI's ground grid (pano_ground_grid.js), made the first time a space asks for it.
  let groundGrid = null;
  // The default lights, always in the World (they change nothing that is not lit).
  const lights = createDefaultLights();
  const lines = { sets: null, lines: [] };
  // The `scene` and 3D Sticker items' groups (by item object), kept while the item is drawn.
  const contentGroups = new WeakMap();
  // The World content the last space render drew, which pick() hits, not the guides: pickable are
  // pickPass() entries of what is hit on its triangles, pickBoxes the SPLATs, hit on their boxes
  // ({ object, box, stickerId }). contentParts are what they are and where, and contentRevision counts
  // their changes.
  let pickable = [];
  let pickBoxes = [];
  let contentParts = [];
  let contentRevision = 0;
  // The GPU picks of the World content the last space render drew (createPicker).
  const picker = createPicker({
    renderer,
    world,
    content: {
      get pickable() {
        return pickable;
      },
      get pickBoxes() {
        return pickBoxes;
      },
      get revision() {
        return contentRevision;
      },
    },
  });
  const { pick, pickSurface, pickSticker } = picker;
  // Spark's module once it has loaded (when a SPLAT first shows), and per view that draws SPLATs a renderer
  // and SplatMeshes that see only that view's camera.
  let Spark = null;
  // The live ERPs of Panorama mode (pano_live_erp.js), by owner: { erp, canvas, key } (renderLiveErp).
  const liveErps = new Map();
  // The camera a live ERP face draws the Sky with: at the center, turned as the face.
  const liveErpSkyCamera = new PerspectiveCamera(90, 1, 0.1, 100000);
  liveErpSkyCamera.matrixAutoUpdate = false;
  liveErpSkyCamera.matrixWorldAutoUpdate = false;
  const sparkViews = createSparkViews({
    // The editor does not page or LoD its SPLATs, so Spark's LoD worker is not started.
    create: (onDirty) => new Spark.SparkRenderer({ renderer, onDirty, enableLod: false }),
    // A SplatMesh made on loaded PackedSplats sets their encoding (to the default without one given); the
    // loaded encoding is put back.
    cloneSplat: (loaded) => {
      const { packedSplats } = loaded;
      const encoding = packedSplats.splatEncoding;
      const mesh = new Spark.SplatMesh({ packedSplats, raycastable: false });
      packedSplats.splatEncoding = encoding;
      return mesh;
    },
    // A lens face's renderer draws for the view it is a face of, and its face is drawn again (createLensPass
    // sortedAgain); only the view that draws again is told.
    onDirty: (owner) => {
      // A live ERP's radial sort ended: its faces draw again with the new order.
      liveErps.get(owner)?.erp.invalidate("splats");
      onSplats(lensPass.sortedAgain(owner));
    },
  });

  // A loaded SPLAT that goes takes the views' SplatMeshes of it along.
  const disposeItem = (item) => {
    if (item.kind === "splat" && item.object) sparkViews.forget(item.object);
    disposeSceneItem(item);
  };
  // The colors of the depth grids: one texture per input, which its items draw with.
  const depthColors = createDepthColorTextures(depthColorTexture);
  // The GPU's largest texture side: a depth grid larger than it does not load.
  const loadItem = (kind, url, signal, options) => loadSceneItem(kind, url, signal, { ...options, maxTextureSize: renderer.capabilities.maxTextureSize });
  let closed = false;
  // The selected world Sticker's gizmo (createGizmo), made the first time one shows.
  let gizmo = null;
  const createItems = () => createSceneItems({ load: loadItem, dispose: disposeItem, onUpdate, concurrency: SCENE_LOADS });
  // The loaded 3D items of a World: `scene`'s, the `sticker` input's 3D media (loaded the same way; an item loads there
  // even when `scene` has the same file, since an object has one parent), and the upstream Scene's layers' by slot (a
  // layer and its `scene` or 3D Sticker; a slot no render asks for any more is closed). A render asks for all the items
  // its World draws and lets go of the others (pano_scene_items.js requestMany, retain), so two Worlds drawn through
  // one queue would drop each other's items at every render, and neither would ever show them: a World has its own.
  function createWorldItems() {
    const upstream = new Map();
    return {
      scene: createItems(),
      sticker: createItems(),
      upstream,
      upstreamOf(slot) {
        let items = upstream.get(slot);
        if (!items) upstream.set(slot, items = createItems());
        return items;
      },
      all() {
        return [this.scene, this.sticker, ...upstream.values()];
      },
      close() {
        this.all().forEach((items) => items.close());
        upstream.clear();
      },
    };
  }
  // The items of each World by its owner (ownWorlds), or of the one World under undefined.
  const worlds = new Map();
  const worldKey = (owner) => (ownWorlds ? owner : undefined);
  function worldItems(owner) {
    let items = worlds.get(worldKey(owner));
    if (!items) worlds.set(worldKey(owner), items = createWorldItems());
    return items;
  }
  // The item queues of owner's World, none before it draws.
  const worldQueues = (owner) => worlds.get(worldKey(owner))?.all() ?? [];
  const allItems = () => [...worlds.values()].flatMap((items) => items.all());
  // The hit grids of the World 3D Stickers (the 3D file Stickers' and the port Sticker's items; sceneGrid), built
  // in idle time once per input (coarseGridKey: a batch shares one) from its first item drawn, and the key of each
  // item key's grid.
  const gridKeys = new Map();
  const coarseGrids = createCoarseGridBuilds({
    schedule: (run) => (typeof requestIdleCallback === "function"
      ? requestIdleCallback(run, { timeout: COARSE_GRID_IDLE_TIMEOUT_MS })
      : setTimeout(run, 0)),
    now: () => performance.now(),
  });
  const sky = createSkyMeshes({ scene });
  const { domeGeometry, planeGeometry, quadGeometry, panorama, unwrap, fillSky } = sky;
  // Per owner: the size it last rendered at. Surfaces that share this view (the on-node Previews, the
  // Cutout camera preview) pass their own owner, so the canvas keeps the largest size in use instead of
  // resizing per owner. The layer textures are the view's (createLayerTextures): rendering one owner does
  // not drop the textures of the others, and owners that show the same media share its texture.
  const owners = new Map();
  const layerTextures = createLayerTextures({ uploadRegions: (texture, rects) => uploadTextureRegions(renderer, texture, rects) });
  renderer.setScissorTest(true);

  // The grid, axes and origin marker for a gridSpec(); rebuilt when the spacing changes.
  function guideGroup(grid) {
    if (guides?.step === grid.step) return guides.group;
    if (guides) disposeObject(guides.group);
    const group = new Group();
    group.add(new GridHelper(grid.size, grid.divisions, 0x52525b, 0x3f3f46));
    group.add(new AxesHelper(grid.step * 2));
    const origin = new Mesh(new SphereGeometry(1, 16, 8), new MeshBasicMaterial({ color: ORIGIN_COLOR }));
    origin.scale.setScalar(grid.step * 0.12);
    group.add(origin);
    guides = { step: grid.step, group };
    return group;
  }

  // The item of `items` for input (a `scene` or 3D Sticker request), or the one shown before while it
  // loads (an item of the same input), in a group with the input's transform. `item` is what
  // items.request(input) gave, when the caller asked for several inputs at once.
  function contentGroup(items, input, item) {
    const { transform, itemQuaternion } = input;
    if (!item) return null;
    item.object.quaternion.set(itemQuaternion.x, itemQuaternion.y, itemQuaternion.z, itemQuaternion.w);
    let group = contentGroups.get(item.object);
    if (!group) {
      group = new Group();
      group.add(item.object);
      contentGroups.set(item.object, group);
    }
    group.position.set(...transform.position);
    group.quaternion.set(transform.quaternion.x, transform.quaternion.y, transform.quaternion.z, transform.quaternion.w);
    group.scale.setScalar(transform.scale);
    // A 3D Sticker is picked as that Sticker.
    // A depth grid draws with the colors its queue asked for at the item drawn (pano_scene_items.js pick).
    return { group, splat: item.kind === "splat", depthGrid: item.kind === "depth_grid", color: items.colorOf(input), object: item.object, box: item.box, transform, stickerId: input.id ?? null };
  }

  // A 3D Sticker's opacity: a SPLAT's own, a GLB's on its unlit materials. A see-through GLB does not
  // write depth, so its faces behind show through it instead of hiding.
  function setContentOpacity(content, opacity) {
    if (content.splat) {
      content.object.opacity = opacity;
      return;
    }
    content.object.traverse((object) => {
      for (const material of object.isMesh ? [object.material].flat() : []) {
        material.opacity = opacity;
        material.transparent = opacity < 1;
        material.depthWrite = opacity >= 1;
      }
    });
  }


  // A world Sticker with a lens (ADR 0042): its sphere patch (LENS_PATCH_FRAGMENT) at its lens's center
  // (pano_space.js lensPatch: center, radius and the image's half extents), picked with a pick material of its own
  // shape.
  const worldLensStickers = [];
  const lensPatchGeometry = new SphereGeometry(1, 192, 96);
  const createWorldLensSticker = () => {
    const material = createMaterial(LENS_PATCH_VERTEX, LENS_PATCH_FRAGMENT, { crop: { value: new Vector4() }, curve: { value: 1 }, patchHalf: { value: new Vector2(1, 1) } });
    material.side = DoubleSide;
    material.depthTest = true;
    material.depthWrite = true;
    const mesh = new Mesh(lensPatchGeometry, material);
    mesh.userData.lensPatch = true;
    return mesh;
  };

  function addWorldLensSticker(owned, mesh, layer) {
    const { uniforms } = mesh.material;
    uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    uniforms.opacity.value = layer.opacity;
    uniforms.crop.value.set(layer.crop.x0, 1 - layer.crop.y1, layer.crop.x1, 1 - layer.crop.y0);
    uniforms.curve.value = layer.patch.curve;
    uniforms.patchHalf.value.set(layer.patch.halfX, layer.patch.halfY);
    mesh.position.set(...layer.patch.center);
    mesh.quaternion.set(layer.quaternion.x, layer.quaternion.y, layer.quaternion.z, layer.quaternion.w);
    mesh.scale.setScalar(layer.patch.radius);
    return mesh;
  }

  function addWorldSticker(owned, mesh, layer) {
    const { uniforms } = mesh.material;
    uniforms.map.value = owned.texture(layer, ClampToEdgeWrapping, true);
    uniforms.opacity.value = layer.opacity;
    uniforms.crop.value.set(layer.crop.x0, 1 - layer.crop.y1, layer.crop.x1, 1 - layer.crop.y0);
    mesh.position.set(...layer.position);
    mesh.quaternion.set(layer.quaternion.x, layer.quaternion.y, layer.quaternion.z, layer.quaternion.w);
    mesh.scale.set(layer.width, layer.height, 1);
    return mesh;
  }

  // The World of a space input: the default lights, the guides, the `scene` item, the 3D Stickers' items (the
  // port Sticker's and the 3D file Stickers', in one queue), the world Sticker planes and lines, with the Spark
  // renderer of owner's view, and the upstream Scene's items and planes (ADR 0030), which are drawn and picked
  // as the node's own. The items are those of the World of the owner drawing (owned.owner, worldItems). The objects are
  // kept between renders, and `world` is filled again only when they change. What is not seen (opacity 0) is not picked.
  function buildWorld(owned, space, owner) {
    // The pick state below (pickable, pickBoxes, contentParts, contentRevision) is still the view's, of the last render: the
    // node surfaces never pick, and the Preview's Scene viewer picks right after its own render. A node that picks in a
    // shared view while others draw needs it per World too.
    const worldOwn = worldItems(owned.owner);
    const { scene: sceneItems, sticker: stickerItems, upstream: upstreamItems } = worldOwn;
    const children = [lights];
    const parts = [];
    pickable = [];
    pickBoxes = [];
    if (space.grid) children.push(guideGroup(space.grid));
    if (space.ground) children.push((groundGrid ||= createGroundGrid()).show(space.ground));
    sceneItems.retain(space.sceneUrls ?? []);
    // Each content with its opacity, which the `scene` item's materials keep as they are (opaque).
    const contents = [];
    // Whether the playhead advances (which loaded items go first over the budget, pano_scene_items.js overBudget),
    // whether the editor at rest loads the `scene` and upstream items on (`idle`), and whether ComfyUI runs a job
    // (`lean`: only the items drawn and prefetched stay).
    const playback = { playing: !!space.playing, lean: !!space.lean };
    const atRest = { ...playback, idle: !!space.idle };
    if (space.scene) contents.push({ content: contentGroup(sceneItems, space.scene, sceneItems.request(space.scene, atRest)), input: space.scene, opacity: 1, keepMaterials: true });
    const stickerInputs = stickerItemInputs(space);
    const stickerShown = stickerItems.requestMany(stickerInputs.inputs, playback);
    stickerInputs.drawn.forEach((input, index) => {
      // A World 3D Sticker asks for its hit grid at its first item's first draw, before an animation poses it.
      if (input.id != null && stickerShown[index]) {
        const key = coarseGridKey(input);
        if (input.url && gridKeys.get(input.url) !== key) for (const url of [...(input.urls ?? []), input.url]) if (url) gridKeys.set(url, key);
        coarseGrids.want(key, stickerShown[index]);
      }
      contents.push({ content: contentGroup(stickerItems, input, stickerShown[index]), input, opacity: input.opacity });
    });
    const slots = new Set();
    for (const entry of space.upstreamItems ?? []) {
      slots.add(entry.slot);
      const items = worldOwn.upstreamOf(entry.slot);
      items.retain(entry.urls);
      if (entry.request) contents.push({ content: contentGroup(items, entry.request, items.request(entry.request, atRest)), input: entry.request, opacity: entry.opacity });
    }
    for (const [slot, items] of upstreamItems) {
      if (slots.has(slot)) continue;
      items.close();
      upstreamItems.delete(slot);
    }
    // A SPLAT draws through the Spark renderer and a SplatMesh of the view (pano_spark_views.js), made the
    // first time it shows one; until Spark's module is there the SPLATs wait a render.
    const splat = contents.some(({ content }) => content?.splat);
    if (splat && !Spark) {
      loadSpark().then((module) => {
        if (closed) return;
        Spark = module;
        onUpdate();
      }).catch((error) => console.error("[PanoramaStickers] Spark is unavailable", error));
    }
    // The inputs whose depth grids draw now; the color textures of the others go.
    const colorSlots = [];
    for (const { content, input, opacity, keepMaterials } of contents) {
      if (!content) continue;
      // A depth grid draws only with its colors (the proxy's picture at the item drawn, from the input's `color`).
      if (content.depthGrid) {
        const { color } = content;
        if (!color) continue;
        content.object.material.uniforms.colorMap.value = depthColors.texture(owned.owner, color.slot ?? color.source, color);
        colorSlots.push(color.slot ?? color.source);
      }
      if (!keepMaterials) setContentOpacity(content, opacity);
      // An animated 3D file shows its clip's pose at the playhead (ADR 0043).
      poseAnimation(content.object, input.animation);
      if (content.splat && !Spark) continue;
      if (content.splat) sparkViews.splat(owner, content.object);
      children.push(content.group);
      if (!(opacity > 0)) continue;
      if (content.splat) pickBoxes.push({ object: content.object, box: content.box, stickerId: content.stickerId });
      else pickable.push({ object: content.group, stickerId: content.stickerId, plane: false });
      parts.push([content.object.uuid, content.transform, input.animation ? [input.animation.clip, input.animation.speed, input.animation.time] : null]);
    }
    depthColors.retain(owned.owner, colorSlots);
    if (splat && Spark) children.push(sparkViews.renderer(owner));
    let index = 0;
    let lensIndex = 0;
    for (const layer of [...space.stickers, ...(space.upstreamStickers ?? [])]) {
      if (!owned.drawable(layer)) continue;
      const mesh = layer.patch
        ? addWorldLensSticker(owned, pooled(worldLensStickers, lensIndex++, createWorldLensSticker), layer)
        : addWorldSticker(owned, pooled(worldStickers, index++, createWorldSticker), layer);
      children.push(mesh);
      if (!(layer.opacity > 0)) continue;
      pickable.push({ object: mesh, stickerId: layer.id, plane: true });
      parts.push([layer.id, layer.position, layer.quaternion, layer.width, layer.height, layer.patch ?? null]);
    }
    children.push(...cachedLines(lines, space.lines ?? []));
    // Picks are reused while the revision stays (pickCacheKey): whatever changes what is hit (an item's
    // object or geometry, a transform, a plane's place or size, what is pickable) must be in the parts.
    if (!sameValue(parts, contentParts)) {
      contentParts = parts;
      contentRevision += 1;
    }
    // A space without `gizmo` (the Cutout's camera preview) leaves the gizmo of the view as it is, so
    // drawing the preview between two frames of the view does not end a drag.
    if (space.gizmo) children.push(...(gizmo ||= createGizmo(worldCamera)).show(space.gizmo));
    else if (space.gizmo === null) gizmo?.hide();
    setChildren(world, children);
  }

  // Where a render draws (visibleWindow(), with the whole view's size as fullWidth and fullHeight). With
  // input.rect it draws there on the canvas as resize() sized it (the editor's stage, shown as it is).
  // Without, the views shared by the nodes draw the owner's width x height from the bottom left of a
  // canvas as large as the largest owner, and each node copies its rectangle out.
  function place(input, entry) {
    if (input.rect) {
      const window = visibleWindow(input.rect, canvas.width, canvas.height);
      return window && { ...window, fullWidth: input.rect.w, fullHeight: input.rect.h };
    }
    const { width, height } = fitRenderSize(input.width, input.height, maxSide);
    entry.width = width;
    entry.height = height;
    let canvasWidth = 1;
    let canvasHeight = 1;
    owners.forEach((other) => {
      canvasWidth = Math.max(canvasWidth, other.width ?? 0);
      canvasHeight = Math.max(canvasHeight, other.height ?? 0);
    });
    if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) renderer.setSize(canvasWidth, canvasHeight, false);
    return { x: 0, y: canvas.height - height, width, height, offsetX: 0, offsetY: 0, fullWidth: width, fullHeight: height };
  }

  // The lens pass (ADR 0042): the faces of a lens Camera's image and the pass that samples them.
  const plainValue = createPlainValue();
  const lensPass = createLensPass({
    renderer,
    canvas,
    quadGeometry,
    sparkViews,
    owners,
    place,
    layerTextures,
    fillSky,
    panorama,
    buildWorld,
    camera,
    scene,
    worldCamera,
    world,
    settleUnpack,
    contentRevision: () => contentRevision,
    plainValue,
  });
  const { drawLens, releaseLensImages, releaseLensFaces } = lensPass;

  function draw(projection, input, space = null) {
    if (projection === panorama && input.lens) return drawLens(input, space);
    releaseLensImages(input.owner);
    let entry = owners.get(input.owner);
    if (!entry) owners.set(input.owner, entry = {});
    const at = place(input, entry);
    if (!at) return null;
    // The viewport starts at the bottom left of the WebGL canvas.
    const bottom = canvas.height - at.y - at.height;
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    if (input.camera) setView(camera, input.camera, at);
    // A draw that throws still marks what it used, so no texture is left without an owner.
    const owned = layerTextures.draw(input.owner);
    try {
      fillSky(owned, projection, input);
      if (space) buildWorld(owned, space, input.owner);
    } finally {
      owned.end();
    }
    // The part is cleared to input.clearColor (a hex RGB, opaque) before it is drawn, or to transparent.
    if (input.clearColor != null) renderer.setClearColor(new Color(input.clearColor), 1);
    renderer.render(scene, camera);
    if (input.clearColor != null) renderer.setClearColor(0x000000, 0);
    if (space) {
      setCamera(worldCamera, input.camera, at);
      // This draw's camera is the only one the view's Spark renderer sees in this frame.
      sparkViews.aim(worldCamera, input.owner);
      renderer.autoClear = false;
      renderer.clearDepth();
      renderer.render(world, worldCamera);
      renderer.autoClear = true;
    }
    settleUnpack();
    return { canvas, x: at.x, y: at.y, width: at.width, height: at.height };
  }

  // input: { width, height, camera, background, layers, owner }. camera is a viewportCamera() or
  // shotCamera() setup, background is { media, revision, coverage } or null, and layers are the Sky
  // layers from back to front: { kind: "erp", id, media, revision, opacity } or
  // { kind: "sticker", id, media, revision, opacity, quaternion, rect }. Each may name its `source`
  // (see createLayerTextures). owner is optional.
  // With `space`, the view stands at camera.position (a spaceCamera(), pano_space.js) and draws the World
  // over the Sky, which stays at infinity: space is { grid, sceneUrls, scene, stickerUrls, sticker, fileStickers, fileStickerKeys,
  // stickers, lines }. sceneUrls are the item URLs of the `scene` input; loaded items of other URLs are
  // dropped. grid is a gridSpec() or null; ground is the new UI's ground grid (web_src/studio/grid.js
  // groundGrid(), drawn by pano_ground_grid.js) or null. scene is null or { kind ("splat" or "mesh"), url, urls (every item of the input), prefetch
  // (urls to load ahead), transform ({ position, quaternion, scale }), itemQuaternion (the item's turn into
  // the `scene` frame), unlit (its meshes draw without light; false: lit by the default lights) }. sticker is the
  // same for the `sticker` input's 3D media with its opacity, and stickerUrls its item URLs. fileStickers are the
  // requests of the 3D file Stickers (pano_space.js fileStickerRequests: by the Sticker's key, loaded from
  // `src`), and fileStickerKeys the keys of every one whose item stays loaded. stickers are world Sticker planes { id, media, revision, source, opacity,
  // position, quaternion, width, height, crop }, and lines are { segments: [[a, b], ...], color }.
  // upstreamItems ([{ slot, urls, request, opacity }], pano_upstream.js upstreamLayerView) and upstreamStickers
  // (planes as `stickers`) are the upstream Scene's, drawn and picked as the own ones (ADR 0030). gizmo is
  // null or the selected world Sticker's gizmo { mode, transform } (createGizmo's show).
  // With rect ({ x, y, w, h } in canvas pixels from the top left), the view of that size is drawn there on
  // the canvas as resize() sized it, only the part on the canvas, at the canvas's pixels; width and height
  // are not used then. Returns the canvas and the rectangle of it that holds the frame (from the top
  // left), or null when none of rect is on the canvas.
  function render(input) {
    return draw(panorama, input, input.space ?? null);
  }

  // The live ERP of Panorama mode (docs/threejs-spark-integration.md "Panorama モードの ERP の表示") for input.owner,
  // put on input.canvas (a 2D canvas the caller shows): input is render()'s without camera and rect, with view
  // ({ position, turn, coverage }: studio/erp_preview.js liveErpView), width and height (the ERP's pixels), near and
  // far (the cube's planes). The faces are drawn as the space view draws a frame, in two passes: the Sky from the
  // center turned as the face (fillSky), then the World from the Camera's position (buildWorld) with the owner's one
  // Spark renderer, sorted once from the position. The faces are drawn again only when what they show changed (the
  // Sky, the World's inputs and content revision, the clear color: the same plain value the lens faces compare) or a
  // sort ended (onDirty above); a turn draws only the pass. Returns { faces, pass, counts, ms } (pano_live_erp.js's,
  // and the call's time), or null without a canvas.
  function renderLiveErp(input) {
    const { owner, canvas: target } = input;
    if (!target) return null;
    let entry = liveErps.get(owner);
    if (entry && entry.canvas !== target) {
      entry.erp.dispose();
      entry = null;
    }
    if (!entry) {
      entry = { erp: createLiveErp({ renderer, canvas: target, near: input.near, far: input.far }), canvas: target, key: null };
      liveErps.set(owner, entry);
    }
    const { erp } = entry;
    const started = performance.now();
    erp.setSize(input.width, input.height);
    erp.setView({ ...input.view, near: input.near, far: input.far });
    const space = input.space ?? null;
    const owned = layerTextures.draw(owner);
    let done = { faces: false, pass: false };
    try {
      fillSky(owned, panorama, input);
      if (space) buildWorld(owned, space, owner);
      const key = plainValue({ clearColor: input.clearColor ?? null, background: input.background ?? null, layers: input.layers, space, content: contentRevision });
      if (!sameValue(key, entry.key)) {
        entry.key = key;
        erp.invalidate("content");
      }
      if (erp.needsDraw()) {
        const spark = space && sparkViews.has(owner) ? sparkViews.renderer(owner) : null;
        if (input.clearColor != null) renderer.setClearColor(new Color(input.clearColor), 1);
        try {
          done = erp.draw({
            scene: world,
            spark,
            aim: (camera) => sparkViews.aim(camera, owner),
            drawFace: (camera) => {
              // The face's own matrices without its position (a face camera's world matrix is not a plain turn, so
              // it is copied whole rather than rebuilt from a quaternion).
              liveErpSkyCamera.matrixWorld.copy(camera.matrixWorld).setPosition(0, 0, 0);
              liveErpSkyCamera.matrixWorldInverse.copy(liveErpSkyCamera.matrixWorld).invert();
              liveErpSkyCamera.projectionMatrix.copy(camera.projectionMatrix);
              liveErpSkyCamera.projectionMatrixInverse.copy(camera.projectionMatrixInverse);
              renderer.render(scene, liveErpSkyCamera);
              if (!space) return;
              renderer.clearDepth();
              renderer.render(world, camera);
            },
          });
        } finally {
          if (input.clearColor != null) renderer.setClearColor(0x000000, 0);
        }
      }
    } finally {
      owned.end();
    }
    settleUnpack();
    // ms: what this call took on the CPU, the read-back's wait for the GPU included (the pixels are read synchronously).
    return { faces: done.faces, pass: done.pass, counts: { ...erp.counts }, ms: performance.now() - started };
  }

  function releaseLiveErp(owner) {
    liveErps.get(owner)?.erp.dispose();
    liveErps.delete(owner);
  }

  // Sizes the canvas to width x height device pixels, within what the GPU draws to (fitRenderSize), for
  // the renders with a rect. Returns the size it has.
  function resize(width, height) {
    const size = fitRenderSize(width, height, maxSide);
    if (canvas.width !== size.width || canvas.height !== size.height) renderer.setSize(size.width, size.height, false);
    return size;
  }

  // Clears the canvas, or the part of it in rect (as render()'s), to color (a hex RGB, opaque) or, without
  // one, to transparent.
  function clear(color = null, rect = null) {
    const at = rect ? visibleWindow(rect, canvas.width, canvas.height) : { x: 0, y: 0, width: canvas.width, height: canvas.height };
    if (!at) return;
    const bottom = canvas.height - at.y - at.height;
    renderer.setViewport(at.x, bottom, at.width, at.height);
    renderer.setScissor(at.x, bottom, at.width, at.height);
    if (color !== null) renderer.setClearColor(new Color(color), 1);
    renderer.clear(true, true, false);
    if (color !== null) renderer.setClearColor(0x000000, 0);
  }

  // The box of the loaded `scene` or 3D Sticker item at url (or a 3D file Sticker's key) of owner's World in its own frame
  // ({ min, max }; a SPLAT's in 3DGS coordinates), or null while it loads.
  function sceneBox(url, owner) {
    for (const items of worldQueues(owner)) {
      const box = items.box(url);
      if (box) return box;
    }
    return null;
  }

  // Why the `scene` or 3D Sticker item at url (or key) of owner's World failed to load ("HTTP 404" when its file is gone),
  // or null.
  function sceneItemError(url, owner) {
    for (const items of worldQueues(owner)) {
      const error = items.error(url);
      if (error) return error;
    }
    return null;
  }

  // The coarse occupancy grid of the World 3D Sticker whose item key is url (pano_coarse_grid.js, in the `scene`
  // glTF frame; a batch's from its first item drawn), for the hover and the click (docs/space-and-view.md
  // "ホバーの判定"), or null until its grid is built (buildWorld asks for it at the first draw). It never builds one.
  function sceneGrid(url) {
    const key = gridKeys.get(url);
    return key === undefined ? null : coarseGrids.get(key);
  }

  // The pointer at (x, y) of a width x height view from camera (a spaceCamera()) on the gizmo of the last
  // space render (createGizmo's pointer).
  function gizmoPointer(phase, camera, x, y, width, height) {
    if (!gizmo) return null;
    setCamera(worldCamera, camera);
    const { x: px, y: py } = devicePoint(x, y, width, height);
    return gizmo.pointer(phase, px, py);
  }

  // Frees the Spark renderer of an owner that stops drawing for now (the camera preview hides) and drops
  // its marks on the layer textures, so those no other owner uses are disposed; it gets a new renderer and
  // its textures again when it draws again.
  function releaseSplats(owner) {
    releaseLiveErp(owner);
    releaseLensFaces(owner);
    sparkViews.release(owner);
    layerTextures.release(owner);
    depthColors.release(owner);
  }

  // input: render()'s input without camera; the frame is the layers laid out as an ERP. Its rect, if any,
  // lies on the canvas.
  function renderUnwrap(input) {
    return draw(unwrap, input);
  }

  // Frees the textures and the Spark renderer of an owner that stops drawing; the canvas shrinks on the next
  // render if this owner was the largest.
  function release(owner) {
    releaseSplats(owner);
    owners.delete(owner);
  }

  // Frees the items of owner's World (ownWorlds) for good: the owner draws no more (a node removed). A release() alone
  // keeps them, as the one World keeps its items between renders.
  function releaseWorld(owner) {
    if (!ownWorlds) return;
    worlds.get(owner)?.close();
    worlds.delete(owner);
  }

  // What the diagnostics sample (pano_diagnostics.js watchThreeView): renderer.info (calls and
  // triangles of the last pass drawn), the layer textures the owners share, the `scene` and 3D Sticker items,
  // and the Spark renderers.
  function stats() {
    const { memory, render: drawn, programs } = renderer.info;
    const items = allItems().flatMap((each) => [...each.items.values()]);
    return {
      textures: memory.textures,
      layerTextures: layerTextures.size,
      geometries: memory.geometries,
      programs: programs?.length ?? 0,
      calls: drawn.calls,
      triangles: drawn.triangles,
      size: [canvas.width, canvas.height],
      sceneItems: {
        count: items.length,
        loaded: items.filter((item) => item.state === "loaded").length,
        loading: items.filter((item) => item.state === "loading").length,
        mb: Math.round(items.reduce((total, item) => total + (item.state === "loaded" ? item.size : 0), 0) / 1024 ** 2),
      },
      sparks: sparkViews.stats(),
      depthColorTextures: depthColors.size,
    };
  }

  // Frees what the view holds. The WebGL context is let go now too, unless it is lost already (lost):
  // then nothing reaches the GPU, and the canvas can make a new view once the context is restored.
  function dispose({ lost = false } = {}) {
    if (closed) return;
    closed = true;
    coarseGrids.close();
    worlds.forEach((items) => items.close());
    worlds.clear();
    depthColors.dispose();
    if (guides) disposeObject(guides.group);
    groundGrid?.dispose();
    sky.disposeSkyGrid();
    lines.lines.forEach((line) => disposeObject(line));
    gizmo?.dispose();
    worldStickers.forEach((mesh) => mesh.material.dispose());
    worldLensStickers.forEach((mesh) => {
      mesh.material.dispose();
      mesh.userData.pickMaterial?.dispose();
    });
    lensPatchGeometry.dispose();
    panorama.lensSticker.forEach((mesh) => mesh.material.dispose());
    picker.dispose();
    lensPass.dispose();
    liveErps.forEach((entry) => entry.erp.dispose());
    liveErps.clear();
    sparkViews.dispose();
    layerTextures.dispose();
    owners.clear();
    [panorama, unwrap].forEach((projection) => {
      [projection.background, ...projection.erp, ...projection.sticker].forEach((mesh) => mesh.material.dispose());
    });
    domeGeometry.dispose();
    planeGeometry.dispose();
    quadGeometry.dispose();
    renderer.dispose();
    // Release the WebGL context now instead of when the canvas is collected, so reopening the
    // editor does not pile up contexts.
    if (!lost) renderer.forceContextLoss();
  }

  return { canvas, render, renderLiveErp, renderUnwrap, resize, clear, sceneBox, sceneGrid, sceneItemError, pick, pickSurface, pickSticker, gizmoPointer, contentRevision: () => contentRevision, release, releaseWorld, releaseSplats, stats, dispose };
}
