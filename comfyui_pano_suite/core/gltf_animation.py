"""glTF skin, morph, and node animation as three.js r184 plays it (docs/render-contract.md, "glTF のアニメーション";
ADR 0043).

The core's reader (`load_gltf`) gives the shape: each primitive's POSITION under its node's world matrix, merged in
its order. This module reads what the core drops, from the same parsed file: the nodes' rest TRS and hierarchy, the
skins, each primitive's JOINTS_0 and WEIGHTS_0, the morph targets, and the clips, from the default scene only. It
ties each of the core's primitives to a primitive of its own by value (`read_animation`), never by copying the core's
walk.

A frame is `evaluate` (CPU: the channels interpolated as three.js does, then the nodes' world matrices) and `deform`
(the device: one formula for every vertex). three.js binds a skinned mesh in its attached mode, where the mesh's
own world matrix cancels, so a skinned vertex is `Σ w B·IBM · (P + Σ m Δ)` and any other vertex `M_node(t) · (P + Σ m
Δ)`, P being the primitive's own POSITION, which the core placed at `M_node(0) · P`. Normals and tangents follow
three.js's vertex shader for the same matrices.
"""
import math
from dataclasses import dataclass

import numpy as np
import torch

PATHS = {"translation": (0, 3), "rotation": (3, 7), "scale": (7, 10)}
INTERPOLATIONS = ("LINEAR", "STEP", "CUBICSPLINE")
# Quaternion.slerpFlat lerps above this cosine.
SLERP_LERP_DOT = 0.9995
# The primitive modes the core reads as triangles.
TRIANGLE_MODES = (4, 5, 6)
# The scale three.js gives a normalized component of an animation output (GLTFLoader `getNormalizedComponentScale`).
_OUTPUT_SCALES = {np.dtype(np.int8): 1 / 127, np.dtype(np.uint8): 1 / 255, np.dtype(np.int16): 1 / 32767, np.dtype(np.uint16): 1 / 65535}


@dataclass(frozen=True, eq=False)
class Channel:
    """One animated property: node `node`'s `path` (translation, rotation, scale, or weights) keyed at `times`
    (seconds, float32) to `values` (one row per key, or three per key for CUBICSPLINE: in tangent, value, out
    tangent)."""

    node: int
    path: str
    interpolation: str
    times: np.ndarray
    values: np.ndarray


@dataclass(frozen=True, eq=False)
class Clip:
    """A glTF animation as three.js names it (`animation_<index>` without a name), with its duration: the last key
    time over its channels (`AnimationClip.resetDuration`)."""

    name: str
    duration: float
    channels: tuple


@dataclass(frozen=True, eq=False)
class Morph:
    """The morph targets of the merged vertices `start:end` (one primitive), weighted by node `node`'s weights:
    position differences (T, n, 3) and normal differences (T, n, 3) or None, in the primitive's own frame."""

    start: int
    end: int
    node: int
    positions: np.ndarray
    normals: np.ndarray | None


@dataclass(frozen=True, eq=False)
class GltfAnimation:
    """What a glTF file adds to the core's MESH of it to play its clips.

    Nodes: `parents` (N,) (-1 for a root), `order` (parents before children), and their rest `trs` (N, 10:
    translation, rotation xyzw, scale; a node given as a matrix decomposed as three.js does). `weights` maps each
    node with morph targets to its default weights. `skins` holds per skin its joint nodes and inverse bind
    matrices. Per merged vertex (the core's order): its own `positions` (V, 3), `normals` (V, 3) and `tangents`
    (V, 4) when the MESH has them, and four `joints` into the table `entries` (E, 2: node, and skin joint as
    `skin * JOINT_STRIDE + k`, or -1 for the node's own matrix) with `skin_weights` (V, 4) normalized as three.js
    does. `morphs` lists the primitives with morph targets, and `primitives` each of the core's primitives as the
    (node, primitive number, first vertex, end) it was tied to."""

    clips: tuple
    parents: np.ndarray
    order: tuple
    trs: np.ndarray
    weights: dict
    skins: tuple
    entries: np.ndarray
    positions: np.ndarray
    normals: np.ndarray | None
    tangents: np.ndarray | None
    joints: np.ndarray
    skin_weights: np.ndarray
    morphs: tuple
    primitives: tuple

    def clip_index(self, name) -> int | None:
        """The clip named `name` (None: the first), or None when no clip has that name."""
        if name is None:
            return 0
        return next((index for index, clip in enumerate(self.clips) if clip.name == name), None)


