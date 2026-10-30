// A test scene for the live ERP (web_src/pano_live_erp.js), built in the page: a mesh room with colored boxes at known
// directions, a background ERP on a sky sphere with a magenta dot, and a cyan cluster of Gaussian splats. Shared by
// tests/browser/pages/live_erp.js (orientation and redraws) and the Camera tab scene (its Panorama mode).
import * as THREE from "three";
import { cameraBasis } from "../../../web_src/pano_camera_math.js";
import { panoToWorld } from "../../../web_src/pano_world.js";

const DEG = Math.PI / 180;

// A direction in the panorama convention (yaw right, pitch up) times a distance, as a World point [x, y, z].
export function panoPoint(yawDeg, pitchDeg, distance) {
  const yaw = yawDeg * DEG;
  const pitch = pitchDeg * DEG;
  const p = panoToWorld({ x: Math.cos(pitch) * Math.sin(yaw) * distance, y: Math.sin(pitch) * distance, z: Math.cos(pitch) * Math.cos(yaw) * distance });
  return [p.x, p.y, p.z];
}

// [name, yaw, pitch, distance, rgb]: boxes, "sky" (a dot on the background, at infinity), "splat" (a splat cluster).
export const MARKERS = [
  ["front", 0, 0, 4, [255, 0, 0]],
  ["right", 90, 0, 4, [0, 255, 0]],
  ["back", 180, 0, 4, [0, 0, 255]],
  ["left", -90, 0, 4, [255, 255, 0]],
  ["sky", -45, 30, Infinity, [255, 0, 255]],
  ["splat", 135, 20, 3.5, [0, 255, 255]],
];

function backgroundErp() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  g.fillStyle = "#28344a";
  g.fillRect(0, 0, 1024, 512);
  g.strokeStyle = "#5a6878";
  g.lineWidth = 2;
  for (let lon = -180; lon <= 180; lon += 30) {
    const x = ((lon + 180) / 360) * 1024;
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 512); g.stroke();
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const y = ((90 - lat) / 180) * 512;
    g.beginPath(); g.moveTo(0, y); g.lineTo(1024, y); g.stroke();
  }
  const [, lon, lat] = MARKERS.find((m) => m[0] === "sky");
  g.fillStyle = "#ff00ff";
  g.beginPath();
  g.arc(((lon + 180) / 360) * 1024, ((90 - lat) / 180) * 512, 9, 0, Math.PI * 2);
  g.fill();
  return canvas;
}

// The scene and its sky sphere (move it to the viewpoint: it stands for the background at infinity).
export function buildScene() {
  const scene = new THREE.Scene();
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.MeshBasicMaterial({ color: 0x3a3a3a, side: THREE.DoubleSide }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.5;
  scene.add(floor);
  const grid = new THREE.GridHelper(12, 24, 0x7a7a7a, 0x555555);
  grid.position.y = -1.49;
  scene.add(grid);
  const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x8a7a6a });
  for (const [x, z, w, d] of [[0, -6, 12, 0.2], [0, 6, 12, 0.2], [-6, 0, 0.2, 12], [6, 0, 0.2, 12]]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, 2, d), wallMaterial);
    wall.position.set(x, -0.5, z);
    scene.add(wall);
  }
  for (const [name, yaw, pitch, distance, rgb] of MARKERS) {
    if (!Number.isFinite(distance) || name === "splat") continue;
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), new THREE.MeshBasicMaterial({ color: new THREE.Color(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255) }));
    box.position.set(...panoPoint(yaw, pitch, distance));
    scene.add(box);
  }
  const texture = new THREE.CanvasTexture(backgroundErp());
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(100, 64, 32),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { map: { value: texture } },
      vertexShader: `varying vec3 vDir; void main() { vDir = (modelMatrix * vec4(position, 0.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D map; varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          vec3 p = vec3(d.x, d.y, -d.z);
          float lon = atan(p.x, p.z);
          float lat = asin(clamp(p.y, -1.0, 1.0));
          gl_FragColor = texture2D(map, vec2((lon + 3.14159265) / 6.2831853, (1.5707963 - lat) / 3.14159265));
          #include <colorspace_fragment>
        }`,
    }),
  );
  sky.renderOrder = -1;
  sky.frustumCulled = false;
  scene.add(sky);
  return { scene, sky };
}

// The splat cloud: a cyan cluster at the "splat" marker and a gray band around the room.
export function buildSplats(Spark, count = 20000) {
  const packed = new Spark.PackedSplats({ maxSplats: count });
  let s = 7;
  const random = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  const center = new THREE.Vector3();
  const scales = new THREE.Vector3();
  const quaternion = new THREE.Quaternion();
  const color = new THREE.Color();
  const cluster = Math.min(3000, Math.floor(count / 4));
  const [, cy, cp, cd] = MARKERS.find((m) => m[0] === "splat");
  const c = panoPoint(cy, cp, cd);
  for (let i = 0; i < count; i += 1) {
    if (i < cluster) {
      let x, y, z;
      do { x = random() * 2 - 1; y = random() * 2 - 1; z = random() * 2 - 1; } while (x * x + y * y + z * z > 1);
      center.set(c[0] + x * 0.2, c[1] + y * 0.2, c[2] + z * 0.2);
      scales.setScalar(0.04);
      color.setRGB(0, 1, 1);
      quaternion.identity();
      packed.pushSplat(center, scales, quaternion, 1, color);
      continue;
    }
    const a = random() * Math.PI * 2;
    const r = 4.6 + random() * 1.2;
    center.set(Math.sin(a) * r, -1.5 + random() * 2.0, Math.cos(a) * r);
    scales.set(0.02 + random() * 0.05, 0.02 + random() * 0.05, 0.02 + random() * 0.05);
    quaternion.set(random() - 0.5, random() - 0.5, random() - 0.5, random() - 0.5).normalize();
    color.setRGB(0.3 + random() * 0.4, 0.3 + random() * 0.4, 0.3 + random() * 0.4);
    packed.pushSplat(center, scales, quaternion, 0.6 + random() * 0.4, color);
  }
  return packed;
}

// Where a Scene direction (panorama convention) seen from a Camera of `rotation` lands on a width x height ERP of
// `coverage` degrees (pixel centers at .5), by pano_camera_math.js cameraBasis: the expected answer.
export function expectedPixel(dirPano, rotation, width, height, coverage = 360) {
  const { right, up, fwd } = cameraBasis(rotation.yaw, rotation.pitch, rotation.roll);
  const l = Math.hypot(dirPano.x, dirPano.y, dirPano.z);
  const d = { x: dirPano.x / l, y: dirPano.y / l, z: dirPano.z / l };
  const x = d.x * right.x + d.y * right.y + d.z * right.z;
  const y = d.x * up.x + d.y * up.y + d.z * up.z;
  const z = d.x * fwd.x + d.y * fwd.y + d.z * fwd.z;
  const lon = Math.atan2(x, z) / DEG;
  const lat = Math.asin(Math.max(-1, Math.min(1, y))) / DEG;
  return { x: (lon / coverage + 0.5) * width, y: ((90 - lat) / 180) * height, lon, lat };
}
