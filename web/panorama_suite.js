import * as Wa from "../../scripts/app.js";
import { app as or } from "../../scripts/app.js";
import { api as cn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, to = [], xr = () => {
}, Yh = () => !1, Ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Fs = (e) => e.startsWith("onUpdate:"), dn = Object.assign, Xc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lb = Object.prototype.hasOwnProperty, lt = (e, t) => Lb.call(e, t), Ke = Array.isArray, no = (e) => ia(e) === "[object Map]", Xh = (e) => ia(e) === "[object Set]", ld = (e) => ia(e) === "[object Date]", We = (e) => typeof e == "function", Ot = (e) => typeof e == "string", wr = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", qh = (e) => (ht(e) || We(e)) && We(e.then) && We(e.catch), Jh = Object.prototype.toString, ia = (e) => Jh.call(e), Rb = (e) => ia(e).slice(8, -1), Zh = (e) => ia(e) === "[object Object]", qc = (e) => Ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ Yc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vb = /-\w/g, _n = Ds(
  (e) => e.replace(Vb, (t) => t.slice(1).toUpperCase())
), $b = /\B([A-Z])/g, Mi = Ds(
  (e) => e.replace($b, "-$1").toLowerCase()
), Ls = Ds((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dl = Ds(
  (e) => e ? `on${Ls(e)}` : ""
), br = (e, t) => !Object.is(e, t), Ua = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qh = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Jc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let cd;
const Rs = () => cd || (cd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (Ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Ot(r) ? Gb(r) : Vt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Ot(e) || ht(e))
    return e;
}
const zb = /;(?![^(]*\))/g, jb = /:([^]+)/, Hb = /\/\*[^]*?\*\//g;
function Gb(e) {
  const t = {};
  return e.replace(Hb, "").split(zb).forEach((n) => {
    if (n) {
      const r = n.split(jb);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (Ot(e))
    t = e;
  else if (Ke(e))
    for (let n = 0; n < e.length; n++) {
      const r = ut(e[n]);
      r && (t += r + " ");
    }
  else if (ht(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kb = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bb = /* @__PURE__ */ Yc(Kb);
function ep(e) {
  return !!e || e === "";
}
function Wb(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Zc(e[r], t[r]);
  return n;
}
function Zc(e, t) {
  if (e === t) return !0;
  let n = ld(e), r = ld(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = wr(e), r = wr(t), n || r)
    return e === t;
  if (n = Ke(e), r = Ke(t), n || r)
    return n && r ? Wb(e, t) : !1;
  if (n = ht(e), r = ht(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (f && !d || !f && d || !Zc(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const tp = (e) => !!(e && e.__v_isRef === !0), ct = (e) => Ot(e) ? e : e == null ? "" : Ke(e) || ht(e) && (e.toString === Jh || !We(e.toString)) ? tp(e) ? ct(e.value) : JSON.stringify(e, np, 2) : String(e), np = (e, t) => tp(t) ? np(e, t.value) : no(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Ll(r, a) + " =>"] = o, n),
    {}
  )
} : Xh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ll(n))
} : wr(t) ? Ll(t) : ht(t) && !Ke(t) && !Zh(t) ? String(t) : t, Ll = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let An;
class Ub {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = An, !t && An && (this.index = (An.scopes || (An.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = An;
      try {
        return An = this, t();
      } finally {
        An = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = An, An = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (An = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Yb() {
  return An;
}
let xt;
const Rl = /* @__PURE__ */ new WeakSet();
class rp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, An && An.active && An.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rl.has(this) && (Rl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || op(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ud(this), ap(this);
    const t = xt, n = ar;
    xt = this, ar = !0;
    try {
      return this.fn();
    } finally {
      sp(this), xt = t, ar = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        tu(t);
      this.deps = this.depsTail = void 0, ud(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hc(this) && this.run();
  }
  get dirty() {
    return hc(this);
  }
}
let ip = 0, Go, Ko;
function op(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = Go, Go = e;
}
function Qc() {
  ip++;
}
function eu() {
  if (--ip > 0)
    return;
  if (Ko) {
    let t = Ko;
    for (Ko = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Go; ) {
    let t = Go;
    for (Go = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ap(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function sp(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), tu(r), Xb(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xo) || (e.globalVersion = Xo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = xt, r = ar;
  xt = e, ar = !0;
  try {
    ap(e);
    const o = e.fn(e._value);
    (t.version === 0 || br(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    xt = n, ar = r, sp(e), e.flags &= -3;
  }
}
function tu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      tu(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xb(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let ar = !0;
const cp = [];
function Gr() {
  cp.push(ar), ar = !1;
}
function Kr() {
  const e = cp.pop();
  ar = e === void 0 ? !0 : e;
}
function ud(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xt;
    xt = void 0;
    try {
      t();
    } finally {
      xt = n;
    }
  }
}
let Xo = 0;
class qb {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xt || !ar || xt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xt)
      n = this.activeLink = new qb(xt, this), xt.deps ? (n.prevDep = xt.depsTail, xt.depsTail.nextDep = n, xt.depsTail = n) : xt.deps = xt.depsTail = n, up(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = xt.depsTail, n.nextDep = void 0, xt.depsTail.nextDep = n, xt.depsTail = n, xt.deps === n && (xt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xo++, this.notify(t);
  }
  notify(t) {
    Qc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      eu();
    }
  }
}
function up(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        up(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const pc = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ Symbol(
  ""
), mc = /* @__PURE__ */ Symbol(
  ""
), qo = /* @__PURE__ */ Symbol(
  ""
);
function sn(e, t, n) {
  if (ar && xt) {
    let r = pc.get(e);
    r || pc.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new nu()), o.map = r, o.key = n), o.track();
  }
}
function zr(e, t, n, r, o, a) {
  const c = pc.get(e);
  if (!c) {
    Xo++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (Qc(), t === "clear")
    c.forEach(f);
  else {
    const d = Ke(e), y = d && qc(n);
    if (d && n === "length") {
      const b = Number(r);
      c.forEach((w, x) => {
        (x === "length" || x === qo || !wr(x) && x >= b) && f(w);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), y && f(c.get(qo)), t) {
        case "add":
          d ? y && f(c.get("length")) : (f(c.get(bi)), no(e) && f(c.get(mc)));
          break;
        case "delete":
          d || (f(c.get(bi)), no(e) && f(c.get(mc)));
          break;
        case "set":
          no(e) && f(c.get(bi));
          break;
      }
  }
  eu();
}
function Gi(e) {
  const t = /* @__PURE__ */ st(e);
  return t === e ? t : (sn(t, "iterate", qo), /* @__PURE__ */ Wn(e) ? t : t.map(sr));
}
function Vs(e) {
  return sn(e = /* @__PURE__ */ st(e), "iterate", qo), e;
}
function mr(e, t) {
  return /* @__PURE__ */ Br(e) ? fo(/* @__PURE__ */ yi(e) ? sr(t) : t) : sr(t);
}
const Jb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Vl(this, Symbol.iterator, (e) => mr(this, e));
  },
  concat(...e) {
    return Gi(this).concat(
      ...e.map((t) => Ke(t) ? Gi(t) : t)
    );
  },
  entries() {
    return Vl(this, "entries", (e) => (e[1] = mr(this, e[1]), e));
  },
  every(e, t) {
    return Tr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Tr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => mr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Tr(
      this,
      "find",
      e,
      t,
      (n) => mr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Tr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Tr(
      this,
      "findLast",
      e,
      t,
      (n) => mr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Tr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Tr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $l(this, "includes", e);
  },
  indexOf(...e) {
    return $l(this, "indexOf", e);
  },
  join(e) {
    return Gi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $l(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Tr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Io(this, "pop");
  },
  push(...e) {
    return Io(this, "push", e);
  },
  reduce(e, ...t) {
    return fd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return fd(this, "reduceRight", e, t);
  },
  shift() {
    return Io(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Tr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Io(this, "splice", e);
  },
  toReversed() {
    return Gi(this).toReversed();
  },
  toSorted(e) {
    return Gi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Io(this, "unshift", e);
  },
  values() {
    return Vl(this, "values", (e) => mr(this, e));
  }
};
function Vl(e, t, n) {
  const r = Vs(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ Wn(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Zb = Array.prototype;
function Tr(e, t, n, r, o, a) {
  const c = Vs(e), f = c !== e && !/* @__PURE__ */ Wn(e), d = c[t];
  if (d !== Zb[t]) {
    const w = d.apply(e, a);
    return f ? sr(w) : w;
  }
  let y = n;
  c !== e && (f ? y = function(w, x) {
    return n.call(this, mr(e, w), x, e);
  } : n.length > 2 && (y = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const b = d.call(c, y, r);
  return f && o ? o(b) : b;
}
function fd(e, t, n, r) {
  const o = Vs(e), a = o !== e && !/* @__PURE__ */ Wn(e);
  let c = n, f = !1;
  o !== e && (a ? (f = r.length === 0, c = function(y, b, w) {
    return f && (f = !1, y = mr(e, y)), n.call(this, y, mr(e, b), w, e);
  }) : n.length > 3 && (c = function(y, b, w) {
    return n.call(this, y, b, w, e);
  }));
  const d = o[t](c, ...r);
  return f ? mr(e, d) : d;
}
function $l(e, t, n) {
  const r = /* @__PURE__ */ st(e);
  sn(r, "iterate", qo);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ou(n[0]) ? (n[0] = /* @__PURE__ */ st(n[0]), r[t](...n)) : o;
}
function Io(e, t, n = []) {
  Gr(), Qc();
  const r = (/* @__PURE__ */ st(e))[t].apply(e, n);
  return eu(), Kr(), r;
}
const Qb = /* @__PURE__ */ Yc("__proto__,__v_isRef,__isVue"), fp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wr)
);
function ey(e) {
  wr(e) || (e = String(e));
  const t = /* @__PURE__ */ st(this);
  return sn(t, "has", e), t.hasOwnProperty(e);
}
class dp {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? uy : gp : a ? mp : pp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ke(t);
    if (!o) {
      let d;
      if (c && (d = Jb[n]))
        return d;
      if (n === "hasOwnProperty")
        return ey;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ un(t) ? t : r
    );
    if ((wr(n) ? fp.has(n) : Qb(n)) || (o || sn(t, "get", n), a))
      return f;
    if (/* @__PURE__ */ un(f)) {
      const d = c && qc(n) ? f : f.value;
      return o && ht(d) ? /* @__PURE__ */ bc(d) : d;
    }
    return ht(f) ? o ? /* @__PURE__ */ bc(f) : /* @__PURE__ */ mo(f) : f;
  }
}
class hp extends dp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Ke(t) && qc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Br(a);
      if (!/* @__PURE__ */ Wn(r) && !/* @__PURE__ */ Br(r) && (a = /* @__PURE__ */ st(a), r = /* @__PURE__ */ st(r)), !c && /* @__PURE__ */ un(a) && !/* @__PURE__ */ un(r))
        return y || (a.value = r), !0;
    }
    const f = c ? Number(n) < t.length : lt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ un(t) ? t : o
    );
    return t === /* @__PURE__ */ st(o) && (f ? br(r, a) && zr(t, "set", n, r) : zr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = lt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && zr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wr(n) || !fp.has(n)) && sn(t, "has", n), r;
  }
  ownKeys(t) {
    return sn(
      t,
      "iterate",
      Ke(t) ? "length" : bi
    ), Reflect.ownKeys(t);
  }
}
class ty extends dp {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ny = /* @__PURE__ */ new hp(), ry = /* @__PURE__ */ new ty(), iy = /* @__PURE__ */ new hp(!0);
const gc = (e) => e, Na = (e) => Reflect.getPrototypeOf(e);
function oy(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ st(o), c = no(a), f = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, y = o[e](...r), b = n ? gc : t ? fo : sr;
    return !t && sn(
      a,
      "iterate",
      d ? mc : bi
    ), dn(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: w, done: x } = y.next();
          return x ? { value: w, done: x } : {
            value: f ? [b(w[0]), b(w[1])] : b(w),
            done: x
          };
        }
      }
    );
  };
}
function Pa(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ay(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ st(a), f = /* @__PURE__ */ st(o);
      e || (br(o, f) && sn(c, "get", o), sn(c, "get", f));
      const { has: d } = Na(c), y = t ? gc : e ? fo : sr;
      if (d.call(c, o))
        return y(a.get(o));
      if (d.call(c, f))
        return y(a.get(f));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && sn(/* @__PURE__ */ st(o), "iterate", bi), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ st(a), f = /* @__PURE__ */ st(o);
      return e || (br(o, f) && sn(c, "has", o), sn(c, "has", f)), o === f ? a.has(o) : a.has(o) || a.has(f);
    },
    forEach(o, a) {
      const c = this, f = c.__v_raw, d = /* @__PURE__ */ st(f), y = t ? gc : e ? fo : sr;
      return !e && sn(d, "iterate", bi), f.forEach((b, w) => o.call(a, y(b), y(w), c));
    }
  };
  return dn(
    n,
    e ? {
      add: Pa("add"),
      set: Pa("set"),
      delete: Pa("delete"),
      clear: Pa("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ st(this), c = Na(a), f = /* @__PURE__ */ st(o), d = !t && !/* @__PURE__ */ Wn(o) && !/* @__PURE__ */ Br(o) ? f : o;
        return c.has.call(a, d) || br(o, d) && c.has.call(a, o) || br(f, d) && c.has.call(a, f) || (a.add(d), zr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ Wn(a) && !/* @__PURE__ */ Br(a) && (a = /* @__PURE__ */ st(a));
        const c = /* @__PURE__ */ st(this), { has: f, get: d } = Na(c);
        let y = f.call(c, o);
        y || (o = /* @__PURE__ */ st(o), y = f.call(c, o));
        const b = d.call(c, o);
        return c.set(o, a), y ? br(a, b) && zr(c, "set", o, a) : zr(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ st(this), { has: c, get: f } = Na(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ st(o), d = c.call(a, o)), f && f.call(a, o);
        const y = a.delete(o);
        return d && zr(a, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ st(this), a = o.size !== 0, c = o.clear();
        return a && zr(
          o,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = oy(o, e, t);
  }), n;
}
function ru(e, t) {
  const n = ay(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    lt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const sy = {
  get: /* @__PURE__ */ ru(!1, !1)
}, ly = {
  get: /* @__PURE__ */ ru(!1, !0)
}, cy = {
  get: /* @__PURE__ */ ru(!0, !1)
};
const pp = /* @__PURE__ */ new WeakMap(), mp = /* @__PURE__ */ new WeakMap(), gp = /* @__PURE__ */ new WeakMap(), uy = /* @__PURE__ */ new WeakMap();
function fy(e) {
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
function dy(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fy(Rb(e));
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return /* @__PURE__ */ Br(e) ? e : iu(
    e,
    !1,
    ny,
    sy,
    pp
  );
}
// @__NO_SIDE_EFFECTS__
function hy(e) {
  return iu(
    e,
    !1,
    iy,
    ly,
    mp
  );
}
// @__NO_SIDE_EFFECTS__
function bc(e) {
  return iu(
    e,
    !0,
    ry,
    cy,
    gp
  );
}
function iu(e, t, n, r, o) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = dy(e);
  if (a === 0)
    return e;
  const c = o.get(e);
  if (c)
    return c;
  const f = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function yi(e) {
  return /* @__PURE__ */ Br(e) ? /* @__PURE__ */ yi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ou(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ st(t) : e;
}
function py(e) {
  return !lt(e, "__v_skip") && Object.isExtensible(e) && Qh(e, "__v_skip", !0), e;
}
const sr = (e) => ht(e) ? /* @__PURE__ */ mo(e) : e, fo = (e) => ht(e) ? /* @__PURE__ */ bc(e) : e;
// @__NO_SIDE_EFFECTS__
function un(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function fn(e) {
  return my(e, !1);
}
function my(e, t) {
  return /* @__PURE__ */ un(e) ? e : new gy(e, t);
}
class gy {
  constructor(t, n) {
    this.dep = new nu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ st(t), this._value = n ? t : sr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ Wn(t) || /* @__PURE__ */ Br(t);
    t = r ? t : /* @__PURE__ */ st(t), br(t, n) && (this._rawValue = t, this._value = r ? t : sr(t), this.dep.trigger());
  }
}
function at(e) {
  return /* @__PURE__ */ un(e) ? e.value : e;
}
const by = {
  get: (e, t, n) => t === "__v_raw" ? e : at(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ un(o) && !/* @__PURE__ */ un(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function bp(e) {
  return /* @__PURE__ */ yi(e) ? e : new Proxy(e, by);
}
class yy {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new nu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xt !== this)
      return op(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function vy(e, t, n = !1) {
  let r, o;
  return We(e) ? r = e : (r = e.get, o = e.set), new yy(r, o, n);
}
const Aa = {}, cs = /* @__PURE__ */ new WeakMap();
let pi;
function _y(e, t = !1, n = pi) {
  if (n) {
    let r = cs.get(n);
    r || cs.set(n, r = []), r.push(e);
  }
}
function xy(e, t, n = _t) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: f, call: d } = n, y = (O) => o ? O : /* @__PURE__ */ Wn(O) || o === !1 || o === 0 ? jr(O, 1) : jr(O);
  let b, w, x, N, _ = !1, T = !1;
  if (/* @__PURE__ */ un(e) ? (w = () => e.value, _ = /* @__PURE__ */ Wn(e)) : /* @__PURE__ */ yi(e) ? (w = () => y(e), _ = !0) : Ke(e) ? (T = !0, _ = e.some((O) => /* @__PURE__ */ yi(O) || /* @__PURE__ */ Wn(O)), w = () => e.map((O) => {
    if (/* @__PURE__ */ un(O))
      return O.value;
    if (/* @__PURE__ */ yi(O))
      return y(O);
    if (We(O))
      return d ? d(O, 2) : O();
  })) : We(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (x) {
      Gr();
      try {
        x();
      } finally {
        Kr();
      }
    }
    const O = pi;
    pi = b;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      pi = O;
    }
  } : w = xr, t && o) {
    const O = w, L = o === !0 ? 1 / 0 : o;
    w = () => jr(O(), L);
  }
  const V = Yb(), $ = () => {
    b.stop(), V && V.active && Xc(V.effects, b);
  };
  if (a && t) {
    const O = t;
    t = (...L) => {
      O(...L), $();
    };
  }
  let A = T ? new Array(e.length).fill(Aa) : Aa;
  const X = (O) => {
    if (!(!(b.flags & 1) || !b.dirty && !O))
      if (t) {
        const L = b.run();
        if (o || _ || (T ? L.some((R, q) => br(R, A[q])) : br(L, A))) {
          x && x();
          const R = pi;
          pi = b;
          try {
            const q = [
              L,
              // pass undefined as the old value when it's changed for the first time
              A === Aa ? void 0 : T && A[0] === Aa ? [] : A,
              N
            ];
            A = L, d ? d(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            pi = R;
          }
        }
      } else
        b.run();
  };
  return f && f(X), b = new rp(w), b.scheduler = c ? () => c(X, !1) : X, N = (O) => _y(O, !1, b), x = b.onStop = () => {
    const O = cs.get(b);
    if (O) {
      if (d)
        d(O, 4);
      else
        for (const L of O) L();
      cs.delete(b);
    }
  }, t ? r ? X(!0) : A = b.run() : c ? c(X.bind(null, !0), !0) : b.run(), $.pause = b.pause.bind(b), $.resume = b.resume.bind(b), $.stop = $, $;
}
function jr(e, t = 1 / 0, n) {
  if (t <= 0 || !ht(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ un(e))
    jr(e.value, t, n);
  else if (Ke(e))
    for (let r = 0; r < e.length; r++)
      jr(e[r], t, n);
  else if (Xh(e) || no(e))
    e.forEach((r) => {
      jr(r, t, n);
    });
  else if (Zh(e)) {
    for (const r in e)
      jr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && jr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oa(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    $s(o, t, n);
  }
}
function Sr(e, t, n, r) {
  if (We(e)) {
    const o = oa(e, t, n, r);
    return o && qh(o) && o.catch((a) => {
      $s(a, t, n);
    }), o;
  }
  if (Ke(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Sr(e[a], t, n, r));
    return o;
  }
}
function $s(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || _t;
  if (t) {
    let f = t.parent;
    const d = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const b = f.ec;
      if (b) {
        for (let w = 0; w < b.length; w++)
          if (b[w](e, d, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (a) {
      Gr(), oa(a, null, 10, [
        e,
        d,
        y
      ]), Kr();
      return;
    }
  }
  wy(e, n, o, r, c);
}
function wy(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const vn = [];
let pr = -1;
const ro = [];
let ei = null, Xi = 0;
const yp = /* @__PURE__ */ Promise.resolve();
let us = null;
function au(e) {
  const t = us || yp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sy(e) {
  let t = pr + 1, n = vn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = vn[r], a = Jo(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function su(e) {
  if (!(e.flags & 1)) {
    const t = Jo(e), n = vn[vn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jo(n) ? vn.push(e) : vn.splice(Sy(t), 0, e), e.flags |= 1, vp();
  }
}
function vp() {
  us || (us = yp.then(xp));
}
function ky(e) {
  Ke(e) ? ro.push(...e) : ei && e.id === -1 ? ei.splice(Xi + 1, 0, e) : e.flags & 1 || (ro.push(e), e.flags |= 1), vp();
}
function dd(e, t, n = pr + 1) {
  for (; n < vn.length; n++) {
    const r = vn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      vn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function _p(e) {
  if (ro.length) {
    const t = [...new Set(ro)].sort(
      (n, r) => Jo(n) - Jo(r)
    );
    if (ro.length = 0, ei) {
      ei.push(...t);
      return;
    }
    for (ei = t, Xi = 0; Xi < ei.length; Xi++) {
      const n = ei[Xi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ei = null, Xi = 0;
  }
}
const Jo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xp(e) {
  try {
    for (pr = 0; pr < vn.length; pr++) {
      const t = vn[pr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), oa(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pr < vn.length; pr++) {
      const t = vn[pr];
      t && (t.flags &= -2);
    }
    pr = -1, vn.length = 0, _p(), us = null, (vn.length || ro.length) && xp();
  }
}
let Dn = null, wp = null;
function fs(e) {
  const t = Dn;
  return Dn = e, wp = e && e.type.__scopeId || null, t;
}
function Sp(e, t = Dn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && kd(-1);
    const a = fs(t);
    let c;
    try {
      c = e(...o);
    } finally {
      fs(a), r._d && kd(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vi(e, t) {
  if (Dn === null)
    return e;
  const n = Ks(Dn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, f, d = _t] = t[o];
    a && (We(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && jr(c), r.push({
      dir: a,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: d
    }));
  }
  return e;
}
function ui(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const f = o[c];
    a && (f.oldValue = a[c].value);
    let d = f.dir[r];
    d && (Gr(), Sr(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), Kr());
  }
}
function My(e, t) {
  if (ln) {
    let n = ln.provides;
    const r = ln.parent && ln.parent.provides;
    r === n && (n = ln.provides = Object.create(r)), n[e] = t;
  }
}
function Ya(e, t, n = !1) {
  const r = k1();
  if (r || io) {
    let o = io ? io._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && We(t) ? t.call(r && r.proxy) : t;
  }
}
const Ny = /* @__PURE__ */ Symbol.for("v-scx"), Py = () => Ya(Ny);
function _i(e, t, n) {
  return kp(e, t, n);
}
function kp(e, t, n = _t) {
  const { immediate: r, deep: o, flush: a, once: c } = n, f = dn({}, n), d = t && r || !t && a !== "post";
  let y;
  if (Qo) {
    if (a === "sync") {
      const N = Py();
      y = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = xr, N.resume = xr, N.pause = xr, N;
    }
  }
  const b = ln;
  f.call = (N, _, T) => Sr(N, b, _, T);
  let w = !1;
  a === "post" ? f.scheduler = (N) => {
    Pn(N, b && b.suspense);
  } : a !== "sync" && (w = !0, f.scheduler = (N, _) => {
    _ ? N() : su(N);
  }), f.augmentJob = (N) => {
    t && (N.flags |= 4), w && (N.flags |= 2, b && (N.id = b.uid, N.i = b));
  };
  const x = xy(e, t, f);
  return Qo && (y ? y.push(x) : d && x()), x;
}
function Ay(e, t, n) {
  const r = this.proxy, o = Ot(e) ? e.includes(".") ? Mp(r, e) : () => r[e] : e.bind(r, r);
  let a;
  We(t) ? a = t : (a = t.handler, n = t);
  const c = aa(this), f = kp(o, a.bind(r), n);
  return c(), f;
}
function Mp(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Cy = /* @__PURE__ */ Symbol("_vte"), Iy = (e) => e.__isTeleport, Oy = /* @__PURE__ */ Symbol("_leaveCb");
function lu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, lu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Np(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ds = /* @__PURE__ */ new WeakMap();
function Bo(e, t, n, r, o = !1) {
  if (Ke(e)) {
    e.forEach(
      (T, V) => Bo(
        T,
        t && (Ke(t) ? t[V] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Wo(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Bo(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Ks(r.component) : r.el, c = o ? null : a, { i: f, r: d } = e, y = t && t.r, b = f.refs === _t ? f.refs = {} : f.refs, w = f.setupState, x = /* @__PURE__ */ st(w), N = w === _t ? Yh : (T) => hd(b, T) ? !1 : lt(x, T), _ = (T, V) => !(V && hd(b, V));
  if (y != null && y !== d) {
    if (pd(t), Ot(y))
      b[y] = null, N(y) && (w[y] = null);
    else if (/* @__PURE__ */ un(y)) {
      const T = t;
      _(y, T.k) && (y.value = null), T.k && (b[T.k] = null);
    }
  }
  if (We(d))
    oa(d, f, 12, [c, b]);
  else {
    const T = Ot(d), V = /* @__PURE__ */ un(d);
    if (T || V) {
      const $ = () => {
        if (e.f) {
          const A = T ? N(d) ? w[d] : b[d] : _() || !e.k ? d.value : b[e.k];
          if (o)
            Ke(A) && Xc(A, a);
          else if (Ke(A))
            A.includes(a) || A.push(a);
          else if (T)
            b[d] = [a], N(d) && (w[d] = b[d]);
          else {
            const X = [a];
            _(d, e.k) && (d.value = X), e.k && (b[e.k] = X);
          }
        } else T ? (b[d] = c, N(d) && (w[d] = c)) : V && (_(d, e.k) && (d.value = c), e.k && (b[e.k] = c));
      };
      if (c) {
        const A = () => {
          $(), ds.delete(e);
        };
        A.id = -1, ds.set(e, A), Pn(A, n);
      } else
        pd(e), $();
    }
  }
}
function pd(e) {
  const t = ds.get(e);
  t && (t.flags |= 8, ds.delete(e));
}
Rs().requestIdleCallback;
Rs().cancelIdleCallback;
const Wo = (e) => !!e.type.__asyncLoader, Pp = (e) => e.type.__isKeepAlive;
function Ey(e, t) {
  Ap(e, "a", t);
}
function Ty(e, t) {
  Ap(e, "da", t);
}
function Ap(e, t, n = ln) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (zs(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Pp(o.parent.vnode) && Fy(r, t, n, o), o = o.parent;
  }
}
function Fy(e, t, n, r) {
  const o = zs(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Cp(() => {
    Xc(r[t], o);
  }, n);
}
function zs(e, t, n = ln, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      Gr();
      const f = aa(n), d = Sr(t, n, e, c);
      return f(), Kr(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Ur = (e) => (t, n = ln) => {
  (!Qo || e === "sp") && zs(e, (...r) => t(...r), n);
}, Dy = Ur("bm"), cu = Ur("m"), Ly = Ur(
  "bu"
), Ry = Ur("u"), js = Ur(
  "bum"
), Cp = Ur("um"), Vy = Ur(
  "sp"
), $y = Ur("rtg"), zy = Ur("rtc");
function jy(e, t = ln) {
  zs("ec", e, t);
}
const Hy = "components", Ip = /* @__PURE__ */ Symbol.for("v-ndc");
function Gy(e) {
  return Ot(e) ? Ky(Hy, e, !1) || e : e || Ip;
}
function Ky(e, t, n = !0, r = !1) {
  const o = Dn || ln;
  if (o) {
    const a = o.type;
    {
      const f = C1(
        a,
        !1
      );
      if (f && (f === t || f === _n(t) || f === Ls(_n(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      md(o[e] || a[e], t) || // global registration
      md(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function md(e, t) {
  return e && (e[t] || e[_n(t)] || e[Ls(_n(t))]);
}
function $t(e, t, n, r) {
  let o;
  const a = n, c = Ke(e);
  if (c || Ot(e)) {
    const f = c && /* @__PURE__ */ yi(e);
    let d = !1, y = !1;
    f && (d = !/* @__PURE__ */ Wn(e), y = /* @__PURE__ */ Br(e), e = Vs(e)), o = new Array(e.length);
    for (let b = 0, w = e.length; b < w; b++)
      o[b] = t(
        d ? y ? fo(sr(e[b])) : sr(e[b]) : e[b],
        b,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let f = 0; f < e; f++)
      o[f] = t(f + 1, f, void 0, a);
  } else if (ht(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (f, d) => t(f, d, void 0, a)
      );
    else {
      const f = Object.keys(e);
      o = new Array(f.length);
      for (let d = 0, y = f.length; d < y; d++) {
        const b = f[d];
        o[d] = t(e[b], b, d, a);
      }
    }
  else
    o = [];
  return o;
}
const yc = (e) => e ? Jp(e) ? Ks(e) : yc(e.parent) : null, Uo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ dn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => yc(e.parent),
    $root: (e) => yc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ep(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      su(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = au.bind(e.proxy)),
    $watch: (e) => Ay.bind(e)
  })
), zl = (e, t) => e !== _t && !e.__isScriptSetup && lt(e, t), By = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: f, appContext: d } = e;
    if (t[0] !== "$") {
      const x = c[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (zl(r, t))
          return c[t] = 1, r[t];
        if (o !== _t && lt(o, t))
          return c[t] = 2, o[t];
        if (lt(a, t))
          return c[t] = 3, a[t];
        if (n !== _t && lt(n, t))
          return c[t] = 4, n[t];
        vc && (c[t] = 0);
      }
    }
    const y = Uo[t];
    let b, w;
    if (y)
      return t === "$attrs" && sn(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (b = f.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== _t && lt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, lt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return zl(o, t) ? (o[t] = n, !0) : r !== _t && lt(r, t) ? (r[t] = n, !0) : lt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, f) {
    let d;
    return !!(n[f] || e !== _t && f[0] !== "$" && lt(e, f) || zl(t, f) || lt(a, f) || lt(r, f) || lt(Uo, f) || lt(o.config.globalProperties, f) || (d = c.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : lt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function gd(e) {
  return Ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let vc = !0;
function Wy(e) {
  const t = Ep(e), n = e.proxy, r = e.ctx;
  vc = !1, t.beforeCreate && bd(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: f,
    provide: d,
    inject: y,
    // lifecycle
    created: b,
    beforeMount: w,
    mounted: x,
    beforeUpdate: N,
    updated: _,
    activated: T,
    deactivated: V,
    beforeDestroy: $,
    beforeUnmount: A,
    destroyed: X,
    unmounted: O,
    render: L,
    renderTracked: R,
    renderTriggered: q,
    errorCaptured: j,
    serverPrefetch: Q,
    // public API
    expose: P,
    inheritAttrs: W,
    // assets
    components: ae,
    directives: re,
    filters: Z
  } = t;
  if (y && Uy(y, r, null), c)
    for (const C in c) {
      const _e = c[C];
      We(_e) && (r[C] = _e.bind(n));
    }
  if (o) {
    const C = o.call(n, n);
    ht(C) && (e.data = /* @__PURE__ */ mo(C));
  }
  if (vc = !0, a)
    for (const C in a) {
      const _e = a[C], G = We(_e) ? _e.bind(n, n) : We(_e.get) ? _e.get.bind(n, n) : xr, Ee = !We(_e) && We(_e.set) ? _e.set.bind(n) : xr, Re = vt({
        get: G,
        set: Ee
      });
      Object.defineProperty(r, C, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ze) => Re.value = Ze
      });
    }
  if (f)
    for (const C in f)
      Op(f[C], r, n, C);
  if (d) {
    const C = We(d) ? d.call(n) : d;
    Reflect.ownKeys(C).forEach((_e) => {
      My(_e, C[_e]);
    });
  }
  b && bd(b, e, "c");
  function Se(C, _e) {
    Ke(_e) ? _e.forEach((G) => C(G.bind(n))) : _e && C(_e.bind(n));
  }
  if (Se(Dy, w), Se(cu, x), Se(Ly, N), Se(Ry, _), Se(Ey, T), Se(Ty, V), Se(jy, j), Se(zy, R), Se($y, q), Se(js, A), Se(Cp, O), Se(Vy, Q), Ke(P))
    if (P.length) {
      const C = e.exposed || (e.exposed = {});
      P.forEach((_e) => {
        Object.defineProperty(C, _e, {
          get: () => n[_e],
          set: (G) => n[_e] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === xr && (e.render = L), W != null && (e.inheritAttrs = W), ae && (e.components = ae), re && (e.directives = re), Q && Np(e);
}
function Uy(e, t, n = xr) {
  Ke(e) && (e = _c(e));
  for (const r in e) {
    const o = e[r];
    let a;
    ht(o) ? "default" in o ? a = Ya(
      o.from || r,
      o.default,
      !0
    ) : a = Ya(o.from || r) : a = Ya(o), /* @__PURE__ */ un(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function bd(e, t, n) {
  Sr(
    Ke(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Op(e, t, n, r) {
  let o = r.includes(".") ? Mp(n, r) : () => n[r];
  if (Ot(e)) {
    const a = t[e];
    We(a) && _i(o, a);
  } else if (We(e))
    _i(o, e.bind(n));
  else if (ht(e))
    if (Ke(e))
      e.forEach((a) => Op(a, t, n, r));
    else {
      const a = We(e.handler) ? e.handler.bind(n) : t[e.handler];
      We(a) && _i(o, a, e);
    }
}
function Ep(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = a.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (y) => hs(d, y, c, !0)
  ), hs(d, t, c)), ht(t) && a.set(t, d), d;
}
function hs(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && hs(e, a, n, !0), o && o.forEach(
    (c) => hs(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = Yy[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const Yy = {
  data: yd,
  props: vd,
  emits: vd,
  // objects
  methods: Vo,
  computed: Vo,
  // lifecycle
  beforeCreate: yn,
  created: yn,
  beforeMount: yn,
  mounted: yn,
  beforeUpdate: yn,
  updated: yn,
  beforeDestroy: yn,
  beforeUnmount: yn,
  destroyed: yn,
  unmounted: yn,
  activated: yn,
  deactivated: yn,
  errorCaptured: yn,
  serverPrefetch: yn,
  // assets
  components: Vo,
  directives: Vo,
  // watch
  watch: qy,
  // provide / inject
  provide: yd,
  inject: Xy
};
function yd(e, t) {
  return t ? e ? function() {
    return dn(
      We(e) ? e.call(this, this) : e,
      We(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xy(e, t) {
  return Vo(_c(e), _c(t));
}
function _c(e) {
  if (Ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function yn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vo(e, t) {
  return e ? dn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vd(e, t) {
  return e ? Ke(e) && Ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : dn(
    /* @__PURE__ */ Object.create(null),
    gd(e),
    gd(t ?? {})
  ) : t;
}
function qy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = dn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = yn(e[r], t[r]);
  return n;
}
function Tp() {
  return {
    app: null,
    config: {
      isNativeTag: Yh,
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
let Jy = 0;
function Zy(e, t) {
  return function(r, o = null) {
    We(r) || (r = dn({}, r)), o != null && !ht(o) && (o = null);
    const a = Tp(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const y = a.app = {
      _uid: Jy++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: O1,
      get config() {
        return a.config;
      },
      set config(b) {
      },
      use(b, ...w) {
        return c.has(b) || (b && We(b.install) ? (c.add(b), b.install(y, ...w)) : We(b) && (c.add(b), b(y, ...w))), y;
      },
      mixin(b) {
        return a.mixins.includes(b) || a.mixins.push(b), y;
      },
      component(b, w) {
        return w ? (a.components[b] = w, y) : a.components[b];
      },
      directive(b, w) {
        return w ? (a.directives[b] = w, y) : a.directives[b];
      },
      mount(b, w, x) {
        if (!d) {
          const N = y._ceVNode || Fe(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, b, x), d = !0, y._container = b, b.__vue_app__ = y, Ks(N.component);
        }
      },
      onUnmount(b) {
        f.push(b);
      },
      unmount() {
        d && (Sr(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(b, w) {
        return a.provides[b] = w, y;
      },
      runWithContext(b) {
        const w = io;
        io = y;
        try {
          return b();
        } finally {
          io = w;
        }
      }
    };
    return y;
  };
}
let io = null;
const Qy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${Mi(t)}Modifiers`];
function e1(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const a = t.startsWith("update:"), c = a && Qy(r, t.slice(7));
  c && (c.trim && (o = n.map((b) => Ot(b) ? b.trim() : b)), c.number && (o = n.map(Jc)));
  let f, d = r[f = Dl(t)] || // also try camelCase event handler (#2249)
  r[f = Dl(_n(t))];
  !d && a && (d = r[f = Dl(Mi(t))]), d && Sr(
    d,
    e,
    6,
    o
  );
  const y = r[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Sr(
      y,
      e,
      6,
      o
    );
  }
}
const t1 = /* @__PURE__ */ new WeakMap();
function Fp(e, t, n = !1) {
  const r = n ? t1 : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, f = !1;
  if (!We(e)) {
    const d = (y) => {
      const b = Fp(y, t, !0);
      b && (f = !0, dn(c, b));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !f ? (ht(e) && r.set(e, null), null) : (Ke(a) ? a.forEach((d) => c[d] = null) : dn(c, a), ht(e) && r.set(e, c), c);
}
function Hs(e, t) {
  return !e || !Ts(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), lt(e, t[0].toLowerCase() + t.slice(1)) || lt(e, Mi(t)) || lt(e, t));
}
function _d(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: f,
    emit: d,
    render: y,
    renderCache: b,
    props: w,
    data: x,
    setupState: N,
    ctx: _,
    inheritAttrs: T
  } = e, V = fs(e);
  let $, A;
  try {
    if (n.shapeFlag & 4) {
      const O = o || r, L = O;
      $ = gr(
        y.call(
          L,
          O,
          b,
          w,
          N,
          x,
          _
        )
      ), A = f;
    } else {
      const O = t;
      $ = gr(
        O.length > 1 ? O(
          w,
          { attrs: f, slots: c, emit: d }
        ) : O(
          w,
          null
        )
      ), A = t.props ? f : n1(f);
    }
  } catch (O) {
    Yo.length = 0, $s(O, e, 1), $ = Fe(ri);
  }
  let X = $;
  if (A && T !== !1) {
    const O = Object.keys(A), { shapeFlag: L } = X;
    O.length && L & 7 && (a && O.some(Fs) && (A = r1(
      A,
      a
    )), X = ho(X, A, !1, !0));
  }
  return n.dirs && (X = ho(X, null, !1, !0), X.dirs = X.dirs ? X.dirs.concat(n.dirs) : n.dirs), n.transition && lu(X, n.transition), $ = X, fs(V), $;
}
const n1 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ts(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, r1 = (e, t) => {
  const n = {};
  for (const r in e)
    (!Fs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function i1(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: f, patchFlag: d } = t, y = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? xd(r, c, y) : !!c;
    if (d & 8) {
      const b = t.dynamicProps;
      for (let w = 0; w < b.length; w++) {
        const x = b[w];
        if (Dp(c, r, x) && !Hs(y, x))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? xd(r, c, y) : !0 : !!c;
  return !1;
}
function xd(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Dp(t, e, a) && !Hs(n, a))
      return !0;
  }
  return !1;
}
function Dp(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && ht(r) && ht(o) ? !Zc(r, o) : r !== o;
}
function o1({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Lp = {}, Rp = () => Object.create(Lp), Vp = (e) => Object.getPrototypeOf(e) === Lp;
function a1(e, t, n, r = !1) {
  const o = {}, a = Rp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $p(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ hy(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function s1(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ st(o), [d] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const b = e.vnode.dynamicProps;
      for (let w = 0; w < b.length; w++) {
        let x = b[w];
        if (Hs(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (lt(a, x))
            N !== a[x] && (a[x] = N, y = !0);
          else {
            const _ = _n(x);
            o[_] = xc(
              d,
              f,
              _,
              N,
              e,
              !1
            );
          }
        else
          N !== a[x] && (a[x] = N, y = !0);
      }
    }
  } else {
    $p(e, t, o, a) && (y = !0);
    let b;
    for (const w in f)
      (!t || // for camelCase
      !lt(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = Mi(w)) === w || !lt(t, b))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[b] !== void 0) && (o[w] = xc(
        d,
        f,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== f)
      for (const w in a)
        (!t || !lt(t, w)) && (delete a[w], y = !0);
  }
  y && zr(e.attrs, "set", "");
}
function $p(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let d in t) {
      if (Ho(d))
        continue;
      const y = t[d];
      let b;
      o && lt(o, b = _n(d)) ? !a || !a.includes(b) ? n[b] = y : (f || (f = {}))[b] = y : Hs(e.emitsOptions, d) || (!(d in r) || y !== r[d]) && (r[d] = y, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ st(n), y = f || _t;
    for (let b = 0; b < a.length; b++) {
      const w = a[b];
      n[w] = xc(
        o,
        d,
        w,
        y[w],
        e,
        !lt(y, w)
      );
    }
  }
  return c;
}
function xc(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const f = lt(c, "default");
    if (f && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && We(d)) {
        const { propsDefaults: y } = o;
        if (n in y)
          r = y[n];
        else {
          const b = aa(o);
          r = y[n] = d.call(
            null,
            t
          ), b();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    c[
      0
      /* shouldCast */
    ] && (a && !f ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Mi(n)) && (r = !0));
  }
  return r;
}
const l1 = /* @__PURE__ */ new WeakMap();
function zp(e, t, n = !1) {
  const r = n ? l1 : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, f = [];
  let d = !1;
  if (!We(e)) {
    const b = (w) => {
      d = !0;
      const [x, N] = zp(w, t, !0);
      dn(c, x), N && f.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!a && !d)
    return ht(e) && r.set(e, to), to;
  if (Ke(a))
    for (let b = 0; b < a.length; b++) {
      const w = _n(a[b]);
      wd(w) && (c[w] = _t);
    }
  else if (a)
    for (const b in a) {
      const w = _n(b);
      if (wd(w)) {
        const x = a[b], N = c[w] = Ke(x) || We(x) ? { type: x } : dn({}, x), _ = N.type;
        let T = !1, V = !0;
        if (Ke(_))
          for (let $ = 0; $ < _.length; ++$) {
            const A = _[$], X = We(A) && A.name;
            if (X === "Boolean") {
              T = !0;
              break;
            } else X === "String" && (V = !1);
          }
        else
          T = We(_) && _.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = T, N[
          1
          /* shouldCastTrue */
        ] = V, (T || lt(N, "default")) && f.push(w);
      }
    }
  const y = [c, f];
  return ht(e) && r.set(e, y), y;
}
function wd(e) {
  return e[0] !== "$" && !Ho(e);
}
const uu = (e) => e === "_" || e === "_ctx" || e === "$stable", fu = (e) => Ke(e) ? e.map(gr) : [gr(e)], c1 = (e, t, n) => {
  if (t._n)
    return t;
  const r = Sp((...o) => fu(t(...o)), n);
  return r._c = !1, r;
}, jp = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uu(o)) continue;
    const a = e[o];
    if (We(a))
      t[o] = c1(o, a, r);
    else if (a != null) {
      const c = fu(a);
      t[o] = () => c;
    }
  }
}, Hp = (e, t) => {
  const n = fu(t);
  e.slots.default = () => n;
}, Gp = (e, t, n) => {
  for (const r in t)
    (n || !uu(r)) && (e[r] = t[r]);
}, u1 = (e, t, n) => {
  const r = e.slots = Rp();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Gp(r, t, n), n && Qh(r, "_", o, !0)) : jp(t, r);
  } else t && Hp(e, t);
}, f1 = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = _t;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? a = !1 : Gp(o, t, n) : (a = !t.$stable, jp(t, o)), c = t;
  } else t && (Hp(e, t), c = { default: 1 });
  if (a)
    for (const f in o)
      !uu(f) && c[f] == null && delete o[f];
}, Pn = g1;
function d1(e) {
  return h1(e);
}
function h1(e, t) {
  const n = Rs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: f,
    createComment: d,
    setText: y,
    setElementText: b,
    parentNode: w,
    nextSibling: x,
    setScopeId: N = xr,
    insertStaticContent: _
  } = e, T = (E, z, te, se = null, de = null, le = null, xe = void 0, Me = null, we = !!z.dynamicChildren) => {
    if (E === z)
      return;
    E && !Oo(E, z) && (se = hn(E), Ze(E, de, le, !0), E = null), z.patchFlag === -2 && (we = !1, z.dynamicChildren = null);
    const { type: ge, ref: De, shapeFlag: Pe } = z;
    switch (ge) {
      case Gs:
        V(E, z, te, se);
        break;
      case ri:
        $(E, z, te, se);
        break;
      case Hl:
        E == null && A(z, te, se, xe);
        break;
      case Qe:
        ae(
          E,
          z,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we
        );
        break;
      default:
        Pe & 1 ? L(
          E,
          z,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we
        ) : Pe & 6 ? re(
          E,
          z,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we
        ) : (Pe & 64 || Pe & 128) && ge.process(
          E,
          z,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we,
          zt
        );
    }
    De != null && de ? Bo(De, E && E.ref, le, z || E, !z) : De == null && E && E.ref != null && Bo(E.ref, null, le, E, !0);
  }, V = (E, z, te, se) => {
    if (E == null)
      r(
        z.el = f(z.children),
        te,
        se
      );
    else {
      const de = z.el = E.el;
      z.children !== E.children && y(de, z.children);
    }
  }, $ = (E, z, te, se) => {
    E == null ? r(
      z.el = d(z.children || ""),
      te,
      se
    ) : z.el = E.el;
  }, A = (E, z, te, se) => {
    [E.el, E.anchor] = _(
      E.children,
      z,
      te,
      se,
      E.el,
      E.anchor
    );
  }, X = ({ el: E, anchor: z }, te, se) => {
    let de;
    for (; E && E !== z; )
      de = x(E), r(E, te, se), E = de;
    r(z, te, se);
  }, O = ({ el: E, anchor: z }) => {
    let te;
    for (; E && E !== z; )
      te = x(E), o(E), E = te;
    o(z);
  }, L = (E, z, te, se, de, le, xe, Me, we) => {
    if (z.type === "svg" ? xe = "svg" : z.type === "math" && (xe = "mathml"), E == null)
      R(
        z,
        te,
        se,
        de,
        le,
        xe,
        Me,
        we
      );
    else {
      const ge = E.el && E.el._isVueCE ? E.el : null;
      try {
        ge && ge._beginPatch(), Q(
          E,
          z,
          de,
          le,
          xe,
          Me,
          we
        );
      } finally {
        ge && ge._endPatch();
      }
    }
  }, R = (E, z, te, se, de, le, xe, Me) => {
    let we, ge;
    const { props: De, shapeFlag: Pe, transition: p, dirs: Te } = E;
    if (we = E.el = c(
      E.type,
      le,
      De && De.is,
      De
    ), Pe & 8 ? b(we, E.children) : Pe & 16 && j(
      E.children,
      we,
      null,
      se,
      de,
      jl(E, le),
      xe,
      Me
    ), Te && ui(E, null, se, "created"), q(we, E, E.scopeId, xe, se), De) {
      for (const et in De)
        et !== "value" && !Ho(et) && a(we, et, null, De[et], le, se);
      "value" in De && a(we, "value", null, De.value, le), (ge = De.onVnodeBeforeMount) && ur(ge, se, E);
    }
    Te && ui(E, null, se, "beforeMount");
    const ze = p1(de, p);
    ze && p.beforeEnter(we), r(we, z, te), ((ge = De && De.onVnodeMounted) || ze || Te) && Pn(() => {
      try {
        ge && ur(ge, se, E), ze && p.enter(we), Te && ui(E, null, se, "mounted");
      } finally {
      }
    }, de);
  }, q = (E, z, te, se, de) => {
    if (te && N(E, te), se)
      for (let le = 0; le < se.length; le++)
        N(E, se[le]);
    if (de) {
      let le = de.subTree;
      if (z === le || Up(le.type) && (le.ssContent === z || le.ssFallback === z)) {
        const xe = de.vnode;
        q(
          E,
          xe,
          xe.scopeId,
          xe.slotScopeIds,
          de.parent
        );
      }
    }
  }, j = (E, z, te, se, de, le, xe, Me, we = 0) => {
    for (let ge = we; ge < E.length; ge++) {
      const De = E[ge] = Me ? $r(E[ge]) : gr(E[ge]);
      T(
        null,
        De,
        z,
        te,
        se,
        de,
        le,
        xe,
        Me
      );
    }
  }, Q = (E, z, te, se, de, le, xe) => {
    const Me = z.el = E.el;
    let { patchFlag: we, dynamicChildren: ge, dirs: De } = z;
    we |= E.patchFlag & 16;
    const Pe = E.props || _t, p = z.props || _t;
    let Te;
    if (te && fi(te, !1), (Te = p.onVnodeBeforeUpdate) && ur(Te, te, z, E), De && ui(z, E, te, "beforeUpdate"), te && fi(te, !0), (Pe.innerHTML && p.innerHTML == null || Pe.textContent && p.textContent == null) && b(Me, ""), ge ? P(
      E.dynamicChildren,
      ge,
      Me,
      te,
      se,
      jl(z, de),
      le
    ) : xe || _e(
      E,
      z,
      Me,
      null,
      te,
      se,
      jl(z, de),
      le,
      !1
    ), we > 0) {
      if (we & 16)
        W(Me, Pe, p, te, de);
      else if (we & 2 && Pe.class !== p.class && a(Me, "class", null, p.class, de), we & 4 && a(Me, "style", Pe.style, p.style, de), we & 8) {
        const ze = z.dynamicProps;
        for (let et = 0; et < ze.length; et++) {
          const tt = ze[et], Be = Pe[tt], ye = p[tt];
          (ye !== Be || tt === "value") && a(Me, tt, Be, ye, de, te);
        }
      }
      we & 1 && E.children !== z.children && b(Me, z.children);
    } else !xe && ge == null && W(Me, Pe, p, te, de);
    ((Te = p.onVnodeUpdated) || De) && Pn(() => {
      Te && ur(Te, te, z, E), De && ui(z, E, te, "updated");
    }, se);
  }, P = (E, z, te, se, de, le, xe) => {
    for (let Me = 0; Me < z.length; Me++) {
      const we = E[Me], ge = z[Me], De = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        we.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (we.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Oo(we, ge) || // - In the case of a component, it could contain anything.
        we.shapeFlag & 198) ? w(we.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      T(
        we,
        ge,
        De,
        null,
        se,
        de,
        le,
        xe,
        !0
      );
    }
  }, W = (E, z, te, se, de) => {
    if (z !== te) {
      if (z !== _t)
        for (const le in z)
          !Ho(le) && !(le in te) && a(
            E,
            le,
            z[le],
            null,
            de,
            se
          );
      for (const le in te) {
        if (Ho(le)) continue;
        const xe = te[le], Me = z[le];
        xe !== Me && le !== "value" && a(E, le, Me, xe, de, se);
      }
      "value" in te && a(E, "value", z.value, te.value, de);
    }
  }, ae = (E, z, te, se, de, le, xe, Me, we) => {
    const ge = z.el = E ? E.el : f(""), De = z.anchor = E ? E.anchor : f("");
    let { patchFlag: Pe, dynamicChildren: p, slotScopeIds: Te } = z;
    Te && (Me = Me ? Me.concat(Te) : Te), E == null ? (r(ge, te, se), r(De, te, se), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      z.children || [],
      te,
      De,
      de,
      le,
      xe,
      Me,
      we
    )) : Pe > 0 && Pe & 64 && p && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren && E.dynamicChildren.length === p.length ? (P(
      E.dynamicChildren,
      p,
      te,
      de,
      le,
      xe,
      Me
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (z.key != null || de && z === de.subTree) && Kp(
      E,
      z,
      !0
      /* shallow */
    )) : _e(
      E,
      z,
      te,
      De,
      de,
      le,
      xe,
      Me,
      we
    );
  }, re = (E, z, te, se, de, le, xe, Me, we) => {
    z.slotScopeIds = Me, E == null ? z.shapeFlag & 512 ? de.ctx.activate(
      z,
      te,
      se,
      xe,
      we
    ) : Z(
      z,
      te,
      se,
      de,
      le,
      xe,
      we
    ) : ce(E, z, we);
  }, Z = (E, z, te, se, de, le, xe) => {
    const Me = E.component = S1(
      E,
      se,
      de
    );
    if (Pp(E) && (Me.ctx.renderer = zt), M1(Me, !1, xe), Me.asyncDep) {
      if (de && de.registerDep(Me, Se, xe), !E.el) {
        const we = Me.subTree = Fe(ri);
        $(null, we, z, te), E.placeholder = we.el;
      }
    } else
      Se(
        Me,
        E,
        z,
        te,
        de,
        le,
        xe
      );
  }, ce = (E, z, te) => {
    const se = z.component = E.component;
    if (i1(E, z, te))
      if (se.asyncDep && !se.asyncResolved) {
        C(se, z, te);
        return;
      } else
        se.next = z, se.update();
    else
      z.el = E.el, se.vnode = z;
  }, Se = (E, z, te, se, de, le, xe) => {
    const Me = () => {
      if (E.isMounted) {
        let { next: Pe, bu: p, u: Te, parent: ze, vnode: et } = E;
        {
          const Kt = Bp(E);
          if (Kt) {
            Pe && (Pe.el = et.el, C(E, Pe, xe)), Kt.asyncDep.then(() => {
              Pn(() => {
                E.isUnmounted || ge();
              }, de);
            });
            return;
          }
        }
        let tt = Pe, Be;
        fi(E, !1), Pe ? (Pe.el = et.el, C(E, Pe, xe)) : Pe = et, p && Ua(p), (Be = Pe.props && Pe.props.onVnodeBeforeUpdate) && ur(Be, ze, Pe, et), fi(E, !0);
        const ye = _d(E), Et = E.subTree;
        E.subTree = ye, T(
          Et,
          ye,
          // parent may have changed if it's in a teleport
          w(Et.el),
          // anchor may have changed if it's in a fragment
          hn(Et),
          E,
          de,
          le
        ), Pe.el = ye.el, tt === null && o1(E, ye.el), Te && Pn(Te, de), (Be = Pe.props && Pe.props.onVnodeUpdated) && Pn(
          () => ur(Be, ze, Pe, et),
          de
        );
      } else {
        let Pe;
        const { el: p, props: Te } = z, { bm: ze, m: et, parent: tt, root: Be, type: ye } = E, Et = Wo(z);
        fi(E, !1), ze && Ua(ze), !Et && (Pe = Te && Te.onVnodeBeforeMount) && ur(Pe, tt, z), fi(E, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            ye,
            E.parent ? E.parent.type : void 0
          );
          const Kt = E.subTree = _d(E);
          T(
            null,
            Kt,
            te,
            se,
            E,
            de,
            le
          ), z.el = Kt.el;
        }
        if (et && Pn(et, de), !Et && (Pe = Te && Te.onVnodeMounted)) {
          const Kt = z;
          Pn(
            () => ur(Pe, tt, Kt),
            de
          );
        }
        (z.shapeFlag & 256 || tt && Wo(tt.vnode) && tt.vnode.shapeFlag & 256) && E.a && Pn(E.a, de), E.isMounted = !0, z = te = se = null;
      }
    };
    E.scope.on();
    const we = E.effect = new rp(Me);
    E.scope.off();
    const ge = E.update = we.run.bind(we), De = E.job = we.runIfDirty.bind(we);
    De.i = E, De.id = E.uid, we.scheduler = () => su(De), fi(E, !0), ge();
  }, C = (E, z, te) => {
    z.component = E;
    const se = E.vnode.props;
    E.vnode = z, E.next = null, s1(E, z.props, se, te), f1(E, z.children, te), Gr(), dd(E), Kr();
  }, _e = (E, z, te, se, de, le, xe, Me, we = !1) => {
    const ge = E && E.children, De = E ? E.shapeFlag : 0, Pe = z.children, { patchFlag: p, shapeFlag: Te } = z;
    if (p > 0) {
      if (p & 128) {
        Ee(
          ge,
          Pe,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we
        );
        return;
      } else if (p & 256) {
        G(
          ge,
          Pe,
          te,
          se,
          de,
          le,
          xe,
          Me,
          we
        );
        return;
      }
    }
    Te & 8 ? (De & 16 && At(ge, de, le), Pe !== ge && b(te, Pe)) : De & 16 ? Te & 16 ? Ee(
      ge,
      Pe,
      te,
      se,
      de,
      le,
      xe,
      Me,
      we
    ) : At(ge, de, le, !0) : (De & 8 && b(te, ""), Te & 16 && j(
      Pe,
      te,
      se,
      de,
      le,
      xe,
      Me,
      we
    ));
  }, G = (E, z, te, se, de, le, xe, Me, we) => {
    E = E || to, z = z || to;
    const ge = E.length, De = z.length, Pe = Math.min(ge, De);
    let p;
    for (p = 0; p < Pe; p++) {
      const Te = z[p] = we ? $r(z[p]) : gr(z[p]);
      T(
        E[p],
        Te,
        te,
        null,
        de,
        le,
        xe,
        Me,
        we
      );
    }
    ge > De ? At(
      E,
      de,
      le,
      !0,
      !1,
      Pe
    ) : j(
      z,
      te,
      se,
      de,
      le,
      xe,
      Me,
      we,
      Pe
    );
  }, Ee = (E, z, te, se, de, le, xe, Me, we) => {
    let ge = 0;
    const De = z.length;
    let Pe = E.length - 1, p = De - 1;
    for (; ge <= Pe && ge <= p; ) {
      const Te = E[ge], ze = z[ge] = we ? $r(z[ge]) : gr(z[ge]);
      if (Oo(Te, ze))
        T(
          Te,
          ze,
          te,
          null,
          de,
          le,
          xe,
          Me,
          we
        );
      else
        break;
      ge++;
    }
    for (; ge <= Pe && ge <= p; ) {
      const Te = E[Pe], ze = z[p] = we ? $r(z[p]) : gr(z[p]);
      if (Oo(Te, ze))
        T(
          Te,
          ze,
          te,
          null,
          de,
          le,
          xe,
          Me,
          we
        );
      else
        break;
      Pe--, p--;
    }
    if (ge > Pe) {
      if (ge <= p) {
        const Te = p + 1, ze = Te < De ? z[Te].el : se;
        for (; ge <= p; )
          T(
            null,
            z[ge] = we ? $r(z[ge]) : gr(z[ge]),
            te,
            ze,
            de,
            le,
            xe,
            Me,
            we
          ), ge++;
      }
    } else if (ge > p)
      for (; ge <= Pe; )
        Ze(E[ge], de, le, !0), ge++;
    else {
      const Te = ge, ze = ge, et = /* @__PURE__ */ new Map();
      for (ge = ze; ge <= p; ge++) {
        const Tt = z[ge] = we ? $r(z[ge]) : gr(z[ge]);
        Tt.key != null && et.set(Tt.key, ge);
      }
      let tt, Be = 0;
      const ye = p - ze + 1;
      let Et = !1, Kt = 0;
      const $n = new Array(ye);
      for (ge = 0; ge < ye; ge++) $n[ge] = 0;
      for (ge = Te; ge <= Pe; ge++) {
        const Tt = E[ge];
        if (Be >= ye) {
          Ze(Tt, de, le, !0);
          continue;
        }
        let Zt;
        if (Tt.key != null)
          Zt = et.get(Tt.key);
        else
          for (tt = ze; tt <= p; tt++)
            if ($n[tt - ze] === 0 && Oo(Tt, z[tt])) {
              Zt = tt;
              break;
            }
        Zt === void 0 ? Ze(Tt, de, le, !0) : ($n[Zt - ze] = ge + 1, Zt >= Kt ? Kt = Zt : Et = !0, T(
          Tt,
          z[Zt],
          te,
          null,
          de,
          le,
          xe,
          Me,
          we
        ), Be++);
      }
      const Pr = Et ? m1($n) : to;
      for (tt = Pr.length - 1, ge = ye - 1; ge >= 0; ge--) {
        const Tt = ze + ge, Zt = z[Tt], ii = z[Tt + 1], D = Tt + 1 < De ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ii.el || Wp(ii)
        ) : se;
        $n[ge] === 0 ? T(
          null,
          Zt,
          te,
          D,
          de,
          le,
          xe,
          Me,
          we
        ) : Et && (tt < 0 || ge !== Pr[tt] ? Re(Zt, te, D, 2) : tt--);
      }
    }
  }, Re = (E, z, te, se, de = null) => {
    const { el: le, type: xe, transition: Me, children: we, shapeFlag: ge } = E;
    if (ge & 6) {
      Re(E.component.subTree, z, te, se);
      return;
    }
    if (ge & 128) {
      E.suspense.move(z, te, se);
      return;
    }
    if (ge & 64) {
      xe.move(E, z, te, zt);
      return;
    }
    if (xe === Qe) {
      r(le, z, te);
      for (let Pe = 0; Pe < we.length; Pe++)
        Re(we[Pe], z, te, se);
      r(E.anchor, z, te);
      return;
    }
    if (xe === Hl) {
      X(E, z, te);
      return;
    }
    if (se !== 2 && ge & 1 && Me)
      if (se === 0)
        Me.beforeEnter(le), r(le, z, te), Pn(() => Me.enter(le), de);
      else {
        const { leave: Pe, delayLeave: p, afterLeave: Te } = Me, ze = () => {
          E.ctx.isUnmounted ? o(le) : r(le, z, te);
        }, et = () => {
          le._isLeaving && le[Oy](
            !0
            /* cancelled */
          ), Pe(le, () => {
            ze(), Te && Te();
          });
        };
        p ? p(le, ze, et) : et();
      }
    else
      r(le, z, te);
  }, Ze = (E, z, te, se = !1, de = !1) => {
    const {
      type: le,
      props: xe,
      ref: Me,
      children: we,
      dynamicChildren: ge,
      shapeFlag: De,
      patchFlag: Pe,
      dirs: p,
      cacheIndex: Te,
      memo: ze
    } = E;
    if (Pe === -2 && (de = !1), Me != null && (Gr(), Bo(Me, null, te, E, !0), Kr()), Te != null && (z.renderCache[Te] = void 0), De & 256) {
      z.ctx.deactivate(E);
      return;
    }
    const et = De & 1 && p, tt = !Wo(E);
    let Be;
    if (tt && (Be = xe && xe.onVnodeBeforeUnmount) && ur(Be, z, E), De & 6)
      mt(E.component, te, se);
    else {
      if (De & 128) {
        E.suspense.unmount(te, se);
        return;
      }
      et && ui(E, null, z, "beforeUnmount"), De & 64 ? E.type.remove(
        E,
        z,
        te,
        zt,
        se
      ) : ge && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ge.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (le !== Qe || Pe > 0 && Pe & 64) ? At(
        ge,
        z,
        te,
        !1,
        !0
      ) : (le === Qe && Pe & 384 || !de && De & 16) && At(we, z, te), se && pt(E);
    }
    const ye = ze != null && Te == null;
    (tt && (Be = xe && xe.onVnodeUnmounted) || et || ye) && Pn(() => {
      Be && ur(Be, z, E), et && ui(E, null, z, "unmounted"), ye && (E.el = null);
    }, te);
  }, pt = (E) => {
    const { type: z, el: te, anchor: se, transition: de } = E;
    if (z === Qe) {
      it(te, se);
      return;
    }
    if (z === Hl) {
      O(E);
      return;
    }
    const le = () => {
      o(te), de && !de.persisted && de.afterLeave && de.afterLeave();
    };
    if (E.shapeFlag & 1 && de && !de.persisted) {
      const { leave: xe, delayLeave: Me } = de, we = () => xe(te, le);
      Me ? Me(E.el, le, we) : we();
    } else
      le();
  }, it = (E, z) => {
    let te;
    for (; E !== z; )
      te = x(E), o(E), E = te;
    o(z);
  }, mt = (E, z, te) => {
    const { bum: se, scope: de, job: le, subTree: xe, um: Me, m: we, a: ge } = E;
    Sd(we), Sd(ge), se && Ua(se), de.stop(), le && (le.flags |= 8, Ze(xe, E, z, te)), Me && Pn(Me, z), Pn(() => {
      E.isUnmounted = !0;
    }, z);
  }, At = (E, z, te, se = !1, de = !1, le = 0) => {
    for (let xe = le; xe < E.length; xe++)
      Ze(E[xe], z, te, se, de);
  }, hn = (E) => {
    if (E.shapeFlag & 6)
      return hn(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const z = x(E.anchor || E.el), te = z && z[Cy];
    return te ? x(te) : z;
  };
  let Yn = !1;
  const Xn = (E, z, te) => {
    let se;
    E == null ? z._vnode && (Ze(z._vnode, null, null, !0), se = z._vnode.component) : T(
      z._vnode || null,
      E,
      z,
      null,
      null,
      null,
      te
    ), z._vnode = E, Yn || (Yn = !0, dd(se), _p(), Yn = !1);
  }, zt = {
    p: T,
    um: Ze,
    m: Re,
    r: pt,
    mt: Z,
    mc: j,
    pc: _e,
    pbc: P,
    n: hn,
    o: e
  };
  return {
    render: Xn,
    hydrate: void 0,
    createApp: Zy(Xn)
  };
}
function jl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function p1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kp(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ke(r) && Ke(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let f = o[a];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[a] = $r(o[a]), f.el = c.el), !n && f.patchFlag !== -2 && Kp(c, f)), f.type === Gs && (f.patchFlag === -1 && (f = o[a] = $r(f)), f.el = c.el), f.type === ri && !f.el && (f.el = c.el);
    }
}
function m1(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, f;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const y = e[r];
    if (y !== 0) {
      if (o = n[n.length - 1], e[o] < y) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        f = a + c >> 1, e[n[f]] < y ? a = f + 1 : c = f;
      y < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function Bp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Bp(t);
}
function Sd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Wp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Wp(t.subTree) : null;
}
const Up = (e) => e.__isSuspense;
function g1(e, t) {
  t && t.pendingBranch ? Ke(e) ? t.effects.push(...e) : t.effects.push(e) : ky(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), Gs = /* @__PURE__ */ Symbol.for("v-txt"), ri = /* @__PURE__ */ Symbol.for("v-cmt"), Hl = /* @__PURE__ */ Symbol.for("v-stc"), Yo = [];
let Ln = null;
function be(e = !1) {
  Yo.push(Ln = e ? null : []);
}
function b1() {
  Yo.pop(), Ln = Yo[Yo.length - 1] || null;
}
let Zo = 1;
function kd(e, t = !1) {
  Zo += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function Yp(e) {
  return e.dynamicChildren = Zo > 0 ? Ln || to : null, b1(), Zo > 0 && Ln && Ln.push(e), e;
}
function ke(e, t, n, r, o, a) {
  return Yp(
    B(
      e,
      t,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function Nr(e, t, n, r, o) {
  return Yp(
    Fe(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Xp(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Oo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qp = ({ key: e }) => e ?? null, Xa = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ot(e) || /* @__PURE__ */ un(e) || We(e) ? { i: Dn, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Qe ? 0 : 1, c = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qp(t),
    ref: t && Xa(t),
    scopeId: wp,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Dn
  };
  return f ? (du(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Ot(n) ? 8 : 16), Zo > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Ln.push(d), d;
}
const Fe = y1;
function y1(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Ip) && (e = ri), Xp(e)) {
    const f = ho(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && du(f, n), Zo > 0 && !a && Ln && (f.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = f : Ln.push(f)), f.patchFlag = -2, f;
  }
  if (I1(e) && (e = e.__vccOpts), t) {
    t = v1(t);
    let { class: f, style: d } = t;
    f && !Ot(f) && (t.class = ut(f)), ht(d) && (/* @__PURE__ */ ou(d) && !Ke(d) && (d = dn({}, d)), t.style = Vt(d));
  }
  const c = Ot(e) ? 1 : Up(e) ? 128 : Iy(e) ? 64 : ht(e) ? 4 : We(e) ? 2 : 0;
  return B(
    e,
    t,
    n,
    r,
    o,
    c,
    a,
    !0
  );
}
function v1(e) {
  return e ? /* @__PURE__ */ ou(e) || Vp(e) ? dn({}, e) : e : null;
}
function ho(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: f, transition: d } = e, y = t ? ti(o || {}, t) : o, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && qp(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ke(a) ? a.concat(Xa(t)) : [a, Xa(t)] : Xa(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Qe ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ho(e.ssContent),
    ssFallback: e.ssFallback && ho(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && lu(
    b,
    d.clone(b)
  ), b;
}
function _1(e = " ", t = 0) {
  return Fe(Gs, null, e, t);
}
function St(e = "", t = !1) {
  return t ? (be(), Nr(ri, null, e)) : Fe(ri, null, e);
}
function gr(e) {
  return e == null || typeof e == "boolean" ? Fe(ri) : Ke(e) ? Fe(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xp(e) ? $r(e) : Fe(Gs, null, String(e));
}
function $r(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ho(e);
}
function du(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ke(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), du(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vp(t) ? t._ctx = Dn : o === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else We(t) ? (t = { default: t, _ctx: Dn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [_1(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ti(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ut([t.class, r.class]));
      else if (o === "style")
        t.style = Vt([t.style, r.style]);
      else if (Ts(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Ke(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Fs(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function ur(e, t, n, r = null) {
  Sr(e, t, 7, [
    n,
    r
  ]);
}
const x1 = Tp();
let w1 = 0;
function S1(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || x1, a = {
    uid: w1++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ub(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: zp(r, o),
    emitsOptions: Fp(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = e1.bind(null, a), e.ce && e.ce(a), a;
}
let ln = null;
const k1 = () => ln || Dn;
let ps, wc;
{
  const e = Rs(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ln = n
  ), wc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Qo = n
  );
}
const aa = (e) => {
  const t = ln;
  return ps(e), e.scope.on(), () => {
    e.scope.off(), ps(t);
  };
}, Md = () => {
  ln && ln.scope.off(), ps(null);
};
function Jp(e) {
  return e.vnode.shapeFlag & 4;
}
let Qo = !1;
function M1(e, t = !1, n = !1) {
  t && wc(t);
  const { props: r, children: o } = e.vnode, a = Jp(e);
  a1(e, r, a, t), u1(e, o, n || t);
  const c = a ? N1(e, t) : void 0;
  return t && wc(!1), c;
}
function N1(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, By);
  const { setup: r } = n;
  if (r) {
    Gr();
    const o = e.setupContext = r.length > 1 ? A1(e) : null, a = aa(e), c = oa(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = qh(c);
    if (Kr(), a(), (f || e.sp) && !Wo(e) && Np(e), f) {
      if (c.then(Md, Md), t)
        return c.then((d) => {
          Nd(e, d);
        }).catch((d) => {
          $s(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Nd(e, c);
  } else
    Zp(e);
}
function Nd(e, t, n) {
  We(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = bp(t)), Zp(e);
}
function Zp(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || xr);
  {
    const o = aa(e);
    Gr();
    try {
      Wy(e);
    } finally {
      Kr(), o();
    }
  }
}
const P1 = {
  get(e, t) {
    return sn(e, "get", ""), e[t];
  }
};
function A1(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, P1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ks(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bp(py(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Uo)
        return Uo[n](e);
    },
    has(t, n) {
      return n in t || n in Uo;
    }
  })) : e.proxy;
}
function C1(e, t = !0) {
  return We(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function I1(e) {
  return We(e) && "__vccOpts" in e;
}
const vt = (e, t) => /* @__PURE__ */ vy(e, t, Qo), O1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sc;
const Pd = typeof window < "u" && window.trustedTypes;
if (Pd)
  try {
    Sc = /* @__PURE__ */ Pd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qp = Sc ? (e) => Sc.createHTML(e) : (e) => e, E1 = "http://www.w3.org/2000/svg", T1 = "http://www.w3.org/1998/Math/MathML", Lr = typeof document < "u" ? document : null, Ad = Lr && /* @__PURE__ */ Lr.createElement("template"), F1 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Lr.createElementNS(E1, e) : t === "mathml" ? Lr.createElementNS(T1, e) : n ? Lr.createElement(e, { is: n }) : Lr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Lr.createTextNode(e),
  createComment: (e) => Lr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const c = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Ad.innerHTML = Qp(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Ad.content;
      if (r === "svg" || r === "mathml") {
        const d = f.firstChild;
        for (; d.firstChild; )
          f.appendChild(d.firstChild);
        f.removeChild(d);
      }
      t.insertBefore(f, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, D1 = /* @__PURE__ */ Symbol("_vtc");
function L1(e, t, n) {
  const r = e[D1];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ms = /* @__PURE__ */ Symbol("_vod"), em = /* @__PURE__ */ Symbol("_vsh"), sa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ms] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Eo(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Eo(e, !0), r.enter(e)) : r.leave(e, () => {
      Eo(e, !1);
    }) : Eo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Eo(e, t);
  }
};
function Eo(e, t) {
  e.style.display = t ? e[ms] : "none", e[em] = !t;
}
const R1 = /* @__PURE__ */ Symbol(""), V1 = /(?:^|;)\s*display\s*:/;
function $1(e, t, n) {
  const r = e.style, o = Ot(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Ot(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && qa(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && qa(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), qa(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[R1];
      c && (n += ";" + c), r.cssText = n, a = V1.test(n);
    }
  } else t && e.removeAttribute("style");
  ms in e && (e[ms] = a ? r.display : "", e[em] && (r.display = "none"));
}
const Cd = /\s*!important$/;
function qa(e, t, n) {
  if (Ke(n))
    n.forEach((r) => qa(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = z1(e, t);
    Cd.test(n) ? e.setProperty(
      Mi(r),
      n.replace(Cd, ""),
      "important"
    ) : e[r] = n;
  }
}
const Id = ["Webkit", "Moz", "ms"], Gl = {};
function z1(e, t) {
  const n = Gl[t];
  if (n)
    return n;
  let r = _n(t);
  if (r !== "filter" && r in e)
    return Gl[t] = r;
  r = Ls(r);
  for (let o = 0; o < Id.length; o++) {
    const a = Id[o] + r;
    if (a in e)
      return Gl[t] = a;
  }
  return t;
}
const Od = "http://www.w3.org/1999/xlink";
function Ed(e, t, n, r, o, a = Bb(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Od, t.slice(6, t.length)) : e.setAttributeNS(Od, t, n) : n == null || a && !ep(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : wr(n) ? String(n) : n
  );
}
function Td(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qp(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const f = a === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ep(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function qi(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function j1(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fd = /* @__PURE__ */ Symbol("_vei");
function H1(e, t, n, r, o = null) {
  const a = e[Fd] || (e[Fd] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [f, d] = G1(t);
    if (r) {
      const y = a[t] = W1(
        r,
        o
      );
      qi(e, f, y, d);
    } else c && (j1(e, f, c, d), a[t] = void 0);
  }
}
const Dd = /(?:Once|Passive|Capture)$/;
function G1(e) {
  let t;
  if (Dd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Dd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Mi(e.slice(2)), t];
}
let Kl = 0;
const K1 = /* @__PURE__ */ Promise.resolve(), B1 = () => Kl || (K1.then(() => Kl = 0), Kl = Date.now());
function W1(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Sr(
      U1(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = B1(), n;
}
function U1(e, t) {
  if (Ke(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Ld = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Y1 = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? L1(e, r, c) : t === "style" ? $1(e, n, r) : Ts(t) ? Fs(t) || H1(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : X1(e, t, r, c)) ? (Td(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ed(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (q1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ot(r))) ? Td(e, _n(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ed(e, t, r, c));
};
function X1(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ld(t) && We(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ld(t) && Ot(n) ? !1 : t in e;
}
function q1(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = _n(t);
  return Array.isArray(n) ? n.some((o) => _n(o) === r) : Object.keys(n).some((o) => _n(o) === r);
}
const Rd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ke(t) ? (n) => Ua(t, n) : t;
};
function J1(e) {
  e.target.composing = !0;
}
function Vd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Bl = /* @__PURE__ */ Symbol("_assign");
function $d(e, t, n) {
  return t && (e = e.trim()), n && (e = Jc(e)), e;
}
const zd = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Bl] = Rd(o);
    const a = r || o.props && o.props.type === "number";
    qi(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Bl]($d(e.value, n, a));
    }), (n || a) && qi(e, "change", () => {
      e.value = $d(e.value, n, a);
    }), t || (qi(e, "compositionstart", J1), qi(e, "compositionend", Vd), qi(e, "change", Vd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Bl] = Rd(c), e.composing) return;
    const f = (a || e.type === "number") && !/^0\d/.test(e.value) ? Jc(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const y = e.getRootNode();
    (y instanceof Document || y instanceof ShadowRoot) && y.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Z1 = ["ctrl", "shift", "alt", "meta"], Q1 = {
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
  exact: (e, t) => Z1.some((n) => e[`${n}Key`] && !t.includes(n))
}, Vn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const f = Q1[t[c]];
      if (f && f(o, t)) return;
    }
    return e(o, ...a);
  }));
}, ev = /* @__PURE__ */ dn({ patchProp: Y1 }, F1);
let jd;
function tv() {
  return jd || (jd = d1(ev));
}
const hu = ((...e) => {
  const t = tv().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = rv(r);
    if (!o) return;
    const a = t._component;
    !We(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, nv(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function nv(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rv(e) {
  return Ot(e) ? document.querySelector(e) : e;
}
function Ji(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function iv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Hd(e, t = 8) {
  var b;
  const n = (b = e == null ? void 0 : e.getContext) == null ? void 0 : b.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, f = o, d = -1, y = -1;
  for (let w = 0; w < o; w += 1)
    for (let x = 0; x < r; x += 1)
      a[(w * r + x) * 4 + 3] <= t || (x < c && (c = x), w < f && (f = w), x > d && (d = x), w > y && (y = w));
  return d < c || y < f ? null : {
    minX: c,
    minY: f,
    maxX: d,
    maxY: y,
    width: d - c + 1,
    height: y - f + 1,
    aspect: Number(((d - c + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function pu(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Rr(e, t, n) {
  if (!e) return Ji(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Nt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Wl = null, Ul = null, Gd = null, Kd = null, Ct = null, To = null, bn = null, Zr = null;
function ov() {
  if (Ul) return Ul;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Ul = n, n;
}
function Yl(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Wl = Rr(Wl, n, r);
  const o = Wl;
  Nt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Kd !== o.ctx && (Gd = o.ctx.createPattern(ov(), "repeat"), Kd = o.ctx), o.ctx.fillStyle = Gd, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function av(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function sv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function lv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function cv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Pt = /* @__PURE__ */ new Map(), mu = 128;
function uv(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${c}:${f.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Pt.has(d)) {
    const A = Pt.get(d);
    return Pt.delete(d), Pt.set(d, A), A;
  }
  Pt.size >= mu && Pt.delete(Pt.keys().next().value);
  const y = c * 2 + 2, b = c + 1, w = pu(y, y), x = w.getContext("2d"), N = f * c, _ = c + 1, T = `rgba(${n},${r},${o},${a})`, V = `rgba(${n},${r},${o},0)`, $ = x.createRadialGradient(b, b, N, b, b, _);
  return $.addColorStop(0, T), $.addColorStop(1, V), x.fillStyle = $, x.fillRect(0, 0, y, y), Pt.set(d, w), w;
}
function fv(e, t, n, r, o, a, c) {
  const { r: f, g: d, b: y, a: b } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), _ = Math.max(0, Math.min(0.99, a)), T = Math.max(0, Math.min(1, c ?? 0)), V = `chisel:${w}:${x}:${n.toFixed(2)}:${f}:${d}:${y}:${b.toFixed(3)}:${N.toFixed(2)}:${_.toFixed(2)}:${T.toFixed(2)}`;
  if (Pt.has(V)) {
    const j = Pt.get(V);
    return Pt.delete(V), Pt.set(V, j), j;
  }
  Pt.size >= mu && Pt.delete(Pt.keys().next().value);
  const $ = pu(w, x), A = $.getContext("2d"), X = A.createImageData(w, x), O = X.data, L = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), q = 1 + N;
  for (let j = 0; j < x; j++)
    for (let Q = 0; Q < w; Q++) {
      const P = Q + 0.5 - e, W = j + 0.5 - t, ae = Math.max(Math.abs(P) - L, 0), Z = Math.hypot(ae, W) / t;
      if (Z >= 1) continue;
      const ce = Z <= R ? 1 : Math.max(0, (1 - Z) / Math.max(1e-4, 1 - R)), Se = 1 - Z, C = 1 + N * (1 - Se) * (1 - Se), _e = 1 - _ * Se * Se, G = C * _e / q;
      let Ee = 1;
      if (T > 0) {
        const pt = Math.floor((W + t) / 1.5), it = Math.floor((P + e) / 8), mt = xi(oo(pt * 41 + 500, it * 19 + 300));
        Ee = 1 - T * 0.42 * mt;
      }
      const Re = Math.round(255 * Math.min(1, b * ce * G * Ee));
      if (Re <= 0) continue;
      const Ze = (j * w + Q) * 4;
      O[Ze] = f, O[Ze + 1] = d, O[Ze + 2] = y, O[Ze + 3] = Re;
    }
  return A.putImageData(X, 0, 0), Pt.set(V, $), $;
}
function oo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function xi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function dv(e, t, n, r, o, a, c) {
  const f = e + 0.5 - n, d = t + 0.5 - r, y = Math.max(0, n - r), b = Math.max(Math.abs(f) - y, 0), w = Math.hypot(b, d) / r;
  if (w >= 1) return 0;
  const x = xi(oo(e * 17 + 3, t * 13 + 7)), N = w + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const _ = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), T = hv(e, t, f, d, n, r), V = a * 0.55;
  if (T < V) return 0;
  const A = 0.45 + 0.55 * ((T - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, c * _ * A));
}
function hv(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), f = Math.floor((r + a) / 2), d = xi(oo(c * 13 + 700, f * 17 + 400)), y = Math.floor((n + o) / 1.5), b = Math.floor((r + a) / 1.5), w = xi(oo(y * 23 + 800, b * 29 + 500)), x = xi(oo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function pv(e, t, n, r, o) {
  const { r: a, g: c, b: f, a: d } = r, y = Math.max(2, Math.ceil(e) * 2), b = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${y}:${b}:${n.toFixed(2)}:${a}:${c}:${f}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Pt.has(x)) {
    const A = Pt.get(x);
    return Pt.delete(x), Pt.set(x, A), A;
  }
  Pt.size >= mu && Pt.delete(Pt.keys().next().value);
  const N = pu(y, b), _ = N.getContext("2d"), T = _.createImageData(y, b), V = T.data, $ = Math.max(0, Math.min(1, n));
  for (let A = 0; A < b; A++)
    for (let X = 0; X < y; X++) {
      const O = dv(X, A, e, t, $, w, d);
      if (O <= 0) continue;
      const L = (A * y + X) * 4;
      V[L] = a, V[L + 1] = c, V[L + 2] = f, V[L + 3] = O;
    }
  return _.putImageData(T, 0, 0), Pt.set(x, N), N;
}
function tm(e, t, n) {
  var T, V;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = lv(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = mv(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((T = t == null ? void 0 : t.angle) == null ? void 0 : T.value) ?? 0), y = cv(t, o), b = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && b !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let _;
  if (r === "chisel") {
    const $ = o * f, A = o, X = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = fv($, A, a, c, X, O, L);
  } else if (r === "crayon") {
    const $ = o * f, A = o, X = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = pv($, A, a, c, X);
  } else
    _ = uv(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: _, radiusPx: o, spacingPx: y, desc: n, aspect: f, angle: d, stampKind: r, scatter: N, latitudeCorrection: w };
}
function mv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), a = Math.max(0, Math.min(1, Number(r.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a
  };
}
function gv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Bd(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function f(y, b) {
    a === 0 ? e.ctx.drawImage(e.stampTex, y - o, b - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(y, b), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && f(t + c, n), t + d > c && f(t - c, n);
}
function gu(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: y, count: b } = e.scatter, w = y * e.radiusPx * o, x = oo(t, n);
    for (let N = 0; N < b; N++) {
      const _ = xi(x + N * 2) * Math.PI * 2, T = Math.sqrt(xi(x + N * 2 + 1)) * w, V = t + Math.cos(_) * T, $ = n + Math.sin(_) * T, A = Math.max(0.5, e.radiusPx * o * 0.48), X = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, O = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(X)) : 1, L = A * e.aspect * O;
      Bd(e, V, $, A, L);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * f;
  Bd(e, t, n, a, d);
}
function Wd(e, t, n) {
  const r = sv(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = tm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const _ = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - f[x - 1].x) > o * 0.5 && (N += N < f[x - 1].x ? o : -o), f.push({ x: N, y: _ });
  }
  if (gu(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], y = f[0], b = f[0], w = 0;
  for (let x = 1; x < f.length; x++) {
    const N = f[x], _ = { x: (y.x + N.x) * 0.5, y: (y.y + N.y) * 0.5 };
    x === 1 ? w = ea(c, b.x, b.y, _.x, _.y, w) : w = gs(c, d, b, _, N, w), d = y, y = N, b = _;
  }
  f.length === 2 ? ea(c, b.x, b.y, y.x, y.y, w) : gs(c, d, b, y, y, w), e.restore();
}
function Ja(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = gv(t), f = [];
  let d = 1 / 0, y = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = av(r[x]);
    let _ = Number(N.x || 0) * o;
    x > 0 && Math.abs(_ - f[x - 1].x) > o * 0.5 && (_ += _ < f[x - 1].x ? o : -o), f.push({ x: _, y: Number(N.y || 0) * a }), _ < d && (d = _), _ > y && (y = _);
  }
  function b(x) {
    e.beginPath(), e.moveTo(f[0].x + x, f[0].y);
    for (let N = 1; N < f.length; N++) e.lineTo(f[N].x + x, f[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, b(0), d < 0 && b(o), y > o && b(-o), e.restore();
}
function Ca(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Ja(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Wd(e, t, n) : (To = Rr(To, n.width, n.height), Nt(To), Wd(To.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(To.canvas, 0, 0), e.restore());
}
function di(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ea(e, t, n, r, o, a) {
  const c = r - t, f = o - n, d = Math.hypot(c, f);
  if (d < 1e-9) return a;
  let y = e.spacingPx - a;
  for (; y <= d; ) {
    const b = y / d;
    gu(e, t + c * b, n + f * b, 1), y += e.spacingPx;
  }
  return d - y + e.spacingPx;
}
function gs(e, t, n, r, o, a) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, b = 0, w = f, x = w + d, N = x + y, _ = x - w, T = 16;
  let V = a, $ = n.x, A = n.y;
  for (let X = 1; X <= T; X++) {
    const O = w + _ * X / T, L = ((w - O) * t.x + (O - b) * n.x) / (w - b), R = ((w - O) * t.y + (O - b) * n.y) / (w - b), q = ((x - O) * n.x + (O - w) * r.x) / (x - w), j = ((x - O) * n.y + (O - w) * r.y) / (x - w), Q = ((N - O) * r.x + (O - x) * o.x) / (N - x), P = ((N - O) * r.y + (O - x) * o.y) / (N - x), W = ((x - O) * L + (O - b) * q) / (x - b), ae = ((x - O) * R + (O - b) * j) / (x - b), re = ((N - O) * q + (O - w) * Q) / (N - w), Z = ((N - O) * j + (O - w) * P) / (N - w), ce = ((x - O) * W + (O - w) * re) / (x - w), Se = ((x - O) * ae + (O - w) * Z) / (x - w);
    V = ea(e, $, A, ce, Se, V), $ = ce, A = Se;
  }
  return V;
}
function bv(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, f = n * a.height, d = e.activeStroke;
  let y = t * c;
  if (d && Math.abs(y - d.prev.x) > c * 0.5 && (y += y < d.prev.x ? c : -c), !d) {
    const N = tm(o, r, a), _ = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), T = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), V = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", gu(N, y, f, 1), e.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: _,
      velocityWidthFactor: T,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const b = (d.prev.x + y) * 0.5, w = (d.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const x = {
    ctx: o,
    stampTex: d.stampTex,
    radiusPx: d.radiusPx,
    spacingPx: d.spacingPx,
    desc: a,
    aspect: d.aspect,
    angle: d.angle,
    stampKind: d.stampKind,
    scatter: d.scatter,
    latitudeCorrection: d.latitudeCorrection
  };
  d.pointCount === 1 ? d.distSinceStamp = ea(x, d.lastMidX, d.lastMidY, b, w, d.distSinceStamp) : d.distSinceStamp = gs(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: b, y: w },
    { x: y, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: y, y: f }, d.lastMidX = b, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function kc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Ji(t, n), c = {
    descriptor: r,
    committedMask: Ji(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Ji(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Ji(t, n);
  let y = null, b = "", w = null;
  function x(P) {
    return {
      actionGroupId: P,
      descriptor: r,
      committedPaint: Ji(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(P) {
    let W = o.get(P);
    return W || (W = x(P), o.set(P, W)), W;
  }
  function _(P) {
    return b === "mask" ? c : y ? N(y) : f;
  }
  function T(P) {
    var Se;
    const W = !w || w.length !== P.length || P.some((C, _e) => C !== w[_e]), ae = b === "paint" && ((Se = y ? o.get(y) : f) == null ? void 0 : Se.activeStroke) || null;
    let re = c.displayDirty || f.displayDirty || W;
    for (const C of P) {
      const _e = o.get(C);
      if (_e != null && _e.displayDirty) {
        re = !0;
        break;
      }
    }
    if (ae && (re = !0), !re) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const C of P) {
      const _e = o.get(C);
      _e && (_e.displayDirty = !1);
    }
    w = [...P];
    const Z = d.ctx;
    Nt(d);
    const ce = !!(ae != null && ae.isEraser);
    for (const C of P) {
      const _e = o.get(C);
      if (!_e) continue;
      const Ee = y === _e.actionGroupId && b === "paint" ? _e.activeStroke : null;
      if (ce)
        Ct = Rr(Ct, t, n), Nt(Ct), Ct.ctx.drawImage(_e.committedPaint.canvas, 0, 0), di(Ct.ctx, a.canvas), Z.drawImage(Ct.canvas, 0, 0);
      else if (Z.drawImage(_e.committedPaint.canvas, 0, 0), Ee) {
        const Re = _e.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ee.strokeOpacity ?? 1));
        Z.save(), Z.globalAlpha = Re, Z.drawImage(a.canvas, 0, 0), Z.restore();
      }
    }
  }
  function V(P) {
    var ae, re, Z, ce, Se;
    for (const C of o.values())
      Nt(C.committedPaint), Nt(C.currentStroke), C.activeStroke = null, C.displayDirty = !0;
    Nt(c.committedMask), Nt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, w = null;
    const W = [
      ...Array.isArray((re = (ae = P == null ? void 0 : P.painting) == null ? void 0 : ae.paint) == null ? void 0 : re.strokes) ? P.painting.paint.strokes : [],
      ...Array.isArray((ce = (Z = P == null ? void 0 : P.painting) == null ? void 0 : Z.mask) == null ? void 0 : ce.strokes) ? P.painting.mask.strokes : []
    ];
    for (const C of W) {
      if (((Se = C == null ? void 0 : C.targetSpace) == null ? void 0 : Se.kind) !== "ERP_GLOBAL") continue;
      const _e = String((C == null ? void 0 : C.layerKind) || "paint"), Ee = String((C == null ? void 0 : C.toolKind) || "pen") === "eraser";
      if (_e === "mask") {
        const Re = c.descriptor;
        Ee ? (Ct = Rr(Ct, Re.width, Re.height), Nt(Ct), Ca(Ct.ctx, C, Re), di(c.committedMask.ctx, Ct.canvas)) : Ca(c.committedMask.ctx, C, Re);
        continue;
      }
      if (Ee) {
        Ct = Rr(Ct, r.width, r.height), Nt(Ct), Ca(Ct.ctx, C, r);
        for (const Re of o.values())
          di(Re.committedPaint.ctx, Ct.canvas), Re.displayDirty = !0;
      } else {
        const Re = String((C == null ? void 0 : C.actionGroupId) || "__default__"), Ze = N(Re), pt = Ze.descriptor;
        Ca(Ze.committedPaint.ctx, C, pt), Ze.displayDirty = !0;
      }
    }
    T([...o.keys()]);
  }
  function $(P, W) {
    b = String((P == null ? void 0 : P.layerKind) || "");
    const ae = String((P == null ? void 0 : P.toolKind) || "") === "eraser";
    if (b === "mask")
      y = null, Nt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const re = ae ? f : N(String((P == null ? void 0 : P.actionGroupId) || "__default__"));
      y = ae ? "" : String((P == null ? void 0 : P.actionGroupId) || "__default__"), Nt(re.currentStroke), re.activeStroke = null, re.displayDirty = !0;
    }
  }
  function A(P, W) {
    var _e;
    const ae = String((P == null ? void 0 : P.layerKind) || "paint"), re = String((P == null ? void 0 : P.toolKind) || "") === "eraser", Z = ae === "mask" ? c : re ? f : N(String((P == null ? void 0 : P.actionGroupId) || y || "__default__")), ce = Z.activeStroke, Se = Z.descriptor;
    if (ce && ce.pointCount > 1) {
      const G = Z.currentStroke.ctx;
      G.globalCompositeOperation = "source-over";
      const Ee = {
        ctx: G,
        stampTex: ce.stampTex,
        radiusPx: ce.radiusPx,
        spacingPx: ce.spacingPx,
        desc: Se,
        aspect: ce.aspect,
        angle: ce.angle,
        stampKind: ce.stampKind,
        scatter: ce.scatter,
        latitudeCorrection: ce.latitudeCorrection
      };
      ce.pointCount === 2 ? ea(Ee, ce.lastMidX, ce.lastMidY, ce.prev.x, ce.prev.y, ce.distSinceStamp) : gs(Ee, ce.pprev, { x: ce.lastMidX, y: ce.lastMidY }, ce.prev, ce.prev, ce.distSinceStamp);
    }
    Z.lassoPreviewActive && (Nt(Z.currentStroke), Ja(Z.currentStroke.ctx, P, Se), Z.lassoPreviewActive = !1);
    const C = ae === "mask" ? c.committedMask : Z.committedPaint;
    if (re && ae === "paint")
      for (const G of o.values())
        di(G.committedPaint.ctx, Z.currentStroke.canvas), G.displayDirty = !0;
    else if (re)
      di(C.ctx, Z.currentStroke.canvas);
    else {
      const G = Math.max(0, Math.min(1, (ce == null ? void 0 : ce.strokeOpacity) ?? 1));
      C.ctx.save(), C.ctx.globalAlpha = G, C.ctx.drawImage(Z.currentStroke.canvas, 0, 0), C.ctx.restore();
    }
    iv() && (String((P == null ? void 0 : P.toolKind) || ""), String((Se == null ? void 0 : Se.kind) || ""), Number((Se == null ? void 0 : Se.width) || 0), Number((Se == null ? void 0 : Se.height) || 0), String(((_e = P == null ? void 0 : P.targetSpace) == null ? void 0 : _e.viewMode) || ""), Number((P == null ? void 0 : P.aspect) ?? 1), Hd(Z.currentStroke.canvas), Hd(C.canvas), void 0), Nt(Z.currentStroke), Z.activeStroke = null, Z.displayDirty = !0, y = null, b = "", T([...o.keys()]);
  }
  function X(P) {
    if (b === "mask")
      Nt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (b === "paint" && !y)
      Nt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const W = o.get(y);
      W && (Nt(W.currentStroke), W.activeStroke = null, W.lassoPreviewActive = !1, W.displayDirty = !0);
    }
    y = null, b = "", T([...o.keys()]);
  }
  function O(P, W) {
    var re;
    if (b = String((P == null ? void 0 : P.layerKind) || ""), String(((re = P == null ? void 0 : P.geometry) == null ? void 0 : re.geometryKind) || "") === "lasso_fill") {
      if (b === "mask")
        Nt(c.currentStroke), Ja(c.currentStroke.ctx, P, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const Z = String((P == null ? void 0 : P.toolKind) || "") === "eraser", ce = Z ? f : N(String((P == null ? void 0 : P.actionGroupId) || y || "__default__"));
        y = Z ? "" : String((P == null ? void 0 : P.actionGroupId) || y || "__default__"), Nt(ce.currentStroke), Ja(ce.currentStroke.ctx, P, ce.descriptor), ce.lassoPreviewActive = !0, ce.displayDirty = !0;
      }
      T([...o.keys()]);
    }
  }
  function L(P) {
    return T(P ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function R(P) {
    return o.get(String(P)) ?? null;
  }
  function q() {
    return [...o.keys()];
  }
  function j(P) {
    var Se;
    const W = o.get(String(P));
    if (!W) return null;
    const ae = b === "paint" && y === W.actionGroupId, re = b === "paint" && ((Se = y ? o.get(y) : f) == null ? void 0 : Se.activeStroke) || null;
    if (re != null && re.isEraser)
      return bn = Rr(bn, t, n), Nt(bn), bn.ctx.drawImage(W.committedPaint.canvas, 0, 0), di(bn.ctx, a.canvas), bn.canvas;
    const Z = ae ? W.activeStroke : null;
    if (!Z) return W.committedPaint.canvas;
    bn = Rr(bn, t, n), Nt(bn), bn.ctx.drawImage(W.committedPaint.canvas, 0, 0);
    const ce = W.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Z.strokeOpacity ?? 1));
    return bn.ctx.save(), bn.ctx.globalAlpha = ce, bn.ctx.drawImage(a.canvas, 0, 0), bn.ctx.restore(), bn.canvas;
  }
  function Q() {
    return Zr = Rr(Zr, t, n), Nt(Zr), Yl(Zr.ctx, c.committedMask.canvas), b === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Ct = Rr(Ct, t, n), Nt(Ct), Ct.ctx.drawImage(c.committedMask.canvas, 0, 0), di(Ct.ctx, a.canvas), Nt(Zr), Yl(Zr.ctx, Ct.canvas)) : Yl(Zr.ctx, a.canvas)), Zr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: $,
    appendStrokePoint: bv,
    updateActiveStroke: O,
    commitActiveStroke: A,
    cancelActiveStroke: X,
    getErpTarget: L,
    ensureTarget: _,
    getGroupTarget: R,
    getGroupDisplayCanvas: j,
    getMaskDisplayCanvas: Q,
    getAllGroupIds: q
  };
}
function K(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Rt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function yv(e, t) {
  let n = Rt(t) - Rt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Mc = 3;
function Fo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function bu(e, t = 0) {
  const n = Fo(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Fo(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Fo(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Fo(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Fo(t) || 0);
}
function nm(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var n;
    return (n = e.focus) == null ? void 0 : n.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var n;
    return (n = e.removeEventListener) == null ? void 0 : n.call(e, "pointerenter", t);
  };
}
const Ud = Math.PI / 180, Yd = 0.12, vv = Mc, _v = 35, xv = 140, $o = 100, wv = 20, Xd = 0.8;
function Sv(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = K(Number(e || $o), 1, 179) * Ud;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Ud;
}
function yu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: $o })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(A, X = null) {
    f && f(A, X);
  }
  function b(A, X, O = null, L = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(A || 0), d.drag.lastY = Number(X || 0), d.drag.lastTs = Number(L || performance.now()), d.drag.pointerId = O, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], y("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: O }), !0;
  }
  function w(A, X, O = "pano", L = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(L || performance.now()), q = Number(A), j = Number(X), Q = q - d.drag.lastX, P = j - d.drag.lastY;
    d.drag.lastX = q, d.drag.lastY = j, d.drag.lastTs = R;
    const W = r() || { x: 1, y: 1 }, ae = Number(W.x || 1), re = Number(W.y || 1), Z = { ...t() };
    let ce = 0, Se = 0;
    if (O === "unwrap") {
      const _e = o() || { w: 1, h: 1 }, G = Math.max(1, Number(_e.w || 1)), Ee = Math.max(1, Number(_e.h || 1)), Re = Q / G, Ze = P / Ee;
      ce = -Re * 360 * ae, Se = Ze * 180 * re;
    } else {
      const _e = a() || { w: 0, h: 0 }, G = Math.max(1, Number(_e.w || 0)), Ee = Math.max(1, Number(_e.h || 0));
      if (G > 1 && Ee > 1) {
        const Re = K(Number(Z.fov || $o), 1, 179), Ze = K(Sv(Re, G, Ee), 0.1, 179);
        ce = -(Q / G) * Re * ae, Se = P / Ee * Ze * re;
      } else
        ce = -Q * Yd * ae, Se = P * Yd * re;
    }
    Z.yaw = Rt(Number(Z.yaw || 0) + ce), Z.pitch = K(Number(Z.pitch || 0) + Se, -89.9, 89.9), n(Z), d.velHistory.push({ ts: R, yaw: Z.yaw, pitch: Z.pitch });
    let C = 0;
    for (; C < d.velHistory.length - 1 && d.velHistory[C].ts < R - 100; ) C++;
    return C > 0 && d.velHistory.splice(0, C), d.inertia.active = !1, d.inertia.lastTs = R, c(), y("drag", { phase: "move", dx: Q, dy: P, dYaw: ce, dPitch: Se }), !0;
  }
  function x(A = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const X = Number(A || performance.now());
    d.drag.lastTs = X;
    const O = d.velHistory.filter((R) => X - R.ts <= 80);
    if (O.length >= 2) {
      const R = O[0], q = O.at(-1), j = Math.max(1e-3, (q.ts - R.ts) / 1e3);
      let Q = q.yaw - R.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), d.inertia.vx = Q / j, d.inertia.vy = (q.pitch - R.pitch) / j;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const L = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = L > wv, d.inertia.lastTs = X, y("drag", { phase: "end", speed: L, inertiaActive: d.inertia.active }), !0;
  }
  function N(A = performance.now()) {
    if (!d.inertia.active) return !1;
    const X = Number(A || performance.now()), O = Math.max(1e-3, (X - (d.inertia.lastTs || X)) / 1e3);
    d.inertia.lastTs = X;
    const L = { ...t() };
    L.yaw = Rt(Number(L.yaw || 0) + d.inertia.vx * O), L.pitch = K(Number(L.pitch || 0) + d.inertia.vy * O, -89.9, 89.9);
    const R = Math.exp(-5.5 * O);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < Xd && Math.abs(d.inertia.vy) < Xd && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(L), c(), d.inertia.active;
  }
  function _() {
    const A = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], A;
  }
  function T(A) {
    const X = Math.sign(Number(A || 0));
    if (!X) return !1;
    const O = { ...t() }, L = Number(O.fov || $o);
    return O.fov = K(L + X * vv, _v, xv), n(O), c(), y("wheel", { deltaSign: X, fovBefore: L, fovAfter: O.fov }), !0;
  }
  function V(A, X = 0) {
    return T(bu(A, X));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: $o }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: b,
    moveDrag: w,
    endDrag: x,
    stepInertia: N,
    stopMotion: _,
    applyWheel: T,
    applyWheelEvent: V,
    resetView: $
  };
}
const Jt = Math.PI / 180, xn = 180 / Math.PI;
function Un(e, t, n) {
  return { x: e, y: t, z: n };
}
function bs(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ys(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function Xl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function vu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function Cn(e, t) {
  const n = e * Jt, r = t * Jt, o = Math.cos(r);
  return Un(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function go(e, t, n = 0) {
  const r = Number(e || 0) * Jt, o = Number(t || 0) * Jt, a = n * Jt, c = Math.cos(r), f = Math.sin(r), d = Math.cos(o), y = Math.sin(o), b = Math.cos(a), w = Math.sin(a);
  return {
    right: Un(
      c * b - f * y * w,
      d * w,
      -f * b - c * y * w
    ),
    up: Un(
      -c * w - f * y * b,
      d * b,
      f * w - c * y * b
    ),
    fwd: Un(f * d, y, c * d)
  };
}
function vs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function dt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function kv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Mv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = dt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(a ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function Nv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Pv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = dt(e.t, 0), r = dt(e.widthScale, null), o = dt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = dt(e.u, null), c = dt(e.v, null);
    if (a == null || c == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = dt(e.u, null), c = dt(e.v, null);
    if (a == null || c == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: c,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  return null;
}
function Ia(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Pv(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Av(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Ia(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Ia(e.points, t, 1);
  if (!a) return null;
  const c = Ia(e.rawPoints, t, 1), f = Ia(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: f || a.map((d) => ({ ...d }))
  };
}
function Cv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Nv(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Av(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = dt(e.size, null), c = dt(e.opacity, null);
  if (a == null || c == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const y = dt(e.radiusValue, null), b = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, dt(x.r, 0))),
      g: Math.max(0, Math.min(1, dt(x.g, 0))),
      b: Math.max(0, Math.min(1, dt(x.b, 0))),
      a: Math.max(0, Math.min(1, dt(x.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: dt(e.hardness, null),
    flow: dt(e.flow, null),
    spacing: dt(e.spacing, null),
    createdAt: Math.trunc(dt(e.createdAt, 0)),
    color: w,
    radiusModel: b,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: o
  };
}
function qd(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Cv(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Iv(e) {
  if (!e || typeof e != "object") return null;
  const t = dt(e.u0, null), n = dt(e.v0, null), r = dt(e.u1, null), o = dt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (f) => Math.max(0, Math.min(1, f)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Ov(e) {
  const t = e || {};
  return {
    du: dt(t.du, 0) ?? 0,
    dv: dt(t.dv, 0) ?? 0,
    rot_deg: dt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, dt(t.scale, 1) ?? 1)
  };
}
function Ev(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Iv(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, dt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Ov(e.transform)
  } : null;
}
function Tv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Ev(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ao(e) {
  const t = kv();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Mv(e.groups),
    paint: qd(e.paint, "paint"),
    mask: qd(e.mask, "mask"),
    raster_objects: Tv(e.raster_objects)
  };
}
const kr = 1, Mr = 179, Nc = 85;
function Bs(e) {
  const t = ((Ue(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function rm(e, t) {
  let n = Ue(e, 0) - Ue(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function im(e, t, { shiftKey: n = !1 } = {}) {
  let r = Ue(e, 0) + Ue(t, 0) * xn;
  return n && (r = Math.round(r / 15) * 15), Bs(r);
}
function Ue(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Wr(e = {}) {
  const t = K(Ue(e.hFOV_deg || 90, 90), kr, Mr), n = K(Ue(e.vFOV_deg || 60, 60), kr, Mr), r = Math.tan(t * Jt * 0.5), o = Math.tan(n * Jt * 0.5);
  return {
    yawDeg: Ue(e.yaw_deg, 0),
    pitchDeg: Ue(e.pitch_deg, 0),
    rollDeg: Ue(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function wi(e, t) {
  const n = Math.max(1, Ue((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ue((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Wr(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function _u(e, t) {
  const n = Math.max(1, Ue((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Ue((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Ue(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function xu(e, t) {
  const n = Math.max(1e-12, Ue(t, 1)), r = Math.max(1e-6, Ue((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Ue((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = K(2 * Math.atan(r / (2 * n)) * xn, kr, Mr), c = K(2 * Math.atan(o / (2 * n)) * xn, kr, Mr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Fv(e, t, n) {
  const r = Ue(e == null ? void 0 : e.x, 0), o = Ue(e == null ? void 0 : e.y, 0), a = Math.max(1, Ue((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Ue((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Wr(t), d = Math.max(1e-12, Ue(n, 1)), y = 2 * d * f.tanHalfX, b = 2 * d * f.tanHalfY;
  return {
    x: r + (a - y) * 0.5,
    y: o + (c - b) * 0.5,
    w: y,
    h: b,
    focalPx: d
  };
}
function wu(e, t, n = Nc) {
  const r = Math.max(1e-12, Ue(t, 1)), o = K(Ue(n, Nc), 1, 89.999), a = r * Math.tan(o * Jt), c = Math.max(1, Ue((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Ue((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(f * 0.5, a)
  };
}
function om(e, t, n) {
  const r = Math.max(1e-12, Ue(t, 1));
  return {
    x: (Ue(n == null ? void 0 : n.x, 0) - Ue(e == null ? void 0 : e.x, 0)) / r,
    y: -(Ue(n == null ? void 0 : n.y, 0) - Ue(e == null ? void 0 : e.y, 0)) / r
  };
}
function Za(e, t) {
  const n = K(Ue(e, 60), kr, Mr), r = Math.max(1e-6, Ue(t, 1));
  return K(
    2 * Math.atan(Math.tan(n * Jt * 0.5) * r) * xn,
    kr,
    Mr
  );
}
function Jd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Dv(e, t) {
  const n = Jd(e, 1), r = Jd(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), f = (y, b) => b ? f(b, y % b) : y, d = f(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Si(e) {
  const t = K(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Jt, n = K(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Jt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function mi(e) {
  const t = Si(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Dv(t, 1);
}
function am(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = mi(t), t;
}
function sm({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), f = Number.isFinite(c) ? K(c, kr, Mr) : K(Math.min(42, Ue(o, 100) * 0.42), 8, 96);
  return am({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Ue(t, 0),
    pitch_deg: K(Ue(n, 0), -89.9, 89.9),
    roll_deg: Bs(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Vr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : mi(e);
}
function lm(e, t) {
  const n = Wr(e), r = Ue(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * xn, a = 2 * Math.atan(n.tanHalfY * r) * xn;
  return o < kr || o > Mr || a < kr || a > Mr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function cm(e, t, n = Mc) {
  const r = Math.sign(Ue(t, 0)), o = Math.abs(Ue(n, Mc));
  if (!r || !(o > 0)) return null;
  const a = Wr(e), c = a.hFovDeg + r * o;
  if (c < kr || c > Mr) return null;
  const f = Math.tan(c * Jt * 0.5);
  return lm(e, f / a.tanHalfX);
}
function um(e, t) {
  const n = Wr(e), r = go(n.yawDeg, n.pitchDeg, n.rollDeg), o = Ue(t == null ? void 0 : t.x, 0), a = Ue(t == null ? void 0 : t.y, 0);
  return vu(bs(bs(r.fwd, ys(r.right, o)), ys(r.up, a)));
}
const Lv = 2, Rv = ["sky", "world"], Vv = ["input", "output", "temp"];
function Gt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function kt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Pc(e, t) {
  const n = kt(e, t);
  return n !== null && n > 0 ? n : t;
}
function Rn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function so(e) {
  const t = kt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Zd(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Su(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => kt(n, null));
  return t.includes(null) ? null : t;
}
function $v(e) {
  const t = Gt(e) ? e : {};
  return {
    position: Su(t.position) || [0, 0, 0],
    yaw_deg: kt(t.yaw_deg, 0),
    pitch_deg: Rn(kt(t.pitch_deg, 0), -90, 90),
    roll_deg: kt(t.roll_deg, 0),
    hFOV_deg: Rn(kt(t.hFOV_deg, 90), 0.1, 179)
  };
}
function fm(e) {
  const t = Gt(e) ? e : {};
  return {
    position: Su(t.position) || [0, 0, 0],
    yaw_deg: kt(t.yaw_deg, 0),
    pitch_deg: Rn(kt(t.pitch_deg, 0), -90, 90),
    roll_deg: kt(t.roll_deg, 0),
    scale: Pc(t.scale, 1)
  };
}
function zv(e) {
  const t = Gt(e) ? e : {};
  return {
    yaw_deg: kt(t.yaw_deg, 0),
    pitch_deg: Rn(kt(t.pitch_deg, 0), -90, 90),
    roll_deg: kt(t.roll_deg, 0),
    hFOV_deg: Rn(kt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Rn(kt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function jv(e) {
  return Rn(kt(e, 1), 0, 1);
}
function Hv(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => kt(n, null));
    if (!t.includes(null) && t[0] >= 0 && t[0] <= 1 && t[2] >= 0 && t[2] <= 1)
      return t;
  }
  return "auto";
}
function Gv(e) {
  if (!Gt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Su(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Kv(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!Gt(o)) continue;
    const a = so(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: Hv(o.easing) }, f = n ? Gv(o.handles) : null;
    f && (c.handles = f), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function _s(e, t, n) {
  const r = Gt(e) ? e : {};
  return {
    value: t(r.value),
    keyframes: Kv(r.keyframes, t, n)
  };
}
function dm(e) {
  const t = Gt(e) ? e : {}, n = so(t.start), r = so(t.in), o = so(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Bv(e) {
  const t = Gt(e) ? e : {}, n = Rn(kt(t.x0, 0), 0, 1), r = Rn(kt(t.y0, 0), 0, 1), o = Rn(kt(t.x1, 1), 0, 1), a = Rn(kt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function Wv(e) {
  if (!Gt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Vv.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Uv(e) {
  const t = Wv(e.source);
  if (!t) return null;
  const n = Rv.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: dm(e.clip),
    visible: Zd(e.visible, !0),
    locked: Zd(e.locked, !1),
    crop: Bv(e.crop),
    transform: _s(e.transform, r ? fm : zv, r),
    opacity: _s(e.opacity, jv, !1)
  };
  return r || (o.z_index = so(e.z_index) ?? 0), o;
}
function Yv(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = Gt(a) ? Uv(a) : null;
    if (c) {
      if (c.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(c);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const a of t)
    typeof a.id == "string" && a.id && !r.has(a.id) ? r.add(a.id) : a.id = null;
  let o = 1;
  for (const a of t)
    if (a.id === null) {
      for (; r.has(`sticker_${o}`); ) o += 1;
      a.id = `sticker_${o}`, r.add(a.id);
    }
  return t;
}
function Ac(e) {
  const t = Gt(e.timeline) ? e.timeline : {}, n = Gt(e.camera) ? e.camera : {}, r = Gt(e.scene) ? e.scene : {}, o = so(t.length);
  return {
    version: Lv,
    timeline: {
      fps: Pc(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: {
      aspect: Pc(n.aspect, 1),
      transform: _s(n.transform, $v, !0)
    },
    scene: {
      clip: dm(r.clip),
      transform: _s(r.transform, fm, !0)
    },
    stickers: Yv(e.stickers),
    painting: ao(e.painting),
    painting_layer: Gt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Xv(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Gt(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function qv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Gt(t)) return {};
  const n = Rn(kt(t.hFOV_deg, 90), 1, 179), r = Rn(kt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    transform: {
      value: {
        yaw_deg: t.yaw_deg,
        pitch_deg: t.pitch_deg,
        roll_deg: t.roll_deg,
        hFOV_deg: n
      }
    }
  };
}
function Jv(e) {
  const t = Gt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Gt) : [];
  return n.sort((r, o) => kt(r.z_index, 0) - kt(o.z_index, 0)), Ac({
    camera: qv(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Xv(r, t),
      visible: r.visible,
      locked: r.locked,
      crop: r.crop,
      z_index: r.z_index,
      transform: {
        value: {
          yaw_deg: r.yaw_deg,
          pitch_deg: r.pitch_deg,
          roll_deg: r.rot_deg,
          hFOV_deg: r.hFOV_deg,
          vFOV_deg: r.vFOV_deg
        }
      }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Cc(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ac({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Gt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Jv(t) : Ac(t);
}
let Oa = { text: null, parsed: null };
function Bn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ic(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Zv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Bn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ao(null),
    painting_layer: null,
    ui_settings: Ic(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Qv(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function e_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function t_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function n_(e) {
  return Array.isArray(e) ? e.map((t) => am(t)) : [];
}
function r_(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function ku(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Zv(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Oa.text === o ? a = Oa.parsed : (a = JSON.parse(o), Oa = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    a.version === 2 && (a = { ...i_(Cc(a)), active: n.active });
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: e_(a.assets),
      stickers: t_(a.stickers),
      shots: n_(a.shots),
      painting: ao(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Ic(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (f.ui_settings = Ic({ ...f.ui_settings, ...c })), f.output_preset = Qv(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Bn(n.coverage), delete f.editor_history, f;
  } catch {
    return Oa = { text: o, parsed: null }, r;
  }
}
function Qd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Mu(e) {
  return e.transform.keyframes.length > 0 || e.opacity.keyframes.length > 0;
}
function hm(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.scene_state) == null ? void 0 : r.stickers.find((o) => o.id === t);
  return !!n && Mu(n);
}
function i_(e) {
  const t = {}, n = [];
  for (const c of e.stickers) {
    if (c.placement !== "sky") continue;
    const { yaw_deg: f, pitch_deg: d, roll_deg: y, hFOV_deg: b, vFOV_deg: w } = c.transform.value, x = {
      id: c.id,
      yaw_deg: f,
      pitch_deg: d,
      hFOV_deg: b,
      vFOV_deg: w,
      rot_deg: y,
      z_index: c.z_index,
      visible: c.visible,
      locked: c.locked || Mu(c),
      crop: { ...c.crop }
    }, { source: N } = c;
    N.kind === "port" ? x.source_kind = "external_image" : (x.asset_id = c.id, t[c.id] = N.data_url ? { type: "dataurl", value: N.data_url } : { type: "comfy_image", filename: N.filename, subfolder: N.subfolder, storage: N.storage, name: N.filename }), n.push(x);
  }
  const { timeline: r, camera: o, scene: a } = e;
  return {
    assets: t,
    stickers: n,
    painting: e.painting,
    painting_layer: e.painting_layer,
    scene_state: { timeline: r, camera: o, scene: a, stickers: e.stickers }
  };
}
function Nu(e) {
  const t = Cc({ ...e, version: 1 }), n = e.scene_state;
  if (!n) return t;
  const r = new Map(t.stickers.map((a) => [a.id, a])), o = [];
  for (const a of n.stickers) {
    if (a.placement !== "sky") {
      o.push(a);
      continue;
    }
    const c = r.get(a.id);
    c && (r.delete(a.id), o.push({
      ...c,
      locked: Mu(a) ? a.locked : c.locked,
      clip: a.clip,
      transform: { value: c.transform.value, keyframes: a.transform.keyframes },
      opacity: a.opacity
    }));
  }
  return o.push(...r.values()), Cc({ ...t, timeline: n.timeline, camera: n.camera, scene: n.scene, stickers: o });
}
function pm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function mm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function gm(e, t) {
  return e != null && e.__panoSceneStateV2 ? JSON.stringify(Nu(t)) : JSON.stringify(t);
}
function o_(e) {
  return Un(e.x, e.y, -e.z);
}
function Qa(e) {
  return Un(e.x, e.y, -e.z);
}
function Ws(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = go(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function a_(e) {
  const t = Qa(Un(e[0][0], e[1][0], e[2][0])), n = Qa(Un(e[0][1], e[1][1], e[2][1])), r = Qa(Un(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - c * n.x, c * t.x - f * t.z);
  return { yawDeg: o * xn, pitchDeg: a * xn, rollDeg: d * xn };
}
function bm(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Us(e) {
  const [[t, n, r], [o, a, c], [f, d, y]] = e, b = t + a + y;
  if (b > 0) {
    const x = 0.5 / Math.sqrt(b + 1);
    return { x: (d - c) * x, y: (r - f) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > y) {
    const x = 2 * Math.sqrt(1 + t - a - y);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + f) / x, w: (d - c) / x };
  }
  if (a > y) {
    const x = 2 * Math.sqrt(1 + a - t - y);
    return { x: (n + o) / x, y: 0.25 * x, z: (c + d) / x, w: (r - f) / x };
  }
  const w = 2 * Math.sqrt(1 + y - t - a);
  return { x: (r + f) / w, y: (c + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function Ea(e) {
  if (!e || typeof e != "object") return e;
  const t = {};
  for (const [n, r] of Object.entries(e)) t[n] = Array.isArray(r) ? [...r] : r;
  return t;
}
const Qi = 1e-6, s_ = ["yaw_deg", "pitch_deg", "roll_deg"], eh = { hFOV_deg: [0.1, 179], vFOV_deg: [0.1, 179], scale: [1e-6, 1 / 0] }, th = 1e-6;
function xs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function l_(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const y = 0.5 * (c + f);
    xs(0, n, o, 1, y) < t ? c = y : f = y;
  }
  return xs(0, r, a, 1, 0.5 * (c + f));
}
function ws(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ss(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), f = r.map((x) => x / a);
  if (c.reduce((x, N, _) => x + N * f[_], 0) < 0) return n.map(() => 0);
  const d = c.map((x, N) => (x * a + f[N] * o) / (o + a)), y = (x) => Math.sqrt(x.reduce((N, _) => N + _ * _, 0)), b = 3 * Math.min(y(c), y(f)), w = y(d);
  return w <= b ? d : d.map((x) => x * b / w);
}
function ym(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], f = o.map((b, w) => a[w] - b);
  let d = f;
  ws(e, r) && (d = Ss(t, r, n[r - 1].map((b, w) => b - o[w]), f).map((b) => b * c));
  let y = f;
  return ws(e, r + 1) && (y = Ss(t, r + 1, f.map((b) => -b), n[r + 2].map((b, w) => b - a[w])).map((b) => b * c)), [d.map((b) => b / 3), y.map((b) => -b / 3)];
}
function nh(e, t, n, r, o) {
  const [[a], [c]] = ym(e, t, n.map((f) => [f]), r);
  return xs(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function c_(e, t, n, r) {
  var y, b;
  const o = e.map((w) => w.value.position);
  let [a, c] = ym(e, t, o, n);
  a = ((y = e[n].handles) == null ? void 0 : y.out) ?? a, c = ((b = e[n + 1].handles) == null ? void 0 : b.in) ?? c;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => xs(f[w], f[w] + a[w], d[w] + c[w], d[w], r));
}
function ks([e, t, n, r], [o, a, c, f]) {
  return [
    r * o + e * f + t * c - n * a,
    r * a - e * c + t * f + n * o,
    r * c + e * a - t * o + n * f,
    r * f - e * o - t * a - n * c
  ];
}
function u_(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function ql(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function f_([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Oc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function eo(e, t) {
  return f_(ks([-e[0], -e[1], -e[2], e[3]], t));
}
function Jl(e, t, n) {
  return ks(e, Oc(eo(e, t).map((r) => n * r)));
}
function Zl(e, t) {
  const n = u_(e, t);
  if (Math.abs(n) > th) return n < 0;
  const [r, o, a] = eo(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > th) return c < 0;
  return !1;
}
function Ta(e) {
  const { x: t, y: n, z: r, w: o } = Us(Ws(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function rh(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function d_(e, t, n, r) {
  const o = Ta(e[n].value);
  let a = Ta(e[n + 1].value);
  Zl(o, a) && (a = ql(a));
  const c = t[n + 1] - t[n], f = eo(o, a);
  let d = f;
  if (ws(e, n)) {
    let L = Ta(e[n - 1].value);
    Zl(L, o) && (L = ql(L)), d = Ss(t, n, eo(o, L), f).map((R) => R * c);
  }
  let y = f;
  if (ws(e, n + 1)) {
    let L = Ta(e[n + 2].value);
    Zl(a, L) && (L = ql(L)), y = Ss(t, n + 1, eo(a, o), eo(a, L)).map((R) => R * c);
  }
  const b = ks(o, Oc(d.map((L, R) => 0.5 * (L - f[R])))), w = ks(a, Oc(f.map((L, R) => 0.5 * (L - y[R])))), [x, N, _, T] = Jl(Jl(o, a, r), Jl(b, w, r), 2 * r * (1 - r)), { yawDeg: V, pitchDeg: $, rollDeg: A } = a_(bm({ x, y: N, z: _, w: T })), X = e[n].value, O = e[n + 1].value;
  return {
    yaw_deg: rh(V, X.yaw_deg, O.yaw_deg, r),
    pitch_deg: $,
    roll_deg: rh(A, X.roll_deg, O.roll_deg, r)
  };
}
function h_(e, t, n) {
  const r = e.map((d) => d.frame), o = l_(e[t].easing, (n - r[t]) / (r[t + 1] - r[t])), a = e[t].value;
  if (!a || typeof a != "object") return nh(e, r, e.map((d) => d.value), t, o);
  const c = "yaw_deg" in a ? d_(e, r, t, o) : {}, f = {};
  for (const d of Object.keys(a))
    if (d === "position")
      f[d] = c_(e, r, t, o);
    else if (s_.includes(d))
      f[d] = c[d];
    else if (f[d] = nh(e, r, e.map((y) => y.value[d]), t, o), d in eh) {
      const [y, b] = eh[d];
      f[d] = Math.min(b, Math.max(y, f[d]));
    }
  return f;
}
function Fa(e, t) {
  const n = e.keyframes;
  if (!n.length) return Ea(e.value);
  if (t <= n[0].frame + Qi) return Ea(n[0].value);
  const r = n[n.length - 1];
  if (t >= r.frame - Qi) return Ea(r.value);
  let o = 0;
  for (; n[o + 1].frame <= t + Qi; ) o += 1;
  const a = n[o];
  return Math.abs(t - a.frame) <= Qi || a.easing === "hold" ? Ea(a.value) : h_(n, o, t);
}
function ih(e, t) {
  return t - (e.start - e.in);
}
function oh(e, t) {
  return t >= e.start - Qi && (e.duration === null || t < e.start + e.duration - Qi);
}
function p_(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = ih(o.clip, n);
  return {
    frame: n,
    camera: { ...Fa(r.transform, n), aspect: r.aspect },
    scene: {
      active: oh(o.clip, n),
      clip_frame: a,
      ...Fa(o.transform, a)
    },
    stickers: e.stickers.map((c) => {
      const f = ih(c.clip, n);
      return {
        id: c.id,
        placement: c.placement,
        active: c.visible && oh(c.clip, n),
        clip_frame: f,
        ...Fa(c.transform, f),
        opacity: Math.min(1, Math.max(0, Fa(c.opacity, f)))
      };
    })
  };
}
const ah = 2048, vm = 0.28;
function _m(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Jt);
  return {
    quaternion: Us(Ws(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * xn,
    aspect: r
  };
}
function es(e) {
  const t = Wr(e);
  return {
    quaternion: Us(Ws(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function m_(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = wu(n, r), c = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: f - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * xn,
      vFOV_deg: 2 * Math.atan(a / r) * xn
    }
  };
}
function xm(e, t, n) {
  const [[r, o, a], [c, f, d], [y, b, w]] = bm(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Jt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, T = 1e-4) {
      const V = o_(_), $ = r * V.x + c * V.y + y * V.z, A = o * V.x + f * V.y + b * V.z, X = -(a * V.x + d * V.y + w * V.z), O = Math.max(X, T);
      return {
        x: t * 0.5 * (1 + $ / O / N),
        y: n * 0.5 * (1 - A / O / x),
        z: X
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, T) {
      const V = (_ / t * 2 - 1) * N, $ = (1 - T / n * 2) * x;
      return vu(Qa({
        x: r * V + o * $ - a,
        y: c * V + f * $ - d,
        z: y * V + b * $ - w
      }));
    }
  };
}
function g_(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = p_(e, t), c = [];
  e.stickers.forEach((f, d) => {
    const y = a.stickers[d];
    if (f.placement !== "sky") return;
    const b = f.source.kind === "port" && !f.visible;
    if (!y.active && !b) return;
    const w = n(f);
    if (!w) return;
    const x = Math.tan(y.hFOV_deg * 0.5 * Jt), N = Math.tan(y.vFOV_deg * 0.5 * Jt), { crop: _ } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: w.media,
      revision: w.revision,
      opacity: b ? vm : y.opacity,
      zIndex: r(f),
      quaternion: Us(Ws(y.yaw_deg, y.pitch_deg, y.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * x,
        x1: (2 * _.x1 - 1) * x,
        y0: (1 - 2 * _.y1) * N,
        y1: (1 - 2 * _.y0) * N
      }
    });
  });
  for (const f of o) c.push({ kind: "erp", ...f });
  return c.sort((f, d) => f.zIndex - d.zIndex);
}
function wm(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return g_(e, t, {
    media: (c) => {
      const f = a.get(c.id);
      return f ? r(f) : null;
    },
    zIndex: (c) => {
      var f;
      return Number(((f = a.get(c.id)) == null ? void 0 : f.z_index) || 0);
    },
    paintLayers: o
  });
}
const Ql = /* @__PURE__ */ new WeakMap();
let b_ = 1;
function sh(e) {
  return Ql.has(e) || Ql.set(e, b_++), Ql.get(e);
}
function lh({ background: e, layers: t }) {
  return JSON.stringify([
    e && [sh(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, sh(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function y_({ onReady: e, onFailed: t }) {
  let n = null, r = !1;
  const o = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(a) {
      return n ? n.render(a) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(a) {
      return n ? n.renderUnwrap(a) : null;
    },
    dispose() {
      r = !0, n == null || n.dispose(), n = null;
    }
  };
  return import("./.lazy/pano_three_view-DtiQ-hzq.js").then((a) => {
    r || (n = a.createThreeView(), o.ready = !0, e());
  }).catch((a) => {
    console.error("[PanoramaStickers] three.js view is unavailable", a), o.failed = !0, t();
  }), o;
}
const Sm = "3D view unavailable. Check the browser console.";
function Ms(e, t, n) {
  return _m({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function v_(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((c) => {
      if (n = !1, !o.size) {
        c.dispose();
        return;
      }
      t = c, o.forEach((f) => f.onChange());
    }).catch((c) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", c), o.forEach((f) => f.onChange()));
    }));
  }
  return function(f) {
    const d = { onChange: f };
    let y = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(b) {
        return y ? null : (a(), t ? t.render({ ...b, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        y || (y = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const km = v_(
  () => import("./.lazy/pano_three_view-DtiQ-hzq.js").then((e) => e.createThreeView())
);
function Mm({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: o,
  onChange: a = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof o != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let c = null, f = !1, d = !1;
  const y = () => c || e(), b = () => a(n(y()));
  return {
    model: () => n(y()),
    refresh() {
      return d ? this.model() : (b(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), f = !1, b(), !0);
    },
    updateGesture(w) {
      if (d) return !1;
      c || this.beginGesture();
      const x = t(c, w);
      return x.changed ? (c = x.state, f = !0, r(c), b(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && f;
    },
    commitGesture() {
      if (d || !c) return !1;
      const w = f;
      return w && o(c), c = null, f = !1, r(null), b(), w;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, f = !1, r(null), b(), !0);
    },
    apply(w) {
      if (d) return !1;
      c && this.commitGesture();
      const x = t(e(), w);
      return x.changed ? (o(x.state), b(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const w = c != null;
      c = null, f = !1, w && r(null);
    }
  };
}
const Ns = Math.PI / 180, vr = 180 / Math.PI, __ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), x_ = 260;
function ch(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Nm(e, t) {
  return t ? Nm(t, e % t) : e;
}
function w_(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), f = Math.max(1, Math.round(t / a * o)), d = Nm(c, f) || 1;
  return `${Math.round(c / d)}:${Math.round(f / d)}`;
}
function ta(e, t) {
  const n = ch(e), r = ch(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: w_(n, r) };
}
function ki(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Pm(e) {
  const t = ki(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Vr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Pu(e, t, n = __) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), y = (V, $, A) => {
    const X = V + $, O = Math.max(0, A - 1), L = X > O && X > 0 ? O / X : 1;
    return [V * L, $ * L];
  }, [b, w] = y(d, c, r), [x, N] = y(a, f, o), _ = {
    x: b,
    y: x,
    w: Math.max(1, r - b - w),
    h: Math.max(1, o - x - N)
  }, T = _u(_, t);
  return {
    x: _.x + (_.w - T.width) * 0.5,
    y: _.y + (_.h - T.height) * 0.5,
    w: T.width,
    h: T.height,
    safeRect: _
  };
}
function S_(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pu({ width: n, height: r }, 1), a = K(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * Ns * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, y = um(d, om(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), b = k_(y, go(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = xu({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: b.yaw,
    pitchDeg: b.pitch,
    rollDeg: b.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function Am(e) {
  return {
    yaw: Rt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * vr),
    pitch: K(Math.asin(K(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * vr, -89.9, 89.9)
  };
}
function k_(e, t) {
  const n = Am(e), r = go(n.yaw, n.pitch, 0), o = Xl(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, c = Math.hypot(a.x, a.y, a.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const f = {
    x: a.x / c,
    y: a.y / c,
    z: a.z / c
  };
  return {
    ...n,
    roll: Bs(Math.atan2(
      Xl(f, r.up),
      Xl(f, r.right)
    ) * vr)
  };
}
function Cm(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pu({ width: n, height: r }, Si(e)), a = wi(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = um(e, om(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Am(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: K(2 * Math.atan(n / (2 * a)) * vr, 1, 179)
  };
}
function M_(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = wi(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: y, halfH: b } = wu(d, f), w = {
    x: a - y,
    y: c - b,
    w: y * 2,
    h: b * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, N = r / o, _ = Math.tan(Nc * Ns), T = N >= 1 ? _ : _ * N, V = N >= 1 ? _ / N : _;
  return {
    focalPx: f,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(y / f) * vr,
      vFOV_deg: 2 * Math.atan(b / f) * vr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(T) * vr,
        vFOV_deg: 2 * Math.atan(V) * vr
      }
    }
  };
}
function Ki(e, t) {
  const n = ki(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((o) => o === n ? r : o)
    },
    changed: !0
  };
}
function N_(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = wi(n, e);
    return xu(_u(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Za(a, t) };
}
function uh(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = ta(t, n);
  if (!a) return e;
  const c = Si(e) >= 1;
  r && a.ratio >= 1 !== c && (a = ta(a.height, a.width));
  const f = N_(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...f, aspect_id: a.label };
}
function Im(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ki(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = sm({
      id: r,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      rollDeg: t.rollDeg,
      viewFovDeg: t.viewFovDeg,
      frameFovDeg: t.frameFovDeg
    });
    return {
      state: {
        ...e,
        shots: [o],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = ki(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((c) => c !== r), a = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
    return {
      state: {
        ...e,
        shots: o,
        active: { ...e.active || {}, selected_shot_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Ki(e, (r) => uh(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ki(e, (r) => {
      const a = String(Vr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? ta(a[1], a[2]) : ta(Si(r), 1);
      return c ? uh(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Ki(e, (o) => {
      const a = Bs(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const f = { ...o, roll_deg: a };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ki(e, (r) => {
    const o = lm(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Ki(e, (r) => {
    const o = cm(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Ki(e, (r) => {
    const o = Tm(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Om({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const f = a && o ? "alt" : r ? "shift" : "";
  if (!f || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, y = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, b = Math.hypot(Number(t.x || 0) - y.x, Number(t.y || 0) - y.y);
  if (f === "shift" && b < Math.min(d.w, d.h) * c) return null;
  const w = Math.atan2(Number(t.y || 0) - y.y, Number(t.x || 0) - y.x);
  return {
    source: f,
    frame: d,
    center: y,
    startRollDeg: Number(n || 0),
    lastAngle: w,
    accumulatedRad: 0
  };
}
function Em(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + rm(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: im(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function Tm(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ns, d = Math.cos(f), y = Math.sin(f), b = a / n, w = -c / n, x = b * d - w * y, N = b * y + w * d, _ = Number(e.pitch_deg || 0) * Ns, T = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: Rt(Number(e.yaw_deg || 0) - Math.atan(x) / T * vr),
    pitch_deg: K(Number(e.pitch_deg || 0) - Math.atan(N) * vr, -90, 90)
  };
}
function P_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Mm({
    readState: e,
    reduce: Im,
    projectModel: Pm,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ne = Object.freeze({
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
  lasso_tool: "lasso_tool"
}), A_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, C_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: A_(t[2])
})), I_ = {
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
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" }
}, fh = Object.fromEntries(
  Object.entries(I_).map(([e, t]) => [e, {
    name: t.name,
    elements: C_(t.body)
  }])
), Xt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(fh, r) ? fh[r] : null;
    });
    return (r, o) => n.value ? (be(), ke("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ut(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (be(!0), ke(Qe, null, $t(n.value.elements, (a, c) => (be(), ke(Qe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (be(), ke("path", ti({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (be(), ke("circle", ti({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (be(), ke("rect", ti({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (be(), ke("line", ti({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (be(), ke("polyline", ti({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (be(), ke("polygon", ti({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : St("", !0)
      ], 64))), 128))
    ], 2)) : St("", !0);
  }
}, qt = {
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
    const t = e, n = vt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (be(), Nr(Gy(e.tag), ti({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Sp(() => [
        Fe(Xt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, O_ = ["aria-expanded", "disabled"], E_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, T_ = ["data-aspect", "disabled", "onClick"], F_ = { class: "pano-cutout-aspect-custom" }, D_ = ["disabled"], L_ = ["disabled"], R_ = ["data-custom-width", "data-custom-height", "disabled"], Fm = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), a = /* @__PURE__ */ fn("1"), c = /* @__PURE__ */ fn("1"), f = /* @__PURE__ */ fn(null), d = vt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), y = vt(() => {
      const T = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], V = String(n.model.aspectLabel || "");
      return T.length ? T.map(($) => {
        const A = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), X = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || A);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: A,
          label: X,
          active: V ? A === V : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === V
      }));
    }), b = vt(() => {
      var V;
      const T = String(n.model.aspectLabel || "").trim();
      return T || String(((V = y.value.find(($) => $.active === !0)) == null ? void 0 : V.label) || "Aspect");
    });
    _i(b, (T) => {
      const V = String(T || "").match(/^([0-9.]+):([0-9.]+)$/);
      V && (a.value = V[1], c.value = V[2]);
    }, { immediate: !0 });
    function w(T) {
      r("action", T);
    }
    function x(T) {
      var V;
      n.model.aspectOpen === !0 && ((V = f.value) != null && V.contains(T.target) || w({ type: "close-aspect" }));
    }
    cu(() => {
      document.addEventListener("pointerdown", x, !0);
    }), js(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(T) {
      const [V, $] = String(T.value || "").split(":");
      w({
        type: "set-aspect",
        width: V,
        height: $,
        preserveOrientation: !0
      });
    }
    function _() {
      w({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (T, V) => (be(), ke("div", {
      ref_key: "rootElement",
      ref: f,
      class: ut(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (be(), Nr(qt, {
        key: 0,
        icon: e.model.aspectIcon || at(Ne).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: V[0] || (V[0] = ($) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (be(), ke("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: V[1] || (V[1] = ($) => w({ type: "toggle-aspect" }))
      }, [
        Fe(Xt, {
          icon: e.model.aspectIcon || at(Ne).aspect
        }, null, 8, ["icon"]),
        B("span", null, ct(b.value), 1),
        Fe(Xt, {
          icon: at(Ne).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, O_)),
      vi(B("div", E_, [
        (be(!0), ke(Qe, null, $t(y.value, ($) => (be(), ke("button", {
          key: $.value,
          class: ut(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (A) => N($)
        }, ct($.label), 11, T_))), 128)),
        B("div", F_, [
          vi(B("input", {
            "onUpdate:modelValue": V[2] || (V[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, D_), [
            [zd, a.value]
          ]),
          V[4] || (V[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          vi(B("input", {
            "onUpdate:modelValue": V[3] || (V[3] = ($) => c.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, L_), [
            [zd, c.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: _
          }, "Apply", 8, R_)
        ])
      ], 512), [
        [sa, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, V_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, $_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ fn(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (be(), ke("div", {
      class: ut(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Vn(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Vn(() => {
      }, ["stop"]))
    }, [
      Fe(qt, {
        icon: at(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Vn((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", V_, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (be(!0), ke(Qe, null, $t(at(n), (a) => (be(), ke("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, ct(a[0]), 1),
          B("span", null, ct(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, z_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Au = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (be(), ke("div", z_, ct(at(Sm)), 1));
  }
}, j_ = { class: "pano-cutout-node-surface" }, H_ = ["title", "disabled"], G_ = { class: "value" }, K_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, B_ = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var o;
      (o = t.onAction) == null || o.call(t, r);
    }
    return (r, o) => (be(), ke("div", j_, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Vn(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Vn(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Fe(Xt, {
            icon: at(Ne).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        Fe(qt, {
          icon: e.model.hasShot ? at(Ne).delete : at(Ne).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Fe(Fm, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        B("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Vn((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Fe(Xt, {
            icon: at(Ne).roll
          }, null, 8, ["icon"]),
          B("span", G_, ct(e.model.rollLabel || "0.0°"), 1)
        ], 40, H_),
        Fe(qt, {
          icon: at(Ne).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Fe($_)
      ], 32),
      e.model.hasShot === !1 ? (be(), ke("div", K_, " Choose a view · + Add Frame ")) : St("", !0),
      e.model.viewUnavailable ? (be(), Nr(Au, { key: 1 })) : St("", !0)
    ]));
  }
}, Dm = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ fn(null);
    let a, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const w = a;
      return a = void 0, c = !1, { active: !0, intent: w };
    }
    function d(w) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = w, c = !0, x.value = "", x.click(), !0) : !1;
    }
    function y(w) {
      var T, V;
      const { active: x, intent: N } = f();
      if (!x) return;
      const _ = ((V = (T = w.target) == null ? void 0 : T.files) == null ? void 0 : V[0]) || null;
      if (_) {
        r("file-selected", { intent: N, file: _ });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function b() {
      const { active: w, intent: x } = f();
      w && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (w, x) => (be(), ke("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: y,
      onCancel: b
    }, null, 544));
  }
}, W_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, U_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ fn(!1), n = Object.freeze([
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
    return (r, o) => (be(), ke("div", {
      class: ut(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Vn(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Vn(() => {
      }, ["stop"]))
    }, [
      Fe(qt, {
        icon: at(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Vn((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", W_, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (be(!0), ke(Qe, null, $t(at(n), (a) => (be(), ke("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, ct(a[0]), 1),
          B("span", null, ct(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Y_ = { class: "pano-stickers-node-surface" }, X_ = ["disabled"], q_ = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, J_ = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, Z_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ fn(null);
    function r(c) {
      var f;
      (f = t.onAction) == null || f.call(t, c);
    }
    function o() {
      var c, f;
      (f = (c = n.value) == null ? void 0 : c.open) == null || f.call(c, "add");
    }
    function a(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, f) => (be(), ke("div", Y_, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Vn(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Vn(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          Fe(Xt, {
            icon: at(Ne).fullscreen
          }, null, 8, ["icon"]),
          f[7] || (f[7] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Fe(Xt, {
            icon: at(Ne).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, X_),
        Fe(qt, {
          icon: e.model.locked ? at(Ne).lock_closed : at(Ne).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Fe(qt, {
          icon: at(Ne).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Fe(qt, {
          icon: at(Ne).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Fe(qt, {
          icon: e.model.isExternalSelection ? at(Ne).back_initial : at(Ne).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Fe(U_)
      ], 32),
      e.model.hasStickers === !1 ? (be(), ke("div", q_, " Add Image to place a sticker ")) : St("", !0),
      e.model.dropActive === !0 ? (be(), ke("div", J_, "Drop image to add")) : St("", !0),
      Fe(Dm, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (be(), Nr(Au, { key: 2 })) : St("", !0)
    ]));
  }
}, ts = "sticker_image_1", Lm = "external_image";
function ns(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function ec(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Cu(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Iu(e) {
  return String((e == null ? void 0 : e.id) || "") === ts || String((e == null ? void 0 : e.source_kind) || "") === Lm;
}
const Rm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Vm(e) {
  return !Iu(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Rm.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function $m(e) {
  const t = Vm(e);
  return t ? Rm.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function zm(e, t = {}) {
  var O, L, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((q) => String((q == null ? void 0 : q.id) || "") === ts);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const q = String(((O = e.active) == null ? void 0 : O.selected_sticker_id) || "") === ts;
    return {
      state: {
        ...e,
        stickers: n.filter((j, Q) => Q !== r),
        active: q ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), y = Number(t.imageHeight || 0), b = d > 0 && y > 0, w = Math.max(1, d), x = Math.max(1, y), N = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = f ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, T = Math.min(179, Math.max(0.1, Number(_)));
  if (!f) {
    if (!b) return { state: e, changed: !1 };
    const q = ns(T, w, x), j = Number(((L = c == null ? void 0 : c.initial_pose) == null ? void 0 : L.hFOV_deg) ?? T), Q = ns(j, w, x), P = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? Q);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - q) <= 1e-6 && Math.abs(P - Q) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((W, ae) => ae === r ? {
          ...W,
          vFOV_deg: q,
          initial_pose: W.initial_pose && typeof W.initial_pose == "object" ? { ...W.initial_pose, vFOV_deg: Q } : W.initial_pose
        } : W)
      },
      changed: !0
    };
  }
  const V = n.reduce((q, j) => Math.max(q, Number((j == null ? void 0 : j.z_index) || 0)), -1), $ = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: T,
    vFOV_deg: b ? ns(T, w, x) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || T),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, A = {
    ...c || {},
    id: ts,
    source_kind: Lm,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: V + 1
  }, X = r >= 0 ? n.map((q, j) => j === r ? A : q) : [...n, A];
  return { state: { ...e, stickers: X }, changed: !0 };
}
function Ou(e) {
  const t = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: ec(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: ec(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: ec(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function jm(e) {
  const t = Cu(e), n = Iu(t), r = (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).some((f) => f && f.visible !== !1), o = Ou(e), a = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: $m(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function Q_(e) {
  var t, n;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((r) => ({ ...r })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((r) => ({ ...r })),
      raster_objects: (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.raster_objects) ? e.painting.raster_objects : []).map((r) => ({ ...r }))
    }
  };
}
function dh(e, t) {
  const n = Cu(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Q_(e), o = String(n.id || ""), a = Ou(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = a.splice(c, 1);
  return t === "front" ? a.push(f) : a.unshift(f), a.forEach((d, y) => {
    d.item.z_index = y;
  }), { state: r, changed: !0 };
}
function ex(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function tx(e, t = {}) {
  var r, o;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return zm(e, t.value);
  if (t.type === "add-sticker") {
    const a = t.value && typeof t.value == "object" ? t.value : {}, c = String(a.stickerId || "").trim(), f = String(a.assetId || "").trim();
    if (!c || !f || !a.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === c))
      return { state: e, changed: !1 };
    const y = Ou(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, w = {
      id: c,
      asset_id: f,
      yaw_deg: Number(a.yaw_deg || 0),
      pitch_deg: Number(a.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ns(b, a.imageWidth, a.imageHeight),
      rot_deg: 0,
      z_index: y + 1
    };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [f]: a.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], w],
        active: { ...e.active || {}, selected_sticker_id: c }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const a = String(t.id || "");
    return !a || !(Array.isArray(e.stickers) ? e.stickers : []).some((c) => String((c == null ? void 0 : c.id) || "") === a) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === a ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: a } },
      changed: !0
    };
  }
  const n = Cu(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    if (hm(e, n.id)) return { state: e, changed: !1 };
    const a = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, locked: a } : c)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const a = Vm(n);
    return !a || !$m(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((c) => c === n ? { ...c, ...a } : c)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return dh(e, "front");
  if (t.type === "send-back") return dh(e, "back");
  if (t.type === "delete-selected") {
    if (Iu(n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const a = e.stickers.filter((d) => d !== n), c = ((o = a[0]) == null ? void 0 : o.id) == null ? null : String(a[0].id), f = {
      ...e,
      stickers: a,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return f.assets = ex(f), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const a = t.value && typeof t.value == "object" ? t.value : {}, c = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], f = {};
    return c.forEach((d) => {
      const y = Number(a[d]);
      Number.isFinite(y) && Math.abs(y - Number(n[d] || 0)) > 1e-12 && (f[d] = y);
    }), Object.keys(f).length ? {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...f } : d)
      },
      changed: !0
    } : { state: e, changed: !1 };
  }
  return { state: e, changed: !1 };
}
function nx(e = {}) {
  return Mm({
    ...e,
    reduce: tx,
    projectModel: jm
  });
}
const hh = 24;
function rx(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ph(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function ix(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Ec(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => ph(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ph(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ix(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Hm(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Gm(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Do(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: K(n.x, -r, t.width + r),
    y: K(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function ox(e) {
  const t = go(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(K(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Jt * 0.5),
    tanY: Math.tan(K(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Jt * 0.5)
  };
}
function hi(e, t, n) {
  return vu(bs(
    bs(e.centerDir, ys(e.right, t)),
    ys(e.up, n)
  ));
}
function Km(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = ox(e), r = Do(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    hi(n, -n.tanX, n.tanY),
    hi(n, n.tanX, n.tanY),
    hi(n, n.tanX, -n.tanY),
    hi(n, -n.tanX, -n.tanY)
  ].map((x) => Do(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const _ = [];
    for (let T = 0; T <= 28; T += 1) {
      const V = T / 28;
      let $, A;
      N === 0 ? ($ = -n.tanX + 2 * n.tanX * V, A = n.tanY) : N === 1 ? ($ = n.tanX, A = n.tanY - 2 * n.tanY * V) : N === 2 ? ($ = n.tanX - 2 * n.tanX * V, A = -n.tanY) : ($ = -n.tanX, A = -n.tanY + 2 * n.tanY * V);
      const X = Do(hi(n, $, A), t);
      X && _.push({ x: X.x, y: X.y });
    }
    return _;
  }), c = Do(hi(n, 0, n.tanY), t), f = Do(
    hi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, f];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const y = f.x - c.x, b = f.y - c.y, w = Math.hypot(y, b) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + y / w * hh,
      y: c.y + b / w * hh
    },
    visible: !0
  };
}
function mh(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Km(c, r) })).filter((c) => c.geometry.visible).sort((c, f) => {
    var d, y;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((y = c.item) == null ? void 0 : y.z_index) || 0);
  }), a = o.find((c) => {
    var f;
    return String(((f = c.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (a) {
    const c = Ec(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const f = Ec(c.geometry, n);
    if (f.kind !== "none") return { ...c, hit: f };
  }
  return null;
}
function ax(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Rt(Math.atan2(r.x, r.z) * xn),
    pitch_deg: Math.asin(K(r.y, -1, 1)) * xn
  };
}
function sx(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: K(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: K(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function lx(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * xn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Da = null;
function Eu() {
  return Da || (Da = new Promise((e) => {
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
    const n = document.createElement("link");
    n.id = "pano-suite-style-link", n.rel = "stylesheet", n.href = new URL("./pano_editor.css", import.meta.url).toString(), n.addEventListener("load", () => {
      n.dataset.loaded = "true", e();
    }, { once: !0 }), n.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(n);
  }), Da);
}
function Kn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function cx(e, t = 1024) {
  const n = Math.max(1, Math.round(Kn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Kn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function ux(e, t, n) {
  const r = Kn(t), o = Kn(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = Kn(a.u0), f = Kn(a.v0), d = Kn(a.u1), y = Kn(a.v1);
  if (d <= c || y <= f) return null;
  const b = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + Kn(b.du)) * r,
    centerY: ((f + y) * 0.5 + Kn(b.dv)) * o,
    width: (d - c) * r,
    height: (y - f) * o,
    rotationRad: Kn(b.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Kn(b.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function fx(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), o = (e == null ? void 0 : e.bbox) || {}, a = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
    o.u0,
    o.v0,
    o.u1,
    o.v1,
    a.du,
    a.dv,
    a.rot_deg,
    a.scale
  ].join(":");
}
function dx() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(a));
      }
  }
  function r(a, c) {
    let f = e.get(a);
    if (f)
      return e.delete(a), e.set(a, f), !f.settled && typeof c == "function" && f.listeners.add(c), f.image;
    const d = new Image();
    f = { image: d, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(a, f);
    const y = () => {
      f.settled = !0;
      const b = [...f.listeners];
      f.listeners.clear(), b.forEach((w) => w()), n();
    };
    return d.onload = y, d.onerror = y, d.src = a, n(), d;
  }
  function o(a, c, f, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const y = String(a.rasterDataUrl || "").trim(), b = ux(a, c, f);
    if (!y.startsWith("data:") || !b) return null;
    const w = fx(a, c, f), x = String((a == null ? void 0 : a.id) || "").trim() || w, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === w) return { source: N.source, revision: w };
    const _ = r(y, d), T = Number(_.naturalWidth || _.width || 0), V = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || T < 1 || V < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(c)), $.height = Math.max(1, Math.round(f));
    const A = $.getContext("2d");
    return A ? (b.wrapOffsets.forEach((X) => {
      A.save(), A.translate(b.centerX + X, b.centerY), A.rotate(b.rotationRad), A.scale(b.scale, b.scale), A.drawImage(
        _,
        -b.width * 0.5,
        -b.height * 0.5,
        b.width,
        b.height
      ), A.restore();
    }), t.set(x, { revision: w, source: $ }), { source: $, revision: w }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const c = new Set(Array.from(a, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        c.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function hx(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function px(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function mx({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function c(w, x, N, _) {
    if (!w || typeof _ != "function" || N.settled) return;
    let T = r.get(w);
    T || (T = /* @__PURE__ */ new Map(), r.set(w, T));
    const V = T.get(x);
    if ((V == null ? void 0 : V.entry) === N) {
      V.callback = _;
      return;
    }
    a(V);
    const $ = { owner: w, key: x, entry: N, callback: _ };
    T.set(x, $), N.listeners.add($);
  }
  function f(w, x) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !x && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(w.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [x, N] of n) {
        if (n.size <= w) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function y(w, x, N, _ = null) {
    const T = String(x || ""), V = String(N || "");
    if (!T || !V) return null;
    let $ = n.get(T);
    if ($)
      n.delete(T), n.set(T, $);
    else {
      d(o - 1);
      const X = e || globalThis.Image;
      if (typeof X != "function") return null;
      const O = new X();
      $ = { key: T, image: O, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(T, $), O.onload = () => f($, !0), O.onerror = () => f($, !1), O.src = V;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || c(w, T, $, _), $.image;
  }
  function b(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: y, disposeOwner: b };
}
function Ps(e) {
  return e ? ((!e.__panoNodeOutputMediaFreshness || typeof e.__panoNodeOutputMediaFreshness != "object") && (e.__panoNodeOutputMediaFreshness = /* @__PURE__ */ Object.create(null)), e.__panoNodeOutputMediaFreshness) : null;
}
function Ys(e, t = "") {
  const n = String(t || "").trim();
  if (!n) return (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
  const r = Ps(e);
  return Object.prototype.hasOwnProperty.call(r, n) ? r[n] !== !1 : (e == null ? void 0 : e.__panoNodeOutputMediaCurrent) !== !1;
}
function gh(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    Ps(e)[n] = !1;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !1;
}
function gx(e, t = "") {
  if (!e) return;
  const n = String(t || "").trim();
  if (n) {
    Ps(e)[n] = !0;
    return;
  }
  e.__panoNodeOutputMediaCurrent = !0;
  const r = Ps(e);
  Object.keys(r).forEach((o) => {
    r[o] = !0;
  });
}
function bh(e, t, n, r = ["erp_image", "bg_erp"]) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
function bx(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const f of c)
      if (Array.isArray(f))
        for (const d of f) {
          const y = r(d);
          if (y && (/\.mp4(\?|$)/i.test(y) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return y;
        }
  }
  return "";
}
function yx({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var _;
  const r = ((_ = e == null ? void 0 : e.createElement) == null ? void 0 : _.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const f = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !f || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, y = () => {
    if (!a) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, b = () => o(), w = () => {
    o(), d();
  }, x = () => o();
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", y, { once: !0 }), r.addEventListener("canplay", y, { once: !0 }), f || r.addEventListener("timeupdate", b), r.addEventListener("play", w), r.addEventListener("pause", x), r.src = t, r.load(), { video: r, destroy: () => {
    var T, V;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", y), r.removeEventListener("canplay", y), r.removeEventListener("timeupdate", b), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.pause(), (T = r.removeAttribute) == null || T.call(r, "src"), (V = r.load) == null || V.call(r));
  } };
}
const As = "state_json";
function Hr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function vx(e) {
  var c, f;
  const t = Hr(e, As);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ku(n, {
    coverage: (c = Hr(e, "coverage")) == null ? void 0 : c.value
  }), o = Im(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (f = t.callback) == null || f.call(t, a), !0;
}
function Tu(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Hr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, f, d, y, b, w, x, N, _;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (y = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || y.call(d), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (_ = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || _.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function _x(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function yh(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function xx(e) {
  var b, w, x, N, _, T;
  if (!e) return;
  const t = Hr(e, "coverage"), n = Hr(e, "bg_color"), r = Hr(e, As), o = Hr(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && _x(a) && (yh(c) || c === ""))) return;
  let y = "360";
  if (yh(c))
    try {
      y = String(Bn((b = JSON.parse(c)) == null ? void 0 : b.coverage));
    } catch {
      y = "360";
    }
  t.value = y, (w = t.callback) == null || w.call(t, y), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = f, (_ = o.callback) == null || _.call(o, f)), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0);
}
function rs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Tc(e, t, n) {
  var a, c;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (c = o.parentEl) != null && c.style && (o.parentEl.style.display = "");
    const f = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function wx(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function Fc(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const f = () => {
    var d, y;
    ((y = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : y.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function Bm(e, t = {}) {
  var r;
  await wx(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function Sx(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Bm(e), n ? n.apply(this, r) : this.value;
  };
}
function kx(e) {
  var t, n;
  try {
    (t = e.__panoDomRestore) == null || t.call(e);
  } catch {
  }
  try {
    (n = e.__panoLegacyRestore) == null || n.call(e);
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null;
}
function Mx(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function tc(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: f,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function y(b) {
    var N;
    const w = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === w) return;
    kx(b), Tu(b, t), rs(b, As);
    const x = Hr(b, As);
    if (Sx(b, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const _ = x.callback;
      x.callback = (T) => {
        var $;
        const V = _ ? _(T) : void 0;
        return ($ = b.setDirtyCanvas) == null || $.call(b, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      b.__panoSceneStateV2 = d;
      const _ = Hr(b, "bg_color");
      !d && _ && (_.value == null || String(_.value).trim() === "" || String(_.value).toLowerCase() === "#000000") && (_.value = "#00ff00", (N = _.callback) == null || N.call(_, "#00ff00")), Tc(b, r, () => o(b, "stickers")), f && (a(b, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(b, "stickers")
      }), b.__panoStickersNodeSurface && rs(b, r), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260])), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = w;
      return;
    }
    Tc(b, r, () => o(b, "cutout")), c(b, {
      buttonText: r,
      onOpen: () => o(b, "cutout")
    }), b.__panoCutoutNodeSurface && rs(b, r), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = w;
  }
  for (const b of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[b];
    e.prototype[b] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      return b === "onNodeCreated" && n === "PanoramaCutout" && vx(this), b === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && xx(this), (b === "onNodeCreated" || this.widgets) && y(this), x;
    };
  }
}
function Nx(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return Mx(this), r;
  };
}
function Px(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !c && f < 40) {
      o(a);
      return;
    }
    Tu(e, t);
    const d = (y = e) => n(y, "stickers", { readOnly: !0, hideSidebar: !1 });
    Tc(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && rs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function Ax({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  requestFrame: a,
  enableStickersPreview: c = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, d) {
      const y = String((d == null ? void 0 : d.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && tc(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), y === "PanoramaStickersNode" && tc(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && tc(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: c
      }), vs(y) && Nx(f);
    },
    nodeCreated(f) {
      const d = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      Tu(f, e), vs(d) && Px(f, { app: e, openEditor: t, attachPreview: o, requestFrame: a });
    }
  };
}
const Cx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function _r(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Cx.test(String(e.name || "")) : !1;
}
function Fu(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => _r(n)) : !1;
}
function Ix(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var y, b, w;
    (y = d == null ? void 0 : d.preventDefault) == null || y.call(d), (b = d == null ? void 0 : d.stopPropagation) == null || b.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (Fu(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (d) => {
    var y;
    d != null && d.relatedTarget && ((y = e.contains) != null && y.call(e, d.relatedTarget)) || n(!1);
  }, f = (d) => {
    var b;
    const y = Array.from(((b = d == null ? void 0 : d.dataTransfer) == null ? void 0 : b.files) || []).find((w) => _r(w));
    if (!y) {
      n(!1);
      return;
    }
    o(d), n(!1), r(y);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function Dc(e, t = {}) {
  var c, f, d, y;
  if (!_r(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), o = t.revokeObjectURL || ((y = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : y.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const b = await new Promise((w, x) => {
      const N = new n();
      N.onload = () => w(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
    });
    return {
      image: b,
      width: Math.max(1, Number(b.naturalWidth || b.width || 1)),
      height: Math.max(1, Number(b.naturalHeight || b.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function is(e, { fetchApi: t } = {}) {
  if (!_r(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const o = await r.json(), a = String((o == null ? void 0 : o.name) || "").trim();
  if (!a) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: a,
    subfolder: String((o == null ? void 0 : o.subfolder) || "panorama_stickers"),
    storage: String((o == null ? void 0 : o.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const zo = /* @__PURE__ */ new WeakMap();
function Wm(e, t) {
  if (!e || typeof t != "function") return () => {
  };
  let n = zo.get(e);
  n || (n = [], zo.set(e, n));
  const r = { handler: t };
  n.push(r);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const a = zo.get(e);
    if (!a) return;
    const c = a.indexOf(r);
    c >= 0 && a.splice(c, 1), a.length === 0 && zo.delete(e);
  };
}
function jo(e, ...t) {
  const n = zo.get(e), r = n == null ? void 0 : n[n.length - 1];
  return r ? (r.handler(...t), !0) : !1;
}
const vh = /* @__PURE__ */ new WeakSet(), _h = /* @__PURE__ */ new WeakSet();
let xh = 0;
function Lc(e) {
  if (!e || typeof e != "object" || _h.has(e)) return e;
  const t = String(e.type || "preview");
  return xh += 1, e.type = `${t}:pano-${xh}`, _h.add(e), e;
}
function Cs(e) {
  if (!e || typeof e != "object" || vh.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, vh.add(e), e;
}
function Um(e, t) {
  var r, o;
  if (!t || ((o = (r = Cs(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Ox({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const y = o;
    o = null, a || n == null || n(y);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: It } = Wa, Du = mx();
function Rc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Wa == null ? void 0 : Wa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Ex = "pano_suite.ui_settings.v1", Tx = 120;
function wh() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Ex)) || "").trim();
    if (!n) return e;
    const r = JSON.parse(n);
    return {
      invert_view_x: !!(r != null && r.invert_view_x),
      invert_view_y: !!(r != null && r.invert_view_y)
    };
  } catch {
    return e;
  }
}
function Fx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Lo(e) {
  var n, r, o, a, c;
  if (!e) return null;
  const t = (n = e.getBoundingClientRect) == null ? void 0 : n.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((r = e.style) == null ? void 0 : r.height) || ""),
    styleWidth: String(((o = e.style) == null ? void 0 : o.width) || ""),
    stylePos: String(((a = e.style) == null ? void 0 : a.position) || ""),
    styleTransform: String(((c = e.style) == null ? void 0 : c.transform) || "")
  };
}
function Dx() {
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
function Vc(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const a = Number(r), c = Number(o);
    return !Number.isFinite(a) || !Number.isFinite(c) ? null : [a, c];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const r = n(t[0], t[1]);
      if (r) return r;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const r = n(t.width, t.height);
      if (r) return r;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const r = n(t.w, t.h);
      if (r) return r;
    }
  }
  return null;
}
function Ym(e) {
  const t = Vc(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Lx(e, t, n) {
  Ym(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function $c(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Lu(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Xm(e) {
  return vs(Lu(e));
}
function Sh(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = It == null ? void 0 : It.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function qm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = $c(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && os(e), xw(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = $c(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      os(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      os(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Rx(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function os(e, t = {}) {
  var r, o, a, c, f;
  if (!e) return;
  zc.unregister(e), Rx(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (o = e.__panoLegacyRestore) == null || o.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (a = n.state) != null && a.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (c = n.root) == null ? void 0 : c.remove) == null || f.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((y) => {
      if (y === (n == null ? void 0 : n.widget)) return !0;
      const b = String((y == null ? void 0 : y.name) || ""), w = String((y == null ? void 0 : y.type) || ""), x = Rc();
      return b === x || w === x || b === "pano_preview" || w === "pano_preview" ? !0 : b === "preview" && w === "pano_preview";
    }).forEach((y) => iw(e, y));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function Vx(e, t = "#00ff00") {
  const n = {
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
  let r = null;
  if (e && typeof e == "object")
    r = e;
  else if (typeof e == "string") {
    const o = e.trim();
    if (!o) return n;
    try {
      r = JSON.parse(o);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const o = r;
    return !o || typeof o != "object" || Array.isArray(o) ? n : {
      ...n,
      ...o,
      coverage: Number(o.coverage) === 180 ? 180 : 360,
      assets: o.assets && typeof o.assets == "object" ? o.assets : {},
      stickers: Array.isArray(o.stickers) ? o.stickers : [],
      shots: Array.isArray(o.shots) ? o.shots : [],
      active: o.active && typeof o.active == "object" ? o.active : n.active
    };
  } catch {
    return n;
  }
}
function $x(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = lo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function tr(e) {
  var f, d;
  const t = $x(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = lo(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = lo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? ku(t, { backgroundColor: r, coverage: o, active: pm(e) }) : Vx(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function lo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Jm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function zx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Zm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Qm(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = zx(e == null ? void 0 : e.graph, n)), r;
}
function jx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function eg(e, t = []) {
  const n = jx(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function kh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Is(e, t) {
  const n = kh(e), r = kh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Hx(e, t = ["erp_image", "bg_erp"]) {
  var d;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const o = eg(e, t).map((y) => n.findIndex((b) => String((b == null ? void 0 : b.name) || "") === String(y))).filter((y) => y >= 0), a = n.map((y, b) => ({ input: y, idx: b })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), c = [.../* @__PURE__ */ new Set([...o, ...a])], f = [];
  for (const y of c) {
    const b = Qm(e, y);
    if ((b == null ? void 0 : b.id) != null) {
      f.push(String(b.id));
      continue;
    }
    const w = (d = n[y]) == null ? void 0 : d.link;
    if (w == null) continue;
    const x = Jm(e == null ? void 0 : e.graph, w), { originId: N } = Zm(x);
    N != null && f.push(String(N));
  }
  return [...new Set(f)];
}
const zc = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = cn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var y, b, w, x, N;
        if (!a) return;
        const c = Is(r, a == null ? void 0 : a.id);
        Hx(a, ["erp_image", "bg_erp"]).some((_) => Is(r, _)), !(String(a.__panoPreviewMode || "") === "cutout" && !c) && (tg(a), (b = (y = a.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || b.call(y), (w = a.setDirtyCanvas) == null || w.call(a, !0, !0), (N = (x = a.graph) == null ? void 0 : x.setDirtyCanvas) == null || N.call(x, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, cn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = cn) != null && e.removeEventListener) || (cn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Os(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((a = cn) == null ? void 0 : a.apiURL) == "function" ? cn.apiURL(o) : o;
}
function Gx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Kx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function Bx(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function Wx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Gx(t)) return [t];
  const { filename: n, subfolder: r } = Kx(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Os({
    filename: n,
    subfolder: r,
    type: a
  }));
  return Bx([...o, t]);
}
function Ux(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Os({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function na(e) {
  const t = It == null ? void 0 : It.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Is(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Is(c, o)) return t[c];
  }
  return null;
}
function jc(e, t, n = null) {
  const r = n || (e == null ? void 0 : e.__panoLastExecutedOutput) || na(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function yr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return yr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Os({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = yr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Os(e);
}
function Hc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Mh(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function Ru(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", a = new URL(n, o);
    return t > 0 && a.searchParams.set("pano_rev", String(t)), a.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${o}pano_rev=${t}` : n;
  }
}
function Yx(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function Xx(e, t) {
  try {
    e.__panoOwnOutputRev = hx(e.__panoOwnOutputRev);
    const n = Yx(t);
    let r = "";
    for (const o of n)
      if (r = yr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Ru(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function co(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function qx(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Ys(e, "background"))
    return co(e), null;
  const o = na(r), a = bx(o, t, yr);
  if (!a)
    return co(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Ru(a, c), d = `${t.join("|")}:${f}`, y = e.__panoOwnOutputVideoCache;
  if (y != null && y.video && y.key === d) return y.video;
  co(e);
  const b = yx({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return b ? (e.__panoOwnOutputVideoCache = { key: d, ...b }, b.video) : null;
}
function Jx(e, t = []) {
  var y, b;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = eg(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of c) {
    const x = n[w], N = x == null ? void 0 : x.link;
    if (N == null) continue;
    const _ = Jm(e.graph, N), { originId: T, originSlot: V } = Zm(_);
    if (T == null) continue;
    const $ = Qm(e, w, T);
    if (!$) continue;
    const A = Number(V || 0), X = na(($ == null ? void 0 : $.id) ?? T), O = Array.isArray(X == null ? void 0 : X.images) ? X.images : [];
    if (O.length) {
      const j = [];
      A >= 0 && A < O.length && j.push(O[A]), j.push(...O);
      for (const Q of j) {
        const P = yr(Q);
        if (P)
          return String((x == null ? void 0 : x.name) || ""), { src: P, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let L = [];
    try {
      L = typeof (It == null ? void 0 : It.getNodeImageUrls) == "function" ? It.getNodeImageUrls($) || [] : [];
    } catch {
      L = [];
    }
    if (Array.isArray(L) && L.length) {
      const j = [];
      A >= 0 && A < L.length && j.push(L[A]), j.push(...L);
      for (const Q of j) {
        const P = yr(Q);
        if (P)
          return String((x == null ? void 0 : x.name) || ""), { src: P, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const R = Array.isArray($ == null ? void 0 : $.imgs) ? $.imgs : [];
    if (R.length) {
      const j = [];
      A >= 0 && A < R.length && j.push(R[A]), j.push(...R);
      for (const Q of j) {
        const P = yr(Q);
        if (P)
          return String((x == null ? void 0 : x.name) || ""), { src: P, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const q = (y = $ == null ? void 0 : $.widgets) == null ? void 0 : y.find((j) => String((j == null ? void 0 : j.name) || "").toLowerCase() === "image");
    if (q) {
      let j = yr(q.value);
      if (j && !j.includes("/") && !j.includes(":") && ($.comfyClass === "LoadImage" || $.type === "LoadImage") && (j = cn.apiURL(`/view?filename=${encodeURIComponent(j)}&type=input&subfolder=`)), j)
        return String((x == null ? void 0 : x.name) || ""), { src: j, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const f = Ys(e, "background") ? na(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((b = f == null ? void 0 : f.ui) == null ? void 0 : b.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = yr(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Zx(e, t = [], n = {}) {
  const r = Jx(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = Wx(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const y = new Image(), b = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  b.pendingSrcRaw = o, b.pendingResolvedSrc = "", b.pendingImg = y, e.__panoLinkedInputImageCache.set(f, b);
  let w = -1;
  const x = () => {
    var _, T, V, $;
    if (w += 1, w >= a.length) {
      if (((T = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : T.call(_, f)) === b && b.pendingImg === y && (b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null, !b.img))
        try {
          ($ = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || $.call(V, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[w];
    b.pendingResolvedSrc = N, y.src = N;
  };
  return y.onload = () => {
    var N, _, T;
    ((_ = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : _.call(N, f)) === b && b.pendingImg === y && (b.srcRaw = o, b.resolvedSrc = String(b.pendingResolvedSrc || y.src || ""), b.img = y, b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null), String(b.pendingResolvedSrc || b.resolvedSrc || y.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0);
  }, y.onerror = (N) => {
    var _, T, V, $;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((T = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : T.call(_, f)) === b && b.pendingImg === y && (b.pendingSrcRaw = "", b.pendingResolvedSrc = "", b.pendingImg = null, !b.img))
      try {
        ($ = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || $.call(V, f);
      } catch {
      }
    String(b.pendingResolvedSrc || b.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), c && b.img && (b.img.complete || b.img.naturalWidth || b.img.width) ? b.img : y;
}
function Qx(e, t = [], n = null, r = {}) {
  const o = Zx(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function tg(e) {
  var t, n, r, o;
  if (e) {
    Du.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    try {
      (o = (r = e.__panoPreviewImageCache) == null ? void 0 : r.clear) == null || o.call(r);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, co(e), e.__panoWrappedErpCache = null;
  }
}
function ew(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, co(e), e.__panoWrappedErpCache = null;
  }
}
function tw(e) {
  var t, n;
  if (e)
    try {
      (n = (t = e.__panoPreviewImageCache) == null ? void 0 : t.delete) == null || n.call(t, "sticker_image_1");
    } catch {
    }
}
function ng(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function La(e, t, n = "") {
  const r = ng(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < Tx ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Nh(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, f = r / a, d = Math.min(c, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function nw(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), b = r + (a - d) * 0.5, w = o + (c - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(b, w, d, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", b + d * 0.5, w + y * 0.5 + 0.5), e.restore();
}
function nc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function rw(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const o = t.find((a) => String((a == null ? void 0 : a.id) || "") === n);
    if (o) return o;
  }
  return t[0] || null;
}
function iw(e, t) {
  return Um(e, t);
}
function rg(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = Ux(n);
  if (!a && (r != null && r.external)) {
    if (!Ys(e, "external-sticker")) return null;
    const N = e.__panoLastExecutedOutput || na(e == null ? void 0 : e.id), _ = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const T of Array.isArray(_) ? _ : [_])
      if (a = yr(T), a) break;
  }
  if (!a) return null;
  const c = jc(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, y = r != null && r.external ? Ru(a, d) : a, b = px(a, f, d);
  return Du.get(e, b, y, (N, _) => {
    var T, V;
    _ && (r != null && r.external && jo(e, "image-loaded"), (V = (T = e.__panoDomPreview) == null ? void 0 : T.requestDraw) == null || V.call(T));
  }) || null;
}
function ow(e, t) {
  var w, x, N, _;
  const n = uw(e, t), r = fw(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
    o.filter((T) => T && typeof T == "object").map((T) => [String((T == null ? void 0 : T.actionGroupId) || (T == null ? void 0 : T.id) || "").trim(), Number((T == null ? void 0 : T.z_index) || 0)])
  ), c = n ? r.map((T) => {
    const V = n.getGroupDisplayCanvas(T);
    return V ? {
      id: `paint_group:${T}`,
      source: V,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${T}`,
      zIndex: Number(a.get(T) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (_ = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || _.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = dx()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var T, V;
    return (V = (T = e.__panoDomPreview) == null ? void 0 : T.requestDraw) == null ? void 0 : V.call(T);
  });
  const d = cx(t == null ? void 0 : t.output_preset), y = f.filter((T) => (T == null ? void 0 : T.visible) !== !1 && String((T == null ? void 0 : T.layerKind) || "paint") === "paint").map((T) => String((T == null ? void 0 : T.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(y);
  const b = f.map((T) => {
    const V = e.__panoRasterObjectSurfaceCache.get(
      T,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return V ? {
      id: `raster:${String((T == null ? void 0 : T.id) || "")}`,
      source: V.source,
      revision: V.revision,
      zIndex: Number((T == null ? void 0 : T.z_index) || 0),
      opacity: 1,
      visible: (T == null ? void 0 : T.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...b];
}
function aw(e, t, n, r) {
  var a, c, f, d, y, b;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const w = r.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(w[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[1]) || 0)
    };
  const o = lw(e, t, r);
  return o || null;
}
function sw(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), c = (t == null ? void 0 : t.ds) || ((x = It == null ? void 0 : It.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], y = (n - Number(a.left || 0)) / f - Number(d[0] || 0), b = (r - Number(a.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(b) ? null : { x: y, y: b };
}
function lw(e, t, n) {
  var o, a;
  const r = sw(t, n || (It == null ? void 0 : It.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function cw(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function uw(e, t) {
  var y, b, w, x, N, _, T, V, $, A, X, O;
  const n = (b = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : b.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = cw(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = kc(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((T = e.__panoPreviewPaintRevision) == null ? void 0 : T.paint) !== d.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((X = t == null ? void 0 : t.painting) == null ? void 0 : X.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((O = t == null ? void 0 : t.painting) == null ? void 0 : O.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function fw(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function dw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function hw(e, t, n) {
  const r = Km(t, n);
  r.visible && (e.save(), Hm(e, r.boundaryEdges, { selected: !0 }), Gm(e, r, { accent: rx(t) }), e.restore());
}
function Gc(e, t, n) {
  return xm(Ms(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ph(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Nu({ ...t, painting: null }) });
  const r = (c) => {
    var b;
    if (c.visible === !1) return null;
    const f = c.type === "external_image" || c.source_kind === "external_image", d = String(c.asset_id || "") || (f ? String(c.id || "") : ""), y = rg(e, d, (b = t.assets) == null ? void 0 : b[c.asset_id], { external: f });
    return Hc(y) ? { media: y, revision: Mh(y) } : null;
  }, o = ow(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Hc(n) ? { media: n, revision: Mh(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: wm(e.__panoSurfaceScene.sceneState, 0, t.stickers, { media: r, paintLayers: o })
  };
}
function pw(e, t, n) {
  var X, O, L, R, q, j, Q;
  const r = String(e.__panoPreviewMode || "stickers");
  ng(e, r);
  const o = tr(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (L = (O = (X = e.__panoCutoutNodeSurface) == null ? void 0 : X.session) == null ? void 0 : O.refresh) == null || L.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (j = (q = (R = e.__panoStickersNodeSurface) == null ? void 0 : R.session) == null ? void 0 : q.refresh) == null || j.call(q));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== f) && (t.width = c, t.height = f);
  const y = { x: 0, y: 0, w: c, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, f);
  const b = qx(
    e,
    ["pano_input_videos"],
    () => {
      var P, W;
      return (W = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : W.call(P);
    }
  ) || Qx(
    e,
    ["erp_image", "bg_erp"],
    () => {
      var P, W;
      return (W = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : W.call(P);
    },
    { preserveReadyWhilePending: !1 }
  ), w = Hc(b);
  let x = null;
  const N = (P, W) => {
    x || (x = Ph(e, o, b));
    const ae = n.render({ width: P.w, height: P.h, camera: W, ...x });
    return ae && d.drawImage(ae.canvas, ae.x, ae.y, ae.width, ae.height, P.x, P.y, P.w, P.h), !!ae;
  };
  if (r === "cutout") {
    const P = rw(o), W = dw(b), ae = P ? K(Wr(P).aspect, 0.1, 10) : w ? K(Number(W.width / W.height), 0.05, 20) : 1, re = Pu(y, ae);
    e.__panoCutoutNodeFrame = re;
    let Z = "none";
    const ce = String((b == null ? void 0 : b.currentSrc) || (b == null ? void 0 : b.src) || "");
    if (P)
      if (b && !w)
        Z = "loading";
      else if (w) {
        const Se = M_({ width: c, height: f }, re, P);
        [
          !Se.fallback || N(Se.fallback.rect, es(Se.fallback.shot)),
          N(Se.rect, es(Se.shot)),
          !Se.fallback || N(re, es(P))
        ].every(Boolean) || (Z = "loading");
      } else
        Z = "empty";
    else {
      const Se = e.__panoLastCutoutShot;
      Se ? (e.__panoPreviewView = Cm(Se, { width: c, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? N(y, Ms(e.__panoPreviewView, c, f)) || (Z = "loading") : b ? Z = "loading" : Z = "empty";
    }
    w || n.release(), n.failed && Z === "loading" && (Z = "none"), P && (e.__panoLastCutoutShot = { ...P }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, f), d.rect(re.x, re.y, re.w, re.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(re.x + 0.5, re.y + 0.5, Math.max(0, re.w - 1), Math.max(0, re.h - 1)), d.restore()), Z === "loading" ? (nc(e, !1), La(e, !0, ce)) : Z === "empty" ? (nc(e, !0), La(e, !1, "")) : (nc(e, !1), La(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let _ = !1;
  (!b || w) && (x = Ph(e, o, b), !x.background && !x.layers.length ? (n.release(), _ = !0) : _ = N(y, Ms(e.__panoPreviewView, c, f)));
  const T = !_ && !n.failed;
  La(e, T, T ? String((b == null ? void 0 : b.currentSrc) || (b == null ? void 0 : b.src) || "") : ""), T && nw(d, y, Nh(t, y));
  const V = Gc(e, c, f);
  !b && _ && mw(d, V, Nh(t, y));
  const $ = String(((Q = o == null ? void 0 : o.active) == null ? void 0 : Q.selected_sticker_id) || ""), A = _ ? o.stickers.find((P) => String((P == null ? void 0 : P.id) || "") === $ && (P == null ? void 0 : P.visible) !== !1) : null;
  A && hw(d, A, V);
}
function Ah(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const c of t) {
    const f = n.project(c);
    if (f.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(f.x, f.y) : (e.moveTo(f.x, f.y), a = !0);
  }
  e.stroke();
}
function mw(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let y = -180; y <= 180; y += 4) d.push(Cn(y, f));
    Ah(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let y = -89; y <= 89; y += 4) d.push(Cn(f, y));
    Ah(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Cn(0, 0) },
    { name: "Right", dir: Cn(90, 0) },
    { name: "Back", dir: Cn(180, 0) },
    { name: "Left", dir: Cn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((f) => {
    const d = t.project(f.dir);
    d.z > 1e-4 && e.fillText(f.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Kc(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function gw(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Hn(e, t) {
  return gw(e, t) ? !1 : (Kc(e), !0);
}
function Ch() {
  var n;
  const e = (n = It == null ? void 0 : It.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function bw(e) {
  var n;
  if (!e) return;
  const t = (n = It == null ? void 0 : It.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function yw(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Ym(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function vw(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ih(e, t = null, n = 0, r = 0, o = !0) {
  const a = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a > 0 ? a : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), o && _w(e, 180, t);
    }
  };
}
function _w(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ro(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function xw(e, t = {}) {
  var ii;
  const n = t.__allowStandalone === !0, r = Xm(e);
  if (r && !n) {
    Lu(e);
    return;
  }
  r && yw(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Sh(e)
  }, f = "dom", d = c.signature || Sh(e);
  if (Number(e.__panoRebindGeneration || 0), $c(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Vc(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (ii = e.__panoDomPreview) != null && ii.widget || (e.__panoLegacyPreviewHooked && os(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const y = t.noPreview === !0, b = y ? 0 : 56, w = y ? 0 : x_, x = document.createElement("div");
  if (Dx(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), y && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    y ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), y) {
    const D = Cs(Lc(
      e.addDOMWidget(Rc(), "preview", x, Ih(e, null))
    ));
    Ro(e), e.__panoDomPreview = { widget: D, root: x, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const N = document.createElement("div");
  N.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const _ = document.createElement("canvas");
  _.style.cssText = [
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
  const T = document.createElement("div");
  T.style.cssText = [
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
  ].join(";"), T.textContent = "Connect ERP image", N.appendChild(_), N.appendChild(T), x.appendChild(N);
  const V = nm(x), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), Lx(e, 120, 120), Ro(e);
  let A = null;
  try {
    vw(e, b, () => {
      var D, he;
      return (he = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : he.call(D);
    }), A = Cs(Lc(e.addDOMWidget(
      Rc(),
      "preview",
      x,
      Ih(
        e,
        () => {
          var D, he;
          return (he = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : he.call(D);
        },
        b,
        w,
        !1
      )
    )));
  } catch {
    return;
  }
  const X = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, O = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(it)));
  }, L = km(O), R = /* @__PURE__ */ mo(o ? { ...jm(tr(e)), importing: !1, dropActive: !1, viewUnavailable: !1 } : {
    ...Pm(tr(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((D) => ({ value: D, label: D }))
  });
  let q = null;
  const j = (o ? nx : P_)({
    readState: () => tr(e),
    publishLiveState: (D) => {
      D ? (q = D, e.__panoLiveStateOverride = D) : (e.__panoLiveStateOverride === q && (e.__panoLiveStateOverride = null), q = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, O();
    },
    commitState: (D) => {
      var Y, Je, Le, ft;
      const he = lo(e, "state_json");
      if (!he) return;
      mm(e, D.active);
      const Ae = gm(e, D);
      he.value = Ae, (Y = he.callback) == null || Y.call(he, Ae), e.__panoStateCache = null, (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), (ft = (Le = e.graph) == null ? void 0 : Le.setDirtyCanvas) == null || ft.call(Le, !0, !0);
    },
    onChange: (D) => Object.assign(R, D)
  }), Q = (D = "sync", he = null) => {
    if (!o || e.__panoSceneStateV2 || !j || j.hasGestureChanges()) return !1;
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((mn) => String((mn == null ? void 0 : mn.name) || "") === "sticker_image") : null, Y = (Ae == null ? void 0 : Ae.link) ?? null;
    if (Y == null)
      return j.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Ys(e, "external-sticker")) return !1;
    const Je = jc(e, "pano_sticker_input_pose", he), Le = Array.isArray(Je) ? Je[0] : Je, ft = String(jc(e, "pano_sticker_input_state_hash", he) ?? ""), Ft = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Bt = tr(e), In = (Array.isArray(Bt == null ? void 0 : Bt.stickers) ? Bt.stickers : []).find((mn) => String((mn == null ? void 0 : mn.id) || "") === "sticker_image_1"), Dt = rg(e, "sticker_image_1", null, { external: !0 }), oi = Le && typeof Le == "object" ? Le : In || { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return j.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Y,
        stateHash: ft,
        pose: oi,
        imageWidth: Number((Dt == null ? void 0 : Dt.naturalWidth) || (Dt == null ? void 0 : Dt.width) || 0),
        imageHeight: Number((Dt == null ? void 0 : Dt.naturalHeight) || (Dt == null ? void 0 : Dt.height) || 0)
      }
    });
  }, P = o ? Wm(e, Q) : () => {
  };
  let W = 0;
  const ae = async (D) => {
    if (!o || !j || !_r(D)) return !1;
    const he = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Y = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    W += 1, R.importing = !0;
    const Je = Fc(e, `add:${he}`, async () => {
      const Le = await Dc(D), ft = await is(D, {
        fetchApi: (Ft, Bt) => cn.fetchApi(Ft, Bt)
      });
      return _e(), j.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: he,
          asset: ft,
          imageWidth: Le.width,
          imageHeight: Le.height,
          yaw_deg: Number(Y.yaw || 0),
          pitch_deg: Number(Y.pitch || 0)
        }
      });
    });
    try {
      return await Je;
    } catch {
      return !1;
    } finally {
      W = Math.max(0, W - 1), R.importing = W > 0, O();
    }
  };
  let re = null, Z = null, ce = null, Se = !1;
  const C = () => {
    var D;
    return ce && (clearTimeout(ce), ce = null), Se ? (Se = !1, ((D = j == null ? void 0 : j.commitGesture) == null ? void 0 : D.call(j)) ?? !1) : !1;
  }, _e = () => {
    var Y, Je, Le;
    const D = C(), he = (re == null ? void 0 : re.pointerId) ?? (Z == null ? void 0 : Z.pointerId);
    if (re = null, Z = null, he != null) {
      try {
        (Y = _.hasPointerCapture) != null && Y.call(_, he) && ((Je = _.releasePointerCapture) == null || Je.call(_, he));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Le = j == null ? void 0 : j.commitGesture) == null ? void 0 : Le.call(j)) ?? !1;
    return D || Ae;
  }, G = () => {
    var Y, Je, Le;
    const D = C(), he = re == null ? void 0 : re.pointerId;
    if (re = null, he != null) {
      try {
        (Y = _.hasPointerCapture) != null && Y.call(_, he) && ((Je = _.releasePointerCapture) == null || Je.call(_, he));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Le = j == null ? void 0 : j.cancelGesture) == null ? void 0 : Le.call(j)) ?? !1;
    return D || Ae;
  }, Ee = () => _e();
  j && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Ee));
  let Re = null, Ze = !1;
  if ($ && j)
    try {
      Eu(), Re = hu(o ? Z_ : B_, {
        model: R,
        onAction: (D) => {
          var Y, Je;
          if ((D == null ? void 0 : D.type) === "open-editor") {
            _e(), o || (R.aspectOpen = !1), (Y = e.__panoOpenEditor) == null || Y.call(e);
            return;
          }
          if (o) {
            if ((D == null ? void 0 : D.type) === "add-image-file") {
              ae(D.file);
              return;
            }
            j.apply(D) && O();
            return;
          }
          if ((D == null ? void 0 : D.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((D == null ? void 0 : D.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let he = D;
          if ((D == null ? void 0 : D.type) === "add-frame") {
            const Le = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            he = {
              ...D,
              ...S_(Le, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((D == null ? void 0 : D.type) === "delete-frame") {
            const Le = ki(tr(e));
            Le && (e.__panoPreviewView = Cm(Le, {
              width: _.width,
              height: _.height
            }));
          }
          const Ae = ((Je = e.__panoCutoutNodeFrame) == null ? void 0 : Je.safeRect) || null;
          R.aspectOpen = !1, j.apply({ ...he, safeRect: Ae }) && O();
        }
      }), Re.mount($), Ze = !0;
    } catch {
      Re = null, Ze = !1;
    }
  const pt = typeof ResizeObserver < "u" ? new ResizeObserver(O) : null;
  pt == null || pt.observe(N);
  const it = (D) => {
    var Ae, Y;
    X.raf = 0, X.inTick = !0;
    let he = !1;
    try {
      he = mt.stepInertia(D), (X.needsDraw || he) && (X.needsDraw = !1, (Ae = e.flags) != null && Ae.collapsed || pw(e, _, L), R.viewUnavailable = L.failed);
    } finally {
      X.inTick = !1;
    }
    (he || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(it)), Fx() && (!e.__panoDebugLastTs || D - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = D, e.__panoPreviewMode, Vc(e), Lo(x), Lo(N), Lo(_), Lo(x.parentElement), Lo((Y = x.parentElement) == null ? void 0 : Y.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, mt = yu({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (D) => {
      e.__panoPreviewView = D;
    },
    getViewportSize: () => {
      const D = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(D.width || _.clientWidth || 0)),
        h: Math.max(1, Number(D.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const D = wh();
      return {
        x: D.invert_view_x ? -1 : 1,
        y: D.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      O();
    }
  }), At = o ? N : x, hn = (D) => {
    const he = _.getBoundingClientRect();
    return {
      x: (Number(D.clientX) - he.left) * (_.width / Math.max(1, he.width)),
      y: (Number(D.clientY) - he.top) * (_.height / Math.max(1, he.height))
    };
  }, Yn = (D) => {
    var Y, Je;
    if (!o || !a) return;
    const he = tr(e), Ae = mh(
      he == null ? void 0 : he.stickers,
      String(((Y = he == null ? void 0 : he.active) == null ? void 0 : Y.selected_sticker_id) || ""),
      hn(D),
      Gc(e, _.width, _.height)
    );
    if (!Ae) {
      _.style.cursor = "grab";
      return;
    }
    if (((Je = Ae.item) == null ? void 0 : Je.locked) === !0) {
      _.style.cursor = "default";
      return;
    }
    _.style.cursor = Ae.hit.cursor || "default";
  };
  _.addEventListener("pointerdown", (D) => {
    var ft, Ft, Bt, In, Dt, oi, pn, mn, yo, vo, _o;
    if (!Hn(D, At) || D.button !== 0) return;
    if (!o) {
      const wn = ki(tr(e)), zn = e.__panoCutoutNodeFrame;
      if (!wn) {
        (ft = x.focus) == null || ft.call(x, { preventScroll: !0 }), (Ft = _.setPointerCapture) == null || Ft.call(_, D.pointerId), _.style.cursor = "grabbing", mt.startDrag(D.clientX, D.clientY, D.pointerId);
        return;
      }
      if (wn.locked === !0 || !zn || !j) return;
      const la = hn(D);
      let ai;
      if (D.shiftKey) {
        const On = Om({
          frame: zn,
          point: la,
          startRollDeg: Number(wn.roll_deg ?? wn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!On) return;
        ai = { kind: "roll", pointerId: D.pointerId, rollGesture: On };
      } else {
        const On = ((Bt = tr(e)) == null ? void 0 : Bt.ui_settings) || wh();
        ai = {
          kind: "pan",
          pointerId: D.pointerId,
          startPoint: la,
          startShot: { ...wn },
          focalPx: wi(zn, wn),
          invertX: On.invert_view_x === !0,
          invertY: On.invert_view_y === !0
        };
      }
      _e(), (In = x.focus) == null || In.call(x, { preventScroll: !0 }), (Dt = _.setPointerCapture) == null || Dt.call(_, D.pointerId), _.style.cursor = "grabbing", j.beginGesture(), re = ai;
      return;
    }
    if (!a) return;
    const he = hn(D), Ae = tr(e), Y = String(((oi = Ae == null ? void 0 : Ae.active) == null ? void 0 : oi.selected_sticker_id) || ""), Je = Gc(e, _.width, _.height), Le = mh(Ae == null ? void 0 : Ae.stickers, Y, he, Je);
    if ((pn = x.focus) == null || pn.call(x, { preventScroll: !0 }), Le && j) {
      if (mt.stopMotion(), _e(), String(((mn = Le.item) == null ? void 0 : mn.id) || "") !== Y && j.apply({ type: "select-sticker", id: Le.item.id }), ((yo = Le.item) == null ? void 0 : yo.locked) === !0) {
        O();
        return;
      }
      const wn = he, zn = Le.geometry.center;
      Z = {
        active: !0,
        kind: Le.hit.kind,
        pointerId: D.pointerId,
        startPoint: wn,
        startCenter: { ...zn },
        startSticker: { ...Le.item },
        startDistance: Math.max(1, Math.hypot(wn.x - zn.x, wn.y - zn.y)),
        startAngle: Math.atan2(wn.y - zn.y, wn.x - zn.x),
        projection: Je
      }, j.beginGesture(), (vo = _.setPointerCapture) == null || vo.call(_, D.pointerId), _.style.cursor = Le.hit.kind === "rotate" ? "grabbing" : Le.hit.kind === "move" ? "move" : Le.hit.cursor, O();
      return;
    }
    (_o = _.setPointerCapture) == null || _o.call(_, D.pointerId), _.style.cursor = "grabbing", mt.startDrag(D.clientX, D.clientY, D.pointerId);
  }), _.addEventListener("pointermove", (D) => {
    if (!o) {
      if (!re) {
        if (!mt.state.drag.active) return;
        Hn(D, At), mt.moveDrag(D.clientX, D.clientY, "pano");
        return;
      }
      if (re.pointerId !== D.pointerId || !j) return;
      if (Hn(D, At), re.kind === "pan") {
        const Ae = hn(D);
        j.updateGesture({
          type: "pan-camera",
          startShot: re.startShot,
          dx: Ae.x - re.startPoint.x,
          dy: Ae.y - re.startPoint.y,
          focalPx: re.focalPx,
          invertX: re.invertX,
          invertY: re.invertY
        });
        return;
      }
      const he = Em(re.rollGesture, hn(D), D);
      if (!he) return;
      re.rollGesture = he.gesture, j.updateGesture({ type: "set-roll", value: he.rollDeg });
      return;
    }
    if (!Z && !mt.state.drag.active) {
      Yn(D);
      return;
    }
    if (Z) {
      if (Z.pointerId !== D.pointerId || !j) return;
      Hn(D, At);
      const he = hn(D);
      let Ae = Z.startSticker;
      if (Z.kind === "move")
        Ae = ax(
          Z.startSticker,
          {
            x: Z.startCenter.x + he.x - Z.startPoint.x,
            y: Z.startCenter.y + he.y - Z.startPoint.y
          },
          Z.projection
        );
      else if (Z.kind === "scale") {
        const Y = Math.hypot(he.x - Z.startCenter.x, he.y - Z.startCenter.y);
        Ae = sx(Z.startSticker, Z.startDistance, Y);
      } else if (Z.kind === "rotate") {
        const Y = Math.atan2(he.y - Z.startCenter.y, he.x - Z.startCenter.x);
        Ae = lx(Z.startSticker, Z.startAngle, Y, D.shiftKey === !0);
      }
      j.updateGesture({ type: "set-transform", value: Ae }), O();
      return;
    }
    !a || !mt.state.drag.active || (Hn(D, At), mt.moveDrag(D.clientX, D.clientY, "pano"));
  });
  const Xn = () => {
    var he, Ae;
    if (!re && !Z) {
      if (!mt.state.drag.active) return;
      mt.endDrag(), _.style.cursor = "grab", O();
      return;
    }
    if (!j) return;
    const D = (re == null ? void 0 : re.pointerId) ?? (Z == null ? void 0 : Z.pointerId);
    re = null, Z = null;
    try {
      (he = _.hasPointerCapture) != null && he.call(_, D) && ((Ae = _.releasePointerCapture) == null || Ae.call(_, D));
    } catch {
    }
    j.cancelGesture(), _.style.cursor = "grab", O();
  }, zt = (D, he = !1) => {
    var Ae, Y, Je, Le;
    if (!o) {
      if (!re) {
        if (!mt.state.drag.active) return;
        Hn(D, At), (Ae = _.releasePointerCapture) == null || Ae.call(_, D.pointerId), _.style.cursor = "grab", mt.endDrag(), O();
        return;
      }
      if (re.pointerId !== D.pointerId || !j) return;
      Hn(D, At), re = null, (Y = _.releasePointerCapture) == null || Y.call(_, D.pointerId), _.style.cursor = "grab", he ? j.cancelGesture() : j.commitGesture(), Yn(D), O();
      return;
    }
    if (Z) {
      if (Z.pointerId !== D.pointerId || !j) return;
      Hn(D, At), Z = null, (Je = _.releasePointerCapture) == null || Je.call(_, D.pointerId), _.style.cursor = "grab", he ? j.cancelGesture() : j.commitGesture(), O();
      return;
    }
    !a || !mt.state.drag.active || (Hn(D, At), (Le = _.releasePointerCapture) == null || Le.call(_, D.pointerId), _.style.cursor = "grab", mt.endDrag(), O());
  };
  _.addEventListener("pointerup", zt), _.addEventListener("pointercancel", (D) => zt(D, !0)), _.addEventListener("lostpointercapture", Xn), _.addEventListener("pointerleave", (D) => {
    !o && re || Z || mt.state.drag.active && zt(D);
  });
  const bo = (D) => {
    const he = document.activeElement;
    if (he !== x && !x.contains(he)) return;
    if (D.key === "Escape" && (re || Z) && j) {
      Xn(), Kc(D);
      return;
    }
    if (!o || D.key !== "Delete" && D.key !== "Backspace" || !j) return;
    const Ae = D.target, Y = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Y === "INPUT" || Y === "TEXTAREA" || Ae != null && Ae.isContentEditable || R.canDelete === !0 && (_e(), j.apply({ type: "delete-selected" }) && O(), Kc(D));
  };
  window.addEventListener("keydown", bo, !0);
  const E = Ox({
    requestFrame: (D) => requestAnimationFrame(D),
    cancelFrame: (D) => cancelAnimationFrame(D),
    restore: (D) => bw(D)
  }), z = (D) => {
    var Ae, Y, Je, Le, ft, Ft;
    if (!Hn(D, At)) return;
    if (!o) {
      const Bt = ki(tr(e));
      if (Bt && Bt.locked !== !0 && j) {
        const In = bu(D);
        In !== 0 && (Se || (_e(), j.beginGesture(), Se = !0), j.updateGesture({
          type: "step-fov",
          direction: In
        }) ? (ce && clearTimeout(ce), ce = setTimeout(C, 180), O()) : j.hasGestureChanges() || (j.cancelGesture(), Se = !1));
      } else if (!Bt) {
        const In = Ch();
        mt.applyWheelEvent(D) && O(), E.schedule(In);
      }
      (Ae = D.preventDefault) == null || Ae.call(D), (Y = D.stopPropagation) == null || Y.call(D), (Je = D.stopImmediatePropagation) == null || Je.call(D);
      return;
    }
    if (!a) return;
    const he = Ch();
    mt.applyWheelEvent(D) && O(), (Le = D.preventDefault) == null || Le.call(D), (ft = D.stopPropagation) == null || ft.call(D), (Ft = D.stopImmediatePropagation) == null || Ft.call(D), E.schedule(he);
  }, te = o ? [N, _] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((D) => {
    te.forEach((he) => he.addEventListener(D, z, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((D) => {
    _.addEventListener(D, (he) => Hn(he, At)), N.addEventListener(D, (he) => Hn(he, At));
  });
  const se = lo(e, "state_json");
  let de = null, le = null;
  se && !se.__panoPreviewPatchedCb && (de = se.callback, le = (D) => {
    const he = de ? de(D) : void 0;
    return O(), he;
  }, se.callback = le, se.__panoPreviewPatchedCb = le);
  const xe = lo(e, "bg_color");
  let Me = null, we = null;
  xe && !xe.__panoPreviewPatchedCb && (Me = xe.callback, we = (D) => {
    const he = Me ? Me(D) : void 0;
    return O(), he;
  }, xe.callback = we, xe.__panoPreviewPatchedCb = we);
  const ge = e.onRemoved, De = e.onResize, Pe = e.onExecuted, p = e.onDragOver, Te = e.onDragDrop;
  let ze = null;
  const et = () => {
    o && (R.dropActive = !0, ze && clearTimeout(ze), ze = setTimeout(() => {
      ze = null, R.dropActive = !1;
    }, 140));
  }, tt = o ? function(D) {
    return (p ? p.apply(this, arguments) : !1) === !0 ? !0 : Fu(D == null ? void 0 : D.dataTransfer) ? (et(), !0) : !1;
  } : null, Be = o ? function(D) {
    var Y;
    if ((Te ? Te.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Y = D == null ? void 0 : D.dataTransfer) == null ? void 0 : Y.files) || []).find((Je) => _r(Je));
    return Ae ? (ze && clearTimeout(ze), ze = null, R.dropActive = !1, ae(Ae), !0) : !1;
  } : null;
  o && (e.onDragOver = tt, e.onDragDrop = Be);
  const ye = o ? Ix(x, {
    onActive: (D) => {
      if (D) {
        et();
        return;
      }
      ze && clearTimeout(ze), ze = null, R.dropActive = !1;
    },
    onDrop: (D) => {
      ae(D);
    }
  }) : () => {
  }, Et = function(D) {
    Xx(e, D), e.__panoLastExecutedOutput = D || null, tg(e), gx(e), Q("executed", D), Ro(e), O();
    const he = Pe ? Pe.apply(this, arguments) : void 0;
    return Ro(e), he;
  };
  e.onExecuted = Et;
  const Kt = e.onConnectionsChange, $n = function(D, he) {
    const Ae = bh(e, D, he, ["sticker_image"]), Y = bh(
      e,
      D,
      he,
      ["erp_image", "bg_erp"]
    ), Je = arguments, Le = Kt ? Kt.apply(this, Je) : void 0, ft = () => {
      X.destroyed || ((Y || Ae) && (Y && (gh(e, "background"), ew(e)), Ae && (gh(e, "external-sticker"), e.__panoLastExecutedOutput = null, tw(e))), Ae && Q("connection-change"), Ro(e), O());
    };
    return ft(), queueMicrotask(ft), Le;
  };
  e.onConnectionsChange = $n;
  const Pr = function() {
    const D = De ? De.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, O(), D;
  };
  e.onResize = Pr;
  const Tt = function() {
    return Zt(), zc.unregister(this), ge ? ge.apply(this, arguments) : void 0;
  };
  e.onRemoved = Tt;
  const Zt = () => {
    var D, he, Ae, Y, Je, Le, ft, Ft, Bt;
    X.destroyed = !0, (D = pt == null ? void 0 : pt.disconnect) == null || D.call(pt), o ? _e() : G(), _.removeEventListener("lostpointercapture", Xn), ye(), V(), window.removeEventListener("keydown", bo, !0), (Ae = (he = e.__panoStateFlushers) == null ? void 0 : he.delete) == null || Ae.call(he, Ee), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Y = j == null ? void 0 : j.destroy) == null || Y.call(j), (Je = Re == null ? void 0 : Re.unmount) == null || Je.call(Re), L.dispose(), e.__panoSurfaceScene = null, (ft = (Le = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Le.dispose) == null || ft.call(Le), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, P(), E.dispose(), ze && clearTimeout(ze), ze = null, Du.disposeOwner(e), co(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((Ft = e.__panoCutoutNodeSurface) == null ? void 0 : Ft.session) === j && (e.__panoCutoutNodeSurface = null), ((Bt = e.__panoStickersNodeSurface) == null ? void 0 : Bt.session) === j && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Pr && (e.onResize = De), e.onExecuted === Et && (e.onExecuted = Pe), e.onConnectionsChange === $n && (e.onConnectionsChange = Kt), le && (se == null ? void 0 : se.callback) === le && (se.callback = de), le && (se == null ? void 0 : se.__panoPreviewPatchedCb) === le && delete se.__panoPreviewPatchedCb, we && (xe == null ? void 0 : xe.callback) === we && (xe.callback = Me), we && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === we && delete xe.__panoPreviewPatchedCb, e.onDragOver === tt && (e.onDragOver = p), e.onDragDrop === Be && (e.onDragDrop = Te), e.onRemoved === Tt && (e.onRemoved = ge);
  };
  e.__panoDomRestore = Zt, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = j && Ze && !o ? { session: j, model: R } : null, e.__panoStickersNodeSurface = j && Ze && o ? { session: j, model: R } : null, e.__panoDomPreview = {
    widget: A,
    root: x,
    canvas: _,
    requestDraw: O,
    state: X,
    emptyHintEl: T,
    nodeSurface: e.__panoCutoutNodeSurface
  }, zc.register(e), Q("attach"), O();
}
function Oh(e, t = {}) {
  qm(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Eh(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Xm(e) && !n) {
    Lu(e);
    return;
  }
  qm(e).attach(t);
}
function ww(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Sw(e, t = 1, n = ah) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, y = Number(n), b = Number.isFinite(y) && y > 0 ? y : ah, w = Math.max(f, d), x = w > 0 ? Math.min(1, b / w) : 1;
  return {
    width: Math.max(1, Math.round(f * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function kw({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, f = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, y = () => {
    const _ = d();
    return _ === f || (f = _, o(_)), _;
  }, b = () => y();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", b), y(), { toggle: async () => {
    var _;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
      } catch {
      }
      return c ? !1 : (y(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (d())
          return y(), !0;
      } catch {
      }
    return c || (a(), y()), !1;
  }, isActive: d, destroy: () => {
    var _, T, V;
    if (!c) {
      if (c = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", b), d())
        try {
          const $ = (T = t.exitFullscreen) == null ? void 0 : T.call(t);
          (V = $ == null ? void 0 : $.catch) == null || V.call($, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const Mw = { class: "pano-preview-node-surface" }, Nw = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (be(), ke("div", Mw, [
      Fe(qt, {
        icon: e.model.fullscreen ? at(Ne).fullscreen_close : at(Ne).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (o) => {
          var a;
          return (a = t.onAction) == null ? void 0 : a.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (be(), Nr(Au, { key: 0 })) : St("", !0)
    ]));
  }
}, Ra = 140, Pw = 180, Th = 40, rc = 10;
function Fh(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Dh(e, t) {
  const n = Fh(e), r = Fh(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Lh(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((a = cn) == null ? void 0 : a.apiURL) == "function" ? cn.apiURL(o) : o;
}
function uo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return uo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Lh({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = uo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Lh(e);
}
function ig(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Aw(e) {
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
function Bc(e) {
  var o;
  const t = (o = or) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Dh(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Dh(a, n)) return t[a];
  return null;
}
function Cw(e) {
  var r, o;
  const t = Bc(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const f = uo(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function Iw(e, t = "erp_image") {
  var _, T, V, $, A, X, O, L, R, q, j, Q;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = null;
  const o = n.find((P) => String((P == null ? void 0 : P.name) || "") === String(t));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const P = n.find((W) => String((W == null ? void 0 : W.type) || "").toUpperCase() === "IMAGE" && (W == null ? void 0 : W.link) != null);
    (P == null ? void 0 : P.link) != null && (r = P.link);
  }
  if (r == null) return "";
  const a = ((T = (_ = e == null ? void 0 : e.graph) == null ? void 0 : _.links) == null ? void 0 : T[r]) || ((A = ($ = (V = or) == null ? void 0 : V.graph) == null ? void 0 : $.links) == null ? void 0 : A[r]);
  if (!a) return "";
  const c = Number(a.origin_id);
  if (!Number.isFinite(c)) return "";
  const f = (L = (O = (X = or) == null ? void 0 : X.graph) == null ? void 0 : O.getNodeById) == null ? void 0 : L.call(O, c), d = Bc(c), y = Bc(e == null ? void 0 : e.id), b = [
    (R = y == null ? void 0 : y.ui) == null ? void 0 : R.pano_input_images,
    y == null ? void 0 : y.pano_input_images,
    d == null ? void 0 : d.images,
    (q = d == null ? void 0 : d.ui) == null ? void 0 : q.pano_input_images,
    d == null ? void 0 : d.pano_input_images
  ];
  for (const P of b)
    if (Array.isArray(P))
      for (const W of P) {
        const ae = uo(W);
        if (ae) return ae;
      }
  let w = [];
  try {
    w = typeof ((j = or) == null ? void 0 : j.getNodeImageUrls) == "function" ? or.getNodeImageUrls(f) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const P of w) {
      const W = uo(P);
      if (W) return W;
    }
  if (f) {
    const P = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const W of P) {
      const ae = uo(W);
      if (ae) return ae;
    }
  }
  const x = (Q = f == null ? void 0 : f.widgets) == null ? void 0 : Q.find((P) => String((P == null ? void 0 : P.name) || "").toLowerCase() === "image"), N = String((x == null ? void 0 : x.value) || "").trim();
  return N ? cn.apiURL(`/view?filename=${encodeURIComponent(N)}&type=input&subfolder=`) : "";
}
function ic(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Rh(e, t, n, r, o, a, c) {
  var y, b, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !ig(a) || n <= 1 || r <= 1) {
    ic(t, n, r);
    return;
  }
  if (c.failed) {
    ic(t, n, r);
    return;
  }
  const f = Number(((w = (b = (y = e == null ? void 0 : e.widgets) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Ms(o, n, r),
    background: { media: a, revision: Aw(a), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : ic(t, n, r);
}
function Vh(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class Ow {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = km(() => this.requestDraw()), this.controller = yu({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Rt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: K(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: K(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, c, f;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var r, o, a;
    const t = this;
    this.node.onExecuted = function() {
      const c = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onConnectionsChange = function() {
      const c = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onResize = function() {
      const c = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), c;
    }, this.node.onRemoved = function() {
      const c = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), c;
    };
    const n = ((a = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (c) => (c == null ? void 0 : c.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...c) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var a;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (a = this.flags) != null && a.collapsed || !t.errorText) return r;
      const o = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(o.x, o.y, o.w, o.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, o.x + o.w * 0.5, o.y + o.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${Ra}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = document.createElement("canvas"), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Ra;
        },
        getHeight() {
          return Ra;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Cs(Lc(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Ra, Number(a.minHeight || 0)),
            minWidth: Math.max(Pw, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, a, c;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Eu(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ mo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = kw({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = hu(Nw, {
        model: this.surfaceModel,
        onAction: (f) => {
          var d, y;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((y = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || y.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, d;
          return (d = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : d.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (c = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || c.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = nm(n), t.addEventListener("pointerdown", (a) => {
      var c, f, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const r = (a) => {
      var c, f;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      ww(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !ig(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var c;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const a = t.getLegacyPreviewRect();
      return Vh(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var c;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - a.x, o.y - a.y, "pano"), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, y, b, w, x, N;
      const a = aw(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !Vh(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((y = t.view) == null ? void 0 : y.fov) || 100), f && ((b = this.setDirtyCanvas) == null || b.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - rc * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - Th - rc);
    return { x: rc, y: Th, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Rh(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Sm : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = Sw(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = Cw(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      f.addEventListener("loadedmetadata", d), f.addEventListener("canplay", d), f.addEventListener("timeupdate", y), f.addEventListener("play", y), f.addEventListener("pause", y), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", d), f.removeEventListener("canplay", d), f.removeEventListener("timeupdate", y), f.removeEventListener("play", y), f.removeEventListener("pause", y);
      };
      return;
    }
    const n = Iw(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const r = new Image();
    r.onload = () => {
      this.imgSrc === n && (this.img = r, this.requestDraw());
    }, r.onerror = () => {
      this.imgSrc === n && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      r.onload = null, r.onerror = null;
    }, r.src = n;
  }
  requestDraw() {
    var t, n;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var o, a;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), Rh(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, f, d, y, b, w, x, N, _, T, V, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (y = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || y.call(d), this.surfaceApp = null, (w = (b = this.surfaceHost) == null ? void 0 : b.remove) == null || w.call(b), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (N = this.root) == null ? void 0 : N.remove) == null || _.call(N);
    } catch {
    }
    try {
      Um(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (V = (T = this.node) == null ? void 0 : T.widgets) == null ? void 0 : V.find) == null ? void 0 : $.call(V, (A) => (A == null ? void 0 : A.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Ew(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new Ow(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function og(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function Vu(e) {
  return !!(e != null && e.prototype);
}
function ra(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function Tw(e, t = {}) {
  Vu(e) || Ew(e, {
    ...t,
    onOpen: ra(e, t.onOpen)
  });
}
function Fw(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Vu(e)) {
    Eh(e, {
      ...r,
      onOpen: ra(e, t.onOpen)
    });
    return;
  }
  og(e, "stickers_node_preview", (o) => {
    Eh(o, {
      ...r,
      onOpen: ra(o, t.onOpen)
    });
  });
}
function Dw(e, t = {}) {
  if (!Vu(e)) {
    Oh(e, {
      ...t,
      onOpen: ra(e, t.onOpen)
    });
    return;
  }
  og(e, "cutout_preview", (n) => {
    Oh(n, {
      ...t,
      onOpen: ra(n, t.onOpen)
    });
  });
}
const Nn = {
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
}, Fr = "pen";
function $h(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Lw(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), o = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((w) => {
      r.push(String(w || ""));
    }), !r.length)) return;
    const b = Number(y.index);
    Number.isInteger(b) ? b === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, b)) : o = r.length - 1;
  }
  function d(y) {
    r[o] !== y && (r.splice(o + 1), r.push(y), r.length > a && r.shift(), o = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      d(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = o - 1;
      return y < 0 || y >= r.length ? null : (o = y, r[o]);
    },
    redo() {
      const y = o + 1;
      return y < 0 || y >= r.length ? null : (o = y, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const y = r.length, b = Math.max(0, y - c), w = o >= 0 ? Math.max(0, Math.min(o, b)) : b, x = r.slice(w, w + c), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - w));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: f
  };
}
function Bi(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function Rw(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function Vw({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: d
}) {
  var X, O;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", b = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
    pickerHueColor: r({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (L, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return b;
  const w = ((X = t.find((L) => o(e.paintColor, L.color))) == null ? void 0 : X.id) || "", x = !w, N = a(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((O = e.customPaintColor) == null ? void 0 : O.a) ?? 1))) * 100), T = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[T] ?? 10, $ = d(), A = Array.from({ length: 8 }, (L, R) => e.customPaintHistory[R] || null);
  return {
    ...b,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: A.map((L, R) => ({
      index: R,
      color: L ? { cssColor: r(L, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function $w({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    visibilityRows: [],
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
function zw({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: f,
  visibilityRows: d,
  uiSettings: y,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function jw({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: y,
  isExternalSticker: b,
  isStickerHidden: w,
  canRestoreSelectedToInitial: x,
  iconSet: N
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let _ = [];
  if (n.length > 1)
    _ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    _ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (_ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!f }
    ], b(t) || (_.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), _.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), b(t)) {
      const R = x(), q = w(t);
      _.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !R
      }), _.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: q ? "Show" : "Hide",
        tip: q ? "Show input image" : "Hide input image",
        icon: q ? N.eye : N.eye_dashed
      });
    }
    _.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed }), b(t) || _.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f });
  } else
    _ = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!y,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((R) => ({ value: R, label: R, active: d === R }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!f }
    ];
  const T = o.corners.map((R) => ({ x: Number(R == null ? void 0 : R.x), y: Number(R == null ? void 0 : R.y) })).filter((R) => Number.isFinite(R.x) && Number.isFinite(R.y));
  if (!T.length) return { visible: !1, left: 0, top: 0, items: [] };
  const V = T.map((R) => R.x), $ = T.map((R) => R.y), A = Math.min(...V), X = Math.max(...V), O = Math.min(...$), L = Math.max(...$);
  return {
    visible: !0,
    left: (A + X) * 0.5,
    top: L + 18,
    items: _,
    anchor: { minX: A, maxX: X, minY: O, maxY: L }
  };
}
const Hw = { class: "pano-floating-right" }, Gw = ["data-settled"], Kw = ["data-ready", "data-settled"], Bw = ["aria-label", "data-tip"], Ww = {
  key: 1,
  class: "pano-camera-preview-label"
}, Uw = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (be(), ke(Qe, null, [
      B("div", Hw, [
        (be(!0), ke(Qe, null, $t(e.buttons, (r) => (be(), Nr(qt, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vi(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Vt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = B("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            B("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (be(), ke("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Fe(Xt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Bw)) : St("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (be(), ke("div", Ww, ct(e.preview.label || "Preview unavailable"), 1)) : St("", !0)
        ], 14, Kw)
      ], 8, Gw), [
        [sa, e.preview.visible]
      ])
    ], 64));
  }
}, Yw = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Xw = ["y2", "transform"], qw = ["transform"], Jw = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = vt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => vi((be(), ke("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (be(), ke("svg", Yw, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (be(!0), ke(Qe, null, $t(at(n), (c) => (be(), ke("line", {
          key: c,
          class: ut(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, Xw))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, qw),
        a[2] || (a[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [sa, e.model.visible === !0]
    ]);
  }
}, Zw = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (be(), ke("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Fe(Fm, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Fe(qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Fe(Jw, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Qw = ["aria-label"], eS = { class: "pano-canvas-confirm-title" }, tS = { class: "pano-canvas-confirm-text" }, nS = { class: "pano-canvas-confirm-actions" }, rS = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, iS = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ fn(null), r = /* @__PURE__ */ fn(null);
    let o = null;
    function a() {
      const w = r.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function c(w) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${w}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function f() {
      var T;
      const w = r.value;
      if (!w) return;
      const x = w.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const _ = a()[0] || w;
      (T = _ == null ? void 0 : _.focus) == null || T.call(_);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function y(w) {
      var $;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        w.preventDefault(), ($ = N == null ? void 0 : N.focus) == null || $.call(N);
        return;
      }
      const _ = x[0], T = x[x.length - 1], V = document.activeElement;
      if (w.shiftKey) {
        (V === _ || V === N || !(N != null && N.contains(V))) && (w.preventDefault(), T.focus());
        return;
      }
      (V === T || !(N != null && N.contains(V))) && (w.preventDefault(), _.focus());
    }
    function b(w) {
      w.target === n.value && c("confirm-cancel");
    }
    return _i(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, au(() => {
          f();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), js(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (be(), ke("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Vn(b, ["self"])
    }, [
      B("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        B("div", eS, ct(e.model.title), 1),
        B("div", tS, ct(e.model.text), 1),
        B("div", nS, [
          x[0] || (x[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", rS, ct(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Qw)
    ], 512)) : St("", !0);
  }
}, oS = ["data-paint-pane"], aS = ["hidden"], sS = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], lS = ["aria-pressed", "disabled"], cS = ["hidden"], uS = { class: "pano-paint-color-pop-head" }, fS = { class: "pano-paint-color-field" }, dS = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, hS = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, pS = { class: "pano-paint-color-field" }, mS = { class: "pano-paint-alpha-wrap" }, gS = ["value"], bS = { "data-paint-alpha-value": "" }, yS = ["hidden"], vS = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, _S = ["data-paint-history-index", "aria-label", "disabled"], xS = ["data-paint-footer"], wS = ["data-paint-group"], SS = ["hidden"], kS = ["value", "disabled"], MS = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, NS = ["hidden"], PS = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(r) {
      return { "--swatch": String((r == null ? void 0 : r.cssColor) || "") };
    }
    function n(r) {
      return r ? { "--swatch": String(r.cssColor || "") } : {};
    }
    return (r, o) => (be(), ke("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (be(!0), ke(Qe, null, $t(e.panes, (a) => {
        var c;
        return be(), ke("div", {
          key: a.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (be(), ke("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (be(!0), ke(Qe, null, $t(e.paintSwatches, (f) => (be(), ke("button", {
              key: f.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Vt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, sS))), 128)),
            B("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Vt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, lS),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Vt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", uS, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Vt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", fS, [
                B("div", dS, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Vt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", hS, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Vt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", pS, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", mS, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, gS),
                  B("span", bS, ct(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", vS, [
                  (be(!0), ke(Qe, null, $t(e.state.historyEntries || [], (f) => (be(), ke("button", {
                    key: f.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Vt(n(f.color))
                  }, null, 14, _S))), 128))
                ])
              ], 8, yS)
            ], 12, cS)
          ], 10, aS)) : St("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (be(!0), ke(Qe, null, $t(a.tools, (f) => {
                var d;
                return be(), Nr(qt, {
                  key: `${a.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, wS),
            B("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              B("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Vt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, kS),
              B("span", MS, ct(e.state.sizeText || "10"), 1)
            ], 10, SS),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Fe(qt, {
                icon: at(Ne).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, NS)
          ], 8, xS)
        ], 10, oS);
      }), 128))
    ], 2));
  }
}, AS = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ fn(null), r = /* @__PURE__ */ fn(null), o = /* @__PURE__ */ fn(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, f) => (be(), ke(Qe, null, [
      B("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      B("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        B("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, CS = {
  key: 0,
  class: "pano-cutout-menu"
}, IS = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, OS = ["data-aspect"], ES = ["data-action", "aria-label", "data-tip", "disabled"], TS = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (be(), ke("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Vt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (be(!0), ke(Qe, null, $t(e.model.items || [], (r) => (be(), ke(Qe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (be(), ke("div", CS, [
          B("button", IS, [
            Fe(Xt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: ut(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (be(!0), ke(Qe, null, $t(r.choices || [], (o) => (be(), ke("button", {
              key: o.value,
              class: ut(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, ct(o.label), 11, OS))), 128))
          ], 2)
        ])) : (be(), ke("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Fe(Xt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, ES))
      ], 64))), 128))
    ], 4));
  }
}, FS = {
  class: "pano-side",
  "data-side": ""
}, DS = { class: "pano-side-head" }, LS = { class: "pano-side-title" }, RS = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, VS = {
  key: 0,
  class: "pano-side-scroll"
}, $S = { class: "pano-inspector" }, zS = { class: "pano-ui-row pano-coverage-row" }, jS = ["data-selected"], HS = ["aria-pressed", "disabled"], GS = ["aria-pressed", "disabled"], KS = {
  key: 0,
  class: "pano-section-title"
}, BS = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, WS = {
  class: "pano-picker",
  "data-picker": "selection"
}, US = ["disabled"], YS = { class: "pano-picker-label" }, XS = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, qS = ["hidden"], JS = ["data-selection-id"], ZS = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, QS = {
  key: 2,
  class: "pano-state-actions"
}, ek = ["disabled"], tk = ["data-key"], nk = ["min", "max", "step", "value", "disabled", "data-param-key"], rk = ["min", "max", "step", "value", "disabled", "data-param-key"], ik = { class: "pano-visibility-section" }, ok = { class: "pano-visibility-stack" }, ak = ["data-visibility-row"], sk = { class: "pano-visibility-name" }, lk = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, ck = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], uk = ["open"], fk = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, dk = { class: "pano-ui-settings-body" }, hk = { class: "pano-ui-row" }, pk = ["data-selected"], mk = ["aria-pressed"], gk = ["aria-pressed"], bk = { class: "pano-ui-row" }, yk = ["data-selected"], vk = ["aria-pressed"], _k = ["aria-pressed"], xk = {
  key: 1,
  class: "pano-side-footer"
}, wk = ["data-action"], Sk = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const a = t.model;
      return !a || typeof a != "object" ? !1 : Object.keys(a).length > 0 && !!a.coverage;
    });
    function r(a) {
      return { "--v": `${Number((a == null ? void 0 : a.fillPct) || 0)}%` };
    }
    function o(a, c) {
      return (c == null ? void 0 : c.paramsDisabled) === !0 || (a == null ? void 0 : a.enabled) === !1;
    }
    return (a, c) => {
      var f, d, y, b, w;
      return be(), ke("div", FS, [
        B("div", DS, [
          B("div", LS, [
            B("span", RS, [
              Fe(Xt, {
                icon: at(Ne).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, ct(e.nodeTitle), 1)
          ]),
          c[0] || (c[0] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        c[11] || (c[11] = B("div", { class: "pano-divider" }, null, -1)),
        n.value ? (be(), ke("div", VS, [
          B("div", $S, [
            c[10] || (c[10] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", zS, [
              c[1] || (c[1] = B("label", null, "Coverage", -1)),
              B("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((d = e.model.coverage) == null ? void 0 : d.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, HS),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "180", 8, GS)
              ], 8, jS)
            ]),
            e.model.transformTitle !== !1 ? (be(), ke("div", KS, [...c[2] || (c[2] = [
              B("span", null, "Transform", -1)
            ])])) : St("", !0),
            e.model.selectionPicker ? (be(), ke("div", BS, [
              B("label", null, ct(e.model.selectionPicker.label), 1),
              B("div", WS, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", YS, [
                    e.model.selectionPicker.currentIcon ? (be(), ke("span", XS, [
                      Fe(Xt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : St("", !0),
                    B("span", null, ct(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  c[3] || (c[3] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, US),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (be(!0), ke(Qe, null, $t(e.model.selectionPicker.items || [], (x) => (be(), ke("button", {
                    key: x.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: x.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": x.id
                  }, [
                    x.icon ? (be(), ke("span", ZS, [
                      Fe(Xt, {
                        icon: x.icon
                      }, null, 8, ["icon"])
                    ])) : St("", !0),
                    B("span", null, ct(x.label), 1)
                  ], 10, JS))), 128))
                ], 8, qS)
              ])
            ])) : St("", !0),
            e.model.copyStateButton ? (be(), ke("div", QS, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Fe(Xt, {
                  icon: at(Ne).copy
                }, null, 8, ["icon"]),
                B("span", null, ct(e.model.copyStateButton.label), 1)
              ], 8, ek)
            ])) : St("", !0),
            B("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (be(!0), ke(Qe, { key: 0 }, $t(e.model.notes, (x) => (be(), ke("div", {
                key: x,
                class: "pano-param-note"
              }, ct(x), 1))), 128)) : (be(!0), ke(Qe, { key: 1 }, $t(e.model.params || [], (x) => (be(), ke("div", {
                key: x.key,
                class: "pano-field",
                "data-key": x.key
              }, [
                B("label", null, ct(x.label), 1),
                B("input", {
                  type: "range",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.value,
                  disabled: o(x, e.model),
                  style: Vt(r(x)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": x.key
                }, null, 12, nk),
                B("input", {
                  type: "number",
                  min: x.min,
                  max: x.max,
                  step: x.step,
                  value: x.displayValue,
                  disabled: o(x, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": x.key
                }, null, 8, rk)
              ], 8, tk))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (be(), ke(Qe, { key: 3 }, [
              c[5] || (c[5] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", ik, [
                c[4] || (c[4] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", ok, [
                  (be(!0), ke(Qe, null, $t(e.model.visibilityRows, (x) => (be(), ke("div", {
                    key: x.key,
                    class: ut(["pano-visibility-row", { "is-hidden": x.visible === !1, "is-disabled": x.enabled === !1 }]),
                    "data-visibility-row": x.key
                  }, [
                    B("span", sk, [
                      B("span", lk, [
                        Fe(Xt, {
                          icon: x.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, ct(x.label), 1)
                    ]),
                    B("button", {
                      class: ut(["pano-visibility-toggle", { active: x.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": x.key,
                      "aria-label": x.ariaLabel,
                      "aria-pressed": x.visible === !0 ? "true" : "false",
                      "data-tip": x.tip,
                      disabled: x.enabled === !1
                    }, [
                      Fe(Xt, {
                        icon: x.visible === !0 ? at(Ne).eye : at(Ne).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, ck)
                  ], 10, ak))), 128))
                ])
              ])
            ], 64)) : St("", !0),
            e.model.uiSettings ? (be(), ke("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                c[6] || (c[6] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", fk, [
                  Fe(Xt, {
                    icon: at(Ne).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", dk, [
                B("div", hk, [
                  c[7] || (c[7] = B("label", null, "Drag X", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, mk),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, gk)
                  ], 8, pk)
                ]),
                B("div", bk, [
                  c[8] || (c[8] = B("label", null, "Drag Y", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, vk),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, _k)
                  ], 8, yk)
                ]),
                c[9] || (c[9] = B("div", { class: "pano-ui-row" }, [
                  B("span"),
                  B("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, uk)) : St("", !0)
          ])
        ])) : St("", !0),
        (e.model.footerButtons || []).length ? (be(), ke("div", xk, [
          (be(!0), ke(Qe, null, $t(e.model.footerButtons, (x) => (be(), ke("button", {
            key: x.action,
            class: ut(["pano-btn", { "pano-btn-primary": x.primary === !0 }]),
            type: "button",
            "data-action": x.action
          }, ct(x.label), 11, wk))), 128))
        ])) : St("", !0)
      ]);
    };
  }
}, kk = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (be(), ke("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Vt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ct(e.model.text || ""), 7));
  }
}, Mk = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Nk = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (be(), ke("div", Mk, [
      (be(!0), ke(Qe, null, $t(e.buttons, (r) => vi((be(), Nr(qt, {
        key: r.key,
        "extra-class": {
          active: r.active,
          "pano-btn-icon-accent": r.accent
        },
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { [r.attr]: r.value, disabled: r.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [sa, r.visible !== !1]
      ])), 128))
    ]));
  }
}, Pk = ["data-video-ready"], Ak = { class: "pano-video-transport-shell" }, Ck = { class: "pano-video-controls-left" }, Ik = { class: "pano-video-filmstrip" }, Ok = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, Ek = ["src", "onLoad"], Tk = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Fk = ["max", "value", "disabled"], Dk = { class: "pano-video-controls-right" }, Lk = ["data-has-audio"], Rk = { class: "pano-video-volume-pop" }, Vk = ["value", "disabled"], $k = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause" : "Play";
    }), r = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause video" : "Play video";
    }), o = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? Ne.pause : Ne.play;
    }), a = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? Ne.loop_off : Ne.loop;
    }), d = vt(() => {
      var L, R;
      return ((L = t.state) == null ? void 0 : L.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = vt(() => {
      var L, R, q;
      return ((L = t.state) == null ? void 0 : L.hasAudio) !== !0 ? Ne.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) <= 0 ? Ne.volume_muted : Ne.volume2;
    }), b = vt(() => {
      var L;
      return Math.max(0, Math.min(100, Number(((L = t.state) == null ? void 0 : L.progressPct) || 0)));
    }), w = vt(() => ({ left: `${b.value}%` })), x = vt(() => {
      var j, Q;
      const L = (j = t.state) == null ? void 0 : j.volumePct, R = Number(((Q = t.state) == null ? void 0 : Q.volume) ?? 1) * 100, q = Number(L ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, q))}%`
      };
    }), N = vt(() => {
      var q, j;
      const R = [
        String(((q = t.state) == null ? void 0 : q.currentTimeLabel) || "0:00"),
        String(((j = t.state) == null ? void 0 : j.durationLabel) || "0:00")
      ].reduce((Q, P) => Math.max(Q, P.length), 4);
      return `${Math.max(4, R)}ch`;
    }), _ = vt(() => ({ "--pano-video-time-ch": N.value })), T = vt(() => {
      var q, j;
      const L = Array.isArray((q = t.state) == null ? void 0 : q.thumbnails) ? t.state.thumbnails : [];
      if (L.length) return L;
      const R = Math.max(7, Number(((j = t.state) == null ? void 0 : j.thumbnailCount) || 9));
      return Array.from({ length: R }, (Q, P) => ({
        id: `placeholder-${P}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ fn(/* @__PURE__ */ new Set()), $ = (L) => String((L == null ? void 0 : L.id) || (L == null ? void 0 : L.src) || (L == null ? void 0 : L.label) || ""), A = (L) => V.value.has($(L)), X = (L) => {
      const R = new Set(V.value);
      R.add($(L)), V.value = R;
    };
    _i(T, (L) => {
      const R = new Set(L.map($)), q = /* @__PURE__ */ new Set();
      for (const j of V.value)
        R.has(j) && q.add(j);
      V.value = q;
    }, { immediate: !0 });
    const O = vt(() => {
      var L;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((L = t.state) == null ? void 0 : L.shellMaxWidthPx) || 640))}px`
      };
    });
    return (L, R) => (be(), ke("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Vt(O.value)
    }, [
      R[1] || (R[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", Ak, [
        B("div", Ck, [
          Fe(qt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: Vt(_.value)
          }, ct(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", Ik, [
          B("div", Ok, [
            (be(!0), ke(Qe, null, $t(T.value, (q) => (be(), ke("div", {
              key: $(q),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !q.src,
                "is-loaded": q.src && A(q)
              }])
            }, [
              q.src ? (be(), ke("img", {
                key: 0,
                src: q.src,
                alt: "",
                draggable: "false",
                onLoad: (j) => X(q)
              }, null, 40, Ek)) : (be(), ke("span", Tk))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: Vt(w.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            B("span", { class: "pano-video-playhead-line" }, null, -1),
            B("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          B("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, Fk)
        ]),
        B("div", Dk, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: Vt(_.value)
          }, ct(e.state.durationLabel || "0:00"), 5),
          Fe(qt, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: a.value,
            tip: c.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", Rk, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Vt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Vk)
            ]),
            Fe(qt, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Lk)
        ])
      ])
    ], 14, Pk));
  }
}, zk = { class: "pano-floating-top" }, jk = ["data-selected", "data-view-count"], Hk = ["data-view", "aria-pressed", "aria-label", "disabled"], Gk = { class: "label" }, Kk = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return be(), ke("div", zk, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (be(!0), ke(Qe, null, $t(e.buttons, (o) => vi((be(), ke("button", {
            key: o.key,
            class: ut(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Fe(Xt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", Gk, ct(o.label), 1)
          ], 10, Hk)), [
            [sa, o.visible !== !1]
          ])), 128))
        ], 8, jk)
      ]);
    };
  }
};
function ag(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ne.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ne.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ne.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ne.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ne.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ne.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ne.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ne.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ne.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ne.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ne.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ne.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ne.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ne.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ne.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ne.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ne.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ne.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ne.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ne.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ne.lasso_tool }
        ]
      }
    ]
  };
}
const Bk = ["aria-label"], Wk = { class: "pano-stage-wrap" }, Uk = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Yk = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) }
  },
  emits: ["close", "image-file-selected", "image-file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, f = null;
    const d = /* @__PURE__ */ fn(null), y = /* @__PURE__ */ fn(null), b = /* @__PURE__ */ fn(null);
    function w() {
      var P, W;
      return ((W = (P = b.value) == null ? void 0 : P.getRefs) == null ? void 0 : W.call(P)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(P) {
      var W, ae;
      return ((ae = (W = y.value) == null ? void 0 : W.open) == null ? void 0 : ae.call(W, P)) === !0;
    }
    function N(P) {
      o("image-file-selected", P);
    }
    function _(P) {
      o("image-file-cancelled", P);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const T = vt(() => r.readOnly === !0), V = vt(() => r.shellPreset || ag(r.type)), $ = vt(() => {
      var W, ae, re;
      const P = String((((W = r.uiState) == null ? void 0 : W.stageStatus) === "failed" ? (ae = r.uiState) == null ? void 0 : ae.stageStatusDetail : (re = r.uiState) == null ? void 0 : re.stageWarningDetail) ?? "");
      return P === "background" ? "Background preview unavailable. Re-run the node to refresh it." : P === "stickers" ? "One or more sticker previews are unavailable." : P === "frame" ? "The editor hit a rendering error. Check the browser console for details." : P === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : P.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), A = vt(() => {
      var W;
      const P = Array.isArray((W = V.value) == null ? void 0 : W.floatingButtons) ? V.value.floatingButtons.slice() : [];
      return T.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ne.fullscreen
      }), P;
    });
    function X() {
      const P = d.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((W) => W instanceof HTMLElement ? !W.hidden && W.tabIndex >= 0 && W.offsetParent !== null : !1) : [];
    }
    function O() {
      var ae;
      const W = X()[0] || d.value;
      (ae = W == null ? void 0 : W.focus) == null || ae.call(W);
    }
    function L() {
      var P;
      f != null && f.isConnected && ((P = f.focus) == null || P.call(f)), f = null;
    }
    function R(P) {
      var W, ae, re, Z;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const ce = X();
          if (!ce.length) {
            P.preventDefault(), (ae = (W = d.value) == null ? void 0 : W.focus) == null || ae.call(W);
            return;
          }
          const Se = ce[0], C = ce[ce.length - 1], _e = document.activeElement;
          if (P.shiftKey) {
            (_e === Se || _e === d.value || !((re = d.value) != null && re.contains(_e))) && (P.preventDefault(), C.focus());
            return;
          }
          (_e === C || !((Z = d.value) != null && Z.contains(_e))) && (P.preventDefault(), Se.focus());
          return;
        }
        P.key === "Escape" && o("close");
      }
    }
    function q() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function j() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function Q(P) {
      document.removeEventListener("keydown", R), P ? (f || (f = document.activeElement), q(), document.addEventListener("keydown", R), au(() => {
        O();
      })) : (j(), L());
    }
    return cu(() => {
      Q(r.open);
    }), js(() => {
      j(), document.removeEventListener("keydown", R), L();
    }), _i(() => r.open, (P) => {
      Q(P);
    }), (P, W) => e.open ? (be(), ke("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: W[0] || (W[0] = Vn((ae) => o("close"), ["self"]))
    }, [
      B("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        B("div", Wk, [
          W[1] || (W[1] = B("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          W[2] || (W[2] = B("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          W[3] || (W[3] = B("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (be(), ke("div", Uk, ct($.value), 1)) : St("", !0),
          W[4] || (W[4] = B("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          Fe(AS, {
            ref_key: "paintOverlaysRef",
            ref: b
          }, null, 512),
          Fe(Dm, {
            ref_key: "imageFilePickerRef",
            ref: y,
            onFileSelected: N,
            onFileCancelled: _
          }, null, 512),
          T.value ? St("", !0) : (be(), ke(Qe, { key: 1 }, [
            Fe(Nk, {
              buttons: e.uiState.toolButtons || V.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Fe(Zw, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            Fe(PS, {
              "paint-swatches": e.paintSwatches,
              panes: V.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Fe($k, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Fe(Kk, {
            buttons: e.uiState.viewButtons || V.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Fe(Uw, {
            buttons: e.uiState.floatingButtons || A.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Fe(TS, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Fe(kk, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Fe(iS, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? St("", !0) : (be(), Nr(Sk, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Bk)
    ])) : St("", !0);
  }
}, nr = "loading", po = "ready", rr = "failed";
function sg(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function lg(e, t = "") {
  return e && (e.__panoLoadState = po, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function cg(e, t = "") {
  return e && (e.__panoLoadState = rr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wc(e, t) {
  return e ? e.__panoLoadState === rr ? rr : typeof t == "function" && t(e) ? po : nr : po;
}
function Uc(e) {
  return Wc(e) === rr;
}
function Xk({ presented: e, background: t = po, stickers: n = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === nr, a = r.includes(nr);
  if (o && a) return { status: nr, detail: "mixed" };
  if (o) return { status: nr, detail: "background" };
  if (a) return { status: nr, detail: "stickers" };
  const c = t === rr, f = r.includes(rr);
  return c && f ? { status: rr, detail: "mixed" } : c ? { status: rr, detail: "background" } : f ? { status: rr, detail: "stickers" } : { status: po, detail: "" };
}
function Wi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function zh(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function qk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function jh(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Jk(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = qk(e == null ? void 0 : e.graph, n)), r;
}
function Zk(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Qk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function eM(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function tM({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const L = String(O[0] || "").trim();
      if (L)
        return Wi(t, {
          filename: L,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const R of O) {
        const q = o(R);
        if (q) return q;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Wi(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const L = String(O.type || "").trim().toLowerCase();
    if (L === "dataurl") return String(O.value || "");
    if (L !== "comfy_image") return "";
    const R = String(O.filename || "").trim();
    return R ? Wi(t, {
      filename: R,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, c = (O) => {
    const L = e == null ? void 0 : e.nodeOutputs;
    if (!L || O == null) return null;
    const R = String(O);
    return L instanceof Map ? L.get(O) || L.get(R) || L.get(Number(R)) || null : L[O] || L[R] || null;
  }, f = (O, L) => {
    var q;
    const R = c(O == null ? void 0 : O.id);
    return Array.isArray((q = R == null ? void 0 : R.ui) == null ? void 0 : q[L]) ? R.ui[L] : Array.isArray(R == null ? void 0 : R[L]) ? R[L] : [];
  }, d = (O, L) => {
    const R = c(O == null ? void 0 : O.id);
    return R != null && R.ui && Object.prototype.hasOwnProperty.call(R.ui, L) ? R.ui[L] : R && Object.prototype.hasOwnProperty.call(R, L) ? R[L] : null;
  }, y = (O, L) => {
    const R = d(O, "pano_sticker_input_state_hash"), q = Array.isArray(R) ? R[0] : R;
    return String(q ?? "").trim() || eM(L);
  }, b = (O) => {
    const L = [], R = /* @__PURE__ */ new Set();
    for (const q of O || []) {
      const j = o(q);
      !j || R.has(j) || (R.add(j), L.push(j));
    }
    return L;
  }, w = (O, L) => {
    var j;
    const R = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && R.push(O.images), Array.isArray((j = O == null ? void 0 : O.ui) == null ? void 0 : j.images) && O.ui.images.length && R.push(O.ui.images);
    const q = [];
    for (const Q of R)
      L >= 0 && L < Q.length && q.push(Q[L]), q.push(...Q);
    return q;
  }, x = (O, L) => {
    var G;
    const R = String(L || "").trim();
    if (!R) return { src: "", sourceType: "", inputName: "" };
    const q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [], j = q.findIndex((Ee) => String((Ee == null ? void 0 : Ee.name) || "") === R);
    if (j < 0) return { src: "", sourceType: "", inputName: R };
    const Q = q[j], P = Q == null ? void 0 : Q.link;
    if (P == null) return { src: "", sourceType: "", inputName: R };
    const { originId: W, originSlot: ae } = jh(zh(O == null ? void 0 : O.graph, P));
    if (W == null) return { src: "", sourceType: "", inputName: R };
    const re = Jk(O, j, W);
    if (!re) return { src: "", sourceType: "", inputName: R };
    const Z = Number(ae || 0);
    let ce = [];
    try {
      ce = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(re) || [] : [];
    } catch {
      ce = [];
    }
    if (Array.isArray(ce) && ce.length) {
      const Ee = [];
      Z >= 0 && Z < ce.length && Ee.push(ce[Z]), Ee.push(...ce);
      const Re = b(Ee);
      if (Re.length)
        return { src: Re[0], srcCandidates: Re, sourceType: "appNodeImageUrls", inputName: R };
    }
    const Se = b(w(c((re == null ? void 0 : re.id) ?? W), Z));
    if (Se.length)
      return { src: Se[0], srcCandidates: Se, sourceType: "nodeOutputs", inputName: R };
    const C = Array.isArray(re == null ? void 0 : re.imgs) ? re.imgs : [];
    if (C.length) {
      const Ee = [];
      Z >= 0 && Z < C.length && Ee.push(C[Z]), Ee.push(...C);
      const Re = b(Ee);
      if (Re.length)
        return { src: Re[0], srcCandidates: Re, sourceType: "nodeImgs", inputName: R };
    }
    const _e = (G = re == null ? void 0 : re.widgets) == null ? void 0 : G.find((Ee) => String((Ee == null ? void 0 : Ee.name) || "").toLowerCase() === "image");
    if (_e) {
      let Ee = o(_e.value);
      if (Ee && !Ee.includes("/") && !Ee.includes(":") && (re.comfyClass === "LoadImage" || re.type === "LoadImage") && (Ee = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Ee)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Ee)}&type=input&subfolder=`), Ee) return { src: Ee, sourceType: "widget", inputName: R };
    }
    return { src: "", sourceType: "", inputName: R };
  }, N = (O, L = []) => {
    const R = Array.isArray(L) ? L : [L];
    for (const q of R) {
      const j = x(O, q);
      if (String((j == null ? void 0 : j.src) || "").trim()) return j;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (O) => {
    const L = String(O || "").trim();
    if (!L) return [];
    if (Zk(L)) return [L];
    const { filename: R, subfolder: q } = Qk(L);
    return R ? b([
      Wi(t, { filename: R, subfolder: q, type: "temp" }),
      Wi(t, { filename: R, subfolder: q, type: "output" }),
      Wi(t, { filename: R, subfolder: q, type: "input" }),
      L
    ]) : [L];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var L, R;
      try {
        (R = (L = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : L.forEach) == null || R.call(L, (q, j, Q) => {
          var P;
          q != null && q.img && ((P = r == null ? void 0 : r.isImageLoadFailed) != null && P.call(r, q.img)) && Q.delete(j);
        });
      } catch {
      }
    },
    externalStateHash: y,
    invalidateUiImage: (O, L) => {
      var R;
      (R = O == null ? void 0 : O.delete) == null || R.call(O, `__ui__${String(L || "")}`);
    },
    linkedValue: (O, L) => {
      var Q, P, W, ae;
      const R = String(L || ""), q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.find((re) => String((re == null ? void 0 : re.name) || "") === R) : null;
      if ((q == null ? void 0 : q.link) != null) {
        const { originId: re, originSlot: Z } = jh(zh(O == null ? void 0 : O.graph, q.link)), ce = c(re), Se = [
          ce == null ? void 0 : ce.output,
          ce == null ? void 0 : ce.result,
          (Q = ce == null ? void 0 : ce.data) == null ? void 0 : Q.output,
          (P = ce == null ? void 0 : ce.data) == null ? void 0 : P.result,
          (W = ce == null ? void 0 : ce.ui) == null ? void 0 : W.output,
          (ae = ce == null ? void 0 : ce.ui) == null ? void 0 : ae.result
        ];
        for (const C of Se) {
          if (!Array.isArray(C)) continue;
          const _e = C[Number(Z || 0)];
          if (typeof _e == "string" && _e.trim()) return _e;
        }
      }
      const j = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((re) => String((re == null ? void 0 : re.name) || "") === R) : null;
      return String((j == null ? void 0 : j.value) || "");
    },
    loadPreferredExactLinkedImage: (O, L = [], R = null, q = "") => {
      var Ze;
      const j = Array.isArray(L) ? L : [L], Q = N(O, j), W = (Array.isArray(Q == null ? void 0 : Q.srcCandidates) && Q.srcCandidates.length ? Q.srcCandidates : [Q == null ? void 0 : Q.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!W.length) return null;
      const ae = b(W.flatMap((pt) => _(pt)));
      if (!ae.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const re = String(q || j.join("|") || "image_exact"), Z = W.join(`
`), ce = O.__panoLinkedInputImageCache.get(re);
      if (ce && ce.srcRaw === Z && ce.img) return ce.img;
      const Se = n || globalThis.Image;
      if (typeof Se != "function") return null;
      const C = new Se();
      (Ze = r == null ? void 0 : r.markImageLoading) == null || Ze.call(r, C, Z);
      const _e = { srcRaw: Z, resolvedSrc: "", img: C };
      O.__panoLinkedInputImageCache.set(re, _e);
      let G = -1;
      const Ee = (pt) => {
        var it, mt, At;
        pt === "ready" ? (it = r == null ? void 0 : r.markImageReady) == null || it.call(r, C, Z) : (mt = r == null ? void 0 : r.markImageFailed) == null || mt.call(r, C, Z), R == null || R(C), (At = O.setDirtyCanvas) == null || At.call(O, !0, !0);
      }, Re = () => {
        if (G += 1, G >= ae.length) {
          Ee("failed");
          return;
        }
        _e.resolvedSrc = ae[G], C.src = _e.resolvedSrc;
      };
      return C.onload = () => Ee("ready"), C.onerror = () => {
        if (G + 1 < ae.length) {
          Re();
          return;
        }
        Ee("failed");
      }, Re(), C;
    },
    output: c,
    resolvePreferredExactLinkedSource: N,
    source: o,
    uiImage: (O, L, R, q = null) => {
      var Z, ce, Se;
      const j = f(O, L)[0] || null, Q = o(j);
      if (!Q) return null;
      const P = `__ui__${L}`, W = (Z = R == null ? void 0 : R.get) == null ? void 0 : Z.call(R, P);
      if (W && W.__panoSrc === Q) return W;
      const ae = n || globalThis.Image;
      if (typeof ae != "function") return null;
      const re = new ae();
      return re.__panoSrc = Q, (ce = r == null ? void 0 : r.markImageLoading) == null || ce.call(r, re, Q), re.onload = () => {
        var C;
        (C = r == null ? void 0 : r.markImageReady) == null || C.call(r, re, Q), q == null || q(re);
      }, re.onerror = () => {
        var C;
        (C = r == null ? void 0 : r.markImageFailed) == null || C.call(r, re, Q), q == null || q(re);
      }, re.src = Q, (Se = R == null ? void 0 : R.set) == null || Se.call(R, P, re), re;
    },
    uiList: f,
    uiValue: d
  };
}
const nM = "state_json", Va = "sticker_image_1", rM = "external_image", $a = "pano_sticker_input_images", iM = !0, as = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], fr = Math.PI / 180, gi = 180 / Math.PI, oc = 1, oM = "rgb(255, 221, 87)", aM = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, sM = 64, Hh = 40, ac = 16, lM = 0.45, Gh = 180, cM = 160, Es = 24, uM = 4, fM = 4, za = /* @__PURE__ */ new Map(), Kh = /* @__PURE__ */ new Map(), ni = /* @__PURE__ */ new Map(), dM = 12, ir = tM({
  app: or,
  api: cn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Uc,
    markImageFailed: cg,
    markImageLoading: sg,
    markImageReady: lg
  }
}), hM = ir.assetSource, pM = ir.source, sc = ir.uiImage, mM = ir.invalidateUiImage, gM = ir.resolvePreferredExactLinkedSource, lc = ir.loadPreferredExactLinkedImage;
function ja(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function bM(e) {
  return 1 - Math.pow(1 - e, 3);
}
function yM(e, t, n) {
  const r = K((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function vM(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ni.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ni.delete(t), ni.set(t, n), n);
}
function _M(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ni.delete(n), ni.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ni.size > dM; ) {
      const o = ni.keys().next().value;
      if (!o) break;
      ni.delete(o);
    }
}
function xM(e) {
  return e * e * e;
}
function Xs(e, t, n) {
  return { x: e, y: t, z: n };
}
function Bh(e, t) {
  return Xs(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wh(e, t) {
  return Xs(e.x * t, e.y * t, e.z * t);
}
function cc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function wM(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xs(e.x / t, e.y / t, e.z / t);
}
function Ha(e) {
  return {
    yaw: Rt(Math.atan2(e.x, e.z) * gi),
    pitch: K(Math.asin(K(e.y, -1, 1)) * gi, -90, 90)
  };
}
function Dr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, f = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (f - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function Qr(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function uc(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return Qr(e, t);
  const d = K((a * r + c * o) / f, 0, 1), y = Number(t.x || 0) + r * d, b = Number(t.y || 0) + o * d, w = Number(e.x || 0) - y, x = Number(e.y || 0) - b;
  return w * w + x * x;
}
function Gn(e, t, n) {
  return e + (t - e) * n;
}
function dr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${K(n, 0, 1)})`;
}
function SM(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ga = { fillStyle: "", url: "" };
function kM(e, t, n) {
  if (Ga.url && Ga.fillStyle === String(e || ""))
    return Ga.url;
  const r = SM(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Es}" height="${Es}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ga = { fillStyle: String(e || ""), url: r }, r;
}
function ss(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Fn(e) {
  return {
    r: K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: K(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function an(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function MM(e) {
  return as.some((t) => ss(e, t.color));
}
function fc(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = K(Number(t), 0, 1), a = K(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), f = r * 6 - c, d = a * (1 - o), y = a * (1 - f * o), b = a * (1 - (1 - f) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g: b, b: d };
    case 1:
      return { r: y, g: a, b: d };
    case 2:
      return { r: d, g: a, b };
    case 3:
      return { r: d, g: y, b: a };
    case 4:
      return { r: b, g: d, b: a };
    default:
      return { r: a, g: d, b: y };
  }
}
function dc(e) {
  const t = K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let f = 0;
  c > 1e-6 && (o === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: f, s: d, v: o };
}
function Ui(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const ug = "pano_suite.ui_settings.v1", fg = "pano_suite.node_grid_visibility.v1";
let Zi = null, hr = null;
function ls(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function NM() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ug)) || "").trim();
    if (!t) return Zi ? ls(Zi) : null;
    const n = JSON.parse(t), r = ls(n);
    return Zi = r, r;
  } catch {
    return Zi ? ls(Zi) : null;
  }
}
function PM(e) {
  var n;
  const t = ls(e);
  Zi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ug, JSON.stringify(t));
  } catch {
  }
  return t;
}
function dg() {
  var e;
  if (hr && typeof hr == "object")
    return hr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(fg)) || "").trim();
    if (!t)
      return hr = {}, hr;
    const n = JSON.parse(t);
    return hr = n && typeof n == "object" ? n : {}, hr;
  } catch {
    return hr = {}, hr;
  }
}
function AM(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = dg()[n];
  return typeof o == "boolean" ? o : !!t;
}
function CM(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = dg();
  r[n] = !!t, hr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(fg, JSON.stringify(r));
  } catch {
  }
}
function IM(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Uh(e) {
  const { paintCount: t, maskCount: n } = IM(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, a = 0;
  return r.forEach((c) => {
    String((c == null ? void 0 : c.layerKind) || "paint") === "mask" ? a += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: a,
    totalPaintCount: t + o,
    totalMaskCount: n + a
  };
}
function Yi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ka(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function OM(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Ba(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function EM(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function TM(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function FM(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function DM(e, t, n = {}) {
  var od;
  await Bm(e, { tolerateOperationFailure: !0 }), ir.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = OM(e, t);
  await Eu();
  const f = Ka(e, "output_preset"), d = Ka(e, "coverage"), y = Ka(e, "bg_color"), b = Ka(e, nM), w = () => {
    const i = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return lc(
      e,
      i,
      () => pe(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return FM(i);
  }, N = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return TM(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : EM(s, i);
  }, _ = ku(String((b == null ? void 0 : b.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((y == null ? void 0 : y.value) || "#00ff00"),
    coverage: Bn(d == null ? void 0 : d.value),
    sharedUiSettings: NM(),
    active: pm(e)
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const T = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, V = T ? yf(T, !1) : { width: 220, height: 132 }, $ = ag(t), A = /* @__PURE__ */ mo({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: ($.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: ($.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...($.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ne.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ne.aspect,
      rotateIcon: Ne.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: r,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Ne.fullscreen,
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
      customColorCss: dr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: dr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (i, s) => ({ index: s, color: null })),
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
      mode: "playback",
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640
    },
    sidePanel: {},
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: t === "cutout",
      ready: !1,
      settled: !1,
      expanded: !1,
      width: V.width,
      height: V.height,
      label: T ? "Loading preview" : "Add Frame to preview"
    }
  }), X = document.createElement("div");
  document.body.appendChild(X);
  const O = ({ intent: i, file: s } = {}) => {
    if (_r(s)) {
      if (i === "add") {
        Af(s);
        return;
      }
      i === "replace" && eb(s);
    }
  }, L = ({ intent: i } = {}) => {
  }, R = hu(Yk, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: $,
    paintSwatches: as.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: dr(i.color, 1)
    })),
    uiState: A,
    onClose: () => {
      Hi();
    },
    onImageFileSelected: O,
    onImageFileCancelled: L
  });
  let q = null;
  try {
    q = R.mount(X);
  } catch (i) {
    try {
      R.unmount();
    } catch {
    }
    throw X.remove(), i;
  }
  const j = X.querySelector(".pano-modal-overlay"), Q = X.querySelector(".pano-modal"), P = Q == null ? void 0 : Q.querySelector("[data-stage-overlay]"), W = Q == null ? void 0 : Q.querySelector("[data-stage-background]"), ae = Q == null ? void 0 : Q.querySelector(".pano-stage-wrap"), re = ((od = q == null ? void 0 : q.getPaintOverlayRefs) == null ? void 0 : od.call(q)) || {}, Z = re.cursor || null, ce = re.sizePreview || null, Se = re.sizeSample || null;
  if (!j || !Q || !P || !W || !ae || !Z || !ce || !Se)
    throw R.unmount(), X.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const C = P.getContext("2d"), _e = Q.querySelector("[data-side]"), G = Q.querySelector("[data-video-element]"), Ee = Q.querySelector(".pano-floating-right"), Re = Q.querySelector(".pano-floating-top"), Ze = Q.querySelector("[data-tool-rail]"), pt = Q.querySelector("[data-frame-rail]"), it = Q.querySelector("[data-frame-roll-knob]"), mt = Q.querySelector("[data-paint-dock]"), At = Q.querySelector(".pano-video-transport"), hn = Q.querySelector("[data-selection-menu]"), Yn = Q.querySelector("[data-tooltip]"), Xn = Q.querySelector("[data-camera-preview-host]"), zt = Q.querySelector("[data-camera-preview-canvas]"), bo = Q.querySelector("[data-paint-color-row]"), E = Q.querySelector("[data-paint-color-pop]"), z = Q.querySelector("[data-paint-color-sv]"), te = Q.querySelector("[data-paint-color-sv-cursor]"), se = Q.querySelector("[data-paint-hue-strip]"), de = Q.querySelector("[data-paint-hue-handle]");
  let le = 0, xe = 0;
  ae == null || ae.removeAttribute("data-stage-ready"), ae == null || ae.setAttribute("data-stage-loading-kind", "boot"), P.style.opacity = "1", W.style.opacity = "0", o && (_e == null || _e.remove(), Q.classList.add("pano-modal-readonly"));
  const Me = () => {
    if (!p.customPaintSessionStart) return;
    if (ss(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (MM(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Fn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !ss(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, we = (i = !1) => {
    !E || E.hidden || (i ? Me() : p.customPaintSessionStart = null, E.hidden = !0, A.paintDock.colorPopOpen = !1);
  }, ge = () => {
    E && (E.hidden && (p.customPaintSessionStart = Fn(p.customPaintColor)), E.hidden = !1, A.paintDock.colorPopOpen = !0);
  };
  Q.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || li(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (Q.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), we(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Xe(), pe()), (s = A.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (A.frameRail.aspectOpen = !1)));
  });
  const De = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, Pe = JSON.stringify(Qd(_)), p = {
    mode: "pano",
    selectedId: De,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Bn(_.coverage),
    historyController: Lw(80, { entries: [Pe], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Fr,
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
    showGrid: AM(e == null ? void 0 : e.id, !0),
    showPanorama: !0,
    showObjects: !0,
    showMask: !0,
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
    paintEngine: kc(),
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
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  };
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Te = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), Be = document.createElement("canvas");
  Be.__panoFrameIdx = 0;
  const ye = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: ""
  }, Et = y_({ onReady: () => pe(), onFailed: () => pe() });
  let Kt = { key: "", projection: null }, $n = { key: null, sceneState: null }, Pr = null, Tt = null, Zt = null;
  const ii = Number.parseFloat(
    getComputedStyle(Q).getPropertyValue("--pano-float-radius")
  ) || 10, D = (i) => {
    const s = String(i || "default");
    P.style.cursor !== s && (P.style.cursor = s);
  }, he = {
    timer: 0,
    target: null
  }, Ae = {
    active: !1,
    depth: 0
  }, Y = {
    mode: "playback",
    editorTime: 0,
    requestedTime: null,
    presentedTime: 0,
    seeking: !1,
    resumeAfterScrub: !1,
    pendingPlaybackResume: !1,
    frameCounter: 0,
    frameCache: /* @__PURE__ */ new Map(),
    frameCacheOrder: [],
    currentFrameNumber: 0,
    thumbnailJobId: 0,
    thumbnailSrc: ""
  }, Je = 4, Le = 9, ft = [];
  let Ft = 0;
  const Bt = () => {
    var k, I;
    const i = (k = ae == null ? void 0 : ae.getBoundingClientRect) == null ? void 0 : k.call(ae), s = (I = Ee == null ? void 0 : Ee.getBoundingClientRect) == null ? void 0 : I.call(Ee), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, g = u > 0 ? u + 14 + 12 : 72, v = Math.max(280, Math.floor(l - g * 2)), S = p.fullscreen ? Math.min(1200, v) : v;
    A.videoTransport.shellMaxWidthPx = S;
  }, In = () => {
    Ft || (Ft = window.requestAnimationFrame(() => {
      Ft = 0, Bt();
    }));
  }, Dt = () => {
    const i = Math.max(1, Number(A.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / i));
  }, oi = (i) => {
    if (!(i instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(i.audioTracks) && i.audioTracks.length > 0 || i.audioTracks && typeof i.audioTracks.length == "number" && i.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof i.mozHasAudio == "boolean") return i.mozHasAudio;
    } catch {
    }
    try {
      if (Number(i.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!A.videoTransport.hasAudio;
  }, pn = typeof ResizeObserver < "u" ? new ResizeObserver(() => In()) : null;
  pn == null || pn.observe(ae), Ee && (pn == null || pn.observe(Ee)), ft.push(() => {
    var i;
    Ft && (window.cancelAnimationFrame(Ft), Ft = 0), (i = pn == null ? void 0 : pn.disconnect) == null || i.call(pn);
  }), In();
  const mn = () => {
    Y.thumbnailJobId += 1, Y.thumbnailSrc = "", A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = Le;
  }, yo = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      mn();
      return;
    }
    const h = vM(u);
    if (h) {
      Y.thumbnailSrc = u, A.videoTransport.thumbnails = h.thumbnails, A.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (Y.thumbnailSrc === u && Array.isArray(A.videoTransport.thumbnails) && A.videoTransport.thumbnails.length)
      return;
    const m = ++Y.thumbnailJobId;
    Y.thumbnailSrc = u, A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = Le;
    const g = document.createElement("video");
    if (g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous", !await new Promise((oe) => {
      let ue = !1;
      const ne = (ve) => {
        ue || (ue = !0, oe(ve));
      };
      g.addEventListener("loadedmetadata", () => ne(!0), { once: !0 }), g.addEventListener("canplay", () => ne(!0), { once: !0 }), g.addEventListener("error", () => ne(!1), { once: !0 }), g.src = u, g.load();
    }) || Y.thumbnailJobId !== m) return;
    const S = Math.max(1, Number(g.videoWidth || 0)), k = Math.max(1, Number(g.videoHeight || 0));
    if (S < 1 || k < 1) return;
    const I = Math.max(0, Number(g.duration || s || 0)), M = document.createElement("canvas"), F = 46, H = Math.max(72, Math.round(S / k * F));
    M.width = H, M.height = F;
    const ie = M.getContext("2d");
    if (!ie) return;
    const U = [], ee = (oe) => new Promise((ue) => {
      let ne = !1;
      const ve = () => {
        ne || (ne = !0, ue());
      };
      g.addEventListener("seeked", ve, { once: !0 }), g.addEventListener("error", ve, { once: !0 });
      try {
        g.currentTime = oe;
      } catch {
        ve();
      }
    });
    for (let oe = 0; oe < Le; oe += 1) {
      if (Y.thumbnailJobId !== m) return;
      const ue = oe / (Le - 1), ne = I > 0 ? Math.max(0, Math.min(I - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), I * ue)) : 0;
      if (await ee(ne), Y.thumbnailJobId !== m) return;
      ie.clearRect(0, 0, H, F), ie.drawImage(g, 0, 0, H, F), U.push({
        id: `thumb-${oe}`,
        src: M.toDataURL("image/jpeg", 0.72),
        time: ne,
        label: al(ne)
      });
    }
    Y.thumbnailJobId === m && (A.videoTransport.thumbnails = U, A.videoTransport.thumbnailCount = U.length || Le, _M(u, {
      thumbnails: U,
      thumbnailCount: U.length || Le,
      duration: I,
      fps: l
    }));
  }, vo = (i) => {
    const s = Math.max(1, Number(A.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(i || 0)) * s));
  }, _o = (i) => {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return null;
    const s = Number(G.videoWidth || 0), l = Number(G.videoHeight || 0), u = document.createElement("canvas");
    u.width = s, u.height = l, u.__panoFrameIdx = Number(u.__panoFrameIdx || 0) + 1;
    const h = u.getContext("2d");
    if (!h) return null;
    for (h.drawImage(G, 0, 0, s, l), Y.frameCache.set(i, u), Y.frameCacheOrder = Y.frameCacheOrder.filter((m) => m !== i), Y.frameCacheOrder.push(i); Y.frameCacheOrder.length > Je; ) {
      const m = Y.frameCacheOrder.shift();
      m != null && Y.frameCache.delete(m);
    }
    return u;
  }, wn = (i, s = null) => {
    if (!(i instanceof HTMLCanvasElement)) return !1;
    const l = Number(i.width || 0), u = Number(i.height || 0);
    if (l < 1 || u < 1) return !1;
    (Be.width !== l || Be.height !== u) && (Be.width = l, Be.height = u);
    const h = Be.getContext("2d");
    return h ? (h.clearRect(0, 0, l, u), h.drawImage(i, 0, 0, l, u), Be.__panoFrameIdx = Number(Be.__panoFrameIdx || 0) + 1, s != null && (Y.presentedTime = Number(s || 0)), !0) : !1;
  }, zn = (i) => {
    const s = vo(i), l = Y.frameCache.get(s) || null;
    return l ? (Y.currentFrameNumber = s, wn(l, i)) : !1;
  };
  if (ft.push(() => {
    mn();
  }), G instanceof HTMLVideoElement) {
    const i = () => {
      if (typeof G.requestVideoFrameCallback != "function" || G.__panoFramePumpActive) return;
      G.__panoFramePumpActive = !0;
      const v = (S, k) => {
        G.__panoFramePumpActive = !1;
        const I = Number((k == null ? void 0 : k.mediaTime) ?? G.currentTime ?? 0), M = vo(I), F = Dt();
        Y.mode === "scrub" ? Math.abs(I - Number(Y.editorTime || 0)) <= F && (_o(M), zn(Y.editorTime), ye.backgroundDirty = !0, ye.dirty = !0, lr({
          ready: !0,
          playing: !1,
          visible: Cr(),
          currentTime: Y.editorTime,
          duration: A.videoTransport.duration,
          frameCount: A.videoTransport.frameCount,
          fps: A.videoTransport.fps,
          mode: "scrub"
        }), pe({ cause: "frame_view", localOnly: !0 })) : (Y.editorTime = I, Y.presentedTime = I, Y.requestedTime = null, Y.currentFrameNumber = M, _o(M), Y.frameCounter += 1, G.dataset.panoFrameIdx = String(Y.frameCounter), ye.backgroundDirty = !0, ye.dirty = !0, lr({
          ready: !0,
          playing: !G.paused && !G.ended,
          visible: Cr(),
          currentTime: I,
          duration: A.videoTransport.duration,
          frameCount: A.videoTransport.frameCount,
          fps: A.videoTransport.fps,
          mode: "playback"
        }), pe({ cause: "frame_view", localOnly: !0 })), ye.running && (!G.paused || Y.mode === "scrub") && i();
      };
      try {
        G.requestVideoFrameCallback(v);
      } catch {
        G.__panoFramePumpActive = !1;
      }
    }, s = () => {
      Y.pendingPlaybackResume && (Y.pendingPlaybackResume = !1, Y.mode = "playback", Y.requestedTime = null, Oi() && (ye.backgroundDirty = !0, ye.dirty = !0), G.play().catch(() => {
      }));
    }, l = () => {
      Y.editorTime = Number(G.currentTime || 0), Number(G.readyState || 0) >= 2 && Oi() && (ye.backgroundDirty = !0, ye.dirty = !0), Ei(), i(), pe({ cause: "frame_view", localOnly: !0 });
    }, u = () => {
      Y.mode = "playback", Y.seeking = !1, Y.requestedTime = null, Ei(), i(), pe({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      Y.mode === "playback" && Oi() && (ye.backgroundDirty = !0, ye.dirty = !0), Ei(), pe({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      lr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Cr(),
        currentTime: Y.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: Y.mode,
        hasAudio: A.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? A.videoTransport.volume ?? 1)
      });
    }, g = () => {
      const v = Y.seeking || Y.pendingPlaybackResume || Y.mode === "scrub";
      if (Y.seeking = !1, !v) {
        Y.requestedTime = null, i();
        return;
      }
      const S = Number(Y.requestedTime ?? Y.editorTime ?? 0), k = Number(G.currentTime || 0);
      if (Math.abs(k - S) > Dt()) {
        sl(S);
        return;
      }
      Y.mode === "scrub" && (Oi(), ye.backgroundDirty = !0, ye.dirty = !0, pe({ cause: "frame_view", localOnly: !0 })), Y.requestedTime = null, s(), i();
    };
    G.addEventListener("loadedmetadata", l), G.addEventListener("loadeddata", l), G.addEventListener("canplay", l), G.addEventListener("play", u), G.addEventListener("pause", h), G.addEventListener("volumechange", m), G.addEventListener("seeked", g), ft.push(() => G.removeEventListener("loadedmetadata", l)), ft.push(() => G.removeEventListener("loadeddata", l)), ft.push(() => G.removeEventListener("canplay", l)), ft.push(() => G.removeEventListener("play", u)), ft.push(() => G.removeEventListener("pause", h)), ft.push(() => G.removeEventListener("volumechange", m)), ft.push(() => G.removeEventListener("seeked", g));
  }
  function la() {
    A.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : u ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function ai(i) {
    return Fu(i == null ? void 0 : i.dataTransfer);
  }
  function On(i) {
    const s = !!i;
    Ae.active !== s && (Ae.active = s, ae.classList.toggle("drop-active", s));
  }
  function qs(i, s, l = p.viewFov, u = 140, h = 620) {
    const m = yv(p.viewYaw, i), g = s - p.viewPitch, v = l - p.viewFov, S = Math.hypot(m, g) + Math.abs(v) * 0.6, k = Math.round(K(u + S * 2.2, u, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: k,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: l,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, pe();
  }
  Hg();
  function Ar() {
    return t === "stickers" ? _.stickers : _.shots;
  }
  function nn() {
    const i = _.painting || (_.painting = ao(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function hg(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const g of s) {
      const v = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }
    return l;
  }
  function pg() {
    return hg("paint");
  }
  function xo(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function wo(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function Wt(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function So(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Js() {
    var s;
    let i = -1;
    for (const l of Array.isArray(_.stickers) ? _.stickers : [])
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of nn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function $u(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = nn();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Js() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function mg(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - u) % 1 + 1) % 1,
        v: K(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: K(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: K(l + h, 0, 1)
      },
      {
        u: ((s - u) % 1 + 1) % 1,
        v: K(l + h, 0, 1)
      }
    ];
  }
  function gg() {
    const i = new Set(pg()), l = nn().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: Js(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function bg(i, s, l) {
    var U;
    const u = (ee) => (Number(ee || 0) % 1 + 1) % 1, h = [];
    for (const ee of l) {
      const oe = ee == null ? void 0 : ee.geometry, ue = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(ue) && h.push(...ue);
    }
    if (!h.length) return null;
    const m = u(((U = h[0]) == null ? void 0 : U.u) || 0);
    let g = 0, v = 0;
    h.forEach((ee) => {
      const oe = u((ee == null ? void 0 : ee.u) || 0);
      g += m + jn(oe, m), v += Number((ee == null ? void 0 : ee.v) || 0);
    });
    const S = (g / h.length % 1 + 1) % 1;
    let k = 1 / 0, I = -1 / 0, M = 1 / 0, F = -1 / 0;
    h.forEach((ee) => {
      const oe = u((ee == null ? void 0 : ee.u) || 0), ue = jn(oe, S);
      k = Math.min(k, ue), I = Math.max(I, ue);
      const ne = Number((ee == null ? void 0 : ee.v) || 0);
      M = Math.min(M, ne), F = Math.max(F, ne);
    });
    const H = l.reduce((ee, oe) => {
      const ue = Jr(String((oe == null ? void 0 : oe.toolKind) || "pen")), ne = Nn[ue] || Nn[Fr], ve = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((ne == null ? void 0 : ne.sizeScale) ?? 1));
      return Math.max(ee, ve);
    }, 0), ie = Math.max(35e-4, H / 2048);
    return {
      centerUv: { u: ((S + (k + I) * 0.5) % 1 + 1) % 1, v: K((M + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (I - k) * 0.5 + ie,
      halfH: (F - M) * 0.5 + ie,
      uvPad: ie
    };
  }
  function Yr(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const h = nn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === u);
    if (!h) return null;
    const m = l || qn(u, s);
    return h.frame = bg(u, s, m), h.frame;
  }
  function Ni() {
    var u;
    const i = (Array.isArray(_.stickers) ? _.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = gg().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), l = (Array.isArray((u = _.painting) == null ? void 0 : u.raster_objects) ? _.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...l].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Zs(i = !0) {
    var l, u, h, m, g, v;
    const s = Ni().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((u = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), k = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), I = String(((v = (g = p.interaction) == null ? void 0 : g.stroke) == null ? void 0 : v.toolKind) || "").trim();
      S && k === "paint" && I !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function Qs(i = !0) {
    var v, S, k, I, M, F;
    const s = Ni();
    if (!i) return s;
    const l = String(((S = (v = p.interaction) == null ? void 0 : v.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), u = String(((I = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : I.layerKind) || "").trim(), h = String(((F = (M = p.interaction) == null ? void 0 : M.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || u !== "paint" || h === "eraser" || s.some((H) => H.type === "strokeGroup" && String(H.actionGroupId || "") === l))
      return s;
    const m = Mt();
    let g = s.reduce((H, ie) => Math.max(H, Number((ie == null ? void 0 : ie.z_index) || 0)), -1) + 1;
    return m && jt(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((H, ie) => Number((H == null ? void 0 : H.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0));
  }
  function yg() {
    return nn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ai(xo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function vg() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Pi(wo((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function zu(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function _g() {
    var s, l, u, h;
    let i = null;
    try {
      const m = Zs(), g = ((h = (u = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ri()}:${el()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function el() {
    var h, m, g, v, S, k, I;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!zu(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const M = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), H = ((g = M == null ? void 0 : M.rawPoints) == null ? void 0 : g.length) ?? ((v = M == null ? void 0 : M.points) == null ? void 0 : v.length) ?? 0, ie = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${s}_live${ie}_${H}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), u = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((I = i == null ? void 0 : i.item) == null ? void 0 : I.id) || "");
    return `_${s}_${l || u || "active"}_${p.livePaintInteractionRevision}`;
  }
  function tl() {
    const i = Array.isArray(_.shots) ? _.shots : [], s = Array.isArray(_.stickers) ? _.stickers : [];
    return [...i, ...s];
  }
  function En(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function gt(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Sn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Pi(i) {
    const s = Wt(i);
    if (!s) return null;
    const l = Sn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: wo(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function rn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = Wt(i.rasterObjectId || i.id || "");
    return !!s && !!Pi(wo(s));
  }
  function Ai(i) {
    const s = So(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = nn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: xo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function jt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ai(xo(l, s));
  }
  function qn(i, s = null) {
    const l = So(i, s), u = String(l.actionGroupId || "").trim();
    return u ? zi(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function xg(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${Po()}`;
    if (p.mode === "frame") {
      const m = Ve(), g = String((m == null ? void 0 : m.id) || ""), v = m ? Ht(m) : null;
      return `${h}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function ca(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: K(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function jn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function nl(i, s = null, l = null) {
    var k;
    const u = So(i, s), h = Array.isArray(l) ? l : qn(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((I) => {
      const M = (I == null ? void 0 : I.geometry) || null, F = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let v = 0, S = 0;
    return m.forEach((I) => {
      v += g + jn(Number((I == null ? void 0 : I.u) || 0), g), S += Number((I == null ? void 0 : I.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: K(S / m.length, 0, 1)
    };
  }
  function ua(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = jn(Number(i.u || 0), h), v = Number(i.v || 0) - m, S = Number(u || 0) * fr, k = Math.cos(S), I = Math.sin(S), M = Math.max(0.02, Number(l || 1)), F = (g * k - v * I) * M, H = (g * I + v * k) * M;
    return {
      ...i,
      u: ((h + F) % 1 + 1) % 1,
      v: K(m + H, 0, 1)
    };
  }
  function ju(i, s, l, u = null, h = null, m = null) {
    const g = So(i, h), v = String(g.actionGroupId || "").trim();
    if (!v) return !1;
    const S = zi(g.layerKind), k = Array.isArray(u) ? new Map(u.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let I = !1;
    if (S.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== v) return;
      const F = (k == null ? void 0 : k.get(String((M == null ? void 0 : M.id) || ""))) || M, H = M == null ? void 0 : M.geometry, ie = F == null ? void 0 : F.geometry;
      !H || !ie || (Array.isArray(ie.points) && (H.points = ie.points.map((U) => ca(U, s, l)), I = !0), Array.isArray(ie.rawPoints) && (H.rawPoints = ie.rawPoints.map((U) => ca(U, s, l)), I = !0), Array.isArray(ie.processedPoints) && (H.processedPoints = ie.processedPoints.map((U) => ca(U, s, l)), I = !0));
    }), I && m) {
      const M = nn().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === v);
      M && (M.frame = null);
    }
    return I;
  }
  function Hu(i, s = 1, l = 0, u = null, h = null, m = null) {
    const g = So(i, h), v = String(g.actionGroupId || "").trim();
    if (!v) return !1;
    const S = zi(g.layerKind), k = Array.isArray(u) ? u : qn(v, g.layerKind), I = Array.isArray(k) ? new Map(k.map((H) => [String((H == null ? void 0 : H.id) || ""), H])) : null, M = (m == null ? void 0 : m.centerUv) ?? nl(v, g.layerKind, k);
    let F = !1;
    if (S.forEach((H) => {
      if (String((H == null ? void 0 : H.actionGroupId) || "").trim() !== v) return;
      const ie = (I == null ? void 0 : I.get(String((H == null ? void 0 : H.id) || ""))) || H, U = H == null ? void 0 : H.geometry, ee = ie == null ? void 0 : ie.geometry;
      !U || !ee || (Array.isArray(ee.points) && (U.points = ee.points.map((oe) => ua(oe, M, s, l)), F = !0), Array.isArray(ee.rawPoints) && (U.rawPoints = ee.rawPoints.map((oe) => ua(oe, M, s, l)), F = !0), Array.isArray(ee.processedPoints) && (U.processedPoints = ee.processedPoints.map((oe) => ua(oe, M, s, l)), F = !0));
    }), F && m) {
      const H = nn().find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === v);
      H && (H.frame = null);
    }
    return F;
  }
  function Gu(i, s, l, u = null) {
    const h = Wt(i);
    if (!h) return !1;
    const m = Sn().find((I) => String((I == null ? void 0 : I.id) || "").trim() === h);
    if (!m) return !1;
    const g = u && typeof u == "object" ? u : m, v = (g == null ? void 0 : g.transform) || {}, S = Number(v.du || 0) + Number(s || 0), k = K(Number(v.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = k, !0;
  }
  function wg(i, s = 1, l = null) {
    const u = Wt(i);
    if (!u) return !1;
    const h = Sn().find((k) => String((k == null ? void 0 : k.id) || "").trim() === u);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, g = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(g.scale || 1)), S = K(v * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = S, !0;
  }
  function Mt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = Ai(i);
    if (s) return s;
    const l = Pi(i);
    return l || (t === "cutout" ? tl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : Ar().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function Jn() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? Mt() : Ai(h) || Pi(h) || (t === "cutout" ? tl().find((g) => String((g == null ? void 0 : g.id) || "") === h) : Ar().find((g) => String((g == null ? void 0 : g.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function rl(i = null) {
    const s = Array.isArray(i) ? i : Jn();
    if (!s || s.length < 2) return null;
    const l = s.map((k) => Yt(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((k) => k.corners.map((I) => Number((I == null ? void 0 : I.x) || 0))), h = l.flatMap((k) => k.corners.map((I) => Number((I == null ? void 0 : I.y) || 0))), m = Math.min(...u), g = Math.max(...u), v = Math.min(...h), S = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (v + S) * 0.5 },
      corners: [
        { x: m, y: v },
        { x: g, y: v },
        { x: g, y: S },
        { x: m, y: S }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: v, a: { x: m, y: v }, b: { x: g, y: v } },
        { edge: "right", x: g, y: (v + S) * 0.5, a: { x: g, y: v }, b: { x: g, y: S } },
        { edge: "bottom", x: (m + g) * 0.5, y: S, a: { x: g, y: S }, b: { x: m, y: S } },
        { edge: "left", x: m, y: (v + S) * 0.5, a: { x: m, y: S }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: v },
      rotateHandle: { x: (m + g) * 0.5, y: v - 30 }
    };
  }
  function Ku(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function fa() {
    const i = Mt();
    return i ? jt(i) || rn(i) ? "stroke" : En(i) ? "frame" : "image" : null;
  }
  function gn(i) {
    if (!i || typeof i != "object") return !1;
    if (jt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = nn().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (rn(i)) {
      const s = Wt(i.rasterObjectId || i.id || ""), l = Sn().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function il(i = null) {
    const s = Array.isArray(i) ? i : Jn();
    return s.length > 0 && s.every((l) => gn(l));
  }
  function Sg(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (jt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), h = nn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (rn(i)) {
      const u = Wt(i.rasterObjectId || i.id || ""), h = Sn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l || hm(_, i.id) ? !1 : (i.locked = l, !0);
  }
  function kg() {
    if (r) return;
    const i = Jn();
    if (!i.length) return;
    const s = !il(i);
    let l = !1;
    i.forEach((u) => {
      Sg(u, s) && (l = !0);
    }), l && (nt(), ot(), Xe(), He(), pe());
  }
  function Ci(i) {
    p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && gt(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && En(i) ? _.active.selected_shot_id = i.id || null : i ? En(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function Mg(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const v = String((g == null ? void 0 : g.id) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }), p.selectedIds = l;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = Mt();
    _.active.selected_sticker_id = m && gt(m) && m.id || null, m && En(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Bu() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(_.stickers) ? _.stickers : []).map((l, u) => {
      var m, g;
      const h = Ut(l) ? String(l.id || Va) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function Ng(i) {
    return i === "frame" ? Ne.camera : i === "stroke" ? Ne.paintbrush_vertical_tool : Ne.image;
  }
  function ol(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Ng(i.kind)
    };
  }
  function Wu() {
    return Js();
  }
  function Ut(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Va || String(i.source_kind || "") === rM;
  }
  function Ii(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Pg(i) {
    return Ut(i) && Ii(i) ? vm : 1;
  }
  function Ag() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function Cg() {
    return String(Ag() || "") === "lasso_fill";
  }
  function Ig() {
    if (r) return;
    const i = Mt();
    !i || !Ut(i) || (i.visible = Ii(i), Qt(), nt(), ot(), He(), Xe(), pe());
  }
  function Og() {
    if (r || t !== "stickers") return;
    const i = Mt();
    if (!i || !Ut(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = ll($a, () => {
      pe();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Ti(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), nt(), ot(), He(), Xe(), pe();
  }
  function Eg(i) {
    if (!i || !Ut(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = ll($a, () => {
      pe();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = Ti(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function Tg() {
    const i = Mt();
    if (!i || !Ut(i)) return !1;
    const s = Eg(i);
    if (!s) return !1;
    const l = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Uu(i) {
    return ir.uiList(e, i);
  }
  function Yu(i) {
    return ir.uiValue(e, i);
  }
  function Xu() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return vs(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Fg() {
    const { metaKey: i } = Xu(), s = Yu(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function qu(i) {
    var s;
    return i ? i instanceof HTMLVideoElement ? [
      String(i.currentSrc || i.src || ""),
      Number(i.videoWidth || 0),
      Number(i.videoHeight || 0),
      String(((s = i.dataset) == null ? void 0 : s.panoFrameIdx) || "0")
    ].join("|") : i instanceof HTMLCanvasElement ? [
      "canvas",
      Number(i.width || 0),
      Number(i.height || 0),
      String(i.__panoFrameIdx || 0)
    ].join("|") : [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none";
  }
  function al(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function lr(i = {}) {
    const s = Number(i.currentTime ?? Y.editorTime ?? 0), l = Number(i.duration ?? A.videoTransport.duration ?? 0), u = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!A.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(i, "playing") ? !!i.playing : !!A.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!A.videoTransport.visible, g = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(G instanceof HTMLVideoElement ? G.muted : A.videoTransport.muted), v = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : G instanceof HTMLVideoElement ? G.volume : A.videoTransport.volume
    ), S = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : oi(G), k = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!A.videoTransport.loop;
    Object.assign(A.videoTransport, {
      ready: u,
      playing: h,
      visible: m,
      loop: k,
      currentTime: Number.isFinite(s) ? s : 0,
      duration: Number.isFinite(l) ? l : 0,
      progressPct: l > 1e-6 ? Math.max(0, Math.min(100, s / l * 100)) : 0,
      currentTimeLabel: al(s),
      durationLabel: al(l),
      frameCount: Math.max(0, Number(i.frameCount ?? A.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(i.fps ?? A.videoTransport.fps ?? 24)),
      mode: String(i.mode || Y.mode || "playback"),
      hasAudio: S,
      muted: g,
      volume: Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : A.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? A.videoTransport.thumbnailCount ?? Le))
    });
  }
  function Cr() {
    return !!(G instanceof HTMLVideoElement && G.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function Dg() {
    lr({
      visible: Cr()
    });
  }
  function Oi() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const i = Number(G.videoWidth || 0), s = Number(G.videoHeight || 0);
    (Be.width !== i || Be.height !== s) && (Be.width = i, Be.height = s);
    const l = Be.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(G, 0, 0, i, s), Be.__panoFrameIdx = Number(Be.__panoFrameIdx || 0) + 1, Y.presentedTime = Number(Y.editorTime || G.currentTime || 0), !0) : !1;
  }
  function Ju() {
    return Y.mode === "scrub" && Number(Be.width || 0) > 0 && Number(Be.height || 0) > 0 && Number(Be.__panoFrameIdx || 0) > 0 ? Be : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function sl(i) {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return;
    const s = Math.max(0, Number(i || 0));
    if (Y.requestedTime = s, !Y.seeking && !(Math.abs(Number(G.currentTime || 0) - s) <= 5e-4)) {
      Y.seeking = !0;
      try {
        G.currentTime = s;
      } catch {
        Y.seeking = !1;
      }
    }
  }
  function Ei() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Xu(), s = Uu(i)[0] || null, l = pM(s), u = Fg(), h = Math.max(0, Number((u == null ? void 0 : u.frames) || 0)), m = Math.max(1, Number((u == null ? void 0 : u.fps) || 24)), g = Number((u == null ? void 0 : u.duration) || (h > 0 ? h / m : 0)), v = !!(u != null && u.has_audio) || oi(G);
    return l && G.dataset.panoSrc !== l ? (G.pause(), G.dataset.panoSrc = l, G.dataset.panoFrameIdx = "0", G.loop = !!A.videoTransport.loop, G.muted = !!A.videoTransport.muted, G.volume = Math.max(0, Math.min(1, Number(A.videoTransport.volume ?? 1))), G.src = l, G.load(), yo(l, g, m)) : !l && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), G.load(), mn()), G.loop !== !!A.videoTransport.loop && (G.loop = !!A.videoTransport.loop), l && (!Array.isArray(A.videoTransport.thumbnails) || A.videoTransport.thumbnails.length === 0) && yo(l, g, m), l || mn(), lr({
      ready: !!l,
      playing: !G.paused && !G.ended,
      visible: !!l && p.primaryTool !== "paint" && p.primaryTool !== "mask",
      currentTime: Y.editorTime,
      duration: g,
      frameCount: h,
      fps: m,
      mode: Y.mode,
      hasAudio: v,
      loop: !!G.loop,
      muted: !!G.muted,
      volume: Number(G.volume ?? A.videoTransport.volume ?? 1),
      thumbnailCount: A.videoTransport.thumbnailCount
    }), l || null;
  }
  function Lg(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const u = i[0];
      if (u && typeof u == "object" && !Array.isArray(u)) return u;
    }
    if (Array.isArray(s) && s.length > 0) {
      const u = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (u && typeof u == "object" && !Array.isArray(u))
        return {
          yaw_deg: Number(u.yaw_deg || 0),
          pitch_deg: Number(u.pitch_deg || 0),
          hFOV_deg: Number(u.hFOV_deg || 30),
          rot_deg: Number(u.roll_deg || 0)
        };
    }
    return null;
  }
  function ll(i, s = null) {
    return sc(e, i, Te, s || (() => pe()));
  }
  function Zu(i = null) {
    return ll($a, i);
  }
  function Ti(i, s, l) {
    const u = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = K(Number(i || 30), 0.1, 179) * fr, g = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return K(g * gi, 0.1, 179);
  }
  function Rg(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const u = l.version;
      let h = null;
      if (typeof u == "number" && Number.isInteger(u) ? h = u : typeof u == "string" && /^\d+$/.test(u) && (h = Number.parseInt(u, 10)), h !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), v = Number(m.pitch_deg), S = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![g, v, S, k].every((H) => Number.isFinite(H))) return null;
      let I = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(I, -0) && (I = 0);
      const M = {
        yaw_deg: I,
        pitch_deg: K(v, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: K(k, 0.1, 179)
      }, F = Number(l.source_aspect);
      return Number.isFinite(F) && F > 0 && (M.source_aspect = F), M;
    } catch {
      return null;
    }
  }
  function Qu(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Si(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(s) ? s : 0),
        pitch_deg: K(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Vg(i) {
    var v;
    if (!i || typeof i != "object") return Qu(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const S = K(h, 0.1, 179) * fr, k = K(m, 0.1, 179) * fr, I = Math.tan(k * 0.5);
      if (Math.abs(I) > 1e-6) {
        const M = Math.tan(S * 0.5) / I;
        Number.isFinite(M) && M > 0 && (g = M);
      }
    }
    if (i != null && i.asset_id && ((v = _ == null ? void 0 : _.assets) != null && v[i.asset_id])) {
      const S = _.assets[i.asset_id], k = Number((S == null ? void 0 : S.w) || 0), I = Number((S == null ? void 0 : S.h) || 0);
      k > 0 && I > 0 && (g = k / I);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Rt(Number.isFinite(s) ? s : 0),
        pitch_deg: K(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function $g(i) {
    return ir.linkedValue(e, i);
  }
  function zg(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Rg(s);
    if (u) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), v = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: Ti(u.hFOV_deg, g, v),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ti(30, h, m),
      rot_deg: 0
    };
  }
  function ef(i = "sync") {
    if (t !== "stickers" || r || e.__panoSceneStateV2) return;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : null, l = (s == null ? void 0 : s.link) ?? null, u = Zu(() => {
      jo(e, "image-loaded");
    }), h = Lg(Yu("pano_sticker_input_pose"), null), m = $g("sticker_state"), g = ir.externalStateHash(e, m), v = l == null ? null : zg(h, m, u), S = zm(_, {
      connected: l != null,
      linkId: l,
      stateHash: g,
      pose: v,
      imageWidth: Number((u == null ? void 0 : u.naturalWidth) || (u == null ? void 0 : u.width) || 0),
      imageHeight: Number((u == null ? void 0 : u.naturalHeight) || (u == null ? void 0 : u.height) || 0)
    });
    S.changed && (_.stickers = S.state.stickers, _.active = S.state.active, l == null && p.selectedId === Va && (p.selectedId = null, p.selectedIds = []), ot(), He(), Xe()), pe();
  }
  function ko(i = {}) {
    const l = i.preservePanelValues !== !1 ? Mt() : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Vr(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function jg() {
    if (t !== "cutout") return;
    const i = Ve();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function cl() {
    if (t !== "cutout") return;
    const i = Ve();
    Bi(A.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ne.camera : Ne.plus_circle
    });
  }
  function tf() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    Bi(A.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), Bi(A.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ne.eye : Ne.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Ir() {
    var l;
    const i = !!Ve();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, A.viewButtons.forEach((u) => {
      const h = u.key === p.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? Ve() : null;
    A.frameRail.visible = !!s, A.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.visible = !!s && !r && s.locked !== !0, A.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), A.frameRollKnob.displayValue = Ui(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", A.frameRollKnob.armed = !!s && p.altModifier === !0, A.frameRail.rollKnob = A.frameRollKnob, A.frameRail.aspectLabel = s ? Vr(s) : "", A.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Vr(s)) === u
    })), s || (A.frameRail.aspectOpen = !1), A.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!Ve(), t === "cutout" && A.cameraPreview && (A.cameraPreview.visible = p.mode !== "frame", A.cameraPreview.expanded = !!p.outputPreviewExpanded, A.cameraPreview.settled = A.cameraPreview.settled === !0 && ye.pendingStableLayoutFrames <= 0 && ye.hasPresentedFrame), tf(), Lf() ? bt(p.pointerPos) : D(p.mode === "pano" ? "grab" : "default");
  }
  function Hg() {
    const s = cf({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function nf() {
    return _m({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, P.width, P.height);
  }
  function ul() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${P.width}|${P.height}`;
    return Kt.key !== i && (Kt = { key: i, projection: xm(nf(), P.width, P.height) }), Kt.projection;
  }
  function Mo(i) {
    const s = ul().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function fl(i, s) {
    return ul().ray(i, s);
  }
  function Xr() {
    const i = P.width, s = P.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const v = s, S = v * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: v };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function rf(i) {
    var g;
    if (i && typeof i == "object" && (Ut(i) || i.external === !0))
      return Zu(() => {
        jo(e, "image-loaded");
      });
    const s = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Te.get(s);
    if (l) return l;
    const u = (g = _.assets) == null ? void 0 : g[s], h = hM(u);
    if (!h) return null;
    const m = new Image();
    return sg(m, h), m.onload = () => {
      lg(m, h), pe();
    }, m.onerror = () => {
      cg(m, h), pe();
    }, m.src = h, Te.set(s, m), m;
  }
  function of(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = ze.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, ze.set(l, h), h;
  }
  function Gg(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = et.get(s);
    if (l) return l.ready ? l : null;
    const u = of(i, () => {
      const I = et.get(s);
      I && (I.ready = !1), pe({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = h, g.height = m;
    const v = g.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, h, m), v.drawImage(u, 0, 0, h, m);
    const S = v.getImageData(0, 0, h, m).data, k = { canvas: g, width: h, height: m, alpha: S, ready: !0 };
    return et.set(s, k), k;
  }
  function Kg(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = jn(Number(i.u || 0), h), v = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), k = Number(u || 0) * fr, I = Math.cos(k), M = Math.sin(k), F = g / S, H = v / S, ie = F * I + H * M, U = -F * M + H * I;
    return {
      ...i,
      u: ((h + ie) % 1 + 1) % 1,
      v: m + U
    };
  }
  function Bg(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, g = Kg(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), v = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(v > 1e-6) || !(S > 1e-6)) return null;
    const k = jn(Number(g.u || 0), Number(l.u0 || 0)) / v, I = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (k < 0 || k > 1 || I < 0 || I > 1) return 0;
    const M = Gg(i);
    if (!M) return null;
    const F = K(Math.floor(k * M.width), 0, M.width - 1), H = K(Math.floor(I * M.height), 0, M.height - 1);
    return Number(M.alpha[(H * M.width + F) * 4 + 3] || 0);
  }
  function af(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Dr(l, s.corners)) return !1;
    const h = u || Qn(l, performance.now()), m = Bg(i, h);
    return m === null ? !0 : m > 8;
  }
  function Wg() {
    var u, h, m, g, v, S, k, I;
    const i = ((h = (u = p.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, Zs(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : v.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((I = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : I.height) || 1024));
    return { width: s, height: l };
  }
  function Ug() {
    var H, ie, U;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = Tn(), u = `${el()}:${l.width}:${l.height}`;
    if (((H = p._activePaintEraserPreviewInfo) == null ? void 0 : H.cacheKey) === u)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = an(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ee = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = vl(ee, h.targetSpace, !0);
    }
    const g = No(l.width, l.height, { readback: !0 });
    if (!Sf(g, h, { w: l.width, h: l.height })) return null;
    const v = ((U = (ie = g.ctx) == null ? void 0 : ie.getImageData(0, 0, l.width, l.height)) == null ? void 0 : U.data) || null;
    if (!v) return null;
    let S = l.width, k = l.height, I = -1, M = -1;
    for (let ee = 0; ee < l.height; ee += 1)
      for (let oe = 0; oe < l.width; oe += 1)
        v[(ee * l.width + oe) * 4 + 3] <= 8 || (oe < S && (S = oe), ee < k && (k = ee), oe > I && (I = oe), ee > M && (M = ee));
    if (I < S || M < k)
      return p._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const F = {
      surface: g,
      bounds: { minX: S, minY: k, maxX: I, maxY: M },
      key: `${u}:${S}:${k}:${I}:${M}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: u, value: F }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Fi() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Yg(i, s, l) {
    var u, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, g = ((h = i.item) == null ? void 0 : h.transform) || {}, v = Number(m.u0 || 0) + Number(g.du || 0), S = Number(m.u1 || 0) + Number(g.du || 0), k = Number(m.v0 || 0) + Number(g.dv || 0), I = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(K(k, 0, 1) * l),
        maxY: Math.ceil(K(I, 0, 1) * l),
        wraps: S - v >= 1 || v < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = qn(i.actionGroupId, "paint"), g = Yr(i.actionGroupId, "paint", m);
      if (!g) return null;
      const v = g.centerUv.u - g.halfW, S = g.centerUv.u + g.halfW, k = g.centerUv.v - g.halfH, I = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(K(k, 0, 1) * l),
        maxY: Math.ceil(K(I, 0, 1) * l),
        wraps: S - v >= 1 || v < 0 || S > 1
      };
    }
    return null;
  }
  function Xg(i, s, l) {
    if (!i || !s) return !1;
    const u = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], h = u(i), m = u(s);
    return h.some((g) => m.some((v) => !(g.maxX < v.minX || v.maxX < g.minX || g.maxY < v.minY || v.maxY < g.minY)));
  }
  function qg(i, s, l) {
    var ve, $e, je, qe, me, J, fe;
    if (!i || !s || !((ve = l == null ? void 0 : l.surface) != null && ve.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || h < 1) return i;
    const m = Yg(s, u, h);
    if (m && !Xg(m, l.bounds, u)) return i;
    const g = String((($e = s.item) == null ? void 0 : $e.id) || s.id || ""), v = ((je = s.item) == null ? void 0 : je.transform) || {}, S = `${l.key}:${g}:${u}:${h}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, k = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(S)) return k.get(S);
    const I = K(Math.floor(Number(((qe = l.bounds) == null ? void 0 : qe.minX) || 0)), 0, Math.max(0, u - 1)), M = K(Math.floor(Number(((me = l.bounds) == null ? void 0 : me.minY) || 0)), 0, Math.max(0, h - 1)), F = K(Math.ceil(Number(((J = l.bounds) == null ? void 0 : J.maxX) || 0)), I, Math.max(0, u - 1)), H = K(Math.ceil(Number(((fe = l.bounds) == null ? void 0 : fe.maxY) || 0)), M, Math.max(0, h - 1)), ie = Math.max(1, F - I + 1), U = Math.max(1, H - M + 1), ee = No(u, h, { readback: !0 });
    ee.ctx.clearRect(0, 0, u, h), ee.ctx.drawImage(i, 0, 0);
    const oe = ee.ctx.getImageData(I, M, ie, U);
    ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(l.surface.canvas, 0, 0), ee.ctx.restore();
    const ue = ee.ctx.getImageData(I, M, ie, U);
    let ne = !1;
    for (let Ie = 0; Ie < ie * U; Ie += 1) {
      const Oe = oe.data[Ie * 4 + 3], Ce = ue.data[Ie * 4 + 3];
      if (Oe > Ce) {
        ne = !0;
        break;
      }
    }
    return ne ? (k.size > 64 && k.clear(), k.set(S, ee.canvas), ee.canvas) : (k.set(S, i), i);
  }
  function sf(i, s = null) {
    const l = Wt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const h = of(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: g } = Wg(), v = (i == null ? void 0 : i.transform) || {}, S = [
      l,
      m,
      g,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      Po()
    ].join(":"), k = tt.get(S);
    if (k) return k;
    tt.size > 64 && tt.clear();
    const I = document.createElement("canvas");
    I.width = m, I.height = g;
    const M = I.getContext("2d");
    if (!M) return null;
    const F = Number(u.u0 || 0) * m, H = Number(u.v0 || 0) * g, ie = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), U = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * g), ee = F + ie * 0.5 + Number(v.du || 0) * m, oe = H + U * 0.5 + Number(v.dv || 0) * g, ue = Number(v.rot_deg || 0) * fr, ne = Math.max(0.01, Number(v.scale || 1));
    for (const ve of [-m, 0, m])
      M.save(), M.translate(ee + ve, oe), M.rotate(ue), M.scale(ne, ne), M.drawImage(h, -ie * 0.5, -U * 0.5, ie, U), M.restore();
    return tt.set(S, I), I;
  }
  async function dl(i, s) {
    const l = await new Promise((v) => i.toBlob(v, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await cn.fetchApi("/upload/image", { method: "POST", body: u });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let da = null, ha = !1;
  function Jg() {
    const i = Uh(_.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const s = _.painting_layer, l = Ri();
    return !s || typeof s != "object" || String(s.revision || "") !== l || i.totalPaintCount > 0 && !s.paint || i.totalMaskCount > 0 && !s.mask;
  }
  function lf() {
    const i = String(e.id ?? "0"), s = za.get(i);
    if (ha && s) return s;
    const l = (async () => {
      var m, g, v, S, k, I, M, F, H, ie, U, ee;
      const u = Ri(), h = Uh(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, da = u, Mn());
        return;
      }
      if (da !== u && !ha) {
        ha = !0;
        try {
          va();
          const oe = Zs(!1), ue = ((g = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, oe)) || null, ne = ((v = ue == null ? void 0 : ue.displayPaint) == null ? void 0 : v.canvas) || null, ve = ((S = ue == null ? void 0 : ue.committedMask) == null ? void 0 : S.canvas) || null, $e = Math.max(1, Number(((k = ue == null ? void 0 : ue.descriptor) == null ? void 0 : k.width) || (ne == null ? void 0 : ne.width) || (ve == null ? void 0 : ve.width) || 2048)), je = Math.max(1, Number(((I = ue == null ? void 0 : ue.descriptor) == null ? void 0 : I.height) || (ne == null ? void 0 : ne.height) || (ve == null ? void 0 : ve.height) || 1024));
          (!ne && h.totalPaintCount > 0 || !ve && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((M = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== $e || Number(((F = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== je) && (p._paintLayerSyncBlankSurface = No($e, je)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, $e, je));
          const qe = ne || h.totalPaintCount > 0 && ((H = p._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null, me = ve || h.totalMaskCount > 0 && ((ie = p._paintLayerSyncBlankSurface) == null ? void 0 : ie.canvas) || null;
          if (!qe && !me) return;
          let J = null, fe = null;
          const Ie = [];
          if (h.totalPaintCount > 0) {
            J = await dl(qe, `pano_paint_${i}.png`);
            for (const Oe of oe) {
              const Ce = String(Oe || "").trim();
              if (!Ce) continue;
              const Ge = ((ee = (U = p.paintEngine) == null ? void 0 : U.getGroupDisplayCanvas) == null ? void 0 : ee.call(U, Ce)) || null;
              if (!Ge) continue;
              const rt = Ce.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ye = await dl(Ge, `pano_group_${i}_${rt}.png`);
              Ye && Ie.push({
                id: Ce,
                actionGroupId: Ce,
                image: Ye
              });
            }
          }
          h.totalMaskCount > 0 && (fe = await dl(me, `pano_mask_${i}.png`)), u === Ri() && (_.painting_layer = {
            paint: J,
            mask: fe,
            groups: Ie,
            revision: u
          }, da = u, Mn());
        } catch (oe) {
          throw oe;
        } finally {
          ha = !1;
        }
      }
    })();
    return za.set(i, l), l.finally(() => {
      za.get(i) === l && za.delete(i);
    }), l;
  }
  function hl() {
    if (t === "cutout") {
      const v = Ju();
      if (v) return v;
      const S = lc(
        e,
        ["erp_image", "bg_erp"],
        () => pe(),
        "background:cutout:erp_image|bg_erp"
      );
      return S && !Uc(S) ? S : sc(e, "pano_input_images", Te, () => pe()) || S || null;
    }
    const i = Ju();
    if (i) return i;
    const s = sc(e, "pano_input_images", Te, () => pe());
    if (s && !Uc(s)) return s;
    const l = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((v) => String((v == null ? void 0 : v.name) || "")) : [], u = l.includes("erp_image"), h = l.includes("bg_erp");
    let m = [];
    return r && (u || h) ? m = u ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], lc(e, m, () => pe(), `background:${m.join("|")}`) || s || null;
  }
  function pl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Zg() {
    if (Et.failed) return { status: rr, detail: "renderer" };
    if (!Et.ready) return { status: nr, detail: "boot" };
    let i = po;
    const s = [];
    if (p.showPanorama) {
      const l = hl();
      i = Wc(l, pl);
    }
    if (p.showObjects) {
      const l = Array.isArray(_.stickers) ? _.stickers : [];
      for (const u of l) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const h = rf(u);
        s.push(Wc(h, pl));
      }
    }
    return Xk({
      presented: ye.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Di() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], Te.delete(s));
    });
  }
  function ml(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(K(i.y, -1, 1))
    };
  }
  function gl(i, s = null) {
    const { lon: l, lat: u } = ml(i), h = Xr();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const g = h.y + (0.5 - u / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function pa(i) {
    const s = go(
      Number(i.yaw_deg || 0),
      Number(i.pitch_deg || 0),
      Number(i.rot_deg || i.roll_deg || 0)
    ), l = Math.tan(K(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * fr), u = Math.tan(K(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * fr);
    return {
      centerDir: s.fwd,
      right: s.right,
      up: s.up,
      tanX: l,
      tanY: u
    };
  }
  function qr(i, s, l) {
    return wM(Bh(Bh(i.centerDir, Wh(i.right, s)), Wh(i.up, l)));
  }
  function cf(i) {
    const s = pa(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => qr(s, u * s.tanX, h * s.tanY));
  }
  function uf(i, s, l) {
    const u = pa(i), h = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return qr(u, h, m);
  }
  function ff(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: K((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Qg(i) {
    var S, k, I, M;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), h = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.du) || 0), g = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((F) => ca(ua(F, l, u, h), m, g));
  }
  function e0(i) {
    const s = Wt((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${Po()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = Ve(), g = m ? Ht(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function t0(i) {
    const s = String((i == null ? void 0 : i.id) || ""), u = [
      En(i) ? "frame" : gt(i) ? "sticker" : "item",
      s,
      p.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Vr(i)
    ].join(":");
    if (p.mode === "frame") {
      const h = Ve(), m = h ? Ht(h) : null;
      return `${u}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function df() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function n0() {
    return df() ? `${vf()}:mask_display` : "";
  }
  function hf(i) {
    if (!p.showMask) return i;
    const s = df();
    if (!s) return i;
    const l = n0(), u = i.reduce((g, v) => Math.max(g, Number((v == null ? void 0 : v.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, v) => Math.max(g, Number((v == null ? void 0 : v.z_index) || 0)), -1), m = Math.max(u, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function r0() {
    var u, h;
    const i = Qs(!0), s = Ug(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const v = ((h = (u = p.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, g)) || null;
        if (!v) continue;
        l.push({
          id: `paint_group:${g}`,
          source: v,
          revision: `${vf()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, v = Wt((g == null ? void 0 : g.id) || m.id || "");
        if (!v) continue;
        const S = sf(g, () => pe());
        if (!S) continue;
        const k = qg(S, m, s), I = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${v}`,
          source: k,
          revision: [
            Ri(),
            (s == null ? void 0 : s.key) || "",
            v,
            Number(I.du || 0).toFixed(6),
            Number(I.dv || 0).toFixed(6),
            Number(I.rot_deg || 0).toFixed(3),
            Number(I.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return hf(l);
  }
  function i0() {
    return (p.showObjects ? r0() : hf([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ma() {
    return Pr || (Pr = o0()), Pr;
  }
  function o0() {
    const i = hl(), s = i0(), l = { ..._.assets };
    for (const g of _.stickers || []) {
      const v = String((g == null ? void 0 : g.asset_id) || "");
      v && !l[v] && Te.has(v) && (l[v] = { type: "comfy_image", filename: v });
    }
    const u = JSON.stringify([_.stickers, Object.keys(l)]);
    $n.key !== u && ($n = { key: u, sceneState: Nu({ ..._, assets: l, painting: null }) });
    const h = p.showObjects ? wm($n.sceneState, 0, _.stickers || [], {
      media: (g) => {
        const v = rf(g);
        return v ? { media: v, revision: qu(v) } : null;
      },
      paintLayers: s
    }) : s.map((g) => ({ kind: "erp", ...g }));
    return { background: p.showPanorama && pl(i) ? { media: i, revision: qu(i), coverage: Bn(_.coverage) } : null, layers: h };
  }
  function a0() {
    if (!ye.backgroundDirty && ye.backgroundWasVisible) return;
    const { background: i, layers: s } = ma(), l = W.width, u = W.height, h = Et.render({
      width: l,
      height: u,
      camera: nf(),
      background: i,
      layers: s
    }), m = W.getContext("2d");
    m.clearRect(0, 0, l, u), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, u)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, u), ye.backgroundWasVisible = !!h, ye.backgroundDirty = !1, Zt = null;
  }
  function pf(i, s, l, u) {
    const { background: h, layers: m } = ma();
    if (!h && !m.length) return !1;
    const g = Et.render({ width: s.w, height: s.h, camera: es(l), background: h, layers: m, owner: u });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function s0(i) {
    const s = ma(), l = JSON.stringify([i, W.width, W.height, lh(s)]);
    if (l === Zt) return;
    const u = Et.renderUnwrap({ width: i.w, height: i.h, ...s }), h = W.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, W.width, W.height), u && h.drawImage(u.canvas, u.x, u.y, u.width, u.height, i.x, i.y, i.w, i.h), Zt = u ? l : null, ye.backgroundWasVisible = !1;
  }
  function l0(i = !1) {
    const s = P.width, l = P.height, u = Xr();
    if (C.globalAlpha = 1, C.lineWidth = 1, i || C.clearRect(0, 0, s, l), va(), s0(u), p.showGrid && !p.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = u.x + u.w * m / 16;
        C.beginPath(), C.moveTo(g, u.y), C.lineTo(g, u.y + u.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = u.y + u.h * m / 8;
        C.beginPath(), C.moveTo(u.x, g), C.lineTo(u.x + u.w, g), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(u.x, u.y + u.h / 2), C.lineTo(u.x + u.w, u.y + u.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = u.y + u.h * 0.57;
      C.fillText("Left", u.x + u.w * 0.25, h), C.fillText("Front", u.x + u.w * 0.5, h), C.fillText("Right", u.x + u.w * 0.75, h), C.fillText("Back", u.x + 38, h), C.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function mf(i, s, l = 1) {
    let u = !1;
    C.strokeStyle = s, C.lineWidth = l, C.beginPath();
    for (const h of i) {
      const m = Mo(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), u = !0);
    }
    C.stroke();
  }
  function c0(i = !1) {
    const s = P.width, l = P.height;
    if (i || C.clearRect(0, 0, s, l), va(), a0(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Cn(h, g));
        mf(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Cn(g, h));
        mf(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Cn(-90, 0) },
        { name: "Front", dir: Cn(0, 0) },
        { name: "Right", dir: Cn(90, 0) },
        { name: "Back", dir: Cn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", u.forEach((h) => {
        const m = Mo(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function u0(i, s = null, l = null, u = null) {
    if (p.mode === "frame") {
      const h = s || Ve();
      if (!h) return [];
      const m = l || Ht(h);
      return j0(i, h, m);
    }
    return kf(i, u);
  }
  function ga(i, s = null, l = null, u = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const g = kf([i], h);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Li(i);
    return m ? Or(m, s, l, u) : null;
  }
  function f0(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = qn(l, i.layerKind), h = Yr(l, i.layerKind, u), m = (h == null ? void 0 : h.centerUv) || nl(l, i.layerKind, u), g = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], S = p.mode === "frame" ? Ve() : null, k = S ? Ht(S) : null;
    for (const ne of u) {
      const ve = (ne == null ? void 0 : ne.geometry) || null, $e = (ve == null ? void 0 : ve.geometryKind) === "lasso_fill" ? ve == null ? void 0 : ve.points : (ve == null ? void 0 : ve.processedPoints) || (ve == null ? void 0 : ve.rawPoints) || (ve == null ? void 0 : ve.points) || [], je = u0($e, S, k, g).filter((J) => Number.isFinite(J == null ? void 0 : J.x) && Number.isFinite(J == null ? void 0 : J.y));
      if (!je.length) continue;
      const qe = Jr(String((ne == null ? void 0 : ne.toolKind) || "pen")), me = Nn[qe] || Nn[Fr];
      v.push({
        points: je,
        closed: String((ve == null ? void 0 : ve.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ne == null ? void 0 : ne.size) || 10) * Math.max(0.1, Number((me == null ? void 0 : me.sizeScale) ?? 1)) + 10),
        layerKind: String((ne == null ? void 0 : ne.layerKind) || i.layerKind || "paint")
      });
    }
    const I = ga(m, null, S, k, g);
    if (!I) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, ne), ne;
    }
    const F = mg(h).map((ne) => ga(ne, I.x, S, k, g)).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y)).map((ne) => ({ x: Number(ne.x || 0), y: Number(ne.y || 0) }));
    if (F.length < 4) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, ne), ne;
    }
    const H = (ne, ve) => ({
      x: (Number((ne == null ? void 0 : ne.x) || 0) + Number((ve == null ? void 0 : ve.x) || 0)) * 0.5,
      y: (Number((ne == null ? void 0 : ne.y) || 0) + Number((ve == null ? void 0 : ve.y) || 0)) * 0.5,
      a: ne,
      b: ve
    }), ie = H(F[0], F[1]), U = H(F[1], F[2]), ee = H(F[2], F[3]), oe = H(F[3], F[0]), ue = {
      kind: "strokeGroup",
      center: { x: Number(I.x || 0), y: Number(I.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...ie },
        { edge: "right", ...U },
        { edge: "bottom", ...ee },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: { x: ie.x, y: ie.y - 30 },
      strokePaths: v,
      visible: !0
    };
    return p._strokeGeomCache.set(s, ue), ue;
  }
  function d0(i, s) {
    const l = p.mode === "frame" ? Ve() : null, u = l ? Ht(l) : null, h = ff(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, g = ga(h, null, l, u, m), S = Qg(i).map((F) => ga(F, (g == null ? void 0 : g.x) ?? null, l, u, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(S) || S.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, F), F;
    }
    const k = S.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: k.reduce((F, H) => F + Number(H.x || 0), 0) / k.length,
        y: k.reduce((F, H) => F + Number(H.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return p._strokeGeomCache.set(s, M), M;
  }
  function Or(i, s = null, l = null, u = null, h = {}) {
    if (p.mode === "frame") {
      const I = l || Ve(), M = u || Ht(I);
      if (!I || !M) return null;
      const F = I ? Ao(I, i) : null;
      return F ? {
        x: Number(M.x || 0) + Number(F.x || 0) * Number(M.w || 0),
        y: Number(M.y || 0) + Number(F.y || 0) * Number(M.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return gl(i, s);
    const m = 1e-4, g = ul().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(h != null && h.clipBehind)) return null;
    const v = P.width, S = P.height, k = Math.max(v, S) * 2;
    return {
      x: K(g.x, -k, v + k),
      y: K(g.y, -k, S + k),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function h0(i, s = []) {
    if (p.mode !== "pano" || gt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? yM(0.035, 0.2, Math.min(...l)) : 1;
  }
  function p0(i) {
    const s = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = p.mode === "frame" ? Ve() : null, u = l ? Ht(l) : null, h = p.mode === "pano" && (gt(i) || En(i)), m = h ? { clipBehind: !0 } : null, g = Or(s, null, l, u, m);
    if (!g) return { visible: !1 };
    const v = pa(i), k = cf(i).map((J) => Or(J, g.x, l, u, m)).filter((J) => Number.isFinite(J == null ? void 0 : J.x) && Number.isFinite(J == null ? void 0 : J.y));
    if (k.length < 4) return { visible: !1 };
    const I = qr(v, 0, v.tanY), M = qr(v, 0, v.tanY + Math.max(v.tanY * 0.43, 0.053)), F = Or(I, g.x, l, u, m);
    if (!F) return { visible: !1 };
    const H = Or(M, (F == null ? void 0 : F.x) ?? g.x, l, u, m), ie = ((H == null ? void 0 : H.x) ?? F.x) - F.x, U = ((H == null ? void 0 : H.y) ?? F.y) - F.y, ee = Math.hypot(ie, U) || 1, oe = {
      x: F.x + ie / ee * 30,
      y: F.y + U / ee * 30
    }, ue = Or(qr(v, 0, v.tanY), g.x, l, u, m), ne = Or(qr(v, v.tanX, 0), g.x, l, u, m), ve = Or(qr(v, 0, -v.tanY), g.x, l, u, m), $e = Or(qr(v, -v.tanX, 0), g.x, l, u, m);
    if (!ue || !ne || !ve || !$e) return { visible: !1 };
    const je = [
      g,
      ...k,
      F,
      H,
      ue,
      ne,
      ve,
      $e
    ];
    if (h && !je.some((J) => Number((J == null ? void 0 : J.rawZ) ?? (J == null ? void 0 : J.z)) > 1e-4)) return { visible: !1 };
    const qe = h0(i, je), me = [
      {
        edge: "top",
        x: ue.x,
        y: ue.y,
        a: { x: k[0].x, y: k[0].y },
        b: { x: k[1].x, y: k[1].y }
      },
      {
        edge: "right",
        x: ne.x,
        y: ne.y,
        a: { x: k[1].x, y: k[1].y },
        b: { x: k[2].x, y: k[2].y }
      },
      {
        edge: "bottom",
        x: ve.x,
        y: ve.y,
        a: { x: k[2].x, y: k[2].y },
        b: { x: k[3].x, y: k[3].y }
      },
      {
        edge: "left",
        x: $e.x,
        y: $e.y,
        a: { x: k[3].x, y: k[3].y },
        b: { x: k[0].x, y: k[0].y }
      }
    ];
    return {
      center: { x: g.x, y: g.y },
      corners: k.map((J) => ({ x: J.x, y: J.y })),
      edgeMidpoints: me,
      rotateStemBase: { x: F.x, y: F.y },
      rotateHandle: oe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: qe,
      visible: !0
    };
  }
  function Yt(i) {
    if (jt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = xg(h, i.layerKind), g = p._strokeGeomCache.get(m);
      return g || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), f0(i, m));
    }
    if (rn(i)) {
      const h = e0(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), d0(i, h));
    }
    const s = t0(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const u = p0(i);
    return p._strokeGeomCache.set(s, u), u;
  }
  function ba(i, s, l, u = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let v = 0, S = 0;
      s === 0 ? (v = g, S = 0) : s === 1 ? (v = 1, S = g) : s === 2 ? (v = 1 - g, S = 1) : (v = 0, S = 1 - g);
      const k = uf(i, v, S), I = p.mode === "unwrap" ? gl(k, u) : Mo(k);
      I && h.push(I);
    }
    return h;
  }
  function m0(i, s) {
    const l = Cn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), u = p.mode === "unwrap" ? gl(l) : null, h = u ? u.x : null, m = p.mode === "pano" ? 28 : 20, g = [
      ba(i, 0, m, h),
      ba(i, 1, m, h),
      ba(i, 2, m, h),
      ba(i, 3, m, h)
    ];
    Hm(C, g, { selected: s });
  }
  function g0() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function bl() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function ya(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function gf(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const h = K(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = C.globalAlpha;
    C.globalAlpha = m * h;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", v = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    ya(C, u), C.fillStyle = v, C.fill(), C.strokeStyle = g, C.lineWidth = S, C.stroke(), C.save(), C.strokeStyle = g, C.lineWidth = s ? 3.2 : 2.6, C.lineCap = "round";
    const k = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], I = { top: "bottom", right: "left", bottom: "top", left: "right" }, M = s ? 12 : 9;
    k.forEach((F) => {
      const ie = k.find((ue) => (ue == null ? void 0 : ue.edge) === I[F == null ? void 0 : F.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, U = ie.x - F.x, ee = ie.y - F.y, oe = Math.hypot(U, ee) || 1;
      C.beginPath(), C.moveTo(F.x, F.y), C.lineTo(F.x + U / oe * M, F.y + ee / oe * M), C.stroke();
    }), C.restore(), C.globalAlpha = m;
  }
  function b0(i, s, l, u) {
    const h = K(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (En(i)) {
      gf(s, l, u);
      return;
    }
    if (gt(i)) {
      const g = C.globalAlpha;
      C.globalAlpha = g * Pg(i) * h, p.mode === "frame" ? (C.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = l ? 2 : 1, ya(C, s.corners), C.stroke()) : m0(i, l), C.globalAlpha = g;
      return;
    }
    const m = C.globalAlpha;
    C.globalAlpha = m * h, C.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ya(C, s.corners), C.fill(), C.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = l ? 2.8 : 1.9, ya(C, s.corners), C.stroke(), C.globalAlpha = m;
  }
  function bf(i, s, l) {
    if (gt(i)) {
      Gm(C, s, { accent: l });
      return;
    }
    C.fillStyle = l, s.corners.forEach((u) => {
      C.beginPath(), C.arc(u.x, u.y, 6.5, 0, Math.PI * 2), C.fill();
    }), En(i) && (C.strokeStyle = l, C.lineCap = "round", C.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var I, M, F, H;
      const h = (((I = u.b) == null ? void 0 : I.x) ?? u.x) - (((M = u.a) == null ? void 0 : M.x) ?? u.x), m = (((F = u.b) == null ? void 0 : F.y) ?? u.y) - (((H = u.a) == null ? void 0 : H.y) ?? u.y), g = Math.hypot(h, m) || 1, v = h / g, S = m / g, k = 10;
      C.beginPath(), C.moveTo(u.x - v * k, u.y - S * k), C.lineTo(u.x + v * k, u.y + S * k), C.stroke();
    }), C.lineCap = "butt"), jt(i) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), C.lineTo(s.rotateHandle.x, s.rotateHandle.y), C.stroke(), C.fillStyle = l, C.beginPath(), C.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function y0() {
    var m;
    const i = p.mode === "frame" ? [] : Jn(), s = i.length > 1, l = t === "cutout" ? g0() : Ar(), u = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${En(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== u) && (p._sortedItemsCache = {
      src: l,
      orderKey: u,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const g of h) {
      const v = p.mode !== "frame" && !s && Ku(g);
      if (p.mode === "frame" && !v || !p.showObjects && !En(g)) continue;
      const S = gt(g), k = En(g), I = gn(g);
      if (!S && !k)
        continue;
      const M = Yt(g);
      if (t !== "stickers" && !M.visible)
        continue;
      const F = K(Number((M == null ? void 0 : M.visibilityAlpha) ?? 1), 0, 1);
      if (F <= 0.01) continue;
      const H = k && t === "cutout" && p.mode === "pano" ? K(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (C.save(), C.globalAlpha *= H, b0(g, M, v, I), v && M.visible) {
        const ie = I ? "#ff4d4f" : S && Ut(g) ? "#f59e0b" : "#0070f3", U = C.globalAlpha;
        C.globalAlpha = U * F, bf(g, M, ie), C.globalAlpha = U;
      }
      C.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !Ve() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const g = p.cutoutPanoFrameVisual, v = K(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      C.save(), C.globalAlpha *= v, gf(g.geom, g.selected, g.locked), g.selected && bf(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), C.restore();
    }
    if (s) {
      const g = rl(i);
      if (g != null && g.visible) {
        const v = il(i) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) C.lineTo(g.corners[S].x, g.corners[S].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = v, g.corners.forEach((S) => {
          C.beginPath(), C.arc(S.x, S.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      i.forEach((g) => {
        if (!jt(g) && !rn(g)) return;
        const v = Yt(g);
        if (!(v != null && v.visible)) return;
        const S = gn(g) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(v.corners[0].x, v.corners[0].y);
        for (let k = 1; k < v.corners.length; k += 1) C.lineTo(v.corners[k].x, v.corners[k].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = S, v.corners.forEach((k) => {
          C.beginPath(), C.arc(k.x, k.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = jf(p.interaction.start, p.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), C.fill(), C.stroke(), C.restore();
    }
  }
  function yf(i, s = !1) {
    const l = K(Si(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function v0(i) {
    if (!Xn || !i) return !1;
    const s = Xn.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Xn.clientWidth || 0)), u = Math.round(Number(s.clientHeight || Xn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function _0() {
    if (p.outputPreviewRect = null, A.outputPreviewToggle.visible = p.mode !== "frame" && !!Ve(), t !== "cutout" || !A.cameraPreview) return;
    if (p.mode === "frame") {
      A.cameraPreview.visible = !1, A.cameraPreview.settled = !1;
      return;
    }
    const i = Ve();
    A.cameraPreview.visible = !0, A.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = zt == null ? void 0 : zt.getContext("2d");
    if (!i || !s) {
      A.cameraPreview.ready = !1, A.cameraPreview.settled = !1, A.cameraPreview.width = 220, A.cameraPreview.height = 132, A.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, zt.width, zt.height), Tt = null;
      return;
    }
    const l = yf(i, !!p.outputPreviewExpanded);
    A.cameraPreview.width = l.width, A.cameraPreview.height = l.height;
    const u = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * u)), h: Math.max(1, Math.round(l.height * u)) };
    (zt.width !== h.w || zt.height !== h.h) && (zt.width = h.w, zt.height = h.h);
    const m = JSON.stringify([h, Wr(i), lh(ma())]);
    let g = m === Tt;
    if (g || (s.clearRect(0, 0, h.w, h.h), g = pf(s, h, i, "camera_preview"), Tt = g ? m : null), !g) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = hl() ? "Loading preview" : "Connect ERP image", A.cameraPreview.settled = !1;
      return;
    }
    const v = v0(l);
    A.cameraPreview.ready = !0, A.cameraPreview.label = v ? "" : "Loading preview", A.cameraPreview.settled = v && ye.pendingStableLayoutFrames <= 0 && ye.hasPresentedFrame;
  }
  function yl(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return uf(i, l, u);
  }
  function Li(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return Xs(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function x0(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function w0(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: on(i, "widthScale", 1),
      pressureLike: on(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function S0(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function vl(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let U = null;
      i.forEach((ee) => {
        const oe = Number((ee == null ? void 0 : ee.u) || 0), ue = Number((ee == null ? void 0 : ee.v) || 0), ne = (oe % 1 + 1) % 1, ve = U == null ? ne : U + jn(ne, (U % 1 + 1) % 1);
        h.set(ee, { x: ve, y: ue }), U = ve;
      });
    }
    const m = (U) => !U || typeof U != "object" ? { x: 0, y: 0 } : h.get(U) || x0(U), g = (U, ee, oe, ue = {}) => {
      const ne = u ? (Number(ee) % 1 + 1) % 1 : Number(ee), ve = w0(U, ne, oe, ue);
      return h.set(ve, { x: Number(ee), y: Number(oe) }), ve;
    }, v = (U, ee, oe) => {
      const ue = m(U), ne = m(ee);
      return g(U, Gn(ue.x, ne.x, oe), Gn(ue.y, ne.y, oe), {
        t: Gn(Number((U == null ? void 0 : U.t) || 0), Number((ee == null ? void 0 : ee.t) || 0), oe),
        widthScale: Gn(on(U, "widthScale", 1), on(ee, "widthScale", 1), oe),
        pressureLike: Gn(on(U, "pressureLike", 1), on(ee, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const U = m(i[0]);
      return [g(i[0], U.x, U.y)];
    }
    const S = S0(s, l), k = (U, ee) => {
      const oe = [0];
      for (let J = 1; J < U.length; J += 1) {
        const fe = m(U[J - 1]), Ie = m(U[J]);
        oe.push(oe[J - 1] + Math.hypot(Ie.x - fe.x, Ie.y - fe.y));
      }
      const ue = oe[oe.length - 1] || 0;
      if (ue <= 1e-8) {
        const J = U[0], fe = m(J);
        return [g(J, fe.x, fe.y)];
      }
      const ne = [];
      let ve = 0;
      for (let J = 0; J <= ue + 1e-9; J += ee) {
        for (; ve < oe.length - 2 && oe[ve + 1] < J; ) ve += 1;
        const fe = oe[ve], Ie = oe[ve + 1], Oe = Math.max(1e-8, Ie - fe);
        ne.push(v(U[ve], U[ve + 1], K((J - fe) / Oe, 0, 1)));
      }
      const $e = U[U.length - 1], je = m($e), qe = ne[ne.length - 1], me = qe ? m(qe) : null;
      return (!me || Math.hypot(me.x - je.x, me.y - je.y) > ee * 0.35) && ne.push(g($e, je.x, je.y)), ne;
    }, I = (U) => {
      if (!Array.isArray(U) || U.length < 3) return U ? U.slice() : [];
      const ee = m(U[0]), oe = [g(U[0], ee.x, ee.y)];
      for (let ve = 0; ve < U.length - 1; ve += 1) {
        const $e = U[ve], je = U[ve + 1], qe = m($e), me = m(je), J = g(
          $e,
          qe.x * 0.75 + me.x * 0.25,
          qe.y * 0.75 + me.y * 0.25,
          {
            t: Number($e.t || 0) * 0.75 + Number(je.t || 0) * 0.25,
            widthScale: on($e, "widthScale", 1) * 0.75 + on(je, "widthScale", 1) * 0.25,
            pressureLike: on($e, "pressureLike", 1) * 0.75 + on(je, "pressureLike", 1) * 0.25
          }
        ), fe = g(
          $e,
          qe.x * 0.25 + me.x * 0.75,
          qe.y * 0.25 + me.y * 0.75,
          {
            t: Number($e.t || 0) * 0.25 + Number(je.t || 0) * 0.75,
            widthScale: on($e, "widthScale", 1) * 0.25 + on(je, "widthScale", 1) * 0.75,
            pressureLike: on($e, "pressureLike", 1) * 0.25 + on(je, "pressureLike", 1) * 0.75
          }
        );
        oe.push(J, fe);
      }
      const ue = U[U.length - 1], ne = m(ue);
      return oe.push(g(ue, ne.x, ne.y)), oe;
    }, M = k(i, S);
    if (M.length < 3) return M;
    const F = l ? 2 : 1;
    let H = M.slice();
    for (let U = 0; U < F; U += 1) H = I(H);
    return k(H, Math.max(S * 0.75, 55e-5));
  }
  function on(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function k0(i) {
    const s = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(s) && s > 0) {
      const l = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return l === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: l,
        value: s
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function No(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const h = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function Po() {
    const i = _a();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ri() {
    const i = _a();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function vf() {
    const i = el(), s = Ri();
    return i ? `${s}:${i}` : s;
  }
  function M0() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function N0() {
    p.paintCompositeRevision += 1;
  }
  function P0() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function _f() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), p.paintEngineRevisionKey = Po();
  }
  function xf() {
    _.painting_layer !== null && (_.painting_layer = null), da = "";
  }
  function Qt() {
    P0(), ye.backgroundDirty = !0, ye.dirty = !0;
  }
  function Zn({ rebuildPaintEngine: i = !1 } = {}) {
    xf(), M0(), Qt(), i && _f();
  }
  function Vi() {
    xf(), N0(), Qt();
  }
  function va() {
    var u;
    const i = _a(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = kc(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = Po();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (u = p.paintEngine) == null || u.rebuildCommitted(_));
  }
  function _a() {
    const i = Math.max(1, N(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Tn() {
    return _a();
  }
  function A0(i, s, l, u, h = null) {
    const m = k0(i), g = on(s, "widthScale", 1) * on(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * fr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function C0(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * g : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, S = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${S})`;
  }
  function I0(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function O0(i, s, l, u, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), C0(i, l, h);
    const g = (v) => I0(i, v, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let v = 0; v < s.length - 1; v += 1) {
      const S = s[v], k = s[v + 1];
      if (!S || !k) continue;
      const I = Number(S.x || 0), M = Number(S.y || 0), F = Number(k.x || 0), H = Number(k.y || 0), ie = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), U = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(I) || !Number.isFinite(M) || !Number.isFinite(F) || !Number.isFinite(H) || !Number.isFinite(ie) || !Number.isFinite(U)) continue;
      const ee = F - I, oe = H - M, ue = Math.hypot(ee, oe);
      if (!Number.isFinite(ue) || ue < 1e-6) {
        g(S);
        continue;
      }
      if (ue > Math.max(u.w, u.h) * 0.5) continue;
      const ne = Math.max(0.5, Math.min(ie, U)), ve = Math.max(0.35, Math.min(ne * 0.4, 2.25)), $e = Math.max(1, Math.ceil(ue / ve));
      for (let je = 0; je <= $e; je += 1) {
        const qe = je / $e;
        g({
          x: Gn(I, F, qe),
          y: Gn(M, H, qe),
          radiusPx: Gn(ie, U, qe)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function E0(i, s, l, u) {
    O0(i, s, l, u, { preview: !1 });
  }
  function T0(i, s, l, u, h) {
    var v, S, k, I;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = s[0]) == null ? void 0 : v[m]) || 0) * u.w, Number(((S = s[0]) == null ? void 0 : S[g]) || 0) * u.h);
    for (let M = 1; M < s.length; M += 1)
      i.lineTo(Number(((k = s[M]) == null ? void 0 : k[m]) || 0) * u.w, Number(((I = s[M]) == null ? void 0 : I[g]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function wf(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function F0(i, s) {
    const l = wf(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: A0(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Sf(i, s, l = null) {
    var v, S, k, I;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((k = s == null ? void 0 : s.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill")
      return T0(i.ctx, wf(h), h, u), !0;
    const g = F0(h, u);
    return g.length ? (E0(i.ctx, g, h, u), !0) : !1;
  }
  function D0(i, s, l, u = 8) {
    const h = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), v = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let k = 0; k < s; k += 1) {
        const I = S * s + k;
        if (h[I] || i[I] <= u) continue;
        let M = 0, F = 0;
        g[F] = k, v[F] = S, F += 1, h[I] = 1;
        const H = [];
        let ie = k, U = S, ee = k, oe = S;
        for (; M < F; ) {
          const ue = g[M], ne = v[M];
          M += 1, H.push({ x: ue, y: ne }), ue < ie && (ie = ue), ne < U && (U = ne), ue > ee && (ee = ue), ne > oe && (oe = ne);
          const ve = [
            [(ue - 1 + s) % s, ne],
            [(ue + 1) % s, ne],
            [ue, ne - 1],
            [ue, ne + 1]
          ];
          for (const [$e, je] of ve) {
            if (je < 0 || je >= l) continue;
            const qe = je * s + $e;
            h[qe] || i[qe] <= u || (h[qe] = 1, g[F] = $e, v[F] = je, F += 1);
          }
        }
        m.push({ pixels: H, minX: ie, minY: U, maxX: ee, maxY: oe });
      }
    return m;
  }
  function L0(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, k) => S - k);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let S = 0; S < l.length; S += 1) {
      const k = l[S], M = (S === l.length - 1 ? l[0] + s : l[S + 1]) - k - 1;
      M > u && (u = M, h = S);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let g = 1 / 0, v = -1 / 0;
    for (const S of l) {
      const k = (S - m + s) % s;
      g = Math.min(g, k), v = Math.max(v, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - g + 1)
    };
  }
  function R0(i, s, l = {}) {
    var k;
    const u = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || u < 1 || h < 1) return [];
    const g = m.getImageData(0, 0, u, h), v = new Uint8Array(u * h);
    for (let I = 0; I < v.length; I += 1) v[I] = g.data[I * 4 + 3];
    return D0(v, u, h, 8).map((I, M) => {
      const F = L0(I, u);
      if (!F) return null;
      const H = Number(F.widthPx || 0), ie = I.maxY - I.minY + 1, U = Number(F.startX || 0), ee = document.createElement("canvas");
      ee.width = H, ee.height = ie;
      const oe = ee.getContext("2d");
      if (!oe) return null;
      const ue = oe.createImageData(H, ie);
      return I.pixels.forEach(({ x: ne, y: ve }) => {
        const $e = (ve * u + ne) * 4, je = (Number(ne || 0) - U + u) % u, qe = ((ve - I.minY) * H + je) * 4;
        ue.data[qe + 0] = g.data[$e + 0], ue.data[qe + 1] = g.data[$e + 1], ue.data[qe + 2] = g.data[$e + 2], ue.data[qe + 3] = g.data[$e + 3];
      }), oe.putImageData(ue, 0, 0), {
        id: Yi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + M * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: I.minY / h,
          u1: H / u,
          v1: (I.maxY + 1) / h
        },
        rasterDataUrl: ee.toDataURL("image/png"),
        transform: {
          du: U / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ao(i, s) {
    if (!i || !s) return null;
    const l = pa(i), u = cc(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = cc(s, l.right) / u, m = cc(s, l.up) / u;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function V0(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = Xr();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Mo(Li(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function kf(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const u = Xr();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + jn(m, s);
        return {
          x: u.x + g * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => Mo(Li(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function $0(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], h = i[(l + 1) % i.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function z0(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = Li(h), g = Ao(s, m);
      if (!g) return [];
      u.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return $0(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function j0(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = Li(h), g = Ao(s, m);
      g && u.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function H0() {
    const i = Ve(), s = kl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: u, shot: h } = m_(i, s, { width: P.width, height: P.height }), m = G0(l);
    return C.save(), C.fillStyle = "#0a0a0a", C.fillRect(0, 0, P.width, P.height), pf(C, u, h) || (C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(u.x, u.y, u.w, u.h)), C.restore(), C.save(), C.fillStyle = "rgba(0, 0, 0, 0.58)", C.beginPath(), C.rect(0, 0, P.width, P.height), C.roundRect(l.x, l.y, l.w, l.h, m), C.fill("evenodd"), C.restore(), C.save(), C.strokeStyle = oM, C.globalAlpha = 0.62, C.lineWidth = 2, C.beginPath(), C.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), C.stroke(), C.restore(), !0;
  }
  function G0(i) {
    const s = Math.max(1e-6, Number(ye.frameCanvasScale || 1));
    return Math.min(ii * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Er() {
    var s;
    const i = p.mode === "frame" ? Ve() : null;
    A.frameRollKnob.visible = !!i && !r && i.locked !== !0, A.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), A.frameRollKnob.displayValue = Ui(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", A.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function K0() {
    var S, k;
    if (((S = p.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let l;
    if (p.mode === "frame") {
      const I = Ve(), M = Ht(I);
      l = z0(s, I, M);
    } else
      l = V0(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), g = Math.round(Number(h.g || 0) * 255), v = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let I = 1; I < l.length; I++) C.lineTo(Number(l[I].x || 0), Number(l[I].y || 0));
    C.closePath(), u ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${g},${v},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function B0() {
    const i = p.frameRollOverlayVisual, s = K(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Ht(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * fr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(h) * m, v = Math.sin(h) * m;
    C.save(), C.globalAlpha *= s, C.beginPath(), C.rect(l.x, l.y, l.w, l.h), C.clip(), C.translate(u.x, u.y), C.rotate(h);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    C.beginPath();
    for (let k = -m; k <= m; k += S)
      C.moveTo(k, -m), C.lineTo(k, m);
    for (let k = -m; k <= m; k += S)
      C.moveTo(-m, k), C.lineTo(m, k);
    C.lineWidth = 1, C.strokeStyle = "rgba(255, 255, 255, 0.22)", C.stroke(), C.setTransform(1, 0, 0, 1, 0, 0), C.beginPath(), C.moveTo(u.x - g, u.y - v), C.lineTo(u.x + g, u.y + v), C.lineWidth = 1.5, C.setLineDash([8, 6]), C.strokeStyle = "rgba(255, 255, 255, 0.92)", C.shadowColor = "rgba(0, 0, 0, 0.8)", C.shadowBlur = 3, C.stroke(), C.setLineDash([]), C.restore();
  }
  function W0() {
    return t !== "cutout" || !Ve() ? 0 : lM;
  }
  function U0() {
    const i = K(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = Ve(), l = s ? Yt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && u && (p.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Ku(s),
      locked: gn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : h ? p.cutoutPanoDimCorners || [] : [];
    if (C.save(), C.fillStyle = `rgba(0, 0, 0, ${i})`, C.beginPath(), C.rect(0, 0, P.width, P.height), m.length >= 4) {
      C.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) C.lineTo(m[g].x, m[g].y);
      C.closePath();
    }
    C.fill("evenodd"), C.restore();
  }
  function Y0() {
    Pr = null, p.mode === "frame" ? (ye.frameSafeRect = mb(), H0()) : p.mode === "unwrap" ? l0(!1) : c0(!1), U0(), t === "cutout" && _0(), y0(), Er(), K0(), B0(), A.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Xe(), ye.hasPresentedFrame || (ye.hasPresentedFrame = !0, W.style.opacity = "1"), t === "cutout" && A.cameraPreview && (A.cameraPreview.settled = ye.pendingStableLayoutFrames <= 0 && ye.hasPresentedFrame && p.mode !== "frame");
    const i = Zg();
    A.stageStatus = i.status, A.stageStatusDetail = i.detail, i.status === nr ? (ae == null || ae.removeAttribute("data-stage-ready"), ae == null || ae.setAttribute("data-stage-loading-kind", i.detail)) : (ae == null || ae.setAttribute("data-stage-ready", ""), ae == null || ae.removeAttribute("data-stage-loading-kind"));
  }
  function X0(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function q0() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = _g();
  }
  function pe(i = {}) {
    var v, S, k, I, M, F, H, ie, U, ee;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), h = String(((v = p.interaction) == null ? void 0 : v.kind) || "");
    (!s || h === "view" || h === "pan_frame" || X0() || !!((S = p.viewTween) != null && S.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (ye.backgroundDirty = !0), s && zu() && (p.livePaintInteractionRevision += 1, ye.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (cl(), Ir()), q0(), l && ((I = (k = e.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || I.call(k), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((H = (F = e.graph) == null ? void 0 : F.setDirtyCanvas) == null || H.call(F, !0, !0), (ee = (U = (ie = or) == null ? void 0 : ie.canvas) == null ? void 0 : U.setDirty) == null || ee.call(U, !0, !0)), ye.dirty = !0;
  }
  function Mf() {
    const i = P.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return P.width !== s || P.height !== l || W.width !== s || W.height !== l ? (P.width = s, P.height = l, W.width = s, W.height = l, ye.backgroundDirty = !0, ye.dirty = !0, t === "cutout" && (ye.pendingStableLayoutFrames = Math.max(Number(ye.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function J0(i = performance.now()) {
    var m, g;
    ye.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const v = K(
        (i - Number(p.frameRollOverlayStartTs || i)) / cM,
        0,
        1
      );
      p.frameRollOverlayAlpha = Gn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        ja(v)
      ), v >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), ye.dirty = !0;
    }
    const u = W0();
    if (Math.abs(u - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = u, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const v = K(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Gh,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Gn(
        Number(p.cutoutPanoDimFrom || 0),
        u,
        ja(v)
      ), v >= 1 && (p.cutoutPanoDimAlpha = u), v >= 1 && u === 0 && (p.cutoutPanoDimCorners = null), ye.dirty = !0;
    }
    const h = t === "cutout" && Ve() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const v = K(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Gh,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Gn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        ja(v)
      ), v >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), ye.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const v = Math.max(1, Number(p.outputPreviewAnimDurationMs)), S = K((i - Number(p.outputPreviewAnimStartTs || 0)) / v, 0, 1), I = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? bM(S) : xM(S);
      p.outputPreviewAnim = Gn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, I), ye.dirty = !0, S >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((g = p.viewTween) != null && g.active) {
      const v = p.viewTween, S = K((i - v.startTs) / v.durationMs, 0, 1), k = ja(S);
      p.viewYaw = Rt(v.startYaw + v.deltaYaw * k), p.viewPitch = v.startPitch + (v.targetPitch - v.startPitch) * k, p.viewFov = v.startFov + (v.targetFov - v.startFov) * k, ye.backgroundDirty = !0, ye.dirty = !0, S >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(en.state.inertia.vx || 0), p.viewInertia.vy = Number(en.state.inertia.vy || 0), p.viewInertia.active = !!en.state.inertia.active, en.stepInertia(i) && (p.viewInertia.vx = Number(en.state.inertia.vx || 0), p.viewInertia.vy = Number(en.state.inertia.vy || 0), p.viewInertia.active = !!en.state.inertia.active, ye.backgroundDirty = !0, ye.dirty = !0), (ye.dirty || i - ye.lastSizeCheckTs >= 220) && (Mf(), ye.lastSizeCheckTs = i), ye.pendingStableLayoutFrames > 0 && (ye.pendingStableLayoutFrames -= 1, ye.dirty = !0), ye.dirty) {
      if (ye.pendingStableLayoutFrames > 0)
        return;
      ye.dirty = !1, Y0();
    }
  }
  function Nf(i = performance.now()) {
    if (ye.running)
      try {
        J0(i);
      } catch (s) {
        const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
        ye.tickErrorSignature !== l && (ye.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), A.stageStatus = rr, A.stageStatusDetail = "frame", ae == null || ae.setAttribute("data-stage-ready", ""), ae == null || ae.removeAttribute("data-stage-loading-kind");
      } finally {
        ye.running && (ye.rafId = requestAnimationFrame(Nf));
      }
  }
  function Z0() {
    ye.running = !1, ye.rafId && cancelAnimationFrame(ye.rafId), ye.rafId = 0;
  }
  function nt() {
    r || (p.historyController.commitActionGroup(JSON.stringify(Qd(_))), Cl());
  }
  function _l(i) {
    if (r) return;
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Cl(), !s) return;
    const l = JSON.parse(s);
    Object.keys(_).forEach((u) => delete _[u]), Object.assign(_, l), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], Zn(), kn(), He(), Mn(), pe({ cause: "cutout_frame" });
  }
  function Pf() {
    var l, u;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((u = p.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function kn() {
    la();
    const i = Vw({
      editor: p,
      swatches: as,
      paintColorPopOpen: E ? !E.hidden : !1,
      colorToCss: dr,
      colorsApproximatelyEqual: ss,
      rgb01ToHsv: dc,
      hsv01ToRgb: fc,
      getBrushPresetIdForTool: Jr,
      isActiveLassoTool: Cg
    });
    if (Object.assign(A.paintDock, i), Dg(), !i.visible) {
      E && (E.hidden = !0);
      return;
    }
    xe && (clearTimeout(xe), xe = 0), bo && (!i.colorEnabled && E && !E.hidden && (xe = window.setTimeout(() => {
      E.hidden = !0, A.paintDock.colorPopOpen = !1, xe = 0;
    }, 170)), E && (E.style.setProperty("--picker-hue-color", i.pickerHueColor), E.style.setProperty("--picker-sat", i.pickerSat), E.style.setProperty("--picker-val", i.pickerVal), E.style.setProperty("--picker-hue", i.pickerHue)), te && (te.style.left = i.pickerSvLeft, te.style.top = i.pickerSvTop), de && (de.style.left = i.pickerHueLeft));
  }
  function $i() {
    const i = t === "cutout" && p.mode === "frame" ? Ve() : Mt();
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Vr(i)
    }, He());
  }
  function He() {
    var je, qe, me, J;
    if (o) return;
    _.ui_settings = _.ui_settings || {};
    const i = Rw(_.ui_settings);
    if (a) {
      A.sidePanel = $w({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Bn
      });
      return;
    }
    const s = Mt(), l = t === "cutout" && p.mode === "frame" ? Ve() : null, u = l || s, h = l ? [l] : Jn(), m = l ? "shot" : fa();
    h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(u.yaw_deg || 0),
      pitch_deg: Number(u.pitch_deg || 0),
      hFOV_deg: Number(u.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(u.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(u.rot_deg || 0),
      roll_deg: Number(u.roll_deg || 0),
      aspect_id: Vr(u)
    });
    const g = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), v = m === "stroke" ? null : u, S = v || g, k = !!v && !gn(v);
    p.panelWasEnabled = k, cl();
    let I = null;
    if (l) {
      const fe = ol({ item: l, kind: "shot", label: "Frame" });
      I = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: fe.label,
        currentIcon: fe.icon || null,
        items: [{
          id: String(l.id || ""),
          label: fe.label,
          icon: fe.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const fe = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Ar().forEach((Ce, Ge) => {
        var tn, wt;
        if (!Ce) return;
        const rt = Ut(Ce) ? String(Ce.id || Va) : String(((wt = (tn = _.assets) == null ? void 0 : tn[Ce.asset_id]) == null ? void 0 : wt.name) || Ce.asset_id || Ce.id), Ye = `${Ge + 1}. ${rt}${Ut(Ce) && Ii(Ce) ? " (hidden)" : ""}`, yt = ol({ item: Ce, label: Ye, kind: "image" });
        fe.push({ id: Ce.id, label: yt.label, icon: yt.icon, item: Ce, kind: "image" });
      }) : Bu().forEach((Ce) => {
        if (!(Ce != null && Ce.item)) return;
        const Ge = ol(Ce);
        fe.push({ id: Ce.item.id, label: Ge.label, icon: Ge.icon, item: Ce.item, kind: Ce.kind });
      });
      const Ie = (v == null ? void 0 : v.id) || "", Oe = fe.find((Ce) => Ce.id === Ie) || fe[0];
      I = {
        label: "Selection",
        open: !1,
        disabled: fe.length <= 1,
        currentLabel: Oe.label,
        currentIcon: Oe.icon || null,
        items: fe.map((Ce) => ({
          id: Ce.id,
          label: Ce.label,
          icon: Ce.icon || null,
          active: Ce.id === Ie
        }))
      };
    }
    const M = [], F = (fe, Ie, Oe, Ce, Ge) => {
      const rt = K(Number(S[fe] || 0), Oe, Ce);
      M.push({
        key: fe,
        label: Ie,
        min: Oe,
        max: Ce,
        step: Ge,
        value: rt,
        displayValue: Ui(rt),
        fillPct: K((rt - Oe) / Math.max(1e-6, Ce - Oe) * 100, 0, 100),
        enabled: k && !r
      });
    }, H = [];
    h.length > 1 ? (H.push(`Selected objects: ${h.length}`), H.push("Multi-selection supports z-order and delete.")) : (F("yaw_deg", "Yaw", -180, 180, 0.1), F("pitch_deg", "Pitch", -90, 90, 0.1), F("hFOV_deg", "H FOV", 1, 179, 0.1), F("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? F("rot_deg", "Rotation", -180, 180, 0.1) : F("roll_deg", "Roll", -180, 180, 0.1));
    const ie = Array.isArray((qe = (je = _ == null ? void 0 : _.painting) == null ? void 0 : je.paint) == null ? void 0 : qe.strokes) ? _.painting.paint.strokes.length : 0, U = Array.isArray((J = (me = _ == null ? void 0 : _.painting) == null ? void 0 : me.mask) == null ? void 0 : J.strokes) ? _.painting.mask.strokes.length : 0, ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((fe) => String((fe == null ? void 0 : fe.name) || "")) : [], oe = gM(
      e,
      ee.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ue = !!String((oe == null ? void 0 : oe.src) || "").trim() || Uu("pano_input_images").length > 0, ne = Array.isArray(Ar()) && Ar().length > 0 || ie > 0, ve = U > 0, $e = [
      { key: "mask", label: "Mask", icon: Ne.circle_dashed_tool, visible: !!p.showMask, enabled: ve },
      { key: "objects", label: "Paint / Images", icon: Ne.image, visible: !!p.showObjects, enabled: ne },
      { key: "panorama", label: "Panorama", icon: Ne.globe, visible: !!p.showPanorama, enabled: ue }
    ].map((fe) => ({
      ...fe,
      ariaLabel: `Toggle ${fe.label.toLowerCase()}`,
      tip: fe.visible ? "Hide" : "Show"
    }));
    A.sidePanel = zw({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: I,
      enabled: k,
      selectedKind: m,
      selectedItems: h,
      params: M,
      notes: H,
      visibilityRows: $e,
      uiSettings: i,
      normalizeCoverageValue: Bn
    });
  }
  async function Af(i) {
    if (r || t !== "stickers" && t !== "cutout" || !_r(i)) return;
    const s = Ba("asset"), l = Fc(e, `add:${s}`, async () => {
      try {
        const { image: u } = await Dc(i);
        Te.set(s, u);
        const h = Ba("st");
        _.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ti(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: Wu()
        }), Ci(_.stickers[_.stickers.length - 1]), Sl(), He(), Xe(), pe();
        const m = await is(i, {
          fetchApi: (S, k) => cn.fetchApi(S, k)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, Di(), nt(), ot(), He(), Xe(), pe();
      } catch (u) {
        delete _.assets[s], Te.delete(s);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(p.selectedId || "")) && Ci(null), He(), Xe(), pe(), ot()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Q0() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = q == null ? void 0 : q.openImagePicker) == null || i.call(q, "add");
  }
  async function eb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Mt();
    if (!s || !gt(s) || Ut(s) || !_r(i)) return;
    const l = String(s.id || ""), u = Ba("asset"), h = Fc(e, `replace:${l}:${u}`, async () => {
      var I;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === l) || null;
      if (!m || !gt(m) || Ut(m)) return;
      const g = String(m.asset_id || ""), v = g ? an(((I = _.assets) == null ? void 0 : I[g]) || null) : null, S = Number(m.vFOV_deg || 0), k = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: M } = await Dc(i);
        Te.set(u, M), m.asset_id = u, m.vFOV_deg = Ti(
          Number(m.hFOV_deg || 30),
          Number(M.naturalWidth || M.width || 1),
          Number(M.naturalHeight || M.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Qt(), He(), Xe(), pe();
        const F = await is(i, {
          fetchApi: (ie, U) => cn.fetchApi(ie, U)
        }), H = (Array.isArray(_.stickers) ? _.stickers : []).find((ie) => String((ie == null ? void 0 : ie.id) || "") === l) || null;
        if (!H || String(H.asset_id || "") !== u) return;
        _.assets[u] = F, Di(), nt(), ot(), He(), Xe(), pe();
      } catch (M) {
        delete _.assets[u], Te.delete(u);
        const F = (Array.isArray(_.stickers) ? _.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === u && (g && v && (_.assets[g] = v), F.asset_id = g, F.vFOV_deg = S, F.crop = k ? { ...k } : null), Qt(), ot(), He(), Xe(), pe(), M;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function tb() {
    var s;
    if (r) return;
    const i = Mt();
    !i || !gt(i) || Ut(i) || (s = q == null ? void 0 : q.openImagePicker) == null || s.call(q, "replace");
  }
  async function nb() {
    if (r || t !== "stickers") return;
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, s = Object.entries(i).filter(([, u]) => {
      const h = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [u, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((M) => M.blob()), v = String(g.type || "image/png").split("/")[1] || "png", S = String((h == null ? void 0 : h.name) || `${u}.${v}`), k = new File([g], S, { type: g.type || "image/png" }), I = await is(k, {
          fetchApi: (M, F) => cn.fetchApi(M, F)
        });
        _.assets[u] = {
          ...I,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (ot(), pe());
  }
  function rb() {
    if (r || t !== "cutout") return;
    const i = Ve();
    if (i) {
      Ci(i), p.mode = "pano", qs(
        Rt(Number(i.yaw_deg || 0)),
        K(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), He(), Xe(), pe({ cause: "cutout_frame" });
      return;
    }
    const s = sm({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Rt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [s], Ci(s), Sl(), p.mode = "pano", nt(), ot(), He(), Xe(), pe({ cause: "cutout_frame" });
  }
  function ib() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, nt(), ot(), He(), Xe(), pe());
  }
  function ob() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Ut(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Cf(i, s, l = "Clear") {
    return new Promise((u) => {
      A.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: u
      };
    });
  }
  async function ab() {
    var l, u;
    if (r || !await Cf(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = ao(null), Zn();
    const s = ob();
    if (t === "stickers")
      _.stickers = s, _.assets = {}, p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, Di();
    else {
      const h = r_(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, Di();
    }
    nt(), ot(), He(), Xe(), pe();
  }
  async function sb(i) {
    var m, g, v, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = zi(s);
    if (!(!u.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((g = p.interaction) == null ? void 0 : g.layerKind) === s) || !await Cf(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((v = p.interaction) == null ? void 0 : v.kind) === "draw" && ((S = p.interaction) == null ? void 0 : S.layerKind) === s) {
        const k = Tn();
        k && p.paintEngine.cancelActiveStroke(k), p.interaction = null;
      }
      u.length = 0, _.painting.raster_objects = Sn().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== s), s === "paint" && (nn().length = 0), Zn(), nt(), ot(), He(), Xe(), kn(), pe();
    }
  }
  function lb() {
    if (r) return;
    const i = Mt();
    if (!i || !gt(i) || Ut(i)) return;
    const s = JSON.parse(JSON.stringify(i));
    s.id = Ba("st"), s.yaw_deg = Rt((s.yaw_deg || 0) + 8), s.z_index = Wu(), _.stickers.push(s), _.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Qt(), nt(), ot(), Xe(), He(), pe();
  }
  function If() {
    var l, u, h, m, g, v;
    if (r) return;
    const i = Jn(), s = Mt();
    if (!(!s && i.length === 0) && !i.some((S) => gn(S))) {
      if (i.length > 1) {
        const S = new Set(i.filter((M) => jt(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => rn(M)).map((M) => Wt(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(gt).map((M) => String(M.id || "")));
        S.size > 0 && (_.painting.paint.strokes = (Array.isArray((u = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? _.painting.paint.strokes : []).filter((M) => !S.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = nn().filter((M) => !S.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Zn()), k.size > 0 && (_.painting.raster_objects = Sn().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Vi()), I.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Ut(M) ? (Ii(M) || (M.visible = !1), !0) : !1 : !0), Di(), Qt()), p.selectedId = null, p.selectedIds = [], nt(), ot(), He(), Xe(), pe();
        return;
      }
      if (jt(s)) {
        const S = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== S), _.painting.groups = nn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== S), Zn(), p.selectedId = null, p.selectedIds = [], nt(), ot(), He(), Xe(), pe();
        return;
      }
      if (rn(s)) {
        const S = Wt(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Sn().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== S), Vi(), p.selectedId = null, p.selectedIds = [], nt(), ot(), He(), Xe(), pe();
        return;
      }
      if (t === "stickers" || gt(s)) {
        if (Ut(s)) {
          if (Ii(s)) return;
          s.visible = !1, Qt(), nt(), ot(), He(), Xe(), pe();
          return;
        }
        _.stickers = _.stickers.filter((S) => S.id !== s.id), Di(), Qt(), p.selectedId = ((g = _.stickers[0]) == null ? void 0 : g.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((v = _.stickers[0]) == null ? void 0 : v.id) || null, nt(), ot(), He(), Xe(), pe();
        return;
      }
      ib();
    }
  }
  function xl(i, s) {
    const l = ye.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const u = oc * wi(l, i), h = xu(_u(l, s), u);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Of(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const v = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(v)) {
        const [I, M] = v.split(":").map((F) => Number(F));
        if (Number.isFinite(I) && Number.isFinite(M)) return I >= M;
      }
      const S = Number(i.hFOV_deg || 64), k = Number(i.vFOV_deg || 40);
      return Math.abs(S - k) > 1e-6 ? S >= k : Si(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const g = h / m;
    if (!xl(i, g)) {
      const v = K(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = v, i.hFOV_deg = Za(v, g);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function cb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = ta(s, l);
    if (!u) return !1;
    const h = u.ratio;
    if (!xl(i, h)) {
      const m = K(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Za(m, h);
    }
    return i.aspect_id = u.label, !0;
  }
  function Ef(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Wr(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!xl(i, h)) {
      const m = K(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Za(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = mi(i);
  }
  function Tf() {
    Ni().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function ub() {
    if (r) return;
    const i = Jn();
    if (!Mt() || i.length === 0 || i.some((v) => gn(v))) return;
    Tf();
    const l = Ni(), u = new Set(i.map((v) => gt(v) ? `sticker:${String(v.id || "")}` : rn(v) ? `rasterObject:${Wt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (l.forEach((v) => {
      var k, I;
      const S = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((I = v.item) == null ? void 0 : I.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(S) ? h.push(v) : m.push(v);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((v, S) => {
      v.type === "sticker" && v.item && (v.item.z_index = S), v.type === "strokeGroup" && v.item && (v.item.z_index = S), v.type === "rasterObject" && v.item && (v.item.z_index = S);
    }), Qt(), nt(), ot(), Xe(), pe();
  }
  function fb() {
    if (r) return;
    const i = Jn();
    if (!Mt() || i.length === 0 || i.some((v) => gn(v))) return;
    Tf();
    const l = Ni(), u = new Set(i.map((v) => gt(v) ? `sticker:${String(v.id || "")}` : rn(v) ? `rasterObject:${Wt(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (l.forEach((v) => {
      var k, I;
      const S = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((I = v.item) == null ? void 0 : I.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(S) ? h.push(v) : m.push(v);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((v, S) => {
      v.type === "sticker" && v.item && (v.item.z_index = S), v.type === "strokeGroup" && v.item && (v.item.z_index = S), v.type === "rasterObject" && v.item && (v.item.z_index = S);
    }), Qt(), nt(), ot(), Xe(), pe();
  }
  function db() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = Bn(d.value)), y && (_.bg_color = String(y.value || _.bg_color || "#00ff00")), Mn(), e.setDirtyCanvas(!0, !0));
  }
  function Mn() {
    var s;
    if (r) return;
    _.coverage = Bn(_.coverage), mm(e, _.active);
    const i = gm(e, _);
    b && (b.value = i, (s = b.callback) == null || s.call(b, i));
  }
  const Ff = () => Mn();
  r || (e.__panoFlushStateBeforeQueue = Ff);
  function wl() {
    _.ui_settings = PM(_.ui_settings), r || Mn();
  }
  function ot() {
    var i;
    r || (Mn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function hb() {
    r || Jg() && lf().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function pb(i = {}) {
    var u, h, m, g, v, S, k, I, M, F;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !1)), l && ((k = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || k.call(S, !0, !0), (F = (M = (I = or) == null ? void 0 : I.canvas) == null ? void 0 : M.setDirty) == null || F.call(M, !0, !0));
  }
  function Sl() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", kn(), He());
  }
  function si(i) {
    const s = P.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * P.width,
      y: (i.clientY - s.top) / s.height * P.height
    };
  }
  function xa(i) {
    const s = P.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Df() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Ve() {
    if (t !== "cutout") return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function mb() {
    var H, ie, U, ee, oe;
    if (!P) return null;
    const i = (H = P.getBoundingClientRect) == null ? void 0 : H.call(P), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? P.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? P.height / i.height : 1;
    ye.frameCanvasScale = Math.min(s, l);
    let u = 24, h = 24;
    const m = Math.max(u + 1, P.width - 24);
    let g = Math.max(h + 1, P.height - 24);
    const v = (ie = Ze == null ? void 0 : Ze.getBoundingClientRect) == null ? void 0 : ie.call(Ze), S = (U = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : U.call(pt);
    let k = 24;
    v && i && v.width > 0 && v.height > 0 && (k = Math.max(k, (v.right - i.left) * s + Hh)), S && i && S.width > 0 && S.height > 0 && ((ee = A.frameRail) == null ? void 0 : ee.visible) === !0 && (k = Math.max(k, (i.right - S.left) * s + Hh)), u = Math.max(u, k);
    const I = Math.min(m, P.width - k);
    let M = 24;
    const F = (oe = Re == null ? void 0 : Re.getBoundingClientRect) == null ? void 0 : oe.call(Re);
    if (F && i && F.width > 0 && F.height > 0 && (M = Math.max(M, (F.bottom - i.top) * l + ac)), [mt, At].forEach((ue) => {
      var $e;
      if (!ue || !i) return;
      const ne = getComputedStyle(ue);
      if (ne.display === "none" || ne.visibility === "hidden" || Number(ne.opacity) <= 0) return;
      const ve = ($e = ue.getBoundingClientRect) == null ? void 0 : $e.call(ue);
      !ve || ve.width <= 0 || ve.height <= 0 || (M = Math.max(M, (i.bottom - ve.top) * l + ac));
    }), Ee && i) {
      const ue = getComputedStyle(Ee);
      ue.display !== "none" && ue.visibility !== "hidden" && Number(ue.opacity) > 0 && (M = Math.max(M, (sM + ac) * l));
    }
    return h = Math.max(h, M), g = Math.max(h + 1, Math.min(g, P.height - M)), {
      x: u,
      y: h,
      w: Math.max(1, I - u),
      h: Math.max(1, g - h)
    };
  }
  function kl(i = Ve()) {
    if (!i || !P) return null;
    const s = ye.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, P.width - 48),
      h: Math.max(1, P.height - 48)
    };
    return Fv(s, i, oc * wi(s, i));
  }
  function Ht(i = Ve()) {
    const s = kl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ml() {
    return t === "cutout" && !!Ve();
  }
  function Qn(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = Xr(), g = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: K(v, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = fl(i.x, i.y), { lon: u, lat: h } = ml(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function er(i, s, l = performance.now()) {
    const u = Ht(s);
    if (!u) return null;
    const h = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = yl(s, h);
    if (!m) return null;
    const { lon: g, lat: v } = ml(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - v / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function gb(i, s) {
    const l = Ve();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, h = cm(l, s);
    if (!h) return !1;
    if (u) {
      const m = oc * wi(
        ye.frameSafeRect || { w: P.width, h: P.height },
        h
      ), g = wu({ width: P.width, height: P.height }, m);
      if (g.halfW < P.width * 0.5 - 1e-6 || g.halfH < P.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, nt(), ot(), He());
    }, 180), He(), !0;
  }
  function bb() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, nt(), ot(), He(), !0) : !1;
  }
  function Co() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && li(), p.interaction = null, Fi(), Ir(), He(), bt(p.pointerPos), pe({ localOnly: !0 }), !0;
  }
  function yb(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Jr(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Fr : Nn[s] ? s : p.activeBrushPresetId || Fr;
  }
  function Lf() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Df() || Ml());
  }
  function Rf() {
    var i;
    return Lf() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function wa(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return p.pointerPos = { x: l, y: u, inside: h }, g;
  }
  function vb() {
    var I, M;
    if (!Rf()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = Jr(s), u = Nn[l] || Nn[Fr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), g = Math.max(3, m * 0.5), v = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Fn(p.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : K(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : K(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: g,
      fillStyle: dr(v, S),
      strokeStyle: dr(v, k),
      x: Number(((I = p.pointerPos) == null ? void 0 : I.x) || 0),
      y: Number(((M = p.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function _b() {
    var F, H, ie;
    const i = vb();
    if (!Z) return;
    if (!i) {
      Z.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", h = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let I = Number(i.hotspotX ?? s * 0.5), M = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Es, l = Es, u = "0", g = "0", v = "none", I = uM, M = fM, m = kM(i.fillStyle, k, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const U = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * U), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, h = Number(((ie = (H = i.preset) == null ? void 0 : H.angle) == null ? void 0 : ie.value) || 0) * gi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Z.style.display = "block", Z.style.width = `${Math.round(s)}px`, Z.style.height = `${Math.round(l)}px`, Z.style.borderRadius = u, Z.style.border = g, Z.style.boxShadow = v, Z.style.background = m, Z.style.backgroundRepeat = "no-repeat", Z.style.backgroundPosition = "center", Z.style.backgroundSize = "contain", Z.style.transform = `translate(${Math.round(i.x - I)}px, ${Math.round(i.y - M)}px) rotate(${h}deg)`;
  }
  function xb() {
    var ue;
    if (!ce || !Se) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = Jr(s), u = Nn[l] || Nn[Fr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), g = Math.max(6, m * 0.5), v = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : Fn(p.paintColor), k = i === "mask" ? dr(S, 0.22) : v ? "rgba(255,255,255,0.14)" : dr(S, K(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), I = i === "mask" ? dr(S, 0.96) : v ? "rgba(255,255,255,0.72)" : dr(S, K(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let M = g * 2, F = g * 2, H = "999px", ie = 0, U = k;
    const ee = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      U = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ne = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      M = Math.max(16, g * 2 * ne), F = Math.max(10, g * 2), H = `${Math.min(8, F * 0.42)}px`, ie = Number(((ue = u == null ? void 0 : u.angle) == null ? void 0 : ue.value) || 0) * gi;
    } else s === "brush" ? U = `radial-gradient(circle at 50% 50%, ${I} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (M = Math.max(18, g * 1.8), F = M, U = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${I} 43%, ${I} 58%, rgba(0,0,0,0) 59%)`) : v && (U = "rgba(255,255,255,0.12)");
    Se.style.width = `${Math.round(M)}px`, Se.style.height = `${Math.round(F)}px`, Se.style.borderRadius = H, Se.style.background = U, Se.style.border = `1px solid ${ee}`, Se.style.boxShadow = `0 0 0 1px ${oe}`, Se.style.transform = `rotate(${ie}deg)`, le && (clearTimeout(le), le = 0), ce.classList.remove("fade-out"), ce.classList.add("show");
  }
  function Sa() {
    !ce || !ce.classList.contains("show") || (ce.classList.add("fade-out"), le && clearTimeout(le), le = window.setTimeout(() => {
      ce.classList.remove("show", "fade-out"), le = 0;
    }, 180));
  }
  function Vf(i, s, l, u) {
    const h = Jr(s), m = Nn[h] || Nn[Fr], g = p.brushSizes[h] ?? 10, v = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = yb(u, v), k = l.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), I = {
      id: Yi(i),
      actionGroupId: Yi("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: S.radiusModel,
      radiusValue: S.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((M) => ({ ...M })),
        points: k.map((M) => ({ ...M }))
      }
    };
    return $h(I, m), Number(m.aspect ?? 1), Number(I.aspect ?? 1), String(I.stampKind || ""), Number(I.size || 0), String(I.radiusModel || ""), Number(I.radiusValue || 0), { ...I.targetSpace }, I;
  }
  function $f(i, s, l, u) {
    const h = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = Jr(s), g = Nn[m] || Nn[Fr], v = {
      id: Yi(i),
      actionGroupId: Yi("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((S) => ({ ...S }))
      }
    };
    return $h(v, g), Number(g.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function zi(i) {
    const s = _.painting || (_.painting = ao(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function wb(i, s, l = performance.now()) {
    let u;
    if (p.mode === "frame") {
      const k = Ve();
      if (!k || (u = er(s, k, l), !u)) return !1;
    } else
      u = Qn(s, l);
    if (!u) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = h[h.length - 1];
    if (g) {
      const k = Math.abs(Number(u.u ?? u.x ?? 0) - Number(g.u ?? g.x ?? 0)), I = Math.abs(Number(u.v ?? u.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (k < 15e-4 && I < 15e-4) return !1;
    }
    const v = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...v }), m.push({ ...v });
    const S = Tn();
    if (S) {
      const k = p.paintEngine.ensureTarget(S);
      p.paintEngine.appendStrokePoint(k, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Sb(i, s, l = performance.now()) {
    var g, v;
    let u;
    if (p.mode === "frame") {
      const S = Ve();
      if (!S) return !1;
      u = er(s, S, l);
    } else
      u = Qn(s, l);
    const h = (v = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : v.points;
    if (!u || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const S = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && k < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function kb(i) {
    var ne, ve, $e, je, qe;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    va();
    const l = Tn(), u = No(l.width, l.height);
    if (!Sf(u, s, { w: l.width, h: l.height })) return !1;
    const h = ((ve = (ne = u.ctx) == null ? void 0 : ne.getImageData(0, 0, l.width, l.height)) == null ? void 0 : ve.data) || null;
    if (!h) return !1;
    const m = new Map(nn().map((me) => [String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || "").trim(), me ? { ...me } : null])), g = [], v = [], S = [...Sn().filter((me) => String((me == null ? void 0 : me.layerKind) || "paint") !== "paint")];
    let k = !1, I = Ni().reduce((me, J) => Math.max(me, Number((J == null ? void 0 : J.z_index) || 0)), -1) + 1;
    function M(me, J, fe, Ie = 8) {
      let Oe = J, Ce = fe, Ge = -1, rt = -1;
      for (let Ye = 0; Ye < fe; Ye += 1)
        for (let yt = 0; yt < J; yt += 1)
          me[(Ye * J + yt) * 4 + 3] <= Ie || (yt < Oe && (Oe = yt), Ye < Ce && (Ce = Ye), yt > Ge && (Ge = yt), Ye > rt && (rt = Ye));
      return Ge < Oe || rt < Ce ? null : { minX: Oe, minY: Ce, maxX: Ge, maxY: rt };
    }
    const F = M(h, l.width, l.height, 8);
    if (!F) return !1;
    function H(me, J) {
      return !me || !J ? !1 : !(me.maxX < J.minX || J.maxX < me.minX || me.maxY < J.minY || J.maxY < me.minY);
    }
    function ie(me, J) {
      const fe = Yr((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || "", "paint", J);
      if (!fe) return null;
      const Ie = fe.centerUv.u - fe.halfW, Oe = fe.centerUv.u + fe.halfW, Ce = fe.centerUv.v - fe.halfH, Ge = fe.centerUv.v + fe.halfH, rt = l.width, Ye = l.height;
      return {
        minX: Math.floor((Ie % 1 + 1) % 1 * rt),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * rt),
        minY: Math.floor(K(Ce, 0, 1) * Ye),
        maxY: Math.ceil(K(Ge, 0, 1) * Ye),
        wraps: Oe - Ie >= 1 || Ie < 0 || Oe > 1
      };
    }
    function U(me) {
      const J = (me == null ? void 0 : me.bbox) || null;
      if (!J) return null;
      const fe = (me == null ? void 0 : me.transform) || {}, Ie = l.width, Oe = l.height, Ce = Number(J.u0 || 0) + Number(fe.du || 0), Ge = Number(J.u1 || 0) + Number(fe.du || 0), rt = Number(J.v0 || 0) + Number(fe.dv || 0), Ye = Number(J.v1 || 0) + Number(fe.dv || 0);
      return {
        minX: Math.floor((Ce % 1 + 1) % 1 * Ie),
        maxX: Math.ceil((Ge % 1 + 1) % 1 * Ie),
        minY: Math.floor(K(rt, 0, 1) * Oe),
        maxY: Math.ceil(K(Ye, 0, 1) * Oe),
        wraps: Ge - Ce >= 1 || Ce < 0 || Ge > 1
      };
    }
    function ee(me) {
      return me ? me.wraps ? H(F, { minX: 0, maxX: me.maxX, minY: me.minY, maxY: me.maxY }) || H(F, { minX: me.minX, maxX: l.width - 1, minY: me.minY, maxY: me.maxY }) : H(F, me) : !0;
    }
    function oe(me) {
      if (!me) return { touched: !1, canvas: null };
      const J = No(l.width, l.height, { readback: !0 });
      J.ctx.drawImage(me, 0, 0);
      const fe = J.ctx.getImageData(0, 0, l.width, l.height);
      J.ctx.save(), J.ctx.globalCompositeOperation = "destination-out", J.ctx.drawImage(u.canvas, 0, 0), J.ctx.restore();
      const Ie = J.ctx.getImageData(0, 0, l.width, l.height);
      for (let Oe = 0; Oe < l.width * l.height; Oe += 1) {
        if (h[Oe * 4 + 3] <= 8) continue;
        const Ge = fe.data[Oe * 4 + 3], rt = Ie.data[Oe * 4 + 3];
        if (Ge > rt)
          return { touched: !0, canvas: J.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ue(me, J, fe) {
      const Ie = Number(fe == null ? void 0 : fe.z_index), Oe = R0(me, J, fe).map((Ce, Ge) => ({
        ...Ce,
        z_index: Number.isFinite(Ie) ? Ie + Ge * 1e-3 : I + Ge * 1e-3
      }));
      return Oe.length && (I = Math.max(I, ...Oe.map((Ce) => Number((Ce == null ? void 0 : Ce.z_index) || 0))) + 1), Oe;
    }
    for (const me of nn()) {
      const J = String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || "").trim();
      if (!J) continue;
      const fe = qn(J, "paint");
      if (!ee(ie(me, fe))) {
        v.push(me), g.push(...fe);
        continue;
      }
      const Ie = ((je = ($e = p.paintEngine) == null ? void 0 : $e.getGroupTarget) == null ? void 0 : je.call($e, J)) || null, Oe = ((qe = Ie == null ? void 0 : Ie.committedPaint) == null ? void 0 : qe.canvas) || null;
      if (!Oe) {
        v.push(me), g.push(...fe);
        continue;
      }
      const Ce = oe(Oe);
      if (!Ce.touched || !Ce.canvas) {
        v.push(me), g.push(...fe);
        continue;
      }
      k = !0;
      const Ge = ue(Ce.canvas, "paint", m.get(J) || me || {});
      S.push(...Ge);
    }
    for (const me of Sn().filter((J) => String((J == null ? void 0 : J.layerKind) || "paint") === "paint")) {
      if (!ee(U(me))) {
        S.push(me);
        continue;
      }
      const J = sf(me, null);
      if (!J) {
        S.push(me);
        continue;
      }
      const fe = oe(J);
      if (!fe.touched || !fe.canvas) {
        S.push(me);
        continue;
      }
      k = !0;
      const Ie = ue(fe.canvas, "paint", me);
      S.push(...Ie);
    }
    return k ? (_.painting.paint.strokes = g, _.painting.groups = v.sort((me, J) => Number((me == null ? void 0 : me.z_index) || 0) - Number((J == null ? void 0 : J.z_index) || 0)), _.painting.raster_objects = S.sort((me, J) => Number((me == null ? void 0 : me.z_index) || 0) - Number((J == null ? void 0 : J.z_index) || 0)), ko({ preservePanelValues: !1 }), !0) : !1;
  }
  function Mb(i) {
    var g, v, S, k, I;
    if ((((v = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : v.rawPoints) || ((k = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : k.points) || []).length >= 1) {
      Nl(i);
      const M = Tn();
      M && (String(((I = i.stroke) == null ? void 0 : I.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(M) : p.paintEngine.commitActiveStroke(i.stroke, M)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Vf(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Tn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Nb(i) {
    var g, v;
    if ((((v = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : v.points) || []).length >= 3) {
      Nl(i);
      const S = Tn();
      S && p.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = $f(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = Tn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Nl(i) {
    var m, g, v, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = vl(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), kb(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && $u((v = i.stroke) == null ? void 0 : v.actionGroupId), zi(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = vl(h, i.stroke.targetSpace, !0), u && $u((S = i.stroke) == null ? void 0 : S.actionGroupId), zi(i.layerKind).push(i.stroke), !0);
  }
  function zf(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const u = Ve(), h = Ht(u);
      if (!u || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const g = er(i, u, performance.now()), v = g ? Li(g) : null;
      if (v)
        for (const k of bl()) {
          if (!gt(k)) continue;
          const I = Ao(k, v);
          if (I && Number(I.x) >= 0 && Number(I.x) <= 1 && Number(I.y) >= 0 && Number(I.y) <= 1) {
            const M = Yt(k);
            if (M != null && M.visible) return { item: k, geom: M };
          }
        }
      const S = Qs(!1).slice().sort((k, I) => Number((I == null ? void 0 : I.z_index) || 0) - Number((k == null ? void 0 : k.z_index) || 0));
      for (const k of S) {
        if (k.type === "strokeGroup") {
          const F = Ai(xo("paint", k.actionGroupId || k.id || ""));
          if (!F) continue;
          const H = Yt(F);
          if (!(H != null && H.visible)) continue;
          const ie = Array.isArray(H.strokePaths) ? H.strokePaths : [];
          for (const U of ie) {
            const ee = Array.isArray(U == null ? void 0 : U.points) ? U.points : [];
            if (!ee.length) continue;
            if (U.closed && ee.length >= 3 && Dr(i, ee)) return { item: F, geom: H };
            const oe = Math.max(8, Number((U == null ? void 0 : U.lineWidth) || 0) * 0.5 + 6);
            for (let ue = 0; ue < ee.length - 1; ue += 1)
              if (uc(i, ee[ue], ee[ue + 1]) <= oe * oe) return { item: F, geom: H };
            if (ee.length === 1 && Qr(i, ee[0]) <= oe * oe) return { item: F, geom: H };
          }
          continue;
        }
        if (k.type === "rasterObject") {
          const F = Pi(wo(((l = k.item) == null ? void 0 : l.id) || k.id || ""));
          if (!F) continue;
          const H = Yt(F);
          if (af(F, H, i, g)) return { item: F, geom: H };
          continue;
        }
        const I = k.item;
        if (!I || !gt(I) || !v) continue;
        const M = Ao(I, v);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const F = Yt(I);
          if (F != null && F.visible) return { item: I, geom: F };
        }
      }
      return null;
    }
    const s = [
      ...Qs(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? Ai(xo("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? Pi(wo(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? bl().filter((u) => En(u)) : []
    ];
    for (const u of s) {
      if (jt(u)) {
        const m = Yt(u);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const v of g) {
          const S = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!S.length) continue;
          if (v.closed && S.length >= 3 && Dr(i, S)) return { item: u, geom: m };
          const k = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let I = 0; I < S.length - 1; I += 1)
            if (uc(i, S[I], S[I + 1]) <= k * k) return { item: u, geom: m };
          if (S.length === 1 && Qr(i, S[0]) <= k * k) return { item: u, geom: m };
        }
        continue;
      }
      if (rn(u)) {
        const m = Yt(u);
        if (!(m != null && m.visible)) continue;
        if (af(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const h = Yt(u);
      if (h.visible && Dr(i, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function Pl(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (gt(l)) return Ec(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((g) => Qr(g, s) <= 121);
      if (h >= 0) {
        const g = i.corners[h], v = g.x - i.center.x, S = g.y - i.center.y, k = v * S >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const v = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && v.length >= 3 && Dr(s, v)) return { kind: "move", cursor: "default" };
        const S = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let k = 0; k < v.length - 1; k += 1)
          if (uc(s, v[k], v[k + 1]) <= S * S) return { kind: "move", cursor: "default" };
      }
      return Dr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => Qr(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], g = m.x - i.center.x, v = m.y - i.center.y, S = g * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: S };
      }
      return Dr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => Qr(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const u = i.corners.findIndex((h) => Qr(h, s) <= 121);
    if (u >= 0) {
      const h = i.corners[u], m = h.x - i.center.x, g = h.y - i.center.y, v = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: v };
    }
    return Qr(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Dr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function jf(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Pb(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Ab(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => Pb(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Dr({ x: l, y: u }, s.corners);
  }
  function bt(i) {
    if (_b(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? D("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? D("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? D("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? D(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? D("grabbing") : D("default");
      return;
    }
    if (Rf()) {
      D("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        D(aM);
        return;
      }
      if (p.primaryTool !== "cursor") {
        D("default");
        return;
      }
      D("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      D("default");
      return;
    }
    const s = Mt(), l = s ? Yt(s) : null, u = s ? gn(s) : !1, h = u ? { kind: "none", cursor: "default" } : Pl(l, i, s);
    if (!u && h.kind !== "none") {
      D(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && zf(i)) {
      D("default");
      return;
    }
    D(p.mode === "pano" ? "grab" : "default");
  }
  function Xe() {
    var S, k;
    if (!hn) return;
    if (p.mode === "frame") {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Mt(), s = Jn();
    if (!i && s.length === 0 || p.interaction) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = fa(), u = jw({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? rl(s) : Yt(i),
      allLocked: il(s),
      anyLocked: s.some((I) => gn(I)),
      selectedLocked: gn(i),
      activeAspect: Vr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Ut,
      isStickerHidden: Ii,
      canRestoreSelectedToInitial: Tg,
      iconSet: Ne
    });
    if (!u.visible) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (I, M, { requireFitsBelow: F = !0 } = {}) => {
      var ve, $e, je;
      const ie = Number((ve = u.anchor) == null ? void 0 : ve.minX), U = Number(($e = u.anchor) == null ? void 0 : $e.maxX), ee = Number((je = u.anchor) == null ? void 0 : je.maxY);
      if (![ie, U, ee].every(Number.isFinite)) return null;
      const oe = Math.max(14, P.width - I - 14), ue = K((ie + U) * 0.5 - I * 0.5, 14, oe), ne = ee + 18;
      return !Number.isFinite(ue) || !Number.isFinite(ne) || F && ne + M > P.height - 14 ? null : { left: ue, top: ne };
    }, m = Math.max(1, Number(((S = p.menuSize) == null ? void 0 : S.w) || 220)), g = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.h) || 40)), v = h(m, g, { requireFitsBelow: !1 });
    if (!v) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    A.selectionMenu = {
      visible: !0,
      left: v.left,
      top: v.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!hn || A.selectionMenu.visible !== !0) return;
      const I = hn.getBoundingClientRect(), M = Math.round(Number((I == null ? void 0 : I.width) || 0)) || 220, F = Math.round(Number((I == null ? void 0 : I.height) || 0)) || 40;
      p.menuSize = { w: M, h: F, measured: !0 };
      const H = h(M, F);
      if (!H) {
        A.selectionMenu.visible = !1;
        return;
      }
      A.selectionMenu.left = H.left, A.selectionMenu.top = H.top;
    });
  }
  function li() {
    he.timer && (clearTimeout(he.timer), he.timer = 0), he.target = null, A.tooltip.visible = !1;
  }
  function Cb(i) {
    if (!Yn || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    A.tooltip.text = s, A.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var U, ee;
      if (he.target !== l || !Yn || !(l != null && l.isConnected)) return;
      const u = ae.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, g = 12, v = Math.round(Number(((U = Yn.getBoundingClientRect()) == null ? void 0 : U.width) || 0)) || 100, S = Math.round(Number(((ee = Yn.getBoundingClientRect()) == null ? void 0 : ee.height) || 0)) || 24, k = !!l.closest(".pano-floating-left"), I = !!l.closest(".pano-frame-rail"), M = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", H = h.left - u.left + h.width * 0.5 - v * 0.5, ie = h.top - u.top - S - g;
      if (k)
        F = "tool-rail", H = h.right - u.left + 10, ie = h.top - u.top + h.height * 0.5 - S * 0.5, H = K(H, m, Math.max(m, u.width - v - m)), ie = K(ie, m, Math.max(m, u.height - S - m));
      else if (I)
        F = "frame-rail", H = h.left - u.left - v - 10, ie = h.top - u.top + h.height * 0.5 - S * 0.5, H = K(H, m, Math.max(m, u.width - v - m)), ie = K(ie, m, Math.max(m, u.height - S - m));
      else if (M) {
        F = "footer";
        const oe = l.closest(".pano-paint-footer"), ue = oe ? oe.getBoundingClientRect() : h;
        H = ue.left - u.left + ue.width * 0.5 - v * 0.5, ie = ue.bottom - u.top + 5, H = K(H, m, Math.max(m, u.width - v - m)), ie = Math.max(m, ie);
      }
      H = K(H, m, Math.max(m, u.width - v - m)), ie = Math.max(m, ie), A.tooltip.left = H, A.tooltip.top = ie, A.tooltip.variant = F, A.tooltip.visible = !0;
    });
  }
  const en = yu({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Rt(Number(i.yaw || 0)), p.viewPitch = K(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = K(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = P.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || P.clientWidth || 0)),
        h: Math.max(1, Number(i.height || P.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Xr,
    onInteraction: () => {
      ye.backgroundDirty = !0, ye.dirty = !0;
    }
  });
  function Ib(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += rm(s, i.lastAngle), i.lastAngle = s;
    const u = im(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = u, h.displayValue = Ui(u), h.fillPct = (u + 180) / 360 * 100), Er(), Al(i), pe({ localOnly: !0 });
  }
  function Ob(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = Em(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = Ui(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), Er(), Al(i), pe({ localOnly: !0 });
  }
  const Hf = (i, s) => {
    const l = si(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Al(i) {
    var g, v;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    he.timer && (clearTimeout(he.timer), he.timer = 0), he.target = null;
    const s = Ht(i.shot), l = (g = P.getBoundingClientRect) == null ? void 0 : g.call(P), u = (v = ae.getBoundingClientRect) == null ? void 0 : v.call(ae);
    if (!s || !l || !u || P.width <= 0 || P.height <= 0) return;
    const h = l.width / P.width, m = l.height / P.height;
    A.tooltip.text = `${Ui(i.shot.roll_deg)}°`, A.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * h, A.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, A.tooltip.variant = "roll", A.tooltip.visible = !0;
  }
  it == null || it.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = Ve();
    if (!s || s.locked === !0) return;
    const l = Ht(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Hf(i, u);
    p.interaction = {
      kind: "roll_frame",
      shot: s,
      center: u,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = it.setPointerCapture) == null || m.call(it, i.pointerId), i.preventDefault(), Er(), Al(p.interaction), pe({ localOnly: !0 });
  }), it == null || it.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || Ib(
      p.interaction,
      Hf(i, p.interaction.center),
      i
    );
  });
  const Eb = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (nt(), ot(), He()), p.interaction = null, li(), Ir(), Er(), pe());
  };
  it == null || it.addEventListener("pointerup", Eb), it == null || it.addEventListener("pointercancel", () => Co()), it == null || it.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && Co();
  }), it == null || it.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? Ve() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, nt(), ot(), He(), Er(), pe(), i.preventDefault());
  }), P.onpointerdown = (i) => {
    const s = si(i);
    if (wa(s, !0), p.viewTween = null, en.state.inertia.active = !1, en.state.inertia.vx = 0, en.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const v = Ve();
        if (!v || r || v.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: v,
          last: s,
          start: {
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const v = p.mode === "unwrap" ? s : xa(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, en.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      bt(s), P.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const v = Ve(), S = Ht(v);
      if (!v || v.locked === !0 || !S) return;
      const k = Om({
        frame: S,
        point: s,
        startRollDeg: Number(v.roll_deg ?? v.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!k) return;
      p.interaction = {
        kind: "roll_frame",
        shot: v,
        center: k.center,
        lastAngle: k.lastAngle,
        accumulatedRad: k.accumulatedRad,
        rollGesture: k,
        start: { roll_deg: Number(v.roll_deg ?? v.rot_deg ?? 0) },
        changed: !1,
        altStarted: k.source === "alt",
        source: k.source
      }, P.setPointerCapture(i.pointerId), i.preventDefault(), Er(), pe({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const v = Ve();
      if (!v || r || v.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: v,
        last: s,
        start: { yaw_deg: Number(v.yaw_deg || 0), pitch_deg: Number(v.pitch_deg || 0) },
        changed: !1
      }, bt(s), P.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const v = xa(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, en.startDrag(v.x, v.y, i.pointerId, performance.now()), bt(s), P.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (E && !E.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Df() || Ml())) {
      const v = p.primaryTool === "mask" ? "mask" : "paint", S = p.primaryTool === "mask" ? p.maskTool : p.paintTool, k = p.mode === "frame" && Ml() ? Ve() : null, I = { kind: "ERP_GLOBAL" }, M = k ? er(s, k, performance.now()) : Qn(s, performance.now());
      if (!M) {
        bt(s);
        return;
      }
      p.interaction = {
        kind: S === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: Yi("live"),
        stroke: S === "lasso_fill" ? $f(v, S, [M], I) : Vf(v, S, [M], I)
      }, Fi();
      const F = Tn();
      if (F)
        if (p.paintEngine.beginStroke(p.interaction.stroke, F), p.interaction.kind === "paint_stroke") {
          const H = p.paintEngine.ensureTarget(F), ie = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), U = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          p.paintEngine.appendStrokePoint(H, ie, U, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, F);
      bt(s), P.setPointerCapture(i.pointerId), pe();
      return;
    }
    const l = Jn(), u = Mt(), h = l.length > 1 ? rl(l) : u ? Yt(u) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, bt(s), P.setPointerCapture(i.pointerId), pe({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((S) => gn(S)) ? { kind: "none" } : Pl(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((S) => S),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((S) => gt(S)).map((S) => ({
            id: String(S.id || ""),
            yaw_deg: Number(S.yaw_deg || 0),
            pitch_deg: Number(S.pitch_deg || 0),
            center: (() => {
              var I, M;
              const k = Yt(S);
              return k != null && k.visible ? { x: Number(((I = k.center) == null ? void 0 : I.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((S) => jt(S)).map((S) => ({
            id: String(S.actionGroupId || S.id || ""),
            layerKind: String(S.layerKind || "paint"),
            snapshot: an(qn(S.actionGroupId, S.layerKind)),
            frameSnapshot: an(Yr(S.actionGroupId, S.layerKind)),
            center: (() => {
              var I, M;
              const k = Yt(S);
              return k != null && k.visible ? { x: Number(((I = k.center) == null ? void 0 : I.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: nl(S.actionGroupId, S.layerKind)
          })),
          rasterSnapshots: l.filter((S) => rn(S)).map((S) => ({
            id: Wt(S.rasterObjectId || S.id || ""),
            snapshot: an(Sn().find((k) => String((k == null ? void 0 : k.id) || "") === Wt(S.rasterObjectId || S.id || ""))),
            center: (() => {
              var I, M;
              const k = Yt(S);
              return k != null && k.visible ? { x: Number(((I = k.center) == null ? void 0 : I.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: ff(S)
          }))
        }, bt(s), P.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const v = gn(u) ? { kind: "none" } : Pl(h, s, u);
      if (v.kind === "scale") {
        p.interaction = jt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: an(qn(u.actionGroupId, u.layerKind)),
          frameSnapshot: an(Yr(u.actionGroupId, u.layerKind)),
          cursor: v.cursor
        } : rn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: an(Sn().find((S) => String((S == null ? void 0 : S.id) || "") === Wt(u.rasterObjectId || u.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor
        }, bt(s), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        p.interaction = {
          kind: v.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, bt(s), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        p.interaction = jt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: an(qn(u.actionGroupId, u.layerKind)),
          frameSnapshot: an(Yr(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(u.rot_deg || u.roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, bt(s), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (jt(u)) {
          const S = p.mode === "frame" ? (() => {
            const k = Ve();
            return k ? er(s, k, performance.now()) : null;
          })() : Qn(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: S,
            snapshot: an(qn(u.actionGroupId, u.layerKind)),
            frameSnapshot: an(Yr(u.actionGroupId, u.layerKind))
          }, bt(s), P.setPointerCapture(i.pointerId);
          return;
        }
        if (rn(u)) {
          const S = p.mode === "frame" ? (() => {
            const k = Ve();
            return k ? er(s, k, performance.now()) : null;
          })() : Qn(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: S,
            snapshot: an(Sn().find((k) => String((k == null ? void 0 : k.id) || "") === Wt(u.rasterObjectId || u.id || "")))
          }, bt(s), P.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, bt(s), P.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = zf(s);
    if (m) {
      const v = p.selectedId !== m.item.id;
      if (v && p.selectedId && (nt(), Mn()), Ci(m.item), t === "cutout" && v && (p.cutoutAspectOpen = !1), v && He(), Xe(), pe(), gn(m.item)) {
        bt(s);
        return;
      }
      p.interaction = {
        kind: jt(m.item) ? "move_stroke_group" : rn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: jt(m.item) || rn(m.item) ? p.mode === "frame" ? (() => {
          const S = Ve();
          return S ? er(s, S, performance.now()) : null;
        })() : Qn(s, performance.now()) : null,
        snapshot: jt(m.item) ? an(qn(m.item.actionGroupId, m.item.layerKind)) : rn(m.item) ? an(Sn().find((S) => String((S == null ? void 0 : S.id) || "") === Wt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: jt(m.item) ? an(Yr(m.item.actionGroupId, m.item.layerKind)) : null
      }, bt(s), P.setPointerCapture(i.pointerId);
      return;
    }
    const g = !!p.selectedId;
    if (g && (nt(), Mn()), ko(), g && He(), Xe(), pe(), p.mode === "pano") {
      const v = xa(i);
      p.interaction = { kind: "view", last: v, lastTs: performance.now() }, en.startDrag(v.x, v.y, i.pointerId, performance.now()), bt(s), P.setPointerCapture(i.pointerId);
    }
  }, P.onpointermove = (i) => {
    var u, h, m, g, v, S, k, I, M, F, H, ie, U, ee, oe, ue, ne, ve, $e, je, qe, me;
    const s = si(i);
    if (wa(s, !0), !p.interaction) {
      bt(s);
      return;
    }
    bt(s);
    const l = p.interaction;
    if (l.kind === "paint_stroke") {
      const J = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let fe = !1;
      J.forEach((Ie) => {
        const Oe = si(Ie);
        if (p.mode === "frame") {
          const Ce = Ve(), Ge = Ce ? Ht(Ce) : null;
          if (Ge) {
            const rt = (Oe.x - Ge.x) / Math.max(1, Ge.w), Ye = (Oe.y - Ge.y) / Math.max(1, Ge.h);
            if (!(rt >= 0 && rt <= 1 && Ye >= 0 && Ye <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Mb(l));
          }
        }
        wb(l, Oe, performance.now()) && (fe = !0);
      }), fe && pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const J = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let fe = !1;
      if (J.forEach((Ie) => {
        const Oe = si(Ie);
        if (p.mode === "frame") {
          const Ce = Ve(), Ge = Ce ? Ht(Ce) : null;
          if (Ge) {
            const rt = (Oe.x - Ge.x) / Math.max(1, Ge.w), Ye = (Oe.y - Ge.y) / Math.max(1, Ge.h);
            if (!(rt >= 0 && rt <= 1 && Ye >= 0 && Ye <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, Nb(l));
          }
        }
        Sb(l, Oe, performance.now()) && (fe = !0);
      }), fe) {
        const Ie = Tn();
        Ie && p.paintEngine.updateActiveStroke(l.stroke, Ie), pe({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const J = performance.now(), fe = p.mode === "unwrap" ? s : xa(i);
      en.moveDrag(fe.x, fe.y, p.mode === "unwrap" ? "unwrap" : "pano", J), l.lastTs = J, l.last = fe, pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const J = kl(l.shot);
      if (!J || !l.shot) return;
      const fe = s.x - l.last.x, Ie = s.y - l.last.y, Oe = Tm(l.shot, {
        dx: fe,
        dy: Ie,
        focalPx: J.focalPx,
        invertX: ((u = _.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Oe.yaw_deg, l.shot.pitch_deg = Oe.pitch_deg, l.changed = l.changed || Math.abs(fe) > 0 || Math.abs(Ie) > 0, l.last = s, pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      Ob(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const J = s.x - l.offset.x, fe = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const Ie = Ve(), Oe = Ht(Ie);
        if (!Ie || !Oe) return;
        const Ce = {
          x: K((J - Oe.x) / Math.max(1, Oe.w), 0, 1),
          y: K((fe - Oe.y) / Math.max(1, Oe.h), 0, 1)
        }, Ge = yl(Ie, Ce);
        if (!Ge) return;
        const rt = Ha(Ge);
        l.item.yaw_deg = rt.yaw, l.item.pitch_deg = rt.pitch;
      } else if (p.mode === "unwrap") {
        const Ie = Xr(), Oe = K((J - Ie.x) / Math.max(Ie.w, 1), 0, 1), Ce = K((fe - Ie.y) / Math.max(Ie.h, 1), 0, 1);
        l.item.yaw_deg = Rt(Oe * 360 - 180), l.item.pitch_deg = K(90 - Ce * 180, -90, 90);
      } else {
        const Ie = fl(J, fe), Oe = Ha(Ie);
        l.item.yaw_deg = Oe.yaw, l.item.pitch_deg = Oe.pitch;
      }
      gt(l.item) && Qt(), pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const J = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? er(s, Oe, performance.now()) : null;
      })() : Qn(s, performance.now());
      if (!J || !l.startUv) return;
      const fe = jn(Number(J.u || 0), Number(l.startUv.u || 0)), Ie = Number(J.v || 0) - Number(l.startUv.v || 0);
      ju((m = l.item) == null ? void 0 : m.actionGroupId, fe, Ie, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (Zn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const J = p.mode === "frame" ? (() => {
        const Oe = Ve();
        return Oe ? er(s, Oe, performance.now()) : null;
      })() : Qn(s, performance.now());
      if (!J || !l.startUv) return;
      const fe = jn(Number(J.u || 0), Number(l.startUv.u || 0)), Ie = Number(J.v || 0) - Number(l.startUv.v || 0);
      Gu(((v = l.item) == null ? void 0 : v.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", fe, Ie, l.snapshot) && (Vi(), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const fe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      wg(((k = l.item) == null ? void 0 : k.rasterObjectId) || ((I = l.item) == null ? void 0 : I.id) || "", fe, l.snapshot) && (Vi(), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const J = s.x - Number(((M = l.offset) == null ? void 0 : M.x) || 0), fe = s.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
      let Ie = !1, Oe = !1, Ce = !1;
      const Ge = J - Number(((H = l.startCenter) == null ? void 0 : H.x) || J), rt = fe - Number(((ie = l.startCenter) == null ? void 0 : ie.y) || fe);
      for (const Ye of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const yt = (t === "cutout" ? tl() : Ar()).find((wt) => String((wt == null ? void 0 : wt.id) || "") === String(Ye.id || ""));
        if (!yt || !gt(yt)) continue;
        const tn = {
          x: Number(((U = Ye.center) == null ? void 0 : U.x) || 0) + Ge,
          y: Number(((ee = Ye.center) == null ? void 0 : ee.y) || 0) + rt
        };
        if (p.mode === "frame" && t === "cutout") {
          const wt = Ve(), Lt = Ht(wt);
          if (!wt || !Lt) continue;
          const ci = {
            x: K((tn.x - Lt.x) / Math.max(1, Lt.w), 0, 1),
            y: K((tn.y - Lt.y) / Math.max(1, Lt.h), 0, 1)
          }, ad = yl(wt, ci);
          if (!ad) continue;
          const sd = Ha(ad);
          yt.yaw_deg = sd.yaw, yt.pitch_deg = sd.pitch;
        } else if (p.mode === "unwrap") {
          const wt = Xr(), Lt = K((tn.x - wt.x) / Math.max(wt.w, 1), 0, 1), ci = K((tn.y - wt.y) / Math.max(wt.h, 1), 0, 1);
          yt.yaw_deg = Rt(Lt * 360 - 180), yt.pitch_deg = K(90 - ci * 180, -90, 90);
        } else {
          const wt = fl(tn.x, tn.y), Lt = Ha(wt);
          yt.yaw_deg = Lt.yaw, yt.pitch_deg = Lt.pitch;
        }
        Ie = !0;
      }
      for (const Ye of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const yt = {
          x: Number(((oe = Ye.center) == null ? void 0 : oe.x) || 0) + Ge,
          y: Number(((ue = Ye.center) == null ? void 0 : ue.y) || 0) + rt
        }, tn = p.mode === "frame" ? (() => {
          const Lt = Ve();
          return Lt ? er(yt, Lt, performance.now()) : null;
        })() : Qn(yt, performance.now()), wt = Ye.centerUv || null;
        if (tn && wt) {
          const Lt = jn(Number(tn.u || 0), Number(wt.u || 0)), ci = Number(tn.v || 0) - Number(wt.v || 0);
          ju(Ye.id, Lt, ci, Ye.snapshot, Ye.layerKind, Ye.frameSnapshot) && (Ie = !0, Oe = !0);
        }
      }
      for (const Ye of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const yt = {
          x: Number(((ne = Ye.center) == null ? void 0 : ne.x) || 0) + Ge,
          y: Number(((ve = Ye.center) == null ? void 0 : ve.y) || 0) + rt
        }, tn = p.mode === "frame" ? (() => {
          const Lt = Ve();
          return Lt ? er(yt, Lt, performance.now()) : null;
        })() : Qn(yt, performance.now()), wt = Ye.centerUv || null;
        if (tn && wt) {
          const Lt = jn(Number(tn.u || 0), Number(wt.u || 0)), ci = Number(tn.v || 0) - Number(wt.v || 0);
          Gu(Ye.id, Lt, ci, Ye.snapshot) && (Ie = !0, Ce = !0);
        }
      }
      Ie && (Oe ? Zn({ rebuildPaintEngine: !1 }) : Ce ? Vi() : Qt(), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const fe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Hu(($e = l.item) == null ? void 0 : $e.actionGroupId, fe, 0, l.snapshot, (je = l.item) == null ? void 0 : je.layerKind, l.frameSnapshot) && (Zn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let J = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * gi;
      i.shiftKey && (J = Math.round(J / 45) * 45), Hu((qe = l.item) == null ? void 0 : qe.actionGroupId, 1, J, l.snapshot, (me = l.item) == null ? void 0 : me.layerKind, l.frameSnapshot) && (Zn({ rebuildPaintEngine: !1 }), pe({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const fe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = K(l.startHFOV * fe, 1, 179), l.item.vFOV_deg = K(l.startVFOV * fe, 1, 179), l.item.aspect_id = mi(l.item), gt(l.item) && Qt(), pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const fe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.hFOV_deg = K(l.startHFOV * fe, 1, 179), l.item.aspect_id = mi(l.item), gt(l.item) && Qt(), pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const fe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      l.item.vFOV_deg = K(l.startVFOV * fe, 1, 179), l.item.aspect_id = mi(l.item), gt(l.item) && Qt(), pe({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let fe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * gi, Ie = l.startRot - fe;
      i.shiftKey && (Ie = Math.round(Ie / 45) * 45);
      const Oe = gt(l.item) ? "rot_deg" : "roll_deg";
      l.item[Oe] = Ie, gt(l.item) && Qt(), pe({ localOnly: !0 });
    }
  }, P.onpointerup = () => {
    var s, l, u, h, m, g, v, S;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Fi();
        const k = Nl(p.interaction), I = !!p.interaction._hasCommittedSegments;
        if (k || I) {
          Zn();
          const M = String(((u = p.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (M) {
            const H = nn().find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === M);
            H && (H.frame = null);
          }
          const F = Tn();
          F && (k ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(F), _f()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, F) : p.paintEngine.cancelActiveStroke(F)), nt(), Mn(), He(), Xe(), e.setDirtyCanvas(!0, !0), pe();
        } else {
          const M = Tn();
          M && p.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const k = jf(p.interaction.start, p.interaction.current), M = [
          ...t === "cutout" ? bl().filter((F) => !En(F)) : [...Ar()],
          ...yg(),
          ...vg()
        ].filter((F) => Ab(k, Yt(F)));
        Mg(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && M.length && (p.cutoutAspectOpen = !1), He(), Xe(), pe();
      } else if (((v = p.interaction) == null ? void 0 : v.kind) === "pan_frame" || ((S = p.interaction) == null ? void 0 : S.kind) === "roll_frame")
        p.interaction.changed && (nt(), ot(), He());
      else if (p.interaction && p.interaction.kind !== "view") {
        let k = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (k = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (k = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (k = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (k = !0), k && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? Zn({ rebuildPaintEngine: !0 }) : Vi()), nt(), Mn(), e.setDirtyCanvas(!0, !0), $i(), Xe(), pe();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && li(), Fi(), i && i.kind === "view" && en.endDrag(performance.now()), Ir(), Xe(), bt(p.pointerPos), pe();
    }
  }, P.onpointercancel = () => {
    var i, s, l;
    if (!Co()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && en.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Fi();
        const u = Tn();
        u && p.paintEngine.cancelActiveStroke(u);
      }
      p.interaction = null, Fi(), Ir(), bt(p.pointerPos), pe({ localOnly: !0 });
    }
  }, P.onlostpointercapture = () => {
    Co();
  }, P.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, P.onmousemove = (i) => {
    const s = si(i), l = wa(s, !0);
    p.interaction || (bt(s), l && p.mode === "frame" && p.primaryTool === "cursor" && pe({ localOnly: !0 }));
  }, P.onmouseleave = () => {
    wa(p.pointerPos, !1), bt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && pe({ localOnly: !0 });
  }, P.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = si(i), l = bu(i);
      l && gb(s, l) && pe({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (en.applyWheelEvent(i) && pe({ localOnly: !0 }), i.preventDefault());
  }, P.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), On(!0));
  }, P.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ae.depth = 0, On(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((h) => _r(h));
    l && Af(l);
  };
  const Gf = (i) => {
    t !== "stickers" && t !== "cutout" || r || ai(i) && (Ae.depth += 1, On(!0), i.preventDefault());
  }, Kf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ae.active && ai(i) && On(!0), Ae.active && i.preventDefault());
  }, Bf = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ae.active) return;
    Ae.depth = Math.max(0, Ae.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ae.depth === 0 || s) && On(!1);
  }, Wf = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ae.depth = 0, On(!1), ai(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Gf, !0), window.addEventListener("dragover", Kf, !0), window.addEventListener("dragleave", Bf, !0), window.addEventListener("drop", Wf, !0);
  function Cl() {
    const { canUndo: i, canRedo: s } = Pf();
    Bi(A.toolButtons, "value", "undo", { disabled: !i }), Bi(A.toolButtons, "value", "redo", { disabled: !s });
  }
  const Uf = (i, s, l = !1) => {
    var S;
    const u = t === "cutout" && p.mode === "frame" ? Ve() : null, h = u || Mt(), m = u ? "shot" : fa();
    if (!h || m === "stroke" || gn(h)) return;
    const g = (((S = A.sidePanel) == null ? void 0 : S.params) || []).find((k) => k.key === i);
    if (!g || g.enabled === !1) return;
    let v = Number(s);
    Number.isNaN(v) && (v = 0), v = K(v, Number(g.min), Number(g.max)), i === "yaw_deg" && (v = Rt(v)), h[i] = v, t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = mi(h)), He(), pe(), l && nt();
  };
  _e == null || _e.addEventListener("click", async (i) => {
    var u, h, m, g, v, S, k;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const I = Bn(s.getAttribute("data-coverage"));
      if (I === Bn(_.coverage)) return;
      _.coverage = I, p.coverage = I, d && (d.value = String(I)), a ? ye.backgroundDirty = !0 : (Mn(), pb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), He(), Xe(), pe();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (u = A.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      A.sidePanel.selectionPicker.open = !A.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      A.sidePanel.selectionPicker.open = !1;
      const I = String(s.getAttribute("data-selection-id") || "");
      let M = null;
      I && (t === "stickers" ? M = Ar().find((F) => String((F == null ? void 0 : F.id) || "") === I) || null : M = ((m = Bu().find((F) => {
        var H;
        return String(((H = F == null ? void 0 : F.item) == null ? void 0 : H.id) || "") === I;
      })) == null ? void 0 : m.item) || null), Ci(M || null), M && !jt(M) && qs(
        Rt(Number(M.yaw_deg || 0)),
        K(Number(M.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), He(), Xe(), pe();
      return;
    }
    if (l === "copy-state-inline") {
      const I = Mt(), M = fa();
      if (!I || M === "stroke" || Jn().length > 1) return;
      const F = JSON.stringify(t === "cutout" && M !== "image" ? Qu(I) : Vg(I));
      try {
        await navigator.clipboard.writeText(F), (g = A.sidePanel) != null && g.copyStateButton && (A.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var H;
          (H = A.sidePanel) != null && H.copyStateButton && (A.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const I = String(s.getAttribute("data-visibility") || "");
      I === "panorama" ? p.showPanorama = !p.showPanorama : I === "objects" ? p.showObjects = !p.showObjects : I === "mask" && (p.showMask = !p.showMask), He(), pe();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", wl(), He(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), pe();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", wl(), He(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), pe();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, wl(), He(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), pe();
      return;
    }
    if (l === "close-preview") {
      Hi();
      return;
    }
    if (l === "cancel-close") {
      Hi();
      return;
    }
    l === "save-close" && (db(), Hi());
  }), _e == null || _e.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Uf(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), _e == null || _e.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Uf(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Il = () => tf();
  Il(), Q.addEventListener("click", (i) => {
    var v, S, k, I;
    if ((S = (v = i.target) == null ? void 0 : v.matches) != null && S.call(v, "[data-confirm-overlay]")) {
      const M = (k = A.confirmDialog) == null ? void 0 : k.resolve;
      A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const M = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (M !== "frame" && (ye.frameSafeRect = null), He(), Xe()), Sl(), Ir(), pe();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const M = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = M, (M === "paint" || M === "mask") && ko({ preservePanelValues: !0 }), kn(), He(), Xe(), pe();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const M = String(l.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && l.disabled) return;
        M === "undo" ? _l(-1) : M === "redo" ? _l(1) : M === "clear" ? ab() : M === "add" || M === "add-image" ? Q0() : M === "add-or-look" && rb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const M = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = M, ko({ preservePanelValues: !0 }), Nn[M] && (p.activeBrushPresetId = M), kn(), He(), Xe(), pe();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), ko({ preservePanelValues: !0 }), kn(), He(), Xe(), pe();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const M = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        sb(M);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const M = as.find((F) => F.id === l.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        p.paintColor = Fn(M.color), we(!0), kn();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), E && !E.hidden ? we(!0) : ge(), kn();
        return;
      }
    }
    const u = String(((I = l == null ? void 0 : l.getAttribute) == null ? void 0 : I.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      if (Ei(), G.paused) {
        Y.mode = "playback", Y.pendingPlaybackResume = !1, Y.resumeAfterScrub = !1;
        const M = Number(A.videoTransport.duration || G.duration || 0), F = Number(G.currentTime || Y.editorTime || 0), H = M > 0 && F >= M - 1e-3 ? 0 : Number(Y.editorTime || F || 0), ie = Math.max(Dt(), 0.04);
        Y.editorTime = H, Math.abs(F - H) > ie ? (Y.seeking = !1, Y.pendingPlaybackResume = !0, sl(H)) : G.play().catch(() => {
        });
      } else
        G.pause(), Y.mode = "scrub", Y.resumeAfterScrub = !1, Y.pendingPlaybackResume = !1, Y.editorTime = Number(G.currentTime || 0), Oi();
      lr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Cr(),
        currentTime: Y.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: Y.mode
      }), pe({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (u === "video-audio-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement) || !A.videoTransport.hasAudio) return;
      const M = !G.muted;
      G.muted = M, !M && Number(G.volume || 0) <= 0 && (G.volume = Math.max(0.01, Number(A.videoTransport.volume || 1))), lr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Cr(),
        currentTime: Y.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: Y.mode,
        hasAudio: A.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? A.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(G instanceof HTMLVideoElement)) return;
      const M = !A.videoTransport.loop;
      A.videoTransport.loop = M, G.loop = M, lr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Cr(),
        currentTime: Y.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: Y.mode,
        hasAudio: A.videoTransport.hasAudio,
        loop: M,
        muted: G.muted,
        volume: Number(G.volume ?? A.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        A.frameRail.aspectOpen = !A.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const M = p.mode === "frame" ? Ve() : null;
        if (!M || M.locked === !0) return;
        Of(M, String(l.getAttribute("data-aspect") || "1:1")), A.frameRail.aspectOpen = !1, $i(), nt(), ot(), Ir(), pe();
        return;
      }
      if (u === "frame-aspect-custom") {
        const M = p.mode === "frame" ? Ve() : null, F = l.getAttribute("data-custom-width"), H = l.getAttribute("data-custom-height");
        if (!M || !cb(M, F, H)) return;
        A.frameRail.aspectOpen = !1, $i(), nt(), ot(), Ir(), pe();
        return;
      }
      if (u === "frame-rotate-90") {
        const M = p.mode === "frame" ? Ve() : null;
        if (!M || M.locked === !0) return;
        Ef(M), A.frameRail.aspectOpen = !1, $i(), nt(), ot(), Ir(), pe();
        return;
      }
      if (u === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Xe(), pe();
        return;
      }
      if (u === "aspect-set") {
        const M = Mt();
        if (!M) return;
        const F = String(l.getAttribute("data-aspect") || "1:1");
        Of(M, F), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, $i(), nt(), ot(), Xe(), pe();
        return;
      }
      if (u === "rotate-90") {
        const M = Mt();
        if (!M) return;
        Ef(M), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, $i(), nt(), ot(), Xe(), pe();
        return;
      }
      if (u === "bring-front") {
        ub();
        return;
      }
      if (u === "send-back") {
        fb();
        return;
      }
      if (u === "duplicate") {
        lb();
        return;
      }
      if (u === "replace-image") {
        tb();
        return;
      }
      if (u === "toggle-lock") {
        kg();
        return;
      }
      if (u === "back-initial") {
        Og();
        return;
      }
      if (u === "toggle-visible") {
        Ig();
        return;
      }
      if (u === "delete") {
        If();
        return;
      }
    }
    if (u === "reset-view") {
      if (p.mode === "frame") return;
      qs(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, CM(e == null ? void 0 : e.id, p.showGrid), Il(), pe();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Db();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const M = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = M, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = M ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Zf(), pe();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), g = p.customPaintHistory[m];
    g && (p.customPaintColor = Fn(g), p.paintColor = Fn(g), kn());
  }), Q.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(G instanceof HTMLVideoElement)) return;
      Ei();
      const m = K(Number(s.value || 0), 0, Number(A.videoTransport.duration || 0));
      Y.mode = "scrub", !Y.seeking && !G.paused && !G.ended && (Y.resumeAfterScrub = !0, G.pause()), Y.editorTime = m, zn(m), lr({
        ready: !!G.getAttribute("src"),
        playing: !1,
        visible: Cr(),
        currentTime: m,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: "scrub"
      }), Number(Be.__panoFrameIdx || 0) > 0 && (ye.backgroundDirty = !0, ye.dirty = !0, pe({ cause: "frame_view", localOnly: !0 })), sl(m);
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(G instanceof HTMLVideoElement)) return;
      const m = K(Number(l.value || 0), 0, 1);
      G.volume = m, G.muted = m <= 1e-4, lr({
        ready: !!G.getAttribute("src"),
        playing: !G.paused && !G.ended,
        visible: Cr(),
        currentTime: Y.editorTime,
        duration: A.videoTransport.duration,
        frameCount: A.videoTransport.frameCount,
        fps: A.videoTransport.fps,
        mode: Y.mode,
        hasAudio: A.videoTransport.hasAudio,
        muted: G.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), g = Jr(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[g] = m, kn(), xb();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: K(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Fn(m), p.paintColor = Fn(m), kn();
    }
  }), Q.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(G instanceof HTMLVideoElement)) return;
      Y.pendingPlaybackResume = !!Y.resumeAfterScrub, Y.resumeAfterScrub = !1, Y.pendingPlaybackResume || (Y.mode = "scrub"), Y.seeking || (Y.pendingPlaybackResume ? (Y.pendingPlaybackResume = !1, Y.mode = "playback", G.play().catch(() => {
      })) : (Oi(), pe({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Sa();
  }), Q.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Sa();
  }), Q.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Sa();
  }), Q.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Sa();
  }), Q.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !Q.contains(s) || he.target !== s && (he.target = s, he.timer && clearTimeout(he.timer), he.timer = window.setTimeout(() => {
      he.target === s && Cb(s);
    }, 220));
  }), Q.addEventListener("pointerout", (i) => {
    var u, h;
    const s = i.target.closest("[data-tip]");
    !s || he.target !== s || (i.relatedTarget instanceof Element ? (h = (u = i.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === s || li();
  }), Q.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || li();
  });
  const Tb = (i, s) => {
    var v;
    if (!z) return;
    const l = z.getBoundingClientRect(), u = K((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - K((s - l.top) / Math.max(1, l.height), 0, 1), m = dc(p.customPaintColor), g = { ...fc(m.h, u, h), a: Number(((v = p.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    p.customPaintColor = Fn(g), p.paintColor = Fn(g), kn();
  }, Fb = (i) => {
    var m;
    if (!se) return;
    const s = se.getBoundingClientRect(), l = K((i - s.left) / Math.max(1, s.width), 0, 1), u = dc(p.customPaintColor), h = { ...fc(l, u.s, u.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Fn(h), p.paintColor = Fn(h), kn();
  }, Yf = (i, s) => {
    const l = i.pointerId;
    s(i);
    const u = (m) => {
      m.pointerId === l && s(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  z && (z.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Yf(i, (s) => Tb(s.clientX, s.clientY));
  }), se && (se.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Yf(i, (s) => Fb(s.clientX));
  }), Q.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (h = A.confirmDialog) == null ? void 0 : h.resolve;
    A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const Xf = () => {
    const i = !!p.fullscreen;
    Bi(A.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ne.fullscreen_close : Ne.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ka = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, Q.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Il(), Xf(), In(), pe());
  }, qf = () => document.fullscreenElement === j, Db = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        ka(!p.fullscreen);
        return;
      }
      qf() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = j.requestFullscreen) == null ? void 0 : i.call(j));
    } catch {
      ka(!p.fullscreen);
    }
  }, Jf = () => {
    document.fullscreenEnabled && ka(qf());
  };
  document.addEventListener("fullscreenchange", Jf), Xf();
  const Zf = () => {
    const i = !!p.outputPreviewExpanded;
    A.outputPreviewToggle.icon = i ? Ne.fullscreen_close : Ne.fullscreen, A.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", A.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Zf();
  const Ol = e.onExecuted, El = e.onConnectionsChange;
  let Tl = null, Fl = null, Qf = null, ed = () => {
  };
  !r && t === "stickers" && (Qf = (i = "sync") => {
    ef(i);
  }, ed = Wm(e, Qf), Tl = function(...s) {
    typeof Ol == "function" && Ol.apply(this, s), mM(Te, $a), jo(this, "executed");
  }, e.onExecuted = Tl, Fl = function(...s) {
    typeof El == "function" && El.apply(this, s), jo(this, "connections");
  }, e.onConnectionsChange = Fl), r || Kh.set(String(e.id ?? "0"), () => lf());
  let ji = null;
  const Hi = async () => ji || (ji = (async () => {
    var i, s, l, u, h, m, g, v;
    return Kh.delete(String(e.id ?? "0")), bb(), r || Mn(), document.fullscreenElement === j && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Jf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Ff && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (v = (g = (m = or) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || v.call(g, !0, !0), li(), Z0(), G instanceof HTMLVideoElement && G.pause(), ft.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Et.dispose(), On(!1), window.removeEventListener("keydown", td, !0), window.removeEventListener("keydown", nd, !0), window.removeEventListener("keydown", Ma, !0), window.removeEventListener("keyup", Ma, !0), window.removeEventListener("blur", rd), window.removeEventListener("keydown", id, !0), window.removeEventListener("dragenter", Gf, !0), window.removeEventListener("dragover", Kf, !0), window.removeEventListener("dragleave", Bf, !0), window.removeEventListener("drop", Wf, !0), !r && t === "stickers" && (e.onExecuted === Tl && (e.onExecuted = Ol), e.onConnectionsChange === Fl && (e.onConnectionsChange = El), ed()), R.unmount(), X.remove(), hb(), ji = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), ji = null, !1)), ji), td = (i) => {
    var s, l, u, h, m;
    if (i.key === "Escape") {
      if (Co()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === j) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ka(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Hi();
    }
  }, nd = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const g = i.target, v = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || g != null && g.isContentEditable || !Mt() || (If(), i.preventDefault(), i.stopPropagation());
  }, Ma = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, Er(), bt(p.pointerPos));
  }, rd = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Er(), bt(p.pointerPos);
  }, id = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Pf();
    i.shiftKey && !g || !i.shiftKey && !m || (_l(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", td, !0), window.addEventListener("keydown", nd, !0), window.addEventListener("keydown", Ma, !0), window.addEventListener("keyup", Ma, !0), window.addEventListener("blur", rd), window.addEventListener("keydown", id, !0), j.addEventListener("pointerdown", (i) => {
    i.target === j && Hi();
  });
  function cr(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(_)), s();
    } catch (h) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || Mn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      A.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  cr("cutout-focus", jg), !r && t === "stickers" && cr("external-sticker-sync", () => ef("open"), { rollbackState: !0 }), nb().catch((i) => {
    A.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), cr("history", nt), cr("undo-redo", Cl), cr("paint-ui", kn), cr("side-panel", He), cr("look-at-frame", cl), cr("video-source", Ei), cr("canvas-size", Mf), cr("cursor", () => bt(p.pointerPos)), pe(), ye.rafId = requestAnimationFrame(Nf);
}
or.registerExtension(Ax({
  app: or,
  openEditor: DM,
  attachStickers: Fw,
  attachCutout: Dw,
  attachPreview: Tw,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: iM
}));