# Joints of skin s are table keys s * JOINT_STRIDE + k.
JOINT_STRIDE = 1 << 20


@dataclass(frozen=True, eq=False)
class Pose:
    """A frame of a clip: every node's world matrix (N, 4, 4), each skin's bone matrices B·IBM (J, 4, 4), and the
    morph weights of each node that has them."""

    world: np.ndarray
    skins: tuple
    weights: dict


def clip_time(seconds: float, speed: float, duration: float) -> float:
    """The time in a clip of `duration` at `seconds` of the clip frame played at `speed`: three.js's LoopRepeat
    (`AnimationAction._updateTime`), in 0 <= t < duration. A clip of no duration stays at 0."""
    time = seconds * speed
    if duration <= 0.0:
        return 0.0
    if time >= duration or time < 0.0:
        time -= duration * math.floor(time / duration)
    return time


# --- Reading.

def _float(array: np.ndarray, normalized: bool) -> np.ndarray:
    """An accessor's values as a vertex attribute reads them (BufferAttribute's denormalize)."""
    if array.dtype == np.float32:
        return array
    out = array.astype(np.float32)
    if not normalized:
        return out
    info = np.iinfo(array.dtype)
    return np.maximum(out / info.max, -1.0) if info.min < 0 else out / info.max


def _output(array: np.ndarray, normalized: bool) -> np.ndarray:
    """An animation output as GLTFLoader reads it (`_getArrayFromAccessor`)."""
    if normalized and array.dtype in _OUTPUT_SCALES:
        return (array.astype(np.float64) * _OUTPUT_SCALES[array.dtype]).astype(np.float32)
    return array.astype(np.float32)


