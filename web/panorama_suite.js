import * as ra from "../../scripts/app.js";
import { app as Qn } from "../../scripts/app.js";
import { api as pn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Tt = {}, Yi = [], gr = () => {
}, wp = () => !1, il = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ol = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Su = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, a0 = Object.prototype.hasOwnProperty, Mt = (e, t) => a0.call(e, t), ot = Array.isArray, qi = (e) => gs(e) === "[object Map]", xp = (e) => gs(e) === "[object Set]", Od = (e) => gs(e) === "[object Date]", at = (e) => typeof e == "function", Yt = (e) => typeof e == "string", vr = (e) => typeof e == "symbol", Ft = (e) => e !== null && typeof e == "object", kp = (e) => (Ft(e) || at(e)) && at(e.then) && at(e.catch), Mp = Object.prototype.toString, gs = (e) => Mp.call(e), l0 = (e) => gs(e).slice(8, -1), Pp = (e) => gs(e) === "[object Object]", _u = (e) => Yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ vu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, c0 = /-\w/g, xn = sl(
  (e) => e.replace(c0, (t) => t.slice(1).toUpperCase())
), u0 = /\B([A-Z])/g, Ii = sl(
  (e) => e.replace(u0, "-$1").toLowerCase()
), al = sl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fl = sl(
  (e) => e ? `on${al(e)}` : ""
), pr = (e, t) => !Object.is(e, t), ia = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Np = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, wu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fd;
const ll = () => Fd || (Fd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Yt(n) ? h0(n) : Ot(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Yt(e) || Ft(e))
    return e;
}
const d0 = /;(?![^(]*\))/g, f0 = /:([^]+)/, p0 = /\/\*[^]*?\*\//g;
function h0(e) {
  const t = {};
  return e.replace(p0, "").split(d0).forEach((r) => {
    if (r) {
      const n = r.split(f0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Yt(e))
    t = e;
  else if (ot(e))
    for (let r = 0; r < e.length; r++) {
      const n = gt(e[r]);
      n && (t += n + " ");
    }
  else if (Ft(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const m0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", g0 = /* @__PURE__ */ vu(m0);
function Ap(e) {
  return !!e || e === "";
}
function y0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = xu(e[n], t[n]);
  return r;
}
function xu(e, t) {
  if (e === t) return !0;
  let r = Od(e), n = Od(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = vr(e), n = vr(t), r || n)
    return e === t;
  if (r = ot(e), n = ot(t), r || n)
    return r && n ? y0(e, t) : !1;
  if (r = Ft(e), n = Ft(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !xu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Cp = (e) => !!(e && e.__v_isRef === !0), it = (e) => Yt(e) ? e : e == null ? "" : ot(e) || Ft(e) && (e.toString === Mp || !at(e.toString)) ? Cp(e) ? it(e.value) : JSON.stringify(e, Ip, 2) : String(e), Ip = (e, t) => Cp(t) ? Ip(e, t.value) : qi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Tl(n, o) + " =>"] = i, r),
    {}
  )
} : xp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Tl(r))
} : vr(t) ? Tl(t) : Ft(t) && !ot(t) && !Pp(t) ? String(t) : t, Tl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nn;
class b0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Nn, !t && Nn && (this.index = (Nn.scopes || (Nn.scopes = [])).push(
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
      const r = Nn;
      try {
        return Nn = this, t();
      } finally {
        Nn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Nn, Nn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Nn = this.prevScope, this.prevScope = void 0);
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
function v0() {
  return Nn;
}
let Lt;
const Dl = /* @__PURE__ */ new WeakSet();
class Ep {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Nn && Nn.active && Nn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Dl.has(this) && (Dl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Td(this), Tp(this);
    const t = Lt, r = er;
    Lt = this, er = !0;
    try {
      return this.fn();
    } finally {
      Dp(this), Lt = t, er = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pu(t);
      this.deps = this.depsTail = void 0, Td(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Dl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xc(this) && this.run();
  }
  get dirty() {
    return xc(this);
  }
}
let Op = 0, Wo, Ko;
function Fp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = Wo, Wo = e;
}
function ku() {
  Op++;
}
function Mu() {
  if (--Op > 0)
    return;
  if (Ko) {
    let t = Ko;
    for (Ko = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Wo; ) {
    let t = Wo;
    for (Wo = void 0; t; ) {
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
function Tp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Dp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Pu(n), S0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function xc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Lp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Lp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo) || (e.globalVersion = Qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = er;
  Lt = e, er = !0;
  try {
    Tp(e);
    const i = e.fn(e._value);
    (t.version === 0 || pr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, er = n, Dp(e), e.flags &= -3;
  }
}
function Pu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Pu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function S0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let er = !0;
const Rp = [];
function Vr() {
  Rp.push(er), er = !1;
}
function $r() {
  const e = Rp.pop();
  er = e === void 0 ? !0 : e;
}
function Td(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Lt;
    Lt = void 0;
    try {
      t();
    } finally {
      Lt = r;
    }
  }
}
let Qo = 0;
class _0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Nu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !er || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new _0(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, Vp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Qo++, this.notify(t);
  }
  notify(t) {
    ku();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Mu();
    }
  }
}
function Vp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Vp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const kc = /* @__PURE__ */ new WeakMap(), Si = /* @__PURE__ */ Symbol(
  ""
), Mc = /* @__PURE__ */ Symbol(
  ""
), es = /* @__PURE__ */ Symbol(
  ""
);
function dn(e, t, r) {
  if (er && Lt) {
    let n = kc.get(e);
    n || kc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Nu()), i.map = n, i.key = r), i.track();
  }
}
function Ir(e, t, r, n, i, o) {
  const s = kc.get(e);
  if (!s) {
    Qo++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (ku(), t === "clear")
    s.forEach(a);
  else {
    const l = ot(e), c = l && _u(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === es || !vr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(es)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Si)), qi(e) && a(s.get(Mc)));
          break;
        case "delete":
          l || (a(s.get(Si)), qi(e) && a(s.get(Mc)));
          break;
        case "set":
          qi(e) && a(s.get(Si));
          break;
      }
  }
  Mu();
}
function Li(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (dn(t, "iterate", es), /* @__PURE__ */ Kn(e) ? t : t.map(rr));
}
function cl(e) {
  return dn(e = /* @__PURE__ */ kt(e), "iterate", es), e;
}
function ur(e, t) {
  return /* @__PURE__ */ zr(e) ? no(/* @__PURE__ */ _i(e) ? rr(t) : t) : rr(t);
}
const w0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ll(this, Symbol.iterator, (e) => ur(this, e));
  },
  concat(...e) {
    return Li(this).concat(
      ...e.map((t) => ot(t) ? Li(t) : t)
    );
  },
  entries() {
    return Ll(this, "entries", (e) => (e[1] = ur(this, e[1]), e));
  },
  every(e, t) {
    return kr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return kr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => ur(this, n)),
      arguments
    );
  },
  find(e, t) {
    return kr(
      this,
      "find",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return kr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return kr(
      this,
      "findLast",
      e,
      t,
      (r) => ur(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return kr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return kr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Rl(this, "includes", e);
  },
  indexOf(...e) {
    return Rl(this, "indexOf", e);
  },
  join(e) {
    return Li(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Rl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Po(this, "pop");
  },
  push(...e) {
    return Po(this, "push", e);
  },
  reduce(e, ...t) {
    return Dd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Dd(this, "reduceRight", e, t);
  },
  shift() {
    return Po(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return kr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Po(this, "splice", e);
  },
  toReversed() {
    return Li(this).toReversed();
  },
  toSorted(e) {
    return Li(this).toSorted(e);
  },
  toSpliced(...e) {
    return Li(this).toSpliced(...e);
  },
  unshift(...e) {
    return Po(this, "unshift", e);
  },
  values() {
    return Ll(this, "values", (e) => ur(this, e));
  }
};
function Ll(e, t, r) {
  const n = cl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Kn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const x0 = Array.prototype;
function kr(e, t, r, n, i, o) {
  const s = cl(e), a = s !== e && !/* @__PURE__ */ Kn(e), l = s[t];
  if (l !== x0[t]) {
    const u = l.apply(e, o);
    return a ? rr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, ur(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Dd(e, t, r, n) {
  const i = cl(e), o = i !== e && !/* @__PURE__ */ Kn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = ur(e, c)), r.call(this, c, ur(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? ur(e, l) : l;
}
function Rl(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  dn(n, "iterate", es);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Iu(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Po(e, t, r = []) {
  Vr(), ku();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return Mu(), $r(), n;
}
const k0 = /* @__PURE__ */ vu("__proto__,__v_isRef,__isVue"), $p = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vr)
);
function M0(e) {
  vr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
class zp {
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
      return n === (i ? o ? D0 : Wp : o ? Gp : Hp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ot(t);
    if (!i) {
      let l;
      if (s && (l = w0[r]))
        return l;
      if (r === "hasOwnProperty")
        return M0;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ mn(t) ? t : n
    );
    if ((vr(r) ? $p.has(r) : k0(r)) || (i || dn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ mn(a)) {
      const l = s && _u(r) ? a : a.value;
      return i && Ft(l) ? /* @__PURE__ */ Nc(l) : l;
    }
    return Ft(a) ? i ? /* @__PURE__ */ Nc(a) : /* @__PURE__ */ co(a) : a;
  }
}
class jp extends zp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = ot(t) && _u(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ zr(o);
      if (!/* @__PURE__ */ Kn(n) && !/* @__PURE__ */ zr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ mn(o) && !/* @__PURE__ */ mn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : Mt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ mn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? pr(n, o) && Ir(t, "set", r, n) : Ir(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Mt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Ir(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!vr(r) || !$p.has(r)) && dn(t, "has", r), n;
  }
  ownKeys(t) {
    return dn(
      t,
      "iterate",
      ot(t) ? "length" : Si
    ), Reflect.ownKeys(t);
  }
}
class P0 extends zp {
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
const N0 = /* @__PURE__ */ new jp(), A0 = /* @__PURE__ */ new P0(), C0 = /* @__PURE__ */ new jp(!0);
const Pc = (e) => e, zs = (e) => Reflect.getPrototypeOf(e);
function I0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = qi(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Pc : t ? no : rr;
    return !t && dn(
      o,
      "iterate",
      l ? Mc : Si
    ), gn(
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
function js(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function E0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (pr(i, a) && dn(s, "get", i), dn(s, "get", a));
      const { has: l } = zs(s), c = t ? Pc : e ? no : rr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && dn(/* @__PURE__ */ kt(i), "iterate", Si), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (pr(i, a) && dn(s, "has", i), dn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? Pc : e ? no : rr;
      return !e && dn(l, "iterate", Si), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return gn(
    r,
    e ? {
      add: js("add"),
      set: js("set"),
      delete: js("delete"),
      clear: js("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = zs(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ Kn(i) && !/* @__PURE__ */ zr(i) ? a : i;
        return s.has.call(o, l) || pr(i, l) && s.has.call(o, i) || pr(a, l) && s.has.call(o, a) || (o.add(l), Ir(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Kn(o) && !/* @__PURE__ */ zr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = zs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? pr(o, d) && Ir(s, "set", i, o) : Ir(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = zs(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Ir(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
        return o && Ir(
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
    r[i] = I0(i, e, t);
  }), r;
}
function Au(e, t) {
  const r = E0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const O0 = {
  get: /* @__PURE__ */ Au(!1, !1)
}, F0 = {
  get: /* @__PURE__ */ Au(!1, !0)
}, T0 = {
  get: /* @__PURE__ */ Au(!0, !1)
};
const Hp = /* @__PURE__ */ new WeakMap(), Gp = /* @__PURE__ */ new WeakMap(), Wp = /* @__PURE__ */ new WeakMap(), D0 = /* @__PURE__ */ new WeakMap();
function L0(e) {
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
function R0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : L0(l0(e));
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  return /* @__PURE__ */ zr(e) ? e : Cu(
    e,
    !1,
    N0,
    O0,
    Hp
  );
}
// @__NO_SIDE_EFFECTS__
function V0(e) {
  return Cu(
    e,
    !1,
    C0,
    F0,
    Gp
  );
}
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  return Cu(
    e,
    !0,
    A0,
    T0,
    Wp
  );
}
function Cu(e, t, r, n, i) {
  if (!Ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = R0(e);
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
function _i(e) {
  return /* @__PURE__ */ zr(e) ? /* @__PURE__ */ _i(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Kn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function $0(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && Np(e, "__v_skip", !0), e;
}
const rr = (e) => Ft(e) ? /* @__PURE__ */ co(e) : e, no = (e) => Ft(e) ? /* @__PURE__ */ Nc(e) : e;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return Kp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return Kp(e, !0);
}
function Kp(e, t) {
  return /* @__PURE__ */ mn(e) ? e : new z0(e, t);
}
class z0 {
  constructor(t, r) {
    this.dep = new Nu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : rr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kn(t) || /* @__PURE__ */ zr(t);
    t = n ? t : /* @__PURE__ */ kt(t), pr(t, r) && (this._rawValue = t, this._value = n ? t : rr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ mn(e) ? e.value : e;
}
const j0 = {
  get: (e, t, r) => t === "__v_raw" ? e : nt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ mn(i) && !/* @__PURE__ */ mn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Up(e) {
  return /* @__PURE__ */ _i(e) ? e : new Proxy(e, j0);
}
class H0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Nu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return Fp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Lp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function G0(e, t, r = !1) {
  let n, i;
  return at(e) ? n = e : (n = e.get, i = e.set), new H0(n, i, r);
}
const Hs = {}, Ma = /* @__PURE__ */ new WeakMap();
let mi;
function W0(e, t = !1, r = mi) {
  if (r) {
    let n = Ma.get(r);
    n || Ma.set(r, n = []), n.push(e);
  }
}
function K0(e, t, r = Tt) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (J) => i ? J : /* @__PURE__ */ Kn(J) || i === !1 || i === 0 ? Er(J, 1) : Er(J);
  let d, u, f, g, k = !1, m = !1;
  if (/* @__PURE__ */ mn(e) ? (u = () => e.value, k = /* @__PURE__ */ Kn(e)) : /* @__PURE__ */ _i(e) ? (u = () => c(e), k = !0) : ot(e) ? (m = !0, k = e.some((J) => /* @__PURE__ */ _i(J) || /* @__PURE__ */ Kn(J)), u = () => e.map((J) => {
    if (/* @__PURE__ */ mn(J))
      return J.value;
    if (/* @__PURE__ */ _i(J))
      return c(J);
    if (at(J))
      return l ? l(J, 2) : J();
  })) : at(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      Vr();
      try {
        f();
      } finally {
        $r();
      }
    }
    const J = mi;
    mi = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      mi = J;
    }
  } : u = gr, t && i) {
    const J = u, O = i === !0 ? 1 / 0 : i;
    u = () => Er(J(), O);
  }
  const h = v0(), _ = () => {
    d.stop(), h && h.active && Su(h.effects, d);
  };
  if (o && t) {
    const J = t;
    t = (...O) => {
      J(...O), _();
    };
  }
  let X = m ? new Array(e.length).fill(Hs) : Hs;
  const j = (J) => {
    if (!(!(d.flags & 1) || !d.dirty && !J))
      if (t) {
        const O = d.run();
        if (i || k || (m ? O.some((Y, G) => pr(Y, X[G])) : pr(O, X))) {
          f && f();
          const Y = mi;
          mi = d;
          try {
            const G = [
              O,
              // pass undefined as the old value when it's changed for the first time
              X === Hs ? void 0 : m && X[0] === Hs ? [] : X,
              g
            ];
            X = O, l ? l(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            mi = Y;
          }
        }
      } else
        d.run();
  };
  return a && a(j), d = new Ep(u), d.scheduler = s ? () => s(j, !1) : j, g = (J) => W0(J, !1, d), f = d.onStop = () => {
    const J = Ma.get(d);
    if (J) {
      if (l)
        l(J, 4);
      else
        for (const O of J) O();
      Ma.delete(d);
    }
  }, t ? n ? j(!0) : X = d.run() : s ? s(j.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function Er(e, t = 1 / 0, r) {
  if (t <= 0 || !Ft(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ mn(e))
    Er(e.value, t, r);
  else if (ot(e))
    for (let n = 0; n < e.length; n++)
      Er(e[n], t, r);
  else if (xp(e) || qi(e))
    e.forEach((n) => {
      Er(n, t, r);
    });
  else if (Pp(e)) {
    for (const n in e)
      Er(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Er(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ys(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    ul(i, t, r);
  }
}
function Sr(e, t, r, n) {
  if (at(e)) {
    const i = ys(e, t, r, n);
    return i && kp(i) && i.catch((o) => {
      ul(o, t, r);
    }), i;
  }
  if (ot(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Sr(e[o], t, r, n));
    return i;
  }
}
function ul(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Tt;
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
      Vr(), ys(o, null, 10, [
        e,
        l,
        c
      ]), $r();
      return;
    }
  }
  U0(e, r, i, n, s);
}
function U0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const _n = [];
let cr = -1;
const Xi = [];
let Xr = null, $i = 0;
const Bp = /* @__PURE__ */ Promise.resolve();
let Pa = null;
function dl(e) {
  const t = Pa || Bp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function B0(e) {
  let t = cr + 1, r = _n.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = _n[n], o = ts(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Eu(e) {
  if (!(e.flags & 1)) {
    const t = ts(e), r = _n[_n.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ts(r) ? _n.push(e) : _n.splice(B0(t), 0, e), e.flags |= 1, Yp();
  }
}
function Yp() {
  Pa || (Pa = Bp.then(Xp));
}
function Y0(e) {
  ot(e) ? Xi.push(...e) : Xr && e.id === -1 ? Xr.splice($i + 1, 0, e) : e.flags & 1 || (Xi.push(e), e.flags |= 1), Yp();
}
function Ld(e, t, r = cr + 1) {
  for (; r < _n.length; r++) {
    const n = _n[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      _n.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function qp(e) {
  if (Xi.length) {
    const t = [...new Set(Xi)].sort(
      (r, n) => ts(r) - ts(n)
    );
    if (Xi.length = 0, Xr) {
      Xr.push(...t);
      return;
    }
    for (Xr = t, $i = 0; $i < Xr.length; $i++) {
      const r = Xr[$i];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Xr = null, $i = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xp(e) {
  try {
    for (cr = 0; cr < _n.length; cr++) {
      const t = _n[cr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ys(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; cr < _n.length; cr++) {
      const t = _n[cr];
      t && (t.flags &= -2);
    }
    cr = -1, _n.length = 0, qp(), Pa = null, (_n.length || Xi.length) && Xp();
  }
}
let Dn = null, Jp = null;
function Na(e) {
  const t = Dn;
  return Dn = e, Jp = e && e.type.__scopeId || null, t;
}
function Zp(e, t = Dn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Yd(-1);
    const o = Na(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Na(o), n._d && Yd(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Lr(e, t) {
  if (Dn === null)
    return e;
  const r = gl(Dn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Tt] = t[i];
    o && (at(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Er(s), n.push({
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
function ci(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (Vr(), Sr(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), $r());
  }
}
function q0(e, t) {
  if (fn) {
    let r = fn.provides;
    const n = fn.parent && fn.parent.provides;
    n === r && (r = fn.provides = Object.create(n)), r[e] = t;
  }
}
function oa(e, t, r = !1) {
  const n = By();
  if (n || Ji) {
    let i = Ji ? Ji._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const X0 = /* @__PURE__ */ Symbol.for("v-scx"), J0 = () => oa(X0);
function wi(e, t, r) {
  return Qp(e, t, r);
}
function Qp(e, t, r = Tt) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (rs) {
    if (o === "sync") {
      const g = J0();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = gr, g.resume = gr, g.pause = gr, g;
    }
  }
  const d = fn;
  a.call = (g, k, m) => Sr(g, d, k, m);
  let u = !1;
  o === "post" ? a.scheduler = (g) => {
    Pn(g, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (g, k) => {
    k ? g() : Eu(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), u && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = K0(e, t, a);
  return rs && (c ? c.push(f) : l && f()), f;
}
function Z0(e, t, r) {
  const n = this.proxy, i = Yt(e) ? e.includes(".") ? eh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = vs(this), a = Qp(i, o.bind(n), r);
  return s(), a;
}
function eh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Q0 = /* @__PURE__ */ Symbol("_vte"), ey = (e) => e.__isTeleport, ty = /* @__PURE__ */ Symbol("_leaveCb");
function Ou(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ou(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function th(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Rd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Aa = /* @__PURE__ */ new WeakMap();
function Uo(e, t, r, n, i = !1) {
  if (ot(e)) {
    e.forEach(
      (m, h) => Uo(
        m,
        t && (ot(t) ? t[h] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Bo(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Uo(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? gl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Tt ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), g = u === Tt ? wp : (m) => Rd(d, m) ? !1 : Mt(f, m), k = (m, h) => !(h && Rd(d, h));
  if (c != null && c !== l) {
    if (Vd(t), Yt(c))
      d[c] = null, g(c) && (u[c] = null);
    else if (/* @__PURE__ */ mn(c)) {
      const m = t;
      k(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (at(l))
    ys(l, a, 12, [s, d]);
  else {
    const m = Yt(l), h = /* @__PURE__ */ mn(l);
    if (m || h) {
      const _ = () => {
        if (e.f) {
          const X = m ? g(l) ? u[l] : d[l] : k() || !e.k ? l.value : d[e.k];
          if (i)
            ot(X) && Su(X, o);
          else if (ot(X))
            X.includes(o) || X.push(o);
          else if (m)
            d[l] = [o], g(l) && (u[l] = d[l]);
          else {
            const j = [o];
            k(l, e.k) && (l.value = j), e.k && (d[e.k] = j);
          }
        } else m ? (d[l] = s, g(l) && (u[l] = s)) : h && (k(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const X = () => {
          _(), Aa.delete(e);
        };
        X.id = -1, Aa.set(e, X), Pn(X, r);
      } else
        Vd(e), _();
    }
  }
}
function Vd(e) {
  const t = Aa.get(e);
  t && (t.flags |= 8, Aa.delete(e));
}
ll().requestIdleCallback;
ll().cancelIdleCallback;
const Bo = (e) => !!e.type.__asyncLoader, nh = (e) => e.type.__isKeepAlive;
function ny(e, t) {
  rh(e, "a", t);
}
function ry(e, t) {
  rh(e, "da", t);
}
function rh(e, t, r = fn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (fl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      nh(i.parent.vnode) && iy(n, t, r, i), i = i.parent;
  }
}
function iy(e, t, r, n) {
  const i = fl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ih(() => {
    Su(n[t], i);
  }, r);
}
function fl(e, t, r = fn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Vr();
      const a = vs(r), l = Sr(t, r, e, s);
      return a(), $r(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Hr = (e) => (t, r = fn) => {
  (!rs || e === "sp") && fl(e, (...n) => t(...n), r);
}, oy = Hr("bm"), pl = Hr("m"), sy = Hr(
  "bu"
), ay = Hr("u"), bs = Hr(
  "bum"
), ih = Hr("um"), ly = Hr(
  "sp"
), cy = Hr("rtg"), uy = Hr("rtc");
function dy(e, t = fn) {
  fl("ec", e, t);
}
const fy = "components", oh = /* @__PURE__ */ Symbol.for("v-ndc");
function py(e) {
  return Yt(e) ? hy(fy, e, !1) || e : e || oh;
}
function hy(e, t, r = !0, n = !1) {
  const i = Dn || fn;
  if (i) {
    const o = i.type;
    {
      const a = Zy(
        o,
        !1
      );
      if (a && (a === t || a === xn(t) || a === al(xn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      $d(i[e] || o[e], t) || // global registration
      $d(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function $d(e, t) {
  return e && (e[t] || e[xn(t)] || e[al(xn(t))]);
}
function Nt(e, t, r, n) {
  let i;
  const o = r, s = ot(e);
  if (s || Yt(e)) {
    const a = s && /* @__PURE__ */ _i(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Kn(e), c = /* @__PURE__ */ zr(e), e = cl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? no(rr(e[d])) : rr(e[d]) : e[d],
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
const Ac = (e) => e ? Ph(e) ? gl(e) : Ac(e.parent) : null, Yo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ac(e.parent),
    $root: (e) => Ac(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ah(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Eu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = dl.bind(e.proxy)),
    $watch: (e) => Z0.bind(e)
  })
), Vl = (e, t) => e !== Tt && !e.__isScriptSetup && Mt(e, t), my = {
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
        if (Vl(n, t))
          return s[t] = 1, n[t];
        if (i !== Tt && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Tt && Mt(r, t))
          return s[t] = 4, r[t];
        Cc && (s[t] = 0);
      }
    }
    const c = Yo[t];
    let d, u;
    if (c)
      return t === "$attrs" && dn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Tt && Mt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, Mt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Vl(i, t) ? (i[t] = r, !0) : n !== Tt && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Tt && a[0] !== "$" && Mt(e, a) || Vl(t, a) || Mt(o, a) || Mt(n, a) || Mt(Yo, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Mt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function zd(e) {
  return ot(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Cc = !0;
function gy(e) {
  const t = ah(e), r = e.proxy, n = e.ctx;
  Cc = !1, t.beforeCreate && jd(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: k,
    activated: m,
    deactivated: h,
    beforeDestroy: _,
    beforeUnmount: X,
    destroyed: j,
    unmounted: J,
    render: O,
    renderTracked: Y,
    renderTriggered: G,
    errorCaptured: W,
    serverPrefetch: ee,
    // public API
    expose: pe,
    inheritAttrs: D,
    // assets
    components: se,
    directives: re,
    filters: Q
  } = t;
  if (c && yy(c, n, null), s)
    for (const H in s) {
      const C = s[H];
      at(C) && (n[H] = C.bind(r));
    }
  if (i) {
    const H = i.call(r, r);
    Ft(H) && (e.data = /* @__PURE__ */ co(H));
  }
  if (Cc = !0, o)
    for (const H in o) {
      const C = o[H], $ = at(C) ? C.bind(r, r) : at(C.get) ? C.get.bind(r, r) : gr, R = !at(C) && at(C.set) ? C.set.bind(r) : gr, U = ut({
        get: $,
        set: R
      });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => U.value,
        set: (de) => U.value = de
      });
    }
  if (a)
    for (const H in a)
      sh(a[H], n, r, H);
  if (l) {
    const H = at(l) ? l.call(r) : l;
    Reflect.ownKeys(H).forEach((C) => {
      q0(C, H[C]);
    });
  }
  d && jd(d, e, "c");
  function T(H, C) {
    ot(C) ? C.forEach(($) => H($.bind(r))) : C && H(C.bind(r));
  }
  if (T(oy, u), T(pl, f), T(sy, g), T(ay, k), T(ny, m), T(ry, h), T(dy, W), T(uy, Y), T(cy, G), T(bs, X), T(ih, J), T(ly, ee), ot(pe))
    if (pe.length) {
      const H = e.exposed || (e.exposed = {});
      pe.forEach((C) => {
        Object.defineProperty(H, C, {
          get: () => r[C],
          set: ($) => r[C] = $,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === gr && (e.render = O), D != null && (e.inheritAttrs = D), se && (e.components = se), re && (e.directives = re), ee && th(e);
}
function yy(e, t, r = gr) {
  ot(e) && (e = Ic(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ft(i) ? "default" in i ? o = oa(
      i.from || n,
      i.default,
      !0
    ) : o = oa(i.from || n) : o = oa(i), /* @__PURE__ */ mn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function jd(e, t, r) {
  Sr(
    ot(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function sh(e, t, r, n) {
  let i = n.includes(".") ? eh(r, n) : () => r[n];
  if (Yt(e)) {
    const o = t[e];
    at(o) && wi(i, o);
  } else if (at(e))
    wi(i, e.bind(r));
  else if (Ft(e))
    if (ot(e))
      e.forEach((o) => sh(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && wi(i, o, e);
    }
}
function ah(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ca(l, c, s, !0)
  ), Ca(l, t, s)), Ft(t) && o.set(t, l), l;
}
function Ca(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ca(e, o, r, !0), i && i.forEach(
    (s) => Ca(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = by[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const by = {
  data: Hd,
  props: Gd,
  emits: Gd,
  // objects
  methods: To,
  computed: To,
  // lifecycle
  beforeCreate: vn,
  created: vn,
  beforeMount: vn,
  mounted: vn,
  beforeUpdate: vn,
  updated: vn,
  beforeDestroy: vn,
  beforeUnmount: vn,
  destroyed: vn,
  unmounted: vn,
  activated: vn,
  deactivated: vn,
  errorCaptured: vn,
  serverPrefetch: vn,
  // assets
  components: To,
  directives: To,
  // watch
  watch: Sy,
  // provide / inject
  provide: Hd,
  inject: vy
};
function Hd(e, t) {
  return t ? e ? function() {
    return gn(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vy(e, t) {
  return To(Ic(e), Ic(t));
}
function Ic(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function vn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function To(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gd(e, t) {
  return e ? ot(e) && ot(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    zd(e),
    zd(t ?? {})
  ) : t;
}
function Sy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = gn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = vn(e[n], t[n]);
  return r;
}
function lh() {
  return {
    app: null,
    config: {
      isNativeTag: wp,
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
let _y = 0;
function wy(e, t) {
  return function(n, i = null) {
    at(n) || (n = gn({}, n)), i != null && !Ft(i) && (i = null);
    const o = lh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: _y++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: eb,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && at(d.install) ? (s.add(d), d.install(c, ...u)) : at(d) && (s.add(d), d(c, ...u))), c;
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
          const g = c._ceVNode || Be(n, i);
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), l = !0, c._container = d, d.__vue_app__ = c, gl(g.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Sr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = Ji;
        Ji = c;
        try {
          return d();
        } finally {
          Ji = u;
        }
      }
    };
    return c;
  };
}
let Ji = null;
const xy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${Ii(t)}Modifiers`];
function ky(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Tt;
  let i = r;
  const o = t.startsWith("update:"), s = o && xy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Yt(d) ? d.trim() : d)), s.number && (i = r.map(wu)));
  let a, l = n[a = Fl(t)] || // also try camelCase event handler (#2249)
  n[a = Fl(xn(t))];
  !l && o && (l = n[a = Fl(Ii(t))]), l && Sr(
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
    e.emitted[a] = !0, Sr(
      c,
      e,
      6,
      i
    );
  }
}
const My = /* @__PURE__ */ new WeakMap();
function ch(e, t, r = !1) {
  const n = r ? My : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = ch(c, t, !0);
      d && (a = !0, gn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ft(e) && n.set(e, null), null) : (ot(o) ? o.forEach((l) => s[l] = null) : gn(s, o), Ft(e) && n.set(e, s), s);
}
function hl(e, t) {
  return !e || !il(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, Ii(t)) || Mt(e, t));
}
function Wd(e) {
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
    setupState: g,
    ctx: k,
    inheritAttrs: m
  } = e, h = Na(e);
  let _, X;
  try {
    if (r.shapeFlag & 4) {
      const J = i || n, O = J;
      _ = dr(
        c.call(
          O,
          J,
          d,
          u,
          g,
          f,
          k
        )
      ), X = a;
    } else {
      const J = t;
      _ = dr(
        J.length > 1 ? J(
          u,
          { attrs: a, slots: s, emit: l }
        ) : J(
          u,
          null
        )
      ), X = t.props ? a : Py(a);
    }
  } catch (J) {
    qo.length = 0, ul(J, e, 1), _ = Be(ei);
  }
  let j = _;
  if (X && m !== !1) {
    const J = Object.keys(X), { shapeFlag: O } = j;
    J.length && O & 7 && (o && J.some(ol) && (X = Ny(
      X,
      o
    )), j = ro(j, X, !1, !0));
  }
  return r.dirs && (j = ro(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(r.dirs) : r.dirs), r.transition && Ou(j, r.transition), _ = j, Na(h), _;
}
const Py = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || il(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Ny = (e, t) => {
  const r = {};
  for (const n in e)
    (!ol(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Ay(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Kd(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (uh(s, n, f) && !hl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Kd(n, s, c) : !0 : !!s;
  return !1;
}
function Kd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (uh(t, e, o) && !hl(r, o))
      return !0;
  }
  return !1;
}
function uh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ft(n) && Ft(i) ? !xu(n, i) : n !== i;
}
function Cy({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const dh = {}, fh = () => Object.create(dh), ph = (e) => Object.getPrototypeOf(e) === dh;
function Iy(e, t, r, n = !1) {
  const i = {}, o = fh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ V0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Ey(e, t, r, n) {
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
        if (hl(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (Mt(o, f))
            g !== o[f] && (o[f] = g, c = !0);
          else {
            const k = xn(f);
            i[k] = Ec(
              l,
              a,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== o[f] && (o[f] = g, c = !0);
      }
    }
  } else {
    hh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ii(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Ec(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !Mt(t, u)) && (delete o[u], c = !0);
  }
  c && Ir(e.attrs, "set", "");
}
function hh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Go(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = xn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : hl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Tt;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Ec(
        i,
        l,
        u,
        c[u],
        e,
        !Mt(c, u)
      );
    }
  }
  return s;
}
function Ec(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = Mt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && at(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = vs(i);
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
    ] && (n === "" || n === Ii(r)) && (n = !0));
  }
  return n;
}
const Oy = /* @__PURE__ */ new WeakMap();
function mh(e, t, r = !1) {
  const n = r ? Oy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, g] = mh(u, t, !0);
      gn(s, f), g && a.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ft(e) && n.set(e, Yi), Yi;
  if (ot(o))
    for (let d = 0; d < o.length; d++) {
      const u = xn(o[d]);
      Ud(u) && (s[u] = Tt);
    }
  else if (o)
    for (const d in o) {
      const u = xn(d);
      if (Ud(u)) {
        const f = o[d], g = s[u] = ot(f) || at(f) ? { type: f } : gn({}, f), k = g.type;
        let m = !1, h = !0;
        if (ot(k))
          for (let _ = 0; _ < k.length; ++_) {
            const X = k[_], j = at(X) && X.name;
            if (j === "Boolean") {
              m = !0;
              break;
            } else j === "String" && (h = !1);
          }
        else
          m = at(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = m, g[
          1
          /* shouldCastTrue */
        ] = h, (m || Mt(g, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ft(e) && n.set(e, c), c;
}
function Ud(e) {
  return e[0] !== "$" && !Go(e);
}
const Fu = (e) => e === "_" || e === "_ctx" || e === "$stable", Tu = (e) => ot(e) ? e.map(dr) : [dr(e)], Fy = (e, t, r) => {
  if (t._n)
    return t;
  const n = Zp((...i) => Tu(t(...i)), r);
  return n._c = !1, n;
}, gh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Fu(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = Fy(i, o, n);
    else if (o != null) {
      const s = Tu(o);
      t[i] = () => s;
    }
  }
}, yh = (e, t) => {
  const r = Tu(t);
  e.slots.default = () => r;
}, bh = (e, t, r) => {
  for (const n in t)
    (r || !Fu(n)) && (e[n] = t[n]);
}, Ty = (e, t, r) => {
  const n = e.slots = fh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (bh(n, t, r), r && Np(n, "_", i, !0)) : gh(t, n);
  } else t && yh(e, t);
}, Dy = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Tt;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : bh(i, t, r) : (o = !t.$stable, gh(t, i)), s = t;
  } else t && (yh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Fu(a) && s[a] == null && delete i[a];
}, Pn = zy;
function Ly(e) {
  return Ry(e);
}
function Ry(e, t) {
  const r = ll();
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
    setScopeId: g = gr,
    insertStaticContent: k
  } = e, m = (b, y, F, v = null, z = null, x = null, L = void 0, S = null, M = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !No(b, y) && (v = ue(b), de(b, z, x, !0), b = null), y.patchFlag === -2 && (M = !1, y.dynamicChildren = null);
    const { type: E, ref: q, shapeFlag: le } = y;
    switch (E) {
      case ml:
        h(b, y, F, v);
        break;
      case ei:
        _(b, y, F, v);
        break;
      case zl:
        b == null && X(y, F, v, L);
        break;
      case tt:
        se(
          b,
          y,
          F,
          v,
          z,
          x,
          L,
          S,
          M
        );
        break;
      default:
        le & 1 ? O(
          b,
          y,
          F,
          v,
          z,
          x,
          L,
          S,
          M
        ) : le & 6 ? re(
          b,
          y,
          F,
          v,
          z,
          x,
          L,
          S,
          M
        ) : (le & 64 || le & 128) && E.process(
          b,
          y,
          F,
          v,
          z,
          x,
          L,
          S,
          M,
          I
        );
    }
    q != null && z ? Uo(q, b && b.ref, x, y || b, !y) : q == null && b && b.ref != null && Uo(b.ref, null, x, b, !0);
  }, h = (b, y, F, v) => {
    if (b == null)
      n(
        y.el = a(y.children),
        F,
        v
      );
    else {
      const z = y.el = b.el;
      y.children !== b.children && c(z, y.children);
    }
  }, _ = (b, y, F, v) => {
    b == null ? n(
      y.el = l(y.children || ""),
      F,
      v
    ) : y.el = b.el;
  }, X = (b, y, F, v) => {
    [b.el, b.anchor] = k(
      b.children,
      y,
      F,
      v,
      b.el,
      b.anchor
    );
  }, j = ({ el: b, anchor: y }, F, v) => {
    let z;
    for (; b && b !== y; )
      z = f(b), n(b, F, v), b = z;
    n(y, F, v);
  }, J = ({ el: b, anchor: y }) => {
    let F;
    for (; b && b !== y; )
      F = f(b), i(b), b = F;
    i(y);
  }, O = (b, y, F, v, z, x, L, S, M) => {
    if (y.type === "svg" ? L = "svg" : y.type === "math" && (L = "mathml"), b == null)
      Y(
        y,
        F,
        v,
        z,
        x,
        L,
        S,
        M
      );
    else {
      const E = b.el && b.el._isVueCE ? b.el : null;
      try {
        E && E._beginPatch(), ee(
          b,
          y,
          z,
          x,
          L,
          S,
          M
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, Y = (b, y, F, v, z, x, L, S) => {
    let M, E;
    const { props: q, shapeFlag: le, transition: ge, dirs: Z } = b;
    if (M = b.el = s(
      b.type,
      x,
      q && q.is,
      q
    ), le & 8 ? d(M, b.children) : le & 16 && W(
      b.children,
      M,
      null,
      v,
      z,
      $l(b, x),
      L,
      S
    ), Z && ci(b, null, v, "created"), G(M, b, b.scopeId, L, v), q) {
      for (const _e in q)
        _e !== "value" && !Go(_e) && o(M, _e, null, q[_e], x, v);
      "value" in q && o(M, "value", null, q.value, x), (E = q.onVnodeBeforeMount) && ar(E, v, b);
    }
    Z && ci(b, null, v, "beforeMount");
    const he = Vy(z, ge);
    he && ge.beforeEnter(M), n(M, y, F), ((E = q && q.onVnodeMounted) || he || Z) && Pn(() => {
      try {
        E && ar(E, v, b), he && ge.enter(M), Z && ci(b, null, v, "mounted");
      } finally {
      }
    }, z);
  }, G = (b, y, F, v, z) => {
    if (F && g(b, F), v)
      for (let x = 0; x < v.length; x++)
        g(b, v[x]);
    if (z) {
      let x = z.subTree;
      if (y === x || wh(x.type) && (x.ssContent === y || x.ssFallback === y)) {
        const L = z.vnode;
        G(
          b,
          L,
          L.scopeId,
          L.slotScopeIds,
          z.parent
        );
      }
    }
  }, W = (b, y, F, v, z, x, L, S, M = 0) => {
    for (let E = M; E < b.length; E++) {
      const q = b[E] = S ? Nr(b[E]) : dr(b[E]);
      m(
        null,
        q,
        y,
        F,
        v,
        z,
        x,
        L,
        S
      );
    }
  }, ee = (b, y, F, v, z, x, L) => {
    const S = y.el = b.el;
    let { patchFlag: M, dynamicChildren: E, dirs: q } = y;
    M |= b.patchFlag & 16;
    const le = b.props || Tt, ge = y.props || Tt;
    let Z;
    if (F && ui(F, !1), (Z = ge.onVnodeBeforeUpdate) && ar(Z, F, y, b), q && ci(y, b, F, "beforeUpdate"), F && ui(F, !0), (le.innerHTML && ge.innerHTML == null || le.textContent && ge.textContent == null) && d(S, ""), E ? pe(
      b.dynamicChildren,
      E,
      S,
      F,
      v,
      $l(y, z),
      x
    ) : L || C(
      b,
      y,
      S,
      null,
      F,
      v,
      $l(y, z),
      x,
      !1
    ), M > 0) {
      if (M & 16)
        D(S, le, ge, F, z);
      else if (M & 2 && le.class !== ge.class && o(S, "class", null, ge.class, z), M & 4 && o(S, "style", le.style, ge.style, z), M & 8) {
        const he = y.dynamicProps;
        for (let _e = 0; _e < he.length; _e++) {
          const Ne = he[_e], fe = le[Ne], ye = ge[Ne];
          (ye !== fe || Ne === "value") && o(S, Ne, fe, ye, z, F);
        }
      }
      M & 1 && b.children !== y.children && d(S, y.children);
    } else !L && E == null && D(S, le, ge, F, z);
    ((Z = ge.onVnodeUpdated) || q) && Pn(() => {
      Z && ar(Z, F, y, b), q && ci(y, b, F, "updated");
    }, v);
  }, pe = (b, y, F, v, z, x, L) => {
    for (let S = 0; S < y.length; S++) {
      const M = b[S], E = y[S], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        M.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (M.type === tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !No(M, E) || // - In the case of a component, it could contain anything.
        M.shapeFlag & 198) ? u(M.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      m(
        M,
        E,
        q,
        null,
        v,
        z,
        x,
        L,
        !0
      );
    }
  }, D = (b, y, F, v, z) => {
    if (y !== F) {
      if (y !== Tt)
        for (const x in y)
          !Go(x) && !(x in F) && o(
            b,
            x,
            y[x],
            null,
            z,
            v
          );
      for (const x in F) {
        if (Go(x)) continue;
        const L = F[x], S = y[x];
        L !== S && x !== "value" && o(b, x, S, L, z, v);
      }
      "value" in F && o(b, "value", y.value, F.value, z);
    }
  }, se = (b, y, F, v, z, x, L, S, M) => {
    const E = y.el = b ? b.el : a(""), q = y.anchor = b ? b.anchor : a("");
    let { patchFlag: le, dynamicChildren: ge, slotScopeIds: Z } = y;
    Z && (S = S ? S.concat(Z) : Z), b == null ? (n(E, F, v), n(q, F, v), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      F,
      q,
      z,
      x,
      L,
      S,
      M
    )) : le > 0 && le & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === ge.length ? (pe(
      b.dynamicChildren,
      ge,
      F,
      z,
      x,
      L,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || z && y === z.subTree) && vh(
      b,
      y,
      !0
      /* shallow */
    )) : C(
      b,
      y,
      F,
      q,
      z,
      x,
      L,
      S,
      M
    );
  }, re = (b, y, F, v, z, x, L, S, M) => {
    y.slotScopeIds = S, b == null ? y.shapeFlag & 512 ? z.ctx.activate(
      y,
      F,
      v,
      L,
      M
    ) : Q(
      y,
      F,
      v,
      z,
      x,
      L,
      M
    ) : K(b, y, M);
  }, Q = (b, y, F, v, z, x, L) => {
    const S = b.component = Uy(
      b,
      v,
      z
    );
    if (nh(b) && (S.ctx.renderer = I), Yy(S, !1, L), S.asyncDep) {
      if (z && z.registerDep(S, T, L), !b.el) {
        const M = S.subTree = Be(ei);
        _(null, M, y, F), b.placeholder = M.el;
      }
    } else
      T(
        S,
        b,
        y,
        F,
        z,
        x,
        L
      );
  }, K = (b, y, F) => {
    const v = y.component = b.component;
    if (Ay(b, y, F))
      if (v.asyncDep && !v.asyncResolved) {
        H(v, y, F);
        return;
      } else
        v.next = y, v.update();
    else
      y.el = b.el, v.vnode = y;
  }, T = (b, y, F, v, z, x, L) => {
    const S = () => {
      if (b.isMounted) {
        let { next: le, bu: ge, u: Z, parent: he, vnode: _e } = b;
        {
          const p = Sh(b);
          if (p) {
            le && (le.el = _e.el, H(b, le, L)), p.asyncDep.then(() => {
              Pn(() => {
                b.isUnmounted || E();
              }, z);
            });
            return;
          }
        }
        let Ne = le, fe;
        ui(b, !1), le ? (le.el = _e.el, H(b, le, L)) : le = _e, ge && ia(ge), (fe = le.props && le.props.onVnodeBeforeUpdate) && ar(fe, he, le, _e), ui(b, !0);
        const ye = Wd(b), ne = b.subTree;
        b.subTree = ye, m(
          ne,
          ye,
          // parent may have changed if it's in a teleport
          u(ne.el),
          // anchor may have changed if it's in a fragment
          ue(ne),
          b,
          z,
          x
        ), le.el = ye.el, Ne === null && Cy(b, ye.el), Z && Pn(Z, z), (fe = le.props && le.props.onVnodeUpdated) && Pn(
          () => ar(fe, he, le, _e),
          z
        );
      } else {
        let le;
        const { el: ge, props: Z } = y, { bm: he, m: _e, parent: Ne, root: fe, type: ye } = b, ne = Bo(y);
        ui(b, !1), he && ia(he), !ne && (le = Z && Z.onVnodeBeforeMount) && ar(le, Ne, y), ui(b, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            ye,
            b.parent ? b.parent.type : void 0
          );
          const p = b.subTree = Wd(b);
          m(
            null,
            p,
            F,
            v,
            b,
            z,
            x
          ), y.el = p.el;
        }
        if (_e && Pn(_e, z), !ne && (le = Z && Z.onVnodeMounted)) {
          const p = y;
          Pn(
            () => ar(le, Ne, p),
            z
          );
        }
        (y.shapeFlag & 256 || Ne && Bo(Ne.vnode) && Ne.vnode.shapeFlag & 256) && b.a && Pn(b.a, z), b.isMounted = !0, y = F = v = null;
      }
    };
    b.scope.on();
    const M = b.effect = new Ep(S);
    b.scope.off();
    const E = b.update = M.run.bind(M), q = b.job = M.runIfDirty.bind(M);
    q.i = b, q.id = b.uid, M.scheduler = () => Eu(q), ui(b, !0), E();
  }, H = (b, y, F) => {
    y.component = b;
    const v = b.vnode.props;
    b.vnode = y, b.next = null, Ey(b, y.props, v, F), Dy(b, y.children, F), Vr(), Ld(b), $r();
  }, C = (b, y, F, v, z, x, L, S, M = !1) => {
    const E = b && b.children, q = b ? b.shapeFlag : 0, le = y.children, { patchFlag: ge, shapeFlag: Z } = y;
    if (ge > 0) {
      if (ge & 128) {
        R(
          E,
          le,
          F,
          v,
          z,
          x,
          L,
          S,
          M
        );
        return;
      } else if (ge & 256) {
        $(
          E,
          le,
          F,
          v,
          z,
          x,
          L,
          S,
          M
        );
        return;
      }
    }
    Z & 8 ? (q & 16 && ie(E, z, x), le !== E && d(F, le)) : q & 16 ? Z & 16 ? R(
      E,
      le,
      F,
      v,
      z,
      x,
      L,
      S,
      M
    ) : ie(E, z, x, !0) : (q & 8 && d(F, ""), Z & 16 && W(
      le,
      F,
      v,
      z,
      x,
      L,
      S,
      M
    ));
  }, $ = (b, y, F, v, z, x, L, S, M) => {
    b = b || Yi, y = y || Yi;
    const E = b.length, q = y.length, le = Math.min(E, q);
    let ge;
    for (ge = 0; ge < le; ge++) {
      const Z = y[ge] = M ? Nr(y[ge]) : dr(y[ge]);
      m(
        b[ge],
        Z,
        F,
        null,
        z,
        x,
        L,
        S,
        M
      );
    }
    E > q ? ie(
      b,
      z,
      x,
      !0,
      !1,
      le
    ) : W(
      y,
      F,
      v,
      z,
      x,
      L,
      S,
      M,
      le
    );
  }, R = (b, y, F, v, z, x, L, S, M) => {
    let E = 0;
    const q = y.length;
    let le = b.length - 1, ge = q - 1;
    for (; E <= le && E <= ge; ) {
      const Z = b[E], he = y[E] = M ? Nr(y[E]) : dr(y[E]);
      if (No(Z, he))
        m(
          Z,
          he,
          F,
          null,
          z,
          x,
          L,
          S,
          M
        );
      else
        break;
      E++;
    }
    for (; E <= le && E <= ge; ) {
      const Z = b[le], he = y[ge] = M ? Nr(y[ge]) : dr(y[ge]);
      if (No(Z, he))
        m(
          Z,
          he,
          F,
          null,
          z,
          x,
          L,
          S,
          M
        );
      else
        break;
      le--, ge--;
    }
    if (E > le) {
      if (E <= ge) {
        const Z = ge + 1, he = Z < q ? y[Z].el : v;
        for (; E <= ge; )
          m(
            null,
            y[E] = M ? Nr(y[E]) : dr(y[E]),
            F,
            he,
            z,
            x,
            L,
            S,
            M
          ), E++;
      }
    } else if (E > ge)
      for (; E <= le; )
        de(b[E], z, x, !0), E++;
    else {
      const Z = E, he = E, _e = /* @__PURE__ */ new Map();
      for (E = he; E <= ge; E++) {
        const P = y[E] = M ? Nr(y[E]) : dr(y[E]);
        P.key != null && _e.set(P.key, E);
      }
      let Ne, fe = 0;
      const ye = ge - he + 1;
      let ne = !1, p = 0;
      const A = new Array(ye);
      for (E = 0; E < ye; E++) A[E] = 0;
      for (E = Z; E <= le; E++) {
        const P = b[E];
        if (fe >= ye) {
          de(P, z, x, !0);
          continue;
        }
        let B;
        if (P.key != null)
          B = _e.get(P.key);
        else
          for (Ne = he; Ne <= ge; Ne++)
            if (A[Ne - he] === 0 && No(P, y[Ne])) {
              B = Ne;
              break;
            }
        B === void 0 ? de(P, z, x, !0) : (A[B - he] = E + 1, B >= p ? p = B : ne = !0, m(
          P,
          y[B],
          F,
          null,
          z,
          x,
          L,
          S,
          M
        ), fe++);
      }
      const w = ne ? $y(A) : Yi;
      for (Ne = w.length - 1, E = ye - 1; E >= 0; E--) {
        const P = he + E, B = y[P], me = y[P + 1], V = P + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          me.el || _h(me)
        ) : v;
        A[E] === 0 ? m(
          null,
          B,
          F,
          V,
          z,
          x,
          L,
          S,
          M
        ) : ne && (Ne < 0 || E !== w[Ne] ? U(B, F, V, 2) : Ne--);
      }
    }
  }, U = (b, y, F, v, z = null) => {
    const { el: x, type: L, transition: S, children: M, shapeFlag: E } = b;
    if (E & 6) {
      U(b.component.subTree, y, F, v);
      return;
    }
    if (E & 128) {
      b.suspense.move(y, F, v);
      return;
    }
    if (E & 64) {
      L.move(b, y, F, I);
      return;
    }
    if (L === tt) {
      n(x, y, F);
      for (let le = 0; le < M.length; le++)
        U(M[le], y, F, v);
      n(b.anchor, y, F);
      return;
    }
    if (L === zl) {
      j(b, y, F);
      return;
    }
    if (v !== 2 && E & 1 && S)
      if (v === 0)
        S.beforeEnter(x), n(x, y, F), Pn(() => S.enter(x), z);
      else {
        const { leave: le, delayLeave: ge, afterLeave: Z } = S, he = () => {
          b.ctx.isUnmounted ? i(x) : n(x, y, F);
        }, _e = () => {
          x._isLeaving && x[ty](
            !0
            /* cancelled */
          ), le(x, () => {
            he(), Z && Z();
          });
        };
        ge ? ge(x, he, _e) : _e();
      }
    else
      n(x, y, F);
  }, de = (b, y, F, v = !1, z = !1) => {
    const {
      type: x,
      props: L,
      ref: S,
      children: M,
      dynamicChildren: E,
      shapeFlag: q,
      patchFlag: le,
      dirs: ge,
      cacheIndex: Z,
      memo: he
    } = b;
    if (le === -2 && (z = !1), S != null && (Vr(), Uo(S, null, F, b, !0), $r()), Z != null && (y.renderCache[Z] = void 0), q & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const _e = q & 1 && ge, Ne = !Bo(b);
    let fe;
    if (Ne && (fe = L && L.onVnodeBeforeUnmount) && ar(fe, y, b), q & 6)
      N(b.component, F, v);
    else {
      if (q & 128) {
        b.suspense.unmount(F, v);
        return;
      }
      _e && ci(b, null, y, "beforeUnmount"), q & 64 ? b.type.remove(
        b,
        y,
        F,
        I,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== tt || le > 0 && le & 64) ? ie(
        E,
        y,
        F,
        !1,
        !0
      ) : (x === tt && le & 384 || !z && q & 16) && ie(M, y, F), v && Se(b);
    }
    const ye = he != null && Z == null;
    (Ne && (fe = L && L.onVnodeUnmounted) || _e || ye) && Pn(() => {
      fe && ar(fe, y, b), _e && ci(b, null, y, "unmounted"), ye && (b.el = null);
    }, F);
  }, Se = (b) => {
    const { type: y, el: F, anchor: v, transition: z } = b;
    if (y === tt) {
      te(F, v);
      return;
    }
    if (y === zl) {
      J(b);
      return;
    }
    const x = () => {
      i(F), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (b.shapeFlag & 1 && z && !z.persisted) {
      const { leave: L, delayLeave: S } = z, M = () => L(F, x);
      S ? S(b.el, x, M) : M();
    } else
      x();
  }, te = (b, y) => {
    let F;
    for (; b !== y; )
      F = f(b), i(b), b = F;
    i(y);
  }, N = (b, y, F) => {
    const { bum: v, scope: z, job: x, subTree: L, um: S, m: M, a: E } = b;
    Bd(M), Bd(E), v && ia(v), z.stop(), x && (x.flags |= 8, de(L, b, y, F)), S && Pn(S, y), Pn(() => {
      b.isUnmounted = !0;
    }, y);
  }, ie = (b, y, F, v = !1, z = !1, x = 0) => {
    for (let L = x; L < b.length; L++)
      de(b[L], y, F, v, z);
  }, ue = (b) => {
    if (b.shapeFlag & 6)
      return ue(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), F = y && y[Q0];
    return F ? f(F) : y;
  };
  let be = !1;
  const ve = (b, y, F) => {
    let v;
    b == null ? y._vnode && (de(y._vnode, null, null, !0), v = y._vnode.component) : m(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      F
    ), y._vnode = b, be || (be = !0, Ld(v), qp(), be = !1);
  }, I = {
    p: m,
    um: de,
    m: U,
    r: Se,
    mt: Q,
    mc: W,
    pc: C,
    pbc: pe,
    n: ue,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: wy(ve)
  };
}
function $l({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ui({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Vy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ot(n) && ot(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Nr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && vh(s, a)), a.type === ml && (a.patchFlag === -1 && (a = i[o] = Nr(a)), a.el = s.el), a.type === ei && !a.el && (a.el = s.el);
    }
}
function $y(e) {
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
function Sh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sh(t);
}
function Bd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _h(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _h(t.subTree) : null;
}
const wh = (e) => e.__isSuspense;
function zy(e, t) {
  t && t.pendingBranch ? ot(e) ? t.effects.push(...e) : t.effects.push(e) : Y0(e);
}
const tt = /* @__PURE__ */ Symbol.for("v-fgt"), ml = /* @__PURE__ */ Symbol.for("v-txt"), ei = /* @__PURE__ */ Symbol.for("v-cmt"), zl = /* @__PURE__ */ Symbol.for("v-stc"), qo = [];
let Ln = null;
function Te(e = !1) {
  qo.push(Ln = e ? null : []);
}
function jy() {
  qo.pop(), Ln = qo[qo.length - 1] || null;
}
let ns = 1;
function Yd(e, t = !1) {
  ns += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function xh(e) {
  return e.dynamicChildren = ns > 0 ? Ln || Yi : null, jy(), ns > 0 && Ln && Ln.push(e), e;
}
function Le(e, t, r, n, i, o) {
  return xh(
    xe(
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
  return xh(
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
function kh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function No(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Mh = ({ key: e }) => e ?? null, sa = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Yt(e) || /* @__PURE__ */ mn(e) || at(e) ? { i: Dn, r: e, k: t, f: !!r } : e : null);
function xe(e, t = null, r = null, n = 0, i = null, o = e === tt ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mh(t),
    ref: t && sa(t),
    scopeId: Jp,
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
    ctx: Dn
  };
  return a ? (Du(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Yt(r) ? 8 : 16), ns > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Ln && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Ln.push(l), l;
}
const Be = Hy;
function Hy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === oh) && (e = ei), kh(e)) {
    const a = ro(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Du(a, r), ns > 0 && !o && Ln && (a.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = a : Ln.push(a)), a.patchFlag = -2, a;
  }
  if (Qy(e) && (e = e.__vccOpts), t) {
    t = Gy(t);
    let { class: a, style: l } = t;
    a && !Yt(a) && (t.class = gt(a)), Ft(l) && (/* @__PURE__ */ Iu(l) && !ot(l) && (l = gn({}, l)), t.style = Ot(l));
  }
  const s = Yt(e) ? 1 : wh(e) ? 128 : ey(e) ? 64 : Ft(e) ? 4 : at(e) ? 2 : 0;
  return xe(
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
function Gy(e) {
  return e ? /* @__PURE__ */ Iu(e) || ph(e) ? gn({}, e) : e : null;
}
function ro(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Ar(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Mh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ot(o) ? o.concat(sa(t)) : [o, sa(t)] : sa(t)
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
    patchFlag: t && e.type !== tt ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ro(e.ssContent),
    ssFallback: e.ssFallback && ro(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Ou(
    d,
    l.clone(d)
  ), d;
}
function Do(e = " ", t = 0) {
  return Be(ml, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Te(), Vn(ei, null, e)) : Be(ei, null, e);
}
function dr(e) {
  return e == null || typeof e == "boolean" ? Be(ei) : ot(e) ? Be(
    tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kh(e) ? Nr(e) : Be(ml, null, String(e));
}
function Nr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ro(e);
}
function Du(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ot(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Du(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !ph(t) ? t._ctx = Dn : i === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: Dn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Do(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Ar(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gt([t.class, n.class]));
      else if (i === "style")
        t.style = Ot([t.style, n.style]);
      else if (il(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(ot(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ol(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ar(e, t, r, n = null) {
  Sr(e, t, 7, [
    r,
    n
  ]);
}
const Wy = lh();
let Ky = 0;
function Uy(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || Wy, o = {
    uid: Ky++,
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
    scope: new b0(
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
    propsOptions: mh(n, i),
    emitsOptions: ch(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Tt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Tt,
    data: Tt,
    props: Tt,
    attrs: Tt,
    slots: Tt,
    refs: Tt,
    setupState: Tt,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ky.bind(null, o), e.ce && e.ce(o), o;
}
let fn = null;
const By = () => fn || Dn;
let Ia, Oc;
{
  const e = ll(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Ia = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => fn = r
  ), Oc = t(
    "__VUE_SSR_SETTERS__",
    (r) => rs = r
  );
}
const vs = (e) => {
  const t = fn;
  return Ia(e), e.scope.on(), () => {
    e.scope.off(), Ia(t);
  };
}, qd = () => {
  fn && fn.scope.off(), Ia(null);
};
function Ph(e) {
  return e.vnode.shapeFlag & 4;
}
let rs = !1;
function Yy(e, t = !1, r = !1) {
  t && Oc(t);
  const { props: n, children: i } = e.vnode, o = Ph(e);
  Iy(e, n, o, t), Ty(e, i, r || t);
  const s = o ? qy(e, t) : void 0;
  return t && Oc(!1), s;
}
function qy(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, my);
  const { setup: n } = r;
  if (n) {
    Vr();
    const i = e.setupContext = n.length > 1 ? Jy(e) : null, o = vs(e), s = ys(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = kp(s);
    if ($r(), o(), (a || e.sp) && !Bo(e) && th(e), a) {
      if (s.then(qd, qd), t)
        return s.then((l) => {
          Xd(e, l);
        }).catch((l) => {
          ul(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Xd(e, s);
  } else
    Nh(e);
}
function Xd(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ft(t) && (e.setupState = Up(t)), Nh(e);
}
function Nh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || gr);
  {
    const i = vs(e);
    Vr();
    try {
      gy(e);
    } finally {
      $r(), i();
    }
  }
}
const Xy = {
  get(e, t) {
    return dn(e, "get", ""), e[t];
  }
};
function Jy(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Up($0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Yo)
        return Yo[r](e);
    },
    has(t, r) {
      return r in t || r in Yo;
    }
  })) : e.proxy;
}
function Zy(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qy(e) {
  return at(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ G0(e, t, rs), eb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fc;
const Jd = typeof window < "u" && window.trustedTypes;
if (Jd)
  try {
    Fc = /* @__PURE__ */ Jd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ah = Fc ? (e) => Fc.createHTML(e) : (e) => e, tb = "http://www.w3.org/2000/svg", nb = "http://www.w3.org/1998/Math/MathML", Pr = typeof document < "u" ? document : null, Zd = Pr && /* @__PURE__ */ Pr.createElement("template"), rb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Pr.createElementNS(tb, e) : t === "mathml" ? Pr.createElementNS(nb, e) : r ? Pr.createElement(e, { is: r }) : Pr.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Pr.createTextNode(e),
  createComment: (e) => Pr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Pr.querySelector(e),
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
      Zd.innerHTML = Ah(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Zd.content;
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
}, ib = /* @__PURE__ */ Symbol("_vtc");
function ob(e, t, r) {
  const n = e[ib];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ea = /* @__PURE__ */ Symbol("_vod"), Ch = /* @__PURE__ */ Symbol("_vsh"), Pi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ea] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Ao(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Ao(e, !0), n.enter(e)) : n.leave(e, () => {
      Ao(e, !1);
    }) : Ao(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ao(e, t);
  }
};
function Ao(e, t) {
  e.style.display = t ? e[Ea] : "none", e[Ch] = !t;
}
const sb = /* @__PURE__ */ Symbol(""), ab = /(?:^|;)\s*display\s*:/;
function lb(e, t, r) {
  const n = e.style, i = Yt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Yt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && aa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && aa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), aa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[sb];
      s && (r += ";" + s), n.cssText = r, o = ab.test(r);
    }
  } else t && e.removeAttribute("style");
  Ea in e && (e[Ea] = o ? n.display : "", e[Ch] && (n.display = "none"));
}
const Qd = /\s*!important$/;
function aa(e, t, r) {
  if (ot(r))
    r.forEach((n) => aa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = cb(e, t);
    Qd.test(r) ? e.setProperty(
      Ii(n),
      r.replace(Qd, ""),
      "important"
    ) : e[n] = r;
  }
}
const ef = ["Webkit", "Moz", "ms"], jl = {};
function cb(e, t) {
  const r = jl[t];
  if (r)
    return r;
  let n = xn(t);
  if (n !== "filter" && n in e)
    return jl[t] = n;
  n = al(n);
  for (let i = 0; i < ef.length; i++) {
    const o = ef[i] + n;
    if (o in e)
      return jl[t] = o;
  }
  return t;
}
const tf = "http://www.w3.org/1999/xlink";
function nf(e, t, r, n, i, o = g0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(tf, t.slice(6, t.length)) : e.setAttributeNS(tf, t, r) : r == null || o && !Ap(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : vr(r) ? String(r) : r
  );
}
function rf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ah(r) : r);
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
    a === "boolean" ? r = Ap(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function zi(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function ub(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const of = /* @__PURE__ */ Symbol("_vei");
function db(e, t, r, n, i = null) {
  const o = e[of] || (e[of] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = fb(t);
    if (n) {
      const c = o[t] = mb(
        n,
        i
      );
      zi(e, a, c, l);
    } else s && (ub(e, a, s, l), o[t] = void 0);
  }
}
const sf = /(?:Once|Passive|Capture)$/;
function fb(e) {
  let t;
  if (sf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(sf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ii(e.slice(2)), t];
}
let Hl = 0;
const pb = /* @__PURE__ */ Promise.resolve(), hb = () => Hl || (pb.then(() => Hl = 0), Hl = Date.now());
function mb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Sr(
      gb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = hb(), r;
}
function gb(e, t) {
  if (ot(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const af = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? ob(e, n, s) : t === "style" ? lb(e, r, n) : il(t) ? ol(t) || db(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bb(e, t, n, s)) ? (rf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && nf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (vb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Yt(n))) ? rf(e, xn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), nf(e, t, n, s));
};
function bb(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && af(t) && at(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return af(t) && Yt(r) ? !1 : t in e;
}
function vb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = xn(t);
  return Array.isArray(r) ? r.some((i) => xn(i) === n) : Object.keys(r).some((i) => xn(i) === n);
}
const lf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ot(t) ? (r) => ia(t, r) : t;
};
function Sb(e) {
  e.target.composing = !0;
}
function cf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Gl = /* @__PURE__ */ Symbol("_assign");
function uf(e, t, r) {
  return t && (e = e.trim()), r && (e = wu(e)), e;
}
const df = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Gl] = lf(i);
    const o = n || i.props && i.props.type === "number";
    zi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Gl](uf(e.value, r, o));
    }), (r || o) && zi(e, "change", () => {
      e.value = uf(e.value, r, o);
    }), t || (zi(e, "compositionstart", Sb), zi(e, "compositionend", cf), zi(e, "change", cf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[Gl] = lf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? wu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, _b = ["ctrl", "shift", "alt", "meta"], wb = {
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
  exact: (e, t) => _b.some((r) => e[`${r}Key`] && !t.includes(r))
}, It = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = wb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, xb = /* @__PURE__ */ gn({ patchProp: yb }, rb);
let ff;
function kb() {
  return ff || (ff = Ly(xb));
}
const Lu = ((...e) => {
  const t = kb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Pb(n);
    if (!i) return;
    const o = t._component;
    !at(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Mb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Mb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pb(e) {
  return Yt(e) ? document.querySelector(e) : e;
}
const Nb = "PanoramaSuite.Debug.Diagnostics", Ab = "PanoramaSuite.Debug.ExportDiagnostics", Wl = "pano_suite.diagnostics.v1", pf = "pano_suite.diagnostics.previous.v1", Cb = 300, Ib = 2e5, Eb = 100, Ob = 20, Fb = 1e3, Tb = 2, Gs = 1024 * 1024;
function Yr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Db() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Lb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Db,
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
function Rb(e = {}) {
  const t = { ...Lb(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    d.delete(I), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((I) => {
    u.delete(I), g.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), _ = { created: 0, lost: 0, restored: 0, disposed: 0 }, X = [], j = /* @__PURE__ */ new Map();
  let J = { count: 0, maxMs: 0 }, O = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 };
  const G = [];
  function W(I, ce, b = void 0) {
    X.push(b === void 0 ? { t: t.clock(), type: I, label: ce } : { t: t.clock(), type: I, label: ce, detail: b }), X.length > Eb && X.shift();
  }
  function ee(I, ce, b, y, F) {
    if (!r || !y || !t.WeakRef) return y;
    const v = { ref: new t.WeakRef(y), label: F };
    return I.add(v), ce == null || ce.register(y, v), b.created += 1, y;
  }
  function pe(I, ce = "") {
    return ee(d, k, f, I, ce);
  }
  function D(I, ce = "") {
    return ee(u, m, g, I, ce);
  }
  function se({ label: I = "", width: ce, height: b, offscreen: y = !1 } = {}) {
    const F = globalThis.OffscreenCanvas;
    let v;
    return y && typeof F < "u" ? v = new F(ce, b) : (v = t.document().createElement("canvas"), ce !== void 0 && b !== void 0 && (v.width = ce, v.height = b)), pe(v, I);
  }
  function re(I) {
    I.width = 0, I.height = 0, r && (f.released += 1);
  }
  function Q(I = t.document(), ce = "") {
    var b;
    return D(((b = I == null ? void 0 : I.createElement) == null ? void 0 : b.call(I, "video")) || null, ce);
  }
  function K(I, ce) {
    if (!r || !I) return () => {
    };
    const b = { label: ce, lost: !1, disposed: !1 };
    h.add(b), _.created += 1, W("webgl-created", ce);
    const y = () => {
      b.disposed || (b.lost = !0, _.lost += 1, W("webglcontextlost", ce));
    }, F = () => {
      b.disposed || (b.lost = !1, _.restored += 1, W("webglcontextrestored", ce));
    };
    return I.addEventListener("webglcontextlost", y), I.addEventListener("webglcontextrestored", F), () => {
      b.disposed || (b.disposed = !0, h.delete(b), _.disposed += 1, W("webgl-disposed", ce));
    };
  }
  function T(I, ce) {
    return j.set(I, ce), () => {
      j.get(I) === ce && j.delete(I);
    };
  }
  function H() {
    return r ? t.now() : -1;
  }
  function C(I) {
    if (I < 0 || !r) return;
    const ce = t.now() - I;
    J.count += 1, J.maxMs = Math.max(J.maxMs, ce);
  }
  function $(I, ce) {
    if (ce < 0 || !r) return;
    const b = t.now() - ce, y = O.get(I) ?? { count: 0, maxMs: 0 };
    y.count += 1, y.maxMs = Math.max(y.maxMs, b), O.set(I, y);
  }
  function R() {
    let I = 0, ce = 0, b = 0, y = [0, 0];
    const F = {};
    for (const v of d) {
      const z = v.ref.deref();
      if (!z) continue;
      I += 1;
      const x = z.width * z.height;
      x > 0 && (ce += 1), b += x, x > y[0] * y[1] && (y = [z.width, z.height]);
      const L = F[v.label] ?? (F[v.label] = [0, 0]);
      L[0] += 1, L[1] += x;
    }
    return { ...f, alive: I, sized: ce, pixels: b, mb: Yr(b * 4 / Gs, 1), largest: y, byLabel: F };
  }
  function U() {
    const I = [];
    let ce = 0, b = 0;
    for (const y of u) {
      const F = y.ref.deref();
      if (!F) continue;
      ce += 1;
      const v = !F.paused && !F.ended;
      v && (b += 1), I.length < Ob && I.push({
        label: y.label,
        playing: v,
        src: !!(F.currentSrc || F.src),
        size: [F.videoWidth || 0, F.videoHeight || 0],
        ready: F.readyState ?? 0,
        connected: !!F.isConnected
      });
    }
    return { ...g, alive: ce, playing: b, list: I };
  }
  function de() {
    const I = t.now(), ce = t.memory(), b = {
      t: t.clock(),
      heap: ce ? { used: Yr(ce.usedJSHeapSize / Gs, 1), total: Yr(ce.totalJSHeapSize / Gs, 1), limit: Yr(ce.jsHeapSizeLimit / Gs, 1) } : null,
      canvas: R(),
      webgl: { ..._, alive: [...h].filter((y) => !y.lost).length },
      video: U(),
      frame: { count: J.count, maxMs: Yr(J.maxMs), longTasks: Y.count, longTaskMaxMs: Yr(Y.maxMs) },
      renders: Object.fromEntries([...O].map(([y, F]) => [y, { count: F.count, maxMs: Yr(F.maxMs) }])),
      sources: Object.fromEntries([...j].map(([y, F]) => [y, F()])),
      costMs: Yr(c, 3)
    };
    return J = { count: 0, maxMs: 0 }, O = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 }, G.push({ record: b, text: JSON.stringify(b) }), G.length > Cb && G.shift(), l += 1, l % Tb === 0 && te(), c = t.now() - I, b;
  }
  function Se(I = Ib) {
    const ce = JSON.stringify({ ...o, events: X }).slice(0, -1);
    let b = I - ce.length - 14, y = G.length;
    for (; y > 0 && b - G[y - 1].text.length - 1 >= 0; )
      y -= 1, b -= G[y].text.length + 1;
    return `${ce},"records":[${G.slice(y).map((F) => F.text).join(",")}]}`;
  }
  function te() {
    if (!o) return;
    const I = t.storage();
    if (I) {
      o.savedAt = t.clock();
      try {
        I.setItem(Wl, Se());
      } catch {
      }
    }
  }
  function N() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", te();
  }
  function ie() {
    var F;
    if (n) return i;
    n = !0;
    const I = t.storage();
    if (!I) return null;
    let ce = null;
    try {
      if (ce = I.getItem(Wl), ce === null) {
        const v = I.getItem(pf);
        return i = v === null ? null : JSON.parse(v), i;
      }
      I.setItem(pf, ce), I.removeItem(Wl), i = JSON.parse(ce);
    } catch {
      return i;
    }
    const b = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], y = b.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${b.length} records kept. Its last records:`,
      JSON.stringify(y)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((F = b.at(-1)) == null ? void 0 : F.t) || 0).toISOString()}; ${b.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(y)
    ), i;
  }
  function ue(I) {
    const ce = I === !0;
    if (ie(), ce !== r) {
      if (r = ce, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, G.length = 0, a = t.observeLongTasks((b) => {
          for (const y of b)
            Y.count += 1, Y.maxMs = Math.max(Y.maxMs, y.duration);
        }), t.addUnload(N), s = t.setInterval(de, Fb), te();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(N), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", te();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...X], records: G.map((I) => I.record) } : null,
      previous: i
    };
  }
  function ve() {
    const I = t.document(), ce = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(ce), y = I.createElement("a");
    y.href = b, y.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, y.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: se,
    releaseCanvas: re,
    trackCanvas: pe,
    createVideo: Q,
    trackVideo: D,
    watchContext: K,
    addSource: T,
    frameStart: H,
    frameEnd: C,
    renderEnd: $,
    sample: de,
    serialize: Se,
    recoverPrevious: ie,
    setEnabled: ue,
    exportData: be,
    download: ve
  };
}
const In = Rb(), nn = In.createCanvas, is = In.releaseCanvas, Kl = In.trackCanvas, Ss = In.createVideo, hf = In.trackVideo, Vb = In.addSource, $b = In.frameStart, zb = In.frameEnd;
function Ih(e, t) {
  const r = In.watchContext(e.canvas, t), n = In.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = In.frameStart(), l = o(s);
    return In.renderEnd(t, a), l;
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
const jb = {
  id: Nb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => In.setEnabled(e === !0)
}, mf = {
  id: Ab,
  label: "Export Panorama Suite diagnostics",
  function: () => In.download()
};
function ji(e, t) {
  const r = nn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Hb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function gf(e, t = 8) {
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
function Ru(e, t) {
  return nn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Jr(e, t, r) {
  if (!e) return ji(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Kt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Ul = null, Bl = null, yf = null, bf = null, Wt = null, Co = null;
function Gb() {
  if (Bl) return Bl;
  const e = 6, t = 17, r = nn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Bl = r, r;
}
function Yl(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Ul = Jr(Ul, r, n);
  const i = Ul;
  Kt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", bf !== i.ctx && (yf = i.ctx.createPattern(Gb(), "repeat"), bf = i.ctx), i.ctx.fillStyle = yf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function Wb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Kb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Ub(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Bb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Vu = 128;
function Yb(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const X = $t.get(l);
    return $t.delete(l), $t.set(l, X), X;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Ru(c, c), f = u.getContext("2d"), g = a * s, k = s + 1, m = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, _ = f.createRadialGradient(d, d, g, d, d, k);
  return _.addColorStop(0, m), _.addColorStop(1, h), f.fillStyle = _, f.fillRect(0, 0, c, c), $t.set(l, u), u;
}
function qb(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), k = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${g.toFixed(2)}:${k.toFixed(2)}:${m.toFixed(2)}`;
  if ($t.has(h)) {
    const W = $t.get(h);
    return $t.delete(h), $t.set(h, W), W;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const _ = Ru(u, f), X = _.getContext("2d"), j = X.createImageData(u, f), J = j.data, O = Math.max(0, e - t), Y = Math.max(0, Math.min(1, r)), G = 1 + g;
  for (let W = 0; W < f; W++)
    for (let ee = 0; ee < u; ee++) {
      const pe = ee + 0.5 - e, D = W + 0.5 - t, se = Math.max(Math.abs(pe) - O, 0), Q = Math.hypot(se, D) / t;
      if (Q >= 1) continue;
      const K = Q <= Y ? 1 : Math.max(0, (1 - Q) / Math.max(1e-4, 1 - Y)), T = 1 - Q, H = 1 + g * (1 - T) * (1 - T), C = 1 - k * T * T, $ = H * C / G;
      let R = 1;
      if (m > 0) {
        const Se = Math.floor((D + t) / 1.5), te = Math.floor((pe + e) / 8), N = xi(Zi(Se * 41 + 500, te * 19 + 300));
        R = 1 - m * 0.42 * N;
      }
      const U = Math.round(255 * Math.min(1, d * K * $ * R));
      if (U <= 0) continue;
      const de = (W * u + ee) * 4;
      J[de] = a, J[de + 1] = l, J[de + 2] = c, J[de + 3] = U;
    }
  return X.putImageData(j, 0, 0), $t.set(h, _), _;
}
function Zi(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function xi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Xb(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = xi(Zi(e * 17 + 3, t * 13 + 7)), g = u + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const k = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), m = Jb(e, t, a, l, r, n), h = o * 0.55;
  if (m < h) return 0;
  const X = 0.45 + 0.55 * ((m - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * k * X));
}
function Jb(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = xi(Zi(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = xi(Zi(c * 23 + 800, d * 29 + 500)), f = xi(Zi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Zb(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if ($t.has(f)) {
    const X = $t.get(f);
    return $t.delete(f), $t.set(f, X), X;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const g = Ru(c, d), k = g.getContext("2d"), m = k.createImageData(c, d), h = m.data, _ = Math.max(0, Math.min(1, r));
  for (let X = 0; X < d; X++)
    for (let j = 0; j < c; j++) {
      const J = Xb(j, X, e, t, _, u, l);
      if (J <= 0) continue;
      const O = (X * c + j) * 4;
      h[O] = o, h[O + 1] = s, h[O + 2] = a, h[O + 3] = J;
    }
  return k.putImageData(m, 0, 0), $t.set(f, g), g;
}
function Eh(e, t, r) {
  var m, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Ub(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = Qb(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Bb(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let k;
  if (n === "chisel") {
    const _ = i * a, X = i, j = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), J = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = qb(_, X, o, s, j, J, O);
  } else if (n === "crayon") {
    const _ = i * a, X = i, j = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = Zb(_, X, o, s, j);
  } else
    k = Yb(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: k, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: g, latitudeCorrection: u };
}
function Qb(e) {
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
function e1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function vf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function $u(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = Zi(t, r);
    for (let g = 0; g < d; g++) {
      const k = xi(f + g * 2) * Math.PI * 2, m = Math.sqrt(xi(f + g * 2 + 1)) * u, h = t + Math.cos(k) * m, _ = r + Math.sin(k) * m, X = Math.max(0.5, e.radiusPx * i * 0.48), j = (0.5 - _ / Math.max(1, e.desc.height)) * Math.PI, J = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(j)) : 1, O = X * e.aspect * J;
      vf(e, h, _, X, O);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  vf(e, t, r, o, l);
}
function Sf(e, t, r) {
  const n = Kb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = Eh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let g = Number(n[f].u || 0) * i;
    const k = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(g - a[f - 1].x) > i * 0.5 && (g += g < a[f - 1].x ? i : -i), a.push({ x: g, y: k });
  }
  if ($u(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const g = a[f], k = { x: (c.x + g.x) * 0.5, y: (c.y + g.y) * 0.5 };
    f === 1 ? u = os(s, d.x, d.y, k.x, k.y, u) : u = Oa(s, l, d, k, g, u), l = c, c = g, d = k;
  }
  a.length === 2 ? os(s, d.x, d.y, c.x, c.y, u) : Oa(s, l, d, c, c, u), e.restore();
}
function la(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = e1(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = Wb(n[f]);
    let k = Number(g.x || 0) * i;
    f > 0 && Math.abs(k - a[f - 1].x) > i * 0.5 && (k += k < a[f - 1].x ? i : -i), a.push({ x: k, y: Number(g.y || 0) * o }), k < l && (l = k), k > c && (c = k);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let g = 1; g < a.length; g++) e.lineTo(a[g].x + f, a[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Ws(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    la(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Sf(e, t, r) : (Co = Jr(Co, r.width, r.height), Kt(Co), Sf(Co.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Co.canvas, 0, 0), e.restore());
}
function di(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function os(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    $u(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Oa(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, g = f + c, k = f - u, m = 16;
  let h = o, _ = r.x, X = r.y;
  for (let j = 1; j <= m; j++) {
    const J = u + k * j / m, O = ((u - J) * t.x + (J - d) * r.x) / (u - d), Y = ((u - J) * t.y + (J - d) * r.y) / (u - d), G = ((f - J) * r.x + (J - u) * n.x) / (f - u), W = ((f - J) * r.y + (J - u) * n.y) / (f - u), ee = ((g - J) * n.x + (J - f) * i.x) / (g - f), pe = ((g - J) * n.y + (J - f) * i.y) / (g - f), D = ((f - J) * O + (J - d) * G) / (f - d), se = ((f - J) * Y + (J - d) * W) / (f - d), re = ((g - J) * G + (J - u) * ee) / (g - u), Q = ((g - J) * W + (J - u) * pe) / (g - u), K = ((f - J) * D + (J - u) * re) / (f - u), T = ((f - J) * se + (J - u) * Q) / (f - u);
    h = os(e, _, X, K, T, h), _ = K, X = T;
  }
  return h;
}
function t1(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const g = Eh(i, n, o), k = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", _ = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", $u(g, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: g.stampTex,
      radiusPx: g.radiusPx,
      spacingPx: g.spacingPx,
      aspect: g.aspect,
      angle: g.angle,
      stampKind: g.stampKind,
      scatter: g.scatter,
      latitudeCorrection: g.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: m,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: _,
      pointCount: 1
    }, cn(e);
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
  l.pointCount === 1 ? l.distSinceStamp = os(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Oa(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function yl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = ji(t, r), s = {
    descriptor: n,
    committedMask: ji(t, r),
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
    committedPaint: ji(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = ji(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let g = null;
  function k(re) {
    return {
      actionGroupId: re,
      descriptor: n,
      committedPaint: ji(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(re) {
    let Q = i.get(re);
    return Q || (Q = k(re), i.set(re, Q)), Q;
  }
  function h(re) {
    return d === "mask" ? s : c ? m(c) : a;
  }
  function _(re) {
    var $;
    const Q = !u || u.length !== re.length || re.some((R, U) => R !== u[U]), K = d === "paint" && (($ = c ? i.get(c) : a) == null ? void 0 : $.activeStroke) || null;
    let T = s.displayDirty || a.displayDirty || Q;
    for (const R of re) {
      const U = i.get(R);
      if (U != null && U.displayDirty) {
        T = !0;
        break;
      }
    }
    if (K && (T = !0), !T) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const R of re) {
      const U = i.get(R);
      U && (U.displayDirty = !1);
    }
    u = [...re];
    const H = l.ctx;
    Kt(l);
    const C = !!(K != null && K.isEraser);
    for (const R of re) {
      const U = i.get(R);
      if (!U) continue;
      const Se = c === U.actionGroupId && d === "paint" ? U.activeStroke : null;
      if (C)
        Wt = Jr(Wt, t, r), Kt(Wt), Wt.ctx.drawImage(U.committedPaint.canvas, 0, 0), di(Wt.ctx, o.canvas), H.drawImage(Wt.canvas, 0, 0);
      else if (H.drawImage(U.committedPaint.canvas, 0, 0), Se) {
        const te = U.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Se.strokeOpacity ?? 1));
        H.save(), H.globalAlpha = te, H.drawImage(o.canvas, 0, 0), H.restore();
      }
    }
  }
  function X(re) {
    var K, T, H, C, $;
    for (const R of i.values())
      Kt(R.committedPaint), Kt(R.currentStroke), R.activeStroke = null, cn(R);
    Kt(s.committedMask), Kt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const Q = [
      ...Array.isArray((T = (K = re == null ? void 0 : re.painting) == null ? void 0 : K.paint) == null ? void 0 : T.strokes) ? re.painting.paint.strokes : [],
      ...Array.isArray((C = (H = re == null ? void 0 : re.painting) == null ? void 0 : H.mask) == null ? void 0 : C.strokes) ? re.painting.mask.strokes : []
    ];
    for (const R of Q) {
      if ((($ = R == null ? void 0 : R.targetSpace) == null ? void 0 : $.kind) !== "ERP_GLOBAL") continue;
      const U = String((R == null ? void 0 : R.layerKind) || "paint"), Se = String((R == null ? void 0 : R.toolKind) || "pen") === "eraser";
      if (U === "mask") {
        const te = s.descriptor;
        Se ? (Wt = Jr(Wt, te.width, te.height), Kt(Wt), Ws(Wt.ctx, R, te), di(s.committedMask.ctx, Wt.canvas)) : (Ws(s.committedMask.ctx, R, te), s.painted = !0);
        continue;
      }
      if (Se) {
        Wt = Jr(Wt, n.width, n.height), Kt(Wt), Ws(Wt.ctx, R, n);
        for (const te of i.values())
          di(te.committedPaint.ctx, Wt.canvas), cn(te);
      } else {
        const te = String((R == null ? void 0 : R.actionGroupId) || "__default__"), N = m(te), ie = N.descriptor;
        Ws(N.committedPaint.ctx, R, ie), cn(N);
      }
    }
    _([...i.keys()]);
  }
  function j(re, Q) {
    d = String((re == null ? void 0 : re.layerKind) || "");
    const K = String((re == null ? void 0 : re.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Kt(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const T = K ? a : m(String((re == null ? void 0 : re.actionGroupId) || "__default__"));
      c = K ? "" : String((re == null ? void 0 : re.actionGroupId) || "__default__"), Kt(T.currentStroke), T.activeStroke = null, cn(T);
    }
  }
  function J(re, Q) {
    var U;
    const K = String((re == null ? void 0 : re.layerKind) || "paint"), T = String((re == null ? void 0 : re.toolKind) || "") === "eraser", H = K === "mask" ? s : T ? a : m(String((re == null ? void 0 : re.actionGroupId) || c || "__default__")), C = H.activeStroke, $ = H.descriptor;
    if (C && C.pointCount > 1) {
      const de = H.currentStroke.ctx;
      de.globalCompositeOperation = "source-over";
      const Se = {
        ctx: de,
        stampTex: C.stampTex,
        radiusPx: C.radiusPx,
        spacingPx: C.spacingPx,
        desc: $,
        aspect: C.aspect,
        angle: C.angle,
        stampKind: C.stampKind,
        scatter: C.scatter,
        latitudeCorrection: C.latitudeCorrection
      };
      C.pointCount === 2 ? os(Se, C.lastMidX, C.lastMidY, C.prev.x, C.prev.y, C.distSinceStamp) : Oa(Se, C.pprev, { x: C.lastMidX, y: C.lastMidY }, C.prev, C.prev, C.distSinceStamp);
    }
    H.lassoPreviewActive && (Kt(H.currentStroke), la(H.currentStroke.ctx, re, $), H.lassoPreviewActive = !1);
    const R = K === "mask" ? s.committedMask : H.committedPaint;
    if (T && K === "paint")
      for (const de of i.values())
        di(de.committedPaint.ctx, H.currentStroke.canvas), cn(de);
    else if (T)
      di(R.ctx, H.currentStroke.canvas);
    else {
      K === "mask" && (s.painted = !0);
      const de = Math.max(0, Math.min(1, (C == null ? void 0 : C.strokeOpacity) ?? 1));
      R.ctx.save(), R.ctx.globalAlpha = de, R.ctx.drawImage(H.currentStroke.canvas, 0, 0), R.ctx.restore();
    }
    Hb() && (String((re == null ? void 0 : re.toolKind) || ""), String(($ == null ? void 0 : $.kind) || ""), Number(($ == null ? void 0 : $.width) || 0), Number(($ == null ? void 0 : $.height) || 0), String(((U = re == null ? void 0 : re.targetSpace) == null ? void 0 : U.viewMode) || ""), Number((re == null ? void 0 : re.aspect) ?? 1), gf(H.currentStroke.canvas), gf(R.canvas), void 0), Kt(H.currentStroke), H.activeStroke = null, cn(H), f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function O(re) {
    if (d === "mask")
      Kt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Kt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const Q = i.get(c);
      Q && (Kt(Q.currentStroke), Q.activeStroke = null, Q.lassoPreviewActive = !1, cn(Q));
    }
    f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function Y(re, Q) {
    var T;
    if (d = String((re == null ? void 0 : re.layerKind) || ""), String(((T = re == null ? void 0 : re.geometry) == null ? void 0 : T.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Kt(s.currentStroke), la(s.currentStroke.ctx, re, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const H = String((re == null ? void 0 : re.toolKind) || "") === "eraser", C = H ? a : m(String((re == null ? void 0 : re.actionGroupId) || c || "__default__"));
        c = H ? "" : String((re == null ? void 0 : re.actionGroupId) || c || "__default__"), Kt(C.currentStroke), la(C.currentStroke.ctx, re, C.descriptor), C.lassoPreviewActive = !0, cn(C);
      }
      _([...i.keys()]);
    }
  }
  function G(re) {
    return _(re ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function W(re) {
    return i.get(String(re)) ?? null;
  }
  function ee() {
    return [...i.keys()];
  }
  function pe(re) {
    var de;
    const Q = i.get(String(re));
    if (!Q) return null;
    const K = d === "paint" && c === Q.actionGroupId, T = d === "paint" && ((de = c ? i.get(c) : a) == null ? void 0 : de.activeStroke) || null, H = !!(T != null && T.isEraser), C = K ? Q.activeStroke : null;
    if (!H && !C) return Q.committedPaint.canvas;
    const $ = `${Q.revision}:${a.revision}:${H}`, R = f.get(Q.actionGroupId);
    if ((R == null ? void 0 : R.key) === $) return R.surface.canvas;
    const U = Jr((R == null ? void 0 : R.surface) ?? null, t, r);
    return Kt(U), U.ctx.drawImage(Q.committedPaint.canvas, 0, 0), H ? di(U.ctx, o.canvas) : (U.ctx.save(), U.ctx.globalAlpha = Q.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, C.strokeOpacity ?? 1)), U.ctx.drawImage(o.canvas, 0, 0), U.ctx.restore()), f.set(Q.actionGroupId, { key: $, surface: U }), U.canvas;
  }
  function D() {
    const re = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!re || re.isEraser) ? null : `${s.revision}:${!!re}`;
  }
  function se() {
    const re = D();
    if (re === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === re) return g.surface.canvas;
    const Q = Jr((g == null ? void 0 : g.surface) ?? null, t, r);
    Kt(Q);
    const K = d === "mask" ? s.activeStroke : null;
    return K != null && K.isEraser ? (Wt = Jr(Wt, t, r), Kt(Wt), Wt.ctx.drawImage(s.committedMask.canvas, 0, 0), di(Wt.ctx, o.canvas), Yl(Q.ctx, Wt.canvas)) : (Yl(Q.ctx, s.committedMask.canvas), K && Yl(Q.ctx, o.canvas)), g = { key: re, surface: Q }, Q.canvas;
  }
  return {
    rebuildCommitted: X,
    beginStroke: j,
    appendStrokePoint: t1,
    updateActiveStroke: Y,
    commitActiveStroke: J,
    cancelActiveStroke: O,
    getErpTarget: G,
    ensureTarget: h,
    getGroupTarget: W,
    getGroupDisplayCanvas: pe,
    getMaskDisplayCanvas: se,
    getMaskDisplayRevision: D,
    getAllGroupIds: ee
  };
}
function Ee(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function zu(e, t) {
  let r = jt(t) - jt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Tc = 3;
function Io(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Fa(e, t = 0) {
  const r = Io(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Io(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Io(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Io(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Io(t) || 0);
}
function Oh(e) {
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
const _f = Math.PI / 180, wf = 0.12, n1 = Tc, r1 = 35, i1 = 140, Lo = 100, o1 = 20, xf = 0.8;
function s1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ee(Number(e || Lo), 1, 179) * _f;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / _f;
}
function ju(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Lo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(X, j = null) {
    a && a(X, j);
  }
  function d(X, j, J = null, O = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(X || 0), l.drag.lastY = Number(j || 0), l.drag.lastTs = Number(O || performance.now()), l.drag.pointerId = J, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: J }), !0;
  }
  function u(X, j, J = "pano", O = performance.now()) {
    if (!l.drag.active) return !1;
    const Y = Number(O || performance.now()), G = Number(X), W = Number(j), ee = G - l.drag.lastX, pe = W - l.drag.lastY;
    l.drag.lastX = G, l.drag.lastY = W, l.drag.lastTs = Y;
    const D = n() || { x: 1, y: 1 }, se = Number(D.x || 1), re = Number(D.y || 1), Q = { ...t() };
    let K = 0, T = 0;
    if (J === "unwrap") {
      const C = i() || { w: 1, h: 1 }, $ = Math.max(1, Number(C.w || 1)), R = Math.max(1, Number(C.h || 1)), U = ee / $, de = pe / R;
      K = -U * 360 * se, T = de * 180 * re;
    } else {
      const C = o() || { w: 0, h: 0 }, $ = Math.max(1, Number(C.w || 0)), R = Math.max(1, Number(C.h || 0));
      if ($ > 1 && R > 1) {
        const U = Ee(Number(Q.fov || Lo), 1, 179), de = Ee(s1(U, $, R), 0.1, 179);
        K = -(ee / $) * U * se, T = pe / R * de * re;
      } else
        K = -ee * wf * se, T = pe * wf * re;
    }
    Q.yaw = jt(Number(Q.yaw || 0) + K), Q.pitch = Ee(Number(Q.pitch || 0) + T, -89.9, 89.9), r(Q), l.velHistory.push({ ts: Y, yaw: Q.yaw, pitch: Q.pitch });
    let H = 0;
    for (; H < l.velHistory.length - 1 && l.velHistory[H].ts < Y - 100; ) H++;
    return H > 0 && l.velHistory.splice(0, H), l.inertia.active = !1, l.inertia.lastTs = Y, s(), c("drag", { phase: "move", dx: ee, dy: pe, dYaw: K, dPitch: T }), !0;
  }
  function f(X = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const j = Number(X || performance.now());
    l.drag.lastTs = j;
    const J = l.velHistory.filter((Y) => j - Y.ts <= 80);
    if (J.length >= 2) {
      const Y = J[0], G = J.at(-1), W = Math.max(1e-3, (G.ts - Y.ts) / 1e3);
      let ee = G.yaw - Y.yaw;
      ee > 180 && (ee -= 360), ee < -180 && (ee += 360), l.inertia.vx = ee / W, l.inertia.vy = (G.pitch - Y.pitch) / W;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const O = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = O > o1, l.inertia.lastTs = j, c("drag", { phase: "end", speed: O, inertiaActive: l.inertia.active }), !0;
  }
  function g(X = performance.now()) {
    if (!l.inertia.active) return !1;
    const j = Number(X || performance.now()), J = Math.max(1e-3, (j - (l.inertia.lastTs || j)) / 1e3);
    l.inertia.lastTs = j;
    const O = { ...t() };
    O.yaw = jt(Number(O.yaw || 0) + l.inertia.vx * J), O.pitch = Ee(Number(O.pitch || 0) + l.inertia.vy * J, -89.9, 89.9);
    const Y = Math.exp(-5.5 * J);
    return l.inertia.vx *= Y, l.inertia.vy *= Y, Math.abs(l.inertia.vx) < xf && Math.abs(l.inertia.vy) < xf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(O), s(), l.inertia.active;
  }
  function k() {
    const X = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], X;
  }
  function m(X) {
    const j = Math.sign(Number(X || 0));
    if (!j) return !1;
    const J = { ...t() }, O = Number(J.fov || Lo);
    return J.fov = Ee(O + j * n1, r1, i1), r(J), s(), c("wheel", { deltaSign: j, fovBefore: O, fovAfter: J.fov }), !0;
  }
  function h(X, j = 0) {
    return m(Fa(X, j));
  }
  function _() {
    r({ yaw: 0, pitch: 0, fov: Lo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: g,
    stopMotion: k,
    applyWheel: m,
    applyWheelEvent: h,
    resetView: _
  };
}
const wt = Math.PI / 180, Zt = 180 / Math.PI;
function Un(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ta(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Da(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function ql(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Hu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function Cn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Un(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function uo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Un(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Un(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Un(a * l, c, s * l)
  };
}
function La(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Et(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function a1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function l1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Et(n.z_index ?? n.zIndex, t.length);
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
function c1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function u1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Et(e.t, 0), n = Et(e.widthScale, null), i = Et(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Et(e.u, null), s = Et(e.v, null);
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
    const o = Et(e.u, null), s = Et(e.v, null);
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
function Ks(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = u1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function d1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Ks(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Ks(e.points, t, 1);
  if (!o) return null;
  const s = Ks(e.rawPoints, t, 1), a = Ks(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function f1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = c1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = d1(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Et(e.size, null), s = Et(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = Et(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Et(f.r, 0))),
      g: Math.max(0, Math.min(1, Et(f.g, 0))),
      b: Math.max(0, Math.min(1, Et(f.b, 0))),
      a: Math.max(0, Math.min(1, Et(f.a, 1)))
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
    hardness: Et(e.hardness, null),
    flow: Et(e.flow, null),
    spacing: Et(e.spacing, null),
    createdAt: Math.trunc(Et(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function kf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = f1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function p1(e) {
  if (!e || typeof e != "object") return null;
  const t = Et(e.u0, null), r = Et(e.v0, null), n = Et(e.u1, null), i = Et(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function h1(e) {
  const t = e || {};
  return {
    du: Et(t.du, 0) ?? 0,
    dv: Et(t.dv, 0) ?? 0,
    rot_deg: Et(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Et(t.scale, 1) ?? 1)
  };
}
function m1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = p1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Et(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: h1(e.transform)
  } : null;
}
function g1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = m1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function fo(e) {
  const t = a1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: l1(e.groups),
    paint: kf(e.paint, "paint"),
    mask: kf(e.mask, "mask"),
    raster_objects: g1(e.raster_objects)
  };
}
const Bn = 1, Yn = 179, Dc = 85;
function bl(e) {
  const t = ((st(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Fh(e, t) {
  let r = st(e, 0) - st(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Th(e, t, { shiftKey: r = !1 } = {}) {
  let n = st(e, 0) + st(t, 0) * Zt;
  return r && (n = Math.round(n / 15) * 15), bl(n);
}
function st(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ii(e = {}) {
  const t = Ee(st(e.hFOV_deg || 90, 90), Bn, Yn), r = Ee(st(e.vFOV_deg || 60, 60), Bn, Yn), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
  return {
    yawDeg: st(e.yaw_deg, 0),
    pitchDeg: st(e.pitch_deg, 0),
    rollDeg: st(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Ni(e, t) {
  const r = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ii(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function Gu(e, t) {
  const r = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, st(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Wu(e, t) {
  const r = Math.max(1e-12, st(t, 1)), n = Math.max(1e-6, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ee(2 * Math.atan(n / (2 * r)) * Zt, Bn, Yn), s = Ee(2 * Math.atan(i / (2 * r)) * Zt, Bn, Yn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function y1(e, t, r) {
  const n = st(e == null ? void 0 : e.x, 0), i = st(e == null ? void 0 : e.y, 0), o = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ii(t), l = Math.max(1e-12, st(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function Ku(e, t, r = Dc) {
  const n = Math.max(1e-12, st(t, 1)), i = Ee(st(r, Dc), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Dh(e, t, r) {
  const n = Math.max(1e-12, st(t, 1));
  return {
    x: (st(r == null ? void 0 : r.x, 0) - st(e == null ? void 0 : e.x, 0)) / n,
    y: -(st(r == null ? void 0 : r.y, 0) - st(e == null ? void 0 : e.y, 0)) / n
  };
}
function b1(e, t) {
  const r = Ee(st(e, 90), Bn, Yn), n = Math.max(1e-6, st(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * Zt,
    Bn,
    Yn
  );
}
function ca(e, t) {
  const r = Ee(st(e, 60), Bn, Yn), n = Math.max(1e-6, st(t, 1));
  return Ee(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * Zt,
    Bn,
    Yn
  );
}
function Mf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function v1(e, t) {
  const r = Mf(e, 1), n = Mf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Ei(e) {
  const t = Ee(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ee(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function ki(e) {
  const t = Ei(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || v1(t, 1);
}
function Uu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ki(t), t;
}
function Lh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ee(s, Bn, Yn) : Ee(Math.min(42, st(i, 100) * 0.42), 8, 96);
  return Uu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: st(t, 0),
    pitch_deg: Ee(st(r, 0), -89.9, 89.9),
    roll_deg: bl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Fr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ki(e);
}
function Rh(e, t) {
  const r = ii(e), n = st(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Zt, o = 2 * Math.atan(r.tanHalfY * n) * Zt;
  return i < Bn || i > Yn || o < Bn || o > Yn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Vh(e, t, r = Tc) {
  const n = Math.sign(st(t, 0)), i = Math.abs(st(r, Tc));
  if (!n || !(i > 0)) return null;
  const o = ii(e), s = o.hFovDeg + n * i;
  if (s < Bn || s > Yn) return null;
  const a = Math.tan(s * wt * 0.5);
  return Rh(e, a / o.tanHalfX);
}
function $h(e, t) {
  const r = ii(e), n = uo(r.yawDeg, r.pitchDeg, r.rollDeg), i = st(t == null ? void 0 : t.x, 0), o = st(t == null ? void 0 : t.y, 0);
  return Hu(Ta(Ta(n.fwd, Da(n.right, i)), Da(n.up, o)));
}
function S1(e) {
  return Un(e.x, e.y, -e.z);
}
function ua(e) {
  return Un(e.x, e.y, -e.z);
}
function kn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = uo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function zh(e) {
  const t = ua(Un(e[0][0], e[1][0], e[2][0])), r = ua(Un(e[0][1], e[1][1], e[2][1])), n = ua(Un(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * Zt, pitchDeg: o * Zt, rollDeg: l * Zt };
}
function ss(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function oi(e) {
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
function Us(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const vi = 1e-6, Lc = 1e-6, _1 = 1e-9;
function as(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function w1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    as(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return as(0, n, o, 1, 0.5 * (s + a));
}
function io(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function oo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, g, k) => f + g * a[k], 0) < 0) return r.map(() => 0);
  const l = s.map((f, g) => (f * o + a[g] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((g, k) => g + k * k, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function jh(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  io(e, n) && (l = oo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return io(e, n + 1) && (c = oo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function Hh(e, t, r, n, i) {
  const [[o], [s]] = jh(e, t, r.map((a) => [a]), n);
  return as(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function x1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = jh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => as(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Ra([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function k1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Xl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function M1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Rc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ui(e, t) {
  return M1(Ra([-e[0], -e[1], -e[2], e[3]], t));
}
function Jl(e, t, r) {
  return Ra(e, Rc(Ui(e, t).map((n) => r * n)));
}
function Zl(e, t) {
  const r = k1(e, t);
  if (Math.abs(r) > Lc) return r < 0;
  const [n, i, o] = Ui(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Lc) return s < 0;
  return !1;
}
function Bs(e) {
  const { x: t, y: r, z: n, w: i } = oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Vc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function P1(e, t, r, n) {
  const i = Bs(e[r].value);
  let o = Bs(e[r + 1].value);
  Zl(i, o) && (o = Xl(o));
  const s = t[r + 1] - t[r], a = Ui(i, o);
  let l = a;
  if (io(e, r)) {
    let O = Bs(e[r - 1].value);
    Zl(O, i) && (O = Xl(O)), l = oo(t, r, Ui(i, O), a).map((Y) => Y * s);
  }
  let c = a;
  if (io(e, r + 1)) {
    let O = Bs(e[r + 2].value);
    Zl(o, O) && (O = Xl(O)), c = oo(t, r + 1, Ui(o, i), Ui(o, O)).map((Y) => Y * s);
  }
  const d = Ra(i, Rc(l.map((O, Y) => 0.5 * (O - a[Y])))), u = Ra(o, Rc(a.map((O, Y) => 0.5 * (O - c[Y])))), [f, g, k, m] = Jl(Jl(i, o, n), Jl(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: _, rollDeg: X } = zh(ss({ x: f, y: g, z: k, w: m })), j = e[r].value, J = e[r + 1].value;
  return {
    yaw_deg: Vc(h, j.yaw_deg, J.yaw_deg, n),
    pitch_deg: _,
    roll_deg: Vc(X, j.roll_deg, J.roll_deg, n)
  };
}
function ls(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Va(e) {
  return Math.sqrt(ls(e, e));
}
function $a(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Gh(e, t) {
  const r = ls(e, t), n = t.map((s, a) => s - r * e[a]), i = Va(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Hi(e, t) {
  const r = Va(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Ys(e, t, r) {
  return Hi(e, Gh(e, t).map((n) => r * n));
}
function Ql(e, t) {
  const r = $a(e[t].value), n = $a(e[t + 1].value), i = ls(r, n), o = i < 0 && Va(n.map((l, c) => l - i * r[c])) <= Lc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = Gh(r, n);
  const a = Va(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function N1(e, t, r, n) {
  const i = $a(e[r].value), o = $a(e[r + 1].value), [s, a, l] = Ql(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  io(e, r) && (c = oo(t, r, Ql(e, r - 1)[1].map((j) => -j), c).map((j) => j * u)), io(e, r + 1) && (d = oo(t, r + 1, d.map((j) => -j), Ql(e, r + 1)[0]).map((j) => j * u));
  let f, g, k;
  if (l) {
    const j = Math.PI, J = as(0, ls(c, s) / j / 3, j - ls(d, a) / j / 3, j, n);
    [f, g, k] = Hi(i, s.map((O) => J * O / j));
  } else {
    const j = Ys(Hi(i, c.map((Y) => Y / 3)), Hi(o, d.map((Y) => -Y / 3)), n), J = Ys(Hi(i, c.map((Y) => n * Y / 3)), j, n), O = Ys(j, Hi(o, d.map((Y) => -(1 - n) * Y / 3)), n);
    [f, g, k] = Ys(J, O, n);
  }
  const m = Math.hypot(f, k), h = e[r].value.yaw_deg, _ = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= _1 ? h + (_ - h) * n : Vc(Math.atan2(f, k) * 180 / Math.PI, h, _, n), pitch_deg: Math.atan2(g, m) * 180 / Math.PI };
}
function A1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Hh(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function C1(e, t, r, n) {
  return Hh(e, t, e.map((i) => i.value), r, n);
}
const I1 = { position: x1, rotation: P1, direction: N1, size: A1 };
function Ht(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Us(e[t].value);
  if (r <= n[0].frame + vi) return Us(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - vi) return Us(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + vi; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= vi || s.easing === "hold") return Us(s.value);
  const a = n.map((c) => c.frame), l = w1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (I1[t] ?? C1)(n, a, o, l);
}
function $c(e) {
  return Math.min(179, Math.max(0.1, e));
}
function E1(e) {
  return Math.min(1, Math.max(0, e));
}
function Wh(e) {
  return Math.max(1e-6, e);
}
function Kh(e, t) {
  return t - (e.start - e.in);
}
function po(e, t) {
  return t >= e.start - vi && (e.duration === null || t < e.start + e.duration - vi);
}
function vl(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: $c(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function _s(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Kh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : vl(n, r),
    scene: {
      active: i.visible && po(i.clip, r),
      clip_frame: o,
      position: Ht(i, "position", o),
      ...Ht(i, "rotation", o),
      scale: Wh(Ht(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Ai(s, r))
  };
}
function O1(e, t) {
  if (e.placement === "world")
    return {
      position: Ht(e, "position", t),
      ...Ht(e, "rotation", t),
      scale: Wh(Ht(e, "scale", t))
    };
  const r = Ht(e, "size", t);
  return {
    ...Ht(e, "direction", t),
    roll_deg: Ht(e, "roll", t),
    hFOV_deg: $c(r.hFOV_deg),
    vFOV_deg: $c(r.vFOV_deg)
  };
}
function Ai(e, t) {
  const r = Kh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && po(e.clip, t),
    clip_frame: r,
    ...O1(e, r),
    opacity: E1(Ht(e, "opacity", r))
  };
}
const F1 = 2, T1 = ["sky", "world"], zc = ["perspective", "erp"], D1 = ["input", "output", "temp"], Uh = [0.42, 0, 0.58, 1], Bh = 1, Bu = 1e3, jc = 1e7, Yu = jc;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Bt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function qu(e, t) {
  const r = Bt(e, t);
  return r !== null && r > 0 ? r : t;
}
function En(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Sl(e) {
  const t = Bt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function da(e) {
  const t = Sl(e);
  return t === null ? null : En(t, -jc, jc);
}
function ho(e) {
  const t = qu(e, null);
  return t === null ? null : En(t, Bh, Bu);
}
function Yh(e) {
  const t = Sl(e);
  return t !== null && t >= 1 ? Math.min(t, Yu) : null;
}
function cs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function qh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Bt(r, null));
  return t.includes(null) ? null : t;
}
function Xh(e) {
  return qh(e) || [0, 0, 0];
}
function Jh(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: En(Bt(t.pitch_deg, 0), -90, 90),
    roll_deg: Bt(t.roll_deg, 0)
  };
}
function L1(e) {
  return En(Bt(e, 90), 0.1, 179);
}
function R1(e) {
  return qu(e, 1);
}
function V1(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: En(Bt(t.pitch_deg, 0), -90, 90)
  };
}
function $1(e) {
  return Bt(e, 0);
}
function z1(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: En(Bt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: En(Bt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Zh(e) {
  return En(Bt(e, 1), 0, 1);
}
const _l = [["position", Xh], ["rotation", Jh], ["fov", L1]], wl = [["position", Xh], ["rotation", Jh], ["scale", R1]], Xu = [["direction", V1], ["roll", $1], ["size", z1], ["opacity", Zh]], Ju = [...wl, ["opacity", Zh]];
function j1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Bt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Uh];
}
function H1(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = qh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function G1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = da(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: j1(i.easing) }, a = r ? H1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Zu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: G1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Qh(e) {
  const t = tn(e) ? e : {}, r = da(t.start), n = da(t.in), i = da(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function W1(e) {
  const t = tn(e) ? e : {}, r = En(Bt(t.x0, 0), 0, 1), n = En(Bt(t.y0, 0), 0, 1), i = En(Bt(t.x1, 1), 0, 1), o = En(Bt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function K1(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: D1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function U1(e) {
  const t = K1(e.source);
  if (!t) return null;
  const r = T1.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Qh(e.clip),
    visible: cs(e.visible, !0),
    locked: cs(e.locked, !1),
    crop: W1(e.crop),
    ...Zu(e, n ? Ju : Xu)
  };
  return n || (i.z_index = Sl(e.z_index) ?? 0), i;
}
function B1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const s = tn(o) ? U1(o) : null;
    if (s) {
      if (s.source.kind === "port") {
        if (r) continue;
        r = !0;
      }
      t.push(s);
    }
  }
  const n = /* @__PURE__ */ new Set();
  for (const o of t)
    typeof o.id == "string" && o.id && !n.has(o.id) ? n.add(o.id) : o.id = null;
  let i = 1;
  for (const o of t)
    if (o.id === null) {
      for (; n.has(`sticker_${i}`); ) i += 1;
      o.id = `sticker_${i}`, n.add(o.id);
    }
  return t;
}
function Y1(e) {
  if (!tn(e)) return null;
  const t = zc.includes(e.projection) ? e.projection : zc[0];
  return { aspect: qu(e.aspect, 1), projection: t, visible: cs(e.visible, !0), ...Zu(e, _l) };
}
function za(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: F1,
    timeline: {
      fps: ho(t.fps) ?? 24,
      length: Yh(t.length)
    },
    camera: Y1(e.camera),
    scene: { clip: Qh(r.clip), visible: cs(r.visible, !0), ...Zu(r, wl) },
    stickers: B1(e.stickers),
    painting: fo(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: cs(e.painting_visible, !0)
  };
}
function q1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(r)) return null;
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
  if (!tn(t)) return null;
  const r = En(Bt(t.hFOV_deg, 90), 1, 179), n = En(Bt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function J1(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Bt(n.z_index, 0) - Bt(i.z_index, 0)), za({
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
function jr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return za({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? J1(t) : za(t);
}
const ec = {
  state: { painting_visible: !0 },
  camera: { projection: zc[0], visible: !0 },
  scene: { visible: !0 }
};
function tc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Hc(e) {
  return JSON.stringify({
    ...tc(e, ec.state),
    camera: e.camera && tc(e.camera, ec.camera),
    scene: tc(e.scene, ec.scene)
  });
}
function nc(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function Pf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Qu(e, t) {
  const r = ho(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => Sl(a * n), { length: o } = e.timeline, s = Pf(e.scene.clip, i);
  return za({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...nc(e.camera, _l, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...nc(e.scene, wl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Pf(a.clip, i), u = a.placement === "world" ? Ju : Xu;
      return { ...a, clip: l, ...nc(a, u, i, c, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function rc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function em(e) {
  return Array.isArray(e) ? [...e] : e;
}
function tm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= vi);
}
function nm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? em(e.keyframes[n - 1].easing) : [...Uh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function hn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = rc(i.value, n);
    return;
  }
  const o = tm(i, r);
  o ? o.value = rc(o.value, n) : nm(i, r, rc(Ht(e, t, r), n));
}
function mo(e) {
  return e.placement === "world" ? Ju.map(([t]) => t) : e.placement === "sky" ? Xu.map(([t]) => t) : (e.clip ? wl : _l).map(([t]) => t);
}
function Z1(e, t) {
  for (const r of mo(e))
    tm(e[r], t) || nm(e[r], t, Ht(e, r, t));
}
function Q1(e) {
  const t = mo(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function ic(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function ev(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function tv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Ht(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function nv(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const s of t) {
    const a = e[s], l = a.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), c = new Set(l.map((d) => d.frame));
    a.keyframes = [
      ...a.keyframes.filter((d) => !o.has(d.frame) && !c.has(d.frame)),
      ...l
    ].sort((d, u) => d.frame - u.frame);
  }
  return n;
}
function rm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function rv(e, t, r) {
  const n = rm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function iv(e, t, r, n) {
  for (const i of rm(e, t, r)) i.easing = em(n);
}
function ov(e, t) {
  e.start = Math.max(0, e.start + t);
}
function sv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function av(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function lv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Gc(e) {
  return mo(e).map((t) => e[t]);
}
function ja(e) {
  return Gc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !lv(e.clip);
}
function im(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(ja);
}
const cv = 1e5;
function om(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of Gc(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of Gc(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : cv;
}
function uv(e) {
  return e > 0 ? ho(Math.min(e, Bu)) : null;
}
function dv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Yh(Math.max(1, Math.min(e, Yu)));
}
const oc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], fv = 2e3;
function pv(e, t, r = 56) {
  const n = oc.find((o) => o * t >= r) || oc[oc.length - 1], i = [];
  for (let o = 0; o < e && i.length < fv; o += n) i.push(o);
  return i;
}
function hv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let qs = { text: null, parsed: null };
function On(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ha(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function mv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: On(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: fo(null),
    painting_layer: null,
    ui_settings: Ha(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function sm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function gv(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function yv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function bv(e) {
  return Array.isArray(e) ? e.map((t) => Uu(t)) : [];
}
function vv(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function am(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = mv(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (qs.text === i ? o = qs.parsed : (o = JSON.parse(i), qs = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: gv(o.assets),
      stickers: yv(o.stickers),
      shots: bv(o.shots),
      painting: fo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ha(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = Ha({ ...a.ui_settings, ...s })), a.output_preset = sm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = On(r.coverage), delete a.editor_history, a;
  } catch {
    return qs = { text: i, parsed: null }, n;
  }
}
function Sv(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function _v(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function wv(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function lm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = ho(t.fps);
  let l;
  try {
    l = jr(e);
  } catch {
    l = jr(null);
  }
  return a && a !== l.timeline.fps && (l = Qu(l, a)), {
    ...l,
    coverage: On(i),
    bg_color: n,
    output_preset: sm(r),
    ui_settings: Ha(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function xv(e, t) {
  const r = Qu(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of mo(o)) o[a].keyframes = s[a].keyframes;
    }
}
function cm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function ed(e, t, r = null) {
  const n = Ai(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: cm(e, n, r), rot_deg: n.roll_deg };
}
const kv = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Nf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function Mv(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[kv[r]].keyframes.length));
}
function um(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Nf(r, ["yaw_deg", "pitch_deg"]), o = Nf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && hn(e, "direction", n, i), r.rot_deg !== void 0 && hn(e, "roll", n, r.rot_deg), Object.keys(o).length && hn(e, "size", n, o);
}
const xl = ["position_x", "position_y", "position_z"], td = "camera";
function dm(e, t) {
  const r = vl(e, t);
  return Uu({
    id: td,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: b1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Pv(e) {
  return jr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: jt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Nv(e) {
  return e - 360 * Math.round(e / 360);
}
function Av(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + Nv(r[o] - n[o]));
  Object.keys(i).length && hn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && hn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && hn(e, "position", t, [...r.position]);
}
function Cv(e, t) {
  const r = Ht(e, "position", t), n = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(xl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function Iv(e, t, r, n) {
  const i = xl.indexOf(r);
  if (i >= 0) {
    const o = Ht(e, "position", t);
    o[i] = n, hn(e, "position", t, o);
  } else r === "hFOV_deg" ? hn(e, "fov", t, n) : hn(e, "rotation", t, { [r]: n });
}
function Ev(e, t, r) {
  hn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function Ov(e, t) {
  const r = Ai(e, t);
  return {
    ...Object.fromEntries(xl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function Fv(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = xl.indexOf(r);
  if (o >= 0) {
    const s = Ht(e, "position", i);
    s[o] = n, hn(e, "position", i, s);
  } else r === "scale" ? hn(e, "scale", i, n) : r === "opacity" ? hn(e, "opacity", i, n / 100) : hn(e, "rotation", i, { [r]: n });
}
function Tv(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && hn(e, i, n, r[i]);
}
function Dv(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Lv(e, t, r) {
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
function fa(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ga(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function nd(e, t, r, n) {
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
function Rv(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = jt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Wc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function fm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function pm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function hm(e, t) {
  return e != null && e.__panoSceneStateV2 ? Hc(jr(t)) : JSON.stringify(t);
}
function mm(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = jr(r);
    if (Hc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Hc(Qu(i, o)) === t;
  } catch {
    return !1;
  }
}
const sc = 0.15, Vv = 0.01, $v = 1e-3, zv = 0.05, jv = 4, Af = 250, Hv = 16, tr = 1, Gv = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function $n(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function yr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function kl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function go(e, t, r = 0) {
  const n = kn(e, t, r), i = yr(n, 2);
  return { right: yr(n, 0), up: yr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function Wv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Kc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function Kv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Kc(e, "3dof", r);
}
function Uv(e) {
  return go(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function Bv(e) {
  return $n(e.position, go(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function si(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Xo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function rd(e, t) {
  return Xo(si(t, e.position), go(e.yaw_deg, e.pitch_deg).forward);
}
function id(e) {
  return Math.max(e, 1e-6) * zv;
}
function Uc(e, t, r = null, n = tr) {
  if (t) return t;
  const i = id(n);
  if (r && rd(e, r) > 0) {
    const o = si(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : $n(e.position, o, i / s);
  }
  return $n(e.position, go(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function gm(e, t = tr) {
  return Math.max(e.distance, id(t));
}
function ym(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > jv ? !1 : t.time - e.time < Af || e.cost > Hv && t.time - e.wheelTime < Af;
}
function od(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function bm(e, t, r, n, i = Bv(e)) {
  const o = e.roll_deg ?? 0, [s, a] = Yv(t, r, o), l = jt(e.yaw_deg + s / n * 360), c = Ee(e.pitch_deg - a / n * 360, -89.9, 89.9), d = kn(e.yaw_deg, e.pitch_deg, o), u = kn(l, c, o), f = si(e.position, i), g = [0, 1, 2].map((m) => Xo(yr(d, m), f)), k = { ...e, yaw_deg: l, pitch_deg: c, position: $n(i, kl(u, g)) };
  return { ...k, distance: rd(k, i) };
}
function Yv(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function vm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = Uv(e), l = 2 * o * od(e, n, i).tanY / i;
  return { ...e, position: $n($n(e.position, s, -t * l), a, r * l), distance: o };
}
function Sm(e, t, r, n = tr) {
  const i = si(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * Vv, l = r > 0 ? Math.min(Math.max(o * sc, a), o - s * $v) : -Math.max(o * sc / (1 - sc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: $n(e.position, i, l / o) };
  return { ...c, distance: Math.max(rd(c, t), id(n)) };
}
function qv(e, t, r, n) {
  const { tanX: i, tanY: o } = od(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = go(e.yaw_deg, e.pitch_deg);
  return { ...e, position: $n(t.center, l, -a), distance: a };
}
function sd(e, t, r, n = null) {
  return _m({
    quaternion: oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(od(e, t, r).tanY) * Zt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function _m(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: tr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function us(e, t, r, n) {
  const { right: i, up: o, forward: s } = wm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function wm(e) {
  const t = ss(e.quaternion), r = yr(t, 2);
  return { right: yr(t, 0), up: yr(t, 1), forward: r.map((n) => -n) };
}
function Wa(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function Xv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function ad(e, t) {
  if (!e || !t.active) return null;
  const r = Jv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Bc(t),
    itemQuaternion: e.kind === "splat" ? Gv : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function xm(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = ad(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function km(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Jv(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Bc(e) {
  return {
    position: [...e.position],
    quaternion: oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Yc(e, t) {
  return $n(e.position, kl(kn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function pa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function qc({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function Xc(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function Zv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...qc(t).map((o) => Yc(e.scene, o)));
  for (const o of r) i.push(...ld(o));
  for (const { box: o, value: s } of n) i.push(...qc(o).map((a) => Yc(s, a)));
  return i;
}
function Qv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: kn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function ld(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => $n(e.position, kl(e.rotation, [n, i, 0])));
}
function eS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Xc(ld(i)) : o != null && o.box ? Xc(qc(pa(o.kind, o.box)).map((s) => Yc(n, s))) : { center: [...n.position], radius: n.scale };
}
const tS = 2, nS = 0.5, rS = 30;
function Mm(e, t) {
  const r = si(t, e), n = Math.atan2(r[0], -r[2]) * Zt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Zt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function iS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * nS : tS, o = t ? [...t] : $n(e.position, go(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...si(o, e.position)), a = s > 0 ? Mm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(rS * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function Cf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function oS(e) {
  return [0, 1, 2].map((t) => yr(e, t));
}
function If(e, t, r, n) {
  if (e === "translate") return { position: $n(t.position, si(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * uS(r.scale, n.scale) / r.scale };
  const i = Cf(ss(n.quaternion), oS(ss(r.quaternion))), o = Cf(i, kn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = zh(o);
  return Math.abs(a) <= sS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: aS(o, t.yaw_deg) } };
}
const sS = 89.9;
function aS(e, t) {
  const r = yr(e, 0), n = yr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Zt + 0;
}
const lS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function cS(e, t, r, n, i) {
  if (!us(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = wm(e), l = si(t, e.position), c = Xo(l, o), d = Xo(l, s), u = Xo(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), g = f * e.aspect, k = Math.hypot(c, d, u) * lS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > k)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (J) => {
    const O = k * Math.sqrt(J * J + u * u - k * k);
    return [(J * u - O) / (u * u - k * k), (J * u + O) / (u * u - k * k)];
  }, [h, _] = m(c), [X, j] = m(d);
  return {
    minX: n * 0.5 * (1 + h / g),
    maxX: n * 0.5 * (1 + _ / g),
    minY: i * 0.5 * (1 - j / f),
    maxY: i * 0.5 * (1 - X / f)
  };
}
function uS(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function dS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Pm(e, t) {
  const r = kn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => $n(e.position, kl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function fS(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = us(e, s, n, i), c = us(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ee(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function pS(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function hS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ht(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Ht(n, "position", l);
  });
}
function mS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Nm = 0.28;
function Am(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Zt,
    aspect: n
  };
}
function Jo(e) {
  const t = ii(e);
  return {
    quaternion: oi(kn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Cm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Ku(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * Zt,
      vFOV_deg: 2 * Math.atan(o / n) * Zt
    }
  };
}
function Im(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = ss(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, m = 1e-4) {
      const h = S1(k), _ = n * h.x + s * h.y + c * h.z, X = i * h.x + a * h.y + d * h.z, j = -(o * h.x + l * h.y + u * h.z), J = Math.max(j, m);
      return {
        x: t * 0.5 * (1 + _ / J / g),
        y: r * 0.5 * (1 - X / J / f),
        z: j
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, m) {
      const h = (k / t * 2 - 1) * g, _ = (1 - m / r * 2) * f;
      return Hu(ua({
        x: n * h + i * _ - o,
        y: s * h + a * _ - l,
        z: c * h + d * _ - u
      }));
    }
  };
}
function Em(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = _s(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), g = Math.tan(cm(a, c, Fm(u.media)) * 0.5 * wt), { crop: k } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Nm : c.opacity,
      zIndex: n(a),
      quaternion: oi(kn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * f,
        x1: (2 * k.x1 - 1) * f,
        y0: (1 - 2 * k.y1) * g,
        y1: (1 - 2 * k.y0) * g
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function Om(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Em(e, t, {
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
function Fm(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Tm(e, t, r, { media: n, evaluated: i = _s(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: g } = Fm(u.media), k = Qv(c, a.crop, f, g);
    k && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: k.position,
      quaternion: k.quaternion,
      rotation: k.rotation,
      width: k.width,
      height: k.height,
      crop: a.crop
    });
  }), s;
}
function gS({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Ih(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(m) {
      return l && !f.lost ? l.render(m) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(m) {
      return l && !f.lost ? l.renderUnwrap(m) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(m, h) {
      return l && !f.lost ? l.resize(m, h) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(m, h) {
      l && !f.lost && l.clear(m, h);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(m) {
      l && !f.lost && l.releaseSplats(m);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(m) {
      return l ? l.sceneBox(m) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(m, h, _, X, j) {
      return l && !f.lost ? l.pick(m, h, _, X, j) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, h, _, X, j) {
      return l && !f.lost ? l.pickSurface(m, h, _, X, j) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, h, _, X, j) {
      return l && !f.lost ? l.pickSticker(m, h, _, X, j) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, h, _, X, j, J) {
      return l && !f.lost ? l.gizmoPointer(m, h, _, X, j, J) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", g), e.removeEventListener("webglcontextrestored", k), l == null || l.dispose(), l = null;
    }
  };
  function g(m) {
    m.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function k() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", k), s().then((m) => {
    c || (a = m, !f.lost && (u(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const Dm = "3D view unavailable. Check the browser console.";
function Ka(e, t, r) {
  return Am({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function yS(e) {
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
const Lm = yS(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => Ih(e.createThreeView({ createCanvas: () => nn({ label: "three.node" }) }), "node"))
), nr = ["erp_image", "bg_erp", "bg_media"], cd = ["sticker_image", "sticker"], Rm = ["scene"], bS = {
  background: nr,
  "external-sticker": cd,
  scene: Rm
};
function Vm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Ml(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Vm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function $m(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Ef(e, t) {
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
function zm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function vS(e, t) {
  const { graph: r, entry: n } = zm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = Vm(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const jm = [...nr, ...cd, ...Rm], SS = 256, Gi = /* @__PURE__ */ new Map(), ac = /* @__PURE__ */ new WeakMap();
let Hm = () => null;
function Gm(e) {
  return ac.has(e) || ac.set(e, JSON.stringify(e)), ac.get(e);
}
function _S(e) {
  Hm = e;
}
function Ua(e, t) {
  const r = Gm(e);
  Gi.delete(r), Gi.set(r, t), Gi.size > SS && Gi.delete(Gi.keys().next().value);
}
function Xt(e, t) {
  var o;
  const r = e ? Hm(e) : null;
  if (!r) return !0;
  const n = Ml(e);
  let i = Gi.get(Gm(r));
  if (i)
    Ua(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => jm.includes(s == null ? void 0 : s.name)))) return !0;
    Ua(r, n), i = n;
  }
  return bS[t].every((s) => i[s] === n[s]);
}
const Ba = /* @__PURE__ */ new WeakSet();
async function Jc(e, t) {
  if (Ba.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Ba.add(e), r.ok && n !== void 0 ? n : null;
}
function Wm(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = zm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => jm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: vS(r, t) };
}
const ha = /* @__PURE__ */ new Map();
function wS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ha.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Jc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = Wm(i, o);
        s && Ua(s.output, s.inputs);
      }
    });
}
const xS = 5;
function kS(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${xS}`, n = Jc(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Jc(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: g } of await n) {
        if (!a()) return null;
        const k = await o(g);
        if ((c = k == null ? void 0 : k.outputs) != null && c[l])
          return ((f = (u = (d = k.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : Wm(k, l);
      }
      return null;
    }
  };
}
function MS(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Ri = null;
async function PS(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Ba.has(r) || (a = ha.get(i)) != null && a.has(n) || MS(t)) return null;
  (Ri == null ? void 0 : Ri.workflowId) !== i && (Ri = { workflowId: i, history: kS(r, i) }, queueMicrotask(() => {
    Ri = null;
  }));
  const s = await Ri.history.lastNodeOutput(e, o);
  return o() ? s ? (Ua(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (Ba.has(r) || ha.set(i, (ha.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Of(e, t, r, n = nr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Ff = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ma(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Ff.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Ff.test(String((e == null ? void 0 : e.filename) || ""));
}
const lc = /* @__PURE__ */ new WeakMap();
function NS(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Zc(e) {
  return NS(e) ? (lc.has(e) || lc.set(e, Math.random().toString(36).slice(2, 10)), lc.get(e)) : "run";
}
function Km(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function AS(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function ud(e, t = [], r = null) {
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
function CS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Ss(e, "looping-preview");
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
  let g = !1;
  const k = () => {
    g = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", k), n.src = t, n.load();
  const m = () => {
    o || g || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var X, j;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", k), n.pause(), (X = n.removeAttribute) == null || X.call(n, "src"), (j = n.load) == null || j.call(n));
    },
    failed: () => g,
    play: m,
    pause: h,
    toggle() {
      n.paused ? m() : h();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const ds = /* @__PURE__ */ new WeakMap(), Um = {
  editorSession: () => ({
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null
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
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
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
function ws(e, t) {
  if (!e || typeof e != "object") return null;
  let r = ds.get(e);
  return r || (r = {}, ds.set(e, r)), r[t] ?? (r[t] = Um[t]());
}
function Pl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = ds.get(e)) == null ? void 0 : r[t]) || null;
}
const Bm = (e) => ws(e, "editorSession"), St = (e) => ws(e, "nodeSurface"), Tr = (e) => ws(e, "previewNode"), Mn = (e) => ws(e, "mediaCache"), Rn = (e) => ws(e, "stateSync"), IS = (e) => Pl(e, "editorSession"), Ym = (e) => Pl(e, "nodeSurface"), qm = (e) => Pl(e, "previewNode");
function cc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const ES = {
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
      cc(o == null ? void 0 : o.img), cc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), cc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function OS(e, t) {
  const r = Pl(e, t);
  if (r)
    try {
      ES[t](r);
    } finally {
      delete ds.get(e)[t];
    }
}
function FS(e) {
  for (const t of Object.keys(Um))
    try {
      OS(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && ds.delete(e);
}
function fi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function TS(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Tf(e, t, r = null) {
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
  return !n && r != null && (n = TS(e == null ? void 0 : e.graph, r)), n;
}
function DS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function LS(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function RS(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Xm({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return i(O[0]);
      const Y = String(O[0] || "").trim();
      if (Y)
        return fi(t, {
          filename: Y,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const G of O) {
        const W = i(G);
        if (W) return W;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : fi(t, O);
  }, o = (O) => {
    if (!O || typeof O != "object") return "";
    const Y = String(O.type || "").trim().toLowerCase();
    if (Y === "dataurl") return String(O.value || "");
    if (Y !== "comfy_image") return "";
    const G = String(O.filename || "").trim();
    return G ? fi(t, {
      filename: G,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, s = (O) => {
    const Y = e == null ? void 0 : e.nodeOutputs;
    if (!Y || O == null) return null;
    const G = String(O);
    return Y instanceof Map ? Y.get(O) || Y.get(G) || Y.get(Number(G)) || null : Y[O] || Y[G] || null;
  }, a = (O, Y) => {
    var W;
    const G = s(O == null ? void 0 : O.id);
    return Array.isArray((W = G == null ? void 0 : G.ui) == null ? void 0 : W[Y]) ? G.ui[Y] : Array.isArray(G == null ? void 0 : G[Y]) ? G[Y] : [];
  }, l = (O, Y) => {
    const G = s(O == null ? void 0 : O.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, Y) ? G.ui[Y] : G && Object.prototype.hasOwnProperty.call(G, Y) ? G[Y] : null;
  }, c = (O, Y) => {
    const G = l(O, "pano_sticker_input_state_hash"), W = Array.isArray(G) ? G[0] : G;
    return String(W ?? "").trim() || RS(Y);
  }, d = (O) => {
    const Y = [], G = /* @__PURE__ */ new Set();
    for (const W of O || []) {
      const ee = i(W);
      !ee || G.has(ee) || (G.add(ee), Y.push(ee));
    }
    return Y;
  }, u = (O, Y) => {
    var ee;
    const G = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && G.push(O.images), Array.isArray((ee = O == null ? void 0 : O.ui) == null ? void 0 : ee.images) && O.ui.images.length && G.push(O.ui.images);
    const W = [];
    for (const pe of G)
      Y >= 0 && Y < pe.length && W.push(pe[Y]), W.push(...pe);
    return W;
  }, f = (O, Y) => {
    var $;
    const G = String(Y || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const ee = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((R) => String((R == null ? void 0 : R.name) || "") === G);
    if (ee < 0) return { src: "", sourceType: "", inputName: G };
    const pe = O.graph ? O.getInputLink(ee) : null;
    if ((pe == null ? void 0 : pe.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const D = pe.origin_id, se = Tf(O, ee, D);
    if (!se) return { src: "", sourceType: "", inputName: G };
    const re = Number(pe.origin_slot ?? 0);
    let Q = [];
    try {
      Q = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      Q = [];
    }
    if (Array.isArray(Q) && Q.length) {
      const R = [];
      re >= 0 && re < Q.length && R.push(Q[re]), R.push(...Q);
      const U = d(R.filter((de) => !ma(de)));
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "appNodeImageUrls", inputName: G };
    }
    const K = s((se == null ? void 0 : se.id) ?? D), T = d(u(K, re).filter((R) => !ma(R))).map((R) => `${R}&pano_src=${Zc(K)}`);
    if (T.length)
      return { src: T[0], srcCandidates: T, sourceType: "nodeOutputs", inputName: G };
    const H = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (H.length) {
      const R = [];
      re >= 0 && re < H.length && R.push(H[re]), R.push(...H);
      const U = d(R);
      if (U.length)
        return { src: U[0], srcCandidates: U, sourceType: "nodeImgs", inputName: G };
    }
    const C = ($ = se == null ? void 0 : se.widgets) == null ? void 0 : $.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (C) {
      let R = i(C.value);
      if (R && !R.includes("/") && !R.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (R = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`), R) return { src: R, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, g = (O, Y = []) => {
    var W;
    const G = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const ee of Y) {
      const pe = G.findIndex((Q) => String((Q == null ? void 0 : Q.name) || "") === ee), D = pe >= 0 && O.graph ? O.getInputLink(pe) : null;
      if ((D == null ? void 0 : D.origin_id) == null) continue;
      const se = s(((W = Tf(O, pe, D.origin_id)) == null ? void 0 : W.id) ?? D.origin_id), re = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(ma);
      return re ? `${fi(t, re)}&pano_src=${Zc(se)}` : "";
    }
    return "";
  }, k = (O, Y = []) => {
    const G = Array.isArray(Y) ? Y : [Y];
    for (const W of G) {
      const ee = f(O, W);
      if (String((ee == null ? void 0 : ee.src) || "").trim()) return ee;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (O) => {
    const Y = String(O || "").trim();
    if (!Y) return [];
    if (DS(Y)) return [Y];
    const { filename: G, subfolder: W } = LS(Y);
    return G ? d([
      fi(t, { filename: G, subfolder: W, type: "temp" }),
      fi(t, { filename: G, subfolder: W, type: "output" }),
      fi(t, { filename: G, subfolder: W, type: "input" }),
      Y
    ]) : [Y];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (O) => {
      var Y;
      try {
        (Y = Mn(O)) == null || Y.linkedImages.forEach((G, W, ee) => {
          var pe;
          G != null && G.img && ((pe = n == null ? void 0 : n.isImageLoadFailed) != null && pe.call(n, G.img)) && ee.delete(W);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (O, Y) => {
      var G;
      (G = O == null ? void 0 : O.delete) == null || G.call(O, `__ui__${String(Y || "")}`);
    },
    linkedValue: (O, Y) => {
      var D, se, re, Q;
      const G = String(Y || ""), W = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((K) => String((K == null ? void 0 : K.name) || "") === G) : -1, ee = W >= 0 && O.graph ? O.getInputLink(W) : null;
      if (ee) {
        const K = s(ee.origin_id), T = [
          K == null ? void 0 : K.output,
          K == null ? void 0 : K.result,
          (D = K == null ? void 0 : K.data) == null ? void 0 : D.output,
          (se = K == null ? void 0 : K.data) == null ? void 0 : se.result,
          (re = K == null ? void 0 : K.ui) == null ? void 0 : re.output,
          (Q = K == null ? void 0 : K.ui) == null ? void 0 : Q.result
        ];
        for (const H of T) {
          if (!Array.isArray(H)) continue;
          const C = H[Number(ee.origin_slot || 0)];
          if (typeof C == "string" && C.trim()) return C;
        }
      }
      const pe = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((K) => String((K == null ? void 0 : K.name) || "") === G) : null;
      return String((pe == null ? void 0 : pe.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (O, Y = [], G = null, W = "") => {
      var te;
      const ee = Array.isArray(Y) ? Y : [Y], pe = k(O, ee), se = (Array.isArray(pe == null ? void 0 : pe.srcCandidates) && pe.srcCandidates.length ? pe.srcCandidates : [pe == null ? void 0 : pe.src]).map((N) => String(N || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const re = d(se.flatMap((N) => m(N)));
      if (!re.length) return null;
      const Q = Mn(O).linkedImages, K = String(W || ee.join("|") || "image_exact"), T = se.join(`
`), H = Q.get(K);
      if (H && H.srcRaw === T && H.img) return H.img;
      const C = r || globalThis.Image;
      if (typeof C != "function") return null;
      const $ = new C();
      (te = n == null ? void 0 : n.markImageLoading) == null || te.call(n, $, T);
      const R = { srcRaw: T, resolvedSrc: "", img: $ };
      Q.set(K, R);
      let U = -1;
      const de = (N) => {
        var ie, ue, be;
        N === "ready" ? (ie = n == null ? void 0 : n.markImageReady) == null || ie.call(n, $, T) : (ue = n == null ? void 0 : n.markImageFailed) == null || ue.call(n, $, T), G == null || G($), (be = O.setDirtyCanvas) == null || be.call(O, !0, !0);
      }, Se = () => {
        if (U += 1, U >= re.length) {
          de("failed");
          return;
        }
        R.resolvedSrc = re[U], $.src = R.resolvedSrc;
      };
      return $.onload = () => de("ready"), $.onerror = () => {
        if (U + 1 < re.length) {
          Se();
          return;
        }
        de("failed");
      }, Se(), $;
    },
    output: s,
    resolvePreferredExactLinkedSource: k,
    source: i,
    uiImage: (O, Y, G, W = null) => {
      var K, T, H;
      const ee = a(O, Y)[0] || null, pe = i(ee);
      if (!pe) return null;
      const D = `__ui__${Y}`, se = (K = G == null ? void 0 : G.get) == null ? void 0 : K.call(G, D);
      if (se && se.__panoSrc === pe) return se;
      const re = r || globalThis.Image;
      if (typeof re != "function") return null;
      const Q = new re();
      return Q.__panoSrc = pe, (T = n == null ? void 0 : n.markImageLoading) == null || T.call(n, Q, pe), Q.onload = () => {
        var C;
        (C = n == null ? void 0 : n.markImageReady) == null || C.call(n, Q, pe), W == null || W(Q);
      }, Q.onerror = () => {
        var C;
        (C = n == null ? void 0 : n.markImageFailed) == null || C.call(n, Q, pe), W == null || W(Q);
      }, Q.src = pe, (H = G == null ? void 0 : G.set) == null || H.call(G, D, Q), Q;
    },
    uiList: a,
    uiValue: l
  };
}
const VS = 1e-3;
function dd(e, t, r, n) {
  if (!po(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(VS / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Jm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function $S(e, t) {
  return Math.floor(e * t.fps);
}
function fd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Df = 4;
function pd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, g) => f !== r[g])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = $S(a, l);
      for (let f = d; f < Math.min(r.length, d + Df + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Df) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Zm({
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
const ga = "sticker_image_1", Qm = "external_image", so = 0;
function ya(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function uc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ti(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Qc(e, t = so) {
  return (e == null ? void 0 : e.version) !== 2 ? ti(e) : ti(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Ai(r, t).active,
    external: r.source.kind === "port",
    ...ed(r, t)
  }));
}
function hd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ti(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function eg(e) {
  return String((e == null ? void 0 : e.id) || "") === ga || String((e == null ? void 0 : e.source_kind) || "") === Qm;
}
function md(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : eg(t);
}
const tg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function ng(e) {
  return !eg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(tg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function rg(e) {
  const t = ng(e);
  return t ? tg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function ig(e, t = {}) {
  var J, O, Y;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((G) => String((G == null ? void 0 : G.id) || "") === ga);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const G = String(((J = e.active) == null ? void 0 : J.selected_sticker_id) || "") === ga;
    return {
      state: {
        ...e,
        stickers: r.filter((W, ee) => ee !== n),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), g = t.pose && typeof t.pose == "object" ? t.pose : {}, k = a ? g.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || g.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(k)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const G = ya(m, u, f), W = Number(((O = s == null ? void 0 : s.initial_pose) == null ? void 0 : O.hFOV_deg) ?? m), ee = ya(W, u, f), pe = Number(((Y = s == null ? void 0 : s.initial_pose) == null ? void 0 : Y.vFOV_deg) ?? ee);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(pe - ee) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((D, se) => se === n ? {
          ...D,
          vFOV_deg: G,
          initial_pose: D.initial_pose && typeof D.initial_pose == "object" ? { ...D.initial_pose, vFOV_deg: ee } : D.initial_pose
        } : D)
      },
      changed: !0
    };
  }
  const h = r.reduce((G, W) => Math.max(G, Number((W == null ? void 0 : W.z_index) || 0)), -1), _ = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: d ? ya(m, u, f) : Number(g.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || m),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, X = {
    ...s || {},
    id: ga,
    source_kind: Qm,
    source_link_id: i,
    source_state_hash: o,
    ..._,
    initial_pose: { ..._ },
    visible: !0,
    z_index: h + 1
  }, j = n >= 0 ? r.map((G, W) => W === n ? X : G) : [...r, X];
  return { state: { ...e, stickers: j }, changed: !0 };
}
function Lf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const zS = ["IMAGE", "VIDEO"];
function Rf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => zS.includes(r)) ? "2d" : null;
}
function jS(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Rf(n.type) ?? Rf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function og(e, { pose: t = null } = {}) {
  return {
    connected: Lf(e, "sticker"),
    awaitingPose: !t && (Lf(e, "sticker_state") || jS(e, "sticker") !== "2d"),
    pose: t
  };
}
function Vf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return jr({ version: 2, stickers: [r] }).stickers[0];
}
function sg(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null } = {}) {
  var u;
  const i = e.stickers.findIndex((f) => md(e, f)), o = i >= 0 ? e.stickers[i] : null;
  if (!t) {
    if (!o) return { state: e, changed: !1 };
    const f = ((u = e.active) == null ? void 0 : u.selected_sticker_id) === o.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((g, k) => k !== i),
        active: f ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (o && (n == null ? void 0 : n.placement) === "world" && n.replace && o.placement === "sky") {
    const f = { ...Vf(o.id, n), clip: o.clip, visible: o.visible, locked: o.locked };
    return { state: { ...e, stickers: e.stickers.map((g, k) => k === i ? f : g) }, changed: !0 };
  }
  if (o || r) return { state: e, changed: !1 };
  const s = new Set(e.stickers.map((f) => f.id));
  let a = 1;
  for (; s.has(`sticker_${a}`); ) a += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Vf(`sticker_${a}`, n)] }, changed: !0 };
  const l = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), c = nd(`sticker_${a}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: l,
    vFOV_deg: l
  }, ti(e).reduce((f, g) => Math.max(f, g.z_index), -1) + 1), d = (n == null ? void 0 : n.keyframes) ?? {};
  return c.direction.keyframes = d.direction ?? [], c.roll.keyframes = d.roll ?? [], c.size.keyframes = (d.size ?? []).map((f) => ({ ...f, value: { ...f.value, vFOV_deg: f.value.hFOV_deg } })), { state: { ...e, stickers: [...e.stickers, c] }, changed: !0 };
}
function gd(e) {
  const t = ti(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: uc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: uc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: uc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function ag(e) {
  const t = hd(e), r = md(e, t), n = ti(e).some((a) => a && a.visible !== !1), i = gd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: rg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function HS(e) {
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
function $f(e, t) {
  const r = hd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = HS(e), i = String(r.id || ""), o = gd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function GS(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function WS(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return ig(e, t.value);
  if (t.type === "sync-port") return sg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = gd(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: ya(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, nd(o, fa(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: o }
        },
        changed: !0
      };
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
    return !i || !ti(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = hd(e);
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
    const i = ng(r);
    return !i || !rg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return $f(e, "front");
  if (t.type === "send-back") return $f(e, "back");
  if (t.type === "delete-selected") {
    if (md(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ti({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = GS(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? ed(r, so) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Mv(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return um(c, so, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function KS(e = {}) {
  return Zm({
    ...e,
    reduce: WS,
    projectModel: ag
  });
}
const eu = 2;
function gi(e, t) {
  return Math.floor(e * t + 0.5);
}
function US(e, t) {
  return Math.floor(e * t + 1e-3);
}
function lg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const g = () => c && !d, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const $ of f) $();
    f = [];
  }
  function h($, R = {}) {
    return m(), u = { name: $, ...R }, a(), u;
  }
  function _($, R, U) {
    const de = () => {
      u === $ && U();
    };
    e.addEventListener(R, de), f.push(() => e.removeEventListener(R, de));
  }
  function X($, R) {
    let U = t.requestFrame(function de(Se) {
      u === $ && (R(Se), u === $ && (U = t.requestFrame(de)));
    });
    f.push(() => t.cancelFrame(U));
  }
  function j($) {
    l = $, o(l);
  }
  function J() {
    return h(d ? "error" : "idle");
  }
  function O() {
    d = !0, J();
  }
  function Y() {
    const { seekable: $ } = e, R = $ != null && $.length ? $.end($.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(R) ? R : 1 / 0));
  }
  function G($) {
    if (!g()) return $ === "play" ? se() : J();
    if (e.readyState < eu) {
      const R = h("loading", { then: $ });
      return _(R, "loadeddata", () => G(R.then)), _(R, "error", O), R;
    }
    return $ === "play" && l / r() >= Number(e.duration) ? se() : W($, !1);
  }
  function W($, R) {
    const U = Y();
    if (!e.ended && gi(Number(e.currentTime), r()) === gi(U, r())) return ee($);
    const de = h("seeking", { then: $, frame: l, retried: R });
    return _(de, "seeked", () => {
      const Se = gi(Number(e.currentTime), r()) === gi(Y(), r()), te = l === de.frame;
      Se || te && de.retried ? ee(de.then) : W(de.then, te);
    }), _(de, "error", O), e.currentTime = U, de;
  }
  function ee($) {
    return $ === "play" ? pe() : (s(), J());
  }
  function pe() {
    const $ = h("playingVideo", { shown: !1 });
    if (_($, "pause", () => e.ended ? D() : K()), _($, "ended", D), _($, "error", O), i() && gi(Number(e.duration), r()) >= n()) {
      const U = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = U;
      });
    }
    const R = (U, de) => {
      de && !$.shown && ($.shown = !0, a()), re(gi(U, r()));
    };
    if (k()) {
      let U = e.requestVideoFrameCallback(function de(Se, te) {
        u === $ && (R(Number(te.mediaTime), !0), u === $ && (U = e.requestVideoFrameCallback(de)));
      });
      f.push(() => {
        var de;
        return (de = e.cancelVideoFrameCallback) == null ? void 0 : de.call(e, U);
      });
    } else
      X($, () => R(Number(e.currentTime), e.readyState >= eu));
    return Promise.resolve(e.play()).catch(() => {
      u === $ && K();
    }), $;
  }
  function D() {
    s(), se();
  }
  function se() {
    const $ = h("playingClock", { startTs: t.now(), startFrame: l });
    return X($, (R) => re($.startFrame + Math.floor((R - $.startTs) / 1e3 * r()))), $;
  }
  function re($) {
    if ($ < n()) {
      j($);
      return;
    }
    if (!i()) {
      Q(n() - 1);
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), j(0), G("play");
  }
  function Q($) {
    u.name === "playingVideo" ? (m(), e.pause(), j(Math.max(0, $)), s()) : j(Math.max(0, $)), G("still");
  }
  function K() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      m(), e.pause();
      const $ = US(Number(e.currentTime), r());
      j(Math.min($, n() - 1)), s(), l === $ ? J() : G("still");
    } else u.name === "playingClock" && Q(Math.min(l, n() - 1));
  }
  function T() {
    if (!C()) {
      if (l >= n() - 1 && j(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      G("play");
    }
  }
  function H($) {
    const R = Math.max(0, Math.round($));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", j(R), a();
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), j(R), G("still");
  }
  function C() {
    return u.name === "playingVideo" || u.name === "playingClock" || u.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return u.name;
    },
    get playing() {
      return C();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: T,
    stop: K,
    seek: H,
    toggle() {
      C() ? K() : T();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource($) {
      m(), c = !!$, d = !1, G("still");
    },
    dispose() {
      m(), c = !1, u = { name: "idle" };
    }
  };
}
function yd({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(m) {
    a = m, t();
  }
  function d(m) {
    s = m, e.currentTime = m;
  }
  function u() {
    const m = l;
    f(), l !== m && r();
  }
  function f() {
    if (!n || i || e.readyState < eu) return;
    const { time: m, playing: h, fps: _ } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const X = Number(e.duration), j = Number.isFinite(X) ? Math.min(m, X) : m, J = Math.abs(Number(e.currentTime) - j) > 1.5 / _;
      if (e.ended && !J) return;
      J && d(j), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === m) && (Number(e.currentTime) === m ? c(m) : d(m));
  }
  const g = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const m = s;
      s = null, !o.playing && m === o.time ? c(m) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [m, h] of Object.entries(g)) e.addEventListener(m, h);
  function k(m) {
    n = m, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: m = "", time: h = null, playing: _ = !1, fps: X }) {
      m !== n && (k(m), r()), o = { time: h, playing: _, fps: X }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(m, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : m;
    },
    dispose() {
      for (const [m, h] of Object.entries(g)) e.removeEventListener(m, h);
      k("");
    }
  };
}
function ba(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function BS({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let k = null, m = null;
  const h = () => i().timeline.fps, _ = (D) => D.stickers.find((se) => se.source.kind === "port"), X = () => {
    const D = i(), se = _(D);
    return om(D, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        k && se ? Jm(se.clip, h(), k.meta) : 0
      ),
      camera: c
    });
  }, j = lg({
    video: e,
    clock: n,
    fps: h,
    span: X,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), J = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, O = () => {
    u && (g.add(u), l());
  }, Y = yd({ video: t, onCapture: a, onChange: l }), G = pd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", J), e.addEventListener("error", O);
  function W(D) {
    D !== u && (u = D, e.pause(), D ? e.src = D : e.removeAttribute("src"), e.load(), j.setSource(!!D));
  }
  function ee() {
    j.playing && j.stop();
  }
  function pe(D) {
    const se = _(D);
    m = k && se ? dd(se.clip, j.frame, D.timeline.fps, k.meta) : null, Y.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: m,
      playing: j.advancing,
      fps: D.timeline.fps
    });
  }
  return {
    get frame() {
      return j.frame;
    },
    get playing() {
      return j.playing;
    },
    get showsVideo() {
      return j.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ee,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(D, se) {
      return k != null && k.frames ? G.picture(k.frames, m, k.meta, se) : Y.picture(D, se);
    },
    toggle() {
      j.playing ? j.stop() : j.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: D, sources: se, state: re, sticker: Q = null }) {
      if (k = D ? Q : null, !D)
        return ee(), W(""), pe(re), !1;
      for (const $ of g)
        se.includes($) || g.delete($);
      const K = se.find(($) => $ && !g.has($)) || "", T = K !== d;
      T && (d = K, f = 0), W(d);
      const H = im(re, { camera: c }) || !!d && j.state !== "error" || !!k;
      return H || ee(), (T || !H || !j.playing && j.frame >= X()) && j.frame !== so && j.seek(so), pe(re), H;
    },
    dispose() {
      j.dispose(), Y.dispose(), e.removeEventListener("loadedmetadata", J), e.removeEventListener("error", O), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const Ya = Math.PI / 180, hr = 180 / Math.PI, YS = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), qS = 260;
function zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function cg(e, t) {
  return t ? cg(t, e % t) : e;
}
function XS(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = cg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function fs(e, t) {
  const r = zf(e), n = zf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: XS(r, n) };
}
function Mi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function ug(e) {
  const t = Mi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Fr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function bd(e, t, r = YS) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, _, X) => {
    const j = h + _, J = Math.max(0, X - 1), O = j > J && j > 0 ? J / j : 1;
    return [h * O, _ * O];
  }, [d, u] = c(l, s, n), [f, g] = c(o, a, i), k = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - g)
  }, m = Gu(k, t);
  return {
    x: k.x + (k.w - m.width) * 0.5,
    y: k.y + (k.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: k
  };
}
function JS(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = bd({ width: r, height: n }, 1), o = Ee(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * Ya * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = $h(l, Dh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = ZS(c, uo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = Wu({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function dg(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * hr),
    pitch: Ee(Math.asin(Ee(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * hr, -89.9, 89.9)
  };
}
function ZS(e, t) {
  const r = dg(e), n = uo(r.yaw, r.pitch, 0), i = ql(t, e), o = {
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
    roll: bl(Math.atan2(
      ql(a, n.up),
      ql(a, n.right)
    ) * hr)
  };
}
function fg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = bd({ width: r, height: n }, Ei(e)), o = Ni(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = $h(e, Dh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = dg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ee(2 * Math.atan(r / (2 * o)) * hr, 1, 179)
  };
}
function QS(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ni(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = Ku(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, g = n / i, k = Math.tan(Dc * Ya), m = g >= 1 ? k : k * g, h = g >= 1 ? k / g : k;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * hr,
      vFOV_deg: 2 * Math.atan(d / a) * hr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(m) * hr,
        vFOV_deg: 2 * Math.atan(h) * hr
      }
    }
  };
}
function Vi(e, t) {
  const r = Mi(e);
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
function e_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Ni(r, e);
    return Wu(Gu(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ca(o, t) };
}
function jf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = fs(t, r);
  if (!o) return e;
  const s = Ei(e) >= 1;
  n && o.ratio >= 1 !== s && (o = fs(o.height, o.width));
  const a = e_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function pg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Mi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Lh({
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
    const n = Mi(e);
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
    return Vi(e, (n) => jf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Vi(e, (n) => {
      const o = String(Fr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? fs(o[1], o[2]) : fs(Ei(n), 1);
      return s ? jf(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Vi(e, (i) => {
      const o = bl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Vi(e, (n) => {
    const i = Rh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Vi(e, (n) => {
    const i = Vh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Vi(e, (n) => {
    const i = gg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function hg({
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
function mg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Fh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Th(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function gg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * Ya, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, g = d * c + u * l, k = Number(e.pitch_deg || 0) * Ya, m = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(f) / m * hr),
    pitch_deg: Ee(Number(e.pitch_deg || 0) - Math.atan(g) * hr, -90, 90)
  };
}
function t_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Zm({
    readState: e,
    reduce: pg,
    projectModel: ug,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const ze = Object.freeze({
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
}), n_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, r_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: n_(t[2])
})), i_ = {
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
}, Hf = Object.fromEntries(
  Object.entries(i_).map(([e, t]) => [e, {
    name: t.name,
    elements: r_(t.body)
  }])
), Vt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Hf, n) ? Hf[n] : null;
    });
    return (n, i) => r.value ? (Te(), Le("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: gt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), Le(tt, null, Nt(r.value.elements, (o, s) => (Te(), Le(tt, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Te(), Le("path", Ar({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), Le("circle", Ar({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), Le("rect", Ar({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), Le("line", Ar({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), Le("polyline", Ar({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), Le("polygon", Ar({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, Jt = {
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
    return (n, i) => (Te(), Vn(py(e.tag), Ar({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Zp(() => [
        Be(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, o_ = ["aria-expanded", "disabled"], s_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, a_ = ["data-aspect", "disabled", "onClick"], l_ = { class: "pano-cutout-aspect-custom" }, c_ = ["disabled"], u_ = ["disabled"], d_ = ["data-custom-width", "data-custom-height", "disabled"], yg = {
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
    ]), o = /* @__PURE__ */ Ut("1"), s = /* @__PURE__ */ Ut("1"), a = /* @__PURE__ */ Ut(null), l = ut(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = ut(() => {
      const m = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return m.length ? m.map((_) => {
        const X = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.value) || ""), j = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.label) || X);
        return {
          ...typeof _ == "object" && _ ? _ : {},
          value: X,
          label: j,
          active: h ? X === h : (_ == null ? void 0 : _.active) === !0
        };
      }) : i.map((_) => ({
        ..._,
        active: _.value === h
      }));
    }), d = ut(() => {
      var h;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((h = c.value.find((_) => _.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    wi(d, (m) => {
      const h = String(m || "").match(/^([0-9.]+):([0-9.]+)$/);
      h && (o.value = h[1], s.value = h[2]);
    }, { immediate: !0 });
    function u(m) {
      n("action", m);
    }
    function f(m) {
      var h;
      r.model.aspectOpen === !0 && ((h = a.value) != null && h.contains(m.target) || u({ type: "close-aspect" }));
    }
    pl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), bs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(m) {
      const [h, _] = String(m.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: _,
        preserveOrientation: !0
      });
    }
    function k() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (m, h) => (Te(), Le("div", {
      ref_key: "rootElement",
      ref: a,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Vn(Jt, {
        key: 0,
        icon: e.model.aspectIcon || nt(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (_) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), Le("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (_) => u({ type: "toggle-aspect" }))
      }, [
        Be(Vt, {
          icon: e.model.aspectIcon || nt(ze).aspect
        }, null, 8, ["icon"]),
        xe("span", null, it(d.value), 1),
        Be(Vt, {
          icon: nt(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, o_)),
      Lr(xe("div", s_, [
        (Te(!0), Le(tt, null, Nt(c.value, (_) => (Te(), Le("button", {
          key: _.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: _.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": _.value,
          disabled: l.value,
          onClick: (X) => g(_)
        }, it(_.label), 11, a_))), 128)),
        xe("div", l_, [
          Lr(xe("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (_) => o.value = _),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, c_), [
            [df, o.value]
          ]),
          h[4] || (h[4] = xe("span", { "aria-hidden": "true" }, ":", -1)),
          Lr(xe("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (_) => s.value = _),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, u_), [
            [df, s.value]
          ]),
          xe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: k
          }, "Apply", 8, d_)
        ])
      ], 512), [
        [Pi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, f_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, p_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), Le("div", {
      class: gt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = It(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = It(() => {
      }, ["stop"]))
    }, [
      Be(Jt, {
        icon: nt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = It((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      xe("div", f_, [
        i[3] || (i[3] = xe("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(tt, null, Nt(nt(r), (o) => (Te(), Le("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          xe("kbd", null, it(o[0]), 1),
          xe("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, h_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Nl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), Le("div", h_, it(nt(Dm)), 1));
  }
}, m_ = { class: "pano-cutout-node-surface" }, g_ = ["title", "disabled"], y_ = { class: "value" }, b_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, v_ = {
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
    return (n, i) => (Te(), Le("div", m_, [
      xe("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = It(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = It(() => {
        }, ["stop"]))
      }, [
        xe("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = xe("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(Jt, {
          icon: e.model.hasShot ? nt(ze).delete : nt(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(yg, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        xe("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = It((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(Vt, {
            icon: nt(ze).roll
          }, null, 8, ["icon"]),
          xe("span", y_, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, g_),
        Be(Jt, {
          icon: nt(ze).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(p_)
      ], 32),
      e.model.hasShot === !1 ? (Te(), Le("div", b_, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Te(), Vn(Nl, { key: 1 })) : ht("", !0)
    ]));
  }
}, bg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Ut(null);
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
      var m, h;
      const { active: f, intent: g } = a();
      if (!f) return;
      const k = ((h = (m = u.target) == null ? void 0 : m.files) == null ? void 0 : h[0]) || null;
      if (k) {
        n("file-selected", { intent: g, file: k });
        return;
      }
      n("file-cancelled", { intent: g });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Te(), Le("input", {
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
}, S_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, __ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ut(!1), r = Object.freeze([
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
    return (n, i) => (Te(), Le("div", {
      class: gt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = It(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = It(() => {
      }, ["stop"]))
    }, [
      Be(Jt, {
        icon: nt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = It((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      xe("div", S_, [
        i[3] || (i[3] = xe("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), Le(tt, null, Nt(nt(r), (o) => (Te(), Le("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          xe("kbd", null, it(o[0]), 1),
          xe("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, w_ = { class: "pano-stickers-node-surface" }, x_ = ["disabled"], k_ = ["aria-label", "data-tip"], M_ = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, P_ = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, N_ = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Ut(null);
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
    return (s, a) => (Te(), Le("div", w_, [
      xe("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = It(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = It(() => {
        }, ["stop"]))
      }, [
        xe("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = xe("span", { class: "label" }, "Full Editor", -1))
        ]),
        xe("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be(Vt, {
            icon: nt(ze).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = xe("span", { class: "label" }, "Add Image", -1))
        ], 8, x_),
        Be(Jt, {
          icon: e.model.locked ? nt(ze).lock_closed : nt(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Jt, {
          icon: nt(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Jt, {
          icon: nt(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Jt, {
          icon: e.model.isExternalSelection ? nt(ze).back_initial : nt(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(__)
      ], 32),
      e.model.playable === !0 ? (Te(), Le("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = It(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = It(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(Vt, {
          icon: e.model.playing ? nt(ze).pause : nt(ze).play
        }, null, 8, ["icon"])
      ], 40, k_)) : ht("", !0),
      e.model.hasStickers === !1 ? (Te(), Le("div", M_, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Te(), Le("div", P_, "Drop image to add")) : ht("", !0),
      Be(bg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Vn(Nl, { key: 3 })) : ht("", !0)
    ]));
  }
}, A_ = { class: "pano-studio-node-surface" }, C_ = {
  class: "pano-studio-node-status",
  role: "status"
}, I_ = { class: "pano-studio-node-shot" }, E_ = { class: "pano-studio-node-size" }, O_ = { class: "pano-studio-node-note" }, F_ = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), Le("div", A_, [
      xe("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = It(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = It(() => {
        }, ["stop"]))
      }, [
        xe("div", C_, [
          xe("span", I_, it(e.model.status.shot), 1),
          xe("span", E_, it(e.model.status.size), 1),
          xe("span", O_, it(e.model.status.note), 1)
        ]),
        xe("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Be(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = xe("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), Vn(Nl, { key: 0 })) : ht("", !0)
    ]));
  }
}, T_ = 2048, tu = 4096, va = (e) => Math.floor(e + 0.5), Xs = (e) => Math.max(2, 2 * va(e / 2));
function vg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function D_(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? _l.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, va(e.timeline.length)) : t.length ? n = Math.max(1, va(Math.max(...t))) : r.length && (n = Math.max(1, va(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function L_(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = T_ : s = Math.floor(i * 360 / n);
  const a = vg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => vl(a, g).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Xs(c), Xs(d)];
  if (Math.max(...u) <= tu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = tu / Math.max(c, d);
  return { width: Xs(c * f), height: Xs(d * f), reducedFrom: u, defaulted: o };
}
function Sg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function R_({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Sg(e, t, String(r), n) } : null;
}
function V_(e) {
  return e ? oi(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const dc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function $_(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = vg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Sg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: dc[a] };
    d = L_(e, D_(e), r, n, o);
  }
  const u = dc[a] ? [dc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${tu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function z_() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, $_(r(), { ...t, bgWidth: n }));
  };
}
const Gf = 24;
function j_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Zo(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function _g(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function nu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => Zo(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Zo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : _g(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function H_(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => Zo(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => Zo(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Zo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : _g(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function vd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function wg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Eo(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ee(r.x, -n, t.width + n),
    y: Ee(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function G_(e) {
  const t = uo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function pi(e, t, r) {
  return Hu(Ta(
    Ta(e.centerDir, Da(e.right, t)),
    Da(e.up, r)
  ));
}
function Sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = G_(e), n = Eo(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    pi(r, -r.tanX, r.tanY),
    pi(r, r.tanX, r.tanY),
    pi(r, r.tanX, -r.tanY),
    pi(r, -r.tanX, -r.tanY)
  ].map((f) => Eo(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const k = [];
    for (let m = 0; m <= 28; m += 1) {
      const h = m / 28;
      let _, X;
      g === 0 ? (_ = -r.tanX + 2 * r.tanX * h, X = r.tanY) : g === 1 ? (_ = r.tanX, X = r.tanY - 2 * r.tanY * h) : g === 2 ? (_ = r.tanX - 2 * r.tanX * h, X = -r.tanY) : (_ = -r.tanX, X = -r.tanY + 2 * r.tanY * h);
      const j = Eo(pi(r, _, X), t);
      j && k.push({ x: j.x, y: j.y });
    }
    return k;
  }), s = Eo(pi(r, 0, r.tanY), t), a = Eo(
    pi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * Gf,
      y: s.y + d / u * Gf
    },
    visible: !0
  };
}
function Wf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Sd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = nu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = nu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function W_(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(n.x, n.z) * Zt),
    pitch_deg: Math.asin(Ee(n.y, -1, 1)) * Zt
  };
}
function K_(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ee(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ee(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function U_(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Zt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Js = null;
function _d() {
  return Js || (Js = new Promise((e) => {
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
  }), Js);
}
function Hn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function B_(e, t = 1024) {
  const r = Math.max(1, Math.round(Hn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Hn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Y_(e, t, r) {
  const n = Hn(t), i = Hn(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Hn(o.u0), a = Hn(o.v0), l = Hn(o.u1), c = Hn(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Hn(d.du)) * n,
    centerY: ((a + c) * 0.5 + Hn(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Hn(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Hn(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function q_(e, t, r) {
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
function X_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = Y_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = q_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === u) return { source: g.source, revision: u };
    const k = n(c, l), m = Number(k.naturalWidth || k.width || 0), h = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || m < 1 || h < 1) return null;
    const _ = nn({ label: "raster-object" });
    _.width = Math.max(1, Math.round(s)), _.height = Math.max(1, Math.round(a));
    const X = _.getContext("2d");
    return X ? (d.wrapOffsets.forEach((j) => {
      X.save(), X.translate(d.centerX + j, d.centerY), X.rotate(d.rotationRad), X.scale(d.scale, d.scale), X.drawImage(
        k,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), X.restore();
    }), t.set(f, { revision: u, source: _ }), { source: _, revision: u }) : null;
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
function J_(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Z_(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Q_({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, g, k) {
    if (!u || typeof k != "function" || g.settled) return;
    let m = n.get(u);
    m || (m = /* @__PURE__ */ new Map(), n.set(u, m));
    const h = m.get(f);
    if ((h == null ? void 0 : h.entry) === g) {
      h.callback = k;
      return;
    }
    o(h);
    const _ = { owner: u, key: f, entry: g, callback: k };
    m.set(f, _), g.listeners.add(_);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((g) => {
      o(g);
      try {
        g.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, g] of r) {
        if (r.size <= u) break;
        !g.settled || g.listeners.size > 0 || (g.image.onload = null, g.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, g, k = null) {
    const m = String(f || ""), h = String(g || "");
    if (!m || !h) return null;
    let _ = r.get(m);
    if (_)
      r.delete(m), r.set(m, _);
    else {
      l(i - 1);
      const j = e || globalThis.Image;
      if (typeof j != "function") return null;
      const J = new j();
      _ = { key: m, image: J, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, _), J.onload = () => a(_, !0), J.onerror = () => a(_, !1), J.src = h;
    }
    return _.settled || _.image.complete && Number(_.image.naturalWidth || _.image.width || 0) > 0 || s(u, m, _, k), _.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Ro = /* @__PURE__ */ new WeakMap();
function xg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Ro.get(e);
  n || (n = [], Ro.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Ro.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Ro.delete(e);
  };
}
function Qr(e, ...t) {
  const r = Ro.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Sa = Object.freeze({
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
}), kg = "PanoramaSuite.Editor.ViewControls", ew = {
  id: kg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Sa).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function tw(e) {
  return Object.hasOwn(Sa, e) ? Sa[e] : Sa.default;
}
function nw(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function rw(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const qa = "state_json";
function Dr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function iw(e) {
  var s, a;
  const t = Dr(e, qa);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = am(r, {
    coverage: (s = Dr(e, "coverage")) == null ? void 0 : s.value
  }), i = pg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function wd(e, t) {
  if (!e || Rn(e).coverageSyncInstalled) return;
  const r = Dr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, g, k, m;
    const o = n ? n(...i) : void 0, s = Rn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Tr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (g = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || g.call(f, !0, !0), (m = (k = t == null ? void 0 : t.canvas) == null ? void 0 : k.setDirty) == null || m.call(k, !0, !0), o;
  }, Rn(e).coverageSyncInstalled = !0;
}
function ow(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Kf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function sw(e) {
  var d, u, f, g, k, m;
  if (!e) return;
  const t = Dr(e, "coverage"), r = Dr(e, "bg_color"), n = Dr(e, qa), i = Dr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && ow(o) && (Kf(s) || s === ""))) return;
  let c = "360";
  if (Kf(s))
    try {
      c = String(On((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (g = n.callback) == null || g.call(n, s), i && (i.value = a, (k = i.callback) == null || k.call(i, a)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function _a(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function ru(e, t, r) {
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
async function aw(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Rn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function Vo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Rn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function Mg(e, t = {}) {
  var n, i, o;
  await aw(e, t);
  const r = Array.from(((n = Rn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = Bm(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function lw(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Mg(e), r ? r.apply(this, n) : this.value;
  };
}
function cw(e) {
  var r;
  const t = St(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function Pg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return FS(this), r;
  };
}
function uw(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function fc(e, {
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
    var m;
    const f = `editor_btn|${r}`, g = St(u);
    if (g.attached === !0 && g.mountKey === f) return;
    cw(u), wd(u, t), _a(u, qa);
    const k = Dr(u, qa);
    if (lw(u, k), k && !k.__panoPreviewPatchedCb) {
      k.__panoPreviewPatchedCb = !0;
      const h = k.callback;
      k.callback = (_) => {
        var j;
        const X = h ? h(_) : void 0;
        return (j = u.setDirtyCanvas) == null || j.call(u, !0, !1), X;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = Dr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (m = h.callback) == null || m.call(h, "#00ff00")), ru(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), g.stickers && _a(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), g.attached = !0, g.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, ru(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), g.cutout && _a(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), g.attached = !0, g.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && iw(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && sw(this);
      const k = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && k && Qr(this, "attach"), g;
    };
  }
  Pg(e);
}
function dw(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return uw(this), n;
  }, Pg(e);
}
function fw(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = Tr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (Tr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    wd(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    ru(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && _a(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function pw({
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
    settings: [ew, jb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [mf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [mf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && fc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && fc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && fc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), La(d) && dw(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      wd(l, e), La(c) && fw(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const hw = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Zn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : hw.test(String(e.name || "")) : !1;
}
function xd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Zn(r)) : !1;
}
function mw(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (xd(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => Zn(u));
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
async function $o(e, t = {}) {
  var s, a, l, c;
  if (!Zn(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const g = new r();
      g.onload = () => u(g), g.onerror = () => f(new Error("image load failed")), g.src = o;
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
async function yi(e, { fetchApi: t } = {}) {
  if (!Zn(e)) throw new TypeError("A supported image file is required.");
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
const Uf = /* @__PURE__ */ new WeakSet(), Bf = /* @__PURE__ */ new WeakSet();
let Yf = 0;
function iu(e) {
  if (!e || typeof e != "object" || Bf.has(e)) return e;
  const t = String(e.type || "preview");
  return Yf += 1, e.type = `${t}:pano-${Yf}`, Bf.add(e), e;
}
function Xa(e) {
  if (!e || typeof e != "object" || Uf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Uf.add(e), e;
}
function Ng(e, t) {
  var n, i;
  if (!t || ((i = (n = Xa(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function gw({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: zt } = ra;
_S((e) => ni(e.id));
wS(pn);
const kd = Q_(), { linkedVideoFile: Ag } = Xm({ app: zt, api: pn });
function ou() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ra == null ? void 0 : ra.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const yw = "pano_suite.ui_settings.v1", bw = 120, vw = 2048;
function qf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(yw)) || "").trim();
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
function Sw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Oo(e) {
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
function _w() {
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
function su(e) {
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
function Cg(e) {
  const t = su(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function ww(e, t, r) {
  Cg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function au(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Md(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ig(e) {
  return La(Md(e));
}
function Xf(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = zt == null ? void 0 : zt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function Eg(e) {
  const t = St(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = au(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && pc(e), yx(e, { ...n, mode: i }), this.activeBackend = au(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || St(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      pc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      pc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function pc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  lu.unregister(e);
  const r = St(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = ou();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Hw(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function xw(e, t = "#00ff00") {
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
function kw(e) {
  var r, n;
  const t = (r = Rn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = mr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Sn(e) {
  var l, c;
  const t = Rn(e), r = kw(e), n = t.liveStateVersion, i = String(((l = mr(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), o = Number(((c = mr(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, s = t.parsedState;
  if (s && s.source === r && s.liveVersion === n && s.bg === i && s.coverage === o)
    return s.parsed;
  const a = e.__panoSceneStateV2 && typeof r == "string" ? lm(r, { backgroundColor: i, coverage: o, active: fm(e) }) : xw(r, i);
  return a.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, parsed: a }, a;
}
function mr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function Mw(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Og(e, t, r = null) {
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
  return !n && r != null && (n = Mw(e == null ? void 0 : e.graph, r)), n;
}
function Pw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function Fg(e, t = []) {
  const r = Pw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    nr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Jf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Ja(e, t) {
  const r = Jf(e), n = Jf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Nw(e, t) {
  var r;
  return Og(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function Aw(e, t = nr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = Fg(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return AS(e, s, Nw);
}
const lu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = pn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, g, k;
        if (!o) return;
        const s = Ja(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...Aw(o)].some((m) => Ja(n, m)) || (s && (Nd(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !Km(Mn(o).executedOutputs, n, r.output) && (Dg(o), (u = (d = St(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (k = (g = o.graph) == null ? void 0 : g.setDirtyCanvas) == null || k.call(g, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0));
      });
    }, pn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = pn) != null && e.removeEventListener) || (pn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Za(e) {
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
  return typeof ((o = pn) == null ? void 0 : o.apiURL) == "function" ? pn.apiURL(i) : i;
}
function Cw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Iw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function Ew(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Ow(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Cw(t)) return [t];
  const { filename: r, subfolder: n } = Iw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => Za({
    filename: r,
    subfolder: n,
    type: o
  }));
  return Ew([...i, t]);
}
function Fw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? Za({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ni(e) {
  const t = zt == null ? void 0 : zt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Ja(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Ja(s, i)) return t[s];
  }
  return null;
}
function Rr(e, t, r = null) {
  const n = r || ni(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function wn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return wn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return Za({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = wn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Za(e);
}
function ps(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function wa(e) {
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
function Pd(e, t) {
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
function Tw(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Dw(e, t) {
  try {
    const r = Mn(e);
    r.ownOutputRev = J_(r.ownOutputRev);
    const n = Tw(t);
    let i = "";
    for (const o of n)
      if (i = wn(o), i) break;
    i ? (Pd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Qi(e) {
  var r;
  const t = Mn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Lw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Xt(e, "background"))
    return Qi(e), null;
  const i = ni(n), o = ud(i, t, wn);
  if (!o)
    return Qi(e), null;
  const s = Mn(e), a = Pd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  Qi(e);
  const d = CS({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Rw(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = Fg(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], g = e.graph ? e.getInputLink(u) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const k = g.origin_id, m = Og(e, u, k);
    if (!m) continue;
    const h = Number(g.origin_slot ?? 0), _ = ni((m == null ? void 0 : m.id) ?? k), X = Array.isArray(_ == null ? void 0 : _.images) ? _.images : [];
    if (X.length) {
      const Y = [];
      h >= 0 && h < X.length && Y.push(X[h]), Y.push(...X);
      for (const G of Y.filter((W) => !ma(W))) {
        const W = wn(G);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: `${W}&pano_src=${Zc(_)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let j = [];
    try {
      j = typeof (zt == null ? void 0 : zt.getNodeImageUrls) == "function" ? zt.getNodeImageUrls(m) || [] : [];
    } catch {
      j = [];
    }
    if (Array.isArray(j) && j.length) {
      const Y = [];
      h >= 0 && h < j.length && Y.push(j[h]), Y.push(...j);
      for (const G of Y) {
        const W = wn(G);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const J = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (J.length) {
      const Y = [];
      h >= 0 && h < J.length && Y.push(J[h]), Y.push(...J);
      for (const G of Y) {
        const W = wn(G);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const O = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (O) {
      let Y = wn(O.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (Y = pn.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`)), Y)
        return String((f == null ? void 0 : f.name) || ""), { src: Y, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Xt(e, "background") ? ni(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = wn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Vw(e, t = [], r = {}) {
  const n = Rw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Ow(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Mn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const g = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const k = o[f];
    u.pendingResolvedSrc = k, d.src = k;
  };
  return d.onload = () => {
    var k;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0);
  }, d.onerror = (k) => {
    if (f + 1 < o.length) {
      g();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((k == null ? void 0 : k.type) || "error");
  }, g(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function Tg(e, t = [], r = null, n = {}) {
  const i = Vw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Dg(e) {
  e && (kd.disposeOwner(e), Mn(e).linkedImages.clear(), Qi(e));
}
function $w(e) {
  e && (Mn(e).linkedImages.clear(), Qi(e));
}
function Lg(e, t) {
  const r = St(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Fo(e, t, r = "") {
  var s;
  const n = Lg(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < bw ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Zf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function zw(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function hc(e, t) {
  var n, i;
  const r = (i = (n = St(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function jw(e) {
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
function Hw(e, t) {
  return Ng(e, t);
}
function Qa(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Fw(r);
  if (!o && (n != null && n.external)) {
    if (!Xt(e, "external-sticker")) return null;
    const g = ni(e == null ? void 0 : e.id), k = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const m of Array.isArray(k) ? k : [k])
      if (o = wn(m), o) break;
  }
  if (!o) return null;
  const s = Rr(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Mn(e).ownOutputRev : 0, c = n != null && n.external ? Pd(o, l) : o, d = Z_(o, a, l);
  return kd.get(e, d, c, (g, k) => {
    var m, h;
    k && (n != null && n.external && Mn(e).outputFromRun && Qr(e, "image-loaded"), (h = (m = St(e).dom) == null ? void 0 : m.requestDraw) == null || h.call(m));
  }) || null;
}
function Gw(e, t) {
  var f, g, k, m;
  const r = St(e), n = Yw(e, t), i = qw(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const _ = n.getGroupDisplayCanvas(h);
    return _ ? {
      id: `paint_group:${h}`,
      source: _,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (m = (k = r.rasterCache) == null ? void 0 : k.retain) == null || m.call(k, []), a;
  r.rasterCache || (r.rasterCache = X_()), r.rasterReady || (r.rasterReady = () => {
    var h, _;
    return (_ = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : _.call(h);
  });
  const c = B_(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const _ = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return _ ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: _.source,
      revision: _.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function Ww(e, t, r, n) {
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
  const i = Uw(e, t, n);
  return i || null;
}
function Kw(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = zt == null ? void 0 : zt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Uw(e, t, r) {
  var i, o;
  const n = Kw(t, r || (zt == null ? void 0 : zt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Bw(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Yw(e, t) {
  var d, u, f, g, k, m, h, _, X, j, J, O;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (g = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : g.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = Bw(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = yl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((_ = s.paintRevision) == null ? void 0 : _.mask) !== c.mask || ((X = s.paintRevision) == null ? void 0 : X.groups) !== c.groups || ((j = s.paintRevision) == null ? void 0 : j.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((J = t == null ? void 0 : t.painting) == null ? void 0 : J.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((O = t == null ? void 0 : t.painting) == null ? void 0 : O.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function qw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Qf(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Xw(e, t, r) {
  const n = Sd(t, r);
  n.visible && vd(e, n.boundaryEdges, { selected: !1 });
}
function Jw(e, t, r) {
  const n = Sd(t, r);
  n.visible && (e.save(), vd(e, n.boundaryEdges, { selected: !0 }), wg(e, n, { accent: j_(t) }), e.restore());
}
function cu(e, t, r) {
  return Im(Ka(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function el(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? so;
}
function Zw(e) {
  return [Xt(e, "background") ? ud(ni(e.id), ["pano_input_videos"], wn) : "", Ag(e, nr)];
}
function Qw(e) {
  var o;
  if (!Xt(e, "external-sticker")) return null;
  const t = ni(e.id), r = Rr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(wn), meta: r };
  const i = ud(t, ["pano_sticker_input_videos"], wn);
  return i ? { src: i, meta: r } : null;
}
function ex({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Rg(e, t) {
  var n;
  const r = St(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: jr({ ...t, painting: null }) }), r.scene.sceneState;
}
function tx(e, t) {
  const r = Ml(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Xt(e, "background")) {
    const o = Rr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if ($m(e, nr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === Ag(e, nr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = Tg(e, nr, null, { preserveReadyWhilePending: !1 });
  return ps(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function nx(e, t) {
  var i, o, s;
  const r = String(((i = mr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Xt(e, a));
  return {
    stateText: String(((o = mr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: Sn(e).coverage,
    bgColor: String(((s = mr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? tx(e, t) : null,
    run: n && Rr(e, "pano_output_size") || null,
    erp: Rr(e, "pano_output_erp") || null,
    frame: Rr(e, "pano_output_frame") || null
  };
}
const rx = 38;
function Nd(e) {
  const t = Mn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function ix(e, t) {
  const r = Mn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === wn(t.entry) ? r : null;
}
function ox(e, t) {
  const r = Mn(e), n = St(e), i = t ? wn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Nd(e), !i) return null;
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
      revision: wa(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: V_(t.entry.rotation)
    }
  } : null;
}
function sx(e, t) {
  var r;
  return t ? (r = ix(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function ax(e, t, r) {
  const n = Rg(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = Qa(e, s.id, Ga(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = fd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: wa(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = Qa(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return ps(a) ? { media: a, revision: wa(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : Gw(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: ps(r) ? { media: r, revision: wa(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Om(n, el(e), t.stickers, { media: i, paintLayers: o })
  };
}
function lx(e, t, r, n = null) {
  var W, ee, pe, D, se, re, Q;
  const i = St(e), o = String(i.mode || "stickers");
  Lg(e, o);
  const s = Sn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (pe = (ee = (W = i.cutout) == null ? void 0 : W.session) == null ? void 0 : ee.refresh) == null || pe.call(ee)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (re = (se = (D = i.stickers) == null ? void 0 : D.session) == null ? void 0 : se.refresh) == null || re.call(se));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Fo(e, !1, "");
    const { width: K, height: T } = Qf(n.frame), H = rx, C = Math.min(l / K, (c - H) / T);
    d.drawImage(n.frame, (l - K * C) / 2, H + (c - H - T * C) / 2, K * C, T * C);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, g = (f == null ? void 0 : f.media) || (i.playback ? ex(i.playback) : Lw(e, ["pano_input_videos"], () => {
    var K, T;
    return (T = (K = i.dom) == null ? void 0 : K.requestDraw) == null ? void 0 : T.call(K);
  })) || Tg(
    e,
    nr,
    () => {
      var K, T;
      return (T = (K = i.dom) == null ? void 0 : K.requestDraw) == null ? void 0 : T.call(K);
    },
    { preserveReadyWhilePending: !1 }
  ), k = ps(g);
  let m = null;
  const h = () => f ? { background: f, layers: [] } : ax(e, s, g), _ = (K, T) => {
    m || (m = h());
    const H = r.render({ width: K.w, height: K.h, camera: T, ...m });
    return H && d.drawImage(H.canvas, H.x, H.y, H.width, H.height, K.x, K.y, K.w, K.h), !!H;
  };
  if (o === "cutout") {
    const K = jw(s), T = Qf(g), H = K ? Ee(ii(K).aspect, 0.1, 10) : k ? Ee(Number(T.width / T.height), 0.05, 20) : 1, C = bd(u, H);
    i.cutoutFrame = C;
    let $ = "none";
    const R = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (K)
      if (g && !k)
        $ = "loading";
      else if (k) {
        const U = QS({ width: l, height: c }, C, K);
        [
          !U.fallback || _(U.fallback.rect, Jo(U.fallback.shot)),
          _(U.rect, Jo(U.shot)),
          !U.fallback || _(C, Jo(K))
        ].every(Boolean) || ($ = "loading");
      } else
        $ = "empty";
    else {
      const U = i.lastCutoutShot;
      U ? (i.view = fg(U, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), k ? _(u, Ka(i.view, l, c)) || ($ = "loading") : g ? $ = "loading" : $ = "empty";
    }
    k || r.release(), r.failed && $ === "loading" && ($ = "none"), K && (i.lastCutoutShot = { ...K }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(C.x, C.y, C.w, C.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(C.x + 0.5, C.y + 0.5, Math.max(0, C.w - 1), Math.max(0, C.h - 1)), d.restore()), $ === "loading" ? (hc(e, !1), Fo(e, !0, R)) : $ === "empty" ? (hc(e, !0), Fo(e, !1, "")) : (hc(e, !1), Fo(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let X = !1;
  (!g || k) && (m = h(), !m.background && !m.layers.length ? (r.release(), X = !0) : X = _(u, Ka(i.view, l, c)));
  const j = !X && !r.failed;
  Fo(e, j, j ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), j && zw(d, u, Zf(t, u));
  const J = cu(e, l, c);
  !g && X && cx(d, J, Zf(t, u));
  const O = String(((Q = s == null ? void 0 : s.active) == null ? void 0 : Q.selected_sticker_id) || ""), Y = Qc(s, el(e)), G = X && e.__panoStudio !== !0 ? Y.find((K) => String((K == null ? void 0 : K.id) || "") === O && (K == null ? void 0 : K.visible) !== !1) : null;
  X && !f && Y.filter((K) => K !== G && (K == null ? void 0 : K.visible) !== !1 && (K.external || K.source_kind === "external_image")).filter((K) => !ps(Qa(e, K.id, null, { external: !0 }))).forEach((K) => Xw(d, K, J)), G && Jw(d, G, J);
}
function ep(e, t, r, n, i = 1) {
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
function cx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Cn(c, a));
    ep(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Cn(a, c));
    ep(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Cn(0, 0) },
    { name: "Right", dir: Cn(90, 0) },
    { name: "Back", dir: Cn(180, 0) },
    { name: "Left", dir: Cn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function uu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function ux(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function jn(e, t) {
  return ux(e, t) ? !1 : (uu(e), !0);
}
function tp() {
  var r;
  const e = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function dx(e) {
  var r;
  if (!e) return;
  const t = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function fx(e, t = 360, r = 260) {
  const n = St(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !Cg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function px(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = St(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function np(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = St(e);
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
      s.userResized = !0, t == null || t(), i && hx(e, 180, t);
    }
  };
}
function hx(e, t = 180, r = null) {
  if (!e) return;
  const n = St(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function zo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const mx = /* @__PURE__ */ new WeakMap();
function Vg(e, t) {
  return Km(mx, e, t) ? !1 : (Dw(e, t), Dg(e), zo(e), !0);
}
async function gx(e) {
  var r, n;
  const t = await PS(e, zt, pn);
  t && (Vg(e, t), (n = (r = St(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function yx(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = St(e), i = Mn(e), o = Rn(e), s = Ig(e);
  if (s && !r) {
    Md(e);
    return;
  }
  s && fx(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: Xf(e)
  }.signature || Xf(e), au(e), e == null || e.id, n.mode, e.addDOMWidget, su(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, g = f ? 0 : 56, k = f ? 0 : qS, m = document.createElement("div");
  if (_w(), m.className = "pano-node-preview-dom", m.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    k > 0 ? `min-height:${k}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const ae = Xa(iu(
      e.addDOMWidget(ou(), "preview", m, np(e, null))
    ));
    zo(e), n.dom = { widget: ae, root: m, requestDraw: () => {
    } };
    return;
  }
  const h = document.createElement("div");
  h.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const _ = nn({ label: "node.surface" });
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
  const X = document.createElement("div");
  X.style.cssText = [
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
  ].join(";"), X.textContent = "Connect ERP image", h.appendChild(_), h.appendChild(X), m.appendChild(h);
  const j = Oh(m), J = document.createElement("div");
  J && (J.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", J.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(J)), ww(e, 120, 120), zo(e);
  let O = null;
  try {
    px(e, g, () => {
      var ae, Fe;
      return (Fe = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Fe.call(ae);
    }), O = Xa(iu(e.addDOMWidget(
      ou(),
      "preview",
      m,
      np(
        e,
        () => {
          var ae, Fe;
          return (Fe = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Fe.call(ae);
        },
        g,
        k,
        !1
      )
    )));
  } catch {
    return;
  }
  const Y = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, G = z_(), W = () => {
    Y.destroyed || (Y.needsDraw = !0, !Y.inTick && !Y.raf && (Y.raf = requestAnimationFrame(b)));
  }, ee = Lm(W), pe = /* @__PURE__ */ co(a ? {
    ...ag(Sn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...ug(Sn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ae) => ({ value: ae, label: ae }))
  });
  let D = null;
  if (a && e.__panoSceneStateV2) {
    const [ae, Fe] = [0, 1].map(() => {
      const Ge = Ss(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ge), Ge;
    }), Pe = nn({ label: "node.still" });
    Pe.__panoFrameIdx = 0;
    const Ve = nn({ label: "node.port-still" });
    Ve.__panoFrameIdx = 0;
    const Ye = BS({
      video: ae,
      stickerVideo: Fe,
      createImage: (Ge, Ke) => {
        const pt = new Image();
        return pt.onload = Ke, pt.onerror = Ke, pt.src = Ge, pt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => Sn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: W,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ke;
        if (!(ae.videoWidth > 0 && ae.videoHeight > 0)) return;
        const Ge = Math.min(1, vw / ae.videoWidth);
        Pe.width = Math.round(ae.videoWidth * Ge), Pe.height = Math.round(ae.videoHeight * Ge), (Ke = Pe.getContext("2d")) == null || Ke.drawImage(ae, 0, 0, Pe.width, Pe.height), Pe.__panoFrameIdx += 1, W();
      },
      onStickerCapture: () => {
        var Ge;
        Fe.videoWidth > 0 && Fe.videoHeight > 0 && (Ve.width = Fe.videoWidth, Ve.height = Fe.videoHeight, (Ge = Ve.getContext("2d")) == null || Ge.drawImage(Fe, 0, 0), Ve.__panoFrameIdx += 1, W());
      },
      onChange: () => {
        pe.playing = Ye.playing, W();
      }
    });
    D = { playback: Ye, video: ae, still: Pe, stickerVideo: Fe, stickerStill: Ve, stickerSource: "" }, n.playback = D;
  }
  const se = () => {
    var pt;
    const { playback: ae, still: Fe, stickerStill: Pe } = D, Ve = ba(h, !!((pt = e.flags) != null && pt.collapsed)), Ye = ae.source, Ge = Ve ? Qw(e) : null, Ke = ae.follow({
      shown: Ve,
      sources: Ve ? Zw(e) : [],
      state: Sn(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== D.stickerSource && (D.stickerSource = (Ge == null ? void 0 : Ge.src) || "", is(Pe)), ae.source !== Ye && (is(Fe), Fe.__panoFrameIdx = 0), pe.playable = Ke, pe.playing = ae.playing;
  }, re = () => {
    var Fe, Pe;
    const ae = ((Fe = i.ownOutputVideo) == null ? void 0 : Fe.player) ?? null;
    ae && !ba(h, !!((Pe = e.flags) != null && Pe.collapsed)) && ae.pause(), a && (pe.playable = !!ae && !ae.failed(), pe.playing = !!(ae != null && ae.playing));
  }, Q = () => {
    var ae;
    D == null || D.playback.pause(), (ae = i.ownOutputVideo) == null || ae.player.pause();
  };
  let K = null;
  const T = (a ? KS : t_)({
    readState: () => Sn(e),
    publishLiveState: (ae) => {
      ae ? (K = ae, o.liveState = ae) : (o.liveState === K && (o.liveState = null), K = null), o.liveStateVersion += 1, o.parsedState = null, W();
    },
    commitState: (ae) => {
      var Ve, Ye, Ge, Ke;
      const Fe = mr(e, "state_json");
      if (!Fe) return;
      pm(e, ae.active);
      const Pe = hm(e, ae);
      mm(e, Pe, String(Fe.value ?? "")) || (Fe.value = Pe, (Ve = Fe.callback) == null || Ve.call(Fe, Pe), o.parsedState = null, (Ye = e.setDirtyCanvas) == null || Ye.call(e, !0, !0), (Ke = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || Ke.call(Ge, !0, !0));
    },
    onChange: (ae) => Object.assign(pe, ae)
  }), C = a ? xg(e, (ae = "sync", Fe = null) => {
    var sn;
    if (!a || !e.graph || !T || T.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Gt = Xt(e, "external-sticker");
      return T.apply({
        type: "sync-port",
        value: og(e, {
          pose: Gt ? Rr(e, "pano_sticker_input_pose", Fe) : null
        })
      });
    }
    const Pe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Gt) => String((Gt == null ? void 0 : Gt.name) || "") === "sticker_image") : -1, Ve = Pe >= 0 ? ((sn = e.getInputLink(Pe)) == null ? void 0 : sn.id) ?? null : null;
    if (Ve == null)
      return T.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Xt(e, "external-sticker")) return !1;
    const Ye = Rr(e, "pano_sticker_input_pose", Fe), Ge = Array.isArray(Ye) ? Ye[0] : Ye, Ke = String(Rr(e, "pano_sticker_input_state_hash", Fe) ?? ""), pt = n.view || { yaw: 0, pitch: 0 }, yt = Sn(e), At = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Gt) => String((Gt == null ? void 0 : Gt.id) || "") === "sticker_image_1"), Ct = Qa(e, "sticker_image_1", null, { external: !0 }), zn = Ge && typeof Ge == "object" ? Ge : At || { yaw_deg: pt.yaw, pitch_deg: pt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return T.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ve,
        stateHash: Ke,
        pose: zn,
        imageWidth: Number((Ct == null ? void 0 : Ct.naturalWidth) || (Ct == null ? void 0 : Ct.width) || 0),
        imageHeight: Number((Ct == null ? void 0 : Ct.naturalHeight) || (Ct == null ? void 0 : Ct.height) || 0)
      }
    });
  }) : () => {
  };
  let $ = 0;
  const R = async (ae) => {
    if (!a || !T || !Zn(ae)) return !1;
    Q();
    const Fe = `asset_${Math.random().toString(16).slice(2, 10)}`, Pe = `st_${Math.random().toString(16).slice(2, 10)}`, Ve = { ...n.view || { yaw: 0, pitch: 0 } };
    $ += 1, pe.importing = !0;
    const Ye = Vo(e, `add:${Fe}`, async () => {
      const Ge = await $o(ae), Ke = await yi(ae, {
        fetchApi: (pt, yt) => pn.fetchApi(pt, yt)
      });
      return ie(), T.apply({
        type: "add-sticker",
        value: {
          stickerId: Pe,
          assetId: Fe,
          asset: Ke,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Ve.yaw || 0),
          pitch_deg: Number(Ve.pitch || 0)
        }
      });
    });
    try {
      return await Ye;
    } catch {
      return !1;
    } finally {
      $ = Math.max(0, $ - 1), pe.importing = $ > 0, W();
    }
  };
  let U = null, de = null, Se = null, te = !1;
  const N = () => {
    var ae;
    return Se && (clearTimeout(Se), Se = null), te ? (te = !1, ((ae = T == null ? void 0 : T.commitGesture) == null ? void 0 : ae.call(T)) ?? !1) : !1;
  }, ie = () => {
    var Ve, Ye, Ge;
    const ae = N(), Fe = (U == null ? void 0 : U.pointerId) ?? (de == null ? void 0 : de.pointerId);
    if (U = null, de = null, Fe != null) {
      try {
        (Ve = _.hasPointerCapture) != null && Ve.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Pe = ((Ge = T == null ? void 0 : T.commitGesture) == null ? void 0 : Ge.call(T)) ?? !1;
    return ae || Pe;
  }, ue = () => {
    var Ve, Ye, Ge;
    const ae = N(), Fe = U == null ? void 0 : U.pointerId;
    if (U = null, Fe != null) {
      try {
        (Ve = _.hasPointerCapture) != null && Ve.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Pe = ((Ge = T == null ? void 0 : T.cancelGesture) == null ? void 0 : Ge.call(T)) ?? !1;
    return ae || Pe;
  }, be = () => ie();
  T && o.flushers.add(be);
  let ve = null, I = !1;
  if (J && T)
    try {
      _d(), ve = Lu(l ? F_ : a ? N_ : v_, {
        model: pe,
        onAction: (ae) => {
          var Ve, Ye, Ge;
          if ((ae == null ? void 0 : ae.type) === "toggle-playback") {
            ie(), D ? D.playback.toggle() : (Ve = i.ownOutputVideo) == null || Ve.player.toggle(), W();
            return;
          }
          if (Q(), (ae == null ? void 0 : ae.type) === "open-editor") {
            ie(), a || (pe.aspectOpen = !1), (Ye = n.openEditor) == null || Ye.call(n);
            return;
          }
          if (a) {
            if ((ae == null ? void 0 : ae.type) === "add-image-file") {
              R(ae.file);
              return;
            }
            T.apply(ae) && W();
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "toggle-aspect") {
            pe.aspectOpen = !pe.aspectOpen;
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "close-aspect") {
            pe.aspectOpen = !1;
            return;
          }
          let Fe = ae;
          if ((ae == null ? void 0 : ae.type) === "add-frame") {
            const Ke = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Fe = {
              ...ae,
              ...JS(Ke, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((ae == null ? void 0 : ae.type) === "delete-frame") {
            const Ke = Mi(Sn(e));
            Ke && (n.view = fg(Ke, {
              width: _.width,
              height: _.height
            }));
          }
          const Pe = ((Ge = n.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          pe.aspectOpen = !1, T.apply({ ...Fe, safeRect: Pe }) && W();
        }
      }), ve.mount(J), I = !0;
    } catch {
      ve = null, I = !1;
    }
  const ce = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    D && se(), W();
  }) : null;
  ce == null || ce.observe(h);
  const b = (ae) => {
    var Pe, Ve, Ye;
    Y.raf = 0, Y.inTick = !0;
    let Fe = !1;
    try {
      if (Fe = y.stepInertia(ae), Y.needsDraw || Fe) {
        Y.needsDraw = !1, D ? se() : re();
        const Ge = l ? nx(e, D) : null, Ke = Ge ? R_(Ge) : null, pt = () => Rg(e, Sn(e)), yt = Ge && ba(h, !!((Pe = e.flags) != null && Pe.collapsed)) ? ox(e, Ke) : null;
        if ((Ve = e.flags) != null && Ve.collapsed || lx(e, _, ee, yt), pe.viewUnavailable = ee.failed, l) {
          const At = G({ ...Ge, display: sx(e, Ke) }, pt);
          At && (pe.status = At);
        }
      }
    } finally {
      Y.inTick = !1;
    }
    (Fe || Y.needsDraw) && !Y.raf && (Y.raf = requestAnimationFrame(b)), Sw() && (!n.debugLastTs || ae - n.debugLastTs > 1200) && (n.debugLastTs = ae, n.mode, su(e), Oo(m), Oo(h), Oo(_), Oo(m.parentElement), Oo((Ye = m.parentElement) == null ? void 0 : Ye.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, y = ju({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (ae) => {
      n.view = ae;
    },
    getViewportSize: () => {
      const ae = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ae.width || _.clientWidth || 0)),
        h: Math.max(1, Number(ae.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ae = qf();
      return {
        x: ae.invert_view_x ? -1 : 1,
        y: ae.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      W();
    }
  }), F = a ? h : m, v = (ae) => {
    const Fe = _.getBoundingClientRect();
    return {
      x: (Number(ae.clientX) - Fe.left) * (_.width / Math.max(1, Fe.width)),
      y: (Number(ae.clientY) - Fe.top) * (_.height / Math.max(1, Fe.height))
    };
  }, z = (ae) => {
    var Ve, Ye;
    if (!a || l || !d) return;
    const Fe = Sn(e), Pe = Wf(
      Qc(Fe, el(e)),
      String(((Ve = Fe == null ? void 0 : Fe.active) == null ? void 0 : Ve.selected_sticker_id) || ""),
      v(ae),
      cu(e, _.width, _.height)
    );
    if (!Pe) {
      _.style.cursor = "grab";
      return;
    }
    if (((Ye = Pe.item) == null ? void 0 : Ye.locked) === !0) {
      _.style.cursor = "default";
      return;
    }
    _.style.cursor = Pe.hit.cursor || "default";
  };
  _.addEventListener("pointerdown", (ae) => {
    var pt, yt, At, Ct, zn, Xe, sn, Gt, ai, Gr, li;
    if (!jn(ae, F) || ae.button !== 0) return;
    if (!a) {
      const rn = Mi(Sn(e)), yn = n.cutoutFrame;
      if (!rn) {
        (pt = m.focus) == null || pt.call(m, { preventScroll: !0 }), (yt = _.setPointerCapture) == null || yt.call(_, ae.pointerId), _.style.cursor = "grabbing", y.startDrag(ae.clientX, ae.clientY, ae.pointerId);
        return;
      }
      if (rn.locked === !0 || !yn || !T) return;
      const Wr = v(ae);
      let _r;
      if (ae.shiftKey) {
        const ir = hg({
          frame: yn,
          point: Wr,
          startRollDeg: Number(rn.roll_deg ?? rn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!ir) return;
        _r = { kind: "roll", pointerId: ae.pointerId, rollGesture: ir };
      } else {
        const ir = ((At = Sn(e)) == null ? void 0 : At.ui_settings) || qf();
        _r = {
          kind: "pan",
          pointerId: ae.pointerId,
          startPoint: Wr,
          startShot: { ...rn },
          focalPx: Ni(yn, rn),
          invertX: ir.invert_view_x === !0,
          invertY: ir.invert_view_y === !0
        };
      }
      ie(), (Ct = m.focus) == null || Ct.call(m, { preventScroll: !0 }), (zn = _.setPointerCapture) == null || zn.call(_, ae.pointerId), _.style.cursor = "grabbing", T.beginGesture(), U = _r;
      return;
    }
    if (!d) return;
    const Fe = v(ae), Pe = Sn(e), Ve = String(((Xe = Pe == null ? void 0 : Pe.active) == null ? void 0 : Xe.selected_sticker_id) || ""), Ye = cu(e, _.width, _.height);
    (sn = m.focus) == null || sn.call(m, { preventScroll: !0 });
    const Ge = () => Wf(Qc(Pe, el(e)), Ve, Fe, Ye);
    let Ke = l ? null : Ge();
    if (Ke && (D != null && D.playback.playing) && (Q(), Ke = Ge()), Ke && T) {
      if (y.stopMotion(), ie(), String(((Gt = Ke.item) == null ? void 0 : Gt.id) || "") !== Ve && T.apply({ type: "select-sticker", id: Ke.item.id }), ((ai = Ke.item) == null ? void 0 : ai.locked) === !0) {
        W();
        return;
      }
      const rn = Fe, yn = Ke.geometry.center;
      de = {
        active: !0,
        kind: Ke.hit.kind,
        pointerId: ae.pointerId,
        startPoint: rn,
        startCenter: { ...yn },
        startSticker: { ...Ke.item },
        startDistance: Math.max(1, Math.hypot(rn.x - yn.x, rn.y - yn.y)),
        startAngle: Math.atan2(rn.y - yn.y, rn.x - yn.x),
        projection: Ye
      }, T.beginGesture(), (Gr = _.setPointerCapture) == null || Gr.call(_, ae.pointerId), _.style.cursor = Ke.hit.kind === "rotate" ? "grabbing" : Ke.hit.kind === "move" ? "move" : Ke.hit.cursor, W();
      return;
    }
    (li = _.setPointerCapture) == null || li.call(_, ae.pointerId), _.style.cursor = "grabbing", y.startDrag(ae.clientX, ae.clientY, ae.pointerId);
  }), _.addEventListener("pointermove", (ae) => {
    if (!a) {
      if (!U) {
        if (!y.state.drag.active) return;
        jn(ae, F), y.moveDrag(ae.clientX, ae.clientY, "pano");
        return;
      }
      if (U.pointerId !== ae.pointerId || !T) return;
      if (jn(ae, F), U.kind === "pan") {
        const Pe = v(ae);
        T.updateGesture({
          type: "pan-camera",
          startShot: U.startShot,
          dx: Pe.x - U.startPoint.x,
          dy: Pe.y - U.startPoint.y,
          focalPx: U.focalPx,
          invertX: U.invertX,
          invertY: U.invertY
        });
        return;
      }
      const Fe = mg(U.rollGesture, v(ae), ae);
      if (!Fe) return;
      U.rollGesture = Fe.gesture, T.updateGesture({ type: "set-roll", value: Fe.rollDeg });
      return;
    }
    if (!de && !y.state.drag.active) {
      z(ae);
      return;
    }
    if (de) {
      if (de.pointerId !== ae.pointerId || !T) return;
      jn(ae, F);
      const Fe = v(ae);
      let Pe = de.startSticker;
      if (de.kind === "move")
        Pe = W_(
          de.startSticker,
          {
            x: de.startCenter.x + Fe.x - de.startPoint.x,
            y: de.startCenter.y + Fe.y - de.startPoint.y
          },
          de.projection
        );
      else if (de.kind === "scale") {
        const Ve = Math.hypot(Fe.x - de.startCenter.x, Fe.y - de.startCenter.y);
        Pe = K_(de.startSticker, de.startDistance, Ve);
      } else if (de.kind === "rotate") {
        const Ve = Math.atan2(Fe.y - de.startCenter.y, Fe.x - de.startCenter.x);
        Pe = U_(de.startSticker, de.startAngle, Ve, ae.shiftKey === !0);
      }
      T.updateGesture({ type: "set-transform", value: Pe }), W();
      return;
    }
    !d || !y.state.drag.active || (jn(ae, F), y.moveDrag(ae.clientX, ae.clientY, "pano"));
  });
  const x = () => {
    var Fe, Pe;
    if (!U && !de) {
      if (!y.state.drag.active) return;
      y.endDrag(), _.style.cursor = "grab", W();
      return;
    }
    if (!T) return;
    const ae = (U == null ? void 0 : U.pointerId) ?? (de == null ? void 0 : de.pointerId);
    U = null, de = null;
    try {
      (Fe = _.hasPointerCapture) != null && Fe.call(_, ae) && ((Pe = _.releasePointerCapture) == null || Pe.call(_, ae));
    } catch {
    }
    T.cancelGesture(), _.style.cursor = "grab", W();
  }, L = (ae, Fe = !1) => {
    var Pe, Ve, Ye, Ge;
    if (!a) {
      if (!U) {
        if (!y.state.drag.active) return;
        jn(ae, F), (Pe = _.releasePointerCapture) == null || Pe.call(_, ae.pointerId), _.style.cursor = "grab", y.endDrag(), W();
        return;
      }
      if (U.pointerId !== ae.pointerId || !T) return;
      jn(ae, F), U = null, (Ve = _.releasePointerCapture) == null || Ve.call(_, ae.pointerId), _.style.cursor = "grab", Fe ? T.cancelGesture() : T.commitGesture(), z(ae), W();
      return;
    }
    if (de) {
      if (de.pointerId !== ae.pointerId || !T) return;
      jn(ae, F), de = null, (Ye = _.releasePointerCapture) == null || Ye.call(_, ae.pointerId), _.style.cursor = "grab", Fe ? T.cancelGesture() : T.commitGesture(), W();
      return;
    }
    !d || !y.state.drag.active || (jn(ae, F), (Ge = _.releasePointerCapture) == null || Ge.call(_, ae.pointerId), _.style.cursor = "grab", y.endDrag(), W());
  };
  _.addEventListener("pointerup", L), _.addEventListener("pointercancel", (ae) => L(ae, !0)), _.addEventListener("lostpointercapture", x), _.addEventListener("pointerleave", (ae) => {
    !a && U || de || y.state.drag.active && L(ae);
  });
  const S = (ae) => {
    const Fe = document.activeElement;
    if (Fe !== m && !m.contains(Fe)) return;
    if (ae.key === "Escape" && (U || de) && T) {
      x(), uu(ae);
      return;
    }
    if (!a || l || ae.key !== "Delete" && ae.key !== "Backspace" || !T) return;
    const Pe = ae.target, Ve = String((Pe == null ? void 0 : Pe.tagName) || "").toUpperCase();
    Ve === "INPUT" || Ve === "TEXTAREA" || Pe != null && Pe.isContentEditable || pe.canDelete === !0 && (Q(), ie(), T.apply({ type: "delete-selected" }) && W(), uu(ae));
  };
  window.addEventListener("keydown", S, !0);
  const M = gw({
    requestFrame: (ae) => requestAnimationFrame(ae),
    cancelFrame: (ae) => cancelAnimationFrame(ae),
    restore: (ae) => dx(ae)
  }), E = (ae) => {
    var Pe, Ve, Ye, Ge, Ke, pt;
    if (!jn(ae, F)) return;
    if (!a) {
      const yt = Mi(Sn(e));
      if (yt && yt.locked !== !0 && T) {
        const At = Fa(ae);
        At !== 0 && (te || (ie(), T.beginGesture(), te = !0), T.updateGesture({
          type: "step-fov",
          direction: At
        }) ? (Se && clearTimeout(Se), Se = setTimeout(N, 180), W()) : T.hasGestureChanges() || (T.cancelGesture(), te = !1));
      } else if (!yt) {
        const At = tp();
        y.applyWheelEvent(ae) && W(), M.schedule(At);
      }
      (Pe = ae.preventDefault) == null || Pe.call(ae), (Ve = ae.stopPropagation) == null || Ve.call(ae), (Ye = ae.stopImmediatePropagation) == null || Ye.call(ae);
      return;
    }
    if (!d) return;
    const Fe = tp();
    y.applyWheelEvent(ae) && W(), (Ge = ae.preventDefault) == null || Ge.call(ae), (Ke = ae.stopPropagation) == null || Ke.call(ae), (pt = ae.stopImmediatePropagation) == null || pt.call(ae), M.schedule(Fe);
  }, q = a ? [h, _] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ae) => {
    q.forEach((Fe) => Fe.addEventListener(ae, E, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ae) => {
    _.addEventListener(ae, (Fe) => jn(Fe, F)), h.addEventListener(ae, (Fe) => jn(Fe, F));
  });
  const le = mr(e, "state_json");
  let ge = null, Z = null;
  le && !le.__panoPreviewPatchedCb && (ge = le.callback, Z = (ae) => {
    const Fe = ge ? ge(ae) : void 0;
    return W(), Fe;
  }, le.callback = Z, le.__panoPreviewPatchedCb = Z);
  const he = mr(e, "bg_color");
  let _e = null, Ne = null;
  he && !he.__panoPreviewPatchedCb && (_e = he.callback, Ne = (ae) => {
    const Fe = _e ? _e(ae) : void 0;
    return W(), Fe;
  }, he.callback = Ne, he.__panoPreviewPatchedCb = Ne);
  const fe = l ? mr(e, "output_size") : null, ye = fe == null ? void 0 : fe.callback, ne = fe ? (ae) => {
    const Fe = ye ? ye(ae) : void 0;
    return W(), Fe;
  } : null;
  fe && (fe.callback = ne);
  const p = e.onRemoved, A = e.onResize, w = e.onExecuted, P = e.onDragOver, B = e.onDragDrop;
  let me = null;
  const V = () => {
    a && (pe.dropActive = !0, me && clearTimeout(me), me = setTimeout(() => {
      me = null, pe.dropActive = !1;
    }, 140));
  }, oe = c ? function(ae) {
    return (P ? P.apply(this, arguments) : !1) === !0 ? !0 : xd(ae == null ? void 0 : ae.dataTransfer) ? (V(), !0) : !1;
  } : null, Ae = c ? function(ae) {
    var Ve;
    if ((B ? B.apply(this, arguments) : !1) === !0) return !0;
    const Pe = Array.from(((Ve = ae == null ? void 0 : ae.dataTransfer) == null ? void 0 : Ve.files) || []).find((Ye) => Zn(Ye));
    return Pe ? (me && clearTimeout(me), me = null, pe.dropActive = !1, R(Pe), !0) : !1;
  } : null;
  c && (e.onDragOver = oe, e.onDragDrop = Ae);
  const ke = c ? mw(m, {
    onActive: (ae) => {
      if (ae) {
        V();
        return;
      }
      me && clearTimeout(me), me = null, pe.dropActive = !1;
    },
    onDrop: (ae) => {
      R(ae);
    }
  }) : () => {
  }, Me = function(ae) {
    i.outputFromRun = !0;
    const Fe = Vg(e, ae);
    Qr(e, Fe ? "executed" : "sync", ae), W();
    const Pe = w ? w.apply(this, arguments) : void 0;
    return zo(e), Pe;
  };
  e.onExecuted = Me;
  const Ie = e.onConnectionsChange, Re = function(ae, Fe) {
    const Pe = Of(e, ae, Fe, cd), Ve = Of(e, ae, Fe, nr), Ye = arguments, Ge = Ie ? Ie.apply(this, Ye) : void 0, Ke = () => {
      Y.destroyed || (Ve && $w(e), Pe && Qr(e, "connection-change"), zo(e), W());
    };
    return Ke(), queueMicrotask(Ke), Ge;
  };
  e.onConnectionsChange = Re;
  const je = function() {
    const ae = A ? A.apply(this, arguments) : void 0;
    return St(this).userResized = !0, W(), ae;
  };
  e.onResize = je;
  const We = function() {
    return $e(), lu.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = We;
  const $e = () => {
    var ae, Fe, Pe, Ve, Ye, Ge, Ke;
    Y.destroyed = !0, (ae = ce == null ? void 0 : ce.disconnect) == null || ae.call(ce), a ? ie() : ue(), _.removeEventListener("lostpointercapture", x), ke(), j(), window.removeEventListener("keydown", S, !0), o.flushers.delete(be), (Fe = T == null ? void 0 : T.destroy) == null || Fe.call(T), (Pe = ve == null ? void 0 : ve.unmount) == null || Pe.call(ve), D && (D.playback.dispose(), D.video.remove(), D.stickerVideo.remove(), n.playback === D && (n.playback = null)), ee.dispose(), n.scene = null, (Ye = (Ve = n.rasterCache) == null ? void 0 : Ve.dispose) == null || Ye.call(Ve), n.rasterCache = null, n.rasterReady = null, C(), M.dispose(), me && clearTimeout(me), me = null, kd.disposeOwner(e), Qi(e), Nd(e), Y.raf && cancelAnimationFrame(Y.raf), Y.raf = 0, ((Ge = n.cutout) == null ? void 0 : Ge.session) === T && (n.cutout = null), ((Ke = n.stickers) == null ? void 0 : Ke.session) === T && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === je && (e.onResize = A), e.onExecuted === Me && (e.onExecuted = w), e.onConnectionsChange === Re && (e.onConnectionsChange = Ie), Z && (le == null ? void 0 : le.callback) === Z && (le.callback = ge), Z && (le == null ? void 0 : le.__panoPreviewPatchedCb) === Z && delete le.__panoPreviewPatchedCb, Ne && (he == null ? void 0 : he.callback) === Ne && (he.callback = _e), Ne && (he == null ? void 0 : he.__panoPreviewPatchedCb) === Ne && delete he.__panoPreviewPatchedCb, ne && fe.callback === ne && (fe.callback = ye), e.onDragOver === oe && (e.onDragOver = P), e.onDragDrop === Ae && (e.onDragDrop = B), e.onRemoved === We && (e.onRemoved = p);
  };
  n.restore = $e, n.cutout = T && I && !a ? { session: T, model: pe } : null, n.stickers = T && I && a ? { session: T, model: pe } : null, n.dom = {
    widget: O,
    root: m,
    canvas: _,
    requestDraw: W,
    state: Y,
    emptyHintEl: X,
    nodeSurface: n.cutout
  }, lu.register(e), e.graph && Qr(e, "attach"), W();
}
function rp(e, t = {}) {
  Eg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function ip(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Ig(e) && !r) {
    Md(e);
    return;
  }
  Eg(e).attach(t);
}
function bx(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function vx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let g = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (g = Math.min(g, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(c * g))
  };
}
function Sx({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var g;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const k = l();
    return k === a || (a = k, i(k)), k;
  }, d = () => c();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var k;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
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
    var k, m, h;
    if (!s) {
      if (s = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", d), l())
        try {
          const _ = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (h = _ == null ? void 0 : _.catch) == null || h.call(_, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const _x = { class: "pano-preview-node-surface" }, wx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), Le("div", _x, [
      Be(Jt, {
        icon: e.model.fullscreen ? nt(ze).fullscreen_close : nt(ze).fullscreen,
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
      e.model.viewUnavailable ? (Te(), Vn(Nl, { key: 0 })) : ht("", !0)
    ]));
  }
}, Zs = 140, xx = 180, op = 40, mc = 10;
function sp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function ap(e, t) {
  const r = sp(e), n = sp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function lp(e) {
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
  return typeof ((o = pn) == null ? void 0 : o.apiURL) == "function" ? pn.apiURL(i) : i;
}
function eo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return eo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return lp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = eo(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : lp(e);
}
function $g(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function kx(e) {
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
function du(e) {
  var i;
  const t = (i = Qn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (ap(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (ap(o, r)) return t[o];
  return null;
}
function Mx(e) {
  var n, i;
  const t = du(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = eo(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function Px(e, t = "erp_image") {
  var g, k, m, h, _, X, j;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((J) => String((J == null ? void 0 : J.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((J, O) => String((J == null ? void 0 : J.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (m = (k = (g = Qn) == null ? void 0 : g.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : m.call(k, o), a = du(o), l = du(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (_ = a == null ? void 0 : a.ui) == null ? void 0 : _.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const J of c)
    if (Array.isArray(J))
      for (const O of J) {
        const Y = eo(O);
        if (Y) return Y;
      }
  let d = [];
  try {
    d = typeof ((X = Qn) == null ? void 0 : X.getNodeImageUrls) == "function" ? Qn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const J of d) {
      const O = eo(J);
      if (O) return O;
    }
  if (s) {
    const J = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const O of J) {
      const Y = eo(O);
      if (Y) return Y;
    }
  }
  const u = (j = s == null ? void 0 : s.widgets) == null ? void 0 : j.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? pn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function gc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function cp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !$g(o) || r <= 1 || n <= 1) {
    gc(t, r, n);
    return;
  }
  if (s.failed) {
    gc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: Ka(i, r, n),
    background: { media: o, revision: kx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : gc(t, r, n);
}
function up(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class Nx {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Lm(() => this.requestDraw()), this.controller = ju({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: jt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ee(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ee(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${Zs}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = nn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Zs;
        },
        getHeight() {
          return Zs;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Xa(iu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(Zs, Number(o.minHeight || 0)),
            minWidth: Math.max(xx, Number(o.minWidth || 0))
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
      return _d(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ co({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Sx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = Lu(wx, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), Tr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, Tr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Oh(r), t.addEventListener("pointerdown", (o) => {
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
      bx(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !$g(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? ba(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Qn.canvas) != null && n.graph) || this.node.graph === Qn.canvas.graph);
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
      return up(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, d, u, f, g;
      const o = Ww(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !up(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (g = r == null ? void 0 : r.stopImmediatePropagation) == null || g.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - mc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - op - mc);
    return { x: mc, y: op, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), cp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Dm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = vx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Mx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Ss(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = Px(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), cp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, g, k, m, h, _;
    if (((r = qm(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Tr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (g = this.root) == null ? void 0 : g.remove) == null || k.call(g);
    } catch {
    }
    try {
      Ng(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((_ = (h = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : h.find) == null ? void 0 : _.call(h, (X) => (X == null ? void 0 : X.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), Tr(this.node).runtime = null;
  }
}
function Ax(e, t = {}) {
  if (!e || Tr(e).runtime) return;
  const r = new Nx(e, t);
  Tr(e).runtime = r, r.attach();
}
function zg(e, t, r) {
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
function Ad(e) {
  return !!(e != null && e.prototype);
}
function hs(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function Cx(e, t = {}) {
  Ad(e) || Ax(e, {
    ...t,
    onOpen: hs(e, t.onOpen)
  });
}
function Ix(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Ad(e)) {
    ip(e, {
      ...n,
      onOpen: hs(e, t.onOpen)
    });
    return;
  }
  zg(e, "stickers_node_preview", (i) => {
    ip(i, {
      ...n,
      onOpen: hs(i, t.onOpen)
    });
  });
}
function Ex(e, t = {}) {
  if (!Ad(e)) {
    rp(e, {
      ...t,
      onOpen: hs(e, t.onOpen)
    });
    return;
  }
  zg(e, "cutout_preview", (r) => {
    rp(r, {
      ...t,
      onOpen: hs(r, t.onOpen)
    });
  });
}
const An = {
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
}, Cr = "pen";
function dp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Ox({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
const dt = Object.freeze({
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
}), Fx = new Set(Object.values(dt));
function Tx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(m) {
    try {
      m();
    } catch (h) {
      i(h);
    }
  }
  function g() {
    !o && !s && !a && (o = e(k));
  }
  function k(m) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const X of h.values()) f(() => X(m));
      if (a) return;
      const _ = l;
      l = /* @__PURE__ */ new Set(), (_.size || n()) && f(() => r(m, _));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && g();
  }
  return {
    requestDraw(m) {
      if (!Fx.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === dt.STATE && (u += 1), l.add(m), g();
    },
    requestFrame(m) {
      const h = d++;
      return c.set(h, m), g(), h;
    },
    cancelFrame(m) {
      c.delete(m);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
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
const Dx = { class: "pano-floating-right" }, Lx = {
  key: 0,
  class: "pano-floating-space"
}, Rx = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Vx = ["data-settled"], $x = ["data-ready", "data-settled"], zx = ["aria-label", "data-tip"], jx = {
  key: 1,
  class: "pano-camera-preview-label"
}, Hx = {
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
    return (t, r) => (Te(), Le(tt, null, [
      xe("div", Dx, [
        e.space ? Lr((Te(), Le("div", Lx, [
          xe("div", Rx, [
            (Te(!0), Le(tt, null, Nt(e.space.modes, (n) => (Te(), Vn(Jt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(Jt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Pi, e.space.visible]
        ]) : ht("", !0),
        (Te(!0), Le(tt, null, Nt(e.buttons, (n) => (Te(), Vn(Jt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Lr(xe("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        xe("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Ot({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = xe("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            xe("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), Le("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, zx)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), Le("div", jx, it(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, $x)
      ], 8, Vx), [
        [Pi, e.preview.visible]
      ])
    ], 64));
  }
}, Gx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Wx = ["y2", "transform"], Kx = ["transform"], Ux = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Lr((Te(), Le("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), Le("svg", Gx, [
        o[1] || (o[1] = xe("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), Le(tt, null, Nt(nt(r), (s) => (Te(), Le("line", {
          key: s,
          class: gt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, Wx))), 128)),
        xe("g", { transform: n.value }, [...o[0] || (o[0] = [
          xe("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Kx),
        o[2] || (o[2] = xe("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Pi, e.model.visible === !0]
    ]);
  }
}, Bx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(yg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(Jt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(Ux, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Yx = ["aria-label"], qx = { class: "pano-canvas-confirm-title" }, Xx = { class: "pano-canvas-confirm-text" }, Jx = { class: "pano-canvas-confirm-actions" }, Zx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Qx = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Ut(null), n = /* @__PURE__ */ Ut(null);
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
      const g = f.querySelector(`[data-action='${u}']`);
      g instanceof HTMLButtonElement && g.click();
    }
    function a() {
      var m;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const k = o()[0] || u;
      (m = k == null ? void 0 : k.focus) == null || m.call(k);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var _;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        u.preventDefault(), (_ = g == null ? void 0 : g.focus) == null || _.call(g);
        return;
      }
      const k = f[0], m = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === k || h === g || !(g != null && g.contains(h))) && (u.preventDefault(), m.focus());
        return;
      }
      (h === m || !(g != null && g.contains(h))) && (u.preventDefault(), k.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return wi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, dl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), bs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Te(), Le("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: It(d, ["self"])
    }, [
      xe("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        xe("div", qx, it(e.model.title), 1),
        xe("div", Xx, it(e.model.text), 1),
        xe("div", Jx, [
          f[0] || (f[0] = xe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          xe("button", Zx, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Yx)
    ], 512)) : ht("", !0);
  }
}, ek = ["data-paint-pane"], tk = ["hidden"], nk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], rk = ["aria-pressed", "disabled"], ik = ["hidden"], ok = { class: "pano-paint-color-pop-head" }, sk = { class: "pano-paint-color-field" }, ak = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, lk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, ck = { class: "pano-paint-color-field" }, uk = { class: "pano-paint-alpha-wrap" }, dk = ["value"], fk = { "data-paint-alpha-value": "" }, pk = ["hidden"], hk = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, mk = ["data-paint-history-index", "aria-label", "disabled"], gk = ["data-paint-footer"], yk = ["data-paint-group"], bk = ["hidden"], vk = ["value", "disabled"], Sk = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, _k = ["hidden"], wk = {
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
    return (n, i) => (Te(), Le("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), Le(tt, null, Nt(e.panes, (o) => {
        var s;
        return Te(), Le("div", {
          key: o.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), Le("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), Le(tt, null, Nt(e.paintSwatches, (a) => (Te(), Le("button", {
              key: a.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Ot(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, nk))), 128)),
            xe("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Ot({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, rk),
            xe("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Ot({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              xe("div", ok, [
                xe("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ot({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = xe("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              xe("div", sk, [
                xe("div", ak, [
                  xe("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ot({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                xe("div", lk, [
                  xe("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ot({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              xe("label", ck, [
                i[1] || (i[1] = xe("span", null, "Opacity", -1)),
                xe("div", uk, [
                  xe("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, dk),
                  xe("span", fk, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              xe("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                xe("div", hk, [
                  (Te(!0), Le(tt, null, Nt(e.state.historyEntries || [], (a) => (Te(), Le("button", {
                    key: a.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Ot(r(a.color))
                  }, null, 14, mk))), 128))
                ])
              ], 8, pk)
            ], 12, ik)
          ], 10, tk)) : ht("", !0),
          xe("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            xe("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), Le(tt, null, Nt(o.tools, (a) => {
                var l;
                return Te(), Vn(Jt, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, yk),
            xe("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              xe("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Ot({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, vk),
              xe("span", Sk, it(e.state.sizeText || "10"), 1)
            ], 10, bk),
            xe("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(Jt, {
                icon: nt(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, _k)
          ], 8, gk)
        ], 10, ek);
      }), 128))
    ], 2));
  }
}, xk = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Ut(null), n = /* @__PURE__ */ Ut(null), i = /* @__PURE__ */ Ut(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Te(), Le(tt, null, [
      xe("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      xe("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        xe("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, kk = ["aria-label"], Mk = ["data-tip", "aria-pressed"], Pk = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), Le("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Ot({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), Le(tt, null, Nt(e.buttons, (o) => (Te(), Le("button", Ar({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), it(o.label), 17, Mk))), 128))
    ], 12, kk));
  }
}, Nk = {
  key: 0,
  class: "pano-cutout-menu"
}, Ak = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, Ck = ["data-aspect"], Ik = ["data-action", "aria-label", "data-tip", "disabled"], Ek = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ot({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), Le(tt, null, Nt(e.model.items || [], (n) => (Te(), Le(tt, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), Le("div", Nk, [
          xe("button", Ak, [
            Be(Vt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          xe("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), Le(tt, null, Nt(n.choices || [], (i) => (Te(), Le("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, it(i.label), 11, Ck))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), Vn(Pk, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), Le("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be(Vt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, Ik))
      ], 64))), 128))
    ], 4));
  }
}, Ok = {
  key: 0,
  class: "pano-easing"
}, Fk = { class: "pano-section-title" }, Tk = { class: "pano-easing-range" }, Dk = { class: "pano-easing-modes" }, Lk = ["aria-pressed", "onClick"], Rk = ["viewBox"], Vk = ["x", "y"], $k = ["x1", "y1", "x2", "y2"], zk = ["d"], jk = ["x1", "y1", "x2", "y2"], Hk = ["x1", "y1", "x2", "y2"], Gk = ["cx", "cy"], Wk = ["cx", "cy"], Kk = { class: "pano-easing-note" }, Mr = 132, hi = 14, Uk = {
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
    ], o = /* @__PURE__ */ Ut(null), s = ut(() => {
      var k;
      return Array.isArray((k = r.model) == null ? void 0 : k.easing) ? r.model.easing : null;
    }), a = (k) => hi + k * Mr, l = (k) => hi + (1 - k) * Mr, c = ut(() => {
      var X;
      if (((X = r.model) == null ? void 0 : X.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [k, m, h, _] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(k)} ${l(m)} ${a(h)} ${l(_)} ${a(1)} ${l(1)}`;
    }), d = ut(() => s.value ? s.value.map((k) => k.toFixed(2)).join(", ") : "");
    function u(k) {
      var m;
      return JSON.stringify(k.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(k, m) {
      n("timeline", { type: "easing", easing: k, commit: m });
    }
    function g(k, m) {
      var J;
      if (k.button !== 0 || !s.value) return;
      const h = k.currentTarget;
      (J = h.setPointerCapture) == null || J.call(h, k.pointerId);
      let _ = null;
      const X = (O) => {
        const Y = o.value.getBoundingClientRect(), G = Y.width / (Mr + hi * 2), W = ((O.clientX - Y.left) / G - hi) / Mr, ee = 1 - ((O.clientY - Y.top) / G - hi) / Mr;
        _ = [..._ || s.value], _[m] = Math.round(Math.min(1, Math.max(0, W)) * 100) / 100, _[m + 1] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, f(_, !1);
      }, j = () => {
        h.removeEventListener("pointermove", X), h.removeEventListener("pointerup", j), h.removeEventListener("pointercancel", j), _ && f(_, !0);
      };
      h.addEventListener("pointermove", X), h.addEventListener("pointerup", j), h.addEventListener("pointercancel", j);
    }
    return (k, m) => e.model ? (Te(), Le("div", Ok, [
      xe("div", Fk, [
        m[2] || (m[2] = xe("span", null, "Easing", -1)),
        xe("span", Tk, it(e.model.label), 1)
      ]),
      xe("div", Dk, [
        (Te(), Le(tt, null, Nt(i, (h) => xe("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (_) => f(h.easing, !0)
        }, it(h.label), 9, Lk)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Te(), Le("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Mr + hi * 2} ${Mr + hi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        xe("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Mr,
          height: Mr
        }, null, 8, Vk),
        xe("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, $k),
        xe("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, zk),
        s.value ? (Te(), Le(tt, { key: 0 }, [
          xe("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, jk),
          xe("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, Hk),
          xe("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (h) => g(h, 0))
          }, null, 40, Gk),
          xe("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (h) => g(h, 2))
          }, null, 40, Wk)
        ], 64)) : ht("", !0)
      ], 8, Rk)) : ht("", !0),
      xe("div", Kk, [
        e.model.mixed ? (Te(), Le(tt, { key: 0 }, [
          Do("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), Le(tt, { key: 1 }, [
          Do("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), Le(tt, { key: 2 }, [
          Do("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Te(), Le(tt, { key: 3 }, [
          Do("cubic-bezier(" + it(d.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, Bk = {
  class: "pano-side",
  "data-side": ""
}, Yk = { class: "pano-side-head" }, qk = { class: "pano-side-title" }, Xk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Jk = {
  key: 0,
  class: "pano-side-scroll"
}, Zk = { class: "pano-inspector" }, Qk = { class: "pano-ui-row pano-coverage-row" }, eM = ["data-selected"], tM = ["aria-pressed", "disabled"], nM = ["aria-pressed", "disabled"], rM = {
  key: 0,
  class: "pano-section-title"
}, iM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, oM = {
  class: "pano-picker",
  "data-picker": "selection"
}, sM = ["disabled"], aM = { class: "pano-picker-label" }, lM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, cM = ["hidden"], uM = ["data-selection-id"], dM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, fM = {
  key: 2,
  class: "pano-state-actions"
}, pM = ["disabled"], hM = ["data-key"], mM = { class: "pano-field-group-values" }, gM = ["title", "onPointerdown"], yM = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], bM = ["data-key"], vM = ["min", "max", "step", "value", "disabled", "data-param-key"], SM = ["min", "max", "step", "value", "disabled", "data-param-key"], _M = ["open"], wM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, xM = { class: "pano-ui-settings-body" }, kM = { class: "pano-ui-row" }, MM = ["data-selected"], PM = ["aria-pressed"], NM = ["aria-pressed"], AM = { class: "pano-ui-row" }, CM = ["data-selected"], IM = ["aria-pressed"], EM = ["aria-pressed"], OM = {
  key: 1,
  class: "pano-side-footer"
}, FM = ["data-action"], TM = {
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
      const f = c.currentTarget, g = c.clientX, k = Number(u.value) || 0;
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const h = (X) => {
        if (!m && Math.abs(X.clientX - g) < 3) return;
        m = !0;
        const j = k + (X.clientX - g) * d.drag * (X.shiftKey ? 0.1 : 1);
        u.value = String(Number(j.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, _ = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", _), f.removeEventListener("pointercancel", _), f.removeEventListener("lostpointercapture", _), m ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", _), f.addEventListener("pointercancel", _), f.addEventListener("lostpointercapture", _);
    }
    return (c, d) => {
      var u, f, g, k, m;
      return Te(), Le("div", Bk, [
        xe("div", Yk, [
          xe("div", qk, [
            xe("span", Xk, [
              Be(Vt, {
                icon: nt(ze).globe
              }, null, 8, ["icon"])
            ]),
            xe("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = xe("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = xe("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), Le("div", Jk, [
          xe("div", Zk, [
            d[9] || (d[9] = xe("div", { class: "pano-section-title" }, [
              xe("span", null, "Scene")
            ], -1)),
            xe("div", Qk, [
              d[2] || (d[2] = xe("label", null, "Coverage", -1)),
              xe("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                xe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, tM),
                xe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, nM)
              ], 8, eM)
            ]),
            e.model.transformTitle !== !1 ? (Te(), Le("div", rM, [...d[3] || (d[3] = [
              xe("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Te(), Le("div", iM, [
              xe("label", null, it(e.model.selectionPicker.label), 1),
              xe("div", oM, [
                xe("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  xe("span", aM, [
                    e.model.selectionPicker.currentIcon ? (Te(), Le("span", lM, [
                      Be(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    xe("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = xe("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, sM),
                xe("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), Le(tt, null, Nt(e.model.selectionPicker.items || [], (h) => (Te(), Le("button", {
                    key: h.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: h.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": h.id
                  }, [
                    h.icon ? (Te(), Le("span", dM, [
                      Be(Vt, {
                        icon: h.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    xe("span", null, it(h.label), 1)
                  ], 10, uM))), 128))
                ], 8, cM)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Te(), Le("div", fM, [
              xe("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(Vt, {
                  icon: nt(ze).copy
                }, null, 8, ["icon"]),
                xe("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, pM)
            ])) : ht("", !0),
            xe("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), Le(tt, { key: 0 }, Nt(e.model.notes, (h) => (Te(), Le("div", {
                key: h,
                class: "pano-param-note"
              }, it(h), 1))), 128)) : (Te(!0), Le(tt, { key: 1 }, Nt(e.model.rows || [], (h) => (Te(), Le(tt, {
                key: h.key
              }, [
                h.grouped ? (Te(), Le("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": h.key
                }, [
                  xe("label", null, it(h.label), 1),
                  xe("div", mM, [
                    (Te(!0), Le(tt, null, Nt(h.fields, (_) => (Te(), Le("div", {
                      key: _.key,
                      class: "pano-axis-field"
                    }, [
                      xe("span", {
                        class: gt(["pano-axis", { disabled: s(_, e.model) }]),
                        title: _.label,
                        onPointerdown: (X) => l(X, _)
                      }, it(_.short), 43, gM),
                      xe("input", {
                        ref_for: !0,
                        ref: (X) => {
                          a[_.key] = X;
                        },
                        type: "number",
                        min: _.min,
                        max: _.max,
                        step: _.step,
                        value: _.displayValue,
                        disabled: s(_, e.model),
                        "aria-label": `${h.label} ${_.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": _.key
                      }, null, 8, yM)
                    ]))), 128))
                  ])
                ], 8, hM)) : (Te(), Le("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": h.key
                }, [
                  xe("label", null, it(h.label), 1),
                  xe("input", {
                    type: "range",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].value,
                    disabled: s(h.fields[0], e.model),
                    style: Ot(o(h.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": h.fields[0].key
                  }, null, 12, vM),
                  xe("input", {
                    type: "number",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].displayValue,
                    disabled: s(h.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": h.fields[0].key
                  }, null, 8, SM)
                ], 8, bM))
              ], 64))), 128))
            ], 2),
            Be(Uk, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (h) => n("timeline", h))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), Le("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              xe("summary", null, [
                d[5] || (d[5] = xe("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                xe("span", wM, [
                  Be(Vt, {
                    icon: nt(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              xe("div", xM, [
                xe("div", kM, [
                  d[6] || (d[6] = xe("label", null, "Drag X", -1)),
                  xe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    xe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, PM),
                    xe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, NM)
                  ], 8, MM)
                ]),
                xe("div", AM, [
                  d[7] || (d[7] = xe("label", null, "Drag Y", -1)),
                  xe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    xe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, IM),
                    xe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, EM)
                  ], 8, CM)
                ]),
                d[8] || (d[8] = xe("div", { class: "pano-ui-row" }, [
                  xe("span"),
                  xe("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, _M)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Te(), Le("div", OM, [
          (Te(!0), Le(tt, null, Nt(e.model.footerButtons, (h) => (Te(), Le("button", {
            key: h.action,
            class: gt(["pano-btn", { "pano-btn-primary": h.primary === !0 }]),
            type: "button",
            "data-action": h.action
          }, it(h.label), 11, FM))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, DM = { class: "pano-timeline-bar" }, LM = ["aria-label", "data-tip"], RM = ["aria-label", "data-tip"], VM = { class: "pano-timeline-time" }, $M = ["data-tip"], zM = { key: 0 }, jM = ["min", "max", "value"], HM = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, GM = ["max", "value"], WM = ["aria-expanded"], KM = ["inert"], UM = { class: "pano-timeline-name" }, BM = ["aria-pressed", "aria-label", "data-tip", "onClick"], YM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, qM = ["disabled", "aria-expanded", "aria-label", "onClick"], XM = ["title", "aria-current", "onClick"], JM = ["data-keyed", "aria-label", "onClick"], ZM = ["onPointerdown"], QM = ["onPointerdown"], eP = ["onPointerdown"], tP = ["onPointerdown"], nP = ["aria-label", "data-tip", "onPointerdown"], rP = { key: 0 }, iP = ["onPointerdown"], oP = ["aria-label", "data-tip", "onPointerdown"], sP = { key: 0 }, aP = 10, lP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ ka(0), playing: /* @__PURE__ */ ka(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Ut(null), o = /* @__PURE__ */ Ut(null), s = /* @__PURE__ */ Ut(1), a = /* @__PURE__ */ Ut(0), l = /* @__PURE__ */ Ut(!1);
    let c = null, d = null, u = null;
    pl(() => {
      c = new ResizeObserver(([T]) => {
        s.value = Math.max(1, T.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([T]) => {
        a.value = T.contentRect.height;
      }), o.value && d.observe(o.value);
    }), bs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), g = ut(() => r.playhead.frame.value), k = ut(() => r.playhead.playing.value), m = ut(() => ev(g.value, Number(r.model.fps || 1))), h = ut(() => s.value / f.value), _ = (T) => `${T / f.value * 100}%`, X = ut(() => pv(f.value, h.value));
    function j(T) {
      const H = i.value.getBoundingClientRect(), C = Math.floor((T - H.left) / Math.max(1, H.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, C));
    }
    function J(T, H, C) {
      const $ = Math.ceil(aP / Math.max(1e-6, h.value)), R = new Map(H.map((U) => [U.frame, U.full]));
      return hv(H.map((U) => U.frame), $).map((U, de) => ({
        ...U,
        key: `${T}:${de}`,
        partial: U.frames.some((Se) => !R.get(Se)),
        selected: U.frames.some((Se) => C.includes(Se))
      }));
    }
    const O = ut(() => {
      const T = /* @__PURE__ */ new Map();
      for (const H of r.model.rows || []) {
        T.set(H.id, J(H.id, H.keys, H.selectedFrames));
        for (const C of H.lanes) T.set(C.key, J(C.key, C.frames.map(($) => ({ frame: $, full: !0 })), C.selectedFrames));
      }
      return T;
    });
    function Y(T) {
      const H = T.end === null ? f.value : T.end;
      return { left: _(T.start), width: _(Math.max(0, H - T.start)) };
    }
    function G(T, H) {
      const C = T.clientX, $ = Math.max(1e-6, h.value);
      let R = 0;
      H("start", 0, T);
      const U = (Se) => {
        if (Se.pointerId !== T.pointerId) return;
        const te = Math.round((Se.clientX - C) / $);
        te !== R && (R = te, H("move", R, Se));
      }, de = (Se) => {
        Se.pointerId === T.pointerId && (u(), H("end", R, Se));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", U), window.removeEventListener("pointerup", de), window.removeEventListener("pointercancel", de), u = null;
      }, window.addEventListener("pointermove", U), window.addEventListener("pointerup", de), window.addEventListener("pointercancel", de);
    }
    function W(T) {
      T.button === 0 && G(T, (H, C, $) => n("action", { type: "seek", frame: j($.clientX), phase: H }));
    }
    function ee(T, H, C) {
      T.button === 0 && (n("action", { type: "select-row", id: H.id }), G(T, ($, R) => n("action", { type: "clip", id: H.id, mode: C, delta: R, phase: $ })));
    }
    function pe(T, H, C, $, R) {
      if (T.button === 0) {
        if (T.shiftKey) {
          n("action", { type: "select-keys", owner: H.id, lane: C, frames: $.frames, additive: !0 });
          return;
        }
        $.frames.every((U) => R.includes(U)) || n("action", { type: "select-keys", owner: H.id, lane: C, frames: $.frames, additive: !1 }), G(T, (U, de) => n("action", { type: "move-keys", delta: de, phase: U }));
      }
    }
    const D = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function se(T, H, C) {
      n("action", H), await dl(), T.target.value = C();
    }
    function re(T) {
      se(T, { type: "fps", fps: Number(T.target.value) }, () => D.value);
    }
    function Q(T) {
      const H = T.target.value.trim();
      se(T, { type: "length", length: H ? Number(H) : null }, () => r.model.length ?? "");
    }
    function K(T, H, C) {
      T.button !== 0 || T.target !== T.currentTarget || n("action", { type: "select-keys", owner: H.id, lane: C, frames: [], additive: !1 });
    }
    return (T, H) => Lr((Te(), Le("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      xe("div", DM, [
        xe("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": k.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": k.value ? "Pause (Space)" : "Play (Space)",
          onClick: H[0] || (H[0] = (C) => n("action", { type: "play" }))
        }, [
          Be(Vt, {
            icon: k.value ? nt(ze).pause : nt(ze).play
          }, null, 8, ["icon"])
        ], 8, LM),
        e.model.hasAudio ? (Te(), Le("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: H[1] || (H[1] = (C) => n("action", { type: "mute" }))
        }, [
          Be(Vt, {
            icon: e.model.muted ? nt(ze).volume_muted : nt(ze).volume2
          }, null, 8, ["icon"])
        ], 8, RM)) : ht("", !0),
        xe("span", VM, it(m.value), 1),
        xe("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), Le("span", zM, it(D.value), 1)) : (Te(), Le("input", {
            key: 1,
            type: "number",
            min: nt(Bh),
            max: nt(Bu),
            step: "any",
            value: D.value,
            "aria-label": "Timeline fps",
            onChange: re
          }, null, 40, jM)),
          H[6] || (H[6] = xe("span", null, "fps", -1))
        ], 8, $M),
        xe("label", HM, [
          H[7] || (H[7] = xe("span", null, "Length", -1)),
          xe("input", {
            type: "number",
            min: "1",
            max: nt(Yu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Q
          }, null, 40, GM)
        ]),
        xe("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: H[2] || (H[2] = (C) => n("action", { type: "toggle-expanded" }))
        }, [
          H[8] || (H[8] = xe("span", null, "Timeline", -1)),
          Be(Vt, {
            icon: nt(ze).chevron
          }, null, 8, ["icon"])
        ], 8, WM)
      ]),
      xe("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Ot({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: H[3] || (H[3] = It((C) => l.value = !0, ["self"])),
        onTransitionend: H[4] || (H[4] = It((C) => l.value = !1, ["self"])),
        onTransitioncancel: H[5] || (H[5] = It((C) => l.value = !1, ["self"]))
      }, [
        xe("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          H[9] || (H[9] = xe("div", { class: "pano-timeline-corner" }, null, -1)),
          xe("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: W
          }, [
            (Te(!0), Le(tt, null, Nt(X.value, (C) => (Te(), Le("span", {
              key: C,
              class: "pano-timeline-tick",
              style: Ot({ left: _(C) })
            }, it(C), 5))), 128)),
            xe("span", {
              class: "pano-timeline-playhead",
              style: Ot({ left: _(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), Le(tt, null, Nt(e.model.rows || [], (C) => (Te(), Le(tt, {
            key: C.id
          }, [
            xe("div", {
              class: gt(["pano-timeline-head", { selected: C.selected, "is-hidden": !C.visible }])
            }, [
              xe("div", UM, [
                C.hideable ? (Te(), Le("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": C.visible ? "true" : "false",
                  "aria-label": `${C.label} visible`,
                  "data-tip": C.visible ? "Hide" : "Show",
                  onClick: It(($) => n("action", { type: "toggle-visible", id: C.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: C.visible ? nt(ze).eye : nt(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, BM)) : (Te(), Le("span", YM)),
                xe("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !C.keyable,
                  "aria-expanded": C.open ? "true" : "false",
                  "aria-label": C.open ? `Hide ${C.label} parameters` : `Show ${C.label} parameters`,
                  onClick: It(($) => n("action", { type: "toggle-row", id: C.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: nt(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, qM),
                xe("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: C.label,
                  "aria-current": C.selected ? "true" : void 0,
                  onClick: ($) => n("action", { type: "select-row", id: C.id })
                }, [
                  Be(Vt, {
                    icon: C.icon
                  }, null, 8, ["icon"]),
                  xe("span", null, it(C.label), 1)
                ], 8, XM),
                C.keyable ? (Te(), Le("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: nt(ic)(C.keys, g.value) }]),
                  type: "button",
                  "data-keyed": nt(ic)(C.keys, g.value) ? "true" : "false",
                  "aria-label": nt(ic)(C.keys, g.value) ? `Every ${C.label} parameter has a keyframe here; update them` : `Add keyframes for every ${C.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: It(($) => n("action", { type: "key-row", owner: C.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: nt(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, JM)) : ht("", !0)
              ]),
              C.open ? (Te(!0), Le(tt, { key: 0 }, Nt(C.lanes, ($) => (Te(), Le("div", {
                key: $.key,
                class: "pano-timeline-lane-head"
              }, it($.label), 1))), 128)) : ht("", !0)
            ], 2),
            xe("div", {
              class: gt(["pano-timeline-track", { selected: C.selected }])
            }, [
              xe("div", {
                class: "pano-timeline-row-line",
                onPointerdown: ($) => K($, C, null)
              }, [
                C.clip ? (Te(), Le("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: C.clip.end === null }]),
                  style: Ot(Y(C.clip)),
                  onPointerdown: It(($) => ee($, C, "move"), ["stop"])
                }, [
                  xe("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: It(($) => ee($, C, "start"), ["stop"])
                  }, null, 40, eP),
                  xe("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: It(($) => ee($, C, "end"), ["stop"])
                  }, null, 40, tP)
                ], 46, QM)) : ht("", !0),
                (Te(!0), Le(tt, null, Nt(O.value.get(C.id), ($) => (Te(), Le("button", {
                  key: $.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: $.selected, cluster: $.frames.length > 1, partial: $.partial }]),
                  style: Ot({ left: _($.frame + 0.5) }),
                  "aria-label": `${C.label}: ${$.frames.length > 1 ? `${$.frames.length} keyframes` : `keyframe at frame ${$.frames[0]}`}`,
                  "data-tip": $.frames.length > 1 ? `${$.frames.length} keyframes` : `Frame ${$.frames[0]}`,
                  onPointerdown: It((R) => pe(R, C, null, $, C.selectedFrames), ["stop"])
                }, [
                  $.frames.length > 1 ? (Te(), Le("span", rP, it($.frames.length), 1)) : ht("", !0)
                ], 46, nP))), 128))
              ], 40, ZM),
              C.open ? (Te(!0), Le(tt, { key: 0 }, Nt(C.lanes, ($) => (Te(), Le("div", {
                key: $.key,
                class: "pano-timeline-lane",
                onPointerdown: (R) => K(R, C, $.lane)
              }, [
                (Te(!0), Le(tt, null, Nt(O.value.get($.key), (R) => (Te(), Le("button", {
                  key: R.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: R.selected, cluster: R.frames.length > 1 }]),
                  style: Ot({ left: _(R.frame + 0.5) }),
                  "aria-label": `${$.label}: ${R.frames.length > 1 ? `${R.frames.length} keyframes` : `keyframe at frame ${R.frames[0]}`}`,
                  "data-tip": R.frames.length > 1 ? `${R.frames.length} keyframes` : `Frame ${R.frames[0]}`,
                  onPointerdown: It((U) => pe(U, C, $.lane, R, $.selectedFrames), ["stop"])
                }, [
                  R.frames.length > 1 ? (Te(), Le("span", sP, it(R.frames.length), 1)) : ht("", !0)
                ], 46, oP))), 128))
              ], 40, iP))), 128)) : ht("", !0),
              xe("span", {
                class: "pano-timeline-playhead",
                style: Ot({ left: _(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, KM)
    ], 2)), [
      [Pi, e.model.visible]
    ]);
  }
}, cP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Ot({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, uP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, dP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), Le("div", uP, [
      (Te(!0), Le(tt, null, Nt(e.buttons, (n) => Lr((Te(), Vn(Jt, {
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
        [Pi, n.visible !== !1]
      ])), 128))
    ]));
  }
}, fP = ["data-video-ready"], pP = { class: "pano-video-transport-shell" }, hP = { class: "pano-video-controls-left" }, mP = { class: "pano-video-filmstrip" }, gP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, yP = ["src", "onLoad"], bP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, vP = ["max", "value", "disabled"], SP = { class: "pano-video-controls-right" }, _P = ["data-has-audio"], wP = { class: "pano-video-volume-pop" }, xP = ["value", "disabled"], kP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? ze.pause : ze.play;
    }), o = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = ut(() => {
      var O, Y;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var O, Y, G;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? ze.volume : ((Y = t.state) == null ? void 0 : Y.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), d = ut(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var W, ee;
      const O = (W = t.state) == null ? void 0 : W.volumePct, Y = Number(((ee = t.state) == null ? void 0 : ee.volume) ?? 1) * 100, G = Number(O ?? Y ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), g = ut(() => {
      var G, W;
      const Y = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((W = t.state) == null ? void 0 : W.durationLabel) || "0:00")
      ].reduce((ee, pe) => Math.max(ee, pe.length), 4);
      return `${Math.max(4, Y)}ch`;
    }), k = ut(() => ({ "--pano-video-time-ch": g.value })), m = ut(() => {
      var G, W;
      const O = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const Y = Math.max(7, Number(((W = t.state) == null ? void 0 : W.thumbnailCount) || 9));
      return Array.from({ length: Y }, (ee, pe) => ({
        id: `placeholder-${pe}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Ut(/* @__PURE__ */ new Set()), _ = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), X = (O) => h.value.has(_(O)), j = (O) => {
      const Y = new Set(h.value);
      Y.add(_(O)), h.value = Y;
    };
    wi(m, (O) => {
      const Y = new Set(O.map(_)), G = /* @__PURE__ */ new Set();
      for (const W of h.value)
        Y.has(W) && G.add(W);
      h.value = G;
    }, { immediate: !0 });
    const J = ut(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, Y) => (Te(), Le("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Ot(J.value)
    }, [
      Y[1] || (Y[1] = xe("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y[2] || (Y[2] = xe("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      xe("div", pP, [
        xe("div", hP, [
          Be(Jt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          xe("div", {
            class: "pano-video-time pano-video-time-start",
            style: Ot(k.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        xe("div", mP, [
          xe("div", gP, [
            (Te(!0), Le(tt, null, Nt(m.value, (G) => (Te(), Le("div", {
              key: _(G),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && X(G)
              }])
            }, [
              G.src ? (Te(), Le("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (W) => j(G)
              }, null, 40, yP)) : (Te(), Le("span", bP))
            ], 2))), 128))
          ]),
          xe("div", {
            class: "pano-video-playhead",
            style: Ot(u.value),
            "aria-hidden": "true"
          }, [...Y[0] || (Y[0] = [
            xe("span", { class: "pano-video-playhead-line" }, null, -1),
            xe("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          xe("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, vP)
        ]),
        xe("div", SP, [
          xe("div", {
            class: "pano-video-time pano-video-time-end",
            style: Ot(k.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          Be(Jt, {
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
          xe("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            xe("div", wP, [
              xe("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Ot(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, xP)
            ]),
            Be(Jt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, _P)
        ])
      ])
    ], 14, fP));
  }
}, MP = { class: "pano-floating-top" }, PP = ["data-selected", "data-view-count"], NP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], AP = { class: "label" }, CP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), Le("div", MP, [
        xe("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), Le(tt, null, Nt(e.buttons, (i) => Lr((Te(), Le("button", {
            key: i.key,
            class: gt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be(Vt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            xe("span", AP, it(i.label), 1)
          ], 10, NP)), [
            [Pi, i.visible !== !1]
          ])), 128))
        ], 8, PP)
      ]);
    };
  }
};
function jg(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ze.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ze.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: ze.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: ze.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: ze.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: ze.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ze.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ze.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ze.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ze.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ze.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ze.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: ze.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: ze.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ze.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ze.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ze.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ze.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ze.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ze.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ze.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ze.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ze.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ze.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ze.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ze.lasso_tool }
        ]
      }
    ]
  };
}
const IP = ["aria-label"], EP = { class: "pano-stage-column" }, OP = { class: "pano-stage-wrap" }, FP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, TP = {
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
    const l = /* @__PURE__ */ Ut(null), c = /* @__PURE__ */ Ut(null), d = /* @__PURE__ */ Ut(null);
    function u() {
      var D, se;
      return ((se = (D = d.value) == null ? void 0 : D.getRefs) == null ? void 0 : se.call(D)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(D) {
      var se, re;
      return ((re = (se = c.value) == null ? void 0 : se.open) == null ? void 0 : re.call(se, D)) === !0;
    }
    function g(D) {
      i("image-file-selected", D);
    }
    function k(D) {
      i("image-file-cancelled", D);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const m = ut(() => n.readOnly === !0), h = ut(() => n.shellPreset || jg(n.type)), _ = ut(() => {
      var se, re, Q;
      const D = String((((se = n.uiState) == null ? void 0 : se.stageStatus) === "failed" ? (re = n.uiState) == null ? void 0 : re.stageStatusDetail : (Q = n.uiState) == null ? void 0 : Q.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), X = ut(() => {
      var D, se, re;
      return ((D = n.uiState) == null ? void 0 : D.stageStatus) === "failed" || (se = n.uiState) != null && se.stageWarningDetail ? _.value : (re = n.uiState) == null ? void 0 : re.stageNotice;
    }), j = ut(() => {
      var se;
      const D = Array.isArray((se = h.value) == null ? void 0 : se.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return m.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), D;
    });
    function J() {
      const D = l.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((se) => se instanceof HTMLElement ? !se.hidden && se.tabIndex >= 0 && se.offsetParent !== null : !1) : [];
    }
    function O() {
      var re;
      const se = J()[0] || l.value;
      (re = se == null ? void 0 : se.focus) == null || re.call(se);
    }
    function Y() {
      var D;
      a != null && a.isConnected && ((D = a.focus) == null || D.call(a)), a = null;
    }
    function G(D) {
      var se, re, Q, K;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const T = J();
          if (!T.length) {
            D.preventDefault(), (re = (se = l.value) == null ? void 0 : se.focus) == null || re.call(se);
            return;
          }
          const H = T[0], C = T[T.length - 1], $ = document.activeElement;
          if (D.shiftKey) {
            ($ === H || $ === l.value || !((Q = l.value) != null && Q.contains($))) && (D.preventDefault(), C.focus());
            return;
          }
          ($ === C || !((K = l.value) != null && K.contains($))) && (D.preventDefault(), H.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function W() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ee() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function pe(D) {
      document.removeEventListener("keydown", G), D ? (a || (a = document.activeElement), W(), document.addEventListener("keydown", G), dl(() => {
        O();
      })) : (ee(), Y());
    }
    return pl(() => {
      pe(n.open);
    }), bs(() => {
      ee(), document.removeEventListener("keydown", G), Y();
    }), wi(() => n.open, (D) => {
      pe(D);
    }), (D, se) => e.open ? (Te(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: se[2] || (se[2] = It((re) => i("close"), ["self"]))
    }, [
      xe("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        xe("div", EP, [
          xe("div", OP, [
            se[3] || (se[3] = xe("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            se[4] || (se[4] = xe("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            se[5] || (se[5] = xe("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), Le("div", FP, it(X.value), 1)) : ht("", !0),
            se[6] || (se[6] = xe("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              xe("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(xk, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(bg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: g,
              onFileCancelled: k
            }, null, 512),
            m.value ? ht("", !0) : (Te(), Le(tt, { key: 1 }, [
              Be(dP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Bx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(wk, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(kP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(CP, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(Hx, {
              buttons: e.uiState.floatingButtons || j.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(Ek, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(cP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Qx, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(lP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: se[0] || (se[0] = (re) => i("timeline", re))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Te(), Vn(TM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: se[1] || (se[1] = (re) => i("timeline", re))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, IP)
    ])) : ht("", !0);
  }
}, Jn = "loading", ms = "ready", Wn = "failed";
function Hg(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Gg(e, t = "") {
  return e && (e.__panoLoadState = ms, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wg(e, t = "") {
  return e && (e.__panoLoadState = Wn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function fu(e, t) {
  return e ? e.__panoLoadState === Wn ? Wn : typeof t == "function" && t(e) ? ms : Jn : ms;
}
function pu(e) {
  return fu(e) === Wn;
}
function DP({ presented: e, background: t = ms, stickers: r = [] } = {}) {
  if (!e) return { status: Jn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Jn, o = n.includes(Jn);
  if (i && o) return { status: Jn, detail: "mixed" };
  if (i) return { status: Jn, detail: "background" };
  if (o) return { status: Jn, detail: "stickers" };
  const s = t === Wn, a = n.includes(Wn);
  return s && a ? { status: Wn, detail: "mixed" } : s ? { status: Wn, detail: "background" } : a ? { status: Wn, detail: "stickers" } : { status: ms, detail: "" };
}
const LP = "state_json", RP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Cd = "sticker_image_1", VP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Kg = 0.01, $P = "external_image", ao = "pano_sticker_input_images", Ug = "pano_sticker_input_videos", Bg = "pano_sticker_input_frames", Yg = "pano_sticker_input_video_meta", zP = !0, Al = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], br = Math.PI / 180, Ci = 180 / Math.PI, hu = 1, qg = "rgb(255, 221, 87)", jP = "rgb(228, 228, 231)", HP = "rgb(180, 150, 60)", GP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, WP = 64, fp = 40, yc = 16, KP = 0.45, pp = 180, UP = 160, tl = 24, BP = 4, YP = 4;
function bc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function qP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function XP(e, t, r) {
  const n = Ee((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function JP(e) {
  return e * e * e;
}
function Cl(e, t, r) {
  return { x: e, y: t, z: r };
}
function hp(e, t) {
  return Cl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function mp(e, t) {
  return Cl(e.x * t, e.y * t, e.z * t);
}
function vc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ZP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Cl(e.x / t, e.y / t, e.z / t);
}
function Qs(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * Ci),
    pitch: Ee(Math.asin(Ee(e.y, -1, 1)) * Ci, -90, 90)
  };
}
function qr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function jo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Sc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return jo(e, t);
  const l = Ee((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Gn(e, t, r) {
  return e + (t - e) * r;
}
function fr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ee(r, 0, 1)})`;
}
function QP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ea = { fillStyle: "", url: "" };
function eN(e, t, r) {
  if (ea.url && ea.fillStyle === String(e || ""))
    return ea.url;
  const n = QP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${tl}" height="${tl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ea = { fillStyle: String(e || ""), url: n }, n;
}
function nl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Tn(e) {
  return {
    r: Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ee(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function un(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function tN(e) {
  return Al.some((t) => nl(e, t.color));
}
function mu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ee(Number(t), 0, 1), o = Ee(Number(r), 0, 1);
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
function gu(e) {
  const t = Ee(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ee(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ee(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function to(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function nN(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function gp(e) {
  const { paintCount: t, maskCount: r } = nN(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Xg(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, g = Number(s.rot_deg || 0) * br, k = Math.max(0.01, Number(s.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(u + m, f), e.rotate(g), e.scale(k, k), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Bi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ta(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function rN(e, t) {
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
function bi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function iN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function oN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function sN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Jg = "pano_suite.ui_settings.v1", Zg = "pano_suite.node_grid_visibility.v1";
let Wi = null, lr = null;
function xa(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function aN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Jg)) || "").trim();
    if (!t) return Wi ? xa(Wi) : null;
    const r = JSON.parse(t), n = xa(r);
    return Wi = n, n;
  } catch {
    return Wi ? xa(Wi) : null;
  }
}
function lN(e) {
  var r;
  const t = xa(e);
  Wi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Jg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Qg() {
  var e;
  if (lr && typeof lr == "object")
    return lr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Zg)) || "").trim();
    if (!t)
      return lr = {}, lr;
    const r = JSON.parse(t);
    return lr = r && typeof r == "object" ? r : {}, lr;
  } catch {
    return lr = {}, lr;
  }
}
function cN(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = Qg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function uN(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = Qg();
  n[r] = !!t, lr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Zg, JSON.stringify(n));
  } catch {
  }
}
function dN(e, t) {
  const r = { ...e }, n = t.map((i) => i(_c(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(_c(r, t[o].name))), _c(r, "showEditor");
}
function _c(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const yu = 0.5, e0 = "PANO_SCENE";
function fN(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: jr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function pN(e, t, r) {
  return e * r / t;
}
function hN(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: On(e("pano_upstream_coverage")[0])
  };
}
const mN = "bg_media is not used";
function gN(e, t) {
  return e === e0 && t === null;
}
function yN(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Or(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function yp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * yu };
}
function bN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = _s(s, r), c = (m) => m.visible ? n(m) : null, d = Em(s, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => yp(m, t)), u = Tm(s, r, s.stickers, { media: c, evaluated: l }).map((m) => yp(m, t)), f = [], g = Wa(Or(a, "pano_scene_files"), Or(a, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: ad(g, l.scene), value: l.scene, opacity: yu });
  const k = Wa(Or(a, "pano_sticker_files"), Or(a, "pano_sticker_meta"), o);
  if (k) {
    const m = xm(k, s, l);
    f.push({ slot: `${t}:sticker`, urls: km(k, s), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * yu });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const Zr = /* @__PURE__ */ new Map(), vN = 12;
function SN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = Zr.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (Zr.delete(t), Zr.set(t, r), r);
}
function _N(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (Zr.delete(r), Zr.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Zr.size > vN; ) {
      const i = Zr.keys().next().value;
      if (!i) break;
      Zr.delete(i);
    }
}
function wN(e) {
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
    readOnly: g,
    runtime: k,
    scheduler: m,
    stageWrap: h,
    state: _,
    stateV2: X,
    stillCanvas: j,
    studio: J,
    timelinePlayhead: O,
    type: Y,
    uiState: G,
    videoEl: W
  } = e;
  let ee, pe, D, se, re, Q;
  const K = {
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
  }, T = 9, H = [];
  let C = 0;
  const $ = () => {
    var $e, He;
    const V = ($e = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : $e.call(h), oe = (He = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : He.call(i), Ae = Math.max(0, Number((V == null ? void 0 : V.width) || 0)), ke = oe ? Math.max(0, Number(oe.width || 0)) : 0, Re = ke > 0 ? ke + 14 + 12 : 72, je = Math.max(280, Math.floor(Ae - Re * 2)), We = r.fullscreen ? Math.min(1200, je) : je;
    G.videoTransport.shellMaxWidthPx = We;
  }, R = () => {
    C || (C = m.requestFrame(() => {
      C = 0, $();
    }));
  }, U = (V) => {
    if (!(V instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(V.audioTracks) && V.audioTracks.length > 0 || V.audioTracks && typeof V.audioTracks.length == "number" && V.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof V.mozHasAudio == "boolean") return V.mozHasAudio;
    } catch {
    }
    try {
      if (Number(V.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!G.videoTransport.hasAudio;
  }, de = typeof ResizeObserver < "u" ? new ResizeObserver(() => R()) : null;
  de == null || de.observe(h), i && (de == null || de.observe(i)), H.push(() => {
    var V;
    C && (m.cancelFrame(C), C = 0), (V = de == null ? void 0 : de.disconnect) == null || V.call(de);
  }), R();
  const Se = () => {
    K.thumbnailJobId += 1, K.thumbnailSrc = "", G.videoTransport.thumbnails = [], G.videoTransport.thumbnailCount = T;
  }, te = async (V, oe, Ae) => {
    const ke = String(V || "").trim();
    if (!ke) {
      Se();
      return;
    }
    const Me = SN(ke);
    if (Me) {
      K.thumbnailSrc = ke, G.videoTransport.thumbnails = Me.thumbnails, G.videoTransport.thumbnailCount = Me.thumbnailCount;
      return;
    }
    const Ie = ++K.thumbnailJobId;
    K.thumbnailSrc = ke, G.videoTransport.thumbnails = [], G.videoTransport.thumbnailCount = T;
    const Re = Ss(document, "editor.thumbnails");
    Re.preload = "auto", Re.muted = !0, Re.playsInline = !0, Re.crossOrigin = "anonymous";
    const je = nn({ label: "editor.thumbnail" });
    try {
      const We = await new Promise((Ke) => {
        let pt = !1;
        const yt = (At) => {
          pt || (pt = !0, Ke(At));
        };
        Re.addEventListener("loadedmetadata", () => yt(!0), { once: !0 }), Re.addEventListener("canplay", () => yt(!0), { once: !0 }), Re.addEventListener("error", () => yt(!1), { once: !0 }), Re.src = ke, Re.load();
      });
      if (K.thumbnailJobId !== Ie) return;
      const $e = Number(Re.videoWidth || 0), He = Number(Re.videoHeight || 0);
      if (!We || $e < 1 || He < 1) {
        K.thumbnailFailedSrcs.add(ke);
        return;
      }
      const ae = Math.max(0, Number(Re.duration || oe || 0)), Fe = 46, Pe = Math.max(72, Math.round($e / He * Fe));
      je.width = Pe, je.height = Fe;
      const Ve = je.getContext("2d");
      if (!Ve) return;
      const Ye = [], Ge = (Ke) => new Promise((pt) => {
        let yt = !1;
        const At = () => {
          yt || (yt = !0, pt());
        };
        Re.addEventListener("seeked", At, { once: !0 }), Re.addEventListener("error", At, { once: !0 });
        try {
          Re.currentTime = Ke;
        } catch {
          At();
        }
      });
      for (let Ke = 0; Ke < T; Ke += 1) {
        if (K.thumbnailJobId !== Ie) return;
        const pt = T <= 1 ? 0 : Ke / (T - 1), yt = ae > 0 ? Math.max(0, Math.min(ae - Math.max(1e-3, 0.5 / Math.max(1, Number(Ae || 24))), ae * pt)) : 0;
        if (await Ge(yt), K.thumbnailJobId !== Ie) return;
        Ve.clearRect(0, 0, Pe, Fe), Ve.drawImage(Re, 0, 0, Pe, Fe), Ye.push({
          id: `thumb-${Ke}`,
          src: je.toDataURL("image/jpeg", 0.72),
          time: yt,
          label: y(yt)
        });
      }
      if (K.thumbnailJobId !== Ie) return;
      G.videoTransport.thumbnails = Ye, G.videoTransport.thumbnailCount = Ye.length || T, _N(ke, {
        thumbnails: Ye,
        thumbnailCount: Ye.length || T,
        duration: ae,
        fps: Ae
      });
    } finally {
      Re.removeAttribute("src"), Re.load(), is(je);
    }
  };
  H.push(() => {
    Se();
  });
  const N = lg({
    video: W instanceof HTMLVideoElement ? W : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (V) => m.requestFrame(V),
      cancelFrame: (V) => m.cancelFrame(V)
    },
    fps: F,
    span: () => {
      if (X) return Q();
      const V = Math.round(Number(G.videoTransport.duration || 0) * F());
      return W.loop || !(V > 0) ? 1 / 0 : V;
    },
    loop: () => X,
    onFrame: (V) => {
      X ? D(V) : v(), pe({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      S() && (k.backgroundDirty = !0);
    },
    onChange: () => {
      v(), O.playing.value = N.playing, re(), pe({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  H.push(() => N.dispose());
  const ie = X && f instanceof HTMLVideoElement ? yd({
    video: f,
    onCapture: () => {
      var Ae;
      const V = Number(f.videoWidth || 0), oe = Number(f.videoHeight || 0);
      V < 1 || oe < 1 || (u.width = V, u.height = oe, (Ae = u.getContext("2d")) == null || Ae.drawImage(f, 0, 0), u.__panoFrameIdx += 1, pe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => pe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  ie && H.push(() => ie.dispose());
  const ue = X ? pd({
    createImage: (V, oe) => {
      const Ae = new Image();
      return Ae.onload = oe, Ae.onerror = oe, Ae.src = V, Ae;
    },
    onLoad: () => pe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (W instanceof HTMLVideoElement) {
    const V = () => {
      q(), pe({ cause: "frame_view", localOnly: !0 });
    }, oe = () => {
      v({
        hasAudio: G.videoTransport.hasAudio,
        muted: W.muted,
        volume: Number(W.volume ?? G.videoTransport.volume ?? 1)
      });
    }, Ae = () => {
      const ke = W.dataset.panoSrc;
      ke && (K.failedSrcs.add(ke), q(), pe());
    };
    for (const [ke, Me] of [
      ["loadedmetadata", V],
      ["loadeddata", V],
      ["canplay", V],
      ["volumechange", oe],
      ["error", Ae]
    ])
      W.addEventListener(ke, Me), H.push(() => W.removeEventListener(ke, Me));
  }
  function be(V) {
    return t.uiList(d, V);
  }
  function ve(V) {
    return t.uiValue(d, V);
  }
  function I() {
    const V = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (La(V))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const oe = p();
    return oe ? { videoKey: oe.videoKey, metaKey: oe.metaKey } : Y === "stickers" || Y === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ce() {
    const { metaKey: V } = I(), oe = ve(V);
    return Array.isArray(oe) && oe.length > 0 && oe[0] && typeof oe[0] == "object" ? oe[0] : oe && typeof oe == "object" ? oe : null;
  }
  function b(V) {
    return V ? V instanceof HTMLVideoElement ? [
      String(V.currentSrc || V.src || ""),
      Number(V.videoWidth || 0),
      Number(V.videoHeight || 0)
    ].join("|") : V instanceof HTMLCanvasElement ? [
      "canvas",
      Number(V.width || 0),
      Number(V.height || 0),
      String(V.__panoFrameIdx || 0)
    ].join("|") : [
      String(V.currentSrc || V.src || ""),
      Number(V.naturalWidth || V.width || 0),
      Number(V.naturalHeight || V.height || 0)
    ].join("|") : "none";
  }
  function y(V) {
    const oe = Math.max(0, Math.floor(Number(V || 0))), Ae = Math.floor(oe / 60), ke = oe % 60;
    return `${Ae}:${String(ke).padStart(2, "0")}`;
  }
  function F() {
    return X ? _.timeline.fps : K.metaFps || 1e3;
  }
  function v(V = {}) {
    const oe = Number(V.duration ?? G.videoTransport.duration ?? 0), Ae = Math.max(1, Number(V.fps ?? G.videoTransport.fps ?? 24)), ke = N.frame / F(), Me = Object.prototype.hasOwnProperty.call(V, "ready") ? !!V.ready : !!G.videoTransport.ready, Ie = N.playing, Re = Object.prototype.hasOwnProperty.call(V, "visible") ? !!V.visible : !!G.videoTransport.visible, je = Object.prototype.hasOwnProperty.call(V, "muted") ? !!V.muted : !!(W instanceof HTMLVideoElement ? W.muted : G.videoTransport.muted), We = Number(
      Object.prototype.hasOwnProperty.call(V, "volume") ? V.volume : W instanceof HTMLVideoElement ? W.volume : G.videoTransport.volume
    ), $e = Object.prototype.hasOwnProperty.call(V, "hasAudio") ? !!V.hasAudio : U(W), He = Object.prototype.hasOwnProperty.call(V, "loop") ? !!V.loop : !!G.videoTransport.loop;
    Object.assign(G.videoTransport, {
      ready: Me,
      playing: Ie,
      visible: Re,
      loop: He,
      currentTime: Number.isFinite(ke) ? ke : 0,
      duration: Number.isFinite(oe) ? oe : 0,
      progressPct: oe > 1e-6 ? Math.max(0, Math.min(100, ke / oe * 100)) : 0,
      currentTimeLabel: y(ke),
      durationLabel: y(oe),
      frameCount: Math.max(0, Number(V.frameCount ?? G.videoTransport.frameCount ?? 0)),
      fps: Ae,
      hasAudio: $e,
      muted: je,
      volume: Math.max(0, Math.min(1, Number.isFinite(We) ? We : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(We) ? We : 1)) * 100),
      thumbnails: Array.isArray(V.thumbnails) ? V.thumbnails : G.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(V.thumbnailCount ?? G.videoTransport.thumbnailCount ?? T))
    });
  }
  function z() {
    return !!(W instanceof HTMLVideoElement && !X && W.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function x() {
    if (!(W instanceof HTMLVideoElement) || !G.videoTransport.hasAudio) return;
    const V = !W.muted;
    W.muted = V, !V && Number(W.volume || 0) <= 0 && (W.volume = Math.max(0.01, Number(G.videoTransport.volume || 1))), v({
      hasAudio: G.videoTransport.hasAudio,
      muted: W.muted,
      volume: Number(W.volume ?? G.videoTransport.volume ?? 1)
    });
  }
  function L() {
    v({
      visible: z()
    });
  }
  function S() {
    if (!(W instanceof HTMLVideoElement) || Number(W.videoWidth || 0) < 1 || Number(W.videoHeight || 0) < 1) return !1;
    const V = Number(W.videoWidth || 0), oe = Number(W.videoHeight || 0);
    (j.width !== V || j.height !== oe) && (j.width = V, j.height = oe);
    const Ae = j.getContext("2d");
    return Ae ? (Ae.clearRect(0, 0, V, oe), Ae.drawImage(W, 0, 0, V, oe), j.__panoFrameIdx = Number(j.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function M() {
    return !N.showsVideo && Number(j.width || 0) > 0 && Number(j.height || 0) > 0 && Number(j.__panoFrameIdx || 0) > 0 ? j : W instanceof HTMLVideoElement && Number(W.videoWidth || 0) > 0 && Number(W.videoHeight || 0) > 0 && Number(W.readyState || 0) >= 2 ? W : null;
  }
  function E() {
    j.__panoFrameIdx = 0, k.backgroundDirty = !0;
  }
  function q() {
    if (!(W instanceof HTMLVideoElement)) return null;
    const { videoKey: V } = I(), oe = (p() || Xt(d, "background")) && be(V)[0] || null, Ae = l(oe), ke = [Ae, t.linkedVideoFile(d, w())].filter(Boolean), Me = ke.find((ae) => !K.failedSrcs.has(ae)) || "";
    K.videoFailed = !Me && ke.length > 0;
    const Ie = Me && Me === Ae ? ce() : null;
    K.metaFps = Number(Ie == null ? void 0 : Ie.fps) > 0 ? Number(Ie.fps) : 0;
    const Re = Math.max(1, Number((Ie == null ? void 0 : Ie.fps) || (X ? _.timeline.fps : 24))), je = W.dataset.panoSrc === Me && Number.isFinite(W.duration) ? W.duration : 0, We = Number((Ie == null ? void 0 : Ie.duration) || ((Ie == null ? void 0 : Ie.frames) > 0 ? Ie.frames / Re : je)), $e = Math.max(0, Number((Ie == null ? void 0 : Ie.frames) || Math.round(We * Re))), He = !!(Ie != null && Ie.has_audio) || U(W);
    return Me && W.dataset.panoSrc !== Me ? (W.pause(), E(), W.dataset.panoSrc = Me, W.loop = !X && !!G.videoTransport.loop, W.muted = !!G.videoTransport.muted, W.volume = Math.max(0, Math.min(1, Number(G.videoTransport.volume ?? 1))), W.src = Me, W.load(), N.setSource(!0), X || N.seek(0)) : !Me && W.getAttribute("src") && (W.pause(), W.removeAttribute("src"), delete W.dataset.panoSrc, W.load(), E(), Se(), N.setSource(!1)), X || (W.loop = !!G.videoTransport.loop), Me && !X && K.thumbnailSrc !== Me && !K.thumbnailFailedSrcs.has(Me) && te(Me, We, Re), Me || Se(), v({
      ready: !!Me,
      visible: !!Me && z(),
      duration: We,
      frameCount: $e,
      fps: Re,
      hasAudio: He,
      loop: !!W.loop,
      muted: !!W.muted,
      volume: Number(W.volume ?? G.videoTransport.volume ?? 1),
      thumbnailCount: G.videoTransport.thumbnailCount
    }), Me || null;
  }
  function le(V, oe = null) {
    return c(d, V, o, oe || (() => pe()));
  }
  function ge(V = null) {
    return Xt(d, "external-sticker") ? le(ao, V) : null;
  }
  function Z() {
    if (!Xt(d, "external-sticker")) return null;
    const V = be(Yg)[0];
    if (!V || typeof V != "object") return null;
    const oe = be(Bg).map(l).filter(Boolean);
    if (oe.length) return { frames: oe, meta: V };
    const Ae = l(be(Ug)[0] || null);
    return Ae ? { src: Ae, meta: V } : null;
  }
  function he() {
    const V = _.stickers.find(ee), oe = V ? Z() : null, Ae = oe ? dd(V.clip, r.frame, _.timeline.fps, oe.meta) : null;
    ie.follow({ src: (oe == null ? void 0 : oe.src) || "", time: Ae, playing: N.advancing, fps: _.timeline.fps });
    const ke = V ? fe(V) : null, Me = oe != null && oe.frames ? ue.picture(oe.frames, Ae, oe.meta, ke) : ie.picture(u, ke);
    return Me ? { media: Me, revision: b(Me), source: fd(oe, ke) } : null;
  }
  function _e() {
    return !X || !Xt(d, "scene") ? null : Wa(be("pano_scene_files"), be("pano_scene_meta"), l);
  }
  function Ne() {
    return !X || !Xt(d, "external-sticker") ? null : Wa(be("pano_sticker_files"), be("pano_sticker_meta"), l);
  }
  function fe(V) {
    var Re;
    if (V && typeof V == "object" && (ee(V) || V.external === !0))
      return ge(() => {
        Qr(d, "image-loaded");
      });
    const oe = X ? ye(V) : String(V && typeof V == "object" ? V.asset_id || V.assetId || "" : V || "");
    if (!oe) return null;
    const Ae = o.get(oe);
    if (Ae) return Ae;
    const ke = X ? Ga(V.source) : (Re = _.assets) == null ? void 0 : Re[oe], Me = a(ke);
    if (!Me) return null;
    const Ie = new Image();
    return Hg(Ie, Me), Ie.onload = () => {
      Gg(Ie, Me), pe();
    }, Ie.onerror = () => {
      Wg(Ie, Me), pe();
    }, Ie.src = Me, o.set(oe, Ie), Ie;
  }
  function ye(V) {
    const { source: oe } = V;
    return oe.filename ? `file:${oe.storage}:${oe.subfolder}:${oe.filename}` : `sticker:${V.id}`;
  }
  function ne() {
    if (Y === "cutout") {
      const Ie = M();
      if (Ie) return Ie;
      const Re = s(
        d,
        ["erp_image", "bg_erp"],
        () => pe(),
        "background:cutout:erp_image|bg_erp"
      );
      return Re && !pu(Re) ? Re : c(d, "pano_input_images", o, () => pe()) || Re || null;
    }
    const V = M();
    if (V) return V;
    const oe = p(), Ae = oe || Xt(d, "background") ? c(d, (oe == null ? void 0 : oe.imageKey) ?? "pano_input_images", o, () => pe()) : null;
    if (Ae && !pu(Ae)) return Ae;
    if (W instanceof HTMLVideoElement && W.dataset.panoSrc) return W;
    if (oe) return Ae;
    const ke = w();
    return s(d, ke, () => pe(), `background:${ke.join("|")}`) || Ae || null;
  }
  function p() {
    return !J || !Xt(d, "scene") ? null : hN(be);
  }
  function A() {
    var V;
    return ((V = p()) == null ? void 0 : V.coverage) ?? On(_.coverage);
  }
  function w() {
    if (p()) return [];
    if (Y === "cutout") return ["erp_image", "bg_erp"];
    const V = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((ke) => String((ke == null ? void 0 : ke.name) || "")) : [], oe = V.includes("erp_image"), Ae = V.includes("bg_erp");
    return g && (oe || Ae) ? oe ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Y === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function P(V) {
    return V ? V instanceof HTMLImageElement ? !!V.complete && Number(V.naturalWidth || V.width || 0) > 0 && Number(V.naturalHeight || V.height || 0) > 0 : V instanceof HTMLVideoElement ? Number(V.videoWidth || 0) > 0 && Number(V.videoHeight || 0) > 0 && Number(V.readyState || 0) >= 2 : Number(V.width || V.naturalWidth || 0) > 0 && Number(V.height || V.naturalHeight || 0) > 0 : !1;
  }
  function B() {
    if (n.failed) return { status: Wn, detail: "renderer" };
    if (!n.ready) return { status: Jn, detail: "boot" };
    const V = ne(), oe = K.videoFailed ? Wn : fu(V, P), Ae = [];
    for (const ke of se()) {
      if ((ke == null ? void 0 : ke.visible) === !1) continue;
      const Me = fe(ke);
      Ae.push(fu(Me, P));
    }
    return DP({
      presented: k.hasPresentedFrame,
      background: oe,
      stickers: Ae
    });
  }
  function me() {
    W instanceof HTMLVideoElement && W.pause(), H.forEach((V) => {
      try {
        V();
      } catch {
      }
    });
  }
  return {
    connect(V) {
      ({
        isExternalSticker: ee,
        requestDraw: pe,
        setTimelineFrame: D,
        skyStickers: se,
        syncTimeline: re,
        timelineSpanFrames: Q
      } = V);
    },
    videoState: K,
    queueVideoTransportLayout: R,
    playback: N,
    portVideo: ie,
    getNodeUiValue: ve,
    getMediaRevisionToken: b,
    playbackFps: F,
    syncVideoTransportState: v,
    toggleVideoMuted: x,
    syncVideoTransportVisibility: L,
    refreshModalVideoSource: q,
    getStickerUiImage: le,
    getExternalStickerPreviewImage: ge,
    getPortMedia: Z,
    followPortSticker: he,
    getStickerImage: fe,
    stickerImageKey: ye,
    getConnectedErpImage: ne,
    backgroundCoverage: A,
    upstreamBackground: p,
    isDecodedImageReady: P,
    getStageImageStatus: B,
    sceneFiles: _e,
    stickerFiles: Ne,
    disposeMediaSession: me
  };
}
function xN(e = 80, t = null, r = 8) {
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
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), g = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: g
      };
    },
    hydrate: a
  };
}
const kN = 80;
function t0(e) {
  return JSON.stringify(Sv(e));
}
function MN(e) {
  return xN(kN, { entries: [t0(e)], index: 0 });
}
function n0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function PN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, g, k, m, h, _, X, j, J, O;
  function Y() {
    r || (X(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(t0(i)), J()));
  }
  function G(ee) {
    var re, Q;
    if (r) return;
    _();
    const pe = ee < 0 ? t.historyController.undo() : t.historyController.redo();
    if (J(), !pe) return;
    const D = _v(i, pe), se = (re = i.timeline) == null ? void 0 : re.fps;
    Object.keys(i).forEach((K) => delete i[K]), Object.assign(i, D.state), X(!1), o && i.timeline.fps !== se && k.seek(Math.round(t.frame * i.timeline.fps / se)), t.selectedId = n0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((Q = d()) == null ? void 0 : Q.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, D.paintingChanged ? g() : f(), j(), O(), c(), h({ cause: "cutout_frame" });
  }
  function W() {
    var D, se;
    const ee = Array.isArray((D = t.historyController) == null ? void 0 : D.entries) ? t.historyController.entries : [], pe = Number((se = t.historyController) == null ? void 0 : se.index);
    return {
      canUndo: !r && ee.length > 1 && pe > 0,
      canRedo: !r && ee.length > 1 && pe >= 0 && pe < ee.length - 1
    };
  }
  return {
    connect(ee) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: g,
        playback: k,
        releaseHiddenSelection: m,
        requestDraw: h,
        stopTimelinePlayback: _,
        syncCutoutShot: X,
        syncPaintUi: j,
        syncUndoRedoButtons: J,
        updateSidePanel: O
      } = ee);
    },
    pushHistory: Y,
    restoreHistory: G,
    getHistoryCapabilities: W
  };
}
function NN(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g, k;
  function m() {
    return s === "stickers" ? h() : i.shots;
  }
  function h() {
    return n ? i.stickers.filter((p) => p.placement === "sky") : i.stickers;
  }
  function _(p) {
    return n && ie(p);
  }
  function X(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function j(p) {
    if (!_(p)) return p;
    const A = le(p) ? g(p) : null;
    return ed(p, r.frame, A && { width: A.naturalWidth || A.width, height: A.naturalHeight || A.height });
  }
  function J(p, A) {
    _(p) ? um(p, r.frame, A) : Object.assign(p, A);
  }
  function O() {
    const p = i.painting || (i.painting = fo(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function Y(p = "paint") {
    var B, me;
    const A = Array.isArray((me = (B = i.painting) == null ? void 0 : B[p]) == null ? void 0 : me.strokes) ? i.painting[p].strokes : [], w = [], P = /* @__PURE__ */ new Set();
    for (const V of A) {
      const oe = String((V == null ? void 0 : V.actionGroupId) || "").trim();
      !oe || P.has(oe) || (P.add(oe), w.push(oe));
    }
    return w;
  }
  function G() {
    return Y("paint");
  }
  function W(p, A) {
    const w = String(A || "").trim();
    return w ? `${p === "mask" ? "mask" : "paint"}:${w}` : "";
  }
  function ee(p) {
    const A = String(p || "").trim();
    return A ? `raster:${A}` : "";
  }
  function pe(p) {
    const A = String(p || "").trim();
    if (!A) return "";
    const w = A.match(/^raster:(.*)$/);
    return String(w ? w[1] || "" : A).trim();
  }
  function D(p, A = null) {
    const w = String(p || "").trim();
    if (!w) return { layerKind: "paint", actionGroupId: "" };
    const P = w.match(/^(paint|mask):(.*)$/);
    return P ? { layerKind: P[1] === "mask" ? "mask" : "paint", actionGroupId: String(P[2] || "").trim() } : { layerKind: A === "mask" ? "mask" : "paint", actionGroupId: w };
  }
  function se() {
    var A;
    let p = -1;
    for (const w of h())
      p = Math.max(p, Number((w == null ? void 0 : w.z_index) || 0));
    for (const w of O())
      p = Math.max(p, Number((w == null ? void 0 : w.z_index) || 0));
    for (const w of Array.isArray((A = i.painting) == null ? void 0 : A.raster_objects) ? i.painting.raster_objects : [])
      String((w == null ? void 0 : w.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((w == null ? void 0 : w.z_index) || 0)));
    return p + 1;
  }
  function re(p, A = null) {
    const w = String(p || "").trim();
    if (!w) return null;
    const P = O();
    let B = P.find((me) => String((me == null ? void 0 : me.actionGroupId) || "") === w);
    return B ? A != null && (B.z_index = Math.max(0, Number(A || 0))) : (B = {
      id: w,
      type: "strokeGroup",
      actionGroupId: w,
      z_index: A == null ? se() : Math.max(0, Number(A || 0)),
      locked: !1,
      frame: null
    }, P.push(B)), B;
  }
  function Q(p) {
    if (!(p != null && p.centerUv)) return [];
    const A = Number(p.centerUv.u || 0), w = Number(p.centerUv.v || 0), P = Number(p.halfW || 0), B = Number(p.halfH || 0);
    return [
      {
        u: ((A - P) % 1 + 1) % 1,
        v: Ee(w - B, 0, 1)
      },
      {
        u: ((A + P) % 1 + 1) % 1,
        v: Ee(w - B, 0, 1)
      },
      {
        u: ((A + P) % 1 + 1) % 1,
        v: Ee(w + B, 0, 1)
      },
      {
        u: ((A - P) % 1 + 1) % 1,
        v: Ee(w + B, 0, 1)
      }
    ];
  }
  function K() {
    const p = new Set(G()), w = O().filter((P) => p.has(String((P == null ? void 0 : P.actionGroupId) || "")));
    return p.forEach((P) => {
      w.some((B) => String((B == null ? void 0 : B.actionGroupId) || "") === P) || w.push({
        id: P,
        type: "strokeGroup",
        actionGroupId: P,
        z_index: se(),
        locked: !1,
        frame: null
      });
    }), w.sort((P, B) => Number((P == null ? void 0 : P.z_index) || 0) - Number((B == null ? void 0 : B.z_index) || 0)), i.painting.groups = w, w;
  }
  function T(p, A, w) {
    var $e;
    const P = (He) => (Number(He || 0) % 1 + 1) % 1, B = [];
    for (const He of w) {
      const ae = He == null ? void 0 : He.geometry, Fe = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(Fe) && B.push(...Fe);
    }
    if (!B.length) return null;
    const me = P((($e = B[0]) == null ? void 0 : $e.u) || 0);
    let V = 0, oe = 0;
    B.forEach((He) => {
      const ae = P((He == null ? void 0 : He.u) || 0);
      V += me + v(ae, me), oe += Number((He == null ? void 0 : He.v) || 0);
    });
    const Ae = (V / B.length % 1 + 1) % 1;
    let ke = 1 / 0, Me = -1 / 0, Ie = 1 / 0, Re = -1 / 0;
    B.forEach((He) => {
      const ae = P((He == null ? void 0 : He.u) || 0), Fe = v(ae, Ae);
      ke = Math.min(ke, Fe), Me = Math.max(Me, Fe);
      const Pe = Number((He == null ? void 0 : He.v) || 0);
      Ie = Math.min(Ie, Pe), Re = Math.max(Re, Pe);
    });
    const je = w.reduce((He, ae) => {
      const Fe = l(String((ae == null ? void 0 : ae.toolKind) || "pen")), Pe = An[Fe] || An[Cr], Ve = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((Pe == null ? void 0 : Pe.sizeScale) ?? 1));
      return Math.max(He, Ve);
    }, 0), We = Math.max(35e-4, je / 2048);
    return {
      centerUv: { u: ((Ae + (ke + Me) * 0.5) % 1 + 1) % 1, v: Ee((Ie + Re) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Me - ke) * 0.5 + We,
      halfH: (Re - Ie) * 0.5 + We,
      uvPad: We
    };
  }
  function H(p, A, w) {
    const P = String(p || "").trim();
    if (!P) return null;
    const B = O().find((V) => String((V == null ? void 0 : V.actionGroupId) || "") === P);
    if (!B) return null;
    const me = w || b(P, A);
    return B.frame = T(P, A, me), B.frame;
  }
  function C() {
    var P;
    const p = h().map((B) => ({
      type: "sticker",
      id: String((B == null ? void 0 : B.id) || ""),
      z_index: Number((B == null ? void 0 : B.z_index) || 0),
      item: B
    })), A = K().map((B) => ({
      type: "strokeGroup",
      id: String((B == null ? void 0 : B.id) || (B == null ? void 0 : B.actionGroupId) || ""),
      actionGroupId: String((B == null ? void 0 : B.actionGroupId) || ""),
      z_index: Number((B == null ? void 0 : B.z_index) || 0),
      item: B
    })), w = (Array.isArray((P = i.painting) == null ? void 0 : P.raster_objects) ? i.painting.raster_objects : []).filter((B) => String((B == null ? void 0 : B.layerKind) || "paint") === "paint").map((B) => ({
      type: "rasterObject",
      id: String((B == null ? void 0 : B.id) || ""),
      z_index: Number((B == null ? void 0 : B.z_index) || 0),
      item: B
    }));
    return [...p, ...A, ...w].sort((B, me) => Number(B.z_index || 0) - Number(me.z_index || 0));
  }
  function $(p = !0) {
    var w, P, B, me, V, oe;
    const A = C().filter((Ae) => Ae.type === "strokeGroup").map((Ae) => String(Ae.actionGroupId || "")).filter((Ae) => !!Ae);
    if (p) {
      const Ae = String(((P = (w = r.interaction) == null ? void 0 : w.stroke) == null ? void 0 : P.actionGroupId) || "").trim(), ke = String(((me = (B = r.interaction) == null ? void 0 : B.stroke) == null ? void 0 : me.layerKind) || "").trim(), Me = String(((oe = (V = r.interaction) == null ? void 0 : V.stroke) == null ? void 0 : oe.toolKind) || "").trim();
      Ae && ke === "paint" && Me !== "eraser" && !A.includes(Ae) && A.push(Ae);
    }
    return A;
  }
  function R(p = !0) {
    var oe, Ae, ke, Me, Ie, Re;
    const A = C();
    if (!p) return A;
    const w = String(((Ae = (oe = r.interaction) == null ? void 0 : oe.stroke) == null ? void 0 : Ae.actionGroupId) || "").trim(), P = String(((Me = (ke = r.interaction) == null ? void 0 : ke.stroke) == null ? void 0 : Me.layerKind) || "").trim(), B = String(((Re = (Ie = r.interaction) == null ? void 0 : Ie.stroke) == null ? void 0 : Re.toolKind) || "").trim();
    if (!w || P !== "paint" || B === "eraser" || A.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === w))
      return A;
    const me = f();
    let V = A.reduce((je, We) => Math.max(je, Number((We == null ? void 0 : We.z_index) || 0)), -1) + 1;
    return me && ce(me) && String(me.actionGroupId || "") === w && (V = Number(me.z_index || 0)), [
      ...A,
      {
        type: "strokeGroup",
        id: w,
        actionGroupId: w,
        z_index: V,
        item: null
      }
    ].sort((je, We) => Number((je == null ? void 0 : je.z_index) || 0) - Number((We == null ? void 0 : We.z_index) || 0));
  }
  function U() {
    return O().slice().sort((p, A) => Number((p == null ? void 0 : p.z_index) || 0) - Number((A == null ? void 0 : A.z_index) || 0)).map((p) => I(W("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function de() {
    var p;
    return (Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : []).filter((A) => String((A == null ? void 0 : A.layerKind) || "paint") === "paint").slice().sort((A, w) => Number((A == null ? void 0 : A.z_index) || 0) - Number((w == null ? void 0 : w.z_index) || 0)).map((A) => be(ee((A == null ? void 0 : A.id) || ""))).filter(Boolean);
  }
  function Se() {
    return Array.isArray(i.stickers) ? h() : [];
  }
  function te() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...Se()];
  }
  function N(p) {
    return !!p && Array.isArray(i.shots) && i.shots.includes(p);
  }
  function ie(p) {
    return !!p && Array.isArray(i.stickers) && i.stickers.includes(p);
  }
  function ue() {
    var p;
    return Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [];
  }
  function be(p) {
    const A = pe(p);
    if (!A) return null;
    const w = ue().find((P) => String((P == null ? void 0 : P.id) || "").trim() === A);
    return !w || String((w == null ? void 0 : w.layerKind) || "paint") !== "paint" ? null : {
      ...w,
      id: ee(A),
      type: "rasterObject",
      rasterObjectId: A
    };
  }
  function ve(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const A = pe(p.rasterObjectId || p.id || "");
    return !!A && !!be(ee(A));
  }
  function I(p) {
    const A = D(p), w = String(A.actionGroupId || "").trim();
    if (!w) return null;
    const P = O().find((B) => String((B == null ? void 0 : B.id) || (B == null ? void 0 : B.actionGroupId) || "") === w || String((B == null ? void 0 : B.actionGroupId) || "") === w);
    return P ? {
      ...P,
      id: W("paint", w),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: w
    } : null;
  }
  function ce(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const A = String(p.actionGroupId || "").trim(), w = String(p.layerKind || "paint").trim() || "paint";
    return !!A && !!I(W(w, A));
  }
  function b(p, A = null) {
    const w = D(p, A), P = String(w.actionGroupId || "").trim();
    return P ? d(w.layerKind).filter((B) => String((B == null ? void 0 : B.actionGroupId) || "").trim() === P) : [];
  }
  function y(p, A = "paint") {
    const w = String(p || "").trim(), B = `geomv5:${String(A || "paint").trim() || "paint"}:${w}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const me = a(), V = String((me == null ? void 0 : me.id) || ""), oe = me ? c(me) : null;
      return `${B}:frame:${V}:${Math.round(Number((me == null ? void 0 : me.yaw_deg) || 0) * 1e3)}:${Math.round(Number((me == null ? void 0 : me.pitch_deg) || 0) * 1e3)}:${Math.round(Number((me == null ? void 0 : me.roll_deg) ?? (me == null ? void 0 : me.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((me == null ? void 0 : me.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((me == null ? void 0 : me.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((oe == null ? void 0 : oe.x) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.y) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.w) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.h) || 0))}`;
    }
    return `${B}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function F(p, A, w) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(A || 0)) % 1 + 1) % 1,
      v: Ee(Number(p.v || 0) + Number(w || 0), 0, 1)
    };
  }
  function v(p, A) {
    let w = Number(p || 0) - Number(A || 0);
    for (; w > 0.5; ) w -= 1;
    for (; w < -0.5; ) w += 1;
    return w;
  }
  function z(p, A = null, w = null) {
    var ke;
    const P = D(p, A), B = Array.isArray(w) ? w : b(P.actionGroupId, P.layerKind), me = [];
    if (B.forEach((Me) => {
      const Ie = (Me == null ? void 0 : Me.geometry) || null, Re = (Ie == null ? void 0 : Ie.geometryKind) === "lasso_fill" ? Ie == null ? void 0 : Ie.points : (Ie == null ? void 0 : Ie.processedPoints) || (Ie == null ? void 0 : Ie.rawPoints) || (Ie == null ? void 0 : Ie.points) || [];
      Array.isArray(Re) && me.push(...Re);
    }), !me.length) return { u: 0.5, v: 0.5 };
    const V = Number(((ke = me[0]) == null ? void 0 : ke.u) || 0);
    let oe = 0, Ae = 0;
    return me.forEach((Me) => {
      oe += V + v(Number((Me == null ? void 0 : Me.u) || 0), V), Ae += Number((Me == null ? void 0 : Me.v) || 0);
    }), {
      u: (oe / me.length % 1 + 1) % 1,
      v: Ee(Ae / me.length, 0, 1)
    };
  }
  function x(p, A, w = 1, P = 0) {
    if (!p || typeof p != "object") return p;
    const B = Number((A == null ? void 0 : A.u) || 0), me = Number((A == null ? void 0 : A.v) || 0), V = v(Number(p.u || 0), B), oe = Number(p.v || 0) - me, Ae = Number(P || 0) * br, ke = Math.cos(Ae), Me = Math.sin(Ae), Ie = Math.max(0.02, Number(w || 1)), Re = (V * ke - oe * Me) * Ie, je = (V * Me + oe * ke) * Ie;
    return {
      ...p,
      u: ((B + Re) % 1 + 1) % 1,
      v: Ee(me + je, 0, 1)
    };
  }
  function L(p, A, w, P = null, B = null, me = null) {
    const V = D(p, B), oe = String(V.actionGroupId || "").trim();
    if (!oe) return !1;
    const Ae = d(V.layerKind), ke = Array.isArray(P) ? new Map(P.map((Ie) => [String((Ie == null ? void 0 : Ie.id) || ""), Ie])) : null;
    let Me = !1;
    if (Ae.forEach((Ie) => {
      if (String((Ie == null ? void 0 : Ie.actionGroupId) || "").trim() !== oe) return;
      const Re = (ke == null ? void 0 : ke.get(String((Ie == null ? void 0 : Ie.id) || ""))) || Ie, je = Ie == null ? void 0 : Ie.geometry, We = Re == null ? void 0 : Re.geometry;
      !je || !We || (Array.isArray(We.points) && (je.points = We.points.map(($e) => F($e, A, w)), Me = !0), Array.isArray(We.rawPoints) && (je.rawPoints = We.rawPoints.map(($e) => F($e, A, w)), Me = !0), Array.isArray(We.processedPoints) && (je.processedPoints = We.processedPoints.map(($e) => F($e, A, w)), Me = !0));
    }), Me && me) {
      const Ie = O().find((Re) => String((Re == null ? void 0 : Re.actionGroupId) || "") === oe);
      Ie && (Ie.frame = null);
    }
    return Me;
  }
  function S(p, A = 1, w = 0, P = null, B = null, me = null) {
    const V = D(p, B), oe = String(V.actionGroupId || "").trim();
    if (!oe) return !1;
    const Ae = d(V.layerKind), ke = Array.isArray(P) ? P : b(oe, V.layerKind), Me = Array.isArray(ke) ? new Map(ke.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Ie = (me == null ? void 0 : me.centerUv) ?? z(oe, V.layerKind, ke);
    let Re = !1;
    if (Ae.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== oe) return;
      const We = (Me == null ? void 0 : Me.get(String((je == null ? void 0 : je.id) || ""))) || je, $e = je == null ? void 0 : je.geometry, He = We == null ? void 0 : We.geometry;
      !$e || !He || (Array.isArray(He.points) && ($e.points = He.points.map((ae) => x(ae, Ie, A, w)), Re = !0), Array.isArray(He.rawPoints) && ($e.rawPoints = He.rawPoints.map((ae) => x(ae, Ie, A, w)), Re = !0), Array.isArray(He.processedPoints) && ($e.processedPoints = He.processedPoints.map((ae) => x(ae, Ie, A, w)), Re = !0));
    }), Re && me) {
      const je = O().find((We) => String((We == null ? void 0 : We.actionGroupId) || "") === oe);
      je && (je.frame = null);
    }
    return Re;
  }
  function M(p, A, w, P = null) {
    const B = pe(p);
    if (!B) return !1;
    const me = ue().find((Me) => String((Me == null ? void 0 : Me.id) || "").trim() === B);
    if (!me) return !1;
    const V = P && typeof P == "object" ? P : me, oe = (V == null ? void 0 : V.transform) || {}, Ae = Number(oe.du || 0) + Number(A || 0), ke = Ee(Number(oe.dv || 0) + Number(w || 0), -1, 1);
    return me.transform || (me.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), me.transform.du = Ae, me.transform.dv = ke, !0;
  }
  function E(p, A = 1, w = null) {
    const P = pe(p);
    if (!P) return !1;
    const B = ue().find((ke) => String((ke == null ? void 0 : ke.id) || "").trim() === P);
    if (!B) return !1;
    const me = w && typeof w == "object" ? w : B, V = (me == null ? void 0 : me.transform) || {}, oe = Math.max(0.01, Number(V.scale || 1)), Ae = Ee(oe * Math.max(0.01, Number(A || 1)), 0.01, 100);
    return B.transform || (B.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), B.transform.scale = Ae, !0;
  }
  function q() {
    return se();
  }
  function le(p) {
    var A;
    return !p || typeof p != "object" ? !1 : o ? ((A = p.source) == null ? void 0 : A.kind) === "port" : String(p.id || "") === Cd || String(p.source_kind || "") === $P;
  }
  function ge(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function Z(p) {
    return le(p) && ge(p) ? Nm : 1;
  }
  function he(p, A, w = 1, P = 0) {
    if (!p || typeof p != "object") return p;
    const B = Number((A == null ? void 0 : A.u) || 0), me = Number((A == null ? void 0 : A.v) || 0), V = v(Number(p.u || 0), B), oe = Number(p.v || 0) - me, Ae = Math.max(0.02, Number(w || 1)), ke = Number(P || 0) * br, Me = Math.cos(ke), Ie = Math.sin(ke), Re = V / Ae, je = oe / Ae, We = Re * Me + je * Ie, $e = -Re * Ie + je * Me;
    return {
      ...p,
      u: ((B + We) % 1 + 1) % 1,
      v: me + $e
    };
  }
  function _e(p) {
    const A = (p == null ? void 0 : p.bbox) || null, w = (p == null ? void 0 : p.transform) || {};
    return A ? {
      u: (((Number(A.u0 || 0) + Number(A.u1 || 0)) * 0.5 + Number(w.du || 0)) % 1 + 1) % 1,
      v: Ee((Number(A.v0 || 0) + Number(A.v1 || 0)) * 0.5 + Number(w.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ne(p) {
    var Ae, ke, Me, Ie;
    const A = (p == null ? void 0 : p.bbox) || null;
    if (!A) return [];
    const w = {
      u: (Number(A.u0 || 0) + Number(A.u1 || 0)) * 0.5,
      v: (Number(A.v0 || 0) + Number(A.v1 || 0)) * 0.5
    }, P = Math.max(0.01, Number(((Ae = p == null ? void 0 : p.transform) == null ? void 0 : Ae.scale) || 1)), B = Number(((ke = p == null ? void 0 : p.transform) == null ? void 0 : ke.rot_deg) || 0), me = Number(((Me = p == null ? void 0 : p.transform) == null ? void 0 : Me.du) || 0), V = Number(((Ie = p == null ? void 0 : p.transform) == null ? void 0 : Ie.dv) || 0);
    return [
      { u: Number(A.u0 || 0), v: Number(A.v0 || 0) },
      { u: Number(A.u1 || 0), v: Number(A.v0 || 0) },
      { u: Number(A.u1 || 0), v: Number(A.v1 || 0) },
      { u: Number(A.u0 || 0), v: Number(A.v1 || 0) }
    ].map((Re) => F(x(Re, w, P, B), me, V));
  }
  function fe(p) {
    const A = pe((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), w = (p == null ? void 0 : p.transform) || {}, P = (p == null ? void 0 : p.bbox) || {}, B = `${A}:${r.mode}:${u()}:${P.u0}:${P.v0}:${P.u1}:${P.v1}:${w.du}:${w.dv}:${w.rot_deg}:${w.scale}`;
    if (r.mode === "frame") {
      const me = a(), V = me ? c(me) : null;
      return `${B}:frame:${String((me == null ? void 0 : me.id) || "")}:${Math.round(Number((V == null ? void 0 : V.x) || 0))}:${Math.round(Number((V == null ? void 0 : V.y) || 0))}:${Math.round(Number((V == null ? void 0 : V.w) || 0))}:${Math.round(Number((V == null ? void 0 : V.h) || 0))}`;
    }
    return `${B}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ye(p) {
    const A = String((p == null ? void 0 : p.id) || ""), w = N(p) ? "frame" : ie(p) ? "sticker" : "item", P = j(p), B = [
      w,
      A,
      r.mode,
      Number((P == null ? void 0 : P.yaw_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.pitch_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.hFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.vFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.rot_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.roll_deg) || 0).toFixed(4),
      Fr(P),
      _(p) && k(p)
    ].join(":");
    if (r.mode === "frame") {
      const me = a(), V = me ? c(me) : null;
      return `${B}:frame:${String((me == null ? void 0 : me.id) || "")}:${Math.round(Number((V == null ? void 0 : V.x) || 0))}:${Math.round(Number((V == null ? void 0 : V.y) || 0))}:${Math.round(Number((V == null ? void 0 : V.w) || 0))}:${Math.round(Number((V == null ? void 0 : V.h) || 0))}`;
    }
    return `${B}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ne() {
    C().forEach((A, w) => {
      A.type === "sticker" && A.item && (A.item.z_index = w), A.type === "strokeGroup" && A.item && (A.item.z_index = w), A.type === "rasterObject" && A.item && (A.item.z_index = w);
    });
  }
  return {
    connect(p) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: g,
        sceneStickerShown: k
      } = p);
    },
    getList: m,
    skyStickers: h,
    isSceneSticker: _,
    isUploadingSticker: X,
    poseOf: j,
    writePose: J,
    getPaintingGroupList: O,
    makeStrokeGroupSelectionId: W,
    makeRasterObjectSelectionId: ee,
    parseRasterObjectSelectionId: pe,
    ensurePaintingGroupEntry: re,
    getFrameCornersUv: Q,
    ensureGroupFrame: H,
    getDisplayListObjects: C,
    getOrderedPaintGroupIds: $,
    getOrderedDisplayListObjects: R,
    getSelectableStrokeGroupItems: U,
    getSelectableRasterObjectItems: de,
    cutoutStickers: Se,
    getCutoutSelectableItems: te,
    isShotItem: N,
    isStickerItem: ie,
    getRasterObjectList: ue,
    getRasterObjectItem: be,
    isRasterObjectItem: ve,
    getStrokeGroupItem: I,
    isStrokeGroupItem: ce,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: y,
    shortestWrappedDelta: v,
    getStrokeGroupCenterUv: z,
    applyStrokeGroupOffset: L,
    applyStrokeGroupTransform: S,
    applyRasterObjectOffset: M,
    applyRasterObjectTransform: E,
    getNextStickerZIndex: q,
    isExternalSticker: le,
    isStickerHidden: ge,
    getStickerDisplayAlpha: Z,
    inverseTransformErpPointAround: he,
    getRasterObjectCenterUv: _e,
    getRasterObjectTransformedErpPoints: Ne,
    getRasterObjectGeomCacheKey: fe,
    getSceneItemGeomCacheKey: ye,
    normalizeDisplayZIndices: ne
  };
}
function AN(e) {
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
  let c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te;
  function N() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const A = O(p);
    if (A) return A;
    const w = X(p);
    return w || (o ? k().find((P) => String((P == null ? void 0 : P.id) || "") === p) || null : h().find((P) => String((P == null ? void 0 : P.id) || "") === p) || null);
  }
  function ie() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], A = [], w = /* @__PURE__ */ new Set();
    return p.forEach((P) => {
      const B = String(P || "").trim();
      if (!B || w.has(B)) return;
      w.add(B);
      const me = B === String(t.selectedId || "") ? N() : O(B) || X(B) || (o ? k().find((V) => String((V == null ? void 0 : V.id) || "") === B) : h().find((V) => String((V == null ? void 0 : V.id) || "") === B));
      me && A.push(me);
    }), A;
  }
  function ue(p = null) {
    const A = Array.isArray(p) ? p : ie();
    if (!A || A.length < 2) return null;
    const w = A.map((ke) => T(ke)).filter((ke) => (ke == null ? void 0 : ke.visible) && Array.isArray(ke.corners) && ke.corners.length);
    if (!w.length) return null;
    const P = w.flatMap((ke) => ke.corners.map((Me) => Number((Me == null ? void 0 : Me.x) || 0))), B = w.flatMap((ke) => ke.corners.map((Me) => Number((Me == null ? void 0 : Me.y) || 0))), me = Math.min(...P), V = Math.max(...P), oe = Math.min(...B), Ae = Math.max(...B);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (me + V) * 0.5, y: (oe + Ae) * 0.5 },
      corners: [
        { x: me, y: oe },
        { x: V, y: oe },
        { x: V, y: Ae },
        { x: me, y: Ae }
      ],
      edgeMidpoints: [
        { edge: "top", x: (me + V) * 0.5, y: oe, a: { x: me, y: oe }, b: { x: V, y: oe } },
        { edge: "right", x: V, y: (oe + Ae) * 0.5, a: { x: V, y: oe }, b: { x: V, y: Ae } },
        { edge: "bottom", x: (me + V) * 0.5, y: Ae, a: { x: V, y: Ae }, b: { x: me, y: Ae } },
        { edge: "left", x: me, y: (oe + Ae) * 0.5, a: { x: me, y: Ae }, b: { x: me, y: oe } }
      ],
      rotateStemBase: { x: (me + V) * 0.5, y: oe },
      rotateHandle: { x: (me + V) * 0.5, y: oe - 30 }
    };
  }
  function be(p) {
    const A = String((p == null ? void 0 : p.id) || "").trim();
    return !!A && Array.isArray(t.selectedIds) && t.selectedIds.includes(A);
  }
  function ve() {
    const p = N();
    return p ? re(p) || W(p) ? "stroke" : pe(p) ? "frame" : "image" : null;
  }
  function I(p) {
    if (!p || typeof p != "object") return !1;
    if (re(p)) {
      const A = String(p.actionGroupId || p.id || "").trim(), w = _().find((P) => String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim() === A);
      return (w == null ? void 0 : w.locked) === !0;
    }
    if (W(p)) {
      const A = C(p.rasterObjectId || p.id || ""), w = j().find((P) => String((P == null ? void 0 : P.id) || "").trim() === A);
      return (w == null ? void 0 : w.locked) === !0;
    }
    return p.locked === !0;
  }
  function ce(p = null) {
    const A = Array.isArray(p) ? p : ie();
    return A.length > 0 && A.every((w) => I(w));
  }
  function b(p, A) {
    const w = A === !0;
    if (!p || typeof p != "object") return !1;
    if (re(p)) {
      const P = String(p.actionGroupId || p.id || "").trim(), B = _().find((me) => String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || "").trim() === P);
      return !B || B.locked === w ? !1 : (B.locked = w, !0);
    }
    if (W(p)) {
      const P = C(p.rasterObjectId || p.id || ""), B = j().find((me) => String((me == null ? void 0 : me.id) || "").trim() === P);
      return !B || B.locked === w ? !1 : (B.locked = w, !0);
    }
    return p.locked === w ? !1 : (p.locked = w, !0);
  }
  function y() {
    if (r) return;
    const p = ie();
    if (!p.length) return;
    const A = !ce(p);
    let w = !1;
    p.forEach((P) => {
      b(P, A) && (w = !0);
    }), w && (R(), d(), Se(), te(), U());
  }
  function F(p) {
    he(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && se(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && pe(p) ? s.active.selected_shot_id = p.id || null : p ? pe(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function v(p, A = null) {
    const w = [], P = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((V) => {
      const oe = String((V == null ? void 0 : V.id) || "").trim();
      !oe || P.has(oe) || (P.add(oe), w.push(oe));
    }), t.selectedIds = w, he(), a.selection = null;
    const B = String(A || "").trim();
    t.selectedId = B && w.includes(B) ? B : w[w.length - 1] || null;
    const me = N();
    s.active.selected_sticker_id = me && se(me) && me.id || null, me && pe(me) ? s.active.selected_shot_id = me.id || null : w.length || (s.active.selected_shot_id = null);
  }
  function z() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((w, P) => ({
      kind: "frame",
      item: w,
      label: String((w == null ? void 0 : w.label) || `Frame ${P + 1}`)
    })), A = f().map((w, P) => {
      var me, V;
      const B = G(w) ? String(w.id || Cd) : String(((V = (me = s.assets) == null ? void 0 : me[w.asset_id]) == null ? void 0 : V.name) || w.asset_id || w.id || `Image ${P + 1}`);
      return {
        kind: "image",
        item: w,
        label: B
      };
    });
    return [...p, ...A];
  }
  function x(p) {
    return p === "frame" ? ze.camera : p === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function L(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: x(p.kind)
    };
  }
  function S() {
    if (r) return;
    const p = N();
    !p || !G(p) || (p.visible = D(p), fe(), Q(), R(), d(), te(), Se(), U());
  }
  function M() {
    if (r || l !== "stickers") return;
    const p = N();
    if (!p || !G(p)) return;
    const A = p.initial_pose;
    if (!A || typeof A != "object") return;
    p.yaw_deg = Number(A.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(A.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(A.hFOV_deg ?? p.hFOV_deg ?? 30);
    const w = J(ao, () => {
      U();
    });
    w && (w.complete || w.naturalWidth || w.width) ? p.vFOV_deg = u(
      Number(A.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(w.naturalWidth || w.width || 1),
      Number(w.naturalHeight || w.height || 1)
    ) : p.vFOV_deg = Number(A.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(A.rot_deg ?? p.rot_deg ?? 0), R(), d(), te(), Se(), U();
  }
  function E(p) {
    if (!p || !G(p)) return null;
    const A = p.initial_pose;
    if (!A || typeof A != "object") return null;
    const w = {
      yaw_deg: Number(A.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(A.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(A.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(A.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(A.rot_deg ?? p.rot_deg ?? 0)
    }, P = J(ao, () => {
      U();
    });
    return P && (P.complete || P.naturalWidth || P.width) && (w.vFOV_deg = u(
      w.hFOV_deg,
      Number(P.naturalWidth || P.width || 1),
      Number(P.naturalHeight || P.height || 1)
    )), w;
  }
  function q() {
    const p = N();
    if (!p || !G(p)) return !1;
    const A = E(p);
    if (!A) return !1;
    const w = (P, B) => Math.abs(Number(P || 0) - Number(B || 0)) <= 1e-4;
    return !(w(p.yaw_deg, A.yaw_deg) && w(p.pitch_deg, A.pitch_deg) && w(p.hFOV_deg, A.hFOV_deg) && w(p.vFOV_deg, A.vFOV_deg) && w(p.rot_deg, A.rot_deg));
  }
  function le(p = {}) {
    const w = p.preservePanelValues !== !1 ? $(N()) : null;
    w && (t.panelLastValues = {
      yaw_deg: Number(w.yaw_deg || 0),
      pitch_deg: Number(w.pitch_deg || 0),
      hFOV_deg: Number(w.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(w.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(w.rot_deg || 0),
      roll_deg: Number(w.roll_deg || 0),
      aspect_id: Fr(w)
    }), t.selectedId = null, t.selectedIds = [], he(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function ge() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function Z(p) {
    F(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function he() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function _e(p) {
    return !!p && !r && !p.locked;
  }
  function Ne() {
    if (l !== "cutout") return;
    const p = g();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function fe() {
    var A;
    const p = N();
    (ee(p) && !de(p) || t.selectedId === td && Y() && !c() || ve() === "stroke" && !H()) && F(null), ((A = ge()) == null ? void 0 : A.visible) === !1 && he();
  }
  function ye() {
    if (r) return;
    const p = ie();
    if (!N() || p.length === 0 || p.some((oe) => I(oe))) return;
    K();
    const w = m(), P = new Set(p.map((oe) => se(oe) ? `sticker:${String(oe.id || "")}` : W(oe) ? `rasterObject:${C(oe.rasterObjectId || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || oe.id || "")}`)), B = [], me = [];
    if (w.forEach((oe) => {
      var ke, Me;
      const Ae = oe.type === "sticker" ? `sticker:${String(((ke = oe.item) == null ? void 0 : ke.id) || "")}` : oe.type === "rasterObject" ? `rasterObject:${String(((Me = oe.item) == null ? void 0 : Me.id) || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || "")}`;
      P.has(Ae) ? B.push(oe) : me.push(oe);
    }), !B.length || B[B.length - 1] === w[w.length - 1]) return;
    [...me, ...B].forEach((oe, Ae) => {
      oe.type === "sticker" && oe.item && (oe.item.z_index = Ae), oe.type === "strokeGroup" && oe.item && (oe.item.z_index = Ae), oe.type === "rasterObject" && oe.item && (oe.item.z_index = Ae);
    }), Q(), R(), d(), Se(), U();
  }
  function ne() {
    if (r) return;
    const p = ie();
    if (!N() || p.length === 0 || p.some((oe) => I(oe))) return;
    K();
    const w = m(), P = new Set(p.map((oe) => se(oe) ? `sticker:${String(oe.id || "")}` : W(oe) ? `rasterObject:${C(oe.rasterObjectId || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || oe.id || "")}`)), B = [], me = [];
    if (w.forEach((oe) => {
      var ke, Me;
      const Ae = oe.type === "sticker" ? `sticker:${String(((ke = oe.item) == null ? void 0 : ke.id) || "")}` : oe.type === "rasterObject" ? `rasterObject:${String(((Me = oe.item) == null ? void 0 : Me.id) || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || "")}`;
      P.has(Ae) ? B.push(oe) : me.push(oe);
    }), !B.length || B[0] === w[0]) return;
    [...B, ...me].forEach((oe, Ae) => {
      oe.type === "sticker" && oe.item && (oe.item.z_index = Ae), oe.type === "strokeGroup" && oe.item && (oe.item.z_index = Ae), oe.type === "rasterObject" && oe.item && (oe.item.z_index = Ae);
    }), Q(), R(), d(), Se(), U();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: k,
        getDisplayListObjects: m,
        getList: h,
        getPaintingGroupList: _,
        getRasterObjectItem: X,
        getRasterObjectList: j,
        getStickerUiImage: J,
        getStrokeGroupItem: O,
        hasCamera: Y,
        isExternalSticker: G,
        isRasterObjectItem: W,
        isSceneSticker: ee,
        isShotItem: pe,
        isStickerHidden: D,
        isStickerItem: se,
        isStrokeGroupItem: re,
        markObjectVisualsDirty: Q,
        normalizeDisplayZIndices: K,
        objectGeom: T,
        paintingShown: H,
        parseRasterObjectSelectionId: C,
        poseOf: $,
        pushHistory: R,
        requestDraw: U,
        sceneStickerShown: de,
        updateSelectionMenu: Se,
        updateSidePanel: te
      } = p);
    },
    getSelected: N,
    getSelectedItems: ie,
    getMultiSelectionGeom: ue,
    isItemSelected: be,
    getSelectedKind: ve,
    isItemLocked: I,
    areAllSelectedItemsLocked: ce,
    toggleSelectedLock: y,
    setSelectedItem: F,
    setSelectedItems: v,
    getCutoutInspectorItems: z,
    getSelectionItemIcon: x,
    getSelectionItemLabelData: L,
    toggleSelectedExternalStickerVisibility: S,
    restoreSelectedToInitialPose: M,
    canRestoreSelectedToInitial: q,
    clearSelection: le,
    selectedWorldSticker: ge,
    selectWorldSticker: Z,
    clearWorldSelection: he,
    worldStickerEditable: _e,
    applyInitialCutoutFocus: Ne,
    releaseHiddenSelection: fe,
    bringSelectedToFront: ye,
    sendSelectedToBack: ne
  };
}
function CN(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function g() {
    return o && s() && i.camera.projection === "erp";
  }
  function k() {
    const ie = W({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !ie || ie.length !== 4 ? !1 : ie[0].y >= ie[3].y;
  }
  function m() {
    return Am({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const N = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return N.some((ie, ue) => ie !== f.key[ue]) && (f = { key: N, projection: Im(m(), r.width, r.height) }), f.projection;
  }
  function _(N) {
    const ie = h().project(N);
    return ie.z > 1e-4 ? ie : null;
  }
  function X(N, ie) {
    return h().ray(N, ie);
  }
  function j() {
    const N = r.width, ie = r.height, ue = 2;
    if (N / Math.max(ie, 1) >= ue) {
      const b = ie, y = b * ue;
      return { x: (N - y) * 0.5, y: 0, w: y, h: b };
    }
    const ve = N, I = ve / ue;
    return { x: 0, y: (ie - I) * 0.5, w: ve, h: I };
  }
  function J(N) {
    return {
      lon: Math.atan2(N.x, N.z),
      lat: Math.asin(Ee(N.y, -1, 1))
    };
  }
  function O(N, ie = null) {
    const { lon: ue, lat: be } = J(N), ve = j();
    let I = ve.x + (ue / (2 * Math.PI) + 0.5) * ve.w;
    const ce = ve.y + (0.5 - be / Math.PI) * ve.h;
    if (ie !== null) {
      for (; I - ie > ve.w / 2; ) I -= ve.w;
      for (; I - ie < -ve.w / 2; ) I += ve.w;
    }
    return { x: I, y: ce, z: 1 };
  }
  function Y(N) {
    const ie = c(N), ue = uo(
      Number(ie.yaw_deg || 0),
      Number(ie.pitch_deg || 0),
      Number(ie.rot_deg || ie.roll_deg || 0)
    ), be = Math.tan(Ee(Number(ie.hFOV_deg || 20), 0.1, 179) * 0.5 * br), ve = Math.tan(Ee(Number(ie.vFOV_deg || 20), 0.1, 179) * 0.5 * br);
    return {
      centerDir: ue.fwd,
      right: ue.right,
      up: ue.up,
      tanX: be,
      tanY: ve
    };
  }
  function G(N, ie, ue) {
    return ZP(hp(hp(N.centerDir, mp(N.right, ie)), mp(N.up, ue)));
  }
  function W(N) {
    const ie = Y(N);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: ve }) => G(ie, be * ie.tanX, ve * ie.tanY));
  }
  function ee(N, ie, ue) {
    const be = Y(N), ve = (ie * 2 - 1) * be.tanX, I = (1 - ue * 2) * be.tanY;
    return G(be, ve, I);
  }
  function pe(N) {
    const ie = t.width / Math.max(1, r.width), ue = t.height / Math.max(1, r.height);
    return { x: N.x * ie, y: N.y * ue, w: N.w * ie, h: N.h * ue };
  }
  function D(N, ie = null, ue = null, be = null) {
    if (n.mode === "frame") {
      const ve = ie || a();
      if (!ve) return [];
      const I = ue || l(ve);
      return R(N, ve, I);
    }
    return H(N, be);
  }
  function se(N, ie = null, ue = null, be = null, ve = null) {
    if (!N) return null;
    if (n.mode === "unwrap") {
      const ce = H([N], ve);
      return ce[0] ? { x: ce[0].x, y: ce[0].y, z: 1 } : null;
    }
    const I = Q(N);
    return I ? d(I, ie, ue, be) : null;
  }
  function re(N, ie) {
    if (!N || !ie) return null;
    const ue = Number(ie.x || 0), be = Number(ie.y || 0);
    return ee(N, ue, be);
  }
  function Q(N) {
    if (!N) return null;
    const ie = (Number(N.u || 0) - 0.5) * (2 * Math.PI), ue = (0.5 - Number(N.v || 0)) * Math.PI, be = Math.cos(ue);
    return Cl(be * Math.sin(ie), Math.sin(ue), be * Math.cos(ie));
  }
  function K(N, ie) {
    if (!N || !ie) return null;
    const ue = Y(N), be = vc(ie, ue.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const ve = vc(ie, ue.right) / be, I = vc(ie, ue.up) / be;
    return {
      x: (ve / Math.max(1e-6, ue.tanX) + 1) * 0.5,
      y: (1 - I / Math.max(1e-6, ue.tanY)) * 0.5
    };
  }
  function T(N) {
    if (!Array.isArray(N) || N.length < 3) return [];
    if (n.mode === "unwrap") {
      const ue = j();
      return N.map((be) => ({
        x: ue.x + Number(be.u || 0) * ue.w,
        y: ue.y + Number(be.v || 0) * ue.h
      }));
    }
    const ie = N.map((ue) => _(Q(ue))).filter(Boolean);
    return ie.every((ue) => Number(ue.z || 0) > 0) ? ie.map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) })) : [];
  }
  function H(N, ie = null) {
    if (!Array.isArray(N) || N.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = j();
      return N.map((ve) => {
        const I = (Number(ve.u || 0) % 1 + 1) % 1, ce = ie == null ? I : Number(ie || 0) + u(I, ie);
        return {
          x: be.x + ce * be.w,
          y: be.y + Number(ve.v || 0) * be.h
        };
      });
    }
    const ue = N.map((be) => _(Q(be))).filter(Boolean);
    return ue.every((be) => Number(be.z || 0) > 0) ? ue.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function C(N, ie = 160) {
    if (!Array.isArray(N) || N.length < 3) return !1;
    for (let ue = 0; ue < N.length; ue += 1) {
      const be = N[ue], ve = N[(ue + 1) % N.length];
      if (!be || !ve || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(ve.x) || !Number.isFinite(ve.y) || Math.hypot(Number(ve.x) - Number(be.x), Number(ve.y) - Number(be.y)) > ie) return !1;
    }
    return !0;
  }
  function $(N, ie, ue) {
    if (!Array.isArray(N) || N.length < 3 || !ie || !ue) return [];
    const be = [];
    for (const ve of N) {
      const I = Q(ve), ce = K(ie, I);
      if (!ce) return [];
      be.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return C(be, Math.max(80, Math.max(ue.w, ue.h) * 0.75)) ? be : [];
  }
  function R(N, ie, ue) {
    if (!Array.isArray(N) || N.length < 1 || !ie || !ue) return [];
    const be = [];
    for (const ve of N) {
      const I = Q(ve), ce = K(ie, I);
      ce && be.push({
        x: Number(ue.x || 0) + Number(ce.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(ce.y || 0) * Number(ue.h || 0)
      });
    }
    return be;
  }
  function U(N) {
    const ie = r.getBoundingClientRect();
    return {
      x: (N.clientX - ie.left) / ie.width * r.width,
      y: (N.clientY - ie.top) / ie.height * r.height
    };
  }
  function de(N) {
    const ie = r.getBoundingClientRect();
    return {
      x: Number(N.clientX) - Number(ie.left || 0),
      y: Number(N.clientY) - Number(ie.top || 0)
    };
  }
  function Se(N, ie = performance.now()) {
    if (n.mode === "unwrap") {
      const I = j(), ce = (N.x - I.x) / Math.max(1, I.w), b = (N.y - I.y) / Math.max(1, I.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (ce % 1 + 1) % 1,
        v: Ee(b, 0, 1),
        t: Number(ie || 0)
      };
    }
    const ue = X(N.x, N.y), { lon: be, lat: ve } = J(ue);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - ve / Math.PI, 0, 1),
      t: Number(ie || 0)
    };
  }
  function te(N, ie, ue = performance.now()) {
    const be = l(ie);
    if (!be) return null;
    const ve = {
      x: (Number(N.x) - be.x) / Math.max(1, be.w),
      y: (Number(N.y) - be.y) / Math.max(1, be.h)
    };
    if (ve.x < 0 || ve.x > 1 || ve.y < 0 || ve.y > 1) return null;
    const I = re(ie, ve);
    if (!I) return null;
    const { lon: ce, lat: b } = J(I);
    return {
      targetKind: "ERP_GLOBAL",
      u: (ce / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ee(0.5 - b / Math.PI, 0, 1),
      t: Number(ue || 0)
    };
  }
  return {
    connect(N) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = N);
    },
    isErpCamera: g,
    currentViewCamera: m,
    currentViewProjection: h,
    projectDir: _,
    screenToWorldDir: X,
    getUnwrapRect: j,
    projectDirUnwrap: O,
    getStickerFrame: Y,
    stickerDirFromFrame: G,
    stickerCornersDir: W,
    stickerSampleDir: ee,
    stickerCornerOrderSanity: k,
    projectEditorPoints: D,
    projectErpPointToEditor: se,
    frameLocalPointToWorldDir: re,
    erpPointToWorldDir: Q,
    worldDirToFrameLocalPoint: K,
    projectLassoPointsToCurrentView: T,
    projectErpLassoPointsToFrameRect: $,
    screenPos: U,
    screenPosCss: de,
    screenPosToErpPoint: Se,
    screenPosToFrameAsErpPoint: te,
    deviceRect: pe
  };
}
function IN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R;
  function U(I, ce) {
    const b = String(I.actionGroupId || I.id || "").trim(), y = j(b, I.layerKind), F = a(b, I.layerKind, y), v = (F == null ? void 0 : F.centerUv) || X(b, I.layerKind, y), z = n.mode === "unwrap" ? Number((v == null ? void 0 : v.u) || 0) : null, x = [], L = n.mode === "frame" ? l() : null, S = L ? u(L) : null;
    for (const fe of y) {
      const ye = (fe == null ? void 0 : fe.geometry) || null, ne = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [], p = Q(ne, L, S, z).filter((P) => Number.isFinite(P == null ? void 0 : P.x) && Number.isFinite(P == null ? void 0 : P.y));
      if (!p.length) continue;
      const A = c(String((fe == null ? void 0 : fe.toolKind) || "pen")), w = An[A] || An[Cr];
      x.push({
        points: p,
        closed: String((ye == null ? void 0 : ye.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((fe == null ? void 0 : fe.size) || 10) * Math.max(0.1, Number((w == null ? void 0 : w.sizeScale) ?? 1)) + 10),
        layerKind: String((fe == null ? void 0 : fe.layerKind) || I.layerKind || "paint")
      });
    }
    const M = K(v, null, L, S, z);
    if (!M) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, fe), fe;
    }
    const q = d(F).map((fe) => K(fe, M.x, L, S, z)).filter((fe) => Number.isFinite(fe == null ? void 0 : fe.x) && Number.isFinite(fe == null ? void 0 : fe.y)).map((fe) => ({ x: Number(fe.x || 0), y: Number(fe.y || 0) }));
    if (q.length < 4) {
      const fe = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(ce, fe), fe;
    }
    const le = (fe, ye) => ({
      x: (Number((fe == null ? void 0 : fe.x) || 0) + Number((ye == null ? void 0 : ye.x) || 0)) * 0.5,
      y: (Number((fe == null ? void 0 : fe.y) || 0) + Number((ye == null ? void 0 : ye.y) || 0)) * 0.5,
      a: fe,
      b: ye
    }), ge = le(q[0], q[1]), Z = le(q[1], q[2]), he = le(q[2], q[3]), _e = le(q[3], q[0]), Ne = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: q,
      edgeMidpoints: [
        { edge: "top", ...ge },
        { edge: "right", ...Z },
        { edge: "bottom", ...he },
        { edge: "left", ..._e }
      ],
      rotateStemBase: { x: ge.x, y: ge.y },
      rotateHandle: { x: ge.x, y: ge.y - 30 },
      strokePaths: x,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, Ne), Ne;
  }
  function de(I, ce) {
    const b = n.mode === "frame" ? l() : null, y = b ? u(b) : null, F = f(I), v = n.mode === "unwrap" ? Number((F == null ? void 0 : F.u) || 0) : null, z = K(F, null, b, y, v), L = k(I).map((q) => K(q, (z == null ? void 0 : z.x) ?? null, b, y, v)).filter((q) => Number.isFinite(q == null ? void 0 : q.x) && Number.isFinite(q == null ? void 0 : q.y));
    if (!Array.isArray(L) || L.length < 4) {
      const q = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(ce, q), q;
    }
    const S = L.slice(0, 4).map((q) => ({ x: Number((q == null ? void 0 : q.x) || 0), y: Number((q == null ? void 0 : q.y) || 0) })), E = {
      kind: "rasterObject",
      center: {
        x: S.reduce((q, le) => q + Number(le.x || 0), 0) / S.length,
        y: S.reduce((q, le) => q + Number(le.y || 0), 0) / S.length
      },
      corners: S,
      visible: !0
    };
    return n._strokeGeomCache.set(ce, E), E;
  }
  function Se(I, ce = null, b = null, y = null, F = {}) {
    if (n.mode === "frame") {
      const M = b || l(), E = y || u(M);
      if (!M || !E) return null;
      const q = M ? R(M, I) : null;
      return q ? {
        x: Number(E.x || 0) + Number(q.x || 0) * Number(E.w || 0),
        y: Number(E.y || 0) + Number(q.y || 0) * Number(E.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return re(I, ce);
    const v = 1e-4, z = o().project(I, v);
    if (!Number.isFinite(z.z) || z.z <= v && !(F != null && F.clipBehind)) return null;
    const x = r.width, L = r.height, S = Math.max(x, L) * 2;
    return {
      x: Ee(z.x, -S, x + S),
      y: Ee(z.y, -S, L + S),
      z: Math.max(z.z, v),
      rawZ: z.z,
      clipped: z.z <= v
    };
  }
  function te(I, ce = []) {
    if (n.mode !== "pano" || W(I)) return 1;
    const b = ce.map((y) => Number((y == null ? void 0 : y.rawZ) ?? (y == null ? void 0 : y.z))).filter((y) => Number.isFinite(y));
    return b.length ? XP(0.035, 0.2, Math.min(...b)) : 1;
  }
  function N(I) {
    if (Y(I) && !T(I)) return { visible: !1 };
    const ce = D(I), b = Cn(Number(ce.yaw_deg || 0), Number(ce.pitch_deg || 0)), y = n.mode === "frame" ? l() : null, F = y ? u(y) : null, v = n.mode === "pano" && (W(I) || G(I)), z = v ? { clipBehind: !0 } : null, x = Se(b, null, y, F, z);
    if (!x) return { visible: !1 };
    const L = h(I), M = H(I).map((B) => Se(B, x.x, y, F, z)).filter((B) => Number.isFinite(B == null ? void 0 : B.x) && Number.isFinite(B == null ? void 0 : B.y));
    if (M.length < 4) return { visible: !1 };
    const E = C(L, 0, L.tanY), q = C(L, 0, L.tanY + Math.max(L.tanY * 0.43, 0.053)), le = Se(E, x.x, y, F, z);
    if (!le) return { visible: !1 };
    const ge = Se(q, (le == null ? void 0 : le.x) ?? x.x, y, F, z), Z = ((ge == null ? void 0 : ge.x) ?? le.x) - le.x, he = ((ge == null ? void 0 : ge.y) ?? le.y) - le.y, _e = Math.hypot(Z, he) || 1, Ne = {
      x: le.x + Z / _e * 30,
      y: le.y + he / _e * 30
    }, fe = Se(C(L, 0, L.tanY), x.x, y, F, z), ye = Se(C(L, L.tanX, 0), x.x, y, F, z), ne = Se(C(L, 0, -L.tanY), x.x, y, F, z), p = Se(C(L, -L.tanX, 0), x.x, y, F, z);
    if (!fe || !ye || !ne || !p) return { visible: !1 };
    const A = [
      x,
      ...M,
      le,
      ge,
      fe,
      ye,
      ne,
      p
    ];
    if (v && !A.some((B) => Number((B == null ? void 0 : B.rawZ) ?? (B == null ? void 0 : B.z)) > 1e-4)) return { visible: !1 };
    const w = te(I, A), P = [
      {
        edge: "top",
        x: fe.x,
        y: fe.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ye.x,
        y: ye.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: ne.x,
        y: ne.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: x.x, y: x.y },
      corners: M.map((B) => ({ x: B.x, y: B.y })),
      edgeMidpoints: P,
      rotateStemBase: { x: le.x, y: le.y },
      rotateHandle: Ne,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: w,
      visible: !0
    };
  }
  function ie(I) {
    if (t && G(I) && J()) return { visible: !1 };
    if (!pe() && (ee(I) || O(I))) return { visible: !1 };
    if (ee(I)) {
      const F = String(I.actionGroupId || I.id || "").trim(), v = _(F, I.layerKind), z = n._strokeGeomCache.get(v);
      return z || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), U(I, v));
    }
    if (O(I)) {
      const F = g(I), v = n._strokeGeomCache.get(F);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), de(I, F));
    }
    const ce = m(I), b = n._strokeGeomCache.get(ce);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const y = N(I);
    return n._strokeGeomCache.set(ce, y), y;
  }
  function ue(I, ce, b, y = null) {
    const F = [];
    for (let v = 0; v <= b; v += 1) {
      const z = v / b;
      let x = 0, L = 0;
      ce === 0 ? (x = z, L = 0) : ce === 1 ? (x = 1, L = z) : ce === 2 ? (x = 1 - z, L = 1) : (x = 0, L = 1 - z);
      const S = $(I, x, L), M = n.mode === "unwrap" ? re(S, y) : se(S);
      M && F.push(M);
    }
    return F;
  }
  function be() {
    const I = [...Array.isArray(i.shots) ? i.shots : []], ce = [...s()].sort((b, y) => Number(b.z_index || 0) - Number(y.z_index || 0));
    return [...I, ...ce];
  }
  function ve() {
    const I = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((b, y) => Number(y.z_index || 0) - Number(b.z_index || 0)), ...I];
  }
  return {
    connect(I) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: g,
        getRasterObjectTransformedErpPoints: k,
        getSceneItemGeomCacheKey: m,
        getStickerFrame: h,
        getStrokeGeomCacheKey: _,
        getStrokeGroupCenterUv: X,
        getStrokeGroupStrokes: j,
        isFreeSpaceView: J,
        isRasterObjectItem: O,
        isSceneSticker: Y,
        isShotItem: G,
        isStickerItem: W,
        isStrokeGroupItem: ee,
        paintingShown: pe,
        poseOf: D,
        projectDir: se,
        projectDirUnwrap: re,
        projectEditorPoints: Q,
        projectErpPointToEditor: K,
        sceneStickerShown: T,
        stickerCornersDir: H,
        stickerDirFromFrame: C,
        stickerSampleDir: $,
        worldDirToFrameLocalPoint: R
      } = I);
    },
    projectSceneItemDir: Se,
    objectGeom: ie,
    sampleStickerEdge: ue,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: ve
  };
}
const na = /* @__PURE__ */ new Map();
function EN(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D;
  function se(v = r.interaction) {
    const z = String((v == null ? void 0 : v.kind) || "");
    if (z === "paint_stroke" || z === "paint_lasso_fill" || z === "move_stroke_group" || z === "scale_stroke_group" || z === "rotate_stroke_group" || z === "move_raster_object" || z === "scale_raster_object") return !0;
    if (z === "move_multi") {
      const x = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, L = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return x || L;
    }
    return !1;
  }
  function re() {
    var z, x, L, S;
    let v = null;
    try {
      const M = m(), E = ((S = (L = (x = (z = r.paintEngine) == null ? void 0 : z.getErpTarget) == null ? void 0 : x.call(z, M)) == null ? void 0 : L.displayPaint) == null ? void 0 : S.canvas) || null;
      E && (v = {
        source: E,
        revision: `${h()}:${Q()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function Q() {
    var S, M, E, q, le, ge, Z;
    const v = r.interaction, z = String((v == null ? void 0 : v.kind) || "");
    if (!se(v)) return "";
    if (z === "paint_stroke" || z === "paint_lasso_fill") {
      const he = ((S = v == null ? void 0 : v.stroke) == null ? void 0 : S.geometry) || null, _e = String(((M = v == null ? void 0 : v.stroke) == null ? void 0 : M.layerKind) || ""), Ne = ((E = he == null ? void 0 : he.rawPoints) == null ? void 0 : E.length) ?? ((q = he == null ? void 0 : he.points) == null ? void 0 : q.length) ?? 0, fe = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${_e || "paint"}_${z}_live${fe}_${Ne}_${r.livePaintInteractionRevision}`;
    }
    const x = String(((le = v == null ? void 0 : v.item) == null ? void 0 : le.actionGroupId) || ""), L = String(((ge = v == null ? void 0 : v.item) == null ? void 0 : ge.rasterObjectId) || ((Z = v == null ? void 0 : v.item) == null ? void 0 : Z.id) || "");
    return `_${z}_${x || L || "active"}_${r.livePaintInteractionRevision}`;
  }
  function K(v, z = null) {
    const x = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!x) return null;
    const L = s.get(x);
    if (L)
      return L.complete || L.width || L.naturalWidth, L;
    const S = new Image();
    return S.onload = () => {
      typeof z == "function" && z();
    }, S.src = x, s.set(x, S), S;
  }
  function T(v) {
    const z = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!z) return null;
    const x = o.get(z);
    if (x) return x.ready ? x : null;
    const L = K(v, () => {
      const Z = o.get(z);
      Z && (Z.ready = !1), ee({ localOnly: !0 });
    });
    if (!L || !(L.complete || L.width || L.naturalWidth)) return null;
    const S = Number(L.naturalWidth || L.width || 0), M = Number(L.naturalHeight || L.height || 0);
    if (S < 1 || M < 1) return null;
    const E = nn({ label: "editor.image-pixels" });
    E.width = S, E.height = M;
    const q = E.getContext("2d", { willReadFrequently: !0 });
    if (!q) return null;
    q.clearRect(0, 0, S, M), q.drawImage(L, 0, 0, S, M);
    const le = q.getImageData(0, 0, S, M).data, ge = { canvas: E, width: S, height: M, alpha: le, ready: !0 };
    return o.set(z, ge), ge;
  }
  function H(v, z) {
    if (!v || !z) return null;
    const x = (v == null ? void 0 : v.bbox) || null;
    if (!x) return null;
    const L = (v == null ? void 0 : v.transform) || {}, S = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, M = {
      u: ((Number(z.u || 0) - Number(L.du || 0)) % 1 + 1) % 1,
      v: Number(z.v || 0) - Number(L.dv || 0)
    }, E = j(
      M,
      S,
      Number(L.scale || 1),
      Number(L.rot_deg || 0)
    ), q = Number(x.u1 || 0) - Number(x.u0 || 0), le = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(q > 1e-6) || !(le > 1e-6)) return null;
    const ge = D(Number(E.u || 0), Number(x.u0 || 0)) / q, Z = (Number(E.v || 0) - Number(x.v0 || 0)) / le;
    if (ge < 0 || ge > 1 || Z < 0 || Z > 1) return 0;
    const he = T(v);
    if (!he) return null;
    const _e = Ee(Math.floor(ge * he.width), 0, he.width - 1), Ne = Ee(Math.floor(Z * he.height), 0, he.height - 1);
    return Number(he.alpha[(Ne * he.width + _e) * 4 + 3] || 0);
  }
  function C(v, z, x, L = null) {
    if (!(z != null && z.visible) || !qr(x, z.corners)) return !1;
    const S = L || pe(x, performance.now()), M = H(v, S);
    return M === null ? !0 : M > 8;
  }
  function $() {
    var L, S, M, E, q, le, ge, Z;
    const v = ((S = (L = r.paintEngine) == null ? void 0 : L.getErpTarget) == null ? void 0 : S.call(L, m(!1))) || null, z = Math.max(1, Number(((M = v == null ? void 0 : v.descriptor) == null ? void 0 : M.width) || ((q = (E = v == null ? void 0 : v.displayPaint) == null ? void 0 : E.canvas) == null ? void 0 : q.width) || 2048)), x = Math.max(1, Number(((le = v == null ? void 0 : v.descriptor) == null ? void 0 : le.height) || ((Z = (ge = v == null ? void 0 : v.displayPaint) == null ? void 0 : ge.canvas) == null ? void 0 : Z.height) || 1024));
    return { width: z, height: x };
  }
  function R() {
    var Ne, fe, ye;
    const v = r.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const z = (v == null ? void 0 : v.stroke) || null;
    if (!z || String((z == null ? void 0 : z.layerKind) || "") !== "paint" || String((z == null ? void 0 : z.toolKind) || "") !== "eraser") return null;
    const x = u(), L = `${Q()}:${x.width}:${x.height}`;
    if (((Ne = r._activePaintEraserPreviewInfo) == null ? void 0 : Ne.cacheKey) === L)
      return r._activePaintEraserPreviewInfo.value || null;
    const S = un(z), M = (S == null ? void 0 : S.geometry) || null;
    if (M && String(M.geometryKind || "") !== "lasso_fill") {
      const ne = Array.isArray(M.rawPoints) && M.rawPoints.length ? M.rawPoints : Array.isArray(M.points) ? M.points : [];
      M.processedPoints = Y(ne, S.targetSpace, !0);
    }
    const E = c(x.width, x.height, { readback: !0 });
    if (!G(E, S, { w: x.width, h: x.height })) return null;
    const q = ((ye = (fe = E.ctx) == null ? void 0 : fe.getImageData(0, 0, x.width, x.height)) == null ? void 0 : ye.data) || null;
    if (!q) return null;
    let le = x.width, ge = x.height, Z = -1, he = -1;
    for (let ne = 0; ne < x.height; ne += 1)
      for (let p = 0; p < x.width; p += 1)
        q[(ne * x.width + p) * 4 + 3] <= 8 || (p < le && (le = p), ne < ge && (ge = ne), p > Z && (Z = p), ne > he && (he = ne));
    if (Z < le || he < ge)
      return r._activePaintEraserPreviewInfo = { cacheKey: L, value: null }, null;
    const _e = {
      surface: E,
      bounds: { minX: le, minY: ge, maxX: Z, maxY: he },
      key: `${L}:${le}:${ge}:${Z}:${he}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: L, value: _e }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), _e;
  }
  function U() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function de(v, z, x) {
    var L, S;
    if (!v) return null;
    if (v.type === "rasterObject" && ((L = v.item) != null && L.bbox)) {
      const M = v.item.bbox, E = ((S = v.item) == null ? void 0 : S.transform) || {}, q = Number(M.u0 || 0) + Number(E.du || 0), le = Number(M.u1 || 0) + Number(E.du || 0), ge = Number(M.v0 || 0) + Number(E.dv || 0), Z = Number(M.v1 || 0) + Number(E.dv || 0);
      return {
        minX: Math.floor((q % 1 + 1) % 1 * z),
        maxX: Math.ceil((le % 1 + 1) % 1 * z),
        minY: Math.floor(Ee(ge, 0, 1) * x),
        maxY: Math.ceil(Ee(Z, 0, 1) * x),
        wraps: le - q >= 1 || q < 0 || le > 1
      };
    }
    if (v.type === "strokeGroup") {
      const M = X(v.actionGroupId, "paint"), E = d(v.actionGroupId, "paint", M);
      if (!E) return null;
      const q = E.centerUv.u - E.halfW, le = E.centerUv.u + E.halfW, ge = E.centerUv.v - E.halfH, Z = E.centerUv.v + E.halfH;
      return {
        minX: Math.floor((q % 1 + 1) % 1 * z),
        maxX: Math.ceil((le % 1 + 1) % 1 * z),
        minY: Math.floor(Ee(ge, 0, 1) * x),
        maxY: Math.ceil(Ee(Z, 0, 1) * x),
        wraps: le - q >= 1 || q < 0 || le > 1
      };
    }
    return null;
  }
  function Se(v, z, x) {
    if (!v || !z) return !1;
    const L = (E) => E.wraps ? [
      { minX: 0, maxX: E.maxX, minY: E.minY, maxY: E.maxY, wraps: !1 },
      { minX: E.minX, maxX: x - 1, minY: E.minY, maxY: E.maxY, wraps: !1 }
    ] : [E], S = L(v), M = L(z);
    return S.some((E) => M.some((q) => !(E.maxX < q.minX || q.maxX < E.minX || E.maxY < q.minY || q.maxY < E.minY)));
  }
  function te(v, z, x) {
    var P, B, me, V, oe, Ae, ke;
    if (!v || !z || !((P = x == null ? void 0 : x.surface) != null && P.canvas) || z.type !== "rasterObject") return v;
    const L = Number(v.width || x.surface.canvas.width || 0), S = Number(v.height || x.surface.canvas.height || 0);
    if (L < 1 || S < 1) return v;
    const M = de(z, L, S);
    if (M && !Se(M, x.bounds, L)) return v;
    const E = String(((B = z.item) == null ? void 0 : B.id) || z.id || ""), q = ((me = z.item) == null ? void 0 : me.transform) || {}, le = `${x.key}:${E}:${L}:${S}:${Number(q.du || 0).toFixed(6)}:${Number(q.dv || 0).toFixed(6)}:${Number(q.rot_deg || 0).toFixed(3)}:${Number(q.scale || 1).toFixed(4)}`, ge = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (ge.has(le)) return ge.get(le);
    const Z = Ee(Math.floor(Number(((V = x.bounds) == null ? void 0 : V.minX) || 0)), 0, Math.max(0, L - 1)), he = Ee(Math.floor(Number(((oe = x.bounds) == null ? void 0 : oe.minY) || 0)), 0, Math.max(0, S - 1)), _e = Ee(Math.ceil(Number(((Ae = x.bounds) == null ? void 0 : Ae.maxX) || 0)), Z, Math.max(0, L - 1)), Ne = Ee(Math.ceil(Number(((ke = x.bounds) == null ? void 0 : ke.maxY) || 0)), he, Math.max(0, S - 1)), fe = Math.max(1, _e - Z + 1), ye = Math.max(1, Ne - he + 1), ne = c(L, S, { readback: !0 });
    ne.ctx.clearRect(0, 0, L, S), ne.ctx.drawImage(v, 0, 0);
    const p = ne.ctx.getImageData(Z, he, fe, ye);
    ne.ctx.save(), ne.ctx.globalCompositeOperation = "destination-out", ne.ctx.drawImage(x.surface.canvas, 0, 0), ne.ctx.restore();
    const A = ne.ctx.getImageData(Z, he, fe, ye);
    let w = !1;
    for (let Me = 0; Me < fe * ye; Me += 1) {
      const Ie = p.data[Me * 4 + 3], Re = A.data[Me * 4 + 3];
      if (Ie > Re) {
        w = !0;
        break;
      }
    }
    return w ? (ge.size > 64 && ge.clear(), ge.set(le, ne.canvas), ne.canvas) : (ge.set(le, v), v);
  }
  function N(v, z = null) {
    const x = O((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), L = (v == null ? void 0 : v.bbox) || null;
    if (!x || !L) return null;
    const S = K(v, z);
    if (!S || !(S.complete || S.width || S.naturalWidth)) return null;
    const { width: M, height: E } = $(), q = (v == null ? void 0 : v.transform) || {}, le = [
      x,
      M,
      E,
      L.u0,
      L.v0,
      L.u1,
      L.v1,
      q.du,
      q.dv,
      q.rot_deg,
      q.scale,
      _()
    ].join(":"), ge = i.get(le);
    if (ge) return ge;
    i.size > 64 && i.clear();
    const Z = nn({ label: "editor.raster-erp" });
    Z.width = M, Z.height = E;
    const he = Z.getContext("2d");
    return he ? (Xg(he, S, v, M, E), i.set(le, Z), Z) : null;
  }
  async function ie(v, z) {
    const x = await new Promise((q) => v.toBlob(q, "image/png")), L = new FormData();
    L.append("image", x, z), L.append("type", "input"), L.append("subfolder", "panorama_stickers"), L.append("overwrite", "1");
    const S = await t.fetchApi("/upload/image", { method: "POST", body: L });
    if (!S || S.status !== 200) throw new Error(`upload failed (${S == null ? void 0 : S.status})`);
    const M = await S.json(), E = String((M == null ? void 0 : M.name) || "").trim();
    if (!E) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: E,
      subfolder: String((M == null ? void 0 : M.subfolder) || "panorama_stickers"),
      storage: String((M == null ? void 0 : M.type) || "input")
    };
  }
  let ue = null, be = !1;
  function ve() {
    const v = gp(a.painting), { width: z, height: x } = f();
    return wv(a.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: z, height: x, nodeId: String(n.id ?? "0") });
  }
  function I() {
    const v = String(n.id ?? "0"), z = na.get(v);
    if (be && z) return z;
    const x = (async () => {
      var M, E, q, le, ge, Z, he, _e, Ne, fe, ye, ne;
      const L = h(), S = gp(a.painting);
      if (S.totalPaintCount <= 0 && S.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ue = L, l());
        return;
      }
      if (ue !== L && !be) {
        be = !0;
        try {
          W();
          const p = m(!1), A = ((E = (M = r.paintEngine) == null ? void 0 : M.getErpTarget) == null ? void 0 : E.call(M, p)) || null, w = ((q = A == null ? void 0 : A.displayPaint) == null ? void 0 : q.canvas) || null, P = ((le = A == null ? void 0 : A.committedMask) == null ? void 0 : le.canvas) || null, B = Math.max(1, Number(((ge = A == null ? void 0 : A.descriptor) == null ? void 0 : ge.width) || (w == null ? void 0 : w.width) || (P == null ? void 0 : P.width) || 2048)), me = Math.max(1, Number(((Z = A == null ? void 0 : A.descriptor) == null ? void 0 : Z.height) || (w == null ? void 0 : w.height) || (P == null ? void 0 : P.height) || 1024));
          (!w && S.totalPaintCount > 0 || !P && S.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((he = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : he.width) || 0) !== B || Number(((_e = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : _e.height) || 0) !== me) && (r._paintLayerSyncBlankSurface = c(B, me)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, B, me));
          const V = w || S.totalPaintCount > 0 && ((Ne = r._paintLayerSyncBlankSurface) == null ? void 0 : Ne.canvas) || null, oe = P || S.totalMaskCount > 0 && ((fe = r._paintLayerSyncBlankSurface) == null ? void 0 : fe.canvas) || null;
          if (!V && !oe) return;
          let Ae = null, ke = null;
          const Me = [];
          if (S.totalPaintCount > 0) {
            Ae = await ie(V, `pano_paint_${v}.png`);
            for (const Ie of p) {
              const Re = String(Ie || "").trim();
              if (!Re) continue;
              const je = ((ne = (ye = r.paintEngine) == null ? void 0 : ye.getGroupDisplayCanvas) == null ? void 0 : ne.call(ye, Re)) || null;
              if (!je) continue;
              const We = Re.replace(/[^a-zA-Z0-9_-]+/g, "_"), $e = await ie(je, `pano_group_${v}_${We}.png`);
              $e && Me.push({
                id: Re,
                actionGroupId: Re,
                image: $e
              });
            }
          }
          S.totalMaskCount > 0 && (ke = await ie(oe, `pano_mask_${v}.png`)), L === h() && (a.painting_layer = {
            paint: Ae,
            mask: ke,
            groups: Me,
            revision: L
          }, ue = L, l());
        } catch (p) {
          throw p;
        } finally {
          be = !1;
        }
      }
    })();
    return na.set(v, x), x.finally(() => {
      na.get(v) === x && na.delete(v);
    }), x;
  }
  function ce(v) {
    var E;
    const z = ((E = r.paintEngine) == null ? void 0 : E.getMaskDisplayCanvas()) || null;
    if (!z) return v;
    const x = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, L = v.reduce((q, le) => Math.max(q, Number((le == null ? void 0 : le.zIndex) || 0)), -1), S = (Array.isArray(a.stickers) ? a.stickers : []).reduce((q, le) => Math.max(q, Number((le == null ? void 0 : le.z_index) || 0)), -1), M = Math.max(L, S);
    return v.push({
      id: "mask_display",
      source: z,
      revision: x,
      zIndex: M + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function b() {
    var L, S;
    const v = k(!0), z = R(), x = [];
    for (const M of v) {
      if ((M == null ? void 0 : M.type) === "strokeGroup") {
        const E = String(M.actionGroupId || M.id || "");
        if (!E) continue;
        const q = ((S = (L = r.paintEngine) == null ? void 0 : L.getGroupDisplayCanvas) == null ? void 0 : S.call(L, E)) || null;
        if (!q) continue;
        x.push({
          id: `paint_group:${E}`,
          source: q,
          revision: `${g()}:${E}`,
          zIndex: Number((M == null ? void 0 : M.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((M == null ? void 0 : M.type) === "rasterObject") {
        const E = M.item || null, q = O((E == null ? void 0 : E.id) || M.id || "");
        if (!q) continue;
        const le = N(E, () => ee());
        if (!le) continue;
        const ge = te(le, M, z), Z = (E == null ? void 0 : E.transform) || {};
        x.push({
          id: `raster:${q}`,
          source: ge,
          revision: [
            h(),
            (z == null ? void 0 : z.key) || "",
            q,
            Number(Z.du || 0).toFixed(6),
            Number(Z.dv || 0).toFixed(6),
            Number(Z.rot_deg || 0).toFixed(3),
            Number(Z.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((M == null ? void 0 : M.z_index) || 0),
          opacity: 1,
          visible: (E == null ? void 0 : E.visible) !== !1
        });
      }
    }
    return ce(x);
  }
  function y() {
    return J() ? b().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function F() {
    a.painting_layer !== null && (a.painting_layer = null), ue = "";
  }
  return {
    connect(v) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: g,
        getOrderedDisplayListObjects: k,
        getOrderedPaintGroupIds: m,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: _,
        getStrokeGroupStrokes: X,
        inverseTransformErpPointAround: j,
        paintingShown: J,
        parseRasterObjectSelectionId: O,
        processFreehandPoints: Y,
        rasterizeStrokeToSurface: G,
        rebuildPaintEngineIfNeeded: W,
        requestDraw: ee,
        screenPosToErpPoint: pe,
        shortestWrappedDelta: D
      } = v);
    },
    getSharedLivePaintSurface: re,
    getLivePaintRevisionSuffix: Q,
    isPaintCompositeInteraction: se,
    hitRasterObjectAt: C,
    invalidateLivePaintPreviewCaches: U,
    buildRasterObjectEditCanvas: N,
    needsPaintingLayerSync: ve,
    syncPaintingLayerAsync: I,
    invalidatePaintingLayerState: F,
    buildEditorViewPaintLayers: y
  };
}
function ON(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(te) {
    return !te || typeof te != "object" ? { x: 0, y: 0 } : { x: Number((te == null ? void 0 : te.u) || 0), y: Number((te == null ? void 0 : te.v) || 0) };
  }
  function c(te, N, ie, ue = {}) {
    return { ...{
      ...te,
      t: Number((te == null ? void 0 : te.t) || 0),
      widthScale: f(te, "widthScale", 1),
      pressureLike: f(te, "pressureLike", 1)
    }, ...ue, u: N, v: ie };
  }
  function d(te, N = !1) {
    return N ? 12e-4 : 18e-4;
  }
  function u(te, N, ie = !1) {
    if (!Array.isArray(te) || !te.length) return [];
    const ue = String((N == null ? void 0 : N.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ue) {
      let S = null;
      te.forEach((M) => {
        const E = Number((M == null ? void 0 : M.u) || 0), q = Number((M == null ? void 0 : M.v) || 0), le = (E % 1 + 1) % 1, ge = S == null ? le : S + a(le, (S % 1 + 1) % 1);
        be.set(M, { x: ge, y: q }), S = ge;
      });
    }
    const ve = (S) => !S || typeof S != "object" ? { x: 0, y: 0 } : be.get(S) || l(S), I = (S, M, E, q = {}) => {
      const le = ue ? (Number(M) % 1 + 1) % 1 : Number(M), ge = c(S, le, E, q);
      return be.set(ge, { x: Number(M), y: Number(E) }), ge;
    }, ce = (S, M, E) => {
      const q = ve(S), le = ve(M);
      return I(S, Gn(q.x, le.x, E), Gn(q.y, le.y, E), {
        t: Gn(Number((S == null ? void 0 : S.t) || 0), Number((M == null ? void 0 : M.t) || 0), E),
        widthScale: Gn(f(S, "widthScale", 1), f(M, "widthScale", 1), E),
        pressureLike: Gn(f(S, "pressureLike", 1), f(M, "pressureLike", 1), E)
      });
    };
    if (te.length === 1) {
      const S = ve(te[0]);
      return [I(te[0], S.x, S.y)];
    }
    const b = d(N, ie), y = (S, M) => {
      const E = [0];
      for (let fe = 1; fe < S.length; fe += 1) {
        const ye = ve(S[fe - 1]), ne = ve(S[fe]);
        E.push(E[fe - 1] + Math.hypot(ne.x - ye.x, ne.y - ye.y));
      }
      const q = E[E.length - 1] || 0;
      if (q <= 1e-8) {
        const fe = S[0], ye = ve(fe);
        return [I(fe, ye.x, ye.y)];
      }
      const le = [];
      let ge = 0;
      for (let fe = 0; fe <= q + 1e-9; fe += M) {
        for (; ge < E.length - 2 && E[ge + 1] < fe; ) ge += 1;
        const ye = E[ge], ne = E[ge + 1], p = Math.max(1e-8, ne - ye);
        le.push(ce(S[ge], S[ge + 1], Ee((fe - ye) / p, 0, 1)));
      }
      const Z = S[S.length - 1], he = ve(Z), _e = le[le.length - 1], Ne = _e ? ve(_e) : null;
      return (!Ne || Math.hypot(Ne.x - he.x, Ne.y - he.y) > M * 0.35) && le.push(I(Z, he.x, he.y)), le;
    }, F = (S) => {
      if (!Array.isArray(S) || S.length < 3) return S ? S.slice() : [];
      const M = ve(S[0]), E = [I(S[0], M.x, M.y)];
      for (let ge = 0; ge < S.length - 1; ge += 1) {
        const Z = S[ge], he = S[ge + 1], _e = ve(Z), Ne = ve(he), fe = I(
          Z,
          _e.x * 0.75 + Ne.x * 0.25,
          _e.y * 0.75 + Ne.y * 0.25,
          {
            t: Number(Z.t || 0) * 0.75 + Number(he.t || 0) * 0.25,
            widthScale: f(Z, "widthScale", 1) * 0.75 + f(he, "widthScale", 1) * 0.25,
            pressureLike: f(Z, "pressureLike", 1) * 0.75 + f(he, "pressureLike", 1) * 0.25
          }
        ), ye = I(
          Z,
          _e.x * 0.25 + Ne.x * 0.75,
          _e.y * 0.25 + Ne.y * 0.75,
          {
            t: Number(Z.t || 0) * 0.25 + Number(he.t || 0) * 0.75,
            widthScale: f(Z, "widthScale", 1) * 0.25 + f(he, "widthScale", 1) * 0.75,
            pressureLike: f(Z, "pressureLike", 1) * 0.25 + f(he, "pressureLike", 1) * 0.75
          }
        );
        E.push(fe, ye);
      }
      const q = S[S.length - 1], le = ve(q);
      return E.push(I(q, le.x, le.y)), E;
    }, v = y(te, b);
    if (v.length < 3) return v;
    const z = ie ? 2 : 1;
    let x = v.slice();
    for (let S = 0; S < z; S += 1) x = F(x);
    return y(x, Math.max(b * 0.75, 55e-5));
  }
  function f(te, N, ie = 1) {
    const ue = Number(te == null ? void 0 : te[N]);
    return Number.isFinite(ue) ? Math.max(0, ue) : ie;
  }
  function g(te) {
    const N = Number(te == null ? void 0 : te.radiusValue);
    if (Number.isFinite(N) && N > 0) {
      const ie = String((te == null ? void 0 : te.radiusModel) || "").trim() || "erp_uv_norm";
      return ie === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
      } : {
        model: ie,
        value: N
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((te == null ? void 0 : te.size) || 10) * 0.5 / 2048)
    };
  }
  function k(te, N, ie = {}) {
    const ue = nn({ label: "editor.raster-surface" });
    ue.width = Math.max(1, Math.round(te)), ue.height = Math.max(1, Math.round(N));
    const be = ue.getContext("2d", ie.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ue.width, ue.height), be.imageSmoothingEnabled = !0), { canvas: ue, ctx: be };
  }
  function m() {
    const te = pe();
    return `${String(t.paintStrokeRevision)}:${te.width}x${te.height}`;
  }
  function h() {
    const te = pe();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${te.width}x${te.height}`;
  }
  function _() {
    const te = i(), N = h();
    return te ? `${N}:${te}` : N;
  }
  function X() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function j() {
    t.paintCompositeRevision += 1;
  }
  function J() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function O() {
    var te, N;
    t.paintEngineRevisionKey = null, (N = (te = t.paintEngine) == null ? void 0 : te.rebuildCommitted) == null || N.call(te, n), t.paintEngineRevisionKey = m();
  }
  function Y() {
    J(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function G({ rebuildPaintEngine: te = !1 } = {}) {
    o(), X(), Y(), te && O();
  }
  function W() {
    o(), j(), Y();
  }
  function ee() {
    var ue;
    const te = pe(), N = `${te.width}x${te.height}`;
    t.paintEngineDescriptorKey !== N && (t.paintEngine = yl(te), t.paintEngineDescriptorKey = N, t.paintEngineRevisionKey = "");
    const ie = m();
    t.paintEngineRevisionKey !== ie && (t.paintEngineRevisionKey = ie, (ue = t.paintEngine) == null || ue.rebuildCommitted(n));
  }
  function pe() {
    const te = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: te,
      height: Math.max(1, Math.round(te * 0.5))
    };
  }
  function D() {
    return pe();
  }
  function se(te, N, ie, ue, be = null) {
    const ve = g(te), I = f(N, "widthScale", 1) * f(N, "pressureLike", 1);
    return ve.model === "erp_uv_norm" ? Math.max(0.5, ve.value * ie * I) : ve.model === "world_angle" ? be ? Math.max(0.5, ve.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * br) * ie * I) : Math.max(0.5, ve.value / (2 * Math.PI) * ie * I) : Math.max(0.5, Number((te == null ? void 0 : te.size) || 10) * 0.5 * I);
  }
  function re(te, N, ie = {}) {
    const ue = String((N == null ? void 0 : N.layerKind) || "paint"), be = String((N == null ? void 0 : N.toolKind) || "pen"), ve = ie.preview === !0, I = ve ? 0.78 : 1;
    if (te.globalAlpha = be === "marker" ? 0.7 * I : 1, ue === "mask") {
      te.fillStyle = ve ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const ce = String((N == null ? void 0 : N.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (N == null ? void 0 : N.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = ve ? Math.max(0.28, Number(ce.a ?? 1) * 0.88) : Math.max(0.12, Number(ce.a ?? 1));
    te.fillStyle = `rgba(${Math.round(Number(ce.r || 0) * 255)}, ${Math.round(Number(ce.g || 0) * 255)}, ${Math.round(Number(ce.b || 0) * 255)}, ${b})`;
  }
  function Q(te, N, ie) {
    const ue = Math.max(0.5, Math.min(ie, Number((N == null ? void 0 : N.radiusPx) || 0.5)));
    !Number.isFinite(N == null ? void 0 : N.x) || !Number.isFinite(N == null ? void 0 : N.y) || !Number.isFinite(ue) || (te.beginPath(), te.arc(Number(N.x || 0), Number(N.y || 0), ue, 0, Math.PI * 2), te.fill());
  }
  function K(te, N, ie, ue, be = {}) {
    if (!te || !Array.isArray(N) || !N.length) return;
    const ve = Math.max(ue.w, ue.h) * 0.25;
    te.save(), re(te, ie, be);
    const I = (ce) => Q(te, ce, ve);
    if (N.length === 1) {
      I(N[0]), te.restore();
      return;
    }
    for (let ce = 0; ce < N.length - 1; ce += 1) {
      const b = N[ce], y = N[ce + 1];
      if (!b || !y) continue;
      const F = Number(b.x || 0), v = Number(b.y || 0), z = Number(y.x || 0), x = Number(y.y || 0), L = Math.max(0.5, Math.min(ve, Number(b.radiusPx || 0.5))), S = Math.max(0.5, Math.min(ve, Number(y.radiusPx || 0.5)));
      if (!Number.isFinite(F) || !Number.isFinite(v) || !Number.isFinite(z) || !Number.isFinite(x) || !Number.isFinite(L) || !Number.isFinite(S)) continue;
      const M = z - F, E = x - v, q = Math.hypot(M, E);
      if (!Number.isFinite(q) || q < 1e-6) {
        I(b);
        continue;
      }
      if (q > Math.max(ue.w, ue.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(L, S)), ge = Math.max(0.35, Math.min(le * 0.4, 2.25)), Z = Math.max(1, Math.ceil(q / ge));
      for (let he = 0; he <= Z; he += 1) {
        const _e = he / Z;
        I({
          x: Gn(F, z, _e),
          y: Gn(v, x, _e),
          radiusPx: Gn(L, S, _e)
        });
      }
    }
    I(N[N.length - 1]), te.restore();
  }
  function T(te, N, ie, ue) {
    K(te, N, ie, ue, { preview: !1 });
  }
  function H(te, N, ie, ue, be) {
    var ce, b, y, F;
    if (!te || !Array.isArray(N) || N.length < 3) return;
    const ve = "u", I = "v";
    if (te.save(), String((ie == null ? void 0 : ie.layerKind) || "") === "mask")
      te.fillStyle = "rgba(255,255,255,1)";
    else if (String((ie == null ? void 0 : ie.toolKind) || "") === "eraser")
      te.globalCompositeOperation = "destination-out", te.fillStyle = "rgba(0,0,0,1)";
    else {
      const v = (ie == null ? void 0 : ie.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      te.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${Number(v.a ?? 1)})`;
    }
    te.beginPath(), te.moveTo(Number(((ce = N[0]) == null ? void 0 : ce[ve]) || 0) * ue.w, Number(((b = N[0]) == null ? void 0 : b[I]) || 0) * ue.h);
    for (let v = 1; v < N.length; v += 1)
      te.lineTo(Number(((y = N[v]) == null ? void 0 : y[ve]) || 0) * ue.w, Number(((F = N[v]) == null ? void 0 : F[I]) || 0) * ue.h);
    te.closePath(), te.fill(), te.restore();
  }
  function C(te) {
    const N = (te == null ? void 0 : te.geometry) || null;
    return N ? String(N.geometryKind || "") === "lasso_fill" ? Array.isArray(N.points) ? N.points : [] : Array.isArray(N.processedPoints) && N.processedPoints.length ? N.processedPoints : Array.isArray(N.rawPoints) && N.rawPoints.length ? N.rawPoints : Array.isArray(N.points) ? N.points : [] : [];
  }
  function $(te, N) {
    const ie = C(te);
    return !Array.isArray(ie) || !ie.length ? [] : ie.map((ue) => ({
      x: Number((ue == null ? void 0 : ue.u) || 0) * Number((N == null ? void 0 : N.w) || 1),
      y: Number((ue == null ? void 0 : ue.v) || 0) * Number((N == null ? void 0 : N.h) || 1),
      radiusPx: se(te, ue, Number((N == null ? void 0 : N.w) || 1), Number((N == null ? void 0 : N.h) || 1))
    }));
  }
  function R(te, N, ie = null) {
    var ce, b, y, F;
    if (!(te != null && te.ctx) || !N) return !1;
    const ue = ie || { w: Number(((ce = te.canvas) == null ? void 0 : ce.width) || 0), h: Number(((b = te.canvas) == null ? void 0 : b.height) || 0) }, be = String((N == null ? void 0 : N.toolKind) || "") === "eraser" ? {
      ...N,
      layerKind: "mask",
      toolKind: String(((y = N == null ? void 0 : N.geometry) == null ? void 0 : y.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : N;
    if (String(((F = N == null ? void 0 : N.geometry) == null ? void 0 : F.geometryKind) || "") === "lasso_fill")
      return H(te.ctx, C(be), be, ue), !0;
    const I = $(be, ue);
    return I.length ? (T(te.ctx, I, be, ue), !0) : !1;
  }
  function U(te, N, ie, ue = 8) {
    const be = new Uint8Array(N * ie), ve = [], I = new Int32Array(N * ie), ce = new Int32Array(N * ie);
    for (let b = 0; b < ie; b += 1)
      for (let y = 0; y < N; y += 1) {
        const F = b * N + y;
        if (be[F] || te[F] <= ue) continue;
        let v = 0, z = 0;
        I[z] = y, ce[z] = b, z += 1, be[F] = 1;
        const x = [];
        let L = y, S = b, M = y, E = b;
        for (; v < z; ) {
          const q = I[v], le = ce[v];
          v += 1, x.push({ x: q, y: le }), q < L && (L = q), le < S && (S = le), q > M && (M = q), le > E && (E = le);
          const ge = [
            [(q - 1 + N) % N, le],
            [(q + 1) % N, le],
            [q, le - 1],
            [q, le + 1]
          ];
          for (const [Z, he] of ge) {
            if (he < 0 || he >= ie) continue;
            const _e = he * N + Z;
            be[_e] || te[_e] <= ue || (be[_e] = 1, I[z] = Z, ce[z] = he, z += 1);
          }
        }
        ve.push({ pixels: x, minX: L, minY: S, maxX: M, maxY: E });
      }
    return ve;
  }
  function de(te, N) {
    const ie = [...new Set((Array.isArray(te == null ? void 0 : te.pixels) ? te.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, y) => b - y);
    if (!ie.length) return null;
    if (ie.length === 1)
      return { startX: ie[0], widthPx: 1 };
    let ue = -1, be = 0;
    for (let b = 0; b < ie.length; b += 1) {
      const y = ie[b], v = (b === ie.length - 1 ? ie[0] + N : ie[b + 1]) - y - 1;
      v > ue && (ue = v, be = b);
    }
    const ve = (ie[(be + 1) % ie.length] + N) % N;
    let I = 1 / 0, ce = -1 / 0;
    for (const b of ie) {
      const y = (b - ve + N) % N;
      I = Math.min(I, y), ce = Math.max(ce, y);
    }
    return {
      startX: ve,
      widthPx: Math.max(1, ce - I + 1)
    };
  }
  function Se(te, N, ie = {}) {
    var y;
    const ue = Number((te == null ? void 0 : te.width) || 0), be = Number((te == null ? void 0 : te.height) || 0), ve = (y = te == null ? void 0 : te.getContext) == null ? void 0 : y.call(te, "2d");
    if (!ve || ue < 1 || be < 1) return [];
    const I = ve.getImageData(0, 0, ue, be), ce = new Uint8Array(ue * be);
    for (let F = 0; F < ce.length; F += 1) ce[F] = I.data[F * 4 + 3];
    return U(ce, ue, be, 8).map((F, v) => {
      const z = de(F, ue);
      if (!z) return null;
      const x = Number(z.widthPx || 0), L = F.maxY - F.minY + 1, S = Number(z.startX || 0), M = nn({ label: "editor.lasso-fill" });
      M.width = x, M.height = L;
      const E = M.getContext("2d");
      if (!E) return null;
      const q = E.createImageData(x, L);
      return F.pixels.forEach(({ x: le, y: ge }) => {
        const Z = (ge * ue + le) * 4, he = (Number(le || 0) - S + ue) % ue, _e = ((ge - F.minY) * x + he) * 4;
        q.data[_e + 0] = I.data[Z + 0], q.data[_e + 1] = I.data[Z + 1], q.data[_e + 2] = I.data[Z + 2], q.data[_e + 3] = I.data[Z + 3];
      }), E.putImageData(q, 0, 0), {
        id: Bi("raster"),
        type: "raster_frozen",
        layerKind: N === "mask" ? "mask" : "paint",
        z_index: Number((ie == null ? void 0 : ie.z_index) || 0) + v * 1e-3,
        locked: (ie == null ? void 0 : ie.locked) === !0,
        bbox: {
          u0: 0,
          v0: F.minY / be,
          u1: x / ue,
          v1: (F.maxY + 1) / be
        },
        rasterDataUrl: M.toDataURL("image/png"),
        transform: {
          du: S / ue,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(te) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = te);
    },
    processFreehandPoints: u,
    createRasterSurface: k,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: _,
    refreshPaintEngineRevisionCache: O,
    markObjectVisualsDirty: Y,
    markPaintStrokeVisualsDirty: G,
    markPaintCompositeVisualsDirty: W,
    rebuildPaintEngineIfNeeded: ee,
    getDesiredPaintTargetDescriptor: pe,
    getActivePaintTargetDescriptor: D,
    rasterizeStrokeToSurface: R,
    createRasterFrozenObjectsFromCanvas: Se
  };
}
function FN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g;
  function k(ee, pe = null) {
    var D;
    if (ee && typeof ee == "object" && !Array.isArray(ee)) return ee;
    if (Array.isArray(ee) && ee.length > 0) {
      const se = ee[0];
      if (se && typeof se == "object" && !Array.isArray(se)) return se;
    }
    if (Array.isArray(pe) && pe.length > 0) {
      const se = (D = pe[0]) == null ? void 0 : D.parsed_state;
      if (se && typeof se == "object" && !Array.isArray(se))
        return {
          yaw_deg: Number(se.yaw_deg || 0),
          pitch_deg: Number(se.pitch_deg || 0),
          hFOV_deg: Number(se.hFOV_deg || 30),
          rot_deg: Number(se.roll_deg || 0)
        };
    }
    return null;
  }
  function m(ee, pe, D) {
    const se = Math.max(1, Number(pe || 1)), re = Math.max(1, Number(D || 1)), Q = Ee(Number(ee || 30), 0.1, 179) * br, K = 2 * Math.atan(Math.tan(Q * 0.5) * (re / se));
    return Ee(K * Ci, 0.1, 179);
  }
  function h(ee) {
    const pe = String(ee || "").trim();
    if (!pe) return null;
    try {
      const D = JSON.parse(pe);
      if (!D || typeof D != "object" || String(D.kind || "") !== "pano_sticker_state") return null;
      const se = D.version;
      let re = null;
      if (typeof se == "number" && Number.isInteger(se) ? re = se : typeof se == "string" && /^\d+$/.test(se) && (re = Number.parseInt(se, 10)), re !== 1) return null;
      const Q = D.pose;
      if (!Q || typeof Q != "object") return null;
      const K = Number(Q.yaw_deg), T = Number(Q.pitch_deg), H = Number(Q.roll_deg), C = Number(Q.hFOV_deg);
      if (![K, T, H, C].every((de) => Number.isFinite(de))) return null;
      let $ = ((K + 180) % 360 + 360) % 360 - 180;
      Object.is($, -0) && ($ = 0);
      const R = {
        yaw_deg: $,
        pitch_deg: Ee(T, -89.9, 89.9),
        roll_deg: H,
        hFOV_deg: Ee(C, 0.1, 179)
      }, U = Number(D.source_aspect);
      return Number.isFinite(U) && U > 0 && (R.source_aspect = U), R;
    } catch {
      return null;
    }
  }
  function _(ee) {
    const pe = Number(ee == null ? void 0 : ee.yaw_deg), D = Number(ee == null ? void 0 : ee.pitch_deg), se = Number((ee == null ? void 0 : ee.roll_deg) ?? (ee == null ? void 0 : ee.rot_deg)), re = Number(ee == null ? void 0 : ee.hFOV_deg), Q = Ei(ee);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ee(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(se) ? se : 0,
        hFOV_deg: Ee(Number.isFinite(re) ? re : 90, 0.1, 179)
      },
      source_aspect: Q
    };
  }
  function X(ee) {
    var T;
    if (!ee || typeof ee != "object") return _(null);
    const pe = Number(ee == null ? void 0 : ee.yaw_deg), D = Number(ee == null ? void 0 : ee.pitch_deg), se = Number((ee == null ? void 0 : ee.roll_deg) ?? (ee == null ? void 0 : ee.rot_deg)), re = Number(ee == null ? void 0 : ee.hFOV_deg), Q = Number(ee == null ? void 0 : ee.vFOV_deg);
    let K = 1;
    if (Number.isFinite(re) && Number.isFinite(Q)) {
      const H = Ee(re, 0.1, 179) * br, C = Ee(Q, 0.1, 179) * br, $ = Math.tan(C * 0.5);
      if (Math.abs($) > 1e-6) {
        const R = Math.tan(H * 0.5) / $;
        Number.isFinite(R) && R > 0 && (K = R);
      }
    }
    if (ee != null && ee.asset_id && ((T = o == null ? void 0 : o.assets) != null && T[ee.asset_id])) {
      const H = o.assets[ee.asset_id], C = Number((H == null ? void 0 : H.w) || 0), $ = Number((H == null ? void 0 : H.h) || 0);
      C > 0 && $ > 0 && (K = C / $);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ee(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(se) ? se : 0,
        hFOV_deg: Ee(Number.isFinite(re) ? re : 30, 0.1, 179)
      },
      source_aspect: K
    };
  }
  function j(ee) {
    return t.linkedValue(n, ee);
  }
  function J(ee, pe, D) {
    const se = ee && typeof ee == "object" ? {
      yaw_deg: Number(ee.yaw_deg || 0),
      pitch_deg: Number(ee.pitch_deg || 0),
      roll_deg: Number(ee.rot_deg ?? ee.roll_deg ?? 0),
      hFOV_deg: Number(ee.hFOV_deg || 30)
    } : h(pe);
    if (se) {
      const K = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || se.source_aspect || 1), T = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
      return {
        yaw_deg: Number(se.yaw_deg || 0),
        pitch_deg: Number(se.pitch_deg || 0),
        hFOV_deg: Number(se.hFOV_deg || 30),
        vFOV_deg: m(se.hFOV_deg, K, T),
        rot_deg: Number(se.roll_deg || 0)
      };
    }
    const re = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 1), Q = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, re, Q),
      rot_deg: 0
    };
  }
  function O() {
    const ee = Xt(n, "external-sticker") ? k(c("pano_sticker_input_pose"), null) : null;
    return sg(o, og(n, { pose: ee }));
  }
  function Y() {
    var T;
    const ee = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((H) => String((H == null ? void 0 : H.name) || "") === "sticker_image") : -1, pe = ee >= 0 ? ((T = n.getInputLink(ee)) == null ? void 0 : T.id) ?? null : null, D = l(() => {
      Qr(n, "image-loaded");
    }), se = k(c("pano_sticker_input_pose"), null), re = j("sticker_state"), Q = t.externalStateHash(n, re), K = pe == null ? null : J(se, re, D);
    return ig(o, {
      connected: pe != null,
      linkId: pe,
      stateHash: Q,
      pose: K,
      imageWidth: Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 0),
      imageHeight: Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 0)
    });
  }
  function G(ee = "sync") {
    if (s !== "stickers" || i) return;
    const pe = n.__panoSceneStateV2 ? O() : Y();
    if (pe.changed) {
      const D = o.stickers.find(d);
      o.stickers = pe.state.stickers, o.active = pe.state.active, D && r.selectedId === D.id && !o.stickers.some((se) => se.id === D.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), f();
    } else ee === "image-loaded" && g();
    u();
  }
  function W() {
    const ee = Array.isArray(o.stickers) ? o.stickers : [], pe = [];
    for (const D of ee)
      d(D) && (D.visible = !1, pe.push(D));
    return pe;
  }
  return {
    connect(ee) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = ee);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: _,
    buildCanonicalSelectedStickerState: X,
    reconcileExternalStickerFromInputs: G,
    collectExternalStickersForClearAll: W
  };
}
const TN = 250, DN = 600, LN = 180, RN = 2;
function VN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ho(e, t, r) {
  return e + (t - e) * r;
}
function $N(e, t, r = 1) {
  const n = Math.max(
    Math.abs(zu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / LN + i / RN);
  return Math.round(Ho(TN, DN, o));
}
function zN(e, t, r) {
  const n = VN(Ee(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ho(i, t.position[o], n)),
    yaw_deg: jt(e.yaw_deg + zu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ho(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ho(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ho(e.distance, t.distance, n)
  };
}
function jN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(zu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function HN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return jN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: $N(e, t, n), end: i };
}
function GN(e, t) {
  const r = Ee((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: zN(e.from, e.to, r), done: !1 };
}
function rl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function WN(e, t, r) {
  const n = rl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function KN(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    runtime: a,
    sceneV2: l,
    state: c,
    stateV2: d,
    studio: u,
    viewController: f
  } = e;
  let g, k, m, h, _, X, j, J, O, Y = null;
  function G(S, M = null) {
    const E = $();
    j(() => {
      i.viewTransition = HN(E, S, performance.now(), { scale: be(), end: M });
    }), !i.viewTransition && M && W(M), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, J(), _({ localOnly: !0, reason: dt.VIEW });
  }
  function W(S) {
    H(Kc({ ...T(), moved: S.moved }, S.mode, R())), a.backgroundDirty = !0;
  }
  function ee() {
    i.viewTransition && (i.viewTransition = null, J());
  }
  function pe(S, M) {
    G({ ...$(), yaw_deg: S, pitch_deg: M });
  }
  function D() {
    return !u || de() && !h();
  }
  function se() {
    return i.mode === "pano" && re();
  }
  function re() {
    return d && Xv({ sceneLinked: l && !!Ml(s).scene, files: X(), stickers: c.stickers });
  }
  function Q() {
    return i.spaceMode === "6dof" && se();
  }
  function K() {
    var S, M, E;
    return tw((E = (M = (S = t.ui) == null ? void 0 : S.settings) == null ? void 0 : M.getSettingValue) == null ? void 0 : E.call(M, kg));
  }
  function T() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function H(S) {
    i.spaceMode = S.mode, i.viewPosition = S.position, i.viewMoved = S.moved;
  }
  function C(S) {
    var E;
    const M = WN(i.spaceMode, i.viewTransition, S);
    if (M !== "keep") {
      if (M === "return") {
        G({ ...$(), position: R(), distance: ((E = ie()) == null ? void 0 : E.radius) || tr }, { mode: S, moved: !1 });
        return;
      }
      ee(), H(Kc({ ...T(), position: $().position }, S, R())), a.backgroundDirty = !0, J(), _({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function $() {
    var E;
    const S = i.viewMoved ? i.viewDistance : ((E = ie()) == null ? void 0 : E.radius) || tr, M = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: S };
    return Wv(i.spaceMode, M, R());
  }
  function R() {
    return de() ? N().position : [0, 0, 0];
  }
  function U() {
    return r && c.camera !== null;
  }
  function de() {
    return U() && c.camera.visible;
  }
  function Se() {
    return c.painting_visible !== !1;
  }
  function te(S) {
    return S.visible && po(S.clip, i.frame);
  }
  function N() {
    return vl(c.camera, i.frame);
  }
  function ie() {
    var M;
    const S = g();
    return ((M = S.space ?? S.content) == null ? void 0 : M.sphere) ?? null;
  }
  function ue(S) {
    i.viewPosition = S.position, i.viewYaw = S.yaw_deg, i.viewPitch = S.pitch_deg, i.viewDistance = S.distance, i.viewMoved = !0, a.backgroundDirty = !0, _({ localOnly: !0, reason: dt.VIEW });
  }
  function be() {
    var S;
    return ((S = ie()) == null ? void 0 : S.radius) || tr;
  }
  function ve() {
    var he;
    const S = g().space, M = k(), E = i.worldSelectedId || i.selectedId, q = M.stickers.findIndex((_e) => _e.id === E), le = q < 0 ? null : {
      sticker: M.stickers[q],
      value: _s(M, i.frame).stickers[q],
      plane: S.stickers.find((_e) => _e.id === E) ?? null,
      item: ((he = S.sticker) == null ? void 0 : he.id) === E && S.sticker.url ? { kind: S.sticker.kind, box: o.sceneBox(S.sticker.url) } : null
    }, ge = m() ? z() : eS(ie(), le);
    if (!ge) return;
    const Z = $();
    i.viewDistance = Z.distance, i.viewMoved = !0, G(qv(Z, ge, n.width, n.height));
  }
  function I(S) {
    return o.pickSurface(L(), S.x, S.y, n.width, n.height);
  }
  function ce(S, M) {
    var E;
    return Uc(S, M, i.viewMoved ? null : (E = ie()) == null ? void 0 : E.center, be());
  }
  function b() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function y(S, M) {
    const E = performance.now(), q = { x: S.x, y: S.y, time: E, key: o.contentRevision(), view: b() };
    if (!ym(Y, q)) {
      const ge = I(S);
      Y = { ...q, cost: performance.now() - E, hit: ge };
    }
    const le = $();
    ue(Sm(le, ce(le, Y.hit), M, be())), Y.view = b(), Y.wheelTime = E;
  }
  function F(S, M, E) {
    const q = $();
    i.interaction = S === "orbit" ? { kind: "space_orbit", last: M, pivot: ce(q, I(M)) } : { kind: "space_pan", last: M, depth: gm(q, be()) }, O(M), n.setPointerCapture(E);
  }
  function v(S) {
    return S * 0.2;
  }
  function z() {
    return { center: N().position, radius: v(be()) };
  }
  function x(S, M) {
    const { yaw_deg: E, pitch_deg: q } = Mm(S.position, M);
    return { ...S, yaw_deg: E, pitch_deg: q };
  }
  function L() {
    return sd($(), n.width, n.height, ie());
  }
  return {
    connect(S) {
      ({
        editorViewInput: g,
        editorViewSceneState: k,
        isCameraSelected: m,
        isErpCamera: h,
        requestDraw: _,
        sceneFiles: X,
        startAnimation: j,
        syncFloatingViewButtonState: J,
        updateCursor: O
      } = S);
    },
    transitionView: G,
    applyViewTransitionEnd: W,
    cancelViewTransition: ee,
    turnViewTo: pe,
    cameraPreviewShown: D,
    isSpaceView: se,
    hasSpaceContent: re,
    isFreeSpaceView: Q,
    viewControls: K,
    spaceModeState: T,
    applySpaceMode: H,
    setSpaceMode: C,
    spaceViewState: $,
    spaceOrigin: R,
    hasCamera: U,
    cameraShoots: de,
    paintingShown: Se,
    sceneStickerShown: te,
    cutoutCamera: N,
    contentSphere: ie,
    setSpaceView: ue,
    spaceScale: be,
    frameSpaceContent: ve,
    zoomSpaceAt: y,
    startSpaceDrag: F,
    currentSpaceCamera: L,
    cameraFrustumLength: v,
    cameraSphere: z,
    lookingAt: x
  };
}
function UN(e) {
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
  let u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve = { revision: -1, sceneState: null }, I = null;
  function ce() {
    return I || (I = F()), I;
  }
  function b() {
    I = null;
  }
  function y() {
    return ve.sceneState;
  }
  function F() {
    const _e = Y(), Ne = g(), fe = { ...a.assets };
    for (const Me of l ? [] : a.stickers) {
      const Ie = String((Me == null ? void 0 : Me.asset_id) || "");
      Ie && !fe[Ie] && i.has(Ie) && (fe[Ie] = { type: "comfy_image", filename: Ie });
    }
    const ye = l ? a.stickers.map((Me) => Q(Me) ? { ...Me, source: { kind: "file", filename: Se(Me) } } : Me) : a.stickers;
    ve.revision !== s.stateRevision && (ve = { revision: s.stateRevision, sceneState: jr({ ...a, stickers: ye, assets: fe, painting: null }) }), l && v(ve.sceneState);
    const ne = _s(ve.sceneState, r.frame), p = T ? J() : null, A = (Me) => {
      if (l && !Me.visible) return null;
      if (T && D(Me)) return p;
      const Ie = W(Me);
      return Ie ? { media: Ie, revision: G(Ie) } : null;
    }, w = ue(), P = [...w.sky, ...Om(ve.sceneState, r.frame, a.stickers, { media: A, paintLayers: Ne, evaluated: ne })], B = _e && (_e === d || _e === c) ? d.dataset.panoSrc : _e, me = pe(_e) ? { media: _e, revision: G(_e), coverage: f(), source: B } : null, V = ee(), oe = Kv($(), V, R());
    oe.mode !== r.spaceMode && h(), u(oe);
    const Ae = V ? z(ve.sceneState, ne, A, w) : null, ke = re() ? { ...Ae, ...x(Ae) } : null;
    return { background: me, layers: P, space: ke, content: Ae };
  }
  function v(_e) {
    const Ne = new Map(a.stickers.map((fe) => [fe.id, fe.clip]));
    _e.scene.clip = { ...a.scene.clip };
    for (const fe of _e.stickers) {
      const ye = Ne.get(fe.id);
      ye && (fe.clip = { ...ye });
    }
  }
  function z(_e, Ne, fe, ye) {
    const ne = H(), p = ad(ne, Ne.scene), A = p != null && p.url ? n.sceneBox(p.url) : null, w = A && pa(p.kind, A), P = de(), B = xm(P, _e, Ne), me = B != null && B.url ? n.sceneBox(B.url) : null, V = me ? [{ box: pa(B.kind, me), value: B.value }] : [], oe = Tm(_e, r.frame, a.stickers, { media: fe, evaluated: Ne });
    for (const { request: ke, value: Me } of ye.items) {
      const Ie = ke != null && ke.url ? n.sceneBox(ke.url) : null;
      Ie && V.push({ box: pa(ke.kind, Ie), value: Me });
    }
    const Ae = Xc(Zv(Ne, w, [...oe, ...ye.stickers], V));
    return {
      evaluated: Ne,
      sceneUrls: ne ? ne.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: km(P, _e),
      sticker: B,
      stickers: oe,
      upstreamStickers: ye.stickers,
      upstreamItems: ye.items,
      sphere: Ae
    };
  }
  function x(_e) {
    var fe;
    const Ne = ((fe = _e.sphere) == null ? void 0 : fe.radius) || tr;
    return {
      gizmo: S() ? q() : L(_e.evaluated),
      grid: r.showGrid && !r.fullscreen ? dS(Ne) : null,
      lines: m() ? E(Ne) : []
    };
  }
  function L(_e) {
    const Ne = C(), fe = _e.stickers.find((ye) => ye.id === (Ne == null ? void 0 : Ne.id));
    return !be(Ne) || !(fe != null && fe.active) ? null : { mode: r.gizmoMode, transform: Bc(fe) };
  }
  function S() {
    return m() && r.selectedId === td;
  }
  let M = { revision: -1, span: -1, segments: [] };
  function E(_e) {
    const Ne = N();
    (M.revision !== s.stateRevision || M.span !== Ne) && (M = { revision: s.stateRevision, span: Ne, segments: pS(hS(a, Ne)) });
    const { segments: fe } = M, ye = fe.length ? [{ segments: fe, color: HP }] : [];
    if (!se()) return ye;
    const ne = S() ? qg : jP;
    return [...ye, { segments: Pm(X(), k(_e)), color: ne }];
  }
  function q() {
    return !se() || !S() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Bc({ ...X(), scale: 1 }) };
  }
  function le() {
    const { background: _e, layers: Ne, space: fe } = ce(), ye = t.width, ne = t.height, p = j({ x: 0, y: 0, w: ye, h: ne });
    let A = !1;
    return !_e && !Ne.length && !fe ? (n.clear(460551), A = n.ready) : (n.clear(), A = !!n.render({
      rect: p,
      camera: fe ? sd(U(), ye, ne, fe.sphere) : _(),
      background: _e,
      layers: Ne,
      space: fe
    })), te(), (r.worldSelectedId || S() || K()) && ie(), A;
  }
  function ge(_e) {
    const { content: Ne } = ce();
    return !Ne || !_e.position ? Jo(_e) : _m(Jo(_e), _e.position, O(), Ne.sphere);
  }
  function Z(_e, Ne, fe, ye = null) {
    const { background: ne, layers: p, content: A } = ce();
    if (!ne && !p.length && !A) return null;
    const w = A && Ne.position ? A : null;
    return n.render({ rect: _e, camera: ge(Ne), background: ne, layers: p, space: w, owner: fe, clearColor: ye });
  }
  function he(_e) {
    return n.clear(460551), !!n.renderUnwrap({ rect: j(_e), ...ce() });
  }
  return {
    connect(_e) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: k,
        cameraShoots: m,
        cancelViewTransition: h,
        currentViewCamera: _,
        cutoutCamera: X,
        deviceRect: j,
        followPortSticker: J,
        frameViewDistance: O,
        getConnectedErpImage: Y,
        getMediaRevisionToken: G,
        getStickerImage: W,
        hasSpaceContent: ee,
        isDecodedImageReady: pe,
        isExternalSticker: D,
        isFreeSpaceView: se,
        isSpaceView: re,
        isUploadingSticker: Q,
        isWorldMenuShown: K,
        portVideo: T,
        sceneFiles: H,
        selectedWorldSticker: C,
        spaceModeState: $,
        spaceOrigin: R,
        spaceViewState: U,
        stickerFiles: de,
        stickerImageKey: Se,
        syncFloatingViewButtonState: te,
        timelineSpanFrames: N,
        updateSelectionMenu: ie,
        upstreamViewInput: ue,
        worldStickerEditable: be
      } = _e);
    },
    editorViewInput: ce,
    endEditorViewFrame: b,
    editorViewSceneState: y,
    isCameraSelected: S,
    renderEditorView: le,
    shotViewCamera: ge,
    drawEditorViewShot: Z,
    renderEditorViewUnwrap: he
  };
}
function BN(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [] };
  const g = /* @__PURE__ */ new Map(), k = () => u({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA });
  function m(Q) {
    if (!Q) return null;
    let K = g.get(Q);
    return K || (K = new Image(), K.onload = k, K.onerror = k, K.src = Q, g.set(Q, K)), K;
  }
  function h({ sceneState: Q, ui: K }) {
    return [
      ...Q.stickers.filter((T) => T.source.kind !== "port").map((T) => n(Ga(T.source))),
      i(Or(K, ao)[0] || null),
      ...Q.painting.raster_objects.map((T) => T.rasterDataUrl)
    ].filter(Boolean);
  }
  function _() {
    return a && (Ef(o, "scene") === e0 || !!X());
  }
  function X() {
    const Q = a && Xt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, K = Array.isArray(Q) ? Q : null;
    if (f.list !== K) {
      f.entries.forEach(se), f = { list: K, entries: K ? fN(K).map((H) => ({ layer: H })) : [] };
      const T = new Set(f.entries.flatMap((H) => h(H.layer)));
      for (const H of [...g.keys()]) T.has(H) || g.delete(H);
    }
    return K && f.entries;
  }
  function j() {
    if (!X()) return 0;
    const [Q] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(Q) > 0 ? Number(Q) : 0;
  }
  function J() {
    if (!a) return "";
    const Q = X();
    if (gN(Ef(o, "scene"), Q)) return "Run the workflow to show the upstream scene.";
    if (!Q) return "";
    const K = t.uiList(o, "pano_sticker_warnings");
    return String(K.find((T) => String(T).startsWith(mN)) ?? "");
  }
  function O(Q, K, T) {
    const { ui: H, sceneState: C } = Q.layer, $ = C.timeline.fps, R = Or(H, Yg)[0], U = Or(H, Bg).map(i).filter(Boolean), de = i(Or(H, Ug)[0] || null), Se = R && typeof R == "object" ? U.length ? { frames: U, meta: R } : de ? { src: de, meta: R } : null : null, te = m(i(Or(H, ao)[0] || null)), N = Se ? dd(K.clip, T, $, Se.meta) : null;
    let ie = te;
    if (Se != null && Se.frames)
      Q.frames || (Q.frames = pd({
        createImage: (ue, be) => {
          const ve = new Image();
          return ve.onload = be, ve.onerror = be, ve.src = ue, ve;
        },
        onLoad: k
      })), ie = Q.frames.picture(Se.frames, N, Se.meta, te);
    else if (Se != null && Se.src) {
      const ue = Y(Q);
      ue.follow({ src: Se.src, time: N, playing: d.advancing, fps: $ }), ie = ue.picture(Q.still, te);
    }
    return ie ? { media: ie, revision: c(ie), source: fd(Se, te) } : null;
  }
  function Y(Q) {
    if (Q.follower) return Q.follower;
    const K = Ss(document, "editor.upstream-port-video");
    K.playsInline = !0, K.preload = "auto";
    const T = nn({ label: "editor.upstream-port-still" });
    return T.__panoFrameIdx = 0, Q.video = K, Q.still = T, Q.follower = yd({
      video: K,
      onCapture: () => {
        var $;
        const H = Number(K.videoWidth || 0), C = Number(K.videoHeight || 0);
        H < 1 || C < 1 || (T.width = H, T.height = C, ($ = T.getContext("2d")) == null || $.drawImage(K, 0, 0), T.__panoFrameIdx += 1, k());
      },
      onChange: k
    }), Q.follower;
  }
  function G(Q, K, T) {
    if (K.source.kind === "port") return O(Q, K, T);
    const H = m(n(Ga(K.source)));
    return H ? { media: H, revision: c(H) } : null;
  }
  function W(Q) {
    var Se;
    const { sceneState: K } = Q.layer, { painting: T } = K, H = T.paint.strokes.length + T.mask.strokes.length;
    if (!K.painting_visible || !H && !T.raster_objects.length) return [];
    const C = l(), $ = `${C.width}x${C.height}`;
    Q.paintSize !== $ && (pe(Q), Q.paintSize = $, Q.paintEngine = H ? yl(C) : null, (Se = Q.paintEngine) == null || Se.rebuildCommitted({ painting: T }), Q.rasters = /* @__PURE__ */ new Map());
    const R = Q.paintEngine, U = (R == null ? void 0 : R.getMaskDisplayCanvas()) || null, de = [];
    for (const te of yN(K, R ? R.getAllGroupIds() : [], !!U)) {
      const N = te.kind === "group" ? R == null ? void 0 : R.getGroupDisplayCanvas(te.id) : te.kind === "mask" ? U : ee(Q, te.item, C);
      N && de.push({ id: `${te.kind}:${te.id}`, media: N, revision: $, opacity: 1, zIndex: te.zIndex });
    }
    return de;
  }
  function ee(Q, K, { width: T, height: H }) {
    if (Q.rasters.has(K.id)) return Q.rasters.get(K.id);
    const C = m(K.rasterDataUrl);
    if (!C.complete || !C.naturalWidth) return null;
    const $ = nn({ label: "editor.upstream-raster-erp", width: T, height: H }), R = $.getContext("2d");
    return R ? (Xg(R, C, K, T, H), Q.rasters.set(K.id, $), $) : null;
  }
  function pe(Q) {
    var K;
    (K = Q.rasters) == null || K.forEach((T) => is(T)), Q.rasters = null, Q.paintEngine = null, Q.paintSize = null;
  }
  function D() {
    const Q = X() ?? [], K = { sky: [], stickers: [], items: [] };
    return Q.forEach((T, H) => {
      const C = pN(r.frame, s.timeline.fps, T.layer.sceneState.timeline.fps), $ = bN(T.layer, H, C, {
        media: (R) => G(T, R, C),
        paintLayers: W(T),
        source: i
      });
      K.sky.push(...$.sky), K.stickers.push(...$.stickers), K.items.push(...$.items);
    }), K;
  }
  function se(Q) {
    var K;
    (K = Q.follower) == null || K.dispose(), Q.still && is(Q.still), pe(Q);
  }
  function re() {
    f.entries.forEach(se), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(Q) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = Q);
    },
    upstreamLinked: _,
    upstreamNotice: J,
    upstreamSpanFrames: j,
    upstreamViewInput: D,
    disposeUpstream: re
  };
}
const bu = "camera_preview";
function YN(e) {
  return e === bu ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function qN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function r0(e, t = !1) {
  const r = Ee(Ei(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function XN(e) {
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
  let d, u, f, g, k = null, m = !1, h = !1;
  function _() {
    m && (m = !1, o.releaseSplats(bu));
  }
  function X() {
    k = null, h = !1, _();
  }
  function j(ee) {
    if (!n || !ee) return !1;
    const pe = n.closest(".pano-camera-preview");
    if (!pe) return !1;
    const D = Math.round(Number(pe.clientWidth || n.clientWidth || 0)), se = Math.round(Number(pe.clientHeight || n.clientHeight || 0));
    return Math.abs(D - Number(ee.width || 0)) <= 1 && Math.abs(se - Number(ee.height || 0)) <= 1;
  }
  function J(ee, pe) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, X();
      return;
    }
    const D = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !D || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = D ? "Preview unavailable" : "Add Frame to preview", X();
      return;
    }
    const se = r0(D, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = se.width, c.cameraPreview.height = se.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, _();
      return;
    }
    const re = window.devicePixelRatio || 1, Q = Math.max(1, se.width * re), K = Math.max(1, se.height * re), T = Math.min(1, t.width / Q, t.height / K), H = { width: Math.max(1, Math.floor(Q * T)), height: Math.max(1, Math.floor(K * T)) }, C = !k || k.width !== H.width || k.height !== H.height || qN(pe);
    if (ee && C) {
      m = !0;
      const R = u({ x: 0, y: t.height - H.height, w: H.width, h: H.height }, D, bu);
      k = R ? H : null, R && W(R);
    }
    if (!k) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const $ = j(se);
    c.cameraPreview.ready = !0, c.cameraPreview.label = $ ? "" : "Loading preview", c.cameraPreview.settled = $ && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function O() {
    k = null, h = !1;
  }
  let Y = 0, G = !1;
  function W(ee) {
    const pe = ++Y;
    createImageBitmap(ee.canvas, ee.x, ee.y, ee.width, ee.height).then((D) => {
      var se;
      if (pe !== Y || !s.running) {
        D.close();
        return;
      }
      (se = r.getContext("bitmaprenderer")) == null || se.transferFromImageBitmap(D);
    }).catch((D) => {
      pe !== Y || !s.running || (h = !0, k = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !G && (G = !0, console.error("[PanoramaStickers] camera preview frame failed", D)));
    });
  }
  return {
    connect(ee) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = ee);
    },
    drawCutoutOutputPreview: J,
    forgetCameraPreviewFrame: O
  };
}
function JN(e) {
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
  let u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve, I, ce, b;
  function y(fe) {
    const ye = r.width, ne = r.height, p = W();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ye, ne), ie(), fe && (a.backgroundDirty = !ve(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let w = 0; w <= 16; w += 1) {
        const P = p.x + p.w * w / 16;
        n.beginPath(), n.moveTo(P, p.y), n.lineTo(P, p.y + p.h), n.stroke();
      }
      for (let w = 0; w <= 8; w += 1) {
        const P = p.y + p.h * w / 8;
        n.beginPath(), n.moveTo(p.x, P), n.lineTo(p.x + p.w, P), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const A = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, A), n.fillText("Front", p.x + p.w * 0.5, A), n.fillText("Right", p.x + p.w * 0.75, A), n.fillText("Back", p.x + 38, A), n.fillText("Back", p.x + p.w - 38, A);
    }
  }
  function F(fe, ye, ne = 1) {
    let p = !1;
    n.strokeStyle = ye, n.lineWidth = ne, n.beginPath();
    for (const A of fe) {
      const w = de(A);
      if (!w) {
        p = !1;
        continue;
      }
      p ? n.lineTo(w.x, w.y) : (n.moveTo(w.x, w.y), p = !0);
    }
    n.stroke();
  }
  function v(fe) {
    const ye = r.width, ne = r.height;
    if (n.clearRect(0, 0, ye, ne), ie(), fe && (a.backgroundDirty = !be()), i.showGrid && !i.fullscreen && m().space)
      z();
    else if (i.showGrid && !i.fullscreen) {
      for (let A = -180; A <= 180; A += 15) {
        const w = [];
        for (let P = -89; P <= 89; P += 4) w.push(Cn(A, P));
        F(w, "#3f3f46", A % 90 === 0 ? 1.3 : 1);
      }
      for (let A = -75; A <= 75; A += 15) {
        const w = [];
        for (let P = -180; P <= 180; P += 4) w.push(Cn(P, A));
        F(w, A === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", A === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Cn(-90, 0) },
        { name: "Front", dir: Cn(0, 0) },
        { name: "Right", dir: Cn(90, 0) },
        { name: "Back", dir: Cn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((A) => {
        const w = de(A.dir);
        w && n.fillText(A.name, w.x, w.y + 24);
      });
    }
  }
  function z() {
    const fe = sd(b(), r.width, r.height, f()), ye = us(fe, [0, 0, 0], r.width, r.height);
    ye && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ye.x, ye.y - 12));
  }
  function x(fe, ye) {
    const ne = U(fe), p = Cn(Number(ne.yaw_deg || 0), Number(ne.pitch_deg || 0)), A = i.mode === "unwrap" ? Se(p) : null, w = A ? A.x : null, P = i.mode === "pano" ? 28 : 20, B = [
      I(fe, 0, P, w),
      I(fe, 1, P, w),
      I(fe, 2, P, w),
      I(fe, 3, P, w)
    ];
    vd(n, B, { selected: ye });
  }
  function L(fe, ye = []) {
    if (!(!fe || !Array.isArray(ye) || ye.length < 4)) {
      fe.beginPath(), fe.moveTo(ye[0].x, ye[0].y);
      for (let ne = 1; ne < 4; ne += 1) fe.lineTo(ye[ne].x, ye[ne].y);
      fe.closePath();
    }
  }
  function S(fe, ye, ne) {
    const p = Array.isArray(fe == null ? void 0 : fe.corners) ? fe.corners : [];
    if (p.length < 4) return;
    const A = Ee(Number((fe == null ? void 0 : fe.visibilityAlpha) ?? 1), 0, 1);
    if (A <= 0.01) return;
    const w = n.globalAlpha;
    n.globalAlpha = w * A;
    const P = ne ? "rgba(255, 116, 116, 0.96)" : ye ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", B = ne ? "rgba(255, 89, 89, 0.08)" : ye ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", me = ye ? 3.2 : 2.6;
    L(n, p), n.fillStyle = B, n.fill(), n.strokeStyle = P, n.lineWidth = me, n.stroke(), n.save(), n.strokeStyle = P, n.lineWidth = ye ? 3.2 : 2.6, n.lineCap = "round";
    const V = Array.isArray(fe == null ? void 0 : fe.edgeMidpoints) && fe.edgeMidpoints.length >= 4 ? fe.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], oe = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ae = ye ? 12 : 9;
    V.forEach((ke) => {
      const Ie = V.find(($e) => ($e == null ? void 0 : $e.edge) === oe[ke == null ? void 0 : ke.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Re = Ie.x - ke.x, je = Ie.y - ke.y, We = Math.hypot(Re, je) || 1;
      n.beginPath(), n.moveTo(ke.x, ke.y), n.lineTo(ke.x + Re / We * Ae, ke.y + je / We * Ae), n.stroke();
    }), n.restore(), n.globalAlpha = w;
  }
  function M(fe, ye, ne, p) {
    const A = Ee(Number((ye == null ? void 0 : ye.visibilityAlpha) ?? 1), 0, 1);
    if (A <= 0.01) return;
    if (H(fe)) {
      S(ye, ne, p);
      return;
    }
    if (C(fe)) {
      const P = n.globalAlpha;
      n.globalAlpha = P * G(fe) * A, i.mode === "frame" ? (n.strokeStyle = ne ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = ne ? 2 : 1, L(n, ye.corners), n.stroke()) : x(fe, ne), n.globalAlpha = P;
      return;
    }
    const w = n.globalAlpha;
    n.globalAlpha = w * A, n.fillStyle = ne ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", L(n, ye.corners), n.fill(), n.strokeStyle = ne ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = ne ? 2.8 : 1.9, L(n, ye.corners), n.stroke(), n.globalAlpha = w;
  }
  function E(fe, ye, ne) {
    if (C(fe)) {
      wg(n, ye, { accent: ne });
      return;
    }
    const p = !(H(fe) && pe());
    n.fillStyle = ne, p && ye.corners.forEach((A) => {
      n.beginPath(), n.arc(A.x, A.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && H(fe) && (n.strokeStyle = ne, n.lineCap = "round", n.lineWidth = 4, ye.edgeMidpoints.forEach((A) => {
      var Ae, ke, Me, Ie;
      const w = (((Ae = A.b) == null ? void 0 : Ae.x) ?? A.x) - (((ke = A.a) == null ? void 0 : ke.x) ?? A.x), P = (((Me = A.b) == null ? void 0 : Me.y) ?? A.y) - (((Ie = A.a) == null ? void 0 : Ie.y) ?? A.y), B = Math.hypot(w, P) || 1, me = w / B, V = P / B, oe = 10;
      n.beginPath(), n.moveTo(A.x - me * oe, A.y - V * oe), n.lineTo(A.x + me * oe, A.y + V * oe), n.stroke();
    }), n.lineCap = "butt"), $(fe) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ye.rotateStemBase.x, ye.rotateStemBase.y), n.lineTo(ye.rotateHandle.x, ye.rotateHandle.y), n.stroke(), n.fillStyle = ne, n.beginPath(), n.arc(ye.rotateHandle.x, ye.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function q() {
    var w;
    const fe = i.mode === "frame" ? [] : Y(), ye = fe.length > 1, ne = l ? _() : J(), p = ne.map((P) => `${String((P == null ? void 0 : P.id) || "")}:${H(P) ? "frame" : Number((P == null ? void 0 : P.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== ne || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: ne,
      orderKey: p,
      sorted: [...ne]
    });
    const A = i._sortedItemsCache.sorted;
    for (const P of A) {
      const B = i.mode !== "frame" && !ye && Q(P);
      if (i.mode === "frame" && !B) continue;
      const me = C(P), V = H(P), oe = re(P);
      if (!me && !V || T(P) && !ce(P)) continue;
      const Ae = R(P);
      if (d !== "stickers" && !Ae.visible)
        continue;
      const ke = Ee(Number((Ae == null ? void 0 : Ae.visibilityAlpha) ?? 1), 0, 1);
      if (ke <= 0.01) continue;
      const Me = V && l && i.mode === "pano" ? Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, M(P, Ae, B, oe), B && Ae.visible) {
        const Ie = oe ? "#ff4d4f" : me && D(P) ? "#f59e0b" : "#0070f3", Re = n.globalAlpha;
        n.globalAlpha = Re * ke, E(P, Ae, Ie), n.globalAlpha = Re;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const P = i.cutoutPanoFrameVisual, B = Ee(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= B, S(P.geom, P.selected, P.locked), P.selected && E(
        P.item,
        P.geom,
        P.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ye) {
      const P = O(fe);
      if (P != null && P.visible) {
        const B = u(fe) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(P.corners[0].x, P.corners[0].y);
        for (let me = 1; me < P.corners.length; me += 1) n.lineTo(P.corners[me].x, P.corners[me].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = B, P.corners.forEach((me) => {
          n.beginPath(), n.arc(me.x, me.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      fe.forEach((P) => {
        if (!$(P) && !K(P)) return;
        const B = R(P);
        if (!(B != null && B.visible)) return;
        const me = re(P) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(B.corners[0].x, B.corners[0].y);
        for (let V = 1; V < B.corners.length; V += 1) n.lineTo(B.corners[V].x, B.corners[V].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = me, B.corners.forEach((V) => {
          n.beginPath(), n.arc(V.x, V.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((w = i.interaction) == null ? void 0 : w.kind) === "marquee_select") {
      const P = ue(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(P.x0, P.y0, P.x1 - P.x0, P.y1 - P.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function le(fe) {
    const ye = h(), ne = X(ye);
    if (!ye || !ne)
      return n.clearRect(0, 0, r.width, r.height), fe && o.clear(657930), !1;
    const p = { x: ne.x, y: ne.y, w: ne.w, h: ne.h }, { rect: A, shot: w } = Cm(ye, ne, { width: r.width, height: r.height }), P = ge(p);
    if (n.clearRect(0, 0, r.width, r.height), fe) {
      o.clear(657930);
      const B = g(A), me = !!k(B, w, void 0, 657930);
      me || o.clear(1118481, B), a.backgroundDirty = !me;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, P), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = qg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, P - 1)), n.stroke(), n.restore(), !0;
  }
  function ge(fe) {
    const ye = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ye, Number((fe == null ? void 0 : fe.w) || 0) * 0.5, Number((fe == null ? void 0 : fe.h) || 0) * 0.5);
  }
  function Z() {
    var me, V;
    if (((me = i.interaction) == null ? void 0 : me.kind) !== "paint_lasso_fill") return;
    const fe = i.interaction.stroke, ye = (V = fe == null ? void 0 : fe.geometry) == null ? void 0 : V.points;
    let ne;
    if (i.mode === "frame") {
      const oe = h(), Ae = j(oe);
      ne = te(ye, oe, Ae);
    } else
      ne = N(ye);
    if (!Array.isArray(ne) || ne.length < 3) return;
    const p = String((fe == null ? void 0 : fe.layerKind) || "") === "mask", A = (fe == null ? void 0 : fe.color) || { r: 1, g: 0.25, b: 0.25 }, w = Math.round(Number(A.r || 0) * 255), P = Math.round(Number(A.g || 0) * 255), B = Math.round(Number(A.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(ne[0].x || 0), Number(ne[0].y || 0));
    for (let oe = 1; oe < ne.length; oe++) n.lineTo(Number(ne[oe].x || 0), Number(ne[oe].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${w},${P},${B},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function he() {
    const fe = i.frameRollOverlayVisual, ye = Ee(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(fe != null && fe.shot) || ye <= 1e-4) return;
    const ne = j(fe.shot);
    if (!ne) return;
    const p = { x: ne.x + ne.w * 0.5, y: ne.y + ne.h * 0.5 }, A = Number(fe.shot.roll_deg ?? fe.shot.rot_deg ?? 0) * br, w = Math.hypot(ne.w, ne.h) * 0.55, P = Math.cos(A) * w, B = Math.sin(A) * w;
    n.save(), n.globalAlpha *= ye, n.beginPath(), n.rect(ne.x, ne.y, ne.w, ne.h), n.clip(), n.translate(p.x, p.y), n.rotate(A);
    const me = Math.max(12, Math.min(ne.w, ne.h) / 6);
    n.beginPath();
    for (let V = -w; V <= w; V += me)
      n.moveTo(V, -w), n.lineTo(V, w);
    for (let V = -w; V <= w; V += me)
      n.moveTo(-w, V), n.lineTo(w, V);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - P, p.y - B), n.lineTo(p.x + P, p.y + B), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function _e() {
    return !l || !h() || t && se() || c && !ee() ? 0 : KP;
  }
  function Ne() {
    const fe = Ee(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (fe <= 1e-4 || !l || i.mode !== "pano") return;
    const ye = h(), ne = ye ? R(ye) : null, p = Array.isArray(ne == null ? void 0 : ne.corners) && ne.corners.length >= 4 ? ne.corners.map((P) => ({ x: Number(P.x || 0), y: Number(P.y || 0) })) : null;
    ne != null && ne.visible && p && (i.cutoutPanoDimCorners = p), ye && (ne != null && ne.visible) && p && (i.cutoutPanoFrameVisual = {
      item: ye,
      geom: ne,
      selected: Q(ye),
      locked: re(ye)
    });
    const A = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, w = ne != null && ne.visible ? p : A ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${fe})`, n.beginPath(), n.rect(0, 0, r.width, r.height), w.length >= 4) {
      n.moveTo(w[0].x, w[0].y);
      for (let P = 1; P < 4; P += 1) n.lineTo(w[P].x, w[P].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(fe) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: k,
        editorViewInput: m,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: _,
        getFrameViewLayout: X,
        getFrameViewRect: j,
        getList: J,
        getMultiSelectionGeom: O,
        getSelectedItems: Y,
        getStickerDisplayAlpha: G,
        getUnwrapRect: W,
        isCameraSelected: ee,
        isErpCamera: pe,
        isExternalSticker: D,
        isFreeSpaceView: se,
        isItemLocked: re,
        isItemSelected: Q,
        isRasterObjectItem: K,
        isSceneSticker: T,
        isShotItem: H,
        isStickerItem: C,
        isStrokeGroupItem: $,
        objectGeom: R,
        poseOf: U,
        projectDir: de,
        projectDirUnwrap: Se,
        projectErpLassoPointsToFrameRect: te,
        projectLassoPointsToCurrentView: N,
        rebuildPaintEngineIfNeeded: ie,
        rectFromPoints: ue,
        renderEditorView: be,
        renderEditorViewUnwrap: ve,
        sampleStickerEdge: I,
        sceneStickerShown: ce,
        spaceViewState: b
      } = fe);
    },
    drawGridUnwrap: y,
    drawGridPano: v,
    drawObjects: q,
    drawFrameViewBackground: le,
    drawLassoOutlineOverlay: Z,
    drawFrameRollOverlay: he,
    getCutoutPanoDimTarget: _e,
    drawCutoutPanoPassepartout: Ne
  };
}
function ZN(e) {
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
    timeline: g,
    type: k,
    uiState: m,
    viewController: h
  } = e;
  let _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie = () => {
  };
  function ue(Z = /* @__PURE__ */ new Set()) {
    pe();
    const he = l.backgroundDirty;
    d && (C(), X(he, Z)), i.mode === "frame" ? (l.frameSafeRect = T(), O(he)) : i.mode === "unwrap" ? G(he) : Y(he), j(), ee(), U(), W(), J(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && te(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const _e = Q();
    m.stageStatus = _e.status, m.stageStatusDetail = _e.detail, m.stageNotice = N(), _e.status === Jn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", _e.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function be(Z = i.interaction) {
    if (k !== "stickers" || i.mode !== "pano") return !1;
    const he = String((Z == null ? void 0 : Z.kind) || "");
    return he === "move" || he === "scale" || he === "scale_x" || he === "scale_y" || he === "rotate" ? !0 : he === "move_multi" ? Array.isArray(Z == null ? void 0 : Z.stickerSnapshots) && Z.stickerSnapshots.length > 0 : !1;
  }
  function ve() {
    return !!i.interaction || !!g.drag;
  }
  function I() {
    l.nodePreviewPending = !1;
    const Z = Rn(s);
    Z.liveState = f, Z.liveStateVersion += 1, re();
  }
  function ce(Z = {}) {
    var A, w, P, B, me, V, oe, Ae;
    const he = Z.reason ?? dt.STATE, _e = !!Z.localOnly, Ne = Z.externalSync === !0, fe = String(Z.cause || ""), ye = String(((A = i.interaction) == null ? void 0 : A.kind) || "");
    (!_e || ye === "view" || ye === "pan_frame" || be() || !!i.viewTransition || fe === "mode" || fe === "frame_view" || fe === "cutout_frame") && (l.backgroundDirty = !0), _e && K() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!_e || fe === "selection" || fe === "mode" || fe === "cutout_frame") && (de(), Se()), ve() ? l.nodePreviewPending = !0 : I(), Ne && ((P = (w = St(s).dom) == null ? void 0 : w.requestDraw) == null || P.call(w), (B = s.setDirtyCanvas) == null || B.call(s, !0, !1)), Ne && !_e && ((V = (me = s.graph) == null ? void 0 : me.setDirtyCanvas) == null || V.call(me, !0, !0), (Ae = (oe = t == null ? void 0 : t.canvas) == null ? void 0 : oe.setDirty) == null || Ae.call(oe, !0, !0)), c.requestDraw(he);
  }
  function b() {
    const Z = n.getBoundingClientRect(), he = Math.max(2, Math.round(Z.width)), _e = Math.max(2, Math.round(Z.height)), Ne = window.devicePixelRatio || 1, fe = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== he || n.height !== _e) && (n.width = he, n.height = _e);
    const ye = mS(Z.width || he, Z.height || _e, Ne, window.innerWidth || Z.width, window.innerHeight || Z.height);
    return o.resize(ye.width, ye.height), [n.width, n.height, r.width, r.height].join("x") === fe ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && y(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function y(Z) {
    Z(), c.wake();
  }
  function F() {
    return !!i.viewTransition || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ve();
  }
  function v(Z = performance.now(), he = /* @__PURE__ */ new Set()) {
    var ne;
    l.nodePreviewPending && !ve() && I(), he.forEach((p) => l.reasons.add(p)), he.size && (l.dirty = !0), [...he].some((p) => p !== dt.OVERLAY) && (l.backgroundDirty = !0), $(), l.lastTickTs > 0 ? Math.max(1e-3, (Z - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Z;
    const _e = i.mode === "frame" && ((ne = i.interaction) == null ? void 0 : ne.kind) === "roll_frame" ? i.interaction : null;
    _e != null && _e.shot && (i.frameRollOverlayVisual = { shot: _e.shot });
    const Ne = _e ? 1 : 0;
    if (Math.abs(Ne - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Ne, i.frameRollOverlayStartTs = Z), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Ne) > 1e-6) {
      const p = Ee(
        (Z - Number(i.frameRollOverlayStartTs || Z)) / UP,
        0,
        1
      );
      i.frameRollOverlayAlpha = Gn(
        Number(i.frameRollOverlayFrom || 0),
        Ne,
        bc(p)
      ), p >= 1 && (i.frameRollOverlayAlpha = Ne, Ne === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const fe = se();
    if (Math.abs(fe - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = fe, i.cutoutPanoDimStartTs = Z), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - fe) > 1e-6) {
      const p = Ee(
        (Z - Number(i.cutoutPanoDimStartTs || Z)) / pp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Gn(
        Number(i.cutoutPanoDimFrom || 0),
        fe,
        bc(p)
      ), p >= 1 && (i.cutoutPanoDimAlpha = fe), p >= 1 && fe === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ye = d && D() ? 1 : 0;
    if (Math.abs(ye - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ye, i.cutoutPanoFrameStartTs = Z), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ye) > 1e-6) {
      const p = Ee(
        (Z - Number(i.cutoutPanoFrameStartTs || Z)) / pp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Gn(
        Number(i.cutoutPanoFrameFrom || 0),
        ye,
        bc(p)
      ), p >= 1 && (i.cutoutPanoFrameAlpha = ye, ye === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const p = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), A = Ee((Z - Number(i.outputPreviewAnimStartTs || 0)) / p, 0, 1), P = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? qP(A) : JP(A);
      i.outputPreviewAnim = Gn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, P), l.dirty = !0, A >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: p, done: A } = GN(i.viewTransition, Z);
      if (i.viewPosition = p.position, i.viewYaw = p.yaw_deg, i.viewPitch = p.pitch_deg, i.viewFov = p.hFOV_deg, i.viewDistance = p.distance, A) {
        const { end: w } = i.viewTransition;
        i.viewTransition = null, w && _(w), R();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(Z) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const p = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ue(p);
    }
  }
  function z(Z) {
    try {
      Z();
    } catch (he) {
      const _e = String((he == null ? void 0 : he.stack) || (he == null ? void 0 : he.message) || he || "unknown editor frame error");
      l.tickErrorSignature !== _e && (l.tickErrorSignature = _e, console.error("[PanoramaStickers] editor frame failed", he)), m.stageStatus = Wn, m.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(Z = performance.now(), he = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const _e = $b();
    z(() => v(Z, he)), zb(_e);
  }
  function L() {
    !l.running || !b() || z(() => {
      l.dirty = !1, ue(/* @__PURE__ */ new Set([dt.RESIZE]));
    });
  }
  const S = new ResizeObserver(L);
  let M = null;
  function E() {
    M == null || M.removeEventListener("change", q), M = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), M.addEventListener("change", q);
  }
  function q() {
    E(), L();
  }
  function le() {
    ie = Vb("editor", () => {
      var Z;
      return {
        type: k,
        readOnly: a,
        mode: i.mode,
        interaction: ((Z = i.interaction) == null ? void 0 : Z.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!H.playing
      };
    });
  }
  function ge() {
    ie(), l.running = !1, c.stop(), S.disconnect(), M.removeEventListener("change", q);
  }
  return {
    connect(Z) {
      ({
        applyViewTransitionEnd: _,
        drawCutoutOutputPreview: X,
        drawCutoutPanoPassepartout: j,
        drawFrameRollOverlay: J,
        drawFrameViewBackground: O,
        drawGridPano: Y,
        drawGridUnwrap: G,
        drawLassoOutlineOverlay: W,
        drawObjects: ee,
        endEditorViewFrame: pe,
        getActiveCutoutShot: D,
        getCutoutPanoDimTarget: se,
        getSharedLivePaintSurface: re,
        getStageImageStatus: Q,
        isPaintCompositeInteraction: K,
        measureFrameSafeRect: T,
        playback: H,
        rebuildPaintEngineIfNeeded: C,
        syncCutoutShot: $,
        syncFloatingViewButtonState: R,
        syncFrameRollKnob: U,
        syncLookAtFrameButtonState: de,
        syncViewToggleState: Se,
        updateSelectionMenu: te,
        upstreamNotice: N
      } = Z);
    },
    requestDraw: ce,
    syncCanvasSize: b,
    startAnimation: y,
    editorAnimating: F,
    tick: x,
    stageResizeObserver: S,
    watchPixelRatio: E,
    sampleEditorDiagnostics: le,
    stopRenderLoop: ge
  };
}
function Ki(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function QN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function e2({
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
  var j, J;
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
    historyEntries: Array.from({ length: 8 }, (O, Y) => ({ index: Y, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((j = t.find((O) => i(e.paintColor, O.color))) == null ? void 0 : j.id) || "", f = !u, g = o(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((J = e.customPaintColor) == null ? void 0 : J.a) ?? 1))) * 100), m = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[m] ?? 10, _ = l(), X = Array.from({ length: 8 }, (O, Y) => e.customPaintHistory[Y] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(g.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, g.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, g.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, g.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: X.map((O, Y) => ({
      index: Y,
      color: O ? { cssColor: n(O, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: _,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function t2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const n2 = {
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
function r2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = n2[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function wc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function i2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? ze.eye : ze.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function o2({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function s2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function a2(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const lo = "erp", l2 = ["1:1", "4:3", "3:2", "16:9"];
function i0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...l2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: lo, label: Number(r) === 180 ? "180°" : "360°", active: e === lo }] : []
  ];
}
function c2({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c
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
    rows: r2(s),
    notes: a,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function u2({
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
  iconSet: g,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: k = !1,
  coverage: m = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let h = [];
  if (r.length > 1)
    h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: g.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: g.send_back, disabled: !!a }
    ], d(t) || (h.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: g.duplicate }), h.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: g.replace_image })), d(t)) {
      const _ = f(), X = u(t);
      h.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: _ ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !_
      }), h.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: X ? "Show" : "Hide",
        tip: X ? "Show input image" : "Hide input image",
        icon: X ? g.eye : g.eye_dashed
      });
    }
    h.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? g.lock_open : g.lock_closed }), d(t) || h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a });
  } else
    h = [
      {
        key: "aspect",
        kind: "aspect",
        icon: g.aspect,
        open: !!c,
        choices: i0(l, { erp: k, coverage: m })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === lo }
    ], k ? h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : h.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    );
  return o0(i.corners, h);
}
const bp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function d2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? bp.filter((s) => s.cameraTip) : bp;
  return o0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ze.delete }] : []
  ]);
}
function f2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = d + 18, k = c - 18 - r;
  let m;
  return g <= f ? m = Math.max(g, 14) : k >= 14 ? m = Math.min(k, f) : m = Math.min(Math.max(g, 14), f), { left: u, top: m };
}
function o0(e, t) {
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
const s0 = "painting";
function p2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const h2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function m2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (m, h, _, X, j, J, { keyable: O = !0, hideable: Y = !0 } = {}) => {
    const G = (W) => (r == null ? void 0 : r.owner) === m && r.lane === W ? r.frames.map((ee) => ee + J) : [];
    return {
      id: m,
      label: _,
      icon: X,
      clip: j,
      selected: m === n,
      hideable: Y,
      visible: h.visible,
      keyable: O,
      open: O && o.has(m),
      keys: Q1(h).map((W) => ({ frame: W.frame + J, full: W.full })),
      selectedFrames: G(null),
      lanes: (O ? mo(h) : []).map((W) => ({
        key: `${m}:${W}`,
        lane: W,
        label: h2[W],
        frames: h[W].keyframes.map((ee) => ee.frame + J),
        selectedFrames: G(W)
      }))
    };
  }, f = e.stickers.filter((m) => m.placement === "sky").sort((m, h) => h.z_index - m.z_index), g = e.stickers.filter((m) => m.placement === "world"), k = ({ start: m, in: h, duration: _ }) => ({ clip: { start: m, end: _ === null ? null : m + _ }, offset: m - h });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!s,
    muted: !!(s != null && s.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: a,
    length: e.timeline.length,
    rows: [
      ...l ? [u("camera", e.camera, "Camera", ze.camera, null, 0, { hideable: c })] : [],
      ...[...f, ...g].map((m) => {
        const { clip: h, offset: _ } = k(m.clip);
        return u(m.id, m, Wc(m), ze.image, h, _);
      }),
      ...p2(e.painting) || !e.painting_visible ? [{
        id: s0,
        label: "Paint",
        icon: ze.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...d || ja(e.scene) ? [(() => {
        const { clip: m, offset: h } = k(e.scene.clip);
        return u("scene", e.scene, "Scene", ze.box, m, h, { keyable: !1 });
      })()] : []
    ]
  };
}
function g2(e, t, r, n) {
  const i = rv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
function y2(e) {
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
    state: g,
    studio: k,
    type: m,
    uiState: h
  } = e;
  let _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve, I, ce, b, y = 0;
  function F() {
    h.toolButtons.forEach((Z) => {
      const he = Z.attr === "data-tool-mode", _e = Z.attr === "data-paint-tool", Ne = Z.attr === "data-mask-tool";
      Z.active = he ? Z.value === r.primaryTool : _e ? Z.key === r.paintTool : Ne ? Z.key === r.maskTool : !1, Z.pressed = Z.active ? "true" : Z.pressed == null ? null : "false";
    });
  }
  function v() {
    if (k && Ki(h.toolButtons, "value", "add-camera", { disabled: re() }), m !== "cutout") return;
    const Z = j();
    Ki(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: Z ? "Look At Frame" : "Add Frame",
      tip: Z ? "Look at frame" : "Add frame",
      icon: Z ? ze.camera : ze.plus_circle
    });
  }
  function z() {
    const Z = i2({
      spaceView: de(),
      spaceMode: rl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, Z.space);
    for (const [he, _e] of Object.entries(Z.buttons)) Ki(h.floatingButtons, "action", he, _e);
  }
  function x() {
    var _e;
    const Z = o2({ hasShot: !!j(), erp: T(), hidden: re() && !X(), studio: k });
    r.mode === "frame" && Z.disabled && (k ? te(j()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((Ne) => {
      const fe = Ne.key === r.mode;
      Ne.pressed = fe ? "true" : "false", Ne.visible = !(Ne.key === "frame" && !f), Ne.key === "frame" ? Object.assign(Ne, Z) : Ne.disabled = !1;
    });
    const he = f && r.mode === "frame" ? j() : null;
    h.frameRail.visible = !!he, h.frameRail.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.visible = !!he && !c && he.locked !== !0, h.frameRollKnob.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.rollDeg = Number((he == null ? void 0 : he.roll_deg) ?? (he == null ? void 0 : he.rot_deg) ?? 0), h.frameRollKnob.displayValue = to(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((_e = r.interaction) == null ? void 0 : _e.kind) === "roll_frame", h.frameRollKnob.armed = !!he && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = he ? Fr(he) : "", h.frameRail.aspectChoices = i0(he ? String(Fr(he)) : null, { erp: k, coverage: g.coverage }), he || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!j(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && _(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), z(), $() ? ce(r.pointerPos) : ue(r.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var he;
    const Z = r.mode === "frame" ? j() : null;
    h.frameRollKnob.visible = !!Z && !c && Z.locked !== !0, h.frameRollKnob.rollDeg = Number((Z == null ? void 0 : Z.roll_deg) ?? (Z == null ? void 0 : Z.rot_deg) ?? 0), h.frameRollKnob.displayValue = to(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((he = r.interaction) == null ? void 0 : he.kind) === "roll_frame", h.frameRollKnob.armed = !!Z && r.altModifier === !0;
  }
  function S() {
    F();
    const Z = e2({
      editor: r,
      swatches: Al,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: fr,
      colorsApproximatelyEqual: nl,
      rgb01ToHsv: gu,
      hsv01ToRgb: mu,
      getBrushPresetIdForTool: J,
      isActiveLassoTool: K
    });
    if (Object.assign(h.paintDock, Z), I(), !Z.visible) {
      i && (i.hidden = !0);
      return;
    }
    y && (clearTimeout(y), y = 0), o && (!Z.colorEnabled && i && !i.hidden && (y = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, y = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", Z.pickerHueColor), i.style.setProperty("--picker-sat", Z.pickerSat), i.style.setProperty("--picker-val", Z.pickerVal), i.style.setProperty("--picker-hue", Z.pickerHue)), s && (s.style.left = Z.pickerSvLeft, s.style.top = Z.pickerSvTop), a && (a.style.left = Z.pickerHueLeft));
  }
  function M() {
    const Z = N(f && r.mode === "frame" ? j() : W());
    Z && (r.panelLastValues = {
      yaw_deg: Number(Z.yaw_deg || 0),
      pitch_deg: Number(Z.pitch_deg || 0),
      hFOV_deg: Number(Z.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(Z.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(Z.rot_deg || 0),
      roll_deg: Number(Z.roll_deg || 0),
      aspect_id: Fr(Z)
    }, E());
  }
  function E() {
    be(), ve(), le();
  }
  function q() {
    const Z = f && r.mode === "frame" ? j() : null;
    return [...ee(), ie(), Z].some((he) => R(he) ? ja(he) : U(he) && re() && ja(g.camera));
  }
  function le() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const Z = QN(g.ui_settings);
    if (l) {
      h.sidePanel = t2({
        coverage: g.coverage,
        uiSettings: Z,
        normalizeCoverageValue: On
      });
      return;
    }
    const he = W(), _e = f && r.mode === "frame" ? j() : null, Ne = _e || he, fe = _e ? [_e] : ee(), ye = _e ? "shot" : pe();
    if (fe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Ne && ye !== "stroke") {
      const ke = N(Ne);
      r.panelLastValues = {
        yaw_deg: Number(ke.yaw_deg || 0),
        pitch_deg: Number(ke.pitch_deg || 0),
        hFOV_deg: Number(ke.hFOV_deg || (ye === "image" ? 30 : 90)),
        vFOV_deg: Number(ke.vFOV_deg || (ye === "image" ? 30 : 60)),
        rot_deg: Number(ke.rot_deg || 0),
        roll_deg: Number(ke.roll_deg || 0),
        aspect_id: Fr(ke)
      }, R(Ne) && (r.panelLastValues.opacity = Ai(Ne, r.frame).opacity * 100);
    }
    const ne = r.panelLastValues || (m === "stickers" || ye === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = ye === "stroke" ? null : Ne, A = ie(), w = t && (ye === "shot" || ye === "frame") && Q(), P = A ? Ov(A, r.frame) : w ? { ...p, ...Cv(g.camera, r.frame), vFOV_deg: p.vFOV_deg } : R(p) ? r.panelLastValues : p || ne, B = A ? b(A) : !!p && !C(p);
    r.panelWasEnabled = B, v();
    let me = null;
    if (_e) {
      const ke = se({ item: _e, kind: "shot", label: "Frame" });
      me = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ke.label,
        currentIcon: ke.icon || null,
        items: [{
          id: String(_e.id || ""),
          label: ke.label,
          icon: ke.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const ke = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Re = j();
        Re && ke.push({ id: Re.id, label: "Camera", icon: D("frame"), item: Re, kind: "frame" }), G().forEach((je, We) => {
          var Fe, Pe;
          if (!je || R(je) && !je.visible) return;
          const $e = u ? Wc(je) : H(je) ? String(je.id || Cd) : String(((Pe = (Fe = g.assets) == null ? void 0 : Fe[je.asset_id]) == null ? void 0 : Pe.name) || je.asset_id || je.id), He = `${We + 1}. ${$e}${H(je) && Se(je) ? " (hidden)" : ""}`, ae = se({ item: je, label: He, kind: "image" });
          ke.push({ id: je.id, label: ae.label, icon: ae.icon, item: je, kind: "image" });
        });
      } else
        O().forEach((Re) => {
          if (!(Re != null && Re.item)) return;
          const je = se(Re);
          ke.push({ id: Re.item.id, label: je.label, icon: je.icon, item: Re.item, kind: Re.kind });
        });
      const Me = (p == null ? void 0 : p.id) || "", Ie = A ? { label: Wc(A), icon: ze.globe } : ke.find((Re) => Re.id === Me) || ke[0];
      me = {
        label: "Selection",
        open: !1,
        disabled: ke.length <= 1,
        currentLabel: Ie.label,
        currentIcon: Ie.icon || null,
        items: ke.map((Re) => ({
          id: Re.id,
          label: Re.label,
          icon: Re.icon || null,
          active: Re.id === Me
        }))
      };
    }
    const V = [], oe = (ke, Me, Ie, Re, je) => {
      const We = Ee(Number(P[ke] || 0), Ie, Re);
      V.push({
        key: ke,
        label: Me,
        min: Ie,
        max: Re,
        step: je,
        value: We,
        displayValue: to(We),
        fillPct: Ee((We - Ie) / Math.max(1e-6, Re - Ie) * 100, 0, 100),
        enabled: B && !c
      });
    }, Ae = [];
    if (A) {
      for (const [ke, Me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ie = wc(P[ke]);
        oe(ke, Me, -Ie, Ie, 0.01);
      }
      oe("yaw_deg", "Yaw", -180, 180, 0.1), oe("pitch_deg", "Pitch", -90, 90, 0.1), oe("roll_deg", "Roll", -180, 180, 0.1), oe("scale", "Scale", Kg, wc(P.scale), 0.01), oe("opacity", "Opacity", 0, 100, 1);
    } else if (fe.length > 1)
      Ae.push(`Selected objects: ${fe.length}`), Ae.push("Multi-selection supports z-order and delete.");
    else {
      const ke = ye === "shot" || ye === "frame";
      if (w)
        for (const [Me, Ie] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Re = wc(P[Me]);
          oe(Me, Ie, -Re, Re, 0.01);
        }
      oe("yaw_deg", "Yaw", -180, 180, 0.1), oe("pitch_deg", "Pitch", -90, 90, 0.1), oe(ye === "image" || m === "stickers" && !ke ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), oe("hFOV_deg", "H FOV", 1, 179, 0.1), oe("vFOV_deg", "V FOV", 1, 179, 0.1), ke && V.forEach((Me) => {
        Me.enabled = Me.enabled && s2(Me.key, { erp: T() });
      }), R(p) && !ke && V.forEach((Me) => {
        Me.enabled = Me.enabled && a2(Me.key, { port: H(p) });
      }), u && !ke && oe("opacity", "Opacity", 0, 100, 1);
    }
    h.sidePanel = c2({
      coverage: g.coverage,
      readOnly: c,
      selectionPicker: me,
      enabled: B,
      selectedKind: A ? "world" : ye,
      selectedItems: fe,
      params: V,
      notes: Ae,
      uiSettings: Z,
      normalizeCoverageValue: On
    });
  }
  function ge() {
    const { canUndo: Z, canRedo: he } = Y();
    Ki(h.toolButtons, "value", "undo", { disabled: !Z }), Ki(h.toolButtons, "value", "redo", { disabled: !he });
  }
  return {
    connect(Z) {
      ({
        cameraPreviewShown: _,
        cameraShoots: X,
        getActiveCutoutShot: j,
        getBrushPresetIdForTool: J,
        getCutoutInspectorItems: O,
        getHistoryCapabilities: Y,
        getList: G,
        getSelected: W,
        getSelectedItems: ee,
        getSelectedKind: pe,
        getSelectionItemIcon: D,
        getSelectionItemLabelData: se,
        hasCamera: re,
        hasSpaceContent: Q,
        isActiveLassoTool: K,
        isErpCamera: T,
        isExternalSticker: H,
        isItemLocked: C,
        isPaintCursorEnabled: $,
        isSceneSticker: R,
        isShotItem: U,
        isSpaceView: de,
        isStickerHidden: Se,
        leaveFrameView: te,
        poseOf: N,
        selectedWorldSticker: ie,
        setCanvasCursor: ue,
        syncCutoutShot: be,
        syncTimeline: ve,
        syncVideoTransportVisibility: I,
        updateCursor: ce,
        worldStickerEditable: b
      } = Z);
    },
    syncLookAtFrameButtonState: v,
    syncFloatingViewButtonState: z,
    syncViewToggleState: x,
    syncFrameRollKnob: L,
    syncPaintUi: S,
    syncSidePanelControls: M,
    updateSidePanel: E,
    inspectorTimed: q,
    syncSidePanelModel: le,
    syncUndoRedoButtons: ge
  };
}
function b2(e) {
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
  let g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q;
  function K() {
    if (!s || n) return;
    const y = H(), F = l.selection, v = F && C(F.owner);
    if (F) {
      const z = v ? $(F) : [];
      F.frames = F.frames.filter((x) => z.some((L) => v[L].keyframes.some((S) => S.frame === x))), F.frames.length || (l.selection = null);
    }
    d.timeline = m2(o, {
      span: y,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? T(),
      openRows: l.openRows,
      audio: te() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || $m(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: m(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Ml(r).scene && !re()
    }), d.easing = l.selection ? g2(v, $(l.selection), l.selection.frames, R(l.selection.owner)) : null;
  }
  function T() {
    return im(o, { camera: a });
  }
  function H(y = null) {
    const F = o.timeline.fps, v = o.stickers.find(_), z = v ? k() : null, x = Math.max(
      d.videoTransport.ready && !se() ? Math.round(Number(d.videoTransport.duration || 0) * F) : 0,
      z ? Jm(v.clip, F, z.meta) : 0,
      Q()
    );
    return om(o, { minimum: Math.round(F * 5), frames: x, openClip: y, camera: a });
  }
  function C(y) {
    return y === "camera" ? m() ? o.camera : null : y === "scene" ? i ? o.scene : null : o.stickers.find((F) => F.id === y) || null;
  }
  function $(y) {
    return y.lane ? [y.lane] : mo(C(y.owner));
  }
  function R(y) {
    if (y === "camera") return 0;
    const { clip: F } = C(y);
    return F.start - F.in;
  }
  function U(y) {
    return `${po(y, t.frame)}:${y.start - y.in}`;
  }
  function de(y) {
    const F = C(y);
    return !!F && F.locked !== !0;
  }
  function Se(y) {
    const F = Math.max(0, Math.round(y));
    if (F === t.frame) return;
    W(), t.frame = F, c.frame.value = F, W();
    const v = [t.selectedId, t.worldSelectedId];
    Y(), X(), v[0] !== t.selectedId || v[1] !== t.worldSelectedId ? D() : h() && ee(), pe(), G({ reason: dt.PLAYHEAD });
  }
  function te() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function N(y) {
    O(), j.seek(y);
  }
  function ie() {
    s && j.stop();
  }
  function ue() {
    O(), j.toggle();
  }
  function be() {
    W(), X(), D(), pe(), G();
  }
  function ve() {
    J(), g(), be();
  }
  function I() {
    const { selection: y } = l;
    de(y.owner) && (ie(), tv(C(y.owner), $(y), y.frames, t.frame - R(y.owner)), l.selection = null, ve());
  }
  function ce(y) {
    const F = ho(y);
    if (F === null || F === o.timeline.fps) return;
    ie();
    const v = Math.round(t.frame * F / o.timeline.fps);
    xv(o, F), l.selection = null, j.seek(v), ve();
  }
  function b() {
    const y = f(r);
    y !== null && y !== o.timeline.fps && ce(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: k,
        hasCamera: m,
        inspectorTimed: h,
        isExternalSticker: _,
        markObjectVisualsDirty: X,
        playback: j,
        pushHistory: J,
        refreshModalVideoSource: O,
        releaseHiddenSelection: Y,
        requestDraw: G,
        syncCutoutShot: W,
        syncSidePanelModel: ee,
        updateSelectionMenu: pe,
        updateSidePanel: D,
        upstreamBackground: se,
        upstreamLinked: re,
        upstreamSpanFrames: Q
      } = y);
    },
    syncTimeline: K,
    timelineTimed: T,
    timelineSpanFrames: H,
    timelineOwner: C,
    selectedLanes: $,
    timelineOffset: R,
    clipView: U,
    timelineEditable: de,
    setTimelineFrame: Se,
    jumpTimelineTo: N,
    stopTimelinePlayback: ie,
    togglePlayback: ue,
    refreshTimelineEdit: be,
    commitTimelineEdit: ve,
    deleteSelectedKeyframes: I,
    changeTimelineFps: ce,
    applyVideoTimelineFps: b
  };
}
function v2(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C;
  function $(R) {
    if (!(n || !o)) {
      if (R.type === "seek") {
        if (R.phase === "move") {
          s.scrubFrame = R.frame, t.request("seek");
          return;
        }
        t.cancel(), R.phase === "start" && h(), m.seek(R.frame);
        return;
      }
      if (R.type === "play") {
        K();
        return;
      }
      if (R.type === "mute") {
        T(), ee();
        return;
      }
      if (R.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? Q()), s.selection = null, ee();
        return;
      }
      if (R.type === "toggle-row") {
        s.openRows.has(R.id) ? s.openRows.delete(R.id) : s.openRows.add(R.id), ee();
        return;
      }
      if (R.type === "toggle-visible") {
        if (R.id === s0) i.painting_visible = !i.painting_visible;
        else {
          const U = se(R.id);
          if (!U) return;
          U.visible = !U.visible;
        }
        X(), u();
        return;
      }
      if (R.type === "select-row") {
        const U = i.stickers.find((de) => de.id === R.id);
        if (U && !U.visible || R.id === "camera" && !l()) return;
        U && !po(U.clip, r.frame) && k(U.clip.start), (U == null ? void 0 : U.placement) === "world" ? J(U.id) : R.id === "camera" ? Y(f()) : Y(g().find((de) => de.id === R.id) || null), W(), s.selection = null, C(), H(), j();
        return;
      }
      if (R.type === "select-keys") {
        const U = D(R.owner), de = R.frames.map((N) => N - U), Se = s.selection, te = (Se == null ? void 0 : Se.owner) === R.owner && Se.lane === R.lane;
        if (R.additive && te) {
          const N = new Set(Se.frames);
          for (const ie of de)
            N.has(ie) ? N.delete(ie) : N.add(ie);
          Se.frames = [...N].sort((ie, ue) => ie - ue);
        } else
          s.selection = de.length ? { owner: R.owner, lane: R.lane, frames: de } : null;
        ee();
        return;
      }
      if (R.type === "move-keys") {
        const U = s.selection;
        if (!U || !pe(U.owner)) return;
        const de = se(U.owner), Se = O(U);
        if (R.phase === "start") {
          G(), s.drag = { keyframes: Se.map((ie) => structuredClone(de[ie].keyframes)), frames: U.frames };
          return;
        }
        const { drag: te } = s;
        if (!(te != null && te.keyframes)) return;
        Se.forEach((ie, ue) => {
          de[ie].keyframes = structuredClone(te.keyframes[ue]);
        });
        const N = nv(de, Se, te.frames, R.delta, -D(U.owner));
        if (U.frames = te.frames.map((ie) => ie + N), R.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, N ? u() : _();
        return;
      }
      if (R.type === "clip") {
        const U = R.id === "scene" ? se("scene") : i.stickers.find((N) => N.id === R.id);
        if (!U || U.locked) return;
        if (R.phase === "start") {
          G(), s.drag = { clip: { ...U.clip }, span: re(U.clip) };
          return;
        }
        const { drag: de } = s;
        if (!(de != null && de.clip)) return;
        const Se = de.clip, te = d(U.clip);
        if (U.clip = { ...Se }, R.delta && R.mode === "move" ? ov(U.clip, R.delta) : R.delta && R.mode === "start" ? sv(U.clip, Se.start + R.delta) : R.delta && av(U.clip, (Se.duration === null ? de.span : Se.start + Se.duration) + R.delta, de.span), R.phase !== "end") {
          t.request("timeline"), d(U.clip) !== te && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, X(), JSON.stringify(U.clip) !== JSON.stringify(Se) ? u() : _();
        return;
      }
      if (R.type === "key-row") {
        if (R.owner === "scene" || !pe(R.owner)) return;
        G(), Z1(se(R.owner), r.frame - D(R.owner)), u();
        return;
      }
      if (R.type === "fps") {
        const U = uv(R.fps);
        if (U === null || U === i.timeline.fps || a.timeline.fpsLocked) {
          ee();
          return;
        }
        c(U);
        return;
      }
      if (R.type === "length") {
        const U = dv(R.length);
        if (U === void 0 || U === i.timeline.length) {
          ee();
          return;
        }
        G(), i.timeline.length = U, u();
        return;
      }
      if (R.type === "easing") {
        const U = s.selection;
        if (!U || !pe(U.owner)) return;
        G(), iv(se(U.owner), O(U), U.frames, R.easing), R.commit ? u() : _();
      }
    }
  }
  return {
    connect(R) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: g,
        jumpTimelineTo: k,
        playback: m,
        refreshModalVideoSource: h,
        refreshTimelineEdit: _,
        releaseHiddenSelection: X,
        requestDraw: j,
        selectWorldSticker: J,
        selectedLanes: O,
        setSelectedItem: Y,
        stopTimelinePlayback: G,
        syncFloatingViewButtonState: W,
        syncTimeline: ee,
        timelineEditable: pe,
        timelineOffset: D,
        timelineOwner: se,
        timelineSpanFrames: re,
        timelineTimed: Q,
        togglePlayback: K,
        toggleVideoMuted: T,
        updateSelectionMenu: H,
        updateSidePanel: C
      } = R);
    },
    onTimelineAction: $
  };
}
function S2(e) {
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
  let d, u, f, g;
  function k() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = On(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var O;
    if (a) return;
    f(), l.coverage = On(l.coverage), pm(o, l.active);
    const J = hm(o, l);
    c && !mm(o, J, String(c.value ?? ""), { rebased: n }) && (c.value = J, (O = c.callback) == null || O.call(c, J));
  }
  function h() {
    l.ui_settings = lN(l.ui_settings), a || m();
  }
  function _() {
    var J;
    a || (m(), (J = o.setDirtyCanvas) == null || J.call(o, !0, !0));
  }
  function X() {
    a || d() && g().catch((J) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", J);
    });
  }
  function j(J = {}) {
    var G, W, ee, pe, D, se, re, Q, K, T, H;
    const O = J.syncPreview !== !1, Y = J.syncGraph !== !1;
    O && ((ee = (W = (G = qm(o)) == null ? void 0 : G.runtime) == null ? void 0 : W.requestDraw) == null || ee.call(W), (se = (D = (pe = Ym(o)) == null ? void 0 : pe.dom) == null ? void 0 : D.requestDraw) == null || se.call(D), (re = o.setDirtyCanvas) == null || re.call(o, !0, !1)), Y && ((K = (Q = o.graph) == null ? void 0 : Q.setDirtyCanvas) == null || K.call(Q, !0, !0), (H = (T = t == null ? void 0 : t.canvas) == null ? void 0 : T.setDirty) == null || H.call(T, !0, !0));
  }
  return {
    connect(J) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = J);
    },
    apply: k,
    commitState: m,
    persistUiSettings: h,
    commitAndRefreshNode: _,
    triggerBackgroundPersistenceOnClose: X,
    syncCoverageChangeToNodePreviews: j
  };
}
function _2(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie;
  function ue(F, v, z = "Clear") {
    return new Promise((x) => {
      a.confirmDialog = {
        visible: !0,
        title: String(F || ""),
        text: String(v || ""),
        confirmLabel: String(z || "Confirm"),
        resolve: x
      };
    });
  }
  async function be() {
    var z, x;
    if (r || !await ue(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = fo(null), K();
    const v = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((L) => L.placement === "world" || v.includes(L)) : v, n || (i.assets = {}), t.selectedId = ((z = v[0]) == null ? void 0 : z.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((x = v[0]) == null ? void 0 : x.id) || null, H();
    else {
      const L = vv(i.shots, i.active.selected_shot_id);
      i.stickers = v, i.assets = {}, i.shots = L.shots, t.selectedId = L.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = L.selectedShotId, !L.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, H();
    }
    C(), u(), N(), te(), $();
  }
  async function ve(F) {
    var S, M, E, q;
    if (r) return;
    const v = F === "mask" ? "mask" : "paint", z = v === "mask" ? "Mask" : "Paint", x = _(v);
    if (!(!x.length && !(((S = t.interaction) == null ? void 0 : S.kind) === "draw" && ((M = t.interaction) == null ? void 0 : M.layerKind) === v) || !await ue(
      `Clear ${z}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${z}`
    ))) {
      if (((E = t.interaction) == null ? void 0 : E.kind) === "draw" && ((q = t.interaction) == null ? void 0 : q.layerKind) === v) {
        const le = g(t.interaction);
        le && t.paintEngine.cancelActiveStroke(le), t.interaction = null;
      }
      x.length = 0, i.painting.raster_objects = X().filter((le) => String((le == null ? void 0 : le.layerKind) || "paint") !== v), v === "paint" && (h().length = 0), K(), C(), u(), N(), te(), Se(), $();
    }
  }
  function I() {
    if (r) return;
    const F = j();
    if (!F || !pe(F) || O(F) || n && se(F)) return;
    let v;
    n ? v = Rv(F, bi("st"), m()) : (v = JSON.parse(JSON.stringify(F)), v.id = bi("st"), v.yaw_deg = jt((v.yaw_deg || 0) + 8), v.z_index = m()), i.stickers.push(v), i.active.selected_sticker_id = v.id, t.selectedId = v.id, t.selectedIds = [v.id], re(), C(), u(), te(), N(), $();
  }
  function ce() {
    const F = R();
    return F ? (ie(F) && (U(), Dv(i, F.id), c(), re(), C(), u(), N(), te(), de(), $()), !0) : !1;
  }
  function b() {
    var z, x, L, S, M;
    if (r) return;
    const F = J(), v = j();
    if (!(!v && F.length === 0) && !F.some((E) => Y(E))) {
      if (U(), F.length > 1) {
        const E = new Set(F.filter((ge) => D(ge)).map((ge) => String(ge.actionGroupId || ge.id || ""))), q = new Set(F.filter((ge) => G(ge)).map((ge) => T(ge.rasterObjectId || ge.id || ""))), le = new Set(F.filter(pe).map((ge) => String(ge.id || "")));
        E.size > 0 && (i.painting.paint.strokes = (Array.isArray((x = (z = i.painting) == null ? void 0 : z.paint) == null ? void 0 : x.strokes) ? i.painting.paint.strokes : []).filter((ge) => !E.has(String((ge == null ? void 0 : ge.actionGroupId) || ""))), i.painting.groups = h().filter((ge) => !E.has(String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || ""))), K()), q.size > 0 && (i.painting.raster_objects = X().filter((ge) => !q.has(String((ge == null ? void 0 : ge.id) || ""))), Q()), le.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((ge) => le.has(String((ge == null ? void 0 : ge.id) || "")) ? O(ge) ? (ee(ge) || (ge.visible = !1), !0) : !1 : !0), H(), re()), t.selectedId = null, t.selectedIds = [], C(), u(), N(), te(), $();
        return;
      }
      if (D(v)) {
        const E = String(v.actionGroupId || v.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((S = (L = i.painting) == null ? void 0 : L.paint) == null ? void 0 : S.strokes) ? i.painting.paint.strokes : []).filter((q) => String((q == null ? void 0 : q.actionGroupId) || "").trim() !== E), i.painting.groups = h().filter((q) => String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim() !== E), K(), t.selectedId = null, t.selectedIds = [], C(), u(), N(), te(), $();
        return;
      }
      if (G(v)) {
        const E = T(v.rasterObjectId || v.id || "");
        i.painting.raster_objects = X().filter((q) => String((q == null ? void 0 : q.id) || "").trim() !== E), Q(), t.selectedId = null, t.selectedIds = [], C(), u(), N(), te(), $();
        return;
      }
      if (o && W(v)) {
        f();
        return;
      }
      if (s === "stickers" || pe(v)) {
        if (O(v)) {
          if (ee(v)) return;
          v.visible = !1, re(), C(), u(), N(), te(), $();
          return;
        }
        i.stickers = i.stickers.filter((E) => E.id !== v.id), H(), re(), t.selectedId = ((M = k()[0]) == null ? void 0 : M.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, C(), u(), N(), te(), $();
        return;
      }
      l();
    }
  }
  function y() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", Se(), N());
  }
  return {
    connect(F) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: g,
        getList: k,
        getNextStickerZIndex: m,
        getPaintingGroupList: h,
        getPaintingLayerList: _,
        getRasterObjectList: X,
        getSelected: j,
        getSelectedItems: J,
        isExternalSticker: O,
        isItemLocked: Y,
        isRasterObjectItem: G,
        isShotItem: W,
        isStickerHidden: ee,
        isStickerItem: pe,
        isStrokeGroupItem: D,
        isUploadingSticker: se,
        markObjectVisualsDirty: re,
        markPaintCompositeVisualsDirty: Q,
        markPaintStrokeVisualsDirty: K,
        parseRasterObjectSelectionId: T,
        pruneUnusedAssets: H,
        pushHistory: C,
        requestDraw: $,
        selectedWorldSticker: R,
        stopTimelinePlayback: U,
        syncFloatingViewButtonState: de,
        syncPaintUi: Se,
        updateSelectionMenu: te,
        updateSidePanel: N,
        worldStickerEditable: ie
      } = F);
    },
    clearAll: be,
    clearPaintingLayer: ve,
    duplicateSelected: I,
    deleteSelectedWorldSticker: ce,
    deleteSelected: b,
    forceCursorTool: y
  };
}
function w2(e) {
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
    vueModal: g
  } = e;
  let k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C;
  function $(S) {
    return xd(S == null ? void 0 : S.dataTransfer);
  }
  function R(S) {
    const M = !!S;
    n.active !== M && (n.active = M, d.classList.toggle("drop-active", M));
  }
  function U() {
    const S = new Set(
      (u.stickers || []).map((M) => String((M == null ? void 0 : M.asset_id) || "")).filter((M) => !!M)
    );
    Object.keys(u.assets || {}).forEach((M) => {
      S.has(M) || (delete u.assets[M], s.delete(M));
    });
  }
  async function de(S) {
    if (l || f !== "stickers" && f !== "cutout" || !Zn(S)) return;
    if (c) {
      T(), await ue(S);
      return;
    }
    const M = bi("asset"), E = Vo(a, `add:${M}`, async () => {
      try {
        const { image: q } = await $o(S);
        s.set(M, q);
        const le = bi("st");
        u.stickers.push({
          id: le,
          asset_id: M,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(q.naturalWidth || q.width || 1), Number(q.naturalHeight || q.height || 1)),
          rot_deg: 0,
          z_index: J()
        }), re(u.stickers[u.stickers.length - 1]), j(), C(), H(), D();
        const ge = await yi(S, {
          fetchApi: (_e, Ne) => t.fetchApi(_e, Ne)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((_e) => String((_e == null ? void 0 : _e.asset_id) || "") === M).length) return;
        u.assets[M] = ge, U(), pe(), m(), C(), H(), D();
      } catch (q) {
        delete u.assets[M], s.delete(M);
        const le = Array.isArray(u.stickers) ? u.stickers : [], ge = le.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") === M);
        throw ge.length && (u.stickers = le.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") !== M), ge.some((Z) => String((Z == null ? void 0 : Z.id) || "") === String(i.selectedId || "")) && re(null), C(), H(), D(), m()), q;
      }
    });
    try {
      await E;
    } catch {
    }
  }
  function Se() {
    var S;
    l || f !== "stickers" && f !== "cutout" || (S = g == null ? void 0 : g.openImagePicker) == null || S.call(g, "add");
  }
  function te() {
    var S;
    l || !c || (S = g == null ? void 0 : g.openImagePicker) == null || S.call(g, "add-world");
  }
  async function N(S) {
    l || !c || !Zn(S) || (T(), await ue(S, "world"));
  }
  function ie() {
    const S = { x: r.width / 2, y: r.height / 2 }, M = G() ? o.pick(X(), S.x, S.y, r.width, r.height) : null;
    return iS(Q(), M, _());
  }
  async function ue(S, M = "sky") {
    const E = bi("st"), q = Vo(a, `add:${E}`, async () => {
      const { image: le } = await $o(S), ge = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(le.naturalWidth || le.width || 1), Number(le.naturalHeight || le.height || 1)),
        rot_deg: 0
      }, Z = { kind: "file", filename: "" }, he = M === "world" ? Lv(E, Z, ie()) : nd(E, Z, ge, J());
      s.set(K(he), le), u.stickers.push(he), M === "world" ? se(E) : re(he), j(), C(), H(), D();
      try {
        const _e = await yi(S, {
          fetchApi: (fe, ye) => t.fetchApi(fe, ye)
        }), Ne = u.stickers.find((fe) => fe.id === E);
        if (!Ne) return;
        Ne.source = fa(_e), s.set(K(Ne), le), pe(), m();
      } catch (_e) {
        throw u.stickers = u.stickers.filter((Ne) => Ne.id !== E), i.selectedId === E && re(null), i.worldSelectedId === E && k(), pe(), m(), _e;
      } finally {
        C(), H(), D();
      }
    });
    try {
      await q;
    } catch {
    }
  }
  async function be(S, M) {
    const E = Vo(a, `replace:${M}:${bi("asset")}`, async () => {
      const { image: q } = await $o(S), le = await yi(S, {
        fetchApi: (Z, he) => t.fetchApi(Z, he)
      }), ge = u.stickers.find((Z) => Z.id === M);
      if (ge) {
        ge.source = fa(le), ge.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Z of [ge.size.value, ...ge.size.keyframes.map((he) => he.value)])
          Z.vFOV_deg = h(Z.hFOV_deg, Number(q.naturalWidth || q.width || 1), Number(q.naturalHeight || q.height || 1));
        s.set(K(ge), q), ee(), pe(), m(), C(), H(), D();
      }
    });
    try {
      await E;
    } catch {
    }
  }
  async function ve(S) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const M = O();
    if (!M || !W(M) || Y(M) || !Zn(S)) return;
    if (c) {
      await be(S, M.id);
      return;
    }
    const E = String(M.id || ""), q = bi("asset"), le = Vo(a, `replace:${E}:${q}`, async () => {
      var fe;
      const ge = (Array.isArray(u.stickers) ? u.stickers : []).find((ye) => String((ye == null ? void 0 : ye.id) || "") === E) || null;
      if (!ge || !W(ge) || Y(ge)) return;
      const Z = String(ge.asset_id || ""), he = Z ? un(((fe = u.assets) == null ? void 0 : fe[Z]) || null) : null, _e = Number(ge.vFOV_deg || 0), Ne = ge.crop && typeof ge.crop == "object" ? { ...ge.crop } : null;
      try {
        const { image: ye } = await $o(S);
        s.set(q, ye), ge.asset_id = q, ge.vFOV_deg = h(
          Number(ge.hFOV_deg || 30),
          Number(ye.naturalWidth || ye.width || 1),
          Number(ye.naturalHeight || ye.height || 1)
        ), ge.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ee(), C(), H(), D();
        const ne = await yi(S, {
          fetchApi: (A, w) => t.fetchApi(A, w)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === E) || null;
        if (!p || String(p.asset_id || "") !== q) return;
        u.assets[q] = ne, U(), pe(), m(), C(), H(), D();
      } catch (ye) {
        delete u.assets[q], s.delete(q);
        const ne = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === E) || null;
        throw ne && String(ne.asset_id || "") === q && (Z && he && (u.assets[Z] = he), ne.asset_id = Z, ne.vFOV_deg = _e, ne.crop = Ne ? { ...Ne } : null), ee(), m(), C(), H(), D(), ye;
      }
    });
    try {
      await le;
    } catch {
    }
  }
  function I() {
    var M;
    if (l) return;
    const S = O();
    !S || !W(S) || Y(S) || (M = g == null ? void 0 : g.openImagePicker) == null || M.call(g, "replace");
  }
  async function ce() {
    if (l || f !== "stickers") return;
    if (c) {
      await b();
      return;
    }
    const S = u.assets && typeof u.assets == "object" ? u.assets : {}, M = Object.entries(S).filter(([, q]) => {
      const le = String((q == null ? void 0 : q.type) || "").toLowerCase(), ge = String((q == null ? void 0 : q.value) || "");
      return le === "dataurl" && ge.startsWith("data:image");
    });
    if (!M.length) return;
    let E = !1;
    for (const [q, le] of M)
      try {
        const ge = String((le == null ? void 0 : le.value) || "");
        if (!ge) continue;
        const Z = await fetch(ge).then((ye) => ye.blob()), he = String(Z.type || "image/png").split("/")[1] || "png", _e = String((le == null ? void 0 : le.name) || `${q}.${he}`), Ne = new File([Z], _e, { type: Z.type || "image/png" }), fe = await yi(Ne, {
          fetchApi: (ye, ne) => t.fetchApi(ye, ne)
        });
        u.assets[q] = {
          ...fe,
          w: Number((le == null ? void 0 : le.w) || 0),
          h: Number((le == null ? void 0 : le.h) || 0)
        }, E = !0;
      } catch {
      }
    E && (m(), D());
  }
  async function b() {
    let S = !1;
    for (const M of u.stickers) {
      const E = M.source.data_url;
      if (E)
        try {
          const q = await fetch(E).then((he) => he.blob()), le = String(q.type || "image/png").split("/")[1] || "png", ge = new File([q], `${M.id}.${le}`, { type: q.type || "image/png" }), Z = await yi(ge, {
            fetchApi: (he, _e) => t.fetchApi(he, _e)
          });
          M.source = fa(Z), S = !0;
        } catch {
        }
    }
    S && (m(), D());
  }
  function y(S) {
    f !== "stickers" && f !== "cutout" || l || (S.preventDefault(), R(!0));
  }
  function F(S) {
    var q;
    if (f !== "stickers" && f !== "cutout" || l) return;
    S.preventDefault(), S.stopPropagation(), n.depth = 0, R(!1);
    const E = Array.from(((q = S.dataTransfer) == null ? void 0 : q.files) || []).find((le) => Zn(le));
    E && de(E);
  }
  function v(S) {
    f !== "stickers" && f !== "cutout" || l || $(S) && (n.depth += 1, R(!0), S.preventDefault());
  }
  function z(S) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && $(S) && R(!0), n.active && S.preventDefault());
  }
  function x(S) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const M = Number(S.clientX) <= 0 && Number(S.clientY) <= 0;
    (n.depth === 0 || M) && R(!1);
  }
  function L(S) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, R(!1), $(S) && S.preventDefault());
  }
  return {
    connect(S) {
      ({
        clearWorldSelection: k,
        commitAndRefreshNode: m,
        computeStickerVFov: h,
        contentSphere: _,
        currentSpaceCamera: X,
        forceCursorTool: j,
        getNextStickerZIndex: J,
        getSelected: O,
        isExternalSticker: Y,
        isSpaceView: G,
        isStickerItem: W,
        markObjectVisualsDirty: ee,
        pushHistory: pe,
        requestDraw: D,
        selectWorldSticker: se,
        setSelectedItem: re,
        spaceViewState: Q,
        stickerImageKey: K,
        stopTimelinePlayback: T,
        updateSelectionMenu: H,
        updateSidePanel: C
      } = S);
    },
    addImageStickerFromFile: de,
    addImageSticker: Se,
    addWorldImageSticker: te,
    addWorldStickerFromFile: N,
    replaceSelectedImageFromFile: ve,
    replaceSelectedImage: I,
    migrateLegacyEmbeddedAssets: ce,
    pruneUnusedAssets: U,
    setDropCue: R,
    onCanvasDragOver: y,
    onCanvasDrop: F,
    onWindowDragEnter: v,
    onWindowDragOver: z,
    onWindowDragLeave: x,
    onWindowDrop: L
  };
}
function x2(e) {
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
    type: g,
    uiState: k
  } = e;
  let m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve = o;
  function I(ne, p) {
    var P;
    const A = (P = O().space) == null ? void 0 : P.gizmo;
    if (D() && A && be("hover", p) !== null && be("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: A.mode, start: A.transform, base: J(), changed: !1 }, r.setPointerCapture(ne.pointerId), N(p), !0;
    const w = Pm(J(), h(C()));
    return fS(j(), w, p, r.width, r.height) ? (D() || (H(q()), ue(), ie(), K()), n.interaction = { kind: "world_select" }, r.setPointerCapture(ne.pointerId), !0) : !1;
  }
  function ce() {
    if (s || g !== "cutout") return;
    const ne = q();
    if (ne) {
      H(ne), n.mode = "pano", te(jt(Number(ne.yaw_deg || 0)), Ee(Number(ne.pitch_deg || 0), -89.9, 89.9)), ue(), ie(), K({ cause: "cutout_frame" });
      return;
    }
    const p = Lh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], H(p), Y(), n.mode = "pano", Q(), X(), ue(), ie(), K({ cause: "cutout_frame" });
  }
  function b() {
    s || !u || W() || (R(), d.camera = Pv($()), M(), H(q()), Y(), Q(), X(), ue(), ie(), K({ cause: "cutout_frame" }));
  }
  function y() {
    R(), d.camera = null, H(null), M(), Q(), X(), ue(), ie(), K({ cause: "cutout_frame" });
  }
  function F(ne, p) {
    u && se(ne) && (d.camera.projection = p === lo ? "erp" : "perspective", p === lo) || x(ne, p);
  }
  function v() {
    s || g !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, Q(), X(), ue(), ie(), K());
  }
  function z(ne, p) {
    const A = a.frameSafeRect;
    if (!ne || !A || n.mode !== "frame") return !1;
    const w = hu * Ni(A, ne), P = Wu(Gu(A, p), w);
    return ne.hFOV_deg = P.hFOV_deg, ne.vFOV_deg = P.vFOV_deg, !0;
  }
  function x(ne, p) {
    if (!ne || ne.locked === !0) return;
    const A = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, w = (() => {
      const V = String(ne.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(V)) {
        const [ke, Me] = V.split(":").map((Ie) => Number(Ie));
        if (Number.isFinite(ke) && Number.isFinite(Me)) return ke >= Me;
      }
      const oe = Number(ne.hFOV_deg || 64), Ae = Number(ne.vFOV_deg || 40);
      return Math.abs(oe - Ae) > 1e-6 ? oe >= Ae : Ei(ne) >= 1;
    })();
    let [P, B] = A[String(p)] || A["1:1"];
    P >= B !== w && ([P, B] = [B, P]);
    const me = P / B;
    if (!z(ne, me)) {
      const V = Ee(Number(ne.vFOV_deg || 40), 1, 179);
      ne.vFOV_deg = V, ne.hFOV_deg = ca(V, me);
    }
    ne.aspect_id = `${P}:${B}`;
  }
  function L(ne, p, A) {
    if (!ne || ne.locked === !0) return !1;
    const w = fs(p, A);
    if (!w) return !1;
    const P = w.ratio;
    if (!z(ne, P)) {
      const B = Ee(Number(ne.vFOV_deg || 40), 1, 179);
      ne.vFOV_deg = B, ne.hFOV_deg = ca(B, P);
    }
    return ne.aspect_id = w.label, !0;
  }
  function S(ne) {
    if (!ne || ne.locked === !0) return;
    const p = String(ne.aspect_id || "").trim(), A = ii(ne), w = A.tanHalfX / Math.max(1e-12, A.tanHalfY), P = 1 / Math.max(1e-12, w);
    if (!z(ne, P)) {
      const B = Ee(Number(ne.vFOV_deg || 60), 1, 179);
      ne.vFOV_deg = B, ne.hFOV_deg = ca(B, P);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [B, me] = p.split(":");
      ne.aspect_id = `${me}:${B}`;
    } else
      ne.aspect_id = ki(ne);
  }
  function M(ne = !0) {
    var w, P;
    if (!t) return;
    const p = ve;
    if (!_()) {
      ve = null, (w = d.shots) != null && w.length && (d.shots = []), p && E(p, null);
      return;
    }
    const A = (P = d.shots) == null ? void 0 : P[0];
    ne && A && ve && Av(d.camera, n.frame, A, ve), ve = dm(d.camera, n.frame), A ? Object.assign(A, ve, { position: [...ve.position] }) : d.shots = [{ ...ve, position: [...ve.position] }], p || E(null, ve);
  }
  function E(ne, p) {
    var B, me;
    !p && n.mode === "frame" && re(ne);
    const A = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((me = (B = n.viewTransition) == null ? void 0 : B.end) == null ? void 0 : me.mode) === "3dof") {
      Se({ ...$(), position: A }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ee()) return;
    const w = (ne == null ? void 0 : ne.position) ?? [0, 0, 0];
    if (w.every((V, oe) => V === A[oe])) return;
    const P = { ...$(), position: w };
    m({ mode: "6dof", position: w, moved: !0 }), n.viewDistance = P.distance, Se({ ...P, position: A }, { mode: "3dof", moved: !1 });
  }
  function q() {
    if (!l) return null;
    const ne = Array.isArray(d.shots) ? d.shots : [];
    if (!ne.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return ne.find((A) => String((A == null ? void 0 : A.id) || "") === p) || ne[0] || null;
  }
  function le(ne, p, A = {}) {
    var B;
    if ((ne == null ? void 0 : ne.kind) !== "roll_frame" || !ne.shot) return;
    ne.accumulatedRad += Fh(p, ne.lastAngle), ne.lastAngle = p;
    const w = Th(ne.start.roll_deg, ne.accumulatedRad, {
      shiftKey: A.shiftKey,
      altKey: ne.altStarted ? !1 : A.altKey
    });
    ne.shot.roll_deg = w, ne.changed = ne.changed || Math.abs(ne.accumulatedRad) > 1e-9;
    const P = (((B = k.sidePanel) == null ? void 0 : B.params) || []).find((me) => me.key === "roll_deg");
    P && (P.value = w, P.displayValue = to(w), P.fillPct = (w + 180) / 360 * 100), U(), he(ne), K({ localOnly: !0 });
  }
  function ge(ne, p, A = {}) {
    var B;
    if ((ne == null ? void 0 : ne.kind) !== "roll_frame" || !ne.shot || !ne.rollGesture) return;
    const w = mg(ne.rollGesture, p, A);
    if (!w) return;
    ne.rollGesture = w.gesture, ne.center = w.gesture.center, ne.lastAngle = w.gesture.lastAngle, ne.accumulatedRad = w.gesture.accumulatedRad, ne.shot.roll_deg = w.rollDeg, ne.changed = ne.changed || Math.abs(w.gesture.accumulatedRad) > 1e-9;
    const P = (((B = k.sidePanel) == null ? void 0 : B.params) || []).find((me) => me.key === "roll_deg");
    P && (P.value = w.rollDeg, P.displayValue = to(w.rollDeg), P.fillPct = (w.rollDeg + 180) / 360 * 100), U(), he(ne), K({ localOnly: !0 });
  }
  function Z(ne, p) {
    const A = T(ne);
    return Math.atan2(A.y - p.y, A.x - p.x);
  }
  function he(ne) {
    var me, V;
    if ((ne == null ? void 0 : ne.kind) !== "roll_frame" || !ne.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = G(ne.shot), A = (me = r.getBoundingClientRect) == null ? void 0 : me.call(r), w = (V = c.getBoundingClientRect) == null ? void 0 : V.call(c);
    if (!p || !A || !w || r.width <= 0 || r.height <= 0) return;
    const P = A.width / r.width, B = A.height / r.height;
    k.tooltip.text = `${to(ne.shot.roll_deg)}°`, k.tooltip.left = A.left - w.left + (p.x + p.w * 0.5) * P, k.tooltip.top = A.top - w.top + (p.y + p.h * 0.5) * B + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  function _e(ne) {
    var B;
    if (ne.button !== 0 || s || n.mode !== "frame") return;
    const p = q();
    if (!p || p.locked === !0) return;
    const A = G(p);
    if (!A) return;
    const w = { x: A.x + A.w * 0.5, y: A.y + A.h * 0.5 }, P = Z(ne, w);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: w,
      lastAngle: P,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (B = i.setPointerCapture) == null || B.call(i, ne.pointerId), ne.preventDefault(), U(), he(n.interaction), K({ localOnly: !0 });
  }
  function Ne(ne) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || le(
      n.interaction,
      Z(ne, n.interaction.center),
      ne
    );
  }
  function fe() {
    const ne = n.interaction;
    (ne == null ? void 0 : ne.kind) !== "roll_frame" || ne.source !== "knob" || (ne.changed && (Q(), X(), ue()), n.interaction = null, pe(), de(), U(), K());
  }
  function ye(ne) {
    const p = n.mode === "frame" && !s ? q() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, Q(), X(), ue(), U(), K(), ne.preventDefault());
  }
  return {
    connect(ne) {
      ({
        applySpaceMode: m,
        cameraFrustumLength: h,
        cameraShoots: _,
        commitAndRefreshNode: X,
        currentSpaceCamera: j,
        cutoutCamera: J,
        editorViewInput: O,
        forceCursorTool: Y,
        getFrameViewRect: G,
        hasCamera: W,
        hasSpaceContent: ee,
        hideTooltip: pe,
        isCameraSelected: D,
        isShotItem: se,
        leaveFrameView: re,
        pushHistory: Q,
        requestDraw: K,
        screenPos: T,
        setSelectedItem: H,
        spaceScale: C,
        spaceViewState: $,
        stopTimelinePlayback: R,
        syncFrameRollKnob: U,
        syncViewToggleState: de,
        transitionView: Se,
        turnViewTo: te,
        updateCursor: N,
        updateSelectionMenu: ie,
        updateSidePanel: ue,
        worldGizmoPointer: be
      } = ne);
    },
    addCutoutFrame: ce,
    addStudioCamera: b,
    deleteStudioCamera: y,
    setShotAspect: F,
    clearCutoutFrame: v,
    applyCutoutAspectCustom: L,
    rotateCutoutAspect90: S,
    syncCutoutShot: M,
    getActiveCutoutShot: q,
    startCameraPress: I,
    applySharedRollInteractionPoint: ge,
    onFrameRollKnobPointerDown: _e,
    onFrameRollKnobPointerMove: Ne,
    finishKnobRoll: fe,
    onFrameRollKnobDoubleClick: ye
  };
}
function k2(e) {
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
    uiState: g,
    videoTransportEl: k
  } = e;
  let m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K = null;
  function T(x) {
    if (n.mode = "pano", !x) return;
    h();
    const L = D().distance;
    n.viewYaw = jt(x.yaw_deg), n.viewPitch = Ee(x.pitch_deg, -89.9, 89.9), n.viewFov = Ee(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = L, d.backgroundDirty = !0;
  }
  function H() {
    var ye, ne, p, A, w;
    if (!r) return null;
    const x = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), L = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, S = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(L, S);
    let M = 24, E = 24;
    const q = Math.max(M + 1, r.width - 24);
    let le = Math.max(E + 1, r.height - 24);
    const ge = (ne = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : ne.call(f), Z = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a);
    let he = 24;
    ge && x && ge.width > 0 && ge.height > 0 && (he = Math.max(he, (ge.right - x.left) * L + fp)), Z && x && Z.width > 0 && Z.height > 0 && ((A = g.frameRail) == null ? void 0 : A.visible) === !0 && (he = Math.max(he, (x.right - Z.left) * L + fp)), M = Math.max(M, he);
    const _e = Math.min(q, r.width - he);
    let Ne = 24;
    const fe = (w = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : w.call(s);
    if (fe && x && fe.width > 0 && fe.height > 0 && (Ne = Math.max(Ne, (fe.bottom - x.top) * S + yc)), [l, k].forEach((P) => {
      var V;
      if (!P || !x) return;
      const B = getComputedStyle(P);
      if (B.display === "none" || B.visibility === "hidden" || Number(B.opacity) <= 0) return;
      const me = (V = P.getBoundingClientRect) == null ? void 0 : V.call(P);
      !me || me.width <= 0 || me.height <= 0 || (Ne = Math.max(Ne, (x.bottom - me.top) * S + yc));
    }), o && x) {
      const P = getComputedStyle(o);
      P.display !== "none" && P.visibility !== "hidden" && Number(P.opacity) > 0 && (Ne = Math.max(Ne, (WP + yc) * S));
    }
    return E = Math.max(E, Ne), le = Math.max(E + 1, Math.min(le, r.height - Ne)), {
      x: M,
      y: E,
      w: Math.max(1, _e - M),
      h: Math.max(1, le - E)
    };
  }
  function C(x = j()) {
    if (!x || !r) return null;
    const L = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return y1(L, x, hu * Ni(L, x));
  }
  function $(x = j()) {
    const L = C(x);
    return L ? { x: L.x, y: L.y, w: L.w, h: L.h } : null;
  }
  function R() {
    return u && !!j();
  }
  function U(x, L) {
    const S = j();
    if (!S || S.locked === !0) return !1;
    const M = Number(L) > 0, E = Vh(S, L);
    if (!E) return !1;
    if (M) {
      const q = hu * Ni(
        d.frameSafeRect || { w: r.width, h: r.height },
        E
      ), le = Ku({ width: r.width, height: r.height }, q);
      if (le.halfW < r.width * 0.5 - 1e-6 || le.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return S.hFOV_deg = E.hFOV_deg, S.vFOV_deg = E.vFOV_deg, de(), Q(), !0;
  }
  function de() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, G(), _(), Q());
    }, 180);
  }
  function Se() {
    return t && n.mode === "frame" && J();
  }
  function te() {
    const x = j(), L = C(x);
    return x && L ? Cm(x, L, { width: r.width, height: r.height }) : null;
  }
  function N() {
    var x;
    return ((x = X()) == null ? void 0 : x.radius) || tr;
  }
  function ie(x) {
    const { position: L, yaw_deg: S, pitch_deg: M, roll_deg: E, hFOV_deg: q } = x.shot;
    return { position: L, yaw_deg: S, pitch_deg: M, roll_deg: E, hFOV_deg: q, distance: N() };
  }
  function ue(x, L) {
    const { rect: S } = x;
    return i.pickSurface(ee(x.shot), L.x - S.x, L.y - S.y, S.w, S.h);
  }
  function be(x, L, S) {
    return Uc(L, ue(x, S), null, pe());
  }
  function ve(x) {
    return JSON.stringify([ie(x), x.rect]);
  }
  function I(x) {
    const L = j();
    L.position = [...x.position], L.yaw_deg = x.yaw_deg, L.pitch_deg = x.pitch_deg;
  }
  function ce(x, L) {
    const S = j();
    !S || c || S.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: S,
      last: x,
      start: { yaw_deg: Number(S.yaw_deg || 0), pitch_deg: Number(S.pitch_deg || 0) },
      changed: !1
    }, re(x), r.setPointerCapture(L));
  }
  function b(x, L, S) {
    const M = te();
    if (!M || c) return;
    const E = ie(M);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: L, pivot: be(M, E, L), changed: !1 } : { kind: "frame_pan", last: L, depth: gm(E, pe()), changed: !1 }, re(L), r.setPointerCapture(S);
  }
  function y(x, L) {
    const S = te();
    if (!S) return;
    const M = ie(S), E = L.x - x.last.x, q = L.y - x.last.y;
    I(x.kind === "frame_pan" ? vm(M, E, q, S.rect.w, S.rect.h, x.depth) : bm(M, E, q, r.height, x.pivot)), x.changed = x.changed || E !== 0 || q !== 0, x.last = L, W({ localOnly: !0, cause: "frame_view" });
  }
  function F(x, L) {
    const S = te();
    if (!S || c) return;
    const M = ie(S), E = performance.now(), q = { x: x.x, y: x.y, time: E, key: i.contentRevision(), view: ve(S) };
    if (!ym(K, q)) {
      const le = ue(S, x);
      K = { ...q, cost: performance.now() - E, hit: le };
    }
    I(Sm(M, Uc(M, K.hit, null, pe()), L, pe())), K.view = ve(te() ?? S), K.wheelTime = E, de(), Q(), W({ localOnly: !0, cause: "frame_view" });
  }
  function v() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, G(), _(), Q(), !0) : !1;
  }
  function z() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const L = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, L && O(), n.interaction = null, Y(), se(), Q(), re(n.pointerPos), W({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: m,
        cancelViewTransition: h,
        commitAndRefreshNode: _,
        contentSphere: X,
        getActiveCutoutShot: j,
        hasSpaceContent: J,
        hideTooltip: O,
        invalidateLivePaintPreviewCaches: Y,
        pushHistory: G,
        requestDraw: W,
        shotViewCamera: ee,
        spaceScale: pe,
        spaceViewState: D,
        syncViewToggleState: se,
        updateCursor: re,
        updateSidePanel: Q
      } = x);
    },
    leaveFrameView: T,
    measureFrameSafeRect: H,
    getFrameViewLayout: C,
    getFrameViewRect: $,
    supportsFramePainting: R,
    zoomFrameViewAt: U,
    isFreeFrameView: Se,
    frameContext: te,
    frameViewDistance: N,
    frameSpaceView: ie,
    frameTarget: be,
    startPanFrame: ce,
    startFrameDrag: b,
    dragFrame: y,
    zoomFrameAt: F,
    flushFrameWheelCommit: v,
    cancelFrameCameraGesture: z
  };
}
function M2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W = 0;
  function ee() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function pe() {
    return String(ee() || "") === "lasso_fill";
  }
  function D() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function se(I, ce) {
    const b = Number(ce || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function re(I) {
    const ce = String(I || "").trim();
    return ce === "eraser" ? Cr : An[ce] ? ce : t.activeBrushPresetId || Cr;
  }
  function Q() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (D() || G());
  }
  function K() {
    var I;
    return Q() && ((I = t.pointerPos) == null ? void 0 : I.inside) === !0;
  }
  function T(I, ce = !0) {
    const b = Number((I == null ? void 0 : I.x) || 0), y = Number((I == null ? void 0 : I.y) || 0), F = ce !== !1, v = t.pointerPos || { x: 0, y: 0, inside: !1 }, z = v.inside !== F || Math.abs(v.x - b) > 0.01 || Math.abs(v.y - y) > 0.01;
    return t.pointerPos = { x: b, y, inside: F }, z;
  }
  function H() {
    var M, E;
    if (!K()) return null;
    const I = t.primaryTool === "mask" ? "mask" : "paint", ce = I === "mask" ? t.maskTool : t.paintTool, b = re(ce), y = An[b] || An[Cr], F = Number(t.brushSizes[b] ?? 10), v = Math.max(1, F) * Math.max(0.1, Number(y.sizeScale ?? 1)), z = Math.max(3, v * 0.5), x = I === "mask" ? ce === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : ce === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Tn(t.paintColor), L = I === "mask" ? ce === "lasso_fill" ? 0.18 : 0.2 : ce === "eraser" ? 0.06 : Ee(Math.max(0.16, Number(x.a ?? 1) * 0.3), 0.16, 0.52), S = I === "mask" ? 0.95 : ce === "eraser" ? 0.75 : Ee(Math.max(0.46, Number(x.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: I,
      toolKind: ce,
      preset: y,
      radius: z,
      fillStyle: fr(x, L),
      strokeStyle: fr(x, S),
      x: Number(((M = t.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((E = t.pointerPos) == null ? void 0 : E.y) || 0),
      hotspotX: z,
      hotspotY: z
    };
  }
  function C() {
    var q, le, ge;
    const I = H();
    if (!r) return;
    if (!I) {
      r.style.display = "none";
      return;
    }
    let ce = I.radius * 2, b = I.radius * 2, y = "999px", F = 0, v = I.fillStyle, z = "1px solid rgba(222, 222, 222, 0.72)", x = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const L = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let M = Number(I.hotspotX ?? ce * 0.5), E = Number(I.hotspotY ?? b * 0.5);
    if (I.toolKind === "lasso_fill")
      ce = tl, b = tl, y = "0", z = "0", x = "none", M = BP, E = YP, v = eN(I.fillStyle, S, L);
    else if (I.layerKind === "mask")
      v = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (I.toolKind === "marker") {
      const Z = Math.max(1, Number(((q = I.preset) == null ? void 0 : q.aspect) ?? 1));
      ce = Math.max(10, I.radius * 2 * Z), b = Math.max(6, I.radius * 2), y = `${Math.min(6, b * 0.42)}px`, F = Number(((ge = (le = I.preset) == null ? void 0 : le.angle) == null ? void 0 : ge.value) || 0) * Ci;
    } else I.toolKind === "brush" ? v = `radial-gradient(circle at 50% 50%, ${I.strokeStyle} 0%, ${I.fillStyle} 45%, rgba(0,0,0,0) 100%)` : I.toolKind === "eraser" && (v = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(ce)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = y, r.style.border = z, r.style.boxShadow = x, r.style.background = v, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(I.x - M)}px, ${Math.round(I.y - E)}px) rotate(${F}deg)`;
  }
  function $() {
    var Ne;
    if (!n || !i) return;
    const I = t.primaryTool === "mask" ? "mask" : "paint", ce = I === "mask" ? t.maskTool : t.paintTool;
    if (ce === "lasso_fill") return;
    const b = re(ce), y = An[b] || An[Cr], F = Number(t.brushSizes[b] ?? 10), v = Math.max(1, F) * Math.max(0.1, Number(y.sizeScale ?? 1)), z = Math.max(6, v * 0.5), x = ce === "eraser", L = I === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : x ? { r: 1, g: 1, b: 1, a: 0.22 } : Tn(t.paintColor), S = I === "mask" ? fr(L, 0.22) : x ? "rgba(255,255,255,0.14)" : fr(L, Ee(Math.max(0.18, Number(L.a ?? 1) * 0.34), 0.18, 0.56)), M = I === "mask" ? fr(L, 0.96) : x ? "rgba(255,255,255,0.72)" : fr(L, Ee(Math.max(0.56, Number(L.a ?? 1) * 0.96), 0.56, 1));
    let E = z * 2, q = z * 2, le = "999px", ge = 0, Z = S;
    const he = "rgba(222, 222, 222, 0.72)", _e = "rgba(52, 52, 52, 0.72)";
    if (I === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (ce === "marker") {
      const fe = Math.max(1, Number((y == null ? void 0 : y.aspect) ?? 1));
      E = Math.max(16, z * 2 * fe), q = Math.max(10, z * 2), le = `${Math.min(8, q * 0.42)}px`, ge = Number(((Ne = y == null ? void 0 : y.angle) == null ? void 0 : Ne.value) || 0) * Ci;
    } else ce === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${M} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : ce === "lasso_fill" ? (E = Math.max(18, z * 1.8), q = E, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : x && (Z = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(E)}px`, i.style.height = `${Math.round(q)}px`, i.style.borderRadius = le, i.style.background = Z, i.style.border = `1px solid ${he}`, i.style.boxShadow = `0 0 0 1px ${_e}`, i.style.transform = `rotate(${ge}deg)`, W && (clearTimeout(W), W = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function R() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), W && clearTimeout(W), W = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), W = 0;
    }, 180));
  }
  function U(I, ce, b, y) {
    const F = re(ce), v = An[F] || An[Cr], z = t.brushSizes[F] ?? 10, x = Math.max(1, z) * Math.max(0.1, v.sizeScale ?? 1), L = se(y, x), S = b.map((E) => ({
      ...E,
      t: Number((E == null ? void 0 : E.t) || 0),
      widthScale: Number.isFinite(Number(E == null ? void 0 : E.widthScale)) ? Math.max(0, Number(E.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(E == null ? void 0 : E.pressureLike)) ? Math.max(0, Number(E.pressureLike)) : 1
    })), M = {
      id: Bi(I),
      actionGroupId: Bi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: ce,
      size: x,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: L.radiusModel,
      radiusValue: L.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((E) => ({ ...E })),
        points: S.map((E) => ({ ...E }))
      }
    };
    return dp(M, v), t.mode, Number(v.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function de(I, ce, b, y) {
    const F = b.map((L) => ({
      ...L,
      t: Number((L == null ? void 0 : L.t) || 0),
      widthScale: Number.isFinite(Number(L == null ? void 0 : L.widthScale)) ? Math.max(0, Number(L.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(L == null ? void 0 : L.pressureLike)) ? Math.max(0, Number(L.pressureLike)) : 1
    })), v = re(ce), z = An[v] || An[Cr], x = {
      id: Bi(I),
      actionGroupId: Bi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: I,
      toolKind: ce,
      size: 10,
      createdAt: Date.now(),
      color: I === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: F.map((L) => ({ ...L }))
      }
    };
    return dp(x, z), t.mode, Number(z.aspect ?? 1), Number(x.aspect ?? 1), String(x.stampKind || ""), { ...x.targetSpace }, x;
  }
  function Se(I) {
    const ce = o.painting || (o.painting = fo(null)), b = ce[I] || (ce[I] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function te(I, ce, b = performance.now()) {
    let y;
    if (t.mode === "frame") {
      const S = f();
      if (!S || (y = Y(ce, S, b), !y)) return !1;
    } else
      y = O(ce, b);
    if (!y) return !1;
    const F = I.stroke.geometry.rawPoints || I.stroke.geometry.points, v = I.stroke.geometry.points, z = F[F.length - 1];
    if (z) {
      const S = Math.abs(Number(y.u ?? y.x ?? 0) - Number(z.u ?? z.x ?? 0)), M = Math.abs(Number(y.v ?? y.y ?? 0) - Number(z.v ?? z.y ?? 0));
      if (S < 15e-4 && M < 15e-4) return !1;
    }
    const x = {
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    F.push({ ...x }), v.push({ ...x });
    const L = g(I);
    if (L) {
      const S = t.paintEngine.ensureTarget(L);
      t.paintEngine.appendStrokePoint(S, Number(x.u ?? 0), Number(x.v ?? 0), I.stroke);
    }
    return !0;
  }
  function N(I, ce, b = performance.now()) {
    var z, x;
    let y;
    if (t.mode === "frame") {
      const L = f();
      if (!L) return !1;
      y = Y(ce, L, b);
    } else
      y = O(ce, b);
    const F = (x = (z = I == null ? void 0 : I.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.points;
    if (!y || !Array.isArray(F)) return !1;
    const v = F[F.length - 1];
    if (v) {
      const L = Math.abs(Number(y.u ?? y.x ?? 0) - Number(v.u ?? v.x ?? 0)), S = Math.abs(Number(y.v ?? y.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (L < 15e-4 && S < 15e-4) return !1;
    }
    return F.push({
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ie(I) {
    var fe, ye, ne, p, A;
    const ce = (I == null ? void 0 : I.stroke) || null;
    if (!ce || (I == null ? void 0 : I.layerKind) !== "paint" || String((ce == null ? void 0 : ce.toolKind) || "") !== "eraser") return !1;
    J();
    const b = g(), y = c(b.width, b.height);
    if (!j(y, ce, { w: b.width, h: b.height })) return !1;
    const F = ((ye = (fe = y.ctx) == null ? void 0 : fe.getImageData(0, 0, b.width, b.height)) == null ? void 0 : ye.data) || null;
    if (!F) return !1;
    const v = new Map(m().map((w) => [String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim(), w ? { ...w } : null])), z = [], x = [], L = [...h().filter((w) => String((w == null ? void 0 : w.layerKind) || "paint") !== "paint")];
    let S = !1, M = k().reduce((w, P) => Math.max(w, Number((P == null ? void 0 : P.z_index) || 0)), -1) + 1;
    function E(w, P, B, me = 8) {
      let V = P, oe = B, Ae = -1, ke = -1;
      for (let Me = 0; Me < B; Me += 1)
        for (let Ie = 0; Ie < P; Ie += 1)
          w[(Me * P + Ie) * 4 + 3] <= me || (Ie < V && (V = Ie), Me < oe && (oe = Me), Ie > Ae && (Ae = Ie), Me > ke && (ke = Me));
      return Ae < V || ke < oe ? null : { minX: V, minY: oe, maxX: Ae, maxY: ke };
    }
    const q = E(F, b.width, b.height, 8);
    if (!q) return !1;
    function le(w, P) {
      return !w || !P ? !1 : !(w.maxX < P.minX || P.maxX < w.minX || w.maxY < P.minY || P.maxY < w.minY);
    }
    function ge(w, P) {
      const B = d((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "", "paint", P);
      if (!B) return null;
      const me = B.centerUv.u - B.halfW, V = B.centerUv.u + B.halfW, oe = B.centerUv.v - B.halfH, Ae = B.centerUv.v + B.halfH, ke = b.width, Me = b.height;
      return {
        minX: Math.floor((me % 1 + 1) % 1 * ke),
        maxX: Math.ceil((V % 1 + 1) % 1 * ke),
        minY: Math.floor(Ee(oe, 0, 1) * Me),
        maxY: Math.ceil(Ee(Ae, 0, 1) * Me),
        wraps: V - me >= 1 || me < 0 || V > 1
      };
    }
    function Z(w) {
      const P = (w == null ? void 0 : w.bbox) || null;
      if (!P) return null;
      const B = (w == null ? void 0 : w.transform) || {}, me = b.width, V = b.height, oe = Number(P.u0 || 0) + Number(B.du || 0), Ae = Number(P.u1 || 0) + Number(B.du || 0), ke = Number(P.v0 || 0) + Number(B.dv || 0), Me = Number(P.v1 || 0) + Number(B.dv || 0);
      return {
        minX: Math.floor((oe % 1 + 1) % 1 * me),
        maxX: Math.ceil((Ae % 1 + 1) % 1 * me),
        minY: Math.floor(Ee(ke, 0, 1) * V),
        maxY: Math.ceil(Ee(Me, 0, 1) * V),
        wraps: Ae - oe >= 1 || oe < 0 || Ae > 1
      };
    }
    function he(w) {
      return w ? w.wraps ? le(q, { minX: 0, maxX: w.maxX, minY: w.minY, maxY: w.maxY }) || le(q, { minX: w.minX, maxX: b.width - 1, minY: w.minY, maxY: w.maxY }) : le(q, w) : !0;
    }
    function _e(w) {
      if (!w) return { touched: !1, canvas: null };
      const P = c(b.width, b.height, { readback: !0 });
      P.ctx.drawImage(w, 0, 0);
      const B = P.ctx.getImageData(0, 0, b.width, b.height);
      P.ctx.save(), P.ctx.globalCompositeOperation = "destination-out", P.ctx.drawImage(y.canvas, 0, 0), P.ctx.restore();
      const me = P.ctx.getImageData(0, 0, b.width, b.height);
      for (let V = 0; V < b.width * b.height; V += 1) {
        if (F[V * 4 + 3] <= 8) continue;
        const Ae = B.data[V * 4 + 3], ke = me.data[V * 4 + 3];
        if (Ae > ke)
          return { touched: !0, canvas: P.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Ne(w, P, B) {
      const me = Number(B == null ? void 0 : B.z_index), V = l(w, P, B).map((oe, Ae) => ({
        ...oe,
        z_index: Number.isFinite(me) ? me + Ae * 1e-3 : M + Ae * 1e-3
      }));
      return V.length && (M = Math.max(M, ...V.map((oe) => Number((oe == null ? void 0 : oe.z_index) || 0))) + 1), V;
    }
    for (const w of m()) {
      const P = String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim();
      if (!P) continue;
      const B = _(P, "paint");
      if (!he(ge(w, B))) {
        x.push(w), z.push(...B);
        continue;
      }
      const me = ((p = (ne = t.paintEngine) == null ? void 0 : ne.getGroupTarget) == null ? void 0 : p.call(ne, P)) || null, V = ((A = me == null ? void 0 : me.committedPaint) == null ? void 0 : A.canvas) || null;
      if (!V) {
        x.push(w), z.push(...B);
        continue;
      }
      const oe = _e(V);
      if (!oe.touched || !oe.canvas) {
        x.push(w), z.push(...B);
        continue;
      }
      S = !0;
      const Ae = Ne(oe.canvas, "paint", v.get(P) || w || {});
      L.push(...Ae);
    }
    for (const w of h().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") === "paint")) {
      if (!he(Z(w))) {
        L.push(w);
        continue;
      }
      const P = s(w, null);
      if (!P) {
        L.push(w);
        continue;
      }
      const B = _e(P);
      if (!B.touched || !B.canvas) {
        L.push(w);
        continue;
      }
      S = !0;
      const me = Ne(B.canvas, "paint", w);
      L.push(...me);
    }
    return S ? (o.painting.paint.strokes = z, o.painting.groups = x.sort((w, P) => Number((w == null ? void 0 : w.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)), o.painting.raster_objects = L.sort((w, P) => Number((w == null ? void 0 : w.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ue(I) {
    var z, x, L, S, M;
    if ((((x = (z = I.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.rawPoints) || ((S = (L = I.stroke) == null ? void 0 : L.geometry) == null ? void 0 : S.points) || []).length >= 1) {
      ve(I);
      const E = g(I);
      E && (String(((M = I.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(E) : t.paintEngine.commitActiveStroke(I.stroke, E)), I._hasCommittedSegments = !0;
    }
    const b = I.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, F = U(I.layerKind, b.toolKind, [], y);
    F.actionGroupId = b.actionGroupId, I.stroke = F;
    const v = g(I);
    v && t.paintEngine.beginStroke(F, v);
  }
  function be(I) {
    var z, x;
    if ((((x = (z = I.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.points) || []).length >= 3) {
      ve(I);
      const L = g(I);
      L && t.paintEngine.commitActiveStroke(I.stroke, L), I._hasCommittedSegments = !0;
    }
    const b = I.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, F = de(I.layerKind, b.toolKind, [], y);
    F.actionGroupId = b.actionGroupId, I.stroke = F;
    const v = g(I);
    v && t.paintEngine.beginStroke(F, v);
  }
  function ve(I) {
    var v, z, x, L;
    const ce = ((v = I == null ? void 0 : I.stroke) == null ? void 0 : v.geometry) || null;
    if (!ce) return !1;
    const b = String(((z = I == null ? void 0 : I.stroke) == null ? void 0 : z.toolKind) || "pen");
    if (I.layerKind === "paint" && b === "eraser")
      return ce.geometryKind !== "lasso_fill" && (ce.processedPoints = X(ce.rawPoints || ce.points || [], I.stroke.targetSpace, !0)), ie(I);
    const y = I.layerKind === "paint" && b !== "eraser";
    if (ce.geometryKind === "lasso_fill")
      return (Array.isArray(ce.points) ? ce.points : []).length < 3 ? !1 : (y && u((x = I.stroke) == null ? void 0 : x.actionGroupId), Se(I.layerKind).push(I.stroke), !0);
    const F = ce.rawPoints || ce.points || [];
    return F.length < 1 ? !1 : (ce.processedPoints = X(F, I.stroke.targetSpace, !0), y && u((L = I.stroke) == null ? void 0 : L.actionGroupId), Se(I.layerKind).push(I.stroke), !0);
  }
  return {
    connect(I) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: g,
        getDisplayListObjects: k,
        getPaintingGroupList: m,
        getRasterObjectList: h,
        getStrokeGroupStrokes: _,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: j,
        rebuildPaintEngineIfNeeded: J,
        screenPosToErpPoint: O,
        screenPosToFrameAsErpPoint: Y,
        supportsFramePainting: G
      } = I);
    },
    isActiveLassoTool: pe,
    supportsErpPainting: D,
    getBrushPresetIdForTool: re,
    isPaintCursorEnabled: Q,
    isActivePaintCursorVisible: K,
    setPointerPos: T,
    syncPaintCursorElement: C,
    showPaintSizePreview: $,
    hidePaintSizePreview: R,
    buildFreehandStrokeRecord: U,
    buildLassoFillStrokeRecord: de,
    getPaintingLayerList: Se,
    appendPaintPoint: te,
    appendLassoPoint: N,
    _segmentFrameStroke: ue,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: ve
  };
}
function P2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D;
  function se(C) {
    var R;
    if (n && t.mode === "frame") {
      const U = s(), de = l(U);
      if (!U || !de || !(Number((C == null ? void 0 : C.x) || 0) >= Number(de.x || 0) && Number((C == null ? void 0 : C.x) || 0) <= Number(de.x || 0) + Number(de.w || 0) && Number((C == null ? void 0 : C.y) || 0) >= Number(de.y || 0) && Number((C == null ? void 0 : C.y) || 0) <= Number(de.y || 0) + Number(de.h || 0))) return null;
      const te = W(C, U, performance.now()), N = te ? o(te) : null;
      if (N)
        for (const ue of a()) {
          if (!j(ue)) continue;
          const be = D(ue, N);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const ve = G(ue);
            if (ve != null && ve.visible) return { item: ue, geom: ve };
          }
        }
      const ie = c(!1).slice().sort((ue, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0));
      for (const ue of ie) {
        if (ue.type === "strokeGroup") {
          const I = f(Y("paint", ue.actionGroupId || ue.id || ""));
          if (!I) continue;
          const ce = G(I);
          if (!(ce != null && ce.visible)) continue;
          const b = Array.isArray(ce.strokePaths) ? ce.strokePaths : [];
          for (const y of b) {
            const F = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
            if (!F.length) continue;
            if (y.closed && F.length >= 3 && qr(C, F)) return { item: I, geom: ce };
            const v = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
            for (let z = 0; z < F.length - 1; z += 1)
              if (Sc(C, F[z], F[z + 1]) <= v * v) return { item: I, geom: ce };
            if (F.length === 1 && jo(C, F[0]) <= v * v) return { item: I, geom: ce };
          }
          continue;
        }
        if (ue.type === "rasterObject") {
          const I = d(O(((R = ue.item) == null ? void 0 : R.id) || ue.id || ""));
          if (!I) continue;
          const ce = G(I);
          if (g(I, ce, C, te)) return { item: I, geom: ce };
          continue;
        }
        const be = ue.item;
        if (!be || !j(be) || !N) continue;
        const ve = D(be, N);
        if (ve && Number(ve.x) >= 0 && Number(ve.x) <= 1 && Number(ve.y) >= 0 && Number(ve.y) <= 1) {
          const I = G(be);
          if (I != null && I.visible) return { item: be, geom: I };
        }
      }
      return null;
    }
    const $ = [
      ...c(!1).slice().sort((U, de) => Number((de == null ? void 0 : de.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)).map((U) => {
        var de;
        return U.type === "strokeGroup" ? f(Y("paint", U.actionGroupId || U.id || "")) : U.type === "rasterObject" ? d(O(((de = U.item) == null ? void 0 : de.id) || U.id || "")) : U.item;
      }).filter(Boolean),
      ...n ? a().filter((U) => X(U)) : []
    ];
    for (const U of $) {
      if (J(U)) {
        const Se = G(U);
        if (!(Se != null && Se.visible)) continue;
        const te = Array.isArray(Se.strokePaths) ? Se.strokePaths : [];
        for (const N of te) {
          const ie = Array.isArray(N == null ? void 0 : N.points) ? N.points : [];
          if (!ie.length) continue;
          if (N.closed && ie.length >= 3 && qr(C, ie)) return { item: U, geom: Se };
          const ue = Math.max(8, Number((N == null ? void 0 : N.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < ie.length - 1; be += 1)
            if (Sc(C, ie[be], ie[be + 1]) <= ue * ue) return { item: U, geom: Se };
          if (ie.length === 1 && jo(C, ie[0]) <= ue * ue) return { item: U, geom: Se };
        }
        continue;
      }
      if (_(U)) {
        const Se = G(U);
        if (!(Se != null && Se.visible)) continue;
        if (g(U, Se, C)) return { item: U, geom: Se };
        continue;
      }
      const de = G(U);
      if (de.visible && qr(C, de.corners))
        return { item: U, geom: de };
    }
    return null;
  }
  function re(C, $, R = null) {
    if (!C || !C.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (j(R)) return nu(C, $);
    if (C.kind === "strokeGroup") {
      const U = C.corners.findIndex((Se) => jo(Se, $) <= 121);
      if (U >= 0) {
        const Se = C.corners[U], te = Se.x - C.center.x, N = Se.y - C.center.y, ie = te * N >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: U, cursor: ie };
      }
      const de = Array.isArray(C.strokePaths) ? C.strokePaths : [];
      for (const Se of de) {
        const te = Array.isArray(Se == null ? void 0 : Se.points) ? Se.points : [];
        if (Se.closed && te.length >= 3 && qr($, te)) return { kind: "move", cursor: "default" };
        const N = Math.max(8, Number((Se == null ? void 0 : Se.lineWidth) || 0) * 0.5 + 6);
        for (let ie = 0; ie < te.length - 1; ie += 1)
          if (Sc($, te[ie], te[ie + 1]) <= N * N) return { kind: "move", cursor: "default" };
      }
      return qr($, C.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (C.kind === "rasterObject") {
      const U = C.corners.findIndex((de) => jo(de, $) <= 121);
      if (U >= 0) {
        const de = C.corners[U], Se = de.x - C.center.x, te = de.y - C.center.y, N = Se * te >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: U, cursor: N };
      }
      return qr($, C.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return H_(C, $, {
      edges: i === "cutout" || X(R),
      resize: !(X(R) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function Q(C, $) {
    return {
      x0: Math.min(Number((C == null ? void 0 : C.x) || 0), Number(($ == null ? void 0 : $.x) || 0)),
      y0: Math.min(Number((C == null ? void 0 : C.y) || 0), Number(($ == null ? void 0 : $.y) || 0)),
      x1: Math.max(Number((C == null ? void 0 : C.x) || 0), Number(($ == null ? void 0 : $.x) || 0)),
      y1: Math.max(Number((C == null ? void 0 : C.y) || 0), Number(($ == null ? void 0 : $.y) || 0))
    };
  }
  function K(C, $) {
    return !!C && !!$ && Number($.x) >= Number(C.x0) && Number($.x) <= Number(C.x1) && Number($.y) >= Number(C.y0) && Number($.y) <= Number(C.y1);
  }
  function T(C, $) {
    if (!C || !($ != null && $.visible) || !Array.isArray($.corners)) return !1;
    if ($.corners.some((de) => K(C, de))) return !0;
    const R = (Number(C.x0) + Number(C.x1)) * 0.5, U = (Number(C.y0) + Number(C.y1)) * 0.5;
    return !!qr({ x: R, y: U }, $.corners);
  }
  function H(C) {
    if (pe(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ee("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ee("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ee("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ee("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ee("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ee(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ee("grabbing") : ee("default");
      return;
    }
    if (k()) {
      ee("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ee(GP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ee("default");
        return;
      }
      ee("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ee("default");
      return;
    }
    if (t.gizmoAxis) {
      ee("grab");
      return;
    }
    const $ = u(), R = $ ? G($) : null, U = $ ? h($) : !1, de = U ? { kind: "none", cursor: "default" } : re(R, C, $);
    if (!U && de.kind !== "none") {
      ee(de.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && se(C)) {
      ee("default");
      return;
    }
    ee(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(C) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: g,
        isActivePaintCursorVisible: k,
        isErpCamera: m,
        isItemLocked: h,
        isRasterObjectItem: _,
        isShotItem: X,
        isStickerItem: j,
        isStrokeGroupItem: J,
        makeRasterObjectSelectionId: O,
        makeStrokeGroupSelectionId: Y,
        objectGeom: G,
        screenPosToFrameAsErpPoint: W,
        setCanvasCursor: ee,
        syncPaintCursorElement: pe,
        worldDirToFrameLocalPoint: D
      } = C);
    },
    hitObjectAt: se,
    handleHit: re,
    rectFromPoints: Q,
    rectIntersectsGeom: T,
    updateCursor: H
  };
}
function N2(e) {
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
  let f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re = !1;
  function Q() {
    return re;
  }
  function K() {
    if (!o) return;
    if (re = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || J() && G()) {
      const te = T();
      re = te.visible, H(te);
      return;
    }
    const R = _(), U = X();
    if (!R && U.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const de = j(), Se = u2({
      type: d,
      selected: R,
      selectedItems: U,
      selectedKind: de,
      geom: U.length > 1 ? h(U) : se(R),
      allLocked: f(U),
      anyLocked: U.some((te) => W(te)),
      selectedLocked: W(R),
      activeAspect: ee(R) && O() ? lo : Fr(R),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: Y,
      isStickerHidden: D,
      canRestoreSelectedToInitial: g,
      iconSet: ze,
      cameraShot: t,
      coverage: a.coverage
    });
    H(Se);
  }
  function T() {
    const R = pe() && !n.interaction ? m().space : null;
    if (!(R != null && R.gizmo)) return { visible: !1 };
    const U = k(), de = R.stickers.find((ie) => ie.id === n.worldSelectedId), te = (de ? ld(de) : [R.gizmo.transform.position]).map((ie) => us(U, ie, r.width, r.height)).filter(Boolean), N = cS(U, R.gizmo.transform.position, R.gizmo.mode, r.width, r.height);
    return d2({ corners: te, gizmoBox: N, gizmoMode: R.gizmo.mode, camera: J() });
  }
  function H(R) {
    var N, ie;
    if (!R.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const U = (ue, be) => f2(R.anchor, ue, be, r.width, r.height), de = Math.max(1, Number(((N = n.menuSize) == null ? void 0 : N.w) || 220)), Se = Math.max(1, Number(((ie = n.menuSize) == null ? void 0 : ie.h) || 40)), te = U(de, Se);
    if (!te) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: te.left,
      top: te.top,
      items: R.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ue = o.getBoundingClientRect(), be = Math.round(Number((ue == null ? void 0 : ue.width) || 0)) || 220, ve = Math.round(Number((ue == null ? void 0 : ue.height) || 0)) || 40;
      n.menuSize = { w: be, h: ve, measured: !0 };
      const I = U(be, ve);
      I && (u.selectionMenu.left = I.left, u.selectionMenu.top = I.top);
    });
  }
  function C() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function $(R) {
    if (!c || !R || !R.isConnected) return;
    const U = String(R.getAttribute("data-tip") || "").trim();
    if (!U) return;
    u.tooltip.text = U, u.tooltip.visible = !0;
    const de = R;
    i.requestFrame(() => {
      var v, z;
      if (l.target !== de || !c || !(de != null && de.isConnected)) return;
      const Se = s.getBoundingClientRect(), te = de.getBoundingClientRect(), N = 8, ie = 12, ue = Math.round(Number(((v = c.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, be = Math.round(Number(((z = c.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, ve = !!de.closest(".pano-floating-left"), I = !!de.closest(".pano-frame-rail"), ce = !!de.closest(".pano-paint-footer") || !!de.closest(".pano-paint-color-float");
      let b = "", y = te.left - Se.left + te.width * 0.5 - ue * 0.5, F = te.top - Se.top - be - ie;
      if (de.closest(".pano-floating-top") && (F = te.bottom - Se.top + ie), ve)
        b = "tool-rail", y = te.right - Se.left + 10, F = te.top - Se.top + te.height * 0.5 - be * 0.5, y = Ee(y, N, Math.max(N, Se.width - ue - N)), F = Ee(F, N, Math.max(N, Se.height - be - N));
      else if (I)
        b = "frame-rail", y = te.left - Se.left - ue - 10, F = te.top - Se.top + te.height * 0.5 - be * 0.5, y = Ee(y, N, Math.max(N, Se.width - ue - N)), F = Ee(F, N, Math.max(N, Se.height - be - N));
      else if (ce) {
        b = "footer";
        const x = de.closest(".pano-paint-footer"), L = x ? x.getBoundingClientRect() : te;
        y = L.left - Se.left + L.width * 0.5 - ue * 0.5, F = L.bottom - Se.top + 5, y = Ee(y, N, Math.max(N, Se.width - ue - N)), F = Math.max(N, F);
      }
      y = Ee(y, N, Math.max(N, Se.width - ue - N)), F = Math.max(N, F), u.tooltip.left = y, u.tooltip.top = F, u.tooltip.variant = b, u.tooltip.visible = !0;
    });
  }
  return {
    connect(R) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: g,
        currentSpaceCamera: k,
        editorViewInput: m,
        getMultiSelectionGeom: h,
        getSelected: _,
        getSelectedItems: X,
        getSelectedKind: j,
        isCameraSelected: J,
        isErpCamera: O,
        isExternalSticker: Y,
        isFreeSpaceView: G,
        isItemLocked: W,
        isShotItem: ee,
        isSpaceView: pe,
        isStickerHidden: D,
        objectGeom: se
      } = R);
    },
    isWorldMenuShown: Q,
    updateSelectionMenu: K,
    hideTooltip: C,
    showTooltipFor: $
  };
}
function A2(e) {
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
    timeline: g,
    type: k,
    viewController: m
  } = e;
  let h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve, I, ce, b, y, F, v, z, x, L, S, M, E, q, le, ge, Z, he, _e, Ne, fe, ye, ne, p, A, w, P, B, me, V, oe, Ae, ke, Me, Ie, Re, je, We, $e, He, ae, Fe, Pe, Ve, Ye, Ge, Ke, pt, yt, At, Ct, zn, Xe, sn, Gt, ai, Gr, li, rn, yn, Wr, _r, ir, Oi, yo, xs, ks, Ms, bo, Kr, Dt, qn, or, vo, Fn, Ps, Ns, As, wr = null;
  function Cs(Ce) {
    g.selection && (g.selection = null, bo());
    const Oe = Ve(Ce);
    wr = Oe, Ct(Oe, !0), re(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const we = ne(), _t = ye(), lt = we || _t ? nw(vo(), Ce) : null;
    if (_t && lt) {
      Ce.preventDefault(), lt === "look" ? yn(Oe, Ce.pointerId) : rn(lt, Oe, Ce.pointerId);
      return;
    }
    if (lt === "look") {
      Ce.preventDefault();
      const Je = Ye(Ce);
      n.interaction = { kind: "view", last: Je, lastTs: performance.now() }, m.startDrag(Je.x, Je.y, Ce.pointerId, performance.now()), Dt(Oe), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (lt) {
      Ce.preventDefault(), Wr(lt, Oe, Ce.pointerId);
      return;
    }
    if ((we || _t) && Ce.button !== 0) {
      Ce.preventDefault();
      return;
    }
    if (Ce.button === 1) {
      if (Ce.preventDefault(), n.mode === "frame") {
        const Je = ue();
        if (!Je || a || Je.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Je,
          last: Oe,
          start: {
            yaw_deg: Number(Je.yaw_deg || 0),
            pitch_deg: Number(Je.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Je = n.mode === "unwrap" ? Oe : Ye(Ce);
        n.interaction = { kind: "view", last: Je, lastTs: performance.now() }, m.startDrag(Je.x, Je.y, Ce.pointerId, performance.now());
      }
      Dt(Oe), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (Ce.button !== 0) return;
    if (n.mode === "frame" && (Ce.altKey || Ce.shiftKey) && !a) {
      const Je = ue(), Ue = b(Je);
      if (!Je || Je.locked === !0 || !Ue) return;
      const et = hg({
        frame: Ue,
        point: Oe,
        startRollDeg: Number(Je.roll_deg ?? Je.rot_deg ?? 0),
        shiftKey: Ce.shiftKey,
        altKey: Ce.altKey,
        allowAlt: !0
      });
      if (!et) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Je,
        center: et.center,
        lastAngle: et.lastAngle,
        accumulatedRad: et.accumulatedRad,
        rollGesture: et,
        start: { roll_deg: Number(Je.roll_deg ?? Je.rot_deg ?? 0) },
        changed: !1,
        altStarted: et.source === "alt",
        source: et.source
      }, t.setPointerCapture(Ce.pointerId), Ce.preventDefault(), ks(), Pe({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      yn(Oe, Ce.pointerId), Ce.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && wo(Ce, Oe);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (ir() || Oi())) {
      if (!Ie()) return;
      _r();
      const Je = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, et = n.mode === "frame" && Oi() ? ue() : null, qt = { kind: "ERP_GLOBAL" }, Pt = et ? Ke(Oe, et, performance.now()) : Ge(Oe, performance.now());
      if (!Pt) {
        Dt(Oe);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Je,
        _livePreviewToken: Bi("live"),
        stroke: Ue === "lasso_fill" ? pe(Je, Ue, [Pt], qt) : ee(Je, Ue, [Pt], qt)
      }, Ne();
      const xr = be(n.interaction);
      if (xr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, xr), n.interaction.kind === "paint_stroke") {
          const Fi = n.paintEngine.ensureTarget(xr), Ti = Number((Pt == null ? void 0 : Pt.u) ?? (Pt == null ? void 0 : Pt.x) ?? 0), Di = Number((Pt == null ? void 0 : Pt.v) ?? (Pt == null ? void 0 : Pt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Fi, Ti, Di, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, xr);
      Dt(Oe), t.setPointerCapture(Ce.pointerId), Pe();
      return;
    }
    const xt = E(), Ze = M(), Qe = xt.length > 1 ? F(xt) : Ze ? Me(Ze) : null;
    if (n.primaryTool === "cursor" && (Ce.ctrlKey || Ce.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Oe, current: Oe }, Dt(Oe), t.setPointerCapture(Ce.pointerId), Pe({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && D() && ne() && li(Ce, Oe) || n.primaryTool === "cursor" && c && B() && Is(Ce, Oe)) return;
    if (xt.length > 1 && (Qe != null && Qe.visible)) {
      if ((xt.some((Ue) => p(Ue)) ? { kind: "none" } : Z(Qe, Oe)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: xt.map((Ue) => Ue),
          offset: { x: Oe.x - Qe.center.x, y: Oe.y - Qe.center.y },
          startCenter: { x: Qe.center.x, y: Qe.center.y },
          stickerSnapshots: xt.filter((Ue) => me(Ue)).map((Ue) => ({
            id: String(Ue.id || ""),
            yaw_deg: Number(We(Ue).yaw_deg || 0),
            pitch_deg: Number(We(Ue).pitch_deg || 0),
            center: (() => {
              var qt, Pt;
              const et = Me(Ue);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Oe.x, y: Oe.y };
            })()
          })),
          strokeSnapshots: xt.filter((Ue) => V(Ue)).map((Ue) => ({
            id: String(Ue.actionGroupId || Ue.id || ""),
            layerKind: String(Ue.layerKind || "paint"),
            snapshot: un(le(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: un(de(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var qt, Pt;
              const et = Me(Ue);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Oe.x, y: Oe.y };
            })(),
            centerUv: q(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: xt.filter((Ue) => A(Ue)).map((Ue) => ({
            id: Re(Ue.rasterObjectId || Ue.id || ""),
            snapshot: un(x().find((et) => String((et == null ? void 0 : et.id) || "") === Re(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var qt, Pt;
              const et = Me(Ue);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Oe.x, y: Oe.y };
            })(),
            centerUv: z(Ue)
          }))
        }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
        return;
      }
    } else if (Ze && (Qe != null && Qe.visible)) {
      const Je = p(Ze) ? { kind: "none" } : Z(Qe, Oe, Ze);
      if (Je.kind === "scale") {
        n.interaction = V(Ze) ? {
          kind: "scale_stroke_group",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Oe.x - Qe.center.x, Oe.y - Qe.center.y)),
          snapshot: un(le(Ze.actionGroupId, Ze.layerKind)),
          frameSnapshot: un(de(Ze.actionGroupId, Ze.layerKind)),
          cursor: Je.cursor
        } : A(Ze) ? {
          kind: "scale_raster_object",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Oe.x - Qe.center.x, Oe.y - Qe.center.y)),
          snapshot: un(x().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Re(Ze.rasterObjectId || Ze.id || ""))),
          cursor: Je.cursor
        } : {
          kind: "scale",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Oe.x - Qe.center.x, Oe.y - Qe.center.y)),
          startHFOV: Number(We(Ze).hFOV_deg || 20),
          startVFOV: Number(We(Ze).vFOV_deg || 20),
          cursor: Je.cursor
        }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "scale_x" || Je.kind === "scale_y") {
        n.interaction = {
          kind: Je.kind,
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Oe.x - Qe.center.x, Oe.y - Qe.center.y)),
          startHFOV: Number(We(Ze).hFOV_deg || 20),
          startVFOV: Number(We(Ze).vFOV_deg || 20),
          cursor: Je.cursor,
          edge: Je.edge
        }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "rotate") {
        n.interaction = V(Ze) ? {
          kind: "rotate_stroke_group",
          item: Ze,
          center: Qe.center,
          startAng: Math.atan2(Oe.y - Qe.center.y, Oe.x - Qe.center.x),
          snapshot: un(le(Ze.actionGroupId, Ze.layerKind)),
          frameSnapshot: un(de(Ze.actionGroupId, Ze.layerKind))
        } : {
          kind: "rotate",
          item: Ze,
          center: Qe.center,
          startRot: Number(We(Ze).rot_deg || We(Ze).roll_deg || 0),
          startAng: Math.atan2(Oe.y - Qe.center.y, Oe.x - Qe.center.x)
        }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "move") {
        if (V(Ze)) {
          const Ue = n.mode === "frame" ? (() => {
            const et = ue();
            return et ? Ke(Oe, et, performance.now()) : null;
          })() : Ge(Oe, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Ze,
            startUv: Ue,
            snapshot: un(le(Ze.actionGroupId, Ze.layerKind)),
            frameSnapshot: un(de(Ze.actionGroupId, Ze.layerKind))
          }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
          return;
        }
        if (A(Ze)) {
          const Ue = n.mode === "frame" ? (() => {
            const et = ue();
            return et ? Ke(Oe, et, performance.now()) : null;
          })() : Ge(Oe, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Ze,
            startUv: Ue,
            snapshot: un(x().find((et) => String((et == null ? void 0 : et.id) || "") === Re(Ze.rasterObjectId || Ze.id || "")))
          }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Ze,
          offset: { x: Oe.x - Qe.center.x, y: Oe.y - Qe.center.y }
        }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
        return;
      }
    }
    const rt = _e(Oe);
    if (rt) {
      const Je = n.selectedId !== rt.item.id;
      if (Je && n.selectedId && ($e(), H()), zn(rt.item), d && Je && (n.cutoutAspectOpen = !1), Je && or(), qn(), Pe(), p(rt.item)) {
        Dt(Oe);
        return;
      }
      n.interaction = {
        kind: V(rt.item) ? "move_stroke_group" : A(rt.item) ? "move_raster_object" : "move",
        item: rt.item,
        offset: { x: Oe.x - rt.geom.center.x, y: Oe.y - rt.geom.center.y },
        startUv: V(rt.item) || A(rt.item) ? n.mode === "frame" ? (() => {
          const Ue = ue();
          return Ue ? Ke(Oe, Ue, performance.now()) : null;
        })() : Ge(Oe, performance.now()) : null,
        snapshot: V(rt.item) ? un(le(rt.item.actionGroupId, rt.item.layerKind)) : A(rt.item) ? un(x().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Re(rt.item.rasterObjectId || rt.item.id || ""))) : null,
        frameSnapshot: V(rt.item) ? un(de(rt.item.actionGroupId, rt.item.layerKind)) : null
      }, Dt(Oe), t.setPointerCapture(Ce.pointerId);
      return;
    }
    const Xn = !!n.selectedId;
    Xn && ($e(), H()), Q(), Xn && or(), qn(), Pe(), n.mode === "pano" && wo(Ce, Oe);
  }
  function Ur(Ce, Oe) {
    return i.gizmoPointer(Ce, C(), Oe.x, Oe.y, t.width, t.height);
  }
  function Is(Ce, Oe) {
    var Qe;
    const we = (Qe = U().space) == null ? void 0 : Qe.gizmo;
    if (we && Ur("hover", Oe) !== null && Ur("down", Oe))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: we.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: we.transform,
        base: Ai(At(), n.frame),
        changed: !1
      }, t.setPointerCapture(Ce.pointerId), Dt(Oe), !0;
    const _t = E(), lt = M(), xt = _t.length > 1 ? _t.some((rt) => p(rt)) ? "none" : Z(F(_t), Oe).kind : lt && !p(lt) ? Z(Me(lt), Oe, lt).kind : "none";
    if (xt !== "none" && xt !== "move") return !1;
    const Ze = i.pickSticker(C(), Oe.x, Oe.y, t.width, t.height);
    return u.stickers.some((rt) => rt.id === Ze && rt.placement === "world") ? (n.worldSelectedId !== Ze && (n.selectedId && ($e(), H()), yt(Ze), or(), qn(), xs(), Pe()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Ce.pointerId), !0) : !1;
  }
  function So(Ce) {
    var _t;
    const we = !!(n.worldSelectedId || fe()) && n.primaryTool === "cursor" && B() && !!((_t = U().space) != null && _t.gizmo) ? Ur("hover", Ce) : null;
    we !== n.gizmoAxis && (n.gizmoAxis = we, l.backgroundDirty = !0, Pe({ localOnly: !0, reason: dt.VIEW }));
  }
  function Es(Ce, Oe) {
    const we = Ur("move", Oe);
    if (we && Ce.camera) {
      for (const [lt, xt] of Object.entries(If(Ce.mode, Ce.base, Ce.start, we))) hn(u.camera, lt, n.frame, xt);
      yo(), Ce.changed = !0, r.request("sidePanel"), Pe({ localOnly: !0 });
      return;
    }
    const _t = u.stickers.find((lt) => lt.id === Ce.id);
    !we || !_t || (Tv(_t, n.frame, If(Ce.mode, Ce.base, Ce.start, we)), Ce.changed = !0, oe(), r.request("sidePanel"), Pe({ localOnly: !0 }));
  }
  function _o(Ce) {
    n.interaction = null, n.gizmoAxis = null, Ce.kind === "world_gizmo" && (Ur("up", n.pointerPos), l.backgroundDirty = !0, Ce.changed && ($e(), K(), or())), Dt(n.pointerPos), Pe();
  }
  function wo(Ce, Oe) {
    if (ne()) {
      const _t = vo().emptyLeft;
      _t && Wr(_t, Oe, Ce.pointerId);
      return;
    }
    const we = Ye(Ce);
    n.interaction = { kind: "view", last: we, lastTs: performance.now() }, m.startDrag(we.x, we.y, Ce.pointerId, performance.now()), Dt(Oe), t.setPointerCapture(Ce.pointerId);
  }
  function Os(Ce, Oe) {
    if (!f || !je.playing || (je.stop(), Ce.kind === "frame_pan")) return;
    if (Ce.kind === "frame_orbit") {
      const lt = Se();
      lt && (Ce.pivot = ie(lt, N(lt), Oe));
      return;
    }
    if (Ce.kind === "world_gizmo") {
      const lt = u.stickers.find((xt) => xt.id === Ce.id);
      Ce.camera ? Ce.base = $() : lt && (Ce.base = Ai(lt, n.frame));
      return;
    }
    if (Ce.kind === "move_multi") {
      const lt = F(Ce.items);
      if (!(lt != null && lt.visible)) return;
      Ce.offset = { x: Oe.x - lt.center.x, y: Oe.y - lt.center.y }, Ce.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const xt of Ce.stickerSnapshots) {
        const Ze = Ce.items.find((rt) => String((rt == null ? void 0 : rt.id) || "") === xt.id), Qe = Ze ? Me(Ze) : null;
        Qe != null && Qe.visible && (xt.yaw_deg = Number(We(Ze).yaw_deg || 0), xt.pitch_deg = Number(We(Ze).pitch_deg || 0), xt.center = { x: Qe.center.x, y: Qe.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Ce.kind)) return;
    const we = Me(Ce.item);
    if (!(we != null && we.visible)) return;
    const _t = We(Ce.item);
    if (Ce.kind === "move") {
      Ce.offset = { x: Oe.x - we.center.x, y: Oe.y - we.center.y };
      return;
    }
    if (Ce.center = we.center, Ce.kind === "rotate") {
      Ce.startRot = Number(_t.rot_deg || _t.roll_deg || 0), Ce.startAng = Math.atan2(Oe.y - we.center.y, Oe.x - we.center.x);
      return;
    }
    Ce.startDist = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)), Ce.startHFOV = Number(_t.hFOV_deg || 20), Ce.startVFOV = Number(_t.vFOV_deg || 20);
  }
  function Il(Ce) {
    var _t, lt, xt, Ze, Qe, rt, Xn, Je, Ue, et, qt, Pt, xr, Fi, Ti, Di, ko, Ts, Ds, Ls, Mo, Rs;
    const Oe = Ve(Ce);
    if (Ct(Oe, !0), !n.interaction) {
      So(Oe), Dt(Oe);
      return;
    }
    Dt(Oe);
    const we = n.interaction;
    if (wr && (Oe.x !== wr.x || Oe.y !== wr.y)) {
      const ct = wr;
      wr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(we.kind) || Os(we, ct);
    }
    if (we.kind !== "world_select") {
      if (we.kind === "world_gizmo") {
        Es(we, Oe);
        return;
      }
      if (we.kind === "paint_stroke") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let ft = !1;
        ct.forEach((mt) => {
          const bt = Ve(mt);
          if (n.mode === "frame") {
            const bn = ue(), Rt = bn ? b(bn) : null;
            if (Rt) {
              const an = (bt.x - Rt.x) / Math.max(1, Rt.w), vt = (bt.y - Rt.y) / Math.max(1, Rt.h);
              if (!(an >= 0 && an <= 1 && vt >= 0 && vt <= 1)) {
                we._outOfFrame = !0;
                return;
              }
              we._outOfFrame && (we._outOfFrame = !1, _(we));
            }
          }
          j(we, bt, performance.now()) && (ft = !0);
        }), ft && Pe({ localOnly: !0, reason: dt.PAINT });
        return;
      }
      if (we.kind === "paint_lasso_fill") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let ft = !1;
        if (ct.forEach((mt) => {
          const bt = Ve(mt);
          if (n.mode === "frame") {
            const bn = ue(), Rt = bn ? b(bn) : null;
            if (Rt) {
              const an = (bt.x - Rt.x) / Math.max(1, Rt.w), vt = (bt.y - Rt.y) / Math.max(1, Rt.h);
              if (!(an >= 0 && an <= 1 && vt >= 0 && vt <= 1)) {
                we._outOfFrame = !0;
                return;
              }
              we._outOfFrame && (we._outOfFrame = !1, h(we));
            }
          }
          X(we, bt, performance.now()) && (ft = !0);
        }), ft) {
          const mt = be(we);
          mt && n.paintEngine.updateActiveStroke(we.stroke, mt), Pe({ localOnly: !0, reason: dt.PAINT });
        }
        return;
      }
      if (we.kind === "view") {
        const ct = performance.now(), ft = n.mode === "unwrap" ? Oe : Ye(Ce);
        m.moveDrag(ft.x, ft.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), we.lastTs = ct, we.last = ft, Pe({ localOnly: !0, reason: dt.VIEW });
        return;
      }
      if (we.kind === "frame_pan" || we.kind === "frame_orbit") {
        R(we, Oe);
        return;
      }
      if (we.kind === "space_pan" || we.kind === "space_orbit") {
        const ct = ai();
        sn(we.kind === "space_pan" ? vm(ct, Oe.x - we.last.x, Oe.y - we.last.y, t.width, t.height, we.depth) : bm(ct, Oe.x - we.last.x, Oe.y - we.last.y, t.height, we.pivot)), we.last = Oe;
        return;
      }
      if (we.kind === "pan_frame") {
        const ct = ce(we.shot);
        if (!ct || !we.shot) return;
        const ft = Oe.x - we.last.x, mt = Oe.y - we.last.y, bt = gg(we.shot, {
          dx: ft,
          dy: mt,
          focalPx: ct.focalPx,
          invertX: ((_t = u.ui_settings) == null ? void 0 : _t.invert_view_x) === !0,
          invertY: ((lt = u.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        we.shot.yaw_deg = bt.yaw_deg, we.shot.pitch_deg = bt.pitch_deg, we.changed = we.changed || Math.abs(ft) > 0 || Math.abs(mt) > 0, we.last = Oe, Pe({ localOnly: !0 });
        return;
      }
      if (we.kind === "roll_frame") {
        if (we.source === "knob") return;
        Y(we, Oe, Ce);
        return;
      }
      if (we.kind === "move") {
        const ct = Oe.x - we.offset.x, ft = Oe.y - we.offset.y;
        if (n.mode === "frame" && d) {
          const mt = ue(), bt = b(mt);
          if (!mt || !bt) return;
          const bn = {
            x: Ee((ct - bt.x) / Math.max(1, bt.w), 0, 1),
            y: Ee((ft - bt.y) / Math.max(1, bt.h), 0, 1)
          }, Rt = te(mt, bn);
          if (!Rt) return;
          const an = Qs(Rt);
          Fn(we.item, { yaw_deg: an.yaw, pitch_deg: an.pitch });
        } else if (n.mode === "unwrap") {
          const mt = ge(), bt = Ee((ct - mt.x) / Math.max(mt.w, 1), 0, 1), bn = Ee((ft - mt.y) / Math.max(mt.h, 1), 0, 1);
          Fn(we.item, { yaw_deg: jt(bt * 360 - 180), pitch_deg: Ee(90 - bn * 180, -90, 90) });
        } else {
          const mt = pt(ct, ft), bt = Qs(mt);
          Fn(we.item, { yaw_deg: bt.yaw, pitch_deg: bt.pitch });
        }
        me(we.item) && oe(), Pe({ localOnly: !0 });
        return;
      }
      if (we.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const bt = ue();
          return bt ? Ke(Oe, bt, performance.now()) : null;
        })() : Ge(Oe, performance.now());
        if (!ct || !we.startUv) return;
        const ft = Gt(Number(ct.u || 0), Number(we.startUv.u || 0)), mt = Number(ct.v || 0) - Number(we.startUv.v || 0);
        G((xt = we.item) == null ? void 0 : xt.actionGroupId, ft, mt, we.snapshot, (Ze = we.item) == null ? void 0 : Ze.layerKind, we.frameSnapshot) && (ke({ rebuildPaintEngine: !1 }), Pe({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (we.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const bt = ue();
          return bt ? Ke(Oe, bt, performance.now()) : null;
        })() : Ge(Oe, performance.now());
        if (!ct || !we.startUv) return;
        const ft = Gt(Number(ct.u || 0), Number(we.startUv.u || 0)), mt = Number(ct.v || 0) - Number(we.startUv.v || 0);
        J(((Qe = we.item) == null ? void 0 : Qe.rasterObjectId) || ((rt = we.item) == null ? void 0 : rt.id) || "", ft, mt, we.snapshot) && (Ae(), Pe({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (we.kind === "scale_raster_object") {
        const ft = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)) / Math.max(1, Number(we.startDist || 1));
        O(((Xn = we.item) == null ? void 0 : Xn.rasterObjectId) || ((Je = we.item) == null ? void 0 : Je.id) || "", ft, we.snapshot) && (Ae(), Pe({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (we.kind === "move_multi") {
        const ct = Oe.x - Number(((Ue = we.offset) == null ? void 0 : Ue.x) || 0), ft = Oe.y - Number(((et = we.offset) == null ? void 0 : et.y) || 0);
        let mt = !1, bt = !1, bn = !1;
        const Rt = ct - Number(((qt = we.startCenter) == null ? void 0 : qt.x) || ct), an = ft - Number(((Pt = we.startCenter) == null ? void 0 : Pt.y) || ft);
        for (const vt of Array.isArray(we.stickerSnapshots) ? we.stickerSnapshots : []) {
          const ln = (k === "cutout" ? ve() : y()).find((De) => String((De == null ? void 0 : De.id) || "") === String(vt.id || ""));
          if (!ln || !me(ln)) continue;
          const on = {
            x: Number(((xr = vt.center) == null ? void 0 : xr.x) || 0) + Rt,
            y: Number(((Fi = vt.center) == null ? void 0 : Fi.y) || 0) + an
          };
          if (n.mode === "frame" && d) {
            const De = ue(), qe = b(De);
            if (!De || !qe) continue;
            const Qt = {
              x: Ee((on.x - qe.x) / Math.max(1, qe.w), 0, 1),
              y: Ee((on.y - qe.y) / Math.max(1, qe.h), 0, 1)
            }, en = te(De, Qt);
            if (!en) continue;
            const sr = Qs(en);
            Fn(ln, { yaw_deg: sr.yaw, pitch_deg: sr.pitch });
          } else if (n.mode === "unwrap") {
            const De = ge(), qe = Ee((on.x - De.x) / Math.max(De.w, 1), 0, 1), Qt = Ee((on.y - De.y) / Math.max(De.h, 1), 0, 1);
            Fn(ln, { yaw_deg: jt(qe * 360 - 180), pitch_deg: Ee(90 - Qt * 180, -90, 90) });
          } else {
            const De = pt(on.x, on.y), qe = Qs(De);
            Fn(ln, { yaw_deg: qe.yaw, pitch_deg: qe.pitch });
          }
          mt = !0;
        }
        for (const vt of Array.isArray(we.strokeSnapshots) ? we.strokeSnapshots : []) {
          const ln = {
            x: Number(((Ti = vt.center) == null ? void 0 : Ti.x) || 0) + Rt,
            y: Number(((Di = vt.center) == null ? void 0 : Di.y) || 0) + an
          }, on = n.mode === "frame" ? (() => {
            const qe = ue();
            return qe ? Ke(ln, qe, performance.now()) : null;
          })() : Ge(ln, performance.now()), De = vt.centerUv || null;
          if (on && De) {
            const qe = Gt(Number(on.u || 0), Number(De.u || 0)), Qt = Number(on.v || 0) - Number(De.v || 0);
            G(vt.id, qe, Qt, vt.snapshot, vt.layerKind, vt.frameSnapshot) && (mt = !0, bt = !0);
          }
        }
        for (const vt of Array.isArray(we.rasterSnapshots) ? we.rasterSnapshots : []) {
          const ln = {
            x: Number(((ko = vt.center) == null ? void 0 : ko.x) || 0) + Rt,
            y: Number(((Ts = vt.center) == null ? void 0 : Ts.y) || 0) + an
          }, on = n.mode === "frame" ? (() => {
            const qe = ue();
            return qe ? Ke(ln, qe, performance.now()) : null;
          })() : Ge(ln, performance.now()), De = vt.centerUv || null;
          if (on && De) {
            const qe = Gt(Number(on.u || 0), Number(De.u || 0)), Qt = Number(on.v || 0) - Number(De.v || 0);
            J(vt.id, qe, Qt, vt.snapshot) && (mt = !0, bn = !0);
          }
        }
        mt && (bt ? ke({ rebuildPaintEngine: !1 }) : bn ? Ae() : oe(), Pe({ localOnly: !0 }));
        return;
      }
      if (we.kind === "scale_stroke_group") {
        const ft = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)) / Math.max(1, Number(we.startDist || 1));
        W((Ds = we.item) == null ? void 0 : Ds.actionGroupId, ft, 0, we.snapshot, (Ls = we.item) == null ? void 0 : Ls.layerKind, we.frameSnapshot) && (ke({ rebuildPaintEngine: !1 }), Pe({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (we.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Oe.y - we.center.y, Oe.x - we.center.x) - Number(we.startAng || 0)) * Ci;
        Ce.shiftKey && (ct = Math.round(ct / 45) * 45), W((Mo = we.item) == null ? void 0 : Mo.actionGroupId, 1, ct, we.snapshot, (Rs = we.item) == null ? void 0 : Rs.layerKind, we.frameSnapshot) && (ke({ rebuildPaintEngine: !1 }), Pe({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (we.kind === "marquee_select") {
        we.current = Oe, Pe({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (we.kind === "scale") {
        const ft = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)) / we.startDist;
        Fn(we.item, { hFOV_deg: Ee(we.startHFOV * ft, 1, 179), vFOV_deg: Ee(we.startVFOV * ft, 1, 179) }), w(we.item) || (we.item.aspect_id = ki(we.item)), me(we.item) && oe(), Pe({ localOnly: !0 });
        return;
      }
      if (we.kind === "scale_x") {
        const ft = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)) / we.startDist;
        Fn(we.item, { hFOV_deg: Ee(we.startHFOV * ft, 1, 179) }), w(we.item) || (we.item.aspect_id = ki(we.item)), me(we.item) && oe(), Pe({ localOnly: !0 });
        return;
      }
      if (we.kind === "scale_y") {
        const ft = Math.max(1, Math.hypot(Oe.x - we.center.x, Oe.y - we.center.y)) / we.startDist;
        Fn(we.item, { vFOV_deg: Ee(we.startVFOV * ft, 1, 179) }), w(we.item) || (we.item.aspect_id = ki(we.item)), me(we.item) && oe(), Pe({ localOnly: !0 });
        return;
      }
      if (we.kind === "rotate") {
        let ft = (Math.atan2(Oe.y - we.center.y, Oe.x - we.center.x) - we.startAng) * Ci, mt = we.startRot - ft;
        Ce.shiftKey && (mt = Math.round(mt / 45) * 45), Fn(we.item, { [me(we.item) ? "rot_deg" : "roll_deg"]: mt }), me(we.item) && oe(), Pe({ localOnly: !0 });
      }
    }
  }
  function El() {
    var Oe, we, _t, lt, xt, Ze, Qe;
    const Ce = n.interaction;
    if (!((Ce == null ? void 0 : Ce.kind) === "roll_frame" && Ce.source === "knob")) {
      if ((Ce == null ? void 0 : Ce.kind) === "space_pan" || (Ce == null ? void 0 : Ce.kind) === "space_orbit") {
        n.interaction = null, Dt(n.pointerPos), qn();
        return;
      }
      if ((Ce == null ? void 0 : Ce.kind) === "world_select" || (Ce == null ? void 0 : Ce.kind) === "world_gizmo") {
        _o(Ce);
        return;
      }
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "paint_stroke" || ((we = n.interaction) == null ? void 0 : we.kind) === "paint_lasso_fill") {
        Ne();
        const rt = T(n.interaction), Xn = !!n.interaction._hasCommittedSegments;
        if (rt || Xn) {
          ke();
          const Je = String(((_t = n.interaction.stroke) == null ? void 0 : _t.actionGroupId) || "").trim();
          if (Je) {
            const et = v().find((qt) => String((qt == null ? void 0 : qt.actionGroupId) || "") === Je);
            et && (et.frame = null);
          }
          const Ue = be(n.interaction);
          Ue && (rt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Fe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), $e(), H(), or(), qn(), o.setDirtyCanvas(!0, !0), Pe();
        } else {
          const Je = be(n.interaction);
          Je && n.paintEngine.cancelActiveStroke(Je);
        }
      } else if (((xt = n.interaction) == null ? void 0 : xt.kind) === "marquee_select") {
        const rt = He(n.interaction.start, n.interaction.current), Je = [
          ...k === "cutout" ? I().filter((Ue) => !P(Ue)) : [...y()],
          ...S(),
          ...L()
        ].filter((Ue) => ae(rt, Me(Ue)));
        Xe(Je, ((Ze = Je[Je.length - 1]) == null ? void 0 : Ze.id) || null), d && Je.length && (n.cutoutAspectOpen = !1), or(), qn(), Pe();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Qe = n.interaction) == null ? void 0 : Qe.kind))
        n.interaction.changed && ($e(), K(), or());
      else if (n.interaction && n.interaction.kind !== "view") {
        let rt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (rt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (rt = !0), rt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? ke({ rebuildPaintEngine: !0 }) : Ae()), $e(), H(), o.setDirtyCanvas(!0, !0), Ms(), qn(), Pe();
      }
      n.interaction = null, (Ce == null ? void 0 : Ce.kind) === "roll_frame" && he(), Ne(), Ce && Ce.kind === "view" && Gr(() => m.endDrag(performance.now())), Kr(), qn(), Dt(n.pointerPos), Pe();
    }
  }
  function Fs() {
    var Ce, Oe, we, _t, lt;
    if (!se()) {
      if (((Ce = n.interaction) == null ? void 0 : Ce.kind) === "world_select" || ((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_gizmo") {
        _o(n.interaction);
        return;
      }
      if (((we = n.interaction) == null ? void 0 : we.kind) === "view" && Gr(() => m.endDrag(performance.now())), ((_t = n.interaction) == null ? void 0 : _t.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        Ne();
        const xt = be(n.interaction);
        xt && n.paintEngine.cancelActiveStroke(xt);
      }
      n.interaction = null, Ne(), Kr(), Dt(n.pointerPos), Pe({ localOnly: !0 });
    }
  }
  function xo(Ce) {
    const Oe = Ve(Ce), we = Ct(Oe, !0);
    n.interaction || (Dt(Oe), we && n.mode === "frame" && n.primaryTool === "cursor" && Pe({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function Ol(Ce) {
    if (n.mode === "frame") {
      const Oe = Ve(Ce), we = Fa(Ce);
      we && _r(), we && ye() ? Ps(Oe, -we) : we && Ns(Oe, we) && Pe({ localOnly: !0 }), Ce.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (re(), ne()) {
        const Oe = Fa(Ce);
        Oe && As(Ve(Ce), -Oe);
      } else m.applyWheelEvent(Ce) && Pe({ localOnly: !0, reason: dt.VIEW });
      Ce.preventDefault();
    }
  }
  return {
    connect(Ce) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: _,
        appendLassoPoint: X,
        appendPaintPoint: j,
        applyRasterObjectOffset: J,
        applyRasterObjectTransform: O,
        applySharedRollInteractionPoint: Y,
        applyStrokeGroupOffset: G,
        applyStrokeGroupTransform: W,
        buildFreehandStrokeRecord: ee,
        buildLassoFillStrokeRecord: pe,
        cameraShoots: D,
        cancelFrameCameraGesture: se,
        cancelViewTransition: re,
        clearSelection: Q,
        commitAndRefreshNode: K,
        commitPaintInteraction: T,
        commitState: H,
        currentSpaceCamera: C,
        cutoutCamera: $,
        dragFrame: R,
        editorViewInput: U,
        ensureGroupFrame: de,
        frameContext: Se,
        frameLocalPointToWorldDir: te,
        frameSpaceView: N,
        frameTarget: ie,
        getActiveCutoutShot: ue,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: ve,
        getCutoutSelectableItemsForHit: I,
        getFrameViewLayout: ce,
        getFrameViewRect: b,
        getList: y,
        getMultiSelectionGeom: F,
        getPaintingGroupList: v,
        getRasterObjectCenterUv: z,
        getRasterObjectList: x,
        getSelectableRasterObjectItems: L,
        getSelectableStrokeGroupItems: S,
        getSelected: M,
        getSelectedItems: E,
        getStrokeGroupCenterUv: q,
        getStrokeGroupStrokes: le,
        getUnwrapRect: ge,
        handleHit: Z,
        hideTooltip: he,
        hitObjectAt: _e,
        invalidateLivePaintPreviewCaches: Ne,
        isCameraSelected: fe,
        isFreeFrameView: ye,
        isFreeSpaceView: ne,
        isItemLocked: p,
        isRasterObjectItem: A,
        isSceneSticker: w,
        isShotItem: P,
        isSpaceView: B,
        isStickerItem: me,
        isStrokeGroupItem: V,
        markObjectVisualsDirty: oe,
        markPaintCompositeVisualsDirty: Ae,
        markPaintStrokeVisualsDirty: ke,
        objectGeom: Me,
        paintingShown: Ie,
        parseRasterObjectSelectionId: Re,
        playback: je,
        poseOf: We,
        pushHistory: $e,
        rectFromPoints: He,
        rectIntersectsGeom: ae,
        refreshPaintEngineRevisionCache: Fe,
        requestDraw: Pe,
        screenPos: Ve,
        screenPosCss: Ye,
        screenPosToErpPoint: Ge,
        screenPosToFrameAsErpPoint: Ke,
        screenToWorldDir: pt,
        selectWorldSticker: yt,
        selectedWorldSticker: At,
        setPointerPos: Ct,
        setSelectedItem: zn,
        setSelectedItems: Xe,
        setSpaceView: sn,
        shortestWrappedDelta: Gt,
        spaceViewState: ai,
        startAnimation: Gr,
        startCameraPress: li,
        startFrameDrag: rn,
        startPanFrame: yn,
        startSpaceDrag: Wr,
        stopTimelinePlayback: _r,
        supportsErpPainting: ir,
        supportsFramePainting: Oi,
        syncCutoutShot: yo,
        syncFloatingViewButtonState: xs,
        syncFrameRollKnob: ks,
        syncSidePanelControls: Ms,
        syncTimeline: bo,
        syncViewToggleState: Kr,
        updateCursor: Dt,
        updateSelectionMenu: qn,
        updateSidePanel: or,
        viewControls: vo,
        writePose: Fn,
        zoomFrameAt: Ps,
        zoomFrameViewAt: Ns,
        zoomSpaceAt: As
      } = Ce);
    },
    onCanvasPointerDown: Cs,
    worldGizmoPointer: Ur,
    hoverWorldGizmo: So,
    onCanvasPointerMove: Il,
    onCanvasPointerUp: El,
    onCanvasPointerCancel: Fs,
    onCanvasMouseMove: xo,
    onCanvasWheel: Ol
  };
}
function C2(e) {
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
  let f, g, k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te;
  function N(ve, I, ce = !1) {
    var L;
    H();
    const b = a && n.mode === "frame" ? _() : null, y = b || J(), F = b ? "shot" : Y(), v = K();
    if (v && !Se(v) || !v && (!y || F === "stroke" || G(y))) return;
    const z = (((L = u.sidePanel) == null ? void 0 : L.params) || []).find((S) => S.key === ve);
    if (!z || z.enabled === !1) return;
    let x = Number(I);
    if (Number.isNaN(x) && (x = 0), (v || t) && VP.has(ve) ? x = ve === "scale" ? Math.max(x, Kg) : x : x = Ee(x, Number(z.min), Number(z.max)), ve === "yaw_deg" && (x = jt(x)), !v && t && ve.startsWith("position_")) {
      $(), Iv(l.camera, n.frame, ve, x), de(), Q(), ce && re();
      return;
    }
    if (v) {
      Fv(v, n.frame, ve, x), pe(), de(), Q(), ce && re();
      return;
    }
    ve === "opacity" ? Ev(y, n.frame, x / 100) : te(y, { [ve]: x }), a && !W(y) && (ve === "hFOV_deg" || ve === "vFOV_deg") && (y.aspect_id = ki(y)), de(), Q(), ce && re();
  }
  async function ie(ve) {
    var b, y, F, v, z, x, L;
    const I = ve.target.closest("[data-action]");
    if (!I) return;
    const ce = String(I.getAttribute("data-action") || "");
    if (ce === "coverage-set") {
      const S = On(I.getAttribute("data-coverage"));
      if (S === On(l.coverage)) return;
      l.coverage = S, n.coverage = S, r && (r.value = String(S)), o ? s.backgroundDirty = !0 : (h(), C({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), de(), U(), Q();
      return;
    }
    if (ce === "toggle-selection-picker") {
      if ((y = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && y.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (ce === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const S = String(I.getAttribute("data-selection-id") || "");
      let M = null;
      if (S && (d === "stickers" ? M = [...j(), ...c ? l.shots : []].find((E) => String((E == null ? void 0 : E.id) || "") === S) || null : M = ((F = X().find((E) => {
        var q;
        return String(((q = E == null ? void 0 : E.item) == null ? void 0 : q.id) || "") === S;
      })) == null ? void 0 : F.item) || null), T(M || null), M && !ee(M)) {
        const E = se(M);
        R(jt(Number(E.yaw_deg || 0)), Ee(Number(E.pitch_deg || 0), -89.9, 89.9));
      }
      de(), U(), Q();
      return;
    }
    if (ce === "copy-state-inline") {
      const S = J(), M = Y();
      if (!S || M === "stroke" || O().length > 1) return;
      const E = JSON.stringify(a && M !== "image" ? g(S) : k(se(S)));
      try {
        await navigator.clipboard.writeText(E), (v = u.sidePanel) != null && v.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var q;
          (q = u.sidePanel) != null && q.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (ce === "set-invert-x") {
      l.ui_settings.invert_view_x = I.getAttribute("data-value") === "1", D(), de(), (z = i.setDirtyCanvas) == null || z.call(i, !0, !0), Q();
      return;
    }
    if (ce === "set-invert-y") {
      l.ui_settings.invert_view_y = I.getAttribute("data-value") === "1", D(), de(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), Q();
      return;
    }
    if (ce === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, D(), de(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), Q();
      return;
    }
    if (ce === "close-preview") {
      m();
      return;
    }
    if (ce === "cancel-close") {
      m();
      return;
    }
    ce === "save-close" && (f(), m());
  }
  function ue(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && N(String(I.getAttribute("data-param-key") || ""), I.value, !1);
  }
  function be(ve) {
    const I = ve.target.closest("[data-action='param-input']");
    I && N(String(I.getAttribute("data-param-key") || ""), I.value, !0);
  }
  return {
    connect(ve) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: k,
        closeEditor: m,
        commitState: h,
        getActiveCutoutShot: _,
        getCutoutInspectorItems: X,
        getList: j,
        getSelected: J,
        getSelectedItems: O,
        getSelectedKind: Y,
        isItemLocked: G,
        isSceneSticker: W,
        isStrokeGroupItem: ee,
        markObjectVisualsDirty: pe,
        persistUiSettings: D,
        poseOf: se,
        pushHistory: re,
        requestDraw: Q,
        selectedWorldSticker: K,
        setSelectedItem: T,
        stopTimelinePlayback: H,
        syncCoverageChangeToNodePreviews: C,
        syncCutoutShot: $,
        turnViewTo: R,
        updateSelectionMenu: U,
        updateSidePanel: de,
        worldStickerEditable: Se,
        writePose: te
      } = ve);
    },
    onSidePanelClick: ie,
    onSidePanelInput: ue,
    onSidePanelChange: be
  };
}
function I2(e) {
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
    videoEl: g
  } = e;
  let k, m, h, _, X, j, J, O, Y, G, W, ee, pe, D, se, re, Q, K, T, H, C, $, R, U, de, Se, te, N, ie, ue, be, ve, I, ce, b, y, F, v, z, x, L, S, M, E, q, le, ge, Z, he, _e, Ne;
  const fe = () => {
    if (!t.customPaintSessionStart) return;
    if (nl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (tN(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const $e = [
      Tn(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !nl(He, t.customPaintColor))
    ];
    t.customPaintHistory = $e.slice(0, 8), t.customPaintSessionStart = null;
  }, ye = ($e = !1) => {
    !i || i.hidden || ($e ? fe() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, ne = () => {
    i && (i.hidden && (t.customPaintSessionStart = Tn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    z();
  }
  function A($e) {
    var pt, yt, At, Ct, zn;
    if ((yt = (pt = $e.target) == null ? void 0 : pt.matches) != null && yt.call(pt, "[data-confirm-overlay]")) {
      const Xe = (At = f.confirmDialog) == null ? void 0 : At.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, Xe == null || Xe(!1);
      return;
    }
    const He = $e.target.closest("[data-space-mode]");
    if (He) {
      ce(He.getAttribute("data-space-mode"));
      return;
    }
    const ae = $e.target.closest("[data-gizmo-mode]");
    if (ae) {
      t.gizmoMode = ae.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, he(), N({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const Fe = $e.target.closest("[data-view]");
    if (Fe) {
      if (Fe.getAttribute("aria-disabled") === "true") return;
      const Xe = t.mode;
      t.mode = String(Fe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (Xe !== "frame" && (c.frameSafeRect = null), _e(), he()), D(), M(), N();
      return;
    }
    const Pe = $e.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Pe && !a) {
      if (Pe.matches("[data-tool-mode]")) {
        const Xe = String(Pe.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = Xe, (Xe === "paint" || Xe === "mask") && Y({ preservePanelValues: !0 }), x(), _e(), he(), N();
        return;
      }
      if (Pe.matches("[data-tool-ui-action]")) {
        const Xe = String(Pe.getAttribute("data-tool-ui-action") || "");
        if ((Xe === "undo" || Xe === "redo") && Pe.disabled) return;
        Xe === "undo" ? ie(-1) : Xe === "redo" ? ie(1) : Xe === "clear" ? J() : Xe === "add" || Xe === "add-image" ? m() : Xe === "add-world" ? _() : Xe === "add-or-look" ? k() : Xe === "add-camera" && h();
        return;
      }
      if (Pe.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const Xe = String(Pe.getAttribute("data-paint-tool") || "pen");
        t.paintTool = Xe, Y({ preservePanelValues: !0 }), An[Xe] && (t.activeBrushPresetId = Xe), x(), _e(), he(), N();
        return;
      }
      if (Pe.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Pe.getAttribute("data-mask-tool") || "pen"), Y({ preservePanelValues: !0 }), x(), _e(), he(), N();
        return;
      }
      if (Pe.matches("[data-paint-layer-clear-current]")) {
        const Xe = String(Pe.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        O(Xe);
        return;
      }
      if (Pe.matches("[data-paint-color-swatch]")) {
        const Xe = Al.find((sn) => sn.id === Pe.getAttribute("data-paint-color-swatch"));
        if (!Xe) return;
        t.paintColor = Tn(Xe.color), ye(!0), x();
        return;
      }
      if (Pe.matches("[data-paint-color-custom]")) {
        $e.preventDefault(), $e.stopPropagation(), i && !i.hidden ? ye(!0) : ne(), x();
        return;
      }
    }
    const Ve = String(((Ct = Pe == null ? void 0 : Pe.getAttribute) == null ? void 0 : Ct.call(Pe, "data-action")) || "");
    if (Ve === "video-play-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      Ne.resumeAfterScrub = !1, E();
      return;
    }
    if (Ve === "video-audio-toggle") {
      $e.preventDefault(), $e.stopPropagation(), ge(), typeof (Pe == null ? void 0 : Pe.blur) == "function" && Pe.blur();
      return;
    }
    if (Ve === "video-loop-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const Xe = !f.videoTransport.loop;
      f.videoTransport.loop = Xe, g.loop = Xe, S({
        hasAudio: f.videoTransport.hasAudio,
        loop: Xe,
        muted: g.muted,
        volume: Number(g.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Pe == null ? void 0 : Pe.blur) == "function" && Pe.blur();
      return;
    }
    if (!a) {
      if (Ve === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Ve === "frame-aspect-set") {
        const Xe = t.mode === "frame" ? re() : null;
        if (!Xe || Xe.locked === !0) return;
        I(Xe, String(Pe.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, L(), de(), G(), M(), _e(), he(), N();
        return;
      }
      if (Ve === "frame-aspect-custom") {
        const Xe = t.mode === "frame" ? re() : null, sn = Pe.getAttribute("data-custom-width"), Gt = Pe.getAttribute("data-custom-height");
        if (!Xe || !X(Xe, sn, Gt)) return;
        f.frameRail.aspectOpen = !1, L(), de(), G(), M(), N();
        return;
      }
      if (Ve === "frame-rotate-90") {
        const Xe = t.mode === "frame" ? re() : null;
        if (!Xe || Xe.locked === !0) return;
        be(Xe), f.frameRail.aspectOpen = !1, L(), de(), G(), M(), N();
        return;
      }
      if (Ve === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, he(), N();
        return;
      }
      if (Ve === "aspect-set") {
        const Xe = K();
        if (!Xe) return;
        const sn = String(Pe.getAttribute("data-aspect") || "1:1");
        I(Xe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), de(), G(), he(), N();
        return;
      }
      if (Ve === "rotate-90") {
        const Xe = K();
        if (!Xe || C()) return;
        be(Xe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, L(), de(), G(), he(), N();
        return;
      }
      if (Ve === "bring-front") {
        j();
        return;
      }
      if (Ve === "send-back") {
        ve();
        return;
      }
      if (Ve === "duplicate") {
        pe();
        return;
      }
      if (Ve === "replace-image") {
        te();
        return;
      }
      if (Ve === "toggle-lock") {
        le();
        return;
      }
      if (Ve === "back-initial") {
        ue();
        return;
      }
      if (Ve === "toggle-visible") {
        q();
        return;
      }
      if (Ve === "delete") {
        ee();
        return;
      }
    }
    if (Ve === "reset-view") {
      if (t.mode === "frame") return;
      Z(
        { position: F(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((zn = W()) == null ? void 0 : zn.radius) || tr },
        { mode: rl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Ve === "frame-view") {
      if (!$() || rl(t.spaceMode, t.viewTransition) !== "6dof") return;
      se();
      return;
    }
    if (Ve === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, uN(r == null ? void 0 : r.id, t.showGrid), p(), N();
      return;
    }
    if (Ve === "toggle-fullscreen") {
      $e.preventDefault(), $e.stopPropagation(), Re();
      return;
    }
    if (Ve === "toggle-output-preview-size") {
      $e.preventDefault(), $e.stopPropagation();
      const Xe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = Xe, v(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = Xe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), We(), N();
      return;
    }
    const Ye = $e.target.closest("[data-paint-history-index]");
    if (!Ye) return;
    const Ge = Number(Ye.getAttribute("data-paint-history-index")), Ke = t.customPaintHistory[Ge];
    Ke && (t.customPaintColor = Tn(Ke), t.paintColor = Tn(Ke), x());
  }
  function w($e) {
    const He = $e.target.closest("[data-video-seek]");
    if (He) {
      if (!(g instanceof HTMLVideoElement)) return;
      R.playing && (Ne.resumeAfterScrub = !0), R.seek(gi(Number(He.value || 0), U()));
      return;
    }
    const ae = $e.target.closest("[data-video-volume]");
    if (ae) {
      if (!(g instanceof HTMLVideoElement)) return;
      const Ve = Ee(Number(ae.value || 0), 0, 1);
      g.volume = Ve, g.muted = Ve <= 1e-4, S({
        hasAudio: f.videoTransport.hasAudio,
        muted: g.muted,
        volume: Ve
      });
      return;
    }
    const Fe = $e.target.closest("[data-paint-size-slider]");
    if (Fe) {
      if (Fe.disabled) return;
      const Ve = Math.max(1, Math.min(120, Math.round(Number(Fe.value)))), Ye = Q(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ye] = Ve, x(), b();
      return;
    }
    const Pe = $e.target.closest("[data-paint-alpha-slider]");
    if (Pe) {
      const Ve = { ...t.customPaintColor, a: Ee(Number(Pe.value) / 100, 0, 1) };
      t.customPaintColor = Tn(Ve), t.paintColor = Tn(Ve), x();
    }
  }
  function P($e) {
    var He;
    if ($e.target.closest("[data-video-seek]")) {
      if (!(g instanceof HTMLVideoElement)) return;
      Ne.resumeAfterScrub && R.play(), Ne.resumeAfterScrub = !1;
      return;
    }
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((He = $e.target) == null ? void 0 : He.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && T();
  }
  function B($e) {
    const He = $e.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && y(He);
    }, 220));
  }
  function me($e) {
    var Fe, Pe;
    const He = $e.target.closest("[data-tip]");
    !He || u.target !== He || ($e.relatedTarget instanceof Element ? (Pe = (Fe = $e.relatedTarget).closest) == null ? void 0 : Pe.call(Fe, "[data-tip]") : null) === He || H();
  }
  function V($e, He) {
    var Ge;
    if (!o) return;
    const ae = o.getBoundingClientRect(), Fe = Ee(($e - ae.left) / Math.max(1, ae.width), 0, 1), Pe = 1 - Ee((He - ae.top) / Math.max(1, ae.height), 0, 1), Ve = gu(t.customPaintColor), Ye = { ...mu(Ve.h, Fe, Pe), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = Tn(Ye), t.paintColor = Tn(Ye), x();
  }
  function oe($e) {
    var Ve;
    if (!s) return;
    const He = s.getBoundingClientRect(), ae = Ee(($e - He.left) / Math.max(1, He.width), 0, 1), Fe = gu(t.customPaintColor), Pe = { ...mu(ae, Fe.s, Fe.v), a: Number(((Ve = t.customPaintColor) == null ? void 0 : Ve.a) ?? 1) };
    t.customPaintColor = Tn(Pe), t.paintColor = Tn(Pe), x();
  }
  function Ae($e, He) {
    const ae = $e.pointerId;
    He($e);
    const Fe = (Ve) => {
      Ve.pointerId === ae && He(Ve);
    }, Pe = (Ve) => {
      Ve.pointerId === ae && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", Pe), window.removeEventListener("pointercancel", Pe));
    };
    window.addEventListener("pointermove", Fe), window.addEventListener("pointerup", Pe), window.addEventListener("pointercancel", Pe);
  }
  function ke() {
    const $e = !!t.fullscreen;
    Ki(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: $e ? ze.fullscreen_close : ze.fullscreen,
      label: $e ? "Exit Fullscreen" : "Fullscreen",
      tip: $e ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me($e) {
    const He = !!$e;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), ke(), Se(), N());
  }
  function Ie() {
    return document.fullscreenElement === n;
  }
  async function Re() {
    var $e, He;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      Ie() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await (($e = n.requestFullscreen) == null ? void 0 : $e.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Me(Ie());
  }
  function We() {
    const $e = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = $e ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = $e ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = $e ? "Reduce preview" : "Expand preview";
  }
  return {
    connect($e) {
      ({
        addCutoutFrame: k,
        addImageSticker: m,
        addStudioCamera: h,
        addWorldImageSticker: _,
        applyCutoutAspectCustom: X,
        bringSelectedToFront: j,
        clearAll: J,
        clearPaintingLayer: O,
        clearSelection: Y,
        commitAndRefreshNode: G,
        contentSphere: W,
        deleteSelected: ee,
        duplicateSelected: pe,
        forceCursorTool: D,
        frameSpaceContent: se,
        getActiveCutoutShot: re,
        getBrushPresetIdForTool: Q,
        getSelected: K,
        hidePaintSizePreview: T,
        hideTooltip: H,
        isErpCamera: C,
        isFreeSpaceView: $,
        playback: R,
        playbackFps: U,
        pushHistory: de,
        queueVideoTransportLayout: Se,
        replaceSelectedImage: te,
        requestDraw: N,
        restoreHistory: ie,
        restoreSelectedToInitialPose: ue,
        rotateCutoutAspect90: be,
        sendSelectedToBack: ve,
        setShotAspect: I,
        setSpaceMode: ce,
        showPaintSizePreview: b,
        showTooltipFor: y,
        spaceOrigin: F,
        startAnimation: v,
        syncFloatingViewButtonState: z,
        syncPaintUi: x,
        syncSidePanelControls: L,
        syncVideoTransportState: S,
        syncViewToggleState: M,
        togglePlayback: E,
        toggleSelectedExternalStickerVisibility: q,
        toggleSelectedLock: le,
        toggleVideoMuted: ge,
        transitionView: Z,
        updateSelectionMenu: he,
        updateSidePanel: _e,
        videoState: Ne
      } = $e);
    },
    closePaintColorPop: ye,
    syncGridToggleButton: p,
    onRootClick: A,
    onRootInput: w,
    onRootChange: P,
    onRootPointerOver: B,
    onRootPointerOut: me,
    updatePaintColorFromSv: V,
    updatePaintColorFromHue: oe,
    bindDrag: Ae,
    syncFullscreenButton: ke,
    setFullscreenState: Me,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: We
  };
}
function E2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, g, k, m, h, _, X;
  function j(D) {
    var se, re, Q, K, T;
    if (D.key === "Escape") {
      if (a()) {
        D.preventDefault(), D.stopPropagation(), (se = D.stopImmediatePropagation) == null || se.call(D);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        D.preventDefault(), D.stopPropagation(), (re = D.stopImmediatePropagation) == null || re.call(D), (Q = document.exitFullscreen) == null || Q.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        D.preventDefault(), D.stopPropagation(), (K = D.stopImmediatePropagation) == null || K.call(D), m(!1);
        return;
      }
      D.preventDefault(), D.stopPropagation(), (T = D.stopImmediatePropagation) == null || T.call(D), l();
    }
  }
  function J(D) {
    const se = String(D.key || ""), re = String(D.code || ""), Q = Number(D.keyCode || 0);
    if (!(se === "Delete" || re === "Delete" || Q === 46) && !(se === "Backspace" || re === "Backspace" || Q === 8)) return;
    const H = D.target, C = ((H == null ? void 0 : H.tagName) || "").toUpperCase();
    if (C === "INPUT" || C === "TEXTAREA" || H != null && H.isContentEditable) return;
    if (o.selection) {
      d(), D.preventDefault(), D.stopPropagation();
      return;
    }
    if (u()) {
      D.preventDefault(), D.stopPropagation();
      return;
    }
    g() && (c(), D.preventDefault(), D.stopPropagation());
  }
  function O(D) {
    if (D.code !== "Space" || D.ctrlKey || D.metaKey || D.altKey || n || !i || !s.timeline.visible || s.confirmDialog.visible) return !1;
    const se = D.composedPath()[0];
    if (se !== document.body && se !== document.documentElement && !r.contains(se)) return !1;
    const re = ((se == null ? void 0 : se.tagName) || "").toUpperCase();
    return re === "INPUT" ? !RP.has(String(se.type || "text").toLowerCase()) : re !== "TEXTAREA" && re !== "SELECT" && !(se != null && se.isContentEditable);
  }
  function Y(D) {
    O(D) && (D.preventDefault(), D.stopPropagation(), D.repeat || _());
  }
  function G(D) {
    O(D) && (D.preventDefault(), D.stopPropagation());
  }
  function W(D) {
    const se = !!(D.ctrlKey || D.metaKey), re = !!D.altKey;
    t.marqueeModifier === se && t.altModifier === re || (t.marqueeModifier = se, t.altModifier = re, h(), X(t.pointerPos));
  }
  function ee() {
    t.marqueeModifier = !1, t.altModifier = !1, h(), X(t.pointerPos);
  }
  function pe(D) {
    if (n || !D.ctrlKey && !D.metaKey) return;
    const se = String(D.key || "").toLowerCase(), re = String(D.code || "");
    if (se !== "z" && re !== "KeyZ") return;
    const Q = D.target, K = ((Q == null ? void 0 : Q.tagName) || "").toUpperCase();
    if (K === "INPUT" || K === "TEXTAREA" || Q != null && Q.isContentEditable) return;
    const { canUndo: T, canRedo: H } = f();
    D.shiftKey && !H || !D.shiftKey && !T || (k(D.shiftKey ? 1 : -1), D.preventDefault(), D.stopPropagation());
  }
  return {
    connect(D) {
      ({
        cancelFrameCameraGesture: a,
        closeEditor: l,
        deleteSelected: c,
        deleteSelectedKeyframes: d,
        deleteSelectedWorldSticker: u,
        getHistoryCapabilities: f,
        getSelected: g,
        restoreHistory: k,
        setFullscreenState: m,
        syncFrameRollKnob: h,
        togglePlayback: _,
        updateCursor: X
      } = D);
    },
    onEscClose: j,
    onDeleteKey: J,
    onSpaceKey: Y,
    onSpaceKeyUp: G,
    onModifierKeyChange: W,
    onWindowBlur: ee,
    onUndoRedoKey: pe
  };
}
const vp = /* @__PURE__ */ new Map(), ri = Xm({
  app: Qn,
  api: pn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: pu,
    markImageFailed: Wg,
    markImageLoading: Hg,
    markImageReady: Gg
  }
});
function Sp(e) {
  if (!Xt(e, "background") || !Xt(e, "external-sticker")) return null;
  const t = ri.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? ho(t[0]) : null;
}
const O2 = ri.assetSource, F2 = ri.source, T2 = ri.uiImage, D2 = ri.invalidateUiImage, _p = ri.loadPreferredExactLinkedImage;
async function L2(e, t, r = {}) {
  var ln, on;
  await Mg(e, { tolerateOperationFailure: !0 }), ri.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = rN(e, t);
  await _d();
  const a = ta(e, "output_preset"), l = ta(e, "coverage"), c = ta(e, "bg_color"), d = ta(e, LP), u = () => {
    const De = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return _p(
      e,
      De,
      () => Ce(),
      `background:size:${De.join("|")}`
    );
  }, f = () => {
    const De = u();
    return sN(De);
  }, g = (De = 2048) => {
    const qe = a == null ? void 0 : a.value;
    return oN(qe) ? f() || Math.max(1, Math.round(Number(De || 2048))) : iN(qe, De);
  }, k = e.__panoSceneStateV2 === !0, m = t === "stickers" && k, h = m && e.__panoStudio === !0, _ = h, X = t === "cutout" || h, j = (k ? lm : am)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: On(l == null ? void 0 : l.value),
    sharedUiSettings: aN(),
    active: fm(e),
    fps: k ? Sp(e) : null
  });
  Rn(e).liveState = j, Rn(e).liveStateVersion = 0;
  let J = null;
  _ ? (J = j.camera && j.camera.visible !== !1 ? dm(j.camera, 0) : null, j.shots = J ? [{ ...J, position: [...J.position] }] : [], j.active.selected_shot_id = null) : t === "cutout" && (j.shots = Array.isArray(j.shots) ? j.shots.slice(0, 1) : [], j.shots.length || (j.active.selected_shot_id = null));
  const O = t === "cutout" ? (() => {
    var Qt;
    const De = Array.isArray(j.shots) ? j.shots : [], qe = String(((Qt = j == null ? void 0 : j.active) == null ? void 0 : Qt.selected_shot_id) || "");
    return De.find((en) => String((en == null ? void 0 : en.id) || "") === qe) || De[0] || null;
  })() : null, Y = O ? r0(O, !1) : { width: 220, height: 132 }, G = jg(h ? "studio" : t), W = /* @__PURE__ */ co({
    stageStatus: Jn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (G.viewButtons || []).map((De) => ({ ...De, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (ln = G.spaceButtons) != null && ln.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: G.spaceButtons, frame: G.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (G.toolButtons || []).map((De) => ({
      ...De,
      disabled: !1,
      ...De.key === "add-world" ? { visible: m } : {}
    })),
    floatingButtons: [
      ...(G.floatingButtons || []).map((De) => ({ ...De, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ze.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: ze.aspect,
      rotateIcon: ze.rotate_90,
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
      icon: ze.fullscreen,
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
      customColorCss: fr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: fr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (De, qe) => ({ index: qe, color: null })),
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
      width: Y.width,
      height: Y.height,
      label: O ? "Loading preview" : "Add Frame to preview"
    }
  }), ee = { frame: /* @__PURE__ */ ka(0), playing: /* @__PURE__ */ ka(!1) }, pe = document.createElement("div");
  document.body.appendChild(pe);
  const D = ({ intent: De, file: qe } = {}) => {
    if (Zn(qe)) {
      if (De === "add") {
        Ie(qe);
        return;
      }
      if (De === "add-world") {
        Re(qe);
        return;
      }
      De === "replace" && Ol(qe);
    }
  }, se = ({ intent: De } = {}) => {
  }, re = Lu(TP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: G,
    paintSwatches: Al.map((De) => ({
      id: De.id,
      label: De.label,
      cssColor: fr(De.color, 1)
    })),
    uiState: W,
    playhead: ee,
    onClose: () => {
      an();
    },
    onTimeline: (De) => Ur(De),
    onImageFileSelected: D,
    onImageFileCancelled: se
  });
  let Q = null;
  try {
    Q = re.mount(pe);
  } catch (De) {
    try {
      re.unmount();
    } catch {
    }
    throw pe.remove(), De;
  }
  const K = pe.querySelector(".pano-modal-overlay"), T = pe.querySelector(".pano-modal"), H = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), C = T == null ? void 0 : T.querySelector("[data-stage-background]"), $ = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), R = ((on = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : on.call(Q)) || {}, U = R.cursor || null, de = R.sizePreview || null, Se = R.sizeSample || null;
  if (!K || !T || !H || !C || !$ || !U || !de || !Se)
    throw re.unmount(), pe.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const te = H.getContext("2d"), N = T.querySelector("[data-side]"), ie = T.querySelector("[data-video-element]"), ue = T.querySelector("[data-port-video-element]");
  Kl(H, "editor.stage-overlay"), Kl(C, "editor.stage-background"), hf(ie, "editor.video"), hf(ue, "editor.port-video");
  const be = T.querySelector(".pano-floating-right"), ve = T.querySelector(".pano-floating-top"), I = T.querySelector("[data-tool-rail]"), ce = T.querySelector("[data-frame-rail]"), b = T.querySelector("[data-frame-roll-knob]"), y = T.querySelector("[data-paint-dock]"), F = T.querySelector(".pano-video-transport"), v = T.querySelector("[data-selection-menu]"), z = T.querySelector("[data-tooltip]"), x = T.querySelector("[data-camera-preview-host]"), L = T.querySelector("[data-camera-preview-canvas]");
  Kl(L, "editor.camera-preview");
  const S = T.querySelector("[data-paint-color-row]"), M = T.querySelector("[data-paint-color-pop]"), E = T.querySelector("[data-paint-color-sv]"), q = T.querySelector("[data-paint-color-sv-cursor]"), le = T.querySelector("[data-paint-hue-strip]"), ge = T.querySelector("[data-paint-hue-handle]");
  $ == null || $.removeAttribute("data-stage-ready"), $ == null || $.setAttribute("data-stage-loading-kind", "boot"), H.style.opacity = "1", C.style.opacity = "0", i && (N == null || N.remove(), T.classList.add("pano-modal-readonly")), T.addEventListener("pointerdown", () => P.wake(), !0), T.addEventListener("pointerdown", (De) => {
    var qe;
    De.target.closest("[data-frame-roll-knob]") || Ct(), !De.target.closest(".pano-picker") && (De.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((Qt) => {
      Qt.hidden = !0;
    }), ae(!0), X && he.cutoutAspectOpen && !De.target.closest(".pano-aspect-popover") && !De.target.closest("[data-action='aspect']") && (he.cutoutAspectOpen = !1, he.menuMode = "", he.menuSize.measured = !1, Ls(), Ce()), (qe = W.frameRail) != null && qe.aspectOpen && !De.target.closest(".pano-frame-aspect-control") && (W.frameRail.aspectOpen = !1)));
  });
  const he = {
    mode: "pano",
    selectedId: n0(t, j),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: tr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: On(j.coverage),
    historyController: MN(j),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Cr,
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
    showGrid: cN(e == null ? void 0 : e.id, !0),
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
    paintEngine: yl(),
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
  }, _e = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (he.selectedId = null, j.active.selected_sticker_id = null), he.selectedIds = he.selectedId ? [he.selectedId] : [];
  const Ne = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), p = nn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const A = nn({ label: "editor.port-still" });
  A.__panoFrameIdx = 0;
  const w = {
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
  }, P = Tx({
    requestAnimationFrame: (De) => requestAnimationFrame(De),
    cancelAnimationFrame: (De) => cancelAnimationFrame(De),
    draw: (De, qe) => Ti(De, qe),
    animating: () => Ye()
  }), B = Ox({
    requestFrame: (De) => P.requestFrame(De),
    cancelFrame: (De) => P.cancelFrame(De),
    tasks: {
      seek: () => Il.seek(_e.scrubFrame),
      timeline: () => xr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        rt(), Ce({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => Mo()
    }
  }), me = gS({
    canvas: C,
    onReady: () => {
      Qe(), Ce({ reason: dt.CONTEXT });
    },
    onFailed: () => Ce(),
    onUpdate: () => Ce({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: (De) => Ce({ localOnly: !0, reason: YN(De) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      pt(), Qe(), Ce({ reason: dt.CONTEXT });
    }
  }), V = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, oe = (De) => {
    const qe = String(De || "default");
    H.style.cursor !== qe && (H.style.cursor = qe);
  }, Ae = {
    timer: 0,
    target: null
  }, ke = {
    active: !1,
    depth: 0
  }, Me = ju({
    getView: () => ({ yaw: he.viewYaw, pitch: he.viewPitch, fov: he.viewFov }),
    setView: (De) => {
      he.viewYaw = jt(Number(De.yaw || 0)), he.viewPitch = Ee(Number(De.pitch || 0), -89.9, 89.9), he.viewFov = Ee(Number(De.fov || he.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const De = H.getBoundingClientRect();
      return {
        w: Math.max(1, Number(De.width || H.clientWidth || 0)),
        h: Math.max(1, Number(De.height || H.clientHeight || 0))
      };
    },
    getInvert: () => {
      var De, qe;
      return {
        x: (De = j.ui_settings) != null && De.invert_view_x ? -1 : 1,
        y: (qe = j.ui_settings) != null && qe.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => yt(),
    onInteraction: () => P.requestDraw(dt.VIEW)
  }), {
    addImageStickerFromFile: Ie,
    addWorldStickerFromFile: Re,
    applyInitialCutoutFocus: je,
    applyVideoTimelineFps: We,
    bindDrag: $e,
    cancelFrameCameraGesture: He,
    closePaintColorPop: ae,
    commitState: Fe,
    disposeMediaSession: Pe,
    disposeUpstream: Ve,
    editorAnimating: Ye,
    finishKnobRoll: Ge,
    flushFrameWheelCommit: Ke,
    forgetCameraPreviewFrame: pt,
    getUnwrapRect: yt,
    hidePaintSizePreview: At,
    hideTooltip: Ct,
    hoverWorldGizmo: zn,
    isFreeFrameView: Xe,
    isFreeSpaceView: sn,
    migrateLegacyEmbeddedAssets: Gt,
    onCanvasDragOver: ai,
    onCanvasDrop: Gr,
    onCanvasMouseMove: li,
    onCanvasPointerCancel: rn,
    onCanvasPointerDown: yn,
    onCanvasPointerMove: Wr,
    onCanvasPointerUp: _r,
    onCanvasWheel: ir,
    onDeleteKey: Oi,
    onEscClose: yo,
    onFrameRollKnobDoubleClick: xs,
    onFrameRollKnobPointerDown: ks,
    onFrameRollKnobPointerMove: Ms,
    onFullscreenChange: bo,
    onModifierKeyChange: Kr,
    onRootChange: Dt,
    onRootClick: qn,
    onRootInput: or,
    onRootPointerOut: vo,
    onRootPointerOver: Fn,
    onSidePanelChange: Ps,
    onSidePanelClick: Ns,
    onSidePanelInput: As,
    onSpaceKey: wr,
    onSpaceKeyUp: Cs,
    onTimelineAction: Ur,
    onUndoRedoKey: Is,
    onWindowBlur: So,
    onWindowDragEnter: Es,
    onWindowDragLeave: _o,
    onWindowDragOver: wo,
    onWindowDrop: Os,
    playback: Il,
    pushHistory: El,
    reconcileExternalStickerFromInputs: Fs,
    refreshModalVideoSource: xo,
    replaceSelectedImageFromFile: Ol,
    requestDraw: Ce,
    sampleEditorDiagnostics: Oe,
    setDropCue: we,
    setPointerPos: _t,
    stageResizeObserver: lt,
    stickerCornerOrderSanity: xt,
    stopRenderLoop: Ze,
    syncCanvasSize: Qe,
    syncCutoutShot: rt,
    syncFullscreenButton: Xn,
    syncGridToggleButton: Je,
    syncLookAtFrameButtonState: Ue,
    syncOutputPreviewToggleButton: et,
    syncPaintUi: qt,
    syncPaintingLayerAsync: Pt,
    syncTimeline: xr,
    syncUndoRedoButtons: Fi,
    tick: Ti,
    triggerBackgroundPersistenceOnClose: Di,
    updateCursor: ko,
    updatePaintColorFromHue: Ts,
    updatePaintColorFromSv: Ds,
    updateSelectionMenu: Ls,
    updateSidePanel: Mo,
    viewControls: Rs,
    watchPixelRatio: ct
  } = dN({
    api: pn,
    app: Qn,
    backgroundCanvas: C,
    bgWidget: c,
    cameraV2: _,
    canvas: H,
    closeEditor: an,
    comfyMedia: ri,
    coverageWidget: l,
    ctx: te,
    cutoutPreviewCanvas: L,
    cutoutPreviewHost: x,
    dragCue: ke,
    dragFrames: B,
    editor: he,
    editorView: me,
    floatingRightEl: be,
    floatingTopEl: ve,
    frameGateCssRadius: V,
    frameRailEl: ce,
    frameRollKnobEl: b,
    hideSidebar: i,
    imageCache: Ne,
    initialShotBase: J,
    loadPreferredExactLinkedImage: _p,
    mediaAssetSource: O2,
    mediaSource: F2,
    mediaUiImage: T2,
    node: e,
    overlay: K,
    paintColorPop: M,
    paintColorRow: S,
    paintColorSv: E,
    paintColorSvCursor: q,
    paintCursorEl: U,
    paintDockEl: y,
    paintHueHandle: ge,
    paintHueStrip: le,
    paintSizePreviewEl: de,
    paintSizePreviewSampleEl: Se,
    portStillCanvas: A,
    portVideoEl: ue,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: ne,
    rasterImageAlphaCache: ye,
    rasterImageCache: fe,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: T,
    runtime: w,
    sceneV2: m,
    scheduler: P,
    selectionMenu: v,
    setCanvasCursor: oe,
    shotEditor: X,
    stageWrap: $,
    state: j,
    stateV2: k,
    stateWidget: d,
    stillCanvas: p,
    studio: h,
    timeline: _e,
    timelinePlayhead: ee,
    toolRailEl: I,
    tooltip: Ae,
    tooltipEl: z,
    type: t,
    uiState: W,
    videoEl: ie,
    videoTimelineFps: Sp,
    videoTransportEl: F,
    viewController: Me,
    vueModal: Q
  }, [
    wN,
    PN,
    NN,
    AN,
    CN,
    IN,
    EN,
    ON,
    FN,
    KN,
    UN,
    BN,
    XN,
    JN,
    ZN,
    y2,
    b2,
    v2,
    S2,
    _2,
    w2,
    x2,
    k2,
    M2,
    P2,
    N2,
    A2,
    C2,
    I2,
    E2
  ]);
  xt(), lt.observe(H), ct();
  const ft = () => Fe();
  n || (Bm(e).flushBeforeQueue = ft), b == null || b.addEventListener("pointerdown", ks), b == null || b.addEventListener("pointermove", Ms), b == null || b.addEventListener("pointerup", Ge), b == null || b.addEventListener("pointercancel", () => He()), b == null || b.addEventListener("lostpointercapture", () => {
    var De;
    ((De = he.interaction) == null ? void 0 : De.source) === "knob" && He();
  }), b == null || b.addEventListener("dblclick", xs), H.onpointerdown = yn, H.onpointermove = Wr, H.onpointerup = _r, H.onpointercancel = rn, H.onlostpointercapture = () => {
    He();
  }, H.onauxclick = (De) => {
    De.button === 1 && De.preventDefault();
  }, H.oncontextmenu = (De) => {
    (sn() || Xe()) && rw(Rs(), 2) && De.preventDefault();
  }, H.onmousemove = li, H.onpointerleave = () => {
    he.interaction || zn({ x: -1e6, y: -1e6 });
  }, H.onmouseleave = () => {
    _t(he.pointerPos, !1), ko(he.pointerPos), he.mode === "frame" && he.primaryTool === "cursor" && Ce({ localOnly: !0, reason: dt.OVERLAY });
  }, H.onwheel = ir, H.ondragover = ai, H.ondrop = Gr, window.addEventListener("dragenter", Es, !0), window.addEventListener("dragover", wo, !0), window.addEventListener("dragleave", _o, !0), window.addEventListener("drop", Os, !0), N == null || N.addEventListener("click", Ns), N == null || N.addEventListener("input", As), N == null || N.addEventListener("change", Ps), Je(), T.addEventListener("click", qn), T.addEventListener("input", or), T.addEventListener("change", Dt), T.addEventListener("pointerup", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && At();
  }), T.addEventListener("pointercancel", (De) => {
    var qe;
    if (De.target.closest("[data-video-volume]")) {
      typeof ((qe = De.target) == null ? void 0 : qe.blur) == "function" && De.target.blur();
      return;
    }
    De.target.closest("[data-paint-size-slider]") && At();
  }), T.addEventListener("focusout", (De) => {
    De.target.closest("[data-paint-size-slider]") && At();
  }), T.addEventListener("pointerover", Fn), T.addEventListener("pointerout", vo), T.addEventListener("pointerdown", (De) => {
    De.target.closest("[data-frame-roll-knob]") || Ct();
  }), E && (E.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), $e(De, (qe) => Ds(qe.clientX, qe.clientY));
  }), le && (le.onpointerdown = (De) => {
    De.preventDefault(), De.stopPropagation(), $e(De, (qe) => Ts(qe.clientX));
  }), T.addEventListener("click", (De) => {
    var sr;
    const qe = De.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!qe) return;
    const Qt = qe.getAttribute("data-action") === "confirm-accept", en = (sr = W.confirmDialog) == null ? void 0 : sr.resolve;
    W.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, en == null || en(Qt);
  }), document.addEventListener("fullscreenchange", bo), Xn(), et();
  const mt = e.onConnectionsChange;
  let bt = null, bn = () => {
  };
  !n && t === "stickers" && (bn = xg(e, (De = "sync") => {
    De === "executed" && (D2(Ne, ao), xo(), m && We()), Fs(De);
  }, { editor: !0 }), bt = function(...qe) {
    typeof mt == "function" && mt.apply(this, qe), xo(), Qr(this, "connections");
  }, e.onConnectionsChange = bt), n || vp.set(String(e.id ?? "0"), () => Pt());
  let Rt = null;
  async function an() {
    return Rt || (Rt = (async () => {
      var qe, Qt, en, sr, Br, Vs, Id, $s, Ed;
      vp.delete(String(e.id ?? "0")), Ke(), n || Fe(), document.fullscreenElement === K && ((qe = document.exitFullscreen) == null || qe.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", bo), Rn(e).liveState = null;
      const De = IS(e);
      return (De == null ? void 0 : De.flushBeforeQueue) === ft && (De.flushBeforeQueue = null), (sr = (en = (Qt = Ym(e)) == null ? void 0 : Qt.dom) == null ? void 0 : en.requestDraw) == null || sr.call(en), (Vs = (Br = e.graph) == null ? void 0 : Br.setDirtyCanvas) == null || Vs.call(Br, !0, !0), (Ed = ($s = (Id = Qn) == null ? void 0 : Id.canvas) == null ? void 0 : $s.setDirty) == null || Ed.call($s, !0, !0), Ct(), B.cancel(), Ze(), Pe(), Ve(), me.dispose(), we(!1), window.removeEventListener("keydown", yo, !0), window.removeEventListener("keydown", Oi, !0), window.removeEventListener("keydown", wr, !0), window.removeEventListener("keyup", Cs, !0), window.removeEventListener("keydown", Kr, !0), window.removeEventListener("keyup", Kr, !0), window.removeEventListener("blur", So), window.removeEventListener("keydown", Is, !0), window.removeEventListener("dragenter", Es, !0), window.removeEventListener("dragover", wo, !0), window.removeEventListener("dragleave", _o, !0), window.removeEventListener("drop", Os, !0), !n && t === "stickers" && (e.onConnectionsChange === bt && (e.onConnectionsChange = mt), bn()), re.unmount(), pe.remove(), Di(), Rt = null, !0;
    })().catch((De) => (console.error("[PanoramaCutoutSync] closeEditor failed", De), Rt = null, !1)), Rt);
  }
  window.addEventListener("keydown", yo, !0), window.addEventListener("keydown", Oi, !0), window.addEventListener("keydown", wr, !0), window.addEventListener("keyup", Cs, !0), window.addEventListener("keydown", Kr, !0), window.addEventListener("keyup", Kr, !0), window.addEventListener("blur", So), window.addEventListener("keydown", Is, !0), K.addEventListener("pointerdown", (De) => {
    De.target === K && an();
  });
  function vt(De, qe, { rollbackState: Qt = !1 } = {}) {
    let en = "";
    try {
      Qt && (en = JSON.stringify(j)), qe();
    } catch (sr) {
      if (en)
        try {
          const Br = JSON.parse(en);
          Object.keys(j).forEach((Vs) => delete j[Vs]), Object.assign(j, Br), n || Fe();
        } catch (Br) {
          console.error(`[PanoramaStickers] editor boot step "${De}" rollback failed`, Br);
        }
      W.stageWarningDetail = `boot:${De}`, console.error(`[PanoramaStickers] editor boot step "${De}" failed`, sr);
    }
  }
  vt("cutout-focus", je), !n && t === "stickers" && vt("external-sticker-sync", () => Fs("open"), { rollbackState: !0 }), Gt().catch((De) => {
    W.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', De);
  }), vt("history", El), vt("undo-redo", Fi), vt("paint-ui", qt), vt("side-panel", Mo), vt("look-at-frame", Ue), vt("video-source", xo), vt("canvas-size", Qe), vt("cursor", () => ko(he.pointerPos)), Ce(), Oe();
}
Qn.registerExtension(pw({
  app: Qn,
  openEditor: L2,
  attachStickers: Ix,
  attachCutout: Ex,
  attachPreview: Cx,
  restoreOutput: gx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: zP
}));
