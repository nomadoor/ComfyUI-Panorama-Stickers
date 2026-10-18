// A small software 2D canvas for tests that compare pixels: premultiplied RGBA in floats, a pixel drawn when its
// center is inside the shape (no anti-aliasing), nearest sampling for drawImage. It does the operations the paint
// engine uses (pano_paint_engine.js): clearRect, fillRect with a color, a radial gradient or a repeating pattern,
// drawImage in its three forms under translate / rotate, paths filled (non-zero) and stroked, getImageData /
// putImageData, globalAlpha, and the composite operations source-over, destination-out and source-in (which, as
// in a browser, clears what is outside the shape it draws). Sizing a canvas clears it.
//
// withRasterCanvas(run) runs `run` with document.createElement("canvas") making these (and a stand-in
// HTMLVideoElement class, which no canvas is), and counts the pixels the
// drawing operations cover in `stats` (`drawn`: pixels drawImage writes, `filled`: fillRect, `cleared`: clearRect).

export const stats = { drawn: 0, filled: 0, cleared: 0 };

function parseColor(text) {
  const match = /rgba?\(([^)]+)\)/.exec(String(text));
  if (!match) return [0, 0, 0, 1];
  const [r, g, b, a = 1] = match[1].split(",").map(Number);
  return [r / 255, g / 255, b / 255, a];
}

function premultiplied([r, g, b, a]) {
  return [r * a, g * a, b * a, a];
}

function multiply(m, n) {
  return [
    m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
    m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
    m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5],
  ];
}

function invert(m) {
  const det = m[0] * m[3] - m[1] * m[2];
  return [
    m[3] / det, -m[1] / det, -m[2] / det, m[0] / det,
    (m[2] * m[5] - m[3] * m[4]) / det, (m[1] * m[4] - m[0] * m[5]) / det,
  ];
}

function apply(m, x, y) {
  return [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]];
}

function insidePolygons(polygons, x, y) {
  let winding = 0;
  for (const points of polygons) {
    for (let index = 0; index < points.length; index += 1) {
      const [x0, y0] = points[index];
      const [x1, y1] = points[(index + 1) % points.length];
      if (y0 <= y ? y1 > y : y1 <= y) {
        const cross = (x1 - x0) * (y - y0) - (x - x0) * (y1 - y0);
        if (y1 > y0 ? cross > 0 : cross < 0) winding += y1 > y0 ? 1 : -1;
      }
    }
  }
  return winding !== 0;
}

function nearSegments(polygons, x, y, half) {
  for (const points of polygons) {
    for (let index = 0; index + 1 < points.length; index += 1) {
      const [x0, y0] = points[index];
      const [x1, y1] = points[index + 1];
      const dx = x1 - x0;
      const dy = y1 - y0;
      const t = Math.max(0, Math.min(1, ((x - x0) * dx + (y - y0) * dy) / (dx * dx + dy * dy || 1)));
      if (Math.hypot(x - (x0 + dx * t), y - (y0 + dy * t)) <= half) return true;
    }
  }
  return false;
}

