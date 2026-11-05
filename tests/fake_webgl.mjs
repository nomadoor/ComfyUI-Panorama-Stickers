// A WebGL2 context good enough for three.js's WebGLRenderer to be made and to draw in Node, without a GPU. Every
// call is recorded in `calls` ([name, args]). It compiles and links every shader and draws nothing; readPixels fills
// the buffer from `pixels(buffer)` (zeros by default), so a test plays the GPU's answer to a pick. `fail(name)`
// makes the next call of name throw once. What it draws is never checked here: tests/browser/ draws for real.
export function createFakeWebGl() {
  const constants = new Map([["NO_ERROR", 0]]);
  let next = 0x8000;
  const constant = (name) => {
    if (!constants.has(name)) constants.set(name, next++);
    return constants.get(name);
  };
  const nameOf = (value) => [...constants].find(([, each]) => each === value)?.[0] ?? "";
  const calls = [];
  const failing = new Set();
  const fake = { calls, constant, pixels: null, fail: (name) => failing.add(name) };
  // Each program's sampler2D uniforms, read from its shaders' source, so three.js binds (and uploads) the textures
  // a material samples.
  const sources = new Map();
  const attached = new Map();
  const samplers = (program) => (attached.get(program) ?? [])
    .flatMap((shader) => [...(sources.get(shader) ?? "").matchAll(/uniform\s+sampler2D\s+(\w+)\s*;/g)].map((match) => match[1]));
  const answers = {
    shaderSource: (shader, source) => sources.set(shader, source),
    attachShader: (program, shader) => attached.set(program, [...(attached.get(program) ?? []), shader]),
    getActiveUniform: (program, index) => ({ name: [...new Set(samplers(program))][index], type: 0x8b5e, size: 1 }),
    getUniformLocation: () => ({}),
    getParameter(value) {
      const name = nameOf(value);
      if (name === "VERSION") return "WebGL 2.0";
      if (name === "SHADING_LANGUAGE_VERSION") return "WebGL GLSL ES 3.00";
      if (name === "VIEWPORT" || name === "SCISSOR_BOX") return new Int32Array([0, 0, 1, 1]);
      if (name === "RENDERER" || name === "VENDOR") return "fake";
      return 4096;
    },
    getExtension: (name) => ({ name, loseContext() {}, restoreContext() {} }),
    getSupportedExtensions: () => [],
    getContextAttributes: () => ({ alpha: true, antialias: false, depth: true, stencil: false, premultipliedAlpha: true }),
    getShaderPrecisionFormat: () => ({ precision: 23, rangeMin: 127, rangeMax: 127 }),
    getShaderParameter: () => true,
    getProgramParameter(program, value) {
      const name = nameOf(value);
      if (name === "LINK_STATUS") return true;
      return name === "ACTIVE_UNIFORMS" ? new Set(samplers(program)).size : 0;
    },
    getShaderInfoLog: () => "",
    getProgramInfoLog: () => "",
    getAttribLocation: () => -1,
    getError: () => 0,
    isContextLost: () => false,
    checkFramebufferStatus: () => constant("FRAMEBUFFER_COMPLETE"),
    readPixels(x, y, width, height, format, type, buffer) {
      buffer.set(fake.pixels?.(buffer) ?? new Array(buffer.length).fill(0));
    },
  };
  const gl = new Proxy({}, {
    get(target, name) {
      if (typeof name !== "string" || name === "then" || name === "canvas") return undefined;
      if (/^[A-Z0-9_]+$/.test(name)) return constant(name);
      return (...args) => {
        calls.push([name, args]);
        if (failing.delete(name)) throw new Error(`fake WebGL: ${name} failed`);
        if (name in answers) return answers[name](...args);
        return name.startsWith("create") ? {} : undefined;
      };
    },
    has: () => true,
  });
  fake.gl = gl;
  fake.canvas = { width: 300, height: 150, style: {}, getContext: () => gl, addEventListener() {}, removeEventListener() {} };
  return fake;
}
