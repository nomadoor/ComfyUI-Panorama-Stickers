// The live ERP of Panorama mode (docs/threejs-spark-integration.md "Panorama モードの ERP の表示"): the six faces of a
// World-aligned cube drawn from the Camera's position, turned into an ERP of a requested size through the Camera's
// turn. The Output window and the Camera tab in Panorama mode show it.
//
// It uses three.js, so it belongs to the three.js chunk (web/.lazy/): only pano_three_view.js, or a module the chunk
// alone loads, may import it, and it imports nothing from web_src (docs/threejs-spark-integration.md "遅延読み込み").
// The math stays on the eager side: the caller gives the Camera's World position and its turn as the World matrix
// pano_world.js worldRotation() makes (row-major, glTF local -> World), so the one Z flip stays there.
//
// What is drawn again, and when:
// - faces: the six faces (and then the pass). A change of position, of content (state, playhead, loaded items:
//   invalidate("content")), of size, or a finished Spark sort (invalidate("splats")).
// - pass: the ERP pass alone (well under 1 ms). A turn of the Camera or a change of range: the faces are World-aligned,
//   so a turn does not change them.
// - nothing: draw() returns at once while nothing changed, so the caller may call it on every frame it draws.
//
// SPLATs (3D Gaussian Splatting): one SparkRenderer sorts once, radially from the Camera's position, for all six faces
// (the distance order from a point does not depend on the direction). The sort runs when the position or the content
// changed; it ends later in Spark's worker, whose onDirty the caller turns into invalidate("splats") and a draw. While
// the faces draw, the renderer's own updates are off (each face's camera would sort again) and its splats are sized
// for the face.
import {
  Color,
  CubeCamera,
  LinearFilter,
  Matrix3,
  Mesh,
  NoColorSpace,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  RGBAFormat,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  UnsignedByteType,
  WebGLCubeRenderTarget,
  WebGLRenderTarget,
} from "three";

// The face's side: the ERP's pixels per radian at the faces' centers (a face spans 90°, 2 tan 45° across), at most
// FACE_MAX and the GPU's cube map size.
const FACE_MIN = 16;
const FACE_MAX = 2048;

export function liveErpFaceSize(width, coverage = 360, maxCubemapSize = FACE_MAX) {
  const perRadian = width / (coverage * Math.PI / 180);
  return Math.max(FACE_MIN, Math.min(FACE_MAX, maxCubemapSize, Math.ceil(perRadian * 2)));
}

