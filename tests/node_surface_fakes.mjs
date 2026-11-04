// Fakes for loading web_src/pano_preview_runtime.js in Node and driving its node surface through its exports
// (attachPanoramaPreview / attachCutoutPreview): ComfyUI's app.js and api.js, the .vue components, and the small part of
// the DOM the surface uses (elements, canvases, VIDEO, requestAnimationFrame, ResizeObserver, window keydown).
//
// Import this module before importing the runtime (the runtime must be loaded with a dynamic import after it):
// the module hooks and the DOM globals have to exist when the runtime and Vue load.
import { registerHooks } from "node:module";

// --- ComfyUI's scripts and the .vue components -------------------------------------------------------------------

// The props each mounted surface component got (model, onAction), newest last.
export const mountedSurfaces = [];

registerHooks({
  resolve(specifier, context, next) {
    if (specifier.endsWith("/scripts/app.js")) return { url: "pano-fake:app", shortCircuit: true };
    if (specifier.endsWith("/scripts/api.js")) return { url: "pano-fake:api", shortCircuit: true };
    if (specifier.endsWith(".vue")) return { url: `pano-fake:vue?${specifier}`, shortCircuit: true };
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url === "pano-fake:app") return { format: "module", source: "export const app = globalThis.__panoFakeApp;", shortCircuit: true };
    if (url === "pano-fake:api") return { format: "module", source: "export const api = globalThis.__panoFakeApi;", shortCircuit: true };
    if (url.startsWith("pano-fake:vue?")) {
      const name = url.slice(url.lastIndexOf("/") + 1).replace(".vue", "");
      return {
        format: "module",
        source: `export default {
          name: ${JSON.stringify(name)},
          props: ["model", "onAction"],
          setup(props) {
            globalThis.__panoMountedSurfaces.push({ component: ${JSON.stringify(name)}, props });
            return () => null;
          },
        };`,
        shortCircuit: true,
      };
    }
    return next(url, context);
  },
});
globalThis.__panoMountedSurfaces = mountedSurfaces;

export const fakeApp = {
  nodeOutputs: {},
  graph: null,
  canvas: null,
  ui: { settings: { getSettingValue: () => undefined } },
};
export const apiListeners = new Map();
export const fakeApi = {
  async fetchApi() {
    return { ok: false, status: 404, json: async () => undefined };
  },
  apiURL: (path) => path,
  addEventListener(type, listener) {
    if (!apiListeners.has(type)) apiListeners.set(type, new Set());
    apiListeners.get(type).add(listener);
  },
  removeEventListener(type, listener) {
    apiListeners.get(type)?.delete(listener);
  },
};
globalThis.__panoFakeApp = fakeApp;
globalThis.__panoFakeApi = fakeApi;

// --- DOM ----------------------------------------------------------------------------------------------------------

export function createContext2d(canvas) {
  const calls = [];
  const record = (name) => (...args) => {
    calls.push([name, ...args]);
  };
  return {
    canvas,
    calls,
    save: record("save"),
    restore: record("restore"),
    setTransform: record("setTransform"),
    clearRect: record("clearRect"),
    fillRect: record("fillRect"),
    drawImage: record("drawImage"),
    beginPath: record("beginPath"),
    arc: record("arc"),
    fill: record("fill"),
    stroke: record("stroke"),
    rect: record("rect"),
    clip: record("clip"),
    moveTo: record("moveTo"),
    lineTo: record("lineTo"),
    roundRect: record("roundRect"),
    setLineDash: record("setLineDash"),
    fillText: record("fillText"),
    measureText: () => ({ width: 0 }),
    createLinearGradient: () => ({ addColorStop() {} }),
  };
}

export class FakeElement {
  constructor(tagName, ownerDocument) {
    this.tagName = String(tagName).toUpperCase();
    this.ownerDocument = ownerDocument;
    this.children = [];
    this.parentElement = null;
    this.style = { cssText: "" };
    this.attributes = new Map();
    this.listeners = new Map();
    this.className = "";
    this.textContent = "";
    this.id = "";
    this.clientWidth = 0;
    this.clientHeight = 0;
    this.connected = false;
    this.rect = { left: 0, top: 0, width: 0, height: 0 };
    const element = this;
    this.classList = {
      add: (...names) => {
        const set = new Set(element.className.split(/\s+/).filter(Boolean));
        names.forEach((name) => set.add(name));
        element.className = [...set].join(" ");
      },
      remove: (...names) => {
        element.className = element.className.split(/\s+/).filter((name) => name && !names.includes(name)).join(" ");
      },
      contains: (name) => element.className.split(/\s+/).includes(name),
    };
  }

