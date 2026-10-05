import * as sa from "../../scripts/app.js";
import { app as Qn } from "../../scripts/app.js";
import { api as hn } from "../../scripts/api.js";
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
const Ft = {}, Yi = [], br = () => {
}, Sp = () => !1, ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), sl = (e) => e.startsWith("onUpdate:"), yn = Object.assign, Su = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, r0 = Object.prototype.hasOwnProperty, kt = (e, t) => r0.call(e, t), ot = Array.isArray, qi = (e) => ys(e) === "[object Map]", _p = (e) => ys(e) === "[object Set]", Ed = (e) => ys(e) === "[object Date]", at = (e) => typeof e == "function", Yt = (e) => typeof e == "string", _r = (e) => typeof e == "symbol", Ot = (e) => e !== null && typeof e == "object", wp = (e) => (Ot(e) || at(e)) && at(e.then) && at(e.catch), xp = Object.prototype.toString, ys = (e) => xp.call(e), i0 = (e) => ys(e).slice(8, -1), kp = (e) => ys(e) === "[object Object]", _u = (e) => Yt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Go = /* @__PURE__ */ vu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), al = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, o0 = /-\w/g, wn = al(
  (e) => e.replace(o0, (t) => t.slice(1).toUpperCase())
), s0 = /\B([A-Z])/g, Ii = al(
  (e) => e.replace(s0, "-$1").toLowerCase()
), ll = al((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tl = al(
  (e) => e ? `on${ll(e)}` : ""
), mr = (e, t) => !Object.is(e, t), aa = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Mp = (e, t, r, n = !1) => {
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
let Od;
const cl = () => Od || (Od = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (ot(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Yt(n) ? u0(n) : Et(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Yt(e) || Ot(e))
    return e;
}
const a0 = /;(?![^(]*\))/g, l0 = /:([^]+)/, c0 = /\/\*[^]*?\*\//g;
function u0(e) {
  const t = {};
  return e.replace(c0, "").split(a0).forEach((r) => {
    if (r) {
      const n = r.split(l0);
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
  else if (Ot(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const d0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", f0 = /* @__PURE__ */ vu(d0);
function Pp(e) {
  return !!e || e === "";
}
function p0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = xu(e[n], t[n]);
  return r;
}
function xu(e, t) {
  if (e === t) return !0;
  let r = Ed(e), n = Ed(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = _r(e), n = _r(t), r || n)
    return e === t;
  if (r = ot(e), n = ot(t), r || n)
    return r && n ? p0(e, t) : !1;
  if (r = Ot(e), n = Ot(t), r || n) {
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
const Np = (e) => !!(e && e.__v_isRef === !0), it = (e) => Yt(e) ? e : e == null ? "" : ot(e) || Ot(e) && (e.toString === xp || !at(e.toString)) ? Np(e) ? it(e.value) : JSON.stringify(e, Ap, 2) : String(e), Ap = (e, t) => Np(t) ? Ap(e, t.value) : qi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Dl(n, o) + " =>"] = i, r),
    {}
  )
} : _p(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Dl(r))
} : _r(t) ? Dl(t) : Ot(t) && !ot(t) && !kp(t) ? String(t) : t, Dl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _r(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Mn;
class h0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Mn, !t && Mn && (this.index = (Mn.scopes || (Mn.scopes = [])).push(
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
      const r = Mn;
      try {
        return Mn = this, t();
      } finally {
        Mn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Mn, Mn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Mn = this.prevScope, this.prevScope = void 0);
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
function m0() {
  return Mn;
}
let Dt;
const Ll = /* @__PURE__ */ new WeakSet();
class Cp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Mn && Mn.active && Mn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ll.has(this) && (Ll.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ep(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fd(this), Op(this);
    const t = Dt, r = er;
    Dt = this, er = !0;
    try {
      return this.fn();
    } finally {
      Fp(this), Dt = t, er = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pu(t);
      this.deps = this.depsTail = void 0, Fd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ll.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Ip = 0, Wo, Ko;
function Ep(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ko, Ko = e;
    return;
  }
  e.next = Wo, Wo = e;
}
function ku() {
  Ip++;
}
function Mu() {
  if (--Ip > 0)
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
function Op(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Pu(n), g0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function xc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Tp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Tp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qo) || (e.globalVersion = Qo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Dt, n = er;
  Dt = e, er = !0;
  try {
    Op(e);
    const i = e.fn(e._value);
    (t.version === 0 || mr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Dt = r, er = n, Fp(e), e.flags &= -3;
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
function g0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let er = !0;
const Dp = [];
function jr() {
  Dp.push(er), er = !1;
}
function Hr() {
  const e = Dp.pop();
  er = e === void 0 ? !0 : e;
}
function Fd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Dt;
    Dt = void 0;
    try {
      t();
    } finally {
      Dt = r;
    }
  }
}
let Qo = 0;
class y0 {
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
    if (!Dt || !er || Dt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Dt)
      r = this.activeLink = new y0(Dt, this), Dt.deps ? (r.prevDep = Dt.depsTail, Dt.depsTail.nextDep = r, Dt.depsTail = r) : Dt.deps = Dt.depsTail = r, Lp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Dt.depsTail, r.nextDep = void 0, Dt.depsTail.nextDep = r, Dt.depsTail = r, Dt.deps === r && (Dt.deps = n);
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
function Lp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Lp(n);
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
function fn(e, t, r) {
  if (er && Dt) {
    let n = kc.get(e);
    n || kc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Nu()), i.map = n, i.key = r), i.track();
  }
}
function Or(e, t, r, n, i, o) {
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
        (f === "length" || f === es || !_r(f) && f >= d) && a(u);
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
  const t = /* @__PURE__ */ xt(e);
  return t === e ? t : (fn(t, "iterate", es), /* @__PURE__ */ Kn(e) ? t : t.map(rr));
}
function ul(e) {
  return fn(e = /* @__PURE__ */ xt(e), "iterate", es), e;
}
function fr(e, t) {
  return /* @__PURE__ */ Gr(e) ? ro(/* @__PURE__ */ _i(e) ? rr(t) : t) : rr(t);
}
const b0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rl(this, Symbol.iterator, (e) => fr(this, e));
  },
  concat(...e) {
    return Li(this).concat(
      ...e.map((t) => ot(t) ? Li(t) : t)
    );
  },
  entries() {
    return Rl(this, "entries", (e) => (e[1] = fr(this, e[1]), e));
  },
  every(e, t) {
    return Pr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => fr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Pr(
      this,
      "find",
      e,
      t,
      (r) => fr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Pr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pr(
      this,
      "findLast",
      e,
      t,
      (r) => fr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vl(this, "includes", e);
  },
  indexOf(...e) {
    return Vl(this, "indexOf", e);
  },
  join(e) {
    return Li(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return No(this, "pop");
  },
  push(...e) {
    return No(this, "push", e);
  },
  reduce(e, ...t) {
    return Td(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Td(this, "reduceRight", e, t);
  },
  shift() {
    return No(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return No(this, "splice", e);
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
    return No(this, "unshift", e);
  },
  values() {
    return Rl(this, "values", (e) => fr(this, e));
  }
};
function Rl(e, t, r) {
  const n = ul(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Kn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const v0 = Array.prototype;
function Pr(e, t, r, n, i, o) {
  const s = ul(e), a = s !== e && !/* @__PURE__ */ Kn(e), l = s[t];
  if (l !== v0[t]) {
    const u = l.apply(e, o);
    return a ? rr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, fr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Td(e, t, r, n) {
  const i = ul(e), o = i !== e && !/* @__PURE__ */ Kn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = fr(e, c)), r.call(this, c, fr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? fr(e, l) : l;
}
function Vl(e, t, r) {
  const n = /* @__PURE__ */ xt(e);
  fn(n, "iterate", es);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Iu(r[0]) ? (r[0] = /* @__PURE__ */ xt(r[0]), n[t](...r)) : i;
}
function No(e, t, r = []) {
  jr(), ku();
  const n = (/* @__PURE__ */ xt(e))[t].apply(e, r);
  return Mu(), Hr(), n;
}
const S0 = /* @__PURE__ */ vu("__proto__,__v_isRef,__isVue"), Rp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_r)
);
function _0(e) {
  _r(e) || (e = String(e));
  const t = /* @__PURE__ */ xt(this);
  return fn(t, "has", e), t.hasOwnProperty(e);
}
class Vp {
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
      return n === (i ? o ? E0 : Hp : o ? jp : zp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ot(t);
    if (!i) {
      let l;
      if (s && (l = b0[r]))
        return l;
      if (r === "hasOwnProperty")
        return _0;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ gn(t) ? t : n
    );
    if ((_r(r) ? Rp.has(r) : S0(r)) || (i || fn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ gn(a)) {
      const l = s && _u(r) ? a : a.value;
      return i && Ot(l) ? /* @__PURE__ */ Nc(l) : l;
    }
    return Ot(a) ? i ? /* @__PURE__ */ Nc(a) : /* @__PURE__ */ uo(a) : a;
  }
}
class $p extends Vp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = ot(t) && _u(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Gr(o);
      if (!/* @__PURE__ */ Kn(n) && !/* @__PURE__ */ Gr(n) && (o = /* @__PURE__ */ xt(o), n = /* @__PURE__ */ xt(n)), !s && /* @__PURE__ */ gn(o) && !/* @__PURE__ */ gn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : kt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ gn(t) ? t : i
    );
    return t === /* @__PURE__ */ xt(i) && (a ? mr(n, o) && Or(t, "set", r, n) : Or(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = kt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Or(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!_r(r) || !Rp.has(r)) && fn(t, "has", r), n;
  }
  ownKeys(t) {
    return fn(
      t,
      "iterate",
      ot(t) ? "length" : Si
    ), Reflect.ownKeys(t);
  }
}
class w0 extends Vp {
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
const x0 = /* @__PURE__ */ new $p(), k0 = /* @__PURE__ */ new w0(), M0 = /* @__PURE__ */ new $p(!0);
const Pc = (e) => e, Hs = (e) => Reflect.getPrototypeOf(e);
function P0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ xt(i), s = qi(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Pc : t ? ro : rr;
    return !t && fn(
      o,
      "iterate",
      l ? Mc : Si
    ), yn(
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
function Gs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function N0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ xt(o), a = /* @__PURE__ */ xt(i);
      e || (mr(i, a) && fn(s, "get", i), fn(s, "get", a));
      const { has: l } = Hs(s), c = t ? Pc : e ? ro : rr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && fn(/* @__PURE__ */ xt(i), "iterate", Si), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ xt(o), a = /* @__PURE__ */ xt(i);
      return e || (mr(i, a) && fn(s, "has", i), fn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ xt(a), c = t ? Pc : e ? ro : rr;
      return !e && fn(l, "iterate", Si), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return yn(
    r,
    e ? {
      add: Gs("add"),
      set: Gs("set"),
      delete: Gs("delete"),
      clear: Gs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ xt(this), s = Hs(o), a = /* @__PURE__ */ xt(i), l = !t && !/* @__PURE__ */ Kn(i) && !/* @__PURE__ */ Gr(i) ? a : i;
        return s.has.call(o, l) || mr(i, l) && s.has.call(o, i) || mr(a, l) && s.has.call(o, a) || (o.add(l), Or(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Kn(o) && !/* @__PURE__ */ Gr(o) && (o = /* @__PURE__ */ xt(o));
        const s = /* @__PURE__ */ xt(this), { has: a, get: l } = Hs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ xt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? mr(o, d) && Or(s, "set", i, o) : Or(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ xt(this), { has: s, get: a } = Hs(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ xt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Or(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ xt(this), o = i.size !== 0, s = i.clear();
        return o && Or(
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
    r[i] = P0(i, e, t);
  }), r;
}
function Au(e, t) {
  const r = N0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    kt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const A0 = {
  get: /* @__PURE__ */ Au(!1, !1)
}, C0 = {
  get: /* @__PURE__ */ Au(!1, !0)
}, I0 = {
  get: /* @__PURE__ */ Au(!0, !1)
};
const zp = /* @__PURE__ */ new WeakMap(), jp = /* @__PURE__ */ new WeakMap(), Hp = /* @__PURE__ */ new WeakMap(), E0 = /* @__PURE__ */ new WeakMap();
function O0(e) {
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
function F0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : O0(i0(e));
}
// @__NO_SIDE_EFFECTS__
function uo(e) {
  return /* @__PURE__ */ Gr(e) ? e : Cu(
    e,
    !1,
    x0,
    A0,
    zp
  );
}
// @__NO_SIDE_EFFECTS__
function T0(e) {
  return Cu(
    e,
    !1,
    M0,
    C0,
    jp
  );
}
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  return Cu(
    e,
    !0,
    k0,
    I0,
    Hp
  );
}
function Cu(e, t, r, n, i) {
  if (!Ot(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = F0(e);
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
  return /* @__PURE__ */ Gr(e) ? /* @__PURE__ */ _i(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
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
function xt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ xt(t) : e;
}
function D0(e) {
  return !kt(e, "__v_skip") && Object.isExtensible(e) && Mp(e, "__v_skip", !0), e;
}
const rr = (e) => Ot(e) ? /* @__PURE__ */ uo(e) : e, ro = (e) => Ot(e) ? /* @__PURE__ */ Nc(e) : e;
// @__NO_SIDE_EFFECTS__
function gn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
  return Gp(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  return Gp(e, !0);
}
function Gp(e, t) {
  return /* @__PURE__ */ gn(e) ? e : new L0(e, t);
}
class L0 {
  constructor(t, r) {
    this.dep = new Nu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ xt(t), this._value = r ? t : rr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Kn(t) || /* @__PURE__ */ Gr(t);
    t = n ? t : /* @__PURE__ */ xt(t), mr(t, r) && (this._rawValue = t, this._value = n ? t : rr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ gn(e) ? e.value : e;
}
const R0 = {
  get: (e, t, r) => t === "__v_raw" ? e : nt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ gn(i) && !/* @__PURE__ */ gn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Wp(e) {
  return /* @__PURE__ */ _i(e) ? e : new Proxy(e, R0);
}
class V0 {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Nu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Dt !== this)
      return Ep(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Tp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $0(e, t, r = !1) {
  let n, i;
  return at(e) ? n = e : (n = e.get, i = e.set), new V0(n, i, r);
}
const Ws = {}, Na = /* @__PURE__ */ new WeakMap();
let mi;
function z0(e, t = !1, r = mi) {
  if (r) {
    let n = Na.get(r);
    n || Na.set(r, n = []), n.push(e);
  }
}
function j0(e, t, r = Ft) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (B) => i ? B : /* @__PURE__ */ Kn(B) || i === !1 || i === 0 ? Fr(B, 1) : Fr(B);
  let d, u, f, g, k = !1, m = !1;
  if (/* @__PURE__ */ gn(e) ? (u = () => e.value, k = /* @__PURE__ */ Kn(e)) : /* @__PURE__ */ _i(e) ? (u = () => c(e), k = !0) : ot(e) ? (m = !0, k = e.some((B) => /* @__PURE__ */ _i(B) || /* @__PURE__ */ Kn(B)), u = () => e.map((B) => {
    if (/* @__PURE__ */ gn(B))
      return B.value;
    if (/* @__PURE__ */ _i(B))
      return c(B);
    if (at(B))
      return l ? l(B, 2) : B();
  })) : at(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      jr();
      try {
        f();
      } finally {
        Hr();
      }
    }
    const B = mi;
    mi = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      mi = B;
    }
  } : u = br, t && i) {
    const B = u, F = i === !0 ? 1 / 0 : i;
    u = () => Fr(B(), F);
  }
  const h = m0(), S = () => {
    d.stop(), h && h.active && Su(h.effects, d);
  };
  if (o && t) {
    const B = t;
    t = (...F) => {
      B(...F), S();
    };
  }
  let X = m ? new Array(e.length).fill(Ws) : Ws;
  const $ = (B) => {
    if (!(!(d.flags & 1) || !d.dirty && !B))
      if (t) {
        const F = d.run();
        if (i || k || (m ? F.some((Y, H) => mr(Y, X[H])) : mr(F, X))) {
          f && f();
          const Y = mi;
          mi = d;
          try {
            const H = [
              F,
              // pass undefined as the old value when it's changed for the first time
              X === Ws ? void 0 : m && X[0] === Ws ? [] : X,
              g
            ];
            X = F, l ? l(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            mi = Y;
          }
        }
      } else
        d.run();
  };
  return a && a($), d = new Cp(u), d.scheduler = s ? () => s($, !1) : $, g = (B) => z0(B, !1, d), f = d.onStop = () => {
    const B = Na.get(d);
    if (B) {
      if (l)
        l(B, 4);
      else
        for (const F of B) F();
      Na.delete(d);
    }
  }, t ? n ? $(!0) : X = d.run() : s ? s($.bind(null, !0), !0) : d.run(), S.pause = d.pause.bind(d), S.resume = d.resume.bind(d), S.stop = S, S;
}
function Fr(e, t = 1 / 0, r) {
  if (t <= 0 || !Ot(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ gn(e))
    Fr(e.value, t, r);
  else if (ot(e))
    for (let n = 0; n < e.length; n++)
      Fr(e[n], t, r);
  else if (_p(e) || qi(e))
    e.forEach((n) => {
      Fr(n, t, r);
    });
  else if (kp(e)) {
    for (const n in e)
      Fr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Fr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bs(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    dl(i, t, r);
  }
}
function wr(e, t, r, n) {
  if (at(e)) {
    const i = bs(e, t, r, n);
    return i && wp(i) && i.catch((o) => {
      dl(o, t, r);
    }), i;
  }
  if (ot(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(wr(e[o], t, r, n));
    return i;
  }
}
function dl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ft;
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
      jr(), bs(o, null, 10, [
        e,
        l,
        c
      ]), Hr();
      return;
    }
  }
  H0(e, r, i, n, s);
}
function H0(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const _n = [];
let dr = -1;
const Xi = [];
let Zr = null, $i = 0;
const Kp = /* @__PURE__ */ Promise.resolve();
let Aa = null;
function fl(e) {
  const t = Aa || Kp;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function G0(e) {
  let t = dr + 1, r = _n.length;
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
    !(e.flags & 2) && t >= ts(r) ? _n.push(e) : _n.splice(G0(t), 0, e), e.flags |= 1, Up();
  }
}
function Up() {
  Aa || (Aa = Kp.then(Yp));
}
function W0(e) {
  ot(e) ? Xi.push(...e) : Zr && e.id === -1 ? Zr.splice($i + 1, 0, e) : e.flags & 1 || (Xi.push(e), e.flags |= 1), Up();
}
function Dd(e, t, r = dr + 1) {
  for (; r < _n.length; r++) {
    const n = _n[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      _n.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Bp(e) {
  if (Xi.length) {
    const t = [...new Set(Xi)].sort(
      (r, n) => ts(r) - ts(n)
    );
    if (Xi.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, $i = 0; $i < Zr.length; $i++) {
      const r = Zr[$i];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Zr = null, $i = 0;
  }
}
const ts = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Yp(e) {
  try {
    for (dr = 0; dr < _n.length; dr++) {
      const t = _n[dr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dr < _n.length; dr++) {
      const t = _n[dr];
      t && (t.flags &= -2);
    }
    dr = -1, _n.length = 0, Bp(), Aa = null, (_n.length || Xi.length) && Yp();
  }
}
let Dn = null, qp = null;
function Ca(e) {
  const t = Dn;
  return Dn = e, qp = e && e.type.__scopeId || null, t;
}
function Xp(e, t = Dn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Bd(-1);
    const o = Ca(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ca(o), n._d && Bd(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Vr(e, t) {
  if (Dn === null)
    return e;
  const r = yl(Dn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Ft] = t[i];
    o && (at(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Fr(s), n.push({
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
    l && (jr(), wr(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Hr());
  }
}
function K0(e, t) {
  if (pn) {
    let r = pn.provides;
    const n = pn.parent && pn.parent.provides;
    n === r && (r = pn.provides = Object.create(n)), r[e] = t;
  }
}
function la(e, t, r = !1) {
  const n = Gy();
  if (n || Ji) {
    let i = Ji ? Ji._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const U0 = /* @__PURE__ */ Symbol.for("v-scx"), B0 = () => la(U0);
function wi(e, t, r) {
  return Jp(e, t, r);
}
function Jp(e, t, r = Ft) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = yn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (rs) {
    if (o === "sync") {
      const g = B0();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = br, g.resume = br, g.pause = br, g;
    }
  }
  const d = pn;
  a.call = (g, k, m) => wr(g, d, k, m);
  let u = !1;
  o === "post" ? a.scheduler = (g) => {
    kn(g, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (g, k) => {
    k ? g() : Eu(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), u && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = j0(e, t, a);
  return rs && (c ? c.push(f) : l && f()), f;
}
function Y0(e, t, r) {
  const n = this.proxy, i = Yt(e) ? e.includes(".") ? Zp(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = Ss(this), a = Jp(i, o.bind(n), r);
  return s(), a;
}
function Zp(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const q0 = /* @__PURE__ */ Symbol("_vte"), X0 = (e) => e.__isTeleport, J0 = /* @__PURE__ */ Symbol("_leaveCb");
function Ou(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ou(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Qp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ld(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ia = /* @__PURE__ */ new WeakMap();
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
  const o = n.shapeFlag & 4 ? yl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Ft ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ xt(u), g = u === Ft ? Sp : (m) => Ld(d, m) ? !1 : kt(f, m), k = (m, h) => !(h && Ld(d, h));
  if (c != null && c !== l) {
    if (Rd(t), Yt(c))
      d[c] = null, g(c) && (u[c] = null);
    else if (/* @__PURE__ */ gn(c)) {
      const m = t;
      k(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (at(l))
    bs(l, a, 12, [s, d]);
  else {
    const m = Yt(l), h = /* @__PURE__ */ gn(l);
    if (m || h) {
      const S = () => {
        if (e.f) {
          const X = m ? g(l) ? u[l] : d[l] : k() || !e.k ? l.value : d[e.k];
          if (i)
            ot(X) && Su(X, o);
          else if (ot(X))
            X.includes(o) || X.push(o);
          else if (m)
            d[l] = [o], g(l) && (u[l] = d[l]);
          else {
            const $ = [o];
            k(l, e.k) && (l.value = $), e.k && (d[e.k] = $);
          }
        } else m ? (d[l] = s, g(l) && (u[l] = s)) : h && (k(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const X = () => {
          S(), Ia.delete(e);
        };
        X.id = -1, Ia.set(e, X), kn(X, r);
      } else
        Rd(e), S();
    }
  }
}
function Rd(e) {
  const t = Ia.get(e);
  t && (t.flags |= 8, Ia.delete(e));
}
cl().requestIdleCallback;
cl().cancelIdleCallback;
const Bo = (e) => !!e.type.__asyncLoader, eh = (e) => e.type.__isKeepAlive;
function Z0(e, t) {
  th(e, "a", t);
}
function Q0(e, t) {
  th(e, "da", t);
}
function th(e, t, r = pn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (pl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      eh(i.parent.vnode) && ey(n, t, r, i), i = i.parent;
  }
}
function ey(e, t, r, n) {
  const i = pl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  nh(() => {
    Su(n[t], i);
  }, r);
}
function pl(e, t, r = pn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      jr();
      const a = Ss(r), l = wr(t, r, e, s);
      return a(), Hr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Kr = (e) => (t, r = pn) => {
  (!rs || e === "sp") && pl(e, (...n) => t(...n), r);
}, ty = Kr("bm"), hl = Kr("m"), ny = Kr(
  "bu"
), ry = Kr("u"), vs = Kr(
  "bum"
), nh = Kr("um"), iy = Kr(
  "sp"
), oy = Kr("rtg"), sy = Kr("rtc");
function ay(e, t = pn) {
  pl("ec", e, t);
}
const ly = "components", rh = /* @__PURE__ */ Symbol.for("v-ndc");
function cy(e) {
  return Yt(e) ? uy(ly, e, !1) || e : e || rh;
}
function uy(e, t, r = !0, n = !1) {
  const i = Dn || pn;
  if (i) {
    const o = i.type;
    {
      const a = Yy(
        o,
        !1
      );
      if (a && (a === t || a === wn(t) || a === ll(wn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Vd(i[e] || o[e], t) || // global registration
      Vd(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function Vd(e, t) {
  return e && (e[t] || e[wn(t)] || e[ll(wn(t))]);
}
function Nt(e, t, r, n) {
  let i;
  const o = r, s = ot(e);
  if (s || Yt(e)) {
    const a = s && /* @__PURE__ */ _i(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ Kn(e), c = /* @__PURE__ */ Gr(e), e = ul(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ro(rr(e[d])) : rr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Ot(e))
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
const Ac = (e) => e ? kh(e) ? yl(e) : Ac(e.parent) : null, Yo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yn(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => oh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Eu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fl.bind(e.proxy)),
    $watch: (e) => Y0.bind(e)
  })
), $l = (e, t) => e !== Ft && !e.__isScriptSetup && kt(e, t), dy = {
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
        if ($l(n, t))
          return s[t] = 1, n[t];
        if (i !== Ft && kt(i, t))
          return s[t] = 2, i[t];
        if (kt(o, t))
          return s[t] = 3, o[t];
        if (r !== Ft && kt(r, t))
          return s[t] = 4, r[t];
        Cc && (s[t] = 0);
      }
    }
    const c = Yo[t];
    let d, u;
    if (c)
      return t === "$attrs" && fn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Ft && kt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, kt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return $l(i, t) ? (i[t] = r, !0) : n !== Ft && kt(n, t) ? (n[t] = r, !0) : kt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Ft && a[0] !== "$" && kt(e, a) || $l(t, a) || kt(o, a) || kt(n, a) || kt(Yo, a) || kt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : kt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function $d(e) {
  return ot(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Cc = !0;
function fy(e) {
  const t = oh(e), r = e.proxy, n = e.ctx;
  Cc = !1, t.beforeCreate && zd(t.beforeCreate, e, "bc");
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
    beforeDestroy: S,
    beforeUnmount: X,
    destroyed: $,
    unmounted: B,
    render: F,
    renderTracked: Y,
    renderTriggered: H,
    errorCaptured: K,
    serverPrefetch: Q,
    // public API
    expose: fe,
    inheritAttrs: D,
    // assets
    components: oe,
    directives: ne,
    filters: j
  } = t;
  if (c && py(c, n, null), s)
    for (const G in s) {
      const E = s[G];
      at(E) && (n[G] = E.bind(r));
    }
  if (i) {
    const G = i.call(r, r);
    Ot(G) && (e.data = /* @__PURE__ */ uo(G));
  }
  if (Cc = !0, o)
    for (const G in o) {
      const E = o[G], W = at(E) ? E.bind(r, r) : at(E.get) ? E.get.bind(r, r) : br, R = !at(E) && at(E.set) ? E.set.bind(r) : br, J = ut({
        get: W,
        set: R
      });
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => J.value,
        set: (ue) => J.value = ue
      });
    }
  if (a)
    for (const G in a)
      ih(a[G], n, r, G);
  if (l) {
    const G = at(l) ? l.call(r) : l;
    Reflect.ownKeys(G).forEach((E) => {
      K0(E, G[E]);
    });
  }
  d && zd(d, e, "c");
  function L(G, E) {
    ot(E) ? E.forEach((W) => G(W.bind(r))) : E && G(E.bind(r));
  }
  if (L(ty, u), L(hl, f), L(ny, g), L(ry, k), L(Z0, m), L(Q0, h), L(ay, K), L(sy, Y), L(oy, H), L(vs, X), L(nh, B), L(iy, Q), ot(fe))
    if (fe.length) {
      const G = e.exposed || (e.exposed = {});
      fe.forEach((E) => {
        Object.defineProperty(G, E, {
          get: () => r[E],
          set: (W) => r[E] = W,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === br && (e.render = F), D != null && (e.inheritAttrs = D), oe && (e.components = oe), ne && (e.directives = ne), Q && Qp(e);
}
function py(e, t, r = br) {
  ot(e) && (e = Ic(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Ot(i) ? "default" in i ? o = la(
      i.from || n,
      i.default,
      !0
    ) : o = la(i.from || n) : o = la(i), /* @__PURE__ */ gn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function zd(e, t, r) {
  wr(
    ot(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ih(e, t, r, n) {
  let i = n.includes(".") ? Zp(r, n) : () => r[n];
  if (Yt(e)) {
    const o = t[e];
    at(o) && wi(i, o);
  } else if (at(e))
    wi(i, e.bind(r));
  else if (Ot(e))
    if (ot(e))
      e.forEach((o) => ih(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && wi(i, o, e);
    }
}
function oh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ea(l, c, s, !0)
  ), Ea(l, t, s)), Ot(t) && o.set(t, l), l;
}
function Ea(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ea(e, o, r, !0), i && i.forEach(
    (s) => Ea(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = hy[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const hy = {
  data: jd,
  props: Hd,
  emits: Hd,
  // objects
  methods: To,
  computed: To,
  // lifecycle
  beforeCreate: Sn,
  created: Sn,
  beforeMount: Sn,
  mounted: Sn,
  beforeUpdate: Sn,
  updated: Sn,
  beforeDestroy: Sn,
  beforeUnmount: Sn,
  destroyed: Sn,
  unmounted: Sn,
  activated: Sn,
  deactivated: Sn,
  errorCaptured: Sn,
  serverPrefetch: Sn,
  // assets
  components: To,
  directives: To,
  // watch
  watch: gy,
  // provide / inject
  provide: jd,
  inject: my
};
function jd(e, t) {
  return t ? e ? function() {
    return yn(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function my(e, t) {
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
function Sn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function To(e, t) {
  return e ? yn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hd(e, t) {
  return e ? ot(e) && ot(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yn(
    /* @__PURE__ */ Object.create(null),
    $d(e),
    $d(t ?? {})
  ) : t;
}
function gy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = yn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Sn(e[n], t[n]);
  return r;
}
function sh() {
  return {
    app: null,
    config: {
      isNativeTag: Sp,
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
let yy = 0;
function by(e, t) {
  return function(n, i = null) {
    at(n) || (n = yn({}, n)), i != null && !Ot(i) && (i = null);
    const o = sh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: yy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Xy,
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
          const g = c._ceVNode || Ue(n, i);
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), l = !0, c._container = d, d.__vue_app__ = c, yl(g.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (wr(
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
const vy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wn(t)}Modifiers`] || e[`${Ii(t)}Modifiers`];
function Sy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ft;
  let i = r;
  const o = t.startsWith("update:"), s = o && vy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Yt(d) ? d.trim() : d)), s.number && (i = r.map(wu)));
  let a, l = n[a = Tl(t)] || // also try camelCase event handler (#2249)
  n[a = Tl(wn(t))];
  !l && o && (l = n[a = Tl(Ii(t))]), l && wr(
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
    e.emitted[a] = !0, wr(
      c,
      e,
      6,
      i
    );
  }
}
const _y = /* @__PURE__ */ new WeakMap();
function ah(e, t, r = !1) {
  const n = r ? _y : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = ah(c, t, !0);
      d && (a = !0, yn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Ot(e) && n.set(e, null), null) : (ot(o) ? o.forEach((l) => s[l] = null) : yn(s, o), Ot(e) && n.set(e, s), s);
}
function ml(e, t) {
  return !e || !ol(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), kt(e, t[0].toLowerCase() + t.slice(1)) || kt(e, Ii(t)) || kt(e, t));
}
function Gd(e) {
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
  } = e, h = Ca(e);
  let S, X;
  try {
    if (r.shapeFlag & 4) {
      const B = i || n, F = B;
      S = pr(
        c.call(
          F,
          B,
          d,
          u,
          g,
          f,
          k
        )
      ), X = a;
    } else {
      const B = t;
      S = pr(
        B.length > 1 ? B(
          u,
          { attrs: a, slots: s, emit: l }
        ) : B(
          u,
          null
        )
      ), X = t.props ? a : wy(a);
    }
  } catch (B) {
    qo.length = 0, dl(B, e, 1), S = Ue(ti);
  }
  let $ = S;
  if (X && m !== !1) {
    const B = Object.keys(X), { shapeFlag: F } = $;
    B.length && F & 7 && (o && B.some(sl) && (X = xy(
      X,
      o
    )), $ = io($, X, !1, !0));
  }
  return r.dirs && ($ = io($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs), r.transition && Ou($, r.transition), S = $, Ca(h), S;
}
const wy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ol(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, xy = (e, t) => {
  const r = {};
  for (const n in e)
    (!sl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ky(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Wd(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (lh(s, n, f) && !ml(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Wd(n, s, c) : !0 : !!s;
  return !1;
}
function Wd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (lh(t, e, o) && !ml(r, o))
      return !0;
  }
  return !1;
}
function lh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Ot(n) && Ot(i) ? !xu(n, i) : n !== i;
}
function My({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const ch = {}, uh = () => Object.create(ch), dh = (e) => Object.getPrototypeOf(e) === ch;
function Py(e, t, r, n = !1) {
  const i = {}, o = uh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ T0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Ny(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ xt(i), [l] = e.propsOptions;
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
        if (ml(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (kt(o, f))
            g !== o[f] && (o[f] = g, c = !0);
          else {
            const k = wn(f);
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
    fh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !kt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ii(u)) === u || !kt(t, d))) && (l ? r && // for camelCase
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
        (!t || !kt(t, u)) && (delete o[u], c = !0);
  }
  c && Or(e.attrs, "set", "");
}
function fh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Go(l))
        continue;
      const c = t[l];
      let d;
      i && kt(i, d = wn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : ml(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ xt(r), c = a || Ft;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Ec(
        i,
        l,
        u,
        c[u],
        e,
        !kt(c, u)
      );
    }
  }
  return s;
}
function Ec(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = kt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && at(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Ss(i);
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
const Ay = /* @__PURE__ */ new WeakMap();
function ph(e, t, r = !1) {
  const n = r ? Ay : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, g] = ph(u, t, !0);
      yn(s, f), g && a.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Ot(e) && n.set(e, Yi), Yi;
  if (ot(o))
    for (let d = 0; d < o.length; d++) {
      const u = wn(o[d]);
      Kd(u) && (s[u] = Ft);
    }
  else if (o)
    for (const d in o) {
      const u = wn(d);
      if (Kd(u)) {
        const f = o[d], g = s[u] = ot(f) || at(f) ? { type: f } : yn({}, f), k = g.type;
        let m = !1, h = !0;
        if (ot(k))
          for (let S = 0; S < k.length; ++S) {
            const X = k[S], $ = at(X) && X.name;
            if ($ === "Boolean") {
              m = !0;
              break;
            } else $ === "String" && (h = !1);
          }
        else
          m = at(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = m, g[
          1
          /* shouldCastTrue */
        ] = h, (m || kt(g, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Ot(e) && n.set(e, c), c;
}
function Kd(e) {
  return e[0] !== "$" && !Go(e);
}
const Fu = (e) => e === "_" || e === "_ctx" || e === "$stable", Tu = (e) => ot(e) ? e.map(pr) : [pr(e)], Cy = (e, t, r) => {
  if (t._n)
    return t;
  const n = Xp((...i) => Tu(t(...i)), r);
  return n._c = !1, n;
}, hh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Fu(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = Cy(i, o, n);
    else if (o != null) {
      const s = Tu(o);
      t[i] = () => s;
    }
  }
}, mh = (e, t) => {
  const r = Tu(t);
  e.slots.default = () => r;
}, gh = (e, t, r) => {
  for (const n in t)
    (r || !Fu(n)) && (e[n] = t[n]);
}, Iy = (e, t, r) => {
  const n = e.slots = uh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (gh(n, t, r), r && Mp(n, "_", i, !0)) : hh(t, n);
  } else t && mh(e, t);
}, Ey = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ft;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : gh(i, t, r) : (o = !t.$stable, hh(t, i)), s = t;
  } else t && (mh(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Fu(a) && s[a] == null && delete i[a];
}, kn = Ly;
function Oy(e) {
  return Fy(e);
}
function Fy(e, t) {
  const r = cl();
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
    setScopeId: g = br,
    insertStaticContent: k
  } = e, m = (v, b, O, _ = null, z = null, x = null, V = void 0, w = null, N = !!b.dynamicChildren) => {
    if (v === b)
      return;
    v && !Ao(v, b) && (_ = ce(v), ue(v, z, x, !0), v = null), b.patchFlag === -2 && (N = !1, b.dynamicChildren = null);
    const { type: I, ref: q, shapeFlag: se } = b;
    switch (I) {
      case gl:
        h(v, b, O, _);
        break;
      case ti:
        S(v, b, O, _);
        break;
      case jl:
        v == null && X(b, O, _, V);
        break;
      case tt:
        oe(
          v,
          b,
          O,
          _,
          z,
          x,
          V,
          w,
          N
        );
        break;
      default:
        se & 1 ? F(
          v,
          b,
          O,
          _,
          z,
          x,
          V,
          w,
          N
        ) : se & 6 ? ne(
          v,
          b,
          O,
          _,
          z,
          x,
          V,
          w,
          N
        ) : (se & 64 || se & 128) && I.process(
          v,
          b,
          O,
          _,
          z,
          x,
          V,
          w,
          N,
          C
        );
    }
    q != null && z ? Uo(q, v && v.ref, x, b || v, !b) : q == null && v && v.ref != null && Uo(v.ref, null, x, v, !0);
  }, h = (v, b, O, _) => {
    if (v == null)
      n(
        b.el = a(b.children),
        O,
        _
      );
    else {
      const z = b.el = v.el;
      b.children !== v.children && c(z, b.children);
    }
  }, S = (v, b, O, _) => {
    v == null ? n(
      b.el = l(b.children || ""),
      O,
      _
    ) : b.el = v.el;
  }, X = (v, b, O, _) => {
    [v.el, v.anchor] = k(
      v.children,
      b,
      O,
      _,
      v.el,
      v.anchor
    );
  }, $ = ({ el: v, anchor: b }, O, _) => {
    let z;
    for (; v && v !== b; )
      z = f(v), n(v, O, _), v = z;
    n(b, O, _);
  }, B = ({ el: v, anchor: b }) => {
    let O;
    for (; v && v !== b; )
      O = f(v), i(v), v = O;
    i(b);
  }, F = (v, b, O, _, z, x, V, w, N) => {
    if (b.type === "svg" ? V = "svg" : b.type === "math" && (V = "mathml"), v == null)
      Y(
        b,
        O,
        _,
        z,
        x,
        V,
        w,
        N
      );
    else {
      const I = v.el && v.el._isVueCE ? v.el : null;
      try {
        I && I._beginPatch(), Q(
          v,
          b,
          z,
          x,
          V,
          w,
          N
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, Y = (v, b, O, _, z, x, V, w) => {
    let N, I;
    const { props: q, shapeFlag: se, transition: me, dirs: Z } = v;
    if (N = v.el = s(
      v.type,
      x,
      q && q.is,
      q
    ), se & 8 ? d(N, v.children) : se & 16 && K(
      v.children,
      N,
      null,
      _,
      z,
      zl(v, x),
      V,
      w
    ), Z && ci(v, null, _, "created"), H(N, v, v.scopeId, V, _), q) {
      for (const we in q)
        we !== "value" && !Go(we) && o(N, we, null, q[we], x, _);
      "value" in q && o(N, "value", null, q.value, x), (I = q.onVnodeBeforeMount) && cr(I, _, v);
    }
    Z && ci(v, null, _, "beforeMount");
    const he = Ty(z, me);
    he && me.beforeEnter(N), n(N, b, O), ((I = q && q.onVnodeMounted) || he || Z) && kn(() => {
      try {
        I && cr(I, _, v), he && me.enter(N), Z && ci(v, null, _, "mounted");
      } finally {
      }
    }, z);
  }, H = (v, b, O, _, z) => {
    if (O && g(v, O), _)
      for (let x = 0; x < _.length; x++)
        g(v, _[x]);
    if (z) {
      let x = z.subTree;
      if (b === x || Sh(x.type) && (x.ssContent === b || x.ssFallback === b)) {
        const V = z.vnode;
        H(
          v,
          V,
          V.scopeId,
          V.slotScopeIds,
          z.parent
        );
      }
    }
  }, K = (v, b, O, _, z, x, V, w, N = 0) => {
    for (let I = N; I < v.length; I++) {
      const q = v[I] = w ? Cr(v[I]) : pr(v[I]);
      m(
        null,
        q,
        b,
        O,
        _,
        z,
        x,
        V,
        w
      );
    }
  }, Q = (v, b, O, _, z, x, V) => {
    const w = b.el = v.el;
    let { patchFlag: N, dynamicChildren: I, dirs: q } = b;
    N |= v.patchFlag & 16;
    const se = v.props || Ft, me = b.props || Ft;
    let Z;
    if (O && ui(O, !1), (Z = me.onVnodeBeforeUpdate) && cr(Z, O, b, v), q && ci(b, v, O, "beforeUpdate"), O && ui(O, !0), (se.innerHTML && me.innerHTML == null || se.textContent && me.textContent == null) && d(w, ""), I ? fe(
      v.dynamicChildren,
      I,
      w,
      O,
      _,
      zl(b, z),
      x
    ) : V || E(
      v,
      b,
      w,
      null,
      O,
      _,
      zl(b, z),
      x,
      !1
    ), N > 0) {
      if (N & 16)
        D(w, se, me, O, z);
      else if (N & 2 && se.class !== me.class && o(w, "class", null, me.class, z), N & 4 && o(w, "style", se.style, me.style, z), N & 8) {
        const he = b.dynamicProps;
        for (let we = 0; we < he.length; we++) {
          const Pe = he[we], de = se[Pe], ye = me[Pe];
          (ye !== de || Pe === "value") && o(w, Pe, de, ye, z, O);
        }
      }
      N & 1 && v.children !== b.children && d(w, b.children);
    } else !V && I == null && D(w, se, me, O, z);
    ((Z = me.onVnodeUpdated) || q) && kn(() => {
      Z && cr(Z, O, b, v), q && ci(b, v, O, "updated");
    }, _);
  }, fe = (v, b, O, _, z, x, V) => {
    for (let w = 0; w < b.length; w++) {
      const N = v[w], I = b[w], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ao(N, I) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? u(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      m(
        N,
        I,
        q,
        null,
        _,
        z,
        x,
        V,
        !0
      );
    }
  }, D = (v, b, O, _, z) => {
    if (b !== O) {
      if (b !== Ft)
        for (const x in b)
          !Go(x) && !(x in O) && o(
            v,
            x,
            b[x],
            null,
            z,
            _
          );
      for (const x in O) {
        if (Go(x)) continue;
        const V = O[x], w = b[x];
        V !== w && x !== "value" && o(v, x, w, V, z, _);
      }
      "value" in O && o(v, "value", b.value, O.value, z);
    }
  }, oe = (v, b, O, _, z, x, V, w, N) => {
    const I = b.el = v ? v.el : a(""), q = b.anchor = v ? v.anchor : a("");
    let { patchFlag: se, dynamicChildren: me, slotScopeIds: Z } = b;
    Z && (w = w ? w.concat(Z) : Z), v == null ? (n(I, O, _), n(q, O, _), K(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      O,
      q,
      z,
      x,
      V,
      w,
      N
    )) : se > 0 && se & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === me.length ? (fe(
      v.dynamicChildren,
      me,
      O,
      z,
      x,
      V,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || z && b === z.subTree) && yh(
      v,
      b,
      !0
      /* shallow */
    )) : E(
      v,
      b,
      O,
      q,
      z,
      x,
      V,
      w,
      N
    );
  }, ne = (v, b, O, _, z, x, V, w, N) => {
    b.slotScopeIds = w, v == null ? b.shapeFlag & 512 ? z.ctx.activate(
      b,
      O,
      _,
      V,
      N
    ) : j(
      b,
      O,
      _,
      z,
      x,
      V,
      N
    ) : re(v, b, N);
  }, j = (v, b, O, _, z, x, V) => {
    const w = v.component = Hy(
      v,
      _,
      z
    );
    if (eh(v) && (w.ctx.renderer = C), Wy(w, !1, V), w.asyncDep) {
      if (z && z.registerDep(w, L, V), !v.el) {
        const N = w.subTree = Ue(ti);
        S(null, N, b, O), v.placeholder = N.el;
      }
    } else
      L(
        w,
        v,
        b,
        O,
        z,
        x,
        V
      );
  }, re = (v, b, O) => {
    const _ = b.component = v.component;
    if (ky(v, b, O))
      if (_.asyncDep && !_.asyncResolved) {
        G(_, b, O);
        return;
      } else
        _.next = b, _.update();
    else
      b.el = v.el, _.vnode = b;
  }, L = (v, b, O, _, z, x, V) => {
    const w = () => {
      if (v.isMounted) {
        let { next: se, bu: me, u: Z, parent: he, vnode: we } = v;
        {
          const p = bh(v);
          if (p) {
            se && (se.el = we.el, G(v, se, V)), p.asyncDep.then(() => {
              kn(() => {
                v.isUnmounted || I();
              }, z);
            });
            return;
          }
        }
        let Pe = se, de;
        ui(v, !1), se ? (se.el = we.el, G(v, se, V)) : se = we, me && aa(me), (de = se.props && se.props.onVnodeBeforeUpdate) && cr(de, he, se, we), ui(v, !0);
        const ye = Gd(v), y = v.subTree;
        v.subTree = ye, m(
          y,
          ye,
          // parent may have changed if it's in a teleport
          u(y.el),
          // anchor may have changed if it's in a fragment
          ce(y),
          v,
          z,
          x
        ), se.el = ye.el, Pe === null && My(v, ye.el), Z && kn(Z, z), (de = se.props && se.props.onVnodeUpdated) && kn(
          () => cr(de, he, se, we),
          z
        );
      } else {
        let se;
        const { el: me, props: Z } = b, { bm: he, m: we, parent: Pe, root: de, type: ye } = v, y = Bo(b);
        ui(v, !1), he && aa(he), !y && (se = Z && Z.onVnodeBeforeMount) && cr(se, Pe, b), ui(v, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            ye,
            v.parent ? v.parent.type : void 0
          );
          const p = v.subTree = Gd(v);
          m(
            null,
            p,
            O,
            _,
            v,
            z,
            x
          ), b.el = p.el;
        }
        if (we && kn(we, z), !y && (se = Z && Z.onVnodeMounted)) {
          const p = b;
          kn(
            () => cr(se, Pe, p),
            z
          );
        }
        (b.shapeFlag & 256 || Pe && Bo(Pe.vnode) && Pe.vnode.shapeFlag & 256) && v.a && kn(v.a, z), v.isMounted = !0, b = O = _ = null;
      }
    };
    v.scope.on();
    const N = v.effect = new Cp(w);
    v.scope.off();
    const I = v.update = N.run.bind(N), q = v.job = N.runIfDirty.bind(N);
    q.i = v, q.id = v.uid, N.scheduler = () => Eu(q), ui(v, !0), I();
  }, G = (v, b, O) => {
    b.component = v;
    const _ = v.vnode.props;
    v.vnode = b, v.next = null, Ny(v, b.props, _, O), Ey(v, b.children, O), jr(), Dd(v), Hr();
  }, E = (v, b, O, _, z, x, V, w, N = !1) => {
    const I = v && v.children, q = v ? v.shapeFlag : 0, se = b.children, { patchFlag: me, shapeFlag: Z } = b;
    if (me > 0) {
      if (me & 128) {
        R(
          I,
          se,
          O,
          _,
          z,
          x,
          V,
          w,
          N
        );
        return;
      } else if (me & 256) {
        W(
          I,
          se,
          O,
          _,
          z,
          x,
          V,
          w,
          N
        );
        return;
      }
    }
    Z & 8 ? (q & 16 && te(I, z, x), se !== I && d(O, se)) : q & 16 ? Z & 16 ? R(
      I,
      se,
      O,
      _,
      z,
      x,
      V,
      w,
      N
    ) : te(I, z, x, !0) : (q & 8 && d(O, ""), Z & 16 && K(
      se,
      O,
      _,
      z,
      x,
      V,
      w,
      N
    ));
  }, W = (v, b, O, _, z, x, V, w, N) => {
    v = v || Yi, b = b || Yi;
    const I = v.length, q = b.length, se = Math.min(I, q);
    let me;
    for (me = 0; me < se; me++) {
      const Z = b[me] = N ? Cr(b[me]) : pr(b[me]);
      m(
        v[me],
        Z,
        O,
        null,
        z,
        x,
        V,
        w,
        N
      );
    }
    I > q ? te(
      v,
      z,
      x,
      !0,
      !1,
      se
    ) : K(
      b,
      O,
      _,
      z,
      x,
      V,
      w,
      N,
      se
    );
  }, R = (v, b, O, _, z, x, V, w, N) => {
    let I = 0;
    const q = b.length;
    let se = v.length - 1, me = q - 1;
    for (; I <= se && I <= me; ) {
      const Z = v[I], he = b[I] = N ? Cr(b[I]) : pr(b[I]);
      if (Ao(Z, he))
        m(
          Z,
          he,
          O,
          null,
          z,
          x,
          V,
          w,
          N
        );
      else
        break;
      I++;
    }
    for (; I <= se && I <= me; ) {
      const Z = v[se], he = b[me] = N ? Cr(b[me]) : pr(b[me]);
      if (Ao(Z, he))
        m(
          Z,
          he,
          O,
          null,
          z,
          x,
          V,
          w,
          N
        );
      else
        break;
      se--, me--;
    }
    if (I > se) {
      if (I <= me) {
        const Z = me + 1, he = Z < q ? b[Z].el : _;
        for (; I <= me; )
          m(
            null,
            b[I] = N ? Cr(b[I]) : pr(b[I]),
            O,
            he,
            z,
            x,
            V,
            w,
            N
          ), I++;
      }
    } else if (I > me)
      for (; I <= se; )
        ue(v[I], z, x, !0), I++;
    else {
      const Z = I, he = I, we = /* @__PURE__ */ new Map();
      for (I = he; I <= me; I++) {
        const M = b[I] = N ? Cr(b[I]) : pr(b[I]);
        M.key != null && we.set(M.key, I);
      }
      let Pe, de = 0;
      const ye = me - he + 1;
      let y = !1, p = 0;
      const T = new Array(ye);
      for (I = 0; I < ye; I++) T[I] = 0;
      for (I = Z; I <= se; I++) {
        const M = v[I];
        if (de >= ye) {
          ue(M, z, x, !0);
          continue;
        }
        let ie;
        if (M.key != null)
          ie = we.get(M.key);
        else
          for (Pe = he; Pe <= me; Pe++)
            if (T[Pe - he] === 0 && Ao(M, b[Pe])) {
              ie = Pe;
              break;
            }
        ie === void 0 ? ue(M, z, x, !0) : (T[ie - he] = I + 1, ie >= p ? p = ie : y = !0, m(
          M,
          b[ie],
          O,
          null,
          z,
          x,
          V,
          w,
          N
        ), de++);
      }
      const P = y ? Dy(T) : Yi;
      for (Pe = P.length - 1, I = ye - 1; I >= 0; I--) {
        const M = he + I, ie = b[M], ge = b[M + 1], U = M + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ge.el || vh(ge)
        ) : _;
        T[I] === 0 ? m(
          null,
          ie,
          O,
          U,
          z,
          x,
          V,
          w,
          N
        ) : y && (Pe < 0 || I !== P[Pe] ? J(ie, O, U, 2) : Pe--);
      }
    }
  }, J = (v, b, O, _, z = null) => {
    const { el: x, type: V, transition: w, children: N, shapeFlag: I } = v;
    if (I & 6) {
      J(v.component.subTree, b, O, _);
      return;
    }
    if (I & 128) {
      v.suspense.move(b, O, _);
      return;
    }
    if (I & 64) {
      V.move(v, b, O, C);
      return;
    }
    if (V === tt) {
      n(x, b, O);
      for (let se = 0; se < N.length; se++)
        J(N[se], b, O, _);
      n(v.anchor, b, O);
      return;
    }
    if (V === jl) {
      $(v, b, O);
      return;
    }
    if (_ !== 2 && I & 1 && w)
      if (_ === 0)
        w.beforeEnter(x), n(x, b, O), kn(() => w.enter(x), z);
      else {
        const { leave: se, delayLeave: me, afterLeave: Z } = w, he = () => {
          v.ctx.isUnmounted ? i(x) : n(x, b, O);
        }, we = () => {
          x._isLeaving && x[J0](
            !0
            /* cancelled */
          ), se(x, () => {
            he(), Z && Z();
          });
        };
        me ? me(x, he, we) : we();
      }
    else
      n(x, b, O);
  }, ue = (v, b, O, _ = !1, z = !1) => {
    const {
      type: x,
      props: V,
      ref: w,
      children: N,
      dynamicChildren: I,
      shapeFlag: q,
      patchFlag: se,
      dirs: me,
      cacheIndex: Z,
      memo: he
    } = v;
    if (se === -2 && (z = !1), w != null && (jr(), Uo(w, null, O, v, !0), Hr()), Z != null && (b.renderCache[Z] = void 0), q & 256) {
      b.ctx.deactivate(v);
      return;
    }
    const we = q & 1 && me, Pe = !Bo(v);
    let de;
    if (Pe && (de = V && V.onVnodeBeforeUnmount) && cr(de, b, v), q & 6)
      A(v.component, O, _);
    else {
      if (q & 128) {
        v.suspense.unmount(O, _);
        return;
      }
      we && ci(v, null, b, "beforeUnmount"), q & 64 ? v.type.remove(
        v,
        b,
        O,
        C,
        _
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== tt || se > 0 && se & 64) ? te(
        I,
        b,
        O,
        !1,
        !0
      ) : (x === tt && se & 384 || !z && q & 16) && te(N, b, O), _ && Se(v);
    }
    const ye = he != null && Z == null;
    (Pe && (de = V && V.onVnodeUnmounted) || we || ye) && kn(() => {
      de && cr(de, b, v), we && ci(v, null, b, "unmounted"), ye && (v.el = null);
    }, O);
  }, Se = (v) => {
    const { type: b, el: O, anchor: _, transition: z } = v;
    if (b === tt) {
      ee(O, _);
      return;
    }
    if (b === jl) {
      B(v);
      return;
    }
    const x = () => {
      i(O), z && !z.persisted && z.afterLeave && z.afterLeave();
    };
    if (v.shapeFlag & 1 && z && !z.persisted) {
      const { leave: V, delayLeave: w } = z, N = () => V(O, x);
      w ? w(v.el, x, N) : N();
    } else
      x();
  }, ee = (v, b) => {
    let O;
    for (; v !== b; )
      O = f(v), i(v), v = O;
    i(b);
  }, A = (v, b, O) => {
    const { bum: _, scope: z, job: x, subTree: V, um: w, m: N, a: I } = v;
    Ud(N), Ud(I), _ && aa(_), z.stop(), x && (x.flags |= 8, ue(V, v, b, O)), w && kn(w, b), kn(() => {
      v.isUnmounted = !0;
    }, b);
  }, te = (v, b, O, _ = !1, z = !1, x = 0) => {
    for (let V = x; V < v.length; V++)
      ue(v[V], b, O, _, z);
  }, ce = (v) => {
    if (v.shapeFlag & 6)
      return ce(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const b = f(v.anchor || v.el), O = b && b[q0];
    return O ? f(O) : b;
  };
  let be = !1;
  const ve = (v, b, O) => {
    let _;
    v == null ? b._vnode && (ue(b._vnode, null, null, !0), _ = b._vnode.component) : m(
      b._vnode || null,
      v,
      b,
      null,
      null,
      null,
      O
    ), b._vnode = v, be || (be = !0, Dd(_), Bp(), be = !1);
  }, C = {
    p: m,
    um: ue,
    m: J,
    r: Se,
    mt: j,
    mc: K,
    pc: E,
    pbc: fe,
    n: ce,
    o: e
  };
  return {
    render: ve,
    hydrate: void 0,
    createApp: by(ve)
  };
}
function zl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ui({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ty(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ot(n) && ot(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Cr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && yh(s, a)), a.type === gl && (a.patchFlag === -1 && (a = i[o] = Cr(a)), a.el = s.el), a.type === ti && !a.el && (a.el = s.el);
    }
}
function Dy(e) {
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
function bh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bh(t);
}
function Ud(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function vh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? vh(t.subTree) : null;
}
const Sh = (e) => e.__isSuspense;
function Ly(e, t) {
  t && t.pendingBranch ? ot(e) ? t.effects.push(...e) : t.effects.push(e) : W0(e);
}
const tt = /* @__PURE__ */ Symbol.for("v-fgt"), gl = /* @__PURE__ */ Symbol.for("v-txt"), ti = /* @__PURE__ */ Symbol.for("v-cmt"), jl = /* @__PURE__ */ Symbol.for("v-stc"), qo = [];
let Ln = null;
function Fe(e = !1) {
  qo.push(Ln = e ? null : []);
}
function Ry() {
  qo.pop(), Ln = qo[qo.length - 1] || null;
}
let ns = 1;
function Bd(e, t = !1) {
  ns += e, e < 0 && Ln && t && (Ln.hasOnce = !0);
}
function _h(e) {
  return e.dynamicChildren = ns > 0 ? Ln || Yi : null, Ry(), ns > 0 && Ln && Ln.push(e), e;
}
function Re(e, t, r, n, i, o) {
  return _h(
    ke(
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
  return _h(
    Ue(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function wh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ao(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xh = ({ key: e }) => e ?? null, ca = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Yt(e) || /* @__PURE__ */ gn(e) || at(e) ? { i: Dn, r: e, k: t, f: !!r } : e : null);
function ke(e, t = null, r = null, n = 0, i = null, o = e === tt ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xh(t),
    ref: t && ca(t),
    scopeId: qp,
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
const Ue = Vy;
function Vy(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === rh) && (e = ti), wh(e)) {
    const a = io(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Du(a, r), ns > 0 && !o && Ln && (a.shapeFlag & 6 ? Ln[Ln.indexOf(e)] = a : Ln.push(a)), a.patchFlag = -2, a;
  }
  if (qy(e) && (e = e.__vccOpts), t) {
    t = $y(t);
    let { class: a, style: l } = t;
    a && !Yt(a) && (t.class = gt(a)), Ot(l) && (/* @__PURE__ */ Iu(l) && !ot(l) && (l = yn({}, l)), t.style = Et(l));
  }
  const s = Yt(e) ? 1 : Sh(e) ? 128 : X0(e) ? 64 : Ot(e) ? 4 : at(e) ? 2 : 0;
  return ke(
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
function $y(e) {
  return e ? /* @__PURE__ */ Iu(e) || dh(e) ? yn({}, e) : e : null;
}
function io(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Ir(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && xh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ot(o) ? o.concat(ca(t)) : [o, ca(t)] : ca(t)
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
    ssContent: e.ssContent && io(e.ssContent),
    ssFallback: e.ssFallback && io(e.ssFallback),
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
  return Ue(gl, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Fe(), Vn(ti, null, e)) : Ue(ti, null, e);
}
function pr(e) {
  return e == null || typeof e == "boolean" ? Ue(ti) : ot(e) ? Ue(
    tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wh(e) ? Cr(e) : Ue(gl, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : io(e);
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
      !i && !dh(t) ? t._ctx = Dn : i === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: Dn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Do(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Ir(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gt([t.class, n.class]));
      else if (i === "style")
        t.style = Et([t.style, n.style]);
      else if (ol(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(ot(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !sl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function cr(e, t, r, n = null) {
  wr(e, t, 7, [
    r,
    n
  ]);
}
const zy = sh();
let jy = 0;
function Hy(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || zy, o = {
    uid: jy++,
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
    scope: new h0(
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
    propsOptions: ph(n, i),
    emitsOptions: ah(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ft,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ft,
    data: Ft,
    props: Ft,
    attrs: Ft,
    slots: Ft,
    refs: Ft,
    setupState: Ft,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Sy.bind(null, o), e.ce && e.ce(o), o;
}
let pn = null;
const Gy = () => pn || Dn;
let Oa, Oc;
{
  const e = cl(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Oa = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => pn = r
  ), Oc = t(
    "__VUE_SSR_SETTERS__",
    (r) => rs = r
  );
}
const Ss = (e) => {
  const t = pn;
  return Oa(e), e.scope.on(), () => {
    e.scope.off(), Oa(t);
  };
}, Yd = () => {
  pn && pn.scope.off(), Oa(null);
};
function kh(e) {
  return e.vnode.shapeFlag & 4;
}
let rs = !1;
function Wy(e, t = !1, r = !1) {
  t && Oc(t);
  const { props: n, children: i } = e.vnode, o = kh(e);
  Py(e, n, o, t), Iy(e, i, r || t);
  const s = o ? Ky(e, t) : void 0;
  return t && Oc(!1), s;
}
function Ky(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dy);
  const { setup: n } = r;
  if (n) {
    jr();
    const i = e.setupContext = n.length > 1 ? By(e) : null, o = Ss(e), s = bs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = wp(s);
    if (Hr(), o(), (a || e.sp) && !Bo(e) && Qp(e), a) {
      if (s.then(Yd, Yd), t)
        return s.then((l) => {
          qd(e, l);
        }).catch((l) => {
          dl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      qd(e, s);
  } else
    Mh(e);
}
function qd(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ot(t) && (e.setupState = Wp(t)), Mh(e);
}
function Mh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || br);
  {
    const i = Ss(e);
    jr();
    try {
      fy(e);
    } finally {
      Hr(), i();
    }
  }
}
const Uy = {
  get(e, t) {
    return fn(e, "get", ""), e[t];
  }
};
function By(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Uy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function yl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wp(D0(e.exposed)), {
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
function Yy(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qy(e) {
  return at(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ $0(e, t, rs), Xy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fc;
const Xd = typeof window < "u" && window.trustedTypes;
if (Xd)
  try {
    Fc = /* @__PURE__ */ Xd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ph = Fc ? (e) => Fc.createHTML(e) : (e) => e, Jy = "http://www.w3.org/2000/svg", Zy = "http://www.w3.org/1998/Math/MathML", Ar = typeof document < "u" ? document : null, Jd = Ar && /* @__PURE__ */ Ar.createElement("template"), Qy = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ar.createElementNS(Jy, e) : t === "mathml" ? Ar.createElementNS(Zy, e) : r ? Ar.createElement(e, { is: r }) : Ar.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ar.createTextNode(e),
  createComment: (e) => Ar.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ar.querySelector(e),
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
      Jd.innerHTML = Ph(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Jd.content;
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
}, eb = /* @__PURE__ */ Symbol("_vtc");
function tb(e, t, r) {
  const n = e[eb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Fa = /* @__PURE__ */ Symbol("_vod"), Nh = /* @__PURE__ */ Symbol("_vsh"), Pi = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Fa] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Co(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Co(e, !0), n.enter(e)) : n.leave(e, () => {
      Co(e, !1);
    }) : Co(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Co(e, t);
  }
};
function Co(e, t) {
  e.style.display = t ? e[Fa] : "none", e[Nh] = !t;
}
const nb = /* @__PURE__ */ Symbol(""), rb = /(?:^|;)\s*display\s*:/;
function ib(e, t, r) {
  const n = e.style, i = Yt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Yt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && ua(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && ua(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), ua(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[nb];
      s && (r += ";" + s), n.cssText = r, o = rb.test(r);
    }
  } else t && e.removeAttribute("style");
  Fa in e && (e[Fa] = o ? n.display : "", e[Nh] && (n.display = "none"));
}
const Zd = /\s*!important$/;
function ua(e, t, r) {
  if (ot(r))
    r.forEach((n) => ua(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = ob(e, t);
    Zd.test(r) ? e.setProperty(
      Ii(n),
      r.replace(Zd, ""),
      "important"
    ) : e[n] = r;
  }
}
const Qd = ["Webkit", "Moz", "ms"], Hl = {};
function ob(e, t) {
  const r = Hl[t];
  if (r)
    return r;
  let n = wn(t);
  if (n !== "filter" && n in e)
    return Hl[t] = n;
  n = ll(n);
  for (let i = 0; i < Qd.length; i++) {
    const o = Qd[i] + n;
    if (o in e)
      return Hl[t] = o;
  }
  return t;
}
const ef = "http://www.w3.org/1999/xlink";
function tf(e, t, r, n, i, o = f0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(ef, t.slice(6, t.length)) : e.setAttributeNS(ef, t, r) : r == null || o && !Pp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : _r(r) ? String(r) : r
  );
}
function nf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Ph(r) : r);
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
    a === "boolean" ? r = Pp(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
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
function sb(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const rf = /* @__PURE__ */ Symbol("_vei");
function ab(e, t, r, n, i = null) {
  const o = e[rf] || (e[rf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = lb(t);
    if (n) {
      const c = o[t] = db(
        n,
        i
      );
      zi(e, a, c, l);
    } else s && (sb(e, a, s, l), o[t] = void 0);
  }
}
const of = /(?:Once|Passive|Capture)$/;
function lb(e) {
  let t;
  if (of.test(e)) {
    t = {};
    let n;
    for (; n = e.match(of); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ii(e.slice(2)), t];
}
let Gl = 0;
const cb = /* @__PURE__ */ Promise.resolve(), ub = () => Gl || (cb.then(() => Gl = 0), Gl = Date.now());
function db(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    wr(
      fb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = ub(), r;
}
function fb(e, t) {
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
const sf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? tb(e, n, s) : t === "style" ? ib(e, r, n) : ol(t) ? sl(t) || ab(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hb(e, t, n, s)) ? (nf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && tf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (mb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Yt(n))) ? nf(e, wn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), tf(e, t, n, s));
};
function hb(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && sf(t) && at(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return sf(t) && Yt(r) ? !1 : t in e;
}
function mb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = wn(t);
  return Array.isArray(r) ? r.some((i) => wn(i) === n) : Object.keys(r).some((i) => wn(i) === n);
}
const af = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ot(t) ? (r) => aa(t, r) : t;
};
function gb(e) {
  e.target.composing = !0;
}
function lf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wl = /* @__PURE__ */ Symbol("_assign");
function cf(e, t, r) {
  return t && (e = e.trim()), r && (e = wu(e)), e;
}
const uf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[Wl] = af(i);
    const o = n || i.props && i.props.type === "number";
    zi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[Wl](cf(e.value, r, o));
    }), (r || o) && zi(e, "change", () => {
      e.value = cf(e.value, r, o);
    }), t || (zi(e, "compositionstart", gb), zi(e, "compositionend", lf), zi(e, "change", lf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[Wl] = af(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? wu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, yb = ["ctrl", "shift", "alt", "meta"], bb = {
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
  exact: (e, t) => yb.some((r) => e[`${r}Key`] && !t.includes(r))
}, Ct = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = bb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, vb = /* @__PURE__ */ yn({ patchProp: pb }, Qy);
let df;
function Sb() {
  return df || (df = Oy(vb));
}
const Lu = ((...e) => {
  const t = Sb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = wb(n);
    if (!i) return;
    const o = t._component;
    !at(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, _b(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function _b(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wb(e) {
  return Yt(e) ? document.querySelector(e) : e;
}
const xb = "PanoramaSuite.Debug.Diagnostics", kb = "PanoramaSuite.Debug.ExportDiagnostics", Kl = "pano_suite.diagnostics.v1", ff = "pano_suite.diagnostics.previous.v1", Mb = 300, Pb = 2e5, Nb = 100, Ab = 20, Cb = 1e3, Ib = 2, Ks = 1024 * 1024;
function Xr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Eb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Ob() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Eb,
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
function Fb(e = {}) {
  const t = { ...Ob(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    d.delete(C), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    u.delete(C), g.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), S = { created: 0, lost: 0, restored: 0, disposed: 0 }, X = [], $ = /* @__PURE__ */ new Map();
  let B = { count: 0, maxMs: 0 }, F = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 };
  const H = [];
  function K(C, le, v = void 0) {
    X.push(v === void 0 ? { t: t.clock(), type: C, label: le } : { t: t.clock(), type: C, label: le, detail: v }), X.length > Nb && X.shift();
  }
  function Q(C, le, v, b, O) {
    if (!r || !b || !t.WeakRef) return b;
    const _ = { ref: new t.WeakRef(b), label: O };
    return C.add(_), le == null || le.register(b, _), v.created += 1, b;
  }
  function fe(C, le = "") {
    return Q(d, k, f, C, le);
  }
  function D(C, le = "") {
    return Q(u, m, g, C, le);
  }
  function oe({ label: C = "", width: le, height: v, offscreen: b = !1 } = {}) {
    const O = globalThis.OffscreenCanvas;
    let _;
    return b && typeof O < "u" ? _ = new O(le, v) : (_ = t.document().createElement("canvas"), le !== void 0 && v !== void 0 && (_.width = le, _.height = v)), fe(_, C);
  }
  function ne(C) {
    C.width = 0, C.height = 0, r && (f.released += 1);
  }
  function j(C = t.document(), le = "") {
    var v;
    return D(((v = C == null ? void 0 : C.createElement) == null ? void 0 : v.call(C, "video")) || null, le);
  }
  function re(C, le) {
    if (!r || !C) return () => {
    };
    const v = { label: le, lost: !1, disposed: !1 };
    h.add(v), S.created += 1, K("webgl-created", le);
    const b = () => {
      v.disposed || (v.lost = !0, S.lost += 1, K("webglcontextlost", le));
    }, O = () => {
      v.disposed || (v.lost = !1, S.restored += 1, K("webglcontextrestored", le));
    };
    return C.addEventListener("webglcontextlost", b), C.addEventListener("webglcontextrestored", O), () => {
      v.disposed || (v.disposed = !0, h.delete(v), S.disposed += 1, K("webgl-disposed", le));
    };
  }
  function L(C, le) {
    return $.set(C, le), () => {
      $.get(C) === le && $.delete(C);
    };
  }
  function G() {
    return r ? t.now() : -1;
  }
  function E(C) {
    if (C < 0 || !r) return;
    const le = t.now() - C;
    B.count += 1, B.maxMs = Math.max(B.maxMs, le);
  }
  function W(C, le) {
    if (le < 0 || !r) return;
    const v = t.now() - le, b = F.get(C) ?? { count: 0, maxMs: 0 };
    b.count += 1, b.maxMs = Math.max(b.maxMs, v), F.set(C, b);
  }
  function R() {
    let C = 0, le = 0, v = 0, b = [0, 0];
    const O = {};
    for (const _ of d) {
      const z = _.ref.deref();
      if (!z) continue;
      C += 1;
      const x = z.width * z.height;
      x > 0 && (le += 1), v += x, x > b[0] * b[1] && (b = [z.width, z.height]);
      const V = O[_.label] ?? (O[_.label] = [0, 0]);
      V[0] += 1, V[1] += x;
    }
    return { ...f, alive: C, sized: le, pixels: v, mb: Xr(v * 4 / Ks, 1), largest: b, byLabel: O };
  }
  function J() {
    const C = [];
    let le = 0, v = 0;
    for (const b of u) {
      const O = b.ref.deref();
      if (!O) continue;
      le += 1;
      const _ = !O.paused && !O.ended;
      _ && (v += 1), C.length < Ab && C.push({
        label: b.label,
        playing: _,
        src: !!(O.currentSrc || O.src),
        size: [O.videoWidth || 0, O.videoHeight || 0],
        ready: O.readyState ?? 0,
        connected: !!O.isConnected
      });
    }
    return { ...g, alive: le, playing: v, list: C };
  }
  function ue() {
    const C = t.now(), le = t.memory(), v = {
      t: t.clock(),
      heap: le ? { used: Xr(le.usedJSHeapSize / Ks, 1), total: Xr(le.totalJSHeapSize / Ks, 1), limit: Xr(le.jsHeapSizeLimit / Ks, 1) } : null,
      canvas: R(),
      webgl: { ...S, alive: [...h].filter((b) => !b.lost).length },
      video: J(),
      frame: { count: B.count, maxMs: Xr(B.maxMs), longTasks: Y.count, longTaskMaxMs: Xr(Y.maxMs) },
      renders: Object.fromEntries([...F].map(([b, O]) => [b, { count: O.count, maxMs: Xr(O.maxMs) }])),
      sources: Object.fromEntries([...$].map(([b, O]) => [b, O()])),
      costMs: Xr(c, 3)
    };
    return B = { count: 0, maxMs: 0 }, F = /* @__PURE__ */ new Map(), Y = { count: 0, maxMs: 0 }, H.push({ record: v, text: JSON.stringify(v) }), H.length > Mb && H.shift(), l += 1, l % Ib === 0 && ee(), c = t.now() - C, v;
  }
  function Se(C = Pb) {
    const le = JSON.stringify({ ...o, events: X }).slice(0, -1);
    let v = C - le.length - 14, b = H.length;
    for (; b > 0 && v - H[b - 1].text.length - 1 >= 0; )
      b -= 1, v -= H[b].text.length + 1;
    return `${le},"records":[${H.slice(b).map((O) => O.text).join(",")}]}`;
  }
  function ee() {
    if (!o) return;
    const C = t.storage();
    if (C) {
      o.savedAt = t.clock();
      try {
        C.setItem(Kl, Se());
      } catch {
      }
    }
  }
  function A() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", ee();
  }
  function te() {
    var O;
    if (n) return i;
    n = !0;
    const C = t.storage();
    if (!C) return null;
    let le = null;
    try {
      if (le = C.getItem(Kl), le === null) {
        const _ = C.getItem(ff);
        return i = _ === null ? null : JSON.parse(_), i;
      }
      C.setItem(ff, le), C.removeItem(Kl), i = JSON.parse(le);
    } catch {
      return i;
    }
    const v = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], b = v.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${v.length} records kept. Its last records:`,
      JSON.stringify(b)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((O = v.at(-1)) == null ? void 0 : O.t) || 0).toISOString()}; ${v.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(b)
    ), i;
  }
  function ce(C) {
    const le = C === !0;
    if (te(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, H.length = 0, a = t.observeLongTasks((v) => {
          for (const b of v)
            Y.count += 1, Y.maxMs = Math.max(Y.maxMs, b.duration);
        }), t.addUnload(A), s = t.setInterval(ue, Cb), ee();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(A), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", ee();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...X], records: H.map((C) => C.record) } : null,
      previous: i
    };
  }
  function ve() {
    const C = t.document(), le = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), v = URL.createObjectURL(le), b = C.createElement("a");
    b.href = v, b.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, b.click(), setTimeout(() => URL.revokeObjectURL(v), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: oe,
    releaseCanvas: ne,
    trackCanvas: fe,
    createVideo: j,
    trackVideo: D,
    watchContext: re,
    addSource: L,
    frameStart: G,
    frameEnd: E,
    renderEnd: W,
    sample: ue,
    serialize: Se,
    recoverPrevious: te,
    setEnabled: ce,
    exportData: be,
    download: ve
  };
}
const Cn = Fb(), nn = Cn.createCanvas, is = Cn.releaseCanvas, Ul = Cn.trackCanvas, _s = Cn.createVideo, pf = Cn.trackVideo, Tb = Cn.addSource, Db = Cn.frameStart, Lb = Cn.frameEnd;
function Ah(e, t) {
  const r = Cn.watchContext(e.canvas, t), n = Cn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Cn.frameStart(), l = o(s);
    return Cn.renderEnd(t, a), l;
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
const Rb = {
  id: xb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Cn.setEnabled(e === !0)
}, hf = {
  id: kb,
  label: "Export Panorama Suite diagnostics",
  function: () => Cn.download()
};
function ji(e, t) {
  const r = nn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function Vb() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function mf(e, t = 8) {
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
function Qr(e, t, r) {
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
let Bl = null, Yl = null, gf = null, yf = null, Wt = null, Io = null;
function $b() {
  if (Yl) return Yl;
  const e = 6, t = 17, r = nn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Yl = r, r;
}
function ql(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Bl = Qr(Bl, r, n);
  const i = Bl;
  Kt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", yf !== i.ctx && (gf = i.ctx.createPattern($b(), "repeat"), yf = i.ctx), i.ctx.fillStyle = gf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function zb(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function jb(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Hb(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Gb(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Vu = 128;
function Wb(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const X = $t.get(l);
    return $t.delete(l), $t.set(l, X), X;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Ru(c, c), f = u.getContext("2d"), g = a * s, k = s + 1, m = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, S = f.createRadialGradient(d, d, g, d, d, k);
  return S.addColorStop(0, m), S.addColorStop(1, h), f.fillStyle = S, f.fillRect(0, 0, c, c), $t.set(l, u), u;
}
function Kb(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), k = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${g.toFixed(2)}:${k.toFixed(2)}:${m.toFixed(2)}`;
  if ($t.has(h)) {
    const K = $t.get(h);
    return $t.delete(h), $t.set(h, K), K;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const S = Ru(u, f), X = S.getContext("2d"), $ = X.createImageData(u, f), B = $.data, F = Math.max(0, e - t), Y = Math.max(0, Math.min(1, r)), H = 1 + g;
  for (let K = 0; K < f; K++)
    for (let Q = 0; Q < u; Q++) {
      const fe = Q + 0.5 - e, D = K + 0.5 - t, oe = Math.max(Math.abs(fe) - F, 0), j = Math.hypot(oe, D) / t;
      if (j >= 1) continue;
      const re = j <= Y ? 1 : Math.max(0, (1 - j) / Math.max(1e-4, 1 - Y)), L = 1 - j, G = 1 + g * (1 - L) * (1 - L), E = 1 - k * L * L, W = G * E / H;
      let R = 1;
      if (m > 0) {
        const Se = Math.floor((D + t) / 1.5), ee = Math.floor((fe + e) / 8), A = xi(Zi(Se * 41 + 500, ee * 19 + 300));
        R = 1 - m * 0.42 * A;
      }
      const J = Math.round(255 * Math.min(1, d * re * W * R));
      if (J <= 0) continue;
      const ue = (K * u + Q) * 4;
      B[ue] = a, B[ue + 1] = l, B[ue + 2] = c, B[ue + 3] = J;
    }
  return X.putImageData($, 0, 0), $t.set(h, S), S;
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
function Ub(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = xi(Zi(e * 17 + 3, t * 13 + 7)), g = u + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const k = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), m = Bb(e, t, a, l, r, n), h = o * 0.55;
  if (m < h) return 0;
  const X = 0.45 + 0.55 * ((m - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * k * X));
}
function Bb(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = xi(Zi(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = xi(Zi(c * 23 + 800, d * 29 + 500)), f = xi(Zi(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function Yb(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if ($t.has(f)) {
    const X = $t.get(f);
    return $t.delete(f), $t.set(f, X), X;
  }
  $t.size >= Vu && $t.delete($t.keys().next().value);
  const g = Ru(c, d), k = g.getContext("2d"), m = k.createImageData(c, d), h = m.data, S = Math.max(0, Math.min(1, r));
  for (let X = 0; X < d; X++)
    for (let $ = 0; $ < c; $++) {
      const B = Ub($, X, e, t, S, u, l);
      if (B <= 0) continue;
      const F = (X * c + $) * 4;
      h[F] = o, h[F + 1] = s, h[F + 2] = a, h[F + 3] = B;
    }
  return k.putImageData(m, 0, 0), $t.set(f, g), g;
}
function Ch(e, t, r) {
  var m, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = Hb(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = qb(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = Gb(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let k;
  if (n === "chisel") {
    const S = i * a, X = i, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), B = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = Kb(S, X, o, s, $, B, F);
  } else if (n === "crayon") {
    const S = i * a, X = i, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = Yb(S, X, o, s, $);
  } else
    k = Wb(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: k, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: g, latitudeCorrection: u };
}
function qb(e) {
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
function Xb(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function bf(e, t, r, n, i) {
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
      const k = xi(f + g * 2) * Math.PI * 2, m = Math.sqrt(xi(f + g * 2 + 1)) * u, h = t + Math.cos(k) * m, S = r + Math.sin(k) * m, X = Math.max(0.5, e.radiusPx * i * 0.48), $ = (0.5 - S / Math.max(1, e.desc.height)) * Math.PI, B = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, F = X * e.aspect * B;
      bf(e, h, S, X, F);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  bf(e, t, r, o, l);
}
function vf(e, t, r) {
  const n = jb(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = Ch(e, t, r);
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
    f === 1 ? u = os(s, d.x, d.y, k.x, k.y, u) : u = Ta(s, l, d, k, g, u), l = c, c = g, d = k;
  }
  a.length === 2 ? os(s, d.x, d.y, c.x, c.y, u) : Ta(s, l, d, c, c, u), e.restore();
}
function da(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = Xb(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = zb(n[f]);
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
function Us(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    da(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? vf(e, t, r) : (Io = Qr(Io, r.width, r.height), Kt(Io), vf(Io.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Io.canvas, 0, 0), e.restore());
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
function Ta(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, g = f + c, k = f - u, m = 16;
  let h = o, S = r.x, X = r.y;
  for (let $ = 1; $ <= m; $++) {
    const B = u + k * $ / m, F = ((u - B) * t.x + (B - d) * r.x) / (u - d), Y = ((u - B) * t.y + (B - d) * r.y) / (u - d), H = ((f - B) * r.x + (B - u) * n.x) / (f - u), K = ((f - B) * r.y + (B - u) * n.y) / (f - u), Q = ((g - B) * n.x + (B - f) * i.x) / (g - f), fe = ((g - B) * n.y + (B - f) * i.y) / (g - f), D = ((f - B) * F + (B - d) * H) / (f - d), oe = ((f - B) * Y + (B - d) * K) / (f - d), ne = ((g - B) * H + (B - u) * Q) / (g - u), j = ((g - B) * K + (B - u) * fe) / (g - u), re = ((f - B) * D + (B - u) * ne) / (f - u), L = ((f - B) * oe + (B - u) * j) / (f - u);
    h = os(e, S, X, re, L, h), S = re, X = L;
  }
  return h;
}
function Jb(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const g = Ch(i, n, o), k = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", S = String((n == null ? void 0 : n.layerKind) || "paint");
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
      layerKind: S,
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
  l.pointCount === 1 ? l.distSinceStamp = os(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Ta(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function bl(e = {}) {
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
  function k(ne) {
    return {
      actionGroupId: ne,
      descriptor: n,
      committedPaint: ji(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(ne) {
    let j = i.get(ne);
    return j || (j = k(ne), i.set(ne, j)), j;
  }
  function h(ne) {
    return d === "mask" ? s : c ? m(c) : a;
  }
  function S(ne) {
    var W;
    const j = !u || u.length !== ne.length || ne.some((R, J) => R !== u[J]), re = d === "paint" && ((W = c ? i.get(c) : a) == null ? void 0 : W.activeStroke) || null;
    let L = s.displayDirty || a.displayDirty || j;
    for (const R of ne) {
      const J = i.get(R);
      if (J != null && J.displayDirty) {
        L = !0;
        break;
      }
    }
    if (re && (L = !0), !L) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const R of ne) {
      const J = i.get(R);
      J && (J.displayDirty = !1);
    }
    u = [...ne];
    const G = l.ctx;
    Kt(l);
    const E = !!(re != null && re.isEraser);
    for (const R of ne) {
      const J = i.get(R);
      if (!J) continue;
      const Se = c === J.actionGroupId && d === "paint" ? J.activeStroke : null;
      if (E)
        Wt = Qr(Wt, t, r), Kt(Wt), Wt.ctx.drawImage(J.committedPaint.canvas, 0, 0), di(Wt.ctx, o.canvas), G.drawImage(Wt.canvas, 0, 0);
      else if (G.drawImage(J.committedPaint.canvas, 0, 0), Se) {
        const ee = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Se.strokeOpacity ?? 1));
        G.save(), G.globalAlpha = ee, G.drawImage(o.canvas, 0, 0), G.restore();
      }
    }
  }
  function X(ne) {
    var re, L, G, E, W;
    for (const R of i.values())
      Kt(R.committedPaint), Kt(R.currentStroke), R.activeStroke = null, cn(R);
    Kt(s.committedMask), Kt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const j = [
      ...Array.isArray((L = (re = ne == null ? void 0 : ne.painting) == null ? void 0 : re.paint) == null ? void 0 : L.strokes) ? ne.painting.paint.strokes : [],
      ...Array.isArray((E = (G = ne == null ? void 0 : ne.painting) == null ? void 0 : G.mask) == null ? void 0 : E.strokes) ? ne.painting.mask.strokes : []
    ];
    for (const R of j) {
      if (((W = R == null ? void 0 : R.targetSpace) == null ? void 0 : W.kind) !== "ERP_GLOBAL") continue;
      const J = String((R == null ? void 0 : R.layerKind) || "paint"), Se = String((R == null ? void 0 : R.toolKind) || "pen") === "eraser";
      if (J === "mask") {
        const ee = s.descriptor;
        Se ? (Wt = Qr(Wt, ee.width, ee.height), Kt(Wt), Us(Wt.ctx, R, ee), di(s.committedMask.ctx, Wt.canvas)) : (Us(s.committedMask.ctx, R, ee), s.painted = !0);
        continue;
      }
      if (Se) {
        Wt = Qr(Wt, n.width, n.height), Kt(Wt), Us(Wt.ctx, R, n);
        for (const ee of i.values())
          di(ee.committedPaint.ctx, Wt.canvas), cn(ee);
      } else {
        const ee = String((R == null ? void 0 : R.actionGroupId) || "__default__"), A = m(ee), te = A.descriptor;
        Us(A.committedPaint.ctx, R, te), cn(A);
      }
    }
    S([...i.keys()]);
  }
  function $(ne, j) {
    d = String((ne == null ? void 0 : ne.layerKind) || "");
    const re = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Kt(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const L = re ? a : m(String((ne == null ? void 0 : ne.actionGroupId) || "__default__"));
      c = re ? "" : String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), Kt(L.currentStroke), L.activeStroke = null, cn(L);
    }
  }
  function B(ne, j) {
    var J;
    const re = String((ne == null ? void 0 : ne.layerKind) || "paint"), L = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", G = re === "mask" ? s : L ? a : m(String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__")), E = G.activeStroke, W = G.descriptor;
    if (E && E.pointCount > 1) {
      const ue = G.currentStroke.ctx;
      ue.globalCompositeOperation = "source-over";
      const Se = {
        ctx: ue,
        stampTex: E.stampTex,
        radiusPx: E.radiusPx,
        spacingPx: E.spacingPx,
        desc: W,
        aspect: E.aspect,
        angle: E.angle,
        stampKind: E.stampKind,
        scatter: E.scatter,
        latitudeCorrection: E.latitudeCorrection
      };
      E.pointCount === 2 ? os(Se, E.lastMidX, E.lastMidY, E.prev.x, E.prev.y, E.distSinceStamp) : Ta(Se, E.pprev, { x: E.lastMidX, y: E.lastMidY }, E.prev, E.prev, E.distSinceStamp);
    }
    G.lassoPreviewActive && (Kt(G.currentStroke), da(G.currentStroke.ctx, ne, W), G.lassoPreviewActive = !1);
    const R = re === "mask" ? s.committedMask : G.committedPaint;
    if (L && re === "paint")
      for (const ue of i.values())
        di(ue.committedPaint.ctx, G.currentStroke.canvas), cn(ue);
    else if (L)
      di(R.ctx, G.currentStroke.canvas);
    else {
      re === "mask" && (s.painted = !0);
      const ue = Math.max(0, Math.min(1, (E == null ? void 0 : E.strokeOpacity) ?? 1));
      R.ctx.save(), R.ctx.globalAlpha = ue, R.ctx.drawImage(G.currentStroke.canvas, 0, 0), R.ctx.restore();
    }
    Vb() && (String((ne == null ? void 0 : ne.toolKind) || ""), String((W == null ? void 0 : W.kind) || ""), Number((W == null ? void 0 : W.width) || 0), Number((W == null ? void 0 : W.height) || 0), String(((J = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : J.viewMode) || ""), Number((ne == null ? void 0 : ne.aspect) ?? 1), mf(G.currentStroke.canvas), mf(R.canvas), void 0), Kt(G.currentStroke), G.activeStroke = null, cn(G), f.clear(), c = null, d = "", S([...i.keys()]);
  }
  function F(ne) {
    if (d === "mask")
      Kt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Kt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const j = i.get(c);
      j && (Kt(j.currentStroke), j.activeStroke = null, j.lassoPreviewActive = !1, cn(j));
    }
    f.clear(), c = null, d = "", S([...i.keys()]);
  }
  function Y(ne, j) {
    var L;
    if (d = String((ne == null ? void 0 : ne.layerKind) || ""), String(((L = ne == null ? void 0 : ne.geometry) == null ? void 0 : L.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Kt(s.currentStroke), da(s.currentStroke.ctx, ne, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const G = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", E = G ? a : m(String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__"));
        c = G ? "" : String((ne == null ? void 0 : ne.actionGroupId) || c || "__default__"), Kt(E.currentStroke), da(E.currentStroke.ctx, ne, E.descriptor), E.lassoPreviewActive = !0, cn(E);
      }
      S([...i.keys()]);
    }
  }
  function H(ne) {
    return S(ne ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function K(ne) {
    return i.get(String(ne)) ?? null;
  }
  function Q() {
    return [...i.keys()];
  }
  function fe(ne) {
    var ue;
    const j = i.get(String(ne));
    if (!j) return null;
    const re = d === "paint" && c === j.actionGroupId, L = d === "paint" && ((ue = c ? i.get(c) : a) == null ? void 0 : ue.activeStroke) || null, G = !!(L != null && L.isEraser), E = re ? j.activeStroke : null;
    if (!G && !E) return j.committedPaint.canvas;
    const W = `${j.revision}:${a.revision}:${G}`, R = f.get(j.actionGroupId);
    if ((R == null ? void 0 : R.key) === W) return R.surface.canvas;
    const J = Qr((R == null ? void 0 : R.surface) ?? null, t, r);
    return Kt(J), J.ctx.drawImage(j.committedPaint.canvas, 0, 0), G ? di(J.ctx, o.canvas) : (J.ctx.save(), J.ctx.globalAlpha = j.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, E.strokeOpacity ?? 1)), J.ctx.drawImage(o.canvas, 0, 0), J.ctx.restore()), f.set(j.actionGroupId, { key: W, surface: J }), J.canvas;
  }
  function D() {
    const ne = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ne || ne.isEraser) ? null : `${s.revision}:${!!ne}`;
  }
  function oe() {
    const ne = D();
    if (ne === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === ne) return g.surface.canvas;
    const j = Qr((g == null ? void 0 : g.surface) ?? null, t, r);
    Kt(j);
    const re = d === "mask" ? s.activeStroke : null;
    return re != null && re.isEraser ? (Wt = Qr(Wt, t, r), Kt(Wt), Wt.ctx.drawImage(s.committedMask.canvas, 0, 0), di(Wt.ctx, o.canvas), ql(j.ctx, Wt.canvas)) : (ql(j.ctx, s.committedMask.canvas), re && ql(j.ctx, o.canvas)), g = { key: ne, surface: j }, j.canvas;
  }
  return {
    rebuildCommitted: X,
    beginStroke: $,
    appendStrokePoint: Jb,
    updateActiveStroke: Y,
    commitActiveStroke: B,
    cancelActiveStroke: F,
    getErpTarget: H,
    ensureTarget: h,
    getGroupTarget: K,
    getGroupDisplayCanvas: fe,
    getMaskDisplayCanvas: oe,
    getMaskDisplayRevision: D,
    getAllGroupIds: Q
  };
}
function Ie(e, t, r) {
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
function Eo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Da(e, t = 0) {
  const r = Eo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Eo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Eo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Eo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Eo(t) || 0);
}
function Ih(e) {
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
const Sf = Math.PI / 180, _f = 0.12, Zb = Tc, Qb = 35, e1 = 140, Lo = 100, t1 = 20, wf = 0.8;
function n1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Lo), 1, 179) * Sf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Sf;
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
  function c(X, $ = null) {
    a && a(X, $);
  }
  function d(X, $, B = null, F = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(X || 0), l.drag.lastY = Number($ || 0), l.drag.lastTs = Number(F || performance.now()), l.drag.pointerId = B, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: B }), !0;
  }
  function u(X, $, B = "pano", F = performance.now()) {
    if (!l.drag.active) return !1;
    const Y = Number(F || performance.now()), H = Number(X), K = Number($), Q = H - l.drag.lastX, fe = K - l.drag.lastY;
    l.drag.lastX = H, l.drag.lastY = K, l.drag.lastTs = Y;
    const D = n() || { x: 1, y: 1 }, oe = Number(D.x || 1), ne = Number(D.y || 1), j = { ...t() };
    let re = 0, L = 0;
    if (B === "unwrap") {
      const E = i() || { w: 1, h: 1 }, W = Math.max(1, Number(E.w || 1)), R = Math.max(1, Number(E.h || 1)), J = Q / W, ue = fe / R;
      re = -J * 360 * oe, L = ue * 180 * ne;
    } else {
      const E = o() || { w: 0, h: 0 }, W = Math.max(1, Number(E.w || 0)), R = Math.max(1, Number(E.h || 0));
      if (W > 1 && R > 1) {
        const J = Ie(Number(j.fov || Lo), 1, 179), ue = Ie(n1(J, W, R), 0.1, 179);
        re = -(Q / W) * J * oe, L = fe / R * ue * ne;
      } else
        re = -Q * _f * oe, L = fe * _f * ne;
    }
    j.yaw = jt(Number(j.yaw || 0) + re), j.pitch = Ie(Number(j.pitch || 0) + L, -89.9, 89.9), r(j), l.velHistory.push({ ts: Y, yaw: j.yaw, pitch: j.pitch });
    let G = 0;
    for (; G < l.velHistory.length - 1 && l.velHistory[G].ts < Y - 100; ) G++;
    return G > 0 && l.velHistory.splice(0, G), l.inertia.active = !1, l.inertia.lastTs = Y, s(), c("drag", { phase: "move", dx: Q, dy: fe, dYaw: re, dPitch: L }), !0;
  }
  function f(X = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const $ = Number(X || performance.now());
    l.drag.lastTs = $;
    const B = l.velHistory.filter((Y) => $ - Y.ts <= 80);
    if (B.length >= 2) {
      const Y = B[0], H = B.at(-1), K = Math.max(1e-3, (H.ts - Y.ts) / 1e3);
      let Q = H.yaw - Y.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), l.inertia.vx = Q / K, l.inertia.vy = (H.pitch - Y.pitch) / K;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const F = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = F > t1, l.inertia.lastTs = $, c("drag", { phase: "end", speed: F, inertiaActive: l.inertia.active }), !0;
  }
  function g(X = performance.now()) {
    if (!l.inertia.active) return !1;
    const $ = Number(X || performance.now()), B = Math.max(1e-3, ($ - (l.inertia.lastTs || $)) / 1e3);
    l.inertia.lastTs = $;
    const F = { ...t() };
    F.yaw = jt(Number(F.yaw || 0) + l.inertia.vx * B), F.pitch = Ie(Number(F.pitch || 0) + l.inertia.vy * B, -89.9, 89.9);
    const Y = Math.exp(-5.5 * B);
    return l.inertia.vx *= Y, l.inertia.vy *= Y, Math.abs(l.inertia.vx) < wf && Math.abs(l.inertia.vy) < wf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(F), s(), l.inertia.active;
  }
  function k() {
    const X = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], X;
  }
  function m(X) {
    const $ = Math.sign(Number(X || 0));
    if (!$) return !1;
    const B = { ...t() }, F = Number(B.fov || Lo);
    return B.fov = Ie(F + $ * Zb, Qb, e1), r(B), s(), c("wheel", { deltaSign: $, fovBefore: F, fovAfter: B.fov }), !0;
  }
  function h(X, $ = 0) {
    return m(Da(X, $));
  }
  function S() {
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
    resetView: S
  };
}
const Mt = Math.PI / 180, Zt = 180 / Math.PI;
function Un(e, t, r) {
  return { x: e, y: t, z: r };
}
function La(e, t) {
  return Un(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ra(e, t) {
  return Un(e.x * t, e.y * t, e.z * t);
}
function Xl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Hu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Un(e.x / t, e.y / t, e.z / t);
}
function Nn(e, t) {
  const r = e * Mt, n = t * Mt, i = Math.cos(n);
  return Un(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function fo(e, t, r = 0) {
  const n = Number(e || 0) * Mt, i = Number(t || 0) * Mt, o = r * Mt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
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
function Va(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function It(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function r1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function i1(e) {
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
function o1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function s1(e, t) {
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
function Bs(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = s1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function a1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Bs(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Bs(e.points, t, 1);
  if (!o) return null;
  const s = Bs(e.rawPoints, t, 1), a = Bs(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function l1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = o1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = a1(e.geometry, r, n, t === "paint");
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
function xf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = l1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function c1(e) {
  if (!e || typeof e != "object") return null;
  const t = It(e.u0, null), r = It(e.v0, null), n = It(e.u1, null), i = It(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function u1(e) {
  const t = e || {};
  return {
    du: It(t.du, 0) ?? 0,
    dv: It(t.dv, 0) ?? 0,
    rot_deg: It(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, It(t.scale, 1) ?? 1)
  };
}
function d1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = c1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, It(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: u1(e.transform)
  } : null;
}
function f1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = d1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function po(e) {
  const t = r1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: i1(e.groups),
    paint: xf(e.paint, "paint"),
    mask: xf(e.mask, "mask"),
    raster_objects: f1(e.raster_objects)
  };
}
const Bn = 1, Yn = 179, Dc = 85;
function vl(e) {
  const t = ((st(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Eh(e, t) {
  let r = st(e, 0) - st(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Oh(e, t, { shiftKey: r = !1 } = {}) {
  let n = st(e, 0) + st(t, 0) * Zt;
  return r && (n = Math.round(n / 15) * 15), vl(n);
}
function st(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function oi(e = {}) {
  const t = Ie(st(e.hFOV_deg || 90, 90), Bn, Yn), r = Ie(st(e.vFOV_deg || 60, 60), Bn, Yn), n = Math.tan(t * Mt * 0.5), i = Math.tan(r * Mt * 0.5);
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
  const r = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = oi(t);
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
  const r = Math.max(1e-12, st(t, 1)), n = Math.max(1e-6, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * Zt, Bn, Yn), s = Ie(2 * Math.atan(i / (2 * r)) * Zt, Bn, Yn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function p1(e, t, r) {
  const n = st(e == null ? void 0 : e.x, 0), i = st(e == null ? void 0 : e.y, 0), o = Math.max(1, st((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, st((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = oi(t), l = Math.max(1e-12, st(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function Ku(e, t, r = Dc) {
  const n = Math.max(1e-12, st(t, 1)), i = Ie(st(r, Dc), 1, 89.999), o = n * Math.tan(i * Mt), s = Math.max(1, st((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, st((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Fh(e, t, r) {
  const n = Math.max(1e-12, st(t, 1));
  return {
    x: (st(r == null ? void 0 : r.x, 0) - st(e == null ? void 0 : e.x, 0)) / n,
    y: -(st(r == null ? void 0 : r.y, 0) - st(e == null ? void 0 : e.y, 0)) / n
  };
}
function h1(e, t) {
  const r = Ie(st(e, 90), Bn, Yn), n = Math.max(1e-6, st(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * Mt * 0.5) / n) * Zt,
    Bn,
    Yn
  );
}
function fa(e, t) {
  const r = Ie(st(e, 60), Bn, Yn), n = Math.max(1e-6, st(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * Mt * 0.5) * n) * Zt,
    Bn,
    Yn
  );
}
function kf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function m1(e, t) {
  const r = kf(e, 1), n = kf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Ei(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Mt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Mt;
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
  return (n == null ? void 0 : n[0]) || m1(t, 1);
}
function Uu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ki(t), t;
}
function Th({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ie(s, Bn, Yn) : Ie(Math.min(42, st(i, 100) * 0.42), 8, 96);
  return Uu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: st(t, 0),
    pitch_deg: Ie(st(r, 0), -89.9, 89.9),
    roll_deg: vl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Dr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ki(e);
}
function Dh(e, t) {
  const r = oi(e), n = st(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * Zt, o = 2 * Math.atan(r.tanHalfY * n) * Zt;
  return i < Bn || i > Yn || o < Bn || o > Yn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Lh(e, t, r = Tc) {
  const n = Math.sign(st(t, 0)), i = Math.abs(st(r, Tc));
  if (!n || !(i > 0)) return null;
  const o = oi(e), s = o.hFovDeg + n * i;
  if (s < Bn || s > Yn) return null;
  const a = Math.tan(s * Mt * 0.5);
  return Dh(e, a / o.tanHalfX);
}
function Rh(e, t) {
  const r = oi(e), n = fo(r.yawDeg, r.pitchDeg, r.rollDeg), i = st(t == null ? void 0 : t.x, 0), o = st(t == null ? void 0 : t.y, 0);
  return Hu(La(La(n.fwd, Ra(n.right, i)), Ra(n.up, o)));
}
function g1(e) {
  return Un(e.x, e.y, -e.z);
}
function pa(e) {
  return Un(e.x, e.y, -e.z);
}
function xn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = fo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Vh(e) {
  const t = pa(Un(e[0][0], e[1][0], e[2][0])), r = pa(Un(e[0][1], e[1][1], e[2][1])), n = pa(Un(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
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
function si(e) {
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
function Ys(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const vi = 1e-6, Lc = 1e-6, y1 = 1e-9;
function as(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function b1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    as(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return as(0, n, o, 1, 0.5 * (s + a));
}
function oo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function so(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, g, k) => f + g * a[k], 0) < 0) return r.map(() => 0);
  const l = s.map((f, g) => (f * o + a[g] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((g, k) => g + k * k, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function $h(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  oo(e, n) && (l = so(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return oo(e, n + 1) && (c = so(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function zh(e, t, r, n, i) {
  const [[o], [s]] = $h(e, t, r.map((a) => [a]), n);
  return as(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function v1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = $h(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => as(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function $a([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function S1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Jl(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function _1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Rc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ui(e, t) {
  return _1($a([-e[0], -e[1], -e[2], e[3]], t));
}
function Zl(e, t, r) {
  return $a(e, Rc(Ui(e, t).map((n) => r * n)));
}
function Ql(e, t) {
  const r = S1(e, t);
  if (Math.abs(r) > Lc) return r < 0;
  const [n, i, o] = Ui(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Lc) return s < 0;
  return !1;
}
function qs(e) {
  const { x: t, y: r, z: n, w: i } = si(xn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Vc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function w1(e, t, r, n) {
  const i = qs(e[r].value);
  let o = qs(e[r + 1].value);
  Ql(i, o) && (o = Jl(o));
  const s = t[r + 1] - t[r], a = Ui(i, o);
  let l = a;
  if (oo(e, r)) {
    let F = qs(e[r - 1].value);
    Ql(F, i) && (F = Jl(F)), l = so(t, r, Ui(i, F), a).map((Y) => Y * s);
  }
  let c = a;
  if (oo(e, r + 1)) {
    let F = qs(e[r + 2].value);
    Ql(o, F) && (F = Jl(F)), c = so(t, r + 1, Ui(o, i), Ui(o, F)).map((Y) => Y * s);
  }
  const d = $a(i, Rc(l.map((F, Y) => 0.5 * (F - a[Y])))), u = $a(o, Rc(a.map((F, Y) => 0.5 * (F - c[Y])))), [f, g, k, m] = Zl(Zl(i, o, n), Zl(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: S, rollDeg: X } = Vh(ss({ x: f, y: g, z: k, w: m })), $ = e[r].value, B = e[r + 1].value;
  return {
    yaw_deg: Vc(h, $.yaw_deg, B.yaw_deg, n),
    pitch_deg: S,
    roll_deg: Vc(X, $.roll_deg, B.roll_deg, n)
  };
}
function ls(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function za(e) {
  return Math.sqrt(ls(e, e));
}
function ja(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function jh(e, t) {
  const r = ls(e, t), n = t.map((s, a) => s - r * e[a]), i = za(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Hi(e, t) {
  const r = za(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function Xs(e, t, r) {
  return Hi(e, jh(e, t).map((n) => r * n));
}
function ec(e, t) {
  const r = ja(e[t].value), n = ja(e[t + 1].value), i = ls(r, n), o = i < 0 && za(n.map((l, c) => l - i * r[c])) <= Lc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = jh(r, n);
  const a = za(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function x1(e, t, r, n) {
  const i = ja(e[r].value), o = ja(e[r + 1].value), [s, a, l] = ec(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  oo(e, r) && (c = so(t, r, ec(e, r - 1)[1].map(($) => -$), c).map(($) => $ * u)), oo(e, r + 1) && (d = so(t, r + 1, d.map(($) => -$), ec(e, r + 1)[0]).map(($) => $ * u));
  let f, g, k;
  if (l) {
    const $ = Math.PI, B = as(0, ls(c, s) / $ / 3, $ - ls(d, a) / $ / 3, $, n);
    [f, g, k] = Hi(i, s.map((F) => B * F / $));
  } else {
    const $ = Xs(Hi(i, c.map((Y) => Y / 3)), Hi(o, d.map((Y) => -Y / 3)), n), B = Xs(Hi(i, c.map((Y) => n * Y / 3)), $, n), F = Xs($, Hi(o, d.map((Y) => -(1 - n) * Y / 3)), n);
    [f, g, k] = Xs(B, F, n);
  }
  const m = Math.hypot(f, k), h = e[r].value.yaw_deg, S = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= y1 ? h + (S - h) * n : Vc(Math.atan2(f, k) * 180 / Math.PI, h, S, n), pitch_deg: Math.atan2(g, m) * 180 / Math.PI };
}
function k1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = zh(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function M1(e, t, r, n) {
  return zh(e, t, e.map((i) => i.value), r, n);
}
const P1 = { position: v1, rotation: w1, direction: x1, size: k1 };
function Ht(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Ys(e[t].value);
  if (r <= n[0].frame + vi) return Ys(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - vi) return Ys(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + vi; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= vi || s.easing === "hold") return Ys(s.value);
  const a = n.map((c) => c.frame), l = b1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (P1[t] ?? M1)(n, a, o, l);
}
function $c(e) {
  return Math.min(179, Math.max(0.1, e));
}
function N1(e) {
  return Math.min(1, Math.max(0, e));
}
function Hh(e) {
  return Math.max(1e-6, e);
}
function Gh(e, t) {
  return t - (e.start - e.in);
}
function ho(e, t) {
  return t >= e.start - vi && (e.duration === null || t < e.start + e.duration - vi);
}
function ws(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: $c(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function xs(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = Gh(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : ws(n, r),
    scene: {
      active: i.visible && ho(i.clip, r),
      clip_frame: o,
      position: Ht(i, "position", o),
      ...Ht(i, "rotation", o),
      scale: Hh(Ht(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Ai(s, r))
  };
}
function A1(e, t) {
  if (e.placement === "world")
    return {
      position: Ht(e, "position", t),
      ...Ht(e, "rotation", t),
      scale: Hh(Ht(e, "scale", t))
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
  const r = Gh(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ho(e.clip, t),
    clip_frame: r,
    ...A1(e, r),
    opacity: N1(Ht(e, "opacity", r))
  };
}
const C1 = 2, I1 = ["sky", "world"], zc = ["perspective", "erp"], E1 = ["input", "output", "temp"], Wh = [0.42, 0, 0.58, 1], Kh = 1, Bu = 1e3, jc = 1e7, Yu = jc;
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
function In(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Sl(e) {
  const t = Bt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ha(e) {
  const t = Sl(e);
  return t === null ? null : In(t, -jc, jc);
}
function mo(e) {
  const t = qu(e, null);
  return t === null ? null : In(t, Kh, Bu);
}
function Uh(e) {
  const t = Sl(e);
  return t !== null && t >= 1 ? Math.min(t, Yu) : null;
}
function cs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Bh(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Bt(r, null));
  return t.includes(null) ? null : t;
}
function Yh(e) {
  return Bh(e) || [0, 0, 0];
}
function qh(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: In(Bt(t.pitch_deg, 0), -90, 90),
    roll_deg: Bt(t.roll_deg, 0)
  };
}
function O1(e) {
  return In(Bt(e, 90), 0.1, 179);
}
function F1(e) {
  return qu(e, 1);
}
function T1(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Bt(t.yaw_deg, 0),
    pitch_deg: In(Bt(t.pitch_deg, 0), -90, 90)
  };
}
function D1(e) {
  return Bt(e, 0);
}
function L1(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: In(Bt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: In(Bt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Xh(e) {
  return In(Bt(e, 1), 0, 1);
}
const _l = [["position", Yh], ["rotation", qh], ["fov", O1]], wl = [["position", Yh], ["rotation", qh], ["scale", F1]], Xu = [["direction", T1], ["roll", D1], ["size", L1], ["opacity", Xh]], Ju = [...wl, ["opacity", Xh]];
function R1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Bt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...Wh];
}
function V1(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = Bh(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function $1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = ha(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: R1(i.easing) }, a = r ? V1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Zu(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: $1(o.keyframes, i, n === "position") };
  }
  return r;
}
function Jh(e) {
  const t = tn(e) ? e : {}, r = ha(t.start), n = ha(t.in), i = ha(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function z1(e) {
  const t = tn(e) ? e : {}, r = In(Bt(t.x0, 0), 0, 1), n = In(Bt(t.y0, 0), 0, 1), i = In(Bt(t.x1, 1), 0, 1), o = In(Bt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function j1(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: E1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function H1(e) {
  const t = j1(e.source);
  if (!t) return null;
  const r = I1.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Jh(e.clip),
    visible: cs(e.visible, !0),
    locked: cs(e.locked, !1),
    crop: z1(e.crop),
    ...Zu(e, n ? Ju : Xu)
  };
  return n || (i.z_index = Sl(e.z_index) ?? 0), i;
}
function G1(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const s = tn(o) ? H1(o) : null;
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
function W1(e) {
  if (!tn(e)) return null;
  const t = zc.includes(e.projection) ? e.projection : zc[0];
  return { aspect: qu(e.aspect, 1), projection: t, visible: cs(e.visible, !0), ...Zu(e, _l) };
}
function Ha(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: C1,
    timeline: {
      fps: mo(t.fps) ?? 24,
      length: Uh(t.length)
    },
    camera: W1(e.camera),
    scene: { clip: Jh(r.clip), visible: cs(r.visible, !0), ...Zu(r, wl) },
    stickers: G1(e.stickers),
    painting: po(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: cs(e.painting_visible, !0)
  };
}
function K1(e, t) {
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
function U1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const r = In(Bt(t.hFOV_deg, 90), 1, 179), n = In(Bt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function B1(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Bt(n.z_index, 0) - Bt(i.z_index, 0)), Ha({
    camera: U1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: K1(n, t),
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
function Wr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ha({});
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
  return r === 1 ? B1(t) : Ha(t);
}
const tc = {
  state: { painting_visible: !0 },
  camera: { projection: zc[0], visible: !0 },
  scene: { visible: !0 }
};
function nc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Hc(e) {
  return JSON.stringify({
    ...nc(e, tc.state),
    camera: e.camera && nc(e.camera, tc.camera),
    scene: nc(e.scene, tc.scene)
  });
}
function rc(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function Mf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Qu(e, t) {
  const r = mo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => Sl(a * n), { length: o } = e.timeline, s = Mf(e.scene.clip, i);
  return Ha({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...rc(e.camera, _l, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...rc(e.scene, wl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Mf(a.clip, i), u = a.placement === "world" ? Ju : Xu;
      return { ...a, clip: l, ...rc(a, u, i, c, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function ic(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Zh(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Qh(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= vi);
}
function em(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? Zh(e.keyframes[n - 1].easing) : [...Wh];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function mn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = ic(i.value, n);
    return;
  }
  const o = Qh(i, r);
  o ? o.value = ic(o.value, n) : em(i, r, ic(Ht(e, t, r), n));
}
function go(e) {
  return e.placement === "world" ? Ju.map(([t]) => t) : e.placement === "sky" ? Xu.map(([t]) => t) : (e.clip ? wl : _l).map(([t]) => t);
}
function Y1(e, t) {
  for (const r of go(e))
    Qh(e[r], t) || em(e[r], t, Ht(e, r, t));
}
function q1(e) {
  const t = go(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function oc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function X1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function J1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Ht(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function Z1(e, t, r, n, i) {
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
function tm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function Q1(e, t, r) {
  const n = tm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function ev(e, t, r, n) {
  for (const i of tm(e, t, r)) i.easing = Zh(n);
}
function tv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function nv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function rv(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function iv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Gc(e) {
  return go(e).map((t) => e[t]);
}
function Ga(e) {
  return Gc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !iv(e.clip);
}
function nm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ga);
}
const ov = 1e5;
function rm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
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
  return Number.isFinite(o) ? o : ov;
}
function sv(e) {
  return e > 0 ? mo(Math.min(e, Bu)) : null;
}
function av(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Uh(Math.max(1, Math.min(e, Yu)));
}
const sc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], lv = 2e3;
function cv(e, t, r = 56) {
  const n = sc.find((o) => o * t >= r) || sc[sc.length - 1], i = [];
  for (let o = 0; o < e && i.length < lv; o += n) i.push(o);
  return i;
}
function uv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let Js = { text: null, parsed: null };
function En(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Wa(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function dv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: En(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: po(null),
    painting_layer: null,
    ui_settings: Wa(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function im(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function fv(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function pv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function hv(e) {
  return Array.isArray(e) ? e.map((t) => Uu(t)) : [];
}
function mv(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function om(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = dv(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (Js.text === i ? o = Js.parsed : (o = JSON.parse(i), Js = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: fv(o.assets),
      stickers: pv(o.stickers),
      shots: hv(o.shots),
      painting: po(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Wa(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = Wa({ ...a.ui_settings, ...s })), a.output_preset = im(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = En(r.coverage), delete a.editor_history, a;
  } catch {
    return Js = { text: i, parsed: null }, n;
  }
}
function gv(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function yv(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function bv(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function sm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = mo(t.fps);
  let l;
  try {
    l = Wr(e);
  } catch {
    l = Wr(null);
  }
  return a && a !== l.timeline.fps && (l = Qu(l, a)), {
    ...l,
    coverage: En(i),
    bg_color: n,
    output_preset: im(r),
    ui_settings: Wa(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function vv(e, t) {
  const r = Qu(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of go(o)) o[a].keyframes = s[a].keyframes;
    }
}
function ed(e, t) {
  const r = Ai(e, t);
  return { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg, hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg, rot_deg: r.roll_deg };
}
const Sv = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Pf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function _v(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Sv[r]].keyframes.length));
}
function am(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Pf(r, ["yaw_deg", "pitch_deg"]), o = Pf(r, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && mn(e, "direction", n, i), r.rot_deg !== void 0 && mn(e, "roll", n, r.rot_deg), Object.keys(o).length && mn(e, "size", n, o);
}
const xl = ["position_x", "position_y", "position_z"], td = "camera";
function lm(e, t) {
  const r = ws(e, t);
  return Uu({
    id: td,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: h1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function wv(e) {
  return Wr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: jt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function xv(e) {
  return e - 360 * Math.round(e / 360);
}
function kv(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + xv(r[o] - n[o]));
  Object.keys(i).length && mn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && mn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * Mt * 0.5) / Math.tan(r.vFOV_deg * Mt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && mn(e, "position", t, [...r.position]);
}
function Mv(e, t) {
  const r = Ht(e, "position", t), n = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(xl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function Pv(e, t, r, n) {
  const i = xl.indexOf(r);
  if (i >= 0) {
    const o = Ht(e, "position", t);
    o[i] = n, mn(e, "position", t, o);
  } else r === "hFOV_deg" ? mn(e, "fov", t, n) : mn(e, "rotation", t, { [r]: n });
}
function Nv(e, t, r) {
  mn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function Av(e, t) {
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
function Cv(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = xl.indexOf(r);
  if (o >= 0) {
    const s = Ht(e, "position", i);
    s[o] = n, mn(e, "position", i, s);
  } else r === "scale" ? mn(e, "scale", i, n) : r === "opacity" ? mn(e, "opacity", i, n / 100) : mn(e, "rotation", i, { [r]: n });
}
function Iv(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && mn(e, i, n, r[i]);
}
function Ev(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Ov(e, t, r) {
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
function ma(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ka(e) {
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
function Fv(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = jt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Wc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function cm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function um(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function dm(e, t) {
  return e != null && e.__panoSceneStateV2 ? Hc(Wr(t)) : JSON.stringify(t);
}
function fm(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Wr(r);
    if (Hc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Hc(Qu(i, o)) === t;
  } catch {
    return !1;
  }
}
const ac = 0.15, Tv = 0.01, Dv = 1e-3, Lv = 0.05, Rv = 4, Nf = 250, Vv = 16, tr = 1, $v = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function $n(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function vr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function kl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function yo(e, t, r = 0) {
  const n = xn(e, t, r), i = vr(n, 2);
  return { right: vr(n, 0), up: vr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function zv(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Kc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function jv(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Kc(e, "3dof", r);
}
function Hv(e) {
  return yo(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function Gv(e) {
  return $n(e.position, yo(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ai(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Xo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function rd(e, t) {
  return Xo(ai(t, e.position), yo(e.yaw_deg, e.pitch_deg).forward);
}
function id(e) {
  return Math.max(e, 1e-6) * Lv;
}
function Uc(e, t, r = null, n = tr) {
  if (t) return t;
  const i = id(n);
  if (r && rd(e, r) > 0) {
    const o = ai(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : $n(e.position, o, i / s);
  }
  return $n(e.position, yo(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function pm(e, t = tr) {
  return Math.max(e.distance, id(t));
}
function hm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Rv ? !1 : t.time - e.time < Nf || e.cost > Vv && t.time - e.wheelTime < Nf;
}
function od(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return { tanX: n, tanY: n * r / t };
}
function mm(e, t, r, n, i = Gv(e)) {
  const o = e.roll_deg ?? 0, [s, a] = Wv(t, r, o), l = jt(e.yaw_deg + s / n * 360), c = Ie(e.pitch_deg - a / n * 360, -89.9, 89.9), d = xn(e.yaw_deg, e.pitch_deg, o), u = xn(l, c, o), f = ai(e.position, i), g = [0, 1, 2].map((m) => Xo(vr(d, m), f)), k = { ...e, yaw_deg: l, pitch_deg: c, position: $n(i, kl(u, g)) };
  return { ...k, distance: rd(k, i) };
}
function Wv(e, t, r) {
  const n = Math.cos(r * Mt), i = Math.sin(r * Mt);
  return [e * n + t * i, t * n - e * i];
}
function gm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = Hv(e), l = 2 * o * od(e, n, i).tanY / i;
  return { ...e, position: $n($n(e.position, s, -t * l), a, r * l), distance: o };
}
function ym(e, t, r, n = tr) {
  const i = ai(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * Tv, l = r > 0 ? Math.min(Math.max(o * ac, a), o - s * Dv) : -Math.max(o * ac / (1 - ac), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: $n(e.position, i, l / o) };
  return { ...c, distance: Math.max(rd(c, t), id(n)) };
}
function Kv(e, t, r, n) {
  const { tanX: i, tanY: o } = od(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = yo(e.yaw_deg, e.pitch_deg);
  return { ...e, position: $n(t.center, l, -a), distance: a };
}
function sd(e, t, r, n = null) {
  return bm({
    quaternion: si(xn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(od(e, t, r).tanY) * Zt,
    aspect: t / r
  }, e.position, e.distance, n);
}
function bm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: tr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function us(e, t, r, n) {
  const { right: i, up: o, forward: s } = vm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * Mt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function vm(e) {
  const t = ss(e.quaternion), r = vr(t, 2);
  return { right: vr(t, 0), up: vr(t, 1), forward: r.map((n) => -n) };
}
function Ua(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function Uv({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function ad(e, t) {
  if (!e || !t.active) return null;
  const r = Bv(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Bc(t),
    itemQuaternion: e.kind === "splat" ? $v : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Sm(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = ad(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function _m(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function Bv(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Bc(e) {
  return {
    position: [...e.position],
    quaternion: si(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Yc(e, t) {
  return $n(e.position, kl(xn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function ga(e, t) {
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
function Yv(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...qc(t).map((o) => Yc(e.scene, o)));
  for (const o of r) i.push(...ld(o));
  for (const { box: o, value: s } of n) i.push(...qc(o).map((a) => Yc(s, a)));
  return i;
}
function qv(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: si(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: xn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function ld(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => $n(e.position, kl(e.rotation, [n, i, 0])));
}
function Xv(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? Xc(ld(i)) : o != null && o.box ? Xc(qc(ga(o.kind, o.box)).map((s) => Yc(n, s))) : { center: [...n.position], radius: n.scale };
}
const Jv = 2, Zv = 0.5, Qv = 30;
function wm(e, t) {
  const r = ai(t, e), n = Math.atan2(r[0], -r[2]) * Zt, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * Zt;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function eS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * Zv : Jv, o = t ? [...t] : $n(e.position, yo(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...ai(o, e.position)), a = s > 0 ? wm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(Qv * 0.5 * Mt);
  return { position: o, rotation: a, scale: l };
}
function Af(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function tS(e) {
  return [0, 1, 2].map((t) => vr(e, t));
}
function Cf(e, t, r, n) {
  if (e === "translate") return { position: $n(t.position, ai(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * sS(r.scale, n.scale) / r.scale };
  const i = Af(ss(n.quaternion), tS(ss(r.quaternion))), o = Af(i, xn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = Vh(o);
  return Math.abs(a) <= nS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: rS(o, t.yaw_deg) } };
}
const nS = 89.9;
function rS(e, t) {
  const r = vr(e, 0), n = vr(e, 1), i = Math.cos(t * Mt), o = Math.sin(t * Mt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * Zt + 0;
}
const iS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function oS(e, t, r, n, i) {
  if (!us(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = vm(e), l = ai(t, e.position), c = Xo(l, o), d = Xo(l, s), u = Xo(l, a), f = Math.tan(e.fovY_deg * 0.5 * Mt), g = f * e.aspect, k = Math.hypot(c, d, u) * iS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > k)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (B) => {
    const F = k * Math.sqrt(B * B + u * u - k * k);
    return [(B * u - F) / (u * u - k * k), (B * u + F) / (u * u - k * k)];
  }, [h, S] = m(c), [X, $] = m(d);
  return {
    minX: n * 0.5 * (1 + h / g),
    maxX: n * 0.5 * (1 + S / g),
    minY: i * 0.5 * (1 - $ / f),
    maxY: i * 0.5 * (1 - X / f)
  };
}
function sS(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function aS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function xm(e, t) {
  const r = xn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * Mt) * t, i = n / e.aspect, o = (c, d, u) => $n(e.position, kl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function lS(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = us(e, s, n, i), c = us(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ie(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function cS(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function uS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Ht(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Ht(n, "position", l);
  });
}
function dS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const km = 0.28;
function Mm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return {
    quaternion: si(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * Zt,
    aspect: n
  };
}
function Jo(e) {
  const t = oi(e);
  return {
    quaternion: si(xn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Pm(e, t, r) {
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
function Nm(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = ss(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * Mt), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, m = 1e-4) {
      const h = g1(k), S = n * h.x + s * h.y + c * h.z, X = i * h.x + a * h.y + d * h.z, $ = -(o * h.x + l * h.y + u * h.z), B = Math.max($, m);
      return {
        x: t * 0.5 * (1 + S / B / g),
        y: r * 0.5 * (1 - X / B / f),
        z: $
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, m) {
      const h = (k / t * 2 - 1) * g, S = (1 - m / r * 2) * f;
      return Hu(pa({
        x: n * h + i * S - o,
        y: s * h + a * S - l,
        z: c * h + d * S - u
      }));
    }
  };
}
function Am(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = xs(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * Mt), g = Math.tan(c.vFOV_deg * 0.5 * Mt), { crop: k } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? km : c.opacity,
      zIndex: n(a),
      quaternion: si(xn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
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
function Cm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Am(e, t, {
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
function fS(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Im(e, t, r, { media: n, evaluated: i = xs(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: g } = fS(u.media), k = qv(c, a.crop, f, g);
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
function pS({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Ah(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(m, h, S, X, $) {
      return l && !f.lost ? l.pick(m, h, S, X, $) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, h, S, X, $) {
      return l && !f.lost ? l.pickSurface(m, h, S, X, $) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, h, S, X, $) {
      return l && !f.lost ? l.pickSticker(m, h, S, X, $) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, h, S, X, $, B) {
      return l && !f.lost ? l.gizmoPointer(m, h, S, X, $, B) : null;
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
const Em = "3D view unavailable. Check the browser console.";
function Ba(e, t, r) {
  return Mm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function hS(e) {
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
const Om = hS(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => Ah(e.createThreeView({ createCanvas: () => nn({ label: "three.node" }) }), "node"))
), nr = ["erp_image", "bg_erp", "bg_media"], cd = ["sticker_image", "sticker"], Fm = ["scene"], mS = {
  background: nr,
  "external-sticker": cd,
  scene: Fm
};
function Tm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Ml(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Tm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Dm(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function If(e, t) {
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
function Lm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function gS(e, t) {
  const { graph: r, entry: n } = Lm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = Tm(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const Rm = [...nr, ...cd, ...Fm], yS = 256, Gi = /* @__PURE__ */ new Map(), lc = /* @__PURE__ */ new WeakMap();
let Vm = () => null;
function $m(e) {
  return lc.has(e) || lc.set(e, JSON.stringify(e)), lc.get(e);
}
function bS(e) {
  Vm = e;
}
function Ya(e, t) {
  const r = $m(e);
  Gi.delete(r), Gi.set(r, t), Gi.size > yS && Gi.delete(Gi.keys().next().value);
}
function Xt(e, t) {
  var o;
  const r = e ? Vm(e) : null;
  if (!r) return !0;
  const n = Ml(e);
  let i = Gi.get($m(r));
  if (i)
    Ya(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => Rm.includes(s == null ? void 0 : s.name)))) return !0;
    Ya(r, n), i = n;
  }
  return mS[t].every((s) => i[s] === n[s]);
}
const qa = /* @__PURE__ */ new WeakSet();
async function Jc(e, t) {
  if (qa.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && qa.add(e), r.ok && n !== void 0 ? n : null;
}
function zm(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = Lm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Rm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: gS(r, t) };
}
const ya = /* @__PURE__ */ new Map();
function vS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ya.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await Jc(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = zm(i, o);
        s && Ya(s.output, s.inputs);
      }
    });
}
const SS = 5;
function _S(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${SS}`, n = Jc(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, Jc(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: g } of await n) {
        if (!a()) return null;
        const k = await o(g);
        if ((c = k == null ? void 0 : k.outputs) != null && c[l])
          return ((f = (u = (d = k.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : zm(k, l);
      }
      return null;
    }
  };
}
function wS(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Ri = null;
async function xS(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || qa.has(r) || (a = ya.get(i)) != null && a.has(n) || wS(t)) return null;
  (Ri == null ? void 0 : Ri.workflowId) !== i && (Ri = { workflowId: i, history: _S(r, i) }, queueMicrotask(() => {
    Ri = null;
  }));
  const s = await Ri.history.lastNodeOutput(e, o);
  return o() ? s ? (Ya(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (qa.has(r) || ya.set(i, (ya.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Ef(e, t, r, n = nr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Of = /\.(mp4|webm|mov|m4v|mkv)$/i;
function ba(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Of.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Of.test(String((e == null ? void 0 : e.filename) || ""));
}
const cc = /* @__PURE__ */ new WeakMap();
function kS(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function Zc(e) {
  return kS(e) ? (cc.has(e) || cc.set(e, Math.random().toString(36).slice(2, 10)), cc.get(e)) : "run";
}
function jm(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function MS(e, t, r) {
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
function PS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = _s(e, "looping-preview");
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
      var X, $;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", k), n.pause(), (X = n.removeAttribute) == null || X.call(n, "src"), ($ = n.load) == null || $.call(n));
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
const ds = /* @__PURE__ */ new WeakMap(), Hm = {
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
    // { src, image, ready } of Panorama Studio's last output ERP.
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
function ks(e, t) {
  if (!e || typeof e != "object") return null;
  let r = ds.get(e);
  return r || (r = {}, ds.set(e, r)), r[t] ?? (r[t] = Hm[t]());
}
function Pl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = ds.get(e)) == null ? void 0 : r[t]) || null;
}
const Gm = (e) => ks(e, "editorSession"), St = (e) => ks(e, "nodeSurface"), Lr = (e) => ks(e, "previewNode"), On = (e) => ks(e, "mediaCache"), Rn = (e) => ks(e, "stateSync"), NS = (e) => Pl(e, "editorSession"), Wm = (e) => Pl(e, "nodeSurface"), Km = (e) => Pl(e, "previewNode");
function uc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const AS = {
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
      uc(o == null ? void 0 : o.img), uc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), uc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function CS(e, t) {
  const r = Pl(e, t);
  if (r)
    try {
      AS[t](r);
    } finally {
      delete ds.get(e)[t];
    }
}
function IS(e) {
  for (const t of Object.keys(Hm))
    try {
      CS(e, t);
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
function ES(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Ff(e, t, r = null) {
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
  return !n && r != null && (n = ES(e == null ? void 0 : e.graph, r)), n;
}
function OS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function FS(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function TS(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function Um({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (F) => {
    if (!F) return "";
    if (typeof F == "string") return String(F || "").trim();
    if (Array.isArray(F)) {
      if (F.length === 0) return "";
      if (F.length === 1) return i(F[0]);
      const Y = String(F[0] || "").trim();
      if (Y)
        return fi(t, {
          filename: Y,
          subfolder: String(F[1] || "").trim(),
          type: String(F[2] || "output").trim() || "output"
        });
      for (const H of F) {
        const K = i(H);
        if (K) return K;
      }
      return "";
    }
    return typeof (F == null ? void 0 : F.src) == "string" && F.src ? F.src : typeof (F == null ? void 0 : F.url) == "string" && F.url ? F.url : fi(t, F);
  }, o = (F) => {
    if (!F || typeof F != "object") return "";
    const Y = String(F.type || "").trim().toLowerCase();
    if (Y === "dataurl") return String(F.value || "");
    if (Y !== "comfy_image") return "";
    const H = String(F.filename || "").trim();
    return H ? fi(t, {
      filename: H,
      subfolder: String(F.subfolder || ""),
      type: String(F.storage || "input")
    }) : "";
  }, s = (F) => {
    const Y = e == null ? void 0 : e.nodeOutputs;
    if (!Y || F == null) return null;
    const H = String(F);
    return Y instanceof Map ? Y.get(F) || Y.get(H) || Y.get(Number(H)) || null : Y[F] || Y[H] || null;
  }, a = (F, Y) => {
    var K;
    const H = s(F == null ? void 0 : F.id);
    return Array.isArray((K = H == null ? void 0 : H.ui) == null ? void 0 : K[Y]) ? H.ui[Y] : Array.isArray(H == null ? void 0 : H[Y]) ? H[Y] : [];
  }, l = (F, Y) => {
    const H = s(F == null ? void 0 : F.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, Y) ? H.ui[Y] : H && Object.prototype.hasOwnProperty.call(H, Y) ? H[Y] : null;
  }, c = (F, Y) => {
    const H = l(F, "pano_sticker_input_state_hash"), K = Array.isArray(H) ? H[0] : H;
    return String(K ?? "").trim() || TS(Y);
  }, d = (F) => {
    const Y = [], H = /* @__PURE__ */ new Set();
    for (const K of F || []) {
      const Q = i(K);
      !Q || H.has(Q) || (H.add(Q), Y.push(Q));
    }
    return Y;
  }, u = (F, Y) => {
    var Q;
    const H = [];
    Array.isArray(F == null ? void 0 : F.images) && F.images.length && H.push(F.images), Array.isArray((Q = F == null ? void 0 : F.ui) == null ? void 0 : Q.images) && F.ui.images.length && H.push(F.ui.images);
    const K = [];
    for (const fe of H)
      Y >= 0 && Y < fe.length && K.push(fe[Y]), K.push(...fe);
    return K;
  }, f = (F, Y) => {
    var W;
    const H = String(Y || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const Q = (Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : []).findIndex((R) => String((R == null ? void 0 : R.name) || "") === H);
    if (Q < 0) return { src: "", sourceType: "", inputName: H };
    const fe = F.graph ? F.getInputLink(Q) : null;
    if ((fe == null ? void 0 : fe.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const D = fe.origin_id, oe = Ff(F, Q, D);
    if (!oe) return { src: "", sourceType: "", inputName: H };
    const ne = Number(fe.origin_slot ?? 0);
    let j = [];
    try {
      j = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(oe) || [] : [];
    } catch {
      j = [];
    }
    if (Array.isArray(j) && j.length) {
      const R = [];
      ne >= 0 && ne < j.length && R.push(j[ne]), R.push(...j);
      const J = d(R.filter((ue) => !ba(ue)));
      if (J.length)
        return { src: J[0], srcCandidates: J, sourceType: "appNodeImageUrls", inputName: H };
    }
    const re = s((oe == null ? void 0 : oe.id) ?? D), L = d(u(re, ne).filter((R) => !ba(R))).map((R) => `${R}&pano_src=${Zc(re)}`);
    if (L.length)
      return { src: L[0], srcCandidates: L, sourceType: "nodeOutputs", inputName: H };
    const G = Array.isArray(oe == null ? void 0 : oe.imgs) ? oe.imgs : [];
    if (G.length) {
      const R = [];
      ne >= 0 && ne < G.length && R.push(G[ne]), R.push(...G);
      const J = d(R);
      if (J.length)
        return { src: J[0], srcCandidates: J, sourceType: "nodeImgs", inputName: H };
    }
    const E = (W = oe == null ? void 0 : oe.widgets) == null ? void 0 : W.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (E) {
      let R = i(E.value);
      if (R && !R.includes("/") && !R.includes(":") && (oe.comfyClass === "LoadImage" || oe.type === "LoadImage") && (R = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`), R) return { src: R, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, g = (F, Y = []) => {
    var K;
    const H = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : [];
    for (const Q of Y) {
      const fe = H.findIndex((j) => String((j == null ? void 0 : j.name) || "") === Q), D = fe >= 0 && F.graph ? F.getInputLink(fe) : null;
      if ((D == null ? void 0 : D.origin_id) == null) continue;
      const oe = s(((K = Ff(F, fe, D.origin_id)) == null ? void 0 : K.id) ?? D.origin_id), ne = (Array.isArray(oe == null ? void 0 : oe.images) ? oe.images : []).find(ba);
      return ne ? `${fi(t, ne)}&pano_src=${Zc(oe)}` : "";
    }
    return "";
  }, k = (F, Y = []) => {
    const H = Array.isArray(Y) ? Y : [Y];
    for (const K of H) {
      const Q = f(F, K);
      if (String((Q == null ? void 0 : Q.src) || "").trim()) return Q;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (F) => {
    const Y = String(F || "").trim();
    if (!Y) return [];
    if (OS(Y)) return [Y];
    const { filename: H, subfolder: K } = FS(Y);
    return H ? d([
      fi(t, { filename: H, subfolder: K, type: "temp" }),
      fi(t, { filename: H, subfolder: K, type: "output" }),
      fi(t, { filename: H, subfolder: K, type: "input" }),
      Y
    ]) : [Y];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (F) => {
      var Y;
      try {
        (Y = On(F)) == null || Y.linkedImages.forEach((H, K, Q) => {
          var fe;
          H != null && H.img && ((fe = n == null ? void 0 : n.isImageLoadFailed) != null && fe.call(n, H.img)) && Q.delete(K);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (F, Y) => {
      var H;
      (H = F == null ? void 0 : F.delete) == null || H.call(F, `__ui__${String(Y || "")}`);
    },
    linkedValue: (F, Y) => {
      var D, oe, ne, j;
      const H = String(Y || ""), K = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs.findIndex((re) => String((re == null ? void 0 : re.name) || "") === H) : -1, Q = K >= 0 && F.graph ? F.getInputLink(K) : null;
      if (Q) {
        const re = s(Q.origin_id), L = [
          re == null ? void 0 : re.output,
          re == null ? void 0 : re.result,
          (D = re == null ? void 0 : re.data) == null ? void 0 : D.output,
          (oe = re == null ? void 0 : re.data) == null ? void 0 : oe.result,
          (ne = re == null ? void 0 : re.ui) == null ? void 0 : ne.output,
          (j = re == null ? void 0 : re.ui) == null ? void 0 : j.result
        ];
        for (const G of L) {
          if (!Array.isArray(G)) continue;
          const E = G[Number(Q.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const fe = Array.isArray(F == null ? void 0 : F.widgets) ? F.widgets.find((re) => String((re == null ? void 0 : re.name) || "") === H) : null;
      return String((fe == null ? void 0 : fe.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (F, Y = [], H = null, K = "") => {
      var ee;
      const Q = Array.isArray(Y) ? Y : [Y], fe = k(F, Q), oe = (Array.isArray(fe == null ? void 0 : fe.srcCandidates) && fe.srcCandidates.length ? fe.srcCandidates : [fe == null ? void 0 : fe.src]).map((A) => String(A || "").trim()).filter(Boolean);
      if (!oe.length) return null;
      const ne = d(oe.flatMap((A) => m(A)));
      if (!ne.length) return null;
      const j = On(F).linkedImages, re = String(K || Q.join("|") || "image_exact"), L = oe.join(`
`), G = j.get(re);
      if (G && G.srcRaw === L && G.img) return G.img;
      const E = r || globalThis.Image;
      if (typeof E != "function") return null;
      const W = new E();
      (ee = n == null ? void 0 : n.markImageLoading) == null || ee.call(n, W, L);
      const R = { srcRaw: L, resolvedSrc: "", img: W };
      j.set(re, R);
      let J = -1;
      const ue = (A) => {
        var te, ce, be;
        A === "ready" ? (te = n == null ? void 0 : n.markImageReady) == null || te.call(n, W, L) : (ce = n == null ? void 0 : n.markImageFailed) == null || ce.call(n, W, L), H == null || H(W), (be = F.setDirtyCanvas) == null || be.call(F, !0, !0);
      }, Se = () => {
        if (J += 1, J >= ne.length) {
          ue("failed");
          return;
        }
        R.resolvedSrc = ne[J], W.src = R.resolvedSrc;
      };
      return W.onload = () => ue("ready"), W.onerror = () => {
        if (J + 1 < ne.length) {
          Se();
          return;
        }
        ue("failed");
      }, Se(), W;
    },
    output: s,
    resolvePreferredExactLinkedSource: k,
    source: i,
    uiImage: (F, Y, H, K = null) => {
      var re, L, G;
      const Q = a(F, Y)[0] || null, fe = i(Q);
      if (!fe) return null;
      const D = `__ui__${Y}`, oe = (re = H == null ? void 0 : H.get) == null ? void 0 : re.call(H, D);
      if (oe && oe.__panoSrc === fe) return oe;
      const ne = r || globalThis.Image;
      if (typeof ne != "function") return null;
      const j = new ne();
      return j.__panoSrc = fe, (L = n == null ? void 0 : n.markImageLoading) == null || L.call(n, j, fe), j.onload = () => {
        var E;
        (E = n == null ? void 0 : n.markImageReady) == null || E.call(n, j, fe), K == null || K(j);
      }, j.onerror = () => {
        var E;
        (E = n == null ? void 0 : n.markImageFailed) == null || E.call(n, j, fe), K == null || K(j);
      }, j.src = fe, (G = H == null ? void 0 : H.set) == null || G.call(H, D, j), j;
    },
    uiList: a,
    uiValue: l
  };
}
const DS = 1e-3;
function dd(e, t, r, n) {
  if (!ho(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(DS / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function Bm(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function LS(e, t) {
  return Math.floor(e * t.fps);
}
function fd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Tf = 4;
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
      const d = LS(a, l);
      for (let f = d; f < Math.min(r.length, d + Tf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Tf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function Ym({
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
const va = "sticker_image_1", qm = "external_image", ao = 0;
function Qi(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function dc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ni(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function Qc(e, t = ao) {
  return (e == null ? void 0 : e.version) !== 2 ? ni(e) : ni(e).map((r) => ({
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
  return t && ni(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Xm(e) {
  return String((e == null ? void 0 : e.id) || "") === va || String((e == null ? void 0 : e.source_kind) || "") === qm;
}
function md(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Xm(t);
}
const Jm = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Zm(e) {
  return !Xm(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Jm.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function Qm(e) {
  const t = Zm(e);
  return t ? Jm.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function eg(e, t = {}) {
  var B, F, Y;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((H) => String((H == null ? void 0 : H.id) || "") === va);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const H = String(((B = e.active) == null ? void 0 : B.selected_sticker_id) || "") === va;
    return {
      state: {
        ...e,
        stickers: r.filter((K, Q) => Q !== n),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), g = t.pose && typeof t.pose == "object" ? t.pose : {}, k = a ? g.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || g.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(k)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const H = Qi(m, u, f), K = Number(((F = s == null ? void 0 : s.initial_pose) == null ? void 0 : F.hFOV_deg) ?? m), Q = Qi(K, u, f), fe = Number(((Y = s == null ? void 0 : s.initial_pose) == null ? void 0 : Y.vFOV_deg) ?? Q);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(fe - Q) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((D, oe) => oe === n ? {
          ...D,
          vFOV_deg: H,
          initial_pose: D.initial_pose && typeof D.initial_pose == "object" ? { ...D.initial_pose, vFOV_deg: Q } : D.initial_pose
        } : D)
      },
      changed: !0
    };
  }
  const h = r.reduce((H, K) => Math.max(H, Number((K == null ? void 0 : K.z_index) || 0)), -1), S = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: d ? Qi(m, u, f) : Number(g.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || m),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, X = {
    ...s || {},
    id: va,
    source_kind: qm,
    source_link_id: i,
    source_state_hash: o,
    ...S,
    initial_pose: { ...S },
    visible: !0,
    z_index: h + 1
  }, $ = n >= 0 ? r.map((H, K) => K === n ? X : H) : [...r, X];
  return { state: { ...e, stickers: $ }, changed: !0 };
}
function Df(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const RS = ["IMAGE", "VIDEO"];
function Lf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => RS.includes(r)) ? "2d" : null;
}
function VS(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Lf(n.type) ?? Lf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function tg(e, { pose: t = null, image: r = null } = {}) {
  return {
    connected: Df(e, "sticker"),
    awaitingPose: !t && (Df(e, "sticker_state") || VS(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((r == null ? void 0 : r.naturalWidth) || (r == null ? void 0 : r.width) || 0),
    imageHeight: Number((r == null ? void 0 : r.naturalHeight) || (r == null ? void 0 : r.height) || 0)
  };
}
function Rf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Wr({ version: 2, stickers: [r] }).stickers[0];
}
function ng(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, imageWidth: i = 0, imageHeight: o = 0 } = {}) {
  var m;
  const s = e.stickers.findIndex((h) => md(e, h)), a = s >= 0 ? e.stickers[s] : null;
  if (!t) {
    if (!a) return { state: e, changed: !1 };
    const h = ((m = e.active) == null ? void 0 : m.selected_sticker_id) === a.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((S, X) => X !== s),
        active: h ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const l = i > 0 && o > 0;
  if (a && (n == null ? void 0 : n.placement) === "world" && n.replace && a.placement === "sky") {
    const h = { ...Rf(a.id, n), clip: a.clip, visible: a.visible, locked: a.locked };
    return { state: { ...e, stickers: e.stickers.map((S, X) => X === s ? h : S) }, changed: !0 };
  }
  if (a) {
    if (!l || a.placement !== "sky") return { state: e, changed: !1 };
    const h = [a.size.value, ...a.size.keyframes.map(($) => $.value)], S = h.map(($) => Qi($.hFOV_deg, i, o));
    if (h.every(($, B) => Math.abs($.vFOV_deg - S[B]) <= 1e-6)) return { state: e, changed: !1 };
    const X = {
      value: { ...a.size.value, vFOV_deg: S[0] },
      keyframes: a.size.keyframes.map(($, B) => ({ ...$, value: { ...$.value, vFOV_deg: S[B + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map(($, B) => B === s ? { ...$, size: X } : $) },
      changed: !0
    };
  }
  if (r) return { state: e, changed: !1 };
  const c = new Set(e.stickers.map((h) => h.id));
  let d = 1;
  for (; c.has(`sticker_${d}`); ) d += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Rf(`sticker_${d}`, n)] }, changed: !0 };
  const u = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), f = (h) => l ? Qi(h, i, o) : h, g = nd(`sticker_${d}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: u,
    vFOV_deg: f(u)
  }, ni(e).reduce((h, S) => Math.max(h, S.z_index), -1) + 1), k = (n == null ? void 0 : n.keyframes) ?? {};
  return g.direction.keyframes = k.direction ?? [], g.roll.keyframes = k.roll ?? [], g.size.keyframes = (k.size ?? []).map((h) => ({ ...h, value: { ...h.value, vFOV_deg: f(h.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, g] }, changed: !0 };
}
function gd(e) {
  const t = ni(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: dc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: dc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: dc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function rg(e) {
  const t = hd(e), r = md(e, t), n = ni(e).some((a) => a && a.visible !== !1), i = gd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: Qm(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function $S(e) {
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
function Vf(e, t) {
  const r = hd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = $S(e), i = String(r.id || ""), o = gd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function zS(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function jS(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return eg(e, t.value);
  if (t.type === "sync-port") return ng(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = gd(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Qi(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, nd(o, ma(i.asset), d, l + 1)],
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
    return !i || !ni(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
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
    const i = Zm(r);
    return !i || !Qm(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Vf(e, "front");
  if (t.type === "send-back") return Vf(e, "back");
  if (t.type === "delete-selected") {
    if (md(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ni({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = zS(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? ed(r, ao) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = _v(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return am(c, ao, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function HS(e = {}) {
  return Ym({
    ...e,
    reduce: jS,
    projectModel: rg
  });
}
const eu = 2;
function gi(e, t) {
  return Math.floor(e * t + 0.5);
}
function GS(e, t) {
  return Math.floor(e * t + 1e-3);
}
function ig({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const g = () => c && !d, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const W of f) W();
    f = [];
  }
  function h(W, R = {}) {
    return m(), u = { name: W, ...R }, a(), u;
  }
  function S(W, R, J) {
    const ue = () => {
      u === W && J();
    };
    e.addEventListener(R, ue), f.push(() => e.removeEventListener(R, ue));
  }
  function X(W, R) {
    let J = t.requestFrame(function ue(Se) {
      u === W && (R(Se), u === W && (J = t.requestFrame(ue)));
    });
    f.push(() => t.cancelFrame(J));
  }
  function $(W) {
    l = W, o(l);
  }
  function B() {
    return h(d ? "error" : "idle");
  }
  function F() {
    d = !0, B();
  }
  function Y() {
    const { seekable: W } = e, R = W != null && W.length ? W.end(W.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(R) ? R : 1 / 0));
  }
  function H(W) {
    if (!g()) return W === "play" ? oe() : B();
    if (e.readyState < eu) {
      const R = h("loading", { then: W });
      return S(R, "loadeddata", () => H(R.then)), S(R, "error", F), R;
    }
    return W === "play" && l / r() >= Number(e.duration) ? oe() : K(W, !1);
  }
  function K(W, R) {
    const J = Y();
    if (!e.ended && gi(Number(e.currentTime), r()) === gi(J, r())) return Q(W);
    const ue = h("seeking", { then: W, frame: l, retried: R });
    return S(ue, "seeked", () => {
      const Se = gi(Number(e.currentTime), r()) === gi(Y(), r()), ee = l === ue.frame;
      Se || ee && ue.retried ? Q(ue.then) : K(ue.then, ee);
    }), S(ue, "error", F), e.currentTime = J, ue;
  }
  function Q(W) {
    return W === "play" ? fe() : (s(), B());
  }
  function fe() {
    const W = h("playingVideo", { shown: !1 });
    if (S(W, "pause", () => e.ended ? D() : re()), S(W, "ended", D), S(W, "error", F), i() && gi(Number(e.duration), r()) >= n()) {
      const J = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = J;
      });
    }
    const R = (J, ue) => {
      ue && !W.shown && (W.shown = !0, a()), ne(gi(J, r()));
    };
    if (k()) {
      let J = e.requestVideoFrameCallback(function ue(Se, ee) {
        u === W && (R(Number(ee.mediaTime), !0), u === W && (J = e.requestVideoFrameCallback(ue)));
      });
      f.push(() => {
        var ue;
        return (ue = e.cancelVideoFrameCallback) == null ? void 0 : ue.call(e, J);
      });
    } else
      X(W, () => R(Number(e.currentTime), e.readyState >= eu));
    return Promise.resolve(e.play()).catch(() => {
      u === W && re();
    }), W;
  }
  function D() {
    s(), oe();
  }
  function oe() {
    const W = h("playingClock", { startTs: t.now(), startFrame: l });
    return X(W, (R) => ne(W.startFrame + Math.floor((R - W.startTs) / 1e3 * r()))), W;
  }
  function ne(W) {
    if (W < n()) {
      $(W);
      return;
    }
    if (!i()) {
      j(n() - 1);
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), $(0), H("play");
  }
  function j(W) {
    u.name === "playingVideo" ? (m(), e.pause(), $(Math.max(0, W)), s()) : $(Math.max(0, W)), H("still");
  }
  function re() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      m(), e.pause();
      const W = GS(Number(e.currentTime), r());
      $(Math.min(W, n() - 1)), s(), l === W ? B() : H("still");
    } else u.name === "playingClock" && j(Math.min(l, n() - 1));
  }
  function L() {
    if (!E()) {
      if (l >= n() - 1 && $(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      H("play");
    }
  }
  function G(W) {
    const R = Math.max(0, Math.round(W));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", $(R), a();
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), $(R), H("still");
  }
  function E() {
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
      return E();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: L,
    stop: re,
    seek: G,
    toggle() {
      E() ? re() : L();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(W) {
      m(), c = !!W, d = !1, H("still");
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
    const { time: m, playing: h, fps: S } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const X = Number(e.duration), $ = Number.isFinite(X) ? Math.min(m, X) : m, B = Math.abs(Number(e.currentTime) - $) > 1.5 / S;
      if (e.ended && !B) return;
      B && d($), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
    follow({ src: m = "", time: h = null, playing: S = !1, fps: X }) {
      m !== n && (k(m), r()), o = { time: h, playing: S, fps: X }, u();
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
function Sa(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function WS({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let k = null, m = null;
  const h = () => i().timeline.fps, S = (D) => D.stickers.find((oe) => oe.source.kind === "port"), X = () => {
    const D = i(), oe = S(D);
    return rm(D, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        k && oe ? Bm(oe.clip, h(), k.meta) : 0
      ),
      camera: c
    });
  }, $ = ig({
    video: e,
    clock: n,
    fps: h,
    span: X,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), B = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, F = () => {
    u && (g.add(u), l());
  }, Y = yd({ video: t, onCapture: a, onChange: l }), H = pd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", B), e.addEventListener("error", F);
  function K(D) {
    D !== u && (u = D, e.pause(), D ? e.src = D : e.removeAttribute("src"), e.load(), $.setSource(!!D));
  }
  function Q() {
    $.playing && $.stop();
  }
  function fe(D) {
    const oe = S(D);
    m = k && oe ? dd(oe.clip, $.frame, D.timeline.fps, k.meta) : null, Y.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: m,
      playing: $.advancing,
      fps: D.timeline.fps
    });
  }
  return {
    get frame() {
      return $.frame;
    },
    get playing() {
      return $.playing;
    },
    get showsVideo() {
      return $.showsVideo;
    },
    get source() {
      return u;
    },
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(D, oe) {
      return k != null && k.frames ? H.picture(k.frames, m, k.meta, oe) : Y.picture(D, oe);
    },
    toggle() {
      $.playing ? $.stop() : $.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: D, sources: oe, state: ne, sticker: j = null }) {
      if (k = D ? j : null, !D)
        return Q(), K(""), fe(ne), !1;
      for (const W of g)
        oe.includes(W) || g.delete(W);
      const re = oe.find((W) => W && !g.has(W)) || "", L = re !== d;
      L && (d = re, f = 0), K(d);
      const G = nm(ne, { camera: c }) || !!d && $.state !== "error" || !!k;
      return G || Q(), (L || !G || !$.playing && $.frame >= X()) && $.frame !== ao && $.seek(ao), fe(ne), G;
    },
    dispose() {
      $.dispose(), Y.dispose(), e.removeEventListener("loadedmetadata", B), e.removeEventListener("error", F), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const Xa = Math.PI / 180, gr = 180 / Math.PI, KS = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), US = 260;
function $f(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function og(e, t) {
  return t ? og(t, e % t) : e;
}
function BS(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = og(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function fs(e, t) {
  const r = $f(e), n = $f(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: BS(r, n) };
}
function Mi(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function sg(e) {
  const t = Mi(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Dr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function bd(e, t, r = KS) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, S, X) => {
    const $ = h + S, B = Math.max(0, X - 1), F = $ > B && $ > 0 ? B / $ : 1;
    return [h * F, S * F];
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
function YS(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = bd({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * Xa * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Rh(l, Fh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = qS(c, fo(
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
function ag(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * gr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * gr, -89.9, 89.9)
  };
}
function qS(e, t) {
  const r = ag(e), n = fo(r.yaw, r.pitch, 0), i = Xl(t, e), o = {
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
    roll: vl(Math.atan2(
      Xl(a, n.up),
      Xl(a, n.right)
    ) * gr)
  };
}
function lg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = bd({ width: r, height: n }, Ei(e)), o = Ni(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Rh(e, Fh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = ag(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * gr, 1, 179)
  };
}
function XS(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ni(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = Ku(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, g = n / i, k = Math.tan(Dc * Xa), m = g >= 1 ? k : k * g, h = g >= 1 ? k / g : k;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * gr,
      vFOV_deg: 2 * Math.atan(d / a) * gr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(m) * gr,
        vFOV_deg: 2 * Math.atan(h) * gr
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
function JS(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Ni(r, e);
    return Wu(Gu(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: fa(o, t) };
}
function zf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = fs(t, r);
  if (!o) return e;
  const s = Ei(e) >= 1;
  n && o.ratio >= 1 !== s && (o = fs(o.height, o.width));
  const a = JS(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function cg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Mi(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Th({
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
    return Vi(e, (n) => zf(
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
      const o = String(Dr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? fs(o[1], o[2]) : fs(Ei(n), 1);
      return s ? zf(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Vi(e, (i) => {
      const o = vl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Vi(e, (n) => {
    const i = Dh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Vi(e, (n) => {
    const i = Lh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Vi(e, (n) => {
    const i = fg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function ug({
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
function dg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Eh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Oh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function fg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * Xa, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, g = d * c + u * l, k = Number(e.pitch_deg || 0) * Xa, m = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(f) / m * gr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(g) * gr, -90, 90)
  };
}
function ZS({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return Ym({
    readState: e,
    reduce: cg,
    projectModel: sg,
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
}), QS = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, e_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: QS(t[2])
})), t_ = {
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
}, jf = Object.fromEntries(
  Object.entries(t_).map(([e, t]) => [e, {
    name: t.name,
    elements: e_(t.body)
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
      return Object.prototype.hasOwnProperty.call(jf, n) ? jf[n] : null;
    });
    return (n, i) => r.value ? (Fe(), Re("svg", {
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
      (Fe(!0), Re(tt, null, Nt(r.value.elements, (o, s) => (Fe(), Re(tt, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Fe(), Re("path", Ir({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Fe(), Re("circle", Ir({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Fe(), Re("rect", Ir({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Fe(), Re("line", Ir({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Fe(), Re("polyline", Ir({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Fe(), Re("polygon", Ir({
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
    return (n, i) => (Fe(), Vn(cy(e.tag), Ir({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: Xp(() => [
        Ue(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, n_ = ["aria-expanded", "disabled"], r_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, i_ = ["data-aspect", "disabled", "onClick"], o_ = { class: "pano-cutout-aspect-custom" }, s_ = ["disabled"], a_ = ["disabled"], l_ = ["data-custom-width", "data-custom-height", "disabled"], pg = {
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
      return m.length ? m.map((S) => {
        const X = typeof S == "string" ? S : String((S == null ? void 0 : S.value) || ""), $ = typeof S == "string" ? S : String((S == null ? void 0 : S.label) || X);
        return {
          ...typeof S == "object" && S ? S : {},
          value: X,
          label: $,
          active: h ? X === h : (S == null ? void 0 : S.active) === !0
        };
      }) : i.map((S) => ({
        ...S,
        active: S.value === h
      }));
    }), d = ut(() => {
      var h;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((h = c.value.find((S) => S.active === !0)) == null ? void 0 : h.label) || "Aspect");
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
    hl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), vs(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(m) {
      const [h, S] = String(m.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: S,
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
    return (m, h) => (Fe(), Re("div", {
      ref_key: "rootElement",
      ref: a,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Fe(), Vn(Jt, {
        key: 0,
        icon: e.model.aspectIcon || nt(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (S) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Fe(), Re("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (S) => u({ type: "toggle-aspect" }))
      }, [
        Ue(Vt, {
          icon: e.model.aspectIcon || nt(ze).aspect
        }, null, 8, ["icon"]),
        ke("span", null, it(d.value), 1),
        Ue(Vt, {
          icon: nt(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, n_)),
      Vr(ke("div", r_, [
        (Fe(!0), Re(tt, null, Nt(c.value, (S) => (Fe(), Re("button", {
          key: S.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: S.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": S.value,
          disabled: l.value,
          onClick: (X) => g(S)
        }, it(S.label), 11, i_))), 128)),
        ke("div", o_, [
          Vr(ke("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (S) => o.value = S),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, s_), [
            [uf, o.value]
          ]),
          h[4] || (h[4] = ke("span", { "aria-hidden": "true" }, ":", -1)),
          Vr(ke("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (S) => s.value = S),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, a_), [
            [uf, s.value]
          ]),
          ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: k
          }, "Apply", 8, l_)
        ])
      ], 512), [
        [Pi, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, c_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, u_ = {
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
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Ue(Jt, {
        icon: nt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", c_, [
        i[3] || (i[3] = ke("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Re(tt, null, Nt(nt(r), (o) => (Fe(), Re("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          ke("kbd", null, it(o[0]), 1),
          ke("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, d_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Nl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Fe(), Re("div", d_, it(nt(Em)), 1));
  }
}, f_ = { class: "pano-cutout-node-surface" }, p_ = ["title", "disabled"], h_ = { class: "value" }, m_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, g_ = {
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
    return (n, i) => (Fe(), Re("div", f_, [
      ke("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = Ct(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Ue(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ue(Jt, {
          icon: e.model.hasShot ? nt(ze).delete : nt(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(pg, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        ke("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = Ct((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ue(Vt, {
            icon: nt(ze).roll
          }, null, 8, ["icon"]),
          ke("span", h_, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, p_),
        Ue(Jt, {
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
        Ue(u_)
      ], 32),
      e.model.hasShot === !1 ? (Fe(), Re("div", m_, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Fe(), Vn(Nl, { key: 1 })) : ht("", !0)
    ]));
  }
}, hg = {
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
    return t({ open: l }), (u, f) => (Fe(), Re("input", {
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
}, y_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, b_ = {
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
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = Ct(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Ue(Jt, {
        icon: nt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = Ct((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", y_, [
        i[3] || (i[3] = ke("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Fe(!0), Re(tt, null, Nt(nt(r), (o) => (Fe(), Re("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          ke("kbd", null, it(o[0]), 1),
          ke("span", null, it(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, v_ = { class: "pano-stickers-node-surface" }, S_ = ["disabled"], __ = ["aria-label", "data-tip"], w_ = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, x_ = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, k_ = {
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
    return (s, a) => (Fe(), Re("div", v_, [
      ke("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = Ct(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Ue(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Ue(Vt, {
            icon: nt(ze).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = ke("span", { class: "label" }, "Add Image", -1))
        ], 8, S_),
        Ue(Jt, {
          icon: e.model.locked ? nt(ze).lock_closed : nt(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ue(Jt, {
          icon: nt(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Jt, {
          icon: nt(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ue(Jt, {
          icon: e.model.isExternalSelection ? nt(ze).back_initial : nt(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ue(b_)
      ], 32),
      e.model.playable === !0 ? (Fe(), Re("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = Ct(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = Ct(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Ue(Vt, {
          icon: e.model.playing ? nt(ze).pause : nt(ze).play
        }, null, 8, ["icon"])
      ], 40, __)) : ht("", !0),
      e.model.hasStickers === !1 ? (Fe(), Re("div", w_, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Fe(), Re("div", x_, "Drop image to add")) : ht("", !0),
      Ue(hg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Fe(), Vn(Nl, { key: 3 })) : ht("", !0)
    ]));
  }
}, M_ = { class: "pano-studio-node-surface" }, P_ = {
  class: "pano-studio-node-status",
  role: "status"
}, N_ = { class: "pano-studio-node-shot" }, A_ = { class: "pano-studio-node-size" }, C_ = { class: "pano-studio-node-note" }, I_ = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Re("div", M_, [
      ke("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = Ct(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = Ct(() => {
        }, ["stop"]))
      }, [
        ke("div", P_, [
          ke("span", N_, it(e.model.status.shot), 1),
          ke("span", A_, it(e.model.status.size), 1),
          ke("span", C_, it(e.model.status.note), 1)
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Ue(Vt, {
            icon: nt(ze).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = ke("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Fe(), Vn(Nl, { key: 0 })) : ht("", !0)
    ]));
  }
}, E_ = 2048, tu = 4096, _a = (e) => Math.floor(e + 0.5), Zs = (e) => Math.max(2, 2 * _a(e / 2));
function Al(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function O_(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? _l.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, _a(e.timeline.length)) : t.length ? n = Math.max(1, _a(Math.max(...t))) : r.length && (n = Math.max(1, _a(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function F_(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = E_ : s = Math.floor(i * 360 / n);
  const a = Al(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => ws(a, g).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [Zs(c), Zs(d)];
  if (Math.max(...u) <= tu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = tu / Math.max(c, d);
  return { width: Zs(c * f), height: Zs(d * f), reducedFrom: u, defaulted: o };
}
function mg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function T_(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", run: o = null, erp: s = null }) {
  const a = Al(e);
  return !s || !o || a && a.projection !== "erp" ? null : o.key === mg(t, r, String(n), i) ? s : null;
}
function D_(e) {
  const t = Al(e);
  if (!t) return { x: 0, y: 0, z: 0, w: 1 };
  const { yaw_deg: r, pitch_deg: n, roll_deg: i } = ws(t, 0);
  return si(xn(r, n, i));
}
function L_(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, showingRun: a = !1 }) {
  const l = Al(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === mg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: a ? "Showing the last run" : "" };
    d = F_(e, O_(e), r, n, o);
  }
  const u = a ? ["Showing the last run"] : [];
  return d.reducedFrom ? u.push(`Capped at ${tu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function R_() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, !!t.showingRun]);
    return i === e ? null : (e = i, L_(r(), { ...t, bgWidth: n }));
  };
}
const Hf = 24;
function V_(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Zo(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function gg(e, t) {
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
  return Zo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : gg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function $_(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
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
  return Zo(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : gg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function vd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function yg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Oo(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function z_(e) {
  const t = fo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Mt * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Mt * 0.5)
  };
}
function pi(e, t, r) {
  return Hu(La(
    La(e.centerDir, Ra(e.right, t)),
    Ra(e.up, r)
  ));
}
function Sd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = z_(e), n = Oo(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    pi(r, -r.tanX, r.tanY),
    pi(r, r.tanX, r.tanY),
    pi(r, r.tanX, -r.tanY),
    pi(r, -r.tanX, -r.tanY)
  ].map((f) => Oo(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const k = [];
    for (let m = 0; m <= 28; m += 1) {
      const h = m / 28;
      let S, X;
      g === 0 ? (S = -r.tanX + 2 * r.tanX * h, X = r.tanY) : g === 1 ? (S = r.tanX, X = r.tanY - 2 * r.tanY * h) : g === 2 ? (S = r.tanX - 2 * r.tanX * h, X = -r.tanY) : (S = -r.tanX, X = -r.tanY + 2 * r.tanY * h);
      const $ = Oo(pi(r, S, X), t);
      $ && k.push({ x: $.x, y: $.y });
    }
    return k;
  }), s = Oo(pi(r, 0, r.tanY), t), a = Oo(
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
      x: s.x + c / u * Hf,
      y: s.y + d / u * Hf
    },
    visible: !0
  };
}
function Gf(e, t, r, n) {
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
function j_(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(n.x, n.z) * Zt),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * Zt
  };
}
function H_(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function G_(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * Zt;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let Qs = null;
function _d() {
  return Qs || (Qs = new Promise((e) => {
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
  }), Qs);
}
function Hn(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function W_(e, t = 1024) {
  const r = Math.max(1, Math.round(Hn(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Hn(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function K_(e, t, r) {
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
function U_(e, t, r) {
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
function B_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = K_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = U_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === u) return { source: g.source, revision: u };
    const k = n(c, l), m = Number(k.naturalWidth || k.width || 0), h = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || m < 1 || h < 1) return null;
    const S = nn({ label: "raster-object" });
    S.width = Math.max(1, Math.round(s)), S.height = Math.max(1, Math.round(a));
    const X = S.getContext("2d");
    return X ? (d.wrapOffsets.forEach(($) => {
      X.save(), X.translate(d.centerX + $, d.centerY), X.rotate(d.rotationRad), X.scale(d.scale, d.scale), X.drawImage(
        k,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), X.restore();
    }), t.set(f, { revision: u, source: S }), { source: S, revision: u }) : null;
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
function Y_(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function q_(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function X_({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
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
    const S = { owner: u, key: f, entry: g, callback: k };
    m.set(f, S), g.listeners.add(S);
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
    let S = r.get(m);
    if (S)
      r.delete(m), r.set(m, S);
    else {
      l(i - 1);
      const $ = e || globalThis.Image;
      if (typeof $ != "function") return null;
      const B = new $();
      S = { key: m, image: B, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, S), B.onload = () => a(S, !0), B.onerror = () => a(S, !1), B.src = h;
    }
    return S.settled || S.image.complete && Number(S.image.naturalWidth || S.image.width || 0) > 0 || s(u, m, S, k), S.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Ro = /* @__PURE__ */ new WeakMap();
function bg(e, t, { editor: r = !1 } = {}) {
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
function $r(e, ...t) {
  const r = Ro.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const wa = Object.freeze({
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
}), vg = "PanoramaSuite.Editor.ViewControls", J_ = {
  id: vg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(wa).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Z_(e) {
  return Object.hasOwn(wa, e) ? wa[e] : wa.default;
}
function Q_(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function ew(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const Ja = "state_json";
function Rr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function tw(e) {
  var s, a;
  const t = Rr(e, Ja);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = om(r, {
    coverage: (s = Rr(e, "coverage")) == null ? void 0 : s.value
  }), i = cg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function wd(e, t) {
  if (!e || Rn(e).coverageSyncInstalled) return;
  const r = Rr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, g, k, m;
    const o = n ? n(...i) : void 0, s = Rn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Lr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (g = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || g.call(f, !0, !0), (m = (k = t == null ? void 0 : t.canvas) == null ? void 0 : k.setDirty) == null || m.call(k, !0, !0), o;
  }, Rn(e).coverageSyncInstalled = !0;
}
function nw(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Wf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function rw(e) {
  var d, u, f, g, k, m;
  if (!e) return;
  const t = Rr(e, "coverage"), r = Rr(e, "bg_color"), n = Rr(e, Ja), i = Rr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && nw(o) && (Wf(s) || s === ""))) return;
  let c = "360";
  if (Wf(s))
    try {
      c = String(En((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (g = n.callback) == null || g.call(n, s), i && (i.value = a, (k = i.callback) == null || k.call(i, a)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function xa(e, t) {
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
async function iw(e, { tolerateOperationFailure: t = !1 } = {}) {
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
async function Sg(e, t = {}) {
  var n, i, o;
  await iw(e, t);
  const r = Array.from(((n = Rn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = Gm(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function ow(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Sg(e), r ? r.apply(this, n) : this.value;
  };
}
function sw(e) {
  var r;
  const t = St(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function _g(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return IS(this), r;
  };
}
function aw(e) {
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
    sw(u), wd(u, t), xa(u, Ja);
    const k = Rr(u, Ja);
    if (ow(u, k), k && !k.__panoPreviewPatchedCb) {
      k.__panoPreviewPatchedCb = !0;
      const h = k.callback;
      k.callback = (S) => {
        var $;
        const X = h ? h(S) : void 0;
        return ($ = u.setDirtyCanvas) == null || $.call(u, !0, !1), X;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = Rr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (m = h.callback) == null || m.call(h, "#00ff00")), ru(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), g.stickers && xa(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), g.attached = !0, g.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, ru(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), g.cutout && xa(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), g.attached = !0, g.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && tw(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && rw(this);
      const k = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && k && $r(this, "attach"), g;
    };
  }
  _g(e);
}
function lw(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return aw(this), n;
  }, _g(e);
}
function cw(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = Lr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (Lr(e) !== o) return;
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
    }), o.surface && xa(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function uw({
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
    settings: [J_, Rb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [hf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [hf.id] }],
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
      }), Va(d) && lw(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      wd(l, e), Va(c) && cw(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const dw = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Zn(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : dw.test(String(e.name || "")) : !1;
}
function xd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => Zn(r)) : !1;
}
function fw(e, t = {}) {
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
const Kf = /* @__PURE__ */ new WeakSet(), Uf = /* @__PURE__ */ new WeakSet();
let Bf = 0;
function iu(e) {
  if (!e || typeof e != "object" || Uf.has(e)) return e;
  const t = String(e.type || "preview");
  return Bf += 1, e.type = `${t}:pano-${Bf}`, Uf.add(e), e;
}
function Za(e) {
  if (!e || typeof e != "object" || Kf.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, Kf.add(e), e;
}
function wg(e, t) {
  var n, i;
  if (!t || ((i = (n = Za(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function pw({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: zt } = sa;
bS((e) => ri(e.id));
vS(hn);
const kd = X_(), { linkedVideoFile: xg } = Um({ app: zt, api: hn });
function ou() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (sa == null ? void 0 : sa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const hw = "pano_suite.ui_settings.v1", mw = 120, gw = 2048;
function Yf() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(hw)) || "").trim();
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
function yw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Fo(e) {
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
function bw() {
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
function kg(e) {
  const t = su(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function vw(e, t, r) {
  kg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function au(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Md(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Mg(e) {
  return Va(Md(e));
}
function qf(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = zt == null ? void 0 : zt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function Pg(e) {
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
      s !== "none" && pc(e), fx(e, { ...n, mode: i }), this.activeBackend = au(e);
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
    }).forEach((c) => $w(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Sw(e, t = "#00ff00") {
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
function _w(e) {
  var r, n;
  const t = (r = Rn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = yr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function un(e) {
  var l, c;
  const t = Rn(e), r = _w(e), n = t.liveStateVersion, i = String(((l = yr(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), o = Number(((c = yr(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, s = t.parsedState;
  if (s && s.source === r && s.liveVersion === n && s.bg === i && s.coverage === o)
    return s.parsed;
  const a = e.__panoSceneStateV2 && typeof r == "string" ? sm(r, { backgroundColor: i, coverage: o, active: cm(e) }) : Sw(r, i);
  return a.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, parsed: a }, a;
}
function yr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function ww(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Ng(e, t, r = null) {
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
  return !n && r != null && (n = ww(e == null ? void 0 : e.graph, r)), n;
}
function xw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function Ag(e, t = []) {
  const r = xw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    nr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function Xf(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function Qa(e, t) {
  const r = Xf(e), n = Xf(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function kw(e, t) {
  var r;
  return Ng(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function Mw(e, t = nr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = Ag(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return MS(e, s, kw);
}
const lu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = hn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f;
        if (!o) return;
        const s = Qa(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...Mw(o)].some((g) => Qa(n, g)) || jm(On(o).executedOutputs, n, r.output) || (Ig(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l), (d = o.setDirtyCanvas) == null || d.call(o, !0, !0), (f = (u = o.graph) == null ? void 0 : u.setDirtyCanvas) == null || f.call(u, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0);
      });
    }, hn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = hn) != null && e.removeEventListener) || (hn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function el(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function Pw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Nw(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function Aw(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Cw(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Pw(t)) return [t];
  const { filename: r, subfolder: n } = Nw(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => el({
    filename: r,
    subfolder: n,
    type: o
  }));
  return Aw([...i, t]);
}
function Iw(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? el({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ri(e) {
  const t = zt == null ? void 0 : zt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (Qa(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (Qa(s, i)) return t[s];
  }
  return null;
}
function zr(e, t, r = null) {
  const n = r || ri(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function An(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return An(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return el({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = An(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : el(e);
}
function ps(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function ka(e) {
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
function Ew(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function Ow(e, t) {
  try {
    const r = On(e);
    r.ownOutputRev = Y_(r.ownOutputRev);
    const n = Ew(t);
    let i = "";
    for (const o of n)
      if (i = An(o), i) break;
    i ? (Pd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function eo(e) {
  var r;
  const t = On(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Fw(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Xt(e, "background"))
    return eo(e), null;
  const i = ri(n), o = ud(i, t, An);
  if (!o)
    return eo(e), null;
  const s = On(e), a = Pd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  eo(e);
  const d = PS({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Tw(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = Ag(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], g = e.graph ? e.getInputLink(u) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const k = g.origin_id, m = Ng(e, u, k);
    if (!m) continue;
    const h = Number(g.origin_slot ?? 0), S = ri((m == null ? void 0 : m.id) ?? k), X = Array.isArray(S == null ? void 0 : S.images) ? S.images : [];
    if (X.length) {
      const Y = [];
      h >= 0 && h < X.length && Y.push(X[h]), Y.push(...X);
      for (const H of Y.filter((K) => !ba(K))) {
        const K = An(H);
        if (K)
          return String((f == null ? void 0 : f.name) || ""), { src: `${K}&pano_src=${Zc(S)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (zt == null ? void 0 : zt.getNodeImageUrls) == "function" ? zt.getNodeImageUrls(m) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const Y = [];
      h >= 0 && h < $.length && Y.push($[h]), Y.push(...$);
      for (const H of Y) {
        const K = An(H);
        if (K)
          return String((f == null ? void 0 : f.name) || ""), { src: K, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const B = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (B.length) {
      const Y = [];
      h >= 0 && h < B.length && Y.push(B[h]), Y.push(...B);
      for (const H of Y) {
        const K = An(H);
        if (K)
          return String((f == null ? void 0 : f.name) || ""), { src: K, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const F = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (F) {
      let Y = An(F.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (Y = hn.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`)), Y)
        return String((f == null ? void 0 : f.name) || ""), { src: Y, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Xt(e, "background") ? ri(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = An(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Dw(e, t = [], r = {}) {
  const n = Tw(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Cw(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = On(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
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
function Cg(e, t = [], r = null, n = {}) {
  const i = Dw(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Ig(e) {
  e && (kd.disposeOwner(e), On(e).linkedImages.clear(), eo(e));
}
function Lw(e) {
  e && (On(e).linkedImages.clear(), eo(e));
}
function Eg(e, t) {
  const r = St(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function ea(e, t, r = "") {
  var s;
  const n = Eg(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < mw ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function Jf(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Rw(e, t, r = 1) {
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
function Vw(e) {
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
function $w(e, t) {
  return wg(e, t);
}
function hs(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = Iw(r);
  if (!o && (n != null && n.external)) {
    if (!Xt(e, "external-sticker")) return null;
    const g = ri(e == null ? void 0 : e.id), k = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const m of Array.isArray(k) ? k : [k])
      if (o = An(m), o) break;
  }
  if (!o) return null;
  const s = zr(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? On(e).ownOutputRev : 0, c = n != null && n.external ? Pd(o, l) : o, d = q_(o, a, l);
  return kd.get(e, d, c, (g, k) => {
    var m, h;
    k && (n != null && n.external && On(e).outputFromRun && $r(e, "image-loaded"), (h = (m = St(e).dom) == null ? void 0 : m.requestDraw) == null || h.call(m));
  }) || null;
}
function zw(e, t) {
  var f, g, k, m;
  const r = St(e), n = Kw(e, t), i = Uw(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const S = n.getGroupDisplayCanvas(h);
    return S ? {
      id: `paint_group:${h}`,
      source: S,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (m = (k = r.rasterCache) == null ? void 0 : k.retain) == null || m.call(k, []), a;
  r.rasterCache || (r.rasterCache = B_()), r.rasterReady || (r.rasterReady = () => {
    var h, S;
    return (S = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : S.call(h);
  });
  const c = W_(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const S = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return S ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: S.source,
      revision: S.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function jw(e, t, r, n) {
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
  const i = Gw(e, t, n);
  return i || null;
}
function Hw(e, t) {
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
function Gw(e, t, r) {
  var i, o;
  const n = Hw(t, r || (zt == null ? void 0 : zt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Ww(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Kw(e, t) {
  var d, u, f, g, k, m, h, S, X, $, B, F;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (g = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : g.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = Ww(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = bl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((S = s.paintRevision) == null ? void 0 : S.mask) !== c.mask || ((X = s.paintRevision) == null ? void 0 : X.groups) !== c.groups || (($ = s.paintRevision) == null ? void 0 : $.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((B = t == null ? void 0 : t.painting) == null ? void 0 : B.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((F = t == null ? void 0 : t.painting) == null ? void 0 : F.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Uw(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function Bw(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Yw(e, t, r) {
  const n = Sd(t, r);
  n.visible && vd(e, n.boundaryEdges, { selected: !1 });
}
function qw(e, t, r) {
  const n = Sd(t, r);
  n.visible && (e.save(), vd(e, n.boundaryEdges, { selected: !0 }), yg(e, n, { accent: V_(t) }), e.restore());
}
function cu(e, t, r) {
  return Nm(Ba(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function tl(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? ao;
}
function Xw(e) {
  return [Xt(e, "background") ? ud(ri(e.id), ["pano_input_videos"], An) : "", xg(e, nr)];
}
function Jw(e) {
  var o;
  if (!Xt(e, "external-sticker")) return null;
  const t = ri(e.id), r = zr(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(An), meta: r };
  const i = ud(t, ["pano_sticker_input_videos"], An);
  return i ? { src: i, meta: r } : null;
}
function Zw({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Og(e, t) {
  var n;
  const r = St(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: Wr({ ...t, painting: null }) }), r.scene.sceneState;
}
function Qw(e, t) {
  const r = Ml(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Xt(e, "background")) {
    const o = zr(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (Dm(e, nr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === xg(e, nr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = Cg(e, nr, null, { preserveReadyWhilePending: !1 });
  return ps(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function ex(e, t) {
  var i, o, s;
  const r = String(((i = yr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Xt(e, a));
  return {
    stateText: String(((o = yr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: un(e).coverage,
    bgColor: String(((s = yr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Qw(e, t) : null,
    run: n && zr(e, "pano_output_size") || null,
    erp: n && zr(e, "pano_output_erp") || null
  };
}
function Fg(e) {
  const t = On(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function tx(e, t, r) {
  const n = On(e), i = St(e), o = An(zr(e, "pano_output_erp"));
  let s = n.studioRunImage;
  if (s && s.src !== o && (Fg(e), s = null), !t || !o) return null;
  if (!s) {
    const a = new Image(), l = { src: o, image: a, ready: !1 };
    a.src = o, a.decode().then(() => {
      var c, d;
      n.studioRunImage === l && (l.ready = !0, (d = (c = i.dom) == null ? void 0 : c.requestDraw) == null || d.call(c));
    }, () => {
    }), n.studioRunImage = s = l;
  }
  return s.ready ? {
    media: s.image,
    revision: ka(s.image),
    coverage: Number(t.coverage) === 180 ? 180 : 360,
    quaternion: D_(r())
  } : null;
}
function nx(e, t, r) {
  const n = Og(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = hs(e, s.id, Ka(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = fd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: ka(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = hs(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return ps(a) ? { media: a, revision: ka(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : zw(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: ps(r) ? { media: r, revision: ka(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Cm(n, tl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function rx(e, t, r, n = null) {
  var H, K, Q, fe, D, oe, ne;
  const i = St(e), o = String(i.mode || "stickers");
  Eg(e, o);
  const s = un(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (Q = (K = (H = i.cutout) == null ? void 0 : H.session) == null ? void 0 : K.refresh) == null || Q.call(K)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (oe = (D = (fe = i.stickers) == null ? void 0 : fe.session) == null ? void 0 : D.refresh) == null || oe.call(D));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c);
  const f = (n == null ? void 0 : n.media) || (i.playback ? Zw(i.playback) : Fw(e, ["pano_input_videos"], () => {
    var j, re;
    return (re = (j = i.dom) == null ? void 0 : j.requestDraw) == null ? void 0 : re.call(j);
  })) || Cg(
    e,
    nr,
    () => {
      var j, re;
      return (re = (j = i.dom) == null ? void 0 : j.requestDraw) == null ? void 0 : re.call(j);
    },
    { preserveReadyWhilePending: !1 }
  ), g = ps(f);
  let k = null;
  const m = () => n ? { background: n, layers: [] } : nx(e, s, f), h = (j, re) => {
    k || (k = m());
    const L = r.render({ width: j.w, height: j.h, camera: re, ...k });
    return L && d.drawImage(L.canvas, L.x, L.y, L.width, L.height, j.x, j.y, j.w, j.h), !!L;
  };
  if (o === "cutout") {
    const j = Vw(s), re = Bw(f), L = j ? Ie(oi(j).aspect, 0.1, 10) : g ? Ie(Number(re.width / re.height), 0.05, 20) : 1, G = bd(u, L);
    i.cutoutFrame = G;
    let E = "none";
    const W = String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "");
    if (j)
      if (f && !g)
        E = "loading";
      else if (g) {
        const R = XS({ width: l, height: c }, G, j);
        [
          !R.fallback || h(R.fallback.rect, Jo(R.fallback.shot)),
          h(R.rect, Jo(R.shot)),
          !R.fallback || h(G, Jo(j))
        ].every(Boolean) || (E = "loading");
      } else
        E = "empty";
    else {
      const R = i.lastCutoutShot;
      R ? (i.view = lg(R, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), g ? h(u, Ba(i.view, l, c)) || (E = "loading") : f ? E = "loading" : E = "empty";
    }
    g || r.release(), r.failed && E === "loading" && (E = "none"), j && (i.lastCutoutShot = { ...j }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(G.x, G.y, G.w, G.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(G.x + 0.5, G.y + 0.5, Math.max(0, G.w - 1), Math.max(0, G.h - 1)), d.restore()), E === "loading" ? (hc(e, !1), ea(e, !0, W)) : E === "empty" ? (hc(e, !0), ea(e, !1, "")) : (hc(e, !1), ea(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!f || g) && (k = m(), !k.background && !k.layers.length ? (r.release(), S = !0) : S = h(u, Ba(i.view, l, c)));
  const X = !S && !r.failed;
  ea(e, X, X ? String((f == null ? void 0 : f.currentSrc) || (f == null ? void 0 : f.src) || "") : ""), X && Rw(d, u, Jf(t, u));
  const $ = cu(e, l, c);
  !f && S && ix(d, $, Jf(t, u));
  const B = String(((ne = s == null ? void 0 : s.active) == null ? void 0 : ne.selected_sticker_id) || ""), F = Qc(s, tl(e)), Y = S && e.__panoStudio !== !0 ? F.find((j) => String((j == null ? void 0 : j.id) || "") === B && (j == null ? void 0 : j.visible) !== !1) : null;
  S && !n && F.filter((j) => j !== Y && (j == null ? void 0 : j.visible) !== !1 && (j.external || j.source_kind === "external_image")).filter((j) => !ps(hs(e, j.id, null, { external: !0 }))).forEach((j) => Yw(d, j, $)), Y && qw(d, Y, $);
}
function Zf(e, t, r, n, i = 1) {
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
function ix(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Nn(c, a));
    Zf(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Nn(a, c));
    Zf(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Nn(0, 0) },
    { name: "Right", dir: Nn(90, 0) },
    { name: "Back", dir: Nn(180, 0) },
    { name: "Left", dir: Nn(-90, 0) }
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
function ox(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function jn(e, t) {
  return ox(e, t) ? !1 : (uu(e), !0);
}
function Qf() {
  var r;
  const e = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function sx(e) {
  var r;
  if (!e) return;
  const t = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ax(e, t = 360, r = 260) {
  const n = St(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !kg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function lx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = St(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function ep(e, t = null, r = 0, n = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && cx(e, 180, t);
    }
  };
}
function cx(e, t = 180, r = null) {
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
const ux = /* @__PURE__ */ new WeakMap();
function Tg(e, t) {
  return jm(ux, e, t) ? !1 : (Ow(e, t), Ig(e), zo(e), !0);
}
async function dx(e) {
  var r, n;
  const t = await xS(e, zt, hn);
  t && (Tg(e, t), (n = (r = St(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function fx(e, t = {}) {
  var je;
  const r = t.__allowStandalone === !0, n = St(e), i = On(e), o = Rn(e), s = Mg(e);
  if (s && !r) {
    Md(e);
    return;
  }
  s && ax(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: qf(e)
  }.signature || qf(e), au(e), e == null || e.id, n.mode, e.addDOMWidget, su(e), (je = n.dom) != null && je.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, g = f ? 0 : 56, k = f ? 0 : US, m = document.createElement("div");
  if (bw(), m.className = "pano-node-preview-dom", m.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
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
    const pe = Za(iu(
      e.addDOMWidget(ou(), "preview", m, ep(e, null))
    ));
    zo(e), n.dom = { widget: pe, root: m, requestDraw: () => {
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
  const S = nn({ label: "node.surface" });
  S.style.cssText = [
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
  ].join(";"), X.textContent = "Connect ERP image", h.appendChild(S), h.appendChild(X), m.appendChild(h);
  const $ = Ih(m), B = document.createElement("div");
  B && (B.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", B.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(B)), vw(e, 120, 120), zo(e);
  let F = null;
  try {
    lx(e, g, () => {
      var pe, Oe;
      return (Oe = (pe = n.dom) == null ? void 0 : pe.requestDraw) == null ? void 0 : Oe.call(pe);
    }), F = Za(iu(e.addDOMWidget(
      ou(),
      "preview",
      m,
      ep(
        e,
        () => {
          var pe, Oe;
          return (Oe = (pe = n.dom) == null ? void 0 : pe.requestDraw) == null ? void 0 : Oe.call(pe);
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
  }, H = R_(), K = () => {
    Y.destroyed || (Y.needsDraw = !0, !Y.inTick && !Y.raf && (Y.raf = requestAnimationFrame(v)));
  }, Q = Om(K), fe = /* @__PURE__ */ uo(a ? {
    ...rg(un(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...sg(un(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((pe) => ({ value: pe, label: pe }))
  });
  let D = null;
  if (a && e.__panoSceneStateV2) {
    const [pe, Oe] = [0, 1].map(() => {
      const He = _s(document, "node.playback");
      return He.playsInline = !0, He.preload = "auto", He.crossOrigin = "anonymous", He.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(He), He;
    }), Ae = nn({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const $e = nn({ label: "node.port-still" });
    $e.__panoFrameIdx = 0;
    const Be = WS({
      video: pe,
      stickerVideo: Oe,
      createImage: (He, We) => {
        const ft = new Image();
        return ft.onload = We, ft.onerror = We, ft.src = He, ft;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (He) => requestAnimationFrame(He),
        cancelFrame: (He) => cancelAnimationFrame(He)
      },
      readState: () => un(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: K,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var We;
        if (!(pe.videoWidth > 0 && pe.videoHeight > 0)) return;
        const He = Math.min(1, gw / pe.videoWidth);
        Ae.width = Math.round(pe.videoWidth * He), Ae.height = Math.round(pe.videoHeight * He), (We = Ae.getContext("2d")) == null || We.drawImage(pe, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, K();
      },
      onStickerCapture: () => {
        var He;
        Oe.videoWidth > 0 && Oe.videoHeight > 0 && ($e.width = Oe.videoWidth, $e.height = Oe.videoHeight, (He = $e.getContext("2d")) == null || He.drawImage(Oe, 0, 0), $e.__panoFrameIdx += 1, K());
      },
      onChange: () => {
        fe.playing = Be.playing, K();
      }
    });
    D = { playback: Be, video: pe, still: Ae, stickerVideo: Oe, stickerStill: $e, stickerSource: "" }, n.playback = D;
  }
  const oe = () => {
    var ft;
    const { playback: pe, still: Oe, stickerStill: Ae } = D, $e = Sa(h, !!((ft = e.flags) != null && ft.collapsed)), Be = pe.source, He = $e ? Jw(e) : null, We = pe.follow({
      shown: $e,
      sources: $e ? Xw(e) : [],
      state: un(e),
      sticker: He
    });
    ((He == null ? void 0 : He.src) || "") !== D.stickerSource && (D.stickerSource = (He == null ? void 0 : He.src) || "", is(Ae)), pe.source !== Be && (is(Oe), Oe.__panoFrameIdx = 0), fe.playable = We, fe.playing = pe.playing;
  }, ne = () => {
    var Oe, Ae;
    const pe = ((Oe = i.ownOutputVideo) == null ? void 0 : Oe.player) ?? null;
    pe && !Sa(h, !!((Ae = e.flags) != null && Ae.collapsed)) && pe.pause(), a && (fe.playable = !!pe && !pe.failed(), fe.playing = !!(pe != null && pe.playing));
  }, j = () => {
    var pe;
    D == null || D.playback.pause(), (pe = i.ownOutputVideo) == null || pe.player.pause();
  };
  let re = null;
  const L = (a ? HS : ZS)({
    readState: () => un(e),
    publishLiveState: (pe) => {
      pe ? (re = pe, o.liveState = pe) : (o.liveState === re && (o.liveState = null), re = null), o.liveStateVersion += 1, o.parsedState = null, K();
    },
    commitState: (pe) => {
      var $e, Be, He, We;
      const Oe = yr(e, "state_json");
      if (!Oe) return;
      um(e, pe.active);
      const Ae = dm(e, pe);
      fm(e, Ae, String(Oe.value ?? "")) || (Oe.value = Ae, ($e = Oe.callback) == null || $e.call(Oe, Ae), o.parsedState = null, (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0), (We = (He = e.graph) == null ? void 0 : He.setDirtyCanvas) == null || We.call(He, !0, !0));
    },
    onChange: (pe) => Object.assign(fe, pe)
  }), E = a ? bg(e, (pe = "sync", Oe = null) => {
    var sn;
    if (!a || !e.graph || !L || L.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Gt = Xt(e, "external-sticker"), ir = un(e).stickers.find((or) => or.source.kind === "port");
      return L.apply({
        type: "sync-port",
        value: tg(e, {
          pose: Gt ? zr(e, "pano_sticker_input_pose", Oe) : null,
          image: ir ? hs(e, ir.id, null, { external: !0 }) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Gt) => String((Gt == null ? void 0 : Gt.name) || "") === "sticker_image") : -1, $e = Ae >= 0 ? ((sn = e.getInputLink(Ae)) == null ? void 0 : sn.id) ?? null : null;
    if ($e == null)
      return L.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Xt(e, "external-sticker")) return !1;
    const Be = zr(e, "pano_sticker_input_pose", Oe), He = Array.isArray(Be) ? Be[0] : Be, We = String(zr(e, "pano_sticker_input_state_hash", Oe) ?? ""), ft = n.view || { yaw: 0, pitch: 0 }, yt = un(e), Lt = (Array.isArray(yt == null ? void 0 : yt.stickers) ? yt.stickers : []).find((Gt) => String((Gt == null ? void 0 : Gt.id) || "") === "sticker_image_1"), At = hs(e, "sticker_image_1", null, { external: !0 }), zn = He && typeof He == "object" ? He : Lt || { yaw_deg: ft.yaw, pitch_deg: ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return L.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: $e,
        stateHash: We,
        pose: zn,
        imageWidth: Number((At == null ? void 0 : At.naturalWidth) || (At == null ? void 0 : At.width) || 0),
        imageHeight: Number((At == null ? void 0 : At.naturalHeight) || (At == null ? void 0 : At.height) || 0)
      }
    });
  }) : () => {
  };
  let W = 0;
  const R = async (pe) => {
    if (!a || !L || !Zn(pe)) return !1;
    j();
    const Oe = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, $e = { ...n.view || { yaw: 0, pitch: 0 } };
    W += 1, fe.importing = !0;
    const Be = Vo(e, `add:${Oe}`, async () => {
      const He = await $o(pe), We = await yi(pe, {
        fetchApi: (ft, yt) => hn.fetchApi(ft, yt)
      });
      return te(), L.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Oe,
          asset: We,
          imageWidth: He.width,
          imageHeight: He.height,
          yaw_deg: Number($e.yaw || 0),
          pitch_deg: Number($e.pitch || 0)
        }
      });
    });
    try {
      return await Be;
    } catch {
      return !1;
    } finally {
      W = Math.max(0, W - 1), fe.importing = W > 0, K();
    }
  };
  let J = null, ue = null, Se = null, ee = !1;
  const A = () => {
    var pe;
    return Se && (clearTimeout(Se), Se = null), ee ? (ee = !1, ((pe = L == null ? void 0 : L.commitGesture) == null ? void 0 : pe.call(L)) ?? !1) : !1;
  }, te = () => {
    var $e, Be, He;
    const pe = A(), Oe = (J == null ? void 0 : J.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    if (J = null, ue = null, Oe != null) {
      try {
        ($e = S.hasPointerCapture) != null && $e.call(S, Oe) && ((Be = S.releasePointerCapture) == null || Be.call(S, Oe));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ae = ((He = L == null ? void 0 : L.commitGesture) == null ? void 0 : He.call(L)) ?? !1;
    return pe || Ae;
  }, ce = () => {
    var $e, Be, He;
    const pe = A(), Oe = J == null ? void 0 : J.pointerId;
    if (J = null, Oe != null) {
      try {
        ($e = S.hasPointerCapture) != null && $e.call(S, Oe) && ((Be = S.releasePointerCapture) == null || Be.call(S, Oe));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ae = ((He = L == null ? void 0 : L.cancelGesture) == null ? void 0 : He.call(L)) ?? !1;
    return pe || Ae;
  }, be = () => te();
  L && o.flushers.add(be);
  let ve = null, C = !1;
  if (B && L)
    try {
      _d(), ve = Lu(l ? I_ : a ? k_ : g_, {
        model: fe,
        onAction: (pe) => {
          var $e, Be, He;
          if ((pe == null ? void 0 : pe.type) === "toggle-playback") {
            te(), D ? D.playback.toggle() : ($e = i.ownOutputVideo) == null || $e.player.toggle(), K();
            return;
          }
          if (j(), (pe == null ? void 0 : pe.type) === "open-editor") {
            te(), a || (fe.aspectOpen = !1), (Be = n.openEditor) == null || Be.call(n);
            return;
          }
          if (a) {
            if ((pe == null ? void 0 : pe.type) === "add-image-file") {
              R(pe.file);
              return;
            }
            L.apply(pe) && K();
            return;
          }
          if ((pe == null ? void 0 : pe.type) === "toggle-aspect") {
            fe.aspectOpen = !fe.aspectOpen;
            return;
          }
          if ((pe == null ? void 0 : pe.type) === "close-aspect") {
            fe.aspectOpen = !1;
            return;
          }
          let Oe = pe;
          if ((pe == null ? void 0 : pe.type) === "add-frame") {
            const We = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Oe = {
              ...pe,
              ...YS(We, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((pe == null ? void 0 : pe.type) === "delete-frame") {
            const We = Mi(un(e));
            We && (n.view = lg(We, {
              width: S.width,
              height: S.height
            }));
          }
          const Ae = ((He = n.cutoutFrame) == null ? void 0 : He.safeRect) || null;
          fe.aspectOpen = !1, L.apply({ ...Oe, safeRect: Ae }) && K();
        }
      }), ve.mount(B), C = !0;
    } catch {
      ve = null, C = !1;
    }
  const le = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    D && oe(), K();
  }) : null;
  le == null || le.observe(h);
  const v = (pe) => {
    var Ae, $e, Be;
    Y.raf = 0, Y.inTick = !0;
    let Oe = !1;
    try {
      if (Oe = b.stepInertia(pe), Y.needsDraw || Oe) {
        Y.needsDraw = !1, D ? oe() : ne();
        const He = l ? ex(e, D) : null, We = () => Og(e, un(e)), ft = He && Sa(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? tx(e, T_(We(), He), We) : null;
        if (($e = e.flags) != null && $e.collapsed || rx(e, S, Q, ft), fe.viewUnavailable = Q.failed, l) {
          const yt = H({ ...He, showingRun: !!ft }, We);
          yt && (fe.status = yt);
        }
      }
    } finally {
      Y.inTick = !1;
    }
    (Oe || Y.needsDraw) && !Y.raf && (Y.raf = requestAnimationFrame(v)), yw() && (!n.debugLastTs || pe - n.debugLastTs > 1200) && (n.debugLastTs = pe, n.mode, su(e), Fo(m), Fo(h), Fo(S), Fo(m.parentElement), Fo((Be = m.parentElement) == null ? void 0 : Be.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, b = ju({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (pe) => {
      n.view = pe;
    },
    getViewportSize: () => {
      const pe = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(pe.width || S.clientWidth || 0)),
        h: Math.max(1, Number(pe.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const pe = Yf();
      return {
        x: pe.invert_view_x ? -1 : 1,
        y: pe.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      K();
    }
  }), O = a ? h : m, _ = (pe) => {
    const Oe = S.getBoundingClientRect();
    return {
      x: (Number(pe.clientX) - Oe.left) * (S.width / Math.max(1, Oe.width)),
      y: (Number(pe.clientY) - Oe.top) * (S.height / Math.max(1, Oe.height))
    };
  }, z = (pe) => {
    var $e, Be;
    if (!a || l || !d) return;
    const Oe = un(e), Ae = Gf(
      Qc(Oe, tl(e)),
      String((($e = Oe == null ? void 0 : Oe.active) == null ? void 0 : $e.selected_sticker_id) || ""),
      _(pe),
      cu(e, S.width, S.height)
    );
    if (!Ae) {
      S.style.cursor = "grab";
      return;
    }
    if (((Be = Ae.item) == null ? void 0 : Be.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Ae.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (pe) => {
    var ft, yt, Lt, At, zn, qe, sn, Gt, ir, or, li;
    if (!jn(pe, O) || pe.button !== 0) return;
    if (!a) {
      const rn = Mi(un(e)), bn = n.cutoutFrame;
      if (!rn) {
        (ft = m.focus) == null || ft.call(m, { preventScroll: !0 }), (yt = S.setPointerCapture) == null || yt.call(S, pe.pointerId), S.style.cursor = "grabbing", b.startDrag(pe.clientX, pe.clientY, pe.pointerId);
        return;
      }
      if (rn.locked === !0 || !bn || !L) return;
      const Ur = _(pe);
      let xr;
      if (pe.shiftKey) {
        const sr = ug({
          frame: bn,
          point: Ur,
          startRollDeg: Number(rn.roll_deg ?? rn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!sr) return;
        xr = { kind: "roll", pointerId: pe.pointerId, rollGesture: sr };
      } else {
        const sr = ((Lt = un(e)) == null ? void 0 : Lt.ui_settings) || Yf();
        xr = {
          kind: "pan",
          pointerId: pe.pointerId,
          startPoint: Ur,
          startShot: { ...rn },
          focalPx: Ni(bn, rn),
          invertX: sr.invert_view_x === !0,
          invertY: sr.invert_view_y === !0
        };
      }
      te(), (At = m.focus) == null || At.call(m, { preventScroll: !0 }), (zn = S.setPointerCapture) == null || zn.call(S, pe.pointerId), S.style.cursor = "grabbing", L.beginGesture(), J = xr;
      return;
    }
    if (!d) return;
    const Oe = _(pe), Ae = un(e), $e = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Be = cu(e, S.width, S.height);
    (sn = m.focus) == null || sn.call(m, { preventScroll: !0 });
    const He = () => Gf(Qc(Ae, tl(e)), $e, Oe, Be);
    let We = l ? null : He();
    if (We && (D != null && D.playback.playing) && (j(), We = He()), We && L) {
      if (b.stopMotion(), te(), String(((Gt = We.item) == null ? void 0 : Gt.id) || "") !== $e && L.apply({ type: "select-sticker", id: We.item.id }), ((ir = We.item) == null ? void 0 : ir.locked) === !0) {
        K();
        return;
      }
      const rn = Oe, bn = We.geometry.center;
      ue = {
        active: !0,
        kind: We.hit.kind,
        pointerId: pe.pointerId,
        startPoint: rn,
        startCenter: { ...bn },
        startSticker: { ...We.item },
        startDistance: Math.max(1, Math.hypot(rn.x - bn.x, rn.y - bn.y)),
        startAngle: Math.atan2(rn.y - bn.y, rn.x - bn.x),
        projection: Be
      }, L.beginGesture(), (or = S.setPointerCapture) == null || or.call(S, pe.pointerId), S.style.cursor = We.hit.kind === "rotate" ? "grabbing" : We.hit.kind === "move" ? "move" : We.hit.cursor, K();
      return;
    }
    (li = S.setPointerCapture) == null || li.call(S, pe.pointerId), S.style.cursor = "grabbing", b.startDrag(pe.clientX, pe.clientY, pe.pointerId);
  }), S.addEventListener("pointermove", (pe) => {
    if (!a) {
      if (!J) {
        if (!b.state.drag.active) return;
        jn(pe, O), b.moveDrag(pe.clientX, pe.clientY, "pano");
        return;
      }
      if (J.pointerId !== pe.pointerId || !L) return;
      if (jn(pe, O), J.kind === "pan") {
        const Ae = _(pe);
        L.updateGesture({
          type: "pan-camera",
          startShot: J.startShot,
          dx: Ae.x - J.startPoint.x,
          dy: Ae.y - J.startPoint.y,
          focalPx: J.focalPx,
          invertX: J.invertX,
          invertY: J.invertY
        });
        return;
      }
      const Oe = dg(J.rollGesture, _(pe), pe);
      if (!Oe) return;
      J.rollGesture = Oe.gesture, L.updateGesture({ type: "set-roll", value: Oe.rollDeg });
      return;
    }
    if (!ue && !b.state.drag.active) {
      z(pe);
      return;
    }
    if (ue) {
      if (ue.pointerId !== pe.pointerId || !L) return;
      jn(pe, O);
      const Oe = _(pe);
      let Ae = ue.startSticker;
      if (ue.kind === "move")
        Ae = j_(
          ue.startSticker,
          {
            x: ue.startCenter.x + Oe.x - ue.startPoint.x,
            y: ue.startCenter.y + Oe.y - ue.startPoint.y
          },
          ue.projection
        );
      else if (ue.kind === "scale") {
        const $e = Math.hypot(Oe.x - ue.startCenter.x, Oe.y - ue.startCenter.y);
        Ae = H_(ue.startSticker, ue.startDistance, $e);
      } else if (ue.kind === "rotate") {
        const $e = Math.atan2(Oe.y - ue.startCenter.y, Oe.x - ue.startCenter.x);
        Ae = G_(ue.startSticker, ue.startAngle, $e, pe.shiftKey === !0);
      }
      L.updateGesture({ type: "set-transform", value: Ae }), K();
      return;
    }
    !d || !b.state.drag.active || (jn(pe, O), b.moveDrag(pe.clientX, pe.clientY, "pano"));
  });
  const x = () => {
    var Oe, Ae;
    if (!J && !ue) {
      if (!b.state.drag.active) return;
      b.endDrag(), S.style.cursor = "grab", K();
      return;
    }
    if (!L) return;
    const pe = (J == null ? void 0 : J.pointerId) ?? (ue == null ? void 0 : ue.pointerId);
    J = null, ue = null;
    try {
      (Oe = S.hasPointerCapture) != null && Oe.call(S, pe) && ((Ae = S.releasePointerCapture) == null || Ae.call(S, pe));
    } catch {
    }
    L.cancelGesture(), S.style.cursor = "grab", K();
  }, V = (pe, Oe = !1) => {
    var Ae, $e, Be, He;
    if (!a) {
      if (!J) {
        if (!b.state.drag.active) return;
        jn(pe, O), (Ae = S.releasePointerCapture) == null || Ae.call(S, pe.pointerId), S.style.cursor = "grab", b.endDrag(), K();
        return;
      }
      if (J.pointerId !== pe.pointerId || !L) return;
      jn(pe, O), J = null, ($e = S.releasePointerCapture) == null || $e.call(S, pe.pointerId), S.style.cursor = "grab", Oe ? L.cancelGesture() : L.commitGesture(), z(pe), K();
      return;
    }
    if (ue) {
      if (ue.pointerId !== pe.pointerId || !L) return;
      jn(pe, O), ue = null, (Be = S.releasePointerCapture) == null || Be.call(S, pe.pointerId), S.style.cursor = "grab", Oe ? L.cancelGesture() : L.commitGesture(), K();
      return;
    }
    !d || !b.state.drag.active || (jn(pe, O), (He = S.releasePointerCapture) == null || He.call(S, pe.pointerId), S.style.cursor = "grab", b.endDrag(), K());
  };
  S.addEventListener("pointerup", V), S.addEventListener("pointercancel", (pe) => V(pe, !0)), S.addEventListener("lostpointercapture", x), S.addEventListener("pointerleave", (pe) => {
    !a && J || ue || b.state.drag.active && V(pe);
  });
  const w = (pe) => {
    const Oe = document.activeElement;
    if (Oe !== m && !m.contains(Oe)) return;
    if (pe.key === "Escape" && (J || ue) && L) {
      x(), uu(pe);
      return;
    }
    if (!a || l || pe.key !== "Delete" && pe.key !== "Backspace" || !L) return;
    const Ae = pe.target, $e = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    $e === "INPUT" || $e === "TEXTAREA" || Ae != null && Ae.isContentEditable || fe.canDelete === !0 && (j(), te(), L.apply({ type: "delete-selected" }) && K(), uu(pe));
  };
  window.addEventListener("keydown", w, !0);
  const N = pw({
    requestFrame: (pe) => requestAnimationFrame(pe),
    cancelFrame: (pe) => cancelAnimationFrame(pe),
    restore: (pe) => sx(pe)
  }), I = (pe) => {
    var Ae, $e, Be, He, We, ft;
    if (!jn(pe, O)) return;
    if (!a) {
      const yt = Mi(un(e));
      if (yt && yt.locked !== !0 && L) {
        const Lt = Da(pe);
        Lt !== 0 && (ee || (te(), L.beginGesture(), ee = !0), L.updateGesture({
          type: "step-fov",
          direction: Lt
        }) ? (Se && clearTimeout(Se), Se = setTimeout(A, 180), K()) : L.hasGestureChanges() || (L.cancelGesture(), ee = !1));
      } else if (!yt) {
        const Lt = Qf();
        b.applyWheelEvent(pe) && K(), N.schedule(Lt);
      }
      (Ae = pe.preventDefault) == null || Ae.call(pe), ($e = pe.stopPropagation) == null || $e.call(pe), (Be = pe.stopImmediatePropagation) == null || Be.call(pe);
      return;
    }
    if (!d) return;
    const Oe = Qf();
    b.applyWheelEvent(pe) && K(), (He = pe.preventDefault) == null || He.call(pe), (We = pe.stopPropagation) == null || We.call(pe), (ft = pe.stopImmediatePropagation) == null || ft.call(pe), N.schedule(Oe);
  }, q = a ? [h, S] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((pe) => {
    q.forEach((Oe) => Oe.addEventListener(pe, I, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((pe) => {
    S.addEventListener(pe, (Oe) => jn(Oe, O)), h.addEventListener(pe, (Oe) => jn(Oe, O));
  });
  const se = yr(e, "state_json");
  let me = null, Z = null;
  se && !se.__panoPreviewPatchedCb && (me = se.callback, Z = (pe) => {
    const Oe = me ? me(pe) : void 0;
    return K(), Oe;
  }, se.callback = Z, se.__panoPreviewPatchedCb = Z);
  const he = yr(e, "bg_color");
  let we = null, Pe = null;
  he && !he.__panoPreviewPatchedCb && (we = he.callback, Pe = (pe) => {
    const Oe = we ? we(pe) : void 0;
    return K(), Oe;
  }, he.callback = Pe, he.__panoPreviewPatchedCb = Pe);
  const de = l ? yr(e, "output_size") : null, ye = de == null ? void 0 : de.callback, y = de ? (pe) => {
    const Oe = ye ? ye(pe) : void 0;
    return K(), Oe;
  } : null;
  de && (de.callback = y);
  const p = e.onRemoved, T = e.onResize, P = e.onExecuted, M = e.onDragOver, ie = e.onDragDrop;
  let ge = null;
  const U = () => {
    a && (fe.dropActive = !0, ge && clearTimeout(ge), ge = setTimeout(() => {
      ge = null, fe.dropActive = !1;
    }, 140));
  }, ae = c ? function(pe) {
    return (M ? M.apply(this, arguments) : !1) === !0 ? !0 : xd(pe == null ? void 0 : pe.dataTransfer) ? (U(), !0) : !1;
  } : null, Ne = c ? function(pe) {
    var $e;
    if ((ie ? ie.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from((($e = pe == null ? void 0 : pe.dataTransfer) == null ? void 0 : $e.files) || []).find((Be) => Zn(Be));
    return Ae ? (ge && clearTimeout(ge), ge = null, fe.dropActive = !1, R(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = ae, e.onDragDrop = Ne);
  const _e = c ? fw(m, {
    onActive: (pe) => {
      if (pe) {
        U();
        return;
      }
      ge && clearTimeout(ge), ge = null, fe.dropActive = !1;
    },
    onDrop: (pe) => {
      R(pe);
    }
  }) : () => {
  }, Me = function(pe) {
    i.outputFromRun = !0;
    const Oe = Tg(e, pe);
    $r(e, Oe ? "executed" : "sync", pe), K();
    const Ae = P ? P.apply(this, arguments) : void 0;
    return zo(e), Ae;
  };
  e.onExecuted = Me;
  const De = e.onConnectionsChange, Le = function(pe, Oe) {
    const Ae = Ef(e, pe, Oe, cd), $e = Ef(e, pe, Oe, nr), Be = arguments, He = De ? De.apply(this, Be) : void 0, We = () => {
      Y.destroyed || ($e && Lw(e), Ae && $r(e, "connection-change"), zo(e), K());
    };
    return We(), queueMicrotask(We), He;
  };
  e.onConnectionsChange = Le;
  const Ge = function() {
    const pe = T ? T.apply(this, arguments) : void 0;
    return St(this).userResized = !0, K(), pe;
  };
  e.onResize = Ge;
  const Xe = function() {
    return Ve(), lu.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = Xe;
  const Ve = () => {
    var pe, Oe, Ae, $e, Be, He, We;
    Y.destroyed = !0, (pe = le == null ? void 0 : le.disconnect) == null || pe.call(le), a ? te() : ce(), S.removeEventListener("lostpointercapture", x), _e(), $(), window.removeEventListener("keydown", w, !0), o.flushers.delete(be), (Oe = L == null ? void 0 : L.destroy) == null || Oe.call(L), (Ae = ve == null ? void 0 : ve.unmount) == null || Ae.call(ve), D && (D.playback.dispose(), D.video.remove(), D.stickerVideo.remove(), n.playback === D && (n.playback = null)), Q.dispose(), n.scene = null, (Be = ($e = n.rasterCache) == null ? void 0 : $e.dispose) == null || Be.call($e), n.rasterCache = null, n.rasterReady = null, E(), N.dispose(), ge && clearTimeout(ge), ge = null, kd.disposeOwner(e), eo(e), Fg(e), Y.raf && cancelAnimationFrame(Y.raf), Y.raf = 0, ((He = n.cutout) == null ? void 0 : He.session) === L && (n.cutout = null), ((We = n.stickers) == null ? void 0 : We.session) === L && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === Ge && (e.onResize = T), e.onExecuted === Me && (e.onExecuted = P), e.onConnectionsChange === Le && (e.onConnectionsChange = De), Z && (se == null ? void 0 : se.callback) === Z && (se.callback = me), Z && (se == null ? void 0 : se.__panoPreviewPatchedCb) === Z && delete se.__panoPreviewPatchedCb, Pe && (he == null ? void 0 : he.callback) === Pe && (he.callback = we), Pe && (he == null ? void 0 : he.__panoPreviewPatchedCb) === Pe && delete he.__panoPreviewPatchedCb, y && de.callback === y && (de.callback = ye), e.onDragOver === ae && (e.onDragOver = M), e.onDragDrop === Ne && (e.onDragDrop = ie), e.onRemoved === Xe && (e.onRemoved = p);
  };
  n.restore = Ve, n.cutout = L && C && !a ? { session: L, model: fe } : null, n.stickers = L && C && a ? { session: L, model: fe } : null, n.dom = {
    widget: F,
    root: m,
    canvas: S,
    requestDraw: K,
    state: Y,
    emptyHintEl: X,
    nodeSurface: n.cutout
  }, lu.register(e), e.graph && $r(e, "attach"), K();
}
function tp(e, t = {}) {
  Pg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function np(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Mg(e) && !r) {
    Md(e);
    return;
  }
  Pg(e).attach(t);
}
function px(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function hx(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let g = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (g = Math.min(g, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(c * g))
  };
}
function mx({
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
          const S = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (h = S == null ? void 0 : S.catch) == null || h.call(S, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const gx = { class: "pano-preview-node-surface" }, yx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Fe(), Re("div", gx, [
      Ue(Jt, {
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
      e.model.viewUnavailable ? (Fe(), Vn(Nl, { key: 0 })) : ht("", !0)
    ]));
  }
}, ta = 140, bx = 180, rp = 40, mc = 10;
function ip(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function op(e, t) {
  const r = ip(e), n = ip(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function sp(e) {
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
  return typeof ((o = hn) == null ? void 0 : o.apiURL) == "function" ? hn.apiURL(i) : i;
}
function to(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return to(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return sp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = to(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : sp(e);
}
function Dg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function vx(e) {
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
      if (op(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (op(o, r)) return t[o];
  return null;
}
function Sx(e) {
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
        const a = to(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function _x(e, t = "erp_image") {
  var g, k, m, h, S, X, $;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((B) => String((B == null ? void 0 : B.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((B, F) => String((B == null ? void 0 : B.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(F))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (m = (k = (g = Qn) == null ? void 0 : g.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : m.call(k, o), a = du(o), l = du(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (S = a == null ? void 0 : a.ui) == null ? void 0 : S.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const B of c)
    if (Array.isArray(B))
      for (const F of B) {
        const Y = to(F);
        if (Y) return Y;
      }
  let d = [];
  try {
    d = typeof ((X = Qn) == null ? void 0 : X.getNodeImageUrls) == "function" ? Qn.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const B of d) {
      const F = to(B);
      if (F) return F;
    }
  if (s) {
    const B = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const F of B) {
      const Y = to(F);
      if (Y) return Y;
    }
  }
  const u = ($ = s == null ? void 0 : s.widgets) == null ? void 0 : $.find((B) => String((B == null ? void 0 : B.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? hn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function gc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function ap(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !Dg(o) || r <= 1 || n <= 1) {
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
    camera: Ba(i, r, n),
    background: { media: o, revision: vx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : gc(t, r, n);
}
function lp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class wx {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Om(() => this.requestDraw()), this.controller = ju({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: jt(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ie(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ie(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
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
        `min-height:${ta}px`,
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
          return ta;
        },
        getHeight() {
          return ta;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Za(iu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ta, Number(o.minHeight || 0)),
            minWidth: Math.max(bx, Number(o.minWidth || 0))
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
      return _d(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ uo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = mx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = Lu(yx, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), Lr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Ih(r), t.addEventListener("pointerdown", (o) => {
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
      px(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Dg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Sa(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = Qn.canvas) != null && n.graph) || this.node.graph === Qn.canvas.graph);
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
      return lp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = jw(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !lp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - mc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - rp - mc);
    return { x: mc, y: rp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), ap(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Em : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = hx(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Sx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = _s(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = _x(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), ap(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, g, k, m, h, S;
    if (((r = Km(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (g = this.root) == null ? void 0 : g.remove) == null || k.call(g);
    } catch {
    }
    try {
      wg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((S = (h = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : h.find) == null ? void 0 : S.call(h, (X) => (X == null ? void 0 : X.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), Lr(this.node).runtime = null;
  }
}
function xx(e, t = {}) {
  if (!e || Lr(e).runtime) return;
  const r = new wx(e, t);
  Lr(e).runtime = r, r.attach();
}
function Lg(e, t, r) {
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
function Nd(e) {
  return !!(e != null && e.prototype);
}
function ms(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function kx(e, t = {}) {
  Nd(e) || xx(e, {
    ...t,
    onOpen: ms(e, t.onOpen)
  });
}
function Mx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Nd(e)) {
    np(e, {
      ...n,
      onOpen: ms(e, t.onOpen)
    });
    return;
  }
  Lg(e, "stickers_node_preview", (i) => {
    np(i, {
      ...n,
      onOpen: ms(i, t.onOpen)
    });
  });
}
function Px(e, t = {}) {
  if (!Nd(e)) {
    tp(e, {
      ...t,
      onOpen: ms(e, t.onOpen)
    });
    return;
  }
  Lg(e, "cutout_preview", (r) => {
    tp(r, {
      ...t,
      onOpen: ms(r, t.onOpen)
    });
  });
}
const Pn = {
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
}, Er = "pen";
function cp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Nx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), Ax = new Set(Object.values(dt));
function Cx({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
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
      const S = l;
      l = /* @__PURE__ */ new Set(), (S.size || n()) && f(() => r(m, S));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && g();
  }
  return {
    requestDraw(m) {
      if (!Ax.has(m)) throw new Error(`Unknown draw reason: ${m}`);
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
const Ix = { class: "pano-floating-right" }, Ex = {
  key: 0,
  class: "pano-floating-space"
}, Ox = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Fx = ["data-settled"], Tx = ["data-ready", "data-settled"], Dx = ["aria-label", "data-tip"], Lx = {
  key: 1,
  class: "pano-camera-preview-label"
}, Rx = {
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
    return (t, r) => (Fe(), Re(tt, null, [
      ke("div", Ix, [
        e.space ? Vr((Fe(), Re("div", Ex, [
          ke("div", Ox, [
            (Fe(!0), Re(tt, null, Nt(e.space.modes, (n) => (Fe(), Vn(Jt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Ue(Jt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Pi, e.space.visible]
        ]) : ht("", !0),
        (Fe(!0), Re(tt, null, Nt(e.buttons, (n) => (Fe(), Vn(Jt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Vr(ke("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ke("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = ke("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            ke("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Fe(), Re("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ue(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Dx)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Fe(), Re("div", Lx, it(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, Tx)
      ], 8, Fx), [
        [Pi, e.preview.visible]
      ])
    ], 64));
  }
}, Vx = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, $x = ["y2", "transform"], zx = ["transform"], jx = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Vr((Fe(), Re("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Fe(), Re("svg", Vx, [
        o[1] || (o[1] = ke("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Fe(!0), Re(tt, null, Nt(nt(r), (s) => (Fe(), Re("line", {
          key: s,
          class: gt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, $x))), 128)),
        ke("g", { transform: n.value }, [...o[0] || (o[0] = [
          ke("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, zx),
        o[2] || (o[2] = ke("circle", {
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
}, Hx = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ue(pg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ue(Jt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ue(jx, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Gx = ["aria-label"], Wx = { class: "pano-canvas-confirm-title" }, Kx = { class: "pano-canvas-confirm-text" }, Ux = { class: "pano-canvas-confirm-actions" }, Bx = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Yx = {
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
      var S;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        u.preventDefault(), (S = g == null ? void 0 : g.focus) == null || S.call(g);
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
        i = document.activeElement, fl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), vs(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Fe(), Re("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(d, ["self"])
    }, [
      ke("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        ke("div", Wx, it(e.model.title), 1),
        ke("div", Kx, it(e.model.text), 1),
        ke("div", Ux, [
          f[0] || (f[0] = ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ke("button", Bx, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Gx)
    ], 512)) : ht("", !0);
  }
}, qx = ["data-paint-pane"], Xx = ["hidden"], Jx = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Zx = ["aria-pressed", "disabled"], Qx = ["hidden"], ek = { class: "pano-paint-color-pop-head" }, tk = { class: "pano-paint-color-field" }, nk = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, rk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, ik = { class: "pano-paint-color-field" }, ok = { class: "pano-paint-alpha-wrap" }, sk = ["value"], ak = { "data-paint-alpha-value": "" }, lk = ["hidden"], ck = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, uk = ["data-paint-history-index", "aria-label", "disabled"], dk = ["data-paint-footer"], fk = ["data-paint-group"], pk = ["hidden"], hk = ["value", "disabled"], mk = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, gk = ["hidden"], yk = {
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
    return (n, i) => (Fe(), Re("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Fe(!0), Re(tt, null, Nt(e.panes, (o) => {
        var s;
        return Fe(), Re("div", {
          key: o.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Fe(), Re("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Fe(!0), Re(tt, null, Nt(e.paintSwatches, (a) => (Fe(), Re("button", {
              key: a.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: Et(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Jx))), 128)),
            ke("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Zx),
            ke("div", {
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
              ke("div", ek, [
                ke("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = ke("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ke("div", tk, [
                ke("div", nk, [
                  ke("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ke("div", rk, [
                  ke("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ke("label", ik, [
                i[1] || (i[1] = ke("span", null, "Opacity", -1)),
                ke("div", ok, [
                  ke("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, sk),
                  ke("span", ak, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ke("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ke("div", ck, [
                  (Fe(!0), Re(tt, null, Nt(e.state.historyEntries || [], (a) => (Fe(), Re("button", {
                    key: a.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: Et(r(a.color))
                  }, null, 14, uk))), 128))
                ])
              ], 8, lk)
            ], 12, Qx)
          ], 10, Xx)) : ht("", !0),
          ke("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            ke("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Fe(!0), Re(tt, null, Nt(o.tools, (a) => {
                var l;
                return Fe(), Vn(Jt, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, fk),
            ke("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ke("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, hk),
              ke("span", mk, it(e.state.sizeText || "10"), 1)
            ], 10, pk),
            ke("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Ue(Jt, {
                icon: nt(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, gk)
          ], 8, dk)
        ], 10, qx);
      }), 128))
    ], 2));
  }
}, bk = {
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
    return t({ getRefs: o }), (s, a) => (Fe(), Re(tt, null, [
      ke("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ke("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ke("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, vk = ["aria-label"], Sk = ["data-tip", "aria-pressed"], _k = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = ut(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Fe(), Re("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Et({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Fe(!0), Re(tt, null, Nt(e.buttons, (o) => (Fe(), Re("button", Ir({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), it(o.label), 17, Sk))), 128))
    ], 12, vk));
  }
}, wk = {
  key: 0,
  class: "pano-cutout-menu"
}, xk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, kk = ["data-aspect"], Mk = ["data-action", "aria-label", "data-tip", "disabled"], Pk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Fe(!0), Re(tt, null, Nt(e.model.items || [], (n) => (Fe(), Re(tt, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Fe(), Re("div", wk, [
          ke("button", xk, [
            Ue(Vt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          ke("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Fe(!0), Re(tt, null, Nt(n.choices || [], (i) => (Fe(), Re("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, it(i.label), 11, kk))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Fe(), Vn(_k, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Fe(), Re("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Ue(Vt, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, Mk))
      ], 64))), 128))
    ], 4));
  }
}, Nk = {
  key: 0,
  class: "pano-easing"
}, Ak = { class: "pano-section-title" }, Ck = { class: "pano-easing-range" }, Ik = { class: "pano-easing-modes" }, Ek = ["aria-pressed", "onClick"], Ok = ["viewBox"], Fk = ["x", "y"], Tk = ["x1", "y1", "x2", "y2"], Dk = ["d"], Lk = ["x1", "y1", "x2", "y2"], Rk = ["x1", "y1", "x2", "y2"], Vk = ["cx", "cy"], $k = ["cx", "cy"], zk = { class: "pano-easing-note" }, Nr = 132, hi = 14, jk = {
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
    }), a = (k) => hi + k * Nr, l = (k) => hi + (1 - k) * Nr, c = ut(() => {
      var X;
      if (((X = r.model) == null ? void 0 : X.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [k, m, h, S] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(k)} ${l(m)} ${a(h)} ${l(S)} ${a(1)} ${l(1)}`;
    }), d = ut(() => s.value ? s.value.map((k) => k.toFixed(2)).join(", ") : "");
    function u(k) {
      var m;
      return JSON.stringify(k.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(k, m) {
      n("timeline", { type: "easing", easing: k, commit: m });
    }
    function g(k, m) {
      var B;
      if (k.button !== 0 || !s.value) return;
      const h = k.currentTarget;
      (B = h.setPointerCapture) == null || B.call(h, k.pointerId);
      let S = null;
      const X = (F) => {
        const Y = o.value.getBoundingClientRect(), H = Y.width / (Nr + hi * 2), K = ((F.clientX - Y.left) / H - hi) / Nr, Q = 1 - ((F.clientY - Y.top) / H - hi) / Nr;
        S = [...S || s.value], S[m] = Math.round(Math.min(1, Math.max(0, K)) * 100) / 100, S[m + 1] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, f(S, !1);
      }, $ = () => {
        h.removeEventListener("pointermove", X), h.removeEventListener("pointerup", $), h.removeEventListener("pointercancel", $), S && f(S, !0);
      };
      h.addEventListener("pointermove", X), h.addEventListener("pointerup", $), h.addEventListener("pointercancel", $);
    }
    return (k, m) => e.model ? (Fe(), Re("div", Nk, [
      ke("div", Ak, [
        m[2] || (m[2] = ke("span", null, "Easing", -1)),
        ke("span", Ck, it(e.model.label), 1)
      ]),
      ke("div", Ik, [
        (Fe(), Re(tt, null, Nt(i, (h) => ke("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (S) => f(h.easing, !0)
        }, it(h.label), 9, Ek)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Fe(), Re("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Nr + hi * 2} ${Nr + hi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        ke("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Nr,
          height: Nr
        }, null, 8, Fk),
        ke("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, Tk),
        ke("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, Dk),
        s.value ? (Fe(), Re(tt, { key: 0 }, [
          ke("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, Lk),
          ke("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, Rk),
          ke("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (h) => g(h, 0))
          }, null, 40, Vk),
          ke("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (h) => g(h, 2))
          }, null, 40, $k)
        ], 64)) : ht("", !0)
      ], 8, Ok)) : ht("", !0),
      ke("div", zk, [
        e.model.mixed ? (Fe(), Re(tt, { key: 0 }, [
          Do("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Fe(), Re(tt, { key: 1 }, [
          Do("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Fe(), Re(tt, { key: 2 }, [
          Do("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Fe(), Re(tt, { key: 3 }, [
          Do("cubic-bezier(" + it(d.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, Hk = {
  class: "pano-side",
  "data-side": ""
}, Gk = { class: "pano-side-head" }, Wk = { class: "pano-side-title" }, Kk = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, Uk = {
  key: 0,
  class: "pano-side-scroll"
}, Bk = { class: "pano-inspector" }, Yk = { class: "pano-ui-row pano-coverage-row" }, qk = ["data-selected"], Xk = ["aria-pressed", "disabled"], Jk = ["aria-pressed", "disabled"], Zk = {
  key: 0,
  class: "pano-section-title"
}, Qk = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, eM = {
  class: "pano-picker",
  "data-picker": "selection"
}, tM = ["disabled"], nM = { class: "pano-picker-label" }, rM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, iM = ["hidden"], oM = ["data-selection-id"], sM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, aM = {
  key: 2,
  class: "pano-state-actions"
}, lM = ["disabled"], cM = ["data-key"], uM = { class: "pano-field-group-values" }, dM = ["title", "onPointerdown"], fM = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], pM = ["data-key"], hM = ["min", "max", "step", "value", "disabled", "data-param-key"], mM = ["min", "max", "step", "value", "disabled", "data-param-key"], gM = ["open"], yM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, bM = { class: "pano-ui-settings-body" }, vM = { class: "pano-ui-row" }, SM = ["data-selected"], _M = ["aria-pressed"], wM = ["aria-pressed"], xM = { class: "pano-ui-row" }, kM = ["data-selected"], MM = ["aria-pressed"], PM = ["aria-pressed"], NM = {
  key: 1,
  class: "pano-side-footer"
}, AM = ["data-action"], CM = {
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
        const $ = k + (X.clientX - g) * d.drag * (X.shiftKey ? 0.1 : 1);
        u.value = String(Number($.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, S = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", S), f.removeEventListener("pointercancel", S), f.removeEventListener("lostpointercapture", S), m ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", S), f.addEventListener("pointercancel", S), f.addEventListener("lostpointercapture", S);
    }
    return (c, d) => {
      var u, f, g, k, m;
      return Fe(), Re("div", Hk, [
        ke("div", Gk, [
          ke("div", Wk, [
            ke("span", Kk, [
              Ue(Vt, {
                icon: nt(ze).globe
              }, null, 8, ["icon"])
            ]),
            ke("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = ke("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = ke("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Fe(), Re("div", Uk, [
          ke("div", Bk, [
            d[9] || (d[9] = ke("div", { class: "pano-section-title" }, [
              ke("span", null, "Scene")
            ], -1)),
            ke("div", Yk, [
              d[2] || (d[2] = ke("label", null, "Coverage", -1)),
              ke("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, Xk),
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, Jk)
              ], 8, qk)
            ]),
            e.model.transformTitle !== !1 ? (Fe(), Re("div", Zk, [...d[3] || (d[3] = [
              ke("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Fe(), Re("div", Qk, [
              ke("label", null, it(e.model.selectionPicker.label), 1),
              ke("div", eM, [
                ke("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ke("span", nM, [
                    e.model.selectionPicker.currentIcon ? (Fe(), Re("span", rM, [
                      Ue(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    ke("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = ke("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, tM),
                ke("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Fe(!0), Re(tt, null, Nt(e.model.selectionPicker.items || [], (h) => (Fe(), Re("button", {
                    key: h.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: h.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": h.id
                  }, [
                    h.icon ? (Fe(), Re("span", sM, [
                      Ue(Vt, {
                        icon: h.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    ke("span", null, it(h.label), 1)
                  ], 10, oM))), 128))
                ], 8, iM)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Fe(), Re("div", aM, [
              ke("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ue(Vt, {
                  icon: nt(ze).copy
                }, null, 8, ["icon"]),
                ke("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, lM)
            ])) : ht("", !0),
            ke("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Fe(!0), Re(tt, { key: 0 }, Nt(e.model.notes, (h) => (Fe(), Re("div", {
                key: h,
                class: "pano-param-note"
              }, it(h), 1))), 128)) : (Fe(!0), Re(tt, { key: 1 }, Nt(e.model.rows || [], (h) => (Fe(), Re(tt, {
                key: h.key
              }, [
                h.grouped ? (Fe(), Re("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": h.key
                }, [
                  ke("label", null, it(h.label), 1),
                  ke("div", uM, [
                    (Fe(!0), Re(tt, null, Nt(h.fields, (S) => (Fe(), Re("div", {
                      key: S.key,
                      class: "pano-axis-field"
                    }, [
                      ke("span", {
                        class: gt(["pano-axis", { disabled: s(S, e.model) }]),
                        title: S.label,
                        onPointerdown: (X) => l(X, S)
                      }, it(S.short), 43, dM),
                      ke("input", {
                        ref_for: !0,
                        ref: (X) => {
                          a[S.key] = X;
                        },
                        type: "number",
                        min: S.min,
                        max: S.max,
                        step: S.step,
                        value: S.displayValue,
                        disabled: s(S, e.model),
                        "aria-label": `${h.label} ${S.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": S.key
                      }, null, 8, fM)
                    ]))), 128))
                  ])
                ], 8, cM)) : (Fe(), Re("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": h.key
                }, [
                  ke("label", null, it(h.label), 1),
                  ke("input", {
                    type: "range",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].value,
                    disabled: s(h.fields[0], e.model),
                    style: Et(o(h.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": h.fields[0].key
                  }, null, 12, hM),
                  ke("input", {
                    type: "number",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].displayValue,
                    disabled: s(h.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": h.fields[0].key
                  }, null, 8, mM)
                ], 8, pM))
              ], 64))), 128))
            ], 2),
            Ue(jk, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (h) => n("timeline", h))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Fe(), Re("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ke("summary", null, [
                d[5] || (d[5] = ke("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ke("span", yM, [
                  Ue(Vt, {
                    icon: nt(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ke("div", bM, [
                ke("div", vM, [
                  d[6] || (d[6] = ke("label", null, "Drag X", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, _M),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, wM)
                  ], 8, SM)
                ]),
                ke("div", xM, [
                  d[7] || (d[7] = ke("label", null, "Drag Y", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, MM),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, PM)
                  ], 8, kM)
                ]),
                d[8] || (d[8] = ke("div", { class: "pano-ui-row" }, [
                  ke("span"),
                  ke("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, gM)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Fe(), Re("div", NM, [
          (Fe(!0), Re(tt, null, Nt(e.model.footerButtons, (h) => (Fe(), Re("button", {
            key: h.action,
            class: gt(["pano-btn", { "pano-btn-primary": h.primary === !0 }]),
            type: "button",
            "data-action": h.action
          }, it(h.label), 11, AM))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, IM = { class: "pano-timeline-bar" }, EM = ["aria-label", "data-tip"], OM = ["aria-label", "data-tip"], FM = { class: "pano-timeline-time" }, TM = ["data-tip"], DM = { key: 0 }, LM = ["min", "max", "value"], RM = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, VM = ["max", "value"], $M = ["aria-expanded"], zM = ["inert"], jM = { class: "pano-timeline-name" }, HM = ["aria-pressed", "aria-label", "data-tip", "onClick"], GM = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, WM = ["disabled", "aria-expanded", "aria-label", "onClick"], KM = ["title", "aria-current", "onClick"], UM = ["data-keyed", "aria-label", "onClick"], BM = ["onPointerdown"], YM = ["onPointerdown"], qM = ["onPointerdown"], XM = ["onPointerdown"], JM = ["aria-label", "data-tip", "onPointerdown"], ZM = { key: 0 }, QM = ["onPointerdown"], eP = ["aria-label", "data-tip", "onPointerdown"], tP = { key: 0 }, nP = 10, rP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Pa(0), playing: /* @__PURE__ */ Pa(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Ut(null), o = /* @__PURE__ */ Ut(null), s = /* @__PURE__ */ Ut(1), a = /* @__PURE__ */ Ut(0), l = /* @__PURE__ */ Ut(!1);
    let c = null, d = null, u = null;
    hl(() => {
      c = new ResizeObserver(([L]) => {
        s.value = Math.max(1, L.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([L]) => {
        a.value = L.contentRect.height;
      }), o.value && d.observe(o.value);
    }), vs(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = ut(() => Math.max(1, Number(r.model.span || 1))), g = ut(() => r.playhead.frame.value), k = ut(() => r.playhead.playing.value), m = ut(() => X1(g.value, Number(r.model.fps || 1))), h = ut(() => s.value / f.value), S = (L) => `${L / f.value * 100}%`, X = ut(() => cv(f.value, h.value));
    function $(L) {
      const G = i.value.getBoundingClientRect(), E = Math.floor((L - G.left) / Math.max(1, G.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, E));
    }
    function B(L, G, E) {
      const W = Math.ceil(nP / Math.max(1e-6, h.value)), R = new Map(G.map((J) => [J.frame, J.full]));
      return uv(G.map((J) => J.frame), W).map((J, ue) => ({
        ...J,
        key: `${L}:${ue}`,
        partial: J.frames.some((Se) => !R.get(Se)),
        selected: J.frames.some((Se) => E.includes(Se))
      }));
    }
    const F = ut(() => {
      const L = /* @__PURE__ */ new Map();
      for (const G of r.model.rows || []) {
        L.set(G.id, B(G.id, G.keys, G.selectedFrames));
        for (const E of G.lanes) L.set(E.key, B(E.key, E.frames.map((W) => ({ frame: W, full: !0 })), E.selectedFrames));
      }
      return L;
    });
    function Y(L) {
      const G = L.end === null ? f.value : L.end;
      return { left: S(L.start), width: S(Math.max(0, G - L.start)) };
    }
    function H(L, G) {
      const E = L.clientX, W = Math.max(1e-6, h.value);
      let R = 0;
      G("start", 0, L);
      const J = (Se) => {
        if (Se.pointerId !== L.pointerId) return;
        const ee = Math.round((Se.clientX - E) / W);
        ee !== R && (R = ee, G("move", R, Se));
      }, ue = (Se) => {
        Se.pointerId === L.pointerId && (u(), G("end", R, Se));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", J), window.removeEventListener("pointerup", ue), window.removeEventListener("pointercancel", ue), u = null;
      }, window.addEventListener("pointermove", J), window.addEventListener("pointerup", ue), window.addEventListener("pointercancel", ue);
    }
    function K(L) {
      L.button === 0 && H(L, (G, E, W) => n("action", { type: "seek", frame: $(W.clientX), phase: G }));
    }
    function Q(L, G, E) {
      L.button === 0 && (n("action", { type: "select-row", id: G.id }), H(L, (W, R) => n("action", { type: "clip", id: G.id, mode: E, delta: R, phase: W })));
    }
    function fe(L, G, E, W, R) {
      if (L.button === 0) {
        if (L.shiftKey) {
          n("action", { type: "select-keys", owner: G.id, lane: E, frames: W.frames, additive: !0 });
          return;
        }
        W.frames.every((J) => R.includes(J)) || n("action", { type: "select-keys", owner: G.id, lane: E, frames: W.frames, additive: !1 }), H(L, (J, ue) => n("action", { type: "move-keys", delta: ue, phase: J }));
      }
    }
    const D = ut(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function oe(L, G, E) {
      n("action", G), await fl(), L.target.value = E();
    }
    function ne(L) {
      oe(L, { type: "fps", fps: Number(L.target.value) }, () => D.value);
    }
    function j(L) {
      const G = L.target.value.trim();
      oe(L, { type: "length", length: G ? Number(G) : null }, () => r.model.length ?? "");
    }
    function re(L, G, E) {
      L.button !== 0 || L.target !== L.currentTarget || n("action", { type: "select-keys", owner: G.id, lane: E, frames: [], additive: !1 });
    }
    return (L, G) => Vr((Fe(), Re("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      ke("div", IM, [
        ke("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": k.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": k.value ? "Pause (Space)" : "Play (Space)",
          onClick: G[0] || (G[0] = (E) => n("action", { type: "play" }))
        }, [
          Ue(Vt, {
            icon: k.value ? nt(ze).pause : nt(ze).play
          }, null, 8, ["icon"])
        ], 8, EM),
        e.model.hasAudio ? (Fe(), Re("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: G[1] || (G[1] = (E) => n("action", { type: "mute" }))
        }, [
          Ue(Vt, {
            icon: e.model.muted ? nt(ze).volume_muted : nt(ze).volume2
          }, null, 8, ["icon"])
        ], 8, OM)) : ht("", !0),
        ke("span", FM, it(m.value), 1),
        ke("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Fe(), Re("span", DM, it(D.value), 1)) : (Fe(), Re("input", {
            key: 1,
            type: "number",
            min: nt(Kh),
            max: nt(Bu),
            step: "any",
            value: D.value,
            "aria-label": "Timeline fps",
            onChange: ne
          }, null, 40, LM)),
          G[6] || (G[6] = ke("span", null, "fps", -1))
        ], 8, TM),
        ke("label", RM, [
          G[7] || (G[7] = ke("span", null, "Length", -1)),
          ke("input", {
            type: "number",
            min: "1",
            max: nt(Yu),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: j
          }, null, 40, VM)
        ]),
        ke("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: G[2] || (G[2] = (E) => n("action", { type: "toggle-expanded" }))
        }, [
          G[8] || (G[8] = ke("span", null, "Timeline", -1)),
          Ue(Vt, {
            icon: nt(ze).chevron
          }, null, 8, ["icon"])
        ], 8, $M)
      ]),
      ke("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: Et({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: G[3] || (G[3] = Ct((E) => l.value = !0, ["self"])),
        onTransitionend: G[4] || (G[4] = Ct((E) => l.value = !1, ["self"])),
        onTransitioncancel: G[5] || (G[5] = Ct((E) => l.value = !1, ["self"]))
      }, [
        ke("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          G[9] || (G[9] = ke("div", { class: "pano-timeline-corner" }, null, -1)),
          ke("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: K
          }, [
            (Fe(!0), Re(tt, null, Nt(X.value, (E) => (Fe(), Re("span", {
              key: E,
              class: "pano-timeline-tick",
              style: Et({ left: S(E) })
            }, it(E), 5))), 128)),
            ke("span", {
              class: "pano-timeline-playhead",
              style: Et({ left: S(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Fe(!0), Re(tt, null, Nt(e.model.rows || [], (E) => (Fe(), Re(tt, {
            key: E.id
          }, [
            ke("div", {
              class: gt(["pano-timeline-head", { selected: E.selected, "is-hidden": !E.visible }])
            }, [
              ke("div", jM, [
                E.hideable ? (Fe(), Re("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": E.visible ? "true" : "false",
                  "aria-label": `${E.label} visible`,
                  "data-tip": E.visible ? "Hide" : "Show",
                  onClick: Ct((W) => n("action", { type: "toggle-visible", id: E.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: E.visible ? nt(ze).eye : nt(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, HM)) : (Fe(), Re("span", GM)),
                ke("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !E.keyable,
                  "aria-expanded": E.open ? "true" : "false",
                  "aria-label": E.open ? `Hide ${E.label} parameters` : `Show ${E.label} parameters`,
                  onClick: Ct((W) => n("action", { type: "toggle-row", id: E.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: nt(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, WM),
                ke("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: E.label,
                  "aria-current": E.selected ? "true" : void 0,
                  onClick: (W) => n("action", { type: "select-row", id: E.id })
                }, [
                  Ue(Vt, {
                    icon: E.icon
                  }, null, 8, ["icon"]),
                  ke("span", null, it(E.label), 1)
                ], 8, KM),
                E.keyable ? (Fe(), Re("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: nt(oc)(E.keys, g.value) }]),
                  type: "button",
                  "data-keyed": nt(oc)(E.keys, g.value) ? "true" : "false",
                  "aria-label": nt(oc)(E.keys, g.value) ? `Every ${E.label} parameter has a keyframe here; update them` : `Add keyframes for every ${E.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((W) => n("action", { type: "key-row", owner: E.id }), ["stop"])
                }, [
                  Ue(Vt, {
                    icon: nt(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, UM)) : ht("", !0)
              ]),
              E.open ? (Fe(!0), Re(tt, { key: 0 }, Nt(E.lanes, (W) => (Fe(), Re("div", {
                key: W.key,
                class: "pano-timeline-lane-head"
              }, it(W.label), 1))), 128)) : ht("", !0)
            ], 2),
            ke("div", {
              class: gt(["pano-timeline-track", { selected: E.selected }])
            }, [
              ke("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (W) => re(W, E, null)
              }, [
                E.clip ? (Fe(), Re("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: E.clip.end === null }]),
                  style: Et(Y(E.clip)),
                  onPointerdown: Ct((W) => Q(W, E, "move"), ["stop"])
                }, [
                  ke("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((W) => Q(W, E, "start"), ["stop"])
                  }, null, 40, qM),
                  ke("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((W) => Q(W, E, "end"), ["stop"])
                  }, null, 40, XM)
                ], 46, YM)) : ht("", !0),
                (Fe(!0), Re(tt, null, Nt(F.value.get(E.id), (W) => (Fe(), Re("button", {
                  key: W.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: W.selected, cluster: W.frames.length > 1, partial: W.partial }]),
                  style: Et({ left: S(W.frame + 0.5) }),
                  "aria-label": `${E.label}: ${W.frames.length > 1 ? `${W.frames.length} keyframes` : `keyframe at frame ${W.frames[0]}`}`,
                  "data-tip": W.frames.length > 1 ? `${W.frames.length} keyframes` : `Frame ${W.frames[0]}`,
                  onPointerdown: Ct((R) => fe(R, E, null, W, E.selectedFrames), ["stop"])
                }, [
                  W.frames.length > 1 ? (Fe(), Re("span", ZM, it(W.frames.length), 1)) : ht("", !0)
                ], 46, JM))), 128))
              ], 40, BM),
              E.open ? (Fe(!0), Re(tt, { key: 0 }, Nt(E.lanes, (W) => (Fe(), Re("div", {
                key: W.key,
                class: "pano-timeline-lane",
                onPointerdown: (R) => re(R, E, W.lane)
              }, [
                (Fe(!0), Re(tt, null, Nt(F.value.get(W.key), (R) => (Fe(), Re("button", {
                  key: R.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: R.selected, cluster: R.frames.length > 1 }]),
                  style: Et({ left: S(R.frame + 0.5) }),
                  "aria-label": `${W.label}: ${R.frames.length > 1 ? `${R.frames.length} keyframes` : `keyframe at frame ${R.frames[0]}`}`,
                  "data-tip": R.frames.length > 1 ? `${R.frames.length} keyframes` : `Frame ${R.frames[0]}`,
                  onPointerdown: Ct((J) => fe(J, E, W.lane, R, W.selectedFrames), ["stop"])
                }, [
                  R.frames.length > 1 ? (Fe(), Re("span", tP, it(R.frames.length), 1)) : ht("", !0)
                ], 46, eP))), 128))
              ], 40, QM))), 128)) : ht("", !0),
              ke("span", {
                class: "pano-timeline-playhead",
                style: Et({ left: S(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, zM)
    ], 2)), [
      [Pi, e.model.visible]
    ]);
  }
}, iP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, oP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, sP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Fe(), Re("div", oP, [
      (Fe(!0), Re(tt, null, Nt(e.buttons, (n) => Vr((Fe(), Vn(Jt, {
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
}, aP = ["data-video-ready"], lP = { class: "pano-video-transport-shell" }, cP = { class: "pano-video-controls-left" }, uP = { class: "pano-video-filmstrip" }, dP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, fP = ["src", "onLoad"], pP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, hP = ["max", "value", "disabled"], mP = { class: "pano-video-controls-right" }, gP = ["data-has-audio"], yP = { class: "pano-video-volume-pop" }, bP = ["value", "disabled"], vP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), n = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), i = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? ze.pause : ze.play;
    }), o = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = ut(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = ut(() => {
      var F, Y;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = ut(() => {
      var F, Y, H;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? ze.volume : ((Y = t.state) == null ? void 0 : Y.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), d = ut(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), u = ut(() => ({ left: `${d.value}%` })), f = ut(() => {
      var K, Q;
      const F = (K = t.state) == null ? void 0 : K.volumePct, Y = Number(((Q = t.state) == null ? void 0 : Q.volume) ?? 1) * 100, H = Number(F ?? Y ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), g = ut(() => {
      var H, K;
      const Y = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((K = t.state) == null ? void 0 : K.durationLabel) || "0:00")
      ].reduce((Q, fe) => Math.max(Q, fe.length), 4);
      return `${Math.max(4, Y)}ch`;
    }), k = ut(() => ({ "--pano-video-time-ch": g.value })), m = ut(() => {
      var H, K;
      const F = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const Y = Math.max(7, Number(((K = t.state) == null ? void 0 : K.thumbnailCount) || 9));
      return Array.from({ length: Y }, (Q, fe) => ({
        id: `placeholder-${fe}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Ut(/* @__PURE__ */ new Set()), S = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), X = (F) => h.value.has(S(F)), $ = (F) => {
      const Y = new Set(h.value);
      Y.add(S(F)), h.value = Y;
    };
    wi(m, (F) => {
      const Y = new Set(F.map(S)), H = /* @__PURE__ */ new Set();
      for (const K of h.value)
        Y.has(K) && H.add(K);
      h.value = H;
    }, { immediate: !0 });
    const B = ut(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, Y) => (Fe(), Re("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Et(B.value)
    }, [
      Y[1] || (Y[1] = ke("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y[2] || (Y[2] = ke("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ke("div", lP, [
        ke("div", cP, [
          Ue(Jt, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-time pano-video-time-start",
            style: Et(k.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ke("div", uP, [
          ke("div", dP, [
            (Fe(!0), Re(tt, null, Nt(m.value, (H) => (Fe(), Re("div", {
              key: S(H),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && X(H)
              }])
            }, [
              H.src ? (Fe(), Re("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (K) => $(H)
              }, null, 40, fP)) : (Fe(), Re("span", pP))
            ], 2))), 128))
          ]),
          ke("div", {
            class: "pano-video-playhead",
            style: Et(u.value),
            "aria-hidden": "true"
          }, [...Y[0] || (Y[0] = [
            ke("span", { class: "pano-video-playhead-line" }, null, -1),
            ke("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ke("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, hP)
        ]),
        ke("div", mP, [
          ke("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(k.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          Ue(Jt, {
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
          ke("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ke("div", yP, [
              ke("input", {
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
              }, null, 12, bP)
            ]),
            Ue(Jt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, gP)
        ])
      ])
    ], 14, aP));
  }
}, SP = { class: "pano-floating-top" }, _P = ["data-selected", "data-view-count"], wP = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], xP = { class: "label" }, kP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Fe(), Re("div", SP, [
        ke("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Fe(!0), Re(tt, null, Nt(e.buttons, (i) => Vr((Fe(), Re("button", {
            key: i.key,
            class: gt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Ue(Vt, {
              icon: i.icon
            }, null, 8, ["icon"]),
            ke("span", xP, it(i.label), 1)
          ], 10, wP)), [
            [Pi, i.visible !== !1]
          ])), 128))
        ], 8, _P)
      ]);
    };
  }
};
function Rg(e = "stickers") {
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
const MP = ["aria-label"], PP = { class: "pano-stage-column" }, NP = { class: "pano-stage-wrap" }, AP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, CP = {
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
      var D, oe;
      return ((oe = (D = d.value) == null ? void 0 : D.getRefs) == null ? void 0 : oe.call(D)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(D) {
      var oe, ne;
      return ((ne = (oe = c.value) == null ? void 0 : oe.open) == null ? void 0 : ne.call(oe, D)) === !0;
    }
    function g(D) {
      i("image-file-selected", D);
    }
    function k(D) {
      i("image-file-cancelled", D);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const m = ut(() => n.readOnly === !0), h = ut(() => n.shellPreset || Rg(n.type)), S = ut(() => {
      var oe, ne, j;
      const D = String((((oe = n.uiState) == null ? void 0 : oe.stageStatus) === "failed" ? (ne = n.uiState) == null ? void 0 : ne.stageStatusDetail : (j = n.uiState) == null ? void 0 : j.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), X = ut(() => {
      var D, oe, ne;
      return ((D = n.uiState) == null ? void 0 : D.stageStatus) === "failed" || (oe = n.uiState) != null && oe.stageWarningDetail ? S.value : (ne = n.uiState) == null ? void 0 : ne.stageNotice;
    }), $ = ut(() => {
      var oe;
      const D = Array.isArray((oe = h.value) == null ? void 0 : oe.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return m.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), D;
    });
    function B() {
      const D = l.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((oe) => oe instanceof HTMLElement ? !oe.hidden && oe.tabIndex >= 0 && oe.offsetParent !== null : !1) : [];
    }
    function F() {
      var ne;
      const oe = B()[0] || l.value;
      (ne = oe == null ? void 0 : oe.focus) == null || ne.call(oe);
    }
    function Y() {
      var D;
      a != null && a.isConnected && ((D = a.focus) == null || D.call(a)), a = null;
    }
    function H(D) {
      var oe, ne, j, re;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const L = B();
          if (!L.length) {
            D.preventDefault(), (ne = (oe = l.value) == null ? void 0 : oe.focus) == null || ne.call(oe);
            return;
          }
          const G = L[0], E = L[L.length - 1], W = document.activeElement;
          if (D.shiftKey) {
            (W === G || W === l.value || !((j = l.value) != null && j.contains(W))) && (D.preventDefault(), E.focus());
            return;
          }
          (W === E || !((re = l.value) != null && re.contains(W))) && (D.preventDefault(), G.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function K() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function Q() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function fe(D) {
      document.removeEventListener("keydown", H), D ? (a || (a = document.activeElement), K(), document.addEventListener("keydown", H), fl(() => {
        F();
      })) : (Q(), Y());
    }
    return hl(() => {
      fe(n.open);
    }), vs(() => {
      Q(), document.removeEventListener("keydown", H), Y();
    }), wi(() => n.open, (D) => {
      fe(D);
    }), (D, oe) => e.open ? (Fe(), Re("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: oe[2] || (oe[2] = Ct((ne) => i("close"), ["self"]))
    }, [
      ke("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ke("div", PP, [
          ke("div", NP, [
            oe[3] || (oe[3] = ke("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            oe[4] || (oe[4] = ke("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            oe[5] || (oe[5] = ke("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Fe(), Re("div", AP, it(X.value), 1)) : ht("", !0),
            oe[6] || (oe[6] = ke("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              ke("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ue(bk, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Ue(hg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: g,
              onFileCancelled: k
            }, null, 512),
            m.value ? ht("", !0) : (Fe(), Re(tt, { key: 1 }, [
              Ue(sP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ue(Hx, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ue(yk, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ue(vP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ue(kP, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ue(Rx, {
              buttons: e.uiState.floatingButtons || $.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Ue(Pk, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ue(iP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ue(Yx, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ue(rP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: oe[0] || (oe[0] = (ne) => i("timeline", ne))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Fe(), Vn(CM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: oe[1] || (oe[1] = (ne) => i("timeline", ne))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, MP)
    ])) : ht("", !0);
  }
}, Jn = "loading", gs = "ready", Wn = "failed";
function Vg(e, t = "") {
  return e && (e.__panoLoadState = Jn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function $g(e, t = "") {
  return e && (e.__panoLoadState = gs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function zg(e, t = "") {
  return e && (e.__panoLoadState = Wn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function fu(e, t) {
  return e ? e.__panoLoadState === Wn ? Wn : typeof t == "function" && t(e) ? gs : Jn : gs;
}
function pu(e) {
  return fu(e) === Wn;
}
function IP({ presented: e, background: t = gs, stickers: r = [] } = {}) {
  if (!e) return { status: Jn, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === Jn, o = n.includes(Jn);
  if (i && o) return { status: Jn, detail: "mixed" };
  if (i) return { status: Jn, detail: "background" };
  if (o) return { status: Jn, detail: "stickers" };
  const s = t === Wn, a = n.includes(Wn);
  return s && a ? { status: Wn, detail: "mixed" } : s ? { status: Wn, detail: "background" } : a ? { status: Wn, detail: "stickers" } : { status: gs, detail: "" };
}
const EP = "state_json", OP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Ad = "sticker_image_1", FP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), jg = 0.01, TP = "external_image", lo = "pano_sticker_input_images", Hg = "pano_sticker_input_videos", Gg = "pano_sticker_input_frames", Wg = "pano_sticker_input_video_meta", DP = !0, Cl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Sr = Math.PI / 180, Ci = 180 / Math.PI, hu = 1, Kg = "rgb(255, 221, 87)", LP = "rgb(228, 228, 231)", RP = "rgb(180, 150, 60)", VP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, $P = 64, up = 40, yc = 16, zP = 0.45, dp = 180, jP = 160, nl = 24, HP = 4, GP = 4;
function bc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function WP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function KP(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function UP(e) {
  return e * e * e;
}
function Il(e, t, r) {
  return { x: e, y: t, z: r };
}
function fp(e, t) {
  return Il(e.x + t.x, e.y + t.y, e.z + t.z);
}
function pp(e, t) {
  return Il(e.x * t, e.y * t, e.z * t);
}
function vc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function BP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Il(e.x / t, e.y / t, e.z / t);
}
function na(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * Ci),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Ci, -90, 90)
  };
}
function Jr(e, t) {
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
  const l = Ie((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Gn(e, t, r) {
  return e + (t - e) * r;
}
function hr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function YP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ra = { fillStyle: "", url: "" };
function qP(e, t, r) {
  if (ra.url && ra.fillStyle === String(e || ""))
    return ra.url;
  const n = YP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${nl}" height="${nl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ra = { fillStyle: String(e || ""), url: n }, n;
}
function rl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function Tn(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function dn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function XP(e) {
  return Cl.some((t) => rl(e, t.color));
}
function mu(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ie(Number(t), 0, 1), o = Ie(Number(r), 0, 1);
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
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function no(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function JP(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function hp(e) {
  const { paintCount: t, maskCount: r } = JP(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ug(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, g = Number(s.rot_deg || 0) * Sr, k = Math.max(0.01, Number(s.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(u + m, f), e.rotate(g), e.scale(k, k), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Bi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ia(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function ZP(e, t) {
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
function QP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function eN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function tN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const Bg = "pano_suite.ui_settings.v1", Yg = "pano_suite.node_grid_visibility.v1";
let Wi = null, ur = null;
function Ma(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function nN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Bg)) || "").trim();
    if (!t) return Wi ? Ma(Wi) : null;
    const r = JSON.parse(t), n = Ma(r);
    return Wi = n, n;
  } catch {
    return Wi ? Ma(Wi) : null;
  }
}
function rN(e) {
  var r;
  const t = Ma(e);
  Wi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(Bg, JSON.stringify(t));
  } catch {
  }
  return t;
}
function qg() {
  var e;
  if (ur && typeof ur == "object")
    return ur;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Yg)) || "").trim();
    if (!t)
      return ur = {}, ur;
    const r = JSON.parse(t);
    return ur = r && typeof r == "object" ? r : {}, ur;
  } catch {
    return ur = {}, ur;
  }
}
function iN(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = qg()[r];
  return typeof i == "boolean" ? i : !!t;
}
function oN(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = qg();
  n[r] = !!t, ur = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Yg, JSON.stringify(n));
  } catch {
  }
}
function sN(e, t) {
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
const yu = 0.5, Xg = "PANO_SCENE";
function aN(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Wr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function lN(e, t, r) {
  return e * r / t;
}
function cN(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: En(e("pano_upstream_coverage")[0])
  };
}
const uN = "bg_media is not used";
function dN(e, t) {
  return e === Xg && t === null;
}
function fN(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Tr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function mp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * yu };
}
function pN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = xs(s, r), c = (m) => m.visible ? n(m) : null, d = Am(s, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => mp(m, t)), u = Im(s, r, s.stickers, { media: c, evaluated: l }).map((m) => mp(m, t)), f = [], g = Ua(Tr(a, "pano_scene_files"), Tr(a, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: ad(g, l.scene), value: l.scene, opacity: yu });
  const k = Ua(Tr(a, "pano_sticker_files"), Tr(a, "pano_sticker_meta"), o);
  if (k) {
    const m = Sm(k, s, l);
    f.push({ slot: `${t}:sticker`, urls: _m(k, s), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * yu });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ei = /* @__PURE__ */ new Map(), hN = 12;
function mN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ei.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ei.delete(t), ei.set(t, r), r);
}
function gN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ei.delete(r), ei.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ei.size > hN; ) {
      const i = ei.keys().next().value;
      if (!i) break;
      ei.delete(i);
    }
}
function yN(e) {
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
    state: S,
    stateV2: X,
    stillCanvas: $,
    studio: B,
    timelinePlayhead: F,
    type: Y,
    uiState: H,
    videoEl: K
  } = e;
  let Q, fe, D, oe, ne, j;
  const re = {
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
  }, L = 9, G = [];
  let E = 0;
  const W = () => {
    var Ve, je;
    const U = (Ve = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : Ve.call(h), ae = (je = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : je.call(i), Ne = Math.max(0, Number((U == null ? void 0 : U.width) || 0)), _e = ae ? Math.max(0, Number(ae.width || 0)) : 0, Le = _e > 0 ? _e + 14 + 12 : 72, Ge = Math.max(280, Math.floor(Ne - Le * 2)), Xe = r.fullscreen ? Math.min(1200, Ge) : Ge;
    H.videoTransport.shellMaxWidthPx = Xe;
  }, R = () => {
    E || (E = m.requestFrame(() => {
      E = 0, W();
    }));
  }, J = (U) => {
    if (!(U instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(U.audioTracks) && U.audioTracks.length > 0 || U.audioTracks && typeof U.audioTracks.length == "number" && U.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof U.mozHasAudio == "boolean") return U.mozHasAudio;
    } catch {
    }
    try {
      if (Number(U.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!H.videoTransport.hasAudio;
  }, ue = typeof ResizeObserver < "u" ? new ResizeObserver(() => R()) : null;
  ue == null || ue.observe(h), i && (ue == null || ue.observe(i)), G.push(() => {
    var U;
    E && (m.cancelFrame(E), E = 0), (U = ue == null ? void 0 : ue.disconnect) == null || U.call(ue);
  }), R();
  const Se = () => {
    re.thumbnailJobId += 1, re.thumbnailSrc = "", H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = L;
  }, ee = async (U, ae, Ne) => {
    const _e = String(U || "").trim();
    if (!_e) {
      Se();
      return;
    }
    const Me = mN(_e);
    if (Me) {
      re.thumbnailSrc = _e, H.videoTransport.thumbnails = Me.thumbnails, H.videoTransport.thumbnailCount = Me.thumbnailCount;
      return;
    }
    const De = ++re.thumbnailJobId;
    re.thumbnailSrc = _e, H.videoTransport.thumbnails = [], H.videoTransport.thumbnailCount = L;
    const Le = _s(document, "editor.thumbnails");
    Le.preload = "auto", Le.muted = !0, Le.playsInline = !0, Le.crossOrigin = "anonymous";
    const Ge = nn({ label: "editor.thumbnail" });
    try {
      const Xe = await new Promise((We) => {
        let ft = !1;
        const yt = (Lt) => {
          ft || (ft = !0, We(Lt));
        };
        Le.addEventListener("loadedmetadata", () => yt(!0), { once: !0 }), Le.addEventListener("canplay", () => yt(!0), { once: !0 }), Le.addEventListener("error", () => yt(!1), { once: !0 }), Le.src = _e, Le.load();
      });
      if (re.thumbnailJobId !== De) return;
      const Ve = Number(Le.videoWidth || 0), je = Number(Le.videoHeight || 0);
      if (!Xe || Ve < 1 || je < 1) {
        re.thumbnailFailedSrcs.add(_e);
        return;
      }
      const pe = Math.max(0, Number(Le.duration || ae || 0)), Oe = 46, Ae = Math.max(72, Math.round(Ve / je * Oe));
      Ge.width = Ae, Ge.height = Oe;
      const $e = Ge.getContext("2d");
      if (!$e) return;
      const Be = [], He = (We) => new Promise((ft) => {
        let yt = !1;
        const Lt = () => {
          yt || (yt = !0, ft());
        };
        Le.addEventListener("seeked", Lt, { once: !0 }), Le.addEventListener("error", Lt, { once: !0 });
        try {
          Le.currentTime = We;
        } catch {
          Lt();
        }
      });
      for (let We = 0; We < L; We += 1) {
        if (re.thumbnailJobId !== De) return;
        const ft = L <= 1 ? 0 : We / (L - 1), yt = pe > 0 ? Math.max(0, Math.min(pe - Math.max(1e-3, 0.5 / Math.max(1, Number(Ne || 24))), pe * ft)) : 0;
        if (await He(yt), re.thumbnailJobId !== De) return;
        $e.clearRect(0, 0, Ae, Oe), $e.drawImage(Le, 0, 0, Ae, Oe), Be.push({
          id: `thumb-${We}`,
          src: Ge.toDataURL("image/jpeg", 0.72),
          time: yt,
          label: b(yt)
        });
      }
      if (re.thumbnailJobId !== De) return;
      H.videoTransport.thumbnails = Be, H.videoTransport.thumbnailCount = Be.length || L, gN(_e, {
        thumbnails: Be,
        thumbnailCount: Be.length || L,
        duration: pe,
        fps: Ne
      });
    } finally {
      Le.removeAttribute("src"), Le.load(), is(Ge);
    }
  };
  G.push(() => {
    Se();
  });
  const A = ig({
    video: K instanceof HTMLVideoElement ? K : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (U) => m.requestFrame(U),
      cancelFrame: (U) => m.cancelFrame(U)
    },
    fps: O,
    span: () => {
      if (X) return j();
      const U = Math.round(Number(H.videoTransport.duration || 0) * O());
      return K.loop || !(U > 0) ? 1 / 0 : U;
    },
    loop: () => X,
    onFrame: (U) => {
      X ? D(U) : _(), fe({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    },
    onCapture: () => {
      w() && (k.backgroundDirty = !0);
    },
    onChange: () => {
      _(), F.playing.value = A.playing, ne(), fe({ cause: "frame_view", localOnly: !0, reason: dt.PLAYHEAD });
    }
  });
  G.push(() => A.dispose());
  const te = X && f instanceof HTMLVideoElement ? yd({
    video: f,
    onCapture: () => {
      var Ne;
      const U = Number(f.videoWidth || 0), ae = Number(f.videoHeight || 0);
      U < 1 || ae < 1 || (u.width = U, u.height = ae, (Ne = u.getContext("2d")) == null || Ne.drawImage(f, 0, 0), u.__panoFrameIdx += 1, fe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA }));
    },
    onChange: () => fe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  te && G.push(() => te.dispose());
  const ce = X ? pd({
    createImage: (U, ae) => {
      const Ne = new Image();
      return Ne.onload = ae, Ne.onerror = ae, Ne.src = U, Ne;
    },
    onLoad: () => fe({ cause: "frame_view", localOnly: !0, reason: dt.MEDIA })
  }) : null;
  if (K instanceof HTMLVideoElement) {
    const U = () => {
      q(), fe({ cause: "frame_view", localOnly: !0 });
    }, ae = () => {
      _({
        hasAudio: H.videoTransport.hasAudio,
        muted: K.muted,
        volume: Number(K.volume ?? H.videoTransport.volume ?? 1)
      });
    }, Ne = () => {
      const _e = K.dataset.panoSrc;
      _e && (re.failedSrcs.add(_e), q(), fe());
    };
    for (const [_e, Me] of [
      ["loadedmetadata", U],
      ["loadeddata", U],
      ["canplay", U],
      ["volumechange", ae],
      ["error", Ne]
    ])
      K.addEventListener(_e, Me), G.push(() => K.removeEventListener(_e, Me));
  }
  function be(U) {
    return t.uiList(d, U);
  }
  function ve(U) {
    return t.uiValue(d, U);
  }
  function C() {
    const U = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Va(U))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ae = p();
    return ae ? { videoKey: ae.videoKey, metaKey: ae.metaKey } : Y === "stickers" || Y === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: U } = C(), ae = ve(U);
    return Array.isArray(ae) && ae.length > 0 && ae[0] && typeof ae[0] == "object" ? ae[0] : ae && typeof ae == "object" ? ae : null;
  }
  function v(U) {
    return U ? U instanceof HTMLVideoElement ? [
      String(U.currentSrc || U.src || ""),
      Number(U.videoWidth || 0),
      Number(U.videoHeight || 0)
    ].join("|") : U instanceof HTMLCanvasElement ? [
      "canvas",
      Number(U.width || 0),
      Number(U.height || 0),
      String(U.__panoFrameIdx || 0)
    ].join("|") : [
      String(U.currentSrc || U.src || ""),
      Number(U.naturalWidth || U.width || 0),
      Number(U.naturalHeight || U.height || 0)
    ].join("|") : "none";
  }
  function b(U) {
    const ae = Math.max(0, Math.floor(Number(U || 0))), Ne = Math.floor(ae / 60), _e = ae % 60;
    return `${Ne}:${String(_e).padStart(2, "0")}`;
  }
  function O() {
    return X ? S.timeline.fps : re.metaFps || 1e3;
  }
  function _(U = {}) {
    const ae = Number(U.duration ?? H.videoTransport.duration ?? 0), Ne = Math.max(1, Number(U.fps ?? H.videoTransport.fps ?? 24)), _e = A.frame / O(), Me = Object.prototype.hasOwnProperty.call(U, "ready") ? !!U.ready : !!H.videoTransport.ready, De = A.playing, Le = Object.prototype.hasOwnProperty.call(U, "visible") ? !!U.visible : !!H.videoTransport.visible, Ge = Object.prototype.hasOwnProperty.call(U, "muted") ? !!U.muted : !!(K instanceof HTMLVideoElement ? K.muted : H.videoTransport.muted), Xe = Number(
      Object.prototype.hasOwnProperty.call(U, "volume") ? U.volume : K instanceof HTMLVideoElement ? K.volume : H.videoTransport.volume
    ), Ve = Object.prototype.hasOwnProperty.call(U, "hasAudio") ? !!U.hasAudio : J(K), je = Object.prototype.hasOwnProperty.call(U, "loop") ? !!U.loop : !!H.videoTransport.loop;
    Object.assign(H.videoTransport, {
      ready: Me,
      playing: De,
      visible: Le,
      loop: je,
      currentTime: Number.isFinite(_e) ? _e : 0,
      duration: Number.isFinite(ae) ? ae : 0,
      progressPct: ae > 1e-6 ? Math.max(0, Math.min(100, _e / ae * 100)) : 0,
      currentTimeLabel: b(_e),
      durationLabel: b(ae),
      frameCount: Math.max(0, Number(U.frameCount ?? H.videoTransport.frameCount ?? 0)),
      fps: Ne,
      hasAudio: Ve,
      muted: Ge,
      volume: Math.max(0, Math.min(1, Number.isFinite(Xe) ? Xe : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Xe) ? Xe : 1)) * 100),
      thumbnails: Array.isArray(U.thumbnails) ? U.thumbnails : H.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(U.thumbnailCount ?? H.videoTransport.thumbnailCount ?? L))
    });
  }
  function z() {
    return !!(K instanceof HTMLVideoElement && !X && K.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function x() {
    if (!(K instanceof HTMLVideoElement) || !H.videoTransport.hasAudio) return;
    const U = !K.muted;
    K.muted = U, !U && Number(K.volume || 0) <= 0 && (K.volume = Math.max(0.01, Number(H.videoTransport.volume || 1))), _({
      hasAudio: H.videoTransport.hasAudio,
      muted: K.muted,
      volume: Number(K.volume ?? H.videoTransport.volume ?? 1)
    });
  }
  function V() {
    _({
      visible: z()
    });
  }
  function w() {
    if (!(K instanceof HTMLVideoElement) || Number(K.videoWidth || 0) < 1 || Number(K.videoHeight || 0) < 1) return !1;
    const U = Number(K.videoWidth || 0), ae = Number(K.videoHeight || 0);
    ($.width !== U || $.height !== ae) && ($.width = U, $.height = ae);
    const Ne = $.getContext("2d");
    return Ne ? (Ne.clearRect(0, 0, U, ae), Ne.drawImage(K, 0, 0, U, ae), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function N() {
    return !A.showsVideo && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : K instanceof HTMLVideoElement && Number(K.videoWidth || 0) > 0 && Number(K.videoHeight || 0) > 0 && Number(K.readyState || 0) >= 2 ? K : null;
  }
  function I() {
    $.__panoFrameIdx = 0, k.backgroundDirty = !0;
  }
  function q() {
    if (!(K instanceof HTMLVideoElement)) return null;
    const { videoKey: U } = C(), ae = (p() || Xt(d, "background")) && be(U)[0] || null, Ne = l(ae), _e = [Ne, t.linkedVideoFile(d, P())].filter(Boolean), Me = _e.find((pe) => !re.failedSrcs.has(pe)) || "";
    re.videoFailed = !Me && _e.length > 0;
    const De = Me && Me === Ne ? le() : null;
    re.metaFps = Number(De == null ? void 0 : De.fps) > 0 ? Number(De.fps) : 0;
    const Le = Math.max(1, Number((De == null ? void 0 : De.fps) || (X ? S.timeline.fps : 24))), Ge = K.dataset.panoSrc === Me && Number.isFinite(K.duration) ? K.duration : 0, Xe = Number((De == null ? void 0 : De.duration) || ((De == null ? void 0 : De.frames) > 0 ? De.frames / Le : Ge)), Ve = Math.max(0, Number((De == null ? void 0 : De.frames) || Math.round(Xe * Le))), je = !!(De != null && De.has_audio) || J(K);
    return Me && K.dataset.panoSrc !== Me ? (K.pause(), I(), K.dataset.panoSrc = Me, K.loop = !X && !!H.videoTransport.loop, K.muted = !!H.videoTransport.muted, K.volume = Math.max(0, Math.min(1, Number(H.videoTransport.volume ?? 1))), K.src = Me, K.load(), A.setSource(!0), X || A.seek(0)) : !Me && K.getAttribute("src") && (K.pause(), K.removeAttribute("src"), delete K.dataset.panoSrc, K.load(), I(), Se(), A.setSource(!1)), X || (K.loop = !!H.videoTransport.loop), Me && !X && re.thumbnailSrc !== Me && !re.thumbnailFailedSrcs.has(Me) && ee(Me, Xe, Le), Me || Se(), _({
      ready: !!Me,
      visible: !!Me && z(),
      duration: Xe,
      frameCount: Ve,
      fps: Le,
      hasAudio: je,
      loop: !!K.loop,
      muted: !!K.muted,
      volume: Number(K.volume ?? H.videoTransport.volume ?? 1),
      thumbnailCount: H.videoTransport.thumbnailCount
    }), Me || null;
  }
  function se(U, ae = null) {
    return c(d, U, o, ae || (() => fe()));
  }
  function me(U = null) {
    return Xt(d, "external-sticker") ? se(lo, U) : null;
  }
  function Z() {
    if (!Xt(d, "external-sticker")) return null;
    const U = be(Wg)[0];
    if (!U || typeof U != "object") return null;
    const ae = be(Gg).map(l).filter(Boolean);
    if (ae.length) return { frames: ae, meta: U };
    const Ne = l(be(Hg)[0] || null);
    return Ne ? { src: Ne, meta: U } : null;
  }
  function he() {
    const U = S.stickers.find(Q), ae = U ? Z() : null, Ne = ae ? dd(U.clip, r.frame, S.timeline.fps, ae.meta) : null;
    te.follow({ src: (ae == null ? void 0 : ae.src) || "", time: Ne, playing: A.advancing, fps: S.timeline.fps });
    const _e = U ? de(U) : null, Me = ae != null && ae.frames ? ce.picture(ae.frames, Ne, ae.meta, _e) : te.picture(u, _e);
    return Me ? { media: Me, revision: v(Me), source: fd(ae, _e) } : null;
  }
  function we() {
    return !X || !Xt(d, "scene") ? null : Ua(be("pano_scene_files"), be("pano_scene_meta"), l);
  }
  function Pe() {
    return !X || !Xt(d, "external-sticker") ? null : Ua(be("pano_sticker_files"), be("pano_sticker_meta"), l);
  }
  function de(U) {
    var Le;
    if (U && typeof U == "object" && (Q(U) || U.external === !0))
      return me(() => {
        $r(d, "image-loaded");
      });
    const ae = X ? ye(U) : String(U && typeof U == "object" ? U.asset_id || U.assetId || "" : U || "");
    if (!ae) return null;
    const Ne = o.get(ae);
    if (Ne) return Ne;
    const _e = X ? Ka(U.source) : (Le = S.assets) == null ? void 0 : Le[ae], Me = a(_e);
    if (!Me) return null;
    const De = new Image();
    return Vg(De, Me), De.onload = () => {
      $g(De, Me), fe();
    }, De.onerror = () => {
      zg(De, Me), fe();
    }, De.src = Me, o.set(ae, De), De;
  }
  function ye(U) {
    const { source: ae } = U;
    return ae.filename ? `file:${ae.storage}:${ae.subfolder}:${ae.filename}` : `sticker:${U.id}`;
  }
  function y() {
    if (Y === "cutout") {
      const De = N();
      if (De) return De;
      const Le = s(
        d,
        ["erp_image", "bg_erp"],
        () => fe(),
        "background:cutout:erp_image|bg_erp"
      );
      return Le && !pu(Le) ? Le : c(d, "pano_input_images", o, () => fe()) || Le || null;
    }
    const U = N();
    if (U) return U;
    const ae = p(), Ne = ae || Xt(d, "background") ? c(d, (ae == null ? void 0 : ae.imageKey) ?? "pano_input_images", o, () => fe()) : null;
    if (Ne && !pu(Ne)) return Ne;
    if (K instanceof HTMLVideoElement && K.dataset.panoSrc) return K;
    if (ae) return Ne;
    const _e = P();
    return s(d, _e, () => fe(), `background:${_e.join("|")}`) || Ne || null;
  }
  function p() {
    return !B || !Xt(d, "scene") ? null : cN(be);
  }
  function T() {
    var U;
    return ((U = p()) == null ? void 0 : U.coverage) ?? En(S.coverage);
  }
  function P() {
    if (p()) return [];
    if (Y === "cutout") return ["erp_image", "bg_erp"];
    const U = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((_e) => String((_e == null ? void 0 : _e.name) || "")) : [], ae = U.includes("erp_image"), Ne = U.includes("bg_erp");
    return g && (ae || Ne) ? ae ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : Y === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function M(U) {
    return U ? U instanceof HTMLImageElement ? !!U.complete && Number(U.naturalWidth || U.width || 0) > 0 && Number(U.naturalHeight || U.height || 0) > 0 : U instanceof HTMLVideoElement ? Number(U.videoWidth || 0) > 0 && Number(U.videoHeight || 0) > 0 && Number(U.readyState || 0) >= 2 : Number(U.width || U.naturalWidth || 0) > 0 && Number(U.height || U.naturalHeight || 0) > 0 : !1;
  }
  function ie() {
    if (n.failed) return { status: Wn, detail: "renderer" };
    if (!n.ready) return { status: Jn, detail: "boot" };
    const U = y(), ae = re.videoFailed ? Wn : fu(U, M), Ne = [];
    for (const _e of oe()) {
      if ((_e == null ? void 0 : _e.visible) === !1) continue;
      const Me = de(_e);
      Ne.push(fu(Me, M));
    }
    return IP({
      presented: k.hasPresentedFrame,
      background: ae,
      stickers: Ne
    });
  }
  function ge() {
    K instanceof HTMLVideoElement && K.pause(), G.forEach((U) => {
      try {
        U();
      } catch {
      }
    });
  }
  return {
    connect(U) {
      ({
        isExternalSticker: Q,
        requestDraw: fe,
        setTimelineFrame: D,
        skyStickers: oe,
        syncTimeline: ne,
        timelineSpanFrames: j
      } = U);
    },
    videoState: re,
    queueVideoTransportLayout: R,
    playback: A,
    portVideo: te,
    getNodeUiValue: ve,
    getMediaRevisionToken: v,
    playbackFps: O,
    syncVideoTransportState: _,
    toggleVideoMuted: x,
    syncVideoTransportVisibility: V,
    refreshModalVideoSource: q,
    getStickerUiImage: se,
    getExternalStickerPreviewImage: me,
    getPortMedia: Z,
    followPortSticker: he,
    getStickerImage: de,
    stickerImageKey: ye,
    getConnectedErpImage: y,
    backgroundCoverage: T,
    upstreamBackground: p,
    isDecodedImageReady: M,
    getStageImageStatus: ie,
    sceneFiles: we,
    stickerFiles: Pe,
    disposeMediaSession: ge
  };
}
function bN(e = 80, t = null, r = 8) {
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
const vN = 80;
function Jg(e) {
  return JSON.stringify(gv(e));
}
function SN(e) {
  return bN(vN, { entries: [Jg(e)], index: 0 });
}
function Zg(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function _N(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, g, k, m, h, S, X, $, B, F;
  function Y() {
    r || (X(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(Jg(i)), B()));
  }
  function H(Q) {
    var ne, j;
    if (r) return;
    S();
    const fe = Q < 0 ? t.historyController.undo() : t.historyController.redo();
    if (B(), !fe) return;
    const D = yv(i, fe), oe = (ne = i.timeline) == null ? void 0 : ne.fps;
    Object.keys(i).forEach((re) => delete i[re]), Object.assign(i, D.state), X(!1), o && i.timeline.fps !== oe && k.seek(Math.round(t.frame * i.timeline.fps / oe)), t.selectedId = Zg(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((j = d()) == null ? void 0 : j.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, D.paintingChanged ? g() : f(), $(), F(), c(), h({ cause: "cutout_frame" });
  }
  function K() {
    var D, oe;
    const Q = Array.isArray((D = t.historyController) == null ? void 0 : D.entries) ? t.historyController.entries : [], fe = Number((oe = t.historyController) == null ? void 0 : oe.index);
    return {
      canUndo: !r && Q.length > 1 && fe > 0,
      canRedo: !r && Q.length > 1 && fe >= 0 && fe < Q.length - 1
    };
  }
  return {
    connect(Q) {
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
        stopTimelinePlayback: S,
        syncCutoutShot: X,
        syncPaintUi: $,
        syncUndoRedoButtons: B,
        updateSidePanel: F
      } = Q);
    },
    pushHistory: Y,
    restoreHistory: H,
    getHistoryCapabilities: K
  };
}
function wN(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g;
  function k() {
    return s === "stickers" ? m() : i.shots;
  }
  function m() {
    return n ? i.stickers.filter((y) => y.placement === "sky") : i.stickers;
  }
  function h(y) {
    return n && A(y);
  }
  function S(y) {
    return y.source.kind === "file" && !y.source.filename && !y.source.data_url;
  }
  function X(y) {
    return h(y) ? ed(y, r.frame) : y;
  }
  function $(y, p) {
    h(y) ? am(y, r.frame, p) : Object.assign(y, p);
  }
  function B() {
    const y = i.painting || (i.painting = po(null));
    return Array.isArray(y.groups) || (y.groups = []), y.groups;
  }
  function F(y = "paint") {
    var M, ie;
    const p = Array.isArray((ie = (M = i.painting) == null ? void 0 : M[y]) == null ? void 0 : ie.strokes) ? i.painting[y].strokes : [], T = [], P = /* @__PURE__ */ new Set();
    for (const ge of p) {
      const U = String((ge == null ? void 0 : ge.actionGroupId) || "").trim();
      !U || P.has(U) || (P.add(U), T.push(U));
    }
    return T;
  }
  function Y() {
    return F("paint");
  }
  function H(y, p) {
    const T = String(p || "").trim();
    return T ? `${y === "mask" ? "mask" : "paint"}:${T}` : "";
  }
  function K(y) {
    const p = String(y || "").trim();
    return p ? `raster:${p}` : "";
  }
  function Q(y) {
    const p = String(y || "").trim();
    if (!p) return "";
    const T = p.match(/^raster:(.*)$/);
    return String(T ? T[1] || "" : p).trim();
  }
  function fe(y, p = null) {
    const T = String(y || "").trim();
    if (!T) return { layerKind: "paint", actionGroupId: "" };
    const P = T.match(/^(paint|mask):(.*)$/);
    return P ? { layerKind: P[1] === "mask" ? "mask" : "paint", actionGroupId: String(P[2] || "").trim() } : { layerKind: p === "mask" ? "mask" : "paint", actionGroupId: T };
  }
  function D() {
    var p;
    let y = -1;
    for (const T of m())
      y = Math.max(y, Number((T == null ? void 0 : T.z_index) || 0));
    for (const T of B())
      y = Math.max(y, Number((T == null ? void 0 : T.z_index) || 0));
    for (const T of Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [])
      String((T == null ? void 0 : T.layerKind) || "paint") === "paint" && (y = Math.max(y, Number((T == null ? void 0 : T.z_index) || 0)));
    return y + 1;
  }
  function oe(y, p = null) {
    const T = String(y || "").trim();
    if (!T) return null;
    const P = B();
    let M = P.find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === T);
    return M ? p != null && (M.z_index = Math.max(0, Number(p || 0))) : (M = {
      id: T,
      type: "strokeGroup",
      actionGroupId: T,
      z_index: p == null ? D() : Math.max(0, Number(p || 0)),
      locked: !1,
      frame: null
    }, P.push(M)), M;
  }
  function ne(y) {
    if (!(y != null && y.centerUv)) return [];
    const p = Number(y.centerUv.u || 0), T = Number(y.centerUv.v || 0), P = Number(y.halfW || 0), M = Number(y.halfH || 0);
    return [
      {
        u: ((p - P) % 1 + 1) % 1,
        v: Ie(T - M, 0, 1)
      },
      {
        u: ((p + P) % 1 + 1) % 1,
        v: Ie(T - M, 0, 1)
      },
      {
        u: ((p + P) % 1 + 1) % 1,
        v: Ie(T + M, 0, 1)
      },
      {
        u: ((p - P) % 1 + 1) % 1,
        v: Ie(T + M, 0, 1)
      }
    ];
  }
  function j() {
    const y = new Set(Y()), T = B().filter((P) => y.has(String((P == null ? void 0 : P.actionGroupId) || "")));
    return y.forEach((P) => {
      T.some((M) => String((M == null ? void 0 : M.actionGroupId) || "") === P) || T.push({
        id: P,
        type: "strokeGroup",
        actionGroupId: P,
        z_index: D(),
        locked: !1,
        frame: null
      });
    }), T.sort((P, M) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), i.painting.groups = T, T;
  }
  function re(y, p, T) {
    var Xe;
    const P = (Ve) => (Number(Ve || 0) % 1 + 1) % 1, M = [];
    for (const Ve of T) {
      const je = Ve == null ? void 0 : Ve.geometry, pe = (je == null ? void 0 : je.geometryKind) === "lasso_fill" ? je == null ? void 0 : je.points : (je == null ? void 0 : je.processedPoints) || (je == null ? void 0 : je.rawPoints) || (je == null ? void 0 : je.points) || [];
      Array.isArray(pe) && M.push(...pe);
    }
    if (!M.length) return null;
    const ie = P(((Xe = M[0]) == null ? void 0 : Xe.u) || 0);
    let ge = 0, U = 0;
    M.forEach((Ve) => {
      const je = P((Ve == null ? void 0 : Ve.u) || 0);
      ge += ie + O(je, ie), U += Number((Ve == null ? void 0 : Ve.v) || 0);
    });
    const ae = (ge / M.length % 1 + 1) % 1;
    let Ne = 1 / 0, _e = -1 / 0, Me = 1 / 0, De = -1 / 0;
    M.forEach((Ve) => {
      const je = P((Ve == null ? void 0 : Ve.u) || 0), pe = O(je, ae);
      Ne = Math.min(Ne, pe), _e = Math.max(_e, pe);
      const Oe = Number((Ve == null ? void 0 : Ve.v) || 0);
      Me = Math.min(Me, Oe), De = Math.max(De, Oe);
    });
    const Le = T.reduce((Ve, je) => {
      const pe = l(String((je == null ? void 0 : je.toolKind) || "pen")), Oe = Pn[pe] || Pn[Er], Ae = Math.max(1, Number((je == null ? void 0 : je.size) || 10)) * Math.max(0.1, Number((Oe == null ? void 0 : Oe.sizeScale) ?? 1));
      return Math.max(Ve, Ae);
    }, 0), Ge = Math.max(35e-4, Le / 2048);
    return {
      centerUv: { u: ((ae + (Ne + _e) * 0.5) % 1 + 1) % 1, v: Ie((Me + De) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (_e - Ne) * 0.5 + Ge,
      halfH: (De - Me) * 0.5 + Ge,
      uvPad: Ge
    };
  }
  function L(y, p, T) {
    const P = String(y || "").trim();
    if (!P) return null;
    const M = B().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === P);
    if (!M) return null;
    const ie = T || le(P, p);
    return M.frame = re(P, p, ie), M.frame;
  }
  function G() {
    var P;
    const y = m().map((M) => ({
      type: "sticker",
      id: String((M == null ? void 0 : M.id) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    })), p = j().map((M) => ({
      type: "strokeGroup",
      id: String((M == null ? void 0 : M.id) || (M == null ? void 0 : M.actionGroupId) || ""),
      actionGroupId: String((M == null ? void 0 : M.actionGroupId) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    })), T = (Array.isArray((P = i.painting) == null ? void 0 : P.raster_objects) ? i.painting.raster_objects : []).filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") === "paint").map((M) => ({
      type: "rasterObject",
      id: String((M == null ? void 0 : M.id) || ""),
      z_index: Number((M == null ? void 0 : M.z_index) || 0),
      item: M
    }));
    return [...y, ...p, ...T].sort((M, ie) => Number(M.z_index || 0) - Number(ie.z_index || 0));
  }
  function E(y = !0) {
    var T, P, M, ie, ge, U;
    const p = G().filter((ae) => ae.type === "strokeGroup").map((ae) => String(ae.actionGroupId || "")).filter((ae) => !!ae);
    if (y) {
      const ae = String(((P = (T = r.interaction) == null ? void 0 : T.stroke) == null ? void 0 : P.actionGroupId) || "").trim(), Ne = String(((ie = (M = r.interaction) == null ? void 0 : M.stroke) == null ? void 0 : ie.layerKind) || "").trim(), _e = String(((U = (ge = r.interaction) == null ? void 0 : ge.stroke) == null ? void 0 : U.toolKind) || "").trim();
      ae && Ne === "paint" && _e !== "eraser" && !p.includes(ae) && p.push(ae);
    }
    return p;
  }
  function W(y = !0) {
    var U, ae, Ne, _e, Me, De;
    const p = G();
    if (!y) return p;
    const T = String(((ae = (U = r.interaction) == null ? void 0 : U.stroke) == null ? void 0 : ae.actionGroupId) || "").trim(), P = String(((_e = (Ne = r.interaction) == null ? void 0 : Ne.stroke) == null ? void 0 : _e.layerKind) || "").trim(), M = String(((De = (Me = r.interaction) == null ? void 0 : Me.stroke) == null ? void 0 : De.toolKind) || "").trim();
    if (!T || P !== "paint" || M === "eraser" || p.some((Le) => Le.type === "strokeGroup" && String(Le.actionGroupId || "") === T))
      return p;
    const ie = f();
    let ge = p.reduce((Le, Ge) => Math.max(Le, Number((Ge == null ? void 0 : Ge.z_index) || 0)), -1) + 1;
    return ie && C(ie) && String(ie.actionGroupId || "") === T && (ge = Number(ie.z_index || 0)), [
      ...p,
      {
        type: "strokeGroup",
        id: T,
        actionGroupId: T,
        z_index: ge,
        item: null
      }
    ].sort((Le, Ge) => Number((Le == null ? void 0 : Le.z_index) || 0) - Number((Ge == null ? void 0 : Ge.z_index) || 0));
  }
  function R() {
    return B().slice().sort((y, p) => Number((y == null ? void 0 : y.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)).map((y) => ve(H("paint", (y == null ? void 0 : y.actionGroupId) || (y == null ? void 0 : y.id) || ""))).filter(Boolean);
  }
  function J() {
    var y;
    return (Array.isArray((y = i.painting) == null ? void 0 : y.raster_objects) ? i.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").slice().sort((p, T) => Number((p == null ? void 0 : p.z_index) || 0) - Number((T == null ? void 0 : T.z_index) || 0)).map((p) => ce(K((p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function ue() {
    return Array.isArray(i.stickers) ? m() : [];
  }
  function Se() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ue()];
  }
  function ee(y) {
    return !!y && Array.isArray(i.shots) && i.shots.includes(y);
  }
  function A(y) {
    return !!y && Array.isArray(i.stickers) && i.stickers.includes(y);
  }
  function te() {
    var y;
    return Array.isArray((y = i.painting) == null ? void 0 : y.raster_objects) ? i.painting.raster_objects : [];
  }
  function ce(y) {
    const p = Q(y);
    if (!p) return null;
    const T = te().find((P) => String((P == null ? void 0 : P.id) || "").trim() === p);
    return !T || String((T == null ? void 0 : T.layerKind) || "paint") !== "paint" ? null : {
      ...T,
      id: K(p),
      type: "rasterObject",
      rasterObjectId: p
    };
  }
  function be(y) {
    if (!y || typeof y != "object" || String(y.type || "") !== "rasterObject") return !1;
    const p = Q(y.rasterObjectId || y.id || "");
    return !!p && !!ce(K(p));
  }
  function ve(y) {
    const p = fe(y), T = String(p.actionGroupId || "").trim();
    if (!T) return null;
    const P = B().find((M) => String((M == null ? void 0 : M.id) || (M == null ? void 0 : M.actionGroupId) || "") === T || String((M == null ? void 0 : M.actionGroupId) || "") === T);
    return P ? {
      ...P,
      id: H("paint", T),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: T
    } : null;
  }
  function C(y) {
    if (!y || typeof y != "object" || String(y.type || "") !== "strokeGroup") return !1;
    const p = String(y.actionGroupId || "").trim(), T = String(y.layerKind || "paint").trim() || "paint";
    return !!p && !!ve(H(T, p));
  }
  function le(y, p = null) {
    const T = fe(y, p), P = String(T.actionGroupId || "").trim();
    return P ? d(T.layerKind).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() === P) : [];
  }
  function v(y, p = "paint") {
    const T = String(y || "").trim(), M = `geomv5:${String(p || "paint").trim() || "paint"}:${T}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ie = a(), ge = String((ie == null ? void 0 : ie.id) || ""), U = ie ? c(ie) : null;
      return `${M}:frame:${ge}:${Math.round(Number((ie == null ? void 0 : ie.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((U == null ? void 0 : U.x) || 0))}:${Math.round(Number((U == null ? void 0 : U.y) || 0))}:${Math.round(Number((U == null ? void 0 : U.w) || 0))}:${Math.round(Number((U == null ? void 0 : U.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function b(y, p, T) {
    return !y || typeof y != "object" ? y : {
      ...y,
      u: ((Number(y.u || 0) + Number(p || 0)) % 1 + 1) % 1,
      v: Ie(Number(y.v || 0) + Number(T || 0), 0, 1)
    };
  }
  function O(y, p) {
    let T = Number(y || 0) - Number(p || 0);
    for (; T > 0.5; ) T -= 1;
    for (; T < -0.5; ) T += 1;
    return T;
  }
  function _(y, p = null, T = null) {
    var Ne;
    const P = fe(y, p), M = Array.isArray(T) ? T : le(P.actionGroupId, P.layerKind), ie = [];
    if (M.forEach((_e) => {
      const Me = (_e == null ? void 0 : _e.geometry) || null, De = (Me == null ? void 0 : Me.geometryKind) === "lasso_fill" ? Me == null ? void 0 : Me.points : (Me == null ? void 0 : Me.processedPoints) || (Me == null ? void 0 : Me.rawPoints) || (Me == null ? void 0 : Me.points) || [];
      Array.isArray(De) && ie.push(...De);
    }), !ie.length) return { u: 0.5, v: 0.5 };
    const ge = Number(((Ne = ie[0]) == null ? void 0 : Ne.u) || 0);
    let U = 0, ae = 0;
    return ie.forEach((_e) => {
      U += ge + O(Number((_e == null ? void 0 : _e.u) || 0), ge), ae += Number((_e == null ? void 0 : _e.v) || 0);
    }), {
      u: (U / ie.length % 1 + 1) % 1,
      v: Ie(ae / ie.length, 0, 1)
    };
  }
  function z(y, p, T = 1, P = 0) {
    if (!y || typeof y != "object") return y;
    const M = Number((p == null ? void 0 : p.u) || 0), ie = Number((p == null ? void 0 : p.v) || 0), ge = O(Number(y.u || 0), M), U = Number(y.v || 0) - ie, ae = Number(P || 0) * Sr, Ne = Math.cos(ae), _e = Math.sin(ae), Me = Math.max(0.02, Number(T || 1)), De = (ge * Ne - U * _e) * Me, Le = (ge * _e + U * Ne) * Me;
    return {
      ...y,
      u: ((M + De) % 1 + 1) % 1,
      v: Ie(ie + Le, 0, 1)
    };
  }
  function x(y, p, T, P = null, M = null, ie = null) {
    const ge = fe(y, M), U = String(ge.actionGroupId || "").trim();
    if (!U) return !1;
    const ae = d(ge.layerKind), Ne = Array.isArray(P) ? new Map(P.map((Me) => [String((Me == null ? void 0 : Me.id) || ""), Me])) : null;
    let _e = !1;
    if (ae.forEach((Me) => {
      if (String((Me == null ? void 0 : Me.actionGroupId) || "").trim() !== U) return;
      const De = (Ne == null ? void 0 : Ne.get(String((Me == null ? void 0 : Me.id) || ""))) || Me, Le = Me == null ? void 0 : Me.geometry, Ge = De == null ? void 0 : De.geometry;
      !Le || !Ge || (Array.isArray(Ge.points) && (Le.points = Ge.points.map((Xe) => b(Xe, p, T)), _e = !0), Array.isArray(Ge.rawPoints) && (Le.rawPoints = Ge.rawPoints.map((Xe) => b(Xe, p, T)), _e = !0), Array.isArray(Ge.processedPoints) && (Le.processedPoints = Ge.processedPoints.map((Xe) => b(Xe, p, T)), _e = !0));
    }), _e && ie) {
      const Me = B().find((De) => String((De == null ? void 0 : De.actionGroupId) || "") === U);
      Me && (Me.frame = null);
    }
    return _e;
  }
  function V(y, p = 1, T = 0, P = null, M = null, ie = null) {
    const ge = fe(y, M), U = String(ge.actionGroupId || "").trim();
    if (!U) return !1;
    const ae = d(ge.layerKind), Ne = Array.isArray(P) ? P : le(U, ge.layerKind), _e = Array.isArray(Ne) ? new Map(Ne.map((Le) => [String((Le == null ? void 0 : Le.id) || ""), Le])) : null, Me = (ie == null ? void 0 : ie.centerUv) ?? _(U, ge.layerKind, Ne);
    let De = !1;
    if (ae.forEach((Le) => {
      if (String((Le == null ? void 0 : Le.actionGroupId) || "").trim() !== U) return;
      const Ge = (_e == null ? void 0 : _e.get(String((Le == null ? void 0 : Le.id) || ""))) || Le, Xe = Le == null ? void 0 : Le.geometry, Ve = Ge == null ? void 0 : Ge.geometry;
      !Xe || !Ve || (Array.isArray(Ve.points) && (Xe.points = Ve.points.map((je) => z(je, Me, p, T)), De = !0), Array.isArray(Ve.rawPoints) && (Xe.rawPoints = Ve.rawPoints.map((je) => z(je, Me, p, T)), De = !0), Array.isArray(Ve.processedPoints) && (Xe.processedPoints = Ve.processedPoints.map((je) => z(je, Me, p, T)), De = !0));
    }), De && ie) {
      const Le = B().find((Ge) => String((Ge == null ? void 0 : Ge.actionGroupId) || "") === U);
      Le && (Le.frame = null);
    }
    return De;
  }
  function w(y, p, T, P = null) {
    const M = Q(y);
    if (!M) return !1;
    const ie = te().find((_e) => String((_e == null ? void 0 : _e.id) || "").trim() === M);
    if (!ie) return !1;
    const ge = P && typeof P == "object" ? P : ie, U = (ge == null ? void 0 : ge.transform) || {}, ae = Number(U.du || 0) + Number(p || 0), Ne = Ie(Number(U.dv || 0) + Number(T || 0), -1, 1);
    return ie.transform || (ie.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ie.transform.du = ae, ie.transform.dv = Ne, !0;
  }
  function N(y, p = 1, T = null) {
    const P = Q(y);
    if (!P) return !1;
    const M = te().find((Ne) => String((Ne == null ? void 0 : Ne.id) || "").trim() === P);
    if (!M) return !1;
    const ie = T && typeof T == "object" ? T : M, ge = (ie == null ? void 0 : ie.transform) || {}, U = Math.max(0.01, Number(ge.scale || 1)), ae = Ie(U * Math.max(0.01, Number(p || 1)), 0.01, 100);
    return M.transform || (M.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), M.transform.scale = ae, !0;
  }
  function I() {
    return D();
  }
  function q(y) {
    var p;
    return !y || typeof y != "object" ? !1 : o ? ((p = y.source) == null ? void 0 : p.kind) === "port" : String(y.id || "") === Ad || String(y.source_kind || "") === TP;
  }
  function se(y) {
    return !!(y && typeof y == "object" && y.visible === !1);
  }
  function me(y) {
    return q(y) && se(y) ? km : 1;
  }
  function Z(y, p, T = 1, P = 0) {
    if (!y || typeof y != "object") return y;
    const M = Number((p == null ? void 0 : p.u) || 0), ie = Number((p == null ? void 0 : p.v) || 0), ge = O(Number(y.u || 0), M), U = Number(y.v || 0) - ie, ae = Math.max(0.02, Number(T || 1)), Ne = Number(P || 0) * Sr, _e = Math.cos(Ne), Me = Math.sin(Ne), De = ge / ae, Le = U / ae, Ge = De * _e + Le * Me, Xe = -De * Me + Le * _e;
    return {
      ...y,
      u: ((M + Ge) % 1 + 1) % 1,
      v: ie + Xe
    };
  }
  function he(y) {
    const p = (y == null ? void 0 : y.bbox) || null, T = (y == null ? void 0 : y.transform) || {};
    return p ? {
      u: (((Number(p.u0 || 0) + Number(p.u1 || 0)) * 0.5 + Number(T.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(p.v0 || 0) + Number(p.v1 || 0)) * 0.5 + Number(T.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function we(y) {
    var ae, Ne, _e, Me;
    const p = (y == null ? void 0 : y.bbox) || null;
    if (!p) return [];
    const T = {
      u: (Number(p.u0 || 0) + Number(p.u1 || 0)) * 0.5,
      v: (Number(p.v0 || 0) + Number(p.v1 || 0)) * 0.5
    }, P = Math.max(0.01, Number(((ae = y == null ? void 0 : y.transform) == null ? void 0 : ae.scale) || 1)), M = Number(((Ne = y == null ? void 0 : y.transform) == null ? void 0 : Ne.rot_deg) || 0), ie = Number(((_e = y == null ? void 0 : y.transform) == null ? void 0 : _e.du) || 0), ge = Number(((Me = y == null ? void 0 : y.transform) == null ? void 0 : Me.dv) || 0);
    return [
      { u: Number(p.u0 || 0), v: Number(p.v0 || 0) },
      { u: Number(p.u1 || 0), v: Number(p.v0 || 0) },
      { u: Number(p.u1 || 0), v: Number(p.v1 || 0) },
      { u: Number(p.u0 || 0), v: Number(p.v1 || 0) }
    ].map((De) => b(z(De, T, P, M), ie, ge));
  }
  function Pe(y) {
    const p = Q((y == null ? void 0 : y.rasterObjectId) || (y == null ? void 0 : y.id) || ""), T = (y == null ? void 0 : y.transform) || {}, P = (y == null ? void 0 : y.bbox) || {}, M = `${p}:${r.mode}:${u()}:${P.u0}:${P.v0}:${P.u1}:${P.v1}:${T.du}:${T.dv}:${T.rot_deg}:${T.scale}`;
    if (r.mode === "frame") {
      const ie = a(), ge = ie ? c(ie) : null;
      return `${M}:frame:${String((ie == null ? void 0 : ie.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function de(y) {
    const p = String((y == null ? void 0 : y.id) || ""), T = ee(y) ? "frame" : A(y) ? "sticker" : "item", P = X(y), M = [
      T,
      p,
      r.mode,
      Number((P == null ? void 0 : P.yaw_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.pitch_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.hFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.vFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.rot_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.roll_deg) || 0).toFixed(4),
      Dr(P),
      h(y) && g(y)
    ].join(":");
    if (r.mode === "frame") {
      const ie = a(), ge = ie ? c(ie) : null;
      return `${M}:frame:${String((ie == null ? void 0 : ie.id) || "")}:${Math.round(Number((ge == null ? void 0 : ge.x) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.y) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.w) || 0))}:${Math.round(Number((ge == null ? void 0 : ge.h) || 0))}`;
    }
    return `${M}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ye() {
    G().forEach((p, T) => {
      p.type === "sticker" && p.item && (p.item.z_index = T), p.type === "strokeGroup" && p.item && (p.item.z_index = T), p.type === "rasterObject" && p.item && (p.item.z_index = T);
    });
  }
  return {
    connect(y) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        sceneStickerShown: g
      } = y);
    },
    getList: k,
    skyStickers: m,
    isSceneSticker: h,
    isUploadingSticker: S,
    poseOf: X,
    writePose: $,
    getPaintingGroupList: B,
    makeStrokeGroupSelectionId: H,
    makeRasterObjectSelectionId: K,
    parseRasterObjectSelectionId: Q,
    ensurePaintingGroupEntry: oe,
    getFrameCornersUv: ne,
    ensureGroupFrame: L,
    getDisplayListObjects: G,
    getOrderedPaintGroupIds: E,
    getOrderedDisplayListObjects: W,
    getSelectableStrokeGroupItems: R,
    getSelectableRasterObjectItems: J,
    cutoutStickers: ue,
    getCutoutSelectableItems: Se,
    isShotItem: ee,
    isStickerItem: A,
    getRasterObjectList: te,
    getRasterObjectItem: ce,
    isRasterObjectItem: be,
    getStrokeGroupItem: ve,
    isStrokeGroupItem: C,
    getStrokeGroupStrokes: le,
    getStrokeGeomCacheKey: v,
    shortestWrappedDelta: O,
    getStrokeGroupCenterUv: _,
    applyStrokeGroupOffset: x,
    applyStrokeGroupTransform: V,
    applyRasterObjectOffset: w,
    applyRasterObjectTransform: N,
    getNextStickerZIndex: I,
    isExternalSticker: q,
    isStickerHidden: se,
    getStickerDisplayAlpha: me,
    inverseTransformErpPointAround: Z,
    getRasterObjectCenterUv: he,
    getRasterObjectTransformedErpPoints: we,
    getRasterObjectGeomCacheKey: Pe,
    getSceneItemGeomCacheKey: de,
    normalizeDisplayZIndices: ye
  };
}
function xN(e) {
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
  let c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee;
  function A() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const T = F(p);
    if (T) return T;
    const P = X(p);
    return P || (o ? k().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null : h().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null);
  }
  function te() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], T = [], P = /* @__PURE__ */ new Set();
    return p.forEach((M) => {
      const ie = String(M || "").trim();
      if (!ie || P.has(ie)) return;
      P.add(ie);
      const ge = ie === String(t.selectedId || "") ? A() : F(ie) || X(ie) || (o ? k().find((U) => String((U == null ? void 0 : U.id) || "") === ie) : h().find((U) => String((U == null ? void 0 : U.id) || "") === ie));
      ge && T.push(ge);
    }), T;
  }
  function ce(p = null) {
    const T = Array.isArray(p) ? p : te();
    if (!T || T.length < 2) return null;
    const P = T.map((_e) => L(_e)).filter((_e) => (_e == null ? void 0 : _e.visible) && Array.isArray(_e.corners) && _e.corners.length);
    if (!P.length) return null;
    const M = P.flatMap((_e) => _e.corners.map((Me) => Number((Me == null ? void 0 : Me.x) || 0))), ie = P.flatMap((_e) => _e.corners.map((Me) => Number((Me == null ? void 0 : Me.y) || 0))), ge = Math.min(...M), U = Math.max(...M), ae = Math.min(...ie), Ne = Math.max(...ie);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ge + U) * 0.5, y: (ae + Ne) * 0.5 },
      corners: [
        { x: ge, y: ae },
        { x: U, y: ae },
        { x: U, y: Ne },
        { x: ge, y: Ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ge + U) * 0.5, y: ae, a: { x: ge, y: ae }, b: { x: U, y: ae } },
        { edge: "right", x: U, y: (ae + Ne) * 0.5, a: { x: U, y: ae }, b: { x: U, y: Ne } },
        { edge: "bottom", x: (ge + U) * 0.5, y: Ne, a: { x: U, y: Ne }, b: { x: ge, y: Ne } },
        { edge: "left", x: ge, y: (ae + Ne) * 0.5, a: { x: ge, y: Ne }, b: { x: ge, y: ae } }
      ],
      rotateStemBase: { x: (ge + U) * 0.5, y: ae },
      rotateHandle: { x: (ge + U) * 0.5, y: ae - 30 }
    };
  }
  function be(p) {
    const T = String((p == null ? void 0 : p.id) || "").trim();
    return !!T && Array.isArray(t.selectedIds) && t.selectedIds.includes(T);
  }
  function ve() {
    const p = A();
    return p ? ne(p) || K(p) ? "stroke" : fe(p) ? "frame" : "image" : null;
  }
  function C(p) {
    if (!p || typeof p != "object") return !1;
    if (ne(p)) {
      const T = String(p.actionGroupId || p.id || "").trim(), P = S().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === T);
      return (P == null ? void 0 : P.locked) === !0;
    }
    if (K(p)) {
      const T = E(p.rasterObjectId || p.id || ""), P = $().find((M) => String((M == null ? void 0 : M.id) || "").trim() === T);
      return (P == null ? void 0 : P.locked) === !0;
    }
    return p.locked === !0;
  }
  function le(p = null) {
    const T = Array.isArray(p) ? p : te();
    return T.length > 0 && T.every((P) => C(P));
  }
  function v(p, T) {
    const P = T === !0;
    if (!p || typeof p != "object") return !1;
    if (ne(p)) {
      const M = String(p.actionGroupId || p.id || "").trim(), ie = S().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "").trim() === M);
      return !ie || ie.locked === P ? !1 : (ie.locked = P, !0);
    }
    if (K(p)) {
      const M = E(p.rasterObjectId || p.id || ""), ie = $().find((ge) => String((ge == null ? void 0 : ge.id) || "").trim() === M);
      return !ie || ie.locked === P ? !1 : (ie.locked = P, !0);
    }
    return p.locked === P ? !1 : (p.locked = P, !0);
  }
  function b() {
    if (r) return;
    const p = te();
    if (!p.length) return;
    const T = !le(p);
    let P = !1;
    p.forEach((M) => {
      v(M, T) && (P = !0);
    }), P && (R(), d(), Se(), ee(), J());
  }
  function O(p) {
    he(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && oe(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && fe(p) ? s.active.selected_shot_id = p.id || null : p ? fe(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function _(p, T = null) {
    const P = [], M = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((U) => {
      const ae = String((U == null ? void 0 : U.id) || "").trim();
      !ae || M.has(ae) || (M.add(ae), P.push(ae));
    }), t.selectedIds = P, he(), a.selection = null;
    const ie = String(T || "").trim();
    t.selectedId = ie && P.includes(ie) ? ie : P[P.length - 1] || null;
    const ge = A();
    s.active.selected_sticker_id = ge && oe(ge) && ge.id || null, ge && fe(ge) ? s.active.selected_shot_id = ge.id || null : P.length || (s.active.selected_shot_id = null);
  }
  function z() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((P, M) => ({
      kind: "frame",
      item: P,
      label: String((P == null ? void 0 : P.label) || `Frame ${M + 1}`)
    })), T = f().map((P, M) => {
      var ge, U;
      const ie = H(P) ? String(P.id || Ad) : String(((U = (ge = s.assets) == null ? void 0 : ge[P.asset_id]) == null ? void 0 : U.name) || P.asset_id || P.id || `Image ${M + 1}`);
      return {
        kind: "image",
        item: P,
        label: ie
      };
    });
    return [...p, ...T];
  }
  function x(p) {
    return p === "frame" ? ze.camera : p === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function V(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: x(p.kind)
    };
  }
  function w() {
    if (r) return;
    const p = A();
    !p || !H(p) || (p.visible = D(p), de(), j(), R(), d(), ee(), Se(), J());
  }
  function N() {
    if (r || l !== "stickers") return;
    const p = A();
    if (!p || !H(p)) return;
    const T = p.initial_pose;
    if (!T || typeof T != "object") return;
    p.yaw_deg = Number(T.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(T.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(T.hFOV_deg ?? p.hFOV_deg ?? 30);
    const P = B(lo, () => {
      J();
    });
    P && (P.complete || P.naturalWidth || P.width) ? p.vFOV_deg = u(
      Number(T.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(P.naturalWidth || P.width || 1),
      Number(P.naturalHeight || P.height || 1)
    ) : p.vFOV_deg = Number(T.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(T.rot_deg ?? p.rot_deg ?? 0), R(), d(), ee(), Se(), J();
  }
  function I(p) {
    if (!p || !H(p)) return null;
    const T = p.initial_pose;
    if (!T || typeof T != "object") return null;
    const P = {
      yaw_deg: Number(T.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(T.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(T.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(T.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(T.rot_deg ?? p.rot_deg ?? 0)
    }, M = B(lo, () => {
      J();
    });
    return M && (M.complete || M.naturalWidth || M.width) && (P.vFOV_deg = u(
      P.hFOV_deg,
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    )), P;
  }
  function q() {
    const p = A();
    if (!p || !H(p)) return !1;
    const T = I(p);
    if (!T) return !1;
    const P = (M, ie) => Math.abs(Number(M || 0) - Number(ie || 0)) <= 1e-4;
    return !(P(p.yaw_deg, T.yaw_deg) && P(p.pitch_deg, T.pitch_deg) && P(p.hFOV_deg, T.hFOV_deg) && P(p.vFOV_deg, T.vFOV_deg) && P(p.rot_deg, T.rot_deg));
  }
  function se(p = {}) {
    const P = p.preservePanelValues !== !1 ? W(A()) : null;
    P && (t.panelLastValues = {
      yaw_deg: Number(P.yaw_deg || 0),
      pitch_deg: Number(P.pitch_deg || 0),
      hFOV_deg: Number(P.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(P.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(P.rot_deg || 0),
      roll_deg: Number(P.roll_deg || 0),
      aspect_id: Dr(P)
    }), t.selectedId = null, t.selectedIds = [], he(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function me() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function Z(p) {
    O(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function he() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function we(p) {
    return !!p && !r && !p.locked;
  }
  function Pe() {
    if (l !== "cutout") return;
    const p = g();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function de() {
    var T;
    const p = A();
    (Q(p) && !ue(p) || t.selectedId === td && Y() && !c() || ve() === "stroke" && !G()) && O(null), ((T = me()) == null ? void 0 : T.visible) === !1 && he();
  }
  function ye() {
    if (r) return;
    const p = te();
    if (!A() || p.length === 0 || p.some((ae) => C(ae))) return;
    re();
    const P = m(), M = new Set(p.map((ae) => oe(ae) ? `sticker:${String(ae.id || "")}` : K(ae) ? `rasterObject:${E(ae.rasterObjectId || ae.id || "")}` : `strokeGroup:${String(ae.actionGroupId || ae.id || "")}`)), ie = [], ge = [];
    if (P.forEach((ae) => {
      var _e, Me;
      const Ne = ae.type === "sticker" ? `sticker:${String(((_e = ae.item) == null ? void 0 : _e.id) || "")}` : ae.type === "rasterObject" ? `rasterObject:${String(((Me = ae.item) == null ? void 0 : Me.id) || ae.id || "")}` : `strokeGroup:${String(ae.actionGroupId || "")}`;
      M.has(Ne) ? ie.push(ae) : ge.push(ae);
    }), !ie.length || ie[ie.length - 1] === P[P.length - 1]) return;
    [...ge, ...ie].forEach((ae, Ne) => {
      ae.type === "sticker" && ae.item && (ae.item.z_index = Ne), ae.type === "strokeGroup" && ae.item && (ae.item.z_index = Ne), ae.type === "rasterObject" && ae.item && (ae.item.z_index = Ne);
    }), j(), R(), d(), Se(), J();
  }
  function y() {
    if (r) return;
    const p = te();
    if (!A() || p.length === 0 || p.some((ae) => C(ae))) return;
    re();
    const P = m(), M = new Set(p.map((ae) => oe(ae) ? `sticker:${String(ae.id || "")}` : K(ae) ? `rasterObject:${E(ae.rasterObjectId || ae.id || "")}` : `strokeGroup:${String(ae.actionGroupId || ae.id || "")}`)), ie = [], ge = [];
    if (P.forEach((ae) => {
      var _e, Me;
      const Ne = ae.type === "sticker" ? `sticker:${String(((_e = ae.item) == null ? void 0 : _e.id) || "")}` : ae.type === "rasterObject" ? `rasterObject:${String(((Me = ae.item) == null ? void 0 : Me.id) || ae.id || "")}` : `strokeGroup:${String(ae.actionGroupId || "")}`;
      M.has(Ne) ? ie.push(ae) : ge.push(ae);
    }), !ie.length || ie[0] === P[0]) return;
    [...ie, ...ge].forEach((ae, Ne) => {
      ae.type === "sticker" && ae.item && (ae.item.z_index = Ne), ae.type === "strokeGroup" && ae.item && (ae.item.z_index = Ne), ae.type === "rasterObject" && ae.item && (ae.item.z_index = Ne);
    }), j(), R(), d(), Se(), J();
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
        getPaintingGroupList: S,
        getRasterObjectItem: X,
        getRasterObjectList: $,
        getStickerUiImage: B,
        getStrokeGroupItem: F,
        hasCamera: Y,
        isExternalSticker: H,
        isRasterObjectItem: K,
        isSceneSticker: Q,
        isShotItem: fe,
        isStickerHidden: D,
        isStickerItem: oe,
        isStrokeGroupItem: ne,
        markObjectVisualsDirty: j,
        normalizeDisplayZIndices: re,
        objectGeom: L,
        paintingShown: G,
        parseRasterObjectSelectionId: E,
        poseOf: W,
        pushHistory: R,
        requestDraw: J,
        sceneStickerShown: ue,
        updateSelectionMenu: Se,
        updateSidePanel: ee
      } = p);
    },
    getSelected: A,
    getSelectedItems: te,
    getMultiSelectionGeom: ce,
    isItemSelected: be,
    getSelectedKind: ve,
    isItemLocked: C,
    areAllSelectedItemsLocked: le,
    toggleSelectedLock: b,
    setSelectedItem: O,
    setSelectedItems: _,
    getCutoutInspectorItems: z,
    getSelectionItemIcon: x,
    getSelectionItemLabelData: V,
    toggleSelectedExternalStickerVisibility: w,
    restoreSelectedToInitialPose: N,
    canRestoreSelectedToInitial: q,
    clearSelection: se,
    selectedWorldSticker: me,
    selectWorldSticker: Z,
    clearWorldSelection: he,
    worldStickerEditable: we,
    applyInitialCutoutFocus: Pe,
    releaseHiddenSelection: de,
    bringSelectedToFront: ye,
    sendSelectedToBack: y
  };
}
function kN(e) {
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
    const te = K({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !te || te.length !== 4 ? !1 : te[0].y >= te[3].y;
  }
  function m() {
    return Mm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const A = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return A.some((te, ce) => te !== f.key[ce]) && (f = { key: A, projection: Nm(m(), r.width, r.height) }), f.projection;
  }
  function S(A) {
    const te = h().project(A);
    return te.z > 1e-4 ? te : null;
  }
  function X(A, te) {
    return h().ray(A, te);
  }
  function $() {
    const A = r.width, te = r.height, ce = 2;
    if (A / Math.max(te, 1) >= ce) {
      const v = te, b = v * ce;
      return { x: (A - b) * 0.5, y: 0, w: b, h: v };
    }
    const ve = A, C = ve / ce;
    return { x: 0, y: (te - C) * 0.5, w: ve, h: C };
  }
  function B(A) {
    return {
      lon: Math.atan2(A.x, A.z),
      lat: Math.asin(Ie(A.y, -1, 1))
    };
  }
  function F(A, te = null) {
    const { lon: ce, lat: be } = B(A), ve = $();
    let C = ve.x + (ce / (2 * Math.PI) + 0.5) * ve.w;
    const le = ve.y + (0.5 - be / Math.PI) * ve.h;
    if (te !== null) {
      for (; C - te > ve.w / 2; ) C -= ve.w;
      for (; C - te < -ve.w / 2; ) C += ve.w;
    }
    return { x: C, y: le, z: 1 };
  }
  function Y(A) {
    const te = c(A), ce = fo(
      Number(te.yaw_deg || 0),
      Number(te.pitch_deg || 0),
      Number(te.rot_deg || te.roll_deg || 0)
    ), be = Math.tan(Ie(Number(te.hFOV_deg || 20), 0.1, 179) * 0.5 * Sr), ve = Math.tan(Ie(Number(te.vFOV_deg || 20), 0.1, 179) * 0.5 * Sr);
    return {
      centerDir: ce.fwd,
      right: ce.right,
      up: ce.up,
      tanX: be,
      tanY: ve
    };
  }
  function H(A, te, ce) {
    return BP(fp(fp(A.centerDir, pp(A.right, te)), pp(A.up, ce)));
  }
  function K(A) {
    const te = Y(A);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: ve }) => H(te, be * te.tanX, ve * te.tanY));
  }
  function Q(A, te, ce) {
    const be = Y(A), ve = (te * 2 - 1) * be.tanX, C = (1 - ce * 2) * be.tanY;
    return H(be, ve, C);
  }
  function fe(A) {
    const te = t.width / Math.max(1, r.width), ce = t.height / Math.max(1, r.height);
    return { x: A.x * te, y: A.y * ce, w: A.w * te, h: A.h * ce };
  }
  function D(A, te = null, ce = null, be = null) {
    if (n.mode === "frame") {
      const ve = te || a();
      if (!ve) return [];
      const C = ce || l(ve);
      return R(A, ve, C);
    }
    return G(A, be);
  }
  function oe(A, te = null, ce = null, be = null, ve = null) {
    if (!A) return null;
    if (n.mode === "unwrap") {
      const le = G([A], ve);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const C = j(A);
    return C ? d(C, te, ce, be) : null;
  }
  function ne(A, te) {
    if (!A || !te) return null;
    const ce = Number(te.x || 0), be = Number(te.y || 0);
    return Q(A, ce, be);
  }
  function j(A) {
    if (!A) return null;
    const te = (Number(A.u || 0) - 0.5) * (2 * Math.PI), ce = (0.5 - Number(A.v || 0)) * Math.PI, be = Math.cos(ce);
    return Il(be * Math.sin(te), Math.sin(ce), be * Math.cos(te));
  }
  function re(A, te) {
    if (!A || !te) return null;
    const ce = Y(A), be = vc(te, ce.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const ve = vc(te, ce.right) / be, C = vc(te, ce.up) / be;
    return {
      x: (ve / Math.max(1e-6, ce.tanX) + 1) * 0.5,
      y: (1 - C / Math.max(1e-6, ce.tanY)) * 0.5
    };
  }
  function L(A) {
    if (!Array.isArray(A) || A.length < 3) return [];
    if (n.mode === "unwrap") {
      const ce = $();
      return A.map((be) => ({
        x: ce.x + Number(be.u || 0) * ce.w,
        y: ce.y + Number(be.v || 0) * ce.h
      }));
    }
    const te = A.map((ce) => S(j(ce))).filter(Boolean);
    return te.every((ce) => Number(ce.z || 0) > 0) ? te.map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) })) : [];
  }
  function G(A, te = null) {
    if (!Array.isArray(A) || A.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = $();
      return A.map((ve) => {
        const C = (Number(ve.u || 0) % 1 + 1) % 1, le = te == null ? C : Number(te || 0) + u(C, te);
        return {
          x: be.x + le * be.w,
          y: be.y + Number(ve.v || 0) * be.h
        };
      });
    }
    const ce = A.map((be) => S(j(be))).filter(Boolean);
    return ce.every((be) => Number(be.z || 0) > 0) ? ce.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function E(A, te = 160) {
    if (!Array.isArray(A) || A.length < 3) return !1;
    for (let ce = 0; ce < A.length; ce += 1) {
      const be = A[ce], ve = A[(ce + 1) % A.length];
      if (!be || !ve || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(ve.x) || !Number.isFinite(ve.y) || Math.hypot(Number(ve.x) - Number(be.x), Number(ve.y) - Number(be.y)) > te) return !1;
    }
    return !0;
  }
  function W(A, te, ce) {
    if (!Array.isArray(A) || A.length < 3 || !te || !ce) return [];
    const be = [];
    for (const ve of A) {
      const C = j(ve), le = re(te, C);
      if (!le) return [];
      be.push({
        x: Number(ce.x || 0) + Number(le.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(le.y || 0) * Number(ce.h || 0)
      });
    }
    return E(be, Math.max(80, Math.max(ce.w, ce.h) * 0.75)) ? be : [];
  }
  function R(A, te, ce) {
    if (!Array.isArray(A) || A.length < 1 || !te || !ce) return [];
    const be = [];
    for (const ve of A) {
      const C = j(ve), le = re(te, C);
      le && be.push({
        x: Number(ce.x || 0) + Number(le.x || 0) * Number(ce.w || 0),
        y: Number(ce.y || 0) + Number(le.y || 0) * Number(ce.h || 0)
      });
    }
    return be;
  }
  function J(A) {
    const te = r.getBoundingClientRect();
    return {
      x: (A.clientX - te.left) / te.width * r.width,
      y: (A.clientY - te.top) / te.height * r.height
    };
  }
  function ue(A) {
    const te = r.getBoundingClientRect();
    return {
      x: Number(A.clientX) - Number(te.left || 0),
      y: Number(A.clientY) - Number(te.top || 0)
    };
  }
  function Se(A, te = performance.now()) {
    if (n.mode === "unwrap") {
      const C = $(), le = (A.x - C.x) / Math.max(1, C.w), v = (A.y - C.y) / Math.max(1, C.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Ie(v, 0, 1),
        t: Number(te || 0)
      };
    }
    const ce = X(A.x, A.y), { lon: be, lat: ve } = B(ce);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - ve / Math.PI, 0, 1),
      t: Number(te || 0)
    };
  }
  function ee(A, te, ce = performance.now()) {
    const be = l(te);
    if (!be) return null;
    const ve = {
      x: (Number(A.x) - be.x) / Math.max(1, be.w),
      y: (Number(A.y) - be.y) / Math.max(1, be.h)
    };
    if (ve.x < 0 || ve.x > 1 || ve.y < 0 || ve.y > 1) return null;
    const C = ne(te, ve);
    if (!C) return null;
    const { lon: le, lat: v } = B(C);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - v / Math.PI, 0, 1),
      t: Number(ce || 0)
    };
  }
  return {
    connect(A) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = A);
    },
    isErpCamera: g,
    currentViewCamera: m,
    currentViewProjection: h,
    projectDir: S,
    screenToWorldDir: X,
    getUnwrapRect: $,
    projectDirUnwrap: F,
    getStickerFrame: Y,
    stickerDirFromFrame: H,
    stickerCornersDir: K,
    stickerSampleDir: Q,
    stickerCornerOrderSanity: k,
    projectEditorPoints: D,
    projectErpPointToEditor: oe,
    frameLocalPointToWorldDir: ne,
    erpPointToWorldDir: j,
    worldDirToFrameLocalPoint: re,
    projectLassoPointsToCurrentView: L,
    projectErpLassoPointsToFrameRect: W,
    screenPos: J,
    screenPosCss: ue,
    screenPosToErpPoint: Se,
    screenPosToFrameAsErpPoint: ee,
    deviceRect: fe
  };
}
function MN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R;
  function J(C, le) {
    const v = String(C.actionGroupId || C.id || "").trim(), b = $(v, C.layerKind), O = a(v, C.layerKind, b), _ = (O == null ? void 0 : O.centerUv) || X(v, C.layerKind, b), z = n.mode === "unwrap" ? Number((_ == null ? void 0 : _.u) || 0) : null, x = [], V = n.mode === "frame" ? l() : null, w = V ? u(V) : null;
    for (const de of b) {
      const ye = (de == null ? void 0 : de.geometry) || null, y = (ye == null ? void 0 : ye.geometryKind) === "lasso_fill" ? ye == null ? void 0 : ye.points : (ye == null ? void 0 : ye.processedPoints) || (ye == null ? void 0 : ye.rawPoints) || (ye == null ? void 0 : ye.points) || [], p = j(y, V, w, z).filter((M) => Number.isFinite(M == null ? void 0 : M.x) && Number.isFinite(M == null ? void 0 : M.y));
      if (!p.length) continue;
      const T = c(String((de == null ? void 0 : de.toolKind) || "pen")), P = Pn[T] || Pn[Er];
      x.push({
        points: p,
        closed: String((ye == null ? void 0 : ye.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((de == null ? void 0 : de.size) || 10) * Math.max(0.1, Number((P == null ? void 0 : P.sizeScale) ?? 1)) + 10),
        layerKind: String((de == null ? void 0 : de.layerKind) || C.layerKind || "paint")
      });
    }
    const N = re(_, null, V, w, z);
    if (!N) {
      const de = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, de), de;
    }
    const q = d(O).map((de) => re(de, N.x, V, w, z)).filter((de) => Number.isFinite(de == null ? void 0 : de.x) && Number.isFinite(de == null ? void 0 : de.y)).map((de) => ({ x: Number(de.x || 0), y: Number(de.y || 0) }));
    if (q.length < 4) {
      const de = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, de), de;
    }
    const se = (de, ye) => ({
      x: (Number((de == null ? void 0 : de.x) || 0) + Number((ye == null ? void 0 : ye.x) || 0)) * 0.5,
      y: (Number((de == null ? void 0 : de.y) || 0) + Number((ye == null ? void 0 : ye.y) || 0)) * 0.5,
      a: de,
      b: ye
    }), me = se(q[0], q[1]), Z = se(q[1], q[2]), he = se(q[2], q[3]), we = se(q[3], q[0]), Pe = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: q,
      edgeMidpoints: [
        { edge: "top", ...me },
        { edge: "right", ...Z },
        { edge: "bottom", ...he },
        { edge: "left", ...we }
      ],
      rotateStemBase: { x: me.x, y: me.y },
      rotateHandle: { x: me.x, y: me.y - 30 },
      strokePaths: x,
      visible: !0
    };
    return n._strokeGeomCache.set(le, Pe), Pe;
  }
  function ue(C, le) {
    const v = n.mode === "frame" ? l() : null, b = v ? u(v) : null, O = f(C), _ = n.mode === "unwrap" ? Number((O == null ? void 0 : O.u) || 0) : null, z = re(O, null, v, b, _), V = k(C).map((q) => re(q, (z == null ? void 0 : z.x) ?? null, v, b, _)).filter((q) => Number.isFinite(q == null ? void 0 : q.x) && Number.isFinite(q == null ? void 0 : q.y));
    if (!Array.isArray(V) || V.length < 4) {
      const q = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(le, q), q;
    }
    const w = V.slice(0, 4).map((q) => ({ x: Number((q == null ? void 0 : q.x) || 0), y: Number((q == null ? void 0 : q.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: w.reduce((q, se) => q + Number(se.x || 0), 0) / w.length,
        y: w.reduce((q, se) => q + Number(se.y || 0), 0) / w.length
      },
      corners: w,
      visible: !0
    };
    return n._strokeGeomCache.set(le, I), I;
  }
  function Se(C, le = null, v = null, b = null, O = {}) {
    if (n.mode === "frame") {
      const N = v || l(), I = b || u(N);
      if (!N || !I) return null;
      const q = N ? R(N, C) : null;
      return q ? {
        x: Number(I.x || 0) + Number(q.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(q.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ne(C, le);
    const _ = 1e-4, z = o().project(C, _);
    if (!Number.isFinite(z.z) || z.z <= _ && !(O != null && O.clipBehind)) return null;
    const x = r.width, V = r.height, w = Math.max(x, V) * 2;
    return {
      x: Ie(z.x, -w, x + w),
      y: Ie(z.y, -w, V + w),
      z: Math.max(z.z, _),
      rawZ: z.z,
      clipped: z.z <= _
    };
  }
  function ee(C, le = []) {
    if (n.mode !== "pano" || K(C)) return 1;
    const v = le.map((b) => Number((b == null ? void 0 : b.rawZ) ?? (b == null ? void 0 : b.z))).filter((b) => Number.isFinite(b));
    return v.length ? KP(0.035, 0.2, Math.min(...v)) : 1;
  }
  function A(C) {
    if (Y(C) && !L(C)) return { visible: !1 };
    const le = D(C), v = Nn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), b = n.mode === "frame" ? l() : null, O = b ? u(b) : null, _ = n.mode === "pano" && (K(C) || H(C)), z = _ ? { clipBehind: !0 } : null, x = Se(v, null, b, O, z);
    if (!x) return { visible: !1 };
    const V = h(C), N = G(C).map((ie) => Se(ie, x.x, b, O, z)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y));
    if (N.length < 4) return { visible: !1 };
    const I = E(V, 0, V.tanY), q = E(V, 0, V.tanY + Math.max(V.tanY * 0.43, 0.053)), se = Se(I, x.x, b, O, z);
    if (!se) return { visible: !1 };
    const me = Se(q, (se == null ? void 0 : se.x) ?? x.x, b, O, z), Z = ((me == null ? void 0 : me.x) ?? se.x) - se.x, he = ((me == null ? void 0 : me.y) ?? se.y) - se.y, we = Math.hypot(Z, he) || 1, Pe = {
      x: se.x + Z / we * 30,
      y: se.y + he / we * 30
    }, de = Se(E(V, 0, V.tanY), x.x, b, O, z), ye = Se(E(V, V.tanX, 0), x.x, b, O, z), y = Se(E(V, 0, -V.tanY), x.x, b, O, z), p = Se(E(V, -V.tanX, 0), x.x, b, O, z);
    if (!de || !ye || !y || !p) return { visible: !1 };
    const T = [
      x,
      ...N,
      se,
      me,
      de,
      ye,
      y,
      p
    ];
    if (_ && !T.some((ie) => Number((ie == null ? void 0 : ie.rawZ) ?? (ie == null ? void 0 : ie.z)) > 1e-4)) return { visible: !1 };
    const P = ee(C, T), M = [
      {
        edge: "top",
        x: de.x,
        y: de.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: ye.x,
        y: ye.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: y.x,
        y: y.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: x.x, y: x.y },
      corners: N.map((ie) => ({ x: ie.x, y: ie.y })),
      edgeMidpoints: M,
      rotateStemBase: { x: se.x, y: se.y },
      rotateHandle: Pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: P,
      visible: !0
    };
  }
  function te(C) {
    if (t && H(C) && B()) return { visible: !1 };
    if (!fe() && (Q(C) || F(C))) return { visible: !1 };
    if (Q(C)) {
      const O = String(C.actionGroupId || C.id || "").trim(), _ = S(O, C.layerKind), z = n._strokeGeomCache.get(_);
      return z || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), J(C, _));
    }
    if (F(C)) {
      const O = g(C), _ = n._strokeGeomCache.get(O);
      return _ || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ue(C, O));
    }
    const le = m(C), v = n._strokeGeomCache.get(le);
    if (v) return v;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const b = A(C);
    return n._strokeGeomCache.set(le, b), b;
  }
  function ce(C, le, v, b = null) {
    const O = [];
    for (let _ = 0; _ <= v; _ += 1) {
      const z = _ / v;
      let x = 0, V = 0;
      le === 0 ? (x = z, V = 0) : le === 1 ? (x = 1, V = z) : le === 2 ? (x = 1 - z, V = 1) : (x = 0, V = 1 - z);
      const w = W(C, x, V), N = n.mode === "unwrap" ? ne(w, b) : oe(w);
      N && O.push(N);
    }
    return O;
  }
  function be() {
    const C = [...Array.isArray(i.shots) ? i.shots : []], le = [...s()].sort((v, b) => Number(v.z_index || 0) - Number(b.z_index || 0));
    return [...C, ...le];
  }
  function ve() {
    const C = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((v, b) => Number(b.z_index || 0) - Number(v.z_index || 0)), ...C];
  }
  return {
    connect(C) {
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
        getStrokeGeomCacheKey: S,
        getStrokeGroupCenterUv: X,
        getStrokeGroupStrokes: $,
        isFreeSpaceView: B,
        isRasterObjectItem: F,
        isSceneSticker: Y,
        isShotItem: H,
        isStickerItem: K,
        isStrokeGroupItem: Q,
        paintingShown: fe,
        poseOf: D,
        projectDir: oe,
        projectDirUnwrap: ne,
        projectEditorPoints: j,
        projectErpPointToEditor: re,
        sceneStickerShown: L,
        stickerCornersDir: G,
        stickerDirFromFrame: E,
        stickerSampleDir: W,
        worldDirToFrameLocalPoint: R
      } = C);
    },
    projectSceneItemDir: Se,
    objectGeom: te,
    sampleStickerEdge: ce,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: ve
  };
}
const oa = /* @__PURE__ */ new Map();
function PN(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D;
  function oe(_ = r.interaction) {
    const z = String((_ == null ? void 0 : _.kind) || "");
    if (z === "paint_stroke" || z === "paint_lasso_fill" || z === "move_stroke_group" || z === "scale_stroke_group" || z === "rotate_stroke_group" || z === "move_raster_object" || z === "scale_raster_object") return !0;
    if (z === "move_multi") {
      const x = Array.isArray(_ == null ? void 0 : _.strokeSnapshots) && _.strokeSnapshots.length > 0, V = Array.isArray(_ == null ? void 0 : _.rasterSnapshots) && _.rasterSnapshots.length > 0;
      return x || V;
    }
    return !1;
  }
  function ne() {
    var z, x, V, w;
    let _ = null;
    try {
      const N = m(), I = ((w = (V = (x = (z = r.paintEngine) == null ? void 0 : z.getErpTarget) == null ? void 0 : x.call(z, N)) == null ? void 0 : V.displayPaint) == null ? void 0 : w.canvas) || null;
      I && (_ = {
        source: I,
        revision: `${h()}:${j()}`
      });
    } catch {
      _ = null;
    }
    return _;
  }
  function j() {
    var w, N, I, q, se, me, Z;
    const _ = r.interaction, z = String((_ == null ? void 0 : _.kind) || "");
    if (!oe(_)) return "";
    if (z === "paint_stroke" || z === "paint_lasso_fill") {
      const he = ((w = _ == null ? void 0 : _.stroke) == null ? void 0 : w.geometry) || null, we = String(((N = _ == null ? void 0 : _.stroke) == null ? void 0 : N.layerKind) || ""), Pe = ((I = he == null ? void 0 : he.rawPoints) == null ? void 0 : I.length) ?? ((q = he == null ? void 0 : he.points) == null ? void 0 : q.length) ?? 0, de = String((_ == null ? void 0 : _._livePreviewToken) || "");
      return `_${we || "paint"}_${z}_live${de}_${Pe}_${r.livePaintInteractionRevision}`;
    }
    const x = String(((se = _ == null ? void 0 : _.item) == null ? void 0 : se.actionGroupId) || ""), V = String(((me = _ == null ? void 0 : _.item) == null ? void 0 : me.rasterObjectId) || ((Z = _ == null ? void 0 : _.item) == null ? void 0 : Z.id) || "");
    return `_${z}_${x || V || "active"}_${r.livePaintInteractionRevision}`;
  }
  function re(_, z = null) {
    const x = String((_ == null ? void 0 : _.rasterDataUrl) || "").trim();
    if (!x) return null;
    const V = s.get(x);
    if (V)
      return V.complete || V.width || V.naturalWidth, V;
    const w = new Image();
    return w.onload = () => {
      typeof z == "function" && z();
    }, w.src = x, s.set(x, w), w;
  }
  function L(_) {
    const z = String((_ == null ? void 0 : _.rasterDataUrl) || "").trim();
    if (!z) return null;
    const x = o.get(z);
    if (x) return x.ready ? x : null;
    const V = re(_, () => {
      const Z = o.get(z);
      Z && (Z.ready = !1), Q({ localOnly: !0 });
    });
    if (!V || !(V.complete || V.width || V.naturalWidth)) return null;
    const w = Number(V.naturalWidth || V.width || 0), N = Number(V.naturalHeight || V.height || 0);
    if (w < 1 || N < 1) return null;
    const I = nn({ label: "editor.image-pixels" });
    I.width = w, I.height = N;
    const q = I.getContext("2d", { willReadFrequently: !0 });
    if (!q) return null;
    q.clearRect(0, 0, w, N), q.drawImage(V, 0, 0, w, N);
    const se = q.getImageData(0, 0, w, N).data, me = { canvas: I, width: w, height: N, alpha: se, ready: !0 };
    return o.set(z, me), me;
  }
  function G(_, z) {
    if (!_ || !z) return null;
    const x = (_ == null ? void 0 : _.bbox) || null;
    if (!x) return null;
    const V = (_ == null ? void 0 : _.transform) || {}, w = {
      u: (Number(x.u0 || 0) + Number(x.u1 || 0)) * 0.5,
      v: (Number(x.v0 || 0) + Number(x.v1 || 0)) * 0.5
    }, N = {
      u: ((Number(z.u || 0) - Number(V.du || 0)) % 1 + 1) % 1,
      v: Number(z.v || 0) - Number(V.dv || 0)
    }, I = $(
      N,
      w,
      Number(V.scale || 1),
      Number(V.rot_deg || 0)
    ), q = Number(x.u1 || 0) - Number(x.u0 || 0), se = Number(x.v1 || 0) - Number(x.v0 || 0);
    if (!(q > 1e-6) || !(se > 1e-6)) return null;
    const me = D(Number(I.u || 0), Number(x.u0 || 0)) / q, Z = (Number(I.v || 0) - Number(x.v0 || 0)) / se;
    if (me < 0 || me > 1 || Z < 0 || Z > 1) return 0;
    const he = L(_);
    if (!he) return null;
    const we = Ie(Math.floor(me * he.width), 0, he.width - 1), Pe = Ie(Math.floor(Z * he.height), 0, he.height - 1);
    return Number(he.alpha[(Pe * he.width + we) * 4 + 3] || 0);
  }
  function E(_, z, x, V = null) {
    if (!(z != null && z.visible) || !Jr(x, z.corners)) return !1;
    const w = V || fe(x, performance.now()), N = G(_, w);
    return N === null ? !0 : N > 8;
  }
  function W() {
    var V, w, N, I, q, se, me, Z;
    const _ = ((w = (V = r.paintEngine) == null ? void 0 : V.getErpTarget) == null ? void 0 : w.call(V, m(!1))) || null, z = Math.max(1, Number(((N = _ == null ? void 0 : _.descriptor) == null ? void 0 : N.width) || ((q = (I = _ == null ? void 0 : _.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : q.width) || 2048)), x = Math.max(1, Number(((se = _ == null ? void 0 : _.descriptor) == null ? void 0 : se.height) || ((Z = (me = _ == null ? void 0 : _.displayPaint) == null ? void 0 : me.canvas) == null ? void 0 : Z.height) || 1024));
    return { width: z, height: x };
  }
  function R() {
    var Pe, de, ye;
    const _ = r.interaction;
    if ((_ == null ? void 0 : _.kind) !== "paint_stroke") return null;
    const z = (_ == null ? void 0 : _.stroke) || null;
    if (!z || String((z == null ? void 0 : z.layerKind) || "") !== "paint" || String((z == null ? void 0 : z.toolKind) || "") !== "eraser") return null;
    const x = u(), V = `${j()}:${x.width}:${x.height}`;
    if (((Pe = r._activePaintEraserPreviewInfo) == null ? void 0 : Pe.cacheKey) === V)
      return r._activePaintEraserPreviewInfo.value || null;
    const w = dn(z), N = (w == null ? void 0 : w.geometry) || null;
    if (N && String(N.geometryKind || "") !== "lasso_fill") {
      const y = Array.isArray(N.rawPoints) && N.rawPoints.length ? N.rawPoints : Array.isArray(N.points) ? N.points : [];
      N.processedPoints = Y(y, w.targetSpace, !0);
    }
    const I = c(x.width, x.height, { readback: !0 });
    if (!H(I, w, { w: x.width, h: x.height })) return null;
    const q = ((ye = (de = I.ctx) == null ? void 0 : de.getImageData(0, 0, x.width, x.height)) == null ? void 0 : ye.data) || null;
    if (!q) return null;
    let se = x.width, me = x.height, Z = -1, he = -1;
    for (let y = 0; y < x.height; y += 1)
      for (let p = 0; p < x.width; p += 1)
        q[(y * x.width + p) * 4 + 3] <= 8 || (p < se && (se = p), y < me && (me = y), p > Z && (Z = p), y > he && (he = y));
    if (Z < se || he < me)
      return r._activePaintEraserPreviewInfo = { cacheKey: V, value: null }, null;
    const we = {
      surface: I,
      bounds: { minX: se, minY: me, maxX: Z, maxY: he },
      key: `${V}:${se}:${me}:${Z}:${he}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: V, value: we }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), we;
  }
  function J() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function ue(_, z, x) {
    var V, w;
    if (!_) return null;
    if (_.type === "rasterObject" && ((V = _.item) != null && V.bbox)) {
      const N = _.item.bbox, I = ((w = _.item) == null ? void 0 : w.transform) || {}, q = Number(N.u0 || 0) + Number(I.du || 0), se = Number(N.u1 || 0) + Number(I.du || 0), me = Number(N.v0 || 0) + Number(I.dv || 0), Z = Number(N.v1 || 0) + Number(I.dv || 0);
      return {
        minX: Math.floor((q % 1 + 1) % 1 * z),
        maxX: Math.ceil((se % 1 + 1) % 1 * z),
        minY: Math.floor(Ie(me, 0, 1) * x),
        maxY: Math.ceil(Ie(Z, 0, 1) * x),
        wraps: se - q >= 1 || q < 0 || se > 1
      };
    }
    if (_.type === "strokeGroup") {
      const N = X(_.actionGroupId, "paint"), I = d(_.actionGroupId, "paint", N);
      if (!I) return null;
      const q = I.centerUv.u - I.halfW, se = I.centerUv.u + I.halfW, me = I.centerUv.v - I.halfH, Z = I.centerUv.v + I.halfH;
      return {
        minX: Math.floor((q % 1 + 1) % 1 * z),
        maxX: Math.ceil((se % 1 + 1) % 1 * z),
        minY: Math.floor(Ie(me, 0, 1) * x),
        maxY: Math.ceil(Ie(Z, 0, 1) * x),
        wraps: se - q >= 1 || q < 0 || se > 1
      };
    }
    return null;
  }
  function Se(_, z, x) {
    if (!_ || !z) return !1;
    const V = (I) => I.wraps ? [
      { minX: 0, maxX: I.maxX, minY: I.minY, maxY: I.maxY, wraps: !1 },
      { minX: I.minX, maxX: x - 1, minY: I.minY, maxY: I.maxY, wraps: !1 }
    ] : [I], w = V(_), N = V(z);
    return w.some((I) => N.some((q) => !(I.maxX < q.minX || q.maxX < I.minX || I.maxY < q.minY || q.maxY < I.minY)));
  }
  function ee(_, z, x) {
    var M, ie, ge, U, ae, Ne, _e;
    if (!_ || !z || !((M = x == null ? void 0 : x.surface) != null && M.canvas) || z.type !== "rasterObject") return _;
    const V = Number(_.width || x.surface.canvas.width || 0), w = Number(_.height || x.surface.canvas.height || 0);
    if (V < 1 || w < 1) return _;
    const N = ue(z, V, w);
    if (N && !Se(N, x.bounds, V)) return _;
    const I = String(((ie = z.item) == null ? void 0 : ie.id) || z.id || ""), q = ((ge = z.item) == null ? void 0 : ge.transform) || {}, se = `${x.key}:${I}:${V}:${w}:${Number(q.du || 0).toFixed(6)}:${Number(q.dv || 0).toFixed(6)}:${Number(q.rot_deg || 0).toFixed(3)}:${Number(q.scale || 1).toFixed(4)}`, me = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (me.has(se)) return me.get(se);
    const Z = Ie(Math.floor(Number(((U = x.bounds) == null ? void 0 : U.minX) || 0)), 0, Math.max(0, V - 1)), he = Ie(Math.floor(Number(((ae = x.bounds) == null ? void 0 : ae.minY) || 0)), 0, Math.max(0, w - 1)), we = Ie(Math.ceil(Number(((Ne = x.bounds) == null ? void 0 : Ne.maxX) || 0)), Z, Math.max(0, V - 1)), Pe = Ie(Math.ceil(Number(((_e = x.bounds) == null ? void 0 : _e.maxY) || 0)), he, Math.max(0, w - 1)), de = Math.max(1, we - Z + 1), ye = Math.max(1, Pe - he + 1), y = c(V, w, { readback: !0 });
    y.ctx.clearRect(0, 0, V, w), y.ctx.drawImage(_, 0, 0);
    const p = y.ctx.getImageData(Z, he, de, ye);
    y.ctx.save(), y.ctx.globalCompositeOperation = "destination-out", y.ctx.drawImage(x.surface.canvas, 0, 0), y.ctx.restore();
    const T = y.ctx.getImageData(Z, he, de, ye);
    let P = !1;
    for (let Me = 0; Me < de * ye; Me += 1) {
      const De = p.data[Me * 4 + 3], Le = T.data[Me * 4 + 3];
      if (De > Le) {
        P = !0;
        break;
      }
    }
    return P ? (me.size > 64 && me.clear(), me.set(se, y.canvas), y.canvas) : (me.set(se, _), _);
  }
  function A(_, z = null) {
    const x = F((_ == null ? void 0 : _.rasterObjectId) || (_ == null ? void 0 : _.id) || ""), V = (_ == null ? void 0 : _.bbox) || null;
    if (!x || !V) return null;
    const w = re(_, z);
    if (!w || !(w.complete || w.width || w.naturalWidth)) return null;
    const { width: N, height: I } = W(), q = (_ == null ? void 0 : _.transform) || {}, se = [
      x,
      N,
      I,
      V.u0,
      V.v0,
      V.u1,
      V.v1,
      q.du,
      q.dv,
      q.rot_deg,
      q.scale,
      S()
    ].join(":"), me = i.get(se);
    if (me) return me;
    i.size > 64 && i.clear();
    const Z = nn({ label: "editor.raster-erp" });
    Z.width = N, Z.height = I;
    const he = Z.getContext("2d");
    return he ? (Ug(he, w, _, N, I), i.set(se, Z), Z) : null;
  }
  async function te(_, z) {
    const x = await new Promise((q) => _.toBlob(q, "image/png")), V = new FormData();
    V.append("image", x, z), V.append("type", "input"), V.append("subfolder", "panorama_stickers"), V.append("overwrite", "1");
    const w = await t.fetchApi("/upload/image", { method: "POST", body: V });
    if (!w || w.status !== 200) throw new Error(`upload failed (${w == null ? void 0 : w.status})`);
    const N = await w.json(), I = String((N == null ? void 0 : N.name) || "").trim();
    if (!I) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: I,
      subfolder: String((N == null ? void 0 : N.subfolder) || "panorama_stickers"),
      storage: String((N == null ? void 0 : N.type) || "input")
    };
  }
  let ce = null, be = !1;
  function ve() {
    const _ = hp(a.painting), { width: z, height: x } = f();
    return bv(a.painting_layer, { paintCount: _.totalPaintCount, maskCount: _.totalMaskCount, width: z, height: x, nodeId: String(n.id ?? "0") });
  }
  function C() {
    const _ = String(n.id ?? "0"), z = oa.get(_);
    if (be && z) return z;
    const x = (async () => {
      var N, I, q, se, me, Z, he, we, Pe, de, ye, y;
      const V = h(), w = hp(a.painting);
      if (w.totalPaintCount <= 0 && w.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ce = V, l());
        return;
      }
      if (ce !== V && !be) {
        be = !0;
        try {
          K();
          const p = m(!1), T = ((I = (N = r.paintEngine) == null ? void 0 : N.getErpTarget) == null ? void 0 : I.call(N, p)) || null, P = ((q = T == null ? void 0 : T.displayPaint) == null ? void 0 : q.canvas) || null, M = ((se = T == null ? void 0 : T.committedMask) == null ? void 0 : se.canvas) || null, ie = Math.max(1, Number(((me = T == null ? void 0 : T.descriptor) == null ? void 0 : me.width) || (P == null ? void 0 : P.width) || (M == null ? void 0 : M.width) || 2048)), ge = Math.max(1, Number(((Z = T == null ? void 0 : T.descriptor) == null ? void 0 : Z.height) || (P == null ? void 0 : P.height) || (M == null ? void 0 : M.height) || 1024));
          (!P && w.totalPaintCount > 0 || !M && w.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((he = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : he.width) || 0) !== ie || Number(((we = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : we.height) || 0) !== ge) && (r._paintLayerSyncBlankSurface = c(ie, ge)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, ie, ge));
          const U = P || w.totalPaintCount > 0 && ((Pe = r._paintLayerSyncBlankSurface) == null ? void 0 : Pe.canvas) || null, ae = M || w.totalMaskCount > 0 && ((de = r._paintLayerSyncBlankSurface) == null ? void 0 : de.canvas) || null;
          if (!U && !ae) return;
          let Ne = null, _e = null;
          const Me = [];
          if (w.totalPaintCount > 0) {
            Ne = await te(U, `pano_paint_${_}.png`);
            for (const De of p) {
              const Le = String(De || "").trim();
              if (!Le) continue;
              const Ge = ((y = (ye = r.paintEngine) == null ? void 0 : ye.getGroupDisplayCanvas) == null ? void 0 : y.call(ye, Le)) || null;
              if (!Ge) continue;
              const Xe = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ve = await te(Ge, `pano_group_${_}_${Xe}.png`);
              Ve && Me.push({
                id: Le,
                actionGroupId: Le,
                image: Ve
              });
            }
          }
          w.totalMaskCount > 0 && (_e = await te(ae, `pano_mask_${_}.png`)), V === h() && (a.painting_layer = {
            paint: Ne,
            mask: _e,
            groups: Me,
            revision: V
          }, ce = V, l());
        } catch (p) {
          throw p;
        } finally {
          be = !1;
        }
      }
    })();
    return oa.set(_, x), x.finally(() => {
      oa.get(_) === x && oa.delete(_);
    }), x;
  }
  function le(_) {
    var I;
    const z = ((I = r.paintEngine) == null ? void 0 : I.getMaskDisplayCanvas()) || null;
    if (!z) return _;
    const x = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, V = _.reduce((q, se) => Math.max(q, Number((se == null ? void 0 : se.zIndex) || 0)), -1), w = (Array.isArray(a.stickers) ? a.stickers : []).reduce((q, se) => Math.max(q, Number((se == null ? void 0 : se.z_index) || 0)), -1), N = Math.max(V, w);
    return _.push({
      id: "mask_display",
      source: z,
      revision: x,
      zIndex: N + 1,
      opacity: 1,
      visible: !0
    }), _;
  }
  function v() {
    var V, w;
    const _ = k(!0), z = R(), x = [];
    for (const N of _) {
      if ((N == null ? void 0 : N.type) === "strokeGroup") {
        const I = String(N.actionGroupId || N.id || "");
        if (!I) continue;
        const q = ((w = (V = r.paintEngine) == null ? void 0 : V.getGroupDisplayCanvas) == null ? void 0 : w.call(V, I)) || null;
        if (!q) continue;
        x.push({
          id: `paint_group:${I}`,
          source: q,
          revision: `${g()}:${I}`,
          zIndex: Number((N == null ? void 0 : N.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((N == null ? void 0 : N.type) === "rasterObject") {
        const I = N.item || null, q = F((I == null ? void 0 : I.id) || N.id || "");
        if (!q) continue;
        const se = A(I, () => Q());
        if (!se) continue;
        const me = ee(se, N, z), Z = (I == null ? void 0 : I.transform) || {};
        x.push({
          id: `raster:${q}`,
          source: me,
          revision: [
            h(),
            (z == null ? void 0 : z.key) || "",
            q,
            Number(Z.du || 0).toFixed(6),
            Number(Z.dv || 0).toFixed(6),
            Number(Z.rot_deg || 0).toFixed(3),
            Number(Z.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((N == null ? void 0 : N.z_index) || 0),
          opacity: 1,
          visible: (I == null ? void 0 : I.visible) !== !1
        });
      }
    }
    return le(x);
  }
  function b() {
    return B() ? v().filter((_) => _.visible !== !1).map((_) => ({ id: _.id, media: _.source, revision: _.revision, opacity: _.opacity, zIndex: _.zIndex })) : [];
  }
  function O() {
    a.painting_layer !== null && (a.painting_layer = null), ce = "";
  }
  return {
    connect(_) {
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
        getPaintingRevisionKey: S,
        getStrokeGroupStrokes: X,
        inverseTransformErpPointAround: $,
        paintingShown: B,
        parseRasterObjectSelectionId: F,
        processFreehandPoints: Y,
        rasterizeStrokeToSurface: H,
        rebuildPaintEngineIfNeeded: K,
        requestDraw: Q,
        screenPosToErpPoint: fe,
        shortestWrappedDelta: D
      } = _);
    },
    getSharedLivePaintSurface: ne,
    getLivePaintRevisionSuffix: j,
    isPaintCompositeInteraction: oe,
    hitRasterObjectAt: E,
    invalidateLivePaintPreviewCaches: J,
    buildRasterObjectEditCanvas: A,
    needsPaintingLayerSync: ve,
    syncPaintingLayerAsync: C,
    invalidatePaintingLayerState: O,
    buildEditorViewPaintLayers: b
  };
}
function NN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(ee) {
    return !ee || typeof ee != "object" ? { x: 0, y: 0 } : { x: Number((ee == null ? void 0 : ee.u) || 0), y: Number((ee == null ? void 0 : ee.v) || 0) };
  }
  function c(ee, A, te, ce = {}) {
    return { ...{
      ...ee,
      t: Number((ee == null ? void 0 : ee.t) || 0),
      widthScale: f(ee, "widthScale", 1),
      pressureLike: f(ee, "pressureLike", 1)
    }, ...ce, u: A, v: te };
  }
  function d(ee, A = !1) {
    return A ? 12e-4 : 18e-4;
  }
  function u(ee, A, te = !1) {
    if (!Array.isArray(ee) || !ee.length) return [];
    const ce = String((A == null ? void 0 : A.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ce) {
      let w = null;
      ee.forEach((N) => {
        const I = Number((N == null ? void 0 : N.u) || 0), q = Number((N == null ? void 0 : N.v) || 0), se = (I % 1 + 1) % 1, me = w == null ? se : w + a(se, (w % 1 + 1) % 1);
        be.set(N, { x: me, y: q }), w = me;
      });
    }
    const ve = (w) => !w || typeof w != "object" ? { x: 0, y: 0 } : be.get(w) || l(w), C = (w, N, I, q = {}) => {
      const se = ce ? (Number(N) % 1 + 1) % 1 : Number(N), me = c(w, se, I, q);
      return be.set(me, { x: Number(N), y: Number(I) }), me;
    }, le = (w, N, I) => {
      const q = ve(w), se = ve(N);
      return C(w, Gn(q.x, se.x, I), Gn(q.y, se.y, I), {
        t: Gn(Number((w == null ? void 0 : w.t) || 0), Number((N == null ? void 0 : N.t) || 0), I),
        widthScale: Gn(f(w, "widthScale", 1), f(N, "widthScale", 1), I),
        pressureLike: Gn(f(w, "pressureLike", 1), f(N, "pressureLike", 1), I)
      });
    };
    if (ee.length === 1) {
      const w = ve(ee[0]);
      return [C(ee[0], w.x, w.y)];
    }
    const v = d(A, te), b = (w, N) => {
      const I = [0];
      for (let de = 1; de < w.length; de += 1) {
        const ye = ve(w[de - 1]), y = ve(w[de]);
        I.push(I[de - 1] + Math.hypot(y.x - ye.x, y.y - ye.y));
      }
      const q = I[I.length - 1] || 0;
      if (q <= 1e-8) {
        const de = w[0], ye = ve(de);
        return [C(de, ye.x, ye.y)];
      }
      const se = [];
      let me = 0;
      for (let de = 0; de <= q + 1e-9; de += N) {
        for (; me < I.length - 2 && I[me + 1] < de; ) me += 1;
        const ye = I[me], y = I[me + 1], p = Math.max(1e-8, y - ye);
        se.push(le(w[me], w[me + 1], Ie((de - ye) / p, 0, 1)));
      }
      const Z = w[w.length - 1], he = ve(Z), we = se[se.length - 1], Pe = we ? ve(we) : null;
      return (!Pe || Math.hypot(Pe.x - he.x, Pe.y - he.y) > N * 0.35) && se.push(C(Z, he.x, he.y)), se;
    }, O = (w) => {
      if (!Array.isArray(w) || w.length < 3) return w ? w.slice() : [];
      const N = ve(w[0]), I = [C(w[0], N.x, N.y)];
      for (let me = 0; me < w.length - 1; me += 1) {
        const Z = w[me], he = w[me + 1], we = ve(Z), Pe = ve(he), de = C(
          Z,
          we.x * 0.75 + Pe.x * 0.25,
          we.y * 0.75 + Pe.y * 0.25,
          {
            t: Number(Z.t || 0) * 0.75 + Number(he.t || 0) * 0.25,
            widthScale: f(Z, "widthScale", 1) * 0.75 + f(he, "widthScale", 1) * 0.25,
            pressureLike: f(Z, "pressureLike", 1) * 0.75 + f(he, "pressureLike", 1) * 0.25
          }
        ), ye = C(
          Z,
          we.x * 0.25 + Pe.x * 0.75,
          we.y * 0.25 + Pe.y * 0.75,
          {
            t: Number(Z.t || 0) * 0.25 + Number(he.t || 0) * 0.75,
            widthScale: f(Z, "widthScale", 1) * 0.25 + f(he, "widthScale", 1) * 0.75,
            pressureLike: f(Z, "pressureLike", 1) * 0.25 + f(he, "pressureLike", 1) * 0.75
          }
        );
        I.push(de, ye);
      }
      const q = w[w.length - 1], se = ve(q);
      return I.push(C(q, se.x, se.y)), I;
    }, _ = b(ee, v);
    if (_.length < 3) return _;
    const z = te ? 2 : 1;
    let x = _.slice();
    for (let w = 0; w < z; w += 1) x = O(x);
    return b(x, Math.max(v * 0.75, 55e-5));
  }
  function f(ee, A, te = 1) {
    const ce = Number(ee == null ? void 0 : ee[A]);
    return Number.isFinite(ce) ? Math.max(0, ce) : te;
  }
  function g(ee) {
    const A = Number(ee == null ? void 0 : ee.radiusValue);
    if (Number.isFinite(A) && A > 0) {
      const te = String((ee == null ? void 0 : ee.radiusModel) || "").trim() || "erp_uv_norm";
      return te === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 / 2048)
      } : {
        model: te,
        value: A
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 / 2048)
    };
  }
  function k(ee, A, te = {}) {
    const ce = nn({ label: "editor.raster-surface" });
    ce.width = Math.max(1, Math.round(ee)), ce.height = Math.max(1, Math.round(A));
    const be = ce.getContext("2d", te.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ce.width, ce.height), be.imageSmoothingEnabled = !0), { canvas: ce, ctx: be };
  }
  function m() {
    const ee = fe();
    return `${String(t.paintStrokeRevision)}:${ee.width}x${ee.height}`;
  }
  function h() {
    const ee = fe();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${ee.width}x${ee.height}`;
  }
  function S() {
    const ee = i(), A = h();
    return ee ? `${A}:${ee}` : A;
  }
  function X() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function $() {
    t.paintCompositeRevision += 1;
  }
  function B() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function F() {
    var ee, A;
    t.paintEngineRevisionKey = null, (A = (ee = t.paintEngine) == null ? void 0 : ee.rebuildCommitted) == null || A.call(ee, n), t.paintEngineRevisionKey = m();
  }
  function Y() {
    B(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function H({ rebuildPaintEngine: ee = !1 } = {}) {
    o(), X(), Y(), ee && F();
  }
  function K() {
    o(), $(), Y();
  }
  function Q() {
    var ce;
    const ee = fe(), A = `${ee.width}x${ee.height}`;
    t.paintEngineDescriptorKey !== A && (t.paintEngine = bl(ee), t.paintEngineDescriptorKey = A, t.paintEngineRevisionKey = "");
    const te = m();
    t.paintEngineRevisionKey !== te && (t.paintEngineRevisionKey = te, (ce = t.paintEngine) == null || ce.rebuildCommitted(n));
  }
  function fe() {
    const ee = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: ee,
      height: Math.max(1, Math.round(ee * 0.5))
    };
  }
  function D() {
    return fe();
  }
  function oe(ee, A, te, ce, be = null) {
    const ve = g(ee), C = f(A, "widthScale", 1) * f(A, "pressureLike", 1);
    return ve.model === "erp_uv_norm" ? Math.max(0.5, ve.value * te * C) : ve.model === "world_angle" ? be ? Math.max(0.5, ve.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * Sr) * te * C) : Math.max(0.5, ve.value / (2 * Math.PI) * te * C) : Math.max(0.5, Number((ee == null ? void 0 : ee.size) || 10) * 0.5 * C);
  }
  function ne(ee, A, te = {}) {
    const ce = String((A == null ? void 0 : A.layerKind) || "paint"), be = String((A == null ? void 0 : A.toolKind) || "pen"), ve = te.preview === !0, C = ve ? 0.78 : 1;
    if (ee.globalAlpha = be === "marker" ? 0.7 * C : 1, ce === "mask") {
      ee.fillStyle = ve ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      ee.globalCompositeOperation = "destination-out", ee.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((A == null ? void 0 : A.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (A == null ? void 0 : A.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = ve ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    ee.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${v})`;
  }
  function j(ee, A, te) {
    const ce = Math.max(0.5, Math.min(te, Number((A == null ? void 0 : A.radiusPx) || 0.5)));
    !Number.isFinite(A == null ? void 0 : A.x) || !Number.isFinite(A == null ? void 0 : A.y) || !Number.isFinite(ce) || (ee.beginPath(), ee.arc(Number(A.x || 0), Number(A.y || 0), ce, 0, Math.PI * 2), ee.fill());
  }
  function re(ee, A, te, ce, be = {}) {
    if (!ee || !Array.isArray(A) || !A.length) return;
    const ve = Math.max(ce.w, ce.h) * 0.25;
    ee.save(), ne(ee, te, be);
    const C = (le) => j(ee, le, ve);
    if (A.length === 1) {
      C(A[0]), ee.restore();
      return;
    }
    for (let le = 0; le < A.length - 1; le += 1) {
      const v = A[le], b = A[le + 1];
      if (!v || !b) continue;
      const O = Number(v.x || 0), _ = Number(v.y || 0), z = Number(b.x || 0), x = Number(b.y || 0), V = Math.max(0.5, Math.min(ve, Number(v.radiusPx || 0.5))), w = Math.max(0.5, Math.min(ve, Number(b.radiusPx || 0.5)));
      if (!Number.isFinite(O) || !Number.isFinite(_) || !Number.isFinite(z) || !Number.isFinite(x) || !Number.isFinite(V) || !Number.isFinite(w)) continue;
      const N = z - O, I = x - _, q = Math.hypot(N, I);
      if (!Number.isFinite(q) || q < 1e-6) {
        C(v);
        continue;
      }
      if (q > Math.max(ce.w, ce.h) * 0.5) continue;
      const se = Math.max(0.5, Math.min(V, w)), me = Math.max(0.35, Math.min(se * 0.4, 2.25)), Z = Math.max(1, Math.ceil(q / me));
      for (let he = 0; he <= Z; he += 1) {
        const we = he / Z;
        C({
          x: Gn(O, z, we),
          y: Gn(_, x, we),
          radiusPx: Gn(V, w, we)
        });
      }
    }
    C(A[A.length - 1]), ee.restore();
  }
  function L(ee, A, te, ce) {
    re(ee, A, te, ce, { preview: !1 });
  }
  function G(ee, A, te, ce, be) {
    var le, v, b, O;
    if (!ee || !Array.isArray(A) || A.length < 3) return;
    const ve = "u", C = "v";
    if (ee.save(), String((te == null ? void 0 : te.layerKind) || "") === "mask")
      ee.fillStyle = "rgba(255,255,255,1)";
    else if (String((te == null ? void 0 : te.toolKind) || "") === "eraser")
      ee.globalCompositeOperation = "destination-out", ee.fillStyle = "rgba(0,0,0,1)";
    else {
      const _ = (te == null ? void 0 : te.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      ee.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${Number(_.a ?? 1)})`;
    }
    ee.beginPath(), ee.moveTo(Number(((le = A[0]) == null ? void 0 : le[ve]) || 0) * ce.w, Number(((v = A[0]) == null ? void 0 : v[C]) || 0) * ce.h);
    for (let _ = 1; _ < A.length; _ += 1)
      ee.lineTo(Number(((b = A[_]) == null ? void 0 : b[ve]) || 0) * ce.w, Number(((O = A[_]) == null ? void 0 : O[C]) || 0) * ce.h);
    ee.closePath(), ee.fill(), ee.restore();
  }
  function E(ee) {
    const A = (ee == null ? void 0 : ee.geometry) || null;
    return A ? String(A.geometryKind || "") === "lasso_fill" ? Array.isArray(A.points) ? A.points : [] : Array.isArray(A.processedPoints) && A.processedPoints.length ? A.processedPoints : Array.isArray(A.rawPoints) && A.rawPoints.length ? A.rawPoints : Array.isArray(A.points) ? A.points : [] : [];
  }
  function W(ee, A) {
    const te = E(ee);
    return !Array.isArray(te) || !te.length ? [] : te.map((ce) => ({
      x: Number((ce == null ? void 0 : ce.u) || 0) * Number((A == null ? void 0 : A.w) || 1),
      y: Number((ce == null ? void 0 : ce.v) || 0) * Number((A == null ? void 0 : A.h) || 1),
      radiusPx: oe(ee, ce, Number((A == null ? void 0 : A.w) || 1), Number((A == null ? void 0 : A.h) || 1))
    }));
  }
  function R(ee, A, te = null) {
    var le, v, b, O;
    if (!(ee != null && ee.ctx) || !A) return !1;
    const ce = te || { w: Number(((le = ee.canvas) == null ? void 0 : le.width) || 0), h: Number(((v = ee.canvas) == null ? void 0 : v.height) || 0) }, be = String((A == null ? void 0 : A.toolKind) || "") === "eraser" ? {
      ...A,
      layerKind: "mask",
      toolKind: String(((b = A == null ? void 0 : A.geometry) == null ? void 0 : b.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : A;
    if (String(((O = A == null ? void 0 : A.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill")
      return G(ee.ctx, E(be), be, ce), !0;
    const C = W(be, ce);
    return C.length ? (L(ee.ctx, C, be, ce), !0) : !1;
  }
  function J(ee, A, te, ce = 8) {
    const be = new Uint8Array(A * te), ve = [], C = new Int32Array(A * te), le = new Int32Array(A * te);
    for (let v = 0; v < te; v += 1)
      for (let b = 0; b < A; b += 1) {
        const O = v * A + b;
        if (be[O] || ee[O] <= ce) continue;
        let _ = 0, z = 0;
        C[z] = b, le[z] = v, z += 1, be[O] = 1;
        const x = [];
        let V = b, w = v, N = b, I = v;
        for (; _ < z; ) {
          const q = C[_], se = le[_];
          _ += 1, x.push({ x: q, y: se }), q < V && (V = q), se < w && (w = se), q > N && (N = q), se > I && (I = se);
          const me = [
            [(q - 1 + A) % A, se],
            [(q + 1) % A, se],
            [q, se - 1],
            [q, se + 1]
          ];
          for (const [Z, he] of me) {
            if (he < 0 || he >= te) continue;
            const we = he * A + Z;
            be[we] || ee[we] <= ce || (be[we] = 1, C[z] = Z, le[z] = he, z += 1);
          }
        }
        ve.push({ pixels: x, minX: V, minY: w, maxX: N, maxY: I });
      }
    return ve;
  }
  function ue(ee, A) {
    const te = [...new Set((Array.isArray(ee == null ? void 0 : ee.pixels) ? ee.pixels : []).map((v) => Number((v == null ? void 0 : v.x) || 0)).filter((v) => Number.isFinite(v)))].sort((v, b) => v - b);
    if (!te.length) return null;
    if (te.length === 1)
      return { startX: te[0], widthPx: 1 };
    let ce = -1, be = 0;
    for (let v = 0; v < te.length; v += 1) {
      const b = te[v], _ = (v === te.length - 1 ? te[0] + A : te[v + 1]) - b - 1;
      _ > ce && (ce = _, be = v);
    }
    const ve = (te[(be + 1) % te.length] + A) % A;
    let C = 1 / 0, le = -1 / 0;
    for (const v of te) {
      const b = (v - ve + A) % A;
      C = Math.min(C, b), le = Math.max(le, b);
    }
    return {
      startX: ve,
      widthPx: Math.max(1, le - C + 1)
    };
  }
  function Se(ee, A, te = {}) {
    var b;
    const ce = Number((ee == null ? void 0 : ee.width) || 0), be = Number((ee == null ? void 0 : ee.height) || 0), ve = (b = ee == null ? void 0 : ee.getContext) == null ? void 0 : b.call(ee, "2d");
    if (!ve || ce < 1 || be < 1) return [];
    const C = ve.getImageData(0, 0, ce, be), le = new Uint8Array(ce * be);
    for (let O = 0; O < le.length; O += 1) le[O] = C.data[O * 4 + 3];
    return J(le, ce, be, 8).map((O, _) => {
      const z = ue(O, ce);
      if (!z) return null;
      const x = Number(z.widthPx || 0), V = O.maxY - O.minY + 1, w = Number(z.startX || 0), N = nn({ label: "editor.lasso-fill" });
      N.width = x, N.height = V;
      const I = N.getContext("2d");
      if (!I) return null;
      const q = I.createImageData(x, V);
      return O.pixels.forEach(({ x: se, y: me }) => {
        const Z = (me * ce + se) * 4, he = (Number(se || 0) - w + ce) % ce, we = ((me - O.minY) * x + he) * 4;
        q.data[we + 0] = C.data[Z + 0], q.data[we + 1] = C.data[Z + 1], q.data[we + 2] = C.data[Z + 2], q.data[we + 3] = C.data[Z + 3];
      }), I.putImageData(q, 0, 0), {
        id: Bi("raster"),
        type: "raster_frozen",
        layerKind: A === "mask" ? "mask" : "paint",
        z_index: Number((te == null ? void 0 : te.z_index) || 0) + _ * 1e-3,
        locked: (te == null ? void 0 : te.locked) === !0,
        bbox: {
          u0: 0,
          v0: O.minY / be,
          u1: x / ce,
          v1: (O.maxY + 1) / be
        },
        rasterDataUrl: N.toDataURL("image/png"),
        transform: {
          du: w / ce,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(ee) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = ee);
    },
    processFreehandPoints: u,
    createRasterSurface: k,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: S,
    refreshPaintEngineRevisionCache: F,
    markObjectVisualsDirty: Y,
    markPaintStrokeVisualsDirty: H,
    markPaintCompositeVisualsDirty: K,
    rebuildPaintEngineIfNeeded: Q,
    getDesiredPaintTargetDescriptor: fe,
    getActivePaintTargetDescriptor: D,
    rasterizeStrokeToSurface: R,
    createRasterFrozenObjectsFromCanvas: Se
  };
}
function AN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g;
  function k(Q, fe = null) {
    var D;
    if (Q && typeof Q == "object" && !Array.isArray(Q)) return Q;
    if (Array.isArray(Q) && Q.length > 0) {
      const oe = Q[0];
      if (oe && typeof oe == "object" && !Array.isArray(oe)) return oe;
    }
    if (Array.isArray(fe) && fe.length > 0) {
      const oe = (D = fe[0]) == null ? void 0 : D.parsed_state;
      if (oe && typeof oe == "object" && !Array.isArray(oe))
        return {
          yaw_deg: Number(oe.yaw_deg || 0),
          pitch_deg: Number(oe.pitch_deg || 0),
          hFOV_deg: Number(oe.hFOV_deg || 30),
          rot_deg: Number(oe.roll_deg || 0)
        };
    }
    return null;
  }
  function m(Q, fe, D) {
    const oe = Math.max(1, Number(fe || 1)), ne = Math.max(1, Number(D || 1)), j = Ie(Number(Q || 30), 0.1, 179) * Sr, re = 2 * Math.atan(Math.tan(j * 0.5) * (ne / oe));
    return Ie(re * Ci, 0.1, 179);
  }
  function h(Q) {
    const fe = String(Q || "").trim();
    if (!fe) return null;
    try {
      const D = JSON.parse(fe);
      if (!D || typeof D != "object" || String(D.kind || "") !== "pano_sticker_state") return null;
      const oe = D.version;
      let ne = null;
      if (typeof oe == "number" && Number.isInteger(oe) ? ne = oe : typeof oe == "string" && /^\d+$/.test(oe) && (ne = Number.parseInt(oe, 10)), ne !== 1) return null;
      const j = D.pose;
      if (!j || typeof j != "object") return null;
      const re = Number(j.yaw_deg), L = Number(j.pitch_deg), G = Number(j.roll_deg), E = Number(j.hFOV_deg);
      if (![re, L, G, E].every((ue) => Number.isFinite(ue))) return null;
      let W = ((re + 180) % 360 + 360) % 360 - 180;
      Object.is(W, -0) && (W = 0);
      const R = {
        yaw_deg: W,
        pitch_deg: Ie(L, -89.9, 89.9),
        roll_deg: G,
        hFOV_deg: Ie(E, 0.1, 179)
      }, J = Number(D.source_aspect);
      return Number.isFinite(J) && J > 0 && (R.source_aspect = J), R;
    } catch {
      return null;
    }
  }
  function S(Q) {
    const fe = Number(Q == null ? void 0 : Q.yaw_deg), D = Number(Q == null ? void 0 : Q.pitch_deg), oe = Number((Q == null ? void 0 : Q.roll_deg) ?? (Q == null ? void 0 : Q.rot_deg)), ne = Number(Q == null ? void 0 : Q.hFOV_deg), j = Ei(Q);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(fe) ? fe : 0),
        pitch_deg: Ie(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(oe) ? oe : 0,
        hFOV_deg: Ie(Number.isFinite(ne) ? ne : 90, 0.1, 179)
      },
      source_aspect: j
    };
  }
  function X(Q) {
    var L;
    if (!Q || typeof Q != "object") return S(null);
    const fe = Number(Q == null ? void 0 : Q.yaw_deg), D = Number(Q == null ? void 0 : Q.pitch_deg), oe = Number((Q == null ? void 0 : Q.roll_deg) ?? (Q == null ? void 0 : Q.rot_deg)), ne = Number(Q == null ? void 0 : Q.hFOV_deg), j = Number(Q == null ? void 0 : Q.vFOV_deg);
    let re = 1;
    if (Number.isFinite(ne) && Number.isFinite(j)) {
      const G = Ie(ne, 0.1, 179) * Sr, E = Ie(j, 0.1, 179) * Sr, W = Math.tan(E * 0.5);
      if (Math.abs(W) > 1e-6) {
        const R = Math.tan(G * 0.5) / W;
        Number.isFinite(R) && R > 0 && (re = R);
      }
    }
    if (Q != null && Q.asset_id && ((L = o == null ? void 0 : o.assets) != null && L[Q.asset_id])) {
      const G = o.assets[Q.asset_id], E = Number((G == null ? void 0 : G.w) || 0), W = Number((G == null ? void 0 : G.h) || 0);
      E > 0 && W > 0 && (re = E / W);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(fe) ? fe : 0),
        pitch_deg: Ie(Number.isFinite(D) ? D : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(oe) ? oe : 0,
        hFOV_deg: Ie(Number.isFinite(ne) ? ne : 30, 0.1, 179)
      },
      source_aspect: re
    };
  }
  function $(Q) {
    return t.linkedValue(n, Q);
  }
  function B(Q, fe, D) {
    const oe = Q && typeof Q == "object" ? {
      yaw_deg: Number(Q.yaw_deg || 0),
      pitch_deg: Number(Q.pitch_deg || 0),
      roll_deg: Number(Q.rot_deg ?? Q.roll_deg ?? 0),
      hFOV_deg: Number(Q.hFOV_deg || 30)
    } : h(fe);
    if (oe) {
      const re = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || oe.source_aspect || 1), L = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
      return {
        yaw_deg: Number(oe.yaw_deg || 0),
        pitch_deg: Number(oe.pitch_deg || 0),
        hFOV_deg: Number(oe.hFOV_deg || 30),
        vFOV_deg: m(oe.hFOV_deg, re, L),
        rot_deg: Number(oe.roll_deg || 0)
      };
    }
    const ne = Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 1), j = Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, ne, j),
      rot_deg: 0
    };
  }
  function F() {
    const Q = l(() => {
      $r(n, "image-loaded");
    }), fe = Xt(n, "external-sticker") ? k(c("pano_sticker_input_pose"), null) : null;
    return ng(o, tg(n, { pose: fe, image: Q }));
  }
  function Y() {
    var L;
    const Q = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((G) => String((G == null ? void 0 : G.name) || "") === "sticker_image") : -1, fe = Q >= 0 ? ((L = n.getInputLink(Q)) == null ? void 0 : L.id) ?? null : null, D = l(() => {
      $r(n, "image-loaded");
    }), oe = k(c("pano_sticker_input_pose"), null), ne = $("sticker_state"), j = t.externalStateHash(n, ne), re = fe == null ? null : B(oe, ne, D);
    return eg(o, {
      connected: fe != null,
      linkId: fe,
      stateHash: j,
      pose: re,
      imageWidth: Number((D == null ? void 0 : D.naturalWidth) || (D == null ? void 0 : D.width) || 0),
      imageHeight: Number((D == null ? void 0 : D.naturalHeight) || (D == null ? void 0 : D.height) || 0)
    });
  }
  function H(Q = "sync") {
    if (s !== "stickers" || i) return;
    const fe = n.__panoSceneStateV2 ? F() : Y();
    if (fe.changed) {
      const D = o.stickers.find(d);
      o.stickers = fe.state.stickers, o.active = fe.state.active, D && r.selectedId === D.id && !o.stickers.some((oe) => oe.id === D.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), f();
    }
    u();
  }
  function K() {
    const Q = Array.isArray(o.stickers) ? o.stickers : [], fe = [];
    for (const D of Q)
      d(D) && (D.visible = !1, fe.push(D));
    return fe;
  }
  return {
    connect(Q) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = Q);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: S,
    buildCanonicalSelectedStickerState: X,
    reconcileExternalStickerFromInputs: H,
    collectExternalStickersForClearAll: K
  };
}
const CN = 250, IN = 600, EN = 180, ON = 2;
function FN(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ho(e, t, r) {
  return e + (t - e) * r;
}
function TN(e, t, r = 1) {
  const n = Math.max(
    Math.abs(zu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / EN + i / ON);
  return Math.round(Ho(CN, IN, o));
}
function DN(e, t, r) {
  const n = FN(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ho(i, t.position[o], n)),
    yaw_deg: jt(e.yaw_deg + zu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ho(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ho(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ho(e.distance, t.distance, n)
  };
}
function LN(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(zu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function RN(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return LN(e, t) ? null : { from: e, to: t, startTs: r, durationMs: TN(e, t, n), end: i };
}
function VN(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: DN(e.from, e.to, r), done: !1 };
}
function il(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function $N(e, t, r) {
  const n = il(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function zN(e) {
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
  let g, k, m, h, S, X, $, B, F, Y = null;
  function H(w, N = null) {
    const I = W();
    $(() => {
      i.viewTransition = RN(I, w, performance.now(), { scale: be(), end: N });
    }), !i.viewTransition && N && K(N), f.state.inertia.active = !1, f.state.inertia.vx = 0, f.state.inertia.vy = 0, B(), S({ localOnly: !0, reason: dt.VIEW });
  }
  function K(w) {
    G(Kc({ ...L(), moved: w.moved }, w.mode, R())), a.backgroundDirty = !0;
  }
  function Q() {
    i.viewTransition && (i.viewTransition = null, B());
  }
  function fe(w, N) {
    H({ ...W(), yaw_deg: w, pitch_deg: N });
  }
  function D() {
    return !u || ue() && !h();
  }
  function oe() {
    return i.mode === "pano" && ne();
  }
  function ne() {
    return d && Uv({ sceneLinked: l && !!Ml(s).scene, files: X(), stickers: c.stickers });
  }
  function j() {
    return i.spaceMode === "6dof" && oe();
  }
  function re() {
    var w, N, I;
    return Z_((I = (N = (w = t.ui) == null ? void 0 : w.settings) == null ? void 0 : N.getSettingValue) == null ? void 0 : I.call(N, vg));
  }
  function L() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function G(w) {
    i.spaceMode = w.mode, i.viewPosition = w.position, i.viewMoved = w.moved;
  }
  function E(w) {
    var I;
    const N = $N(i.spaceMode, i.viewTransition, w);
    if (N !== "keep") {
      if (N === "return") {
        H({ ...W(), position: R(), distance: ((I = te()) == null ? void 0 : I.radius) || tr }, { mode: w, moved: !1 });
        return;
      }
      Q(), G(Kc({ ...L(), position: W().position }, w, R())), a.backgroundDirty = !0, B(), S({ localOnly: !0, reason: dt.VIEW });
    }
  }
  function W() {
    var I;
    const w = i.viewMoved ? i.viewDistance : ((I = te()) == null ? void 0 : I.radius) || tr, N = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: w };
    return zv(i.spaceMode, N, R());
  }
  function R() {
    return ue() ? A().position : [0, 0, 0];
  }
  function J() {
    return r && c.camera !== null;
  }
  function ue() {
    return J() && c.camera.visible;
  }
  function Se() {
    return c.painting_visible !== !1;
  }
  function ee(w) {
    return w.visible && ho(w.clip, i.frame);
  }
  function A() {
    return ws(c.camera, i.frame);
  }
  function te() {
    var N;
    const w = g();
    return ((N = w.space ?? w.content) == null ? void 0 : N.sphere) ?? null;
  }
  function ce(w) {
    i.viewPosition = w.position, i.viewYaw = w.yaw_deg, i.viewPitch = w.pitch_deg, i.viewDistance = w.distance, i.viewMoved = !0, a.backgroundDirty = !0, S({ localOnly: !0, reason: dt.VIEW });
  }
  function be() {
    var w;
    return ((w = te()) == null ? void 0 : w.radius) || tr;
  }
  function ve() {
    var he;
    const w = g().space, N = k(), I = i.worldSelectedId || i.selectedId, q = N.stickers.findIndex((we) => we.id === I), se = q < 0 ? null : {
      sticker: N.stickers[q],
      value: xs(N, i.frame).stickers[q],
      plane: w.stickers.find((we) => we.id === I) ?? null,
      item: ((he = w.sticker) == null ? void 0 : he.id) === I && w.sticker.url ? { kind: w.sticker.kind, box: o.sceneBox(w.sticker.url) } : null
    }, me = m() ? z() : Xv(te(), se);
    if (!me) return;
    const Z = W();
    i.viewDistance = Z.distance, i.viewMoved = !0, H(Kv(Z, me, n.width, n.height));
  }
  function C(w) {
    return o.pickSurface(V(), w.x, w.y, n.width, n.height);
  }
  function le(w, N) {
    var I;
    return Uc(w, N, i.viewMoved ? null : (I = te()) == null ? void 0 : I.center, be());
  }
  function v() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function b(w, N) {
    const I = performance.now(), q = { x: w.x, y: w.y, time: I, key: o.contentRevision(), view: v() };
    if (!hm(Y, q)) {
      const me = C(w);
      Y = { ...q, cost: performance.now() - I, hit: me };
    }
    const se = W();
    ce(ym(se, le(se, Y.hit), N, be())), Y.view = v(), Y.wheelTime = I;
  }
  function O(w, N, I) {
    const q = W();
    i.interaction = w === "orbit" ? { kind: "space_orbit", last: N, pivot: le(q, C(N)) } : { kind: "space_pan", last: N, depth: pm(q, be()) }, F(N), n.setPointerCapture(I);
  }
  function _(w) {
    return w * 0.2;
  }
  function z() {
    return { center: A().position, radius: _(be()) };
  }
  function x(w, N) {
    const { yaw_deg: I, pitch_deg: q } = wm(w.position, N);
    return { ...w, yaw_deg: I, pitch_deg: q };
  }
  function V() {
    return sd(W(), n.width, n.height, te());
  }
  return {
    connect(w) {
      ({
        editorViewInput: g,
        editorViewSceneState: k,
        isCameraSelected: m,
        isErpCamera: h,
        requestDraw: S,
        sceneFiles: X,
        startAnimation: $,
        syncFloatingViewButtonState: B,
        updateCursor: F
      } = w);
    },
    transitionView: H,
    applyViewTransitionEnd: K,
    cancelViewTransition: Q,
    turnViewTo: fe,
    cameraPreviewShown: D,
    isSpaceView: oe,
    hasSpaceContent: ne,
    isFreeSpaceView: j,
    viewControls: re,
    spaceModeState: L,
    applySpaceMode: G,
    setSpaceMode: E,
    spaceViewState: W,
    spaceOrigin: R,
    hasCamera: J,
    cameraShoots: ue,
    paintingShown: Se,
    sceneStickerShown: ee,
    cutoutCamera: A,
    contentSphere: te,
    setSpaceView: ce,
    spaceScale: be,
    frameSpaceContent: ve,
    zoomSpaceAt: b,
    startSpaceDrag: O,
    currentSpaceCamera: V,
    cameraFrustumLength: _,
    cameraSphere: z,
    lookingAt: x
  };
}
function jN(e) {
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
  let u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve = { revision: -1, sceneState: null }, C = null;
  function le() {
    return C || (C = O()), C;
  }
  function v() {
    C = null;
  }
  function b() {
    return ve.sceneState;
  }
  function O() {
    const we = Y(), Pe = g(), de = { ...a.assets };
    for (const Me of l ? [] : a.stickers) {
      const De = String((Me == null ? void 0 : Me.asset_id) || "");
      De && !de[De] && i.has(De) && (de[De] = { type: "comfy_image", filename: De });
    }
    const ye = l ? a.stickers.map((Me) => j(Me) ? { ...Me, source: { kind: "file", filename: Se(Me) } } : Me) : a.stickers;
    ve.revision !== s.stateRevision && (ve = { revision: s.stateRevision, sceneState: Wr({ ...a, stickers: ye, assets: de, painting: null }) }), l && _(ve.sceneState);
    const y = xs(ve.sceneState, r.frame), p = L ? B() : null, T = (Me) => {
      if (l && !Me.visible) return null;
      if (L && D(Me)) return p;
      const De = K(Me);
      return De ? { media: De, revision: H(De) } : null;
    }, P = ce(), M = [...P.sky, ...Cm(ve.sceneState, r.frame, a.stickers, { media: T, paintLayers: Pe, evaluated: y })], ie = we && (we === d || we === c) ? d.dataset.panoSrc : we, ge = fe(we) ? { media: we, revision: H(we), coverage: f(), source: ie } : null, U = Q(), ae = jv(W(), U, R());
    ae.mode !== r.spaceMode && h(), u(ae);
    const Ne = U ? z(ve.sceneState, y, T, P) : null, _e = ne() ? { ...Ne, ...x(Ne) } : null;
    return { background: ge, layers: M, space: _e, content: Ne };
  }
  function _(we) {
    const Pe = new Map(a.stickers.map((de) => [de.id, de.clip]));
    we.scene.clip = { ...a.scene.clip };
    for (const de of we.stickers) {
      const ye = Pe.get(de.id);
      ye && (de.clip = { ...ye });
    }
  }
  function z(we, Pe, de, ye) {
    const y = G(), p = ad(y, Pe.scene), T = p != null && p.url ? n.sceneBox(p.url) : null, P = T && ga(p.kind, T), M = ue(), ie = Sm(M, we, Pe), ge = ie != null && ie.url ? n.sceneBox(ie.url) : null, U = ge ? [{ box: ga(ie.kind, ge), value: ie.value }] : [], ae = Im(we, r.frame, a.stickers, { media: de, evaluated: Pe });
    for (const { request: _e, value: Me } of ye.items) {
      const De = _e != null && _e.url ? n.sceneBox(_e.url) : null;
      De && U.push({ box: ga(_e.kind, De), value: Me });
    }
    const Ne = Xc(Yv(Pe, P, [...ae, ...ye.stickers], U));
    return {
      evaluated: Pe,
      sceneUrls: y ? y.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: _m(M, we),
      sticker: ie,
      stickers: ae,
      upstreamStickers: ye.stickers,
      upstreamItems: ye.items,
      sphere: Ne
    };
  }
  function x(we) {
    var de;
    const Pe = ((de = we.sphere) == null ? void 0 : de.radius) || tr;
    return {
      gizmo: w() ? q() : V(we.evaluated),
      grid: r.showGrid && !r.fullscreen ? aS(Pe) : null,
      lines: m() ? I(Pe) : []
    };
  }
  function V(we) {
    const Pe = E(), de = we.stickers.find((ye) => ye.id === (Pe == null ? void 0 : Pe.id));
    return !be(Pe) || !(de != null && de.active) ? null : { mode: r.gizmoMode, transform: Bc(de) };
  }
  function w() {
    return m() && r.selectedId === td;
  }
  let N = { revision: -1, span: -1, segments: [] };
  function I(we) {
    const Pe = A();
    (N.revision !== s.stateRevision || N.span !== Pe) && (N = { revision: s.stateRevision, span: Pe, segments: cS(uS(a, Pe)) });
    const { segments: de } = N, ye = de.length ? [{ segments: de, color: RP }] : [];
    if (!oe()) return ye;
    const y = w() ? Kg : LP;
    return [...ye, { segments: xm(X(), k(we)), color: y }];
  }
  function q() {
    return !oe() || !w() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Bc({ ...X(), scale: 1 }) };
  }
  function se() {
    const { background: we, layers: Pe, space: de } = le(), ye = t.width, y = t.height, p = $({ x: 0, y: 0, w: ye, h: y });
    let T = !1;
    return !we && !Pe.length && !de ? (n.clear(460551), T = n.ready) : (n.clear(), T = !!n.render({
      rect: p,
      camera: de ? sd(J(), ye, y, de.sphere) : S(),
      background: we,
      layers: Pe,
      space: de
    })), ee(), (r.worldSelectedId || w() || re()) && te(), T;
  }
  function me(we) {
    const { content: Pe } = le();
    return !Pe || !we.position ? Jo(we) : bm(Jo(we), we.position, F(), Pe.sphere);
  }
  function Z(we, Pe, de, ye = null) {
    const { background: y, layers: p, content: T } = le();
    if (!y && !p.length && !T) return null;
    const P = T && Pe.position ? T : null;
    return n.render({ rect: we, camera: me(Pe), background: y, layers: p, space: P, owner: de, clearColor: ye });
  }
  function he(we) {
    return n.clear(460551), !!n.renderUnwrap({ rect: $(we), ...le() });
  }
  return {
    connect(we) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: k,
        cameraShoots: m,
        cancelViewTransition: h,
        currentViewCamera: S,
        cutoutCamera: X,
        deviceRect: $,
        followPortSticker: B,
        frameViewDistance: F,
        getConnectedErpImage: Y,
        getMediaRevisionToken: H,
        getStickerImage: K,
        hasSpaceContent: Q,
        isDecodedImageReady: fe,
        isExternalSticker: D,
        isFreeSpaceView: oe,
        isSpaceView: ne,
        isUploadingSticker: j,
        isWorldMenuShown: re,
        portVideo: L,
        sceneFiles: G,
        selectedWorldSticker: E,
        spaceModeState: W,
        spaceOrigin: R,
        spaceViewState: J,
        stickerFiles: ue,
        stickerImageKey: Se,
        syncFloatingViewButtonState: ee,
        timelineSpanFrames: A,
        updateSelectionMenu: te,
        upstreamViewInput: ce,
        worldStickerEditable: be
      } = we);
    },
    editorViewInput: le,
    endEditorViewFrame: v,
    editorViewSceneState: b,
    isCameraSelected: w,
    renderEditorView: se,
    shotViewCamera: me,
    drawEditorViewShot: Z,
    renderEditorViewUnwrap: he
  };
}
function HN(e) {
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
  function m(j) {
    if (!j) return null;
    let re = g.get(j);
    return re || (re = new Image(), re.onload = k, re.onerror = k, re.src = j, g.set(j, re)), re;
  }
  function h({ sceneState: j, ui: re }) {
    return [
      ...j.stickers.filter((L) => L.source.kind !== "port").map((L) => n(Ka(L.source))),
      i(Tr(re, lo)[0] || null),
      ...j.painting.raster_objects.map((L) => L.rasterDataUrl)
    ].filter(Boolean);
  }
  function S() {
    return a && (If(o, "scene") === Xg || !!X());
  }
  function X() {
    const j = a && Xt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, re = Array.isArray(j) ? j : null;
    if (f.list !== re) {
      f.entries.forEach(oe), f = { list: re, entries: re ? aN(re).map((G) => ({ layer: G })) : [] };
      const L = new Set(f.entries.flatMap((G) => h(G.layer)));
      for (const G of [...g.keys()]) L.has(G) || g.delete(G);
    }
    return re && f.entries;
  }
  function $() {
    if (!X()) return 0;
    const [j] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(j) > 0 ? Number(j) : 0;
  }
  function B() {
    if (!a) return "";
    const j = X();
    if (dN(If(o, "scene"), j)) return "Run the workflow to show the upstream scene.";
    if (!j) return "";
    const re = t.uiList(o, "pano_sticker_warnings");
    return String(re.find((L) => String(L).startsWith(uN)) ?? "");
  }
  function F(j, re, L) {
    const { ui: G, sceneState: E } = j.layer, W = E.timeline.fps, R = Tr(G, Wg)[0], J = Tr(G, Gg).map(i).filter(Boolean), ue = i(Tr(G, Hg)[0] || null), Se = R && typeof R == "object" ? J.length ? { frames: J, meta: R } : ue ? { src: ue, meta: R } : null : null, ee = m(i(Tr(G, lo)[0] || null)), A = Se ? dd(re.clip, L, W, Se.meta) : null;
    let te = ee;
    if (Se != null && Se.frames)
      j.frames || (j.frames = pd({
        createImage: (ce, be) => {
          const ve = new Image();
          return ve.onload = be, ve.onerror = be, ve.src = ce, ve;
        },
        onLoad: k
      })), te = j.frames.picture(Se.frames, A, Se.meta, ee);
    else if (Se != null && Se.src) {
      const ce = Y(j);
      ce.follow({ src: Se.src, time: A, playing: d.advancing, fps: W }), te = ce.picture(j.still, ee);
    }
    return te ? { media: te, revision: c(te), source: fd(Se, ee) } : null;
  }
  function Y(j) {
    if (j.follower) return j.follower;
    const re = _s(document, "editor.upstream-port-video");
    re.playsInline = !0, re.preload = "auto";
    const L = nn({ label: "editor.upstream-port-still" });
    return L.__panoFrameIdx = 0, j.video = re, j.still = L, j.follower = yd({
      video: re,
      onCapture: () => {
        var W;
        const G = Number(re.videoWidth || 0), E = Number(re.videoHeight || 0);
        G < 1 || E < 1 || (L.width = G, L.height = E, (W = L.getContext("2d")) == null || W.drawImage(re, 0, 0), L.__panoFrameIdx += 1, k());
      },
      onChange: k
    }), j.follower;
  }
  function H(j, re, L) {
    if (re.source.kind === "port") return F(j, re, L);
    const G = m(n(Ka(re.source)));
    return G ? { media: G, revision: c(G) } : null;
  }
  function K(j) {
    var Se;
    const { sceneState: re } = j.layer, { painting: L } = re, G = L.paint.strokes.length + L.mask.strokes.length;
    if (!re.painting_visible || !G && !L.raster_objects.length) return [];
    const E = l(), W = `${E.width}x${E.height}`;
    j.paintSize !== W && (fe(j), j.paintSize = W, j.paintEngine = G ? bl(E) : null, (Se = j.paintEngine) == null || Se.rebuildCommitted({ painting: L }), j.rasters = /* @__PURE__ */ new Map());
    const R = j.paintEngine, J = (R == null ? void 0 : R.getMaskDisplayCanvas()) || null, ue = [];
    for (const ee of fN(re, R ? R.getAllGroupIds() : [], !!J)) {
      const A = ee.kind === "group" ? R == null ? void 0 : R.getGroupDisplayCanvas(ee.id) : ee.kind === "mask" ? J : Q(j, ee.item, E);
      A && ue.push({ id: `${ee.kind}:${ee.id}`, media: A, revision: W, opacity: 1, zIndex: ee.zIndex });
    }
    return ue;
  }
  function Q(j, re, { width: L, height: G }) {
    if (j.rasters.has(re.id)) return j.rasters.get(re.id);
    const E = m(re.rasterDataUrl);
    if (!E.complete || !E.naturalWidth) return null;
    const W = nn({ label: "editor.upstream-raster-erp", width: L, height: G }), R = W.getContext("2d");
    return R ? (Ug(R, E, re, L, G), j.rasters.set(re.id, W), W) : null;
  }
  function fe(j) {
    var re;
    (re = j.rasters) == null || re.forEach((L) => is(L)), j.rasters = null, j.paintEngine = null, j.paintSize = null;
  }
  function D() {
    const j = X() ?? [], re = { sky: [], stickers: [], items: [] };
    return j.forEach((L, G) => {
      const E = lN(r.frame, s.timeline.fps, L.layer.sceneState.timeline.fps), W = pN(L.layer, G, E, {
        media: (R) => H(L, R, E),
        paintLayers: K(L),
        source: i
      });
      re.sky.push(...W.sky), re.stickers.push(...W.stickers), re.items.push(...W.items);
    }), re;
  }
  function oe(j) {
    var re;
    (re = j.follower) == null || re.dispose(), j.still && is(j.still), fe(j);
  }
  function ne() {
    f.entries.forEach(oe), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(j) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = j);
    },
    upstreamLinked: S,
    upstreamNotice: B,
    upstreamSpanFrames: $,
    upstreamViewInput: D,
    disposeUpstream: ne
  };
}
const bu = "camera_preview";
function GN(e) {
  return e === bu ? dt.SPLAT_PREVIEW : dt.SPLAT_STAGE;
}
function WN(e) {
  return [...e].some((t) => t !== dt.VIEW && t !== dt.OVERLAY && t !== dt.SPLAT_STAGE);
}
function Qg(e, t = !1) {
  const r = Ie(Ei(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function KN(e) {
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
  function S() {
    m && (m = !1, o.releaseSplats(bu));
  }
  function X() {
    k = null, h = !1, S();
  }
  function $(Q) {
    if (!n || !Q) return !1;
    const fe = n.closest(".pano-camera-preview");
    if (!fe) return !1;
    const D = Math.round(Number(fe.clientWidth || n.clientWidth || 0)), oe = Math.round(Number(fe.clientHeight || n.clientHeight || 0));
    return Math.abs(D - Number(Q.width || 0)) <= 1 && Math.abs(oe - Number(Q.height || 0)) <= 1;
  }
  function B(Q, fe) {
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
    const oe = Qg(D, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = oe.width, c.cameraPreview.height = oe.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, S();
      return;
    }
    const ne = window.devicePixelRatio || 1, j = Math.max(1, oe.width * ne), re = Math.max(1, oe.height * ne), L = Math.min(1, t.width / j, t.height / re), G = { width: Math.max(1, Math.floor(j * L)), height: Math.max(1, Math.floor(re * L)) }, E = !k || k.width !== G.width || k.height !== G.height || WN(fe);
    if (Q && E) {
      m = !0;
      const R = u({ x: 0, y: t.height - G.height, w: G.width, h: G.height }, D, bu);
      k = R ? G : null, R && K(R);
    }
    if (!k) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const W = $(oe);
    c.cameraPreview.ready = !0, c.cameraPreview.label = W ? "" : "Loading preview", c.cameraPreview.settled = W && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function F() {
    k = null, h = !1;
  }
  let Y = 0, H = !1;
  function K(Q) {
    const fe = ++Y;
    createImageBitmap(Q.canvas, Q.x, Q.y, Q.width, Q.height).then((D) => {
      var oe;
      if (fe !== Y || !s.running) {
        D.close();
        return;
      }
      (oe = r.getContext("bitmaprenderer")) == null || oe.transferFromImageBitmap(D);
    }).catch((D) => {
      fe !== Y || !s.running || (h = !0, k = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !H && (H = !0, console.error("[PanoramaStickers] camera preview frame failed", D)));
    });
  }
  return {
    connect(Q) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = Q);
    },
    drawCutoutOutputPreview: B,
    forgetCameraPreviewFrame: F
  };
}
function UN(e) {
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
  let u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve, C, le, v;
  function b(de) {
    const ye = r.width, y = r.height, p = K();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ye, y), te(), de && (a.backgroundDirty = !ve(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let P = 0; P <= 16; P += 1) {
        const M = p.x + p.w * P / 16;
        n.beginPath(), n.moveTo(M, p.y), n.lineTo(M, p.y + p.h), n.stroke();
      }
      for (let P = 0; P <= 8; P += 1) {
        const M = p.y + p.h * P / 8;
        n.beginPath(), n.moveTo(p.x, M), n.lineTo(p.x + p.w, M), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const T = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, T), n.fillText("Front", p.x + p.w * 0.5, T), n.fillText("Right", p.x + p.w * 0.75, T), n.fillText("Back", p.x + 38, T), n.fillText("Back", p.x + p.w - 38, T);
    }
  }
  function O(de, ye, y = 1) {
    let p = !1;
    n.strokeStyle = ye, n.lineWidth = y, n.beginPath();
    for (const T of de) {
      const P = ue(T);
      if (!P) {
        p = !1;
        continue;
      }
      p ? n.lineTo(P.x, P.y) : (n.moveTo(P.x, P.y), p = !0);
    }
    n.stroke();
  }
  function _(de) {
    const ye = r.width, y = r.height;
    if (n.clearRect(0, 0, ye, y), te(), de && (a.backgroundDirty = !be()), i.showGrid && !i.fullscreen && m().space)
      z();
    else if (i.showGrid && !i.fullscreen) {
      for (let T = -180; T <= 180; T += 15) {
        const P = [];
        for (let M = -89; M <= 89; M += 4) P.push(Nn(T, M));
        O(P, "#3f3f46", T % 90 === 0 ? 1.3 : 1);
      }
      for (let T = -75; T <= 75; T += 15) {
        const P = [];
        for (let M = -180; M <= 180; M += 4) P.push(Nn(M, T));
        O(P, T === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", T === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Nn(-90, 0) },
        { name: "Front", dir: Nn(0, 0) },
        { name: "Right", dir: Nn(90, 0) },
        { name: "Back", dir: Nn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((T) => {
        const P = ue(T.dir);
        P && n.fillText(T.name, P.x, P.y + 24);
      });
    }
  }
  function z() {
    const de = sd(v(), r.width, r.height, f()), ye = us(de, [0, 0, 0], r.width, r.height);
    ye && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ye.x, ye.y - 12));
  }
  function x(de, ye) {
    const y = J(de), p = Nn(Number(y.yaw_deg || 0), Number(y.pitch_deg || 0)), T = i.mode === "unwrap" ? Se(p) : null, P = T ? T.x : null, M = i.mode === "pano" ? 28 : 20, ie = [
      C(de, 0, M, P),
      C(de, 1, M, P),
      C(de, 2, M, P),
      C(de, 3, M, P)
    ];
    vd(n, ie, { selected: ye });
  }
  function V(de, ye = []) {
    if (!(!de || !Array.isArray(ye) || ye.length < 4)) {
      de.beginPath(), de.moveTo(ye[0].x, ye[0].y);
      for (let y = 1; y < 4; y += 1) de.lineTo(ye[y].x, ye[y].y);
      de.closePath();
    }
  }
  function w(de, ye, y) {
    const p = Array.isArray(de == null ? void 0 : de.corners) ? de.corners : [];
    if (p.length < 4) return;
    const T = Ie(Number((de == null ? void 0 : de.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    const P = n.globalAlpha;
    n.globalAlpha = P * T;
    const M = y ? "rgba(255, 116, 116, 0.96)" : ye ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", ie = y ? "rgba(255, 89, 89, 0.08)" : ye ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ge = ye ? 3.2 : 2.6;
    V(n, p), n.fillStyle = ie, n.fill(), n.strokeStyle = M, n.lineWidth = ge, n.stroke(), n.save(), n.strokeStyle = M, n.lineWidth = ye ? 3.2 : 2.6, n.lineCap = "round";
    const U = Array.isArray(de == null ? void 0 : de.edgeMidpoints) && de.edgeMidpoints.length >= 4 ? de.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], ae = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ne = ye ? 12 : 9;
    U.forEach((_e) => {
      const De = U.find((Ve) => (Ve == null ? void 0 : Ve.edge) === ae[_e == null ? void 0 : _e.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Le = De.x - _e.x, Ge = De.y - _e.y, Xe = Math.hypot(Le, Ge) || 1;
      n.beginPath(), n.moveTo(_e.x, _e.y), n.lineTo(_e.x + Le / Xe * Ne, _e.y + Ge / Xe * Ne), n.stroke();
    }), n.restore(), n.globalAlpha = P;
  }
  function N(de, ye, y, p) {
    const T = Ie(Number((ye == null ? void 0 : ye.visibilityAlpha) ?? 1), 0, 1);
    if (T <= 0.01) return;
    if (G(de)) {
      w(ye, y, p);
      return;
    }
    if (E(de)) {
      const M = n.globalAlpha;
      n.globalAlpha = M * H(de) * T, i.mode === "frame" ? (n.strokeStyle = y ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = y ? 2 : 1, V(n, ye.corners), n.stroke()) : x(de, y), n.globalAlpha = M;
      return;
    }
    const P = n.globalAlpha;
    n.globalAlpha = P * T, n.fillStyle = y ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", V(n, ye.corners), n.fill(), n.strokeStyle = y ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = y ? 2.8 : 1.9, V(n, ye.corners), n.stroke(), n.globalAlpha = P;
  }
  function I(de, ye, y) {
    if (E(de)) {
      yg(n, ye, { accent: y });
      return;
    }
    const p = !(G(de) && fe());
    n.fillStyle = y, p && ye.corners.forEach((T) => {
      n.beginPath(), n.arc(T.x, T.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && G(de) && (n.strokeStyle = y, n.lineCap = "round", n.lineWidth = 4, ye.edgeMidpoints.forEach((T) => {
      var Ne, _e, Me, De;
      const P = (((Ne = T.b) == null ? void 0 : Ne.x) ?? T.x) - (((_e = T.a) == null ? void 0 : _e.x) ?? T.x), M = (((Me = T.b) == null ? void 0 : Me.y) ?? T.y) - (((De = T.a) == null ? void 0 : De.y) ?? T.y), ie = Math.hypot(P, M) || 1, ge = P / ie, U = M / ie, ae = 10;
      n.beginPath(), n.moveTo(T.x - ge * ae, T.y - U * ae), n.lineTo(T.x + ge * ae, T.y + U * ae), n.stroke();
    }), n.lineCap = "butt"), W(de) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ye.rotateStemBase.x, ye.rotateStemBase.y), n.lineTo(ye.rotateHandle.x, ye.rotateHandle.y), n.stroke(), n.fillStyle = y, n.beginPath(), n.arc(ye.rotateHandle.x, ye.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function q() {
    var P;
    const de = i.mode === "frame" ? [] : Y(), ye = de.length > 1, y = l ? S() : B(), p = y.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${G(M) ? "frame" : Number((M == null ? void 0 : M.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== y || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: y,
      orderKey: p,
      sorted: [...y]
    });
    const T = i._sortedItemsCache.sorted;
    for (const M of T) {
      const ie = i.mode !== "frame" && !ye && j(M);
      if (i.mode === "frame" && !ie) continue;
      const ge = E(M), U = G(M), ae = ne(M);
      if (!ge && !U || L(M) && !le(M)) continue;
      const Ne = R(M);
      if (d !== "stickers" && !Ne.visible)
        continue;
      const _e = Ie(Number((Ne == null ? void 0 : Ne.visibilityAlpha) ?? 1), 0, 1);
      if (_e <= 0.01) continue;
      const Me = U && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Me, N(M, Ne, ie, ae), ie && Ne.visible) {
        const De = ae ? "#ff4d4f" : ge && D(M) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * _e, I(M, Ne, De), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const M = i.cutoutPanoFrameVisual, ie = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= ie, w(M.geom, M.selected, M.locked), M.selected && I(
        M.item,
        M.geom,
        M.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ye) {
      const M = F(de);
      if (M != null && M.visible) {
        const ie = u(de) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(M.corners[0].x, M.corners[0].y);
        for (let ge = 1; ge < M.corners.length; ge += 1) n.lineTo(M.corners[ge].x, M.corners[ge].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ie, M.corners.forEach((ge) => {
          n.beginPath(), n.arc(ge.x, ge.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      de.forEach((M) => {
        if (!W(M) && !re(M)) return;
        const ie = R(M);
        if (!(ie != null && ie.visible)) return;
        const ge = ne(M) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(ie.corners[0].x, ie.corners[0].y);
        for (let U = 1; U < ie.corners.length; U += 1) n.lineTo(ie.corners[U].x, ie.corners[U].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ge, ie.corners.forEach((U) => {
          n.beginPath(), n.arc(U.x, U.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((P = i.interaction) == null ? void 0 : P.kind) === "marquee_select") {
      const M = ce(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(M.x0, M.y0, M.x1 - M.x0, M.y1 - M.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function se(de) {
    const ye = h(), y = X(ye);
    if (!ye || !y)
      return n.clearRect(0, 0, r.width, r.height), de && o.clear(657930), !1;
    const p = { x: y.x, y: y.y, w: y.w, h: y.h }, { rect: T, shot: P } = Pm(ye, y, { width: r.width, height: r.height }), M = me(p);
    if (n.clearRect(0, 0, r.width, r.height), de) {
      o.clear(657930);
      const ie = g(T), ge = !!k(ie, P, void 0, 657930);
      ge || o.clear(1118481, ie), a.backgroundDirty = !ge;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, M), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = Kg, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, M - 1)), n.stroke(), n.restore(), !0;
  }
  function me(de) {
    const ye = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ye, Number((de == null ? void 0 : de.w) || 0) * 0.5, Number((de == null ? void 0 : de.h) || 0) * 0.5);
  }
  function Z() {
    var ge, U;
    if (((ge = i.interaction) == null ? void 0 : ge.kind) !== "paint_lasso_fill") return;
    const de = i.interaction.stroke, ye = (U = de == null ? void 0 : de.geometry) == null ? void 0 : U.points;
    let y;
    if (i.mode === "frame") {
      const ae = h(), Ne = $(ae);
      y = ee(ye, ae, Ne);
    } else
      y = A(ye);
    if (!Array.isArray(y) || y.length < 3) return;
    const p = String((de == null ? void 0 : de.layerKind) || "") === "mask", T = (de == null ? void 0 : de.color) || { r: 1, g: 0.25, b: 0.25 }, P = Math.round(Number(T.r || 0) * 255), M = Math.round(Number(T.g || 0) * 255), ie = Math.round(Number(T.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(y[0].x || 0), Number(y[0].y || 0));
    for (let ae = 1; ae < y.length; ae++) n.lineTo(Number(y[ae].x || 0), Number(y[ae].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${P},${M},${ie},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function he() {
    const de = i.frameRollOverlayVisual, ye = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(de != null && de.shot) || ye <= 1e-4) return;
    const y = $(de.shot);
    if (!y) return;
    const p = { x: y.x + y.w * 0.5, y: y.y + y.h * 0.5 }, T = Number(de.shot.roll_deg ?? de.shot.rot_deg ?? 0) * Sr, P = Math.hypot(y.w, y.h) * 0.55, M = Math.cos(T) * P, ie = Math.sin(T) * P;
    n.save(), n.globalAlpha *= ye, n.beginPath(), n.rect(y.x, y.y, y.w, y.h), n.clip(), n.translate(p.x, p.y), n.rotate(T);
    const ge = Math.max(12, Math.min(y.w, y.h) / 6);
    n.beginPath();
    for (let U = -P; U <= P; U += ge)
      n.moveTo(U, -P), n.lineTo(U, P);
    for (let U = -P; U <= P; U += ge)
      n.moveTo(-P, U), n.lineTo(P, U);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - M, p.y - ie), n.lineTo(p.x + M, p.y + ie), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function we() {
    return !l || !h() || t && oe() || c && !Q() ? 0 : zP;
  }
  function Pe() {
    const de = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (de <= 1e-4 || !l || i.mode !== "pano") return;
    const ye = h(), y = ye ? R(ye) : null, p = Array.isArray(y == null ? void 0 : y.corners) && y.corners.length >= 4 ? y.corners.map((M) => ({ x: Number(M.x || 0), y: Number(M.y || 0) })) : null;
    y != null && y.visible && p && (i.cutoutPanoDimCorners = p), ye && (y != null && y.visible) && p && (i.cutoutPanoFrameVisual = {
      item: ye,
      geom: y,
      selected: j(ye),
      locked: ne(ye)
    });
    const T = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, P = y != null && y.visible ? p : T ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${de})`, n.beginPath(), n.rect(0, 0, r.width, r.height), P.length >= 4) {
      n.moveTo(P[0].x, P[0].y);
      for (let M = 1; M < 4; M += 1) n.lineTo(P[M].x, P[M].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(de) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: k,
        editorViewInput: m,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: S,
        getFrameViewLayout: X,
        getFrameViewRect: $,
        getList: B,
        getMultiSelectionGeom: F,
        getSelectedItems: Y,
        getStickerDisplayAlpha: H,
        getUnwrapRect: K,
        isCameraSelected: Q,
        isErpCamera: fe,
        isExternalSticker: D,
        isFreeSpaceView: oe,
        isItemLocked: ne,
        isItemSelected: j,
        isRasterObjectItem: re,
        isSceneSticker: L,
        isShotItem: G,
        isStickerItem: E,
        isStrokeGroupItem: W,
        objectGeom: R,
        poseOf: J,
        projectDir: ue,
        projectDirUnwrap: Se,
        projectErpLassoPointsToFrameRect: ee,
        projectLassoPointsToCurrentView: A,
        rebuildPaintEngineIfNeeded: te,
        rectFromPoints: ce,
        renderEditorView: be,
        renderEditorViewUnwrap: ve,
        sampleStickerEdge: C,
        sceneStickerShown: le,
        spaceViewState: v
      } = de);
    },
    drawGridUnwrap: b,
    drawGridPano: _,
    drawObjects: q,
    drawFrameViewBackground: se,
    drawLassoOutlineOverlay: Z,
    drawFrameRollOverlay: he,
    getCutoutPanoDimTarget: we,
    drawCutoutPanoPassepartout: Pe
  };
}
function BN(e) {
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
  let S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te = () => {
  };
  function ce(Z = /* @__PURE__ */ new Set()) {
    fe();
    const he = l.backgroundDirty;
    d && (E(), X(he, Z)), i.mode === "frame" ? (l.frameSafeRect = L(), F(he)) : i.mode === "unwrap" ? H(he) : Y(he), $(), Q(), J(), K(), B(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && ee(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const we = j();
    m.stageStatus = we.status, m.stageStatusDetail = we.detail, m.stageNotice = A(), we.status === Jn ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", we.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function be(Z = i.interaction) {
    if (k !== "stickers" || i.mode !== "pano") return !1;
    const he = String((Z == null ? void 0 : Z.kind) || "");
    return he === "move" || he === "scale" || he === "scale_x" || he === "scale_y" || he === "rotate" ? !0 : he === "move_multi" ? Array.isArray(Z == null ? void 0 : Z.stickerSnapshots) && Z.stickerSnapshots.length > 0 : !1;
  }
  function ve() {
    return !!i.interaction || !!g.drag;
  }
  function C() {
    l.nodePreviewPending = !1;
    const Z = Rn(s);
    Z.liveState = f, Z.liveStateVersion += 1, ne();
  }
  function le(Z = {}) {
    var T, P, M, ie, ge, U, ae, Ne;
    const he = Z.reason ?? dt.STATE, we = !!Z.localOnly, Pe = Z.externalSync === !0, de = String(Z.cause || ""), ye = String(((T = i.interaction) == null ? void 0 : T.kind) || "");
    (!we || ye === "view" || ye === "pan_frame" || be() || !!i.viewTransition || de === "mode" || de === "frame_view" || de === "cutout_frame") && (l.backgroundDirty = !0), we && re() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!we || de === "selection" || de === "mode" || de === "cutout_frame") && (ue(), Se()), ve() ? l.nodePreviewPending = !0 : C(), Pe && ((M = (P = St(s).dom) == null ? void 0 : P.requestDraw) == null || M.call(P), (ie = s.setDirtyCanvas) == null || ie.call(s, !0, !1)), Pe && !we && ((U = (ge = s.graph) == null ? void 0 : ge.setDirtyCanvas) == null || U.call(ge, !0, !0), (Ne = (ae = t == null ? void 0 : t.canvas) == null ? void 0 : ae.setDirty) == null || Ne.call(ae, !0, !0)), c.requestDraw(he);
  }
  function v() {
    const Z = n.getBoundingClientRect(), he = Math.max(2, Math.round(Z.width)), we = Math.max(2, Math.round(Z.height)), Pe = window.devicePixelRatio || 1, de = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== he || n.height !== we) && (n.width = he, n.height = we);
    const ye = dS(Z.width || he, Z.height || we, Pe, window.innerWidth || Z.width, window.innerHeight || Z.height);
    return o.resize(ye.width, ye.height), [n.width, n.height, r.width, r.height].join("x") === de ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && b(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function b(Z) {
    Z(), c.wake();
  }
  function O() {
    return !!i.viewTransition || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || ve();
  }
  function _(Z = performance.now(), he = /* @__PURE__ */ new Set()) {
    var y;
    l.nodePreviewPending && !ve() && C(), he.forEach((p) => l.reasons.add(p)), he.size && (l.dirty = !0), [...he].some((p) => p !== dt.OVERLAY) && (l.backgroundDirty = !0), W(), l.lastTickTs > 0 ? Math.max(1e-3, (Z - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Z;
    const we = i.mode === "frame" && ((y = i.interaction) == null ? void 0 : y.kind) === "roll_frame" ? i.interaction : null;
    we != null && we.shot && (i.frameRollOverlayVisual = { shot: we.shot });
    const Pe = we ? 1 : 0;
    if (Math.abs(Pe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = Pe, i.frameRollOverlayStartTs = Z), Math.abs(Number(i.frameRollOverlayAlpha || 0) - Pe) > 1e-6) {
      const p = Ie(
        (Z - Number(i.frameRollOverlayStartTs || Z)) / jP,
        0,
        1
      );
      i.frameRollOverlayAlpha = Gn(
        Number(i.frameRollOverlayFrom || 0),
        Pe,
        bc(p)
      ), p >= 1 && (i.frameRollOverlayAlpha = Pe, Pe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const de = oe();
    if (Math.abs(de - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = de, i.cutoutPanoDimStartTs = Z), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - de) > 1e-6) {
      const p = Ie(
        (Z - Number(i.cutoutPanoDimStartTs || Z)) / dp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Gn(
        Number(i.cutoutPanoDimFrom || 0),
        de,
        bc(p)
      ), p >= 1 && (i.cutoutPanoDimAlpha = de), p >= 1 && de === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const ye = d && D() ? 1 : 0;
    if (Math.abs(ye - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = ye, i.cutoutPanoFrameStartTs = Z), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - ye) > 1e-6) {
      const p = Ie(
        (Z - Number(i.cutoutPanoFrameStartTs || Z)) / dp,
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
      const p = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), T = Ie((Z - Number(i.outputPreviewAnimStartTs || 0)) / p, 0, 1), M = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? WP(T) : UP(T);
      i.outputPreviewAnim = Gn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, M), l.dirty = !0, T >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: p, done: T } = VN(i.viewTransition, Z);
      if (i.viewPosition = p.position, i.viewYaw = p.yaw_deg, i.viewPitch = p.pitch_deg, i.viewFov = p.hFOV_deg, i.viewDistance = p.distance, T) {
        const { end: P } = i.viewTransition;
        i.viewTransition = null, P && S(P), R();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(Z) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const p = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), ce(p);
    }
  }
  function z(Z) {
    try {
      Z();
    } catch (he) {
      const we = String((he == null ? void 0 : he.stack) || (he == null ? void 0 : he.message) || he || "unknown editor frame error");
      l.tickErrorSignature !== we && (l.tickErrorSignature = we, console.error("[PanoramaStickers] editor frame failed", he)), m.stageStatus = Wn, m.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function x(Z = performance.now(), he = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const we = Db();
    z(() => _(Z, he)), Lb(we);
  }
  function V() {
    !l.running || !v() || z(() => {
      l.dirty = !1, ce(/* @__PURE__ */ new Set([dt.RESIZE]));
    });
  }
  const w = new ResizeObserver(V);
  let N = null;
  function I() {
    N == null || N.removeEventListener("change", q), N = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), N.addEventListener("change", q);
  }
  function q() {
    I(), V();
  }
  function se() {
    te = Tb("editor", () => {
      var Z;
      return {
        type: k,
        readOnly: a,
        mode: i.mode,
        interaction: ((Z = i.interaction) == null ? void 0 : Z.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!G.playing
      };
    });
  }
  function me() {
    te(), l.running = !1, c.stop(), w.disconnect(), N.removeEventListener("change", q);
  }
  return {
    connect(Z) {
      ({
        applyViewTransitionEnd: S,
        drawCutoutOutputPreview: X,
        drawCutoutPanoPassepartout: $,
        drawFrameRollOverlay: B,
        drawFrameViewBackground: F,
        drawGridPano: Y,
        drawGridUnwrap: H,
        drawLassoOutlineOverlay: K,
        drawObjects: Q,
        endEditorViewFrame: fe,
        getActiveCutoutShot: D,
        getCutoutPanoDimTarget: oe,
        getSharedLivePaintSurface: ne,
        getStageImageStatus: j,
        isPaintCompositeInteraction: re,
        measureFrameSafeRect: L,
        playback: G,
        rebuildPaintEngineIfNeeded: E,
        syncCutoutShot: W,
        syncFloatingViewButtonState: R,
        syncFrameRollKnob: J,
        syncLookAtFrameButtonState: ue,
        syncViewToggleState: Se,
        updateSelectionMenu: ee,
        upstreamNotice: A
      } = Z);
    },
    requestDraw: le,
    syncCanvasSize: v,
    startAnimation: b,
    editorAnimating: O,
    tick: x,
    stageResizeObserver: w,
    watchPixelRatio: I,
    sampleEditorDiagnostics: se,
    stopRenderLoop: me
  };
}
function Ki(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function YN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function qN({
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
  var $, B;
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
    historyEntries: Array.from({ length: 8 }, (F, Y) => ({ index: Y, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = (($ = t.find((F) => i(e.paintColor, F.color))) == null ? void 0 : $.id) || "", f = !u, g = o(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((B = e.customPaintColor) == null ? void 0 : B.a) ?? 1))) * 100), m = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[m] ?? 10, S = l(), X = Array.from({ length: 8 }, (F, Y) => e.customPaintHistory[Y] || null);
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
    historyEntries: X.map((F, Y) => ({
      index: Y,
      color: F ? { cssColor: n(F, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: S,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function XN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const JN = {
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
function ZN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = JN[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function wc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function QN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function e2({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function t2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const co = "erp", n2 = ["1:1", "4:3", "3:2", "16:9"];
function e0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...n2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: co, label: Number(r) === 180 ? "180°" : "360°", active: e === co }] : []
  ];
}
function r2({
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
    rows: ZN(s),
    notes: a,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function i2({
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
      const S = f(), X = u(t);
      h.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: S ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !S
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
        choices: e0(l, { erp: k, coverage: m })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === co }
    ], k ? h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : h.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    );
  return t0(i.corners, h);
}
const gp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function o2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? gp.filter((s) => s.cameraTip) : gp;
  return t0([...e, ...i], [
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
function s2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = d + 18, k = c - 18 - r;
  let m;
  return g <= f ? m = Math.max(g, 14) : k >= 14 ? m = Math.min(k, f) : m = Math.min(Math.max(g, 14), f), { left: u, top: m };
}
function t0(e, t) {
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
const n0 = "painting";
function a2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const l2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function c2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (m, h, S, X, $, B, { keyable: F = !0, hideable: Y = !0 } = {}) => {
    const H = (K) => (r == null ? void 0 : r.owner) === m && r.lane === K ? r.frames.map((Q) => Q + B) : [];
    return {
      id: m,
      label: S,
      icon: X,
      clip: $,
      selected: m === n,
      hideable: Y,
      visible: h.visible,
      keyable: F,
      open: F && o.has(m),
      keys: q1(h).map((K) => ({ frame: K.frame + B, full: K.full })),
      selectedFrames: H(null),
      lanes: (F ? go(h) : []).map((K) => ({
        key: `${m}:${K}`,
        lane: K,
        label: l2[K],
        frames: h[K].keyframes.map((Q) => Q.frame + B),
        selectedFrames: H(K)
      }))
    };
  }, f = e.stickers.filter((m) => m.placement === "sky").sort((m, h) => h.z_index - m.z_index), g = e.stickers.filter((m) => m.placement === "world"), k = ({ start: m, in: h, duration: S }) => ({ clip: { start: m, end: S === null ? null : m + S }, offset: m - h });
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
        const { clip: h, offset: S } = k(m.clip);
        return u(m.id, m, Wc(m), ze.image, h, S);
      }),
      ...a2(e.painting) || !e.painting_visible ? [{
        id: n0,
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
      ...d || Ga(e.scene) ? [(() => {
        const { clip: m, offset: h } = k(e.scene.clip);
        return u("scene", e.scene, "Scene", ze.box, m, h, { keyable: !1 });
      })()] : []
    ]
  };
}
function u2(e, t, r, n) {
  const i = Q1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
function d2(e) {
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
  let S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve, C, le, v, b = 0;
  function O() {
    h.toolButtons.forEach((Z) => {
      const he = Z.attr === "data-tool-mode", we = Z.attr === "data-paint-tool", Pe = Z.attr === "data-mask-tool";
      Z.active = he ? Z.value === r.primaryTool : we ? Z.key === r.paintTool : Pe ? Z.key === r.maskTool : !1, Z.pressed = Z.active ? "true" : Z.pressed == null ? null : "false";
    });
  }
  function _() {
    if (k && Ki(h.toolButtons, "value", "add-camera", { disabled: ne() }), m !== "cutout") return;
    const Z = $();
    Ki(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: Z ? "Look At Frame" : "Add Frame",
      tip: Z ? "Look at frame" : "Add frame",
      icon: Z ? ze.camera : ze.plus_circle
    });
  }
  function z() {
    const Z = QN({
      spaceView: ue(),
      spaceMode: il(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, Z.space);
    for (const [he, we] of Object.entries(Z.buttons)) Ki(h.floatingButtons, "action", he, we);
  }
  function x() {
    var we;
    const Z = e2({ hasShot: !!$(), erp: L(), hidden: ne() && !X(), studio: k });
    r.mode === "frame" && Z.disabled && (k ? ee($()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((Pe) => {
      const de = Pe.key === r.mode;
      Pe.pressed = de ? "true" : "false", Pe.visible = !(Pe.key === "frame" && !f), Pe.key === "frame" ? Object.assign(Pe, Z) : Pe.disabled = !1;
    });
    const he = f && r.mode === "frame" ? $() : null;
    h.frameRail.visible = !!he, h.frameRail.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.visible = !!he && !c && he.locked !== !0, h.frameRollKnob.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.rollDeg = Number((he == null ? void 0 : he.roll_deg) ?? (he == null ? void 0 : he.rot_deg) ?? 0), h.frameRollKnob.displayValue = no(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((we = r.interaction) == null ? void 0 : we.kind) === "roll_frame", h.frameRollKnob.armed = !!he && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = he ? Dr(he) : "", h.frameRail.aspectChoices = e0(he ? String(Dr(he)) : null, { erp: k, coverage: g.coverage }), he || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!$(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && S(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), z(), W() ? le(r.pointerPos) : ce(r.mode === "pano" ? "grab" : "default");
  }
  function V() {
    var he;
    const Z = r.mode === "frame" ? $() : null;
    h.frameRollKnob.visible = !!Z && !c && Z.locked !== !0, h.frameRollKnob.rollDeg = Number((Z == null ? void 0 : Z.roll_deg) ?? (Z == null ? void 0 : Z.rot_deg) ?? 0), h.frameRollKnob.displayValue = no(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((he = r.interaction) == null ? void 0 : he.kind) === "roll_frame", h.frameRollKnob.armed = !!Z && r.altModifier === !0;
  }
  function w() {
    O();
    const Z = qN({
      editor: r,
      swatches: Cl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: hr,
      colorsApproximatelyEqual: rl,
      rgb01ToHsv: gu,
      hsv01ToRgb: mu,
      getBrushPresetIdForTool: B,
      isActiveLassoTool: re
    });
    if (Object.assign(h.paintDock, Z), C(), !Z.visible) {
      i && (i.hidden = !0);
      return;
    }
    b && (clearTimeout(b), b = 0), o && (!Z.colorEnabled && i && !i.hidden && (b = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, b = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", Z.pickerHueColor), i.style.setProperty("--picker-sat", Z.pickerSat), i.style.setProperty("--picker-val", Z.pickerVal), i.style.setProperty("--picker-hue", Z.pickerHue)), s && (s.style.left = Z.pickerSvLeft, s.style.top = Z.pickerSvTop), a && (a.style.left = Z.pickerHueLeft));
  }
  function N() {
    const Z = A(f && r.mode === "frame" ? $() : K());
    Z && (r.panelLastValues = {
      yaw_deg: Number(Z.yaw_deg || 0),
      pitch_deg: Number(Z.pitch_deg || 0),
      hFOV_deg: Number(Z.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(Z.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(Z.rot_deg || 0),
      roll_deg: Number(Z.roll_deg || 0),
      aspect_id: Dr(Z)
    }, I());
  }
  function I() {
    be(), ve(), se();
  }
  function q() {
    const Z = f && r.mode === "frame" ? $() : null;
    return [...Q(), te(), Z].some((he) => R(he) ? Ga(he) : J(he) && ne() && Ga(g.camera));
  }
  function se() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const Z = YN(g.ui_settings);
    if (l) {
      h.sidePanel = XN({
        coverage: g.coverage,
        uiSettings: Z,
        normalizeCoverageValue: En
      });
      return;
    }
    const he = K(), we = f && r.mode === "frame" ? $() : null, Pe = we || he, de = we ? [we] : Q(), ye = we ? "shot" : fe();
    if (de.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), Pe && ye !== "stroke") {
      const _e = A(Pe);
      r.panelLastValues = {
        yaw_deg: Number(_e.yaw_deg || 0),
        pitch_deg: Number(_e.pitch_deg || 0),
        hFOV_deg: Number(_e.hFOV_deg || (ye === "image" ? 30 : 90)),
        vFOV_deg: Number(_e.vFOV_deg || (ye === "image" ? 30 : 60)),
        rot_deg: Number(_e.rot_deg || 0),
        roll_deg: Number(_e.roll_deg || 0),
        aspect_id: Dr(_e)
      }, R(Pe) && (r.panelLastValues.opacity = Ai(Pe, r.frame).opacity * 100);
    }
    const y = r.panelLastValues || (m === "stickers" || ye === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = ye === "stroke" ? null : Pe, T = te(), P = t && (ye === "shot" || ye === "frame") && j(), M = T ? Av(T, r.frame) : P ? { ...p, ...Mv(g.camera, r.frame), vFOV_deg: p.vFOV_deg } : R(p) ? r.panelLastValues : p || y, ie = T ? v(T) : !!p && !E(p);
    r.panelWasEnabled = ie, _();
    let ge = null;
    if (we) {
      const _e = oe({ item: we, kind: "shot", label: "Frame" });
      ge = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: _e.label,
        currentIcon: _e.icon || null,
        items: [{
          id: String(we.id || ""),
          label: _e.label,
          icon: _e.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const _e = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Le = $();
        Le && _e.push({ id: Le.id, label: "Camera", icon: D("frame"), item: Le, kind: "frame" }), H().forEach((Ge, Xe) => {
          var Oe, Ae;
          if (!Ge || R(Ge) && !Ge.visible) return;
          const Ve = u ? Wc(Ge) : G(Ge) ? String(Ge.id || Ad) : String(((Ae = (Oe = g.assets) == null ? void 0 : Oe[Ge.asset_id]) == null ? void 0 : Ae.name) || Ge.asset_id || Ge.id), je = `${Xe + 1}. ${Ve}${G(Ge) && Se(Ge) ? " (hidden)" : ""}`, pe = oe({ item: Ge, label: je, kind: "image" });
          _e.push({ id: Ge.id, label: pe.label, icon: pe.icon, item: Ge, kind: "image" });
        });
      } else
        F().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const Ge = oe(Le);
          _e.push({ id: Le.item.id, label: Ge.label, icon: Ge.icon, item: Le.item, kind: Le.kind });
        });
      const Me = (p == null ? void 0 : p.id) || "", De = T ? { label: Wc(T), icon: ze.globe } : _e.find((Le) => Le.id === Me) || _e[0];
      ge = {
        label: "Selection",
        open: !1,
        disabled: _e.length <= 1,
        currentLabel: De.label,
        currentIcon: De.icon || null,
        items: _e.map((Le) => ({
          id: Le.id,
          label: Le.label,
          icon: Le.icon || null,
          active: Le.id === Me
        }))
      };
    }
    const U = [], ae = (_e, Me, De, Le, Ge) => {
      const Xe = Ie(Number(M[_e] || 0), De, Le);
      U.push({
        key: _e,
        label: Me,
        min: De,
        max: Le,
        step: Ge,
        value: Xe,
        displayValue: no(Xe),
        fillPct: Ie((Xe - De) / Math.max(1e-6, Le - De) * 100, 0, 100),
        enabled: ie && !c
      });
    }, Ne = [];
    if (T) {
      for (const [_e, Me] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const De = wc(M[_e]);
        ae(_e, Me, -De, De, 0.01);
      }
      ae("yaw_deg", "Yaw", -180, 180, 0.1), ae("pitch_deg", "Pitch", -90, 90, 0.1), ae("roll_deg", "Roll", -180, 180, 0.1), ae("scale", "Scale", jg, wc(M.scale), 0.01), ae("opacity", "Opacity", 0, 100, 1);
    } else if (de.length > 1)
      Ne.push(`Selected objects: ${de.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const _e = ye === "shot" || ye === "frame";
      if (P)
        for (const [Me, De] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = wc(M[Me]);
          ae(Me, De, -Le, Le, 0.01);
        }
      ae("yaw_deg", "Yaw", -180, 180, 0.1), ae("pitch_deg", "Pitch", -90, 90, 0.1), ae(ye === "image" || m === "stickers" && !_e ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ae("hFOV_deg", "H FOV", 1, 179, 0.1), ae("vFOV_deg", "V FOV", 1, 179, 0.1), _e && U.forEach((Me) => {
        Me.enabled = Me.enabled && t2(Me.key, { erp: L() });
      }), u && !_e && ae("opacity", "Opacity", 0, 100, 1);
    }
    h.sidePanel = r2({
      coverage: g.coverage,
      readOnly: c,
      selectionPicker: ge,
      enabled: ie,
      selectedKind: T ? "world" : ye,
      selectedItems: de,
      params: U,
      notes: Ne,
      uiSettings: Z,
      normalizeCoverageValue: En
    });
  }
  function me() {
    const { canUndo: Z, canRedo: he } = Y();
    Ki(h.toolButtons, "value", "undo", { disabled: !Z }), Ki(h.toolButtons, "value", "redo", { disabled: !he });
  }
  return {
    connect(Z) {
      ({
        cameraPreviewShown: S,
        cameraShoots: X,
        getActiveCutoutShot: $,
        getBrushPresetIdForTool: B,
        getCutoutInspectorItems: F,
        getHistoryCapabilities: Y,
        getList: H,
        getSelected: K,
        getSelectedItems: Q,
        getSelectedKind: fe,
        getSelectionItemIcon: D,
        getSelectionItemLabelData: oe,
        hasCamera: ne,
        hasSpaceContent: j,
        isActiveLassoTool: re,
        isErpCamera: L,
        isExternalSticker: G,
        isItemLocked: E,
        isPaintCursorEnabled: W,
        isSceneSticker: R,
        isShotItem: J,
        isSpaceView: ue,
        isStickerHidden: Se,
        leaveFrameView: ee,
        poseOf: A,
        selectedWorldSticker: te,
        setCanvasCursor: ce,
        syncCutoutShot: be,
        syncTimeline: ve,
        syncVideoTransportVisibility: C,
        updateCursor: le,
        worldStickerEditable: v
      } = Z);
    },
    syncLookAtFrameButtonState: _,
    syncFloatingViewButtonState: z,
    syncViewToggleState: x,
    syncFrameRollKnob: V,
    syncPaintUi: w,
    syncSidePanelControls: N,
    updateSidePanel: I,
    inspectorTimed: q,
    syncSidePanelModel: se,
    syncUndoRedoButtons: me
  };
}
function f2(e) {
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
  let g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j;
  function re() {
    if (!s || n) return;
    const b = G(), O = l.selection, _ = O && E(O.owner);
    if (O) {
      const z = _ ? W(O) : [];
      O.frames = O.frames.filter((x) => z.some((V) => _[V].keyframes.some((w) => w.frame === x))), O.frames.length || (l.selection = null);
    }
    d.timeline = c2(o, {
      span: b,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? L(),
      openRows: l.openRows,
      audio: ee() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || Dm(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: m(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Ml(r).scene && !ne()
    }), d.easing = l.selection ? u2(_, W(l.selection), l.selection.frames, R(l.selection.owner)) : null;
  }
  function L() {
    return nm(o, { camera: a });
  }
  function G(b = null) {
    const O = o.timeline.fps, _ = o.stickers.find(S), z = _ ? k() : null, x = Math.max(
      d.videoTransport.ready && !oe() ? Math.round(Number(d.videoTransport.duration || 0) * O) : 0,
      z ? Bm(_.clip, O, z.meta) : 0,
      j()
    );
    return rm(o, { minimum: Math.round(O * 5), frames: x, openClip: b, camera: a });
  }
  function E(b) {
    return b === "camera" ? m() ? o.camera : null : b === "scene" ? i ? o.scene : null : o.stickers.find((O) => O.id === b) || null;
  }
  function W(b) {
    return b.lane ? [b.lane] : go(E(b.owner));
  }
  function R(b) {
    if (b === "camera") return 0;
    const { clip: O } = E(b);
    return O.start - O.in;
  }
  function J(b) {
    return `${ho(b, t.frame)}:${b.start - b.in}`;
  }
  function ue(b) {
    const O = E(b);
    return !!O && O.locked !== !0;
  }
  function Se(b) {
    const O = Math.max(0, Math.round(b));
    if (O === t.frame) return;
    K(), t.frame = O, c.frame.value = O, K();
    const _ = [t.selectedId, t.worldSelectedId];
    Y(), X(), _[0] !== t.selectedId || _[1] !== t.worldSelectedId ? D() : h() && Q(), fe(), H({ reason: dt.PLAYHEAD });
  }
  function ee() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function A(b) {
    F(), $.seek(b);
  }
  function te() {
    s && $.stop();
  }
  function ce() {
    F(), $.toggle();
  }
  function be() {
    K(), X(), D(), fe(), H();
  }
  function ve() {
    B(), g(), be();
  }
  function C() {
    const { selection: b } = l;
    ue(b.owner) && (te(), J1(E(b.owner), W(b), b.frames, t.frame - R(b.owner)), l.selection = null, ve());
  }
  function le(b) {
    const O = mo(b);
    if (O === null || O === o.timeline.fps) return;
    te();
    const _ = Math.round(t.frame * O / o.timeline.fps);
    vv(o, O), l.selection = null, $.seek(_), ve();
  }
  function v() {
    const b = f(r);
    b !== null && b !== o.timeline.fps && le(b);
  }
  return {
    connect(b) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: k,
        hasCamera: m,
        inspectorTimed: h,
        isExternalSticker: S,
        markObjectVisualsDirty: X,
        playback: $,
        pushHistory: B,
        refreshModalVideoSource: F,
        releaseHiddenSelection: Y,
        requestDraw: H,
        syncCutoutShot: K,
        syncSidePanelModel: Q,
        updateSelectionMenu: fe,
        updateSidePanel: D,
        upstreamBackground: oe,
        upstreamLinked: ne,
        upstreamSpanFrames: j
      } = b);
    },
    syncTimeline: re,
    timelineTimed: L,
    timelineSpanFrames: G,
    timelineOwner: E,
    selectedLanes: W,
    timelineOffset: R,
    clipView: J,
    timelineEditable: ue,
    setTimelineFrame: Se,
    jumpTimelineTo: A,
    stopTimelinePlayback: te,
    togglePlayback: ce,
    refreshTimelineEdit: be,
    commitTimelineEdit: ve,
    deleteSelectedKeyframes: C,
    changeTimelineFps: le,
    applyVideoTimelineFps: v
  };
}
function p2(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E;
  function W(R) {
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
        re();
        return;
      }
      if (R.type === "mute") {
        L(), Q();
        return;
      }
      if (R.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? j()), s.selection = null, Q();
        return;
      }
      if (R.type === "toggle-row") {
        s.openRows.has(R.id) ? s.openRows.delete(R.id) : s.openRows.add(R.id), Q();
        return;
      }
      if (R.type === "toggle-visible") {
        if (R.id === n0) i.painting_visible = !i.painting_visible;
        else {
          const J = oe(R.id);
          if (!J) return;
          J.visible = !J.visible;
        }
        X(), u();
        return;
      }
      if (R.type === "select-row") {
        const J = i.stickers.find((ue) => ue.id === R.id);
        if (J && !J.visible || R.id === "camera" && !l()) return;
        J && !ho(J.clip, r.frame) && k(J.clip.start), (J == null ? void 0 : J.placement) === "world" ? B(J.id) : R.id === "camera" ? Y(f()) : Y(g().find((ue) => ue.id === R.id) || null), K(), s.selection = null, E(), G(), $();
        return;
      }
      if (R.type === "select-keys") {
        const J = D(R.owner), ue = R.frames.map((A) => A - J), Se = s.selection, ee = (Se == null ? void 0 : Se.owner) === R.owner && Se.lane === R.lane;
        if (R.additive && ee) {
          const A = new Set(Se.frames);
          for (const te of ue)
            A.has(te) ? A.delete(te) : A.add(te);
          Se.frames = [...A].sort((te, ce) => te - ce);
        } else
          s.selection = ue.length ? { owner: R.owner, lane: R.lane, frames: ue } : null;
        Q();
        return;
      }
      if (R.type === "move-keys") {
        const J = s.selection;
        if (!J || !fe(J.owner)) return;
        const ue = oe(J.owner), Se = F(J);
        if (R.phase === "start") {
          H(), s.drag = { keyframes: Se.map((te) => structuredClone(ue[te].keyframes)), frames: J.frames };
          return;
        }
        const { drag: ee } = s;
        if (!(ee != null && ee.keyframes)) return;
        Se.forEach((te, ce) => {
          ue[te].keyframes = structuredClone(ee.keyframes[ce]);
        });
        const A = Z1(ue, Se, ee.frames, R.delta, -D(J.owner));
        if (J.frames = ee.frames.map((te) => te + A), R.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, A ? u() : S();
        return;
      }
      if (R.type === "clip") {
        const J = R.id === "scene" ? oe("scene") : i.stickers.find((A) => A.id === R.id);
        if (!J || J.locked) return;
        if (R.phase === "start") {
          H(), s.drag = { clip: { ...J.clip }, span: ne(J.clip) };
          return;
        }
        const { drag: ue } = s;
        if (!(ue != null && ue.clip)) return;
        const Se = ue.clip, ee = d(J.clip);
        if (J.clip = { ...Se }, R.delta && R.mode === "move" ? tv(J.clip, R.delta) : R.delta && R.mode === "start" ? nv(J.clip, Se.start + R.delta) : R.delta && rv(J.clip, (Se.duration === null ? ue.span : Se.start + Se.duration) + R.delta, ue.span), R.phase !== "end") {
          t.request("timeline"), d(J.clip) !== ee && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, X(), JSON.stringify(J.clip) !== JSON.stringify(Se) ? u() : S();
        return;
      }
      if (R.type === "key-row") {
        if (R.owner === "scene" || !fe(R.owner)) return;
        H(), Y1(oe(R.owner), r.frame - D(R.owner)), u();
        return;
      }
      if (R.type === "fps") {
        const J = sv(R.fps);
        if (J === null || J === i.timeline.fps || a.timeline.fpsLocked) {
          Q();
          return;
        }
        c(J);
        return;
      }
      if (R.type === "length") {
        const J = av(R.length);
        if (J === void 0 || J === i.timeline.length) {
          Q();
          return;
        }
        H(), i.timeline.length = J, u();
        return;
      }
      if (R.type === "easing") {
        const J = s.selection;
        if (!J || !fe(J.owner)) return;
        H(), ev(oe(J.owner), F(J), J.frames, R.easing), R.commit ? u() : S();
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
        refreshTimelineEdit: S,
        releaseHiddenSelection: X,
        requestDraw: $,
        selectWorldSticker: B,
        selectedLanes: F,
        setSelectedItem: Y,
        stopTimelinePlayback: H,
        syncFloatingViewButtonState: K,
        syncTimeline: Q,
        timelineEditable: fe,
        timelineOffset: D,
        timelineOwner: oe,
        timelineSpanFrames: ne,
        timelineTimed: j,
        togglePlayback: re,
        toggleVideoMuted: L,
        updateSelectionMenu: G,
        updateSidePanel: E
      } = R);
    },
    onTimelineAction: W
  };
}
function h2(e) {
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
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = En(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var F;
    if (a) return;
    f(), l.coverage = En(l.coverage), um(o, l.active);
    const B = dm(o, l);
    c && !fm(o, B, String(c.value ?? ""), { rebased: n }) && (c.value = B, (F = c.callback) == null || F.call(c, B));
  }
  function h() {
    l.ui_settings = rN(l.ui_settings), a || m();
  }
  function S() {
    var B;
    a || (m(), (B = o.setDirtyCanvas) == null || B.call(o, !0, !0));
  }
  function X() {
    a || d() && g().catch((B) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", B);
    });
  }
  function $(B = {}) {
    var H, K, Q, fe, D, oe, ne, j, re, L, G;
    const F = B.syncPreview !== !1, Y = B.syncGraph !== !1;
    F && ((Q = (K = (H = Km(o)) == null ? void 0 : H.runtime) == null ? void 0 : K.requestDraw) == null || Q.call(K), (oe = (D = (fe = Wm(o)) == null ? void 0 : fe.dom) == null ? void 0 : D.requestDraw) == null || oe.call(D), (ne = o.setDirtyCanvas) == null || ne.call(o, !0, !1)), Y && ((re = (j = o.graph) == null ? void 0 : j.setDirtyCanvas) == null || re.call(j, !0, !0), (G = (L = t == null ? void 0 : t.canvas) == null ? void 0 : L.setDirty) == null || G.call(L, !0, !0));
  }
  return {
    connect(B) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = B);
    },
    apply: k,
    commitState: m,
    persistUiSettings: h,
    commitAndRefreshNode: S,
    triggerBackgroundPersistenceOnClose: X,
    syncCoverageChangeToNodePreviews: $
  };
}
function m2(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te;
  function ce(O, _, z = "Clear") {
    return new Promise((x) => {
      a.confirmDialog = {
        visible: !0,
        title: String(O || ""),
        text: String(_ || ""),
        confirmLabel: String(z || "Confirm"),
        resolve: x
      };
    });
  }
  async function be() {
    var z, x;
    if (r || !await ce(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = po(null), re();
    const _ = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((V) => V.placement === "world" || _.includes(V)) : _, n || (i.assets = {}), t.selectedId = ((z = _[0]) == null ? void 0 : z.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((x = _[0]) == null ? void 0 : x.id) || null, G();
    else {
      const V = mv(i.shots, i.active.selected_shot_id);
      i.stickers = _, i.assets = {}, i.shots = V.shots, t.selectedId = V.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = V.selectedShotId, !V.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, G();
    }
    E(), u(), A(), ee(), W();
  }
  async function ve(O) {
    var w, N, I, q;
    if (r) return;
    const _ = O === "mask" ? "mask" : "paint", z = _ === "mask" ? "Mask" : "Paint", x = S(_);
    if (!(!x.length && !(((w = t.interaction) == null ? void 0 : w.kind) === "draw" && ((N = t.interaction) == null ? void 0 : N.layerKind) === _) || !await ce(
      `Clear ${z}`,
      `This will remove all ${_} strokes in the current node.`,
      `Clear ${z}`
    ))) {
      if (((I = t.interaction) == null ? void 0 : I.kind) === "draw" && ((q = t.interaction) == null ? void 0 : q.layerKind) === _) {
        const se = g(t.interaction);
        se && t.paintEngine.cancelActiveStroke(se), t.interaction = null;
      }
      x.length = 0, i.painting.raster_objects = X().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") !== _), _ === "paint" && (h().length = 0), re(), E(), u(), A(), ee(), Se(), W();
    }
  }
  function C() {
    if (r) return;
    const O = $();
    if (!O || !fe(O) || F(O) || n && oe(O)) return;
    let _;
    n ? _ = Fv(O, bi("st"), m()) : (_ = JSON.parse(JSON.stringify(O)), _.id = bi("st"), _.yaw_deg = jt((_.yaw_deg || 0) + 8), _.z_index = m()), i.stickers.push(_), i.active.selected_sticker_id = _.id, t.selectedId = _.id, t.selectedIds = [_.id], ne(), E(), u(), ee(), A(), W();
  }
  function le() {
    const O = R();
    return O ? (te(O) && (J(), Ev(i, O.id), c(), ne(), E(), u(), A(), ee(), ue(), W()), !0) : !1;
  }
  function v() {
    var z, x, V, w, N;
    if (r) return;
    const O = B(), _ = $();
    if (!(!_ && O.length === 0) && !O.some((I) => Y(I))) {
      if (J(), O.length > 1) {
        const I = new Set(O.filter((me) => D(me)).map((me) => String(me.actionGroupId || me.id || ""))), q = new Set(O.filter((me) => H(me)).map((me) => L(me.rasterObjectId || me.id || ""))), se = new Set(O.filter(fe).map((me) => String(me.id || "")));
        I.size > 0 && (i.painting.paint.strokes = (Array.isArray((x = (z = i.painting) == null ? void 0 : z.paint) == null ? void 0 : x.strokes) ? i.painting.paint.strokes : []).filter((me) => !I.has(String((me == null ? void 0 : me.actionGroupId) || ""))), i.painting.groups = h().filter((me) => !I.has(String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || ""))), re()), q.size > 0 && (i.painting.raster_objects = X().filter((me) => !q.has(String((me == null ? void 0 : me.id) || ""))), j()), se.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((me) => se.has(String((me == null ? void 0 : me.id) || "")) ? F(me) ? (Q(me) || (me.visible = !1), !0) : !1 : !0), G(), ne()), t.selectedId = null, t.selectedIds = [], E(), u(), A(), ee(), W();
        return;
      }
      if (D(_)) {
        const I = String(_.actionGroupId || _.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((w = (V = i.painting) == null ? void 0 : V.paint) == null ? void 0 : w.strokes) ? i.painting.paint.strokes : []).filter((q) => String((q == null ? void 0 : q.actionGroupId) || "").trim() !== I), i.painting.groups = h().filter((q) => String((q == null ? void 0 : q.actionGroupId) || (q == null ? void 0 : q.id) || "").trim() !== I), re(), t.selectedId = null, t.selectedIds = [], E(), u(), A(), ee(), W();
        return;
      }
      if (H(_)) {
        const I = L(_.rasterObjectId || _.id || "");
        i.painting.raster_objects = X().filter((q) => String((q == null ? void 0 : q.id) || "").trim() !== I), j(), t.selectedId = null, t.selectedIds = [], E(), u(), A(), ee(), W();
        return;
      }
      if (o && K(_)) {
        f();
        return;
      }
      if (s === "stickers" || fe(_)) {
        if (F(_)) {
          if (Q(_)) return;
          _.visible = !1, ne(), E(), u(), A(), ee(), W();
          return;
        }
        i.stickers = i.stickers.filter((I) => I.id !== _.id), G(), ne(), t.selectedId = ((N = k()[0]) == null ? void 0 : N.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, E(), u(), A(), ee(), W();
        return;
      }
      l();
    }
  }
  function b() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", Se(), A());
  }
  return {
    connect(O) {
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
        getPaintingLayerList: S,
        getRasterObjectList: X,
        getSelected: $,
        getSelectedItems: B,
        isExternalSticker: F,
        isItemLocked: Y,
        isRasterObjectItem: H,
        isShotItem: K,
        isStickerHidden: Q,
        isStickerItem: fe,
        isStrokeGroupItem: D,
        isUploadingSticker: oe,
        markObjectVisualsDirty: ne,
        markPaintCompositeVisualsDirty: j,
        markPaintStrokeVisualsDirty: re,
        parseRasterObjectSelectionId: L,
        pruneUnusedAssets: G,
        pushHistory: E,
        requestDraw: W,
        selectedWorldSticker: R,
        stopTimelinePlayback: J,
        syncFloatingViewButtonState: ue,
        syncPaintUi: Se,
        updateSelectionMenu: ee,
        updateSidePanel: A,
        worldStickerEditable: te
      } = O);
    },
    clearAll: be,
    clearPaintingLayer: ve,
    duplicateSelected: C,
    deleteSelectedWorldSticker: le,
    deleteSelected: v,
    forceCursorTool: b
  };
}
function g2(e) {
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
  let k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E;
  function W(w) {
    return xd(w == null ? void 0 : w.dataTransfer);
  }
  function R(w) {
    const N = !!w;
    n.active !== N && (n.active = N, d.classList.toggle("drop-active", N));
  }
  function J() {
    const w = new Set(
      (u.stickers || []).map((N) => String((N == null ? void 0 : N.asset_id) || "")).filter((N) => !!N)
    );
    Object.keys(u.assets || {}).forEach((N) => {
      w.has(N) || (delete u.assets[N], s.delete(N));
    });
  }
  async function ue(w) {
    if (l || f !== "stickers" && f !== "cutout" || !Zn(w)) return;
    if (c) {
      L(), await ce(w);
      return;
    }
    const N = bi("asset"), I = Vo(a, `add:${N}`, async () => {
      try {
        const { image: q } = await $o(w);
        s.set(N, q);
        const se = bi("st");
        u.stickers.push({
          id: se,
          asset_id: N,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(q.naturalWidth || q.width || 1), Number(q.naturalHeight || q.height || 1)),
          rot_deg: 0,
          z_index: B()
        }), ne(u.stickers[u.stickers.length - 1]), $(), E(), G(), D();
        const me = await yi(w, {
          fetchApi: (we, Pe) => t.fetchApi(we, Pe)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((we) => String((we == null ? void 0 : we.asset_id) || "") === N).length) return;
        u.assets[N] = me, J(), fe(), m(), E(), G(), D();
      } catch (q) {
        delete u.assets[N], s.delete(N);
        const se = Array.isArray(u.stickers) ? u.stickers : [], me = se.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") === N);
        throw me.length && (u.stickers = se.filter((Z) => String((Z == null ? void 0 : Z.asset_id) || "") !== N), me.some((Z) => String((Z == null ? void 0 : Z.id) || "") === String(i.selectedId || "")) && ne(null), E(), G(), D(), m()), q;
      }
    });
    try {
      await I;
    } catch {
    }
  }
  function Se() {
    var w;
    l || f !== "stickers" && f !== "cutout" || (w = g == null ? void 0 : g.openImagePicker) == null || w.call(g, "add");
  }
  function ee() {
    var w;
    l || !c || (w = g == null ? void 0 : g.openImagePicker) == null || w.call(g, "add-world");
  }
  async function A(w) {
    l || !c || !Zn(w) || (L(), await ce(w, "world"));
  }
  function te() {
    const w = { x: r.width / 2, y: r.height / 2 }, N = H() ? o.pick(X(), w.x, w.y, r.width, r.height) : null;
    return eS(j(), N, S());
  }
  async function ce(w, N = "sky") {
    const I = bi("st"), q = Vo(a, `add:${I}`, async () => {
      const { image: se } = await $o(w), me = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(se.naturalWidth || se.width || 1), Number(se.naturalHeight || se.height || 1)),
        rot_deg: 0
      }, Z = { kind: "file", filename: "" }, he = N === "world" ? Ov(I, Z, te()) : nd(I, Z, me, B());
      s.set(re(he), se), u.stickers.push(he), N === "world" ? oe(I) : ne(he), $(), E(), G(), D();
      try {
        const we = await yi(w, {
          fetchApi: (de, ye) => t.fetchApi(de, ye)
        }), Pe = u.stickers.find((de) => de.id === I);
        if (!Pe) return;
        Pe.source = ma(we), s.set(re(Pe), se), fe(), m();
      } catch (we) {
        throw u.stickers = u.stickers.filter((Pe) => Pe.id !== I), i.selectedId === I && ne(null), i.worldSelectedId === I && k(), fe(), m(), we;
      } finally {
        E(), G(), D();
      }
    });
    try {
      await q;
    } catch {
    }
  }
  async function be(w, N) {
    const I = Vo(a, `replace:${N}:${bi("asset")}`, async () => {
      const { image: q } = await $o(w), se = await yi(w, {
        fetchApi: (Z, he) => t.fetchApi(Z, he)
      }), me = u.stickers.find((Z) => Z.id === N);
      if (me) {
        me.source = ma(se), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Z of [me.size.value, ...me.size.keyframes.map((he) => he.value)])
          Z.vFOV_deg = h(Z.hFOV_deg, Number(q.naturalWidth || q.width || 1), Number(q.naturalHeight || q.height || 1));
        s.set(re(me), q), Q(), fe(), m(), E(), G(), D();
      }
    });
    try {
      await I;
    } catch {
    }
  }
  async function ve(w) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const N = F();
    if (!N || !K(N) || Y(N) || !Zn(w)) return;
    if (c) {
      await be(w, N.id);
      return;
    }
    const I = String(N.id || ""), q = bi("asset"), se = Vo(a, `replace:${I}:${q}`, async () => {
      var de;
      const me = (Array.isArray(u.stickers) ? u.stickers : []).find((ye) => String((ye == null ? void 0 : ye.id) || "") === I) || null;
      if (!me || !K(me) || Y(me)) return;
      const Z = String(me.asset_id || ""), he = Z ? dn(((de = u.assets) == null ? void 0 : de[Z]) || null) : null, we = Number(me.vFOV_deg || 0), Pe = me.crop && typeof me.crop == "object" ? { ...me.crop } : null;
      try {
        const { image: ye } = await $o(w);
        s.set(q, ye), me.asset_id = q, me.vFOV_deg = h(
          Number(me.hFOV_deg || 30),
          Number(ye.naturalWidth || ye.width || 1),
          Number(ye.naturalHeight || ye.height || 1)
        ), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Q(), E(), G(), D();
        const y = await yi(w, {
          fetchApi: (T, P) => t.fetchApi(T, P)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((T) => String((T == null ? void 0 : T.id) || "") === I) || null;
        if (!p || String(p.asset_id || "") !== q) return;
        u.assets[q] = y, J(), fe(), m(), E(), G(), D();
      } catch (ye) {
        delete u.assets[q], s.delete(q);
        const y = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === I) || null;
        throw y && String(y.asset_id || "") === q && (Z && he && (u.assets[Z] = he), y.asset_id = Z, y.vFOV_deg = we, y.crop = Pe ? { ...Pe } : null), Q(), m(), E(), G(), D(), ye;
      }
    });
    try {
      await se;
    } catch {
    }
  }
  function C() {
    var N;
    if (l) return;
    const w = F();
    !w || !K(w) || Y(w) || (N = g == null ? void 0 : g.openImagePicker) == null || N.call(g, "replace");
  }
  async function le() {
    if (l || f !== "stickers") return;
    if (c) {
      await v();
      return;
    }
    const w = u.assets && typeof u.assets == "object" ? u.assets : {}, N = Object.entries(w).filter(([, q]) => {
      const se = String((q == null ? void 0 : q.type) || "").toLowerCase(), me = String((q == null ? void 0 : q.value) || "");
      return se === "dataurl" && me.startsWith("data:image");
    });
    if (!N.length) return;
    let I = !1;
    for (const [q, se] of N)
      try {
        const me = String((se == null ? void 0 : se.value) || "");
        if (!me) continue;
        const Z = await fetch(me).then((ye) => ye.blob()), he = String(Z.type || "image/png").split("/")[1] || "png", we = String((se == null ? void 0 : se.name) || `${q}.${he}`), Pe = new File([Z], we, { type: Z.type || "image/png" }), de = await yi(Pe, {
          fetchApi: (ye, y) => t.fetchApi(ye, y)
        });
        u.assets[q] = {
          ...de,
          w: Number((se == null ? void 0 : se.w) || 0),
          h: Number((se == null ? void 0 : se.h) || 0)
        }, I = !0;
      } catch {
      }
    I && (m(), D());
  }
  async function v() {
    let w = !1;
    for (const N of u.stickers) {
      const I = N.source.data_url;
      if (I)
        try {
          const q = await fetch(I).then((he) => he.blob()), se = String(q.type || "image/png").split("/")[1] || "png", me = new File([q], `${N.id}.${se}`, { type: q.type || "image/png" }), Z = await yi(me, {
            fetchApi: (he, we) => t.fetchApi(he, we)
          });
          N.source = ma(Z), w = !0;
        } catch {
        }
    }
    w && (m(), D());
  }
  function b(w) {
    f !== "stickers" && f !== "cutout" || l || (w.preventDefault(), R(!0));
  }
  function O(w) {
    var q;
    if (f !== "stickers" && f !== "cutout" || l) return;
    w.preventDefault(), w.stopPropagation(), n.depth = 0, R(!1);
    const I = Array.from(((q = w.dataTransfer) == null ? void 0 : q.files) || []).find((se) => Zn(se));
    I && ue(I);
  }
  function _(w) {
    f !== "stickers" && f !== "cutout" || l || W(w) && (n.depth += 1, R(!0), w.preventDefault());
  }
  function z(w) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && W(w) && R(!0), n.active && w.preventDefault());
  }
  function x(w) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const N = Number(w.clientX) <= 0 && Number(w.clientY) <= 0;
    (n.depth === 0 || N) && R(!1);
  }
  function V(w) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, R(!1), W(w) && w.preventDefault());
  }
  return {
    connect(w) {
      ({
        clearWorldSelection: k,
        commitAndRefreshNode: m,
        computeStickerVFov: h,
        contentSphere: S,
        currentSpaceCamera: X,
        forceCursorTool: $,
        getNextStickerZIndex: B,
        getSelected: F,
        isExternalSticker: Y,
        isSpaceView: H,
        isStickerItem: K,
        markObjectVisualsDirty: Q,
        pushHistory: fe,
        requestDraw: D,
        selectWorldSticker: oe,
        setSelectedItem: ne,
        spaceViewState: j,
        stickerImageKey: re,
        stopTimelinePlayback: L,
        updateSelectionMenu: G,
        updateSidePanel: E
      } = w);
    },
    addImageStickerFromFile: ue,
    addImageSticker: Se,
    addWorldImageSticker: ee,
    addWorldStickerFromFile: A,
    replaceSelectedImageFromFile: ve,
    replaceSelectedImage: C,
    migrateLegacyEmbeddedAssets: le,
    pruneUnusedAssets: J,
    setDropCue: R,
    onCanvasDragOver: b,
    onCanvasDrop: O,
    onWindowDragEnter: _,
    onWindowDragOver: z,
    onWindowDragLeave: x,
    onWindowDrop: V
  };
}
function y2(e) {
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
  let m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve = o;
  function C(y, p) {
    var M;
    const T = (M = F().space) == null ? void 0 : M.gizmo;
    if (D() && T && be("hover", p) !== null && be("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: T.mode, start: T.transform, base: B(), changed: !1 }, r.setPointerCapture(y.pointerId), A(p), !0;
    const P = xm(B(), h(E()));
    return lS($(), P, p, r.width, r.height) ? (D() || (G(q()), ce(), te(), re()), n.interaction = { kind: "world_select" }, r.setPointerCapture(y.pointerId), !0) : !1;
  }
  function le() {
    if (s || g !== "cutout") return;
    const y = q();
    if (y) {
      G(y), n.mode = "pano", ee(jt(Number(y.yaw_deg || 0)), Ie(Number(y.pitch_deg || 0), -89.9, 89.9)), ce(), te(), re({ cause: "cutout_frame" });
      return;
    }
    const p = Th({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], G(p), Y(), n.mode = "pano", j(), X(), ce(), te(), re({ cause: "cutout_frame" });
  }
  function v() {
    s || !u || K() || (R(), d.camera = wv(W()), N(), G(q()), Y(), j(), X(), ce(), te(), re({ cause: "cutout_frame" }));
  }
  function b() {
    R(), d.camera = null, G(null), N(), j(), X(), ce(), te(), re({ cause: "cutout_frame" });
  }
  function O(y, p) {
    u && oe(y) && (d.camera.projection = p === co ? "erp" : "perspective", p === co) || x(y, p);
  }
  function _() {
    s || g !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, j(), X(), ce(), te(), re());
  }
  function z(y, p) {
    const T = a.frameSafeRect;
    if (!y || !T || n.mode !== "frame") return !1;
    const P = hu * Ni(T, y), M = Wu(Gu(T, p), P);
    return y.hFOV_deg = M.hFOV_deg, y.vFOV_deg = M.vFOV_deg, !0;
  }
  function x(y, p) {
    if (!y || y.locked === !0) return;
    const T = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, P = (() => {
      const U = String(y.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(U)) {
        const [_e, Me] = U.split(":").map((De) => Number(De));
        if (Number.isFinite(_e) && Number.isFinite(Me)) return _e >= Me;
      }
      const ae = Number(y.hFOV_deg || 64), Ne = Number(y.vFOV_deg || 40);
      return Math.abs(ae - Ne) > 1e-6 ? ae >= Ne : Ei(y) >= 1;
    })();
    let [M, ie] = T[String(p)] || T["1:1"];
    M >= ie !== P && ([M, ie] = [ie, M]);
    const ge = M / ie;
    if (!z(y, ge)) {
      const U = Ie(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = U, y.hFOV_deg = fa(U, ge);
    }
    y.aspect_id = `${M}:${ie}`;
  }
  function V(y, p, T) {
    if (!y || y.locked === !0) return !1;
    const P = fs(p, T);
    if (!P) return !1;
    const M = P.ratio;
    if (!z(y, M)) {
      const ie = Ie(Number(y.vFOV_deg || 40), 1, 179);
      y.vFOV_deg = ie, y.hFOV_deg = fa(ie, M);
    }
    return y.aspect_id = P.label, !0;
  }
  function w(y) {
    if (!y || y.locked === !0) return;
    const p = String(y.aspect_id || "").trim(), T = oi(y), P = T.tanHalfX / Math.max(1e-12, T.tanHalfY), M = 1 / Math.max(1e-12, P);
    if (!z(y, M)) {
      const ie = Ie(Number(y.vFOV_deg || 60), 1, 179);
      y.vFOV_deg = ie, y.hFOV_deg = fa(ie, M);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [ie, ge] = p.split(":");
      y.aspect_id = `${ge}:${ie}`;
    } else
      y.aspect_id = ki(y);
  }
  function N(y = !0) {
    var P, M;
    if (!t) return;
    const p = ve;
    if (!S()) {
      ve = null, (P = d.shots) != null && P.length && (d.shots = []), p && I(p, null);
      return;
    }
    const T = (M = d.shots) == null ? void 0 : M[0];
    y && T && ve && kv(d.camera, n.frame, T, ve), ve = lm(d.camera, n.frame), T ? Object.assign(T, ve, { position: [...ve.position] }) : d.shots = [{ ...ve, position: [...ve.position] }], p || I(null, ve);
  }
  function I(y, p) {
    var ie, ge;
    !p && n.mode === "frame" && ne(y);
    const T = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((ge = (ie = n.viewTransition) == null ? void 0 : ie.end) == null ? void 0 : ge.mode) === "3dof") {
      Se({ ...W(), position: T }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !Q()) return;
    const P = (y == null ? void 0 : y.position) ?? [0, 0, 0];
    if (P.every((U, ae) => U === T[ae])) return;
    const M = { ...W(), position: P };
    m({ mode: "6dof", position: P, moved: !0 }), n.viewDistance = M.distance, Se({ ...M, position: T }, { mode: "3dof", moved: !1 });
  }
  function q() {
    if (!l) return null;
    const y = Array.isArray(d.shots) ? d.shots : [];
    if (!y.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return y.find((T) => String((T == null ? void 0 : T.id) || "") === p) || y[0] || null;
  }
  function se(y, p, T = {}) {
    var ie;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    y.accumulatedRad += Eh(p, y.lastAngle), y.lastAngle = p;
    const P = Oh(y.start.roll_deg, y.accumulatedRad, {
      shiftKey: T.shiftKey,
      altKey: y.altStarted ? !1 : T.altKey
    });
    y.shot.roll_deg = P, y.changed = y.changed || Math.abs(y.accumulatedRad) > 1e-9;
    const M = (((ie = k.sidePanel) == null ? void 0 : ie.params) || []).find((ge) => ge.key === "roll_deg");
    M && (M.value = P, M.displayValue = no(P), M.fillPct = (P + 180) / 360 * 100), J(), he(y), re({ localOnly: !0 });
  }
  function me(y, p, T = {}) {
    var ie;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot || !y.rollGesture) return;
    const P = dg(y.rollGesture, p, T);
    if (!P) return;
    y.rollGesture = P.gesture, y.center = P.gesture.center, y.lastAngle = P.gesture.lastAngle, y.accumulatedRad = P.gesture.accumulatedRad, y.shot.roll_deg = P.rollDeg, y.changed = y.changed || Math.abs(P.gesture.accumulatedRad) > 1e-9;
    const M = (((ie = k.sidePanel) == null ? void 0 : ie.params) || []).find((ge) => ge.key === "roll_deg");
    M && (M.value = P.rollDeg, M.displayValue = no(P.rollDeg), M.fillPct = (P.rollDeg + 180) / 360 * 100), J(), he(y), re({ localOnly: !0 });
  }
  function Z(y, p) {
    const T = L(y);
    return Math.atan2(T.y - p.y, T.x - p.x);
  }
  function he(y) {
    var ge, U;
    if ((y == null ? void 0 : y.kind) !== "roll_frame" || !y.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = H(y.shot), T = (ge = r.getBoundingClientRect) == null ? void 0 : ge.call(r), P = (U = c.getBoundingClientRect) == null ? void 0 : U.call(c);
    if (!p || !T || !P || r.width <= 0 || r.height <= 0) return;
    const M = T.width / r.width, ie = T.height / r.height;
    k.tooltip.text = `${no(y.shot.roll_deg)}°`, k.tooltip.left = T.left - P.left + (p.x + p.w * 0.5) * M, k.tooltip.top = T.top - P.top + (p.y + p.h * 0.5) * ie + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  function we(y) {
    var ie;
    if (y.button !== 0 || s || n.mode !== "frame") return;
    const p = q();
    if (!p || p.locked === !0) return;
    const T = H(p);
    if (!T) return;
    const P = { x: T.x + T.w * 0.5, y: T.y + T.h * 0.5 }, M = Z(y, P);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: P,
      lastAngle: M,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (ie = i.setPointerCapture) == null || ie.call(i, y.pointerId), y.preventDefault(), J(), he(n.interaction), re({ localOnly: !0 });
  }
  function Pe(y) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || se(
      n.interaction,
      Z(y, n.interaction.center),
      y
    );
  }
  function de() {
    const y = n.interaction;
    (y == null ? void 0 : y.kind) !== "roll_frame" || y.source !== "knob" || (y.changed && (j(), X(), ce()), n.interaction = null, fe(), ue(), J(), re());
  }
  function ye(y) {
    const p = n.mode === "frame" && !s ? q() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, j(), X(), ce(), J(), re(), y.preventDefault());
  }
  return {
    connect(y) {
      ({
        applySpaceMode: m,
        cameraFrustumLength: h,
        cameraShoots: S,
        commitAndRefreshNode: X,
        currentSpaceCamera: $,
        cutoutCamera: B,
        editorViewInput: F,
        forceCursorTool: Y,
        getFrameViewRect: H,
        hasCamera: K,
        hasSpaceContent: Q,
        hideTooltip: fe,
        isCameraSelected: D,
        isShotItem: oe,
        leaveFrameView: ne,
        pushHistory: j,
        requestDraw: re,
        screenPos: L,
        setSelectedItem: G,
        spaceScale: E,
        spaceViewState: W,
        stopTimelinePlayback: R,
        syncFrameRollKnob: J,
        syncViewToggleState: ue,
        transitionView: Se,
        turnViewTo: ee,
        updateCursor: A,
        updateSelectionMenu: te,
        updateSidePanel: ce,
        worldGizmoPointer: be
      } = y);
    },
    addCutoutFrame: le,
    addStudioCamera: v,
    deleteStudioCamera: b,
    setShotAspect: O,
    clearCutoutFrame: _,
    applyCutoutAspectCustom: V,
    rotateCutoutAspect90: w,
    syncCutoutShot: N,
    getActiveCutoutShot: q,
    startCameraPress: C,
    applySharedRollInteractionPoint: me,
    onFrameRollKnobPointerDown: we,
    onFrameRollKnobPointerMove: Pe,
    finishKnobRoll: de,
    onFrameRollKnobDoubleClick: ye
  };
}
function b2(e) {
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
  let m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re = null;
  function L(x) {
    if (n.mode = "pano", !x) return;
    h();
    const V = D().distance;
    n.viewYaw = jt(x.yaw_deg), n.viewPitch = Ie(x.pitch_deg, -89.9, 89.9), n.viewFov = Ie(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = V, d.backgroundDirty = !0;
  }
  function G() {
    var ye, y, p, T, P;
    if (!r) return null;
    const x = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), V = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, w = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(V, w);
    let N = 24, I = 24;
    const q = Math.max(N + 1, r.width - 24);
    let se = Math.max(I + 1, r.height - 24);
    const me = (y = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : y.call(f), Z = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a);
    let he = 24;
    me && x && me.width > 0 && me.height > 0 && (he = Math.max(he, (me.right - x.left) * V + up)), Z && x && Z.width > 0 && Z.height > 0 && ((T = g.frameRail) == null ? void 0 : T.visible) === !0 && (he = Math.max(he, (x.right - Z.left) * V + up)), N = Math.max(N, he);
    const we = Math.min(q, r.width - he);
    let Pe = 24;
    const de = (P = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : P.call(s);
    if (de && x && de.width > 0 && de.height > 0 && (Pe = Math.max(Pe, (de.bottom - x.top) * w + yc)), [l, k].forEach((M) => {
      var U;
      if (!M || !x) return;
      const ie = getComputedStyle(M);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const ge = (U = M.getBoundingClientRect) == null ? void 0 : U.call(M);
      !ge || ge.width <= 0 || ge.height <= 0 || (Pe = Math.max(Pe, (x.bottom - ge.top) * w + yc));
    }), o && x) {
      const M = getComputedStyle(o);
      M.display !== "none" && M.visibility !== "hidden" && Number(M.opacity) > 0 && (Pe = Math.max(Pe, ($P + yc) * w));
    }
    return I = Math.max(I, Pe), se = Math.max(I + 1, Math.min(se, r.height - Pe)), {
      x: N,
      y: I,
      w: Math.max(1, we - N),
      h: Math.max(1, se - I)
    };
  }
  function E(x = $()) {
    if (!x || !r) return null;
    const V = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return p1(V, x, hu * Ni(V, x));
  }
  function W(x = $()) {
    const V = E(x);
    return V ? { x: V.x, y: V.y, w: V.w, h: V.h } : null;
  }
  function R() {
    return u && !!$();
  }
  function J(x, V) {
    const w = $();
    if (!w || w.locked === !0) return !1;
    const N = Number(V) > 0, I = Lh(w, V);
    if (!I) return !1;
    if (N) {
      const q = hu * Ni(
        d.frameSafeRect || { w: r.width, h: r.height },
        I
      ), se = Ku({ width: r.width, height: r.height }, q);
      if (se.halfW < r.width * 0.5 - 1e-6 || se.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return w.hFOV_deg = I.hFOV_deg, w.vFOV_deg = I.vFOV_deg, ue(), j(), !0;
  }
  function ue() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, H(), S(), j());
    }, 180);
  }
  function Se() {
    return t && n.mode === "frame" && B();
  }
  function ee() {
    const x = $(), V = E(x);
    return x && V ? Pm(x, V, { width: r.width, height: r.height }) : null;
  }
  function A() {
    var x;
    return ((x = X()) == null ? void 0 : x.radius) || tr;
  }
  function te(x) {
    const { position: V, yaw_deg: w, pitch_deg: N, roll_deg: I, hFOV_deg: q } = x.shot;
    return { position: V, yaw_deg: w, pitch_deg: N, roll_deg: I, hFOV_deg: q, distance: A() };
  }
  function ce(x, V) {
    const { rect: w } = x;
    return i.pickSurface(Q(x.shot), V.x - w.x, V.y - w.y, w.w, w.h);
  }
  function be(x, V, w) {
    return Uc(V, ce(x, w), null, fe());
  }
  function ve(x) {
    return JSON.stringify([te(x), x.rect]);
  }
  function C(x) {
    const V = $();
    V.position = [...x.position], V.yaw_deg = x.yaw_deg, V.pitch_deg = x.pitch_deg;
  }
  function le(x, V) {
    const w = $();
    !w || c || w.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: w,
      last: x,
      start: { yaw_deg: Number(w.yaw_deg || 0), pitch_deg: Number(w.pitch_deg || 0) },
      changed: !1
    }, ne(x), r.setPointerCapture(V));
  }
  function v(x, V, w) {
    const N = ee();
    if (!N || c) return;
    const I = te(N);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: V, pivot: be(N, I, V), changed: !1 } : { kind: "frame_pan", last: V, depth: pm(I, fe()), changed: !1 }, ne(V), r.setPointerCapture(w);
  }
  function b(x, V) {
    const w = ee();
    if (!w) return;
    const N = te(w), I = V.x - x.last.x, q = V.y - x.last.y;
    C(x.kind === "frame_pan" ? gm(N, I, q, w.rect.w, w.rect.h, x.depth) : mm(N, I, q, r.height, x.pivot)), x.changed = x.changed || I !== 0 || q !== 0, x.last = V, K({ localOnly: !0, cause: "frame_view" });
  }
  function O(x, V) {
    const w = ee();
    if (!w || c) return;
    const N = te(w), I = performance.now(), q = { x: x.x, y: x.y, time: I, key: i.contentRevision(), view: ve(w) };
    if (!hm(re, q)) {
      const se = ce(w, x);
      re = { ...q, cost: performance.now() - I, hit: se };
    }
    C(ym(N, Uc(N, re.hit, null, fe()), V, fe())), re.view = ve(ee() ?? w), re.wheelTime = I, ue(), j(), K({ localOnly: !0, cause: "frame_view" });
  }
  function _() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, H(), S(), j(), !0) : !1;
  }
  function z() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const V = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, V && F(), n.interaction = null, Y(), oe(), j(), ne(n.pointerPos), K({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: m,
        cancelViewTransition: h,
        commitAndRefreshNode: S,
        contentSphere: X,
        getActiveCutoutShot: $,
        hasSpaceContent: B,
        hideTooltip: F,
        invalidateLivePaintPreviewCaches: Y,
        pushHistory: H,
        requestDraw: K,
        shotViewCamera: Q,
        spaceScale: fe,
        spaceViewState: D,
        syncViewToggleState: oe,
        updateCursor: ne,
        updateSidePanel: j
      } = x);
    },
    leaveFrameView: L,
    measureFrameSafeRect: G,
    getFrameViewLayout: E,
    getFrameViewRect: W,
    supportsFramePainting: R,
    zoomFrameViewAt: J,
    isFreeFrameView: Se,
    frameContext: ee,
    frameViewDistance: A,
    frameSpaceView: te,
    frameTarget: be,
    startPanFrame: le,
    startFrameDrag: v,
    dragFrame: b,
    zoomFrameAt: O,
    flushFrameWheelCommit: _,
    cancelFrameCameraGesture: z
  };
}
function v2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K = 0;
  function Q() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function fe() {
    return String(Q() || "") === "lasso_fill";
  }
  function D() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function oe(C, le) {
    const v = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, v / 2048)
    };
  }
  function ne(C) {
    const le = String(C || "").trim();
    return le === "eraser" ? Er : Pn[le] ? le : t.activeBrushPresetId || Er;
  }
  function j() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (D() || H());
  }
  function re() {
    var C;
    return j() && ((C = t.pointerPos) == null ? void 0 : C.inside) === !0;
  }
  function L(C, le = !0) {
    const v = Number((C == null ? void 0 : C.x) || 0), b = Number((C == null ? void 0 : C.y) || 0), O = le !== !1, _ = t.pointerPos || { x: 0, y: 0, inside: !1 }, z = _.inside !== O || Math.abs(_.x - v) > 0.01 || Math.abs(_.y - b) > 0.01;
    return t.pointerPos = { x: v, y: b, inside: O }, z;
  }
  function G() {
    var N, I;
    if (!re()) return null;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool, v = ne(le), b = Pn[v] || Pn[Er], O = Number(t.brushSizes[v] ?? 10), _ = Math.max(1, O) * Math.max(0.1, Number(b.sizeScale ?? 1)), z = Math.max(3, _ * 0.5), x = C === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Tn(t.paintColor), V = C === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(x.a ?? 1) * 0.3), 0.16, 0.52), w = C === "mask" ? 0.95 : le === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(x.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: C,
      toolKind: le,
      preset: b,
      radius: z,
      fillStyle: hr(x, V),
      strokeStyle: hr(x, w),
      x: Number(((N = t.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((I = t.pointerPos) == null ? void 0 : I.y) || 0),
      hotspotX: z,
      hotspotY: z
    };
  }
  function E() {
    var q, se, me;
    const C = G();
    if (!r) return;
    if (!C) {
      r.style.display = "none";
      return;
    }
    let le = C.radius * 2, v = C.radius * 2, b = "999px", O = 0, _ = C.fillStyle, z = "1px solid rgba(222, 222, 222, 0.72)", x = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const V = "rgba(222, 222, 222, 0.72)", w = "rgba(52, 52, 52, 0.72)";
    let N = Number(C.hotspotX ?? le * 0.5), I = Number(C.hotspotY ?? v * 0.5);
    if (C.toolKind === "lasso_fill")
      le = nl, v = nl, b = "0", z = "0", x = "none", N = HP, I = GP, _ = qP(C.fillStyle, w, V);
    else if (C.layerKind === "mask")
      _ = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (C.toolKind === "marker") {
      const Z = Math.max(1, Number(((q = C.preset) == null ? void 0 : q.aspect) ?? 1));
      le = Math.max(10, C.radius * 2 * Z), v = Math.max(6, C.radius * 2), b = `${Math.min(6, v * 0.42)}px`, O = Number(((me = (se = C.preset) == null ? void 0 : se.angle) == null ? void 0 : me.value) || 0) * Ci;
    } else C.toolKind === "brush" ? _ = `radial-gradient(circle at 50% 50%, ${C.strokeStyle} 0%, ${C.fillStyle} 45%, rgba(0,0,0,0) 100%)` : C.toolKind === "eraser" && (_ = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(v)}px`, r.style.borderRadius = b, r.style.border = z, r.style.boxShadow = x, r.style.background = _, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(C.x - N)}px, ${Math.round(C.y - I)}px) rotate(${O}deg)`;
  }
  function W() {
    var Pe;
    if (!n || !i) return;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const v = ne(le), b = Pn[v] || Pn[Er], O = Number(t.brushSizes[v] ?? 10), _ = Math.max(1, O) * Math.max(0.1, Number(b.sizeScale ?? 1)), z = Math.max(6, _ * 0.5), x = le === "eraser", V = C === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : x ? { r: 1, g: 1, b: 1, a: 0.22 } : Tn(t.paintColor), w = C === "mask" ? hr(V, 0.22) : x ? "rgba(255,255,255,0.14)" : hr(V, Ie(Math.max(0.18, Number(V.a ?? 1) * 0.34), 0.18, 0.56)), N = C === "mask" ? hr(V, 0.96) : x ? "rgba(255,255,255,0.72)" : hr(V, Ie(Math.max(0.56, Number(V.a ?? 1) * 0.96), 0.56, 1));
    let I = z * 2, q = z * 2, se = "999px", me = 0, Z = w;
    const he = "rgba(222, 222, 222, 0.72)", we = "rgba(52, 52, 52, 0.72)";
    if (C === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const de = Math.max(1, Number((b == null ? void 0 : b.aspect) ?? 1));
      I = Math.max(16, z * 2 * de), q = Math.max(10, z * 2), se = `${Math.min(8, q * 0.42)}px`, me = Number(((Pe = b == null ? void 0 : b.angle) == null ? void 0 : Pe.value) || 0) * Ci;
    } else le === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${N} 0%, ${w} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (I = Math.max(18, z * 1.8), q = I, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : x && (Z = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(I)}px`, i.style.height = `${Math.round(q)}px`, i.style.borderRadius = se, i.style.background = Z, i.style.border = `1px solid ${he}`, i.style.boxShadow = `0 0 0 1px ${we}`, i.style.transform = `rotate(${me}deg)`, K && (clearTimeout(K), K = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function R() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), K && clearTimeout(K), K = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), K = 0;
    }, 180));
  }
  function J(C, le, v, b) {
    const O = ne(le), _ = Pn[O] || Pn[Er], z = t.brushSizes[O] ?? 10, x = Math.max(1, z) * Math.max(0.1, _.sizeScale ?? 1), V = oe(b, x), w = v.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), N = {
      id: Bi(C),
      actionGroupId: Bi("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: x,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: V.radiusModel,
      radiusValue: V.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: w.map((I) => ({ ...I })),
        points: w.map((I) => ({ ...I }))
      }
    };
    return cp(N, _), t.mode, Number(_.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function ue(C, le, v, b) {
    const O = v.map((V) => ({
      ...V,
      t: Number((V == null ? void 0 : V.t) || 0),
      widthScale: Number.isFinite(Number(V == null ? void 0 : V.widthScale)) ? Math.max(0, Number(V.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(V == null ? void 0 : V.pressureLike)) ? Math.max(0, Number(V.pressureLike)) : 1
    })), _ = ne(le), z = Pn[_] || Pn[Er], x = {
      id: Bi(C),
      actionGroupId: Bi("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: O.map((V) => ({ ...V }))
      }
    };
    return cp(x, z), t.mode, Number(z.aspect ?? 1), Number(x.aspect ?? 1), String(x.stampKind || ""), { ...x.targetSpace }, x;
  }
  function Se(C) {
    const le = o.painting || (o.painting = po(null)), v = le[C] || (le[C] = { strokes: [] });
    return Array.isArray(v.strokes) || (v.strokes = []), v.strokes;
  }
  function ee(C, le, v = performance.now()) {
    let b;
    if (t.mode === "frame") {
      const w = f();
      if (!w || (b = Y(le, w, v), !b)) return !1;
    } else
      b = F(le, v);
    if (!b) return !1;
    const O = C.stroke.geometry.rawPoints || C.stroke.geometry.points, _ = C.stroke.geometry.points, z = O[O.length - 1];
    if (z) {
      const w = Math.abs(Number(b.u ?? b.x ?? 0) - Number(z.u ?? z.x ?? 0)), N = Math.abs(Number(b.v ?? b.y ?? 0) - Number(z.v ?? z.y ?? 0));
      if (w < 15e-4 && N < 15e-4) return !1;
    }
    const x = {
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    O.push({ ...x }), _.push({ ...x });
    const V = g(C);
    if (V) {
      const w = t.paintEngine.ensureTarget(V);
      t.paintEngine.appendStrokePoint(w, Number(x.u ?? 0), Number(x.v ?? 0), C.stroke);
    }
    return !0;
  }
  function A(C, le, v = performance.now()) {
    var z, x;
    let b;
    if (t.mode === "frame") {
      const V = f();
      if (!V) return !1;
      b = Y(le, V, v);
    } else
      b = F(le, v);
    const O = (x = (z = C == null ? void 0 : C.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.points;
    if (!b || !Array.isArray(O)) return !1;
    const _ = O[O.length - 1];
    if (_) {
      const V = Math.abs(Number(b.u ?? b.x ?? 0) - Number(_.u ?? _.x ?? 0)), w = Math.abs(Number(b.v ?? b.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (V < 15e-4 && w < 15e-4) return !1;
    }
    return O.push({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function te(C) {
    var de, ye, y, p, T;
    const le = (C == null ? void 0 : C.stroke) || null;
    if (!le || (C == null ? void 0 : C.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    B();
    const v = g(), b = c(v.width, v.height);
    if (!$(b, le, { w: v.width, h: v.height })) return !1;
    const O = ((ye = (de = b.ctx) == null ? void 0 : de.getImageData(0, 0, v.width, v.height)) == null ? void 0 : ye.data) || null;
    if (!O) return !1;
    const _ = new Map(m().map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), P ? { ...P } : null])), z = [], x = [], V = [...h().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") !== "paint")];
    let w = !1, N = k().reduce((P, M) => Math.max(P, Number((M == null ? void 0 : M.z_index) || 0)), -1) + 1;
    function I(P, M, ie, ge = 8) {
      let U = M, ae = ie, Ne = -1, _e = -1;
      for (let Me = 0; Me < ie; Me += 1)
        for (let De = 0; De < M; De += 1)
          P[(Me * M + De) * 4 + 3] <= ge || (De < U && (U = De), Me < ae && (ae = Me), De > Ne && (Ne = De), Me > _e && (_e = Me));
      return Ne < U || _e < ae ? null : { minX: U, minY: ae, maxX: Ne, maxY: _e };
    }
    const q = I(O, v.width, v.height, 8);
    if (!q) return !1;
    function se(P, M) {
      return !P || !M ? !1 : !(P.maxX < M.minX || M.maxX < P.minX || P.maxY < M.minY || M.maxY < P.minY);
    }
    function me(P, M) {
      const ie = d((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "", "paint", M);
      if (!ie) return null;
      const ge = ie.centerUv.u - ie.halfW, U = ie.centerUv.u + ie.halfW, ae = ie.centerUv.v - ie.halfH, Ne = ie.centerUv.v + ie.halfH, _e = v.width, Me = v.height;
      return {
        minX: Math.floor((ge % 1 + 1) % 1 * _e),
        maxX: Math.ceil((U % 1 + 1) % 1 * _e),
        minY: Math.floor(Ie(ae, 0, 1) * Me),
        maxY: Math.ceil(Ie(Ne, 0, 1) * Me),
        wraps: U - ge >= 1 || ge < 0 || U > 1
      };
    }
    function Z(P) {
      const M = (P == null ? void 0 : P.bbox) || null;
      if (!M) return null;
      const ie = (P == null ? void 0 : P.transform) || {}, ge = v.width, U = v.height, ae = Number(M.u0 || 0) + Number(ie.du || 0), Ne = Number(M.u1 || 0) + Number(ie.du || 0), _e = Number(M.v0 || 0) + Number(ie.dv || 0), Me = Number(M.v1 || 0) + Number(ie.dv || 0);
      return {
        minX: Math.floor((ae % 1 + 1) % 1 * ge),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * ge),
        minY: Math.floor(Ie(_e, 0, 1) * U),
        maxY: Math.ceil(Ie(Me, 0, 1) * U),
        wraps: Ne - ae >= 1 || ae < 0 || Ne > 1
      };
    }
    function he(P) {
      return P ? P.wraps ? se(q, { minX: 0, maxX: P.maxX, minY: P.minY, maxY: P.maxY }) || se(q, { minX: P.minX, maxX: v.width - 1, minY: P.minY, maxY: P.maxY }) : se(q, P) : !0;
    }
    function we(P) {
      if (!P) return { touched: !1, canvas: null };
      const M = c(v.width, v.height, { readback: !0 });
      M.ctx.drawImage(P, 0, 0);
      const ie = M.ctx.getImageData(0, 0, v.width, v.height);
      M.ctx.save(), M.ctx.globalCompositeOperation = "destination-out", M.ctx.drawImage(b.canvas, 0, 0), M.ctx.restore();
      const ge = M.ctx.getImageData(0, 0, v.width, v.height);
      for (let U = 0; U < v.width * v.height; U += 1) {
        if (O[U * 4 + 3] <= 8) continue;
        const Ne = ie.data[U * 4 + 3], _e = ge.data[U * 4 + 3];
        if (Ne > _e)
          return { touched: !0, canvas: M.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Pe(P, M, ie) {
      const ge = Number(ie == null ? void 0 : ie.z_index), U = l(P, M, ie).map((ae, Ne) => ({
        ...ae,
        z_index: Number.isFinite(ge) ? ge + Ne * 1e-3 : N + Ne * 1e-3
      }));
      return U.length && (N = Math.max(N, ...U.map((ae) => Number((ae == null ? void 0 : ae.z_index) || 0))) + 1), U;
    }
    for (const P of m()) {
      const M = String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim();
      if (!M) continue;
      const ie = S(M, "paint");
      if (!he(me(P, ie))) {
        x.push(P), z.push(...ie);
        continue;
      }
      const ge = ((p = (y = t.paintEngine) == null ? void 0 : y.getGroupTarget) == null ? void 0 : p.call(y, M)) || null, U = ((T = ge == null ? void 0 : ge.committedPaint) == null ? void 0 : T.canvas) || null;
      if (!U) {
        x.push(P), z.push(...ie);
        continue;
      }
      const ae = we(U);
      if (!ae.touched || !ae.canvas) {
        x.push(P), z.push(...ie);
        continue;
      }
      w = !0;
      const Ne = Pe(ae.canvas, "paint", _.get(M) || P || {});
      V.push(...Ne);
    }
    for (const P of h().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") === "paint")) {
      if (!he(Z(P))) {
        V.push(P);
        continue;
      }
      const M = s(P, null);
      if (!M) {
        V.push(P);
        continue;
      }
      const ie = we(M);
      if (!ie.touched || !ie.canvas) {
        V.push(P);
        continue;
      }
      w = !0;
      const ge = Pe(ie.canvas, "paint", P);
      V.push(...ge);
    }
    return w ? (o.painting.paint.strokes = z, o.painting.groups = x.sort((P, M) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), o.painting.raster_objects = V.sort((P, M) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ce(C) {
    var z, x, V, w, N;
    if ((((x = (z = C.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.rawPoints) || ((w = (V = C.stroke) == null ? void 0 : V.geometry) == null ? void 0 : w.points) || []).length >= 1) {
      ve(C);
      const I = g(C);
      I && (String(((N = C.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(I) : t.paintEngine.commitActiveStroke(C.stroke, I)), C._hasCommittedSegments = !0;
    }
    const v = C.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, O = J(C.layerKind, v.toolKind, [], b);
    O.actionGroupId = v.actionGroupId, C.stroke = O;
    const _ = g(C);
    _ && t.paintEngine.beginStroke(O, _);
  }
  function be(C) {
    var z, x;
    if ((((x = (z = C.stroke) == null ? void 0 : z.geometry) == null ? void 0 : x.points) || []).length >= 3) {
      ve(C);
      const V = g(C);
      V && t.paintEngine.commitActiveStroke(C.stroke, V), C._hasCommittedSegments = !0;
    }
    const v = C.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, O = ue(C.layerKind, v.toolKind, [], b);
    O.actionGroupId = v.actionGroupId, C.stroke = O;
    const _ = g(C);
    _ && t.paintEngine.beginStroke(O, _);
  }
  function ve(C) {
    var _, z, x, V;
    const le = ((_ = C == null ? void 0 : C.stroke) == null ? void 0 : _.geometry) || null;
    if (!le) return !1;
    const v = String(((z = C == null ? void 0 : C.stroke) == null ? void 0 : z.toolKind) || "pen");
    if (C.layerKind === "paint" && v === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = X(le.rawPoints || le.points || [], C.stroke.targetSpace, !0)), te(C);
    const b = C.layerKind === "paint" && v !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (b && u((x = C.stroke) == null ? void 0 : x.actionGroupId), Se(C.layerKind).push(C.stroke), !0);
    const O = le.rawPoints || le.points || [];
    return O.length < 1 ? !1 : (le.processedPoints = X(O, C.stroke.targetSpace, !0), b && u((V = C.stroke) == null ? void 0 : V.actionGroupId), Se(C.layerKind).push(C.stroke), !0);
  }
  return {
    connect(C) {
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
        getStrokeGroupStrokes: S,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: B,
        screenPosToErpPoint: F,
        screenPosToFrameAsErpPoint: Y,
        supportsFramePainting: H
      } = C);
    },
    isActiveLassoTool: fe,
    supportsErpPainting: D,
    getBrushPresetIdForTool: ne,
    isPaintCursorEnabled: j,
    isActivePaintCursorVisible: re,
    setPointerPos: L,
    syncPaintCursorElement: E,
    showPaintSizePreview: W,
    hidePaintSizePreview: R,
    buildFreehandStrokeRecord: J,
    buildLassoFillStrokeRecord: ue,
    getPaintingLayerList: Se,
    appendPaintPoint: ee,
    appendLassoPoint: A,
    _segmentFrameStroke: ce,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: ve
  };
}
function S2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D;
  function oe(E) {
    var R;
    if (n && t.mode === "frame") {
      const J = s(), ue = l(J);
      if (!J || !ue || !(Number((E == null ? void 0 : E.x) || 0) >= Number(ue.x || 0) && Number((E == null ? void 0 : E.x) || 0) <= Number(ue.x || 0) + Number(ue.w || 0) && Number((E == null ? void 0 : E.y) || 0) >= Number(ue.y || 0) && Number((E == null ? void 0 : E.y) || 0) <= Number(ue.y || 0) + Number(ue.h || 0))) return null;
      const ee = K(E, J, performance.now()), A = ee ? o(ee) : null;
      if (A)
        for (const ce of a()) {
          if (!$(ce)) continue;
          const be = D(ce, A);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const ve = H(ce);
            if (ve != null && ve.visible) return { item: ce, geom: ve };
          }
        }
      const te = c(!1).slice().sort((ce, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ce == null ? void 0 : ce.z_index) || 0));
      for (const ce of te) {
        if (ce.type === "strokeGroup") {
          const C = f(Y("paint", ce.actionGroupId || ce.id || ""));
          if (!C) continue;
          const le = H(C);
          if (!(le != null && le.visible)) continue;
          const v = Array.isArray(le.strokePaths) ? le.strokePaths : [];
          for (const b of v) {
            const O = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
            if (!O.length) continue;
            if (b.closed && O.length >= 3 && Jr(E, O)) return { item: C, geom: le };
            const _ = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
            for (let z = 0; z < O.length - 1; z += 1)
              if (Sc(E, O[z], O[z + 1]) <= _ * _) return { item: C, geom: le };
            if (O.length === 1 && jo(E, O[0]) <= _ * _) return { item: C, geom: le };
          }
          continue;
        }
        if (ce.type === "rasterObject") {
          const C = d(F(((R = ce.item) == null ? void 0 : R.id) || ce.id || ""));
          if (!C) continue;
          const le = H(C);
          if (g(C, le, E, ee)) return { item: C, geom: le };
          continue;
        }
        const be = ce.item;
        if (!be || !$(be) || !A) continue;
        const ve = D(be, A);
        if (ve && Number(ve.x) >= 0 && Number(ve.x) <= 1 && Number(ve.y) >= 0 && Number(ve.y) <= 1) {
          const C = H(be);
          if (C != null && C.visible) return { item: be, geom: C };
        }
      }
      return null;
    }
    const W = [
      ...c(!1).slice().sort((J, ue) => Number((ue == null ? void 0 : ue.z_index) || 0) - Number((J == null ? void 0 : J.z_index) || 0)).map((J) => {
        var ue;
        return J.type === "strokeGroup" ? f(Y("paint", J.actionGroupId || J.id || "")) : J.type === "rasterObject" ? d(F(((ue = J.item) == null ? void 0 : ue.id) || J.id || "")) : J.item;
      }).filter(Boolean),
      ...n ? a().filter((J) => X(J)) : []
    ];
    for (const J of W) {
      if (B(J)) {
        const Se = H(J);
        if (!(Se != null && Se.visible)) continue;
        const ee = Array.isArray(Se.strokePaths) ? Se.strokePaths : [];
        for (const A of ee) {
          const te = Array.isArray(A == null ? void 0 : A.points) ? A.points : [];
          if (!te.length) continue;
          if (A.closed && te.length >= 3 && Jr(E, te)) return { item: J, geom: Se };
          const ce = Math.max(8, Number((A == null ? void 0 : A.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < te.length - 1; be += 1)
            if (Sc(E, te[be], te[be + 1]) <= ce * ce) return { item: J, geom: Se };
          if (te.length === 1 && jo(E, te[0]) <= ce * ce) return { item: J, geom: Se };
        }
        continue;
      }
      if (S(J)) {
        const Se = H(J);
        if (!(Se != null && Se.visible)) continue;
        if (g(J, Se, E)) return { item: J, geom: Se };
        continue;
      }
      const ue = H(J);
      if (ue.visible && Jr(E, ue.corners))
        return { item: J, geom: ue };
    }
    return null;
  }
  function ne(E, W, R = null) {
    if (!E || !E.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if ($(R)) return nu(E, W);
    if (E.kind === "strokeGroup") {
      const J = E.corners.findIndex((Se) => jo(Se, W) <= 121);
      if (J >= 0) {
        const Se = E.corners[J], ee = Se.x - E.center.x, A = Se.y - E.center.y, te = ee * A >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: J, cursor: te };
      }
      const ue = Array.isArray(E.strokePaths) ? E.strokePaths : [];
      for (const Se of ue) {
        const ee = Array.isArray(Se == null ? void 0 : Se.points) ? Se.points : [];
        if (Se.closed && ee.length >= 3 && Jr(W, ee)) return { kind: "move", cursor: "default" };
        const A = Math.max(8, Number((Se == null ? void 0 : Se.lineWidth) || 0) * 0.5 + 6);
        for (let te = 0; te < ee.length - 1; te += 1)
          if (Sc(W, ee[te], ee[te + 1]) <= A * A) return { kind: "move", cursor: "default" };
      }
      return Jr(W, E.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (E.kind === "rasterObject") {
      const J = E.corners.findIndex((ue) => jo(ue, W) <= 121);
      if (J >= 0) {
        const ue = E.corners[J], Se = ue.x - E.center.x, ee = ue.y - E.center.y, A = Se * ee >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: J, cursor: A };
      }
      return Jr(W, E.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return $_(E, W, {
      edges: i === "cutout" || X(R),
      resize: !(X(R) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function j(E, W) {
    return {
      x0: Math.min(Number((E == null ? void 0 : E.x) || 0), Number((W == null ? void 0 : W.x) || 0)),
      y0: Math.min(Number((E == null ? void 0 : E.y) || 0), Number((W == null ? void 0 : W.y) || 0)),
      x1: Math.max(Number((E == null ? void 0 : E.x) || 0), Number((W == null ? void 0 : W.x) || 0)),
      y1: Math.max(Number((E == null ? void 0 : E.y) || 0), Number((W == null ? void 0 : W.y) || 0))
    };
  }
  function re(E, W) {
    return !!E && !!W && Number(W.x) >= Number(E.x0) && Number(W.x) <= Number(E.x1) && Number(W.y) >= Number(E.y0) && Number(W.y) <= Number(E.y1);
  }
  function L(E, W) {
    if (!E || !(W != null && W.visible) || !Array.isArray(W.corners)) return !1;
    if (W.corners.some((ue) => re(E, ue))) return !0;
    const R = (Number(E.x0) + Number(E.x1)) * 0.5, J = (Number(E.y0) + Number(E.y1)) * 0.5;
    return !!Jr({ x: R, y: J }, W.corners);
  }
  function G(E) {
    if (fe(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? Q("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? Q("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? Q("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? Q("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? Q("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? Q(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? Q("grabbing") : Q("default");
      return;
    }
    if (k()) {
      Q("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        Q(VP);
        return;
      }
      if (t.primaryTool !== "cursor") {
        Q("default");
        return;
      }
      Q("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      Q("default");
      return;
    }
    if (t.gizmoAxis) {
      Q("grab");
      return;
    }
    const W = u(), R = W ? H(W) : null, J = W ? h(W) : !1, ue = J ? { kind: "none", cursor: "default" } : ne(R, E, W);
    if (!J && ue.kind !== "none") {
      Q(ue.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && oe(E)) {
      Q("default");
      return;
    }
    Q(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(E) {
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
        isRasterObjectItem: S,
        isShotItem: X,
        isStickerItem: $,
        isStrokeGroupItem: B,
        makeRasterObjectSelectionId: F,
        makeStrokeGroupSelectionId: Y,
        objectGeom: H,
        screenPosToFrameAsErpPoint: K,
        setCanvasCursor: Q,
        syncPaintCursorElement: fe,
        worldDirToFrameLocalPoint: D
      } = E);
    },
    hitObjectAt: oe,
    handleHit: ne,
    rectFromPoints: j,
    rectIntersectsGeom: L,
    updateCursor: G
  };
}
function _2(e) {
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
  let f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne = !1;
  function j() {
    return ne;
  }
  function re() {
    if (!o) return;
    if (ne = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || B() && H()) {
      const ee = L();
      ne = ee.visible, G(ee);
      return;
    }
    const R = S(), J = X();
    if (!R && J.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ue = $(), Se = i2({
      type: d,
      selected: R,
      selectedItems: J,
      selectedKind: ue,
      geom: J.length > 1 ? h(J) : oe(R),
      allLocked: f(J),
      anyLocked: J.some((ee) => K(ee)),
      selectedLocked: K(R),
      activeAspect: Q(R) && F() ? co : Dr(R),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: Y,
      isStickerHidden: D,
      canRestoreSelectedToInitial: g,
      iconSet: ze,
      cameraShot: t,
      coverage: a.coverage
    });
    G(Se);
  }
  function L() {
    const R = fe() && !n.interaction ? m().space : null;
    if (!(R != null && R.gizmo)) return { visible: !1 };
    const J = k(), ue = R.stickers.find((te) => te.id === n.worldSelectedId), ee = (ue ? ld(ue) : [R.gizmo.transform.position]).map((te) => us(J, te, r.width, r.height)).filter(Boolean), A = oS(J, R.gizmo.transform.position, R.gizmo.mode, r.width, r.height);
    return o2({ corners: ee, gizmoBox: A, gizmoMode: R.gizmo.mode, camera: B() });
  }
  function G(R) {
    var A, te;
    if (!R.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const J = (ce, be) => s2(R.anchor, ce, be, r.width, r.height), ue = Math.max(1, Number(((A = n.menuSize) == null ? void 0 : A.w) || 220)), Se = Math.max(1, Number(((te = n.menuSize) == null ? void 0 : te.h) || 40)), ee = J(ue, Se);
    if (!ee) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: ee.left,
      top: ee.top,
      items: R.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ce = o.getBoundingClientRect(), be = Math.round(Number((ce == null ? void 0 : ce.width) || 0)) || 220, ve = Math.round(Number((ce == null ? void 0 : ce.height) || 0)) || 40;
      n.menuSize = { w: be, h: ve, measured: !0 };
      const C = J(be, ve);
      C && (u.selectionMenu.left = C.left, u.selectionMenu.top = C.top);
    });
  }
  function E() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function W(R) {
    if (!c || !R || !R.isConnected) return;
    const J = String(R.getAttribute("data-tip") || "").trim();
    if (!J) return;
    u.tooltip.text = J, u.tooltip.visible = !0;
    const ue = R;
    i.requestFrame(() => {
      var _, z;
      if (l.target !== ue || !c || !(ue != null && ue.isConnected)) return;
      const Se = s.getBoundingClientRect(), ee = ue.getBoundingClientRect(), A = 8, te = 12, ce = Math.round(Number(((_ = c.getBoundingClientRect()) == null ? void 0 : _.width) || 0)) || 100, be = Math.round(Number(((z = c.getBoundingClientRect()) == null ? void 0 : z.height) || 0)) || 24, ve = !!ue.closest(".pano-floating-left"), C = !!ue.closest(".pano-frame-rail"), le = !!ue.closest(".pano-paint-footer") || !!ue.closest(".pano-paint-color-float");
      let v = "", b = ee.left - Se.left + ee.width * 0.5 - ce * 0.5, O = ee.top - Se.top - be - te;
      if (ue.closest(".pano-floating-top") && (O = ee.bottom - Se.top + te), ve)
        v = "tool-rail", b = ee.right - Se.left + 10, O = ee.top - Se.top + ee.height * 0.5 - be * 0.5, b = Ie(b, A, Math.max(A, Se.width - ce - A)), O = Ie(O, A, Math.max(A, Se.height - be - A));
      else if (C)
        v = "frame-rail", b = ee.left - Se.left - ce - 10, O = ee.top - Se.top + ee.height * 0.5 - be * 0.5, b = Ie(b, A, Math.max(A, Se.width - ce - A)), O = Ie(O, A, Math.max(A, Se.height - be - A));
      else if (le) {
        v = "footer";
        const x = ue.closest(".pano-paint-footer"), V = x ? x.getBoundingClientRect() : ee;
        b = V.left - Se.left + V.width * 0.5 - ce * 0.5, O = V.bottom - Se.top + 5, b = Ie(b, A, Math.max(A, Se.width - ce - A)), O = Math.max(A, O);
      }
      b = Ie(b, A, Math.max(A, Se.width - ce - A)), O = Math.max(A, O), u.tooltip.left = b, u.tooltip.top = O, u.tooltip.variant = v, u.tooltip.visible = !0;
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
        getSelected: S,
        getSelectedItems: X,
        getSelectedKind: $,
        isCameraSelected: B,
        isErpCamera: F,
        isExternalSticker: Y,
        isFreeSpaceView: H,
        isItemLocked: K,
        isShotItem: Q,
        isSpaceView: fe,
        isStickerHidden: D,
        objectGeom: oe
      } = R);
    },
    isWorldMenuShown: j,
    updateSelectionMenu: re,
    hideTooltip: E,
    showTooltipFor: W
  };
}
function w2(e) {
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
  let h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve, C, le, v, b, O, _, z, x, V, w, N, I, q, se, me, Z, he, we, Pe, de, ye, y, p, T, P, M, ie, ge, U, ae, Ne, _e, Me, De, Le, Ge, Xe, Ve, je, pe, Oe, Ae, $e, Be, He, We, ft, yt, Lt, At, zn, qe, sn, Gt, ir, or, li, rn, bn, Ur, xr, sr, Oi, bo, Ms, Ps, Ns, vo, Br, Tt, qn, ar, So, Fn, As, Cs, Is, kr = null;
  function Es(Ce) {
    g.selection && (g.selection = null, vo());
    const Ee = $e(Ce);
    kr = Ee, At(Ee, !0), ne(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const xe = y(), _t = ye(), lt = xe || _t ? Q_(So(), Ce) : null;
    if (_t && lt) {
      Ce.preventDefault(), lt === "look" ? bn(Ee, Ce.pointerId) : rn(lt, Ee, Ce.pointerId);
      return;
    }
    if (lt === "look") {
      Ce.preventDefault();
      const Je = Be(Ce);
      n.interaction = { kind: "view", last: Je, lastTs: performance.now() }, m.startDrag(Je.x, Je.y, Ce.pointerId, performance.now()), Tt(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (lt) {
      Ce.preventDefault(), Ur(lt, Ee, Ce.pointerId);
      return;
    }
    if ((xe || _t) && Ce.button !== 0) {
      Ce.preventDefault();
      return;
    }
    if (Ce.button === 1) {
      if (Ce.preventDefault(), n.mode === "frame") {
        const Je = ce();
        if (!Je || a || Je.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Je,
          last: Ee,
          start: {
            yaw_deg: Number(Je.yaw_deg || 0),
            pitch_deg: Number(Je.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Je = n.mode === "unwrap" ? Ee : Be(Ce);
        n.interaction = { kind: "view", last: Je, lastTs: performance.now() }, m.startDrag(Je.x, Je.y, Ce.pointerId, performance.now());
      }
      Tt(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    if (Ce.button !== 0) return;
    if (n.mode === "frame" && (Ce.altKey || Ce.shiftKey) && !a) {
      const Je = ce(), Ke = v(Je);
      if (!Je || Je.locked === !0 || !Ke) return;
      const et = ug({
        frame: Ke,
        point: Ee,
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
      }, t.setPointerCapture(Ce.pointerId), Ce.preventDefault(), Ps(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      bn(Ee, Ce.pointerId), Ce.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && xo(Ce, Ee);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (sr() || Oi())) {
      if (!De()) return;
      xr();
      const Je = n.primaryTool === "mask" ? "mask" : "paint", Ke = n.primaryTool === "mask" ? n.maskTool : n.paintTool, et = n.mode === "frame" && Oi() ? ce() : null, qt = { kind: "ERP_GLOBAL" }, Pt = et ? We(Ee, et, performance.now()) : He(Ee, performance.now());
      if (!Pt) {
        Tt(Ee);
        return;
      }
      n.interaction = {
        kind: Ke === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Je,
        _livePreviewToken: Bi("live"),
        stroke: Ke === "lasso_fill" ? fe(Je, Ke, [Pt], qt) : Q(Je, Ke, [Pt], qt)
      }, Pe();
      const Mr = be(n.interaction);
      if (Mr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Mr), n.interaction.kind === "paint_stroke") {
          const Fi = n.paintEngine.ensureTarget(Mr), Ti = Number((Pt == null ? void 0 : Pt.u) ?? (Pt == null ? void 0 : Pt.x) ?? 0), Di = Number((Pt == null ? void 0 : Pt.v) ?? (Pt == null ? void 0 : Pt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Fi, Ti, Di, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Mr);
      Tt(Ee), t.setPointerCapture(Ce.pointerId), Ae();
      return;
    }
    const wt = I(), Ze = N(), Qe = wt.length > 1 ? O(wt) : Ze ? Me(Ze) : null;
    if (n.primaryTool === "cursor" && (Ce.ctrlKey || Ce.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Tt(Ee), t.setPointerCapture(Ce.pointerId), Ae({ localOnly: !0, reason: dt.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && D() && y() && li(Ce, Ee) || n.primaryTool === "cursor" && c && ie() && Os(Ce, Ee)) return;
    if (wt.length > 1 && (Qe != null && Qe.visible)) {
      if ((wt.some((Ke) => p(Ke)) ? { kind: "none" } : Z(Qe, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: wt.map((Ke) => Ke),
          offset: { x: Ee.x - Qe.center.x, y: Ee.y - Qe.center.y },
          startCenter: { x: Qe.center.x, y: Qe.center.y },
          stickerSnapshots: wt.filter((Ke) => ge(Ke)).map((Ke) => ({
            id: String(Ke.id || ""),
            yaw_deg: Number(Xe(Ke).yaw_deg || 0),
            pitch_deg: Number(Xe(Ke).pitch_deg || 0),
            center: (() => {
              var qt, Pt;
              const et = Me(Ke);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })()
          })),
          strokeSnapshots: wt.filter((Ke) => U(Ke)).map((Ke) => ({
            id: String(Ke.actionGroupId || Ke.id || ""),
            layerKind: String(Ke.layerKind || "paint"),
            snapshot: dn(se(Ke.actionGroupId, Ke.layerKind)),
            frameSnapshot: dn(ue(Ke.actionGroupId, Ke.layerKind)),
            center: (() => {
              var qt, Pt;
              const et = Me(Ke);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: q(Ke.actionGroupId, Ke.layerKind)
          })),
          rasterSnapshots: wt.filter((Ke) => T(Ke)).map((Ke) => ({
            id: Le(Ke.rasterObjectId || Ke.id || ""),
            snapshot: dn(x().find((et) => String((et == null ? void 0 : et.id) || "") === Le(Ke.rasterObjectId || Ke.id || ""))),
            center: (() => {
              var qt, Pt;
              const et = Me(Ke);
              return et != null && et.visible ? { x: Number(((qt = et.center) == null ? void 0 : qt.x) || 0), y: Number(((Pt = et.center) == null ? void 0 : Pt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: z(Ke)
          }))
        }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
    } else if (Ze && (Qe != null && Qe.visible)) {
      const Je = p(Ze) ? { kind: "none" } : Z(Qe, Ee, Ze);
      if (Je.kind === "scale") {
        n.interaction = U(Ze) ? {
          kind: "scale_stroke_group",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Qe.center.x, Ee.y - Qe.center.y)),
          snapshot: dn(se(Ze.actionGroupId, Ze.layerKind)),
          frameSnapshot: dn(ue(Ze.actionGroupId, Ze.layerKind)),
          cursor: Je.cursor
        } : T(Ze) ? {
          kind: "scale_raster_object",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Qe.center.x, Ee.y - Qe.center.y)),
          snapshot: dn(x().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === Le(Ze.rasterObjectId || Ze.id || ""))),
          cursor: Je.cursor
        } : {
          kind: "scale",
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Qe.center.x, Ee.y - Qe.center.y)),
          startHFOV: Number(Xe(Ze).hFOV_deg || 20),
          startVFOV: Number(Xe(Ze).vFOV_deg || 20),
          cursor: Je.cursor
        }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "scale_x" || Je.kind === "scale_y") {
        n.interaction = {
          kind: Je.kind,
          item: Ze,
          center: Qe.center,
          startDist: Math.max(1, Math.hypot(Ee.x - Qe.center.x, Ee.y - Qe.center.y)),
          startHFOV: Number(Xe(Ze).hFOV_deg || 20),
          startVFOV: Number(Xe(Ze).vFOV_deg || 20),
          cursor: Je.cursor,
          edge: Je.edge
        }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "rotate") {
        n.interaction = U(Ze) ? {
          kind: "rotate_stroke_group",
          item: Ze,
          center: Qe.center,
          startAng: Math.atan2(Ee.y - Qe.center.y, Ee.x - Qe.center.x),
          snapshot: dn(se(Ze.actionGroupId, Ze.layerKind)),
          frameSnapshot: dn(ue(Ze.actionGroupId, Ze.layerKind))
        } : {
          kind: "rotate",
          item: Ze,
          center: Qe.center,
          startRot: Number(Xe(Ze).rot_deg || Xe(Ze).roll_deg || 0),
          startAng: Math.atan2(Ee.y - Qe.center.y, Ee.x - Qe.center.x)
        }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
      if (Je.kind === "move") {
        if (U(Ze)) {
          const Ke = n.mode === "frame" ? (() => {
            const et = ce();
            return et ? We(Ee, et, performance.now()) : null;
          })() : He(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Ze,
            startUv: Ke,
            snapshot: dn(se(Ze.actionGroupId, Ze.layerKind)),
            frameSnapshot: dn(ue(Ze.actionGroupId, Ze.layerKind))
          }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
          return;
        }
        if (T(Ze)) {
          const Ke = n.mode === "frame" ? (() => {
            const et = ce();
            return et ? We(Ee, et, performance.now()) : null;
          })() : He(Ee, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Ze,
            startUv: Ke,
            snapshot: dn(x().find((et) => String((et == null ? void 0 : et.id) || "") === Le(Ze.rasterObjectId || Ze.id || "")))
          }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Ze,
          offset: { x: Ee.x - Qe.center.x, y: Ee.y - Qe.center.y }
        }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
        return;
      }
    }
    const rt = we(Ee);
    if (rt) {
      const Je = n.selectedId !== rt.item.id;
      if (Je && n.selectedId && (Ve(), G()), zn(rt.item), d && Je && (n.cutoutAspectOpen = !1), Je && ar(), qn(), Ae(), p(rt.item)) {
        Tt(Ee);
        return;
      }
      n.interaction = {
        kind: U(rt.item) ? "move_stroke_group" : T(rt.item) ? "move_raster_object" : "move",
        item: rt.item,
        offset: { x: Ee.x - rt.geom.center.x, y: Ee.y - rt.geom.center.y },
        startUv: U(rt.item) || T(rt.item) ? n.mode === "frame" ? (() => {
          const Ke = ce();
          return Ke ? We(Ee, Ke, performance.now()) : null;
        })() : He(Ee, performance.now()) : null,
        snapshot: U(rt.item) ? dn(se(rt.item.actionGroupId, rt.item.layerKind)) : T(rt.item) ? dn(x().find((Ke) => String((Ke == null ? void 0 : Ke.id) || "") === Le(rt.item.rasterObjectId || rt.item.id || ""))) : null,
        frameSnapshot: U(rt.item) ? dn(ue(rt.item.actionGroupId, rt.item.layerKind)) : null
      }, Tt(Ee), t.setPointerCapture(Ce.pointerId);
      return;
    }
    const Xn = !!n.selectedId;
    Xn && (Ve(), G()), j(), Xn && ar(), qn(), Ae(), n.mode === "pano" && xo(Ce, Ee);
  }
  function Yr(Ce, Ee) {
    return i.gizmoPointer(Ce, E(), Ee.x, Ee.y, t.width, t.height);
  }
  function Os(Ce, Ee) {
    var Qe;
    const xe = (Qe = J().space) == null ? void 0 : Qe.gizmo;
    if (xe && Yr("hover", Ee) !== null && Yr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: xe.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: xe.transform,
        base: Ai(Lt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Ce.pointerId), Tt(Ee), !0;
    const _t = I(), lt = N(), wt = _t.length > 1 ? _t.some((rt) => p(rt)) ? "none" : Z(O(_t), Ee).kind : lt && !p(lt) ? Z(Me(lt), Ee, lt).kind : "none";
    if (wt !== "none" && wt !== "move") return !1;
    const Ze = i.pickSticker(E(), Ee.x, Ee.y, t.width, t.height);
    return u.stickers.some((rt) => rt.id === Ze && rt.placement === "world") ? (n.worldSelectedId !== Ze && (n.selectedId && (Ve(), G()), yt(Ze), ar(), qn(), Ms(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Ce.pointerId), !0) : !1;
  }
  function _o(Ce) {
    var _t;
    const xe = !!(n.worldSelectedId || de()) && n.primaryTool === "cursor" && ie() && !!((_t = J().space) != null && _t.gizmo) ? Yr("hover", Ce) : null;
    xe !== n.gizmoAxis && (n.gizmoAxis = xe, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: dt.VIEW }));
  }
  function Fs(Ce, Ee) {
    const xe = Yr("move", Ee);
    if (xe && Ce.camera) {
      for (const [lt, wt] of Object.entries(Cf(Ce.mode, Ce.base, Ce.start, xe))) mn(u.camera, lt, n.frame, wt);
      bo(), Ce.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const _t = u.stickers.find((lt) => lt.id === Ce.id);
    !xe || !_t || (Iv(_t, n.frame, Cf(Ce.mode, Ce.base, Ce.start, xe)), Ce.changed = !0, ae(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function wo(Ce) {
    n.interaction = null, n.gizmoAxis = null, Ce.kind === "world_gizmo" && (Yr("up", n.pointerPos), l.backgroundDirty = !0, Ce.changed && (Ve(), re(), ar())), Tt(n.pointerPos), Ae();
  }
  function xo(Ce, Ee) {
    if (y()) {
      const _t = So().emptyLeft;
      _t && Ur(_t, Ee, Ce.pointerId);
      return;
    }
    const xe = Be(Ce);
    n.interaction = { kind: "view", last: xe, lastTs: performance.now() }, m.startDrag(xe.x, xe.y, Ce.pointerId, performance.now()), Tt(Ee), t.setPointerCapture(Ce.pointerId);
  }
  function Ts(Ce, Ee) {
    if (!f || !Ge.playing || (Ge.stop(), Ce.kind === "frame_pan")) return;
    if (Ce.kind === "frame_orbit") {
      const lt = Se();
      lt && (Ce.pivot = te(lt, A(lt), Ee));
      return;
    }
    if (Ce.kind === "world_gizmo") {
      const lt = u.stickers.find((wt) => wt.id === Ce.id);
      Ce.camera ? Ce.base = W() : lt && (Ce.base = Ai(lt, n.frame));
      return;
    }
    if (Ce.kind === "move_multi") {
      const lt = O(Ce.items);
      if (!(lt != null && lt.visible)) return;
      Ce.offset = { x: Ee.x - lt.center.x, y: Ee.y - lt.center.y }, Ce.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const wt of Ce.stickerSnapshots) {
        const Ze = Ce.items.find((rt) => String((rt == null ? void 0 : rt.id) || "") === wt.id), Qe = Ze ? Me(Ze) : null;
        Qe != null && Qe.visible && (wt.yaw_deg = Number(Xe(Ze).yaw_deg || 0), wt.pitch_deg = Number(Xe(Ze).pitch_deg || 0), wt.center = { x: Qe.center.x, y: Qe.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Ce.kind)) return;
    const xe = Me(Ce.item);
    if (!(xe != null && xe.visible)) return;
    const _t = Xe(Ce.item);
    if (Ce.kind === "move") {
      Ce.offset = { x: Ee.x - xe.center.x, y: Ee.y - xe.center.y };
      return;
    }
    if (Ce.center = xe.center, Ce.kind === "rotate") {
      Ce.startRot = Number(_t.rot_deg || _t.roll_deg || 0), Ce.startAng = Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x);
      return;
    }
    Ce.startDist = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)), Ce.startHFOV = Number(_t.hFOV_deg || 20), Ce.startVFOV = Number(_t.vFOV_deg || 20);
  }
  function El(Ce) {
    var _t, lt, wt, Ze, Qe, rt, Xn, Je, Ke, et, qt, Pt, Mr, Fi, Ti, Di, Mo, Ls, Rs, Vs, Po, $s;
    const Ee = $e(Ce);
    if (At(Ee, !0), !n.interaction) {
      _o(Ee), Tt(Ee);
      return;
    }
    Tt(Ee);
    const xe = n.interaction;
    if (kr && (Ee.x !== kr.x || Ee.y !== kr.y)) {
      const ct = kr;
      kr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(xe.kind) || Ts(xe, ct);
    }
    if (xe.kind !== "world_select") {
      if (xe.kind === "world_gizmo") {
        Fs(xe, Ee);
        return;
      }
      if (xe.kind === "paint_stroke") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let pt = !1;
        ct.forEach((mt) => {
          const bt = $e(mt);
          if (n.mode === "frame") {
            const vn = ce(), Rt = vn ? v(vn) : null;
            if (Rt) {
              const an = (bt.x - Rt.x) / Math.max(1, Rt.w), vt = (bt.y - Rt.y) / Math.max(1, Rt.h);
              if (!(an >= 0 && an <= 1 && vt >= 0 && vt <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, S(xe));
            }
          }
          $(xe, bt, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: dt.PAINT });
        return;
      }
      if (xe.kind === "paint_lasso_fill") {
        const ct = typeof Ce.getCoalescedEvents == "function" ? Ce.getCoalescedEvents() : [Ce];
        let pt = !1;
        if (ct.forEach((mt) => {
          const bt = $e(mt);
          if (n.mode === "frame") {
            const vn = ce(), Rt = vn ? v(vn) : null;
            if (Rt) {
              const an = (bt.x - Rt.x) / Math.max(1, Rt.w), vt = (bt.y - Rt.y) / Math.max(1, Rt.h);
              if (!(an >= 0 && an <= 1 && vt >= 0 && vt <= 1)) {
                xe._outOfFrame = !0;
                return;
              }
              xe._outOfFrame && (xe._outOfFrame = !1, h(xe));
            }
          }
          X(xe, bt, performance.now()) && (pt = !0);
        }), pt) {
          const mt = be(xe);
          mt && n.paintEngine.updateActiveStroke(xe.stroke, mt), Ae({ localOnly: !0, reason: dt.PAINT });
        }
        return;
      }
      if (xe.kind === "view") {
        const ct = performance.now(), pt = n.mode === "unwrap" ? Ee : Be(Ce);
        m.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), xe.lastTs = ct, xe.last = pt, Ae({ localOnly: !0, reason: dt.VIEW });
        return;
      }
      if (xe.kind === "frame_pan" || xe.kind === "frame_orbit") {
        R(xe, Ee);
        return;
      }
      if (xe.kind === "space_pan" || xe.kind === "space_orbit") {
        const ct = ir();
        sn(xe.kind === "space_pan" ? gm(ct, Ee.x - xe.last.x, Ee.y - xe.last.y, t.width, t.height, xe.depth) : mm(ct, Ee.x - xe.last.x, Ee.y - xe.last.y, t.height, xe.pivot)), xe.last = Ee;
        return;
      }
      if (xe.kind === "pan_frame") {
        const ct = le(xe.shot);
        if (!ct || !xe.shot) return;
        const pt = Ee.x - xe.last.x, mt = Ee.y - xe.last.y, bt = fg(xe.shot, {
          dx: pt,
          dy: mt,
          focalPx: ct.focalPx,
          invertX: ((_t = u.ui_settings) == null ? void 0 : _t.invert_view_x) === !0,
          invertY: ((lt = u.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        xe.shot.yaw_deg = bt.yaw_deg, xe.shot.pitch_deg = bt.pitch_deg, xe.changed = xe.changed || Math.abs(pt) > 0 || Math.abs(mt) > 0, xe.last = Ee, Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "roll_frame") {
        if (xe.source === "knob") return;
        Y(xe, Ee, Ce);
        return;
      }
      if (xe.kind === "move") {
        const ct = Ee.x - xe.offset.x, pt = Ee.y - xe.offset.y;
        if (n.mode === "frame" && d) {
          const mt = ce(), bt = v(mt);
          if (!mt || !bt) return;
          const vn = {
            x: Ie((ct - bt.x) / Math.max(1, bt.w), 0, 1),
            y: Ie((pt - bt.y) / Math.max(1, bt.h), 0, 1)
          }, Rt = ee(mt, vn);
          if (!Rt) return;
          const an = na(Rt);
          Fn(xe.item, { yaw_deg: an.yaw, pitch_deg: an.pitch });
        } else if (n.mode === "unwrap") {
          const mt = me(), bt = Ie((ct - mt.x) / Math.max(mt.w, 1), 0, 1), vn = Ie((pt - mt.y) / Math.max(mt.h, 1), 0, 1);
          Fn(xe.item, { yaw_deg: jt(bt * 360 - 180), pitch_deg: Ie(90 - vn * 180, -90, 90) });
        } else {
          const mt = ft(ct, pt), bt = na(mt);
          Fn(xe.item, { yaw_deg: bt.yaw, pitch_deg: bt.pitch });
        }
        ge(xe.item) && ae(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const bt = ce();
          return bt ? We(Ee, bt, performance.now()) : null;
        })() : He(Ee, performance.now());
        if (!ct || !xe.startUv) return;
        const pt = Gt(Number(ct.u || 0), Number(xe.startUv.u || 0)), mt = Number(ct.v || 0) - Number(xe.startUv.v || 0);
        H((wt = xe.item) == null ? void 0 : wt.actionGroupId, pt, mt, xe.snapshot, (Ze = xe.item) == null ? void 0 : Ze.layerKind, xe.frameSnapshot) && (_e({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const bt = ce();
          return bt ? We(Ee, bt, performance.now()) : null;
        })() : He(Ee, performance.now());
        if (!ct || !xe.startUv) return;
        const pt = Gt(Number(ct.u || 0), Number(xe.startUv.u || 0)), mt = Number(ct.v || 0) - Number(xe.startUv.v || 0);
        B(((Qe = xe.item) == null ? void 0 : Qe.rasterObjectId) || ((rt = xe.item) == null ? void 0 : rt.id) || "", pt, mt, xe.snapshot) && (Ne(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        F(((Xn = xe.item) == null ? void 0 : Xn.rasterObjectId) || ((Je = xe.item) == null ? void 0 : Je.id) || "", pt, xe.snapshot) && (Ne(), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "move_multi") {
        const ct = Ee.x - Number(((Ke = xe.offset) == null ? void 0 : Ke.x) || 0), pt = Ee.y - Number(((et = xe.offset) == null ? void 0 : et.y) || 0);
        let mt = !1, bt = !1, vn = !1;
        const Rt = ct - Number(((qt = xe.startCenter) == null ? void 0 : qt.x) || ct), an = pt - Number(((Pt = xe.startCenter) == null ? void 0 : Pt.y) || pt);
        for (const vt of Array.isArray(xe.stickerSnapshots) ? xe.stickerSnapshots : []) {
          const ln = (k === "cutout" ? ve() : b()).find((Te) => String((Te == null ? void 0 : Te.id) || "") === String(vt.id || ""));
          if (!ln || !ge(ln)) continue;
          const on = {
            x: Number(((Mr = vt.center) == null ? void 0 : Mr.x) || 0) + Rt,
            y: Number(((Fi = vt.center) == null ? void 0 : Fi.y) || 0) + an
          };
          if (n.mode === "frame" && d) {
            const Te = ce(), Ye = v(Te);
            if (!Te || !Ye) continue;
            const Qt = {
              x: Ie((on.x - Ye.x) / Math.max(1, Ye.w), 0, 1),
              y: Ie((on.y - Ye.y) / Math.max(1, Ye.h), 0, 1)
            }, en = ee(Te, Qt);
            if (!en) continue;
            const lr = na(en);
            Fn(ln, { yaw_deg: lr.yaw, pitch_deg: lr.pitch });
          } else if (n.mode === "unwrap") {
            const Te = me(), Ye = Ie((on.x - Te.x) / Math.max(Te.w, 1), 0, 1), Qt = Ie((on.y - Te.y) / Math.max(Te.h, 1), 0, 1);
            Fn(ln, { yaw_deg: jt(Ye * 360 - 180), pitch_deg: Ie(90 - Qt * 180, -90, 90) });
          } else {
            const Te = ft(on.x, on.y), Ye = na(Te);
            Fn(ln, { yaw_deg: Ye.yaw, pitch_deg: Ye.pitch });
          }
          mt = !0;
        }
        for (const vt of Array.isArray(xe.strokeSnapshots) ? xe.strokeSnapshots : []) {
          const ln = {
            x: Number(((Ti = vt.center) == null ? void 0 : Ti.x) || 0) + Rt,
            y: Number(((Di = vt.center) == null ? void 0 : Di.y) || 0) + an
          }, on = n.mode === "frame" ? (() => {
            const Ye = ce();
            return Ye ? We(ln, Ye, performance.now()) : null;
          })() : He(ln, performance.now()), Te = vt.centerUv || null;
          if (on && Te) {
            const Ye = Gt(Number(on.u || 0), Number(Te.u || 0)), Qt = Number(on.v || 0) - Number(Te.v || 0);
            H(vt.id, Ye, Qt, vt.snapshot, vt.layerKind, vt.frameSnapshot) && (mt = !0, bt = !0);
          }
        }
        for (const vt of Array.isArray(xe.rasterSnapshots) ? xe.rasterSnapshots : []) {
          const ln = {
            x: Number(((Mo = vt.center) == null ? void 0 : Mo.x) || 0) + Rt,
            y: Number(((Ls = vt.center) == null ? void 0 : Ls.y) || 0) + an
          }, on = n.mode === "frame" ? (() => {
            const Ye = ce();
            return Ye ? We(ln, Ye, performance.now()) : null;
          })() : He(ln, performance.now()), Te = vt.centerUv || null;
          if (on && Te) {
            const Ye = Gt(Number(on.u || 0), Number(Te.u || 0)), Qt = Number(on.v || 0) - Number(Te.v || 0);
            B(vt.id, Ye, Qt, vt.snapshot) && (mt = !0, vn = !0);
          }
        }
        mt && (bt ? _e({ rebuildPaintEngine: !1 }) : vn ? Ne() : ae(), Ae({ localOnly: !0 }));
        return;
      }
      if (xe.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / Math.max(1, Number(xe.startDist || 1));
        K((Rs = xe.item) == null ? void 0 : Rs.actionGroupId, pt, 0, xe.snapshot, (Vs = xe.item) == null ? void 0 : Vs.layerKind, xe.frameSnapshot) && (_e({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x) - Number(xe.startAng || 0)) * Ci;
        Ce.shiftKey && (ct = Math.round(ct / 45) * 45), K((Po = xe.item) == null ? void 0 : Po.actionGroupId, 1, ct, xe.snapshot, ($s = xe.item) == null ? void 0 : $s.layerKind, xe.frameSnapshot) && (_e({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: dt.PAINT }));
        return;
      }
      if (xe.kind === "marquee_select") {
        xe.current = Ee, Ae({ localOnly: !0, reason: dt.OVERLAY });
        return;
      }
      if (xe.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        Fn(xe.item, { hFOV_deg: Ie(xe.startHFOV * pt, 1, 179), vFOV_deg: Ie(xe.startVFOV * pt, 1, 179) }), P(xe.item) || (xe.item.aspect_id = ki(xe.item)), ge(xe.item) && ae(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        Fn(xe.item, { hFOV_deg: Ie(xe.startHFOV * pt, 1, 179) }), P(xe.item) || (xe.item.aspect_id = ki(xe.item)), ge(xe.item) && ae(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ee.x - xe.center.x, Ee.y - xe.center.y)) / xe.startDist;
        Fn(xe.item, { vFOV_deg: Ie(xe.startVFOV * pt, 1, 179) }), P(xe.item) || (xe.item.aspect_id = ki(xe.item)), ge(xe.item) && ae(), Ae({ localOnly: !0 });
        return;
      }
      if (xe.kind === "rotate") {
        let pt = (Math.atan2(Ee.y - xe.center.y, Ee.x - xe.center.x) - xe.startAng) * Ci, mt = xe.startRot - pt;
        Ce.shiftKey && (mt = Math.round(mt / 45) * 45), Fn(xe.item, { [ge(xe.item) ? "rot_deg" : "roll_deg"]: mt }), ge(xe.item) && ae(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ol() {
    var Ee, xe, _t, lt, wt, Ze, Qe;
    const Ce = n.interaction;
    if (!((Ce == null ? void 0 : Ce.kind) === "roll_frame" && Ce.source === "knob")) {
      if ((Ce == null ? void 0 : Ce.kind) === "space_pan" || (Ce == null ? void 0 : Ce.kind) === "space_orbit") {
        n.interaction = null, Tt(n.pointerPos), qn();
        return;
      }
      if ((Ce == null ? void 0 : Ce.kind) === "world_select" || (Ce == null ? void 0 : Ce.kind) === "world_gizmo") {
        wo(Ce);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((xe = n.interaction) == null ? void 0 : xe.kind) === "paint_lasso_fill") {
        Pe();
        const rt = L(n.interaction), Xn = !!n.interaction._hasCommittedSegments;
        if (rt || Xn) {
          _e();
          const Je = String(((_t = n.interaction.stroke) == null ? void 0 : _t.actionGroupId) || "").trim();
          if (Je) {
            const et = _().find((qt) => String((qt == null ? void 0 : qt.actionGroupId) || "") === Je);
            et && (et.frame = null);
          }
          const Ke = be(n.interaction);
          Ke && (rt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ke), Oe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ke) : n.paintEngine.cancelActiveStroke(Ke)), Ve(), G(), ar(), qn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Je = be(n.interaction);
          Je && n.paintEngine.cancelActiveStroke(Je);
        }
      } else if (((wt = n.interaction) == null ? void 0 : wt.kind) === "marquee_select") {
        const rt = je(n.interaction.start, n.interaction.current), Je = [
          ...k === "cutout" ? C().filter((Ke) => !M(Ke)) : [...b()],
          ...w(),
          ...V()
        ].filter((Ke) => pe(rt, Me(Ke)));
        qe(Je, ((Ze = Je[Je.length - 1]) == null ? void 0 : Ze.id) || null), d && Je.length && (n.cutoutAspectOpen = !1), ar(), qn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((Qe = n.interaction) == null ? void 0 : Qe.kind))
        n.interaction.changed && (Ve(), re(), ar());
      else if (n.interaction && n.interaction.kind !== "view") {
        let rt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (rt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (rt = !0), rt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? _e({ rebuildPaintEngine: !0 }) : Ne()), Ve(), G(), o.setDirtyCanvas(!0, !0), Ns(), qn(), Ae();
      }
      n.interaction = null, (Ce == null ? void 0 : Ce.kind) === "roll_frame" && he(), Pe(), Ce && Ce.kind === "view" && or(() => m.endDrag(performance.now())), Br(), qn(), Tt(n.pointerPos), Ae();
    }
  }
  function Ds() {
    var Ce, Ee, xe, _t, lt;
    if (!oe()) {
      if (((Ce = n.interaction) == null ? void 0 : Ce.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        wo(n.interaction);
        return;
      }
      if (((xe = n.interaction) == null ? void 0 : xe.kind) === "view" && or(() => m.endDrag(performance.now())), ((_t = n.interaction) == null ? void 0 : _t.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        Pe();
        const wt = be(n.interaction);
        wt && n.paintEngine.cancelActiveStroke(wt);
      }
      n.interaction = null, Pe(), Br(), Tt(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function ko(Ce) {
    const Ee = $e(Ce), xe = At(Ee, !0);
    n.interaction || (Tt(Ee), xe && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: dt.OVERLAY }));
  }
  function Fl(Ce) {
    if (n.mode === "frame") {
      const Ee = $e(Ce), xe = Da(Ce);
      xe && xr(), xe && ye() ? As(Ee, -xe) : xe && Cs(Ee, xe) && Ae({ localOnly: !0 }), Ce.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ne(), y()) {
        const Ee = Da(Ce);
        Ee && Is($e(Ce), -Ee);
      } else m.applyWheelEvent(Ce) && Ae({ localOnly: !0, reason: dt.VIEW });
      Ce.preventDefault();
    }
  }
  return {
    connect(Ce) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: S,
        appendLassoPoint: X,
        appendPaintPoint: $,
        applyRasterObjectOffset: B,
        applyRasterObjectTransform: F,
        applySharedRollInteractionPoint: Y,
        applyStrokeGroupOffset: H,
        applyStrokeGroupTransform: K,
        buildFreehandStrokeRecord: Q,
        buildLassoFillStrokeRecord: fe,
        cameraShoots: D,
        cancelFrameCameraGesture: oe,
        cancelViewTransition: ne,
        clearSelection: j,
        commitAndRefreshNode: re,
        commitPaintInteraction: L,
        commitState: G,
        currentSpaceCamera: E,
        cutoutCamera: W,
        dragFrame: R,
        editorViewInput: J,
        ensureGroupFrame: ue,
        frameContext: Se,
        frameLocalPointToWorldDir: ee,
        frameSpaceView: A,
        frameTarget: te,
        getActiveCutoutShot: ce,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: ve,
        getCutoutSelectableItemsForHit: C,
        getFrameViewLayout: le,
        getFrameViewRect: v,
        getList: b,
        getMultiSelectionGeom: O,
        getPaintingGroupList: _,
        getRasterObjectCenterUv: z,
        getRasterObjectList: x,
        getSelectableRasterObjectItems: V,
        getSelectableStrokeGroupItems: w,
        getSelected: N,
        getSelectedItems: I,
        getStrokeGroupCenterUv: q,
        getStrokeGroupStrokes: se,
        getUnwrapRect: me,
        handleHit: Z,
        hideTooltip: he,
        hitObjectAt: we,
        invalidateLivePaintPreviewCaches: Pe,
        isCameraSelected: de,
        isFreeFrameView: ye,
        isFreeSpaceView: y,
        isItemLocked: p,
        isRasterObjectItem: T,
        isSceneSticker: P,
        isShotItem: M,
        isSpaceView: ie,
        isStickerItem: ge,
        isStrokeGroupItem: U,
        markObjectVisualsDirty: ae,
        markPaintCompositeVisualsDirty: Ne,
        markPaintStrokeVisualsDirty: _e,
        objectGeom: Me,
        paintingShown: De,
        parseRasterObjectSelectionId: Le,
        playback: Ge,
        poseOf: Xe,
        pushHistory: Ve,
        rectFromPoints: je,
        rectIntersectsGeom: pe,
        refreshPaintEngineRevisionCache: Oe,
        requestDraw: Ae,
        screenPos: $e,
        screenPosCss: Be,
        screenPosToErpPoint: He,
        screenPosToFrameAsErpPoint: We,
        screenToWorldDir: ft,
        selectWorldSticker: yt,
        selectedWorldSticker: Lt,
        setPointerPos: At,
        setSelectedItem: zn,
        setSelectedItems: qe,
        setSpaceView: sn,
        shortestWrappedDelta: Gt,
        spaceViewState: ir,
        startAnimation: or,
        startCameraPress: li,
        startFrameDrag: rn,
        startPanFrame: bn,
        startSpaceDrag: Ur,
        stopTimelinePlayback: xr,
        supportsErpPainting: sr,
        supportsFramePainting: Oi,
        syncCutoutShot: bo,
        syncFloatingViewButtonState: Ms,
        syncFrameRollKnob: Ps,
        syncSidePanelControls: Ns,
        syncTimeline: vo,
        syncViewToggleState: Br,
        updateCursor: Tt,
        updateSelectionMenu: qn,
        updateSidePanel: ar,
        viewControls: So,
        writePose: Fn,
        zoomFrameAt: As,
        zoomFrameViewAt: Cs,
        zoomSpaceAt: Is
      } = Ce);
    },
    onCanvasPointerDown: Es,
    worldGizmoPointer: Yr,
    hoverWorldGizmo: _o,
    onCanvasPointerMove: El,
    onCanvasPointerUp: Ol,
    onCanvasPointerCancel: Ds,
    onCanvasMouseMove: ko,
    onCanvasWheel: Fl
  };
}
function x2(e) {
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
  let f, g, k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee;
  function A(ve, C, le = !1) {
    var V;
    G();
    const v = a && n.mode === "frame" ? S() : null, b = v || B(), O = v ? "shot" : Y(), _ = re();
    if (_ && !Se(_) || !_ && (!b || O === "stroke" || H(b))) return;
    const z = (((V = u.sidePanel) == null ? void 0 : V.params) || []).find((w) => w.key === ve);
    if (!z || z.enabled === !1) return;
    let x = Number(C);
    if (Number.isNaN(x) && (x = 0), (_ || t) && FP.has(ve) ? x = ve === "scale" ? Math.max(x, jg) : x : x = Ie(x, Number(z.min), Number(z.max)), ve === "yaw_deg" && (x = jt(x)), !_ && t && ve.startsWith("position_")) {
      W(), Pv(l.camera, n.frame, ve, x), ue(), j(), le && ne();
      return;
    }
    if (_) {
      Cv(_, n.frame, ve, x), fe(), ue(), j(), le && ne();
      return;
    }
    ve === "opacity" ? Nv(b, n.frame, x / 100) : ee(b, { [ve]: x }), a && !K(b) && (ve === "hFOV_deg" || ve === "vFOV_deg") && (b.aspect_id = ki(b)), ue(), j(), le && ne();
  }
  async function te(ve) {
    var v, b, O, _, z, x, V;
    const C = ve.target.closest("[data-action]");
    if (!C) return;
    const le = String(C.getAttribute("data-action") || "");
    if (le === "coverage-set") {
      const w = En(C.getAttribute("data-coverage"));
      if (w === En(l.coverage)) return;
      l.coverage = w, n.coverage = w, r && (r.value = String(w)), o ? s.backgroundDirty = !0 : (h(), E({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), ue(), J(), j();
      return;
    }
    if (le === "toggle-selection-picker") {
      if ((b = (v = u.sidePanel) == null ? void 0 : v.selectionPicker) != null && b.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (le === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const w = String(C.getAttribute("data-selection-id") || "");
      let N = null;
      if (w && (d === "stickers" ? N = [...$(), ...c ? l.shots : []].find((I) => String((I == null ? void 0 : I.id) || "") === w) || null : N = ((O = X().find((I) => {
        var q;
        return String(((q = I == null ? void 0 : I.item) == null ? void 0 : q.id) || "") === w;
      })) == null ? void 0 : O.item) || null), L(N || null), N && !Q(N)) {
        const I = oe(N);
        R(jt(Number(I.yaw_deg || 0)), Ie(Number(I.pitch_deg || 0), -89.9, 89.9));
      }
      ue(), J(), j();
      return;
    }
    if (le === "copy-state-inline") {
      const w = B(), N = Y();
      if (!w || N === "stroke" || F().length > 1) return;
      const I = JSON.stringify(a && N !== "image" ? g(w) : k(oe(w)));
      try {
        await navigator.clipboard.writeText(I), (_ = u.sidePanel) != null && _.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var q;
          (q = u.sidePanel) != null && q.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (le === "set-invert-x") {
      l.ui_settings.invert_view_x = C.getAttribute("data-value") === "1", D(), ue(), (z = i.setDirtyCanvas) == null || z.call(i, !0, !0), j();
      return;
    }
    if (le === "set-invert-y") {
      l.ui_settings.invert_view_y = C.getAttribute("data-value") === "1", D(), ue(), (x = i.setDirtyCanvas) == null || x.call(i, !0, !0), j();
      return;
    }
    if (le === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, D(), ue(), (V = i.setDirtyCanvas) == null || V.call(i, !0, !0), j();
      return;
    }
    if (le === "close-preview") {
      m();
      return;
    }
    if (le === "cancel-close") {
      m();
      return;
    }
    le === "save-close" && (f(), m());
  }
  function ce(ve) {
    const C = ve.target.closest("[data-action='param-input']");
    C && A(String(C.getAttribute("data-param-key") || ""), C.value, !1);
  }
  function be(ve) {
    const C = ve.target.closest("[data-action='param-input']");
    C && A(String(C.getAttribute("data-param-key") || ""), C.value, !0);
  }
  return {
    connect(ve) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: k,
        closeEditor: m,
        commitState: h,
        getActiveCutoutShot: S,
        getCutoutInspectorItems: X,
        getList: $,
        getSelected: B,
        getSelectedItems: F,
        getSelectedKind: Y,
        isItemLocked: H,
        isSceneSticker: K,
        isStrokeGroupItem: Q,
        markObjectVisualsDirty: fe,
        persistUiSettings: D,
        poseOf: oe,
        pushHistory: ne,
        requestDraw: j,
        selectedWorldSticker: re,
        setSelectedItem: L,
        stopTimelinePlayback: G,
        syncCoverageChangeToNodePreviews: E,
        syncCutoutShot: W,
        turnViewTo: R,
        updateSelectionMenu: J,
        updateSidePanel: ue,
        worldStickerEditable: Se,
        writePose: ee
      } = ve);
    },
    onSidePanelClick: te,
    onSidePanelInput: ce,
    onSidePanelChange: be
  };
}
function k2(e) {
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
  let k, m, h, S, X, $, B, F, Y, H, K, Q, fe, D, oe, ne, j, re, L, G, E, W, R, J, ue, Se, ee, A, te, ce, be, ve, C, le, v, b, O, _, z, x, V, w, N, I, q, se, me, Z, he, we, Pe;
  const de = () => {
    if (!t.customPaintSessionStart) return;
    if (rl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (XP(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Ve = [
      Tn(t.customPaintColor),
      ...t.customPaintHistory.filter((je) => !rl(je, t.customPaintColor))
    ];
    t.customPaintHistory = Ve.slice(0, 8), t.customPaintSessionStart = null;
  }, ye = (Ve = !1) => {
    !i || i.hidden || (Ve ? de() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, y = () => {
    i && (i.hidden && (t.customPaintSessionStart = Tn(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    z();
  }
  function T(Ve) {
    var ft, yt, Lt, At, zn;
    if ((yt = (ft = Ve.target) == null ? void 0 : ft.matches) != null && yt.call(ft, "[data-confirm-overlay]")) {
      const qe = (Lt = f.confirmDialog) == null ? void 0 : Lt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const je = Ve.target.closest("[data-space-mode]");
    if (je) {
      le(je.getAttribute("data-space-mode"));
      return;
    }
    const pe = Ve.target.closest("[data-gizmo-mode]");
    if (pe) {
      t.gizmoMode = pe.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, he(), A({ localOnly: !0, reason: dt.VIEW });
      return;
    }
    const Oe = Ve.target.closest("[data-view]");
    if (Oe) {
      if (Oe.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Oe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), we(), he()), D(), N(), A();
      return;
    }
    const Ae = Ve.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && Y({ preservePanelValues: !0 }), x(), we(), he(), A();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? te(-1) : qe === "redo" ? te(1) : qe === "clear" ? B() : qe === "add" || qe === "add-image" ? m() : qe === "add-world" ? S() : qe === "add-or-look" ? k() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, Y({ preservePanelValues: !0 }), Pn[qe] && (t.activeBrushPresetId = qe), x(), we(), he(), A();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), Y({ preservePanelValues: !0 }), x(), we(), he(), A();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        F(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Cl.find((sn) => sn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = Tn(qe.color), ye(!0), x();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        Ve.preventDefault(), Ve.stopPropagation(), i && !i.hidden ? ye(!0) : y(), x();
        return;
      }
    }
    const $e = String(((At = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : At.call(Ae, "data-action")) || "");
    if ($e === "video-play-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub = !1, I();
      return;
    }
    if ($e === "video-audio-toggle") {
      Ve.preventDefault(), Ve.stopPropagation(), me(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if ($e === "video-loop-toggle") {
      if (Ve.preventDefault(), Ve.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, g.loop = qe, w({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: g.muted,
        volume: Number(g.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if ($e === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if ($e === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ne() : null;
        if (!qe || qe.locked === !0) return;
        C(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, V(), ue(), H(), N(), we(), he(), A();
        return;
      }
      if ($e === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ne() : null, sn = Ae.getAttribute("data-custom-width"), Gt = Ae.getAttribute("data-custom-height");
        if (!qe || !X(qe, sn, Gt)) return;
        f.frameRail.aspectOpen = !1, V(), ue(), H(), N(), A();
        return;
      }
      if ($e === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ne() : null;
        if (!qe || qe.locked === !0) return;
        be(qe), f.frameRail.aspectOpen = !1, V(), ue(), H(), N(), A();
        return;
      }
      if ($e === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, he(), A();
        return;
      }
      if ($e === "aspect-set") {
        const qe = re();
        if (!qe) return;
        const sn = String(Ae.getAttribute("data-aspect") || "1:1");
        C(qe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, V(), ue(), H(), he(), A();
        return;
      }
      if ($e === "rotate-90") {
        const qe = re();
        if (!qe || E()) return;
        be(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, V(), ue(), H(), he(), A();
        return;
      }
      if ($e === "bring-front") {
        $();
        return;
      }
      if ($e === "send-back") {
        ve();
        return;
      }
      if ($e === "duplicate") {
        fe();
        return;
      }
      if ($e === "replace-image") {
        ee();
        return;
      }
      if ($e === "toggle-lock") {
        se();
        return;
      }
      if ($e === "back-initial") {
        ce();
        return;
      }
      if ($e === "toggle-visible") {
        q();
        return;
      }
      if ($e === "delete") {
        Q();
        return;
      }
    }
    if ($e === "reset-view") {
      if (t.mode === "frame") return;
      Z(
        { position: O(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((zn = K()) == null ? void 0 : zn.radius) || tr },
        { mode: il(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if ($e === "frame-view") {
      if (!W() || il(t.spaceMode, t.viewTransition) !== "6dof") return;
      oe();
      return;
    }
    if ($e === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, oN(r == null ? void 0 : r.id, t.showGrid), p(), A();
      return;
    }
    if ($e === "toggle-fullscreen") {
      Ve.preventDefault(), Ve.stopPropagation(), Le();
      return;
    }
    if ($e === "toggle-output-preview-size") {
      Ve.preventDefault(), Ve.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, _(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Xe(), A();
      return;
    }
    const Be = Ve.target.closest("[data-paint-history-index]");
    if (!Be) return;
    const He = Number(Be.getAttribute("data-paint-history-index")), We = t.customPaintHistory[He];
    We && (t.customPaintColor = Tn(We), t.paintColor = Tn(We), x());
  }
  function P(Ve) {
    const je = Ve.target.closest("[data-video-seek]");
    if (je) {
      if (!(g instanceof HTMLVideoElement)) return;
      R.playing && (Pe.resumeAfterScrub = !0), R.seek(gi(Number(je.value || 0), J()));
      return;
    }
    const pe = Ve.target.closest("[data-video-volume]");
    if (pe) {
      if (!(g instanceof HTMLVideoElement)) return;
      const $e = Ie(Number(pe.value || 0), 0, 1);
      g.volume = $e, g.muted = $e <= 1e-4, w({
        hasAudio: f.videoTransport.hasAudio,
        muted: g.muted,
        volume: $e
      });
      return;
    }
    const Oe = Ve.target.closest("[data-paint-size-slider]");
    if (Oe) {
      if (Oe.disabled) return;
      const $e = Math.max(1, Math.min(120, Math.round(Number(Oe.value)))), Be = j(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Be] = $e, x(), v();
      return;
    }
    const Ae = Ve.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const $e = { ...t.customPaintColor, a: Ie(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = Tn($e), t.paintColor = Tn($e), x();
    }
  }
  function M(Ve) {
    var je;
    if (Ve.target.closest("[data-video-seek]")) {
      if (!(g instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub && R.play(), Pe.resumeAfterScrub = !1;
      return;
    }
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((je = Ve.target) == null ? void 0 : je.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && L();
  }
  function ie(Ve) {
    const je = Ve.target.closest("[data-tip]");
    !je || !l.contains(je) || u.target !== je && (u.target = je, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === je && b(je);
    }, 220));
  }
  function ge(Ve) {
    var Oe, Ae;
    const je = Ve.target.closest("[data-tip]");
    !je || u.target !== je || (Ve.relatedTarget instanceof Element ? (Ae = (Oe = Ve.relatedTarget).closest) == null ? void 0 : Ae.call(Oe, "[data-tip]") : null) === je || G();
  }
  function U(Ve, je) {
    var He;
    if (!o) return;
    const pe = o.getBoundingClientRect(), Oe = Ie((Ve - pe.left) / Math.max(1, pe.width), 0, 1), Ae = 1 - Ie((je - pe.top) / Math.max(1, pe.height), 0, 1), $e = gu(t.customPaintColor), Be = { ...mu($e.h, Oe, Ae), a: Number(((He = t.customPaintColor) == null ? void 0 : He.a) ?? 1) };
    t.customPaintColor = Tn(Be), t.paintColor = Tn(Be), x();
  }
  function ae(Ve) {
    var $e;
    if (!s) return;
    const je = s.getBoundingClientRect(), pe = Ie((Ve - je.left) / Math.max(1, je.width), 0, 1), Oe = gu(t.customPaintColor), Ae = { ...mu(pe, Oe.s, Oe.v), a: Number((($e = t.customPaintColor) == null ? void 0 : $e.a) ?? 1) };
    t.customPaintColor = Tn(Ae), t.paintColor = Tn(Ae), x();
  }
  function Ne(Ve, je) {
    const pe = Ve.pointerId;
    je(Ve);
    const Oe = ($e) => {
      $e.pointerId === pe && je($e);
    }, Ae = ($e) => {
      $e.pointerId === pe && (window.removeEventListener("pointermove", Oe), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Oe), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function _e() {
    const Ve = !!t.fullscreen;
    Ki(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Ve ? ze.fullscreen_close : ze.fullscreen,
      label: Ve ? "Exit Fullscreen" : "Fullscreen",
      tip: Ve ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Me(Ve) {
    const je = !!Ve;
    t.fullscreen !== je && (t.fullscreen = je, l.classList.toggle("pano-modal-fullscreen", je), je ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), _e(), Se(), A());
  }
  function De() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var Ve, je;
    try {
      if (!document.fullscreenEnabled) {
        Me(!t.fullscreen);
        return;
      }
      De() ? await ((je = document.exitFullscreen) == null ? void 0 : je.call(document)) : await ((Ve = n.requestFullscreen) == null ? void 0 : Ve.call(n));
    } catch {
      Me(!t.fullscreen);
    }
  }
  function Ge() {
    document.fullscreenEnabled && Me(De());
  }
  function Xe() {
    const Ve = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Ve ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = Ve ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Ve ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Ve) {
      ({
        addCutoutFrame: k,
        addImageSticker: m,
        addStudioCamera: h,
        addWorldImageSticker: S,
        applyCutoutAspectCustom: X,
        bringSelectedToFront: $,
        clearAll: B,
        clearPaintingLayer: F,
        clearSelection: Y,
        commitAndRefreshNode: H,
        contentSphere: K,
        deleteSelected: Q,
        duplicateSelected: fe,
        forceCursorTool: D,
        frameSpaceContent: oe,
        getActiveCutoutShot: ne,
        getBrushPresetIdForTool: j,
        getSelected: re,
        hidePaintSizePreview: L,
        hideTooltip: G,
        isErpCamera: E,
        isFreeSpaceView: W,
        playback: R,
        playbackFps: J,
        pushHistory: ue,
        queueVideoTransportLayout: Se,
        replaceSelectedImage: ee,
        requestDraw: A,
        restoreHistory: te,
        restoreSelectedToInitialPose: ce,
        rotateCutoutAspect90: be,
        sendSelectedToBack: ve,
        setShotAspect: C,
        setSpaceMode: le,
        showPaintSizePreview: v,
        showTooltipFor: b,
        spaceOrigin: O,
        startAnimation: _,
        syncFloatingViewButtonState: z,
        syncPaintUi: x,
        syncSidePanelControls: V,
        syncVideoTransportState: w,
        syncViewToggleState: N,
        togglePlayback: I,
        toggleSelectedExternalStickerVisibility: q,
        toggleSelectedLock: se,
        toggleVideoMuted: me,
        transitionView: Z,
        updateSelectionMenu: he,
        updateSidePanel: we,
        videoState: Pe
      } = Ve);
    },
    closePaintColorPop: ye,
    syncGridToggleButton: p,
    onRootClick: T,
    onRootInput: P,
    onRootChange: M,
    onRootPointerOver: ie,
    onRootPointerOut: ge,
    updatePaintColorFromSv: U,
    updatePaintColorFromHue: ae,
    bindDrag: Ne,
    syncFullscreenButton: _e,
    setFullscreenState: Me,
    onFullscreenChange: Ge,
    syncOutputPreviewToggleButton: Xe
  };
}
function M2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, g, k, m, h, S, X;
  function $(D) {
    var oe, ne, j, re, L;
    if (D.key === "Escape") {
      if (a()) {
        D.preventDefault(), D.stopPropagation(), (oe = D.stopImmediatePropagation) == null || oe.call(D);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        D.preventDefault(), D.stopPropagation(), (ne = D.stopImmediatePropagation) == null || ne.call(D), (j = document.exitFullscreen) == null || j.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        D.preventDefault(), D.stopPropagation(), (re = D.stopImmediatePropagation) == null || re.call(D), m(!1);
        return;
      }
      D.preventDefault(), D.stopPropagation(), (L = D.stopImmediatePropagation) == null || L.call(D), l();
    }
  }
  function B(D) {
    const oe = String(D.key || ""), ne = String(D.code || ""), j = Number(D.keyCode || 0);
    if (!(oe === "Delete" || ne === "Delete" || j === 46) && !(oe === "Backspace" || ne === "Backspace" || j === 8)) return;
    const G = D.target, E = ((G == null ? void 0 : G.tagName) || "").toUpperCase();
    if (E === "INPUT" || E === "TEXTAREA" || G != null && G.isContentEditable) return;
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
  function F(D) {
    if (D.code !== "Space" || D.ctrlKey || D.metaKey || D.altKey || n || !i || !s.timeline.visible || s.confirmDialog.visible) return !1;
    const oe = D.composedPath()[0];
    if (oe !== document.body && oe !== document.documentElement && !r.contains(oe)) return !1;
    const ne = ((oe == null ? void 0 : oe.tagName) || "").toUpperCase();
    return ne === "INPUT" ? !OP.has(String(oe.type || "text").toLowerCase()) : ne !== "TEXTAREA" && ne !== "SELECT" && !(oe != null && oe.isContentEditable);
  }
  function Y(D) {
    F(D) && (D.preventDefault(), D.stopPropagation(), D.repeat || S());
  }
  function H(D) {
    F(D) && (D.preventDefault(), D.stopPropagation());
  }
  function K(D) {
    const oe = !!(D.ctrlKey || D.metaKey), ne = !!D.altKey;
    t.marqueeModifier === oe && t.altModifier === ne || (t.marqueeModifier = oe, t.altModifier = ne, h(), X(t.pointerPos));
  }
  function Q() {
    t.marqueeModifier = !1, t.altModifier = !1, h(), X(t.pointerPos);
  }
  function fe(D) {
    if (n || !D.ctrlKey && !D.metaKey) return;
    const oe = String(D.key || "").toLowerCase(), ne = String(D.code || "");
    if (oe !== "z" && ne !== "KeyZ") return;
    const j = D.target, re = ((j == null ? void 0 : j.tagName) || "").toUpperCase();
    if (re === "INPUT" || re === "TEXTAREA" || j != null && j.isContentEditable) return;
    const { canUndo: L, canRedo: G } = f();
    D.shiftKey && !G || !D.shiftKey && !L || (k(D.shiftKey ? 1 : -1), D.preventDefault(), D.stopPropagation());
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
        togglePlayback: S,
        updateCursor: X
      } = D);
    },
    onEscClose: $,
    onDeleteKey: B,
    onSpaceKey: Y,
    onSpaceKeyUp: H,
    onModifierKeyChange: K,
    onWindowBlur: Q,
    onUndoRedoKey: fe
  };
}
const yp = /* @__PURE__ */ new Map(), ii = Um({
  app: Qn,
  api: hn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: pu,
    markImageFailed: zg,
    markImageLoading: Vg,
    markImageReady: $g
  }
});
function bp(e) {
  if (!Xt(e, "background") || !Xt(e, "external-sticker")) return null;
  const t = ii.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? mo(t[0]) : null;
}
const P2 = ii.assetSource, N2 = ii.source, A2 = ii.uiImage, C2 = ii.invalidateUiImage, vp = ii.loadPreferredExactLinkedImage;
async function I2(e, t, r = {}) {
  var ln, on;
  await Sg(e, { tolerateOperationFailure: !0 }), ii.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = ZP(e, t);
  await _d();
  const a = ia(e, "output_preset"), l = ia(e, "coverage"), c = ia(e, "bg_color"), d = ia(e, EP), u = () => {
    const Te = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return vp(
      e,
      Te,
      () => Ce(),
      `background:size:${Te.join("|")}`
    );
  }, f = () => {
    const Te = u();
    return tN(Te);
  }, g = (Te = 2048) => {
    const Ye = a == null ? void 0 : a.value;
    return eN(Ye) ? f() || Math.max(1, Math.round(Number(Te || 2048))) : QP(Ye, Te);
  }, k = e.__panoSceneStateV2 === !0, m = t === "stickers" && k, h = m && e.__panoStudio === !0, S = h, X = t === "cutout" || h, $ = (k ? sm : om)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: En(l == null ? void 0 : l.value),
    sharedUiSettings: nN(),
    active: cm(e),
    fps: k ? bp(e) : null
  });
  Rn(e).liveState = $, Rn(e).liveStateVersion = 0;
  let B = null;
  S ? (B = $.camera && $.camera.visible !== !1 ? lm($.camera, 0) : null, $.shots = B ? [{ ...B, position: [...B.position] }] : [], $.active.selected_shot_id = null) : t === "cutout" && ($.shots = Array.isArray($.shots) ? $.shots.slice(0, 1) : [], $.shots.length || ($.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var Qt;
    const Te = Array.isArray($.shots) ? $.shots : [], Ye = String(((Qt = $ == null ? void 0 : $.active) == null ? void 0 : Qt.selected_shot_id) || "");
    return Te.find((en) => String((en == null ? void 0 : en.id) || "") === Ye) || Te[0] || null;
  })() : null, Y = F ? Qg(F, !1) : { width: 220, height: 132 }, H = Rg(h ? "studio" : t), K = /* @__PURE__ */ uo({
    stageStatus: Jn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (H.viewButtons || []).map((Te) => ({ ...Te, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (ln = H.spaceButtons) != null && ln.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: H.spaceButtons, frame: H.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (H.toolButtons || []).map((Te) => ({
      ...Te,
      disabled: !1,
      ...Te.key === "add-world" ? { visible: m } : {}
    })),
    floatingButtons: [
      ...(H.floatingButtons || []).map((Te) => ({ ...Te, disabled: !1 })),
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
      customColorCss: hr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: hr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (Te, Ye) => ({ index: Ye, color: null })),
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
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), Q = { frame: /* @__PURE__ */ Pa(0), playing: /* @__PURE__ */ Pa(!1) }, fe = document.createElement("div");
  document.body.appendChild(fe);
  const D = ({ intent: Te, file: Ye } = {}) => {
    if (Zn(Ye)) {
      if (Te === "add") {
        De(Ye);
        return;
      }
      if (Te === "add-world") {
        Le(Ye);
        return;
      }
      Te === "replace" && Fl(Ye);
    }
  }, oe = ({ intent: Te } = {}) => {
  }, ne = Lu(CP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: H,
    paintSwatches: Cl.map((Te) => ({
      id: Te.id,
      label: Te.label,
      cssColor: hr(Te.color, 1)
    })),
    uiState: K,
    playhead: Q,
    onClose: () => {
      an();
    },
    onTimeline: (Te) => Yr(Te),
    onImageFileSelected: D,
    onImageFileCancelled: oe
  });
  let j = null;
  try {
    j = ne.mount(fe);
  } catch (Te) {
    try {
      ne.unmount();
    } catch {
    }
    throw fe.remove(), Te;
  }
  const re = fe.querySelector(".pano-modal-overlay"), L = fe.querySelector(".pano-modal"), G = L == null ? void 0 : L.querySelector("[data-stage-overlay]"), E = L == null ? void 0 : L.querySelector("[data-stage-background]"), W = L == null ? void 0 : L.querySelector(".pano-stage-wrap"), R = ((on = j == null ? void 0 : j.getPaintOverlayRefs) == null ? void 0 : on.call(j)) || {}, J = R.cursor || null, ue = R.sizePreview || null, Se = R.sizeSample || null;
  if (!re || !L || !G || !E || !W || !J || !ue || !Se)
    throw ne.unmount(), fe.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const ee = G.getContext("2d"), A = L.querySelector("[data-side]"), te = L.querySelector("[data-video-element]"), ce = L.querySelector("[data-port-video-element]");
  Ul(G, "editor.stage-overlay"), Ul(E, "editor.stage-background"), pf(te, "editor.video"), pf(ce, "editor.port-video");
  const be = L.querySelector(".pano-floating-right"), ve = L.querySelector(".pano-floating-top"), C = L.querySelector("[data-tool-rail]"), le = L.querySelector("[data-frame-rail]"), v = L.querySelector("[data-frame-roll-knob]"), b = L.querySelector("[data-paint-dock]"), O = L.querySelector(".pano-video-transport"), _ = L.querySelector("[data-selection-menu]"), z = L.querySelector("[data-tooltip]"), x = L.querySelector("[data-camera-preview-host]"), V = L.querySelector("[data-camera-preview-canvas]");
  Ul(V, "editor.camera-preview");
  const w = L.querySelector("[data-paint-color-row]"), N = L.querySelector("[data-paint-color-pop]"), I = L.querySelector("[data-paint-color-sv]"), q = L.querySelector("[data-paint-color-sv-cursor]"), se = L.querySelector("[data-paint-hue-strip]"), me = L.querySelector("[data-paint-hue-handle]");
  W == null || W.removeAttribute("data-stage-ready"), W == null || W.setAttribute("data-stage-loading-kind", "boot"), G.style.opacity = "1", E.style.opacity = "0", i && (A == null || A.remove(), L.classList.add("pano-modal-readonly")), L.addEventListener("pointerdown", () => M.wake(), !0), L.addEventListener("pointerdown", (Te) => {
    var Ye;
    Te.target.closest("[data-frame-roll-knob]") || At(), !Te.target.closest(".pano-picker") && (Te.target.closest("[data-paint-color-row]") || (L.querySelectorAll(".pano-picker-pop").forEach((Qt) => {
      Qt.hidden = !0;
    }), pe(!0), X && he.cutoutAspectOpen && !Te.target.closest(".pano-aspect-popover") && !Te.target.closest("[data-action='aspect']") && (he.cutoutAspectOpen = !1, he.menuMode = "", he.menuSize.measured = !1, Vs(), Ce()), (Ye = K.frameRail) != null && Ye.aspectOpen && !Te.target.closest(".pano-frame-aspect-control") && (K.frameRail.aspectOpen = !1)));
  });
  const he = {
    mode: "pano",
    selectedId: Zg(t, $),
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
    coverage: En($.coverage),
    historyController: SN($),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Er,
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
    showGrid: iN(e == null ? void 0 : e.id, !0),
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
    paintEngine: bl(),
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
  }, we = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (he.selectedId = null, $.active.selected_sticker_id = null), he.selectedIds = he.selectedId ? [he.selectedId] : [];
  const Pe = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), p = nn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const T = nn({ label: "editor.port-still" });
  T.__panoFrameIdx = 0;
  const P = {
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
  }, M = Cx({
    requestAnimationFrame: (Te) => requestAnimationFrame(Te),
    cancelAnimationFrame: (Te) => cancelAnimationFrame(Te),
    draw: (Te, Ye) => Ti(Te, Ye),
    animating: () => Be()
  }), ie = Nx({
    requestFrame: (Te) => M.requestFrame(Te),
    cancelFrame: (Te) => M.cancelFrame(Te),
    tasks: {
      seek: () => El.seek(we.scrubFrame),
      timeline: () => Mr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        rt(), Ce({ localOnly: !0, reason: dt.STATE });
      },
      sidePanel: () => Po()
    }
  }), ge = pS({
    canvas: E,
    onReady: () => {
      Qe(), Ce({ reason: dt.CONTEXT });
    },
    onFailed: () => Ce(),
    onUpdate: () => Ce({ localOnly: !0, reason: dt.MEDIA }),
    onSplats: (Te) => Ce({ localOnly: !0, reason: GN(Te) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      ft(), Qe(), Ce({ reason: dt.CONTEXT });
    }
  }), U = Number.parseFloat(
    getComputedStyle(L).getPropertyValue("--pano-float-radius")
  ) || 10, ae = (Te) => {
    const Ye = String(Te || "default");
    G.style.cursor !== Ye && (G.style.cursor = Ye);
  }, Ne = {
    timer: 0,
    target: null
  }, _e = {
    active: !1,
    depth: 0
  }, Me = ju({
    getView: () => ({ yaw: he.viewYaw, pitch: he.viewPitch, fov: he.viewFov }),
    setView: (Te) => {
      he.viewYaw = jt(Number(Te.yaw || 0)), he.viewPitch = Ie(Number(Te.pitch || 0), -89.9, 89.9), he.viewFov = Ie(Number(Te.fov || he.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Te = G.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Te.width || G.clientWidth || 0)),
        h: Math.max(1, Number(Te.height || G.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Te, Ye;
      return {
        x: (Te = $.ui_settings) != null && Te.invert_view_x ? -1 : 1,
        y: (Ye = $.ui_settings) != null && Ye.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => yt(),
    onInteraction: () => M.requestDraw(dt.VIEW)
  }), {
    addImageStickerFromFile: De,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: Ge,
    applyVideoTimelineFps: Xe,
    bindDrag: Ve,
    cancelFrameCameraGesture: je,
    closePaintColorPop: pe,
    commitState: Oe,
    disposeMediaSession: Ae,
    disposeUpstream: $e,
    editorAnimating: Be,
    finishKnobRoll: He,
    flushFrameWheelCommit: We,
    forgetCameraPreviewFrame: ft,
    getUnwrapRect: yt,
    hidePaintSizePreview: Lt,
    hideTooltip: At,
    hoverWorldGizmo: zn,
    isFreeFrameView: qe,
    isFreeSpaceView: sn,
    migrateLegacyEmbeddedAssets: Gt,
    onCanvasDragOver: ir,
    onCanvasDrop: or,
    onCanvasMouseMove: li,
    onCanvasPointerCancel: rn,
    onCanvasPointerDown: bn,
    onCanvasPointerMove: Ur,
    onCanvasPointerUp: xr,
    onCanvasWheel: sr,
    onDeleteKey: Oi,
    onEscClose: bo,
    onFrameRollKnobDoubleClick: Ms,
    onFrameRollKnobPointerDown: Ps,
    onFrameRollKnobPointerMove: Ns,
    onFullscreenChange: vo,
    onModifierKeyChange: Br,
    onRootChange: Tt,
    onRootClick: qn,
    onRootInput: ar,
    onRootPointerOut: So,
    onRootPointerOver: Fn,
    onSidePanelChange: As,
    onSidePanelClick: Cs,
    onSidePanelInput: Is,
    onSpaceKey: kr,
    onSpaceKeyUp: Es,
    onTimelineAction: Yr,
    onUndoRedoKey: Os,
    onWindowBlur: _o,
    onWindowDragEnter: Fs,
    onWindowDragLeave: wo,
    onWindowDragOver: xo,
    onWindowDrop: Ts,
    playback: El,
    pushHistory: Ol,
    reconcileExternalStickerFromInputs: Ds,
    refreshModalVideoSource: ko,
    replaceSelectedImageFromFile: Fl,
    requestDraw: Ce,
    sampleEditorDiagnostics: Ee,
    setDropCue: xe,
    setPointerPos: _t,
    stageResizeObserver: lt,
    stickerCornerOrderSanity: wt,
    stopRenderLoop: Ze,
    syncCanvasSize: Qe,
    syncCutoutShot: rt,
    syncFullscreenButton: Xn,
    syncGridToggleButton: Je,
    syncLookAtFrameButtonState: Ke,
    syncOutputPreviewToggleButton: et,
    syncPaintUi: qt,
    syncPaintingLayerAsync: Pt,
    syncTimeline: Mr,
    syncUndoRedoButtons: Fi,
    tick: Ti,
    triggerBackgroundPersistenceOnClose: Di,
    updateCursor: Mo,
    updatePaintColorFromHue: Ls,
    updatePaintColorFromSv: Rs,
    updateSelectionMenu: Vs,
    updateSidePanel: Po,
    viewControls: $s,
    watchPixelRatio: ct
  } = sN({
    api: hn,
    app: Qn,
    backgroundCanvas: E,
    bgWidget: c,
    cameraV2: S,
    canvas: G,
    closeEditor: an,
    comfyMedia: ii,
    coverageWidget: l,
    ctx: ee,
    cutoutPreviewCanvas: V,
    cutoutPreviewHost: x,
    dragCue: _e,
    dragFrames: ie,
    editor: he,
    editorView: ge,
    floatingRightEl: be,
    floatingTopEl: ve,
    frameGateCssRadius: U,
    frameRailEl: le,
    frameRollKnobEl: v,
    hideSidebar: i,
    imageCache: Pe,
    initialShotBase: B,
    loadPreferredExactLinkedImage: vp,
    mediaAssetSource: P2,
    mediaSource: N2,
    mediaUiImage: A2,
    node: e,
    overlay: re,
    paintColorPop: N,
    paintColorRow: w,
    paintColorSv: I,
    paintColorSvCursor: q,
    paintCursorEl: J,
    paintDockEl: b,
    paintHueHandle: me,
    paintHueStrip: se,
    paintSizePreviewEl: ue,
    paintSizePreviewSampleEl: Se,
    portStillCanvas: T,
    portVideoEl: ce,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: y,
    rasterImageAlphaCache: ye,
    rasterImageCache: de,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: L,
    runtime: P,
    sceneV2: m,
    scheduler: M,
    selectionMenu: _,
    setCanvasCursor: ae,
    shotEditor: X,
    stageWrap: W,
    state: $,
    stateV2: k,
    stateWidget: d,
    stillCanvas: p,
    studio: h,
    timeline: we,
    timelinePlayhead: Q,
    toolRailEl: C,
    tooltip: Ne,
    tooltipEl: z,
    type: t,
    uiState: K,
    videoEl: te,
    videoTimelineFps: bp,
    videoTransportEl: O,
    viewController: Me,
    vueModal: j
  }, [
    yN,
    _N,
    wN,
    xN,
    kN,
    MN,
    PN,
    NN,
    AN,
    zN,
    jN,
    HN,
    KN,
    UN,
    BN,
    d2,
    f2,
    p2,
    h2,
    m2,
    g2,
    y2,
    b2,
    v2,
    S2,
    _2,
    w2,
    x2,
    k2,
    M2
  ]);
  wt(), lt.observe(G), ct();
  const pt = () => Oe();
  n || (Gm(e).flushBeforeQueue = pt), v == null || v.addEventListener("pointerdown", Ps), v == null || v.addEventListener("pointermove", Ns), v == null || v.addEventListener("pointerup", He), v == null || v.addEventListener("pointercancel", () => je()), v == null || v.addEventListener("lostpointercapture", () => {
    var Te;
    ((Te = he.interaction) == null ? void 0 : Te.source) === "knob" && je();
  }), v == null || v.addEventListener("dblclick", Ms), G.onpointerdown = bn, G.onpointermove = Ur, G.onpointerup = xr, G.onpointercancel = rn, G.onlostpointercapture = () => {
    je();
  }, G.onauxclick = (Te) => {
    Te.button === 1 && Te.preventDefault();
  }, G.oncontextmenu = (Te) => {
    (sn() || qe()) && ew($s(), 2) && Te.preventDefault();
  }, G.onmousemove = li, G.onpointerleave = () => {
    he.interaction || zn({ x: -1e6, y: -1e6 });
  }, G.onmouseleave = () => {
    _t(he.pointerPos, !1), Mo(he.pointerPos), he.mode === "frame" && he.primaryTool === "cursor" && Ce({ localOnly: !0, reason: dt.OVERLAY });
  }, G.onwheel = sr, G.ondragover = ir, G.ondrop = or, window.addEventListener("dragenter", Fs, !0), window.addEventListener("dragover", xo, !0), window.addEventListener("dragleave", wo, !0), window.addEventListener("drop", Ts, !0), A == null || A.addEventListener("click", Cs), A == null || A.addEventListener("input", Is), A == null || A.addEventListener("change", As), Je(), L.addEventListener("click", qn), L.addEventListener("input", ar), L.addEventListener("change", Tt), L.addEventListener("pointerup", (Te) => {
    var Ye;
    if (Te.target.closest("[data-video-volume]")) {
      typeof ((Ye = Te.target) == null ? void 0 : Ye.blur) == "function" && Te.target.blur();
      return;
    }
    Te.target.closest("[data-paint-size-slider]") && Lt();
  }), L.addEventListener("pointercancel", (Te) => {
    var Ye;
    if (Te.target.closest("[data-video-volume]")) {
      typeof ((Ye = Te.target) == null ? void 0 : Ye.blur) == "function" && Te.target.blur();
      return;
    }
    Te.target.closest("[data-paint-size-slider]") && Lt();
  }), L.addEventListener("focusout", (Te) => {
    Te.target.closest("[data-paint-size-slider]") && Lt();
  }), L.addEventListener("pointerover", Fn), L.addEventListener("pointerout", So), L.addEventListener("pointerdown", (Te) => {
    Te.target.closest("[data-frame-roll-knob]") || At();
  }), I && (I.onpointerdown = (Te) => {
    Te.preventDefault(), Te.stopPropagation(), Ve(Te, (Ye) => Rs(Ye.clientX, Ye.clientY));
  }), se && (se.onpointerdown = (Te) => {
    Te.preventDefault(), Te.stopPropagation(), Ve(Te, (Ye) => Ls(Ye.clientX));
  }), L.addEventListener("click", (Te) => {
    var lr;
    const Ye = Te.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!Ye) return;
    const Qt = Ye.getAttribute("data-action") === "confirm-accept", en = (lr = K.confirmDialog) == null ? void 0 : lr.resolve;
    K.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, en == null || en(Qt);
  }), document.addEventListener("fullscreenchange", vo), Xn(), et();
  const mt = e.onConnectionsChange;
  let bt = null, vn = () => {
  };
  !n && t === "stickers" && (vn = bg(e, (Te = "sync") => {
    Te === "executed" && (C2(Pe, lo), ko(), m && Xe()), Ds(Te);
  }, { editor: !0 }), bt = function(...Ye) {
    typeof mt == "function" && mt.apply(this, Ye), ko(), $r(this, "connections");
  }, e.onConnectionsChange = bt), n || yp.set(String(e.id ?? "0"), () => Pt());
  let Rt = null;
  async function an() {
    return Rt || (Rt = (async () => {
      var Ye, Qt, en, lr, qr, zs, Cd, js, Id;
      yp.delete(String(e.id ?? "0")), We(), n || Oe(), document.fullscreenElement === re && ((Ye = document.exitFullscreen) == null || Ye.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", vo), Rn(e).liveState = null;
      const Te = NS(e);
      return (Te == null ? void 0 : Te.flushBeforeQueue) === pt && (Te.flushBeforeQueue = null), (lr = (en = (Qt = Wm(e)) == null ? void 0 : Qt.dom) == null ? void 0 : en.requestDraw) == null || lr.call(en), (zs = (qr = e.graph) == null ? void 0 : qr.setDirtyCanvas) == null || zs.call(qr, !0, !0), (Id = (js = (Cd = Qn) == null ? void 0 : Cd.canvas) == null ? void 0 : js.setDirty) == null || Id.call(js, !0, !0), At(), ie.cancel(), Ze(), Ae(), $e(), ge.dispose(), xe(!1), window.removeEventListener("keydown", bo, !0), window.removeEventListener("keydown", Oi, !0), window.removeEventListener("keydown", kr, !0), window.removeEventListener("keyup", Es, !0), window.removeEventListener("keydown", Br, !0), window.removeEventListener("keyup", Br, !0), window.removeEventListener("blur", _o), window.removeEventListener("keydown", Os, !0), window.removeEventListener("dragenter", Fs, !0), window.removeEventListener("dragover", xo, !0), window.removeEventListener("dragleave", wo, !0), window.removeEventListener("drop", Ts, !0), !n && t === "stickers" && (e.onConnectionsChange === bt && (e.onConnectionsChange = mt), vn()), ne.unmount(), fe.remove(), Di(), Rt = null, !0;
    })().catch((Te) => (console.error("[PanoramaCutoutSync] closeEditor failed", Te), Rt = null, !1)), Rt);
  }
  window.addEventListener("keydown", bo, !0), window.addEventListener("keydown", Oi, !0), window.addEventListener("keydown", kr, !0), window.addEventListener("keyup", Es, !0), window.addEventListener("keydown", Br, !0), window.addEventListener("keyup", Br, !0), window.addEventListener("blur", _o), window.addEventListener("keydown", Os, !0), re.addEventListener("pointerdown", (Te) => {
    Te.target === re && an();
  });
  function vt(Te, Ye, { rollbackState: Qt = !1 } = {}) {
    let en = "";
    try {
      Qt && (en = JSON.stringify($)), Ye();
    } catch (lr) {
      if (en)
        try {
          const qr = JSON.parse(en);
          Object.keys($).forEach((zs) => delete $[zs]), Object.assign($, qr), n || Oe();
        } catch (qr) {
          console.error(`[PanoramaStickers] editor boot step "${Te}" rollback failed`, qr);
        }
      K.stageWarningDetail = `boot:${Te}`, console.error(`[PanoramaStickers] editor boot step "${Te}" failed`, lr);
    }
  }
  vt("cutout-focus", Ge), !n && t === "stickers" && vt("external-sticker-sync", () => Ds("open"), { rollbackState: !0 }), Gt().catch((Te) => {
    K.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Te);
  }), vt("history", Ol), vt("undo-redo", Fi), vt("paint-ui", qt), vt("side-panel", Po), vt("look-at-frame", Ke), vt("video-source", ko), vt("canvas-size", Qe), vt("cursor", () => Mo(he.pointerPos)), Ce(), Ee();
}
Qn.registerExtension(uw({
  app: Qn,
  openEditor: I2,
  attachStickers: Mx,
  attachCutout: Px,
  attachPreview: kx,
  restoreOutput: dx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: DP
}));