// Each ERP pixel's direction (pixel centers; longitude -coverage/2 .. coverage/2 left to right, latitude 90 .. -90 top
// to bottom; docs/render-contract.md) in the Camera's glTF frame (+X right, +Y up, forward -Z), turned into the World
// and looked up in the cube. Rows are written from the top (gl_FragCoord.y 0.5 is the top row), so the read-back and
// `texture` hold the top row first. The faces hold linear light (an sRGB target); the pass writes sRGB values.
const PASS_VERTEX = `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const PASS_FRAGMENT = `
uniform samplerCube cube;
uniform mat3 turn;
uniform vec2 size;
uniform float coverage;
float encode(float c) { return c <= 0.0031308 ? 12.92 * c : 1.055 * pow(c, 1.0 / 2.4) - 0.055; }
void main() {
  float u = gl_FragCoord.x / size.x;
  float v = gl_FragCoord.y / size.y;
  float lon = (u - 0.5) * coverage * 0.017453292519943295;
  float lat = (0.5 - v) * 3.141592653589793;
  vec3 local = vec3(cos(lat) * sin(lon), sin(lat), -cos(lat) * cos(lon));
  vec4 c = textureCube(cube, turn * local);
  gl_FragColor = vec4(encode(c.r), encode(c.g), encode(c.b), 1.0);
}`;

const samePosition = (a, b) => !!a && !!b && a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
const sameTurn = (a, b) => !!a && !!b && a.length === b.length && a.every((row, i) => row.every((x, j) => x === b[i][j]));

// renderer: the three.js WebGLRenderer to draw with (the view's own). canvas: the 2D canvas the ERP is put on, made by
// the caller (through pano_diagnostics.js's factory in the editor); it takes the requested size. near/far: the cube's
// camera planes (setView may change them).
export function createLiveErp({ renderer, canvas, near = 0.01, far = 1000 }) {
  if (!canvas) throw new Error("[PanoramaSuite] the live ERP needs a canvas to put the ERP on");
  const out = canvas;
  const context = out.getContext("2d");
  const maxCubemapSize = renderer.capabilities?.maxCubemapSize ?? FACE_MAX;

  let cubeTarget = null;
  let cubeCamera = null;
  let erpTarget = null;
  let pixels = null;
  let image = null;
  // The radial sort's viewpoint: only its position matters.
  const center = new PerspectiveCamera(90, 1, near, far);

  const passMaterial = new ShaderMaterial({
    uniforms: { cube: { value: null }, turn: { value: new Matrix3() }, size: { value: [1, 1] }, coverage: { value: 360 } },
    vertexShader: PASS_VERTEX,
    fragmentShader: PASS_FRAGMENT,
    depthTest: false,
    depthWrite: false,
  });
  const passQuad = new Mesh(new PlaneGeometry(2, 2), passMaterial);
  passQuad.frustumCulled = false;
  const passScene = new Scene();
  passScene.add(passQuad);
  const passCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const clearColor = new Color();

  const view = { position: null, turn: null, coverage: 360, near, far, width: 0, height: 0, face: 0 };
  const dirty = { faces: true, pass: true, sort: true };
  const counts = { faces: 0, passes: 0, sorts: 0 };

  function ensureTargets() {
    if (!cubeTarget || cubeTarget.width !== view.face) {
      cubeTarget?.dispose();
      cubeTarget = new WebGLCubeRenderTarget(view.face, {
        generateMipmaps: false,
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        colorSpace: SRGBColorSpace,
      });
      cubeCamera = new CubeCamera(view.near, view.far, cubeTarget);
      passMaterial.uniforms.cube.value = cubeTarget.texture;
    }
    if (!erpTarget || erpTarget.width !== view.width || erpTarget.height !== view.height) {
      erpTarget?.dispose();
      erpTarget = new WebGLRenderTarget(view.width, view.height, {
        format: RGBAFormat,
        type: UnsignedByteType,
        colorSpace: NoColorSpace,
        depthBuffer: false,
        generateMipmaps: false,
        minFilter: LinearFilter,
        magFilter: LinearFilter,
      });
      pixels = new Uint8ClampedArray(view.width * view.height * 4);
      image = new ImageData(pixels, view.width, view.height);
      out.width = view.width;
      out.height = view.height;
    }
  }

  // The Camera: position [x, y, z] in the World, turn the 3x3 row-major World matrix of its turn (worldRotation),
  // coverage the ERP's longitude range in degrees (the Camera's erp_range, 360 or 180), near/far the cube's planes.
  function setView({ position, turn, coverage = 360, near: n = view.near, far: f = view.far }) {
    if (!samePosition(position, view.position)) {
      view.position = [position[0], position[1], position[2]];
      dirty.faces = dirty.sort = true;
    }
    if (n !== view.near || f !== view.far) {
      view.near = n;
      view.far = f;
      if (cubeCamera) cubeCamera.children.forEach((camera) => { camera.near = n; camera.far = f; camera.updateProjectionMatrix(); });
      dirty.faces = true;
    }
    if (!sameTurn(turn, view.turn)) {
      view.turn = turn.map((row) => [...row]);
      dirty.pass = true;
    }
    if (coverage !== view.coverage) {
      view.coverage = coverage;
      dirty.pass = true;
      resize();
    }
  }

  // The ERP's size in pixels (the Output window's or the frame's device pixels).
  function setSize(width, height) {
    const w = Math.max(1, Math.round(width));
    const h = Math.max(1, Math.round(height));
    if (w === view.width && h === view.height) return;
    view.width = w;
    view.height = h;
    dirty.pass = true;
    resize();
  }

  function resize() {
    if (!view.width) return;
    const face = liveErpFaceSize(view.width, view.coverage, maxCubemapSize);
    if (face !== view.face) {
      view.face = face;
      dirty.faces = true;
    }
  }

  // Something drawn changed: "content" (state, playhead, loaded items; the splats are generated and sorted again) or
  // "splats" (Spark's sort ended: the faces only).
  function invalidate(what = "content") {
    dirty.faces = true;
    if (what !== "splats") dirty.sort = true;
  }

  const needsDraw = () => !!view.position && !!view.turn && view.width > 0 && (dirty.faces || dirty.pass);

  // Draws what changed. scene: what the faces show (with drawFace given, only Spark's update reads it). spark: the
  // SparkRenderer of this view (or null). aim(camera): sets a camera's layers before it draws or sorts (the view's
  // Spark layer). drawFace(camera, index): draws one face with `camera` into the current target (the cube's face
  // `index`, cleared); without it three.js renders `scene`.
  // Returns { faces, pass, sorted }: what was drawn, and the sort's promise when one started.
  function draw({ scene, spark = null, aim = null, drawFace = null } = {}) {
    const done = { faces: false, pass: false, sorted: null };
    if (!needsDraw()) return done;
    ensureTargets();
    const previous = renderer.getRenderTarget();
    const autoClear = renderer.autoClear;
    try {
      if (dirty.faces) {
        const [x, y, z] = view.position;
        cubeCamera.position.set(x, y, z);
        cubeCamera.updateMatrixWorld(true);
        if (cubeCamera.coordinateSystem !== renderer.coordinateSystem) {
          cubeCamera.coordinateSystem = renderer.coordinateSystem;
          cubeCamera.updateCoordinateSystem();
        }
        if (spark && dirty.sort) {
          center.position.set(x, y, z);
          center.near = view.near;
          center.far = view.far;
          center.updateMatrixWorld(true);
          aim?.(center);
          // Spark generates now and sorts in its worker; the faces below draw the order it has until then.
          done.sorted = spark.update({ scene, camera: center });
          done.sorted.catch(() => {});
          counts.sorts += 1;
        }
        const saved = spark && { autoUpdate: spark.autoUpdate, target: spark.target };
        if (spark) {
          spark.autoUpdate = false;
          spark.target = { width: view.face, height: view.face };
        }
        try {
          cubeCamera.children.forEach((camera, index) => {
            aim?.(camera);
            renderer.setRenderTarget(cubeTarget, index);
            // three.js works the clear color out for the target bound when it is set (sRGB values for the canvas,
            // linear for a target), and renderer.clear() uses that as it is: set again for the face, or the first
            // face is cleared to the canvas's sRGB values read as linear (the caller sets it on the canvas).
            renderer.setClearColor(renderer.getClearColor(clearColor), renderer.getClearAlpha());
            renderer.clear(true, true, false);
            renderer.autoClear = false;
            if (drawFace) drawFace(camera, index);
            else renderer.render(scene, camera);
            renderer.autoClear = autoClear;
          });
        } finally {
          if (spark) {
            spark.autoUpdate = saved.autoUpdate;
            spark.target = saved.target;
          }
        }
        counts.faces += 1;
        done.faces = true;
      }
      const t = view.turn;
      passMaterial.uniforms.turn.value.set(t[0][0], t[0][1], t[0][2], t[1][0], t[1][1], t[1][2], t[2][0], t[2][1], t[2][2]);
      passMaterial.uniforms.size.value = [view.width, view.height];
      passMaterial.uniforms.coverage.value = view.coverage;
      renderer.setRenderTarget(erpTarget);
      renderer.render(passScene, passCamera);
      renderer.readRenderTargetPixels(erpTarget, 0, 0, view.width, view.height, pixels);
      context.putImageData(image, 0, 0);
      counts.passes += 1;
      done.pass = true;
    } finally {
      renderer.autoClear = autoClear;
      renderer.setRenderTarget(previous);
    }
    dirty.faces = dirty.pass = dirty.sort = false;
    return done;
  }

  function dispose() {
    cubeTarget?.dispose();
    erpTarget?.dispose();
    passMaterial.dispose();
    passQuad.geometry.dispose();
    cubeTarget = erpTarget = cubeCamera = null;
  }

  return {
    canvas: out,
    // The ERP on the GPU (top row first), for a caller that draws it with three.js instead of the canvas.
    get texture() {
      return erpTarget?.texture ?? null;
    },
    get faceSize() {
      return view.face;
    },
    // How many face draws, passes and sorts ran (for tests and the diagnostics).
    counts,
    setView,
    setSize,
    invalidate,
    needsDraw,
    draw,
    dispose,
  };
}