function createContext(canvas) {
  let state = { alpha: 1, op: "source-over", fill: "#000", stroke: "#000", lineWidth: 1, matrix: [1, 0, 0, 1, 0, 0] };
  const stack = [];
  let path = [];

  // Composites the premultiplied color source(x, y) (or null where the shape does not cover the pixel) over
  // every pixel of the canvas the shape may reach (`box`), or the whole canvas for source-in.
  function composite(box, source, count) {
    const { width, height, pixels } = canvas;
    const unbounded = state.op === "source-in";
    const [bx0, by0, bx1, by1] = unbounded ? [0, 0, width, height] : box;
    for (let y = Math.max(0, by0); y < Math.min(height, by1); y += 1) {
      for (let x = Math.max(0, bx0); x < Math.min(width, bx1); x += 1) {
        const color = source(x + 0.5, y + 0.5);
        const at = (y * width + x) * 4;
        if (!color) {
          if (unbounded) pixels.fill(0, at, at + 4);
          continue;
        }
        stats[count] += 1;
        const sa = color[3] * state.alpha;
        const s = [color[0] * state.alpha, color[1] * state.alpha, color[2] * state.alpha, sa];
        const da = pixels[at + 3];
        for (let c = 0; c < 4; c += 1) {
          const d = pixels[at + c];
          if (state.op === "destination-out") pixels[at + c] = d * (1 - sa);
          else if (state.op === "source-in") pixels[at + c] = s[c] * da;
          else pixels[at + c] = s[c] + d * (1 - sa);
        }
      }
    }
  }

  function transformedBox(x0, y0, x1, y1) {
    const corners = [apply(state.matrix, x0, y0), apply(state.matrix, x1, y0), apply(state.matrix, x0, y1), apply(state.matrix, x1, y1)];
    const xs = corners.map((point) => point[0]);
    const ys = corners.map((point) => point[1]);
    return [Math.floor(Math.min(...xs)), Math.floor(Math.min(...ys)), Math.ceil(Math.max(...xs)), Math.ceil(Math.max(...ys))];
  }

  function styleAt(style, x, y) {
    if (typeof style === "string") return premultiplied(parseColor(style));
    if (style.kind === "pattern") {
      const { image } = style;
      const px = ((Math.floor(x) % image.width) + image.width) % image.width;
      const py = ((Math.floor(y) % image.height) + image.height) % image.height;
      return image.pixels.slice((py * image.width + px) * 4, (py * image.width + px) * 4 + 4);
    }
    const [x0, y0, r0, , , r1] = style.args;
    const t = Math.max(0, Math.min(1, (Math.hypot(x - x0, y - y0) - r0) / Math.max(1e-9, r1 - r0)));
    const stops = style.stops;
    let index = stops.findIndex((stop) => stop[0] >= t);
    if (index < 0) index = stops.length - 1;
    const after = stops[index];
    const before = stops[Math.max(0, index - 1)];
    const span = after[0] - before[0];
    const k = span > 0 ? (t - before[0]) / span : 1;
    const a = parseColor(before[1]);
    const b = parseColor(after[1]);
    return premultiplied(a.map((value, c) => value + (b[c] - value) * k));
  }

  const ctx = {
    canvas,
    imageSmoothingEnabled: true,
    get globalAlpha() { return state.alpha; },
    set globalAlpha(value) { state.alpha = value; },
    get globalCompositeOperation() { return state.op; },
    set globalCompositeOperation(value) { state.op = value; },
    get fillStyle() { return state.fill; },
    set fillStyle(value) { state.fill = value; },
    get strokeStyle() { return state.stroke; },
    set strokeStyle(value) { state.stroke = value; },
    get lineWidth() { return state.lineWidth; },
    set lineWidth(value) { state.lineWidth = value; },
    lineCap: "butt",
    save() { stack.push({ ...state, matrix: [...state.matrix] }); },
    restore() { if (stack.length) state = stack.pop(); },
    translate(x, y) { state.matrix = multiply(state.matrix, [1, 0, 0, 1, x, y]); },
    rotate(angle) { state.matrix = multiply(state.matrix, [Math.cos(angle), Math.sin(angle), -Math.sin(angle), Math.cos(angle), 0, 0]); },
    clearRect(x, y, w, h) {
      const { width, height, pixels } = canvas;
      for (let py = Math.max(0, Math.round(y)); py < Math.min(height, Math.round(y + h)); py += 1) {
        for (let px = Math.max(0, Math.round(x)); px < Math.min(width, Math.round(x + w)); px += 1) {
          pixels.fill(0, (py * width + px) * 4, (py * width + px) * 4 + 4);
          stats.cleared += 1;
        }
      }
    },
    fillRect(x, y, w, h) {
      const inverse = invert(state.matrix);
      const style = state.fill;
      composite(transformedBox(x, y, x + w, y + h), (cx, cy) => {
        const [lx, ly] = apply(inverse, cx, cy);
        return lx >= x && lx < x + w && ly >= y && ly < y + h ? styleAt(style, lx, ly) : null;
      }, "filled");
    },
    drawImage(image, ...args) {
      let [sx, sy, sw, sh, dx, dy, dw, dh] = [0, 0, image.width, image.height, 0, 0, image.width, image.height];
      if (args.length === 2) [dx, dy] = args;
      else if (args.length === 4) [dx, dy, dw, dh] = args;
      else [sx, sy, sw, sh, dx, dy, dw, dh] = args;
      if (!(dw > 0 && dh > 0 && sw > 0 && sh > 0)) return;
      const inverse = invert(state.matrix);
      const source = image.pixels;
      composite(transformedBox(dx, dy, dx + dw, dy + dh), (cx, cy) => {
        const [lx, ly] = apply(inverse, cx, cy);
        if (!(lx >= dx && lx < dx + dw && ly >= dy && ly < dy + dh)) return null;
        const px = Math.floor(sx + ((lx - dx) / dw) * sw);
        const py = Math.floor(sy + ((ly - dy) / dh) * sh);
        if (px < 0 || py < 0 || px >= image.width || py >= image.height) return null;
        const at = (py * image.width + px) * 4;
        return [source[at], source[at + 1], source[at + 2], source[at + 3]];
      }, "drawn");
    },
    beginPath() { path = []; },
    moveTo(x, y) { path.push([apply(state.matrix, x, y)]); },
    lineTo(x, y) { path[path.length - 1].push(apply(state.matrix, x, y)); },
    closePath() {},
    fill() {
      const points = path.flat();
      const xs = points.map((point) => point[0]);
      const ys = points.map((point) => point[1]);
      const polygons = path.map((points) => [...points]);
      const style = state.fill;
      composite([Math.floor(Math.min(...xs)), Math.floor(Math.min(...ys)), Math.ceil(Math.max(...xs)), Math.ceil(Math.max(...ys))],
        (cx, cy) => (insidePolygons(polygons, cx, cy) ? styleAt(style, cx, cy) : null), "filled");
    },
    stroke() {
      const half = state.lineWidth / 2;
      const points = path.flat();
      const xs = points.map((point) => point[0]);
      const ys = points.map((point) => point[1]);
      const polygons = path.map((points) => [...points]);
      const style = state.stroke;
      composite([Math.floor(Math.min(...xs) - half), Math.floor(Math.min(...ys) - half), Math.ceil(Math.max(...xs) + half), Math.ceil(Math.max(...ys) + half)],
        (cx, cy) => (nearSegments(polygons, cx, cy, half) ? styleAt(style, cx, cy) : null), "filled");
    },
    createRadialGradient(...args) {
      const gradient = { kind: "radial", args, stops: [], addColorStop: (offset, color) => gradient.stops.push([offset, color]) };
      return gradient;
    },
    createPattern(image) {
      return { kind: "pattern", image };
    },
    createImageData(width, height) {
      return { width, height, data: new Uint8ClampedArray(width * height * 4) };
    },
    getImageData(x, y, w, h) {
      const data = new Uint8ClampedArray(w * h * 4);
      for (let py = 0; py < h; py += 1) {
        for (let px = 0; px < w; px += 1) {
          const at = ((y + py) * canvas.width + x + px) * 4;
          const a = canvas.pixels[at + 3];
          const out = (py * w + px) * 4;
          for (let c = 0; c < 3; c += 1) data[out + c] = a > 0 ? Math.round((canvas.pixels[at + c] / a) * 255) : 0;
          data[out + 3] = Math.round(a * 255);
        }
      }
      return { width: w, height: h, data };
    },
    putImageData(image, x, y) {
      for (let py = 0; py < image.height; py += 1) {
        for (let px = 0; px < image.width; px += 1) {
          const at = ((y + py) * canvas.width + x + px) * 4;
          const from = (py * image.width + px) * 4;
          const a = image.data[from + 3] / 255;
          for (let c = 0; c < 3; c += 1) canvas.pixels[at + c] = (image.data[from + c] / 255) * a;
          canvas.pixels[at + 3] = a;
        }
      }
    },
  };
  return ctx;
}

