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
// cancelFrame(id) }. fps(), span() and loop() are read when needed: the Timeline's fps, its length
// in frames, and whether playback starts over at its end (else it stops on its last frame). place() is
// read when needed too: null for a VIDEO whose first frame is at Timeline frame 0, or where a Clip range puts
// it (the background's, backgroundPlace in pano_port_media.js): { origin, start, end }, its first frame at
// Timeline frame `origin`, shown from `start` until `end` (Infinity: its own end). Outside that and past its end
// nothing of the VIDEO shows: playback runs on the clock there and hands over to the VIDEO where it starts, and
// the still is not sought there (the editor shows bg_color).
// onFrame(frame) runs for each playhead move and each presented VIDEO frame; onCapture() asks the
// editor to copy the VIDEO's picture into its still; onChange() runs on each change of state.

const HAVE_CURRENT_DATA = 2;

// ADR 0024: a frame's time (a PTS, such as a presented frame's mediaTime) is at the nearest Timeline frame.
export function frameAtTime(time, fps) {
  return Math.floor(time * fps + 0.5);
}

// ADR 0024: at a time between frames, such as where a VIDEO paused, the VIDEO shows its last frame
// with PTS <= the time. A time a hair before a PTS (1/1000 frame) counts as that frame.
export function frameShownAt(time, fps) {
  return Math.floor(time * fps + 1e-3);
}

