// Conversions between the panorama convention and World (ADR 0023).
//
// World is glTF: right-handed, +X right, +Y up, forward -Z. The panorama
// convention of cameraBasis is +X right, +Y up, +Z forward, so the two differ by
// a single Z flip S = diag(1, 1, -1). Keep this module in parity with
// comfyui_pano_suite/core/world.py; no other code flips Z.
//
// Angles always stay in the panorama convention. worldRotation maps a glTF
// local frame (+X right, +Y up, looking down local -Z, as three.js cameras do)
// into World, which is S * R * S for the panorama rotation R. Matrices are
// row-major 3x3 arrays; quaternions are { x, y, z, w } like camera_info.
//
// FOV: the state Camera stores the horizontal hFOV_deg like the existing cutout
// pose. Core camera_info stores the vertical fov narrowed by zoom. Converting
// between them needs the capture aspect (width / height). Core RenderSplat uses
// fov as the angle across the image's shorter side, so it is the horizontal
// angle when aspect < 1.
//
// Optional camera_info keys take core's defaults: a missing or zero fov is 35,
// a missing or zero zoom is 1, an empty quaternion falls back to the look-at
// target, and a missing cameraType is perspective.

import { DEG2RAD, RAD2DEG, cameraBasis, vec3 } from "./pano_camera_math.js";

export function panoToWorld(v) {
  return vec3(v.x, v.y, -v.z);
}

export function worldToPano(v) {
  return vec3(v.x, v.y, -v.z);
}

export function worldRotation(yawDeg, pitchDeg, rollDeg = 0) {
  const { right, up, fwd } = cameraBasis(yawDeg, pitchDeg, rollDeg);
  return [
    [right.x, up.x, -fwd.x],
    [right.y, up.y, -fwd.y],
    [-right.z, -up.z, fwd.z],
  ];
}

export function panoramaAngles(rotation) {
  // Inverse of worldRotation. At the poles yaw and roll share an axis.
  const right = worldToPano(vec3(rotation[0][0], rotation[1][0], rotation[2][0]));
  const up = worldToPano(vec3(rotation[0][1], rotation[1][1], rotation[2][1]));
  const fwd = worldToPano(vec3(-rotation[0][2], -rotation[1][2], -rotation[2][2]));
  // + 0 turns -0 into 0 so a camera looking straight up or down keeps yaw 0, not 180.
  const yaw = Math.atan2(fwd.x + 0, fwd.z + 0);
  const pitch = Math.atan2(fwd.y, Math.hypot(fwd.x, fwd.z));
  // Undo yaw before reading roll so a noisy yaw near the poles is absorbed by roll.
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const roll = Math.atan2(sy * up.z - cy * up.x, cy * right.x - sy * right.z);
  return { yawDeg: yaw * RAD2DEG, pitchDeg: pitch * RAD2DEG, rollDeg: roll * RAD2DEG };
}

export function quaternionToRotation(q) {
  const length = Math.hypot(q.x, q.y, q.z, q.w);
  const x = q.x / length;
  const y = q.y / length;
  const z = q.z / length;
  const w = q.w / length;
  return [
    [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
    [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
    [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
  ];
}

export function rotationToQuaternion(rotation) {
  // Same branches as three.js Quaternion.setFromRotationMatrix.
  const [[m11, m12, m13], [m21, m22, m23], [m31, m32, m33]] = rotation;
  const trace = m11 + m22 + m33;
  if (trace > 0) {
    const s = 0.5 / Math.sqrt(trace + 1);
    return { x: (m32 - m23) * s, y: (m13 - m31) * s, z: (m21 - m12) * s, w: 0.25 / s };
  }
  if (m11 > m22 && m11 > m33) {
    const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
    return { x: 0.25 * s, y: (m12 + m21) / s, z: (m13 + m31) / s, w: (m32 - m23) / s };
  }
  if (m22 > m33) {
    const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
    return { x: (m12 + m21) / s, y: 0.25 * s, z: (m23 + m32) / s, w: (m13 - m31) / s };
  }
  const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
  return { x: (m13 + m31) / s, y: (m23 + m32) / s, z: 0.25 * s, w: (m21 - m12) / s };
}

export function cameraFromCameraInfo(cameraInfo, aspect) {
  // Without a quaternion the camera looks at target with World +Y up, like
  // three.js lookAt. aspect is the capture's width / height.
  if (cameraInfo.cameraType === "orthographic") {
    throw new Error("An orthographic camera_info cannot be used as a Camera; use a perspective camera.");
  }
  const { position } = cameraInfo;
  let angles;
  const q = cameraInfo.quaternion;
  if (q && Object.keys(q).length > 0) {
    angles = panoramaAngles(quaternionToRotation({ x: q.x ?? 0, y: q.y ?? 0, z: q.z ?? 0, w: q.w ?? 1 }));
  } else {
    const fwd = worldToPano(vec3(
      cameraInfo.target.x - position.x,
      cameraInfo.target.y - position.y,
      cameraInfo.target.z - position.z,
    ));
    angles = {
      yawDeg: Math.atan2(fwd.x + 0, fwd.z + 0) * RAD2DEG,
      pitchDeg: Math.atan2(fwd.y, Math.hypot(fwd.x, fwd.z)) * RAD2DEG,
      rollDeg: 0,
    };
  }
  const fov = Number(cameraInfo.fov) || 35;
  const zoom = Number(cameraInfo.zoom) || 1;
  const tanHalfV = Math.tan(fov * 0.5 * DEG2RAD) / zoom;
  return {
    position: [position.x, position.y, position.z],
    yaw_deg: angles.yawDeg,
    pitch_deg: angles.pitchDeg,
    roll_deg: angles.rollDeg,
    hFOV_deg: 2 * Math.atan(tanHalfV * aspect) * RAD2DEG,
  };
}

export function cameraInfoFromCamera(camera, aspect) {
  // The target is one unit ahead of the camera.
  const rotation = worldRotation(camera.yaw_deg, camera.pitch_deg, camera.roll_deg);
  const [x, y, z] = camera.position;
  const tanHalfH = Math.tan(camera.hFOV_deg * 0.5 * DEG2RAD);
  return {
    position: { x, y, z },
    target: { x: x - rotation[0][2], y: y - rotation[1][2], z: z - rotation[2][2] },
    zoom: 1,
    cameraType: "perspective",
    quaternion: rotationToQuaternion(rotation),
    fov: 2 * Math.atan(tanHalfH / aspect) * RAD2DEG,
    aspect,
  };
}