export function createRasterCanvas(width = 0, height = 0) {
  let w = width;
  let h = height;
  let ctx = null;
  const canvas = {
    pixels: new Float64Array(w * h * 4),
    get width() { return w; },
    set width(value) { w = value; canvas.pixels = new Float64Array(w * h * 4); },
    get height() { return h; },
    set height(value) { h = value; canvas.pixels = new Float64Array(w * h * 4); },
    getContext() { return (ctx ??= createContext(canvas)); },
  };
  return canvas;
}

export function withRasterCanvas(run) {
  const previous = { document: globalThis.document, HTMLVideoElement: globalThis.HTMLVideoElement };
  globalThis.document = { createElement: () => createRasterCanvas() };
  globalThis.HTMLVideoElement = class { static HAVE_CURRENT_DATA = 2; };
  try {
    return run();
  } finally {
    Object.assign(globalThis, previous);
  }
}

export function resetStats() {
  stats.drawn = 0;
  stats.filled = 0;
  stats.cleared = 0;
}

// A GPU that holds each texture's pixels: a whole upload when three would upload (a new texture or needsUpdate),
// the given rectangles through uploadRegions. Counts the pixels it uploads.
export function fakeGpu() {
  const held = new Map();
  const gpu = {
    uploaded: 0,
    whole(texture) {
      held.set(texture, { version: texture.version, pixels: Float64Array.from(texture.image.pixels) });
      gpu.uploaded += texture.image.width * texture.image.height;
    },
    uploadRegions(texture, rects) {
      const entry = held.get(texture);
      if (!entry) return false;
      if (entry.version !== texture.version) gpu.whole(texture);
      const { width, pixels } = texture.image;
      for (const { x0, y0, x1, y1 } of rects) {
        for (let y = y0; y < y1; y += 1) {
          entry.pixels.set(pixels.subarray((y * width + x0) * 4, (y * width + x1) * 4), (y * width + x0) * 4);
        }
        gpu.uploaded += (x1 - x0) * (y1 - y0);
      }
      return true;
    },
    // What a render does with the textures it binds.
    render(textures) {
      for (const texture of textures) {
        if (held.get(texture)?.version !== texture.version) gpu.whole(texture);
      }
    },
    pixels: (texture) => held.get(texture).pixels,
  };
  return gpu;
}