  get isConnected() {
    let element = this;
    while (element) {
      if (element.connected) return true;
      element = element.parentElement;
    }
    return false;
  }

  get nodeType() {
    return 1;
  }

  get parentNode() {
    return this.parentElement;
  }

  get firstChild() {
    return this.children[0] ?? null;
  }

  get nextSibling() {
    const siblings = this.parentElement?.children ?? [];
    return siblings[siblings.indexOf(this) + 1] ?? null;
  }

  set innerHTML(value) {
    if (value === "") this.children = [];
  }

  get innerHTML() {
    return "";
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }

  getAttribute(name) {
    return this.attributes.has(name) ? this.attributes.get(name) : null;
  }

  hasAttribute(name) {
    return this.attributes.has(name);
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  addEventListener(type, listener, options) {
    if (!this.listeners.has(type)) this.listeners.set(type, []);
    this.listeners.get(type).push({ listener, options });
  }

  removeEventListener(type, listener) {
    const list = this.listeners.get(type);
    if (!list) return;
    const index = list.findIndex((entry) => entry.listener === listener);
    if (index >= 0) list.splice(index, 1);
  }

  listenerCount(type) {
    return this.listeners.get(type)?.length ?? 0;
  }

  dispatch(type, event = {}) {
    const full = {
      type,
      target: this,
      preventDefault() {
        this.defaultPrevented = true;
      },
      stopPropagation() {
        this.propagationStopped = true;
      },
      stopImmediatePropagation() {},
      ...event,
    };
    for (const { listener } of [...(this.listeners.get(type) ?? [])]) listener.call(this, full);
    return full;
  }

  appendChild(child) {
    return this.insertBefore(child, null);
  }

  insertBefore(child, anchor) {
    if (child.parentElement) child.parentElement.removeChild(child);
    const index = anchor ? this.children.indexOf(anchor) : -1;
    if (index >= 0) this.children.splice(index, 0, child);
    else this.children.push(child);
    child.parentElement = this;
    return child;
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index >= 0) this.children.splice(index, 1);
    child.parentElement = null;
    return child;
  }

  remove() {
    this.parentElement?.removeChild(this);
  }

  contains(other) {
    let element = other;
    while (element) {
      if (element === this) return true;
      element = element.parentElement;
    }
    return false;
  }

  querySelector(selector) {
    const match = (element) => (selector.startsWith(".")
      ? element.classList?.contains(selector.slice(1))
      : element.tagName === selector.toUpperCase());
    const walk = (element) => {
      for (const child of element.children ?? []) {
        if (match(child)) return child;
        const found = walk(child);
        if (found) return found;
      }
      return null;
    };
    return walk(this);
  }

  focus() {
    this.ownerDocument.activeElement = this;
  }

  getBoundingClientRect() {
    return { ...this.rect, right: this.rect.left + this.rect.width, bottom: this.rect.top + this.rect.height, x: this.rect.left, y: this.rect.top };
  }
}

export class FakeCanvas extends FakeElement {
  constructor(ownerDocument) {
    super("canvas", ownerDocument);
    this.width = 300;
    this.height = 150;
    this.context = null;
    this.pointerCaptures = new Set();
  }

  getContext(kind) {
    if (kind !== "2d") return null;
    this.context ??= createContext2d(this);
    return this.context;
  }

  setPointerCapture(id) {
    this.pointerCaptures.add(id);
  }

  releasePointerCapture(id) {
    this.pointerCaptures.delete(id);
  }

  hasPointerCapture(id) {
    return this.pointerCaptures.has(id);
  }
}

export class FakeVideo extends FakeElement {
  constructor(ownerDocument) {
    super("video", ownerDocument);
    this.paused = true;
    this.readyState = 0;
    this.videoWidth = 0;
    this.videoHeight = 0;
    this.duration = NaN;
    this.currentTime = 0;
    this.loads = 0;
  }

  get src() {
    return this.getAttribute("src") || "";
  }

  set src(value) {
    this.setAttribute("src", value);
  }

  load() {
    this.loads += 1;
  }

  play() {
    this.paused = false;
    return Promise.resolve();
  }

  pause() {
    this.paused = true;
  }
}

class FakeComment {
  constructor(text) {
    this.data = text;
    this.parentElement = null;
  }

  get nodeType() {
    return 8;
  }

  get parentNode() {
    return this.parentElement;
  }

  get nextSibling() {
    const siblings = this.parentElement?.children ?? [];
    return siblings[siblings.indexOf(this) + 1] ?? null;
  }
}

