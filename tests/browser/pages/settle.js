// Waiting in the browser pages on what the drawing shows, not on a count of frames or on wall time alone: a slow
// renderer (SwiftShader) takes more frames and more time to load, upload and sort, but it gets there.
import { SparkRenderer } from "@sparkjsdev/spark";

export const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

// Every SparkRenderer that has driven a sort. Imported before a page makes its view, so pano_spark_views.js wraps
// this driveSort (Spark 2.1's: it sets `sorting` while a sort runs and `sortTimeoutId` while one waits to start).
const sparks = new Set();
const driveSort = SparkRenderer.prototype.driveSort;
SparkRenderer.prototype.driveSort = function (...args) {
  sparks.add(this);
  return driveSort.apply(this, args);
};

// Whether no Spark renderer is sorting or waiting to sort.
export function sparkIdle() {
  return [...sparks].every((spark) => !spark.sorting && spark.sortTimeoutId === -1);
}

// Whether two numbers, or two arrays of numbers, differ by at most `tolerance` in every value.
export function within(tolerance = 0) {
  return (a, b) => {
    if (typeof a === "number") return Math.abs(a - b) <= tolerance;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) if (Math.abs(a[i] - b[i]) > tolerance) return false;
    return true;
  };
}

// Draws with draw() once an animation frame until ready() holds and `stable` frames in a row showed what the frame
// before showed (by `same`; draw() returns what it showed). At least `min` frames; after `max` it gives up, so a
// check fails on what was shown last instead of waiting past its timeout.
export async function drawUntilSettled(draw, { ready = sparkIdle, same = within(0), stable = 3, min = 2, max = 900 } = {}) {
  let last;
  let runs = 0;
  for (let frame = 1; frame <= max; frame += 1) {
    await nextFrame();
    const shown = draw();
    runs = frame > 1 && same(shown, last) ? runs + 1 : 0;
    last = shown;
    if (frame >= min && runs >= stable && ready()) return { shown, frames: frame, settled: true };
  }
  return { shown: last, frames: max, settled: false };
}

// The frames a VIDEO has presented since this was called.
export function presentedFrames(video) {
  let count = 0;
  const step = () => {
    count += 1;
    video.requestVideoFrameCallback(step);
  };
  video.requestVideoFrameCallback(step);
  return () => count;
}