export function createVideoPlayback({ video, clock, fps, span, loop, place = () => null, onFrame, onCapture, onChange }) {
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

  const origin = () => place()?.origin ?? 0;
  // The VIDEO's time at Timeline frame `at`.
  const timeAt = (at) => (at - origin()) / fps();

  // Whether the VIDEO shows at Timeline frame `at`: inside its place, before its end.
  function inVideo(at) {
    const { start = 0, end = Infinity } = place() ?? {};
    return at >= start && at < end && !(timeAt(at) >= Number(video.duration));
  }

  function fail() {
    failed = true;
    rest();
  }

  // The browser stops a seek at the seekable end, which can be a frame before the duration.
  function seekTarget() {
    const { seekable } = video;
    const end = seekable?.length ? seekable.end(seekable.length - 1) : Number(video.duration);
    return Math.max(0, Math.min(timeAt(frame), Number.isFinite(end) ? end : Infinity));
  }

  // Shows `frame` once the VIDEO can, then keeps it (still) or plays from it (play).
  function show(then) {
    if (!usable()) return then === "play" ? runClock() : rest();
    // A VIDEO seeking has no current frame either; its seek lands with `seeked`, not `loadeddata`.
    if (video.readyState < HAVE_CURRENT_DATA && !video.seeking) {
      const owner = enter("loading", { then });
      listen(owner, "loadeddata", () => show(owner.then));
      listen(owner, "error", fail);
      return owner;
    }
    // From the VIDEO's end on, and outside its place, the clock plays to the Timeline's end.
    if (then === "play" && !inVideo(frame)) return runClock();
    // A placed VIDEO shows nothing outside its place, so the still is left as it is.
    if (place() && !inVideo(frame)) return rest();
    return seekTo(then, false);
  }

  // An ended VIDEO always seeks: its play() would start over from 0. A seek already in flight to the target (the
  // clock waiting a placed VIDEO on its start) is waited for, not sent again. The target is the VIDEO's time, which
  // a moved place changes at the same frame.
  function seekTo(then, retried) {
    const target = seekTarget();
    const there = frameAtTime(Number(video.currentTime), fps()) === frameAtTime(target, fps());
    if (!video.ended && !video.seeking && there) return land(then);
    const owner = enter("seeking", { then, target, retried });
    listen(owner, "seeked", () => {
      const landed = frameAtTime(Number(video.currentTime), fps()) === frameAtTime(seekTarget(), fps());
      const sameTarget = seekTarget() === owner.target;
      // A landing short of the same target again is where the VIDEO stops; a new target seeks anew.
      if (landed || (sameTarget && owner.retried)) land(owner.then);
      else seekTo(owner.then, sameTarget);
    });
    listen(owner, "error", fail);
    if (!(video.seeking && there)) video.currentTime = target;
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
    const owner = enter("playingVideo", { shown: false });
    // The VIDEO pauses by itself at its end, or when something else stops it.
    listen(owner, "pause", () => (video.ended ? videoEnded() : stop()));
    listen(owner, "ended", videoEnded);
    listen(owner, "error", fail);
    // A VIDEO as long as the Timeline loops by itself, without a seek and with its audio unbroken.
    if (loop() && !place() && frameAtTime(Number(video.duration), fps()) >= span()) {
      const ownLoop = video.loop;
      video.loop = true;
      releases.push(() => {
        video.loop = ownLoop;
      });
    }
    const follow = (time, presented) => {
      if (presented && !owner.shown) {
        owner.shown = true;
        onChange();
      }
      // The Timeline's time of the VIDEO's time; an upstream background's origin can fall between frames.
      advance(frameAtTime(time + origin() / fps(), fps()));
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
    // A VIDEO placed later on the Timeline waits on the time it starts at, so it plays from there without a seek.
    const start = place()?.start ?? 0;
    if (usable() && frame < start && video.readyState >= HAVE_CURRENT_DATA) video.currentTime = Math.max(0, timeAt(start));
    // A tick's time is its rendering frame's start, which is before clock.now() when the clock starts inside a
    // VIDEO frame callback: the clock never runs before where it started, which would step the playhead back.
    tick(owner, (now) => advance(owner.startFrame + Math.floor((Math.max(0, now - owner.startTs) / 1000) * fps())));
    return owner;
  }

  function advance(next) {
    if (next < span()) {
      // A placed VIDEO hands over to the clock where its place ends, and the clock to it where it starts.
      if (place() && state.name === "playingVideo" && !inVideo(next)) {
        leave();
        video.pause();
        setFrame(next);
        runClock();
        return;
      }
      // The clock hands over only when it moves forward into the VIDEO's place: on the VIDEO's last frame, which
      // it starts from when the VIDEO ends, the VIDEO would end again at once.
      const entering = place() && state.name === "playingClock" && usable()
        && next > frame && !inVideo(frame) && inVideo(next);
      setFrame(next);
      if (entering) show("play");
      return;
    }
    // A Timeline of one frame has nothing to loop.
    if (!loop() || span() <= 1) {
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

  // Playback stops on the picture on screen. The paused VIDEO shows the frame at its currentTime,
  // which can be frames past the last frame callback (callbacks lag or stop for a hidden page or an
  // element not composited), so the playhead and the still both take that frame and nothing seeks.
  // Past the VIDEO's end the clock's frame stays.
  function stop() {
    if (state.name === "loading" || state.name === "seeking") {
      state.then = "still";
      onChange();
    } else if (state.name === "playingVideo") {
      leave();
      video.pause();
      const shown = frameShownAt(Number(video.currentTime) + origin() / fps(), fps());
      setFrame(Math.min(shown, span() - 1));
      onCapture();
      if (frame === shown) rest();
      else show("still");
    } else if (state.name === "playingClock") {
      stopAt(Math.min(frame, span() - 1));
    }
  }

  // A Timeline of one frame has nothing to play.
  function play() {
    if (playing() || span() <= 1) return;
    if (frame >= span() - 1) setFrame(0);
    if (state.name === "loading" || state.name === "seeking") {
      state.then = "play";
      onChange();
      return;
    }
    show("play");
  }

  // A seek stops playback; while one is in flight, the next seek goes to the latest frame. The playhead
  // stays on the Timeline.
  function seek(next) {
    const target = Math.max(0, Math.min(Math.round(next), span() - 1));
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
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return state.name === "playingVideo" || state.name === "playingClock";
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

// A second VIDEO that follows the playhead of a playback without a state machine of its own: the
// port Sticker's media. follow() runs on each draw with the source, the media time the
// playhead shows (null where the media shows nothing), whether the playhead advances
// (playback.advancing) and the Timeline fps. While the playhead advances, the VIDEO plays muted and
// is sought again only when it drifts more than a frame from the playhead. Otherwise it rests
// on the playhead's time: one seek in flight, the latest time sought next, and onCapture() once it is
// there, for the caller to copy the picture into its still. Pausing captures the paused picture at
// once, so the still never shows a frame from before playback while the seek confirms the time.
//
// `video` has the members createVideoPlayback reads, a src, removeAttribute("src") and load(), and
// the events loadeddata/canplay/seeked/playing/error. onChange() runs when what picture() picks may change.
export function createVideoFollower({ video, onCapture, onChange }) {
  let src = "";
  let failed = false;
  let wanted = { time: null, playing: false, fps: 1 };
  // The time of the seek in flight, the time the caller's still shows (NaN for the picture a pause
  // left), and whether the playing VIDEO has presented since it started.
  let seeking = null;
  let still = null;
  let shown = false;

  function capture(time) {
    still = time;
    onCapture();
  }

  function seek(time) {
    seeking = time;
    video.currentTime = time;
  }

  // Brings the VIDEO to what follow() wants, and tells onChange when the picture switches between
  // the playing VIDEO and the still.
  function apply() {
    const before = shown;
    step();
    if (shown !== before) onChange();
  }

  function step() {
    if (!src || failed || video.readyState < HAVE_CURRENT_DATA) return;
    const { time, playing, fps } = wanted;
    if (time === null) {
      video.pause();
      shown = false;
      return;
    }
    if (playing) {
      if (seeking !== null) return;
      // The meta's end can be past where the VIDEO really ends (its last frame lasts a frame at the
      // average rate); there the VIDEO's end is the playhead's time.
      const duration = Number(video.duration);
      const target = Number.isFinite(duration) ? Math.min(time, duration) : time;
      // A frame, plus the half frame the playhead is rounded to.
      const off = Math.abs(Number(video.currentTime) - target) > 1.5 / fps;
      // An ended VIDEO stays on its last frame; its play() would start over from 0.
      if (video.ended && !off) return;
      if (off) seek(target);
      if (video.paused) {
        shown = false;
        Promise.resolve(video.play()).catch(() => {});
      }
      return;
    }
    if (!video.paused) {
      video.pause();
      shown = false;
      capture(NaN);
    }
    if (seeking !== null || still === time) return;
    if (Number(video.currentTime) === time) capture(time);
    else seek(time);
  }

  const listeners = {
    loadeddata: apply,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: apply,
    seeked: () => {
      const landed = seeking;
      seeking = null;
      if (!wanted.playing && landed === wanted.time) capture(landed);
      else apply();
    },
    playing: () => {
      if (!wanted.playing || shown) return;
      shown = true;
      onChange();
    },
    error: () => {
      if (!src) return;
      failed = true;
      onChange();
    },
  };
  video.muted = true;
  for (const [type, listener] of Object.entries(listeners)) video.addEventListener(type, listener);

  function setSource(next) {
    src = next;
    failed = false;
    seeking = null;
    still = null;
    shown = false;
    video.pause();
    if (src) video.src = src;
    else video.removeAttribute("src");
    video.load();
  }

  return {
    follow({ src: next = "", time = null, playing = false, fps }) {
      if (next !== src) {
        setSource(next);
        onChange();
      }
      wanted = { time, playing, fps };
      apply();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(stillMedia, fallback) {
      if (!src || failed) return fallback;
      if (wanted.time === null) return null;
      if (wanted.playing && shown) return video;
      return still === null ? fallback : stillMedia;
    },
    dispose() {
      for (const [type, listener] of Object.entries(listeners)) video.removeEventListener(type, listener);
      setSource("");
    },
  };
}