export function createFakeDocument() {
  const document = {
    activeElement: null,
    createElement(tagName) {
      const tag = String(tagName).toLowerCase();
      if (tag === "canvas") return new FakeCanvas(document);
      if (tag === "video") return new FakeVideo(document);
      return new FakeElement(tag, document);
    },
    createElementNS(_ns, tagName) {
      return document.createElement(tagName);
    },
    createComment: (text) => new FakeComment(text),
    createTextNode: (text) => new FakeComment(text),
    getElementById(id) {
      return document.head.children.find((child) => child.id === id) ?? null;
    },
    querySelector: () => null,
    addEventListener() {},
    removeEventListener() {},
  };
  document.head = new FakeElement("head", document);
  document.body = new FakeElement("body", document);
  document.head.connected = true;
  document.body.connected = true;
  return document;
}

export const fakeDocument = createFakeDocument();

// requestAnimationFrame: queued until the test runs them (runFrames).
export const frames = { queue: new Map(), next: 1 };
export function runFrames(now = 1000) {
  const pending = [...frames.queue.values()];
  frames.queue.clear();
  pending.forEach((callback) => callback(now));
  return pending.length;
}

// ResizeObserver: the test calls its callback (resizeObservers[i].trigger()).
export const resizeObservers = [];
class FakeResizeObserver {
  constructor(callback) {
    this.callback = callback;
    this.targets = new Set();
    this.disconnected = false;
    resizeObservers.push(this);
  }

  observe(target) {
    this.targets.add(target);
  }

  unobserve(target) {
    this.targets.delete(target);
  }

  disconnect() {
    this.disconnected = true;
    this.targets.clear();
  }

  trigger() {
    this.callback([...this.targets].map((target) => ({ target })), this);
  }
}

class FakeImage {
  constructor() {
    this.complete = false;
    this.naturalWidth = 0;
    this.naturalHeight = 0;
    this.onload = null;
    this.onerror = null;
    this.attributes = new Map();
  }

  set src(value) {
    this.attributes.set("src", value);
  }

  get src() {
    return this.attributes.get("src") || "";
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }
}

export const windowListeners = new Map();
const fakeWindow = globalThis;
fakeWindow.addEventListener = (type, listener) => {
  if (!windowListeners.has(type)) windowListeners.set(type, new Set());
  windowListeners.get(type).add(listener);
};
fakeWindow.removeEventListener = (type, listener) => {
  windowListeners.get(type)?.delete(listener);
};

globalThis.window = fakeWindow;
globalThis.document = fakeDocument;
globalThis.requestAnimationFrame = (callback) => {
  const id = frames.next++;
  frames.queue.set(id, callback);
  return id;
};
globalThis.cancelAnimationFrame = (id) => {
  frames.queue.delete(id);
};
globalThis.ResizeObserver = FakeResizeObserver;
globalThis.Image = FakeImage;
// Vue's mount asks whether its container is an SVG or MathML element.
globalThis.SVGElement ??= class SVGElement {};
globalThis.MathMLElement ??= class MathMLElement {};
globalThis.Element ??= FakeElement;

// --- Nodes --------------------------------------------------------------------------------------------------------

let nextNodeId = 100;

// A ComfyUI node with the widgets named in `widgets` ({ name: value }); `studio` makes it a Panorama Studio node (state v2).
export function createFakeNode({ type = "PanoramaStickers", widgets = {}, studio = false, inputs = [] } = {}) {
  const node = {
    id: nextNodeId++,
    type,
    comfyClass: type,
    title: type,
    size: [400, 320],
    flags: {},
    inputs,
    imgs: [],
    widgets: Object.entries(widgets).map(([name, value]) => ({ name, value, type: "text" })),
    dirty: 0,
    addDOMWidget(name, widgetType, element, options) {
      const widget = { name, type: widgetType, element, options };
      this.widgets.push(widget);
      return widget;
    },
    setDirtyCanvas() {
      this.dirty += 1;
    },
    getInputLink: () => null,
  };
  if (studio) {
    node.__panoStudio = true;
    node.__panoSceneStateV2 = true;
  }
  return node;
}

export function widgetOf(node, name) {
  return node.widgets.find((widget) => widget.name === name) ?? null;
}

// The surface's elements once attached: root (the DOM widget's element), wrap (its frame) and canvas.
export function surfaceElements(node) {
  const widget = node.widgets.find((entry) => entry.element instanceof FakeElement);
  const root = widget?.element ?? null;
  const wrap = root?.children[0] ?? null;
  const canvas = wrap?.children.find((child) => child instanceof FakeCanvas) ?? null;
  return { widget, root, wrap, canvas };
}
