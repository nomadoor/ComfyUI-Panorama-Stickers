import * as Ho from "../../scripts/app.js";
import { app as On } from "../../scripts/app.js";
import { api as yn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function xc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const mt = {}, ji = [], Zn = () => {
}, Qd = () => !1, _s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xs = (e) => e.startsWith("onUpdate:"), Qt = Object.assign, wc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, p0 = Object.prototype.hasOwnProperty, at = (e, t) => p0.call(e, t), Be = Array.isArray, Vi = (e) => Ua(e) === "[object Map]", eh = (e) => Ua(e) === "[object Set]", Sf = (e) => Ua(e) === "[object Date]", Ke = (e) => typeof e == "function", It = (e) => typeof e == "string", er = (e) => typeof e == "symbol", ft = (e) => e !== null && typeof e == "object", th = (e) => (ft(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), nh = Object.prototype.toString, Ua = (e) => nh.call(e), g0 = (e) => Ua(e).slice(8, -1), rh = (e) => Ua(e) === "[object Object]", Sc = (e) => It(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ma = /* @__PURE__ */ xc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ws = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, b0 = /-\w/g, an = ws(
  (e) => e.replace(b0, (t) => t.slice(1).toUpperCase())
), y0 = /\B([A-Z])/g, ui = ws(
  (e) => e.replace(y0, "-$1").toLowerCase()
), Ss = ws((e) => e.charAt(0).toUpperCase() + e.slice(1)), wl = ws(
  (e) => e ? `on${Ss(e)}` : ""
), qn = (e, t) => !Object.is(e, t), Sl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ih = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, v0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Mf;
const Ms = () => Mf || (Mf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (Be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = It(i) ? S0(i) : Et(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (It(e) || ft(e))
    return e;
}
const _0 = /;(?![^(]*\))/g, x0 = /:([^]+)/, w0 = /\/\*[^]*?\*\//g;
function S0(e) {
  const t = {};
  return e.replace(w0, "").split(_0).forEach((n) => {
    if (n) {
      const i = n.split(x0);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (It(e))
    t = e;
  else if (Be(e))
    for (let n = 0; n < e.length; n++) {
      const i = ut(e[n]);
      i && (t += i + " ");
    }
  else if (ft(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const M0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", N0 = /* @__PURE__ */ xc(M0);
function ah(e) {
  return !!e || e === "";
}
function k0(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Mc(e[i], t[i]);
  return n;
}
function Mc(e, t) {
  if (e === t) return !0;
  let n = Sf(e), i = Sf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = er(e), i = er(t), n || i)
    return e === t;
  if (n = Be(e), i = Be(t), n || i)
    return n && i ? k0(e, t) : !1;
  if (n = ft(e), i = ft(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), p = t.hasOwnProperty(u);
      if (f && !p || !f && p || !Mc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const oh = (e) => !!(e && e.__v_isRef === !0), vt = (e) => It(e) ? e : e == null ? "" : Be(e) || ft(e) && (e.toString === nh || !Ke(e.toString)) ? oh(e) ? vt(e.value) : JSON.stringify(e, sh, 2) : String(e), sh = (e, t) => oh(t) ? sh(e, t.value) : Vi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[Ml(i, c) + " =>"] = a, n),
    {}
  )
} : eh(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ml(n))
} : er(t) ? Ml(t) : ft(t) && !Be(t) && !rh(t) ? String(t) : t, Ml = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    er(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let hn;
class P0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = hn, !t && hn && (this.index = (hn.scopes || (hn.scopes = [])).push(
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
      const n = hn;
      try {
        return hn = this, t();
      } finally {
        hn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = hn, hn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (hn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function A0() {
  return hn;
}
let gt;
const Nl = /* @__PURE__ */ new WeakSet();
class lh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, hn && hn.active && hn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Nl.has(this) && (Nl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || uh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nf(this), fh(this);
    const t = gt, n = Rn;
    gt = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      dh(this), gt = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pc(t);
      this.deps = this.depsTail = void 0, Nf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Nl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xl(this) && this.run();
  }
  get dirty() {
    return Xl(this);
  }
}
let ch = 0, Na, ka;
function uh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ka, ka = e;
    return;
  }
  e.next = Na, Na = e;
}
function Nc() {
  ch++;
}
function kc() {
  if (--ch > 0)
    return;
  if (ka) {
    let t = ka;
    for (ka = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Na; ) {
    let t = Na;
    for (Na = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function fh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Pc(i), T0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Da) || (e.globalVersion = Da, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = gt, i = Rn;
  gt = e, Rn = !0;
  try {
    fh(e);
    const a = e.fn(e._value);
    (t.version === 0 || qn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    gt = n, Rn = i, dh(e), e.flags &= -3;
  }
}
function Pc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      Pc(c, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function T0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const mh = [];
function yr() {
  mh.push(Rn), Rn = !1;
}
function vr() {
  const e = mh.pop();
  Rn = e === void 0 ? !0 : e;
}
function Nf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = gt;
    gt = void 0;
    try {
      t();
    } finally {
      gt = n;
    }
  }
}
let Da = 0;
class I0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ac {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!gt || !Rn || gt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== gt)
      n = this.activeLink = new I0(gt, this), gt.deps ? (n.prevDep = gt.depsTail, gt.depsTail.nextDep = n, gt.depsTail = n) : gt.deps = gt.depsTail = n, ph(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = gt.depsTail, n.nextDep = void 0, gt.depsTail.nextDep = n, gt.depsTail = n, gt.deps === n && (gt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Da++, this.notify(t);
  }
  notify(t) {
    Nc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      kc();
    }
  }
}
function ph(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        ph(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Jl = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ Symbol(
  ""
), Zl = /* @__PURE__ */ Symbol(
  ""
), Oa = /* @__PURE__ */ Symbol(
  ""
);
function Xt(e, t, n) {
  if (Rn && gt) {
    let i = Jl.get(e);
    i || Jl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ac()), a.map = i, a.key = n), a.track();
  }
}
function mr(e, t, n, i, a, c) {
  const u = Jl.get(e);
  if (!u) {
    Da++;
    return;
  }
  const f = (p) => {
    p && p.trigger();
  };
  if (Nc(), t === "clear")
    u.forEach(f);
  else {
    const p = Be(e), y = p && Sc(n);
    if (p && n === "length") {
      const w = Number(i);
      u.forEach((x, M) => {
        (M === "length" || M === Oa || !er(M) && M >= w) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Oa)), t) {
        case "add":
          p ? y && f(u.get("length")) : (f(u.get(ti)), Vi(e) && f(u.get(Zl)));
          break;
        case "delete":
          p || (f(u.get(ti)), Vi(e) && f(u.get(Zl)));
          break;
        case "set":
          Vi(e) && f(u.get(ti));
          break;
      }
  }
  kc();
}
function Ai(e) {
  const t = /* @__PURE__ */ it(e);
  return t === e ? t : (Xt(t, "iterate", Oa), /* @__PURE__ */ Nn(e) ? t : t.map(Fn));
}
function Ns(e) {
  return Xt(e = /* @__PURE__ */ it(e), "iterate", Oa), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ _r(e) ? Yi(/* @__PURE__ */ ni(e) ? Fn(t) : t) : Fn(t);
}
const C0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return kl(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return Ai(this).concat(
      ...e.map((t) => Be(t) ? Ai(t) : t)
    );
  },
  entries() {
    return kl(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
  },
  every(e, t) {
    return lr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Kn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return lr(
      this,
      "find",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return lr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lr(
      this,
      "findLast",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return lr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Pl(this, "includes", e);
  },
  indexOf(...e) {
    return Pl(this, "indexOf", e);
  },
  join(e) {
    return Ai(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Pl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return da(this, "pop");
  },
  push(...e) {
    return da(this, "push", e);
  },
  reduce(e, ...t) {
    return kf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return kf(this, "reduceRight", e, t);
  },
  shift() {
    return da(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return da(this, "splice", e);
  },
  toReversed() {
    return Ai(this).toReversed();
  },
  toSorted(e) {
    return Ai(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ai(this).toSpliced(...e);
  },
  unshift(...e) {
    return da(this, "unshift", e);
  },
  values() {
    return kl(this, "values", (e) => Kn(this, e));
  }
};
function kl(e, t, n) {
  const i = Ns(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Nn(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const E0 = Array.prototype;
function lr(e, t, n, i, a, c) {
  const u = Ns(e), f = u !== e && !/* @__PURE__ */ Nn(e), p = u[t];
  if (p !== E0[t]) {
    const x = p.apply(e, c);
    return f ? Fn(x) : x;
  }
  let y = n;
  u !== e && (f ? y = function(x, M) {
    return n.call(this, Kn(e, x), M, e);
  } : n.length > 2 && (y = function(x, M) {
    return n.call(this, x, M, e);
  }));
  const w = p.call(u, y, i);
  return f && a ? a(w) : w;
}
function kf(e, t, n, i) {
  const a = Ns(e), c = a !== e && !/* @__PURE__ */ Nn(e);
  let u = n, f = !1;
  a !== e && (c ? (f = i.length === 0, u = function(y, w, x) {
    return f && (f = !1, y = Kn(e, y)), n.call(this, y, Kn(e, w), x, e);
  }) : n.length > 3 && (u = function(y, w, x) {
    return n.call(this, y, w, x, e);
  }));
  const p = a[t](u, ...i);
  return f ? Kn(e, p) : p;
}
function Pl(e, t, n) {
  const i = /* @__PURE__ */ it(e);
  Xt(i, "iterate", Oa);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Cc(n[0]) ? (n[0] = /* @__PURE__ */ it(n[0]), i[t](...n)) : a;
}
function da(e, t, n = []) {
  yr(), Nc();
  const i = (/* @__PURE__ */ it(e))[t].apply(e, n);
  return kc(), vr(), i;
}
const D0 = /* @__PURE__ */ xc("__proto__,__v_isRef,__isVue"), gh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(er)
);
function O0(e) {
  er(e) || (e = String(e));
  const t = /* @__PURE__ */ it(this);
  return Xt(t, "has", e), t.hasOwnProperty(e);
}
class bh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, c = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return c;
    if (n === "__v_raw")
      return i === (a ? c ? B0 : xh : c ? _h : vh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Be(t);
    if (!a) {
      let p;
      if (u && (p = C0[n]))
        return p;
      if (n === "hasOwnProperty")
        return O0;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Zt(t) ? t : i
    );
    if ((er(n) ? gh.has(n) : D0(n)) || (a || Xt(t, "get", n), c))
      return f;
    if (/* @__PURE__ */ Zt(f)) {
      const p = u && Sc(n) ? f : f.value;
      return a && ft(p) ? /* @__PURE__ */ ec(p) : p;
    }
    return ft(f) ? a ? /* @__PURE__ */ ec(f) : /* @__PURE__ */ ks(f) : f;
  }
}
class yh extends bh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const u = Be(t) && Sc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ _r(c);
      if (!/* @__PURE__ */ Nn(i) && !/* @__PURE__ */ _r(i) && (c = /* @__PURE__ */ it(c), i = /* @__PURE__ */ it(i)), !u && /* @__PURE__ */ Zt(c) && !/* @__PURE__ */ Zt(i))
        return y || (c.value = i), !0;
    }
    const f = u ? Number(n) < t.length : at(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Zt(t) ? t : a
    );
    return t === /* @__PURE__ */ it(a) && (f ? qn(i, c) && mr(t, "set", n, i) : mr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = at(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && mr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!er(n) || !gh.has(n)) && Xt(t, "has", n), i;
  }
  ownKeys(t) {
    return Xt(
      t,
      "iterate",
      Be(t) ? "length" : ti
    ), Reflect.ownKeys(t);
  }
}
class R0 extends bh {
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
const F0 = /* @__PURE__ */ new yh(), L0 = /* @__PURE__ */ new R0(), z0 = /* @__PURE__ */ new yh(!0);
const Ql = (e) => e, vo = (e) => Reflect.getPrototypeOf(e);
function $0(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ it(a), u = Vi(c), f = e === "entries" || e === Symbol.iterator && u, p = e === "keys" && u, y = a[e](...i), w = n ? Ql : t ? Yi : Fn;
    return !t && Xt(
      c,
      "iterate",
      p ? Zl : ti
    ), Qt(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: x, done: M } = y.next();
          return M ? { value: x, done: M } : {
            value: f ? [w(x[0]), w(x[1])] : w(x),
            done: M
          };
        }
      }
    );
  };
}
function _o(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function j0(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ it(c), f = /* @__PURE__ */ it(a);
      e || (qn(a, f) && Xt(u, "get", a), Xt(u, "get", f));
      const { has: p } = vo(u), y = t ? Ql : e ? Yi : Fn;
      if (p.call(u, a))
        return y(c.get(a));
      if (p.call(u, f))
        return y(c.get(f));
      c !== u && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Xt(/* @__PURE__ */ it(a), "iterate", ti), a.size;
    },
    has(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ it(c), f = /* @__PURE__ */ it(a);
      return e || (qn(a, f) && Xt(u, "has", a), Xt(u, "has", f)), a === f ? c.has(a) : c.has(a) || c.has(f);
    },
    forEach(a, c) {
      const u = this, f = u.__v_raw, p = /* @__PURE__ */ it(f), y = t ? Ql : e ? Yi : Fn;
      return !e && Xt(p, "iterate", ti), f.forEach((w, x) => a.call(c, y(w), y(x), u));
    }
  };
  return Qt(
    n,
    e ? {
      add: _o("add"),
      set: _o("set"),
      delete: _o("delete"),
      clear: _o("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ it(this), u = vo(c), f = /* @__PURE__ */ it(a), p = !t && !/* @__PURE__ */ Nn(a) && !/* @__PURE__ */ _r(a) ? f : a;
        return u.has.call(c, p) || qn(a, p) && u.has.call(c, a) || qn(f, p) && u.has.call(c, f) || (c.add(p), mr(c, "add", p, p)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ Nn(c) && !/* @__PURE__ */ _r(c) && (c = /* @__PURE__ */ it(c));
        const u = /* @__PURE__ */ it(this), { has: f, get: p } = vo(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ it(a), y = f.call(u, a));
        const w = p.call(u, a);
        return u.set(a, c), y ? qn(c, w) && mr(u, "set", a, c) : mr(u, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ it(this), { has: u, get: f } = vo(c);
        let p = u.call(c, a);
        p || (a = /* @__PURE__ */ it(a), p = u.call(c, a)), f && f.call(c, a);
        const y = c.delete(a);
        return p && mr(c, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ it(this), c = a.size !== 0, u = a.clear();
        return c && mr(
          a,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = $0(a, e, t);
  }), n;
}
function Tc(e, t) {
  const n = j0(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    at(n, a) && a in i ? n : i,
    a,
    c
  );
}
const V0 = {
  get: /* @__PURE__ */ Tc(!1, !1)
}, U0 = {
  get: /* @__PURE__ */ Tc(!1, !0)
}, H0 = {
  get: /* @__PURE__ */ Tc(!0, !1)
};
const vh = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ new WeakMap(), xh = /* @__PURE__ */ new WeakMap(), B0 = /* @__PURE__ */ new WeakMap();
function G0(e) {
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
function K0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : G0(g0(e));
}
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return /* @__PURE__ */ _r(e) ? e : Ic(
    e,
    !1,
    F0,
    V0,
    vh
  );
}
// @__NO_SIDE_EFFECTS__
function W0(e) {
  return Ic(
    e,
    !1,
    z0,
    U0,
    _h
  );
}
// @__NO_SIDE_EFFECTS__
function ec(e) {
  return Ic(
    e,
    !0,
    L0,
    H0,
    xh
  );
}
function Ic(e, t, n, i, a) {
  if (!ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = K0(e);
  if (c === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    c === 2 ? i : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  return /* @__PURE__ */ _r(e) ? /* @__PURE__ */ ni(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Cc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ it(t) : e;
}
function Y0(e) {
  return !at(e, "__v_skip") && Object.isExtensible(e) && ih(e, "__v_skip", !0), e;
}
const Fn = (e) => ft(e) ? /* @__PURE__ */ ks(e) : e, Yi = (e) => ft(e) ? /* @__PURE__ */ ec(e) : e;
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return q0(e, !1);
}
function q0(e, t) {
  return /* @__PURE__ */ Zt(e) ? e : new X0(e, t);
}
class X0 {
  constructor(t, n) {
    this.dep = new Ac(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ it(t), this._value = n ? t : Fn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Nn(t) || /* @__PURE__ */ _r(t);
    t = i ? t : /* @__PURE__ */ it(t), qn(t, n) && (this._rawValue = t, this._value = i ? t : Fn(t), this.dep.trigger());
  }
}
function Dr(e) {
  return /* @__PURE__ */ Zt(e) ? e.value : e;
}
const J0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Dr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Zt(a) && !/* @__PURE__ */ Zt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function wh(e) {
  return /* @__PURE__ */ ni(e) ? e : new Proxy(e, J0);
}
class Z0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ac(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Da - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    gt !== this)
      return uh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Q0(e, t, n = !1) {
  let i, a;
  return Ke(e) ? i = e : (i = e.get, a = e.set), new Z0(i, a, n);
}
const xo = {}, ns = /* @__PURE__ */ new WeakMap();
let Jr;
function eb(e, t = !1, n = Jr) {
  if (n) {
    let i = ns.get(n);
    i || ns.set(n, i = []), i.push(e);
  }
}
function tb(e, t, n = mt) {
  const { immediate: i, deep: a, once: c, scheduler: u, augmentJob: f, call: p } = n, y = (C) => a ? C : /* @__PURE__ */ Nn(C) || a === !1 || a === 0 ? pr(C, 1) : pr(C);
  let w, x, M, A, _ = !1, F = !1;
  if (/* @__PURE__ */ Zt(e) ? (x = () => e.value, _ = /* @__PURE__ */ Nn(e)) : /* @__PURE__ */ ni(e) ? (x = () => y(e), _ = !0) : Be(e) ? (F = !0, _ = e.some((C) => /* @__PURE__ */ ni(C) || /* @__PURE__ */ Nn(C)), x = () => e.map((C) => {
    if (/* @__PURE__ */ Zt(C))
      return C.value;
    if (/* @__PURE__ */ ni(C))
      return y(C);
    if (Ke(C))
      return p ? p(C, 2) : C();
  })) : Ke(e) ? t ? x = p ? () => p(e, 2) : e : x = () => {
    if (M) {
      yr();
      try {
        M();
      } finally {
        vr();
      }
    }
    const C = Jr;
    Jr = w;
    try {
      return p ? p(e, 3, [A]) : e(A);
    } finally {
      Jr = C;
    }
  } : x = Zn, t && a) {
    const C = x, O = a === !0 ? 1 / 0 : a;
    x = () => pr(C(), O);
  }
  const U = A0(), V = () => {
    w.stop(), U && U.active && wc(U.effects, w);
  };
  if (c && t) {
    const C = t;
    t = (...O) => {
      C(...O), V();
    };
  }
  let k = F ? new Array(e.length).fill(xo) : xo;
  const z = (C) => {
    if (!(!(w.flags & 1) || !w.dirty && !C))
      if (t) {
        const O = w.run();
        if (a || _ || (F ? O.some((j, q) => qn(j, k[q])) : qn(O, k))) {
          M && M();
          const j = Jr;
          Jr = w;
          try {
            const q = [
              O,
              // pass undefined as the old value when it's changed for the first time
              k === xo ? void 0 : F && k[0] === xo ? [] : k,
              A
            ];
            k = O, p ? p(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            Jr = j;
          }
        }
      } else
        w.run();
  };
  return f && f(z), w = new lh(x), w.scheduler = u ? () => u(z, !1) : z, A = (C) => eb(C, !1, w), M = w.onStop = () => {
    const C = ns.get(w);
    if (C) {
      if (p)
        p(C, 4);
      else
        for (const O of C) O();
      ns.delete(w);
    }
  }, t ? i ? z(!0) : k = w.run() : u ? u(z.bind(null, !0), !0) : w.run(), V.pause = w.pause.bind(w), V.resume = w.resume.bind(w), V.stop = V, V;
}
function pr(e, t = 1 / 0, n) {
  if (t <= 0 || !ft(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Zt(e))
    pr(e.value, t, n);
  else if (Be(e))
    for (let i = 0; i < e.length; i++)
      pr(e[i], t, n);
  else if (eh(e) || Vi(e))
    e.forEach((i) => {
      pr(i, t, n);
    });
  else if (rh(e)) {
    for (const i in e)
      pr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && pr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ha(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Ps(a, t, n);
  }
}
function tr(e, t, n, i) {
  if (Ke(e)) {
    const a = Ha(e, t, n, i);
    return a && th(a) && a.catch((c) => {
      Ps(c, t, n);
    }), a;
  }
  if (Be(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(tr(e[c], t, n, i));
    return a;
  }
}
function Ps(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = t && t.appContext.config || mt;
  if (t) {
    let f = t.parent;
    const p = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const w = f.ec;
      if (w) {
        for (let x = 0; x < w.length; x++)
          if (w[x](e, p, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (c) {
      yr(), Ha(c, null, 10, [
        e,
        p,
        y
      ]), vr();
      return;
    }
  }
  nb(e, n, a, i, u);
}
function nb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const rn = [];
let Gn = -1;
const Ui = [];
let Cr = null, Ri = 0;
const Sh = /* @__PURE__ */ Promise.resolve();
let rs = null;
function Ec(e) {
  const t = rs || Sh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rb(e) {
  let t = Gn + 1, n = rn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = rn[i], c = Ra(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Dc(e) {
  if (!(e.flags & 1)) {
    const t = Ra(e), n = rn[rn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ra(n) ? rn.push(e) : rn.splice(rb(t), 0, e), e.flags |= 1, Mh();
  }
}
function Mh() {
  rs || (rs = Sh.then(kh));
}
function ib(e) {
  Be(e) ? Ui.push(...e) : Cr && e.id === -1 ? Cr.splice(Ri + 1, 0, e) : e.flags & 1 || (Ui.push(e), e.flags |= 1), Mh();
}
function Pf(e, t, n = Gn + 1) {
  for (; n < rn.length; n++) {
    const i = rn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      rn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Nh(e) {
  if (Ui.length) {
    const t = [...new Set(Ui)].sort(
      (n, i) => Ra(n) - Ra(i)
    );
    if (Ui.length = 0, Cr) {
      Cr.push(...t);
      return;
    }
    for (Cr = t, Ri = 0; Ri < Cr.length; Ri++) {
      const n = Cr[Ri];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Cr = null, Ri = 0;
  }
}
const Ra = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function kh(e) {
  try {
    for (Gn = 0; Gn < rn.length; Gn++) {
      const t = rn[Gn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ha(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gn < rn.length; Gn++) {
      const t = rn[Gn];
      t && (t.flags &= -2);
    }
    Gn = -1, rn.length = 0, Nh(), rs = null, (rn.length || Ui.length) && kh();
  }
}
let vn = null, Ph = null;
function is(e) {
  const t = vn;
  return vn = e, Ph = e && e.type.__scopeId || null, t;
}
function Ah(e, t = vn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && $f(-1);
    const c = is(t);
    let u;
    try {
      u = e(...a);
    } finally {
      is(c), i._d && $f(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ba(e, t) {
  if (vn === null)
    return e;
  const n = Cs(vn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, u, f, p = mt] = t[a];
    c && (Ke(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && pr(u), i.push({
      dir: c,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return e;
}
function Kr(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    c && (f.oldValue = c[u].value);
    let p = f.dir[i];
    p && (yr(), tr(p, n, 8, [
      e.el,
      f,
      e,
      t
    ]), vr());
  }
}
function ab(e, t) {
  if (Jt) {
    let n = Jt.provides;
    const i = Jt.parent && Jt.parent.provides;
    i === n && (n = Jt.provides = Object.create(i)), n[e] = t;
  }
}
function Bo(e, t, n = !1) {
  const i = iy();
  if (i || Bi) {
    let a = Bi ? Bi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ke(t) ? t.call(i && i.proxy) : t;
  }
}
const ob = /* @__PURE__ */ Symbol.for("v-scx"), sb = () => Bo(ob);
function Hi(e, t, n) {
  return Th(e, t, n);
}
function Th(e, t, n = mt) {
  const { immediate: i, deep: a, flush: c, once: u } = n, f = Qt({}, n), p = t && i || !t && c !== "post";
  let y;
  if (La) {
    if (c === "sync") {
      const A = sb();
      y = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!p) {
      const A = () => {
      };
      return A.stop = Zn, A.resume = Zn, A.pause = Zn, A;
    }
  }
  const w = Jt;
  f.call = (A, _, F) => tr(A, w, _, F);
  let x = !1;
  c === "post" ? f.scheduler = (A) => {
    dn(A, w && w.suspense);
  } : c !== "sync" && (x = !0, f.scheduler = (A, _) => {
    _ ? A() : Dc(A);
  }), f.augmentJob = (A) => {
    t && (A.flags |= 4), x && (A.flags |= 2, w && (A.id = w.uid, A.i = w));
  };
  const M = tb(e, t, f);
  return La && (y ? y.push(M) : p && M()), M;
}
function lb(e, t, n) {
  const i = this.proxy, a = It(e) ? e.includes(".") ? Ih(i, e) : () => i[e] : e.bind(i, i);
  let c;
  Ke(t) ? c = t : (c = t.handler, n = t);
  const u = Ga(this), f = Th(a, c.bind(i), n);
  return u(), f;
}
function Ih(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const cb = /* @__PURE__ */ Symbol("_vte"), ub = (e) => e.__isTeleport, fb = /* @__PURE__ */ Symbol("_leaveCb");
function Oc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Oc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ch(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Af(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const as = /* @__PURE__ */ new WeakMap();
function Pa(e, t, n, i, a = !1) {
  if (Be(e)) {
    e.forEach(
      (F, U) => Pa(
        F,
        t && (Be(t) ? t[U] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Aa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Pa(e, t, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? Cs(i.component) : i.el, u = a ? null : c, { i: f, r: p } = e, y = t && t.r, w = f.refs === mt ? f.refs = {} : f.refs, x = f.setupState, M = /* @__PURE__ */ it(x), A = x === mt ? Qd : (F) => Af(w, F) ? !1 : at(M, F), _ = (F, U) => !(U && Af(w, U));
  if (y != null && y !== p) {
    if (Tf(t), It(y))
      w[y] = null, A(y) && (x[y] = null);
    else if (/* @__PURE__ */ Zt(y)) {
      const F = t;
      _(y, F.k) && (y.value = null), F.k && (w[F.k] = null);
    }
  }
  if (Ke(p))
    Ha(p, f, 12, [u, w]);
  else {
    const F = It(p), U = /* @__PURE__ */ Zt(p);
    if (F || U) {
      const V = () => {
        if (e.f) {
          const k = F ? A(p) ? x[p] : w[p] : _() || !e.k ? p.value : w[e.k];
          if (a)
            Be(k) && wc(k, c);
          else if (Be(k))
            k.includes(c) || k.push(c);
          else if (F)
            w[p] = [c], A(p) && (x[p] = w[p]);
          else {
            const z = [c];
            _(p, e.k) && (p.value = z), e.k && (w[e.k] = z);
          }
        } else F ? (w[p] = u, A(p) && (x[p] = u)) : U && (_(p, e.k) && (p.value = u), e.k && (w[e.k] = u));
      };
      if (u) {
        const k = () => {
          V(), as.delete(e);
        };
        k.id = -1, as.set(e, k), dn(k, n);
      } else
        Tf(e), V();
    }
  }
}
function Tf(e) {
  const t = as.get(e);
  t && (t.flags |= 8, as.delete(e));
}
Ms().requestIdleCallback;
Ms().cancelIdleCallback;
const Aa = (e) => !!e.type.__asyncLoader, Eh = (e) => e.type.__isKeepAlive;
function db(e, t) {
  Dh(e, "a", t);
}
function hb(e, t) {
  Dh(e, "da", t);
}
function Dh(e, t, n = Jt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (As(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Eh(a.parent.vnode) && mb(i, t, n, a), a = a.parent;
  }
}
function mb(e, t, n, i) {
  const a = As(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Rh(() => {
    wc(i[t], a);
  }, n);
}
function As(e, t, n = Jt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...u) => {
      yr();
      const f = Ga(n), p = tr(t, n, e, u);
      return f(), vr(), p;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const xr = (e) => (t, n = Jt) => {
  (!La || e === "sp") && As(e, (...i) => t(...i), n);
}, pb = xr("bm"), Oh = xr("m"), gb = xr(
  "bu"
), bb = xr("u"), Rc = xr(
  "bum"
), Rh = xr("um"), yb = xr(
  "sp"
), vb = xr("rtg"), _b = xr("rtc");
function xb(e, t = Jt) {
  As("ec", e, t);
}
const wb = "components", Fh = /* @__PURE__ */ Symbol.for("v-ndc");
function Sb(e) {
  return It(e) ? Mb(wb, e, !1) || e : e || Fh;
}
function Mb(e, t, n = !0, i = !1) {
  const a = vn || Jt;
  if (a) {
    const c = a.type;
    {
      const f = cy(
        c,
        !1
      );
      if (f && (f === t || f === an(t) || f === Ss(an(t))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      If(a[e] || c[e], t) || // global registration
      If(a.appContext[e], t)
    );
    return !u && i ? c : u;
  }
}
function If(e, t) {
  return e && (e[t] || e[an(t)] || e[Ss(an(t))]);
}
function Lt(e, t, n, i) {
  let a;
  const c = n, u = Be(e);
  if (u || It(e)) {
    const f = u && /* @__PURE__ */ ni(e);
    let p = !1, y = !1;
    f && (p = !/* @__PURE__ */ Nn(e), y = /* @__PURE__ */ _r(e), e = Ns(e)), a = new Array(e.length);
    for (let w = 0, x = e.length; w < x; w++)
      a[w] = t(
        p ? y ? Yi(Fn(e[w])) : Fn(e[w]) : e[w],
        w,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, c);
  } else if (ft(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, p) => t(f, p, void 0, c)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let p = 0, y = f.length; p < y; p++) {
        const w = f[p];
        a[p] = t(e[w], w, p, c);
      }
    }
  else
    a = [];
  return a;
}
const tc = (e) => e ? rm(e) ? Cs(e) : tc(e.parent) : null, Ta = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => tc(e.parent),
    $root: (e) => tc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Dc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ec.bind(e.proxy)),
    $watch: (e) => lb.bind(e)
  })
), Al = (e, t) => e !== mt && !e.__isScriptSetup && at(e, t), Nb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: c, accessCache: u, type: f, appContext: p } = e;
    if (t[0] !== "$") {
      const M = u[t];
      if (M !== void 0)
        switch (M) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return c[t];
        }
      else {
        if (Al(i, t))
          return u[t] = 1, i[t];
        if (a !== mt && at(a, t))
          return u[t] = 2, a[t];
        if (at(c, t))
          return u[t] = 3, c[t];
        if (n !== mt && at(n, t))
          return u[t] = 4, n[t];
        nc && (u[t] = 0);
      }
    }
    const y = Ta[t];
    let w, x;
    if (y)
      return t === "$attrs" && Xt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (w = f.__cssModules) && (w = w[t])
    )
      return w;
    if (n !== mt && at(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = p.config.globalProperties, at(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: c } = e;
    return Al(a, t) ? (a[t] = n, !0) : i !== mt && at(i, t) ? (i[t] = n, !0) : at(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: u }
  }, f) {
    let p;
    return !!(n[f] || e !== mt && f[0] !== "$" && at(e, f) || Al(t, f) || at(c, f) || at(i, f) || at(Ta, f) || at(a.config.globalProperties, f) || (p = u.__cssModules) && p[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : at(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Cf(e) {
  return Be(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nc = !0;
function kb(e) {
  const t = zh(e), n = e.proxy, i = e.ctx;
  nc = !1, t.beforeCreate && Ef(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: u,
    watch: f,
    provide: p,
    inject: y,
    // lifecycle
    created: w,
    beforeMount: x,
    mounted: M,
    beforeUpdate: A,
    updated: _,
    activated: F,
    deactivated: U,
    beforeDestroy: V,
    beforeUnmount: k,
    destroyed: z,
    unmounted: C,
    render: O,
    renderTracked: j,
    renderTriggered: q,
    errorCaptured: J,
    serverPrefetch: ee,
    // public API
    expose: I,
    inheritAttrs: W,
    // assets
    components: ie,
    directives: ae,
    filters: be
  } = t;
  if (y && Pb(y, i, null), u)
    for (const P in u) {
      const K = u[P];
      Ke(K) && (i[P] = K.bind(n));
    }
  if (a) {
    const P = a.call(n, n);
    ft(P) && (e.data = /* @__PURE__ */ ks(P));
  }
  if (nc = !0, c)
    for (const P in c) {
      const K = c[P], de = Ke(K) ? K.bind(n, n) : Ke(K.get) ? K.get.bind(n, n) : Zn, Me = !Ke(K) && Ke(K.set) ? K.set.bind(n) : Zn, H = St({
        get: de,
        set: Me
      });
      Object.defineProperty(i, P, {
        enumerable: !0,
        configurable: !0,
        get: () => H.value,
        set: ($e) => H.value = $e
      });
    }
  if (f)
    for (const P in f)
      Lh(f[P], i, n, P);
  if (p) {
    const P = Ke(p) ? p.call(n) : p;
    Reflect.ownKeys(P).forEach((K) => {
      ab(K, P[K]);
    });
  }
  w && Ef(w, e, "c");
  function me(P, K) {
    Be(K) ? K.forEach((de) => P(de.bind(n))) : K && P(K.bind(n));
  }
  if (me(pb, x), me(Oh, M), me(gb, A), me(bb, _), me(db, F), me(hb, U), me(xb, J), me(_b, j), me(vb, q), me(Rc, k), me(Rh, C), me(yb, ee), Be(I))
    if (I.length) {
      const P = e.exposed || (e.exposed = {});
      I.forEach((K) => {
        Object.defineProperty(P, K, {
          get: () => n[K],
          set: (de) => n[K] = de,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Zn && (e.render = O), W != null && (e.inheritAttrs = W), ie && (e.components = ie), ae && (e.directives = ae), ee && Ch(e);
}
function Pb(e, t, n = Zn) {
  Be(e) && (e = rc(e));
  for (const i in e) {
    const a = e[i];
    let c;
    ft(a) ? "default" in a ? c = Bo(
      a.from || i,
      a.default,
      !0
    ) : c = Bo(a.from || i) : c = Bo(a), /* @__PURE__ */ Zt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : t[i] = c;
  }
}
function Ef(e, t, n) {
  tr(
    Be(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lh(e, t, n, i) {
  let a = i.includes(".") ? Ih(n, i) : () => n[i];
  if (It(e)) {
    const c = t[e];
    Ke(c) && Hi(a, c);
  } else if (Ke(e))
    Hi(a, e.bind(n));
  else if (ft(e))
    if (Be(e))
      e.forEach((c) => Lh(c, t, n, i));
    else {
      const c = Ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ke(c) && Hi(a, c, e);
    }
}
function zh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = c.get(t);
  let p;
  return f ? p = f : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (y) => os(p, y, u, !0)
  ), os(p, t, u)), ft(t) && c.set(t, p), p;
}
function os(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && os(e, c, n, !0), a && a.forEach(
    (u) => os(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const f = Ab[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const Ab = {
  data: Df,
  props: Of,
  emits: Of,
  // objects
  methods: _a,
  computed: _a,
  // lifecycle
  beforeCreate: nn,
  created: nn,
  beforeMount: nn,
  mounted: nn,
  beforeUpdate: nn,
  updated: nn,
  beforeDestroy: nn,
  beforeUnmount: nn,
  destroyed: nn,
  unmounted: nn,
  activated: nn,
  deactivated: nn,
  errorCaptured: nn,
  serverPrefetch: nn,
  // assets
  components: _a,
  directives: _a,
  // watch
  watch: Ib,
  // provide / inject
  provide: Df,
  inject: Tb
};
function Df(e, t) {
  return t ? e ? function() {
    return Qt(
      Ke(e) ? e.call(this, this) : e,
      Ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tb(e, t) {
  return _a(rc(e), rc(t));
}
function rc(e) {
  if (Be(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function _a(e, t) {
  return e ? Qt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Of(e, t) {
  return e ? Be(e) && Be(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Qt(
    /* @__PURE__ */ Object.create(null),
    Cf(e),
    Cf(t ?? {})
  ) : t;
}
function Ib(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Qt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = nn(e[i], t[i]);
  return n;
}
function $h() {
  return {
    app: null,
    config: {
      isNativeTag: Qd,
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
let Cb = 0;
function Eb(e, t) {
  return function(i, a = null) {
    Ke(i) || (i = Qt({}, i)), a != null && !ft(a) && (a = null);
    const c = $h(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let p = !1;
    const y = c.app = {
      _uid: Cb++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: fy,
      get config() {
        return c.config;
      },
      set config(w) {
      },
      use(w, ...x) {
        return u.has(w) || (w && Ke(w.install) ? (u.add(w), w.install(y, ...x)) : Ke(w) && (u.add(w), w(y, ...x))), y;
      },
      mixin(w) {
        return c.mixins.includes(w) || c.mixins.push(w), y;
      },
      component(w, x) {
        return x ? (c.components[w] = x, y) : c.components[w];
      },
      directive(w, x) {
        return x ? (c.directives[w] = x, y) : c.directives[w];
      },
      mount(w, x, M) {
        if (!p) {
          const A = y._ceVNode || qe(i, a);
          return A.appContext = c, M === !0 ? M = "svg" : M === !1 && (M = void 0), e(A, w, M), p = !0, y._container = w, w.__vue_app__ = y, Cs(A.component);
        }
      },
      onUnmount(w) {
        f.push(w);
      },
      unmount() {
        p && (tr(
          f,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(w, x) {
        return c.provides[w] = x, y;
      },
      runWithContext(w) {
        const x = Bi;
        Bi = y;
        try {
          return w();
        } finally {
          Bi = x;
        }
      }
    };
    return y;
  };
}
let Bi = null;
const Db = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${an(t)}Modifiers`] || e[`${ui(t)}Modifiers`];
function Ob(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || mt;
  let a = n;
  const c = t.startsWith("update:"), u = c && Db(i, t.slice(7));
  u && (u.trim && (a = n.map((w) => It(w) ? w.trim() : w)), u.number && (a = n.map(v0)));
  let f, p = i[f = wl(t)] || // also try camelCase event handler (#2249)
  i[f = wl(an(t))];
  !p && c && (p = i[f = wl(ui(t))]), p && tr(
    p,
    e,
    6,
    a
  );
  const y = i[f + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, tr(
      y,
      e,
      6,
      a
    );
  }
}
const Rb = /* @__PURE__ */ new WeakMap();
function jh(e, t, n = !1) {
  const i = n ? Rb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let u = {}, f = !1;
  if (!Ke(e)) {
    const p = (y) => {
      const w = jh(y, t, !0);
      w && (f = !0, Qt(u, w));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !c && !f ? (ft(e) && i.set(e, null), null) : (Be(c) ? c.forEach((p) => u[p] = null) : Qt(u, c), ft(e) && i.set(e, u), u);
}
function Ts(e, t) {
  return !e || !_s(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), at(e, t[0].toLowerCase() + t.slice(1)) || at(e, ui(t)) || at(e, t));
}
function Rf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: u,
    attrs: f,
    emit: p,
    render: y,
    renderCache: w,
    props: x,
    data: M,
    setupState: A,
    ctx: _,
    inheritAttrs: F
  } = e, U = is(e);
  let V, k;
  try {
    if (n.shapeFlag & 4) {
      const C = a || i, O = C;
      V = Wn(
        y.call(
          O,
          C,
          w,
          x,
          A,
          M,
          _
        )
      ), k = f;
    } else {
      const C = t;
      V = Wn(
        C.length > 1 ? C(
          x,
          { attrs: f, slots: u, emit: p }
        ) : C(
          x,
          null
        )
      ), k = t.props ? f : Fb(f);
    }
  } catch (C) {
    Ia.length = 0, Ps(C, e, 1), V = qe(Fr);
  }
  let z = V;
  if (k && F !== !1) {
    const C = Object.keys(k), { shapeFlag: O } = z;
    C.length && O & 7 && (c && C.some(xs) && (k = Lb(
      k,
      c
    )), z = qi(z, k, !1, !0));
  }
  return n.dirs && (z = qi(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(n.dirs) : n.dirs), n.transition && Oc(z, n.transition), V = z, is(U), V;
}
const Fb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _s(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lb = (e, t) => {
  const n = {};
  for (const i in e)
    (!xs(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function zb(e, t, n) {
  const { props: i, children: a, component: c } = e, { props: u, children: f, patchFlag: p } = t, y = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Ff(i, u, y) : !!u;
    if (p & 8) {
      const w = t.dynamicProps;
      for (let x = 0; x < w.length; x++) {
        const M = w[x];
        if (Vh(u, i, M) && !Ts(y, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? Ff(i, u, y) : !0 : !!u;
  return !1;
}
function Ff(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if (Vh(t, e, c) && !Ts(n, c))
      return !0;
  }
  return !1;
}
function Vh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && ft(i) && ft(a) ? !Mc(i, a) : i !== a;
}
function $b({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Uh = {}, Hh = () => Object.create(Uh), Bh = (e) => Object.getPrototypeOf(e) === Uh;
function jb(e, t, n, i = !1) {
  const a = {}, c = Hh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Gh(e, t, a, c);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ W0(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function Vb(e, t, n, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ it(a), [p] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const w = e.vnode.dynamicProps;
      for (let x = 0; x < w.length; x++) {
        let M = w[x];
        if (Ts(e.emitsOptions, M))
          continue;
        const A = t[M];
        if (p)
          if (at(c, M))
            A !== c[M] && (c[M] = A, y = !0);
          else {
            const _ = an(M);
            a[_] = ic(
              p,
              f,
              _,
              A,
              e,
              !1
            );
          }
        else
          A !== c[M] && (c[M] = A, y = !0);
      }
    }
  } else {
    Gh(e, t, a, c) && (y = !0);
    let w;
    for (const x in f)
      (!t || // for camelCase
      !at(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((w = ui(x)) === x || !at(t, w))) && (p ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[w] !== void 0) && (a[x] = ic(
        p,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (c !== f)
      for (const x in c)
        (!t || !at(t, x)) && (delete c[x], y = !0);
  }
  y && mr(e.attrs, "set", "");
}
function Gh(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let p in t) {
      if (Ma(p))
        continue;
      const y = t[p];
      let w;
      a && at(a, w = an(p)) ? !c || !c.includes(w) ? n[w] = y : (f || (f = {}))[w] = y : Ts(e.emitsOptions, p) || (!(p in i) || y !== i[p]) && (i[p] = y, u = !0);
    }
  if (c) {
    const p = /* @__PURE__ */ it(n), y = f || mt;
    for (let w = 0; w < c.length; w++) {
      const x = c[w];
      n[x] = ic(
        a,
        p,
        x,
        y[x],
        e,
        !at(y, x)
      );
    }
  }
  return u;
}
function ic(e, t, n, i, a, c) {
  const u = e[n];
  if (u != null) {
    const f = at(u, "default");
    if (f && i === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Ke(p)) {
        const { propsDefaults: y } = a;
        if (n in y)
          i = y[n];
        else {
          const w = Ga(a);
          i = y[n] = p.call(
            null,
            t
          ), w();
        }
      } else
        i = p;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === ui(n)) && (i = !0));
  }
  return i;
}
const Ub = /* @__PURE__ */ new WeakMap();
function Kh(e, t, n = !1) {
  const i = n ? Ub : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, u = {}, f = [];
  let p = !1;
  if (!Ke(e)) {
    const w = (x) => {
      p = !0;
      const [M, A] = Kh(x, t, !0);
      Qt(u, M), A && f.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(w), e.extends && w(e.extends), e.mixins && e.mixins.forEach(w);
  }
  if (!c && !p)
    return ft(e) && i.set(e, ji), ji;
  if (Be(c))
    for (let w = 0; w < c.length; w++) {
      const x = an(c[w]);
      Lf(x) && (u[x] = mt);
    }
  else if (c)
    for (const w in c) {
      const x = an(w);
      if (Lf(x)) {
        const M = c[w], A = u[x] = Be(M) || Ke(M) ? { type: M } : Qt({}, M), _ = A.type;
        let F = !1, U = !0;
        if (Be(_))
          for (let V = 0; V < _.length; ++V) {
            const k = _[V], z = Ke(k) && k.name;
            if (z === "Boolean") {
              F = !0;
              break;
            } else z === "String" && (U = !1);
          }
        else
          F = Ke(_) && _.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = F, A[
          1
          /* shouldCastTrue */
        ] = U, (F || at(A, "default")) && f.push(x);
      }
    }
  const y = [u, f];
  return ft(e) && i.set(e, y), y;
}
function Lf(e) {
  return e[0] !== "$" && !Ma(e);
}
const Fc = (e) => e === "_" || e === "_ctx" || e === "$stable", Lc = (e) => Be(e) ? e.map(Wn) : [Wn(e)], Hb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ah((...a) => Lc(t(...a)), n);
  return i._c = !1, i;
}, Wh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Fc(a)) continue;
    const c = e[a];
    if (Ke(c))
      t[a] = Hb(a, c, i);
    else if (c != null) {
      const u = Lc(c);
      t[a] = () => u;
    }
  }
}, Yh = (e, t) => {
  const n = Lc(t);
  e.slots.default = () => n;
}, qh = (e, t, n) => {
  for (const i in t)
    (n || !Fc(i)) && (e[i] = t[i]);
}, Bb = (e, t, n) => {
  const i = e.slots = Hh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (qh(i, t, n), n && ih(i, "_", a, !0)) : Wh(t, i);
  } else t && Yh(e, t);
}, Gb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, u = mt;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? c = !1 : qh(a, t, n) : (c = !t.$stable, Wh(t, a)), u = t;
  } else t && (Yh(e, t), u = { default: 1 });
  if (c)
    for (const f in a)
      !Fc(f) && u[f] == null && delete a[f];
}, dn = Xb;
function Kb(e) {
  return Wb(e);
}
function Wb(e, t) {
  const n = Ms();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: c,
    createElement: u,
    createText: f,
    createComment: p,
    setText: y,
    setElementText: w,
    parentNode: x,
    nextSibling: M,
    setScopeId: A = Zn,
    insertStaticContent: _
  } = e, F = (R, $, oe, ve = null, D = null, Y = null, ne = void 0, fe = null, ue = !!$.dynamicChildren) => {
    if (R === $)
      return;
    R && !ha(R, $) && (ve = en(R), $e(R, D, Y, !0), R = null), $.patchFlag === -2 && (ue = !1, $.dynamicChildren = null);
    const { type: re, ref: Ne, shapeFlag: Se } = $;
    switch (re) {
      case Is:
        U(R, $, oe, ve);
        break;
      case Fr:
        V(R, $, oe, ve);
        break;
      case Il:
        R == null && k($, oe, ve, ne);
        break;
      case Ze:
        ie(
          R,
          $,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue
        );
        break;
      default:
        Se & 1 ? O(
          R,
          $,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue
        ) : Se & 6 ? ae(
          R,
          $,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue
        ) : (Se & 64 || Se & 128) && re.process(
          R,
          $,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue,
          Gt
        );
    }
    Ne != null && D ? Pa(Ne, R && R.ref, Y, $ || R, !$) : Ne == null && R && R.ref != null && Pa(R.ref, null, Y, R, !0);
  }, U = (R, $, oe, ve) => {
    if (R == null)
      i(
        $.el = f($.children),
        oe,
        ve
      );
    else {
      const D = $.el = R.el;
      $.children !== R.children && y(D, $.children);
    }
  }, V = (R, $, oe, ve) => {
    R == null ? i(
      $.el = p($.children || ""),
      oe,
      ve
    ) : $.el = R.el;
  }, k = (R, $, oe, ve) => {
    [R.el, R.anchor] = _(
      R.children,
      $,
      oe,
      ve,
      R.el,
      R.anchor
    );
  }, z = ({ el: R, anchor: $ }, oe, ve) => {
    let D;
    for (; R && R !== $; )
      D = M(R), i(R, oe, ve), R = D;
    i($, oe, ve);
  }, C = ({ el: R, anchor: $ }) => {
    let oe;
    for (; R && R !== $; )
      oe = M(R), a(R), R = oe;
    a($);
  }, O = (R, $, oe, ve, D, Y, ne, fe, ue) => {
    if ($.type === "svg" ? ne = "svg" : $.type === "math" && (ne = "mathml"), R == null)
      j(
        $,
        oe,
        ve,
        D,
        Y,
        ne,
        fe,
        ue
      );
    else {
      const re = R.el && R.el._isVueCE ? R.el : null;
      try {
        re && re._beginPatch(), ee(
          R,
          $,
          D,
          Y,
          ne,
          fe,
          ue
        );
      } finally {
        re && re._endPatch();
      }
    }
  }, j = (R, $, oe, ve, D, Y, ne, fe) => {
    let ue, re;
    const { props: Ne, shapeFlag: Se, transition: Pe, dirs: d } = R;
    if (ue = R.el = u(
      R.type,
      Y,
      Ne && Ne.is,
      Ne
    ), Se & 8 ? w(ue, R.children) : Se & 16 && J(
      R.children,
      ue,
      null,
      ve,
      D,
      Tl(R, Y),
      ne,
      fe
    ), d && Kr(R, null, ve, "created"), q(ue, R, R.scopeId, ne, ve), Ne) {
      for (const Oe in Ne)
        Oe !== "value" && !Ma(Oe) && c(ue, Oe, null, Ne[Oe], Y, ve);
      "value" in Ne && c(ue, "value", null, Ne.value, Y), (re = Ne.onVnodeBeforeMount) && Vn(re, ve, R);
    }
    d && Kr(R, null, ve, "beforeMount");
    const Ce = Yb(D, Pe);
    Ce && Pe.beforeEnter(ue), i(ue, $, oe), ((re = Ne && Ne.onVnodeMounted) || Ce || d) && dn(() => {
      try {
        re && Vn(re, ve, R), Ce && Pe.enter(ue), d && Kr(R, null, ve, "mounted");
      } finally {
      }
    }, D);
  }, q = (R, $, oe, ve, D) => {
    if (oe && A(R, oe), ve)
      for (let Y = 0; Y < ve.length; Y++)
        A(R, ve[Y]);
    if (D) {
      let Y = D.subTree;
      if ($ === Y || Qh(Y.type) && (Y.ssContent === $ || Y.ssFallback === $)) {
        const ne = D.vnode;
        q(
          R,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          D.parent
        );
      }
    }
  }, J = (R, $, oe, ve, D, Y, ne, fe, ue = 0) => {
    for (let re = ue; re < R.length; re++) {
      const Ne = R[re] = fe ? hr(R[re]) : Wn(R[re]);
      F(
        null,
        Ne,
        $,
        oe,
        ve,
        D,
        Y,
        ne,
        fe
      );
    }
  }, ee = (R, $, oe, ve, D, Y, ne) => {
    const fe = $.el = R.el;
    let { patchFlag: ue, dynamicChildren: re, dirs: Ne } = $;
    ue |= R.patchFlag & 16;
    const Se = R.props || mt, Pe = $.props || mt;
    let d;
    if (oe && Wr(oe, !1), (d = Pe.onVnodeBeforeUpdate) && Vn(d, oe, $, R), Ne && Kr($, R, oe, "beforeUpdate"), oe && Wr(oe, !0), (Se.innerHTML && Pe.innerHTML == null || Se.textContent && Pe.textContent == null) && w(fe, ""), re ? I(
      R.dynamicChildren,
      re,
      fe,
      oe,
      ve,
      Tl($, D),
      Y
    ) : ne || K(
      R,
      $,
      fe,
      null,
      oe,
      ve,
      Tl($, D),
      Y,
      !1
    ), ue > 0) {
      if (ue & 16)
        W(fe, Se, Pe, oe, D);
      else if (ue & 2 && Se.class !== Pe.class && c(fe, "class", null, Pe.class, D), ue & 4 && c(fe, "style", Se.style, Pe.style, D), ue & 8) {
        const Ce = $.dynamicProps;
        for (let Oe = 0; Oe < Ce.length; Oe++) {
          const Ue = Ce[Oe], st = Se[Ue], bt = Pe[Ue];
          (bt !== st || Ue === "value") && c(fe, Ue, st, bt, D, oe);
        }
      }
      ue & 1 && R.children !== $.children && w(fe, $.children);
    } else !ne && re == null && W(fe, Se, Pe, oe, D);
    ((d = Pe.onVnodeUpdated) || Ne) && dn(() => {
      d && Vn(d, oe, $, R), Ne && Kr($, R, oe, "updated");
    }, ve);
  }, I = (R, $, oe, ve, D, Y, ne) => {
    for (let fe = 0; fe < $.length; fe++) {
      const ue = R[fe], re = $[fe], Ne = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ha(ue, re) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 198) ? x(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      F(
        ue,
        re,
        Ne,
        null,
        ve,
        D,
        Y,
        ne,
        !0
      );
    }
  }, W = (R, $, oe, ve, D) => {
    if ($ !== oe) {
      if ($ !== mt)
        for (const Y in $)
          !Ma(Y) && !(Y in oe) && c(
            R,
            Y,
            $[Y],
            null,
            D,
            ve
          );
      for (const Y in oe) {
        if (Ma(Y)) continue;
        const ne = oe[Y], fe = $[Y];
        ne !== fe && Y !== "value" && c(R, Y, fe, ne, D, ve);
      }
      "value" in oe && c(R, "value", $.value, oe.value, D);
    }
  }, ie = (R, $, oe, ve, D, Y, ne, fe, ue) => {
    const re = $.el = R ? R.el : f(""), Ne = $.anchor = R ? R.anchor : f("");
    let { patchFlag: Se, dynamicChildren: Pe, slotScopeIds: d } = $;
    d && (fe = fe ? fe.concat(d) : d), R == null ? (i(re, oe, ve), i(Ne, oe, ve), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      $.children || [],
      oe,
      Ne,
      D,
      Y,
      ne,
      fe,
      ue
    )) : Se > 0 && Se & 64 && Pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren && R.dynamicChildren.length === Pe.length ? (I(
      R.dynamicChildren,
      Pe,
      oe,
      D,
      Y,
      ne,
      fe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    ($.key != null || D && $ === D.subTree) && Xh(
      R,
      $,
      !0
      /* shallow */
    )) : K(
      R,
      $,
      oe,
      Ne,
      D,
      Y,
      ne,
      fe,
      ue
    );
  }, ae = (R, $, oe, ve, D, Y, ne, fe, ue) => {
    $.slotScopeIds = fe, R == null ? $.shapeFlag & 512 ? D.ctx.activate(
      $,
      oe,
      ve,
      ne,
      ue
    ) : be(
      $,
      oe,
      ve,
      D,
      Y,
      ne,
      ue
    ) : Z(R, $, ue);
  }, be = (R, $, oe, ve, D, Y, ne) => {
    const fe = R.component = ry(
      R,
      ve,
      D
    );
    if (Eh(R) && (fe.ctx.renderer = Gt), ay(fe, !1, ne), fe.asyncDep) {
      if (D && D.registerDep(fe, me, ne), !R.el) {
        const ue = fe.subTree = qe(Fr);
        V(null, ue, $, oe), R.placeholder = ue.el;
      }
    } else
      me(
        fe,
        R,
        $,
        oe,
        D,
        Y,
        ne
      );
  }, Z = (R, $, oe) => {
    const ve = $.component = R.component;
    if (zb(R, $, oe))
      if (ve.asyncDep && !ve.asyncResolved) {
        P(ve, $, oe);
        return;
      } else
        ve.next = $, ve.update();
    else
      $.el = R.el, ve.vnode = $;
  }, me = (R, $, oe, ve, D, Y, ne) => {
    const fe = () => {
      if (R.isMounted) {
        let { next: Se, bu: Pe, u: d, parent: Ce, vnode: Oe } = R;
        {
          const we = Jh(R);
          if (we) {
            Se && (Se.el = Oe.el, P(R, Se, ne)), we.asyncDep.then(() => {
              dn(() => {
                R.isUnmounted || re();
              }, D);
            });
            return;
          }
        }
        let Ue = Se, st;
        Wr(R, !1), Se ? (Se.el = Oe.el, P(R, Se, ne)) : Se = Oe, Pe && Sl(Pe), (st = Se.props && Se.props.onVnodeBeforeUpdate) && Vn(st, Ce, Se, Oe), Wr(R, !0);
        const bt = Rf(R), Ae = R.subTree;
        R.subTree = bt, F(
          Ae,
          bt,
          // parent may have changed if it's in a teleport
          x(Ae.el),
          // anchor may have changed if it's in a fragment
          en(Ae),
          R,
          D,
          Y
        ), Se.el = bt.el, Ue === null && $b(R, bt.el), d && dn(d, D), (st = Se.props && Se.props.onVnodeUpdated) && dn(
          () => Vn(st, Ce, Se, Oe),
          D
        );
      } else {
        let Se;
        const { el: Pe, props: d } = $, { bm: Ce, m: Oe, parent: Ue, root: st, type: bt } = R, Ae = Aa($);
        Wr(R, !1), Ce && Sl(Ce), !Ae && (Se = d && d.onVnodeBeforeMount) && Vn(Se, Ue, $), Wr(R, !0);
        {
          st.ce && st.ce._hasShadowRoot() && st.ce._injectChildStyle(
            bt,
            R.parent ? R.parent.type : void 0
          );
          const we = R.subTree = Rf(R);
          F(
            null,
            we,
            oe,
            ve,
            R,
            D,
            Y
          ), $.el = we.el;
        }
        if (Oe && dn(Oe, D), !Ae && (Se = d && d.onVnodeMounted)) {
          const we = $;
          dn(
            () => Vn(Se, Ue, we),
            D
          );
        }
        ($.shapeFlag & 256 || Ue && Aa(Ue.vnode) && Ue.vnode.shapeFlag & 256) && R.a && dn(R.a, D), R.isMounted = !0, $ = oe = ve = null;
      }
    };
    R.scope.on();
    const ue = R.effect = new lh(fe);
    R.scope.off();
    const re = R.update = ue.run.bind(ue), Ne = R.job = ue.runIfDirty.bind(ue);
    Ne.i = R, Ne.id = R.uid, ue.scheduler = () => Dc(Ne), Wr(R, !0), re();
  }, P = (R, $, oe) => {
    $.component = R;
    const ve = R.vnode.props;
    R.vnode = $, R.next = null, Vb(R, $.props, ve, oe), Gb(R, $.children, oe), yr(), Pf(R), vr();
  }, K = (R, $, oe, ve, D, Y, ne, fe, ue = !1) => {
    const re = R && R.children, Ne = R ? R.shapeFlag : 0, Se = $.children, { patchFlag: Pe, shapeFlag: d } = $;
    if (Pe > 0) {
      if (Pe & 128) {
        Me(
          re,
          Se,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue
        );
        return;
      } else if (Pe & 256) {
        de(
          re,
          Se,
          oe,
          ve,
          D,
          Y,
          ne,
          fe,
          ue
        );
        return;
      }
    }
    d & 8 ? (Ne & 16 && Ge(re, D, Y), Se !== re && w(oe, Se)) : Ne & 16 ? d & 16 ? Me(
      re,
      Se,
      oe,
      ve,
      D,
      Y,
      ne,
      fe,
      ue
    ) : Ge(re, D, Y, !0) : (Ne & 8 && w(oe, ""), d & 16 && J(
      Se,
      oe,
      ve,
      D,
      Y,
      ne,
      fe,
      ue
    ));
  }, de = (R, $, oe, ve, D, Y, ne, fe, ue) => {
    R = R || ji, $ = $ || ji;
    const re = R.length, Ne = $.length, Se = Math.min(re, Ne);
    let Pe;
    for (Pe = 0; Pe < Se; Pe++) {
      const d = $[Pe] = ue ? hr($[Pe]) : Wn($[Pe]);
      F(
        R[Pe],
        d,
        oe,
        null,
        D,
        Y,
        ne,
        fe,
        ue
      );
    }
    re > Ne ? Ge(
      R,
      D,
      Y,
      !0,
      !1,
      Se
    ) : J(
      $,
      oe,
      ve,
      D,
      Y,
      ne,
      fe,
      ue,
      Se
    );
  }, Me = (R, $, oe, ve, D, Y, ne, fe, ue) => {
    let re = 0;
    const Ne = $.length;
    let Se = R.length - 1, Pe = Ne - 1;
    for (; re <= Se && re <= Pe; ) {
      const d = R[re], Ce = $[re] = ue ? hr($[re]) : Wn($[re]);
      if (ha(d, Ce))
        F(
          d,
          Ce,
          oe,
          null,
          D,
          Y,
          ne,
          fe,
          ue
        );
      else
        break;
      re++;
    }
    for (; re <= Se && re <= Pe; ) {
      const d = R[Se], Ce = $[Pe] = ue ? hr($[Pe]) : Wn($[Pe]);
      if (ha(d, Ce))
        F(
          d,
          Ce,
          oe,
          null,
          D,
          Y,
          ne,
          fe,
          ue
        );
      else
        break;
      Se--, Pe--;
    }
    if (re > Se) {
      if (re <= Pe) {
        const d = Pe + 1, Ce = d < Ne ? $[d].el : ve;
        for (; re <= Pe; )
          F(
            null,
            $[re] = ue ? hr($[re]) : Wn($[re]),
            oe,
            Ce,
            D,
            Y,
            ne,
            fe,
            ue
          ), re++;
      }
    } else if (re > Pe)
      for (; re <= Se; )
        $e(R[re], D, Y, !0), re++;
    else {
      const d = re, Ce = re, Oe = /* @__PURE__ */ new Map();
      for (re = Ce; re <= Pe; re++) {
        const nt = $[re] = ue ? hr($[re]) : Wn($[re]);
        nt.key != null && Oe.set(nt.key, re);
      }
      let Ue, st = 0;
      const bt = Pe - Ce + 1;
      let Ae = !1, we = 0;
      const Ln = new Array(bt);
      for (re = 0; re < bt; re++) Ln[re] = 0;
      for (re = d; re <= Se; re++) {
        const nt = R[re];
        if (st >= bt) {
          $e(nt, D, Y, !0);
          continue;
        }
        let Pt;
        if (nt.key != null)
          Pt = Oe.get(nt.key);
        else
          for (Ue = Ce; Ue <= Pe; Ue++)
            if (Ln[Ue - Ce] === 0 && ha(nt, $[Ue])) {
              Pt = Ue;
              break;
            }
        Pt === void 0 ? $e(nt, D, Y, !0) : (Ln[Pt - Ce] = re + 1, Pt >= we ? we = Pt : Ae = !0, F(
          nt,
          $[Pt],
          oe,
          null,
          D,
          Y,
          ne,
          fe,
          ue
        ), st++);
      }
      const Xe = Ae ? qb(Ln) : ji;
      for (Ue = Xe.length - 1, re = bt - 1; re >= 0; re--) {
        const nt = Ce + re, Pt = $[nt], xe = $[nt + 1], Wa = nt + 1 < Ne ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xe.el || Zh(xe)
        ) : ve;
        Ln[re] === 0 ? F(
          null,
          Pt,
          oe,
          Wa,
          D,
          Y,
          ne,
          fe,
          ue
        ) : Ae && (Ue < 0 || re !== Xe[Ue] ? H(Pt, oe, Wa, 2) : Ue--);
      }
    }
  }, H = (R, $, oe, ve, D = null) => {
    const { el: Y, type: ne, transition: fe, children: ue, shapeFlag: re } = R;
    if (re & 6) {
      H(R.component.subTree, $, oe, ve);
      return;
    }
    if (re & 128) {
      R.suspense.move($, oe, ve);
      return;
    }
    if (re & 64) {
      ne.move(R, $, oe, Gt);
      return;
    }
    if (ne === Ze) {
      i(Y, $, oe);
      for (let Se = 0; Se < ue.length; Se++)
        H(ue[Se], $, oe, ve);
      i(R.anchor, $, oe);
      return;
    }
    if (ne === Il) {
      z(R, $, oe);
      return;
    }
    if (ve !== 2 && re & 1 && fe)
      if (ve === 0)
        fe.beforeEnter(Y), i(Y, $, oe), dn(() => fe.enter(Y), D);
      else {
        const { leave: Se, delayLeave: Pe, afterLeave: d } = fe, Ce = () => {
          R.ctx.isUnmounted ? a(Y) : i(Y, $, oe);
        }, Oe = () => {
          Y._isLeaving && Y[fb](
            !0
            /* cancelled */
          ), Se(Y, () => {
            Ce(), d && d();
          });
        };
        Pe ? Pe(Y, Ce, Oe) : Oe();
      }
    else
      i(Y, $, oe);
  }, $e = (R, $, oe, ve = !1, D = !1) => {
    const {
      type: Y,
      props: ne,
      ref: fe,
      children: ue,
      dynamicChildren: re,
      shapeFlag: Ne,
      patchFlag: Se,
      dirs: Pe,
      cacheIndex: d,
      memo: Ce
    } = R;
    if (Se === -2 && (D = !1), fe != null && (yr(), Pa(fe, null, oe, R, !0), vr()), d != null && ($.renderCache[d] = void 0), Ne & 256) {
      $.ctx.deactivate(R);
      return;
    }
    const Oe = Ne & 1 && Pe, Ue = !Aa(R);
    let st;
    if (Ue && (st = ne && ne.onVnodeBeforeUnmount) && Vn(st, $, R), Ne & 6)
      kt(R.component, oe, ve);
    else {
      if (Ne & 128) {
        R.suspense.unmount(oe, ve);
        return;
      }
      Oe && Kr(R, null, $, "beforeUnmount"), Ne & 64 ? R.type.remove(
        R,
        $,
        oe,
        Gt,
        ve
      ) : re && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !re.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Y !== Ze || Se > 0 && Se & 64) ? Ge(
        re,
        $,
        oe,
        !1,
        !0
      ) : (Y === Ze && Se & 384 || !D && Ne & 16) && Ge(ue, $, oe), ve && Qe(R);
    }
    const bt = Ce != null && d == null;
    (Ue && (st = ne && ne.onVnodeUnmounted) || Oe || bt) && dn(() => {
      st && Vn(st, $, R), Oe && Kr(R, null, $, "unmounted"), bt && (R.el = null);
    }, oe);
  }, Qe = (R) => {
    const { type: $, el: oe, anchor: ve, transition: D } = R;
    if ($ === Ze) {
      pt(oe, ve);
      return;
    }
    if ($ === Il) {
      C(R);
      return;
    }
    const Y = () => {
      a(oe), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (R.shapeFlag & 1 && D && !D.persisted) {
      const { leave: ne, delayLeave: fe } = D, ue = () => ne(oe, Y);
      fe ? fe(R.el, Y, ue) : ue();
    } else
      Y();
  }, pt = (R, $) => {
    let oe;
    for (; R !== $; )
      oe = M(R), a(R), R = oe;
    a($);
  }, kt = (R, $, oe) => {
    const { bum: ve, scope: D, job: Y, subTree: ne, um: fe, m: ue, a: re } = R;
    zf(ue), zf(re), ve && Sl(ve), D.stop(), Y && (Y.flags |= 8, $e(ne, R, $, oe)), fe && dn(fe, $), dn(() => {
      R.isUnmounted = !0;
    }, $);
  }, Ge = (R, $, oe, ve = !1, D = !1, Y = 0) => {
    for (let ne = Y; ne < R.length; ne++)
      $e(R[ne], $, oe, ve, D);
  }, en = (R) => {
    if (R.shapeFlag & 6)
      return en(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const $ = M(R.anchor || R.el), oe = $ && $[cb];
    return oe ? M(oe) : $;
  };
  let mn = !1;
  const on = (R, $, oe) => {
    let ve;
    R == null ? $._vnode && ($e($._vnode, null, null, !0), ve = $._vnode.component) : F(
      $._vnode || null,
      R,
      $,
      null,
      null,
      null,
      oe
    ), $._vnode = R, mn || (mn = !0, Pf(ve), Nh(), mn = !1);
  }, Gt = {
    p: F,
    um: $e,
    m: H,
    r: Qe,
    mt: be,
    mc: J,
    pc: K,
    pbc: I,
    n: en,
    o: e
  };
  return {
    render: on,
    hydrate: void 0,
    createApp: Eb(on)
  };
}
function Tl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Wr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Xh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Be(i) && Be(a))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let f = a[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[c] = hr(a[c]), f.el = u.el), !n && f.patchFlag !== -2 && Xh(u, f)), f.type === Is && (f.patchFlag === -1 && (f = a[c] = hr(f)), f.el = u.el), f.type === Fr && !f.el && (f.el = u.el);
    }
}
function qb(e) {
  const t = e.slice(), n = [0];
  let i, a, c, u, f;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[i] = a, n.push(i);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        f = c + u >> 1, e[n[f]] < y ? c = f + 1 : u = f;
      y < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = t[u];
  return n;
}
function Jh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jh(t);
}
function zf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Zh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Zh(t.subTree) : null;
}
const Qh = (e) => e.__isSuspense;
function Xb(e, t) {
  t && t.pendingBranch ? Be(e) ? t.effects.push(...e) : t.effects.push(e) : ib(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Is = /* @__PURE__ */ Symbol.for("v-txt"), Fr = /* @__PURE__ */ Symbol.for("v-cmt"), Il = /* @__PURE__ */ Symbol.for("v-stc"), Ia = [];
let _n = null;
function ke(e = !1) {
  Ia.push(_n = e ? null : []);
}
function Jb() {
  Ia.pop(), _n = Ia[Ia.length - 1] || null;
}
let Fa = 1;
function $f(e, t = !1) {
  Fa += e, e < 0 && _n && t && (_n.hasOnce = !0);
}
function em(e) {
  return e.dynamicChildren = Fa > 0 ? _n || ji : null, Jb(), Fa > 0 && _n && _n.push(e), e;
}
function Ie(e, t, n, i, a, c) {
  return em(
    ce(
      e,
      t,
      n,
      i,
      a,
      c,
      !0
    )
  );
}
function Qi(e, t, n, i, a) {
  return em(
    qe(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function tm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ha(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nm = ({ key: e }) => e ?? null, Go = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? It(e) || /* @__PURE__ */ Zt(e) || Ke(e) ? { i: vn, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, i = 0, a = null, c = e === Ze ? 0 : 1, u = !1, f = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nm(t),
    ref: t && Go(t),
    scopeId: Ph,
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
    shapeFlag: c,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: vn
  };
  return f ? (zc(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= It(n) ? 8 : 16), Fa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  _n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && _n.push(p), p;
}
const qe = Zb;
function Zb(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === Fh) && (e = Fr), tm(e)) {
    const f = qi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zc(f, n), Fa > 0 && !c && _n && (f.shapeFlag & 6 ? _n[_n.indexOf(e)] = f : _n.push(f)), f.patchFlag = -2, f;
  }
  if (uy(e) && (e = e.__vccOpts), t) {
    t = Qb(t);
    let { class: f, style: p } = t;
    f && !It(f) && (t.class = ut(f)), ft(p) && (/* @__PURE__ */ Cc(p) && !Be(p) && (p = Qt({}, p)), t.style = Et(p));
  }
  const u = It(e) ? 1 : Qh(e) ? 128 : ub(e) ? 64 : ft(e) ? 4 : Ke(e) ? 2 : 0;
  return ce(
    e,
    t,
    n,
    i,
    a,
    u,
    c,
    !0
  );
}
function Qb(e) {
  return e ? /* @__PURE__ */ Cc(e) || Bh(e) ? Qt({}, e) : e : null;
}
function qi(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: u, children: f, transition: p } = e, y = t ? Er(a || {}, t) : a, w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && nm(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Be(c) ? c.concat(Go(t)) : [c, Go(t)] : Go(t)
    ) : c,
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
    patchFlag: t && e.type !== Ze ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qi(e.ssContent),
    ssFallback: e.ssFallback && qi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && Oc(
    w,
    p.clone(w)
  ), w;
}
function ey(e = " ", t = 0) {
  return qe(Is, null, e, t);
}
function Ft(e = "", t = !1) {
  return t ? (ke(), Qi(Fr, null, e)) : qe(Fr, null, e);
}
function Wn(e) {
  return e == null || typeof e == "boolean" ? qe(Fr) : Be(e) ? qe(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tm(e) ? hr(e) : qe(Is, null, String(e));
}
function hr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qi(e);
}
function zc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Be(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), zc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Bh(t) ? t._ctx = vn : a === 3 && vn && (vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ke(t) ? (t = { default: t, _ctx: vn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [ey(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Er(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = ut([t.class, i.class]));
      else if (a === "style")
        t.style = Et([t.style, i.style]);
      else if (_s(a)) {
        const c = t[a], u = i[a];
        u && c !== u && !(Be(c) && c.includes(u)) ? t[a] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xs(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Vn(e, t, n, i = null) {
  tr(e, t, 7, [
    n,
    i
  ]);
}
const ty = $h();
let ny = 0;
function ry(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || ty, c = {
    uid: ny++,
    vnode: e,
    type: i,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new P0(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Kh(i, a),
    emitsOptions: jh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: mt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: mt,
    data: mt,
    props: mt,
    attrs: mt,
    slots: mt,
    refs: mt,
    setupState: mt,
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = Ob.bind(null, c), e.ce && e.ce(c), c;
}
let Jt = null;
const iy = () => Jt || vn;
let ss, ac;
{
  const e = Ms(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((u) => u(c)) : a[0](c);
    };
  };
  ss = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Jt = n
  ), ac = t(
    "__VUE_SSR_SETTERS__",
    (n) => La = n
  );
}
const Ga = (e) => {
  const t = Jt;
  return ss(e), e.scope.on(), () => {
    e.scope.off(), ss(t);
  };
}, jf = () => {
  Jt && Jt.scope.off(), ss(null);
};
function rm(e) {
  return e.vnode.shapeFlag & 4;
}
let La = !1;
function ay(e, t = !1, n = !1) {
  t && ac(t);
  const { props: i, children: a } = e.vnode, c = rm(e);
  jb(e, i, c, t), Bb(e, a, n || t);
  const u = c ? oy(e, t) : void 0;
  return t && ac(!1), u;
}
function oy(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Nb);
  const { setup: i } = n;
  if (i) {
    yr();
    const a = e.setupContext = i.length > 1 ? ly(e) : null, c = Ga(e), u = Ha(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = th(u);
    if (vr(), c(), (f || e.sp) && !Aa(e) && Ch(e), f) {
      if (u.then(jf, jf), t)
        return u.then((p) => {
          Vf(e, p);
        }).catch((p) => {
          Ps(p, e, 0);
        });
      e.asyncDep = u;
    } else
      Vf(e, u);
  } else
    im(e);
}
function Vf(e, t, n) {
  Ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ft(t) && (e.setupState = wh(t)), im(e);
}
function im(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Zn);
  {
    const a = Ga(e);
    yr();
    try {
      kb(e);
    } finally {
      vr(), a();
    }
  }
}
const sy = {
  get(e, t) {
    return Xt(e, "get", ""), e[t];
  }
};
function ly(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, sy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wh(Y0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ta)
        return Ta[n](e);
    },
    has(t, n) {
      return n in t || n in Ta;
    }
  })) : e.proxy;
}
function cy(e, t = !0) {
  return Ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function uy(e) {
  return Ke(e) && "__vccOpts" in e;
}
const St = (e, t) => /* @__PURE__ */ Q0(e, t, La), fy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oc;
const Uf = typeof window < "u" && window.trustedTypes;
if (Uf)
  try {
    oc = /* @__PURE__ */ Uf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const am = oc ? (e) => oc.createHTML(e) : (e) => e, dy = "http://www.w3.org/2000/svg", hy = "http://www.w3.org/1998/Math/MathML", fr = typeof document < "u" ? document : null, Hf = fr && /* @__PURE__ */ fr.createElement("template"), my = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? fr.createElementNS(dy, e) : t === "mathml" ? fr.createElementNS(hy, e) : n ? fr.createElement(e, { is: n }) : fr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => fr.createTextNode(e),
  createComment: (e) => fr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, c) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      Hf.innerHTML = am(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Hf.content;
      if (i === "svg" || i === "mathml") {
        const p = f.firstChild;
        for (; p.firstChild; )
          f.appendChild(p.firstChild);
        f.removeChild(p);
      }
      t.insertBefore(f, n);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, py = /* @__PURE__ */ Symbol("_vtc");
function gy(e, t, n) {
  const i = e[py];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ls = /* @__PURE__ */ Symbol("_vod"), om = /* @__PURE__ */ Symbol("_vsh"), Ka = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ls] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ma(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ma(e, !0), i.enter(e)) : i.leave(e, () => {
      ma(e, !1);
    }) : ma(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ma(e, t);
  }
};
function ma(e, t) {
  e.style.display = t ? e[ls] : "none", e[om] = !t;
}
const by = /* @__PURE__ */ Symbol(""), yy = /(?:^|;)\s*display\s*:/;
function vy(e, t, n) {
  const i = e.style, a = It(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (It(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Ko(i, f, "");
        }
      else
        for (const u in t)
          n[u] == null && Ko(i, u, "");
    for (const u in n)
      u === "display" && (c = !0), Ko(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[by];
      u && (n += ";" + u), i.cssText = n, c = yy.test(n);
    }
  } else t && e.removeAttribute("style");
  ls in e && (e[ls] = c ? i.display : "", e[om] && (i.display = "none"));
}
const Bf = /\s*!important$/;
function Ko(e, t, n) {
  if (Be(n))
    n.forEach((i) => Ko(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = _y(e, t);
    Bf.test(n) ? e.setProperty(
      ui(i),
      n.replace(Bf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Gf = ["Webkit", "Moz", "ms"], Cl = {};
function _y(e, t) {
  const n = Cl[t];
  if (n)
    return n;
  let i = an(t);
  if (i !== "filter" && i in e)
    return Cl[t] = i;
  i = Ss(i);
  for (let a = 0; a < Gf.length; a++) {
    const c = Gf[a] + i;
    if (c in e)
      return Cl[t] = c;
  }
  return t;
}
const Kf = "http://www.w3.org/1999/xlink";
function Wf(e, t, n, i, a, c = N0(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Kf, t.slice(6, t.length)) : e.setAttributeNS(Kf, t, n) : n == null || c && !ah(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : er(n) ? String(n) : n
  );
}
function Yf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? am(n) : n);
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const f = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = ah(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function xy(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function wy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const qf = /* @__PURE__ */ Symbol("_vei");
function Sy(e, t, n, i, a = null) {
  const c = e[qf] || (e[qf] = {}), u = c[t];
  if (i && u)
    u.value = i;
  else {
    const [f, p] = My(t);
    if (i) {
      const y = c[t] = Py(
        i,
        a
      );
      xy(e, f, y, p);
    } else u && (wy(e, f, u, p), c[t] = void 0);
  }
}
const Xf = /(?:Once|Passive|Capture)$/;
function My(e) {
  let t;
  if (Xf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Xf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ui(e.slice(2)), t];
}
let El = 0;
const Ny = /* @__PURE__ */ Promise.resolve(), ky = () => El || (Ny.then(() => El = 0), El = Date.now());
function Py(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    tr(
      Ay(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = ky(), n;
}
function Ay(e, t) {
  if (Be(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const Jf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ty = (e, t, n, i, a, c) => {
  const u = a === "svg";
  t === "class" ? gy(e, i, u) : t === "style" ? vy(e, n, i) : _s(t) ? xs(t) || Sy(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Iy(e, t, i, u)) ? (Yf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wf(e, t, i, u, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !It(i))) ? Yf(e, an(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Wf(e, t, i, u));
};
function Iy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jf(t) && Ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Jf(t) && It(n) ? !1 : t in e;
}
function Cy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = an(t);
  return Array.isArray(n) ? n.some((a) => an(a) === i) : Object.keys(n).some((a) => an(a) === i);
}
const Ey = ["ctrl", "shift", "alt", "meta"], Dy = {
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
  exact: (e, t) => Ey.some((n) => e[`${n}Key`] && !t.includes(n))
}, sm = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let u = 0; u < t.length; u++) {
      const f = Dy[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...c);
  }));
}, Oy = /* @__PURE__ */ Qt({ patchProp: Ty }, my);
let Zf;
function Ry() {
  return Zf || (Zf = Kb(Oy));
}
const Fy = ((...e) => {
  const t = Ry().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = zy(i);
    if (!a) return;
    const c = t._component;
    !Ke(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, Ly(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function Ly(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zy(e) {
  return It(e) ? document.querySelector(e) : e;
}
const Nt = Math.PI / 180, lm = Math.PI * 2, $y = 2048;
function ht(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Lr(e, t, n) {
  return { x: e, y: t, z: n };
}
function cs(e, t) {
  return Lr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function $i(e, t) {
  return Lr(e.x * t, e.y * t, e.z * t);
}
function Wo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Qf(e, t) {
  return Lr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function xa(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Lr(e.x / t, e.y / t, e.z / t);
}
function jy(e, t) {
  const n = Number(e || 0) * Nt, i = Number(t || 0) * Nt, a = Math.cos(i);
  return Lr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Yo(e, t, n = 0) {
  const i = jy(e, t);
  let a = Lr(0, 1, 0);
  Math.abs(Wo(i, a)) > 0.999 && (a = Lr(0, 0, 1));
  let c = xa(Qf(a, i)), u = xa(Qf(i, c));
  const f = Number(n || 0) * Nt, p = Math.cos(f), y = Math.sin(f), w = cs($i(c, p), $i(u, y)), x = cs($i(c, -y), $i(u, p));
  return c = xa(w), u = xa(x), { fwd: i, right: c, up: u };
}
function Vy(e, t) {
  const n = (Number(e || 0) - 0.5) * lm, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Lr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function ed(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, $y), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function td(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Dl(e, t, n) {
  const i = td(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = td(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const c = e.createProgram();
  if (e.attachShader(c, i), e.attachShader(c, a), e.linkProgram(c), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(c, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(c) || "program link failed";
    throw e.deleteProgram(c), new Error(u);
  }
  return c;
}
const Ol = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Uy = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform int u_coverage;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectCameraUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  if (u_coverage == 180) {
    if (abs(lon) > PI * 0.5) return vec2(-1.0, -1.0);
    float localU = clamp(lon / PI + 0.5, 0.0, 1.0);
    return vec2(localU, clamp(0.5 - lat / PI, 0.0, 1.0));
  }
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  bool bgVisible = true;
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) {
    bgVisible = false;
    sampleUv = vec2(0.5, 0.5);
  }
  vec4 bg = bgVisible ? texture(u_background, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  outColor = vec4(premul, alpha);
}`, Hy = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform float u_paintOpacity;
uniform float u_maskOpacity;
uniform int u_hasPaint;
uniform int u_hasMask;
uniform int u_showMaskTint;
uniform vec3 u_maskTint;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectLayerUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 layerUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    layerUv = projectLayerUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, layerUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, layerUv) : vec4(0.0);
  vec3 premul = vec3(0.0);
  float alpha = 0.0;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`, By = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_texture;
uniform int u_mode;

uniform vec3 u_viewRight;
uniform vec3 u_viewUp;
uniform vec3 u_viewFwd;
uniform float u_viewHfov;
uniform float u_viewVfov;

uniform vec3 u_stickerRight;
uniform vec3 u_stickerUp;
uniform vec3 u_stickerFwd;
uniform float u_stickerTanX;
uniform float u_stickerTanY;
uniform vec4 u_crop;
uniform float u_opacity;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 dirFromUnwrapUv(vec2 uv) {
  float lon = (uv.x - 0.5) * TWO_PI;
  float lat = (0.5 - uv.y) * PI;
  float cp = cos(lat);
  return vec3(cp * sin(lon), sin(lat), cp * cos(lon));
}

vec3 dirFromProjectedView(vec2 uv) {
  float nx = (uv.x * 2.0 - 1.0) * tan(u_viewHfov * 0.5);
  float ny = (1.0 - uv.y * 2.0) * tan(u_viewVfov * 0.5);
  return normalize(u_viewFwd + u_viewRight * nx + u_viewUp * ny);
}

void main() {
  vec3 dir = (u_mode == 0) ? dirFromUnwrapUv(v_uv) : dirFromProjectedView(v_uv);
  float dz = dot(dir, u_stickerFwd);
  if (dz <= 1e-5) discard;

  float px = dot(dir, u_stickerRight) / dz;
  float py = dot(dir, u_stickerUp) / dz;
  float fullU = px / max(u_stickerTanX, 1e-6) * 0.5 + 0.5;
  float fullV = 0.5 - py / max(u_stickerTanY, 1e-6) * 0.5;

  if (fullU < u_crop.x || fullU > u_crop.z || fullV < u_crop.y || fullV > u_crop.w) discard;

  vec2 cropSize = max(u_crop.zw - u_crop.xy, vec2(1e-4));
  vec2 texUv = vec2((fullU - u_crop.x) / cropSize.x, (fullV - u_crop.y) / cropSize.y);
  vec4 texel = texture(u_texture, texUv);
  float alpha = clamp(texel.a * u_opacity, 0.0, 1.0);
  outColor = vec4(texel.rgb * u_opacity, alpha);
}`;
function pa(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(ht(i, 1, 179) * Nt * 0.5) * (n / Math.max(t, 1))) / Nt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: ht(i, 1, 179),
    vFovDeg: ht(a, 0.1, 179)
  };
}
function Gy(e) {
  const t = Yo(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(ht(Number(e.hFovDeg), 0.1, 179) * 0.5 * Nt),
    tanY: Math.tan(ht(Number(e.vFovDeg), 0.1, 179) * 0.5 * Nt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ht(Number(e.opacity ?? 1), 0, 1)
  };
}
function Ky(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, c = null, u = null, f = null, p = null, y = null, w = null, x = null, M = null, A = !1, _ = ed(1, 1, 1), F = null, U = null, V = null, k = null, z = null;
  const C = /* @__PURE__ */ new Map();
  let O = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, j = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, q = {
    paint: !1,
    mask: !1
  };
  function J(D = null, Y = null) {
    const ne = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ne), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, D ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Y ?? n.CLAMP_TO_EDGE), ne;
  }
  function ee() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = Dl(n, Ol, Uy), a = Dl(n, Ol, Hy), c = Dl(n, Ol, By), F = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        coverage: n.getUniformLocation(i, "u_coverage"),
        background: n.getUniformLocation(i, "u_background")
      }, U = {
        mode: n.getUniformLocation(a, "u_mode"),
        yaw: n.getUniformLocation(a, "u_yaw"),
        pitch: n.getUniformLocation(a, "u_pitch"),
        roll: n.getUniformLocation(a, "u_roll"),
        hFov: n.getUniformLocation(a, "u_hfov"),
        vFov: n.getUniformLocation(a, "u_vfov"),
        paintOpacity: n.getUniformLocation(a, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(a, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(a, "u_hasPaint"),
        hasMask: n.getUniformLocation(a, "u_hasMask"),
        showMaskTint: n.getUniformLocation(a, "u_showMaskTint"),
        maskTint: n.getUniformLocation(a, "u_maskTint"),
        paint: n.getUniformLocation(a, "u_paint"),
        mask: n.getUniformLocation(a, "u_mask")
      }, V = {
        texture: n.getUniformLocation(c, "u_texture"),
        mode: n.getUniformLocation(c, "u_mode"),
        viewRight: n.getUniformLocation(c, "u_viewRight"),
        viewUp: n.getUniformLocation(c, "u_viewUp"),
        viewFwd: n.getUniformLocation(c, "u_viewFwd"),
        viewHfov: n.getUniformLocation(c, "u_viewHfov"),
        viewVfov: n.getUniformLocation(c, "u_viewVfov"),
        stickerRight: n.getUniformLocation(c, "u_stickerRight"),
        stickerUp: n.getUniformLocation(c, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(c, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(c, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(c, "u_stickerTanY"),
        crop: n.getUniformLocation(c, "u_crop"),
        opacity: n.getUniformLocation(c, "u_opacity")
      }, u = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, u), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]), n.STATIC_DRAW), f = J(n.REPEAT, n.CLAMP_TO_EDGE), p = J(n.REPEAT, n.CLAMP_TO_EDGE), y = J(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function I() {
    var D;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), p && n.deleteTexture(p), y && n.deleteTexture(y), C.forEach((Y) => {
          Me(Y);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (D = n.getExtension("WEBGL_lose_context")) == null || D.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, u = null, f = null, p = null, y = null, C.clear(), w = null, x = null, M = null, j = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, q = {
        paint: !1,
        mask: !1
      }, k = null, z = null, A = !1;
    }
  }
  function W(D, Y, ne = 1) {
    _ = ed(D, Y, ne), (t.width !== _.width || t.height !== _.height) && (t.width = _.width, t.height = _.height);
  }
  function ie(D) {
    D === "background" ? w = null : D === "paint" ? x = null : M = null, j[D] && (j[D].width = 0, j[D].height = 0);
  }
  function ae() {
    q.paint = !1, q.mask = !1;
  }
  function be(D) {
    ae(), D === "paint" ? q.paint = !0 : D === "mask" && (q.mask = !0);
  }
  function Z(D, Y, ne = [], fe = { width: 0, height: 0 }, ue = !1) {
    if (!n || !D || !Y) return !1;
    const re = Number(Y.width || Y.videoWidth || Y.naturalWidth || 0), Ne = Number(Y.height || Y.videoHeight || Y.naturalHeight || 0);
    if (!(re > 1) || !(Ne > 1)) return !1;
    const Se = Array.isArray(ne) ? ne.filter((Pe) => Pe && Pe.w > 0 && Pe.h > 0) : [];
    if (!Se.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ue ? 1 : 0), fe.width !== re || fe.height !== Ne)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), fe.width = re, fe.height = Ne, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (k || (k = document.createElement("canvas"), z = k.getContext("2d")), !z)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Pe of Se) {
      const d = Math.max(0, Math.floor(Number(Pe.x || 0))), Ce = Math.max(0, Math.floor(Number(Pe.y || 0))), Oe = Math.min(re - d, Math.ceil(Number(Pe.w || 0))), Ue = Math.min(Ne - Ce, Math.ceil(Number(Pe.h || 0)));
      if (!(Oe <= 0 || Ue <= 0)) {
        if (k.width !== Oe || k.height !== Ue) {
          if (k.width = Oe, k.height = Ue, z = k.getContext("2d"), !z)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Y), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          z.clearRect(0, 0, Oe, Ue);
        z.drawImage(Y, d, Ce, Oe, Ue, 0, 0, Oe, Ue), n.texSubImage2D(n.TEXTURE_2D, 0, d, Ce, n.RGBA, n.UNSIGNED_BYTE, k);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function me(D, Y, ne, fe, ue = null, re = !1) {
    if (!ee()) return !1;
    if (!ne)
      return ie(D), !1;
    const Ne = String(fe ?? ""), Se = D === "background" ? w : D === "paint" ? x : M, Pe = j[D], d = Number(ne.width || ne.videoWidth || ne.naturalWidth || 0), Ce = Number(ne.height || ne.videoHeight || ne.naturalHeight || 0), Oe = Pe.width !== d || Pe.height !== Ce;
    if (Se === Ne && !Oe && !(Array.isArray(ue) && ue.length)) return !0;
    if (!(d > 0) || !(Ce > 0))
      return ie(D), !1;
    if (n.bindTexture(n.TEXTURE_2D, Y), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, re ? 1 : 0), !(Array.isArray(ue) && ue.length ? Z(Y, ne, ue, Pe, re) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ne), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ie(D), !1;
      Pe.width = d, Pe.height = Ce;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), D === "background" ? w = Ne : D === "paint" ? x = Ne : M = Ne, !0;
  }
  function P(D, Y) {
    return me("background", f, D, Y, null, !0);
  }
  function K(D, Y, ne = null) {
    return me("paint", p, D, Y, ne, !0);
  }
  function de(D, Y, ne = null) {
    return me("mask", y, D, Y, ne, !0);
  }
  function Me(D) {
    D != null && D.texture && n && n.deleteTexture(D.texture);
  }
  function H(D = /* @__PURE__ */ new Set()) {
    C.forEach((Y, ne) => {
      D.has(ne) || (Me(Y), C.delete(ne));
    });
  }
  function $e(D) {
    if (!n || !(D != null && D.assetId) || !(D != null && D.source)) return null;
    const Y = String(D.assetId), ne = String(D.revision ?? ""), fe = D.source, ue = Number(fe.width || fe.naturalWidth || fe.videoWidth || 0), re = Number(fe.height || fe.naturalHeight || fe.videoHeight || 0);
    if (ue <= 0 || re <= 0) return null;
    let Ne = C.get(Y);
    if (Ne || (Ne = {
      texture: J(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, C.set(Y, Ne)), Ne.revision !== ne || Ne.width !== ue || Ne.height !== re) {
      if (n.bindTexture(n.TEXTURE_2D, Ne.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, fe), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Ne.revision = ne, Ne.width = ue, Ne.height = re;
    }
    return Ne.texture;
  }
  function Qe(D = []) {
    if (!ee()) return !1;
    const Y = /* @__PURE__ */ new Set();
    return D.forEach((ne) => {
      !(ne != null && ne.assetId) || !(ne != null && ne.source) || (Y.add(String(ne.assetId)), $e(ne));
    }), H(Y), !0;
  }
  function pt() {
    return ee() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function kt(D) {
    n.useProgram(D), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ge(D, Y = {}) {
    if (!w) return null;
    n.disable(n.BLEND), kt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(F.background, 0), n.uniform2f(F.viewport, Math.max(1, _.width), Math.max(1, _.height)), n.uniform1i(F.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ne = pa(D, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(F.yaw, Number(ne.yawDeg || 0) * Nt), n.uniform1f(F.pitch, Number(ne.pitchDeg || 0) * Nt), n.uniform1f(F.roll, Number(ne.rollDeg || 0) * Nt), n.uniform1f(F.hFov, ht(Number(ne.hFovDeg || 90), 0.1, 179) * Nt), n.uniform1f(F.vFov, ht(Number(ne.vFovDeg || 60), 0.1, 179) * Nt), n.uniform1f(F.opacity, ht(Number(Y.backgroundOpacity ?? 1), 0, 1));
    const fe = Number((D == null ? void 0 : D.coverageDeg) || (Y == null ? void 0 : Y.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(F.coverage, fe), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function en(D, Y = {}) {
    const ne = q.paint && x != null, fe = q.mask && M != null;
    if (!ne && !fe) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), kt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(U.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(U.mask, 1), n.uniform1i(U.mode, (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1);
    const ue = pa(D, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(U.yaw, Number(ue.yawDeg || 0) * Nt), n.uniform1f(U.pitch, Number(ue.pitchDeg || 0) * Nt), n.uniform1f(U.roll, Number(ue.rollDeg || 0) * Nt), n.uniform1f(U.hFov, ht(Number(ue.hFovDeg || 90), 0.1, 179) * Nt), n.uniform1f(U.vFov, ht(Number(ue.vFovDeg || 60), 0.1, 179) * Nt), n.uniform1f(U.paintOpacity, ht(Number(Y.paintOpacity ?? 1), 0, 1)), n.uniform1f(U.maskOpacity, ht(Number(Y.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(U.hasPaint, ne ? 1 : 0), n.uniform1i(U.hasMask, fe ? 1 : 0), n.uniform1i(U.showMaskTint, Y.showMaskTint === !1 ? 0 : 1), n.uniform3f(U.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function mn(D, Y) {
    var Pe, d, Ce, Oe, Ue, st, bt;
    const ne = Array.isArray(D == null ? void 0 : D.objects) ? D.objects : [];
    if (!ne.length) {
      ae(), H(/* @__PURE__ */ new Set());
      return;
    }
    const fe = (Y == null ? void 0 : Y.mode) === "unwrap" ? 0 : (Y == null ? void 0 : Y.mode) === "cutout" ? 2 : 1, ue = pa(Y, _.width, _.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, re = Yo(ue.yawDeg, ue.pitchDeg, ue.rollDeg), Ne = ne.slice().sort((Ae, we) => Number((Ae == null ? void 0 : Ae.zIndex) || 0) - Number((we == null ? void 0 : we.zIndex) || 0)), Se = /* @__PURE__ */ new Set();
    ae();
    for (const Ae of Ne)
      if (!(!Ae || Ae.visible === !1)) {
        if (Ae.type === "sticker") {
          const we = String(((Pe = Ae == null ? void 0 : Ae.params) == null ? void 0 : Pe.assetId) || (Ae == null ? void 0 : Ae.id) || "");
          if (!we) continue;
          Se.add(we);
          const Ln = $e({
            assetId: we,
            source: Ae.source,
            revision: Ae.revision
          });
          if (!Ln) continue;
          const Xe = Gy({
            yawDeg: ((d = Ae == null ? void 0 : Ae.transform) == null ? void 0 : d.yawDeg) || 0,
            pitchDeg: ((Ce = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ce.pitchDeg) || 0,
            rollDeg: ((Oe = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Oe.rollDeg) || 0,
            hFovDeg: ((Ue = Ae == null ? void 0 : Ae.transform) == null ? void 0 : Ue.hFovDeg) || 30,
            vFovDeg: ((st = Ae == null ? void 0 : Ae.transform) == null ? void 0 : st.vFovDeg) || 30,
            crop: ((bt = Ae == null ? void 0 : Ae.params) == null ? void 0 : bt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Ae == null ? void 0 : Ae.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), kt(c), n.uniform1i(V.texture, 0), n.uniform1i(V.mode, fe), n.uniform3f(V.viewRight, re.right.x, re.right.y, re.right.z), n.uniform3f(V.viewUp, re.up.x, re.up.y, re.up.z), n.uniform3f(V.viewFwd, re.fwd.x, re.fwd.y, re.fwd.z), n.uniform1f(V.viewHfov, ht(Number(ue.hFovDeg || 90), 0.1, 179) * Nt), n.uniform1f(V.viewVfov, ht(Number(ue.vFovDeg || 60), 0.1, 179) * Nt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Ln), n.uniform3f(V.stickerRight, Xe.right.x, Xe.right.y, Xe.right.z), n.uniform3f(V.stickerUp, Xe.up.x, Xe.up.y, Xe.up.z), n.uniform3f(V.stickerFwd, Xe.fwd.x, Xe.fwd.y, Xe.fwd.z), n.uniform1f(V.stickerTanX, Math.max(1e-6, Xe.tanX)), n.uniform1f(V.stickerTanY, Math.max(1e-6, Xe.tanY)), n.uniform4f(
            V.crop,
            ht(Number(Xe.crop.x0 ?? 0), 0, 1),
            ht(Number(Xe.crop.y0 ?? 0), 0, 1),
            ht(Number(Xe.crop.x1 ?? 1), 0, 1),
            ht(Number(Xe.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(V.opacity, Xe.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Ae.type === "paint" || Ae.type === "raster") {
          if (!K(Ae.source, Ae.revision ?? "")) continue;
          be("paint"), en(Y, {
            paintOpacity: Number(Ae.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Ae.type === "mask") {
          if (!de(Ae.source, Ae.revision ?? "")) continue;
          be("mask"), en(Y, {
            paintOpacity: 0,
            maskOpacity: Number(Ae.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    H(Se), ae();
  }
  function on(D) {
    return !pt() || !w ? null : (Ge({
      mode: "panorama",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      fovDeg: (D == null ? void 0 : D.fovDeg) || 100
    }, D), t);
  }
  function Gt(D) {
    return !pt() || !w ? null : (Ge({ mode: "unwrap" }, D), t);
  }
  function sn(D) {
    return !pt() || !w ? null : (Ge({
      mode: "cutout",
      yawDeg: (D == null ? void 0 : D.yawDeg) || 0,
      pitchDeg: (D == null ? void 0 : D.pitchDeg) || 0,
      rollDeg: (D == null ? void 0 : D.rollDeg) || 0,
      hFovDeg: (D == null ? void 0 : D.hFovDeg) || 90,
      vFovDeg: (D == null ? void 0 : D.vFovDeg) || 60
    }, D), t);
  }
  function R(D = {}) {
    if (!ee() || (W(D.width, D.height, D.dpr || 1), !pt())) return null;
    const Y = Object.prototype.hasOwnProperty.call(D, "backgroundSource"), ne = Object.prototype.hasOwnProperty.call(D, "paintSource"), fe = Object.prototype.hasOwnProperty.call(D, "maskSource"), ue = Object.prototype.hasOwnProperty.call(D, "textures"), re = Object.prototype.hasOwnProperty.call(D, "scene");
    return Y && P(D.backgroundSource, D.backgroundRevision ?? ""), ne && K(D.paintSource, D.paintRevision ?? ""), fe && de(D.maskSource, D.maskRevision ?? ""), ue && (Qe(D.textures || []), O.textures = D.textures || []), re && (O.scene = D.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "objectPass") && (O.objectPass = D.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(D, "backgroundOpacity") && (O.backgroundOpacity = Number(D.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(D, "showMaskTint") && (O.showMaskTint = D.showMaskTint === !0), Object.prototype.hasOwnProperty.call(D, "coverageDeg") && (O.coverageDeg = Number(D.coverageDeg || 360) === 180 ? 180 : 360), w && Ge(D.view, {
      ...D,
      backgroundOpacity: Number(D.backgroundOpacity ?? O.backgroundOpacity ?? 1),
      coverageDeg: Number(D.coverageDeg || O.coverageDeg || 360) === 180 ? 180 : 360
    }), mn(
      O.objectPass || { objects: [] },
      D.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function $(D = {}) {
    return ee() ? !!R({
      ...D,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(D.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function oe(D, Y, ne) {
    const fe = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || _.sourceWidth || _.width || 1)), ue = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || _.sourceHeight || _.height || 1)), re = Number(Y), Ne = Number(ne);
    if (!Number.isFinite(re) || !Number.isFinite(Ne)) return null;
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return { u: (re / fe % 1 + 1) % 1, v: ht(Ne / ue, 0, 1) };
    const Se = pa(D, fe, ue);
    if (!Se) return null;
    const Pe = Yo(Se.yawDeg, Se.pitchDeg, Se.rollDeg), d = (re - fe * 0.5) / (fe * 0.5) * Math.tan(ht(Se.hFovDeg, 1, 179) * Nt * 0.5), Ce = (ue * 0.5 - Ne) / (ue * 0.5) * Math.tan(ht(Se.vFovDeg, 0.1, 179) * Nt * 0.5), Oe = xa(cs(cs($i(Pe.right, d), $i(Pe.up, Ce)), Pe.fwd));
    return {
      u: (Math.atan2(Oe.x, Oe.z) / lm + 0.5 + 1) % 1,
      v: ht(0.5 - Math.asin(ht(Oe.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ve(D, Y, ne) {
    const fe = Math.max(1, Number((D == null ? void 0 : D.viewportWidth) || _.sourceWidth || _.width || 1)), ue = Math.max(1, Number((D == null ? void 0 : D.viewportHeight) || _.sourceHeight || _.height || 1));
    if ((D == null ? void 0 : D.mode) === "unwrap")
      return {
        x: (Number(Y || 0) % 1 + 1) % 1 * fe,
        y: ht(Number(ne || 0), 0, 1) * ue,
        visible: !0
      };
    const re = pa(D, fe, ue);
    if (!re)
      return { x: fe * 0.5, y: ue * 0.5, visible: !1 };
    const Ne = Yo(re.yawDeg, re.pitchDeg, re.rollDeg), Se = Vy(Y, ne), Pe = Wo(Se, Ne.right), d = Wo(Se, Ne.up), Ce = Wo(Se, Ne.fwd);
    if (Ce <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Oe = fe * 0.5 + Pe / Ce * (fe * 0.5 / Math.tan(ht(re.hFovDeg, 1, 179) * Nt * 0.5)), Ue = ue * 0.5 - d / Ce * (ue * 0.5 / Math.tan(ht(re.vFovDeg, 0.1, 179) * Nt * 0.5));
    return { x: Oe, y: Ue, visible: Oe >= 0 && Oe <= fe && Ue >= 0 && Ue <= ue };
  }
  return {
    init: ee,
    dispose: I,
    setViewport: W,
    setBackgroundErp: P,
    setPaintErp: K,
    setMaskErp: de,
    renderPanorama: on,
    renderUnwrap: Gt,
    renderCutout: sn,
    renderScene: R,
    syncState: $,
    screenToErpUv: oe,
    erpUvToScreen: ve,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ee();
    },
    getViewport() {
      return { ..._ };
    }
  };
}
function nd(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Wy() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, p) {
    const y = t(u);
    let w = e.get(y) || null;
    if (!w) {
      const A = document.createElement("canvas"), _ = A.getContext("2d");
      if (!_) return null;
      w = {
        id: y,
        canvas: A,
        ctx: _,
        width: 0,
        height: 0
      }, e.set(y, w);
    }
    const x = nd(f), M = nd(p);
    return w.width !== x && (w.canvas.width = x, w.width = x), w.height !== M && (w.canvas.height = M, w.height = M), w;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = i(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function c() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: c
  };
}
const Yy = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), qy = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function cm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Xy(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Jy(e = {}) {
  const t = qy.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? cm(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Zy(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Yy.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? cm(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Xy(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Qy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Zy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== u ? c - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Xi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Jy((e == null ? void 0 : e.background) || {}),
    objectPass: Qy((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function ev(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $c(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? ev(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function tv(e, t, n = {}) {
  return e ? $c({
    id: String((n == null ? void 0 : n.id) || "paint_layer"),
    type: "paint",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 100),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "paint") : null;
}
function nv(e, t, n = {}) {
  return e ? $c({
    id: String((n == null ? void 0 : n.id) || "mask_layer"),
    type: "mask",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 110),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "mask") : null;
}
function rv(e, t, n = {}) {
  return e ? $c({
    id: String((n == null ? void 0 : n.id) || "raster_layer"),
    type: "raster",
    source: e,
    revision: t,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 90),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    transform: (n == null ? void 0 : n.transform) || null,
    params: (n == null ? void 0 : n.params) || {}
  }, "raster") : null;
}
function um(e = {}) {
  const t = [], n = tv(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = nv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, u) => {
    const f = rv(
      (c == null ? void 0 : c.source) || null,
      (c == null ? void 0 : c.revision) || "",
      {
        id: String((c == null ? void 0 : c.id) || `raster_layer_${u}`),
        zIndex: Number((c == null ? void 0 : c.zIndex) ?? (c == null ? void 0 : c.z_index) ?? 90),
        opacity: Number((c == null ? void 0 : c.opacity) ?? 1),
        visible: (c == null ? void 0 : c.visible) !== !1,
        transform: (c == null ? void 0 : c.transform) || null,
        params: (c == null ? void 0 : c.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((c, u) => {
    const f = Number((c == null ? void 0 : c.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== p ? f - p : String((c == null ? void 0 : c.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function jc(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((i) => {
    const a = n.get(String((i == null ? void 0 : i.assetId) || ""));
    return a ? {
      id: String((i == null ? void 0 : i.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((i == null ? void 0 : i.zIndex) || 0),
      opacity: Number((i == null ? void 0 : i.opacity) ?? 1),
      visible: (i == null ? void 0 : i.visible) !== !1,
      transform: {
        yawDeg: Number((i == null ? void 0 : i.yawDeg) || 0),
        pitchDeg: Number((i == null ? void 0 : i.pitchDeg) || 0),
        rollDeg: Number((i == null ? void 0 : i.rollDeg) || 0),
        hFovDeg: Number((i == null ? void 0 : i.hFovDeg) || 30),
        vFovDeg: Number((i == null ? void 0 : i.vFovDeg) || 30)
      },
      params: {
        assetId: String((i == null ? void 0 : i.assetId) || ""),
        crop: (i == null ? void 0 : i.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function Es(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Xi({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: t,
      revision: u,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: jc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function wa(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = jc(t, n), a = um({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Xi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: {
      type: "erp_image",
      source: (e == null ? void 0 : e.backgroundSource) || null,
      revision: String((e == null ? void 0 : e.backgroundRevision) || ""),
      coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [...i, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function iv(e = {}) {
  var c, u, f, p, y, w, x, M;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Xi(e), _ = Array.isArray((c = A.objectPass) == null ? void 0 : c.objects) ? A.objectPass.objects : [], F = {
      stickers: _.filter((z) => z.type === "sticker").map((z) => {
        var C, O, j, q, J, ee, I, W, ie, ae, be, Z, me;
        return {
          id: z.id,
          assetId: String(((C = z == null ? void 0 : z.params) == null ? void 0 : C.assetId) || ((O = z == null ? void 0 : z.params) == null ? void 0 : O.asset_id) || (z == null ? void 0 : z.id) || ""),
          yawDeg: Number(((j = z == null ? void 0 : z.transform) == null ? void 0 : j.yawDeg) ?? ((q = z == null ? void 0 : z.params) == null ? void 0 : q.yawDeg) ?? 0),
          pitchDeg: Number(((J = z == null ? void 0 : z.transform) == null ? void 0 : J.pitchDeg) ?? ((ee = z == null ? void 0 : z.params) == null ? void 0 : ee.pitchDeg) ?? 0),
          rollDeg: Number(((I = z == null ? void 0 : z.transform) == null ? void 0 : I.rollDeg) ?? ((W = z == null ? void 0 : z.params) == null ? void 0 : W.rollDeg) ?? 0),
          hFovDeg: Number(((ie = z == null ? void 0 : z.transform) == null ? void 0 : ie.hFovDeg) ?? ((ae = z == null ? void 0 : z.params) == null ? void 0 : ae.hFovDeg) ?? 30),
          vFovDeg: Number(((be = z == null ? void 0 : z.transform) == null ? void 0 : be.vFovDeg) ?? ((Z = z == null ? void 0 : z.params) == null ? void 0 : Z.vFovDeg) ?? 30),
          crop: ((me = z == null ? void 0 : z.params) == null ? void 0 : me.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((z == null ? void 0 : z.opacity) ?? 1),
          visible: (z == null ? void 0 : z.visible) !== !1,
          zIndex: Number((z == null ? void 0 : z.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = A.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, U = _.filter((z) => z.type === "sticker").map((z) => {
      var C, O;
      return {
        assetId: String(((C = z == null ? void 0 : z.params) == null ? void 0 : C.assetId) || ((O = z == null ? void 0 : z.params) == null ? void 0 : O.asset_id) || (z == null ? void 0 : z.id) || ""),
        source: z.source || null,
        revision: String((z == null ? void 0 : z.revision) || "")
      };
    }).filter((z) => z.assetId && z.source), V = _.find((z) => z.type === "paint") || null, k = _.find((z) => z.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = A.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((y = A.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((w = A.background) == null ? void 0 : w.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (V == null ? void 0 : V.source) || null,
      paintRevision: String((V == null ? void 0 : V.revision) || ""),
      maskSource: (k == null ? void 0 : k.source) || null,
      maskRevision: String((k == null ? void 0 : k.revision) || ""),
      textures: U,
      scene: F,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((x = A.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((M = e == null ? void 0 : e.overlay) == null ? void 0 : M.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Xi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...jc(t, n),
        ...um({
          paintSource: e.paintSource || i.paintSource || null,
          paintRevision: e.paintRevision || i.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || i.maskSource || null,
          maskRevision: e.maskRevision || i.maskRevision || "",
          maskOptions: e.maskOptions || null,
          rasterEntries: e.rasterEntries || []
        })
      ]
    }
  }).objectPass;
  return {
    stateRevision: String(e.stateRevision || ""),
    backgroundSource: e.backgroundSource || null,
    backgroundRevision: String(e.backgroundRevision || ""),
    coverageDeg: Number(e.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: i.paintSource || null,
    paintRevision: String(i.paintRevision || ""),
    maskSource: i.maskSource || null,
    maskRevision: String(i.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function av(e) {
  let t = null;
  function n(c = {}) {
    const u = iv(c);
    return e.syncState({
      stateRevision: u.stateRevision,
      backgroundSource: u.backgroundSource,
      backgroundRevision: u.backgroundRevision,
      coverageDeg: u.coverageDeg,
      paintSource: u.paintSource,
      paintRevision: u.paintRevision,
      maskSource: u.maskSource,
      maskRevision: u.maskRevision,
      textures: u.textures,
      scene: u.scene,
      objectPass: u.objectPass,
      backgroundOpacity: u.backgroundOpacity,
      showMaskTint: u.showMaskTint
    }) ? (t = u, !0) : !1;
  }
  function i() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: i,
    clear: a
  };
}
function ai(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (U) => Ky(U), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Wy(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (U) => av(U), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const p = i({
    syncState(U = {}) {
      if (typeof a.syncState == "function") {
        const V = { ...U }, k = a.syncState(V);
        return k && (f = V, k);
      }
      return f = { ...U }, !0;
    }
  });
  function y(U = {}) {
    return p.sync(U);
  }
  function w(U = {}, V = {}) {
    return f ? a.renderScene({
      ...f,
      view: U,
      width: V.width,
      height: V.height,
      dpr: V.dpr,
      backgroundOpacity: V.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: V.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function x(U, V, k = {}, z = {}) {
    if (!V) return !1;
    const C = w(k, {
      ...z,
      width: V.w,
      height: V.h
    });
    return C ? U ? (U.canvas && C === U.canvas || U.drawImage(C, V.x, V.y, V.w, V.h), !0) : !!c && C === c : !1;
  }
  function M(U, V = {}, k = {}) {
    const z = Number(k.width || 0), C = Number(k.height || 0);
    if (!(z > 0) || !(C > 0)) return null;
    const O = u.ensureTarget(U, z, C);
    if (!O) return null;
    const j = w(V, {
      ...k,
      width: z,
      height: C
    });
    return j ? (O.ctx.clearRect(0, 0, O.canvas.width, O.canvas.height), O.ctx.drawImage(j, 0, 0, O.canvas.width, O.canvas.height), O.canvas) : null;
  }
  function A(U) {
    u.clearTarget(U);
  }
  function _() {
    var U;
    u.dispose(), (U = a.dispose) == null || U.call(a), f = null;
  }
  function F() {
    f = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: w,
    renderToContext: x,
    renderToTarget: M,
    clearTarget: A,
    snapshotState: p.snapshot,
    clearState: F,
    dispose: _
  };
}
function Fi(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function ov() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function rd(e, t = 8) {
  var w;
  const n = (w = e == null ? void 0 : e.getContext) == null ? void 0 : w.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const c = n.getImageData(0, 0, i, a).data;
  let u = i, f = a, p = -1, y = -1;
  for (let x = 0; x < a; x += 1)
    for (let M = 0; M < i; M += 1)
      c[(x * i + M) * 4 + 3] <= t || (M < u && (u = M), x < f && (f = x), M > p && (p = M), x > y && (y = x));
  return p < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: p,
    maxY: y,
    width: p - u + 1,
    height: y - f + 1,
    aspect: Number(((p - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function Vc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function dr(e, t, n) {
  if (!e) return Fi(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function wt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Rl = null, Fl = null, id = null, ad = null, Tt = null, ga = null, tn = null, Tr = null;
function sv() {
  if (Fl) return Fl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), Fl = n, n;
}
function Ll(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  Rl = dr(Rl, n, i);
  const a = Rl;
  wt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", ad !== a.ctx && (id = a.ctx.createPattern(sv(), "repeat"), ad = a.ctx), a.ctx.fillStyle = id, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function lv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function cv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function uv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function fv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Mt = /* @__PURE__ */ new Map(), Uc = 128;
function dv(e, t, n, i, a, c) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), p = `${u}:${f.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (Mt.has(p)) {
    const k = Mt.get(p);
    return Mt.delete(p), Mt.set(p, k), k;
  }
  Mt.size >= Uc && Mt.delete(Mt.keys().next().value);
  const y = u * 2 + 2, w = u + 1, x = Vc(y, y), M = x.getContext("2d"), A = f * u, _ = u + 1, F = `rgba(${n},${i},${a},${c})`, U = `rgba(${n},${i},${a},0)`, V = M.createRadialGradient(w, w, A, w, w, _);
  return V.addColorStop(0, F), V.addColorStop(1, U), M.fillStyle = V, M.fillRect(0, 0, y, y), Mt.set(p, x), x;
}
function hv(e, t, n, i, a, c, u) {
  const { r: f, g: p, b: y, a: w } = i, x = Math.max(2, Math.ceil(e) * 2), M = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), _ = Math.max(0, Math.min(0.99, c)), F = Math.max(0, Math.min(1, u ?? 0)), U = `chisel:${x}:${M}:${n.toFixed(2)}:${f}:${p}:${y}:${w.toFixed(3)}:${A.toFixed(2)}:${_.toFixed(2)}:${F.toFixed(2)}`;
  if (Mt.has(U)) {
    const J = Mt.get(U);
    return Mt.delete(U), Mt.set(U, J), J;
  }
  Mt.size >= Uc && Mt.delete(Mt.keys().next().value);
  const V = Vc(x, M), k = V.getContext("2d"), z = k.createImageData(x, M), C = z.data, O = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), q = 1 + A;
  for (let J = 0; J < M; J++)
    for (let ee = 0; ee < x; ee++) {
      const I = ee + 0.5 - e, W = J + 0.5 - t, ie = Math.max(Math.abs(I) - O, 0), be = Math.hypot(ie, W) / t;
      if (be >= 1) continue;
      const Z = be <= j ? 1 : Math.max(0, (1 - be) / Math.max(1e-4, 1 - j)), me = 1 - be, P = 1 + A * (1 - me) * (1 - me), K = 1 - _ * me * me, de = P * K / q;
      let Me = 1;
      if (F > 0) {
        const Qe = Math.floor((W + t) / 1.5), pt = Math.floor((I + e) / 8), kt = ri(Gi(Qe * 41 + 500, pt * 19 + 300));
        Me = 1 - F * 0.42 * kt;
      }
      const H = Math.round(255 * Math.min(1, w * Z * de * Me));
      if (H <= 0) continue;
      const $e = (J * x + ee) * 4;
      C[$e] = f, C[$e + 1] = p, C[$e + 2] = y, C[$e + 3] = H;
    }
  return k.putImageData(z, 0, 0), Mt.set(U, V), V;
}
function Gi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function ri(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function mv(e, t, n, i, a, c, u) {
  const f = e + 0.5 - n, p = t + 0.5 - i, y = Math.max(0, n - i), w = Math.max(Math.abs(f) - y, 0), x = Math.hypot(w, p) / i;
  if (x >= 1) return 0;
  const M = ri(Gi(e * 17 + 3, t * 13 + 7)), A = x + c * 0.22 * (M - 0.5);
  if (A >= 1) return 0;
  const _ = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), F = pv(e, t, f, p, n, i), U = c * 0.55;
  if (F < U) return 0;
  const k = 0.45 + 0.55 * ((F - U) / Math.max(1e-4, 1 - U));
  return Math.round(255 * Math.min(1, u * _ * k));
}
function pv(e, t, n, i, a, c) {
  const u = Math.floor((n + a) / 3), f = Math.floor((i + c) / 2), p = ri(Gi(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), w = Math.floor((i + c) / 1.5), x = ri(Gi(y * 23 + 800, w * 29 + 500)), M = ri(Gi(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + x * 0.3 + M * 0.15;
}
function gv(e, t, n, i, a) {
  const { r: c, g: u, b: f, a: p } = i, y = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), M = `crayon:${y}:${w}:${n.toFixed(2)}:${c}:${u}:${f}:${p.toFixed(3)}:${x.toFixed(2)}`;
  if (Mt.has(M)) {
    const k = Mt.get(M);
    return Mt.delete(M), Mt.set(M, k), k;
  }
  Mt.size >= Uc && Mt.delete(Mt.keys().next().value);
  const A = Vc(y, w), _ = A.getContext("2d"), F = _.createImageData(y, w), U = F.data, V = Math.max(0, Math.min(1, n));
  for (let k = 0; k < w; k++)
    for (let z = 0; z < y; z++) {
      const C = mv(z, k, e, t, V, x, p);
      if (C <= 0) continue;
      const O = (k * y + z) * 4;
      U[O] = c, U[O + 1] = u, U[O + 2] = f, U[O + 3] = C;
    }
  return _.putImageData(F, 0, 0), Mt.set(M, A), A;
}
function fm(e, t, n) {
  var F, U;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = uv(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = bv(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((F = t == null ? void 0 : t.angle) == null ? void 0 : F.value) ?? 0), y = fv(t, a), w = String(((U = t == null ? void 0 : t.targetSpace) == null ? void 0 : U.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && w !== "unwrap", M = t == null ? void 0 : t.scatter, A = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let _;
  if (i === "chisel") {
    const V = a * f, k = a, z = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), C = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = hv(V, k, c, u, z, C, O);
  } else if (i === "crayon") {
    const V = a * f, k = a, z = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = gv(V, k, c, u, z);
  } else
    _ = dv(a, c, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: _, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: p, stampKind: i, scatter: A, latitudeCorrection: x };
}
function bv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), c = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: c
  };
}
function yv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function od(e, t, n, i, a) {
  const c = e.angle, u = e.desc.width;
  function f(y, w) {
    c === 0 ? e.ctx.drawImage(e.stampTex, y - a, w - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, w), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const p = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - p < 0 && f(t + u, n), t + p > u && f(t - u, n);
}
function Hc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: w } = e.scatter, x = y * e.radiusPx * a, M = Gi(t, n);
    for (let A = 0; A < w; A++) {
      const _ = ri(M + A * 2) * Math.PI * 2, F = Math.sqrt(ri(M + A * 2 + 1)) * x, U = t + Math.cos(_) * F, V = n + Math.sin(_) * F, k = Math.max(0.5, e.radiusPx * a * 0.48), z = (0.5 - V / Math.max(1, e.desc.height)) * Math.PI, C = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(z)) : 1, O = k * e.aspect * C;
      od(e, U, V, k, O);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = c * e.aspect * f;
  od(e, t, n, c, p);
}
function sd(e, t, n) {
  const i = cv(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, u = fm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < i.length; M++) {
    let A = Number(i[M].u || 0) * a;
    const _ = Number(i[M].v || 0) * c;
    M > 0 && Math.abs(A - f[M - 1].x) > a * 0.5 && (A += A < f[M - 1].x ? a : -a), f.push({ x: A, y: _ });
  }
  if (Hc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let p = f[0], y = f[0], w = f[0], x = 0;
  for (let M = 1; M < f.length; M++) {
    const A = f[M], _ = { x: (y.x + A.x) * 0.5, y: (y.y + A.y) * 0.5 };
    M === 1 ? x = za(u, w.x, w.y, _.x, _.y, x) : x = us(u, p, w, _, A, x), p = y, y = A, w = _;
  }
  f.length === 2 ? za(u, w.x, w.y, y.x, y.y, x) : us(u, p, w, y, y, x), e.restore();
}
function qo(e, t, n) {
  var x;
  const i = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, u = yv(t), f = [];
  let p = 1 / 0, y = -1 / 0;
  for (let M = 0; M < i.length; M++) {
    const A = lv(i[M]);
    let _ = Number(A.x || 0) * a;
    M > 0 && Math.abs(_ - f[M - 1].x) > a * 0.5 && (_ += _ < f[M - 1].x ? a : -a), f.push({ x: _, y: Number(A.y || 0) * c }), _ < p && (p = _), _ > y && (y = _);
  }
  function w(M) {
    e.beginPath(), e.moveTo(f[0].x + M, f[0].y);
    for (let A = 1; A < f.length; A++) e.lineTo(f[A].x + M, f[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, w(0), p < 0 && w(a), y > a && w(-a), e.restore();
}
function wo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    qo(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? sd(e, t, n) : (ga = dr(ga, n.width, n.height), wt(ga), sd(ga.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(ga.canvas, 0, 0), e.restore());
}
function Yr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function za(e, t, n, i, a, c) {
  const u = i - t, f = a - n, p = Math.hypot(u, f);
  if (p < 1e-9) return c;
  let y = e.spacingPx - c;
  for (; y <= p; ) {
    const w = y / p;
    Hc(e, t + u * w, n + f * w, 1), y += e.spacingPx;
  }
  return p - y + e.spacingPx;
}
function us(e, t, n, i, a, c) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, w = 0, x = f, M = x + p, A = M + y, _ = M - x, F = 16;
  let U = c, V = n.x, k = n.y;
  for (let z = 1; z <= F; z++) {
    const C = x + _ * z / F, O = ((x - C) * t.x + (C - w) * n.x) / (x - w), j = ((x - C) * t.y + (C - w) * n.y) / (x - w), q = ((M - C) * n.x + (C - x) * i.x) / (M - x), J = ((M - C) * n.y + (C - x) * i.y) / (M - x), ee = ((A - C) * i.x + (C - M) * a.x) / (A - M), I = ((A - C) * i.y + (C - M) * a.y) / (A - M), W = ((M - C) * O + (C - w) * q) / (M - w), ie = ((M - C) * j + (C - w) * J) / (M - w), ae = ((A - C) * q + (C - x) * ee) / (A - x), be = ((A - C) * J + (C - x) * I) / (A - x), Z = ((M - C) * W + (C - x) * ae) / (M - x), me = ((M - C) * ie + (C - x) * be) / (M - x);
    U = za(e, V, k, Z, me, U), V = Z, k = me;
  }
  return U;
}
function vv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, u = c.width, f = n * c.height, p = e.activeStroke;
  let y = t * u;
  if (p && Math.abs(y - p.prev.x) > u * 0.5 && (y += y < p.prev.x ? u : -u), !p) {
    const A = fm(a, i, c), _ = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), F = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), U = String((i == null ? void 0 : i.toolKind) || "") === "eraser", V = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Hc(A, y, f, 1), e.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: A.stampTex,
      radiusPx: A.radiusPx,
      spacingPx: A.spacingPx,
      aspect: A.aspect,
      angle: A.angle,
      stampKind: A.stampKind,
      scatter: A.scatter,
      latitudeCorrection: A.latitudeCorrection,
      strokeOpacity: _,
      velocityWidthFactor: F,
      distSinceStamp: 0,
      isEraser: U,
      layerKind: V,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const w = (p.prev.x + y) * 0.5, x = (p.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const M = {
    ctx: a,
    stampTex: p.stampTex,
    radiusPx: p.radiusPx,
    spacingPx: p.spacingPx,
    desc: c,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = za(M, p.lastMidX, p.lastMidY, w, x, p.distSinceStamp) : p.distSinceStamp = us(
    M,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: w, y: x },
    { x: y, y: f },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: y, y: f }, p.lastMidX = w, p.lastMidY = x, p.pointCount++, e.displayDirty = !0;
}
function sc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = Fi(t, n), u = {
    descriptor: i,
    committedMask: Fi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Fi(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = Fi(t, n);
  let y = null, w = "", x = null;
  function M(I) {
    return {
      actionGroupId: I,
      descriptor: i,
      committedPaint: Fi(t, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(I) {
    let W = a.get(I);
    return W || (W = M(I), a.set(I, W)), W;
  }
  function _(I) {
    return w === "mask" ? u : y ? A(y) : f;
  }
  function F(I) {
    var me;
    const W = !x || x.length !== I.length || I.some((P, K) => P !== x[K]), ie = w === "paint" && ((me = y ? a.get(y) : f) == null ? void 0 : me.activeStroke) || null;
    let ae = u.displayDirty || f.displayDirty || W;
    for (const P of I) {
      const K = a.get(P);
      if (K != null && K.displayDirty) {
        ae = !0;
        break;
      }
    }
    if (ie && (ae = !0), !ae) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const P of I) {
      const K = a.get(P);
      K && (K.displayDirty = !1);
    }
    x = [...I];
    const be = p.ctx;
    wt(p);
    const Z = !!(ie != null && ie.isEraser);
    for (const P of I) {
      const K = a.get(P);
      if (!K) continue;
      const Me = y === K.actionGroupId && w === "paint" ? K.activeStroke : null;
      if (Z)
        Tt = dr(Tt, t, n), wt(Tt), Tt.ctx.drawImage(K.committedPaint.canvas, 0, 0), Yr(Tt.ctx, c.canvas), be.drawImage(Tt.canvas, 0, 0);
      else if (be.drawImage(K.committedPaint.canvas, 0, 0), Me) {
        const H = K.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Me.strokeOpacity ?? 1));
        be.save(), be.globalAlpha = H, be.drawImage(c.canvas, 0, 0), be.restore();
      }
    }
  }
  function U(I) {
    var ie, ae, be, Z, me;
    for (const P of a.values())
      wt(P.committedPaint), wt(P.currentStroke), P.activeStroke = null, P.displayDirty = !0;
    wt(u.committedMask), wt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const W = [
      ...Array.isArray((ae = (ie = I == null ? void 0 : I.painting) == null ? void 0 : ie.paint) == null ? void 0 : ae.strokes) ? I.painting.paint.strokes : [],
      ...Array.isArray((Z = (be = I == null ? void 0 : I.painting) == null ? void 0 : be.mask) == null ? void 0 : Z.strokes) ? I.painting.mask.strokes : []
    ];
    for (const P of W) {
      if (((me = P == null ? void 0 : P.targetSpace) == null ? void 0 : me.kind) !== "ERP_GLOBAL") continue;
      const K = String((P == null ? void 0 : P.layerKind) || "paint"), Me = String((P == null ? void 0 : P.toolKind) || "pen") === "eraser";
      if (K === "mask") {
        const H = u.descriptor;
        Me ? (Tt = dr(Tt, H.width, H.height), wt(Tt), wo(Tt.ctx, P, H), Yr(u.committedMask.ctx, Tt.canvas)) : wo(u.committedMask.ctx, P, H);
        continue;
      }
      if (Me) {
        Tt = dr(Tt, i.width, i.height), wt(Tt), wo(Tt.ctx, P, i);
        for (const H of a.values())
          Yr(H.committedPaint.ctx, Tt.canvas), H.displayDirty = !0;
      } else {
        const H = String((P == null ? void 0 : P.actionGroupId) || "__default__"), $e = A(H), Qe = $e.descriptor;
        wo($e.committedPaint.ctx, P, Qe), $e.displayDirty = !0;
      }
    }
    F([...a.keys()]);
  }
  function V(I, W) {
    w = String((I == null ? void 0 : I.layerKind) || "");
    const ie = String((I == null ? void 0 : I.toolKind) || "") === "eraser";
    if (w === "mask")
      y = null, wt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ae = ie ? f : A(String((I == null ? void 0 : I.actionGroupId) || "__default__"));
      y = ie ? "" : String((I == null ? void 0 : I.actionGroupId) || "__default__"), wt(ae.currentStroke), ae.activeStroke = null, ae.displayDirty = !0;
    }
  }
  function k(I, W) {
    var K;
    const ie = String((I == null ? void 0 : I.layerKind) || "paint"), ae = String((I == null ? void 0 : I.toolKind) || "") === "eraser", be = ie === "mask" ? u : ae ? f : A(String((I == null ? void 0 : I.actionGroupId) || y || "__default__")), Z = be.activeStroke, me = be.descriptor;
    if (Z && Z.pointCount > 1) {
      const de = be.currentStroke.ctx;
      de.globalCompositeOperation = "source-over";
      const Me = {
        ctx: de,
        stampTex: Z.stampTex,
        radiusPx: Z.radiusPx,
        spacingPx: Z.spacingPx,
        desc: me,
        aspect: Z.aspect,
        angle: Z.angle,
        stampKind: Z.stampKind,
        scatter: Z.scatter,
        latitudeCorrection: Z.latitudeCorrection
      };
      Z.pointCount === 2 ? za(Me, Z.lastMidX, Z.lastMidY, Z.prev.x, Z.prev.y, Z.distSinceStamp) : us(Me, Z.pprev, { x: Z.lastMidX, y: Z.lastMidY }, Z.prev, Z.prev, Z.distSinceStamp);
    }
    be.lassoPreviewActive && (wt(be.currentStroke), qo(be.currentStroke.ctx, I, me), be.lassoPreviewActive = !1);
    const P = ie === "mask" ? u.committedMask : be.committedPaint;
    if (ae && ie === "paint")
      for (const de of a.values())
        Yr(de.committedPaint.ctx, be.currentStroke.canvas), de.displayDirty = !0;
    else if (ae)
      Yr(P.ctx, be.currentStroke.canvas);
    else {
      const de = Math.max(0, Math.min(1, (Z == null ? void 0 : Z.strokeOpacity) ?? 1));
      P.ctx.save(), P.ctx.globalAlpha = de, P.ctx.drawImage(be.currentStroke.canvas, 0, 0), P.ctx.restore();
    }
    ov() && (String((I == null ? void 0 : I.toolKind) || ""), String((me == null ? void 0 : me.kind) || ""), Number((me == null ? void 0 : me.width) || 0), Number((me == null ? void 0 : me.height) || 0), String(((K = I == null ? void 0 : I.targetSpace) == null ? void 0 : K.viewMode) || ""), Number((I == null ? void 0 : I.aspect) ?? 1), rd(be.currentStroke.canvas), rd(P.canvas), void 0), wt(be.currentStroke), be.activeStroke = null, be.displayDirty = !0, y = null, w = "", F([...a.keys()]);
  }
  function z(I) {
    if (w === "mask")
      wt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (w === "paint" && !y)
      wt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const W = a.get(y);
      W && (wt(W.currentStroke), W.activeStroke = null, W.lassoPreviewActive = !1, W.displayDirty = !0);
    }
    y = null, w = "", F([...a.keys()]);
  }
  function C(I, W) {
    var ae;
    if (w = String((I == null ? void 0 : I.layerKind) || ""), String(((ae = I == null ? void 0 : I.geometry) == null ? void 0 : ae.geometryKind) || "") === "lasso_fill") {
      if (w === "mask")
        wt(u.currentStroke), qo(u.currentStroke.ctx, I, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const be = String((I == null ? void 0 : I.toolKind) || "") === "eraser", Z = be ? f : A(String((I == null ? void 0 : I.actionGroupId) || y || "__default__"));
        y = be ? "" : String((I == null ? void 0 : I.actionGroupId) || y || "__default__"), wt(Z.currentStroke), qo(Z.currentStroke.ctx, I, Z.descriptor), Z.lassoPreviewActive = !0, Z.displayDirty = !0;
      }
      F([...a.keys()]);
    }
  }
  function O(I) {
    return F(I ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function j(I) {
    return a.get(String(I)) ?? null;
  }
  function q() {
    return [...a.keys()];
  }
  function J(I) {
    var me;
    const W = a.get(String(I));
    if (!W) return null;
    const ie = w === "paint" && y === W.actionGroupId, ae = w === "paint" && ((me = y ? a.get(y) : f) == null ? void 0 : me.activeStroke) || null;
    if (ae != null && ae.isEraser)
      return tn = dr(tn, t, n), wt(tn), tn.ctx.drawImage(W.committedPaint.canvas, 0, 0), Yr(tn.ctx, c.canvas), tn.canvas;
    const be = ie ? W.activeStroke : null;
    if (!be) return W.committedPaint.canvas;
    tn = dr(tn, t, n), wt(tn), tn.ctx.drawImage(W.committedPaint.canvas, 0, 0);
    const Z = W.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, be.strokeOpacity ?? 1));
    return tn.ctx.save(), tn.ctx.globalAlpha = Z, tn.ctx.drawImage(c.canvas, 0, 0), tn.ctx.restore(), tn.canvas;
  }
  function ee() {
    return Tr = dr(Tr, t, n), wt(Tr), Ll(Tr.ctx, u.committedMask.canvas), w === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Tt = dr(Tt, t, n), wt(Tt), Tt.ctx.drawImage(u.committedMask.canvas, 0, 0), Yr(Tt.ctx, c.canvas), wt(Tr), Ll(Tr.ctx, Tt.canvas)) : Ll(Tr.ctx, c.canvas)), Tr.canvas;
  }
  return {
    rebuildCommitted: U,
    beginStroke: V,
    appendStrokePoint: vv,
    updateActiveStroke: C,
    commitActiveStroke: k,
    cancelActiveStroke: z,
    getErpTarget: O,
    ensureTarget: _,
    getGroupTarget: j,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: ee,
    getAllGroupIds: q
  };
}
function G(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Vt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function _v(e, t) {
  let n = Vt(t) - Vt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const ld = Math.PI / 180, cd = 0.12, xv = 3, wv = 35, Sv = 140, Sa = 100, Mv = 20, ud = 0.8;
function Nv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = G(Number(e || Sa), 1, 179) * ld;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / ld;
}
function kv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Ds(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Sa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(V, k = null) {
    f && f(V, k);
  }
  function w(V, k, z = null, C = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(V || 0), p.drag.lastY = Number(k || 0), p.drag.lastTs = Number(C || performance.now()), p.drag.pointerId = z, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], y("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: z }), !0;
  }
  function x(V, k, z = "pano", C = performance.now()) {
    if (!p.drag.active) return !1;
    const O = Number(C || performance.now()), j = Number(V), q = Number(k), J = j - p.drag.lastX, ee = q - p.drag.lastY;
    p.drag.lastX = j, p.drag.lastY = q, p.drag.lastTs = O;
    const I = i() || { x: 1, y: 1 }, W = Number(I.x || 1), ie = Number(I.y || 1), ae = { ...t() };
    let be = 0, Z = 0;
    if (z === "unwrap") {
      const P = a() || { w: 1, h: 1 }, K = Math.max(1, Number(P.w || 1)), de = Math.max(1, Number(P.h || 1)), Me = J / K, H = ee / de;
      be = -Me * 360 * W, Z = H * 180 * ie;
    } else {
      const P = c() || { w: 0, h: 0 }, K = Math.max(1, Number(P.w || 0)), de = Math.max(1, Number(P.h || 0));
      if (K > 1 && de > 1) {
        const Me = G(Number(ae.fov || Sa), 1, 179), H = G(Nv(Me, K, de), 0.1, 179);
        be = -(J / K) * Me * W, Z = ee / de * H * ie;
      } else
        be = -J * cd * W, Z = ee * cd * ie;
    }
    ae.yaw = Vt(Number(ae.yaw || 0) + be), ae.pitch = G(Number(ae.pitch || 0) + Z, -89.9, 89.9), n(ae), p.velHistory.push({ ts: O, yaw: ae.yaw, pitch: ae.pitch });
    let me = 0;
    for (; me < p.velHistory.length - 1 && p.velHistory[me].ts < O - 100; ) me++;
    return me > 0 && p.velHistory.splice(0, me), p.inertia.active = !1, p.inertia.lastTs = O, u(), y("drag", { phase: "move", dx: J, dy: ee, dYaw: be, dPitch: Z }), !0;
  }
  function M(V = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const k = Number(V || performance.now());
    p.drag.lastTs = k;
    const z = p.velHistory.filter((O) => k - O.ts <= 80);
    if (z.length >= 2) {
      const O = z[0], j = z.at(-1), q = Math.max(1e-3, (j.ts - O.ts) / 1e3);
      let J = j.yaw - O.yaw;
      J > 180 && (J -= 360), J < -180 && (J += 360), p.inertia.vx = J / q, p.inertia.vy = (j.pitch - O.pitch) / q;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const C = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = C > Mv, p.inertia.lastTs = k, y("drag", { phase: "end", speed: C, inertiaActive: p.inertia.active }), !0;
  }
  function A(V = performance.now()) {
    if (!p.inertia.active) return !1;
    const k = Number(V || performance.now()), z = Math.max(1e-3, (k - (p.inertia.lastTs || k)) / 1e3);
    p.inertia.lastTs = k;
    const C = { ...t() };
    C.yaw = Vt(Number(C.yaw || 0) + p.inertia.vx * z), C.pitch = G(Number(C.pitch || 0) + p.inertia.vy * z, -89.9, 89.9);
    const O = Math.exp(-5.5 * z);
    return p.inertia.vx *= O, p.inertia.vy *= O, Math.abs(p.inertia.vx) < ud && Math.abs(p.inertia.vy) < ud && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(C), u(), p.inertia.active;
  }
  function _(V) {
    const k = Math.sign(Number(V || 0));
    if (!k) return !1;
    const z = { ...t() }, C = Number(z.fov || Sa);
    return z.fov = G(C + k * xv, wv, Sv), n(z), u(), y("wheel", { deltaSign: k, fovBefore: C, fovAfter: z.fov }), !0;
  }
  function F(V) {
    return _(Math.sign(kv(V)));
  }
  function U() {
    n({ yaw: 0, pitch: 0, fov: Sa }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
  }
  return {
    state: p,
    startDrag: w,
    moveDrag: x,
    endDrag: M,
    stepInertia: A,
    applyWheel: _,
    applyWheelEvent: F,
    resetView: U
  };
}
function fs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const fd = Math.PI / 180;
function ba(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Pv(e) {
  const t = e || {}, n = ba(t.yaw_deg, 0), i = ba(t.pitch_deg, 0), a = ba(t.roll_deg ?? t.rot_deg, 0), c = zl(ba(t.hFOV_deg, 90), 1, 179), u = zl(ba(t.vFOV_deg, 60), 1, 179), f = Math.tan(c * fd * 0.5) / Math.max(1e-6, Math.tan(u * fd * 0.5)), p = zl(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: u,
    aspect: p
  };
}
const dm = 0.28;
function Av(e) {
  const t = e && typeof e == "object" ? e : {}, n = G(Number(t.x0 ?? 0), 0, 1), i = G(Number(t.y0 ?? 0), 0, 1), a = G(Number(t.x1 ?? 1), 0, 1), c = G(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Tv(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), c = t.includeHidden === !0, u = e.visible === !1, f = c && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: G(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: G(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: Av(e.crop),
    opacity: f ? dm : G(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function Os(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => Tv(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function hm(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Os(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var _;
    const p = String((f == null ? void 0 : f.assetId) || "").trim(), y = p || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const w = p ? a[p] : null, x = t(y, w, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const M = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), A = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || M <= 0 || A <= 0 || (u.add(y), c.push({
      assetId: y,
      source: x,
      revision: String(((_ = n.revisionFor) == null ? void 0 : _.call(n, y, w, x)) ?? [
        y,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), c;
}
function Bc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Iv(e, t = 360) {
  return Bc(e, t);
}
function Rr(e) {
  const t = Pv(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: _t } = Ho;
function lc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Ho == null ? void 0 : Ho.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const oi = Math.PI / 180, ds = {}, Cv = { Nu: 24, Nv: 14 }, Ev = 10, Dv = 120;
function Ov() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ya(e) {
  var n, i, a, c, u;
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
    styleHeight: String(((i = e.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((c = e.style) == null ? void 0 : c.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function Rv() {
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
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
    }
  `, document.head.appendChild(e);
}
function si(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const c = Number(i), u = Number(a);
    return !Number.isFinite(c) || !Number.isFinite(u) ? null : [c, u];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const i = n(t[0], t[1]);
      if (i) return i;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const i = n(t.width, t.height);
      if (i) return i;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const i = n(t.w, t.h);
      if (i) return i;
    }
  }
  return null;
}
function mm(e) {
  const t = si(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function pm(e, t, n) {
  mm(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function cc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Gc(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function gm(e) {
  return fs(Gc(e));
}
function ii(e = null) {
  var c, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (c = _t == null ? void 0 : _t.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function bm(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ii(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ii(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ii(t)
  };
}
const Ca = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = ii(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = ii(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, Kc(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Kc(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : bm(i, e).chosenPath, c = cc(e);
      this.activeBackend = c;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (c === a && c !== "none" && u === i && f === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Ki(e, { keepMonitor: i === "stickers" }), M1(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = cc(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ki(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Ki(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Fv(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ki(e, t = {}) {
  var i, a, c, u, f;
  if (!e) return;
  ms.unregister(e), Fv(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (i = e.__panoDomRestore) == null || i.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (a = e.__panoLegacyRestore) == null || a.call(e);
  } catch {
  }
  e.__panoLegacyRestore = null;
  const n = e.__panoDomPreview;
  if (n) {
    try {
      (c = n.state) != null && c.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const y = String((p == null ? void 0 : p.name) || ""), w = String((p == null ? void 0 : p.type) || ""), x = lc();
      return !(y === x || w === x || y === "pano_preview" || w === "pano_preview" || y === "preview" && w === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || Ca.unregister(e);
}
function li(e, t, n) {
  return { x: e, y: t, z: n };
}
function dd(e, t) {
  return li(e.x + t.x, e.y + t.y, e.z + t.z);
}
function So(e, t) {
  return li(e.x * t, e.y * t, e.z * t);
}
function $l(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function hd(e, t) {
  return li(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Mo(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return li(e.x / t, e.y / t, e.z / t);
}
function Zr(e, t) {
  const n = e * oi, i = t * oi, a = Math.cos(i);
  return li(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Wc(e, t, n = 0) {
  const i = Zr(e, t), a = li(0, 1, 0);
  let c = hd(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = li(1, 0, 0)), c = Mo(c);
  let u = Mo(hd(i, c));
  const f = n * oi, p = Math.cos(f), y = Math.sin(f), w = dd(So(c, p), So(u, y)), x = dd(So(c, -y), So(u, p));
  return { fwd: i, right: Mo(w), up: Mo(x) };
}
function Lv(e, t = "#00ff00") {
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
  let i = null;
  if (e && typeof e == "object")
    i = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return n;
    try {
      i = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = i;
    return !a || typeof a != "object" || Array.isArray(a) ? n : {
      ...n,
      ...a,
      coverage: Number(a.coverage) === 180 ? 180 : 360,
      assets: a.assets && typeof a.assets == "object" ? a.assets : {},
      stickers: Array.isArray(a.stickers) ? a.stickers : [],
      shots: Array.isArray(a.shots) ? a.shots : [],
      active: a.active && typeof a.active == "object" ? a.active : n.active
    };
  } catch {
    return n;
  }
}
function zv(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = $a(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Yc(e) {
  var f, p;
  const t = zv(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = $a(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((p = $a(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const u = Lv(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function $a(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function md(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function ym(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function $v(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function vm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function _m(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = $v(e == null ? void 0 : e.graph, n)), i;
}
function jv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function qc(e, t = []) {
  const n = jv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function pd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function hs(e, t) {
  const n = pd(e), i = pd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Vv(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = qc(e, t).map((y) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, w) => ({ input: y, idx: w })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...c])], f = [];
  for (const y of u) {
    const w = _m(e, y);
    if ((w == null ? void 0 : w.id) != null) {
      f.push(String(w.id));
      continue;
    }
    const x = (p = n[y]) == null ? void 0 : p.link;
    if (x == null) continue;
    const M = ym(e == null ? void 0 : e.graph, x), { originId: A } = vm(M);
    A != null && f.push(String(A));
  }
  return [...new Set(f)];
}
const ms = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = yn) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var y, w, x, M, A;
        if (!c) return;
        const u = hs(i, c == null ? void 0 : c.id);
        Vv(c, ["erp_image", "bg_erp"]).some((_) => hs(i, _)), !(String(c.__panoPreviewMode || "") === "cutout" && !u) && (fc(c), (w = (y = c.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || w.call(y), (x = c.setDirtyCanvas) == null || x.call(c, !0, !0), (A = (M = c.graph) == null ? void 0 : M.setDirtyCanvas) == null || A.call(M, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, yn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = yn) != null && e.removeEventListener) || (yn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function ps(e) {
  var c;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((c = yn) == null ? void 0 : c.apiURL) == "function" ? yn.apiURL(a) : a;
}
function Uv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Hv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function Bv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Gv(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Uv(t)) return [t];
  const { filename: n, subfolder: i } = Hv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => ps({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Bv([...a, t]);
}
function Kv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? ps({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function gd(e) {
  const t = _t == null ? void 0 : _t.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (hs(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const u of c)
      if (hs(u, a)) return t[u];
  }
  return null;
}
function gr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return gr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return ps({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = gr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ps(e);
}
function Wv(e) {
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
function Yv(e, t) {
  var i;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", c = new URL(n, a);
    return t > 0 && c.searchParams.set("pano_rev", String(t)), c.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function qv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => t.push(u));
  }, a = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, u + 1), a(c.ui, u + 1), a(c.data, u + 1), a(c.result, u + 1));
  };
  return a(e, 0), t;
}
function Xv(e, t) {
  try {
    const n = qv(t);
    let i = "";
    for (const a of n)
      if (i = gr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Yv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Jv(e, t = []) {
  var y, w;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = qc(e, t).map((x) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(x))).filter((x) => x >= 0), c = n.map((x, M) => ({ input: x, idx: M })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const x of u) {
    const M = n[x], A = M == null ? void 0 : M.link;
    if (A == null) continue;
    const _ = ym(e.graph, A), { originId: F, originSlot: U } = vm(_);
    if (F == null) continue;
    const V = _m(e, x, F);
    if (!V) continue;
    const k = Number(U || 0), z = gd((V == null ? void 0 : V.id) ?? F), C = Array.isArray(z == null ? void 0 : z.images) ? z.images : [];
    if (C.length) {
      const J = [];
      k >= 0 && k < C.length && J.push(C[k]), J.push(...C);
      for (const ee of J) {
        const I = gr(ee);
        if (I)
          return String((M == null ? void 0 : M.name) || ""), { src: I, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let O = [];
    try {
      O = typeof (_t == null ? void 0 : _t.getNodeImageUrls) == "function" ? _t.getNodeImageUrls(V) || [] : [];
    } catch {
      O = [];
    }
    if (Array.isArray(O) && O.length) {
      const J = [];
      k >= 0 && k < O.length && J.push(O[k]), J.push(...O);
      for (const ee of J) {
        const I = gr(ee);
        if (I)
          return String((M == null ? void 0 : M.name) || ""), { src: I, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const j = Array.isArray(V == null ? void 0 : V.imgs) ? V.imgs : [];
    if (j.length) {
      const J = [];
      k >= 0 && k < j.length && J.push(j[k]), J.push(...j);
      for (const ee of J) {
        const I = gr(ee);
        if (I)
          return String((M == null ? void 0 : M.name) || ""), { src: I, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const q = (y = V == null ? void 0 : V.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (q) {
      let J = gr(q.value);
      if (J && !J.includes("/") && !J.includes(":") && (V.comfyClass === "LoadImage" || V.type === "LoadImage") && (J = yn.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((M == null ? void 0 : M.name) || ""), { src: J, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = gd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && p.push(...f.pano_input_images), Array.isArray((w = f == null ? void 0 : f.ui) == null ? void 0 : w.pano_input_images) && p.push(...f.ui.pano_input_images), p.length > 0)
    for (const x of p) {
      const M = gr(x);
      if (M)
        return { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Zv(e, t = [], n = {}) {
  const i = Jv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = Gv(a);
  if (!c.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(f);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return u && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const y = new Image(), w = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  w.pendingSrcRaw = a, w.pendingResolvedSrc = "", w.pendingImg = y, e.__panoLinkedInputImageCache.set(f, w);
  let x = -1;
  const M = () => {
    var _, F, U, V;
    if (x += 1, x >= c.length) {
      if (((F = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : F.call(_, f)) === w && w.pendingImg === y && (w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null, !w.img))
        try {
          (V = (U = e.__panoLinkedInputImageCache) == null ? void 0 : U.delete) == null || V.call(U, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const A = c[x];
    w.pendingResolvedSrc = A, y.src = A;
  };
  return y.onload = () => {
    var A, _, F;
    ((_ = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : _.call(A, f)) === w && w.pendingImg === y && (w.srcRaw = a, w.resolvedSrc = String(w.pendingResolvedSrc || y.src || ""), w.img = y, w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null), String(w.pendingResolvedSrc || w.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (F = e.setDirtyCanvas) == null || F.call(e, !0, !0);
  }, y.onerror = (A) => {
    var _, F, U, V;
    if (x + 1 < c.length) {
      M();
      return;
    }
    if (((F = (_ = e.__panoLinkedInputImageCache) == null ? void 0 : _.get) == null ? void 0 : F.call(_, f)) === w && w.pendingImg === y && (w.pendingSrcRaw = "", w.pendingResolvedSrc = "", w.pendingImg = null, !w.img))
      try {
        (V = (U = e.__panoLinkedInputImageCache) == null ? void 0 : U.delete) == null || V.call(U, f);
      } catch {
      }
    String(w.pendingResolvedSrc || w.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, M(), u && w.img && (w.img.complete || w.img.naturalWidth || w.img.width) ? w.img : y;
}
function uc(e, t = [], n = null, i = {}) {
  const a = Zv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function fc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function xm(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function qr(e, t, n = "") {
  const i = xm(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Dv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function dc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, f = i / c, p = Math.min(u, f);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Qv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), w = i + (c - p) * 0.5, x = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(w, x, p, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", w + p * 0.5, x + y * 0.5 + 0.5), e.restore();
}
function No(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function e1(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = t.find((c) => String((c == null ? void 0 : c.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function wm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, p = a / u;
  return p > c && (p = c, f = c * u), {
    x: n + (a - f) * 0.5,
    y: i + (c - p) * 0.5,
    w: f,
    h: p
  };
}
function t1(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const u = wm(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function n1(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var f;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof c.computeSize == "function" ? c.computeSize(((f = si(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Xo(e) {
  const n = n1(e) + 2, i = 8, a = si(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: i, y: n, w: c, h: u };
}
function Sm(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Kv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var p, y, w;
    (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function r1(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function hc(e, t) {
  return Os(t, {
    selectedId: null,
    hoveredId: null
  });
}
function mc(e, t, n) {
  return hm(t, (i, a) => Sm(e, i, a), { scene: n });
}
function i1(e, t) {
  var u;
  const n = km(e, t);
  if (!n) return [];
  const i = Pm(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], c = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const p = n.getGroupDisplayCanvas(f);
    return p ? {
      id: `paint_group:${f}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(c.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function a1(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, u = (f) => {
    const p = f.x - a, y = f.y - c, w = Math.hypot(p, y) || 1;
    return { x: f.x + p / w * i, y: f.y + y / w * i };
  };
  return [u(e), u(t), u(n)];
}
function bd(e, t, n, i, a, c, u, f) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [y, w, x] = a1(c, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(w.x, w.y), e.lineTo(x.x, x.y), e.closePath(), e.clip();
  const M = (c.x * (i.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - i.y)) / p, A = (c.x * (a.x - i.x) + u.x * (n.x - a.x) + f.x * (i.x - n.x)) / p, _ = (c.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / p, F = (c.y * (i.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - i.y)) / p, U = (c.y * (a.x - i.x) + u.y * (n.x - a.x) + f.y * (i.x - n.x)) / p, V = (c.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(M, F, A, U, _, V), e.drawImage(t, 0, 0), e.restore();
}
function Mm(e, t, n, i) {
  const a = $l(e, t.right), c = $l(e, t.up), u = $l(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / i, p = a / u / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Nm(e, t, n, i, a, c, u, f = 12, p = 9) {
  var be;
  const y = G(Number(u.hFOV_deg || 30), 1, 179) * oi, w = G(Number(u.vFOV_deg || 30), 1, 179) * oi, x = Math.tan(y * 0.5), M = Math.tan(w * 0.5), A = u.crop || {}, _ = G(Number(A.x0 ?? 0), 0, 1), F = G(Number(A.y0 ?? 0), 0, 1), U = G(Number(A.x1 ?? 1), 0, 1), V = G(Number(A.y1 ?? 1), 0, 1), k = Math.max(1e-4, U - _), z = Math.max(1e-4, V - F), C = Wc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), O = [], j = [], q = [], J = [];
  for (let Z = 0; Z <= p; Z++) {
    const me = Z / p, K = (1 - (F + me * z) * 2) * M;
    for (let de = 0; de <= f; de++) {
      const Me = de / f, $e = ((_ + Me * k) * 2 - 1) * x, Qe = C.fwd.x + C.right.x * $e + C.up.x * K, pt = C.fwd.y + C.right.y * $e + C.up.y * K, kt = C.fwd.z + C.right.z * $e + C.up.z * K, Ge = Math.hypot(Qe, pt, kt) || 1e-8, en = Qe / Ge, mn = pt / Ge, on = kt / Ge, Gt = en * i.right.x + mn * i.right.y + on * i.right.z, sn = en * i.up.x + mn * i.up.y + on * i.up.z, R = en * i.fwd.x + mn * i.fwd.y + on * i.fwd.z;
      if (R <= 1e-4)
        O[Z] || (O[Z] = []), j[Z] || (j[Z] = []), O[Z][de] = null, j[Z][de] = null;
      else {
        const $ = sn / R / a, oe = Gt / R / a;
        O[Z] || (O[Z] = []), j[Z] || (j[Z] = []), O[Z][de] = n.x + n.w * 0.5 + oe * n.h * 0.5, j[Z][de] = n.y + n.h * 0.5 - $ * n.h * 0.5;
      }
      q[Z] || (q[Z] = []), J[Z] || (J[Z] = []), q[Z][de] = Me, J[Z][de] = me;
    }
  }
  const ee = (be = c.assets) == null ? void 0 : be[u.asset_id], I = Sm(t, u.asset_id, ee);
  if (!I || !I.complete || !I.naturalWidth) return;
  const W = Number(I.naturalWidth || I.width || 1), ie = Number(I.naturalHeight || I.height || 1), ae = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = ae;
  for (let Z = 0; Z < p; Z++)
    for (let me = 0; me < f; me++) {
      const P = O[Z][me], K = j[Z][me], de = O[Z][me + 1], Me = j[Z][me + 1], H = O[Z + 1][me], $e = j[Z + 1][me], Qe = O[Z + 1][me + 1], pt = j[Z + 1][me + 1];
      if (P === null || de === null || H === null || Qe === null) continue;
      const kt = q[Z][me] * W, Ge = J[Z][me] * ie, en = q[Z][me + 1] * W, mn = J[Z][me + 1] * ie, on = q[Z + 1][me] * W, Gt = J[Z + 1][me] * ie, sn = q[Z + 1][me + 1] * W, R = J[Z + 1][me + 1] * ie;
      bd(e, I, { x: kt, y: Ge }, { x: en, y: mn }, { x: sn, y: R }, { x: P, y: K }, { x: de, y: Me }, { x: Qe, y: pt }), bd(e, I, { x: kt, y: Ge }, { x: sn, y: R }, { x: on, y: Gt }, { x: P, y: K }, { x: Qe, y: pt }, { x: H, y: $e });
    }
}
function o1(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Yc(e), a = Xo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = Wc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * oi * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = uc(
    e,
    qc(e, ["erp_image", "bg_erp"]),
    () => {
      var C, O, j;
      (O = (C = e.__panoDomPreview) == null ? void 0 : C.requestDraw) == null || O.call(C), (j = e.setDirtyCanvas) == null || j.call(e, !0, !1);
    }
  ), p = !!(f && f.complete && (f.naturalWidth || f.width)), y = Im(e), w = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = y || w, M = ds, A = hc(e, i), _ = mc(e, i, A), F = Bc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let U = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = ai()), p) {
    const C = Es({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(_) ? _.map((q) => `${String((q == null ? void 0 : q.assetId) || "")}:${String((q == null ? void 0 : q.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: _,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), j = e.__panoRuntimeCore.syncState(C) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", F, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    U = !!j, j && t.drawImage(j, a.x, a.y, a.w, a.h);
  }
  const V = x ? 8 : 12, k = x ? 6 : 9, z = r1(e, i);
  if (!p || z.length === 0) {
    const C = dc(t == null ? void 0 : t.canvas, a);
    Am(t, a, c, u, C);
  }
  !U && p && gs(e, t, a, c, u, f, M), !U && z.length > 0 && z.forEach((C) => Nm(t, e, a, c, u, i, C, V, k)), t.restore();
}
function s1(e, t, n, i, a = "preview_scene", c = "") {
  const u = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Es({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Jo(e, t, n, i) {
  var c, u, f, p, y, w;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const x = i.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((w = e == null ? void 0 : e.pos) == null ? void 0 : w[1]) || 0)
    };
  const a = c1(e, t, i);
  return a || null;
}
function l1(e, t) {
  var x, M;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), u = (t == null ? void 0 : t.ds) || ((M = _t == null ? void 0 : _t.canvas) == null ? void 0 : M.ds);
  if (!c || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / f - Number(p[0] || 0), w = (i - Number(c.top || 0)) / f - Number(p[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(w) ? null : { x: y, y: w };
}
function c1(e, t, n) {
  var a, c;
  const i = l1(t, n || (_t == null ? void 0 : _t.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function ko(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), si(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", pm(e, 320, 180), Li(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var M, A;
    const x = t ? t.apply(this, arguments) : void 0;
    try {
      const _ = arguments[0];
      _ && !((M = this.flags) != null && M.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), o1(this, _, i));
    } catch {
    }
    return x;
  }, e.onResize = function() {
    var M;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, bs(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Cm(this, 220, null), x;
  };
  const i = Ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (x) => {
      e.__panoPreviewView = x;
    },
    getViewportSize: () => {
      const x = Xo(e);
      return {
        w: Math.max(1, Number((x == null ? void 0 : x.w) || 0)),
        h: Math.max(1, Number((x == null ? void 0 : x.h) || 0))
      };
    },
    onInteraction: () => {
      var x;
      Tm(e), (x = e.setDirtyCanvas) == null || x.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(x, M, A) {
    var _;
    try {
      if (!((_ = this.flags) != null && _.collapsed)) {
        const F = Jo(this, x, M, A) || { x: 0, y: 0 }, U = si(this), V = Number((U == null ? void 0 : U[0]) || 0), k = Number((U == null ? void 0 : U[1]) || 0);
        if (F.x >= V - 20 && F.y >= k - 20)
          return a ? a.apply(this, arguments) : void 0;
        const C = Xo(this);
        if (md(F.x, F.y, C))
          return (x == null ? void 0 : x.button) === 0 && i.startDrag(F.x, F.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(x, M, A) {
    try {
      const _ = Jo(this, x, M, A);
      if (i.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return i.endDrag(), !0;
        const F = _ || i.state.drag;
        return i.moveDrag(F.x, F.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const x = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), x;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(x, M, A) {
    var _, F;
    try {
      if ((_ = this.flags) != null && _.collapsed) return p ? p.apply(this, arguments) : void 0;
      const U = Jo(this, x, M, A), V = Xo(this);
      if (!U || !md(U.x, U.y, V)) return p ? p.apply(this, arguments) : void 0;
      const k = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return i.applyWheel(Math.sign(k)) && ((F = this.setDirtyCanvas) == null || F.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, w = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = p, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = w, e.onRemoved = function() {
    return w(), Ca.unregister(this), ms.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function u1(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function km(e, t) {
  var y, w, x, M, A, _, F, U, V, k, z, C;
  const n = (w = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : w.strokes, i = (M = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const u = u1(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = sc(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.raster_objects) || null
  };
  return (((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.paint) !== p.paint || ((U = e.__panoPreviewPaintRevision) == null ? void 0 : U.mask) !== p.mask || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.groups) !== p.groups || ((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Pm(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function f1(e, t) {
  const n = km(e, t);
  if (!n) return null;
  const i = Pm(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function d1(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = gr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = e.__panoPaintingLayerImageCache;
  if (c.img && c.src === a) return c.img;
  const u = new Image();
  return u.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, u.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function yd(e, t) {
  var c, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = d1(e, t, () => {
      var p, y;
      return (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : y.call(p);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = f1(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function h1(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function m1(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function p1(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = h1(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = m1(e, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const y = p.getImageData(0, 0, u.width, u.height).data, w = t.getImageData(0, 0, i, a), x = w.data, M = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let _ = 0; _ < a; _ += 1) {
      const F = (_ + 0.5) * u.height / a - 0.5, U = G(Math.floor(F), 0, A), V = G(U + 1, 0, A), k = G(F - U, 0, 1);
      for (let z = 0; z < i; z += 1) {
        const C = (z + 0.5) * u.width / i - 0.5, O = G(Math.floor(C), 0, M), j = G(O + 1, 0, M), q = G(C - O, 0, 1);
        let J = 0, ee = 0, I = 0, W = 0;
        const ie = (Z, me, P) => {
          const K = (me * u.width + Z) * 4, de = (y[K + 3] || 0) / 255;
          J += de * P, ee += (y[K] || 0) / 255 * de * P, I += (y[K + 1] || 0) / 255 * de * P, W += (y[K + 2] || 0) / 255 * de * P;
        };
        if (ie(O, U, (1 - q) * (1 - k)), ie(j, U, q * (1 - k)), ie(O, V, (1 - q) * k), ie(j, V, q * k), J <= 1e-6) continue;
        const ae = (_ * i + z) * 4, be = 1 - J;
        x[ae] = Math.round(G((ee + x[ae] / 255 * be) * 255, 0, 255)), x[ae + 1] = Math.round(G((I + x[ae + 1] / 255 * be) * 255, 0, 255)), x[ae + 2] = Math.round(G((W + x[ae + 2] / 255 * be) * 255, 0, 255)), x[ae + 3] = 255;
      }
    }
    t.putImageData(w, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function vd(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== f || p.width !== a || p.height !== c) {
    (!p || p.width !== a || p.height !== c) && (p = document.createElement("canvas"), p.width = a, p.height = c, e.__panoPreviewBgPaint = p);
    const y = p.getContext("2d");
    y.clearRect(0, 0, a, c), y.drawImage(t, 0, 0, a, c), p1(e, y, n, a, c, "__panoPreviewOverlayScratch"), p.__revKey = f;
  }
  return p;
}
function g1(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  xm(e, a);
  const c = Yc(e), u = t.parentElement, f = 1, p = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), w = Math.max(64, Math.round(p * f)), x = Math.max(64, Math.round(y * f)), M = t.getContext("2d");
  if (M)
    if (a === "cutout") {
      const A = e1(c), _ = uc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var J, ee;
          return (ee = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ee.call(J);
        },
        { preserveReadyWhilePending: !1 }
      ), F = !!(_ && _.complete && (_.naturalWidth || _.width));
      (t.width !== w || t.height !== x) && (t.width = w, t.height = x);
      const U = { x: 0, y: 0, w, h: x }, V = F ? G(Number((_.naturalWidth || _.width) / Math.max(1, Number(_.naturalHeight || _.height || 1))), 0.05, 20) : 1, k = A ? Rr(A) : null, z = G(Number((k == null ? void 0 : k.aspect) || V || 1), 0.05, 20), C = wm(U, z);
      dc(t, U), M.setTransform(1, 0, 0, 1, 0, 0), M.fillStyle = "#070707", M.fillRect(0, 0, w, x);
      let O = "none", j = "Open editor and add frame", q = "";
      if (q = String((_ == null ? void 0 : _.src) || ""), A)
        if (_ && !F)
          O = "loading";
        else if (F) {
          const J = hc(e, c), ee = mc(e, c, J), I = i1(e, c), W = wa({
            stateRevision: [
              "runtime_cutout_scene",
              String(_.currentSrc || _.src || ""),
              Number(_.naturalWidth || _.width || 0),
              Number(_.naturalHeight || _.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(ee) ? ee.map((ae) => `${String((ae == null ? void 0 : ae.assetId) || "")}:${String((ae == null ? void 0 : ae.revision) || "")}`).join(",") : "",
              Array.isArray(I) ? I.map((ae) => `${String((ae == null ? void 0 : ae.id) || "")}:${String((ae == null ? void 0 : ae.revision) || "")}:${Number((ae == null ? void 0 : ae.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: _,
            backgroundRevision: String(_.currentSrc || _.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: J,
            textures: ee,
            rasterEntries: I,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = ai()), e.__panoRuntimeCore.syncState(W), e.__panoRuntimeCore.renderToContext(
            M,
            C,
            Rr(A),
            { width: C.w, height: C.h, dpr: 1 }
          ) || (O = "empty", j = "Open editor or run node");
        } else
          O = "empty", j = "Connect ERP image";
      else {
        if (F) {
          const J = yd(e, c), ee = J != null && J.source ? vd(e, _, J.source, J.revision || "") : _;
          t1(M, ee, U, 0.44);
        }
        O = "empty", j = "Open editor and add frame";
      }
      O === "loading" ? (No(e, !1), qr(e, !0, q)) : O === "empty" ? (No(e, !0, j), qr(e, !1, "")) : (No(e, !1), qr(e, !1, ""));
    } else {
      No(e, !1), (t.width !== w || t.height !== x) && (t.width = w, t.height = x);
      const A = { x: 0, y: 0, w, h: x }, _ = dc(t, A);
      M.setTransform(1, 0, 0, 1, 0, 0), M.clearRect(0, 0, w, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const F = Wc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), U = Math.tan(Number(e.__panoPreviewView.fov || 100) * oi * 0.5), V = uc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var ie, ae;
          return (ae = (ie = e.__panoDomPreview) == null ? void 0 : ie.requestDraw) == null ? void 0 : ae.call(ie);
        }
      ), k = !!(V && V.complete && (V.naturalWidth || V.width));
      M.fillStyle = "#1a1a1e", M.fillRect(0, 0, w, x);
      const z = hc(e, c), C = mc(e, c, z), O = Bc(e.__panoPreviewView, c == null ? void 0 : c.coverage), j = yd(e, c), q = (j == null ? void 0 : j.source) || null, J = k && q ? vd(e, V, q, (j == null ? void 0 : j.revision) || "") : V, ee = J !== V ? String(J.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = ai());
      let I = !1;
      if (k) {
        const ae = e.__panoDomRuntimeCore.syncState(
          s1(J, c, z, C, "runtime_dom_scene", ee)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", O, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        ae && (M.drawImage(ae, A.x, A.y, A.w, A.h), I = !0);
      }
      const W = z.stickers;
      if (k && I)
        qr(e, !1, "");
      else if (k)
        gs(e, M, A, F, U, J, ds), qr(e, !1, "");
      else if (q)
        gs(e, M, A, F, U, q, ds), qr(e, !!V && !k, String((V == null ? void 0 : V.src) || ""));
      else {
        const ie = !!V && !k;
        qr(e, ie, String((V == null ? void 0 : V.src) || "")), ie && Qv(M, A, _);
      }
      if ((!k || W.length === 0) && Am(M, A, F, U, _), !I && W.length > 0) {
        const ie = Im(e), ae = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, be = ie || ae, Z = be ? 8 : 12, me = be ? 6 : 9;
        W.forEach((P) => Nm(M, e, A, F, U, c, P, Z, me));
      } else if (!V || !k) {
        const ie = Math.max(14, Math.round(16 * _));
        M.fillStyle = "rgba(212,212,216,0.85)", M.font = `600 ${ie}px Plus Jakarta Sans, Geist, sans-serif`, M.textAlign = "center", M.fillText("Open editor to add stickers", w * 0.5, x * 0.5 + 24 * _);
      }
    }
}
function gs(e, t, n, i, a, c, u = Cv) {
  const f = Yc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = ai());
  const y = Wv(c), w = Es({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: y,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(w)) return;
  const M = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(p.yaw || 0),
    pitchDeg: Number(p.pitch || 0),
    fovDeg: Number(p.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  M && t.drawImage(M, n.x, n.y, n.w, n.h);
}
function _d(e, t, n, i, a, c, u = 1) {
  let f = !1;
  e.strokeStyle = c, e.lineWidth = u, e.beginPath();
  for (const p of t) {
    const y = Mm(p, n, i, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), f = !0);
  }
  e.stroke();
}
function Am(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const w = [];
    for (let x = -180; x <= 180; x += 15) w.push(Zr(x, y));
    _d(e, w, n, t, i, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const w = [];
    for (let x = -89; x <= 89; x += 15) w.push(Zr(y, x));
    _d(e, w, n, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Zr(0, 0) },
    { name: "Right", dir: Zr(90, 0) },
    { name: "Back", dir: Zr(180, 0) },
    { name: "Left", dir: Zr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((y) => {
    const w = Mm(y.dir, n, t, i);
    w && e.fillText(y.name, w.x, w.y + 20 * a);
  }), e.restore();
}
function b1(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Tm(e) {
  const t = b1(e);
  t.dragging = !1, t.hqFrames = Ev;
}
function bs(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Im(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function y1(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function v1(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
}
function Ti(e, t) {
  return v1(e, t) ? !1 : (y1(e), !0);
}
function _1() {
  var n;
  const e = (n = _t == null ? void 0 : _t.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function x1(e) {
  var n;
  if (!e) return;
  const t = (n = _t == null ? void 0 : _t.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function w1(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !mm(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function S1(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function xd(e, t = null, n = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, bs(e, 150), t == null || t(), Cm(e, 180, t);
    }
  };
}
function Cm(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Li(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function M1(e, t = {}) {
  var P;
  const n = t.__allowStandalone === !0, i = gm(e);
  if (i && !n) {
    Gc(e);
    return;
  }
  i && w1(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", ms.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || Ca.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), p = a ? bm(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: ii(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (p.chosenPath = f, p.reason = "controller_target_backend");
  const y = a ? p.chosenPath : "dom", w = p.signature || ii(e);
  if (Number(e.__panoRebindGeneration || 0), cc(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, si(e), e.__panoFrontendSig = w, e.__panoStickersPath = y, a && Ca.register(e), a && y === "legacy_draw") {
    if (c) return;
    Ki(e, { keepMonitor: !0 }), ko(e);
    return;
  }
  if ((P = e.__panoDomPreview) != null && P.widget) return;
  if (e.__panoLegacyPreviewHooked && Ki(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && ko(e);
    return;
  }
  const x = t.noPreview === !0, M = a || x ? 0 : 56, A = document.createElement("div");
  if (Rv(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), x && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    x ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), x) {
    const K = e.addDOMWidget(lc(), "preview", A, xd(e, null));
    Li(e), e.__panoDomPreview = { widget: K, root: A, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const _ = document.createElement("div");
  _.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const F = document.createElement("canvas");
  F.style.cssText = [
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
  const U = document.createElement("div");
  U.style.cssText = [
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
  ].join(";"), U.textContent = "Open editor and add frame", _.appendChild(F), _.appendChild(U), A.appendChild(_), pm(e, 120, 120), Li(e);
  let V = null;
  try {
    S1(e, M, () => {
      var K, de;
      return (de = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : de.call(K);
    }), V = e.addDOMWidget(
      lc(),
      "preview",
      A,
      xd(e, () => {
        var K, de;
        return (de = (K = e.__panoDomPreview) == null ? void 0 : K.requestDraw) == null ? void 0 : de.call(K);
      }, M)
    );
  } catch {
    a && ko(e);
    return;
  }
  const k = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, z = () => {
    k.needsDraw = !0, k.raf || (k.raf = requestAnimationFrame(j));
  }, C = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    bs(e, 150), z();
  }) : null;
  C == null || C.observe(_);
  const O = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const K = 3, de = (Me) => {
      requestAnimationFrame(() => {
        var $e;
        const H = !!(A != null && A.isConnected && (_ != null && _.isConnected) && (F != null && F.isConnected) && Number(_.clientHeight || 0) > 0 && Number(F.clientHeight || 0) > 0);
        if (!H && Me < K) {
          de(Me + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((_ == null ? void 0 : _.clientHeight) || 0), Number((F == null ? void 0 : F.clientHeight) || 0), !H) {
          if (c) {
            e.__panoPreviewMode, Number((_ == null ? void 0 : _.clientHeight) || 0), Number((F == null ? void 0 : F.clientHeight) || 0);
            return;
          }
          Ki(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", ko(e), ($e = e.setDirtyCanvas) == null || $e.call(e, !0, !0);
        }
      });
    };
    de(1);
  }, j = (K) => {
    var Me, H, $e;
    k.raf = 0;
    const de = q.stepInertia(K);
    (k.needsDraw || de) && (k.needsDraw = !1, (Me = e.flags) != null && Me.collapsed || g1(e, F, null, q), (H = e.setDirtyCanvas) == null || H.call(e, !0, !1)), (de || k.needsDraw) && (k.raf = requestAnimationFrame(j)), Ov() && (!e.__panoDebugLastTs || K - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = K, e.__panoPreviewMode, si(e), ya(A), ya(_), ya(F), ya(A.parentElement), ya(($e = A.parentElement) == null ? void 0 : $e.parentElement), Number(F.width || 0), Number(F.height || 0), void 0);
  }, q = Ds({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (K) => {
      e.__panoPreviewView = K;
    },
    onInteraction: () => {
      z();
    }
  });
  F.addEventListener("pointerdown", (K) => {
    var de, Me;
    Ti(K, _) && u && K.button === 0 && ((de = A.focus) == null || de.call(A), (Me = F.setPointerCapture) == null || Me.call(F, K.pointerId), F.style.cursor = "grabbing", q.startDrag(K.clientX, K.clientY, K.pointerId));
  }), F.addEventListener("pointermove", (K) => {
    !u || !q.state.drag.active || (Ti(K, _), q.moveDrag(K.clientX, K.clientY, "pano"));
  });
  const J = (K) => {
    var de;
    !u || !q.state.drag.active || (Ti(K, _), (de = F.releasePointerCapture) == null || de.call(F, K.pointerId), F.style.cursor = "grab", q.endDrag(), Tm(e), z());
  };
  F.addEventListener("pointerup", J), F.addEventListener("pointercancel", J), F.addEventListener("pointerleave", (K) => {
    q.state.drag.active && J(K);
  });
  const ee = (K) => {
    var Me, H, $e;
    if (!Ti(K, _) || !u) return;
    const de = _1();
    q.applyWheelEvent(K) && z(), (Me = K.preventDefault) == null || Me.call(K), (H = K.stopPropagation) == null || H.call(K), ($e = K.stopImmediatePropagation) == null || $e.call(K), requestAnimationFrame(() => {
      var Qe, pt;
      x1(de), (pt = (Qe = _t == null ? void 0 : _t.canvas) == null ? void 0 : Qe.setDirty) == null || pt.call(Qe, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((K) => {
    _.addEventListener(K, ee, { passive: !1, capture: !0 }), F.addEventListener(K, ee, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((K) => {
    F.addEventListener(K, (de) => Ti(de, _)), _.addEventListener(K, (de) => Ti(de, _));
  });
  const I = $a(e, "state_json");
  if (I && !I.__panoPreviewPatchedCb) {
    I.__panoPreviewPatchedCb = !0;
    const K = I.callback;
    I.callback = (de) => {
      const Me = K ? K(de) : void 0;
      return z(), Me;
    };
  }
  const W = $a(e, "bg_color");
  if (W && !W.__panoPreviewPatchedCb) {
    W.__panoPreviewPatchedCb = !0;
    const K = W.callback;
    W.callback = (de) => {
      const Me = K ? K(de) : void 0;
      return z(), Me;
    };
  }
  const ie = e.onRemoved, ae = e.onResize, be = e.onExecuted;
  e.onExecuted = function(K) {
    Xv(e, K), fc(e), Li(e), z();
    const de = be ? be.apply(this, arguments) : void 0;
    return Li(e), de;
  };
  const Z = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return fc(e), Li(e), z(), Z ? Z.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var de;
    const K = ae ? ae.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, bs(this, 150), z(), (de = this.setDirtyCanvas) == null || de.call(this, !0, !1), K;
  }, e.onRemoved = function() {
    return me(), Ca.unregister(this), ms.unregister(this), ie ? ie.apply(this, arguments) : void 0;
  };
  const me = () => {
    var K;
    k.raf && cancelAnimationFrame(k.raf), (K = C == null ? void 0 : C.disconnect) == null || K.call(C), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = ae, e.onExecuted = be, e.onConnectionsChange = Z, e.onRemoved = ie;
  };
  e.__panoDomRestore = me, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: V, root: A, canvas: F, requestDraw: z, state: k, emptyHintEl: U }, O(), z();
}
function wd(e, t = {}) {
  Kc(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Sd(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (gm(e) && !n) {
    Gc(e);
    return;
  }
  Kc(e).attach(t);
}
const nr = Math.PI / 180, Ji = 180 / Math.PI;
function ci(e, t, n) {
  return { x: e, y: t, z: n };
}
function Md(e, t) {
  return ci(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Po(e, t) {
  return ci(e.x * t, e.y * t, e.z * t);
}
function Nd(e, t) {
  return ci(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ao(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ci(e.x / t, e.y / t, e.z / t);
}
function N1(e, t) {
  const n = e * nr, i = t * nr, a = Math.cos(i);
  return ci(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function k1(e, t, n = 0) {
  const i = N1(e, t), a = ci(0, 1, 0);
  let c = Nd(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ci(1, 0, 0)), c = Ao(c);
  const u = Ao(Nd(i, c)), f = n * nr, p = Math.cos(f), y = Math.sin(f), w = Md(Po(c, p), Po(u, y)), x = Md(Po(c, -y), Po(u, p));
  return { fwd: i, right: Ao(w), up: Ao(x) };
}
const To = 140, P1 = 180, kd = 40, jl = 10;
function Pd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Ad(e, t) {
  const n = Pd(e), i = Pd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Td(e) {
  var c;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((c = yn) == null ? void 0 : c.apiURL) == "function" ? yn.apiURL(a) : a;
}
function Wi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Wi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Td({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = Wi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Td(e);
}
function Em(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function A1(e) {
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
function pc(e) {
  var a;
  const t = (a = On) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (Ad(c, n)) return t.get(c);
  } else
    for (const c of Object.keys(t))
      if (Ad(c, n)) return t[c];
  return null;
}
function T1(e) {
  var i, a;
  const t = pc(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const c of n)
    if (Array.isArray(c))
      for (const u of c) {
        const f = Wi(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function I1(e, t = "erp_image") {
  var _, F, U, V, k, z, C, O, j, q, J, ee;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((I) => String((I == null ? void 0 : I.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const I = n.find((W) => String((W == null ? void 0 : W.type) || "").toUpperCase() === "IMAGE" && (W == null ? void 0 : W.link) != null);
    (I == null ? void 0 : I.link) != null && (i = I.link);
  }
  if (i == null) return "";
  const c = ((F = (_ = e == null ? void 0 : e.graph) == null ? void 0 : _.links) == null ? void 0 : F[i]) || ((k = (V = (U = On) == null ? void 0 : U.graph) == null ? void 0 : V.links) == null ? void 0 : k[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (O = (C = (z = On) == null ? void 0 : z.graph) == null ? void 0 : C.getNodeById) == null ? void 0 : O.call(C, u), p = pc(u), y = pc(e == null ? void 0 : e.id), w = [
    (j = y == null ? void 0 : y.ui) == null ? void 0 : j.pano_input_images,
    y == null ? void 0 : y.pano_input_images,
    p == null ? void 0 : p.images,
    (q = p == null ? void 0 : p.ui) == null ? void 0 : q.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const I of w)
    if (Array.isArray(I))
      for (const W of I) {
        const ie = Wi(W);
        if (ie) return ie;
      }
  let x = [];
  try {
    x = typeof ((J = On) == null ? void 0 : J.getNodeImageUrls) == "function" ? On.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const I of x) {
      const W = Wi(I);
      if (W) return W;
    }
  if (f) {
    const I = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const W of I) {
      const ie = Wi(W);
      if (ie) return ie;
    }
  }
  const M = (ee = f == null ? void 0 : f.widgets) == null ? void 0 : ee.find((I) => String((I == null ? void 0 : I.name) || "").toLowerCase() === "image"), A = String((M == null ? void 0 : M.value) || "").trim();
  return A ? yn.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function Id(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Cd(e, t, n, i, a, c) {
  var M, A, _;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Em(c) || n <= 1 || i <= 1) {
    Id(t, n, i);
    return;
  }
  const u = k1(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * nr * 0.5), p = Number(((_ = (A = (M = e == null ? void 0 : e.widgets) == null ? void 0 : M.find) == null ? void 0 : A.call(M, (F) => (F == null ? void 0 : F.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = ai());
  const y = A1(c), w = Es({
    stateRevision: [
      "standalone_preview_scene",
      y,
      p
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: y,
    coverageDeg: p,
    scene: Os(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(w) && (() => {
    const F = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Iv(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return F ? (t.drawImage(F, 0, 0, n, i), !0) : !1;
  })() || (gs(e, t, { x: 0, y: 0, w: n, h: i }, u, f, c, ds), Id(t, n, i));
}
function Ed(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class C1 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ds({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Vt(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: G(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: G(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, c, u, f;
        const i = (c = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : c.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var i, a, c;
    const t = this;
    this.node.onExecuted = function() {
      const u = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onConnectionsChange = function() {
      const u = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), u;
    }, this.node.onResize = function() {
      const u = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), u;
    }, this.node.onRemoved = function() {
      const u = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), u;
    };
    const n = ((c = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : c.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var c;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (c = this.flags) != null && c.collapsed || !t.errorText) return i;
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), i;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${To}px`,
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
          return To;
        },
        getHeight() {
          return To;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const c = i ? i(a) || {} : {};
          return {
            ...c,
            minHeight: Math.max(To, Number(c.minHeight || 0)),
            minWidth: Math.max(P1, Number(c.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(t, n) {
    t.addEventListener("pointerdown", (a) => {
      var c, u, f;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const i = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Em(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var u;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const c = t.getLegacyPreviewRect();
      return Ed(a.x, a.y, c) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - c.x, a.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const c = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - c.x, a.y - c.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var y, w, x, M, A, _;
      const c = Jo(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!c || !Ed(c.x, c.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(f));
      return Number(((w = t.view) == null ? void 0 : w.fov) || 100), p && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (_ = n == null ? void 0 : n.stopImmediatePropagation) == null || _.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, c, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - jl * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - kd - jl);
    return { x: jl, y: kd, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), Cd(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, c, u;
    const t = T1(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      f.addEventListener("loadedmetadata", p), f.addEventListener("canplay", p), f.addEventListener("timeupdate", y), f.addEventListener("play", y), f.addEventListener("pause", y), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", p), f.removeEventListener("canplay", p), f.removeEventListener("timeupdate", y), f.removeEventListener("play", y), f.removeEventListener("pause", y);
      };
      return;
    }
    const n = I1(this.node, this.imageInputName);
    if (!n) {
      (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const i = new Image();
    i.onload = () => {
      this.imgSrc === n && (this.img = i, this.requestDraw());
    }, i.onerror = () => {
      this.imgSrc === n && (this.img = null, this.requestDraw());
    }, i.src = n;
  }
  requestDraw() {
    var t, n;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
  }
  tick(t = performance.now()) {
    var a, c;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (Cd(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (a = this.node).setDirtyCanvas) == null || c.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let t = 0;
    const n = () => {
      !this.root || !this.canvas || t >= 3 || (t += 1, requestAnimationFrame(n));
    };
    requestAnimationFrame(n);
  }
  teardown() {
    var n, i, a, c, u, f, p, y, w, x, M, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null;
    try {
      (f = (u = this.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((_) => _ !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((x = (w = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : w.find) == null ? void 0 : x.call(w, (_) => (_ == null ? void 0 : _.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (M = this.node.__panoStandaloneCore) == null ? void 0 : M.dispose) == null || A.call(M), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function E1(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new C1(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function Dm(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const c = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function Xc(e) {
  return !!(e != null && e.prototype);
}
function ja(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function D1(e, t = {}) {
  Xc(e) || E1(e, {
    ...t,
    onOpen: ja(e, t.onOpen)
  });
}
function O1(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, i = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Xc(e)) {
    Sd(e, {
      ...i,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  Dm(e, "stickers_node_preview", (a) => {
    Sd(a, {
      ...i,
      onOpen: ja(a, t.onOpen)
    });
  });
}
function R1(e, t = {}) {
  if (!Xc(e)) {
    wd(e, {
      ...t,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  Dm(e, "cutout_preview", (n) => {
    wd(n, {
      ...t,
      onOpen: ja(n, t.onOpen)
    });
  });
}
const fn = {
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
}, cr = "pen";
function Dd(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function F1(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((x) => {
      i.push(String(x || ""));
    }), !i.length)) return;
    const w = Number(y.index);
    Number.isInteger(w) ? w === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, w)) : a = i.length - 1;
  }
  function p(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > c && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      p(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = i.length, w = Math.max(0, y - u), x = a >= 0 ? Math.max(0, Math.min(a, w)) : w, M = i.slice(x, x + u), A = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - x));
      return {
        version: 1,
        entries: M,
        index: A
      };
    },
    hydrate: f
  };
}
function ct(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function L1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function z1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const c = ct(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(c ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function $1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function j1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = ct(e.t, 0), i = ct(e.widthScale, null), a = ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const c = ct(e.u, null), u = ct(e.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const c = ct(e.u, null), u = ct(e.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: c,
      v: u,
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Io(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = j1(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function V1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = Io(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = Io(e.points, t, 1);
  if (!c) return null;
  const u = Io(e.rawPoints, t, 1), f = Io(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: u || c.map((p) => ({ ...p })),
    processedPoints: f || c.map((p) => ({ ...p }))
  };
}
function U1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = $1(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = V1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const c = ct(e.size, null), u = ct(e.opacity, null);
  if (c == null || u == null) return null;
  const f = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!f || !p) return null;
  const y = ct(e.radiusValue, null), w = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const M = e.color;
    if (!M || typeof M != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, ct(M.r, 0))),
      g: Math.max(0, Math.min(1, ct(M.g, 0))),
      b: Math.max(0, Math.min(1, ct(M.b, 0))),
      a: Math.max(0, Math.min(1, ct(M.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: p,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: ct(e.hardness, null),
    flow: ct(e.flow, null),
    spacing: ct(e.spacing, null),
    createdAt: Math.trunc(ct(e.createdAt, 0)),
    color: x,
    radiusModel: w,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Od(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = U1(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function H1(e) {
  if (!e || typeof e != "object") return null;
  const t = ct(e.u0, null), n = ct(e.v0, null), i = ct(e.u1, null), a = ct(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function B1(e) {
  const t = e || {};
  return {
    du: ct(t.du, 0) ?? 0,
    dv: ct(t.dv, 0) ?? 0,
    rot_deg: ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ct(t.scale, 1) ?? 1)
  };
}
function G1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const c = H1(e.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: B1(e.transform)
  } : null;
}
function K1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = G1(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Ea(e) {
  const t = L1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: z1(e.groups),
    paint: Od(e.paint, "paint"),
    mask: Od(e.mask, "mask"),
    raster_objects: K1(e.raster_objects)
  };
}
const zr = 1, $r = 179, Rd = 85;
function Fd(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function W1(e, t) {
  let n = ot(e, 0) - ot(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Y1(e, t, { shiftKey: n = !1, altKey: i = !1 } = {}) {
  let a = ot(e, 0) + ot(t, 0) * Ji;
  return n ? a = Math.round(a / 15) * 15 : !i && Math.abs(Fd(a)) <= 1 && (a = 0), Fd(a);
}
function ot(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Rs(e = {}) {
  const t = G(ot(e.hFOV_deg, 90), zr, $r), n = G(ot(e.vFOV_deg, 60), zr, $r), i = Math.tan(t * nr * 0.5), a = Math.tan(n * nr * 0.5);
  return {
    yawDeg: ot(e.yaw_deg, 0),
    pitchDeg: ot(e.pitch_deg, 0),
    rollDeg: ot(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function Vl(e, t) {
  const n = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Rs(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function q1(e, t) {
  const n = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, ot(t, 1)), c = Math.min(n, i * a);
  return { width: c, height: c / a };
}
function X1(e, t) {
  const n = Math.max(1e-12, ot(t, 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), c = G(2 * Math.atan(i / (2 * n)) * Ji, zr, $r), u = G(2 * Math.atan(a / (2 * n)) * Ji, zr, $r);
  return { hFOV_deg: c, vFOV_deg: u };
}
function J1(e, t, n) {
  const i = ot(e == null ? void 0 : e.x, 0), a = ot(e == null ? void 0 : e.y, 0), c = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Rs(t), p = Math.max(1e-12, ot(n, 1)), y = 2 * p * f.tanHalfX, w = 2 * p * f.tanHalfY;
  return {
    x: i + (c - y) * 0.5,
    y: a + (u - w) * 0.5,
    w: y,
    h: w,
    focalPx: p
  };
}
function Ld(e, t, n = Rd) {
  const i = Math.max(1e-12, ot(t, 1)), a = G(ot(n, Rd), 1, 89.999), c = i * Math.tan(a * nr), u = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, c),
    halfH: Math.min(f * 0.5, c)
  };
}
function zd(e, t) {
  const n = G(ot(e, 60), zr, $r), i = Math.max(1e-6, ot(t, 1));
  return G(
    2 * Math.atan(Math.tan(n * nr * 0.5) * i) * Ji,
    zr,
    $r
  );
}
function $d(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Z1(e, t) {
  const n = $d(e, 1), i = $d(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), f = (y, w) => w ? f(w, y % w) : y, p = f(c, u) || 1;
  return `${Math.max(1, Math.round(c / p))}:${Math.max(1, Math.round(u / p))}`;
}
function Zo(e) {
  const t = G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * nr, n = G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * nr;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Qr(e) {
  const t = Zo(e), i = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (i == null ? void 0 : i[0]) || Z1(t, 1);
}
function Om(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Qr(t), t;
}
function Ii(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Qr(e);
}
function Q1(e, t) {
  const n = Rs(e), i = ot(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * Ji, c = 2 * Math.atan(n.tanHalfY * i) * Ji;
  return a < zr || a > $r || c < zr || c > $r ? null : { hFOV_deg: a, vFOV_deg: c };
}
let Co = { text: null, parsed: null };
function Bt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function gc(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function e_({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: i = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Bt(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ea(null),
    painting_layer: null,
    ui_settings: gc(i),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function t_(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function n_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function r_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function i_(e) {
  return Array.isArray(e) ? e.map((t) => Om(t)) : [];
}
function a_(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, i = e_(n), a = String(e || "").trim();
  if (!a) return i;
  try {
    let c = null;
    if (Co.text === a ? c = Co.parsed : (c = JSON.parse(a), Co = { text: a, parsed: c }), !c || typeof c != "object" || Array.isArray(c)) return i;
    const u = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...i,
      ...c,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: n_(c.assets),
      stickers: r_(c.stickers),
      shots: i_(c.shots),
      painting: Ea(c.painting),
      painting_layer: c.painting_layer && typeof c.painting_layer == "object" ? c.painting_layer : null,
      ui_settings: gc(c.ui_settings),
      active: c.active && typeof c.active == "object" ? { ...c.active } : { ...i.active }
    };
    return u && (f.ui_settings = gc({ ...f.ui_settings, ...u })), f.output_preset = t_(
      n.outputPreset,
      Number(f.output_preset || i.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || i.bg_color), f.coverage = Bt(n.coverage), delete f.editor_history, f;
  } catch {
    return Co = { text: a, parsed: null }, i;
  }
}
function jd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Vd(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function o_(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Ud(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const i = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (i.transform = o_((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function s_(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Xi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Vd((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, u) => Ud(c, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Vd((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, u) => Ud(c, u)).filter(Boolean);
  return Xi({
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: t,
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: n
    },
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  });
}
function Va(e = {}) {
  const t = String((e == null ? void 0 : e.mode) || "panorama");
  return t === "cutout" ? {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function ys(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function l_(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || ai((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(x) {
    var M;
    return JSON.stringify({
      stateRevision: (x == null ? void 0 : x.stateRevision) || "",
      background: (x == null ? void 0 : x.background) || null,
      objects: Array.isArray((M = x == null ? void 0 : x.objectPass) == null ? void 0 : M.objects) ? x.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (x == null ? void 0 : x.overlay) || {}
    });
  }
  function u(x = {}) {
    const M = s_(x), A = c(M);
    return a === A || !n.syncState(M) ? !1 : (i = M, a = A, !0);
  }
  function f(x = {}, M = {}) {
    if (!i) return null;
    const A = Va(x), _ = ys(M);
    return n.renderToTarget(t, A, _);
  }
  function p(x, M, A = {}, _ = {}) {
    if (!x || !M || !i) return !1;
    const F = Va(A), U = ys({
      ..._,
      width: Number((M == null ? void 0 : M.w) || (_ == null ? void 0 : _.width) || 1),
      height: Number((M == null ? void 0 : M.h) || (_ == null ? void 0 : _.height) || 1)
    });
    return n.renderToContext(x, M, F, U);
  }
  function y() {
    var x;
    i = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function w() {
    var x;
    y(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: y,
    dispose: w
  };
}
function c_(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function u_(e, t = {}) {
  var p, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = Va((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = ys(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return c_(c, u, f);
}
function f_(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = Va((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function p() {
    const M = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), _ = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), F = ys({ width: M, height: A, dpr: _ });
    return i.width = Math.max(1, Math.round(F.width * F.dpr)), i.height = Math.max(1, Math.round(F.height * F.dpr)), i.style.width = `${F.width}px`, i.style.height = `${F.height}px`, F;
  }
  function y() {
    if (u || !a) return !1;
    const M = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...M, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function w() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, y();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => w()) : null;
  return x == null || x.observe(t), w(), {
    canvas: i,
    setView(M) {
      c = Va(M || {}), w();
    },
    getView() {
      return { ...c };
    },
    present: y,
    requestRender: w,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), i.remove();
    }
  };
}
function d_(e = {}) {
  const t = l_({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(Rr(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, Rr(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? Rr(i.shot) : i == null ? void 0 : i.view;
      return f_(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: Rr(n.shot) } : n;
      return u_(t, i);
    }
  };
}
function Ci(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function h_(e = {}) {
  const t = String(e.preview_quality || "balanced"), n = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" }
  ];
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y,
    qualityOpen: !1,
    qualityLabel: (n.find((i) => i.value === t) || n[1]).label,
    qualityOptions: n.map((i) => ({ ...i, active: i.value === t }))
  };
}
function m_({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: p
}) {
  var z, C;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", w = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
    pickerHueColor: i({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (O, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return w;
  const x = ((z = t.find((O) => a(e.paintColor, O.color))) == null ? void 0 : z.id) || "", M = !x, A = c(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((C = e.customPaintColor) == null ? void 0 : C.a) ?? 1))) * 100), F = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), U = e.brushSizes[F] ?? 10, V = p(), k = Array.from({ length: 8 }, (O, j) => e.customPaintHistory[j] || null);
  return {
    ...w,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: M,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...u(A.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: k.map((O, j) => ({
      index: j,
      color: O ? { cssColor: i(O, 1) } : null
    })),
    sizeValue: U,
    sizeText: String(U),
    sizeFill: `${Math.max(0, Math.min(100, (U - 1) / 119 * 100))}%`,
    sizeDisabled: V,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function p_({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function g_({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: u,
  notes: f,
  visibilityRows: p,
  uiSettings: y,
  normalizeCoverageValue: w
}) {
  return {
    coverage: { value: w(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function b_({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: p,
  isExternalSticker: y,
  isStickerHidden: w,
  canRestoreSelectedToInitial: x,
  iconSet: M
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let A = [];
  if (n.length > 1)
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete }
    ];
  else if (i === "stroke")
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back }
    ], y(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), y(t)) {
      const O = x(), j = w(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: O ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !O
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: j ? "Show" : "Hide",
        tip: j ? "Show input image" : "Hide input image",
        icon: j ? M.eye : M.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed }), y(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((O) => ({ value: O, label: O, active: f === O }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete }
    ];
  const _ = a.corners.map((O) => ({ x: Number(O == null ? void 0 : O.x), y: Number(O == null ? void 0 : O.y) })).filter((O) => Number.isFinite(O.x) && Number.isFinite(O.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = _.map((O) => O.x), U = _.map((O) => O.y), V = Math.min(...F), k = Math.max(...F), z = Math.min(...U), C = Math.max(...U);
  return {
    visible: !0,
    left: (V + k) * 0.5,
    top: C + 18,
    items: A,
    anchor: { minX: V, maxX: k, minY: z, maxY: C }
  };
}
const Fe = Object.freeze({
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
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool"
}), y_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, v_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: y_(t[2])
})), __ = {
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
  pencil_tool: { name: "pencil", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' />" },
  spray_can_tool: { name: "spray", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7' /><path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' /><path d='M15 7h.01' /><path d='M18 9h.01' /><path d='M18 5h.01' /><path d='M21 3h.01' /><path d='M21 7h.01' /><path d='M21 11h.01' /><path d='M10 7h1' />" },
  highlighter_tool: { name: "highlight", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M12.5 5.5l4 4' /><path d='M4.5 13.5l4 4' /><path d='M21 15v4h-8l4 -4l4 0' />" },
  paintbrush_vertical_tool: { name: "brush", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21v-4a4 4 0 1 1 4 4h-4' /><path d='M21 3a16 16 0 0 0 -12.8 10.2' /><path d='M21 3a16 16 0 0 1 -10.2 12.8' /><path d='M10.6 9a9 9 0 0 1 4.4 4.4' />" },
  eraser_tool: { name: "eraser", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' /><path d='M18 13.3l-6.3 -6.3' />" },
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" }
}, Hd = Object.fromEntries(
  Object.entries(__).map(([e, t]) => [e, {
    name: t.name,
    elements: v_(t.body)
  }])
), Mn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = St(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Hd, i) ? Hd[i] : null;
    });
    return (i, a) => n.value ? (ke(), Ie("svg", {
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
      (ke(!0), Ie(Ze, null, Lt(n.value.elements, (c, u) => (ke(), Ie(Ze, {
        key: `${n.value.name || e.icon || "icon"}-${c.tag}-${u}`
      }, [
        c.tag === "path" ? (ke(), Ie("path", Er({
          key: 0,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "circle" ? (ke(), Ie("circle", Er({
          key: 1,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "rect" ? (ke(), Ie("rect", Er({
          key: 2,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "line" ? (ke(), Ie("line", Er({
          key: 3,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polyline" ? (ke(), Ie("polyline", Er({
          key: 4,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polygon" ? (ke(), Ie("polygon", Er({
          key: 5,
          ref_for: !0
        }, c.attrs), null, 16)) : Ft("", !0)
      ], 64))), 128))
    ], 2)) : Ft("", !0);
  }
}, br = {
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
    const t = e, n = St(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (ke(), Qi(Sb(e.tag), Er({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Ah(() => [
        qe(Mn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, x_ = { class: "pano-floating-right" }, w_ = ["data-settled"], S_ = ["data-ready", "data-settled"], M_ = ["aria-label", "data-tip"], N_ = {
  key: 1,
  class: "pano-camera-preview-label"
}, k_ = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Ie(Ze, null, [
      ce("div", x_, [
        (ke(!0), Ie(Ze, null, Lt(e.buttons, (i) => (ke(), Qi(br, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ba(ce("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ce("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ce("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (ke(), Ie("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            qe(Mn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, M_)) : Ft("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ke(), Ie("div", N_, vt(e.preview.label || "Preview unavailable"), 1)) : Ft("", !0)
        ], 14, S_)
      ], 8, w_), [
        [Ka, e.preview.visible]
      ])
    ], 64));
  }
}, P_ = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, A_ = ["y2", "transform"], T_ = ["transform"], I_ = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, c) => c * 15), i = St(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, c) => Ba((ke(), Ie("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ke(), Ie("svg", P_, [
        c[1] || (c[1] = ce("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ke(!0), Ie(Ze, null, Lt(Dr(n), (u) => (ke(), Ie("line", {
          key: u,
          class: ut(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, A_))), 128)),
        ce("g", { transform: i.value }, [...c[0] || (c[0] = [
          ce("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, T_),
        c[2] || (c[2] = ce("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ka, e.model.visible === !0]
    ]);
  }
}, C_ = { class: "pano-frame-aspect-control" }, E_ = { class: "pano-frame-aspect-popover" }, D_ = ["data-aspect", "disabled"], O_ = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Ie("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      ce("div", C_, [
        qe(br, {
          icon: e.model.aspectIcon,
          label: "Aspect Ratio",
          tip: "Aspect ratio",
          pressed: e.model.aspectOpen ? "true" : "false",
          attrs: { "data-action": "frame-aspect", disabled: e.model.disabled === !0 }
        }, null, 8, ["icon", "pressed", "attrs"]),
        Ba(ce("div", E_, [
          (ke(!0), Ie(Ze, null, Lt(e.model.aspectChoices || [], (i) => (ke(), Ie("button", {
            key: i.value,
            class: ut(["pano-btn pano-frame-aspect-choice", { active: i.active === !0 }]),
            type: "button",
            "data-action": "frame-aspect-set",
            "data-aspect": i.value,
            disabled: e.model.disabled === !0
          }, vt(i.label), 11, D_))), 128))
        ], 512), [
          [Ka, e.model.aspectOpen === !0]
        ])
      ]),
      qe(br, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      qe(I_, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, R_ = ["aria-label"], F_ = { class: "pano-canvas-confirm-title" }, L_ = { class: "pano-canvas-confirm-text" }, z_ = { class: "pano-canvas-confirm-actions" }, $_ = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, j_ = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Qn(null), i = /* @__PURE__ */ Qn(null);
    let a = null;
    function c() {
      const x = i.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((M) => M instanceof HTMLElement ? !M.hidden && M.tabIndex >= 0 && M.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const M = i.value;
      if (!M) return;
      const A = M.querySelector(`[data-action='${x}']`);
      A instanceof HTMLButtonElement && A.click();
    }
    function f() {
      var F;
      const x = i.value;
      if (!x) return;
      const M = x.querySelector("[data-action='confirm-accept']");
      if (M instanceof HTMLElement) {
        M.focus();
        return;
      }
      const _ = c()[0] || x;
      (F = _ == null ? void 0 : _.focus) == null || F.call(_);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(x) {
      var V;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const M = c(), A = i.value;
      if (!M.length) {
        x.preventDefault(), (V = A == null ? void 0 : A.focus) == null || V.call(A);
        return;
      }
      const _ = M[0], F = M[M.length - 1], U = document.activeElement;
      if (x.shiftKey) {
        (U === _ || U === A || !(A != null && A.contains(U))) && (x.preventDefault(), F.focus());
        return;
      }
      (U === F || !(A != null && A.contains(U))) && (x.preventDefault(), _.focus());
    }
    function w(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return Hi(() => t.model.visible, (x, M) => {
      if (x) {
        a = document.activeElement, Ec(() => {
          f();
        });
        return;
      }
      M && p();
    }, { immediate: !0 }), Rc(() => {
      p();
    }), (x, M) => e.model.visible === !0 ? (ke(), Ie("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: sm(w, ["self"])
    }, [
      ce("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        ce("div", F_, vt(e.model.title), 1),
        ce("div", L_, vt(e.model.text), 1),
        ce("div", z_, [
          M[0] || (M[0] = ce("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ce("button", $_, vt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, R_)
    ], 512)) : Ft("", !0);
  }
}, V_ = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const i = n, a = /* @__PURE__ */ Qn(null);
    let c, u = !1;
    function f() {
      if (!u) return { active: !1, intent: void 0 };
      const x = c;
      return c = void 0, u = !1, { active: !0, intent: x };
    }
    function p(x) {
      const M = a.value;
      return M instanceof HTMLInputElement ? (c = x, u = !0, M.value = "", M.click(), !0) : !1;
    }
    function y(x) {
      var F, U;
      const { active: M, intent: A } = f();
      if (!M) return;
      const _ = ((U = (F = x.target) == null ? void 0 : F.files) == null ? void 0 : U[0]) || null;
      if (_) {
        i("file-selected", { intent: A, file: _ });
        return;
      }
      i("file-cancelled", { intent: A });
    }
    function w() {
      const { active: x, intent: M } = f();
      x && i("file-cancelled", { intent: M });
    }
    return t({ open: p }), (x, M) => (ke(), Ie("input", {
      ref_key: "inputRef",
      ref: a,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: y,
      onCancel: w
    }, null, 544));
  }
}, U_ = ["data-paint-pane"], H_ = ["hidden"], B_ = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], G_ = ["aria-pressed", "disabled"], K_ = ["hidden"], W_ = { class: "pano-paint-color-pop-head" }, Y_ = { class: "pano-paint-color-field" }, q_ = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, X_ = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, J_ = { class: "pano-paint-color-field" }, Z_ = { class: "pano-paint-alpha-wrap" }, Q_ = ["value"], ex = { "data-paint-alpha-value": "" }, tx = ["hidden"], nx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, rx = ["data-paint-history-index", "aria-label", "disabled"], ix = ["data-paint-footer"], ax = ["data-paint-group"], ox = ["hidden"], sx = ["value", "disabled"], lx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, cx = ["hidden"], ux = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(i) {
      return { "--swatch": String((i == null ? void 0 : i.cssColor) || "") };
    }
    function n(i) {
      return i ? { "--swatch": String(i.cssColor || "") } : {};
    }
    return (i, a) => (ke(), Ie("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ke(!0), Ie(Ze, null, Lt(e.panes, (c) => {
        var u;
        return ke(), Ie("div", {
          key: c.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (ke(), Ie("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ke(!0), Ie(Ze, null, Lt(e.paintSwatches, (f) => (ke(), Ie("button", {
              key: f.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Et(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, B_))), 128)),
            ce("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, G_),
            ce("div", {
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
              ce("div", W_, [
                ce("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ce("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ce("div", Y_, [
                ce("div", q_, [
                  ce("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ce("div", X_, [
                  ce("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ce("label", J_, [
                a[1] || (a[1] = ce("span", null, "Opacity", -1)),
                ce("div", Z_, [
                  ce("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Q_),
                  ce("span", ex, vt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ce("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ce("div", nx, [
                  (ke(!0), Ie(Ze, null, Lt(e.state.historyEntries || [], (f) => (ke(), Ie("button", {
                    key: f.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Et(n(f.color))
                  }, null, 14, rx))), 128))
                ])
              ], 8, tx)
            ], 12, K_)
          ], 10, H_)) : Ft("", !0),
          ce("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            ce("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (ke(!0), Ie(Ze, null, Lt(c.tools, (f) => {
                var p;
                return ke(), Qi(br, {
                  key: `${c.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[c.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, ax),
            ce("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ce("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, sx),
              ce("span", lx, vt(e.state.sizeText || "10"), 1)
            ], 10, ox),
            ce("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[c.key]) ?? !c.clearHidden)
            }, [
              qe(br, {
                icon: Dr(Fe).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, cx)
          ], 8, ix)
        ], 10, U_);
      }), 128))
    ], 2));
  }
}, fx = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Qn(null), i = /* @__PURE__ */ Qn(null), a = /* @__PURE__ */ Qn(null);
    function c() {
      return {
        cursor: n.value,
        sizePreview: i.value,
        sizeSample: a.value
      };
    }
    return t({ getRefs: c }), (u, f) => (ke(), Ie(Ze, null, [
      ce("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ce("div", {
        ref_key: "sizePreviewRef",
        ref: i,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ce("div", {
          ref_key: "sizeSampleRef",
          ref: a,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, dx = {
  key: 0,
  class: "pano-cutout-menu"
}, hx = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, mx = ["data-aspect"], px = ["data-action", "aria-label", "data-tip", "disabled"], gx = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Ie("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ke(!0), Ie(Ze, null, Lt(e.model.items || [], (i) => (ke(), Ie(Ze, {
        key: i.key
      }, [
        i.kind === "aspect" ? (ke(), Ie("div", dx, [
          ce("button", hx, [
            qe(Mn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ce("div", {
            class: ut(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ke(!0), Ie(Ze, null, Lt(i.choices || [], (a) => (ke(), Ie("button", {
              key: a.value,
              class: ut(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, vt(a.label), 11, mx))), 128))
          ], 2)
        ])) : (ke(), Ie("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          qe(Mn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, px))
      ], 64))), 128))
    ], 4));
  }
}, bx = {
  class: "pano-side",
  "data-side": ""
}, yx = { class: "pano-side-head" }, vx = { class: "pano-side-title" }, _x = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, xx = {
  key: 0,
  class: "pano-side-scroll"
}, wx = { class: "pano-inspector" }, Sx = { class: "pano-ui-row pano-coverage-row" }, Mx = ["data-selected"], Nx = ["aria-pressed", "disabled"], kx = ["aria-pressed", "disabled"], Px = {
  key: 0,
  class: "pano-section-title"
}, Ax = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Tx = {
  class: "pano-picker",
  "data-picker": "selection"
}, Ix = ["disabled"], Cx = { class: "pano-picker-label" }, Ex = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Dx = ["hidden"], Ox = ["data-selection-id"], Rx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Fx = {
  key: 2,
  class: "pano-state-actions"
}, Lx = ["disabled"], zx = ["data-key"], $x = ["min", "max", "step", "value", "disabled", "data-param-key"], jx = ["min", "max", "step", "value", "disabled", "data-param-key"], Vx = { class: "pano-visibility-section" }, Ux = { class: "pano-visibility-stack" }, Hx = ["data-visibility-row"], Bx = { class: "pano-visibility-name" }, Gx = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Kx = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], Wx = ["open"], Yx = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, qx = { class: "pano-ui-settings-body" }, Xx = { class: "pano-ui-row" }, Jx = ["data-selected"], Zx = ["aria-pressed"], Qx = ["aria-pressed"], ew = { class: "pano-ui-row" }, tw = ["data-selected"], nw = ["aria-pressed"], rw = ["aria-pressed"], iw = { class: "pano-ui-row" }, aw = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, ow = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, sw = { class: "pano-picker-label" }, lw = ["hidden"], cw = ["data-quality"], uw = {
  key: 1,
  class: "pano-side-footer"
}, fw = ["data-action"], dw = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = St(() => {
      const c = t.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function i(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function a(c, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    return (c, u) => {
      var f, p, y, w, x;
      return ke(), Ie("div", bx, [
        ce("div", yx, [
          ce("div", vx, [
            ce("span", _x, [
              qe(Mn, {
                icon: Dr(Fe).globe
              }, null, 8, ["icon"])
            ]),
            ce("span", null, vt(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = ce("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = ce("div", { class: "pano-divider" }, null, -1)),
        n.value ? (ke(), Ie("div", xx, [
          ce("div", wx, [
            u[12] || (u[12] = ce("div", { class: "pano-section-title" }, [
              ce("span", null, "Scene")
            ], -1)),
            ce("div", Sx, [
              u[1] || (u[1] = ce("label", null, "Coverage", -1)),
              ce("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, Nx),
                ce("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, kx)
              ], 8, Mx)
            ]),
            e.model.transformTitle !== !1 ? (ke(), Ie("div", Px, [...u[2] || (u[2] = [
              ce("span", null, "Transform", -1)
            ])])) : Ft("", !0),
            e.model.selectionPicker ? (ke(), Ie("div", Ax, [
              ce("label", null, vt(e.model.selectionPicker.label), 1),
              ce("div", Tx, [
                ce("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ce("span", Cx, [
                    e.model.selectionPicker.currentIcon ? (ke(), Ie("span", Ex, [
                      qe(Mn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Ft("", !0),
                    ce("span", null, vt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Ix),
                ce("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ke(!0), Ie(Ze, null, Lt(e.model.selectionPicker.items || [], (M) => (ke(), Ie("button", {
                    key: M.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: M.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": M.id
                  }, [
                    M.icon ? (ke(), Ie("span", Rx, [
                      qe(Mn, {
                        icon: M.icon
                      }, null, 8, ["icon"])
                    ])) : Ft("", !0),
                    ce("span", null, vt(M.label), 1)
                  ], 10, Ox))), 128))
                ], 8, Dx)
              ])
            ])) : Ft("", !0),
            e.model.copyStateButton ? (ke(), Ie("div", Fx, [
              ce("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                qe(Mn, {
                  icon: Dr(Fe).copy
                }, null, 8, ["icon"]),
                ce("span", null, vt(e.model.copyStateButton.label), 1)
              ], 8, Lx)
            ])) : Ft("", !0),
            ce("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ke(!0), Ie(Ze, { key: 0 }, Lt(e.model.notes, (M) => (ke(), Ie("div", {
                key: M,
                class: "pano-param-note"
              }, vt(M), 1))), 128)) : (ke(!0), Ie(Ze, { key: 1 }, Lt(e.model.params || [], (M) => (ke(), Ie("div", {
                key: M.key,
                class: "pano-field",
                "data-key": M.key
              }, [
                ce("label", null, vt(M.label), 1),
                ce("input", {
                  type: "range",
                  min: M.min,
                  max: M.max,
                  step: M.step,
                  value: M.value,
                  disabled: a(M, e.model),
                  style: Et(i(M)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": M.key
                }, null, 12, $x),
                ce("input", {
                  type: "number",
                  min: M.min,
                  max: M.max,
                  step: M.step,
                  value: M.displayValue,
                  disabled: a(M, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": M.key
                }, null, 8, jx)
              ], 8, zx))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (ke(), Ie(Ze, { key: 3 }, [
              u[5] || (u[5] = ce("div", { class: "pano-divider" }, null, -1)),
              ce("div", Vx, [
                u[4] || (u[4] = ce("div", { class: "pano-section-title" }, [
                  ce("span", null, "Layers")
                ], -1)),
                ce("div", Ux, [
                  (ke(!0), Ie(Ze, null, Lt(e.model.visibilityRows, (M) => (ke(), Ie("div", {
                    key: M.key,
                    class: ut(["pano-visibility-row", { "is-hidden": M.visible === !1, "is-disabled": M.enabled === !1 }]),
                    "data-visibility-row": M.key
                  }, [
                    ce("span", Bx, [
                      ce("span", Gx, [
                        qe(Mn, {
                          icon: M.icon
                        }, null, 8, ["icon"])
                      ]),
                      ce("span", null, vt(M.label), 1)
                    ]),
                    ce("button", {
                      class: ut(["pano-visibility-toggle", { active: M.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": M.key,
                      "aria-label": M.ariaLabel,
                      "aria-pressed": M.visible === !0 ? "true" : "false",
                      "data-tip": M.tip,
                      disabled: M.enabled === !1
                    }, [
                      qe(Mn, {
                        icon: M.visible === !0 ? Dr(Fe).eye : Dr(Fe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Kx)
                  ], 10, Hx))), 128))
                ])
              ])
            ], 64)) : Ft("", !0),
            e.model.uiSettings ? (ke(), Ie("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ce("summary", null, [
                u[6] || (u[6] = ce("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ce("span", Yx, [
                  qe(Mn, {
                    icon: Dr(Fe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ce("div", qx, [
                ce("div", Xx, [
                  u[7] || (u[7] = ce("label", null, "Drag X", -1)),
                  ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, Zx),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Qx)
                  ], 8, Jx)
                ]),
                ce("div", ew, [
                  u[8] || (u[8] = ce("label", null, "Drag Y", -1)),
                  ce("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, nw),
                    ce("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, rw)
                  ], 8, tw)
                ]),
                ce("div", iw, [
                  u[10] || (u[10] = ce("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ce("div", aw, [
                    ce("button", ow, [
                      ce("span", sw, vt(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = ce("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ce("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (ke(!0), Ie(Ze, null, Lt(e.model.uiSettings.qualityOptions || [], (M) => (ke(), Ie("button", {
                        key: M.value,
                        type: "button",
                        class: ut(["pano-picker-item", { active: M.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": M.value
                      }, vt(M.label), 11, cw))), 128))
                    ], 8, lw)
                  ])
                ]),
                u[11] || (u[11] = ce("div", { class: "pano-ui-row" }, [
                  ce("span"),
                  ce("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Wx)) : Ft("", !0)
          ])
        ])) : Ft("", !0),
        (e.model.footerButtons || []).length ? (ke(), Ie("div", uw, [
          (ke(!0), Ie(Ze, null, Lt(e.model.footerButtons, (M) => (ke(), Ie("button", {
            key: M.action,
            class: ut(["pano-btn", { "pano-btn-primary": M.primary === !0 }]),
            type: "button",
            "data-action": M.action
          }, vt(M.label), 11, fw))), 128))
        ])) : Ft("", !0)
      ]);
    };
  }
}, hw = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ke(), Ie("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, vt(e.model.text || ""), 7));
  }
}, mw = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, pw = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ke(), Ie("div", mw, [
      (ke(!0), Ie(Ze, null, Lt(e.buttons, (i) => Ba((ke(), Qi(br, {
        key: i.key,
        "extra-class": {
          active: i.active,
          "pano-btn-icon-accent": i.accent
        },
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { [i.attr]: i.value, disabled: i.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Ka, i.visible !== !1]
      ])), 128))
    ]));
  }
}, gw = ["data-video-ready"], bw = { class: "pano-video-transport-shell" }, yw = { class: "pano-video-controls-left" }, vw = { class: "pano-video-filmstrip" }, _w = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, xw = ["src", "onLoad"], ww = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Sw = ["max", "value", "disabled"], Mw = { class: "pano-video-controls-right" }, Nw = ["data-has-audio"], kw = { class: "pano-video-volume-pop" }, Pw = ["value", "disabled"], Aw = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), i = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), a = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Fe.pause : Fe.play;
    }), c = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = St(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Fe.loop_off : Fe.loop;
    }), p = St(() => {
      var O, j;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = St(() => {
      var O, j, q;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Fe.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number(((q = t.state) == null ? void 0 : q.volume) ?? 1) <= 0 ? Fe.volume_muted : Fe.volume2;
    }), w = St(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), x = St(() => ({ left: `${w.value}%` })), M = St(() => {
      var J, ee;
      const O = (J = t.state) == null ? void 0 : J.volumePct, j = Number(((ee = t.state) == null ? void 0 : ee.volume) ?? 1) * 100, q = Number(O ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, q))}%`
      };
    }), A = St(() => {
      var q, J;
      const j = [
        String(((q = t.state) == null ? void 0 : q.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((ee, I) => Math.max(ee, I.length), 4);
      return `${Math.max(4, j)}ch`;
    }), _ = St(() => ({ "--pano-video-time-ch": A.value })), F = St(() => {
      var q, J;
      const O = Array.isArray((q = t.state) == null ? void 0 : q.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const j = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: j }, (ee, I) => ({
        id: `placeholder-${I}`,
        src: "",
        label: ""
      }));
    }), U = /* @__PURE__ */ Qn(/* @__PURE__ */ new Set()), V = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), k = (O) => U.value.has(V(O)), z = (O) => {
      const j = new Set(U.value);
      j.add(V(O)), U.value = j;
    };
    Hi(F, (O) => {
      const j = new Set(O.map(V)), q = /* @__PURE__ */ new Set();
      for (const J of U.value)
        j.has(J) && q.add(J);
      U.value = q;
    }, { immediate: !0 });
    const C = St(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, j) => (ke(), Ie("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(C.value)
    }, [
      j[1] || (j[1] = ce("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ce("div", bw, [
        ce("div", yw, [
          qe(br, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ce("div", {
            class: "pano-video-time pano-video-time-start",
            style: Et(_.value)
          }, vt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ce("div", vw, [
          ce("div", _w, [
            (ke(!0), Ie(Ze, null, Lt(F.value, (q) => (ke(), Ie("div", {
              key: V(q),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !q.src,
                "is-loaded": q.src && k(q)
              }])
            }, [
              q.src ? (ke(), Ie("img", {
                key: 0,
                src: q.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => z(q)
              }, null, 40, xw)) : (ke(), Ie("span", ww))
            ], 2))), 128))
          ]),
          ce("div", {
            class: "pano-video-playhead",
            style: Et(x.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
            ce("span", { class: "pano-video-playhead-line" }, null, -1),
            ce("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ce("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, Sw)
        ]),
        ce("div", Mw, [
          ce("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(_.value)
          }, vt(e.state.durationLabel || "0:00"), 5),
          qe(br, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: c.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ce("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ce("div", kw, [
              ce("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(M.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Pw)
            ]),
            qe(br, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Nw)
        ])
      ])
    ], 14, gw));
  }
}, Tw = { class: "pano-floating-top" }, Iw = ["data-selected", "data-view-count"], Cw = ["data-view", "aria-pressed", "aria-label", "disabled"], Ew = { class: "label" }, Dw = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return ke(), Ie("div", Tw, [
        ce("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ke(!0), Ie(Ze, null, Lt(e.buttons, (a) => Ba((ke(), Ie("button", {
            key: a.key,
            class: ut(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            qe(Mn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ce("span", Ew, vt(a.label), 1)
          ], 10, Cw)), [
            [Ka, a.visible !== !1]
          ])), 128))
        ], 8, Iw)
      ]);
    };
  }
};
function Rm(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Fe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Fe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Fe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Fe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Fe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Fe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Fe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Fe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Fe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Fe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Fe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Fe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Fe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Fe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Fe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Fe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Fe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Fe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Fe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Fe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Fe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Fe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Fe.lasso_tool }
        ]
      }
    ]
  };
}
const Ow = ["aria-label"], Rw = { class: "pano-stage-wrap" }, Fw = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Lw = {
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
    const i = e, a = n;
    let c = "", u = !1, f = null;
    const p = /* @__PURE__ */ Qn(null), y = /* @__PURE__ */ Qn(null), w = /* @__PURE__ */ Qn(null);
    function x() {
      var I, W;
      return ((W = (I = w.value) == null ? void 0 : I.getRefs) == null ? void 0 : W.call(I)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function M(I) {
      var W, ie;
      return ((ie = (W = y.value) == null ? void 0 : W.open) == null ? void 0 : ie.call(W, I)) === !0;
    }
    function A(I) {
      a("image-file-selected", I);
    }
    function _(I) {
      a("image-file-cancelled", I);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: M });
    const F = St(() => i.readOnly === !0), U = St(() => i.shellPreset || Rm(i.type)), V = St(() => {
      var W, ie, ae;
      const I = String((((W = i.uiState) == null ? void 0 : W.stageStatus) === "failed" ? (ie = i.uiState) == null ? void 0 : ie.stageStatusDetail : (ae = i.uiState) == null ? void 0 : ae.stageWarningDetail) ?? "");
      return I === "background" ? "Background preview unavailable. Re-run the node to refresh it." : I === "stickers" ? "One or more sticker previews are unavailable." : I === "frame" ? "The editor hit a rendering error. Check the browser console for details." : I.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), k = St(() => {
      var W;
      const I = Array.isArray((W = U.value) == null ? void 0 : W.floatingButtons) ? U.value.floatingButtons.slice() : [];
      return F.value && I.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Fe.fullscreen
      }), I;
    });
    function z() {
      const I = p.value;
      return I ? Array.from(I.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((W) => W instanceof HTMLElement ? !W.hidden && W.tabIndex >= 0 && W.offsetParent !== null : !1) : [];
    }
    function C() {
      var ie;
      const W = z()[0] || p.value;
      (ie = W == null ? void 0 : W.focus) == null || ie.call(W);
    }
    function O() {
      var I;
      f != null && f.isConnected && ((I = f.focus) == null || I.call(f)), f = null;
    }
    function j(I) {
      var W, ie, ae, be;
      if (!I.defaultPrevented) {
        if (I.key === "Tab") {
          const Z = z();
          if (!Z.length) {
            I.preventDefault(), (ie = (W = p.value) == null ? void 0 : W.focus) == null || ie.call(W);
            return;
          }
          const me = Z[0], P = Z[Z.length - 1], K = document.activeElement;
          if (I.shiftKey) {
            (K === me || K === p.value || !((ae = p.value) != null && ae.contains(K))) && (I.preventDefault(), P.focus());
            return;
          }
          (K === P || !((be = p.value) != null && be.contains(K))) && (I.preventDefault(), me.focus());
          return;
        }
        I.key === "Escape" && a("close");
      }
    }
    function q() {
      u || (c = document.body.style.overflow, document.body.style.overflow = "hidden", u = !0);
    }
    function J() {
      u && (document.body.style.overflow = c, u = !1);
    }
    function ee(I) {
      document.removeEventListener("keydown", j), I ? (f || (f = document.activeElement), q(), document.addEventListener("keydown", j), Ec(() => {
        C();
      })) : (J(), O());
    }
    return Oh(() => {
      ee(i.open);
    }), Rc(() => {
      J(), document.removeEventListener("keydown", j), O();
    }), Hi(() => i.open, (I) => {
      ee(I);
    }), (I, W) => e.open ? (ke(), Ie("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: W[0] || (W[0] = sm((ie) => a("close"), ["self"]))
    }, [
      ce("section", {
        ref_key: "modalRef",
        ref: p,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ce("div", Rw, [
          W[1] || (W[1] = ce("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          W[2] || (W[2] = ce("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          W[3] || (W[3] = ce("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ke(), Ie("div", Fw, vt(V.value), 1)) : Ft("", !0),
          W[4] || (W[4] = ce("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ce("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          qe(fx, {
            ref_key: "paintOverlaysRef",
            ref: w
          }, null, 512),
          qe(V_, {
            ref_key: "imageFilePickerRef",
            ref: y,
            onFileSelected: A,
            onFileCancelled: _
          }, null, 512),
          F.value ? Ft("", !0) : (ke(), Ie(Ze, { key: 1 }, [
            qe(pw, {
              buttons: e.uiState.toolButtons || U.value.toolButtons || []
            }, null, 8, ["buttons"]),
            qe(O_, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            qe(ux, {
              "paint-swatches": e.paintSwatches,
              panes: U.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          qe(Aw, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          qe(Dw, {
            buttons: e.uiState.viewButtons || U.value.viewButtons || []
          }, null, 8, ["buttons"]),
          qe(k_, {
            buttons: e.uiState.floatingButtons || k.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          qe(gx, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          qe(hw, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          qe(j_, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Ft("", !0) : (ke(), Qi(dw, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Ow)
    ])) : Ft("", !0);
  }
}, Yn = "loading", Zi = "ready", Xn = "failed";
function Fm(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Lm(e, t = "") {
  return e && (e.__panoLoadState = Zi, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function zm(e, t = "") {
  return e && (e.__panoLoadState = Xn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function bc(e, t) {
  return e ? e.__panoLoadState === Xn ? Xn : typeof t == "function" && t(e) ? Zi : Yn : Zi;
}
function yc(e) {
  return bc(e) === Xn;
}
function zw({ presented: e, background: t = Zi, stickers: n = [] } = {}) {
  if (!e) return { status: Yn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Yn, c = i.includes(Yn);
  if (a && c) return { status: Yn, detail: "mixed" };
  if (a) return { status: Yn, detail: "background" };
  if (c) return { status: Yn, detail: "stickers" };
  const u = t === Xn, f = i.includes(Xn);
  return u && f ? { status: Xn, detail: "mixed" } : u ? { status: Xn, detail: "background" } : f ? { status: Xn, detail: "stickers" } : { status: Zi, detail: "" };
}
function Ei(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const i = new URLSearchParams();
  i.set("filename", n), i.set("type", String(t.type || "output")), t.subfolder && i.set("subfolder", String(t.subfolder));
  const a = `/view?${i.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(a) : a;
}
function Bd(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function $w(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Gd(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function jw(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = $w(e == null ? void 0 : e.graph, n)), i;
}
function Vw(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Uw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  return i.length ? { filename: String(i.pop() || "").trim(), subfolder: i.join("/") } : { filename: "", subfolder: "" };
}
function Hw(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const i of t)
    n ^= i.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Bw({ app: e, api: t, ImageCtor: n, imageState: i } = {}) {
  const a = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return a(C[0]);
      const O = String(C[0] || "").trim();
      if (O)
        return Ei(t, {
          filename: O,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const j of C) {
        const q = a(j);
        if (q) return q;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : Ei(t, C);
  }, c = (C) => {
    if (!C || typeof C != "object") return "";
    const O = String(C.type || "").trim().toLowerCase();
    if (O === "dataurl") return String(C.value || "");
    if (O !== "comfy_image") return "";
    const j = String(C.filename || "").trim();
    return j ? Ei(t, {
      filename: j,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, u = (C) => {
    const O = e == null ? void 0 : e.nodeOutputs;
    if (!O || C == null) return null;
    const j = String(C);
    return O instanceof Map ? O.get(C) || O.get(j) || O.get(Number(j)) || null : O[C] || O[j] || null;
  }, f = (C, O) => {
    var q;
    const j = u(C == null ? void 0 : C.id);
    return Array.isArray((q = j == null ? void 0 : j.ui) == null ? void 0 : q[O]) ? j.ui[O] : Array.isArray(j == null ? void 0 : j[O]) ? j[O] : [];
  }, p = (C, O) => {
    const j = u(C == null ? void 0 : C.id);
    return j != null && j.ui && Object.prototype.hasOwnProperty.call(j.ui, O) ? j.ui[O] : j && Object.prototype.hasOwnProperty.call(j, O) ? j[O] : null;
  }, y = (C, O) => {
    const j = p(C, "pano_sticker_input_state_hash"), q = Array.isArray(j) ? j[0] : j;
    return String(q ?? "").trim() || Hw(O);
  }, w = (C) => {
    const O = [], j = /* @__PURE__ */ new Set();
    for (const q of C || []) {
      const J = a(q);
      !J || j.has(J) || (j.add(J), O.push(J));
    }
    return O;
  }, x = (C, O) => {
    var J;
    const j = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && j.push(C.images), Array.isArray((J = C == null ? void 0 : C.ui) == null ? void 0 : J.images) && C.ui.images.length && j.push(C.ui.images);
    const q = [];
    for (const ee of j)
      O >= 0 && O < ee.length && q.push(ee[O]), q.push(...ee);
    return q;
  }, M = (C, O) => {
    var de;
    const j = String(O || "").trim();
    if (!j) return { src: "", sourceType: "", inputName: "" };
    const q = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [], J = q.findIndex((Me) => String((Me == null ? void 0 : Me.name) || "") === j);
    if (J < 0) return { src: "", sourceType: "", inputName: j };
    const ee = q[J], I = ee == null ? void 0 : ee.link;
    if (I == null) return { src: "", sourceType: "", inputName: j };
    const { originId: W, originSlot: ie } = Gd(Bd(C == null ? void 0 : C.graph, I));
    if (W == null) return { src: "", sourceType: "", inputName: j };
    const ae = jw(C, J, W);
    if (!ae) return { src: "", sourceType: "", inputName: j };
    const be = Number(ie || 0);
    let Z = [];
    try {
      Z = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ae) || [] : [];
    } catch {
      Z = [];
    }
    if (Array.isArray(Z) && Z.length) {
      const Me = [];
      be >= 0 && be < Z.length && Me.push(Z[be]), Me.push(...Z);
      const H = w(Me);
      if (H.length)
        return { src: H[0], srcCandidates: H, sourceType: "appNodeImageUrls", inputName: j };
    }
    const me = w(x(u((ae == null ? void 0 : ae.id) ?? W), be));
    if (me.length)
      return { src: me[0], srcCandidates: me, sourceType: "nodeOutputs", inputName: j };
    const P = Array.isArray(ae == null ? void 0 : ae.imgs) ? ae.imgs : [];
    if (P.length) {
      const Me = [];
      be >= 0 && be < P.length && Me.push(P[be]), Me.push(...P);
      const H = w(Me);
      if (H.length)
        return { src: H[0], srcCandidates: H, sourceType: "nodeImgs", inputName: j };
    }
    const K = (de = ae == null ? void 0 : ae.widgets) == null ? void 0 : de.find((Me) => String((Me == null ? void 0 : Me.name) || "").toLowerCase() === "image");
    if (K) {
      let Me = a(K.value);
      if (Me && !Me.includes("/") && !Me.includes(":") && (ae.comfyClass === "LoadImage" || ae.type === "LoadImage") && (Me = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Me)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Me)}&type=input&subfolder=`), Me) return { src: Me, sourceType: "widget", inputName: j };
    }
    return { src: "", sourceType: "", inputName: j };
  }, A = (C, O = []) => {
    const j = Array.isArray(O) ? O : [O];
    for (const q of j) {
      const J = M(C, q);
      if (String((J == null ? void 0 : J.src) || "").trim()) return J;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (C) => {
    const O = String(C || "").trim();
    if (!O) return [];
    if (Vw(O)) return [O];
    const { filename: j, subfolder: q } = Uw(O);
    return j ? w([
      Ei(t, { filename: j, subfolder: q, type: "temp" }),
      Ei(t, { filename: j, subfolder: q, type: "output" }),
      Ei(t, { filename: j, subfolder: q, type: "input" }),
      O
    ]) : [O];
  };
  return {
    assetSource: c,
    clearFailedLinkedImages: (C) => {
      var O, j;
      try {
        (j = (O = C == null ? void 0 : C.__panoLinkedInputImageCache) == null ? void 0 : O.forEach) == null || j.call(O, (q, J, ee) => {
          var I;
          q != null && q.img && ((I = i == null ? void 0 : i.isImageLoadFailed) != null && I.call(i, q.img)) && ee.delete(J);
        });
      } catch {
      }
    },
    externalStateHash: y,
    invalidateUiImage: (C, O) => {
      var j;
      (j = C == null ? void 0 : C.delete) == null || j.call(C, `__ui__${String(O || "")}`);
    },
    linkedValue: (C, O) => {
      var ee, I, W, ie;
      const j = String(O || ""), q = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.find((ae) => String((ae == null ? void 0 : ae.name) || "") === j) : null;
      if ((q == null ? void 0 : q.link) != null) {
        const { originId: ae, originSlot: be } = Gd(Bd(C == null ? void 0 : C.graph, q.link)), Z = u(ae), me = [
          Z == null ? void 0 : Z.output,
          Z == null ? void 0 : Z.result,
          (ee = Z == null ? void 0 : Z.data) == null ? void 0 : ee.output,
          (I = Z == null ? void 0 : Z.data) == null ? void 0 : I.result,
          (W = Z == null ? void 0 : Z.ui) == null ? void 0 : W.output,
          (ie = Z == null ? void 0 : Z.ui) == null ? void 0 : ie.result
        ];
        for (const P of me) {
          if (!Array.isArray(P)) continue;
          const K = P[Number(be || 0)];
          if (typeof K == "string" && K.trim()) return K;
        }
      }
      const J = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((ae) => String((ae == null ? void 0 : ae.name) || "") === j) : null;
      return String((J == null ? void 0 : J.value) || "");
    },
    loadPreferredExactLinkedImage: (C, O = [], j = null, q = "") => {
      var $e;
      const J = Array.isArray(O) ? O : [O], ee = A(C, J), W = (Array.isArray(ee == null ? void 0 : ee.srcCandidates) && ee.srcCandidates.length ? ee.srcCandidates : [ee == null ? void 0 : ee.src]).map((Qe) => String(Qe || "").trim()).filter(Boolean);
      if (!W.length) return null;
      const ie = w(W.flatMap((Qe) => _(Qe)));
      if (!ie.length) return null;
      C.__panoLinkedInputImageCache || (C.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ae = String(q || J.join("|") || "image_exact"), be = W.join(`
`), Z = C.__panoLinkedInputImageCache.get(ae);
      if (Z && Z.srcRaw === be && Z.img) return Z.img;
      const me = n || globalThis.Image;
      if (typeof me != "function") return null;
      const P = new me();
      ($e = i == null ? void 0 : i.markImageLoading) == null || $e.call(i, P, be);
      const K = { srcRaw: be, resolvedSrc: "", img: P };
      C.__panoLinkedInputImageCache.set(ae, K);
      let de = -1;
      const Me = (Qe) => {
        var pt, kt, Ge;
        Qe === "ready" ? (pt = i == null ? void 0 : i.markImageReady) == null || pt.call(i, P, be) : (kt = i == null ? void 0 : i.markImageFailed) == null || kt.call(i, P, be), j == null || j(P), (Ge = C.setDirtyCanvas) == null || Ge.call(C, !0, !0);
      }, H = () => {
        if (de += 1, de >= ie.length) {
          Me("failed");
          return;
        }
        K.resolvedSrc = ie[de], P.src = K.resolvedSrc;
      };
      return P.onload = () => Me("ready"), P.onerror = () => {
        if (de + 1 < ie.length) {
          H();
          return;
        }
        Me("failed");
      }, H(), P;
    },
    output: u,
    resolvePreferredExactLinkedSource: A,
    source: a,
    uiImage: (C, O, j, q = null) => {
      var be, Z, me;
      const J = f(C, O)[0] || null, ee = a(J);
      if (!ee) return null;
      const I = `__ui__${O}`, W = (be = j == null ? void 0 : j.get) == null ? void 0 : be.call(j, I);
      if (W && W.__panoSrc === ee) return W;
      const ie = n || globalThis.Image;
      if (typeof ie != "function") return null;
      const ae = new ie();
      return ae.__panoSrc = ee, (Z = i == null ? void 0 : i.markImageLoading) == null || Z.call(i, ae, ee), ae.onload = () => {
        var P;
        (P = i == null ? void 0 : i.markImageReady) == null || P.call(i, ae, ee), q == null || q(ae);
      }, ae.onerror = () => {
        var P;
        (P = i == null ? void 0 : i.markImageFailed) == null || P.call(i, ae, ee), q == null || q(ae);
      }, ae.src = ee, (me = j == null ? void 0 : j.set) == null || me.call(j, I, ae), ae;
    },
    uiList: f,
    uiValue: p
  };
}
const vc = "state_json";
function ei(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((i) => (i == null ? void 0 : i.name) === t)) || null;
}
function Jc(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ei(e, "coverage");
  if (!n) return;
  const i = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...a) {
    var u, f, p, y, w, x, M, A, _;
    const c = i ? i(...a) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || f.call(u), (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), (M = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), (_ = (A = t == null ? void 0 : t.canvas) == null ? void 0 : A.setDirty) == null || _.call(A, !0, !0), c;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Gw(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Kd(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Kw(e) {
  var w, x, M, A, _, F;
  if (!e) return;
  const t = ei(e, "coverage"), n = ei(e, "bg_color"), i = ei(e, vc), a = ei(e, "sticker_state");
  if (!t || !n || !i) return;
  const c = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && Gw(c) && (Kd(u) || u === ""))) return;
  let y = "360";
  if (Kd(u))
    try {
      y = String(Bt((w = JSON.parse(u)) == null ? void 0 : w.coverage));
    } catch {
      y = "360";
    }
  t.value = y, (x = t.callback) == null || x.call(t, y), n.value = c, (M = n.callback) == null || M.call(n, c), i.value = u, (A = i.callback) == null || A.call(i, u), a && (a.value = f, (_ = a.callback) == null || _.call(a, f)), (F = e.setDirtyCanvas) == null || F.call(e, !0, !0);
}
function Ww(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function _c(e, t, n) {
  var c, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
async function Yw(e) {
  const t = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (t instanceof Map)
    for (; t.size > 0; ) {
      const n = Array.from(t.entries());
      await Promise.all(n.map(([, i]) => i)), n.forEach(([i, a]) => {
        t.get(i) === a && t.delete(i);
      });
    }
}
function Wd(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const i = e.__panoStickerOperationTail, c = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => n()), u = c.catch(() => {
  });
  e.__panoStickerOperationTail = u, e.__panoPendingStickerUploads.set(t, c);
  const f = () => {
    var p, y;
    ((y = (p = e.__panoPendingStickerUploads) == null ? void 0 : p.get) == null ? void 0 : y.call(p, t)) === c && e.__panoPendingStickerUploads.delete(t);
  };
  return c.then(f, f), u.then(() => {
    e.__panoStickerOperationTail === u && (e.__panoStickerOperationTail = null);
  }), c;
}
function qw(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...i) {
    var a;
    return await Yw(e), await ((a = e.__panoFlushStateBeforeQueue) == null ? void 0 : a.call(e)), n ? n.apply(this, i) : this.value;
  };
}
function Xw(e) {
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
function Yd(e, {
  app: t,
  matchType: n,
  buttonText: i,
  openEditor: a,
  attachStickers: c,
  attachCutout: u,
  enableStickersPreview: f
}) {
  if (!(e != null && e.prototype)) return;
  function p(y) {
    var M;
    const w = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === w) return;
    Xw(y), Jc(y, t), Ww(y, vc);
    const x = ei(y, vc);
    if (qw(y, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const A = x.callback;
      x.callback = (_) => {
        var U;
        const F = A ? A(_) : void 0;
        return (U = y.setDirtyCanvas) == null || U.call(y, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      const A = ei(y, "bg_color");
      A && (A.value == null || String(A.value).trim() === "" || String(A.value).toLowerCase() === "#000000") && (A.value = "#00ff00", (M = A.callback) == null || M.call(A, "#00ff00")), _c(y, i, () => a(y, "stickers")), f && (c(y, {
        enabled: !0,
        buttonText: i,
        onOpen: () => a(y, "stickers")
      }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
      return;
    }
    _c(y, i, () => a(y, "cutout")), u(y, {
      buttonText: i,
      onOpen: () => a(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[y];
    e.prototype[y] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      return y === "onConfigure" && n === "PanoramaStickers" && this.widgets && Kw(this), (y === "onNodeCreated" || this.widgets) && p(this), x;
    };
  }
}
function Jw(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
}
function Zw(e, {
  app: t,
  openEditor: n,
  attachPreview: i,
  requestFrame: a
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const c = () => {
    const u = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !u && f < 40) {
      a(c);
      return;
    }
    Jc(e, t);
    const p = (y = e) => n(y, "stickers", { readOnly: !0, hideSidebar: !1 });
    _c(e, "Open Preview", () => p(e)), i(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: p
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  a(c);
}
function Qw({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: i,
  attachPreview: a,
  requestFrame: c,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(f, p) {
      const y = String((p == null ? void 0 : p.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && Yd(f, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: u
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && Yd(f, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: i,
        enableStickersPreview: u
      }), fs(y) && Jw(f);
    },
    nodeCreated(f) {
      const p = String((f == null ? void 0 : f.comfyClass) || (f == null ? void 0 : f.type) || (f == null ? void 0 : f.title) || "");
      Jc(f, e), fs(p) && Zw(f, { app: e, openEditor: t, attachPreview: a, requestFrame: c });
    }
  };
}
const eS = "state_json", Xr = "sticker_image_1", Ul = "external_image", Eo = "pano_sticker_input_images", tS = !1, Qo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Rt = Math.PI / 180, Sn = 180 / Math.PI, Hl = 1, nS = "rgb(255, 221, 87)", rS = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, iS = 64, qd = 40, Bl = 16, aS = 0.45, Xd = 180, oS = 160, vs = 24, sS = 4, lS = 4, Do = /* @__PURE__ */ new Map(), Jd = /* @__PURE__ */ new Map(), Or = /* @__PURE__ */ new Map(), cS = 12, Dn = Bw({
  app: On,
  api: yn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: yc,
    markImageFailed: zm,
    markImageLoading: Fm,
    markImageReady: Lm
  }
}), uS = Dn.assetSource, fS = Dn.source, Gl = Dn.uiImage, dS = Dn.invalidateUiImage, hS = Dn.resolvePreferredExactLinkedSource, Kl = Dn.loadPreferredExactLinkedImage;
function Oo(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function mS(e) {
  return 1 - Math.pow(1 - e, 3);
}
function pS(e, t, n) {
  const i = G((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function gS(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Or.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Or.delete(t), Or.set(t, n), n);
}
function bS(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Or.delete(n), Or.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Or.size > cS; ) {
      const a = Or.keys().next().value;
      if (!a) break;
      Or.delete(a);
    }
}
function yS(e) {
  return e * e * e;
}
function Jn(e, t, n) {
  return { x: e, y: t, z: n };
}
function Ro(e, t) {
  return Jn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Fo(e, t) {
  return Jn(e.x * t, e.y * t, e.z * t);
}
function En(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Lo(e, t) {
  return Jn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Di(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Jn(e.x / t, e.y / t, e.z / t);
}
function Un(e, t) {
  const n = e * Rt, i = t * Rt, a = Math.cos(i);
  return Jn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function zo(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * Sn),
    pitch: G(Math.asin(G(e.y, -1, 1)) * Sn, -90, 90)
  };
}
function ur(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, u = t[i].y, f = t[a].x, p = t[a].y;
    u > e.y != p > e.y && e.x < (f - c) * (e.y - u) / (p - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function Ir(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Wl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return Ir(e, t);
  const p = G((c * i + u * a) / f, 0, 1), y = Number(t.x || 0) + i * p, w = Number(t.y || 0) + a * p, x = Number(e.x || 0) - y, M = Number(e.y || 0) - w;
  return x * x + M * M;
}
function wn(e, t, n) {
  return e + (t - e) * n;
}
function Hn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${G(n, 0, 1)})`;
}
function vS(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let $o = { fillStyle: "", url: "" };
function _S(e, t, n) {
  if ($o.url && $o.fillStyle === String(e || ""))
    return $o.url;
  const i = vS(`
<svg xmlns="http://www.w3.org/2000/svg" width="${vs}" height="${vs}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return $o = { fillStyle: String(e || ""), url: i }, i;
}
function es(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function bn(e) {
  return {
    r: G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: G(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function qt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function xS(e) {
  return Qo.some((t) => es(e, t.color));
}
function Yl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = G(Number(t), 0, 1), c = G(Number(n), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), f = i * 6 - u, p = c * (1 - a), y = c * (1 - f * a), w = c * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: c, g: w, b: p };
    case 1:
      return { r: y, g: c, b: p };
    case 2:
      return { r: p, g: c, b: w };
    case 3:
      return { r: p, g: y, b: c };
    case 4:
      return { r: w, g: p, b: c };
    default:
      return { r: c, g: p, b: y };
  }
}
function ql(e) {
  const t = G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), u = a - c;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: p, v: a };
}
function va(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
let jo = null;
function wS() {
  return jo || (jo = new Promise((e) => {
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
  }), jo);
}
const $m = "pano_suite.ui_settings.v1", jm = "pano_suite.node_grid_visibility.v1";
let zi = null, Bn = null;
function ts(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function SS() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($m)) || "").trim();
    if (!t) return zi ? ts(zi) : null;
    const n = JSON.parse(t), i = ts(n);
    return zi = i, i;
  } catch {
    return zi ? ts(zi) : null;
  }
}
function MS(e) {
  var n;
  const t = ts(e);
  zi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem($m, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Vm() {
  var e;
  if (Bn && typeof Bn == "object")
    return Bn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(jm)) || "").trim();
    if (!t)
      return Bn = {}, Bn;
    const n = JSON.parse(t);
    return Bn = n && typeof n == "object" ? n : {}, Bn;
  } catch {
    return Bn = {}, Bn;
  }
}
function NS(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Vm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function kS(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Vm();
  i[n] = !!t, Bn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(jm, JSON.stringify(i));
  } catch {
  }
}
function PS(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Zd(e) {
  const { paintCount: t, maskCount: n } = PS(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, c = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? c += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: c,
    totalPaintCount: t + a,
    totalMaskCount: n + c
  };
}
function Oi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Vo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function AS(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[n] ? i[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function TS(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function IS(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function CS(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function ES(e, t, n = {}) {
  var wf;
  Dn.clearFailedLinkedImages(e);
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, u = AS(e, t);
  await wS();
  const f = Vo(e, "output_preset"), p = Vo(e, "coverage"), y = Vo(e, "bg_color"), w = Vo(e, eS), x = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Kl(
      e,
      r,
      () => ge(),
      `background:size:${r.join("|")}`
    );
  }, M = () => {
    const r = x();
    return CS(r);
  }, A = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return IS(o) ? M() || Math.max(1, Math.round(Number(r || 2048))) : TS(o, r);
  }, _ = a_(String((w == null ? void 0 : w.value) || ""), {
    outputPreset: A(2048),
    backgroundColor: String((y == null ? void 0 : y.value) || "#00ff00"),
    coverage: Bt(p == null ? void 0 : p.value),
    sharedUiSettings: SS()
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(_.shots) ? _.shots : [], o = String(((s = _ == null ? void 0 : _.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, U = F ? Ou(F, !1) : { width: 220, height: 132 }, V = Rm(t), k = /* @__PURE__ */ ks({
    stageStatus: Yn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (V.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (V.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(V.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Fe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: Fe.aspect,
      rotateIcon: Fe.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: i,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Fe.fullscreen,
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
      customColorCss: Hn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Hn({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (r, o) => ({ index: o, color: null })),
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
      width: U.width,
      height: U.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const C = ({ intent: r, file: o } = {}) => {
    if (ua(o)) {
      if (r === "add") {
        Hu(o);
        return;
      }
      r === "replace" && Fg(o);
    }
  }, O = ({ intent: r } = {}) => {
  }, j = Fy(Lw, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: V,
    paintSwatches: Qo.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Hn(r.color, 1)
    })),
    uiState: k,
    onClose: () => {
      Pi();
    },
    onImageFileSelected: C,
    onImageFileCancelled: O
  });
  let q = null;
  try {
    q = j.mount(z);
  } catch (r) {
    try {
      j.unmount();
    } catch {
    }
    throw z.remove(), r;
  }
  const J = z.querySelector(".pano-modal-overlay"), ee = z.querySelector(".pano-modal"), I = ee == null ? void 0 : ee.querySelector("[data-stage-overlay]"), W = ee == null ? void 0 : ee.querySelector("[data-stage-background]"), ie = ee == null ? void 0 : ee.querySelector(".pano-stage-wrap"), ae = ((wf = q == null ? void 0 : q.getPaintOverlayRefs) == null ? void 0 : wf.call(q)) || {}, be = ae.cursor || null, Z = ae.sizePreview || null, me = ae.sizeSample || null;
  if (!J || !ee || !I || !W || !ie || !be || !Z || !me)
    throw j.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const P = I.getContext("2d"), K = ai(), de = t === "cutout" ? d_({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, Me = ee.querySelector("[data-side]"), H = ee.querySelector("[data-video-element]"), $e = ee.querySelector(".pano-floating-right"), Qe = ee.querySelector(".pano-floating-top"), pt = ee.querySelector("[data-tool-rail]"), kt = ee.querySelector("[data-frame-rail]"), Ge = ee.querySelector("[data-frame-roll-knob]"), en = ee.querySelector("[data-paint-dock]"), mn = ee.querySelector(".pano-video-transport"), on = ee.querySelector("[data-selection-menu]"), Gt = ee.querySelector("[data-tooltip]"), sn = ee.querySelector("[data-camera-preview-host]"), R = ee.querySelector("[data-paint-color-row]"), $ = ee.querySelector("[data-paint-color-pop]"), oe = ee.querySelector("[data-paint-color-sv]"), ve = ee.querySelector("[data-paint-color-sv-cursor]"), D = ee.querySelector("[data-paint-hue-strip]"), Y = ee.querySelector("[data-paint-hue-handle]");
  let ne = 0, fe = 0;
  ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", W.style.opacity = "0", a && (Me == null || Me.remove(), ee.classList.add("pano-modal-readonly"));
  const ue = () => {
    if (!d.customPaintSessionStart) return;
    if (es(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (xS(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const r = [
      bn(d.customPaintColor),
      ...d.customPaintHistory.filter((o) => !es(o, d.customPaintColor))
    ];
    d.customPaintHistory = r.slice(0, 8), d.customPaintSessionStart = null;
  }, re = (r = !1) => {
    !$ || $.hidden || (r ? ue() : d.customPaintSessionStart = null, $.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, Ne = () => {
    $ && ($.hidden && (d.customPaintSessionStart = bn(d.customPaintColor)), $.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  ee.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Gr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (ee.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), re(!0), t === "cutout" && d.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, We(), ge()), (o = k.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (k.frameRail.aspectOpen = !1)));
  });
  const Se = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, Pe = JSON.stringify(jd(_)), d = {
    mode: "pano",
    selectedId: Se,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Bt(_.coverage),
    historyController: F1(80, { entries: [Pe], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: cr,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: NS(e == null ? void 0 : e.id, !0),
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
    paintEngine: sc(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
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
  }, Ce = de && sn ? de.mount(sn, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, _.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Oe = /* @__PURE__ */ new Map(), Ue = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), Ae = document.createElement("canvas");
  Ae.__panoFrameIdx = 0;
  const we = {
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
  }, Ln = Number.parseFloat(
    getComputedStyle(ee).getPropertyValue("--pano-float-radius")
  ) || 10, Xe = (r) => {
    const o = String(r || "default");
    I.style.cursor !== o && (I.style.cursor = o);
  }, nt = {
    timer: 0,
    target: null
  }, Pt = {
    active: !1,
    depth: 0
  }, xe = {
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
  }, Wa = 4, jr = 9, zn = [];
  let fi = 0;
  const Um = () => {
    var S, T;
    const r = (S = ie == null ? void 0 : ie.getBoundingClientRect) == null ? void 0 : S.call(ie), o = (T = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : T.call($e), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, b = l > 0 ? l + 14 + 12 : 72, g = Math.max(280, Math.floor(s - b * 2)), v = d.fullscreen ? Math.min(1200, g) : g;
    k.videoTransport.shellMaxWidthPx = v;
  }, Fs = () => {
    fi || (fi = window.requestAnimationFrame(() => {
      fi = 0, Um();
    }));
  }, Ls = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Zc = (r) => {
    if (!(r instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(r.audioTracks) && r.audioTracks.length > 0 || r.audioTracks && typeof r.audioTracks.length == "number" && r.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof r.mozHasAudio == "boolean") return r.mozHasAudio;
    } catch {
    }
    try {
      if (Number(r.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!k.videoTransport.hasAudio;
  }, kn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Fs()) : null;
  kn == null || kn.observe(ie), $e && (kn == null || kn.observe($e)), zn.push(() => {
    var r;
    fi && (window.cancelAnimationFrame(fi), fi = 0), (r = kn == null ? void 0 : kn.disconnect) == null || r.call(kn);
  }), Fs();
  const Ya = () => {
    xe.thumbnailJobId += 1, xe.thumbnailSrc = "", k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = jr;
  }, Qc = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      Ya();
      return;
    }
    const h = gS(l);
    if (h) {
      xe.thumbnailSrc = l, k.videoTransport.thumbnails = h.thumbnails, k.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (xe.thumbnailSrc === l && Array.isArray(k.videoTransport.thumbnails) && k.videoTransport.thumbnails.length)
      return;
    const m = ++xe.thumbnailJobId;
    xe.thumbnailSrc = l, k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = jr;
    const b = document.createElement("video");
    if (b.preload = "auto", b.muted = !0, b.playsInline = !0, b.crossOrigin = "anonymous", !await new Promise((se) => {
      let he = !1;
      const le = (_e) => {
        he || (he = !0, se(_e));
      };
      b.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), b.addEventListener("canplay", () => le(!0), { once: !0 }), b.addEventListener("error", () => le(!1), { once: !0 }), b.src = l, b.load();
    }) || xe.thumbnailJobId !== m) return;
    const v = Math.max(1, Number(b.videoWidth || 0)), S = Math.max(1, Number(b.videoHeight || 0));
    if (v < 1 || S < 1) return;
    const T = Math.max(0, Number(b.duration || o || 0)), N = document.createElement("canvas"), E = 46, L = Math.max(72, Math.round(v / S * E));
    N.width = L, N.height = E;
    const Q = N.getContext("2d");
    if (!Q) return;
    const B = [], X = (se) => new Promise((he) => {
      let le = !1;
      const _e = () => {
        le || (le = !0, he());
      };
      b.addEventListener("seeked", _e, { once: !0 }), b.addEventListener("error", _e, { once: !0 });
      try {
        b.currentTime = se;
      } catch {
        _e();
      }
    });
    for (let se = 0; se < jr; se += 1) {
      if (xe.thumbnailJobId !== m) return;
      const he = se / (jr - 1), le = T > 0 ? Math.max(0, Math.min(T - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), T * he)) : 0;
      if (await X(le), xe.thumbnailJobId !== m) return;
      Q.clearRect(0, 0, L, E), Q.drawImage(b, 0, 0, L, E), B.push({
        id: `thumb-${se}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: le,
        label: Ys(le)
      });
    }
    xe.thumbnailJobId === m && (k.videoTransport.thumbnails = B, k.videoTransport.thumbnailCount = B.length || jr, bS(l, {
      thumbnails: B,
      thumbnailCount: B.length || jr,
      duration: T,
      fps: s
    }));
  }, eu = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, tu = (r) => {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return null;
    const o = Number(H.videoWidth || 0), s = Number(H.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const h = l.getContext("2d");
    if (!h) return null;
    for (h.drawImage(H, 0, 0, o, s), xe.frameCache.set(r, l), xe.frameCacheOrder = xe.frameCacheOrder.filter((m) => m !== r), xe.frameCacheOrder.push(r); xe.frameCacheOrder.length > Wa; ) {
      const m = xe.frameCacheOrder.shift();
      m != null && xe.frameCache.delete(m);
    }
    return l;
  }, Hm = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (Ae.width !== s || Ae.height !== l) && (Ae.width = s, Ae.height = l);
    const h = Ae.getContext("2d");
    return h ? (h.clearRect(0, 0, s, l), h.drawImage(r, 0, 0, s, l), Ae.__panoFrameIdx = Number(Ae.__panoFrameIdx || 0) + 1, o != null && (xe.presentedTime = Number(o || 0)), !0) : !1;
  }, nu = (r) => {
    const o = eu(r), s = xe.frameCache.get(o) || null;
    return s ? (xe.currentFrameNumber = o, Hm(s, r)) : !1;
  };
  if (zn.push(() => {
    Ya();
  }), H instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof H.requestVideoFrameCallback != "function" || H.__panoFramePumpActive) return;
      H.__panoFramePumpActive = !0;
      const g = (v, S) => {
        H.__panoFramePumpActive = !1;
        const T = Number((S == null ? void 0 : S.mediaTime) ?? H.currentTime ?? 0), N = eu(T), E = Ls();
        xe.mode === "scrub" ? Math.abs(T - Number(xe.editorTime || 0)) <= E && (tu(N), nu(xe.editorTime), we.backgroundDirty = !0, we.dirty = !0, $n({
          ready: !0,
          playing: !1,
          visible: ar(),
          currentTime: xe.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), ge({ cause: "frame_view", localOnly: !0 })) : (xe.editorTime = T, xe.presentedTime = T, xe.requestedTime = null, xe.currentFrameNumber = N, tu(N), xe.frameCounter += 1, H.dataset.panoFrameIdx = String(xe.frameCounter), we.backgroundDirty = !0, we.dirty = !0, $n({
          ready: !0,
          playing: !H.paused && !H.ended,
          visible: ar(),
          currentTime: T,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "playback"
        }), ge({ cause: "frame_view", localOnly: !0 })), we.running && (!H.paused || xe.mode === "scrub") && r();
      };
      try {
        H.requestVideoFrameCallback(g);
      } catch {
        H.__panoFramePumpActive = !1;
      }
    }, o = () => {
      xe.pendingPlaybackResume && (xe.pendingPlaybackResume = !1, xe.mode = "playback", xe.requestedTime = null, yi() && (we.backgroundDirty = !0, we.dirty = !0), H.play().catch(() => {
      }));
    }, s = () => {
      xe.editorTime = Number(H.currentTime || 0), Number(H.readyState || 0) >= 2 && yi() && (we.backgroundDirty = !0, we.dirty = !0), vi(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, l = () => {
      xe.mode = "playback", xe.seeking = !1, xe.requestedTime = null, vi(), r(), ge({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      xe.mode === "playback" && yi() && (we.backgroundDirty = !0, we.dirty = !0), vi(), ge({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      $n({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ar(),
        currentTime: xe.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: xe.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? k.videoTransport.volume ?? 1)
      });
    }, b = () => {
      const g = xe.seeking || xe.pendingPlaybackResume || xe.mode === "scrub";
      if (xe.seeking = !1, !g) {
        xe.requestedTime = null, r();
        return;
      }
      const v = Number(xe.requestedTime ?? xe.editorTime ?? 0), S = Number(H.currentTime || 0);
      if (Math.abs(S - v) > Ls()) {
        qs(v);
        return;
      }
      xe.mode === "scrub" && (yi(), we.backgroundDirty = !0, we.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), xe.requestedTime = null, o(), r();
    };
    H.addEventListener("loadedmetadata", s), H.addEventListener("loadeddata", s), H.addEventListener("canplay", s), H.addEventListener("play", l), H.addEventListener("pause", h), H.addEventListener("volumechange", m), H.addEventListener("seeked", b), zn.push(() => H.removeEventListener("loadedmetadata", s)), zn.push(() => H.removeEventListener("loadeddata", s)), zn.push(() => H.removeEventListener("canplay", s)), zn.push(() => H.removeEventListener("play", l)), zn.push(() => H.removeEventListener("pause", h)), zn.push(() => H.removeEventListener("volumechange", m)), zn.push(() => H.removeEventListener("seeked", b));
  }
  function Bm() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === d.primaryTool : s ? r.key === d.paintTool : l ? r.key === d.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function zs(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const l = String(s.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => ua(s)) : !1;
  }
  function Vr(r) {
    const o = !!r;
    Pt.active !== o && (Pt.active = o, ie.classList.toggle("drop-active", o));
  }
  function $s(r, o, s = d.viewFov, l = 140, h = 620) {
    const m = _v(d.viewYaw, r), b = o - d.viewPitch, g = s - d.viewFov, v = Math.hypot(m, b) + Math.abs(g) * 0.6, S = Math.round(G(l + v * 2.2, l, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ge();
  }
  _p();
  function rr() {
    return t === "stickers" ? _.stickers : _.shots;
  }
  function Kt() {
    const r = _.painting || (_.painting = Ea(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Gm(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = _.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? _.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const b of o) {
      const g = String((b == null ? void 0 : b.actionGroupId) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
    }
    return s;
  }
  function Km() {
    return Gm("paint");
  }
  function ea(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function ta(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function zt(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function na(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function js() {
    var o;
    let r = -1;
    for (const s of Array.isArray(_.stickers) ? _.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Kt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = _.painting) == null ? void 0 : o.raster_objects) ? _.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function ru(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = Kt();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? js() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Wm(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), l = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      }
    ];
  }
  function Ym() {
    const r = new Set(Km()), s = Kt().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: js(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = s, s;
  }
  function qm(r, o, s) {
    var B;
    const l = (X) => (Number(X || 0) % 1 + 1) % 1, h = [];
    for (const X of s) {
      const se = X == null ? void 0 : X.geometry, he = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = l(((B = h[0]) == null ? void 0 : B.u) || 0);
    let b = 0, g = 0;
    h.forEach((X) => {
      const se = l((X == null ? void 0 : X.u) || 0);
      b += m + xn(se, m), g += Number((X == null ? void 0 : X.v) || 0);
    });
    const v = (b / h.length % 1 + 1) % 1;
    let S = 1 / 0, T = -1 / 0, N = 1 / 0, E = -1 / 0;
    h.forEach((X) => {
      const se = l((X == null ? void 0 : X.u) || 0), he = xn(se, v);
      S = Math.min(S, he), T = Math.max(T, he);
      const le = Number((X == null ? void 0 : X.v) || 0);
      N = Math.min(N, le), E = Math.max(E, le);
    });
    const L = s.reduce((X, se) => {
      const he = Ar(String((se == null ? void 0 : se.toolKind) || "pen")), le = fn[he] || fn[cr], _e = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(X, _e);
    }, 0), Q = Math.max(35e-4, L / 2048);
    return {
      centerUv: { u: ((v + (S + T) * 0.5) % 1 + 1) % 1, v: G((N + E) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (T - S) * 0.5 + Q,
      halfH: (E - N) * 0.5 + Q,
      uvPad: Q
    };
  }
  function wr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const h = Kt().find((b) => String((b == null ? void 0 : b.actionGroupId) || "") === l);
    if (!h) return null;
    const m = s || Pn(l, o);
    return h.frame = qm(l, o, m), h.frame;
  }
  function di() {
    var l;
    const r = (Array.isArray(_.stickers) ? _.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Ym().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((l = _.painting) == null ? void 0 : l.raster_objects) ? _.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Vs(r = !0) {
    var s, l, h, m, b, g;
    const o = di().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (r) {
      const v = String(((l = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((m = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), T = String(((g = (b = d.interaction) == null ? void 0 : b.stroke) == null ? void 0 : g.toolKind) || "").trim();
      v && S === "paint" && T !== "eraser" && !o.includes(v) && o.push(v);
    }
    return o;
  }
  function Us(r = !0) {
    var g, v, S, T, N, E;
    const o = di();
    if (!r) return o;
    const s = String(((v = (g = d.interaction) == null ? void 0 : g.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((T = (S = d.interaction) == null ? void 0 : S.stroke) == null ? void 0 : T.layerKind) || "").trim(), h = String(((E = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || o.some((L) => L.type === "strokeGroup" && String(L.actionGroupId || "") === s))
      return o;
    const m = xt();
    let b = o.reduce((L, Q) => Math.max(L, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return m && Dt(m) && String(m.actionGroupId || "") === s && (b = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: b,
        item: null
      }
    ].sort((L, Q) => Number((L == null ? void 0 : L.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function Xm() {
    return Kt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => mi(ea("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Jm() {
    var r;
    return (Array.isArray((r = _.painting) == null ? void 0 : r.raster_objects) ? _.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => hi(ta((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function iu(r = d.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Zm() {
    var o, s, l, h;
    let r = null;
    try {
      const m = Vs(), b = ((h = (l = (s = (o = d.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      b && (r = {
        source: b,
        revision: `${Si()}:${qa()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function qa() {
    var h, m, b, g, v, S, T;
    const r = d.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!iu(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, E = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), L = ((b = N == null ? void 0 : N.rawPoints) == null ? void 0 : b.length) ?? ((g = N == null ? void 0 : N.points) == null ? void 0 : g.length) ?? 0, Q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${E || "paint"}_${o}_live${Q}_${L}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((v = r == null ? void 0 : r.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = r == null ? void 0 : r.item) == null ? void 0 : S.rasterObjectId) || ((T = r == null ? void 0 : r.item) == null ? void 0 : T.id) || "");
    return `_${o}_${s || l || "active"}_${d.livePaintInteractionRevision}`;
  }
  function Hs() {
    const r = Array.isArray(_.shots) ? _.shots : [], o = Array.isArray(_.stickers) ? _.stickers : [];
    return [...r, ...o];
  }
  function pn(r) {
    return !!r && Array.isArray(_.shots) && _.shots.includes(r);
  }
  function yt(r) {
    return !!r && Array.isArray(_.stickers) && _.stickers.includes(r);
  }
  function ln() {
    var r;
    return Array.isArray((r = _.painting) == null ? void 0 : r.raster_objects) ? _.painting.raster_objects : [];
  }
  function hi(r) {
    const o = zt(r);
    if (!o) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: ta(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Wt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = zt(r.rasterObjectId || r.id || "");
    return !!o && !!hi(ta(o));
  }
  function mi(r) {
    const o = na(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = Kt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: ea("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Dt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!mi(ea(s, o));
  }
  function Pn(r, o = null) {
    const s = na(r, o), l = String(s.actionGroupId || "").trim();
    return l ? Ni(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function Qm(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${d.mode}:${sa()}`;
    if (d.mode === "frame") {
      const m = Le(), b = String((m == null ? void 0 : m.id) || ""), g = m ? Ot(m) : null;
      return `${h}:frame:${b}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Xa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: G(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function xn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Bs(r, o = null, s = null) {
    var S;
    const l = na(r, o), h = Array.isArray(s) ? s : Pn(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((T) => {
      const N = (T == null ? void 0 : T.geometry) || null, E = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(E) && m.push(...E);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const b = Number(((S = m[0]) == null ? void 0 : S.u) || 0);
    let g = 0, v = 0;
    return m.forEach((T) => {
      g += b + xn(Number((T == null ? void 0 : T.u) || 0), b), v += Number((T == null ? void 0 : T.v) || 0);
    }), {
      u: (g / m.length % 1 + 1) % 1,
      v: G(v / m.length, 0, 1)
    };
  }
  function Ja(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, v = Number(l || 0) * Rt, S = Math.cos(v), T = Math.sin(v), N = Math.max(0.02, Number(s || 1)), E = (b * S - g * T) * N, L = (b * T + g * S) * N;
    return {
      ...r,
      u: ((h + E) % 1 + 1) % 1,
      v: G(m + L, 0, 1)
    };
  }
  function au(r, o, s, l = null, h = null, m = null) {
    const b = na(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const v = Ni(b.layerKind), S = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let T = !1;
    if (v.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== g) return;
      const E = (S == null ? void 0 : S.get(String((N == null ? void 0 : N.id) || ""))) || N, L = N == null ? void 0 : N.geometry, Q = E == null ? void 0 : E.geometry;
      !L || !Q || (Array.isArray(Q.points) && (L.points = Q.points.map((B) => Xa(B, o, s)), T = !0), Array.isArray(Q.rawPoints) && (L.rawPoints = Q.rawPoints.map((B) => Xa(B, o, s)), T = !0), Array.isArray(Q.processedPoints) && (L.processedPoints = Q.processedPoints.map((B) => Xa(B, o, s)), T = !0));
    }), T && m) {
      const N = Kt().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === g);
      N && (N.frame = null);
    }
    return T;
  }
  function ou(r, o = 1, s = 0, l = null, h = null, m = null) {
    const b = na(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const v = Ni(b.layerKind), S = Array.isArray(l) ? l : Pn(g, b.layerKind), T = Array.isArray(S) ? new Map(S.map((L) => [String((L == null ? void 0 : L.id) || ""), L])) : null, N = (m == null ? void 0 : m.centerUv) ?? Bs(g, b.layerKind, S);
    let E = !1;
    if (v.forEach((L) => {
      if (String((L == null ? void 0 : L.actionGroupId) || "").trim() !== g) return;
      const Q = (T == null ? void 0 : T.get(String((L == null ? void 0 : L.id) || ""))) || L, B = L == null ? void 0 : L.geometry, X = Q == null ? void 0 : Q.geometry;
      !B || !X || (Array.isArray(X.points) && (B.points = X.points.map((se) => Ja(se, N, o, s)), E = !0), Array.isArray(X.rawPoints) && (B.rawPoints = X.rawPoints.map((se) => Ja(se, N, o, s)), E = !0), Array.isArray(X.processedPoints) && (B.processedPoints = X.processedPoints.map((se) => Ja(se, N, o, s)), E = !0));
    }), E && m) {
      const L = Kt().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === g);
      L && (L.frame = null);
    }
    return E;
  }
  function su(r, o, s, l = null) {
    const h = zt(r);
    if (!h) return !1;
    const m = ln().find((T) => String((T == null ? void 0 : T.id) || "").trim() === h);
    if (!m) return !1;
    const b = l && typeof l == "object" ? l : m, g = (b == null ? void 0 : b.transform) || {}, v = Number(g.du || 0) + Number(o || 0), S = G(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = S, !0;
  }
  function ep(r, o = 1, s = null) {
    const l = zt(r);
    if (!l) return !1;
    const h = ln().find((S) => String((S == null ? void 0 : S.id) || "").trim() === l);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, b = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(b.scale || 1)), v = G(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = v, !0;
  }
  function xt() {
    const r = String(d.selectedId || "");
    if (!r) return null;
    const o = mi(r);
    if (o) return o;
    const s = hi(r);
    return s || (t === "cutout" ? Hs().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : rr().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function An() {
    const r = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(d.selectedId || "") ? xt() : mi(h) || hi(h) || (t === "cutout" ? Hs().find((b) => String((b == null ? void 0 : b.id) || "") === h) : rr().find((b) => String((b == null ? void 0 : b.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Gs(r = null) {
    const o = Array.isArray(r) ? r : An();
    if (!o || o.length < 2) return null;
    const s = o.map((S) => jt(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((T) => Number((T == null ? void 0 : T.x) || 0))), h = s.flatMap((S) => S.corners.map((T) => Number((T == null ? void 0 : T.y) || 0))), m = Math.min(...l), b = Math.max(...l), g = Math.min(...h), v = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + b) * 0.5, y: (g + v) * 0.5 },
      corners: [
        { x: m, y: g },
        { x: b, y: g },
        { x: b, y: v },
        { x: m, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + b) * 0.5, y: g, a: { x: m, y: g }, b: { x: b, y: g } },
        { edge: "right", x: b, y: (g + v) * 0.5, a: { x: b, y: g }, b: { x: b, y: v } },
        { edge: "bottom", x: (m + b) * 0.5, y: v, a: { x: b, y: v }, b: { x: m, y: v } },
        { edge: "left", x: m, y: (g + v) * 0.5, a: { x: m, y: v }, b: { x: m, y: g } }
      ],
      rotateStemBase: { x: (m + b) * 0.5, y: g },
      rotateHandle: { x: (m + b) * 0.5, y: g - 30 }
    };
  }
  function lu(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(d.selectedIds) && d.selectedIds.includes(o);
  }
  function Za() {
    const r = xt();
    return r ? Dt(r) || Wt(r) ? "stroke" : pn(r) ? "frame" : "image" : null;
  }
  function ir(r) {
    if (!r || typeof r != "object") return !1;
    if (Dt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Kt().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Wt(r)) {
      const o = zt(r.rasterObjectId || r.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Ks(r = null) {
    const o = Array.isArray(r) ? r : An();
    return o.length > 0 && o.every((s) => ir(s));
  }
  function tp(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Dt(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), h = Kt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Wt(r)) {
      const l = zt(r.rasterObjectId || r.id || ""), h = ln().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function np() {
    if (i) return;
    const r = An();
    if (!r.length) return;
    const o = !Ks(r);
    let s = !1;
    r.forEach((l) => {
      tp(l, o) && (s = !0);
    }), s && (et(), tt(), We(), ge());
  }
  function pi(r) {
    d.selectedId = (r == null ? void 0 : r.id) || null, d.selectedIds = r != null && r.id ? [r.id] : [], r && yt(r) ? _.active.selected_sticker_id = r.id || null : _.active.selected_sticker_id = null, r && pn(r) ? _.active.selected_shot_id = r.id || null : r ? pn(r) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function rp(r, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((b) => {
      const g = String((b == null ? void 0 : b.id) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
    }), d.selectedIds = s;
    const h = String(o || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = xt();
    _.active.selected_sticker_id = m && yt(m) && m.id || null, m && pn(m) ? _.active.selected_shot_id = m.id || null : s.length || (_.active.selected_shot_id = null);
  }
  function cu() {
    const r = (Array.isArray(_.shots) ? _.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(_.stickers) ? _.stickers : []).map((s, l) => {
      var m, b;
      const h = $t(s) ? String(s.id || Xr) : String(((b = (m = _.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : b.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function ip(r) {
    return r === "frame" ? Fe.camera : r === "stroke" ? Fe.paintbrush_vertical_tool : Fe.image;
  }
  function Ws(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: ip(r.kind)
    };
  }
  function uu() {
    return js();
  }
  function $t(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Xr || String(r.source_kind || "") === Ul;
  }
  function gi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function ap(r) {
    return $t(r) && gi(r) ? dm : 1;
  }
  function op() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function sp() {
    return String(op() || "") === "lasso_fill";
  }
  function lp() {
    if (i) return;
    const r = xt();
    !r || !$t(r) || (r.visible = gi(r), Ut(), et(), tt(), Ve(), We(), ge());
  }
  function cp() {
    if (i || t !== "stickers") return;
    const r = xt();
    if (!r || !$t(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Xs(Eo, () => {
      ge();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Ur(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), et(), tt(), Ve(), We(), ge();
  }
  function up(r) {
    if (!r || !$t(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Xs(Eo, () => {
      ge();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Ur(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function fp() {
    const r = xt();
    if (!r || !$t(r)) return !1;
    const o = up(r);
    if (!o) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function fu(r) {
    return Dn.uiList(e, r);
  }
  function du(r) {
    return Dn.uiValue(e, r);
  }
  function hu() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return fs(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function dp() {
    const { metaKey: r } = hu(), o = du(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function bi(r) {
    var o;
    return r ? r instanceof HTMLVideoElement ? [
      String(r.currentSrc || r.src || ""),
      Number(r.videoWidth || 0),
      Number(r.videoHeight || 0),
      String(((o = r.dataset) == null ? void 0 : o.panoFrameIdx) || "0")
    ].join("|") : r instanceof HTMLCanvasElement ? [
      "canvas",
      Number(r.width || 0),
      Number(r.height || 0),
      String(r.__panoFrameIdx || 0)
    ].join("|") : [
      String(r.currentSrc || r.src || ""),
      Number(r.naturalWidth || r.width || 0),
      Number(r.naturalHeight || r.height || 0)
    ].join("|") : "none";
  }
  function Ys(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function $n(r = {}) {
    const o = Number(r.currentTime ?? xe.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!k.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!k.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!k.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(H instanceof HTMLVideoElement ? H.muted : k.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : H instanceof HTMLVideoElement ? H.volume : k.videoTransport.volume
    ), v = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Zc(H), S = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!k.videoTransport.loop;
    Object.assign(k.videoTransport, {
      ready: l,
      playing: h,
      visible: m,
      loop: S,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Ys(o),
      durationLabel: Ys(s),
      frameCount: Math.max(0, Number(r.frameCount ?? k.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? k.videoTransport.fps ?? 24)),
      mode: String(r.mode || xe.mode || "playback"),
      hasAudio: v,
      muted: b,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : k.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? k.videoTransport.thumbnailCount ?? jr))
    });
  }
  function ar() {
    return !!(H instanceof HTMLVideoElement && H.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function hp() {
    $n({
      visible: ar()
    });
  }
  function yi() {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return !1;
    const r = Number(H.videoWidth || 0), o = Number(H.videoHeight || 0);
    (Ae.width !== r || Ae.height !== o) && (Ae.width = r, Ae.height = o);
    const s = Ae.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(H, 0, 0, r, o), Ae.__panoFrameIdx = Number(Ae.__panoFrameIdx || 0) + 1, xe.presentedTime = Number(xe.editorTime || H.currentTime || 0), !0) : !1;
  }
  function mu() {
    return xe.mode === "scrub" && Number(Ae.width || 0) > 0 && Number(Ae.height || 0) > 0 && Number(Ae.__panoFrameIdx || 0) > 0 ? Ae : H instanceof HTMLVideoElement && Number(H.videoWidth || 0) > 0 && Number(H.videoHeight || 0) > 0 && Number(H.readyState || 0) >= 2 ? H : null;
  }
  function qs(r) {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (xe.requestedTime = o, !xe.seeking && !(Math.abs(Number(H.currentTime || 0) - o) <= 5e-4)) {
      xe.seeking = !0;
      try {
        H.currentTime = o;
      } catch {
        xe.seeking = !1;
      }
    }
  }
  function vi() {
    if (!(H instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = hu(), o = fu(r)[0] || null, s = fS(o), l = dp(), h = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), m = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), b = Number((l == null ? void 0 : l.duration) || (h > 0 ? h / m : 0)), g = !!(l != null && l.has_audio) || Zc(H);
    return s && H.dataset.panoSrc !== s ? (H.pause(), H.dataset.panoSrc = s, H.dataset.panoFrameIdx = "0", H.loop = !!k.videoTransport.loop, H.muted = !!k.videoTransport.muted, H.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), H.src = s, H.load(), Qc(s, b, m)) : !s && H.getAttribute("src") && (H.pause(), H.removeAttribute("src"), H.load(), Ya()), H.loop !== !!k.videoTransport.loop && (H.loop = !!k.videoTransport.loop), s && (!Array.isArray(k.videoTransport.thumbnails) || k.videoTransport.thumbnails.length === 0) && Qc(s, b, m), s || Ya(), $n({
      ready: !!s,
      playing: !H.paused && !H.ended,
      visible: !!s && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: xe.editorTime,
      duration: b,
      frameCount: h,
      fps: m,
      mode: xe.mode,
      hasAudio: g,
      loop: !!H.loop,
      muted: !!H.muted,
      volume: Number(H.volume ?? k.videoTransport.volume ?? 1),
      thumbnailCount: k.videoTransport.thumbnailCount
    }), s || null;
  }
  function mp(r, o = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const l = r[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function Xs(r, o = null) {
    return Gl(e, r, Oe, o || (() => ge()));
  }
  function pu(r = null) {
    return Xs(Eo, r);
  }
  function Ur(r, o, s) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = G(Number(r || 30), 0.1, 179) * Rt, b = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return G(b * Sn, 0.1, 179);
  }
  function pp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const b = Number(m.yaw_deg), g = Number(m.pitch_deg), v = Number(m.roll_deg), S = Number(m.hFOV_deg);
      if (![b, g, v, S].every((L) => Number.isFinite(L))) return null;
      let T = ((b + 180) % 360 + 360) % 360 - 180;
      Object.is(T, -0) && (T = 0);
      const N = {
        yaw_deg: T,
        pitch_deg: G(g, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: G(S, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (N.source_aspect = E), N;
    } catch {
      return null;
    }
  }
  function gu(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Zo(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function gp(r) {
    var g;
    if (!r || typeof r != "object") return gu(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let b = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const v = G(h, 0.1, 179) * Rt, S = G(m, 0.1, 179) * Rt, T = Math.tan(S * 0.5);
      if (Math.abs(T) > 1e-6) {
        const N = Math.tan(v * 0.5) / T;
        Number.isFinite(N) && N > 0 && (b = N);
      }
    }
    if (r != null && r.asset_id && ((g = _ == null ? void 0 : _.assets) != null && g[r.asset_id])) {
      const v = _.assets[r.asset_id], S = Number((v == null ? void 0 : v.w) || 0), T = Number((v == null ? void 0 : v.h) || 0);
      S > 0 && T > 0 && (b = S / T);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function bp(r) {
    return Dn.linkedValue(e, r);
  }
  function yp(r, o, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : pp(o);
    if (l) {
      const b = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Ur(l.hFOV_deg, b, g),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ur(30, h, m),
      rot_deg: 0
    };
  }
  function bu(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((L) => String((L == null ? void 0 : L.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = pu(() => {
      var L;
      (L = e.__panoExternalStickerSync) == null || L.call(e, "image-loaded");
    }), h = mp(du("pano_sticker_input_pose"), null), m = bp("sticker_state"), b = Dn.externalStateHash(e, m), g = Array.isArray(_.stickers) ? _.stickers : _.stickers = [], v = g.findIndex((L) => String((L == null ? void 0 : L.id) || "") === Xr);
    if (s == null) {
      v >= 0 && (g.splice(v, 1), d.selectedId === Xr && (d.selectedId = null, d.selectedIds = [], _.active.selected_sticker_id = null), tt(), Ve(), We(), ge());
      return;
    }
    const S = g.reduce((L, Q) => Math.max(L, Number((Q == null ? void 0 : Q.z_index) || 0)), -1);
    let T = v >= 0 ? g[v] : null;
    const N = !T || Number(T.source_link_id ?? -1) !== Number(s) || String(T.source_state_hash || "") !== b;
    T || (T = {
      id: Xr,
      source_kind: Ul
    }, g.push(T)), T.id = Xr, T.source_kind = Ul, T.source_link_id = Number(s), T.source_state_hash = b, T.visible = T.visible !== !1;
    let E = !1;
    if (N) {
      const L = yp(h, m, l);
      Object.assign(T, L, {
        initial_pose: { ...L },
        visible: !0,
        z_index: S + 1
      }), E = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const L = Ur(
        Number(T.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(T.vFOV_deg || 0) - L) > 1e-6 && (T.vFOV_deg = L, E = !0);
    }
    E && (tt(), Ve(), We()), ge();
  }
  function ra(r = {}) {
    const s = r.preservePanelValues !== !1 ? xt() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ii(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function vp() {
    if (t !== "cutout") return;
    const r = Le();
    r && (d.selectedId = String(r.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function Js() {
    if (t !== "cutout") return;
    const r = Le();
    Ci(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Fe.camera : Fe.plus_circle
    });
  }
  function yu() {
    const r = t === "cutout" && d.mode === "frame", o = !r && !!d.showGrid;
    Ci(k.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), Ci(k.floatingButtons, "action", "toggle-grid", {
      icon: o ? Fe.eye : Fe.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function Sr() {
    var s;
    const r = !!Le();
    d.mode === "frame" && !r && (d.mode = "pano"), d.outputPreviewRect = null, k.viewButtons.forEach((l) => {
      const h = l.key === d.mode;
      l.pressed = h ? "true" : "false", l.visible = !(l.key === "frame" && t !== "cutout"), l.disabled = l.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && d.mode === "frame" ? Le() : null;
    k.frameRail.visible = !!o, k.frameRail.disabled = i, k.frameRollKnob.visible = !!o && !i, k.frameRollKnob.disabled = i, k.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), k.frameRollKnob.displayValue = va(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((s = d.interaction) == null ? void 0 : s.kind) === "roll_frame", k.frameRollKnob.armed = !!o && d.altModifier === !0, k.frameRail.rollKnob = k.frameRollKnob, k.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((l) => ({
      value: l,
      label: l,
      active: !!o && String(Ii(o)) === l
    })), o || (k.frameRail.aspectOpen = !1), k.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!Le(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = d.mode !== "frame", k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame), yu(), Zu() ? dt(d.pointerPos) : Xe(d.mode === "pano" ? "grab" : "default");
  }
  function _p() {
    const o = Nu({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Zs() {
    const r = Un(d.viewYaw, d.viewPitch);
    let o = Jn(0, 1, 0);
    Math.abs(En(r, o)) > 0.999 && (o = Jn(0, 0, 1));
    const s = Di(Lo(o, r)), l = Di(Lo(r, s));
    return { right: s, up: l, fwd: r };
  }
  function ia(r) {
    const { right: o, up: s, fwd: l } = Zs(), h = En(r, o), m = En(r, s), b = En(r, l);
    if (b <= 1e-5) return null;
    const g = I.width, v = I.height, S = d.viewFov * Rt, T = 2 * Math.atan(Math.tan(S / 2) * (v / g)), N = g / 2 / Math.tan(S / 2), E = v / 2 / Math.tan(T / 2);
    return {
      x: g / 2 + h / b * N,
      y: v / 2 - m / b * E,
      z: b
    };
  }
  function Qs(r, o) {
    const { right: s, up: l, fwd: h } = Zs(), m = I.width, b = I.height, g = d.viewFov * Rt, v = 2 * Math.atan(Math.tan(g / 2) * (b / m)), S = (r - m / 2) / (m / 2) * Math.tan(g / 2), T = (b / 2 - o) / (b / 2) * Math.tan(v / 2), N = Ro(Ro(Fo(s, S), Fo(l, T)), h);
    return Di(N);
  }
  function Mr() {
    const r = I.width, o = I.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, v = g * s;
      return { x: (r - v) * 0.5, y: 0, w: v, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function vu(r) {
    var b;
    if (r && typeof r == "object" && ($t(r) || r.external === !0))
      return pu(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = Oe.get(o);
    if (s) return s;
    const l = (b = _.assets) == null ? void 0 : b[o], h = uS(l);
    if (!h) return null;
    const m = new Image();
    return Fm(m, h), m.onload = () => {
      Lm(m, h), ge();
    }, m.onerror = () => {
      zm(m, h), ge();
    }, m.src = h, Oe.set(o, m), m;
  }
  function _u(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ue.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, Ue.set(s, h), h;
  }
  function xp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = st.get(o);
    if (s) return s.ready ? s : null;
    const l = _u(r, () => {
      const T = st.get(o);
      T && (T.ready = !1), ge({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const b = document.createElement("canvas");
    b.width = h, b.height = m;
    const g = b.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(l, 0, 0, h, m);
    const v = g.getImageData(0, 0, h, m).data, S = { canvas: b, width: h, height: m, alpha: v, ready: !0 };
    return st.set(o, S), S;
  }
  function wp(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, v = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * Rt, T = Math.cos(S), N = Math.sin(S), E = b / v, L = g / v, Q = E * T + L * N, B = -E * N + L * T;
    return {
      ...r,
      u: ((h + Q) % 1 + 1) % 1,
      v: m + B
    };
  }
  function Sp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, b = wp(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(v > 1e-6)) return null;
    const S = xn(Number(b.u || 0), Number(s.u0 || 0)) / g, T = (Number(b.v || 0) - Number(s.v0 || 0)) / v;
    if (S < 0 || S > 1 || T < 0 || T > 1) return 0;
    const N = xp(r);
    if (!N) return null;
    const E = G(Math.floor(S * N.width), 0, N.width - 1), L = G(Math.floor(T * N.height), 0, N.height - 1);
    return Number(N.alpha[(L * N.width + E) * 4 + 3] || 0);
  }
  function xu(r, o, s, l = null) {
    if (!(o != null && o.visible) || !ur(s, o.corners)) return !1;
    const h = l || In(s, performance.now()), m = Sp(r, h);
    return m === null ? !0 : m > 8;
  }
  function Mp() {
    var l, h, m, b, g, v, S, T;
    const r = ((h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Vs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (b = r == null ? void 0 : r.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((v = r == null ? void 0 : r.descriptor) == null ? void 0 : v.height) || ((T = (S = r == null ? void 0 : r.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : T.height) || 1024));
    return { width: o, height: s };
  }
  function Np() {
    var L, Q, B;
    const r = d.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = gn(), l = `${qa()}:${s.width}:${s.height}`;
    if (((L = d._activePaintEraserPreviewInfo) == null ? void 0 : L.cacheKey) === l)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = qt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const X = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = sl(X, h.targetSpace, !0);
    }
    const b = oa(s.width, s.height, { readback: !0 });
    if (!zu(b, h, { w: s.width, h: s.height })) return null;
    const g = ((B = (Q = b.ctx) == null ? void 0 : Q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let v = s.width, S = s.height, T = -1, N = -1;
    for (let X = 0; X < s.height; X += 1)
      for (let se = 0; se < s.width; se += 1)
        g[(X * s.width + se) * 4 + 3] <= 8 || (se < v && (v = se), X < S && (S = X), se > T && (T = se), X > N && (N = X));
    if (T < v || N < S)
      return d._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: b,
      bounds: { minX: v, minY: S, maxX: T, maxY: N },
      key: `${l}:${v}:${S}:${T}:${N}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function _i() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function kp(r, o, s) {
    var l, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const m = r.item.bbox, b = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(m.u0 || 0) + Number(b.du || 0), v = Number(m.u1 || 0) + Number(b.du || 0), S = Number(m.v0 || 0) + Number(b.dv || 0), T = Number(m.v1 || 0) + Number(b.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(G(S, 0, 1) * s),
        maxY: Math.ceil(G(T, 0, 1) * s),
        wraps: v - g >= 1 || g < 0 || v > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = Pn(r.actionGroupId, "paint"), b = wr(r.actionGroupId, "paint", m);
      if (!b) return null;
      const g = b.centerUv.u - b.halfW, v = b.centerUv.u + b.halfW, S = b.centerUv.v - b.halfH, T = b.centerUv.v + b.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(G(S, 0, 1) * s),
        maxY: Math.ceil(G(T, 0, 1) * s),
        wraps: v - g >= 1 || g < 0 || v > 1
      };
    }
    return null;
  }
  function Pp(r, o, s) {
    if (!r || !o) return !1;
    const l = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: s - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], h = l(r), m = l(o);
    return h.some((b) => m.some((g) => !(b.maxX < g.minX || g.maxX < b.minX || b.maxY < g.minY || g.maxY < b.minY)));
  }
  function Ap(r, o, s) {
    var _e, Re, ze, Ye, ye, te, pe;
    if (!r || !o || !((_e = s == null ? void 0 : s.surface) != null && _e.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return r;
    const m = kp(o, l, h);
    if (m && !Pp(m, s.bounds, l)) return r;
    const b = String(((Re = o.item) == null ? void 0 : Re.id) || o.id || ""), g = ((ze = o.item) == null ? void 0 : ze.transform) || {}, v = `${s.key}:${b}:${l}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, S = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const T = G(Math.floor(Number(((Ye = s.bounds) == null ? void 0 : Ye.minX) || 0)), 0, Math.max(0, l - 1)), N = G(Math.floor(Number(((ye = s.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), E = G(Math.ceil(Number(((te = s.bounds) == null ? void 0 : te.maxX) || 0)), T, Math.max(0, l - 1)), L = G(Math.ceil(Number(((pe = s.bounds) == null ? void 0 : pe.maxY) || 0)), N, Math.max(0, h - 1)), Q = Math.max(1, E - T + 1), B = Math.max(1, L - N + 1), X = oa(l, h, { readback: !0 });
    X.ctx.clearRect(0, 0, l, h), X.ctx.drawImage(r, 0, 0);
    const se = X.ctx.getImageData(T, N, Q, B);
    X.ctx.save(), X.ctx.globalCompositeOperation = "destination-out", X.ctx.drawImage(s.surface.canvas, 0, 0), X.ctx.restore();
    const he = X.ctx.getImageData(T, N, Q, B);
    let le = !1;
    for (let De = 0; De < Q * B; De += 1) {
      const Ee = se.data[De * 4 + 3], Te = he.data[De * 4 + 3];
      if (Ee > Te) {
        le = !0;
        break;
      }
    }
    return le ? (S.size > 64 && S.clear(), S.set(v, X.canvas), X.canvas) : (S.set(v, r), r);
  }
  function wu(r, o = null) {
    const s = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const h = _u(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: b } = Mp(), g = (r == null ? void 0 : r.transform) || {}, v = [
      s,
      m,
      b,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      sa()
    ].join(":"), S = bt.get(v);
    if (S) return S;
    bt.size > 64 && bt.clear();
    const T = document.createElement("canvas");
    T.width = m, T.height = b;
    const N = T.getContext("2d");
    if (!N) return null;
    const E = Number(l.u0 || 0) * m, L = Number(l.v0 || 0) * b, Q = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * b), X = E + Q * 0.5 + Number(g.du || 0) * m, se = L + B * 0.5 + Number(g.dv || 0) * b, he = Number(g.rot_deg || 0) * Rt, le = Math.max(0.01, Number(g.scale || 1));
    for (const _e of [-m, 0, m])
      N.save(), N.translate(X + _e, se), N.rotate(he), N.scale(le, le), N.drawImage(h, -Q * 0.5, -B * 0.5, Q, B), N.restore();
    return bt.set(v, T), T;
  }
  function Tp() {
    return Os(_, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ip(r) {
    return hm(
      _,
      (o, s, l) => vu(l || o),
      { scene: r }
    );
  }
  function Su(r, o, s, l, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = Nr(l);
    if (Tu(o, s))
      return $p(
        o,
        s,
        m && d.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const g = no(), v = ro(g), S = d.showObjects ? io() : aa([]), N = wa({
      stateRevision: [
        h,
        m ? bi(l) : "no_bg",
        Array.isArray(v) ? v.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        S.length ? S.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? l : null,
      backgroundRevision: m ? `${h}:${bi(l)}` : "",
      coverageDeg: Bt(_.coverage),
      scene: g,
      textures: v,
      paintSource: null,
      paintRevision: "",
      rasterEntries: S,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), E = K;
    if (!E.syncState(N)) return !1;
    const Q = E.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Q ? (r.drawImage(Q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function el(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await yn.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), m = String((h == null ? void 0 : h.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function tl(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await yn.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), b = String((m == null ? void 0 : m.name) || "").trim();
    if (!b) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: b,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Qa = null, eo = !1;
  function Cp() {
    const r = Zd(_.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = _.painting_layer, s = Si();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Mu() {
    const r = String(e.id ?? "0"), o = Do.get(r);
    if (eo && o) return o;
    const s = (async () => {
      var m, b, g, v, S, T, N, E, L, Q, B, X;
      const l = Si(), h = Zd(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, Qa = l, un());
        return;
      }
      if (Qa !== l && !eo) {
        eo = !0;
        try {
          lo();
          const se = Vs(!1), he = ((b = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : b.call(m, se)) || null, le = ((g = he == null ? void 0 : he.displayPaint) == null ? void 0 : g.canvas) || null, _e = ((v = he == null ? void 0 : he.committedMask) == null ? void 0 : v.canvas) || null, Re = Math.max(1, Number(((S = he == null ? void 0 : he.descriptor) == null ? void 0 : S.width) || (le == null ? void 0 : le.width) || (_e == null ? void 0 : _e.width) || 2048)), ze = Math.max(1, Number(((T = he == null ? void 0 : he.descriptor) == null ? void 0 : T.height) || (le == null ? void 0 : le.height) || (_e == null ? void 0 : _e.height) || 1024));
          (!le && h.totalPaintCount > 0 || !_e && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Re || Number(((E = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : E.height) || 0) !== ze) && (d._paintLayerSyncBlankSurface = oa(Re, ze)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Re, ze));
          const Ye = le || h.totalPaintCount > 0 && ((L = d._paintLayerSyncBlankSurface) == null ? void 0 : L.canvas) || null, ye = _e || h.totalMaskCount > 0 && ((Q = d._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!Ye && !ye) return;
          let te = null, pe = null;
          const De = [];
          if (h.totalPaintCount > 0) {
            te = await tl(Ye, `pano_paint_${r}.png`);
            for (const Ee of se) {
              const Te = String(Ee || "").trim();
              if (!Te) continue;
              const je = ((X = (B = d.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : X.call(B, Te)) || null;
              if (!je) continue;
              const Je = Te.replace(/[^a-zA-Z0-9_-]+/g, "_"), He = await tl(je, `pano_group_${r}_${Je}.png`);
              He && De.push({
                id: Te,
                actionGroupId: Te,
                image: He
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await tl(ye, `pano_mask_${r}.png`)), l === Si() && (_.painting_layer = {
            paint: te,
            mask: pe,
            groups: De,
            revision: l
          }, Qa = l, un());
        } catch (se) {
          throw se;
        } finally {
          eo = !1;
        }
      }
    })();
    return Do.set(r, s), s.finally(() => {
      Do.get(r) === s && Do.delete(r);
    }), s;
  }
  function Hr() {
    if (t === "cutout") {
      const g = mu();
      if (g) return g;
      const v = Kl(
        e,
        ["erp_image", "bg_erp"],
        () => ge(),
        "background:cutout:erp_image|bg_erp"
      );
      return v && !yc(v) ? v : Gl(e, "pano_input_images", Oe, () => ge()) || v || null;
    }
    const r = mu();
    if (r) return r;
    const o = Gl(e, "pano_input_images", Oe, () => ge());
    if (o && !yc(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], l = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (l || h) ? m = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Kl(e, m, () => ge(), `background:${m.join("|")}`) || o || null;
  }
  function Nr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Ep() {
    let r = Zi;
    const o = [];
    if (d.showPanorama) {
      const s = Hr();
      r = bc(s, Nr);
    }
    if (d.showObjects) {
      const s = Array.isArray(_.stickers) ? _.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = vu(l);
        o.push(bc(h, Nr));
      }
    }
    return zw({
      presented: we.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function xi() {
    const r = new Set(
      (_.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(_.assets || {}).forEach((o) => {
      r.has(o) || (delete _.assets[o], Oe.delete(o));
    });
  }
  function nl(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(G(r.y, -1, 1))
    };
  }
  function rl(r, o = null) {
    const { lon: s, lat: l } = nl(r), h = Mr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const b = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: b, z: 1 };
  }
  function to(r) {
    const o = Un(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Jn(0, 1, 0);
    Math.abs(En(o, s)) > 0.999 && (s = Jn(0, 0, 1));
    const l = Di(Lo(s, o)), h = Di(Lo(o, l)), m = Math.tan(G(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Rt), b = Math.tan(G(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Rt), g = Number(r.rot_deg || r.roll_deg || 0) * Rt, v = Math.cos(g), S = Math.sin(g);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: b,
      cr: v,
      sr: S
    };
  }
  function kr(r, o, s) {
    const l = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return Di(Ro(Ro(r.centerDir, Fo(r.right, l)), Fo(r.up, h)));
  }
  function Nu(r) {
    const o = to(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => kr(o, l * o.tanX, h * o.tanY));
  }
  function ku(r, o, s) {
    const l = to(r), h = (o * 2 - 1) * l.tanX, m = (1 - s * 2) * l.tanY;
    return kr(l, h, m);
  }
  function Pu(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: G((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Dp(r) {
    var v, S, T, N;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = r == null ? void 0 : r.transform) == null ? void 0 : v.scale) || 1)), h = Number(((S = r == null ? void 0 : r.transform) == null ? void 0 : S.rot_deg) || 0), m = Number(((T = r == null ? void 0 : r.transform) == null ? void 0 : T.du) || 0), b = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((E) => Xa(Ja(E, s, l, h), m, b));
  }
  function Op(r) {
    const o = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${d.mode}:${sa()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const m = Le(), b = m ? Ot(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Rp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      pn(r) ? "frame" : yt(r) ? "sticker" : "item",
      o,
      d.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Ii(r)
    ].join(":");
    if (d.mode === "frame") {
      const h = Le(), m = h ? Ot(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Fp() {
    var o;
    const r = String(((o = _.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : r === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Au() {
    var r;
    return !!W && !!((r = K == null ? void 0 : K.isSupported) != null && r.call(K));
  }
  function Tu(r, o) {
    return !Au() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((I == null ? void 0 : I.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((I == null ? void 0 : I.height) || 0));
  }
  function no() {
    return d.showObjects ? Tp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function ro(r) {
    return !d.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Ip(r);
  }
  function Iu() {
    var r, o;
    return ((o = (r = d.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Lp() {
    return Iu() ? `${ll()}:mask_display` : "";
  }
  function aa(r) {
    if (!d.showMask) return r;
    const o = Iu();
    if (!o) return r;
    const s = Lp(), l = r.reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(l, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function io() {
    var l, h;
    const r = Us(!0), o = Np(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const b = String(m.actionGroupId || m.id || "");
        if (!b) continue;
        const g = ((h = (l = d.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : h.call(l, b)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${b}`,
          source: g,
          revision: `${ll()}:${b}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const b = m.item || null, g = zt((b == null ? void 0 : b.id) || m.id || "");
        if (!g) continue;
        const v = wu(b, () => ge());
        if (!v) continue;
        const S = Ap(v, m, o), T = (b == null ? void 0 : b.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: S,
          revision: [
            Si(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(T.du || 0).toFixed(6),
            Number(T.dv || 0).toFixed(6),
            Number(T.rot_deg || 0).toFixed(3),
            Number(T.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (b == null ? void 0 : b.visible) !== !1
        });
      }
    }
    return aa(s);
  }
  function zp(r, o = "modal_bg_gl") {
    const s = no(), l = ro(s), h = Nr(r), m = h ? bi(r) : "none", b = d.showObjects ? io() : aa([]), g = null, v = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      b.length ? b.map((S) => `${String((S == null ? void 0 : S.id) || "")}:${String((S == null ? void 0 : S.revision) || "")}:${Number((S == null ? void 0 : S.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: wa({
        stateRevision: v,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Bt(_.coverage),
        scene: s,
        textures: l,
        paintSource: g,
        paintRevision: "",
        rasterEntries: b,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || b.length > 0
    };
  }
  function il() {
    if (!W) return;
    const r = W.getContext("webgl2");
    if (r)
      r.viewport(0, 0, W.width, W.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = W.getContext("2d");
      o && (o.clearRect(0, 0, W.width, W.height), o.fillStyle = "#070707", o.fillRect(0, 0, W.width, W.height));
    }
    we.backgroundWasVisible = !1, we.backgroundDirty = !1;
  }
  function $p(r, o, s, l = "modal_bg_gl") {
    var S;
    if (!Tu(r, o)) return !1;
    if (!we.backgroundDirty && we.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = zp(s, l);
    if (!m || !K.syncState(h))
      return il(), !1;
    const g = K.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), v = (S = W == null ? void 0 : W.getContext) == null ? void 0 : S.call(W, "2d");
    return !g || !v ? (il(), !1) : (v.clearRect(0, 0, W.width, W.height), v.drawImage(g, 0, 0, W.width, W.height), we.backgroundWasVisible = !0, we.backgroundDirty = !1, !0);
  }
  function jp(r = !1) {
    const o = I.width, s = I.height, l = Mr();
    if (P.globalAlpha = 1, P.lineWidth = 1, r || (P.fillStyle = "#070707", P.fillRect(0, 0, o, s), P.fillStyle = "#070707", P.fillRect(l.x, l.y, l.w, l.h)), lo(), Su(
      P,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Hr(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const b = l.x + l.w * m / 16;
        P.beginPath(), P.moveTo(b, l.y), P.lineTo(b, l.y + l.h), P.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const b = l.y + l.h * m / 8;
        P.beginPath(), P.moveTo(l.x, b), P.lineTo(l.x + l.w, b), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(l.x, l.y + l.h / 2), P.lineTo(l.x + l.w, l.y + l.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const h = l.y + l.h * 0.57;
      P.fillText("Left", l.x + l.w * 0.25, h), P.fillText("Front", l.x + l.w * 0.5, h), P.fillText("Right", l.x + l.w * 0.75, h), P.fillText("Back", l.x + 38, h), P.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Cu(r, o, s = 1) {
    let l = !1;
    P.strokeStyle = o, P.lineWidth = s, P.beginPath();
    for (const h of r) {
      const m = ia(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? P.lineTo(m.x, m.y) : (P.moveTo(m.x, m.y), l = !0);
    }
    P.stroke();
  }
  function Vp(r = !1) {
    const o = I.width, s = I.height;
    if (r || (Au() ? P.clearRect(0, 0, o, s) : (P.fillStyle = "#070707", P.fillRect(0, 0, o, s))), lo(), Su(
      P,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Bt(_.coverage)
      },
      Hr(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let b = -89; b <= 89; b += 4) m.push(Un(h, b));
        Cu(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let b = -180; b <= 180; b += 4) m.push(Un(b, h));
        Cu(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Un(-90, 0) },
        { name: "Front", dir: Un(0, 0) },
        { name: "Right", dir: Un(90, 0) },
        { name: "Back", dir: Un(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", l.forEach((h) => {
        const m = ia(h.dir);
        m && P.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Up(r, o = null, s = null, l = null) {
    if (d.mode === "frame") {
      const h = o || Le();
      if (!h) return [];
      const m = s || Ot(h);
      return Sg(r, h, m);
    }
    return $u(r, l);
  }
  function ao(r, o = null, s = null, l = null, h = null) {
    if (!r) return null;
    if (d.mode === "unwrap") {
      const b = $u([r], h);
      return b[0] ? { x: b[0].x, y: b[0].y, z: 1 } : null;
    }
    const m = wi(r);
    return m ? or(m, o, s, l) : null;
  }
  function Hp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = Pn(s, r.layerKind), h = wr(s, r.layerKind, l), m = (h == null ? void 0 : h.centerUv) || Bs(s, r.layerKind, l), b = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], v = d.mode === "frame" ? Le() : null, S = v ? Ot(v) : null;
    for (const le of l) {
      const _e = (le == null ? void 0 : le.geometry) || null, Re = (_e == null ? void 0 : _e.geometryKind) === "lasso_fill" ? _e == null ? void 0 : _e.points : (_e == null ? void 0 : _e.processedPoints) || (_e == null ? void 0 : _e.rawPoints) || (_e == null ? void 0 : _e.points) || [], ze = Up(Re, v, S, b).filter((te) => Number.isFinite(te == null ? void 0 : te.x) && Number.isFinite(te == null ? void 0 : te.y));
      if (!ze.length) continue;
      const Ye = Ar(String((le == null ? void 0 : le.toolKind) || "pen")), ye = fn[Ye] || fn[cr];
      g.push({
        points: ze,
        closed: String((_e == null ? void 0 : _e.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || r.layerKind || "paint")
      });
    }
    const T = ao(m, null, v, S, b);
    if (!T) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, le), le;
    }
    const E = Wm(h).map((le) => ao(le, T.x, v, S, b)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (E.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, le), le;
    }
    const L = (le, _e) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((_e == null ? void 0 : _e.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((_e == null ? void 0 : _e.y) || 0)) * 0.5,
      a: le,
      b: _e
    }), Q = L(E[0], E[1]), B = L(E[1], E[2]), X = L(E[2], E[3]), se = L(E[3], E[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(T.x || 0), y: Number(T.y || 0) },
      corners: E,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...B },
        { edge: "bottom", ...X },
        { edge: "left", ...se }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return d._strokeGeomCache.set(o, he), he;
  }
  function Bp(r, o) {
    const s = d.mode === "frame" ? Le() : null, l = s ? Ot(s) : null, h = Pu(r), m = d.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, b = ao(h, null, s, l, m), v = Dp(r).map((E) => ao(E, (b == null ? void 0 : b.x) ?? null, s, l, m)).filter((E) => Number.isFinite(E == null ? void 0 : E.x) && Number.isFinite(E == null ? void 0 : E.y));
    if (!Array.isArray(v) || v.length < 4) {
      const E = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(o, E), E;
    }
    const S = v.slice(0, 4).map((E) => ({ x: Number((E == null ? void 0 : E.x) || 0), y: Number((E == null ? void 0 : E.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: S.reduce((E, L) => E + Number(L.x || 0), 0) / S.length,
        y: S.reduce((E, L) => E + Number(L.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return d._strokeGeomCache.set(o, N), N;
  }
  function or(r, o = null, s = null, l = null, h = {}) {
    if (d.mode === "frame") {
      const _e = s || Le(), Re = l || Ot(_e);
      if (!_e || !Re) return null;
      const ze = _e ? la(_e, r) : null;
      return ze ? {
        x: Number(Re.x || 0) + Number(ze.x || 0) * Number(Re.w || 0),
        y: Number(Re.y || 0) + Number(ze.y || 0) * Number(Re.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return rl(r, o);
    const { right: m, up: b, fwd: g } = Zs(), v = En(r, m), S = En(r, b), T = En(r, g), N = 1e-4;
    if (!Number.isFinite(T) || T <= N && !(h != null && h.clipBehind)) return null;
    const E = Math.max(T, N), L = I.width, Q = I.height, B = d.viewFov * Rt, X = 2 * Math.atan(Math.tan(B / 2) * (Q / Math.max(L, 1))), se = L / 2 / Math.tan(B / 2), he = Q / 2 / Math.tan(X / 2), le = Math.max(L, Q) * 2;
    return {
      x: G(L / 2 + v / E * se, -le, L + le),
      y: G(Q / 2 - S / E * he, -le, Q + le),
      z: E,
      rawZ: T,
      clipped: T <= N
    };
  }
  function Gp(r, o = []) {
    if (d.mode !== "pano" || yt(r)) return 1;
    const s = o.map((l) => Number((l == null ? void 0 : l.rawZ) ?? (l == null ? void 0 : l.z))).filter((l) => Number.isFinite(l));
    return s.length ? pS(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Kp(r) {
    const o = Un(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = d.mode === "frame" ? Le() : null, l = s ? Ot(s) : null, h = d.mode === "pano" && (yt(r) || pn(r)), m = h ? { clipBehind: !0 } : null, b = or(o, null, s, l, m);
    if (!b) return { visible: !1 };
    const g = to(r), S = Nu(r).map((te) => or(te, b.x, s, l, m)).filter((te) => Number.isFinite(te == null ? void 0 : te.x) && Number.isFinite(te == null ? void 0 : te.y));
    if (S.length < 4) return { visible: !1 };
    const T = kr(g, 0, g.tanY), N = kr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), E = or(T, b.x, s, l, m);
    if (!E) return { visible: !1 };
    const L = or(N, (E == null ? void 0 : E.x) ?? b.x, s, l, m), Q = ((L == null ? void 0 : L.x) ?? E.x) - E.x, B = ((L == null ? void 0 : L.y) ?? E.y) - E.y, X = Math.hypot(Q, B) || 1, se = {
      x: E.x + Q / X * 30,
      y: E.y + B / X * 30
    }, he = or(kr(g, 0, g.tanY), b.x, s, l, m), le = or(kr(g, g.tanX, 0), b.x, s, l, m), _e = or(kr(g, 0, -g.tanY), b.x, s, l, m), Re = or(kr(g, -g.tanX, 0), b.x, s, l, m);
    if (!he || !le || !_e || !Re) return { visible: !1 };
    const ze = [
      b,
      ...S,
      E,
      L,
      he,
      le,
      _e,
      Re
    ];
    if (h && !ze.some((te) => Number((te == null ? void 0 : te.rawZ) ?? (te == null ? void 0 : te.z)) > 1e-4)) return { visible: !1 };
    const Ye = Gp(r, ze), ye = [
      {
        edge: "top",
        x: he.x,
        y: he.y,
        a: { x: S[0].x, y: S[0].y },
        b: { x: S[1].x, y: S[1].y }
      },
      {
        edge: "right",
        x: le.x,
        y: le.y,
        a: { x: S[1].x, y: S[1].y },
        b: { x: S[2].x, y: S[2].y }
      },
      {
        edge: "bottom",
        x: _e.x,
        y: _e.y,
        a: { x: S[2].x, y: S[2].y },
        b: { x: S[3].x, y: S[3].y }
      },
      {
        edge: "left",
        x: Re.x,
        y: Re.y,
        a: { x: S[3].x, y: S[3].y },
        b: { x: S[0].x, y: S[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: S.map((te) => ({ x: te.x, y: te.y })),
      edgeMidpoints: ye,
      rotateStemBase: { x: E.x, y: E.y },
      rotateHandle: se,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Ye,
      visible: !0
    };
  }
  function jt(r) {
    if (Dt(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Qm(h, r.layerKind), b = d._strokeGeomCache.get(m);
      return b || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Hp(r, m));
    }
    if (Wt(r)) {
      const h = Op(r), m = d._strokeGeomCache.get(h);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Bp(r, h));
    }
    const o = Rp(r), s = d._strokeGeomCache.get(o);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const l = Kp(r);
    return d._strokeGeomCache.set(o, l), l;
  }
  function oo(r, o, s, l = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const b = m / s;
      let g = 0, v = 0;
      o === 0 ? (g = b, v = 0) : o === 1 ? (g = 1, v = b) : o === 2 ? (g = 1 - b, v = 1) : (g = 0, v = 1 - b);
      const S = ku(r, g, v), T = d.mode === "unwrap" ? rl(S, l) : ia(S);
      T && h.push(T);
    }
    return h;
  }
  function Wp(r, o) {
    const s = Un(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = d.mode === "unwrap" ? rl(s) : null, h = l ? l.x : null, m = d.mode === "pano" ? 28 : 20, b = [
      oo(r, 0, m, h),
      oo(r, 1, m, h),
      oo(r, 2, m, h),
      oo(r, 3, m, h)
    ];
    P.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", P.lineWidth = o ? 2 : 1, P.beginPath();
    let g = !1;
    for (const v of b)
      for (const S of v)
        g ? P.lineTo(S.x, S.y) : (P.moveTo(S.x, S.y), g = !0);
    P.closePath(), P.stroke();
  }
  function Yp() {
    const r = [...Array.isArray(_.shots) ? _.shots : []], o = [...Array.isArray(_.stickers) ? _.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function al() {
    const r = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function so(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Eu(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const h = G(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = P.globalAlpha;
    P.globalAlpha = m * h;
    const b = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", v = o ? 3.2 : 2.6;
    so(P, l), P.fillStyle = g, P.fill(), P.strokeStyle = b, P.lineWidth = v, P.stroke(), P.save(), P.strokeStyle = b, P.lineWidth = o ? 3.2 : 2.6, P.lineCap = "round";
    const S = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], T = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = o ? 12 : 9;
    S.forEach((E) => {
      const Q = S.find((he) => (he == null ? void 0 : he.edge) === T[E == null ? void 0 : E.edge]) || {
        x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
        y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
      }, B = Q.x - E.x, X = Q.y - E.y, se = Math.hypot(B, X) || 1;
      P.beginPath(), P.moveTo(E.x, E.y), P.lineTo(E.x + B / se * N, E.y + X / se * N), P.stroke();
    }), P.restore(), P.globalAlpha = m;
  }
  function qp(r, o, s, l) {
    const h = G(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (pn(r)) {
      Eu(o, s, l);
      return;
    }
    if (yt(r)) {
      const b = P.globalAlpha;
      P.globalAlpha = b * ap(r) * h, d.mode === "frame" ? (P.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = s ? 2 : 1, so(P, o.corners), P.stroke()) : Wp(r, s), P.globalAlpha = b;
      return;
    }
    const m = P.globalAlpha;
    P.globalAlpha = m * h, P.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", so(P, o.corners), P.fill(), P.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = s ? 2.8 : 1.9, so(P, o.corners), P.stroke(), P.globalAlpha = m;
  }
  function Du(r, o, s) {
    P.fillStyle = s, o.corners.forEach((l) => {
      P.beginPath(), P.arc(l.x, l.y, 6.5, 0, Math.PI * 2), P.fill();
    }), pn(r) && (P.strokeStyle = s, P.lineCap = "round", P.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var T, N, E, L;
      const h = (((T = l.b) == null ? void 0 : T.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), m = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((L = l.a) == null ? void 0 : L.y) ?? l.y), b = Math.hypot(h, m) || 1, g = h / b, v = m / b, S = 10;
      P.beginPath(), P.moveTo(l.x - g * S, l.y - v * S), P.lineTo(l.x + g * S, l.y + v * S), P.stroke();
    }), P.lineCap = "butt"), Dt(r) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), P.lineTo(o.rotateHandle.x, o.rotateHandle.y), P.stroke(), P.fillStyle = s, P.beginPath(), P.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function Xp() {
    var g;
    const [r, o] = Fp(), s = d.mode === "frame" ? [] : An(), l = s.length > 1, h = t === "cutout" ? Yp() : rr(), m = h.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${pn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const b = d._sortedItemsCache.sorted;
    for (const v of b) {
      const S = d.mode !== "frame" && !l && lu(v);
      if (d.mode === "frame" && !S || !d.showObjects && !pn(v)) continue;
      const T = yt(v), N = pn(v), E = ir(v);
      if (!T && !N)
        continue;
      const L = jt(v);
      if (t !== "stickers" && !L.visible)
        continue;
      const Q = G(Number((L == null ? void 0 : L.visibilityAlpha) ?? 1), 0, 1);
      if (Q <= 0.01) continue;
      const B = N && t === "cutout" && d.mode === "pano" ? G(Number(d.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (P.save(), P.globalAlpha *= B, qp(v, L, S, E), S && L.visible) {
        const X = E ? "#ff4d4f" : T && $t(v) ? "#f59e0b" : "#0070f3", se = P.globalAlpha;
        P.globalAlpha = se * Q, Du(v, L, X), P.globalAlpha = se;
      }
      P.restore();
    }
    if (t === "cutout" && d.mode === "pano" && !Le() && d.cutoutPanoFrameVisual && d.cutoutPanoFrameAlpha > 1e-4) {
      const v = d.cutoutPanoFrameVisual, S = G(Number(d.cutoutPanoFrameAlpha || 0), 0, 1);
      P.save(), P.globalAlpha *= S, Eu(v.geom, v.selected, v.locked), v.selected && Du(
        v.item,
        v.geom,
        v.locked ? "#ff4d4f" : "#0070f3"
      ), P.restore();
    }
    if (l) {
      const v = Gs(s);
      if (v != null && v.visible) {
        const S = Ks(s) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(v.corners[0].x, v.corners[0].y);
        for (let T = 1; T < v.corners.length; T += 1) P.lineTo(v.corners[T].x, v.corners[T].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = S, v.corners.forEach((T) => {
          P.beginPath(), P.arc(T.x, T.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      s.forEach((v) => {
        if (!Dt(v) && !Wt(v)) return;
        const S = jt(v);
        if (!(S != null && S.visible)) return;
        const T = ir(v) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(S.corners[0].x, S.corners[0].y);
        for (let N = 1; N < S.corners.length; N += 1) P.lineTo(S.corners[N].x, S.corners[N].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = T, S.corners.forEach((N) => {
          P.beginPath(), P.arc(N.x, N.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      });
    if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const v = rf(d.interaction.start, d.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), P.fill(), P.stroke(), P.restore();
    }
    d.hqFrames && r >= 40 && o >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ge());
  }
  function Jp(r) {
    const o = Rr(r), s = G(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Ou(r, o = !1) {
    const s = G(Zo(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Zp(r) {
    if (!sn || !r) return !1;
    const o = sn.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || sn.clientWidth || 0)), l = Math.round(Number(o.clientHeight || sn.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function Qp() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function eg(r, o = {}) {
    if (!r) return "";
    const s = Hr(), l = s && Nr(s) ? bi(s) : "no_bg", h = Jp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      ll(),
      Qp(),
      qa(),
      l,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function tg() {
    var E, L, Q, B;
    if (d.outputPreviewRect = null, k.outputPreviewToggle.visible = d.mode !== "frame" && !!Le(), t !== "cutout" || !k.cameraPreview) return;
    if (d.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = Le();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (E = de == null ? void 0 : de.clearScene) == null || E.call(de), (L = Ce == null ? void 0 : Ce.requestRender) == null || L.call(Ce);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = Hr();
    if (!r || !de || !Ce) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!d.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (Q = de == null ? void 0 : de.clearScene) == null || Q.call(de), (B = Ce == null ? void 0 : Ce.requestRender) == null || B.call(Ce);
      return;
    }
    const s = Ou(r, !!d.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const l = no(), h = ro(l), m = Nr(o), b = m ? bi(o) : "none", g = d.showObjects ? io() : aa([]), v = wa({
      stateRevision: [
        "cutout_preview_camera",
        b,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((X) => String((X == null ? void 0 : X.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((X) => `${String((X == null ? void 0 : X.assetId) || "")}:${String((X == null ? void 0 : X.revision) || "")}`).join(",") : "none",
        g.length ? g.map((X) => `${String((X == null ? void 0 : X.id) || "")}:${String((X == null ? void 0 : X.revision) || "")}:${Number((X == null ? void 0 : X.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Bt(_.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${b}` : "",
      coverageDeg: Bt(_.coverage),
      scene: l,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, de.clearScene(), Ce.requestRender();
      return;
    }
    if (d.showPanorama && !m && h.length === 0 && g.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, de.clearScene(), Ce.requestRender();
      return;
    }
    de.syncScene(v), Ce.setView(Rr(r));
    const T = Zp(s), N = T ? Ce.present() : !1;
    T || Ce.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = T && N ? "" : "Loading preview", k.cameraPreview.settled = T && N && we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame;
  }
  function ng(r, o, s, l = {}) {
    if (!de || !s) return !1;
    const h = Hr(), m = no(), b = ro(m), g = Nr(h), v = d.showObjects ? io() : aa([]);
    return g || b.length > 0 || v.length > 0 ? (de.syncScene(wa({
      stateRevision: eg(s, l),
      backgroundSource: g && d.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${bi(h)}` : "",
      coverageDeg: Bt(_.coverage),
      scene: m,
      textures: b,
      rasterEntries: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), de.renderShotToContext(r, o, s, l)) : !1;
  }
  function ol(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return ku(r, s, l);
  }
  function wi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return Jn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function rg(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function ig(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Yt(r, "widthScale", 1),
      pressureLike: Yt(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function ag(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function sl(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (l) {
      let B = null;
      r.forEach((X) => {
        const se = Number((X == null ? void 0 : X.u) || 0), he = Number((X == null ? void 0 : X.v) || 0), le = (se % 1 + 1) % 1, _e = B == null ? le : B + xn(le, (B % 1 + 1) % 1);
        h.set(X, { x: _e, y: he }), B = _e;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : h.get(B) || rg(B), b = (B, X, se, he = {}) => {
      const le = l ? (Number(X) % 1 + 1) % 1 : Number(X), _e = ig(B, le, se, he);
      return h.set(_e, { x: Number(X), y: Number(se) }), _e;
    }, g = (B, X, se) => {
      const he = m(B), le = m(X);
      return b(B, wn(he.x, le.x, se), wn(he.y, le.y, se), {
        t: wn(Number((B == null ? void 0 : B.t) || 0), Number((X == null ? void 0 : X.t) || 0), se),
        widthScale: wn(Yt(B, "widthScale", 1), Yt(X, "widthScale", 1), se),
        pressureLike: wn(Yt(B, "pressureLike", 1), Yt(X, "pressureLike", 1), se)
      });
    };
    if (r.length === 1) {
      const B = m(r[0]);
      return [b(r[0], B.x, B.y)];
    }
    const v = ag(o, s), S = (B, X) => {
      const se = [0];
      for (let te = 1; te < B.length; te += 1) {
        const pe = m(B[te - 1]), De = m(B[te]);
        se.push(se[te - 1] + Math.hypot(De.x - pe.x, De.y - pe.y));
      }
      const he = se[se.length - 1] || 0;
      if (he <= 1e-8) {
        const te = B[0], pe = m(te);
        return [b(te, pe.x, pe.y)];
      }
      const le = [];
      let _e = 0;
      for (let te = 0; te <= he + 1e-9; te += X) {
        for (; _e < se.length - 2 && se[_e + 1] < te; ) _e += 1;
        const pe = se[_e], De = se[_e + 1], Ee = Math.max(1e-8, De - pe);
        le.push(g(B[_e], B[_e + 1], G((te - pe) / Ee, 0, 1)));
      }
      const Re = B[B.length - 1], ze = m(Re), Ye = le[le.length - 1], ye = Ye ? m(Ye) : null;
      return (!ye || Math.hypot(ye.x - ze.x, ye.y - ze.y) > X * 0.35) && le.push(b(Re, ze.x, ze.y)), le;
    }, T = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const X = m(B[0]), se = [b(B[0], X.x, X.y)];
      for (let _e = 0; _e < B.length - 1; _e += 1) {
        const Re = B[_e], ze = B[_e + 1], Ye = m(Re), ye = m(ze), te = b(
          Re,
          Ye.x * 0.75 + ye.x * 0.25,
          Ye.y * 0.75 + ye.y * 0.25,
          {
            t: Number(Re.t || 0) * 0.75 + Number(ze.t || 0) * 0.25,
            widthScale: Yt(Re, "widthScale", 1) * 0.75 + Yt(ze, "widthScale", 1) * 0.25,
            pressureLike: Yt(Re, "pressureLike", 1) * 0.75 + Yt(ze, "pressureLike", 1) * 0.25
          }
        ), pe = b(
          Re,
          Ye.x * 0.25 + ye.x * 0.75,
          Ye.y * 0.25 + ye.y * 0.75,
          {
            t: Number(Re.t || 0) * 0.25 + Number(ze.t || 0) * 0.75,
            widthScale: Yt(Re, "widthScale", 1) * 0.25 + Yt(ze, "widthScale", 1) * 0.75,
            pressureLike: Yt(Re, "pressureLike", 1) * 0.25 + Yt(ze, "pressureLike", 1) * 0.75
          }
        );
        se.push(te, pe);
      }
      const he = B[B.length - 1], le = m(he);
      return se.push(b(he, le.x, le.y)), se;
    }, N = S(r, v);
    if (N.length < 3) return N;
    const E = s ? 2 : 1;
    let L = N.slice();
    for (let B = 0; B < E; B += 1) L = T(L);
    return S(L, Math.max(v * 0.75, 55e-5));
  }
  function Yt(r, o, s = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function og(r) {
    const o = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const s = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function oa(r, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const h = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, l.width, l.height), h.imageSmoothingEnabled = !0), { canvas: l, ctx: h };
  }
  function sa() {
    const r = co();
    return `${String(d.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function Si() {
    const r = co();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function ll() {
    const r = qa(), o = Si();
    return r ? `${o}:${r}` : o;
  }
  function sg() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function lg() {
    d.paintCompositeRevision += 1;
  }
  function cg() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function Ru() {
    var r, o;
    d.paintEngineRevisionKey = null, (o = (r = d.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, _), d.paintEngineRevisionKey = sa();
  }
  function Fu() {
    _.painting_layer !== null && (_.painting_layer = null), Qa = "";
  }
  function Ut() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, cg(), we.backgroundDirty = !0, we.dirty = !0;
  }
  function Tn({ rebuildPaintEngine: r = !1 } = {}) {
    Fu(), sg(), Ut(), r && Ru();
  }
  function Mi() {
    Fu(), lg(), Ut();
  }
  function lo() {
    var l;
    const r = co(), o = `${r.width}x${r.height}`;
    d.paintEngineDescriptorKey !== o && (d.paintEngine = sc(r), d.paintEngineDescriptorKey = o, d.paintEngineRevisionKey = "");
    const s = sa();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (l = d.paintEngine) == null || l.rebuildCommitted(_));
  }
  function co() {
    const r = Math.max(1, A(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function gn() {
    return co();
  }
  function ug(r, o, s, l, h = null) {
    const m = og(r), b = Yt(o, "widthScale", 1) * Yt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * b) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Rt) * s * b) : Math.max(0.5, m.value / (2 * Math.PI) * s * b) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * b);
  }
  function fg(r, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, b = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * b : 1, l === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = m ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${v})`;
  }
  function dg(r, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function hg(r, o, s, l, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    r.save(), fg(r, s, h);
    const b = (g) => dg(r, g, m);
    if (o.length === 1) {
      b(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const v = o[g], S = o[g + 1];
      if (!v || !S) continue;
      const T = Number(v.x || 0), N = Number(v.y || 0), E = Number(S.x || 0), L = Number(S.y || 0), Q = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(T) || !Number.isFinite(N) || !Number.isFinite(E) || !Number.isFinite(L) || !Number.isFinite(Q) || !Number.isFinite(B)) continue;
      const X = E - T, se = L - N, he = Math.hypot(X, se);
      if (!Number.isFinite(he) || he < 1e-6) {
        b(v);
        continue;
      }
      if (he > Math.max(l.w, l.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(Q, B)), _e = Math.max(0.35, Math.min(le * 0.4, 2.25)), Re = Math.max(1, Math.ceil(he / _e));
      for (let ze = 0; ze <= Re; ze += 1) {
        const Ye = ze / Re;
        b({
          x: wn(T, E, Ye),
          y: wn(N, L, Ye),
          radiusPx: wn(Q, B, Ye)
        });
      }
    }
    b(o[o.length - 1]), r.restore();
  }
  function mg(r, o, s, l) {
    hg(r, o, s, l, { preview: !1 });
  }
  function pg(r, o, s, l, h) {
    var g, v, S, T;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", b = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * l.w, Number(((v = o[0]) == null ? void 0 : v[b]) || 0) * l.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((S = o[N]) == null ? void 0 : S[m]) || 0) * l.w, Number(((T = o[N]) == null ? void 0 : T[b]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Lu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function gg(r, o) {
    const s = Lu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ug(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function zu(r, o, s = null) {
    var g, v, S, T;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((v = r.canvas) == null ? void 0 : v.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((T = o == null ? void 0 : o.geometry) == null ? void 0 : T.geometryKind) || "") === "lasso_fill")
      return pg(r.ctx, Lu(h), h, l), !0;
    const b = gg(h, l);
    return b.length ? (mg(r.ctx, b, h, l), !0) : !1;
  }
  function bg(r, o, s, l = 8) {
    const h = new Uint8Array(o * s), m = [], b = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let v = 0; v < s; v += 1)
      for (let S = 0; S < o; S += 1) {
        const T = v * o + S;
        if (h[T] || r[T] <= l) continue;
        let N = 0, E = 0;
        b[E] = S, g[E] = v, E += 1, h[T] = 1;
        const L = [];
        let Q = S, B = v, X = S, se = v;
        for (; N < E; ) {
          const he = b[N], le = g[N];
          N += 1, L.push({ x: he, y: le }), he < Q && (Q = he), le < B && (B = le), he > X && (X = he), le > se && (se = le);
          const _e = [
            [(he - 1 + o) % o, le],
            [(he + 1) % o, le],
            [he, le - 1],
            [he, le + 1]
          ];
          for (const [Re, ze] of _e) {
            if (ze < 0 || ze >= s) continue;
            const Ye = ze * o + Re;
            h[Ye] || r[Ye] <= l || (h[Ye] = 1, b[E] = Re, g[E] = ze, E += 1);
          }
        }
        m.push({ pixels: L, minX: Q, minY: B, maxX: X, maxY: se });
      }
    return m;
  }
  function yg(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((v) => Number((v == null ? void 0 : v.x) || 0)).filter((v) => Number.isFinite(v)))].sort((v, S) => v - S);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, h = 0;
    for (let v = 0; v < s.length; v += 1) {
      const S = s[v], N = (v === s.length - 1 ? s[0] + o : s[v + 1]) - S - 1;
      N > l && (l = N, h = v);
    }
    const m = (s[(h + 1) % s.length] + o) % o;
    let b = 1 / 0, g = -1 / 0;
    for (const v of s) {
      const S = (v - m + o) % o;
      b = Math.min(b, S), g = Math.max(g, S);
    }
    return {
      startX: m,
      widthPx: Math.max(1, g - b + 1)
    };
  }
  function vg(r, o, s = {}) {
    var S;
    const l = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (S = r == null ? void 0 : r.getContext) == null ? void 0 : S.call(r, "2d");
    if (!m || l < 1 || h < 1) return [];
    const b = m.getImageData(0, 0, l, h), g = new Uint8Array(l * h);
    for (let T = 0; T < g.length; T += 1) g[T] = b.data[T * 4 + 3];
    return bg(g, l, h, 8).map((T, N) => {
      const E = yg(T, l);
      if (!E) return null;
      const L = Number(E.widthPx || 0), Q = T.maxY - T.minY + 1, B = Number(E.startX || 0), X = document.createElement("canvas");
      X.width = L, X.height = Q;
      const se = X.getContext("2d");
      if (!se) return null;
      const he = se.createImageData(L, Q);
      return T.pixels.forEach(({ x: le, y: _e }) => {
        const Re = (_e * l + le) * 4, ze = (Number(le || 0) - B + l) % l, Ye = ((_e - T.minY) * L + ze) * 4;
        he.data[Ye + 0] = b.data[Re + 0], he.data[Ye + 1] = b.data[Re + 1], he.data[Ye + 2] = b.data[Re + 2], he.data[Ye + 3] = b.data[Re + 3];
      }), se.putImageData(he, 0, 0), {
        id: Oi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: T.minY / h,
          u1: L / l,
          v1: (T.maxY + 1) / h
        },
        rasterDataUrl: X.toDataURL("image/png"),
        transform: {
          du: B / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function la(r, o) {
    if (!r || !o) return null;
    const s = to(r), l = En(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = En(o, s.right) / l, m = En(o, s.up) / l, b = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (b / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function _g(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = Mr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => ia(wi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function $u(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (d.mode === "unwrap") {
      const l = Mr();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, b = o == null ? m : Number(o || 0) + xn(m, o);
        return {
          x: l.x + b * l.w,
          y: l.y + Number(h.v || 0) * l.h
        };
      });
    }
    const s = r.map((l) => ia(wi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function xg(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], h = r[(s + 1) % r.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function wg(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = wi(h), b = la(o, m);
      if (!b) return [];
      l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return xg(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Sg(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = wi(h), b = la(o, m);
      b && l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function Mg() {
    var L;
    const r = Le(), o = fl(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, l = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: b, halfH: g } = Ld(
      { width: I.width, height: I.height },
      l
    ), v = { x: h - b, y: m - g, w: b * 2, h: g * 2 }, S = {
      ...r,
      hFOV_deg: 2 * Math.atan(b / l) * Sn,
      vFOV_deg: 2 * Math.atan(g / l) * Sn
    }, T = Ng(s);
    P.save(), P.fillStyle = "#0a0a0a", P.fillRect(0, 0, I.width, I.height);
    const N = d.interaction ? "draft" : String(((L = _.ui_settings) == null ? void 0 : L.preview_quality) || "balanced");
    return ng(P, v, S, { quality: N }) === !0 || (P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(v.x, v.y, v.w, v.h)), P.restore(), P.save(), P.fillStyle = "rgba(0, 0, 0, 0.58)", P.beginPath(), P.rect(0, 0, I.width, I.height), P.roundRect(s.x, s.y, s.w, s.h, T), P.fill("evenodd"), P.restore(), P.save(), P.strokeStyle = nS, P.globalAlpha = 0.62, P.lineWidth = 2, P.beginPath(), P.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, T - 1)), P.stroke(), P.restore(), !0;
  }
  function Ng(r) {
    const o = Math.max(1e-6, Number(we.frameCanvasScale || 1));
    return Math.min(Ln * o, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function Pr() {
    var o;
    const r = d.mode === "frame" ? Le() : null;
    k.frameRollKnob.visible = !!r && !i, k.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), k.frameRollKnob.displayValue = va(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((o = d.interaction) == null ? void 0 : o.kind) === "roll_frame", k.frameRollKnob.armed = !!r && d.altModifier === !0;
  }
  function kg() {
    var v, S;
    if (((v = d.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const r = d.interaction.stroke, o = (S = r == null ? void 0 : r.geometry) == null ? void 0 : S.points;
    let s;
    if (d.mode === "frame") {
      const T = Le(), N = Ot(T);
      s = wg(o, T, N);
    } else
      s = _g(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), b = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let T = 1; T < s.length; T++) P.lineTo(Number(s[T].x || 0), Number(s[T].y || 0));
    P.closePath(), l ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${m},${b},${g},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function Pg() {
    const r = d.frameRollOverlayVisual, o = G(Number(d.frameRollOverlayAlpha || 0), 0, 1);
    if (d.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = Ot(r.shot);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg ?? r.shot.rot_deg ?? 0) * Rt, m = Math.hypot(s.w, s.h) * 0.55, b = Math.cos(h) * m, g = Math.sin(h) * m;
    P.save(), P.globalAlpha *= o, P.beginPath(), P.rect(s.x, s.y, s.w, s.h), P.clip(), P.translate(l.x, l.y), P.rotate(h);
    const v = Math.max(12, Math.min(s.w, s.h) / 6);
    P.beginPath();
    for (let S = -m; S <= m; S += v)
      P.moveTo(S, -m), P.lineTo(S, m);
    for (let S = -m; S <= m; S += v)
      P.moveTo(-m, S), P.lineTo(m, S);
    P.lineWidth = 1, P.strokeStyle = "rgba(255, 255, 255, 0.22)", P.stroke(), P.setTransform(1, 0, 0, 1, 0, 0), P.beginPath(), P.moveTo(l.x - b, l.y - g), P.lineTo(l.x + b, l.y + g), P.lineWidth = 1.5, P.setLineDash([8, 6]), P.strokeStyle = "rgba(255, 255, 255, 0.92)", P.shadowColor = "rgba(0, 0, 0, 0.8)", P.shadowBlur = 3, P.stroke(), P.setLineDash([]), P.restore();
  }
  function Ag() {
    return t !== "cutout" || !Le() ? 0 : aS;
  }
  function Tg() {
    const r = G(Number(d.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || d.mode !== "pano") return;
    const o = Le(), s = o ? jt(o) : null, l = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    s != null && s.visible && l && (d.cutoutPanoDimCorners = l), o && (s != null && s.visible) && l && (d.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: lu(o),
      locked: ir(o)
    });
    const h = Number(d.cutoutPanoDimTarget || 0) <= 1e-6, m = s != null && s.visible ? l : h ? d.cutoutPanoDimCorners || [] : [];
    if (P.save(), P.fillStyle = `rgba(0, 0, 0, ${r})`, P.beginPath(), P.rect(0, 0, I.width, I.height), m.length >= 4) {
      P.moveTo(m[0].x, m[0].y);
      for (let b = 1; b < 4; b += 1) P.lineTo(m[b].x, m[b].y);
      P.closePath();
    }
    P.fill("evenodd"), P.restore();
  }
  function Ig() {
    d.mode === "frame" ? (we.frameSafeRect = Xg(), Mg()) : d.mode === "unwrap" ? jp(!1) : Vp(!1), Tg(), t === "cutout" && tg(), Xp(), Pr(), kg(), Pg(), k.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && We(), we.hasPresentedFrame || (we.hasPresentedFrame = !0, W.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = we.pendingStableLayoutFrames <= 0 && we.hasPresentedFrame && d.mode !== "frame");
    const r = Ep();
    k.stageStatus = r.status, k.stageStatusDetail = r.detail, r.status === Yn ? (ie == null || ie.removeAttribute("data-stage-ready"), ie == null || ie.setAttribute("data-stage-loading-kind", r.detail)) : (ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind"));
  }
  function Cg(r = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Eg() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Zm();
  }
  function ge(r = {}) {
    var g, v, S, T, N, E, L, Q, B, X;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), h = String(((g = d.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Cg() || !!((v = d.viewTween) != null && v.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (we.backgroundDirty = !0), o && iu() && (d.livePaintInteractionRevision += 1, we.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Js(), Sr()), Eg(), s && ((T = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || T.call(S), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((L = (E = e.graph) == null ? void 0 : E.setDirtyCanvas) == null || L.call(E, !0, !0), (X = (B = (Q = On) == null ? void 0 : Q.canvas) == null ? void 0 : B.setDirty) == null || X.call(B, !0, !0)), we.dirty = !0;
  }
  function ju() {
    const r = I.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return I.width !== o || I.height !== s || W.width !== o || W.height !== s ? (I.width = o, I.height = s, W.width = o, W.height = s, we.backgroundDirty = !0, we.dirty = !0, t === "cutout" && (we.pendingStableLayoutFrames = Math.max(Number(we.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Dg(r = performance.now()) {
    var m, b;
    we.lastTickTs = r;
    const o = d.mode === "frame" && ((m = d.interaction) == null ? void 0 : m.kind) === "roll_frame" ? d.interaction : null;
    o != null && o.shot && (d.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(d.frameRollOverlayTarget || 0)) > 1e-6 && (d.frameRollOverlayFrom = Number(d.frameRollOverlayAlpha || 0), d.frameRollOverlayTarget = s, d.frameRollOverlayStartTs = r), Math.abs(Number(d.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = G(
        (r - Number(d.frameRollOverlayStartTs || r)) / oS,
        0,
        1
      );
      d.frameRollOverlayAlpha = wn(
        Number(d.frameRollOverlayFrom || 0),
        s,
        Oo(g)
      ), g >= 1 && (d.frameRollOverlayAlpha = s, s === 0 && (d.frameRollOverlayVisual = null)), we.dirty = !0;
    }
    const l = Ag();
    if (Math.abs(l - Number(d.cutoutPanoDimTarget || 0)) > 1e-6 && (d.cutoutPanoDimFrom = Number(d.cutoutPanoDimAlpha || 0), d.cutoutPanoDimTarget = l, d.cutoutPanoDimStartTs = r), Math.abs(Number(d.cutoutPanoDimAlpha || 0) - l) > 1e-6) {
      const g = G(
        (r - Number(d.cutoutPanoDimStartTs || r)) / Xd,
        0,
        1
      );
      d.cutoutPanoDimAlpha = wn(
        Number(d.cutoutPanoDimFrom || 0),
        l,
        Oo(g)
      ), g >= 1 && (d.cutoutPanoDimAlpha = l), g >= 1 && l === 0 && (d.cutoutPanoDimCorners = null), we.dirty = !0;
    }
    const h = t === "cutout" && Le() ? 1 : 0;
    if (Math.abs(h - Number(d.cutoutPanoFrameTarget || 0)) > 1e-6 && (d.cutoutPanoFrameFrom = Number(d.cutoutPanoFrameAlpha || 0), d.cutoutPanoFrameTarget = h, d.cutoutPanoFrameStartTs = r), Math.abs(Number(d.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = G(
        (r - Number(d.cutoutPanoFrameStartTs || r)) / Xd,
        0,
        1
      );
      d.cutoutPanoFrameAlpha = wn(
        Number(d.cutoutPanoFrameFrom || 0),
        h,
        Oo(g)
      ), g >= 1 && (d.cutoutPanoFrameAlpha = h, h === 0 && (d.cutoutPanoFrameVisual = null)), we.dirty = !0;
    }
    if (d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const g = Math.max(1, Number(d.outputPreviewAnimDurationMs)), v = G((r - Number(d.outputPreviewAnimStartTs || 0)) / g, 0, 1), T = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? mS(v) : yS(v);
      d.outputPreviewAnim = wn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, T), we.dirty = !0, v >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((b = d.viewTween) != null && b.active) {
      const g = d.viewTween, v = G((r - g.startTs) / g.durationMs, 0, 1), S = Oo(v);
      d.viewYaw = Vt(g.startYaw + g.deltaYaw * S), d.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * S, d.viewFov = g.startFov + (g.targetFov - g.startFov) * S, we.backgroundDirty = !0, we.dirty = !0, v >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(Ht.state.inertia.vx || 0), d.viewInertia.vy = Number(Ht.state.inertia.vy || 0), d.viewInertia.active = !!Ht.state.inertia.active, Ht.stepInertia(r) && (d.viewInertia.vx = Number(Ht.state.inertia.vx || 0), d.viewInertia.vy = Number(Ht.state.inertia.vy || 0), d.viewInertia.active = !!Ht.state.inertia.active, we.backgroundDirty = !0, we.dirty = !0), (we.dirty || r - we.lastSizeCheckTs >= 220) && (ju(), we.lastSizeCheckTs = r), we.pendingStableLayoutFrames > 0 && (we.pendingStableLayoutFrames -= 1, we.dirty = !0), we.dirty) {
      if (we.pendingStableLayoutFrames > 0)
        return;
      we.dirty = !1, Ig();
    }
  }
  function Vu(r = performance.now()) {
    if (we.running)
      try {
        Dg(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        we.tickErrorSignature !== s && (we.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), k.stageStatus = Xn, k.stageStatusDetail = "frame", ie == null || ie.setAttribute("data-stage-ready", ""), ie == null || ie.removeAttribute("data-stage-loading-kind");
      } finally {
        we.running && (we.rafId = requestAnimationFrame(Vu));
      }
  }
  function Og() {
    we.running = !1, we.rafId && cancelAnimationFrame(we.rafId), we.rafId = 0;
  }
  function et() {
    i || (d.historyController.commitActionGroup(JSON.stringify(jd(_))), pl());
  }
  function cl(r) {
    if (i) return;
    const o = r < 0 ? d.historyController.undo() : d.historyController.redo();
    if (pl(), !o) return;
    const s = JSON.parse(o);
    Object.keys(_).forEach((l) => delete _[l]), Object.assign(_, s), d.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], Tn(), cn(), Ve(), un(), ge({ cause: "cutout_frame" });
  }
  function Uu() {
    var s, l;
    const r = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], o = Number((l = d.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function cn() {
    Bm();
    const r = m_({
      editor: d,
      swatches: Qo,
      paintColorPopOpen: $ ? !$.hidden : !1,
      colorToCss: Hn,
      colorsApproximatelyEqual: es,
      rgb01ToHsv: ql,
      hsv01ToRgb: Yl,
      getBrushPresetIdForTool: Ar,
      isActiveLassoTool: sp
    });
    if (Object.assign(k.paintDock, r), hp(), !r.visible) {
      $ && ($.hidden = !0);
      return;
    }
    fe && (clearTimeout(fe), fe = 0), R && (!r.colorEnabled && $ && !$.hidden && (fe = window.setTimeout(() => {
      $.hidden = !0, k.paintDock.colorPopOpen = !1, fe = 0;
    }, 170)), $ && ($.style.setProperty("--picker-hue-color", r.pickerHueColor), $.style.setProperty("--picker-sat", r.pickerSat), $.style.setProperty("--picker-val", r.pickerVal), $.style.setProperty("--picker-hue", r.pickerHue)), ve && (ve.style.left = r.pickerSvLeft, ve.style.top = r.pickerSvTop), Y && (Y.style.left = r.pickerHueLeft));
  }
  function ca() {
    const r = t === "cutout" && d.mode === "frame" ? Le() : xt();
    r && (d.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Ii(r)
    }, Ve());
  }
  function Ve() {
    var ze, Ye, ye, te;
    if (a) return;
    _.ui_settings = _.ui_settings || {};
    const r = h_(_.ui_settings);
    if (c) {
      k.sidePanel = p_({
        coverage: _.coverage,
        uiSettings: r,
        normalizeCoverageValue: Bt
      });
      return;
    }
    const o = xt(), s = t === "cutout" && d.mode === "frame" ? Le() : null, l = s || o, h = s ? [s] : An(), m = s ? "shot" : Za();
    h.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), l && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Ii(l)
    });
    const b = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : l, v = g || b, S = !!g;
    d.panelWasEnabled = S, Js();
    let T = null;
    if (s) {
      const pe = Ws({ item: s, kind: "shot", label: "Frame" });
      T = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: pe.label,
        currentIcon: pe.icon || null,
        items: [{
          id: String(s.id || ""),
          label: pe.label,
          icon: pe.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const pe = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? rr().forEach((Te, je) => {
        var Ct, lt;
        if (!Te) return;
        const Je = $t(Te) ? String(Te.id || Xr) : String(((lt = (Ct = _.assets) == null ? void 0 : Ct[Te.asset_id]) == null ? void 0 : lt.name) || Te.asset_id || Te.id), He = `${je + 1}. ${Je}${$t(Te) && gi(Te) ? " (hidden)" : ""}`, rt = Ws({ item: Te, label: He, kind: "image" });
        pe.push({ id: Te.id, label: rt.label, icon: rt.icon, item: Te, kind: "image" });
      }) : cu().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const je = Ws(Te);
        pe.push({ id: Te.item.id, label: je.label, icon: je.icon, item: Te.item, kind: Te.kind });
      });
      const De = (g == null ? void 0 : g.id) || "", Ee = pe.find((Te) => Te.id === De) || pe[0];
      T = {
        label: "Selection",
        open: !1,
        disabled: pe.length <= 1,
        currentLabel: Ee.label,
        currentIcon: Ee.icon || null,
        items: pe.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === De
        }))
      };
    }
    const N = [], E = (pe, De, Ee, Te, je) => {
      const Je = G(Number(v[pe] || 0), Ee, Te);
      N.push({
        key: pe,
        label: De,
        min: Ee,
        max: Te,
        step: je,
        value: Je,
        displayValue: va(Je),
        fillPct: G((Je - Ee) / Math.max(1e-6, Te - Ee) * 100, 0, 100),
        enabled: S && !i
      });
    }, L = [];
    h.length > 1 ? (L.push(`Selected objects: ${h.length}`), L.push("Multi-selection supports z-order and delete.")) : (E("yaw_deg", "Yaw", -180, 180, 0.1), E("pitch_deg", "Pitch", -90, 90, 0.1), E("hFOV_deg", "H FOV", 1, 179, 0.1), E("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? E("rot_deg", "Rotation", -180, 180, 0.1) : E("roll_deg", "Roll", -180, 180, 0.1));
    const Q = Array.isArray((Ye = (ze = _ == null ? void 0 : _.painting) == null ? void 0 : ze.paint) == null ? void 0 : Ye.strokes) ? _.painting.paint.strokes.length : 0, B = Array.isArray((te = (ye = _ == null ? void 0 : _.painting) == null ? void 0 : ye.mask) == null ? void 0 : te.strokes) ? _.painting.mask.strokes.length : 0, X = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((pe) => String((pe == null ? void 0 : pe.name) || "")) : [], se = hS(
      e,
      X.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), he = !!String((se == null ? void 0 : se.src) || "").trim() || fu("pano_input_images").length > 0, le = Array.isArray(rr()) && rr().length > 0 || Q > 0, _e = B > 0, Re = [
      { key: "mask", label: "Mask", icon: Fe.circle_dashed_tool, visible: !!d.showMask, enabled: _e },
      { key: "objects", label: "Paint / Images", icon: Fe.image, visible: !!d.showObjects, enabled: le },
      { key: "panorama", label: "Panorama", icon: Fe.globe, visible: !!d.showPanorama, enabled: he }
    ].map((pe) => ({
      ...pe,
      ariaLabel: `Toggle ${pe.label.toLowerCase()}`,
      tip: pe.visible ? "Hide" : "Show"
    }));
    k.sidePanel = g_({
      coverage: _.coverage,
      readOnly: i,
      selectionPicker: T,
      enabled: S,
      selectedKind: m,
      selectedItems: h,
      params: N,
      notes: L,
      visibilityRows: Re,
      uiSettings: r,
      normalizeCoverageValue: Bt
    });
  }
  function ua(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Hu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !ua(r)) return;
    const o = Uo("asset"), s = Wd(e, `add:${o}`, async () => {
      const l = URL.createObjectURL(r);
      try {
        const h = await new Promise((S, T) => {
          const N = new Image();
          N.onload = () => S(N), N.onerror = () => T(new Error("image load failed")), N.src = l;
        });
        Oe.set(o, h);
        const m = Uo("st");
        _.stickers.push({
          id: m,
          asset_id: o,
          yaw_deg: d.viewYaw,
          pitch_deg: d.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ur(30, Number(h.naturalWidth || h.width || 1), Number(h.naturalHeight || h.height || 1)),
          rot_deg: 0,
          z_index: uu()
        }), pi(_.stickers[_.stickers.length - 1]), ul(), et(), Ve(), We(), ge();
        const b = await el(r, String(r.name || o));
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length) return;
        _.assets[o] = b, xi(), tt(), Ve(), We(), ge();
      } catch (h) {
        delete _.assets[o], Oe.delete(o);
        const m = Array.isArray(_.stickers) ? _.stickers : [], b = m.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === o);
        throw b.length && (_.stickers = m.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== o), b.some((g) => {
          var v;
          return String((g == null ? void 0 : g.id) || "") === String(((v = d.selection) == null ? void 0 : v.id) || "");
        }) && pi(null), Ve(), We(), ge(), tt()), h;
      } finally {
        URL.revokeObjectURL(l);
      }
    });
    try {
      await s;
    } catch {
    }
  }
  function Rg() {
    var r;
    i || t !== "stickers" && t !== "cutout" || (r = q == null ? void 0 : q.openImagePicker) == null || r.call(q, "add");
  }
  async function Fg(r) {
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = xt();
    if (!o || !yt(o) || $t(o) || !ua(r)) return;
    const s = String(o.id || ""), l = Uo("asset"), h = Wd(e, `replace:${s}:${l}`, async () => {
      var N;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((E) => String((E == null ? void 0 : E.id) || "") === s) || null;
      if (!m || !yt(m) || $t(m)) return;
      const b = String(m.asset_id || ""), g = b ? qt(((N = _.assets) == null ? void 0 : N[b]) || null) : null, v = Number(m.vFOV_deg || 0), S = m.crop && typeof m.crop == "object" ? { ...m.crop } : null, T = URL.createObjectURL(r);
      try {
        const E = await new Promise((B, X) => {
          const se = new Image();
          se.onload = () => B(se), se.onerror = () => X(new Error("image load failed")), se.src = T;
        });
        Oe.set(l, E), m.asset_id = l, m.vFOV_deg = Ur(
          Number(m.hFOV_deg || 30),
          Number(E.naturalWidth || E.width || 1),
          Number(E.naturalHeight || E.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ut(), et(), Ve(), We(), ge();
        const L = await el(r, String(r.name || l)), Q = (Array.isArray(_.stickers) ? _.stickers : []).find((B) => String((B == null ? void 0 : B.id) || "") === s) || null;
        if (!Q || String(Q.asset_id || "") !== l) return;
        _.assets[l] = L, xi(), tt(), Ve(), We(), ge();
      } catch (E) {
        delete _.assets[l], Oe.delete(l);
        const L = (Array.isArray(_.stickers) ? _.stickers : []).find((Q) => String((Q == null ? void 0 : Q.id) || "") === s) || null;
        throw L && String(L.asset_id || "") === l && (b && g && (_.assets[b] = g), L.asset_id = b, L.vFOV_deg = v, L.crop = S ? { ...S } : null), Ut(), tt(), Ve(), We(), ge(), E;
      } finally {
        URL.revokeObjectURL(T);
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function Lg() {
    var o;
    if (i) return;
    const r = xt();
    !r || !yt(r) || $t(r) || (o = q == null ? void 0 : q.openImagePicker) == null || o.call(q, "replace");
  }
  async function zg() {
    if (i || t !== "stickers") return;
    const r = _.assets && typeof _.assets == "object" ? _.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const b = await fetch(m).then((N) => N.blob()), g = String(b.type || "image/png").split("/")[1] || "png", v = String((h == null ? void 0 : h.name) || `${l}.${g}`), S = new File([b], v, { type: b.type || "image/png" }), T = await el(S, v);
        _.assets[l] = {
          ...T,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (tt(), ge());
  }
  function $g() {
    if (i || t !== "cutout") return;
    const r = Le();
    if (r) {
      pi(r), d.mode = "pano", $s(
        Vt(Number(r.yaw_deg || 0)),
        G(Number(r.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ve(), We(), ge({ cause: "cutout_frame" });
      return;
    }
    const o = Hr(), s = Nr(o), l = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (I == null ? void 0 : I.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (I == null ? void 0 : I.height) || 1
    )), m = Math.max(0.1, l / h), b = G(Number(d.viewFov || 90), 1, 179), g = G(Math.min(42, b * 0.42), 8, 96), v = G(Sn * (2 * Math.atan(Math.tan(g * Rt * 0.5) / Math.max(0.1, m))), 6, 72), S = Om({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Vt(Number(d.viewYaw || 0)),
      pitch_deg: G(Number(d.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: v,
      locked: !1
    });
    _.shots = [S], pi(S), ul(), d.mode = "pano", et(), tt(), Ve(), We(), ge({ cause: "cutout_frame" });
  }
  function jg() {
    i || t === "cutout" && (_.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, _.active.selected_shot_id = null, et(), tt(), Ve(), ge());
  }
  function Vg() {
    const r = Array.isArray(_.stickers) ? _.stickers : [], o = [];
    for (const s of r)
      $t(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function Bu(r, o, s = "Clear") {
    return new Promise((l) => {
      k.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function Ug() {
    var s, l;
    if (i || !await Bu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    _.painting = Ea(null), Tn();
    const o = Vg();
    t === "stickers" ? (_.stickers = o, _.assets = {}, d.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], _.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, xi()) : (_.stickers = o, _.assets = {}, _.shots = [], d.selectedId = null, d.selectedIds = [], _.active.selected_sticker_id = null, _.active.selected_shot_id = null, d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, xi()), et(), tt(), Ve(), We(), ge();
  }
  async function Hg(r) {
    var m, b, g, v;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = Ni(o);
    if (!(!l.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((b = d.interaction) == null ? void 0 : b.layerKind) === o) || !await Bu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((v = d.interaction) == null ? void 0 : v.layerKind) === o) {
        const S = gn();
        S && d.paintEngine.cancelActiveStroke(S), d.interaction = null;
      }
      l.length = 0, _.painting.raster_objects = ln().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (Kt().length = 0), Tn(), et(), tt(), Ve(), We(), cn(), ge();
    }
  }
  function Bg() {
    if (i) return;
    const r = xt();
    if (!r || !yt(r) || $t(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Uo("st"), o.yaw_deg = Vt((o.yaw_deg || 0) + 8), o.z_index = uu(), _.stickers.push(o), _.active.selected_sticker_id = o.id, d.selectedId = o.id, d.selectedIds = [o.id], Ut(), et(), tt(), We(), Ve(), ge();
  }
  function Gu() {
    var s, l, h, m, b, g;
    if (i) return;
    const r = An(), o = xt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const v = new Set(r.filter((N) => Dt(N)).map((N) => String(N.actionGroupId || N.id || ""))), S = new Set(r.filter((N) => Wt(N)).map((N) => zt(N.rasterObjectId || N.id || ""))), T = new Set(r.filter(yt).map((N) => String(N.id || "")));
        v.size > 0 && (_.painting.paint.strokes = (Array.isArray((l = (s = _.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? _.painting.paint.strokes : []).filter((N) => !v.has(String((N == null ? void 0 : N.actionGroupId) || ""))), _.painting.groups = Kt().filter((N) => !v.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), Tn()), S.size > 0 && (_.painting.raster_objects = ln().filter((N) => !S.has(String((N == null ? void 0 : N.id) || ""))), Mi()), T.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((N) => T.has(String((N == null ? void 0 : N.id) || "")) ? $t(N) ? (gi(N) || (N.visible = !1), !0) : !1 : !0), xi(), Ut()), d.selectedId = null, d.selectedIds = [], et(), tt(), Ve(), We(), ge();
        return;
      }
      if (Dt(o)) {
        const v = String(o.actionGroupId || o.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== v), _.painting.groups = Kt().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== v), Tn(), d.selectedId = null, d.selectedIds = [], et(), tt(), Ve(), We(), ge();
        return;
      }
      if (Wt(o)) {
        const v = zt(o.rasterObjectId || o.id || "");
        _.painting.raster_objects = ln().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== v), Mi(), d.selectedId = null, d.selectedIds = [], et(), tt(), Ve(), We(), ge();
        return;
      }
      if (t === "stickers" || yt(o)) {
        if ($t(o)) {
          if (gi(o)) return;
          o.visible = !1, Ut(), et(), tt(), Ve(), We(), ge();
          return;
        }
        _.stickers = _.stickers.filter((v) => v.id !== o.id), xi(), Ut(), d.selectedId = ((b = _.stickers[0]) == null ? void 0 : b.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], _.active.selected_sticker_id = ((g = _.stickers[0]) == null ? void 0 : g.id) || null, et(), tt(), Ve(), We(), ge();
        return;
      }
      jg();
    }
  }
  function Ku(r, o) {
    const s = we.frameSafeRect;
    if (!r || !s || d.mode !== "frame") return !1;
    const l = Hl * Vl(s, r), h = X1(q1(s, o), l);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function Wu(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [T, N] = g.split(":").map((E) => Number(E));
        if (Number.isFinite(T) && Number.isFinite(N)) return T >= N;
      }
      const v = Number(r.hFOV_deg || 64), S = Number(r.vFOV_deg || 40);
      return Math.abs(v - S) > 1e-6 ? v >= S : Zo(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const b = h / m;
    if (!Ku(r, b)) {
      const g = G(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = zd(g, b);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function Yu(r) {
    if (!r) return;
    const o = String(r.aspect_id || "").trim(), s = Rs(r), l = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, l);
    if (!Ku(r, h)) {
      const m = G(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = zd(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, b] = o.split(":");
      r.aspect_id = `${b}:${m}`;
    } else
      r.aspect_id = Qr(r);
  }
  function qu() {
    di().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Gg() {
    if (i) return;
    const r = An();
    if (!xt() || r.length === 0) return;
    qu();
    const s = di(), l = new Set(r.map((g) => yt(g) ? `sticker:${String(g.id || "")}` : Wt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var S, T;
      const v = g.type === "sticker" ? `sticker:${String(((S = g.item) == null ? void 0 : S.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(v) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, v) => {
      g.type === "sticker" && g.item && (g.item.z_index = v), g.type === "strokeGroup" && g.item && (g.item.z_index = v), g.type === "rasterObject" && g.item && (g.item.z_index = v);
    }), Ut(), et(), tt(), We(), ge();
  }
  function Kg() {
    if (i) return;
    const r = An();
    if (!xt() || r.length === 0) return;
    qu();
    const s = di(), l = new Set(r.map((g) => yt(g) ? `sticker:${String(g.id || "")}` : Wt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var S, T;
      const v = g.type === "sticker" ? `sticker:${String(((S = g.item) == null ? void 0 : S.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((T = g.item) == null ? void 0 : T.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(v) ? h.push(g) : m.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((g, v) => {
      g.type === "sticker" && g.item && (g.item.z_index = v), g.type === "strokeGroup" && g.item && (g.item.z_index = v), g.type === "rasterObject" && g.item && (g.item.z_index = v);
    }), Ut(), et(), tt(), We(), ge();
  }
  function Wg() {
    i || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = A(Number(_.output_preset || 2048))), p && (_.coverage = Bt(p.value)), y && (_.bg_color = String(y.value || _.bg_color || "#00ff00")), un(), e.setDirtyCanvas(!0, !0));
  }
  function un() {
    var o;
    if (i) return;
    _.coverage = Bt(_.coverage);
    const r = JSON.stringify(_);
    w && (w.value = r, (o = w.callback) == null || o.call(w, r));
  }
  const Xu = () => un();
  i || (e.__panoFlushStateBeforeQueue = Xu);
  function uo() {
    _.ui_settings = MS(_.ui_settings), i || un();
  }
  function tt() {
    var r;
    i || (un(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Yg() {
    i || Cp() && Mu().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function qg(r = {}) {
    var l, h, m, b, g, v, S, T, N, E;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || h.call(l), (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (E = (N = (T = On) == null ? void 0 : T.canvas) == null ? void 0 : N.setDirty) == null || E.call(N, !0, !0));
  }
  function ul() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", cn(), Ve());
  }
  function Br(r) {
    const o = I.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * I.width,
      y: (r.clientY - o.top) / o.height * I.height
    };
  }
  function fo(r) {
    const o = I.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function Ju() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function Le() {
    if (t !== "cutout") return null;
    const r = Array.isArray(_.shots) ? _.shots : [];
    if (!r.length) return null;
    const o = String(_.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Xg() {
    var L, Q, B, X, se;
    if (!I) return null;
    const r = (L = I.getBoundingClientRect) == null ? void 0 : L.call(I), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? I.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? I.height / r.height : 1;
    we.frameCanvasScale = Math.min(o, s);
    let l = 24, h = 24;
    const m = Math.max(l + 1, I.width - 24);
    let b = Math.max(h + 1, I.height - 24);
    const g = (Q = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : Q.call(pt), v = (B = kt == null ? void 0 : kt.getBoundingClientRect) == null ? void 0 : B.call(kt);
    let S = 24;
    g && r && g.width > 0 && g.height > 0 && (S = Math.max(S, (g.right - r.left) * o + qd)), v && r && v.width > 0 && v.height > 0 && ((X = k.frameRail) == null ? void 0 : X.visible) === !0 && (S = Math.max(S, (r.right - v.left) * o + qd)), l = Math.max(l, S);
    const T = Math.min(m, I.width - S);
    let N = 24;
    const E = (se = Qe == null ? void 0 : Qe.getBoundingClientRect) == null ? void 0 : se.call(Qe);
    if (E && r && E.width > 0 && E.height > 0 && (N = Math.max(N, (E.bottom - r.top) * s + Bl)), [en, mn].forEach((he) => {
      var Re;
      if (!he || !r) return;
      const le = getComputedStyle(he);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const _e = (Re = he.getBoundingClientRect) == null ? void 0 : Re.call(he);
      !_e || _e.width <= 0 || _e.height <= 0 || (N = Math.max(N, (r.bottom - _e.top) * s + Bl));
    }), $e && r) {
      const he = getComputedStyle($e);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (N = Math.max(N, (iS + Bl) * s));
    }
    return h = Math.max(h, N), b = Math.max(h + 1, Math.min(b, I.height - N)), {
      x: l,
      y: h,
      w: Math.max(1, T - l),
      h: Math.max(1, b - h)
    };
  }
  function fl(r = Le()) {
    if (!r || !I) return null;
    const o = we.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return J1(o, r, Hl * Vl(o, r));
  }
  function Ot(r = Le()) {
    const o = fl(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function dl() {
    return t === "cutout" && !!Le();
  }
  function In(r, o = performance.now()) {
    if (d.mode === "unwrap") {
      const m = Mr(), b = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (b % 1 + 1) % 1,
        v: G(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Qs(r.x, r.y), { lon: l, lat: h } = nl(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Cn(r, o, s = performance.now()) {
    const l = Ot(o);
    if (!l) return null;
    const h = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = ol(o, h);
    if (!m) return null;
    const { lon: b, lat: g } = nl(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (b / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Jg(r, o) {
    const s = Le();
    if (!s) return !1;
    const l = Number(o) < 1, h = Q1(s, 1 / Number(o));
    if (!h) return !1;
    if (l) {
      const m = Hl * Vl(
        we.frameSafeRect || { w: I.width, h: I.height },
        h
      ), b = Ld({ width: I.width, height: I.height }, m);
      if (b.halfW < I.width * 0.5 - 1e-6 || b.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, et(), tt(), Ve());
    }, 180), Ve(), !0;
  }
  function Zg() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, et(), tt(), Ve(), !0) : !1;
  }
  function fa() {
    const r = d.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Gr(), d.interaction = null, _i(), Sr(), Ve(), dt(d.pointerPos), ge({ localOnly: !0 }), !0;
  }
  function Qg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function Ar(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? cr : fn[o] ? o : d.activeBrushPresetId || cr;
  }
  function Zu() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (Ju() || dl());
  }
  function Qu() {
    var r;
    return Zu() && ((r = d.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function ho(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, b = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - l) > 0.01;
    return d.pointerPos = { x: s, y: l, inside: h }, b;
  }
  function e0() {
    var T, N;
    if (!Qu()) return null;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool, s = Ar(o), l = fn[s] || fn[cr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : bn(d.paintColor), v = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : G(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), S = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : G(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: b,
      fillStyle: Hn(g, v),
      strokeStyle: Hn(g, S),
      x: Number(((T = d.pointerPos) == null ? void 0 : T.x) || 0),
      y: Number(((N = d.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: b,
      hotspotY: b
    };
  }
  function t0() {
    var E, L, Q;
    const r = e0();
    if (!be) return;
    if (!r) {
      be.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, l = "999px", h = 0, m = r.fillStyle, b = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let T = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = vs, s = vs, l = "0", b = "0", g = "none", T = sS, N = lS, m = _S(r.fillStyle, S, v);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((E = r.preset) == null ? void 0 : E.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((Q = (L = r.preset) == null ? void 0 : L.angle) == null ? void 0 : Q.value) || 0) * Sn;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    be.style.display = "block", be.style.width = `${Math.round(o)}px`, be.style.height = `${Math.round(s)}px`, be.style.borderRadius = l, be.style.border = b, be.style.boxShadow = g, be.style.background = m, be.style.backgroundRepeat = "no-repeat", be.style.backgroundPosition = "center", be.style.backgroundSize = "contain", be.style.transform = `translate(${Math.round(r.x - T)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function n0() {
    var he;
    if (!Z || !me) return;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool;
    if (o === "lasso_fill") return;
    const s = Ar(o), l = fn[s] || fn[cr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(6, m * 0.5), g = o === "eraser", v = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : bn(d.paintColor), S = r === "mask" ? Hn(v, 0.22) : g ? "rgba(255,255,255,0.14)" : Hn(v, G(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), T = r === "mask" ? Hn(v, 0.96) : g ? "rgba(255,255,255,0.72)" : Hn(v, G(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let N = b * 2, E = b * 2, L = "999px", Q = 0, B = S;
    const X = "rgba(222, 222, 222, 0.72)", se = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const le = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, b * 2 * le), E = Math.max(10, b * 2), L = `${Math.min(8, E * 0.42)}px`, Q = Number(((he = l == null ? void 0 : l.angle) == null ? void 0 : he.value) || 0) * Sn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${T} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, b * 1.8), E = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${T} 43%, ${T} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    me.style.width = `${Math.round(N)}px`, me.style.height = `${Math.round(E)}px`, me.style.borderRadius = L, me.style.background = B, me.style.border = `1px solid ${X}`, me.style.boxShadow = `0 0 0 1px ${se}`, me.style.transform = `rotate(${Q}deg)`, ne && (clearTimeout(ne), ne = 0), Z.classList.remove("fade-out"), Z.classList.add("show");
  }
  function mo() {
    !Z || !Z.classList.contains("show") || (Z.classList.add("fade-out"), ne && clearTimeout(ne), ne = window.setTimeout(() => {
      Z.classList.remove("show", "fade-out"), ne = 0;
    }, 180));
  }
  function ef(r, o, s, l) {
    const h = Ar(o), m = fn[h] || fn[cr], b = d.brushSizes[h] ?? 10, g = Math.max(1, b) * Math.max(0.1, m.sizeScale ?? 1), v = Qg(l, g), S = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), T = {
      id: Oi(r),
      actionGroupId: Oi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((N) => ({ ...N })),
        points: S.map((N) => ({ ...N }))
      }
    };
    return Dd(T, m), Number(m.aspect ?? 1), Number(T.aspect ?? 1), String(T.stampKind || ""), Number(T.size || 0), String(T.radiusModel || ""), Number(T.radiusValue || 0), { ...T.targetSpace }, T;
  }
  function tf(r, o, s, l) {
    const h = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = Ar(o), b = fn[m] || fn[cr], g = {
      id: Oi(r),
      actionGroupId: Oi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((v) => ({ ...v }))
      }
    };
    return Dd(g, b), Number(b.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function Ni(r) {
    const o = _.painting || (_.painting = Ea(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function r0(r, o, s = performance.now()) {
    let l;
    if (d.mode === "frame") {
      const S = Le();
      if (!S || (l = Cn(o, S, s), !l)) return !1;
    } else
      l = In(o, s);
    if (!l) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, b = h[h.length - 1];
    if (b) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(b.u ?? b.x ?? 0)), T = Math.abs(Number(l.v ?? l.y ?? 0) - Number(b.v ?? b.y ?? 0));
      if (S < 15e-4 && T < 15e-4) return !1;
    }
    const g = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), m.push({ ...g });
    const v = gn();
    if (v) {
      const S = d.paintEngine.ensureTarget(v);
      d.paintEngine.appendStrokePoint(S, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function i0(r, o, s = performance.now()) {
    var b, g;
    let l;
    if (d.mode === "frame") {
      const v = Le();
      if (!v) return !1;
      l = Cn(o, v, s);
    } else
      l = In(o, s);
    const h = (g = (b = r == null ? void 0 : r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (v < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function a0(r) {
    var le, _e, Re, ze, Ye;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    lo();
    const s = gn(), l = oa(s.width, s.height);
    if (!zu(l, o, { w: s.width, h: s.height })) return !1;
    const h = ((_e = (le = l.ctx) == null ? void 0 : le.getImageData(0, 0, s.width, s.height)) == null ? void 0 : _e.data) || null;
    if (!h) return !1;
    const m = new Map(Kt().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), b = [], g = [], v = [...ln().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let S = !1, T = di().reduce((ye, te) => Math.max(ye, Number((te == null ? void 0 : te.z_index) || 0)), -1) + 1;
    function N(ye, te, pe, De = 8) {
      let Ee = te, Te = pe, je = -1, Je = -1;
      for (let He = 0; He < pe; He += 1)
        for (let rt = 0; rt < te; rt += 1)
          ye[(He * te + rt) * 4 + 3] <= De || (rt < Ee && (Ee = rt), He < Te && (Te = He), rt > je && (je = rt), He > Je && (Je = He));
      return je < Ee || Je < Te ? null : { minX: Ee, minY: Te, maxX: je, maxY: Je };
    }
    const E = N(h, s.width, s.height, 8);
    if (!E) return !1;
    function L(ye, te) {
      return !ye || !te ? !1 : !(ye.maxX < te.minX || te.maxX < ye.minX || ye.maxY < te.minY || te.maxY < ye.minY);
    }
    function Q(ye, te) {
      const pe = wr((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", te);
      if (!pe) return null;
      const De = pe.centerUv.u - pe.halfW, Ee = pe.centerUv.u + pe.halfW, Te = pe.centerUv.v - pe.halfH, je = pe.centerUv.v + pe.halfH, Je = s.width, He = s.height;
      return {
        minX: Math.floor((De % 1 + 1) % 1 * Je),
        maxX: Math.ceil((Ee % 1 + 1) % 1 * Je),
        minY: Math.floor(G(Te, 0, 1) * He),
        maxY: Math.ceil(G(je, 0, 1) * He),
        wraps: Ee - De >= 1 || De < 0 || Ee > 1
      };
    }
    function B(ye) {
      const te = (ye == null ? void 0 : ye.bbox) || null;
      if (!te) return null;
      const pe = (ye == null ? void 0 : ye.transform) || {}, De = s.width, Ee = s.height, Te = Number(te.u0 || 0) + Number(pe.du || 0), je = Number(te.u1 || 0) + Number(pe.du || 0), Je = Number(te.v0 || 0) + Number(pe.dv || 0), He = Number(te.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((Te % 1 + 1) % 1 * De),
        maxX: Math.ceil((je % 1 + 1) % 1 * De),
        minY: Math.floor(G(Je, 0, 1) * Ee),
        maxY: Math.ceil(G(He, 0, 1) * Ee),
        wraps: je - Te >= 1 || Te < 0 || je > 1
      };
    }
    function X(ye) {
      return ye ? ye.wraps ? L(E, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || L(E, { minX: ye.minX, maxX: s.width - 1, minY: ye.minY, maxY: ye.maxY }) : L(E, ye) : !0;
    }
    function se(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const te = oa(s.width, s.height, { readback: !0 });
      te.ctx.drawImage(ye, 0, 0);
      const pe = te.ctx.getImageData(0, 0, s.width, s.height);
      te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(l.canvas, 0, 0), te.ctx.restore();
      const De = te.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ee = 0; Ee < s.width * s.height; Ee += 1) {
        if (h[Ee * 4 + 3] <= 8) continue;
        const je = pe.data[Ee * 4 + 3], Je = De.data[Ee * 4 + 3];
        if (je > Je)
          return { touched: !0, canvas: te.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(ye, te, pe) {
      const De = Number(pe == null ? void 0 : pe.z_index), Ee = vg(ye, te, pe).map((Te, je) => ({
        ...Te,
        z_index: Number.isFinite(De) ? De + je * 1e-3 : T + je * 1e-3
      }));
      return Ee.length && (T = Math.max(T, ...Ee.map((Te) => Number((Te == null ? void 0 : Te.z_index) || 0))) + 1), Ee;
    }
    for (const ye of Kt()) {
      const te = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!te) continue;
      const pe = Pn(te, "paint");
      if (!X(Q(ye, pe))) {
        g.push(ye), b.push(...pe);
        continue;
      }
      const De = ((ze = (Re = d.paintEngine) == null ? void 0 : Re.getGroupTarget) == null ? void 0 : ze.call(Re, te)) || null, Ee = ((Ye = De == null ? void 0 : De.committedPaint) == null ? void 0 : Ye.canvas) || null;
      if (!Ee) {
        g.push(ye), b.push(...pe);
        continue;
      }
      const Te = se(Ee);
      if (!Te.touched || !Te.canvas) {
        g.push(ye), b.push(...pe);
        continue;
      }
      S = !0;
      const je = he(Te.canvas, "paint", m.get(te) || ye || {});
      v.push(...je);
    }
    for (const ye of ln().filter((te) => String((te == null ? void 0 : te.layerKind) || "paint") === "paint")) {
      if (!X(B(ye))) {
        v.push(ye);
        continue;
      }
      const te = wu(ye, null);
      if (!te) {
        v.push(ye);
        continue;
      }
      const pe = se(te);
      if (!pe.touched || !pe.canvas) {
        v.push(ye);
        continue;
      }
      S = !0;
      const De = he(pe.canvas, "paint", ye);
      v.push(...De);
    }
    return S ? (_.painting.paint.strokes = b, _.painting.groups = g.sort((ye, te) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0)), _.painting.raster_objects = v.sort((ye, te) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((te == null ? void 0 : te.z_index) || 0)), ra({ preservePanelValues: !1 }), !0) : !1;
  }
  function o0(r) {
    var b, g, v, S, T;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.rawPoints) || ((S = (v = r.stroke) == null ? void 0 : v.geometry) == null ? void 0 : S.points) || []).length >= 1) {
      hl(r);
      const N = gn();
      N && (String(((T = r.stroke) == null ? void 0 : T.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(N) : d.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = ef(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = gn();
    m && d.paintEngine.beginStroke(h, m);
  }
  function s0(r) {
    var b, g;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      hl(r);
      const v = gn();
      v && d.paintEngine.commitActiveStroke(r.stroke, v), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = tf(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = gn();
    m && d.paintEngine.beginStroke(h, m);
  }
  function hl(r) {
    var m, b, g, v;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((b = r == null ? void 0 : r.stroke) == null ? void 0 : b.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = sl(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), a0(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && ru((g = r.stroke) == null ? void 0 : g.actionGroupId), Ni(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = sl(h, r.stroke.targetSpace, !0), l && ru((v = r.stroke) == null ? void 0 : v.actionGroupId), Ni(r.layerKind).push(r.stroke), !0);
  }
  function nf(r) {
    var s;
    if (t === "cutout" && d.mode === "frame") {
      const l = Le(), h = Ot(l);
      if (!l || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const b = Cn(r, l, performance.now()), g = b ? wi(b) : null;
      if (g)
        for (const S of al()) {
          if (!yt(S)) continue;
          const T = la(S, g);
          if (T && Number(T.x) >= 0 && Number(T.x) <= 1 && Number(T.y) >= 0 && Number(T.y) <= 1) {
            const N = jt(S);
            if (N != null && N.visible) return { item: S, geom: N };
          }
        }
      const v = Us(!1).slice().sort((S, T) => Number((T == null ? void 0 : T.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of v) {
        if (S.type === "strokeGroup") {
          const E = mi(ea("paint", S.actionGroupId || S.id || ""));
          if (!E) continue;
          const L = jt(E);
          if (!(L != null && L.visible)) continue;
          const Q = Array.isArray(L.strokePaths) ? L.strokePaths : [];
          for (const B of Q) {
            const X = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!X.length) continue;
            if (B.closed && X.length >= 3 && ur(r, X)) return { item: E, geom: L };
            const se = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < X.length - 1; he += 1)
              if (Wl(r, X[he], X[he + 1]) <= se * se) return { item: E, geom: L };
            if (X.length === 1 && Ir(r, X[0]) <= se * se) return { item: E, geom: L };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const E = hi(ta(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!E) continue;
          const L = jt(E);
          if (xu(E, L, r, b)) return { item: E, geom: L };
          continue;
        }
        const T = S.item;
        if (!T || !yt(T) || !g) continue;
        const N = la(T, g);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const E = jt(T);
          if (E != null && E.visible) return { item: T, geom: E };
        }
      }
      return null;
    }
    const o = [
      ...Us(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? mi(ea("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? hi(ta(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? al().filter((l) => pn(l)) : []
    ];
    for (const l of o) {
      if (Dt(l)) {
        const m = jt(l);
        if (!(m != null && m.visible)) continue;
        const b = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of b) {
          const v = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!v.length) continue;
          if (g.closed && v.length >= 3 && ur(r, v)) return { item: l, geom: m };
          const S = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let T = 0; T < v.length - 1; T += 1)
            if (Wl(r, v[T], v[T + 1]) <= S * S) return { item: l, geom: m };
          if (v.length === 1 && Ir(r, v[0]) <= S * S) return { item: l, geom: m };
        }
        continue;
      }
      if (Wt(l)) {
        const m = jt(l);
        if (!(m != null && m.visible)) continue;
        if (xu(l, m, r)) return { item: l, geom: m };
        continue;
      }
      const h = jt(l);
      if (h.visible && ur(r, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function ml(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((m) => Ir(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], b = m.x - r.center.x, g = m.y - r.center.y, v = b * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const b = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && b.length >= 3 && ur(o, b)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < b.length - 1; v += 1)
          if (Wl(o, b[v], b[v + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return ur(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((h) => Ir(h, o) <= 121);
      if (l >= 0) {
        const h = r.corners[l], m = h.x - r.center.x, b = h.y - r.center.y, g = m * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: g };
      }
      return ur(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((h) => Ir(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => Ir(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], h = l.x - r.center.x, m = l.y - r.center.y, b = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: b };
    }
    return Ir(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : ur(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function rf(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function l0(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function c0(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => l0(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!ur({ x: s, y: l }, o.corners);
  }
  function dt(r) {
    if (t0(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Xe("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" || d.interaction.kind === "roll_frame" ? Xe("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Xe("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Xe(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Xe("grabbing") : Xe("default");
      return;
    }
    if (Qu()) {
      Xe("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.altModifier && !i) {
        Xe(rS);
        return;
      }
      if (d.primaryTool !== "cursor") {
        Xe("default");
        return;
      }
      Xe("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      Xe("default");
      return;
    }
    const o = xt(), s = o ? jt(o) : null, l = o ? ir(o) : !1, h = l ? { kind: "none", cursor: "default" } : ml(s, r);
    if (!l && h.kind !== "none") {
      Xe(h.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && nf(r)) {
      Xe("default");
      return;
    }
    Xe(d.mode === "pano" ? "grab" : "default");
  }
  function We() {
    var v, S;
    if (!on) return;
    if (d.mode === "frame") {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = xt(), o = An();
    if (!r && o.length === 0 || d.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Za(), l = b_({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Gs(o) : jt(r),
      allLocked: Ks(o),
      selectedLocked: ir(r),
      activeAspect: Ii(r),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: $t,
      isStickerHidden: gi,
      canRestoreSelectedToInitial: fp,
      iconSet: Fe
    });
    if (!l.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (T, N, { requireFitsBelow: E = !0 } = {}) => {
      var _e, Re, ze;
      const Q = Number((_e = l.anchor) == null ? void 0 : _e.minX), B = Number((Re = l.anchor) == null ? void 0 : Re.maxX), X = Number((ze = l.anchor) == null ? void 0 : ze.maxY);
      if (![Q, B, X].every(Number.isFinite)) return null;
      const se = Math.max(14, I.width - T - 14), he = G((Q + B) * 0.5 - T * 0.5, 14, se), le = X + 18;
      return !Number.isFinite(he) || !Number.isFinite(le) || E && le + N > I.height - 14 ? null : { left: he, top: le };
    }, m = Math.max(1, Number(((v = d.menuSize) == null ? void 0 : v.w) || 220)), b = Math.max(1, Number(((S = d.menuSize) == null ? void 0 : S.h) || 40)), g = h(m, b, { requireFitsBelow: !1 });
    if (!g) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    k.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: l.items
    }, requestAnimationFrame(() => {
      if (!on || k.selectionMenu.visible !== !0) return;
      const T = on.getBoundingClientRect(), N = Math.round(Number((T == null ? void 0 : T.width) || 0)) || 220, E = Math.round(Number((T == null ? void 0 : T.height) || 0)) || 40;
      d.menuSize = { w: N, h: E, measured: !0 };
      const L = h(N, E);
      if (!L) {
        k.selectionMenu.visible = !1;
        return;
      }
      k.selectionMenu.left = L.left, k.selectionMenu.top = L.top;
    });
  }
  function Gr() {
    nt.timer && (clearTimeout(nt.timer), nt.timer = 0), nt.target = null, k.tooltip.visible = !1;
  }
  function u0(r) {
    if (!Gt || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    k.tooltip.text = o, k.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var B, X;
      if (nt.target !== s || !Gt || !(s != null && s.isConnected)) return;
      const l = ie.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, b = 12, g = Math.round(Number(((B = Gt.getBoundingClientRect()) == null ? void 0 : B.width) || 0)) || 100, v = Math.round(Number(((X = Gt.getBoundingClientRect()) == null ? void 0 : X.height) || 0)) || 24, S = !!s.closest(".pano-floating-left"), T = !!s.closest(".pano-frame-rail"), N = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let E = "", L = h.left - l.left + h.width * 0.5 - g * 0.5, Q = h.top - l.top - v - b;
      if (S)
        E = "tool-rail", L = h.right - l.left + 10, Q = h.top - l.top + h.height * 0.5 - v * 0.5, L = G(L, m, Math.max(m, l.width - g - m)), Q = G(Q, m, Math.max(m, l.height - v - m));
      else if (T)
        E = "frame-rail", L = h.left - l.left - g - 10, Q = h.top - l.top + h.height * 0.5 - v * 0.5, L = G(L, m, Math.max(m, l.width - g - m)), Q = G(Q, m, Math.max(m, l.height - v - m));
      else if (N) {
        E = "footer";
        const se = s.closest(".pano-paint-footer"), he = se ? se.getBoundingClientRect() : h;
        L = he.left - l.left + he.width * 0.5 - g * 0.5, Q = he.bottom - l.top + 5, L = G(L, m, Math.max(m, l.width - g - m)), Q = Math.max(m, Q);
      }
      L = G(L, m, Math.max(m, l.width - g - m)), Q = Math.max(m, Q), k.tooltip.left = L, k.tooltip.top = Q, k.tooltip.variant = E, k.tooltip.visible = !0;
    });
  }
  const Ht = Ds({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (r) => {
      d.viewYaw = Vt(Number(r.yaw || 0)), d.viewPitch = G(Number(r.pitch || 0), -89.9, 89.9), d.viewFov = G(Number(r.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || I.clientWidth || 0)),
        h: Math.max(1, Number(r.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = _.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = _.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Mr,
    onInteraction: () => {
      we.backgroundDirty = !0, we.dirty = !0;
    }
  });
  function af(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += W1(o, r.lastAngle), r.lastAngle = o;
    const l = Y1(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = l, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((b) => b.key === "roll_deg");
    h && (h.value = l, h.displayValue = va(l), h.fillPct = (l + 180) / 360 * 100), Pr(), sf(r), ge({ localOnly: !0 });
  }
  const of = (r, o) => {
    const s = Br(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function sf(r) {
    var b, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    nt.timer && (clearTimeout(nt.timer), nt.timer = 0), nt.target = null;
    const o = Ot(r.shot), s = (b = I.getBoundingClientRect) == null ? void 0 : b.call(I), l = (g = ie.getBoundingClientRect) == null ? void 0 : g.call(ie);
    if (!o || !s || !l || I.width <= 0 || I.height <= 0) return;
    const h = s.width / I.width, m = s.height / I.height;
    k.tooltip.text = `${va(r.shot.roll_deg)}°`, k.tooltip.left = s.left - l.left + (o.x + o.w * 0.5) * h, k.tooltip.top = s.top - l.top + (o.y + o.h * 0.5) * m + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  Ge == null || Ge.addEventListener("pointerdown", (r) => {
    var m;
    if (r.button !== 0 || i || d.mode !== "frame") return;
    const o = Le();
    if (!o) return;
    const s = Ot(o);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = of(r, l);
    d.interaction = {
      kind: "roll_frame",
      shot: o,
      center: l,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(o.roll_deg ?? o.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = Ge.setPointerCapture) == null || m.call(Ge, r.pointerId), r.preventDefault(), Pr(), sf(d.interaction), ge({ localOnly: !0 });
  }), Ge == null || Ge.addEventListener("pointermove", (r) => {
    var o;
    ((o = d.interaction) == null ? void 0 : o.kind) !== "roll_frame" || d.interaction.source !== "knob" || af(
      d.interaction,
      of(r, d.interaction.center),
      r
    );
  });
  const f0 = () => {
    const r = d.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (et(), tt(), Ve()), d.interaction = null, Gr(), Sr(), Pr(), ge());
  };
  Ge == null || Ge.addEventListener("pointerup", f0), Ge == null || Ge.addEventListener("pointercancel", () => fa()), Ge == null || Ge.addEventListener("lostpointercapture", () => {
    var r;
    ((r = d.interaction) == null ? void 0 : r.source) === "knob" && fa();
  }), Ge == null || Ge.addEventListener("dblclick", (r) => {
    const o = d.mode === "frame" && !i ? Le() : null;
    !o || Math.abs(Number(o.roll_deg ?? o.rot_deg ?? 0)) <= 1e-9 || (o.roll_deg = 0, et(), tt(), Ve(), Pr(), ge(), r.preventDefault());
  }), I.onpointerdown = (r) => {
    const o = Br(r);
    if (ho(o, !0), d.viewTween = null, Ht.state.inertia.active = !1, Ht.state.inertia.vx = 0, Ht.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), d.mode === "frame") {
        const g = Le();
        if (!g || i) return;
        d.interaction = {
          kind: "pan_frame",
          shot: g,
          last: o,
          start: {
            yaw_deg: Number(g.yaw_deg || 0),
            pitch_deg: Number(g.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const g = d.mode === "unwrap" ? o : fo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Ht.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      dt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (d.mode === "frame" && r.altKey && !i) {
      const g = Le(), v = Ot(g);
      if (!g || !v) return;
      const S = { x: v.x + v.w * 0.5, y: v.y + v.h * 0.5 }, T = Math.atan2(o.y - S.y, o.x - S.x);
      d.interaction = {
        kind: "roll_frame",
        shot: g,
        center: S,
        lastAngle: T,
        accumulatedRad: 0,
        start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
        changed: !1,
        altStarted: !0
      }, I.setPointerCapture(r.pointerId), r.preventDefault(), Pr(), ge({ localOnly: !0 });
      return;
    }
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const g = Le();
      if (!g || i) return;
      d.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
        changed: !1
      }, dt(o), I.setPointerCapture(r.pointerId), r.preventDefault();
      return;
    }
    if (i) {
      if (d.mode === "pano") {
        const g = fo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Ht.startDrag(g.x, g.y, r.pointerId, performance.now()), dt(o), I.setPointerCapture(r.pointerId);
      }
      return;
    }
    if ($ && !$.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (Ju() || dl())) {
      const g = d.primaryTool === "mask" ? "mask" : "paint", v = d.primaryTool === "mask" ? d.maskTool : d.paintTool, S = d.mode === "frame" && dl() ? Le() : null, T = { kind: "ERP_GLOBAL" }, N = S ? Cn(o, S, performance.now()) : In(o, performance.now());
      if (!N) {
        dt(o);
        return;
      }
      d.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Oi("live"),
        stroke: v === "lasso_fill" ? tf(g, v, [N], T) : ef(g, v, [N], T)
      }, _i();
      const E = gn();
      if (E)
        if (d.paintEngine.beginStroke(d.interaction.stroke, E), d.interaction.kind === "paint_stroke") {
          const L = d.paintEngine.ensureTarget(E), Q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          d.paintEngine.appendStrokePoint(L, Q, B, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, E);
      dt(o), I.setPointerCapture(r.pointerId), ge();
      return;
    }
    const s = An(), l = xt(), h = s.length > 1 ? Gs(s) : l ? jt(l) : null;
    if (d.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      d.interaction = { kind: "marquee_select", start: o, current: o }, dt(o), I.setPointerCapture(r.pointerId), ge({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((v) => ir(v)) ? { kind: "none" } : ml(h, o)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((v) => yt(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var T, N;
              const S = jt(v);
              return S != null && S.visible ? { x: Number(((T = S.center) == null ? void 0 : T.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Dt(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: qt(Pn(v.actionGroupId, v.layerKind)),
            frameSnapshot: qt(wr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var T, N;
              const S = jt(v);
              return S != null && S.visible ? { x: Number(((T = S.center) == null ? void 0 : T.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Bs(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => Wt(v)).map((v) => ({
            id: zt(v.rasterObjectId || v.id || ""),
            snapshot: qt(ln().find((S) => String((S == null ? void 0 : S.id) || "") === zt(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var T, N;
              const S = jt(v);
              return S != null && S.visible ? { x: Number(((T = S.center) == null ? void 0 : T.x) || 0), y: Number(((N = S.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Pu(v)
          }))
        }, dt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const g = ir(l) ? { kind: "none" } : ml(h, o);
      if (g.kind === "scale") {
        d.interaction = Dt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: qt(Pn(l.actionGroupId, l.layerKind)),
          frameSnapshot: qt(wr(l.actionGroupId, l.layerKind)),
          cursor: g.cursor
        } : Wt(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: qt(ln().find((v) => String((v == null ? void 0 : v.id) || "") === zt(l.rasterObjectId || l.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor
        }, dt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        d.interaction = {
          kind: g.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, dt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        d.interaction = Dt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: qt(Pn(l.actionGroupId, l.layerKind)),
          frameSnapshot: qt(wr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, dt(o), I.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Dt(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = Le();
            return S ? Cn(o, S, performance.now()) : null;
          })() : In(o, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: qt(Pn(l.actionGroupId, l.layerKind)),
            frameSnapshot: qt(wr(l.actionGroupId, l.layerKind))
          }, dt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        if (Wt(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = Le();
            return S ? Cn(o, S, performance.now()) : null;
          })() : In(o, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: qt(ln().find((S) => String((S == null ? void 0 : S.id) || "") === zt(l.rasterObjectId || l.id || "")))
          }, dt(o), I.setPointerCapture(r.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, dt(o), I.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = nf(o);
    if (m) {
      const g = d.selectedId !== m.item.id;
      if (g && d.selectedId && (et(), un()), pi(m.item), t === "cutout" && g && (d.cutoutAspectOpen = !1), g && Ve(), We(), ge(), ir(m.item)) {
        dt(o);
        return;
      }
      d.interaction = {
        kind: Dt(m.item) ? "move_stroke_group" : Wt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Dt(m.item) || Wt(m.item) ? d.mode === "frame" ? (() => {
          const v = Le();
          return v ? Cn(o, v, performance.now()) : null;
        })() : In(o, performance.now()) : null,
        snapshot: Dt(m.item) ? qt(Pn(m.item.actionGroupId, m.item.layerKind)) : Wt(m.item) ? qt(ln().find((v) => String((v == null ? void 0 : v.id) || "") === zt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Dt(m.item) ? qt(wr(m.item.actionGroupId, m.item.layerKind)) : null
      }, dt(o), I.setPointerCapture(r.pointerId);
      return;
    }
    const b = !!d.selectedId;
    if (b && (et(), un()), ra(), b && Ve(), We(), ge(), d.mode === "pano") {
      const g = fo(r);
      d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Ht.startDrag(g.x, g.y, r.pointerId, performance.now()), dt(o), I.setPointerCapture(r.pointerId);
    }
  }, I.onpointermove = (r) => {
    var l, h, m, b, g, v, S, T, N, E, L, Q, B, X, se, he, le, _e, Re, ze, Ye, ye;
    const o = Br(r);
    if (ho(o, !0), !d.interaction) {
      dt(o);
      return;
    }
    dt(o);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const te = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let pe = !1;
      te.forEach((De) => {
        const Ee = Br(De);
        if (d.mode === "frame") {
          const Te = Le(), je = Te ? Ot(Te) : null;
          if (je) {
            const Je = (Ee.x - je.x) / Math.max(1, je.w), He = (Ee.y - je.y) / Math.max(1, je.h);
            if (!(Je >= 0 && Je <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, o0(s));
          }
        }
        r0(s, Ee, performance.now()) && (pe = !0);
      }), pe && ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const te = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let pe = !1;
      if (te.forEach((De) => {
        const Ee = Br(De);
        if (d.mode === "frame") {
          const Te = Le(), je = Te ? Ot(Te) : null;
          if (je) {
            const Je = (Ee.x - je.x) / Math.max(1, je.w), He = (Ee.y - je.y) / Math.max(1, je.h);
            if (!(Je >= 0 && Je <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, s0(s));
          }
        }
        i0(s, Ee, performance.now()) && (pe = !0);
      }), pe) {
        const De = gn();
        De && d.paintEngine.updateActiveStroke(s.stroke, De), ge({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const te = performance.now(), pe = d.mode === "unwrap" ? o : fo(r);
      Ht.moveDrag(pe.x, pe.y, d.mode === "unwrap" ? "unwrap" : "pano", te), s.lastTs = te, s.last = pe, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const te = fl(s.shot);
      if (!te || !s.shot) return;
      const pe = (l = _.ui_settings) != null && l.invert_view_x ? -1 : 1, De = (h = _.ui_settings) != null && h.invert_view_y ? -1 : 1, Ee = (o.x - s.last.x) * pe, Te = (o.y - s.last.y) * De, je = Math.max(1, Number(te.focalPx || 1)), Je = Number(s.shot.roll_deg ?? s.shot.rot_deg ?? 0) * Rt, He = Math.cos(Je), rt = Math.sin(Je), Ct = Ee / je, lt = -Te / je, At = Ct * He - lt * rt, sr = Ct * rt + lt * He, bo = Number(s.shot.pitch_deg || 0) * Rt, yo = Math.max(0.25, Math.abs(Math.cos(bo)));
      s.shot.yaw_deg = Vt(
        Number(s.shot.yaw_deg || 0) - Math.atan(At) / yo * Sn
      ), s.shot.pitch_deg = G(
        Number(s.shot.pitch_deg || 0) - Math.atan(sr) * Sn,
        -90,
        90
      ), s.changed = s.changed || Math.abs(Ee) > 0 || Math.abs(Te) > 0, s.last = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      const te = Math.atan2(o.y - s.center.y, o.x - s.center.x);
      af(s, te, r);
      return;
    }
    if (s.kind === "move") {
      const te = o.x - s.offset.x, pe = o.y - s.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const De = Le(), Ee = Ot(De);
        if (!De || !Ee) return;
        const Te = {
          x: G((te - Ee.x) / Math.max(1, Ee.w), 0, 1),
          y: G((pe - Ee.y) / Math.max(1, Ee.h), 0, 1)
        }, je = ol(De, Te);
        if (!je) return;
        const Je = zo(je);
        s.item.yaw_deg = Je.yaw, s.item.pitch_deg = Je.pitch;
      } else if (d.mode === "unwrap") {
        const De = Mr(), Ee = G((te - De.x) / Math.max(De.w, 1), 0, 1), Te = G((pe - De.y) / Math.max(De.h, 1), 0, 1);
        s.item.yaw_deg = Vt(Ee * 360 - 180), s.item.pitch_deg = G(90 - Te * 180, -90, 90);
      } else {
        const De = Qs(te, pe), Ee = zo(De);
        s.item.yaw_deg = Ee.yaw, s.item.pitch_deg = Ee.pitch;
      }
      yt(s.item) && Ut(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const te = d.mode === "frame" ? (() => {
        const Ee = Le();
        return Ee ? Cn(o, Ee, performance.now()) : null;
      })() : In(o, performance.now());
      if (!te || !s.startUv) return;
      const pe = xn(Number(te.u || 0), Number(s.startUv.u || 0)), De = Number(te.v || 0) - Number(s.startUv.v || 0);
      au((m = s.item) == null ? void 0 : m.actionGroupId, pe, De, s.snapshot, (b = s.item) == null ? void 0 : b.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const te = d.mode === "frame" ? (() => {
        const Ee = Le();
        return Ee ? Cn(o, Ee, performance.now()) : null;
      })() : In(o, performance.now());
      if (!te || !s.startUv) return;
      const pe = xn(Number(te.u || 0), Number(s.startUv.u || 0)), De = Number(te.v || 0) - Number(s.startUv.v || 0);
      su(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((v = s.item) == null ? void 0 : v.id) || "", pe, De, s.snapshot) && (Mi(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      ep(((S = s.item) == null ? void 0 : S.rasterObjectId) || ((T = s.item) == null ? void 0 : T.id) || "", pe, s.snapshot) && (Mi(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const te = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), pe = o.y - Number(((E = s.offset) == null ? void 0 : E.y) || 0);
      let De = !1, Ee = !1, Te = !1;
      const je = te - Number(((L = s.startCenter) == null ? void 0 : L.x) || te), Je = pe - Number(((Q = s.startCenter) == null ? void 0 : Q.y) || pe);
      for (const He of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const rt = (t === "cutout" ? Hs() : rr()).find((lt) => String((lt == null ? void 0 : lt.id) || "") === String(He.id || ""));
        if (!rt || !yt(rt)) continue;
        const Ct = {
          x: Number(((B = He.center) == null ? void 0 : B.x) || 0) + je,
          y: Number(((X = He.center) == null ? void 0 : X.y) || 0) + Je
        };
        if (d.mode === "frame" && t === "cutout") {
          const lt = Le(), At = Ot(lt);
          if (!lt || !At) continue;
          const sr = {
            x: G((Ct.x - At.x) / Math.max(1, At.w), 0, 1),
            y: G((Ct.y - At.y) / Math.max(1, At.h), 0, 1)
          }, bo = ol(lt, sr);
          if (!bo) continue;
          const yo = zo(bo);
          rt.yaw_deg = yo.yaw, rt.pitch_deg = yo.pitch;
        } else if (d.mode === "unwrap") {
          const lt = Mr(), At = G((Ct.x - lt.x) / Math.max(lt.w, 1), 0, 1), sr = G((Ct.y - lt.y) / Math.max(lt.h, 1), 0, 1);
          rt.yaw_deg = Vt(At * 360 - 180), rt.pitch_deg = G(90 - sr * 180, -90, 90);
        } else {
          const lt = Qs(Ct.x, Ct.y), At = zo(lt);
          rt.yaw_deg = At.yaw, rt.pitch_deg = At.pitch;
        }
        De = !0;
      }
      for (const He of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const rt = {
          x: Number(((se = He.center) == null ? void 0 : se.x) || 0) + je,
          y: Number(((he = He.center) == null ? void 0 : he.y) || 0) + Je
        }, Ct = d.mode === "frame" ? (() => {
          const At = Le();
          return At ? Cn(rt, At, performance.now()) : null;
        })() : In(rt, performance.now()), lt = He.centerUv || null;
        if (Ct && lt) {
          const At = xn(Number(Ct.u || 0), Number(lt.u || 0)), sr = Number(Ct.v || 0) - Number(lt.v || 0);
          au(He.id, At, sr, He.snapshot, He.layerKind, He.frameSnapshot) && (De = !0, Ee = !0);
        }
      }
      for (const He of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const rt = {
          x: Number(((le = He.center) == null ? void 0 : le.x) || 0) + je,
          y: Number(((_e = He.center) == null ? void 0 : _e.y) || 0) + Je
        }, Ct = d.mode === "frame" ? (() => {
          const At = Le();
          return At ? Cn(rt, At, performance.now()) : null;
        })() : In(rt, performance.now()), lt = He.centerUv || null;
        if (Ct && lt) {
          const At = xn(Number(Ct.u || 0), Number(lt.u || 0)), sr = Number(Ct.v || 0) - Number(lt.v || 0);
          su(He.id, At, sr, He.snapshot) && (De = !0, Te = !0);
        }
      }
      De && (Ee ? Tn({ rebuildPaintEngine: !1 }) : Te ? Mi() : Ut(), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      ou((Re = s.item) == null ? void 0 : Re.actionGroupId, pe, 0, s.snapshot, (ze = s.item) == null ? void 0 : ze.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let te = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * Sn;
      r.shiftKey && (te = Math.round(te / 45) * 45), ou((Ye = s.item) == null ? void 0 : Ye.actionGroupId, 1, te, s.snapshot, (ye = s.item) == null ? void 0 : ye.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), ge({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const pe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * pe, 1, 179), s.item.vFOV_deg = G(s.startVFOV * pe, 1, 179), s.item.aspect_id = Qr(s.item), yt(s.item) && Ut(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * pe, 1, 179), s.item.aspect_id = Qr(s.item), yt(s.item) && Ut(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = G(s.startVFOV * pe, 1, 179), s.item.aspect_id = Qr(s.item), yt(s.item) && Ut(), ge({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let pe = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * Sn, De = s.startRot - pe;
      r.shiftKey && (De = Math.round(De / 45) * 45);
      const Ee = yt(s.item) ? "rot_deg" : "roll_deg";
      s.item[Ee] = De, yt(s.item) && Ut(), ge({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var o, s, l, h, m, b, g, v;
    const r = d.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        _i();
        const S = hl(d.interaction), T = !!d.interaction._hasCommittedSegments;
        if (S || T) {
          Tn();
          const N = String(((l = d.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
          if (N) {
            const L = Kt().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === N);
            L && (L.frame = null);
          }
          const E = gn();
          E && (S ? String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(E), Ru()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, E) : d.paintEngine.cancelActiveStroke(E)), et(), un(), Ve(), We(), e.setDirtyCanvas(!0, !0), ge();
        } else {
          const N = gn();
          N && d.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const S = rf(d.interaction.start, d.interaction.current), N = [
          ...t === "cutout" ? al().filter((E) => !pn(E)) : [...rr()],
          ...Xm(),
          ...Jm()
        ].filter((E) => c0(S, jt(E)));
        rp(N, ((b = N[N.length - 1]) == null ? void 0 : b.id) || null), t === "cutout" && N.length && (d.cutoutAspectOpen = !1), Ve(), We(), ge();
      } else if (((g = d.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((v = d.interaction) == null ? void 0 : v.kind) === "roll_frame")
        d.interaction.changed && (et(), tt(), Ve());
      else if (d.interaction && d.interaction.kind !== "view") {
        let S = !1;
        (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (S = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (S = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (S = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (S = !0), S && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? Tn({ rebuildPaintEngine: !0 }) : Mi()), et(), un(), e.setDirtyCanvas(!0, !0), ca(), d.hqFrames = 1, We(), ge();
      }
      d.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Gr(), _i(), r && r.kind === "view" && Ht.endDrag(performance.now()), Sr(), We(), dt(d.pointerPos), ge();
    }
  }, I.onpointercancel = () => {
    var r, o, s;
    if (!fa()) {
      if (((r = d.interaction) == null ? void 0 : r.kind) === "view" && Ht.endDrag(performance.now()), ((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        _i();
        const l = gn();
        l && d.paintEngine.cancelActiveStroke(l);
      }
      d.interaction = null, _i(), Sr(), dt(d.pointerPos), ge({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    fa();
  }, I.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, I.onmousemove = (r) => {
    const o = Br(r), s = ho(o, !0);
    d.interaction || (dt(o), s && d.mode === "frame" && d.primaryTool === "cursor" && ge({ localOnly: !0 }));
  }, I.onmouseleave = () => {
    ho(d.pointerPos, !1), dt(d.pointerPos), d.mode === "frame" && d.primaryTool === "cursor" && ge({ localOnly: !0 });
  }, I.onwheel = (r) => {
    if (d.mode === "frame") {
      const o = Br(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Jg(o, s) && ge({ localOnly: !0 }), r.preventDefault();
      return;
    }
    d.mode === "pano" && (Ht.applyWheelEvent(r) && ge({ localOnly: !0 }), r.preventDefault());
  }, I.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Vr(!0));
  }, I.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Pt.depth = 0, Vr(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((h) => ua(h));
    s && Hu(s);
  };
  const lf = (r) => {
    t !== "stickers" && t !== "cutout" || i || zs(r) && (Pt.depth += 1, Vr(!0), r.preventDefault());
  }, cf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Pt.active && zs(r) && Vr(!0), Pt.active && r.preventDefault());
  }, uf = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Pt.active) return;
    Pt.depth = Math.max(0, Pt.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Pt.depth === 0 || o) && Vr(!1);
  }, ff = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Pt.depth = 0, Vr(!1), zs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", lf, !0), window.addEventListener("dragover", cf, !0), window.addEventListener("dragleave", uf, !0), window.addEventListener("drop", ff, !0);
  function pl() {
    const { canUndo: r, canRedo: o } = Uu();
    Ci(k.toolButtons, "value", "undo", { disabled: !r }), Ci(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const df = (r, o, s = !1) => {
    var v;
    const l = t === "cutout" && d.mode === "frame" ? Le() : null, h = l || xt(), m = l ? "shot" : Za();
    if (!h || m === "stroke") return;
    const b = (((v = k.sidePanel) == null ? void 0 : v.params) || []).find((S) => S.key === r);
    if (!b || b.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = G(g, Number(b.min), Number(b.max)), r === "yaw_deg" && (g = Vt(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = Qr(h)), Ve(), ge(), s && et();
  };
  Me == null || Me.addEventListener("click", async (r) => {
    var l, h, m, b, g, v, S, T, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const E = Bt(o.getAttribute("data-coverage"));
      if (E === Bt(_.coverage)) return;
      _.coverage = E, d.coverage = E, p && (p.value = String(E)), c ? we.backgroundDirty = !0 : (un(), qg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), We(), ge();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (l = k.sidePanel) == null ? void 0 : l.selectionPicker) != null && h.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const E = String(o.getAttribute("data-selection-id") || "");
      let L = null;
      E && (t === "stickers" ? L = rr().find((Q) => String((Q == null ? void 0 : Q.id) || "") === E) || null : L = ((m = cu().find((Q) => {
        var B;
        return String(((B = Q == null ? void 0 : Q.item) == null ? void 0 : B.id) || "") === E;
      })) == null ? void 0 : m.item) || null), pi(L || null), L && !Dt(L) && $s(
        Vt(Number(L.yaw_deg || 0)),
        G(Number(L.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), Ve(), We(), ge();
      return;
    }
    if (s === "copy-state-inline") {
      const E = xt(), L = Za();
      if (!E || L === "stroke" || An().length > 1) return;
      const Q = JSON.stringify(t === "cutout" && L !== "image" ? gu(E) : gp(E));
      try {
        await navigator.clipboard.writeText(Q), (b = k.sidePanel) != null && b.copyStateButton && (k.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = k.sidePanel) != null && B.copyStateButton && (k.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const E = String(o.getAttribute("data-visibility") || "");
      E === "panorama" ? d.showPanorama = !d.showPanorama : E === "objects" ? d.showObjects = !d.showObjects : E === "mask" && (d.showMask = !d.showMask), Ve(), ge();
      return;
    }
    if (s === "set-invert-x") {
      _.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", uo(), Ve(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), ge();
      return;
    }
    if (s === "set-invert-y") {
      _.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", uo(), Ve(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), ge();
      return;
    }
    if (s === "toggle-quality-picker") {
      (S = k.sidePanel) != null && S.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const E = String(o.getAttribute("data-quality") || "balanced");
      _.ui_settings.preview_quality = E === "draft" || E === "high" ? E : "balanced", uo(), Ve(), (T = e.setDirtyCanvas) == null || T.call(e, !0, !0), ge();
      return;
    }
    if (s === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, _.ui_settings.preview_quality = "balanced", uo(), Ve(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), ge();
      return;
    }
    if (s === "close-preview") {
      Pi();
      return;
    }
    if (s === "cancel-close") {
      Pi();
      return;
    }
    s === "save-close" && (Wg(), Pi());
  }), Me == null || Me.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && df(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), Me == null || Me.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && df(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const gl = () => yu();
  gl(), ee.addEventListener("click", (r) => {
    var g, v, S, T;
    if ((v = (g = r.target) == null ? void 0 : g.matches) != null && v.call(g, "[data-confirm-overlay]")) {
      const N = (S = k.confirmDialog) == null ? void 0 : S.resolve;
      k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const N = d.mode;
      d.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (N !== "frame" && (we.frameSafeRect = null), Ve(), We()), ul(), Sr(), ge();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = N, (N === "paint" || N === "mask") && ra({ preservePanelValues: !0 }), cn(), Ve(), We(), ge();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? cl(-1) : N === "redo" ? cl(1) : N === "clear" ? Ug() : N === "add" || N === "add-image" ? Rg() : N === "add-or-look" && $g();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        d.paintTool = N, ra({ preservePanelValues: !0 }), fn[N] && (d.activeBrushPresetId = N), cn(), Ve(), We(), ge();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), ra({ preservePanelValues: !0 }), cn(), Ve(), We(), ge();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Hg(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = Qo.find((E) => E.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        d.paintColor = bn(N.color), re(!0), cn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), $ && !$.hidden ? re(!0) : Ne(), cn();
        return;
      }
    }
    const l = String(((T = s == null ? void 0 : s.getAttribute) == null ? void 0 : T.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      if (vi(), H.paused) {
        xe.mode = "playback", xe.pendingPlaybackResume = !1, xe.resumeAfterScrub = !1;
        const N = Number(k.videoTransport.duration || H.duration || 0), E = Number(H.currentTime || xe.editorTime || 0), L = N > 0 && E >= N - 1e-3 ? 0 : Number(xe.editorTime || E || 0), Q = Math.max(Ls(), 0.04);
        xe.editorTime = L, Math.abs(E - L) > Q ? (xe.seeking = !1, xe.pendingPlaybackResume = !0, qs(L)) : H.play().catch(() => {
        });
      } else
        H.pause(), xe.mode = "scrub", xe.resumeAfterScrub = !1, xe.pendingPlaybackResume = !1, xe.editorTime = Number(H.currentTime || 0), yi();
      $n({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ar(),
        currentTime: xe.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: xe.mode
      }), ge({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const N = !H.muted;
      H.muted = N, !N && Number(H.volume || 0) <= 0 && (H.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), $n({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ar(),
        currentTime: xe.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: xe.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (l === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      const N = !k.videoTransport.loop;
      k.videoTransport.loop = N, H.loop = N, $n({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ar(),
        currentTime: xe.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: xe.mode,
        hasAudio: k.videoTransport.hasAudio,
        loop: N,
        muted: H.muted,
        volume: Number(H.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (l === "frame-aspect") {
        k.frameRail.aspectOpen = !k.frameRail.aspectOpen;
        return;
      }
      if (l === "frame-aspect-set") {
        const N = d.mode === "frame" ? Le() : null;
        if (!N) return;
        Wu(N, String(s.getAttribute("data-aspect") || "1:1")), k.frameRail.aspectOpen = !1, ca(), et(), tt(), Sr(), ge();
        return;
      }
      if (l === "frame-rotate-90") {
        const N = d.mode === "frame" ? Le() : null;
        if (!N) return;
        Yu(N), k.frameRail.aspectOpen = !1, ca(), et(), tt(), Sr(), ge();
        return;
      }
      if (l === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, We(), ge();
        return;
      }
      if (l === "aspect-set") {
        const N = xt();
        if (!N) return;
        const E = String(s.getAttribute("data-aspect") || "1:1");
        Wu(N, E), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, ca(), et(), tt(), We(), ge();
        return;
      }
      if (l === "rotate-90") {
        const N = xt();
        if (!N) return;
        Yu(N), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, ca(), et(), tt(), We(), ge();
        return;
      }
      if (l === "bring-front") {
        Gg();
        return;
      }
      if (l === "send-back") {
        Kg();
        return;
      }
      if (l === "duplicate") {
        Bg();
        return;
      }
      if (l === "replace-image") {
        Lg();
        return;
      }
      if (l === "toggle-lock") {
        np();
        return;
      }
      if (l === "back-initial") {
        cp();
        return;
      }
      if (l === "toggle-visible") {
        lp();
        return;
      }
      if (l === "delete") {
        Gu();
        return;
      }
    }
    if (l === "reset-view") {
      if (d.mode === "frame") return;
      $s(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      if (d.mode === "frame") return;
      d.showGrid = !d.showGrid, kS(e == null ? void 0 : e.id, d.showGrid), gl(), ge();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), m0();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = N, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = N ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), bf(), ge();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), b = d.customPaintHistory[m];
    b && (d.customPaintColor = bn(b), d.paintColor = bn(b), cn());
  }), ee.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(H instanceof HTMLVideoElement)) return;
      vi();
      const m = G(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      xe.mode = "scrub", !xe.seeking && !H.paused && !H.ended && (xe.resumeAfterScrub = !0, H.pause()), xe.editorTime = m, nu(m), $n({
        ready: !!H.getAttribute("src"),
        playing: !1,
        visible: ar(),
        currentTime: m,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: "scrub"
      }), Number(Ae.__panoFrameIdx || 0) > 0 && (we.backgroundDirty = !0, we.dirty = !0, ge({ cause: "frame_view", localOnly: !0 })), qs(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(H instanceof HTMLVideoElement)) return;
      const m = G(Number(s.value || 0), 0, 1);
      H.volume = m, H.muted = m <= 1e-4, $n({
        ready: !!H.getAttribute("src"),
        playing: !H.paused && !H.ended,
        visible: ar(),
        currentTime: xe.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: xe.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: H.muted,
        volume: m
      });
      return;
    }
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(l.value)))), b = Ar(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[b] = m, cn(), n0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...d.customPaintColor, a: G(Number(h.value) / 100, 0, 1) };
      d.customPaintColor = bn(m), d.paintColor = bn(m), cn();
    }
  }), ee.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(H instanceof HTMLVideoElement)) return;
      xe.pendingPlaybackResume = !!xe.resumeAfterScrub, xe.resumeAfterScrub = !1, xe.pendingPlaybackResume || (xe.mode = "scrub"), xe.seeking || (xe.pendingPlaybackResume ? (xe.pendingPlaybackResume = !1, xe.mode = "playback", H.play().catch(() => {
      })) : (yi(), ge({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), ee.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), ee.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), ee.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && mo();
  }), ee.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !ee.contains(o) || nt.target !== o && (nt.target = o, nt.timer && clearTimeout(nt.timer), nt.timer = window.setTimeout(() => {
      nt.target === o && u0(o);
    }, 220));
  }), ee.addEventListener("pointerout", (r) => {
    var l, h;
    const o = r.target.closest("[data-tip]");
    !o || nt.target !== o || (r.relatedTarget instanceof Element ? (h = (l = r.relatedTarget).closest) == null ? void 0 : h.call(l, "[data-tip]") : null) === o || Gr();
  }), ee.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Gr();
  });
  const d0 = (r, o) => {
    var g;
    if (!oe) return;
    const s = oe.getBoundingClientRect(), l = G((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - G((o - s.top) / Math.max(1, s.height), 0, 1), m = ql(d.customPaintColor), b = { ...Yl(m.h, l, h), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = bn(b), d.paintColor = bn(b), cn();
  }, h0 = (r) => {
    var m;
    if (!D) return;
    const o = D.getBoundingClientRect(), s = G((r - o.left) / Math.max(1, o.width), 0, 1), l = ql(d.customPaintColor), h = { ...Yl(s, l.s, l.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = bn(h), d.paintColor = bn(h), cn();
  }, hf = (r, o) => {
    const s = r.pointerId;
    o(r);
    const l = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  oe && (oe.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), hf(r, (o) => d0(o.clientX, o.clientY));
  }), D && (D.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), hf(r, (o) => h0(o.clientX));
  }), ee.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (h = k.confirmDialog) == null ? void 0 : h.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const mf = () => {
    const r = !!d.fullscreen;
    Ci(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Fe.fullscreen_close : Fe.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, po = (r) => {
    const o = !!r;
    d.fullscreen !== o && (d.fullscreen = o, ee.classList.toggle("pano-modal-fullscreen", o), o ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), gl(), mf(), Fs(), ge());
  }, pf = () => document.fullscreenElement === J, m0 = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        po(!d.fullscreen);
        return;
      }
      pf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = J.requestFullscreen) == null ? void 0 : r.call(J));
    } catch {
      po(!d.fullscreen);
    }
  }, gf = () => {
    document.fullscreenEnabled && po(pf());
  };
  document.addEventListener("fullscreenchange", gf), mf();
  const bf = () => {
    const r = !!d.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Fe.fullscreen_close : Fe.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  bf();
  const bl = e.onExecuted, yl = e.onConnectionsChange;
  let vl = null, _l = null, xl = null;
  !i && t === "stickers" && (xl = (r = "sync") => {
    bu(r);
  }, e.__panoExternalStickerSync = xl, vl = function(...o) {
    var s;
    typeof bl == "function" && bl.apply(this, o), dS(Oe, Eo), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = vl, _l = function(...o) {
    var s;
    typeof yl == "function" && yl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = _l), i || Jd.set(String(e.id ?? "0"), () => Mu());
  let ki = null;
  const Pi = async () => ki || (ki = (async () => {
    var r, o, s, l, h, m, b, g, v, S, T;
    return Jd.delete(String(e.id ?? "0")), Zg(), i || un(), document.fullscreenElement === J && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", gf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Xu && (e.__panoFlushStateBeforeQueue = null), (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (g = (b = (m = On) == null ? void 0 : m.canvas) == null ? void 0 : b.setDirty) == null || g.call(b, !0, !0), Gr(), Og(), H instanceof HTMLVideoElement && H.pause(), zn.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (v = K == null ? void 0 : K.dispose) == null || v.call(K), (S = Ce == null ? void 0 : Ce.unmount) == null || S.call(Ce), (T = de == null ? void 0 : de.dispose) == null || T.call(de), Vr(!1), window.removeEventListener("keydown", yf, !0), window.removeEventListener("keydown", vf, !0), window.removeEventListener("keydown", go, !0), window.removeEventListener("keyup", go, !0), window.removeEventListener("blur", _f), window.removeEventListener("keydown", xf, !0), window.removeEventListener("dragenter", lf, !0), window.removeEventListener("dragover", cf, !0), window.removeEventListener("dragleave", uf, !0), window.removeEventListener("drop", ff, !0), !i && t === "stickers" && (e.onExecuted === vl && (e.onExecuted = bl), e.onConnectionsChange === _l && (e.onConnectionsChange = yl), e.__panoExternalStickerSync === xl && (e.__panoExternalStickerSync = null)), j.unmount(), z.remove(), Yg(), ki = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), ki = null, !1)), ki), yf = (r) => {
    var o, s, l, h, m;
    if (r.key === "Escape") {
      if (fa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === J) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (l = document.exitFullscreen) == null || l.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), po(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Pi();
    }
  }, vf = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const b = r.target, g = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || b != null && b.isContentEditable || !xt() || (Gu(), r.preventDefault(), r.stopPropagation());
  }, go = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    d.marqueeModifier === o && d.altModifier === s || (d.marqueeModifier = o, d.altModifier = s, Pr(), dt(d.pointerPos));
  }, _f = () => {
    d.marqueeModifier = !1, d.altModifier = !1, Pr(), dt(d.pointerPos);
  }, xf = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: b } = Uu();
    r.shiftKey && !b || !r.shiftKey && !m || (cl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", yf, !0), window.addEventListener("keydown", vf, !0), window.addEventListener("keydown", go, !0), window.addEventListener("keyup", go, !0), window.addEventListener("blur", _f), window.addEventListener("keydown", xf, !0), J.addEventListener("pointerdown", (r) => {
    r.target === J && Pi();
  });
  function jn(r, o, { rollbackState: s = !1 } = {}) {
    let l = "";
    try {
      s && (l = JSON.stringify(_)), o();
    } catch (h) {
      if (l)
        try {
          const m = JSON.parse(l);
          Object.keys(_).forEach((b) => delete _[b]), Object.assign(_, m), i || un();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      k.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  jn("cutout-focus", vp), !i && t === "stickers" && jn("external-sticker-sync", () => bu("open"), { rollbackState: !0 }), zg().catch((r) => {
    k.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), jn("history", et), jn("undo-redo", pl), jn("paint-ui", cn), jn("side-panel", Ve), jn("look-at-frame", Js), jn("video-source", vi), jn("canvas-size", ju), jn("cursor", () => dt(d.pointerPos)), ge(), we.rafId = requestAnimationFrame(Vu);
}
On.registerExtension(Qw({
  app: On,
  openEditor: ES,
  attachStickers: O1,
  attachCutout: R1,
  attachPreview: D1,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: tS
}));