def _core_local(node: dict) -> np.ndarray:
    """A node's local matrix in float32 by the core's arithmetic, so that its world matrix, and the vertices under it,
    come out bit for bit as the core's."""
    if "matrix" in node:
        return np.array(node["matrix"], np.float32).reshape(4, 4).T
    x, y, z, w = node.get("rotation", (0.0, 0.0, 0.0, 1.0))
    rotation = np.array([
        [1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
        [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
        [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)],
    ], dtype=np.float32)
    matrix = np.eye(4, dtype=np.float32)
    matrix[:3, :3] = rotation * np.array(node.get("scale", (1.0, 1.0, 1.0)), np.float32)
    matrix[:3, 3] = node.get("translation", (0.0, 0.0, 0.0))
    return matrix


def _decompose(elements) -> np.ndarray:
    """A column-major matrix as three.js's Matrix4.decompose gives it: translation, rotation xyzw, scale."""
    m = np.array(elements, np.float64).reshape(4, 4).T
    sx, sy, sz = (float(np.linalg.norm(m[:3, c])) for c in range(3))
    if np.linalg.det(m) < 0:
        sx = -sx
    r = m[:3, :3] / np.array([sx, sy, sz])
    return np.array([*m[:3, 3], *_quaternion_from_matrix(r), sx, sy, sz])


def _quaternion_from_matrix(r: np.ndarray) -> tuple:
    """three.js's Quaternion.setFromRotationMatrix."""
    m11, m12, m13 = r[0]
    m21, m22, m23 = r[1]
    m31, m32, m33 = r[2]
    trace = m11 + m22 + m33
    if trace > 0:
        s = 0.5 / math.sqrt(trace + 1.0)
        return (m32 - m23) * s, (m13 - m31) * s, (m21 - m12) * s, 0.25 / s
    if m11 > m22 and m11 > m33:
        s = 2.0 * math.sqrt(1.0 + m11 - m22 - m33)
        return 0.25 * s, (m12 + m21) / s, (m13 + m31) / s, (m32 - m23) / s
    if m22 > m33:
        s = 2.0 * math.sqrt(1.0 + m22 - m11 - m33)
        return (m12 + m21) / s, 0.25 * s, (m23 + m32) / s, (m13 - m31) / s
    s = 2.0 * math.sqrt(1.0 + m33 - m11 - m22)
    return (m13 + m31) / s, (m23 + m32) / s, 0.25 * s, (m21 - m12) / s


def _scene_nodes(gltf: dict) -> list:
    """The nodes under the default scene (or, without scenes, the nodes no node has as a child), parents first."""
    nodes = gltf.get("nodes", [])
    scenes = gltf.get("scenes")
    if scenes:
        roots = scenes[gltf.get("scene", 0)].get("nodes", [])
    else:
        children = {child for node in nodes for child in node.get("children", [])}
        roots = [index for index in range(len(nodes)) if index not in children]
    seen, order, stack = set(), [], list(reversed(roots))
    while stack:
        index = stack.pop()
        if index in seen:
            continue
        seen.add(index)
        order.append(index)
        stack.extend(reversed(nodes[index].get("children", [])))
    return order


def has_animation(gltf: dict) -> bool:
    """Whether a parsed glTF has a clip with a channel that targets a node."""
    return any("node" in channel.get("target", {}) for animation in gltf.get("animations", []) for channel in animation.get("channels", []))


def read_animation(gltf: dict, buffers: list, prims: list, read_accessor) -> GltfAnimation:
    """The animation of a parsed glTF (`gltf`, `buffers`) whose primitives the core's `load_gltf` gave as `prims`,
    read with the core's `read_accessor(gltf, buffers, index) -> (array, normalized)`.

    Each of the core's primitives is tied to a primitive of a node of the default scene whose `M_node(0) · POSITION`
    equals the core's positions exactly in float32 (the core's own arithmetic). A ValueError says which primitive
    has none: the core then read the file differently, and its shape cannot be animated."""
    nodes = gltf.get("nodes", [])
    meshes = gltf.get("meshes", [])

    def accessor(index):
        return read_accessor(gltf, buffers, index)

    parents = np.full(len(nodes), -1, dtype=np.int64)
    for index, node in enumerate(nodes):
        for child in node.get("children", []):
            parents[child] = index
    order = []
    visited = set()

    for index in range(len(nodes)):
        # Parents before children, walked without recursion so a deep chain does not overflow the stack.
        chain = []
        while index >= 0 and index not in visited:
            visited.add(index)
            chain.append(index)
            index = int(parents[index])
        order.extend(reversed(chain))
    trs = np.zeros((len(nodes), 10))
    for index, node in enumerate(nodes):
        if "matrix" in node:
            trs[index] = _decompose(node["matrix"])
        else:
            trs[index] = [*node.get("translation", (0.0, 0.0, 0.0)), *node.get("rotation", (0.0, 0.0, 0.0, 1.0)), *node.get("scale", (1.0, 1.0, 1.0))]

    # The candidates: every triangle primitive of a mesh node in the default scene, at its rest world matrix by the
    # core's arithmetic, keyed by its positions' bytes.
    rest = {}
    candidates = {}
    for index in _scene_nodes(gltf):
        node = nodes[index]
        parent = int(parents[index])
        rest[index] = (rest[parent] if parent in rest else np.eye(4, dtype=np.float32)) @ _core_local(node)
        if "mesh" not in node:
            continue
        linear = rest[index][:3, :3]
        for number, primitive in enumerate(meshes[node["mesh"]].get("primitives", [])):
            attributes = primitive.get("attributes", {})
            if primitive.get("mode", 4) not in TRIANGLE_MODES or "POSITION" not in attributes:
                continue
            local = _float(*accessor(attributes["POSITION"]))[:, :3]
            placed = np.ascontiguousarray(local @ linear.T + rest[index][:3, 3], np.float32)
            candidates.setdefault(placed.tobytes(), []).append((index, number, local))

    skins = tuple(
        (np.asarray(skin["joints"], dtype=np.int64),
         _float(*accessor(skin["inverseBindMatrices"])).reshape(-1, 4, 4).transpose(0, 2, 1).astype(np.float64)
         if "inverseBindMatrices" in skin else np.tile(np.eye(4), (len(skin["joints"]), 1, 1)))
        for skin in gltf.get("skins", [])
    )
    entries, entry_of = [], {}

    def entry(key):
        if key not in entry_of:
            entry_of[key] = len(entries)
            entries.append(key)
        return entry_of[key]

    positions, normals, tangents, joints, skin_weights, morphs, tied = [], [], [], [], [], [], []
    with_normals = all(prim["normals"] is not None for prim in prims)
    with_tangents = with_normals and all(prim["tangents"] is not None for prim in prims)
    used = set()
    start = 0
    for number, prim in enumerate(prims):
        matches = [match for match in candidates.get(np.ascontiguousarray(prim["positions"], np.float32).tobytes(), []) if match[:2] not in used]
        if not matches:
            raise ValueError(f"primitive {number} of the core's reading of this glTF is no primitive of its default scene at its rest pose, "
                             "so its animation cannot be drawn")
        node_index, primitive_number, local = matches[0]
        used.add((node_index, primitive_number))
        node = nodes[node_index]
        primitive = meshes[node["mesh"]]["primitives"][primitive_number]
        attributes = primitive["attributes"]
        count = local.shape[0]
        positions.append(local)
        if with_normals:
            normals.append(_float(*accessor(attributes["NORMAL"]))[:count, :3])
        if with_tangents:
            # The core's w, which it flips under a mirroring node; xyz are turned again for each frame.
            tangents.append(np.concatenate([_float(*accessor(attributes["TANGENT"]))[:count, :3], prim["tangents"][:, 3:4]], axis=1))
        if "skin" in node and "JOINTS_0" in attributes and "WEIGHTS_0" in attributes:
            skin = node["skin"]
            indices = accessor(attributes["JOINTS_0"])[0][:count].astype(np.int64)
            indices = np.where(indices < len(skins[skin][0]), indices, 0)
            table = np.array([entry((node_index, skin * JOINT_STRIDE + k)) for k in range(len(skins[skin][0]))], dtype=np.int64)
            joints.append(table[indices])
            skin_weights.append(_skin_weights(*accessor(attributes["WEIGHTS_0"]), count))
        else:
            joints.append(np.full((count, 4), entry((node_index, -1)), dtype=np.int64))
            skin_weights.append(np.tile(np.array([1.0, 0.0, 0.0, 0.0], np.float32), (count, 1)))
        targets = primitive.get("targets") or []
        if targets:
            position_deltas = np.stack([_float(*accessor(target["POSITION"]))[:count, :3] if "POSITION" in target else np.zeros((count, 3), np.float32)
                                        for target in targets])
            normal_deltas = None
            if with_normals and any("NORMAL" in target for target in targets):
                normal_deltas = np.stack([_float(*accessor(target["NORMAL"]))[:count, :3] if "NORMAL" in target else np.zeros((count, 3), np.float32)
                                          for target in targets])
            morphs.append(Morph(start, start + count, node_index, position_deltas, normal_deltas))
        tied.append((node_index, primitive_number, start, start + count))
        start += count

    weights = {}
    for node_index in {morph.node for morph in morphs}:
        node = nodes[node_index]
        count = len(meshes[node["mesh"]]["primitives"][0].get("targets", []))
        defaults = node.get("weights", meshes[node["mesh"]].get("weights", [0.0] * count))
        weights[node_index] = np.array(list(defaults)[:count] + [0.0] * max(0, count - len(defaults)), np.float64)

    clips = []
    for number, animation in enumerate(gltf.get("animations", [])):
        channels = []
        for channel in animation.get("channels", []):
            target = channel.get("target", {})
            if "node" not in target or target.get("path") not in (*PATHS, "weights"):
                continue
            if target["path"] == "weights" and target["node"] not in weights:
                # three.js makes no track for weights of a node without morph targets in the scene.
                continue
            sampler = animation["samplers"][channel["sampler"]]
            interpolation = sampler.get("interpolation", "LINEAR")
            times = _float(*accessor(sampler["input"])).reshape(-1)
            values = _output(*accessor(sampler["output"]))
            if target["path"] == "weights":
                values = values.reshape(-1, len(weights[target["node"]]))
            channels.append(Channel(target["node"], target["path"], interpolation if interpolation in INTERPOLATIONS else "LINEAR", times, values))
        duration = max((float(channel.times[-1]) for channel in channels if channel.times.size), default=0.0)
        clips.append(Clip(animation.get("name") or f"animation_{number}", duration, tuple(channels)))

    return GltfAnimation(
        tuple(clips), parents, tuple(order), trs, weights, skins, np.array(entries, dtype=np.int64).reshape(-1, 2),
        np.concatenate(positions), np.concatenate(normals) if with_normals else None, np.concatenate(tangents) if with_tangents else None,
        np.concatenate(joints), np.concatenate(skin_weights), tuple(morphs), tuple(tied),
    )


def _skin_weights(array: np.ndarray, normalized: bool, count: int) -> np.ndarray:
    """WEIGHTS_0 as three.js's `normalizeSkinWeights` leaves them: divided by their sum of magnitudes (joint 0 alone
    when it is 0), and stored back into the attribute, so normalized integers round to their steps again."""
    weights = _float(array[:count], normalized).astype(np.float64)
    total = np.abs(weights).sum(1, keepdims=True)
    weights = np.where(total > 0.0, weights / np.where(total > 0.0, total, 1.0), np.array([1.0, 0.0, 0.0, 0.0]))
    if normalized and array.dtype != np.float32:
        steps = np.iinfo(array.dtype).max
        weights = np.floor(weights * steps + 0.5) / steps
    return weights.astype(np.float32)


# --- A frame.

def _sample(channel: Channel, time: float) -> np.ndarray:
    """The channel's value at `time` as three.js's interpolants give it, rounded to float32 as their result buffers
    are: the first value before the first key, the last after the last, STEP the key at or before, LINEAR a lerp (a
    rotation by `Quaternion.slerpFlat`), and CUBICSPLINE a Hermite spline (a rotation normalized after it)."""
    times = channel.times
    cubic = channel.interpolation == "CUBICSPLINE"
    values = channel.values.reshape(len(times), 3, -1)[:, 1] if cubic else channel.values
    after = int(np.searchsorted(times, time, side="right"))
    if after == 0:
        return values[0].astype(np.float64)
    if after >= len(times) or channel.interpolation == "STEP":
        return values[after - 1].astype(np.float64)
    t0, t1 = float(times[after - 1]), float(times[after])
    if cubic:
        keys = channel.values.reshape(len(times), 3, -1).astype(np.float64)
        span = t1 - t0
        p = (time - t0) / span
        pp = p * p
        ppp = pp * p
        s2 = -2 * ppp + 3 * pp
        s3 = ppp - pp
        s0 = 1 - s2
        s1 = s3 - pp + p
        value = (s0 * keys[after - 1, 1] + s1 * keys[after - 1, 2] * span + s2 * keys[after, 1] + s3 * keys[after, 0] * span).astype(np.float32).astype(np.float64)
        if channel.path == "rotation":
            length = math.sqrt(float((value * value).sum()))
            value = value / length if length > 0.0 else np.array([0.0, 0.0, 0.0, 1.0])
        return value.astype(np.float32).astype(np.float64)
    alpha = (time - t0) / (t1 - t0)
    v0, v1 = values[after - 1].astype(np.float64), values[after].astype(np.float64)
    if channel.path == "rotation":
        return _slerp_flat(v0, v1, alpha).astype(np.float32).astype(np.float64)
    return (v0 * (1.0 - alpha) + v1 * alpha).astype(np.float32).astype(np.float64)


def _slerp_flat(q0: np.ndarray, q1: np.ndarray, t: float) -> np.ndarray:
    """three.js r184's Quaternion.slerpFlat: the shorter arc, and a normalized lerp when the two are close."""
    if np.array_equal(q0, q1):
        return q0
    dot = float(q0 @ q1)
    if dot < 0.0:
        q1, dot = -q1, -dot
    s = 1.0 - t
    if dot < SLERP_LERP_DOT:
        theta = math.acos(dot)
        sin = math.sin(theta)
        return q0 * (math.sin(s * theta) / sin) + q1 * (math.sin(t * theta) / sin)
    q = q0 * s + q1 * t
    return q * (1.0 / math.sqrt(float(q @ q)))


def _compose(trs: np.ndarray) -> np.ndarray:
    """three.js's Matrix4.compose of (N, 10) translation, rotation xyzw, scale, as (N, 4, 4)."""
    x, y, z, w = trs[:, 3], trs[:, 4], trs[:, 5], trs[:, 6]
    x2, y2, z2 = x + x, y + y, z + z
    xx, xy, xz = x * x2, x * y2, x * z2
    yy, yz, zz = y * y2, y * z2, z * z2
    wx, wy, wz = w * x2, w * y2, w * z2
    sx, sy, sz = trs[:, 7], trs[:, 8], trs[:, 9]
    m = np.zeros((trs.shape[0], 4, 4))
    m[:, 0, 0], m[:, 1, 0], m[:, 2, 0] = (1 - (yy + zz)) * sx, (xy + wz) * sx, (xz - wy) * sx
    m[:, 0, 1], m[:, 1, 1], m[:, 2, 1] = (xy - wz) * sy, (1 - (xx + zz)) * sy, (yz + wx) * sy
    m[:, 0, 2], m[:, 1, 2], m[:, 2, 2] = (xz + wy) * sz, (yz - wx) * sz, (1 - (xx + yy)) * sz
    m[:, :3, 3] = trs[:, :3]
    m[:, 3, 3] = 1.0
    return m


def evaluate(animation: GltfAnimation, clip: int, time: float) -> Pose:
    """Clip `clip` at `time` seconds of the clip (`clip_time`): its channels over the rest TRS and default weights,
    each node's world matrix from its parents, and each skin's bone matrices."""
    trs = animation.trs.copy()
    weights = {node: values.copy() for node, values in animation.weights.items()}
    for channel in animation.clips[clip].channels:
        value = _sample(channel, time)
        if channel.path == "weights":
            weights[channel.node] = value
        else:
            low, high = PATHS[channel.path]
            trs[channel.node, low:high] = value
    local = _compose(trs)
    world = np.empty_like(local)
    for index in animation.order:
        parent = animation.parents[index]
        world[index] = local[index] if parent < 0 else world[parent] @ local[index]
    skins = tuple(world[joints] @ inverse for joints, inverse in animation.skins)
    return Pose(world, skins, weights)


def _tables(animation: GltfAnimation, pose: Pose) -> tuple:
    """Per table entry, the matrix of positions (E, 3, 4) and of normals (E, 3, 3) that three.js's vertex shader
    applies: a skin joint's B·IBM (the mesh's own matrix cancels in the attached bind mode) with the normal matrix
    inverse(M)ᵀ·inverse(M)·(B·IBM) of its mesh's world matrix M, or a node's own world matrix with inverse(M)ᵀ."""
    positions = np.empty((len(animation.entries), 3, 4))
    normals = np.empty((len(animation.entries), 3, 3))
    for index, (node, joint) in enumerate(animation.entries):
        inverse = np.linalg.inv(pose.world[node][:3, :3])
        if joint < 0:
            positions[index] = pose.world[node][:3]
            normals[index] = inverse.T
        else:
            bone = pose.skins[joint // JOINT_STRIDE][joint % JOINT_STRIDE]
            positions[index] = bone[:3]
            normals[index] = inverse.T @ inverse @ bone[:3, :3]
    return positions.astype(np.float32), normals.astype(np.float32)


def upload(animation: GltfAnimation, device) -> dict:
    """The per-vertex values `deform` reads, on `device`."""
    def move(array):
        return None if array is None else torch.from_numpy(np.ascontiguousarray(array)).to(device)

    return {
        "positions": move(animation.positions),
        "normals": move(animation.normals),
        "tangents": move(animation.tangents),
        "joints": move(animation.joints),
        "weights": move(animation.skin_weights),
        "morphs": [(morph, move(morph.positions), move(morph.normals)) for morph in animation.morphs],
    }


def _apply(matrices: torch.Tensor, vectors: torch.Tensor) -> torch.Tensor:
    """(V, 3, k) matrices on (V, k) vectors as elementwise sums, which global precision settings (TF32) do not change."""
    return (matrices * vectors[:, None, :]).sum(-1)


def deform(animation: GltfAnimation, uploaded: dict, pose: Pose) -> tuple:
    """The merged vertices (V, 3) at `pose` in the core's frame, with their normals (V, 3) and tangents (V, 4) when
    the MESH has them (None otherwise), from `upload`'s values on their device."""
    device = uploaded["positions"].device
    position_table, normal_table = (torch.from_numpy(table).to(device) for table in _tables(animation, pose))
    local = uploaded["positions"].clone()
    normals = None if uploaded["normals"] is None else uploaded["normals"].clone()
    for morph, position_deltas, normal_deltas in uploaded["morphs"]:
        weights = torch.tensor(pose.weights[morph.node], dtype=torch.float32, device=device)
        local[morph.start:morph.end] += (position_deltas * weights[:, None, None]).sum(0)
        if normals is not None and normal_deltas is not None:
            normals[morph.start:morph.end] += (normal_deltas * weights[:, None, None]).sum(0)
    joints, weights = uploaded["joints"], uploaded["weights"]
    # The four influences one at a time, so that a vertex holds one blended matrix and not four.
    blend = sum(position_table[joints[:, k]] * weights[:, k, None, None] for k in range(4))
    vertices = _apply(blend[..., :3], local) + blend[..., 3]
    if normals is not None:
        normal_blend = sum(normal_table[joints[:, k]] * weights[:, k, None, None] for k in range(4))
        normals = torch.nn.functional.normalize(_apply(normal_blend, normals), dim=-1)
    tangents = uploaded["tangents"]
    if tangents is not None:
        tangents = torch.cat([torch.nn.functional.normalize(_apply(blend[..., :3], tangents[:, :3]), dim=-1), tangents[:, 3:]], dim=-1)
    return vertices, normals, tangents
