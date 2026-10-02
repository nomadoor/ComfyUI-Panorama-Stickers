// Plays, seeks and stops the editor's background VIDEO on a Timeline of frames (ADR 0019, ADR 0024).
//
// The playhead `frame` is a Timeline frame and the only one: the editor shows what onFrame reports.
// One state at a time, and each state owns the listeners and callbacks it waits on, which go away
// when it is left:
//   idle          the still shows `frame`
//   loading       the VIDEO has no frame data yet; then `then`
//   seeking       one seek in flight towards `frame`; then `then`
//   playingVideo  the VIDEO plays and its presented frames set `frame`; it loops by itself when it
//                 is as long as the Timeline
//   playingClock  a clock sets `frame` (no VIDEO, or past the VIDEO's end)
//   error         the VIDEO failed; the playhead moves without it until the source changes
// `then` is "still" (show the frame) or "play" (play from it). A seek or a stop while loading or
// seeking only changes where it goes and what follows.
//
// `video` is an HTMLVideoElement or anything with the same members: currentTime, duration, seekable,
// readyState, play(), pause(), ended, events loadeddata/seeked/pause/ended/error, and optionally
// requestVideoFrameCallback/cancelVideoFrameCallback. `clock` is { now(), requestFrame(cb),
// cancelFrame(id) }. pageHidden() tells that the page is hidden, which holds back video frame
// callbacks. fps(), span() and loop() are read when needed: the Timeline's fps, its length
// in frames, and whether playback starts over at its end (else it stops on its last frame).
// onFrame(frame) runs for each playhead move and each presented VIDEO frame; onCapture() asks the
// editor to copy the VIDEO's picture into its still; onChange() runs on each change of state.

const HAVE_CURRENT_DATA = 2;

// ADR 0024: a time shows at the nearest Timeline frame.
export function frameAtTime(time, fps) {
  return Math.floor(time * fps + 0.5);
}

