import * as ca from "../../scripts/app.js";
import { app as ir } from "../../scripts/app.js";
import { api as pn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ft = {}, Qi = [], vr = () => {
}, Ep = () => !1, dl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), fl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Pu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, v0 = Object.prototype.hasOwnProperty, Mt = (e, t) => v0.call(e, t), it = Array.isArray, eo = (e) => bs(e) === "[object Map]", Op = (e) => bs(e) === "[object Set]", zd = (e) => bs(e) === "[object Date]", at = (e) => typeof e == "function", Xt = (e) => typeof e == "string", _r = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", Fp = (e) => (Et(e) || at(e)) && at(e.then) && at(e.catch), Tp = Object.prototype.toString, bs = (e) => Tp.call(e), S0 = (e) => bs(e).slice(8, -1), Dp = (e) => bs(e) === "[object Object]", Nu = (e) => Xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Wo = /* @__PURE__ */ Mu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), pl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, w0 = /-\w/g, _n = pl(
  (e) => e.replace(w0, (t) => t.slice(1).toUpperCase())
), _0 = /\B([A-Z])/g, Fi = pl(
  (e) => e.replace(_0, "-$1").toLowerCase()
), hl = pl((e) => e.charAt(0).toUpperCase() + e.slice(1)), $l = pl(
  (e) => e ? `on${hl(e)}` : ""
), gr = (e, t) => !Object.is(e, t), ua = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Lp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Au = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let jd;
const ml = () => jd || (jd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Xt(n) ? P0(n) : It(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Xt(e) || Et(e))
    return e;
}
const x0 = /;(?![^(]*\))/g, k0 = /:([^]+)/, M0 = /\/\*[^]*?\*\//g;
function P0(e) {
  const t = {};
  return e.replace(M0, "").split(x0).forEach((r) => {
    if (r) {
      const n = r.split(k0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Xt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = gt(e[r]);
      n && (t += n + " ");
    }
  else if (Et(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const N0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", A0 = /* @__PURE__ */ Mu(N0);
function Rp(e) {
  return !!e || e === "";
}
function C0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Cu(e[n], t[n]);
  return r;
}
function Cu(e, t) {
  if (e === t) return !0;
  let r = zd(e), n = zd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = _r(e), n = _r(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? C0(e, t) : !1;
  if (r = Et(e), n = Et(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Cu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Vp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Xt(e) ? e : e == null ? "" : it(e) || Et(e) && (e.toString === Tp || !at(e.toString)) ? Vp(e) ? rt(e.value) : JSON.stringify(e, $p, 2) : String(e), $p = (e, t) => Vp(t) ? $p(e, t.value) : eo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[zl(n, o) + " =>"] = i, r),
    {}
  )
} : Op(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => zl(r))
} : _r(t) ? zl(t) : Et(t) && !it(t) && !Dp(t) ? String(t) : t, zl = (e, t = "") => {
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
let On;
class I0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = On, !t && On && (this.index = (On.scopes || (On.scopes = [])).push(
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
      const r = On;
      try {
        return On = this, t();
      } finally {
        On = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = On, On = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (On = this.prevScope, this.prevScope = void 0);
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
function E0() {
  return On;
}
let Lt;
const jl = /* @__PURE__ */ new WeakSet();
class zp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, On && On.active && On.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, jl.has(this) && (jl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hd(this), Gp(this);
    const t = Lt, r = or;
    Lt = this, or = !0;
    try {
      return this.fn();
    } finally {
      Kp(this), Lt = t, or = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ou(t);
      this.deps = this.depsTail = void 0, Hd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? jl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Cc(this) && this.run();
  }
  get dirty() {
    return Cc(this);
  }
}
let jp = 0, Uo, Bo;
function Hp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bo, Bo = e;
    return;
  }
  e.next = Uo, Uo = e;
}
function Iu() {
  jp++;
}
function Eu() {
  if (--jp > 0)
    return;
  if (Bo) {
    let t = Bo;
    for (Bo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Uo; ) {
    let t = Uo;
    for (Uo = void 0; t; ) {
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
function Gp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Kp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Ou(n), O0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Cc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ts) || (e.globalVersion = ts, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = or;
  Lt = e, or = !0;
  try {
    Gp(e);
    const i = e.fn(e._value);
    (t.version === 0 || gr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, or = n, Kp(e), e.flags &= -3;
  }
}
function Ou(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Ou(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function O0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let or = !0;
const Up = [];
function zr() {
  Up.push(or), or = !1;
}
function jr() {
  const e = Up.pop();
  or = e === void 0 ? !0 : e;
}
function Hd(e) {
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
let ts = 0;
class F0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !or || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new F0(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, Bp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, ts++, this.notify(t);
  }
  notify(t) {
    Iu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Eu();
    }
  }
}
function Bp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Bp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ic = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ Symbol(
  ""
), Ec = /* @__PURE__ */ Symbol(
  ""
), ns = /* @__PURE__ */ Symbol(
  ""
);
function dn(e, t, r) {
  if (or && Lt) {
    let n = Ic.get(e);
    n || Ic.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Fu()), i.map = n, i.key = r), i.track();
  }
}
function Or(e, t, r, n, i, o) {
  const s = Ic.get(e);
  if (!s) {
    ts++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Iu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Nu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === ns || !_r(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(ns)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(xi)), eo(e) && a(s.get(Ec)));
          break;
        case "delete":
          l || (a(s.get(xi)), eo(e) && a(s.get(Ec)));
          break;
        case "set":
          eo(e) && a(s.get(xi));
          break;
      }
  }
  Eu();
}
function ji(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (dn(t, "iterate", ns), /* @__PURE__ */ qn(e) ? t : t.map(lr));
}
function gl(e) {
  return dn(e = /* @__PURE__ */ kt(e), "iterate", ns), e;
}
function pr(e, t) {
  return /* @__PURE__ */ Hr(e) ? ao(/* @__PURE__ */ ki(e) ? lr(t) : t) : lr(t);
}
const T0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hl(this, Symbol.iterator, (e) => pr(this, e));
  },
  concat(...e) {
    return ji(this).concat(
      ...e.map((t) => it(t) ? ji(t) : t)
    );
  },
  entries() {
    return Hl(this, "entries", (e) => (e[1] = pr(this, e[1]), e));
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
      (r) => r.map((n) => pr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Pr(
      this,
      "find",
      e,
      t,
      (r) => pr(this, r),
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
      (r) => pr(this, r),
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
    return Gl(this, "includes", e);
  },
  indexOf(...e) {
    return Gl(this, "indexOf", e);
  },
  join(e) {
    return ji(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Gl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...t) {
    return Gd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gd(this, "reduceRight", e, t);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return ji(this).toReversed();
  },
  toSorted(e) {
    return ji(this).toSorted(e);
  },
  toSpliced(...e) {
    return ji(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return Hl(this, "values", (e) => pr(this, e));
  }
};
function Hl(e, t, r) {
  const n = gl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ qn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const D0 = Array.prototype;
function Pr(e, t, r, n, i, o) {
  const s = gl(e), a = s !== e && !/* @__PURE__ */ qn(e), l = s[t];
  if (l !== D0[t]) {
    const u = l.apply(e, o);
    return a ? lr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, pr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Gd(e, t, r, n) {
  const i = gl(e), o = i !== e && !/* @__PURE__ */ qn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = pr(e, c)), r.call(this, c, pr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? pr(e, l) : l;
}
function Gl(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  dn(n, "iterate", ns);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Lu(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Ao(e, t, r = []) {
  zr(), Iu();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return Eu(), jr(), n;
}
const L0 = /* @__PURE__ */ Mu("__proto__,__v_isRef,__isVue"), Yp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_r)
);
function R0(e) {
  _r(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
class qp {
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
      return n === (i ? o ? B0 : Qp : o ? Zp : Jp).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = T0[r]))
        return l;
      if (r === "hasOwnProperty")
        return R0;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ mn(t) ? t : n
    );
    if ((_r(r) ? Yp.has(r) : L0(r)) || (i || dn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ mn(a)) {
      const l = s && Nu(r) ? a : a.value;
      return i && Et(l) ? /* @__PURE__ */ Fc(l) : l;
    }
    return Et(a) ? i ? /* @__PURE__ */ Fc(a) : /* @__PURE__ */ mo(a) : a;
  }
}
class Xp extends qp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Nu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Hr(o);
      if (!/* @__PURE__ */ qn(n) && !/* @__PURE__ */ Hr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ mn(o) && !/* @__PURE__ */ mn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : Mt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ mn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? gr(n, o) && Or(t, "set", r, n) : Or(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Mt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Or(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!_r(r) || !Yp.has(r)) && dn(t, "has", r), n;
  }
  ownKeys(t) {
    return dn(
      t,
      "iterate",
      it(t) ? "length" : xi
    ), Reflect.ownKeys(t);
  }
}
class V0 extends qp {
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
const $0 = /* @__PURE__ */ new Xp(), z0 = /* @__PURE__ */ new V0(), j0 = /* @__PURE__ */ new Xp(!0);
const Oc = (e) => e, Us = (e) => Reflect.getPrototypeOf(e);
function H0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = eo(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Oc : t ? ao : lr;
    return !t && dn(
      o,
      "iterate",
      l ? Ec : xi
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
function Bs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function G0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (gr(i, a) && dn(s, "get", i), dn(s, "get", a));
      const { has: l } = Us(s), c = t ? Oc : e ? ao : lr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && dn(/* @__PURE__ */ kt(i), "iterate", xi), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (gr(i, a) && dn(s, "has", i), dn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? Oc : e ? ao : lr;
      return !e && dn(l, "iterate", xi), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return gn(
    r,
    e ? {
      add: Bs("add"),
      set: Bs("set"),
      delete: Bs("delete"),
      clear: Bs("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = Us(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ qn(i) && !/* @__PURE__ */ Hr(i) ? a : i;
        return s.has.call(o, l) || gr(i, l) && s.has.call(o, i) || gr(a, l) && s.has.call(o, a) || (o.add(l), Or(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ qn(o) && !/* @__PURE__ */ Hr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = Us(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? gr(o, d) && Or(s, "set", i, o) : Or(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = Us(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Or(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
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
    r[i] = H0(i, e, t);
  }), r;
}
function Tu(e, t) {
  const r = G0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const K0 = {
  get: /* @__PURE__ */ Tu(!1, !1)
}, W0 = {
  get: /* @__PURE__ */ Tu(!1, !0)
}, U0 = {
  get: /* @__PURE__ */ Tu(!0, !1)
};
const Jp = /* @__PURE__ */ new WeakMap(), Zp = /* @__PURE__ */ new WeakMap(), Qp = /* @__PURE__ */ new WeakMap(), B0 = /* @__PURE__ */ new WeakMap();
function Y0(e) {
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
function q0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Y0(S0(e));
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return /* @__PURE__ */ Hr(e) ? e : Du(
    e,
    !1,
    $0,
    K0,
    Jp
  );
}
// @__NO_SIDE_EFFECTS__
function X0(e) {
  return Du(
    e,
    !1,
    j0,
    W0,
    Zp
  );
}
// @__NO_SIDE_EFFECTS__
function Fc(e) {
  return Du(
    e,
    !0,
    z0,
    U0,
    Qp
  );
}
function Du(e, t, r, n, i) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = q0(e);
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
function ki(e) {
  return /* @__PURE__ */ Hr(e) ? /* @__PURE__ */ ki(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Lu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function J0(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && Lp(e, "__v_skip", !0), e;
}
const lr = (e) => Et(e) ? /* @__PURE__ */ mo(e) : e, ao = (e) => Et(e) ? /* @__PURE__ */ Fc(e) : e;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return eh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  return eh(e, !0);
}
function eh(e, t) {
  return /* @__PURE__ */ mn(e) ? e : new Z0(e, t);
}
class Z0 {
  constructor(t, r) {
    this.dep = new Fu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : lr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qn(t) || /* @__PURE__ */ Hr(t);
    t = n ? t : /* @__PURE__ */ kt(t), gr(t, r) && (this._rawValue = t, this._value = n ? t : lr(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ mn(e) ? e.value : e;
}
const Q0 = {
  get: (e, t, r) => t === "__v_raw" ? e : tt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ mn(i) && !/* @__PURE__ */ mn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function th(e) {
  return /* @__PURE__ */ ki(e) ? e : new Proxy(e, Q0);
}
class ey {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Fu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ts - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return Hp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Wp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ty(e, t, r = !1) {
  let n, i;
  return at(e) ? n = e : (n = e.get, i = e.set), new ey(n, i, r);
}
const Ys = {}, Ea = /* @__PURE__ */ new WeakMap();
let bi;
function ny(e, t = !1, r = bi) {
  if (r) {
    let n = Ea.get(r);
    n || Ea.set(r, n = []), n.push(e);
  }
}
function ry(e, t, r = Ft) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (te) => i ? te : /* @__PURE__ */ qn(te) || i === !1 || i === 0 ? Fr(te, 1) : Fr(te);
  let d, u, f, g, _ = !1, m = !1;
  if (/* @__PURE__ */ mn(e) ? (u = () => e.value, _ = /* @__PURE__ */ qn(e)) : /* @__PURE__ */ ki(e) ? (u = () => c(e), _ = !0) : it(e) ? (m = !0, _ = e.some((te) => /* @__PURE__ */ ki(te) || /* @__PURE__ */ qn(te)), u = () => e.map((te) => {
    if (/* @__PURE__ */ mn(te))
      return te.value;
    if (/* @__PURE__ */ ki(te))
      return c(te);
    if (at(te))
      return l ? l(te, 2) : te();
  })) : at(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      zr();
      try {
        f();
      } finally {
        jr();
      }
    }
    const te = bi;
    bi = d;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      bi = te;
    }
  } : u = vr, t && i) {
    const te = u, C = i === !0 ? 1 / 0 : i;
    u = () => Fr(te(), C);
  }
  const h = E0(), w = () => {
    d.stop(), h && h.active && Pu(h.effects, d);
  };
  if (o && t) {
    const te = t;
    t = (...C) => {
      te(...C), w();
    };
  }
  let ee = m ? new Array(e.length).fill(Ys) : Ys;
  const $ = (te) => {
    if (!(!(d.flags & 1) || !d.dirty && !te))
      if (t) {
        const C = d.run();
        if (i || _ || (m ? C.some((X, z) => gr(X, ee[z])) : gr(C, ee))) {
          f && f();
          const X = bi;
          bi = d;
          try {
            const z = [
              C,
              // pass undefined as the old value when it's changed for the first time
              ee === Ys ? void 0 : m && ee[0] === Ys ? [] : ee,
              g
            ];
            ee = C, l ? l(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            bi = X;
          }
        }
      } else
        d.run();
  };
  return a && a($), d = new zp(u), d.scheduler = s ? () => s($, !1) : $, g = (te) => ny(te, !1, d), f = d.onStop = () => {
    const te = Ea.get(d);
    if (te) {
      if (l)
        l(te, 4);
      else
        for (const C of te) C();
      Ea.delete(d);
    }
  }, t ? n ? $(!0) : ee = d.run() : s ? s($.bind(null, !0), !0) : d.run(), w.pause = d.pause.bind(d), w.resume = d.resume.bind(d), w.stop = w, w;
}
function Fr(e, t = 1 / 0, r) {
  if (t <= 0 || !Et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ mn(e))
    Fr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Fr(e[n], t, r);
  else if (Op(e) || eo(e))
    e.forEach((n) => {
      Fr(n, t, r);
    });
  else if (Dp(e)) {
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
function vs(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    yl(i, t, r);
  }
}
function xr(e, t, r, n) {
  if (at(e)) {
    const i = vs(e, t, r, n);
    return i && Fp(i) && i.catch((o) => {
      yl(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(xr(e[o], t, r, n));
    return i;
  }
}
function yl(e, t, r, n = !0) {
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
      zr(), vs(o, null, 10, [
        e,
        l,
        c
      ]), jr();
      return;
    }
  }
  iy(e, r, i, n, s);
}
function iy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let fr = -1;
const to = [];
let Zr = null, Ki = 0;
const nh = /* @__PURE__ */ Promise.resolve();
let Oa = null;
function bl(e) {
  const t = Oa || nh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oy(e) {
  let t = fr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = rs(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ru(e) {
  if (!(e.flags & 1)) {
    const t = rs(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rs(r) ? Sn.push(e) : Sn.splice(oy(t), 0, e), e.flags |= 1, rh();
  }
}
function rh() {
  Oa || (Oa = nh.then(oh));
}
function sy(e) {
  it(e) ? to.push(...e) : Zr && e.id === -1 ? Zr.splice(Ki + 1, 0, e) : e.flags & 1 || (to.push(e), e.flags |= 1), rh();
}
function Kd(e, t, r = fr + 1) {
  for (; r < Sn.length; r++) {
    const n = Sn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Sn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function ih(e) {
  if (to.length) {
    const t = [...new Set(to)].sort(
      (r, n) => rs(r) - rs(n)
    );
    if (to.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, Ki = 0; Ki < Zr.length; Ki++) {
      const r = Zr[Ki];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Zr = null, Ki = 0;
  }
}
const rs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function oh(e) {
  try {
    for (fr = 0; fr < Sn.length; fr++) {
      const t = Sn[fr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; fr < Sn.length; fr++) {
      const t = Sn[fr];
      t && (t.flags &= -2);
    }
    fr = -1, Sn.length = 0, ih(), Oa = null, (Sn.length || to.length) && oh();
  }
}
let zn = null, sh = null;
function Fa(e) {
  const t = zn;
  return zn = e, sh = e && e.type.__scopeId || null, t;
}
function ah(e, t = zn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && nf(-1);
    const o = Fa(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Fa(o), n._d && nf(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Vr(e, t) {
  if (zn === null)
    return e;
  const r = xl(zn), n = e.dirs || (e.dirs = []);
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
function fi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (zr(), xr(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), jr());
  }
}
function ay(e, t) {
  if (fn) {
    let r = fn.provides;
    const n = fn.parent && fn.parent.provides;
    n === r && (r = fn.provides = Object.create(n)), r[e] = t;
  }
}
function da(e, t, r = !1) {
  const n = ob();
  if (n || no) {
    let i = no ? no._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const ly = /* @__PURE__ */ Symbol.for("v-scx"), cy = () => da(ly);
function Mi(e, t, r) {
  return lh(e, t, r);
}
function lh(e, t, r = Ft) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (os) {
    if (o === "sync") {
      const g = cy();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = vr, g.resume = vr, g.pause = vr, g;
    }
  }
  const d = fn;
  a.call = (g, _, m) => xr(g, d, _, m);
  let u = !1;
  o === "post" ? a.scheduler = (g) => {
    En(g, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (g, _) => {
    _ ? g() : Ru(g);
  }), a.augmentJob = (g) => {
    t && (g.flags |= 4), u && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const f = ry(e, t, a);
  return os && (c ? c.push(f) : l && f()), f;
}
function uy(e, t, r) {
  const n = this.proxy, i = Xt(e) ? e.includes(".") ? ch(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = ws(this), a = lh(i, o.bind(n), r);
  return s(), a;
}
function ch(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const dy = /* @__PURE__ */ Symbol("_vte"), fy = (e) => e.__isTeleport, py = /* @__PURE__ */ Symbol("_leaveCb");
function Vu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function uh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Wd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Ta = /* @__PURE__ */ new WeakMap();
function Yo(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (m, h) => Yo(
        m,
        t && (it(t) ? t[h] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (qo(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Yo(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? xl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Ft ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), g = u === Ft ? Ep : (m) => Wd(d, m) ? !1 : Mt(f, m), _ = (m, h) => !(h && Wd(d, h));
  if (c != null && c !== l) {
    if (Ud(t), Xt(c))
      d[c] = null, g(c) && (u[c] = null);
    else if (/* @__PURE__ */ mn(c)) {
      const m = t;
      _(c, m.k) && (c.value = null), m.k && (d[m.k] = null);
    }
  }
  if (at(l))
    vs(l, a, 12, [s, d]);
  else {
    const m = Xt(l), h = /* @__PURE__ */ mn(l);
    if (m || h) {
      const w = () => {
        if (e.f) {
          const ee = m ? g(l) ? u[l] : d[l] : _() || !e.k ? l.value : d[e.k];
          if (i)
            it(ee) && Pu(ee, o);
          else if (it(ee))
            ee.includes(o) || ee.push(o);
          else if (m)
            d[l] = [o], g(l) && (u[l] = d[l]);
          else {
            const $ = [o];
            _(l, e.k) && (l.value = $), e.k && (d[e.k] = $);
          }
        } else m ? (d[l] = s, g(l) && (u[l] = s)) : h && (_(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const ee = () => {
          w(), Ta.delete(e);
        };
        ee.id = -1, Ta.set(e, ee), En(ee, r);
      } else
        Ud(e), w();
    }
  }
}
function Ud(e) {
  const t = Ta.get(e);
  t && (t.flags |= 8, Ta.delete(e));
}
ml().requestIdleCallback;
ml().cancelIdleCallback;
const qo = (e) => !!e.type.__asyncLoader, dh = (e) => e.type.__isKeepAlive;
function hy(e, t) {
  fh(e, "a", t);
}
function my(e, t) {
  fh(e, "da", t);
}
function fh(e, t, r = fn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (vl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      dh(i.parent.vnode) && gy(n, t, r, i), i = i.parent;
  }
}
function gy(e, t, r, n) {
  const i = vl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ph(() => {
    Pu(n[t], i);
  }, r);
}
function vl(e, t, r = fn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      zr();
      const a = ws(r), l = xr(t, r, e, s);
      return a(), jr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Kr = (e) => (t, r = fn) => {
  (!os || e === "sp") && vl(e, (...n) => t(...n), r);
}, yy = Kr("bm"), Sl = Kr("m"), by = Kr(
  "bu"
), vy = Kr("u"), Ss = Kr(
  "bum"
), ph = Kr("um"), Sy = Kr(
  "sp"
), wy = Kr("rtg"), _y = Kr("rtc");
function xy(e, t = fn) {
  vl("ec", e, t);
}
const ky = "components", hh = /* @__PURE__ */ Symbol.for("v-ndc");
function My(e) {
  return Xt(e) ? Py(ky, e, !1) || e : e || hh;
}
function Py(e, t, r = !0, n = !1) {
  const i = zn || fn;
  if (i) {
    const o = i.type;
    {
      const a = ub(
        o,
        !1
      );
      if (a && (a === t || a === _n(t) || a === hl(_n(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bd(i[e] || o[e], t) || // global registration
      Bd(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function Bd(e, t) {
  return e && (e[t] || e[_n(t)] || e[hl(_n(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Xt(e)) {
    const a = s && /* @__PURE__ */ ki(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ qn(e), c = /* @__PURE__ */ Hr(e), e = gl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? ao(lr(e[d])) : lr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Et(e))
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
const Tc = (e) => e ? Dh(e) ? xl(e) : Tc(e.parent) : null, Xo = (
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
    $parent: (e) => Tc(e.parent),
    $root: (e) => Tc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => gh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ru(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bl.bind(e.proxy)),
    $watch: (e) => uy.bind(e)
  })
), Kl = (e, t) => e !== Ft && !e.__isScriptSetup && Mt(e, t), Ny = {
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
        if (Kl(n, t))
          return s[t] = 1, n[t];
        if (i !== Ft && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Ft && Mt(r, t))
          return s[t] = 4, r[t];
        Dc && (s[t] = 0);
      }
    }
    const c = Xo[t];
    let d, u;
    if (c)
      return t === "$attrs" && dn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Ft && Mt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, Mt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return Kl(i, t) ? (i[t] = r, !0) : n !== Ft && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Ft && a[0] !== "$" && Mt(e, a) || Kl(t, a) || Mt(o, a) || Mt(n, a) || Mt(Xo, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Mt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Yd(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Dc = !0;
function Ay(e) {
  const t = gh(e), r = e.proxy, n = e.ctx;
  Dc = !1, t.beforeCreate && qd(t.beforeCreate, e, "bc");
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
    updated: _,
    activated: m,
    deactivated: h,
    beforeDestroy: w,
    beforeUnmount: ee,
    destroyed: $,
    unmounted: te,
    render: C,
    renderTracked: X,
    renderTriggered: z,
    errorCaptured: G,
    serverPrefetch: ne,
    // public API
    expose: he,
    inheritAttrs: q,
    // assets
    components: fe,
    directives: ce,
    filters: oe
  } = t;
  if (c && Cy(c, n, null), s)
    for (const H in s) {
      const A = s[H];
      at(A) && (n[H] = A.bind(r));
    }
  if (i) {
    const H = i.call(r, r);
    Et(H) && (e.data = /* @__PURE__ */ mo(H));
  }
  if (Dc = !0, o)
    for (const H in o) {
      const A = o[H], j = at(A) ? A.bind(r, r) : at(A.get) ? A.get.bind(r, r) : vr, T = !at(A) && at(A.set) ? A.set.bind(r) : vr, Y = dt({
        get: j,
        set: T
      });
      Object.defineProperty(n, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Y.value,
        set: (pe) => Y.value = pe
      });
    }
  if (a)
    for (const H in a)
      mh(a[H], n, r, H);
  if (l) {
    const H = at(l) ? l.call(r) : l;
    Reflect.ownKeys(H).forEach((A) => {
      ay(A, H[A]);
    });
  }
  d && qd(d, e, "c");
  function E(H, A) {
    it(A) ? A.forEach((j) => H(j.bind(r))) : A && H(A.bind(r));
  }
  if (E(yy, u), E(Sl, f), E(by, g), E(vy, _), E(hy, m), E(my, h), E(xy, G), E(_y, X), E(wy, z), E(Ss, ee), E(ph, te), E(Sy, ne), it(he))
    if (he.length) {
      const H = e.exposed || (e.exposed = {});
      he.forEach((A) => {
        Object.defineProperty(H, A, {
          get: () => r[A],
          set: (j) => r[A] = j,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === vr && (e.render = C), q != null && (e.inheritAttrs = q), fe && (e.components = fe), ce && (e.directives = ce), ne && uh(e);
}
function Cy(e, t, r = vr) {
  it(e) && (e = Lc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Et(i) ? "default" in i ? o = da(
      i.from || n,
      i.default,
      !0
    ) : o = da(i.from || n) : o = da(i), /* @__PURE__ */ mn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function qd(e, t, r) {
  xr(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function mh(e, t, r, n) {
  let i = n.includes(".") ? ch(r, n) : () => r[n];
  if (Xt(e)) {
    const o = t[e];
    at(o) && Mi(i, o);
  } else if (at(e))
    Mi(i, e.bind(r));
  else if (Et(e))
    if (it(e))
      e.forEach((o) => mh(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && Mi(i, o, e);
    }
}
function gh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Da(l, c, s, !0)
  ), Da(l, t, s)), Et(t) && o.set(t, l), l;
}
function Da(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Da(e, o, r, !0), i && i.forEach(
    (s) => Da(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Iy[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Iy = {
  data: Xd,
  props: Jd,
  emits: Jd,
  // objects
  methods: Lo,
  computed: Lo,
  // lifecycle
  beforeCreate: bn,
  created: bn,
  beforeMount: bn,
  mounted: bn,
  beforeUpdate: bn,
  updated: bn,
  beforeDestroy: bn,
  beforeUnmount: bn,
  destroyed: bn,
  unmounted: bn,
  activated: bn,
  deactivated: bn,
  errorCaptured: bn,
  serverPrefetch: bn,
  // assets
  components: Lo,
  directives: Lo,
  // watch
  watch: Oy,
  // provide / inject
  provide: Xd,
  inject: Ey
};
function Xd(e, t) {
  return t ? e ? function() {
    return gn(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ey(e, t) {
  return Lo(Lc(e), Lc(t));
}
function Lc(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function bn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Lo(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jd(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    Yd(e),
    Yd(t ?? {})
  ) : t;
}
function Oy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = gn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = bn(e[n], t[n]);
  return r;
}
function yh() {
  return {
    app: null,
    config: {
      isNativeTag: Ep,
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
let Fy = 0;
function Ty(e, t) {
  return function(n, i = null) {
    at(n) || (n = gn({}, n)), i != null && !Et(i) && (i = null);
    const o = yh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Fy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: fb,
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
          return g.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(g, d, f), l = !0, c._container = d, d.__vue_app__ = c, xl(g.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (xr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = no;
        no = c;
        try {
          return d();
        } finally {
          no = u;
        }
      }
    };
    return c;
  };
}
let no = null;
const Dy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_n(t)}Modifiers`] || e[`${Fi(t)}Modifiers`];
function Ly(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ft;
  let i = r;
  const o = t.startsWith("update:"), s = o && Dy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Xt(d) ? d.trim() : d)), s.number && (i = r.map(Au)));
  let a, l = n[a = $l(t)] || // also try camelCase event handler (#2249)
  n[a = $l(_n(t))];
  !l && o && (l = n[a = $l(Fi(t))]), l && xr(
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
    e.emitted[a] = !0, xr(
      c,
      e,
      6,
      i
    );
  }
}
const Ry = /* @__PURE__ */ new WeakMap();
function bh(e, t, r = !1) {
  const n = r ? Ry : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = bh(c, t, !0);
      d && (a = !0, gn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Et(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : gn(s, o), Et(e) && n.set(e, s), s);
}
function wl(e, t) {
  return !e || !dl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, Fi(t)) || Mt(e, t));
}
function Zd(e) {
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
    ctx: _,
    inheritAttrs: m
  } = e, h = Fa(e);
  let w, ee;
  try {
    if (r.shapeFlag & 4) {
      const te = i || n, C = te;
      w = hr(
        c.call(
          C,
          te,
          d,
          u,
          g,
          f,
          _
        )
      ), ee = a;
    } else {
      const te = t;
      w = hr(
        te.length > 1 ? te(
          u,
          { attrs: a, slots: s, emit: l }
        ) : te(
          u,
          null
        )
      ), ee = t.props ? a : Vy(a);
    }
  } catch (te) {
    Jo.length = 0, yl(te, e, 1), w = Be(ni);
  }
  let $ = w;
  if (ee && m !== !1) {
    const te = Object.keys(ee), { shapeFlag: C } = $;
    te.length && C & 7 && (o && te.some(fl) && (ee = $y(
      ee,
      o
    )), $ = lo($, ee, !1, !0));
  }
  return r.dirs && ($ = lo($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(r.dirs) : r.dirs), r.transition && Vu($, r.transition), w = $, Fa(h), w;
}
const Vy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || dl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, $y = (e, t) => {
  const r = {};
  for (const n in e)
    (!fl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function zy(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Qd(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (vh(s, n, f) && !wl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Qd(n, s, c) : !0 : !!s;
  return !1;
}
function Qd(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (vh(t, e, o) && !wl(r, o))
      return !0;
  }
  return !1;
}
function vh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Et(n) && Et(i) ? !Cu(n, i) : n !== i;
}
function jy({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Sh = {}, wh = () => Object.create(Sh), _h = (e) => Object.getPrototypeOf(e) === Sh;
function Hy(e, t, r, n = !1) {
  const i = {}, o = wh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), xh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ X0(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Gy(e, t, r, n) {
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
        if (wl(e.emitsOptions, f))
          continue;
        const g = t[f];
        if (l)
          if (Mt(o, f))
            g !== o[f] && (o[f] = g, c = !0);
          else {
            const _ = _n(f);
            i[_] = Rc(
              l,
              a,
              _,
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
    xh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Fi(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Rc(
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
  c && Or(e.attrs, "set", "");
}
function xh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Wo(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = _n(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : wl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Ft;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Rc(
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
function Rc(e, t, r, n, i, o) {
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
          const d = ws(i);
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
    ] && (n === "" || n === Fi(r)) && (n = !0));
  }
  return n;
}
const Ky = /* @__PURE__ */ new WeakMap();
function kh(e, t, r = !1) {
  const n = r ? Ky : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, g] = kh(u, t, !0);
      gn(s, f), g && a.push(...g);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Et(e) && n.set(e, Qi), Qi;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = _n(o[d]);
      ef(u) && (s[u] = Ft);
    }
  else if (o)
    for (const d in o) {
      const u = _n(d);
      if (ef(u)) {
        const f = o[d], g = s[u] = it(f) || at(f) ? { type: f } : gn({}, f), _ = g.type;
        let m = !1, h = !0;
        if (it(_))
          for (let w = 0; w < _.length; ++w) {
            const ee = _[w], $ = at(ee) && ee.name;
            if ($ === "Boolean") {
              m = !0;
              break;
            } else $ === "String" && (h = !1);
          }
        else
          m = at(_) && _.name === "Boolean";
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
  return Et(e) && n.set(e, c), c;
}
function ef(e) {
  return e[0] !== "$" && !Wo(e);
}
const $u = (e) => e === "_" || e === "_ctx" || e === "$stable", zu = (e) => it(e) ? e.map(hr) : [hr(e)], Wy = (e, t, r) => {
  if (t._n)
    return t;
  const n = ah((...i) => zu(t(...i)), r);
  return n._c = !1, n;
}, Mh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if ($u(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = Wy(i, o, n);
    else if (o != null) {
      const s = zu(o);
      t[i] = () => s;
    }
  }
}, Ph = (e, t) => {
  const r = zu(t);
  e.slots.default = () => r;
}, Nh = (e, t, r) => {
  for (const n in t)
    (r || !$u(n)) && (e[n] = t[n]);
}, Uy = (e, t, r) => {
  const n = e.slots = wh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Nh(n, t, r), r && Lp(n, "_", i, !0)) : Mh(t, n);
  } else t && Ph(e, t);
}, By = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ft;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Nh(i, t, r) : (o = !t.$stable, Mh(t, i)), s = t;
  } else t && (Ph(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !$u(a) && s[a] == null && delete i[a];
}, En = Zy;
function Yy(e) {
  return qy(e);
}
function qy(e, t) {
  const r = ml();
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
    setScopeId: g = vr,
    insertStaticContent: _
  } = e, m = (b, y, I, v = null, V = null, L = null, J = void 0, O = null, F = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !Co(b, y) && (v = de(b), pe(b, V, L, !0), b = null), y.patchFlag === -2 && (F = !1, y.dynamicChildren = null);
    const { type: x, ref: R, shapeFlag: Z } = y;
    switch (x) {
      case _l:
        h(b, y, I, v);
        break;
      case ni:
        w(b, y, I, v);
        break;
      case Ul:
        b == null && ee(y, I, v, J);
        break;
      case Qe:
        fe(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        break;
      default:
        Z & 1 ? C(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        ) : Z & 6 ? ce(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        ) : (Z & 64 || Z & 128) && x.process(
          b,
          y,
          I,
          v,
          V,
          L,
          J,
          O,
          F,
          N
        );
    }
    R != null && V ? Yo(R, b && b.ref, L, y || b, !y) : R == null && b && b.ref != null && Yo(b.ref, null, L, b, !0);
  }, h = (b, y, I, v) => {
    if (b == null)
      n(
        y.el = a(y.children),
        I,
        v
      );
    else {
      const V = y.el = b.el;
      y.children !== b.children && c(V, y.children);
    }
  }, w = (b, y, I, v) => {
    b == null ? n(
      y.el = l(y.children || ""),
      I,
      v
    ) : y.el = b.el;
  }, ee = (b, y, I, v) => {
    [b.el, b.anchor] = _(
      b.children,
      y,
      I,
      v,
      b.el,
      b.anchor
    );
  }, $ = ({ el: b, anchor: y }, I, v) => {
    let V;
    for (; b && b !== y; )
      V = f(b), n(b, I, v), b = V;
    n(y, I, v);
  }, te = ({ el: b, anchor: y }) => {
    let I;
    for (; b && b !== y; )
      I = f(b), i(b), b = I;
    i(y);
  }, C = (b, y, I, v, V, L, J, O, F) => {
    if (y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), b == null)
      X(
        y,
        I,
        v,
        V,
        L,
        J,
        O,
        F
      );
    else {
      const x = b.el && b.el._isVueCE ? b.el : null;
      try {
        x && x._beginPatch(), ne(
          b,
          y,
          V,
          L,
          J,
          O,
          F
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, X = (b, y, I, v, V, L, J, O) => {
    let F, x;
    const { props: R, shapeFlag: Z, transition: me, dirs: ue } = b;
    if (F = b.el = s(
      b.type,
      L,
      R && R.is,
      R
    ), Z & 8 ? d(F, b.children) : Z & 16 && G(
      b.children,
      F,
      null,
      v,
      V,
      Wl(b, L),
      J,
      O
    ), ue && fi(b, null, v, "created"), z(F, b, b.scopeId, J, v), R) {
      for (const Se in R)
        Se !== "value" && !Wo(Se) && o(F, Se, null, R[Se], L, v);
      "value" in R && o(F, "value", null, R.value, L), (x = R.onVnodeBeforeMount) && ur(x, v, b);
    }
    ue && fi(b, null, v, "beforeMount");
    const ve = Xy(V, me);
    ve && me.beforeEnter(F), n(F, y, I), ((x = R && R.onVnodeMounted) || ve || ue) && En(() => {
      try {
        x && ur(x, v, b), ve && me.enter(F), ue && fi(b, null, v, "mounted");
      } finally {
      }
    }, V);
  }, z = (b, y, I, v, V) => {
    if (I && g(b, I), v)
      for (let L = 0; L < v.length; L++)
        g(b, v[L]);
    if (V) {
      let L = V.subTree;
      if (y === L || Eh(L.type) && (L.ssContent === y || L.ssFallback === y)) {
        const J = V.vnode;
        z(
          b,
          J,
          J.scopeId,
          J.slotScopeIds,
          V.parent
        );
      }
    }
  }, G = (b, y, I, v, V, L, J, O, F = 0) => {
    for (let x = F; x < b.length; x++) {
      const R = b[x] = O ? Cr(b[x]) : hr(b[x]);
      m(
        null,
        R,
        y,
        I,
        v,
        V,
        L,
        J,
        O
      );
    }
  }, ne = (b, y, I, v, V, L, J) => {
    const O = y.el = b.el;
    let { patchFlag: F, dynamicChildren: x, dirs: R } = y;
    F |= b.patchFlag & 16;
    const Z = b.props || Ft, me = y.props || Ft;
    let ue;
    if (I && pi(I, !1), (ue = me.onVnodeBeforeUpdate) && ur(ue, I, y, b), R && fi(y, b, I, "beforeUpdate"), I && pi(I, !0), (Z.innerHTML && me.innerHTML == null || Z.textContent && me.textContent == null) && d(O, ""), x ? he(
      b.dynamicChildren,
      x,
      O,
      I,
      v,
      Wl(y, V),
      L
    ) : J || A(
      b,
      y,
      O,
      null,
      I,
      v,
      Wl(y, V),
      L,
      !1
    ), F > 0) {
      if (F & 16)
        q(O, Z, me, I, V);
      else if (F & 2 && Z.class !== me.class && o(O, "class", null, me.class, V), F & 4 && o(O, "style", Z.style, me.style, V), F & 8) {
        const ve = y.dynamicProps;
        for (let Se = 0; Se < ve.length; Se++) {
          const be = ve[Se], Q = Z[be], ge = me[be];
          (ge !== Q || be === "value") && o(O, be, Q, ge, V, I);
        }
      }
      F & 1 && b.children !== y.children && d(O, y.children);
    } else !J && x == null && q(O, Z, me, I, V);
    ((ue = me.onVnodeUpdated) || R) && En(() => {
      ue && ur(ue, I, y, b), R && fi(y, b, I, "updated");
    }, v);
  }, he = (b, y, I, v, V, L, J) => {
    for (let O = 0; O < y.length; O++) {
      const F = b[O], x = y[O], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Co(F, x) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      m(
        F,
        x,
        R,
        null,
        v,
        V,
        L,
        J,
        !0
      );
    }
  }, q = (b, y, I, v, V) => {
    if (y !== I) {
      if (y !== Ft)
        for (const L in y)
          !Wo(L) && !(L in I) && o(
            b,
            L,
            y[L],
            null,
            V,
            v
          );
      for (const L in I) {
        if (Wo(L)) continue;
        const J = I[L], O = y[L];
        J !== O && L !== "value" && o(b, L, O, J, V, v);
      }
      "value" in I && o(b, "value", y.value, I.value, V);
    }
  }, fe = (b, y, I, v, V, L, J, O, F) => {
    const x = y.el = b ? b.el : a(""), R = y.anchor = b ? b.anchor : a("");
    let { patchFlag: Z, dynamicChildren: me, slotScopeIds: ue } = y;
    ue && (O = O ? O.concat(ue) : ue), b == null ? (n(x, I, v), n(R, I, v), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      I,
      R,
      V,
      L,
      J,
      O,
      F
    )) : Z > 0 && Z & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === me.length ? (he(
      b.dynamicChildren,
      me,
      I,
      V,
      L,
      J,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || V && y === V.subTree) && Ah(
      b,
      y,
      !0
      /* shallow */
    )) : A(
      b,
      y,
      I,
      R,
      V,
      L,
      J,
      O,
      F
    );
  }, ce = (b, y, I, v, V, L, J, O, F) => {
    y.slotScopeIds = O, b == null ? y.shapeFlag & 512 ? V.ctx.activate(
      y,
      I,
      v,
      J,
      F
    ) : oe(
      y,
      I,
      v,
      V,
      L,
      J,
      F
    ) : U(b, y, F);
  }, oe = (b, y, I, v, V, L, J) => {
    const O = b.component = ib(
      b,
      v,
      V
    );
    if (dh(b) && (O.ctx.renderer = N), sb(O, !1, J), O.asyncDep) {
      if (V && V.registerDep(O, E, J), !b.el) {
        const F = O.subTree = Be(ni);
        w(null, F, y, I), b.placeholder = F.el;
      }
    } else
      E(
        O,
        b,
        y,
        I,
        V,
        L,
        J
      );
  }, U = (b, y, I) => {
    const v = y.component = b.component;
    if (zy(b, y, I))
      if (v.asyncDep && !v.asyncResolved) {
        H(v, y, I);
        return;
      } else
        v.next = y, v.update();
    else
      y.el = b.el, v.vnode = y;
  }, E = (b, y, I, v, V, L, J) => {
    const O = () => {
      if (b.isMounted) {
        let { next: Z, bu: me, u: ue, parent: ve, vnode: Se } = b;
        {
          const p = Ch(b);
          if (p) {
            Z && (Z.el = Se.el, H(b, Z, J)), p.asyncDep.then(() => {
              En(() => {
                b.isUnmounted || x();
              }, V);
            });
            return;
          }
        }
        let be = Z, Q;
        pi(b, !1), Z ? (Z.el = Se.el, H(b, Z, J)) : Z = Se, me && ua(me), (Q = Z.props && Z.props.onVnodeBeforeUpdate) && ur(Q, ve, Z, Se), pi(b, !0);
        const ge = Zd(b), B = b.subTree;
        b.subTree = ge, m(
          B,
          ge,
          // parent may have changed if it's in a teleport
          u(B.el),
          // anchor may have changed if it's in a fragment
          de(B),
          b,
          V,
          L
        ), Z.el = ge.el, be === null && jy(b, ge.el), ue && En(ue, V), (Q = Z.props && Z.props.onVnodeUpdated) && En(
          () => ur(Q, ve, Z, Se),
          V
        );
      } else {
        let Z;
        const { el: me, props: ue } = y, { bm: ve, m: Se, parent: be, root: Q, type: ge } = b, B = qo(y);
        pi(b, !1), ve && ua(ve), !B && (Z = ue && ue.onVnodeBeforeMount) && ur(Z, be, y), pi(b, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            ge,
            b.parent ? b.parent.type : void 0
          );
          const p = b.subTree = Zd(b);
          m(
            null,
            p,
            I,
            v,
            b,
            V,
            L
          ), y.el = p.el;
        }
        if (Se && En(Se, V), !B && (Z = ue && ue.onVnodeMounted)) {
          const p = y;
          En(
            () => ur(Z, be, p),
            V
          );
        }
        (y.shapeFlag & 256 || be && qo(be.vnode) && be.vnode.shapeFlag & 256) && b.a && En(b.a, V), b.isMounted = !0, y = I = v = null;
      }
    };
    b.scope.on();
    const F = b.effect = new zp(O);
    b.scope.off();
    const x = b.update = F.run.bind(F), R = b.job = F.runIfDirty.bind(F);
    R.i = b, R.id = b.uid, F.scheduler = () => Ru(R), pi(b, !0), x();
  }, H = (b, y, I) => {
    y.component = b;
    const v = b.vnode.props;
    b.vnode = y, b.next = null, Gy(b, y.props, v, I), By(b, y.children, I), zr(), Kd(b), jr();
  }, A = (b, y, I, v, V, L, J, O, F = !1) => {
    const x = b && b.children, R = b ? b.shapeFlag : 0, Z = y.children, { patchFlag: me, shapeFlag: ue } = y;
    if (me > 0) {
      if (me & 128) {
        T(
          x,
          Z,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        return;
      } else if (me & 256) {
        j(
          x,
          Z,
          I,
          v,
          V,
          L,
          J,
          O,
          F
        );
        return;
      }
    }
    ue & 8 ? (R & 16 && re(x, V, L), Z !== x && d(I, Z)) : R & 16 ? ue & 16 ? T(
      x,
      Z,
      I,
      v,
      V,
      L,
      J,
      O,
      F
    ) : re(x, V, L, !0) : (R & 8 && d(I, ""), ue & 16 && G(
      Z,
      I,
      v,
      V,
      L,
      J,
      O,
      F
    ));
  }, j = (b, y, I, v, V, L, J, O, F) => {
    b = b || Qi, y = y || Qi;
    const x = b.length, R = y.length, Z = Math.min(x, R);
    let me;
    for (me = 0; me < Z; me++) {
      const ue = y[me] = F ? Cr(y[me]) : hr(y[me]);
      m(
        b[me],
        ue,
        I,
        null,
        V,
        L,
        J,
        O,
        F
      );
    }
    x > R ? re(
      b,
      V,
      L,
      !0,
      !1,
      Z
    ) : G(
      y,
      I,
      v,
      V,
      L,
      J,
      O,
      F,
      Z
    );
  }, T = (b, y, I, v, V, L, J, O, F) => {
    let x = 0;
    const R = y.length;
    let Z = b.length - 1, me = R - 1;
    for (; x <= Z && x <= me; ) {
      const ue = b[x], ve = y[x] = F ? Cr(y[x]) : hr(y[x]);
      if (Co(ue, ve))
        m(
          ue,
          ve,
          I,
          null,
          V,
          L,
          J,
          O,
          F
        );
      else
        break;
      x++;
    }
    for (; x <= Z && x <= me; ) {
      const ue = b[Z], ve = y[me] = F ? Cr(y[me]) : hr(y[me]);
      if (Co(ue, ve))
        m(
          ue,
          ve,
          I,
          null,
          V,
          L,
          J,
          O,
          F
        );
      else
        break;
      Z--, me--;
    }
    if (x > Z) {
      if (x <= me) {
        const ue = me + 1, ve = ue < R ? y[ue].el : v;
        for (; x <= me; )
          m(
            null,
            y[x] = F ? Cr(y[x]) : hr(y[x]),
            I,
            ve,
            V,
            L,
            J,
            O,
            F
          ), x++;
      }
    } else if (x > me)
      for (; x <= Z; )
        pe(b[x], V, L, !0), x++;
    else {
      const ue = x, ve = x, Se = /* @__PURE__ */ new Map();
      for (x = ve; x <= me; x++) {
        const M = y[x] = F ? Cr(y[x]) : hr(y[x]);
        M.key != null && Se.set(M.key, x);
      }
      let be, Q = 0;
      const ge = me - ve + 1;
      let B = !1, p = 0;
      const P = new Array(ge);
      for (x = 0; x < ge; x++) P[x] = 0;
      for (x = ue; x <= Z; x++) {
        const M = b[x];
        if (Q >= ge) {
          pe(M, V, L, !0);
          continue;
        }
        let W;
        if (M.key != null)
          W = Se.get(M.key);
        else
          for (be = ve; be <= me; be++)
            if (P[be - ve] === 0 && Co(M, y[be])) {
              W = be;
              break;
            }
        W === void 0 ? pe(M, V, L, !0) : (P[W - ve] = x + 1, W >= p ? p = W : B = !0, m(
          M,
          y[W],
          I,
          null,
          V,
          L,
          J,
          O,
          F
        ), Q++);
      }
      const S = B ? Jy(P) : Qi;
      for (be = S.length - 1, x = ge - 1; x >= 0; x--) {
        const M = ve + x, W = y[M], ye = y[M + 1], D = M + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ye.el || Ih(ye)
        ) : v;
        P[x] === 0 ? m(
          null,
          W,
          I,
          D,
          V,
          L,
          J,
          O,
          F
        ) : B && (be < 0 || x !== S[be] ? Y(W, I, D, 2) : be--);
      }
    }
  }, Y = (b, y, I, v, V = null) => {
    const { el: L, type: J, transition: O, children: F, shapeFlag: x } = b;
    if (x & 6) {
      Y(b.component.subTree, y, I, v);
      return;
    }
    if (x & 128) {
      b.suspense.move(y, I, v);
      return;
    }
    if (x & 64) {
      J.move(b, y, I, N);
      return;
    }
    if (J === Qe) {
      n(L, y, I);
      for (let Z = 0; Z < F.length; Z++)
        Y(F[Z], y, I, v);
      n(b.anchor, y, I);
      return;
    }
    if (J === Ul) {
      $(b, y, I);
      return;
    }
    if (v !== 2 && x & 1 && O)
      if (v === 0)
        O.beforeEnter(L), n(L, y, I), En(() => O.enter(L), V);
      else {
        const { leave: Z, delayLeave: me, afterLeave: ue } = O, ve = () => {
          b.ctx.isUnmounted ? i(L) : n(L, y, I);
        }, Se = () => {
          L._isLeaving && L[py](
            !0
            /* cancelled */
          ), Z(L, () => {
            ve(), ue && ue();
          });
        };
        me ? me(L, ve, Se) : Se();
      }
    else
      n(L, y, I);
  }, pe = (b, y, I, v = !1, V = !1) => {
    const {
      type: L,
      props: J,
      ref: O,
      children: F,
      dynamicChildren: x,
      shapeFlag: R,
      patchFlag: Z,
      dirs: me,
      cacheIndex: ue,
      memo: ve
    } = b;
    if (Z === -2 && (V = !1), O != null && (zr(), Yo(O, null, I, b, !0), jr()), ue != null && (y.renderCache[ue] = void 0), R & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const Se = R & 1 && me, be = !qo(b);
    let Q;
    if (be && (Q = J && J.onVnodeBeforeUnmount) && ur(Q, y, b), R & 6)
      k(b.component, I, v);
    else {
      if (R & 128) {
        b.suspense.unmount(I, v);
        return;
      }
      Se && fi(b, null, y, "beforeUnmount"), R & 64 ? b.type.remove(
        b,
        y,
        I,
        N,
        v
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Qe || Z > 0 && Z & 64) ? re(
        x,
        y,
        I,
        !1,
        !0
      ) : (L === Qe && Z & 384 || !V && R & 16) && re(F, y, I), v && ae(b);
    }
    const ge = ve != null && ue == null;
    (be && (Q = J && J.onVnodeUnmounted) || Se || ge) && En(() => {
      Q && ur(Q, y, b), Se && fi(b, null, y, "unmounted"), ge && (b.el = null);
    }, I);
  }, ae = (b) => {
    const { type: y, el: I, anchor: v, transition: V } = b;
    if (y === Qe) {
      K(I, v);
      return;
    }
    if (y === Ul) {
      te(b);
      return;
    }
    const L = () => {
      i(I), V && !V.persisted && V.afterLeave && V.afterLeave();
    };
    if (b.shapeFlag & 1 && V && !V.persisted) {
      const { leave: J, delayLeave: O } = V, F = () => J(I, L);
      O ? O(b.el, L, F) : F();
    } else
      L();
  }, K = (b, y) => {
    let I;
    for (; b !== y; )
      I = f(b), i(b), b = I;
    i(y);
  }, k = (b, y, I) => {
    const { bum: v, scope: V, job: L, subTree: J, um: O, m: F, a: x } = b;
    tf(F), tf(x), v && ua(v), V.stop(), L && (L.flags |= 8, pe(J, b, y, I)), O && En(O, y), En(() => {
      b.isUnmounted = !0;
    }, y);
  }, re = (b, y, I, v = !1, V = !1, L = 0) => {
    for (let J = L; J < b.length; J++)
      pe(b[J], y, I, v, V);
  }, de = (b) => {
    if (b.shapeFlag & 6)
      return de(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), I = y && y[dy];
    return I ? f(I) : y;
  };
  let we = !1;
  const _e = (b, y, I) => {
    let v;
    b == null ? y._vnode && (pe(y._vnode, null, null, !0), v = y._vnode.component) : m(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      I
    ), y._vnode = b, we || (we = !0, Kd(v), ih(), we = !1);
  }, N = {
    p: m,
    um: pe,
    m: Y,
    r: ae,
    mt: oe,
    mc: G,
    pc: A,
    pbc: he,
    n: de,
    o: e
  };
  return {
    render: _e,
    hydrate: void 0,
    createApp: Ty(_e)
  };
}
function Wl({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function pi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Xy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ah(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Cr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Ah(s, a)), a.type === _l && (a.patchFlag === -1 && (a = i[o] = Cr(a)), a.el = s.el), a.type === ni && !a.el && (a.el = s.el);
    }
}
function Jy(e) {
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
function Ch(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ch(t);
}
function tf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ih(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ih(t.subTree) : null;
}
const Eh = (e) => e.__isSuspense;
function Zy(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : sy(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), _l = /* @__PURE__ */ Symbol.for("v-txt"), ni = /* @__PURE__ */ Symbol.for("v-cmt"), Ul = /* @__PURE__ */ Symbol.for("v-stc"), Jo = [];
let jn = null;
function Te(e = !1) {
  Jo.push(jn = e ? null : []);
}
function Qy() {
  Jo.pop(), jn = Jo[Jo.length - 1] || null;
}
let is = 1;
function nf(e, t = !1) {
  is += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function Oh(e) {
  return e.dynamicChildren = is > 0 ? jn || Qi : null, Qy(), is > 0 && jn && jn.push(e), e;
}
function De(e, t, r, n, i, o) {
  return Oh(
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
function Gn(e, t, r, n, i) {
  return Oh(
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
function Fh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Co(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Th = ({ key: e }) => e ?? null, fa = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Xt(e) || /* @__PURE__ */ mn(e) || at(e) ? { i: zn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Qe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Th(t),
    ref: t && fa(t),
    scopeId: sh,
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
    ctx: zn
  };
  return a ? (ju(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Xt(r) ? 8 : 16), is > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  jn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && jn.push(l), l;
}
const Be = eb;
function eb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === hh) && (e = ni), Fh(e)) {
    const a = lo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && ju(a, r), is > 0 && !o && jn && (a.shapeFlag & 6 ? jn[jn.indexOf(e)] = a : jn.push(a)), a.patchFlag = -2, a;
  }
  if (db(e) && (e = e.__vccOpts), t) {
    t = tb(t);
    let { class: a, style: l } = t;
    a && !Xt(a) && (t.class = gt(a)), Et(l) && (/* @__PURE__ */ Lu(l) && !it(l) && (l = gn({}, l)), t.style = It(l));
  }
  const s = Xt(e) ? 1 : Eh(e) ? 128 : fy(e) ? 64 : Et(e) ? 4 : at(e) ? 2 : 0;
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
function tb(e) {
  return e ? /* @__PURE__ */ Lu(e) || _h(e) ? gn({}, e) : e : null;
}
function lo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Ir(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Th(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(fa(t)) : [o, fa(t)] : fa(t)
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
    patchFlag: t && e.type !== Qe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && lo(e.ssContent),
    ssFallback: e.ssFallback && lo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Vu(
    d,
    l.clone(d)
  ), d;
}
function Ro(e = " ", t = 0) {
  return Be(_l, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? (Te(), Gn(ni, null, e)) : Be(ni, null, e);
}
function hr(e) {
  return e == null || typeof e == "boolean" ? Be(ni) : it(e) ? Be(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fh(e) ? Cr(e) : Be(_l, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lo(e);
}
function ju(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ju(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !_h(t) ? t._ctx = zn : i === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: zn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ro(t)]) : r = 8);
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
        t.style = It([t.style, n.style]);
      else if (dl(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !fl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ur(e, t, r, n = null) {
  xr(e, t, 7, [
    r,
    n
  ]);
}
const nb = yh();
let rb = 0;
function ib(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || nb, o = {
    uid: rb++,
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
    scope: new I0(
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
    propsOptions: kh(n, i),
    emitsOptions: bh(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ly.bind(null, o), e.ce && e.ce(o), o;
}
let fn = null;
const ob = () => fn || zn;
let La, Vc;
{
  const e = ml(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  La = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => fn = r
  ), Vc = t(
    "__VUE_SSR_SETTERS__",
    (r) => os = r
  );
}
const ws = (e) => {
  const t = fn;
  return La(e), e.scope.on(), () => {
    e.scope.off(), La(t);
  };
}, rf = () => {
  fn && fn.scope.off(), La(null);
};
function Dh(e) {
  return e.vnode.shapeFlag & 4;
}
let os = !1;
function sb(e, t = !1, r = !1) {
  t && Vc(t);
  const { props: n, children: i } = e.vnode, o = Dh(e);
  Hy(e, n, o, t), Uy(e, i, r || t);
  const s = o ? ab(e, t) : void 0;
  return t && Vc(!1), s;
}
function ab(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ny);
  const { setup: n } = r;
  if (n) {
    zr();
    const i = e.setupContext = n.length > 1 ? cb(e) : null, o = ws(e), s = vs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Fp(s);
    if (jr(), o(), (a || e.sp) && !qo(e) && uh(e), a) {
      if (s.then(rf, rf), t)
        return s.then((l) => {
          of(e, l);
        }).catch((l) => {
          yl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      of(e, s);
  } else
    Lh(e);
}
function of(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = th(t)), Lh(e);
}
function Lh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || vr);
  {
    const i = ws(e);
    zr();
    try {
      Ay(e);
    } finally {
      jr(), i();
    }
  }
}
const lb = {
  get(e, t) {
    return dn(e, "get", ""), e[t];
  }
};
function cb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, lb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(th(J0(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Xo)
        return Xo[r](e);
    },
    has(t, r) {
      return r in t || r in Xo;
    }
  })) : e.proxy;
}
function ub(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function db(e) {
  return at(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ ty(e, t, os), fb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $c;
const sf = typeof window < "u" && window.trustedTypes;
if (sf)
  try {
    $c = /* @__PURE__ */ sf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Rh = $c ? (e) => $c.createHTML(e) : (e) => e, pb = "http://www.w3.org/2000/svg", hb = "http://www.w3.org/1998/Math/MathML", Ar = typeof document < "u" ? document : null, af = Ar && /* @__PURE__ */ Ar.createElement("template"), mb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ar.createElementNS(pb, e) : t === "mathml" ? Ar.createElementNS(hb, e) : r ? Ar.createElement(e, { is: r }) : Ar.createElement(e);
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
      af.innerHTML = Rh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = af.content;
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
}, gb = /* @__PURE__ */ Symbol("_vtc");
function yb(e, t, r) {
  const n = e[gb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ra = /* @__PURE__ */ Symbol("_vod"), Vh = /* @__PURE__ */ Symbol("_vsh"), Ci = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ra] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Io(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Io(e, !0), n.enter(e)) : n.leave(e, () => {
      Io(e, !1);
    }) : Io(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Io(e, t);
  }
};
function Io(e, t) {
  e.style.display = t ? e[Ra] : "none", e[Vh] = !t;
}
const bb = /* @__PURE__ */ Symbol(""), vb = /(?:^|;)\s*display\s*:/;
function Sb(e, t, r) {
  const n = e.style, i = Xt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Xt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && pa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && pa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), pa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[bb];
      s && (r += ";" + s), n.cssText = r, o = vb.test(r);
    }
  } else t && e.removeAttribute("style");
  Ra in e && (e[Ra] = o ? n.display : "", e[Vh] && (n.display = "none"));
}
const lf = /\s*!important$/;
function pa(e, t, r) {
  if (it(r))
    r.forEach((n) => pa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = wb(e, t);
    lf.test(r) ? e.setProperty(
      Fi(n),
      r.replace(lf, ""),
      "important"
    ) : e[n] = r;
  }
}
const cf = ["Webkit", "Moz", "ms"], Bl = {};
function wb(e, t) {
  const r = Bl[t];
  if (r)
    return r;
  let n = _n(t);
  if (n !== "filter" && n in e)
    return Bl[t] = n;
  n = hl(n);
  for (let i = 0; i < cf.length; i++) {
    const o = cf[i] + n;
    if (o in e)
      return Bl[t] = o;
  }
  return t;
}
const uf = "http://www.w3.org/1999/xlink";
function df(e, t, r, n, i, o = A0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(uf, t.slice(6, t.length)) : e.setAttributeNS(uf, t, r) : r == null || o && !Rp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : _r(r) ? String(r) : r
  );
}
function ff(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Rh(r) : r);
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
    a === "boolean" ? r = Rp(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Wi(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function _b(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const pf = /* @__PURE__ */ Symbol("_vei");
function xb(e, t, r, n, i = null) {
  const o = e[pf] || (e[pf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = kb(t);
    if (n) {
      const c = o[t] = Nb(
        n,
        i
      );
      Wi(e, a, c, l);
    } else s && (_b(e, a, s, l), o[t] = void 0);
  }
}
const hf = /(?:Once|Passive|Capture)$/;
function kb(e) {
  let t;
  if (hf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(hf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Fi(e.slice(2)), t];
}
let Yl = 0;
const Mb = /* @__PURE__ */ Promise.resolve(), Pb = () => Yl || (Mb.then(() => Yl = 0), Yl = Date.now());
function Nb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    xr(
      Ab(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Pb(), r;
}
function Ab(e, t) {
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
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? yb(e, n, s) : t === "style" ? Sb(e, r, n) : dl(t) ? fl(t) || xb(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ib(e, t, n, s)) ? (ff(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && df(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Eb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Xt(n))) ? ff(e, _n(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), df(e, t, n, s));
};
function Ib(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && at(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return mf(t) && Xt(r) ? !1 : t in e;
}
function Eb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = _n(t);
  return Array.isArray(r) ? r.some((i) => _n(i) === n) : Object.keys(r).some((i) => _n(i) === n);
}
const gf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => ua(t, r) : t;
};
function Ob(e) {
  e.target.composing = !0;
}
function yf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ql = /* @__PURE__ */ Symbol("_assign");
function bf(e, t, r) {
  return t && (e = e.trim()), r && (e = Au(e)), e;
}
const vf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[ql] = gf(i);
    const o = n || i.props && i.props.type === "number";
    Wi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ql](bf(e.value, r, o));
    }), (r || o) && Wi(e, "change", () => {
      e.value = bf(e.value, r, o);
    }), t || (Wi(e, "compositionstart", Ob), Wi(e, "compositionend", yf), Wi(e, "change", yf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[ql] = gf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Au(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Fb = ["ctrl", "shift", "alt", "meta"], Tb = {
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
  exact: (e, t) => Fb.some((r) => e[`${r}Key`] && !t.includes(r))
}, At = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Tb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Db = /* @__PURE__ */ gn({ patchProp: Cb }, mb);
let Sf;
function Lb() {
  return Sf || (Sf = Yy(Db));
}
const Hu = ((...e) => {
  const t = Lb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Vb(n);
    if (!i) return;
    const o = t._component;
    !at(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Rb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Rb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Vb(e) {
  return Xt(e) ? document.querySelector(e) : e;
}
const $b = "PanoramaSuite.Debug.Diagnostics", zb = "PanoramaSuite.Debug.ExportDiagnostics", Xl = "pano_suite.diagnostics.v1", wf = "pano_suite.diagnostics.previous.v1", jb = 300, Hb = 2e5, Gb = 100, Kb = 20, Wb = 1e3, Ub = 2, qs = 1024 * 1024;
function Xr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function Bb() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Yb() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Bb,
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
function qb(e = {}) {
  const t = { ...Yb(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, g = { created: 0, collected: 0 }, _ = t.FinalizationRegistry ? new t.FinalizationRegistry((N) => {
    d.delete(N), f.collected += 1;
  }) : null, m = t.FinalizationRegistry ? new t.FinalizationRegistry((N) => {
    u.delete(N), g.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), w = { created: 0, lost: 0, restored: 0, disposed: 0 }, ee = [], $ = /* @__PURE__ */ new Map();
  let te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const z = [];
  function G(N, le, b = void 0) {
    ee.push(b === void 0 ? { t: t.clock(), type: N, label: le } : { t: t.clock(), type: N, label: le, detail: b }), ee.length > Gb && ee.shift();
  }
  function ne(N, le, b, y, I) {
    if (!r || !y || !t.WeakRef) return y;
    const v = { ref: new t.WeakRef(y), label: I };
    return N.add(v), le == null || le.register(y, v), b.created += 1, y;
  }
  function he(N, le = "") {
    return ne(d, _, f, N, le);
  }
  function q(N, le = "") {
    return ne(u, m, g, N, le);
  }
  function fe({ label: N = "", width: le, height: b, offscreen: y = !1 } = {}) {
    const I = globalThis.OffscreenCanvas;
    let v;
    return y && typeof I < "u" ? v = new I(le, b) : (v = t.document().createElement("canvas"), le !== void 0 && b !== void 0 && (v.width = le, v.height = b)), he(v, N);
  }
  function ce(N) {
    N.width = 0, N.height = 0, r && (f.released += 1);
  }
  function oe(N = t.document(), le = "") {
    var b;
    return q(((b = N == null ? void 0 : N.createElement) == null ? void 0 : b.call(N, "video")) || null, le);
  }
  function U(N, le) {
    if (!r || !N) return () => {
    };
    const b = { label: le, lost: !1, disposed: !1 };
    h.add(b), w.created += 1, G("webgl-created", le);
    const y = () => {
      b.disposed || (b.lost = !0, w.lost += 1, G("webglcontextlost", le));
    }, I = () => {
      b.disposed || (b.lost = !1, w.restored += 1, G("webglcontextrestored", le));
    };
    return N.addEventListener("webglcontextlost", y), N.addEventListener("webglcontextrestored", I), () => {
      b.disposed || (b.disposed = !0, h.delete(b), w.disposed += 1, G("webgl-disposed", le));
    };
  }
  function E(N, le) {
    return $.set(N, le), () => {
      $.get(N) === le && $.delete(N);
    };
  }
  function H() {
    return r ? t.now() : -1;
  }
  function A(N) {
    if (N < 0 || !r) return;
    const le = t.now() - N;
    te.count += 1, te.maxMs = Math.max(te.maxMs, le);
  }
  function j(N, le) {
    if (le < 0 || !r) return;
    const b = t.now() - le, y = C.get(N) ?? { count: 0, maxMs: 0 };
    y.count += 1, y.maxMs = Math.max(y.maxMs, b), C.set(N, y);
  }
  function T() {
    let N = 0, le = 0, b = 0, y = [0, 0];
    const I = {};
    for (const v of d) {
      const V = v.ref.deref();
      if (!V) continue;
      N += 1;
      const L = V.width * V.height;
      L > 0 && (le += 1), b += L, L > y[0] * y[1] && (y = [V.width, V.height]);
      const J = I[v.label] ?? (I[v.label] = [0, 0]);
      J[0] += 1, J[1] += L;
    }
    return { ...f, alive: N, sized: le, pixels: b, mb: Xr(b * 4 / qs, 1), largest: y, byLabel: I };
  }
  function Y() {
    const N = [];
    let le = 0, b = 0;
    for (const y of u) {
      const I = y.ref.deref();
      if (!I) continue;
      le += 1;
      const v = !I.paused && !I.ended;
      v && (b += 1), N.length < Kb && N.push({
        label: y.label,
        playing: v,
        src: !!(I.currentSrc || I.src),
        size: [I.videoWidth || 0, I.videoHeight || 0],
        ready: I.readyState ?? 0,
        connected: !!I.isConnected
      });
    }
    return { ...g, alive: le, playing: b, list: N };
  }
  function pe() {
    const N = t.now(), le = t.memory(), b = {
      t: t.clock(),
      heap: le ? { used: Xr(le.usedJSHeapSize / qs, 1), total: Xr(le.totalJSHeapSize / qs, 1), limit: Xr(le.jsHeapSizeLimit / qs, 1) } : null,
      canvas: T(),
      webgl: { ...w, alive: [...h].filter((y) => !y.lost).length },
      video: Y(),
      frame: { count: te.count, maxMs: Xr(te.maxMs), longTasks: X.count, longTaskMaxMs: Xr(X.maxMs) },
      renders: Object.fromEntries([...C].map(([y, I]) => [y, { count: I.count, maxMs: Xr(I.maxMs) }])),
      sources: Object.fromEntries([...$].map(([y, I]) => [y, I()])),
      costMs: Xr(c, 3)
    };
    return te = { count: 0, maxMs: 0 }, C = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, z.push({ record: b, text: JSON.stringify(b) }), z.length > jb && z.shift(), l += 1, l % Ub === 0 && K(), c = t.now() - N, b;
  }
  function ae(N = Hb) {
    const le = JSON.stringify({ ...o, events: ee }).slice(0, -1);
    let b = N - le.length - 14, y = z.length;
    for (; y > 0 && b - z[y - 1].text.length - 1 >= 0; )
      y -= 1, b -= z[y].text.length + 1;
    return `${le},"records":[${z.slice(y).map((I) => I.text).join(",")}]}`;
  }
  function K() {
    if (!o) return;
    const N = t.storage();
    if (N) {
      o.savedAt = t.clock();
      try {
        N.setItem(Xl, ae());
      } catch {
      }
    }
  }
  function k() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", K();
  }
  function re() {
    var I;
    if (n) return i;
    n = !0;
    const N = t.storage();
    if (!N) return null;
    let le = null;
    try {
      if (le = N.getItem(Xl), le === null) {
        const v = N.getItem(wf);
        return i = v === null ? null : JSON.parse(v), i;
      }
      N.setItem(wf, le), N.removeItem(Xl), i = JSON.parse(le);
    } catch {
      return i;
    }
    const b = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], y = b.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${b.length} records kept. Its last records:`,
      JSON.stringify(y)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((I = b.at(-1)) == null ? void 0 : I.t) || 0).toISOString()}; ${b.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(y)
    ), i;
  }
  function de(N) {
    const le = N === !0;
    if (re(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, z.length = 0, a = t.observeLongTasks((b) => {
          for (const y of b)
            X.count += 1, X.maxMs = Math.max(X.maxMs, y.duration);
        }), t.addUnload(k), s = t.setInterval(pe, Wb), K();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(k), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", K();
    }
  }
  function we() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...ee], records: z.map((N) => N.record) } : null,
      previous: i
    };
  }
  function _e() {
    const N = t.document(), le = new Blob([JSON.stringify(we(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(le), y = N.createElement("a");
    y.href = b, y.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, y.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: fe,
    releaseCanvas: ce,
    trackCanvas: he,
    createVideo: oe,
    trackVideo: q,
    watchContext: U,
    addSource: E,
    frameStart: H,
    frameEnd: A,
    renderEnd: j,
    sample: pe,
    serialize: ae,
    recoverPrevious: re,
    setEnabled: de,
    exportData: we,
    download: _e
  };
}
const Dn = qb(), rn = Dn.createCanvas, ss = Dn.releaseCanvas, Jl = Dn.trackCanvas, _s = Dn.createVideo, _f = Dn.trackVideo, Xb = Dn.addSource, Jb = Dn.frameStart, Zb = Dn.frameEnd;
function $h(e, t) {
  const r = Dn.watchContext(e.canvas, t), n = Dn.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Dn.frameStart(), l = o(s);
    return Dn.renderEnd(t, a), l;
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
const Qb = {
  id: $b,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Dn.setEnabled(e === !0)
}, xf = {
  id: zb,
  label: "Export Panorama Suite diagnostics",
  function: () => Dn.download()
};
function Ui(e, t) {
  const r = rn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function e1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function kf(e, t = 8) {
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
function Gu(e, t) {
  return rn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Qr(e, t, r) {
  if (!e) return Ui(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Zl = null, Ql = null, Mf = null, Pf = null, Wt = null, Eo = null;
function t1() {
  if (Ql) return Ql;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), Ql = r, r;
}
function ec(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  Zl = Qr(Zl, r, n);
  const i = Zl;
  Ut(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Pf !== i.ctx && (Mf = i.ctx.createPattern(t1(), "repeat"), Pf = i.ctx), i.ctx.fillStyle = Mf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function n1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function r1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function i1(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function o1(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Ku = 128;
function s1(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if ($t.has(l)) {
    const ee = $t.get(l);
    return $t.delete(l), $t.set(l, ee), ee;
  }
  $t.size >= Ku && $t.delete($t.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Gu(c, c), f = u.getContext("2d"), g = a * s, _ = s + 1, m = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, w = f.createRadialGradient(d, d, g, d, d, _);
  return w.addColorStop(0, m), w.addColorStop(1, h), f.fillStyle = w, f.fillRect(0, 0, c, c), $t.set(l, u), u;
}
function a1(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), g = Math.max(0, i), _ = Math.max(0, Math.min(0.99, o)), m = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${g.toFixed(2)}:${_.toFixed(2)}:${m.toFixed(2)}`;
  if ($t.has(h)) {
    const G = $t.get(h);
    return $t.delete(h), $t.set(h, G), G;
  }
  $t.size >= Ku && $t.delete($t.keys().next().value);
  const w = Gu(u, f), ee = w.getContext("2d"), $ = ee.createImageData(u, f), te = $.data, C = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), z = 1 + g;
  for (let G = 0; G < f; G++)
    for (let ne = 0; ne < u; ne++) {
      const he = ne + 0.5 - e, q = G + 0.5 - t, fe = Math.max(Math.abs(he) - C, 0), oe = Math.hypot(fe, q) / t;
      if (oe >= 1) continue;
      const U = oe <= X ? 1 : Math.max(0, (1 - oe) / Math.max(1e-4, 1 - X)), E = 1 - oe, H = 1 + g * (1 - E) * (1 - E), A = 1 - _ * E * E, j = H * A / z;
      let T = 1;
      if (m > 0) {
        const ae = Math.floor((q + t) / 1.5), K = Math.floor((he + e) / 8), k = Pi(ro(ae * 41 + 500, K * 19 + 300));
        T = 1 - m * 0.42 * k;
      }
      const Y = Math.round(255 * Math.min(1, d * U * j * T));
      if (Y <= 0) continue;
      const pe = (G * u + ne) * 4;
      te[pe] = a, te[pe + 1] = l, te[pe + 2] = c, te[pe + 3] = Y;
    }
  return ee.putImageData($, 0, 0), $t.set(h, w), w;
}
function ro(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Pi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function l1(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Pi(ro(e * 17 + 3, t * 13 + 7)), g = u + o * 0.22 * (f - 0.5);
  if (g >= 1) return 0;
  const _ = g <= i ? 1 : Math.max(0, (1 - g) / Math.max(1e-4, 1 - i)), m = c1(e, t, a, l, r, n), h = o * 0.55;
  if (m < h) return 0;
  const ee = 0.45 + 0.55 * ((m - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * _ * ee));
}
function c1(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Pi(ro(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Pi(ro(c * 23 + 800, d * 29 + 500)), f = Pi(ro(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function u1(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if ($t.has(f)) {
    const ee = $t.get(f);
    return $t.delete(f), $t.set(f, ee), ee;
  }
  $t.size >= Ku && $t.delete($t.keys().next().value);
  const g = Gu(c, d), _ = g.getContext("2d"), m = _.createImageData(c, d), h = m.data, w = Math.max(0, Math.min(1, r));
  for (let ee = 0; ee < d; ee++)
    for (let $ = 0; $ < c; $++) {
      const te = l1($, ee, e, t, w, u, l);
      if (te <= 0) continue;
      const C = (ee * c + $) * 4;
      h[C] = o, h[C + 1] = s, h[C + 2] = a, h[C + 3] = te;
    }
  return _.putImageData(m, 0, 0), $t.set(f, g), g;
}
function zh(e, t, r) {
  var m, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = i1(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = d1(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((m = t == null ? void 0 : t.angle) == null ? void 0 : m.value) ?? 0), c = o1(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, g = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let _;
  if (n === "chisel") {
    const w = i * a, ee = i, $ = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), te = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    _ = a1(w, ee, o, s, $, te, C);
  } else if (n === "crayon") {
    const w = i * a, ee = i, $ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    _ = u1(w, ee, o, s, $);
  } else
    _ = s1(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: _, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: g, latitudeCorrection: u };
}
function d1(e) {
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
function f1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Nf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function Wu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = ro(t, r);
    for (let g = 0; g < d; g++) {
      const _ = Pi(f + g * 2) * Math.PI * 2, m = Math.sqrt(Pi(f + g * 2 + 1)) * u, h = t + Math.cos(_) * m, w = r + Math.sin(_) * m, ee = Math.max(0.5, e.radiusPx * i * 0.48), $ = (0.5 - w / Math.max(1, e.desc.height)) * Math.PI, te = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, C = ee * e.aspect * te;
      Nf(e, h, w, ee, C);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Nf(e, t, r, o, l);
}
function Af(e, t, r) {
  const n = r1(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = zh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let g = Number(n[f].u || 0) * i;
    const _ = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(g - a[f - 1].x) > i * 0.5 && (g += g < a[f - 1].x ? i : -i), a.push({ x: g, y: _ });
  }
  if (Wu(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const g = a[f], _ = { x: (c.x + g.x) * 0.5, y: (c.y + g.y) * 0.5 };
    f === 1 ? u = as(s, d.x, d.y, _.x, _.y, u) : u = Va(s, l, d, _, g, u), l = c, c = g, d = _;
  }
  a.length === 2 ? as(s, d.x, d.y, c.x, c.y, u) : Va(s, l, d, c, c, u), e.restore();
}
function ha(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = f1(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const g = n1(n[f]);
    let _ = Number(g.x || 0) * i;
    f > 0 && Math.abs(_ - a[f - 1].x) > i * 0.5 && (_ += _ < a[f - 1].x ? i : -i), a.push({ x: _, y: Number(g.y || 0) * o }), _ < l && (l = _), _ > c && (c = _);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let g = 1; g < a.length; g++) e.lineTo(a[g].x + f, a[g].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function Xs(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    ha(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Af(e, t, r) : (Eo = Qr(Eo, r.width, r.height), Ut(Eo), Af(Eo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Eo.canvas, 0, 0), e.restore());
}
function hi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function as(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Wu(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Va(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, g = f + c, _ = f - u, m = 16;
  let h = o, w = r.x, ee = r.y;
  for (let $ = 1; $ <= m; $++) {
    const te = u + _ * $ / m, C = ((u - te) * t.x + (te - d) * r.x) / (u - d), X = ((u - te) * t.y + (te - d) * r.y) / (u - d), z = ((f - te) * r.x + (te - u) * n.x) / (f - u), G = ((f - te) * r.y + (te - u) * n.y) / (f - u), ne = ((g - te) * n.x + (te - f) * i.x) / (g - f), he = ((g - te) * n.y + (te - f) * i.y) / (g - f), q = ((f - te) * C + (te - d) * z) / (f - d), fe = ((f - te) * X + (te - d) * G) / (f - d), ce = ((g - te) * z + (te - u) * ne) / (g - u), oe = ((g - te) * G + (te - u) * he) / (g - u), U = ((f - te) * q + (te - u) * ce) / (f - u), E = ((f - te) * fe + (te - u) * oe) / (f - u);
    h = as(e, w, ee, U, E, h), w = U, ee = E;
  }
  return h;
}
function p1(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const g = zh(i, n, o), _ = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), m = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", w = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Wu(g, c, a, 1), e.activeStroke = {
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
      strokeOpacity: _,
      velocityWidthFactor: m,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: w,
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
  l.pointCount === 1 ? l.distSinceStamp = as(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Va(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function kl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Ui(t, r), s = {
    descriptor: n,
    committedMask: Ui(t, r),
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
    committedPaint: Ui(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Ui(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let g = null;
  function _(ce) {
    return {
      actionGroupId: ce,
      descriptor: n,
      committedPaint: Ui(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function m(ce) {
    let oe = i.get(ce);
    return oe || (oe = _(ce), i.set(ce, oe)), oe;
  }
  function h(ce) {
    return d === "mask" ? s : c ? m(c) : a;
  }
  function w(ce) {
    var j;
    const oe = !u || u.length !== ce.length || ce.some((T, Y) => T !== u[Y]), U = d === "paint" && ((j = c ? i.get(c) : a) == null ? void 0 : j.activeStroke) || null;
    let E = s.displayDirty || a.displayDirty || oe;
    for (const T of ce) {
      const Y = i.get(T);
      if (Y != null && Y.displayDirty) {
        E = !0;
        break;
      }
    }
    if (U && (E = !0), !E) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const T of ce) {
      const Y = i.get(T);
      Y && (Y.displayDirty = !1);
    }
    u = [...ce];
    const H = l.ctx;
    Ut(l);
    const A = !!(U != null && U.isEraser);
    for (const T of ce) {
      const Y = i.get(T);
      if (!Y) continue;
      const ae = c === Y.actionGroupId && d === "paint" ? Y.activeStroke : null;
      if (A)
        Wt = Qr(Wt, t, r), Ut(Wt), Wt.ctx.drawImage(Y.committedPaint.canvas, 0, 0), hi(Wt.ctx, o.canvas), H.drawImage(Wt.canvas, 0, 0);
      else if (H.drawImage(Y.committedPaint.canvas, 0, 0), ae) {
        const K = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ae.strokeOpacity ?? 1));
        H.save(), H.globalAlpha = K, H.drawImage(o.canvas, 0, 0), H.restore();
      }
    }
  }
  function ee(ce) {
    var U, E, H, A, j;
    for (const T of i.values())
      Ut(T.committedPaint), Ut(T.currentStroke), T.activeStroke = null, cn(T);
    Ut(s.committedMask), Ut(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const oe = [
      ...Array.isArray((E = (U = ce == null ? void 0 : ce.painting) == null ? void 0 : U.paint) == null ? void 0 : E.strokes) ? ce.painting.paint.strokes : [],
      ...Array.isArray((A = (H = ce == null ? void 0 : ce.painting) == null ? void 0 : H.mask) == null ? void 0 : A.strokes) ? ce.painting.mask.strokes : []
    ];
    for (const T of oe) {
      if (((j = T == null ? void 0 : T.targetSpace) == null ? void 0 : j.kind) !== "ERP_GLOBAL") continue;
      const Y = String((T == null ? void 0 : T.layerKind) || "paint"), ae = String((T == null ? void 0 : T.toolKind) || "pen") === "eraser";
      if (Y === "mask") {
        const K = s.descriptor;
        ae ? (Wt = Qr(Wt, K.width, K.height), Ut(Wt), Xs(Wt.ctx, T, K), hi(s.committedMask.ctx, Wt.canvas)) : (Xs(s.committedMask.ctx, T, K), s.painted = !0);
        continue;
      }
      if (ae) {
        Wt = Qr(Wt, n.width, n.height), Ut(Wt), Xs(Wt.ctx, T, n);
        for (const K of i.values())
          hi(K.committedPaint.ctx, Wt.canvas), cn(K);
      } else {
        const K = String((T == null ? void 0 : T.actionGroupId) || "__default__"), k = m(K), re = k.descriptor;
        Xs(k.committedPaint.ctx, T, re), cn(k);
      }
    }
    w([...i.keys()]);
  }
  function $(ce, oe) {
    d = String((ce == null ? void 0 : ce.layerKind) || "");
    const U = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Ut(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const E = U ? a : m(String((ce == null ? void 0 : ce.actionGroupId) || "__default__"));
      c = U ? "" : String((ce == null ? void 0 : ce.actionGroupId) || "__default__"), Ut(E.currentStroke), E.activeStroke = null, cn(E);
    }
  }
  function te(ce, oe) {
    var Y;
    const U = String((ce == null ? void 0 : ce.layerKind) || "paint"), E = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", H = U === "mask" ? s : E ? a : m(String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__")), A = H.activeStroke, j = H.descriptor;
    if (A && A.pointCount > 1) {
      const pe = H.currentStroke.ctx;
      pe.globalCompositeOperation = "source-over";
      const ae = {
        ctx: pe,
        stampTex: A.stampTex,
        radiusPx: A.radiusPx,
        spacingPx: A.spacingPx,
        desc: j,
        aspect: A.aspect,
        angle: A.angle,
        stampKind: A.stampKind,
        scatter: A.scatter,
        latitudeCorrection: A.latitudeCorrection
      };
      A.pointCount === 2 ? as(ae, A.lastMidX, A.lastMidY, A.prev.x, A.prev.y, A.distSinceStamp) : Va(ae, A.pprev, { x: A.lastMidX, y: A.lastMidY }, A.prev, A.prev, A.distSinceStamp);
    }
    H.lassoPreviewActive && (Ut(H.currentStroke), ha(H.currentStroke.ctx, ce, j), H.lassoPreviewActive = !1);
    const T = U === "mask" ? s.committedMask : H.committedPaint;
    if (E && U === "paint")
      for (const pe of i.values())
        hi(pe.committedPaint.ctx, H.currentStroke.canvas), cn(pe);
    else if (E)
      hi(T.ctx, H.currentStroke.canvas);
    else {
      U === "mask" && (s.painted = !0);
      const pe = Math.max(0, Math.min(1, (A == null ? void 0 : A.strokeOpacity) ?? 1));
      T.ctx.save(), T.ctx.globalAlpha = pe, T.ctx.drawImage(H.currentStroke.canvas, 0, 0), T.ctx.restore();
    }
    e1() && (String((ce == null ? void 0 : ce.toolKind) || ""), String((j == null ? void 0 : j.kind) || ""), Number((j == null ? void 0 : j.width) || 0), Number((j == null ? void 0 : j.height) || 0), String(((Y = ce == null ? void 0 : ce.targetSpace) == null ? void 0 : Y.viewMode) || ""), Number((ce == null ? void 0 : ce.aspect) ?? 1), kf(H.currentStroke.canvas), kf(T.canvas), void 0), Ut(H.currentStroke), H.activeStroke = null, cn(H), f.clear(), c = null, d = "", w([...i.keys()]);
  }
  function C(ce) {
    if (d === "mask")
      Ut(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Ut(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const oe = i.get(c);
      oe && (Ut(oe.currentStroke), oe.activeStroke = null, oe.lassoPreviewActive = !1, cn(oe));
    }
    f.clear(), c = null, d = "", w([...i.keys()]);
  }
  function X(ce, oe) {
    var E;
    if (d = String((ce == null ? void 0 : ce.layerKind) || ""), String(((E = ce == null ? void 0 : ce.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Ut(s.currentStroke), ha(s.currentStroke.ctx, ce, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const H = String((ce == null ? void 0 : ce.toolKind) || "") === "eraser", A = H ? a : m(String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__"));
        c = H ? "" : String((ce == null ? void 0 : ce.actionGroupId) || c || "__default__"), Ut(A.currentStroke), ha(A.currentStroke.ctx, ce, A.descriptor), A.lassoPreviewActive = !0, cn(A);
      }
      w([...i.keys()]);
    }
  }
  function z(ce) {
    return w(ce ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function G(ce) {
    return i.get(String(ce)) ?? null;
  }
  function ne() {
    return [...i.keys()];
  }
  function he(ce) {
    var pe;
    const oe = i.get(String(ce));
    if (!oe) return null;
    const U = d === "paint" && c === oe.actionGroupId, E = d === "paint" && ((pe = c ? i.get(c) : a) == null ? void 0 : pe.activeStroke) || null, H = !!(E != null && E.isEraser), A = U ? oe.activeStroke : null;
    if (!H && !A) return oe.committedPaint.canvas;
    const j = `${oe.revision}:${a.revision}:${H}`, T = f.get(oe.actionGroupId);
    if ((T == null ? void 0 : T.key) === j) return T.surface.canvas;
    const Y = Qr((T == null ? void 0 : T.surface) ?? null, t, r);
    return Ut(Y), Y.ctx.drawImage(oe.committedPaint.canvas, 0, 0), H ? hi(Y.ctx, o.canvas) : (Y.ctx.save(), Y.ctx.globalAlpha = oe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, A.strokeOpacity ?? 1)), Y.ctx.drawImage(o.canvas, 0, 0), Y.ctx.restore()), f.set(oe.actionGroupId, { key: j, surface: Y }), Y.canvas;
  }
  function q() {
    const ce = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ce || ce.isEraser) ? null : `${s.revision}:${!!ce}`;
  }
  function fe() {
    const ce = q();
    if (ce === null)
      return g = null, null;
    if ((g == null ? void 0 : g.key) === ce) return g.surface.canvas;
    const oe = Qr((g == null ? void 0 : g.surface) ?? null, t, r);
    Ut(oe);
    const U = d === "mask" ? s.activeStroke : null;
    return U != null && U.isEraser ? (Wt = Qr(Wt, t, r), Ut(Wt), Wt.ctx.drawImage(s.committedMask.canvas, 0, 0), hi(Wt.ctx, o.canvas), ec(oe.ctx, Wt.canvas)) : (ec(oe.ctx, s.committedMask.canvas), U && ec(oe.ctx, o.canvas)), g = { key: ce, surface: oe }, oe.canvas;
  }
  return {
    rebuildCommitted: ee,
    beginStroke: $,
    appendStrokePoint: p1,
    updateActiveStroke: X,
    commitActiveStroke: te,
    cancelActiveStroke: C,
    getErpTarget: z,
    ensureTarget: h,
    getGroupTarget: G,
    getGroupDisplayCanvas: he,
    getMaskDisplayCanvas: fe,
    getMaskDisplayRevision: q,
    getAllGroupIds: ne
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function jt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Uu(e, t) {
  let r = jt(t) - jt(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const zc = 3;
function Oo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function $a(e, t = 0) {
  const r = Oo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Oo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Oo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Oo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Oo(t) || 0);
}
function jh(e) {
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
const Cf = Math.PI / 180, If = 0.12, h1 = zc, m1 = 35, g1 = 140, Vo = 100, y1 = 20, Ef = 0.8;
function b1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Vo), 1, 179) * Cf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Cf;
}
function Bu(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Vo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(ee, $ = null) {
    a && a(ee, $);
  }
  function d(ee, $, te = null, C = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(ee || 0), l.drag.lastY = Number($ || 0), l.drag.lastTs = Number(C || performance.now()), l.drag.pointerId = te, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: te }), !0;
  }
  function u(ee, $, te = "pano", C = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(C || performance.now()), z = Number(ee), G = Number($), ne = z - l.drag.lastX, he = G - l.drag.lastY;
    l.drag.lastX = z, l.drag.lastY = G, l.drag.lastTs = X;
    const q = n() || { x: 1, y: 1 }, fe = Number(q.x || 1), ce = Number(q.y || 1), oe = { ...t() };
    let U = 0, E = 0;
    if (te === "unwrap") {
      const A = i() || { w: 1, h: 1 }, j = Math.max(1, Number(A.w || 1)), T = Math.max(1, Number(A.h || 1)), Y = ne / j, pe = he / T;
      U = -Y * 360 * fe, E = pe * 180 * ce;
    } else {
      const A = o() || { w: 0, h: 0 }, j = Math.max(1, Number(A.w || 0)), T = Math.max(1, Number(A.h || 0));
      if (j > 1 && T > 1) {
        const Y = Ie(Number(oe.fov || Vo), 1, 179), pe = Ie(b1(Y, j, T), 0.1, 179);
        U = -(ne / j) * Y * fe, E = he / T * pe * ce;
      } else
        U = -ne * If * fe, E = he * If * ce;
    }
    oe.yaw = jt(Number(oe.yaw || 0) + U), oe.pitch = Ie(Number(oe.pitch || 0) + E, -89.9, 89.9), r(oe), l.velHistory.push({ ts: X, yaw: oe.yaw, pitch: oe.pitch });
    let H = 0;
    for (; H < l.velHistory.length - 1 && l.velHistory[H].ts < X - 100; ) H++;
    return H > 0 && l.velHistory.splice(0, H), l.inertia.active = !1, l.inertia.lastTs = X, s(), c("drag", { phase: "move", dx: ne, dy: he, dYaw: U, dPitch: E }), !0;
  }
  function f(ee = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const $ = Number(ee || performance.now());
    l.drag.lastTs = $;
    const te = l.velHistory.filter((X) => $ - X.ts <= 80);
    if (te.length >= 2) {
      const X = te[0], z = te.at(-1), G = Math.max(1e-3, (z.ts - X.ts) / 1e3);
      let ne = z.yaw - X.yaw;
      ne > 180 && (ne -= 360), ne < -180 && (ne += 360), l.inertia.vx = ne / G, l.inertia.vy = (z.pitch - X.pitch) / G;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const C = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = C > y1, l.inertia.lastTs = $, c("drag", { phase: "end", speed: C, inertiaActive: l.inertia.active }), !0;
  }
  function g(ee = performance.now()) {
    if (!l.inertia.active) return !1;
    const $ = Number(ee || performance.now()), te = Math.max(1e-3, ($ - (l.inertia.lastTs || $)) / 1e3);
    l.inertia.lastTs = $;
    const C = { ...t() };
    C.yaw = jt(Number(C.yaw || 0) + l.inertia.vx * te), C.pitch = Ie(Number(C.pitch || 0) + l.inertia.vy * te, -89.9, 89.9);
    const X = Math.exp(-5.5 * te);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < Ef && Math.abs(l.inertia.vy) < Ef && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(C), s(), l.inertia.active;
  }
  function _() {
    const ee = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], ee;
  }
  function m(ee) {
    const $ = Math.sign(Number(ee || 0));
    if (!$) return !1;
    const te = { ...t() }, C = Number(te.fov || Vo);
    return te.fov = Ie(C + $ * h1, m1, g1), r(te), s(), c("wheel", { deltaSign: $, fovBefore: C, fovAfter: te.fov }), !0;
  }
  function h(ee, $ = 0) {
    return m($a(ee, $));
  }
  function w() {
    r({ yaw: 0, pitch: 0, fov: Vo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: g,
    stopMotion: _,
    applyWheel: m,
    applyWheelEvent: h,
    resetView: w
  };
}
const _t = Math.PI / 180, en = 180 / Math.PI;
function Xn(e, t, r) {
  return { x: e, y: t, z: r };
}
function za(e, t) {
  return Xn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ja(e, t) {
  return Xn(e.x * t, e.y * t, e.z * t);
}
function tc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Yu(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xn(e.x / t, e.y / t, e.z / t);
}
function Tn(e, t) {
  const r = e * _t, n = t * _t, i = Math.cos(n);
  return Xn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function go(e, t, r = 0) {
  const n = Number(e || 0) * _t, i = Number(t || 0) * _t, o = r * _t, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Xn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Xn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Xn(a * l, c, s * l)
  };
}
function Ha(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function v1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function S1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Ct(n.z_index ?? n.zIndex, t.length);
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
function w1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function _1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Ct(e.t, 0), n = Ct(e.widthScale, null), i = Ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Ct(e.u, null), s = Ct(e.v, null);
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
    const o = Ct(e.u, null), s = Ct(e.v, null);
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
function Js(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = _1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function x1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = Js(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = Js(e.points, t, 1);
  if (!o) return null;
  const s = Js(e.rawPoints, t, 1), a = Js(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function k1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = w1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = x1(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Ct(e.size, null), s = Ct(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = Ct(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Ct(f.r, 0))),
      g: Math.max(0, Math.min(1, Ct(f.g, 0))),
      b: Math.max(0, Math.min(1, Ct(f.b, 0))),
      a: Math.max(0, Math.min(1, Ct(f.a, 1)))
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
    hardness: Ct(e.hardness, null),
    flow: Ct(e.flow, null),
    spacing: Ct(e.spacing, null),
    createdAt: Math.trunc(Ct(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function Of(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = k1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function M1(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), r = Ct(e.v0, null), n = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function P1(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function N1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = M1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: P1(e.transform)
  } : null;
}
function A1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = N1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function yo(e) {
  const t = v1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: S1(e.groups),
    paint: Of(e.paint, "paint"),
    mask: Of(e.mask, "mask"),
    raster_objects: A1(e.raster_objects)
  };
}
const Jn = 1, Zn = 179, jc = 85;
function Ml(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Hh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Gh(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * en;
  return r && (n = Math.round(n / 15) * 15), Ml(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function si(e = {}) {
  const t = Ie(ot(e.hFOV_deg || 90, 90), Jn, Zn), r = Ie(ot(e.vFOV_deg || 60, 60), Jn, Zn), n = Math.tan(t * _t * 0.5), i = Math.tan(r * _t * 0.5);
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
function Ii(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = si(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function qu(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function Xu(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * en, Jn, Zn), s = Ie(2 * Math.atan(i / (2 * r)) * en, Jn, Zn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function C1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = si(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function Ju(e, t, r = jc) {
  const n = Math.max(1e-12, ot(t, 1)), i = Ie(ot(r, jc), 1, 89.999), o = n * Math.tan(i * _t), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Kh(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function I1(e, t) {
  const r = Ie(ot(e, 90), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * _t * 0.5) / n) * en,
    Jn,
    Zn
  );
}
function ma(e, t) {
  const r = Ie(ot(e, 60), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * _t * 0.5) * n) * en,
    Jn,
    Zn
  );
}
function Ff(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function E1(e, t) {
  const r = Ff(e, 1), n = Ff(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Ti(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * _t, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * _t;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ni(e) {
  const t = Ti(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || E1(t, 1);
}
function Zu(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ni(t), t;
}
function Wh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ie(s, Jn, Zn) : Ie(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return Zu({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Ie(ot(r, 0), -89.9, 89.9),
    roll_deg: Ml(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Dr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ni(e);
}
function Uh(e, t) {
  const r = si(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * en, o = 2 * Math.atan(r.tanHalfY * n) * en;
  return i < Jn || i > Zn || o < Jn || o > Zn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Bh(e, t, r = zc) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, zc));
  if (!n || !(i > 0)) return null;
  const o = si(e), s = o.hFovDeg + n * i;
  if (s < Jn || s > Zn) return null;
  const a = Math.tan(s * _t * 0.5);
  return Uh(e, a / o.tanHalfX);
}
function Yh(e, t) {
  const r = si(e), n = go(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return Yu(za(za(n.fwd, ja(n.right, i)), ja(n.up, o)));
}
function O1(e) {
  return Xn(e.x, e.y, -e.z);
}
function ga(e) {
  return Xn(e.x, e.y, -e.z);
}
function xn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = go(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function qh(e) {
  const t = ga(Xn(e[0][0], e[1][0], e[2][0])), r = ga(Xn(e[0][1], e[1][1], e[2][1])), n = ga(Xn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * en, pitchDeg: o * en, rollDeg: l * en };
}
function ls(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function ai(e) {
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
function Zs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const _i = 1e-6, Hc = 1e-6, F1 = 1e-9;
function cs(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function T1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    cs(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return cs(0, n, o, 1, 0.5 * (s + a));
}
function co(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function uo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, g, _) => f + g * a[_], 0) < 0) return r.map(() => 0);
  const l = s.map((f, g) => (f * o + a[g] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((g, _) => g + _ * _, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function Xh(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  co(e, n) && (l = uo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return co(e, n + 1) && (c = uo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function Jh(e, t, r, n, i) {
  const [[o], [s]] = Xh(e, t, r.map((a) => [a]), n);
  return cs(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function D1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = Xh(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => cs(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Ga([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function L1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function nc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function R1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Gc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Ji(e, t) {
  return R1(Ga([-e[0], -e[1], -e[2], e[3]], t));
}
function rc(e, t, r) {
  return Ga(e, Gc(Ji(e, t).map((n) => r * n)));
}
function ic(e, t) {
  const r = L1(e, t);
  if (Math.abs(r) > Hc) return r < 0;
  const [n, i, o] = Ji(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Hc) return s < 0;
  return !1;
}
function Qs(e) {
  const { x: t, y: r, z: n, w: i } = ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Kc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function V1(e, t, r, n) {
  const i = Qs(e[r].value);
  let o = Qs(e[r + 1].value);
  ic(i, o) && (o = nc(o));
  const s = t[r + 1] - t[r], a = Ji(i, o);
  let l = a;
  if (co(e, r)) {
    let C = Qs(e[r - 1].value);
    ic(C, i) && (C = nc(C)), l = uo(t, r, Ji(i, C), a).map((X) => X * s);
  }
  let c = a;
  if (co(e, r + 1)) {
    let C = Qs(e[r + 2].value);
    ic(o, C) && (C = nc(C)), c = uo(t, r + 1, Ji(o, i), Ji(o, C)).map((X) => X * s);
  }
  const d = Ga(i, Gc(l.map((C, X) => 0.5 * (C - a[X])))), u = Ga(o, Gc(a.map((C, X) => 0.5 * (C - c[X])))), [f, g, _, m] = rc(rc(i, o, n), rc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: w, rollDeg: ee } = qh(ls({ x: f, y: g, z: _, w: m })), $ = e[r].value, te = e[r + 1].value;
  return {
    yaw_deg: Kc(h, $.yaw_deg, te.yaw_deg, n),
    pitch_deg: w,
    roll_deg: Kc(ee, $.roll_deg, te.roll_deg, n)
  };
}
function us(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ka(e) {
  return Math.sqrt(us(e, e));
}
function Wa(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function Zh(e, t) {
  const r = us(e, t), n = t.map((s, a) => s - r * e[a]), i = Ka(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Bi(e, t) {
  const r = Ka(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ea(e, t, r) {
  return Bi(e, Zh(e, t).map((n) => r * n));
}
function oc(e, t) {
  const r = Wa(e[t].value), n = Wa(e[t + 1].value), i = us(r, n), o = i < 0 && Ka(n.map((l, c) => l - i * r[c])) <= Hc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = Zh(r, n);
  const a = Ka(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function $1(e, t, r, n) {
  const i = Wa(e[r].value), o = Wa(e[r + 1].value), [s, a, l] = oc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  co(e, r) && (c = uo(t, r, oc(e, r - 1)[1].map(($) => -$), c).map(($) => $ * u)), co(e, r + 1) && (d = uo(t, r + 1, d.map(($) => -$), oc(e, r + 1)[0]).map(($) => $ * u));
  let f, g, _;
  if (l) {
    const $ = Math.PI, te = cs(0, us(c, s) / $ / 3, $ - us(d, a) / $ / 3, $, n);
    [f, g, _] = Bi(i, s.map((C) => te * C / $));
  } else {
    const $ = ea(Bi(i, c.map((X) => X / 3)), Bi(o, d.map((X) => -X / 3)), n), te = ea(Bi(i, c.map((X) => n * X / 3)), $, n), C = ea($, Bi(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, g, _] = ea(te, C, n);
  }
  const m = Math.hypot(f, _), h = e[r].value.yaw_deg, w = e[r + 1].value.yaw_deg;
  return { yaw_deg: m <= F1 ? h + (w - h) * n : Kc(Math.atan2(f, _) * 180 / Math.PI, h, w, n), pitch_deg: Math.atan2(g, m) * 180 / Math.PI };
}
function z1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = Jh(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function j1(e, t, r, n) {
  return Jh(e, t, e.map((i) => i.value), r, n);
}
const H1 = { position: D1, rotation: V1, direction: $1, size: z1 };
function Gt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return Zs(e[t].value);
  if (r <= n[0].frame + _i) return Zs(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - _i) return Zs(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + _i; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= _i || s.easing === "hold") return Zs(s.value);
  const a = n.map((c) => c.frame), l = T1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (H1[t] ?? j1)(n, a, o, l);
}
function Wc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function G1(e) {
  return Math.min(1, Math.max(0, e));
}
function Qh(e) {
  return Math.max(1e-6, e);
}
function em(e, t) {
  return t - (e.start - e.in);
}
function bo(e, t) {
  return t >= e.start - _i && (e.duration === null || t < e.start + e.duration - _i);
}
function Pl(e, t) {
  return {
    position: Gt(e, "position", t),
    ...Gt(e, "rotation", t),
    hFOV_deg: Wc(Gt(e, "fov", t)),
    aspect: e.aspect
  };
}
function xs(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = em(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Pl(n, r),
    scene: {
      active: i.visible && bo(i.clip, r),
      clip_frame: o,
      position: Gt(i, "position", o),
      ...Gt(i, "rotation", o),
      scale: Qh(Gt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Ei(s, r))
  };
}
function K1(e, t) {
  if (e.placement === "world")
    return {
      position: Gt(e, "position", t),
      ...Gt(e, "rotation", t),
      scale: Qh(Gt(e, "scale", t))
    };
  const r = Gt(e, "size", t);
  return {
    ...Gt(e, "direction", t),
    roll_deg: Gt(e, "roll", t),
    hFOV_deg: Wc(r.hFOV_deg),
    vFOV_deg: Wc(r.vFOV_deg)
  };
}
function Ei(e, t) {
  const r = em(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && bo(e.clip, t),
    clip_frame: r,
    ...K1(e, r),
    opacity: G1(Gt(e, "opacity", r))
  };
}
const W1 = 2, U1 = ["sky", "world"], Uc = ["perspective", "erp"], B1 = ["input", "output", "temp"], tm = [0.42, 0, 0.58, 1], nm = 1, Qu = 1e3, Bc = 1e7, ed = Bc;
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Yt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function td(e, t) {
  const r = Yt(e, t);
  return r !== null && r > 0 ? r : t;
}
function Ln(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Nl(e) {
  const t = Yt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ya(e) {
  const t = Nl(e);
  return t === null ? null : Ln(t, -Bc, Bc);
}
function vo(e) {
  const t = td(e, null);
  return t === null ? null : Ln(t, nm, Qu);
}
function rm(e) {
  const t = Nl(e);
  return t !== null && t >= 1 ? Math.min(t, ed) : null;
}
function ds(e, t) {
  return typeof e == "boolean" ? e : t;
}
function im(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Yt(r, null));
  return t.includes(null) ? null : t;
}
function om(e) {
  return im(e) || [0, 0, 0];
}
function sm(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: Ln(Yt(t.pitch_deg, 0), -90, 90),
    roll_deg: Yt(t.roll_deg, 0)
  };
}
function Y1(e) {
  return Ln(Yt(e, 90), 0.1, 179);
}
function q1(e) {
  return td(e, 1);
}
function X1(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Yt(t.yaw_deg, 0),
    pitch_deg: Ln(Yt(t.pitch_deg, 0), -90, 90)
  };
}
function J1(e) {
  return Yt(e, 0);
}
function Z1(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: Ln(Yt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Ln(Yt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function am(e) {
  return Ln(Yt(e, 1), 0, 1);
}
const Al = [["position", om], ["rotation", sm], ["fov", Y1]], Cl = [["position", om], ["rotation", sm], ["scale", q1]], nd = [["direction", X1], ["roll", J1], ["size", Z1], ["opacity", am]], rd = [...Cl, ["opacity", am]];
function Q1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Yt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...tm];
}
function ev(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = im(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function tv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!tn(i)) continue;
    const o = ya(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: Q1(i.easing) }, a = r ? ev(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function id(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = tn(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: tv(o.keyframes, i, n === "position") };
  }
  return r;
}
function lm(e) {
  const t = tn(e) ? e : {}, r = ya(t.start), n = ya(t.in), i = ya(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function nv(e) {
  const t = tn(e) ? e : {}, r = Ln(Yt(t.x0, 0), 0, 1), n = Ln(Yt(t.y0, 0), 0, 1), i = Ln(Yt(t.x1, 1), 0, 1), o = Ln(Yt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function rv(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: B1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function iv(e) {
  const t = rv(e.source);
  if (!t) return null;
  const r = U1.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: lm(e.clip),
    visible: ds(e.visible, !0),
    locked: ds(e.locked, !1),
    crop: nv(e.crop),
    ...id(e, n ? rd : nd)
  };
  return n || (i.z_index = Nl(e.z_index) ?? 0), i;
}
function ov(e) {
  const t = [];
  let r = !1;
  for (const o of Array.isArray(e) ? e : []) {
    const s = tn(o) ? iv(o) : null;
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
function sv(e) {
  if (!tn(e)) return null;
  const t = Uc.includes(e.projection) ? e.projection : Uc[0];
  return { aspect: td(e.aspect, 1), projection: t, visible: ds(e.visible, !0), ...id(e, Al) };
}
function Ua(e) {
  const t = tn(e.timeline) ? e.timeline : {}, r = tn(e.scene) ? e.scene : {};
  return {
    version: W1,
    timeline: {
      fps: vo(t.fps) ?? 24,
      length: rm(t.length)
    },
    camera: sv(e.camera),
    scene: { clip: lm(r.clip), visible: ds(r.visible, !0), ...id(r, Cl) },
    stickers: ov(e.stickers),
    painting: yo(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ds(e.painting_visible, !0)
  };
}
function av(e, t) {
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
function lv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return null;
  const r = Ln(Yt(t.hFOV_deg, 90), 1, 179), n = Ln(Yt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function cv(e) {
  const t = tn(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return r.sort((n, i) => Yt(n.z_index, 0) - Yt(i.z_index, 0)), Ua({
    camera: lv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: av(n, t),
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
function Gr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ua({});
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
  return r === 1 ? cv(t) : Ua(t);
}
const sc = {
  state: { painting_visible: !0 },
  camera: { projection: Uc[0], visible: !0 },
  scene: { visible: !0 }
};
function ac(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function Yc(e) {
  return JSON.stringify({
    ...ac(e, sc.state),
    camera: e.camera && ac(e.camera, sc.camera),
    scene: ac(e.scene, sc.scene)
  });
}
function lc(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function Tf(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function od(e, t) {
  const r = vo(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => Nl(a * n), { length: o } = e.timeline, s = Tf(e.scene.clip, i);
  return Ua({
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...lc(e.camera, Al, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...lc(e.scene, Cl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Tf(a.clip, i), u = a.placement === "world" ? rd : nd;
      return { ...a, clip: l, ...lc(a, u, i, c, d) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function cc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function cm(e) {
  return Array.isArray(e) ? [...e] : e;
}
function um(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= _i);
}
function dm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? cm(e.keyframes[n - 1].easing) : [...tm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function hn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = cc(i.value, n);
    return;
  }
  const o = um(i, r);
  o ? o.value = cc(o.value, n) : dm(i, r, cc(Gt(e, t, r), n));
}
function So(e) {
  return e.placement === "world" ? rd.map(([t]) => t) : e.placement === "sky" ? nd.map(([t]) => t) : (e.clip ? Cl : Al).map(([t]) => t);
}
function uv(e, t) {
  for (const r of So(e))
    um(e[r], t) || dm(e[r], t, Gt(e, r, t));
}
function dv(e) {
  const t = So(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function uc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function fv(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function pv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Gt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function hv(e, t, r, n, i) {
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
function fm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function mv(e, t, r) {
  const n = fm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function gv(e, t, r, n) {
  for (const i of fm(e, t, r)) i.easing = cm(n);
}
function yv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function bv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function vv(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Sv(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function qc(e) {
  return So(e).map((t) => e[t]);
}
function Ba(e) {
  return qc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Sv(e.clip);
}
function pm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Ba);
}
const wv = 1e5;
function hm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of qc(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of qc(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : wv;
}
function _v(e) {
  return e > 0 ? vo(Math.min(e, Qu)) : null;
}
function xv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : rm(Math.max(1, Math.min(e, ed)));
}
const dc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], kv = 2e3;
function Mv(e, t, r = 56) {
  const n = dc.find((o) => o * t >= r) || dc[dc.length - 1], i = [];
  for (let o = 0; o < e && i.length < kv; o += n) i.push(o);
  return i;
}
function Pv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let ta = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ya(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Nv({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Rn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: yo(null),
    painting_layer: null,
    ui_settings: Ya(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function mm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function Av(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function Cv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Iv(e) {
  return Array.isArray(e) ? e.map((t) => Zu(t)) : [];
}
function Ev(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function gm(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = Nv(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (ta.text === i ? o = ta.parsed : (o = JSON.parse(i), ta = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Av(o.assets),
      stickers: Cv(o.stickers),
      shots: Iv(o.shots),
      painting: yo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: Ya(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = Ya({ ...a.ui_settings, ...s })), a.output_preset = mm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Rn(r.coverage), delete a.editor_history, a;
  } catch {
    return ta = { text: i, parsed: null }, n;
  }
}
function Ov(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Fv(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), { state: r, paintingChanged: n };
}
function Tv(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function ym(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = vo(t.fps);
  let l;
  try {
    l = Gr(e);
  } catch {
    l = Gr(null);
  }
  return a && a !== l.timeline.fps && (l = od(l, a)), {
    ...l,
    coverage: Rn(i),
    bg_color: n,
    output_preset: mm(r),
    ui_settings: Ya(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function Dv(e, t) {
  const r = od(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of So(o)) o[a].keyframes = s[a].keyframes;
    }
}
function bm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * _t, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / _t;
  return Math.min(179, Math.max(0.1, i));
}
function sd(e, t, r = null) {
  const n = Ei(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: bm(e, n, r), rot_deg: n.roll_deg };
}
const Lv = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Df(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function Rv(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Lv[r]].keyframes.length));
}
function vm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Df(r, ["yaw_deg", "pitch_deg"]), o = Df(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && hn(e, "direction", n, i), r.rot_deg !== void 0 && hn(e, "roll", n, r.rot_deg), Object.keys(o).length && hn(e, "size", n, o);
}
const Il = ["position_x", "position_y", "position_z"], ad = "camera";
function Sm(e, t) {
  const r = Pl(e, t);
  return Zu({
    id: ad,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: I1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Vv(e) {
  return Gr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: jt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function $v(e) {
  return e - 360 * Math.round(e / 360);
}
function zv(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + $v(r[o] - n[o]));
  Object.keys(i).length && hn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && hn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * _t * 0.5) / Math.tan(r.vFOV_deg * _t * 0.5)), r.position.some((o, s) => o !== n.position[s]) && hn(e, "position", t, [...r.position]);
}
function jv(e, t) {
  const r = Gt(e, "position", t), n = Gt(e, "rotation", t);
  return {
    ...Object.fromEntries(Il.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Gt(e, "fov", t)
  };
}
function Hv(e, t, r, n) {
  const i = Il.indexOf(r);
  if (i >= 0) {
    const o = Gt(e, "position", t);
    o[i] = n, hn(e, "position", t, o);
  } else r === "hFOV_deg" ? hn(e, "fov", t, n) : hn(e, "rotation", t, { [r]: n });
}
function Gv(e, t, r) {
  hn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function Kv(e, t) {
  const r = Ei(e, t);
  return {
    ...Object.fromEntries(Il.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function Wv(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Il.indexOf(r);
  if (o >= 0) {
    const s = Gt(e, "position", i);
    s[o] = n, hn(e, "position", i, s);
  } else r === "scale" ? hn(e, "scale", i, n) : r === "opacity" ? hn(e, "opacity", i, n / 100) : hn(e, "rotation", i, { [r]: n });
}
function Uv(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && hn(e, i, n, r[i]);
}
function Bv(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function Yv(e, t, r) {
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
function ba(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function qa(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ld(e, t, r, n) {
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
function qv(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = jt(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function Xc(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function wm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function _m(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function xm(e, t) {
  return e != null && e.__panoSceneStateV2 ? Yc(Gr(t)) : JSON.stringify(t);
}
function km(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Gr(r);
    if (Yc(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && Yc(od(i, o)) === t;
  } catch {
    return !1;
  }
}
const fc = 0.15, Xv = 0.01, Jv = 1e-3, Zv = 0.05, Qv = 4, Lf = 250, eS = 16, sr = 1, tS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Sr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function El(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Di(e, t, r = 0) {
  const n = xn(e, t, r), i = Sr(n, 2);
  return { right: Sr(n, 0), up: Sr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function nS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function Jc(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function rS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Jc(e, "3dof", r);
}
function iS(e) {
  return Di(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function oS(e) {
  return Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function li(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Zo(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function cd(e, t) {
  return Zo(li(t, e.position), Di(e.yaw_deg, e.pitch_deg).forward);
}
function ud(e) {
  return Math.max(e, 1e-6) * Zv;
}
function Zc(e, t, r = null, n = sr) {
  if (t) return t;
  const i = ud(n);
  if (r && cd(e, r) > 0) {
    const o = li(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Mm(e, t = sr) {
  return Math.max(e.distance, ud(t));
}
function Pm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > Qv ? !1 : t.time - e.time < Lf || e.cost > eS && t.time - e.wheelTime < Lf;
}
function dd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * _t);
  return { tanX: n, tanY: n * r / t };
}
function Nm(e, t, r, n, i = oS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = sS(t, r, o), l = jt(e.yaw_deg + s / n * 360), c = Ie(e.pitch_deg - a / n * 360, -89.9, 89.9), d = xn(e.yaw_deg, e.pitch_deg, o), u = xn(l, c, o), f = li(e.position, i), g = [0, 1, 2].map((m) => Zo(Sr(d, m), f)), _ = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, El(u, g)) };
  return { ..._, distance: cd(_, i) };
}
function sS(e, t, r) {
  const n = Math.cos(r * _t), i = Math.sin(r * _t);
  return [e * n + t * i, t * n - e * i];
}
function Am(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = iS(e), l = 2 * o * dd(e, n, i).tanY / i;
  return { ...e, position: Kn(Kn(e.position, s, -t * l), a, r * l), distance: o };
}
function Cm(e, t, r, n = sr) {
  const i = li(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * Xv, l = r > 0 ? Math.min(Math.max(o * fc, a), o - s * Jv) : -Math.max(o * fc / (1 - fc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(cd(c, t), ud(n)) };
}
function aS(e, t, r, n) {
  const { tanX: i, tanY: o } = dd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Di(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function fd(e, t, r, n = null) {
  return Im({
    quaternion: ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(dd(e, t, r).tanY) * en,
    aspect: t / r
  }, e.position, e.distance, n);
}
function Im(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: sr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function fs(e, t, r, n) {
  const { right: i, up: o, forward: s } = Em(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * _t), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Em(e) {
  const t = ls(e.quaternion), r = Sr(t, 2);
  return { right: Sr(t, 0), up: Sr(t, 1), forward: r.map((n) => -n) };
}
function Xa(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function lS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function pd(e, t) {
  if (!e || !t.active) return null;
  const r = cS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: Qc(t),
    itemQuaternion: e.kind === "splat" ? tS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Om(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = pd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function Fm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function cS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function Qc(e) {
  return {
    position: [...e.position],
    quaternion: ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function eu(e, t) {
  return Kn(e.position, El(xn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function va(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function tu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function nu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function uS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...tu(t).map((o) => eu(e.scene, o)));
  for (const o of r) i.push(...hd(o));
  for (const { box: o, value: s } of n) i.push(...tu(o).map((a) => eu(s, a)));
  return i;
}
function dS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: xn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function hd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, El(e.rotation, [n, i, 0])));
}
function fS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? nu(hd(i)) : o != null && o.box ? nu(tu(va(o.kind, o.box)).map((s) => eu(n, s))) : { center: [...n.position], radius: n.scale };
}
const pS = 2, hS = 0.5, mS = 30;
function Tm(e, t) {
  const r = li(t, e), n = Math.atan2(r[0], -r[2]) * en, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * en;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function gS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * hS : pS, o = t ? [...t] : Kn(e.position, Di(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...li(o, e.position)), a = s > 0 ? Tm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(mS * 0.5 * _t);
  return { position: o, rotation: a, scale: l };
}
function Rf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function yS(e) {
  return [0, 1, 2].map((t) => Sr(e, t));
}
function Vf(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, li(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * _S(r.scale, n.scale) / r.scale };
  const i = Rf(ls(n.quaternion), yS(ls(r.quaternion))), o = Rf(i, xn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = qh(o);
  return Math.abs(a) <= bS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: vS(o, t.yaw_deg) } };
}
const bS = 89.9;
function vS(e, t) {
  const r = Sr(e, 0), n = Sr(e, 1), i = Math.cos(t * _t), o = Math.sin(t * _t);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * en + 0;
}
const SS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function wS(e, t, r, n, i) {
  if (!fs(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Em(e), l = li(t, e.position), c = Zo(l, o), d = Zo(l, s), u = Zo(l, a), f = Math.tan(e.fovY_deg * 0.5 * _t), g = f * e.aspect, _ = Math.hypot(c, d, u) * SS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > _)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const m = (te) => {
    const C = _ * Math.sqrt(te * te + u * u - _ * _);
    return [(te * u - C) / (u * u - _ * _), (te * u + C) / (u * u - _ * _)];
  }, [h, w] = m(c), [ee, $] = m(d);
  return {
    minX: n * 0.5 * (1 + h / g),
    maxX: n * 0.5 * (1 + w / g),
    minY: i * 0.5 * (1 - $ / f),
    maxY: i * 0.5 * (1 - ee / f)
  };
}
function _S(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function xS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Dm(e, t) {
  const r = xn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * _t) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, El(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function kS(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = fs(e, s, n, i), c = fs(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ie(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function MS(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function PS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Gt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Gt(n, "position", l);
  });
}
function NS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Lm = 0.28;
function Rm(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * _t);
  return {
    quaternion: ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * en,
    aspect: n
  };
}
function Qo(e) {
  const t = si(e);
  return {
    quaternion: ai(xn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Vm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = Ju(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * en,
      vFOV_deg: 2 * Math.atan(o / n) * en
    }
  };
}
function $m(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = ls(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * _t), g = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(_, m = 1e-4) {
      const h = O1(_), w = n * h.x + s * h.y + c * h.z, ee = i * h.x + a * h.y + d * h.z, $ = -(o * h.x + l * h.y + u * h.z), te = Math.max($, m);
      return {
        x: t * 0.5 * (1 + w / te / g),
        y: r * 0.5 * (1 - ee / te / f),
        z: $
      };
    },
    // The unit direction seen at the point (x, y).
    ray(_, m) {
      const h = (_ / t * 2 - 1) * g, w = (1 - m / r * 2) * f;
      return Yu(ga({
        x: n * h + i * w - o,
        y: s * h + a * w - l,
        z: c * h + d * w - u
      }));
    }
  };
}
function zm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = xs(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * _t), g = Math.tan(bm(a, c, Hm(u.media)) * 0.5 * _t), { crop: _ } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Lm : c.opacity,
      zIndex: n(a),
      quaternion: ai(xn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * _.x0 - 1) * f,
        x1: (2 * _.x1 - 1) * f,
        y0: (1 - 2 * _.y1) * g,
        y1: (1 - 2 * _.y0) * g
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function jm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return zm(e, t, {
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
function Hm(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Gm(e, t, r, { media: n, evaluated: i = xs(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: g } = Hm(u.media), _ = dS(c, a.crop, f, g);
    _ && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: _.position,
      quaternion: _.quaternion,
      rotation: _.rotation,
      width: _.width,
      height: _.height,
      crop: a.crop
    });
  }), s;
}
function AS({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = $h(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    pick(m, h, w, ee, $) {
      return l && !f.lost ? l.pick(m, h, w, ee, $) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(m, h, w, ee, $) {
      return l && !f.lost ? l.pickSurface(m, h, w, ee, $) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(m, h, w, ee, $) {
      return l && !f.lost ? l.pickSticker(m, h, w, ee, $) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(m, h, w, ee, $, te) {
      return l && !f.lost ? l.gizmoPointer(m, h, w, ee, $, te) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", g), e.removeEventListener("webglcontextrestored", _), l == null || l.dispose(), l = null;
    }
  };
  function g(m) {
    m.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function _() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", g), e.addEventListener("webglcontextrestored", _), s().then((m) => {
    c || (a = m, !f.lost && (u(), f.ready = !0, t()));
  }).catch((m) => {
    console.error("[PanoramaStickers] three.js view is unavailable", m), f.failed = !0, r();
  }), f;
}
const Km = "3D view unavailable. Check the browser console.";
function Ja(e, t, r) {
  return Rm({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function CS(e) {
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
const Wm = CS(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => $h(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), ar = ["erp_image", "bg_erp", "bg_media"], md = ["sticker_image", "sticker"], Um = ["scene"], IS = {
  background: ar,
  "external-sticker": md,
  scene: Um
};
function Bm(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Ol(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = Bm(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function Ym(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function $f(e, t) {
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
function qm(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function ES(e, t) {
  const { graph: r, entry: n } = qm(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = Bm(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const Xm = [...ar, ...md, ...Um], OS = 256, Yi = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new WeakMap();
let Jm = () => null;
function Zm(e) {
  return pc.has(e) || pc.set(e, JSON.stringify(e)), pc.get(e);
}
function FS(e) {
  Jm = e;
}
function Za(e, t) {
  const r = Zm(e);
  Yi.delete(r), Yi.set(r, t), Yi.size > OS && Yi.delete(Yi.keys().next().value);
}
function Zt(e, t) {
  var o;
  const r = e ? Jm(e) : null;
  if (!r) return !0;
  const n = Ol(e);
  let i = Yi.get(Zm(r));
  if (i)
    Za(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => Xm.includes(s == null ? void 0 : s.name)))) return !0;
    Za(r, n), i = n;
  }
  return IS[t].every((s) => i[s] === n[s]);
}
const Qa = /* @__PURE__ */ new WeakSet();
async function ru(e, t) {
  if (Qa.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && Qa.add(e), r.ok && n !== void 0 ? n : null;
}
function Qm(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = qm(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => Xm.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: ES(r, t) };
}
const Sa = /* @__PURE__ */ new Map();
function TS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Sa.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await ru(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = Qm(i, o);
        s && Za(s.output, s.inputs);
      }
    });
}
const DS = 5;
function LS(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${DS}`, n = ru(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, ru(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: g } of await n) {
        if (!a()) return null;
        const _ = await o(g);
        if ((c = _ == null ? void 0 : _.outputs) != null && c[l])
          return ((f = (u = (d = _.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : Qm(_, l);
      }
      return null;
    }
  };
}
function RS(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Hi = null;
async function VS(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || Qa.has(r) || (a = Sa.get(i)) != null && a.has(n) || RS(t)) return null;
  (Hi == null ? void 0 : Hi.workflowId) !== i && (Hi = { workflowId: i, history: LS(r, i) }, queueMicrotask(() => {
    Hi = null;
  }));
  const s = await Hi.history.lastNodeOutput(e, o);
  return o() ? s ? (Za(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (Qa.has(r) || Sa.set(i, (Sa.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function zf(e, t, r, n = ar) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const jf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function wa(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return jf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return jf.test(String((e == null ? void 0 : e.filename) || ""));
}
const hc = /* @__PURE__ */ new WeakMap();
function $S(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function iu(e) {
  return $S(e) ? (hc.has(e) || hc.set(e, Math.random().toString(36).slice(2, 10)), hc.get(e)) : "run";
}
function eg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function zS(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function gd(e, t = [], r = null) {
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
function jS({
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
  const _ = () => {
    g = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", _), n.src = t, n.load();
  const m = () => {
    o || g || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var ee, $;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", _), n.pause(), (ee = n.removeAttribute) == null || ee.call(n, "src"), ($ = n.load) == null || $.call(n));
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
const ps = /* @__PURE__ */ new WeakMap(), tg = {
  editorSession: () => ({
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
function ks(e, t) {
  if (!e || typeof e != "object") return null;
  let r = ps.get(e);
  return r || (r = {}, ps.set(e, r)), r[t] ?? (r[t] = tg[t]());
}
function Fl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = ps.get(e)) == null ? void 0 : r[t]) || null;
}
const el = (e) => ks(e, "editorSession"), St = (e) => ks(e, "nodeSurface"), Lr = (e) => ks(e, "previewNode"), kn = (e) => ks(e, "mediaCache"), Hn = (e) => ks(e, "stateSync"), HS = (e) => Fl(e, "editorSession"), ng = (e) => Fl(e, "nodeSurface"), rg = (e) => Fl(e, "previewNode");
function mc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const GS = {
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
      mc(o == null ? void 0 : o.img), mc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), mc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function KS(e, t) {
  const r = Fl(e, t);
  if (r)
    try {
      GS[t](r);
    } finally {
      delete ps.get(e)[t];
    }
}
function WS(e) {
  for (const t of Object.keys(tg))
    try {
      KS(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && ps.delete(e);
}
function mi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function US(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Hf(e, t, r = null) {
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
  return !n && r != null && (n = US(e == null ? void 0 : e.graph, r)), n;
}
function BS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function YS(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function qS(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function ig({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (C) => {
    if (!C) return "";
    if (typeof C == "string") return String(C || "").trim();
    if (Array.isArray(C)) {
      if (C.length === 0) return "";
      if (C.length === 1) return i(C[0]);
      const X = String(C[0] || "").trim();
      if (X)
        return mi(t, {
          filename: X,
          subfolder: String(C[1] || "").trim(),
          type: String(C[2] || "output").trim() || "output"
        });
      for (const z of C) {
        const G = i(z);
        if (G) return G;
      }
      return "";
    }
    return typeof (C == null ? void 0 : C.src) == "string" && C.src ? C.src : typeof (C == null ? void 0 : C.url) == "string" && C.url ? C.url : mi(t, C);
  }, o = (C) => {
    if (!C || typeof C != "object") return "";
    const X = String(C.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(C.value || "");
    if (X !== "comfy_image") return "";
    const z = String(C.filename || "").trim();
    return z ? mi(t, {
      filename: z,
      subfolder: String(C.subfolder || ""),
      type: String(C.storage || "input")
    }) : "";
  }, s = (C) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || C == null) return null;
    const z = String(C);
    return X instanceof Map ? X.get(C) || X.get(z) || X.get(Number(z)) || null : X[C] || X[z] || null;
  }, a = (C, X) => {
    var G;
    const z = s(C == null ? void 0 : C.id);
    return Array.isArray((G = z == null ? void 0 : z.ui) == null ? void 0 : G[X]) ? z.ui[X] : Array.isArray(z == null ? void 0 : z[X]) ? z[X] : [];
  }, l = (C, X) => {
    const z = s(C == null ? void 0 : C.id);
    return z != null && z.ui && Object.prototype.hasOwnProperty.call(z.ui, X) ? z.ui[X] : z && Object.prototype.hasOwnProperty.call(z, X) ? z[X] : null;
  }, c = (C, X) => {
    const z = l(C, "pano_sticker_input_state_hash"), G = Array.isArray(z) ? z[0] : z;
    return String(G ?? "").trim() || qS(X);
  }, d = (C) => {
    const X = [], z = /* @__PURE__ */ new Set();
    for (const G of C || []) {
      const ne = i(G);
      !ne || z.has(ne) || (z.add(ne), X.push(ne));
    }
    return X;
  }, u = (C, X) => {
    var ne;
    const z = [];
    Array.isArray(C == null ? void 0 : C.images) && C.images.length && z.push(C.images), Array.isArray((ne = C == null ? void 0 : C.ui) == null ? void 0 : ne.images) && C.ui.images.length && z.push(C.ui.images);
    const G = [];
    for (const he of z)
      X >= 0 && X < he.length && G.push(he[X]), G.push(...he);
    return G;
  }, f = (C, X) => {
    var j;
    const z = String(X || "").trim();
    if (!z) return { src: "", sourceType: "", inputName: "" };
    const ne = (Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : []).findIndex((T) => String((T == null ? void 0 : T.name) || "") === z);
    if (ne < 0) return { src: "", sourceType: "", inputName: z };
    const he = C.graph ? C.getInputLink(ne) : null;
    if ((he == null ? void 0 : he.origin_id) == null) return { src: "", sourceType: "", inputName: z };
    const q = he.origin_id, fe = Hf(C, ne, q);
    if (!fe) return { src: "", sourceType: "", inputName: z };
    const ce = Number(he.origin_slot ?? 0);
    let oe = [];
    try {
      oe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(fe) || [] : [];
    } catch {
      oe = [];
    }
    if (Array.isArray(oe) && oe.length) {
      const T = [];
      ce >= 0 && ce < oe.length && T.push(oe[ce]), T.push(...oe);
      const Y = d(T.filter((pe) => !wa(pe)));
      if (Y.length)
        return { src: Y[0], srcCandidates: Y, sourceType: "appNodeImageUrls", inputName: z };
    }
    const U = s((fe == null ? void 0 : fe.id) ?? q), E = d(u(U, ce).filter((T) => !wa(T))).map((T) => `${T}&pano_src=${iu(U)}`);
    if (E.length)
      return { src: E[0], srcCandidates: E, sourceType: "nodeOutputs", inputName: z };
    const H = Array.isArray(fe == null ? void 0 : fe.imgs) ? fe.imgs : [];
    if (H.length) {
      const T = [];
      ce >= 0 && ce < H.length && T.push(H[ce]), T.push(...H);
      const Y = d(T);
      if (Y.length)
        return { src: Y[0], srcCandidates: Y, sourceType: "nodeImgs", inputName: z };
    }
    const A = (j = fe == null ? void 0 : fe.widgets) == null ? void 0 : j.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
    if (A) {
      let T = i(A.value);
      if (T && !T.includes("/") && !T.includes(":") && (fe.comfyClass === "LoadImage" || fe.type === "LoadImage") && (T = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`), T) return { src: T, sourceType: "widget", inputName: z };
    }
    return { src: "", sourceType: "", inputName: z };
  }, g = (C, X = []) => {
    var G;
    const z = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs : [];
    for (const ne of X) {
      const he = z.findIndex((oe) => String((oe == null ? void 0 : oe.name) || "") === ne), q = he >= 0 && C.graph ? C.getInputLink(he) : null;
      if ((q == null ? void 0 : q.origin_id) == null) continue;
      const fe = s(((G = Hf(C, he, q.origin_id)) == null ? void 0 : G.id) ?? q.origin_id), ce = (Array.isArray(fe == null ? void 0 : fe.images) ? fe.images : []).find(wa);
      return ce ? `${mi(t, ce)}&pano_src=${iu(fe)}` : "";
    }
    return "";
  }, _ = (C, X = []) => {
    const z = Array.isArray(X) ? X : [X];
    for (const G of z) {
      const ne = f(C, G);
      if (String((ne == null ? void 0 : ne.src) || "").trim()) return ne;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, m = (C) => {
    const X = String(C || "").trim();
    if (!X) return [];
    if (BS(X)) return [X];
    const { filename: z, subfolder: G } = YS(X);
    return z ? d([
      mi(t, { filename: z, subfolder: G, type: "temp" }),
      mi(t, { filename: z, subfolder: G, type: "output" }),
      mi(t, { filename: z, subfolder: G, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (C) => {
      var X;
      try {
        (X = kn(C)) == null || X.linkedImages.forEach((z, G, ne) => {
          var he;
          z != null && z.img && ((he = n == null ? void 0 : n.isImageLoadFailed) != null && he.call(n, z.img)) && ne.delete(G);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (C, X) => {
      var z;
      (z = C == null ? void 0 : C.delete) == null || z.call(C, `__ui__${String(X || "")}`);
    },
    linkedValue: (C, X) => {
      var q, fe, ce, oe;
      const z = String(X || ""), G = Array.isArray(C == null ? void 0 : C.inputs) ? C.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === z) : -1, ne = G >= 0 && C.graph ? C.getInputLink(G) : null;
      if (ne) {
        const U = s(ne.origin_id), E = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (q = U == null ? void 0 : U.data) == null ? void 0 : q.output,
          (fe = U == null ? void 0 : U.data) == null ? void 0 : fe.result,
          (ce = U == null ? void 0 : U.ui) == null ? void 0 : ce.output,
          (oe = U == null ? void 0 : U.ui) == null ? void 0 : oe.result
        ];
        for (const H of E) {
          if (!Array.isArray(H)) continue;
          const A = H[Number(ne.origin_slot || 0)];
          if (typeof A == "string" && A.trim()) return A;
        }
      }
      const he = Array.isArray(C == null ? void 0 : C.widgets) ? C.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === z) : null;
      return String((he == null ? void 0 : he.value) || "");
    },
    linkedVideoFile: g,
    loadPreferredExactLinkedImage: (C, X = [], z = null, G = "") => {
      var K;
      const ne = Array.isArray(X) ? X : [X], he = _(C, ne), fe = (Array.isArray(he == null ? void 0 : he.srcCandidates) && he.srcCandidates.length ? he.srcCandidates : [he == null ? void 0 : he.src]).map((k) => String(k || "").trim()).filter(Boolean);
      if (!fe.length) return null;
      const ce = d(fe.flatMap((k) => m(k)));
      if (!ce.length) return null;
      const oe = kn(C).linkedImages, U = String(G || ne.join("|") || "image_exact"), E = fe.join(`
`), H = oe.get(U);
      if (H && H.srcRaw === E && H.img) return H.img;
      const A = r || globalThis.Image;
      if (typeof A != "function") return null;
      const j = new A();
      (K = n == null ? void 0 : n.markImageLoading) == null || K.call(n, j, E);
      const T = { srcRaw: E, resolvedSrc: "", img: j };
      oe.set(U, T);
      let Y = -1;
      const pe = (k) => {
        var re, de, we;
        k === "ready" ? (re = n == null ? void 0 : n.markImageReady) == null || re.call(n, j, E) : (de = n == null ? void 0 : n.markImageFailed) == null || de.call(n, j, E), z == null || z(j), (we = C.setDirtyCanvas) == null || we.call(C, !0, !0);
      }, ae = () => {
        if (Y += 1, Y >= ce.length) {
          pe("failed");
          return;
        }
        T.resolvedSrc = ce[Y], j.src = T.resolvedSrc;
      };
      return j.onload = () => pe("ready"), j.onerror = () => {
        if (Y + 1 < ce.length) {
          ae();
          return;
        }
        pe("failed");
      }, ae(), j;
    },
    output: s,
    resolvePreferredExactLinkedSource: _,
    source: i,
    uiImage: (C, X, z, G = null) => {
      var U, E, H;
      const ne = a(C, X)[0] || null, he = i(ne);
      if (!he) return null;
      const q = `__ui__${X}`, fe = (U = z == null ? void 0 : z.get) == null ? void 0 : U.call(z, q);
      if (fe && fe.__panoSrc === he) return fe;
      const ce = r || globalThis.Image;
      if (typeof ce != "function") return null;
      const oe = new ce();
      return oe.__panoSrc = he, (E = n == null ? void 0 : n.markImageLoading) == null || E.call(n, oe, he), oe.onload = () => {
        var A;
        (A = n == null ? void 0 : n.markImageReady) == null || A.call(n, oe, he), G == null || G(oe);
      }, oe.onerror = () => {
        var A;
        (A = n == null ? void 0 : n.markImageFailed) == null || A.call(n, oe, he), G == null || G(oe);
      }, oe.src = he, (H = z == null ? void 0 : z.set) == null || H.call(z, q, oe), oe;
    },
    uiList: a,
    uiValue: l
  };
}
const XS = 1e-3;
function yd(e, t, r, n) {
  if (!bo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(XS / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function og(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function JS(e, t) {
  return Math.floor(e * t.fps);
}
function bd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Gf = 4;
function vd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, g) => f !== r[g])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = JS(a, l);
      for (let f = d; f < Math.min(r.length, d + Gf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Gf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function sg({
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
const _a = "sticker_image_1", ag = "external_image", fo = 0;
function xa(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function gc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ri(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function ou(e, t = fo) {
  return (e == null ? void 0 : e.version) !== 2 ? ri(e) : ri(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Ei(r, t).active,
    external: r.source.kind === "port",
    ...sd(r, t)
  }));
}
function Sd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ri(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function lg(e) {
  return String((e == null ? void 0 : e.id) || "") === _a || String((e == null ? void 0 : e.source_kind) || "") === ag;
}
function wd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : lg(t);
}
const cg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function ug(e) {
  return !lg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(cg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function dg(e) {
  const t = ug(e);
  return t ? cg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function fg(e, t = {}) {
  var te, C, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((z) => String((z == null ? void 0 : z.id) || "") === _a);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const z = String(((te = e.active) == null ? void 0 : te.selected_sticker_id) || "") === _a;
    return {
      state: {
        ...e,
        stickers: r.filter((G, ne) => ne !== n),
        active: z ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), g = t.pose && typeof t.pose == "object" ? t.pose : {}, _ = a ? g.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || g.hFOV_deg || 30, m = Math.min(179, Math.max(0.1, Number(_)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const z = xa(m, u, f), G = Number(((C = s == null ? void 0 : s.initial_pose) == null ? void 0 : C.hFOV_deg) ?? m), ne = xa(G, u, f), he = Number(((X = s == null ? void 0 : s.initial_pose) == null ? void 0 : X.vFOV_deg) ?? ne);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - z) <= 1e-6 && Math.abs(he - ne) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((q, fe) => fe === n ? {
          ...q,
          vFOV_deg: z,
          initial_pose: q.initial_pose && typeof q.initial_pose == "object" ? { ...q.initial_pose, vFOV_deg: ne } : q.initial_pose
        } : q)
      },
      changed: !0
    };
  }
  const h = r.reduce((z, G) => Math.max(z, Number((G == null ? void 0 : G.z_index) || 0)), -1), w = {
    yaw_deg: Number(g.yaw_deg || 0),
    pitch_deg: Number(g.pitch_deg || 0),
    hFOV_deg: m,
    vFOV_deg: d ? xa(m, u, f) : Number(g.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || m),
    rot_deg: Number(g.rot_deg ?? g.roll_deg ?? 0)
  }, ee = {
    ...s || {},
    id: _a,
    source_kind: ag,
    source_link_id: i,
    source_state_hash: o,
    ...w,
    initial_pose: { ...w },
    visible: !0,
    z_index: h + 1
  }, $ = n >= 0 ? r.map((z, G) => G === n ? ee : z) : [...r, ee];
  return { state: { ...e, stickers: $ }, changed: !0 };
}
function Kf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const ZS = ["IMAGE", "VIDEO"];
function Wf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => ZS.includes(r)) ? "2d" : null;
}
function QS(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Wf(n.type) ?? Wf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function pg(e, { pose: t = null } = {}) {
  return {
    connected: Kf(e, "sticker"),
    awaitingPose: !t && (Kf(e, "sticker_state") || QS(e, "sticker") !== "2d"),
    pose: t
  };
}
function Uf(e, t) {
  const r = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Gr({ version: 2, stickers: [r] }).stickers[0];
}
function hg(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null } = {}) {
  var u;
  const i = e.stickers.findIndex((f) => wd(e, f)), o = i >= 0 ? e.stickers[i] : null;
  if (!t) {
    if (!o) return { state: e, changed: !1 };
    const f = ((u = e.active) == null ? void 0 : u.selected_sticker_id) === o.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((g, _) => _ !== i),
        active: f ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (o && (n == null ? void 0 : n.placement) === "world" && n.replace && o.placement === "sky") {
    const f = { ...Uf(o.id, n), clip: o.clip, visible: o.visible, locked: o.locked };
    return { state: { ...e, stickers: e.stickers.map((g, _) => _ === i ? f : g) }, changed: !0 };
  }
  if (o || r) return { state: e, changed: !1 };
  const s = new Set(e.stickers.map((f) => f.id));
  let a = 1;
  for (; s.has(`sticker_${a}`); ) a += 1;
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Uf(`sticker_${a}`, n)] }, changed: !0 };
  const l = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), c = ld(`sticker_${a}`, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: l,
    vFOV_deg: l
  }, ri(e).reduce((f, g) => Math.max(f, g.z_index), -1) + 1), d = (n == null ? void 0 : n.keyframes) ?? {};
  return c.direction.keyframes = d.direction ?? [], c.roll.keyframes = d.roll ?? [], c.size.keyframes = (d.size ?? []).map((f) => ({ ...f, value: { ...f.value, vFOV_deg: f.value.hFOV_deg } })), { state: { ...e, stickers: [...e.stickers, c] }, changed: !0 };
}
function _d(e) {
  const t = ri(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: gc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: gc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: gc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function mg(e) {
  const t = Sd(e), r = wd(e, t), n = ri(e).some((a) => a && a.visible !== !1), i = _d(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: dg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function ew(e) {
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
function Bf(e, t) {
  const r = Sd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = ew(e), i = String(r.id || ""), o = _d(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function tw(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function nw(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return fg(e, t.value);
  if (t.type === "sync-port") return hg(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = _d(e).reduce((f, g) => Math.max(f, Number(g.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: xa(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, ld(o, ba(i.asset), d, l + 1)],
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
    return !i || !ri(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Sd(e);
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
    const i = ug(r);
    return !i || !dg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Bf(e, "front");
  if (t.type === "send-back") return Bf(e, "back");
  if (t.type === "delete-selected") {
    if (wd(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ri({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = tw(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? sd(r, fo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = Rv(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return vm(c, fo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function rw(e = {}) {
  return sg({
    ...e,
    reduce: nw,
    projectModel: mg
  });
}
const su = 2;
function vi(e, t) {
  return Math.floor(e * t + 0.5);
}
function iw(e, t) {
  return Math.floor(e * t + 1e-3);
}
function gg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const g = () => c && !d, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function m() {
    for (const j of f) j();
    f = [];
  }
  function h(j, T = {}) {
    return m(), u = { name: j, ...T }, a(), u;
  }
  function w(j, T, Y) {
    const pe = () => {
      u === j && Y();
    };
    e.addEventListener(T, pe), f.push(() => e.removeEventListener(T, pe));
  }
  function ee(j, T) {
    let Y = t.requestFrame(function pe(ae) {
      u === j && (T(ae), u === j && (Y = t.requestFrame(pe)));
    });
    f.push(() => t.cancelFrame(Y));
  }
  function $(j) {
    l = j, o(l);
  }
  function te() {
    return h(d ? "error" : "idle");
  }
  function C() {
    d = !0, te();
  }
  function X() {
    const { seekable: j } = e, T = j != null && j.length ? j.end(j.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(T) ? T : 1 / 0));
  }
  function z(j) {
    if (!g()) return j === "play" ? fe() : te();
    if (e.readyState < su) {
      const T = h("loading", { then: j });
      return w(T, "loadeddata", () => z(T.then)), w(T, "error", C), T;
    }
    return j === "play" && l / r() >= Number(e.duration) ? fe() : G(j, !1);
  }
  function G(j, T) {
    const Y = X();
    if (!e.ended && vi(Number(e.currentTime), r()) === vi(Y, r())) return ne(j);
    const pe = h("seeking", { then: j, frame: l, retried: T });
    return w(pe, "seeked", () => {
      const ae = vi(Number(e.currentTime), r()) === vi(X(), r()), K = l === pe.frame;
      ae || K && pe.retried ? ne(pe.then) : G(pe.then, K);
    }), w(pe, "error", C), e.currentTime = Y, pe;
  }
  function ne(j) {
    return j === "play" ? he() : (s(), te());
  }
  function he() {
    const j = h("playingVideo", { shown: !1 });
    if (w(j, "pause", () => e.ended ? q() : U()), w(j, "ended", q), w(j, "error", C), i() && vi(Number(e.duration), r()) >= n()) {
      const Y = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = Y;
      });
    }
    const T = (Y, pe) => {
      pe && !j.shown && (j.shown = !0, a()), ce(vi(Y, r()));
    };
    if (_()) {
      let Y = e.requestVideoFrameCallback(function pe(ae, K) {
        u === j && (T(Number(K.mediaTime), !0), u === j && (Y = e.requestVideoFrameCallback(pe)));
      });
      f.push(() => {
        var pe;
        return (pe = e.cancelVideoFrameCallback) == null ? void 0 : pe.call(e, Y);
      });
    } else
      ee(j, () => T(Number(e.currentTime), e.readyState >= su));
    return Promise.resolve(e.play()).catch(() => {
      u === j && U();
    }), j;
  }
  function q() {
    s(), fe();
  }
  function fe() {
    const j = h("playingClock", { startTs: t.now(), startFrame: l });
    return ee(j, (T) => ce(j.startFrame + Math.floor((T - j.startTs) / 1e3 * r()))), j;
  }
  function ce(j) {
    if (j < n()) {
      $(j);
      return;
    }
    if (!i()) {
      oe(n() - 1);
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), $(0), z("play");
  }
  function oe(j) {
    u.name === "playingVideo" ? (m(), e.pause(), $(Math.max(0, j)), s()) : $(Math.max(0, j)), z("still");
  }
  function U() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      m(), e.pause();
      const j = iw(Number(e.currentTime), r());
      $(Math.min(j, n() - 1)), s(), l === j ? te() : z("still");
    } else u.name === "playingClock" && oe(Math.min(l, n() - 1));
  }
  function E() {
    if (!A()) {
      if (l >= n() - 1 && $(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      z("play");
    }
  }
  function H(j) {
    const T = Math.max(0, Math.round(j));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", $(T), a();
      return;
    }
    u.name === "playingVideo" && (m(), e.pause()), $(T), z("still");
  }
  function A() {
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
      return A();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: E,
    stop: U,
    seek: H,
    toggle() {
      A() ? U() : E();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(j) {
      m(), c = !!j, d = !1, z("still");
    },
    dispose() {
      m(), c = !1, u = { name: "idle" };
    }
  };
}
function xd({ video: e, onCapture: t, onChange: r }) {
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
    if (!n || i || e.readyState < su) return;
    const { time: m, playing: h, fps: w } = o;
    if (m === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const ee = Number(e.duration), $ = Number.isFinite(ee) ? Math.min(m, ee) : m, te = Math.abs(Number(e.currentTime) - $) > 1.5 / w;
      if (e.ended && !te) return;
      te && d($), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
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
  function _(m) {
    n = m, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: m = "", time: h = null, playing: w = !1, fps: ee }) {
      m !== n && (_(m), r()), o = { time: h, playing: w, fps: ee }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(m, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : m;
    },
    dispose() {
      for (const [m, h] of Object.entries(g)) e.removeEventListener(m, h);
      _("");
    }
  };
}
function ka(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function ow({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const g = /* @__PURE__ */ new Set();
  let _ = null, m = null;
  const h = () => i().timeline.fps, w = (q) => q.stickers.find((fe) => fe.source.kind === "port"), ee = () => {
    const q = i(), fe = w(q);
    return hm(q, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        _ && fe ? og(fe.clip, h(), _.meta) : 0
      ),
      camera: c
    });
  }, $ = gg({
    video: e,
    clock: n,
    fps: h,
    span: ee,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), te = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, C = () => {
    u && (g.add(u), l());
  }, X = xd({ video: t, onCapture: a, onChange: l }), z = vd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", te), e.addEventListener("error", C);
  function G(q) {
    q !== u && (u = q, e.pause(), q ? e.src = q : e.removeAttribute("src"), e.load(), $.setSource(!!q));
  }
  function ne() {
    $.playing && $.stop();
  }
  function he(q) {
    const fe = w(q);
    m = _ && fe ? yd(fe.clip, $.frame, q.timeline.fps, _.meta) : null, X.follow({
      src: (_ == null ? void 0 : _.src) || "",
      time: m,
      playing: $.advancing,
      fps: q.timeline.fps
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
    pause: ne,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return _;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(q, fe) {
      return _ != null && _.frames ? z.picture(_.frames, m, _.meta, fe) : X.picture(q, fe);
    },
    toggle() {
      $.playing ? $.stop() : $.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: q, sources: fe, state: ce, sticker: oe = null }) {
      if (_ = q ? oe : null, !q)
        return ne(), G(""), he(ce), !1;
      for (const j of g)
        fe.includes(j) || g.delete(j);
      const U = fe.find((j) => j && !g.has(j)) || "", E = U !== d;
      E && (d = U, f = 0), G(d);
      const H = pm(ce, { camera: c }) || !!d && $.state !== "error" || !!_;
      return H || ne(), (E || !H || !$.playing && $.frame >= ee()) && $.frame !== fo && $.seek(fo), he(ce), H;
    },
    dispose() {
      $.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", te), e.removeEventListener("error", C), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const tl = Math.PI / 180, yr = 180 / Math.PI, sw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), aw = 260;
function Yf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function yg(e, t) {
  return t ? yg(t, e % t) : e;
}
function lw(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = yg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function hs(e, t) {
  const r = Yf(e), n = Yf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: lw(r, n) };
}
function Ai(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function bg(e) {
  const t = Ai(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Dr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function kd(e, t, r = sw) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, w, ee) => {
    const $ = h + w, te = Math.max(0, ee - 1), C = $ > te && $ > 0 ? te / $ : 1;
    return [h * C, w * C];
  }, [d, u] = c(l, s, n), [f, g] = c(o, a, i), _ = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - g)
  }, m = qu(_, t);
  return {
    x: _.x + (_.w - m.width) * 0.5,
    y: _.y + (_.h - m.height) * 0.5,
    w: m.width,
    h: m.height,
    safeRect: _
  };
}
function cw(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = kd({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * tl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Yh(l, Kh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = uw(c, go(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = Xu({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function vg(e) {
  return {
    yaw: jt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * yr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * yr, -89.9, 89.9)
  };
}
function uw(e, t) {
  const r = vg(e), n = go(r.yaw, r.pitch, 0), i = tc(t, e), o = {
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
    roll: Ml(Math.atan2(
      tc(a, n.up),
      tc(a, n.right)
    ) * yr)
  };
}
function Sg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = kd({ width: r, height: n }, Ti(e)), o = Ii(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Yh(e, Kh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = vg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * yr, 1, 179)
  };
}
function dw(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ii(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = Ju(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, g = n / i, _ = Math.tan(jc * tl), m = g >= 1 ? _ : _ * g, h = g >= 1 ? _ / g : _;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * yr,
      vFOV_deg: 2 * Math.atan(d / a) * yr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(m) * yr,
        vFOV_deg: 2 * Math.atan(h) * yr
      }
    }
  };
}
function Gi(e, t) {
  const r = Ai(e);
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
function fw(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Ii(r, e);
    return Xu(qu(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: ma(o, t) };
}
function qf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = hs(t, r);
  if (!o) return e;
  const s = Ti(e) >= 1;
  n && o.ratio >= 1 !== s && (o = hs(o.height, o.width));
  const a = fw(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function wg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ai(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Wh({
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
    const n = Ai(e);
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
    return Gi(e, (n) => qf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Gi(e, (n) => {
      const o = String(Dr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? hs(o[1], o[2]) : hs(Ti(n), 1);
      return s ? qf(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Gi(e, (i) => {
      const o = Ml(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Gi(e, (n) => {
    const i = Uh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Gi(e, (n) => {
    const i = Bh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Gi(e, (n) => {
    const i = kg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function _g({
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
function xg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Hh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Gh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function kg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * tl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, g = d * c + u * l, _ = Number(e.pitch_deg || 0) * tl, m = Math.max(0.25, Math.abs(Math.cos(_)));
  return {
    ...e,
    yaw_deg: jt(Number(e.yaw_deg || 0) - Math.atan(f) / m * yr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(g) * yr, -90, 90)
  };
}
function pw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return sg({
    readState: e,
    reduce: wg,
    projectModel: bg,
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
}), hw = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, mw = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: hw(t[2])
})), gw = {
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
}, Xf = Object.fromEntries(
  Object.entries(gw).map(([e, t]) => [e, {
    name: t.name,
    elements: mw(t.body)
  }])
), Vt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Xf, n) ? Xf[n] : null;
    });
    return (n, i) => r.value ? (Te(), De("svg", {
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
      (Te(!0), De(Qe, null, Pt(r.value.elements, (o, s) => (Te(), De(Qe, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Te(), De("path", Ir({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), De("circle", Ir({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), De("rect", Ir({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), De("line", Ir({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), De("polyline", Ir({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), De("polygon", Ir({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : mt("", !0)
      ], 64))), 128))
    ], 2)) : mt("", !0);
  }
}, Qt = {
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
    const t = e, r = dt(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Te(), Gn(My(e.tag), Ir({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: ah(() => [
        Be(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, yw = ["aria-expanded", "disabled"], bw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, vw = ["data-aspect", "disabled", "onClick"], Sw = { class: "pano-cutout-aspect-custom" }, ww = ["disabled"], _w = ["disabled"], xw = ["data-custom-width", "data-custom-height", "disabled"], Mg = {
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
    ]), o = /* @__PURE__ */ Bt("1"), s = /* @__PURE__ */ Bt("1"), a = /* @__PURE__ */ Bt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const m = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return m.length ? m.map((w) => {
        const ee = typeof w == "string" ? w : String((w == null ? void 0 : w.value) || ""), $ = typeof w == "string" ? w : String((w == null ? void 0 : w.label) || ee);
        return {
          ...typeof w == "object" && w ? w : {},
          value: ee,
          label: $,
          active: h ? ee === h : (w == null ? void 0 : w.active) === !0
        };
      }) : i.map((w) => ({
        ...w,
        active: w.value === h
      }));
    }), d = dt(() => {
      var h;
      const m = String(r.model.aspectLabel || "").trim();
      return m || String(((h = c.value.find((w) => w.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    Mi(d, (m) => {
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
    Sl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Ss(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function g(m) {
      const [h, w] = String(m.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: w,
        preserveOrientation: !0
      });
    }
    function _() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (m, h) => (Te(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Gn(Qt, {
        key: 0,
        icon: e.model.aspectIcon || tt(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (w) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (w) => u({ type: "toggle-aspect" }))
      }, [
        Be(Vt, {
          icon: e.model.aspectIcon || tt(ze).aspect
        }, null, 8, ["icon"]),
        Me("span", null, rt(d.value), 1),
        Be(Vt, {
          icon: tt(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, yw)),
      Vr(Me("div", bw, [
        (Te(!0), De(Qe, null, Pt(c.value, (w) => (Te(), De("button", {
          key: w.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: w.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": w.value,
          disabled: l.value,
          onClick: (ee) => g(w)
        }, rt(w.label), 11, vw))), 128)),
        Me("div", Sw, [
          Vr(Me("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (w) => o.value = w),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, ww), [
            [vf, o.value]
          ]),
          h[4] || (h[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Vr(Me("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (w) => s.value = w),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, _w), [
            [vf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: _
          }, "Apply", 8, xw)
        ])
      ], 512), [
        [Ci, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, kw = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Mw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Bt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = At(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = At(() => {
      }, ["stop"]))
    }, [
      Be(Qt, {
        icon: tt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", kw, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Pw = {
  class: "pano-view-unavailable",
  role: "status"
}, Tl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), De("div", Pw, rt(tt(Km)), 1));
  }
}, Nw = { class: "pano-cutout-node-surface" }, Aw = ["title", "disabled"], Cw = { class: "value" }, Iw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, Ew = {
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
    return (n, i) => (Te(), De("div", Nw, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = At(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = At(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be(Vt, {
            icon: tt(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(Qt, {
          icon: e.model.hasShot ? tt(ze).delete : tt(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Mg, {
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
          onDblclick: i[2] || (i[2] = At((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be(Vt, {
            icon: tt(ze).roll
          }, null, 8, ["icon"]),
          Me("span", Cw, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, Aw),
        Be(Qt, {
          icon: tt(ze).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Mw)
      ], 32),
      e.model.hasShot === !1 ? (Te(), De("div", Iw, " Choose a view · + Add Frame ")) : mt("", !0),
      e.model.viewUnavailable ? (Te(), Gn(Tl, { key: 1 })) : mt("", !0)
    ]));
  }
}, Pg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Bt(null);
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
      const _ = ((h = (m = u.target) == null ? void 0 : m.files) == null ? void 0 : h[0]) || null;
      if (_) {
        n("file-selected", { intent: g, file: _ });
        return;
      }
      n("file-cancelled", { intent: g });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Te(), De("input", {
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
}, Ow = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Fw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Bt(!1), r = Object.freeze([
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
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = At(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = At(() => {
      }, ["stop"]))
    }, [
      Be(Qt, {
        icon: tt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", Ow, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Tw = { class: "pano-stickers-node-surface" }, Dw = ["disabled"], Lw = ["aria-label", "data-tip"], Rw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Vw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, $w = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Bt(null);
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
    return (s, a) => (Te(), De("div", Tw, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = At(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = At(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be(Vt, {
            icon: tt(ze).fullscreen
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
          Be(Vt, {
            icon: tt(ze).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, Dw),
        Be(Qt, {
          icon: e.model.locked ? tt(ze).lock_closed : tt(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(Qt, {
          icon: tt(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Qt, {
          icon: tt(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(Qt, {
          icon: e.model.isExternalSelection ? tt(ze).back_initial : tt(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Fw)
      ], 32),
      e.model.playable === !0 ? (Te(), De("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = At(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = At(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be(Vt, {
          icon: e.model.playing ? tt(ze).pause : tt(ze).play
        }, null, 8, ["icon"])
      ], 40, Lw)) : mt("", !0),
      e.model.hasStickers === !1 ? (Te(), De("div", Rw, " Add Image to place a sticker ")) : mt("", !0),
      e.model.dropActive === !0 ? (Te(), De("div", Vw, "Drop image to add")) : mt("", !0),
      Be(Pg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Gn(Tl, { key: 3 })) : mt("", !0)
    ]));
  }
}, zw = { class: "pano-studio-node-surface" }, jw = {
  class: "pano-studio-node-status",
  role: "status"
}, Hw = { class: "pano-studio-node-shot" }, Gw = { class: "pano-studio-node-size" }, Kw = { class: "pano-studio-node-note" }, Ww = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", zw, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = At(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = At(() => {
        }, ["stop"]))
      }, [
        Me("div", jw, [
          Me("span", Hw, rt(e.model.status.shot), 1),
          Me("span", Gw, rt(e.model.status.size), 1),
          Me("span", Kw, rt(e.model.status.note), 1)
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
          Be(Vt, {
            icon: tt(ze).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), Gn(Tl, { key: 0 })) : mt("", !0)
    ]));
  }
}, Uw = 2048, au = 4096, Ma = (e) => Math.floor(e + 0.5), na = (e) => Math.max(2, 2 * Ma(e / 2));
function Ng(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function Bw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? Al.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Ma(e.timeline.length)) : t.length ? n = Math.max(1, Ma(Math.max(...t))) : r.length && (n = Math.max(1, Ma(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function Yw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = Uw : s = Math.floor(i * 360 / n);
  const a = Ng(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((g) => Pl(a, g).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [na(c), na(d)];
  if (Math.max(...u) <= au) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = au / Math.max(c, d);
  return { width: na(c * f), height: na(d * f), reducedFrom: u, defaulted: o };
}
function Ag(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function qw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Ag(e, t, String(r), n) } : null;
}
function Xw(e) {
  return e ? ai(xn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const yc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Jw(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Ng(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Ag(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: yc[a] };
    d = Yw(e, Bw(e), r, n, o);
  }
  const u = yc[a] ? [yc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${au} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Zw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Jw(r(), { ...t, bgWidth: n }));
  };
}
const Jf = 24;
function Qw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function es(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Cg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function lu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => es(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return es(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Cg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function e_(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => es(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => es(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return es(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Cg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Md(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Ig(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Fo(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function t_(e) {
  const t = go(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * _t * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * _t * 0.5)
  };
}
function gi(e, t, r) {
  return Yu(za(
    za(e.centerDir, ja(e.right, t)),
    ja(e.up, r)
  ));
}
function Pd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = t_(e), n = Fo(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    gi(r, -r.tanX, r.tanY),
    gi(r, r.tanX, r.tanY),
    gi(r, r.tanX, -r.tanY),
    gi(r, -r.tanX, -r.tanY)
  ].map((f) => Fo(f, t)), o = Array.from({ length: 4 }, (f, g) => {
    const _ = [];
    for (let m = 0; m <= 28; m += 1) {
      const h = m / 28;
      let w, ee;
      g === 0 ? (w = -r.tanX + 2 * r.tanX * h, ee = r.tanY) : g === 1 ? (w = r.tanX, ee = r.tanY - 2 * r.tanY * h) : g === 2 ? (w = r.tanX - 2 * r.tanX * h, ee = -r.tanY) : (w = -r.tanX, ee = -r.tanY + 2 * r.tanY * h);
      const $ = Fo(gi(r, w, ee), t);
      $ && _.push({ x: $.x, y: $.y });
    }
    return _;
  }), s = Fo(gi(r, 0, r.tanY), t), a = Fo(
    gi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * Jf,
      y: s.y + d / u * Jf
    },
    visible: !0
  };
}
function Zf(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Pd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = lu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = lu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function n_(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: jt(Math.atan2(n.x, n.z) * en),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * en
  };
}
function r_(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function i_(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * en;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let ra = null;
function Nd() {
  return ra || (ra = new Promise((e) => {
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
  }), ra);
}
function Un(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function o_(e, t = 1024) {
  const r = Math.max(1, Math.round(Un(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Un(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function s_(e, t, r) {
  const n = Un(t), i = Un(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Un(o.u0), a = Un(o.v0), l = Un(o.u1), c = Un(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Un(d.du)) * n,
    centerY: ((a + c) * 0.5 + Un(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Un(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Un(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function a_(e, t, r) {
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
function l_() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = s_(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = a_(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, g = t.get(f);
    if ((g == null ? void 0 : g.revision) === u) return { source: g.source, revision: u };
    const _ = n(c, l), m = Number(_.naturalWidth || _.width || 0), h = Number(_.naturalHeight || _.height || 0);
    if (!_.complete || m < 1 || h < 1) return null;
    const w = rn({ label: "raster-object" });
    w.width = Math.max(1, Math.round(s)), w.height = Math.max(1, Math.round(a));
    const ee = w.getContext("2d");
    return ee ? (d.wrapOffsets.forEach(($) => {
      ee.save(), ee.translate(d.centerX + $, d.centerY), ee.rotate(d.rotationRad), ee.scale(d.scale, d.scale), ee.drawImage(
        _,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), ee.restore();
    }), t.set(f, { revision: u, source: w }), { source: w, revision: u }) : null;
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
function c_(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function u_(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function d_({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, g, _) {
    if (!u || typeof _ != "function" || g.settled) return;
    let m = n.get(u);
    m || (m = /* @__PURE__ */ new Map(), n.set(u, m));
    const h = m.get(f);
    if ((h == null ? void 0 : h.entry) === g) {
      h.callback = _;
      return;
    }
    o(h);
    const w = { owner: u, key: f, entry: g, callback: _ };
    m.set(f, w), g.listeners.add(w);
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
  function c(u, f, g, _ = null) {
    const m = String(f || ""), h = String(g || "");
    if (!m || !h) return null;
    let w = r.get(m);
    if (w)
      r.delete(m), r.set(m, w);
    else {
      l(i - 1);
      const $ = e || globalThis.Image;
      if (typeof $ != "function") return null;
      const te = new $();
      w = { key: m, image: te, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(m, w), te.onload = () => a(w, !0), te.onerror = () => a(w, !1), te.src = h;
    }
    return w.settled || w.image.complete && Number(w.image.naturalWidth || w.image.width || 0) > 0 || s(u, m, w, _), w.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const $o = /* @__PURE__ */ new WeakMap();
function Eg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = $o.get(e);
  n || (n = [], $o.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = $o.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && $o.delete(e);
  };
}
function ti(e, ...t) {
  const r = $o.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Pa = Object.freeze({
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
}), Og = "PanoramaSuite.Editor.ViewControls", f_ = {
  id: Og,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Pa).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function p_(e) {
  return Object.hasOwn(Pa, e) ? Pa[e] : Pa.default;
}
function h_(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function m_(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const nl = "state_json";
function Rr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function g_(e) {
  var s, a;
  const t = Rr(e, nl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = gm(r, {
    coverage: (s = Rr(e, "coverage")) == null ? void 0 : s.value
  }), i = wg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Ad(e, t) {
  if (!e || Hn(e).coverageSyncInstalled) return;
  const r = Rr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, g, _, m;
    const o = n ? n(...i) : void 0, s = Hn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Lr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (g = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || g.call(f, !0, !0), (m = (_ = t == null ? void 0 : t.canvas) == null ? void 0 : _.setDirty) == null || m.call(_, !0, !0), o;
  }, Hn(e).coverageSyncInstalled = !0;
}
function y_(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Qf(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function b_(e) {
  var d, u, f, g, _, m;
  if (!e) return;
  const t = Rr(e, "coverage"), r = Rr(e, "bg_color"), n = Rr(e, nl), i = Rr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && y_(o) && (Qf(s) || s === ""))) return;
  let c = "360";
  if (Qf(s))
    try {
      c = String(Rn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (g = n.callback) == null || g.call(n, s), i && (i.value = a, (_ = i.callback) == null || _.call(i, a)), (m = e.setDirtyCanvas) == null || m.call(e, !0, !0);
}
function Na(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function cu(e, t, r) {
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
async function v_(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Hn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function zo(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Hn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
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
async function Fg(e, t = {}) {
  var n, i, o;
  await v_(e, t);
  const r = Array.from(((n = Hn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = el(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function S_(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Fg(e), r ? r.apply(this, n) : this.value;
  };
}
function w_(e) {
  var r;
  const t = St(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function Tg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return WS(this), r;
  };
}
function __(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function bc(e, {
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
    w_(u), Ad(u, t), Na(u, nl);
    const _ = Rr(u, nl);
    if (S_(u, _), _ && !_.__panoPreviewPatchedCb) {
      _.__panoPreviewPatchedCb = !0;
      const h = _.callback;
      _.callback = (w) => {
        var $;
        const ee = h ? h(w) : void 0;
        return ($ = u.setDirtyCanvas) == null || $.call(u, !0, !1), ee;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = Rr(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (m = h.callback) == null || m.call(h, "#00ff00")), cu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), g.stickers && Na(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), g.attached = !0, g.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, cu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), g.cutout && Na(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), g.attached = !0, g.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const g = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && g_(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && b_(this);
      const _ = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && _ && ti(this, "attach"), g;
    };
  }
  Tg(e);
}
function x_(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return __(this), n;
  }, Tg(e);
}
function k_(e, {
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
    Ad(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    cu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Na(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function M_({
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
    settings: [f_, Qb],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [xf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [xf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && bc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && bc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && bc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ha(d) && x_(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Ad(l, e), Ha(c) && k_(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const P_ = /\.(png|jpe?g|webp|gif|bmp)$/i;
function rr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : P_.test(String(e.name || "")) : !1;
}
function Cd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => rr(r)) : !1;
}
function N_(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Cd(l == null ? void 0 : l.dataTransfer)) {
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
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => rr(u));
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
async function jo(e, t = {}) {
  var s, a, l, c;
  if (!rr(e)) throw new TypeError("A supported image file is required.");
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
async function Si(e, { fetchApi: t } = {}) {
  if (!rr(e)) throw new TypeError("A supported image file is required.");
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
const ep = /* @__PURE__ */ new WeakSet(), tp = /* @__PURE__ */ new WeakSet();
let np = 0;
function uu(e) {
  if (!e || typeof e != "object" || tp.has(e)) return e;
  const t = String(e.type || "preview");
  return np += 1, e.type = `${t}:pano-${np}`, tp.add(e), e;
}
function rl(e) {
  if (!e || typeof e != "object" || ep.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, ep.add(e), e;
}
function Dg(e, t) {
  var n, i;
  if (!t || ((i = (n = rl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function A_({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: zt } = ca;
FS((e) => ii(e.id));
TS(pn);
const Id = d_(), { linkedVideoFile: Lg } = ig({ app: zt, api: pn });
function du() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ca == null ? void 0 : ca.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const C_ = "pano_suite.ui_settings.v1", I_ = 120, E_ = 2048;
function rp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(C_)) || "").trim();
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
function O_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function To(e) {
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
function F_() {
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
function fu(e) {
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
function Rg(e) {
  const t = fu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function T_(e, t, r) {
  Rg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function pu(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Ed(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Vg(e) {
  return Ha(Ed(e));
}
function ip(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = zt == null ? void 0 : zt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function $g(e) {
  const t = St(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = pu(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && vc(e), Cx(e, { ...n, mode: i }), this.activeBackend = pu(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || St(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      vc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      vc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function vc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  hu.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = du();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => ex(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function D_(e, t = "#00ff00") {
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
function L_(e) {
  var r, n;
  const t = (r = Hn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = br(e, "state_json")) == null ? void 0 : n.value) || "");
}
function vn(e) {
  var l, c;
  const t = Hn(e), r = L_(e), n = t.liveStateVersion, i = String(((l = br(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), o = Number(((c = br(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, s = t.parsedState;
  if (s && s.source === r && s.liveVersion === n && s.bg === i && s.coverage === o)
    return s.parsed;
  const a = e.__panoSceneStateV2 && typeof r == "string" ? ym(r, { backgroundColor: i, coverage: o, active: wm(e) }) : D_(r, i);
  return a.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, parsed: a }, a;
}
function br(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function R_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function zg(e, t, r = null) {
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
  return !n && r != null && (n = R_(e == null ? void 0 : e.graph, r)), n;
}
function V_(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function jg(e, t = []) {
  const r = V_(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    ar.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function op(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function il(e, t) {
  const r = op(e), n = op(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function $_(e, t) {
  var r;
  return zg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function z_(e, t = ar) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = jg(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return zS(e, s, $_);
}
const hu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = pn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, g, _;
        if (!o) return;
        const s = il(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...z_(o)].some((m) => il(n, m)) || (s && (Fd(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !eg(kn(o).executedOutputs, n, r.output) && (Gg(o), (u = (d = St(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (_ = (g = o.graph) == null ? void 0 : g.setDirtyCanvas) == null || _.call(g, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0));
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
function ol(e) {
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
function j_(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function H_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function G_(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function K_(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (j_(t)) return [t];
  const { filename: r, subfolder: n } = H_(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => ol({
    filename: r,
    subfolder: n,
    type: o
  }));
  return G_([...i, t]);
}
function W_(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? ol({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function ii(e) {
  const t = zt == null ? void 0 : zt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (il(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (il(s, i)) return t[s];
  }
  return null;
}
function $r(e, t, r = null) {
  const n = r || ii(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
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
      return ol({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = wn(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ol(e);
}
function ms(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Aa(e) {
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
function Od(e, t) {
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
function U_(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function B_(e, t) {
  try {
    const r = kn(e);
    r.ownOutputRev = c_(r.ownOutputRev);
    const n = U_(t);
    let i = "";
    for (const o of n)
      if (i = wn(o), i) break;
    i ? (Od(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function io(e) {
  var r;
  const t = kn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function Y_(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Zt(e, "background"))
    return io(e), null;
  const i = ii(n), o = gd(i, t, wn);
  if (!o)
    return io(e), null;
  const s = kn(e), a = Od(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  io(e);
  const d = jS({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function q_(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = jg(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], g = e.graph ? e.getInputLink(u) : null;
    if ((g == null ? void 0 : g.origin_id) == null) continue;
    const _ = g.origin_id, m = zg(e, u, _);
    if (!m) continue;
    const h = Number(g.origin_slot ?? 0), w = ii((m == null ? void 0 : m.id) ?? _), ee = Array.isArray(w == null ? void 0 : w.images) ? w.images : [];
    if (ee.length) {
      const X = [];
      h >= 0 && h < ee.length && X.push(ee[h]), X.push(...ee);
      for (const z of X.filter((G) => !wa(G))) {
        const G = wn(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: `${G}&pano_src=${iu(w)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (zt == null ? void 0 : zt.getNodeImageUrls) == "function" ? zt.getNodeImageUrls(m) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const X = [];
      h >= 0 && h < $.length && X.push($[h]), X.push(...$);
      for (const z of X) {
        const G = wn(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: G, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const te = Array.isArray(m == null ? void 0 : m.imgs) ? m.imgs : [];
    if (te.length) {
      const X = [];
      h >= 0 && h < te.length && X.push(te[h]), X.push(...te);
      for (const z of X) {
        const G = wn(z);
        if (G)
          return String((f == null ? void 0 : f.name) || ""), { src: G, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const C = (c = m == null ? void 0 : m.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (C) {
      let X = wn(C.value);
      if (X && !X.includes("/") && !X.includes(":") && (m.comfyClass === "LoadImage" || m.type === "LoadImage") && (X = pn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Zt(e, "background") ? ii(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = wn(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function X_(e, t = [], r = {}) {
  const n = q_(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = K_(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = kn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
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
    const _ = o[f];
    u.pendingResolvedSrc = _, d.src = _;
  };
  return d.onload = () => {
    var _;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, d.onerror = (_) => {
    if (f + 1 < o.length) {
      g();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((_ == null ? void 0 : _.type) || "error");
  }, g(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function Hg(e, t = [], r = null, n = {}) {
  const i = X_(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Gg(e) {
  e && (Id.disposeOwner(e), kn(e).linkedImages.clear(), io(e));
}
function J_(e) {
  e && (kn(e).linkedImages.clear(), io(e));
}
function Kg(e, t) {
  const r = St(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Do(e, t, r = "") {
  var s;
  const n = Kg(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < I_ ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function sp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Z_(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Sc(e, t) {
  var n, i;
  const r = (i = (n = St(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Q_(e) {
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
function ex(e, t) {
  return Dg(e, t);
}
function sl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = W_(r);
  if (!o && (n != null && n.external)) {
    if (!Zt(e, "external-sticker")) return null;
    const g = ii(e == null ? void 0 : e.id), _ = ((f = g == null ? void 0 : g.ui) == null ? void 0 : f.pano_sticker_input_images) || (g == null ? void 0 : g.pano_sticker_input_images) || [];
    for (const m of Array.isArray(_) ? _ : [_])
      if (o = wn(m), o) break;
  }
  if (!o) return null;
  const s = $r(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? kn(e).ownOutputRev : 0, c = n != null && n.external ? Od(o, l) : o, d = u_(o, a, l);
  return Id.get(e, d, c, (g, _) => {
    var m, h;
    _ && (n != null && n.external && kn(e).outputFromRun && ti(e, "image-loaded"), (h = (m = St(e).dom) == null ? void 0 : m.requestDraw) == null || h.call(m));
  }) || null;
}
function tx(e, t) {
  var f, g, _, m;
  const r = St(e), n = sx(e, t), i = ax(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const w = n.getGroupDisplayCanvas(h);
    return w ? {
      id: `paint_group:${h}`,
      source: w,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (m = (_ = r.rasterCache) == null ? void 0 : _.retain) == null || m.call(_, []), a;
  r.rasterCache || (r.rasterCache = l_()), r.rasterReady || (r.rasterReady = () => {
    var h, w;
    return (w = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : w.call(h);
  });
  const c = o_(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const w = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return w ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: w.source,
      revision: w.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function nx(e, t, r, n) {
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
  const i = ix(e, t, n);
  return i || null;
}
function rx(e, t) {
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
function ix(e, t, r) {
  var i, o;
  const n = rx(t, r || (zt == null ? void 0 : zt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function ox(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function sx(e, t) {
  var d, u, f, g, _, m, h, w, ee, $, te, C;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (g = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : g.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = ox(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = kl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((_ = t == null ? void 0 : t.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((w = s.paintRevision) == null ? void 0 : w.mask) !== c.mask || ((ee = s.paintRevision) == null ? void 0 : ee.groups) !== c.groups || (($ = s.paintRevision) == null ? void 0 : $.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((te = t == null ? void 0 : t.painting) == null ? void 0 : te.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function ax(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function ap(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function lx(e, t, r) {
  const n = Pd(t, r);
  n.visible && Md(e, n.boundaryEdges, { selected: !1 });
}
function cx(e, t, r) {
  const n = Pd(t, r);
  n.visible && (e.save(), Md(e, n.boundaryEdges, { selected: !0 }), Ig(e, n, { accent: Qw(t) }), e.restore());
}
function mu(e, t, r) {
  return $m(Ja(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function al(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? fo;
}
function ux(e) {
  return [Zt(e, "background") ? gd(ii(e.id), ["pano_input_videos"], wn) : "", Lg(e, ar)];
}
function dx(e) {
  var o;
  if (!Zt(e, "external-sticker")) return null;
  const t = ii(e.id), r = $r(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(wn), meta: r };
  const i = gd(t, ["pano_sticker_input_videos"], wn);
  return i ? { src: i, meta: r } : null;
}
function fx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Wg(e, t) {
  var n;
  const r = St(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: Gr({ ...t, painting: null }) }), r.scene.sceneState;
}
function px(e, t) {
  const r = Ol(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Zt(e, "background")) {
    const o = $r(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (Ym(e, ar)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === Lg(e, ar) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = Hg(e, ar, null, { preserveReadyWhilePending: !1 });
  return ms(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function hx(e, t) {
  var i, o, s;
  const r = String(((i = br(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Zt(e, a));
  return {
    stateText: String(((o = br(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: vn(e).coverage,
    bgColor: String(((s = br(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? px(e, t) : null,
    run: n && $r(e, "pano_output_size") || null,
    erp: $r(e, "pano_output_erp") || null,
    frame: $r(e, "pano_output_frame") || null
  };
}
const mx = 38;
function Fd(e) {
  const t = kn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function gx(e, t) {
  const r = kn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === wn(t.entry) ? r : null;
}
function yx(e, t) {
  const r = kn(e), n = St(e), i = t ? wn(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Fd(e), !i) return null;
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
      revision: Aa(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Xw(t.entry.rotation)
    }
  } : null;
}
function bx(e, t) {
  var r;
  return t ? (r = gx(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function vx(e, t, r) {
  const n = Wg(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = sl(e, s.id, qa(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = bd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Aa(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = sl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return ms(a) ? { media: a, revision: Aa(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : tx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: ms(r) ? { media: r, revision: Aa(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: jm(n, al(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Sx(e, t, r, n = null) {
  var G, ne, he, q, fe, ce, oe;
  const i = St(e), o = String(i.mode || "stickers");
  Kg(e, o);
  const s = vn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (he = (ne = (G = i.cutout) == null ? void 0 : G.session) == null ? void 0 : ne.refresh) == null || he.call(ne)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ce = (fe = (q = i.stickers) == null ? void 0 : q.session) == null ? void 0 : fe.refresh) == null || ce.call(fe));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Do(e, !1, "");
    const { width: U, height: E } = ap(n.frame), H = mx, A = Math.min(l / U, (c - H) / E);
    d.drawImage(n.frame, (l - U * A) / 2, H + (c - H - E * A) / 2, U * A, E * A);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, g = (f == null ? void 0 : f.media) || (i.playback ? fx(i.playback) : Y_(e, ["pano_input_videos"], () => {
    var U, E;
    return (E = (U = i.dom) == null ? void 0 : U.requestDraw) == null ? void 0 : E.call(U);
  })) || Hg(
    e,
    ar,
    () => {
      var U, E;
      return (E = (U = i.dom) == null ? void 0 : U.requestDraw) == null ? void 0 : E.call(U);
    },
    { preserveReadyWhilePending: !1 }
  ), _ = ms(g);
  let m = null;
  const h = () => f ? { background: f, layers: [] } : vx(e, s, g), w = (U, E) => {
    m || (m = h());
    const H = r.render({ width: U.w, height: U.h, camera: E, ...m });
    return H && d.drawImage(H.canvas, H.x, H.y, H.width, H.height, U.x, U.y, U.w, U.h), !!H;
  };
  if (o === "cutout") {
    const U = Q_(s), E = ap(g), H = U ? Ie(si(U).aspect, 0.1, 10) : _ ? Ie(Number(E.width / E.height), 0.05, 20) : 1, A = kd(u, H);
    i.cutoutFrame = A;
    let j = "none";
    const T = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (U)
      if (g && !_)
        j = "loading";
      else if (_) {
        const Y = dw({ width: l, height: c }, A, U);
        [
          !Y.fallback || w(Y.fallback.rect, Qo(Y.fallback.shot)),
          w(Y.rect, Qo(Y.shot)),
          !Y.fallback || w(A, Qo(U))
        ].every(Boolean) || (j = "loading");
      } else
        j = "empty";
    else {
      const Y = i.lastCutoutShot;
      Y ? (i.view = Sg(Y, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), _ ? w(u, Ja(i.view, l, c)) || (j = "loading") : g ? j = "loading" : j = "empty";
    }
    _ || r.release(), r.failed && j === "loading" && (j = "none"), U && (i.lastCutoutShot = { ...U }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(A.x, A.y, A.w, A.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(A.x + 0.5, A.y + 0.5, Math.max(0, A.w - 1), Math.max(0, A.h - 1)), d.restore()), j === "loading" ? (Sc(e, !1), Do(e, !0, T)) : j === "empty" ? (Sc(e, !0), Do(e, !1, "")) : (Sc(e, !1), Do(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let ee = !1;
  (!g || _) && (m = h(), !m.background && !m.layers.length ? (r.release(), ee = !0) : ee = w(u, Ja(i.view, l, c)));
  const $ = !ee && !r.failed;
  Do(e, $, $ ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), $ && Z_(d, u, sp(t, u));
  const te = mu(e, l, c);
  !g && ee && wx(d, te, sp(t, u));
  const C = String(((oe = s == null ? void 0 : s.active) == null ? void 0 : oe.selected_sticker_id) || ""), X = ou(s, al(e)), z = ee && e.__panoStudio !== !0 ? X.find((U) => String((U == null ? void 0 : U.id) || "") === C && (U == null ? void 0 : U.visible) !== !1) : null;
  ee && !f && X.filter((U) => U !== z && (U == null ? void 0 : U.visible) !== !1 && (U.external || U.source_kind === "external_image")).filter((U) => !ms(sl(e, U.id, null, { external: !0 }))).forEach((U) => lx(d, U, te)), z && cx(d, z, te);
}
function lp(e, t, r, n, i = 1) {
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
function wx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Tn(c, a));
    lp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Tn(a, c));
    lp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Tn(0, 0) },
    { name: "Right", dir: Tn(90, 0) },
    { name: "Back", dir: Tn(180, 0) },
    { name: "Left", dir: Tn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function gu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function _x(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Wn(e, t) {
  return _x(e, t) ? !1 : (gu(e), !0);
}
function cp() {
  var r;
  const e = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function xx(e) {
  var r;
  if (!e) return;
  const t = (r = zt == null ? void 0 : zt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function kx(e, t = 360, r = 260) {
  const n = St(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !Rg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function Mx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = St(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function up(e, t = null, r = 0, n = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && Px(e, 180, t);
    }
  };
}
function Px(e, t = 180, r = null) {
  if (!e) return;
  const n = St(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Ho(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Nx = /* @__PURE__ */ new WeakMap();
function Ug(e, t) {
  return eg(Nx, e, t) ? !1 : (B_(e, t), Gg(e), Ho(e), !0);
}
async function Ax(e) {
  var r, n;
  const t = await VS(e, zt, pn);
  t && (Ug(e, t), (n = (r = St(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Cx(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = St(e), i = kn(e), o = Hn(e), s = Vg(e);
  if (s && !r) {
    Ed(e);
    return;
  }
  s && kx(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: ip(e)
  }.signature || ip(e), pu(e), e == null || e.id, n.mode, e.addDOMWidget, fu(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, g = f ? 0 : 56, _ = f ? 0 : aw, m = document.createElement("div");
  if (F_(), m.className = "pano-node-preview-dom", m.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && m.classList.add("pano-node-preview--no-preview"), m.setAttribute("data-capture-wheel", "true"), m.tabIndex = 0, m.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    _ > 0 ? `min-height:${_}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const se = rl(uu(
      e.addDOMWidget(du(), "preview", m, up(e, null))
    ));
    Ho(e), n.dom = { widget: se, root: m, requestDraw: () => {
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
  const w = rn({ label: "node.surface" });
  w.style.cssText = [
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
  const ee = document.createElement("div");
  ee.style.cssText = [
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
  ].join(";"), ee.textContent = "Connect ERP image", h.appendChild(w), h.appendChild(ee), m.appendChild(h);
  const $ = jh(m), te = document.createElement("div");
  te && (te.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", te.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", m.appendChild(te)), T_(e, 120, 120), Ho(e);
  let C = null;
  try {
    Mx(e, g, () => {
      var se, Fe;
      return (Fe = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Fe.call(se);
    }), C = rl(uu(e.addDOMWidget(
      du(),
      "preview",
      m,
      up(
        e,
        () => {
          var se, Fe;
          return (Fe = (se = n.dom) == null ? void 0 : se.requestDraw) == null ? void 0 : Fe.call(se);
        },
        g,
        _,
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
  }, z = Zw(), G = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(b)));
  }, ne = Wm(G), he = /* @__PURE__ */ mo(a ? {
    ...mg(vn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...bg(vn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((se) => ({ value: se, label: se }))
  });
  let q = null;
  if (a && e.__panoSceneStateV2) {
    const [se, Fe] = [0, 1].map(() => {
      const Ge = _s(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ge), Ge;
    }), Ae = rn({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Re = rn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ye = ow({
      video: se,
      stickerVideo: Fe,
      createImage: (Ge, We) => {
        const ht = new Image();
        return ht.onload = We, ht.onerror = We, ht.src = Ge, ht;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => vn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: G,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var We;
        if (!(se.videoWidth > 0 && se.videoHeight > 0)) return;
        const Ge = Math.min(1, E_ / se.videoWidth);
        Ae.width = Math.round(se.videoWidth * Ge), Ae.height = Math.round(se.videoHeight * Ge), (We = Ae.getContext("2d")) == null || We.drawImage(se, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, G();
      },
      onStickerCapture: () => {
        var Ge;
        Fe.videoWidth > 0 && Fe.videoHeight > 0 && (Re.width = Fe.videoWidth, Re.height = Fe.videoHeight, (Ge = Re.getContext("2d")) == null || Ge.drawImage(Fe, 0, 0), Re.__panoFrameIdx += 1, G());
      },
      onChange: () => {
        he.playing = Ye.playing, G();
      }
    });
    q = { playback: Ye, video: se, still: Ae, stickerVideo: Fe, stickerStill: Re, stickerSource: "" }, n.playback = q;
  }
  const fe = () => {
    var ht;
    const { playback: se, still: Fe, stickerStill: Ae } = q, Re = ka(h, !!((ht = e.flags) != null && ht.collapsed)), Ye = se.source, Ge = Re ? dx(e) : null, We = se.follow({
      shown: Re,
      sources: Re ? ux(e) : [],
      state: vn(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== q.stickerSource && (q.stickerSource = (Ge == null ? void 0 : Ge.src) || "", ss(Ae)), se.source !== Ye && (ss(Fe), Fe.__panoFrameIdx = 0), he.playable = We, he.playing = se.playing;
  }, ce = () => {
    var Fe, Ae;
    const se = ((Fe = i.ownOutputVideo) == null ? void 0 : Fe.player) ?? null;
    se && !ka(h, !!((Ae = e.flags) != null && Ae.collapsed)) && se.pause(), a && (he.playable = !!se && !se.failed(), he.playing = !!(se != null && se.playing));
  }, oe = () => {
    var se;
    q == null || q.playback.pause(), (se = i.ownOutputVideo) == null || se.player.pause();
  };
  let U = null;
  const E = (a ? rw : pw)({
    readState: () => vn(e),
    publishLiveState: (se) => {
      se ? (U = se, o.liveState = se) : (o.liveState === U && (o.liveState = null), U = null), o.liveStateVersion += 1, o.parsedState = null, G();
    },
    commitState: (se) => {
      var Re, Ye, Ge, We;
      const Fe = br(e, "state_json");
      if (!Fe) return;
      _m(e, se.active);
      const Ae = xm(e, se);
      km(e, Ae, String(Fe.value ?? "")) || (Fe.value = Ae, (Re = Fe.callback) == null || Re.call(Fe, Ae), o.parsedState = null, (Ye = e.setDirtyCanvas) == null || Ye.call(e, !0, !0), (We = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || We.call(Ge, !0, !0));
    },
    onChange: (se) => Object.assign(he, se)
  }), A = a ? Eg(e, (se = "sync", Fe = null) => {
    var sn;
    if (!a || !e.graph || !E || E.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Kt = Zt(e, "external-sticker");
      return E.apply({
        type: "sync-port",
        value: pg(e, {
          pose: Kt ? $r(e, "pano_sticker_input_pose", Fe) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Kt) => String((Kt == null ? void 0 : Kt.name) || "") === "sticker_image") : -1, Re = Ae >= 0 ? ((sn = e.getInputLink(Ae)) == null ? void 0 : sn.id) ?? null : null;
    if (Re == null)
      return E.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Zt(e, "external-sticker")) return !1;
    const Ye = $r(e, "pano_sticker_input_pose", Fe), Ge = Array.isArray(Ye) ? Ye[0] : Ye, We = String($r(e, "pano_sticker_input_state_hash", Fe) ?? ""), ht = n.view || { yaw: 0, pitch: 0 }, bt = vn(e), Tt = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === "sticker_image_1"), Nt = sl(e, "sticker_image_1", null, { external: !0 }), Mn = Ge && typeof Ge == "object" ? Ge : Tt || { yaw_deg: ht.yaw, pitch_deg: ht.pitch, hFOV_deg: 30, rot_deg: 0 };
    return E.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: We,
        pose: Mn,
        imageWidth: Number((Nt == null ? void 0 : Nt.naturalWidth) || (Nt == null ? void 0 : Nt.width) || 0),
        imageHeight: Number((Nt == null ? void 0 : Nt.naturalHeight) || (Nt == null ? void 0 : Nt.height) || 0)
      }
    });
  }) : () => {
  };
  let j = 0;
  const T = async (se) => {
    if (!a || !E || !rr(se)) return !1;
    oe();
    const Fe = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...n.view || { yaw: 0, pitch: 0 } };
    j += 1, he.importing = !0;
    const Ye = zo(e, `add:${Fe}`, async () => {
      const Ge = await jo(se), We = await Si(se, {
        fetchApi: (ht, bt) => pn.fetchApi(ht, bt)
      });
      return re(), E.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Fe,
          asset: We,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Ye;
    } catch {
      return !1;
    } finally {
      j = Math.max(0, j - 1), he.importing = j > 0, G();
    }
  };
  let Y = null, pe = null, ae = null, K = !1;
  const k = () => {
    var se;
    return ae && (clearTimeout(ae), ae = null), K ? (K = !1, ((se = E == null ? void 0 : E.commitGesture) == null ? void 0 : se.call(E)) ?? !1) : !1;
  }, re = () => {
    var Re, Ye, Ge;
    const se = k(), Fe = (Y == null ? void 0 : Y.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    if (Y = null, pe = null, Fe != null) {
      try {
        (Re = w.hasPointerCapture) != null && Re.call(w, Fe) && ((Ye = w.releasePointerCapture) == null || Ye.call(w, Fe));
      } catch {
      }
      w.style.cursor = "grab";
    }
    const Ae = ((Ge = E == null ? void 0 : E.commitGesture) == null ? void 0 : Ge.call(E)) ?? !1;
    return se || Ae;
  }, de = () => {
    var Re, Ye, Ge;
    const se = k(), Fe = Y == null ? void 0 : Y.pointerId;
    if (Y = null, Fe != null) {
      try {
        (Re = w.hasPointerCapture) != null && Re.call(w, Fe) && ((Ye = w.releasePointerCapture) == null || Ye.call(w, Fe));
      } catch {
      }
      w.style.cursor = "grab";
    }
    const Ae = ((Ge = E == null ? void 0 : E.cancelGesture) == null ? void 0 : Ge.call(E)) ?? !1;
    return se || Ae;
  }, we = () => re();
  E && o.flushers.add(we);
  let _e = null, N = !1;
  if (te && E)
    try {
      Nd(), _e = Hu(l ? Ww : a ? $w : Ew, {
        model: he,
        onAction: (se) => {
          var Re, Ye, Ge;
          if ((se == null ? void 0 : se.type) === "toggle-playback") {
            re(), q ? q.playback.toggle() : (Re = i.ownOutputVideo) == null || Re.player.toggle(), G();
            return;
          }
          if (oe(), (se == null ? void 0 : se.type) === "open-editor") {
            re(), a || (he.aspectOpen = !1), (Ye = n.openEditor) == null || Ye.call(n);
            return;
          }
          if (a) {
            if ((se == null ? void 0 : se.type) === "add-image-file") {
              T(se.file);
              return;
            }
            E.apply(se) && G();
            return;
          }
          if ((se == null ? void 0 : se.type) === "toggle-aspect") {
            he.aspectOpen = !he.aspectOpen;
            return;
          }
          if ((se == null ? void 0 : se.type) === "close-aspect") {
            he.aspectOpen = !1;
            return;
          }
          let Fe = se;
          if ((se == null ? void 0 : se.type) === "add-frame") {
            const We = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Fe = {
              ...se,
              ...cw(We, {
                width: w.width,
                height: w.height
              })
            };
          } else if ((se == null ? void 0 : se.type) === "delete-frame") {
            const We = Ai(vn(e));
            We && (n.view = Sg(We, {
              width: w.width,
              height: w.height
            }));
          }
          const Ae = ((Ge = n.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          he.aspectOpen = !1, E.apply({ ...Fe, safeRect: Ae }) && G();
        }
      }), _e.mount(te), N = !0;
    } catch {
      _e = null, N = !1;
    }
  const le = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    q && fe(), G();
  }) : null;
  le == null || le.observe(h);
  const b = (se) => {
    var Ae, Re, Ye;
    X.raf = 0, X.inTick = !0;
    let Fe = !1;
    try {
      if (Fe = y.stepInertia(se), X.needsDraw || Fe) {
        X.needsDraw = !1, q ? fe() : ce();
        const Ge = l ? hx(e, q) : null, We = Ge ? qw(Ge) : null, ht = () => Wg(e, vn(e)), bt = Ge && ka(h, !!((Ae = e.flags) != null && Ae.collapsed)) ? yx(e, We) : null;
        if ((Re = e.flags) != null && Re.collapsed || Sx(e, w, ne, bt), he.viewUnavailable = ne.failed, l) {
          const Tt = z({ ...Ge, display: bx(e, We) }, ht);
          Tt && (he.status = Tt);
        }
      }
    } finally {
      X.inTick = !1;
    }
    (Fe || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(b)), O_() && (!n.debugLastTs || se - n.debugLastTs > 1200) && (n.debugLastTs = se, n.mode, fu(e), To(m), To(h), To(w), To(m.parentElement), To((Ye = m.parentElement) == null ? void 0 : Ye.parentElement), Number(w.width || 0), Number(w.height || 0), void 0);
  }, y = Bu({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (se) => {
      n.view = se;
    },
    getViewportSize: () => {
      const se = w.getBoundingClientRect();
      return {
        w: Math.max(1, Number(se.width || w.clientWidth || 0)),
        h: Math.max(1, Number(se.height || w.clientHeight || 0))
      };
    },
    getInvert: () => {
      const se = rp();
      return {
        x: se.invert_view_x ? -1 : 1,
        y: se.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      G();
    }
  }), I = a ? h : m, v = (se) => {
    const Fe = w.getBoundingClientRect();
    return {
      x: (Number(se.clientX) - Fe.left) * (w.width / Math.max(1, Fe.width)),
      y: (Number(se.clientY) - Fe.top) * (w.height / Math.max(1, Fe.height))
    };
  }, V = (se) => {
    var Re, Ye;
    if (!a || l || !d) return;
    const Fe = vn(e), Ae = Zf(
      ou(Fe, al(e)),
      String(((Re = Fe == null ? void 0 : Fe.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      v(se),
      mu(e, w.width, w.height)
    );
    if (!Ae) {
      w.style.cursor = "grab";
      return;
    }
    if (((Ye = Ae.item) == null ? void 0 : Ye.locked) === !0) {
      w.style.cursor = "default";
      return;
    }
    w.style.cursor = Ae.hit.cursor || "default";
  };
  w.addEventListener("pointerdown", (se) => {
    var ht, bt, Tt, Nt, Mn, qe, sn, Kt, ci, Wr, ui;
    if (!Wn(se, I) || se.button !== 0) return;
    if (!a) {
      const on = Ai(vn(e)), yn = n.cutoutFrame;
      if (!on) {
        (ht = m.focus) == null || ht.call(m, { preventScroll: !0 }), (bt = w.setPointerCapture) == null || bt.call(w, se.pointerId), w.style.cursor = "grabbing", y.startDrag(se.clientX, se.clientY, se.pointerId);
        return;
      }
      if (on.locked === !0 || !yn || !E) return;
      const Ur = v(se);
      let kr;
      if (se.shiftKey) {
        const cr = _g({
          frame: yn,
          point: Ur,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!cr) return;
        kr = { kind: "roll", pointerId: se.pointerId, rollGesture: cr };
      } else {
        const cr = ((Tt = vn(e)) == null ? void 0 : Tt.ui_settings) || rp();
        kr = {
          kind: "pan",
          pointerId: se.pointerId,
          startPoint: Ur,
          startShot: { ...on },
          focalPx: Ii(yn, on),
          invertX: cr.invert_view_x === !0,
          invertY: cr.invert_view_y === !0
        };
      }
      re(), (Nt = m.focus) == null || Nt.call(m, { preventScroll: !0 }), (Mn = w.setPointerCapture) == null || Mn.call(w, se.pointerId), w.style.cursor = "grabbing", E.beginGesture(), Y = kr;
      return;
    }
    if (!d) return;
    const Fe = v(se), Ae = vn(e), Re = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ye = mu(e, w.width, w.height);
    (sn = m.focus) == null || sn.call(m, { preventScroll: !0 });
    const Ge = () => Zf(ou(Ae, al(e)), Re, Fe, Ye);
    let We = l ? null : Ge();
    if (We && (q != null && q.playback.playing) && (oe(), We = Ge()), We && E) {
      if (y.stopMotion(), re(), String(((Kt = We.item) == null ? void 0 : Kt.id) || "") !== Re && E.apply({ type: "select-sticker", id: We.item.id }), ((ci = We.item) == null ? void 0 : ci.locked) === !0) {
        G();
        return;
      }
      const on = Fe, yn = We.geometry.center;
      pe = {
        active: !0,
        kind: We.hit.kind,
        pointerId: se.pointerId,
        startPoint: on,
        startCenter: { ...yn },
        startSticker: { ...We.item },
        startDistance: Math.max(1, Math.hypot(on.x - yn.x, on.y - yn.y)),
        startAngle: Math.atan2(on.y - yn.y, on.x - yn.x),
        projection: Ye
      }, E.beginGesture(), (Wr = w.setPointerCapture) == null || Wr.call(w, se.pointerId), w.style.cursor = We.hit.kind === "rotate" ? "grabbing" : We.hit.kind === "move" ? "move" : We.hit.cursor, G();
      return;
    }
    (ui = w.setPointerCapture) == null || ui.call(w, se.pointerId), w.style.cursor = "grabbing", y.startDrag(se.clientX, se.clientY, se.pointerId);
  }), w.addEventListener("pointermove", (se) => {
    if (!a) {
      if (!Y) {
        if (!y.state.drag.active) return;
        Wn(se, I), y.moveDrag(se.clientX, se.clientY, "pano");
        return;
      }
      if (Y.pointerId !== se.pointerId || !E) return;
      if (Wn(se, I), Y.kind === "pan") {
        const Ae = v(se);
        E.updateGesture({
          type: "pan-camera",
          startShot: Y.startShot,
          dx: Ae.x - Y.startPoint.x,
          dy: Ae.y - Y.startPoint.y,
          focalPx: Y.focalPx,
          invertX: Y.invertX,
          invertY: Y.invertY
        });
        return;
      }
      const Fe = xg(Y.rollGesture, v(se), se);
      if (!Fe) return;
      Y.rollGesture = Fe.gesture, E.updateGesture({ type: "set-roll", value: Fe.rollDeg });
      return;
    }
    if (!pe && !y.state.drag.active) {
      V(se);
      return;
    }
    if (pe) {
      if (pe.pointerId !== se.pointerId || !E) return;
      Wn(se, I);
      const Fe = v(se);
      let Ae = pe.startSticker;
      if (pe.kind === "move")
        Ae = n_(
          pe.startSticker,
          {
            x: pe.startCenter.x + Fe.x - pe.startPoint.x,
            y: pe.startCenter.y + Fe.y - pe.startPoint.y
          },
          pe.projection
        );
      else if (pe.kind === "scale") {
        const Re = Math.hypot(Fe.x - pe.startCenter.x, Fe.y - pe.startCenter.y);
        Ae = r_(pe.startSticker, pe.startDistance, Re);
      } else if (pe.kind === "rotate") {
        const Re = Math.atan2(Fe.y - pe.startCenter.y, Fe.x - pe.startCenter.x);
        Ae = i_(pe.startSticker, pe.startAngle, Re, se.shiftKey === !0);
      }
      E.updateGesture({ type: "set-transform", value: Ae }), G();
      return;
    }
    !d || !y.state.drag.active || (Wn(se, I), y.moveDrag(se.clientX, se.clientY, "pano"));
  });
  const L = () => {
    var Fe, Ae;
    if (!Y && !pe) {
      if (!y.state.drag.active) return;
      y.endDrag(), w.style.cursor = "grab", G();
      return;
    }
    if (!E) return;
    const se = (Y == null ? void 0 : Y.pointerId) ?? (pe == null ? void 0 : pe.pointerId);
    Y = null, pe = null;
    try {
      (Fe = w.hasPointerCapture) != null && Fe.call(w, se) && ((Ae = w.releasePointerCapture) == null || Ae.call(w, se));
    } catch {
    }
    E.cancelGesture(), w.style.cursor = "grab", G();
  }, J = (se, Fe = !1) => {
    var Ae, Re, Ye, Ge;
    if (!a) {
      if (!Y) {
        if (!y.state.drag.active) return;
        Wn(se, I), (Ae = w.releasePointerCapture) == null || Ae.call(w, se.pointerId), w.style.cursor = "grab", y.endDrag(), G();
        return;
      }
      if (Y.pointerId !== se.pointerId || !E) return;
      Wn(se, I), Y = null, (Re = w.releasePointerCapture) == null || Re.call(w, se.pointerId), w.style.cursor = "grab", Fe ? E.cancelGesture() : E.commitGesture(), V(se), G();
      return;
    }
    if (pe) {
      if (pe.pointerId !== se.pointerId || !E) return;
      Wn(se, I), pe = null, (Ye = w.releasePointerCapture) == null || Ye.call(w, se.pointerId), w.style.cursor = "grab", Fe ? E.cancelGesture() : E.commitGesture(), G();
      return;
    }
    !d || !y.state.drag.active || (Wn(se, I), (Ge = w.releasePointerCapture) == null || Ge.call(w, se.pointerId), w.style.cursor = "grab", y.endDrag(), G());
  };
  w.addEventListener("pointerup", J), w.addEventListener("pointercancel", (se) => J(se, !0)), w.addEventListener("lostpointercapture", L), w.addEventListener("pointerleave", (se) => {
    !a && Y || pe || y.state.drag.active && J(se);
  });
  const O = (se) => {
    const Fe = document.activeElement;
    if (Fe !== m && !m.contains(Fe)) return;
    if (se.key === "Escape" && (Y || pe) && E) {
      L(), gu(se);
      return;
    }
    if (!a || l || se.key !== "Delete" && se.key !== "Backspace" || !E) return;
    const Ae = se.target, Re = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Ae != null && Ae.isContentEditable || he.canDelete === !0 && (oe(), re(), E.apply({ type: "delete-selected" }) && G(), gu(se));
  };
  window.addEventListener("keydown", O, !0);
  const F = A_({
    requestFrame: (se) => requestAnimationFrame(se),
    cancelFrame: (se) => cancelAnimationFrame(se),
    restore: (se) => xx(se)
  }), x = (se) => {
    var Ae, Re, Ye, Ge, We, ht;
    if (!Wn(se, I)) return;
    if (!a) {
      const bt = Ai(vn(e));
      if (bt && bt.locked !== !0 && E) {
        const Tt = $a(se);
        Tt !== 0 && (K || (re(), E.beginGesture(), K = !0), E.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (ae && clearTimeout(ae), ae = setTimeout(k, 180), G()) : E.hasGestureChanges() || (E.cancelGesture(), K = !1));
      } else if (!bt) {
        const Tt = cp();
        y.applyWheelEvent(se) && G(), F.schedule(Tt);
      }
      (Ae = se.preventDefault) == null || Ae.call(se), (Re = se.stopPropagation) == null || Re.call(se), (Ye = se.stopImmediatePropagation) == null || Ye.call(se);
      return;
    }
    if (!d) return;
    const Fe = cp();
    y.applyWheelEvent(se) && G(), (Ge = se.preventDefault) == null || Ge.call(se), (We = se.stopPropagation) == null || We.call(se), (ht = se.stopImmediatePropagation) == null || ht.call(se), F.schedule(Fe);
  }, R = a ? [h, w] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((se) => {
    R.forEach((Fe) => Fe.addEventListener(se, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((se) => {
    w.addEventListener(se, (Fe) => Wn(Fe, I)), h.addEventListener(se, (Fe) => Wn(Fe, I));
  });
  const Z = br(e, "state_json");
  let me = null, ue = null;
  Z && !Z.__panoPreviewPatchedCb && (me = Z.callback, ue = (se) => {
    const Fe = me ? me(se) : void 0;
    return G(), Fe;
  }, Z.callback = ue, Z.__panoPreviewPatchedCb = ue);
  const ve = br(e, "bg_color");
  let Se = null, be = null;
  ve && !ve.__panoPreviewPatchedCb && (Se = ve.callback, be = (se) => {
    const Fe = Se ? Se(se) : void 0;
    return G(), Fe;
  }, ve.callback = be, ve.__panoPreviewPatchedCb = be);
  const Q = l ? br(e, "output_size") : null, ge = Q == null ? void 0 : Q.callback, B = Q ? (se) => {
    const Fe = ge ? ge(se) : void 0;
    return G(), Fe;
  } : null;
  Q && (Q.callback = B);
  const p = e.onRemoved, P = e.onResize, S = e.onExecuted, M = e.onDragOver, W = e.onDragDrop;
  let ye = null;
  const D = () => {
    a && (he.dropActive = !0, ye && clearTimeout(ye), ye = setTimeout(() => {
      ye = null, he.dropActive = !1;
    }, 140));
  }, ie = c ? function(se) {
    return (M ? M.apply(this, arguments) : !1) === !0 ? !0 : Cd(se == null ? void 0 : se.dataTransfer) ? (D(), !0) : !1;
  } : null, Ne = c ? function(se) {
    var Re;
    if ((W ? W.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Re = se == null ? void 0 : se.dataTransfer) == null ? void 0 : Re.files) || []).find((Ye) => rr(Ye));
    return Ae ? (ye && clearTimeout(ye), ye = null, he.dropActive = !1, T(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = ie, e.onDragDrop = Ne);
  const xe = c ? N_(m, {
    onActive: (se) => {
      if (se) {
        D();
        return;
      }
      ye && clearTimeout(ye), ye = null, he.dropActive = !1;
    },
    onDrop: (se) => {
      T(se);
    }
  }) : () => {
  }, Pe = function(se) {
    i.outputFromRun = !0;
    const Fe = Ug(e, se);
    ti(e, Fe ? "executed" : "sync", se), G();
    const Ae = S ? S.apply(this, arguments) : void 0;
    return Ho(e), Ae;
  };
  e.onExecuted = Pe;
  const Ce = e.onConnectionsChange, Le = function(se, Fe) {
    const Ae = zf(e, se, Fe, md), Re = zf(e, se, Fe, ar), Ye = arguments, Ge = Ce ? Ce.apply(this, Ye) : void 0, We = () => {
      X.destroyed || (Re && J_(e), Ae && ti(e, "connection-change"), Ho(e), G());
    };
    return We(), queueMicrotask(We), Ge;
  };
  e.onConnectionsChange = Le;
  const je = function() {
    const se = P ? P.apply(this, arguments) : void 0;
    return St(this).userResized = !0, G(), se;
  };
  e.onResize = je;
  const Ke = function() {
    return $e(), hu.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ke;
  const $e = () => {
    var se, Fe, Ae, Re, Ye, Ge, We;
    X.destroyed = !0, (se = le == null ? void 0 : le.disconnect) == null || se.call(le), a ? re() : de(), w.removeEventListener("lostpointercapture", L), xe(), $(), window.removeEventListener("keydown", O, !0), o.flushers.delete(we), (Fe = E == null ? void 0 : E.destroy) == null || Fe.call(E), (Ae = _e == null ? void 0 : _e.unmount) == null || Ae.call(_e), q && (q.playback.dispose(), q.video.remove(), q.stickerVideo.remove(), n.playback === q && (n.playback = null)), ne.dispose(), n.scene = null, (Ye = (Re = n.rasterCache) == null ? void 0 : Re.dispose) == null || Ye.call(Re), n.rasterCache = null, n.rasterReady = null, A(), F.dispose(), ye && clearTimeout(ye), ye = null, Id.disposeOwner(e), io(e), Fd(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((Ge = n.cutout) == null ? void 0 : Ge.session) === E && (n.cutout = null), ((We = n.stickers) == null ? void 0 : We.session) === E && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === je && (e.onResize = P), e.onExecuted === Pe && (e.onExecuted = S), e.onConnectionsChange === Le && (e.onConnectionsChange = Ce), ue && (Z == null ? void 0 : Z.callback) === ue && (Z.callback = me), ue && (Z == null ? void 0 : Z.__panoPreviewPatchedCb) === ue && delete Z.__panoPreviewPatchedCb, be && (ve == null ? void 0 : ve.callback) === be && (ve.callback = Se), be && (ve == null ? void 0 : ve.__panoPreviewPatchedCb) === be && delete ve.__panoPreviewPatchedCb, B && Q.callback === B && (Q.callback = ge), e.onDragOver === ie && (e.onDragOver = M), e.onDragDrop === Ne && (e.onDragDrop = W), e.onRemoved === Ke && (e.onRemoved = p);
  };
  n.restore = $e, n.cutout = E && N && !a ? { session: E, model: he } : null, n.stickers = E && N && a ? { session: E, model: he } : null, n.dom = {
    widget: C,
    root: m,
    canvas: w,
    requestDraw: G,
    state: X,
    emptyHintEl: ee,
    nodeSurface: n.cutout
  }, hu.register(e), e.graph && ti(e, "attach"), G();
}
function dp(e, t = {}) {
  $g(e).attach({
    ...t,
    mode: "cutout"
  });
}
function fp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Vg(e) && !r) {
    Ed(e);
    return;
  }
  $g(e).attach(t);
}
function Ix(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Ex(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let g = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (g = Math.min(g, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * g)),
    height: Math.max(1, Math.round(c * g))
  };
}
function Ox({
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
    const _ = l();
    return _ === a || (a = _, i(_)), _;
  }, d = () => c();
  return (g = t == null ? void 0 : t.addEventListener) == null || g.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var _;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((_ = t.exitFullscreen) == null ? void 0 : _.call(t));
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
    var _, m, h;
    if (!s) {
      if (s = !0, (_ = t == null ? void 0 : t.removeEventListener) == null || _.call(t, "fullscreenchange", d), l())
        try {
          const w = (m = t.exitFullscreen) == null ? void 0 : m.call(t);
          (h = w == null ? void 0 : w.catch) == null || h.call(w, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const Fx = { class: "pano-preview-node-surface" }, Tx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", Fx, [
      Be(Qt, {
        icon: e.model.fullscreen ? tt(ze).fullscreen_close : tt(ze).fullscreen,
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
      e.model.viewUnavailable ? (Te(), Gn(Tl, { key: 0 })) : mt("", !0)
    ]));
  }
}, ia = 140, Dx = 180, pp = 40, wc = 10;
function hp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function mp(e, t) {
  const r = hp(e), n = hp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function gp(e) {
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
function oo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return oo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return gp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = oo(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : gp(e);
}
function Bg(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Lx(e) {
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
function yu(e) {
  var i;
  const t = (i = ir) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (mp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (mp(o, r)) return t[o];
  return null;
}
function Rx(e) {
  var n, i;
  const t = yu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = oo(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function Vx(e, t = "erp_image") {
  var g, _, m, h, w, ee, $;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((te) => String((te == null ? void 0 : te.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((te, C) => String((te == null ? void 0 : te.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(C))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (m = (_ = (g = ir) == null ? void 0 : g.graph) == null ? void 0 : _.getNodeById) == null ? void 0 : m.call(_, o), a = yu(o), l = yu(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (w = a == null ? void 0 : a.ui) == null ? void 0 : w.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const te of c)
    if (Array.isArray(te))
      for (const C of te) {
        const X = oo(C);
        if (X) return X;
      }
  let d = [];
  try {
    d = typeof ((ee = ir) == null ? void 0 : ee.getNodeImageUrls) == "function" ? ir.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const te of d) {
      const C = oo(te);
      if (C) return C;
    }
  if (s) {
    const te = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const C of te) {
      const X = oo(C);
      if (X) return X;
    }
  }
  const u = ($ = s == null ? void 0 : s.widgets) == null ? void 0 : $.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? pn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function _c(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function yp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !Bg(o) || r <= 1 || n <= 1) {
    _c(t, r, n);
    return;
  }
  if (s.failed) {
    _c(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: Ja(i, r, n),
    background: { media: o, revision: Lx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : _c(t, r, n);
}
function bp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class $x {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Wm(() => this.requestDraw()), this.controller = Bu({
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
        `min-height:${ia}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = rn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return ia;
        },
        getHeight() {
          return ia;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = rl(uu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(ia, Number(o.minHeight || 0)),
            minWidth: Math.max(Dx, Number(o.minWidth || 0))
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
      return Nd(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ mo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Ox({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = Hu(Tx, {
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
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = jh(r), t.addEventListener("pointerdown", (o) => {
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
      Ix(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Bg(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? ka(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = ir.canvas) != null && n.graph) || this.node.graph === ir.canvas.graph);
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
      return bp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const o = nx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !bp(o.x, o.y, s))
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
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - wc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - pp - wc);
    return { x: wc, y: pp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), yp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Km : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Ex(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Rx(this.node);
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
    const r = Vx(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), yp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, g, _, m, h, w;
    if (((r = rg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (_ = (g = this.root) == null ? void 0 : g.remove) == null || _.call(g);
    } catch {
    }
    try {
      Dg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((w = (h = (m = this.node) == null ? void 0 : m.widgets) == null ? void 0 : h.find) == null ? void 0 : w.call(h, (ee) => (ee == null ? void 0 : ee.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), Lr(this.node).runtime = null;
  }
}
function zx(e, t = {}) {
  if (!e || Lr(e).runtime) return;
  const r = new $x(e, t);
  Lr(e).runtime = r, r.attach();
}
function Yg(e, t, r) {
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
function Td(e) {
  return !!(e != null && e.prototype);
}
function gs(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function jx(e, t = {}) {
  Td(e) || zx(e, {
    ...t,
    onOpen: gs(e, t.onOpen)
  });
}
function Hx(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Td(e)) {
    fp(e, {
      ...n,
      onOpen: gs(e, t.onOpen)
    });
    return;
  }
  Yg(e, "stickers_node_preview", (i) => {
    fp(i, {
      ...n,
      onOpen: gs(i, t.onOpen)
    });
  });
}
function Gx(e, t = {}) {
  if (!Td(e)) {
    dp(e, {
      ...t,
      onOpen: gs(e, t.onOpen)
    });
    return;
  }
  Yg(e, "cutout_preview", (r) => {
    dp(r, {
      ...t,
      onOpen: gs(r, t.onOpen)
    });
  });
}
const Fn = {
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
function vp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Kx({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), Wx = new Set(Object.values(ft));
function Ux({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(m) {
    try {
      m();
    } catch (h) {
      i(h);
    }
  }
  function g() {
    !o && !s && !a && (o = e(_));
  }
  function _(m) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const ee of h.values()) f(() => ee(m));
      if (a) return;
      const w = l;
      l = /* @__PURE__ */ new Set(), (w.size || n()) && f(() => r(m, w));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && g();
  }
  return {
    requestDraw(m) {
      if (!Wx.has(m)) throw new Error(`Unknown draw reason: ${m}`);
      m === ft.STATE && (u += 1), l.add(m), g();
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
const Bx = { class: "pano-floating-right" }, Yx = {
  key: 0,
  class: "pano-floating-space"
}, qx = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Xx = ["data-settled"], Jx = ["data-ready", "data-settled"], Zx = ["aria-label", "data-tip"], Qx = {
  key: 1,
  class: "pano-camera-preview-label"
}, ek = {
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
    return (t, r) => (Te(), De(Qe, null, [
      Me("div", Bx, [
        e.space ? Vr((Te(), De("div", Yx, [
          Me("div", qx, [
            (Te(!0), De(Qe, null, Pt(e.space.modes, (n) => (Te(), Gn(Qt, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(Qt, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ci, e.space.visible]
        ]) : mt("", !0),
        (Te(!0), De(Qe, null, Pt(e.buttons, (n) => (Te(), Gn(Qt, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Vr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
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
          e.previewToggle.visible ? (Te(), De("button", {
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
          ], 8, Zx)) : mt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), De("div", Qx, rt(e.preview.label || "Preview unavailable"), 1)) : mt("", !0)
        ], 14, Jx)
      ], 8, Xx), [
        [Ci, e.preview.visible]
      ])
    ], 64));
  }
}, tk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, nk = ["y2", "transform"], rk = ["transform"], ik = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Vr((Te(), De("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), De("svg", tk, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (s) => (Te(), De("line", {
          key: s,
          class: gt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, nk))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, rk),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ci, e.model.visible === !0]
    ]);
  }
}, ok = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(Mg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(Qt, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(ik, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, sk = ["aria-label"], ak = { class: "pano-canvas-confirm-title" }, lk = { class: "pano-canvas-confirm-text" }, ck = { class: "pano-canvas-confirm-actions" }, uk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, dk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Bt(null), n = /* @__PURE__ */ Bt(null);
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
      const _ = o()[0] || u;
      (m = _ == null ? void 0 : _.focus) == null || m.call(_);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var w;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), g = n.value;
      if (!f.length) {
        u.preventDefault(), (w = g == null ? void 0 : g.focus) == null || w.call(g);
        return;
      }
      const _ = f[0], m = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === _ || h === g || !(g != null && g.contains(h))) && (u.preventDefault(), m.focus());
        return;
      }
      (h === m || !(g != null && g.contains(h))) && (u.preventDefault(), _.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Mi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, bl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Ss(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Te(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(d, ["self"])
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
        Me("div", ak, rt(e.model.title), 1),
        Me("div", lk, rt(e.model.text), 1),
        Me("div", ck, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", uk, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, sk)
    ], 512)) : mt("", !0);
  }
}, fk = ["data-paint-pane"], pk = ["hidden"], hk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], mk = ["aria-pressed", "disabled"], gk = ["hidden"], yk = { class: "pano-paint-color-pop-head" }, bk = { class: "pano-paint-color-field" }, vk = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Sk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, wk = { class: "pano-paint-color-field" }, _k = { class: "pano-paint-alpha-wrap" }, xk = ["value"], kk = { "data-paint-alpha-value": "" }, Mk = ["hidden"], Pk = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Nk = ["data-paint-history-index", "aria-label", "disabled"], Ak = ["data-paint-footer"], Ck = ["data-paint-group"], Ik = ["hidden"], Ek = ["value", "disabled"], Ok = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Fk = ["hidden"], Tk = {
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
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), De(Qe, null, Pt(e.panes, (o) => {
        var s;
        return Te(), De("div", {
          key: o.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), De("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), De(Qe, null, Pt(e.paintSwatches, (a) => (Te(), De("button", {
              key: a.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: It(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, hk))), 128)),
            Me("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, mk),
            Me("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: It({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Me("div", yk, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", bk, [
                Me("div", vk, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", Sk, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", wk, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", _k, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, xk),
                  Me("span", kk, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", Pk, [
                  (Te(!0), De(Qe, null, Pt(e.state.historyEntries || [], (a) => (Te(), De("button", {
                    key: a.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: It(r(a.color))
                  }, null, 14, Nk))), 128))
                ])
              ], 8, Mk)
            ], 12, gk)
          ], 10, pk)) : mt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), De(Qe, null, Pt(o.tools, (a) => {
                var l;
                return Te(), Gn(Qt, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, Ck),
            Me("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Ek),
              Me("span", Ok, rt(e.state.sizeText || "10"), 1)
            ], 10, Ik),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(Qt, {
                icon: tt(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Fk)
          ], 8, Ak)
        ], 10, fk);
      }), 128))
    ], 2));
  }
}, Dk = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Bt(null), n = /* @__PURE__ */ Bt(null), i = /* @__PURE__ */ Bt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Te(), De(Qe, null, [
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
}, Lk = ["aria-label"], Rk = ["data-tip", "aria-pressed"], Vk = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: It({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), De(Qe, null, Pt(e.buttons, (o) => (Te(), De("button", Ir({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, Rk))), 128))
    ], 12, Lk));
  }
}, $k = {
  key: 0,
  class: "pano-cutout-menu"
}, zk = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, jk = ["data-aspect"], Hk = ["data-action", "aria-label", "data-tip", "disabled"], Gk = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), De(Qe, null, Pt(e.model.items || [], (n) => (Te(), De(Qe, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), De("div", $k, [
          Me("button", zk, [
            Be(Vt, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), De(Qe, null, Pt(n.choices || [], (i) => (Te(), De("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, jk))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), Gn(Vk, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), De("button", {
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
        ], 8, Hk))
      ], 64))), 128))
    ], 4));
  }
}, Kk = {
  key: 0,
  class: "pano-easing"
}, Wk = { class: "pano-section-title" }, Uk = { class: "pano-easing-range" }, Bk = { class: "pano-easing-modes" }, Yk = ["aria-pressed", "onClick"], qk = ["viewBox"], Xk = ["x", "y"], Jk = ["x1", "y1", "x2", "y2"], Zk = ["d"], Qk = ["x1", "y1", "x2", "y2"], eM = ["x1", "y1", "x2", "y2"], tM = ["cx", "cy"], nM = ["cx", "cy"], rM = { class: "pano-easing-note" }, Nr = 132, yi = 14, iM = {
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
    ], o = /* @__PURE__ */ Bt(null), s = dt(() => {
      var _;
      return Array.isArray((_ = r.model) == null ? void 0 : _.easing) ? r.model.easing : null;
    }), a = (_) => yi + _ * Nr, l = (_) => yi + (1 - _) * Nr, c = dt(() => {
      var ee;
      if (((ee = r.model) == null ? void 0 : ee.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [_, m, h, w] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(_)} ${l(m)} ${a(h)} ${l(w)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((_) => _.toFixed(2)).join(", ") : "");
    function u(_) {
      var m;
      return JSON.stringify(_.easing) === JSON.stringify((m = r.model) == null ? void 0 : m.easing);
    }
    function f(_, m) {
      n("timeline", { type: "easing", easing: _, commit: m });
    }
    function g(_, m) {
      var te;
      if (_.button !== 0 || !s.value) return;
      const h = _.currentTarget;
      (te = h.setPointerCapture) == null || te.call(h, _.pointerId);
      let w = null;
      const ee = (C) => {
        const X = o.value.getBoundingClientRect(), z = X.width / (Nr + yi * 2), G = ((C.clientX - X.left) / z - yi) / Nr, ne = 1 - ((C.clientY - X.top) / z - yi) / Nr;
        w = [...w || s.value], w[m] = Math.round(Math.min(1, Math.max(0, G)) * 100) / 100, w[m + 1] = Math.round(Math.min(1, Math.max(0, ne)) * 100) / 100, f(w, !1);
      }, $ = () => {
        h.removeEventListener("pointermove", ee), h.removeEventListener("pointerup", $), h.removeEventListener("pointercancel", $), w && f(w, !0);
      };
      h.addEventListener("pointermove", ee), h.addEventListener("pointerup", $), h.addEventListener("pointercancel", $);
    }
    return (_, m) => e.model ? (Te(), De("div", Kk, [
      Me("div", Wk, [
        m[2] || (m[2] = Me("span", null, "Easing", -1)),
        Me("span", Uk, rt(e.model.label), 1)
      ]),
      Me("div", Bk, [
        (Te(), De(Qe, null, Pt(i, (h) => Me("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (w) => f(h.easing, !0)
        }, rt(h.label), 9, Yk)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Nr + yi * 2} ${Nr + yi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Nr,
          height: Nr
        }, null, 8, Xk),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, Jk),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, Zk),
        s.value ? (Te(), De(Qe, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, Qk),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, eM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: m[0] || (m[0] = (h) => g(h, 0))
          }, null, 40, tM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: m[1] || (m[1] = (h) => g(h, 2))
          }, null, 40, nM)
        ], 64)) : mt("", !0)
      ], 8, qk)) : mt("", !0),
      Me("div", rM, [
        e.model.mixed ? (Te(), De(Qe, { key: 0 }, [
          Ro("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Qe, { key: 1 }, [
          Ro("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Qe, { key: 2 }, [
          Ro("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Te(), De(Qe, { key: 3 }, [
          Ro("cubic-bezier(" + rt(d.value) + ")", 1)
        ], 64)) : mt("", !0)
      ])
    ])) : mt("", !0);
  }
}, oM = {
  class: "pano-side",
  "data-side": ""
}, sM = { class: "pano-side-head" }, aM = { class: "pano-side-title" }, lM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, cM = {
  key: 0,
  class: "pano-side-scroll"
}, uM = { class: "pano-inspector" }, dM = { class: "pano-ui-row pano-coverage-row" }, fM = ["data-selected"], pM = ["aria-pressed", "disabled"], hM = ["aria-pressed", "disabled"], mM = {
  key: 0,
  class: "pano-section-title"
}, gM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, yM = {
  class: "pano-picker",
  "data-picker": "selection"
}, bM = ["disabled"], vM = { class: "pano-picker-label" }, SM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, wM = ["hidden"], _M = ["data-selection-id"], xM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, kM = {
  key: 2,
  class: "pano-state-actions"
}, MM = ["disabled"], PM = ["data-key"], NM = { class: "pano-field-group-values" }, AM = ["title", "onPointerdown"], CM = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], IM = ["data-key"], EM = ["min", "max", "step", "value", "disabled", "data-param-key"], OM = ["min", "max", "step", "value", "disabled", "data-param-key"], FM = ["open"], TM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, DM = { class: "pano-ui-settings-body" }, LM = { class: "pano-ui-row" }, RM = ["data-selected"], VM = ["aria-pressed"], $M = ["aria-pressed"], zM = { class: "pano-ui-row" }, jM = ["data-selected"], HM = ["aria-pressed"], GM = ["aria-pressed"], KM = {
  key: 1,
  class: "pano-side-footer"
}, WM = ["data-action"], UM = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = dt(() => {
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
      const f = c.currentTarget, g = c.clientX, _ = Number(u.value) || 0;
      let m = !1;
      f.setPointerCapture(c.pointerId);
      const h = (ee) => {
        if (!m && Math.abs(ee.clientX - g) < 3) return;
        m = !0;
        const $ = _ + (ee.clientX - g) * d.drag * (ee.shiftKey ? 0.1 : 1);
        u.value = String(Number($.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, w = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", w), f.removeEventListener("pointercancel", w), f.removeEventListener("lostpointercapture", w), m ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", w), f.addEventListener("pointercancel", w), f.addEventListener("lostpointercapture", w);
    }
    return (c, d) => {
      var u, f, g, _, m;
      return Te(), De("div", oM, [
        Me("div", sM, [
          Me("div", aM, [
            Me("span", lM, [
              Be(Vt, {
                icon: tt(ze).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), De("div", cM, [
          Me("div", uM, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", dM, [
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
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "360", 8, pM),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "180", 8, hM)
              ], 8, fM)
            ]),
            e.model.transformTitle !== !1 ? (Te(), De("div", mM, [...d[3] || (d[3] = [
              Me("span", null, "Transform", -1)
            ])])) : mt("", !0),
            e.model.selectionPicker ? (Te(), De("div", gM, [
              Me("label", null, rt(e.model.selectionPicker.label), 1),
              Me("div", yM, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", vM, [
                    e.model.selectionPicker.currentIcon ? (Te(), De("span", SM, [
                      Be(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, bM),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), De(Qe, null, Pt(e.model.selectionPicker.items || [], (h) => (Te(), De("button", {
                    key: h.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: h.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": h.id
                  }, [
                    h.icon ? (Te(), De("span", xM, [
                      Be(Vt, {
                        icon: h.icon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, rt(h.label), 1)
                  ], 10, _M))), 128))
                ], 8, wM)
              ])
            ])) : mt("", !0),
            e.model.copyStateButton ? (Te(), De("div", kM, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be(Vt, {
                  icon: tt(ze).copy
                }, null, 8, ["icon"]),
                Me("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, MM)
            ])) : mt("", !0),
            Me("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), De(Qe, { key: 0 }, Pt(e.model.notes, (h) => (Te(), De("div", {
                key: h,
                class: "pano-param-note"
              }, rt(h), 1))), 128)) : (Te(!0), De(Qe, { key: 1 }, Pt(e.model.rows || [], (h) => (Te(), De(Qe, {
                key: h.key
              }, [
                h.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": h.key
                }, [
                  Me("label", null, rt(h.label), 1),
                  Me("div", NM, [
                    (Te(!0), De(Qe, null, Pt(h.fields, (w) => (Te(), De("div", {
                      key: w.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: gt(["pano-axis", { disabled: s(w, e.model) }]),
                        title: w.label,
                        onPointerdown: (ee) => l(ee, w)
                      }, rt(w.short), 43, AM),
                      Me("input", {
                        ref_for: !0,
                        ref: (ee) => {
                          a[w.key] = ee;
                        },
                        type: "number",
                        min: w.min,
                        max: w.max,
                        step: w.step,
                        value: w.displayValue,
                        disabled: s(w, e.model),
                        "aria-label": `${h.label} ${w.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": w.key
                      }, null, 8, CM)
                    ]))), 128))
                  ])
                ], 8, PM)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": h.key
                }, [
                  Me("label", null, rt(h.label), 1),
                  Me("input", {
                    type: "range",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].value,
                    disabled: s(h.fields[0], e.model),
                    style: It(o(h.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": h.fields[0].key
                  }, null, 12, EM),
                  Me("input", {
                    type: "number",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].displayValue,
                    disabled: s(h.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": h.fields[0].key
                  }, null, 8, OM)
                ], 8, IM))
              ], 64))), 128))
            ], 2),
            Be(iM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (h) => n("timeline", h))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", TM, [
                  Be(Vt, {
                    icon: tt(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", DM, [
                Me("div", LM, [
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
                    }, "Normal", 8, VM),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, $M)
                  ], 8, RM)
                ]),
                Me("div", zM, [
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
                    }, "Normal", 8, HM),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, GM)
                  ], 8, jM)
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
            ], 8, FM)) : mt("", !0)
          ])
        ])) : mt("", !0),
        (e.model.footerButtons || []).length ? (Te(), De("div", KM, [
          (Te(!0), De(Qe, null, Pt(e.model.footerButtons, (h) => (Te(), De("button", {
            key: h.action,
            class: gt(["pano-btn", { "pano-btn-primary": h.primary === !0 }]),
            type: "button",
            "data-action": h.action
          }, rt(h.label), 11, WM))), 128))
        ])) : mt("", !0)
      ]);
    };
  }
}, BM = { class: "pano-timeline-bar" }, YM = ["aria-label", "data-tip"], qM = ["aria-label", "data-tip"], XM = { class: "pano-timeline-time" }, JM = ["data-tip"], ZM = { key: 0 }, QM = ["min", "max", "value"], eP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, tP = ["max", "value"], nP = ["aria-expanded"], rP = ["inert"], iP = { class: "pano-timeline-name" }, oP = ["aria-pressed", "aria-label", "data-tip", "onClick"], sP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, aP = ["disabled", "aria-expanded", "aria-label", "onClick"], lP = ["title", "aria-current", "onClick"], cP = ["data-keyed", "aria-label", "onClick"], uP = ["onPointerdown"], dP = ["onPointerdown"], fP = ["onPointerdown"], pP = ["onPointerdown"], hP = ["aria-label", "data-tip", "onPointerdown"], mP = { key: 0 }, gP = ["onPointerdown"], yP = ["aria-label", "data-tip", "onPointerdown"], bP = { key: 0 }, vP = 10, SP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Ia(0), playing: /* @__PURE__ */ Ia(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Bt(null), o = /* @__PURE__ */ Bt(null), s = /* @__PURE__ */ Bt(1), a = /* @__PURE__ */ Bt(0), l = /* @__PURE__ */ Bt(!1);
    let c = null, d = null, u = null;
    Sl(() => {
      c = new ResizeObserver(([E]) => {
        s.value = Math.max(1, E.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([E]) => {
        a.value = E.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Ss(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), g = dt(() => r.playhead.frame.value), _ = dt(() => r.playhead.playing.value), m = dt(() => fv(g.value, Number(r.model.fps || 1))), h = dt(() => s.value / f.value), w = (E) => `${E / f.value * 100}%`, ee = dt(() => Mv(f.value, h.value));
    function $(E) {
      const H = i.value.getBoundingClientRect(), A = Math.floor((E - H.left) / Math.max(1, H.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, A));
    }
    function te(E, H, A) {
      const j = Math.ceil(vP / Math.max(1e-6, h.value)), T = new Map(H.map((Y) => [Y.frame, Y.full]));
      return Pv(H.map((Y) => Y.frame), j).map((Y, pe) => ({
        ...Y,
        key: `${E}:${pe}`,
        partial: Y.frames.some((ae) => !T.get(ae)),
        selected: Y.frames.some((ae) => A.includes(ae))
      }));
    }
    const C = dt(() => {
      const E = /* @__PURE__ */ new Map();
      for (const H of r.model.rows || []) {
        E.set(H.id, te(H.id, H.keys, H.selectedFrames));
        for (const A of H.lanes) E.set(A.key, te(A.key, A.frames.map((j) => ({ frame: j, full: !0 })), A.selectedFrames));
      }
      return E;
    });
    function X(E) {
      const H = E.end === null ? f.value : E.end;
      return { left: w(E.start), width: w(Math.max(0, H - E.start)) };
    }
    function z(E, H) {
      const A = E.clientX, j = Math.max(1e-6, h.value);
      let T = 0;
      H("start", 0, E);
      const Y = (ae) => {
        if (ae.pointerId !== E.pointerId) return;
        const K = Math.round((ae.clientX - A) / j);
        K !== T && (T = K, H("move", T, ae));
      }, pe = (ae) => {
        ae.pointerId === E.pointerId && (u(), H("end", T, ae));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", pe), window.removeEventListener("pointercancel", pe), u = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", pe), window.addEventListener("pointercancel", pe);
    }
    function G(E) {
      E.button === 0 && z(E, (H, A, j) => n("action", { type: "seek", frame: $(j.clientX), phase: H }));
    }
    function ne(E, H, A) {
      E.button === 0 && (n("action", { type: "select-row", id: H.id }), z(E, (j, T) => n("action", { type: "clip", id: H.id, mode: A, delta: T, phase: j })));
    }
    function he(E, H, A, j, T) {
      if (E.button === 0) {
        if (E.shiftKey) {
          n("action", { type: "select-keys", owner: H.id, lane: A, frames: j.frames, additive: !0 });
          return;
        }
        j.frames.every((Y) => T.includes(Y)) || n("action", { type: "select-keys", owner: H.id, lane: A, frames: j.frames, additive: !1 }), z(E, (Y, pe) => n("action", { type: "move-keys", delta: pe, phase: Y }));
      }
    }
    const q = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function fe(E, H, A) {
      n("action", H), await bl(), E.target.value = A();
    }
    function ce(E) {
      fe(E, { type: "fps", fps: Number(E.target.value) }, () => q.value);
    }
    function oe(E) {
      const H = E.target.value.trim();
      fe(E, { type: "length", length: H ? Number(H) : null }, () => r.model.length ?? "");
    }
    function U(E, H, A) {
      E.button !== 0 || E.target !== E.currentTarget || n("action", { type: "select-keys", owner: H.id, lane: A, frames: [], additive: !1 });
    }
    return (E, H) => Vr((Te(), De("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", BM, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": _.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": _.value ? "Pause (Space)" : "Play (Space)",
          onClick: H[0] || (H[0] = (A) => n("action", { type: "play" }))
        }, [
          Be(Vt, {
            icon: _.value ? tt(ze).pause : tt(ze).play
          }, null, 8, ["icon"])
        ], 8, YM),
        e.model.hasAudio ? (Te(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: H[1] || (H[1] = (A) => n("action", { type: "mute" }))
        }, [
          Be(Vt, {
            icon: e.model.muted ? tt(ze).volume_muted : tt(ze).volume2
          }, null, 8, ["icon"])
        ], 8, qM)) : mt("", !0),
        Me("span", XM, rt(m.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), De("span", ZM, rt(q.value), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: tt(nm),
            max: tt(Qu),
            step: "any",
            value: q.value,
            "aria-label": "Timeline fps",
            onChange: ce
          }, null, 40, QM)),
          H[6] || (H[6] = Me("span", null, "fps", -1))
        ], 8, JM),
        Me("label", eP, [
          H[7] || (H[7] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: tt(ed),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: oe
          }, null, 40, tP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: H[2] || (H[2] = (A) => n("action", { type: "toggle-expanded" }))
        }, [
          H[8] || (H[8] = Me("span", null, "Timeline", -1)),
          Be(Vt, {
            icon: tt(ze).chevron
          }, null, 8, ["icon"])
        ], 8, nP)
      ]),
      Me("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: H[3] || (H[3] = At((A) => l.value = !0, ["self"])),
        onTransitionend: H[4] || (H[4] = At((A) => l.value = !1, ["self"])),
        onTransitioncancel: H[5] || (H[5] = At((A) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          H[9] || (H[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: G
          }, [
            (Te(!0), De(Qe, null, Pt(ee.value, (A) => (Te(), De("span", {
              key: A,
              class: "pano-timeline-tick",
              style: It({ left: w(A) })
            }, rt(A), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: It({ left: w(g.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Qe, null, Pt(e.model.rows || [], (A) => (Te(), De(Qe, {
            key: A.id
          }, [
            Me("div", {
              class: gt(["pano-timeline-head", { selected: A.selected, "is-hidden": !A.visible }])
            }, [
              Me("div", iP, [
                A.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": A.visible ? "true" : "false",
                  "aria-label": `${A.label} visible`,
                  "data-tip": A.visible ? "Hide" : "Show",
                  onClick: At((j) => n("action", { type: "toggle-visible", id: A.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: A.visible ? tt(ze).eye : tt(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, oP)) : (Te(), De("span", sP)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !A.keyable,
                  "aria-expanded": A.open ? "true" : "false",
                  "aria-label": A.open ? `Hide ${A.label} parameters` : `Show ${A.label} parameters`,
                  onClick: At((j) => n("action", { type: "toggle-row", id: A.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: tt(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, aP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: A.label,
                  "aria-current": A.selected ? "true" : void 0,
                  onClick: (j) => n("action", { type: "select-row", id: A.id })
                }, [
                  Be(Vt, {
                    icon: A.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, rt(A.label), 1)
                ], 8, lP),
                A.keyable ? (Te(), De("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: tt(uc)(A.keys, g.value) }]),
                  type: "button",
                  "data-keyed": tt(uc)(A.keys, g.value) ? "true" : "false",
                  "aria-label": tt(uc)(A.keys, g.value) ? `Every ${A.label} parameter has a keyframe here; update them` : `Add keyframes for every ${A.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((j) => n("action", { type: "key-row", owner: A.id }), ["stop"])
                }, [
                  Be(Vt, {
                    icon: tt(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, cP)) : mt("", !0)
              ]),
              A.open ? (Te(!0), De(Qe, { key: 0 }, Pt(A.lanes, (j) => (Te(), De("div", {
                key: j.key,
                class: "pano-timeline-lane-head"
              }, rt(j.label), 1))), 128)) : mt("", !0)
            ], 2),
            Me("div", {
              class: gt(["pano-timeline-track", { selected: A.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (j) => U(j, A, null)
              }, [
                A.clip ? (Te(), De("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: A.clip.end === null }]),
                  style: It(X(A.clip)),
                  onPointerdown: At((j) => ne(j, A, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((j) => ne(j, A, "start"), ["stop"])
                  }, null, 40, fP),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((j) => ne(j, A, "end"), ["stop"])
                  }, null, 40, pP)
                ], 46, dP)) : mt("", !0),
                (Te(!0), De(Qe, null, Pt(C.value.get(A.id), (j) => (Te(), De("button", {
                  key: j.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: j.selected, cluster: j.frames.length > 1, partial: j.partial }]),
                  style: It({ left: w(j.frame + 0.5) }),
                  "aria-label": `${A.label}: ${j.frames.length > 1 ? `${j.frames.length} keyframes` : `keyframe at frame ${j.frames[0]}`}`,
                  "data-tip": j.frames.length > 1 ? `${j.frames.length} keyframes` : `Frame ${j.frames[0]}`,
                  onPointerdown: At((T) => he(T, A, null, j, A.selectedFrames), ["stop"])
                }, [
                  j.frames.length > 1 ? (Te(), De("span", mP, rt(j.frames.length), 1)) : mt("", !0)
                ], 46, hP))), 128))
              ], 40, uP),
              A.open ? (Te(!0), De(Qe, { key: 0 }, Pt(A.lanes, (j) => (Te(), De("div", {
                key: j.key,
                class: "pano-timeline-lane",
                onPointerdown: (T) => U(T, A, j.lane)
              }, [
                (Te(!0), De(Qe, null, Pt(C.value.get(j.key), (T) => (Te(), De("button", {
                  key: T.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1 }]),
                  style: It({ left: w(T.frame + 0.5) }),
                  "aria-label": `${j.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: At((Y) => he(Y, A, j.lane, T, j.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (Te(), De("span", bP, rt(T.frames.length), 1)) : mt("", !0)
                ], 46, yP))), 128))
              ], 40, gP))), 128)) : mt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: It({ left: w(g.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, rP)
    ], 2)), [
      [Ci, e.model.visible]
    ]);
  }
}, wP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, _P = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, xP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", _P, [
      (Te(!0), De(Qe, null, Pt(e.buttons, (n) => Vr((Te(), Gn(Qt, {
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
        [Ci, n.visible !== !1]
      ])), 128))
    ]));
  }
}, kP = ["data-video-ready"], MP = { class: "pano-video-transport-shell" }, PP = { class: "pano-video-controls-left" }, NP = { class: "pano-video-filmstrip" }, AP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, CP = ["src", "onLoad"], IP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, EP = ["max", "value", "disabled"], OP = { class: "pano-video-controls-right" }, FP = ["data-has-audio"], TP = { class: "pano-video-volume-pop" }, DP = ["value", "disabled"], LP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.playing) === !0 ? ze.pause : ze.play;
    }), o = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var C;
      return ((C = t.state) == null ? void 0 : C.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = dt(() => {
      var C, X;
      return ((C = t.state) == null ? void 0 : C.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var C, X, z;
      return ((C = t.state) == null ? void 0 : C.hasAudio) !== !0 ? ze.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), d = dt(() => {
      var C;
      return Math.max(0, Math.min(100, Number(((C = t.state) == null ? void 0 : C.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var G, ne;
      const C = (G = t.state) == null ? void 0 : G.volumePct, X = Number(((ne = t.state) == null ? void 0 : ne.volume) ?? 1) * 100, z = Number(C ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, z))}%`
      };
    }), g = dt(() => {
      var z, G;
      const X = [
        String(((z = t.state) == null ? void 0 : z.currentTimeLabel) || "0:00"),
        String(((G = t.state) == null ? void 0 : G.durationLabel) || "0:00")
      ].reduce((ne, he) => Math.max(ne, he.length), 4);
      return `${Math.max(4, X)}ch`;
    }), _ = dt(() => ({ "--pano-video-time-ch": g.value })), m = dt(() => {
      var z, G;
      const C = Array.isArray((z = t.state) == null ? void 0 : z.thumbnails) ? t.state.thumbnails : [];
      if (C.length) return C;
      const X = Math.max(7, Number(((G = t.state) == null ? void 0 : G.thumbnailCount) || 9));
      return Array.from({ length: X }, (ne, he) => ({
        id: `placeholder-${he}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ Bt(/* @__PURE__ */ new Set()), w = (C) => String((C == null ? void 0 : C.id) || (C == null ? void 0 : C.src) || (C == null ? void 0 : C.label) || ""), ee = (C) => h.value.has(w(C)), $ = (C) => {
      const X = new Set(h.value);
      X.add(w(C)), h.value = X;
    };
    Mi(m, (C) => {
      const X = new Set(C.map(w)), z = /* @__PURE__ */ new Set();
      for (const G of h.value)
        X.has(G) && z.add(G);
      h.value = z;
    }, { immediate: !0 });
    const te = dt(() => {
      var C;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((C = t.state) == null ? void 0 : C.shellMaxWidthPx) || 640))}px`
      };
    });
    return (C, X) => (Te(), De("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(te.value)
    }, [
      X[1] || (X[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X[2] || (X[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", MP, [
        Me("div", PP, [
          Be(Qt, {
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
            style: It(_.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", NP, [
          Me("div", AP, [
            (Te(!0), De(Qe, null, Pt(m.value, (z) => (Te(), De("div", {
              key: w(z),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !z.src,
                "is-loaded": z.src && ee(z)
              }])
            }, [
              z.src ? (Te(), De("img", {
                key: 0,
                src: z.src,
                alt: "",
                draggable: "false",
                onLoad: (G) => $(z)
              }, null, 40, CP)) : (Te(), De("span", IP))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: It(u.value),
            "aria-hidden": "true"
          }, [...X[0] || (X[0] = [
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
          }, null, 8, EP)
        ]),
        Me("div", OP, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(_.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Be(Qt, {
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
            Me("div", TP, [
              Me("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, DP)
            ]),
            Be(Qt, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, FP)
        ])
      ])
    ], 14, kP));
  }
}, RP = { class: "pano-floating-top" }, VP = ["data-selected", "data-view-count"], $P = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], zP = { class: "label" }, jP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), De("div", RP, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), De(Qe, null, Pt(e.buttons, (i) => Vr((Te(), De("button", {
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
            Me("span", zP, rt(i.label), 1)
          ], 10, $P)), [
            [Ci, i.visible !== !1]
          ])), 128))
        ], 8, VP)
      ]);
    };
  }
};
function qg(e = "stickers") {
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
const HP = ["aria-label"], GP = { class: "pano-stage-column" }, KP = { class: "pano-stage-wrap" }, WP = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, UP = {
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
    const l = /* @__PURE__ */ Bt(null), c = /* @__PURE__ */ Bt(null), d = /* @__PURE__ */ Bt(null);
    function u() {
      var q, fe;
      return ((fe = (q = d.value) == null ? void 0 : q.getRefs) == null ? void 0 : fe.call(q)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(q) {
      var fe, ce;
      return ((ce = (fe = c.value) == null ? void 0 : fe.open) == null ? void 0 : ce.call(fe, q)) === !0;
    }
    function g(q) {
      i("image-file-selected", q);
    }
    function _(q) {
      i("image-file-cancelled", q);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const m = dt(() => n.readOnly === !0), h = dt(() => n.shellPreset || qg(n.type)), w = dt(() => {
      var fe, ce, oe;
      const q = String((((fe = n.uiState) == null ? void 0 : fe.stageStatus) === "failed" ? (ce = n.uiState) == null ? void 0 : ce.stageStatusDetail : (oe = n.uiState) == null ? void 0 : oe.stageWarningDetail) ?? "");
      return q === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : q === "stickers" ? "One or more sticker previews are unavailable." : q === "frame" ? "The editor hit a rendering error. Check the browser console for details." : q === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : q.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), ee = dt(() => {
      var q, fe, ce;
      return ((q = n.uiState) == null ? void 0 : q.stageStatus) === "failed" || (fe = n.uiState) != null && fe.stageWarningDetail ? w.value : (ce = n.uiState) == null ? void 0 : ce.stageNotice;
    }), $ = dt(() => {
      var fe;
      const q = Array.isArray((fe = h.value) == null ? void 0 : fe.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return m.value && q.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), q;
    });
    function te() {
      const q = l.value;
      return q ? Array.from(q.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((fe) => fe instanceof HTMLElement ? !fe.hidden && fe.tabIndex >= 0 && fe.offsetParent !== null : !1) : [];
    }
    function C() {
      var ce;
      const fe = te()[0] || l.value;
      (ce = fe == null ? void 0 : fe.focus) == null || ce.call(fe);
    }
    function X() {
      var q;
      a != null && a.isConnected && ((q = a.focus) == null || q.call(a)), a = null;
    }
    function z(q) {
      var fe, ce, oe, U;
      if (!q.defaultPrevented) {
        if (q.key === "Tab") {
          const E = te();
          if (!E.length) {
            q.preventDefault(), (ce = (fe = l.value) == null ? void 0 : fe.focus) == null || ce.call(fe);
            return;
          }
          const H = E[0], A = E[E.length - 1], j = document.activeElement;
          if (q.shiftKey) {
            (j === H || j === l.value || !((oe = l.value) != null && oe.contains(j))) && (q.preventDefault(), A.focus());
            return;
          }
          (j === A || !((U = l.value) != null && U.contains(j))) && (q.preventDefault(), H.focus());
          return;
        }
        q.key === "Escape" && i("close");
      }
    }
    function G() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ne() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function he(q) {
      document.removeEventListener("keydown", z), q ? (a || (a = document.activeElement), G(), document.addEventListener("keydown", z), bl(() => {
        C();
      })) : (ne(), X());
    }
    return Sl(() => {
      he(n.open);
    }), Ss(() => {
      ne(), document.removeEventListener("keydown", z), X();
    }), Mi(() => n.open, (q) => {
      he(q);
    }), (q, fe) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: fe[2] || (fe[2] = At((ce) => i("close"), ["self"]))
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
        Me("div", GP, [
          Me("div", KP, [
            fe[3] || (fe[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            fe[4] || (fe[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            fe[5] || (fe[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", WP, rt(ee.value), 1)) : mt("", !0),
            fe[6] || (fe[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(Dk, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(Pg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: g,
              onFileCancelled: _
            }, null, 512),
            m.value ? mt("", !0) : (Te(), De(Qe, { key: 1 }, [
              Be(xP, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(ok, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(Tk, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(LP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(jP, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(ek, {
              buttons: e.uiState.floatingButtons || $.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(Gk, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(wP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(dk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(SP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: fe[0] || (fe[0] = (ce) => i("timeline", ce))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? mt("", !0) : (Te(), Gn(UM, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: fe[1] || (fe[1] = (ce) => i("timeline", ce))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, HP)
    ])) : mt("", !0);
  }
}, nr = "loading", ys = "ready", Yn = "failed";
function Xg(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Jg(e, t = "") {
  return e && (e.__panoLoadState = ys, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Zg(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function bu(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? ys : nr : ys;
}
function vu(e) {
  return bu(e) === Yn;
}
function BP({ presented: e, background: t = ys, stickers: r = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === nr, o = n.includes(nr);
  if (i && o) return { status: nr, detail: "mixed" };
  if (i) return { status: nr, detail: "background" };
  if (o) return { status: nr, detail: "stickers" };
  const s = t === Yn, a = n.includes(Yn);
  return s && a ? { status: Yn, detail: "mixed" } : s ? { status: Yn, detail: "background" } : a ? { status: Yn, detail: "stickers" } : { status: ys, detail: "" };
}
const YP = "state_json", qP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Dd = "sticker_image_1", XP = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), Qg = 0.01, JP = "external_image", po = "pano_sticker_input_images", e0 = "pano_sticker_input_videos", t0 = "pano_sticker_input_frames", n0 = "pano_sticker_input_video_meta", ZP = !0, Dl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], wr = Math.PI / 180, Oi = 180 / Math.PI, Su = 1, r0 = "rgb(255, 221, 87)", QP = "rgb(228, 228, 231)", eN = "rgb(180, 150, 60)", tN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, nN = 64, Sp = 40, xc = 16, rN = 0.45, wp = 180, iN = 160, ll = 24, oN = 4, sN = 4;
function kc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function aN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function lN(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function cN(e) {
  return e * e * e;
}
function Ll(e, t, r) {
  return { x: e, y: t, z: r };
}
function _p(e, t) {
  return Ll(e.x + t.x, e.y + t.y, e.z + t.z);
}
function xp(e, t) {
  return Ll(e.x * t, e.y * t, e.z * t);
}
function Mc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function uN(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ll(e.x / t, e.y / t, e.z / t);
}
function oa(e) {
  return {
    yaw: jt(Math.atan2(e.x, e.z) * Oi),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Oi, -90, 90)
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
function Go(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Pc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Go(e, t);
  const l = Ie((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Bn(e, t, r) {
  return e + (t - e) * r;
}
function mr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function dN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let sa = { fillStyle: "", url: "" };
function fN(e, t, r) {
  if (sa.url && sa.fillStyle === String(e || ""))
    return sa.url;
  const n = dN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ll}" height="${ll}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return sa = { fillStyle: String(e || ""), url: n }, n;
}
function cl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function $n(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function un(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function pN(e) {
  return Dl.some((t) => cl(e, t.color));
}
function wu(e, t, r) {
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
function _u(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function so(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function hN(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function kp(e) {
  const { paintCount: t, maskCount: r } = hN(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function i0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, g = Number(s.rot_deg || 0) * wr, _ = Math.max(0.01, Number(s.scale || 1));
  for (const m of [-n, 0, n])
    e.save(), e.translate(u + m, f), e.rotate(g), e.scale(_, _), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Zi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function aa(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function mN(e, t) {
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
function wi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function gN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function yN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function bN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const o0 = "pano_suite.ui_settings.v1", s0 = "pano_suite.node_grid_visibility.v1";
let qi = null, dr = null;
function Ca(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function vN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(o0)) || "").trim();
    if (!t) return qi ? Ca(qi) : null;
    const r = JSON.parse(t), n = Ca(r);
    return qi = n, n;
  } catch {
    return qi ? Ca(qi) : null;
  }
}
function SN(e) {
  var r;
  const t = Ca(e);
  qi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(o0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function a0() {
  var e;
  if (dr && typeof dr == "object")
    return dr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(s0)) || "").trim();
    if (!t)
      return dr = {}, dr;
    const r = JSON.parse(t);
    return dr = r && typeof r == "object" ? r : {}, dr;
  } catch {
    return dr = {}, dr;
  }
}
function wN(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = a0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function _N(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = a0();
  n[r] = !!t, dr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(s0, JSON.stringify(n));
  } catch {
  }
}
function xN(e, t) {
  const r = { ...e }, n = t.map((i) => i(Nc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Nc(r, t[o].name))), Nc(r, "showEditor");
}
function Nc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
const xu = 0.5, l0 = "PANO_SCENE";
function kN(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Gr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function MN(e, t, r) {
  return e * r / t;
}
function PN(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Rn(e("pano_upstream_coverage")[0])
  };
}
const NN = "bg_media is not used";
function AN(e, t) {
  return e === l0 && t === null;
}
function CN(e, t, r) {
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
function Mp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}`, opacity: e.opacity * xu };
}
function IN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = xs(s, r), c = (m) => m.visible ? n(m) : null, d = zm(s, r, { media: c, zIndex: (m) => m.z_index, paintLayers: i, evaluated: l }).map((m) => Mp(m, t)), u = Gm(s, r, s.stickers, { media: c, evaluated: l }).map((m) => Mp(m, t)), f = [], g = Xa(Tr(a, "pano_scene_files"), Tr(a, "pano_scene_meta"), o);
  g && f.push({ slot: `${t}:scene`, urls: g.urls.filter(Boolean), request: pd(g, l.scene), value: l.scene, opacity: xu });
  const _ = Xa(Tr(a, "pano_sticker_files"), Tr(a, "pano_sticker_meta"), o);
  if (_) {
    const m = Om(_, s, l);
    f.push({ slot: `${t}:sticker`, urls: Fm(_, s), request: m, value: (m == null ? void 0 : m.value) ?? null, opacity: ((m == null ? void 0 : m.opacity) ?? 1) * xu });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ei = /* @__PURE__ */ new Map(), EN = 12;
function ON(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ei.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ei.delete(t), ei.set(t, r), r);
}
function FN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ei.delete(r), ei.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ei.size > EN; ) {
      const i = ei.keys().next().value;
      if (!i) break;
      ei.delete(i);
    }
}
function TN(e) {
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
    runtime: _,
    scheduler: m,
    stageWrap: h,
    state: w,
    stateV2: ee,
    stillCanvas: $,
    studio: te,
    timelinePlayhead: C,
    type: X,
    uiState: z,
    videoEl: G
  } = e;
  let ne, he, q, fe, ce, oe;
  const U = {
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
  }, E = 9, H = [];
  let A = 0;
  const j = () => {
    var $e, He;
    const D = ($e = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : $e.call(h), ie = (He = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : He.call(i), Ne = Math.max(0, Number((D == null ? void 0 : D.width) || 0)), xe = ie ? Math.max(0, Number(ie.width || 0)) : 0, Le = xe > 0 ? xe + 14 + 12 : 72, je = Math.max(280, Math.floor(Ne - Le * 2)), Ke = r.fullscreen ? Math.min(1200, je) : je;
    z.videoTransport.shellMaxWidthPx = Ke;
  }, T = () => {
    A || (A = m.requestFrame(() => {
      A = 0, j();
    }));
  }, Y = (D) => {
    if (!(D instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(D.audioTracks) && D.audioTracks.length > 0 || D.audioTracks && typeof D.audioTracks.length == "number" && D.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof D.mozHasAudio == "boolean") return D.mozHasAudio;
    } catch {
    }
    try {
      if (Number(D.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!z.videoTransport.hasAudio;
  }, pe = typeof ResizeObserver < "u" ? new ResizeObserver(() => T()) : null;
  pe == null || pe.observe(h), i && (pe == null || pe.observe(i)), H.push(() => {
    var D;
    A && (m.cancelFrame(A), A = 0), (D = pe == null ? void 0 : pe.disconnect) == null || D.call(pe);
  }), T();
  const ae = () => {
    U.thumbnailJobId += 1, U.thumbnailSrc = "", z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = E;
  }, K = async (D, ie, Ne) => {
    const xe = String(D || "").trim();
    if (!xe) {
      ae();
      return;
    }
    const Pe = ON(xe);
    if (Pe) {
      U.thumbnailSrc = xe, z.videoTransport.thumbnails = Pe.thumbnails, z.videoTransport.thumbnailCount = Pe.thumbnailCount;
      return;
    }
    const Ce = ++U.thumbnailJobId;
    U.thumbnailSrc = xe, z.videoTransport.thumbnails = [], z.videoTransport.thumbnailCount = E;
    const Le = _s(document, "editor.thumbnails");
    Le.preload = "auto", Le.muted = !0, Le.playsInline = !0, Le.crossOrigin = "anonymous";
    const je = rn({ label: "editor.thumbnail" });
    try {
      const Ke = await new Promise((We) => {
        let ht = !1;
        const bt = (Tt) => {
          ht || (ht = !0, We(Tt));
        };
        Le.addEventListener("loadedmetadata", () => bt(!0), { once: !0 }), Le.addEventListener("canplay", () => bt(!0), { once: !0 }), Le.addEventListener("error", () => bt(!1), { once: !0 }), Le.src = xe, Le.load();
      });
      if (U.thumbnailJobId !== Ce) return;
      const $e = Number(Le.videoWidth || 0), He = Number(Le.videoHeight || 0);
      if (!Ke || $e < 1 || He < 1) {
        U.thumbnailFailedSrcs.add(xe);
        return;
      }
      const se = Math.max(0, Number(Le.duration || ie || 0)), Fe = 46, Ae = Math.max(72, Math.round($e / He * Fe));
      je.width = Ae, je.height = Fe;
      const Re = je.getContext("2d");
      if (!Re) return;
      const Ye = [], Ge = (We) => new Promise((ht) => {
        let bt = !1;
        const Tt = () => {
          bt || (bt = !0, ht());
        };
        Le.addEventListener("seeked", Tt, { once: !0 }), Le.addEventListener("error", Tt, { once: !0 });
        try {
          Le.currentTime = We;
        } catch {
          Tt();
        }
      });
      for (let We = 0; We < E; We += 1) {
        if (U.thumbnailJobId !== Ce) return;
        const ht = E <= 1 ? 0 : We / (E - 1), bt = se > 0 ? Math.max(0, Math.min(se - Math.max(1e-3, 0.5 / Math.max(1, Number(Ne || 24))), se * ht)) : 0;
        if (await Ge(bt), U.thumbnailJobId !== Ce) return;
        Re.clearRect(0, 0, Ae, Fe), Re.drawImage(Le, 0, 0, Ae, Fe), Ye.push({
          id: `thumb-${We}`,
          src: je.toDataURL("image/jpeg", 0.72),
          time: bt,
          label: y(bt)
        });
      }
      if (U.thumbnailJobId !== Ce) return;
      z.videoTransport.thumbnails = Ye, z.videoTransport.thumbnailCount = Ye.length || E, FN(xe, {
        thumbnails: Ye,
        thumbnailCount: Ye.length || E,
        duration: se,
        fps: Ne
      });
    } finally {
      Le.removeAttribute("src"), Le.load(), ss(je);
    }
  };
  H.push(() => {
    ae();
  });
  const k = gg({
    video: G instanceof HTMLVideoElement ? G : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (D) => m.requestFrame(D),
      cancelFrame: (D) => m.cancelFrame(D)
    },
    fps: I,
    span: () => {
      if (ee) return oe();
      const D = Math.round(Number(z.videoTransport.duration || 0) * I());
      return G.loop || !(D > 0) ? 1 / 0 : D;
    },
    loop: () => ee,
    onFrame: (D) => {
      ee ? q(D) : v(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      O() && (_.backgroundDirty = !0);
    },
    onChange: () => {
      v(), C.playing.value = k.playing, ce(), he({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  H.push(() => k.dispose());
  const re = ee && f instanceof HTMLVideoElement ? xd({
    video: f,
    onCapture: () => {
      var Ne;
      const D = Number(f.videoWidth || 0), ie = Number(f.videoHeight || 0);
      D < 1 || ie < 1 || (u.width = D, u.height = ie, (Ne = u.getContext("2d")) == null || Ne.drawImage(f, 0, 0), u.__panoFrameIdx += 1, he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  re && H.push(() => re.dispose());
  const de = ee ? vd({
    createImage: (D, ie) => {
      const Ne = new Image();
      return Ne.onload = ie, Ne.onerror = ie, Ne.src = D, Ne;
    },
    onLoad: () => he({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (G instanceof HTMLVideoElement) {
    const D = () => {
      R(), he({ cause: "frame_view", localOnly: !0 });
    }, ie = () => {
      v({
        hasAudio: z.videoTransport.hasAudio,
        muted: G.muted,
        volume: Number(G.volume ?? z.videoTransport.volume ?? 1)
      });
    }, Ne = () => {
      const xe = G.dataset.panoSrc;
      xe && (U.failedSrcs.add(xe), R(), he());
    };
    for (const [xe, Pe] of [
      ["loadedmetadata", D],
      ["loadeddata", D],
      ["canplay", D],
      ["volumechange", ie],
      ["error", Ne]
    ])
      G.addEventListener(xe, Pe), H.push(() => G.removeEventListener(xe, Pe));
  }
  function we(D) {
    return t.uiList(d, D);
  }
  function _e(D) {
    return t.uiValue(d, D);
  }
  function N() {
    const D = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ha(D))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const ie = p();
    return ie ? { videoKey: ie.videoKey, metaKey: ie.metaKey } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: D } = N(), ie = _e(D);
    return Array.isArray(ie) && ie.length > 0 && ie[0] && typeof ie[0] == "object" ? ie[0] : ie && typeof ie == "object" ? ie : null;
  }
  function b(D) {
    return D ? D instanceof HTMLVideoElement ? [
      String(D.currentSrc || D.src || ""),
      Number(D.videoWidth || 0),
      Number(D.videoHeight || 0)
    ].join("|") : D instanceof HTMLCanvasElement ? [
      "canvas",
      Number(D.width || 0),
      Number(D.height || 0),
      String(D.__panoFrameIdx || 0)
    ].join("|") : [
      String(D.currentSrc || D.src || ""),
      Number(D.naturalWidth || D.width || 0),
      Number(D.naturalHeight || D.height || 0)
    ].join("|") : "none";
  }
  function y(D) {
    const ie = Math.max(0, Math.floor(Number(D || 0))), Ne = Math.floor(ie / 60), xe = ie % 60;
    return `${Ne}:${String(xe).padStart(2, "0")}`;
  }
  function I() {
    return ee ? w.timeline.fps : U.metaFps || 1e3;
  }
  function v(D = {}) {
    const ie = Number(D.duration ?? z.videoTransport.duration ?? 0), Ne = Math.max(1, Number(D.fps ?? z.videoTransport.fps ?? 24)), xe = k.frame / I(), Pe = Object.prototype.hasOwnProperty.call(D, "ready") ? !!D.ready : !!z.videoTransport.ready, Ce = k.playing, Le = Object.prototype.hasOwnProperty.call(D, "visible") ? !!D.visible : !!z.videoTransport.visible, je = Object.prototype.hasOwnProperty.call(D, "muted") ? !!D.muted : !!(G instanceof HTMLVideoElement ? G.muted : z.videoTransport.muted), Ke = Number(
      Object.prototype.hasOwnProperty.call(D, "volume") ? D.volume : G instanceof HTMLVideoElement ? G.volume : z.videoTransport.volume
    ), $e = Object.prototype.hasOwnProperty.call(D, "hasAudio") ? !!D.hasAudio : Y(G), He = Object.prototype.hasOwnProperty.call(D, "loop") ? !!D.loop : !!z.videoTransport.loop;
    Object.assign(z.videoTransport, {
      ready: Pe,
      playing: Ce,
      visible: Le,
      loop: He,
      currentTime: Number.isFinite(xe) ? xe : 0,
      duration: Number.isFinite(ie) ? ie : 0,
      progressPct: ie > 1e-6 ? Math.max(0, Math.min(100, xe / ie * 100)) : 0,
      currentTimeLabel: y(xe),
      durationLabel: y(ie),
      frameCount: Math.max(0, Number(D.frameCount ?? z.videoTransport.frameCount ?? 0)),
      fps: Ne,
      hasAudio: $e,
      muted: je,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)) * 100),
      thumbnails: Array.isArray(D.thumbnails) ? D.thumbnails : z.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(D.thumbnailCount ?? z.videoTransport.thumbnailCount ?? E))
    });
  }
  function V() {
    return !!(G instanceof HTMLVideoElement && !ee && G.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function L() {
    if (!(G instanceof HTMLVideoElement) || !z.videoTransport.hasAudio) return;
    const D = !G.muted;
    G.muted = D, !D && Number(G.volume || 0) <= 0 && (G.volume = Math.max(0.01, Number(z.videoTransport.volume || 1))), v({
      hasAudio: z.videoTransport.hasAudio,
      muted: G.muted,
      volume: Number(G.volume ?? z.videoTransport.volume ?? 1)
    });
  }
  function J() {
    v({
      visible: V()
    });
  }
  function O() {
    if (!(G instanceof HTMLVideoElement) || Number(G.videoWidth || 0) < 1 || Number(G.videoHeight || 0) < 1) return !1;
    const D = Number(G.videoWidth || 0), ie = Number(G.videoHeight || 0);
    ($.width !== D || $.height !== ie) && ($.width = D, $.height = ie);
    const Ne = $.getContext("2d");
    return Ne ? (Ne.clearRect(0, 0, D, ie), Ne.drawImage(G, 0, 0, D, ie), $.__panoFrameIdx = Number($.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function F() {
    return !k.showsVideo && Number($.width || 0) > 0 && Number($.height || 0) > 0 && Number($.__panoFrameIdx || 0) > 0 ? $ : G instanceof HTMLVideoElement && Number(G.videoWidth || 0) > 0 && Number(G.videoHeight || 0) > 0 && Number(G.readyState || 0) >= 2 ? G : null;
  }
  function x() {
    $.__panoFrameIdx = 0, _.backgroundDirty = !0;
  }
  function R() {
    if (!(G instanceof HTMLVideoElement)) return null;
    const { videoKey: D } = N(), ie = (p() || Zt(d, "background")) && we(D)[0] || null, Ne = l(ie), xe = [Ne, t.linkedVideoFile(d, S())].filter(Boolean), Pe = xe.find((se) => !U.failedSrcs.has(se)) || "";
    U.videoFailed = !Pe && xe.length > 0;
    const Ce = Pe && Pe === Ne ? le() : null;
    U.metaFps = Number(Ce == null ? void 0 : Ce.fps) > 0 ? Number(Ce.fps) : 0;
    const Le = Math.max(1, Number((Ce == null ? void 0 : Ce.fps) || (ee ? w.timeline.fps : 24))), je = G.dataset.panoSrc === Pe && Number.isFinite(G.duration) ? G.duration : 0, Ke = Number((Ce == null ? void 0 : Ce.duration) || ((Ce == null ? void 0 : Ce.frames) > 0 ? Ce.frames / Le : je)), $e = Math.max(0, Number((Ce == null ? void 0 : Ce.frames) || Math.round(Ke * Le))), He = !!(Ce != null && Ce.has_audio) || Y(G);
    return Pe && G.dataset.panoSrc !== Pe ? (G.pause(), x(), G.dataset.panoSrc = Pe, G.loop = !ee && !!z.videoTransport.loop, G.muted = !!z.videoTransport.muted, G.volume = Math.max(0, Math.min(1, Number(z.videoTransport.volume ?? 1))), G.src = Pe, G.load(), k.setSource(!0), ee || k.seek(0)) : !Pe && G.getAttribute("src") && (G.pause(), G.removeAttribute("src"), delete G.dataset.panoSrc, G.load(), x(), ae(), k.setSource(!1)), ee || (G.loop = !!z.videoTransport.loop), Pe && !ee && U.thumbnailSrc !== Pe && !U.thumbnailFailedSrcs.has(Pe) && K(Pe, Ke, Le), Pe || ae(), v({
      ready: !!Pe,
      visible: !!Pe && V(),
      duration: Ke,
      frameCount: $e,
      fps: Le,
      hasAudio: He,
      loop: !!G.loop,
      muted: !!G.muted,
      volume: Number(G.volume ?? z.videoTransport.volume ?? 1),
      thumbnailCount: z.videoTransport.thumbnailCount
    }), Pe || null;
  }
  function Z(D, ie = null) {
    return c(d, D, o, ie || (() => he()));
  }
  function me(D = null) {
    return Zt(d, "external-sticker") ? Z(po, D) : null;
  }
  function ue() {
    if (!Zt(d, "external-sticker")) return null;
    const D = we(n0)[0];
    if (!D || typeof D != "object") return null;
    const ie = we(t0).map(l).filter(Boolean);
    if (ie.length) return { frames: ie, meta: D };
    const Ne = l(we(e0)[0] || null);
    return Ne ? { src: Ne, meta: D } : null;
  }
  function ve() {
    const D = w.stickers.find(ne), ie = D ? ue() : null, Ne = ie ? yd(D.clip, r.frame, w.timeline.fps, ie.meta) : null;
    re.follow({ src: (ie == null ? void 0 : ie.src) || "", time: Ne, playing: k.advancing, fps: w.timeline.fps });
    const xe = D ? Q(D) : null, Pe = ie != null && ie.frames ? de.picture(ie.frames, Ne, ie.meta, xe) : re.picture(u, xe);
    return Pe ? { media: Pe, revision: b(Pe), source: bd(ie, xe) } : null;
  }
  function Se() {
    return !ee || !Zt(d, "scene") ? null : Xa(we("pano_scene_files"), we("pano_scene_meta"), l);
  }
  function be() {
    return !ee || !Zt(d, "external-sticker") ? null : Xa(we("pano_sticker_files"), we("pano_sticker_meta"), l);
  }
  function Q(D) {
    var Le;
    if (D && typeof D == "object" && (ne(D) || D.external === !0))
      return me(() => {
        ti(d, "image-loaded");
      });
    const ie = ee ? ge(D) : String(D && typeof D == "object" ? D.asset_id || D.assetId || "" : D || "");
    if (!ie) return null;
    const Ne = o.get(ie);
    if (Ne) return Ne;
    const xe = ee ? qa(D.source) : (Le = w.assets) == null ? void 0 : Le[ie], Pe = a(xe);
    if (!Pe) return null;
    const Ce = new Image();
    return Xg(Ce, Pe), Ce.onload = () => {
      Jg(Ce, Pe), he();
    }, Ce.onerror = () => {
      Zg(Ce, Pe), he();
    }, Ce.src = Pe, o.set(ie, Ce), Ce;
  }
  function ge(D) {
    const { source: ie } = D;
    return ie.filename ? `file:${ie.storage}:${ie.subfolder}:${ie.filename}` : `sticker:${D.id}`;
  }
  function B() {
    if (X === "cutout") {
      const Ce = F();
      if (Ce) return Ce;
      const Le = s(
        d,
        ["erp_image", "bg_erp"],
        () => he(),
        "background:cutout:erp_image|bg_erp"
      );
      return Le && !vu(Le) ? Le : c(d, "pano_input_images", o, () => he()) || Le || null;
    }
    const D = F();
    if (D) return D;
    const ie = p(), Ne = ie || Zt(d, "background") ? c(d, (ie == null ? void 0 : ie.imageKey) ?? "pano_input_images", o, () => he()) : null;
    if (Ne && !vu(Ne)) return Ne;
    if (G instanceof HTMLVideoElement && G.dataset.panoSrc) return G;
    if (ie) return Ne;
    const xe = S();
    return s(d, xe, () => he(), `background:${xe.join("|")}`) || Ne || null;
  }
  function p() {
    return !te || !Zt(d, "scene") ? null : PN(we);
  }
  function P() {
    var D;
    return ((D = p()) == null ? void 0 : D.coverage) ?? Rn(w.coverage);
  }
  function S() {
    if (p()) return [];
    if (X === "cutout") return ["erp_image", "bg_erp"];
    const D = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], ie = D.includes("erp_image"), Ne = D.includes("bg_erp");
    return g && (ie || Ne) ? ie ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function M(D) {
    return D ? D instanceof HTMLImageElement ? !!D.complete && Number(D.naturalWidth || D.width || 0) > 0 && Number(D.naturalHeight || D.height || 0) > 0 : D instanceof HTMLVideoElement ? Number(D.videoWidth || 0) > 0 && Number(D.videoHeight || 0) > 0 && Number(D.readyState || 0) >= 2 : Number(D.width || D.naturalWidth || 0) > 0 && Number(D.height || D.naturalHeight || 0) > 0 : !1;
  }
  function W() {
    if (n.failed) return { status: Yn, detail: "renderer" };
    if (!n.ready) return { status: nr, detail: "boot" };
    const D = B(), ie = U.videoFailed ? Yn : bu(D, M), Ne = [];
    for (const xe of fe()) {
      if ((xe == null ? void 0 : xe.visible) === !1) continue;
      const Pe = Q(xe);
      Ne.push(bu(Pe, M));
    }
    return BP({
      presented: _.hasPresentedFrame,
      background: ie,
      stickers: Ne
    });
  }
  function ye() {
    G instanceof HTMLVideoElement && G.pause(), H.forEach((D) => {
      try {
        D();
      } catch {
      }
    });
  }
  return {
    connect(D) {
      ({
        isExternalSticker: ne,
        requestDraw: he,
        setTimelineFrame: q,
        skyStickers: fe,
        syncTimeline: ce,
        timelineSpanFrames: oe
      } = D);
    },
    videoState: U,
    queueVideoTransportLayout: T,
    playback: k,
    portVideo: re,
    getNodeUiValue: _e,
    getMediaRevisionToken: b,
    playbackFps: I,
    syncVideoTransportState: v,
    toggleVideoMuted: L,
    syncVideoTransportVisibility: J,
    refreshModalVideoSource: R,
    getStickerUiImage: Z,
    getExternalStickerPreviewImage: me,
    getPortMedia: ue,
    followPortSticker: ve,
    getStickerImage: Q,
    stickerImageKey: ge,
    getConnectedErpImage: B,
    backgroundCoverage: P,
    upstreamBackground: p,
    isDecodedImageReady: M,
    getStageImageStatus: W,
    sceneFiles: Se,
    stickerFiles: be,
    disposeMediaSession: ye
  };
}
function DN(e = 80, t = null, r = 8) {
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
const LN = 80;
function c0(e) {
  return JSON.stringify(Ov(e));
}
function RN(e) {
  return DN(LN, { entries: [c0(e)], index: 0 });
}
function u0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function VN(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, g, _, m, h, w, ee, $, te, C;
  function X() {
    r || (ee(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(c0(i)), te()));
  }
  function z(ne) {
    var ce, oe;
    if (r) return;
    w();
    const he = ne < 0 ? t.historyController.undo() : t.historyController.redo();
    if (te(), !he) return;
    const q = Fv(i, he), fe = (ce = i.timeline) == null ? void 0 : ce.fps;
    Object.keys(i).forEach((U) => delete i[U]), Object.assign(i, q.state), ee(!1), o && i.timeline.fps !== fe && _.seek(Math.round(t.frame * i.timeline.fps / fe)), t.selectedId = u0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((oe = d()) == null ? void 0 : oe.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, q.paintingChanged ? g() : f(), $(), C(), c(), h({ cause: "cutout_frame" });
  }
  function G() {
    var q, fe;
    const ne = Array.isArray((q = t.historyController) == null ? void 0 : q.entries) ? t.historyController.entries : [], he = Number((fe = t.historyController) == null ? void 0 : fe.index);
    return {
      canUndo: !r && ne.length > 1 && he > 0,
      canRedo: !r && ne.length > 1 && he >= 0 && he < ne.length - 1
    };
  }
  return {
    connect(ne) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: g,
        playback: _,
        releaseHiddenSelection: m,
        requestDraw: h,
        stopTimelinePlayback: w,
        syncCutoutShot: ee,
        syncPaintUi: $,
        syncUndoRedoButtons: te,
        updateSidePanel: C
      } = ne);
    },
    pushHistory: X,
    restoreHistory: z,
    getHistoryCapabilities: G
  };
}
function $N(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g, _;
  function m() {
    return s === "stickers" ? h() : i.shots;
  }
  function h() {
    return n ? i.stickers.filter((p) => p.placement === "sky") : i.stickers;
  }
  function w(p) {
    return n && re(p);
  }
  function ee(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function $(p) {
    if (!w(p)) return p;
    const P = Z(p) ? g(p) : null;
    return sd(p, r.frame, P && { width: P.naturalWidth || P.width, height: P.naturalHeight || P.height });
  }
  function te(p, P) {
    w(p) ? vm(p, r.frame, P) : Object.assign(p, P);
  }
  function C() {
    const p = i.painting || (i.painting = yo(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function X(p = "paint") {
    var W, ye;
    const P = Array.isArray((ye = (W = i.painting) == null ? void 0 : W[p]) == null ? void 0 : ye.strokes) ? i.painting[p].strokes : [], S = [], M = /* @__PURE__ */ new Set();
    for (const D of P) {
      const ie = String((D == null ? void 0 : D.actionGroupId) || "").trim();
      !ie || M.has(ie) || (M.add(ie), S.push(ie));
    }
    return S;
  }
  function z() {
    return X("paint");
  }
  function G(p, P) {
    const S = String(P || "").trim();
    return S ? `${p === "mask" ? "mask" : "paint"}:${S}` : "";
  }
  function ne(p) {
    const P = String(p || "").trim();
    return P ? `raster:${P}` : "";
  }
  function he(p) {
    const P = String(p || "").trim();
    if (!P) return "";
    const S = P.match(/^raster:(.*)$/);
    return String(S ? S[1] || "" : P).trim();
  }
  function q(p, P = null) {
    const S = String(p || "").trim();
    if (!S) return { layerKind: "paint", actionGroupId: "" };
    const M = S.match(/^(paint|mask):(.*)$/);
    return M ? { layerKind: M[1] === "mask" ? "mask" : "paint", actionGroupId: String(M[2] || "").trim() } : { layerKind: P === "mask" ? "mask" : "paint", actionGroupId: S };
  }
  function fe() {
    var P;
    let p = -1;
    for (const S of h())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of C())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of Array.isArray((P = i.painting) == null ? void 0 : P.raster_objects) ? i.painting.raster_objects : [])
      String((S == null ? void 0 : S.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0)));
    return p + 1;
  }
  function ce(p, P = null) {
    const S = String(p || "").trim();
    if (!S) return null;
    const M = C();
    let W = M.find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || "") === S);
    return W ? P != null && (W.z_index = Math.max(0, Number(P || 0))) : (W = {
      id: S,
      type: "strokeGroup",
      actionGroupId: S,
      z_index: P == null ? fe() : Math.max(0, Number(P || 0)),
      locked: !1,
      frame: null
    }, M.push(W)), W;
  }
  function oe(p) {
    if (!(p != null && p.centerUv)) return [];
    const P = Number(p.centerUv.u || 0), S = Number(p.centerUv.v || 0), M = Number(p.halfW || 0), W = Number(p.halfH || 0);
    return [
      {
        u: ((P - M) % 1 + 1) % 1,
        v: Ie(S - W, 0, 1)
      },
      {
        u: ((P + M) % 1 + 1) % 1,
        v: Ie(S - W, 0, 1)
      },
      {
        u: ((P + M) % 1 + 1) % 1,
        v: Ie(S + W, 0, 1)
      },
      {
        u: ((P - M) % 1 + 1) % 1,
        v: Ie(S + W, 0, 1)
      }
    ];
  }
  function U() {
    const p = new Set(z()), S = C().filter((M) => p.has(String((M == null ? void 0 : M.actionGroupId) || "")));
    return p.forEach((M) => {
      S.some((W) => String((W == null ? void 0 : W.actionGroupId) || "") === M) || S.push({
        id: M,
        type: "strokeGroup",
        actionGroupId: M,
        z_index: fe(),
        locked: !1,
        frame: null
      });
    }), S.sort((M, W) => Number((M == null ? void 0 : M.z_index) || 0) - Number((W == null ? void 0 : W.z_index) || 0)), i.painting.groups = S, S;
  }
  function E(p, P, S) {
    var $e;
    const M = (He) => (Number(He || 0) % 1 + 1) % 1, W = [];
    for (const He of S) {
      const se = He == null ? void 0 : He.geometry, Fe = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(Fe) && W.push(...Fe);
    }
    if (!W.length) return null;
    const ye = M((($e = W[0]) == null ? void 0 : $e.u) || 0);
    let D = 0, ie = 0;
    W.forEach((He) => {
      const se = M((He == null ? void 0 : He.u) || 0);
      D += ye + v(se, ye), ie += Number((He == null ? void 0 : He.v) || 0);
    });
    const Ne = (D / W.length % 1 + 1) % 1;
    let xe = 1 / 0, Pe = -1 / 0, Ce = 1 / 0, Le = -1 / 0;
    W.forEach((He) => {
      const se = M((He == null ? void 0 : He.u) || 0), Fe = v(se, Ne);
      xe = Math.min(xe, Fe), Pe = Math.max(Pe, Fe);
      const Ae = Number((He == null ? void 0 : He.v) || 0);
      Ce = Math.min(Ce, Ae), Le = Math.max(Le, Ae);
    });
    const je = S.reduce((He, se) => {
      const Fe = l(String((se == null ? void 0 : se.toolKind) || "pen")), Ae = Fn[Fe] || Fn[Er], Re = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((Ae == null ? void 0 : Ae.sizeScale) ?? 1));
      return Math.max(He, Re);
    }, 0), Ke = Math.max(35e-4, je / 2048);
    return {
      centerUv: { u: ((Ne + (xe + Pe) * 0.5) % 1 + 1) % 1, v: Ie((Ce + Le) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Pe - xe) * 0.5 + Ke,
      halfH: (Le - Ce) * 0.5 + Ke,
      uvPad: Ke
    };
  }
  function H(p, P, S) {
    const M = String(p || "").trim();
    if (!M) return null;
    const W = C().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === M);
    if (!W) return null;
    const ye = S || b(M, P);
    return W.frame = E(M, P, ye), W.frame;
  }
  function A() {
    var M;
    const p = h().map((W) => ({
      type: "sticker",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), P = U().map((W) => ({
      type: "strokeGroup",
      id: String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || ""),
      actionGroupId: String((W == null ? void 0 : W.actionGroupId) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    })), S = (Array.isArray((M = i.painting) == null ? void 0 : M.raster_objects) ? i.painting.raster_objects : []).filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") === "paint").map((W) => ({
      type: "rasterObject",
      id: String((W == null ? void 0 : W.id) || ""),
      z_index: Number((W == null ? void 0 : W.z_index) || 0),
      item: W
    }));
    return [...p, ...P, ...S].sort((W, ye) => Number(W.z_index || 0) - Number(ye.z_index || 0));
  }
  function j(p = !0) {
    var S, M, W, ye, D, ie;
    const P = A().filter((Ne) => Ne.type === "strokeGroup").map((Ne) => String(Ne.actionGroupId || "")).filter((Ne) => !!Ne);
    if (p) {
      const Ne = String(((M = (S = r.interaction) == null ? void 0 : S.stroke) == null ? void 0 : M.actionGroupId) || "").trim(), xe = String(((ye = (W = r.interaction) == null ? void 0 : W.stroke) == null ? void 0 : ye.layerKind) || "").trim(), Pe = String(((ie = (D = r.interaction) == null ? void 0 : D.stroke) == null ? void 0 : ie.toolKind) || "").trim();
      Ne && xe === "paint" && Pe !== "eraser" && !P.includes(Ne) && P.push(Ne);
    }
    return P;
  }
  function T(p = !0) {
    var ie, Ne, xe, Pe, Ce, Le;
    const P = A();
    if (!p) return P;
    const S = String(((Ne = (ie = r.interaction) == null ? void 0 : ie.stroke) == null ? void 0 : Ne.actionGroupId) || "").trim(), M = String(((Pe = (xe = r.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : Pe.layerKind) || "").trim(), W = String(((Le = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!S || M !== "paint" || W === "eraser" || P.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === S))
      return P;
    const ye = f();
    let D = P.reduce((je, Ke) => Math.max(je, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return ye && le(ye) && String(ye.actionGroupId || "") === S && (D = Number(ye.z_index || 0)), [
      ...P,
      {
        type: "strokeGroup",
        id: S,
        actionGroupId: S,
        z_index: D,
        item: null
      }
    ].sort((je, Ke) => Number((je == null ? void 0 : je.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function Y() {
    return C().slice().sort((p, P) => Number((p == null ? void 0 : p.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)).map((p) => N(G("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function pe() {
    var p;
    return (Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : []).filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") === "paint").slice().sort((P, S) => Number((P == null ? void 0 : P.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0)).map((P) => we(ne((P == null ? void 0 : P.id) || ""))).filter(Boolean);
  }
  function ae() {
    return Array.isArray(i.stickers) ? h() : [];
  }
  function K() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...ae()];
  }
  function k(p) {
    return !!p && Array.isArray(i.shots) && i.shots.includes(p);
  }
  function re(p) {
    return !!p && Array.isArray(i.stickers) && i.stickers.includes(p);
  }
  function de() {
    var p;
    return Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [];
  }
  function we(p) {
    const P = he(p);
    if (!P) return null;
    const S = de().find((M) => String((M == null ? void 0 : M.id) || "").trim() === P);
    return !S || String((S == null ? void 0 : S.layerKind) || "paint") !== "paint" ? null : {
      ...S,
      id: ne(P),
      type: "rasterObject",
      rasterObjectId: P
    };
  }
  function _e(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const P = he(p.rasterObjectId || p.id || "");
    return !!P && !!we(ne(P));
  }
  function N(p) {
    const P = q(p), S = String(P.actionGroupId || "").trim();
    if (!S) return null;
    const M = C().find((W) => String((W == null ? void 0 : W.id) || (W == null ? void 0 : W.actionGroupId) || "") === S || String((W == null ? void 0 : W.actionGroupId) || "") === S);
    return M ? {
      ...M,
      id: G("paint", S),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: S
    } : null;
  }
  function le(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const P = String(p.actionGroupId || "").trim(), S = String(p.layerKind || "paint").trim() || "paint";
    return !!P && !!N(G(S, P));
  }
  function b(p, P = null) {
    const S = q(p, P), M = String(S.actionGroupId || "").trim();
    return M ? d(S.layerKind).filter((W) => String((W == null ? void 0 : W.actionGroupId) || "").trim() === M) : [];
  }
  function y(p, P = "paint") {
    const S = String(p || "").trim(), W = `geomv5:${String(P || "paint").trim() || "paint"}:${S}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ye = a(), D = String((ye == null ? void 0 : ye.id) || ""), ie = ye ? c(ye) : null;
      return `${W}:frame:${D}:${Math.round(Number((ye == null ? void 0 : ye.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.roll_deg) ?? (ye == null ? void 0 : ye.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ye == null ? void 0 : ye.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((ie == null ? void 0 : ie.x) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.y) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.w) || 0))}:${Math.round(Number((ie == null ? void 0 : ie.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function I(p, P, S) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(P || 0)) % 1 + 1) % 1,
      v: Ie(Number(p.v || 0) + Number(S || 0), 0, 1)
    };
  }
  function v(p, P) {
    let S = Number(p || 0) - Number(P || 0);
    for (; S > 0.5; ) S -= 1;
    for (; S < -0.5; ) S += 1;
    return S;
  }
  function V(p, P = null, S = null) {
    var xe;
    const M = q(p, P), W = Array.isArray(S) ? S : b(M.actionGroupId, M.layerKind), ye = [];
    if (W.forEach((Pe) => {
      const Ce = (Pe == null ? void 0 : Pe.geometry) || null, Le = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Le) && ye.push(...Le);
    }), !ye.length) return { u: 0.5, v: 0.5 };
    const D = Number(((xe = ye[0]) == null ? void 0 : xe.u) || 0);
    let ie = 0, Ne = 0;
    return ye.forEach((Pe) => {
      ie += D + v(Number((Pe == null ? void 0 : Pe.u) || 0), D), Ne += Number((Pe == null ? void 0 : Pe.v) || 0);
    }), {
      u: (ie / ye.length % 1 + 1) % 1,
      v: Ie(Ne / ye.length, 0, 1)
    };
  }
  function L(p, P, S = 1, M = 0) {
    if (!p || typeof p != "object") return p;
    const W = Number((P == null ? void 0 : P.u) || 0), ye = Number((P == null ? void 0 : P.v) || 0), D = v(Number(p.u || 0), W), ie = Number(p.v || 0) - ye, Ne = Number(M || 0) * wr, xe = Math.cos(Ne), Pe = Math.sin(Ne), Ce = Math.max(0.02, Number(S || 1)), Le = (D * xe - ie * Pe) * Ce, je = (D * Pe + ie * xe) * Ce;
    return {
      ...p,
      u: ((W + Le) % 1 + 1) % 1,
      v: Ie(ye + je, 0, 1)
    };
  }
  function J(p, P, S, M = null, W = null, ye = null) {
    const D = q(p, W), ie = String(D.actionGroupId || "").trim();
    if (!ie) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(M) ? new Map(M.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Pe = !1;
    if (Ne.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== ie) return;
      const Le = (xe == null ? void 0 : xe.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, je = Ce == null ? void 0 : Ce.geometry, Ke = Le == null ? void 0 : Le.geometry;
      !je || !Ke || (Array.isArray(Ke.points) && (je.points = Ke.points.map(($e) => I($e, P, S)), Pe = !0), Array.isArray(Ke.rawPoints) && (je.rawPoints = Ke.rawPoints.map(($e) => I($e, P, S)), Pe = !0), Array.isArray(Ke.processedPoints) && (je.processedPoints = Ke.processedPoints.map(($e) => I($e, P, S)), Pe = !0));
    }), Pe && ye) {
      const Ce = C().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === ie);
      Ce && (Ce.frame = null);
    }
    return Pe;
  }
  function O(p, P = 1, S = 0, M = null, W = null, ye = null) {
    const D = q(p, W), ie = String(D.actionGroupId || "").trim();
    if (!ie) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(M) ? M : b(ie, D.layerKind), Pe = Array.isArray(xe) ? new Map(xe.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Ce = (ye == null ? void 0 : ye.centerUv) ?? V(ie, D.layerKind, xe);
    let Le = !1;
    if (Ne.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== ie) return;
      const Ke = (Pe == null ? void 0 : Pe.get(String((je == null ? void 0 : je.id) || ""))) || je, $e = je == null ? void 0 : je.geometry, He = Ke == null ? void 0 : Ke.geometry;
      !$e || !He || (Array.isArray(He.points) && ($e.points = He.points.map((se) => L(se, Ce, P, S)), Le = !0), Array.isArray(He.rawPoints) && ($e.rawPoints = He.rawPoints.map((se) => L(se, Ce, P, S)), Le = !0), Array.isArray(He.processedPoints) && ($e.processedPoints = He.processedPoints.map((se) => L(se, Ce, P, S)), Le = !0));
    }), Le && ye) {
      const je = C().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === ie);
      je && (je.frame = null);
    }
    return Le;
  }
  function F(p, P, S, M = null) {
    const W = he(p);
    if (!W) return !1;
    const ye = de().find((Pe) => String((Pe == null ? void 0 : Pe.id) || "").trim() === W);
    if (!ye) return !1;
    const D = M && typeof M == "object" ? M : ye, ie = (D == null ? void 0 : D.transform) || {}, Ne = Number(ie.du || 0) + Number(P || 0), xe = Ie(Number(ie.dv || 0) + Number(S || 0), -1, 1);
    return ye.transform || (ye.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ye.transform.du = Ne, ye.transform.dv = xe, !0;
  }
  function x(p, P = 1, S = null) {
    const M = he(p);
    if (!M) return !1;
    const W = de().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === M);
    if (!W) return !1;
    const ye = S && typeof S == "object" ? S : W, D = (ye == null ? void 0 : ye.transform) || {}, ie = Math.max(0.01, Number(D.scale || 1)), Ne = Ie(ie * Math.max(0.01, Number(P || 1)), 0.01, 100);
    return W.transform || (W.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), W.transform.scale = Ne, !0;
  }
  function R() {
    return fe();
  }
  function Z(p) {
    var P;
    return !p || typeof p != "object" ? !1 : o ? ((P = p.source) == null ? void 0 : P.kind) === "port" : String(p.id || "") === Dd || String(p.source_kind || "") === JP;
  }
  function me(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function ue(p) {
    return Z(p) && me(p) ? Lm : 1;
  }
  function ve(p, P, S = 1, M = 0) {
    if (!p || typeof p != "object") return p;
    const W = Number((P == null ? void 0 : P.u) || 0), ye = Number((P == null ? void 0 : P.v) || 0), D = v(Number(p.u || 0), W), ie = Number(p.v || 0) - ye, Ne = Math.max(0.02, Number(S || 1)), xe = Number(M || 0) * wr, Pe = Math.cos(xe), Ce = Math.sin(xe), Le = D / Ne, je = ie / Ne, Ke = Le * Pe + je * Ce, $e = -Le * Ce + je * Pe;
    return {
      ...p,
      u: ((W + Ke) % 1 + 1) % 1,
      v: ye + $e
    };
  }
  function Se(p) {
    const P = (p == null ? void 0 : p.bbox) || null, S = (p == null ? void 0 : p.transform) || {};
    return P ? {
      u: (((Number(P.u0 || 0) + Number(P.u1 || 0)) * 0.5 + Number(S.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(P.v0 || 0) + Number(P.v1 || 0)) * 0.5 + Number(S.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function be(p) {
    var Ne, xe, Pe, Ce;
    const P = (p == null ? void 0 : p.bbox) || null;
    if (!P) return [];
    const S = {
      u: (Number(P.u0 || 0) + Number(P.u1 || 0)) * 0.5,
      v: (Number(P.v0 || 0) + Number(P.v1 || 0)) * 0.5
    }, M = Math.max(0.01, Number(((Ne = p == null ? void 0 : p.transform) == null ? void 0 : Ne.scale) || 1)), W = Number(((xe = p == null ? void 0 : p.transform) == null ? void 0 : xe.rot_deg) || 0), ye = Number(((Pe = p == null ? void 0 : p.transform) == null ? void 0 : Pe.du) || 0), D = Number(((Ce = p == null ? void 0 : p.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(P.u0 || 0), v: Number(P.v0 || 0) },
      { u: Number(P.u1 || 0), v: Number(P.v0 || 0) },
      { u: Number(P.u1 || 0), v: Number(P.v1 || 0) },
      { u: Number(P.u0 || 0), v: Number(P.v1 || 0) }
    ].map((Le) => I(L(Le, S, M, W), ye, D));
  }
  function Q(p) {
    const P = he((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), S = (p == null ? void 0 : p.transform) || {}, M = (p == null ? void 0 : p.bbox) || {}, W = `${P}:${r.mode}:${u()}:${M.u0}:${M.v0}:${M.u1}:${M.v1}:${S.du}:${S.dv}:${S.rot_deg}:${S.scale}`;
    if (r.mode === "frame") {
      const ye = a(), D = ye ? c(ye) : null;
      return `${W}:frame:${String((ye == null ? void 0 : ye.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function ge(p) {
    const P = String((p == null ? void 0 : p.id) || ""), S = k(p) ? "frame" : re(p) ? "sticker" : "item", M = $(p), W = [
      S,
      P,
      r.mode,
      Number((M == null ? void 0 : M.yaw_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.pitch_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.hFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.vFOV_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.rot_deg) || 0).toFixed(4),
      Number((M == null ? void 0 : M.roll_deg) || 0).toFixed(4),
      Dr(M),
      w(p) && _(p)
    ].join(":");
    if (r.mode === "frame") {
      const ye = a(), D = ye ? c(ye) : null;
      return `${W}:frame:${String((ye == null ? void 0 : ye.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${W}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function B() {
    A().forEach((P, S) => {
      P.type === "sticker" && P.item && (P.item.z_index = S), P.type === "strokeGroup" && P.item && (P.item.z_index = S), P.type === "rasterObject" && P.item && (P.item.z_index = S);
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
        sceneStickerShown: _
      } = p);
    },
    getList: m,
    skyStickers: h,
    isSceneSticker: w,
    isUploadingSticker: ee,
    poseOf: $,
    writePose: te,
    getPaintingGroupList: C,
    makeStrokeGroupSelectionId: G,
    makeRasterObjectSelectionId: ne,
    parseRasterObjectSelectionId: he,
    ensurePaintingGroupEntry: ce,
    getFrameCornersUv: oe,
    ensureGroupFrame: H,
    getDisplayListObjects: A,
    getOrderedPaintGroupIds: j,
    getOrderedDisplayListObjects: T,
    getSelectableStrokeGroupItems: Y,
    getSelectableRasterObjectItems: pe,
    cutoutStickers: ae,
    getCutoutSelectableItems: K,
    isShotItem: k,
    isStickerItem: re,
    getRasterObjectList: de,
    getRasterObjectItem: we,
    isRasterObjectItem: _e,
    getStrokeGroupItem: N,
    isStrokeGroupItem: le,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: y,
    shortestWrappedDelta: v,
    getStrokeGroupCenterUv: V,
    applyStrokeGroupOffset: J,
    applyStrokeGroupTransform: O,
    applyRasterObjectOffset: F,
    applyRasterObjectTransform: x,
    getNextStickerZIndex: R,
    isExternalSticker: Z,
    isStickerHidden: me,
    getStickerDisplayAlpha: ue,
    inverseTransformErpPointAround: ve,
    getRasterObjectCenterUv: Se,
    getRasterObjectTransformedErpPoints: be,
    getRasterObjectGeomCacheKey: Q,
    getSceneItemGeomCacheKey: ge,
    normalizeDisplayZIndices: B
  };
}
function zN(e) {
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
  let c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K;
  function k() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const P = C(p);
    if (P) return P;
    const S = ee(p);
    return S || (o ? _().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null : h().find((M) => String((M == null ? void 0 : M.id) || "") === p) || null);
  }
  function re() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], P = [], S = /* @__PURE__ */ new Set();
    return p.forEach((M) => {
      const W = String(M || "").trim();
      if (!W || S.has(W)) return;
      S.add(W);
      const ye = W === String(t.selectedId || "") ? k() : C(W) || ee(W) || (o ? _().find((D) => String((D == null ? void 0 : D.id) || "") === W) : h().find((D) => String((D == null ? void 0 : D.id) || "") === W));
      ye && P.push(ye);
    }), P;
  }
  function de(p = null) {
    const P = Array.isArray(p) ? p : re();
    if (!P || P.length < 2) return null;
    const S = P.map((xe) => E(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!S.length) return null;
    const M = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.x) || 0))), W = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.y) || 0))), ye = Math.min(...M), D = Math.max(...M), ie = Math.min(...W), Ne = Math.max(...W);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ye + D) * 0.5, y: (ie + Ne) * 0.5 },
      corners: [
        { x: ye, y: ie },
        { x: D, y: ie },
        { x: D, y: Ne },
        { x: ye, y: Ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ye + D) * 0.5, y: ie, a: { x: ye, y: ie }, b: { x: D, y: ie } },
        { edge: "right", x: D, y: (ie + Ne) * 0.5, a: { x: D, y: ie }, b: { x: D, y: Ne } },
        { edge: "bottom", x: (ye + D) * 0.5, y: Ne, a: { x: D, y: Ne }, b: { x: ye, y: Ne } },
        { edge: "left", x: ye, y: (ie + Ne) * 0.5, a: { x: ye, y: Ne }, b: { x: ye, y: ie } }
      ],
      rotateStemBase: { x: (ye + D) * 0.5, y: ie },
      rotateHandle: { x: (ye + D) * 0.5, y: ie - 30 }
    };
  }
  function we(p) {
    const P = String((p == null ? void 0 : p.id) || "").trim();
    return !!P && Array.isArray(t.selectedIds) && t.selectedIds.includes(P);
  }
  function _e() {
    const p = k();
    return p ? ce(p) || G(p) ? "stroke" : he(p) ? "frame" : "image" : null;
  }
  function N(p) {
    if (!p || typeof p != "object") return !1;
    if (ce(p)) {
      const P = String(p.actionGroupId || p.id || "").trim(), S = w().find((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() === P);
      return (S == null ? void 0 : S.locked) === !0;
    }
    if (G(p)) {
      const P = A(p.rasterObjectId || p.id || ""), S = $().find((M) => String((M == null ? void 0 : M.id) || "").trim() === P);
      return (S == null ? void 0 : S.locked) === !0;
    }
    return p.locked === !0;
  }
  function le(p = null) {
    const P = Array.isArray(p) ? p : re();
    return P.length > 0 && P.every((S) => N(S));
  }
  function b(p, P) {
    const S = P === !0;
    if (!p || typeof p != "object") return !1;
    if (ce(p)) {
      const M = String(p.actionGroupId || p.id || "").trim(), W = w().find((ye) => String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim() === M);
      return !W || W.locked === S ? !1 : (W.locked = S, !0);
    }
    if (G(p)) {
      const M = A(p.rasterObjectId || p.id || ""), W = $().find((ye) => String((ye == null ? void 0 : ye.id) || "").trim() === M);
      return !W || W.locked === S ? !1 : (W.locked = S, !0);
    }
    return p.locked === S ? !1 : (p.locked = S, !0);
  }
  function y() {
    if (r) return;
    const p = re();
    if (!p.length) return;
    const P = !le(p);
    let S = !1;
    p.forEach((M) => {
      b(M, P) && (S = !0);
    }), S && (T(), d(), ae(), K(), Y());
  }
  function I(p) {
    ve(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && fe(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && he(p) ? s.active.selected_shot_id = p.id || null : p ? he(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function v(p, P = null) {
    const S = [], M = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((D) => {
      const ie = String((D == null ? void 0 : D.id) || "").trim();
      !ie || M.has(ie) || (M.add(ie), S.push(ie));
    }), t.selectedIds = S, ve(), a.selection = null;
    const W = String(P || "").trim();
    t.selectedId = W && S.includes(W) ? W : S[S.length - 1] || null;
    const ye = k();
    s.active.selected_sticker_id = ye && fe(ye) && ye.id || null, ye && he(ye) ? s.active.selected_shot_id = ye.id || null : S.length || (s.active.selected_shot_id = null);
  }
  function V() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((S, M) => ({
      kind: "frame",
      item: S,
      label: String((S == null ? void 0 : S.label) || `Frame ${M + 1}`)
    })), P = f().map((S, M) => {
      var ye, D;
      const W = z(S) ? String(S.id || Dd) : String(((D = (ye = s.assets) == null ? void 0 : ye[S.asset_id]) == null ? void 0 : D.name) || S.asset_id || S.id || `Image ${M + 1}`);
      return {
        kind: "image",
        item: S,
        label: W
      };
    });
    return [...p, ...P];
  }
  function L(p) {
    return p === "frame" ? ze.camera : p === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function J(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: L(p.kind)
    };
  }
  function O() {
    if (r) return;
    const p = k();
    !p || !z(p) || (p.visible = q(p), Q(), oe(), T(), d(), K(), ae(), Y());
  }
  function F() {
    if (r || l !== "stickers") return;
    const p = k();
    if (!p || !z(p)) return;
    const P = p.initial_pose;
    if (!P || typeof P != "object") return;
    p.yaw_deg = Number(P.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(P.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(P.hFOV_deg ?? p.hFOV_deg ?? 30);
    const S = te(po, () => {
      Y();
    });
    S && (S.complete || S.naturalWidth || S.width) ? p.vFOV_deg = u(
      Number(P.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    ) : p.vFOV_deg = Number(P.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(P.rot_deg ?? p.rot_deg ?? 0), T(), d(), K(), ae(), Y();
  }
  function x(p) {
    if (!p || !z(p)) return null;
    const P = p.initial_pose;
    if (!P || typeof P != "object") return null;
    const S = {
      yaw_deg: Number(P.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(P.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(P.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(P.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(P.rot_deg ?? p.rot_deg ?? 0)
    }, M = te(po, () => {
      Y();
    });
    return M && (M.complete || M.naturalWidth || M.width) && (S.vFOV_deg = u(
      S.hFOV_deg,
      Number(M.naturalWidth || M.width || 1),
      Number(M.naturalHeight || M.height || 1)
    )), S;
  }
  function R() {
    const p = k();
    if (!p || !z(p)) return !1;
    const P = x(p);
    if (!P) return !1;
    const S = (M, W) => Math.abs(Number(M || 0) - Number(W || 0)) <= 1e-4;
    return !(S(p.yaw_deg, P.yaw_deg) && S(p.pitch_deg, P.pitch_deg) && S(p.hFOV_deg, P.hFOV_deg) && S(p.vFOV_deg, P.vFOV_deg) && S(p.rot_deg, P.rot_deg));
  }
  function Z(p = {}) {
    const S = p.preservePanelValues !== !1 ? j(k()) : null;
    S && (t.panelLastValues = {
      yaw_deg: Number(S.yaw_deg || 0),
      pitch_deg: Number(S.pitch_deg || 0),
      hFOV_deg: Number(S.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(S.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(S.rot_deg || 0),
      roll_deg: Number(S.roll_deg || 0),
      aspect_id: Dr(S)
    }), t.selectedId = null, t.selectedIds = [], ve(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function me() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function ue(p) {
    I(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function ve() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Se(p) {
    return !!p && !r && !p.locked;
  }
  function be() {
    if (l !== "cutout") return;
    const p = g();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function Q() {
    var P;
    const p = k();
    (ne(p) && !pe(p) || t.selectedId === ad && X() && !c() || _e() === "stroke" && !H()) && I(null), ((P = me()) == null ? void 0 : P.visible) === !1 && ve();
  }
  function ge() {
    if (r) return;
    const p = re();
    if (!k() || p.length === 0 || p.some((ie) => N(ie))) return;
    U();
    const S = m(), M = new Set(p.map((ie) => fe(ie) ? `sticker:${String(ie.id || "")}` : G(ie) ? `rasterObject:${A(ie.rasterObjectId || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || ie.id || "")}`)), W = [], ye = [];
    if (S.forEach((ie) => {
      var xe, Pe;
      const Ne = ie.type === "sticker" ? `sticker:${String(((xe = ie.item) == null ? void 0 : xe.id) || "")}` : ie.type === "rasterObject" ? `rasterObject:${String(((Pe = ie.item) == null ? void 0 : Pe.id) || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || "")}`;
      M.has(Ne) ? W.push(ie) : ye.push(ie);
    }), !W.length || W[W.length - 1] === S[S.length - 1]) return;
    [...ye, ...W].forEach((ie, Ne) => {
      ie.type === "sticker" && ie.item && (ie.item.z_index = Ne), ie.type === "strokeGroup" && ie.item && (ie.item.z_index = Ne), ie.type === "rasterObject" && ie.item && (ie.item.z_index = Ne);
    }), oe(), T(), d(), ae(), Y();
  }
  function B() {
    if (r) return;
    const p = re();
    if (!k() || p.length === 0 || p.some((ie) => N(ie))) return;
    U();
    const S = m(), M = new Set(p.map((ie) => fe(ie) ? `sticker:${String(ie.id || "")}` : G(ie) ? `rasterObject:${A(ie.rasterObjectId || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || ie.id || "")}`)), W = [], ye = [];
    if (S.forEach((ie) => {
      var xe, Pe;
      const Ne = ie.type === "sticker" ? `sticker:${String(((xe = ie.item) == null ? void 0 : xe.id) || "")}` : ie.type === "rasterObject" ? `rasterObject:${String(((Pe = ie.item) == null ? void 0 : Pe.id) || ie.id || "")}` : `strokeGroup:${String(ie.actionGroupId || "")}`;
      M.has(Ne) ? W.push(ie) : ye.push(ie);
    }), !W.length || W[0] === S[0]) return;
    [...W, ...ye].forEach((ie, Ne) => {
      ie.type === "sticker" && ie.item && (ie.item.z_index = Ne), ie.type === "strokeGroup" && ie.item && (ie.item.z_index = Ne), ie.type === "rasterObject" && ie.item && (ie.item.z_index = Ne);
    }), oe(), T(), d(), ae(), Y();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: g,
        getCutoutSelectableItems: _,
        getDisplayListObjects: m,
        getList: h,
        getPaintingGroupList: w,
        getRasterObjectItem: ee,
        getRasterObjectList: $,
        getStickerUiImage: te,
        getStrokeGroupItem: C,
        hasCamera: X,
        isExternalSticker: z,
        isRasterObjectItem: G,
        isSceneSticker: ne,
        isShotItem: he,
        isStickerHidden: q,
        isStickerItem: fe,
        isStrokeGroupItem: ce,
        markObjectVisualsDirty: oe,
        normalizeDisplayZIndices: U,
        objectGeom: E,
        paintingShown: H,
        parseRasterObjectSelectionId: A,
        poseOf: j,
        pushHistory: T,
        requestDraw: Y,
        sceneStickerShown: pe,
        updateSelectionMenu: ae,
        updateSidePanel: K
      } = p);
    },
    getSelected: k,
    getSelectedItems: re,
    getMultiSelectionGeom: de,
    isItemSelected: we,
    getSelectedKind: _e,
    isItemLocked: N,
    areAllSelectedItemsLocked: le,
    toggleSelectedLock: y,
    setSelectedItem: I,
    setSelectedItems: v,
    getCutoutInspectorItems: V,
    getSelectionItemIcon: L,
    getSelectionItemLabelData: J,
    toggleSelectedExternalStickerVisibility: O,
    restoreSelectedToInitialPose: F,
    canRestoreSelectedToInitial: R,
    clearSelection: Z,
    selectedWorldSticker: me,
    selectWorldSticker: ue,
    clearWorldSelection: ve,
    worldStickerEditable: Se,
    applyInitialCutoutFocus: be,
    releaseHiddenSelection: Q,
    bringSelectedToFront: ge,
    sendSelectedToBack: B
  };
}
function jN(e) {
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
  function _() {
    const re = G({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !re || re.length !== 4 ? !1 : re[0].y >= re[3].y;
  }
  function m() {
    return Rm({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const k = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return k.some((re, de) => re !== f.key[de]) && (f = { key: k, projection: $m(m(), r.width, r.height) }), f.projection;
  }
  function w(k) {
    const re = h().project(k);
    return re.z > 1e-4 ? re : null;
  }
  function ee(k, re) {
    return h().ray(k, re);
  }
  function $() {
    const k = r.width, re = r.height, de = 2;
    if (k / Math.max(re, 1) >= de) {
      const b = re, y = b * de;
      return { x: (k - y) * 0.5, y: 0, w: y, h: b };
    }
    const _e = k, N = _e / de;
    return { x: 0, y: (re - N) * 0.5, w: _e, h: N };
  }
  function te(k) {
    return {
      lon: Math.atan2(k.x, k.z),
      lat: Math.asin(Ie(k.y, -1, 1))
    };
  }
  function C(k, re = null) {
    const { lon: de, lat: we } = te(k), _e = $();
    let N = _e.x + (de / (2 * Math.PI) + 0.5) * _e.w;
    const le = _e.y + (0.5 - we / Math.PI) * _e.h;
    if (re !== null) {
      for (; N - re > _e.w / 2; ) N -= _e.w;
      for (; N - re < -_e.w / 2; ) N += _e.w;
    }
    return { x: N, y: le, z: 1 };
  }
  function X(k) {
    const re = c(k), de = go(
      Number(re.yaw_deg || 0),
      Number(re.pitch_deg || 0),
      Number(re.rot_deg || re.roll_deg || 0)
    ), we = Math.tan(Ie(Number(re.hFOV_deg || 20), 0.1, 179) * 0.5 * wr), _e = Math.tan(Ie(Number(re.vFOV_deg || 20), 0.1, 179) * 0.5 * wr);
    return {
      centerDir: de.fwd,
      right: de.right,
      up: de.up,
      tanX: we,
      tanY: _e
    };
  }
  function z(k, re, de) {
    return uN(_p(_p(k.centerDir, xp(k.right, re)), xp(k.up, de)));
  }
  function G(k) {
    const re = X(k);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: we, v: _e }) => z(re, we * re.tanX, _e * re.tanY));
  }
  function ne(k, re, de) {
    const we = X(k), _e = (re * 2 - 1) * we.tanX, N = (1 - de * 2) * we.tanY;
    return z(we, _e, N);
  }
  function he(k) {
    const re = t.width / Math.max(1, r.width), de = t.height / Math.max(1, r.height);
    return { x: k.x * re, y: k.y * de, w: k.w * re, h: k.h * de };
  }
  function q(k, re = null, de = null, we = null) {
    if (n.mode === "frame") {
      const _e = re || a();
      if (!_e) return [];
      const N = de || l(_e);
      return T(k, _e, N);
    }
    return H(k, we);
  }
  function fe(k, re = null, de = null, we = null, _e = null) {
    if (!k) return null;
    if (n.mode === "unwrap") {
      const le = H([k], _e);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const N = oe(k);
    return N ? d(N, re, de, we) : null;
  }
  function ce(k, re) {
    if (!k || !re) return null;
    const de = Number(re.x || 0), we = Number(re.y || 0);
    return ne(k, de, we);
  }
  function oe(k) {
    if (!k) return null;
    const re = (Number(k.u || 0) - 0.5) * (2 * Math.PI), de = (0.5 - Number(k.v || 0)) * Math.PI, we = Math.cos(de);
    return Ll(we * Math.sin(re), Math.sin(de), we * Math.cos(re));
  }
  function U(k, re) {
    if (!k || !re) return null;
    const de = X(k), we = Mc(re, de.centerDir);
    if (!Number.isFinite(we) || we <= 1e-6) return null;
    const _e = Mc(re, de.right) / we, N = Mc(re, de.up) / we;
    return {
      x: (_e / Math.max(1e-6, de.tanX) + 1) * 0.5,
      y: (1 - N / Math.max(1e-6, de.tanY)) * 0.5
    };
  }
  function E(k) {
    if (!Array.isArray(k) || k.length < 3) return [];
    if (n.mode === "unwrap") {
      const de = $();
      return k.map((we) => ({
        x: de.x + Number(we.u || 0) * de.w,
        y: de.y + Number(we.v || 0) * de.h
      }));
    }
    const re = k.map((de) => w(oe(de))).filter(Boolean);
    return re.every((de) => Number(de.z || 0) > 0) ? re.map((de) => ({ x: Number(de.x || 0), y: Number(de.y || 0) })) : [];
  }
  function H(k, re = null) {
    if (!Array.isArray(k) || k.length < 1) return [];
    if (n.mode === "unwrap") {
      const we = $();
      return k.map((_e) => {
        const N = (Number(_e.u || 0) % 1 + 1) % 1, le = re == null ? N : Number(re || 0) + u(N, re);
        return {
          x: we.x + le * we.w,
          y: we.y + Number(_e.v || 0) * we.h
        };
      });
    }
    const de = k.map((we) => w(oe(we))).filter(Boolean);
    return de.every((we) => Number(we.z || 0) > 0) ? de.map((we) => ({ x: Number(we.x || 0), y: Number(we.y || 0) })) : [];
  }
  function A(k, re = 160) {
    if (!Array.isArray(k) || k.length < 3) return !1;
    for (let de = 0; de < k.length; de += 1) {
      const we = k[de], _e = k[(de + 1) % k.length];
      if (!we || !_e || !Number.isFinite(we.x) || !Number.isFinite(we.y) || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || Math.hypot(Number(_e.x) - Number(we.x), Number(_e.y) - Number(we.y)) > re) return !1;
    }
    return !0;
  }
  function j(k, re, de) {
    if (!Array.isArray(k) || k.length < 3 || !re || !de) return [];
    const we = [];
    for (const _e of k) {
      const N = oe(_e), le = U(re, N);
      if (!le) return [];
      we.push({
        x: Number(de.x || 0) + Number(le.x || 0) * Number(de.w || 0),
        y: Number(de.y || 0) + Number(le.y || 0) * Number(de.h || 0)
      });
    }
    return A(we, Math.max(80, Math.max(de.w, de.h) * 0.75)) ? we : [];
  }
  function T(k, re, de) {
    if (!Array.isArray(k) || k.length < 1 || !re || !de) return [];
    const we = [];
    for (const _e of k) {
      const N = oe(_e), le = U(re, N);
      le && we.push({
        x: Number(de.x || 0) + Number(le.x || 0) * Number(de.w || 0),
        y: Number(de.y || 0) + Number(le.y || 0) * Number(de.h || 0)
      });
    }
    return we;
  }
  function Y(k) {
    const re = r.getBoundingClientRect();
    return {
      x: (k.clientX - re.left) / re.width * r.width,
      y: (k.clientY - re.top) / re.height * r.height
    };
  }
  function pe(k) {
    const re = r.getBoundingClientRect();
    return {
      x: Number(k.clientX) - Number(re.left || 0),
      y: Number(k.clientY) - Number(re.top || 0)
    };
  }
  function ae(k, re = performance.now()) {
    if (n.mode === "unwrap") {
      const N = $(), le = (k.x - N.x) / Math.max(1, N.w), b = (k.y - N.y) / Math.max(1, N.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Ie(b, 0, 1),
        t: Number(re || 0)
      };
    }
    const de = ee(k.x, k.y), { lon: we, lat: _e } = te(de);
    return {
      targetKind: "ERP_GLOBAL",
      u: (we / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - _e / Math.PI, 0, 1),
      t: Number(re || 0)
    };
  }
  function K(k, re, de = performance.now()) {
    const we = l(re);
    if (!we) return null;
    const _e = {
      x: (Number(k.x) - we.x) / Math.max(1, we.w),
      y: (Number(k.y) - we.y) / Math.max(1, we.h)
    };
    if (_e.x < 0 || _e.x > 1 || _e.y < 0 || _e.y > 1) return null;
    const N = ce(re, _e);
    if (!N) return null;
    const { lon: le, lat: b } = te(N);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - b / Math.PI, 0, 1),
      t: Number(de || 0)
    };
  }
  return {
    connect(k) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = k);
    },
    isErpCamera: g,
    currentViewCamera: m,
    currentViewProjection: h,
    projectDir: w,
    screenToWorldDir: ee,
    getUnwrapRect: $,
    projectDirUnwrap: C,
    getStickerFrame: X,
    stickerDirFromFrame: z,
    stickerCornersDir: G,
    stickerSampleDir: ne,
    stickerCornerOrderSanity: _,
    projectEditorPoints: q,
    projectErpPointToEditor: fe,
    frameLocalPointToWorldDir: ce,
    erpPointToWorldDir: oe,
    worldDirToFrameLocalPoint: U,
    projectLassoPointsToCurrentView: E,
    projectErpLassoPointsToFrameRect: j,
    screenPos: Y,
    screenPosCss: pe,
    screenPosToErpPoint: ae,
    screenPosToFrameAsErpPoint: K,
    deviceRect: he
  };
}
function HN(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T;
  function Y(N, le) {
    const b = String(N.actionGroupId || N.id || "").trim(), y = $(b, N.layerKind), I = a(b, N.layerKind, y), v = (I == null ? void 0 : I.centerUv) || ee(b, N.layerKind, y), V = n.mode === "unwrap" ? Number((v == null ? void 0 : v.u) || 0) : null, L = [], J = n.mode === "frame" ? l() : null, O = J ? u(J) : null;
    for (const Q of y) {
      const ge = (Q == null ? void 0 : Q.geometry) || null, B = (ge == null ? void 0 : ge.geometryKind) === "lasso_fill" ? ge == null ? void 0 : ge.points : (ge == null ? void 0 : ge.processedPoints) || (ge == null ? void 0 : ge.rawPoints) || (ge == null ? void 0 : ge.points) || [], p = oe(B, J, O, V).filter((M) => Number.isFinite(M == null ? void 0 : M.x) && Number.isFinite(M == null ? void 0 : M.y));
      if (!p.length) continue;
      const P = c(String((Q == null ? void 0 : Q.toolKind) || "pen")), S = Fn[P] || Fn[Er];
      L.push({
        points: p,
        closed: String((ge == null ? void 0 : ge.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Q == null ? void 0 : Q.size) || 10) * Math.max(0.1, Number((S == null ? void 0 : S.sizeScale) ?? 1)) + 10),
        layerKind: String((Q == null ? void 0 : Q.layerKind) || N.layerKind || "paint")
      });
    }
    const F = U(v, null, J, O, V);
    if (!F) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const R = d(I).map((Q) => U(Q, F.x, J, O, V)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y)).map((Q) => ({ x: Number(Q.x || 0), y: Number(Q.y || 0) }));
    if (R.length < 4) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const Z = (Q, ge) => ({
      x: (Number((Q == null ? void 0 : Q.x) || 0) + Number((ge == null ? void 0 : ge.x) || 0)) * 0.5,
      y: (Number((Q == null ? void 0 : Q.y) || 0) + Number((ge == null ? void 0 : ge.y) || 0)) * 0.5,
      a: Q,
      b: ge
    }), me = Z(R[0], R[1]), ue = Z(R[1], R[2]), ve = Z(R[2], R[3]), Se = Z(R[3], R[0]), be = {
      kind: "strokeGroup",
      center: { x: Number(F.x || 0), y: Number(F.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...me },
        { edge: "right", ...ue },
        { edge: "bottom", ...ve },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: me.x, y: me.y },
      rotateHandle: { x: me.x, y: me.y - 30 },
      strokePaths: L,
      visible: !0
    };
    return n._strokeGeomCache.set(le, be), be;
  }
  function pe(N, le) {
    const b = n.mode === "frame" ? l() : null, y = b ? u(b) : null, I = f(N), v = n.mode === "unwrap" ? Number((I == null ? void 0 : I.u) || 0) : null, V = U(I, null, b, y, v), J = _(N).map((R) => U(R, (V == null ? void 0 : V.x) ?? null, b, y, v)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (!Array.isArray(J) || J.length < 4) {
      const R = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(le, R), R;
    }
    const O = J.slice(0, 4).map((R) => ({ x: Number((R == null ? void 0 : R.x) || 0), y: Number((R == null ? void 0 : R.y) || 0) })), x = {
      kind: "rasterObject",
      center: {
        x: O.reduce((R, Z) => R + Number(Z.x || 0), 0) / O.length,
        y: O.reduce((R, Z) => R + Number(Z.y || 0), 0) / O.length
      },
      corners: O,
      visible: !0
    };
    return n._strokeGeomCache.set(le, x), x;
  }
  function ae(N, le = null, b = null, y = null, I = {}) {
    if (n.mode === "frame") {
      const F = b || l(), x = y || u(F);
      if (!F || !x) return null;
      const R = F ? T(F, N) : null;
      return R ? {
        x: Number(x.x || 0) + Number(R.x || 0) * Number(x.w || 0),
        y: Number(x.y || 0) + Number(R.y || 0) * Number(x.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ce(N, le);
    const v = 1e-4, V = o().project(N, v);
    if (!Number.isFinite(V.z) || V.z <= v && !(I != null && I.clipBehind)) return null;
    const L = r.width, J = r.height, O = Math.max(L, J) * 2;
    return {
      x: Ie(V.x, -O, L + O),
      y: Ie(V.y, -O, J + O),
      z: Math.max(V.z, v),
      rawZ: V.z,
      clipped: V.z <= v
    };
  }
  function K(N, le = []) {
    if (n.mode !== "pano" || G(N)) return 1;
    const b = le.map((y) => Number((y == null ? void 0 : y.rawZ) ?? (y == null ? void 0 : y.z))).filter((y) => Number.isFinite(y));
    return b.length ? lN(0.035, 0.2, Math.min(...b)) : 1;
  }
  function k(N) {
    if (X(N) && !E(N)) return { visible: !1 };
    const le = q(N), b = Tn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), y = n.mode === "frame" ? l() : null, I = y ? u(y) : null, v = n.mode === "pano" && (G(N) || z(N)), V = v ? { clipBehind: !0 } : null, L = ae(b, null, y, I, V);
    if (!L) return { visible: !1 };
    const J = h(N), F = H(N).map((W) => ae(W, L.x, y, I, V)).filter((W) => Number.isFinite(W == null ? void 0 : W.x) && Number.isFinite(W == null ? void 0 : W.y));
    if (F.length < 4) return { visible: !1 };
    const x = A(J, 0, J.tanY), R = A(J, 0, J.tanY + Math.max(J.tanY * 0.43, 0.053)), Z = ae(x, L.x, y, I, V);
    if (!Z) return { visible: !1 };
    const me = ae(R, (Z == null ? void 0 : Z.x) ?? L.x, y, I, V), ue = ((me == null ? void 0 : me.x) ?? Z.x) - Z.x, ve = ((me == null ? void 0 : me.y) ?? Z.y) - Z.y, Se = Math.hypot(ue, ve) || 1, be = {
      x: Z.x + ue / Se * 30,
      y: Z.y + ve / Se * 30
    }, Q = ae(A(J, 0, J.tanY), L.x, y, I, V), ge = ae(A(J, J.tanX, 0), L.x, y, I, V), B = ae(A(J, 0, -J.tanY), L.x, y, I, V), p = ae(A(J, -J.tanX, 0), L.x, y, I, V);
    if (!Q || !ge || !B || !p) return { visible: !1 };
    const P = [
      L,
      ...F,
      Z,
      me,
      Q,
      ge,
      B,
      p
    ];
    if (v && !P.some((W) => Number((W == null ? void 0 : W.rawZ) ?? (W == null ? void 0 : W.z)) > 1e-4)) return { visible: !1 };
    const S = K(N, P), M = [
      {
        edge: "top",
        x: Q.x,
        y: Q.y,
        a: { x: F[0].x, y: F[0].y },
        b: { x: F[1].x, y: F[1].y }
      },
      {
        edge: "right",
        x: ge.x,
        y: ge.y,
        a: { x: F[1].x, y: F[1].y },
        b: { x: F[2].x, y: F[2].y }
      },
      {
        edge: "bottom",
        x: B.x,
        y: B.y,
        a: { x: F[2].x, y: F[2].y },
        b: { x: F[3].x, y: F[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: F[3].x, y: F[3].y },
        b: { x: F[0].x, y: F[0].y }
      }
    ];
    return {
      center: { x: L.x, y: L.y },
      corners: F.map((W) => ({ x: W.x, y: W.y })),
      edgeMidpoints: M,
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: be,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: S,
      visible: !0
    };
  }
  function re(N) {
    if (t && z(N) && te()) return { visible: !1 };
    if (!he() && (ne(N) || C(N))) return { visible: !1 };
    if (ne(N)) {
      const I = String(N.actionGroupId || N.id || "").trim(), v = w(I, N.layerKind), V = n._strokeGeomCache.get(v);
      return V || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), Y(N, v));
    }
    if (C(N)) {
      const I = g(N), v = n._strokeGeomCache.get(I);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), pe(N, I));
    }
    const le = m(N), b = n._strokeGeomCache.get(le);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const y = k(N);
    return n._strokeGeomCache.set(le, y), y;
  }
  function de(N, le, b, y = null) {
    const I = [];
    for (let v = 0; v <= b; v += 1) {
      const V = v / b;
      let L = 0, J = 0;
      le === 0 ? (L = V, J = 0) : le === 1 ? (L = 1, J = V) : le === 2 ? (L = 1 - V, J = 1) : (L = 0, J = 1 - V);
      const O = j(N, L, J), F = n.mode === "unwrap" ? ce(O, y) : fe(O);
      F && I.push(F);
    }
    return I;
  }
  function we() {
    const N = [...Array.isArray(i.shots) ? i.shots : []], le = [...s()].sort((b, y) => Number(b.z_index || 0) - Number(y.z_index || 0));
    return [...N, ...le];
  }
  function _e() {
    const N = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((b, y) => Number(y.z_index || 0) - Number(b.z_index || 0)), ...N];
  }
  return {
    connect(N) {
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
        getRasterObjectTransformedErpPoints: _,
        getSceneItemGeomCacheKey: m,
        getStickerFrame: h,
        getStrokeGeomCacheKey: w,
        getStrokeGroupCenterUv: ee,
        getStrokeGroupStrokes: $,
        isFreeSpaceView: te,
        isRasterObjectItem: C,
        isSceneSticker: X,
        isShotItem: z,
        isStickerItem: G,
        isStrokeGroupItem: ne,
        paintingShown: he,
        poseOf: q,
        projectDir: fe,
        projectDirUnwrap: ce,
        projectEditorPoints: oe,
        projectErpPointToEditor: U,
        sceneStickerShown: E,
        stickerCornersDir: H,
        stickerDirFromFrame: A,
        stickerSampleDir: j,
        worldDirToFrameLocalPoint: T
      } = N);
    },
    projectSceneItemDir: ae,
    objectGeom: re,
    sampleStickerEdge: de,
    getCutoutSelectableItemsForDisplay: we,
    getCutoutSelectableItemsForHit: _e
  };
}
const la = /* @__PURE__ */ new Map();
function GN(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q;
  function fe(v = r.interaction) {
    const V = String((v == null ? void 0 : v.kind) || "");
    if (V === "paint_stroke" || V === "paint_lasso_fill" || V === "move_stroke_group" || V === "scale_stroke_group" || V === "rotate_stroke_group" || V === "move_raster_object" || V === "scale_raster_object") return !0;
    if (V === "move_multi") {
      const L = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, J = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return L || J;
    }
    return !1;
  }
  function ce() {
    var V, L, J, O;
    let v = null;
    try {
      const F = m(), x = ((O = (J = (L = (V = r.paintEngine) == null ? void 0 : V.getErpTarget) == null ? void 0 : L.call(V, F)) == null ? void 0 : J.displayPaint) == null ? void 0 : O.canvas) || null;
      x && (v = {
        source: x,
        revision: `${h()}:${oe()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function oe() {
    var O, F, x, R, Z, me, ue;
    const v = r.interaction, V = String((v == null ? void 0 : v.kind) || "");
    if (!fe(v)) return "";
    if (V === "paint_stroke" || V === "paint_lasso_fill") {
      const ve = ((O = v == null ? void 0 : v.stroke) == null ? void 0 : O.geometry) || null, Se = String(((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.layerKind) || ""), be = ((x = ve == null ? void 0 : ve.rawPoints) == null ? void 0 : x.length) ?? ((R = ve == null ? void 0 : ve.points) == null ? void 0 : R.length) ?? 0, Q = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${Se || "paint"}_${V}_live${Q}_${be}_${r.livePaintInteractionRevision}`;
    }
    const L = String(((Z = v == null ? void 0 : v.item) == null ? void 0 : Z.actionGroupId) || ""), J = String(((me = v == null ? void 0 : v.item) == null ? void 0 : me.rasterObjectId) || ((ue = v == null ? void 0 : v.item) == null ? void 0 : ue.id) || "");
    return `_${V}_${L || J || "active"}_${r.livePaintInteractionRevision}`;
  }
  function U(v, V = null) {
    const L = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!L) return null;
    const J = s.get(L);
    if (J)
      return J.complete || J.width || J.naturalWidth, J;
    const O = new Image();
    return O.onload = () => {
      typeof V == "function" && V();
    }, O.src = L, s.set(L, O), O;
  }
  function E(v) {
    const V = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!V) return null;
    const L = o.get(V);
    if (L) return L.ready ? L : null;
    const J = U(v, () => {
      const ue = o.get(V);
      ue && (ue.ready = !1), ne({ localOnly: !0 });
    });
    if (!J || !(J.complete || J.width || J.naturalWidth)) return null;
    const O = Number(J.naturalWidth || J.width || 0), F = Number(J.naturalHeight || J.height || 0);
    if (O < 1 || F < 1) return null;
    const x = rn({ label: "editor.image-pixels" });
    x.width = O, x.height = F;
    const R = x.getContext("2d", { willReadFrequently: !0 });
    if (!R) return null;
    R.clearRect(0, 0, O, F), R.drawImage(J, 0, 0, O, F);
    const Z = R.getImageData(0, 0, O, F).data, me = { canvas: x, width: O, height: F, alpha: Z, ready: !0 };
    return o.set(V, me), me;
  }
  function H(v, V) {
    if (!v || !V) return null;
    const L = (v == null ? void 0 : v.bbox) || null;
    if (!L) return null;
    const J = (v == null ? void 0 : v.transform) || {}, O = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, F = {
      u: ((Number(V.u || 0) - Number(J.du || 0)) % 1 + 1) % 1,
      v: Number(V.v || 0) - Number(J.dv || 0)
    }, x = $(
      F,
      O,
      Number(J.scale || 1),
      Number(J.rot_deg || 0)
    ), R = Number(L.u1 || 0) - Number(L.u0 || 0), Z = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(R > 1e-6) || !(Z > 1e-6)) return null;
    const me = q(Number(x.u || 0), Number(L.u0 || 0)) / R, ue = (Number(x.v || 0) - Number(L.v0 || 0)) / Z;
    if (me < 0 || me > 1 || ue < 0 || ue > 1) return 0;
    const ve = E(v);
    if (!ve) return null;
    const Se = Ie(Math.floor(me * ve.width), 0, ve.width - 1), be = Ie(Math.floor(ue * ve.height), 0, ve.height - 1);
    return Number(ve.alpha[(be * ve.width + Se) * 4 + 3] || 0);
  }
  function A(v, V, L, J = null) {
    if (!(V != null && V.visible) || !Jr(L, V.corners)) return !1;
    const O = J || he(L, performance.now()), F = H(v, O);
    return F === null ? !0 : F > 8;
  }
  function j() {
    var J, O, F, x, R, Z, me, ue;
    const v = ((O = (J = r.paintEngine) == null ? void 0 : J.getErpTarget) == null ? void 0 : O.call(J, m(!1))) || null, V = Math.max(1, Number(((F = v == null ? void 0 : v.descriptor) == null ? void 0 : F.width) || ((R = (x = v == null ? void 0 : v.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : R.width) || 2048)), L = Math.max(1, Number(((Z = v == null ? void 0 : v.descriptor) == null ? void 0 : Z.height) || ((ue = (me = v == null ? void 0 : v.displayPaint) == null ? void 0 : me.canvas) == null ? void 0 : ue.height) || 1024));
    return { width: V, height: L };
  }
  function T() {
    var be, Q, ge;
    const v = r.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const V = (v == null ? void 0 : v.stroke) || null;
    if (!V || String((V == null ? void 0 : V.layerKind) || "") !== "paint" || String((V == null ? void 0 : V.toolKind) || "") !== "eraser") return null;
    const L = u(), J = `${oe()}:${L.width}:${L.height}`;
    if (((be = r._activePaintEraserPreviewInfo) == null ? void 0 : be.cacheKey) === J)
      return r._activePaintEraserPreviewInfo.value || null;
    const O = un(V), F = (O == null ? void 0 : O.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const B = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = X(B, O.targetSpace, !0);
    }
    const x = c(L.width, L.height, { readback: !0 });
    if (!z(x, O, { w: L.width, h: L.height })) return null;
    const R = ((ge = (Q = x.ctx) == null ? void 0 : Q.getImageData(0, 0, L.width, L.height)) == null ? void 0 : ge.data) || null;
    if (!R) return null;
    let Z = L.width, me = L.height, ue = -1, ve = -1;
    for (let B = 0; B < L.height; B += 1)
      for (let p = 0; p < L.width; p += 1)
        R[(B * L.width + p) * 4 + 3] <= 8 || (p < Z && (Z = p), B < me && (me = B), p > ue && (ue = p), B > ve && (ve = B));
    if (ue < Z || ve < me)
      return r._activePaintEraserPreviewInfo = { cacheKey: J, value: null }, null;
    const Se = {
      surface: x,
      bounds: { minX: Z, minY: me, maxX: ue, maxY: ve },
      key: `${J}:${Z}:${me}:${ue}:${ve}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: J, value: Se }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Se;
  }
  function Y() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function pe(v, V, L) {
    var J, O;
    if (!v) return null;
    if (v.type === "rasterObject" && ((J = v.item) != null && J.bbox)) {
      const F = v.item.bbox, x = ((O = v.item) == null ? void 0 : O.transform) || {}, R = Number(F.u0 || 0) + Number(x.du || 0), Z = Number(F.u1 || 0) + Number(x.du || 0), me = Number(F.v0 || 0) + Number(x.dv || 0), ue = Number(F.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((R % 1 + 1) % 1 * V),
        maxX: Math.ceil((Z % 1 + 1) % 1 * V),
        minY: Math.floor(Ie(me, 0, 1) * L),
        maxY: Math.ceil(Ie(ue, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    if (v.type === "strokeGroup") {
      const F = ee(v.actionGroupId, "paint"), x = d(v.actionGroupId, "paint", F);
      if (!x) return null;
      const R = x.centerUv.u - x.halfW, Z = x.centerUv.u + x.halfW, me = x.centerUv.v - x.halfH, ue = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((R % 1 + 1) % 1 * V),
        maxX: Math.ceil((Z % 1 + 1) % 1 * V),
        minY: Math.floor(Ie(me, 0, 1) * L),
        maxY: Math.ceil(Ie(ue, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    return null;
  }
  function ae(v, V, L) {
    if (!v || !V) return !1;
    const J = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: L - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], O = J(v), F = J(V);
    return O.some((x) => F.some((R) => !(x.maxX < R.minX || R.maxX < x.minX || x.maxY < R.minY || R.maxY < x.minY)));
  }
  function K(v, V, L) {
    var M, W, ye, D, ie, Ne, xe;
    if (!v || !V || !((M = L == null ? void 0 : L.surface) != null && M.canvas) || V.type !== "rasterObject") return v;
    const J = Number(v.width || L.surface.canvas.width || 0), O = Number(v.height || L.surface.canvas.height || 0);
    if (J < 1 || O < 1) return v;
    const F = pe(V, J, O);
    if (F && !ae(F, L.bounds, J)) return v;
    const x = String(((W = V.item) == null ? void 0 : W.id) || V.id || ""), R = ((ye = V.item) == null ? void 0 : ye.transform) || {}, Z = `${L.key}:${x}:${J}:${O}:${Number(R.du || 0).toFixed(6)}:${Number(R.dv || 0).toFixed(6)}:${Number(R.rot_deg || 0).toFixed(3)}:${Number(R.scale || 1).toFixed(4)}`, me = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (me.has(Z)) return me.get(Z);
    const ue = Ie(Math.floor(Number(((D = L.bounds) == null ? void 0 : D.minX) || 0)), 0, Math.max(0, J - 1)), ve = Ie(Math.floor(Number(((ie = L.bounds) == null ? void 0 : ie.minY) || 0)), 0, Math.max(0, O - 1)), Se = Ie(Math.ceil(Number(((Ne = L.bounds) == null ? void 0 : Ne.maxX) || 0)), ue, Math.max(0, J - 1)), be = Ie(Math.ceil(Number(((xe = L.bounds) == null ? void 0 : xe.maxY) || 0)), ve, Math.max(0, O - 1)), Q = Math.max(1, Se - ue + 1), ge = Math.max(1, be - ve + 1), B = c(J, O, { readback: !0 });
    B.ctx.clearRect(0, 0, J, O), B.ctx.drawImage(v, 0, 0);
    const p = B.ctx.getImageData(ue, ve, Q, ge);
    B.ctx.save(), B.ctx.globalCompositeOperation = "destination-out", B.ctx.drawImage(L.surface.canvas, 0, 0), B.ctx.restore();
    const P = B.ctx.getImageData(ue, ve, Q, ge);
    let S = !1;
    for (let Pe = 0; Pe < Q * ge; Pe += 1) {
      const Ce = p.data[Pe * 4 + 3], Le = P.data[Pe * 4 + 3];
      if (Ce > Le) {
        S = !0;
        break;
      }
    }
    return S ? (me.size > 64 && me.clear(), me.set(Z, B.canvas), B.canvas) : (me.set(Z, v), v);
  }
  function k(v, V = null) {
    const L = C((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), J = (v == null ? void 0 : v.bbox) || null;
    if (!L || !J) return null;
    const O = U(v, V);
    if (!O || !(O.complete || O.width || O.naturalWidth)) return null;
    const { width: F, height: x } = j(), R = (v == null ? void 0 : v.transform) || {}, Z = [
      L,
      F,
      x,
      J.u0,
      J.v0,
      J.u1,
      J.v1,
      R.du,
      R.dv,
      R.rot_deg,
      R.scale,
      w()
    ].join(":"), me = i.get(Z);
    if (me) return me;
    i.size > 64 && i.clear();
    const ue = rn({ label: "editor.raster-erp" });
    ue.width = F, ue.height = x;
    const ve = ue.getContext("2d");
    return ve ? (i0(ve, O, v, F, x), i.set(Z, ue), ue) : null;
  }
  async function re(v, V) {
    const L = await new Promise((R) => v.toBlob(R, "image/png")), J = new FormData();
    J.append("image", L, V), J.append("type", "input"), J.append("subfolder", "panorama_stickers"), J.append("overwrite", "1");
    const O = await t.fetchApi("/upload/image", { method: "POST", body: J });
    if (!O || O.status !== 200) throw new Error(`upload failed (${O == null ? void 0 : O.status})`);
    const F = await O.json(), x = String((F == null ? void 0 : F.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((F == null ? void 0 : F.subfolder) || "panorama_stickers"),
      storage: String((F == null ? void 0 : F.type) || "input")
    };
  }
  let de = null, we = !1;
  function _e() {
    const v = kp(a.painting), { width: V, height: L } = f();
    return Tv(a.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: V, height: L, nodeId: String(n.id ?? "0") });
  }
  function N() {
    const v = String(n.id ?? "0"), V = la.get(v);
    if (we && V) return V;
    const L = (async () => {
      var F, x, R, Z, me, ue, ve, Se, be, Q, ge, B;
      const J = h(), O = kp(a.painting);
      if (O.totalPaintCount <= 0 && O.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, de = J, l());
        return;
      }
      if (de !== J && !we) {
        we = !0;
        try {
          G();
          const p = m(!1), P = ((x = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : x.call(F, p)) || null, S = ((R = P == null ? void 0 : P.displayPaint) == null ? void 0 : R.canvas) || null, M = ((Z = P == null ? void 0 : P.committedMask) == null ? void 0 : Z.canvas) || null, W = Math.max(1, Number(((me = P == null ? void 0 : P.descriptor) == null ? void 0 : me.width) || (S == null ? void 0 : S.width) || (M == null ? void 0 : M.width) || 2048)), ye = Math.max(1, Number(((ue = P == null ? void 0 : P.descriptor) == null ? void 0 : ue.height) || (S == null ? void 0 : S.height) || (M == null ? void 0 : M.height) || 1024));
          (!S && O.totalPaintCount > 0 || !M && O.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((ve = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ve.width) || 0) !== W || Number(((Se = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.height) || 0) !== ye) && (r._paintLayerSyncBlankSurface = c(W, ye)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, W, ye));
          const D = S || O.totalPaintCount > 0 && ((be = r._paintLayerSyncBlankSurface) == null ? void 0 : be.canvas) || null, ie = M || O.totalMaskCount > 0 && ((Q = r._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!D && !ie) return;
          let Ne = null, xe = null;
          const Pe = [];
          if (O.totalPaintCount > 0) {
            Ne = await re(D, `pano_paint_${v}.png`);
            for (const Ce of p) {
              const Le = String(Ce || "").trim();
              if (!Le) continue;
              const je = ((B = (ge = r.paintEngine) == null ? void 0 : ge.getGroupDisplayCanvas) == null ? void 0 : B.call(ge, Le)) || null;
              if (!je) continue;
              const Ke = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), $e = await re(je, `pano_group_${v}_${Ke}.png`);
              $e && Pe.push({
                id: Le,
                actionGroupId: Le,
                image: $e
              });
            }
          }
          O.totalMaskCount > 0 && (xe = await re(ie, `pano_mask_${v}.png`)), J === h() && (a.painting_layer = {
            paint: Ne,
            mask: xe,
            groups: Pe,
            revision: J
          }, de = J, l());
        } catch (p) {
          throw p;
        } finally {
          we = !1;
        }
      }
    })();
    return la.set(v, L), L.finally(() => {
      la.get(v) === L && la.delete(v);
    }), L;
  }
  function le(v) {
    var x;
    const V = ((x = r.paintEngine) == null ? void 0 : x.getMaskDisplayCanvas()) || null;
    if (!V) return v;
    const L = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, J = v.reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.zIndex) || 0)), -1), O = (Array.isArray(a.stickers) ? a.stickers : []).reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.z_index) || 0)), -1), F = Math.max(J, O);
    return v.push({
      id: "mask_display",
      source: V,
      revision: L,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function b() {
    var J, O;
    const v = _(!0), V = T(), L = [];
    for (const F of v) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const x = String(F.actionGroupId || F.id || "");
        if (!x) continue;
        const R = ((O = (J = r.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : O.call(J, x)) || null;
        if (!R) continue;
        L.push({
          id: `paint_group:${x}`,
          source: R,
          revision: `${g()}:${x}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const x = F.item || null, R = C((x == null ? void 0 : x.id) || F.id || "");
        if (!R) continue;
        const Z = k(x, () => ne());
        if (!Z) continue;
        const me = K(Z, F, V), ue = (x == null ? void 0 : x.transform) || {};
        L.push({
          id: `raster:${R}`,
          source: me,
          revision: [
            h(),
            (V == null ? void 0 : V.key) || "",
            R,
            Number(ue.du || 0).toFixed(6),
            Number(ue.dv || 0).toFixed(6),
            Number(ue.rot_deg || 0).toFixed(3),
            Number(ue.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: (x == null ? void 0 : x.visible) !== !1
        });
      }
    }
    return le(L);
  }
  function y() {
    return te() ? b().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function I() {
    a.painting_layer !== null && (a.painting_layer = null), de = "";
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
        getOrderedDisplayListObjects: _,
        getOrderedPaintGroupIds: m,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: w,
        getStrokeGroupStrokes: ee,
        inverseTransformErpPointAround: $,
        paintingShown: te,
        parseRasterObjectSelectionId: C,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: z,
        rebuildPaintEngineIfNeeded: G,
        requestDraw: ne,
        screenPosToErpPoint: he,
        shortestWrappedDelta: q
      } = v);
    },
    getSharedLivePaintSurface: ce,
    getLivePaintRevisionSuffix: oe,
    isPaintCompositeInteraction: fe,
    hitRasterObjectAt: A,
    invalidateLivePaintPreviewCaches: Y,
    buildRasterObjectEditCanvas: k,
    needsPaintingLayerSync: _e,
    syncPaintingLayerAsync: N,
    invalidatePaintingLayerState: I,
    buildEditorViewPaintLayers: y
  };
}
function KN(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(K) {
    return !K || typeof K != "object" ? { x: 0, y: 0 } : { x: Number((K == null ? void 0 : K.u) || 0), y: Number((K == null ? void 0 : K.v) || 0) };
  }
  function c(K, k, re, de = {}) {
    return { ...{
      ...K,
      t: Number((K == null ? void 0 : K.t) || 0),
      widthScale: f(K, "widthScale", 1),
      pressureLike: f(K, "pressureLike", 1)
    }, ...de, u: k, v: re };
  }
  function d(K, k = !1) {
    return k ? 12e-4 : 18e-4;
  }
  function u(K, k, re = !1) {
    if (!Array.isArray(K) || !K.length) return [];
    const de = String((k == null ? void 0 : k.kind) || "") === "ERP_GLOBAL", we = /* @__PURE__ */ new WeakMap();
    if (de) {
      let O = null;
      K.forEach((F) => {
        const x = Number((F == null ? void 0 : F.u) || 0), R = Number((F == null ? void 0 : F.v) || 0), Z = (x % 1 + 1) % 1, me = O == null ? Z : O + a(Z, (O % 1 + 1) % 1);
        we.set(F, { x: me, y: R }), O = me;
      });
    }
    const _e = (O) => !O || typeof O != "object" ? { x: 0, y: 0 } : we.get(O) || l(O), N = (O, F, x, R = {}) => {
      const Z = de ? (Number(F) % 1 + 1) % 1 : Number(F), me = c(O, Z, x, R);
      return we.set(me, { x: Number(F), y: Number(x) }), me;
    }, le = (O, F, x) => {
      const R = _e(O), Z = _e(F);
      return N(O, Bn(R.x, Z.x, x), Bn(R.y, Z.y, x), {
        t: Bn(Number((O == null ? void 0 : O.t) || 0), Number((F == null ? void 0 : F.t) || 0), x),
        widthScale: Bn(f(O, "widthScale", 1), f(F, "widthScale", 1), x),
        pressureLike: Bn(f(O, "pressureLike", 1), f(F, "pressureLike", 1), x)
      });
    };
    if (K.length === 1) {
      const O = _e(K[0]);
      return [N(K[0], O.x, O.y)];
    }
    const b = d(k, re), y = (O, F) => {
      const x = [0];
      for (let Q = 1; Q < O.length; Q += 1) {
        const ge = _e(O[Q - 1]), B = _e(O[Q]);
        x.push(x[Q - 1] + Math.hypot(B.x - ge.x, B.y - ge.y));
      }
      const R = x[x.length - 1] || 0;
      if (R <= 1e-8) {
        const Q = O[0], ge = _e(Q);
        return [N(Q, ge.x, ge.y)];
      }
      const Z = [];
      let me = 0;
      for (let Q = 0; Q <= R + 1e-9; Q += F) {
        for (; me < x.length - 2 && x[me + 1] < Q; ) me += 1;
        const ge = x[me], B = x[me + 1], p = Math.max(1e-8, B - ge);
        Z.push(le(O[me], O[me + 1], Ie((Q - ge) / p, 0, 1)));
      }
      const ue = O[O.length - 1], ve = _e(ue), Se = Z[Z.length - 1], be = Se ? _e(Se) : null;
      return (!be || Math.hypot(be.x - ve.x, be.y - ve.y) > F * 0.35) && Z.push(N(ue, ve.x, ve.y)), Z;
    }, I = (O) => {
      if (!Array.isArray(O) || O.length < 3) return O ? O.slice() : [];
      const F = _e(O[0]), x = [N(O[0], F.x, F.y)];
      for (let me = 0; me < O.length - 1; me += 1) {
        const ue = O[me], ve = O[me + 1], Se = _e(ue), be = _e(ve), Q = N(
          ue,
          Se.x * 0.75 + be.x * 0.25,
          Se.y * 0.75 + be.y * 0.25,
          {
            t: Number(ue.t || 0) * 0.75 + Number(ve.t || 0) * 0.25,
            widthScale: f(ue, "widthScale", 1) * 0.75 + f(ve, "widthScale", 1) * 0.25,
            pressureLike: f(ue, "pressureLike", 1) * 0.75 + f(ve, "pressureLike", 1) * 0.25
          }
        ), ge = N(
          ue,
          Se.x * 0.25 + be.x * 0.75,
          Se.y * 0.25 + be.y * 0.75,
          {
            t: Number(ue.t || 0) * 0.25 + Number(ve.t || 0) * 0.75,
            widthScale: f(ue, "widthScale", 1) * 0.25 + f(ve, "widthScale", 1) * 0.75,
            pressureLike: f(ue, "pressureLike", 1) * 0.25 + f(ve, "pressureLike", 1) * 0.75
          }
        );
        x.push(Q, ge);
      }
      const R = O[O.length - 1], Z = _e(R);
      return x.push(N(R, Z.x, Z.y)), x;
    }, v = y(K, b);
    if (v.length < 3) return v;
    const V = re ? 2 : 1;
    let L = v.slice();
    for (let O = 0; O < V; O += 1) L = I(L);
    return y(L, Math.max(b * 0.75, 55e-5));
  }
  function f(K, k, re = 1) {
    const de = Number(K == null ? void 0 : K[k]);
    return Number.isFinite(de) ? Math.max(0, de) : re;
  }
  function g(K) {
    const k = Number(K == null ? void 0 : K.radiusValue);
    if (Number.isFinite(k) && k > 0) {
      const re = String((K == null ? void 0 : K.radiusModel) || "").trim() || "erp_uv_norm";
      return re === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((K == null ? void 0 : K.size) || 10) * 0.5 / 2048)
      } : {
        model: re,
        value: k
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((K == null ? void 0 : K.size) || 10) * 0.5 / 2048)
    };
  }
  function _(K, k, re = {}) {
    const de = rn({ label: "editor.raster-surface" });
    de.width = Math.max(1, Math.round(K)), de.height = Math.max(1, Math.round(k));
    const we = de.getContext("2d", re.readback ? { willReadFrequently: !0 } : void 0);
    return we && (we.clearRect(0, 0, de.width, de.height), we.imageSmoothingEnabled = !0), { canvas: de, ctx: we };
  }
  function m() {
    const K = he();
    return `${String(t.paintStrokeRevision)}:${K.width}x${K.height}`;
  }
  function h() {
    const K = he();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${K.width}x${K.height}`;
  }
  function w() {
    const K = i(), k = h();
    return K ? `${k}:${K}` : k;
  }
  function ee() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function $() {
    t.paintCompositeRevision += 1;
  }
  function te() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function C() {
    var K, k;
    t.paintEngineRevisionKey = null, (k = (K = t.paintEngine) == null ? void 0 : K.rebuildCommitted) == null || k.call(K, n), t.paintEngineRevisionKey = m();
  }
  function X() {
    te(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function z({ rebuildPaintEngine: K = !1 } = {}) {
    o(), ee(), X(), K && C();
  }
  function G() {
    o(), $(), X();
  }
  function ne() {
    var de;
    const K = he(), k = `${K.width}x${K.height}`;
    t.paintEngineDescriptorKey !== k && (t.paintEngine = kl(K), t.paintEngineDescriptorKey = k, t.paintEngineRevisionKey = "");
    const re = m();
    t.paintEngineRevisionKey !== re && (t.paintEngineRevisionKey = re, (de = t.paintEngine) == null || de.rebuildCommitted(n));
  }
  function he() {
    const K = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: K,
      height: Math.max(1, Math.round(K * 0.5))
    };
  }
  function q() {
    return he();
  }
  function fe(K, k, re, de, we = null) {
    const _e = g(K), N = f(k, "widthScale", 1) * f(k, "pressureLike", 1);
    return _e.model === "erp_uv_norm" ? Math.max(0.5, _e.value * re * N) : _e.model === "world_angle" ? we ? Math.max(0.5, _e.value / Math.max(1e-6, Number(we.hFOV_deg || 90) * wr) * re * N) : Math.max(0.5, _e.value / (2 * Math.PI) * re * N) : Math.max(0.5, Number((K == null ? void 0 : K.size) || 10) * 0.5 * N);
  }
  function ce(K, k, re = {}) {
    const de = String((k == null ? void 0 : k.layerKind) || "paint"), we = String((k == null ? void 0 : k.toolKind) || "pen"), _e = re.preview === !0, N = _e ? 0.78 : 1;
    if (K.globalAlpha = we === "marker" ? 0.7 * N : 1, de === "mask") {
      K.fillStyle = _e ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (we === "eraser") {
      K.globalCompositeOperation = "destination-out", K.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((k == null ? void 0 : k.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = _e ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    K.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${b})`;
  }
  function oe(K, k, re) {
    const de = Math.max(0.5, Math.min(re, Number((k == null ? void 0 : k.radiusPx) || 0.5)));
    !Number.isFinite(k == null ? void 0 : k.x) || !Number.isFinite(k == null ? void 0 : k.y) || !Number.isFinite(de) || (K.beginPath(), K.arc(Number(k.x || 0), Number(k.y || 0), de, 0, Math.PI * 2), K.fill());
  }
  function U(K, k, re, de, we = {}) {
    if (!K || !Array.isArray(k) || !k.length) return;
    const _e = Math.max(de.w, de.h) * 0.25;
    K.save(), ce(K, re, we);
    const N = (le) => oe(K, le, _e);
    if (k.length === 1) {
      N(k[0]), K.restore();
      return;
    }
    for (let le = 0; le < k.length - 1; le += 1) {
      const b = k[le], y = k[le + 1];
      if (!b || !y) continue;
      const I = Number(b.x || 0), v = Number(b.y || 0), V = Number(y.x || 0), L = Number(y.y || 0), J = Math.max(0.5, Math.min(_e, Number(b.radiusPx || 0.5))), O = Math.max(0.5, Math.min(_e, Number(y.radiusPx || 0.5)));
      if (!Number.isFinite(I) || !Number.isFinite(v) || !Number.isFinite(V) || !Number.isFinite(L) || !Number.isFinite(J) || !Number.isFinite(O)) continue;
      const F = V - I, x = L - v, R = Math.hypot(F, x);
      if (!Number.isFinite(R) || R < 1e-6) {
        N(b);
        continue;
      }
      if (R > Math.max(de.w, de.h) * 0.5) continue;
      const Z = Math.max(0.5, Math.min(J, O)), me = Math.max(0.35, Math.min(Z * 0.4, 2.25)), ue = Math.max(1, Math.ceil(R / me));
      for (let ve = 0; ve <= ue; ve += 1) {
        const Se = ve / ue;
        N({
          x: Bn(I, V, Se),
          y: Bn(v, L, Se),
          radiusPx: Bn(J, O, Se)
        });
      }
    }
    N(k[k.length - 1]), K.restore();
  }
  function E(K, k, re, de) {
    U(K, k, re, de, { preview: !1 });
  }
  function H(K, k, re, de, we) {
    var le, b, y, I;
    if (!K || !Array.isArray(k) || k.length < 3) return;
    const _e = "u", N = "v";
    if (K.save(), String((re == null ? void 0 : re.layerKind) || "") === "mask")
      K.fillStyle = "rgba(255,255,255,1)";
    else if (String((re == null ? void 0 : re.toolKind) || "") === "eraser")
      K.globalCompositeOperation = "destination-out", K.fillStyle = "rgba(0,0,0,1)";
    else {
      const v = (re == null ? void 0 : re.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      K.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${Number(v.a ?? 1)})`;
    }
    K.beginPath(), K.moveTo(Number(((le = k[0]) == null ? void 0 : le[_e]) || 0) * de.w, Number(((b = k[0]) == null ? void 0 : b[N]) || 0) * de.h);
    for (let v = 1; v < k.length; v += 1)
      K.lineTo(Number(((y = k[v]) == null ? void 0 : y[_e]) || 0) * de.w, Number(((I = k[v]) == null ? void 0 : I[N]) || 0) * de.h);
    K.closePath(), K.fill(), K.restore();
  }
  function A(K) {
    const k = (K == null ? void 0 : K.geometry) || null;
    return k ? String(k.geometryKind || "") === "lasso_fill" ? Array.isArray(k.points) ? k.points : [] : Array.isArray(k.processedPoints) && k.processedPoints.length ? k.processedPoints : Array.isArray(k.rawPoints) && k.rawPoints.length ? k.rawPoints : Array.isArray(k.points) ? k.points : [] : [];
  }
  function j(K, k) {
    const re = A(K);
    return !Array.isArray(re) || !re.length ? [] : re.map((de) => ({
      x: Number((de == null ? void 0 : de.u) || 0) * Number((k == null ? void 0 : k.w) || 1),
      y: Number((de == null ? void 0 : de.v) || 0) * Number((k == null ? void 0 : k.h) || 1),
      radiusPx: fe(K, de, Number((k == null ? void 0 : k.w) || 1), Number((k == null ? void 0 : k.h) || 1))
    }));
  }
  function T(K, k, re = null) {
    var le, b, y, I;
    if (!(K != null && K.ctx) || !k) return !1;
    const de = re || { w: Number(((le = K.canvas) == null ? void 0 : le.width) || 0), h: Number(((b = K.canvas) == null ? void 0 : b.height) || 0) }, we = String((k == null ? void 0 : k.toolKind) || "") === "eraser" ? {
      ...k,
      layerKind: "mask",
      toolKind: String(((y = k == null ? void 0 : k.geometry) == null ? void 0 : y.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : k;
    if (String(((I = k == null ? void 0 : k.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill")
      return H(K.ctx, A(we), we, de), !0;
    const N = j(we, de);
    return N.length ? (E(K.ctx, N, we, de), !0) : !1;
  }
  function Y(K, k, re, de = 8) {
    const we = new Uint8Array(k * re), _e = [], N = new Int32Array(k * re), le = new Int32Array(k * re);
    for (let b = 0; b < re; b += 1)
      for (let y = 0; y < k; y += 1) {
        const I = b * k + y;
        if (we[I] || K[I] <= de) continue;
        let v = 0, V = 0;
        N[V] = y, le[V] = b, V += 1, we[I] = 1;
        const L = [];
        let J = y, O = b, F = y, x = b;
        for (; v < V; ) {
          const R = N[v], Z = le[v];
          v += 1, L.push({ x: R, y: Z }), R < J && (J = R), Z < O && (O = Z), R > F && (F = R), Z > x && (x = Z);
          const me = [
            [(R - 1 + k) % k, Z],
            [(R + 1) % k, Z],
            [R, Z - 1],
            [R, Z + 1]
          ];
          for (const [ue, ve] of me) {
            if (ve < 0 || ve >= re) continue;
            const Se = ve * k + ue;
            we[Se] || K[Se] <= de || (we[Se] = 1, N[V] = ue, le[V] = ve, V += 1);
          }
        }
        _e.push({ pixels: L, minX: J, minY: O, maxX: F, maxY: x });
      }
    return _e;
  }
  function pe(K, k) {
    const re = [...new Set((Array.isArray(K == null ? void 0 : K.pixels) ? K.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, y) => b - y);
    if (!re.length) return null;
    if (re.length === 1)
      return { startX: re[0], widthPx: 1 };
    let de = -1, we = 0;
    for (let b = 0; b < re.length; b += 1) {
      const y = re[b], v = (b === re.length - 1 ? re[0] + k : re[b + 1]) - y - 1;
      v > de && (de = v, we = b);
    }
    const _e = (re[(we + 1) % re.length] + k) % k;
    let N = 1 / 0, le = -1 / 0;
    for (const b of re) {
      const y = (b - _e + k) % k;
      N = Math.min(N, y), le = Math.max(le, y);
    }
    return {
      startX: _e,
      widthPx: Math.max(1, le - N + 1)
    };
  }
  function ae(K, k, re = {}) {
    var y;
    const de = Number((K == null ? void 0 : K.width) || 0), we = Number((K == null ? void 0 : K.height) || 0), _e = (y = K == null ? void 0 : K.getContext) == null ? void 0 : y.call(K, "2d");
    if (!_e || de < 1 || we < 1) return [];
    const N = _e.getImageData(0, 0, de, we), le = new Uint8Array(de * we);
    for (let I = 0; I < le.length; I += 1) le[I] = N.data[I * 4 + 3];
    return Y(le, de, we, 8).map((I, v) => {
      const V = pe(I, de);
      if (!V) return null;
      const L = Number(V.widthPx || 0), J = I.maxY - I.minY + 1, O = Number(V.startX || 0), F = rn({ label: "editor.lasso-fill" });
      F.width = L, F.height = J;
      const x = F.getContext("2d");
      if (!x) return null;
      const R = x.createImageData(L, J);
      return I.pixels.forEach(({ x: Z, y: me }) => {
        const ue = (me * de + Z) * 4, ve = (Number(Z || 0) - O + de) % de, Se = ((me - I.minY) * L + ve) * 4;
        R.data[Se + 0] = N.data[ue + 0], R.data[Se + 1] = N.data[ue + 1], R.data[Se + 2] = N.data[ue + 2], R.data[Se + 3] = N.data[ue + 3];
      }), x.putImageData(R, 0, 0), {
        id: Zi("raster"),
        type: "raster_frozen",
        layerKind: k === "mask" ? "mask" : "paint",
        z_index: Number((re == null ? void 0 : re.z_index) || 0) + v * 1e-3,
        locked: (re == null ? void 0 : re.locked) === !0,
        bbox: {
          u0: 0,
          v0: I.minY / we,
          u1: L / de,
          v1: (I.maxY + 1) / we
        },
        rasterDataUrl: F.toDataURL("image/png"),
        transform: {
          du: O / de,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(K) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = K);
    },
    processFreehandPoints: u,
    createRasterSurface: _,
    getPaintingRevisionKey: m,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: w,
    refreshPaintEngineRevisionCache: C,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: z,
    markPaintCompositeVisualsDirty: G,
    rebuildPaintEngineIfNeeded: ne,
    getDesiredPaintTargetDescriptor: he,
    getActivePaintTargetDescriptor: q,
    rasterizeStrokeToSurface: T,
    createRasterFrozenObjectsFromCanvas: ae
  };
}
function WN(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, g;
  function _(ne, he = null) {
    var q;
    if (ne && typeof ne == "object" && !Array.isArray(ne)) return ne;
    if (Array.isArray(ne) && ne.length > 0) {
      const fe = ne[0];
      if (fe && typeof fe == "object" && !Array.isArray(fe)) return fe;
    }
    if (Array.isArray(he) && he.length > 0) {
      const fe = (q = he[0]) == null ? void 0 : q.parsed_state;
      if (fe && typeof fe == "object" && !Array.isArray(fe))
        return {
          yaw_deg: Number(fe.yaw_deg || 0),
          pitch_deg: Number(fe.pitch_deg || 0),
          hFOV_deg: Number(fe.hFOV_deg || 30),
          rot_deg: Number(fe.roll_deg || 0)
        };
    }
    return null;
  }
  function m(ne, he, q) {
    const fe = Math.max(1, Number(he || 1)), ce = Math.max(1, Number(q || 1)), oe = Ie(Number(ne || 30), 0.1, 179) * wr, U = 2 * Math.atan(Math.tan(oe * 0.5) * (ce / fe));
    return Ie(U * Oi, 0.1, 179);
  }
  function h(ne) {
    const he = String(ne || "").trim();
    if (!he) return null;
    try {
      const q = JSON.parse(he);
      if (!q || typeof q != "object" || String(q.kind || "") !== "pano_sticker_state") return null;
      const fe = q.version;
      let ce = null;
      if (typeof fe == "number" && Number.isInteger(fe) ? ce = fe : typeof fe == "string" && /^\d+$/.test(fe) && (ce = Number.parseInt(fe, 10)), ce !== 1) return null;
      const oe = q.pose;
      if (!oe || typeof oe != "object") return null;
      const U = Number(oe.yaw_deg), E = Number(oe.pitch_deg), H = Number(oe.roll_deg), A = Number(oe.hFOV_deg);
      if (![U, E, H, A].every((pe) => Number.isFinite(pe))) return null;
      let j = ((U + 180) % 360 + 360) % 360 - 180;
      Object.is(j, -0) && (j = 0);
      const T = {
        yaw_deg: j,
        pitch_deg: Ie(E, -89.9, 89.9),
        roll_deg: H,
        hFOV_deg: Ie(A, 0.1, 179)
      }, Y = Number(q.source_aspect);
      return Number.isFinite(Y) && Y > 0 && (T.source_aspect = Y), T;
    } catch {
      return null;
    }
  }
  function w(ne) {
    const he = Number(ne == null ? void 0 : ne.yaw_deg), q = Number(ne == null ? void 0 : ne.pitch_deg), fe = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), ce = Number(ne == null ? void 0 : ne.hFOV_deg), oe = Ti(ne);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(he) ? he : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Ie(Number.isFinite(ce) ? ce : 90, 0.1, 179)
      },
      source_aspect: oe
    };
  }
  function ee(ne) {
    var E;
    if (!ne || typeof ne != "object") return w(null);
    const he = Number(ne == null ? void 0 : ne.yaw_deg), q = Number(ne == null ? void 0 : ne.pitch_deg), fe = Number((ne == null ? void 0 : ne.roll_deg) ?? (ne == null ? void 0 : ne.rot_deg)), ce = Number(ne == null ? void 0 : ne.hFOV_deg), oe = Number(ne == null ? void 0 : ne.vFOV_deg);
    let U = 1;
    if (Number.isFinite(ce) && Number.isFinite(oe)) {
      const H = Ie(ce, 0.1, 179) * wr, A = Ie(oe, 0.1, 179) * wr, j = Math.tan(A * 0.5);
      if (Math.abs(j) > 1e-6) {
        const T = Math.tan(H * 0.5) / j;
        Number.isFinite(T) && T > 0 && (U = T);
      }
    }
    if (ne != null && ne.asset_id && ((E = o == null ? void 0 : o.assets) != null && E[ne.asset_id])) {
      const H = o.assets[ne.asset_id], A = Number((H == null ? void 0 : H.w) || 0), j = Number((H == null ? void 0 : H.h) || 0);
      A > 0 && j > 0 && (U = A / j);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: jt(Number.isFinite(he) ? he : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(fe) ? fe : 0,
        hFOV_deg: Ie(Number.isFinite(ce) ? ce : 30, 0.1, 179)
      },
      source_aspect: U
    };
  }
  function $(ne) {
    return t.linkedValue(n, ne);
  }
  function te(ne, he, q) {
    const fe = ne && typeof ne == "object" ? {
      yaw_deg: Number(ne.yaw_deg || 0),
      pitch_deg: Number(ne.pitch_deg || 0),
      roll_deg: Number(ne.rot_deg ?? ne.roll_deg ?? 0),
      hFOV_deg: Number(ne.hFOV_deg || 30)
    } : h(he);
    if (fe) {
      const U = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || fe.source_aspect || 1), E = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
      return {
        yaw_deg: Number(fe.yaw_deg || 0),
        pitch_deg: Number(fe.pitch_deg || 0),
        hFOV_deg: Number(fe.hFOV_deg || 30),
        vFOV_deg: m(fe.hFOV_deg, U, E),
        rot_deg: Number(fe.roll_deg || 0)
      };
    }
    const ce = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 1), oe = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: m(30, ce, oe),
      rot_deg: 0
    };
  }
  function C() {
    const ne = Zt(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return hg(o, pg(n, { pose: ne }));
  }
  function X() {
    var E;
    const ne = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((H) => String((H == null ? void 0 : H.name) || "") === "sticker_image") : -1, he = ne >= 0 ? ((E = n.getInputLink(ne)) == null ? void 0 : E.id) ?? null : null, q = l(() => {
      ti(n, "image-loaded");
    }), fe = _(c("pano_sticker_input_pose"), null), ce = $("sticker_state"), oe = t.externalStateHash(n, ce), U = he == null ? null : te(fe, ce, q);
    return fg(o, {
      connected: he != null,
      linkId: he,
      stateHash: oe,
      pose: U,
      imageWidth: Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 0),
      imageHeight: Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 0)
    });
  }
  function z(ne = "sync") {
    if (s !== "stickers" || i) return;
    const he = n.__panoSceneStateV2 ? C() : X();
    if (he.changed) {
      const q = o.stickers.find(d);
      o.stickers = he.state.stickers, o.active = he.state.active, q && r.selectedId === q.id && !o.stickers.some((fe) => fe.id === q.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), f();
    } else ne === "image-loaded" && g();
    u();
  }
  function G() {
    const ne = Array.isArray(o.stickers) ? o.stickers : [], he = [];
    for (const q of ne)
      d(q) && (q.visible = !1, he.push(q));
    return he;
  }
  return {
    connect(ne) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: g
      } = ne);
    },
    computeStickerVFov: m,
    buildCanonicalCutoutStickerState: w,
    buildCanonicalSelectedStickerState: ee,
    reconcileExternalStickerFromInputs: z,
    collectExternalStickersForClearAll: G
  };
}
function Xi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function UN(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function BN({
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
  var $, te;
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
    historyEntries: Array.from({ length: 8 }, (C, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = (($ = t.find((C) => i(e.paintColor, C.color))) == null ? void 0 : $.id) || "", f = !u, g = o(e.customPaintColor), _ = Math.round(Math.max(0, Math.min(1, Number(((te = e.customPaintColor) == null ? void 0 : te.a) ?? 1))) * 100), m = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[m] ?? 10, w = l(), ee = Array.from({ length: 8 }, (C, X) => e.customPaintHistory[X] || null);
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
    alphaValue: _,
    alphaText: `${_}%`,
    historyEntries: ee.map((C, X) => ({
      index: X,
      color: C ? { cssColor: n(C, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: w,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function YN({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const qN = {
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
function XN(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = qN[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Ac(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function JN({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
function d0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function ZN(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function QN(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const ho = "erp", e2 = ["1:1", "4:3", "3:2", "16:9"];
function f0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...e2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: ho, label: Number(r) === 180 ? "180°" : "360°", active: e === ho }] : []
  ];
}
function t2({
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
    rows: XN(s),
    notes: a,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function n2({
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
  cameraShot: _ = !1,
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
      const w = f(), ee = u(t);
      h.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: w ? "Back to initial position" : "Already at initial position",
        icon: g.back_initial,
        disabled: !w
      }), h.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: ee ? "Show" : "Hide",
        tip: ee ? "Show input image" : "Hide input image",
        icon: ee ? g.eye : g.eye_dashed
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
        choices: f0(l, { erp: _, coverage: m })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: g.rotate_90, disabled: l === ho }
    ], _ ? h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete }) : h.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? g.lock_open : g.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: g.delete, disabled: !!a }
    );
  return p0(i.corners, h);
}
const Pp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function r2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Pp.filter((s) => s.cameraTip) : Pp;
  return p0([...e, ...i], [
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
function i2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), g = d + 18, _ = c - 18 - r;
  let m;
  return g <= f ? m = Math.max(g, 14) : _ >= 14 ? m = Math.min(_, f) : m = Math.min(Math.max(g, 14), f), { left: u, top: m };
}
function p0(e, t) {
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
const h0 = "painting";
function o2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const s2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function a2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (m, h, w, ee, $, te, { keyable: C = !0, hideable: X = !0 } = {}) => {
    const z = (G) => (r == null ? void 0 : r.owner) === m && r.lane === G ? r.frames.map((ne) => ne + te) : [];
    return {
      id: m,
      label: w,
      icon: ee,
      clip: $,
      selected: m === n,
      hideable: X,
      visible: h.visible,
      keyable: C,
      open: C && o.has(m),
      keys: dv(h).map((G) => ({ frame: G.frame + te, full: G.full })),
      selectedFrames: z(null),
      lanes: (C ? So(h) : []).map((G) => ({
        key: `${m}:${G}`,
        lane: G,
        label: s2[G],
        frames: h[G].keyframes.map((ne) => ne.frame + te),
        selectedFrames: z(G)
      }))
    };
  }, f = e.stickers.filter((m) => m.placement === "sky").sort((m, h) => h.z_index - m.z_index), g = e.stickers.filter((m) => m.placement === "world"), _ = ({ start: m, in: h, duration: w }) => ({ clip: { start: m, end: w === null ? null : m + w }, offset: m - h });
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
        const { clip: h, offset: w } = _(m.clip);
        return u(m.id, m, Xc(m), ze.image, h, w);
      }),
      ...o2(e.painting) || !e.painting_visible ? [{
        id: h0,
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
      ...d || Ba(e.scene) ? [(() => {
        const { clip: m, offset: h } = _(e.scene.clip);
        return u("scene", e.scene, "Scene", ze.box, m, h, { keyable: !1 });
      })()] : []
    ]
  };
}
function l2(e, t, r, n) {
  const i = mv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const c2 = 4, u2 = 0.25, m0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function g0(e) {
  return Object.hasOwn(m0, e);
}
function y0(e, t, r) {
  const { forward: n, right: i } = Di(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function d2() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return g0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
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
        const [a, l] = m0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? c2 : 1) * (r ? u2 : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const f2 = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), p2 = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function h2(e) {
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
function Np(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function m2(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return f2.has(r) && (r !== "frame" || t) && p2.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Np(s, -89.9, 89.9) && Np(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const g2 = 250, y2 = 600, b2 = 180, v2 = 2;
function S2(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Ko(e, t, r) {
  return e + (t - e) * r;
}
function w2(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Uu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / b2 + i / v2);
  return Math.round(Ko(g2, y2, o));
}
function _2(e, t, r) {
  const n = S2(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Ko(i, t.position[o], n)),
    yaw_deg: jt(e.yaw_deg + Uu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Ko(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Ko(e.hFOV_deg, t.hFOV_deg, n),
    distance: Ko(e.distance, t.distance, n)
  };
}
function x2(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Uu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function k2(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return x2(e, t) ? null : { from: e, to: t, startTs: r, durationMs: w2(e, t, n), end: i };
}
function M2(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: _2(e.from, e.to, r), done: !1 };
}
function ul(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function P2(e, t, r) {
  const n = ul(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function N2(e) {
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
    viewController: g
  } = e;
  let _, m, h, w, ee, $, te, C, X, z, G, ne, he, q = null;
  function fe(be, Q = null) {
    const ge = K();
    G(() => {
      i.viewTransition = k2(ge, be, performance.now(), { scale: y(), end: Q });
    }), !i.viewTransition && Q && ce(Q), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0, ne(), X({ localOnly: !0, reason: ft.VIEW });
  }
  function ce(be) {
    pe(Jc({ ...Y(), moved: be.moved }, be.mode, k())), a.backgroundDirty = !0;
  }
  function oe() {
    i.viewTransition && (i.viewTransition = null, ne());
  }
  function U(be, Q) {
    fe({ ...K(), yaw_deg: be, pitch_deg: Q });
  }
  function E() {
    return !f || de() && !ee();
  }
  function H() {
    return i.mode === "pano" && A();
  }
  function A() {
    return u && lS({ sceneLinked: l && !!Ol(s).scene, files: z(), stickers: d.stickers });
  }
  function j() {
    return i.spaceMode === "6dof" && H();
  }
  function T() {
    var be, Q, ge;
    return p_((ge = (Q = (be = t.ui) == null ? void 0 : be.settings) == null ? void 0 : Q.getSettingValue) == null ? void 0 : ge.call(Q, Og));
  }
  function Y() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function pe(be) {
    i.spaceMode = be.mode, i.viewPosition = be.position, i.viewMoved = be.moved;
  }
  function ae(be) {
    var ge;
    const Q = P2(i.spaceMode, i.viewTransition, be);
    if (Q !== "keep") {
      if (Q === "return") {
        fe({ ...K(), position: k(), distance: ((ge = le()) == null ? void 0 : ge.radius) || sr }, { mode: be, moved: !1 });
        return;
      }
      oe(), pe(Jc({ ...Y(), position: K().position }, be, k())), a.backgroundDirty = !0, ne(), X({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function K() {
    var ge;
    const be = i.viewMoved ? i.viewDistance : ((ge = le()) == null ? void 0 : ge.radius) || sr, Q = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: be };
    return nS(i.spaceMode, Q, k());
  }
  function k() {
    return de() ? N().position : [0, 0, 0];
  }
  function re() {
    return r && d.camera !== null;
  }
  function de() {
    return re() && d.camera.visible;
  }
  function we() {
    return d.painting_visible !== !1;
  }
  function _e(be) {
    return be.visible && bo(be.clip, i.frame);
  }
  function N() {
    return Pl(d.camera, i.frame);
  }
  function le() {
    var Q;
    const be = _();
    return ((Q = be.space ?? be.content) == null ? void 0 : Q.sphere) ?? null;
  }
  function b(be) {
    i.viewPosition = be.position, i.viewYaw = be.yaw_deg, i.viewPitch = be.pitch_deg, i.viewDistance = be.distance, i.viewMoved = !0, a.backgroundDirty = !0, X({ localOnly: !0, reason: ft.VIEW });
  }
  function y() {
    var be;
    return ((be = le()) == null ? void 0 : be.radius) || sr;
  }
  function I() {
    var M;
    const be = _().space, Q = m(), ge = i.worldSelectedId || i.selectedId, B = Q.stickers.findIndex((W) => W.id === ge), p = B < 0 ? null : {
      sticker: Q.stickers[B],
      value: xs(Q, i.frame).stickers[B],
      plane: be.stickers.find((W) => W.id === ge) ?? null,
      item: ((M = be.sticker) == null ? void 0 : M.id) === ge && be.sticker.url ? { kind: be.sticker.kind, box: o.sceneBox(be.sticker.url) } : null
    }, P = w() ? ue() : fS(le(), p);
    if (!P) return;
    const S = K();
    i.viewDistance = S.distance, i.viewMoved = !0, fe(aS(S, P, n.width, n.height));
  }
  function v(be) {
    return o.pickSurface(Se(), be.x, be.y, n.width, n.height);
  }
  function V(be, Q) {
    var ge;
    return Zc(be, Q, i.viewMoved ? null : (ge = le()) == null ? void 0 : ge.center, y());
  }
  function L() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function J(be, Q) {
    const ge = performance.now(), B = { x: be.x, y: be.y, time: ge, key: o.contentRevision(), view: L() };
    if (!Pm(q, B)) {
      const P = v(be);
      q = { ...B, cost: performance.now() - ge, hit: P };
    }
    const p = K();
    b(Cm(p, V(p, q.hit), Q, y())), q.view = L(), q.wheelTime = ge;
  }
  function O(be, Q, ge) {
    const B = K();
    i.interaction = be === "orbit" ? { kind: "space_orbit", last: Q, pivot: V(B, v(Q)) } : { kind: "space_pan", last: Q, depth: Mm(B, y()) }, he(Q), n.setPointerCapture(ge);
  }
  function F() {
    return j() || $();
  }
  function x(be) {
    const Q = C.elapsed(be);
    if (!Q || i.viewTransition) return !1;
    const ge = C.speed(y()) * Q;
    if ($()) return te(C.direction(), ge);
    if (!j()) return !1;
    const B = K(), p = y0(B, C.direction(), ge);
    return p === B ? !1 : (i.viewPosition = p.position, i.viewDistance = B.distance, i.viewMoved = !0, !0);
  }
  function R() {
    el(s).view = h2(i);
  }
  function Z() {
    const be = c && !d0({ hasShot: !!h(), erp: ee() }).disabled, Q = m2(el(s).view, { frame: be });
    Q && Object.assign(i, Q);
  }
  function me(be) {
    return be * 0.2;
  }
  function ue() {
    return { center: N().position, radius: me(y()) };
  }
  function ve(be, Q) {
    const { yaw_deg: ge, pitch_deg: B } = Tm(be.position, Q);
    return { ...be, yaw_deg: ge, pitch_deg: B };
  }
  function Se() {
    return fd(K(), n.width, n.height, le());
  }
  return {
    connect(be) {
      ({
        editorViewInput: _,
        editorViewSceneState: m,
        getActiveCutoutShot: h,
        isCameraSelected: w,
        isErpCamera: ee,
        isFreeFrameView: $,
        moveFrameByKeys: te,
        moveKeys: C,
        requestDraw: X,
        sceneFiles: z,
        startAnimation: G,
        syncFloatingViewButtonState: ne,
        updateCursor: he
      } = be);
    },
    transitionView: fe,
    applyViewTransitionEnd: ce,
    cancelViewTransition: oe,
    turnViewTo: U,
    cameraPreviewShown: E,
    isSpaceView: H,
    hasSpaceContent: A,
    isFreeSpaceView: j,
    viewControls: T,
    spaceModeState: Y,
    applySpaceMode: pe,
    setSpaceMode: ae,
    spaceViewState: K,
    spaceOrigin: k,
    hasCamera: re,
    cameraShoots: de,
    paintingShown: we,
    sceneStickerShown: _e,
    cutoutCamera: N,
    contentSphere: le,
    setSpaceView: b,
    spaceScale: y,
    frameSpaceContent: I,
    zoomSpaceAt: J,
    startSpaceDrag: O,
    canKeyMove: F,
    stepKeyMove: x,
    saveView: R,
    restoreView: Z,
    currentSpaceCamera: Se,
    cameraFrustumLength: me,
    cameraSphere: ue,
    lookingAt: ve
  };
}
function A2(e) {
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
  let u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e = { revision: -1, sceneState: null }, N = null;
  function le() {
    return N || (N = I()), N;
  }
  function b() {
    N = null;
  }
  function y() {
    return _e.sceneState;
  }
  function I() {
    const Se = X(), be = g(), Q = { ...a.assets };
    for (const Pe of l ? [] : a.stickers) {
      const Ce = String((Pe == null ? void 0 : Pe.asset_id) || "");
      Ce && !Q[Ce] && i.has(Ce) && (Q[Ce] = { type: "comfy_image", filename: Ce });
    }
    const ge = l ? a.stickers.map((Pe) => oe(Pe) ? { ...Pe, source: { kind: "file", filename: ae(Pe) } } : Pe) : a.stickers;
    _e.revision !== s.stateRevision && (_e = { revision: s.stateRevision, sceneState: Gr({ ...a, stickers: ge, assets: Q, painting: null }) }), l && v(_e.sceneState);
    const B = xs(_e.sceneState, r.frame), p = E ? te() : null, P = (Pe) => {
      if (l && !Pe.visible) return null;
      if (E && q(Pe)) return p;
      const Ce = G(Pe);
      return Ce ? { media: Ce, revision: z(Ce) } : null;
    }, S = de(), M = [...S.sky, ...jm(_e.sceneState, r.frame, a.stickers, { media: P, paintLayers: be, evaluated: B })], W = Se && (Se === d || Se === c) ? d.dataset.panoSrc : Se, ye = he(Se) ? { media: Se, revision: z(Se), coverage: f(), source: W } : null, D = ne(), ie = rS(j(), D, T());
    ie.mode !== r.spaceMode && h(), u(ie);
    const Ne = D ? V(_e.sceneState, B, P, S) : null, xe = ce() ? { ...Ne, ...L(Ne) } : null;
    return { background: ye, layers: M, space: xe, content: Ne };
  }
  function v(Se) {
    const be = new Map(a.stickers.map((Q) => [Q.id, Q.clip]));
    Se.scene.clip = { ...a.scene.clip };
    for (const Q of Se.stickers) {
      const ge = be.get(Q.id);
      ge && (Q.clip = { ...ge });
    }
  }
  function V(Se, be, Q, ge) {
    const B = H(), p = pd(B, be.scene), P = p != null && p.url ? n.sceneBox(p.url) : null, S = P && va(p.kind, P), M = pe(), W = Om(M, Se, be), ye = W != null && W.url ? n.sceneBox(W.url) : null, D = ye ? [{ box: va(W.kind, ye), value: W.value }] : [], ie = Gm(Se, r.frame, a.stickers, { media: Q, evaluated: be });
    for (const { request: xe, value: Pe } of ge.items) {
      const Ce = xe != null && xe.url ? n.sceneBox(xe.url) : null;
      Ce && D.push({ box: va(xe.kind, Ce), value: Pe });
    }
    const Ne = nu(uS(be, S, [...ie, ...ge.stickers], D));
    return {
      evaluated: be,
      sceneUrls: B ? B.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: Fm(M, Se),
      sticker: W,
      stickers: ie,
      upstreamStickers: ge.stickers,
      upstreamItems: ge.items,
      sphere: Ne
    };
  }
  function L(Se) {
    var Q;
    const be = ((Q = Se.sphere) == null ? void 0 : Q.radius) || sr;
    return {
      gizmo: O() ? R() : J(Se.evaluated),
      grid: r.showGrid && !r.fullscreen ? xS(be) : null,
      lines: m() ? x(be) : []
    };
  }
  function J(Se) {
    const be = A(), Q = Se.stickers.find((ge) => ge.id === (be == null ? void 0 : be.id));
    return !we(be) || !(Q != null && Q.active) ? null : { mode: r.gizmoMode, transform: Qc(Q) };
  }
  function O() {
    return m() && r.selectedId === ad;
  }
  let F = { revision: -1, span: -1, segments: [] };
  function x(Se) {
    const be = k();
    (F.revision !== s.stateRevision || F.span !== be) && (F = { revision: s.stateRevision, span: be, segments: MS(PS(a, be)) });
    const { segments: Q } = F, ge = Q.length ? [{ segments: Q, color: eN }] : [];
    if (!fe()) return ge;
    const B = O() ? r0 : QP;
    return [...ge, { segments: Dm(ee(), _(Se)), color: B }];
  }
  function R() {
    return !fe() || !O() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: Qc({ ...ee(), scale: 1 }) };
  }
  function Z() {
    const { background: Se, layers: be, space: Q } = le(), ge = t.width, B = t.height, p = $({ x: 0, y: 0, w: ge, h: B });
    let P = !1;
    return !Se && !be.length && !Q ? (n.clear(460551), P = n.ready) : (n.clear(), P = !!n.render({
      rect: p,
      camera: Q ? fd(Y(), ge, B, Q.sphere) : w(),
      background: Se,
      layers: be,
      space: Q
    })), K(), (r.worldSelectedId || O() || U()) && re(), P;
  }
  function me(Se) {
    const { content: be } = le();
    return !be || !Se.position ? Qo(Se) : Im(Qo(Se), Se.position, C(), be.sphere);
  }
  function ue(Se, be, Q, ge = null) {
    const { background: B, layers: p, content: P } = le();
    if (!B && !p.length && !P) return null;
    const S = P && be.position ? P : null;
    return n.render({ rect: Se, camera: me(be), background: B, layers: p, space: S, owner: Q, clearColor: ge });
  }
  function ve(Se) {
    return n.clear(460551), !!n.renderUnwrap({ rect: $(Se), ...le() });
  }
  return {
    connect(Se) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: g,
        cameraFrustumLength: _,
        cameraShoots: m,
        cancelViewTransition: h,
        currentViewCamera: w,
        cutoutCamera: ee,
        deviceRect: $,
        followPortSticker: te,
        frameViewDistance: C,
        getConnectedErpImage: X,
        getMediaRevisionToken: z,
        getStickerImage: G,
        hasSpaceContent: ne,
        isDecodedImageReady: he,
        isExternalSticker: q,
        isFreeSpaceView: fe,
        isSpaceView: ce,
        isUploadingSticker: oe,
        isWorldMenuShown: U,
        portVideo: E,
        sceneFiles: H,
        selectedWorldSticker: A,
        spaceModeState: j,
        spaceOrigin: T,
        spaceViewState: Y,
        stickerFiles: pe,
        stickerImageKey: ae,
        syncFloatingViewButtonState: K,
        timelineSpanFrames: k,
        updateSelectionMenu: re,
        upstreamViewInput: de,
        worldStickerEditable: we
      } = Se);
    },
    editorViewInput: le,
    endEditorViewFrame: b,
    editorViewSceneState: y,
    isCameraSelected: O,
    renderEditorView: Z,
    shotViewCamera: me,
    drawEditorViewShot: ue,
    renderEditorViewUnwrap: ve
  };
}
function C2(e) {
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
  const g = /* @__PURE__ */ new Map(), _ = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function m(oe) {
    if (!oe) return null;
    let U = g.get(oe);
    return U || (U = new Image(), U.onload = _, U.onerror = _, U.src = oe, g.set(oe, U)), U;
  }
  function h({ sceneState: oe, ui: U }) {
    return [
      ...oe.stickers.filter((E) => E.source.kind !== "port").map((E) => n(qa(E.source))),
      i(Tr(U, po)[0] || null),
      ...oe.painting.raster_objects.map((E) => E.rasterDataUrl)
    ].filter(Boolean);
  }
  function w() {
    return a && ($f(o, "scene") === l0 || !!ee());
  }
  function ee() {
    const oe = a && Zt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, U = Array.isArray(oe) ? oe : null;
    if (f.list !== U) {
      f.entries.forEach(fe), f = { list: U, entries: U ? kN(U).map((H) => ({ layer: H })) : [] };
      const E = new Set(f.entries.flatMap((H) => h(H.layer)));
      for (const H of [...g.keys()]) E.has(H) || g.delete(H);
    }
    return U && f.entries;
  }
  function $() {
    if (!ee()) return 0;
    const [oe] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(oe) > 0 ? Number(oe) : 0;
  }
  function te() {
    if (!a) return "";
    const oe = ee();
    if (AN($f(o, "scene"), oe)) return "Run the workflow to show the upstream scene.";
    if (!oe) return "";
    const U = t.uiList(o, "pano_sticker_warnings");
    return String(U.find((E) => String(E).startsWith(NN)) ?? "");
  }
  function C(oe, U, E) {
    const { ui: H, sceneState: A } = oe.layer, j = A.timeline.fps, T = Tr(H, n0)[0], Y = Tr(H, t0).map(i).filter(Boolean), pe = i(Tr(H, e0)[0] || null), ae = T && typeof T == "object" ? Y.length ? { frames: Y, meta: T } : pe ? { src: pe, meta: T } : null : null, K = m(i(Tr(H, po)[0] || null)), k = ae ? yd(U.clip, E, j, ae.meta) : null;
    let re = K;
    if (ae != null && ae.frames)
      oe.frames || (oe.frames = vd({
        createImage: (de, we) => {
          const _e = new Image();
          return _e.onload = we, _e.onerror = we, _e.src = de, _e;
        },
        onLoad: _
      })), re = oe.frames.picture(ae.frames, k, ae.meta, K);
    else if (ae != null && ae.src) {
      const de = X(oe);
      de.follow({ src: ae.src, time: k, playing: d.advancing, fps: j }), re = de.picture(oe.still, K);
    }
    return re ? { media: re, revision: c(re), source: bd(ae, K) } : null;
  }
  function X(oe) {
    if (oe.follower) return oe.follower;
    const U = _s(document, "editor.upstream-port-video");
    U.playsInline = !0, U.preload = "auto";
    const E = rn({ label: "editor.upstream-port-still" });
    return E.__panoFrameIdx = 0, oe.video = U, oe.still = E, oe.follower = xd({
      video: U,
      onCapture: () => {
        var j;
        const H = Number(U.videoWidth || 0), A = Number(U.videoHeight || 0);
        H < 1 || A < 1 || (E.width = H, E.height = A, (j = E.getContext("2d")) == null || j.drawImage(U, 0, 0), E.__panoFrameIdx += 1, _());
      },
      onChange: _
    }), oe.follower;
  }
  function z(oe, U, E) {
    if (U.source.kind === "port") return C(oe, U, E);
    const H = m(n(qa(U.source)));
    return H ? { media: H, revision: c(H) } : null;
  }
  function G(oe) {
    var ae;
    const { sceneState: U } = oe.layer, { painting: E } = U, H = E.paint.strokes.length + E.mask.strokes.length;
    if (!U.painting_visible || !H && !E.raster_objects.length) return [];
    const A = l(), j = `${A.width}x${A.height}`;
    oe.paintSize !== j && (he(oe), oe.paintSize = j, oe.paintEngine = H ? kl(A) : null, (ae = oe.paintEngine) == null || ae.rebuildCommitted({ painting: E }), oe.rasters = /* @__PURE__ */ new Map());
    const T = oe.paintEngine, Y = (T == null ? void 0 : T.getMaskDisplayCanvas()) || null, pe = [];
    for (const K of CN(U, T ? T.getAllGroupIds() : [], !!Y)) {
      const k = K.kind === "group" ? T == null ? void 0 : T.getGroupDisplayCanvas(K.id) : K.kind === "mask" ? Y : ne(oe, K.item, A);
      k && pe.push({ id: `${K.kind}:${K.id}`, media: k, revision: j, opacity: 1, zIndex: K.zIndex });
    }
    return pe;
  }
  function ne(oe, U, { width: E, height: H }) {
    if (oe.rasters.has(U.id)) return oe.rasters.get(U.id);
    const A = m(U.rasterDataUrl);
    if (!A.complete || !A.naturalWidth) return null;
    const j = rn({ label: "editor.upstream-raster-erp", width: E, height: H }), T = j.getContext("2d");
    return T ? (i0(T, A, U, E, H), oe.rasters.set(U.id, j), j) : null;
  }
  function he(oe) {
    var U;
    (U = oe.rasters) == null || U.forEach((E) => ss(E)), oe.rasters = null, oe.paintEngine = null, oe.paintSize = null;
  }
  function q() {
    const oe = ee() ?? [], U = { sky: [], stickers: [], items: [] };
    return oe.forEach((E, H) => {
      const A = MN(r.frame, s.timeline.fps, E.layer.sceneState.timeline.fps), j = IN(E.layer, H, A, {
        media: (T) => z(E, T, A),
        paintLayers: G(E),
        source: i
      });
      U.sky.push(...j.sky), U.stickers.push(...j.stickers), U.items.push(...j.items);
    }), U;
  }
  function fe(oe) {
    var U;
    (U = oe.follower) == null || U.dispose(), oe.still && ss(oe.still), he(oe);
  }
  function ce() {
    f.entries.forEach(fe), f = { list: null, entries: [] }, g.clear();
  }
  return {
    connect(oe) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = oe);
    },
    upstreamLinked: w,
    upstreamNotice: te,
    upstreamSpanFrames: $,
    upstreamViewInput: q,
    disposeUpstream: ce
  };
}
const ku = "camera_preview";
function I2(e) {
  return e === ku ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function E2(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function b0(e, t = !1) {
  const r = Ie(Ti(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function O2(e) {
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
  let d, u, f, g, _ = null, m = !1, h = !1;
  function w() {
    m && (m = !1, o.releaseSplats(ku));
  }
  function ee() {
    _ = null, h = !1, w();
  }
  function $(ne) {
    if (!n || !ne) return !1;
    const he = n.closest(".pano-camera-preview");
    if (!he) return !1;
    const q = Math.round(Number(he.clientWidth || n.clientWidth || 0)), fe = Math.round(Number(he.clientHeight || n.clientHeight || 0));
    return Math.abs(q - Number(ne.width || 0)) <= 1 && Math.abs(fe - Number(ne.height || 0)) <= 1;
  }
  function te(ne, he) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, ee();
      return;
    }
    const q = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !q || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = q ? "Preview unavailable" : "Add Frame to preview", ee();
      return;
    }
    const fe = b0(q, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = fe.width, c.cameraPreview.height = fe.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, w();
      return;
    }
    const ce = window.devicePixelRatio || 1, oe = Math.max(1, fe.width * ce), U = Math.max(1, fe.height * ce), E = Math.min(1, t.width / oe, t.height / U), H = { width: Math.max(1, Math.floor(oe * E)), height: Math.max(1, Math.floor(U * E)) }, A = !_ || _.width !== H.width || _.height !== H.height || E2(he);
    if (ne && A) {
      m = !0;
      const T = u({ x: 0, y: t.height - H.height, w: H.width, h: H.height }, q, ku);
      _ = T ? H : null, T && G(T);
    }
    if (!_) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = g() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const j = $(fe);
    c.cameraPreview.ready = !0, c.cameraPreview.label = j ? "" : "Loading preview", c.cameraPreview.settled = j && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function C() {
    _ = null, h = !1;
  }
  let X = 0, z = !1;
  function G(ne) {
    const he = ++X;
    createImageBitmap(ne.canvas, ne.x, ne.y, ne.width, ne.height).then((q) => {
      var fe;
      if (he !== X || !s.running) {
        q.close();
        return;
      }
      (fe = r.getContext("bitmaprenderer")) == null || fe.transferFromImageBitmap(q);
    }).catch((q) => {
      he !== X || !s.running || (h = !0, _ = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !z && (z = !0, console.error("[PanoramaStickers] camera preview frame failed", q)));
    });
  }
  return {
    connect(ne) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: g
      } = ne);
    },
    drawCutoutOutputPreview: te,
    forgetCameraPreviewFrame: C
  };
}
function F2(e) {
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
  let u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e, N, le, b;
  function y(Q) {
    const ge = r.width, B = r.height, p = G();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, ge, B), re(), Q && (a.backgroundDirty = !_e(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let S = 0; S <= 16; S += 1) {
        const M = p.x + p.w * S / 16;
        n.beginPath(), n.moveTo(M, p.y), n.lineTo(M, p.y + p.h), n.stroke();
      }
      for (let S = 0; S <= 8; S += 1) {
        const M = p.y + p.h * S / 8;
        n.beginPath(), n.moveTo(p.x, M), n.lineTo(p.x + p.w, M), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const P = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, P), n.fillText("Front", p.x + p.w * 0.5, P), n.fillText("Right", p.x + p.w * 0.75, P), n.fillText("Back", p.x + 38, P), n.fillText("Back", p.x + p.w - 38, P);
    }
  }
  function I(Q, ge, B = 1) {
    let p = !1;
    n.strokeStyle = ge, n.lineWidth = B, n.beginPath();
    for (const P of Q) {
      const S = pe(P);
      if (!S) {
        p = !1;
        continue;
      }
      p ? n.lineTo(S.x, S.y) : (n.moveTo(S.x, S.y), p = !0);
    }
    n.stroke();
  }
  function v(Q) {
    const ge = r.width, B = r.height;
    if (n.clearRect(0, 0, ge, B), re(), Q && (a.backgroundDirty = !we()), i.showGrid && !i.fullscreen && m().space)
      V();
    else if (i.showGrid && !i.fullscreen) {
      for (let P = -180; P <= 180; P += 15) {
        const S = [];
        for (let M = -89; M <= 89; M += 4) S.push(Tn(P, M));
        I(S, "#3f3f46", P % 90 === 0 ? 1.3 : 1);
      }
      for (let P = -75; P <= 75; P += 15) {
        const S = [];
        for (let M = -180; M <= 180; M += 4) S.push(Tn(M, P));
        I(S, P === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", P === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Tn(-90, 0) },
        { name: "Front", dir: Tn(0, 0) },
        { name: "Right", dir: Tn(90, 0) },
        { name: "Back", dir: Tn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((P) => {
        const S = pe(P.dir);
        S && n.fillText(P.name, S.x, S.y + 24);
      });
    }
  }
  function V() {
    const Q = fd(b(), r.width, r.height, f()), ge = fs(Q, [0, 0, 0], r.width, r.height);
    ge && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", ge.x, ge.y - 12));
  }
  function L(Q, ge) {
    const B = Y(Q), p = Tn(Number(B.yaw_deg || 0), Number(B.pitch_deg || 0)), P = i.mode === "unwrap" ? ae(p) : null, S = P ? P.x : null, M = i.mode === "pano" ? 28 : 20, W = [
      N(Q, 0, M, S),
      N(Q, 1, M, S),
      N(Q, 2, M, S),
      N(Q, 3, M, S)
    ];
    Md(n, W, { selected: ge });
  }
  function J(Q, ge = []) {
    if (!(!Q || !Array.isArray(ge) || ge.length < 4)) {
      Q.beginPath(), Q.moveTo(ge[0].x, ge[0].y);
      for (let B = 1; B < 4; B += 1) Q.lineTo(ge[B].x, ge[B].y);
      Q.closePath();
    }
  }
  function O(Q, ge, B) {
    const p = Array.isArray(Q == null ? void 0 : Q.corners) ? Q.corners : [];
    if (p.length < 4) return;
    const P = Ie(Number((Q == null ? void 0 : Q.visibilityAlpha) ?? 1), 0, 1);
    if (P <= 0.01) return;
    const S = n.globalAlpha;
    n.globalAlpha = S * P;
    const M = B ? "rgba(255, 116, 116, 0.96)" : ge ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", W = B ? "rgba(255, 89, 89, 0.08)" : ge ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ye = ge ? 3.2 : 2.6;
    J(n, p), n.fillStyle = W, n.fill(), n.strokeStyle = M, n.lineWidth = ye, n.stroke(), n.save(), n.strokeStyle = M, n.lineWidth = ge ? 3.2 : 2.6, n.lineCap = "round";
    const D = Array.isArray(Q == null ? void 0 : Q.edgeMidpoints) && Q.edgeMidpoints.length >= 4 ? Q.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], ie = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ne = ge ? 12 : 9;
    D.forEach((xe) => {
      const Ce = D.find(($e) => ($e == null ? void 0 : $e.edge) === ie[xe == null ? void 0 : xe.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Le = Ce.x - xe.x, je = Ce.y - xe.y, Ke = Math.hypot(Le, je) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + Le / Ke * Ne, xe.y + je / Ke * Ne), n.stroke();
    }), n.restore(), n.globalAlpha = S;
  }
  function F(Q, ge, B, p) {
    const P = Ie(Number((ge == null ? void 0 : ge.visibilityAlpha) ?? 1), 0, 1);
    if (P <= 0.01) return;
    if (H(Q)) {
      O(ge, B, p);
      return;
    }
    if (A(Q)) {
      const M = n.globalAlpha;
      n.globalAlpha = M * z(Q) * P, i.mode === "frame" ? (n.strokeStyle = B ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = B ? 2 : 1, J(n, ge.corners), n.stroke()) : L(Q, B), n.globalAlpha = M;
      return;
    }
    const S = n.globalAlpha;
    n.globalAlpha = S * P, n.fillStyle = B ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", J(n, ge.corners), n.fill(), n.strokeStyle = B ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = B ? 2.8 : 1.9, J(n, ge.corners), n.stroke(), n.globalAlpha = S;
  }
  function x(Q, ge, B) {
    if (A(Q)) {
      Ig(n, ge, { accent: B });
      return;
    }
    const p = !(H(Q) && he());
    n.fillStyle = B, p && ge.corners.forEach((P) => {
      n.beginPath(), n.arc(P.x, P.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && H(Q) && (n.strokeStyle = B, n.lineCap = "round", n.lineWidth = 4, ge.edgeMidpoints.forEach((P) => {
      var Ne, xe, Pe, Ce;
      const S = (((Ne = P.b) == null ? void 0 : Ne.x) ?? P.x) - (((xe = P.a) == null ? void 0 : xe.x) ?? P.x), M = (((Pe = P.b) == null ? void 0 : Pe.y) ?? P.y) - (((Ce = P.a) == null ? void 0 : Ce.y) ?? P.y), W = Math.hypot(S, M) || 1, ye = S / W, D = M / W, ie = 10;
      n.beginPath(), n.moveTo(P.x - ye * ie, P.y - D * ie), n.lineTo(P.x + ye * ie, P.y + D * ie), n.stroke();
    }), n.lineCap = "butt"), j(Q) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(ge.rotateStemBase.x, ge.rotateStemBase.y), n.lineTo(ge.rotateHandle.x, ge.rotateHandle.y), n.stroke(), n.fillStyle = B, n.beginPath(), n.arc(ge.rotateHandle.x, ge.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function R() {
    var S;
    const Q = i.mode === "frame" ? [] : X(), ge = Q.length > 1, B = l ? w() : te(), p = B.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${H(M) ? "frame" : Number((M == null ? void 0 : M.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== B || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: B,
      orderKey: p,
      sorted: [...B]
    });
    const P = i._sortedItemsCache.sorted;
    for (const M of P) {
      const W = i.mode !== "frame" && !ge && oe(M);
      if (i.mode === "frame" && !W) continue;
      const ye = A(M), D = H(M), ie = ce(M);
      if (!ye && !D || E(M) && !le(M)) continue;
      const Ne = T(M);
      if (d !== "stickers" && !Ne.visible)
        continue;
      const xe = Ie(Number((Ne == null ? void 0 : Ne.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Pe = D && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Pe, F(M, Ne, W, ie), W && Ne.visible) {
        const Ce = ie ? "#ff4d4f" : ye && q(M) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * xe, x(M, Ne, Ce), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const M = i.cutoutPanoFrameVisual, W = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= W, O(M.geom, M.selected, M.locked), M.selected && x(
        M.item,
        M.geom,
        M.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (ge) {
      const M = C(Q);
      if (M != null && M.visible) {
        const W = u(Q) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(M.corners[0].x, M.corners[0].y);
        for (let ye = 1; ye < M.corners.length; ye += 1) n.lineTo(M.corners[ye].x, M.corners[ye].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = W, M.corners.forEach((ye) => {
          n.beginPath(), n.arc(ye.x, ye.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      Q.forEach((M) => {
        if (!j(M) && !U(M)) return;
        const W = T(M);
        if (!(W != null && W.visible)) return;
        const ye = ce(M) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(W.corners[0].x, W.corners[0].y);
        for (let D = 1; D < W.corners.length; D += 1) n.lineTo(W.corners[D].x, W.corners[D].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ye, W.corners.forEach((D) => {
          n.beginPath(), n.arc(D.x, D.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((S = i.interaction) == null ? void 0 : S.kind) === "marquee_select") {
      const M = de(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(M.x0, M.y0, M.x1 - M.x0, M.y1 - M.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Z(Q) {
    const ge = h(), B = ee(ge);
    if (!ge || !B)
      return n.clearRect(0, 0, r.width, r.height), Q && o.clear(657930), !1;
    const p = { x: B.x, y: B.y, w: B.w, h: B.h }, { rect: P, shot: S } = Vm(ge, B, { width: r.width, height: r.height }), M = me(p);
    if (n.clearRect(0, 0, r.width, r.height), Q) {
      o.clear(657930);
      const W = g(P), ye = !!_(W, S, void 0, 657930);
      ye || o.clear(1118481, W), a.backgroundDirty = !ye;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, M), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = r0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, M - 1)), n.stroke(), n.restore(), !0;
  }
  function me(Q) {
    const ge = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * ge, Number((Q == null ? void 0 : Q.w) || 0) * 0.5, Number((Q == null ? void 0 : Q.h) || 0) * 0.5);
  }
  function ue() {
    var ye, D;
    if (((ye = i.interaction) == null ? void 0 : ye.kind) !== "paint_lasso_fill") return;
    const Q = i.interaction.stroke, ge = (D = Q == null ? void 0 : Q.geometry) == null ? void 0 : D.points;
    let B;
    if (i.mode === "frame") {
      const ie = h(), Ne = $(ie);
      B = K(ge, ie, Ne);
    } else
      B = k(ge);
    if (!Array.isArray(B) || B.length < 3) return;
    const p = String((Q == null ? void 0 : Q.layerKind) || "") === "mask", P = (Q == null ? void 0 : Q.color) || { r: 1, g: 0.25, b: 0.25 }, S = Math.round(Number(P.r || 0) * 255), M = Math.round(Number(P.g || 0) * 255), W = Math.round(Number(P.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(B[0].x || 0), Number(B[0].y || 0));
    for (let ie = 1; ie < B.length; ie++) n.lineTo(Number(B[ie].x || 0), Number(B[ie].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${S},${M},${W},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function ve() {
    const Q = i.frameRollOverlayVisual, ge = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(Q != null && Q.shot) || ge <= 1e-4) return;
    const B = $(Q.shot);
    if (!B) return;
    const p = { x: B.x + B.w * 0.5, y: B.y + B.h * 0.5 }, P = Number(Q.shot.roll_deg ?? Q.shot.rot_deg ?? 0) * wr, S = Math.hypot(B.w, B.h) * 0.55, M = Math.cos(P) * S, W = Math.sin(P) * S;
    n.save(), n.globalAlpha *= ge, n.beginPath(), n.rect(B.x, B.y, B.w, B.h), n.clip(), n.translate(p.x, p.y), n.rotate(P);
    const ye = Math.max(12, Math.min(B.w, B.h) / 6);
    n.beginPath();
    for (let D = -S; D <= S; D += ye)
      n.moveTo(D, -S), n.lineTo(D, S);
    for (let D = -S; D <= S; D += ye)
      n.moveTo(-S, D), n.lineTo(S, D);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - M, p.y - W), n.lineTo(p.x + M, p.y + W), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !h() || t && fe() || c && !ne() ? 0 : rN;
  }
  function be() {
    const Q = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (Q <= 1e-4 || !l || i.mode !== "pano") return;
    const ge = h(), B = ge ? T(ge) : null, p = Array.isArray(B == null ? void 0 : B.corners) && B.corners.length >= 4 ? B.corners.map((M) => ({ x: Number(M.x || 0), y: Number(M.y || 0) })) : null;
    B != null && B.visible && p && (i.cutoutPanoDimCorners = p), ge && (B != null && B.visible) && p && (i.cutoutPanoFrameVisual = {
      item: ge,
      geom: B,
      selected: oe(ge),
      locked: ce(ge)
    });
    const P = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, S = B != null && B.visible ? p : P ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${Q})`, n.beginPath(), n.rect(0, 0, r.width, r.height), S.length >= 4) {
      n.moveTo(S[0].x, S[0].y);
      for (let M = 1; M < 4; M += 1) n.lineTo(S[M].x, S[M].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(Q) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: g,
        drawEditorViewShot: _,
        editorViewInput: m,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: w,
        getFrameViewLayout: ee,
        getFrameViewRect: $,
        getList: te,
        getMultiSelectionGeom: C,
        getSelectedItems: X,
        getStickerDisplayAlpha: z,
        getUnwrapRect: G,
        isCameraSelected: ne,
        isErpCamera: he,
        isExternalSticker: q,
        isFreeSpaceView: fe,
        isItemLocked: ce,
        isItemSelected: oe,
        isRasterObjectItem: U,
        isSceneSticker: E,
        isShotItem: H,
        isStickerItem: A,
        isStrokeGroupItem: j,
        objectGeom: T,
        poseOf: Y,
        projectDir: pe,
        projectDirUnwrap: ae,
        projectErpLassoPointsToFrameRect: K,
        projectLassoPointsToCurrentView: k,
        rebuildPaintEngineIfNeeded: re,
        rectFromPoints: de,
        renderEditorView: we,
        renderEditorViewUnwrap: _e,
        sampleStickerEdge: N,
        sceneStickerShown: le,
        spaceViewState: b
      } = Q);
    },
    drawGridUnwrap: y,
    drawGridPano: v,
    drawObjects: R,
    drawFrameViewBackground: Z,
    drawLassoOutlineOverlay: ue,
    drawFrameRollOverlay: ve,
    getCutoutPanoDimTarget: Se,
    drawCutoutPanoPassepartout: be
  };
}
function T2(e) {
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
    type: _,
    uiState: m,
    viewController: h
  } = e;
  let w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we = () => {
  };
  function _e(Se = /* @__PURE__ */ new Set()) {
    he();
    const be = l.backgroundDirty;
    d && (j(), ee(be, Se)), i.mode === "frame" ? (l.frameSafeRect = E(), C(be)) : i.mode === "unwrap" ? z(be) : X(be), $(), ne(), ae(), G(), te(), m.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && re(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && m.cameraPreview && (m.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const Q = oe();
    m.stageStatus = Q.status, m.stageStatusDetail = Q.detail, m.stageNotice = de(), Q.status === nr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", Q.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function N(Se = i.interaction) {
    if (_ !== "stickers" || i.mode !== "pano") return !1;
    const be = String((Se == null ? void 0 : Se.kind) || "");
    return be === "move" || be === "scale" || be === "scale_x" || be === "scale_y" || be === "rotate" ? !0 : be === "move_multi" ? Array.isArray(Se == null ? void 0 : Se.stickerSnapshots) && Se.stickerSnapshots.length > 0 : !1;
  }
  function le() {
    return !!i.interaction || !!g.drag;
  }
  function b() {
    l.nodePreviewPending = !1;
    const Se = Hn(s);
    Se.liveState = f, Se.liveStateVersion += 1, ce();
  }
  function y(Se = {}) {
    var M, W, ye, D, ie, Ne, xe, Pe;
    const be = Se.reason ?? ft.STATE, Q = !!Se.localOnly, ge = Se.externalSync === !0, B = String(Se.cause || ""), p = String(((M = i.interaction) == null ? void 0 : M.kind) || "");
    (!Q || p === "view" || p === "pan_frame" || N() || !!i.viewTransition || B === "mode" || B === "frame_view" || B === "cutout_frame") && (l.backgroundDirty = !0), Q && U() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!Q || B === "selection" || B === "mode" || B === "cutout_frame") && (K(), k()), le() ? l.nodePreviewPending = !0 : b(), ge && ((ye = (W = St(s).dom) == null ? void 0 : W.requestDraw) == null || ye.call(W), (D = s.setDirtyCanvas) == null || D.call(s, !0, !1)), ge && !Q && ((Ne = (ie = s.graph) == null ? void 0 : ie.setDirtyCanvas) == null || Ne.call(ie, !0, !0), (Pe = (xe = t == null ? void 0 : t.canvas) == null ? void 0 : xe.setDirty) == null || Pe.call(xe, !0, !0)), c.requestDraw(be);
  }
  function I() {
    const Se = n.getBoundingClientRect(), be = Math.max(2, Math.round(Se.width)), Q = Math.max(2, Math.round(Se.height)), ge = window.devicePixelRatio || 1, B = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== be || n.height !== Q) && (n.width = be, n.height = Q);
    const p = NS(Se.width || be, Se.height || Q, ge, window.innerWidth || Se.width, window.innerHeight || Se.height);
    return o.resize(p.width, p.height), [n.width, n.height, r.width, r.height].join("x") === B ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && v(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function v(Se) {
    Se(), c.wake();
  }
  function V() {
    return !!i.viewTransition || H.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || le();
  }
  function L(Se = performance.now(), be = /* @__PURE__ */ new Set()) {
    var P;
    l.nodePreviewPending && !le() && b(), be.forEach((S) => l.reasons.add(S)), be.size && (l.dirty = !0), [...be].some((S) => S !== ft.OVERLAY) && (l.backgroundDirty = !0), Y(), l.lastTickTs > 0 ? Math.max(1e-3, (Se - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Se;
    const Q = i.mode === "frame" && ((P = i.interaction) == null ? void 0 : P.kind) === "roll_frame" ? i.interaction : null;
    Q != null && Q.shot && (i.frameRollOverlayVisual = { shot: Q.shot });
    const ge = Q ? 1 : 0;
    if (Math.abs(ge - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = ge, i.frameRollOverlayStartTs = Se), Math.abs(Number(i.frameRollOverlayAlpha || 0) - ge) > 1e-6) {
      const S = Ie(
        (Se - Number(i.frameRollOverlayStartTs || Se)) / iN,
        0,
        1
      );
      i.frameRollOverlayAlpha = Bn(
        Number(i.frameRollOverlayFrom || 0),
        ge,
        kc(S)
      ), S >= 1 && (i.frameRollOverlayAlpha = ge, ge === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const B = fe();
    if (Math.abs(B - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = B, i.cutoutPanoDimStartTs = Se), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - B) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoDimStartTs || Se)) / wp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Bn(
        Number(i.cutoutPanoDimFrom || 0),
        B,
        kc(S)
      ), S >= 1 && (i.cutoutPanoDimAlpha = B), S >= 1 && B === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const p = d && q() ? 1 : 0;
    if (Math.abs(p - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = p, i.cutoutPanoFrameStartTs = Se), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoFrameStartTs || Se)) / wp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Bn(
        Number(i.cutoutPanoFrameFrom || 0),
        p,
        kc(S)
      ), S >= 1 && (i.cutoutPanoFrameAlpha = p, p === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const S = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), M = Ie((Se - Number(i.outputPreviewAnimStartTs || 0)) / S, 0, 1), ye = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? aN(M) : cN(M);
      i.outputPreviewAnim = Bn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ye), l.dirty = !0, M >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: S, done: M } = M2(i.viewTransition, Se);
      if (i.viewPosition = S.position, i.viewYaw = S.yaw_deg, i.viewPitch = S.pitch_deg, i.viewFov = S.hFOV_deg, i.viewDistance = S.distance, M) {
        const { end: W } = i.viewTransition;
        i.viewTransition = null, W && w(W), pe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (T(Se) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(Se) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const S = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), _e(S);
    }
  }
  function J(Se) {
    try {
      Se();
    } catch (be) {
      const Q = String((be == null ? void 0 : be.stack) || (be == null ? void 0 : be.message) || be || "unknown editor frame error");
      l.tickErrorSignature !== Q && (l.tickErrorSignature = Q, console.error("[PanoramaStickers] editor frame failed", be)), m.stageStatus = Yn, m.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function O(Se = performance.now(), be = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const Q = Jb();
    J(() => L(Se, be)), Zb(Q);
  }
  function F() {
    !l.running || !I() || J(() => {
      l.dirty = !1, _e(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const x = new ResizeObserver(F);
  let R = null;
  function Z() {
    R == null || R.removeEventListener("change", me), R = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), R.addEventListener("change", me);
  }
  function me() {
    Z(), F();
  }
  function ue() {
    we = Xb("editor", () => {
      var Se;
      return {
        type: _,
        readOnly: a,
        mode: i.mode,
        interaction: ((Se = i.interaction) == null ? void 0 : Se.kind) ?? null,
        timelineDrag: !!g.drag,
        playing: !!A.playing
      };
    });
  }
  function ve() {
    we(), l.running = !1, c.stop(), x.disconnect(), R.removeEventListener("change", me);
  }
  return {
    connect(Se) {
      ({
        applyViewTransitionEnd: w,
        drawCutoutOutputPreview: ee,
        drawCutoutPanoPassepartout: $,
        drawFrameRollOverlay: te,
        drawFrameViewBackground: C,
        drawGridPano: X,
        drawGridUnwrap: z,
        drawLassoOutlineOverlay: G,
        drawObjects: ne,
        endEditorViewFrame: he,
        getActiveCutoutShot: q,
        getCutoutPanoDimTarget: fe,
        getSharedLivePaintSurface: ce,
        getStageImageStatus: oe,
        isPaintCompositeInteraction: U,
        measureFrameSafeRect: E,
        moveKeys: H,
        playback: A,
        rebuildPaintEngineIfNeeded: j,
        stepKeyMove: T,
        syncCutoutShot: Y,
        syncFloatingViewButtonState: pe,
        syncFrameRollKnob: ae,
        syncLookAtFrameButtonState: K,
        syncViewToggleState: k,
        updateSelectionMenu: re,
        upstreamNotice: de
      } = Se);
    },
    requestDraw: y,
    syncCanvasSize: I,
    startAnimation: v,
    editorAnimating: V,
    tick: O,
    stageResizeObserver: x,
    watchPixelRatio: Z,
    sampleEditorDiagnostics: ue,
    stopRenderLoop: ve
  };
}
function D2(e) {
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
    studio: _,
    type: m,
    uiState: h
  } = e;
  let w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e, N, le, b, y = 0;
  function I() {
    h.toolButtons.forEach((ue) => {
      const ve = ue.attr === "data-tool-mode", Se = ue.attr === "data-paint-tool", be = ue.attr === "data-mask-tool";
      ue.active = ve ? ue.value === r.primaryTool : Se ? ue.key === r.paintTool : be ? ue.key === r.maskTool : !1, ue.pressed = ue.active ? "true" : ue.pressed == null ? null : "false";
    });
  }
  function v() {
    if (_ && Xi(h.toolButtons, "value", "add-camera", { disabled: ce() }), m !== "cutout") return;
    const ue = $();
    Xi(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ue ? "Look At Frame" : "Add Frame",
      tip: ue ? "Look at frame" : "Add frame",
      icon: ue ? ze.camera : ze.plus_circle
    });
  }
  function V() {
    const ue = JN({
      spaceView: pe(),
      spaceMode: ul(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, ue.space);
    for (const [ve, Se] of Object.entries(ue.buttons)) Xi(h.floatingButtons, "action", ve, Se);
  }
  function L() {
    var Se;
    const ue = d0({ hasShot: !!$(), erp: E(), hidden: ce() && !ee(), studio: _ });
    r.mode === "frame" && ue.disabled && (_ ? K($()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((be) => {
      const Q = be.key === r.mode;
      be.pressed = Q ? "true" : "false", be.visible = !(be.key === "frame" && !f), be.key === "frame" ? Object.assign(be, ue) : be.disabled = !1;
    });
    const ve = f && r.mode === "frame" ? $() : null;
    h.frameRail.visible = !!ve, h.frameRail.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.visible = !!ve && !c && ve.locked !== !0, h.frameRollKnob.disabled = c || (ve == null ? void 0 : ve.locked) === !0, h.frameRollKnob.rollDeg = Number((ve == null ? void 0 : ve.roll_deg) ?? (ve == null ? void 0 : ve.rot_deg) ?? 0), h.frameRollKnob.displayValue = so(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", h.frameRollKnob.armed = !!ve && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = ve ? Dr(ve) : "", h.frameRail.aspectChoices = f0(ve ? String(Dr(ve)) : null, { erp: _, coverage: g.coverage }), ve || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = m === "cutout" && r.mode !== "frame" && !!$(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && w(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), V(), j() ? le(r.pointerPos) : de(r.mode === "pano" ? "grab" : "default");
  }
  function J() {
    var ve;
    const ue = r.mode === "frame" ? $() : null;
    h.frameRollKnob.visible = !!ue && !c && ue.locked !== !0, h.frameRollKnob.rollDeg = Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0), h.frameRollKnob.displayValue = so(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((ve = r.interaction) == null ? void 0 : ve.kind) === "roll_frame", h.frameRollKnob.armed = !!ue && r.altModifier === !0;
  }
  function O() {
    I();
    const ue = BN({
      editor: r,
      swatches: Dl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: mr,
      colorsApproximatelyEqual: cl,
      rgb01ToHsv: _u,
      hsv01ToRgb: wu,
      getBrushPresetIdForTool: te,
      isActiveLassoTool: U
    });
    if (Object.assign(h.paintDock, ue), N(), !ue.visible) {
      i && (i.hidden = !0);
      return;
    }
    y && (clearTimeout(y), y = 0), o && (!ue.colorEnabled && i && !i.hidden && (y = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, y = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ue.pickerHueColor), i.style.setProperty("--picker-sat", ue.pickerSat), i.style.setProperty("--picker-val", ue.pickerVal), i.style.setProperty("--picker-hue", ue.pickerHue)), s && (s.style.left = ue.pickerSvLeft, s.style.top = ue.pickerSvTop), a && (a.style.left = ue.pickerHueLeft));
  }
  function F() {
    const ue = k(f && r.mode === "frame" ? $() : G());
    ue && (r.panelLastValues = {
      yaw_deg: Number(ue.yaw_deg || 0),
      pitch_deg: Number(ue.pitch_deg || 0),
      hFOV_deg: Number(ue.hFOV_deg || (m === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ue.vFOV_deg || (m === "stickers" ? 30 : 60)),
      rot_deg: Number(ue.rot_deg || 0),
      roll_deg: Number(ue.roll_deg || 0),
      aspect_id: Dr(ue)
    }, x());
  }
  function x() {
    we(), _e(), Z();
  }
  function R() {
    const ue = f && r.mode === "frame" ? $() : null;
    return [...ne(), re(), ue].some((ve) => T(ve) ? Ba(ve) : Y(ve) && ce() && Ba(g.camera));
  }
  function Z() {
    if (n) return;
    g.ui_settings = g.ui_settings || {};
    const ue = UN(g.ui_settings);
    if (l) {
      h.sidePanel = YN({
        coverage: g.coverage,
        uiSettings: ue,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const ve = G(), Se = f && r.mode === "frame" ? $() : null, be = Se || ve, Q = Se ? [Se] : ne(), ge = Se ? "shot" : he();
    if (Q.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), be && ge !== "stroke") {
      const xe = k(be);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (ge === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (ge === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Dr(xe)
      }, T(be) && (r.panelLastValues.opacity = Ei(be, r.frame).opacity * 100);
    }
    const B = r.panelLastValues || (m === "stickers" || ge === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = ge === "stroke" ? null : be, P = re(), S = t && (ge === "shot" || ge === "frame") && oe(), M = P ? Kv(P, r.frame) : S ? { ...p, ...jv(g.camera, r.frame), vFOV_deg: p.vFOV_deg } : T(p) ? r.panelLastValues : p || B, W = P ? b(P) : !!p && !A(p);
    r.panelWasEnabled = W, v();
    let ye = null;
    if (Se) {
      const xe = fe({ item: Se, kind: "shot", label: "Frame" });
      ye = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(Se.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (m === "stickers" || m === "cutout") {
      const xe = [{
        id: "",
        label: m === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (m === "stickers") {
        const Le = $();
        Le && xe.push({ id: Le.id, label: "Camera", icon: q("frame"), item: Le, kind: "frame" }), z().forEach((je, Ke) => {
          var Fe, Ae;
          if (!je || T(je) && !je.visible) return;
          const $e = u ? Xc(je) : H(je) ? String(je.id || Dd) : String(((Ae = (Fe = g.assets) == null ? void 0 : Fe[je.asset_id]) == null ? void 0 : Ae.name) || je.asset_id || je.id), He = `${Ke + 1}. ${$e}${H(je) && ae(je) ? " (hidden)" : ""}`, se = fe({ item: je, label: He, kind: "image" });
          xe.push({ id: je.id, label: se.label, icon: se.icon, item: je, kind: "image" });
        });
      } else
        C().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const je = fe(Le);
          xe.push({ id: Le.item.id, label: je.label, icon: je.icon, item: Le.item, kind: Le.kind });
        });
      const Pe = (p == null ? void 0 : p.id) || "", Ce = P ? { label: Xc(P), icon: ze.globe } : xe.find((Le) => Le.id === Pe) || xe[0];
      ye = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: Ce.label,
        currentIcon: Ce.icon || null,
        items: xe.map((Le) => ({
          id: Le.id,
          label: Le.label,
          icon: Le.icon || null,
          active: Le.id === Pe
        }))
      };
    }
    const D = [], ie = (xe, Pe, Ce, Le, je) => {
      const Ke = Ie(Number(M[xe] || 0), Ce, Le);
      D.push({
        key: xe,
        label: Pe,
        min: Ce,
        max: Le,
        step: je,
        value: Ke,
        displayValue: so(Ke),
        fillPct: Ie((Ke - Ce) / Math.max(1e-6, Le - Ce) * 100, 0, 100),
        enabled: W && !c
      });
    }, Ne = [];
    if (P) {
      for (const [xe, Pe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ce = Ac(M[xe]);
        ie(xe, Pe, -Ce, Ce, 0.01);
      }
      ie("yaw_deg", "Yaw", -180, 180, 0.1), ie("pitch_deg", "Pitch", -90, 90, 0.1), ie("roll_deg", "Roll", -180, 180, 0.1), ie("scale", "Scale", Qg, Ac(M.scale), 0.01), ie("opacity", "Opacity", 0, 100, 1);
    } else if (Q.length > 1)
      Ne.push(`Selected objects: ${Q.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const xe = ge === "shot" || ge === "frame";
      if (S)
        for (const [Pe, Ce] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = Ac(M[Pe]);
          ie(Pe, Ce, -Le, Le, 0.01);
        }
      ie("yaw_deg", "Yaw", -180, 180, 0.1), ie("pitch_deg", "Pitch", -90, 90, 0.1), ie(ge === "image" || m === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), ie("hFOV_deg", "H FOV", 1, 179, 0.1), ie("vFOV_deg", "V FOV", 1, 179, 0.1), xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && ZN(Pe.key, { erp: E() });
      }), T(p) && !xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && QN(Pe.key, { port: H(p) });
      }), u && !xe && ie("opacity", "Opacity", 0, 100, 1);
    }
    h.sidePanel = t2({
      coverage: g.coverage,
      readOnly: c,
      selectionPicker: ye,
      enabled: W,
      selectedKind: P ? "world" : ge,
      selectedItems: Q,
      params: D,
      notes: Ne,
      uiSettings: ue,
      normalizeCoverageValue: Rn
    });
  }
  function me() {
    const { canUndo: ue, canRedo: ve } = X();
    Xi(h.toolButtons, "value", "undo", { disabled: !ue }), Xi(h.toolButtons, "value", "redo", { disabled: !ve });
  }
  return {
    connect(ue) {
      ({
        cameraPreviewShown: w,
        cameraShoots: ee,
        getActiveCutoutShot: $,
        getBrushPresetIdForTool: te,
        getCutoutInspectorItems: C,
        getHistoryCapabilities: X,
        getList: z,
        getSelected: G,
        getSelectedItems: ne,
        getSelectedKind: he,
        getSelectionItemIcon: q,
        getSelectionItemLabelData: fe,
        hasCamera: ce,
        hasSpaceContent: oe,
        isActiveLassoTool: U,
        isErpCamera: E,
        isExternalSticker: H,
        isItemLocked: A,
        isPaintCursorEnabled: j,
        isSceneSticker: T,
        isShotItem: Y,
        isSpaceView: pe,
        isStickerHidden: ae,
        leaveFrameView: K,
        poseOf: k,
        selectedWorldSticker: re,
        setCanvasCursor: de,
        syncCutoutShot: we,
        syncTimeline: _e,
        syncVideoTransportVisibility: N,
        updateCursor: le,
        worldStickerEditable: b
      } = ue);
    },
    syncLookAtFrameButtonState: v,
    syncFloatingViewButtonState: V,
    syncViewToggleState: L,
    syncFrameRollKnob: J,
    syncPaintUi: O,
    syncSidePanelControls: F,
    updateSidePanel: x,
    inspectorTimed: R,
    syncSidePanelModel: Z,
    syncUndoRedoButtons: me
  };
}
function L2(e) {
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
  let g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe;
  function U() {
    if (!s || n) return;
    const y = H(), I = l.selection, v = I && A(I.owner);
    if (I) {
      const V = v ? j(I) : [];
      I.frames = I.frames.filter((L) => V.some((J) => v[J].keyframes.some((O) => O.frame === L))), I.frames.length || (l.selection = null);
    }
    d.timeline = a2(o, {
      span: y,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? E(),
      openRows: l.openRows,
      audio: K() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || Ym(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: m(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Ol(r).scene && !ce()
    }), d.easing = l.selection ? l2(v, j(l.selection), l.selection.frames, T(l.selection.owner)) : null;
  }
  function E() {
    return pm(o, { camera: a });
  }
  function H(y = null) {
    const I = o.timeline.fps, v = o.stickers.find(w), V = v ? _() : null, L = Math.max(
      d.videoTransport.ready && !fe() ? Math.round(Number(d.videoTransport.duration || 0) * I) : 0,
      V ? og(v.clip, I, V.meta) : 0,
      oe()
    );
    return hm(o, { minimum: Math.round(I * 5), frames: L, openClip: y, camera: a });
  }
  function A(y) {
    return y === "camera" ? m() ? o.camera : null : y === "scene" ? i ? o.scene : null : o.stickers.find((I) => I.id === y) || null;
  }
  function j(y) {
    return y.lane ? [y.lane] : So(A(y.owner));
  }
  function T(y) {
    if (y === "camera") return 0;
    const { clip: I } = A(y);
    return I.start - I.in;
  }
  function Y(y) {
    return `${bo(y, t.frame)}:${y.start - y.in}`;
  }
  function pe(y) {
    const I = A(y);
    return !!I && I.locked !== !0;
  }
  function ae(y) {
    const I = Math.max(0, Math.round(y));
    if (I === t.frame) return;
    G(), t.frame = I, c.frame.value = I, G();
    const v = [t.selectedId, t.worldSelectedId];
    X(), ee(), v[0] !== t.selectedId || v[1] !== t.worldSelectedId ? q() : h() && ne(), he(), z({ reason: ft.PLAYHEAD });
  }
  function K() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function k(y) {
    C(), $.seek(y);
  }
  function re() {
    s && $.stop();
  }
  function de() {
    C(), $.toggle();
  }
  function we() {
    G(), ee(), q(), he(), z();
  }
  function _e() {
    te(), g(), we();
  }
  function N() {
    const { selection: y } = l;
    pe(y.owner) && (re(), pv(A(y.owner), j(y), y.frames, t.frame - T(y.owner)), l.selection = null, _e());
  }
  function le(y) {
    const I = vo(y);
    if (I === null || I === o.timeline.fps) return;
    re();
    const v = Math.round(t.frame * I / o.timeline.fps);
    Dv(o, I), l.selection = null, $.seek(v), _e();
  }
  function b() {
    const y = f(r);
    y !== null && y !== o.timeline.fps && le(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: g,
        getPortMedia: _,
        hasCamera: m,
        inspectorTimed: h,
        isExternalSticker: w,
        markObjectVisualsDirty: ee,
        playback: $,
        pushHistory: te,
        refreshModalVideoSource: C,
        releaseHiddenSelection: X,
        requestDraw: z,
        syncCutoutShot: G,
        syncSidePanelModel: ne,
        updateSelectionMenu: he,
        updateSidePanel: q,
        upstreamBackground: fe,
        upstreamLinked: ce,
        upstreamSpanFrames: oe
      } = y);
    },
    syncTimeline: U,
    timelineTimed: E,
    timelineSpanFrames: H,
    timelineOwner: A,
    selectedLanes: j,
    timelineOffset: T,
    clipView: Y,
    timelineEditable: pe,
    setTimelineFrame: ae,
    jumpTimelineTo: k,
    stopTimelinePlayback: re,
    togglePlayback: de,
    refreshTimelineEdit: we,
    commitTimelineEdit: _e,
    deleteSelectedKeyframes: N,
    changeTimelineFps: le,
    applyVideoTimelineFps: b
  };
}
function R2(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A;
  function j(T) {
    if (!(n || !o)) {
      if (T.type === "seek") {
        if (T.phase === "move") {
          s.scrubFrame = T.frame, t.request("seek");
          return;
        }
        t.cancel(), T.phase === "start" && h(), m.seek(T.frame);
        return;
      }
      if (T.type === "play") {
        U();
        return;
      }
      if (T.type === "mute") {
        E(), ne();
        return;
      }
      if (T.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? oe()), s.selection = null, ne();
        return;
      }
      if (T.type === "toggle-row") {
        s.openRows.has(T.id) ? s.openRows.delete(T.id) : s.openRows.add(T.id), ne();
        return;
      }
      if (T.type === "toggle-visible") {
        if (T.id === h0) i.painting_visible = !i.painting_visible;
        else {
          const Y = fe(T.id);
          if (!Y) return;
          Y.visible = !Y.visible;
        }
        ee(), u();
        return;
      }
      if (T.type === "select-row") {
        const Y = i.stickers.find((pe) => pe.id === T.id);
        if (Y && !Y.visible || T.id === "camera" && !l()) return;
        Y && !bo(Y.clip, r.frame) && _(Y.clip.start), (Y == null ? void 0 : Y.placement) === "world" ? te(Y.id) : T.id === "camera" ? X(f()) : X(g().find((pe) => pe.id === T.id) || null), G(), s.selection = null, A(), H(), $();
        return;
      }
      if (T.type === "select-keys") {
        const Y = q(T.owner), pe = T.frames.map((k) => k - Y), ae = s.selection, K = (ae == null ? void 0 : ae.owner) === T.owner && ae.lane === T.lane;
        if (T.additive && K) {
          const k = new Set(ae.frames);
          for (const re of pe)
            k.has(re) ? k.delete(re) : k.add(re);
          ae.frames = [...k].sort((re, de) => re - de);
        } else
          s.selection = pe.length ? { owner: T.owner, lane: T.lane, frames: pe } : null;
        ne();
        return;
      }
      if (T.type === "move-keys") {
        const Y = s.selection;
        if (!Y || !he(Y.owner)) return;
        const pe = fe(Y.owner), ae = C(Y);
        if (T.phase === "start") {
          z(), s.drag = { keyframes: ae.map((re) => structuredClone(pe[re].keyframes)), frames: Y.frames };
          return;
        }
        const { drag: K } = s;
        if (!(K != null && K.keyframes)) return;
        ae.forEach((re, de) => {
          pe[re].keyframes = structuredClone(K.keyframes[de]);
        });
        const k = hv(pe, ae, K.frames, T.delta, -q(Y.owner));
        if (Y.frames = K.frames.map((re) => re + k), T.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, k ? u() : w();
        return;
      }
      if (T.type === "clip") {
        const Y = T.id === "scene" ? fe("scene") : i.stickers.find((k) => k.id === T.id);
        if (!Y || Y.locked) return;
        if (T.phase === "start") {
          z(), s.drag = { clip: { ...Y.clip }, span: ce(Y.clip) };
          return;
        }
        const { drag: pe } = s;
        if (!(pe != null && pe.clip)) return;
        const ae = pe.clip, K = d(Y.clip);
        if (Y.clip = { ...ae }, T.delta && T.mode === "move" ? yv(Y.clip, T.delta) : T.delta && T.mode === "start" ? bv(Y.clip, ae.start + T.delta) : T.delta && vv(Y.clip, (ae.duration === null ? pe.span : ae.start + ae.duration) + T.delta, pe.span), T.phase !== "end") {
          t.request("timeline"), d(Y.clip) !== K && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ee(), JSON.stringify(Y.clip) !== JSON.stringify(ae) ? u() : w();
        return;
      }
      if (T.type === "key-row") {
        if (T.owner === "scene" || !he(T.owner)) return;
        z(), uv(fe(T.owner), r.frame - q(T.owner)), u();
        return;
      }
      if (T.type === "fps") {
        const Y = _v(T.fps);
        if (Y === null || Y === i.timeline.fps || a.timeline.fpsLocked) {
          ne();
          return;
        }
        c(Y);
        return;
      }
      if (T.type === "length") {
        const Y = xv(T.length);
        if (Y === void 0 || Y === i.timeline.length) {
          ne();
          return;
        }
        z(), i.timeline.length = Y, u();
        return;
      }
      if (T.type === "easing") {
        const Y = s.selection;
        if (!Y || !he(Y.owner)) return;
        z(), gv(fe(Y.owner), C(Y), Y.frames, T.easing), T.commit ? u() : w();
      }
    }
  }
  return {
    connect(T) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: g,
        jumpTimelineTo: _,
        playback: m,
        refreshModalVideoSource: h,
        refreshTimelineEdit: w,
        releaseHiddenSelection: ee,
        requestDraw: $,
        selectWorldSticker: te,
        selectedLanes: C,
        setSelectedItem: X,
        stopTimelinePlayback: z,
        syncFloatingViewButtonState: G,
        syncTimeline: ne,
        timelineEditable: he,
        timelineOffset: q,
        timelineOwner: fe,
        timelineSpanFrames: ce,
        timelineTimed: oe,
        togglePlayback: U,
        toggleVideoMuted: E,
        updateSelectionMenu: H,
        updateSidePanel: A
      } = T);
    },
    onTimelineAction: j
  };
}
function V2(e) {
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
  function _() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Rn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), m(), o.setDirtyCanvas(!0, !0));
  }
  function m() {
    var C;
    if (a) return;
    f(), l.coverage = Rn(l.coverage), _m(o, l.active);
    const te = xm(o, l);
    c && !km(o, te, String(c.value ?? ""), { rebased: n }) && (c.value = te, (C = c.callback) == null || C.call(c, te));
  }
  function h() {
    l.ui_settings = SN(l.ui_settings), a || m();
  }
  function w() {
    var te;
    a || (m(), (te = o.setDirtyCanvas) == null || te.call(o, !0, !0));
  }
  function ee() {
    a || d() && g().catch((te) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", te);
    });
  }
  function $(te = {}) {
    var z, G, ne, he, q, fe, ce, oe, U, E, H;
    const C = te.syncPreview !== !1, X = te.syncGraph !== !1;
    C && ((ne = (G = (z = rg(o)) == null ? void 0 : z.runtime) == null ? void 0 : G.requestDraw) == null || ne.call(G), (fe = (q = (he = ng(o)) == null ? void 0 : he.dom) == null ? void 0 : q.requestDraw) == null || fe.call(q), (ce = o.setDirtyCanvas) == null || ce.call(o, !0, !1)), X && ((U = (oe = o.graph) == null ? void 0 : oe.setDirtyCanvas) == null || U.call(oe, !0, !0), (H = (E = t == null ? void 0 : t.canvas) == null ? void 0 : E.setDirty) == null || H.call(E, !0, !0));
  }
  return {
    connect(te) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: g
      } = te);
    },
    apply: _,
    commitState: m,
    persistUiSettings: h,
    commitAndRefreshNode: w,
    triggerBackgroundPersistenceOnClose: ee,
    syncCoverageChangeToNodePreviews: $
  };
}
function $2(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re;
  function de(I, v, V = "Clear") {
    return new Promise((L) => {
      a.confirmDialog = {
        visible: !0,
        title: String(I || ""),
        text: String(v || ""),
        confirmLabel: String(V || "Confirm"),
        resolve: L
      };
    });
  }
  async function we() {
    var V, L;
    if (r || !await de(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = yo(null), U();
    const v = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((J) => J.placement === "world" || v.includes(J)) : v, n || (i.assets = {}), t.selectedId = ((V = v[0]) == null ? void 0 : V.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((L = v[0]) == null ? void 0 : L.id) || null, H();
    else {
      const J = Ev(i.shots, i.active.selected_shot_id);
      i.stickers = v, i.assets = {}, i.shots = J.shots, t.selectedId = J.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = J.selectedShotId, !J.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, H();
    }
    A(), u(), k(), K(), j();
  }
  async function _e(I) {
    var O, F, x, R;
    if (r) return;
    const v = I === "mask" ? "mask" : "paint", V = v === "mask" ? "Mask" : "Paint", L = w(v);
    if (!(!L.length && !(((O = t.interaction) == null ? void 0 : O.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === v) || !await de(
      `Clear ${V}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${V}`
    ))) {
      if (((x = t.interaction) == null ? void 0 : x.kind) === "draw" && ((R = t.interaction) == null ? void 0 : R.layerKind) === v) {
        const Z = g(t.interaction);
        Z && t.paintEngine.cancelActiveStroke(Z), t.interaction = null;
      }
      L.length = 0, i.painting.raster_objects = ee().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") !== v), v === "paint" && (h().length = 0), U(), A(), u(), k(), K(), ae(), j();
    }
  }
  function N() {
    if (r) return;
    const I = $();
    if (!I || !he(I) || C(I) || n && fe(I)) return;
    let v;
    n ? v = qv(I, wi("st"), m()) : (v = JSON.parse(JSON.stringify(I)), v.id = wi("st"), v.yaw_deg = jt((v.yaw_deg || 0) + 8), v.z_index = m()), i.stickers.push(v), i.active.selected_sticker_id = v.id, t.selectedId = v.id, t.selectedIds = [v.id], ce(), A(), u(), K(), k(), j();
  }
  function le() {
    const I = T();
    return I ? (re(I) && (Y(), Bv(i, I.id), c(), ce(), A(), u(), k(), K(), pe(), j()), !0) : !1;
  }
  function b() {
    var V, L, J, O, F;
    if (r) return;
    const I = te(), v = $();
    if (!(!v && I.length === 0) && !I.some((x) => X(x))) {
      if (Y(), I.length > 1) {
        const x = new Set(I.filter((me) => q(me)).map((me) => String(me.actionGroupId || me.id || ""))), R = new Set(I.filter((me) => z(me)).map((me) => E(me.rasterObjectId || me.id || ""))), Z = new Set(I.filter(he).map((me) => String(me.id || "")));
        x.size > 0 && (i.painting.paint.strokes = (Array.isArray((L = (V = i.painting) == null ? void 0 : V.paint) == null ? void 0 : L.strokes) ? i.painting.paint.strokes : []).filter((me) => !x.has(String((me == null ? void 0 : me.actionGroupId) || ""))), i.painting.groups = h().filter((me) => !x.has(String((me == null ? void 0 : me.actionGroupId) || (me == null ? void 0 : me.id) || ""))), U()), R.size > 0 && (i.painting.raster_objects = ee().filter((me) => !R.has(String((me == null ? void 0 : me.id) || ""))), oe()), Z.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((me) => Z.has(String((me == null ? void 0 : me.id) || "")) ? C(me) ? (ne(me) || (me.visible = !1), !0) : !1 : !0), H(), ce()), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), j();
        return;
      }
      if (q(v)) {
        const x = String(v.actionGroupId || v.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((O = (J = i.painting) == null ? void 0 : J.paint) == null ? void 0 : O.strokes) ? i.painting.paint.strokes : []).filter((R) => String((R == null ? void 0 : R.actionGroupId) || "").trim() !== x), i.painting.groups = h().filter((R) => String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || "").trim() !== x), U(), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), j();
        return;
      }
      if (z(v)) {
        const x = E(v.rasterObjectId || v.id || "");
        i.painting.raster_objects = ee().filter((R) => String((R == null ? void 0 : R.id) || "").trim() !== x), oe(), t.selectedId = null, t.selectedIds = [], A(), u(), k(), K(), j();
        return;
      }
      if (o && G(v)) {
        f();
        return;
      }
      if (s === "stickers" || he(v)) {
        if (C(v)) {
          if (ne(v)) return;
          v.visible = !1, ce(), A(), u(), k(), K(), j();
          return;
        }
        i.stickers = i.stickers.filter((x) => x.id !== v.id), H(), ce(), t.selectedId = ((F = _()[0]) == null ? void 0 : F.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, A(), u(), k(), K(), j();
        return;
      }
      l();
    }
  }
  function y() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", ae(), k());
  }
  return {
    connect(I) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: g,
        getList: _,
        getNextStickerZIndex: m,
        getPaintingGroupList: h,
        getPaintingLayerList: w,
        getRasterObjectList: ee,
        getSelected: $,
        getSelectedItems: te,
        isExternalSticker: C,
        isItemLocked: X,
        isRasterObjectItem: z,
        isShotItem: G,
        isStickerHidden: ne,
        isStickerItem: he,
        isStrokeGroupItem: q,
        isUploadingSticker: fe,
        markObjectVisualsDirty: ce,
        markPaintCompositeVisualsDirty: oe,
        markPaintStrokeVisualsDirty: U,
        parseRasterObjectSelectionId: E,
        pruneUnusedAssets: H,
        pushHistory: A,
        requestDraw: j,
        selectedWorldSticker: T,
        stopTimelinePlayback: Y,
        syncFloatingViewButtonState: pe,
        syncPaintUi: ae,
        updateSelectionMenu: K,
        updateSidePanel: k,
        worldStickerEditable: re
      } = I);
    },
    clearAll: we,
    clearPaintingLayer: _e,
    duplicateSelected: N,
    deleteSelectedWorldSticker: le,
    deleteSelected: b,
    forceCursorTool: y
  };
}
function z2(e) {
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
  let _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A;
  function j(O) {
    return Cd(O == null ? void 0 : O.dataTransfer);
  }
  function T(O) {
    const F = !!O;
    n.active !== F && (n.active = F, d.classList.toggle("drop-active", F));
  }
  function Y() {
    const O = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      O.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function pe(O) {
    if (l || f !== "stickers" && f !== "cutout" || !rr(O)) return;
    if (c) {
      E(), await de(O);
      return;
    }
    const F = wi("asset"), x = zo(a, `add:${F}`, async () => {
      try {
        const { image: R } = await jo(O);
        s.set(F, R);
        const Z = wi("st");
        u.stickers.push({
          id: Z,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1)),
          rot_deg: 0,
          z_index: te()
        }), ce(u.stickers[u.stickers.length - 1]), $(), A(), H(), q();
        const me = await Si(O, {
          fetchApi: (Se, be) => t.fetchApi(Se, be)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === F).length) return;
        u.assets[F] = me, Y(), he(), m(), A(), H(), q();
      } catch (R) {
        delete u.assets[F], s.delete(F);
        const Z = Array.isArray(u.stickers) ? u.stickers : [], me = Z.filter((ue) => String((ue == null ? void 0 : ue.asset_id) || "") === F);
        throw me.length && (u.stickers = Z.filter((ue) => String((ue == null ? void 0 : ue.asset_id) || "") !== F), me.some((ue) => String((ue == null ? void 0 : ue.id) || "") === String(i.selectedId || "")) && ce(null), A(), H(), q(), m()), R;
      }
    });
    try {
      await x;
    } catch {
    }
  }
  function ae() {
    var O;
    l || f !== "stickers" && f !== "cutout" || (O = g == null ? void 0 : g.openImagePicker) == null || O.call(g, "add");
  }
  function K() {
    var O;
    l || !c || (O = g == null ? void 0 : g.openImagePicker) == null || O.call(g, "add-world");
  }
  async function k(O) {
    l || !c || !rr(O) || (E(), await de(O, "world"));
  }
  function re() {
    const O = { x: r.width / 2, y: r.height / 2 }, F = z() ? o.pick(ee(), O.x, O.y, r.width, r.height) : null;
    return gS(oe(), F, w());
  }
  async function de(O, F = "sky") {
    const x = wi("st"), R = zo(a, `add:${x}`, async () => {
      const { image: Z } = await jo(O), me = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(Z.naturalWidth || Z.width || 1), Number(Z.naturalHeight || Z.height || 1)),
        rot_deg: 0
      }, ue = { kind: "file", filename: "" }, ve = F === "world" ? Yv(x, ue, re()) : ld(x, ue, me, te());
      s.set(U(ve), Z), u.stickers.push(ve), F === "world" ? fe(x) : ce(ve), $(), A(), H(), q();
      try {
        const Se = await Si(O, {
          fetchApi: (Q, ge) => t.fetchApi(Q, ge)
        }), be = u.stickers.find((Q) => Q.id === x);
        if (!be) return;
        be.source = ba(Se), s.set(U(be), Z), he(), m();
      } catch (Se) {
        throw u.stickers = u.stickers.filter((be) => be.id !== x), i.selectedId === x && ce(null), i.worldSelectedId === x && _(), he(), m(), Se;
      } finally {
        A(), H(), q();
      }
    });
    try {
      await R;
    } catch {
    }
  }
  async function we(O, F) {
    const x = zo(a, `replace:${F}:${wi("asset")}`, async () => {
      const { image: R } = await jo(O), Z = await Si(O, {
        fetchApi: (ue, ve) => t.fetchApi(ue, ve)
      }), me = u.stickers.find((ue) => ue.id === F);
      if (me) {
        me.source = ba(Z), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ue of [me.size.value, ...me.size.keyframes.map((ve) => ve.value)])
          ue.vFOV_deg = h(ue.hFOV_deg, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1));
        s.set(U(me), R), ne(), he(), m(), A(), H(), q();
      }
    });
    try {
      await x;
    } catch {
    }
  }
  async function _e(O) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = C();
    if (!F || !G(F) || X(F) || !rr(O)) return;
    if (c) {
      await we(O, F.id);
      return;
    }
    const x = String(F.id || ""), R = wi("asset"), Z = zo(a, `replace:${x}:${R}`, async () => {
      var Q;
      const me = (Array.isArray(u.stickers) ? u.stickers : []).find((ge) => String((ge == null ? void 0 : ge.id) || "") === x) || null;
      if (!me || !G(me) || X(me)) return;
      const ue = String(me.asset_id || ""), ve = ue ? un(((Q = u.assets) == null ? void 0 : Q[ue]) || null) : null, Se = Number(me.vFOV_deg || 0), be = me.crop && typeof me.crop == "object" ? { ...me.crop } : null;
      try {
        const { image: ge } = await jo(O);
        s.set(R, ge), me.asset_id = R, me.vFOV_deg = h(
          Number(me.hFOV_deg || 30),
          Number(ge.naturalWidth || ge.width || 1),
          Number(ge.naturalHeight || ge.height || 1)
        ), me.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ne(), A(), H(), q();
        const B = await Si(O, {
          fetchApi: (P, S) => t.fetchApi(P, S)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((P) => String((P == null ? void 0 : P.id) || "") === x) || null;
        if (!p || String(p.asset_id || "") !== R) return;
        u.assets[R] = B, Y(), he(), m(), A(), H(), q();
      } catch (ge) {
        delete u.assets[R], s.delete(R);
        const B = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === x) || null;
        throw B && String(B.asset_id || "") === R && (ue && ve && (u.assets[ue] = ve), B.asset_id = ue, B.vFOV_deg = Se, B.crop = be ? { ...be } : null), ne(), m(), A(), H(), q(), ge;
      }
    });
    try {
      await Z;
    } catch {
    }
  }
  function N() {
    var F;
    if (l) return;
    const O = C();
    !O || !G(O) || X(O) || (F = g == null ? void 0 : g.openImagePicker) == null || F.call(g, "replace");
  }
  async function le() {
    if (l || f !== "stickers") return;
    if (c) {
      await b();
      return;
    }
    const O = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(O).filter(([, R]) => {
      const Z = String((R == null ? void 0 : R.type) || "").toLowerCase(), me = String((R == null ? void 0 : R.value) || "");
      return Z === "dataurl" && me.startsWith("data:image");
    });
    if (!F.length) return;
    let x = !1;
    for (const [R, Z] of F)
      try {
        const me = String((Z == null ? void 0 : Z.value) || "");
        if (!me) continue;
        const ue = await fetch(me).then((ge) => ge.blob()), ve = String(ue.type || "image/png").split("/")[1] || "png", Se = String((Z == null ? void 0 : Z.name) || `${R}.${ve}`), be = new File([ue], Se, { type: ue.type || "image/png" }), Q = await Si(be, {
          fetchApi: (ge, B) => t.fetchApi(ge, B)
        });
        u.assets[R] = {
          ...Q,
          w: Number((Z == null ? void 0 : Z.w) || 0),
          h: Number((Z == null ? void 0 : Z.h) || 0)
        }, x = !0;
      } catch {
      }
    x && (m(), q());
  }
  async function b() {
    let O = !1;
    for (const F of u.stickers) {
      const x = F.source.data_url;
      if (x)
        try {
          const R = await fetch(x).then((ve) => ve.blob()), Z = String(R.type || "image/png").split("/")[1] || "png", me = new File([R], `${F.id}.${Z}`, { type: R.type || "image/png" }), ue = await Si(me, {
            fetchApi: (ve, Se) => t.fetchApi(ve, Se)
          });
          F.source = ba(ue), O = !0;
        } catch {
        }
    }
    O && (m(), q());
  }
  function y(O) {
    f !== "stickers" && f !== "cutout" || l || (O.preventDefault(), T(!0));
  }
  function I(O) {
    var R;
    if (f !== "stickers" && f !== "cutout" || l) return;
    O.preventDefault(), O.stopPropagation(), n.depth = 0, T(!1);
    const x = Array.from(((R = O.dataTransfer) == null ? void 0 : R.files) || []).find((Z) => rr(Z));
    x && pe(x);
  }
  function v(O) {
    f !== "stickers" && f !== "cutout" || l || j(O) && (n.depth += 1, T(!0), O.preventDefault());
  }
  function V(O) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && j(O) && T(!0), n.active && O.preventDefault());
  }
  function L(O) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const F = Number(O.clientX) <= 0 && Number(O.clientY) <= 0;
    (n.depth === 0 || F) && T(!1);
  }
  function J(O) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, T(!1), j(O) && O.preventDefault());
  }
  return {
    connect(O) {
      ({
        clearWorldSelection: _,
        commitAndRefreshNode: m,
        computeStickerVFov: h,
        contentSphere: w,
        currentSpaceCamera: ee,
        forceCursorTool: $,
        getNextStickerZIndex: te,
        getSelected: C,
        isExternalSticker: X,
        isSpaceView: z,
        isStickerItem: G,
        markObjectVisualsDirty: ne,
        pushHistory: he,
        requestDraw: q,
        selectWorldSticker: fe,
        setSelectedItem: ce,
        spaceViewState: oe,
        stickerImageKey: U,
        stopTimelinePlayback: E,
        updateSelectionMenu: H,
        updateSidePanel: A
      } = O);
    },
    addImageStickerFromFile: pe,
    addImageSticker: ae,
    addWorldImageSticker: K,
    addWorldStickerFromFile: k,
    replaceSelectedImageFromFile: _e,
    replaceSelectedImage: N,
    migrateLegacyEmbeddedAssets: le,
    pruneUnusedAssets: Y,
    setDropCue: T,
    onCanvasDragOver: y,
    onCanvasDrop: I,
    onWindowDragEnter: v,
    onWindowDragOver: V,
    onWindowDragLeave: L,
    onWindowDrop: J
  };
}
function j2(e) {
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
    uiState: _
  } = e;
  let m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e = o;
  function N(B, p) {
    var M;
    const P = (M = C().space) == null ? void 0 : M.gizmo;
    if (q() && P && we("hover", p) !== null && we("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: P.mode, start: P.transform, base: te(), changed: !1 }, r.setPointerCapture(B.pointerId), k(p), !0;
    const S = Dm(te(), h(A()));
    return kS($(), S, p, r.width, r.height) ? (q() || (H(R()), de(), re(), U()), n.interaction = { kind: "world_select" }, r.setPointerCapture(B.pointerId), !0) : !1;
  }
  function le() {
    if (s || g !== "cutout") return;
    const B = R();
    if (B) {
      H(B), n.mode = "pano", K(jt(Number(B.yaw_deg || 0)), Ie(Number(B.pitch_deg || 0), -89.9, 89.9)), de(), re(), U({ cause: "cutout_frame" });
      return;
    }
    const p = Wh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: jt(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], H(p), X(), n.mode = "pano", oe(), ee(), de(), re(), U({ cause: "cutout_frame" });
  }
  function b() {
    s || !u || G() || (T(), d.camera = Vv(j()), F(), H(R()), X(), oe(), ee(), de(), re(), U({ cause: "cutout_frame" }));
  }
  function y() {
    T(), d.camera = null, H(null), F(), oe(), ee(), de(), re(), U({ cause: "cutout_frame" });
  }
  function I(B, p) {
    u && fe(B) && (d.camera.projection = p === ho ? "erp" : "perspective", p === ho) || L(B, p);
  }
  function v() {
    s || g !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, oe(), ee(), de(), re(), U());
  }
  function V(B, p) {
    const P = a.frameSafeRect;
    if (!B || !P || n.mode !== "frame") return !1;
    const S = Su * Ii(P, B), M = Xu(qu(P, p), S);
    return B.hFOV_deg = M.hFOV_deg, B.vFOV_deg = M.vFOV_deg, !0;
  }
  function L(B, p) {
    if (!B || B.locked === !0) return;
    const P = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, S = (() => {
      const D = String(B.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [xe, Pe] = D.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(xe) && Number.isFinite(Pe)) return xe >= Pe;
      }
      const ie = Number(B.hFOV_deg || 64), Ne = Number(B.vFOV_deg || 40);
      return Math.abs(ie - Ne) > 1e-6 ? ie >= Ne : Ti(B) >= 1;
    })();
    let [M, W] = P[String(p)] || P["1:1"];
    M >= W !== S && ([M, W] = [W, M]);
    const ye = M / W;
    if (!V(B, ye)) {
      const D = Ie(Number(B.vFOV_deg || 40), 1, 179);
      B.vFOV_deg = D, B.hFOV_deg = ma(D, ye);
    }
    B.aspect_id = `${M}:${W}`;
  }
  function J(B, p, P) {
    if (!B || B.locked === !0) return !1;
    const S = hs(p, P);
    if (!S) return !1;
    const M = S.ratio;
    if (!V(B, M)) {
      const W = Ie(Number(B.vFOV_deg || 40), 1, 179);
      B.vFOV_deg = W, B.hFOV_deg = ma(W, M);
    }
    return B.aspect_id = S.label, !0;
  }
  function O(B) {
    if (!B || B.locked === !0) return;
    const p = String(B.aspect_id || "").trim(), P = si(B), S = P.tanHalfX / Math.max(1e-12, P.tanHalfY), M = 1 / Math.max(1e-12, S);
    if (!V(B, M)) {
      const W = Ie(Number(B.vFOV_deg || 60), 1, 179);
      B.vFOV_deg = W, B.hFOV_deg = ma(W, M);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [W, ye] = p.split(":");
      B.aspect_id = `${ye}:${W}`;
    } else
      B.aspect_id = Ni(B);
  }
  function F(B = !0) {
    var S, M;
    if (!t) return;
    const p = _e;
    if (!w()) {
      _e = null, (S = d.shots) != null && S.length && (d.shots = []), p && x(p, null);
      return;
    }
    const P = (M = d.shots) == null ? void 0 : M[0];
    B && P && _e && zv(d.camera, n.frame, P, _e), _e = Sm(d.camera, n.frame), P ? Object.assign(P, _e, { position: [..._e.position] }) : d.shots = [{ ..._e, position: [..._e.position] }], p || x(null, _e);
  }
  function x(B, p) {
    var W, ye;
    !p && n.mode === "frame" && ce(B);
    const P = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((ye = (W = n.viewTransition) == null ? void 0 : W.end) == null ? void 0 : ye.mode) === "3dof") {
      ae({ ...j(), position: P }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ne()) return;
    const S = (B == null ? void 0 : B.position) ?? [0, 0, 0];
    if (S.every((D, ie) => D === P[ie])) return;
    const M = { ...j(), position: S };
    m({ mode: "6dof", position: S, moved: !0 }), n.viewDistance = M.distance, ae({ ...M, position: P }, { mode: "3dof", moved: !1 });
  }
  function R() {
    if (!l) return null;
    const B = Array.isArray(d.shots) ? d.shots : [];
    if (!B.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return B.find((P) => String((P == null ? void 0 : P.id) || "") === p) || B[0] || null;
  }
  function Z(B, p, P = {}) {
    var W;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot) return;
    B.accumulatedRad += Hh(p, B.lastAngle), B.lastAngle = p;
    const S = Gh(B.start.roll_deg, B.accumulatedRad, {
      shiftKey: P.shiftKey,
      altKey: B.altStarted ? !1 : P.altKey
    });
    B.shot.roll_deg = S, B.changed = B.changed || Math.abs(B.accumulatedRad) > 1e-9;
    const M = (((W = _.sidePanel) == null ? void 0 : W.params) || []).find((ye) => ye.key === "roll_deg");
    M && (M.value = S, M.displayValue = so(S), M.fillPct = (S + 180) / 360 * 100), Y(), ve(B), U({ localOnly: !0 });
  }
  function me(B, p, P = {}) {
    var W;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot || !B.rollGesture) return;
    const S = xg(B.rollGesture, p, P);
    if (!S) return;
    B.rollGesture = S.gesture, B.center = S.gesture.center, B.lastAngle = S.gesture.lastAngle, B.accumulatedRad = S.gesture.accumulatedRad, B.shot.roll_deg = S.rollDeg, B.changed = B.changed || Math.abs(S.gesture.accumulatedRad) > 1e-9;
    const M = (((W = _.sidePanel) == null ? void 0 : W.params) || []).find((ye) => ye.key === "roll_deg");
    M && (M.value = S.rollDeg, M.displayValue = so(S.rollDeg), M.fillPct = (S.rollDeg + 180) / 360 * 100), Y(), ve(B), U({ localOnly: !0 });
  }
  function ue(B, p) {
    const P = E(B);
    return Math.atan2(P.y - p.y, P.x - p.x);
  }
  function ve(B) {
    var ye, D;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = z(B.shot), P = (ye = r.getBoundingClientRect) == null ? void 0 : ye.call(r), S = (D = c.getBoundingClientRect) == null ? void 0 : D.call(c);
    if (!p || !P || !S || r.width <= 0 || r.height <= 0) return;
    const M = P.width / r.width, W = P.height / r.height;
    _.tooltip.text = `${so(B.shot.roll_deg)}°`, _.tooltip.left = P.left - S.left + (p.x + p.w * 0.5) * M, _.tooltip.top = P.top - S.top + (p.y + p.h * 0.5) * W + 12, _.tooltip.variant = "roll", _.tooltip.visible = !0;
  }
  function Se(B) {
    var W;
    if (B.button !== 0 || s || n.mode !== "frame") return;
    const p = R();
    if (!p || p.locked === !0) return;
    const P = z(p);
    if (!P) return;
    const S = { x: P.x + P.w * 0.5, y: P.y + P.h * 0.5 }, M = ue(B, S);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: S,
      lastAngle: M,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (W = i.setPointerCapture) == null || W.call(i, B.pointerId), B.preventDefault(), Y(), ve(n.interaction), U({ localOnly: !0 });
  }
  function be(B) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || Z(
      n.interaction,
      ue(B, n.interaction.center),
      B
    );
  }
  function Q() {
    const B = n.interaction;
    (B == null ? void 0 : B.kind) !== "roll_frame" || B.source !== "knob" || (B.changed && (oe(), ee(), de()), n.interaction = null, he(), pe(), Y(), U());
  }
  function ge(B) {
    const p = n.mode === "frame" && !s ? R() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, oe(), ee(), de(), Y(), U(), B.preventDefault());
  }
  return {
    connect(B) {
      ({
        applySpaceMode: m,
        cameraFrustumLength: h,
        cameraShoots: w,
        commitAndRefreshNode: ee,
        currentSpaceCamera: $,
        cutoutCamera: te,
        editorViewInput: C,
        forceCursorTool: X,
        getFrameViewRect: z,
        hasCamera: G,
        hasSpaceContent: ne,
        hideTooltip: he,
        isCameraSelected: q,
        isShotItem: fe,
        leaveFrameView: ce,
        pushHistory: oe,
        requestDraw: U,
        screenPos: E,
        setSelectedItem: H,
        spaceScale: A,
        spaceViewState: j,
        stopTimelinePlayback: T,
        syncFrameRollKnob: Y,
        syncViewToggleState: pe,
        transitionView: ae,
        turnViewTo: K,
        updateCursor: k,
        updateSelectionMenu: re,
        updateSidePanel: de,
        worldGizmoPointer: we
      } = B);
    },
    addCutoutFrame: le,
    addStudioCamera: b,
    deleteStudioCamera: y,
    setShotAspect: I,
    clearCutoutFrame: v,
    applyCutoutAspectCustom: J,
    rotateCutoutAspect90: O,
    syncCutoutShot: F,
    getActiveCutoutShot: R,
    startCameraPress: N,
    applySharedRollInteractionPoint: me,
    onFrameRollKnobPointerDown: Se,
    onFrameRollKnobPointerMove: be,
    finishKnobRoll: Q,
    onFrameRollKnobDoubleClick: ge
  };
}
function H2(e) {
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
    videoTransportEl: _
  } = e;
  let m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E = null, H = !1;
  function A(x) {
    if (n.mode = "pano", !x) return;
    h();
    const R = q().distance;
    n.viewYaw = jt(x.yaw_deg), n.viewPitch = Ie(x.pitch_deg, -89.9, 89.9), n.viewFov = Ie(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && m({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = R, d.backgroundDirty = !0;
  }
  function j() {
    var S, M, W, ye, D;
    if (!r) return null;
    const x = (S = r.getBoundingClientRect) == null ? void 0 : S.call(r), R = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, Z = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(R, Z);
    let me = 24, ue = 24;
    const ve = Math.max(me + 1, r.width - 24);
    let Se = Math.max(ue + 1, r.height - 24);
    const be = (M = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : M.call(f), Q = (W = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : W.call(a);
    let ge = 24;
    be && x && be.width > 0 && be.height > 0 && (ge = Math.max(ge, (be.right - x.left) * R + Sp)), Q && x && Q.width > 0 && Q.height > 0 && ((ye = g.frameRail) == null ? void 0 : ye.visible) === !0 && (ge = Math.max(ge, (x.right - Q.left) * R + Sp)), me = Math.max(me, ge);
    const B = Math.min(ve, r.width - ge);
    let p = 24;
    const P = (D = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : D.call(s);
    if (P && x && P.width > 0 && P.height > 0 && (p = Math.max(p, (P.bottom - x.top) * Z + xc)), [l, _].forEach((ie) => {
      var Pe;
      if (!ie || !x) return;
      const Ne = getComputedStyle(ie);
      if (Ne.display === "none" || Ne.visibility === "hidden" || Number(Ne.opacity) <= 0) return;
      const xe = (Pe = ie.getBoundingClientRect) == null ? void 0 : Pe.call(ie);
      !xe || xe.width <= 0 || xe.height <= 0 || (p = Math.max(p, (x.bottom - xe.top) * Z + xc));
    }), o && x) {
      const ie = getComputedStyle(o);
      ie.display !== "none" && ie.visibility !== "hidden" && Number(ie.opacity) > 0 && (p = Math.max(p, (nN + xc) * Z));
    }
    return ue = Math.max(ue, p), Se = Math.max(ue + 1, Math.min(Se, r.height - p)), {
      x: me,
      y: ue,
      w: Math.max(1, B - me),
      h: Math.max(1, Se - ue)
    };
  }
  function T(x = $()) {
    if (!x || !r) return null;
    const R = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return C1(R, x, Su * Ii(R, x));
  }
  function Y(x = $()) {
    const R = T(x);
    return R ? { x: R.x, y: R.y, w: R.w, h: R.h } : null;
  }
  function pe() {
    return u && !!$();
  }
  function ae(x, R) {
    const Z = $();
    if (!Z || Z.locked === !0) return !1;
    const me = Number(R) > 0, ue = Bh(Z, R);
    if (!ue) return !1;
    if (me) {
      const ve = Su * Ii(
        d.frameSafeRect || { w: r.width, h: r.height },
        ue
      ), Se = Ju({ width: r.width, height: r.height }, ve);
      if (Se.halfW < r.width * 0.5 - 1e-6 || Se.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Z.hFOV_deg = ue.hFOV_deg, Z.vFOV_deg = ue.vFOV_deg, K(), U(), !0;
  }
  function K() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, z(), w(), U());
    }, 180);
  }
  function k() {
    return t && n.mode === "frame" && te();
  }
  function re() {
    const x = $(), R = T(x);
    return x && R ? Vm(x, R, { width: r.width, height: r.height }) : null;
  }
  function de() {
    var x;
    return ((x = ee()) == null ? void 0 : x.radius) || sr;
  }
  function we(x) {
    const { position: R, yaw_deg: Z, pitch_deg: me, roll_deg: ue, hFOV_deg: ve } = x.shot;
    return { position: R, yaw_deg: Z, pitch_deg: me, roll_deg: ue, hFOV_deg: ve, distance: de() };
  }
  function _e(x, R) {
    const { rect: Z } = x;
    return i.pickSurface(ne(x.shot), R.x - Z.x, R.y - Z.y, Z.w, Z.h);
  }
  function N(x, R, Z) {
    return Zc(R, _e(x, Z), null, he());
  }
  function le(x) {
    return JSON.stringify([we(x), x.rect]);
  }
  function b(x) {
    const R = $();
    R.position = [...x.position], R.yaw_deg = x.yaw_deg, R.pitch_deg = x.pitch_deg;
  }
  function y(x, R) {
    const Z = $();
    !Z || c || Z.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Z,
      last: x,
      start: { yaw_deg: Number(Z.yaw_deg || 0), pitch_deg: Number(Z.pitch_deg || 0) },
      changed: !1
    }, oe(x), r.setPointerCapture(R));
  }
  function I(x, R, Z) {
    const me = re();
    if (!me || c) return;
    const ue = we(me);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: R, pivot: N(me, ue, R), changed: !1 } : { kind: "frame_pan", last: R, depth: Mm(ue, he()), changed: !1 }, oe(R), r.setPointerCapture(Z);
  }
  function v(x, R) {
    const Z = re();
    if (!Z) return;
    const me = we(Z), ue = R.x - x.last.x, ve = R.y - x.last.y;
    b(x.kind === "frame_pan" ? Am(me, ue, ve, Z.rect.w, Z.rect.h, x.depth) : Nm(me, ue, ve, r.height, x.pivot)), x.changed = x.changed || ue !== 0 || ve !== 0, x.last = R, G({ localOnly: !0, cause: "frame_view" });
  }
  function V(x, R) {
    const Z = re();
    if (!Z || c) return;
    const me = we(Z), ue = performance.now(), ve = { x: x.x, y: x.y, time: ue, key: i.contentRevision(), view: le(Z) };
    if (!Pm(E, ve)) {
      const Se = _e(Z, x);
      E = { ...ve, cost: performance.now() - ue, hit: Se };
    }
    b(Cm(me, Zc(me, E.hit, null, he()), R, he())), E.view = le(re() ?? Z), E.wheelTime = ue, K(), U(), G({ localOnly: !0, cause: "frame_view" });
  }
  function L(x, R) {
    const Z = $();
    if (!Z || c || Z.locked === !0) return !1;
    const me = y0(Z, x, R);
    return me === Z ? !1 : (fe(), Z.position = me.position, H = !0, !0);
  }
  function J() {
    return H ? (H = !1, z(), w(), U(), !0) : !1;
  }
  function O() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, z(), w(), U(), !0) : !1;
  }
  function F() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const R = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, R && C(), n.interaction = null, X(), ce(), U(), oe(n.pointerPos), G({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: m,
        cancelViewTransition: h,
        commitAndRefreshNode: w,
        contentSphere: ee,
        getActiveCutoutShot: $,
        hasSpaceContent: te,
        hideTooltip: C,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: z,
        requestDraw: G,
        shotViewCamera: ne,
        spaceScale: he,
        spaceViewState: q,
        stopTimelinePlayback: fe,
        syncViewToggleState: ce,
        updateCursor: oe,
        updateSidePanel: U
      } = x);
    },
    leaveFrameView: A,
    measureFrameSafeRect: j,
    getFrameViewLayout: T,
    getFrameViewRect: Y,
    supportsFramePainting: pe,
    zoomFrameViewAt: ae,
    isFreeFrameView: k,
    frameContext: re,
    frameViewDistance: de,
    frameSpaceView: we,
    frameTarget: N,
    startPanFrame: y,
    startFrameDrag: I,
    dragFrame: v,
    zoomFrameAt: V,
    flushFrameWheelCommit: O,
    cancelFrameCameraGesture: F,
    moveFrameByKeys: L,
    endFrameKeyMove: J
  };
}
function G2(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G = 0;
  function ne() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function he() {
    return String(ne() || "") === "lasso_fill";
  }
  function q() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function fe(N, le) {
    const b = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function ce(N) {
    const le = String(N || "").trim();
    return le === "eraser" ? Er : Fn[le] ? le : t.activeBrushPresetId || Er;
  }
  function oe() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (q() || z());
  }
  function U() {
    var N;
    return oe() && ((N = t.pointerPos) == null ? void 0 : N.inside) === !0;
  }
  function E(N, le = !0) {
    const b = Number((N == null ? void 0 : N.x) || 0), y = Number((N == null ? void 0 : N.y) || 0), I = le !== !1, v = t.pointerPos || { x: 0, y: 0, inside: !1 }, V = v.inside !== I || Math.abs(v.x - b) > 0.01 || Math.abs(v.y - y) > 0.01;
    return t.pointerPos = { x: b, y, inside: I }, V;
  }
  function H() {
    var F, x;
    if (!U()) return null;
    const N = t.primaryTool === "mask" ? "mask" : "paint", le = N === "mask" ? t.maskTool : t.paintTool, b = ce(le), y = Fn[b] || Fn[Er], I = Number(t.brushSizes[b] ?? 10), v = Math.max(1, I) * Math.max(0.1, Number(y.sizeScale ?? 1)), V = Math.max(3, v * 0.5), L = N === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(t.paintColor), J = N === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(L.a ?? 1) * 0.3), 0.16, 0.52), O = N === "mask" ? 0.95 : le === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(L.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: N,
      toolKind: le,
      preset: y,
      radius: V,
      fillStyle: mr(L, J),
      strokeStyle: mr(L, O),
      x: Number(((F = t.pointerPos) == null ? void 0 : F.x) || 0),
      y: Number(((x = t.pointerPos) == null ? void 0 : x.y) || 0),
      hotspotX: V,
      hotspotY: V
    };
  }
  function A() {
    var R, Z, me;
    const N = H();
    if (!r) return;
    if (!N) {
      r.style.display = "none";
      return;
    }
    let le = N.radius * 2, b = N.radius * 2, y = "999px", I = 0, v = N.fillStyle, V = "1px solid rgba(222, 222, 222, 0.72)", L = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const J = "rgba(222, 222, 222, 0.72)", O = "rgba(52, 52, 52, 0.72)";
    let F = Number(N.hotspotX ?? le * 0.5), x = Number(N.hotspotY ?? b * 0.5);
    if (N.toolKind === "lasso_fill")
      le = ll, b = ll, y = "0", V = "0", L = "none", F = oN, x = sN, v = fN(N.fillStyle, O, J);
    else if (N.layerKind === "mask")
      v = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (N.toolKind === "marker") {
      const ue = Math.max(1, Number(((R = N.preset) == null ? void 0 : R.aspect) ?? 1));
      le = Math.max(10, N.radius * 2 * ue), b = Math.max(6, N.radius * 2), y = `${Math.min(6, b * 0.42)}px`, I = Number(((me = (Z = N.preset) == null ? void 0 : Z.angle) == null ? void 0 : me.value) || 0) * Oi;
    } else N.toolKind === "brush" ? v = `radial-gradient(circle at 50% 50%, ${N.strokeStyle} 0%, ${N.fillStyle} 45%, rgba(0,0,0,0) 100%)` : N.toolKind === "eraser" && (v = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = y, r.style.border = V, r.style.boxShadow = L, r.style.background = v, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(N.x - F)}px, ${Math.round(N.y - x)}px) rotate(${I}deg)`;
  }
  function j() {
    var be;
    if (!n || !i) return;
    const N = t.primaryTool === "mask" ? "mask" : "paint", le = N === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const b = ce(le), y = Fn[b] || Fn[Er], I = Number(t.brushSizes[b] ?? 10), v = Math.max(1, I) * Math.max(0.1, Number(y.sizeScale ?? 1)), V = Math.max(6, v * 0.5), L = le === "eraser", J = N === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : L ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(t.paintColor), O = N === "mask" ? mr(J, 0.22) : L ? "rgba(255,255,255,0.14)" : mr(J, Ie(Math.max(0.18, Number(J.a ?? 1) * 0.34), 0.18, 0.56)), F = N === "mask" ? mr(J, 0.96) : L ? "rgba(255,255,255,0.72)" : mr(J, Ie(Math.max(0.56, Number(J.a ?? 1) * 0.96), 0.56, 1));
    let x = V * 2, R = V * 2, Z = "999px", me = 0, ue = O;
    const ve = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (N === "mask")
      ue = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const Q = Math.max(1, Number((y == null ? void 0 : y.aspect) ?? 1));
      x = Math.max(16, V * 2 * Q), R = Math.max(10, V * 2), Z = `${Math.min(8, R * 0.42)}px`, me = Number(((be = y == null ? void 0 : y.angle) == null ? void 0 : be.value) || 0) * Oi;
    } else le === "brush" ? ue = `radial-gradient(circle at 50% 50%, ${F} 0%, ${O} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (x = Math.max(18, V * 1.8), R = x, ue = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${F} 43%, ${F} 58%, rgba(0,0,0,0) 59%)`) : L && (ue = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(x)}px`, i.style.height = `${Math.round(R)}px`, i.style.borderRadius = Z, i.style.background = ue, i.style.border = `1px solid ${ve}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${me}deg)`, G && (clearTimeout(G), G = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function T() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), G && clearTimeout(G), G = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), G = 0;
    }, 180));
  }
  function Y(N, le, b, y) {
    const I = ce(le), v = Fn[I] || Fn[Er], V = t.brushSizes[I] ?? 10, L = Math.max(1, V) * Math.max(0.1, v.sizeScale ?? 1), J = fe(y, L), O = b.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), F = {
      id: Zi(N),
      actionGroupId: Zi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: N,
      toolKind: le,
      size: L,
      createdAt: Date.now(),
      color: N === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: J.radiusModel,
      radiusValue: J.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: O.map((x) => ({ ...x })),
        points: O.map((x) => ({ ...x }))
      }
    };
    return vp(F, v), t.mode, Number(v.aspect ?? 1), Number(F.aspect ?? 1), String(F.stampKind || ""), Number(F.size || 0), String(F.radiusModel || ""), Number(F.radiusValue || 0), { ...F.targetSpace }, F;
  }
  function pe(N, le, b, y) {
    const I = b.map((J) => ({
      ...J,
      t: Number((J == null ? void 0 : J.t) || 0),
      widthScale: Number.isFinite(Number(J == null ? void 0 : J.widthScale)) ? Math.max(0, Number(J.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(J == null ? void 0 : J.pressureLike)) ? Math.max(0, Number(J.pressureLike)) : 1
    })), v = ce(le), V = Fn[v] || Fn[Er], L = {
      id: Zi(N),
      actionGroupId: Zi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: N,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: N === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: I.map((J) => ({ ...J }))
      }
    };
    return vp(L, V), t.mode, Number(V.aspect ?? 1), Number(L.aspect ?? 1), String(L.stampKind || ""), { ...L.targetSpace }, L;
  }
  function ae(N) {
    const le = o.painting || (o.painting = yo(null)), b = le[N] || (le[N] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function K(N, le, b = performance.now()) {
    let y;
    if (t.mode === "frame") {
      const O = f();
      if (!O || (y = X(le, O, b), !y)) return !1;
    } else
      y = C(le, b);
    if (!y) return !1;
    const I = N.stroke.geometry.rawPoints || N.stroke.geometry.points, v = N.stroke.geometry.points, V = I[I.length - 1];
    if (V) {
      const O = Math.abs(Number(y.u ?? y.x ?? 0) - Number(V.u ?? V.x ?? 0)), F = Math.abs(Number(y.v ?? y.y ?? 0) - Number(V.v ?? V.y ?? 0));
      if (O < 15e-4 && F < 15e-4) return !1;
    }
    const L = {
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    I.push({ ...L }), v.push({ ...L });
    const J = g(N);
    if (J) {
      const O = t.paintEngine.ensureTarget(J);
      t.paintEngine.appendStrokePoint(O, Number(L.u ?? 0), Number(L.v ?? 0), N.stroke);
    }
    return !0;
  }
  function k(N, le, b = performance.now()) {
    var V, L;
    let y;
    if (t.mode === "frame") {
      const J = f();
      if (!J) return !1;
      y = X(le, J, b);
    } else
      y = C(le, b);
    const I = (L = (V = N == null ? void 0 : N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.points;
    if (!y || !Array.isArray(I)) return !1;
    const v = I[I.length - 1];
    if (v) {
      const J = Math.abs(Number(y.u ?? y.x ?? 0) - Number(v.u ?? v.x ?? 0)), O = Math.abs(Number(y.v ?? y.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (J < 15e-4 && O < 15e-4) return !1;
    }
    return I.push({
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function re(N) {
    var Q, ge, B, p, P;
    const le = (N == null ? void 0 : N.stroke) || null;
    if (!le || (N == null ? void 0 : N.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    te();
    const b = g(), y = c(b.width, b.height);
    if (!$(y, le, { w: b.width, h: b.height })) return !1;
    const I = ((ge = (Q = y.ctx) == null ? void 0 : Q.getImageData(0, 0, b.width, b.height)) == null ? void 0 : ge.data) || null;
    if (!I) return !1;
    const v = new Map(m().map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), S ? { ...S } : null])), V = [], L = [], J = [...h().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== "paint")];
    let O = !1, F = _().reduce((S, M) => Math.max(S, Number((M == null ? void 0 : M.z_index) || 0)), -1) + 1;
    function x(S, M, W, ye = 8) {
      let D = M, ie = W, Ne = -1, xe = -1;
      for (let Pe = 0; Pe < W; Pe += 1)
        for (let Ce = 0; Ce < M; Ce += 1)
          S[(Pe * M + Ce) * 4 + 3] <= ye || (Ce < D && (D = Ce), Pe < ie && (ie = Pe), Ce > Ne && (Ne = Ce), Pe > xe && (xe = Pe));
      return Ne < D || xe < ie ? null : { minX: D, minY: ie, maxX: Ne, maxY: xe };
    }
    const R = x(I, b.width, b.height, 8);
    if (!R) return !1;
    function Z(S, M) {
      return !S || !M ? !1 : !(S.maxX < M.minX || M.maxX < S.minX || S.maxY < M.minY || M.maxY < S.minY);
    }
    function me(S, M) {
      const W = d((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "", "paint", M);
      if (!W) return null;
      const ye = W.centerUv.u - W.halfW, D = W.centerUv.u + W.halfW, ie = W.centerUv.v - W.halfH, Ne = W.centerUv.v + W.halfH, xe = b.width, Pe = b.height;
      return {
        minX: Math.floor((ye % 1 + 1) % 1 * xe),
        maxX: Math.ceil((D % 1 + 1) % 1 * xe),
        minY: Math.floor(Ie(ie, 0, 1) * Pe),
        maxY: Math.ceil(Ie(Ne, 0, 1) * Pe),
        wraps: D - ye >= 1 || ye < 0 || D > 1
      };
    }
    function ue(S) {
      const M = (S == null ? void 0 : S.bbox) || null;
      if (!M) return null;
      const W = (S == null ? void 0 : S.transform) || {}, ye = b.width, D = b.height, ie = Number(M.u0 || 0) + Number(W.du || 0), Ne = Number(M.u1 || 0) + Number(W.du || 0), xe = Number(M.v0 || 0) + Number(W.dv || 0), Pe = Number(M.v1 || 0) + Number(W.dv || 0);
      return {
        minX: Math.floor((ie % 1 + 1) % 1 * ye),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * ye),
        minY: Math.floor(Ie(xe, 0, 1) * D),
        maxY: Math.ceil(Ie(Pe, 0, 1) * D),
        wraps: Ne - ie >= 1 || ie < 0 || Ne > 1
      };
    }
    function ve(S) {
      return S ? S.wraps ? Z(R, { minX: 0, maxX: S.maxX, minY: S.minY, maxY: S.maxY }) || Z(R, { minX: S.minX, maxX: b.width - 1, minY: S.minY, maxY: S.maxY }) : Z(R, S) : !0;
    }
    function Se(S) {
      if (!S) return { touched: !1, canvas: null };
      const M = c(b.width, b.height, { readback: !0 });
      M.ctx.drawImage(S, 0, 0);
      const W = M.ctx.getImageData(0, 0, b.width, b.height);
      M.ctx.save(), M.ctx.globalCompositeOperation = "destination-out", M.ctx.drawImage(y.canvas, 0, 0), M.ctx.restore();
      const ye = M.ctx.getImageData(0, 0, b.width, b.height);
      for (let D = 0; D < b.width * b.height; D += 1) {
        if (I[D * 4 + 3] <= 8) continue;
        const Ne = W.data[D * 4 + 3], xe = ye.data[D * 4 + 3];
        if (Ne > xe)
          return { touched: !0, canvas: M.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function be(S, M, W) {
      const ye = Number(W == null ? void 0 : W.z_index), D = l(S, M, W).map((ie, Ne) => ({
        ...ie,
        z_index: Number.isFinite(ye) ? ye + Ne * 1e-3 : F + Ne * 1e-3
      }));
      return D.length && (F = Math.max(F, ...D.map((ie) => Number((ie == null ? void 0 : ie.z_index) || 0))) + 1), D;
    }
    for (const S of m()) {
      const M = String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim();
      if (!M) continue;
      const W = w(M, "paint");
      if (!ve(me(S, W))) {
        L.push(S), V.push(...W);
        continue;
      }
      const ye = ((p = (B = t.paintEngine) == null ? void 0 : B.getGroupTarget) == null ? void 0 : p.call(B, M)) || null, D = ((P = ye == null ? void 0 : ye.committedPaint) == null ? void 0 : P.canvas) || null;
      if (!D) {
        L.push(S), V.push(...W);
        continue;
      }
      const ie = Se(D);
      if (!ie.touched || !ie.canvas) {
        L.push(S), V.push(...W);
        continue;
      }
      O = !0;
      const Ne = be(ie.canvas, "paint", v.get(M) || S || {});
      J.push(...Ne);
    }
    for (const S of h().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") === "paint")) {
      if (!ve(ue(S))) {
        J.push(S);
        continue;
      }
      const M = s(S, null);
      if (!M) {
        J.push(S);
        continue;
      }
      const W = Se(M);
      if (!W.touched || !W.canvas) {
        J.push(S);
        continue;
      }
      O = !0;
      const ye = be(W.canvas, "paint", S);
      J.push(...ye);
    }
    return O ? (o.painting.paint.strokes = V, o.painting.groups = L.sort((S, M) => Number((S == null ? void 0 : S.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), o.painting.raster_objects = J.sort((S, M) => Number((S == null ? void 0 : S.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function de(N) {
    var V, L, J, O, F;
    if ((((L = (V = N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.rawPoints) || ((O = (J = N.stroke) == null ? void 0 : J.geometry) == null ? void 0 : O.points) || []).length >= 1) {
      _e(N);
      const x = g(N);
      x && (String(((F = N.stroke) == null ? void 0 : F.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(x) : t.paintEngine.commitActiveStroke(N.stroke, x)), N._hasCommittedSegments = !0;
    }
    const b = N.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, I = Y(N.layerKind, b.toolKind, [], y);
    I.actionGroupId = b.actionGroupId, N.stroke = I;
    const v = g(N);
    v && t.paintEngine.beginStroke(I, v);
  }
  function we(N) {
    var V, L;
    if ((((L = (V = N.stroke) == null ? void 0 : V.geometry) == null ? void 0 : L.points) || []).length >= 3) {
      _e(N);
      const J = g(N);
      J && t.paintEngine.commitActiveStroke(N.stroke, J), N._hasCommittedSegments = !0;
    }
    const b = N.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, I = pe(N.layerKind, b.toolKind, [], y);
    I.actionGroupId = b.actionGroupId, N.stroke = I;
    const v = g(N);
    v && t.paintEngine.beginStroke(I, v);
  }
  function _e(N) {
    var v, V, L, J;
    const le = ((v = N == null ? void 0 : N.stroke) == null ? void 0 : v.geometry) || null;
    if (!le) return !1;
    const b = String(((V = N == null ? void 0 : N.stroke) == null ? void 0 : V.toolKind) || "pen");
    if (N.layerKind === "paint" && b === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = ee(le.rawPoints || le.points || [], N.stroke.targetSpace, !0)), re(N);
    const y = N.layerKind === "paint" && b !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (y && u((L = N.stroke) == null ? void 0 : L.actionGroupId), ae(N.layerKind).push(N.stroke), !0);
    const I = le.rawPoints || le.points || [];
    return I.length < 1 ? !1 : (le.processedPoints = ee(I, N.stroke.targetSpace, !0), y && u((J = N.stroke) == null ? void 0 : J.actionGroupId), ae(N.layerKind).push(N.stroke), !0);
  }
  return {
    connect(N) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: g,
        getDisplayListObjects: _,
        getPaintingGroupList: m,
        getRasterObjectList: h,
        getStrokeGroupStrokes: w,
        processFreehandPoints: ee,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: te,
        screenPosToErpPoint: C,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: z
      } = N);
    },
    isActiveLassoTool: he,
    supportsErpPainting: q,
    getBrushPresetIdForTool: ce,
    isPaintCursorEnabled: oe,
    isActivePaintCursorVisible: U,
    setPointerPos: E,
    syncPaintCursorElement: A,
    showPaintSizePreview: j,
    hidePaintSizePreview: T,
    buildFreehandStrokeRecord: Y,
    buildLassoFillStrokeRecord: pe,
    getPaintingLayerList: ae,
    appendPaintPoint: K,
    appendLassoPoint: k,
    _segmentFrameStroke: de,
    _segmentFrameLassoFill: we,
    commitPaintInteraction: _e
  };
}
function K2(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q;
  function fe(A) {
    var T;
    if (n && t.mode === "frame") {
      const Y = s(), pe = l(Y);
      if (!Y || !pe || !(Number((A == null ? void 0 : A.x) || 0) >= Number(pe.x || 0) && Number((A == null ? void 0 : A.x) || 0) <= Number(pe.x || 0) + Number(pe.w || 0) && Number((A == null ? void 0 : A.y) || 0) >= Number(pe.y || 0) && Number((A == null ? void 0 : A.y) || 0) <= Number(pe.y || 0) + Number(pe.h || 0))) return null;
      const K = G(A, Y, performance.now()), k = K ? o(K) : null;
      if (k)
        for (const de of a()) {
          if (!$(de)) continue;
          const we = q(de, k);
          if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
            const _e = z(de);
            if (_e != null && _e.visible) return { item: de, geom: _e };
          }
        }
      const re = c(!1).slice().sort((de, we) => Number((we == null ? void 0 : we.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0));
      for (const de of re) {
        if (de.type === "strokeGroup") {
          const N = f(X("paint", de.actionGroupId || de.id || ""));
          if (!N) continue;
          const le = z(N);
          if (!(le != null && le.visible)) continue;
          const b = Array.isArray(le.strokePaths) ? le.strokePaths : [];
          for (const y of b) {
            const I = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
            if (!I.length) continue;
            if (y.closed && I.length >= 3 && Jr(A, I)) return { item: N, geom: le };
            const v = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
            for (let V = 0; V < I.length - 1; V += 1)
              if (Pc(A, I[V], I[V + 1]) <= v * v) return { item: N, geom: le };
            if (I.length === 1 && Go(A, I[0]) <= v * v) return { item: N, geom: le };
          }
          continue;
        }
        if (de.type === "rasterObject") {
          const N = d(C(((T = de.item) == null ? void 0 : T.id) || de.id || ""));
          if (!N) continue;
          const le = z(N);
          if (g(N, le, A, K)) return { item: N, geom: le };
          continue;
        }
        const we = de.item;
        if (!we || !$(we) || !k) continue;
        const _e = q(we, k);
        if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
          const N = z(we);
          if (N != null && N.visible) return { item: we, geom: N };
        }
      }
      return null;
    }
    const j = [
      ...c(!1).slice().sort((Y, pe) => Number((pe == null ? void 0 : pe.z_index) || 0) - Number((Y == null ? void 0 : Y.z_index) || 0)).map((Y) => {
        var pe;
        return Y.type === "strokeGroup" ? f(X("paint", Y.actionGroupId || Y.id || "")) : Y.type === "rasterObject" ? d(C(((pe = Y.item) == null ? void 0 : pe.id) || Y.id || "")) : Y.item;
      }).filter(Boolean),
      ...n ? a().filter((Y) => ee(Y)) : []
    ];
    for (const Y of j) {
      if (te(Y)) {
        const ae = z(Y);
        if (!(ae != null && ae.visible)) continue;
        const K = Array.isArray(ae.strokePaths) ? ae.strokePaths : [];
        for (const k of K) {
          const re = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
          if (!re.length) continue;
          if (k.closed && re.length >= 3 && Jr(A, re)) return { item: Y, geom: ae };
          const de = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
          for (let we = 0; we < re.length - 1; we += 1)
            if (Pc(A, re[we], re[we + 1]) <= de * de) return { item: Y, geom: ae };
          if (re.length === 1 && Go(A, re[0]) <= de * de) return { item: Y, geom: ae };
        }
        continue;
      }
      if (w(Y)) {
        const ae = z(Y);
        if (!(ae != null && ae.visible)) continue;
        if (g(Y, ae, A)) return { item: Y, geom: ae };
        continue;
      }
      const pe = z(Y);
      if (pe.visible && Jr(A, pe.corners))
        return { item: Y, geom: pe };
    }
    return null;
  }
  function ce(A, j, T = null) {
    if (!A || !A.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if ($(T)) return lu(A, j);
    if (A.kind === "strokeGroup") {
      const Y = A.corners.findIndex((ae) => Go(ae, j) <= 121);
      if (Y >= 0) {
        const ae = A.corners[Y], K = ae.x - A.center.x, k = ae.y - A.center.y, re = K * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: Y, cursor: re };
      }
      const pe = Array.isArray(A.strokePaths) ? A.strokePaths : [];
      for (const ae of pe) {
        const K = Array.isArray(ae == null ? void 0 : ae.points) ? ae.points : [];
        if (ae.closed && K.length >= 3 && Jr(j, K)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((ae == null ? void 0 : ae.lineWidth) || 0) * 0.5 + 6);
        for (let re = 0; re < K.length - 1; re += 1)
          if (Pc(j, K[re], K[re + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Jr(j, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (A.kind === "rasterObject") {
      const Y = A.corners.findIndex((pe) => Go(pe, j) <= 121);
      if (Y >= 0) {
        const pe = A.corners[Y], ae = pe.x - A.center.x, K = pe.y - A.center.y, k = ae * K >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: Y, cursor: k };
      }
      return Jr(j, A.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return e_(A, j, {
      edges: i === "cutout" || ee(T),
      resize: !(ee(T) && m()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function oe(A, j) {
    return {
      x0: Math.min(Number((A == null ? void 0 : A.x) || 0), Number((j == null ? void 0 : j.x) || 0)),
      y0: Math.min(Number((A == null ? void 0 : A.y) || 0), Number((j == null ? void 0 : j.y) || 0)),
      x1: Math.max(Number((A == null ? void 0 : A.x) || 0), Number((j == null ? void 0 : j.x) || 0)),
      y1: Math.max(Number((A == null ? void 0 : A.y) || 0), Number((j == null ? void 0 : j.y) || 0))
    };
  }
  function U(A, j) {
    return !!A && !!j && Number(j.x) >= Number(A.x0) && Number(j.x) <= Number(A.x1) && Number(j.y) >= Number(A.y0) && Number(j.y) <= Number(A.y1);
  }
  function E(A, j) {
    if (!A || !(j != null && j.visible) || !Array.isArray(j.corners)) return !1;
    if (j.corners.some((pe) => U(A, pe))) return !0;
    const T = (Number(A.x0) + Number(A.x1)) * 0.5, Y = (Number(A.y0) + Number(A.y1)) * 0.5;
    return !!Jr({ x: T, y: Y }, j.corners);
  }
  function H(A) {
    if (he(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ne("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ne("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ne("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ne("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ne("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ne(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ne("grabbing") : ne("default");
      return;
    }
    if (_()) {
      ne("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ne(tN);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ne("default");
        return;
      }
      ne("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ne("default");
      return;
    }
    if (t.gizmoAxis) {
      ne("grab");
      return;
    }
    const j = u(), T = j ? z(j) : null, Y = j ? h(j) : !1, pe = Y ? { kind: "none", cursor: "default" } : ce(T, A, j);
    if (!Y && pe.kind !== "none") {
      ne(pe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && fe(A)) {
      ne("default");
      return;
    }
    ne(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(A) {
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
        isActivePaintCursorVisible: _,
        isErpCamera: m,
        isItemLocked: h,
        isRasterObjectItem: w,
        isShotItem: ee,
        isStickerItem: $,
        isStrokeGroupItem: te,
        makeRasterObjectSelectionId: C,
        makeStrokeGroupSelectionId: X,
        objectGeom: z,
        screenPosToFrameAsErpPoint: G,
        setCanvasCursor: ne,
        syncPaintCursorElement: he,
        worldDirToFrameLocalPoint: q
      } = A);
    },
    hitObjectAt: fe,
    handleHit: ce,
    rectFromPoints: oe,
    rectIntersectsGeom: E,
    updateCursor: H
  };
}
function W2(e) {
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
  let f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce = !1;
  function oe() {
    return ce;
  }
  function U() {
    if (!o) return;
    if (ce = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || te() && z()) {
      const K = E();
      ce = K.visible, H(K);
      return;
    }
    const T = w(), Y = ee();
    if (!T && Y.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const pe = $(), ae = n2({
      type: d,
      selected: T,
      selectedItems: Y,
      selectedKind: pe,
      geom: Y.length > 1 ? h(Y) : fe(T),
      allLocked: f(Y),
      anyLocked: Y.some((K) => G(K)),
      selectedLocked: G(T),
      activeAspect: ne(T) && C() ? ho : Dr(T),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: X,
      isStickerHidden: q,
      canRestoreSelectedToInitial: g,
      iconSet: ze,
      cameraShot: t,
      coverage: a.coverage
    });
    H(ae);
  }
  function E() {
    const T = he() && !n.interaction ? m().space : null;
    if (!(T != null && T.gizmo)) return { visible: !1 };
    const Y = _(), pe = T.stickers.find((re) => re.id === n.worldSelectedId), K = (pe ? hd(pe) : [T.gizmo.transform.position]).map((re) => fs(Y, re, r.width, r.height)).filter(Boolean), k = wS(Y, T.gizmo.transform.position, T.gizmo.mode, r.width, r.height);
    return r2({ corners: K, gizmoBox: k, gizmoMode: T.gizmo.mode, camera: te() });
  }
  function H(T) {
    var k, re;
    if (!T.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const Y = (de, we) => i2(T.anchor, de, we, r.width, r.height), pe = Math.max(1, Number(((k = n.menuSize) == null ? void 0 : k.w) || 220)), ae = Math.max(1, Number(((re = n.menuSize) == null ? void 0 : re.h) || 40)), K = Y(pe, ae);
    if (!K) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: K.left,
      top: K.top,
      items: T.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const de = o.getBoundingClientRect(), we = Math.round(Number((de == null ? void 0 : de.width) || 0)) || 220, _e = Math.round(Number((de == null ? void 0 : de.height) || 0)) || 40;
      n.menuSize = { w: we, h: _e, measured: !0 };
      const N = Y(we, _e);
      N && (u.selectionMenu.left = N.left, u.selectionMenu.top = N.top);
    });
  }
  function A() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function j(T) {
    if (!c || !T || !T.isConnected) return;
    const Y = String(T.getAttribute("data-tip") || "").trim();
    if (!Y) return;
    u.tooltip.text = Y, u.tooltip.visible = !0;
    const pe = T;
    i.requestFrame(() => {
      var v, V;
      if (l.target !== pe || !c || !(pe != null && pe.isConnected)) return;
      const ae = s.getBoundingClientRect(), K = pe.getBoundingClientRect(), k = 8, re = 12, de = Math.round(Number(((v = c.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, we = Math.round(Number(((V = c.getBoundingClientRect()) == null ? void 0 : V.height) || 0)) || 24, _e = !!pe.closest(".pano-floating-left"), N = !!pe.closest(".pano-frame-rail"), le = !!pe.closest(".pano-paint-footer") || !!pe.closest(".pano-paint-color-float");
      let b = "", y = K.left - ae.left + K.width * 0.5 - de * 0.5, I = K.top - ae.top - we - re;
      if (pe.closest(".pano-floating-top") && (I = K.bottom - ae.top + re), _e)
        b = "tool-rail", y = K.right - ae.left + 10, I = K.top - ae.top + K.height * 0.5 - we * 0.5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Ie(I, k, Math.max(k, ae.height - we - k));
      else if (N)
        b = "frame-rail", y = K.left - ae.left - de - 10, I = K.top - ae.top + K.height * 0.5 - we * 0.5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Ie(I, k, Math.max(k, ae.height - we - k));
      else if (le) {
        b = "footer";
        const L = pe.closest(".pano-paint-footer"), J = L ? L.getBoundingClientRect() : K;
        y = J.left - ae.left + J.width * 0.5 - de * 0.5, I = J.bottom - ae.top + 5, y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Math.max(k, I);
      }
      y = Ie(y, k, Math.max(k, ae.width - de - k)), I = Math.max(k, I), u.tooltip.left = y, u.tooltip.top = I, u.tooltip.variant = b, u.tooltip.visible = !0;
    });
  }
  return {
    connect(T) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: g,
        currentSpaceCamera: _,
        editorViewInput: m,
        getMultiSelectionGeom: h,
        getSelected: w,
        getSelectedItems: ee,
        getSelectedKind: $,
        isCameraSelected: te,
        isErpCamera: C,
        isExternalSticker: X,
        isFreeSpaceView: z,
        isItemLocked: G,
        isShotItem: ne,
        isSpaceView: he,
        isStickerHidden: q,
        objectGeom: fe
      } = T);
    },
    isWorldMenuShown: oe,
    updateSelectionMenu: U,
    hideTooltip: A,
    showTooltipFor: j
  };
}
function U2(e) {
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
    type: _,
    viewController: m
  } = e;
  let h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e, N, le, b, y, I, v, V, L, J, O, F, x, R, Z, me, ue, ve, Se, be, Q, ge, B, p, P, S, M, W, ye, D, ie, Ne, xe, Pe, Ce, Le, je, Ke, $e, He, se, Fe, Ae, Re, Ye, Ge, We, ht, bt, Tt, Nt, Mn, qe, sn, Kt, ci, Wr, ui, on, yn, Ur, kr, cr, wo, _o, xo, ko, Ms, Ps, Mo, Ot, Pn, Qn, Li, Vn, Ns, As, Cs, Br = null;
  function Rl(Oe) {
    g.selection && (g.selection = null, Ps());
    const Ee = Re(Oe);
    Br = Ee, Nt(Ee, !0), ce(), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0;
    const ke = B(), vt = ge(), lt = ke || vt ? h_(Li(), Oe) : null;
    if (vt && lt) {
      Oe.preventDefault(), lt === "look" ? yn(Ee, Oe.pointerId) : on(lt, Ee, Oe.pointerId);
      return;
    }
    if (lt === "look") {
      Oe.preventDefault();
      const Xe = Ye(Oe);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, m.startDrag(Xe.x, Xe.y, Oe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (lt) {
      Oe.preventDefault(), Ur(lt, Ee, Oe.pointerId);
      return;
    }
    if ((ke || vt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const Xe = de();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Ee,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Ee : Ye(Oe);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, m.startDrag(Xe.x, Xe.y, Oe.pointerId, performance.now());
      }
      Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (Oe.button !== 0) return;
    if (n.mode === "frame" && (Oe.altKey || Oe.shiftKey) && !a) {
      const Xe = de(), Ue = b(Xe);
      if (!Xe || Xe.locked === !0 || !Ue) return;
      const Ze = _g({
        frame: Ue,
        point: Ee,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: Oe.shiftKey,
        altKey: Oe.altKey,
        allowAlt: !0
      });
      if (!Ze) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Ze.center,
        lastAngle: Ze.lastAngle,
        accumulatedRad: Ze.accumulatedRad,
        rollGesture: Ze,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Ze.source === "alt",
        source: Ze.source
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), ko(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      yn(Ee, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && No(Oe, Ee);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (cr() || wo())) {
      if (!Ce()) return;
      kr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Ze = n.mode === "frame" && wo() ? de() : null, Jt = { kind: "ERP_GLOBAL" }, xt = Ze ? We(Ee, Ze, performance.now()) : Ge(Ee, performance.now());
      if (!xt) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: Zi("live"),
        stroke: Ue === "lasso_fill" ? he(Xe, Ue, [xt], Jt) : ne(Xe, Ue, [xt], Jt)
      }, be();
      const Mr = we(n.interaction);
      if (Mr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Mr), n.interaction.kind === "paint_stroke") {
          const Ri = n.paintEngine.ensureTarget(Mr), Vi = Number((xt == null ? void 0 : xt.u) ?? (xt == null ? void 0 : xt.x) ?? 0), $i = Number((xt == null ? void 0 : xt.v) ?? (xt == null ? void 0 : xt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Ri, Vi, $i, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Mr);
      Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae();
      return;
    }
    const ut = x(), Je = F(), et = ut.length > 1 ? I(ut) : Je ? Pe(Je) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && q() && B() && ui(Oe, Ee) || n.primaryTool === "cursor" && c && W() && Vl(Oe, Ee)) return;
    if (ut.length > 1 && (et != null && et.visible)) {
      if ((ut.some((Ue) => p(Ue)) ? { kind: "none" } : ue(et, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: ut.map((Ue) => Ue),
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: ut.filter((Ue) => ye(Ue)).map((Ue) => ({
            id: String(Ue.id || ""),
            yaw_deg: Number(Ke(Ue).yaw_deg || 0),
            pitch_deg: Number(Ke(Ue).pitch_deg || 0),
            center: (() => {
              var Jt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Jt = Ze.center) == null ? void 0 : Jt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })()
          })),
          strokeSnapshots: ut.filter((Ue) => D(Ue)).map((Ue) => ({
            id: String(Ue.actionGroupId || Ue.id || ""),
            layerKind: String(Ue.layerKind || "paint"),
            snapshot: un(Z(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: un(pe(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var Jt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Jt = Ze.center) == null ? void 0 : Jt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: R(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: ut.filter((Ue) => P(Ue)).map((Ue) => ({
            id: Le(Ue.rasterObjectId || Ue.id || ""),
            snapshot: un(L().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === Le(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var Jt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Jt = Ze.center) == null ? void 0 : Jt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: V(Ue)
          }))
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = p(Je) ? { kind: "none" } : ue(et, Ee, Je);
      if (Xe.kind === "scale") {
        n.interaction = D(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : P(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(L().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Le(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = D(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x),
          snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ke(Je).rot_deg || Ke(Je).roll_deg || 0),
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x)
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (D(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = de();
            return Ze ? We(Ee, Ze, performance.now()) : null;
          })() : Ge(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ue,
            snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: un(pe(Je.actionGroupId, Je.layerKind))
          }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (P(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = de();
            return Ze ? We(Ee, Ze, performance.now()) : null;
          })() : Ge(Ee, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ue,
            snapshot: un(L().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === Le(Je.rasterObjectId || Je.id || "")))
          }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y }
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
    }
    const nt = Se(Ee);
    if (nt) {
      const Xe = n.selectedId !== nt.item.id;
      if (Xe && n.selectedId && ($e(), H()), Mn(nt.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && Qn(), Pn(), Ae(), p(nt.item)) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: D(nt.item) ? "move_stroke_group" : P(nt.item) ? "move_raster_object" : "move",
        item: nt.item,
        offset: { x: Ee.x - nt.geom.center.x, y: Ee.y - nt.geom.center.y },
        startUv: D(nt.item) || P(nt.item) ? n.mode === "frame" ? (() => {
          const Ue = de();
          return Ue ? We(Ee, Ue, performance.now()) : null;
        })() : Ge(Ee, performance.now()) : null,
        snapshot: D(nt.item) ? un(Z(nt.item.actionGroupId, nt.item.layerKind)) : P(nt.item) ? un(L().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Le(nt.item.rasterObjectId || nt.item.id || ""))) : null,
        frameSnapshot: D(nt.item) ? un(pe(nt.item.actionGroupId, nt.item.layerKind)) : null
      }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const er = !!n.selectedId;
    er && ($e(), H()), oe(), er && Qn(), Pn(), Ae(), n.mode === "pano" && No(Oe, Ee);
  }
  function Yr(Oe, Ee) {
    return i.gizmoPointer(Oe, A(), Ee.x, Ee.y, t.width, t.height);
  }
  function Vl(Oe, Ee) {
    var et;
    const ke = (et = Y().space) == null ? void 0 : et.gizmo;
    if (ke && Yr("hover", Ee) !== null && Yr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: Ei(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Ot(Ee), !0;
    const vt = x(), lt = F(), ut = vt.length > 1 ? vt.some((nt) => p(nt)) ? "none" : ue(I(vt), Ee).kind : lt && !p(lt) ? ue(Pe(lt), Ee, lt).kind : "none";
    if (ut !== "none" && ut !== "move") return !1;
    const Je = i.pickSticker(A(), Ee.x, Ee.y, t.width, t.height);
    return u.stickers.some((nt) => nt.id === Je && nt.placement === "world") ? (n.worldSelectedId !== Je && (n.selectedId && ($e(), H()), bt(Je), Qn(), Pn(), xo(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Po(Oe) {
    var vt;
    const ke = !!(n.worldSelectedId || Q()) && n.primaryTool === "cursor" && W() && !!((vt = Y().space) != null && vt.gizmo) ? Yr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function Is(Oe, Ee) {
    const ke = Yr("move", Ee);
    if (ke && Oe.camera) {
      for (const [lt, ut] of Object.entries(Vf(Oe.mode, Oe.base, Oe.start, ke))) hn(u.camera, lt, n.frame, ut);
      _o(), Oe.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = u.stickers.find((lt) => lt.id === Oe.id);
    !ke || !vt || (Uv(vt, n.frame, Vf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, ie(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Es(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (Yr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && ($e(), U(), Qn())), Ot(n.pointerPos), Ae();
  }
  function No(Oe, Ee) {
    if (B()) {
      const vt = Li().emptyLeft;
      vt && Ur(vt, Ee, Oe.pointerId);
      return;
    }
    const ke = Ye(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, m.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Oe.pointerId);
  }
  function Os(Oe, Ee) {
    if (!f || !je.playing || (je.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const lt = ae();
      lt && (Oe.pivot = re(lt, k(lt), Ee));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const lt = u.stickers.find((ut) => ut.id === Oe.id);
      Oe.camera ? Oe.base = j() : lt && (Oe.base = Ei(lt, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const lt = I(Oe.items);
      if (!(lt != null && lt.visible)) return;
      Oe.offset = { x: Ee.x - lt.center.x, y: Ee.y - lt.center.y }, Oe.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const ut of Oe.stickerSnapshots) {
        const Je = Oe.items.find((nt) => String((nt == null ? void 0 : nt.id) || "") === ut.id), et = Je ? Pe(Je) : null;
        et != null && et.visible && (ut.yaw_deg = Number(Ke(Je).yaw_deg || 0), ut.pitch_deg = Number(Ke(Je).pitch_deg || 0), ut.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const ke = Pe(Oe.item);
    if (!(ke != null && ke.visible)) return;
    const vt = Ke(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Ee.x - ke.center.x, y: Ee.y - ke.center.y };
      return;
    }
    if (Oe.center = ke.center, Oe.kind === "rotate") {
      Oe.startRot = Number(vt.rot_deg || vt.roll_deg || 0), Oe.startAng = Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)), Oe.startHFOV = Number(vt.hFOV_deg || 20), Oe.startVFOV = Number(vt.vFOV_deg || 20);
  }
  function Fs(Oe) {
    var vt, lt, ut, Je, et, nt, er, Xe, Ue, Ze, Jt, xt, Mr, Ri, Vi, $i, Vs, $s, zs, js, Hs, Gs;
    const Ee = Re(Oe);
    if (Nt(Ee, !0), !n.interaction) {
      Po(Ee), Ot(Ee);
      return;
    }
    Ot(Ee);
    const ke = n.interaction;
    if (Br && (Ee.x !== Br.x || Ee.y !== Br.y)) {
      const ct = Br;
      Br = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Os(ke, ct);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        Is(ke, Ee);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        ct.forEach((yt) => {
          const wt = Re(yt);
          if (n.mode === "frame") {
            const Nn = de(), qt = Nn ? b(Nn) : null;
            if (qt) {
              const An = (wt.x - qt.x) / Math.max(1, qt.w), Rt = (wt.y - qt.y) / Math.max(1, qt.h);
              if (!(An >= 0 && An <= 1 && Rt >= 0 && Rt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, w(ke));
            }
          }
          $(ke, wt, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        if (ct.forEach((yt) => {
          const wt = Re(yt);
          if (n.mode === "frame") {
            const Nn = de(), qt = Nn ? b(Nn) : null;
            if (qt) {
              const An = (wt.x - qt.x) / Math.max(1, qt.w), Rt = (wt.y - qt.y) / Math.max(1, qt.h);
              if (!(An >= 0 && An <= 1 && Rt >= 0 && Rt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, h(ke));
            }
          }
          ee(ke, wt, performance.now()) && (pt = !0);
        }), pt) {
          const yt = we(ke);
          yt && n.paintEngine.updateActiveStroke(ke.stroke, yt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const ct = performance.now(), pt = n.mode === "unwrap" ? Ee : Ye(Oe);
        m.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), ke.lastTs = ct, ke.last = pt, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        T(ke, Ee);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const ct = ci();
        sn(ke.kind === "space_pan" ? Am(ct, Ee.x - ke.last.x, Ee.y - ke.last.y, t.width, t.height, ke.depth) : Nm(ct, Ee.x - ke.last.x, Ee.y - ke.last.y, t.height, ke.pivot)), ke.last = Ee;
        return;
      }
      if (ke.kind === "pan_frame") {
        const ct = le(ke.shot);
        if (!ct || !ke.shot) return;
        const pt = Ee.x - ke.last.x, yt = Ee.y - ke.last.y, wt = kg(ke.shot, {
          dx: pt,
          dy: yt,
          focalPx: ct.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((lt = u.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        ke.shot.yaw_deg = wt.yaw_deg, ke.shot.pitch_deg = wt.pitch_deg, ke.changed = ke.changed || Math.abs(pt) > 0 || Math.abs(yt) > 0, ke.last = Ee, Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        X(ke, Ee, Oe);
        return;
      }
      if (ke.kind === "move") {
        const ct = Ee.x - ke.offset.x, pt = Ee.y - ke.offset.y;
        if (n.mode === "frame" && d) {
          const yt = de(), wt = b(yt);
          if (!yt || !wt) return;
          const Nn = {
            x: Ie((ct - wt.x) / Math.max(1, wt.w), 0, 1),
            y: Ie((pt - wt.y) / Math.max(1, wt.h), 0, 1)
          }, qt = K(yt, Nn);
          if (!qt) return;
          const An = oa(qt);
          Vn(ke.item, { yaw_deg: An.yaw, pitch_deg: An.pitch });
        } else if (n.mode === "unwrap") {
          const yt = me(), wt = Ie((ct - yt.x) / Math.max(yt.w, 1), 0, 1), Nn = Ie((pt - yt.y) / Math.max(yt.h, 1), 0, 1);
          Vn(ke.item, { yaw_deg: jt(wt * 360 - 180), pitch_deg: Ie(90 - Nn * 180, -90, 90) });
        } else {
          const yt = ht(ct, pt), wt = oa(yt);
          Vn(ke.item, { yaw_deg: wt.yaw, pitch_deg: wt.pitch });
        }
        ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const wt = de();
          return wt ? We(Ee, wt, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Kt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        z((ut = ke.item) == null ? void 0 : ut.actionGroupId, pt, yt, ke.snapshot, (Je = ke.item) == null ? void 0 : Je.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const wt = de();
          return wt ? We(Ee, wt, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Kt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        te(((et = ke.item) == null ? void 0 : et.rasterObjectId) || ((nt = ke.item) == null ? void 0 : nt.id) || "", pt, yt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        C(((er = ke.item) == null ? void 0 : er.rasterObjectId) || ((Xe = ke.item) == null ? void 0 : Xe.id) || "", pt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const ct = Ee.x - Number(((Ue = ke.offset) == null ? void 0 : Ue.x) || 0), pt = Ee.y - Number(((Ze = ke.offset) == null ? void 0 : Ze.y) || 0);
        let yt = !1, wt = !1, Nn = !1;
        const qt = ct - Number(((Jt = ke.startCenter) == null ? void 0 : Jt.x) || ct), An = pt - Number(((xt = ke.startCenter) == null ? void 0 : xt.y) || pt);
        for (const Rt of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const an = (_ === "cutout" ? _e() : y()).find((Dt) => String((Dt == null ? void 0 : Dt.id) || "") === String(Rt.id || ""));
          if (!an || !ye(an)) continue;
          const nn = {
            x: Number(((Mr = Rt.center) == null ? void 0 : Mr.x) || 0) + qt,
            y: Number(((Ri = Rt.center) == null ? void 0 : Ri.y) || 0) + An
          };
          if (n.mode === "frame" && d) {
            const Dt = de(), Ht = b(Dt);
            if (!Dt || !Ht) continue;
            const Cn = {
              x: Ie((nn.x - Ht.x) / Math.max(1, Ht.w), 0, 1),
              y: Ie((nn.y - Ht.y) / Math.max(1, Ht.h), 0, 1)
            }, zi = K(Dt, Cn);
            if (!zi) continue;
            const In = oa(zi);
            Vn(an, { yaw_deg: In.yaw, pitch_deg: In.pitch });
          } else if (n.mode === "unwrap") {
            const Dt = me(), Ht = Ie((nn.x - Dt.x) / Math.max(Dt.w, 1), 0, 1), Cn = Ie((nn.y - Dt.y) / Math.max(Dt.h, 1), 0, 1);
            Vn(an, { yaw_deg: jt(Ht * 360 - 180), pitch_deg: Ie(90 - Cn * 180, -90, 90) });
          } else {
            const Dt = ht(nn.x, nn.y), Ht = oa(Dt);
            Vn(an, { yaw_deg: Ht.yaw, pitch_deg: Ht.pitch });
          }
          yt = !0;
        }
        for (const Rt of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const an = {
            x: Number(((Vi = Rt.center) == null ? void 0 : Vi.x) || 0) + qt,
            y: Number((($i = Rt.center) == null ? void 0 : $i.y) || 0) + An
          }, nn = n.mode === "frame" ? (() => {
            const Ht = de();
            return Ht ? We(an, Ht, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Rt.centerUv || null;
          if (nn && Dt) {
            const Ht = Kt(Number(nn.u || 0), Number(Dt.u || 0)), Cn = Number(nn.v || 0) - Number(Dt.v || 0);
            z(Rt.id, Ht, Cn, Rt.snapshot, Rt.layerKind, Rt.frameSnapshot) && (yt = !0, wt = !0);
          }
        }
        for (const Rt of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const an = {
            x: Number(((Vs = Rt.center) == null ? void 0 : Vs.x) || 0) + qt,
            y: Number((($s = Rt.center) == null ? void 0 : $s.y) || 0) + An
          }, nn = n.mode === "frame" ? (() => {
            const Ht = de();
            return Ht ? We(an, Ht, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Rt.centerUv || null;
          if (nn && Dt) {
            const Ht = Kt(Number(nn.u || 0), Number(Dt.u || 0)), Cn = Number(nn.v || 0) - Number(Dt.v || 0);
            te(Rt.id, Ht, Cn, Rt.snapshot) && (yt = !0, Nn = !0);
          }
        }
        yt && (wt ? xe({ rebuildPaintEngine: !1 }) : Nn ? Ne() : ie(), Ae({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        G((zs = ke.item) == null ? void 0 : zs.actionGroupId, pt, 0, ke.snapshot, (js = ke.item) == null ? void 0 : js.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - Number(ke.startAng || 0)) * Oi;
        Oe.shiftKey && (ct = Math.round(ct / 45) * 45), G((Hs = ke.item) == null ? void 0 : Hs.actionGroupId, 1, ct, ke.snapshot, (Gs = ke.item) == null ? void 0 : Gs.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ee, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179), vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ye(ke.item) && ie(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let pt = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - ke.startAng) * Oi, yt = ke.startRot - pt;
        Oe.shiftKey && (yt = Math.round(yt / 45) * 45), Vn(ke.item, { [ye(ke.item) ? "rot_deg" : "roll_deg"]: yt }), ye(ke.item) && ie(), Ae({ localOnly: !0 });
      }
    }
  }
  function Ts() {
    var Ee, ke, vt, lt, ut, Je, et;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Ot(n.pointerPos), Pn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        Es(Oe);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        be();
        const nt = E(n.interaction), er = !!n.interaction._hasCommittedSegments;
        if (nt || er) {
          xe();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Ze = v().find((Jt) => String((Jt == null ? void 0 : Jt.actionGroupId) || "") === Xe);
            Ze && (Ze.frame = null);
          }
          const Ue = we(n.interaction);
          Ue && (nt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Fe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), $e(), H(), Qn(), Pn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = we(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((ut = n.interaction) == null ? void 0 : ut.kind) === "marquee_select") {
        const nt = He(n.interaction.start, n.interaction.current), Xe = [
          ..._ === "cutout" ? N().filter((Ue) => !M(Ue)) : [...y()],
          ...O(),
          ...J()
        ].filter((Ue) => se(nt, Pe(Ue)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), Qn(), Pn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && ($e(), U(), Qn());
      else if (n.interaction && n.interaction.kind !== "view") {
        let nt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (nt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (nt = !0), nt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : Ne()), $e(), H(), o.setDirtyCanvas(!0, !0), Ms(), Pn(), Ae();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && ve(), be(), Oe && Oe.kind === "view" && Wr(() => m.endDrag(performance.now())), Mo(), Pn(), Ot(n.pointerPos), Ae();
    }
  }
  function Ds() {
    var Oe, Ee, ke, vt, lt;
    if (!fe()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        Es(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && Wr(() => m.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        be();
        const ut = we(n.interaction);
        ut && n.paintEngine.cancelActiveStroke(ut);
      }
      n.interaction = null, be(), Mo(), Ot(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function Ls(Oe) {
    const Ee = Re(Oe), ke = Nt(Ee, !0);
    n.interaction || (Ot(Ee), ke && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function Rs(Oe) {
    if (n.mode === "frame") {
      const Ee = Re(Oe), ke = $a(Oe);
      ke && kr(), ke && ge() ? Ns(Ee, -ke) : ke && As(Ee, ke) && Ae({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ce(), B()) {
        const Ee = $a(Oe);
        Ee && Cs(Re(Oe), -Ee);
      } else m.applyWheelEvent(Oe) && Ae({ localOnly: !0, reason: ft.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: w,
        appendLassoPoint: ee,
        appendPaintPoint: $,
        applyRasterObjectOffset: te,
        applyRasterObjectTransform: C,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: z,
        applyStrokeGroupTransform: G,
        buildFreehandStrokeRecord: ne,
        buildLassoFillStrokeRecord: he,
        cameraShoots: q,
        cancelFrameCameraGesture: fe,
        cancelViewTransition: ce,
        clearSelection: oe,
        commitAndRefreshNode: U,
        commitPaintInteraction: E,
        commitState: H,
        currentSpaceCamera: A,
        cutoutCamera: j,
        dragFrame: T,
        editorViewInput: Y,
        ensureGroupFrame: pe,
        frameContext: ae,
        frameLocalPointToWorldDir: K,
        frameSpaceView: k,
        frameTarget: re,
        getActiveCutoutShot: de,
        getActivePaintTargetDescriptor: we,
        getCutoutSelectableItems: _e,
        getCutoutSelectableItemsForHit: N,
        getFrameViewLayout: le,
        getFrameViewRect: b,
        getList: y,
        getMultiSelectionGeom: I,
        getPaintingGroupList: v,
        getRasterObjectCenterUv: V,
        getRasterObjectList: L,
        getSelectableRasterObjectItems: J,
        getSelectableStrokeGroupItems: O,
        getSelected: F,
        getSelectedItems: x,
        getStrokeGroupCenterUv: R,
        getStrokeGroupStrokes: Z,
        getUnwrapRect: me,
        handleHit: ue,
        hideTooltip: ve,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: be,
        isCameraSelected: Q,
        isFreeFrameView: ge,
        isFreeSpaceView: B,
        isItemLocked: p,
        isRasterObjectItem: P,
        isSceneSticker: S,
        isShotItem: M,
        isSpaceView: W,
        isStickerItem: ye,
        isStrokeGroupItem: D,
        markObjectVisualsDirty: ie,
        markPaintCompositeVisualsDirty: Ne,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: Pe,
        paintingShown: Ce,
        parseRasterObjectSelectionId: Le,
        playback: je,
        poseOf: Ke,
        pushHistory: $e,
        rectFromPoints: He,
        rectIntersectsGeom: se,
        refreshPaintEngineRevisionCache: Fe,
        requestDraw: Ae,
        screenPos: Re,
        screenPosCss: Ye,
        screenPosToErpPoint: Ge,
        screenPosToFrameAsErpPoint: We,
        screenToWorldDir: ht,
        selectWorldSticker: bt,
        selectedWorldSticker: Tt,
        setPointerPos: Nt,
        setSelectedItem: Mn,
        setSelectedItems: qe,
        setSpaceView: sn,
        shortestWrappedDelta: Kt,
        spaceViewState: ci,
        startAnimation: Wr,
        startCameraPress: ui,
        startFrameDrag: on,
        startPanFrame: yn,
        startSpaceDrag: Ur,
        stopTimelinePlayback: kr,
        supportsErpPainting: cr,
        supportsFramePainting: wo,
        syncCutoutShot: _o,
        syncFloatingViewButtonState: xo,
        syncFrameRollKnob: ko,
        syncSidePanelControls: Ms,
        syncTimeline: Ps,
        syncViewToggleState: Mo,
        updateCursor: Ot,
        updateSelectionMenu: Pn,
        updateSidePanel: Qn,
        viewControls: Li,
        writePose: Vn,
        zoomFrameAt: Ns,
        zoomFrameViewAt: As,
        zoomSpaceAt: Cs
      } = Oe);
    },
    onCanvasPointerDown: Rl,
    worldGizmoPointer: Yr,
    hoverWorldGizmo: Po,
    onCanvasPointerMove: Fs,
    onCanvasPointerUp: Ts,
    onCanvasPointerCancel: Ds,
    onCanvasMouseMove: Ls,
    onCanvasWheel: Rs
  };
}
function B2(e) {
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
  let f, g, _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K;
  function k(_e, N, le = !1) {
    var J;
    H();
    const b = a && n.mode === "frame" ? w() : null, y = b || te(), I = b ? "shot" : X(), v = U();
    if (v && !ae(v) || !v && (!y || I === "stroke" || z(y))) return;
    const V = (((J = u.sidePanel) == null ? void 0 : J.params) || []).find((O) => O.key === _e);
    if (!V || V.enabled === !1) return;
    let L = Number(N);
    if (Number.isNaN(L) && (L = 0), (v || t) && XP.has(_e) ? L = _e === "scale" ? Math.max(L, Qg) : L : L = Ie(L, Number(V.min), Number(V.max)), _e === "yaw_deg" && (L = jt(L)), !v && t && _e.startsWith("position_")) {
      j(), Hv(l.camera, n.frame, _e, L), pe(), oe(), le && ce();
      return;
    }
    if (v) {
      Wv(v, n.frame, _e, L), he(), pe(), oe(), le && ce();
      return;
    }
    _e === "opacity" ? Gv(y, n.frame, L / 100) : K(y, { [_e]: L }), a && !G(y) && (_e === "hFOV_deg" || _e === "vFOV_deg") && (y.aspect_id = Ni(y)), pe(), oe(), le && ce();
  }
  async function re(_e) {
    var b, y, I, v, V, L, J;
    const N = _e.target.closest("[data-action]");
    if (!N) return;
    const le = String(N.getAttribute("data-action") || "");
    if (le === "coverage-set") {
      const O = Rn(N.getAttribute("data-coverage"));
      if (O === Rn(l.coverage)) return;
      l.coverage = O, n.coverage = O, r && (r.value = String(O)), o ? s.backgroundDirty = !0 : (h(), A({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), pe(), Y(), oe();
      return;
    }
    if (le === "toggle-selection-picker") {
      if ((y = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && y.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (le === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const O = String(N.getAttribute("data-selection-id") || "");
      let F = null;
      if (O && (d === "stickers" ? F = [...$(), ...c ? l.shots : []].find((x) => String((x == null ? void 0 : x.id) || "") === O) || null : F = ((I = ee().find((x) => {
        var R;
        return String(((R = x == null ? void 0 : x.item) == null ? void 0 : R.id) || "") === O;
      })) == null ? void 0 : I.item) || null), E(F || null), F && !ne(F)) {
        const x = fe(F);
        T(jt(Number(x.yaw_deg || 0)), Ie(Number(x.pitch_deg || 0), -89.9, 89.9));
      }
      pe(), Y(), oe();
      return;
    }
    if (le === "copy-state-inline") {
      const O = te(), F = X();
      if (!O || F === "stroke" || C().length > 1) return;
      const x = JSON.stringify(a && F !== "image" ? g(O) : _(fe(O)));
      try {
        await navigator.clipboard.writeText(x), (v = u.sidePanel) != null && v.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var R;
          (R = u.sidePanel) != null && R.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (le === "set-invert-x") {
      l.ui_settings.invert_view_x = N.getAttribute("data-value") === "1", q(), pe(), (V = i.setDirtyCanvas) == null || V.call(i, !0, !0), oe();
      return;
    }
    if (le === "set-invert-y") {
      l.ui_settings.invert_view_y = N.getAttribute("data-value") === "1", q(), pe(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), oe();
      return;
    }
    if (le === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, q(), pe(), (J = i.setDirtyCanvas) == null || J.call(i, !0, !0), oe();
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
  function de(_e) {
    const N = _e.target.closest("[data-action='param-input']");
    N && k(String(N.getAttribute("data-param-key") || ""), N.value, !1);
  }
  function we(_e) {
    const N = _e.target.closest("[data-action='param-input']");
    N && k(String(N.getAttribute("data-param-key") || ""), N.value, !0);
  }
  return {
    connect(_e) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: g,
        buildCanonicalSelectedStickerState: _,
        closeEditor: m,
        commitState: h,
        getActiveCutoutShot: w,
        getCutoutInspectorItems: ee,
        getList: $,
        getSelected: te,
        getSelectedItems: C,
        getSelectedKind: X,
        isItemLocked: z,
        isSceneSticker: G,
        isStrokeGroupItem: ne,
        markObjectVisualsDirty: he,
        persistUiSettings: q,
        poseOf: fe,
        pushHistory: ce,
        requestDraw: oe,
        selectedWorldSticker: U,
        setSelectedItem: E,
        stopTimelinePlayback: H,
        syncCoverageChangeToNodePreviews: A,
        syncCutoutShot: j,
        turnViewTo: T,
        updateSelectionMenu: Y,
        updateSidePanel: pe,
        worldStickerEditable: ae,
        writePose: K
      } = _e);
    },
    onSidePanelClick: re,
    onSidePanelInput: de,
    onSidePanelChange: we
  };
}
function Y2(e) {
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
  let _, m, h, w, ee, $, te, C, X, z, G, ne, he, q, fe, ce, oe, U, E, H, A, j, T, Y, pe, ae, K, k, re, de, we, _e, N, le, b, y, I, v, V, L, J, O, F, x, R, Z, me, ue, ve, Se, be;
  const Q = () => {
    if (!t.customPaintSessionStart) return;
    if (cl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (pN(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const $e = [
      $n(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !cl(He, t.customPaintColor))
    ];
    t.customPaintHistory = $e.slice(0, 8), t.customPaintSessionStart = null;
  }, ge = ($e = !1) => {
    !i || i.hidden || ($e ? Q() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, B = () => {
    i && (i.hidden && (t.customPaintSessionStart = $n(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    V();
  }
  function P($e) {
    var ht, bt, Tt, Nt, Mn;
    if ((bt = (ht = $e.target) == null ? void 0 : ht.matches) != null && bt.call(ht, "[data-confirm-overlay]")) {
      const qe = (Tt = f.confirmDialog) == null ? void 0 : Tt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const He = $e.target.closest("[data-space-mode]");
    if (He) {
      le(He.getAttribute("data-space-mode"));
      return;
    }
    const se = $e.target.closest("[data-gizmo-mode]");
    if (se) {
      t.gizmoMode = se.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, ve(), k({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Fe = $e.target.closest("[data-view]");
    if (Fe) {
      if (Fe.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Fe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), Se(), ve()), q(), F(), k();
      return;
    }
    const Ae = $e.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && X({ preservePanelValues: !0 }), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? re(-1) : qe === "redo" ? re(1) : qe === "clear" ? te() : qe === "add" || qe === "add-image" ? m() : qe === "add-world" ? w() : qe === "add-or-look" ? _() : qe === "add-camera" && h();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, X({ preservePanelValues: !0 }), Fn[qe] && (t.activeBrushPresetId = qe), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), L(), Se(), ve(), k();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        C(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Dl.find((sn) => sn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = $n(qe.color), ge(!0), L();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        $e.preventDefault(), $e.stopPropagation(), i && !i.hidden ? ge(!0) : B(), L();
        return;
      }
    }
    const Re = String(((Nt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : Nt.call(Ae, "data-action")) || "");
    if (Re === "video-play-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub = !1, x();
      return;
    }
    if (Re === "video-audio-toggle") {
      $e.preventDefault(), $e.stopPropagation(), me(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Re === "video-loop-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(g instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, g.loop = qe, O({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: g.muted,
        volume: Number(g.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Re === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Re === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ce() : null;
        if (!qe || qe.locked === !0) return;
        N(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), Se(), ve(), k();
        return;
      }
      if (Re === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ce() : null, sn = Ae.getAttribute("data-custom-width"), Kt = Ae.getAttribute("data-custom-height");
        if (!qe || !ee(qe, sn, Kt)) return;
        f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), k();
        return;
      }
      if (Re === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ce() : null;
        if (!qe || qe.locked === !0) return;
        we(qe), f.frameRail.aspectOpen = !1, J(), pe(), z(), F(), k();
        return;
      }
      if (Re === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, ve(), k();
        return;
      }
      if (Re === "aspect-set") {
        const qe = U();
        if (!qe) return;
        const sn = String(Ae.getAttribute("data-aspect") || "1:1");
        N(qe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), pe(), z(), ve(), k();
        return;
      }
      if (Re === "rotate-90") {
        const qe = U();
        if (!qe || A()) return;
        we(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), pe(), z(), ve(), k();
        return;
      }
      if (Re === "bring-front") {
        $();
        return;
      }
      if (Re === "send-back") {
        _e();
        return;
      }
      if (Re === "duplicate") {
        he();
        return;
      }
      if (Re === "replace-image") {
        K();
        return;
      }
      if (Re === "toggle-lock") {
        Z();
        return;
      }
      if (Re === "back-initial") {
        de();
        return;
      }
      if (Re === "toggle-visible") {
        R();
        return;
      }
      if (Re === "delete") {
        ne();
        return;
      }
    }
    if (Re === "reset-view") {
      if (t.mode === "frame") return;
      ue(
        { position: I(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Mn = G()) == null ? void 0 : Mn.radius) || sr },
        { mode: ul(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Re === "frame-view") {
      if (!j() || ul(t.spaceMode, t.viewTransition) !== "6dof") return;
      fe();
      return;
    }
    if (Re === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, _N(r == null ? void 0 : r.id, t.showGrid), p(), k();
      return;
    }
    if (Re === "toggle-fullscreen") {
      $e.preventDefault(), $e.stopPropagation(), Le();
      return;
    }
    if (Re === "toggle-output-preview-size") {
      $e.preventDefault(), $e.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, v(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ke(), k();
      return;
    }
    const Ye = $e.target.closest("[data-paint-history-index]");
    if (!Ye) return;
    const Ge = Number(Ye.getAttribute("data-paint-history-index")), We = t.customPaintHistory[Ge];
    We && (t.customPaintColor = $n(We), t.paintColor = $n(We), L());
  }
  function S($e) {
    const He = $e.target.closest("[data-video-seek]");
    if (He) {
      if (!(g instanceof HTMLVideoElement)) return;
      T.playing && (be.resumeAfterScrub = !0), T.seek(vi(Number(He.value || 0), Y()));
      return;
    }
    const se = $e.target.closest("[data-video-volume]");
    if (se) {
      if (!(g instanceof HTMLVideoElement)) return;
      const Re = Ie(Number(se.value || 0), 0, 1);
      g.volume = Re, g.muted = Re <= 1e-4, O({
        hasAudio: f.videoTransport.hasAudio,
        muted: g.muted,
        volume: Re
      });
      return;
    }
    const Fe = $e.target.closest("[data-paint-size-slider]");
    if (Fe) {
      if (Fe.disabled) return;
      const Re = Math.max(1, Math.min(120, Math.round(Number(Fe.value)))), Ye = oe(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ye] = Re, L(), b();
      return;
    }
    const Ae = $e.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Re = { ...t.customPaintColor, a: Ie(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = $n(Re), t.paintColor = $n(Re), L();
    }
  }
  function M($e) {
    var He;
    if ($e.target.closest("[data-video-seek]")) {
      if (!(g instanceof HTMLVideoElement)) return;
      be.resumeAfterScrub && T.play(), be.resumeAfterScrub = !1;
      return;
    }
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((He = $e.target) == null ? void 0 : He.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && E();
  }
  function W($e) {
    const He = $e.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && y(He);
    }, 220));
  }
  function ye($e) {
    var Fe, Ae;
    const He = $e.target.closest("[data-tip]");
    !He || u.target !== He || ($e.relatedTarget instanceof Element ? (Ae = (Fe = $e.relatedTarget).closest) == null ? void 0 : Ae.call(Fe, "[data-tip]") : null) === He || H();
  }
  function D($e, He) {
    var Ge;
    if (!o) return;
    const se = o.getBoundingClientRect(), Fe = Ie(($e - se.left) / Math.max(1, se.width), 0, 1), Ae = 1 - Ie((He - se.top) / Math.max(1, se.height), 0, 1), Re = _u(t.customPaintColor), Ye = { ...wu(Re.h, Fe, Ae), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = $n(Ye), t.paintColor = $n(Ye), L();
  }
  function ie($e) {
    var Re;
    if (!s) return;
    const He = s.getBoundingClientRect(), se = Ie(($e - He.left) / Math.max(1, He.width), 0, 1), Fe = _u(t.customPaintColor), Ae = { ...wu(se, Fe.s, Fe.v), a: Number(((Re = t.customPaintColor) == null ? void 0 : Re.a) ?? 1) };
    t.customPaintColor = $n(Ae), t.paintColor = $n(Ae), L();
  }
  function Ne($e, He) {
    const se = $e.pointerId;
    He($e);
    const Fe = (Re) => {
      Re.pointerId === se && He(Re);
    }, Ae = (Re) => {
      Re.pointerId === se && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Fe), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const $e = !!t.fullscreen;
    Xi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: $e ? ze.fullscreen_close : ze.fullscreen,
      label: $e ? "Exit Fullscreen" : "Fullscreen",
      tip: $e ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe($e) {
    const He = !!$e;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), xe(), ae(), k());
  }
  function Ce() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var $e, He;
    try {
      if (!document.fullscreenEnabled) {
        Pe(!t.fullscreen);
        return;
      }
      Ce() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await (($e = n.requestFullscreen) == null ? void 0 : $e.call(n));
    } catch {
      Pe(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Pe(Ce());
  }
  function Ke() {
    const $e = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = $e ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = $e ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = $e ? "Reduce preview" : "Expand preview";
  }
  return {
    connect($e) {
      ({
        addCutoutFrame: _,
        addImageSticker: m,
        addStudioCamera: h,
        addWorldImageSticker: w,
        applyCutoutAspectCustom: ee,
        bringSelectedToFront: $,
        clearAll: te,
        clearPaintingLayer: C,
        clearSelection: X,
        commitAndRefreshNode: z,
        contentSphere: G,
        deleteSelected: ne,
        duplicateSelected: he,
        forceCursorTool: q,
        frameSpaceContent: fe,
        getActiveCutoutShot: ce,
        getBrushPresetIdForTool: oe,
        getSelected: U,
        hidePaintSizePreview: E,
        hideTooltip: H,
        isErpCamera: A,
        isFreeSpaceView: j,
        playback: T,
        playbackFps: Y,
        pushHistory: pe,
        queueVideoTransportLayout: ae,
        replaceSelectedImage: K,
        requestDraw: k,
        restoreHistory: re,
        restoreSelectedToInitialPose: de,
        rotateCutoutAspect90: we,
        sendSelectedToBack: _e,
        setShotAspect: N,
        setSpaceMode: le,
        showPaintSizePreview: b,
        showTooltipFor: y,
        spaceOrigin: I,
        startAnimation: v,
        syncFloatingViewButtonState: V,
        syncPaintUi: L,
        syncSidePanelControls: J,
        syncVideoTransportState: O,
        syncViewToggleState: F,
        togglePlayback: x,
        toggleSelectedExternalStickerVisibility: R,
        toggleSelectedLock: Z,
        toggleVideoMuted: me,
        transitionView: ue,
        updateSelectionMenu: ve,
        updateSidePanel: Se,
        videoState: be
      } = $e);
    },
    closePaintColorPop: ge,
    syncGridToggleButton: p,
    onRootClick: P,
    onRootInput: S,
    onRootChange: M,
    onRootPointerOver: W,
    onRootPointerOut: ye,
    updatePaintColorFromSv: D,
    updatePaintColorFromHue: ie,
    bindDrag: Ne,
    syncFullscreenButton: xe,
    setFullscreenState: Pe,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: Ke
  };
}
function q2(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, g, _, m, h, w, ee, $, te, C, X;
  const z = d2();
  function G(ae) {
    var K, k, re, de, we;
    if (ae.key === "Escape") {
      if (l()) {
        ae.preventDefault(), ae.stopPropagation(), (K = ae.stopImmediatePropagation) == null || K.call(ae);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        ae.preventDefault(), ae.stopPropagation(), (k = ae.stopImmediatePropagation) == null || k.call(ae), (re = document.exitFullscreen) == null || re.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        ae.preventDefault(), ae.stopPropagation(), (de = ae.stopImmediatePropagation) == null || de.call(ae), ee(!1);
        return;
      }
      ae.preventDefault(), ae.stopPropagation(), (we = ae.stopImmediatePropagation) == null || we.call(ae), d();
    }
  }
  function ne(ae) {
    const K = String(ae.key || ""), k = String(ae.code || ""), re = Number(ae.keyCode || 0);
    if (!(K === "Delete" || k === "Delete" || re === 46) && !(K === "Backspace" || k === "Backspace" || re === 8)) return;
    const _e = ae.target, N = ((_e == null ? void 0 : _e.tagName) || "").toUpperCase();
    if (N === "INPUT" || N === "TEXTAREA" || _e != null && _e.isContentEditable) return;
    if (o.selection) {
      f(), ae.preventDefault(), ae.stopPropagation();
      return;
    }
    if (g()) {
      ae.preventDefault(), ae.stopPropagation();
      return;
    }
    h() && (u(), ae.preventDefault(), ae.stopPropagation());
  }
  function he(ae) {
    if (s.confirmDialog.visible) return !1;
    const K = ae.composedPath()[0];
    if (K !== document.body && K !== document.documentElement && !r.contains(K)) return !1;
    const k = ((K == null ? void 0 : K.tagName) || "").toUpperCase();
    return k === "INPUT" ? !qP.has(String(K.type || "text").toLowerCase()) : k !== "TEXTAREA" && k !== "SELECT" && !(K != null && K.isContentEditable);
  }
  function q(ae) {
    return ae.code !== "Space" || ae.ctrlKey || ae.metaKey || ae.altKey || n || !i || !s.timeline.visible ? !1 : he(ae);
  }
  function fe(ae) {
    q(ae) && (ae.preventDefault(), ae.stopPropagation(), ae.repeat || C());
  }
  function ce(ae) {
    q(ae) && (ae.preventDefault(), ae.stopPropagation());
  }
  function oe(ae) {
    if (z.modifiers(ae), !!g0(ae.code)) {
      if (!he(ae)) {
        E(ae.code);
        return;
      }
      ae.ctrlKey || ae.metaKey || (ae.preventDefault(), ae.stopPropagation(), a() && (z.press(ae.code, ae.timeStamp), ae.repeat || c(), $(() => {
      })));
    }
  }
  function U(ae) {
    z.modifiers(ae), ae.key === "Meta" && H(), E(ae.code) && (ae.preventDefault(), ae.stopPropagation());
  }
  function E(ae) {
    return z.release(ae) ? (z.held || _(), !0) : !1;
  }
  function H() {
    z.held && (z.releaseAll(), _());
  }
  function A() {
    document.hidden && H();
  }
  function j() {
    H();
  }
  function T(ae) {
    const K = !!(ae.ctrlKey || ae.metaKey), k = !!ae.altKey;
    t.marqueeModifier === K && t.altModifier === k || (t.marqueeModifier = K, t.altModifier = k, te(), X(t.pointerPos));
  }
  function Y() {
    H(), t.marqueeModifier = !1, t.altModifier = !1, te(), X(t.pointerPos);
  }
  function pe(ae) {
    if (n || !ae.ctrlKey && !ae.metaKey) return;
    const K = String(ae.key || "").toLowerCase(), k = String(ae.code || "");
    if (K !== "z" && k !== "KeyZ") return;
    const re = ae.target, de = ((re == null ? void 0 : re.tagName) || "").toUpperCase();
    if (de === "INPUT" || de === "TEXTAREA" || re != null && re.isContentEditable) return;
    const { canUndo: we, canRedo: _e } = m();
    ae.shiftKey && !_e || !ae.shiftKey && !we || (w(ae.shiftKey ? 1 : -1), ae.preventDefault(), ae.stopPropagation());
  }
  return {
    connect(ae) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: g,
        endFrameKeyMove: _,
        getHistoryCapabilities: m,
        getSelected: h,
        restoreHistory: w,
        setFullscreenState: ee,
        startAnimation: $,
        syncFrameRollKnob: te,
        togglePlayback: C,
        updateCursor: X
      } = ae);
    },
    moveKeys: z,
    onEscClose: G,
    onDeleteKey: ne,
    onSpaceKey: fe,
    onSpaceKeyUp: ce,
    onMoveKeyDown: oe,
    onMoveKeyUp: U,
    onVisibilityChange: A,
    onContextMenu: j,
    onModifierKeyChange: T,
    onWindowBlur: Y,
    onUndoRedoKey: pe
  };
}
const Ap = /* @__PURE__ */ new Map(), oi = ig({
  app: ir,
  api: pn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: vu,
    markImageFailed: Zg,
    markImageLoading: Xg,
    markImageReady: Jg
  }
});
function Cp(e) {
  if (!Zt(e, "background") || !Zt(e, "external-sticker")) return null;
  const t = oi.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? vo(t[0]) : null;
}
const X2 = oi.assetSource, J2 = oi.source, Z2 = oi.uiImage, Q2 = oi.invalidateUiImage, Ip = oi.loadPreferredExactLinkedImage;
async function eA(e, t, r = {}) {
  var Ld, Rd;
  await Fg(e, { tolerateOperationFailure: !0 }), oi.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = mN(e, t);
  await Nd();
  const a = aa(e, "output_preset"), l = aa(e, "coverage"), c = aa(e, "bg_color"), d = aa(e, YP), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Ip(
      e,
      Ve,
      () => ut(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return bN(Ve);
  }, g = (Ve = 2048) => {
    const st = a == null ? void 0 : a.value;
    return yN(st) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : gN(st, Ve);
  }, _ = e.__panoSceneStateV2 === !0, m = t === "stickers" && _, h = m && e.__panoStudio === !0, w = h, ee = t === "cutout" || h, $ = (_ ? ym : gm)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: g(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Rn(l == null ? void 0 : l.value),
    sharedUiSettings: vN(),
    active: wm(e),
    fps: _ ? Cp(e) : null
  });
  Hn(e).liveState = $, Hn(e).liveStateVersion = 0;
  let te = null;
  w ? (te = $.camera && $.camera.visible !== !1 ? Sm($.camera, 0) : null, $.shots = te ? [{ ...te, position: [...te.position] }] : [], $.active.selected_shot_id = null) : t === "cutout" && ($.shots = Array.isArray($.shots) ? $.shots.slice(0, 1) : [], $.shots.length || ($.active.selected_shot_id = null));
  const C = t === "cutout" ? (() => {
    var tr;
    const Ve = Array.isArray($.shots) ? $.shots : [], st = String(((tr = $ == null ? void 0 : $.active) == null ? void 0 : tr.selected_shot_id) || "");
    return Ve.find((ln) => String((ln == null ? void 0 : ln.id) || "") === st) || Ve[0] || null;
  })() : null, X = C ? b0(C, !1) : { width: 220, height: 132 }, z = qg(h ? "studio" : t), G = /* @__PURE__ */ mo({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (z.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Ld = z.spaceButtons) != null && Ld.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: z.spaceButtons, frame: z.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (z.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: m } : {}
    })),
    floatingButtons: [
      ...(z.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
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
      customColorCss: mr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: mr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (Ve, st) => ({ index: st, color: null })),
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
      width: X.width,
      height: X.height,
      label: C ? "Loading preview" : "Add Frame to preview"
    }
  }), ne = { frame: /* @__PURE__ */ Ia(0), playing: /* @__PURE__ */ Ia(!1) }, he = document.createElement("div");
  document.body.appendChild(he);
  const q = ({ intent: Ve, file: st } = {}) => {
    if (rr(st)) {
      if (Ve === "add") {
        Ce(st);
        return;
      }
      if (Ve === "add-world") {
        Le(st);
        return;
      }
      Ve === "replace" && lt(st);
    }
  }, fe = ({ intent: Ve } = {}) => {
  }, ce = Hu(UP, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: z,
    paintSwatches: Dl.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: mr(Ve.color, 1)
    })),
    uiState: G,
    playhead: ne,
    onClose: () => {
      zi();
    },
    onTimeline: (Ve) => Es(Ve),
    onImageFileSelected: q,
    onImageFileCancelled: fe
  });
  let oe = null;
  try {
    oe = ce.mount(he);
  } catch (Ve) {
    try {
      ce.unmount();
    } catch {
    }
    throw he.remove(), Ve;
  }
  const U = he.querySelector(".pano-modal-overlay"), E = he.querySelector(".pano-modal"), H = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), A = E == null ? void 0 : E.querySelector("[data-stage-background]"), j = E == null ? void 0 : E.querySelector(".pano-stage-wrap"), T = ((Rd = oe == null ? void 0 : oe.getPaintOverlayRefs) == null ? void 0 : Rd.call(oe)) || {}, Y = T.cursor || null, pe = T.sizePreview || null, ae = T.sizeSample || null;
  if (!U || !E || !H || !A || !j || !Y || !pe || !ae)
    throw ce.unmount(), he.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const K = H.getContext("2d"), k = E.querySelector("[data-side]"), re = E.querySelector("[data-video-element]"), de = E.querySelector("[data-port-video-element]");
  Jl(H, "editor.stage-overlay"), Jl(A, "editor.stage-background"), _f(re, "editor.video"), _f(de, "editor.port-video");
  const we = E.querySelector(".pano-floating-right"), _e = E.querySelector(".pano-floating-top"), N = E.querySelector("[data-tool-rail]"), le = E.querySelector("[data-frame-rail]"), b = E.querySelector("[data-frame-roll-knob]"), y = E.querySelector("[data-paint-dock]"), I = E.querySelector(".pano-video-transport"), v = E.querySelector("[data-selection-menu]"), V = E.querySelector("[data-tooltip]"), L = E.querySelector("[data-camera-preview-host]"), J = E.querySelector("[data-camera-preview-canvas]");
  Jl(J, "editor.camera-preview");
  const O = E.querySelector("[data-paint-color-row]"), F = E.querySelector("[data-paint-color-pop]"), x = E.querySelector("[data-paint-color-sv]"), R = E.querySelector("[data-paint-color-sv-cursor]"), Z = E.querySelector("[data-paint-hue-strip]"), me = E.querySelector("[data-paint-hue-handle]");
  j == null || j.removeAttribute("data-stage-ready"), j == null || j.setAttribute("data-stage-loading-kind", "boot"), H.style.opacity = "1", A.style.opacity = "0", i && (k == null || k.remove(), E.classList.add("pano-modal-readonly")), E.addEventListener("pointerdown", () => M.wake(), !0), E.addEventListener("pointerdown", (Ve) => {
    var st;
    Ve.target.closest("[data-frame-roll-knob]") || Mn(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((tr) => {
      tr.hidden = !0;
    }), se(!0), ee && ve.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (ve.cutoutAspectOpen = !1, ve.menuMode = "", ve.menuSize.measured = !1, Nn(), ut()), (st = G.frameRail) != null && st.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (G.frameRail.aspectOpen = !1)));
  });
  const ve = {
    mode: "pano",
    selectedId: u0(t, $),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: sr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: Rn($.coverage),
    historyController: RN($),
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
    showGrid: wN(e == null ? void 0 : e.id, !0),
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
    paintEngine: kl(),
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
  }, Se = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (ve.selectedId = null, $.active.selected_sticker_id = null), ve.selectedIds = ve.selectedId ? [ve.selectedId] : [];
  const be = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), p = rn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const P = rn({ label: "editor.port-still" });
  P.__panoFrameIdx = 0;
  const S = {
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
  }, M = Ux({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, st) => Gs(Ve, st),
    animating: () => Ye()
  }), W = Kx({
    requestFrame: (Ve) => M.requestFrame(Ve),
    cancelFrame: (Ve) => M.cancelFrame(Ve),
    tasks: {
      seek: () => Oe.seek(Se.scrubFrame),
      timeline: () => js(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Mr(), ut({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => qt()
    }
  }), ye = AS({
    canvas: A,
    onReady: () => {
      xt(), ut({ reason: ft.CONTEXT });
    },
    onFailed: () => ut(),
    onUpdate: () => ut({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (Ve) => ut({ localOnly: !0, reason: I2(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bt(), xt(), ut({ reason: ft.CONTEXT });
    }
  }), D = Number.parseFloat(
    getComputedStyle(E).getPropertyValue("--pano-float-radius")
  ) || 10, ie = (Ve) => {
    const st = String(Ve || "default");
    H.style.cursor !== st && (H.style.cursor = st);
  }, Ne = {
    timer: 0,
    target: null
  }, xe = {
    active: !1,
    depth: 0
  }, Pe = Bu({
    getView: () => ({ yaw: ve.viewYaw, pitch: ve.viewPitch, fov: ve.viewFov }),
    setView: (Ve) => {
      ve.viewYaw = jt(Number(Ve.yaw || 0)), ve.viewPitch = Ie(Number(Ve.pitch || 0), -89.9, 89.9), ve.viewFov = Ie(Number(Ve.fov || ve.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = H.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || H.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || H.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, st;
      return {
        x: (Ve = $.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (st = $.ui_settings) != null && st.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => M.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ce,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: je,
    applyVideoTimelineFps: Ke,
    bindDrag: $e,
    cancelFrameCameraGesture: He,
    closePaintColorPop: se,
    commitState: Fe,
    disposeMediaSession: Ae,
    disposeUpstream: Re,
    editorAnimating: Ye,
    endFrameKeyMove: Ge,
    finishKnobRoll: We,
    flushFrameWheelCommit: ht,
    forgetCameraPreviewFrame: bt,
    getUnwrapRect: Tt,
    hidePaintSizePreview: Nt,
    hideTooltip: Mn,
    hoverWorldGizmo: qe,
    isFreeFrameView: sn,
    isFreeSpaceView: Kt,
    migrateLegacyEmbeddedAssets: ci,
    onCanvasDragOver: Wr,
    onCanvasDrop: ui,
    onCanvasMouseMove: on,
    onCanvasPointerCancel: yn,
    onCanvasPointerDown: Ur,
    onCanvasPointerMove: kr,
    onCanvasPointerUp: cr,
    onCanvasWheel: wo,
    onContextMenu: _o,
    onDeleteKey: xo,
    onEscClose: ko,
    onFrameRollKnobDoubleClick: Ms,
    onFrameRollKnobPointerDown: Ps,
    onFrameRollKnobPointerMove: Mo,
    onFullscreenChange: Ot,
    onModifierKeyChange: Pn,
    onMoveKeyDown: Qn,
    onMoveKeyUp: Li,
    onRootChange: Vn,
    onRootClick: Ns,
    onRootInput: As,
    onRootPointerOut: Cs,
    onRootPointerOver: Br,
    onSidePanelChange: Rl,
    onSidePanelClick: Yr,
    onSidePanelInput: Vl,
    onSpaceKey: Po,
    onSpaceKeyUp: Is,
    onTimelineAction: Es,
    onUndoRedoKey: No,
    onVisibilityChange: Os,
    onWindowBlur: Fs,
    onWindowDragEnter: Ts,
    onWindowDragLeave: Ds,
    onWindowDragOver: Ls,
    onWindowDrop: Rs,
    playback: Oe,
    pushHistory: Ee,
    reconcileExternalStickerFromInputs: ke,
    refreshModalVideoSource: vt,
    replaceSelectedImageFromFile: lt,
    requestDraw: ut,
    restoreView: Je,
    sampleEditorDiagnostics: et,
    saveView: nt,
    setDropCue: er,
    setPointerPos: Xe,
    stageResizeObserver: Ue,
    stickerCornerOrderSanity: Ze,
    stopRenderLoop: Jt,
    syncCanvasSize: xt,
    syncCutoutShot: Mr,
    syncFullscreenButton: Ri,
    syncGridToggleButton: Vi,
    syncLookAtFrameButtonState: $i,
    syncOutputPreviewToggleButton: Vs,
    syncPaintUi: $s,
    syncPaintingLayerAsync: zs,
    syncTimeline: js,
    syncUndoRedoButtons: Hs,
    tick: Gs,
    triggerBackgroundPersistenceOnClose: ct,
    updateCursor: pt,
    updatePaintColorFromHue: yt,
    updatePaintColorFromSv: wt,
    updateSelectionMenu: Nn,
    updateSidePanel: qt,
    viewControls: An,
    watchPixelRatio: Rt
  } = xN({
    api: pn,
    app: ir,
    backgroundCanvas: A,
    bgWidget: c,
    cameraV2: w,
    canvas: H,
    closeEditor: zi,
    comfyMedia: oi,
    coverageWidget: l,
    ctx: K,
    cutoutPreviewCanvas: J,
    cutoutPreviewHost: L,
    dragCue: xe,
    dragFrames: W,
    editor: ve,
    editorView: ye,
    floatingRightEl: we,
    floatingTopEl: _e,
    frameGateCssRadius: D,
    frameRailEl: le,
    frameRollKnobEl: b,
    hideSidebar: i,
    imageCache: be,
    initialShotBase: te,
    loadPreferredExactLinkedImage: Ip,
    mediaAssetSource: X2,
    mediaSource: J2,
    mediaUiImage: Z2,
    node: e,
    overlay: U,
    paintColorPop: F,
    paintColorRow: O,
    paintColorSv: x,
    paintColorSvCursor: R,
    paintCursorEl: Y,
    paintDockEl: y,
    paintHueHandle: me,
    paintHueStrip: Z,
    paintSizePreviewEl: pe,
    paintSizePreviewSampleEl: ae,
    portStillCanvas: P,
    portVideoEl: de,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: B,
    rasterImageAlphaCache: ge,
    rasterImageCache: Q,
    readOnly: n,
    resolveEditorOutputPresetWidth: g,
    root: E,
    runtime: S,
    sceneV2: m,
    scheduler: M,
    selectionMenu: v,
    setCanvasCursor: ie,
    shotEditor: ee,
    stageWrap: j,
    state: $,
    stateV2: _,
    stateWidget: d,
    stillCanvas: p,
    studio: h,
    timeline: Se,
    timelinePlayhead: ne,
    toolRailEl: N,
    tooltip: Ne,
    tooltipEl: V,
    type: t,
    uiState: G,
    videoEl: re,
    videoTimelineFps: Cp,
    videoTransportEl: I,
    viewController: Pe,
    vueModal: oe
  }, [
    TN,
    VN,
    $N,
    zN,
    jN,
    HN,
    GN,
    KN,
    WN,
    N2,
    A2,
    C2,
    O2,
    F2,
    T2,
    D2,
    L2,
    R2,
    V2,
    $2,
    z2,
    j2,
    H2,
    G2,
    K2,
    W2,
    U2,
    B2,
    Y2,
    q2
  ]);
  Ze(), Ue.observe(H), Rt();
  const an = () => Fe();
  n || (el(e).flushBeforeQueue = an), b == null || b.addEventListener("pointerdown", Ps), b == null || b.addEventListener("pointermove", Mo), b == null || b.addEventListener("pointerup", We), b == null || b.addEventListener("pointercancel", () => He()), b == null || b.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = ve.interaction) == null ? void 0 : Ve.source) === "knob" && He();
  }), b == null || b.addEventListener("dblclick", Ms), H.onpointerdown = Ur, H.onpointermove = kr, H.onpointerup = cr, H.onpointercancel = yn, H.onlostpointercapture = () => {
    He();
  }, H.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, H.oncontextmenu = (Ve) => {
    (Kt() || sn()) && m_(An(), 2) && Ve.preventDefault();
  }, H.onmousemove = on, H.onpointerleave = () => {
    ve.interaction || qe({ x: -1e6, y: -1e6 });
  }, H.onmouseleave = () => {
    Xe(ve.pointerPos, !1), pt(ve.pointerPos), ve.mode === "frame" && ve.primaryTool === "cursor" && ut({ localOnly: !0, reason: ft.OVERLAY });
  }, H.onwheel = wo, H.ondragover = Wr, H.ondrop = ui, window.addEventListener("dragenter", Ts, !0), window.addEventListener("dragover", Ls, !0), window.addEventListener("dragleave", Ds, !0), window.addEventListener("drop", Rs, !0), k == null || k.addEventListener("click", Yr), k == null || k.addEventListener("input", Vl), k == null || k.addEventListener("change", Rl), Vi(), E.addEventListener("click", Ns), E.addEventListener("input", As), E.addEventListener("change", Vn), E.addEventListener("pointerup", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("pointercancel", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), E.addEventListener("pointerover", Br), E.addEventListener("pointerout", Cs), E.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Mn();
  }), x && (x.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => wt(st.clientX, st.clientY));
  }), Z && (Z.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => yt(st.clientX));
  }), E.addEventListener("click", (Ve) => {
    var di;
    const st = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!st) return;
    const tr = st.getAttribute("data-action") === "confirm-accept", ln = (di = G.confirmDialog) == null ? void 0 : di.resolve;
    G.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(tr);
  }), document.addEventListener("fullscreenchange", Ot), Ri(), Vs();
  const nn = e.onConnectionsChange;
  let Dt = null, Ht = () => {
  };
  !n && t === "stickers" && (Ht = Eg(e, (Ve = "sync") => {
    Ve === "executed" && (Q2(be, po), vt(), m && Ke()), ke(Ve);
  }, { editor: !0 }), Dt = function(...st) {
    typeof nn == "function" && nn.apply(this, st), vt(), ti(this, "connections");
  }, e.onConnectionsChange = Dt), n || Ap.set(String(e.id ?? "0"), () => zs());
  let Cn = null;
  async function zi() {
    return Cn || (Cn = (async () => {
      var st, tr, ln, di, qr, Ks, Vd, Ws, $d;
      Ap.delete(String(e.id ?? "0")), ht(), Ge(), n || Fe(), nt(), document.fullscreenElement === U && ((st = document.exitFullscreen) == null || st.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ot), Hn(e).liveState = null;
      const Ve = HS(e);
      return (Ve == null ? void 0 : Ve.flushBeforeQueue) === an && (Ve.flushBeforeQueue = null), (di = (ln = (tr = ng(e)) == null ? void 0 : tr.dom) == null ? void 0 : ln.requestDraw) == null || di.call(ln), (Ks = (qr = e.graph) == null ? void 0 : qr.setDirtyCanvas) == null || Ks.call(qr, !0, !0), ($d = (Ws = (Vd = ir) == null ? void 0 : Vd.canvas) == null ? void 0 : Ws.setDirty) == null || $d.call(Ws, !0, !0), Mn(), W.cancel(), Jt(), Ae(), Re(), ye.dispose(), er(!1), window.removeEventListener("keydown", ko, !0), window.removeEventListener("keydown", xo, !0), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keyup", Is, !0), window.removeEventListener("keydown", Qn, !0), window.removeEventListener("keyup", Li, !0), document.removeEventListener("visibilitychange", Os), window.removeEventListener("contextmenu", _o, !0), window.removeEventListener("keydown", Pn, !0), window.removeEventListener("keyup", Pn, !0), window.removeEventListener("blur", Fs), window.removeEventListener("keydown", No, !0), window.removeEventListener("dragenter", Ts, !0), window.removeEventListener("dragover", Ls, !0), window.removeEventListener("dragleave", Ds, !0), window.removeEventListener("drop", Rs, !0), !n && t === "stickers" && (e.onConnectionsChange === Dt && (e.onConnectionsChange = nn), Ht()), ce.unmount(), he.remove(), ct(), Cn = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), Cn = null, !1)), Cn);
  }
  window.addEventListener("keydown", ko, !0), window.addEventListener("keydown", xo, !0), window.addEventListener("keydown", Po, !0), window.addEventListener("keyup", Is, !0), window.addEventListener("keydown", Qn, !0), window.addEventListener("keyup", Li, !0), document.addEventListener("visibilitychange", Os), window.addEventListener("contextmenu", _o, !0), window.addEventListener("keydown", Pn, !0), window.addEventListener("keyup", Pn, !0), window.addEventListener("blur", Fs), window.addEventListener("keydown", No, !0), U.addEventListener("pointerdown", (Ve) => {
    Ve.target === U && zi();
  });
  function In(Ve, st, { rollbackState: tr = !1 } = {}) {
    let ln = "";
    try {
      tr && (ln = JSON.stringify($)), st();
    } catch (di) {
      if (ln)
        try {
          const qr = JSON.parse(ln);
          Object.keys($).forEach((Ks) => delete $[Ks]), Object.assign($, qr), n || Fe();
        } catch (qr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, qr);
        }
      G.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, di);
    }
  }
  In("view", Je), In("cutout-focus", je), !n && t === "stickers" && In("external-sticker-sync", () => ke("open"), { rollbackState: !0 }), ci().catch((Ve) => {
    G.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), In("history", Ee), In("undo-redo", Hs), In("paint-ui", $s), In("side-panel", qt), In("look-at-frame", $i), In("video-source", vt), In("canvas-size", xt), In("cursor", () => pt(ve.pointerPos)), ut(), et();
}
ir.registerExtension(M_({
  app: ir,
  openEditor: eA,
  attachStickers: Hx,
  attachCutout: Gx,
  attachPreview: jx,
  restoreOutput: Ax,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: ZP
}));
