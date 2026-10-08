import * as Ca from "../../scripts/app.js";
import { app as dr } from "../../scripts/app.js";
import { api as mn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Rt = {}, lo = [], xr = () => {
}, ch = () => !1, Fl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Tl = (e) => e.startsWith("onUpdate:"), bn = Object.assign, qu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, gy = Object.prototype.hasOwnProperty, xt = (e, t) => gy.call(e, t), it = Array.isArray, co = (e) => Ts(e) === "[object Map]", uh = (e) => Ts(e) === "[object Set]", bf = (e) => Ts(e) === "[object Date]", dt = (e) => typeof e == "function", Qt = (e) => typeof e == "string", Pr = (e) => typeof e == "symbol", Ft = (e) => e !== null && typeof e == "object", dh = (e) => (Ft(e) || dt(e)) && dt(e.then) && dt(e.catch), fh = Object.prototype.toString, Ts = (e) => fh.call(e), yy = (e) => Ts(e).slice(8, -1), ph = (e) => Ts(e) === "[object Object]", Xu = (e) => Qt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ts = /* @__PURE__ */ Yu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Dl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, by = /-\w/g, Nn = Dl(
  (e) => e.replace(by, (t) => t.slice(1).toUpperCase())
), vy = /\B([A-Z])/g, zi = Dl(
  (e) => e.replace(vy, "-$1").toLowerCase()
), Rl = Dl((e) => e.charAt(0).toUpperCase() + e.slice(1)), ac = Dl(
  (e) => e ? `on${Rl(e)}` : ""
), wr = (e, t) => !Object.is(e, t), Ia = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, hh = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Ju = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let vf;
const Ll = () => vf || (vf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Qt(n) ? ky(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Qt(e) || Ft(e))
    return e;
}
const Sy = /;(?![^(]*\))/g, _y = /:([^]+)/, wy = /\/\*[^]*?\*\//g;
function ky(e) {
  const t = {};
  return e.replace(wy, "").split(Sy).forEach((r) => {
    if (r) {
      const n = r.split(_y);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function mt(e) {
  let t = "";
  if (Qt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = mt(e[r]);
      n && (t += n + " ");
    }
  else if (Ft(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const xy = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", My = /* @__PURE__ */ Yu(xy);
function mh(e) {
  return !!e || e === "";
}
function Ny(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Zu(e[n], t[n]);
  return r;
}
function Zu(e, t) {
  if (e === t) return !0;
  let r = bf(e), n = bf(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Pr(e), n = Pr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? Ny(e, t) : !1;
  if (r = Ft(e), n = Ft(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Zu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const gh = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Qt(e) ? e : e == null ? "" : it(e) || Ft(e) && (e.toString === fh || !dt(e.toString)) ? gh(e) ? tt(e.value) : JSON.stringify(e, yh, 2) : String(e), yh = (e, t) => gh(t) ? yh(e, t.value) : co(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[lc(n, o) + " =>"] = i, r),
    {}
  )
} : uh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => lc(r))
} : Pr(t) ? lc(t) : Ft(t) && !it(t) && !ph(t) ? String(t) : t, lc = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class Py {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Fn, !t && Fn && (this.index = (Fn.scopes || (Fn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Fn;
      try {
        return Fn = this, t();
      } finally {
        Fn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Fn, Fn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Fn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ay() {
  return Fn;
}
let $t;
const cc = /* @__PURE__ */ new WeakSet();
class bh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, cc.has(this) && (cc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Sh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Sf(this), _h(this);
    const t = $t, r = fr;
    $t = this, fr = !0;
    try {
      return this.fn();
    } finally {
      wh(this), $t = t, fr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        td(t);
      this.deps = this.depsTail = void 0, Sf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? cc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qc(this) && this.run();
  }
  get dirty() {
    return Qc(this);
  }
}
let vh = 0, ns, rs;
function Sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rs, rs = e;
    return;
  }
  e.next = ns, ns = e;
}
function Qu() {
  vh++;
}
function ed() {
  if (--vh > 0)
    return;
  if (rs) {
    let t = rs;
    for (rs = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; ns; ) {
    let t = ns;
    for (ns = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function _h(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wh(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), td(n), Cy(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Qc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (kh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function kh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms) || (e.globalVersion = ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = $t, n = fr;
  $t = e, fr = !0;
  try {
    _h(e);
    const i = e.fn(e._value);
    (t.version === 0 || wr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    $t = r, fr = n, wh(e), e.flags &= -3;
  }
}
function td(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      td(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Cy(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let fr = !0;
const xh = [];
function Hr() {
  xh.push(fr), fr = !1;
}
function Gr() {
  const e = xh.pop();
  fr = e === void 0 ? !0 : e;
}
function Sf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = $t;
    $t = void 0;
    try {
      t();
    } finally {
      $t = r;
    }
  }
}
let ms = 0;
class Iy {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$t || !fr || $t === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== $t)
      r = this.activeLink = new Iy($t, this), $t.deps ? (r.prevDep = $t.depsTail, $t.depsTail.nextDep = r, $t.depsTail = r) : $t.deps = $t.depsTail = r, Mh(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = $t.depsTail, r.nextDep = void 0, $t.depsTail.nextDep = r, $t.depsTail = r, $t.deps === r && ($t.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, ms++, this.notify(t);
  }
  notify(t) {
    Qu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ed();
    }
  }
}
function Mh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Mh(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const eu = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ Symbol(
  ""
), tu = /* @__PURE__ */ Symbol(
  ""
), gs = /* @__PURE__ */ Symbol(
  ""
);
function pn(e, t, r) {
  if (fr && $t) {
    let n = eu.get(e);
    n || eu.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new nd()), i.map = n, i.key = r), i.track();
  }
}
function Rr(e, t, r, n, i, o) {
  const s = eu.get(e);
  if (!s) {
    ms++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Qu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Xu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === gs || !Pr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(gs)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Ii)), co(e) && a(s.get(tu)));
          break;
        case "delete":
          l || (a(s.get(Ii)), co(e) && a(s.get(tu)));
          break;
        case "set":
          co(e) && a(s.get(Ii));
          break;
      }
  }
  ed();
}
function Xi(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (pn(t, "iterate", gs), /* @__PURE__ */ Zn(e) ? t : t.map(hr));
}
function Vl(e) {
  return pn(e = /* @__PURE__ */ kt(e), "iterate", gs), e;
}
function vr(e, t) {
  return /* @__PURE__ */ Kr(e) ? bo(/* @__PURE__ */ Ei(e) ? hr(t) : t) : hr(t);
}
const Ey = {
  __proto__: null,
  [Symbol.iterator]() {
    return uc(this, Symbol.iterator, (e) => vr(this, e));
  },
  concat(...e) {
    return Xi(this).concat(
      ...e.map((t) => it(t) ? Xi(t) : t)
    );
  },
  entries() {
    return uc(this, "entries", (e) => (e[1] = vr(this, e[1]), e));
  },
  every(e, t) {
    return Ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ir(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => vr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ir(
      this,
      "find",
      e,
      t,
      (r) => vr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ir(
      this,
      "findLast",
      e,
      t,
      (r) => vr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return dc(this, "includes", e);
  },
  indexOf(...e) {
    return dc(this, "indexOf", e);
  },
  join(e) {
    return Xi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return dc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ro(this, "pop");
  },
  push(...e) {
    return Ro(this, "push", e);
  },
  reduce(e, ...t) {
    return _f(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _f(this, "reduceRight", e, t);
  },
  shift() {
    return Ro(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ro(this, "splice", e);
  },
  toReversed() {
    return Xi(this).toReversed();
  },
  toSorted(e) {
    return Xi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ro(this, "unshift", e);
  },
  values() {
    return uc(this, "values", (e) => vr(this, e));
  }
};
function uc(e, t, r) {
  const n = Vl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Zn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Oy = Array.prototype;
function Ir(e, t, r, n, i, o) {
  const s = Vl(e), a = s !== e && !/* @__PURE__ */ Zn(e), l = s[t];
  if (l !== Oy[t]) {
    const u = l.apply(e, o);
    return a ? hr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, vr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function _f(e, t, r, n) {
  const i = Vl(e), o = i !== e && !/* @__PURE__ */ Zn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = vr(e, c)), r.call(this, c, vr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? vr(e, l) : l;
}
function dc(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  pn(n, "iterate", gs);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ od(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Ro(e, t, r = []) {
  Hr(), Qu();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return ed(), Gr(), n;
}
const Fy = /* @__PURE__ */ Yu("__proto__,__v_isRef,__isVue"), Nh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pr)
);
function Ty(e) {
  Pr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return pn(t, "has", e), t.hasOwnProperty(e);
}
class Ph {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? Ky : Eh : o ? Ih : Ch).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = Ey[r]))
        return l;
      if (r === "hasOwnProperty")
        return Ty;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ yn(t) ? t : n
    );
    if ((Pr(r) ? Nh.has(r) : Fy(r)) || (i || pn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ yn(a)) {
      const l = s && Xu(r) ? a : a.value;
      return i && Ft(l) ? /* @__PURE__ */ ru(l) : l;
    }
    return Ft(a) ? i ? /* @__PURE__ */ ru(a) : /* @__PURE__ */ Mo(a) : a;
  }
}
class Ah extends Ph {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Xu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Kr(o);
      if (!/* @__PURE__ */ Zn(n) && !/* @__PURE__ */ Kr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ yn(o) && !/* @__PURE__ */ yn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : xt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ yn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? wr(n, o) && Rr(t, "set", r, n) : Rr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = xt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Rr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Pr(r) || !Nh.has(r)) && pn(t, "has", r), n;
  }
  ownKeys(t) {
    return pn(
      t,
      "iterate",
      it(t) ? "length" : Ii
    ), Reflect.ownKeys(t);
  }
}
class Dy extends Ph {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Ry = /* @__PURE__ */ new Ah(), Ly = /* @__PURE__ */ new Dy(), Vy = /* @__PURE__ */ new Ah(!0);
const nu = (e) => e, fa = (e) => Reflect.getPrototypeOf(e);
function $y(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = co(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? nu : t ? bo : hr;
    return !t && pn(
      o,
      "iterate",
      l ? tu : Ii
    ), bn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: a ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function pa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zy(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (wr(i, a) && pn(s, "get", i), pn(s, "get", a));
      const { has: l } = fa(s), c = t ? nu : e ? bo : hr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && pn(/* @__PURE__ */ kt(i), "iterate", Ii), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (wr(i, a) && pn(s, "has", i), pn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? nu : e ? bo : hr;
      return !e && pn(l, "iterate", Ii), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return bn(
    r,
    e ? {
      add: pa("add"),
      set: pa("set"),
      delete: pa("delete"),
      clear: pa("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = fa(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ Zn(i) && !/* @__PURE__ */ Kr(i) ? a : i;
        return s.has.call(o, l) || wr(i, l) && s.has.call(o, i) || wr(a, l) && s.has.call(o, a) || (o.add(l), Rr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Zn(o) && !/* @__PURE__ */ Kr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = fa(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? wr(o, d) && Rr(s, "set", i, o) : Rr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = fa(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Rr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
        return o && Rr(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = $y(i, e, t);
  }), r;
}
function rd(e, t) {
  const r = zy(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    xt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const jy = {
  get: /* @__PURE__ */ rd(!1, !1)
}, Hy = {
  get: /* @__PURE__ */ rd(!1, !0)
}, Gy = {
  get: /* @__PURE__ */ rd(!0, !1)
};
const Ch = /* @__PURE__ */ new WeakMap(), Ih = /* @__PURE__ */ new WeakMap(), Eh = /* @__PURE__ */ new WeakMap(), Ky = /* @__PURE__ */ new WeakMap();
function Wy(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Uy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Wy(yy(e));
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return /* @__PURE__ */ Kr(e) ? e : id(
    e,
    !1,
    Ry,
    jy,
    Ch
  );
}
// @__NO_SIDE_EFFECTS__
function By(e) {
  return id(
    e,
    !1,
    Vy,
    Hy,
    Ih
  );
}
// @__NO_SIDE_EFFECTS__
function ru(e) {
  return id(
    e,
    !0,
    Ly,
    Gy,
    Eh
  );
}
function id(e, t, r, n, i) {
  if (!Ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Uy(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Ei(e) {
  return /* @__PURE__ */ Kr(e) ? /* @__PURE__ */ Ei(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function od(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function Yy(e) {
  return !xt(e, "__v_skip") && Object.isExtensible(e) && hh(e, "__v_skip", !0), e;
}
const hr = (e) => Ft(e) ? /* @__PURE__ */ Mo(e) : e, bo = (e) => Ft(e) ? /* @__PURE__ */ ru(e) : e;
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  return Oh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Xa(e) {
  return Oh(e, !0);
}
function Oh(e, t) {
  return /* @__PURE__ */ yn(e) ? e : new qy(e, t);
}
class qy {
  constructor(t, r) {
    this.dep = new nd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : hr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Zn(t) || /* @__PURE__ */ Kr(t);
    t = n ? t : /* @__PURE__ */ kt(t), wr(t, r) && (this._rawValue = t, this._value = n ? t : hr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ yn(e) ? e.value : e;
}
const Xy = {
  get: (e, t, r) => t === "__v_raw" ? e : rt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ yn(i) && !/* @__PURE__ */ yn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Fh(e) {
  return /* @__PURE__ */ Ei(e) ? e : new Proxy(e, Xy);
}
class Jy {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new nd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $t !== this)
      return Sh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return kh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Zy(e, t, r = !1) {
  let n, i;
  return dt(e) ? n = e : (n = e.get, i = e.set), new Jy(n, i, r);
}
const ha = {}, Ja = /* @__PURE__ */ new WeakMap();
let Mi;
function Qy(e, t = !1, r = Mi) {
  if (r) {
    let n = Ja.get(r);
    n || Ja.set(r, n = []), n.push(e);
  }
}
function eb(e, t, r = Rt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (ee) => i ? ee : /* @__PURE__ */ Zn(ee) || i === !1 || i === 0 ? Lr(ee, 1) : Lr(ee);
  let d, u, f, h, S = !1, g = !1;
  if (/* @__PURE__ */ yn(e) ? (u = () => e.value, S = /* @__PURE__ */ Zn(e)) : /* @__PURE__ */ Ei(e) ? (u = () => c(e), S = !0) : it(e) ? (g = !0, S = e.some((ee) => /* @__PURE__ */ Ei(ee) || /* @__PURE__ */ Zn(ee)), u = () => e.map((ee) => {
    if (/* @__PURE__ */ yn(ee))
      return ee.value;
    if (/* @__PURE__ */ Ei(ee))
      return c(ee);
    if (dt(ee))
      return l ? l(ee, 2) : ee();
  })) : dt(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Hr();
      try {
        f();
      } finally {
        Gr();
      }
    }
    const ee = Mi;
    Mi = d;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      Mi = ee;
    }
  } : u = xr, t && i) {
    const ee = u, E = i === !0 ? 1 / 0 : i;
    u = () => Lr(ee(), E);
  }
  const b = Ay(), y = () => {
    d.stop(), b && b.active && qu(b.effects, d);
  };
  if (o && t) {
    const ee = t;
    t = (...E) => {
      ee(...E), y();
    };
  }
  let H = g ? new Array(e.length).fill(ha) : ha;
  const z = (ee) => {
    if (!(!(d.flags & 1) || !d.dirty && !ee))
      if (t) {
        const E = d.run();
        if (i || S || (g ? E.some((W, D) => wr(W, H[D])) : wr(E, H))) {
          f && f();
          const W = Mi;
          Mi = d;
          try {
            const D = [
              E,
              // pass undefined as the old value when it's changed for the first time
              H === ha ? void 0 : g && H[0] === ha ? [] : H,
              h
            ];
            H = E, l ? l(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            Mi = W;
          }
        }
      } else
        d.run();
  };
  return a && a(z), d = new bh(u), d.scheduler = s ? () => s(z, !1) : z, h = (ee) => Qy(ee, !1, d), f = d.onStop = () => {
    const ee = Ja.get(d);
    if (ee) {
      if (l)
        l(ee, 4);
      else
        for (const E of ee) E();
      Ja.delete(d);
    }
  }, t ? n ? z(!0) : H = d.run() : s ? s(z.bind(null, !0), !0) : d.run(), y.pause = d.pause.bind(d), y.resume = d.resume.bind(d), y.stop = y, y;
}
function Lr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ft(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ yn(e))
    Lr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Lr(e[n], t, r);
  else if (uh(e) || co(e))
    e.forEach((n) => {
      Lr(n, t, r);
    });
  else if (ph(e)) {
    for (const n in e)
      Lr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Lr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ds(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    $l(i, t, r);
  }
}
function Ar(e, t, r, n) {
  if (dt(e)) {
    const i = Ds(e, t, r, n);
    return i && dh(i) && i.catch((o) => {
      $l(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Ar(e[o], t, r, n));
    return i;
  }
}
function $l(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Rt;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Hr(), Ds(o, null, 10, [
        e,
        l,
        c
      ]), Gr();
      return;
    }
  }
  tb(e, r, i, n, s);
}
function tb(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const kn = [];
let br = -1;
const uo = [];
let ti = null, Qi = 0;
const Th = /* @__PURE__ */ Promise.resolve();
let Za = null;
function zl(e) {
  const t = Za || Th;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nb(e) {
  let t = br + 1, r = kn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = kn[n], o = ys(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function sd(e) {
  if (!(e.flags & 1)) {
    const t = ys(e), r = kn[kn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ys(r) ? kn.push(e) : kn.splice(nb(t), 0, e), e.flags |= 1, Dh();
  }
}
function Dh() {
  Za || (Za = Th.then(Lh));
}
function rb(e) {
  it(e) ? uo.push(...e) : ti && e.id === -1 ? ti.splice(Qi + 1, 0, e) : e.flags & 1 || (uo.push(e), e.flags |= 1), Dh();
}
function wf(e, t, r = br + 1) {
  for (; r < kn.length; r++) {
    const n = kn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      kn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Rh(e) {
  if (uo.length) {
    const t = [...new Set(uo)].sort(
      (r, n) => ys(r) - ys(n)
    );
    if (uo.length = 0, ti) {
      ti.push(...t);
      return;
    }
    for (ti = t, Qi = 0; Qi < ti.length; Qi++) {
      const r = ti[Qi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    ti = null, Qi = 0;
  }
}
const ys = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Lh(e) {
  try {
    for (br = 0; br < kn.length; br++) {
      const t = kn[br];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ds(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; br < kn.length; br++) {
      const t = kn[br];
      t && (t.flags &= -2);
    }
    br = -1, kn.length = 0, Rh(), Za = null, (kn.length || uo.length) && Lh();
  }
}
let Gn = null, Vh = null;
function Qa(e) {
  const t = Gn;
  return Gn = e, Vh = e && e.type.__scopeId || null, t;
}
function $h(e, t = Gn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Tf(-1);
    const o = Qa(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Qa(o), n._d && Tf(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function jr(e, t) {
  if (Gn === null)
    return e;
  const r = Wl(Gn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Rt] = t[i];
    o && (dt(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Lr(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function vi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (Hr(), Ar(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Gr());
  }
}
function ib(e, t) {
  if (hn) {
    let r = hn.provides;
    const n = hn.parent && hn.parent.provides;
    n === r && (r = hn.provides = Object.create(n)), r[e] = t;
  }
}
function Ea(e, t, r = !1) {
  const n = nv();
  if (n || fo) {
    let i = fo ? fo._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && dt(t) ? t.call(n && n.proxy) : t;
  }
}
const ob = /* @__PURE__ */ Symbol.for("v-scx"), sb = () => Ea(ob);
function Oi(e, t, r) {
  return zh(e, t, r);
}
function zh(e, t, r = Rt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = bn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (vs) {
    if (o === "sync") {
      const h = sb();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = xr, h.resume = xr, h.pause = xr, h;
    }
  }
  const d = hn;
  a.call = (h, S, g) => Ar(h, d, S, g);
  let u = !1;
  o === "post" ? a.scheduler = (h) => {
    On(h, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (h, S) => {
    S ? h() : sd(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const f = eb(e, t, a);
  return vs && (c ? c.push(f) : l && f()), f;
}
function ab(e, t, r) {
  const n = this.proxy, i = Qt(e) ? e.includes(".") ? jh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  dt(t) ? o = t : (o = t.handler, r = t);
  const s = Ls(this), a = zh(i, o.bind(n), r);
  return s(), a;
}
function jh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const lb = /* @__PURE__ */ Symbol("_vte"), cb = (e) => e.__isTeleport, ub = /* @__PURE__ */ Symbol("_leaveCb");
function ad(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ad(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function kf(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const el = /* @__PURE__ */ new WeakMap();
function is(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, b) => is(
        g,
        t && (it(t) ? t[b] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (os(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && is(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Wl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Rt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), h = u === Rt ? ch : (g) => kf(d, g) ? !1 : xt(f, g), S = (g, b) => !(b && kf(d, b));
  if (c != null && c !== l) {
    if (xf(t), Qt(c))
      d[c] = null, h(c) && (u[c] = null);
    else if (/* @__PURE__ */ yn(c)) {
      const g = t;
      S(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (dt(l))
    Ds(l, a, 12, [s, d]);
  else {
    const g = Qt(l), b = /* @__PURE__ */ yn(l);
    if (g || b) {
      const y = () => {
        if (e.f) {
          const H = g ? h(l) ? u[l] : d[l] : S() || !e.k ? l.value : d[e.k];
          if (i)
            it(H) && qu(H, o);
          else if (it(H))
            H.includes(o) || H.push(o);
          else if (g)
            d[l] = [o], h(l) && (u[l] = d[l]);
          else {
            const z = [o];
            S(l, e.k) && (l.value = z), e.k && (d[e.k] = z);
          }
        } else g ? (d[l] = s, h(l) && (u[l] = s)) : b && (S(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const H = () => {
          y(), el.delete(e);
        };
        H.id = -1, el.set(e, H), On(H, r);
      } else
        xf(e), y();
    }
  }
}
function xf(e) {
  const t = el.get(e);
  t && (t.flags |= 8, el.delete(e));
}
Ll().requestIdleCallback;
Ll().cancelIdleCallback;
const os = (e) => !!e.type.__asyncLoader, Gh = (e) => e.type.__isKeepAlive;
function db(e, t) {
  Kh(e, "a", t);
}
function fb(e, t) {
  Kh(e, "da", t);
}
function Kh(e, t, r = hn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (jl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Gh(i.parent.vnode) && pb(n, t, r, i), i = i.parent;
  }
}
function pb(e, t, r, n) {
  const i = jl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Wh(() => {
    qu(n[t], i);
  }, r);
}
function jl(e, t, r = hn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Hr();
      const a = Ls(r), l = Ar(t, r, e, s);
      return a(), Gr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Br = (e) => (t, r = hn) => {
  (!vs || e === "sp") && jl(e, (...n) => t(...n), r);
}, hb = Br("bm"), Hl = Br("m"), mb = Br(
  "bu"
), gb = Br("u"), Rs = Br(
  "bum"
), Wh = Br("um"), yb = Br(
  "sp"
), bb = Br("rtg"), vb = Br("rtc");
function Sb(e, t = hn) {
  jl("ec", e, t);
}
const _b = "components", Uh = /* @__PURE__ */ Symbol.for("v-ndc");
function wb(e) {
  return Qt(e) ? kb(_b, e, !1) || e : e || Uh;
}
function kb(e, t, r = !0, n = !1) {
  const i = Gn || hn;
  if (i) {
    const o = i.type;
    {
      const a = av(
        o,
        !1
      );
      if (a && (a === t || a === Nn(t) || a === Rl(Nn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mf(i[e] || o[e], t) || // global registration
      Mf(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function Mf(e, t) {
  return e && (e[t] || e[Nn(t)] || e[Rl(Nn(t))]);
}
function Nt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Qt(e)) {
    const a = s && /* @__PURE__ */ Ei(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Zn(e), c = /* @__PURE__ */ Kr(e), e = Vl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? bo(hr(e[d])) : hr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ft(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const iu = (e) => e ? pm(e) ? Wl(e) : iu(e.parent) : null, ss = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ bn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => iu(e.parent),
    $root: (e) => iu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      sd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zl.bind(e.proxy)),
    $watch: (e) => ab.bind(e)
  })
), fc = (e, t) => e !== Rt && !e.__isScriptSetup && xt(e, t), xb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const f = s[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (fc(n, t))
          return s[t] = 1, n[t];
        if (i !== Rt && xt(i, t))
          return s[t] = 2, i[t];
        if (xt(o, t))
          return s[t] = 3, o[t];
        if (r !== Rt && xt(r, t))
          return s[t] = 4, r[t];
        ou && (s[t] = 0);
      }
    }
    const c = ss[t];
    let d, u;
    if (c)
      return t === "$attrs" && pn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Rt && xt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, xt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return fc(i, t) ? (i[t] = r, !0) : n !== Rt && xt(n, t) ? (n[t] = r, !0) : xt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Rt && a[0] !== "$" && xt(e, a) || fc(t, a) || xt(o, a) || xt(n, a) || xt(ss, a) || xt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : xt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Nf(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ou = !0;
function Mb(e) {
  const t = Yh(e), r = e.proxy, n = e.ctx;
  ou = !1, t.beforeCreate && Pf(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: h,
    updated: S,
    activated: g,
    deactivated: b,
    beforeDestroy: y,
    beforeUnmount: H,
    destroyed: z,
    unmounted: ee,
    render: E,
    renderTracked: W,
    renderTriggered: D,
    errorCaptured: q,
    serverPrefetch: ve,
    // public API
    expose: _e,
    inheritAttrs: he,
    // assets
    components: ie,
    directives: ke,
    filters: me
  } = t;
  if (c && Nb(c, n, null), s)
    for (const pe in s) {
      const fe = s[pe];
      dt(fe) && (n[pe] = fe.bind(r));
    }
  if (i) {
    const pe = i.call(r, r);
    Ft(pe) && (e.data = /* @__PURE__ */ Mo(pe));
  }
  if (ou = !0, o)
    for (const pe in o) {
      const fe = o[pe], R = dt(fe) ? fe.bind(r, r) : dt(fe.get) ? fe.get.bind(r, r) : xr, X = !dt(fe) && dt(fe.set) ? fe.set.bind(r) : xr, A = ut({
        get: R,
        set: X
      });
      Object.defineProperty(n, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => A.value,
        set: (ge) => A.value = ge
      });
    }
  if (a)
    for (const pe in a)
      Bh(a[pe], n, r, pe);
  if (l) {
    const pe = dt(l) ? l.call(r) : l;
    Reflect.ownKeys(pe).forEach((fe) => {
      ib(fe, pe[fe]);
    });
  }
  d && Pf(d, e, "c");
  function J(pe, fe) {
    it(fe) ? fe.forEach((R) => pe(R.bind(r))) : fe && pe(fe.bind(r));
  }
  if (J(hb, u), J(Hl, f), J(mb, h), J(gb, S), J(db, g), J(fb, b), J(Sb, q), J(vb, W), J(bb, D), J(Rs, H), J(Wh, ee), J(yb, ve), it(_e))
    if (_e.length) {
      const pe = e.exposed || (e.exposed = {});
      _e.forEach((fe) => {
        Object.defineProperty(pe, fe, {
          get: () => r[fe],
          set: (R) => r[fe] = R,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === xr && (e.render = E), he != null && (e.inheritAttrs = he), ie && (e.components = ie), ke && (e.directives = ke), ve && Hh(e);
}
function Nb(e, t, r = xr) {
  it(e) && (e = su(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ft(i) ? "default" in i ? o = Ea(
      i.from || n,
      i.default,
      !0
    ) : o = Ea(i.from || n) : o = Ea(i), /* @__PURE__ */ yn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Pf(e, t, r) {
  Ar(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Bh(e, t, r, n) {
  let i = n.includes(".") ? jh(r, n) : () => r[n];
  if (Qt(e)) {
    const o = t[e];
    dt(o) && Oi(i, o);
  } else if (dt(e))
    Oi(i, e.bind(r));
  else if (Ft(e))
    if (it(e))
      e.forEach((o) => Bh(o, t, r, n));
    else {
      const o = dt(e.handler) ? e.handler.bind(r) : t[e.handler];
      dt(o) && Oi(i, o, e);
    }
}
function Yh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => tl(l, c, s, !0)
  ), tl(l, t, s)), Ft(t) && o.set(t, l), l;
}
function tl(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && tl(e, o, r, !0), i && i.forEach(
    (s) => tl(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Pb[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Pb = {
  data: Af,
  props: Cf,
  emits: Cf,
  // objects
  methods: Wo,
  computed: Wo,
  // lifecycle
  beforeCreate: _n,
  created: _n,
  beforeMount: _n,
  mounted: _n,
  beforeUpdate: _n,
  updated: _n,
  beforeDestroy: _n,
  beforeUnmount: _n,
  destroyed: _n,
  unmounted: _n,
  activated: _n,
  deactivated: _n,
  errorCaptured: _n,
  serverPrefetch: _n,
  // assets
  components: Wo,
  directives: Wo,
  // watch
  watch: Cb,
  // provide / inject
  provide: Af,
  inject: Ab
};
function Af(e, t) {
  return t ? e ? function() {
    return bn(
      dt(e) ? e.call(this, this) : e,
      dt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ab(e, t) {
  return Wo(su(e), su(t));
}
function su(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function _n(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wo(e, t) {
  return e ? bn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Cf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bn(
    /* @__PURE__ */ Object.create(null),
    Nf(e),
    Nf(t ?? {})
  ) : t;
}
function Cb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = bn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = _n(e[n], t[n]);
  return r;
}
function qh() {
  return {
    app: null,
    config: {
      isNativeTag: ch,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ib = 0;
function Eb(e, t) {
  return function(n, i = null) {
    dt(n) || (n = bn({}, n)), i != null && !Ft(i) && (i = null);
    const o = qh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Ib++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: cv,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && dt(d.install) ? (s.add(d), d.install(c, ...u)) : dt(d) && (s.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (o.components[d] = u, c) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, c) : o.directives[d];
      },
      mount(d, u, f) {
        if (!l) {
          const h = c._ceVNode || Be(n, i);
          return h.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, d, f), l = !0, c._container = d, d.__vue_app__ = c, Wl(h.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Ar(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = fo;
        fo = c;
        try {
          return d();
        } finally {
          fo = u;
        }
      }
    };
    return c;
  };
}
let fo = null;
const Ob = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nn(t)}Modifiers`] || e[`${zi(t)}Modifiers`];
function Fb(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Rt;
  let i = r;
  const o = t.startsWith("update:"), s = o && Ob(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Qt(d) ? d.trim() : d)), s.number && (i = r.map(Ju)));
  let a, l = n[a = ac(t)] || // also try camelCase event handler (#2249)
  n[a = ac(Nn(t))];
  !l && o && (l = n[a = ac(zi(t))]), l && Ar(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Ar(
      c,
      e,
      6,
      i
    );
  }
}
const Tb = /* @__PURE__ */ new WeakMap();
function Xh(e, t, r = !1) {
  const n = r ? Tb : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!dt(e)) {
    const l = (c) => {
      const d = Xh(c, t, !0);
      d && (a = !0, bn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ft(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : bn(s, o), Ft(e) && n.set(e, s), s);
}
function Gl(e, t) {
  return !e || !Fl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(e, t[0].toLowerCase() + t.slice(1)) || xt(e, zi(t)) || xt(e, t));
}
function If(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: h,
    ctx: S,
    inheritAttrs: g
  } = e, b = Qa(e);
  let y, H;
  try {
    if (r.shapeFlag & 4) {
      const ee = i || n, E = ee;
      y = Sr(
        c.call(
          E,
          ee,
          d,
          u,
          h,
          f,
          S
        )
      ), H = a;
    } else {
      const ee = t;
      y = Sr(
        ee.length > 1 ? ee(
          u,
          { attrs: a, slots: s, emit: l }
        ) : ee(
          u,
          null
        )
      ), H = t.props ? a : Db(a);
    }
  } catch (ee) {
    as.length = 0, $l(ee, e, 1), y = Be(si);
  }
  let z = y;
  if (H && g !== !1) {
    const ee = Object.keys(H), { shapeFlag: E } = z;
    ee.length && E & 7 && (o && ee.some(Tl) && (H = Rb(
      H,
      o
    )), z = vo(z, H, !1, !0));
  }
  return r.dirs && (z = vo(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(r.dirs) : r.dirs), r.transition && ad(z, r.transition), y = z, Qa(b), y;
}
const Db = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Fl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Rb = (e, t) => {
  const r = {};
  for (const n in e)
    (!Tl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Lb(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Ef(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Jh(s, n, f) && !Gl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Ef(n, s, c) : !0 : !!s;
  return !1;
}
function Ef(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Jh(t, e, o) && !Gl(r, o))
      return !0;
  }
  return !1;
}
function Jh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ft(n) && Ft(i) ? !Zu(n, i) : n !== i;
}
function Vb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Zh = {}, Qh = () => Object.create(Zh), em = (e) => Object.getPrototypeOf(e) === Zh;
function $b(e, t, r, n = !1) {
  const i = {}, o = Qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tm(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ By(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function zb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ kt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (Gl(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (l)
          if (xt(o, f))
            h !== o[f] && (o[f] = h, c = !0);
          else {
            const S = Nn(f);
            i[S] = au(
              l,
              a,
              S,
              h,
              e,
              !1
            );
          }
        else
          h !== o[f] && (o[f] = h, c = !0);
      }
    }
  } else {
    tm(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !xt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = zi(u)) === u || !xt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = au(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !xt(t, u)) && (delete o[u], c = !0);
  }
  c && Rr(e.attrs, "set", "");
}
function tm(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (ts(l))
        continue;
      const c = t[l];
      let d;
      i && xt(i, d = Nn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Gl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Rt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = au(
        i,
        l,
        u,
        c[u],
        e,
        !xt(c, u)
      );
    }
  }
  return s;
}
function au(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = xt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && dt(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Ls(i);
          n = c[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === zi(r)) && (n = !0));
  }
  return n;
}
const jb = /* @__PURE__ */ new WeakMap();
function nm(e, t, r = !1) {
  const n = r ? jb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!dt(e)) {
    const d = (u) => {
      l = !0;
      const [f, h] = nm(u, t, !0);
      bn(s, f), h && a.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ft(e) && n.set(e, lo), lo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = Nn(o[d]);
      Of(u) && (s[u] = Rt);
    }
  else if (o)
    for (const d in o) {
      const u = Nn(d);
      if (Of(u)) {
        const f = o[d], h = s[u] = it(f) || dt(f) ? { type: f } : bn({}, f), S = h.type;
        let g = !1, b = !0;
        if (it(S))
          for (let y = 0; y < S.length; ++y) {
            const H = S[y], z = dt(H) && H.name;
            if (z === "Boolean") {
              g = !0;
              break;
            } else z === "String" && (b = !1);
          }
        else
          g = dt(S) && S.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = b, (g || xt(h, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ft(e) && n.set(e, c), c;
}
function Of(e) {
  return e[0] !== "$" && !ts(e);
}
const ld = (e) => e === "_" || e === "_ctx" || e === "$stable", cd = (e) => it(e) ? e.map(Sr) : [Sr(e)], Hb = (e, t, r) => {
  if (t._n)
    return t;
  const n = $h((...i) => cd(t(...i)), r);
  return n._c = !1, n;
}, rm = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (ld(i)) continue;
    const o = e[i];
    if (dt(o))
      t[i] = Hb(i, o, n);
    else if (o != null) {
      const s = cd(o);
      t[i] = () => s;
    }
  }
}, im = (e, t) => {
  const r = cd(t);
  e.slots.default = () => r;
}, om = (e, t, r) => {
  for (const n in t)
    (r || !ld(n)) && (e[n] = t[n]);
}, Gb = (e, t, r) => {
  const n = e.slots = Qh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (om(n, t, r), r && hh(n, "_", i, !0)) : rm(t, n);
  } else t && im(e, t);
}, Kb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Rt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : om(i, t, r) : (o = !t.$stable, rm(t, i)), s = t;
  } else t && (im(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !ld(a) && s[a] == null && delete i[a];
}, On = qb;
function Wb(e) {
  return Ub(e);
}
function Ub(e, t) {
  const r = Ll();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: h = xr,
    insertStaticContent: S
  } = e, g = (p, m, w, C = null, T = null, U = null, le = void 0, G = null, oe = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !Lo(p, m) && (C = se(p), ge(p, T, U, !0), p = null), m.patchFlag === -2 && (oe = !1, m.dynamicChildren = null);
    const { type: N, ref: L, shapeFlag: te } = m;
    switch (N) {
      case Kl:
        b(p, m, w, C);
        break;
      case si:
        y(p, m, w, C);
        break;
      case hc:
        p == null && H(m, w, C, le);
        break;
      case Ze:
        ie(
          p,
          m,
          w,
          C,
          T,
          U,
          le,
          G,
          oe
        );
        break;
      default:
        te & 1 ? E(
          p,
          m,
          w,
          C,
          T,
          U,
          le,
          G,
          oe
        ) : te & 6 ? ke(
          p,
          m,
          w,
          C,
          T,
          U,
          le,
          G,
          oe
        ) : (te & 64 || te & 128) && N.process(
          p,
          m,
          w,
          C,
          T,
          U,
          le,
          G,
          oe,
          v
        );
    }
    L != null && T ? is(L, p && p.ref, U, m || p, !m) : L == null && p && p.ref != null && is(p.ref, null, U, p, !0);
  }, b = (p, m, w, C) => {
    if (p == null)
      n(
        m.el = a(m.children),
        w,
        C
      );
    else {
      const T = m.el = p.el;
      m.children !== p.children && c(T, m.children);
    }
  }, y = (p, m, w, C) => {
    p == null ? n(
      m.el = l(m.children || ""),
      w,
      C
    ) : m.el = p.el;
  }, H = (p, m, w, C) => {
    [p.el, p.anchor] = S(
      p.children,
      m,
      w,
      C,
      p.el,
      p.anchor
    );
  }, z = ({ el: p, anchor: m }, w, C) => {
    let T;
    for (; p && p !== m; )
      T = f(p), n(p, w, C), p = T;
    n(m, w, C);
  }, ee = ({ el: p, anchor: m }) => {
    let w;
    for (; p && p !== m; )
      w = f(p), i(p), p = w;
    i(m);
  }, E = (p, m, w, C, T, U, le, G, oe) => {
    if (m.type === "svg" ? le = "svg" : m.type === "math" && (le = "mathml"), p == null)
      W(
        m,
        w,
        C,
        T,
        U,
        le,
        G,
        oe
      );
    else {
      const N = p.el && p.el._isVueCE ? p.el : null;
      try {
        N && N._beginPatch(), ve(
          p,
          m,
          T,
          U,
          le,
          G,
          oe
        );
      } finally {
        N && N._endPatch();
      }
    }
  }, W = (p, m, w, C, T, U, le, G) => {
    let oe, N;
    const { props: L, shapeFlag: te, transition: we, dirs: Se } = p;
    if (oe = p.el = s(
      p.type,
      U,
      L && L.is,
      L
    ), te & 8 ? d(oe, p.children) : te & 16 && q(
      p.children,
      oe,
      null,
      C,
      T,
      pc(p, U),
      le,
      G
    ), Se && vi(p, null, C, "created"), D(oe, p, p.scopeId, le, C), L) {
      for (const Y in L)
        Y !== "value" && !ts(Y) && o(oe, Y, null, L[Y], U, C);
      "value" in L && o(oe, "value", null, L.value, U), (N = L.onVnodeBeforeMount) && gr(N, C, p);
    }
    Se && vi(p, null, C, "beforeMount");
    const xe = Bb(T, we);
    xe && we.beforeEnter(oe), n(oe, m, w), ((N = L && L.onVnodeMounted) || xe || Se) && On(() => {
      try {
        N && gr(N, C, p), xe && we.enter(oe), Se && vi(p, null, C, "mounted");
      } finally {
      }
    }, T);
  }, D = (p, m, w, C, T) => {
    if (w && h(p, w), C)
      for (let U = 0; U < C.length; U++)
        h(p, C[U]);
    if (T) {
      let U = T.subTree;
      if (m === U || cm(U.type) && (U.ssContent === m || U.ssFallback === m)) {
        const le = T.vnode;
        D(
          p,
          le,
          le.scopeId,
          le.slotScopeIds,
          T.parent
        );
      }
    }
  }, q = (p, m, w, C, T, U, le, G, oe = 0) => {
    for (let N = oe; N < p.length; N++) {
      const L = p[N] = G ? Fr(p[N]) : Sr(p[N]);
      g(
        null,
        L,
        m,
        w,
        C,
        T,
        U,
        le,
        G
      );
    }
  }, ve = (p, m, w, C, T, U, le) => {
    const G = m.el = p.el;
    let { patchFlag: oe, dynamicChildren: N, dirs: L } = m;
    oe |= p.patchFlag & 16;
    const te = p.props || Rt, we = m.props || Rt;
    let Se;
    if (w && Si(w, !1), (Se = we.onVnodeBeforeUpdate) && gr(Se, w, m, p), L && vi(m, p, w, "beforeUpdate"), w && Si(w, !0), (te.innerHTML && we.innerHTML == null || te.textContent && we.textContent == null) && d(G, ""), N ? _e(
      p.dynamicChildren,
      N,
      G,
      w,
      C,
      pc(m, T),
      U
    ) : le || fe(
      p,
      m,
      G,
      null,
      w,
      C,
      pc(m, T),
      U,
      !1
    ), oe > 0) {
      if (oe & 16)
        he(G, te, we, w, T);
      else if (oe & 2 && te.class !== we.class && o(G, "class", null, we.class, T), oe & 4 && o(G, "style", te.style, we.style, T), oe & 8) {
        const xe = m.dynamicProps;
        for (let Y = 0; Y < xe.length; Y++) {
          const ye = xe[Y], F = te[ye], ne = we[ye];
          (ne !== F || ye === "value") && o(G, ye, F, ne, T, w);
        }
      }
      oe & 1 && p.children !== m.children && d(G, m.children);
    } else !le && N == null && he(G, te, we, w, T);
    ((Se = we.onVnodeUpdated) || L) && On(() => {
      Se && gr(Se, w, m, p), L && vi(m, p, w, "updated");
    }, C);
  }, _e = (p, m, w, C, T, U, le) => {
    for (let G = 0; G < m.length; G++) {
      const oe = p[G], N = m[G], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oe.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lo(oe, N) || // - In the case of a component, it could contain anything.
        oe.shapeFlag & 198) ? u(oe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      g(
        oe,
        N,
        L,
        null,
        C,
        T,
        U,
        le,
        !0
      );
    }
  }, he = (p, m, w, C, T) => {
    if (m !== w) {
      if (m !== Rt)
        for (const U in m)
          !ts(U) && !(U in w) && o(
            p,
            U,
            m[U],
            null,
            T,
            C
          );
      for (const U in w) {
        if (ts(U)) continue;
        const le = w[U], G = m[U];
        le !== G && U !== "value" && o(p, U, G, le, T, C);
      }
      "value" in w && o(p, "value", m.value, w.value, T);
    }
  }, ie = (p, m, w, C, T, U, le, G, oe) => {
    const N = m.el = p ? p.el : a(""), L = m.anchor = p ? p.anchor : a("");
    let { patchFlag: te, dynamicChildren: we, slotScopeIds: Se } = m;
    Se && (G = G ? G.concat(Se) : Se), p == null ? (n(N, w, C), n(L, w, C), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      w,
      L,
      T,
      U,
      le,
      G,
      oe
    )) : te > 0 && te & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === we.length ? (_e(
      p.dynamicChildren,
      we,
      w,
      T,
      U,
      le,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && sm(
      p,
      m,
      !0
      /* shallow */
    )) : fe(
      p,
      m,
      w,
      L,
      T,
      U,
      le,
      G,
      oe
    );
  }, ke = (p, m, w, C, T, U, le, G, oe) => {
    m.slotScopeIds = G, p == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      w,
      C,
      le,
      oe
    ) : me(
      m,
      w,
      C,
      T,
      U,
      le,
      oe
    ) : de(p, m, oe);
  }, me = (p, m, w, C, T, U, le) => {
    const G = p.component = tv(
      p,
      C,
      T
    );
    if (Gh(p) && (G.ctx.renderer = v), rv(G, !1, le), G.asyncDep) {
      if (T && T.registerDep(G, J, le), !p.el) {
        const oe = G.subTree = Be(si);
        y(null, oe, m, w), p.placeholder = oe.el;
      }
    } else
      J(
        G,
        p,
        m,
        w,
        T,
        U,
        le
      );
  }, de = (p, m, w) => {
    const C = m.component = p.component;
    if (Lb(p, m, w))
      if (C.asyncDep && !C.asyncResolved) {
        pe(C, m, w);
        return;
      } else
        C.next = m, C.update();
    else
      m.el = p.el, C.vnode = m;
  }, J = (p, m, w, C, T, U, le) => {
    const G = () => {
      if (p.isMounted) {
        let { next: te, bu: we, u: Se, parent: xe, vnode: Y } = p;
        {
          const Q = am(p);
          if (Q) {
            te && (te.el = Y.el, pe(p, te, le)), Q.asyncDep.then(() => {
              On(() => {
                p.isUnmounted || N();
              }, T);
            });
            return;
          }
        }
        let ye = te, F;
        Si(p, !1), te ? (te.el = Y.el, pe(p, te, le)) : te = Y, we && Ia(we), (F = te.props && te.props.onVnodeBeforeUpdate) && gr(F, xe, te, Y), Si(p, !0);
        const ne = If(p), $ = p.subTree;
        p.subTree = ne, g(
          $,
          ne,
          // parent may have changed if it's in a teleport
          u($.el),
          // anchor may have changed if it's in a fragment
          se($),
          p,
          T,
          U
        ), te.el = ne.el, ye === null && Vb(p, ne.el), Se && On(Se, T), (F = te.props && te.props.onVnodeUpdated) && On(
          () => gr(F, xe, te, Y),
          T
        );
      } else {
        let te;
        const { el: we, props: Se } = m, { bm: xe, m: Y, parent: ye, root: F, type: ne } = p, $ = os(m);
        Si(p, !1), xe && Ia(xe), !$ && (te = Se && Se.onVnodeBeforeMount) && gr(te, ye, m), Si(p, !0);
        {
          F.ce && F.ce._hasShadowRoot() && F.ce._injectChildStyle(
            ne,
            p.parent ? p.parent.type : void 0
          );
          const Q = p.subTree = If(p);
          g(
            null,
            Q,
            w,
            C,
            p,
            T,
            U
          ), m.el = Q.el;
        }
        if (Y && On(Y, T), !$ && (te = Se && Se.onVnodeMounted)) {
          const Q = m;
          On(
            () => gr(te, ye, Q),
            T
          );
        }
        (m.shapeFlag & 256 || ye && os(ye.vnode) && ye.vnode.shapeFlag & 256) && p.a && On(p.a, T), p.isMounted = !0, m = w = C = null;
      }
    };
    p.scope.on();
    const oe = p.effect = new bh(G);
    p.scope.off();
    const N = p.update = oe.run.bind(oe), L = p.job = oe.runIfDirty.bind(oe);
    L.i = p, L.id = p.uid, oe.scheduler = () => sd(L), Si(p, !0), N();
  }, pe = (p, m, w) => {
    m.component = p;
    const C = p.vnode.props;
    p.vnode = m, p.next = null, zb(p, m.props, C, w), Kb(p, m.children, w), Hr(), wf(p), Gr();
  }, fe = (p, m, w, C, T, U, le, G, oe = !1) => {
    const N = p && p.children, L = p ? p.shapeFlag : 0, te = m.children, { patchFlag: we, shapeFlag: Se } = m;
    if (we > 0) {
      if (we & 128) {
        X(
          N,
          te,
          w,
          C,
          T,
          U,
          le,
          G,
          oe
        );
        return;
      } else if (we & 256) {
        R(
          N,
          te,
          w,
          C,
          T,
          U,
          le,
          G,
          oe
        );
        return;
      }
    }
    Se & 8 ? (L & 16 && k(N, T, U), te !== N && d(w, te)) : L & 16 ? Se & 16 ? X(
      N,
      te,
      w,
      C,
      T,
      U,
      le,
      G,
      oe
    ) : k(N, T, U, !0) : (L & 8 && d(w, ""), Se & 16 && q(
      te,
      w,
      C,
      T,
      U,
      le,
      G,
      oe
    ));
  }, R = (p, m, w, C, T, U, le, G, oe) => {
    p = p || lo, m = m || lo;
    const N = p.length, L = m.length, te = Math.min(N, L);
    let we;
    for (we = 0; we < te; we++) {
      const Se = m[we] = oe ? Fr(m[we]) : Sr(m[we]);
      g(
        p[we],
        Se,
        w,
        null,
        T,
        U,
        le,
        G,
        oe
      );
    }
    N > L ? k(
      p,
      T,
      U,
      !0,
      !1,
      te
    ) : q(
      m,
      w,
      C,
      T,
      U,
      le,
      G,
      oe,
      te
    );
  }, X = (p, m, w, C, T, U, le, G, oe) => {
    let N = 0;
    const L = m.length;
    let te = p.length - 1, we = L - 1;
    for (; N <= te && N <= we; ) {
      const Se = p[N], xe = m[N] = oe ? Fr(m[N]) : Sr(m[N]);
      if (Lo(Se, xe))
        g(
          Se,
          xe,
          w,
          null,
          T,
          U,
          le,
          G,
          oe
        );
      else
        break;
      N++;
    }
    for (; N <= te && N <= we; ) {
      const Se = p[te], xe = m[we] = oe ? Fr(m[we]) : Sr(m[we]);
      if (Lo(Se, xe))
        g(
          Se,
          xe,
          w,
          null,
          T,
          U,
          le,
          G,
          oe
        );
      else
        break;
      te--, we--;
    }
    if (N > te) {
      if (N <= we) {
        const Se = we + 1, xe = Se < L ? m[Se].el : C;
        for (; N <= we; )
          g(
            null,
            m[N] = oe ? Fr(m[N]) : Sr(m[N]),
            w,
            xe,
            T,
            U,
            le,
            G,
            oe
          ), N++;
      }
    } else if (N > we)
      for (; N <= te; )
        ge(p[N], T, U, !0), N++;
    else {
      const Se = N, xe = N, Y = /* @__PURE__ */ new Map();
      for (N = xe; N <= we; N++) {
        const j = m[N] = oe ? Fr(m[N]) : Sr(m[N]);
        j.key != null && Y.set(j.key, N);
      }
      let ye, F = 0;
      const ne = we - xe + 1;
      let $ = !1, Q = 0;
      const K = new Array(ne);
      for (N = 0; N < ne; N++) K[N] = 0;
      for (N = Se; N <= te; N++) {
        const j = p[N];
        if (F >= ne) {
          ge(j, T, U, !0);
          continue;
        }
        let x;
        if (j.key != null)
          x = Y.get(j.key);
        else
          for (ye = xe; ye <= we; ye++)
            if (K[ye - xe] === 0 && Lo(j, m[ye])) {
              x = ye;
              break;
            }
        x === void 0 ? ge(j, T, U, !0) : (K[x - xe] = N + 1, x >= Q ? Q = x : $ = !0, g(
          j,
          m[x],
          w,
          null,
          T,
          U,
          le,
          G,
          oe
        ), F++);
      }
      const B = $ ? Yb(K) : lo;
      for (ye = B.length - 1, N = ne - 1; N >= 0; N--) {
        const j = xe + N, x = m[j], re = m[j + 1], ce = j + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          re.el || lm(re)
        ) : C;
        K[N] === 0 ? g(
          null,
          x,
          w,
          ce,
          T,
          U,
          le,
          G,
          oe
        ) : $ && (ye < 0 || N !== B[ye] ? A(x, w, ce, 2) : ye--);
      }
    }
  }, A = (p, m, w, C, T = null) => {
    const { el: U, type: le, transition: G, children: oe, shapeFlag: N } = p;
    if (N & 6) {
      A(p.component.subTree, m, w, C);
      return;
    }
    if (N & 128) {
      p.suspense.move(m, w, C);
      return;
    }
    if (N & 64) {
      le.move(p, m, w, v);
      return;
    }
    if (le === Ze) {
      n(U, m, w);
      for (let te = 0; te < oe.length; te++)
        A(oe[te], m, w, C);
      n(p.anchor, m, w);
      return;
    }
    if (le === hc) {
      z(p, m, w);
      return;
    }
    if (C !== 2 && N & 1 && G)
      if (C === 0)
        G.beforeEnter(U), n(U, m, w), On(() => G.enter(U), T);
      else {
        const { leave: te, delayLeave: we, afterLeave: Se } = G, xe = () => {
          p.ctx.isUnmounted ? i(U) : n(U, m, w);
        }, Y = () => {
          U._isLeaving && U[ub](
            !0
            /* cancelled */
          ), te(U, () => {
            xe(), Se && Se();
          });
        };
        we ? we(U, xe, Y) : Y();
      }
    else
      n(U, m, w);
  }, ge = (p, m, w, C = !1, T = !1) => {
    const {
      type: U,
      props: le,
      ref: G,
      children: oe,
      dynamicChildren: N,
      shapeFlag: L,
      patchFlag: te,
      dirs: we,
      cacheIndex: Se,
      memo: xe
    } = p;
    if (te === -2 && (T = !1), G != null && (Hr(), is(G, null, w, p, !0), Gr()), Se != null && (m.renderCache[Se] = void 0), L & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const Y = L & 1 && we, ye = !os(p);
    let F;
    if (ye && (F = le && le.onVnodeBeforeUnmount) && gr(F, m, p), L & 6)
      _(p.component, w, C);
    else {
      if (L & 128) {
        p.suspense.unmount(w, C);
        return;
      }
      Y && vi(p, null, m, "beforeUnmount"), L & 64 ? p.type.remove(
        p,
        m,
        w,
        v,
        C
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== Ze || te > 0 && te & 64) ? k(
        N,
        m,
        w,
        !1,
        !0
      ) : (U === Ze && te & 384 || !T && L & 16) && k(oe, m, w), C && P(p);
    }
    const ne = xe != null && Se == null;
    (ye && (F = le && le.onVnodeUnmounted) || Y || ne) && On(() => {
      F && gr(F, m, p), Y && vi(p, null, m, "unmounted"), ne && (p.el = null);
    }, w);
  }, P = (p) => {
    const { type: m, el: w, anchor: C, transition: T } = p;
    if (m === Ze) {
      O(w, C);
      return;
    }
    if (m === hc) {
      ee(p);
      return;
    }
    const U = () => {
      i(w), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: le, delayLeave: G } = T, oe = () => le(w, U);
      G ? G(p.el, U, oe) : oe();
    } else
      U();
  }, O = (p, m) => {
    let w;
    for (; p !== m; )
      w = f(p), i(p), p = w;
    i(m);
  }, _ = (p, m, w) => {
    const { bum: C, scope: T, job: U, subTree: le, um: G, m: oe, a: N } = p;
    Ff(oe), Ff(N), C && Ia(C), T.stop(), U && (U.flags |= 8, ge(le, p, m, w)), G && On(G, m), On(() => {
      p.isUnmounted = !0;
    }, m);
  }, k = (p, m, w, C = !1, T = !1, U = 0) => {
    for (let le = U; le < p.length; le++)
      ge(p[le], m, w, C, T);
  }, se = (p) => {
    if (p.shapeFlag & 6)
      return se(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = f(p.anchor || p.el), w = m && m[lb];
    return w ? f(w) : m;
  };
  let Z = !1;
  const I = (p, m, w) => {
    let C;
    p == null ? m._vnode && (ge(m._vnode, null, null, !0), C = m._vnode.component) : g(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      w
    ), m._vnode = p, Z || (Z = !0, wf(C), Rh(), Z = !1);
  }, v = {
    p: g,
    um: ge,
    m: A,
    r: P,
    mt: me,
    mc: q,
    pc: fe,
    pbc: _e,
    n: se,
    o: e
  };
  return {
    render: I,
    hydrate: void 0,
    createApp: Eb(I)
  };
}
function pc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Si({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sm(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Fr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && sm(s, a)), a.type === Kl && (a.patchFlag === -1 && (a = i[o] = Fr(a)), a.el = s.el), a.type === si && !a.el && (a.el = s.el);
    }
}
function Yb(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < c ? o = a + 1 : s = a;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function am(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : am(t);
}
function Ff(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function lm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? lm(t.subTree) : null;
}
const cm = (e) => e.__isSuspense;
function qb(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : rb(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Kl = /* @__PURE__ */ Symbol.for("v-txt"), si = /* @__PURE__ */ Symbol.for("v-cmt"), hc = /* @__PURE__ */ Symbol.for("v-stc"), as = [];
let Kn = null;
function Re(e = !1) {
  as.push(Kn = e ? null : []);
}
function Xb() {
  as.pop(), Kn = as[as.length - 1] || null;
}
let bs = 1;
function Tf(e, t = !1) {
  bs += e, e < 0 && Kn && t && (Kn.hasOnce = !0);
}
function um(e) {
  return e.dynamicChildren = bs > 0 ? Kn || lo : null, Xb(), bs > 0 && Kn && Kn.push(e), e;
}
function Ve(e, t, r, n, i, o) {
  return um(
    Me(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Vn(e, t, r, n, i) {
  return um(
    Be(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function dm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fm = ({ key: e }) => e ?? null, Oa = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Qt(e) || /* @__PURE__ */ yn(e) || dt(e) ? { i: Gn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fm(t),
    ref: t && Oa(t),
    scopeId: Vh,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Gn
  };
  return a ? (ud(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Qt(r) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Kn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Kn.push(l), l;
}
const Be = Jb;
function Jb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Uh) && (e = si), dm(e)) {
    const a = vo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && ud(a, r), bs > 0 && !o && Kn && (a.shapeFlag & 6 ? Kn[Kn.indexOf(e)] = a : Kn.push(a)), a.patchFlag = -2, a;
  }
  if (lv(e) && (e = e.__vccOpts), t) {
    t = Zb(t);
    let { class: a, style: l } = t;
    a && !Qt(a) && (t.class = mt(a)), Ft(l) && (/* @__PURE__ */ od(l) && !it(l) && (l = bn({}, l)), t.style = Et(l));
  }
  const s = Qt(e) ? 1 : cm(e) ? 128 : cb(e) ? 64 : Ft(e) ? 4 : dt(e) ? 2 : 0;
  return Me(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Zb(e) {
  return e ? /* @__PURE__ */ od(e) || em(e) ? bn({}, e) : e : null;
}
function vo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Tr(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && fm(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(Oa(t)) : [o, Oa(t)] : Oa(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && vo(e.ssContent),
    ssFallback: e.ssFallback && vo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && ad(
    d,
    l.clone(d)
  ), d;
}
function Uo(e = " ", t = 0) {
  return Be(Kl, null, e, t);
}
function lt(e = "", t = !1) {
  return t ? (Re(), Vn(si, null, e)) : Be(si, null, e);
}
function Sr(e) {
  return e == null || typeof e == "boolean" ? Be(si) : it(e) ? Be(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dm(e) ? Fr(e) : Be(Kl, null, String(e));
}
function Fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vo(e);
}
function ud(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ud(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !em(t) ? t._ctx = Gn : i === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else dt(t) ? (t = { default: t, _ctx: Gn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Uo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Tr(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = mt([t.class, n.class]));
      else if (i === "style")
        t.style = Et([t.style, n.style]);
      else if (Fl(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Tl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function gr(e, t, r, n = null) {
  Ar(e, t, 7, [
    r,
    n
  ]);
}
const Qb = qh();
let ev = 0;
function tv(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Qb, o = {
    uid: ev++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Py(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: nm(n, i),
    emitsOptions: Xh(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Rt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Rt,
    data: Rt,
    props: Rt,
    attrs: Rt,
    slots: Rt,
    refs: Rt,
    setupState: Rt,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fb.bind(null, o), e.ce && e.ce(o), o;
}
let hn = null;
const nv = () => hn || Gn;
let nl, lu;
{
  const e = Ll(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  nl = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => hn = r
  ), lu = t(
    "__VUE_SSR_SETTERS__",
    (r) => vs = r
  );
}
const Ls = (e) => {
  const t = hn;
  return nl(e), e.scope.on(), () => {
    e.scope.off(), nl(t);
  };
}, Df = () => {
  hn && hn.scope.off(), nl(null);
};
function pm(e) {
  return e.vnode.shapeFlag & 4;
}
let vs = !1;
function rv(e, t = !1, r = !1) {
  t && lu(t);
  const { props: n, children: i } = e.vnode, o = pm(e);
  $b(e, n, o, t), Gb(e, i, r || t);
  const s = o ? iv(e, t) : void 0;
  return t && lu(!1), s;
}
function iv(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xb);
  const { setup: n } = r;
  if (n) {
    Hr();
    const i = e.setupContext = n.length > 1 ? sv(e) : null, o = Ls(e), s = Ds(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = dh(s);
    if (Gr(), o(), (a || e.sp) && !os(e) && Hh(e), a) {
      if (s.then(Df, Df), t)
        return s.then((l) => {
          Rf(e, l);
        }).catch((l) => {
          $l(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Rf(e, s);
  } else
    hm(e);
}
function Rf(e, t, r) {
  dt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ft(t) && (e.setupState = Fh(t)), hm(e);
}
function hm(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || xr);
  {
    const i = Ls(e);
    Hr();
    try {
      Mb(e);
    } finally {
      Gr(), i();
    }
  }
}
const ov = {
  get(e, t) {
    return pn(e, "get", ""), e[t];
  }
};
function sv(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, ov),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Wl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fh(Yy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ss)
        return ss[r](e);
    },
    has(t, r) {
      return r in t || r in ss;
    }
  })) : e.proxy;
}
function av(e, t = !0) {
  return dt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function lv(e) {
  return dt(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ Zy(e, t, vs), cv = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cu;
const Lf = typeof window < "u" && window.trustedTypes;
if (Lf)
  try {
    cu = /* @__PURE__ */ Lf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const mm = cu ? (e) => cu.createHTML(e) : (e) => e, uv = "http://www.w3.org/2000/svg", dv = "http://www.w3.org/1998/Math/MathML", Or = typeof document < "u" ? document : null, Vf = Or && /* @__PURE__ */ Or.createElement("template"), fv = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Or.createElementNS(uv, e) : t === "mathml" ? Or.createElementNS(dv, e) : r ? Or.createElement(e, { is: r }) : Or.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Or.createTextNode(e),
  createComment: (e) => Or.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Or.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Vf.innerHTML = mm(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Vf.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, pv = /* @__PURE__ */ Symbol("_vtc");
function hv(e, t, r) {
  const n = e[pv];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const rl = /* @__PURE__ */ Symbol("_vod"), gm = /* @__PURE__ */ Symbol("_vsh"), Li = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[rl] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Vo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Vo(e, !0), n.enter(e)) : n.leave(e, () => {
      Vo(e, !1);
    }) : Vo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vo(e, t);
  }
};
function Vo(e, t) {
  e.style.display = t ? e[rl] : "none", e[gm] = !t;
}
const mv = /* @__PURE__ */ Symbol(""), gv = /(?:^|;)\s*display\s*:/;
function yv(e, t, r) {
  const n = e.style, i = Qt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Qt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && Fa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && Fa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), Fa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[mv];
      s && (r += ";" + s), n.cssText = r, o = gv.test(r);
    }
  } else t && e.removeAttribute("style");
  rl in e && (e[rl] = o ? n.display : "", e[gm] && (n.display = "none"));
}
const $f = /\s*!important$/;
function Fa(e, t, r) {
  if (it(r))
    r.forEach((n) => Fa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = bv(e, t);
    $f.test(r) ? e.setProperty(
      zi(n),
      r.replace($f, ""),
      "important"
    ) : e[n] = r;
  }
}
const zf = ["Webkit", "Moz", "ms"], mc = {};
function bv(e, t) {
  const r = mc[t];
  if (r)
    return r;
  let n = Nn(t);
  if (n !== "filter" && n in e)
    return mc[t] = n;
  n = Rl(n);
  for (let i = 0; i < zf.length; i++) {
    const o = zf[i] + n;
    if (o in e)
      return mc[t] = o;
  }
  return t;
}
const jf = "http://www.w3.org/1999/xlink";
function Hf(e, t, r, n, i, o = My(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(jf, t.slice(6, t.length)) : e.setAttributeNS(jf, t, r) : r == null || o && !mh(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : Pr(r) ? String(r) : r
  );
}
function Gf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? mm(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = mh(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function eo(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function vv(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Kf = /* @__PURE__ */ Symbol("_vei");
function Sv(e, t, r, n, i = null) {
  const o = e[Kf] || (e[Kf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = _v(t);
    if (n) {
      const c = o[t] = xv(
        n,
        i
      );
      eo(e, a, c, l);
    } else s && (vv(e, a, s, l), o[t] = void 0);
  }
}
const Wf = /(?:Once|Passive|Capture)$/;
function _v(e) {
  let t;
  if (Wf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Wf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zi(e.slice(2)), t];
}
let gc = 0;
const wv = /* @__PURE__ */ Promise.resolve(), kv = () => gc || (wv.then(() => gc = 0), gc = Date.now());
function xv(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ar(
      Mv(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = kv(), r;
}
function Mv(e, t) {
  if (it(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const Uf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nv = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? hv(e, n, s) : t === "style" ? yv(e, r, n) : Fl(t) ? Tl(t) || Sv(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pv(e, t, n, s)) ? (Gf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Hf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Av(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qt(n))) ? Gf(e, Nn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Hf(e, t, n, s));
};
function Pv(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Uf(t) && dt(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Uf(t) && Qt(r) ? !1 : t in e;
}
function Av(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Nn(t);
  return Array.isArray(r) ? r.some((i) => Nn(i) === n) : Object.keys(r).some((i) => Nn(i) === n);
}
const Bf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => Ia(t, r) : t;
};
function Cv(e) {
  e.target.composing = !0;
}
function Yf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const yc = /* @__PURE__ */ Symbol("_assign");
function qf(e, t, r) {
  return t && (e = e.trim()), r && (e = Ju(e)), e;
}
const Xf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[yc] = Bf(i);
    const o = n || i.props && i.props.type === "number";
    eo(e, t ? "change" : "input", (s) => {
      s.target.composing || e[yc](qf(e.value, r, o));
    }), (r || o) && eo(e, "change", () => {
      e.value = qf(e.value, r, o);
    }), t || (eo(e, "compositionstart", Cv), eo(e, "compositionend", Yf), eo(e, "change", Yf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[yc] = Bf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Ju(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Iv = ["ctrl", "shift", "alt", "meta"], Ev = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Iv.some((r) => e[`${r}Key`] && !t.includes(r))
}, Mt = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Ev[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Ov = /* @__PURE__ */ bn({ patchProp: Nv }, fv);
let Jf;
function Fv() {
  return Jf || (Jf = Wb(Ov));
}
const dd = ((...e) => {
  const t = Fv().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Dv(n);
    if (!i) return;
    const o = t._component;
    !dt(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Tv(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Tv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Dv(e) {
  return Qt(e) ? document.querySelector(e) : e;
}
function Fe(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function fd(e, t) {
  let r = Kt(t) - Kt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const uu = 3;
function $o(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function il(e, t = 0) {
  const r = $o(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = $o(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = $o(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = $o(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign($o(t) || 0);
}
function ym(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var r;
    return (r = e.focus) == null ? void 0 : r.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var r;
    return (r = e.removeEventListener) == null ? void 0 : r.call(e, "pointerenter", t);
  };
}
const Zf = Math.PI / 180, Qf = 0.12, Rv = uu, Lv = 35, Vv = 140, Bo = 100, $v = 20, ep = 0.8;
function zv(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Fe(Number(e || Bo), 1, 179) * Zf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Zf;
}
function pd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Bo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(H, z = null) {
    a && a(H, z);
  }
  function d(H, z, ee = null, E = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(H || 0), l.drag.lastY = Number(z || 0), l.drag.lastTs = Number(E || performance.now()), l.drag.pointerId = ee, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: ee }), !0;
  }
  function u(H, z, ee = "pano", E = performance.now()) {
    if (!l.drag.active) return !1;
    const W = Number(E || performance.now()), D = Number(H), q = Number(z), ve = D - l.drag.lastX, _e = q - l.drag.lastY;
    l.drag.lastX = D, l.drag.lastY = q, l.drag.lastTs = W;
    const he = n() || { x: 1, y: 1 }, ie = Number(he.x || 1), ke = Number(he.y || 1), me = { ...t() };
    let de = 0, J = 0;
    if (ee === "unwrap") {
      const fe = i() || { w: 1, h: 1 }, R = Math.max(1, Number(fe.w || 1)), X = Math.max(1, Number(fe.h || 1)), A = ve / R, ge = _e / X;
      de = -A * 360 * ie, J = ge * 180 * ke;
    } else {
      const fe = o() || { w: 0, h: 0 }, R = Math.max(1, Number(fe.w || 0)), X = Math.max(1, Number(fe.h || 0));
      if (R > 1 && X > 1) {
        const A = Fe(Number(me.fov || Bo), 1, 179), ge = Fe(zv(A, R, X), 0.1, 179);
        de = -(ve / R) * A * ie, J = _e / X * ge * ke;
      } else
        de = -ve * Qf * ie, J = _e * Qf * ke;
    }
    me.yaw = Kt(Number(me.yaw || 0) + de), me.pitch = Fe(Number(me.pitch || 0) + J, -89.9, 89.9), r(me), l.velHistory.push({ ts: W, yaw: me.yaw, pitch: me.pitch });
    let pe = 0;
    for (; pe < l.velHistory.length - 1 && l.velHistory[pe].ts < W - 100; ) pe++;
    return pe > 0 && l.velHistory.splice(0, pe), l.inertia.active = !1, l.inertia.lastTs = W, s(), c("drag", { phase: "move", dx: ve, dy: _e, dYaw: de, dPitch: J }), !0;
  }
  function f(H = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const z = Number(H || performance.now());
    l.drag.lastTs = z;
    const ee = l.velHistory.filter((W) => z - W.ts <= 80);
    if (ee.length >= 2) {
      const W = ee[0], D = ee.at(-1), q = Math.max(1e-3, (D.ts - W.ts) / 1e3);
      let ve = D.yaw - W.yaw;
      ve > 180 && (ve -= 360), ve < -180 && (ve += 360), l.inertia.vx = ve / q, l.inertia.vy = (D.pitch - W.pitch) / q;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const E = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = E > $v, l.inertia.lastTs = z, c("drag", { phase: "end", speed: E, inertiaActive: l.inertia.active }), !0;
  }
  function h(H = performance.now()) {
    if (!l.inertia.active) return !1;
    const z = Number(H || performance.now()), ee = Math.max(1e-3, (z - (l.inertia.lastTs || z)) / 1e3);
    l.inertia.lastTs = z;
    const E = { ...t() };
    E.yaw = Kt(Number(E.yaw || 0) + l.inertia.vx * ee), E.pitch = Fe(Number(E.pitch || 0) + l.inertia.vy * ee, -89.9, 89.9);
    const W = Math.exp(-5.5 * ee);
    return l.inertia.vx *= W, l.inertia.vy *= W, Math.abs(l.inertia.vx) < ep && Math.abs(l.inertia.vy) < ep && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(E), s(), l.inertia.active;
  }
  function S() {
    const H = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], H;
  }
  function g(H) {
    const z = Math.sign(Number(H || 0));
    if (!z) return !1;
    const ee = { ...t() }, E = Number(ee.fov || Bo);
    return ee.fov = Fe(E + z * Rv, Lv, Vv), r(ee), s(), c("wheel", { deltaSign: z, fovBefore: E, fovAfter: ee.fov }), !0;
  }
  function b(H, z = 0) {
    return g(il(H, z));
  }
  function y() {
    r({ yaw: 0, pitch: 0, fov: Bo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: h,
    stopMotion: S,
    applyWheel: g,
    applyWheelEvent: b,
    resetView: y
  };
}
const jv = "PanoramaSuite.Debug.Diagnostics", Hv = "PanoramaSuite.Debug.ExportDiagnostics", bc = "pano_suite.diagnostics.v1", tp = "pano_suite.diagnostics.previous.v1", Gv = 300, Kv = 2e5, Wv = 100, Uv = 20, Bv = 1e3, Yv = 2, ma = 1024 * 1024;
function Qr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function qv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Xv() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: qv,
    document: () => globalThis.document ?? null,
    setInterval: (e, t) => globalThis.setInterval(e, t),
    clearInterval: (e) => globalThis.clearInterval(e),
    addUnload: (e) => {
      var t;
      return (t = globalThis.addEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    removeUnload: (e) => {
      var t;
      return (t = globalThis.removeEventListener) == null ? void 0 : t.call(globalThis, "beforeunload", e);
    },
    memory: () => {
      var e;
      return ((e = globalThis.performance) == null ? void 0 : e.memory) ?? null;
    },
    observeLongTasks(e) {
      var n;
      const t = globalThis.PerformanceObserver;
      if (!((n = t == null ? void 0 : t.supportedEntryTypes) != null && n.includes("longtask"))) return null;
      const r = new t((i) => e(i.getEntries()));
      return r.observe({ type: "longtask" }), () => r.disconnect();
    },
    userAgent: () => {
      var e;
      return ((e = globalThis.navigator) == null ? void 0 : e.userAgent) ?? "";
    },
    console: globalThis.console,
    WeakRef: globalThis.WeakRef,
    FinalizationRegistry: globalThis.FinalizationRegistry
  };
}
function Jv(e = {}) {
  const t = { ...Xv(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, h = { created: 0, collected: 0 }, S = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    d.delete(v), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((v) => {
    u.delete(v), h.collected += 1;
  }) : null, b = /* @__PURE__ */ new Set(), y = { created: 0, lost: 0, restored: 0, disposed: 0 }, H = [], z = /* @__PURE__ */ new Map();
  let ee = { count: 0, maxMs: 0 }, E = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 };
  const D = [];
  function q(v, V, p = void 0) {
    H.push(p === void 0 ? { t: t.clock(), type: v, label: V } : { t: t.clock(), type: v, label: V, detail: p }), H.length > Wv && H.shift();
  }
  function ve(v, V, p, m, w) {
    if (!r || !m || !t.WeakRef) return m;
    const C = { ref: new t.WeakRef(m), label: w };
    return v.add(C), V == null || V.register(m, C), p.created += 1, m;
  }
  function _e(v, V = "") {
    return ve(d, S, f, v, V);
  }
  function he(v, V = "") {
    return ve(u, g, h, v, V);
  }
  function ie({ label: v = "", width: V, height: p, offscreen: m = !1 } = {}) {
    const w = globalThis.OffscreenCanvas;
    let C;
    return m && typeof w < "u" ? C = new w(V, p) : (C = t.document().createElement("canvas"), V !== void 0 && p !== void 0 && (C.width = V, C.height = p)), _e(C, v);
  }
  function ke(v) {
    v.width = 0, v.height = 0, r && (f.released += 1);
  }
  function me(v = t.document(), V = "") {
    var p;
    return he(((p = v == null ? void 0 : v.createElement) == null ? void 0 : p.call(v, "video")) || null, V);
  }
  function de(v, V) {
    if (!r || !v) return () => {
    };
    const p = { label: V, lost: !1, disposed: !1 };
    b.add(p), y.created += 1, q("webgl-created", V);
    const m = () => {
      p.disposed || (p.lost = !0, y.lost += 1, q("webglcontextlost", V));
    }, w = () => {
      p.disposed || (p.lost = !1, y.restored += 1, q("webglcontextrestored", V));
    };
    return v.addEventListener("webglcontextlost", m), v.addEventListener("webglcontextrestored", w), () => {
      p.disposed || (p.disposed = !0, b.delete(p), y.disposed += 1, q("webgl-disposed", V));
    };
  }
  function J(v, V) {
    return z.set(v, V), () => {
      z.get(v) === V && z.delete(v);
    };
  }
  function pe() {
    return r ? t.now() : -1;
  }
  function fe(v) {
    if (v < 0 || !r) return;
    const V = t.now() - v;
    ee.count += 1, ee.maxMs = Math.max(ee.maxMs, V);
  }
  function R(v, V) {
    if (V < 0 || !r) return;
    const p = t.now() - V, m = E.get(v) ?? { count: 0, maxMs: 0 };
    m.count += 1, m.maxMs = Math.max(m.maxMs, p), E.set(v, m);
  }
  function X() {
    let v = 0, V = 0, p = 0, m = [0, 0];
    const w = {};
    for (const C of d) {
      const T = C.ref.deref();
      if (!T) continue;
      v += 1;
      const U = T.width * T.height;
      U > 0 && (V += 1), p += U, U > m[0] * m[1] && (m = [T.width, T.height]);
      const le = w[C.label] ?? (w[C.label] = [0, 0]);
      le[0] += 1, le[1] += U;
    }
    return { ...f, alive: v, sized: V, pixels: p, mb: Qr(p * 4 / ma, 1), largest: m, byLabel: w };
  }
  function A() {
    const v = [];
    let V = 0, p = 0, m = 0;
    for (const w of u) {
      const C = w.ref.deref();
      if (!C) continue;
      V += 1;
      const T = !!(C.currentSrc || C.src);
      T && (p += 1);
      const U = !C.paused && !C.ended;
      U && (m += 1), v.length < Uv && v.push({
        label: w.label,
        playing: U,
        src: T,
        size: [C.videoWidth || 0, C.videoHeight || 0],
        ready: C.readyState ?? 0,
        connected: !!C.isConnected
      });
    }
    return { ...h, alive: V, loaded: p, playing: m, list: v };
  }
  function ge() {
    const v = t.now(), V = t.memory(), p = {
      t: t.clock(),
      heap: V ? { used: Qr(V.usedJSHeapSize / ma, 1), total: Qr(V.totalJSHeapSize / ma, 1), limit: Qr(V.jsHeapSizeLimit / ma, 1) } : null,
      canvas: X(),
      webgl: { ...y, alive: [...b].filter((m) => !m.lost).length },
      video: A(),
      frame: { count: ee.count, maxMs: Qr(ee.maxMs), longTasks: W.count, longTaskMaxMs: Qr(W.maxMs) },
      renders: Object.fromEntries([...E].map(([m, w]) => [m, { count: w.count, maxMs: Qr(w.maxMs) }])),
      sources: Object.fromEntries([...z].map(([m, w]) => [m, w()])),
      costMs: Qr(c, 3)
    };
    return ee = { count: 0, maxMs: 0 }, E = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 }, D.push({ record: p, text: JSON.stringify(p) }), D.length > Gv && D.shift(), l += 1, l % Yv === 0 && O(), c = t.now() - v, p;
  }
  function P(v = Kv) {
    const V = JSON.stringify({ ...o, events: H }).slice(0, -1);
    let p = v - V.length - 14, m = D.length;
    for (; m > 0 && p - D[m - 1].text.length - 1 >= 0; )
      m -= 1, p -= D[m].text.length + 1;
    return `${V},"records":[${D.slice(m).map((w) => w.text).join(",")}]}`;
  }
  function O() {
    if (!o) return;
    const v = t.storage();
    if (v) {
      o.savedAt = t.clock();
      try {
        v.setItem(bc, P());
      } catch {
      }
    }
  }
  function _() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", O();
  }
  function k() {
    var w;
    if (n) return i;
    n = !0;
    const v = t.storage();
    if (!v) return null;
    let V = null;
    try {
      if (V = v.getItem(bc), V === null) {
        const C = v.getItem(tp);
        return i = C === null ? null : JSON.parse(C), i;
      }
      v.setItem(tp, V), v.removeItem(bc), i = JSON.parse(V);
    } catch {
      return i;
    }
    const p = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], m = p.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${p.length} records kept. Its last records:`,
      JSON.stringify(m)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((w = p.at(-1)) == null ? void 0 : w.t) || 0).toISOString()}; ${p.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(m)
    ), i;
  }
  function se(v) {
    const V = v === !0;
    if (k(), V !== r) {
      if (r = V, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, D.length = 0, a = t.observeLongTasks((p) => {
          for (const m of p)
            W.count += 1, W.maxMs = Math.max(W.maxMs, m.duration);
        }), t.addUnload(_), s = t.setInterval(ge, Bv), O();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(_), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", O();
    }
  }
  function Z() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...H], records: D.map((v) => v.record) } : null,
      previous: i
    };
  }
  function I() {
    const v = t.document(), V = new Blob([JSON.stringify(Z(), null, 1)], { type: "application/json" }), p = URL.createObjectURL(V), m = v.createElement("a");
    m.href = p, m.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, m.click(), setTimeout(() => URL.revokeObjectURL(p), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ie,
    releaseCanvas: ke,
    trackCanvas: _e,
    createVideo: me,
    trackVideo: he,
    watchContext: de,
    addSource: J,
    frameStart: pe,
    frameEnd: fe,
    renderEnd: R,
    sample: ge,
    serialize: P,
    recoverPrevious: k,
    setEnabled: se,
    exportData: Z,
    download: I
  };
}
const Ln = Jv(), on = Ln.createCanvas, Ai = Ln.releaseCanvas, vc = Ln.trackCanvas, Vs = Ln.createVideo, np = Ln.trackVideo, Zv = Ln.addSource, Qv = Ln.frameStart, e1 = Ln.frameEnd;
function bm(e, t) {
  const r = Ln.watchContext(e.canvas, t), n = Ln.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Ln.frameStart(), l = o(s);
    return Ln.renderEnd(t, a), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (n(), r());
    }
  };
}
const t1 = {
  id: jv,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Ln.setEnabled(e === !0)
}, rp = {
  id: Hv,
  label: "Export Panorama Suite diagnostics",
  function: () => Ln.download()
}, wt = Math.PI / 180, rn = 180 / Math.PI;
function Qn(e, t, r) {
  return { x: e, y: t, z: r };
}
function ol(e, t) {
  return Qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function sl(e, t) {
  return Qn(e.x * t, e.y * t, e.z * t);
}
function Sc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function hd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Qn(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Qn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function No(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Qn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Qn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Qn(a * l, c, s * l)
  };
}
function al(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function n1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function r1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = It(n.z_index ?? n.zIndex, t.length);
    t.push({
      id: String(n.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: n.locked === !0
    });
  }
  return t;
}
function i1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function o1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = It(e.t, 0), n = It(e.widthScale, null), i = It(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = It(e.u, null), s = It(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  return null;
}
function ga(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = o1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function s1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = ga(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = ga(e.points, t, 1);
  if (!o) return null;
  const s = ga(e.rawPoints, t, 1), a = ga(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function a1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = i1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = s1(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = It(e.size, null), s = It(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = It(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, It(f.r, 0))),
      g: Math.max(0, Math.min(1, It(f.g, 0))),
      b: Math.max(0, Math.min(1, It(f.b, 0))),
      a: Math.max(0, Math.min(1, It(f.a, 1)))
    };
  }
  return {
    id: a,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: It(e.hardness, null),
    flow: It(e.flow, null),
    spacing: It(e.spacing, null),
    createdAt: Math.trunc(It(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function ip(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = a1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function l1(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function c1(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function u1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = l1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: c1(e.transform)
  } : null;
}
function d1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = u1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function ji(e) {
  const t = n1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: r1(e.groups),
    paint: ip(e.paint, "paint"),
    mask: ip(e.mask, "mask"),
    raster_objects: d1(e.raster_objects)
  };
}
const tr = 1, nr = 179, du = 85;
function Ul(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function vm(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Sm(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * rn;
  return r && (n = Math.round(n / 15) * 15), Ul(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ui(e = {}) {
  const t = Fe(ot(e.hFOV_deg || 90, 90), tr, nr), r = Fe(ot(e.vFOV_deg || 60, 60), tr, nr), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
  return {
    yawDeg: ot(e.yaw_deg, 0),
    pitchDeg: ot(e.pitch_deg, 0),
    rollDeg: ot(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Vi(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ui(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function md(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function gd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Fe(2 * Math.atan(n / (2 * r)) * rn, tr, nr), s = Fe(2 * Math.atan(i / (2 * r)) * rn, tr, nr);
  return { hFOV_deg: o, vFOV_deg: s };
}
function f1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ui(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function yd(e, t, r = du) {
  const n = Math.max(1e-12, ot(t, 1)), i = Fe(ot(r, du), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function _m(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function p1(e, t) {
  const r = Fe(ot(e, 90), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * rn,
    tr,
    nr
  );
}
function Ta(e, t) {
  const r = Fe(ot(e, 60), tr, nr), n = Math.max(1e-6, ot(t, 1));
  return Fe(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * rn,
    tr,
    nr
  );
}
function op(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function h1(e, t) {
  const r = op(e, 1), n = op(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Hi(e) {
  const t = Fe(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Fe(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Fi(e) {
  const t = Hi(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || h1(t, 1);
}
function bd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Fi(t), t;
}
function wm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Fe(s, tr, nr) : Fe(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return bd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Fe(ot(r, 0), -89.9, 89.9),
    roll_deg: Ul(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Fi(e);
}
function km(e, t) {
  const r = ui(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * rn, o = 2 * Math.atan(r.tanHalfY * n) * rn;
  return i < tr || i > nr || o < tr || o > nr ? null : { hFOV_deg: i, vFOV_deg: o };
}
function xm(e, t, r = uu) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, uu));
  if (!n || !(i > 0)) return null;
  const o = ui(e), s = o.hFovDeg + n * i;
  if (s < tr || s > nr) return null;
  const a = Math.tan(s * wt * 0.5);
  return km(e, a / o.tanHalfX);
}
function Mm(e, t) {
  const r = ui(e), n = No(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return hd(ol(ol(n.fwd, sl(n.right, i)), sl(n.up, o)));
}
function m1(e) {
  return Qn(e.x, e.y, -e.z);
}
function Da(e) {
  return Qn(e.x, e.y, -e.z);
}
function Pn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = No(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Nm(e) {
  const t = Da(Qn(e[0][0], e[1][0], e[2][0])), r = Da(Qn(e[0][1], e[1][1], e[2][1])), n = Da(Qn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * rn, pitchDeg: o * rn, rollDeg: l * rn };
}
function Ss(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function di(e) {
  const [[t, r, n], [i, o, s], [a, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - s) * f, y: (n - a) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + a) / f, w: (l - s) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (s + l) / f, w: (n - a) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + a) / u, y: (s + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function ya(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Ci = 1e-6, fu = 1e-6, g1 = 1e-9;
function _s(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function y1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    _s(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return _s(0, n, o, 1, 0.5 * (s + a));
}
function So(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function _o(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, h, S) => f + h * a[S], 0) < 0) return r.map(() => 0);
  const l = s.map((f, h) => (f * o + a[h] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((h, S) => h + S * S, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Pm(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  So(e, n) && (l = _o(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return So(e, n + 1) && (c = _o(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function Am(e, t, r, n, i) {
  const [[o], [s]] = Pm(e, t, r.map((a) => [a]), n);
  return _s(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function b1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = Pm(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => _s(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function ll([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function v1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function _c(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function S1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function pu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function so(e, t) {
  return S1(ll([-e[0], -e[1], -e[2], e[3]], t));
}
function wc(e, t, r) {
  return ll(e, pu(so(e, t).map((n) => r * n)));
}
function kc(e, t) {
  const r = v1(e, t);
  if (Math.abs(r) > fu) return r < 0;
  const [n, i, o] = so(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > fu) return s < 0;
  return !1;
}
function ba(e) {
  const { x: t, y: r, z: n, w: i } = di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function hu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function _1(e, t, r, n) {
  const i = ba(e[r].value);
  let o = ba(e[r + 1].value);
  kc(i, o) && (o = _c(o));
  const s = t[r + 1] - t[r], a = so(i, o);
  let l = a;
  if (So(e, r)) {
    let E = ba(e[r - 1].value);
    kc(E, i) && (E = _c(E)), l = _o(t, r, so(i, E), a).map((W) => W * s);
  }
  let c = a;
  if (So(e, r + 1)) {
    let E = ba(e[r + 2].value);
    kc(o, E) && (E = _c(E)), c = _o(t, r + 1, so(o, i), so(o, E)).map((W) => W * s);
  }
  const d = ll(i, pu(l.map((E, W) => 0.5 * (E - a[W])))), u = ll(o, pu(a.map((E, W) => 0.5 * (E - c[W])))), [f, h, S, g] = wc(wc(i, o, n), wc(d, u, n), 2 * n * (1 - n)), { yawDeg: b, pitchDeg: y, rollDeg: H } = Nm(Ss({ x: f, y: h, z: S, w: g })), z = e[r].value, ee = e[r + 1].value;
  return {
    yaw_deg: hu(b, z.yaw_deg, ee.yaw_deg, n),
    pitch_deg: y,
    roll_deg: hu(H, z.roll_deg, ee.roll_deg, n)
  };
}
function ws(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function cl(e) {
  return Math.sqrt(ws(e, e));
}
function ul(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Cm(e, t) {
  const r = ws(e, t), n = t.map((s, a) => s - r * e[a]), i = cl(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function to(e, t) {
  const r = cl(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function va(e, t, r) {
  return to(e, Cm(e, t).map((n) => r * n));
}
function xc(e, t) {
  const r = ul(e[t].value), n = ul(e[t + 1].value), i = ws(r, n), o = i < 0 && cl(n.map((l, c) => l - i * r[c])) <= fu;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = Cm(r, n);
  const a = cl(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function w1(e, t, r, n) {
  const i = ul(e[r].value), o = ul(e[r + 1].value), [s, a, l] = xc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  So(e, r) && (c = _o(t, r, xc(e, r - 1)[1].map((z) => -z), c).map((z) => z * u)), So(e, r + 1) && (d = _o(t, r + 1, d.map((z) => -z), xc(e, r + 1)[0]).map((z) => z * u));
  let f, h, S;
  if (l) {
    const z = Math.PI, ee = _s(0, ws(c, s) / z / 3, z - ws(d, a) / z / 3, z, n);
    [f, h, S] = to(i, s.map((E) => ee * E / z));
  } else {
    const z = va(to(i, c.map((W) => W / 3)), to(o, d.map((W) => -W / 3)), n), ee = va(to(i, c.map((W) => n * W / 3)), z, n), E = va(z, to(o, d.map((W) => -(1 - n) * W / 3)), n);
    [f, h, S] = va(ee, E, n);
  }
  const g = Math.hypot(f, S), b = e[r].value.yaw_deg, y = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= g1 ? b + (y - b) * n : hu(Math.atan2(f, S) * 180 / Math.PI, b, y, n), pitch_deg: Math.atan2(h, g) * 180 / Math.PI };
}
function k1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Am(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function x1(e, t, r, n) {
  return Am(e, t, e.map((i) => i.value), r, n);
}
const M1 = { position: b1, rotation: _1, direction: w1, size: k1 };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return ya(e[t].value);
  if (r <= n[0].frame + Ci) return ya(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - Ci) return ya(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + Ci; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= Ci || s.easing === "hold") return ya(s.value);
  const a = n.map((c) => c.frame), l = y1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (M1[t] ?? x1)(n, a, o, l);
}
function mu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function N1(e) {
  return Math.min(1, Math.max(0, e));
}
function Im(e) {
  return Math.max(1e-6, e);
}
function Em(e, t) {
  return t - (e.start - e.in);
}
function Gi(e, t) {
  return t >= e.start - Ci && (e.duration === null || t < e.start + e.duration - Ci);
}
function Bl(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: mu(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function $s(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Em(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Bl(n, r),
    scene: {
      active: i.visible && Gi(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: Im(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Wr(s, r))
  };
}
function P1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: Im(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: mu(r.hFOV_deg),
    vFOV_deg: mu(r.vFOV_deg)
  };
}
function Wr(e, t) {
  const r = Em(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Gi(e.clip, t),
    clip_frame: r,
    ...P1(e, r),
    opacity: N1(Wt(e, "opacity", r))
  };
}
const A1 = 2, Om = ["sky", "world"], gu = ["perspective", "erp"], C1 = ["input", "output", "temp"], Fm = [0.42, 0, 0.58, 1], Tm = 1, vd = 1e3, yu = 1e7, Sd = yu, _d = Number.MAX_SAFE_INTEGER, I1 = /^sticker_([0-9]{1,16})$/;
function Lt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function wd(e, t) {
  const r = Zt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Mn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ai(e) {
  const t = Zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Ra(e) {
  const t = ai(e);
  return t === null ? null : Mn(t, -yu, yu);
}
function fi(e) {
  const t = wd(e, null);
  return t === null ? null : Mn(t, Tm, vd);
}
function Dm(e) {
  const t = ai(e);
  return t !== null && t >= 1 ? Math.min(t, Sd) : null;
}
function ks(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Rm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Zt(r, null));
  return t.includes(null) ? null : t;
}
function Lm(e) {
  return Rm(e) || [0, 0, 0];
}
function Vm(e) {
  const t = Lt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Mn(Zt(t.pitch_deg, 0), -90, 90),
    roll_deg: Zt(t.roll_deg, 0)
  };
}
function E1(e) {
  return Mn(Zt(e, 90), 0.1, 179);
}
function O1(e) {
  return wd(e, 1);
}
function F1(e) {
  const t = Lt(e) ? e : {};
  return {
    yaw_deg: Zt(t.yaw_deg, 0),
    pitch_deg: Mn(Zt(t.pitch_deg, 0), -90, 90)
  };
}
function T1(e) {
  return Zt(e, 0);
}
function D1(e) {
  const t = Lt(e) ? e : {};
  return {
    hFOV_deg: Mn(Zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Mn(Zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function $m(e) {
  return Mn(Zt(e, 1), 0, 1);
}
const kd = [["position", Lm], ["rotation", Vm], ["fov", E1]], Yl = [["position", Lm], ["rotation", Vm], ["scale", O1]], pi = [["direction", F1], ["roll", T1], ["size", D1], ["opacity", $m]], hi = [...Yl, ["opacity", $m]];
function R1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Zt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Fm];
}
function L1(e) {
  if (!Lt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Rm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function V1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Lt(i)) continue;
    const o = Ra(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: R1(i.easing) }, a = r ? L1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function ql(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Lt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: V1(o.keyframes, i, n === "position") };
  }
  return r;
}
function zs(e) {
  const t = Lt(e) ? e : {}, r = Ra(t.start), n = Ra(t.in), i = Ra(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function Xl(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function zm(e) {
  const t = Lt(e) ? e : {}, r = Mn(Zt(t.x0, 0), 0, 1), n = Mn(Zt(t.y0, 0), 0, 1), i = Mn(Zt(t.x1, 1), 0, 1), o = Mn(Zt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function $1(e) {
  if (!Lt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: C1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function z1(e) {
  const t = $1(e.source);
  if (!t) return null;
  const r = Om.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: zs(e.clip),
    visible: ks(e.visible, !0),
    locked: ks(e.locked, !1),
    crop: zm(e.crop),
    ...ql(e, n ? hi : pi)
  };
  return n || (i.z_index = ai(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = j1(e.handoff_overrides, r)), i;
}
function j1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? hi : pi).map(([n]) => n).filter((n) => r.includes(n));
}
function H1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Lt(s) ? z1(s) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      r.push(a);
    }
  }
  const i = /* @__PURE__ */ new Set();
  for (const s of r)
    typeof s.id == "string" && s.id && !i.has(s.id) ? i.add(s.id) : s.id = null;
  let o = K1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, _d) };
}
function G1(e) {
  const t = typeof e == "string" ? I1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < _d ? r : 0;
}
function jm(e) {
  return e.reduce((t, r) => Math.max(t, G1(r.id)), 0) + 1;
}
function K1(e, t) {
  const r = ai(e), n = jm(t);
  return Mn(r === null ? n : Math.max(r, n), 1, _d);
}
function W1(e) {
  if (!Lt(e)) return null;
  const t = gu.includes(e.projection) ? e.projection : gu[0];
  return { aspect: wd(e.aspect, 1), projection: t, visible: ks(e.visible, !0), ...ql(e, kd) };
}
function dl(e) {
  return typeof e == "string" && e ? e : null;
}
function Hm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function U1(e) {
  if (!Lt(e) || dl(e.id) === null || !Om.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Lt(e.clip) && (r.clip = zs(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Lt(e.crop) && (r.crop = zm(e.crop)), Object.assign(r, ql(e, (t ? hi : pi).filter(([i]) => Lt(e[i]))));
  const n = t ? null : ai(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Gm(e) {
  const t = Lt(e) ? fi(e.fps) : null;
  if (t === null || dl(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => dl(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(U1).filter((c) => c !== null), i = Hm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Lt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Lt(o.clip) && (s.clip = zs(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function B1(e) {
  const t = (Array.isArray(e) ? e : []).map(Gm).filter((r) => r !== null);
  return Hm(t, (r) => r.layer);
}
function fl(e) {
  const t = Lt(e.timeline) ? e.timeline : {}, r = Lt(e.scene) ? e.scene : {}, { stickers: n, next: i } = H1(e.stickers, e.next_sticker_id);
  return {
    version: A1,
    id: dl(e.id),
    timeline: {
      fps: fi(t.fps) ?? 24,
      length: Dm(t.length)
    },
    camera: W1(e.camera),
    scene: { clip: zs(r.clip), visible: ks(r.visible, !0), ...ql(r, Yl) },
    stickers: n,
    next_sticker_id: i,
    painting: ji(e.painting),
    painting_layer: Lt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ks(e.painting_visible, !0),
    upstream: B1(e.upstream),
    background: Y1(e.background)
  };
}
function Y1(e) {
  return { clip: zs(Lt(e) ? e.clip : void 0) };
}
function q1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Lt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function X1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Lt(t)) return null;
  const r = Mn(Zt(t.hFOV_deg, 90), 1, 179), n = Mn(Zt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function J1(e) {
  const t = Lt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Lt) : [];
  return r.sort((n, i) => Zt(n.z_index, 0) - Zt(i.z_index, 0)), fl({
    camera: X1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: q1(n, t),
      visible: n.visible,
      locked: n.locked,
      crop: n.crop,
      z_index: n.z_index,
      direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg } },
      roll: { value: n.rot_deg },
      size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function An(e) {
  if (e == null || typeof e == "string" && !e.trim()) return fl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Lt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? J1(t) : fl(t);
}
const Mc = {
  state: { painting_visible: !0 },
  camera: { projection: gu[0], visible: !0 },
  scene: { visible: !0 }
};
function Nc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function bu(e) {
  const t = Nc(e, Mc.state);
  return t.id === null && delete t.id, t.next_sticker_id === jm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, Xl(t.background.clip) && delete t.background, JSON.stringify({
    ...t,
    camera: e.camera && Nc(e.camera, Mc.camera),
    scene: Nc(e.scene, Mc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function ls(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function cs(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Po(e, t) {
  const r = fi(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => ai(a * n), { length: o } = e.timeline, s = cs(e.scene.clip, i);
  return fl({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...ls(e.camera, kd, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...ls(e.scene, Yl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = cs(a.clip, i), u = a.placement === "world" ? hi : pi;
      return { ...a, clip: l, ...ls(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream,
    background: { clip: cs(e.background.clip, i).clip }
  });
}
function Km(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => ai(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? hi : pi).filter(([h]) => Object.hasOwn(l, h));
    if (!Object.hasOwn(l, "clip")) {
      const h = o.get(l.id) ?? 0, S = ai(h * (e.fps / r));
      return { ...l, ...ls(l, c, i, S, h) };
    }
    const { clip: d, anchor: u, newAnchor: f } = cs(l.clip, i);
    return { ...l, clip: d, ...ls(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: cs(e.scene.clip, i).clip } : e.scene;
  return Gm({ ...e, fps: r, stickers: s, scene: a });
}
const Z1 = 1e-3;
function xd(e, t, r, n) {
  if (!Gi(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(Z1 / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Md(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function Wm(e, t, r, n = !1) {
  return e.start - e.in + (r.video && n ? r.duration * t : r.frames);
}
function Um(e, t, r) {
  const n = r / t;
  return { start: e.start * n, in: e.in * n, duration: e.duration === null ? null : e.duration * n };
}
function Bm(e) {
  return Xl(e) ? null : { origin: e.start - e.in, start: e.start, end: e.duration === null ? 1 / 0 : e.start + e.duration };
}
function vu(e, t, r, n = null, i = !1) {
  return Gi(e, t) ? !(n != null && n.video || (n == null ? void 0 : n.frames) > 1) || t < Wm(e, r, n, i) : !1;
}
const zo = /* @__PURE__ */ new Map(), Q1 = 8;
function Ym(e) {
  let t = zo.get(e);
  if (!t) {
    const r = on({ label: "background.color", width: 2, height: 1 }), n = r.getContext("2d");
    n.fillStyle = e, n.fillRect(0, 0, r.width, r.height), t = { media: r, revision: e, coverage: 360, source: `bg_color:${e}` }, zo.size >= Q1 && zo.delete(zo.keys().next().value), zo.set(e, t);
  }
  return t;
}
function xs(e) {
  const t = e("pano_sticker_input_video_meta")[0];
  if (t && typeof t == "object") return t;
  const r = e("pano_sticker_files").length;
  return r > 1 ? { kind: "IMAGE", frames: r } : null;
}
function eS(e, t) {
  return Math.floor(e * t.fps);
}
function Nd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const sp = 4;
function Pd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, h) => f !== r[h])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = eS(a, l);
      for (let f = d; f < Math.min(r.length, d + sp + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + sp) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Pc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function qm(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Xm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= Ci);
}
function Jm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? qm(e.keyframes[n - 1].easing) : [...Fm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function gn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Pc(i.value, n);
    return;
  }
  const o = Xm(i, r);
  o ? o.value = Pc(o.value, n) : Jm(i, r, Pc(Wt(e, t, r), n));
}
function Ao(e) {
  return e.placement === "world" ? hi.map(([t]) => t) : e.placement === "sky" ? pi.map(([t]) => t) : e.clip && !e.position ? [] : (e.clip ? Yl : kd).map(([t]) => t);
}
function tS(e, t) {
  for (const r of Ao(e))
    Xm(e[r], t) || Jm(e[r], t, Wt(e, r, t));
}
function nS(e) {
  const t = Ao(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function Ac(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function rS(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function iS(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function oS(e, t, r, n, i, o = 1 / 0) {
  n = Math.min(n, Math.max(0, o - Math.max(...r))), n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const s = new Set(r);
  for (const a of t) {
    const l = e[a], c = l.keyframes.filter((u) => s.has(u.frame)).map((u) => ({ ...u, frame: u.frame + n })), d = new Set(c.map((u) => u.frame));
    l.keyframes = [
      ...l.keyframes.filter((u) => !s.has(u.frame) && !d.has(u.frame)),
      ...c
    ].sort((u, f) => u.frame - f.frame);
  }
  return n;
}
function Zm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function sS(e, t, r) {
  const n = Zm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function aS(e, t, r, n) {
  for (const i of Zm(e, t, r)) i.easing = qm(n);
}
function ap(e, t) {
  e.start = Math.max(0, e.start + t);
}
function lS(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function cS(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Qm(e) {
  return Ao(e).map((t) => e[t]);
}
function pl(e) {
  return Qm(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Xl(e.clip);
}
function eg(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.background, e.scene, ...e.stickers].some(pl);
}
const tg = 1e5;
function Ad(e, t = {}) {
  const { length: r } = e.timeline, n = r ? Math.max(1, Math.round(r)) : uS(e, t);
  return Number.isFinite(n) ? n : tg;
}
function uS(e, { bg: t = null, port: r = null, sceneItems: n = 0, upstream: i = null, openClip: o = null, camera: s = !1 } = {}) {
  const a = e.timeline.fps, l = (g) => g.duration === null || g === o, c = [e.scene.clip, ...e.stickers.map((g) => g.clip)].filter((g) => !l(g)).map((g) => g.start + g.duration), d = e.stickers.find((g) => g.source.kind === "port");
  r && d && l(d.clip) && c.push(Md({ ...d.clip, duration: null }, a, r));
  const u = e.scene.clip;
  n > 1 && l(u) && c.push(u.start - u.in + n);
  const f = e.background.clip;
  (t == null ? void 0 : t.frames) === 1 && !t.video && !l(f) && c.push(f.start + f.duration);
  const h = s && e.camera ? Qm(e.camera).flatMap((g) => g.keyframes.map((b) => b.frame)) : [];
  let S = 1;
  return t != null && t.video ? S = i ? Math.max(1, Math.round(t.duration * a)) : t.frames : (t == null ? void 0 : t.frames) > 1 ? S = t.frames : c.length ? S = Math.max(1, Math.round(Math.max(...c))) : h.length && (S = Math.max(1, Math.round(Math.max(...h)) + 1)), i && (S = Math.max(S, i.frames, ...i.ends.map(Math.round))), S;
}
function dS(e) {
  return e > 0 ? fi(Math.min(e, vd)) : null;
}
function fS(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Dm(Math.max(1, Math.min(e, Sd)));
}
const Cc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], pS = 2e3;
function hS(e, t, r = 56) {
  const n = Cc.find((o) => o * t >= r) || Cc[Cc.length - 1], i = [];
  for (let o = 0; o < e && i.length < pS; o += n) i.push(o);
  return i;
}
function mS(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Sa = { text: null, parsed: null };
function $n(e) {
  return Number(e) === 180 ? 180 : 360;
}
function hl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function gS({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: $n(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ji(null),
    painting_layer: null,
    ui_settings: hl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function ng(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function yS(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function bS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function vS(e) {
  return Array.isArray(e) ? e.map((t) => bd(t)) : [];
}
function SS(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function rg(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = gS(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Sa.text === i ? o = Sa.parsed : (o = JSON.parse(i), Sa = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: yS(o.assets),
      stickers: bS(o.stickers),
      shots: vS(o.shots),
      painting: ji(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: hl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = hl({ ...a.ui_settings, ...s })), a.output_preset = ng(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = $n(r.coverage), delete a.editor_history, a;
  } catch {
    return Sa = { text: i, parsed: null }, n;
  }
}
function _S(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function wS(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function kS(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function ig(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = fi(t.fps);
  let l;
  try {
    l = An(e);
  } catch {
    l = An(null);
  }
  return a && a !== l.timeline.fps && (l = Po(l, a)), {
    ...l,
    coverage: $n(i),
    bg_color: n,
    output_preset: ng(r),
    ui_settings: hl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function xS(e, t) {
  const r = Po(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.background, r.background], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of Ao(o)) o[a].keyframes = s[a].keyframes;
    }
}
function og(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function Cd(e, t, r = null) {
  const n = Wr(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: og(e, n, r), rot_deg: n.roll_deg };
}
const MS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function lp(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function NS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[MS[r]].keyframes.length));
}
function sg(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = lp(r, ["yaw_deg", "pitch_deg"]), o = lp(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && gn(e, "direction", n, i), r.rot_deg !== void 0 && gn(e, "roll", n, r.rot_deg), Object.keys(o).length && gn(e, "size", n, o);
}
const Jl = ["position_x", "position_y", "position_z"], Id = "camera";
function ag(e, t) {
  const r = Bl(e, t);
  return bd({
    id: Id,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: p1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function PS(e) {
  return An({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Kt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function AS(e) {
  return e - 360 * Math.round(e / 360);
}
function CS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + AS(r[o] - n[o]));
  Object.keys(i).length && gn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && gn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && gn(e, "position", t, [...r.position]);
}
function IS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(Jl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function ES(e, t, r, n) {
  const i = Jl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, gn(e, "position", t, o);
  } else r === "hFOV_deg" ? gn(e, "fov", t, n) : gn(e, "rotation", t, { [r]: n });
}
function OS(e, t, r) {
  gn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function FS(e, t) {
  const r = Wr(e, t);
  return {
    ...Object.fromEntries(Jl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function TS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Jl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, gn(e, "position", i, s);
  } else r === "scale" ? gn(e, "scale", i, n) : r === "opacity" ? gn(e, "opacity", i, n / 100) : gn(e, "rotation", i, { [r]: n });
}
function DS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && gn(e, i, n, r[i]);
}
function RS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function LS(e, t, r) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...r.position], keyframes: [] },
    rotation: { value: { ...r.rotation }, keyframes: [] },
    scale: { value: r.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function La(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ml(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Zl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function Ed(e, t, r, n) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg }, keyframes: [] },
    roll: { value: r.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: n
  };
}
function VS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Kt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function lg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function cg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function ug(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function cp(e, t) {
  return e != null && e.__panoSceneStateV2 ? bu(An(t)) : JSON.stringify(t);
}
const $S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function zS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => $S[e & 63]).join("");
}
function dg(e, t, r, n) {
  const i = cp(e, t);
  return jS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = zS(), cp(e, t));
}
function jS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = An(r);
    if (bu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && bu(Po(i, o)) === t;
  } catch {
    return !1;
  }
}
function no(e, t) {
  const r = on({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function HS() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function up(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let s = n, a = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < s && (s = f), u < a && (a = u), f > l && (l = f), u > c && (c = u));
  return l < s || c < a ? null : {
    minX: s,
    minY: a,
    maxX: l,
    maxY: c,
    width: l - s + 1,
    height: c - a + 1,
    aspect: Number(((l - s + 1) / Math.max(1, c - a + 1)).toFixed(4))
  };
}
function Od(e, t) {
  return on({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function ni(e, t, r) {
  if (!e) return no(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Xt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function dn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Ic = null, Ec = null, dp = null, fp = null, qt = null, jo = null;
function GS() {
  if (Ec) return Ec;
  const e = 6, t = 17, r = on({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Ec = r, r;
}
function Oc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Ic = ni(Ic, r, n);
  const i = Ic;
  Xt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", fp !== i.ctx && (dp = i.ctx.createPattern(GS(), "repeat"), fp = i.ctx), i.ctx.fillStyle = dp, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function KS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function WS(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function US(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function BS(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ht = /* @__PURE__ */ new Map(), Fd = 128;
function YS(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (Ht.has(l)) {
    const H = Ht.get(l);
    return Ht.delete(l), Ht.set(l, H), H;
  }
  Ht.size >= Fd && Ht.delete(Ht.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Od(c, c), f = u.getContext("2d"), h = a * s, S = s + 1, g = `rgba(${r},${n},${i},${o})`, b = `rgba(${r},${n},${i},0)`, y = f.createRadialGradient(d, d, h, d, d, S);
  return y.addColorStop(0, g), y.addColorStop(1, b), f.fillStyle = y, f.fillRect(0, 0, c, c), Ht.set(l, u), u;
}
function qS(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, i), S = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), b = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${h.toFixed(2)}:${S.toFixed(2)}:${g.toFixed(2)}`;
  if (Ht.has(b)) {
    const q = Ht.get(b);
    return Ht.delete(b), Ht.set(b, q), q;
  }
  Ht.size >= Fd && Ht.delete(Ht.keys().next().value);
  const y = Od(u, f), H = y.getContext("2d"), z = H.createImageData(u, f), ee = z.data, E = Math.max(0, e - t), W = Math.max(0, Math.min(1, r)), D = 1 + h;
  for (let q = 0; q < f; q++)
    for (let ve = 0; ve < u; ve++) {
      const _e = ve + 0.5 - e, he = q + 0.5 - t, ie = Math.max(Math.abs(_e) - E, 0), me = Math.hypot(ie, he) / t;
      if (me >= 1) continue;
      const de = me <= W ? 1 : Math.max(0, (1 - me) / Math.max(1e-4, 1 - W)), J = 1 - me, pe = 1 + h * (1 - J) * (1 - J), fe = 1 - S * J * J, R = pe * fe / D;
      let X = 1;
      if (g > 0) {
        const P = Math.floor((he + t) / 1.5), O = Math.floor((_e + e) / 8), _ = Ti(po(P * 41 + 500, O * 19 + 300));
        X = 1 - g * 0.42 * _;
      }
      const A = Math.round(255 * Math.min(1, d * de * R * X));
      if (A <= 0) continue;
      const ge = (q * u + ve) * 4;
      ee[ge] = a, ee[ge + 1] = l, ee[ge + 2] = c, ee[ge + 3] = A;
    }
  return H.putImageData(z, 0, 0), Ht.set(b, y), y;
}
function po(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Ti(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function XS(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Ti(po(e * 17 + 3, t * 13 + 7)), h = u + o * 0.22 * (f - 0.5);
  if (h >= 1) return 0;
  const S = h <= i ? 1 : Math.max(0, (1 - h) / Math.max(1e-4, 1 - i)), g = JS(e, t, a, l, r, n), b = o * 0.55;
  if (g < b) return 0;
  const H = 0.45 + 0.55 * ((g - b) / Math.max(1e-4, 1 - b));
  return Math.round(255 * Math.min(1, s * S * H));
}
function JS(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Ti(po(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Ti(po(c * 23 + 800, d * 29 + 500)), f = Ti(po(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function ZS(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (Ht.has(f)) {
    const H = Ht.get(f);
    return Ht.delete(f), Ht.set(f, H), H;
  }
  Ht.size >= Fd && Ht.delete(Ht.keys().next().value);
  const h = Od(c, d), S = h.getContext("2d"), g = S.createImageData(c, d), b = g.data, y = Math.max(0, Math.min(1, r));
  for (let H = 0; H < d; H++)
    for (let z = 0; z < c; z++) {
      const ee = XS(z, H, e, t, y, u, l);
      if (ee <= 0) continue;
      const E = (H * c + z) * 4;
      b[E] = o, b[E + 1] = s, b[E + 2] = a, b[E + 3] = ee;
    }
  return S.putImageData(g, 0, 0), Ht.set(f, h), h;
}
function fg(e, t, r) {
  var g, b;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = US(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = QS(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = BS(t, i), d = String(((b = t == null ? void 0 : t.targetSpace) == null ? void 0 : b.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, h = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let S;
  if (n === "chisel") {
    const y = i * a, H = i, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), ee = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = qS(y, H, o, s, z, ee, E);
  } else if (n === "crayon") {
    const y = i * a, H = i, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = ZS(y, H, o, s, z);
  } else
    S = YS(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: S, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: h, latitudeCorrection: u };
}
function QS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(n.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(n.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(n.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(n.b || 0))) * 255),
    a: o
  };
}
function e_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function pp(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function Td(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = po(t, r);
    for (let h = 0; h < d; h++) {
      const S = Ti(f + h * 2) * Math.PI * 2, g = Math.sqrt(Ti(f + h * 2 + 1)) * u, b = t + Math.cos(S) * g, y = r + Math.sin(S) * g, H = Math.max(0.5, e.radiusPx * i * 0.48), z = (0.5 - y / Math.max(1, e.desc.height)) * Math.PI, ee = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, E = H * e.aspect * ee;
      pp(e, b, y, H, E);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  pp(e, t, r, o, l);
}
function hp(e, t, r) {
  const n = WS(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = fg(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let h = Number(n[f].u || 0) * i;
    const S = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(h - a[f - 1].x) > i * 0.5 && (h += h < a[f - 1].x ? i : -i), a.push({ x: h, y: S });
  }
  if (Td(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const h = a[f], S = { x: (c.x + h.x) * 0.5, y: (c.y + h.y) * 0.5 };
    f === 1 ? u = Ms(s, d.x, d.y, S.x, S.y, u) : u = gl(s, l, d, S, h, u), l = c, c = h, d = S;
  }
  a.length === 2 ? Ms(s, d.x, d.y, c.x, c.y, u) : gl(s, l, d, c, c, u), e.restore();
}
function Va(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = e_(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const h = KS(n[f]);
    let S = Number(h.x || 0) * i;
    f > 0 && Math.abs(S - a[f - 1].x) > i * 0.5 && (S += S < a[f - 1].x ? i : -i), a.push({ x: S, y: Number(h.y || 0) * o }), S < l && (l = S), S > c && (c = S);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let h = 1; h < a.length; h++) e.lineTo(a[h].x + f, a[h].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function _a(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    Va(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? hp(e, t, r) : (jo = ni(jo, r.width, r.height), Xt(jo), hp(jo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(jo.canvas, 0, 0), e.restore());
}
function _i(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ms(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Td(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function gl(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, h = f + c, S = f - u, g = 16;
  let b = o, y = r.x, H = r.y;
  for (let z = 1; z <= g; z++) {
    const ee = u + S * z / g, E = ((u - ee) * t.x + (ee - d) * r.x) / (u - d), W = ((u - ee) * t.y + (ee - d) * r.y) / (u - d), D = ((f - ee) * r.x + (ee - u) * n.x) / (f - u), q = ((f - ee) * r.y + (ee - u) * n.y) / (f - u), ve = ((h - ee) * n.x + (ee - f) * i.x) / (h - f), _e = ((h - ee) * n.y + (ee - f) * i.y) / (h - f), he = ((f - ee) * E + (ee - d) * D) / (f - d), ie = ((f - ee) * W + (ee - d) * q) / (f - d), ke = ((h - ee) * D + (ee - u) * ve) / (h - u), me = ((h - ee) * q + (ee - u) * _e) / (h - u), de = ((f - ee) * he + (ee - u) * ke) / (f - u), J = ((f - ee) * ie + (ee - u) * me) / (f - u);
    b = Ms(e, y, H, de, J, b), y = de, H = J;
  }
  return b;
}
function t_(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const h = fg(i, n, o), S = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), b = String((n == null ? void 0 : n.toolKind) || "") === "eraser", y = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Td(h, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: h.stampTex,
      radiusPx: h.radiusPx,
      spacingPx: h.spacingPx,
      aspect: h.aspect,
      angle: h.angle,
      stampKind: h.stampKind,
      scatter: h.scatter,
      latitudeCorrection: h.latitudeCorrection,
      strokeOpacity: S,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: b,
      layerKind: y,
      pointCount: 1
    }, dn(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + a) * 0.5;
  i.globalCompositeOperation = "source-over";
  const f = {
    ctx: i,
    stampTex: l.stampTex,
    radiusPx: l.radiusPx,
    spacingPx: l.spacingPx,
    desc: o,
    aspect: l.aspect,
    angle: l.angle,
    stampKind: l.stampKind,
    scatter: l.scatter,
    latitudeCorrection: l.latitudeCorrection
  };
  l.pointCount === 1 ? l.distSinceStamp = Ms(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = gl(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, dn(e);
}
function Ql(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = no(t, r), s = {
    descriptor: n,
    committedMask: no(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, a = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: no(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = no(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let h = null;
  function S(ie) {
    return {
      actionGroupId: ie,
      descriptor: n,
      committedPaint: no(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(ie) {
    let ke = i.get(ie);
    return ke || (ke = S(ie), i.set(ie, ke)), ke;
  }
  function b(ie) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function y(ie) {
    var fe;
    const ke = !u || u.length !== ie.length || ie.some((R, X) => R !== u[X]), me = d === "paint" && ((fe = c ? i.get(c) : a) == null ? void 0 : fe.activeStroke) || null;
    let de = s.displayDirty || a.displayDirty || ke;
    for (const R of ie) {
      const X = i.get(R);
      if (X != null && X.displayDirty) {
        de = !0;
        break;
      }
    }
    if (me && (de = !0), !de) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const R of ie) {
      const X = i.get(R);
      X && (X.displayDirty = !1);
    }
    u = [...ie];
    const J = l.ctx;
    Xt(l);
    const pe = !!(me != null && me.isEraser);
    for (const R of ie) {
      const X = i.get(R);
      if (!X) continue;
      const ge = c === X.actionGroupId && d === "paint" ? X.activeStroke : null;
      if (pe)
        qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(X.committedPaint.canvas, 0, 0), _i(qt.ctx, o.canvas), J.drawImage(qt.canvas, 0, 0);
      else if (J.drawImage(X.committedPaint.canvas, 0, 0), ge) {
        const P = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ge.strokeOpacity ?? 1));
        J.save(), J.globalAlpha = P, J.drawImage(o.canvas, 0, 0), J.restore();
      }
    }
  }
  function H(ie) {
    var me, de, J, pe, fe;
    for (const R of i.values())
      Xt(R.committedPaint), Xt(R.currentStroke), R.activeStroke = null, dn(R);
    Xt(s.committedMask), Xt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), dn(s), dn(a), u = null;
    const ke = [
      ...Array.isArray((de = (me = ie == null ? void 0 : ie.painting) == null ? void 0 : me.paint) == null ? void 0 : de.strokes) ? ie.painting.paint.strokes : [],
      ...Array.isArray((pe = (J = ie == null ? void 0 : ie.painting) == null ? void 0 : J.mask) == null ? void 0 : pe.strokes) ? ie.painting.mask.strokes : []
    ];
    for (const R of ke) {
      if (((fe = R == null ? void 0 : R.targetSpace) == null ? void 0 : fe.kind) !== "ERP_GLOBAL") continue;
      const X = String((R == null ? void 0 : R.layerKind) || "paint"), ge = String((R == null ? void 0 : R.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const P = s.descriptor;
        ge ? (qt = ni(qt, P.width, P.height), Xt(qt), _a(qt.ctx, R, P), _i(s.committedMask.ctx, qt.canvas)) : (_a(s.committedMask.ctx, R, P), s.painted = !0);
        continue;
      }
      if (ge) {
        qt = ni(qt, n.width, n.height), Xt(qt), _a(qt.ctx, R, n);
        for (const P of i.values())
          _i(P.committedPaint.ctx, qt.canvas), dn(P);
      } else {
        const P = String((R == null ? void 0 : R.actionGroupId) || "__default__"), O = g(P), _ = O.descriptor;
        _a(O.committedPaint.ctx, R, _), dn(O);
      }
    }
    y([...i.keys()]);
  }
  function z(ie, ke) {
    d = String((ie == null ? void 0 : ie.layerKind) || "");
    const me = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Xt(s.currentStroke), s.activeStroke = null, dn(s);
    else {
      const de = me ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || "__default__"));
      c = me ? "" : String((ie == null ? void 0 : ie.actionGroupId) || "__default__"), Xt(de.currentStroke), de.activeStroke = null, dn(de);
    }
  }
  function ee(ie, ke) {
    var X;
    const me = String((ie == null ? void 0 : ie.layerKind) || "paint"), de = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", J = me === "mask" ? s : de ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__")), pe = J.activeStroke, fe = J.descriptor;
    if (pe && pe.pointCount > 1) {
      const A = J.currentStroke.ctx;
      A.globalCompositeOperation = "source-over";
      const ge = {
        ctx: A,
        stampTex: pe.stampTex,
        radiusPx: pe.radiusPx,
        spacingPx: pe.spacingPx,
        desc: fe,
        aspect: pe.aspect,
        angle: pe.angle,
        stampKind: pe.stampKind,
        scatter: pe.scatter,
        latitudeCorrection: pe.latitudeCorrection
      };
      pe.pointCount === 2 ? Ms(ge, pe.lastMidX, pe.lastMidY, pe.prev.x, pe.prev.y, pe.distSinceStamp) : gl(ge, pe.pprev, { x: pe.lastMidX, y: pe.lastMidY }, pe.prev, pe.prev, pe.distSinceStamp);
    }
    J.lassoPreviewActive && (Xt(J.currentStroke), Va(J.currentStroke.ctx, ie, fe), J.lassoPreviewActive = !1);
    const R = me === "mask" ? s.committedMask : J.committedPaint;
    if (de && me === "paint")
      for (const A of i.values())
        _i(A.committedPaint.ctx, J.currentStroke.canvas), dn(A);
    else if (de)
      _i(R.ctx, J.currentStroke.canvas);
    else {
      me === "mask" && (s.painted = !0);
      const A = Math.max(0, Math.min(1, (pe == null ? void 0 : pe.strokeOpacity) ?? 1));
      R.ctx.save(), R.ctx.globalAlpha = A, R.ctx.drawImage(J.currentStroke.canvas, 0, 0), R.ctx.restore();
    }
    HS() && (String((ie == null ? void 0 : ie.toolKind) || ""), String((fe == null ? void 0 : fe.kind) || ""), Number((fe == null ? void 0 : fe.width) || 0), Number((fe == null ? void 0 : fe.height) || 0), String(((X = ie == null ? void 0 : ie.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((ie == null ? void 0 : ie.aspect) ?? 1), up(J.currentStroke.canvas), up(R.canvas), void 0), Xt(J.currentStroke), J.activeStroke = null, dn(J), f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function E(ie) {
    if (d === "mask")
      Xt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, dn(s);
    else if (d === "paint" && !c)
      Xt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, dn(a);
    else if (c) {
      const ke = i.get(c);
      ke && (Xt(ke.currentStroke), ke.activeStroke = null, ke.lassoPreviewActive = !1, dn(ke));
    }
    f.clear(), c = null, d = "", y([...i.keys()]);
  }
  function W(ie, ke) {
    var de;
    if (d = String((ie == null ? void 0 : ie.layerKind) || ""), String(((de = ie == null ? void 0 : ie.geometry) == null ? void 0 : de.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Xt(s.currentStroke), Va(s.currentStroke.ctx, ie, s.descriptor), s.lassoPreviewActive = !0, dn(s);
      else {
        const J = String((ie == null ? void 0 : ie.toolKind) || "") === "eraser", pe = J ? a : g(String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"));
        c = J ? "" : String((ie == null ? void 0 : ie.actionGroupId) || c || "__default__"), Xt(pe.currentStroke), Va(pe.currentStroke.ctx, ie, pe.descriptor), pe.lassoPreviewActive = !0, dn(pe);
      }
      y([...i.keys()]);
    }
  }
  function D(ie) {
    return y(ie ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function q(ie) {
    return i.get(String(ie)) ?? null;
  }
  function ve(ie) {
    var A;
    const ke = i.get(String(ie));
    if (!ke) return null;
    const me = d === "paint" && c === ke.actionGroupId, de = d === "paint" && ((A = c ? i.get(c) : a) == null ? void 0 : A.activeStroke) || null, J = !!(de != null && de.isEraser), pe = me ? ke.activeStroke : null;
    if (!J && !pe) return ke.committedPaint.canvas;
    const fe = `${ke.revision}:${a.revision}:${J}`, R = f.get(ke.actionGroupId);
    if ((R == null ? void 0 : R.key) === fe) return R.surface.canvas;
    const X = ni((R == null ? void 0 : R.surface) ?? null, t, r);
    return Xt(X), X.ctx.drawImage(ke.committedPaint.canvas, 0, 0), J ? _i(X.ctx, o.canvas) : (X.ctx.save(), X.ctx.globalAlpha = ke.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, pe.strokeOpacity ?? 1)), X.ctx.drawImage(o.canvas, 0, 0), X.ctx.restore()), f.set(ke.actionGroupId, { key: fe, surface: X }), X.canvas;
  }
  function _e() {
    const ie = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ie || ie.isEraser) ? null : `${s.revision}:${!!ie}`;
  }
  function he() {
    const ie = _e();
    if (ie === null)
      return h = null, null;
    if ((h == null ? void 0 : h.key) === ie) return h.surface.canvas;
    const ke = ni((h == null ? void 0 : h.surface) ?? null, t, r);
    Xt(ke);
    const me = d === "mask" ? s.activeStroke : null;
    return me != null && me.isEraser ? (qt = ni(qt, t, r), Xt(qt), qt.ctx.drawImage(s.committedMask.canvas, 0, 0), _i(qt.ctx, o.canvas), Oc(ke.ctx, qt.canvas)) : (Oc(ke.ctx, s.committedMask.canvas), me && Oc(ke.ctx, o.canvas)), h = { key: ie, surface: ke }, ke.canvas;
  }
  return {
    rebuildCommitted: H,
    beginStroke: z,
    appendStrokePoint: t_,
    updateActiveStroke: W,
    commitActiveStroke: ee,
    cancelActiveStroke: E,
    getErpTarget: D,
    ensureTarget: b,
    getGroupTarget: q,
    getGroupDisplayCanvas: ve,
    getMaskDisplayCanvas: he,
    getMaskDisplayRevision: _e
  };
}
function Dd(e, { group: t, raster: r, mask: n = () => null }) {
  if (e.painting_visible === !1) return [];
  const { groups: i, paint: o, raster_objects: s } = e.painting, a = new Set(i.map(Fc)), l = [
    ...i.map((h) => ({ id: `paint_group:${Fc(h)}`, zIndex: Tc(h), shown: () => t(Fc(h)) })),
    ...s.filter((h) => h.layerKind === "paint").map((h) => ({ id: `raster:${h.id}`, zIndex: Tc(h), shown: () => r(h) }))
  ].sort((h, S) => h.zIndex - S.zIndex), c = [], d = (h, S, g) => {
    g && c.push({ id: h, media: g.media, revision: g.revision, opacity: 1, zIndex: S });
  };
  for (const h of l) d(h.id, h.zIndex, h.shown());
  const u = Math.max(-1, ...c.map((h) => h.zIndex), ...e.stickers.map(Tc)) + 1, f = new Set(o.strokes.map((h) => h.actionGroupId).filter((h) => !a.has(h)));
  for (const h of f) d(`paint_group:${h}`, u, t(h));
  return d("mask_display", u, n()), c;
}
function pg(e) {
  const t = (e == null ? void 0 : e.getMaskDisplayCanvas()) ?? null;
  return t && { media: t, revision: `mask_display:${e.getMaskDisplayRevision()}` };
}
function Fc(e) {
  return String(e.actionGroupId || e.id || "");
}
function Tc(e) {
  return Math.trunc(Number(e.z_index) || 0);
}
function qn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function n_(e, t = 1024) {
  const r = Math.max(1, Math.round(qn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(qn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function r_(e, t, r) {
  const n = qn(t), i = qn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = qn(o.u0), a = qn(o.v0), l = qn(o.u1), c = qn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + qn(d.du)) * n,
    centerY: ((a + c) * 0.5 + qn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: qn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, qn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function i_(e, t, r) {
  const n = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    r,
    n.length,
    n.slice(-24),
    i.u0,
    i.v0,
    i.u1,
    i.v1,
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function o_() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function n(o, s) {
    let a = e.get(o);
    if (a)
      return e.delete(o), e.set(o, a), !a.settled && typeof s == "function" && a.listeners.add(s), a.image;
    const l = new Image();
    a = { image: l, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, a);
    const c = () => {
      a.settled = !0;
      const d = [...a.listeners];
      a.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, s, a, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = r_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = i_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, h = t.get(f);
    if ((h == null ? void 0 : h.revision) === u) return { source: h.source, revision: u };
    const S = n(c, l), g = Number(S.naturalWidth || S.width || 0), b = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || g < 1 || b < 1) return null;
    const y = on({ label: "raster-object" });
    y.width = Math.max(1, Math.round(s)), y.height = Math.max(1, Math.round(a));
    const H = y.getContext("2d");
    return H ? (d.wrapOffsets.forEach((z) => {
      H.save(), H.translate(d.centerX + z, d.centerY), H.rotate(d.rotationRad), H.scale(d.scale, d.scale), H.drawImage(
        S,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), H.restore();
    }), t.set(f, { revision: u, source: y }), { source: y, revision: u }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const s = new Set(Array.from(o, (a) => String(a || "").trim()).filter(Boolean));
      for (const a of t.keys())
        s.has(a) || t.delete(a);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function s_(e, t, r = Ql) {
  var l;
  const n = { ...t, painting: a_(e, t.painting) }, i = n_(t.output_preset), o = [];
  let s = null;
  const a = Dd(n, {
    group: (c) => {
      s ?? (s = l_(e, n, r));
      const d = s == null ? void 0 : s.getGroupDisplayCanvas(c);
      return d && { media: d, revision: `${e.paintRevisionKey}:${c}` };
    },
    raster: (c) => {
      e.rasterCache ?? (e.rasterCache = o_()), e.rasterReady ?? (e.rasterReady = () => {
        var u, f;
        return (f = (u = e.dom) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
      }), o.push(c.id);
      const d = e.rasterCache.get(c, i.width, i.height, e.rasterReady);
      return d && { media: d.source, revision: d.revision };
    }
  });
  return (l = e.rasterCache) == null || l.retain(o), a;
}
function a_(e, t) {
  return (!e.paintState || e.paintState.painting !== t) && (e.paintState = { painting: t, normalized: ji(t) }), e.paintState.normalized;
}
function l_(e, t, r) {
  const { painting: n } = t;
  if (!n.paint.strokes.length && !n.mask.strokes.length) return null;
  const i = Math.max(1, Number(t.output_preset || 2048)), o = { kind: "ERP_GLOBAL", width: i, height: Math.max(1, Math.round(i * 0.5)) }, s = `${o.width}x${o.height}`;
  return (!e.paintEngine || e.paintDescriptorKey !== s) && (e.paintEngine = r(o), e.paintDescriptorKey = s, e.paintRevision = null), e.paintRevision !== n && (e.paintRevision = n, e.paintRevisionKey = String((Number(e.paintRevisionKey) || 0) + 1), e.paintEngine.rebuildCommitted(t)), e.paintEngine;
}
const Dc = 0.15, c_ = 0.01, u_ = 1e-3, d_ = 0.05, f_ = 4, mp = 250, p_ = 16, pr = 1, h_ = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Un(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Mr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function ec(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Ki(e, t, r = 0) {
  const n = Pn(e, t, r), i = Mr(n, 2);
  return { right: Mr(n, 0), up: Mr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function m_(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Su(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function g_(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Su(e, "3dof", r);
}
function y_(e) {
  return Ki(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function b_(e) {
  return Un(e.position, Ki(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function mi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function us(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Rd(e, t) {
  return us(mi(t, e.position), Ki(e.yaw_deg, e.pitch_deg).forward);
}
function Ld(e) {
  return Math.max(e, 1e-6) * d_;
}
function _u(e, t, r = null, n = pr) {
  if (t) return t;
  const i = Ld(n);
  if (r && Rd(e, r) > 0) {
    const o = mi(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Un(e.position, o, i / s);
  }
  return Un(e.position, Ki(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function hg(e, t = pr) {
  return Math.max(e.distance, Ld(t));
}
function mg(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > f_ ? !1 : t.time - e.time < mp || e.cost > p_ && t.time - e.wheelTime < mp;
}
function Vd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function gg(e, t, r, n, i = b_(e)) {
  const o = e.roll_deg ?? 0, [s, a] = v_(t, r, o), l = Kt(e.yaw_deg + s / n * 360), c = Fe(e.pitch_deg - a / n * 360, -89.9, 89.9), d = Pn(e.yaw_deg, e.pitch_deg, o), u = Pn(l, c, o), f = mi(e.position, i), h = [0, 1, 2].map((g) => us(Mr(d, g), f)), S = { ...e, yaw_deg: l, pitch_deg: c, position: Un(i, ec(u, h)) };
  return { ...S, distance: Rd(S, i) };
}
function v_(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function yg(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = y_(e), l = 2 * o * Vd(e, n, i).tanY / i;
  return { ...e, position: Un(Un(e.position, s, -t * l), a, r * l), distance: o };
}
function bg(e, t, r, n = pr) {
  const i = mi(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * c_, l = r > 0 ? Math.min(Math.max(o * Dc, a), o - s * u_) : -Math.max(o * Dc / (1 - Dc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Un(e.position, i, l / o) };
  return { ...c, distance: Math.max(Rd(c, t), Ld(n)) };
}
function S_(e, t, r, n) {
  const { tanX: i, tanY: o } = Vd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Ki(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Un(t.center, l, -a), distance: a };
}
function $d(e, t, r, n = null) {
  return vg({
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Vd(e, t, r).tanY) * rn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function vg(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: pr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function Ns(e, t, r, n) {
  const { right: i, up: o, forward: s } = Sg(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Sg(e) {
  const t = Ss(e.quaternion), r = Mr(t, 2);
  return { right: Mr(t, 0), up: Mr(t, 1), forward: r.map((n) => -n) };
}
function yl(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function __({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function zd(e, t) {
  if (!e || !t.active) return null;
  const r = w_(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: wu(t),
    itemQuaternion: e.kind === "splat" ? h_ : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function _g(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = zd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function wg(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function w_(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function wu(e) {
  return {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function ku(e, t) {
  return Un(e.position, ec(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function $a(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function xu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Mu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function k_(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...xu(t).map((o) => ku(e.scene, o)));
  for (const o of r) i.push(...jd(o));
  for (const { box: o, value: s } of n) i.push(...xu(o).map((a) => ku(s, a)));
  return i;
}
function x_(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Pn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function jd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Un(e.position, ec(e.rotation, [n, i, 0])));
}
function M_(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Mu(jd(i)) : o != null && o.box ? Mu(xu($a(o.kind, o.box)).map((s) => ku(n, s))) : { center: [...n.position], radius: n.scale };
}
const N_ = 2, P_ = 0.5, A_ = 30;
function kg(e, t) {
  const r = mi(t, e), n = Math.atan2(r[0], -r[2]) * rn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * rn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function C_(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * P_ : N_, o = t ? [...t] : Un(e.position, Ki(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...mi(o, e.position)), a = s > 0 ? kg(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(A_ * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function gp(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function I_(e) {
  return [0, 1, 2].map((t) => Mr(e, t));
}
function yp(e, t, r, n) {
  if (e === "translate") return { position: Un(t.position, mi(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * D_(r.scale, n.scale) / r.scale };
  const i = gp(Ss(n.quaternion), I_(Ss(r.quaternion))), o = gp(i, Pn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = Nm(o);
  return Math.abs(a) <= E_ ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: O_(o, t.yaw_deg) } };
}
const E_ = 89.9;
function O_(e, t) {
  const r = Mr(e, 0), n = Mr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * rn + 0;
}
const F_ = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function T_(e, t, r, n, i) {
  if (!Ns(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Sg(e), l = mi(t, e.position), c = us(l, o), d = us(l, s), u = us(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), h = f * e.aspect, S = Math.hypot(c, d, u) * F_[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > S)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (ee) => {
    const E = S * Math.sqrt(ee * ee + u * u - S * S);
    return [(ee * u - E) / (u * u - S * S), (ee * u + E) / (u * u - S * S)];
  }, [b, y] = g(c), [H, z] = g(d);
  return {
    minX: n * 0.5 * (1 + b / h),
    maxX: n * 0.5 * (1 + y / h),
    minY: i * 0.5 * (1 - z / f),
    maxY: i * 0.5 * (1 - H / f)
  };
}
function D_(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function R_(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function xg(e, t) {
  const r = Pn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Un(e.position, ec(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function L_(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = Ns(e, s, n, i), c = Ns(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Fe(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function V_(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function $_(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function z_(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Mg = 0.28;
function Ng(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * rn,
    aspect: n
  };
}
function ds(e) {
  const t = ui(e);
  return {
    quaternion: di(Pn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Pg(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = yd(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * rn,
      vFOV_deg: 2 * Math.atan(o / n) * rn
    }
  };
}
function Ag(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = Ss(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), h = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, g = 1e-4) {
      const b = m1(S), y = n * b.x + s * b.y + c * b.z, H = i * b.x + a * b.y + d * b.z, z = -(o * b.x + l * b.y + u * b.z), ee = Math.max(z, g);
      return {
        x: t * 0.5 * (1 + y / ee / h),
        y: r * 0.5 * (1 - H / ee / f),
        z
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, g) {
      const b = (S / t * 2 - 1) * h, y = (1 - g / r * 2) * f;
      return hd(Da({
        x: n * b + i * y - o,
        y: s * b + a * y - l,
        z: c * b + d * y - u
      }));
    }
  };
}
function Cg(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = $s(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), h = Math.tan(og(a, c, Eg(u.media)) * 0.5 * wt), { crop: S } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Mg : c.opacity,
      zIndex: n(a),
      quaternion: di(Pn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * f,
        x1: (2 * S.x1 - 1) * f,
        y0: (1 - 2 * S.y1) * h,
        y1: (1 - 2 * S.y0) * h
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function Ig(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Cg(e, t, {
    media: (a) => {
      const l = s.get(a.id);
      return l ? n(l) : null;
    },
    zIndex: (a) => {
      var l;
      return Number(((l = s.get(a.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function Eg(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Og(e, t, r, { media: n, evaluated: i = $s(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: h } = Eg(u.media), S = x_(c, a.crop, f, h);
    S && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: S.position,
      quaternion: S.quaternion,
      rotation: S.rotation,
      width: S.width,
      height: S.height,
      crop: a.crop
    });
  }), s;
}
function j_({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-BLWoTAPg.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = bm(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(g) {
      return l && !f.lost ? l.render(g) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(g) {
      return l && !f.lost ? l.renderUnwrap(g) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(g, b) {
      return l && !f.lost ? l.resize(g, b) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, b) {
      l && !f.lost && l.clear(g, b);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(g) {
      l && !f.lost && l.releaseSplats(g);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(g) {
      return l ? l.sceneBox(g) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(g, b, y, H, z) {
      return l && !f.lost ? l.pick(g, b, y, H, z) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, b, y, H, z) {
      return l && !f.lost ? l.pickSurface(g, b, y, H, z) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, b, y, H, z) {
      return l && !f.lost ? l.pickSticker(g, b, y, H, z) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, b, y, H, z, ee) {
      return l && !f.lost ? l.gizmoPointer(g, b, y, H, z, ee) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", S), l == null || l.dispose(), l = null;
    }
  };
  function h(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function S() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", S), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const Fg = "3D view unavailable. Check the browser console.";
function bl(e, t, r) {
  return Ng({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function H_(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((s) => {
      if (r = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((a) => a.onChange());
    }).catch((s) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((a) => a.onChange()));
    }));
  }
  return function(a) {
    const l = { onChange: a };
    let c = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return c ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        c || (c = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Tg = H_(
  () => import("./.lazy/pano_three_view-BLWoTAPg.js").then((e) => e.$).then((e) => bm(e.createThreeView({ createCanvas: () => on({ label: "three.node" }) }), "node"))
), er = ["erp_image", "bg_erp", "bg_media"], Hd = ["sticker_image", "sticker"], Dg = ["scene"], Gd = ["sticker", "sticker_state"], G_ = {
  background: er,
  "external-sticker": Hd,
  scene: Dg,
  "sticker-handoff": Gd
};
function Rg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function ho(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Rg(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function fs(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function bp(e, t) {
  var o, s;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((a) => (a == null ? void 0 : a.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const a = e.graph.getNodeById(n.origin_id);
    if (!a || i.has(a)) return "";
    i.add(a);
    const l = (s = (o = a.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : s.type;
    if (l && l !== "*") return String(l);
    if (a.type !== "Reroute") return "";
    n = a.getInputLink(0);
  }
  return "";
}
function Lg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function K_(e, t) {
  const { graph: r, entry: n } = Lg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = Rg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const Vg = [...er, ...Hd, ...Dg, ...Gd], W_ = 256, ro = /* @__PURE__ */ new Map(), Rc = /* @__PURE__ */ new WeakMap();
let $g = () => null;
function zg(e) {
  return Rc.has(e) || Rc.set(e, JSON.stringify(e)), Rc.get(e);
}
function U_(e) {
  $g = e;
}
function vl(e, t) {
  const r = zg(e);
  ro.delete(r), ro.set(r, t), ro.size > W_ && ro.delete(ro.keys().next().value);
}
function Ot(e, t) {
  var o;
  const r = e ? $g(e) : null;
  if (!r) return !0;
  const n = ho(e);
  let i = ro.get(zg(r));
  if (i)
    vl(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => Vg.includes(s == null ? void 0 : s.name)))) return !0;
    vl(r, n), i = n;
  }
  return G_[t].every((s) => i[s] === n[s]);
}
const Sl = /* @__PURE__ */ new WeakSet();
async function Nu(e, t) {
  if (Sl.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Sl.add(e), r.ok && n !== void 0 ? n : null;
}
function jg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = Lg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Vg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: K_(r, t) };
}
const za = /* @__PURE__ */ new Map();
function B_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && za.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Nu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = jg(i, o);
        s && vl(s.output, s.inputs);
      }
    });
}
const Y_ = 5;
function q_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Y_}`, n = Nu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Nu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: h } of await n) {
        if (!a()) return null;
        const S = await o(h);
        if ((c = S == null ? void 0 : S.outputs) != null && c[l])
          return ((f = (u = (d = S.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : jg(S, l);
      }
      return null;
    }
  };
}
function X_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Ji = null;
async function J_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Sl.has(r) || (a = za.get(i)) != null && a.has(n) || X_(t)) return null;
  (Ji == null ? void 0 : Ji.workflowId) !== i && (Ji = { workflowId: i, history: q_(r, i) }, queueMicrotask(() => {
    Ji = null;
  }));
  const s = await Ji.history.lastNodeOutput(e, o);
  return o() ? s ? (vl(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (Sl.has(r) || za.set(i, (za.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function vp(e, t, r, n = er) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Sp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ja(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Sp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Sp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Lc = /* @__PURE__ */ new WeakMap();
function Z_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Pu(e) {
  return Z_(e) ? (Lc.has(e) || Lc.set(e, Math.random().toString(36).slice(2, 10)), Lc.get(e)) : "run";
}
function Hg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function Q_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Kd(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const a of s)
      if (Array.isArray(a))
        for (const l of a) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function ew({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Vs(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, s = 0;
  const a = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !a || s || n.paused || n.ended || (s = n.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let h = !1;
  const S = () => {
    h = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", S), n.src = t, n.load();
  const g = () => {
    o || h || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, b = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var H, z;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", S), n.pause(), (H = n.removeAttribute) == null || H.call(n, "src"), (z = n.load) == null || z.call(n));
    },
    failed: () => h,
    play: g,
    pause: b,
    toggle() {
      n.paused ? g() : b();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const Ps = /* @__PURE__ */ new WeakMap(), Gg = {
  editorSession: () => ({
    // The modal editor of the node is open; it covers the node surface, which lets its VIDEO go meanwhile.
    open: !1,
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null
  }),
  nodeSurface: () => ({
    attached: !1,
    mountKey: null,
    controller: null,
    // "stickers" or "cutout" once attached.
    mode: "",
    noPreview: !1,
    openEditor: null,
    // { widget, root, canvas, requestDraw, state, emptyHintEl, nodeSurface }
    dom: null,
    // Undoes the attach of `dom`.
    restore: null,
    cutout: null,
    stickers: null,
    cutoutState: null,
    stickersState: null,
    cutoutFrame: null,
    lastCutoutShot: null,
    view: null,
    playback: null,
    // The ends of the Clip ranges Panorama Studio overrides upstream, for its Timeline's length, with the result
    // list and state they were made from (pano_preview_runtime.js surfaceTimelineMedia).
    upstreamLength: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    paintState: null,
    rasterCache: null,
    rasterReady: null,
    bootMinHeightActive: !1,
    bootMinHeightTimer: null,
    resizeSettleTimer: null,
    userResized: !1,
    standaloneBootSized: !1,
    debugLastTs: 0
  }),
  previewNode: () => ({
    runtime: null,
    surface: null,
    installDone: !1,
    installProbeActive: !1,
    installProbeTries: 0
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: /* @__PURE__ */ new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
    // { src, image, ready, failed } of Panorama Studio's last run output (an ERP or a first frame).
    studioRunImage: null,
    executedOutputs: /* @__PURE__ */ new Map(),
    outputFromRun: !1
  }),
  stateSync: () => ({
    liveState: null,
    liveStateVersion: 0,
    parsedState: null,
    flushers: /* @__PURE__ */ new Set(),
    pendingStickerUploads: /* @__PURE__ */ new Map(),
    stickerOperationTail: null,
    coverageSyncInstalled: !1
  })
};
function js(e, t) {
  if (!e || typeof e != "object") return null;
  let r = Ps.get(e);
  return r || (r = {}, Ps.set(e, r)), r[t] ?? (r[t] = Gg[t]());
}
function Hs(e, t) {
  var r;
  return e && typeof e == "object" && ((r = Ps.get(e)) == null ? void 0 : r[t]) || null;
}
const As = (e) => js(e, "editorSession"), bt = (e) => js(e, "nodeSurface"), $r = (e) => js(e, "previewNode"), Cn = (e) => js(e, "mediaCache"), Wn = (e) => js(e, "stateSync"), tw = (e) => Hs(e, "editorSession"), Au = (e) => Hs(e, "nodeSurface"), Kg = (e) => Hs(e, "previewNode"), Vc = (e) => {
  var t;
  return ((t = Hs(e, "editorSession")) == null ? void 0 : t.open) === !0;
};
function $c(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const nw = {
  editorSession() {
  },
  nodeSurface(e) {
    var t, r, n;
    try {
      (t = e.restore) == null || t.call(e);
    } catch {
    }
    clearTimeout(e.bootMinHeightTimer), clearTimeout(e.resizeSettleTimer), (n = (r = e.rasterCache) == null ? void 0 : r.dispose) == null || n.call(r);
  },
  previewNode(e) {
    var t, r;
    (r = (t = e.runtime) == null ? void 0 : t.teardown) == null || r.call(t);
  },
  mediaCache(e) {
    var t, r, n, i;
    e.linkedImages.forEach((o) => {
      $c(o == null ? void 0 : o.img), $c(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), $c((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function rw(e, t) {
  const r = Hs(e, t);
  if (r)
    try {
      nw[t](r);
    } finally {
      delete Ps.get(e)[t];
    }
}
function iw(e) {
  for (const t of Object.keys(Gg))
    try {
      rw(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && Ps.delete(e);
}
function wi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function ow(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function _p(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = ow(e == null ? void 0 : e.graph, r)), n;
}
function sw(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function aw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function lw(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Wg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (E) => {
    if (!E) return "";
    if (typeof E == "string") return String(E || "").trim();
    if (Array.isArray(E)) {
      if (E.length === 0) return "";
      if (E.length === 1) return i(E[0]);
      const W = String(E[0] || "").trim();
      if (W)
        return wi(t, {
          filename: W,
          subfolder: String(E[1] || "").trim(),
          type: String(E[2] || "output").trim() || "output"
        });
      for (const D of E) {
        const q = i(D);
        if (q) return q;
      }
      return "";
    }
    return typeof (E == null ? void 0 : E.src) == "string" && E.src ? E.src : typeof (E == null ? void 0 : E.url) == "string" && E.url ? E.url : wi(t, E);
  }, o = (E) => {
    if (!E || typeof E != "object") return "";
    const W = String(E.type || "").trim().toLowerCase();
    if (W === "dataurl") return String(E.value || "");
    if (W !== "comfy_image") return "";
    const D = String(E.filename || "").trim();
    return D ? wi(t, {
      filename: D,
      subfolder: String(E.subfolder || ""),
      type: String(E.storage || "input")
    }) : "";
  }, s = (E) => {
    const W = e == null ? void 0 : e.nodeOutputs;
    if (!W || E == null) return null;
    const D = String(E);
    return W instanceof Map ? W.get(E) || W.get(D) || W.get(Number(D)) || null : W[E] || W[D] || null;
  }, a = (E, W) => {
    var q;
    const D = s(E == null ? void 0 : E.id);
    return Array.isArray((q = D == null ? void 0 : D.ui) == null ? void 0 : q[W]) ? D.ui[W] : Array.isArray(D == null ? void 0 : D[W]) ? D[W] : [];
  }, l = (E, W) => {
    const D = s(E == null ? void 0 : E.id);
    return D != null && D.ui && Object.prototype.hasOwnProperty.call(D.ui, W) ? D.ui[W] : D && Object.prototype.hasOwnProperty.call(D, W) ? D[W] : null;
  }, c = (E, W) => {
    const D = l(E, "pano_sticker_input_state_hash"), q = Array.isArray(D) ? D[0] : D;
    return String(q ?? "").trim() || lw(W);
  }, d = (E) => {
    const W = [], D = /* @__PURE__ */ new Set();
    for (const q of E || []) {
      const ve = i(q);
      !ve || D.has(ve) || (D.add(ve), W.push(ve));
    }
    return W;
  }, u = (E, W) => {
    var ve;
    const D = [];
    Array.isArray(E == null ? void 0 : E.images) && E.images.length && D.push(E.images), Array.isArray((ve = E == null ? void 0 : E.ui) == null ? void 0 : ve.images) && E.ui.images.length && D.push(E.ui.images);
    const q = [];
    for (const _e of D)
      W >= 0 && W < _e.length && q.push(_e[W]), q.push(..._e);
    return q;
  }, f = (E, W) => {
    var R;
    const D = String(W || "").trim();
    if (!D) return { src: "", sourceType: "", inputName: "" };
    const ve = (Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : []).findIndex((X) => String((X == null ? void 0 : X.name) || "") === D);
    if (ve < 0) return { src: "", sourceType: "", inputName: D };
    const _e = E.graph ? E.getInputLink(ve) : null;
    if ((_e == null ? void 0 : _e.origin_id) == null) return { src: "", sourceType: "", inputName: D };
    const he = _e.origin_id, ie = _p(E, ve, he);
    if (!ie) return { src: "", sourceType: "", inputName: D };
    const ke = Number(_e.origin_slot ?? 0);
    let me = [];
    try {
      me = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ie) || [] : [];
    } catch {
      me = [];
    }
    if (Array.isArray(me) && me.length) {
      const X = [];
      ke >= 0 && ke < me.length && X.push(me[ke]), X.push(...me);
      const A = d(X.filter((ge) => !ja(ge)));
      if (A.length)
        return { src: A[0], srcCandidates: A, sourceType: "appNodeImageUrls", inputName: D };
    }
    const de = s((ie == null ? void 0 : ie.id) ?? he), J = d(u(de, ke).filter((X) => !ja(X))).map((X) => `${X}&pano_src=${Pu(de)}`);
    if (J.length)
      return { src: J[0], srcCandidates: J, sourceType: "nodeOutputs", inputName: D };
    const pe = Array.isArray(ie == null ? void 0 : ie.imgs) ? ie.imgs : [];
    if (pe.length) {
      const X = [];
      ke >= 0 && ke < pe.length && X.push(pe[ke]), X.push(...pe);
      const A = d(X);
      if (A.length)
        return { src: A[0], srcCandidates: A, sourceType: "nodeImgs", inputName: D };
    }
    const fe = (R = ie == null ? void 0 : ie.widgets) == null ? void 0 : R.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (fe) {
      let X = i(fe.value);
      if (X && !X.includes("/") && !X.includes(":") && (ie.comfyClass === "LoadImage" || ie.type === "LoadImage") && (X = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`), X) return { src: X, sourceType: "widget", inputName: D };
    }
    return { src: "", sourceType: "", inputName: D };
  }, h = (E, W = []) => {
    var q;
    const D = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : [];
    for (const ve of W) {
      const _e = D.findIndex((me) => String((me == null ? void 0 : me.name) || "") === ve), he = _e >= 0 && E.graph ? E.getInputLink(_e) : null;
      if ((he == null ? void 0 : he.origin_id) == null) continue;
      const ie = s(((q = _p(E, _e, he.origin_id)) == null ? void 0 : q.id) ?? he.origin_id), ke = (Array.isArray(ie == null ? void 0 : ie.images) ? ie.images : []).find(ja);
      return ke ? `${wi(t, ke)}&pano_src=${Pu(ie)}` : "";
    }
    return "";
  }, S = (E, W = []) => {
    const D = Array.isArray(W) ? W : [W];
    for (const q of D) {
      const ve = f(E, q);
      if (String((ve == null ? void 0 : ve.src) || "").trim()) return ve;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (E) => {
    const W = String(E || "").trim();
    if (!W) return [];
    if (sw(W)) return [W];
    const { filename: D, subfolder: q } = aw(W);
    return D ? d([
      wi(t, { filename: D, subfolder: q, type: "temp" }),
      wi(t, { filename: D, subfolder: q, type: "output" }),
      wi(t, { filename: D, subfolder: q, type: "input" }),
      W
    ]) : [W];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (E) => {
      var W;
      try {
        (W = Cn(E)) == null || W.linkedImages.forEach((D, q, ve) => {
          var _e;
          D != null && D.img && ((_e = n == null ? void 0 : n.isImageLoadFailed) != null && _e.call(n, D.img)) && ve.delete(q);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (E, W) => {
      var D;
      (D = E == null ? void 0 : E.delete) == null || D.call(E, `__ui__${String(W || "")}`);
    },
    linkedValue: (E, W) => {
      var he, ie, ke, me;
      const D = String(W || ""), q = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs.findIndex((de) => String((de == null ? void 0 : de.name) || "") === D) : -1, ve = q >= 0 && E.graph ? E.getInputLink(q) : null;
      if (ve) {
        const de = s(ve.origin_id), J = [
          de == null ? void 0 : de.output,
          de == null ? void 0 : de.result,
          (he = de == null ? void 0 : de.data) == null ? void 0 : he.output,
          (ie = de == null ? void 0 : de.data) == null ? void 0 : ie.result,
          (ke = de == null ? void 0 : de.ui) == null ? void 0 : ke.output,
          (me = de == null ? void 0 : de.ui) == null ? void 0 : me.result
        ];
        for (const pe of J) {
          if (!Array.isArray(pe)) continue;
          const fe = pe[Number(ve.origin_slot || 0)];
          if (typeof fe == "string" && fe.trim()) return fe;
        }
      }
      const _e = Array.isArray(E == null ? void 0 : E.widgets) ? E.widgets.find((de) => String((de == null ? void 0 : de.name) || "") === D) : null;
      return String((_e == null ? void 0 : _e.value) || "");
    },
    linkedVideoFile: h,
    loadPreferredExactLinkedImage: (E, W = [], D = null, q = "") => {
      var O;
      const ve = Array.isArray(W) ? W : [W], _e = S(E, ve), ie = (Array.isArray(_e == null ? void 0 : _e.srcCandidates) && _e.srcCandidates.length ? _e.srcCandidates : [_e == null ? void 0 : _e.src]).map((_) => String(_ || "").trim()).filter(Boolean);
      if (!ie.length) return null;
      const ke = d(ie.flatMap((_) => g(_)));
      if (!ke.length) return null;
      const me = Cn(E).linkedImages, de = String(q || ve.join("|") || "image_exact"), J = ie.join(`
`), pe = me.get(de);
      if (pe && pe.srcRaw === J && pe.img) return pe.img;
      const fe = r || globalThis.Image;
      if (typeof fe != "function") return null;
      const R = new fe();
      (O = n == null ? void 0 : n.markImageLoading) == null || O.call(n, R, J);
      const X = { srcRaw: J, resolvedSrc: "", img: R };
      me.set(de, X);
      let A = -1;
      const ge = (_) => {
        var k, se, Z;
        _ === "ready" ? (k = n == null ? void 0 : n.markImageReady) == null || k.call(n, R, J) : (se = n == null ? void 0 : n.markImageFailed) == null || se.call(n, R, J), D == null || D(R), (Z = E.setDirtyCanvas) == null || Z.call(E, !0, !0);
      }, P = () => {
        if (A += 1, A >= ke.length) {
          ge("failed");
          return;
        }
        X.resolvedSrc = ke[A], R.src = X.resolvedSrc;
      };
      return R.onload = () => ge("ready"), R.onerror = () => {
        if (A + 1 < ke.length) {
          P();
          return;
        }
        ge("failed");
      }, P(), R;
    },
    output: s,
    resolvePreferredExactLinkedSource: S,
    source: i,
    uiImage: (E, W, D, q = null) => {
      var de, J, pe;
      const ve = a(E, W)[0] || null, _e = i(ve);
      if (!_e) return null;
      const he = `__ui__${W}`, ie = (de = D == null ? void 0 : D.get) == null ? void 0 : de.call(D, he);
      if (ie && ie.__panoSrc === _e) return ie;
      const ke = r || globalThis.Image;
      if (typeof ke != "function") return null;
      const me = new ke();
      return me.__panoSrc = _e, (J = n == null ? void 0 : n.markImageLoading) == null || J.call(n, me, _e), me.onload = () => {
        var fe;
        (fe = n == null ? void 0 : n.markImageReady) == null || fe.call(n, me, _e), q == null || q(me);
      }, me.onerror = () => {
        var fe;
        (fe = n == null ? void 0 : n.markImageFailed) == null || fe.call(n, me, _e), q == null || q(me);
      }, me.src = _e, (pe = D == null ? void 0 : D.set) == null || pe.call(D, he, me), me;
    },
    uiList: a,
    uiValue: l
  };
}
function Ug({
  readState: e,
  reduce: t,
  projectModel: r,
  publishLiveState: n = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof r != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let s = null, a = !1, l = !1;
  const c = () => s || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || s ? !1 : (s = e(), a = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      s || this.beginGesture();
      const f = t(s, u);
      return f.changed ? (s = f.state, a = !0, n(s), d(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && a;
    },
    commitGesture() {
      if (l || !s) return !1;
      const u = a;
      return u && i(s), s = null, a = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !s ? !1 : (s = null, a = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      s && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = s != null;
      s = null, a = !1, u && n(null);
    }
  };
}
const wo = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, cw = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function Bg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !wo[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: fi(t.fps) };
}
function ri(e) {
  return structuredClone(e);
}
function uw(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function dw(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Wd(e, t, r) {
  const n = dw(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of wo[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(cw.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ri(An({ version: 2, stickers: [i] }).stickers[0]);
}
function fw(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Wd(e, n, t) : n) };
}
function pw(e, t) {
  const r = wo[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !uw(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function hw(e, t) {
  if (!t || t.id !== e.id) return ri(e);
  if (e.placement === t.placement) {
    const n = ri(e);
    for (const i of wo[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ri(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => wo[e.placement].includes(n))) return ri(e);
  const r = ri(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ri(e[n]);
  return r;
}
function mw(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ri(Wd(e, t, r)[n]), !0);
}
const Ha = "sticker_image_1", Yg = "external_image", ko = 0;
function Ga(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function zc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function li(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Cu(e, t = ko) {
  return (e == null ? void 0 : e.version) !== 2 ? li(e) : li(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Wr(r, t).active,
    external: r.source.kind === "port",
    ...Cd(r, t)
  }));
}
function Ud(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && li(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function qg(e) {
  return String((e == null ? void 0 : e.id) || "") === Ha || String((e == null ? void 0 : e.source_kind) || "") === Yg;
}
function Bd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : qg(t);
}
const Xg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Jg(e) {
  return !qg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Xg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Zg(e) {
  const t = Jg(e);
  return t ? Xg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function Qg(e, t = {}) {
  var ee, E, W;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((D) => String((D == null ? void 0 : D.id) || "") === Ha);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const D = String(((ee = e.active) == null ? void 0 : ee.selected_sticker_id) || "") === Ha;
    return {
      state: {
        ...e,
        stickers: r.filter((q, ve) => ve !== n),
        active: D ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), h = t.pose && typeof t.pose == "object" ? t.pose : {}, S = a ? h.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || h.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(S)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const D = Ga(g, u, f), q = Number(((E = s == null ? void 0 : s.initial_pose) == null ? void 0 : E.hFOV_deg) ?? g), ve = Ga(q, u, f), _e = Number(((W = s == null ? void 0 : s.initial_pose) == null ? void 0 : W.vFOV_deg) ?? ve);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - D) <= 1e-6 && Math.abs(_e - ve) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((he, ie) => ie === n ? {
          ...he,
          vFOV_deg: D,
          initial_pose: he.initial_pose && typeof he.initial_pose == "object" ? { ...he.initial_pose, vFOV_deg: ve } : he.initial_pose
        } : he)
      },
      changed: !0
    };
  }
  const b = r.reduce((D, q) => Math.max(D, Number((q == null ? void 0 : q.z_index) || 0)), -1), y = {
    yaw_deg: Number(h.yaw_deg || 0),
    pitch_deg: Number(h.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Ga(g, u, f) : Number(h.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(h.rot_deg ?? h.roll_deg ?? 0)
  }, H = {
    ...s || {},
    id: Ha,
    source_kind: Yg,
    source_link_id: i,
    source_state_hash: o,
    ...y,
    initial_pose: { ...y },
    visible: !0,
    z_index: b + 1
  }, z = n >= 0 ? r.map((D, q) => q === n ? H : D) : [...r, H];
  return { state: { ...e, stickers: z }, changed: !0 };
}
function _l(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const gw = ["IMAGE", "VIDEO"];
function wp(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => gw.includes(r)) ? "2d" : null;
}
function yw(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? wp(n.type) ?? wp((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function e0(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: _l(e, "sticker"),
    awaitingPose: !t && (_l(e, "sticker_state") || yw(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function t0(e) {
  return _l(e, "sticker") && _l(e, "sticker_state");
}
function bw(e, t) {
  return t0(e) ? Bg(t) : null;
}
function vw(e, t, r) {
  return fw(ig(e, t), Bg(r));
}
function kp(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return An({ version: 2, stickers: [i] }).stickers[0];
}
function n0(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((h) => Bd(e, h)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const h = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((S, g) => g !== o),
        active: h ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const h = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), S = kp(s.id, n, h);
    return { state: { ...e, stickers: e.stickers.map((g, b) => b === o ? S : g) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Zl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, kp(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = Ed(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, li(e).reduce((h, S) => Math.max(h, S.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((h) => ({ ...h, value: { ...h.value, vFOV_deg: h.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Yd(e) {
  const t = li(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: zc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: zc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: zc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function r0(e) {
  const t = Ud(e), r = Bd(e, t), n = li(e).some((a) => a && a.visible !== !1), i = Yd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Zg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function Sw(e) {
  var t, r;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((n) => ({ ...n })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((n) => ({ ...n })),
      raster_objects: (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.raster_objects) ? e.painting.raster_objects : []).map((n) => ({ ...n }))
    }
  };
}
function xp(e, t) {
  const r = Ud(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = Sw(e), i = String(r.id || ""), o = Yd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function _w(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function ww(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Qg(e, t.value);
  if (t.type === "sync-port") return n0(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Yd(e).reduce((f, h) => Math.max(f, Number(h.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Ga(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, h = Zl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, Ed(h, La(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: h }
        },
        changed: !0
      };
    }
    const u = { id: o, asset_id: s, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !li(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Ud(e);
  if (!r) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = r.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = Jg(r);
    return !i || !Zg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return xp(e, "front");
  if (t.type === "send-back") return xp(e, "back");
  if (t.type === "delete-selected") {
    if (Bd(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = li({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = _w(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? Cd(r, ko) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = NS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return sg(c, ko, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...a } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function kw(e = {}) {
  return Ug({
    ...e,
    reduce: ww,
    projectModel: r0
  });
}
const Ka = 2;
function Ni(e, t) {
  return Math.floor(e * t + 0.5);
}
function xw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function i0({ video: e, clock: t, fps: r, span: n, loop: i, place: o = () => null, onFrame: s, onCapture: a, onChange: l }) {
  let c = 0, d = !1, u = !1, f = { name: "idle" }, h = [];
  const S = () => d && !u, g = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function b() {
    for (const P of h) P();
    h = [];
  }
  function y(P, O = {}) {
    return b(), f = { name: P, ...O }, l(), f;
  }
  function H(P, O, _) {
    const k = () => {
      f === P && _();
    };
    e.addEventListener(O, k), h.push(() => e.removeEventListener(O, k));
  }
  function z(P, O) {
    let _ = t.requestFrame(function k(se) {
      f === P && (O(se), f === P && (_ = t.requestFrame(k)));
    });
    h.push(() => t.cancelFrame(_));
  }
  function ee(P) {
    c = P, s(c);
  }
  function E() {
    return y(u ? "error" : "idle");
  }
  const W = () => {
    var P;
    return ((P = o()) == null ? void 0 : P.origin) ?? 0;
  }, D = (P) => (P - W()) / r();
  function q(P) {
    const { start: O = 0, end: _ = 1 / 0 } = o() ?? {};
    return P >= O && P < _ && !(D(P) >= Number(e.duration));
  }
  function ve() {
    u = !0, E();
  }
  function _e() {
    const { seekable: P } = e, O = P != null && P.length ? P.end(P.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(D(c), Number.isFinite(O) ? O : 1 / 0));
  }
  function he(P) {
    if (!S()) return P === "play" ? J() : E();
    if (e.readyState < Ka && !e.seeking) {
      const O = y("loading", { then: P });
      return H(O, "loadeddata", () => he(O.then)), H(O, "error", ve), O;
    }
    return P === "play" && !q(c) ? J() : o() && !q(c) ? E() : ie(P, !1);
  }
  function ie(P, O) {
    const _ = _e(), k = Ni(Number(e.currentTime), r()) === Ni(_, r());
    if (!e.ended && !e.seeking && k) return ke(P);
    const se = y("seeking", { then: P, target: _, retried: O });
    return H(se, "seeked", () => {
      const Z = Ni(Number(e.currentTime), r()) === Ni(_e(), r()), I = _e() === se.target;
      Z || I && se.retried ? ke(se.then) : ie(se.then, I);
    }), H(se, "error", ve), e.seeking && k || (e.currentTime = _), se;
  }
  function ke(P) {
    return P === "play" ? me() : (a(), E());
  }
  function me() {
    const P = y("playingVideo", { shown: !1 });
    if (H(P, "pause", () => e.ended ? de() : R()), H(P, "ended", de), H(P, "error", ve), i() && !o() && Ni(Number(e.duration), r()) >= n()) {
      const _ = e.loop;
      e.loop = !0, h.push(() => {
        e.loop = _;
      });
    }
    const O = (_, k) => {
      k && !P.shown && (P.shown = !0, l()), pe(Ni(_ + W() / r(), r()));
    };
    if (g()) {
      let _ = e.requestVideoFrameCallback(function k(se, Z) {
        f === P && (O(Number(Z.mediaTime), !0), f === P && (_ = e.requestVideoFrameCallback(k)));
      });
      h.push(() => {
        var k;
        return (k = e.cancelVideoFrameCallback) == null ? void 0 : k.call(e, _);
      });
    } else
      z(P, () => O(Number(e.currentTime), e.readyState >= Ka));
    return Promise.resolve(e.play()).catch(() => {
      f === P && R();
    }), P;
  }
  function de() {
    a(), J();
  }
  function J() {
    var _;
    const P = y("playingClock", { startTs: t.now(), startFrame: c }), O = ((_ = o()) == null ? void 0 : _.start) ?? 0;
    return S() && c < O && e.readyState >= Ka && (e.currentTime = Math.max(0, D(O))), z(P, (k) => pe(P.startFrame + Math.floor(Math.max(0, k - P.startTs) / 1e3 * r()))), P;
  }
  function pe(P) {
    if (P < n()) {
      if (o() && f.name === "playingVideo" && !q(P)) {
        b(), e.pause(), ee(P), J();
        return;
      }
      const O = o() && f.name === "playingClock" && S() && P > c && !q(c) && q(P);
      ee(P), O && he("play");
      return;
    }
    if (!i() || n() <= 1) {
      fe(n() - 1);
      return;
    }
    f.name === "playingVideo" && (b(), e.pause()), ee(0), he("play");
  }
  function fe(P) {
    f.name === "playingVideo" ? (b(), e.pause(), ee(Math.max(0, P)), a()) : ee(Math.max(0, P)), he("still");
  }
  function R() {
    if (f.name === "loading" || f.name === "seeking")
      f.then = "still", l();
    else if (f.name === "playingVideo") {
      b(), e.pause();
      const P = xw(Number(e.currentTime) + W() / r(), r());
      ee(Math.min(P, n() - 1)), a(), c === P ? E() : he("still");
    } else f.name === "playingClock" && fe(Math.min(c, n() - 1));
  }
  function X() {
    if (!(ge() || n() <= 1)) {
      if (c >= n() - 1 && ee(0), f.name === "loading" || f.name === "seeking") {
        f.then = "play", l();
        return;
      }
      he("play");
    }
  }
  function A(P) {
    const O = Math.max(0, Math.min(Math.round(P), n() - 1));
    if (f.name === "loading" || f.name === "seeking") {
      f.then = "still", ee(O), l();
      return;
    }
    f.name === "playingVideo" && (b(), e.pause()), ee(O), he("still");
  }
  function ge() {
    return f.name === "playingVideo" || f.name === "playingClock" || f.then === "play";
  }
  return {
    get frame() {
      return c;
    },
    get state() {
      return f.name;
    },
    get playing() {
      return ge();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return f.name === "playingVideo" || f.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return f.name === "playingVideo" && f.shown;
    },
    play: X,
    stop: R,
    seek: A,
    toggle() {
      ge() ? R() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(P) {
      b(), d = !!P, u = !1, he("still");
    },
    dispose() {
      b(), d = !1, f = { name: "idle" };
    }
  };
}
function qd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(g) {
    a = g, t();
  }
  function d(g) {
    s = g, e.currentTime = g;
  }
  function u() {
    const g = l;
    f(), l !== g && r();
  }
  function f() {
    if (!n || i || e.readyState < Ka) return;
    const { time: g, playing: b, fps: y } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (b) {
      if (s !== null) return;
      const H = Number(e.duration), z = Number.isFinite(H) ? Math.min(g, H) : g, ee = Math.abs(Number(e.currentTime) - z) > 1.5 / y;
      if (e.ended && !ee) return;
      ee && d(z), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const h = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const g = s;
      s = null, !o.playing && g === o.time ? c(g) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [g, b] of Object.entries(h)) e.addEventListener(g, b);
  function S(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: b = null, playing: y = !1, fps: H }) {
      g !== n && (S(g), r()), o = { time: b, playing: y, fps: H }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, b) {
      return !n || i ? b : o.time === null ? null : o.playing && l ? e : a === null ? b : g;
    },
    dispose() {
      for (const [g, b] of Object.entries(h)) e.removeEventListener(g, b);
      S("");
    }
  };
}
function Wa(e, t, r = !1) {
  return !t && !r && e.isConnected && e.clientWidth > 0;
}
function Mw({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const h = /* @__PURE__ */ new Set();
  let S = null, g = null, b = {};
  const y = () => i().timeline.fps, H = (me) => me.stickers.find((de) => de.source.kind === "port"), z = () => b.bg !== void 0 ? b.bg : d && f > 0 ? { video: !0, frames: Math.round(f * y()), duration: f } : null, ee = () => b.bg === null ? b.upstreamClip ?? { start: 0, in: 0, duration: null } : i().background.clip, E = () => Ad(i(), {
    ...b,
    bg: z(),
    port: (S == null ? void 0 : S.meta) ?? b.port ?? null,
    camera: c
  }), W = i0({
    video: e,
    clock: n,
    fps: y,
    span: E,
    loop: () => !0,
    place: () => {
      const me = ee();
      return me ? Bm(me) : null;
    },
    onFrame: o,
    onCapture: s,
    onChange: l
  }), D = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, q = () => {
    u && (h.add(u), l());
  }, ve = qd({ video: t, onCapture: a, onChange: l }), _e = Pd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", D), e.addEventListener("error", q);
  function he(me) {
    me !== u && (u = me, e.pause(), me ? e.src = me : e.removeAttribute("src"), e.load(), W.setSource(!!me));
  }
  function ie() {
    W.playing && W.stop();
  }
  function ke(me) {
    const de = H(me);
    g = S && de ? xd(de.clip, W.frame, me.timeline.fps, S.meta) : null, ve.follow({
      src: (S == null ? void 0 : S.src) || "",
      time: g,
      playing: W.advancing,
      fps: me.timeline.fps
    });
  }
  return {
    get frame() {
      return W.frame;
    },
    get playing() {
      return W.playing;
    },
    get showsVideo() {
      return W.showsVideo;
    },
    get source() {
      return u;
    },
    // Whether the background shows at the playhead (backgroundShownAt); where it does not, the surface shows
    // bg_color, as the node's output does.
    get backgroundShows() {
      const me = ee();
      return b.bg === null ? !me || vu(me, W.frame, y(), b.upstreamMedia ?? null, !0) : !me || vu(me, W.frame, y(), z(), !!b.upstream);
    },
    pause: ie,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return S;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(me, de) {
      return S != null && S.frames ? _e.picture(S.frames, g, S.meta, de) : ve.picture(me, de);
    },
    toggle() {
      W.playing ? W.stop() : W.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. `media` is
    // what the node's result gives autoTimelineLength of its inputs ({ bg, port, sceneItems, upstream }; `bg`
    // left out while no result gives it, null when an upstream background stands in, which `upstreamClip`
    // places and `upstreamMedia` ({ video, frames, duration } of its MP4) ends). Out of sight, the node pauses and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: me, sources: de, state: J, sticker: pe = null, media: fe = {} }) {
      if (S = me ? pe : null, b = fe, !me)
        return ie(), he(""), ke(J), !1;
      for (const P of h)
        de.includes(P) || h.delete(P);
      const R = de.find((P) => P && !h.has(P)) || "", X = R !== d;
      X && (d = R, f = 0), he(d);
      const A = eg(J, { camera: c }) || !!d && W.state !== "error" || !!S;
      return A || ie(), (X || !A || !W.playing && W.frame >= E()) && W.frame !== ko && W.seek(ko), ke(J), A;
    },
    dispose() {
      W.dispose(), ve.dispose(), e.removeEventListener("loadedmetadata", D), e.removeEventListener("error", q), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
function Nw(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : Km(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
  let o = Object.keys(r.scene).length > 0 || Object.hasOwn(r, "painting_visible");
  const s = [];
  for (const a of e.stickers) {
    if (n.has(a.id)) {
      o = !0;
      continue;
    }
    const l = i.get(a.id);
    l !== void 0 && l.placement === a.placement ? (s.push({ ...a, ...l }), o = !0) : s.push(a);
  }
  return o ? {
    ...e,
    scene: { ...e.scene, ...r.scene },
    stickers: s,
    painting_visible: Object.hasOwn(r, "painting_visible") ? r.painting_visible : e.painting_visible,
    upstream: []
  } : e;
}
const o0 = "PANO_SCENE";
function s0(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: An(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function Xd(e) {
  if (!e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length) return null;
  const t = e("pano_upstream_bg_color")[0], r = e("pano_upstream_bg_clip")[0], n = An({ version: 2, background: { clip: r == null ? void 0 : r.clip } }).background.clip;
  return {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: $n(e("pano_upstream_coverage")[0]),
    color: Array.isArray(t) && t.length === 3 ? `#${t.map((i) => Math.round(Math.min(1, Math.max(0, Number(i) || 0)) * 255).toString(16).padStart(2, "0")).join("")}` : null,
    clip: Xl(n) || !(Number(r == null ? void 0 : r.fps) > 0) ? null : { clip: n, fps: Number(r.fps) }
  };
}
const Pw = "bg_media is not used";
function Aw(e, t) {
  return e === o0 && t === null;
}
function Tn(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function a0(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function l0(e, t, r) {
  const n = a0(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((h) => h.layer === i.id) ?? null : null, c = Nw(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Po(u, r), painting: d };
    for (const h of f.stickers)
      h.origin = { layer: n[s], id: h.id }, h.id = Jd(n[s], h.id);
    return { key: n[s], sceneState: f, ui: o, received: i };
  });
}
function Jd(e, t) {
  return `upstream:${e}:${t}`;
}
function Iu(e, t) {
  return Jd(e, t);
}
function Ut(e) {
  return !!e && typeof e == "object" && !!e.origin;
}
function wl(e) {
  return Cs(e.origin.layer);
}
function Cs(e) {
  return !e.startsWith("#");
}
function c0(e) {
  const t = e.placement === "world";
  return ["clip", "visible", "locked", "crop", ...(t ? hi : pi).map(([n]) => n), ...t ? [] : ["z_index"]];
}
function Cw(e) {
  return Object.fromEntries(c0(e).map((t) => [t, JSON.stringify(e[t])]));
}
function u0(e) {
  return {
    visible: JSON.stringify(e.scene.visible),
    clip: JSON.stringify(e.scene.clip),
    painting_visible: JSON.stringify(e.painting_visible)
  };
}
function Zd(e) {
  return `layer:${e}`;
}
function Mp(e) {
  return new Map(e.flatMap(({ key: t, sceneState: r }) => [
    [Zd(t), u0(r)],
    ...r.stickers.map((n) => [n.id, Cw(n)])
  ]));
}
function Iw(e, t, r, n, i) {
  const o = [...e];
  let s = !1;
  const a = (l, c) => {
    s = !0;
    let d = o.findIndex((u) => u.layer === l);
    if (d < 0 && (d = o.push({ layer: l, fps: i, deleted: [], stickers: [], scene: {} }) - 1), o[d].fps !== i) {
      const u = t[c].sceneState;
      o[d] = Km(o[d], u.timeline.fps === i ? u : Po(u, i));
    }
    return d;
  };
  return r.forEach(({ key: l, sceneState: c }, d) => {
    if (!Cs(l)) return;
    const u = n.get(Zd(l));
    if (u) {
      const f = u0(c), h = ["visible", "clip"].filter((S) => f[S] !== u[S]);
      if (h.length) {
        const S = a(l, d), g = { ...o[S].scene };
        for (const b of h) g[b] = structuredClone(c.scene[b]);
        o[S] = { ...o[S], scene: g };
      }
      if (f.painting_visible !== u.painting_visible) {
        const S = a(l, d);
        o[S] = { ...o[S], painting_visible: c.painting_visible };
      }
    }
    for (const f of c.stickers) {
      const h = n.get(f.id);
      if (!h) continue;
      const S = c0(f).filter((ee) => JSON.stringify(f[ee]) !== h[ee]);
      if (!S.length) continue;
      const g = a(l, d), { id: b } = f.origin, y = [...o[g].stickers], H = y.findIndex((ee) => ee.id === b), z = H >= 0 && y[H].placement === f.placement ? { ...y[H] } : { id: b, placement: f.placement };
      for (const ee of S) z[ee] = structuredClone(f[ee]);
      H >= 0 ? y[H] = z : y.push(z), o[g] = { ...o[g], stickers: y };
    }
  }), s ? An({ version: 2, upstream: o }).upstream : e;
}
function Ew(e, t, r) {
  const n = [];
  return e.forEach(({ key: i, sceneState: o }, s) => {
    if (!Cs(i)) return;
    const a = t.find((d) => d.layer === i), l = r.get(Zd(i)), c = o.scene.clip;
    (a && Object.hasOwn(a.scene, "clip") || l && l.clip !== JSON.stringify(c)) && n.push({ index: s, clip: c, sticker: null });
    for (const d of o.stickers) {
      const u = a == null ? void 0 : a.stickers.some((h) => h.id === d.origin.id && h.placement === d.placement && Object.hasOwn(h, "clip")), f = r.has(d.id) && r.get(d.id).clip !== JSON.stringify(d.clip);
      (u || f) && n.push({ index: s, clip: d.clip, sticker: d });
    }
  }), n;
}
function d0(e, t, r, n, i, o = null) {
  return Ew(e, t, r).flatMap(({ index: s, clip: a, sticker: l }) => {
    if (a.duration !== null && a !== o) return [a.start + a.duration];
    const c = (l == null ? void 0 : l.source.kind) === "port" ? n(s) : null;
    return c ? [Md({ ...a, duration: null }, i, c)] : [];
  });
}
function tc(e, t, r, n) {
  const i = e.findIndex((s) => s.layer === t), o = [...e];
  return i < 0 ? o.push(n({ layer: t, fps: r, deleted: [], stickers: [], scene: {} })) : o[i] = n(o[i]), An({ version: 2, upstream: o }).upstream;
}
function Ow(e, t, r) {
  return t.reduce((n, { layer: i, id: o }) => tc(n, i, r, (s) => ({
    ...s,
    deleted: [...s.deleted, o],
    stickers: s.stickers.filter((a) => a.id !== o)
  })), e);
}
const Fw = new Set([...pi, ...hi].map(([e]) => e));
function f0(e, { layer: t, id: r }) {
  var n;
  return ((n = e.find((i) => i.layer === t)) == null ? void 0 : n.stickers.find((i) => i.id === r)) ?? null;
}
function Tw(e, t, r = null) {
  const { origin: n } = t, i = f0(e, n);
  return !i || r !== null && !(Fw.has(r) && i.placement === t.placement && Object.hasOwn(i, r)) ? e : tc(e, n.layer, null, (o) => ({
    ...o,
    stickers: o.stickers.flatMap((s) => {
      if (s.id !== n.id) return [s];
      if (r === null) return [];
      const a = { ...s };
      return delete a[r], [a];
    })
  }));
}
function Dw(e, t) {
  var n;
  const r = new Set((n = e.find((i) => i.layer === t.key)) == null ? void 0 : n.deleted);
  return t.received.stickers.filter((i) => r.has(i.id)).length;
}
function Rw(e, t) {
  var r;
  return (r = e.find((n) => n.layer === t)) != null && r.deleted.length ? tc(e, t, null, (n) => ({ ...n, deleted: [] })) : e;
}
function p0(e) {
  return !!e && (Object.keys(e.scene).length > 0 || Object.hasOwn(e, "painting_visible"));
}
function Lw(e, t) {
  return p0(e.find((r) => r.layer === t)) ? tc(e, t, null, ({ painting_visible: r, ...n }) => ({ ...n, scene: {} })) : e;
}
function Vw(e, t) {
  const r = a0(t), n = new Map(t.flatMap(({ sceneState: s }, a) => r[a] === s.id ? [[s.id, new Set(s.stickers.map((l) => l.id))]] : []));
  let i = !1;
  const o = e.map((s) => {
    const a = n.get(s.layer);
    if (!a) return s;
    const l = s.deleted.filter((d) => a.has(d)), c = s.stickers.filter((d) => a.has(d.id));
    return l.length === s.deleted.length && c.length === s.stickers.length ? s : (i = !0, { ...s, deleted: l, stickers: c });
  });
  return i ? An({ version: 2, upstream: o }).upstream : e;
}
function $w(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a, received: l } = e, c = $s(s, r), d = (b) => b.visible ? n(b) : null, u = Cg(s, r, { media: d, zIndex: (b) => b.z_index, paintLayers: i, evaluated: c }).map((b) => b.kind === "erp" ? { ...b, id: Jd(t, b.id) } : b), f = Og(s, r, s.stickers, { media: d, evaluated: c }), h = [], S = yl(Tn(a, "pano_scene_files"), Tn(a, "pano_scene_meta"), o);
  S && h.push({ slot: `${t}:scene`, urls: S.urls.filter(Boolean), request: zd(S, c.scene), value: c.scene, opacity: 1 });
  const g = yl(Tn(a, "pano_sticker_files"), Tn(a, "pano_sticker_meta"), o);
  if (g) {
    const b = _g(g, s, c);
    h.push({ slot: `${t}:sticker`, urls: wg(g, l), request: b, value: (b == null ? void 0 : b.value) ?? null, opacity: (b == null ? void 0 : b.opacity) ?? 1 });
  }
  return { evaluated: c, sky: u, stickers: f, items: h };
}
const kl = Math.PI / 180, kr = 180 / Math.PI, zw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), jw = 260;
function Np(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function h0(e, t) {
  return t ? h0(t, e % t) : e;
}
function Hw(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = h0(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Is(e, t) {
  const r = Np(e), n = Np(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: Hw(r, n) };
}
function Di(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function m0(e) {
  const t = Di(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Qd(e, t, r = zw) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (b, y, H) => {
    const z = b + y, ee = Math.max(0, H - 1), E = z > ee && z > 0 ? ee / z : 1;
    return [b * E, y * E];
  }, [d, u] = c(l, s, n), [f, h] = c(o, a, i), S = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - h)
  }, g = md(S, t);
  return {
    x: S.x + (S.w - g.width) * 0.5,
    y: S.y + (S.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: S
  };
}
function Gw(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Qd({ width: r, height: n }, 1), o = Fe(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * kl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Mm(l, _m(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = Kw(c, No(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = gd({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function g0(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * kr),
    pitch: Fe(Math.asin(Fe(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * kr, -89.9, 89.9)
  };
}
function Kw(e, t) {
  const r = g0(e), n = No(r.yaw, r.pitch, 0), i = Sc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...r, roll: 0 };
  const a = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...r,
    roll: Ul(Math.atan2(
      Sc(a, n.up),
      Sc(a, n.right)
    ) * kr)
  };
}
function y0(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Qd({ width: r, height: n }, Hi(e)), o = Vi(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Mm(e, _m(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = g0(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Fe(2 * Math.atan(r / (2 * o)) * kr, 1, 179)
  };
}
function Ww(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Vi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = yd(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, h = n / i, S = Math.tan(du * kl), g = h >= 1 ? S : S * h, b = h >= 1 ? S / h : S;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * kr,
      vFOV_deg: 2 * Math.atan(d / a) * kr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(g) * kr,
        vFOV_deg: 2 * Math.atan(b) * kr
      }
    }
  };
}
function Zi(e, t) {
  const r = Di(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = t(r);
  return !n || n === r ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === r ? n : i)
    },
    changed: !0
  };
}
function Uw(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Vi(r, e);
    return gd(md(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: Ta(o, t) };
}
function Pp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = Is(t, r);
  if (!o) return e;
  const s = Hi(e) >= 1;
  n && o.ratio >= 1 !== s && (o = Is(o.height, o.width));
  const a = Uw(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function b0(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Di(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = wm({
      id: n,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      rollDeg: t.rollDeg,
      viewFovDeg: t.viewFovDeg,
      frameFovDeg: t.frameFovDeg
    });
    return {
      state: {
        ...e,
        shots: [i],
        active: { ...e.active || {}, selected_shot_id: n }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const n = Di(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
    return {
      state: {
        ...e,
        shots: i,
        active: { ...e.active || {}, selected_shot_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Zi(e, (n) => Pp(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Zi(e, (n) => {
      const o = String(Vr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Is(o[1], o[2]) : Is(Hi(n), 1);
      return s ? Pp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Zi(e, (i) => {
      const o = Ul(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Zi(e, (n) => {
    const i = km(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Zi(e, (n) => {
    const i = xm(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Zi(e, (n) => {
    const i = _0(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function v0({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const a = o && i ? "alt" : n ? "shift" : "";
  if (!a || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (a === "shift" && d < Math.min(l.w, l.h) * s) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: a,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function S0(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + vm(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Sm(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function _0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * kl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, h = d * c + u * l, S = Number(e.pitch_deg || 0) * kl, g = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(f) / g * kr),
    pitch_deg: Fe(Number(e.pitch_deg || 0) - Math.atan(h) * kr, -90, 90)
  };
}
function Bw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Ug({
    readState: e,
    reduce: b0,
    projectModel: m0,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const We = Object.freeze({
  globe: "globe",
  pano: "pano",
  unwrap: "unwrap",
  camera: "camera",
  play: "play",
  pause: "pause",
  volume: "volume",
  volume2: "volume2",
  volume_muted: "volume_muted",
  loop: "loop",
  loop_off: "loop_off",
  cursor_tool: "cursor_tool",
  palette_tool: "palette_tool",
  circle_dashed_tool: "circle_dashed_tool",
  image: "image",
  plus_circle: "plus_circle",
  clear: "clear",
  undo: "undo",
  redo: "redo",
  reset: "reset",
  focus: "focus",
  eye: "eye",
  eye_dashed: "eye_dashed",
  fullscreen: "fullscreen",
  fullscreen_close: "fullscreen_close",
  chevron: "chevron",
  copy: "copy",
  bring_front: "bring_front",
  send_back: "send_back",
  duplicate: "duplicate",
  replace_image: "replace_image",
  back_initial: "back_initial",
  delete: "delete",
  lock_closed: "lock_closed",
  lock_open: "lock_open",
  aspect: "aspect",
  rotate_90: "rotate_90",
  roll: "roll",
  help: "help",
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool",
  keyframe: "keyframe",
  dof_3: "dof_3",
  dof_6: "dof_6",
  camera_plus: "camera_plus",
  box: "box"
}), Yw = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, qw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Yw(t[2])
})), Xw = {
  globe: { name: "world", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M3.6 9h16.8' /><path d='M3.6 15h16.8' /><path d='M11.5 3a17 17 0 0 0 0 18' /><path d='M12.5 3a17 17 0 0 1 0 18' />" },
  pano: { name: "view-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M12 12m-4 0a4 9 0 1 0 8 0a4 9 0 1 0 -8 0' /><path d='M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4z' />" },
  unwrap: { name: "panorama-horizontal", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0a1 1 0 0 1 1.345 .934v11c0 .692 -.692 1.2 -1.34 .962c-5.107 -1.932 -10.214 -1.932 -15.321 0c-.648 .246 -1.339 -.242 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935l0 .001' />" },
  camera: { name: "camera", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  play: { name: "player-play", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 4v16l13 -8l-13 -8' />" },
  pause: { name: "player-pause", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' /><path d='M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' />" },
  volume: { name: "volume", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8a5 5 0 0 1 0 8' /><path d='M17.7 5a9 9 0 0 1 0 14' /><path d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' />" },
  volume2: { name: "volume-3", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5' /><path d='M16 10l4 4m0 -4l-4 4' />" },
  volume_muted: { name: "volume-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464' /><path d='M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615' /><path d='M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664' /><path d='M3 3l18 18' />" },
  loop: { name: "repeat", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3' /><path d='M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3' />" },
  loop_off: { name: "repeat-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12v-3c0 -1.336 .873 -2.468 2.08 -2.856m3.92 -.144h10m-3 -3l3 3l-3 3' /><path d='M20 12v3a3 3 0 0 1 -.133 .886m-1.99 1.984a3 3 0 0 1 -.877 .13h-13m3 3l-3 -3l3 -3' /><path d='M3 3l18 18' />" },
  cursor_tool: { name: "pointer", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563' />" },
  palette_tool: { name: "palette", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25' /><path d='M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />" },
  circle_dashed_tool: { name: "circle-dashed", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95' /><path d='M3.69 8.56a9 9 0 0 0 -.69 3.44' /><path d='M3.69 15.44a9 9 0 0 0 1.95 2.92' /><path d='M8.56 20.31a9 9 0 0 0 3.44 .69' /><path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95' /><path d='M20.31 15.44a9 9 0 0 0 .69 -3.44' /><path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92' /><path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69' />" },
  image: { name: "photo", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 8h.01' /><path d='M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12' /><path d='M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5' /><path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3' />" },
  plus_circle: { name: "circle-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M9 12h6' /><path d='M12 9v6' />" },
  clear: { name: "trash", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />" },
  undo: { name: "arrow-back-up", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M9 14l-4 -4l4 -4' /><path d='M5 10h11a4 4 0 1 1 0 8h-1' />" },
  redo: { name: "arrow-forward-up", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 14l4 -4l-4 -4' /><path d='M19 10h-11a4 4 0 1 0 0 8h1' />" },
  reset: { name: "refresh", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4' /><path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4' />" },
  focus: { name: "focus-2", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M11.5 12a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0' fill='currentColor' /><path d='M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' /><path d='M12 3l0 2' /><path d='M3 12l2 0' /><path d='M12 19l0 2' /><path d='M19 12l2 0' />" },
  eye: { name: "eye", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' /><path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6' />" },
  eye_dashed: { name: "eye-off", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10.585 10.587a2 2 0 0 0 2.829 2.828' /><path d='M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87' /><path d='M3 3l18 18' />" },
  fullscreen: { name: "maximize", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 8v-2a2 2 0 0 1 2 -2h2' /><path d='M4 16v2a2 2 0 0 0 2 2h2' /><path d='M16 4h2a2 2 0 0 1 2 2v2' /><path d='M16 20h2a2 2 0 0 0 2 -2v-2' />" },
  fullscreen_close: { name: "minimize", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M15 19v-2a2 2 0 0 1 2 -2h2' /><path d='M15 5v2a2 2 0 0 0 2 2h2' /><path d='M5 15h2a2 2 0 0 1 2 2v2' /><path d='M5 9h2a2 2 0 0 0 2 -2v-2' />" },
  chevron: { name: "chevron-down", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 9l6 6l6 -6' />" },
  copy: { name: "copy", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' /><path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />" },
  bring_front: { name: "stack-front", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 4l-8 4l8 4l8 -4l-8 -4' /><path d='M8 14l-4 2l8 4l8 -4l-4 -2' /><path d='M8 10l-4 2l8 4l8 -4l-4 -2' />" },
  send_back: { name: "stack-back", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 8l8 4l8 -4l-8 -4l-8 4' /><path d='M12 16l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2' /><path d='M8 10l-4 2l4 2m8 0l4 -2l-4 -2' />" },
  duplicate: { name: "copy-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666' /><path d='M4.012 16.737a2 2 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' /><path d='M11 14h6' /><path d='M14 11v6' />" },
  replace_image: { name: "replace", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' /><path d='M15 16a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4' /><path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3' /><path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3' />" },
  back_initial: { name: "restore", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3.06 13a9 9 0 1 0 .49 -4.087' /><path d='M3 4.001v5h5' /><path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' />" },
  delete: { name: "trash", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />" },
  lock_closed: { name: "lock", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6' /><path d='M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0' /><path d='M8 11v-4a4 4 0 1 1 8 0v4' />" },
  lock_open: { name: "lock-open", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -6' /><path d='M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0' /><path d='M8 11v-5a4 4 0 0 1 8 0' />" },
  aspect: { name: "aspect-ratio", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10' /><path d='M7 12v-3h3' /><path d='M17 12v3h-3' />" },
  rotate_90: { name: "rotate-clockwise-2", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5' /><path d='M5.63 7.16l0 .01' /><path d='M4.06 11l0 .01' /><path d='M4.63 15.1l0 .01' /><path d='M7.16 18.37l0 .01' /><path d='M11 19.94l0 .01' />" },
  roll: { name: "angle", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 19h16' /><path d='M6 17l11 -11' /><path d='M9 19a5 5 0 0 1 1.46 -3.54' />" },
  help: { name: "help", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 17l0 .01' /><path d='M12 13.5a2.5 2.5 0 1 0 -2.5 -2.5' /><path d='M12 13.5v.5' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />" },
  pencil_tool: { name: "pencil", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' />" },
  spray_can_tool: { name: "spray", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7' /><path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' /><path d='M15 7h.01' /><path d='M18 9h.01' /><path d='M18 5h.01' /><path d='M21 3h.01' /><path d='M21 7h.01' /><path d='M21 11h.01' /><path d='M10 7h1' />" },
  highlighter_tool: { name: "highlight", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M12.5 5.5l4 4' /><path d='M4.5 13.5l4 4' /><path d='M21 15v4h-8l4 -4l4 0' />" },
  paintbrush_vertical_tool: { name: "brush", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21v-4a4 4 0 1 1 4 4h-4' /><path d='M21 3a16 16 0 0 0 -12.8 10.2' /><path d='M21 3a16 16 0 0 1 -10.2 12.8' /><path d='M10.6 9a9 9 0 0 1 4.4 4.4' />" },
  eraser_tool: { name: "eraser", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' /><path d='M18 13.3l-6.3 -6.3' />" },
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" },
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" },
  // The 3DoF | 6DoF view modes (#71): the numerals 3 and 6, drawn in the Tabler stroke style.
  dof_3: { name: "rotate-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 16h4v4' /><path d='M19.458 11.042c.86 -2.366 .722 -4.58 -.6 -5.9c-2.272 -2.274 -7.185 -1.045 -10.973 2.743c-3.788 3.788 -5.017 8.701 -2.744 10.974c2.227 2.226 6.987 1.093 10.74 -2.515' />" },
  dof_6: { name: "arrows-move", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 9l3 3l-3 3' /><path d='M15 12h6' /><path d='M6 9l-3 3l3 3' /><path d='M3 12h6' /><path d='M9 18l3 3l3 -3' /><path d='M12 15v6' /><path d='M15 6l-3 -3l-3 3' /><path d='M12 3v6' />" },
  // Add Camera (Panorama Studio, #89) and the `scene` row of the Timeline.
  camera_plus: { name: "camera-plus", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5' /><path d='M16 19h6' /><path d='M19 16v6' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  box: { name: "box", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5' /><path d='M12 12l8 -4.5' /><path d='M12 12l0 9' /><path d='M12 12l-8 -4.5' />" }
}, Ap = Object.fromEntries(
  Object.entries(Xw).map(([e, t]) => [e, {
    name: t.name,
    elements: qw(t.body)
  }])
), zt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Ap, n) ? Ap[n] : null;
    });
    return (n, i) => r.value ? (Re(), Ve("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: mt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Re(!0), Ve(Ze, null, Nt(r.value.elements, (o, s) => (Re(), Ve(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Re(), Ve("path", Tr({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Re(), Ve("circle", Tr({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Re(), Ve("rect", Tr({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Re(), Ve("line", Tr({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Re(), Ve("polyline", Tr({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Re(), Ve("polygon", Tr({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : lt("", !0)
      ], 64))), 128))
    ], 2)) : lt("", !0);
  }
}, nn = {
  __name: "PanoIconButton",
  props: {
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    icon: { type: String, default: "" },
    label: { type: String, default: "" },
    tip: { type: String, default: "" },
    pressed: { type: [String, Boolean], default: null },
    extraClass: { type: [String, Array, Object], default: "" },
    attrs: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Re(), Vn(wb(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: $h(() => [
        Be(zt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, Jw = ["aria-expanded", "disabled"], Zw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Qw = ["data-aspect", "disabled", "onClick"], ek = { class: "pano-cutout-aspect-custom" }, tk = ["disabled"], nk = ["disabled"], rk = ["data-custom-width", "data-custom-height", "disabled"], w0 = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ Jt("1"), s = /* @__PURE__ */ Jt("1"), a = /* @__PURE__ */ Jt(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], b = String(r.model.aspectLabel || "");
      return g.length ? g.map((y) => {
        const H = typeof y == "string" ? y : String((y == null ? void 0 : y.value) || ""), z = typeof y == "string" ? y : String((y == null ? void 0 : y.label) || H);
        return {
          ...typeof y == "object" && y ? y : {},
          value: H,
          label: z,
          active: b ? H === b : (y == null ? void 0 : y.active) === !0
        };
      }) : i.map((y) => ({
        ...y,
        active: y.value === b
      }));
    }), d = ut(() => {
      var b;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((b = c.value.find((y) => y.active === !0)) == null ? void 0 : b.label) || "Aspect");
    });
    Oi(d, (g) => {
      const b = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      b && (o.value = b[1], s.value = b[2]);
    }, { immediate: !0 });
    function u(g) {
      n("action", g);
    }
    function f(g) {
      var b;
      r.model.aspectOpen === !0 && ((b = a.value) != null && b.contains(g.target) || u({ type: "close-aspect" }));
    }
    Hl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Rs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function h(g) {
      const [b, y] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: b,
        height: y,
        preserveOrientation: !0
      });
    }
    function S() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, b) => (Re(), Ve("div", {
      ref_key: "rootElement",
      ref: a,
      class: mt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Re(), Vn(nn, {
        key: 0,
        icon: e.model.aspectIcon || rt(We).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: b[0] || (b[0] = (y) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Re(), Ve("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: b[1] || (b[1] = (y) => u({ type: "toggle-aspect" }))
      }, [
        Be(zt, {
          icon: e.model.aspectIcon || rt(We).aspect
        }, null, 8, ["icon"]),
        Me("span", null, tt(d.value), 1),
        Be(zt, {
          icon: rt(We).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, Jw)),
      jr(Me("div", Zw, [
        (Re(!0), Ve(Ze, null, Nt(c.value, (y) => (Re(), Ve("button", {
          key: y.value,
          class: mt(["pano-btn pano-frame-aspect-choice", { active: y.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": y.value,
          disabled: l.value,
          onClick: (H) => h(y)
        }, tt(y.label), 11, Qw))), 128)),
        Me("div", ek, [
          jr(Me("input", {
            "onUpdate:modelValue": b[2] || (b[2] = (y) => o.value = y),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, tk), [
            [Xf, o.value]
          ]),
          b[4] || (b[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          jr(Me("input", {
            "onUpdate:modelValue": b[3] || (b[3] = (y) => s.value = y),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, nk), [
            [Xf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: S
          }, "Apply", 8, rk)
        ])
      ], 512), [
        [Li, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, ik = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, ok = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Re(), Ve("div", {
      class: mt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Mt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Mt(() => {
      }, ["stop"]))
    }, [
      Be(nn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Mt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", ik, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Re(!0), Ve(Ze, null, Nt(rt(r), (o) => (Re(), Ve("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, tt(o[0]), 1),
          Me("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, sk = {
  class: "pano-view-unavailable",
  role: "status"
}, nc = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Re(), Ve("div", sk, tt(rt(Fg)), 1));
  }
}, ak = { class: "pano-cutout-node-surface" }, lk = ["title", "disabled"], ck = { class: "value" }, uk = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, dk = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function r(n) {
      var i;
      (i = t.onAction) == null || i.call(t, n);
    }
    return (n, i) => (Re(), Ve("div", ak, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Mt(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Mt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(nn, {
          icon: e.model.hasShot ? rt(We).delete : rt(We).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(w0, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Mt((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(zt, {
            icon: rt(We).roll
          }, null, 8, ["icon"]),
          Me("span", ck, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, lk),
        Be(nn, {
          icon: rt(We).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(ok)
      ], 32),
      e.model.hasShot === !1 ? (Re(), Ve("div", uk, " Choose a view · + Add Frame ")) : lt("", !0),
      e.model.viewUnavailable ? (Re(), Vn(nc, { key: 1 })) : lt("", !0)
    ]));
  }
}, k0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Jt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, s = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var g, b;
      const { active: f, intent: h } = a();
      if (!f) return;
      const S = ((b = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : b[0]) || null;
      if (S) {
        n("file-selected", { intent: h, file: S });
        return;
      }
      n("file-cancelled", { intent: h });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Re(), Ve("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: d
    }, null, 544));
  }
}, fk = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, pk = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Jt(!1), r = Object.freeze([
      ["Add Image", "Choose an image file"],
      ["Drop image", "Add at view center"],
      ["Sticker drag", "Move sticker"],
      ["Corner drag", "Scale sticker"],
      ["Top handle", "Rotate sticker"],
      ["Delete", "Delete selected sticker"],
      ["Restore", "Reset input sticker pose"],
      ["Empty drag", "Pan view"],
      ["Wheel", "Adjust FOV"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Re(), Ve("div", {
      class: mt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Mt(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Mt(() => {
      }, ["stop"]))
    }, [
      Be(nn, {
        icon: rt(We).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Mt((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", fk, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Re(!0), Ve(Ze, null, Nt(rt(r), (o) => (Re(), Ve("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, tt(o[0]), 1),
          Me("span", null, tt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, hk = { class: "pano-stickers-node-surface" }, mk = ["disabled"], gk = ["aria-label", "data-tip"], yk = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, bk = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, vk = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null);
    function n(s) {
      var a;
      (a = t.onAction) == null || a.call(t, s);
    }
    function i() {
      var s, a;
      (a = (s = r.value) == null ? void 0 : s.open) == null || a.call(s, "add");
    }
    function o(s) {
      n({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, a) => (Re(), Ve("div", hk, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Mt(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Mt(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(zt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be(zt, {
            icon: rt(We).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, mk),
        Be(nn, {
          icon: e.model.locked ? rt(We).lock_closed : rt(We).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(nn, {
          icon: rt(We).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(nn, {
          icon: rt(We).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(nn, {
          icon: e.model.isExternalSelection ? rt(We).back_initial : rt(We).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(pk)
      ], 32),
      e.model.playable === !0 ? (Re(), Ve("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Mt(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Mt(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(zt, {
          icon: e.model.playing ? rt(We).pause : rt(We).play
        }, null, 8, ["icon"])
      ], 40, gk)) : lt("", !0),
      e.model.hasStickers === !1 ? (Re(), Ve("div", yk, " Add Image to place a sticker ")) : lt("", !0),
      e.model.dropActive === !0 ? (Re(), Ve("div", bk, "Drop image to add")) : lt("", !0),
      Be(k0, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Re(), Vn(nc, { key: 3 })) : lt("", !0)
    ]));
  }
}, Sk = { class: "pano-studio-node-surface" }, _k = {
  class: "pano-studio-node-status",
  role: "status"
}, wk = { class: "pano-studio-node-shot" }, kk = { class: "pano-studio-node-size" }, xk = { class: "pano-studio-node-note" }, Mk = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Re(), Ve("div", Sk, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Mt(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Mt(() => {
        }, ["stop"]))
      }, [
        Me("div", _k, [
          Me("span", wk, tt(e.model.status.shot), 1),
          Me("span", kk, tt(e.model.status.size), 1),
          Me("span", xk, tt(e.model.status.note), 1)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Be(zt, {
            icon: rt(We).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Re(), Vn(nc, { key: 0 })) : lt("", !0)
    ]));
  }
}, Nk = 2048, Eu = 4096, Pk = (e) => Math.floor(e + 0.5), wa = (e) => Math.max(2, 2 * Pk(e / 2));
function x0(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Ak(e) {
  const t = Ad(e, { camera: !0 });
  return t === tg ? [] : Array.from({ length: t }, (r, n) => n);
}
function Ck(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = Nk : s = Math.floor(i * 360 / n);
  const a = x0(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((h) => Bl(a, h).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [wa(c), wa(d)];
  if (Math.max(...u) <= Eu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = Eu / Math.max(c, d);
  return { width: wa(c * f), height: wa(d * f), reducedFrom: u, defaulted: o };
}
function M0(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Ik({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === M0(e, t, String(r), n) } : null;
}
function Ek(e) {
  return e ? di(Pn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const jc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Ok(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = x0(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === M0(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: jc[a] };
    d = Ck(e, Ak(e), r, n, o);
  }
  const u = jc[a] ? [jc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${Eu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Fk() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Ok(r(), { ...t, bgWidth: n }));
  };
}
const Cp = 24;
function Tk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ps(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function N0(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function Ou(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ps(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : N0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Dk(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ps(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ps(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : N0(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function ef(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function P0(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ho(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Fe(r.x, -n, t.width + n),
    y: Fe(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function Rk(e) {
  const t = No(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function ki(e, t, r) {
  return hd(ol(
    ol(e.centerDir, sl(e.right, t)),
    sl(e.up, r)
  ));
}
function tf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Rk(e), n = Ho(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    ki(r, -r.tanX, r.tanY),
    ki(r, r.tanX, r.tanY),
    ki(r, r.tanX, -r.tanY),
    ki(r, -r.tanX, -r.tanY)
  ].map((f) => Ho(f, t)), o = Array.from({ length: 4 }, (f, h) => {
    const S = [];
    for (let g = 0; g <= 28; g += 1) {
      const b = g / 28;
      let y, H;
      h === 0 ? (y = -r.tanX + 2 * r.tanX * b, H = r.tanY) : h === 1 ? (y = r.tanX, H = r.tanY - 2 * r.tanY * b) : h === 2 ? (y = r.tanX - 2 * r.tanX * b, H = -r.tanY) : (y = -r.tanX, H = -r.tanY + 2 * r.tanY * b);
      const z = Ho(ki(r, y, H), t);
      z && S.push({ x: z.x, y: z.y });
    }
    return S;
  }), s = Ho(ki(r, 0, r.tanY), t), a = Ho(
    ki(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, s, a];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = a.x - s.x, d = a.y - s.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + c / u * Cp,
      y: s.y + d / u * Cp
    },
    visible: !0
  };
}
function Ip(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: tf(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = Ou(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = Ou(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Lk(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(n.x, n.z) * rn),
    pitch_deg: Math.asin(Fe(n.y, -1, 1)) * rn
  };
}
function Vk(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Fe(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Fe(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function $k(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * rn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let ka = null;
function nf() {
  return ka || (ka = new Promise((e) => {
    const t = document.getElementById("pano-suite-style-link");
    if (t) {
      if (t.dataset.loaded === "true") {
        e();
        return;
      }
      t.addEventListener("load", () => {
        t.dataset.loaded = "true", e();
      }, { once: !0 }), t.addEventListener("error", () => e(), { once: !0 });
      return;
    }
    const r = document.createElement("link");
    r.id = "pano-suite-style-link", r.rel = "stylesheet", r.href = new URL("./pano_editor.css", import.meta.url).toString(), r.addEventListener("load", () => {
      r.dataset.loaded = "true", e();
    }, { once: !0 }), r.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(r);
  }), ka);
}
function zk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function jk(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Hk({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, h, S) {
    if (!u || typeof S != "function" || h.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const b = g.get(f);
    if ((b == null ? void 0 : b.entry) === h) {
      b.callback = S;
      return;
    }
    o(b);
    const y = { owner: u, key: f, entry: h, callback: S };
    g.set(f, y), h.listeners.add(y);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((h) => {
      o(h);
      try {
        h.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, h] of r) {
        if (r.size <= u) break;
        !h.settled || h.listeners.size > 0 || (h.image.onload = null, h.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, h, S = null) {
    const g = String(f || ""), b = String(h || "");
    if (!g || !b) return null;
    let y = r.get(g);
    if (y)
      r.delete(g), r.set(g, y);
    else {
      l(i - 1);
      const z = e || globalThis.Image;
      if (typeof z != "function") return null;
      const ee = new z();
      y = { key: g, image: ee, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, y), ee.onload = () => a(y, !0), ee.onerror = () => a(y, !1), ee.src = b;
    }
    return y.settled || y.image.complete && Number(y.image.naturalWidth || y.image.width || 0) > 0 || s(u, g, y, S), y.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Yo = /* @__PURE__ */ new WeakMap();
function A0(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Yo.get(e);
  n || (n = [], Yo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Yo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Yo.delete(e);
  };
}
function oi(e, ...t) {
  const r = Yo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Ua = Object.freeze({
  // Core's Load3D (three.js OrbitControls) and Sketchfab: the left and the right button orbit, Shift pans.
  default: {
    label: "Default",
    emptyLeft: "orbit",
    bindings: [
      { button: 1, action: "pan" },
      { button: 2, action: "orbit" },
      { button: 2, shift: !0, action: "pan" }
    ]
  },
  // Blender's 3D viewport. A left drag on empty space is Blender's box select, which the editor has as
  // Ctrl + drag.
  blender: {
    label: "Blender-like",
    emptyLeft: null,
    bindings: [
      { button: 1, action: "orbit" },
      { button: 1, shift: !0, action: "pan" }
    ]
  },
  // Unity's Scene view: the right button flies (looks around in place). A left drag on empty space is
  // Unity's rectangle select, which the editor has as Ctrl + drag.
  unity: {
    label: "Unity-like",
    emptyLeft: null,
    bindings: [
      { button: 2, action: "look" },
      { button: 0, alt: !0, action: "orbit" },
      { button: 1, action: "pan" }
    ]
  }
}), C0 = "PanoramaSuite.Editor.ViewControls", Gk = {
  id: C0,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ua).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Kk(e) {
  return Object.hasOwn(Ua, e) ? Ua[e] : Ua.default;
}
function Wk(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Uk(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const xl = "state_json";
function zr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Bk(e) {
  var s, a;
  const t = zr(e, xl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = rg(r, {
    coverage: (s = zr(e, "coverage")) == null ? void 0 : s.value
  }), i = b0(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function rf(e, t) {
  if (!e || Wn(e).coverageSyncInstalled) return;
  const r = zr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, h, S, g;
    const o = n ? n(...i) : void 0, s = Wn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = $r(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = bt(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (g = (S = t == null ? void 0 : t.canvas) == null ? void 0 : S.setDirty) == null || g.call(S, !0, !0), o;
  }, Wn(e).coverageSyncInstalled = !0;
}
function Yk(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Ep(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function qk(e) {
  var d, u, f, h, S, g;
  if (!e) return;
  const t = zr(e, "coverage"), r = zr(e, "bg_color"), n = zr(e, xl), i = zr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Yk(o) && (Ep(s) || s === ""))) return;
  let c = "360";
  if (Ep(s))
    try {
      c = String($n((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (h = n.callback) == null || h.call(n, s), i && (i.value = a, (S = i.callback) == null || S.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ba(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function Fu(e, t, r) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((a) => String((a == null ? void 0 : a.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const a = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(a) || Number(a[0] || 0) <= 0 || Number(a[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function Xk(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Wn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function qo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Wn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = s.catch(() => {
  });
  n.stickerOperationTail = a, n.pendingStickerUploads.set(t, s);
  const l = () => {
    n.pendingStickerUploads.get(t) === s && n.pendingStickerUploads.delete(t);
  };
  return s.then(l, l), a.then(() => {
    n.stickerOperationTail === a && (n.stickerOperationTail = null);
  }), s;
}
async function I0(e, t = {}) {
  var n, i, o;
  await Xk(e, t);
  const r = Array.from(((n = Wn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = As(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function Jk(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await I0(e), r ? r.apply(this, n) : this.value;
  };
}
function Zk(e) {
  var r;
  const t = bt(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function E0(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return iw(this), r;
  };
}
function Qk(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Hc(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: s,
  enableStickersPreview: a,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var g;
    const f = `editor_btn|${r}`, h = bt(u);
    if (h.attached === !0 && h.mountKey === f) return;
    Zk(u), rf(u, t), Ba(u, xl);
    const S = zr(u, xl);
    if (Jk(u, S), S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const b = S.callback;
      S.callback = (y) => {
        var z;
        const H = b ? b(y) : void 0;
        return (z = u.setDirtyCanvas) == null || z.call(u, !0, !1), H;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const b = zr(u, "bg_color");
      !l && b && (b.value == null || String(b.value).trim() === "" || String(b.value).toLowerCase() === "#000000") && (b.value = "#00ff00", (g = b.callback) == null || g.call(b, "#00ff00")), Fu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), h.stickers && Ba(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), h.attached = !0, h.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Fu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), h.cutout && Ba(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), h.attached = !0, h.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const h = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Bk(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && qk(this);
      const S = bt(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && S && oi(this, "attach"), h;
    };
  }
  E0(e);
}
function ex(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return Qk(this), n;
  }, E0(e);
}
function tx(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = $r(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if ($r(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    rf(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Fu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ba(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function nx({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: a = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [Gk, t1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [rp],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [rp.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Hc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Hc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Hc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), al(d) && ex(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      bt(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      rf(l, e), al(c) && tx(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const rx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function lr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : rx.test(String(e.name || "")) : !1;
}
function of(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => lr(r)) : !1;
}
function ix(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (of(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, s = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, a = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => lr(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", a, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", a, !0), r(!1);
  };
}
async function Xo(e, t = {}) {
  var s, a, l, c;
  if (!lr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const h = new r();
      h.onload = () => u(h), h.onerror = () => f(new Error("image load failed")), h.src = o;
    });
    return {
      image: d,
      width: Math.max(1, Number(d.naturalWidth || d.width || 1)),
      height: Math.max(1, Number(d.naturalHeight || d.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function Pi(e, { fetchApi: t } = {}) {
  if (!lr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const r = new FormData();
  r.append("image", e), r.append("type", "input"), r.append("subfolder", "panorama_stickers");
  const n = await t("/upload/image", { method: "POST", body: r });
  if (!n || n.status !== 200)
    throw new Error(`upload failed (${(n == null ? void 0 : n.status) || "no-response"})`);
  const i = await n.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const Op = /* @__PURE__ */ new WeakSet(), Fp = /* @__PURE__ */ new WeakSet();
let Tp = 0;
function Tu(e) {
  if (!e || typeof e != "object" || Fp.has(e)) return e;
  const t = String(e.type || "preview");
  return Tp += 1, e.type = `${t}:pano-${Tp}`, Fp.add(e), e;
}
function Ml(e) {
  if (!e || typeof e != "object" || Op.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Op.add(e), e;
}
function O0(e, t) {
  var n, i;
  if (!t || ((i = (n = Ml(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function ox({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: Gt } = Ca;
U_((e) => Ur(e.id));
B_(mn);
const sf = Hk(), { linkedVideoFile: F0 } = Wg({ app: Gt, api: mn });
function Du() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ca == null ? void 0 : Ca.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const sx = "pano_suite.ui_settings.v1", ax = 120, lx = 2048;
function Dp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(sx)) || "").trim();
    if (!r) return e;
    const n = JSON.parse(r);
    return {
      invert_view_x: !!(n != null && n.invert_view_x),
      invert_view_y: !!(n != null && n.invert_view_y)
    };
  } catch {
    return e;
  }
}
function cx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Go(e) {
  var r, n, i, o, s;
  if (!e) return null;
  const t = (r = e.getBoundingClientRect) == null ? void 0 : r.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((n = e.style) == null ? void 0 : n.height) || ""),
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function ux() {
  if (document.getElementById("pano-node-preview-mode-style")) return;
  const e = document.createElement("style");
  e.id = "pano-node-preview-mode-style", e.textContent = `
    .pano-node-preview-dom {
      outline: none !important;
    }
    .pano-node-preview-dom.pano-node-preview--stickers canvas {
      object-fit: cover;
    }
    .pano-node-preview-dom.pano-node-preview--cutout canvas {
      object-fit: contain;
    }
    .pano-node-preview-dom button:hover {
      background: rgba(46,46,50,0.98) !important;
      border-color: rgba(120,120,130,1) !important;
      color: #fff !important;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);
    }
  `, document.head.appendChild(e);
}
function Ru(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const n = r(t[0], t[1]);
      if (n) return n;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const n = r(t.width, t.height);
      if (n) return n;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const n = r(t.w, t.h);
      if (n) return n;
    }
  }
  return null;
}
function T0(e) {
  const t = Ru(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function dx(e, t, r) {
  T0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function Lu(e) {
  var t, r;
  return (r = (t = bt(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function af(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function D0(e) {
  return al(af(e));
}
function Rp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function R0(e) {
  const t = bt(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = Lu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Gc(e), rM(e, { ...n, mode: i }), this.activeBackend = Lu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || bt(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Gc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Gc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Gc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Vu.unregister(e);
  const r = bt(e);
  r.dom, r.restore;
  const n = r.dom;
  try {
    (i = r.restore) == null || i.call(r);
  } catch {
  }
  if (r.restore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (a = (s = n.root) == null ? void 0 : s.remove) == null || a.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (n == null ? void 0 : n.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = Du();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Ex(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function fx(e, t = "#00ff00") {
  const r = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 360,
    bg_color: t,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null }
  };
  let n = null;
  if (e && typeof e == "object")
    n = e;
  else if (typeof e == "string") {
    const i = e.trim();
    if (!i) return r;
    try {
      n = JSON.parse(i);
    } catch {
      return r;
    }
  } else
    return r;
  try {
    const i = n;
    return !i || typeof i != "object" || Array.isArray(i) ? r : {
      ...r,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : r.active
    };
  } catch {
    return r;
  }
}
function px(e) {
  var r, n;
  const t = (r = Wn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = cr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function wn(e) {
  var d, u;
  const t = Wn(e), r = px(e), n = t.liveStateVersion, i = String(((d = cr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = cr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && t0(e) && Ot(e, "sticker-handoff") ? ur(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? vw(r, { backgroundColor: i, coverage: o, active: cg(e) }, a) : fx(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function cr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function hx(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function L0(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = hx(e == null ? void 0 : e.graph, r)), n;
}
function mx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function V0(e, t = []) {
  const r = mx(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    er.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Lp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Nl(e, t) {
  const r = Lp(e), n = Lp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function gx(e, t) {
  var r;
  return L0(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function yx(e, t = er) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = V0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return Q_(e, s, gx);
}
const Vu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = mn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, h, S;
        if (!o) return;
        const s = Nl(n, o == null ? void 0 : o.id);
        String(bt(o).mode || "") === "cutout" && !s || !s && ![...yx(o)].some((g) => Nl(n, g)) || (s && (cf(o), (c = (l = bt(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Hg(Cn(o).executedOutputs, n, r.output) && (z0(o), (u = (d = bt(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (S = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || S.call(h, !0, !0), String(bt(o).mode || ""), String(bt(o).mode || ""), void 0));
      });
    }, mn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = mn) != null && e.removeEventListener) || (mn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Pl(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(i) : i;
}
function bx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function vx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function Sx(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function _x(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (bx(t)) return [t];
  const { filename: r, subfolder: n } = vx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Pl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return Sx([...i, t]);
}
function wx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Pl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ur(e) {
  const t = Gt == null ? void 0 : Gt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Nl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Nl(s, i)) return t[s];
  }
  return null;
}
function ur(e, t, r = null) {
  const n = r || Ur(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function xn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return xn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Pl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = xn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Pl(e);
}
function Es(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Ya(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? ["canvas", e.width, e.height, Number(e.__panoFrameIdx || 0)].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function lf(e, t) {
  var n;
  const r = String(e || "").trim();
  if (!r) return "";
  try {
    const i = typeof window < "u" && ((n = window == null ? void 0 : window.location) != null && n.href) ? window.location.href : "http://127.0.0.1/", o = new URL(r, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = r.includes("?") ? "&" : "?";
    return t > 0 ? `${r}${i}pano_rev=${t}` : r;
  }
}
function kx(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function xx(e, t) {
  try {
    const r = Cn(e);
    r.ownOutputRev = zk(r.ownOutputRev);
    const n = kx(t);
    let i = "";
    for (const o of n)
      if (i = xn(o), i) break;
    i ? (lf(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function mo(e) {
  var r;
  const t = Cn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Mx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Ot(e, "background"))
    return mo(e), null;
  const i = Ur(n), o = Kd(i, t, xn);
  if (!o)
    return mo(e), null;
  const s = Cn(e), a = lf(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  mo(e);
  const d = ew({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Nx(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = V0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], h = e.graph ? e.getInputLink(u) : null;
    if ((h == null ? void 0 : h.origin_id) == null) continue;
    const S = h.origin_id, g = L0(e, u, S);
    if (!g) continue;
    const b = Number(h.origin_slot ?? 0), y = Ur((g == null ? void 0 : g.id) ?? S), H = Array.isArray(y == null ? void 0 : y.images) ? y.images : [];
    if (H.length) {
      const W = [];
      b >= 0 && b < H.length && W.push(H[b]), W.push(...H);
      for (const D of W.filter((q) => !ja(q))) {
        const q = xn(D);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: `${q}&pano_src=${Pu(y)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let z = [];
    try {
      z = typeof (Gt == null ? void 0 : Gt.getNodeImageUrls) == "function" ? Gt.getNodeImageUrls(g) || [] : [];
    } catch {
      z = [];
    }
    if (Array.isArray(z) && z.length) {
      const W = [];
      b >= 0 && b < z.length && W.push(z[b]), W.push(...z);
      for (const D of W) {
        const q = xn(D);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const ee = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (ee.length) {
      const W = [];
      b >= 0 && b < ee.length && W.push(ee[b]), W.push(...ee);
      for (const D of W) {
        const q = xn(D);
        if (q)
          return String((f == null ? void 0 : f.name) || ""), { src: q, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const E = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (E) {
      let W = xn(E.value);
      if (W && !W.includes("/") && !W.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (W = mn.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`)), W)
        return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Ot(e, "background") ? Ur(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = xn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Px(e, t = [], r = {}) {
  const n = Nx(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = _x(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Cn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const h = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const S = o[f];
    u.pendingResolvedSrc = S, d.src = S;
  };
  return d.onload = () => {
    var S;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, d.onerror = (S) => {
    if (f + 1 < o.length) {
      h();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((S == null ? void 0 : S.type) || "error");
  }, h(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function $0(e, t = [], r = null, n = {}) {
  const i = Px(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function z0(e) {
  e && (sf.disposeOwner(e), Cn(e).linkedImages.clear(), mo(e));
}
function Ax(e) {
  e && (Cn(e).linkedImages.clear(), mo(e));
}
function j0(e, t) {
  const r = bt(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ko(e, t, r = "") {
  var s;
  const n = j0(e, ((s = bt(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < ax ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Vp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Cx(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Kc(e, t) {
  var n, i;
  const r = (i = (n = bt(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Ix(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  if (r) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === r);
    if (i) return i;
  }
  return t[0] || null;
}
function Ex(e, t) {
  return O0(e, t);
}
function Al(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = wx(r);
  if (!o && (n != null && n.external)) {
    if (!Ot(e, "external-sticker")) return null;
    const h = Ur(e == null ? void 0 : e.id), S = ((f = h == null ? void 0 : h.ui) == null ? void 0 : f.pano_sticker_input_images) || (h == null ? void 0 : h.pano_sticker_input_images) || [];
    for (const g of Array.isArray(S) ? S : [S])
      if (o = xn(g), o) break;
  }
  if (!o) return null;
  const s = ur(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Cn(e).ownOutputRev : 0, c = n != null && n.external ? lf(o, l) : o, d = jk(o, a, l);
  return sf.get(e, d, c, (h, S) => {
    var g, b;
    S && (n != null && n.external && Cn(e).outputFromRun && oi(e, "image-loaded"), (b = (g = bt(e).dom) == null ? void 0 : g.requestDraw) == null || b.call(g));
  }) || null;
}
function Ox(e, t, r, n) {
  var o, s, a, l, c, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Tx(e, t, n);
  return i || null;
}
function Fx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Tx(e, t, r) {
  var i, o;
  const n = Fx(t, r || (Gt == null ? void 0 : Gt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function $p(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Dx(e, t, r) {
  const n = tf(t, r);
  n.visible && ef(e, n.boundaryEdges, { selected: !1 });
}
function Rx(e, t, r) {
  const n = tf(t, r);
  n.visible && (e.save(), ef(e, n.boundaryEdges, { selected: !0 }), P0(e, n, { accent: Tk(t) }), e.restore());
}
function $u(e, t, r) {
  return Ag(bl(bt(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function Cl(e) {
  var t;
  return ((t = bt(e).playback) == null ? void 0 : t.playback.frame) ?? ko;
}
function Lx(e) {
  return [Ot(e, "background") ? Kd(Ur(e.id), ["pano_input_videos"], xn) : "", F0(e, er)];
}
function Vx(e) {
  var o;
  if (!Ot(e, "external-sticker")) return null;
  const t = Ur(e.id), r = ur(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(xn), meta: r };
  const i = Kd(t, ["pano_sticker_input_videos"], xn);
  return i ? { src: i, meta: r } : null;
}
function H0(e, t) {
  const r = Ur(e.id), n = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(n) ? n : [];
}
function $x(e, t) {
  var a;
  const r = {}, n = (l) => H0(e, l), i = Ot(e, "scene"), o = i ? n("pano_upstream_layers") : [], s = i ? Xd(n) : null;
  if (s) {
    r.bg = null;
    const { clip: l } = s;
    r.upstreamClip = l && Um(l.clip, l.fps, t.timeline.fps);
    const c = n(s.metaKey)[0];
    c && typeof c == "object" && (r.upstreamMedia = { video: !0, frames: Number(c.frames), duration: Number(c.duration) });
  } else if (Ot(e, "background")) {
    const l = n("pano_input_video_meta")[0];
    l && typeof l == "object" && (r.bg = { video: fs(e, er), frames: Number(l.frames), duration: Number(l.duration) });
  }
  if (Ot(e, "external-sticker") && (r.port = xs(n)), o.length) {
    const l = bt(e);
    if (((a = l.upstreamLength) == null ? void 0 : a.layers) !== o || l.upstreamLength.state !== t) {
      const d = s0(o), u = l0(d, t.upstream, t.timeline.fps), f = (h) => xs((S) => Tn(d[h].ui, S));
      l.upstreamLength = { layers: o, state: t, ends: d0(u, t.upstream, /* @__PURE__ */ new Map(), f, t.timeline.fps) };
    }
    const [c] = n("pano_upstream_frames").length ? n("pano_upstream_frames") : n("pano_timeline_frames");
    r.upstream = { frames: Number(c) > 0 ? Number(c) : 0, ends: l.upstreamLength.ends };
  } else i && (r.sceneItems = n("pano_scene_files").length);
  return r;
}
function zx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function G0(e, t) {
  var n;
  const r = bt(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: An({ ...t, painting: null }) }), r.scene.sceneState;
}
function jx(e, t) {
  const r = ho(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Ot(e, "background")) {
    const o = ur(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (fs(e, er)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === F0(e, er) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = $0(e, er, null, { preserveReadyWhilePending: !1 });
  return Es(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Hx(e, t) {
  var i, o, s;
  const r = String(((i = cr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Ot(e, a));
  return {
    stateText: String(((o = cr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: wn(e).coverage,
    bgColor: String(((s = cr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? jx(e, t) : null,
    run: n && ur(e, "pano_output_size") || null,
    erp: ur(e, "pano_output_erp") || null,
    frame: ur(e, "pano_output_frame") || null
  };
}
const Gx = 38;
function cf(e) {
  const t = Cn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Kx(e, t) {
  const r = Cn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === xn(t.entry) ? r : null;
}
function Wx(e, t) {
  const r = Cn(e), n = bt(e), i = t ? xn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && cf(e), !i) return null;
  let o = r.studioRunImage;
  if (!o) {
    const s = new Image(), a = { src: i, image: s, ready: !1, failed: !1 };
    s.src = i, s.decode().then(() => {
      var l, c;
      r.studioRunImage === a && (a.ready = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }, () => {
      var l, c;
      r.studioRunImage === a && (a.failed = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }), r.studioRunImage = o = a;
  }
  return o.ready ? t.kind === "frame" ? { frame: o.image } : {
    background: {
      media: o.image,
      revision: Ya(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Ek(t.entry.rotation)
    }
  } : null;
}
function Ux(e, t) {
  var r;
  return t ? (r = Kx(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function Bx(e, t, r) {
  var l, c, d;
  const n = G0(e, t), i = (u) => {
    var h;
    if (u.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Al(e, u.id, ml(u.source), { external: u.source.kind === "port" });
      const S = bt(e).playback;
      if (u.source.kind === "port" && S) {
        const g = S.playback.stickerPicture(S.stickerStill, f), b = Nd(S.playback.stickerMedia, f);
        return g ? { media: g, revision: Ya(g), source: b } : null;
      }
    } else {
      const S = u.type === "external_image" || u.source_kind === "external_image", g = String(u.asset_id || "") || (S ? String(u.id || "") : "");
      f = Al(e, g, (h = t.assets) == null ? void 0 : h[u.asset_id], { external: S });
    }
    return Es(f) ? { media: f, revision: Ya(f) } : null;
  }, o = s_(bt(e), t), s = Ot(e, "scene") ? (l = Xd((u) => H0(e, u))) == null ? void 0 : l.color : null;
  return {
    background: ((c = bt(e).playback) == null ? void 0 : c.playback.backgroundShows) === !1 ? Ym(s || String(((d = cr(e, "bg_color")) == null ? void 0 : d.value) || "#000000")) : Es(r) ? { media: r, revision: Ya(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Ig(n, Cl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Yx(e, t, r, n = null) {
  var q, ve, _e, he, ie, ke, me;
  const i = bt(e), o = String(i.mode || "stickers");
  j0(e, o);
  const s = wn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (_e = (ve = (q = i.cutout) == null ? void 0 : q.session) == null ? void 0 : ve.refresh) == null || _e.call(ve)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ke = (ie = (he = i.stickers) == null ? void 0 : he.session) == null ? void 0 : ie.refresh) == null || ke.call(ie));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Ko(e, !1, "");
    const { width: de, height: J } = $p(n.frame), pe = Gx, fe = Math.min(l / de, (c - pe) / J);
    d.drawImage(n.frame, (l - de * fe) / 2, pe + (c - pe - J * fe) / 2, de * fe, J * fe);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, h = (f == null ? void 0 : f.media) || (i.playback ? zx(i.playback) : Mx(e, ["pano_input_videos"], () => {
    var de, J;
    return (J = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : J.call(de);
  })) || $0(
    e,
    er,
    () => {
      var de, J;
      return (J = (de = i.dom) == null ? void 0 : de.requestDraw) == null ? void 0 : J.call(de);
    },
    { preserveReadyWhilePending: !1 }
  ), S = Es(h);
  let g = null;
  const b = () => f ? { background: f, layers: [] } : Bx(e, s, h), y = (de, J) => {
    g || (g = b());
    const pe = r.render({ width: de.w, height: de.h, camera: J, ...g });
    return pe && d.drawImage(pe.canvas, pe.x, pe.y, pe.width, pe.height, de.x, de.y, de.w, de.h), !!pe;
  };
  if (o === "cutout") {
    const de = Ix(s), J = $p(h), pe = de ? Fe(ui(de).aspect, 0.1, 10) : S ? Fe(Number(J.width / J.height), 0.05, 20) : 1, fe = Qd(u, pe);
    i.cutoutFrame = fe;
    let R = "none";
    const X = String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "");
    if (de)
      if (h && !S)
        R = "loading";
      else if (S) {
        const A = Ww({ width: l, height: c }, fe, de);
        [
          !A.fallback || y(A.fallback.rect, ds(A.fallback.shot)),
          y(A.rect, ds(A.shot)),
          !A.fallback || y(fe, ds(de))
        ].every(Boolean) || (R = "loading");
      } else
        R = "empty";
    else {
      const A = i.lastCutoutShot;
      A ? (i.view = y0(A, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), S ? y(u, bl(i.view, l, c)) || (R = "loading") : h ? R = "loading" : R = "empty";
    }
    S || r.release(), r.failed && R === "loading" && (R = "none"), de && (i.lastCutoutShot = { ...de }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), R === "loading" ? (Kc(e, !1), Ko(e, !0, X)) : R === "empty" ? (Kc(e, !0), Ko(e, !1, "")) : (Kc(e, !1), Ko(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let H = !1;
  (!h || S) && (g = b(), !g.background && !g.layers.length ? (r.release(), H = !0) : H = y(u, bl(i.view, l, c)));
  const z = !H && !r.failed;
  Ko(e, z, z ? String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "") : ""), z && Cx(d, u, Vp(t, u));
  const ee = $u(e, l, c);
  !h && H && qx(d, ee, Vp(t, u));
  const E = String(((me = s == null ? void 0 : s.active) == null ? void 0 : me.selected_sticker_id) || ""), W = Cu(s, Cl(e)), D = H && e.__panoStudio !== !0 ? W.find((de) => String((de == null ? void 0 : de.id) || "") === E && (de == null ? void 0 : de.visible) !== !1) : null;
  H && !f && W.filter((de) => de !== D && (de == null ? void 0 : de.visible) !== !1 && (de.external || de.source_kind === "external_image")).filter((de) => !Es(Al(e, de.id, null, { external: !0 }))).forEach((de) => Dx(d, de, ee)), D && Rx(d, D, ee);
}
function zp(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const a = r.project(s);
    if (a.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), o = !0);
  }
  e.stroke();
}
function qx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Rn(c, a));
    zp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Rn(a, c));
    zp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Rn(0, 0) },
    { name: "Right", dir: Rn(90, 0) },
    { name: "Back", dir: Rn(180, 0) },
    { name: "Left", dir: Rn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function zu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Xx(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Yn(e, t) {
  return Xx(e, t) ? !1 : (zu(e), !0);
}
function jp() {
  var r;
  const e = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Jx(e) {
  var r;
  if (!e) return;
  const t = (r = Gt == null ? void 0 : Gt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function Zx(e, t = 360, r = 260) {
  const n = bt(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !T0(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function Qx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = bt(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function Hp(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = bt(e);
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      s.userResized = !0, t == null || t(), i && eM(e, 180, t);
    }
  };
}
function eM(e, t = 180, r = null) {
  if (!e) return;
  const n = bt(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Jo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const tM = /* @__PURE__ */ new WeakMap();
function K0(e, t) {
  return Hg(tM, e, t) ? !1 : (xx(e, t), z0(e), Jo(e), !0);
}
async function nM(e) {
  var r, n;
  const t = await J_(e, Gt, mn);
  t && (K0(e, t), (n = (r = bt(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function rM(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = bt(e), i = Cn(e), o = Wn(e), s = D0(e);
  if (s && !r) {
    af(e);
    return;
  }
  s && Zx(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: Rp(e)
  }.signature || Rp(e), Lu(e), e == null || e.id, n.mode, e.addDOMWidget, Ru(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, h = f ? 0 : 56, S = f ? 0 : jw, g = document.createElement("div");
  if (ux(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    S > 0 ? `min-height:${S}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const ae = Ml(Tu(
      e.addDOMWidget(Du(), "preview", g, Hp(e, null))
    ));
    Jo(e), n.dom = { widget: ae, root: g, requestDraw: () => {
    } };
    return;
  }
  const b = document.createElement("div");
  b.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const y = on({ label: "node.surface" });
  y.style.cssText = [
    "position:absolute",
    "inset:0",
    "width:100%",
    "height:100%",
    "object-position:center",
    "display:block",
    "touch-action:none",
    "cursor:grab",
    "user-select:none",
    "-webkit-user-select:none"
  ].join(";");
  const H = document.createElement("div");
  H.style.cssText = [
    "position:absolute",
    "inset:0",
    "display:none",
    "align-items:center",
    "justify-content:center",
    "pointer-events:none",
    "color:rgba(161,161,170,0.95)",
    "font:600 15px 'Plus Jakarta Sans', Geist, sans-serif",
    "text-align:center",
    "padding:0 10px",
    "z-index:2"
  ].join(";"), H.textContent = "Connect ERP image", b.appendChild(y), b.appendChild(H), g.appendChild(b);
  const z = ym(g), ee = document.createElement("div");
  ee && (ee.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", ee.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(ee)), dx(e, 120, 120), Jo(e);
  let E = null;
  try {
    Qx(e, h, () => {
      var ae, Ie;
      return (Ie = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Ie.call(ae);
    }), E = Ml(Tu(e.addDOMWidget(
      Du(),
      "preview",
      g,
      Hp(
        e,
        () => {
          var ae, Ie;
          return (Ie = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Ie.call(ae);
        },
        h,
        S,
        !1
      )
    )));
  } catch {
    return;
  }
  const W = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, D = Fk(), q = () => {
    W.destroyed || (W.needsDraw = !0, !W.inTick && !W.raf && (W.raf = requestAnimationFrame(p)));
  }, ve = Tg(q), _e = /* @__PURE__ */ Mo(a ? {
    ...r0(wn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...m0(wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ae) => ({ value: ae, label: ae }))
  });
  let he = null;
  if (a && e.__panoSceneStateV2) {
    const [ae, Ie] = [0, 1].map(() => {
      const Ke = Vs(document, "node.playback");
      return Ke.playsInline = !0, Ke.preload = "auto", Ke.crossOrigin = "anonymous", Ke.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", b.appendChild(Ke), Ke;
    }), Ae = on({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Oe = on({ label: "node.port-still" });
    Oe.__panoFrameIdx = 0;
    const Ge = Mw({
      video: ae,
      stickerVideo: Ie,
      createImage: (Ke, Ue) => {
        const vt = new Image();
        return vt.onload = Ue, vt.onerror = Ue, vt.src = Ke, vt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ke) => requestAnimationFrame(Ke),
        cancelFrame: (Ke) => cancelAnimationFrame(Ke)
      },
      readState: () => wn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: q,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ue;
        if (!(ae.videoWidth > 0 && ae.videoHeight > 0)) return;
        const Ke = Math.min(1, lx / ae.videoWidth);
        Ae.width = Math.round(ae.videoWidth * Ke), Ae.height = Math.round(ae.videoHeight * Ke), (Ue = Ae.getContext("2d")) == null || Ue.drawImage(ae, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, q();
      },
      onStickerCapture: () => {
        var Ke;
        Ie.videoWidth > 0 && Ie.videoHeight > 0 && (Oe.width = Ie.videoWidth, Oe.height = Ie.videoHeight, (Ke = Oe.getContext("2d")) == null || Ke.drawImage(Ie, 0, 0), Oe.__panoFrameIdx += 1, q());
      },
      onChange: () => {
        _e.playing = Ge.playing, q();
      }
    });
    he = { playback: Ge, video: ae, still: Ae, stickerVideo: Ie, stickerStill: Oe, stickerSource: "" }, n.playback = he;
  }
  const ie = () => {
    var gt;
    const { playback: ae, still: Ie, stickerStill: Ae } = he, Oe = Wa(b, !!((gt = e.flags) != null && gt.collapsed), Vc(e)), Ge = ae.source, Ke = Oe ? Vx(e) : null, Ue = wn(e), vt = ae.follow({
      shown: Oe,
      sources: Oe ? Lx(e) : [],
      state: Ue,
      sticker: Ke,
      media: Oe ? $x(e, Ue) : {}
    });
    ((Ke == null ? void 0 : Ke.src) || "") !== he.stickerSource && (he.stickerSource = (Ke == null ? void 0 : Ke.src) || "", Ai(Ae)), ae.source !== Ge && (Ai(Ie), Ie.__panoFrameIdx = 0), _e.playable = vt, _e.playing = ae.playing;
  }, ke = () => {
    var Ie, Ae;
    const ae = ((Ie = i.ownOutputVideo) == null ? void 0 : Ie.player) ?? null;
    ae && !Wa(b, !!((Ae = e.flags) != null && Ae.collapsed)) && ae.pause(), a && (_e.playable = !!ae && !ae.failed(), _e.playing = !!(ae != null && ae.playing));
  }, me = () => {
    var ae;
    he == null || he.playback.pause(), (ae = i.ownOutputVideo) == null || ae.player.pause();
  };
  let de = null;
  const J = (a ? kw : Bw)({
    readState: () => wn(e),
    publishLiveState: (ae) => {
      ae ? (de = ae, o.liveState = ae) : (o.liveState === de && (o.liveState = null), de = null), o.liveStateVersion += 1, o.parsedState = null, q();
    },
    commitState: (ae) => {
      var Oe, Ge, Ke, Ue;
      const Ie = cr(e, "state_json");
      if (!Ie) return;
      ug(e, ae.active);
      const Ae = dg(e, ae, String(Ie.value ?? ""));
      Ae !== null && (Ie.value = Ae, (Oe = Ie.callback) == null || Oe.call(Ie, Ae), o.parsedState = null, (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), (Ue = (Ke = e.graph) == null ? void 0 : Ke.setDirtyCanvas) == null || Ue.call(Ke, !0, !0));
    },
    onChange: (ae) => Object.assign(_e, ae)
  }), fe = a ? A0(e, (ae = "sync", Ie = null) => {
    var cn;
    if (!a || !e.graph || !J || J.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Bt = Ot(e, "external-sticker");
      return J.apply({
        type: "sync-port",
        value: e0(e, {
          pose: Bt ? ur(e, "pano_sticker_input_pose", Ie) : null,
          handoff: Ot(e, "sticker-handoff") ? ur(e, "pano_sticker_handoff", Ie) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Bt) => String((Bt == null ? void 0 : Bt.name) || "") === "sticker_image") : -1, Oe = Ae >= 0 ? ((cn = e.getInputLink(Ae)) == null ? void 0 : cn.id) ?? null : null;
    if (Oe == null)
      return J.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Ot(e, "external-sticker")) return !1;
    const Ge = ur(e, "pano_sticker_input_pose", Ie), Ke = Array.isArray(Ge) ? Ge[0] : Ge, Ue = String(ur(e, "pano_sticker_input_state_hash", Ie) ?? ""), vt = n.view || { yaw: 0, pitch: 0 }, gt = wn(e), Tt = (Array.isArray(gt == null ? void 0 : gt.stickers) ? gt.stickers : []).find((Bt) => String((Bt == null ? void 0 : Bt.id) || "") === "sticker_image_1"), pt = Al(e, "sticker_image_1", null, { external: !0 }), en = Ke && typeof Ke == "object" ? Ke : Tt || { yaw_deg: vt.yaw, pitch_deg: vt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return J.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ue,
        pose: en,
        imageWidth: Number((pt == null ? void 0 : pt.naturalWidth) || (pt == null ? void 0 : pt.width) || 0),
        imageHeight: Number((pt == null ? void 0 : pt.naturalHeight) || (pt == null ? void 0 : pt.height) || 0)
      }
    });
  }) : () => {
  };
  let R = 0;
  const X = async (ae) => {
    if (!a || !J || !lr(ae)) return !1;
    me();
    const Ie = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...n.view || { yaw: 0, pitch: 0 } };
    R += 1, _e.importing = !0;
    const Ge = qo(e, `add:${Ie}`, async () => {
      const Ke = await Xo(ae), Ue = await Pi(ae, {
        fetchApi: (vt, gt) => mn.fetchApi(vt, gt)
      });
      return k(), J.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Ie,
          asset: Ue,
          imageWidth: Ke.width,
          imageHeight: Ke.height,
          yaw_deg: Number(Oe.yaw || 0),
          pitch_deg: Number(Oe.pitch || 0)
        }
      });
    });
    try {
      return await Ge;
    } catch {
      return !1;
    } finally {
      R = Math.max(0, R - 1), _e.importing = R > 0, q();
    }
  };
  let A = null, ge = null, P = null, O = !1;
  const _ = () => {
    var ae;
    return P && (clearTimeout(P), P = null), O ? (O = !1, ((ae = J == null ? void 0 : J.commitGesture) == null ? void 0 : ae.call(J)) ?? !1) : !1;
  }, k = () => {
    var Oe, Ge, Ke;
    const ae = _(), Ie = (A == null ? void 0 : A.pointerId) ?? (ge == null ? void 0 : ge.pointerId);
    if (A = null, ge = null, Ie != null) {
      try {
        (Oe = y.hasPointerCapture) != null && Oe.call(y, Ie) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ke = J == null ? void 0 : J.commitGesture) == null ? void 0 : Ke.call(J)) ?? !1;
    return ae || Ae;
  }, se = () => {
    var Oe, Ge, Ke;
    const ae = _(), Ie = A == null ? void 0 : A.pointerId;
    if (A = null, Ie != null) {
      try {
        (Oe = y.hasPointerCapture) != null && Oe.call(y, Ie) && ((Ge = y.releasePointerCapture) == null || Ge.call(y, Ie));
      } catch {
      }
      y.style.cursor = "grab";
    }
    const Ae = ((Ke = J == null ? void 0 : J.cancelGesture) == null ? void 0 : Ke.call(J)) ?? !1;
    return ae || Ae;
  }, Z = () => k();
  J && o.flushers.add(Z);
  let I = null, v = !1;
  if (ee && J)
    try {
      nf(), I = dd(l ? Mk : a ? vk : dk, {
        model: _e,
        onAction: (ae) => {
          var Oe, Ge, Ke;
          if ((ae == null ? void 0 : ae.type) === "toggle-playback") {
            k(), he ? he.playback.toggle() : (Oe = i.ownOutputVideo) == null || Oe.player.toggle(), q();
            return;
          }
          if (me(), (ae == null ? void 0 : ae.type) === "open-editor") {
            k(), a || (_e.aspectOpen = !1), (Ge = n.openEditor) == null || Ge.call(n);
            return;
          }
          if (a) {
            if ((ae == null ? void 0 : ae.type) === "add-image-file") {
              X(ae.file);
              return;
            }
            J.apply(ae) && q();
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "toggle-aspect") {
            _e.aspectOpen = !_e.aspectOpen;
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "close-aspect") {
            _e.aspectOpen = !1;
            return;
          }
          let Ie = ae;
          if ((ae == null ? void 0 : ae.type) === "add-frame") {
            const Ue = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Ie = {
              ...ae,
              ...Gw(Ue, {
                width: y.width,
                height: y.height
              })
            };
          } else if ((ae == null ? void 0 : ae.type) === "delete-frame") {
            const Ue = Di(wn(e));
            Ue && (n.view = y0(Ue, {
              width: y.width,
              height: y.height
            }));
          }
          const Ae = ((Ke = n.cutoutFrame) == null ? void 0 : Ke.safeRect) || null;
          _e.aspectOpen = !1, J.apply({ ...Ie, safeRect: Ae }) && q();
        }
      }), I.mount(ee), v = !0;
    } catch {
      I = null, v = !1;
    }
  const V = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    he && ie(), q();
  }) : null;
  V == null || V.observe(b);
  const p = (ae) => {
    var Ae, Oe, Ge;
    W.raf = 0, W.inTick = !0;
    let Ie = !1;
    try {
      if (Ie = m.stepInertia(ae), W.needsDraw || Ie) {
        W.needsDraw = !1, he ? ie() : ke();
        const Ke = l ? Hx(e, he) : null, Ue = Ke ? Ik(Ke) : null, vt = () => G0(e, wn(e)), gt = Ke && Wa(b, !!((Ae = e.flags) != null && Ae.collapsed), Vc(e)) ? Wx(e, Ue) : null;
        if (!((Oe = e.flags) != null && Oe.collapsed) && !Vc(e) ? Yx(e, y, ve, gt) : ve.release(), _e.viewUnavailable = ve.failed, l) {
          const Tt = D({ ...Ke, display: Ux(e, Ue) }, vt);
          Tt && (_e.status = Tt);
        }
      }
    } finally {
      W.inTick = !1;
    }
    (Ie || W.needsDraw) && !W.raf && (W.raf = requestAnimationFrame(p)), cx() && (!n.debugLastTs || ae - n.debugLastTs > 1200) && (n.debugLastTs = ae, n.mode, Ru(e), Go(g), Go(b), Go(y), Go(g.parentElement), Go((Ge = g.parentElement) == null ? void 0 : Ge.parentElement), Number(y.width || 0), Number(y.height || 0), void 0);
  }, m = pd({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (ae) => {
      n.view = ae;
    },
    getViewportSize: () => {
      const ae = y.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ae.width || y.clientWidth || 0)),
        h: Math.max(1, Number(ae.height || y.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ae = Dp();
      return {
        x: ae.invert_view_x ? -1 : 1,
        y: ae.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      q();
    }
  }), w = a ? b : g, C = (ae) => {
    const Ie = y.getBoundingClientRect();
    return {
      x: (Number(ae.clientX) - Ie.left) * (y.width / Math.max(1, Ie.width)),
      y: (Number(ae.clientY) - Ie.top) * (y.height / Math.max(1, Ie.height))
    };
  }, T = (ae) => {
    var Oe, Ge;
    if (!a || l || !d) return;
    const Ie = wn(e), Ae = Ip(
      Cu(Ie, Cl(e)),
      String(((Oe = Ie == null ? void 0 : Ie.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      C(ae),
      $u(e, y.width, y.height)
    );
    if (!Ae) {
      y.style.cursor = "grab";
      return;
    }
    if (((Ge = Ae.item) == null ? void 0 : Ge.locked) === !0) {
      y.style.cursor = "default";
      return;
    }
    y.style.cursor = Ae.hit.cursor || "default";
  };
  y.addEventListener("pointerdown", (ae) => {
    var vt, gt, Tt, pt, en, qe, cn, Bt, gi, Yr, yi;
    if (!Yn(ae, w) || ae.button !== 0) return;
    if (!a) {
      const an = Di(wn(e)), vn = n.cutoutFrame;
      if (!an) {
        (vt = g.focus) == null || vt.call(g, { preventScroll: !0 }), (gt = y.setPointerCapture) == null || gt.call(y, ae.pointerId), y.style.cursor = "grabbing", m.startDrag(ae.clientX, ae.clientY, ae.pointerId);
        return;
      }
      if (an.locked === !0 || !vn || !J) return;
      const qr = C(ae);
      let mr;
      if (ae.shiftKey) {
        const rr = v0({
          frame: vn,
          point: qr,
          startRollDeg: Number(an.roll_deg ?? an.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!rr) return;
        mr = { kind: "roll", pointerId: ae.pointerId, rollGesture: rr };
      } else {
        const rr = ((Tt = wn(e)) == null ? void 0 : Tt.ui_settings) || Dp();
        mr = {
          kind: "pan",
          pointerId: ae.pointerId,
          startPoint: qr,
          startShot: { ...an },
          focalPx: Vi(vn, an),
          invertX: rr.invert_view_x === !0,
          invertY: rr.invert_view_y === !0
        };
      }
      k(), (pt = g.focus) == null || pt.call(g, { preventScroll: !0 }), (en = y.setPointerCapture) == null || en.call(y, ae.pointerId), y.style.cursor = "grabbing", J.beginGesture(), A = mr;
      return;
    }
    if (!d) return;
    const Ie = C(ae), Ae = wn(e), Oe = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ge = $u(e, y.width, y.height);
    (cn = g.focus) == null || cn.call(g, { preventScroll: !0 });
    const Ke = () => Ip(Cu(Ae, Cl(e)), Oe, Ie, Ge);
    let Ue = l ? null : Ke();
    if (Ue && (he != null && he.playback.playing) && (me(), Ue = Ke()), Ue && J) {
      if (m.stopMotion(), k(), String(((Bt = Ue.item) == null ? void 0 : Bt.id) || "") !== Oe && J.apply({ type: "select-sticker", id: Ue.item.id }), ((gi = Ue.item) == null ? void 0 : gi.locked) === !0) {
        q();
        return;
      }
      const an = Ie, vn = Ue.geometry.center;
      ge = {
        active: !0,
        kind: Ue.hit.kind,
        pointerId: ae.pointerId,
        startPoint: an,
        startCenter: { ...vn },
        startSticker: { ...Ue.item },
        startDistance: Math.max(1, Math.hypot(an.x - vn.x, an.y - vn.y)),
        startAngle: Math.atan2(an.y - vn.y, an.x - vn.x),
        projection: Ge
      }, J.beginGesture(), (Yr = y.setPointerCapture) == null || Yr.call(y, ae.pointerId), y.style.cursor = Ue.hit.kind === "rotate" ? "grabbing" : Ue.hit.kind === "move" ? "move" : Ue.hit.cursor, q();
      return;
    }
    (yi = y.setPointerCapture) == null || yi.call(y, ae.pointerId), y.style.cursor = "grabbing", m.startDrag(ae.clientX, ae.clientY, ae.pointerId);
  }), y.addEventListener("pointermove", (ae) => {
    if (!a) {
      if (!A) {
        if (!m.state.drag.active) return;
        Yn(ae, w), m.moveDrag(ae.clientX, ae.clientY, "pano");
        return;
      }
      if (A.pointerId !== ae.pointerId || !J) return;
      if (Yn(ae, w), A.kind === "pan") {
        const Ae = C(ae);
        J.updateGesture({
          type: "pan-camera",
          startShot: A.startShot,
          dx: Ae.x - A.startPoint.x,
          dy: Ae.y - A.startPoint.y,
          focalPx: A.focalPx,
          invertX: A.invertX,
          invertY: A.invertY
        });
        return;
      }
      const Ie = S0(A.rollGesture, C(ae), ae);
      if (!Ie) return;
      A.rollGesture = Ie.gesture, J.updateGesture({ type: "set-roll", value: Ie.rollDeg });
      return;
    }
    if (!ge && !m.state.drag.active) {
      T(ae);
      return;
    }
    if (ge) {
      if (ge.pointerId !== ae.pointerId || !J) return;
      Yn(ae, w);
      const Ie = C(ae);
      let Ae = ge.startSticker;
      if (ge.kind === "move")
        Ae = Lk(
          ge.startSticker,
          {
            x: ge.startCenter.x + Ie.x - ge.startPoint.x,
            y: ge.startCenter.y + Ie.y - ge.startPoint.y
          },
          ge.projection
        );
      else if (ge.kind === "scale") {
        const Oe = Math.hypot(Ie.x - ge.startCenter.x, Ie.y - ge.startCenter.y);
        Ae = Vk(ge.startSticker, ge.startDistance, Oe);
      } else if (ge.kind === "rotate") {
        const Oe = Math.atan2(Ie.y - ge.startCenter.y, Ie.x - ge.startCenter.x);
        Ae = $k(ge.startSticker, ge.startAngle, Oe, ae.shiftKey === !0);
      }
      J.updateGesture({ type: "set-transform", value: Ae }), q();
      return;
    }
    !d || !m.state.drag.active || (Yn(ae, w), m.moveDrag(ae.clientX, ae.clientY, "pano"));
  });
  const U = () => {
    var Ie, Ae;
    if (!A && !ge) {
      if (!m.state.drag.active) return;
      m.endDrag(), y.style.cursor = "grab", q();
      return;
    }
    if (!J) return;
    const ae = (A == null ? void 0 : A.pointerId) ?? (ge == null ? void 0 : ge.pointerId);
    A = null, ge = null;
    try {
      (Ie = y.hasPointerCapture) != null && Ie.call(y, ae) && ((Ae = y.releasePointerCapture) == null || Ae.call(y, ae));
    } catch {
    }
    J.cancelGesture(), y.style.cursor = "grab", q();
  }, le = (ae, Ie = !1) => {
    var Ae, Oe, Ge, Ke;
    if (!a) {
      if (!A) {
        if (!m.state.drag.active) return;
        Yn(ae, w), (Ae = y.releasePointerCapture) == null || Ae.call(y, ae.pointerId), y.style.cursor = "grab", m.endDrag(), q();
        return;
      }
      if (A.pointerId !== ae.pointerId || !J) return;
      Yn(ae, w), A = null, (Oe = y.releasePointerCapture) == null || Oe.call(y, ae.pointerId), y.style.cursor = "grab", Ie ? J.cancelGesture() : J.commitGesture(), T(ae), q();
      return;
    }
    if (ge) {
      if (ge.pointerId !== ae.pointerId || !J) return;
      Yn(ae, w), ge = null, (Ge = y.releasePointerCapture) == null || Ge.call(y, ae.pointerId), y.style.cursor = "grab", Ie ? J.cancelGesture() : J.commitGesture(), q();
      return;
    }
    !d || !m.state.drag.active || (Yn(ae, w), (Ke = y.releasePointerCapture) == null || Ke.call(y, ae.pointerId), y.style.cursor = "grab", m.endDrag(), q());
  };
  y.addEventListener("pointerup", le), y.addEventListener("pointercancel", (ae) => le(ae, !0)), y.addEventListener("lostpointercapture", U), y.addEventListener("pointerleave", (ae) => {
    !a && A || ge || m.state.drag.active && le(ae);
  });
  const G = (ae) => {
    const Ie = document.activeElement;
    if (Ie !== g && !g.contains(Ie)) return;
    if (ae.key === "Escape" && (A || ge) && J) {
      U(), zu(ae);
      return;
    }
    if (!a || l || ae.key !== "Delete" && ae.key !== "Backspace" || !J) return;
    const Ae = ae.target, Oe = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || Ae != null && Ae.isContentEditable || _e.canDelete === !0 && (me(), k(), J.apply({ type: "delete-selected" }) && q(), zu(ae));
  };
  window.addEventListener("keydown", G, !0);
  const oe = ox({
    requestFrame: (ae) => requestAnimationFrame(ae),
    cancelFrame: (ae) => cancelAnimationFrame(ae),
    restore: (ae) => Jx(ae)
  }), N = (ae) => {
    var Ae, Oe, Ge, Ke, Ue, vt;
    if (!Yn(ae, w)) return;
    if (!a) {
      const gt = Di(wn(e));
      if (gt && gt.locked !== !0 && J) {
        const Tt = il(ae);
        Tt !== 0 && (O || (k(), J.beginGesture(), O = !0), J.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (P && clearTimeout(P), P = setTimeout(_, 180), q()) : J.hasGestureChanges() || (J.cancelGesture(), O = !1));
      } else if (!gt) {
        const Tt = jp();
        m.applyWheelEvent(ae) && q(), oe.schedule(Tt);
      }
      (Ae = ae.preventDefault) == null || Ae.call(ae), (Oe = ae.stopPropagation) == null || Oe.call(ae), (Ge = ae.stopImmediatePropagation) == null || Ge.call(ae);
      return;
    }
    if (!d) return;
    const Ie = jp();
    m.applyWheelEvent(ae) && q(), (Ke = ae.preventDefault) == null || Ke.call(ae), (Ue = ae.stopPropagation) == null || Ue.call(ae), (vt = ae.stopImmediatePropagation) == null || vt.call(ae), oe.schedule(Ie);
  }, L = a ? [b, y] : [b];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ae) => {
    L.forEach((Ie) => Ie.addEventListener(ae, N, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ae) => {
    y.addEventListener(ae, (Ie) => Yn(Ie, w)), b.addEventListener(ae, (Ie) => Yn(Ie, w));
  });
  const te = cr(e, "state_json");
  let we = null, Se = null;
  te && !te.__panoPreviewPatchedCb && (we = te.callback, Se = (ae) => {
    const Ie = we ? we(ae) : void 0;
    return q(), Ie;
  }, te.callback = Se, te.__panoPreviewPatchedCb = Se);
  const xe = cr(e, "bg_color");
  let Y = null, ye = null;
  xe && !xe.__panoPreviewPatchedCb && (Y = xe.callback, ye = (ae) => {
    const Ie = Y ? Y(ae) : void 0;
    return q(), Ie;
  }, xe.callback = ye, xe.__panoPreviewPatchedCb = ye);
  const F = l ? cr(e, "output_size") : null, ne = F == null ? void 0 : F.callback, $ = F ? (ae) => {
    const Ie = ne ? ne(ae) : void 0;
    return q(), Ie;
  } : null;
  F && (F.callback = $);
  const Q = e.onRemoved, K = e.onResize, B = e.onExecuted, j = e.onDragOver, x = e.onDragDrop;
  let re = null;
  const ce = () => {
    a && (_e.dropActive = !0, re && clearTimeout(re), re = setTimeout(() => {
      re = null, _e.dropActive = !1;
    }, 140));
  }, be = c ? function(ae) {
    return (j ? j.apply(this, arguments) : !1) === !0 ? !0 : of(ae == null ? void 0 : ae.dataTransfer) ? (ce(), !0) : !1;
  } : null, M = c ? function(ae) {
    var Oe;
    if ((x ? x.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Oe = ae == null ? void 0 : ae.dataTransfer) == null ? void 0 : Oe.files) || []).find((Ge) => lr(Ge));
    return Ae ? (re && clearTimeout(re), re = null, _e.dropActive = !1, X(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = be, e.onDragDrop = M);
  const ue = c ? ix(g, {
    onActive: (ae) => {
      if (ae) {
        ce();
        return;
      }
      re && clearTimeout(re), re = null, _e.dropActive = !1;
    },
    onDrop: (ae) => {
      X(ae);
    }
  }) : () => {
  }, Pe = function(ae) {
    i.outputFromRun = !0;
    const Ie = K0(e, ae);
    oi(e, Ie ? "executed" : "sync", ae), q();
    const Ae = B ? B.apply(this, arguments) : void 0;
    return Jo(e), Ae;
  };
  e.onExecuted = Pe;
  const Ee = e.onConnectionsChange, Le = function(ae, Ie) {
    const Ae = vp(e, ae, Ie, [...Hd, ...Gd]), Oe = vp(e, ae, Ie, er), Ge = arguments, Ke = Ee ? Ee.apply(this, Ge) : void 0, Ue = () => {
      W.destroyed || (Oe && Ax(e), Ae && oi(e, "connection-change"), Jo(e), q());
    };
    return Ue(), queueMicrotask(Ue), Ke;
  };
  e.onConnectionsChange = Le;
  const $e = function() {
    const ae = K ? K.apply(this, arguments) : void 0;
    return bt(this).userResized = !0, q(), ae;
  };
  e.onResize = $e;
  const ze = function() {
    return Ce(), Vu.unregister(this), Q ? Q.apply(this, arguments) : void 0;
  };
  e.onRemoved = ze;
  const Ce = () => {
    var ae, Ie, Ae, Oe, Ge, Ke, Ue;
    W.destroyed = !0, (ae = V == null ? void 0 : V.disconnect) == null || ae.call(V), a ? k() : se(), y.removeEventListener("lostpointercapture", U), ue(), z(), window.removeEventListener("keydown", G, !0), o.flushers.delete(Z), (Ie = J == null ? void 0 : J.destroy) == null || Ie.call(J), (Ae = I == null ? void 0 : I.unmount) == null || Ae.call(I), he && (he.playback.dispose(), he.video.remove(), he.stickerVideo.remove(), Ai(he.still), Ai(he.stickerStill), n.playback === he && (n.playback = null)), ve.dispose(), n.scene = null, (Ge = (Oe = n.rasterCache) == null ? void 0 : Oe.dispose) == null || Ge.call(Oe), n.rasterCache = null, n.rasterReady = null, n.paintEngine = null, n.paintState = null, n.paintRevision = null, fe(), oe.dispose(), re && clearTimeout(re), re = null, sf.disposeOwner(e), mo(e), cf(e), W.raf && cancelAnimationFrame(W.raf), W.raf = 0, ((Ke = n.cutout) == null ? void 0 : Ke.session) === J && (n.cutout = null), ((Ue = n.stickers) == null ? void 0 : Ue.session) === J && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === $e && (e.onResize = K), e.onExecuted === Pe && (e.onExecuted = B), e.onConnectionsChange === Le && (e.onConnectionsChange = Ee), Se && (te == null ? void 0 : te.callback) === Se && (te.callback = we), Se && (te == null ? void 0 : te.__panoPreviewPatchedCb) === Se && delete te.__panoPreviewPatchedCb, ye && (xe == null ? void 0 : xe.callback) === ye && (xe.callback = Y), ye && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === ye && delete xe.__panoPreviewPatchedCb, $ && F.callback === $ && (F.callback = ne), e.onDragOver === be && (e.onDragOver = j), e.onDragDrop === M && (e.onDragDrop = x), e.onRemoved === ze && (e.onRemoved = Q);
  };
  n.restore = Ce, n.cutout = J && v && !a ? { session: J, model: _e } : null, n.stickers = J && v && a ? { session: J, model: _e } : null, n.dom = {
    widget: E,
    root: g,
    canvas: y,
    requestDraw: q,
    state: W,
    emptyHintEl: H,
    nodeSurface: n.cutout
  }, Vu.register(e), e.graph && oi(e, "attach"), q();
}
function Gp(e, t = {}) {
  R0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Kp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (D0(e) && !r) {
    af(e);
    return;
  }
  R0(e).attach(t);
}
function iM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function oM(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let h = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (h = Math.min(h, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * h)),
    height: Math.max(1, Math.round(c * h))
  };
}
function sM({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var h;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const S = l();
    return S === a || (a = S, i(S)), S;
  }, d = () => c();
  return (h = t == null ? void 0 : t.addEventListener) == null || h.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var S;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
      } catch {
      }
      return s ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return s || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var S, g, b;
    if (!s) {
      if (s = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", d), l())
        try {
          const y = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (b = y == null ? void 0 : y.catch) == null || b.call(y, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const aM = { class: "pano-preview-node-surface" }, lM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Re(), Ve("div", aM, [
      Be(nn, {
        icon: e.model.fullscreen ? rt(We).fullscreen_close : rt(We).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: n[0] || (n[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (Re(), Vn(nc, { key: 0 })) : lt("", !0)
    ]));
  }
}, xa = 140, cM = 180, Wp = 40, Wc = 10;
function Up(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function Bp(e, t) {
  const r = Up(e), n = Up(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Yp(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = mn) == null ? void 0 : o.apiURL) == "function" ? mn.apiURL(i) : i;
}
function go(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return go(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Yp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = go(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Yp(e);
}
function W0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function uM(e) {
  return e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|");
}
function ju(e) {
  var i;
  const t = (i = dr) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Bp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (Bp(o, r)) return t[o];
  return null;
}
function dM(e) {
  var n, i;
  const t = ju(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = go(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function fM(e, t = "erp_image") {
  var h, S, g, b, y, H, z;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((ee) => String((ee == null ? void 0 : ee.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((ee, E) => String((ee == null ? void 0 : ee.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(E))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (S = (h = dr) == null ? void 0 : h.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : g.call(S, o), a = ju(o), l = ju(e == null ? void 0 : e.id), c = [
    (b = l == null ? void 0 : l.ui) == null ? void 0 : b.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (y = a == null ? void 0 : a.ui) == null ? void 0 : y.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const ee of c)
    if (Array.isArray(ee))
      for (const E of ee) {
        const W = go(E);
        if (W) return W;
      }
  let d = [];
  try {
    d = typeof ((H = dr) == null ? void 0 : H.getNodeImageUrls) == "function" ? dr.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const ee of d) {
      const E = go(ee);
      if (E) return E;
    }
  if (s) {
    const ee = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const E of ee) {
      const W = go(E);
      if (W) return W;
    }
  }
  const u = (z = s == null ? void 0 : s.widgets) == null ? void 0 : z.find((ee) => String((ee == null ? void 0 : ee.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? mn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Uc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function qp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !W0(o) || r <= 1 || n <= 1) {
    Uc(t, r, n);
    return;
  }
  if (s.failed) {
    Uc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: bl(i, r, n),
    background: { media: o, revision: uM(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Uc(t, r, n);
}
function Xp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class pM {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Tg(() => this.requestDraw()), this.controller = pd({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Kt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Fe(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Fe(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, a;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((a = this.canvas) == null ? void 0 : a.clientHeight) || 0))
        };
      },
      onInteraction: () => this.requestDraw()
    }), this.orig = {
      onDrawForeground: t.onDrawForeground,
      onMouseDown: t.onMouseDown,
      onMouseMove: t.onMouseMove,
      onMouseUp: t.onMouseUp,
      onMouseWheel: t.onMouseWheel,
      onExecuted: t.onExecuted,
      onConnectionsChange: t.onConnectionsChange,
      onResize: t.onResize,
      onRemoved: t.onRemoved,
      coverageWidgetCallback: null
    }, this.legacyDragPointer = !1, this.tick = this.tick.bind(this), this.onResizeDom = this.onResizeDom.bind(this);
  }
  attach() {
    var t;
    typeof ((t = this.node) == null ? void 0 : t.addDOMWidget) == "function" ? this.attachDom() : this.attachLegacy(), this.installCommonHooks(), this.refreshImage(), this.requestDraw();
  }
  installCommonHooks() {
    var n, i, o;
    const t = this;
    this.node.onExecuted = function() {
      const s = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onConnectionsChange = function() {
      const s = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onResize = function() {
      const s = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), s;
    }, this.node.onRemoved = function() {
      const s = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), s;
    };
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...s) => {
      const a = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), a;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      var o;
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!r || (o = this.flags) != null && o.collapsed || !t.errorText) return n;
      const i = t.getLegacyPreviewRect();
      return r.save(), r.fillStyle = "rgba(18,18,22,0.92)", r.strokeStyle = "rgba(82,82,89,1)", r.lineWidth = 1, r.beginPath(), r.roundRect(i.x, i.y, i.w, i.h, 8), r.fill(), r.stroke(), r.fillStyle = "rgba(236,236,242,0.92)", r.font = "600 12px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), r.restore(), n;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${xa}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = on({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return xa;
        },
        getHeight() {
          return xa;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Ml(Tu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(xa, Number(o.minHeight || 0)),
            minWidth: Math.max(cM, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return nf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Mo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = sM({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = dd(lM, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), $r(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = ym(r), t.addEventListener("pointerdown", (o) => {
      var s, a, l;
      o.button === 0 && ((s = r.focus) == null || s.call(r, { preventScroll: !0 }), (a = t.setPointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const n = (o) => {
      var s, a;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), r.addEventListener("keydown", (o) => {
      var s;
      iM(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !W0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Wa(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = dr.canvas) != null && n.graph) || this.node.graph === dr.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var s;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Xp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, c, d, u, f, h;
      const o = Ox(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Xp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (h = r == null ? void 0 : r.stopImmediatePropagation) == null || h.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Wc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - Wp - Wc);
    return { x: Wc, y: Wp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), qp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Fg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = oM(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = dM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Vs(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = fM(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = r;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === r && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === r && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      n.onload = null, n.onerror = null;
    }, n.src = r;
  }
  requestDraw() {
    var t, r;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (r = (t = this.node).setDirtyCanvas) == null || r.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const r = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), qp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, h, S, g, b, y;
    if (((r = Kg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, $r(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (h = this.root) == null ? void 0 : h.remove) == null || S.call(h);
    } catch {
    }
    try {
      O0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((y = (b = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (H) => (H == null ? void 0 : H.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), $r(this.node).runtime = null;
  }
}
function hM(e, t = {}) {
  if (!e || $r(e).runtime) return;
  const r = new pM(e, t);
  $r(e).runtime = r, r.attach();
}
function U0(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const a = s ? s.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
}
function uf(e) {
  return !!(e != null && e.prototype);
}
function Os(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function mM(e, t = {}) {
  uf(e) || hM(e, {
    ...t,
    onOpen: Os(e, t.onOpen)
  });
}
function gM(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!uf(e)) {
    Kp(e, {
      ...n,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  U0(e, "stickers_node_preview", (i) => {
    Kp(i, {
      ...n,
      onOpen: Os(i, t.onOpen)
    });
  });
}
function yM(e, t = {}) {
  if (!uf(e)) {
    Gp(e, {
      ...t,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  U0(e, "cutout_preview", (r) => {
    Gp(r, {
      ...t,
      onOpen: Os(r, t.onOpen)
    });
  });
}
const Dn = {
  pen: {
    id: "pen",
    label: "Pen",
    stampKind: "round",
    hardness: 0.92,
    spacing: 0.14,
    flow: 1,
    opacity: 1,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    sizeScale: 1
  },
  marker: {
    id: "marker",
    label: "Marker",
    stampKind: "chisel",
    hardness: 0.76,
    spacing: 0.06,
    // flow < 1 so accumulate mode shows visible overlap buildup (Apple Freeboard style).
    flow: 0.8,
    opacity: 0.88,
    // accumulate: overlapping areas within one stroke build up darker, like a real marker.
    opacityMode: "accumulate",
    aspect: 2.4,
    angle: { kind: "fixed", value: Math.PI / 6 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0.3,
    chiselCenterDip: 0.12,
    // Nib-fiber texture: felt channels visible as subtle streaks along the nib.
    chiselFiber: 0.28,
    scatter: null,
    // Compensates for aspect=2.4: at same slider value, nib height matches pen stroke width.
    sizeScale: 0.6
  },
  brush: {
    id: "brush",
    label: "Soft Brush",
    stampKind: "round",
    hardness: 0.06,
    spacing: 0.06,
    flow: 0.28,
    opacity: 0.85,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    // Soft edges feather out visually; scale up so it feels similar in weight to pen.
    sizeScale: 1.5
  },
  crayon: {
    id: "crayon",
    label: "Pastel",
    stampKind: "crayon",
    hardness: 0.55,
    spacing: 0.1,
    flow: 0.82,
    opacity: 0.92,
    opacityMode: "accumulate",
    aspect: 1.2,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    // Grain = amount of per-pixel wax-texture noise applied inside the shape.
    // 0 = no grain (smooth), 1 = maximum grain.
    crayonGrain: 0.68,
    scatter: null,
    sizeScale: 0.92
  }
}, Dr = "pen";
function Jp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function bM({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, a] of Object.entries(r))
      n.delete(s) && a();
  }
  return {
    request(s) {
      n.add(s), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const ft = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // The painting changed (a stroke being drawn, strokes or rasters moved): its layers are drawn again from
  // the paint engine's canvases, while the Stickers and the Camera stay.
  PAINT: "paint",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item or Spark loaded.
  MEDIA: "media",
  // The stage's Spark renderer has new splats or a new order (pano_spark_views.js): the stage draws again,
  // the camera preview does not.
  SPLAT_STAGE: "splat_stage",
  // The camera preview's Spark renderer has new splats or a new order: the preview draws again. The stage
  // draws with it (the frame draws all of the three.js canvas), its own Spark having nothing new to sort.
  SPLAT_PREVIEW: "splat_preview",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), vM = new Set(Object.values(ft));
function SM({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (b) {
      i(b);
    }
  }
  function h() {
    !o && !s && !a && (o = e(S));
  }
  function S(g) {
    o = 0, s = !0;
    try {
      const b = c;
      c = /* @__PURE__ */ new Map();
      for (const H of b.values()) f(() => H(g));
      if (a) return;
      const y = l;
      l = /* @__PURE__ */ new Set(), (y.size || n()) && f(() => r(g, y));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && h();
  }
  return {
    requestDraw(g) {
      if (!vM.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ft.STATE && (u += 1), l.add(g), h();
    },
    requestFrame(g) {
      const b = d++;
      return c.set(b, g), h(), b;
    },
    cancelFrame(g) {
      c.delete(g);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      h();
    },
    get stateRevision() {
      return u;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      a = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const _M = { class: "pano-floating-right" }, wM = {
  key: 0,
  class: "pano-floating-space"
}, kM = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, xM = ["data-settled"], MM = ["data-ready", "data-settled"], NM = ["aria-label", "data-tip"], PM = {
  key: 1,
  class: "pano-camera-preview-label"
}, AM = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    // The space group (#71): { visible, mode, frameDisabled, modes, frame } (floatingRightState), null
    // without one. It shows or hides as a whole at the left end, so the buttons right of it never move.
    space: { type: Object, default: null },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Ve(Ze, null, [
      Me("div", _M, [
        e.space ? jr((Re(), Ve("div", wM, [
          Me("div", kM, [
            (Re(!0), Ve(Ze, null, Nt(e.space.modes, (n) => (Re(), Vn(nn, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(nn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Li, e.space.visible]
        ]) : lt("", !0),
        (Re(!0), Ve(Ze, null, Nt(e.buttons, (n) => (Re(), Vn(nn, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      jr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: mt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Me("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Re(), Ve("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(zt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, NM)) : lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Re(), Ve("div", PM, tt(e.preview.label || "Preview unavailable"), 1)) : lt("", !0)
        ], 14, MM)
      ], 8, xM), [
        [Li, e.preview.visible]
      ])
    ], 64));
  }
}, CM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, IM = ["y2", "transform"], EM = ["transform"], OM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => jr((Re(), Ve("div", {
      class: mt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Re(), Ve("svg", CM, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Re(!0), Ve(Ze, null, Nt(rt(r), (s) => (Re(), Ve("line", {
          key: s,
          class: mt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, IM))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, EM),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Li, e.model.visible === !0]
    ]);
  }
}, FM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Ve("div", {
      class: mt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(w0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(nn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(OM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, TM = ["aria-label"], DM = { class: "pano-canvas-confirm-title" }, RM = { class: "pano-canvas-confirm-text" }, LM = { class: "pano-canvas-confirm-actions" }, VM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, $M = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function s(u) {
      const f = n.value;
      if (!f) return;
      const h = f.querySelector(`[data-action='${u}']`);
      h instanceof HTMLButtonElement && h.click();
    }
    function a() {
      var g;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const S = o()[0] || u;
      (g = S == null ? void 0 : S.focus) == null || g.call(S);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var y;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), h = n.value;
      if (!f.length) {
        u.preventDefault(), (y = h == null ? void 0 : h.focus) == null || y.call(h);
        return;
      }
      const S = f[0], g = f[f.length - 1], b = document.activeElement;
      if (u.shiftKey) {
        (b === S || b === h || !(h != null && h.contains(b))) && (u.preventDefault(), g.focus());
        return;
      }
      (b === g || !(h != null && h.contains(b))) && (u.preventDefault(), S.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Oi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, zl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Rs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Re(), Ve("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Mt(d, ["self"])
    }, [
      Me("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Me("div", DM, tt(e.model.title), 1),
        Me("div", RM, tt(e.model.text), 1),
        Me("div", LM, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", VM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, TM)
    ], 512)) : lt("", !0);
  }
}, zM = ["data-paint-pane"], jM = ["hidden"], HM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], GM = ["aria-pressed", "disabled"], KM = ["hidden"], WM = { class: "pano-paint-color-pop-head" }, UM = { class: "pano-paint-color-field" }, BM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, YM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, qM = { class: "pano-paint-color-field" }, XM = { class: "pano-paint-alpha-wrap" }, JM = ["value"], ZM = { "data-paint-alpha-value": "" }, QM = ["hidden"], eN = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, tN = ["data-paint-history-index", "aria-label", "disabled"], nN = ["data-paint-footer"], rN = ["data-paint-group"], iN = ["hidden"], oN = ["value", "disabled"], sN = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, aN = ["hidden"], lN = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    function r(n) {
      return n ? { "--swatch": String(n.cssColor || "") } : {};
    }
    return (n, i) => (Re(), Ve("div", {
      class: mt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Re(!0), Ve(Ze, null, Nt(e.panes, (o) => {
        var s;
        return Re(), Ve("div", {
          key: o.key,
          class: mt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Re(), Ve("div", {
            key: 0,
            class: mt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Re(!0), Ve(Ze, null, Nt(e.paintSwatches, (a) => (Re(), Ve("button", {
              key: a.id,
              class: mt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, HM))), 128)),
            Me("button", {
              class: mt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, GM),
            Me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Et({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Me("div", WM, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", UM, [
                Me("div", BM, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", YM, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", qM, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", XM, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, JM),
                  Me("span", ZM, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", eN, [
                  (Re(!0), Ve(Ze, null, Nt(e.state.historyEntries || [], (a) => (Re(), Ve("button", {
                    key: a.index,
                    class: mt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, tN))), 128))
                ])
              ], 8, QM)
            ], 12, KM)
          ], 10, jM)) : lt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Re(!0), Ve(Ze, null, Nt(o.tools, (a) => {
                var l;
                return Re(), Vn(nn, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, rN),
            Me("div", {
              class: mt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Me("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, oN),
              Me("span", sN, tt(e.state.sizeText || "10"), 1)
            ], 10, iN),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(nn, {
                icon: rt(We).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, aN)
          ], 8, nN)
        ], 10, zM);
      }), 128))
    ], 2));
  }
}, cN = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Jt(null), n = /* @__PURE__ */ Jt(null), i = /* @__PURE__ */ Jt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Re(), Ve(Ze, null, [
      Me("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Me("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Me("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, uN = ["aria-label"], dN = ["data-tip", "aria-pressed"], fN = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Re(), Ve("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Re(!0), Ve(Ze, null, Nt(e.buttons, (o) => (Re(), Ve("button", Tr({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), tt(o.label), 17, dN))), 128))
    ], 12, uN));
  }
}, pN = {
  key: 0,
  class: "pano-cutout-menu"
}, hN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, mN = ["data-aspect"], gN = ["data-action", "aria-label", "data-tip", "disabled"], yN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Ve("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Re(!0), Ve(Ze, null, Nt(e.model.items || [], (n) => (Re(), Ve(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Re(), Ve("div", pN, [
          Me("button", hN, [
            Be(zt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: mt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Re(!0), Ve(Ze, null, Nt(n.choices || [], (i) => (Re(), Ve("button", {
              key: i.value,
              class: mt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, tt(i.label), 11, mN))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Re(), Vn(fN, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Re(), Ve("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be(zt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, gN))
      ], 64))), 128))
    ], 4));
  }
}, bN = {
  key: 0,
  class: "pano-easing"
}, vN = { class: "pano-section-title" }, SN = { class: "pano-easing-range" }, _N = { class: "pano-easing-modes" }, wN = ["aria-pressed", "onClick"], kN = ["viewBox"], xN = ["x", "y"], MN = ["x1", "y1", "x2", "y2"], NN = ["d"], PN = ["x1", "y1", "x2", "y2"], AN = ["x1", "y1", "x2", "y2"], CN = ["cx", "cy"], IN = ["cx", "cy"], EN = { class: "pano-easing-note" }, Er = 132, xi = 14, ON = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ Jt(null), s = ut(() => {
      var S;
      return Array.isArray((S = r.model) == null ? void 0 : S.easing) ? r.model.easing : null;
    }), a = (S) => xi + S * Er, l = (S) => xi + (1 - S) * Er, c = ut(() => {
      var H;
      if (((H = r.model) == null ? void 0 : H.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [S, g, b, y] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(S)} ${l(g)} ${a(b)} ${l(y)} ${a(1)} ${l(1)}`;
    }), d = ut(() => s.value ? s.value.map((S) => S.toFixed(2)).join(", ") : "");
    function u(S) {
      var g;
      return JSON.stringify(S.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(S, g) {
      n("timeline", { type: "easing", easing: S, commit: g });
    }
    function h(S, g) {
      var ee;
      if (S.button !== 0 || !s.value) return;
      const b = S.currentTarget;
      (ee = b.setPointerCapture) == null || ee.call(b, S.pointerId);
      let y = null;
      const H = (E) => {
        const W = o.value.getBoundingClientRect(), D = W.width / (Er + xi * 2), q = ((E.clientX - W.left) / D - xi) / Er, ve = 1 - ((E.clientY - W.top) / D - xi) / Er;
        y = [...y || s.value], y[g] = Math.round(Math.min(1, Math.max(0, q)) * 100) / 100, y[g + 1] = Math.round(Math.min(1, Math.max(0, ve)) * 100) / 100, f(y, !1);
      }, z = () => {
        b.removeEventListener("pointermove", H), b.removeEventListener("pointerup", z), b.removeEventListener("pointercancel", z), y && f(y, !0);
      };
      b.addEventListener("pointermove", H), b.addEventListener("pointerup", z), b.addEventListener("pointercancel", z);
    }
    return (S, g) => e.model ? (Re(), Ve("div", bN, [
      Me("div", vN, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", SN, tt(e.model.label), 1)
      ]),
      Me("div", _N, [
        (Re(), Ve(Ze, null, Nt(i, (b) => Me("button", {
          key: b.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(b) ? "true" : "false",
          onClick: (y) => f(b.easing, !0)
        }, tt(b.label), 9, wN)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Re(), Ve("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Er + xi * 2} ${Er + xi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Er,
          height: Er
        }, null, 8, xN),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, MN),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, NN),
        s.value ? (Re(), Ve(Ze, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, PN),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, AN),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (b) => h(b, 0))
          }, null, 40, CN),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (b) => h(b, 2))
          }, null, 40, IN)
        ], 64)) : lt("", !0)
      ], 8, kN)) : lt("", !0),
      Me("div", EN, [
        e.model.mixed ? (Re(), Ve(Ze, { key: 0 }, [
          Uo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Re(), Ve(Ze, { key: 1 }, [
          Uo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Re(), Ve(Ze, { key: 2 }, [
          Uo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Re(), Ve(Ze, { key: 3 }, [
          Uo("cubic-bezier(" + tt(d.value) + ")", 1)
        ], 64)) : lt("", !0)
      ])
    ])) : lt("", !0);
  }
}, FN = ["title"], TN = { class: "pano-ui-row" }, DN = ["disabled"], RN = { class: "pano-upstream-lanes" }, LN = ["data-action", "data-lane", "disabled", "title"], VN = {
  __name: "PanoUpstreamOrigin",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Re(), Ve("div", {
      key: 0,
      class: "pano-upstream-origin",
      title: e.model.note || null
    }, [
      Me("div", TN, [
        r[0] || (r[0] = Me("label", null, "Revert to upstream", -1)),
        Me("button", {
          class: "pano-btn subtle",
          type: "button",
          "data-action": "revert-upstream",
          disabled: e.model.revertAll.disabled,
          title: "Revert all overrides of this element to upstream"
        }, "All", 8, DN)
      ]),
      Me("div", RN, [
        (Re(!0), Ve(Ze, null, Nt(e.model.lanes, (n) => (Re(), Ve("button", {
          key: n.name,
          class: "pano-btn subtle",
          type: "button",
          "data-action": n.action,
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, tt(n.label), 9, LN))), 128))
      ])
    ], 8, FN)) : lt("", !0);
  }
}, $N = {
  class: "pano-side",
  "data-side": ""
}, zN = { class: "pano-side-head" }, jN = { class: "pano-side-title" }, HN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, GN = {
  key: 0,
  class: "pano-side-scroll"
}, KN = { class: "pano-inspector" }, WN = { class: "pano-ui-row pano-coverage-row" }, UN = ["data-selected"], BN = ["aria-pressed", "disabled"], YN = ["aria-pressed", "disabled"], qN = {
  key: 0,
  class: "pano-section-title"
}, XN = { class: "meta" }, JN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, ZN = {
  class: "pano-picker",
  "data-picker": "selection"
}, QN = ["disabled"], eP = { class: "pano-picker-label" }, tP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, nP = ["hidden"], rP = ["data-selection-id"], iP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, oP = {
  key: 2,
  class: "pano-state-actions"
}, sP = ["disabled"], aP = ["data-key"], lP = { class: "pano-field-group-values" }, cP = ["title", "onPointerdown"], uP = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], dP = ["data-key"], fP = ["min", "max", "step", "value", "disabled", "data-param-key"], pP = ["min", "max", "step", "value", "disabled", "data-param-key"], hP = ["open"], mP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, gP = { class: "pano-ui-settings-body" }, yP = { class: "pano-ui-row" }, bP = ["data-selected"], vP = ["aria-pressed"], SP = ["aria-pressed"], _P = { class: "pano-ui-row" }, wP = ["data-selected"], kP = ["aria-pressed"], xP = ["aria-pressed"], MP = {
  key: 1,
  class: "pano-side-footer"
}, NP = ["data-action"], PP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = ut(() => {
      const c = r.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function o(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function s(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const a = {};
    function l(c, d) {
      const u = a[d.key];
      if (c.button !== 0 || !u || s(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, h = c.clientX, S = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const b = (H) => {
        if (!g && Math.abs(H.clientX - h) < 3) return;
        g = !0;
        const z = S + (H.clientX - h) * d.drag * (H.shiftKey ? 0.1 : 1);
        u.value = String(Number(z.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, y = () => {
        f.removeEventListener("pointermove", b), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("lostpointercapture", y), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", b), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("lostpointercapture", y);
    }
    return (c, d) => {
      var u, f, h, S, g, b;
      return Re(), Ve("div", $N, [
        Me("div", zN, [
          Me("div", jN, [
            Me("span", HN, [
              Be(zt, {
                icon: rt(We).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Re(), Ve("div", GN, [
          Me("div", KN, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", WN, [
              d[2] || (d[2] = Me("label", null, "Coverage", -1)),
              Me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, BN),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, YN)
              ], 8, UN)
            ]),
            e.model.transformTitle !== !1 ? (Re(), Ve("div", qN, [
              d[3] || (d[3] = Me("span", null, "Transform", -1)),
              Me("span", XN, tt(((b = e.model.upstream) == null ? void 0 : b.origin) || ""), 1)
            ])) : lt("", !0),
            e.model.selectionPicker ? (Re(), Ve("div", JN, [
              Me("label", null, tt(e.model.selectionPicker.label), 1),
              Me("div", ZN, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", eP, [
                    e.model.selectionPicker.currentIcon ? (Re(), Ve("span", tP, [
                      Be(zt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Me("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, QN),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Re(!0), Ve(Ze, null, Nt(e.model.selectionPicker.items || [], (y) => (Re(), Ve("button", {
                    key: y.id,
                    type: "button",
                    class: mt(["pano-picker-item", { active: y.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": y.id
                  }, [
                    y.icon ? (Re(), Ve("span", iP, [
                      Be(zt, {
                        icon: y.icon
                      }, null, 8, ["icon"])
                    ])) : lt("", !0),
                    Me("span", null, tt(y.label), 1)
                  ], 10, rP))), 128))
                ], 8, nP)
              ])
            ])) : lt("", !0),
            e.model.copyStateButton ? (Re(), Ve("div", oP, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(zt, {
                  icon: rt(We).copy
                }, null, 8, ["icon"]),
                Me("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, sP)
            ])) : lt("", !0),
            Me("div", {
              class: mt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Re(!0), Ve(Ze, { key: 0 }, Nt(e.model.notes, (y) => (Re(), Ve("div", {
                key: y,
                class: "pano-param-note"
              }, tt(y), 1))), 128)) : (Re(!0), Ve(Ze, { key: 1 }, Nt(e.model.rows || [], (y) => (Re(), Ve(Ze, {
                key: y.key
              }, [
                y.grouped ? (Re(), Ve("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": y.key
                }, [
                  Me("label", null, tt(y.label), 1),
                  Me("div", lP, [
                    (Re(!0), Ve(Ze, null, Nt(y.fields, (H) => (Re(), Ve("div", {
                      key: H.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: mt(["pano-axis", { disabled: s(H, e.model) }]),
                        title: H.label,
                        onPointerdown: (z) => l(z, H)
                      }, tt(H.short), 43, cP),
                      Me("input", {
                        ref_for: !0,
                        ref: (z) => {
                          a[H.key] = z;
                        },
                        type: "number",
                        min: H.min,
                        max: H.max,
                        step: H.step,
                        value: H.displayValue,
                        disabled: s(H, e.model),
                        "aria-label": `${y.label} ${H.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": H.key
                      }, null, 8, uP)
                    ]))), 128))
                  ])
                ], 8, aP)) : (Re(), Ve("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": y.key
                }, [
                  Me("label", null, tt(y.label), 1),
                  Me("input", {
                    type: "range",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].value,
                    disabled: s(y.fields[0], e.model),
                    style: Et(o(y.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": y.fields[0].key
                  }, null, 12, fP),
                  Me("input", {
                    type: "number",
                    min: y.fields[0].min,
                    max: y.fields[0].max,
                    step: y.fields[0].step,
                    value: y.fields[0].displayValue,
                    disabled: s(y.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": y.fields[0].key
                  }, null, 8, pP)
                ], 8, dP))
              ], 64))), 128))
            ], 2),
            Be(VN, {
              model: e.model.upstream
            }, null, 8, ["model"]),
            Be(ON, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (y) => n("timeline", y))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Re(), Ve("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", mP, [
                  Be(zt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", gP, [
                Me("div", yP, [
                  d[6] || (d[6] = Me("label", null, "Drag X", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, vP),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, SP)
                  ], 8, bP)
                ]),
                Me("div", _P, [
                  d[7] || (d[7] = Me("label", null, "Drag Y", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, kP),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, xP)
                  ], 8, wP)
                ]),
                d[8] || (d[8] = Me("div", { class: "pano-ui-row" }, [
                  Me("span"),
                  Me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, hP)) : lt("", !0)
          ])
        ])) : lt("", !0),
        (e.model.footerButtons || []).length ? (Re(), Ve("div", MP, [
          (Re(!0), Ve(Ze, null, Nt(e.model.footerButtons, (y) => (Re(), Ve("button", {
            key: y.action,
            class: mt(["pano-btn", { "pano-btn-primary": y.primary === !0 }]),
            type: "button",
            "data-action": y.action
          }, tt(y.label), 11, NP))), 128))
        ])) : lt("", !0)
      ]);
    };
  }
}, AP = { class: "pano-timeline-group" }, CP = ["title"], IP = ["disabled"], EP = ["disabled"], OP = {
  __name: "PanoTimelineGroup",
  props: {
    group: { type: Object, required: !0 }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = t;
    return (n, i) => (Re(), Ve("div", AP, [
      Me("span", {
        class: "pano-timeline-group-label",
        title: e.group.label
      }, tt(e.group.label), 9, CP),
      Me("button", {
        class: "pano-timeline-group-action",
        type: "button",
        disabled: e.group.revert.disabled,
        title: "Revert the scene and paint of this layer to upstream",
        onClick: i[0] || (i[0] = Mt((o) => r("action", { type: "revert-upstream-layer", key: e.group.key }), ["stop"]))
      }, "Revert", 8, IP),
      Me("button", {
        class: "pano-timeline-group-action is-restore",
        type: "button",
        disabled: e.group.restore.disabled,
        title: "Show the elements of this layer deleted here again",
        onClick: i[1] || (i[1] = Mt((o) => r("action", { type: "restore-upstream-deleted", key: e.group.key }), ["stop"]))
      }, tt(e.group.restore.label), 9, EP)
    ]));
  }
}, FP = { class: "pano-timeline-bar" }, TP = ["disabled", "aria-label", "data-tip"], DP = ["aria-label", "data-tip"], RP = { class: "pano-timeline-time" }, LP = ["data-tip"], VP = { key: 0 }, $P = ["min", "max", "value"], zP = {
  class: "pano-timeline-setting pano-timeline-length",
  "data-tip": "Output length in frames"
}, jP = ["max", "value"], HP = ["disabled"], GP = ["aria-expanded"], KP = ["inert"], WP = { class: "pano-timeline-name" }, UP = ["aria-pressed", "disabled", "aria-label", "data-tip", "onClick"], BP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, YP = ["disabled", "aria-expanded", "aria-label", "onClick"], qP = ["title", "aria-current", "onClick"], XP = ["role", "aria-label", "data-tip"], JP = ["disabled", "data-keyed", "aria-label", "onClick"], ZP = ["onPointerdown"], QP = ["onPointerdown"], e2 = ["onPointerdown"], t2 = ["onPointerdown"], n2 = ["aria-label", "data-tip", "onPointerdown"], r2 = { key: 0 }, i2 = ["onPointerdown"], o2 = ["aria-label", "data-tip", "onPointerdown"], s2 = { key: 0 }, a2 = 10, l2 = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Xa(0), playing: /* @__PURE__ */ Xa(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Jt(null), o = /* @__PURE__ */ Jt(null), s = /* @__PURE__ */ Jt(1), a = /* @__PURE__ */ Jt(0), l = /* @__PURE__ */ Jt(!1);
    let c = null, d = null, u = null;
    Hl(() => {
      c = new ResizeObserver(([fe]) => {
        s.value = Math.max(1, fe.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([fe]) => {
        a.value = fe.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Rs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), h = ut(() => r.playhead.frame.value), S = ut(() => r.playhead.playing.value), g = ut(() => rS(h.value, Number(r.model.fps || 1))), b = ut(() => s.value / f.value), y = (fe) => `${fe / f.value * 100}%`, H = ut(() => hS(f.value, b.value));
    function z(fe) {
      const R = i.value.getBoundingClientRect(), X = Math.floor((fe - R.left) / Math.max(1, R.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, X));
    }
    function ee(fe, R, X) {
      const A = Math.ceil(a2 / Math.max(1e-6, b.value)), ge = R.filter((O) => O.frame < f.value), P = new Map(ge.map((O) => [O.frame, O.full]));
      return mS(ge.map((O) => O.frame), A).map((O, _) => ({
        ...O,
        key: `${fe}:${_}`,
        partial: O.frames.some((k) => !P.get(k)),
        selected: O.frames.some((k) => X.includes(k))
      }));
    }
    const E = ut(() => [
      ...(r.model.rows || []).map((fe) => ({ key: fe.id, row: fe })),
      ...(r.model.groups || []).flatMap((fe) => [
        { key: `group:${fe.key}`, group: fe },
        ...fe.rows.map((R) => ({ key: R.id, row: R }))
      ])
    ]), W = ut(() => {
      const fe = /* @__PURE__ */ new Map();
      for (const { row: R } of E.value)
        if (R) {
          fe.set(R.id, ee(R.id, R.keys, R.selectedFrames));
          for (const X of R.lanes) fe.set(X.key, ee(X.key, X.frames.map((A) => ({ frame: A, full: !0 })), X.selectedFrames));
        }
      return fe;
    });
    function D(fe) {
      const R = fe.end === null ? f.value : Math.min(fe.end, f.value);
      return { left: y(fe.start), width: y(Math.max(0, R - fe.start)) };
    }
    function q(fe, R) {
      const X = fe.clientX, A = Math.max(1e-6, b.value);
      let ge = 0;
      R("start", 0, fe);
      const P = (_) => {
        if (_.pointerId !== fe.pointerId) return;
        const k = Math.round((_.clientX - X) / A);
        k !== ge && (ge = k, R("move", ge, _));
      }, O = (_) => {
        _.pointerId === fe.pointerId && (u(), R("end", ge, _));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", O), window.removeEventListener("pointercancel", O), u = null;
      }, window.addEventListener("pointermove", P), window.addEventListener("pointerup", O), window.addEventListener("pointercancel", O);
    }
    function ve(fe) {
      fe.button === 0 && q(fe, (R, X, A) => n("action", { type: "seek", frame: z(A.clientX), phase: R }));
    }
    function _e(fe, R, X) {
      fe.button === 0 && (n("action", { type: "select-row", id: R.id }), q(fe, (A, ge) => n("action", { type: "clip", id: R.id, mode: X, delta: ge, phase: A })));
    }
    function he(fe, R, X, A, ge) {
      if (fe.button === 0) {
        if (fe.shiftKey) {
          n("action", { type: "select-keys", owner: R.id, lane: X, frames: A.frames, additive: !0 });
          return;
        }
        A.frames.every((P) => ge.includes(P)) || n("action", { type: "select-keys", owner: R.id, lane: X, frames: A.frames, additive: !1 }), q(fe, (P, O) => n("action", { type: "move-keys", delta: O, phase: P }));
      }
    }
    const ie = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ke(fe, R, X) {
      n("action", R), await zl(), fe.target.value = X();
    }
    function me(fe) {
      ke(fe, { type: "fps", fps: Number(fe.target.value) }, () => ie.value);
    }
    const de = ut(() => String(r.model.length ?? f.value));
    function J(fe) {
      const R = fe.target.value.trim();
      if (!R) {
        fe.target.value = de.value;
        return;
      }
      ke(fe, { type: "length", length: Number(R) }, () => de.value);
    }
    function pe(fe, R, X) {
      fe.button !== 0 || fe.target !== fe.currentTarget || n("action", { type: "select-keys", owner: R.id, lane: X, frames: [], additive: !1 });
    }
    return (fe, R) => jr((Re(), Ve("section", {
      class: mt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", FP, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          disabled: !e.model.playable,
          "aria-label": S.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": S.value ? "Pause (Space)" : "Play (Space)",
          onClick: R[0] || (R[0] = (X) => n("action", { type: "play" }))
        }, [
          Be(zt, {
            icon: S.value ? rt(We).pause : rt(We).play
          }, null, 8, ["icon"])
        ], 8, TP),
        e.model.hasAudio ? (Re(), Ve("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: R[1] || (R[1] = (X) => n("action", { type: "mute" }))
        }, [
          Be(zt, {
            icon: e.model.muted ? rt(We).volume_muted : rt(We).volume2
          }, null, 8, ["icon"])
        ], 8, DP)) : lt("", !0),
        Me("span", RP, tt(g.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Re(), Ve("span", VP, tt(ie.value), 1)) : (Re(), Ve("input", {
            key: 1,
            type: "number",
            min: rt(Tm),
            max: rt(vd),
            step: "any",
            value: ie.value,
            "aria-label": "Timeline fps",
            onChange: me
          }, null, 40, $P)),
          R[8] || (R[8] = Me("span", null, "fps", -1))
        ], 8, LP),
        Me("label", zP, [
          R[9] || (R[9] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: rt(Sd),
            step: "1",
            value: de.value,
            "aria-label": "Output length in frames",
            onChange: J
          }, null, 40, jP)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-length-reset",
          type: "button",
          disabled: e.model.length == null,
          "aria-label": "Reset length to the inputs",
          "data-tip": "Reset length to the inputs",
          onClick: R[2] || (R[2] = (X) => n("action", { type: "length", length: null }))
        }, [
          Be(zt, {
            icon: rt(We).reset
          }, null, 8, ["icon"])
        ], 8, HP),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: R[3] || (R[3] = (X) => n("action", { type: "toggle-expanded" }))
        }, [
          R[10] || (R[10] = Me("span", null, "Timeline", -1)),
          Be(zt, {
            icon: rt(We).chevron
          }, null, 8, ["icon"])
        ], 8, GP)
      ]),
      Me("div", {
        class: mt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: R[5] || (R[5] = Mt((X) => l.value = !0, ["self"])),
        onTransitionend: R[6] || (R[6] = Mt((X) => l.value = !1, ["self"])),
        onTransitioncancel: R[7] || (R[7] = Mt((X) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          R[11] || (R[11] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: ve
          }, [
            (Re(!0), Ve(Ze, null, Nt(H.value, (X) => (Re(), Ve("span", {
              key: X,
              class: "pano-timeline-tick",
              style: Et({ left: y(X) })
            }, tt(X), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: y(h.value + 0.5) })
            }, null, 4)
          ], 544),
          (Re(!0), Ve(Ze, null, Nt(E.value, ({ key: X, row: A, group: ge }) => (Re(), Ve(Ze, { key: X }, [
            ge ? (Re(), Vn(OP, {
              key: 0,
              group: ge,
              onAction: R[4] || (R[4] = (P) => n("action", P))
            }, null, 8, ["group"])) : lt("", !0),
            A ? (Re(), Ve("div", {
              key: 1,
              class: mt(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", WP, [
                A.hideable ? (Re(), Ve("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  disabled: !A.editable,
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.editable ? A.visible ? "Hide" : "Show" : "Inherited only: this node keeps no overrides of it",
                  onClick: Mt((P) => n("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: A.visible ? rt(We).eye : rt(We).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, UP)) : (Re(), Ve("span", BP)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: Mt((P) => n("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: rt(We).chevron
                  }, null, 8, ["icon"])
                ], 8, YP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (P) => n("action", { type: "select-row", id: A.id })
                }, [
                  Be(zt, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, tt(A.label), 1)
                ], 8, qP),
                A.upstream ? (Re(), Ve("span", {
                  key: 2,
                  class: mt(["pano-timeline-override", { on: A.overridden }]),
                  role: A.overridden ? "img" : void 0,
                  "aria-label": A.overridden ? "Overridden in this node" : void 0,
                  "data-tip": A.overridden ? "Overridden in this node" : null
                }, null, 10, XP)) : lt("", !0),
                A.keyable ? (Re(), Ve("button", {
                  key: 3,
                  class: mt(["pano-timeline-key", { keyed: rt(Ac)(A.keys, h.value) }]),
                  type: "button",
                  disabled: !A.editable,
                  "data-keyed": rt(Ac)(A.keys, h.value) ? "true" : "false",
                  "aria-label": rt(Ac)(A.keys, h.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Mt((P) => n("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  Be(zt, {
                    icon: rt(We).keyframe
                  }, null, 8, ["icon"])
                ], 10, JP)) : lt("", !0)
              ]),
              A.open ? (Re(!0), Ve(Ze, { key: 0 }, Nt(A.lanes, (P) => (Re(), Ve("div", {
                key: P.key,
                class: "pano-timeline-lane-head"
              }, tt(P.label), 1))), 128)) : lt("", !0)
            ], 2)) : lt("", !0),
            A ? (Re(), Ve("div", {
              key: 2,
              class: mt(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (P) => pe(P, A, null)
              }, [
                A.clip && A.clip.start < f.value ? (Re(), Ve("div", {
                  key: 0,
                  class: mt(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: Et(D(A.clip)),
                  onPointerdown: Mt((P) => _e(P, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Mt((P) => _e(P, A, "start"), ["stop"])
                  }, null, 40, e2),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Mt((P) => _e(P, A, "end"), ["stop"])
                  }, null, 40, t2)
                ], 46, QP)) : lt("", !0),
                (Re(!0), Ve(Ze, null, Nt(W.value.get(A.id), (P) => (Re(), Ve("button", {
                  key: P.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: P.selected, cluster: P.frames.length > 1, partial: P.partial }]),
                  style: Et({ left: y(P.frame + 0.5) }),
                  "aria-label": `${A.label}: ${P.frames.length > 1 ? `${P.frames.length} keyframes` : `keyframe at frame ${P.frames[0]}`}`,
                  "data-tip": P.frames.length > 1 ? `${P.frames.length} keyframes` : `Frame ${P.frames[0]}`,
                  onPointerdown: Mt((O) => he(O, A, null, P, A.selectedFrames), ["stop"])
                }, [
                  P.frames.length > 1 ? (Re(), Ve("span", r2, tt(P.frames.length), 1)) : lt("", !0)
                ], 46, n2))), 128))
              ], 40, ZP),
              A.open ? (Re(!0), Ve(Ze, { key: 0 }, Nt(A.lanes, (P) => (Re(), Ve("div", {
                key: P.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => pe(O, A, P.lane)
              }, [
                (Re(!0), Ve(Ze, null, Nt(W.value.get(P.key), (O) => (Re(), Ve("button", {
                  key: O.key,
                  type: "button",
                  class: mt(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: Et({ left: y(O.frame + 0.5) }),
                  "aria-label": `${P.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Mt((_) => he(_, A, P.lane, O, P.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (Re(), Ve("span", s2, tt(O.frames.length), 1)) : lt("", !0)
                ], 46, o2))), 128))
              ], 40, i2))), 128)) : lt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: y(h.value + 0.5) })
              }, null, 4)
            ], 2)) : lt("", !0)
          ], 64))), 128))
        ], 512)
      ], 46, KP)
    ], 2)), [
      [Li, e.model.visible]
    ]);
  }
}, c2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Re(), Ve("div", {
      class: mt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, u2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, d2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Re(), Ve("div", u2, [
      (Re(!0), Ve(Ze, null, Nt(e.buttons, (n) => jr((Re(), Vn(nn, {
        key: n.key,
        "extra-class": {
          active: n.active,
          "pano-btn-icon-accent": n.accent
        },
        icon: n.icon,
        label: n.label,
        tip: n.tip,
        pressed: n.pressed,
        attrs: { [n.attr]: n.value, disabled: n.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Li, n.visible !== !1]
      ])), 128))
    ]));
  }
}, f2 = ["data-video-ready"], p2 = { class: "pano-video-transport-shell" }, h2 = { class: "pano-video-controls-left" }, m2 = { class: "pano-video-filmstrip" }, g2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, y2 = ["src", "onLoad"], b2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, v2 = ["max", "value", "disabled"], S2 = { class: "pano-video-controls-right" }, _2 = ["data-has-audio"], w2 = { class: "pano-video-volume-pop" }, k2 = ["value", "disabled"], x2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? We.pause : We.play;
    }), o = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = ut(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? We.loop_off : We.loop;
    }), l = ut(() => {
      var E, W;
      return ((E = t.state) == null ? void 0 : E.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var E, W, D;
      return ((E = t.state) == null ? void 0 : E.hasAudio) !== !0 ? We.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number(((D = t.state) == null ? void 0 : D.volume) ?? 1) <= 0 ? We.volume_muted : We.volume2;
    }), d = ut(() => {
      var E;
      return Math.max(0, Math.min(100, Number(((E = t.state) == null ? void 0 : E.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var q, ve;
      const E = (q = t.state) == null ? void 0 : q.volumePct, W = Number(((ve = t.state) == null ? void 0 : ve.volume) ?? 1) * 100, D = Number(E ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, D))}%`
      };
    }), h = ut(() => {
      var D, q;
      const W = [
        String(((D = t.state) == null ? void 0 : D.currentTimeLabel) || "0:00"),
        String(((q = t.state) == null ? void 0 : q.durationLabel) || "0:00")
      ].reduce((ve, _e) => Math.max(ve, _e.length), 4);
      return `${Math.max(4, W)}ch`;
    }), S = ut(() => ({ "--pano-video-time-ch": h.value })), g = ut(() => {
      var D, q;
      const E = Array.isArray((D = t.state) == null ? void 0 : D.thumbnails) ? t.state.thumbnails : [];
      if (E.length) return E;
      const W = Math.max(7, Number(((q = t.state) == null ? void 0 : q.thumbnailCount) || 9));
      return Array.from({ length: W }, (ve, _e) => ({
        id: `placeholder-${_e}`,
        src: "",
        label: ""
      }));
    }), b = /* @__PURE__ */ Jt(/* @__PURE__ */ new Set()), y = (E) => String((E == null ? void 0 : E.id) || (E == null ? void 0 : E.src) || (E == null ? void 0 : E.label) || ""), H = (E) => b.value.has(y(E)), z = (E) => {
      const W = new Set(b.value);
      W.add(y(E)), b.value = W;
    };
    Oi(g, (E) => {
      const W = new Set(E.map(y)), D = /* @__PURE__ */ new Set();
      for (const q of b.value)
        W.has(q) && D.add(q);
      b.value = D;
    }, { immediate: !0 });
    const ee = ut(() => {
      var E;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((E = t.state) == null ? void 0 : E.shellMaxWidthPx) || 640))}px`
      };
    });
    return (E, W) => (Re(), Ve("div", {
      class: mt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(ee.value)
    }, [
      W[1] || (W[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      W[2] || (W[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", p2, [
        Me("div", h2, [
          Be(nn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-time pano-video-time-start",
            style: Et(S.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", m2, [
          Me("div", g2, [
            (Re(!0), Ve(Ze, null, Nt(g.value, (D) => (Re(), Ve("div", {
              key: y(D),
              class: mt(["pano-video-thumb", {
                "is-placeholder": !D.src,
                "is-loaded": D.src && H(D)
              }])
            }, [
              D.src ? (Re(), Ve("img", {
                key: 0,
                src: D.src,
                alt: "",
                draggable: "false",
                onLoad: (q) => z(D)
              }, null, 40, y2)) : (Re(), Ve("span", b2))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: Et(u.value),
            "aria-hidden": "true"
          }, [...W[0] || (W[0] = [
            Me("span", { class: "pano-video-playhead-line" }, null, -1),
            Me("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Me("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, v2)
        ]),
        Me("div", S2, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(S.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Be(nn, {
            "extra-class": "pano-video-control",
            icon: a.value,
            label: o.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          Me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Me("div", w2, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, k2)
            ]),
            Be(nn, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, _2)
        ])
      ])
    ], 14, f2));
  }
}, M2 = { class: "pano-floating-top" }, N2 = ["data-selected", "data-view-count"], P2 = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], A2 = { class: "label" }, C2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Re(), Ve("div", M2, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Re(!0), Ve(Ze, null, Nt(e.buttons, (i) => jr((Re(), Ve("button", {
            key: i.key,
            class: mt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(zt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            Me("span", A2, tt(i.label), 1)
          ], 10, P2)), [
            [Li, i.visible !== !1]
          ])), 128))
        ], 8, N2)
      ]);
    };
  }
};
function B0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: We.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: We.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: We.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: We.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: We.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: We.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: We.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: We.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: We.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: We.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: We.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: We.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: We.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: We.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: We.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: We.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: We.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: We.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: We.eye }
    ],
    paintPanes: [
      {
        key: "paint",
        footer: "paint",
        group: "paint",
        clearTarget: "paint",
        clearLabel: "Clear paint",
        clearTip: "Clear paint",
        clearHidden: !0,
        showColorFloat: !0,
        tools: [
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: We.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: We.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: We.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: We.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: We.lasso_tool }
        ]
      },
      {
        key: "mask",
        footer: "mask",
        group: "mask",
        clearTarget: "mask",
        clearLabel: "Clear mask",
        clearTip: "Clear mask",
        clearHidden: !1,
        showColorFloat: !1,
        tools: [
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: We.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: We.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: We.lasso_tool }
        ]
      }
    ]
  };
}
const I2 = ["aria-label"], E2 = { class: "pano-stage-column" }, O2 = { class: "pano-stage-wrap" }, F2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, T2 = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) },
    // The Timeline's playhead refs ({ frame, playing }), apart from uiState so that a frame of playback
    // updates only the Timeline.
    playhead: { type: Object, default: void 0 }
  },
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    let o = "", s = !1, a = null;
    const l = /* @__PURE__ */ Jt(null), c = /* @__PURE__ */ Jt(null), d = /* @__PURE__ */ Jt(null);
    function u() {
      var he, ie;
      return ((ie = (he = d.value) == null ? void 0 : he.getRefs) == null ? void 0 : ie.call(he)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(he) {
      var ie, ke;
      return ((ke = (ie = c.value) == null ? void 0 : ie.open) == null ? void 0 : ke.call(ie, he)) === !0;
    }
    function h(he) {
      i("image-file-selected", he);
    }
    function S(he) {
      i("image-file-cancelled", he);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = ut(() => n.readOnly === !0), b = ut(() => n.shellPreset || B0(n.type)), y = ut(() => {
      var ie, ke, me;
      const he = String((((ie = n.uiState) == null ? void 0 : ie.stageStatus) === "failed" ? (ke = n.uiState) == null ? void 0 : ke.stageStatusDetail : (me = n.uiState) == null ? void 0 : me.stageWarningDetail) ?? "");
      return he === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : he === "stickers" ? "One or more sticker previews are unavailable." : he === "frame" ? "The editor hit a rendering error. Check the browser console for details." : he === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : he.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), H = ut(() => {
      var he, ie, ke;
      return ((he = n.uiState) == null ? void 0 : he.stageStatus) === "failed" || (ie = n.uiState) != null && ie.stageWarningDetail ? y.value : (ke = n.uiState) == null ? void 0 : ke.stageNotice;
    }), z = ut(() => {
      var ie;
      const he = Array.isArray((ie = b.value) == null ? void 0 : ie.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return g.value && he.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: We.fullscreen
      }), he;
    });
    function ee() {
      const he = l.value;
      return he ? Array.from(he.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ie) => ie instanceof HTMLElement ? !ie.hidden && ie.tabIndex >= 0 && ie.offsetParent !== null : !1) : [];
    }
    function E() {
      var ke;
      const ie = ee()[0] || l.value;
      (ke = ie == null ? void 0 : ie.focus) == null || ke.call(ie);
    }
    function W() {
      var he;
      a != null && a.isConnected && ((he = a.focus) == null || he.call(a)), a = null;
    }
    function D(he) {
      var ie, ke, me, de;
      if (!he.defaultPrevented) {
        if (he.key === "Tab") {
          const J = ee();
          if (!J.length) {
            he.preventDefault(), (ke = (ie = l.value) == null ? void 0 : ie.focus) == null || ke.call(ie);
            return;
          }
          const pe = J[0], fe = J[J.length - 1], R = document.activeElement;
          if (he.shiftKey) {
            (R === pe || R === l.value || !((me = l.value) != null && me.contains(R))) && (he.preventDefault(), fe.focus());
            return;
          }
          (R === fe || !((de = l.value) != null && de.contains(R))) && (he.preventDefault(), pe.focus());
          return;
        }
        he.key === "Escape" && i("close");
      }
    }
    function q() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ve() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function _e(he) {
      document.removeEventListener("keydown", D), he ? (a || (a = document.activeElement), q(), document.addEventListener("keydown", D), zl(() => {
        E();
      })) : (ve(), W());
    }
    return Hl(() => {
      _e(n.open);
    }), Rs(() => {
      ve(), document.removeEventListener("keydown", D), W();
    }), Oi(() => n.open, (he) => {
      _e(he);
    }), (he, ie) => e.open ? (Re(), Ve("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ie[2] || (ie[2] = Mt((ke) => i("close"), ["self"]))
    }, [
      Me("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Me("div", E2, [
          Me("div", O2, [
            ie[3] || (ie[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ie[4] || (ie[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ie[5] || (ie[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Re(), Ve("div", F2, tt(H.value), 1)) : lt("", !0),
            ie[6] || (ie[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(cN, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(k0, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: h,
              onFileCancelled: S
            }, null, 512),
            g.value ? lt("", !0) : (Re(), Ve(Ze, { key: 1 }, [
              Be(d2, {
                buttons: e.uiState.toolButtons || b.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(FM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(lN, {
                "paint-swatches": e.paintSwatches,
                panes: b.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(x2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(C2, {
              buttons: e.uiState.viewButtons || b.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(AM, {
              buttons: e.uiState.floatingButtons || z.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(yN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(c2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be($M, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(l2, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ie[0] || (ie[0] = (ke) => i("timeline", ke))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? lt("", !0) : (Re(), Vn(PP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ie[1] || (ie[1] = (ke) => i("timeline", ke))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, I2)
    ])) : lt("", !0);
  }
}, ar = "loading", Fs = "ready", Jn = "failed";
function Y0(e, t = "") {
  return e && (e.__panoLoadState = ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function q0(e, t = "") {
  return e && (e.__panoLoadState = Fs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function X0(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Hu(e, t) {
  return e ? e.__panoLoadState === Jn ? Jn : typeof t == "function" && t(e) ? Fs : ar : Fs;
}
function Gu(e) {
  return Hu(e) === Jn;
}
function D2({ presented: e, background: t = Fs, stickers: r = [] } = {}) {
  if (!e) return { status: ar, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === ar, o = n.includes(ar);
  if (i && o) return { status: ar, detail: "mixed" };
  if (i) return { status: ar, detail: "background" };
  if (o) return { status: ar, detail: "stickers" };
  const s = t === Jn, a = n.includes(Jn);
  return s && a ? { status: Jn, detail: "mixed" } : s ? { status: Jn, detail: "background" } : a ? { status: Jn, detail: "stickers" } : { status: Fs, detail: "" };
}
const R2 = "state_json", L2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), df = "sticker_image_1", V2 = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), J0 = 0.01, $2 = "external_image", Ri = "pano_sticker_input_images", Z0 = "pano_sticker_input_videos", Q0 = "pano_sticker_input_frames", ey = "pano_sticker_input_video_meta", z2 = !0, rc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Nr = Math.PI / 180, $i = 180 / Math.PI, Ku = 1, ty = "rgb(255, 221, 87)", j2 = "rgb(228, 228, 231)", H2 = "rgb(180, 150, 60)", G2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, K2 = 64, Zp = 40, Bc = 16, W2 = 0.45, Qp = 180, U2 = 160, Il = 24, B2 = 4, Y2 = 4;
function Yc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function q2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function X2(e, t, r) {
  const n = Fe((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function J2(e) {
  return e * e * e;
}
function ic(e, t, r) {
  return { x: e, y: t, z: r };
}
function eh(e, t) {
  return ic(e.x + t.x, e.y + t.y, e.z + t.z);
}
function th(e, t) {
  return ic(e.x * t, e.y * t, e.z * t);
}
function qc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Z2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ic(e.x / t, e.y / t, e.z / t);
}
function Ma(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * $i),
    pitch: Fe(Math.asin(Fe(e.y, -1, 1)) * $i, -90, 90)
  };
}
function ei(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function Zo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Xc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Zo(e, t);
  const l = Fe((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Xn(e, t, r) {
  return e + (t - e) * r;
}
function _r(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Fe(r, 0, 1)})`;
}
function Q2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Na = { fillStyle: "", url: "" };
function eA(e, t, r) {
  if (Na.url && Na.fillStyle === String(e || ""))
    return Na.url;
  const n = Q2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Il}" height="${Il}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Na = { fillStyle: String(e || ""), url: n }, n;
}
function El(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Hn(e) {
  return {
    r: Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Fe(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function fn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function tA(e) {
  return rc.some((t) => El(e, t.color));
}
function Wu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Fe(Number(t), 0, 1), o = Fe(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(n * 6), a = n * 6 - s, l = o * (1 - i), c = o * (1 - a * i), d = o * (1 - (1 - a) * i);
  switch (s % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function Uu(e) {
  const t = Fe(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Fe(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Fe(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function yo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function nA(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function nh(e) {
  const { paintCount: t, maskCount: r } = nA(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function ny(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, h = Number(s.rot_deg || 0) * Nr, S = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(h), e.scale(S, S), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function ao(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Pa(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function rA(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Qo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function iA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function oA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function sA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const ry = "pano_suite.ui_settings.v1", iy = "pano_suite.node_grid_visibility.v1";
let io = null, yr = null;
function qa(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function aA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ry)) || "").trim();
    if (!t) return io ? qa(io) : null;
    const r = JSON.parse(t), n = qa(r);
    return io = n, n;
  } catch {
    return io ? qa(io) : null;
  }
}
function lA(e) {
  var r;
  const t = qa(e);
  io = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(ry, JSON.stringify(t));
  } catch {
  }
  return t;
}
function oy() {
  var e;
  if (yr && typeof yr == "object")
    return yr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(iy)) || "").trim();
    if (!t)
      return yr = {}, yr;
    const r = JSON.parse(t);
    return yr = r && typeof r == "object" ? r : {}, yr;
  } catch {
    return yr = {}, yr;
  }
}
function cA(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = oy()[r];
  return typeof i == "boolean" ? i : !!t;
}
function uA(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = oy();
  n[r] = !!t, yr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(iy, JSON.stringify(n));
  } catch {
  }
}
function dA(e, t) {
  const r = { ...e }, n = t.map((i) => i(Jc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Jc(r, t[o].name))), Jc(r, "showEditor");
}
function Jc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const ii = /* @__PURE__ */ new Map(), fA = 12;
function pA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ii.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ii.delete(t), ii.set(t, r), r);
}
function hA(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ii.delete(r), ii.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ii.size > fA; ) {
      const i = ii.keys().next().value;
      if (!i) break;
      ii.delete(i);
    }
}
function mA(e) {
  const {
    comfyMedia: t,
    editor: r,
    editorView: n,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: a,
    mediaSource: l,
    mediaUiImage: c,
    node: d,
    portStillCanvas: u,
    portVideoEl: f,
    readOnly: h,
    runtime: S,
    scheduler: g,
    stageWrap: b,
    state: y,
    stateV2: H,
    stillCanvas: z,
    studio: ee,
    timelinePlayhead: E,
    type: W,
    uiState: D,
    videoEl: q
  } = e;
  let ve, _e, he, ie, ke, me, de;
  const J = {
    thumbnailJobId: 0,
    thumbnailSrc: "",
    // Sources whose filmstrip could not be built; a refresh does not build it again.
    thumbnailFailedSrcs: /* @__PURE__ */ new Set(),
    // Sources that failed to load (a temp MP4 the server deleted) are not tried again in this editor.
    failedSrcs: /* @__PURE__ */ new Set(),
    videoFailed: !1,
    // The legacy transport's slider paused playback and plays again when it is let go.
    resumeAfterScrub: !1,
    // The fps of the editor's own background VIDEO result, 0 for a file without one.
    metaFps: 0
  }, pe = 9, fe = [];
  let R = 0;
  const X = () => {
    var ae, Ie;
    const M = (ae = b == null ? void 0 : b.getBoundingClientRect) == null ? void 0 : ae.call(b), ue = (Ie = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : Ie.call(i), Pe = Math.max(0, Number((M == null ? void 0 : M.width) || 0)), Ee = ue ? Math.max(0, Number(ue.width || 0)) : 0, ze = Ee > 0 ? Ee + 14 + 12 : 72, Ce = Math.max(280, Math.floor(Pe - ze * 2)), He = r.fullscreen ? Math.min(1200, Ce) : Ce;
    D.videoTransport.shellMaxWidthPx = He;
  }, A = () => {
    R || (R = g.requestFrame(() => {
      R = 0, X();
    }));
  }, ge = (M) => {
    if (!(M instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(M.audioTracks) && M.audioTracks.length > 0 || M.audioTracks && typeof M.audioTracks.length == "number" && M.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof M.mozHasAudio == "boolean") return M.mozHasAudio;
    } catch {
    }
    try {
      if (Number(M.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!D.videoTransport.hasAudio;
  }, P = typeof ResizeObserver < "u" ? new ResizeObserver(() => A()) : null;
  P == null || P.observe(b), i && (P == null || P.observe(i)), fe.push(() => {
    var M;
    R && (g.cancelFrame(R), R = 0), (M = P == null ? void 0 : P.disconnect) == null || M.call(P);
  }), A();
  const O = () => {
    J.thumbnailJobId += 1, J.thumbnailSrc = "", D.videoTransport.thumbnails = [], D.videoTransport.thumbnailCount = pe;
  }, _ = async (M, ue, Pe) => {
    const Ee = String(M || "").trim();
    if (!Ee) {
      O();
      return;
    }
    const Le = pA(Ee);
    if (Le) {
      J.thumbnailSrc = Ee, D.videoTransport.thumbnails = Le.thumbnails, D.videoTransport.thumbnailCount = Le.thumbnailCount;
      return;
    }
    const $e = ++J.thumbnailJobId;
    J.thumbnailSrc = Ee, D.videoTransport.thumbnails = [], D.videoTransport.thumbnailCount = pe;
    const ze = Vs(document, "editor.thumbnails");
    ze.preload = "auto", ze.muted = !0, ze.playsInline = !0, ze.crossOrigin = "anonymous";
    const Ce = on({ label: "editor.thumbnail" });
    try {
      const He = await new Promise((gt) => {
        let Tt = !1;
        const pt = (en) => {
          Tt || (Tt = !0, gt(en));
        };
        ze.addEventListener("loadedmetadata", () => pt(!0), { once: !0 }), ze.addEventListener("canplay", () => pt(!0), { once: !0 }), ze.addEventListener("error", () => pt(!1), { once: !0 }), ze.src = Ee, ze.load();
      });
      if (J.thumbnailJobId !== $e) return;
      const ae = Number(ze.videoWidth || 0), Ie = Number(ze.videoHeight || 0);
      if (!He || ae < 1 || Ie < 1) {
        J.thumbnailFailedSrcs.add(Ee);
        return;
      }
      const Ae = Math.max(0, Number(ze.duration || ue || 0)), Oe = 46, Ge = Math.max(72, Math.round(ae / Ie * Oe));
      Ce.width = Ge, Ce.height = Oe;
      const Ke = Ce.getContext("2d");
      if (!Ke) return;
      const Ue = [], vt = (gt) => new Promise((Tt) => {
        let pt = !1;
        const en = () => {
          pt || (pt = !0, Tt());
        };
        ze.addEventListener("seeked", en, { once: !0 }), ze.addEventListener("error", en, { once: !0 });
        try {
          ze.currentTime = gt;
        } catch {
          en();
        }
      });
      for (let gt = 0; gt < pe; gt += 1) {
        if (J.thumbnailJobId !== $e) return;
        const Tt = pe <= 1 ? 0 : gt / (pe - 1), pt = Ae > 0 ? Math.max(0, Math.min(Ae - Math.max(1e-3, 0.5 / Math.max(1, Number(Pe || 24))), Ae * Tt)) : 0;
        if (await vt(pt), J.thumbnailJobId !== $e) return;
        Ke.clearRect(0, 0, Ge, Oe), Ke.drawImage(ze, 0, 0, Ge, Oe), Ue.push({
          id: `thumb-${gt}`,
          src: Ce.toDataURL("image/jpeg", 0.72),
          time: pt,
          label: w(pt)
        });
      }
      if (J.thumbnailJobId !== $e) return;
      D.videoTransport.thumbnails = Ue, D.videoTransport.thumbnailCount = Ue.length || pe, hA(Ee, {
        thumbnails: Ue,
        thumbnailCount: Ue.length || pe,
        duration: Ae,
        fps: Pe
      });
    } finally {
      ze.removeAttribute("src"), ze.load(), Ai(Ce);
    }
  };
  fe.push(() => {
    O();
  });
  const k = i0({
    video: q instanceof HTMLVideoElement ? q : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (M) => g.requestFrame(M),
      cancelFrame: (M) => g.cancelFrame(M)
    },
    fps: C,
    span: () => {
      if (H) return de();
      const M = Math.round(Number(D.videoTransport.duration || 0) * C());
      return q.loop || !(M > 0) ? 1 / 0 : M;
    },
    loop: () => H,
    // Panorama Studio's background VIDEO is where its Clip range puts it (state.background).
    place: () => ve(),
    onFrame: (M) => {
      H ? ie(M) : T(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      oe() && (S.backgroundDirty = !0);
    },
    onChange: () => {
      T(), E.playing.value = k.playing, me(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  fe.push(() => k.dispose());
  const se = H && f instanceof HTMLVideoElement ? qd({
    video: f,
    onCapture: () => {
      var Pe;
      const M = Number(f.videoWidth || 0), ue = Number(f.videoHeight || 0);
      M < 1 || ue < 1 || (u.width = M, u.height = ue, (Pe = u.getContext("2d")) == null || Pe.drawImage(f, 0, 0), u.__panoFrameIdx += 1, he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  se && fe.push(() => se.dispose());
  const Z = H ? Pd({
    createImage: (M, ue) => {
      const Pe = new Image();
      return Pe.onload = ue, Pe.onerror = ue, Pe.src = M, Pe;
    },
    onLoad: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (q instanceof HTMLVideoElement) {
    const M = () => {
      te(), he({ cause: "frame_view", localOnly: !0 });
    }, ue = () => {
      T({
        hasAudio: D.videoTransport.hasAudio,
        muted: q.muted,
        volume: Number(q.volume ?? D.videoTransport.volume ?? 1)
      });
    }, Pe = () => {
      const Ee = q.dataset.panoSrc;
      Ee && (J.failedSrcs.add(Ee), te(), he());
    };
    for (const [Ee, Le] of [
      ["loadedmetadata", M],
      ["loadeddata", M],
      ["canplay", M],
      ["volumechange", ue],
      ["error", Pe]
    ])
      q.addEventListener(Ee, Le), fe.push(() => q.removeEventListener(Ee, Le));
  }
  function I(M) {
    return t.uiList(d, M);
  }
  function v(M) {
    return t.uiValue(d, M);
  }
  function V() {
    const M = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (al(M))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ue = B();
    return ue ? { videoKey: ue.videoKey, metaKey: ue.metaKey } : W === "stickers" || W === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function p() {
    const { metaKey: M } = V(), ue = v(M);
    return Array.isArray(ue) && ue.length > 0 && ue[0] && typeof ue[0] == "object" ? ue[0] : ue && typeof ue == "object" ? ue : null;
  }
  function m(M) {
    return M ? M instanceof HTMLVideoElement ? [
      String(M.currentSrc || M.src || ""),
      Number(M.videoWidth || 0),
      Number(M.videoHeight || 0)
    ].join("|") : M instanceof HTMLCanvasElement ? [
      "canvas",
      Number(M.width || 0),
      Number(M.height || 0),
      String(M.__panoFrameIdx || 0)
    ].join("|") : [
      String(M.currentSrc || M.src || ""),
      Number(M.naturalWidth || M.width || 0),
      Number(M.naturalHeight || M.height || 0)
    ].join("|") : "none";
  }
  function w(M) {
    const ue = Math.max(0, Math.floor(Number(M || 0))), Pe = Math.floor(ue / 60), Ee = ue % 60;
    return `${Pe}:${String(Ee).padStart(2, "0")}`;
  }
  function C() {
    return H ? y.timeline.fps : J.metaFps || 1e3;
  }
  function T(M = {}) {
    const ue = Number(M.duration ?? D.videoTransport.duration ?? 0), Pe = Math.max(1, Number(M.fps ?? D.videoTransport.fps ?? 24)), Ee = k.frame / C(), Le = Object.prototype.hasOwnProperty.call(M, "ready") ? !!M.ready : !!D.videoTransport.ready, $e = k.playing, ze = Object.prototype.hasOwnProperty.call(M, "visible") ? !!M.visible : !!D.videoTransport.visible, Ce = Object.prototype.hasOwnProperty.call(M, "muted") ? !!M.muted : !!(q instanceof HTMLVideoElement ? q.muted : D.videoTransport.muted), He = Number(
      Object.prototype.hasOwnProperty.call(M, "volume") ? M.volume : q instanceof HTMLVideoElement ? q.volume : D.videoTransport.volume
    ), ae = Object.prototype.hasOwnProperty.call(M, "hasAudio") ? !!M.hasAudio : ge(q), Ie = Object.prototype.hasOwnProperty.call(M, "loop") ? !!M.loop : !!D.videoTransport.loop;
    Object.assign(D.videoTransport, {
      ready: Le,
      playing: $e,
      visible: ze,
      loop: Ie,
      currentTime: Number.isFinite(Ee) ? Ee : 0,
      duration: Number.isFinite(ue) ? ue : 0,
      progressPct: ue > 1e-6 ? Math.max(0, Math.min(100, Ee / ue * 100)) : 0,
      currentTimeLabel: w(Ee),
      durationLabel: w(ue),
      frameCount: Math.max(0, Number(M.frameCount ?? D.videoTransport.frameCount ?? 0)),
      fps: Pe,
      hasAudio: ae,
      muted: Ce,
      volume: Math.max(0, Math.min(1, Number.isFinite(He) ? He : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(He) ? He : 1)) * 100),
      thumbnails: Array.isArray(M.thumbnails) ? M.thumbnails : D.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(M.thumbnailCount ?? D.videoTransport.thumbnailCount ?? pe))
    });
  }
  function U() {
    return !!(q instanceof HTMLVideoElement && !H && q.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function le() {
    if (!(q instanceof HTMLVideoElement) || !D.videoTransport.hasAudio) return;
    const M = !q.muted;
    q.muted = M, !M && Number(q.volume || 0) <= 0 && (q.volume = Math.max(0.01, Number(D.videoTransport.volume || 1))), T({
      hasAudio: D.videoTransport.hasAudio,
      muted: q.muted,
      volume: Number(q.volume ?? D.videoTransport.volume ?? 1)
    });
  }
  function G() {
    T({
      visible: U()
    });
  }
  function oe() {
    if (!(q instanceof HTMLVideoElement) || Number(q.videoWidth || 0) < 1 || Number(q.videoHeight || 0) < 1) return !1;
    const M = Number(q.videoWidth || 0), ue = Number(q.videoHeight || 0);
    (z.width !== M || z.height !== ue) && (z.width = M, z.height = ue);
    const Pe = z.getContext("2d");
    return Pe ? (Pe.clearRect(0, 0, M, ue), Pe.drawImage(q, 0, 0, M, ue), z.__panoFrameIdx = Number(z.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !k.showsVideo && Number(z.width || 0) > 0 && Number(z.height || 0) > 0 && Number(z.__panoFrameIdx || 0) > 0 ? z : q instanceof HTMLVideoElement && Number(q.videoWidth || 0) > 0 && Number(q.videoHeight || 0) > 0 && Number(q.readyState || 0) >= 2 ? q : null;
  }
  function L() {
    z.__panoFrameIdx = 0, S.backgroundDirty = !0;
  }
  function te() {
    if (!(q instanceof HTMLVideoElement)) return null;
    const { videoKey: M } = V(), ue = (B() || Ot(d, "background")) && I(M)[0] || null, Pe = l(ue), Ee = [Pe, t.linkedVideoFile(d, x())].filter(Boolean), Le = Ee.find((Ae) => !J.failedSrcs.has(Ae)) || "";
    J.videoFailed = !Le && Ee.length > 0;
    const $e = Le && Le === Pe ? p() : null;
    J.metaFps = Number($e == null ? void 0 : $e.fps) > 0 ? Number($e.fps) : 0;
    const ze = Math.max(1, Number(($e == null ? void 0 : $e.fps) || (H ? y.timeline.fps : 24))), Ce = q.dataset.panoSrc === Le && Number.isFinite(q.duration) ? q.duration : 0, He = Number(($e == null ? void 0 : $e.duration) || (($e == null ? void 0 : $e.frames) > 0 ? $e.frames / ze : Ce)), ae = Math.max(0, Number(($e == null ? void 0 : $e.frames) || Math.round(He * ze))), Ie = !!($e != null && $e.has_audio) || ge(q);
    return Le && q.dataset.panoSrc !== Le ? (q.pause(), L(), q.dataset.panoSrc = Le, q.loop = !H && !!D.videoTransport.loop, q.muted = !!D.videoTransport.muted, q.volume = Math.max(0, Math.min(1, Number(D.videoTransport.volume ?? 1))), q.src = Le, q.load(), k.setSource(!0), H || k.seek(0)) : !Le && q.getAttribute("src") && (q.pause(), q.removeAttribute("src"), delete q.dataset.panoSrc, q.load(), L(), O(), k.setSource(!1)), H || (q.loop = !!D.videoTransport.loop), Le && !H && J.thumbnailSrc !== Le && !J.thumbnailFailedSrcs.has(Le) && _(Le, He, ze), Le || O(), T({
      ready: !!Le,
      visible: !!Le && U(),
      duration: He,
      frameCount: ae,
      fps: ze,
      hasAudio: Ie,
      loop: !!q.loop,
      muted: !!q.muted,
      volume: Number(q.volume ?? D.videoTransport.volume ?? 1),
      thumbnailCount: D.videoTransport.thumbnailCount
    }), Le || null;
  }
  function we(M, ue = null) {
    return c(d, M, o, ue || (() => he()));
  }
  function Se(M = null) {
    return Ot(d, "external-sticker") ? we(Ri, M) : null;
  }
  function xe() {
    if (!Ot(d, "external-sticker")) return null;
    const M = I(ey)[0];
    if (!M || typeof M != "object") return null;
    const ue = I(Q0).map(l).filter(Boolean);
    if (ue.length) return { frames: ue, meta: M };
    const Pe = l(I(Z0)[0] || null);
    return Pe ? { src: Pe, meta: M } : null;
  }
  function Y() {
    return Ot(d, "external-sticker") ? xs(I) : null;
  }
  function ye() {
    const M = y.stickers.find(_e), ue = M ? xe() : null, Pe = ue ? xd(M.clip, r.frame, y.timeline.fps, ue.meta) : null;
    se.follow({ src: (ue == null ? void 0 : ue.src) || "", time: Pe, playing: k.advancing, fps: y.timeline.fps });
    const Ee = M ? $(M) : null, Le = ue != null && ue.frames ? Z.picture(ue.frames, Pe, ue.meta, Ee) : se.picture(u, Ee);
    return Le ? { media: Le, revision: m(Le), source: Nd(ue, Ee) } : null;
  }
  function F() {
    return !H || !Ot(d, "scene") ? null : yl(I("pano_scene_files"), I("pano_scene_meta"), l);
  }
  function ne() {
    return !H || !Ot(d, "external-sticker") ? null : yl(I("pano_sticker_files"), I("pano_sticker_meta"), l);
  }
  function $(M) {
    var ze;
    if (M && typeof M == "object" && (_e(M) || M.external === !0))
      return Se(() => {
        oi(d, "image-loaded");
      });
    const ue = H ? Q(M) : String(M && typeof M == "object" ? M.asset_id || M.assetId || "" : M || "");
    if (!ue) return null;
    const Pe = o.get(ue);
    if (Pe) return Pe;
    const Ee = H ? ml(M.source) : (ze = y.assets) == null ? void 0 : ze[ue], Le = a(Ee);
    if (!Le) return null;
    const $e = new Image();
    return Y0($e, Le), $e.onload = () => {
      q0($e, Le), he();
    }, $e.onerror = () => {
      X0($e, Le), he();
    }, $e.src = Le, o.set(ue, $e), $e;
  }
  function Q(M) {
    const { source: ue } = M;
    return ue.filename ? `file:${ue.storage}:${ue.subfolder}:${ue.filename}` : `sticker:${M.id}`;
  }
  function K() {
    if (W === "cutout") {
      const $e = N();
      if ($e) return $e;
      const ze = s(
        d,
        ["erp_image", "bg_erp"],
        () => he(),
        "background:cutout:erp_image|bg_erp"
      );
      return ze && !Gu(ze) ? ze : c(d, "pano_input_images", o, () => he()) || ze || null;
    }
    const M = N();
    if (M) return M;
    const ue = B(), Pe = ue || Ot(d, "background") ? c(d, (ue == null ? void 0 : ue.imageKey) ?? "pano_input_images", o, () => he()) : null;
    if (Pe && !Gu(Pe)) return Pe;
    if (q instanceof HTMLVideoElement && q.dataset.panoSrc) return q;
    if (ue) return Pe;
    const Ee = x();
    return s(d, Ee, () => he(), `background:${Ee.join("|")}`) || Pe || null;
  }
  function B() {
    return !ee || !Ot(d, "scene") ? null : Xd(I);
  }
  function j() {
    var M;
    return ((M = B()) == null ? void 0 : M.coverage) ?? $n(y.coverage);
  }
  function x() {
    if (B()) return [];
    if (W === "cutout") return ["erp_image", "bg_erp"];
    const M = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Ee) => String((Ee == null ? void 0 : Ee.name) || "")) : [], ue = M.includes("erp_image"), Pe = M.includes("bg_erp");
    return h && (ue || Pe) ? ue ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : W === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function re(M) {
    return M ? M instanceof HTMLImageElement ? !!M.complete && Number(M.naturalWidth || M.width || 0) > 0 && Number(M.naturalHeight || M.height || 0) > 0 : M instanceof HTMLVideoElement ? Number(M.videoWidth || 0) > 0 && Number(M.videoHeight || 0) > 0 && Number(M.readyState || 0) >= 2 : Number(M.width || M.naturalWidth || 0) > 0 && Number(M.height || M.naturalHeight || 0) > 0 : !1;
  }
  function ce() {
    if (n.failed) return { status: Jn, detail: "renderer" };
    if (!n.ready) return { status: ar, detail: "boot" };
    const M = K(), ue = J.videoFailed ? Jn : Hu(M, re), Pe = [];
    for (const Ee of ke()) {
      if ((Ee == null ? void 0 : Ee.visible) === !1) continue;
      const Le = $(Ee);
      Pe.push(Hu(Le, re));
    }
    return D2({
      presented: S.hasPresentedFrame,
      background: ue,
      stickers: Pe
    });
  }
  function be() {
    q instanceof HTMLVideoElement && q.pause(), fe.forEach((M) => {
      try {
        M();
      } catch {
      }
    });
  }
  return {
    connect(M) {
      ({
        backgroundVideoPlace: ve,
        isExternalSticker: _e,
        requestDraw: he,
        setTimelineFrame: ie,
        skyStickers: ke,
        syncTimeline: me,
        timelineSpanFrames: de
      } = M);
    },
    videoState: J,
    queueVideoTransportLayout: A,
    playback: k,
    portVideo: se,
    getNodeUiValue: v,
    getMediaRevisionToken: m,
    playbackFps: C,
    syncVideoTransportState: T,
    toggleVideoMuted: le,
    syncVideoTransportVisibility: G,
    refreshModalVideoSource: te,
    getStickerUiImage: we,
    getExternalStickerPreviewImage: Se,
    getPortMediaMeta: Y,
    followPortSticker: ye,
    getStickerImage: $,
    stickerImageKey: Q,
    getConnectedErpImage: K,
    backgroundCoverage: j,
    upstreamBackground: B,
    isDecodedImageReady: re,
    getStageImageStatus: ce,
    sceneFiles: F,
    stickerFiles: ne,
    disposeMediaSession: be
  };
}
function gA(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(r || 8));
  function a(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return a(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(c) {
      l(String(c || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const c = i - 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    redo() {
      const c = i + 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), h = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: h
      };
    },
    hydrate: a
  };
}
const yA = 80;
function sy(e) {
  return JSON.stringify(_S(e));
}
function bA(e) {
  return gA(yA, { entries: [sy(e)], index: 0 });
}
function ay(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function vA(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e;
  function he({ initial: me = !1 } = {}) {
    r || (E(), D(), ve(), me || g(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(sy(ee())), q()));
  }
  function ie(me) {
    var R, X, A;
    if (r) return;
    z();
    const de = me < 0 ? t.historyController.undo() : t.historyController.redo();
    if (q(), !de) return;
    const J = wS(i, de), pe = (R = i.timeline) == null ? void 0 : R.fps, fe = JSON.stringify((X = i.background) == null ? void 0 : X.clip);
    Object.keys(i).forEach((ge) => delete i[ge]), Object.assign(i, J.state), E(!1), D({ restored: !0 }), o && b(), o && i.timeline.fps !== pe ? S.seek(Math.round(t.frame * i.timeline.fps / pe)) : o && JSON.stringify(i.background.clip) !== fe && S.seek(t.frame), t.selectedId = ay(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((A = d()) == null ? void 0 : A.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), y(), n.backgroundDirty = !0, J.paintingChanged ? h() : f(), W(), _e(), c(), H({ cause: "cutout_frame" });
  }
  function ke() {
    var J, pe;
    const me = Array.isArray((J = t.historyController) == null ? void 0 : J.entries) ? t.historyController.entries : [], de = Number((pe = t.historyController) == null ? void 0 : pe.index);
    return {
      canUndo: !r && me.length > 1 && de > 0,
      canRedo: !r && me.length > 1 && de >= 0 && de < me.length - 1
    };
  }
  return {
    connect(me) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: h,
        playback: S,
        pruneUpstreamRecords: g,
        rebuildUpstreamWorking: b,
        releaseHiddenSelection: y,
        requestDraw: H,
        stopTimelinePlayback: z,
        storedEditorState: ee,
        syncCutoutShot: E,
        syncPaintUi: W,
        syncPortHandoff: D,
        syncUndoRedoButtons: q,
        syncUpstreamEdits: ve,
        updateSidePanel: _e
      } = me);
    },
    pushHistory: he,
    restoreHistory: ie,
    getHistoryCapabilities: ke
  };
}
function SA(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h, S, g, b;
  function y() {
    return s !== "stickers" ? i.shots : n ? [...H(), ...z()] : H();
  }
  function H() {
    return n ? i.stickers.filter((x) => x.placement === "sky") : i.stickers;
  }
  function z() {
    if (!n) return [];
    const x = b(), re = [...new Set(x.map((ce) => ce.origin.layer))];
    return x.filter((ce) => ce.placement === "sky").sort((ce, be) => re.indexOf(ce.origin.layer) - re.indexOf(be.origin.layer) || ce.z_index - be.z_index);
  }
  function ee(x) {
    return i.stickers.find((re) => re.id === x) || b().find((re) => re.id === x) || null;
  }
  function E(x) {
    return n && v(x);
  }
  function W(x) {
    return x.source.kind === "file" && !x.source.filename && !x.source.data_url;
  }
  function D(x) {
    if (!E(x)) return x;
    const re = Y(x) ? Ut(x) ? g(x) : h(x) : null;
    return Cd(x, r.frame, re && { width: re.naturalWidth || re.width, height: re.naturalHeight || re.height });
  }
  function q(x, re) {
    E(x) ? sg(x, r.frame, re) : Object.assign(x, re);
  }
  function ve() {
    const x = i.painting || (i.painting = ji(null));
    return Array.isArray(x.groups) || (x.groups = []), x.groups;
  }
  function _e(x = "paint") {
    var M, ue;
    const re = Array.isArray((ue = (M = i.painting) == null ? void 0 : M[x]) == null ? void 0 : ue.strokes) ? i.painting[x].strokes : [], ce = [], be = /* @__PURE__ */ new Set();
    for (const Pe of re) {
      const Ee = String((Pe == null ? void 0 : Pe.actionGroupId) || "").trim();
      !Ee || be.has(Ee) || (be.add(Ee), ce.push(Ee));
    }
    return ce;
  }
  function he() {
    return _e("paint");
  }
  function ie(x, re) {
    const ce = String(re || "").trim();
    return ce ? `${x === "mask" ? "mask" : "paint"}:${ce}` : "";
  }
  function ke(x) {
    const re = String(x || "").trim();
    return re ? `raster:${re}` : "";
  }
  function me(x) {
    const re = String(x || "").trim();
    if (!re) return "";
    const ce = re.match(/^raster:(.*)$/);
    return String(ce ? ce[1] || "" : re).trim();
  }
  function de(x, re = null) {
    const ce = String(x || "").trim();
    if (!ce) return { layerKind: "paint", actionGroupId: "" };
    const be = ce.match(/^(paint|mask):(.*)$/);
    return be ? { layerKind: be[1] === "mask" ? "mask" : "paint", actionGroupId: String(be[2] || "").trim() } : { layerKind: re === "mask" ? "mask" : "paint", actionGroupId: ce };
  }
  function J() {
    var re;
    let x = -1;
    for (const ce of H())
      x = Math.max(x, Number((ce == null ? void 0 : ce.z_index) || 0));
    for (const ce of ve())
      x = Math.max(x, Number((ce == null ? void 0 : ce.z_index) || 0));
    for (const ce of Array.isArray((re = i.painting) == null ? void 0 : re.raster_objects) ? i.painting.raster_objects : [])
      String((ce == null ? void 0 : ce.layerKind) || "paint") === "paint" && (x = Math.max(x, Number((ce == null ? void 0 : ce.z_index) || 0)));
    return x + 1;
  }
  function pe(x, re = null) {
    const ce = String(x || "").trim();
    if (!ce) return null;
    const be = ve();
    let M = be.find((ue) => String((ue == null ? void 0 : ue.actionGroupId) || "") === ce);
    return M ? re != null && (M.z_index = Math.max(0, Number(re || 0))) : (M = {
      id: ce,
      type: "strokeGroup",
      actionGroupId: ce,
      z_index: re == null ? J() : Math.max(0, Number(re || 0)),
      locked: !1,
      frame: null
    }, be.push(M)), M;
  }
  function fe(x) {
    if (!(x != null && x.centerUv)) return [];
    const re = Number(x.centerUv.u || 0), ce = Number(x.centerUv.v || 0), be = Number(x.halfW || 0), M = Number(x.halfH || 0);
    return [
      {
        u: ((re - be) % 1 + 1) % 1,
        v: Fe(ce - M, 0, 1)
      },
      {
        u: ((re + be) % 1 + 1) % 1,
        v: Fe(ce - M, 0, 1)
      },
      {
        u: ((re + be) % 1 + 1) % 1,
        v: Fe(ce + M, 0, 1)
      },
      {
        u: ((re - be) % 1 + 1) % 1,
        v: Fe(ce + M, 0, 1)
      }
    ];
  }
  function R() {
    const x = new Set(he()), ce = ve().filter((be) => x.has(String((be == null ? void 0 : be.actionGroupId) || "")));
    return x.forEach((be) => {
      ce.some((M) => String((M == null ? void 0 : M.actionGroupId) || "") === be) || ce.push({
        id: be,
        type: "strokeGroup",
        actionGroupId: be,
        z_index: J(),
        locked: !1,
        frame: null
      });
    }), ce.sort((be, M) => Number((be == null ? void 0 : be.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), i.painting.groups = ce, ce;
  }
  function X(x, re, ce) {
    var Ae;
    const be = (Oe) => (Number(Oe || 0) % 1 + 1) % 1, M = [];
    for (const Oe of ce) {
      const Ge = Oe == null ? void 0 : Oe.geometry, Ke = (Ge == null ? void 0 : Ge.geometryKind) === "lasso_fill" ? Ge == null ? void 0 : Ge.points : (Ge == null ? void 0 : Ge.processedPoints) || (Ge == null ? void 0 : Ge.rawPoints) || (Ge == null ? void 0 : Ge.points) || [];
      Array.isArray(Ke) && M.push(...Ke);
    }
    if (!M.length) return null;
    const ue = be(((Ae = M[0]) == null ? void 0 : Ae.u) || 0);
    let Pe = 0, Ee = 0;
    M.forEach((Oe) => {
      const Ge = be((Oe == null ? void 0 : Oe.u) || 0);
      Pe += ue + G(Ge, ue), Ee += Number((Oe == null ? void 0 : Oe.v) || 0);
    });
    const Le = (Pe / M.length % 1 + 1) % 1;
    let $e = 1 / 0, ze = -1 / 0, Ce = 1 / 0, He = -1 / 0;
    M.forEach((Oe) => {
      const Ge = be((Oe == null ? void 0 : Oe.u) || 0), Ke = G(Ge, Le);
      $e = Math.min($e, Ke), ze = Math.max(ze, Ke);
      const Ue = Number((Oe == null ? void 0 : Oe.v) || 0);
      Ce = Math.min(Ce, Ue), He = Math.max(He, Ue);
    });
    const ae = ce.reduce((Oe, Ge) => {
      const Ke = l(String((Ge == null ? void 0 : Ge.toolKind) || "pen")), Ue = Dn[Ke] || Dn[Dr], vt = Math.max(1, Number((Ge == null ? void 0 : Ge.size) || 10)) * Math.max(0.1, Number((Ue == null ? void 0 : Ue.sizeScale) ?? 1));
      return Math.max(Oe, vt);
    }, 0), Ie = Math.max(35e-4, ae / 2048);
    return {
      centerUv: { u: ((Le + ($e + ze) * 0.5) % 1 + 1) % 1, v: Fe((Ce + He) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (ze - $e) * 0.5 + Ie,
      halfH: (He - Ce) * 0.5 + Ie,
      uvPad: Ie
    };
  }
  function A(x, re, ce) {
    const be = String(x || "").trim();
    if (!be) return null;
    const M = ve().find((Pe) => String((Pe == null ? void 0 : Pe.actionGroupId) || "") === be);
    if (!M) return null;
    const ue = ce || T(be, re);
    return M.frame = X(be, re, ue), M.frame;
  }
  function ge() {
    var be;
    const x = H().map((M) => ({
      type: "sticker",
      id: String((M == null ? void 0 : M.id) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    })), re = R().map((M) => ({
      type: "strokeGroup",
      id: String((M == null ? void 0 : M.id) || (M == null ? void 0 : M.actionGroupId) || ""),
      actionGroupId: String((M == null ? void 0 : M.actionGroupId) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    })), ce = (Array.isArray((be = i.painting) == null ? void 0 : be.raster_objects) ? i.painting.raster_objects : []).filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") === "paint").map((M) => ({
      type: "rasterObject",
      id: String((M == null ? void 0 : M.id) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    }));
    return [...x, ...re, ...ce].sort((M, ue) => Number(M.z_index || 0) - Number(ue.z_index || 0));
  }
  function P(x = !0) {
    var ce, be, M, ue, Pe, Ee;
    const re = ge().filter((Le) => Le.type === "strokeGroup").map((Le) => String(Le.actionGroupId || "")).filter((Le) => !!Le);
    if (x) {
      const Le = String(((be = (ce = r.interaction) == null ? void 0 : ce.stroke) == null ? void 0 : be.actionGroupId) || "").trim(), $e = String(((ue = (M = r.interaction) == null ? void 0 : M.stroke) == null ? void 0 : ue.layerKind) || "").trim(), ze = String(((Ee = (Pe = r.interaction) == null ? void 0 : Pe.stroke) == null ? void 0 : Ee.toolKind) || "").trim();
      Le && $e === "paint" && ze !== "eraser" && !re.includes(Le) && re.push(Le);
    }
    return re;
  }
  function O(x = !0) {
    var Ee, Le, $e, ze, Ce, He;
    const re = ge();
    if (!x) return re;
    const ce = String(((Le = (Ee = r.interaction) == null ? void 0 : Ee.stroke) == null ? void 0 : Le.actionGroupId) || "").trim(), be = String(((ze = ($e = r.interaction) == null ? void 0 : $e.stroke) == null ? void 0 : ze.layerKind) || "").trim(), M = String(((He = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : He.toolKind) || "").trim();
    if (!ce || be !== "paint" || M === "eraser" || re.some((ae) => ae.type === "strokeGroup" && String(ae.actionGroupId || "") === ce))
      return re;
    const ue = f();
    let Pe = re.reduce((ae, Ie) => Math.max(ae, Number((Ie == null ? void 0 : Ie.z_index) || 0)), -1) + 1;
    return ue && C(ue) && String(ue.actionGroupId || "") === ce && (Pe = Number(ue.z_index || 0)), [
      ...re,
      {
        type: "strokeGroup",
        id: ce,
        actionGroupId: ce,
        z_index: Pe,
        item: null
      }
    ].sort((ae, Ie) => Number((ae == null ? void 0 : ae.z_index) || 0) - Number((Ie == null ? void 0 : Ie.z_index) || 0));
  }
  function _() {
    return ve().slice().sort((x, re) => Number((x == null ? void 0 : x.z_index) || 0) - Number((re == null ? void 0 : re.z_index) || 0)).map((x) => w(ie("paint", (x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || ""))).filter(Boolean);
  }
  function k() {
    var x;
    return (Array.isArray((x = i.painting) == null ? void 0 : x.raster_objects) ? i.painting.raster_objects : []).filter((re) => String((re == null ? void 0 : re.layerKind) || "paint") === "paint").slice().sort((re, ce) => Number((re == null ? void 0 : re.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0)).map((re) => p(ke((re == null ? void 0 : re.id) || ""))).filter(Boolean);
  }
  function se() {
    return Array.isArray(i.stickers) ? H() : [];
  }
  function Z() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...se(), ...z()];
  }
  function I(x) {
    return !!x && Array.isArray(i.shots) && i.shots.includes(x);
  }
  function v(x) {
    return !!x && (Array.isArray(i.stickers) && i.stickers.includes(x) || Ut(x));
  }
  function V() {
    var x;
    return Array.isArray((x = i.painting) == null ? void 0 : x.raster_objects) ? i.painting.raster_objects : [];
  }
  function p(x) {
    const re = me(x);
    if (!re) return null;
    const ce = V().find((be) => String((be == null ? void 0 : be.id) || "").trim() === re);
    return !ce || String((ce == null ? void 0 : ce.layerKind) || "paint") !== "paint" ? null : {
      ...ce,
      id: ke(re),
      type: "rasterObject",
      rasterObjectId: re
    };
  }
  function m(x) {
    if (!x || typeof x != "object" || String(x.type || "") !== "rasterObject") return !1;
    const re = me(x.rasterObjectId || x.id || "");
    return !!re && !!p(ke(re));
  }
  function w(x) {
    const re = de(x), ce = String(re.actionGroupId || "").trim();
    if (!ce) return null;
    const be = ve().find((M) => String((M == null ? void 0 : M.id) || (M == null ? void 0 : M.actionGroupId) || "") === ce || String((M == null ? void 0 : M.actionGroupId) || "") === ce);
    return be ? {
      ...be,
      id: ie("paint", ce),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: ce
    } : null;
  }
  function C(x) {
    if (!x || typeof x != "object" || String(x.type || "") !== "strokeGroup") return !1;
    const re = String(x.actionGroupId || "").trim(), ce = String(x.layerKind || "paint").trim() || "paint";
    return !!re && !!w(ie(ce, re));
  }
  function T(x, re = null) {
    const ce = de(x, re), be = String(ce.actionGroupId || "").trim();
    return be ? d(ce.layerKind).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() === be) : [];
  }
  function U(x, re = "paint") {
    const ce = String(x || "").trim(), M = `geomv5:${String(re || "paint").trim() || "paint"}:${ce}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ue = a(), Pe = String((ue == null ? void 0 : ue.id) || ""), Ee = ue ? c(ue) : null;
      return `${M}:frame:${Pe}:${Math.round(Number((ue == null ? void 0 : ue.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ue == null ? void 0 : ue.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((Ee == null ? void 0 : Ee.x) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.y) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.w) || 0))}:${Math.round(Number((Ee == null ? void 0 : Ee.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function le(x, re, ce) {
    return !x || typeof x != "object" ? x : {
      ...x,
      u: ((Number(x.u || 0) + Number(re || 0)) % 1 + 1) % 1,
      v: Fe(Number(x.v || 0) + Number(ce || 0), 0, 1)
    };
  }
  function G(x, re) {
    let ce = Number(x || 0) - Number(re || 0);
    for (; ce > 0.5; ) ce -= 1;
    for (; ce < -0.5; ) ce += 1;
    return ce;
  }
  function oe(x, re = null, ce = null) {
    var $e;
    const be = de(x, re), M = Array.isArray(ce) ? ce : T(be.actionGroupId, be.layerKind), ue = [];
    if (M.forEach((ze) => {
      const Ce = (ze == null ? void 0 : ze.geometry) || null, He = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(He) && ue.push(...He);
    }), !ue.length) return { u: 0.5, v: 0.5 };
    const Pe = Number((($e = ue[0]) == null ? void 0 : $e.u) || 0);
    let Ee = 0, Le = 0;
    return ue.forEach((ze) => {
      Ee += Pe + G(Number((ze == null ? void 0 : ze.u) || 0), Pe), Le += Number((ze == null ? void 0 : ze.v) || 0);
    }), {
      u: (Ee / ue.length % 1 + 1) % 1,
      v: Fe(Le / ue.length, 0, 1)
    };
  }
  function N(x, re, ce = 1, be = 0) {
    if (!x || typeof x != "object") return x;
    const M = Number((re == null ? void 0 : re.u) || 0), ue = Number((re == null ? void 0 : re.v) || 0), Pe = G(Number(x.u || 0), M), Ee = Number(x.v || 0) - ue, Le = Number(be || 0) * Nr, $e = Math.cos(Le), ze = Math.sin(Le), Ce = Math.max(0.02, Number(ce || 1)), He = (Pe * $e - Ee * ze) * Ce, ae = (Pe * ze + Ee * $e) * Ce;
    return {
      ...x,
      u: ((M + He) % 1 + 1) % 1,
      v: Fe(ue + ae, 0, 1)
    };
  }
  function L(x, re, ce, be = null, M = null, ue = null) {
    const Pe = de(x, M), Ee = String(Pe.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Le = d(Pe.layerKind), $e = Array.isArray(be) ? new Map(be.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let ze = !1;
    if (Le.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== Ee) return;
      const He = ($e == null ? void 0 : $e.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, ae = Ce == null ? void 0 : Ce.geometry, Ie = He == null ? void 0 : He.geometry;
      !ae || !Ie || (Array.isArray(Ie.points) && (ae.points = Ie.points.map((Ae) => le(Ae, re, ce)), ze = !0), Array.isArray(Ie.rawPoints) && (ae.rawPoints = Ie.rawPoints.map((Ae) => le(Ae, re, ce)), ze = !0), Array.isArray(Ie.processedPoints) && (ae.processedPoints = Ie.processedPoints.map((Ae) => le(Ae, re, ce)), ze = !0));
    }), ze && ue) {
      const Ce = ve().find((He) => String((He == null ? void 0 : He.actionGroupId) || "") === Ee);
      Ce && (Ce.frame = null);
    }
    return ze;
  }
  function te(x, re = 1, ce = 0, be = null, M = null, ue = null) {
    const Pe = de(x, M), Ee = String(Pe.actionGroupId || "").trim();
    if (!Ee) return !1;
    const Le = d(Pe.layerKind), $e = Array.isArray(be) ? be : T(Ee, Pe.layerKind), ze = Array.isArray($e) ? new Map($e.map((ae) => [String((ae == null ? void 0 : ae.id) || ""), ae])) : null, Ce = (ue == null ? void 0 : ue.centerUv) ?? oe(Ee, Pe.layerKind, $e);
    let He = !1;
    if (Le.forEach((ae) => {
      if (String((ae == null ? void 0 : ae.actionGroupId) || "").trim() !== Ee) return;
      const Ie = (ze == null ? void 0 : ze.get(String((ae == null ? void 0 : ae.id) || ""))) || ae, Ae = ae == null ? void 0 : ae.geometry, Oe = Ie == null ? void 0 : Ie.geometry;
      !Ae || !Oe || (Array.isArray(Oe.points) && (Ae.points = Oe.points.map((Ge) => N(Ge, Ce, re, ce)), He = !0), Array.isArray(Oe.rawPoints) && (Ae.rawPoints = Oe.rawPoints.map((Ge) => N(Ge, Ce, re, ce)), He = !0), Array.isArray(Oe.processedPoints) && (Ae.processedPoints = Oe.processedPoints.map((Ge) => N(Ge, Ce, re, ce)), He = !0));
    }), He && ue) {
      const ae = ve().find((Ie) => String((Ie == null ? void 0 : Ie.actionGroupId) || "") === Ee);
      ae && (ae.frame = null);
    }
    return He;
  }
  function we(x, re, ce, be = null) {
    const M = me(x);
    if (!M) return !1;
    const ue = V().find((ze) => String((ze == null ? void 0 : ze.id) || "").trim() === M);
    if (!ue) return !1;
    const Pe = be && typeof be == "object" ? be : ue, Ee = (Pe == null ? void 0 : Pe.transform) || {}, Le = Number(Ee.du || 0) + Number(re || 0), $e = Fe(Number(Ee.dv || 0) + Number(ce || 0), -1, 1);
    return ue.transform || (ue.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ue.transform.du = Le, ue.transform.dv = $e, !0;
  }
  function Se(x, re = 1, ce = null) {
    const be = me(x);
    if (!be) return !1;
    const M = V().find(($e) => String(($e == null ? void 0 : $e.id) || "").trim() === be);
    if (!M) return !1;
    const ue = ce && typeof ce == "object" ? ce : M, Pe = (ue == null ? void 0 : ue.transform) || {}, Ee = Math.max(0.01, Number(Pe.scale || 1)), Le = Fe(Ee * Math.max(0.01, Number(re || 1)), 0.01, 100);
    return M.transform || (M.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), M.transform.scale = Le, !0;
  }
  function xe() {
    return J();
  }
  function Y(x) {
    var re;
    return !x || typeof x != "object" ? !1 : o ? ((re = x.source) == null ? void 0 : re.kind) === "port" : String(x.id || "") === df || String(x.source_kind || "") === $2;
  }
  function ye(x) {
    return !!(x && typeof x == "object" && x.visible === !1);
  }
  function F(x) {
    return Y(x) && ye(x) ? Mg : 1;
  }
  function ne(x, re, ce = 1, be = 0) {
    if (!x || typeof x != "object") return x;
    const M = Number((re == null ? void 0 : re.u) || 0), ue = Number((re == null ? void 0 : re.v) || 0), Pe = G(Number(x.u || 0), M), Ee = Number(x.v || 0) - ue, Le = Math.max(0.02, Number(ce || 1)), $e = Number(be || 0) * Nr, ze = Math.cos($e), Ce = Math.sin($e), He = Pe / Le, ae = Ee / Le, Ie = He * ze + ae * Ce, Ae = -He * Ce + ae * ze;
    return {
      ...x,
      u: ((M + Ie) % 1 + 1) % 1,
      v: ue + Ae
    };
  }
  function $(x) {
    const re = (x == null ? void 0 : x.bbox) || null, ce = (x == null ? void 0 : x.transform) || {};
    return re ? {
      u: (((Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5 + Number(ce.du || 0)) % 1 + 1) % 1,
      v: Fe((Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5 + Number(ce.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Q(x) {
    var Le, $e, ze, Ce;
    const re = (x == null ? void 0 : x.bbox) || null;
    if (!re) return [];
    const ce = {
      u: (Number(re.u0 || 0) + Number(re.u1 || 0)) * 0.5,
      v: (Number(re.v0 || 0) + Number(re.v1 || 0)) * 0.5
    }, be = Math.max(0.01, Number(((Le = x == null ? void 0 : x.transform) == null ? void 0 : Le.scale) || 1)), M = Number((($e = x == null ? void 0 : x.transform) == null ? void 0 : $e.rot_deg) || 0), ue = Number(((ze = x == null ? void 0 : x.transform) == null ? void 0 : ze.du) || 0), Pe = Number(((Ce = x == null ? void 0 : x.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(re.u0 || 0), v: Number(re.v0 || 0) },
      { u: Number(re.u1 || 0), v: Number(re.v0 || 0) },
      { u: Number(re.u1 || 0), v: Number(re.v1 || 0) },
      { u: Number(re.u0 || 0), v: Number(re.v1 || 0) }
    ].map((He) => le(N(He, ce, be, M), ue, Pe));
  }
  function K(x) {
    const re = me((x == null ? void 0 : x.rasterObjectId) || (x == null ? void 0 : x.id) || ""), ce = (x == null ? void 0 : x.transform) || {}, be = (x == null ? void 0 : x.bbox) || {}, M = `${re}:${r.mode}:${u()}:${be.u0}:${be.v0}:${be.u1}:${be.v1}:${ce.du}:${ce.dv}:${ce.rot_deg}:${ce.scale}`;
    if (r.mode === "frame") {
      const ue = a(), Pe = ue ? c(ue) : null;
      return `${M}:frame:${String((ue == null ? void 0 : ue.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function B(x) {
    const re = String((x == null ? void 0 : x.id) || ""), ce = I(x) ? "frame" : v(x) ? "sticker" : "item", be = D(x), M = [
      ce,
      re,
      r.mode,
      Number((be == null ? void 0 : be.yaw_deg) || 0).toFixed(4),
      Number((be == null ? void 0 : be.pitch_deg) || 0).toFixed(4),
      Number((be == null ? void 0 : be.hFOV_deg) || 0).toFixed(4),
      Number((be == null ? void 0 : be.vFOV_deg) || 0).toFixed(4),
      Number((be == null ? void 0 : be.rot_deg) || 0).toFixed(4),
      Number((be == null ? void 0 : be.roll_deg) || 0).toFixed(4),
      Vr(be),
      E(x) && S(x)
    ].join(":");
    if (r.mode === "frame") {
      const ue = a(), Pe = ue ? c(ue) : null;
      return `${M}:frame:${String((ue == null ? void 0 : ue.id) || "")}:${Math.round(Number((Pe == null ? void 0 : Pe.x) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.y) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.w) || 0))}:${Math.round(Number((Pe == null ? void 0 : Pe.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function j() {
    ge().forEach((re, ce) => {
      re.type === "sticker" && re.item && (re.item.z_index = ce), re.type === "strokeGroup" && re.item && (re.item.z_index = ce), re.type === "rasterObject" && re.item && (re.item.z_index = ce);
    });
  }
  return {
    connect(x) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: h,
        sceneStickerShown: S,
        upstreamStickerImage: g,
        upstreamStickers: b
      } = x);
    },
    getList: y,
    skyStickers: H,
    upstreamSkyStickers: z,
    stickerById: ee,
    isSceneSticker: E,
    isUploadingSticker: W,
    poseOf: D,
    writePose: q,
    getPaintingGroupList: ve,
    makeStrokeGroupSelectionId: ie,
    makeRasterObjectSelectionId: ke,
    parseRasterObjectSelectionId: me,
    ensurePaintingGroupEntry: pe,
    getFrameCornersUv: fe,
    ensureGroupFrame: A,
    getDisplayListObjects: ge,
    getOrderedPaintGroupIds: P,
    getOrderedDisplayListObjects: O,
    getSelectableStrokeGroupItems: _,
    getSelectableRasterObjectItems: k,
    cutoutStickers: se,
    getCutoutSelectableItems: Z,
    isShotItem: I,
    isStickerItem: v,
    getRasterObjectList: V,
    getRasterObjectItem: p,
    isRasterObjectItem: m,
    getStrokeGroupItem: w,
    isStrokeGroupItem: C,
    getStrokeGroupStrokes: T,
    getStrokeGeomCacheKey: U,
    shortestWrappedDelta: G,
    getStrokeGroupCenterUv: oe,
    applyStrokeGroupOffset: L,
    applyStrokeGroupTransform: te,
    applyRasterObjectOffset: we,
    applyRasterObjectTransform: Se,
    getNextStickerZIndex: xe,
    isExternalSticker: Y,
    isStickerHidden: ye,
    getStickerDisplayAlpha: F,
    inverseTransformErpPointAround: ne,
    getRasterObjectCenterUv: $,
    getRasterObjectTransformedErpPoints: Q,
    getRasterObjectGeomCacheKey: K,
    getSceneItemGeomCacheKey: B,
    normalizeDisplayZIndices: j
  };
}
function _A(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: a,
    type: l
  } = e;
  let c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _;
  function k() {
    const K = String(t.selectedId || "");
    if (!K) return null;
    const B = E(K);
    if (B) return B;
    const j = H(K);
    return j || (o ? S().find((x) => String((x == null ? void 0 : x.id) || "") === K) || null : b().find((x) => String((x == null ? void 0 : x.id) || "") === K) || null);
  }
  function se() {
    const K = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], B = [], j = /* @__PURE__ */ new Set();
    return K.forEach((x) => {
      const re = String(x || "").trim();
      if (!re || j.has(re)) return;
      j.add(re);
      const ce = re === String(t.selectedId || "") ? k() : E(re) || H(re) || (o ? S().find((be) => String((be == null ? void 0 : be.id) || "") === re) : b().find((be) => String((be == null ? void 0 : be.id) || "") === re));
      ce && B.push(ce);
    }), B;
  }
  function Z(K = null) {
    const B = Array.isArray(K) ? K : se();
    if (!B || B.length < 2) return null;
    const j = B.map((Pe) => J(Pe)).filter((Pe) => (Pe == null ? void 0 : Pe.visible) && Array.isArray(Pe.corners) && Pe.corners.length);
    if (!j.length) return null;
    const x = j.flatMap((Pe) => Pe.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.x) || 0))), re = j.flatMap((Pe) => Pe.corners.map((Ee) => Number((Ee == null ? void 0 : Ee.y) || 0))), ce = Math.min(...x), be = Math.max(...x), M = Math.min(...re), ue = Math.max(...re);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ce + be) * 0.5, y: (M + ue) * 0.5 },
      corners: [
        { x: ce, y: M },
        { x: be, y: M },
        { x: be, y: ue },
        { x: ce, y: ue }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ce + be) * 0.5, y: M, a: { x: ce, y: M }, b: { x: be, y: M } },
        { edge: "right", x: be, y: (M + ue) * 0.5, a: { x: be, y: M }, b: { x: be, y: ue } },
        { edge: "bottom", x: (ce + be) * 0.5, y: ue, a: { x: be, y: ue }, b: { x: ce, y: ue } },
        { edge: "left", x: ce, y: (M + ue) * 0.5, a: { x: ce, y: ue }, b: { x: ce, y: M } }
      ],
      rotateStemBase: { x: (ce + be) * 0.5, y: M },
      rotateHandle: { x: (ce + be) * 0.5, y: M - 30 }
    };
  }
  function I(K) {
    const B = String((K == null ? void 0 : K.id) || "").trim();
    return !!B && Array.isArray(t.selectedIds) && t.selectedIds.includes(B);
  }
  function v() {
    const K = k();
    return K ? ke(K) || q(K) ? "stroke" : _e(K) ? "frame" : "image" : null;
  }
  function V(K) {
    if (!K || typeof K != "object") return !1;
    if (ke(K)) {
      const B = String(K.actionGroupId || K.id || "").trim(), j = y().find((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() === B);
      return (j == null ? void 0 : j.locked) === !0;
    }
    if (q(K)) {
      const B = fe(K.rasterObjectId || K.id || ""), j = z().find((x) => String((x == null ? void 0 : x.id) || "").trim() === B);
      return (j == null ? void 0 : j.locked) === !0;
    }
    return Ut(K) && !wl(K) ? !0 : K.locked === !0;
  }
  function p(K = null) {
    const B = Array.isArray(K) ? K : se();
    return B.length > 0 && B.every((j) => V(j));
  }
  function m(K, B) {
    const j = B === !0;
    if (!K || typeof K != "object") return !1;
    if (ke(K)) {
      const x = String(K.actionGroupId || K.id || "").trim(), re = y().find((ce) => String((ce == null ? void 0 : ce.actionGroupId) || (ce == null ? void 0 : ce.id) || "").trim() === x);
      return !re || re.locked === j ? !1 : (re.locked = j, !0);
    }
    if (q(K)) {
      const x = fe(K.rasterObjectId || K.id || ""), re = z().find((ce) => String((ce == null ? void 0 : ce.id) || "").trim() === x);
      return !re || re.locked === j ? !1 : (re.locked = j, !0);
    }
    return K.locked === j || Ut(K) && !wl(K) ? !1 : (K.locked = j, !0);
  }
  function w() {
    if (r) return;
    const K = se();
    if (!K.length) return;
    const B = !p(K);
    let j = !1;
    K.forEach((x) => {
      m(x, B) && (j = !0);
    }), j && (X(), d(), O(), _(), A());
  }
  function C(K) {
    Y(), a.selection = null, t.selectedId = (K == null ? void 0 : K.id) || null, t.selectedIds = K != null && K.id ? [K.id] : [], K && ie(K) && !Ut(K) ? s.active.selected_sticker_id = K.id || null : s.active.selected_sticker_id = null, K && _e(K) ? s.active.selected_shot_id = K.id || null : K ? _e(K) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function T(K, B = null) {
    const j = [], x = /* @__PURE__ */ new Set();
    (Array.isArray(K) ? K : []).forEach((be) => {
      const M = String((be == null ? void 0 : be.id) || "").trim();
      !M || x.has(M) || (x.add(M), j.push(M));
    }), t.selectedIds = j, Y(), a.selection = null;
    const re = String(B || "").trim();
    t.selectedId = re && j.includes(re) ? re : j[j.length - 1] || null;
    const ce = k();
    s.active.selected_sticker_id = ce && ie(ce) && !Ut(ce) && ce.id || null, ce && _e(ce) ? s.active.selected_shot_id = ce.id || null : j.length || (s.active.selected_shot_id = null);
  }
  function U() {
    const K = (Array.isArray(s.shots) ? s.shots : []).map((j, x) => ({
      kind: "frame",
      item: j,
      label: String((j == null ? void 0 : j.label) || `Frame ${x + 1}`)
    })), B = f().map((j, x) => {
      var ce, be;
      const re = D(j) ? String(j.id || df) : String(((be = (ce = s.assets) == null ? void 0 : ce[j.asset_id]) == null ? void 0 : be.name) || j.asset_id || j.id || `Image ${x + 1}`);
      return {
        kind: "image",
        item: j,
        label: re
      };
    });
    return [...K, ...B];
  }
  function le(K) {
    return K === "frame" ? We.camera : K === "stroke" ? We.paintbrush_vertical_tool : We.image;
  }
  function G(K) {
    return !K || !K.item ? {
      label: String((K == null ? void 0 : K.label) || ""),
      icon: null
    } : {
      label: String(K.label || ""),
      icon: le(K.kind)
    };
  }
  function oe() {
    if (r) return;
    const K = k();
    !K || !D(K) || (K.visible = he(K), ne(), me(), X(), d(), _(), O(), A());
  }
  function N() {
    if (r || l !== "stickers") return;
    const K = k();
    if (!K || !D(K)) return;
    const B = K.initial_pose;
    if (!B || typeof B != "object") return;
    K.yaw_deg = Number(B.yaw_deg ?? K.yaw_deg ?? 0), K.pitch_deg = Number(B.pitch_deg ?? K.pitch_deg ?? 0), K.hFOV_deg = Number(B.hFOV_deg ?? K.hFOV_deg ?? 30);
    const j = ee(Ri, () => {
      A();
    });
    j && (j.complete || j.naturalWidth || j.width) ? K.vFOV_deg = u(
      Number(B.hFOV_deg ?? K.hFOV_deg ?? 30),
      Number(j.naturalWidth || j.width || 1),
      Number(j.naturalHeight || j.height || 1)
    ) : K.vFOV_deg = Number(B.vFOV_deg ?? K.vFOV_deg ?? 30), K.rot_deg = Number(B.rot_deg ?? K.rot_deg ?? 0), X(), d(), _(), O(), A();
  }
  function L(K) {
    if (!K || !D(K)) return null;
    const B = K.initial_pose;
    if (!B || typeof B != "object") return null;
    const j = {
      yaw_deg: Number(B.yaw_deg ?? K.yaw_deg ?? 0),
      pitch_deg: Number(B.pitch_deg ?? K.pitch_deg ?? 0),
      hFOV_deg: Number(B.hFOV_deg ?? K.hFOV_deg ?? 30),
      vFOV_deg: Number(B.vFOV_deg ?? K.vFOV_deg ?? 30),
      rot_deg: Number(B.rot_deg ?? K.rot_deg ?? 0)
    }, x = ee(Ri, () => {
      A();
    });
    return x && (x.complete || x.naturalWidth || x.width) && (j.vFOV_deg = u(
      j.hFOV_deg,
      Number(x.naturalWidth || x.width || 1),
      Number(x.naturalHeight || x.height || 1)
    )), j;
  }
  function te() {
    const K = k();
    if (!K || !D(K)) return !1;
    const B = L(K);
    if (!B) return !1;
    const j = (x, re) => Math.abs(Number(x || 0) - Number(re || 0)) <= 1e-4;
    return !(j(K.yaw_deg, B.yaw_deg) && j(K.pitch_deg, B.pitch_deg) && j(K.hFOV_deg, B.hFOV_deg) && j(K.vFOV_deg, B.vFOV_deg) && j(K.rot_deg, B.rot_deg));
  }
  function we(K = {}) {
    const j = K.preservePanelValues !== !1 ? R(k()) : null;
    j && (t.panelLastValues = {
      yaw_deg: Number(j.yaw_deg || 0),
      pitch_deg: Number(j.pitch_deg || 0),
      hFOV_deg: Number(j.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(j.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(j.rot_deg || 0),
      roll_deg: Number(j.roll_deg || 0),
      aspect_id: Vr(j)
    }), t.selectedId = null, t.selectedIds = [], Y(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function Se() {
    if (!i || !t.worldSelectedId) return null;
    const K = P(t.worldSelectedId);
    return (K == null ? void 0 : K.placement) === "world" ? K : null;
  }
  function xe(K) {
    C(null), t.worldSelectedId = K, n.backgroundDirty = !0;
  }
  function Y() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function ye(K) {
    return !!K && !r && !V(K);
  }
  function F() {
    if (l !== "cutout") return;
    const K = h();
    K && (t.selectedId = String(K.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function ne() {
    var B;
    const K = k();
    (ve(K) && !ge(K) || t.selectedId === Id && W() && !c() || v() === "stroke" && !pe()) && C(null), ((B = Se()) == null ? void 0 : B.visible) === !1 && Y();
  }
  function $() {
    if (r) return;
    const K = se();
    if (!k() || K.length === 0 || K.some(Ut) || K.some((M) => V(M))) return;
    de();
    const j = g(), x = new Set(K.map((M) => ie(M) ? `sticker:${String(M.id || "")}` : q(M) ? `rasterObject:${fe(M.rasterObjectId || M.id || "")}` : `strokeGroup:${String(M.actionGroupId || M.id || "")}`)), re = [], ce = [];
    if (j.forEach((M) => {
      var Pe, Ee;
      const ue = M.type === "sticker" ? `sticker:${String(((Pe = M.item) == null ? void 0 : Pe.id) || "")}` : M.type === "rasterObject" ? `rasterObject:${String(((Ee = M.item) == null ? void 0 : Ee.id) || M.id || "")}` : `strokeGroup:${String(M.actionGroupId || "")}`;
      x.has(ue) ? re.push(M) : ce.push(M);
    }), !re.length || re[re.length - 1] === j[j.length - 1]) return;
    [...ce, ...re].forEach((M, ue) => {
      M.type === "sticker" && M.item && (M.item.z_index = ue), M.type === "strokeGroup" && M.item && (M.item.z_index = ue), M.type === "rasterObject" && M.item && (M.item.z_index = ue);
    }), me(), X(), d(), O(), A();
  }
  function Q() {
    if (r) return;
    const K = se();
    if (!k() || K.length === 0 || K.some(Ut) || K.some((M) => V(M))) return;
    de();
    const j = g(), x = new Set(K.map((M) => ie(M) ? `sticker:${String(M.id || "")}` : q(M) ? `rasterObject:${fe(M.rasterObjectId || M.id || "")}` : `strokeGroup:${String(M.actionGroupId || M.id || "")}`)), re = [], ce = [];
    if (j.forEach((M) => {
      var Pe, Ee;
      const ue = M.type === "sticker" ? `sticker:${String(((Pe = M.item) == null ? void 0 : Pe.id) || "")}` : M.type === "rasterObject" ? `rasterObject:${String(((Ee = M.item) == null ? void 0 : Ee.id) || M.id || "")}` : `strokeGroup:${String(M.actionGroupId || "")}`;
      x.has(ue) ? re.push(M) : ce.push(M);
    }), !re.length || re[0] === j[0]) return;
    [...re, ...ce].forEach((M, ue) => {
      M.type === "sticker" && M.item && (M.item.z_index = ue), M.type === "strokeGroup" && M.item && (M.item.z_index = ue), M.type === "rasterObject" && M.item && (M.item.z_index = ue);
    }), me(), X(), d(), O(), A();
  }
  return {
    connect(K) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: h,
        getCutoutSelectableItems: S,
        getDisplayListObjects: g,
        getList: b,
        getPaintingGroupList: y,
        getRasterObjectItem: H,
        getRasterObjectList: z,
        getStickerUiImage: ee,
        getStrokeGroupItem: E,
        hasCamera: W,
        isExternalSticker: D,
        isRasterObjectItem: q,
        isSceneSticker: ve,
        isShotItem: _e,
        isStickerHidden: he,
        isStickerItem: ie,
        isStrokeGroupItem: ke,
        markObjectVisualsDirty: me,
        normalizeDisplayZIndices: de,
        objectGeom: J,
        paintingShown: pe,
        parseRasterObjectSelectionId: fe,
        poseOf: R,
        pushHistory: X,
        requestDraw: A,
        sceneStickerShown: ge,
        stickerById: P,
        updateSelectionMenu: O,
        updateSidePanel: _
      } = K);
    },
    getSelected: k,
    getSelectedItems: se,
    getMultiSelectionGeom: Z,
    isItemSelected: I,
    getSelectedKind: v,
    isItemLocked: V,
    areAllSelectedItemsLocked: p,
    toggleSelectedLock: w,
    setSelectedItem: C,
    setSelectedItems: T,
    getCutoutInspectorItems: U,
    getSelectionItemIcon: le,
    getSelectionItemLabelData: G,
    toggleSelectedExternalStickerVisibility: oe,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: te,
    clearSelection: we,
    selectedWorldSticker: Se,
    selectWorldSticker: xe,
    clearWorldSelection: Y,
    worldStickerEditable: ye,
    applyInitialCutoutFocus: F,
    releaseHiddenSelection: ne,
    bringSelectedToFront: $,
    sendSelectedToBack: Q
  };
}
function wA(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function h() {
    return o && s() && i.camera.projection === "erp";
  }
  function S() {
    const k = q({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !k || k.length !== 4 ? !1 : k[0].y >= k[3].y;
  }
  function g() {
    return Ng({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function b() {
    const _ = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return _.some((k, se) => k !== f.key[se]) && (f = { key: _, projection: Ag(g(), r.width, r.height) }), f.projection;
  }
  function y(_) {
    const k = b().project(_);
    return k.z > 1e-4 ? k : null;
  }
  function H(_, k) {
    return b().ray(_, k);
  }
  function z() {
    const _ = r.width, k = r.height, se = 2;
    if (_ / Math.max(k, 1) >= se) {
      const p = k, m = p * se;
      return { x: (_ - m) * 0.5, y: 0, w: m, h: p };
    }
    const I = _, v = I / se;
    return { x: 0, y: (k - v) * 0.5, w: I, h: v };
  }
  function ee(_) {
    return {
      lon: Math.atan2(_.x, _.z),
      lat: Math.asin(Fe(_.y, -1, 1))
    };
  }
  function E(_, k = null) {
    const { lon: se, lat: Z } = ee(_), I = z();
    let v = I.x + (se / (2 * Math.PI) + 0.5) * I.w;
    const V = I.y + (0.5 - Z / Math.PI) * I.h;
    if (k !== null) {
      for (; v - k > I.w / 2; ) v -= I.w;
      for (; v - k < -I.w / 2; ) v += I.w;
    }
    return { x: v, y: V, z: 1 };
  }
  function W(_) {
    const k = c(_), se = No(
      Number(k.yaw_deg || 0),
      Number(k.pitch_deg || 0),
      Number(k.rot_deg || k.roll_deg || 0)
    ), Z = Math.tan(Fe(Number(k.hFOV_deg || 20), 0.1, 179) * 0.5 * Nr), I = Math.tan(Fe(Number(k.vFOV_deg || 20), 0.1, 179) * 0.5 * Nr);
    return {
      centerDir: se.fwd,
      right: se.right,
      up: se.up,
      tanX: Z,
      tanY: I
    };
  }
  function D(_, k, se) {
    return Z2(eh(eh(_.centerDir, th(_.right, k)), th(_.up, se)));
  }
  function q(_) {
    const k = W(_);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: Z, v: I }) => D(k, Z * k.tanX, I * k.tanY));
  }
  function ve(_, k, se) {
    const Z = W(_), I = (k * 2 - 1) * Z.tanX, v = (1 - se * 2) * Z.tanY;
    return D(Z, I, v);
  }
  function _e(_) {
    const k = t.width / Math.max(1, r.width), se = t.height / Math.max(1, r.height);
    return { x: _.x * k, y: _.y * se, w: _.w * k, h: _.h * se };
  }
  function he(_, k = null, se = null, Z = null) {
    if (n.mode === "frame") {
      const I = k || a();
      if (!I) return [];
      const v = se || l(I);
      return X(_, I, v);
    }
    return pe(_, Z);
  }
  function ie(_, k = null, se = null, Z = null, I = null) {
    if (!_) return null;
    if (n.mode === "unwrap") {
      const V = pe([_], I);
      return V[0] ? { x: V[0].x, y: V[0].y, z: 1 } : null;
    }
    const v = me(_);
    return v ? d(v, k, se, Z) : null;
  }
  function ke(_, k) {
    if (!_ || !k) return null;
    const se = Number(k.x || 0), Z = Number(k.y || 0);
    return ve(_, se, Z);
  }
  function me(_) {
    if (!_) return null;
    const k = (Number(_.u || 0) - 0.5) * (2 * Math.PI), se = (0.5 - Number(_.v || 0)) * Math.PI, Z = Math.cos(se);
    return ic(Z * Math.sin(k), Math.sin(se), Z * Math.cos(k));
  }
  function de(_, k) {
    if (!_ || !k) return null;
    const se = W(_), Z = qc(k, se.centerDir);
    if (!Number.isFinite(Z) || Z <= 1e-6) return null;
    const I = qc(k, se.right) / Z, v = qc(k, se.up) / Z;
    return {
      x: (I / Math.max(1e-6, se.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, se.tanY)) * 0.5
    };
  }
  function J(_) {
    if (!Array.isArray(_) || _.length < 3) return [];
    if (n.mode === "unwrap") {
      const se = z();
      return _.map((Z) => ({
        x: se.x + Number(Z.u || 0) * se.w,
        y: se.y + Number(Z.v || 0) * se.h
      }));
    }
    const k = _.map((se) => y(me(se))).filter(Boolean);
    return k.every((se) => Number(se.z || 0) > 0) ? k.map((se) => ({ x: Number(se.x || 0), y: Number(se.y || 0) })) : [];
  }
  function pe(_, k = null) {
    if (!Array.isArray(_) || _.length < 1) return [];
    if (n.mode === "unwrap") {
      const Z = z();
      return _.map((I) => {
        const v = (Number(I.u || 0) % 1 + 1) % 1, V = k == null ? v : Number(k || 0) + u(v, k);
        return {
          x: Z.x + V * Z.w,
          y: Z.y + Number(I.v || 0) * Z.h
        };
      });
    }
    const se = _.map((Z) => y(me(Z))).filter(Boolean);
    return se.every((Z) => Number(Z.z || 0) > 0) ? se.map((Z) => ({ x: Number(Z.x || 0), y: Number(Z.y || 0) })) : [];
  }
  function fe(_, k = 160) {
    if (!Array.isArray(_) || _.length < 3) return !1;
    for (let se = 0; se < _.length; se += 1) {
      const Z = _[se], I = _[(se + 1) % _.length];
      if (!Z || !I || !Number.isFinite(Z.x) || !Number.isFinite(Z.y) || !Number.isFinite(I.x) || !Number.isFinite(I.y) || Math.hypot(Number(I.x) - Number(Z.x), Number(I.y) - Number(Z.y)) > k) return !1;
    }
    return !0;
  }
  function R(_, k, se) {
    if (!Array.isArray(_) || _.length < 3 || !k || !se) return [];
    const Z = [];
    for (const I of _) {
      const v = me(I), V = de(k, v);
      if (!V) return [];
      Z.push({
        x: Number(se.x || 0) + Number(V.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(V.y || 0) * Number(se.h || 0)
      });
    }
    return fe(Z, Math.max(80, Math.max(se.w, se.h) * 0.75)) ? Z : [];
  }
  function X(_, k, se) {
    if (!Array.isArray(_) || _.length < 1 || !k || !se) return [];
    const Z = [];
    for (const I of _) {
      const v = me(I), V = de(k, v);
      V && Z.push({
        x: Number(se.x || 0) + Number(V.x || 0) * Number(se.w || 0),
        y: Number(se.y || 0) + Number(V.y || 0) * Number(se.h || 0)
      });
    }
    return Z;
  }
  function A(_) {
    const k = r.getBoundingClientRect();
    return {
      x: (_.clientX - k.left) / k.width * r.width,
      y: (_.clientY - k.top) / k.height * r.height
    };
  }
  function ge(_) {
    const k = r.getBoundingClientRect();
    return {
      x: Number(_.clientX) - Number(k.left || 0),
      y: Number(_.clientY) - Number(k.top || 0)
    };
  }
  function P(_, k = performance.now()) {
    if (n.mode === "unwrap") {
      const v = z(), V = (_.x - v.x) / Math.max(1, v.w), p = (_.y - v.y) / Math.max(1, v.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (V % 1 + 1) % 1,
        v: Fe(p, 0, 1),
        t: Number(k || 0)
      };
    }
    const se = H(_.x, _.y), { lon: Z, lat: I } = ee(se);
    return {
      targetKind: "ERP_GLOBAL",
      u: (Z / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - I / Math.PI, 0, 1),
      t: Number(k || 0)
    };
  }
  function O(_, k, se = performance.now()) {
    const Z = l(k);
    if (!Z) return null;
    const I = {
      x: (Number(_.x) - Z.x) / Math.max(1, Z.w),
      y: (Number(_.y) - Z.y) / Math.max(1, Z.h)
    };
    if (I.x < 0 || I.x > 1 || I.y < 0 || I.y > 1) return null;
    const v = ke(k, I);
    if (!v) return null;
    const { lon: V, lat: p } = ee(v);
    return {
      targetKind: "ERP_GLOBAL",
      u: (V / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Fe(0.5 - p / Math.PI, 0, 1),
      t: Number(se || 0)
    };
  }
  return {
    connect(_) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = _);
    },
    isErpCamera: h,
    currentViewCamera: g,
    currentViewProjection: b,
    projectDir: y,
    screenToWorldDir: H,
    getUnwrapRect: z,
    projectDirUnwrap: E,
    getStickerFrame: W,
    stickerDirFromFrame: D,
    stickerCornersDir: q,
    stickerSampleDir: ve,
    stickerCornerOrderSanity: S,
    projectEditorPoints: he,
    projectErpPointToEditor: ie,
    frameLocalPointToWorldDir: ke,
    erpPointToWorldDir: me,
    worldDirToFrameLocalPoint: de,
    projectLassoPointsToCurrentView: J,
    projectErpLassoPointsToFrameRect: R,
    screenPos: A,
    screenPosCss: ge,
    screenPosToErpPoint: P,
    screenPosToFrameAsErpPoint: O,
    deviceRect: _e
  };
}
function kA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X;
  function A(v, V) {
    const p = String(v.actionGroupId || v.id || "").trim(), m = z(p, v.layerKind), w = a(p, v.layerKind, m), C = (w == null ? void 0 : w.centerUv) || H(p, v.layerKind, m), T = n.mode === "unwrap" ? Number((C == null ? void 0 : C.u) || 0) : null, U = [], le = n.mode === "frame" ? l() : null, G = le ? u(le) : null;
    for (const F of m) {
      const ne = (F == null ? void 0 : F.geometry) || null, $ = (ne == null ? void 0 : ne.geometryKind) === "lasso_fill" ? ne == null ? void 0 : ne.points : (ne == null ? void 0 : ne.processedPoints) || (ne == null ? void 0 : ne.rawPoints) || (ne == null ? void 0 : ne.points) || [], Q = me($, le, G, T).filter((j) => Number.isFinite(j == null ? void 0 : j.x) && Number.isFinite(j == null ? void 0 : j.y));
      if (!Q.length) continue;
      const K = c(String((F == null ? void 0 : F.toolKind) || "pen")), B = Dn[K] || Dn[Dr];
      U.push({
        points: Q,
        closed: String((ne == null ? void 0 : ne.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((F == null ? void 0 : F.size) || 10) * Math.max(0.1, Number((B == null ? void 0 : B.sizeScale) ?? 1)) + 10),
        layerKind: String((F == null ? void 0 : F.layerKind) || v.layerKind || "paint")
      });
    }
    const oe = de(C, null, le, G, T);
    if (!oe) {
      const F = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(V, F), F;
    }
    const L = d(w).map((F) => de(F, oe.x, le, G, T)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y)).map((F) => ({ x: Number(F.x || 0), y: Number(F.y || 0) }));
    if (L.length < 4) {
      const F = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(V, F), F;
    }
    const te = (F, ne) => ({
      x: (Number((F == null ? void 0 : F.x) || 0) + Number((ne == null ? void 0 : ne.x) || 0)) * 0.5,
      y: (Number((F == null ? void 0 : F.y) || 0) + Number((ne == null ? void 0 : ne.y) || 0)) * 0.5,
      a: F,
      b: ne
    }), we = te(L[0], L[1]), Se = te(L[1], L[2]), xe = te(L[2], L[3]), Y = te(L[3], L[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(oe.x || 0), y: Number(oe.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...we },
        { edge: "right", ...Se },
        { edge: "bottom", ...xe },
        { edge: "left", ...Y }
      ],
      rotateStemBase: { x: we.x, y: we.y },
      rotateHandle: { x: we.x, y: we.y - 30 },
      strokePaths: U,
      visible: !0
    };
    return n._strokeGeomCache.set(V, ye), ye;
  }
  function ge(v, V) {
    const p = n.mode === "frame" ? l() : null, m = p ? u(p) : null, w = f(v), C = n.mode === "unwrap" ? Number((w == null ? void 0 : w.u) || 0) : null, T = de(w, null, p, m, C), le = S(v).map((L) => de(L, (T == null ? void 0 : T.x) ?? null, p, m, C)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(le) || le.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(V, L), L;
    }
    const G = le.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: G.reduce((L, te) => L + Number(te.x || 0), 0) / G.length,
        y: G.reduce((L, te) => L + Number(te.y || 0), 0) / G.length
      },
      corners: G,
      visible: !0
    };
    return n._strokeGeomCache.set(V, N), N;
  }
  function P(v, V = null, p = null, m = null, w = {}) {
    if (n.mode === "frame") {
      const oe = p || l(), N = m || u(oe);
      if (!oe || !N) return null;
      const L = oe ? X(oe, v) : null;
      return L ? {
        x: Number(N.x || 0) + Number(L.x || 0) * Number(N.w || 0),
        y: Number(N.y || 0) + Number(L.y || 0) * Number(N.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ke(v, V);
    const C = 1e-4, T = o().project(v, C);
    if (!Number.isFinite(T.z) || T.z <= C && !(w != null && w.clipBehind)) return null;
    const U = r.width, le = r.height, G = Math.max(U, le) * 2;
    return {
      x: Fe(T.x, -G, U + G),
      y: Fe(T.y, -G, le + G),
      z: Math.max(T.z, C),
      rawZ: T.z,
      clipped: T.z <= C
    };
  }
  function O(v, V = []) {
    if (n.mode !== "pano" || q(v)) return 1;
    const p = V.map((m) => Number((m == null ? void 0 : m.rawZ) ?? (m == null ? void 0 : m.z))).filter((m) => Number.isFinite(m));
    return p.length ? X2(0.035, 0.2, Math.min(...p)) : 1;
  }
  function _(v) {
    if (W(v) && !J(v)) return { visible: !1 };
    const V = he(v), p = Rn(Number(V.yaw_deg || 0), Number(V.pitch_deg || 0)), m = n.mode === "frame" ? l() : null, w = m ? u(m) : null, C = n.mode === "pano" && (q(v) || D(v)), T = C ? { clipBehind: !0 } : null, U = P(p, null, m, w, T);
    if (!U) return { visible: !1 };
    const le = b(v), oe = pe(v).map((x) => P(x, U.x, m, w, T)).filter((x) => Number.isFinite(x == null ? void 0 : x.x) && Number.isFinite(x == null ? void 0 : x.y));
    if (oe.length < 4) return { visible: !1 };
    const N = fe(le, 0, le.tanY), L = fe(le, 0, le.tanY + Math.max(le.tanY * 0.43, 0.053)), te = P(N, U.x, m, w, T);
    if (!te) return { visible: !1 };
    const we = P(L, (te == null ? void 0 : te.x) ?? U.x, m, w, T), Se = ((we == null ? void 0 : we.x) ?? te.x) - te.x, xe = ((we == null ? void 0 : we.y) ?? te.y) - te.y, Y = Math.hypot(Se, xe) || 1, ye = {
      x: te.x + Se / Y * 30,
      y: te.y + xe / Y * 30
    }, F = P(fe(le, 0, le.tanY), U.x, m, w, T), ne = P(fe(le, le.tanX, 0), U.x, m, w, T), $ = P(fe(le, 0, -le.tanY), U.x, m, w, T), Q = P(fe(le, -le.tanX, 0), U.x, m, w, T);
    if (!F || !ne || !$ || !Q) return { visible: !1 };
    const K = [
      U,
      ...oe,
      te,
      we,
      F,
      ne,
      $,
      Q
    ];
    if (C && !K.some((x) => Number((x == null ? void 0 : x.rawZ) ?? (x == null ? void 0 : x.z)) > 1e-4)) return { visible: !1 };
    const B = O(v, K), j = [
      {
        edge: "top",
        x: F.x,
        y: F.y,
        a: { x: oe[0].x, y: oe[0].y },
        b: { x: oe[1].x, y: oe[1].y }
      },
      {
        edge: "right",
        x: ne.x,
        y: ne.y,
        a: { x: oe[1].x, y: oe[1].y },
        b: { x: oe[2].x, y: oe[2].y }
      },
      {
        edge: "bottom",
        x: $.x,
        y: $.y,
        a: { x: oe[2].x, y: oe[2].y },
        b: { x: oe[3].x, y: oe[3].y }
      },
      {
        edge: "left",
        x: Q.x,
        y: Q.y,
        a: { x: oe[3].x, y: oe[3].y },
        b: { x: oe[0].x, y: oe[0].y }
      }
    ];
    return {
      center: { x: U.x, y: U.y },
      corners: oe.map((x) => ({ x: x.x, y: x.y })),
      edgeMidpoints: j,
      rotateStemBase: { x: te.x, y: te.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: B,
      visible: !0
    };
  }
  function k(v) {
    if (t && D(v) && ee()) return { visible: !1 };
    if (!_e() && (ve(v) || E(v))) return { visible: !1 };
    if (ve(v)) {
      const w = String(v.actionGroupId || v.id || "").trim(), C = y(w, v.layerKind), T = n._strokeGeomCache.get(C);
      return T || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), A(v, C));
    }
    if (E(v)) {
      const w = h(v), C = n._strokeGeomCache.get(w);
      return C || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ge(v, w));
    }
    const V = g(v), p = n._strokeGeomCache.get(V);
    if (p) return p;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const m = _(v);
    return n._strokeGeomCache.set(V, m), m;
  }
  function se(v, V, p, m = null) {
    const w = [];
    for (let C = 0; C <= p; C += 1) {
      const T = C / p;
      let U = 0, le = 0;
      V === 0 ? (U = T, le = 0) : V === 1 ? (U = 1, le = T) : V === 2 ? (U = 1 - T, le = 1) : (U = 0, le = 1 - T);
      const G = R(v, U, le), oe = n.mode === "unwrap" ? ke(G, m) : ie(G);
      oe && w.push(oe);
    }
    return w;
  }
  function Z() {
    const v = [...Array.isArray(i.shots) ? i.shots : []], V = [...s()].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
    return [...v, ...V];
  }
  function I() {
    const v = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((p, m) => Number(m.z_index || 0) - Number(p.z_index || 0)), ...v];
  }
  return {
    connect(v) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: h,
        getRasterObjectTransformedErpPoints: S,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: b,
        getStrokeGeomCacheKey: y,
        getStrokeGroupCenterUv: H,
        getStrokeGroupStrokes: z,
        isFreeSpaceView: ee,
        isRasterObjectItem: E,
        isSceneSticker: W,
        isShotItem: D,
        isStickerItem: q,
        isStrokeGroupItem: ve,
        paintingShown: _e,
        poseOf: he,
        projectDir: ie,
        projectDirUnwrap: ke,
        projectEditorPoints: me,
        projectErpPointToEditor: de,
        sceneStickerShown: J,
        stickerCornersDir: pe,
        stickerDirFromFrame: fe,
        stickerSampleDir: R,
        worldDirToFrameLocalPoint: X
      } = v);
    },
    projectSceneItemDir: P,
    objectGeom: k,
    sampleStickerEdge: se,
    getCutoutSelectableItemsForDisplay: Z,
    getCutoutSelectableItemsForHit: I
  };
}
const Aa = /* @__PURE__ */ new Map();
function xA(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e;
  function he(p = r.interaction) {
    const m = String((p == null ? void 0 : p.kind) || "");
    if (m === "paint_stroke" || m === "paint_lasso_fill" || m === "move_stroke_group" || m === "scale_stroke_group" || m === "rotate_stroke_group" || m === "move_raster_object" || m === "scale_raster_object") return !0;
    if (m === "move_multi") {
      const w = Array.isArray(p == null ? void 0 : p.strokeSnapshots) && p.strokeSnapshots.length > 0, C = Array.isArray(p == null ? void 0 : p.rasterSnapshots) && p.rasterSnapshots.length > 0;
      return w || C;
    }
    return !1;
  }
  function ie() {
    var m, w, C, T;
    let p = null;
    try {
      const U = g(), le = ((T = (C = (w = (m = r.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : w.call(m, U)) == null ? void 0 : C.displayPaint) == null ? void 0 : T.canvas) || null;
      le && (p = {
        source: le,
        revision: `${b()}:${ke()}`
      });
    } catch {
      p = null;
    }
    return p;
  }
  function ke() {
    var T, U, le, G, oe, N, L;
    const p = r.interaction, m = String((p == null ? void 0 : p.kind) || "");
    if (!he(p)) return "";
    if (m === "paint_stroke" || m === "paint_lasso_fill") {
      const te = ((T = p == null ? void 0 : p.stroke) == null ? void 0 : T.geometry) || null, we = String(((U = p == null ? void 0 : p.stroke) == null ? void 0 : U.layerKind) || ""), Se = ((le = te == null ? void 0 : te.rawPoints) == null ? void 0 : le.length) ?? ((G = te == null ? void 0 : te.points) == null ? void 0 : G.length) ?? 0, xe = String((p == null ? void 0 : p._livePreviewToken) || "");
      return `_${we || "paint"}_${m}_live${xe}_${Se}_${r.livePaintInteractionRevision}`;
    }
    const w = String(((oe = p == null ? void 0 : p.item) == null ? void 0 : oe.actionGroupId) || ""), C = String(((N = p == null ? void 0 : p.item) == null ? void 0 : N.rasterObjectId) || ((L = p == null ? void 0 : p.item) == null ? void 0 : L.id) || "");
    return `_${m}_${w || C || "active"}_${r.livePaintInteractionRevision}`;
  }
  function me(p, m = null) {
    const w = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!w) return null;
    const C = s.get(w);
    if (C)
      return C.complete || C.width || C.naturalWidth, C;
    const T = new Image();
    return T.onload = () => {
      typeof m == "function" && m();
    }, T.src = w, s.set(w, T), T;
  }
  function de(p) {
    const m = String((p == null ? void 0 : p.rasterDataUrl) || "").trim();
    if (!m) return null;
    const w = o.get(m);
    if (w) return w.ready ? w : null;
    const C = me(p, () => {
      const L = o.get(m);
      L && (L.ready = !1), q({ localOnly: !0 });
    });
    if (!C || !(C.complete || C.width || C.naturalWidth)) return null;
    const T = Number(C.naturalWidth || C.width || 0), U = Number(C.naturalHeight || C.height || 0);
    if (T < 1 || U < 1) return null;
    const le = on({ label: "editor.image-pixels" });
    le.width = T, le.height = U;
    const G = le.getContext("2d", { willReadFrequently: !0 });
    if (!G) return null;
    G.clearRect(0, 0, T, U), G.drawImage(C, 0, 0, T, U);
    const oe = G.getImageData(0, 0, T, U).data, N = { canvas: le, width: T, height: U, alpha: oe, ready: !0 };
    return o.set(m, N), N;
  }
  function J(p, m) {
    if (!p || !m) return null;
    const w = (p == null ? void 0 : p.bbox) || null;
    if (!w) return null;
    const C = (p == null ? void 0 : p.transform) || {}, T = {
      u: (Number(w.u0 || 0) + Number(w.u1 || 0)) * 0.5,
      v: (Number(w.v0 || 0) + Number(w.v1 || 0)) * 0.5
    }, U = {
      u: ((Number(m.u || 0) - Number(C.du || 0)) % 1 + 1) % 1,
      v: Number(m.v || 0) - Number(C.dv || 0)
    }, le = z(
      U,
      T,
      Number(C.scale || 1),
      Number(C.rot_deg || 0)
    ), G = Number(w.u1 || 0) - Number(w.u0 || 0), oe = Number(w.v1 || 0) - Number(w.v0 || 0);
    if (!(G > 1e-6) || !(oe > 1e-6)) return null;
    const N = _e(Number(le.u || 0), Number(w.u0 || 0)) / G, L = (Number(le.v || 0) - Number(w.v0 || 0)) / oe;
    if (N < 0 || N > 1 || L < 0 || L > 1) return 0;
    const te = de(p);
    if (!te) return null;
    const we = Fe(Math.floor(N * te.width), 0, te.width - 1), Se = Fe(Math.floor(L * te.height), 0, te.height - 1);
    return Number(te.alpha[(Se * te.width + we) * 4 + 3] || 0);
  }
  function pe(p, m, w, C = null) {
    if (!(m != null && m.visible) || !ei(w, m.corners)) return !1;
    const T = C || ve(w, performance.now()), U = J(p, T);
    return U === null ? !0 : U > 8;
  }
  function fe() {
    var C, T, U, le, G, oe, N, L;
    const p = ((T = (C = r.paintEngine) == null ? void 0 : C.getErpTarget) == null ? void 0 : T.call(C, g(!1))) || null, m = Math.max(1, Number(((U = p == null ? void 0 : p.descriptor) == null ? void 0 : U.width) || ((G = (le = p == null ? void 0 : p.displayPaint) == null ? void 0 : le.canvas) == null ? void 0 : G.width) || 2048)), w = Math.max(1, Number(((oe = p == null ? void 0 : p.descriptor) == null ? void 0 : oe.height) || ((L = (N = p == null ? void 0 : p.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : L.height) || 1024));
    return { width: m, height: w };
  }
  function R() {
    var Se, xe, Y;
    const p = r.interaction;
    if ((p == null ? void 0 : p.kind) !== "paint_stroke") return null;
    const m = (p == null ? void 0 : p.stroke) || null;
    if (!m || String((m == null ? void 0 : m.layerKind) || "") !== "paint" || String((m == null ? void 0 : m.toolKind) || "") !== "eraser") return null;
    const w = u(), C = `${ke()}:${w.width}:${w.height}`;
    if (((Se = r._activePaintEraserPreviewInfo) == null ? void 0 : Se.cacheKey) === C)
      return r._activePaintEraserPreviewInfo.value || null;
    const T = fn(m), U = (T == null ? void 0 : T.geometry) || null;
    if (U && String(U.geometryKind || "") !== "lasso_fill") {
      const ye = Array.isArray(U.rawPoints) && U.rawPoints.length ? U.rawPoints : Array.isArray(U.points) ? U.points : [];
      U.processedPoints = E(ye, T.targetSpace, !0);
    }
    const le = c(w.width, w.height, { readback: !0 });
    if (!W(le, T, { w: w.width, h: w.height })) return null;
    const G = ((Y = (xe = le.ctx) == null ? void 0 : xe.getImageData(0, 0, w.width, w.height)) == null ? void 0 : Y.data) || null;
    if (!G) return null;
    let oe = w.width, N = w.height, L = -1, te = -1;
    for (let ye = 0; ye < w.height; ye += 1)
      for (let F = 0; F < w.width; F += 1)
        G[(ye * w.width + F) * 4 + 3] <= 8 || (F < oe && (oe = F), ye < N && (N = ye), F > L && (L = F), ye > te && (te = ye));
    if (L < oe || te < N)
      return r._activePaintEraserPreviewInfo = { cacheKey: C, value: null }, null;
    const we = {
      surface: le,
      bounds: { minX: oe, minY: N, maxX: L, maxY: te },
      key: `${C}:${oe}:${N}:${L}:${te}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: C, value: we }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), we;
  }
  function X() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function A(p, m, w) {
    var C, T;
    if (!p) return null;
    if ((C = p.item) != null && C.bbox) {
      const U = p.item.bbox, le = ((T = p.item) == null ? void 0 : T.transform) || {}, G = Number(U.u0 || 0) + Number(le.du || 0), oe = Number(U.u1 || 0) + Number(le.du || 0), N = Number(U.v0 || 0) + Number(le.dv || 0), L = Number(U.v1 || 0) + Number(le.dv || 0);
      return {
        minX: Math.floor((G % 1 + 1) % 1 * m),
        maxX: Math.ceil((oe % 1 + 1) % 1 * m),
        minY: Math.floor(Fe(N, 0, 1) * w),
        maxY: Math.ceil(Fe(L, 0, 1) * w),
        wraps: oe - G >= 1 || G < 0 || oe > 1
      };
    }
    return null;
  }
  function ge(p, m, w) {
    if (!p || !m) return !1;
    const C = (le) => le.wraps ? [
      { minX: 0, maxX: le.maxX, minY: le.minY, maxY: le.maxY, wraps: !1 },
      { minX: le.minX, maxX: w - 1, minY: le.minY, maxY: le.maxY, wraps: !1 }
    ] : [le], T = C(p), U = C(m);
    return T.some((le) => U.some((G) => !(le.maxX < G.minX || G.maxX < le.minX || le.maxY < G.minY || G.maxY < le.minY)));
  }
  function P(p, m, w) {
    var Q, K, B, j, x, re, ce;
    if (!p || !m || !((Q = w == null ? void 0 : w.surface) != null && Q.canvas)) return p;
    const C = Number(p.width || w.surface.canvas.width || 0), T = Number(p.height || w.surface.canvas.height || 0);
    if (C < 1 || T < 1) return p;
    const U = A(m, C, T);
    if (U && !ge(U, w.bounds, C)) return p;
    const le = String(((K = m.item) == null ? void 0 : K.id) || m.id || ""), G = ((B = m.item) == null ? void 0 : B.transform) || {}, oe = `${w.key}:${le}:${C}:${T}:${Number(G.du || 0).toFixed(6)}:${Number(G.dv || 0).toFixed(6)}:${Number(G.rot_deg || 0).toFixed(3)}:${Number(G.scale || 1).toFixed(4)}`, N = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(oe)) return N.get(oe);
    const L = Fe(Math.floor(Number(((j = w.bounds) == null ? void 0 : j.minX) || 0)), 0, Math.max(0, C - 1)), te = Fe(Math.floor(Number(((x = w.bounds) == null ? void 0 : x.minY) || 0)), 0, Math.max(0, T - 1)), we = Fe(Math.ceil(Number(((re = w.bounds) == null ? void 0 : re.maxX) || 0)), L, Math.max(0, C - 1)), Se = Fe(Math.ceil(Number(((ce = w.bounds) == null ? void 0 : ce.maxY) || 0)), te, Math.max(0, T - 1)), xe = Math.max(1, we - L + 1), Y = Math.max(1, Se - te + 1), ye = c(C, T, { readback: !0 });
    ye.ctx.clearRect(0, 0, C, T), ye.ctx.drawImage(p, 0, 0);
    const F = ye.ctx.getImageData(L, te, xe, Y);
    ye.ctx.save(), ye.ctx.globalCompositeOperation = "destination-out", ye.ctx.drawImage(w.surface.canvas, 0, 0), ye.ctx.restore();
    const ne = ye.ctx.getImageData(L, te, xe, Y);
    let $ = !1;
    for (let be = 0; be < xe * Y; be += 1) {
      const M = F.data[be * 4 + 3], ue = ne.data[be * 4 + 3];
      if (M > ue) {
        $ = !0;
        break;
      }
    }
    return $ ? (N.size > 64 && N.clear(), N.set(oe, ye.canvas), ye.canvas) : (N.set(oe, p), p);
  }
  function O(p, m = null) {
    const w = ee((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), C = (p == null ? void 0 : p.bbox) || null;
    if (!w || !C) return null;
    const T = me(p, m);
    if (!T || !(T.complete || T.width || T.naturalWidth)) return null;
    const { width: U, height: le } = fe(), G = (p == null ? void 0 : p.transform) || {}, oe = [
      w,
      U,
      le,
      C.u0,
      C.v0,
      C.u1,
      C.v1,
      G.du,
      G.dv,
      G.rot_deg,
      G.scale,
      y()
    ].join(":"), N = i.get(oe);
    if (N) return N;
    i.size > 64 && i.clear();
    const L = on({ label: "editor.raster-erp" });
    L.width = U, L.height = le;
    const te = L.getContext("2d");
    return te ? (ny(te, T, p, U, le), i.set(oe, L), L) : null;
  }
  async function _(p, m) {
    const w = await new Promise((G) => p.toBlob(G, "image/png")), C = new FormData();
    C.append("image", w, m), C.append("type", "input"), C.append("subfolder", "panorama_stickers"), C.append("overwrite", "1");
    const T = await t.fetchApi("/upload/image", { method: "POST", body: C });
    if (!T || T.status !== 200) throw new Error(`upload failed (${T == null ? void 0 : T.status})`);
    const U = await T.json(), le = String((U == null ? void 0 : U.name) || "").trim();
    if (!le) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: le,
      subfolder: String((U == null ? void 0 : U.subfolder) || "panorama_stickers"),
      storage: String((U == null ? void 0 : U.type) || "input")
    };
  }
  let k = null, se = !1;
  function Z() {
    const p = nh(a.painting), { width: m, height: w } = f();
    return kS(a.painting_layer, { paintCount: p.totalPaintCount, maskCount: p.totalMaskCount, width: m, height: w, nodeId: String(n.id ?? "0") });
  }
  function I() {
    const p = String(n.id ?? "0"), m = Aa.get(p);
    if (se && m) return m;
    const w = (async () => {
      var U, le, G, oe, N, L, te, we, Se, xe, Y, ye;
      const C = b(), T = nh(a.painting);
      if (T.totalPaintCount <= 0 && T.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, k = C, l());
        return;
      }
      if (k !== C && !se) {
        se = !0;
        try {
          D();
          const F = g(!1), ne = ((le = (U = r.paintEngine) == null ? void 0 : U.getErpTarget) == null ? void 0 : le.call(U, F)) || null, $ = ((G = ne == null ? void 0 : ne.displayPaint) == null ? void 0 : G.canvas) || null, Q = ((oe = ne == null ? void 0 : ne.committedMask) == null ? void 0 : oe.canvas) || null, K = Math.max(1, Number(((N = ne == null ? void 0 : ne.descriptor) == null ? void 0 : N.width) || ($ == null ? void 0 : $.width) || (Q == null ? void 0 : Q.width) || 2048)), B = Math.max(1, Number(((L = ne == null ? void 0 : ne.descriptor) == null ? void 0 : L.height) || ($ == null ? void 0 : $.height) || (Q == null ? void 0 : Q.height) || 1024));
          (!$ && T.totalPaintCount > 0 || !Q && T.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((te = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : te.width) || 0) !== K || Number(((we = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.height) || 0) !== B) && (r._paintLayerSyncBlankSurface = c(K, B)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, K, B));
          const j = $ || T.totalPaintCount > 0 && ((Se = r._paintLayerSyncBlankSurface) == null ? void 0 : Se.canvas) || null, x = Q || T.totalMaskCount > 0 && ((xe = r._paintLayerSyncBlankSurface) == null ? void 0 : xe.canvas) || null;
          if (!j && !x) return;
          let re = null, ce = null;
          const be = [];
          if (T.totalPaintCount > 0) {
            re = await _(j, `pano_paint_${p}.png`);
            for (const M of F) {
              const ue = String(M || "").trim();
              if (!ue) continue;
              const Pe = ((ye = (Y = r.paintEngine) == null ? void 0 : Y.getGroupDisplayCanvas) == null ? void 0 : ye.call(Y, ue)) || null;
              if (!Pe) continue;
              const Ee = ue.replace(/[^a-zA-Z0-9_-]+/g, "_"), Le = await _(Pe, `pano_group_${p}_${Ee}.png`);
              Le && be.push({
                id: ue,
                actionGroupId: ue,
                image: Le
              });
            }
          }
          T.totalMaskCount > 0 && (ce = await _(x, `pano_mask_${p}.png`)), C === b() && (a.painting_layer = {
            paint: re,
            mask: ce,
            groups: be,
            revision: C
          }, k = C, l());
        } catch (F) {
          throw F;
        } finally {
          se = !1;
        }
      }
    })();
    return Aa.set(p, w), w.finally(() => {
      Aa.get(p) === w && Aa.delete(p);
    }), w;
  }
  function v() {
    const p = S(!0).filter((T) => T.type === "strokeGroup").map((T) => ({ actionGroupId: T.actionGroupId, z_index: T.z_index })), m = r.paintEngine, w = h(), C = R();
    return Dd({ ...a, painting: { ...a.painting, groups: p } }, {
      group: (T) => {
        const U = m == null ? void 0 : m.getGroupDisplayCanvas(T);
        return U && { media: U, revision: `${w}:${T}` };
      },
      raster: (T) => {
        const U = O(T, () => q());
        if (!U) return null;
        const le = T.transform || {};
        return {
          media: P(U, { item: T }, C),
          revision: [
            b(),
            (C == null ? void 0 : C.key) || "",
            T.id,
            Number(le.du || 0).toFixed(6),
            Number(le.dv || 0).toFixed(6),
            Number(le.rot_deg || 0).toFixed(3),
            Number(le.scale || 1).toFixed(4)
          ].join(":")
        };
      },
      mask: () => pg(m)
    });
  }
  function V() {
    a.painting_layer !== null && (a.painting_layer = null), k = "";
  }
  return {
    connect(p) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: h,
        getOrderedDisplayListObjects: S,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: b,
        getPaintingRevisionKey: y,
        getStrokeGroupStrokes: H,
        inverseTransformErpPointAround: z,
        parseRasterObjectSelectionId: ee,
        processFreehandPoints: E,
        rasterizeStrokeToSurface: W,
        rebuildPaintEngineIfNeeded: D,
        requestDraw: q,
        screenPosToErpPoint: ve,
        shortestWrappedDelta: _e
      } = p);
    },
    getSharedLivePaintSurface: ie,
    getLivePaintRevisionSuffix: ke,
    isPaintCompositeInteraction: he,
    hitRasterObjectAt: pe,
    invalidateLivePaintPreviewCaches: X,
    buildRasterObjectEditCanvas: O,
    needsPaintingLayerSync: Z,
    syncPaintingLayerAsync: I,
    invalidatePaintingLayerState: V,
    buildEditorViewPaintLayers: v
  };
}
function MA(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(O) {
    return !O || typeof O != "object" ? { x: 0, y: 0 } : { x: Number((O == null ? void 0 : O.u) || 0), y: Number((O == null ? void 0 : O.v) || 0) };
  }
  function c(O, _, k, se = {}) {
    return { ...{
      ...O,
      t: Number((O == null ? void 0 : O.t) || 0),
      widthScale: f(O, "widthScale", 1),
      pressureLike: f(O, "pressureLike", 1)
    }, ...se, u: _, v: k };
  }
  function d(O, _ = !1) {
    return _ ? 12e-4 : 18e-4;
  }
  function u(O, _, k = !1) {
    if (!Array.isArray(O) || !O.length) return [];
    const se = String((_ == null ? void 0 : _.kind) || "") === "ERP_GLOBAL", Z = /* @__PURE__ */ new WeakMap();
    if (se) {
      let G = null;
      O.forEach((oe) => {
        const N = Number((oe == null ? void 0 : oe.u) || 0), L = Number((oe == null ? void 0 : oe.v) || 0), te = (N % 1 + 1) % 1, we = G == null ? te : G + a(te, (G % 1 + 1) % 1);
        Z.set(oe, { x: we, y: L }), G = we;
      });
    }
    const I = (G) => !G || typeof G != "object" ? { x: 0, y: 0 } : Z.get(G) || l(G), v = (G, oe, N, L = {}) => {
      const te = se ? (Number(oe) % 1 + 1) % 1 : Number(oe), we = c(G, te, N, L);
      return Z.set(we, { x: Number(oe), y: Number(N) }), we;
    }, V = (G, oe, N) => {
      const L = I(G), te = I(oe);
      return v(G, Xn(L.x, te.x, N), Xn(L.y, te.y, N), {
        t: Xn(Number((G == null ? void 0 : G.t) || 0), Number((oe == null ? void 0 : oe.t) || 0), N),
        widthScale: Xn(f(G, "widthScale", 1), f(oe, "widthScale", 1), N),
        pressureLike: Xn(f(G, "pressureLike", 1), f(oe, "pressureLike", 1), N)
      });
    };
    if (O.length === 1) {
      const G = I(O[0]);
      return [v(O[0], G.x, G.y)];
    }
    const p = d(_, k), m = (G, oe) => {
      const N = [0];
      for (let F = 1; F < G.length; F += 1) {
        const ne = I(G[F - 1]), $ = I(G[F]);
        N.push(N[F - 1] + Math.hypot($.x - ne.x, $.y - ne.y));
      }
      const L = N[N.length - 1] || 0;
      if (L <= 1e-8) {
        const F = G[0], ne = I(F);
        return [v(F, ne.x, ne.y)];
      }
      const te = [];
      let we = 0;
      for (let F = 0; F <= L + 1e-9; F += oe) {
        for (; we < N.length - 2 && N[we + 1] < F; ) we += 1;
        const ne = N[we], $ = N[we + 1], Q = Math.max(1e-8, $ - ne);
        te.push(V(G[we], G[we + 1], Fe((F - ne) / Q, 0, 1)));
      }
      const Se = G[G.length - 1], xe = I(Se), Y = te[te.length - 1], ye = Y ? I(Y) : null;
      return (!ye || Math.hypot(ye.x - xe.x, ye.y - xe.y) > oe * 0.35) && te.push(v(Se, xe.x, xe.y)), te;
    }, w = (G) => {
      if (!Array.isArray(G) || G.length < 3) return G ? G.slice() : [];
      const oe = I(G[0]), N = [v(G[0], oe.x, oe.y)];
      for (let we = 0; we < G.length - 1; we += 1) {
        const Se = G[we], xe = G[we + 1], Y = I(Se), ye = I(xe), F = v(
          Se,
          Y.x * 0.75 + ye.x * 0.25,
          Y.y * 0.75 + ye.y * 0.25,
          {
            t: Number(Se.t || 0) * 0.75 + Number(xe.t || 0) * 0.25,
            widthScale: f(Se, "widthScale", 1) * 0.75 + f(xe, "widthScale", 1) * 0.25,
            pressureLike: f(Se, "pressureLike", 1) * 0.75 + f(xe, "pressureLike", 1) * 0.25
          }
        ), ne = v(
          Se,
          Y.x * 0.25 + ye.x * 0.75,
          Y.y * 0.25 + ye.y * 0.75,
          {
            t: Number(Se.t || 0) * 0.25 + Number(xe.t || 0) * 0.75,
            widthScale: f(Se, "widthScale", 1) * 0.25 + f(xe, "widthScale", 1) * 0.75,
            pressureLike: f(Se, "pressureLike", 1) * 0.25 + f(xe, "pressureLike", 1) * 0.75
          }
        );
        N.push(F, ne);
      }
      const L = G[G.length - 1], te = I(L);
      return N.push(v(L, te.x, te.y)), N;
    }, C = m(O, p);
    if (C.length < 3) return C;
    const T = k ? 2 : 1;
    let U = C.slice();
    for (let G = 0; G < T; G += 1) U = w(U);
    return m(U, Math.max(p * 0.75, 55e-5));
  }
  function f(O, _, k = 1) {
    const se = Number(O == null ? void 0 : O[_]);
    return Number.isFinite(se) ? Math.max(0, se) : k;
  }
  function h(O) {
    const _ = Number(O == null ? void 0 : O.radiusValue);
    if (Number.isFinite(_) && _ > 0) {
      const k = String((O == null ? void 0 : O.radiusModel) || "").trim() || "erp_uv_norm";
      return k === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
      } : {
        model: k,
        value: _
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((O == null ? void 0 : O.size) || 10) * 0.5 / 2048)
    };
  }
  function S(O, _, k = {}) {
    const se = on({ label: "editor.raster-surface" });
    se.width = Math.max(1, Math.round(O)), se.height = Math.max(1, Math.round(_));
    const Z = se.getContext("2d", k.readback ? { willReadFrequently: !0 } : void 0);
    return Z && (Z.clearRect(0, 0, se.width, se.height), Z.imageSmoothingEnabled = !0), { canvas: se, ctx: Z };
  }
  function g() {
    const O = _e();
    return `${String(t.paintStrokeRevision)}:${O.width}x${O.height}`;
  }
  function b() {
    const O = _e();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${O.width}x${O.height}`;
  }
  function y() {
    const O = i(), _ = b();
    return O ? `${_}:${O}` : _;
  }
  function H() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function z() {
    t.paintCompositeRevision += 1;
  }
  function ee() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function E() {
    var O, _;
    t.paintEngineRevisionKey = null, (_ = (O = t.paintEngine) == null ? void 0 : O.rebuildCommitted) == null || _.call(O, n), t.paintEngineRevisionKey = g();
  }
  function W() {
    ee(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function D({ rebuildPaintEngine: O = !1 } = {}) {
    o(), H(), W(), O && E();
  }
  function q() {
    o(), z(), W();
  }
  function ve() {
    var se;
    const O = _e(), _ = `${O.width}x${O.height}`;
    t.paintEngineDescriptorKey !== _ && (t.paintEngine = Ql(O), t.paintEngineDescriptorKey = _, t.paintEngineRevisionKey = "");
    const k = g();
    t.paintEngineRevisionKey !== k && (t.paintEngineRevisionKey = k, (se = t.paintEngine) == null || se.rebuildCommitted(n));
  }
  function _e() {
    const O = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: O,
      height: Math.max(1, Math.round(O * 0.5))
    };
  }
  function he() {
    return _e();
  }
  function ie(O, _, k, se, Z = null) {
    const I = h(O), v = f(_, "widthScale", 1) * f(_, "pressureLike", 1);
    return I.model === "erp_uv_norm" ? Math.max(0.5, I.value * k * v) : I.model === "world_angle" ? Z ? Math.max(0.5, I.value / Math.max(1e-6, Number(Z.hFOV_deg || 90) * Nr) * k * v) : Math.max(0.5, I.value / (2 * Math.PI) * k * v) : Math.max(0.5, Number((O == null ? void 0 : O.size) || 10) * 0.5 * v);
  }
  function ke(O, _, k = {}) {
    const se = String((_ == null ? void 0 : _.layerKind) || "paint"), Z = String((_ == null ? void 0 : _.toolKind) || "pen"), I = k.preview === !0, v = I ? 0.78 : 1;
    if (O.globalAlpha = Z === "marker" ? 0.7 * v : 1, se === "mask") {
      O.fillStyle = I ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (Z === "eraser") {
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const V = String((_ == null ? void 0 : _.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (_ == null ? void 0 : _.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, p = I ? Math.max(0.28, Number(V.a ?? 1) * 0.88) : Math.max(0.12, Number(V.a ?? 1));
    O.fillStyle = `rgba(${Math.round(Number(V.r || 0) * 255)}, ${Math.round(Number(V.g || 0) * 255)}, ${Math.round(Number(V.b || 0) * 255)}, ${p})`;
  }
  function me(O, _, k) {
    const se = Math.max(0.5, Math.min(k, Number((_ == null ? void 0 : _.radiusPx) || 0.5)));
    !Number.isFinite(_ == null ? void 0 : _.x) || !Number.isFinite(_ == null ? void 0 : _.y) || !Number.isFinite(se) || (O.beginPath(), O.arc(Number(_.x || 0), Number(_.y || 0), se, 0, Math.PI * 2), O.fill());
  }
  function de(O, _, k, se, Z = {}) {
    if (!O || !Array.isArray(_) || !_.length) return;
    const I = Math.max(se.w, se.h) * 0.25;
    O.save(), ke(O, k, Z);
    const v = (V) => me(O, V, I);
    if (_.length === 1) {
      v(_[0]), O.restore();
      return;
    }
    for (let V = 0; V < _.length - 1; V += 1) {
      const p = _[V], m = _[V + 1];
      if (!p || !m) continue;
      const w = Number(p.x || 0), C = Number(p.y || 0), T = Number(m.x || 0), U = Number(m.y || 0), le = Math.max(0.5, Math.min(I, Number(p.radiusPx || 0.5))), G = Math.max(0.5, Math.min(I, Number(m.radiusPx || 0.5)));
      if (!Number.isFinite(w) || !Number.isFinite(C) || !Number.isFinite(T) || !Number.isFinite(U) || !Number.isFinite(le) || !Number.isFinite(G)) continue;
      const oe = T - w, N = U - C, L = Math.hypot(oe, N);
      if (!Number.isFinite(L) || L < 1e-6) {
        v(p);
        continue;
      }
      if (L > Math.max(se.w, se.h) * 0.5) continue;
      const te = Math.max(0.5, Math.min(le, G)), we = Math.max(0.35, Math.min(te * 0.4, 2.25)), Se = Math.max(1, Math.ceil(L / we));
      for (let xe = 0; xe <= Se; xe += 1) {
        const Y = xe / Se;
        v({
          x: Xn(w, T, Y),
          y: Xn(C, U, Y),
          radiusPx: Xn(le, G, Y)
        });
      }
    }
    v(_[_.length - 1]), O.restore();
  }
  function J(O, _, k, se) {
    de(O, _, k, se, { preview: !1 });
  }
  function pe(O, _, k, se, Z) {
    var V, p, m, w;
    if (!O || !Array.isArray(_) || _.length < 3) return;
    const I = "u", v = "v";
    if (O.save(), String((k == null ? void 0 : k.layerKind) || "") === "mask")
      O.fillStyle = "rgba(255,255,255,1)";
    else if (String((k == null ? void 0 : k.toolKind) || "") === "eraser")
      O.globalCompositeOperation = "destination-out", O.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      O.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    O.beginPath(), O.moveTo(Number(((V = _[0]) == null ? void 0 : V[I]) || 0) * se.w, Number(((p = _[0]) == null ? void 0 : p[v]) || 0) * se.h);
    for (let C = 1; C < _.length; C += 1)
      O.lineTo(Number(((m = _[C]) == null ? void 0 : m[I]) || 0) * se.w, Number(((w = _[C]) == null ? void 0 : w[v]) || 0) * se.h);
    O.closePath(), O.fill(), O.restore();
  }
  function fe(O) {
    const _ = (O == null ? void 0 : O.geometry) || null;
    return _ ? String(_.geometryKind || "") === "lasso_fill" ? Array.isArray(_.points) ? _.points : [] : Array.isArray(_.processedPoints) && _.processedPoints.length ? _.processedPoints : Array.isArray(_.rawPoints) && _.rawPoints.length ? _.rawPoints : Array.isArray(_.points) ? _.points : [] : [];
  }
  function R(O, _) {
    const k = fe(O);
    return !Array.isArray(k) || !k.length ? [] : k.map((se) => ({
      x: Number((se == null ? void 0 : se.u) || 0) * Number((_ == null ? void 0 : _.w) || 1),
      y: Number((se == null ? void 0 : se.v) || 0) * Number((_ == null ? void 0 : _.h) || 1),
      radiusPx: ie(O, se, Number((_ == null ? void 0 : _.w) || 1), Number((_ == null ? void 0 : _.h) || 1))
    }));
  }
  function X(O, _, k = null) {
    var V, p, m, w;
    if (!(O != null && O.ctx) || !_) return !1;
    const se = k || { w: Number(((V = O.canvas) == null ? void 0 : V.width) || 0), h: Number(((p = O.canvas) == null ? void 0 : p.height) || 0) }, Z = String((_ == null ? void 0 : _.toolKind) || "") === "eraser" ? {
      ..._,
      layerKind: "mask",
      toolKind: String(((m = _ == null ? void 0 : _.geometry) == null ? void 0 : m.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : _;
    if (String(((w = _ == null ? void 0 : _.geometry) == null ? void 0 : w.geometryKind) || "") === "lasso_fill")
      return pe(O.ctx, fe(Z), Z, se), !0;
    const v = R(Z, se);
    return v.length ? (J(O.ctx, v, Z, se), !0) : !1;
  }
  function A(O, _, k, se = 8) {
    const Z = new Uint8Array(_ * k), I = [], v = new Int32Array(_ * k), V = new Int32Array(_ * k);
    for (let p = 0; p < k; p += 1)
      for (let m = 0; m < _; m += 1) {
        const w = p * _ + m;
        if (Z[w] || O[w] <= se) continue;
        let C = 0, T = 0;
        v[T] = m, V[T] = p, T += 1, Z[w] = 1;
        const U = [];
        let le = m, G = p, oe = m, N = p;
        for (; C < T; ) {
          const L = v[C], te = V[C];
          C += 1, U.push({ x: L, y: te }), L < le && (le = L), te < G && (G = te), L > oe && (oe = L), te > N && (N = te);
          const we = [
            [(L - 1 + _) % _, te],
            [(L + 1) % _, te],
            [L, te - 1],
            [L, te + 1]
          ];
          for (const [Se, xe] of we) {
            if (xe < 0 || xe >= k) continue;
            const Y = xe * _ + Se;
            Z[Y] || O[Y] <= se || (Z[Y] = 1, v[T] = Se, V[T] = xe, T += 1);
          }
        }
        I.push({ pixels: U, minX: le, minY: G, maxX: oe, maxY: N });
      }
    return I;
  }
  function ge(O, _) {
    const k = [...new Set((Array.isArray(O == null ? void 0 : O.pixels) ? O.pixels : []).map((p) => Number((p == null ? void 0 : p.x) || 0)).filter((p) => Number.isFinite(p)))].sort((p, m) => p - m);
    if (!k.length) return null;
    if (k.length === 1)
      return { startX: k[0], widthPx: 1 };
    let se = -1, Z = 0;
    for (let p = 0; p < k.length; p += 1) {
      const m = k[p], C = (p === k.length - 1 ? k[0] + _ : k[p + 1]) - m - 1;
      C > se && (se = C, Z = p);
    }
    const I = (k[(Z + 1) % k.length] + _) % _;
    let v = 1 / 0, V = -1 / 0;
    for (const p of k) {
      const m = (p - I + _) % _;
      v = Math.min(v, m), V = Math.max(V, m);
    }
    return {
      startX: I,
      widthPx: Math.max(1, V - v + 1)
    };
  }
  function P(O, _, k = {}) {
    var m;
    const se = Number((O == null ? void 0 : O.width) || 0), Z = Number((O == null ? void 0 : O.height) || 0), I = (m = O == null ? void 0 : O.getContext) == null ? void 0 : m.call(O, "2d");
    if (!I || se < 1 || Z < 1) return [];
    const v = I.getImageData(0, 0, se, Z), V = new Uint8Array(se * Z);
    for (let w = 0; w < V.length; w += 1) V[w] = v.data[w * 4 + 3];
    return A(V, se, Z, 8).map((w, C) => {
      const T = ge(w, se);
      if (!T) return null;
      const U = Number(T.widthPx || 0), le = w.maxY - w.minY + 1, G = Number(T.startX || 0), oe = on({ label: "editor.lasso-fill" });
      oe.width = U, oe.height = le;
      const N = oe.getContext("2d");
      if (!N) return null;
      const L = N.createImageData(U, le);
      return w.pixels.forEach(({ x: te, y: we }) => {
        const Se = (we * se + te) * 4, xe = (Number(te || 0) - G + se) % se, Y = ((we - w.minY) * U + xe) * 4;
        L.data[Y + 0] = v.data[Se + 0], L.data[Y + 1] = v.data[Se + 1], L.data[Y + 2] = v.data[Se + 2], L.data[Y + 3] = v.data[Se + 3];
      }), N.putImageData(L, 0, 0), {
        id: ao("raster"),
        type: "raster_frozen",
        layerKind: _ === "mask" ? "mask" : "paint",
        z_index: Number((k == null ? void 0 : k.z_index) || 0) + C * 1e-3,
        locked: (k == null ? void 0 : k.locked) === !0,
        bbox: {
          u0: 0,
          v0: w.minY / Z,
          u1: U / se,
          v1: (w.maxY + 1) / Z
        },
        rasterDataUrl: oe.toDataURL("image/png"),
        transform: {
          du: G / se,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(O) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = O);
    },
    processFreehandPoints: u,
    createRasterSurface: S,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: b,
    getDisplayPaintRevisionKey: y,
    refreshPaintEngineRevisionCache: E,
    markObjectVisualsDirty: W,
    markPaintStrokeVisualsDirty: D,
    markPaintCompositeVisualsDirty: q,
    rebuildPaintEngineIfNeeded: ve,
    getDesiredPaintTargetDescriptor: _e,
    getActivePaintTargetDescriptor: he,
    rasterizeStrokeToSurface: X,
    createRasterFrozenObjectsFromCanvas: P
  };
}
function NA(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h, S, g, b = { stored: null, shown: null, handoff: null, fps: null };
  function y(R, X = null) {
    var A;
    if (R && typeof R == "object" && !Array.isArray(R)) return R;
    if (Array.isArray(R) && R.length > 0) {
      const ge = R[0];
      if (ge && typeof ge == "object" && !Array.isArray(ge)) return ge;
    }
    if (Array.isArray(X) && X.length > 0) {
      const ge = (A = X[0]) == null ? void 0 : A.parsed_state;
      if (ge && typeof ge == "object" && !Array.isArray(ge))
        return {
          yaw_deg: Number(ge.yaw_deg || 0),
          pitch_deg: Number(ge.pitch_deg || 0),
          hFOV_deg: Number(ge.hFOV_deg || 30),
          rot_deg: Number(ge.roll_deg || 0)
        };
    }
    return null;
  }
  function H(R, X, A) {
    const ge = Math.max(1, Number(X || 1)), P = Math.max(1, Number(A || 1)), O = Fe(Number(R || 30), 0.1, 179) * Nr, _ = 2 * Math.atan(Math.tan(O * 0.5) * (P / ge));
    return Fe(_ * $i, 0.1, 179);
  }
  function z(R) {
    const X = String(R || "").trim();
    if (!X) return null;
    try {
      const A = JSON.parse(X);
      if (!A || typeof A != "object" || String(A.kind || "") !== "pano_sticker_state") return null;
      const ge = A.version;
      let P = null;
      if (typeof ge == "number" && Number.isInteger(ge) ? P = ge : typeof ge == "string" && /^\d+$/.test(ge) && (P = Number.parseInt(ge, 10)), P !== 1) return null;
      const O = A.pose;
      if (!O || typeof O != "object") return null;
      const _ = Number(O.yaw_deg), k = Number(O.pitch_deg), se = Number(O.roll_deg), Z = Number(O.hFOV_deg);
      if (![_, k, se, Z].every((p) => Number.isFinite(p))) return null;
      let I = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(I, -0) && (I = 0);
      const v = {
        yaw_deg: I,
        pitch_deg: Fe(k, -89.9, 89.9),
        roll_deg: se,
        hFOV_deg: Fe(Z, 0.1, 179)
      }, V = Number(A.source_aspect);
      return Number.isFinite(V) && V > 0 && (v.source_aspect = V), v;
    } catch {
      return null;
    }
  }
  function ee(R) {
    const X = Number(R == null ? void 0 : R.yaw_deg), A = Number(R == null ? void 0 : R.pitch_deg), ge = Number((R == null ? void 0 : R.roll_deg) ?? (R == null ? void 0 : R.rot_deg)), P = Number(R == null ? void 0 : R.hFOV_deg), O = Hi(R);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(X) ? X : 0),
        pitch_deg: Fe(Number.isFinite(A) ? A : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ge) ? ge : 0,
        hFOV_deg: Fe(Number.isFinite(P) ? P : 90, 0.1, 179)
      },
      source_aspect: O
    };
  }
  function E(R) {
    var k;
    if (!R || typeof R != "object") return ee(null);
    const X = Number(R == null ? void 0 : R.yaw_deg), A = Number(R == null ? void 0 : R.pitch_deg), ge = Number((R == null ? void 0 : R.roll_deg) ?? (R == null ? void 0 : R.rot_deg)), P = Number(R == null ? void 0 : R.hFOV_deg), O = Number(R == null ? void 0 : R.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(P) && Number.isFinite(O)) {
      const se = Fe(P, 0.1, 179) * Nr, Z = Fe(O, 0.1, 179) * Nr, I = Math.tan(Z * 0.5);
      if (Math.abs(I) > 1e-6) {
        const v = Math.tan(se * 0.5) / I;
        Number.isFinite(v) && v > 0 && (_ = v);
      }
    }
    if (R != null && R.asset_id && ((k = o == null ? void 0 : o.assets) != null && k[R.asset_id])) {
      const se = o.assets[R.asset_id], Z = Number((se == null ? void 0 : se.w) || 0), I = Number((se == null ? void 0 : se.h) || 0);
      Z > 0 && I > 0 && (_ = Z / I);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(X) ? X : 0),
        pitch_deg: Fe(Number.isFinite(A) ? A : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ge) ? ge : 0,
        hFOV_deg: Fe(Number.isFinite(P) ? P : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function W(R) {
    return t.linkedValue(n, R);
  }
  function D(R, X, A) {
    const ge = R && typeof R == "object" ? {
      yaw_deg: Number(R.yaw_deg || 0),
      pitch_deg: Number(R.pitch_deg || 0),
      roll_deg: Number(R.rot_deg ?? R.roll_deg ?? 0),
      hFOV_deg: Number(R.hFOV_deg || 30)
    } : z(X);
    if (ge) {
      const _ = Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || ge.source_aspect || 1), k = Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 1);
      return {
        yaw_deg: Number(ge.yaw_deg || 0),
        pitch_deg: Number(ge.pitch_deg || 0),
        hFOV_deg: Number(ge.hFOV_deg || 30),
        vFOV_deg: H(ge.hFOV_deg, _, k),
        rot_deg: Number(ge.roll_deg || 0)
      };
    }
    const P = Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || 1), O = Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: H(30, P, O),
      rot_deg: 0
    };
  }
  function q() {
    const R = Ot(n, "external-sticker") ? y(c("pano_sticker_input_pose"), null) : null;
    return n0(o, e0(n, { pose: R, handoff: ve() }));
  }
  function ve() {
    return Ot(n, "sticker-handoff") ? bw(n, c("pano_sticker_handoff")) : null;
  }
  function _e() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function he(R, X, A) {
    return structuredClone(Po(An({ version: 2, timeline: { fps: X }, stickers: [R] }), A).stickers[0]);
  }
  function ie({ record: R = !0, restored: X = !1 } = {}) {
    var se;
    if (!_e()) return !1;
    const A = o.stickers.find((Z) => {
      var I;
      return ((I = Z.source) == null ? void 0 : I.kind) === "port";
    });
    if (!A)
      return b = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: ge } = o.timeline;
    let P;
    if (X || !b.handoff || ((se = b.stored) == null ? void 0 : se.id) !== A.id)
      P = structuredClone(A);
    else {
      const Z = (I) => b.fps === ge ? I : he(I, b.fps, ge);
      R && pw(A, Z(b.shown)), P = hw(A, Z(b.stored));
    }
    const O = ve(), _ = O ? Wd(o, P, O) : structuredClone(P), k = JSON.stringify(_) !== JSON.stringify(A);
    if (k) {
      for (const Z of Object.keys(A)) delete A[Z];
      Object.assign(A, _);
    }
    return b = { stored: P, shown: structuredClone(_), handoff: O, fps: ge }, k;
  }
  function ke() {
    return b.handoff ? { ...o, stickers: o.stickers.map((R) => {
      var X;
      return ((X = R.source) == null ? void 0 : X.kind) === "port" ? b.stored : R;
    }) } : o;
  }
  function me(R) {
    var ge;
    if (!_e() || ((ge = R == null ? void 0 : R.source) == null ? void 0 : ge.kind) !== "port") return null;
    const { handoff: X } = b, A = !!X && X.placement === R.placement;
    return wo[R.placement].map((P) => ({ name: P, overridden: A && R.handoff_overrides.includes(P) }));
  }
  function de(R) {
    ie();
    const X = o.stickers.find((A) => {
      var ge;
      return ((ge = A.source) == null ? void 0 : ge.kind) === "port";
    });
    !X || X.locked || !b.handoff || !mw(o, X, b.handoff, R) || (b.shown = structuredClone(X), b.stored[R] = structuredClone(X[R]), f(), a(), u(), g(), h());
  }
  function J() {
    var k;
    const R = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((se) => String((se == null ? void 0 : se.name) || "") === "sticker_image") : -1, X = R >= 0 ? ((k = n.getInputLink(R)) == null ? void 0 : k.id) ?? null : null, A = l(() => {
      oi(n, "image-loaded");
    }), ge = y(c("pano_sticker_input_pose"), null), P = W("sticker_state"), O = t.externalStateHash(n, P), _ = X == null ? null : D(ge, P, A);
    return Qg(o, {
      connected: X != null,
      linkId: X,
      stateHash: O,
      pose: _,
      imageWidth: Number((A == null ? void 0 : A.naturalWidth) || (A == null ? void 0 : A.width) || 0),
      imageHeight: Number((A == null ? void 0 : A.naturalHeight) || (A == null ? void 0 : A.height) || 0)
    });
  }
  function pe(R = "sync") {
    if (s !== "stickers" || i) return;
    const X = n.__panoSceneStateV2 ? q() : J();
    if (X.changed) {
      const A = o.stickers.find(d);
      o.stickers = X.state.stickers, o.active = X.state.active, A && r.selectedId === A.id && !o.stickers.some((ge) => ge.id === A.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), S();
    } else ie({ restored: R === "open" }) ? (u(), g()) : R === "image-loaded" && g();
    h();
  }
  function fe() {
    const R = Array.isArray(o.stickers) ? o.stickers : [], X = [];
    for (const A of R)
      d(A) && (A.visible = !1, X.push(A));
    return X;
  }
  return {
    connect(R) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: h,
        updateSelectionMenu: S,
        updateSidePanel: g
      } = R);
    },
    computeStickerVFov: H,
    buildCanonicalCutoutStickerState: ee,
    buildCanonicalSelectedStickerState: E,
    reconcileExternalStickerFromInputs: pe,
    collectExternalStickersForClearAll: fe,
    syncPortHandoff: ie,
    storedEditorState: ke,
    portHandoffLanes: me,
    revertPortHandoffLane: de
  };
}
function oo(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function PA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function AA({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: a,
  isActiveLassoTool: l
}) {
  var z, ee;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: c,
    activePane: c ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: c ? !!r : !1,
    pickerHueColor: n({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (E, W) => ({ index: W, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((z = t.find((E) => i(e.paintColor, E.color))) == null ? void 0 : z.id) || "", f = !u, h = o(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((ee = e.customPaintColor) == null ? void 0 : ee.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), b = e.brushSizes[g] ?? 10, y = l(), H = Array.from({ length: 8 }, (E, W) => e.customPaintHistory[W] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(h.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: H.map((E, W) => ({
      index: W,
      color: E ? { cssColor: n(E, 1) } : null
    })),
    sizeValue: b,
    sizeText: String(b),
    sizeFill: `${Math.max(0, Math.min(100, (b - 1) / 119 * 100))}%`,
    sizeDisabled: y,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function CA({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
  return {
    coverage: { value: r(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const IA = {
  position_x: ["Position", "X", 0.01],
  position_y: ["Position", "Y", 0.01],
  position_z: ["Position", "Z", 0.01],
  yaw_deg: ["Rotation", "Y", 0.5],
  pitch_deg: ["Rotation", "P", 0.5],
  roll_deg: ["Rotation", "R", 0.5],
  rot_deg: ["Rotation", "R", 0.5],
  hFOV_deg: ["FOV", "H", 0.25],
  vFOV_deg: ["FOV", "V", 0.25]
};
function EA(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = IA[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Zc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function OA({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
  const o = !n && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!r || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!r || !!n },
      "toggle-grid": {
        icon: o ? We.eye : We.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function ly({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function FA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function TA(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const xo = "erp", DA = ["1:1", "4:3", "3:2", "16:9"];
function cy(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...DA.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: xo, label: Number(r) === 180 ? "180°" : "360°", active: e === xo }] : []
  ];
}
const RA = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" }, LA = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] }, VA = { ...RA, opacity: "Opacity" };
function ff(e) {
  return `Upstream · ${e}`;
}
function $A({ layer: e, editable: t, locked: r, readOnly: n, placement: i, override: o = null, handoff: s = null }) {
  const a = e !== null && !t, l = e !== null && !n && t && !r && !!o, c = (d) => !n && !r && !!(s != null && s.some((u) => u.name === d && u.overridden));
  return {
    origin: e === null ? "" : `${ff(e)}${a ? " · inherited only" : ""}`,
    note: a ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !l },
    lanes: LA[i].map((d) => ({
      name: d,
      label: VA[d],
      action: e === null && s ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: e === null ? !c(d) : !l || o.placement !== i || !Object.hasOwn(o, d)
    }))
  };
}
function zA({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c,
  upstream: d = null
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: EA(s),
    notes: a,
    upstream: d,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function jA({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: s,
  selectedLocked: a,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: h,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: S = !1,
  coverage: g = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream: b = null
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let y = [];
  if (r.length > 1)
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (y = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a }
    ], d(t) || (y.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: h.duplicate }), y.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: h.replace_image })), d(t)) {
      const H = f(), z = u(t);
      y.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: H ? "Back to initial position" : "Already at initial position",
        icon: h.back_initial,
        disabled: !H
      }), y.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: z ? "Show" : "Hide",
        tip: z ? "Show input image" : "Hide input image",
        icon: z ? h.eye : h.eye_dashed
      });
    }
    y.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed }), (!d(t) || b) && y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a });
  } else
    y = [
      {
        key: "aspect",
        kind: "aspect",
        icon: h.aspect,
        open: !!c,
        choices: cy(l, { erp: S, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: h.rotate_90, disabled: l === xo }
    ], S ? y.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete }) : y.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    );
  return b && (y = y.map((H) => ({
    ...H,
    disabled: H.key === "toggle-lock" ? !b.editable : H.key === "delete" ? !b.editable || !!H.disabled : !0
  }))), uy(i.corners, y);
}
const rh = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function HA({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? rh.filter((s) => s.cameraTip) : rh;
  return uy([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: We.delete }] : []
  ]);
}
function GA(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), h = d + 18, S = c - 18 - r;
  let g;
  return h <= f ? g = Math.max(h, 14) : S >= 14 ? g = Math.min(S, f) : g = Math.min(Math.max(h, 14), f), { left: u, top: g };
}
function uy(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), s = Math.max(...n), a = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: a, maxY: l }
  };
}
const dy = "painting", hs = "background";
function KA(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const WA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function UA(e, { span: t, portBarEnd: r = () => null, selection: n, selectedId: i, expanded: o, openRows: s, audio: a = null, fpsLocked: l = !1, camera: c = !1, cameraHideable: d = !1, scene: u = !1, upstream: f = [], background: h = null }) {
  const S = (y, H, z, ee, E, W, { keyable: D = !0, hideable: q = !0, origin: ve = null } = {}) => {
    const _e = (he) => (n == null ? void 0 : n.owner) === y && n.lane === he ? n.frames.map((ie) => ie + W) : [];
    return {
      id: y,
      label: z,
      icon: ee,
      clip: E,
      selected: y === i,
      hideable: q,
      // The background has no eye and always shows.
      visible: H.visible !== !1,
      ...ih(ve),
      keyable: D,
      open: D && s.has(y),
      keys: nS(H).map((he) => ({ frame: he.frame + W, full: he.full })),
      selectedFrames: _e(null),
      lanes: (D ? Ao(H) : []).map((he) => ({
        key: `${y}:${he}`,
        lane: he,
        label: WA[he],
        frames: H[he].keyframes.map((ie) => ie.frame + W),
        selectedFrames: _e(he)
      }))
    };
  }, g = ({ start: y, in: H, duration: z }, ee = null) => ({ clip: { start: y, end: z === null ? ee : y + z }, offset: y - H }), b = (y, { idOf: H = (E) => E, sceneRow: z, origin: ee = null }) => {
    const E = y.stickers.filter((D) => D.placement === "sky").sort((D, q) => q.z_index - D.z_index), W = y.stickers.filter((D) => D.placement === "world");
    return [
      ...[...E, ...W].map((D) => {
        const { clip: q, offset: ve } = g(D.clip, r(D)), _e = lg(ee ? { ...D, id: D.origin.id } : D);
        return S(D.id, D, _e, We.image, q, ve, { origin: ee && { ...ee, overridden: ee.stickerOverridden(D) } });
      }),
      ...KA(y.painting) || !y.painting_visible ? [{
        id: H(dy),
        label: "Paint",
        icon: We.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: y.painting_visible,
        ...ih(ee && { ...ee, overridden: ee.paintingOverridden }),
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...z || pl(y.scene) ? [(() => {
        const { clip: D, offset: q } = g(y.scene.clip);
        return S(H("scene"), y.scene, "Scene", We.box, D, q, {
          keyable: !1,
          origin: ee && { ...ee, overridden: ee.sceneOverridden }
        });
      })()] : []
    ];
  };
  return {
    visible: !0,
    expanded: o,
    hasAudio: !!a,
    muted: !!(a != null && a.muted),
    span: t,
    // A Timeline of one frame has nothing to play.
    playable: t > 1,
    fps: e.timeline.fps,
    fpsLocked: l,
    length: e.timeline.length,
    rows: [
      ...h ? [(() => {
        const { clip: y, offset: H } = g(e.background.clip, h.end);
        return S(hs, e.background, "Background", We.unwrap, y, H, { keyable: !1, hideable: !1 });
      })()] : [],
      ...c ? [S("camera", e.camera, "Camera", We.camera, null, 0, { hideable: d })] : [],
      ...b(e, { sceneRow: u })
    ],
    groups: f.map(({ key: y, sceneState: H, editable: z, record: ee, scene: E, deleted: W }) => ({
      key: y,
      label: `${ff(y)}${z ? "" : " · inherited only"}`,
      revert: { disabled: !z || !p0(ee) },
      restore: { label: `Restore deleted (${W})`, disabled: !z || W === 0 },
      rows: b(H, {
        idOf: (D) => Iu(y, D),
        sceneRow: E || !H.scene.visible,
        origin: {
          editable: z,
          stickerOverridden: (D) => !!(ee != null && ee.stickers.some((q) => q.id === D.origin.id && q.placement === D.placement)),
          paintingOverridden: !!ee && Object.hasOwn(ee, "painting_visible"),
          sceneOverridden: !!ee && Object.keys(ee.scene).length > 0
        }
      })
    }))
  };
}
function ih(e) {
  return e ? { upstream: !0, overridden: e.overridden, editable: e.editable } : { upstream: !1, overridden: !1, editable: !0 };
}
function BA(e, t, r, n) {
  const i = sS(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const YA = 4, qA = 0.25, fy = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function py(e) {
  return Object.hasOwn(fy, e);
}
function hy(e, t, r) {
  const { forward: n, right: i } = Ki(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function XA() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return py(o) ? (e.size || (n = s), e.add(o), !0) : !1;
    },
    // Lets a held key go; false when it was not held.
    release(o) {
      return e.delete(o);
    },
    releaseAll: i,
    // Shift and Alt as a key event has them.
    modifiers(o) {
      t = !!o.shiftKey, r = !!o.altKey;
    },
    get held() {
      return e.size > 0;
    },
    direction() {
      const o = { forward: 0, right: 0, up: 0 };
      for (const s of e) {
        const [a, l] = fy[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? YA : 1) * (r ? qA : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const JA = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), ZA = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function QA(e) {
  var n;
  const t = e.viewTransition, r = (t == null ? void 0 : t.to) ?? {
    position: e.viewPosition,
    yaw_deg: e.viewYaw,
    pitch_deg: e.viewPitch,
    hFOV_deg: e.viewFov,
    distance: e.viewDistance
  };
  return {
    mode: e.mode,
    spaceMode: ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e.spaceMode,
    position: [...r.position],
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    hFOV_deg: r.hFOV_deg,
    distance: r.distance,
    moved: t != null && t.end ? t.end.moved : e.viewMoved
  };
}
function oh(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function eC(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return JA.has(r) && (r !== "frame" || t) && ZA.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && oh(s, -89.9, 89.9) && oh(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
    mode: r,
    spaceMode: n,
    viewPosition: [...i],
    viewYaw: o,
    viewPitch: s,
    viewFov: a,
    viewDistance: l,
    viewMoved: c
  } : null;
}
const tC = 250, nC = 600, rC = 180, iC = 2;
function oC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function es(e, t, r) {
  return e + (t - e) * r;
}
function sC(e, t, r = 1) {
  const n = Math.max(
    Math.abs(fd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / rC + i / iC);
  return Math.round(es(tC, nC, o));
}
function aC(e, t, r) {
  const n = oC(Fe(r, 0, 1));
  return {
    position: e.position.map((i, o) => es(i, t.position[o], n)),
    yaw_deg: Kt(e.yaw_deg + fd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: es(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: es(e.hFOV_deg, t.hFOV_deg, n),
    distance: es(e.distance, t.distance, n)
  };
}
function lC(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(fd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function cC(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return lC(e, t) ? null : { from: e, to: t, startTs: r, durationMs: sC(e, t, n), end: i };
}
function uC(e, t) {
  const r = Fe((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: aC(e.from, e.to, r), done: !1 };
}
function Ol(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function dC(e, t, r) {
  const n = Ol(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function fC(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    runtime: a,
    sceneV2: l,
    shotEditor: c,
    state: d,
    stateV2: u,
    studio: f,
    viewController: h
  } = e;
  let S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie = null;
  function ke(F, ne = null) {
    const $ = _();
    q(() => {
      i.viewTransition = cC($, F, performance.now(), { scale: w(), end: ne });
    }), !i.viewTransition && ne && me(ne), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0, _e(), W({ localOnly: !0, reason: ft.VIEW });
  }
  function me(F) {
    P(Su({ ...ge(), moved: F.moved }, F.mode, k())), a.backgroundDirty = !0;
  }
  function de() {
    i.viewTransition && (i.viewTransition = null, _e());
  }
  function J(F, ne) {
    ke({ ..._(), yaw_deg: F, pitch_deg: ne });
  }
  function pe() {
    return !f || Z() && !H();
  }
  function fe() {
    return i.mode === "pano" && R();
  }
  function R() {
    return u && __({ sceneLinked: l && !!ho(s).scene, files: D(), stickers: d.stickers });
  }
  function X() {
    return i.spaceMode === "6dof" && fe();
  }
  function A() {
    var F, ne, $;
    return Kk(($ = (ne = (F = t.ui) == null ? void 0 : F.settings) == null ? void 0 : ne.getSettingValue) == null ? void 0 : $.call(ne, C0));
  }
  function ge() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function P(F) {
    i.spaceMode = F.mode, i.viewPosition = F.position, i.viewMoved = F.moved;
  }
  function O(F) {
    var $;
    const ne = dC(i.spaceMode, i.viewTransition, F);
    if (ne !== "keep") {
      if (ne === "return") {
        ke({ ..._(), position: k(), distance: (($ = p()) == null ? void 0 : $.radius) || pr }, { mode: F, moved: !1 });
        return;
      }
      de(), P(Su({ ...ge(), position: _().position }, F, k())), a.backgroundDirty = !0, _e(), W({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function _() {
    var $;
    const F = i.viewMoved ? i.viewDistance : (($ = p()) == null ? void 0 : $.radius) || pr, ne = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: F };
    return m_(i.spaceMode, ne, k());
  }
  function k() {
    return Z() ? V().position : [0, 0, 0];
  }
  function se() {
    return r && d.camera !== null;
  }
  function Z() {
    return se() && d.camera.visible;
  }
  function I() {
    return d.painting_visible !== !1;
  }
  function v(F) {
    return F.visible && Gi(F.clip, i.frame);
  }
  function V() {
    return Bl(d.camera, i.frame);
  }
  function p() {
    var ne;
    const F = S();
    return ((ne = F.space ?? F.content) == null ? void 0 : ne.sphere) ?? null;
  }
  function m(F) {
    i.viewPosition = F.position, i.viewYaw = F.yaw_deg, i.viewPitch = F.pitch_deg, i.viewDistance = F.distance, i.viewMoved = !0, a.backgroundDirty = !0, W({ localOnly: !0, reason: ft.VIEW });
  }
  function w() {
    var F;
    return ((F = p()) == null ? void 0 : F.radius) || pr;
  }
  function C() {
    var ce;
    const F = S().space, ne = g(), $ = i.worldSelectedId || i.selectedId, Q = ne.stickers.findIndex((be) => be.id === $), K = Q < 0 ? ve($) : null, B = Q < 0 ? (ce = F.upstreamItems.find((be) => {
      var M;
      return ((M = be.request) == null ? void 0 : M.id) === $;
    })) == null ? void 0 : ce.request : F.sticker, j = Q < 0 && !Ut(K) ? null : {
      sticker: K ?? ne.stickers[Q],
      value: K ? Wr(K, i.frame) : $s(ne, i.frame).stickers[Q],
      plane: [...F.stickers, ...F.upstreamStickers].find((be) => be.id === $) ?? null,
      item: (B == null ? void 0 : B.id) === $ && B.url ? { kind: B.kind, box: o.sceneBox(B.url) } : null
    }, x = y() ? xe() : M_(p(), j);
    if (!x) return;
    const re = _();
    i.viewDistance = re.distance, i.viewMoved = !0, ke(S_(re, x, n.width, n.height));
  }
  function T(F) {
    return o.pickSurface(ye(), F.x, F.y, n.width, n.height);
  }
  function U(F, ne) {
    var $;
    return _u(F, ne, i.viewMoved ? null : ($ = p()) == null ? void 0 : $.center, w());
  }
  function le() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function G(F, ne) {
    const $ = performance.now(), Q = { x: F.x, y: F.y, time: $, key: o.contentRevision(), view: le() };
    if (!mg(ie, Q)) {
      const B = T(F);
      ie = { ...Q, cost: performance.now() - $, hit: B };
    }
    const K = _();
    m(bg(K, U(K, ie.hit), ne, w())), ie.view = le(), ie.wheelTime = $;
  }
  function oe(F, ne, $) {
    const Q = _();
    i.interaction = F === "orbit" ? { kind: "space_orbit", last: ne, pivot: U(Q, T(ne)) } : { kind: "space_pan", last: ne, depth: hg(Q, w()) }, he(ne), n.setPointerCapture($);
  }
  function N() {
    return X() || z();
  }
  function L(F) {
    const ne = E.elapsed(F);
    if (!ne || i.viewTransition) return !1;
    const $ = E.speed(w()) * ne;
    if (z()) return ee(E.direction(), $);
    if (!X()) return !1;
    const Q = _(), K = hy(Q, E.direction(), $);
    return K === Q ? !1 : (i.viewPosition = K.position, i.viewDistance = Q.distance, i.viewMoved = !0, !0);
  }
  function te() {
    As(s).view = QA(i);
  }
  function we() {
    const F = c && !ly({ hasShot: !!b(), erp: H() }).disabled, ne = eC(As(s).view, { frame: F });
    ne && Object.assign(i, ne);
  }
  function Se(F) {
    return F * 0.2;
  }
  function xe() {
    return { center: V().position, radius: Se(w()) };
  }
  function Y(F, ne) {
    const { yaw_deg: $, pitch_deg: Q } = kg(F.position, ne);
    return { ...F, yaw_deg: $, pitch_deg: Q };
  }
  function ye() {
    return $d(_(), n.width, n.height, p());
  }
  return {
    connect(F) {
      ({
        editorViewInput: S,
        editorViewSceneState: g,
        getActiveCutoutShot: b,
        isCameraSelected: y,
        isErpCamera: H,
        isFreeFrameView: z,
        moveFrameByKeys: ee,
        moveKeys: E,
        requestDraw: W,
        sceneFiles: D,
        startAnimation: q,
        stickerById: ve,
        syncFloatingViewButtonState: _e,
        updateCursor: he
      } = F);
    },
    transitionView: ke,
    applyViewTransitionEnd: me,
    cancelViewTransition: de,
    turnViewTo: J,
    cameraPreviewShown: pe,
    isSpaceView: fe,
    hasSpaceContent: R,
    isFreeSpaceView: X,
    viewControls: A,
    spaceModeState: ge,
    applySpaceMode: P,
    setSpaceMode: O,
    spaceViewState: _,
    spaceOrigin: k,
    hasCamera: se,
    cameraShoots: Z,
    paintingShown: I,
    sceneStickerShown: v,
    cutoutCamera: V,
    contentSphere: p,
    setSpaceView: m,
    spaceScale: w,
    frameSpaceContent: C,
    zoomSpaceAt: G,
    startSpaceDrag: oe,
    canKeyMove: N,
    stepKeyMove: L,
    saveView: te,
    restoreView: we,
    currentSpaceCamera: ye,
    cameraFrustumLength: Se,
    cameraSphere: xe,
    lookingAt: Y
  };
}
function pC(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: s,
    state: a,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v, V = { revision: -1, sceneState: null }, p = null;
  function m() {
    return p || (p = T()), p;
  }
  function w() {
    p = null;
  }
  function C() {
    return V.sceneState;
  }
  function T() {
    const F = q(), ne = g(), $ = { ...a.assets };
    for (const Le of l ? [] : a.stickers) {
      const $e = String((Le == null ? void 0 : Le.asset_id) || "");
      $e && !$[$e] && i.has($e) && ($[$e] = { type: "comfy_image", filename: $e });
    }
    const Q = l ? a.stickers.map((Le) => J(Le) ? { ...Le, source: { kind: "file", filename: _(Le) } } : Le) : a.stickers;
    V.revision !== s.stateRevision && (V = { revision: s.stateRevision, sceneState: An({ ...a, stickers: Q, assets: $, painting: null }) }), l && U(V.sceneState);
    const K = $s(V.sceneState, r.frame), B = fe ? W() : null, j = (Le) => {
      if (l && !Le.visible) return null;
      if (fe && ke(Le)) return B;
      const $e = _e(Le);
      return $e ? { media: $e, revision: ve($e) } : null;
    }, x = I(), re = [...x.sky, ...Ig(V.sceneState, r.frame, a.stickers, { media: j, paintLayers: ne, evaluated: K })], ce = F && (F === d || F === c) ? d.dataset.panoSrc : F;
    let be = ie(F) ? { media: F, revision: ve(F), coverage: h(), source: ce } : null;
    S(r.frame) || (be = Ym(f()));
    const M = he(), ue = g_(A(), M, ge());
    ue.mode !== r.spaceMode && H(), u(ue);
    const Pe = M ? le(V.sceneState, K, j, x) : null, Ee = de() ? { ...Pe, ...G(Pe) } : null;
    return { background: be, layers: re, space: Ee, content: Pe };
  }
  function U(F) {
    const ne = new Map(a.stickers.map(($) => [$.id, $.clip]));
    F.scene.clip = { ...a.scene.clip };
    for (const $ of F.stickers) {
      const Q = ne.get($.id);
      Q && ($.clip = { ...Q });
    }
  }
  function le(F, ne, $, Q) {
    const K = R(), B = zd(K, ne.scene), j = B != null && B.url ? n.sceneBox(B.url) : null, x = j && $a(B.kind, j), re = O(), ce = _g(re, F, ne), be = ce != null && ce.url ? n.sceneBox(ce.url) : null, M = be ? [{ box: $a(ce.kind, be), value: ce.value }] : [], ue = Og(F, r.frame, a.stickers, { media: $, evaluated: ne });
    for (const { request: Ee, value: Le } of Q.items) {
      const $e = Ee != null && Ee.url ? n.sceneBox(Ee.url) : null;
      $e && M.push({ box: $a(Ee.kind, $e), value: Le });
    }
    const Pe = Mu(k_(ne, x, [...ue, ...Q.stickers], M));
    return {
      evaluated: ne,
      sceneUrls: K ? K.urls.filter(Boolean) : [],
      scene: B,
      stickerUrls: wg(re, F),
      sticker: ce,
      stickers: ue,
      upstreamStickers: Q.stickers,
      upstreamItems: Q.items,
      sphere: Pe
    };
  }
  function G(F) {
    var $;
    const ne = (($ = F.sphere) == null ? void 0 : $.radius) || pr;
    return {
      gizmo: N() ? we() : oe(F.evaluated),
      grid: r.showGrid && !r.fullscreen ? R_(ne) : null,
      lines: y() ? te(ne) : []
    };
  }
  function oe(F) {
    const ne = X(), $ = Ut(ne) ? Wr(ne, r.frame) : F.stickers.find((Q) => Q.id === (ne == null ? void 0 : ne.id));
    return !v(ne) || !($ != null && $.active) ? null : { mode: r.gizmoMode, transform: wu($) };
  }
  function N() {
    return y() && r.selectedId === Id;
  }
  let L = { revision: -1, span: -1, segments: [] };
  function te(F) {
    const ne = se();
    (L.revision !== s.stateRevision || L.span !== ne) && (L = { revision: s.stateRevision, span: ne, segments: V_($_(a, ne)) });
    const { segments: $ } = L, Q = $.length ? [{ segments: $, color: H2 }] : [];
    if (!me()) return Q;
    const K = N() ? ty : j2;
    return [...Q, { segments: xg(ee(), b(F)), color: K }];
  }
  function we() {
    return !me() || !N() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: wu({ ...ee(), scale: 1 }) };
  }
  function Se() {
    const { background: F, layers: ne, space: $ } = m(), Q = t.width, K = t.height, B = E({ x: 0, y: 0, w: Q, h: K });
    let j = !1;
    return !F && !ne.length && !$ ? (n.clear(460551), j = n.ready) : (n.clear(), j = !!n.render({
      rect: B,
      camera: $ ? $d(P(), Q, K, $.sphere) : z(),
      background: F,
      layers: ne,
      space: $
    })), k(), (r.worldSelectedId || N() || pe()) && Z(), j;
  }
  function xe(F) {
    const { content: ne } = m();
    return !ne || !F.position ? ds(F) : vg(ds(F), F.position, D(), ne.sphere);
  }
  function Y(F, ne, $, Q = null) {
    const { background: K, layers: B, content: j } = m();
    if (!K && !B.length && !j) return null;
    const x = j && ne.position ? j : null;
    return n.render({ rect: F, camera: xe(ne), background: K, layers: B, space: x, owner: $, clearColor: Q });
  }
  function ye(F) {
    return n.clear(460551), !!n.renderUnwrap({ rect: E(F), ...m() });
  }
  return {
    connect(F) {
      ({
        applySpaceMode: u,
        backgroundColor: f,
        backgroundCoverage: h,
        backgroundShowsAt: S,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: b,
        cameraShoots: y,
        cancelViewTransition: H,
        currentViewCamera: z,
        cutoutCamera: ee,
        deviceRect: E,
        followPortSticker: W,
        frameViewDistance: D,
        getConnectedErpImage: q,
        getMediaRevisionToken: ve,
        getStickerImage: _e,
        hasSpaceContent: he,
        isDecodedImageReady: ie,
        isExternalSticker: ke,
        isFreeSpaceView: me,
        isSpaceView: de,
        isUploadingSticker: J,
        isWorldMenuShown: pe,
        portVideo: fe,
        sceneFiles: R,
        selectedWorldSticker: X,
        spaceModeState: A,
        spaceOrigin: ge,
        spaceViewState: P,
        stickerFiles: O,
        stickerImageKey: _,
        syncFloatingViewButtonState: k,
        timelineSpanFrames: se,
        updateSelectionMenu: Z,
        upstreamViewInput: I,
        worldStickerEditable: v
      } = F);
    },
    editorViewInput: m,
    endEditorViewFrame: w,
    editorViewSceneState: C,
    isCameraSelected: N,
    renderEditorView: Se,
    shotViewCamera: xe,
    drawEditorViewShot: Y,
    renderEditorViewUnwrap: ye
  };
}
function hC(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null }, h = /* @__PURE__ */ new Map();
  const S = /* @__PURE__ */ new Map(), g = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function b(Z) {
    if (!Z) return null;
    let I = S.get(Z);
    return I || (I = new Image(), I.onload = g, I.onerror = g, I.src = Z, S.set(Z, I)), I;
  }
  function y({ sceneState: Z, ui: I }) {
    return [
      ...Z.stickers.filter((v) => v.source.kind !== "port").map((v) => n(ml(v.source))),
      i(Tn(I, Ri)[0] || null),
      ...Z.painting.raster_objects.map((v) => v.rasterDataUrl)
    ].filter(Boolean);
  }
  function H() {
    return a && (bp(o, "scene") === o0 || !!z());
  }
  function z() {
    const Z = a && Ot(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, I = Array.isArray(Z) ? Z : null;
    if (f.list !== I) {
      f.entries.forEach(k), f = { list: I, entries: I ? s0(I).map((V) => ({ layer: V })) : [], fps: null };
      const v = new Set(f.entries.flatMap((V) => y(V.layer)));
      for (const V of [...S.keys()]) v.has(V) || S.delete(V);
    }
    return I && f.fps !== s.timeline.fps && ee(), I && f.entries;
  }
  function ee() {
    if (!f.list) return;
    const Z = l0(f.entries.map((I) => I.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((I, v) => {
      I.working = Z[v];
    }), f.fps = s.timeline.fps, h = Mp(Z);
  }
  function E() {
    if (!f.list) return;
    const Z = f.entries.map((v) => v.working), I = Iw(s.upstream, f.entries.map((v) => v.layer), Z, h, f.fps);
    I !== s.upstream && (s.upstream = I, h = Mp(Z));
  }
  function W() {
    const Z = z();
    Z && (s.upstream = Vw(s.upstream, Z.map((I) => I.layer)));
  }
  function D(Z) {
    E();
    const I = Z(s.upstream);
    return I === s.upstream ? !1 : (s.upstream = I, ee(), !0);
  }
  function q(Z) {
    const I = Z.map((v) => v.origin);
    return D((v) => Ow(v, I, s.timeline.fps));
  }
  function ve(Z, I = null) {
    return D((v) => Tw(v, Z, I));
  }
  function _e(Z) {
    return D((I) => Lw(I, Z));
  }
  function he(Z) {
    return D((I) => Rw(I, Z));
  }
  function ie() {
    return (z() ?? []).flatMap((Z) => Z.working.sceneState.stickers);
  }
  function ke(Z) {
    const I = f.entries.find((v) => {
      var V;
      return ((V = v.working) == null ? void 0 : V.key) === Z.origin.layer;
    });
    return I ? b(i(Tn(I.layer.ui, Ri)[0] || null)) : null;
  }
  function me(Z = null) {
    const I = z();
    if (!I) return null;
    const [v] = t.uiValue(o, "pano_upstream_frames") || t.uiValue(o, "pano_timeline_frames") || [], V = I.map((m) => m.working), p = (m) => xs((w) => Tn(I[m].layer.ui, w));
    return {
      frames: Number(v) > 0 ? Number(v) : 0,
      ends: d0(V, s.upstream, h, p, s.timeline.fps, Z)
    };
  }
  function de(Z) {
    const I = f.entries.find((v) => {
      var V;
      return ((V = v.working) == null ? void 0 : V.key) === Z.origin.layer;
    });
    return I ? xs((v) => Tn(I.layer.ui, v)) : null;
  }
  function J() {
    return (z() ?? []).map(({ layer: Z, working: I }) => {
      const v = Cs(I.key);
      return {
        key: I.key,
        sceneState: I.sceneState,
        editable: v,
        record: v ? s.upstream.find((V) => V.layer === I.key) ?? null : null,
        scene: Tn(Z.ui, "pano_scene_files").length > 0,
        deleted: v ? Dw(s.upstream, I) : 0
      };
    });
  }
  function pe(Z) {
    for (const { working: I } of z() ?? []) {
      const { key: v, sceneState: V } = I, p = Cs(v);
      if (Z === Iu(v, "scene")) return { editable: p, part: "scene", owner: V.scene, sceneState: V };
      if (Z === Iu(v, "painting")) return { editable: p, part: "painting", owner: null, sceneState: V };
      const m = V.stickers.find((w) => w.id === Z);
      if (m) return { editable: p, part: "sticker", owner: m, sceneState: V };
    }
    return null;
  }
  function fe() {
    if (!a) return "";
    const Z = z();
    if (Aw(bp(o, "scene"), Z)) return "Run the workflow to show the upstream scene.";
    if (!Z) return "";
    const I = t.uiList(o, "pano_sticker_warnings");
    return String(I.find((v) => String(v).startsWith(Pw)) ?? "");
  }
  function R(Z, I, v) {
    const { ui: V } = Z.layer, p = s.timeline.fps, m = Tn(V, ey)[0], w = Tn(V, Q0).map(i).filter(Boolean), C = i(Tn(V, Z0)[0] || null), T = m && typeof m == "object" ? w.length ? { frames: w, meta: m } : C ? { src: C, meta: m } : null : null, U = b(i(Tn(V, Ri)[0] || null)), le = T ? xd(I.clip, v, p, T.meta) : null;
    let G = U;
    if (T != null && T.frames)
      Z.frames || (Z.frames = Pd({
        createImage: (oe, N) => {
          const L = new Image();
          return L.onload = N, L.onerror = N, L.src = oe, L;
        },
        onLoad: g
      })), G = Z.frames.picture(T.frames, le, T.meta, U);
    else if (T != null && T.src) {
      const oe = X(Z);
      oe.follow({ src: T.src, time: le, playing: d.advancing, fps: p }), G = oe.picture(Z.still, U);
    }
    return G ? { media: G, revision: c(G), source: Nd(T, U) } : null;
  }
  function X(Z) {
    if (Z.follower) return Z.follower;
    const I = Vs(document, "editor.upstream-port-video");
    I.playsInline = !0, I.preload = "auto";
    const v = on({ label: "editor.upstream-port-still" });
    return v.__panoFrameIdx = 0, Z.video = I, Z.still = v, Z.follower = qd({
      video: I,
      onCapture: () => {
        var m;
        const V = Number(I.videoWidth || 0), p = Number(I.videoHeight || 0);
        V < 1 || p < 1 || (v.width = V, v.height = p, (m = v.getContext("2d")) == null || m.drawImage(I, 0, 0), v.__panoFrameIdx += 1, g());
      },
      onChange: g
    }), Z.follower;
  }
  function A(Z, I, v) {
    if (I.source.kind === "port") return R(Z, I, v);
    const V = b(n(ml(I.source)));
    return V ? { media: V, revision: c(V) } : null;
  }
  function ge(Z) {
    var C;
    const { sceneState: I } = Z.working, { painting: v } = I, V = v.paint.strokes.length + v.mask.strokes.length;
    if (!I.painting_visible || !V && !v.raster_objects.length) return [];
    const p = l(), m = `${p.width}x${p.height}`;
    Z.paintSize !== m && (O(Z), Z.paintSize = m, Z.paintEngine = V ? Ql(p) : null, (C = Z.paintEngine) == null || C.rebuildCommitted({ painting: v }), Z.rasters = /* @__PURE__ */ new Map());
    const w = Z.paintEngine;
    return Dd(I, {
      // A painting with groups but no strokes has no engine, and its groups show nothing.
      group: (T) => {
        const U = w == null ? void 0 : w.getGroupDisplayCanvas(T);
        return U && { media: U, revision: m };
      },
      raster: (T) => {
        const U = P(Z, T, p);
        return U && { media: U, revision: m };
      },
      mask: () => pg(w)
    });
  }
  function P(Z, I, { width: v, height: V }) {
    if (Z.rasters.has(I.id)) return Z.rasters.get(I.id);
    const p = b(I.rasterDataUrl);
    if (!p.complete || !p.naturalWidth) return null;
    const m = on({ label: "editor.upstream-raster-erp", width: v, height: V }), w = m.getContext("2d");
    return w ? (ny(w, p, I, v, V), Z.rasters.set(I.id, m), m) : null;
  }
  function O(Z) {
    var I;
    (I = Z.rasters) == null || I.forEach((v) => Ai(v)), Z.rasters = null, Z.paintEngine = null, Z.paintSize = null;
  }
  function _() {
    const Z = z() ?? [], I = { sky: [], stickers: [], items: [] }, v = r.frame;
    return Z.forEach((V) => {
      const p = $w(V.working, V.working.key, v, {
        media: (m) => A(V, m, v),
        paintLayers: ge(V),
        source: i
      });
      I.sky.push(...p.sky), I.stickers.push(...p.stickers), I.items.push(...p.items);
    }), I;
  }
  function k(Z) {
    var I;
    (I = Z.follower) == null || I.dispose(), Z.still && Ai(Z.still), O(Z);
  }
  function se() {
    f.entries.forEach(k), f = { list: null, entries: [], fps: null }, h = /* @__PURE__ */ new Map(), S.clear();
  }
  return {
    connect(Z) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = Z);
    },
    upstreamEntries: z,
    upstreamLinked: H,
    upstreamNotice: fe,
    upstreamOutput: me,
    upstreamPortMeta: de,
    upstreamViewInput: _,
    rebuildUpstreamWorking: ee,
    syncUpstreamEdits: E,
    pruneUpstreamRecords: W,
    deleteUpstreamStickers: q,
    revertUpstreamSticker: ve,
    revertUpstreamLayer: _e,
    restoreUpstreamDeleted: he,
    upstreamStickers: ie,
    upstreamStickerImage: ke,
    upstreamTimelineLayers: J,
    upstreamRow: pe,
    disposeUpstream: se
  };
}
const Bu = "camera_preview";
function mC(e) {
  return e === Bu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function gC(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function my(e, t = !1) {
  const r = Fe(Hi(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function yC(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: s,
    shotEditor: a,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, h, S = null, g = !1, b = !1;
  function y() {
    g && (g = !1, o.releaseSplats(Bu));
  }
  function H() {
    S = null, b = !1, y();
  }
  function z(ve) {
    if (!n || !ve) return !1;
    const _e = n.closest(".pano-camera-preview");
    if (!_e) return !1;
    const he = Math.round(Number(_e.clientWidth || n.clientWidth || 0)), ie = Math.round(Number(_e.clientHeight || n.clientHeight || 0));
    return Math.abs(he - Number(ve.width || 0)) <= 1 && Math.abs(ie - Number(ve.height || 0)) <= 1;
  }
  function ee(ve, _e) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, H();
      return;
    }
    const he = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !he || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = he ? "Preview unavailable" : "Add Frame to preview", H();
      return;
    }
    const ie = my(he, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ie.width, c.cameraPreview.height = ie.height, b) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, y();
      return;
    }
    const ke = window.devicePixelRatio || 1, me = Math.max(1, ie.width * ke), de = Math.max(1, ie.height * ke), J = Math.min(1, t.width / me, t.height / de), pe = { width: Math.max(1, Math.floor(me * J)), height: Math.max(1, Math.floor(de * J)) }, fe = !S || S.width !== pe.width || S.height !== pe.height || gC(_e);
    if (ve && fe) {
      g = !0;
      const X = u({ x: 0, y: t.height - pe.height, w: pe.width, h: pe.height }, he, Bu);
      S = X ? pe : null, X && q(X);
    }
    if (!S) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const R = z(ie);
    c.cameraPreview.ready = !0, c.cameraPreview.label = R ? "" : "Loading preview", c.cameraPreview.settled = R && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function E() {
    S = null, b = !1;
  }
  let W = 0, D = !1;
  function q(ve) {
    const _e = ++W;
    createImageBitmap(ve.canvas, ve.x, ve.y, ve.width, ve.height).then((he) => {
      var ie;
      if (_e !== W || !s.running) {
        he.close();
        return;
      }
      (ie = r.getContext("bitmaprenderer")) == null || ie.transferFromImageBitmap(he);
    }).catch((he) => {
      _e !== W || !s.running || (b = !0, S = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !D && (D = !0, console.error("[PanoramaStickers] camera preview frame failed", he)));
    });
  }
  return {
    connect(ve) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = ve);
    },
    drawCutoutOutputPreview: ee,
    forgetCameraPreviewFrame: E
  };
}
function bC(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: s,
    runtime: a,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v, V, p;
  function m(F) {
    const ne = r.width, $ = r.height, Q = q();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ne, $), k(), F && (a.backgroundDirty = !I(Q)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let B = 0; B <= 16; B += 1) {
        const j = Q.x + Q.w * B / 16;
        n.beginPath(), n.moveTo(j, Q.y), n.lineTo(j, Q.y + Q.h), n.stroke();
      }
      for (let B = 0; B <= 8; B += 1) {
        const j = Q.y + Q.h * B / 8;
        n.beginPath(), n.moveTo(Q.x, j), n.lineTo(Q.x + Q.w, j), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(Q.x, Q.y + Q.h / 2), n.lineTo(Q.x + Q.w, Q.y + Q.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const K = Q.y + Q.h * 0.57;
      n.fillText("Left", Q.x + Q.w * 0.25, K), n.fillText("Front", Q.x + Q.w * 0.5, K), n.fillText("Right", Q.x + Q.w * 0.75, K), n.fillText("Back", Q.x + 38, K), n.fillText("Back", Q.x + Q.w - 38, K);
    }
  }
  function w(F, ne, $ = 1) {
    let Q = !1;
    n.strokeStyle = ne, n.lineWidth = $, n.beginPath();
    for (const K of F) {
      const B = ge(K);
      if (!B) {
        Q = !1;
        continue;
      }
      Q ? n.lineTo(B.x, B.y) : (n.moveTo(B.x, B.y), Q = !0);
    }
    n.stroke();
  }
  function C(F) {
    const ne = r.width, $ = r.height;
    if (n.clearRect(0, 0, ne, $), k(), F && (a.backgroundDirty = !Z()), i.showGrid && !i.fullscreen && g().space)
      T();
    else if (i.showGrid && !i.fullscreen) {
      for (let K = -180; K <= 180; K += 15) {
        const B = [];
        for (let j = -89; j <= 89; j += 4) B.push(Rn(K, j));
        w(B, "#3f3f46", K % 90 === 0 ? 1.3 : 1);
      }
      for (let K = -75; K <= 75; K += 15) {
        const B = [];
        for (let j = -180; j <= 180; j += 4) B.push(Rn(j, K));
        w(B, K === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", K === 0 ? 1.5 : 1);
      }
      const Q = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", Q.forEach((K) => {
        const B = ge(K.dir);
        B && n.fillText(K.name, B.x, B.y + 24);
      });
    }
  }
  function T() {
    const F = $d(p(), r.width, r.height, f()), ne = Ns(F, [0, 0, 0], r.width, r.height);
    ne && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ne.x, ne.y - 12));
  }
  function U(F, ne) {
    const $ = A(F), Q = Rn(Number($.yaw_deg || 0), Number($.pitch_deg || 0)), K = i.mode === "unwrap" ? P(Q) : null, B = K ? K.x : null, j = i.mode === "pano" ? 28 : 20, x = [
      v(F, 0, j, B),
      v(F, 1, j, B),
      v(F, 2, j, B),
      v(F, 3, j, B)
    ];
    ef(n, x, { selected: ne });
  }
  function le(F, ne = []) {
    if (!(!F || !Array.isArray(ne) || ne.length < 4)) {
      F.beginPath(), F.moveTo(ne[0].x, ne[0].y);
      for (let $ = 1; $ < 4; $ += 1) F.lineTo(ne[$].x, ne[$].y);
      F.closePath();
    }
  }
  function G(F, ne, $) {
    const Q = Array.isArray(F == null ? void 0 : F.corners) ? F.corners : [];
    if (Q.length < 4) return;
    const K = Fe(Number((F == null ? void 0 : F.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    const B = n.globalAlpha;
    n.globalAlpha = B * K;
    const j = $ ? "rgba(255, 116, 116, 0.96)" : ne ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", x = $ ? "rgba(255, 89, 89, 0.08)" : ne ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", re = ne ? 3.2 : 2.6;
    le(n, Q), n.fillStyle = x, n.fill(), n.strokeStyle = j, n.lineWidth = re, n.stroke(), n.save(), n.strokeStyle = j, n.lineWidth = ne ? 3.2 : 2.6, n.lineCap = "round";
    const ce = Array.isArray(F == null ? void 0 : F.edgeMidpoints) && F.edgeMidpoints.length >= 4 ? F.edgeMidpoints : [
      { edge: "top", x: (Q[0].x + Q[1].x) * 0.5, y: (Q[0].y + Q[1].y) * 0.5 },
      { edge: "right", x: (Q[1].x + Q[2].x) * 0.5, y: (Q[1].y + Q[2].y) * 0.5 },
      { edge: "bottom", x: (Q[2].x + Q[3].x) * 0.5, y: (Q[2].y + Q[3].y) * 0.5 },
      { edge: "left", x: (Q[3].x + Q[0].x) * 0.5, y: (Q[3].y + Q[0].y) * 0.5 }
    ], be = { top: "bottom", right: "left", bottom: "top", left: "right" }, M = ne ? 12 : 9;
    ce.forEach((ue) => {
      const Ee = ce.find((Ce) => (Ce == null ? void 0 : Ce.edge) === be[ue == null ? void 0 : ue.edge]) || {
        x: (Q[0].x + Q[1].x + Q[2].x + Q[3].x) * 0.25,
        y: (Q[0].y + Q[1].y + Q[2].y + Q[3].y) * 0.25
      }, Le = Ee.x - ue.x, $e = Ee.y - ue.y, ze = Math.hypot(Le, $e) || 1;
      n.beginPath(), n.moveTo(ue.x, ue.y), n.lineTo(ue.x + Le / ze * M, ue.y + $e / ze * M), n.stroke();
    }), n.restore(), n.globalAlpha = B;
  }
  function oe(F, ne, $, Q) {
    const K = Fe(Number((ne == null ? void 0 : ne.visibilityAlpha) ?? 1), 0, 1);
    if (K <= 0.01) return;
    if (pe(F)) {
      G(ne, $, Q);
      return;
    }
    if (fe(F)) {
      const j = n.globalAlpha;
      n.globalAlpha = j * D(F) * K, i.mode === "frame" ? (n.strokeStyle = $ ? "rgba(250, 250, 250, 0.9)" : Q ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = $ ? 2 : 1, le(n, ne.corners), n.stroke()) : U(F, $), n.globalAlpha = j;
      return;
    }
    const B = n.globalAlpha;
    n.globalAlpha = B * K, n.fillStyle = $ ? "rgba(0, 112, 243, 0.24)" : Q ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", le(n, ne.corners), n.fill(), n.strokeStyle = $ ? "rgba(255, 255, 255, 1)" : Q ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = $ ? 2.8 : 1.9, le(n, ne.corners), n.stroke(), n.globalAlpha = B;
  }
  function N(F, ne, $) {
    if (fe(F)) {
      P0(n, ne, { accent: $ });
      return;
    }
    const Q = !(pe(F) && _e());
    n.fillStyle = $, Q && ne.corners.forEach((K) => {
      n.beginPath(), n.arc(K.x, K.y, 6.5, 0, Math.PI * 2), n.fill();
    }), Q && pe(F) && (n.strokeStyle = $, n.lineCap = "round", n.lineWidth = 4, ne.edgeMidpoints.forEach((K) => {
      var M, ue, Pe, Ee;
      const B = (((M = K.b) == null ? void 0 : M.x) ?? K.x) - (((ue = K.a) == null ? void 0 : ue.x) ?? K.x), j = (((Pe = K.b) == null ? void 0 : Pe.y) ?? K.y) - (((Ee = K.a) == null ? void 0 : Ee.y) ?? K.y), x = Math.hypot(B, j) || 1, re = B / x, ce = j / x, be = 10;
      n.beginPath(), n.moveTo(K.x - re * be, K.y - ce * be), n.lineTo(K.x + re * be, K.y + ce * be), n.stroke();
    }), n.lineCap = "butt"), R(F) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ne.rotateStemBase.x, ne.rotateStemBase.y), n.lineTo(ne.rotateHandle.x, ne.rotateHandle.y), n.stroke(), n.fillStyle = $, n.beginPath(), n.arc(ne.rotateHandle.x, ne.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function L() {
    var B;
    const F = i.mode === "frame" ? [] : W(), ne = F.length > 1, $ = l ? y() : ee(), Q = $.map((j) => `${String((j == null ? void 0 : j.id) || "")}:${pe(j) ? "frame" : Number((j == null ? void 0 : j.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== $ || i._sortedItemsCache.orderKey !== Q) && (i._sortedItemsCache = {
      src: $,
      orderKey: Q,
      sorted: [...$]
    });
    const K = [...F.filter(Ut), ...i._sortedItemsCache.sorted];
    for (const j of K) {
      const x = i.mode !== "frame" && !ne && me(j);
      if (i.mode === "frame" && !x) continue;
      const re = fe(j), ce = pe(j), be = ke(j);
      if (!re && !ce || J(j) && !V(j)) continue;
      const M = X(j);
      if (d !== "stickers" && !M.visible)
        continue;
      const ue = Fe(Number((M == null ? void 0 : M.visibilityAlpha) ?? 1), 0, 1);
      if (ue <= 0.01) continue;
      const Pe = ce && l && i.mode === "pano" ? Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Pe, oe(j, M, x, be), x && M.visible) {
        const Ee = be ? "#ff4d4f" : re && he(j) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * ue, N(j, M, Ee), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !b() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const j = i.cutoutPanoFrameVisual, x = Fe(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= x, G(j.geom, j.selected, j.locked), j.selected && N(
        j.item,
        j.geom,
        j.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ne) {
      const j = E(F);
      if (j != null && j.visible) {
        const x = u(F) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(j.corners[0].x, j.corners[0].y);
        for (let re = 1; re < j.corners.length; re += 1) n.lineTo(j.corners[re].x, j.corners[re].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = x, j.corners.forEach((re) => {
          n.beginPath(), n.arc(re.x, re.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      F.forEach((j) => {
        if (!R(j) && !de(j)) return;
        const x = X(j);
        if (!(x != null && x.visible)) return;
        const re = ke(j) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(x.corners[0].x, x.corners[0].y);
        for (let ce = 1; ce < x.corners.length; ce += 1) n.lineTo(x.corners[ce].x, x.corners[ce].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = re, x.corners.forEach((ce) => {
          n.beginPath(), n.arc(ce.x, ce.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((B = i.interaction) == null ? void 0 : B.kind) === "marquee_select") {
      const j = se(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(j.x0, j.y0, j.x1 - j.x0, j.y1 - j.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function te(F) {
    const ne = b(), $ = H(ne);
    if (!ne || !$)
      return n.clearRect(0, 0, r.width, r.height), F && o.clear(657930), !1;
    const Q = { x: $.x, y: $.y, w: $.w, h: $.h }, { rect: K, shot: B } = Pg(ne, $, { width: r.width, height: r.height }), j = we(Q);
    if (n.clearRect(0, 0, r.width, r.height), F) {
      o.clear(657930);
      const x = h(K), re = !!S(x, B, void 0, 657930);
      re || o.clear(1118481, x), a.backgroundDirty = !re;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(Q.x, Q.y, Q.w, Q.h, j), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = ty, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(Q.x + 1, Q.y + 1, Q.w - 2, Q.h - 2, Math.max(0, j - 1)), n.stroke(), n.restore(), !0;
  }
  function we(F) {
    const ne = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ne, Number((F == null ? void 0 : F.w) || 0) * 0.5, Number((F == null ? void 0 : F.h) || 0) * 0.5);
  }
  function Se() {
    var re, ce;
    if (((re = i.interaction) == null ? void 0 : re.kind) !== "paint_lasso_fill") return;
    const F = i.interaction.stroke, ne = (ce = F == null ? void 0 : F.geometry) == null ? void 0 : ce.points;
    let $;
    if (i.mode === "frame") {
      const be = b(), M = z(be);
      $ = O(ne, be, M);
    } else
      $ = _(ne);
    if (!Array.isArray($) || $.length < 3) return;
    const Q = String((F == null ? void 0 : F.layerKind) || "") === "mask", K = (F == null ? void 0 : F.color) || { r: 1, g: 0.25, b: 0.25 }, B = Math.round(Number(K.r || 0) * 255), j = Math.round(Number(K.g || 0) * 255), x = Math.round(Number(K.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number($[0].x || 0), Number($[0].y || 0));
    for (let be = 1; be < $.length; be++) n.lineTo(Number($[be].x || 0), Number($[be].y || 0));
    n.closePath(), Q ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${B},${j},${x},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function xe() {
    const F = i.frameRollOverlayVisual, ne = Fe(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(F != null && F.shot) || ne <= 1e-4) return;
    const $ = z(F.shot);
    if (!$) return;
    const Q = { x: $.x + $.w * 0.5, y: $.y + $.h * 0.5 }, K = Number(F.shot.roll_deg ?? F.shot.rot_deg ?? 0) * Nr, B = Math.hypot($.w, $.h) * 0.55, j = Math.cos(K) * B, x = Math.sin(K) * B;
    n.save(), n.globalAlpha *= ne, n.beginPath(), n.rect($.x, $.y, $.w, $.h), n.clip(), n.translate(Q.x, Q.y), n.rotate(K);
    const re = Math.max(12, Math.min($.w, $.h) / 6);
    n.beginPath();
    for (let ce = -B; ce <= B; ce += re)
      n.moveTo(ce, -B), n.lineTo(ce, B);
    for (let ce = -B; ce <= B; ce += re)
      n.moveTo(-B, ce), n.lineTo(B, ce);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(Q.x - j, Q.y - x), n.lineTo(Q.x + j, Q.y + x), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Y() {
    return !l || !b() || t && ie() || c && !ve() ? 0 : W2;
  }
  function ye() {
    const F = Fe(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (F <= 1e-4 || !l || i.mode !== "pano") return;
    const ne = b(), $ = ne ? X(ne) : null, Q = Array.isArray($ == null ? void 0 : $.corners) && $.corners.length >= 4 ? $.corners.map((j) => ({ x: Number(j.x || 0), y: Number(j.y || 0) })) : null;
    $ != null && $.visible && Q && (i.cutoutPanoDimCorners = Q), ne && ($ != null && $.visible) && Q && (i.cutoutPanoFrameVisual = {
      item: ne,
      geom: $,
      selected: me(ne),
      locked: ke(ne)
    });
    const K = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, B = $ != null && $.visible ? Q : K ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${F})`, n.beginPath(), n.rect(0, 0, r.width, r.height), B.length >= 4) {
      n.moveTo(B[0].x, B[0].y);
      for (let j = 1; j < 4; j += 1) n.lineTo(B[j].x, B[j].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(F) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: h,
        drawEditorViewShot: S,
        editorViewInput: g,
        getActiveCutoutShot: b,
        getCutoutSelectableItemsForDisplay: y,
        getFrameViewLayout: H,
        getFrameViewRect: z,
        getList: ee,
        getMultiSelectionGeom: E,
        getSelectedItems: W,
        getStickerDisplayAlpha: D,
        getUnwrapRect: q,
        isCameraSelected: ve,
        isErpCamera: _e,
        isExternalSticker: he,
        isFreeSpaceView: ie,
        isItemLocked: ke,
        isItemSelected: me,
        isRasterObjectItem: de,
        isSceneSticker: J,
        isShotItem: pe,
        isStickerItem: fe,
        isStrokeGroupItem: R,
        objectGeom: X,
        poseOf: A,
        projectDir: ge,
        projectDirUnwrap: P,
        projectErpLassoPointsToFrameRect: O,
        projectLassoPointsToCurrentView: _,
        rebuildPaintEngineIfNeeded: k,
        rectFromPoints: se,
        renderEditorView: Z,
        renderEditorViewUnwrap: I,
        sampleStickerEdge: v,
        sceneStickerShown: V,
        spaceViewState: p
      } = F);
    },
    drawGridUnwrap: m,
    drawGridPano: C,
    drawObjects: L,
    drawFrameViewBackground: te,
    drawLassoOutlineOverlay: Se,
    drawFrameRollOverlay: xe,
    getCutoutPanoDimTarget: Y,
    drawCutoutPanoPassepartout: ye
  };
}
function vC(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    readOnly: a,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: h,
    type: S,
    uiState: g,
    viewController: b
  } = e;
  let y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z = () => {
  };
  function I(Y = /* @__PURE__ */ new Set()) {
    _e();
    const ye = l.backgroundDirty;
    d && (R(), H(ye, Y)), i.mode === "frame" ? (l.frameSafeRect = J(), E(ye)) : i.mode === "unwrap" ? D(ye) : W(ye), z(), ve(), P(), q(), ee(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && k(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const F = me();
    g.stageStatus = F.status, g.stageStatusDetail = F.detail, g.stageNotice = se(), F.status === ar ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", F.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function v(Y = i.interaction) {
    if (S !== "stickers" || i.mode !== "pano") return !1;
    const ye = String((Y == null ? void 0 : Y.kind) || "");
    return ye === "move" || ye === "scale" || ye === "scale_x" || ye === "scale_y" || ye === "rotate" ? !0 : ye === "move_multi" ? Array.isArray(Y == null ? void 0 : Y.stickerSnapshots) && Y.stickerSnapshots.length > 0 : !1;
  }
  function V() {
    return !!i.interaction || !!h.drag;
  }
  function p() {
    l.nodePreviewPending = !1;
    const Y = Wn(s);
    Y.liveState = f, Y.liveStateVersion += 1, ke();
  }
  function m(Y = {}) {
    var j, x, re, ce, be, M, ue, Pe;
    const ye = Y.reason ?? ft.STATE, F = !!Y.localOnly, ne = Y.externalSync === !0, $ = String(Y.cause || ""), Q = String(((j = i.interaction) == null ? void 0 : j.kind) || "");
    (!F || Q === "view" || Q === "pan_frame" || v() || !!i.viewTransition || $ === "mode" || $ === "frame_view" || $ === "cutout_frame") && (l.backgroundDirty = !0), F && de() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!F || $ === "selection" || $ === "mode" || $ === "cutout_frame") && (O(), _()), V() ? l.nodePreviewPending = !0 : p(), ne && ((re = (x = bt(s).dom) == null ? void 0 : x.requestDraw) == null || re.call(x), (ce = s.setDirtyCanvas) == null || ce.call(s, !0, !1)), ne && !F && ((M = (be = s.graph) == null ? void 0 : be.setDirtyCanvas) == null || M.call(be, !0, !0), (Pe = (ue = t == null ? void 0 : t.canvas) == null ? void 0 : ue.setDirty) == null || Pe.call(ue, !0, !0)), c.requestDraw(ye);
  }
  function w() {
    const Y = n.getBoundingClientRect(), ye = Math.max(2, Math.round(Y.width)), F = Math.max(2, Math.round(Y.height)), ne = window.devicePixelRatio || 1, $ = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== ye || n.height !== F) && (n.width = ye, n.height = F);
    const Q = z_(Y.width || ye, Y.height || F, ne, window.innerWidth || Y.width, window.innerHeight || Y.height);
    return o.resize(Q.width, Q.height), [n.width, n.height, r.width, r.height].join("x") === $ ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && C(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function C(Y) {
    Y(), c.wake();
  }
  function T() {
    return !!i.viewTransition || pe.held || !!b.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || V();
  }
  function U(Y = performance.now(), ye = /* @__PURE__ */ new Set()) {
    var K;
    l.nodePreviewPending && !V() && p(), ye.forEach((B) => l.reasons.add(B)), ye.size && (l.dirty = !0), [...ye].some((B) => B !== ft.OVERLAY) && (l.backgroundDirty = !0), A(), l.lastTickTs > 0 ? Math.max(1e-3, (Y - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Y;
    const F = i.mode === "frame" && ((K = i.interaction) == null ? void 0 : K.kind) === "roll_frame" ? i.interaction : null;
    F != null && F.shot && (i.frameRollOverlayVisual = { shot: F.shot });
    const ne = F ? 1 : 0;
    if (Math.abs(ne - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ne, i.frameRollOverlayStartTs = Y), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ne) > 1e-6) {
      const B = Fe(
        (Y - Number(i.frameRollOverlayStartTs || Y)) / U2,
        0,
        1
      );
      i.frameRollOverlayAlpha = Xn(
        Number(i.frameRollOverlayFrom || 0),
        ne,
        Yc(B)
      ), B >= 1 && (i.frameRollOverlayAlpha = ne, ne === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const $ = ie();
    if (Math.abs($ - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = $, i.cutoutPanoDimStartTs = Y), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - $) > 1e-6) {
      const B = Fe(
        (Y - Number(i.cutoutPanoDimStartTs || Y)) / Qp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Xn(
        Number(i.cutoutPanoDimFrom || 0),
        $,
        Yc(B)
      ), B >= 1 && (i.cutoutPanoDimAlpha = $), B >= 1 && $ === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const Q = d && he() ? 1 : 0;
    if (Math.abs(Q - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = Q, i.cutoutPanoFrameStartTs = Y), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Q) > 1e-6) {
      const B = Fe(
        (Y - Number(i.cutoutPanoFrameStartTs || Y)) / Qp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Xn(
        Number(i.cutoutPanoFrameFrom || 0),
        Q,
        Yc(B)
      ), B >= 1 && (i.cutoutPanoFrameAlpha = Q, Q === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const B = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), j = Fe((Y - Number(i.outputPreviewAnimStartTs || 0)) / B, 0, 1), re = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? q2(j) : J2(j);
      i.outputPreviewAnim = Xn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, re), l.dirty = !0, j >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: B, done: j } = uC(i.viewTransition, Y);
      if (i.viewPosition = B.position, i.viewYaw = B.yaw_deg, i.viewPitch = B.pitch_deg, i.viewFov = B.hFOV_deg, i.viewDistance = B.distance, j) {
        const { end: x } = i.viewTransition;
        i.viewTransition = null, x && y(x), ge();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (X(Y) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, b.stepInertia(Y) && (i.viewInertia.vx = Number(b.state.inertia.vx || 0), i.viewInertia.vy = Number(b.state.inertia.vy || 0), i.viewInertia.active = !!b.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const B = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), I(B);
    }
  }
  function le(Y) {
    try {
      Y();
    } catch (ye) {
      const F = String((ye == null ? void 0 : ye.stack) || (ye == null ? void 0 : ye.message) || ye || "unknown editor frame error");
      l.tickErrorSignature !== F && (l.tickErrorSignature = F, console.error("[PanoramaStickers] editor frame failed", ye)), g.stageStatus = Jn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function G(Y = performance.now(), ye = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const F = Qv();
    le(() => U(Y, ye)), e1(F);
  }
  function oe() {
    !l.running || !w() || le(() => {
      l.dirty = !1, I(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const N = new ResizeObserver(oe);
  let L = null;
  function te() {
    L == null || L.removeEventListener("change", we), L = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), L.addEventListener("change", we);
  }
  function we() {
    te(), oe();
  }
  function Se() {
    Z = Zv("editor", () => {
      var Y;
      return {
        type: S,
        readOnly: a,
        mode: i.mode,
        interaction: ((Y = i.interaction) == null ? void 0 : Y.kind) ?? null,
        timelineDrag: !!h.drag,
        playing: !!fe.playing
      };
    });
  }
  function xe() {
    Z(), l.running = !1, c.stop(), N.disconnect(), L.removeEventListener("change", we);
  }
  return {
    connect(Y) {
      ({
        applyViewTransitionEnd: y,
        drawCutoutOutputPreview: H,
        drawCutoutPanoPassepartout: z,
        drawFrameRollOverlay: ee,
        drawFrameViewBackground: E,
        drawGridPano: W,
        drawGridUnwrap: D,
        drawLassoOutlineOverlay: q,
        drawObjects: ve,
        endEditorViewFrame: _e,
        getActiveCutoutShot: he,
        getCutoutPanoDimTarget: ie,
        getSharedLivePaintSurface: ke,
        getStageImageStatus: me,
        isPaintCompositeInteraction: de,
        measureFrameSafeRect: J,
        moveKeys: pe,
        playback: fe,
        rebuildPaintEngineIfNeeded: R,
        stepKeyMove: X,
        syncCutoutShot: A,
        syncFloatingViewButtonState: ge,
        syncFrameRollKnob: P,
        syncLookAtFrameButtonState: O,
        syncViewToggleState: _,
        updateSelectionMenu: k,
        upstreamNotice: se
      } = Y);
    },
    requestDraw: m,
    syncCanvasSize: w,
    startAnimation: C,
    editorAnimating: T,
    tick: G,
    stageResizeObserver: N,
    watchPixelRatio: te,
    sampleEditorDiagnostics: Se,
    stopRenderLoop: xe
  };
}
function SC(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: s,
    paintHueHandle: a,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: h,
    studio: S,
    type: g,
    uiState: b
  } = e;
  let y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v, V, p, m, w = 0;
  function C() {
    b.toolButtons.forEach((Y) => {
      const ye = Y.attr === "data-tool-mode", F = Y.attr === "data-paint-tool", ne = Y.attr === "data-mask-tool";
      Y.active = ye ? Y.value === r.primaryTool : F ? Y.key === r.paintTool : ne ? Y.key === r.maskTool : !1, Y.pressed = Y.active ? "true" : Y.pressed == null ? null : "false";
    });
  }
  function T() {
    if (S && oo(b.toolButtons, "value", "add-camera", { disabled: ke() }), g !== "cutout") return;
    const Y = z();
    oo(b.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: Y ? "Look At Frame" : "Add Frame",
      tip: Y ? "Look at frame" : "Add frame",
      icon: Y ? We.camera : We.plus_circle
    });
  }
  function U() {
    const Y = OA({
      spaceView: ge(),
      spaceMode: Ol(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    b.space && Object.assign(b.space, Y.space);
    for (const [ye, F] of Object.entries(Y.buttons)) oo(b.floatingButtons, "action", ye, F);
  }
  function le() {
    var F;
    const Y = ly({ hasShot: !!z(), erp: J(), hidden: ke() && !H(), studio: S });
    r.mode === "frame" && Y.disabled && (S ? O(z()) : r.mode = "pano"), r.outputPreviewRect = null, b.viewButtons.forEach((ne) => {
      const $ = ne.key === r.mode;
      ne.pressed = $ ? "true" : "false", ne.visible = !(ne.key === "frame" && !f), ne.key === "frame" ? Object.assign(ne, Y) : ne.disabled = !1;
    });
    const ye = f && r.mode === "frame" ? z() : null;
    b.frameRail.visible = !!ye, b.frameRail.disabled = c || (ye == null ? void 0 : ye.locked) === !0, b.frameRollKnob.visible = !!ye && !c && ye.locked !== !0, b.frameRollKnob.disabled = c || (ye == null ? void 0 : ye.locked) === !0, b.frameRollKnob.rollDeg = Number((ye == null ? void 0 : ye.roll_deg) ?? (ye == null ? void 0 : ye.rot_deg) ?? 0), b.frameRollKnob.displayValue = yo(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((F = r.interaction) == null ? void 0 : F.kind) === "roll_frame", b.frameRollKnob.armed = !!ye && r.altModifier === !0, b.frameRail.rollKnob = b.frameRollKnob, b.frameRail.aspectLabel = ye ? Vr(ye) : "", b.frameRail.aspectChoices = cy(ye ? String(Vr(ye)) : null, { erp: S, coverage: h.coverage }), ye || (b.frameRail.aspectOpen = !1), b.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!z(), f && b.cameraPreview && (b.cameraPreview.visible = r.mode !== "frame" && y(), b.cameraPreview.expanded = !!r.outputPreviewExpanded, b.cameraPreview.settled = b.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), U(), R() ? p(r.pointerPos) : Z(r.mode === "pano" ? "grab" : "default");
  }
  function G() {
    var ye;
    const Y = r.mode === "frame" ? z() : null;
    b.frameRollKnob.visible = !!Y && !c && Y.locked !== !0, b.frameRollKnob.rollDeg = Number((Y == null ? void 0 : Y.roll_deg) ?? (Y == null ? void 0 : Y.rot_deg) ?? 0), b.frameRollKnob.displayValue = yo(b.frameRollKnob.rollDeg), b.frameRollKnob.dragging = ((ye = r.interaction) == null ? void 0 : ye.kind) === "roll_frame", b.frameRollKnob.armed = !!Y && r.altModifier === !0;
  }
  function oe() {
    C();
    const Y = AA({
      editor: r,
      swatches: rc,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: _r,
      colorsApproximatelyEqual: El,
      rgb01ToHsv: Uu,
      hsv01ToRgb: Wu,
      getBrushPresetIdForTool: ee,
      isActiveLassoTool: de
    });
    if (Object.assign(b.paintDock, Y), V(), !Y.visible) {
      i && (i.hidden = !0);
      return;
    }
    w && (clearTimeout(w), w = 0), o && (!Y.colorEnabled && i && !i.hidden && (w = window.setTimeout(() => {
      i.hidden = !0, b.paintDock.colorPopOpen = !1, w = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", Y.pickerHueColor), i.style.setProperty("--picker-sat", Y.pickerSat), i.style.setProperty("--picker-val", Y.pickerVal), i.style.setProperty("--picker-hue", Y.pickerHue)), s && (s.style.left = Y.pickerSvLeft, s.style.top = Y.pickerSvTop), a && (a.style.left = Y.pickerHueLeft));
  }
  function N() {
    const Y = k(f && r.mode === "frame" ? z() : q());
    Y && (r.panelLastValues = {
      yaw_deg: Number(Y.yaw_deg || 0),
      pitch_deg: Number(Y.pitch_deg || 0),
      hFOV_deg: Number(Y.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(Y.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(Y.rot_deg || 0),
      roll_deg: Number(Y.roll_deg || 0),
      aspect_id: Vr(Y)
    }, L());
  }
  function L() {
    I(), v(), we();
  }
  function te() {
    const Y = f && r.mode === "frame" ? z() : null;
    return [...ve(), se(), Y].some((ye) => X(ye) ? pl(ye) : A(ye) && ke() && pl(h.camera));
  }
  function we() {
    if (n) return;
    h.ui_settings = h.ui_settings || {};
    const Y = PA(h.ui_settings);
    if (l) {
      b.sidePanel = CA({
        coverage: h.coverage,
        uiSettings: Y,
        normalizeCoverageValue: $n
      });
      return;
    }
    const ye = q(), F = f && r.mode === "frame" ? z() : null, ne = F || ye, $ = F ? [F] : ve(), Q = F ? "shot" : _e();
    if ($.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ne && Q !== "stroke") {
      const Le = k(ne);
      r.panelLastValues = {
        yaw_deg: Number(Le.yaw_deg || 0),
        pitch_deg: Number(Le.pitch_deg || 0),
        hFOV_deg: Number(Le.hFOV_deg || (Q === "image" ? 30 : 90)),
        vFOV_deg: Number(Le.vFOV_deg || (Q === "image" ? 30 : 60)),
        rot_deg: Number(Le.rot_deg || 0),
        roll_deg: Number(Le.roll_deg || 0),
        aspect_id: Vr(Le)
      }, X(ne) && (r.panelLastValues.opacity = Wr(ne, r.frame).opacity * 100);
    }
    const K = r.panelLastValues || (g === "stickers" || Q === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), B = Q === "stroke" ? null : ne, j = se(), x = t && (Q === "shot" || Q === "frame") && me(), re = j ? FS(j, r.frame) : x ? { ...B, ...IS(h.camera, r.frame), vFOV_deg: B.vFOV_deg } : X(B) ? r.panelLastValues : B || K, ce = j ? m(j) : !!B && !fe(B);
    r.panelWasEnabled = ce, T();
    let be = null;
    if (F) {
      const Le = ie({ item: F, kind: "shot", label: "Frame" });
      be = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Le.label,
        currentIcon: Le.icon || null,
        items: [{
          id: String(F.id || ""),
          label: Le.label,
          icon: Le.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const Le = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const Ce = z();
        Ce && Le.push({ id: Ce.id, label: "Camera", icon: he("frame"), item: Ce, kind: "frame" }), D().forEach((He, ae) => {
          var Ge, Ke;
          if (!He || X(He) && !He.visible) return;
          const Ie = u ? Se(He) : pe(He) ? String(He.id || df) : String(((Ke = (Ge = h.assets) == null ? void 0 : Ge[He.asset_id]) == null ? void 0 : Ke.name) || He.asset_id || He.id), Ae = `${ae + 1}. ${Ie}${pe(He) && P(He) ? " (hidden)" : ""}`, Oe = ie({ item: He, label: Ae, kind: "image" });
          Le.push({ id: He.id, label: Oe.label, icon: Oe.icon, item: He, kind: "image" });
        });
      } else
        E().forEach((Ce) => {
          if (!(Ce != null && Ce.item)) return;
          const He = ie(Ce);
          Le.push({ id: Ce.item.id, label: He.label, icon: He.icon, item: Ce.item, kind: Ce.kind });
        });
      const $e = (B == null ? void 0 : B.id) || "", ze = j ? { label: Se(j), icon: We.globe } : Le.find((Ce) => Ce.id === $e) || Le[0];
      be = {
        label: "Selection",
        open: !1,
        disabled: Le.length <= 1,
        currentLabel: ze.label,
        currentIcon: ze.icon || null,
        items: Le.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === $e
        }))
      };
    }
    const M = [], ue = (Le, $e, ze, Ce, He) => {
      const ae = Fe(Number(re[Le] || 0), ze, Ce);
      M.push({
        key: Le,
        label: $e,
        min: ze,
        max: Ce,
        step: He,
        value: ae,
        displayValue: yo(ae),
        fillPct: Fe((ae - ze) / Math.max(1e-6, Ce - ze) * 100, 0, 100),
        enabled: ce && !c
      });
    }, Pe = [];
    if (j) {
      for (const [Le, $e] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const ze = Zc(re[Le]);
        ue(Le, $e, -ze, ze, 0.01);
      }
      ue("yaw_deg", "Yaw", -180, 180, 0.1), ue("pitch_deg", "Pitch", -90, 90, 0.1), ue("roll_deg", "Roll", -180, 180, 0.1), ue("scale", "Scale", J0, Zc(re.scale), 0.01), ue("opacity", "Opacity", 0, 100, 1);
    } else if ($.length > 1)
      Pe.push(`Selected objects: ${$.length}`), Pe.push("Multi-selection supports z-order and delete.");
    else {
      const Le = Q === "shot" || Q === "frame";
      if (x)
        for (const [$e, ze] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ce = Zc(re[$e]);
          ue($e, ze, -Ce, Ce, 0.01);
        }
      ue("yaw_deg", "Yaw", -180, 180, 0.1), ue("pitch_deg", "Pitch", -90, 90, 0.1), ue(Q === "image" || g === "stickers" && !Le ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ue("hFOV_deg", "H FOV", 1, 179, 0.1), ue("vFOV_deg", "V FOV", 1, 179, 0.1), Le && M.forEach(($e) => {
        $e.enabled = $e.enabled && FA($e.key, { erp: J() });
      }), X(B) && !Le && M.forEach(($e) => {
        $e.enabled = $e.enabled && TA($e.key, { port: pe(B) });
      }), u && !Le && ue("opacity", "Opacity", 0, 100, 1);
    }
    const Ee = $.length > 1 ? null : j || B;
    b.sidePanel = zA({
      coverage: h.coverage,
      readOnly: c,
      selectionPicker: be,
      enabled: ce,
      selectedKind: j ? "world" : Q,
      selectedItems: $,
      params: M,
      notes: Pe,
      uiSettings: Y,
      normalizeCoverageValue: $n,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: S && Ee && (Ee === j || X(Ee)) ? $A({
        layer: Ut(Ee) ? Ee.origin.layer : null,
        editable: Ut(Ee) && wl(Ee),
        locked: Ee.locked === !0,
        readOnly: c,
        placement: Ee.placement,
        override: Ut(Ee) ? f0(h.upstream, Ee.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: Ut(Ee) ? null : _(Ee)
      }) : null
    });
  }
  function Se(Y) {
    const ye = lg(Y);
    return Ut(Y) ? `${ff(Y.origin.layer)} · ${ye}` : ye;
  }
  function xe() {
    const { canUndo: Y, canRedo: ye } = W();
    oo(b.toolButtons, "value", "undo", { disabled: !Y }), oo(b.toolButtons, "value", "redo", { disabled: !ye });
  }
  return {
    connect(Y) {
      ({
        cameraPreviewShown: y,
        cameraShoots: H,
        getActiveCutoutShot: z,
        getBrushPresetIdForTool: ee,
        getCutoutInspectorItems: E,
        getHistoryCapabilities: W,
        getList: D,
        getSelected: q,
        getSelectedItems: ve,
        getSelectedKind: _e,
        getSelectionItemIcon: he,
        getSelectionItemLabelData: ie,
        hasCamera: ke,
        hasSpaceContent: me,
        isActiveLassoTool: de,
        isErpCamera: J,
        isExternalSticker: pe,
        isItemLocked: fe,
        isPaintCursorEnabled: R,
        isSceneSticker: X,
        isShotItem: A,
        isSpaceView: ge,
        isStickerHidden: P,
        leaveFrameView: O,
        portHandoffLanes: _,
        poseOf: k,
        selectedWorldSticker: se,
        setCanvasCursor: Z,
        syncCutoutShot: I,
        syncTimeline: v,
        syncVideoTransportVisibility: V,
        updateCursor: p,
        worldStickerEditable: m
      } = Y);
    },
    syncLookAtFrameButtonState: T,
    syncFloatingViewButtonState: U,
    syncViewToggleState: le,
    syncFrameRollKnob: G,
    syncPaintUi: oe,
    syncSidePanelControls: N,
    updateSidePanel: L,
    inspectorTimed: te,
    syncSidePanelModel: we,
    syncUndoRedoButtons: xe
  };
}
function _C(e) {
  const {
    editor: t,
    node: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    stateV2: s,
    studio: a,
    timeline: l,
    timelinePlayhead: c,
    uiState: d,
    videoEl: u,
    videoTimelineFps: f
  } = e;
  let h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R;
  function X() {
    var ne;
    if (!s || n) return;
    const Y = ((ne = l.drag) == null ? void 0 : ne.limit) ?? ge();
    !l.drag && z.frame > Y - 1 && z.seek(Y - 1);
    const ye = l.selection, F = ye && V(ye.owner);
    if (ye) {
      const $ = F ? m(ye) : [], Q = w(ye.owner);
      ye.frames = ye.frames.filter((K) => K + Q < Y && $.some((B) => F[B].keyframes.some((j) => j.frame === K))), ye.frames.length || (l.selection = null);
    }
    d.timeline = UA(o, {
      span: Y,
      portBarEnd: v,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? A(),
      openRows: l.openRows,
      audio: le() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || fs(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its own `scene` is not drawn (#90), and its elements have
      // rows of their own below (ADR 0030).
      scene: i && !!ho(r).scene && !de(),
      upstream: R(),
      background: _() ? { end: v(o.background) } : null
    }), d.easing = l.selection && T(l.selection.owner) ? BA(F, m(l.selection), l.selection.frames, w(l.selection.owner)) : null;
  }
  function A() {
    return eg(o, { camera: a });
  }
  function ge(Y = null) {
    var ye;
    return Ad(o, {
      bg: P(),
      port: S(),
      sceneItems: de() ? 0 : ((ye = q()) == null ? void 0 : ye.urls.length) ?? 0,
      upstream: J(Y),
      openClip: Y,
      camera: a
    });
  }
  function P() {
    return me() ? null : O() ?? (ho(r).bg_media && !fs(r, ["bg_media"]) ? { frames: 1 } : null);
  }
  function O() {
    const Y = d.videoTransport;
    return Y.ready && Y.frameCount > 0 ? { video: !!me() || fs(r, ["bg_media"]), frames: Y.frameCount, duration: Number(Y.duration || 0) } : null;
  }
  function _() {
    return i && !!ho(r).bg_media && !me();
  }
  function k() {
    const Y = me();
    return Y ? Y.clip ? Um(Y.clip.clip, Y.clip.fps, o.timeline.fps) : { start: 0, in: 0, duration: null } : _() ? o.background.clip : null;
  }
  function se() {
    const Y = k();
    return Y ? Bm(Y) : null;
  }
  function Z(Y) {
    const ye = k();
    if (!ye) return !0;
    const F = !!me();
    return vu(ye, Y, o.timeline.fps, F ? O() : P(), F || de());
  }
  function I() {
    var Y;
    return ((Y = me()) == null ? void 0 : Y.color) ?? o.bg_color;
  }
  function v(Y) {
    var F;
    if (Y === o.background) {
      const ne = Y.clip.duration === null ? P() : null;
      return ne != null && ne.video || (ne == null ? void 0 : ne.frames) > 1 ? Wm(Y.clip, o.timeline.fps, ne, de()) : null;
    }
    if (((F = Y.source) == null ? void 0 : F.kind) !== "port" || Y.clip.duration !== null) return null;
    const ye = Y.origin ? pe(Y) : y(Y) ? S() : null;
    return ye ? Md(Y.clip, o.timeline.fps, ye) : null;
  }
  function V(Y) {
    if (Y === "camera") return g() ? o.camera : null;
    if (Y === "scene") return i ? o.scene : null;
    if (Y === hs) return _() ? o.background : null;
    const ye = fe(Y);
    return ye ? ye.owner : _e(Y);
  }
  function p(Y) {
    var ye;
    return ((ye = fe(Y)) == null ? void 0 : ye.editable) ?? !0;
  }
  function m(Y) {
    return Y.lane ? [Y.lane] : Ao(V(Y.owner));
  }
  function w(Y) {
    var F;
    if (Y === "camera") return 0;
    const ye = (F = V(Y)) == null ? void 0 : F.clip;
    return ye ? ye.start - ye.in : 0;
  }
  function C(Y) {
    return `${Gi(Y, t.frame)}:${Y.start - Y.in}`;
  }
  function T(Y) {
    var F;
    const ye = V(Y);
    return !!ye && ye.locked !== !0 && p(Y) && ((F = fe(Y)) == null ? void 0 : F.part) !== "scene";
  }
  function U(Y) {
    const ye = Math.max(0, Math.round(Y));
    if (ye === t.frame) return;
    ve(), t.frame = ye, c.frame.value = ye, ve();
    const F = [t.selectedId, t.worldSelectedId];
    W(), H(), F[0] !== t.selectedId || F[1] !== t.worldSelectedId ? ke() : b() && he(), ie(), D({ reason: ft.PLAYHEAD });
  }
  function le() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function G(Y) {
    E(), z.seek(Y);
  }
  function oe() {
    s && z.stop();
  }
  function N() {
    E(), z.toggle();
  }
  function L() {
    ve(), H(), ke(), ie(), D();
  }
  function te() {
    ee(), h(), L();
  }
  function we() {
    const { selection: Y } = l;
    T(Y.owner) && (oe(), iS(V(Y.owner), m(Y), Y.frames, t.frame - w(Y.owner)), l.selection = null, te());
  }
  function Se(Y) {
    const ye = fi(Y);
    if (ye === null || ye === o.timeline.fps) return;
    oe();
    const F = Math.round(t.frame * ye / o.timeline.fps);
    xS(o, ye), l.selection = null, z.seek(F), te();
  }
  function xe() {
    const Y = f(r);
    Y !== null && Y !== o.timeline.fps && Se(Y);
  }
  return {
    connect(Y) {
      ({
        commitAndRefreshNode: h,
        getPortMediaMeta: S,
        hasCamera: g,
        inspectorTimed: b,
        isExternalSticker: y,
        markObjectVisualsDirty: H,
        playback: z,
        pushHistory: ee,
        refreshModalVideoSource: E,
        releaseHiddenSelection: W,
        requestDraw: D,
        sceneFiles: q,
        syncCutoutShot: ve,
        stickerById: _e,
        syncSidePanelModel: he,
        updateSelectionMenu: ie,
        updateSidePanel: ke,
        upstreamBackground: me,
        upstreamLinked: de,
        upstreamOutput: J,
        upstreamPortMeta: pe,
        upstreamRow: fe,
        upstreamTimelineLayers: R
      } = Y);
    },
    syncTimeline: X,
    timelineTimed: A,
    timelineSpanFrames: ge,
    backgroundShown: _,
    backgroundShowsAt: Z,
    backgroundVideoPlace: se,
    backgroundColor: I,
    portBarEnd: v,
    timelineOwner: V,
    selectedLanes: m,
    timelineOffset: w,
    clipView: C,
    timelineEditable: T,
    rowEditable: p,
    setTimelineFrame: U,
    jumpTimelineTo: G,
    stopTimelinePlayback: oe,
    togglePlayback: N,
    refreshTimelineEdit: L,
    commitTimelineEdit: te,
    deleteSelectedKeyframes: we,
    changeTimelineFps: Se,
    applyVideoTimelineFps: xe
  };
}
function wC(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O;
  function _(k) {
    var se, Z;
    if (!(n || !o)) {
      if (k.type === "seek") {
        if (k.phase === "move") {
          s.scrubFrame = k.frame, t.request("seek");
          return;
        }
        t.cancel(), k.phase === "start" && y(), g.seek(k.frame);
        return;
      }
      if (k.type === "play") {
        X();
        return;
      }
      if (k.type === "mute") {
        A(), me();
        return;
      }
      if (k.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? R()), s.selection = null, me();
        return;
      }
      if (k.type === "restore-upstream-deleted" || k.type === "revert-upstream-layer") {
        const I = (Z = (se = a.timeline) == null ? void 0 : se.groups) == null ? void 0 : Z.find((V) => V.key === k.key), v = k.type === "restore-upstream-deleted" ? I == null ? void 0 : I.restore : I == null ? void 0 : I.revert;
        if (!v || v.disabled) return;
        k.type === "restore-upstream-deleted" ? E(k.key) : W(k.key), me();
        return;
      }
      if (k.type === "toggle-row") {
        s.openRows.has(k.id) ? s.openRows.delete(k.id) : s.openRows.add(k.id), me();
        return;
      }
      if (k.type === "toggle-visible") {
        if (!D(k.id)) return;
        const I = O(k.id);
        if (k.id === dy) i.painting_visible = !i.painting_visible;
        else if ((I == null ? void 0 : I.part) === "painting") I.sceneState.painting_visible = !I.sceneState.painting_visible;
        else {
          const v = pe(k.id);
          if (!v) return;
          v.visible = !v.visible;
        }
        z(), u();
        return;
      }
      if (k.type === "select-row") {
        const I = he(k.id);
        if (I && !I.visible || k.id === "camera" && !l()) return;
        I && !Gi(I.clip, r.frame) && S(I.clip.start), (I == null ? void 0 : I.placement) === "world" ? q(I.id) : k.id === "camera" ? _e(f()) : _e(h().find((v) => v.id === k.id) || null), ke(), s.selection = null, P(), ge(), ee();
        return;
      }
      if (k.type === "select-keys") {
        const I = J(k.owner), v = k.frames.map((m) => m - I), V = s.selection, p = (V == null ? void 0 : V.owner) === k.owner && V.lane === k.lane;
        if (k.additive && p) {
          const m = new Set(V.frames);
          for (const w of v)
            m.has(w) ? m.delete(w) : m.add(w);
          V.frames = [...m].sort((w, C) => w - C);
        } else
          s.selection = v.length ? { owner: k.owner, lane: k.lane, frames: v } : null;
        me();
        return;
      }
      if (k.type === "move-keys") {
        const I = s.selection;
        if (!I || !de(I.owner)) return;
        const v = pe(I.owner), V = ve(I);
        if (k.phase === "start") {
          ie(), s.drag = { keyframes: V.map((C) => structuredClone(v[C].keyframes)), frames: I.frames, limit: fe() };
          return;
        }
        const { drag: p } = s;
        if (!(p != null && p.keyframes)) return;
        V.forEach((C, T) => {
          v[C].keyframes = structuredClone(p.keyframes[T]);
        });
        const m = J(I.owner), w = oS(v, V, p.frames, k.delta, -m, p.limit - 1 - m);
        if (I.frames = p.frames.map((C) => C + w), k.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, w ? u() : H();
        return;
      }
      if (k.type === "clip") {
        const I = pe(k.id);
        if (!(I != null && I.clip) || I.locked || !D(k.id)) return;
        if (k.phase === "start") {
          ie();
          const { clip: w } = I, C = fe(), T = w.duration === null ? b(I) ?? C : w.start + w.duration;
          s.drag = { clip: { ...w }, span: fe(w), limit: C, end: T };
          return;
        }
        const { drag: v } = s;
        if (!(v != null && v.clip)) return;
        const V = v.clip, p = d(I.clip);
        if (I.clip = { ...V }, k.delta && k.mode === "move") {
          ap(I.clip, Math.min(k.delta, Math.max(0, v.limit - 1 - V.start)));
          const w = fe() - v.limit;
          w > 0 && ap(I.clip, -w);
        } else k.delta && k.mode === "start" ? lS(I.clip, Math.min(V.start + k.delta, Math.max(v.limit - 1, V.start))) : k.delta && cS(I.clip, Math.min(v.end + k.delta, Math.max(v.limit, v.end)), v.span);
        if (k.phase !== "end") {
          t.request("timeline"), d(I.clip) !== p && (t.request("view"), k.id === hs && t.request("background"));
          return;
        }
        t.cancel(), s.drag = null, z();
        const m = JSON.stringify(I.clip) !== JSON.stringify(V);
        m && k.id === hs && g.seek(r.frame), m ? u() : H();
        return;
      }
      if (k.type === "key-row") {
        if (k.owner === "scene" || k.owner === hs || !de(k.owner)) return;
        ie(), tS(pe(k.owner), r.frame - J(k.owner)), u();
        return;
      }
      if (k.type === "fps") {
        const I = dS(k.fps);
        if (I === null || I === i.timeline.fps || a.timeline.fpsLocked) {
          me();
          return;
        }
        c(I);
        return;
      }
      if (k.type === "length") {
        const I = fS(k.length);
        if (I === void 0 || I === i.timeline.length) {
          me();
          return;
        }
        ie(), i.timeline.length = I, u();
        return;
      }
      if (k.type === "easing") {
        const I = s.selection;
        if (!I || !de(I.owner)) return;
        ie(), aS(pe(I.owner), ve(I), I.frames, k.easing), k.commit ? u() : H();
      }
    }
  }
  return {
    connect(k) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: h,
        jumpTimelineTo: S,
        playback: g,
        portBarEnd: b,
        refreshModalVideoSource: y,
        refreshTimelineEdit: H,
        releaseHiddenSelection: z,
        requestDraw: ee,
        restoreUpstreamDeletedCommand: E,
        revertUpstreamLayerCommand: W,
        rowEditable: D,
        selectWorldSticker: q,
        selectedLanes: ve,
        setSelectedItem: _e,
        stickerById: he,
        stopTimelinePlayback: ie,
        syncFloatingViewButtonState: ke,
        syncTimeline: me,
        timelineEditable: de,
        timelineOffset: J,
        timelineOwner: pe,
        timelineSpanFrames: fe,
        timelineTimed: R,
        togglePlayback: X,
        toggleVideoMuted: A,
        updateSelectionMenu: ge,
        updateSidePanel: P,
        upstreamRow: O
      } = k);
    },
    onTimelineAction: _
  };
}
function kC(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: s,
    readOnly: a,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, h, S, g, b;
  function y() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = $n(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), H(), o.setDirtyCanvas(!0, !0));
  }
  function H() {
    var ve;
    if (a || (h(), g(), b(), l.coverage = $n(l.coverage), ug(o, l.active), !c)) return;
    const D = f(), q = dg(o, D, String(c.value ?? ""), { rebased: n });
    q !== null && (D !== l && (l.id = D.id), c.value = q, (ve = c.callback) == null || ve.call(c, q));
  }
  function z() {
    l.ui_settings = lA(l.ui_settings), a || H();
  }
  function ee() {
    var D;
    a || (H(), (D = o.setDirtyCanvas) == null || D.call(o, !0, !0));
  }
  function E() {
    a || d() && S().catch((D) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", D);
    });
  }
  function W(D = {}) {
    var _e, he, ie, ke, me, de, J, pe, fe, R, X;
    const q = D.syncPreview !== !1, ve = D.syncGraph !== !1;
    q && ((ie = (he = (_e = Kg(o)) == null ? void 0 : _e.runtime) == null ? void 0 : he.requestDraw) == null || ie.call(he), (de = (me = (ke = Au(o)) == null ? void 0 : ke.dom) == null ? void 0 : me.requestDraw) == null || de.call(me), (J = o.setDirtyCanvas) == null || J.call(o, !0, !1)), ve && ((fe = (pe = o.graph) == null ? void 0 : pe.setDirtyCanvas) == null || fe.call(pe, !0, !0), (X = (R = t == null ? void 0 : t.canvas) == null ? void 0 : R.setDirty) == null || X.call(R, !0, !0));
  }
  return {
    connect(D) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: h,
        syncPaintingLayerAsync: S,
        syncPortHandoff: g,
        syncUpstreamEdits: b
      } = D);
    },
    apply: y,
    commitState: H,
    persistUiSettings: z,
    commitAndRefreshNode: ee,
    triggerBackgroundPersistenceOnClose: E,
    syncCoverageChangeToNodePreviews: W
  };
}
function xC(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v;
  function V(N, L, te = "Clear") {
    return new Promise((we) => {
      a.confirmDialog = {
        visible: !0,
        title: String(N || ""),
        text: String(L || ""),
        confirmLabel: String(te || "Confirm"),
        resolve: we
      };
    });
  }
  async function p() {
    var te, we;
    if (r || !await V(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = ji(null), J();
    const L = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((Se) => Se.placement === "world" || L.includes(Se)) : L, n || (i.assets = {}), t.selectedId = ((te = L[0]) == null ? void 0 : te.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((we = L[0]) == null ? void 0 : we.id) || null, fe();
    else {
      const Se = SS(i.shots, i.active.selected_shot_id);
      i.stickers = L, i.assets = {}, i.shots = Se.shots, t.selectedId = Se.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = Se.selectedShotId, !Se.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, fe();
    }
    R(), u(), I(), Z(), A();
  }
  async function m(N) {
    var xe, Y, ye, F;
    if (r) return;
    const L = N === "mask" ? "mask" : "paint", te = L === "mask" ? "Mask" : "Paint", we = H(L);
    if (!(!we.length && !(((xe = t.interaction) == null ? void 0 : xe.kind) === "draw" && ((Y = t.interaction) == null ? void 0 : Y.layerKind) === L) || !await V(
      `Clear ${te}`,
      `This will remove all ${L} strokes in the current node.`,
      `Clear ${te}`
    ))) {
      if (((ye = t.interaction) == null ? void 0 : ye.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === L) {
        const ne = S(t.interaction);
        ne && t.paintEngine.cancelActiveStroke(ne), t.interaction = null;
      }
      we.length = 0, i.painting.raster_objects = z().filter((ne) => String((ne == null ? void 0 : ne.layerKind) || "paint") !== L), L === "paint" && (y().length = 0), J(), R(), u(), I(), Z(), se(), A();
    }
  }
  function w() {
    if (r) return;
    const N = ee();
    if (!N || !he(N) || W(N) || Ut(N) || n && ke(N)) return;
    let L;
    n ? L = VS(N, Zl(i), b()) : (L = JSON.parse(JSON.stringify(N)), L.id = Qo("st"), L.yaw_deg = Kt((L.yaw_deg || 0) + 8), L.z_index = b()), i.stickers.push(L), i.active.selected_sticker_id = L.id, t.selectedId = L.id, t.selectedIds = [L.id], me(), R(), u(), Z(), I(), A();
  }
  function C() {
    const N = O();
    return N ? (v(N) && (_(), Ut(N) ? h([N]) : RS(i, N.id), c(), me(), R(), u(), I(), Z(), k(), A()), !0) : !1;
  }
  function T() {
    var we, Se, xe, Y, ye;
    if (r) return;
    const N = E(), L = ee();
    if (!L && N.length === 0 || N.some((F) => D(F))) return;
    _();
    const te = N.filter(Ut);
    if (te.length && (h(te), me()), N.length > 1 || te.length) {
      const F = new Set(N.filter((Q) => ie(Q)).map((Q) => String(Q.actionGroupId || Q.id || ""))), ne = new Set(N.filter((Q) => q(Q)).map((Q) => pe(Q.rasterObjectId || Q.id || ""))), $ = new Set(N.filter(he).map((Q) => String(Q.id || "")));
      F.size > 0 && (i.painting.paint.strokes = (Array.isArray((Se = (we = i.painting) == null ? void 0 : we.paint) == null ? void 0 : Se.strokes) ? i.painting.paint.strokes : []).filter((Q) => !F.has(String((Q == null ? void 0 : Q.actionGroupId) || ""))), i.painting.groups = y().filter((Q) => !F.has(String((Q == null ? void 0 : Q.actionGroupId) || (Q == null ? void 0 : Q.id) || ""))), J()), ne.size > 0 && (i.painting.raster_objects = z().filter((Q) => !ne.has(String((Q == null ? void 0 : Q.id) || ""))), de()), $.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((Q) => $.has(String((Q == null ? void 0 : Q.id) || "")) ? W(Q) ? (_e(Q) || (Q.visible = !1), !0) : !1 : !0), fe(), me()), t.selectedId = null, t.selectedIds = [], R(), u(), I(), Z(), A();
      return;
    }
    if (ie(L)) {
      const F = String(L.actionGroupId || L.id || "").trim();
      i.painting.paint.strokes = (Array.isArray((Y = (xe = i.painting) == null ? void 0 : xe.paint) == null ? void 0 : Y.strokes) ? i.painting.paint.strokes : []).filter((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "").trim() !== F), i.painting.groups = y().filter((ne) => String((ne == null ? void 0 : ne.actionGroupId) || (ne == null ? void 0 : ne.id) || "").trim() !== F), J(), t.selectedId = null, t.selectedIds = [], R(), u(), I(), Z(), A();
      return;
    }
    if (q(L)) {
      const F = pe(L.rasterObjectId || L.id || "");
      i.painting.raster_objects = z().filter((ne) => String((ne == null ? void 0 : ne.id) || "").trim() !== F), de(), t.selectedId = null, t.selectedIds = [], R(), u(), I(), Z(), A();
      return;
    }
    if (o && ve(L)) {
      f();
      return;
    }
    if (s === "stickers" || he(L)) {
      if (W(L)) {
        if (_e(L)) return;
        L.visible = !1, me(), R(), u(), I(), Z(), A();
        return;
      }
      i.stickers = i.stickers.filter((F) => F.id !== L.id), fe(), me(), t.selectedId = ((ye = g()[0]) == null ? void 0 : ye.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, R(), u(), I(), Z(), A();
      return;
    }
    l();
  }
  function U(N, L) {
    r || (_(), N(L) && (X(), me(), R(), u(), I(), Z(), A()));
  }
  function le(N) {
    U(ge, N);
  }
  function G(N) {
    U(P, N);
  }
  function oe() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", se(), I());
  }
  return {
    connect(N) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        deleteUpstreamStickers: h,
        getActivePaintTargetDescriptor: S,
        getList: g,
        getNextStickerZIndex: b,
        getPaintingGroupList: y,
        getPaintingLayerList: H,
        getRasterObjectList: z,
        getSelected: ee,
        getSelectedItems: E,
        isExternalSticker: W,
        isItemLocked: D,
        isRasterObjectItem: q,
        isShotItem: ve,
        isStickerHidden: _e,
        isStickerItem: he,
        isStrokeGroupItem: ie,
        isUploadingSticker: ke,
        markObjectVisualsDirty: me,
        markPaintCompositeVisualsDirty: de,
        markPaintStrokeVisualsDirty: J,
        parseRasterObjectSelectionId: pe,
        pruneUnusedAssets: fe,
        pushHistory: R,
        releaseHiddenSelection: X,
        requestDraw: A,
        restoreUpstreamDeleted: ge,
        revertUpstreamLayer: P,
        selectedWorldSticker: O,
        stopTimelinePlayback: _,
        syncFloatingViewButtonState: k,
        syncPaintUi: se,
        updateSelectionMenu: Z,
        updateSidePanel: I,
        worldStickerEditable: v
      } = N);
    },
    clearAll: p,
    clearPaintingLayer: m,
    duplicateSelected: w,
    deleteSelectedWorldSticker: C,
    deleteSelected: T,
    restoreUpstreamDeletedCommand: le,
    revertUpstreamLayerCommand: G,
    forceCursorTool: oe
  };
}
function MC(e) {
  const {
    api: t,
    canvas: r,
    dragCue: n,
    editor: i,
    editorView: o,
    imageCache: s,
    node: a,
    readOnly: l,
    sceneV2: c,
    stageWrap: d,
    state: u,
    type: f,
    vueModal: h
  } = e;
  let S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe;
  function R(G) {
    return of(G == null ? void 0 : G.dataTransfer);
  }
  function X(G) {
    const oe = !!G;
    n.active !== oe && (n.active = oe, d.classList.toggle("drop-active", oe));
  }
  function A() {
    const G = new Set(
      (u.stickers || []).map((oe) => String((oe == null ? void 0 : oe.asset_id) || "")).filter((oe) => !!oe)
    );
    Object.keys(u.assets || {}).forEach((oe) => {
      G.has(oe) || (delete u.assets[oe], s.delete(oe));
    });
  }
  async function ge(G) {
    if (l || f !== "stickers" && f !== "cutout" || !lr(G)) return;
    if (c) {
      J(), await se(G);
      return;
    }
    const oe = Qo("asset"), N = qo(a, `add:${oe}`, async () => {
      try {
        const { image: L } = await Xo(G);
        s.set(oe, L);
        const te = Qo("st");
        u.stickers.push({
          id: te,
          asset_id: oe,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: b(30, Number(L.naturalWidth || L.width || 1), Number(L.naturalHeight || L.height || 1)),
          rot_deg: 0,
          z_index: ee()
        }), ke(u.stickers[u.stickers.length - 1]), z(), fe(), pe(), he();
        const we = await Pi(G, {
          fetchApi: (Y, ye) => t.fetchApi(Y, ye)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((Y) => String((Y == null ? void 0 : Y.asset_id) || "") === oe).length) return;
        u.assets[oe] = we, A(), _e(), g(), fe(), pe(), he();
      } catch (L) {
        delete u.assets[oe], s.delete(oe);
        const te = Array.isArray(u.stickers) ? u.stickers : [], we = te.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === oe);
        throw we.length && (u.stickers = te.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") !== oe), we.some((Se) => String((Se == null ? void 0 : Se.id) || "") === String(i.selectedId || "")) && ke(null), fe(), pe(), he(), g()), L;
      }
    });
    try {
      await N;
    } catch {
    }
  }
  function P() {
    var G;
    l || f !== "stickers" && f !== "cutout" || (G = h == null ? void 0 : h.openImagePicker) == null || G.call(h, "add");
  }
  function O() {
    var G;
    l || !c || (G = h == null ? void 0 : h.openImagePicker) == null || G.call(h, "add-world");
  }
  async function _(G) {
    l || !c || !lr(G) || (J(), await se(G, "world"));
  }
  function k() {
    const G = { x: r.width / 2, y: r.height / 2 }, oe = D() ? o.pick(H(), G.x, G.y, r.width, r.height) : null;
    return C_(me(), oe, y());
  }
  async function se(G, oe = "sky") {
    const N = Zl(u), L = qo(a, `add:${N}`, async () => {
      const { image: te } = await Xo(G), we = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: b(30, Number(te.naturalWidth || te.width || 1), Number(te.naturalHeight || te.height || 1)),
        rot_deg: 0
      }, Se = { kind: "file", filename: "" }, xe = oe === "world" ? LS(N, Se, k()) : Ed(N, Se, we, ee());
      s.set(de(xe), te), u.stickers.push(xe), oe === "world" ? ie(N) : ke(xe), z(), fe(), pe(), he();
      try {
        const Y = await Pi(G, {
          fetchApi: (F, ne) => t.fetchApi(F, ne)
        }), ye = u.stickers.find((F) => F.id === N);
        if (!ye) return;
        ye.source = La(Y), s.set(de(ye), te), _e(), g();
      } catch (Y) {
        throw u.stickers = u.stickers.filter((ye) => ye.id !== N), i.selectedId === N && ke(null), i.worldSelectedId === N && S(), _e(), g(), Y;
      } finally {
        fe(), pe(), he();
      }
    });
    try {
      await L;
    } catch {
    }
  }
  async function Z(G, oe) {
    const N = qo(a, `replace:${oe}:${Qo("asset")}`, async () => {
      const { image: L } = await Xo(G), te = await Pi(G, {
        fetchApi: (Se, xe) => t.fetchApi(Se, xe)
      }), we = u.stickers.find((Se) => Se.id === oe);
      if (we) {
        we.source = La(te), we.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Se of [we.size.value, ...we.size.keyframes.map((xe) => xe.value)])
          Se.vFOV_deg = b(Se.hFOV_deg, Number(L.naturalWidth || L.width || 1), Number(L.naturalHeight || L.height || 1));
        s.set(de(we), L), ve(), _e(), g(), fe(), pe(), he();
      }
    });
    try {
      await N;
    } catch {
    }
  }
  async function I(G) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const oe = E();
    if (!oe || !q(oe) || W(oe) || Ut(oe) || !lr(G)) return;
    if (c) {
      await Z(G, oe.id);
      return;
    }
    const N = String(oe.id || ""), L = Qo("asset"), te = qo(a, `replace:${N}:${L}`, async () => {
      var F;
      const we = (Array.isArray(u.stickers) ? u.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === N) || null;
      if (!we || !q(we) || W(we)) return;
      const Se = String(we.asset_id || ""), xe = Se ? fn(((F = u.assets) == null ? void 0 : F[Se]) || null) : null, Y = Number(we.vFOV_deg || 0), ye = we.crop && typeof we.crop == "object" ? { ...we.crop } : null;
      try {
        const { image: ne } = await Xo(G);
        s.set(L, ne), we.asset_id = L, we.vFOV_deg = b(
          Number(we.hFOV_deg || 30),
          Number(ne.naturalWidth || ne.width || 1),
          Number(ne.naturalHeight || ne.height || 1)
        ), we.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ve(), fe(), pe(), he();
        const $ = await Pi(G, {
          fetchApi: (K, B) => t.fetchApi(K, B)
        }), Q = (Array.isArray(u.stickers) ? u.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === N) || null;
        if (!Q || String(Q.asset_id || "") !== L) return;
        u.assets[L] = $, A(), _e(), g(), fe(), pe(), he();
      } catch (ne) {
        delete u.assets[L], s.delete(L);
        const $ = (Array.isArray(u.stickers) ? u.stickers : []).find((Q) => String((Q == null ? void 0 : Q.id) || "") === N) || null;
        throw $ && String($.asset_id || "") === L && (Se && xe && (u.assets[Se] = xe), $.asset_id = Se, $.vFOV_deg = Y, $.crop = ye ? { ...ye } : null), ve(), g(), fe(), pe(), he(), ne;
      }
    });
    try {
      await te;
    } catch {
    }
  }
  function v() {
    var oe;
    if (l) return;
    const G = E();
    !G || !q(G) || W(G) || Ut(G) || (oe = h == null ? void 0 : h.openImagePicker) == null || oe.call(h, "replace");
  }
  async function V() {
    if (l || f !== "stickers") return;
    if (c) {
      await p();
      return;
    }
    const G = u.assets && typeof u.assets == "object" ? u.assets : {}, oe = Object.entries(G).filter(([, L]) => {
      const te = String((L == null ? void 0 : L.type) || "").toLowerCase(), we = String((L == null ? void 0 : L.value) || "");
      return te === "dataurl" && we.startsWith("data:image");
    });
    if (!oe.length) return;
    let N = !1;
    for (const [L, te] of oe)
      try {
        const we = String((te == null ? void 0 : te.value) || "");
        if (!we) continue;
        const Se = await fetch(we).then((ne) => ne.blob()), xe = String(Se.type || "image/png").split("/")[1] || "png", Y = String((te == null ? void 0 : te.name) || `${L}.${xe}`), ye = new File([Se], Y, { type: Se.type || "image/png" }), F = await Pi(ye, {
          fetchApi: (ne, $) => t.fetchApi(ne, $)
        });
        u.assets[L] = {
          ...F,
          w: Number((te == null ? void 0 : te.w) || 0),
          h: Number((te == null ? void 0 : te.h) || 0)
        }, N = !0;
      } catch {
      }
    N && (g(), he());
  }
  async function p() {
    let G = !1;
    for (const oe of u.stickers) {
      const N = oe.source.data_url;
      if (N)
        try {
          const L = await fetch(N).then((xe) => xe.blob()), te = String(L.type || "image/png").split("/")[1] || "png", we = new File([L], `${oe.id}.${te}`, { type: L.type || "image/png" }), Se = await Pi(we, {
            fetchApi: (xe, Y) => t.fetchApi(xe, Y)
          });
          oe.source = La(Se), G = !0;
        } catch {
        }
    }
    G && (g(), he());
  }
  function m(G) {
    f !== "stickers" && f !== "cutout" || l || (G.preventDefault(), X(!0));
  }
  function w(G) {
    var L;
    if (f !== "stickers" && f !== "cutout" || l) return;
    G.preventDefault(), G.stopPropagation(), n.depth = 0, X(!1);
    const N = Array.from(((L = G.dataTransfer) == null ? void 0 : L.files) || []).find((te) => lr(te));
    N && ge(N);
  }
  function C(G) {
    f !== "stickers" && f !== "cutout" || l || R(G) && (n.depth += 1, X(!0), G.preventDefault());
  }
  function T(G) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && R(G) && X(!0), n.active && G.preventDefault());
  }
  function U(G) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const oe = Number(G.clientX) <= 0 && Number(G.clientY) <= 0;
    (n.depth === 0 || oe) && X(!1);
  }
  function le(G) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, X(!1), R(G) && G.preventDefault());
  }
  return {
    connect(G) {
      ({
        clearWorldSelection: S,
        commitAndRefreshNode: g,
        computeStickerVFov: b,
        contentSphere: y,
        currentSpaceCamera: H,
        forceCursorTool: z,
        getNextStickerZIndex: ee,
        getSelected: E,
        isExternalSticker: W,
        isSpaceView: D,
        isStickerItem: q,
        markObjectVisualsDirty: ve,
        pushHistory: _e,
        requestDraw: he,
        selectWorldSticker: ie,
        setSelectedItem: ke,
        spaceViewState: me,
        stickerImageKey: de,
        stopTimelinePlayback: J,
        updateSelectionMenu: pe,
        updateSidePanel: fe
      } = G);
    },
    addImageStickerFromFile: ge,
    addImageSticker: P,
    addWorldImageSticker: O,
    addWorldStickerFromFile: _,
    replaceSelectedImageFromFile: I,
    replaceSelectedImage: v,
    migrateLegacyEmbeddedAssets: V,
    pruneUnusedAssets: A,
    setDropCue: X,
    onCanvasDragOver: m,
    onCanvasDrop: w,
    onWindowDragEnter: C,
    onWindowDragOver: T,
    onWindowDragLeave: U,
    onWindowDrop: le
  };
}
function NC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    frameRollKnobEl: i,
    initialShotBase: o,
    readOnly: s,
    runtime: a,
    shotEditor: l,
    stageWrap: c,
    state: d,
    studio: u,
    tooltip: f,
    type: h,
    uiState: S
  } = e;
  let g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I = o;
  function v($, Q) {
    var j;
    const K = (j = E().space) == null ? void 0 : j.gizmo;
    if (he() && K && Z("hover", Q) !== null && Z("down", Q))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: K.mode, start: K.transform, base: ee(), changed: !1 }, r.setPointerCapture($.pointerId), _(Q), !0;
    const B = xg(ee(), b(fe()));
    return L_(z(), B, Q, r.width, r.height) ? (he() || (pe(L()), se(), k(), de()), n.interaction = { kind: "world_select" }, r.setPointerCapture($.pointerId), !0) : !1;
  }
  function V() {
    if (s || h !== "cutout") return;
    const $ = L();
    if ($) {
      pe($), n.mode = "pano", O(Kt(Number($.yaw_deg || 0)), Fe(Number($.pitch_deg || 0), -89.9, 89.9)), se(), k(), de({ cause: "cutout_frame" });
      return;
    }
    const Q = wm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [Q], pe(Q), W(), n.mode = "pano", me(), H(), se(), k(), de({ cause: "cutout_frame" });
  }
  function p() {
    s || !u || q() || (X(), d.camera = PS(R()), oe(), pe(L()), W(), me(), H(), se(), k(), de({ cause: "cutout_frame" }));
  }
  function m() {
    X(), d.camera = null, pe(null), oe(), me(), H(), se(), k(), de({ cause: "cutout_frame" });
  }
  function w($, Q) {
    u && ie($) && (d.camera.projection = Q === xo ? "erp" : "perspective", Q === xo) || U($, Q);
  }
  function C() {
    s || h !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, me(), H(), se(), k(), de());
  }
  function T($, Q) {
    const K = a.frameSafeRect;
    if (!$ || !K || n.mode !== "frame") return !1;
    const B = Ku * Vi(K, $), j = gd(md(K, Q), B);
    return $.hFOV_deg = j.hFOV_deg, $.vFOV_deg = j.vFOV_deg, !0;
  }
  function U($, Q) {
    if (!$ || $.locked === !0) return;
    const K = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, B = (() => {
      const ce = String($.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(ce)) {
        const [ue, Pe] = ce.split(":").map((Ee) => Number(Ee));
        if (Number.isFinite(ue) && Number.isFinite(Pe)) return ue >= Pe;
      }
      const be = Number($.hFOV_deg || 64), M = Number($.vFOV_deg || 40);
      return Math.abs(be - M) > 1e-6 ? be >= M : Hi($) >= 1;
    })();
    let [j, x] = K[String(Q)] || K["1:1"];
    j >= x !== B && ([j, x] = [x, j]);
    const re = j / x;
    if (!T($, re)) {
      const ce = Fe(Number($.vFOV_deg || 40), 1, 179);
      $.vFOV_deg = ce, $.hFOV_deg = Ta(ce, re);
    }
    $.aspect_id = `${j}:${x}`;
  }
  function le($, Q, K) {
    if (!$ || $.locked === !0) return !1;
    const B = Is(Q, K);
    if (!B) return !1;
    const j = B.ratio;
    if (!T($, j)) {
      const x = Fe(Number($.vFOV_deg || 40), 1, 179);
      $.vFOV_deg = x, $.hFOV_deg = Ta(x, j);
    }
    return $.aspect_id = B.label, !0;
  }
  function G($) {
    if (!$ || $.locked === !0) return;
    const Q = String($.aspect_id || "").trim(), K = ui($), B = K.tanHalfX / Math.max(1e-12, K.tanHalfY), j = 1 / Math.max(1e-12, B);
    if (!T($, j)) {
      const x = Fe(Number($.vFOV_deg || 60), 1, 179);
      $.vFOV_deg = x, $.hFOV_deg = Ta(x, j);
    }
    if (/^\d+:\d+$/.test(Q)) {
      const [x, re] = Q.split(":");
      $.aspect_id = `${re}:${x}`;
    } else
      $.aspect_id = Fi($);
  }
  function oe($ = !0) {
    var B, j;
    if (!t) return;
    const Q = I;
    if (!y()) {
      I = null, (B = d.shots) != null && B.length && (d.shots = []), Q && N(Q, null);
      return;
    }
    const K = (j = d.shots) == null ? void 0 : j[0];
    $ && K && I && CS(d.camera, n.frame, K, I), I = ag(d.camera, n.frame), K ? Object.assign(K, I, { position: [...I.position] }) : d.shots = [{ ...I, position: [...I.position] }], Q || N(null, I);
  }
  function N($, Q) {
    var x, re;
    !Q && n.mode === "frame" && ke($);
    const K = (Q == null ? void 0 : Q.position) ?? [0, 0, 0];
    if (((re = (x = n.viewTransition) == null ? void 0 : x.end) == null ? void 0 : re.mode) === "3dof") {
      P({ ...R(), position: K }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ve()) return;
    const B = ($ == null ? void 0 : $.position) ?? [0, 0, 0];
    if (B.every((ce, be) => ce === K[be])) return;
    const j = { ...R(), position: B };
    g({ mode: "6dof", position: B, moved: !0 }), n.viewDistance = j.distance, P({ ...j, position: K }, { mode: "3dof", moved: !1 });
  }
  function L() {
    if (!l) return null;
    const $ = Array.isArray(d.shots) ? d.shots : [];
    if (!$.length) return null;
    const Q = String(d.active.selected_shot_id || "");
    return $.find((K) => String((K == null ? void 0 : K.id) || "") === Q) || $[0] || null;
  }
  function te($, Q, K = {}) {
    var x;
    if (($ == null ? void 0 : $.kind) !== "roll_frame" || !$.shot) return;
    $.accumulatedRad += vm(Q, $.lastAngle), $.lastAngle = Q;
    const B = Sm($.start.roll_deg, $.accumulatedRad, {
      shiftKey: K.shiftKey,
      altKey: $.altStarted ? !1 : K.altKey
    });
    $.shot.roll_deg = B, $.changed = $.changed || Math.abs($.accumulatedRad) > 1e-9;
    const j = (((x = S.sidePanel) == null ? void 0 : x.params) || []).find((re) => re.key === "roll_deg");
    j && (j.value = B, j.displayValue = yo(B), j.fillPct = (B + 180) / 360 * 100), A(), xe($), de({ localOnly: !0 });
  }
  function we($, Q, K = {}) {
    var x;
    if (($ == null ? void 0 : $.kind) !== "roll_frame" || !$.shot || !$.rollGesture) return;
    const B = S0($.rollGesture, Q, K);
    if (!B) return;
    $.rollGesture = B.gesture, $.center = B.gesture.center, $.lastAngle = B.gesture.lastAngle, $.accumulatedRad = B.gesture.accumulatedRad, $.shot.roll_deg = B.rollDeg, $.changed = $.changed || Math.abs(B.gesture.accumulatedRad) > 1e-9;
    const j = (((x = S.sidePanel) == null ? void 0 : x.params) || []).find((re) => re.key === "roll_deg");
    j && (j.value = B.rollDeg, j.displayValue = yo(B.rollDeg), j.fillPct = (B.rollDeg + 180) / 360 * 100), A(), xe($), de({ localOnly: !0 });
  }
  function Se($, Q) {
    const K = J($);
    return Math.atan2(K.y - Q.y, K.x - Q.x);
  }
  function xe($) {
    var re, ce;
    if (($ == null ? void 0 : $.kind) !== "roll_frame" || !$.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const Q = D($.shot), K = (re = r.getBoundingClientRect) == null ? void 0 : re.call(r), B = (ce = c.getBoundingClientRect) == null ? void 0 : ce.call(c);
    if (!Q || !K || !B || r.width <= 0 || r.height <= 0) return;
    const j = K.width / r.width, x = K.height / r.height;
    S.tooltip.text = `${yo($.shot.roll_deg)}°`, S.tooltip.left = K.left - B.left + (Q.x + Q.w * 0.5) * j, S.tooltip.top = K.top - B.top + (Q.y + Q.h * 0.5) * x + 12, S.tooltip.variant = "roll", S.tooltip.visible = !0;
  }
  function Y($) {
    var x;
    if ($.button !== 0 || s || n.mode !== "frame") return;
    const Q = L();
    if (!Q || Q.locked === !0) return;
    const K = D(Q);
    if (!K) return;
    const B = { x: K.x + K.w * 0.5, y: K.y + K.h * 0.5 }, j = Se($, B);
    n.interaction = {
      kind: "roll_frame",
      shot: Q,
      center: B,
      lastAngle: j,
      accumulatedRad: 0,
      start: { roll_deg: Number(Q.roll_deg ?? Q.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (x = i.setPointerCapture) == null || x.call(i, $.pointerId), $.preventDefault(), A(), xe(n.interaction), de({ localOnly: !0 });
  }
  function ye($) {
    var Q;
    ((Q = n.interaction) == null ? void 0 : Q.kind) !== "roll_frame" || n.interaction.source !== "knob" || te(
      n.interaction,
      Se($, n.interaction.center),
      $
    );
  }
  function F() {
    const $ = n.interaction;
    ($ == null ? void 0 : $.kind) !== "roll_frame" || $.source !== "knob" || ($.changed && (me(), H(), se()), n.interaction = null, _e(), ge(), A(), de());
  }
  function ne($) {
    const Q = n.mode === "frame" && !s ? L() : null;
    !Q || Q.locked === !0 || Math.abs(Number(Q.roll_deg ?? Q.rot_deg ?? 0)) <= 1e-9 || (Q.roll_deg = 0, me(), H(), se(), A(), de(), $.preventDefault());
  }
  return {
    connect($) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: b,
        cameraShoots: y,
        commitAndRefreshNode: H,
        currentSpaceCamera: z,
        cutoutCamera: ee,
        editorViewInput: E,
        forceCursorTool: W,
        getFrameViewRect: D,
        hasCamera: q,
        hasSpaceContent: ve,
        hideTooltip: _e,
        isCameraSelected: he,
        isShotItem: ie,
        leaveFrameView: ke,
        pushHistory: me,
        requestDraw: de,
        screenPos: J,
        setSelectedItem: pe,
        spaceScale: fe,
        spaceViewState: R,
        stopTimelinePlayback: X,
        syncFrameRollKnob: A,
        syncViewToggleState: ge,
        transitionView: P,
        turnViewTo: O,
        updateCursor: _,
        updateSelectionMenu: k,
        updateSidePanel: se,
        worldGizmoPointer: Z
      } = $);
    },
    addCutoutFrame: V,
    addStudioCamera: p,
    deleteStudioCamera: m,
    setShotAspect: w,
    clearCutoutFrame: C,
    applyCutoutAspectCustom: le,
    rotateCutoutAspect90: G,
    syncCutoutShot: oe,
    getActiveCutoutShot: L,
    startCameraPress: v,
    applySharedRollInteractionPoint: we,
    onFrameRollKnobPointerDown: Y,
    onFrameRollKnobPointerMove: ye,
    finishKnobRoll: F,
    onFrameRollKnobDoubleClick: ne
  };
}
function PC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: s,
    frameRailEl: a,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: h,
    videoTransportEl: S
  } = e;
  let g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J = null, pe = !1;
  function fe(N) {
    if (n.mode = "pano", !N) return;
    b();
    const L = he().distance;
    n.viewYaw = Kt(N.yaw_deg), n.viewPitch = Fe(N.pitch_deg, -89.9, 89.9), n.viewFov = Fe(N.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...N.position], moved: !0 }), n.viewDistance = L, d.backgroundDirty = !0;
  }
  function R() {
    var B, j, x, re, ce;
    if (!r) return null;
    const N = (B = r.getBoundingClientRect) == null ? void 0 : B.call(r), L = Number((N == null ? void 0 : N.width) || 0) > 0 ? r.width / N.width : 1, te = Number((N == null ? void 0 : N.height) || 0) > 0 ? r.height / N.height : 1;
    d.frameCanvasScale = Math.min(L, te);
    let we = 24, Se = 24;
    const xe = Math.max(we + 1, r.width - 24);
    let Y = Math.max(Se + 1, r.height - 24);
    const ye = (j = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : j.call(f), F = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a);
    let ne = 24;
    ye && N && ye.width > 0 && ye.height > 0 && (ne = Math.max(ne, (ye.right - N.left) * L + Zp)), F && N && F.width > 0 && F.height > 0 && ((re = h.frameRail) == null ? void 0 : re.visible) === !0 && (ne = Math.max(ne, (N.right - F.left) * L + Zp)), we = Math.max(we, ne);
    const $ = Math.min(xe, r.width - ne);
    let Q = 24;
    const K = (ce = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : ce.call(s);
    if (K && N && K.width > 0 && K.height > 0 && (Q = Math.max(Q, (K.bottom - N.top) * te + Bc)), [l, S].forEach((be) => {
      var Pe;
      if (!be || !N) return;
      const M = getComputedStyle(be);
      if (M.display === "none" || M.visibility === "hidden" || Number(M.opacity) <= 0) return;
      const ue = (Pe = be.getBoundingClientRect) == null ? void 0 : Pe.call(be);
      !ue || ue.width <= 0 || ue.height <= 0 || (Q = Math.max(Q, (N.bottom - ue.top) * te + Bc));
    }), o && N) {
      const be = getComputedStyle(o);
      be.display !== "none" && be.visibility !== "hidden" && Number(be.opacity) > 0 && (Q = Math.max(Q, (K2 + Bc) * te));
    }
    return Se = Math.max(Se, Q), Y = Math.max(Se + 1, Math.min(Y, r.height - Q)), {
      x: we,
      y: Se,
      w: Math.max(1, $ - we),
      h: Math.max(1, Y - Se)
    };
  }
  function X(N = z()) {
    if (!N || !r) return null;
    const L = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return f1(L, N, Ku * Vi(L, N));
  }
  function A(N = z()) {
    const L = X(N);
    return L ? { x: L.x, y: L.y, w: L.w, h: L.h } : null;
  }
  function ge() {
    return u && !!z();
  }
  function P(N, L) {
    const te = z();
    if (!te || te.locked === !0) return !1;
    const we = Number(L) > 0, Se = xm(te, L);
    if (!Se) return !1;
    if (we) {
      const xe = Ku * Vi(
        d.frameSafeRect || { w: r.width, h: r.height },
        Se
      ), Y = yd({ width: r.width, height: r.height }, xe);
      if (Y.halfW < r.width * 0.5 - 1e-6 || Y.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return te.hFOV_deg = Se.hFOV_deg, te.vFOV_deg = Se.vFOV_deg, O(), de(), !0;
  }
  function O() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, D(), y(), de());
    }, 180);
  }
  function _() {
    return t && n.mode === "frame" && ee();
  }
  function k() {
    const N = z(), L = X(N);
    return N && L ? Pg(N, L, { width: r.width, height: r.height }) : null;
  }
  function se() {
    var N;
    return ((N = H()) == null ? void 0 : N.radius) || pr;
  }
  function Z(N) {
    const { position: L, yaw_deg: te, pitch_deg: we, roll_deg: Se, hFOV_deg: xe } = N.shot;
    return { position: L, yaw_deg: te, pitch_deg: we, roll_deg: Se, hFOV_deg: xe, distance: se() };
  }
  function I(N, L) {
    const { rect: te } = N;
    return i.pickSurface(ve(N.shot), L.x - te.x, L.y - te.y, te.w, te.h);
  }
  function v(N, L, te) {
    return _u(L, I(N, te), null, _e());
  }
  function V(N) {
    return JSON.stringify([Z(N), N.rect]);
  }
  function p(N) {
    const L = z();
    L.position = [...N.position], L.yaw_deg = N.yaw_deg, L.pitch_deg = N.pitch_deg;
  }
  function m(N, L) {
    const te = z();
    !te || c || te.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: te,
      last: N,
      start: { yaw_deg: Number(te.yaw_deg || 0), pitch_deg: Number(te.pitch_deg || 0) },
      changed: !1
    }, me(N), r.setPointerCapture(L));
  }
  function w(N, L, te) {
    const we = k();
    if (!we || c) return;
    const Se = Z(we);
    n.interaction = N === "orbit" ? { kind: "frame_orbit", last: L, pivot: v(we, Se, L), changed: !1 } : { kind: "frame_pan", last: L, depth: hg(Se, _e()), changed: !1 }, me(L), r.setPointerCapture(te);
  }
  function C(N, L) {
    const te = k();
    if (!te) return;
    const we = Z(te), Se = L.x - N.last.x, xe = L.y - N.last.y;
    p(N.kind === "frame_pan" ? yg(we, Se, xe, te.rect.w, te.rect.h, N.depth) : gg(we, Se, xe, r.height, N.pivot)), N.changed = N.changed || Se !== 0 || xe !== 0, N.last = L, q({ localOnly: !0, cause: "frame_view" });
  }
  function T(N, L) {
    const te = k();
    if (!te || c) return;
    const we = Z(te), Se = performance.now(), xe = { x: N.x, y: N.y, time: Se, key: i.contentRevision(), view: V(te) };
    if (!mg(J, xe)) {
      const Y = I(te, N);
      J = { ...xe, cost: performance.now() - Se, hit: Y };
    }
    p(bg(we, _u(we, J.hit, null, _e()), L, _e())), J.view = V(k() ?? te), J.wheelTime = Se, O(), de(), q({ localOnly: !0, cause: "frame_view" });
  }
  function U(N, L) {
    const te = z();
    if (!te || c || te.locked === !0) return !1;
    const we = hy(te, N, L);
    return we === te ? !1 : (ie(), te.position = we.position, pe = !0, !0);
  }
  function le() {
    return pe ? (pe = !1, D(), y(), de(), !0) : !1;
  }
  function G() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, D(), y(), de(), !0) : !1;
  }
  function oe() {
    const N = n.interaction;
    if (!(N != null && N.shot) || !N.start || N.kind !== "pan_frame" && N.kind !== "roll_frame") return !1;
    const L = N.kind === "roll_frame";
    return N.kind === "pan_frame" ? (N.shot.yaw_deg = N.start.yaw_deg, N.shot.pitch_deg = N.start.pitch_deg) : N.shot.roll_deg = N.start.roll_deg, L && E(), n.interaction = null, W(), ke(), de(), me(n.pointerPos), q({ localOnly: !0 }), !0;
  }
  return {
    connect(N) {
      ({
        applySpaceMode: g,
        cancelViewTransition: b,
        commitAndRefreshNode: y,
        contentSphere: H,
        getActiveCutoutShot: z,
        hasSpaceContent: ee,
        hideTooltip: E,
        invalidateLivePaintPreviewCaches: W,
        pushHistory: D,
        requestDraw: q,
        shotViewCamera: ve,
        spaceScale: _e,
        spaceViewState: he,
        stopTimelinePlayback: ie,
        syncViewToggleState: ke,
        updateCursor: me,
        updateSidePanel: de
      } = N);
    },
    leaveFrameView: fe,
    measureFrameSafeRect: R,
    getFrameViewLayout: X,
    getFrameViewRect: A,
    supportsFramePainting: ge,
    zoomFrameViewAt: P,
    isFreeFrameView: _,
    frameContext: k,
    frameViewDistance: se,
    frameSpaceView: Z,
    frameTarget: v,
    startPanFrame: m,
    startFrameDrag: w,
    dragFrame: C,
    zoomFrameAt: T,
    flushFrameWheelCommit: G,
    cancelFrameCameraGesture: oe,
    moveFrameByKeys: U,
    endFrameKeyMove: le
  };
}
function AC(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q = 0;
  function ve() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function _e() {
    return String(ve() || "") === "lasso_fill";
  }
  function he() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ie(v, V) {
    const p = Number(V || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, p / 2048)
    };
  }
  function ke(v) {
    const V = String(v || "").trim();
    return V === "eraser" ? Dr : Dn[V] ? V : t.activeBrushPresetId || Dr;
  }
  function me() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (he() || D());
  }
  function de() {
    var v;
    return me() && ((v = t.pointerPos) == null ? void 0 : v.inside) === !0;
  }
  function J(v, V = !0) {
    const p = Number((v == null ? void 0 : v.x) || 0), m = Number((v == null ? void 0 : v.y) || 0), w = V !== !1, C = t.pointerPos || { x: 0, y: 0, inside: !1 }, T = C.inside !== w || Math.abs(C.x - p) > 0.01 || Math.abs(C.y - m) > 0.01;
    return t.pointerPos = { x: p, y: m, inside: w }, T;
  }
  function pe() {
    var oe, N;
    if (!de()) return null;
    const v = t.primaryTool === "mask" ? "mask" : "paint", V = v === "mask" ? t.maskTool : t.paintTool, p = ke(V), m = Dn[p] || Dn[Dr], w = Number(t.brushSizes[p] ?? 10), C = Math.max(1, w) * Math.max(0.1, Number(m.sizeScale ?? 1)), T = Math.max(3, C * 0.5), U = v === "mask" ? V === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : V === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(t.paintColor), le = v === "mask" ? V === "lasso_fill" ? 0.18 : 0.2 : V === "eraser" ? 0.06 : Fe(Math.max(0.16, Number(U.a ?? 1) * 0.3), 0.16, 0.52), G = v === "mask" ? 0.95 : V === "eraser" ? 0.75 : Fe(Math.max(0.46, Number(U.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: v,
      toolKind: V,
      preset: m,
      radius: T,
      fillStyle: _r(U, le),
      strokeStyle: _r(U, G),
      x: Number(((oe = t.pointerPos) == null ? void 0 : oe.x) || 0),
      y: Number(((N = t.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: T,
      hotspotY: T
    };
  }
  function fe() {
    var L, te, we;
    const v = pe();
    if (!r) return;
    if (!v) {
      r.style.display = "none";
      return;
    }
    let V = v.radius * 2, p = v.radius * 2, m = "999px", w = 0, C = v.fillStyle, T = "1px solid rgba(222, 222, 222, 0.72)", U = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const le = "rgba(222, 222, 222, 0.72)", G = "rgba(52, 52, 52, 0.72)";
    let oe = Number(v.hotspotX ?? V * 0.5), N = Number(v.hotspotY ?? p * 0.5);
    if (v.toolKind === "lasso_fill")
      V = Il, p = Il, m = "0", T = "0", U = "none", oe = B2, N = Y2, C = eA(v.fillStyle, G, le);
    else if (v.layerKind === "mask")
      C = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (v.toolKind === "marker") {
      const Se = Math.max(1, Number(((L = v.preset) == null ? void 0 : L.aspect) ?? 1));
      V = Math.max(10, v.radius * 2 * Se), p = Math.max(6, v.radius * 2), m = `${Math.min(6, p * 0.42)}px`, w = Number(((we = (te = v.preset) == null ? void 0 : te.angle) == null ? void 0 : we.value) || 0) * $i;
    } else v.toolKind === "brush" ? C = `radial-gradient(circle at 50% 50%, ${v.strokeStyle} 0%, ${v.fillStyle} 45%, rgba(0,0,0,0) 100%)` : v.toolKind === "eraser" && (C = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(V)}px`, r.style.height = `${Math.round(p)}px`, r.style.borderRadius = m, r.style.border = T, r.style.boxShadow = U, r.style.background = C, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(v.x - oe)}px, ${Math.round(v.y - N)}px) rotate(${w}deg)`;
  }
  function R() {
    var ye;
    if (!n || !i) return;
    const v = t.primaryTool === "mask" ? "mask" : "paint", V = v === "mask" ? t.maskTool : t.paintTool;
    if (V === "lasso_fill") return;
    const p = ke(V), m = Dn[p] || Dn[Dr], w = Number(t.brushSizes[p] ?? 10), C = Math.max(1, w) * Math.max(0.1, Number(m.sizeScale ?? 1)), T = Math.max(6, C * 0.5), U = V === "eraser", le = v === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : U ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(t.paintColor), G = v === "mask" ? _r(le, 0.22) : U ? "rgba(255,255,255,0.14)" : _r(le, Fe(Math.max(0.18, Number(le.a ?? 1) * 0.34), 0.18, 0.56)), oe = v === "mask" ? _r(le, 0.96) : U ? "rgba(255,255,255,0.72)" : _r(le, Fe(Math.max(0.56, Number(le.a ?? 1) * 0.96), 0.56, 1));
    let N = T * 2, L = T * 2, te = "999px", we = 0, Se = G;
    const xe = "rgba(222, 222, 222, 0.72)", Y = "rgba(52, 52, 52, 0.72)";
    if (v === "mask")
      Se = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (V === "marker") {
      const F = Math.max(1, Number((m == null ? void 0 : m.aspect) ?? 1));
      N = Math.max(16, T * 2 * F), L = Math.max(10, T * 2), te = `${Math.min(8, L * 0.42)}px`, we = Number(((ye = m == null ? void 0 : m.angle) == null ? void 0 : ye.value) || 0) * $i;
    } else V === "brush" ? Se = `radial-gradient(circle at 50% 50%, ${oe} 0%, ${G} 48%, rgba(0,0,0,0) 100%)` : V === "lasso_fill" ? (N = Math.max(18, T * 1.8), L = N, Se = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${oe} 43%, ${oe} 58%, rgba(0,0,0,0) 59%)`) : U && (Se = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(N)}px`, i.style.height = `${Math.round(L)}px`, i.style.borderRadius = te, i.style.background = Se, i.style.border = `1px solid ${xe}`, i.style.boxShadow = `0 0 0 1px ${Y}`, i.style.transform = `rotate(${we}deg)`, q && (clearTimeout(q), q = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function X() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function A(v, V, p, m) {
    const w = ke(V), C = Dn[w] || Dn[Dr], T = t.brushSizes[w] ?? 10, U = Math.max(1, T) * Math.max(0.1, C.sizeScale ?? 1), le = ie(m, U), G = p.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), oe = {
      id: ao(v),
      actionGroupId: ao("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: V,
      size: U,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: le.radiusModel,
      radiusValue: le.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: G.map((N) => ({ ...N })),
        points: G.map((N) => ({ ...N }))
      }
    };
    return Jp(oe, C), t.mode, Number(C.aspect ?? 1), Number(oe.aspect ?? 1), String(oe.stampKind || ""), Number(oe.size || 0), String(oe.radiusModel || ""), Number(oe.radiusValue || 0), { ...oe.targetSpace }, oe;
  }
  function ge(v, V, p, m) {
    const w = p.map((le) => ({
      ...le,
      t: Number((le == null ? void 0 : le.t) || 0),
      widthScale: Number.isFinite(Number(le == null ? void 0 : le.widthScale)) ? Math.max(0, Number(le.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(le == null ? void 0 : le.pressureLike)) ? Math.max(0, Number(le.pressureLike)) : 1
    })), C = ke(V), T = Dn[C] || Dn[Dr], U = {
      id: ao(v),
      actionGroupId: ao("ag"),
      targetSpace: m && typeof m == "object" ? { ...m, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: v,
      toolKind: V,
      size: 10,
      createdAt: Date.now(),
      color: v === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: w.map((le) => ({ ...le }))
      }
    };
    return Jp(U, T), t.mode, Number(T.aspect ?? 1), Number(U.aspect ?? 1), String(U.stampKind || ""), { ...U.targetSpace }, U;
  }
  function P(v) {
    const V = o.painting || (o.painting = ji(null)), p = V[v] || (V[v] = { strokes: [] });
    return Array.isArray(p.strokes) || (p.strokes = []), p.strokes;
  }
  function O(v, V, p = performance.now()) {
    let m;
    if (t.mode === "frame") {
      const G = f();
      if (!G || (m = W(V, G, p), !m)) return !1;
    } else
      m = E(V, p);
    if (!m) return !1;
    const w = v.stroke.geometry.rawPoints || v.stroke.geometry.points, C = v.stroke.geometry.points, T = w[w.length - 1];
    if (T) {
      const G = Math.abs(Number(m.u ?? m.x ?? 0) - Number(T.u ?? T.x ?? 0)), oe = Math.abs(Number(m.v ?? m.y ?? 0) - Number(T.v ?? T.y ?? 0));
      if (G < 15e-4 && oe < 15e-4) return !1;
    }
    const U = {
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    w.push({ ...U }), C.push({ ...U });
    const le = h(v);
    if (le) {
      const G = t.paintEngine.ensureTarget(le);
      t.paintEngine.appendStrokePoint(G, Number(U.u ?? 0), Number(U.v ?? 0), v.stroke);
    }
    return !0;
  }
  function _(v, V, p = performance.now()) {
    var T, U;
    let m;
    if (t.mode === "frame") {
      const le = f();
      if (!le) return !1;
      m = W(V, le, p);
    } else
      m = E(V, p);
    const w = (U = (T = v == null ? void 0 : v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : U.points;
    if (!m || !Array.isArray(w)) return !1;
    const C = w[w.length - 1];
    if (C) {
      const le = Math.abs(Number(m.u ?? m.x ?? 0) - Number(C.u ?? C.x ?? 0)), G = Math.abs(Number(m.v ?? m.y ?? 0) - Number(C.v ?? C.y ?? 0));
      if (le < 15e-4 && G < 15e-4) return !1;
    }
    return w.push({
      ...m,
      t: Number((m == null ? void 0 : m.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function k(v) {
    var F, ne, $, Q, K;
    const V = (v == null ? void 0 : v.stroke) || null;
    if (!V || (v == null ? void 0 : v.layerKind) !== "paint" || String((V == null ? void 0 : V.toolKind) || "") !== "eraser") return !1;
    ee();
    const p = h(), m = c(p.width, p.height);
    if (!z(m, V, { w: p.width, h: p.height })) return !1;
    const w = ((ne = (F = m.ctx) == null ? void 0 : F.getImageData(0, 0, p.width, p.height)) == null ? void 0 : ne.data) || null;
    if (!w) return !1;
    const C = new Map(g().map((B) => [String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim(), B ? { ...B } : null])), T = [], U = [], le = [...b().filter((B) => String((B == null ? void 0 : B.layerKind) || "paint") !== "paint")];
    let G = !1, oe = S().reduce((B, j) => Math.max(B, Number((j == null ? void 0 : j.z_index) || 0)), -1) + 1;
    function N(B, j, x, re = 8) {
      let ce = j, be = x, M = -1, ue = -1;
      for (let Pe = 0; Pe < x; Pe += 1)
        for (let Ee = 0; Ee < j; Ee += 1)
          B[(Pe * j + Ee) * 4 + 3] <= re || (Ee < ce && (ce = Ee), Pe < be && (be = Pe), Ee > M && (M = Ee), Pe > ue && (ue = Pe));
      return M < ce || ue < be ? null : { minX: ce, minY: be, maxX: M, maxY: ue };
    }
    const L = N(w, p.width, p.height, 8);
    if (!L) return !1;
    function te(B, j) {
      return !B || !j ? !1 : !(B.maxX < j.minX || j.maxX < B.minX || B.maxY < j.minY || j.maxY < B.minY);
    }
    function we(B, j) {
      const x = d((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "", "paint", j);
      if (!x) return null;
      const re = x.centerUv.u - x.halfW, ce = x.centerUv.u + x.halfW, be = x.centerUv.v - x.halfH, M = x.centerUv.v + x.halfH, ue = p.width, Pe = p.height;
      return {
        minX: Math.floor((re % 1 + 1) % 1 * ue),
        maxX: Math.ceil((ce % 1 + 1) % 1 * ue),
        minY: Math.floor(Fe(be, 0, 1) * Pe),
        maxY: Math.ceil(Fe(M, 0, 1) * Pe),
        wraps: ce - re >= 1 || re < 0 || ce > 1
      };
    }
    function Se(B) {
      const j = (B == null ? void 0 : B.bbox) || null;
      if (!j) return null;
      const x = (B == null ? void 0 : B.transform) || {}, re = p.width, ce = p.height, be = Number(j.u0 || 0) + Number(x.du || 0), M = Number(j.u1 || 0) + Number(x.du || 0), ue = Number(j.v0 || 0) + Number(x.dv || 0), Pe = Number(j.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((be % 1 + 1) % 1 * re),
        maxX: Math.ceil((M % 1 + 1) % 1 * re),
        minY: Math.floor(Fe(ue, 0, 1) * ce),
        maxY: Math.ceil(Fe(Pe, 0, 1) * ce),
        wraps: M - be >= 1 || be < 0 || M > 1
      };
    }
    function xe(B) {
      return B ? B.wraps ? te(L, { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY }) || te(L, { minX: B.minX, maxX: p.width - 1, minY: B.minY, maxY: B.maxY }) : te(L, B) : !0;
    }
    function Y(B) {
      if (!B) return { touched: !1, canvas: null };
      const j = c(p.width, p.height, { readback: !0 });
      j.ctx.drawImage(B, 0, 0);
      const x = j.ctx.getImageData(0, 0, p.width, p.height);
      j.ctx.save(), j.ctx.globalCompositeOperation = "destination-out", j.ctx.drawImage(m.canvas, 0, 0), j.ctx.restore();
      const re = j.ctx.getImageData(0, 0, p.width, p.height);
      for (let ce = 0; ce < p.width * p.height; ce += 1) {
        if (w[ce * 4 + 3] <= 8) continue;
        const M = x.data[ce * 4 + 3], ue = re.data[ce * 4 + 3];
        if (M > ue)
          return { touched: !0, canvas: j.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(B, j, x) {
      const re = Number(x == null ? void 0 : x.z_index), ce = l(B, j, x).map((be, M) => ({
        ...be,
        z_index: Number.isFinite(re) ? re + M * 1e-3 : oe + M * 1e-3
      }));
      return ce.length && (oe = Math.max(oe, ...ce.map((be) => Number((be == null ? void 0 : be.z_index) || 0))) + 1), ce;
    }
    for (const B of g()) {
      const j = String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim();
      if (!j) continue;
      const x = y(j, "paint");
      if (!xe(we(B, x))) {
        U.push(B), T.push(...x);
        continue;
      }
      const re = ((Q = ($ = t.paintEngine) == null ? void 0 : $.getGroupTarget) == null ? void 0 : Q.call($, j)) || null, ce = ((K = re == null ? void 0 : re.committedPaint) == null ? void 0 : K.canvas) || null;
      if (!ce) {
        U.push(B), T.push(...x);
        continue;
      }
      const be = Y(ce);
      if (!be.touched || !be.canvas) {
        U.push(B), T.push(...x);
        continue;
      }
      G = !0;
      const M = ye(be.canvas, "paint", C.get(j) || B || {});
      le.push(...M);
    }
    for (const B of b().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") === "paint")) {
      if (!xe(Se(B))) {
        le.push(B);
        continue;
      }
      const j = s(B, null);
      if (!j) {
        le.push(B);
        continue;
      }
      const x = Y(j);
      if (!x.touched || !x.canvas) {
        le.push(B);
        continue;
      }
      G = !0;
      const re = ye(x.canvas, "paint", B);
      le.push(...re);
    }
    return G ? (o.painting.paint.strokes = T, o.painting.groups = U.sort((B, j) => Number((B == null ? void 0 : B.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), o.painting.raster_objects = le.sort((B, j) => Number((B == null ? void 0 : B.z_index) || 0) - Number((j == null ? void 0 : j.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function se(v) {
    var T, U, le, G, oe;
    if ((((U = (T = v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : U.rawPoints) || ((G = (le = v.stroke) == null ? void 0 : le.geometry) == null ? void 0 : G.points) || []).length >= 1) {
      I(v);
      const N = h(v);
      N && (String(((oe = v.stroke) == null ? void 0 : oe.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(N) : t.paintEngine.commitActiveStroke(v.stroke, N)), v._hasCommittedSegments = !0;
    }
    const p = v.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, w = A(v.layerKind, p.toolKind, [], m);
    w.actionGroupId = p.actionGroupId, v.stroke = w;
    const C = h(v);
    C && t.paintEngine.beginStroke(w, C);
  }
  function Z(v) {
    var T, U;
    if ((((U = (T = v.stroke) == null ? void 0 : T.geometry) == null ? void 0 : U.points) || []).length >= 3) {
      I(v);
      const le = h(v);
      le && t.paintEngine.commitActiveStroke(v.stroke, le), v._hasCommittedSegments = !0;
    }
    const p = v.stroke, m = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, w = ge(v.layerKind, p.toolKind, [], m);
    w.actionGroupId = p.actionGroupId, v.stroke = w;
    const C = h(v);
    C && t.paintEngine.beginStroke(w, C);
  }
  function I(v) {
    var C, T, U, le;
    const V = ((C = v == null ? void 0 : v.stroke) == null ? void 0 : C.geometry) || null;
    if (!V) return !1;
    const p = String(((T = v == null ? void 0 : v.stroke) == null ? void 0 : T.toolKind) || "pen");
    if (v.layerKind === "paint" && p === "eraser")
      return V.geometryKind !== "lasso_fill" && (V.processedPoints = H(V.rawPoints || V.points || [], v.stroke.targetSpace, !0)), k(v);
    const m = v.layerKind === "paint" && p !== "eraser";
    if (V.geometryKind === "lasso_fill")
      return (Array.isArray(V.points) ? V.points : []).length < 3 ? !1 : (m && u((U = v.stroke) == null ? void 0 : U.actionGroupId), P(v.layerKind).push(v.stroke), !0);
    const w = V.rawPoints || V.points || [];
    return w.length < 1 ? !1 : (V.processedPoints = H(w, v.stroke.targetSpace, !0), m && u((le = v.stroke) == null ? void 0 : le.actionGroupId), P(v.layerKind).push(v.stroke), !0);
  }
  return {
    connect(v) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: h,
        getDisplayListObjects: S,
        getPaintingGroupList: g,
        getRasterObjectList: b,
        getStrokeGroupStrokes: y,
        processFreehandPoints: H,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: ee,
        screenPosToErpPoint: E,
        screenPosToFrameAsErpPoint: W,
        supportsFramePainting: D
      } = v);
    },
    isActiveLassoTool: _e,
    supportsErpPainting: he,
    getBrushPresetIdForTool: ke,
    isPaintCursorEnabled: me,
    isActivePaintCursorVisible: de,
    setPointerPos: J,
    syncPaintCursorElement: fe,
    showPaintSizePreview: R,
    hidePaintSizePreview: X,
    buildFreehandStrokeRecord: A,
    buildLassoFillStrokeRecord: ge,
    getPaintingLayerList: P,
    appendPaintPoint: O,
    appendLassoPoint: _,
    _segmentFrameStroke: se,
    _segmentFrameLassoFill: Z,
    commitPaintInteraction: I
  };
}
function CC(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie;
  function ke() {
    return he().reverse();
  }
  function me(X) {
    var ge;
    if (n && t.mode === "frame") {
      const P = s(), O = l(P);
      if (!P || !O || !(Number((X == null ? void 0 : X.x) || 0) >= Number(O.x || 0) && Number((X == null ? void 0 : X.x) || 0) <= Number(O.x || 0) + Number(O.w || 0) && Number((X == null ? void 0 : X.y) || 0) >= Number(O.y || 0) && Number((X == null ? void 0 : X.y) || 0) <= Number(O.y || 0) + Number(O.h || 0))) return null;
      const k = q(X, P, performance.now()), se = k ? o(k) : null;
      if (se)
        for (const I of a()) {
          if (!z(I)) continue;
          const v = ie(I, se);
          if (v && Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1) {
            const V = D(I);
            if (V != null && V.visible) return { item: I, geom: V };
          }
        }
      const Z = c(!1).slice().sort((I, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of Z) {
        if (I.type === "strokeGroup") {
          const p = f(W("paint", I.actionGroupId || I.id || ""));
          if (!p) continue;
          const m = D(p);
          if (!(m != null && m.visible)) continue;
          const w = Array.isArray(m.strokePaths) ? m.strokePaths : [];
          for (const C of w) {
            const T = Array.isArray(C == null ? void 0 : C.points) ? C.points : [];
            if (!T.length) continue;
            if (C.closed && T.length >= 3 && ei(X, T)) return { item: p, geom: m };
            const U = Math.max(8, Number((C == null ? void 0 : C.lineWidth) || 0) * 0.5 + 6);
            for (let le = 0; le < T.length - 1; le += 1)
              if (Xc(X, T[le], T[le + 1]) <= U * U) return { item: p, geom: m };
            if (T.length === 1 && Zo(X, T[0]) <= U * U) return { item: p, geom: m };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const p = d(E(((ge = I.item) == null ? void 0 : ge.id) || I.id || ""));
          if (!p) continue;
          const m = D(p);
          if (h(p, m, X, k)) return { item: p, geom: m };
          continue;
        }
        const v = I.item;
        if (!v || !z(v) || !se) continue;
        const V = ie(v, se);
        if (V && Number(V.x) >= 0 && Number(V.x) <= 1 && Number(V.y) >= 0 && Number(V.y) <= 1) {
          const p = D(v);
          if (p != null && p.visible) return { item: v, geom: p };
        }
      }
      if (!se) return null;
      for (const I of ke()) {
        const v = ie(I, se);
        if (!v || !(Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1)) continue;
        const V = D(I);
        if (V != null && V.visible) return { item: I, geom: V };
      }
      return null;
    }
    const A = [
      ...c(!1).slice().sort((P, O) => Number((O == null ? void 0 : O.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)).map((P) => {
        var O;
        return P.type === "strokeGroup" ? f(W("paint", P.actionGroupId || P.id || "")) : P.type === "rasterObject" ? d(E(((O = P.item) == null ? void 0 : O.id) || P.id || "")) : P.item;
      }).filter(Boolean),
      ...ke(),
      ...n ? a().filter((P) => H(P)) : []
    ];
    for (const P of A) {
      if (ee(P)) {
        const _ = D(P);
        if (!(_ != null && _.visible)) continue;
        const k = Array.isArray(_.strokePaths) ? _.strokePaths : [];
        for (const se of k) {
          const Z = Array.isArray(se == null ? void 0 : se.points) ? se.points : [];
          if (!Z.length) continue;
          if (se.closed && Z.length >= 3 && ei(X, Z)) return { item: P, geom: _ };
          const I = Math.max(8, Number((se == null ? void 0 : se.lineWidth) || 0) * 0.5 + 6);
          for (let v = 0; v < Z.length - 1; v += 1)
            if (Xc(X, Z[v], Z[v + 1]) <= I * I) return { item: P, geom: _ };
          if (Z.length === 1 && Zo(X, Z[0]) <= I * I) return { item: P, geom: _ };
        }
        continue;
      }
      if (y(P)) {
        const _ = D(P);
        if (!(_ != null && _.visible)) continue;
        if (h(P, _, X)) return { item: P, geom: _ };
        continue;
      }
      const O = D(P);
      if (O.visible && ei(X, O.corners))
        return { item: P, geom: O };
    }
    return null;
  }
  function de(X, A, ge = null) {
    if (!X || !X.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (z(ge)) return Ou(X, A);
    if (X.kind === "strokeGroup") {
      const P = X.corners.findIndex((_) => Zo(_, A) <= 121);
      if (P >= 0) {
        const _ = X.corners[P], k = _.x - X.center.x, se = _.y - X.center.y, Z = k * se >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: P, cursor: Z };
      }
      const O = Array.isArray(X.strokePaths) ? X.strokePaths : [];
      for (const _ of O) {
        const k = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
        if (_.closed && k.length >= 3 && ei(A, k)) return { kind: "move", cursor: "default" };
        const se = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
        for (let Z = 0; Z < k.length - 1; Z += 1)
          if (Xc(A, k[Z], k[Z + 1]) <= se * se) return { kind: "move", cursor: "default" };
      }
      return ei(A, X.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (X.kind === "rasterObject") {
      const P = X.corners.findIndex((O) => Zo(O, A) <= 121);
      if (P >= 0) {
        const O = X.corners[P], _ = O.x - X.center.x, k = O.y - X.center.y, se = _ * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: P, cursor: se };
      }
      return ei(A, X.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Dk(X, A, {
      edges: i === "cutout" || H(ge),
      resize: !(H(ge) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function J(X, A) {
    return {
      x0: Math.min(Number((X == null ? void 0 : X.x) || 0), Number((A == null ? void 0 : A.x) || 0)),
      y0: Math.min(Number((X == null ? void 0 : X.y) || 0), Number((A == null ? void 0 : A.y) || 0)),
      x1: Math.max(Number((X == null ? void 0 : X.x) || 0), Number((A == null ? void 0 : A.x) || 0)),
      y1: Math.max(Number((X == null ? void 0 : X.y) || 0), Number((A == null ? void 0 : A.y) || 0))
    };
  }
  function pe(X, A) {
    return !!X && !!A && Number(A.x) >= Number(X.x0) && Number(A.x) <= Number(X.x1) && Number(A.y) >= Number(X.y0) && Number(A.y) <= Number(X.y1);
  }
  function fe(X, A) {
    if (!X || !(A != null && A.visible) || !Array.isArray(A.corners)) return !1;
    if (A.corners.some((O) => pe(X, O))) return !0;
    const ge = (Number(X.x0) + Number(X.x1)) * 0.5, P = (Number(X.y0) + Number(X.y1)) * 0.5;
    return !!ei({ x: ge, y: P }, A.corners);
  }
  function R(X) {
    if (_e(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ve("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ve("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ve("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ve("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ve("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ve(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ve("grabbing") : ve("default");
      return;
    }
    if (S()) {
      ve("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ve(G2);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ve("default");
        return;
      }
      ve("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ve("default");
      return;
    }
    if (t.gizmoAxis) {
      ve("grab");
      return;
    }
    const A = u(), ge = A ? D(A) : null, P = A ? b(A) : !1, O = P ? { kind: "none", cursor: "default" } : de(ge, X, A);
    if (!P && O.kind !== "none") {
      ve(O.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && me(X)) {
      ve("default");
      return;
    }
    ve(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(X) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: h,
        isActivePaintCursorVisible: S,
        isErpCamera: g,
        isItemLocked: b,
        isRasterObjectItem: y,
        isShotItem: H,
        isStickerItem: z,
        isStrokeGroupItem: ee,
        makeRasterObjectSelectionId: E,
        makeStrokeGroupSelectionId: W,
        objectGeom: D,
        screenPosToFrameAsErpPoint: q,
        setCanvasCursor: ve,
        syncPaintCursorElement: _e,
        upstreamSkyStickers: he,
        worldDirToFrameLocalPoint: ie
      } = X);
    },
    hitObjectAt: me,
    handleHit: de,
    rectFromPoints: J,
    rectIntersectsGeom: fe,
    updateCursor: R
  };
}
function IC(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: s,
    state: a,
    tooltip: l,
    tooltipEl: c,
    type: d,
    uiState: u
  } = e;
  let f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke = !1;
  function me() {
    return ke;
  }
  function de() {
    if (!o) return;
    if (ke = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || ee() && D()) {
      const _ = pe();
      ke = _.visible, fe(_);
      return;
    }
    const A = y(), ge = H();
    if (!A && ge.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const P = z(), O = jA({
      type: d,
      selected: A,
      selectedItems: ge,
      selectedKind: P,
      geom: ge.length > 1 ? b(ge) : ie(A),
      allLocked: f(ge),
      anyLocked: ge.some((_) => q(_)),
      selectedLocked: q(A),
      activeAspect: ve(A) && E() ? xo : Vr(A),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: W,
      isStickerHidden: he,
      canRestoreSelectedToInitial: h,
      iconSet: We,
      cameraShot: t,
      coverage: a.coverage,
      upstream: J(ge)
    });
    fe(O);
  }
  function J(A) {
    const ge = A.filter(Ut);
    return ge.length ? { editable: ge.every(wl) } : null;
  }
  function pe() {
    const A = _e() && !n.interaction ? g().space : null;
    if (!(A != null && A.gizmo)) return { visible: !1 };
    const ge = S(), P = [...A.stickers, ...A.upstreamStickers].find((se) => se.id === n.worldSelectedId), _ = (P ? jd(P) : [A.gizmo.transform.position]).map((se) => Ns(ge, se, r.width, r.height)).filter(Boolean), k = T_(ge, A.gizmo.transform.position, A.gizmo.mode, r.width, r.height);
    return HA({ corners: _, gizmoBox: k, gizmoMode: A.gizmo.mode, camera: ee() });
  }
  function fe(A) {
    var k, se;
    if (!A.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ge = (Z, I) => GA(A.anchor, Z, I, r.width, r.height), P = Math.max(1, Number(((k = n.menuSize) == null ? void 0 : k.w) || 220)), O = Math.max(1, Number(((se = n.menuSize) == null ? void 0 : se.h) || 40)), _ = ge(P, O);
    if (!_) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: A.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const Z = o.getBoundingClientRect(), I = Math.round(Number((Z == null ? void 0 : Z.width) || 0)) || 220, v = Math.round(Number((Z == null ? void 0 : Z.height) || 0)) || 40;
      n.menuSize = { w: I, h: v, measured: !0 };
      const V = ge(I, v);
      V && (u.selectionMenu.left = V.left, u.selectionMenu.top = V.top);
    });
  }
  function R() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function X(A) {
    if (!c || !A || !A.isConnected) return;
    const ge = String(A.getAttribute("data-tip") || "").trim();
    if (!ge) return;
    u.tooltip.text = ge, u.tooltip.visible = !0;
    const P = A;
    i.requestFrame(() => {
      var T, U;
      if (l.target !== P || !c || !(P != null && P.isConnected)) return;
      const O = s.getBoundingClientRect(), _ = P.getBoundingClientRect(), k = 8, se = 12, Z = Math.round(Number(((T = c.getBoundingClientRect()) == null ? void 0 : T.width) || 0)) || 100, I = Math.round(Number(((U = c.getBoundingClientRect()) == null ? void 0 : U.height) || 0)) || 24, v = !!P.closest(".pano-floating-left"), V = !!P.closest(".pano-frame-rail"), p = !!P.closest(".pano-paint-footer") || !!P.closest(".pano-paint-color-float");
      let m = "", w = _.left - O.left + _.width * 0.5 - Z * 0.5, C = _.top - O.top - I - se;
      if (P.closest(".pano-floating-top") && (C = _.bottom - O.top + se), v)
        m = "tool-rail", w = _.right - O.left + 10, C = _.top - O.top + _.height * 0.5 - I * 0.5, w = Fe(w, k, Math.max(k, O.width - Z - k)), C = Fe(C, k, Math.max(k, O.height - I - k));
      else if (V)
        m = "frame-rail", w = _.left - O.left - Z - 10, C = _.top - O.top + _.height * 0.5 - I * 0.5, w = Fe(w, k, Math.max(k, O.width - Z - k)), C = Fe(C, k, Math.max(k, O.height - I - k));
      else if (p) {
        m = "footer";
        const le = P.closest(".pano-paint-footer"), G = le ? le.getBoundingClientRect() : _;
        w = G.left - O.left + G.width * 0.5 - Z * 0.5, C = G.bottom - O.top + 5, w = Fe(w, k, Math.max(k, O.width - Z - k)), C = Math.max(k, C);
      }
      w = Fe(w, k, Math.max(k, O.width - Z - k)), C = Math.max(k, C), u.tooltip.left = w, u.tooltip.top = C, u.tooltip.variant = m, u.tooltip.visible = !0;
    });
  }
  return {
    connect(A) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: h,
        currentSpaceCamera: S,
        editorViewInput: g,
        getMultiSelectionGeom: b,
        getSelected: y,
        getSelectedItems: H,
        getSelectedKind: z,
        isCameraSelected: ee,
        isErpCamera: E,
        isExternalSticker: W,
        isFreeSpaceView: D,
        isItemLocked: q,
        isShotItem: ve,
        isSpaceView: _e,
        isStickerHidden: he,
        objectGeom: ie
      } = A);
    },
    isWorldMenuShown: me,
    updateSelectionMenu: de,
    hideTooltip: R,
    showTooltipFor: X
  };
}
function EC(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: s,
    readOnly: a,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: h,
    type: S,
    viewController: g
  } = e;
  let b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v, V, p, m, w, C, T, U, le, G, oe, N, L, te, we, Se, xe, Y, ye, F, ne, $, Q, K, B, j, x, re, ce, be, M, ue, Pe, Ee, Le, $e, ze, Ce, He, ae, Ie, Ae, Oe, Ge, Ke, Ue, vt, gt, Tt, pt, en, qe, cn, Bt, gi, Yr, yi, an, vn, qr, mr, rr, Gs, Wi, Co, Io, Ks, Ws, Us, Ui, Pt, Bn, ir, Eo, zn, Bs, Ys, qs, Xr = null;
  function oc(De) {
    h.selection && (h.selection = null, Us());
    const Te = Oe(De);
    Xr = Te, pt(Te, !0), ke(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const Ne = $(), St = ne(), nt = Ne || St ? Wk(Eo(), De) : null;
    if (St && nt) {
      De.preventDefault(), nt === "look" ? vn(Te, De.pointerId) : an(nt, Te, De.pointerId);
      return;
    }
    if (nt === "look") {
      De.preventDefault();
      const Xe = Ge(De);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, De.pointerId, performance.now()), Pt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (nt) {
      De.preventDefault(), qr(nt, Te, De.pointerId);
      return;
    }
    if ((Ne || St) && De.button !== 0) {
      De.preventDefault();
      return;
    }
    if (De.button === 1) {
      if (De.preventDefault(), n.mode === "frame") {
        const Xe = se();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Te,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Te : Ge(De);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, De.pointerId, performance.now());
      }
      Pt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    if (De.button !== 0) return;
    if (n.mode === "frame" && (De.altKey || De.shiftKey) && !a) {
      const Xe = se(), Ye = p(Xe);
      if (!Xe || Xe.locked === !0 || !Ye) return;
      const Qe = v0({
        frame: Ye,
        point: Te,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: De.shiftKey,
        altKey: De.altKey,
        allowAlt: !0
      });
      if (!Qe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Qe.center,
        lastAngle: Qe.lastAngle,
        accumulatedRad: Qe.accumulatedRad,
        rollGesture: Qe,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Qe.source === "alt",
        source: Qe.source
      }, t.setPointerCapture(De.pointerId), De.preventDefault(), Ks(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      vn(Te, De.pointerId), De.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && To(De, Te);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (Gs() || Wi())) {
      if (!Ee()) return;
      rr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ye = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Wi() ? se() : null, Yt = { kind: "ERP_GLOBAL" }, Ct = Qe ? Ue(Te, Qe, performance.now()) : Ke(Te, performance.now());
      if (!Ct) {
        Pt(Te);
        return;
      }
      n.interaction = {
        kind: Ye === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: ao("live"),
        stroke: Ye === "lasso_fill" ? _e(Xe, Ye, [Ct], Yt) : ve(Xe, Ye, [Ct], Yt)
      }, ye();
      const Cr = Z(n.interaction);
      if (Cr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Cr), n.interaction.kind === "paint_stroke") {
          const Bi = n.paintEngine.ensureTarget(Cr), Yi = Number((Ct == null ? void 0 : Ct.u) ?? (Ct == null ? void 0 : Ct.x) ?? 0), qi = Number((Ct == null ? void 0 : Ct.v) ?? (Ct == null ? void 0 : Ct.y) ?? 0);
          n.paintEngine.appendStrokePoint(Bi, Yi, qi, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Cr);
      Pt(Te), t.setPointerCapture(De.pointerId), Ae();
      return;
    }
    const At = N(), Je = oe(), et = At.length > 1 ? w(At) : Je ? Pe(Je) : null;
    if (n.primaryTool === "cursor" && (De.ctrlKey || De.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Te, current: Te }, Pt(Te), t.setPointerCapture(De.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && he() && $() && yi(De, Te) || n.primaryTool === "cursor" && c && x() && Xs(De, Te)) return;
    if (At.length > 1 && (et != null && et.visible)) {
      if ((At.some((Ye) => Q(Ye)) ? { kind: "none" } : Se(et, Te)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: At.map((Ye) => Ye),
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: At.filter((Ye) => re(Ye)).map((Ye) => ({
            id: String(Ye.id || ""),
            yaw_deg: Number(ze(Ye).yaw_deg || 0),
            pitch_deg: Number(ze(Ye).pitch_deg || 0),
            center: (() => {
              var Yt, Ct;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: Te.x, y: Te.y };
            })()
          })),
          strokeSnapshots: At.filter((Ye) => ce(Ye)).map((Ye) => ({
            id: String(Ye.actionGroupId || Ye.id || ""),
            layerKind: String(Ye.layerKind || "paint"),
            snapshot: fn(te(Ye.actionGroupId, Ye.layerKind)),
            frameSnapshot: fn(ge(Ye.actionGroupId, Ye.layerKind)),
            center: (() => {
              var Yt, Ct;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: L(Ye.actionGroupId, Ye.layerKind)
          })),
          rasterSnapshots: At.filter((Ye) => K(Ye)).map((Ye) => ({
            id: Le(Ye.rasterObjectId || Ye.id || ""),
            snapshot: fn(U().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Le(Ye.rasterObjectId || Ye.id || ""))),
            center: (() => {
              var Yt, Ct;
              const Qe = Pe(Ye);
              return Qe != null && Qe.visible ? { x: Number(((Yt = Qe.center) == null ? void 0 : Yt.x) || 0), y: Number(((Ct = Qe.center) == null ? void 0 : Ct.y) || 0) } : { x: Te.x, y: Te.y };
            })(),
            centerUv: T(Ye)
          }))
        }, Pt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = Q(Je) ? { kind: "none" } : Se(et, Te, Je);
      if (Xe.kind === "scale") {
        n.interaction = ce(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: fn(te(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: fn(ge(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : K(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          snapshot: fn(U().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Le(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(ze(Je).hFOV_deg || 20),
          startVFOV: Number(ze(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Pt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Te.x - et.center.x, Te.y - et.center.y)),
          startHFOV: Number(ze(Je).hFOV_deg || 20),
          startVFOV: Number(ze(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Pt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = ce(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x),
          snapshot: fn(te(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: fn(ge(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(ze(Je).rot_deg || ze(Je).roll_deg || 0),
          startAng: Math.atan2(Te.y - et.center.y, Te.x - et.center.x)
        }, Pt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (ce(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = se();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : Ke(Te, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ye,
            snapshot: fn(te(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: fn(ge(Je.actionGroupId, Je.layerKind))
          }, Pt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        if (K(Je)) {
          const Ye = n.mode === "frame" ? (() => {
            const Qe = se();
            return Qe ? Ue(Te, Qe, performance.now()) : null;
          })() : Ke(Te, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ye,
            snapshot: fn(U().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === Le(Je.rasterObjectId || Je.id || "")))
          }, Pt(Te), t.setPointerCapture(De.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Te.x - et.center.x, y: Te.y - et.center.y }
        }, Pt(Te), t.setPointerCapture(De.pointerId);
        return;
      }
    }
    const st = Y(Te);
    if (st) {
      const Xe = n.selectedId !== st.item.id;
      if (Xe && n.selectedId && (Ce(), pe()), en(st.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && ir(), Bn(), Ae(), Q(st.item)) {
        Pt(Te);
        return;
      }
      n.interaction = {
        kind: ce(st.item) ? "move_stroke_group" : K(st.item) ? "move_raster_object" : "move",
        item: st.item,
        offset: { x: Te.x - st.geom.center.x, y: Te.y - st.geom.center.y },
        startUv: ce(st.item) || K(st.item) ? n.mode === "frame" ? (() => {
          const Ye = se();
          return Ye ? Ue(Te, Ye, performance.now()) : null;
        })() : Ke(Te, performance.now()) : null,
        snapshot: ce(st.item) ? fn(te(st.item.actionGroupId, st.item.layerKind)) : K(st.item) ? fn(U().find((Ye) => String((Ye == null ? void 0 : Ye.id) || "") === Le(st.item.rasterObjectId || st.item.id || ""))) : null,
        frameSnapshot: ce(st.item) ? fn(ge(st.item.actionGroupId, st.item.layerKind)) : null
      }, Pt(Te), t.setPointerCapture(De.pointerId);
      return;
    }
    const jn = !!n.selectedId;
    jn && (Ce(), pe()), me(), jn && ir(), Bn(), Ae(), n.mode === "pano" && To(De, Te);
  }
  function Jr(De, Te) {
    return i.gizmoPointer(De, fe(), Te.x, Te.y, t.width, t.height);
  }
  function Xs(De, Te) {
    var et, st;
    const Ne = (et = A().space) == null ? void 0 : et.gizmo;
    if (Ne && Jr("hover", Te) !== null && Jr("down", Te))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Ne.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Ne.transform,
        base: Wr(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(De.pointerId), Pt(Te), !0;
    const St = N(), nt = oe(), At = St.length > 1 ? St.some((jn) => Q(jn)) ? "none" : Se(w(St), Te).kind : nt && !Q(nt) ? Se(Pe(nt), Te, nt).kind : "none";
    if (At !== "none" && At !== "move") return !1;
    const Je = i.pickSticker(fe(), Te.x, Te.y, t.width, t.height);
    return ((st = mr(Je)) == null ? void 0 : st.placement) !== "world" ? !1 : (n.worldSelectedId !== Je && (n.selectedId && (Ce(), pe()), gt(Je), ir(), Bn(), Io(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(De.pointerId), !0);
  }
  function Oo(De) {
    var St;
    const Ne = !!(n.worldSelectedId || F()) && n.primaryTool === "cursor" && x() && !!((St = A().space) != null && St.gizmo) ? Jr("hover", De) : null;
    Ne !== n.gizmoAxis && (n.gizmoAxis = Ne, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function sc(De, Te) {
    const Ne = Jr("move", Te);
    if (Ne && De.camera) {
      for (const [nt, At] of Object.entries(yp(De.mode, De.base, De.start, Ne))) gn(u.camera, nt, n.frame, At);
      Co(), De.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const St = mr(De.id);
    !Ne || !St || (DS(St, n.frame, yp(De.mode, De.base, De.start, Ne)), De.changed = !0, be(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Fo(De) {
    n.interaction = null, n.gizmoAxis = null, De.kind === "world_gizmo" && (Jr("up", n.pointerPos), l.backgroundDirty = !0, De.changed && (Ce(), de(), ir())), Pt(n.pointerPos), Ae();
  }
  function To(De, Te) {
    if ($()) {
      const St = Eo().emptyLeft;
      St && qr(St, Te, De.pointerId);
      return;
    }
    const Ne = Ge(De);
    n.interaction = { kind: "view", last: Ne, lastTs: performance.now() }, g.startDrag(Ne.x, Ne.y, De.pointerId, performance.now()), Pt(Te), t.setPointerCapture(De.pointerId);
  }
  function Js(De, Te) {
    if (!f || !$e.playing || ($e.stop(), De.kind === "frame_pan")) return;
    if (De.kind === "frame_orbit") {
      const nt = P();
      nt && (De.pivot = k(nt, _(nt), Te));
      return;
    }
    if (De.kind === "world_gizmo") {
      const nt = mr(De.id);
      De.camera ? De.base = R() : nt && (De.base = Wr(nt, n.frame));
      return;
    }
    if (De.kind === "move_multi") {
      const nt = w(De.items);
      if (!(nt != null && nt.visible)) return;
      De.offset = { x: Te.x - nt.center.x, y: Te.y - nt.center.y }, De.startCenter = { x: nt.center.x, y: nt.center.y };
      for (const At of De.stickerSnapshots) {
        const Je = De.items.find((st) => String((st == null ? void 0 : st.id) || "") === At.id), et = Je ? Pe(Je) : null;
        et != null && et.visible && (At.yaw_deg = Number(ze(Je).yaw_deg || 0), At.pitch_deg = Number(ze(Je).pitch_deg || 0), At.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(De.kind)) return;
    const Ne = Pe(De.item);
    if (!(Ne != null && Ne.visible)) return;
    const St = ze(De.item);
    if (De.kind === "move") {
      De.offset = { x: Te.x - Ne.center.x, y: Te.y - Ne.center.y };
      return;
    }
    if (De.center = Ne.center, De.kind === "rotate") {
      De.startRot = Number(St.rot_deg || St.roll_deg || 0), De.startAng = Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x);
      return;
    }
    De.startDist = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)), De.startHFOV = Number(St.hFOV_deg || 20), De.startVFOV = Number(St.vFOV_deg || 20);
  }
  function Zs(De) {
    var St, nt, At, Je, et, st, jn, Xe, Ye, Qe, Yt, Ct, Cr, Bi, Yi, qi, ra, ia, oa, sa, aa, la;
    const Te = Oe(De);
    if (pt(Te, !0), !n.interaction) {
      Oo(Te), Pt(Te);
      return;
    }
    Pt(Te);
    const Ne = n.interaction;
    if (Xr && (Te.x !== Xr.x || Te.y !== Xr.y)) {
      const ct = Xr;
      Xr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Ne.kind) || Js(Ne, ct);
    }
    if (Ne.kind !== "world_select") {
      if (Ne.kind === "world_gizmo") {
        sc(Ne, Te);
        return;
      }
      if (Ne.kind === "paint_stroke") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        ct.forEach((yt) => {
          const _t = Oe(yt);
          if (n.mode === "frame") {
            const Sn = se(), tn = Sn ? p(Sn) : null;
            if (tn) {
              const In = (_t.x - tn.x) / Math.max(1, tn.w), Vt = (_t.y - tn.y) / Math.max(1, tn.h);
              if (!(In >= 0 && In <= 1 && Vt >= 0 && Vt <= 1)) {
                Ne._outOfFrame = !0;
                return;
              }
              Ne._outOfFrame && (Ne._outOfFrame = !1, y(Ne));
            }
          }
          z(Ne, _t, performance.now()) && (ht = !0);
        }), ht && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (Ne.kind === "paint_lasso_fill") {
        const ct = typeof De.getCoalescedEvents == "function" ? De.getCoalescedEvents() : [De];
        let ht = !1;
        if (ct.forEach((yt) => {
          const _t = Oe(yt);
          if (n.mode === "frame") {
            const Sn = se(), tn = Sn ? p(Sn) : null;
            if (tn) {
              const In = (_t.x - tn.x) / Math.max(1, tn.w), Vt = (_t.y - tn.y) / Math.max(1, tn.h);
              if (!(In >= 0 && In <= 1 && Vt >= 0 && Vt <= 1)) {
                Ne._outOfFrame = !0;
                return;
              }
              Ne._outOfFrame && (Ne._outOfFrame = !1, b(Ne));
            }
          }
          H(Ne, _t, performance.now()) && (ht = !0);
        }), ht) {
          const yt = Z(Ne);
          yt && n.paintEngine.updateActiveStroke(Ne.stroke, yt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (Ne.kind === "view") {
        const ct = performance.now(), ht = n.mode === "unwrap" ? Te : Ge(De);
        g.moveDrag(ht.x, ht.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Ne.lastTs = ct, Ne.last = ht, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (Ne.kind === "frame_pan" || Ne.kind === "frame_orbit") {
        X(Ne, Te);
        return;
      }
      if (Ne.kind === "space_pan" || Ne.kind === "space_orbit") {
        const ct = gi();
        cn(Ne.kind === "space_pan" ? yg(ct, Te.x - Ne.last.x, Te.y - Ne.last.y, t.width, t.height, Ne.depth) : gg(ct, Te.x - Ne.last.x, Te.y - Ne.last.y, t.height, Ne.pivot)), Ne.last = Te;
        return;
      }
      if (Ne.kind === "pan_frame") {
        const ct = V(Ne.shot);
        if (!ct || !Ne.shot) return;
        const ht = Te.x - Ne.last.x, yt = Te.y - Ne.last.y, _t = _0(Ne.shot, {
          dx: ht,
          dy: yt,
          focalPx: ct.focalPx,
          invertX: ((St = u.ui_settings) == null ? void 0 : St.invert_view_x) === !0,
          invertY: ((nt = u.ui_settings) == null ? void 0 : nt.invert_view_y) === !0
        });
        Ne.shot.yaw_deg = _t.yaw_deg, Ne.shot.pitch_deg = _t.pitch_deg, Ne.changed = Ne.changed || Math.abs(ht) > 0 || Math.abs(yt) > 0, Ne.last = Te, Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "roll_frame") {
        if (Ne.source === "knob") return;
        W(Ne, Te, De);
        return;
      }
      if (Ne.kind === "move") {
        const ct = Te.x - Ne.offset.x, ht = Te.y - Ne.offset.y;
        if (n.mode === "frame" && d) {
          const yt = se(), _t = p(yt);
          if (!yt || !_t) return;
          const Sn = {
            x: Fe((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Fe((ht - _t.y) / Math.max(1, _t.h), 0, 1)
          }, tn = O(yt, Sn);
          if (!tn) return;
          const In = Ma(tn);
          zn(Ne.item, { yaw_deg: In.yaw, pitch_deg: In.pitch });
        } else if (n.mode === "unwrap") {
          const yt = we(), _t = Fe((ct - yt.x) / Math.max(yt.w, 1), 0, 1), Sn = Fe((ht - yt.y) / Math.max(yt.h, 1), 0, 1);
          zn(Ne.item, { yaw_deg: Kt(_t * 360 - 180), pitch_deg: Fe(90 - Sn * 180, -90, 90) });
        } else {
          const yt = vt(ct, ht), _t = Ma(yt);
          zn(Ne.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        re(Ne.item) && be(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = se();
          return _t ? Ue(Te, _t, performance.now()) : null;
        })() : Ke(Te, performance.now());
        if (!ct || !Ne.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Ne.startUv.u || 0)), yt = Number(ct.v || 0) - Number(Ne.startUv.v || 0);
        D((At = Ne.item) == null ? void 0 : At.actionGroupId, ht, yt, Ne.snapshot, (Je = Ne.item) == null ? void 0 : Je.layerKind, Ne.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = se();
          return _t ? Ue(Te, _t, performance.now()) : null;
        })() : Ke(Te, performance.now());
        if (!ct || !Ne.startUv) return;
        const ht = Bt(Number(ct.u || 0), Number(Ne.startUv.u || 0)), yt = Number(ct.v || 0) - Number(Ne.startUv.v || 0);
        ee(((et = Ne.item) == null ? void 0 : et.rasterObjectId) || ((st = Ne.item) == null ? void 0 : st.id) || "", ht, yt, Ne.snapshot) && (M(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "scale_raster_object") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Math.max(1, Number(Ne.startDist || 1));
        E(((jn = Ne.item) == null ? void 0 : jn.rasterObjectId) || ((Xe = Ne.item) == null ? void 0 : Xe.id) || "", ht, Ne.snapshot) && (M(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "move_multi") {
        const ct = Te.x - Number(((Ye = Ne.offset) == null ? void 0 : Ye.x) || 0), ht = Te.y - Number(((Qe = Ne.offset) == null ? void 0 : Qe.y) || 0);
        let yt = !1, _t = !1, Sn = !1;
        const tn = ct - Number(((Yt = Ne.startCenter) == null ? void 0 : Yt.x) || ct), In = ht - Number(((Ct = Ne.startCenter) == null ? void 0 : Ct.y) || ht);
        for (const Vt of Array.isArray(Ne.stickerSnapshots) ? Ne.stickerSnapshots : []) {
          const ln = (S === "cutout" ? I() : m()).find((jt) => String((jt == null ? void 0 : jt.id) || "") === String(Vt.id || ""));
          if (!ln || !re(ln)) continue;
          const sn = {
            x: Number(((Cr = Vt.center) == null ? void 0 : Cr.x) || 0) + tn,
            y: Number(((Bi = Vt.center) == null ? void 0 : Bi.y) || 0) + In
          };
          if (n.mode === "frame" && d) {
            const jt = se(), Dt = p(jt);
            if (!jt || !Dt) continue;
            const or = {
              x: Fe((sn.x - Dt.x) / Math.max(1, Dt.w), 0, 1),
              y: Fe((sn.y - Dt.y) / Math.max(1, Dt.h), 0, 1)
            }, En = O(jt, or);
            if (!En) continue;
            const Do = Ma(En);
            zn(ln, { yaw_deg: Do.yaw, pitch_deg: Do.pitch });
          } else if (n.mode === "unwrap") {
            const jt = we(), Dt = Fe((sn.x - jt.x) / Math.max(jt.w, 1), 0, 1), or = Fe((sn.y - jt.y) / Math.max(jt.h, 1), 0, 1);
            zn(ln, { yaw_deg: Kt(Dt * 360 - 180), pitch_deg: Fe(90 - or * 180, -90, 90) });
          } else {
            const jt = vt(sn.x, sn.y), Dt = Ma(jt);
            zn(ln, { yaw_deg: Dt.yaw, pitch_deg: Dt.pitch });
          }
          yt = !0;
        }
        for (const Vt of Array.isArray(Ne.strokeSnapshots) ? Ne.strokeSnapshots : []) {
          const ln = {
            x: Number(((Yi = Vt.center) == null ? void 0 : Yi.x) || 0) + tn,
            y: Number(((qi = Vt.center) == null ? void 0 : qi.y) || 0) + In
          }, sn = n.mode === "frame" ? (() => {
            const Dt = se();
            return Dt ? Ue(ln, Dt, performance.now()) : null;
          })() : Ke(ln, performance.now()), jt = Vt.centerUv || null;
          if (sn && jt) {
            const Dt = Bt(Number(sn.u || 0), Number(jt.u || 0)), or = Number(sn.v || 0) - Number(jt.v || 0);
            D(Vt.id, Dt, or, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (yt = !0, _t = !0);
          }
        }
        for (const Vt of Array.isArray(Ne.rasterSnapshots) ? Ne.rasterSnapshots : []) {
          const ln = {
            x: Number(((ra = Vt.center) == null ? void 0 : ra.x) || 0) + tn,
            y: Number(((ia = Vt.center) == null ? void 0 : ia.y) || 0) + In
          }, sn = n.mode === "frame" ? (() => {
            const Dt = se();
            return Dt ? Ue(ln, Dt, performance.now()) : null;
          })() : Ke(ln, performance.now()), jt = Vt.centerUv || null;
          if (sn && jt) {
            const Dt = Bt(Number(sn.u || 0), Number(jt.u || 0)), or = Number(sn.v || 0) - Number(jt.v || 0);
            ee(Vt.id, Dt, or, Vt.snapshot) && (yt = !0, Sn = !0);
          }
        }
        yt && (_t ? ue({ rebuildPaintEngine: !1 }) : Sn ? M() : be(), Ae({ localOnly: !0 }));
        return;
      }
      if (Ne.kind === "scale_stroke_group") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Math.max(1, Number(Ne.startDist || 1));
        q((oa = Ne.item) == null ? void 0 : oa.actionGroupId, ht, 0, Ne.snapshot, (sa = Ne.item) == null ? void 0 : sa.layerKind, Ne.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x) - Number(Ne.startAng || 0)) * $i;
        De.shiftKey && (ct = Math.round(ct / 45) * 45), q((aa = Ne.item) == null ? void 0 : aa.actionGroupId, 1, ct, Ne.snapshot, (la = Ne.item) == null ? void 0 : la.layerKind, Ne.frameSnapshot) && (ue({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Ne.kind === "marquee_select") {
        Ne.current = Te, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (Ne.kind === "scale") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        zn(Ne.item, { hFOV_deg: Fe(Ne.startHFOV * ht, 1, 179), vFOV_deg: Fe(Ne.startVFOV * ht, 1, 179) }), B(Ne.item) || (Ne.item.aspect_id = Fi(Ne.item)), re(Ne.item) && be(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "scale_x") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        zn(Ne.item, { hFOV_deg: Fe(Ne.startHFOV * ht, 1, 179) }), B(Ne.item) || (Ne.item.aspect_id = Fi(Ne.item)), re(Ne.item) && be(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "scale_y") {
        const ht = Math.max(1, Math.hypot(Te.x - Ne.center.x, Te.y - Ne.center.y)) / Ne.startDist;
        zn(Ne.item, { vFOV_deg: Fe(Ne.startVFOV * ht, 1, 179) }), B(Ne.item) || (Ne.item.aspect_id = Fi(Ne.item)), re(Ne.item) && be(), Ae({ localOnly: !0 });
        return;
      }
      if (Ne.kind === "rotate") {
        let ht = (Math.atan2(Te.y - Ne.center.y, Te.x - Ne.center.x) - Ne.startAng) * $i, yt = Ne.startRot - ht;
        De.shiftKey && (yt = Math.round(yt / 45) * 45), zn(Ne.item, { [re(Ne.item) ? "rot_deg" : "roll_deg"]: yt }), re(Ne.item) && be(), Ae({ localOnly: !0 });
      }
    }
  }
  function Qs() {
    var Te, Ne, St, nt, At, Je, et;
    const De = n.interaction;
    if (!((De == null ? void 0 : De.kind) === "roll_frame" && De.source === "knob")) {
      if ((De == null ? void 0 : De.kind) === "space_pan" || (De == null ? void 0 : De.kind) === "space_orbit") {
        n.interaction = null, Pt(n.pointerPos), Bn();
        return;
      }
      if ((De == null ? void 0 : De.kind) === "world_select" || (De == null ? void 0 : De.kind) === "world_gizmo") {
        Fo(De);
        return;
      }
      if (((Te = n.interaction) == null ? void 0 : Te.kind) === "paint_stroke" || ((Ne = n.interaction) == null ? void 0 : Ne.kind) === "paint_lasso_fill") {
        ye();
        const st = J(n.interaction), jn = !!n.interaction._hasCommittedSegments;
        if (st || jn) {
          ue();
          const Xe = String(((St = n.interaction.stroke) == null ? void 0 : St.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = C().find((Yt) => String((Yt == null ? void 0 : Yt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Ye = Z(n.interaction);
          Ye && (st ? String(((nt = n.interaction.stroke) == null ? void 0 : nt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ye), Ie()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ye) : n.paintEngine.cancelActiveStroke(Ye)), Ce(), pe(), ir(), Bn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = Z(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((At = n.interaction) == null ? void 0 : At.kind) === "marquee_select") {
        const st = He(n.interaction.start, n.interaction.current), Xe = [
          ...S === "cutout" ? v().filter((Ye) => !j(Ye)) : [...m()],
          ...G(),
          ...le()
        ].filter((Ye) => ae(st, Pe(Ye)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), ir(), Bn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Ce(), de(), ir());
      else if (n.interaction && n.interaction.kind !== "view") {
        let st = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (st = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (st = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (st = !0), st && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ue({ rebuildPaintEngine: !0 }) : M()), Ce(), pe(), o.setDirtyCanvas(!0, !0), Ws(), Bn(), Ae();
      }
      n.interaction = null, (De == null ? void 0 : De.kind) === "roll_frame" && xe(), ye(), De && De.kind === "view" && Yr(() => g.endDrag(performance.now())), Ui(), Bn(), Pt(n.pointerPos), Ae();
    }
  }
  function ea() {
    var De, Te, Ne, St, nt;
    if (!ie()) {
      if (((De = n.interaction) == null ? void 0 : De.kind) === "world_select" || ((Te = n.interaction) == null ? void 0 : Te.kind) === "world_gizmo") {
        Fo(n.interaction);
        return;
      }
      if (((Ne = n.interaction) == null ? void 0 : Ne.kind) === "view" && Yr(() => g.endDrag(performance.now())), ((St = n.interaction) == null ? void 0 : St.kind) === "paint_stroke" || ((nt = n.interaction) == null ? void 0 : nt.kind) === "paint_lasso_fill") {
        ye();
        const At = Z(n.interaction);
        At && n.paintEngine.cancelActiveStroke(At);
      }
      n.interaction = null, ye(), Ui(), Pt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function ta(De) {
    const Te = Oe(De), Ne = pt(Te, !0);
    n.interaction || (Pt(Te), Ne && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function na(De) {
    if (n.mode === "frame") {
      const Te = Oe(De), Ne = il(De);
      Ne && rr(), Ne && ne() ? Bs(Te, -Ne) : Ne && Ys(Te, Ne) && Ae({ localOnly: !0 }), De.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ke(), $()) {
        const Te = il(De);
        Te && qs(Oe(De), -Te);
      } else g.applyWheelEvent(De) && Ae({ localOnly: !0, reason: ft.VIEW });
      De.preventDefault();
    }
  }
  return {
    connect(De) {
      ({
        _segmentFrameLassoFill: b,
        _segmentFrameStroke: y,
        appendLassoPoint: H,
        appendPaintPoint: z,
        applyRasterObjectOffset: ee,
        applyRasterObjectTransform: E,
        applySharedRollInteractionPoint: W,
        applyStrokeGroupOffset: D,
        applyStrokeGroupTransform: q,
        buildFreehandStrokeRecord: ve,
        buildLassoFillStrokeRecord: _e,
        cameraShoots: he,
        cancelFrameCameraGesture: ie,
        cancelViewTransition: ke,
        clearSelection: me,
        commitAndRefreshNode: de,
        commitPaintInteraction: J,
        commitState: pe,
        currentSpaceCamera: fe,
        cutoutCamera: R,
        dragFrame: X,
        editorViewInput: A,
        ensureGroupFrame: ge,
        frameContext: P,
        frameLocalPointToWorldDir: O,
        frameSpaceView: _,
        frameTarget: k,
        getActiveCutoutShot: se,
        getActivePaintTargetDescriptor: Z,
        getCutoutSelectableItems: I,
        getCutoutSelectableItemsForHit: v,
        getFrameViewLayout: V,
        getFrameViewRect: p,
        getList: m,
        getMultiSelectionGeom: w,
        getPaintingGroupList: C,
        getRasterObjectCenterUv: T,
        getRasterObjectList: U,
        getSelectableRasterObjectItems: le,
        getSelectableStrokeGroupItems: G,
        getSelected: oe,
        getSelectedItems: N,
        getStrokeGroupCenterUv: L,
        getStrokeGroupStrokes: te,
        getUnwrapRect: we,
        handleHit: Se,
        hideTooltip: xe,
        hitObjectAt: Y,
        invalidateLivePaintPreviewCaches: ye,
        isCameraSelected: F,
        isFreeFrameView: ne,
        isFreeSpaceView: $,
        isItemLocked: Q,
        isRasterObjectItem: K,
        isSceneSticker: B,
        isShotItem: j,
        isSpaceView: x,
        isStickerItem: re,
        isStrokeGroupItem: ce,
        markObjectVisualsDirty: be,
        markPaintCompositeVisualsDirty: M,
        markPaintStrokeVisualsDirty: ue,
        objectGeom: Pe,
        paintingShown: Ee,
        parseRasterObjectSelectionId: Le,
        playback: $e,
        poseOf: ze,
        pushHistory: Ce,
        rectFromPoints: He,
        rectIntersectsGeom: ae,
        refreshPaintEngineRevisionCache: Ie,
        requestDraw: Ae,
        screenPos: Oe,
        screenPosCss: Ge,
        screenPosToErpPoint: Ke,
        screenPosToFrameAsErpPoint: Ue,
        screenToWorldDir: vt,
        selectWorldSticker: gt,
        selectedWorldSticker: Tt,
        setPointerPos: pt,
        setSelectedItem: en,
        setSelectedItems: qe,
        setSpaceView: cn,
        shortestWrappedDelta: Bt,
        spaceViewState: gi,
        startAnimation: Yr,
        startCameraPress: yi,
        startFrameDrag: an,
        startPanFrame: vn,
        startSpaceDrag: qr,
        stickerById: mr,
        stopTimelinePlayback: rr,
        supportsErpPainting: Gs,
        supportsFramePainting: Wi,
        syncCutoutShot: Co,
        syncFloatingViewButtonState: Io,
        syncFrameRollKnob: Ks,
        syncSidePanelControls: Ws,
        syncTimeline: Us,
        syncViewToggleState: Ui,
        updateCursor: Pt,
        updateSelectionMenu: Bn,
        updateSidePanel: ir,
        viewControls: Eo,
        writePose: zn,
        zoomFrameAt: Bs,
        zoomFrameViewAt: Ys,
        zoomSpaceAt: qs
      } = De);
    },
    onCanvasPointerDown: oc,
    worldGizmoPointer: Jr,
    hoverWorldGizmo: Oo,
    onCanvasPointerMove: Zs,
    onCanvasPointerUp: Qs,
    onCanvasPointerCancel: ea,
    onCanvasMouseMove: ta,
    onCanvasWheel: na
  };
}
function OC(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: s,
    shotEditor: a,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, h, S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z;
  function I(C, T, U = !1) {
    var we;
    A();
    const le = a && n.mode === "frame" ? H() : null, G = le || E(), oe = le ? "shot" : D(), N = R();
    if (N && !se(N) || !N && (!G || oe === "stroke" || q(G))) return;
    const L = (((we = u.sidePanel) == null ? void 0 : we.params) || []).find((Se) => Se.key === C);
    if (!L || L.enabled === !1) return;
    let te = Number(T);
    if (Number.isNaN(te) && (te = 0), (N || t) && V2.has(C) ? te = C === "scale" ? Math.max(te, J0) : te : te = Fe(te, Number(L.min), Number(L.max)), C === "yaw_deg" && (te = Kt(te)), !N && t && C.startsWith("position_")) {
      P(), ES(l.camera, n.frame, C, te), k(), J(), U && me();
      return;
    }
    if (N) {
      TS(N, n.frame, C, te), he(), k(), J(), U && me();
      return;
    }
    C === "opacity" ? OS(G, n.frame, te / 100) : Z(G, { [C]: te }), a && !ve(G) && (C === "hFOV_deg" || C === "vFOV_deg") && (G.aspect_id = Fi(G)), k(), J(), U && me();
  }
  function v(C, T) {
    var G;
    const U = (G = u.sidePanel) == null ? void 0 : G.upstream;
    if (!U) return !1;
    const le = T ? U.lanes.find((oe) => oe.name === T && oe.action === C) : C === "revert-upstream" ? U.revertAll : null;
    return !!le && !le.disabled;
  }
  function V(C) {
    const T = R() || E();
    Ut(T) && (A(), fe(T, C) && (de(), he(), me(), b(), k(), _(), J()));
  }
  async function p(C) {
    var le, G, oe, N, L, te, we;
    const T = C.target.closest("[data-action]");
    if (!T) return;
    const U = String(T.getAttribute("data-action") || "");
    if (U === "coverage-set") {
      const Se = $n(T.getAttribute("data-coverage"));
      if (Se === $n(l.coverage)) return;
      l.coverage = Se, n.coverage = Se, r && (r.value = String(Se)), o ? s.backgroundDirty = !0 : (y(), ge({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), k(), _(), J();
      return;
    }
    if (U === "revert-handoff-lane" || U === "revert-upstream") {
      const Se = T.getAttribute("data-lane") || null;
      if (!v(U, Se)) return;
      U === "revert-handoff-lane" ? (A(), pe(Se)) : V(Se);
      return;
    }
    if (U === "toggle-selection-picker") {
      if ((G = (le = u.sidePanel) == null ? void 0 : le.selectionPicker) != null && G.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (U === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const Se = String(T.getAttribute("data-selection-id") || "");
      let xe = null;
      if (Se && (d === "stickers" ? xe = [...ee(), ...c ? l.shots : []].find((Y) => String((Y == null ? void 0 : Y.id) || "") === Se) || null : xe = ((oe = z().find((Y) => {
        var ye;
        return String(((ye = Y == null ? void 0 : Y.item) == null ? void 0 : ye.id) || "") === Se;
      })) == null ? void 0 : oe.item) || null), X(xe || null), xe && !_e(xe)) {
        const Y = ke(xe);
        O(Kt(Number(Y.yaw_deg || 0)), Fe(Number(Y.pitch_deg || 0), -89.9, 89.9));
      }
      k(), _(), J();
      return;
    }
    if (U === "copy-state-inline") {
      const Se = E(), xe = D();
      if (!Se || xe === "stroke" || W().length > 1) return;
      const Y = JSON.stringify(a && xe !== "image" ? h(Se) : S(ke(Se)));
      try {
        await navigator.clipboard.writeText(Y), (N = u.sidePanel) != null && N.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ye;
          (ye = u.sidePanel) != null && ye.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (U === "set-invert-x") {
      l.ui_settings.invert_view_x = T.getAttribute("data-value") === "1", ie(), k(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), J();
      return;
    }
    if (U === "set-invert-y") {
      l.ui_settings.invert_view_y = T.getAttribute("data-value") === "1", ie(), k(), (te = i.setDirtyCanvas) == null || te.call(i, !0, !0), J();
      return;
    }
    if (U === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, ie(), k(), (we = i.setDirtyCanvas) == null || we.call(i, !0, !0), J();
      return;
    }
    if (U === "close-preview") {
      g();
      return;
    }
    if (U === "cancel-close") {
      g();
      return;
    }
    U === "save-close" && (f(), g());
  }
  function m(C) {
    const T = C.target.closest("[data-action='param-input']");
    T && I(String(T.getAttribute("data-param-key") || ""), T.value, !1);
  }
  function w(C) {
    const T = C.target.closest("[data-action='param-input']");
    T && I(String(T.getAttribute("data-param-key") || ""), T.value, !0);
  }
  return {
    connect(C) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: h,
        buildCanonicalSelectedStickerState: S,
        closeEditor: g,
        commitAndRefreshNode: b,
        commitState: y,
        getActiveCutoutShot: H,
        getCutoutInspectorItems: z,
        getList: ee,
        getSelected: E,
        getSelectedItems: W,
        getSelectedKind: D,
        isItemLocked: q,
        isSceneSticker: ve,
        isStrokeGroupItem: _e,
        markObjectVisualsDirty: he,
        persistUiSettings: ie,
        poseOf: ke,
        pushHistory: me,
        releaseHiddenSelection: de,
        requestDraw: J,
        revertPortHandoffLane: pe,
        revertUpstreamSticker: fe,
        selectedWorldSticker: R,
        setSelectedItem: X,
        stopTimelinePlayback: A,
        syncCoverageChangeToNodePreviews: ge,
        syncCutoutShot: P,
        turnViewTo: O,
        updateSelectionMenu: _,
        updateSidePanel: k,
        worldStickerEditable: se,
        writePose: Z
      } = C);
    },
    onSidePanelClick: p,
    onSidePanelInput: m,
    onSidePanelChange: w
  };
}
function FC(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: s,
    readOnly: a,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: h
  } = e;
  let S, g, b, y, H, z, ee, E, W, D, q, ve, _e, he, ie, ke, me, de, J, pe, fe, R, X, A, ge, P, O, _, k, se, Z, I, v, V, p, m, w, C, T, U, le, G, oe, N, L, te, we, Se, xe, Y, ye;
  const F = () => {
    if (!t.customPaintSessionStart) return;
    if (El(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (tA(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ce = [
      Hn(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !El(He, t.customPaintColor))
    ];
    t.customPaintHistory = Ce.slice(0, 8), t.customPaintSessionStart = null;
  }, ne = (Ce = !1) => {
    !i || i.hidden || (Ce ? F() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, $ = () => {
    i && (i.hidden && (t.customPaintSessionStart = Hn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function Q() {
    T();
  }
  function K(Ce) {
    var vt, gt, Tt, pt, en;
    if ((gt = (vt = Ce.target) == null ? void 0 : vt.matches) != null && gt.call(vt, "[data-confirm-overlay]")) {
      const qe = (Tt = f.confirmDialog) == null ? void 0 : Tt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const He = Ce.target.closest("[data-space-mode]");
    if (He) {
      V(He.getAttribute("data-space-mode"));
      return;
    }
    const ae = Ce.target.closest("[data-gizmo-mode]");
    if (ae) {
      t.gizmoMode = ae.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, xe(), _({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Ie = Ce.target.closest("[data-view]");
    if (Ie) {
      if (Ie.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Ie.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), Y(), xe()), he(), oe(), _();
      return;
    }
    const Ae = Ce.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && W({ preservePanelValues: !0 }), U(), Y(), xe(), _();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? k(-1) : qe === "redo" ? k(1) : qe === "clear" ? ee() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? y() : qe === "add-or-look" ? S() : qe === "add-camera" && b();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, W({ preservePanelValues: !0 }), Dn[qe] && (t.activeBrushPresetId = qe), U(), Y(), xe(), _();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), W({ preservePanelValues: !0 }), U(), Y(), xe(), _();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        E(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = rc.find((cn) => cn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = Hn(qe.color), ne(!0), U();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ce.preventDefault(), Ce.stopPropagation(), i && !i.hidden ? ne(!0) : $(), U();
        return;
      }
    }
    const Oe = String(((pt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : pt.call(Ae, "data-action")) || "");
    if (Oe === "video-play-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      ye.resumeAfterScrub = !1, N();
      return;
    }
    if (Oe === "video-audio-toggle") {
      Ce.preventDefault(), Ce.stopPropagation(), we(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Oe === "video-loop-toggle") {
      if (Ce.preventDefault(), Ce.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, h.loop = qe, G({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: h.muted,
        volume: Number(h.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Oe === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Oe === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ke() : null;
        if (!qe || qe.locked === !0) return;
        v(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, le(), ge(), D(), oe(), Y(), xe(), _();
        return;
      }
      if (Oe === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ke() : null, cn = Ae.getAttribute("data-custom-width"), Bt = Ae.getAttribute("data-custom-height");
        if (!qe || !H(qe, cn, Bt)) return;
        f.frameRail.aspectOpen = !1, le(), ge(), D(), oe(), _();
        return;
      }
      if (Oe === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ke() : null;
        if (!qe || qe.locked === !0) return;
        Z(qe), f.frameRail.aspectOpen = !1, le(), ge(), D(), oe(), _();
        return;
      }
      if (Oe === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, xe(), _();
        return;
      }
      if (Oe === "aspect-set") {
        const qe = de();
        if (!qe) return;
        const cn = String(Ae.getAttribute("data-aspect") || "1:1");
        v(qe, cn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), ge(), D(), xe(), _();
        return;
      }
      if (Oe === "rotate-90") {
        const qe = de();
        if (!qe || fe()) return;
        Z(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, le(), ge(), D(), xe(), _();
        return;
      }
      if (Oe === "bring-front") {
        z();
        return;
      }
      if (Oe === "send-back") {
        I();
        return;
      }
      if (Oe === "duplicate") {
        _e();
        return;
      }
      if (Oe === "replace-image") {
        O();
        return;
      }
      if (Oe === "toggle-lock") {
        te();
        return;
      }
      if (Oe === "back-initial") {
        se();
        return;
      }
      if (Oe === "toggle-visible") {
        L();
        return;
      }
      if (Oe === "delete") {
        ve();
        return;
      }
    }
    if (Oe === "reset-view") {
      if (t.mode === "frame") return;
      Se(
        { position: w(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((en = q()) == null ? void 0 : en.radius) || pr },
        { mode: Ol(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Oe === "frame-view") {
      if (!R() || Ol(t.spaceMode, t.viewTransition) !== "6dof") return;
      ie();
      return;
    }
    if (Oe === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, uA(r == null ? void 0 : r.id, t.showGrid), Q(), _();
      return;
    }
    if (Oe === "toggle-fullscreen") {
      Ce.preventDefault(), Ce.stopPropagation(), Le();
      return;
    }
    if (Oe === "toggle-output-preview-size") {
      Ce.preventDefault(), Ce.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, C(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), ze(), _();
      return;
    }
    const Ge = Ce.target.closest("[data-paint-history-index]");
    if (!Ge) return;
    const Ke = Number(Ge.getAttribute("data-paint-history-index")), Ue = t.customPaintHistory[Ke];
    Ue && (t.customPaintColor = Hn(Ue), t.paintColor = Hn(Ue), U());
  }
  function B(Ce) {
    const He = Ce.target.closest("[data-video-seek]");
    if (He) {
      if (!(h instanceof HTMLVideoElement)) return;
      X.playing && (ye.resumeAfterScrub = !0), X.seek(Ni(Number(He.value || 0), A()));
      return;
    }
    const ae = Ce.target.closest("[data-video-volume]");
    if (ae) {
      if (!(h instanceof HTMLVideoElement)) return;
      const Oe = Fe(Number(ae.value || 0), 0, 1);
      h.volume = Oe, h.muted = Oe <= 1e-4, G({
        hasAudio: f.videoTransport.hasAudio,
        muted: h.muted,
        volume: Oe
      });
      return;
    }
    const Ie = Ce.target.closest("[data-paint-size-slider]");
    if (Ie) {
      if (Ie.disabled) return;
      const Oe = Math.max(1, Math.min(120, Math.round(Number(Ie.value)))), Ge = me(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ge] = Oe, U(), p();
      return;
    }
    const Ae = Ce.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Oe = { ...t.customPaintColor, a: Fe(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Hn(Oe), t.paintColor = Hn(Oe), U();
    }
  }
  function j(Ce) {
    var He;
    if (Ce.target.closest("[data-video-seek]")) {
      if (!(h instanceof HTMLVideoElement)) return;
      ye.resumeAfterScrub && X.play(), ye.resumeAfterScrub = !1;
      return;
    }
    if (Ce.target.closest("[data-video-volume]")) {
      typeof ((He = Ce.target) == null ? void 0 : He.blur) == "function" && Ce.target.blur();
      return;
    }
    Ce.target.closest("[data-paint-size-slider]") && J();
  }
  function x(Ce) {
    const He = Ce.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && m(He);
    }, 220));
  }
  function re(Ce) {
    var Ie, Ae;
    const He = Ce.target.closest("[data-tip]");
    !He || u.target !== He || (Ce.relatedTarget instanceof Element ? (Ae = (Ie = Ce.relatedTarget).closest) == null ? void 0 : Ae.call(Ie, "[data-tip]") : null) === He || pe();
  }
  function ce(Ce, He) {
    var Ke;
    if (!o) return;
    const ae = o.getBoundingClientRect(), Ie = Fe((Ce - ae.left) / Math.max(1, ae.width), 0, 1), Ae = 1 - Fe((He - ae.top) / Math.max(1, ae.height), 0, 1), Oe = Uu(t.customPaintColor), Ge = { ...Wu(Oe.h, Ie, Ae), a: Number(((Ke = t.customPaintColor) == null ? void 0 : Ke.a) ?? 1) };
    t.customPaintColor = Hn(Ge), t.paintColor = Hn(Ge), U();
  }
  function be(Ce) {
    var Oe;
    if (!s) return;
    const He = s.getBoundingClientRect(), ae = Fe((Ce - He.left) / Math.max(1, He.width), 0, 1), Ie = Uu(t.customPaintColor), Ae = { ...Wu(ae, Ie.s, Ie.v), a: Number(((Oe = t.customPaintColor) == null ? void 0 : Oe.a) ?? 1) };
    t.customPaintColor = Hn(Ae), t.paintColor = Hn(Ae), U();
  }
  function M(Ce, He) {
    const ae = Ce.pointerId;
    He(Ce);
    const Ie = (Oe) => {
      Oe.pointerId === ae && He(Oe);
    }, Ae = (Oe) => {
      Oe.pointerId === ae && (window.removeEventListener("pointermove", Ie), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Ie), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function ue() {
    const Ce = !!t.fullscreen;
    oo(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ce ? We.fullscreen_close : We.fullscreen,
      label: Ce ? "Exit Fullscreen" : "Fullscreen",
      tip: Ce ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe(Ce) {
    const He = !!Ce;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), Q(), ue(), P(), _());
  }
  function Ee() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var Ce, He;
    try {
      if (!document.fullscreenEnabled) {
        Pe(!t.fullscreen);
        return;
      }
      Ee() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await ((Ce = n.requestFullscreen) == null ? void 0 : Ce.call(n));
    } catch {
      Pe(!t.fullscreen);
    }
  }
  function $e() {
    document.fullscreenEnabled && Pe(Ee());
  }
  function ze() {
    const Ce = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ce ? We.fullscreen_close : We.fullscreen, f.outputPreviewToggle.label = Ce ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ce ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ce) {
      ({
        addCutoutFrame: S,
        addImageSticker: g,
        addStudioCamera: b,
        addWorldImageSticker: y,
        applyCutoutAspectCustom: H,
        bringSelectedToFront: z,
        clearAll: ee,
        clearPaintingLayer: E,
        clearSelection: W,
        commitAndRefreshNode: D,
        contentSphere: q,
        deleteSelected: ve,
        duplicateSelected: _e,
        forceCursorTool: he,
        frameSpaceContent: ie,
        getActiveCutoutShot: ke,
        getBrushPresetIdForTool: me,
        getSelected: de,
        hidePaintSizePreview: J,
        hideTooltip: pe,
        isErpCamera: fe,
        isFreeSpaceView: R,
        playback: X,
        playbackFps: A,
        pushHistory: ge,
        queueVideoTransportLayout: P,
        replaceSelectedImage: O,
        requestDraw: _,
        restoreHistory: k,
        restoreSelectedToInitialPose: se,
        rotateCutoutAspect90: Z,
        sendSelectedToBack: I,
        setShotAspect: v,
        setSpaceMode: V,
        showPaintSizePreview: p,
        showTooltipFor: m,
        spaceOrigin: w,
        startAnimation: C,
        syncFloatingViewButtonState: T,
        syncPaintUi: U,
        syncSidePanelControls: le,
        syncVideoTransportState: G,
        syncViewToggleState: oe,
        togglePlayback: N,
        toggleSelectedExternalStickerVisibility: L,
        toggleSelectedLock: te,
        toggleVideoMuted: we,
        transitionView: Se,
        updateSelectionMenu: xe,
        updateSidePanel: Y,
        videoState: ye
      } = Ce);
    },
    closePaintColorPop: ne,
    syncGridToggleButton: Q,
    onRootClick: K,
    onRootInput: B,
    onRootChange: j,
    onRootPointerOver: x,
    onRootPointerOut: re,
    updatePaintColorFromSv: ce,
    updatePaintColorFromHue: be,
    bindDrag: M,
    syncFullscreenButton: ue,
    setFullscreenState: Pe,
    onFullscreenChange: $e,
    syncOutputPreviewToggleButton: ze
  };
}
function TC(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, h, S, g, b, y, H, z, ee, E, W;
  const D = XA();
  function q(P) {
    var O, _, k, se, Z;
    if (P.key === "Escape") {
      if (l()) {
        P.preventDefault(), P.stopPropagation(), (O = P.stopImmediatePropagation) == null || O.call(P);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        P.preventDefault(), P.stopPropagation(), (_ = P.stopImmediatePropagation) == null || _.call(P), (k = document.exitFullscreen) == null || k.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        P.preventDefault(), P.stopPropagation(), (se = P.stopImmediatePropagation) == null || se.call(P), H(!1);
        return;
      }
      P.preventDefault(), P.stopPropagation(), (Z = P.stopImmediatePropagation) == null || Z.call(P), d();
    }
  }
  function ve(P) {
    const O = String(P.key || ""), _ = String(P.code || ""), k = Number(P.keyCode || 0);
    if (!(O === "Delete" || _ === "Delete" || k === 46) && !(O === "Backspace" || _ === "Backspace" || k === 8)) return;
    const I = P.target, v = ((I == null ? void 0 : I.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || I != null && I.isContentEditable) return;
    if (o.selection) {
      f(), P.preventDefault(), P.stopPropagation();
      return;
    }
    if (h()) {
      P.preventDefault(), P.stopPropagation();
      return;
    }
    b() && (u(), P.preventDefault(), P.stopPropagation());
  }
  function _e(P) {
    if (s.confirmDialog.visible) return !1;
    const O = P.composedPath()[0];
    if (O !== document.body && O !== document.documentElement && !r.contains(O)) return !1;
    const _ = ((O == null ? void 0 : O.tagName) || "").toUpperCase();
    return _ === "INPUT" ? !L2.has(String(O.type || "text").toLowerCase()) : _ !== "TEXTAREA" && _ !== "SELECT" && !(O != null && O.isContentEditable);
  }
  function he(P) {
    return P.code !== "Space" || P.ctrlKey || P.metaKey || P.altKey || n || !i || !s.timeline.visible ? !1 : _e(P);
  }
  function ie(P) {
    he(P) && (P.preventDefault(), P.stopPropagation(), P.repeat || E());
  }
  function ke(P) {
    he(P) && (P.preventDefault(), P.stopPropagation());
  }
  function me(P) {
    if (D.modifiers(P), !!py(P.code)) {
      if (!_e(P)) {
        J(P.code);
        return;
      }
      P.ctrlKey || P.metaKey || (P.preventDefault(), P.stopPropagation(), a() && (D.press(P.code, P.timeStamp), P.repeat || c(), z(() => {
      })));
    }
  }
  function de(P) {
    D.modifiers(P), P.key === "Meta" && pe(), J(P.code) && (P.preventDefault(), P.stopPropagation());
  }
  function J(P) {
    return D.release(P) ? (D.held || S(), !0) : !1;
  }
  function pe() {
    D.held && (D.releaseAll(), S());
  }
  function fe() {
    document.hidden && pe();
  }
  function R() {
    pe();
  }
  function X(P) {
    const O = !!(P.ctrlKey || P.metaKey), _ = !!P.altKey;
    t.marqueeModifier === O && t.altModifier === _ || (t.marqueeModifier = O, t.altModifier = _, ee(), W(t.pointerPos));
  }
  function A() {
    pe(), t.marqueeModifier = !1, t.altModifier = !1, ee(), W(t.pointerPos);
  }
  function ge(P) {
    if (n || !P.ctrlKey && !P.metaKey) return;
    const O = String(P.key || "").toLowerCase(), _ = String(P.code || "");
    if (O !== "z" && _ !== "KeyZ") return;
    const k = P.target, se = ((k == null ? void 0 : k.tagName) || "").toUpperCase();
    if (se === "INPUT" || se === "TEXTAREA" || k != null && k.isContentEditable) return;
    const { canUndo: Z, canRedo: I } = g();
    P.shiftKey && !I || !P.shiftKey && !Z || (y(P.shiftKey ? 1 : -1), P.preventDefault(), P.stopPropagation());
  }
  return {
    connect(P) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: h,
        endFrameKeyMove: S,
        getHistoryCapabilities: g,
        getSelected: b,
        restoreHistory: y,
        setFullscreenState: H,
        startAnimation: z,
        syncFrameRollKnob: ee,
        togglePlayback: E,
        updateCursor: W
      } = P);
    },
    moveKeys: D,
    onEscClose: q,
    onDeleteKey: ve,
    onSpaceKey: ie,
    onSpaceKeyUp: ke,
    onMoveKeyDown: me,
    onMoveKeyUp: de,
    onVisibilityChange: fe,
    onContextMenu: R,
    onModifierKeyChange: X,
    onWindowBlur: A,
    onUndoRedoKey: ge
  };
}
const sh = /* @__PURE__ */ new Map(), ci = Wg({
  app: dr,
  api: mn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Gu,
    markImageFailed: X0,
    markImageLoading: Y0,
    markImageReady: q0
  }
});
function ah(e) {
  if (!Ot(e, "background") || !Ot(e, "external-sticker")) return null;
  const t = ci.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? fi(t[0]) : null;
}
const DC = ci.assetSource, RC = ci.source, LC = ci.uiImage, VC = ci.invalidateUiImage, lh = ci.loadPreferredExactLinkedImage;
async function $C(e, t, r = {}) {
  var Do, pf, hf, ca, mf;
  await I0(e, { tolerateOperationFailure: !0 }), ci.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = rA(e, t);
  await nf();
  const a = Pa(e, "output_preset"), l = Pa(e, "coverage"), c = Pa(e, "bg_color"), d = Pa(e, R2), u = () => {
    const je = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return lh(
      e,
      je,
      () => nt(),
      `background:size:${je.join("|")}`
    );
  }, f = () => {
    const je = u();
    return sA(je);
  }, h = (je = 2048) => {
    const at = a == null ? void 0 : a.value;
    return oA(at) ? f() || Math.max(1, Math.round(Number(je || 2048))) : iA(at, je);
  }, S = e.__panoSceneStateV2 === !0, g = t === "stickers" && S, b = g && e.__panoStudio === !0, y = b, H = t === "cutout" || b, z = (S ? ig : rg)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: h(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: $n(l == null ? void 0 : l.value),
    sharedUiSettings: aA(),
    active: cg(e),
    fps: S ? ah(e) : null
  });
  Wn(e).liveState = z, Wn(e).liveStateVersion = 0;
  let ee = null;
  y ? (ee = z.camera && z.camera.visible !== !1 ? ag(z.camera, 0) : null, z.shots = ee ? [{ ...ee, position: [...ee.position] }] : [], z.active.selected_shot_id = null) : t === "cutout" && (z.shots = Array.isArray(z.shots) ? z.shots.slice(0, 1) : [], z.shots.length || (z.active.selected_shot_id = null));
  const E = t === "cutout" ? (() => {
    var sr;
    const je = Array.isArray(z.shots) ? z.shots : [], at = String(((sr = z == null ? void 0 : z.active) == null ? void 0 : sr.selected_shot_id) || "");
    return je.find((un) => String((un == null ? void 0 : un.id) || "") === at) || je[0] || null;
  })() : null, W = E ? my(E, !1) : { width: 220, height: 132 }, D = B0(b ? "studio" : t), q = /* @__PURE__ */ Mo({
    stageStatus: ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (D.viewButtons || []).map((je) => ({ ...je, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Do = D.spaceButtons) != null && Do.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: D.spaceButtons, frame: D.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (D.toolButtons || []).map((je) => ({
      ...je,
      disabled: !1,
      ...je.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(D.floatingButtons || []).map((je) => ({ ...je, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: We.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: We.aspect,
      rotateIcon: We.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: n,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: We.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview"
    },
    paintDock: {
      visible: !1,
      activePane: "",
      showColorRow: !0,
      colorEnabled: !0,
      activeSwatchId: "green",
      customColorActive: !1,
      customColorCss: _r({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: _r({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (je, at) => ({ index: at, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: !1,
      showSizeRow: !0,
      clearVisible: { paint: !0, mask: !0 },
      activeTools: { paint: "pen", mask: "pen" }
    },
    videoTransport: {
      visible: !1,
      ready: !1,
      playing: !1,
      loop: !0,
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640
    },
    sidePanel: {},
    timeline: { visible: !1 },
    easing: null,
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: W.width,
      height: W.height,
      label: E ? "Loading preview" : "Add Frame to preview"
    }
  }), ve = { frame: /* @__PURE__ */ Xa(0), playing: /* @__PURE__ */ Xa(!1) }, _e = document.createElement("div");
  document.body.appendChild(_e);
  const he = ({ intent: je, file: at } = {}) => {
    if (lr(at)) {
      if (je === "add") {
        Ee(at);
        return;
      }
      if (je === "add-world") {
        Le(at);
        return;
      }
      je === "replace" && St(at);
    }
  }, ie = ({ intent: je } = {}) => {
  }, ke = dd(T2, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: D,
    paintSwatches: rc.map((je) => ({
      id: je.id,
      label: je.label,
      cssColor: _r(je.color, 1)
    })),
    uiState: q,
    playhead: ve,
    onClose: () => {
      or();
    },
    onTimeline: (je) => sc(je),
    onImageFileSelected: he,
    onImageFileCancelled: ie
  });
  let me = null;
  try {
    me = ke.mount(_e);
  } catch (je) {
    try {
      ke.unmount();
    } catch {
    }
    throw _e.remove(), je;
  }
  const de = _e.querySelector(".pano-modal-overlay"), J = _e.querySelector(".pano-modal"), pe = J == null ? void 0 : J.querySelector("[data-stage-overlay]"), fe = J == null ? void 0 : J.querySelector("[data-stage-background]"), R = J == null ? void 0 : J.querySelector(".pano-stage-wrap"), X = ((pf = me == null ? void 0 : me.getPaintOverlayRefs) == null ? void 0 : pf.call(me)) || {}, A = X.cursor || null, ge = X.sizePreview || null, P = X.sizeSample || null;
  if (!de || !J || !pe || !fe || !R || !A || !ge || !P)
    throw ke.unmount(), _e.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const O = pe.getContext("2d"), _ = J.querySelector("[data-side]"), k = J.querySelector("[data-video-element]"), se = J.querySelector("[data-port-video-element]");
  vc(pe, "editor.stage-overlay"), vc(fe, "editor.stage-background"), np(k, "editor.video"), np(se, "editor.port-video");
  const Z = J.querySelector(".pano-floating-right"), I = J.querySelector(".pano-floating-top"), v = J.querySelector("[data-tool-rail]"), V = J.querySelector("[data-frame-rail]"), p = J.querySelector("[data-frame-roll-knob]"), m = J.querySelector("[data-paint-dock]"), w = J.querySelector(".pano-video-transport"), C = J.querySelector("[data-selection-menu]"), T = J.querySelector("[data-tooltip]"), U = J.querySelector("[data-camera-preview-host]"), le = J.querySelector("[data-camera-preview-canvas]");
  vc(le, "editor.camera-preview");
  const G = J.querySelector("[data-paint-color-row]"), oe = J.querySelector("[data-paint-color-pop]"), N = J.querySelector("[data-paint-color-sv]"), L = J.querySelector("[data-paint-color-sv-cursor]"), te = J.querySelector("[data-paint-hue-strip]"), we = J.querySelector("[data-paint-hue-handle]");
  R == null || R.removeAttribute("data-stage-ready"), R == null || R.setAttribute("data-stage-loading-kind", "boot"), pe.style.opacity = "1", fe.style.opacity = "0", i && (_ == null || _.remove(), J.classList.add("pano-modal-readonly")), J.addEventListener("pointerdown", () => j.wake(), !0), J.addEventListener("pointerdown", (je) => {
    var at;
    je.target.closest("[data-frame-roll-knob]") || en(), !je.target.closest(".pano-picker") && (je.target.closest("[data-paint-color-row]") || (J.querySelectorAll(".pano-picker-pop").forEach((sr) => {
      sr.hidden = !0;
    }), ae(!0), H && xe.cutoutAspectOpen && !je.target.closest(".pano-aspect-popover") && !je.target.closest("[data-action='aspect']") && (xe.cutoutAspectOpen = !1, xe.menuMode = "", xe.menuSize.measured = !1, _t(), nt()), (at = q.frameRail) != null && at.aspectOpen && !je.target.closest(".pano-frame-aspect-control") && (q.frameRail.aspectOpen = !1)));
  });
  const xe = {
    mode: "pano",
    selectedId: ay(t, z),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: pr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: $n(z.coverage),
    historyController: bA(z),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Dr,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: cA(e == null ? void 0 : e.id, !0),
    outputPreviewExpanded: !1,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    cutoutPanoDimAlpha: 0,
    cutoutPanoDimFrom: 0,
    cutoutPanoDimTarget: 0,
    cutoutPanoDimStartTs: 0,
    cutoutPanoDimCorners: null,
    cutoutPanoFrameVisual: null,
    cutoutPanoFrameAlpha: 0,
    cutoutPanoFrameFrom: 0,
    cutoutPanoFrameTarget: 0,
    cutoutPanoFrameStartTs: 0,
    frameRollOverlayVisual: null,
    frameRollOverlayAlpha: 0,
    frameRollOverlayFrom: 0,
    frameRollOverlayTarget: 0,
    frameRollOverlayStartTs: 0,
    frameWheelCommitTimer: 0,
    frameWheelChanged: !1,
    paintEngine: Ql(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    altModifier: !1,
    panelLastValues: null,
    // Panorama Studio: the id of the world Sticker selected in the space view or on its Timeline row
    // (#72). The canvas selection (selectedId) holds sky Stickers only; selecting one clears the other.
    worldSelectedId: null,
    // The mode of the selected world Sticker's gizmo: "translate", "rotate" or "scale".
    gizmoMode: "translate",
    // The gizmo handle under the pointer, or null.
    gizmoAxis: null,
    panelWasEnabled: !1,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. Panorama Studio shows and edits its state v2 here.
    frame: 0
  }, Y = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (xe.selectedId = null, z.active.selected_sticker_id = null), xe.selectedIds = xe.selectedId ? [xe.selectedId] : [];
  const ye = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Q = on({ label: "editor.still" });
  Q.__panoFrameIdx = 0;
  const K = on({ label: "editor.port-still" });
  K.__panoFrameIdx = 0;
  const B = {
    // The next frame draws the stage (tickFrame); it waits while the layout settles, keeping the reasons
    // asked for since the last draw.
    dirty: !0,
    reasons: /* @__PURE__ */ new Set(),
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    // The three.js canvas needs drawing again. A frame that only changes the 2D overlay leaves it as it
    // is, and the page keeps showing its last frame.
    backgroundDirty: !0,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, j = SM({
    requestAnimationFrame: (je) => requestAnimationFrame(je),
    cancelAnimationFrame: (je) => cancelAnimationFrame(je),
    draw: (je, at) => aa(je, at),
    animating: () => Ge()
  }), x = bM({
    requestFrame: (je) => j.requestFrame(je),
    cancelFrame: (je) => j.cancelFrame(je),
    tasks: {
      seek: () => na.seek(Y.scrubFrame),
      // A drag of the background's Clip range seeks its VIDEO to the time it puts at the playhead.
      background: () => na.seek(xe.frame),
      timeline: () => oa(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Ct(), nt({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => Sn()
    }
  }), re = j_({
    canvas: fe,
    onReady: () => {
      Yt(), nt({ reason: ft.CONTEXT });
    },
    onFailed: () => nt(),
    onUpdate: () => nt({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (je) => nt({ localOnly: !0, reason: mC(je) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      gt(), Yt(), nt({ reason: ft.CONTEXT });
    }
  }), ce = Number.parseFloat(
    getComputedStyle(J).getPropertyValue("--pano-float-radius")
  ) || 10, be = (je) => {
    const at = String(je || "default");
    pe.style.cursor !== at && (pe.style.cursor = at);
  }, M = {
    timer: 0,
    target: null
  }, ue = {
    active: !1,
    depth: 0
  }, Pe = pd({
    getView: () => ({ yaw: xe.viewYaw, pitch: xe.viewPitch, fov: xe.viewFov }),
    setView: (je) => {
      xe.viewYaw = Kt(Number(je.yaw || 0)), xe.viewPitch = Fe(Number(je.pitch || 0), -89.9, 89.9), xe.viewFov = Fe(Number(je.fov || xe.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const je = pe.getBoundingClientRect();
      return {
        w: Math.max(1, Number(je.width || pe.clientWidth || 0)),
        h: Math.max(1, Number(je.height || pe.clientHeight || 0))
      };
    },
    getInvert: () => {
      var je, at;
      return {
        x: (je = z.ui_settings) != null && je.invert_view_x ? -1 : 1,
        y: (at = z.ui_settings) != null && at.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => j.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ee,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: $e,
    applyVideoTimelineFps: ze,
    bindDrag: Ce,
    cancelFrameCameraGesture: He,
    closePaintColorPop: ae,
    commitState: Ie,
    disposeMediaSession: Ae,
    disposeUpstream: Oe,
    editorAnimating: Ge,
    endFrameKeyMove: Ke,
    finishKnobRoll: Ue,
    flushFrameWheelCommit: vt,
    forgetCameraPreviewFrame: gt,
    getUnwrapRect: Tt,
    hidePaintSizePreview: pt,
    hideTooltip: en,
    hoverWorldGizmo: qe,
    isFreeFrameView: cn,
    isFreeSpaceView: Bt,
    migrateLegacyEmbeddedAssets: gi,
    onCanvasDragOver: Yr,
    onCanvasDrop: yi,
    onCanvasMouseMove: an,
    onCanvasPointerCancel: vn,
    onCanvasPointerDown: qr,
    onCanvasPointerMove: mr,
    onCanvasPointerUp: rr,
    onCanvasWheel: Gs,
    onContextMenu: Wi,
    onDeleteKey: Co,
    onEscClose: Io,
    onFrameRollKnobDoubleClick: Ks,
    onFrameRollKnobPointerDown: Ws,
    onFrameRollKnobPointerMove: Us,
    onFullscreenChange: Ui,
    onModifierKeyChange: Pt,
    onMoveKeyDown: Bn,
    onMoveKeyUp: ir,
    onRootChange: Eo,
    onRootClick: zn,
    onRootInput: Bs,
    onRootPointerOut: Ys,
    onRootPointerOver: qs,
    onSidePanelChange: Xr,
    onSidePanelClick: oc,
    onSidePanelInput: Jr,
    onSpaceKey: Xs,
    onSpaceKeyUp: Oo,
    onTimelineAction: sc,
    onUndoRedoKey: Fo,
    onVisibilityChange: To,
    onWindowBlur: Js,
    onWindowDragEnter: Zs,
    onWindowDragLeave: Qs,
    onWindowDragOver: ea,
    onWindowDrop: ta,
    playback: na,
    pushHistory: De,
    reconcileExternalStickerFromInputs: Te,
    refreshModalVideoSource: Ne,
    replaceSelectedImageFromFile: St,
    requestDraw: nt,
    restoreView: At,
    sampleEditorDiagnostics: Je,
    saveView: et,
    setDropCue: st,
    setPointerPos: jn,
    stageResizeObserver: Xe,
    stickerCornerOrderSanity: Ye,
    stopRenderLoop: Qe,
    syncCanvasSize: Yt,
    syncCutoutShot: Ct,
    syncFullscreenButton: Cr,
    syncGridToggleButton: Bi,
    syncLookAtFrameButtonState: Yi,
    syncOutputPreviewToggleButton: qi,
    syncPaintUi: ra,
    syncPaintingLayerAsync: ia,
    syncTimeline: oa,
    syncUndoRedoButtons: sa,
    tick: aa,
    triggerBackgroundPersistenceOnClose: la,
    updateCursor: ct,
    updatePaintColorFromHue: ht,
    updatePaintColorFromSv: yt,
    updateSelectionMenu: _t,
    updateSidePanel: Sn,
    viewControls: tn,
    watchPixelRatio: In
  } = dA({
    api: mn,
    app: dr,
    backgroundCanvas: fe,
    bgWidget: c,
    cameraV2: y,
    canvas: pe,
    closeEditor: or,
    comfyMedia: ci,
    coverageWidget: l,
    ctx: O,
    cutoutPreviewCanvas: le,
    cutoutPreviewHost: U,
    dragCue: ue,
    dragFrames: x,
    editor: xe,
    editorView: re,
    floatingRightEl: Z,
    floatingTopEl: I,
    frameGateCssRadius: ce,
    frameRailEl: V,
    frameRollKnobEl: p,
    hideSidebar: i,
    imageCache: ye,
    initialShotBase: ee,
    loadPreferredExactLinkedImage: lh,
    mediaAssetSource: DC,
    mediaSource: RC,
    mediaUiImage: LC,
    node: e,
    overlay: de,
    paintColorPop: oe,
    paintColorRow: G,
    paintColorSv: N,
    paintColorSvCursor: L,
    paintCursorEl: A,
    paintDockEl: m,
    paintHueHandle: we,
    paintHueStrip: te,
    paintSizePreviewEl: ge,
    paintSizePreviewSampleEl: P,
    portStillCanvas: K,
    portVideoEl: se,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: $,
    rasterImageAlphaCache: ne,
    rasterImageCache: F,
    readOnly: n,
    resolveEditorOutputPresetWidth: h,
    root: J,
    runtime: B,
    sceneV2: g,
    scheduler: j,
    selectionMenu: C,
    setCanvasCursor: be,
    shotEditor: H,
    stageWrap: R,
    state: z,
    stateV2: S,
    stateWidget: d,
    stillCanvas: Q,
    studio: b,
    timeline: Y,
    timelinePlayhead: ve,
    toolRailEl: v,
    tooltip: M,
    tooltipEl: T,
    type: t,
    uiState: q,
    videoEl: k,
    videoTimelineFps: ah,
    videoTransportEl: w,
    viewController: Pe,
    vueModal: me
  }, [
    mA,
    vA,
    SA,
    _A,
    wA,
    kA,
    xA,
    MA,
    NA,
    fC,
    pC,
    hC,
    yC,
    bC,
    vC,
    SC,
    _C,
    wC,
    kC,
    xC,
    MC,
    NC,
    PC,
    AC,
    CC,
    IC,
    EC,
    OC,
    FC,
    TC
  ]);
  Ye(), Xe.observe(pe), In();
  const Vt = () => Ie();
  n || (As(e).flushBeforeQueue = Vt), p == null || p.addEventListener("pointerdown", Ws), p == null || p.addEventListener("pointermove", Us), p == null || p.addEventListener("pointerup", Ue), p == null || p.addEventListener("pointercancel", () => He()), p == null || p.addEventListener("lostpointercapture", () => {
    var je;
    ((je = xe.interaction) == null ? void 0 : je.source) === "knob" && He();
  }), p == null || p.addEventListener("dblclick", Ks), pe.onpointerdown = qr, pe.onpointermove = mr, pe.onpointerup = rr, pe.onpointercancel = vn, pe.onlostpointercapture = () => {
    He();
  }, pe.onauxclick = (je) => {
    je.button === 1 && je.preventDefault();
  }, pe.oncontextmenu = (je) => {
    (Bt() || cn()) && Uk(tn(), 2) && je.preventDefault();
  }, pe.onmousemove = an, pe.onpointerleave = () => {
    xe.interaction || qe({ x: -1e6, y: -1e6 });
  }, pe.onmouseleave = () => {
    jn(xe.pointerPos, !1), ct(xe.pointerPos), xe.mode === "frame" && xe.primaryTool === "cursor" && nt({ localOnly: !0, reason: ft.OVERLAY });
  }, pe.onwheel = Gs, pe.ondragover = Yr, pe.ondrop = yi, window.addEventListener("dragenter", Zs, !0), window.addEventListener("dragover", ea, !0), window.addEventListener("dragleave", Qs, !0), window.addEventListener("drop", ta, !0), _ == null || _.addEventListener("click", oc), _ == null || _.addEventListener("input", Jr), _ == null || _.addEventListener("change", Xr), Bi(), J.addEventListener("click", zn), J.addEventListener("input", Bs), J.addEventListener("change", Eo), J.addEventListener("pointerup", (je) => {
    var at;
    if (je.target.closest("[data-video-volume]")) {
      typeof ((at = je.target) == null ? void 0 : at.blur) == "function" && je.target.blur();
      return;
    }
    je.target.closest("[data-paint-size-slider]") && pt();
  }), J.addEventListener("pointercancel", (je) => {
    var at;
    if (je.target.closest("[data-video-volume]")) {
      typeof ((at = je.target) == null ? void 0 : at.blur) == "function" && je.target.blur();
      return;
    }
    je.target.closest("[data-paint-size-slider]") && pt();
  }), J.addEventListener("focusout", (je) => {
    je.target.closest("[data-paint-size-slider]") && pt();
  }), J.addEventListener("pointerover", qs), J.addEventListener("pointerout", Ys), J.addEventListener("pointerdown", (je) => {
    je.target.closest("[data-frame-roll-knob]") || en();
  }), N && (N.onpointerdown = (je) => {
    je.preventDefault(), je.stopPropagation(), Ce(je, (at) => yt(at.clientX, at.clientY));
  }), te && (te.onpointerdown = (je) => {
    je.preventDefault(), je.stopPropagation(), Ce(je, (at) => ht(at.clientX));
  }), J.addEventListener("click", (je) => {
    var bi;
    const at = je.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!at) return;
    const sr = at.getAttribute("data-action") === "confirm-accept", un = (bi = q.confirmDialog) == null ? void 0 : bi.resolve;
    q.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, un == null || un(sr);
  }), document.addEventListener("fullscreenchange", Ui), Cr(), qi();
  const ln = e.onConnectionsChange;
  let sn = null, jt = () => {
  };
  !n && t === "stickers" && (jt = A0(e, (je = "sync") => {
    je === "executed" && (VC(ye, Ri), Ne(), g && ze()), Te(je);
  }, { editor: !0 }), sn = function(...at) {
    typeof ln == "function" && ln.apply(this, at), Ne(), oi(this, "connections");
  }, e.onConnectionsChange = sn), n || sh.set(String(e.id ?? "0"), () => ia());
  let Dt = null;
  async function or() {
    return Dt || (Dt = (async () => {
      var at, sr, un, bi, Zr, ua, gf, da, yf;
      const je = tw(e);
      return je && (je.open = !1), sh.delete(String(e.id ?? "0")), vt(), Ke(), n || Ie(), et(), document.fullscreenElement === de && ((at = document.exitFullscreen) == null || at.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ui), Wn(e).liveState = null, (je == null ? void 0 : je.flushBeforeQueue) === Vt && (je.flushBeforeQueue = null), (bi = (un = (sr = Au(e)) == null ? void 0 : sr.dom) == null ? void 0 : un.requestDraw) == null || bi.call(un), (ua = (Zr = e.graph) == null ? void 0 : Zr.setDirtyCanvas) == null || ua.call(Zr, !0, !0), (yf = (da = (gf = dr) == null ? void 0 : gf.canvas) == null ? void 0 : da.setDirty) == null || yf.call(da, !0, !0), en(), x.cancel(), Qe(), Ae(), Oe(), re.dispose(), st(!1), window.removeEventListener("keydown", Io, !0), window.removeEventListener("keydown", Co, !0), window.removeEventListener("keydown", Xs, !0), window.removeEventListener("keyup", Oo, !0), window.removeEventListener("keydown", Bn, !0), window.removeEventListener("keyup", ir, !0), document.removeEventListener("visibilitychange", To), window.removeEventListener("contextmenu", Wi, !0), window.removeEventListener("keydown", Pt, !0), window.removeEventListener("keyup", Pt, !0), window.removeEventListener("blur", Js), window.removeEventListener("keydown", Fo, !0), window.removeEventListener("dragenter", Zs, !0), window.removeEventListener("dragover", ea, !0), window.removeEventListener("dragleave", Qs, !0), window.removeEventListener("drop", ta, !0), !n && t === "stickers" && (e.onConnectionsChange === sn && (e.onConnectionsChange = ln), jt()), ke.unmount(), _e.remove(), la(), Dt = null, !0;
    })().catch((je) => (console.error("[PanoramaCutoutSync] closeEditor failed", je), Dt = null, !1)), Dt);
  }
  window.addEventListener("keydown", Io, !0), window.addEventListener("keydown", Co, !0), window.addEventListener("keydown", Xs, !0), window.addEventListener("keyup", Oo, !0), window.addEventListener("keydown", Bn, !0), window.addEventListener("keyup", ir, !0), document.addEventListener("visibilitychange", To), window.addEventListener("contextmenu", Wi, !0), window.addEventListener("keydown", Pt, !0), window.addEventListener("keyup", Pt, !0), window.addEventListener("blur", Js), window.addEventListener("keydown", Fo, !0), de.addEventListener("pointerdown", (je) => {
    je.target === de && or();
  });
  function En(je, at, { rollbackState: sr = !1 } = {}) {
    let un = "";
    try {
      sr && (un = JSON.stringify(z)), at();
    } catch (bi) {
      if (un)
        try {
          const Zr = JSON.parse(un);
          Object.keys(z).forEach((ua) => delete z[ua]), Object.assign(z, Zr), n || Ie();
        } catch (Zr) {
          console.error(`[PanoramaStickers] editor boot step "${je}" rollback failed`, Zr);
        }
      q.stageWarningDetail = `boot:${je}`, console.error(`[PanoramaStickers] editor boot step "${je}" failed`, bi);
    }
  }
  En("view", At), En("cutout-focus", $e), !n && t === "stickers" && En("external-sticker-sync", () => Te("open"), { rollbackState: !0 }), gi().catch((je) => {
    q.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', je);
  }), En("history", () => De({ initial: !0 })), En("undo-redo", sa), En("paint-ui", ra), En("side-panel", Sn), En("look-at-frame", Yi), En("video-source", Ne), En("canvas-size", Yt), En("cursor", () => ct(xe.pointerPos)), As(e).open = !0, (mf = (ca = (hf = Au(e)) == null ? void 0 : hf.dom) == null ? void 0 : ca.requestDraw) == null || mf.call(ca), nt(), Je();
}
dr.registerExtension(nx({
  app: dr,
  openEditor: $C,
  attachStickers: gM,
  attachCutout: yM,
  attachPreview: mM,
  restoreOutput: nM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: z2
}));