export function createVideoPlayback({ video, clock, pageHidden, fps, span, loop, onFrame, onCapture, onChange }) {
  let frame = 0;
  let source = false;
  let failed = false;
  let state = { name: "idle" };
  let releases = [];

  const usable = () => source && !failed;
  const frameCallback = () => typeof video?.requestVideoFrameCallback === "function";

  function leave() {
    for (const release of releases) release();
    releases = [];
  }

  function enter(name, data = {}) {
    leave();
    state = { name, ...data };
    onChange();
    return state;
  }

  // Listeners belong to the state that adds them.
  function listen(owner, type, handler) {
    const listener = () => {
      if (state === owner) handler();
    };
    video.addEventListener(type, listener);
    releases.push(() => video.removeEventListener(type, listener));
  }

  function tick(owner, step) {
    let id = clock.requestFrame(function onTick(now) {
      if (state !== owner) return;
      step(now);
      if (state === owner) id = clock.requestFrame(onTick);
    });
    releases.push(() => clock.cancelFrame(id));
  }

  function setFrame(next) {
    frame = next;
    onFrame(frame);
  }

  function rest() {
    return enter(failed ? "error" : "idle");
  }

  function fail() {
    failed = true;
    rest();
  }

  // The browser stops a seek at the seekable end, which can be a frame before the duration.
  function seekTarget() {
    const { seekable } = video;
    const end = seekable?.length ? seekable.end(seekable.length - 1) : Number(video.duration);
    return Math.max(0, Math.min(frame / fps(), Number.isFinite(end) ? end : Infinity));
  }

  // Shows `frame` once the VIDEO can, then keeps it (still) or plays from it (play).
  function show(then) {
    if (!usable()) return then === "play" ? runClock() : rest();
    if (video.readyState < HAVE_CURRENT_DATA) {
      const owner = enter("loading", { then });
      listen(owner, "loadeddata", () => show(owner.then));
      listen(owner, "error", fail);
      return owner;
    }
    // From the VIDEO's end on, the clock plays to the Timeline's end.
    if (then === "play" && frame / fps() >= Number(video.duration)) return runClock();
    return seekTo(then, false);
  }

  // An ended VIDEO always seeks: its play() would start over from 0.
  function seekTo(then, retried) {
    const target = seekTarget();
    if (!video.ended && frameAtTime(Number(video.currentTime), fps()) === frameAtTime(target, fps())) return land(then);
    const owner = enter("seeking", { then, frame, retried });
    listen(owner, "seeked", () => {
      const landed = frameAtTime(Number(video.currentTime), fps()) === frameAtTime(seekTarget(), fps());
      const sameTarget = frame === owner.frame;
      // A landing short of the same target again is where the VIDEO stops; a new target seeks anew.
      if (landed || (sameTarget && owner.retried)) land(owner.then);
      else seekTo(owner.then, sameTarget);
    });
    listen(owner, "error", fail);
    video.currentTime = target;
    return owner;
  }

  function land(then) {
    if (then === "play") return playVideo();
    onCapture();
    return rest();
  }

  // The VIDEO goes on screen with the first frame it presents (`shown`); until then the still keeps
  // the frame before, which a VIDEO just sought or just started has not replaced yet.
  function playVideo() {
    const owner = enter("playingVideo", { presented: Number(video.currentTime), shown: false });
    // The VIDEO pauses by itself at its end, or when something else stops it.
    listen(owner, "pause", () => (video.ended ? videoEnded() : stop()));
    listen(owner, "ended", videoEnded);
    listen(owner, "error", fail);
    // A VIDEO as long as the Timeline loops by itself, without a seek and with its audio unbroken.
    if (loop() && frameAtTime(Number(video.duration), fps()) >= span()) {
      const ownLoop = video.loop;
      video.loop = true;
      releases.push(() => {
        video.loop = ownLoop;
      });
    }
    const follow = (time, presented) => {
      owner.presented = time;
      if (presented && !owner.shown) {
        owner.shown = true;
        onChange();
      }
      advance(frameAtTime(time, fps()));
    };
    if (frameCallback()) {
      let handle = video.requestVideoFrameCallback(function onVideoFrame(_now, metadata) {
        if (state !== owner) return;
        follow(Number(metadata.mediaTime), true);
        if (state === owner) handle = video.requestVideoFrameCallback(onVideoFrame);
      });
      releases.push(() => video.cancelVideoFrameCallback?.(handle));
    } else {
      tick(owner, () => follow(Number(video.currentTime), video.readyState >= HAVE_CURRENT_DATA));
    }
    Promise.resolve(video.play()).catch(() => {
      if (state === owner) stop();
    });
    return owner;
  }

  function videoEnded() {
    onCapture();
    runClock();
  }

  function runClock() {
    const owner = enter("playingClock", { startTs: clock.now(), startFrame: frame });
    tick(owner, (now) => advance(owner.startFrame + Math.floor(((now - owner.startTs) / 1000) * fps())));
    return owner;
  }

  function advance(next) {
    if (next < span()) {
      setFrame(next);
      return;
    }
    if (!loop()) {
      stopAt(span() - 1);
      return;
    }
    if (state.name === "playingVideo") {
      leave();
      video.pause();
    }
    setFrame(0);
    show("play");
  }

  function stopAt(next) {
    if (state.name === "playingVideo") {
      leave();
      video.pause();
      setFrame(Math.max(0, next));
      // The still shows the paused picture at once; the seek to the frame's time confirms it.
      onCapture();
    } else {
      setFrame(Math.max(0, next));
    }
    show("still");
  }

  // Playback stops on the picture on screen: the VIDEO frame last presented (its mediaTime, else
  // currentTime, also while the hidden page holds back the frame callbacks), and past the VIDEO's
  // end the clock's frame.
  function stop() {
    if (state.name === "loading" || state.name === "seeking") {
      state.then = "still";
      onChange();
    } else if (state.name === "playingVideo") {
      const time = frameCallback() && !pageHidden() ? state.presented : Number(video.currentTime);
      stopAt(Math.min(frameAtTime(time, fps()), span() - 1));
    } else if (state.name === "playingClock") {
      stopAt(Math.min(frame, span() - 1));
    }
  }

  function play() {
    if (playing()) return;
    if (frame >= span() - 1) setFrame(0);
    if (state.name === "loading" || state.name === "seeking") {
      state.then = "play";
      onChange();
      return;
    }
    show("play");
  }

  // A seek stops playback; while one is in flight, the next seek goes to the latest frame.
  function seek(next) {
    const target = Math.max(0, Math.round(next));
    if (state.name === "loading" || state.name === "seeking") {
      state.then = "still";
      setFrame(target);
      onChange();
      return;
    }
    if (state.name === "playingVideo") {
      leave();
      video.pause();
    }
    setFrame(target);
    show("still");
  }

  function playing() {
    return state.name === "playingVideo" || state.name === "playingClock" || state.then === "play";
  }

  return {
    get frame() {
      return frame;
    },
    get state() {
      return state.name;
    },
    get playing() {
      return playing();
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return state.name === "playingVideo" && state.shown;
    },
    play,
    stop,
    seek,
    toggle() {
      if (playing()) stop();
      else play();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(present) {
      leave();
      source = !!present;
      failed = false;
      show("still");
    },
    dispose() {
      leave();
      source = false;
      state = { name: "idle" };
    },
  };
}
