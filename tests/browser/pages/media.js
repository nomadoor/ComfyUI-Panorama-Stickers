// Media made in the page, so the checks need no files in the repo.

// A looping WebM recorded from an animated canvas.
// paint(g, frame, width, height) draws a frame (by default a hue that changes with a white bar that moves).
export async function makeVideo({ width = 256, height = 128, seconds = 1.5, paint: painter = null } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const g = canvas.getContext("2d");
  let frame = 0;
  const paint = () => {
    if (painter) {
      painter(g, frame, width, height);
      frame += 1;
      return;
    }
    g.fillStyle = `hsl(${(frame * 9) % 360} 60% 45%)`;
    g.fillRect(0, 0, width, height);
    g.fillStyle = "#fff";
    g.fillRect((frame * 5) % width, height / 4, width / 8, height / 2);
    frame += 1;
  };
  paint();
  const recorder = new MediaRecorder(canvas.captureStream(30), { mimeType: "video/webm" });
  const chunks = [];
  recorder.ondataavailable = (event) => chunks.push(event.data);
  const stopped = new Promise((resolve) => (recorder.onstop = resolve));
  const timer = setInterval(paint, 1000 / 30);
  recorder.start();
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  recorder.stop();
  await stopped;
  clearInterval(timer);
  const video = document.createElement("video");
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.src = URL.createObjectURL(new Blob(chunks, { type: "video/webm" }));
  await new Promise((resolve, reject) => {
    video.onloadeddata = resolve;
    video.onerror = () => reject(new Error(`video error ${video.error?.code}`));
  });
  // A recorded WebM has no duration until the end is found, and without one `loop` cannot wrap. Seeking far
  // past the end makes Chrome read the real duration.
  if (!Number.isFinite(video.duration)) {
    await new Promise((resolve) => {
      video.ondurationchange = () => Number.isFinite(video.duration) && resolve();
      video.currentTime = 1e101;
    });
    video.ondurationchange = null;
    await new Promise((resolve) => {
      video.onseeked = () => video.currentTime === 0 && resolve();
      video.currentTime = 0;
    });
    video.onseeked = null;
  }
  return video;
}

// A 3DGS PLY (positions, DC colors, opacity, log scales, rotation) with `count` splats in a ball of `radius`. Each
// splat's DC color is random, or `color` ([f_dc_0, f_dc_1, f_dc_2]) for all; `opacity` and `logScale` are the PLY's
// values (a logit and a log).
export function makeSplatPly({ count = 20000, radius = 1, seed = 1, color = null, opacity = 2, logScale = -4 } = {}) {
  const fields = ["x", "y", "z", "f_dc_0", "f_dc_1", "f_dc_2", "opacity", "scale_0", "scale_1", "scale_2", "rot_0", "rot_1", "rot_2", "rot_3"];
  const header = ["ply", "format binary_little_endian 1.0", `element vertex ${count}`, ...fields.map((f) => `property float ${f}`), "end_header", ""].join("\n");
  const head = new TextEncoder().encode(header);
  const body = new Float32Array(count * fields.length);
  let s = seed;
  const random = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
  for (let i = 0; i < count; i++) {
    let x, y, z;
    do {
      x = random() * 2 - 1;
      y = random() * 2 - 1;
      z = random() * 2 - 1;
    } while (x * x + y * y + z * z > 1);
    const dc = [random() * 2 - 1, random() * 2 - 1, random() * 2 - 1];
    body.set([x * radius, y * radius, z * radius, ...(color ?? dc), opacity, logScale, logScale, logScale, 1, 0, 0, 0], i * fields.length);
  }
  const bytes = new Uint8Array(head.length + body.byteLength);
  bytes.set(head, 0);
  bytes.set(new Uint8Array(body.buffer), head.length);
  return bytes;
}
