import * as Go from "../../scripts/app.js";
import { app as bn } from "../../scripts/app.js";
import { api as an } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Sc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const dt = {}, Fi = [], Xn = () => {
}, qd = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ms = (e) => e.startsWith("onUpdate:"), en = Object.assign, Mc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, h0 = Object.prototype.hasOwnProperty, nt = (e, t) => h0.call(e, t), Ue = Array.isArray, Li = (e) => Ha(e) === "[object Map]", Xd = (e) => Ha(e) === "[object Set]", wf = (e) => Ha(e) === "[object Date]", Ge = (e) => typeof e == "function", At = (e) => typeof e == "string", Jn = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", Jd = (e) => (lt(e) || Ge(e)) && Ge(e.then) && Ge(e.catch), Zd = Object.prototype.toString, Ha = (e) => Zd.call(e), m0 = (e) => Ha(e).slice(8, -1), Qd = (e) => Ha(e) === "[object Object]", Nc = (e) => At(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, va = /* @__PURE__ */ Sc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, p0 = /-\w/g, on = Ns(
  (e) => e.replace(p0, (t) => t.slice(1).toUpperCase())
), g0 = /\B([A-Z])/g, si = Ns(
  (e) => e.replace(g0, "-$1").toLowerCase()
), ks = Ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nl = Ns(
  (e) => e ? `on${ks(e)}` : ""
), Wn = (e, t) => !Object.is(e, t), kl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, eh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, b0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Sf;
const Ps = () => Sf || (Sf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (Ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = At(i) ? x0(i) : It(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (At(e) || lt(e))
    return e;
}
const y0 = /;(?![^(]*\))/g, v0 = /:([^]+)/, _0 = /\/\*[^]*?\*\//g;
function x0(e) {
  const t = {};
  return e.replace(_0, "").split(y0).forEach((n) => {
    if (n) {
      const i = n.split(v0);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (At(e))
    t = e;
  else if (Ue(e))
    for (let n = 0; n < e.length; n++) {
      const i = st(e[n]);
      i && (t += i + " ");
    }
  else if (lt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const w0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", S0 = /* @__PURE__ */ Sc(w0);
function th(e) {
  return !!e || e === "";
}
function M0(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = kc(e[i], t[i]);
  return n;
}
function kc(e, t) {
  if (e === t) return !0;
  let n = wf(e), i = wf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Jn(e), i = Jn(t), n || i)
    return e === t;
  if (n = Ue(e), i = Ue(t), n || i)
    return n && i ? M0(e, t) : !1;
  if (n = lt(e), i = lt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const u in e) {
      const d = e.hasOwnProperty(u), p = t.hasOwnProperty(u);
      if (d && !p || !d && p || !kc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const nh = (e) => !!(e && e.__v_isRef === !0), mt = (e) => At(e) ? e : e == null ? "" : Ue(e) || lt(e) && (e.toString === Zd || !Ge(e.toString)) ? nh(e) ? mt(e.value) : JSON.stringify(e, rh, 2) : String(e), rh = (e, t) => nh(t) ? rh(e, t.value) : Li(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[Pl(i, c) + " =>"] = a, n),
    {}
  )
} : Xd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pl(n))
} : Jn(t) ? Pl(t) : lt(t) && !Ue(t) && !Qd(t) ? String(t) : t, Pl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Jn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fn;
class N0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = fn, !t && fn && (this.index = (fn.scopes || (fn.scopes = [])).push(
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
      const n = fn;
      try {
        return fn = this, t();
      } finally {
        fn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fn, fn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fn = this.prevScope, this.prevScope = void 0);
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
function k0() {
  return fn;
}
let ht;
const Al = /* @__PURE__ */ new WeakSet();
class ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fn && fn.active && fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Al.has(this) && (Al.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mf(this), sh(this);
    const t = ht, n = On;
    ht = this, On = !0;
    try {
      return this.fn();
    } finally {
      lh(this), ht = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cc(t);
      this.deps = this.depsTail = void 0, Mf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Al.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ec(this) && this.run();
  }
  get dirty() {
    return ec(this);
  }
}
let ah = 0, _a, xa;
function oh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xa, xa = e;
    return;
  }
  e.next = _a, _a = e;
}
function Pc() {
  ah++;
}
function Ac() {
  if (--ah > 0)
    return;
  if (xa) {
    let t = xa;
    for (xa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _a; ) {
    let t = _a;
    for (_a = void 0; t; ) {
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
function sh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Cc(i), P0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function ec(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ch(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ch(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ia) || (e.globalVersion = Ia, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ec(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ht, i = On;
  ht = e, On = !0;
  try {
    sh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Wn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = n, On = i, lh(e), e.flags &= -3;
  }
}
function Cc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      Cc(c, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function P0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const uh = [];
function mr() {
  uh.push(On), On = !1;
}
function pr() {
  const e = uh.pop();
  On = e === void 0 ? !0 : e;
}
function Mf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ht;
    ht = void 0;
    try {
      t();
    } finally {
      ht = n;
    }
  }
}
let Ia = 0;
class A0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !On || ht === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ht)
      n = this.activeLink = new A0(ht, this), ht.deps ? (n.prevDep = ht.depsTail, ht.depsTail.nextDep = n, ht.depsTail = n) : ht.deps = ht.depsTail = n, fh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ht.depsTail, n.nextDep = void 0, ht.depsTail.nextDep = n, ht.depsTail = n, ht.deps === n && (ht.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ia++, this.notify(t);
  }
  notify(t) {
    Pc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ac();
    }
  }
}
function fh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        fh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const tc = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ Symbol(
  ""
), nc = /* @__PURE__ */ Symbol(
  ""
), Da = /* @__PURE__ */ Symbol(
  ""
);
function Jt(e, t, n) {
  if (On && ht) {
    let i = tc.get(e);
    i || tc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Tc()), a.map = i, a.key = n), a.track();
  }
}
function ur(e, t, n, i, a, c) {
  const u = tc.get(e);
  if (!u) {
    Ia++;
    return;
  }
  const d = (p) => {
    p && p.trigger();
  };
  if (Pc(), t === "clear")
    u.forEach(d);
  else {
    const p = Ue(e), y = p && Nc(n);
    if (p && n === "length") {
      const _ = Number(i);
      u.forEach((w, S) => {
        (S === "length" || S === Da || !Jn(S) && S >= _) && d(w);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), y && d(u.get(Da)), t) {
        case "add":
          p ? y && d(u.get("length")) : (d(u.get(Xr)), Li(e) && d(u.get(nc)));
          break;
        case "delete":
          p || (d(u.get(Xr)), Li(e) && d(u.get(nc)));
          break;
        case "set":
          Li(e) && d(u.get(Xr));
          break;
      }
  }
  Ac();
}
function Ni(e) {
  const t = /* @__PURE__ */ tt(e);
  return t === e ? t : (Jt(t, "iterate", Da), /* @__PURE__ */ Nn(e) ? t : t.map(Rn));
}
function As(e) {
  return Jt(e = /* @__PURE__ */ tt(e), "iterate", Da), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ gr(e) ? Bi(/* @__PURE__ */ Jr(e) ? Rn(t) : t) : Rn(t);
}
const C0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cl(this, Symbol.iterator, (e) => Bn(this, e));
  },
  concat(...e) {
    return Ni(this).concat(
      ...e.map((t) => Ue(t) ? Ni(t) : t)
    );
  },
  entries() {
    return Cl(this, "entries", (e) => (e[1] = Bn(this, e[1]), e));
  },
  every(e, t) {
    return ir(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ir(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ir(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ir(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ir(
      this,
      "findLast",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ir(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ir(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Tl(this, "includes", e);
  },
  indexOf(...e) {
    return Tl(this, "indexOf", e);
  },
  join(e) {
    return Ni(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Tl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ir(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sa(this, "pop");
  },
  push(...e) {
    return sa(this, "push", e);
  },
  reduce(e, ...t) {
    return Nf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nf(this, "reduceRight", e, t);
  },
  shift() {
    return sa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ir(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sa(this, "splice", e);
  },
  toReversed() {
    return Ni(this).toReversed();
  },
  toSorted(e) {
    return Ni(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ni(this).toSpliced(...e);
  },
  unshift(...e) {
    return sa(this, "unshift", e);
  },
  values() {
    return Cl(this, "values", (e) => Bn(this, e));
  }
};
function Cl(e, t, n) {
  const i = As(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Nn(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const T0 = Array.prototype;
function ir(e, t, n, i, a, c) {
  const u = As(e), d = u !== e && !/* @__PURE__ */ Nn(e), p = u[t];
  if (p !== T0[t]) {
    const w = p.apply(e, c);
    return d ? Rn(w) : w;
  }
  let y = n;
  u !== e && (d ? y = function(w, S) {
    return n.call(this, Bn(e, w), S, e);
  } : n.length > 2 && (y = function(w, S) {
    return n.call(this, w, S, e);
  }));
  const _ = p.call(u, y, i);
  return d && a ? a(_) : _;
}
function Nf(e, t, n, i) {
  const a = As(e), c = a !== e && !/* @__PURE__ */ Nn(e);
  let u = n, d = !1;
  a !== e && (c ? (d = i.length === 0, u = function(y, _, w) {
    return d && (d = !1, y = Bn(e, y)), n.call(this, y, Bn(e, _), w, e);
  }) : n.length > 3 && (u = function(y, _, w) {
    return n.call(this, y, _, w, e);
  }));
  const p = a[t](u, ...i);
  return d ? Bn(e, p) : p;
}
function Tl(e, t, n) {
  const i = /* @__PURE__ */ tt(e);
  Jt(i, "iterate", Da);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ec(n[0]) ? (n[0] = /* @__PURE__ */ tt(n[0]), i[t](...n)) : a;
}
function sa(e, t, n = []) {
  mr(), Pc();
  const i = (/* @__PURE__ */ tt(e))[t].apply(e, n);
  return Ac(), pr(), i;
}
const I0 = /* @__PURE__ */ Sc("__proto__,__v_isRef,__isVue"), dh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jn)
);
function D0(e) {
  Jn(e) || (e = String(e));
  const t = /* @__PURE__ */ tt(this);
  return Jt(t, "has", e), t.hasOwnProperty(e);
}
class hh {
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
      return i === (a ? c ? H0 : bh : c ? gh : ph).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Ue(t);
    if (!a) {
      let p;
      if (u && (p = C0[n]))
        return p;
      if (n === "hasOwnProperty")
        return D0;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qt(t) ? t : i
    );
    if ((Jn(n) ? dh.has(n) : I0(n)) || (a || Jt(t, "get", n), c))
      return d;
    if (/* @__PURE__ */ Qt(d)) {
      const p = u && Nc(n) ? d : d.value;
      return a && lt(p) ? /* @__PURE__ */ ic(p) : p;
    }
    return lt(d) ? a ? /* @__PURE__ */ ic(d) : /* @__PURE__ */ Cs(d) : d;
  }
}
class mh extends hh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const u = Ue(t) && Nc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ gr(c);
      if (!/* @__PURE__ */ Nn(i) && !/* @__PURE__ */ gr(i) && (c = /* @__PURE__ */ tt(c), i = /* @__PURE__ */ tt(i)), !u && /* @__PURE__ */ Qt(c) && !/* @__PURE__ */ Qt(i))
        return y || (c.value = i), !0;
    }
    const d = u ? Number(n) < t.length : nt(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Qt(t) ? t : a
    );
    return t === /* @__PURE__ */ tt(a) && (d ? Wn(i, c) && ur(t, "set", n, i) : ur(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = nt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ur(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Jn(n) || !dh.has(n)) && Jt(t, "has", n), i;
  }
  ownKeys(t) {
    return Jt(
      t,
      "iterate",
      Ue(t) ? "length" : Xr
    ), Reflect.ownKeys(t);
  }
}
class E0 extends hh {
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
const O0 = /* @__PURE__ */ new mh(), R0 = /* @__PURE__ */ new E0(), F0 = /* @__PURE__ */ new mh(!0);
const rc = (e) => e, xo = (e) => Reflect.getPrototypeOf(e);
function L0(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ tt(a), u = Li(c), d = e === "entries" || e === Symbol.iterator && u, p = e === "keys" && u, y = a[e](...i), _ = n ? rc : t ? Bi : Rn;
    return !t && Jt(
      c,
      "iterate",
      p ? nc : Xr
    ), en(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: w, done: S } = y.next();
          return S ? { value: w, done: S } : {
            value: d ? [_(w[0]), _(w[1])] : _(w),
            done: S
          };
        }
      }
    );
  };
}
function wo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $0(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ tt(c), d = /* @__PURE__ */ tt(a);
      e || (Wn(a, d) && Jt(u, "get", a), Jt(u, "get", d));
      const { has: p } = xo(u), y = t ? rc : e ? Bi : Rn;
      if (p.call(u, a))
        return y(c.get(a));
      if (p.call(u, d))
        return y(c.get(d));
      c !== u && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Jt(/* @__PURE__ */ tt(a), "iterate", Xr), a.size;
    },
    has(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ tt(c), d = /* @__PURE__ */ tt(a);
      return e || (Wn(a, d) && Jt(u, "has", a), Jt(u, "has", d)), a === d ? c.has(a) : c.has(a) || c.has(d);
    },
    forEach(a, c) {
      const u = this, d = u.__v_raw, p = /* @__PURE__ */ tt(d), y = t ? rc : e ? Bi : Rn;
      return !e && Jt(p, "iterate", Xr), d.forEach((_, w) => a.call(c, y(_), y(w), u));
    }
  };
  return en(
    n,
    e ? {
      add: wo("add"),
      set: wo("set"),
      delete: wo("delete"),
      clear: wo("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ tt(this), u = xo(c), d = /* @__PURE__ */ tt(a), p = !t && !/* @__PURE__ */ Nn(a) && !/* @__PURE__ */ gr(a) ? d : a;
        return u.has.call(c, p) || Wn(a, p) && u.has.call(c, a) || Wn(d, p) && u.has.call(c, d) || (c.add(p), ur(c, "add", p, p)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ Nn(c) && !/* @__PURE__ */ gr(c) && (c = /* @__PURE__ */ tt(c));
        const u = /* @__PURE__ */ tt(this), { has: d, get: p } = xo(u);
        let y = d.call(u, a);
        y || (a = /* @__PURE__ */ tt(a), y = d.call(u, a));
        const _ = p.call(u, a);
        return u.set(a, c), y ? Wn(c, _) && ur(u, "set", a, c) : ur(u, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ tt(this), { has: u, get: d } = xo(c);
        let p = u.call(c, a);
        p || (a = /* @__PURE__ */ tt(a), p = u.call(c, a)), d && d.call(c, a);
        const y = c.delete(a);
        return p && ur(c, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ tt(this), c = a.size !== 0, u = a.clear();
        return c && ur(
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
    n[a] = L0(a, e, t);
  }), n;
}
function Ic(e, t) {
  const n = $0(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    nt(n, a) && a in i ? n : i,
    a,
    c
  );
}
const z0 = {
  get: /* @__PURE__ */ Ic(!1, !1)
}, j0 = {
  get: /* @__PURE__ */ Ic(!1, !0)
}, V0 = {
  get: /* @__PURE__ */ Ic(!0, !1)
};
const ph = /* @__PURE__ */ new WeakMap(), gh = /* @__PURE__ */ new WeakMap(), bh = /* @__PURE__ */ new WeakMap(), H0 = /* @__PURE__ */ new WeakMap();
function U0(e) {
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
function B0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : U0(m0(e));
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return /* @__PURE__ */ gr(e) ? e : Dc(
    e,
    !1,
    O0,
    z0,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function G0(e) {
  return Dc(
    e,
    !1,
    F0,
    j0,
    gh
  );
}
// @__NO_SIDE_EFFECTS__
function ic(e) {
  return Dc(
    e,
    !0,
    R0,
    V0,
    bh
  );
}
function Dc(e, t, n, i, a) {
  if (!lt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = B0(e);
  if (c === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const d = new Proxy(
    e,
    c === 2 ? i : n
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return /* @__PURE__ */ gr(e) ? /* @__PURE__ */ Jr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Nn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ec(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ tt(t) : e;
}
function K0(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && eh(e, "__v_skip", !0), e;
}
const Rn = (e) => lt(e) ? /* @__PURE__ */ Cs(e) : e, Bi = (e) => lt(e) ? /* @__PURE__ */ ic(e) : e;
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  return W0(e, !1);
}
function W0(e, t) {
  return /* @__PURE__ */ Qt(e) ? e : new Y0(e, t);
}
class Y0 {
  constructor(t, n) {
    this.dep = new Tc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ tt(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Nn(t) || /* @__PURE__ */ gr(t);
    t = i ? t : /* @__PURE__ */ tt(t), Wn(t, n) && (this._rawValue = t, this._value = i ? t : Rn(t), this.dep.trigger());
  }
}
function Cr(e) {
  return /* @__PURE__ */ Qt(e) ? e.value : e;
}
const q0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Cr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Qt(a) && !/* @__PURE__ */ Qt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function yh(e) {
  return /* @__PURE__ */ Jr(e) ? e : new Proxy(e, q0);
}
class X0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Tc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ia - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return oh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ch(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function J0(e, t, n = !1) {
  let i, a;
  return Ge(e) ? i = e : (i = e.get, a = e.set), new X0(i, a, n);
}
const So = {}, is = /* @__PURE__ */ new WeakMap();
let Wr;
function Z0(e, t = !1, n = Wr) {
  if (n) {
    let i = is.get(n);
    i || is.set(n, i = []), i.push(e);
  }
}
function Q0(e, t, n = dt) {
  const { immediate: i, deep: a, once: c, scheduler: u, augmentJob: d, call: p } = n, y = (D) => a ? D : /* @__PURE__ */ Nn(D) || a === !1 || a === 0 ? fr(D, 1) : fr(D);
  let _, w, S, A, v = !1, F = !1;
  if (/* @__PURE__ */ Qt(e) ? (w = () => e.value, v = /* @__PURE__ */ Nn(e)) : /* @__PURE__ */ Jr(e) ? (w = () => y(e), v = !0) : Ue(e) ? (F = !0, v = e.some((D) => /* @__PURE__ */ Jr(D) || /* @__PURE__ */ Nn(D)), w = () => e.map((D) => {
    if (/* @__PURE__ */ Qt(D))
      return D.value;
    if (/* @__PURE__ */ Jr(D))
      return y(D);
    if (Ge(D))
      return p ? p(D, 2) : D();
  })) : Ge(e) ? t ? w = p ? () => p(e, 2) : e : w = () => {
    if (S) {
      mr();
      try {
        S();
      } finally {
        pr();
      }
    }
    const D = Wr;
    Wr = _;
    try {
      return p ? p(e, 3, [A]) : e(A);
    } finally {
      Wr = D;
    }
  } : w = Xn, t && a) {
    const D = w, L = a === !0 ? 1 / 0 : a;
    w = () => fr(D(), L);
  }
  const V = k0(), j = () => {
    _.stop(), V && V.active && Mc(V.effects, _);
  };
  if (c && t) {
    const D = t;
    t = (...L) => {
      D(...L), j();
    };
  }
  let k = F ? new Array(e.length).fill(So) : So;
  const E = (D) => {
    if (!(!(_.flags & 1) || !_.dirty && !D))
      if (t) {
        const L = _.run();
        if (a || v || (F ? L.some((W, R) => Wn(W, k[R])) : Wn(L, k))) {
          S && S();
          const W = Wr;
          Wr = _;
          try {
            const R = [
              L,
              // pass undefined as the old value when it's changed for the first time
              k === So ? void 0 : F && k[0] === So ? [] : k,
              A
            ];
            k = L, p ? p(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            Wr = W;
          }
        }
      } else
        _.run();
  };
  return d && d(E), _ = new ih(w), _.scheduler = u ? () => u(E, !1) : E, A = (D) => Z0(D, !1, _), S = _.onStop = () => {
    const D = is.get(_);
    if (D) {
      if (p)
        p(D, 4);
      else
        for (const L of D) L();
      is.delete(_);
    }
  }, t ? i ? E(!0) : k = _.run() : u ? u(E.bind(null, !0), !0) : _.run(), j.pause = _.pause.bind(_), j.resume = _.resume.bind(_), j.stop = j, j;
}
function fr(e, t = 1 / 0, n) {
  if (t <= 0 || !lt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Qt(e))
    fr(e.value, t, n);
  else if (Ue(e))
    for (let i = 0; i < e.length; i++)
      fr(e[i], t, n);
  else if (Xd(e) || Li(e))
    e.forEach((i) => {
      fr(i, t, n);
    });
  else if (Qd(e)) {
    for (const i in e)
      fr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && fr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ua(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Ts(a, t, n);
  }
}
function Zn(e, t, n, i) {
  if (Ge(e)) {
    const a = Ua(e, t, n, i);
    return a && Jd(a) && a.catch((c) => {
      Ts(c, t, n);
    }), a;
  }
  if (Ue(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Zn(e[c], t, n, i));
    return a;
  }
}
function Ts(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = t && t.appContext.config || dt;
  if (t) {
    let d = t.parent;
    const p = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const _ = d.ec;
      if (_) {
        for (let w = 0; w < _.length; w++)
          if (_[w](e, p, y) === !1)
            return;
      }
      d = d.parent;
    }
    if (c) {
      mr(), Ua(c, null, 10, [
        e,
        p,
        y
      ]), pr();
      return;
    }
  }
  eb(e, n, a, i, u);
}
function eb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const rn = [];
let Un = -1;
const $i = [];
let Pr = null, Ii = 0;
const vh = /* @__PURE__ */ Promise.resolve();
let as = null;
function Oc(e) {
  const t = as || vh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tb(e) {
  let t = Un + 1, n = rn.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = rn[i], c = Ea(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Rc(e) {
  if (!(e.flags & 1)) {
    const t = Ea(e), n = rn[rn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ea(n) ? rn.push(e) : rn.splice(tb(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  as || (as = vh.then(wh));
}
function nb(e) {
  Ue(e) ? $i.push(...e) : Pr && e.id === -1 ? Pr.splice(Ii + 1, 0, e) : e.flags & 1 || ($i.push(e), e.flags |= 1), _h();
}
function kf(e, t, n = Un + 1) {
  for (; n < rn.length; n++) {
    const i = rn[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      rn.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function xh(e) {
  if ($i.length) {
    const t = [...new Set($i)].sort(
      (n, i) => Ea(n) - Ea(i)
    );
    if ($i.length = 0, Pr) {
      Pr.push(...t);
      return;
    }
    for (Pr = t, Ii = 0; Ii < Pr.length; Ii++) {
      const n = Pr[Ii];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pr = null, Ii = 0;
  }
}
const Ea = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wh(e) {
  try {
    for (Un = 0; Un < rn.length; Un++) {
      const t = rn[Un];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ua(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Un < rn.length; Un++) {
      const t = rn[Un];
      t && (t.flags &= -2);
    }
    Un = -1, rn.length = 0, xh(), as = null, (rn.length || $i.length) && wh();
  }
}
let yn = null, Sh = null;
function os(e) {
  const t = yn;
  return yn = e, Sh = e && e.type.__scopeId || null, t;
}
function Mh(e, t = yn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && $f(-1);
    const c = os(t);
    let u;
    try {
      u = e(...a);
    } finally {
      os(c), i._d && $f(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ba(e, t) {
  if (yn === null)
    return e;
  const n = Os(yn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, u, d, p = dt] = t[a];
    c && (Ge(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && fr(u), i.push({
      dir: c,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: d,
      modifiers: p
    }));
  }
  return e;
}
function Hr(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    c && (d.oldValue = c[u].value);
    let p = d.dir[i];
    p && (mr(), Zn(p, n, 8, [
      e.el,
      d,
      e,
      t
    ]), pr());
  }
}
function rb(e, t) {
  if (Zt) {
    let n = Zt.provides;
    const i = Zt.parent && Zt.parent.provides;
    i === n && (n = Zt.provides = Object.create(i)), n[e] = t;
  }
}
function Ko(e, t, n = !1) {
  const i = ny();
  if (i || ji) {
    let a = ji ? ji._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ge(t) ? t.call(i && i.proxy) : t;
  }
}
const ib = /* @__PURE__ */ Symbol.for("v-scx"), ab = () => Ko(ib);
function zi(e, t, n) {
  return Nh(e, t, n);
}
function Nh(e, t, n = dt) {
  const { immediate: i, deep: a, flush: c, once: u } = n, d = en({}, n), p = t && i || !t && c !== "post";
  let y;
  if (Ra) {
    if (c === "sync") {
      const A = ab();
      y = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!p) {
      const A = () => {
      };
      return A.stop = Xn, A.resume = Xn, A.pause = Xn, A;
    }
  }
  const _ = Zt;
  d.call = (A, v, F) => Zn(A, _, v, F);
  let w = !1;
  c === "post" ? d.scheduler = (A) => {
    un(A, _ && _.suspense);
  } : c !== "sync" && (w = !0, d.scheduler = (A, v) => {
    v ? A() : Rc(A);
  }), d.augmentJob = (A) => {
    t && (A.flags |= 4), w && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = Q0(e, t, d);
  return Ra && (y ? y.push(S) : p && S()), S;
}
function ob(e, t, n) {
  const i = this.proxy, a = At(e) ? e.includes(".") ? kh(i, e) : () => i[e] : e.bind(i, i);
  let c;
  Ge(t) ? c = t : (c = t.handler, n = t);
  const u = Ga(this), d = Nh(a, c.bind(i), n);
  return u(), d;
}
function kh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const sb = /* @__PURE__ */ Symbol("_vte"), lb = (e) => e.__isTeleport, cb = /* @__PURE__ */ Symbol("_leaveCb");
function Fc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Fc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ph(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pf(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ss = /* @__PURE__ */ new WeakMap();
function wa(e, t, n, i, a = !1) {
  if (Ue(e)) {
    e.forEach(
      (F, V) => wa(
        F,
        t && (Ue(t) ? t[V] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Sa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && wa(e, t, n, i.component.subTree);
    return;
  }
  const c = i.shapeFlag & 4 ? Os(i.component) : i.el, u = a ? null : c, { i: d, r: p } = e, y = t && t.r, _ = d.refs === dt ? d.refs = {} : d.refs, w = d.setupState, S = /* @__PURE__ */ tt(w), A = w === dt ? qd : (F) => Pf(_, F) ? !1 : nt(S, F), v = (F, V) => !(V && Pf(_, V));
  if (y != null && y !== p) {
    if (Af(t), At(y))
      _[y] = null, A(y) && (w[y] = null);
    else if (/* @__PURE__ */ Qt(y)) {
      const F = t;
      v(y, F.k) && (y.value = null), F.k && (_[F.k] = null);
    }
  }
  if (Ge(p))
    Ua(p, d, 12, [u, _]);
  else {
    const F = At(p), V = /* @__PURE__ */ Qt(p);
    if (F || V) {
      const j = () => {
        if (e.f) {
          const k = F ? A(p) ? w[p] : _[p] : v() || !e.k ? p.value : _[e.k];
          if (a)
            Ue(k) && Mc(k, c);
          else if (Ue(k))
            k.includes(c) || k.push(c);
          else if (F)
            _[p] = [c], A(p) && (w[p] = _[p]);
          else {
            const E = [c];
            v(p, e.k) && (p.value = E), e.k && (_[e.k] = E);
          }
        } else F ? (_[p] = u, A(p) && (w[p] = u)) : V && (v(p, e.k) && (p.value = u), e.k && (_[e.k] = u));
      };
      if (u) {
        const k = () => {
          j(), ss.delete(e);
        };
        k.id = -1, ss.set(e, k), un(k, n);
      } else
        Af(e), j();
    }
  }
}
function Af(e) {
  const t = ss.get(e);
  t && (t.flags |= 8, ss.delete(e));
}
Ps().requestIdleCallback;
Ps().cancelIdleCallback;
const Sa = (e) => !!e.type.__asyncLoader, Ah = (e) => e.type.__isKeepAlive;
function ub(e, t) {
  Ch(e, "a", t);
}
function fb(e, t) {
  Ch(e, "da", t);
}
function Ch(e, t, n = Zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Is(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Ah(a.parent.vnode) && db(i, t, n, a), a = a.parent;
  }
}
function db(e, t, n, i) {
  const a = Is(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Ih(() => {
    Mc(i[t], a);
  }, n);
}
function Is(e, t, n = Zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...u) => {
      mr();
      const d = Ga(n), p = Zn(t, n, e, u);
      return d(), pr(), p;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const br = (e) => (t, n = Zt) => {
  (!Ra || e === "sp") && Is(e, (...i) => t(...i), n);
}, hb = br("bm"), Th = br("m"), mb = br(
  "bu"
), pb = br("u"), Lc = br(
  "bum"
), Ih = br("um"), gb = br(
  "sp"
), bb = br("rtg"), yb = br("rtc");
function vb(e, t = Zt) {
  Is("ec", e, t);
}
const _b = "components", Dh = /* @__PURE__ */ Symbol.for("v-ndc");
function xb(e) {
  return At(e) ? wb(_b, e, !1) || e : e || Dh;
}
function wb(e, t, n = !0, i = !1) {
  const a = yn || Zt;
  if (a) {
    const c = a.type;
    {
      const d = sy(
        c,
        !1
      );
      if (d && (d === t || d === on(t) || d === ks(on(t))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cf(a[e] || c[e], t) || // global registration
      Cf(a.appContext[e], t)
    );
    return !u && i ? c : u;
  }
}
function Cf(e, t) {
  return e && (e[t] || e[on(t)] || e[ks(on(t))]);
}
function Ft(e, t, n, i) {
  let a;
  const c = n, u = Ue(e);
  if (u || At(e)) {
    const d = u && /* @__PURE__ */ Jr(e);
    let p = !1, y = !1;
    d && (p = !/* @__PURE__ */ Nn(e), y = /* @__PURE__ */ gr(e), e = As(e)), a = new Array(e.length);
    for (let _ = 0, w = e.length; _ < w; _++)
      a[_] = t(
        p ? y ? Bi(Rn(e[_])) : Rn(e[_]) : e[_],
        _,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, c);
  } else if (lt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, p) => t(d, p, void 0, c)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let p = 0, y = d.length; p < y; p++) {
        const _ = d[p];
        a[p] = t(e[_], _, p, c);
      }
    }
  else
    a = [];
  return a;
}
const ac = (e) => e ? Qh(e) ? Os(e) : ac(e.parent) : null, Ma = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ en(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ac(e.parent),
    $root: (e) => ac(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Oh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Rc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Oc.bind(e.proxy)),
    $watch: (e) => ob.bind(e)
  })
), Il = (e, t) => e !== dt && !e.__isScriptSetup && nt(e, t), Sb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: c, accessCache: u, type: d, appContext: p } = e;
    if (t[0] !== "$") {
      const S = u[t];
      if (S !== void 0)
        switch (S) {
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
        if (Il(i, t))
          return u[t] = 1, i[t];
        if (a !== dt && nt(a, t))
          return u[t] = 2, a[t];
        if (nt(c, t))
          return u[t] = 3, c[t];
        if (n !== dt && nt(n, t))
          return u[t] = 4, n[t];
        oc && (u[t] = 0);
      }
    }
    const y = Ma[t];
    let _, w;
    if (y)
      return t === "$attrs" && Jt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (_ = d.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== dt && nt(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      w = p.config.globalProperties, nt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: c } = e;
    return Il(a, t) ? (a[t] = n, !0) : i !== dt && nt(i, t) ? (i[t] = n, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: u }
  }, d) {
    let p;
    return !!(n[d] || e !== dt && d[0] !== "$" && nt(e, d) || Il(t, d) || nt(c, d) || nt(i, d) || nt(Ma, d) || nt(a.config.globalProperties, d) || (p = u.__cssModules) && p[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Tf(e) {
  return Ue(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let oc = !0;
function Mb(e) {
  const t = Oh(e), n = e.proxy, i = e.ctx;
  oc = !1, t.beforeCreate && If(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: u,
    watch: d,
    provide: p,
    inject: y,
    // lifecycle
    created: _,
    beforeMount: w,
    mounted: S,
    beforeUpdate: A,
    updated: v,
    activated: F,
    deactivated: V,
    beforeDestroy: j,
    beforeUnmount: k,
    destroyed: E,
    unmounted: D,
    render: L,
    renderTracked: W,
    renderTriggered: R,
    errorCaptured: J,
    serverPrefetch: ue,
    // public API
    expose: U,
    inheritAttrs: ve,
    // assets
    components: xe,
    directives: C,
    filters: we
  } = t;
  if (y && Nb(y, i, null), u)
    for (const $ in u) {
      const X = u[$];
      Ge(X) && (i[$] = X.bind(n));
    }
  if (a) {
    const $ = a.call(n, n);
    lt($) && (e.data = /* @__PURE__ */ Cs($));
  }
  if (oc = !0, c)
    for (const $ in c) {
      const X = c[$], _e = Ge(X) ? X.bind(n, n) : Ge(X.get) ? X.get.bind(n, n) : Xn, $e = !Ge(X) && Ge(X.set) ? X.set.bind(n) : Xn, ze = _t({
        get: _e,
        set: $e
      });
      Object.defineProperty(i, $, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (De) => ze.value = De
      });
    }
  if (d)
    for (const $ in d)
      Eh(d[$], i, n, $);
  if (p) {
    const $ = Ge(p) ? p.call(n) : p;
    Reflect.ownKeys($).forEach((X) => {
      rb(X, $[X]);
    });
  }
  _ && If(_, e, "c");
  function ye($, X) {
    Ue(X) ? X.forEach((_e) => $(_e.bind(n))) : X && $(X.bind(n));
  }
  if (ye(hb, w), ye(Th, S), ye(mb, A), ye(pb, v), ye(ub, F), ye(fb, V), ye(vb, J), ye(yb, W), ye(bb, R), ye(Lc, k), ye(Ih, D), ye(gb, ue), Ue(U))
    if (U.length) {
      const $ = e.exposed || (e.exposed = {});
      U.forEach((X) => {
        Object.defineProperty($, X, {
          get: () => n[X],
          set: (_e) => n[X] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === Xn && (e.render = L), ve != null && (e.inheritAttrs = ve), xe && (e.components = xe), C && (e.directives = C), ue && Ph(e);
}
function Nb(e, t, n = Xn) {
  Ue(e) && (e = sc(e));
  for (const i in e) {
    const a = e[i];
    let c;
    lt(a) ? "default" in a ? c = Ko(
      a.from || i,
      a.default,
      !0
    ) : c = Ko(a.from || i) : c = Ko(a), /* @__PURE__ */ Qt(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : t[i] = c;
  }
}
function If(e, t, n) {
  Zn(
    Ue(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Eh(e, t, n, i) {
  let a = i.includes(".") ? kh(n, i) : () => n[i];
  if (At(e)) {
    const c = t[e];
    Ge(c) && zi(a, c);
  } else if (Ge(e))
    zi(a, e.bind(n));
  else if (lt(e))
    if (Ue(e))
      e.forEach((c) => Eh(c, t, n, i));
    else {
      const c = Ge(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ge(c) && zi(a, c, e);
    }
}
function Oh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = e.appContext, d = c.get(t);
  let p;
  return d ? p = d : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (y) => ls(p, y, u, !0)
  ), ls(p, t, u)), lt(t) && c.set(t, p), p;
}
function ls(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && ls(e, c, n, !0), a && a.forEach(
    (u) => ls(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const d = kb[u] || n && n[u];
      e[u] = d ? d(e[u], t[u]) : t[u];
    }
  return e;
}
const kb = {
  data: Df,
  props: Ef,
  emits: Ef,
  // objects
  methods: pa,
  computed: pa,
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
  components: pa,
  directives: pa,
  // watch
  watch: Ab,
  // provide / inject
  provide: Df,
  inject: Pb
};
function Df(e, t) {
  return t ? e ? function() {
    return en(
      Ge(e) ? e.call(this, this) : e,
      Ge(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Pb(e, t) {
  return pa(sc(e), sc(t));
}
function sc(e) {
  if (Ue(e)) {
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
function pa(e, t) {
  return e ? en(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ef(e, t) {
  return e ? Ue(e) && Ue(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : en(
    /* @__PURE__ */ Object.create(null),
    Tf(e),
    Tf(t ?? {})
  ) : t;
}
function Ab(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = en(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = nn(e[i], t[i]);
  return n;
}
function Rh() {
  return {
    app: null,
    config: {
      isNativeTag: qd,
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
function Tb(e, t) {
  return function(i, a = null) {
    Ge(i) || (i = en({}, i)), a != null && !lt(a) && (a = null);
    const c = Rh(), u = /* @__PURE__ */ new WeakSet(), d = [];
    let p = !1;
    const y = c.app = {
      _uid: Cb++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: cy,
      get config() {
        return c.config;
      },
      set config(_) {
      },
      use(_, ...w) {
        return u.has(_) || (_ && Ge(_.install) ? (u.add(_), _.install(y, ...w)) : Ge(_) && (u.add(_), _(y, ...w))), y;
      },
      mixin(_) {
        return c.mixins.includes(_) || c.mixins.push(_), y;
      },
      component(_, w) {
        return w ? (c.components[_] = w, y) : c.components[_];
      },
      directive(_, w) {
        return w ? (c.directives[_] = w, y) : c.directives[_];
      },
      mount(_, w, S) {
        if (!p) {
          const A = y._ceVNode || qe(i, a);
          return A.appContext = c, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), p = !0, y._container = _, _.__vue_app__ = y, Os(A.component);
        }
      },
      onUnmount(_) {
        d.push(_);
      },
      unmount() {
        p && (Zn(
          d,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(_, w) {
        return c.provides[_] = w, y;
      },
      runWithContext(_) {
        const w = ji;
        ji = y;
        try {
          return _();
        } finally {
          ji = w;
        }
      }
    };
    return y;
  };
}
let ji = null;
const Ib = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${on(t)}Modifiers`] || e[`${si(t)}Modifiers`];
function Db(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || dt;
  let a = n;
  const c = t.startsWith("update:"), u = c && Ib(i, t.slice(7));
  u && (u.trim && (a = n.map((_) => At(_) ? _.trim() : _)), u.number && (a = n.map(b0)));
  let d, p = i[d = Nl(t)] || // also try camelCase event handler (#2249)
  i[d = Nl(on(t))];
  !p && c && (p = i[d = Nl(si(t))]), p && Zn(
    p,
    e,
    6,
    a
  );
  const y = i[d + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Zn(
      y,
      e,
      6,
      a
    );
  }
}
const Eb = /* @__PURE__ */ new WeakMap();
function Fh(e, t, n = !1) {
  const i = n ? Eb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let u = {}, d = !1;
  if (!Ge(e)) {
    const p = (y) => {
      const _ = Fh(y, t, !0);
      _ && (d = !0, en(u, _));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !c && !d ? (lt(e) && i.set(e, null), null) : (Ue(c) ? c.forEach((p) => u[p] = null) : en(u, c), lt(e) && i.set(e, u), u);
}
function Ds(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, si(t)) || nt(e, t));
}
function Of(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: u,
    attrs: d,
    emit: p,
    render: y,
    renderCache: _,
    props: w,
    data: S,
    setupState: A,
    ctx: v,
    inheritAttrs: F
  } = e, V = os(e);
  let j, k;
  try {
    if (n.shapeFlag & 4) {
      const D = a || i, L = D;
      j = Gn(
        y.call(
          L,
          D,
          _,
          w,
          A,
          S,
          v
        )
      ), k = d;
    } else {
      const D = t;
      j = Gn(
        D.length > 1 ? D(
          w,
          { attrs: d, slots: u, emit: p }
        ) : D(
          w,
          null
        )
      ), k = t.props ? d : Ob(d);
    }
  } catch (D) {
    Na.length = 0, Ts(D, e, 1), j = qe(Dr);
  }
  let E = j;
  if (k && F !== !1) {
    const D = Object.keys(k), { shapeFlag: L } = E;
    D.length && L & 7 && (c && D.some(Ms) && (k = Rb(
      k,
      c
    )), E = Gi(E, k, !1, !0));
  }
  return n.dirs && (E = Gi(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Fc(E, n.transition), j = E, os(V), j;
}
const Ob = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rb = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ms(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Fb(e, t, n) {
  const { props: i, children: a, component: c } = e, { props: u, children: d, patchFlag: p } = t, y = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Rf(i, u, y) : !!u;
    if (p & 8) {
      const _ = t.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        const S = _[w];
        if (Lh(u, i, S) && !Ds(y, S))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === u ? !1 : i ? u ? Rf(i, u, y) : !0 : !!u;
  return !1;
}
function Rf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if (Lh(t, e, c) && !Ds(n, c))
      return !0;
  }
  return !1;
}
function Lh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && lt(i) && lt(a) ? !kc(i, a) : i !== a;
}
function Lb({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const $h = {}, zh = () => Object.create($h), jh = (e) => Object.getPrototypeOf(e) === $h;
function $b(e, t, n, i = !1) {
  const a = {}, c = zh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Vh(e, t, a, c);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ G0(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function zb(e, t, n, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: u }
  } = e, d = /* @__PURE__ */ tt(a), [p] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = e.vnode.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        let S = _[w];
        if (Ds(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (p)
          if (nt(c, S))
            A !== c[S] && (c[S] = A, y = !0);
          else {
            const v = on(S);
            a[v] = lc(
              p,
              d,
              v,
              A,
              e,
              !1
            );
          }
        else
          A !== c[S] && (c[S] = A, y = !0);
      }
    }
  } else {
    Vh(e, t, a, c) && (y = !0);
    let _;
    for (const w in d)
      (!t || // for camelCase
      !nt(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = si(w)) === w || !nt(t, _))) && (p ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[w] = lc(
        p,
        d,
        w,
        void 0,
        e,
        !0
      )) : delete a[w]);
    if (c !== d)
      for (const w in c)
        (!t || !nt(t, w)) && (delete c[w], y = !0);
  }
  y && ur(e.attrs, "set", "");
}
function Vh(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let u = !1, d;
  if (t)
    for (let p in t) {
      if (va(p))
        continue;
      const y = t[p];
      let _;
      a && nt(a, _ = on(p)) ? !c || !c.includes(_) ? n[_] = y : (d || (d = {}))[_] = y : Ds(e.emitsOptions, p) || (!(p in i) || y !== i[p]) && (i[p] = y, u = !0);
    }
  if (c) {
    const p = /* @__PURE__ */ tt(n), y = d || dt;
    for (let _ = 0; _ < c.length; _++) {
      const w = c[_];
      n[w] = lc(
        a,
        p,
        w,
        y[w],
        e,
        !nt(y, w)
      );
    }
  }
  return u;
}
function lc(e, t, n, i, a, c) {
  const u = e[n];
  if (u != null) {
    const d = nt(u, "default");
    if (d && i === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Ge(p)) {
        const { propsDefaults: y } = a;
        if (n in y)
          i = y[n];
        else {
          const _ = Ga(a);
          i = y[n] = p.call(
            null,
            t
          ), _();
        }
      } else
        i = p;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !d ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === si(n)) && (i = !0));
  }
  return i;
}
const jb = /* @__PURE__ */ new WeakMap();
function Hh(e, t, n = !1) {
  const i = n ? jb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, u = {}, d = [];
  let p = !1;
  if (!Ge(e)) {
    const _ = (w) => {
      p = !0;
      const [S, A] = Hh(w, t, !0);
      en(u, S), A && d.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!c && !p)
    return lt(e) && i.set(e, Fi), Fi;
  if (Ue(c))
    for (let _ = 0; _ < c.length; _++) {
      const w = on(c[_]);
      Ff(w) && (u[w] = dt);
    }
  else if (c)
    for (const _ in c) {
      const w = on(_);
      if (Ff(w)) {
        const S = c[_], A = u[w] = Ue(S) || Ge(S) ? { type: S } : en({}, S), v = A.type;
        let F = !1, V = !0;
        if (Ue(v))
          for (let j = 0; j < v.length; ++j) {
            const k = v[j], E = Ge(k) && k.name;
            if (E === "Boolean") {
              F = !0;
              break;
            } else E === "String" && (V = !1);
          }
        else
          F = Ge(v) && v.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = F, A[
          1
          /* shouldCastTrue */
        ] = V, (F || nt(A, "default")) && d.push(w);
      }
    }
  const y = [u, d];
  return lt(e) && i.set(e, y), y;
}
function Ff(e) {
  return e[0] !== "$" && !va(e);
}
const $c = (e) => e === "_" || e === "_ctx" || e === "$stable", zc = (e) => Ue(e) ? e.map(Gn) : [Gn(e)], Vb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Mh((...a) => zc(t(...a)), n);
  return i._c = !1, i;
}, Uh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if ($c(a)) continue;
    const c = e[a];
    if (Ge(c))
      t[a] = Vb(a, c, i);
    else if (c != null) {
      const u = zc(c);
      t[a] = () => u;
    }
  }
}, Bh = (e, t) => {
  const n = zc(t);
  e.slots.default = () => n;
}, Gh = (e, t, n) => {
  for (const i in t)
    (n || !$c(i)) && (e[i] = t[i]);
}, Hb = (e, t, n) => {
  const i = e.slots = zh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Gh(i, t, n), n && eh(i, "_", a, !0)) : Uh(t, i);
  } else t && Bh(e, t);
}, Ub = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, u = dt;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? c = !1 : Gh(a, t, n) : (c = !t.$stable, Uh(t, a)), u = t;
  } else t && (Bh(e, t), u = { default: 1 });
  if (c)
    for (const d in a)
      !$c(d) && u[d] == null && delete a[d];
}, un = Yb;
function Bb(e) {
  return Gb(e);
}
function Gb(e, t) {
  const n = Ps();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: c,
    createElement: u,
    createText: d,
    createComment: p,
    setText: y,
    setElementText: _,
    parentNode: w,
    nextSibling: S,
    setScopeId: A = Xn,
    insertStaticContent: v
  } = e, F = (O, H, Q, pe = null, I = null, K = null, ne = void 0, se = null, ae = !!H.dynamicChildren) => {
    if (O === H)
      return;
    O && !la(O, H) && (pe = Ct(O), De(O, I, K, !0), O = null), H.patchFlag === -2 && (ae = !1, H.dynamicChildren = null);
    const { type: f, ref: me, shapeFlag: ge } = H;
    switch (f) {
      case Es:
        V(O, H, Q, pe);
        break;
      case Dr:
        j(O, H, Q, pe);
        break;
      case El:
        O == null && k(H, Q, pe, ne);
        break;
      case Ze:
        xe(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        break;
      default:
        ge & 1 ? L(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        ) : ge & 6 ? C(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        ) : (ge & 64 || ge & 128) && f.process(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae,
          Kt
        );
    }
    me != null && I ? wa(me, O && O.ref, K, H || O, !H) : me == null && O && O.ref != null && wa(O.ref, null, K, O, !0);
  }, V = (O, H, Q, pe) => {
    if (O == null)
      i(
        H.el = d(H.children),
        Q,
        pe
      );
    else {
      const I = H.el = O.el;
      H.children !== O.children && y(I, H.children);
    }
  }, j = (O, H, Q, pe) => {
    O == null ? i(
      H.el = p(H.children || ""),
      Q,
      pe
    ) : H.el = O.el;
  }, k = (O, H, Q, pe) => {
    [O.el, O.anchor] = v(
      O.children,
      H,
      Q,
      pe,
      O.el,
      O.anchor
    );
  }, E = ({ el: O, anchor: H }, Q, pe) => {
    let I;
    for (; O && O !== H; )
      I = S(O), i(O, Q, pe), O = I;
    i(H, Q, pe);
  }, D = ({ el: O, anchor: H }) => {
    let Q;
    for (; O && O !== H; )
      Q = S(O), a(O), O = Q;
    a(H);
  }, L = (O, H, Q, pe, I, K, ne, se, ae) => {
    if (H.type === "svg" ? ne = "svg" : H.type === "math" && (ne = "mathml"), O == null)
      W(
        H,
        Q,
        pe,
        I,
        K,
        ne,
        se,
        ae
      );
    else {
      const f = O.el && O.el._isVueCE ? O.el : null;
      try {
        f && f._beginPatch(), ue(
          O,
          H,
          I,
          K,
          ne,
          se,
          ae
        );
      } finally {
        f && f._endPatch();
      }
    }
  }, W = (O, H, Q, pe, I, K, ne, se) => {
    let ae, f;
    const { props: me, shapeFlag: ge, transition: Se, dirs: Ie } = O;
    if (ae = O.el = u(
      O.type,
      K,
      me && me.is,
      me
    ), ge & 8 ? _(ae, O.children) : ge & 16 && J(
      O.children,
      ae,
      null,
      pe,
      I,
      Dl(O, K),
      ne,
      se
    ), Ie && Hr(O, null, pe, "created"), R(ae, O, O.scopeId, ne, pe), me) {
      for (const Ce in me)
        Ce !== "value" && !va(Ce) && c(ae, Ce, null, me[Ce], K, pe);
      "value" in me && c(ae, "value", null, me.value, K), (f = me.onVnodeBeforeMount) && zn(f, pe, O);
    }
    Ie && Hr(O, null, pe, "beforeMount");
    const Re = Kb(I, Se);
    Re && Se.beforeEnter(ae), i(ae, H, Q), ((f = me && me.onVnodeMounted) || Re || Ie) && un(() => {
      try {
        f && zn(f, pe, O), Re && Se.enter(ae), Ie && Hr(O, null, pe, "mounted");
      } finally {
      }
    }, I);
  }, R = (O, H, Q, pe, I) => {
    if (Q && A(O, Q), pe)
      for (let K = 0; K < pe.length; K++)
        A(O, pe[K]);
    if (I) {
      let K = I.subTree;
      if (H === K || qh(K.type) && (K.ssContent === H || K.ssFallback === H)) {
        const ne = I.vnode;
        R(
          O,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          I.parent
        );
      }
    }
  }, J = (O, H, Q, pe, I, K, ne, se, ae = 0) => {
    for (let f = ae; f < O.length; f++) {
      const me = O[f] = se ? cr(O[f]) : Gn(O[f]);
      F(
        null,
        me,
        H,
        Q,
        pe,
        I,
        K,
        ne,
        se
      );
    }
  }, ue = (O, H, Q, pe, I, K, ne) => {
    const se = H.el = O.el;
    let { patchFlag: ae, dynamicChildren: f, dirs: me } = H;
    ae |= O.patchFlag & 16;
    const ge = O.props || dt, Se = H.props || dt;
    let Ie;
    if (Q && Ur(Q, !1), (Ie = Se.onVnodeBeforeUpdate) && zn(Ie, Q, H, O), me && Hr(H, O, Q, "beforeUpdate"), Q && Ur(Q, !0), (ge.innerHTML && Se.innerHTML == null || ge.textContent && Se.textContent == null) && _(se, ""), f ? U(
      O.dynamicChildren,
      f,
      se,
      Q,
      pe,
      Dl(H, I),
      K
    ) : ne || X(
      O,
      H,
      se,
      null,
      Q,
      pe,
      Dl(H, I),
      K,
      !1
    ), ae > 0) {
      if (ae & 16)
        ve(se, ge, Se, Q, I);
      else if (ae & 2 && ge.class !== Se.class && c(se, "class", null, Se.class, I), ae & 4 && c(se, "style", ge.style, Se.style, I), ae & 8) {
        const Re = H.dynamicProps;
        for (let Ce = 0; Ce < Re.length; Ce++) {
          const oe = Re[Ce], Be = ge[oe], Ye = Se[oe];
          (Ye !== Be || oe === "value") && c(se, oe, Be, Ye, I, Q);
        }
      }
      ae & 1 && O.children !== H.children && _(se, H.children);
    } else !ne && f == null && ve(se, ge, Se, Q, I);
    ((Ie = Se.onVnodeUpdated) || me) && un(() => {
      Ie && zn(Ie, Q, H, O), me && Hr(H, O, Q, "updated");
    }, pe);
  }, U = (O, H, Q, pe, I, K, ne) => {
    for (let se = 0; se < H.length; se++) {
      const ae = O[se], f = H[se], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(ae, f) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? w(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      F(
        ae,
        f,
        me,
        null,
        pe,
        I,
        K,
        ne,
        !0
      );
    }
  }, ve = (O, H, Q, pe, I) => {
    if (H !== Q) {
      if (H !== dt)
        for (const K in H)
          !va(K) && !(K in Q) && c(
            O,
            K,
            H[K],
            null,
            I,
            pe
          );
      for (const K in Q) {
        if (va(K)) continue;
        const ne = Q[K], se = H[K];
        ne !== se && K !== "value" && c(O, K, se, ne, I, pe);
      }
      "value" in Q && c(O, "value", H.value, Q.value, I);
    }
  }, xe = (O, H, Q, pe, I, K, ne, se, ae) => {
    const f = H.el = O ? O.el : d(""), me = H.anchor = O ? O.anchor : d("");
    let { patchFlag: ge, dynamicChildren: Se, slotScopeIds: Ie } = H;
    Ie && (se = se ? se.concat(Ie) : Ie), O == null ? (i(f, Q, pe), i(me, Q, pe), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      Q,
      me,
      I,
      K,
      ne,
      se,
      ae
    )) : ge > 0 && ge & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren && O.dynamicChildren.length === Se.length ? (U(
      O.dynamicChildren,
      Se,
      Q,
      I,
      K,
      ne,
      se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || I && H === I.subTree) && Kh(
      O,
      H,
      !0
      /* shallow */
    )) : X(
      O,
      H,
      Q,
      me,
      I,
      K,
      ne,
      se,
      ae
    );
  }, C = (O, H, Q, pe, I, K, ne, se, ae) => {
    H.slotScopeIds = se, O == null ? H.shapeFlag & 512 ? I.ctx.activate(
      H,
      Q,
      pe,
      ne,
      ae
    ) : we(
      H,
      Q,
      pe,
      I,
      K,
      ne,
      ae
    ) : te(O, H, ae);
  }, we = (O, H, Q, pe, I, K, ne) => {
    const se = O.component = ty(
      O,
      pe,
      I
    );
    if (Ah(O) && (se.ctx.renderer = Kt), ry(se, !1, ne), se.asyncDep) {
      if (I && I.registerDep(se, ye, ne), !O.el) {
        const ae = se.subTree = qe(Dr);
        j(null, ae, H, Q), O.placeholder = ae.el;
      }
    } else
      ye(
        se,
        O,
        H,
        Q,
        I,
        K,
        ne
      );
  }, te = (O, H, Q) => {
    const pe = H.component = O.component;
    if (Fb(O, H, Q))
      if (pe.asyncDep && !pe.asyncResolved) {
        $(pe, H, Q);
        return;
      } else
        pe.next = H, pe.update();
    else
      H.el = O.el, pe.vnode = H;
  }, ye = (O, H, Q, pe, I, K, ne) => {
    const se = () => {
      if (O.isMounted) {
        let { next: ge, bu: Se, u: Ie, parent: Re, vnode: Ce } = O;
        {
          const le = Wh(O);
          if (le) {
            ge && (ge.el = Ce.el, $(O, ge, ne)), le.asyncDep.then(() => {
              un(() => {
                O.isUnmounted || f();
              }, I);
            });
            return;
          }
        }
        let oe = ge, Be;
        Ur(O, !1), ge ? (ge.el = Ce.el, $(O, ge, ne)) : ge = Ce, Se && kl(Se), (Be = ge.props && ge.props.onVnodeBeforeUpdate) && zn(Be, Re, ge, Ce), Ur(O, !0);
        const Ye = Of(O), Te = O.subTree;
        O.subTree = Ye, F(
          Te,
          Ye,
          // parent may have changed if it's in a teleport
          w(Te.el),
          // anchor may have changed if it's in a fragment
          Ct(Te),
          O,
          I,
          K
        ), ge.el = Ye.el, oe === null && Lb(O, Ye.el), Ie && un(Ie, I), (Be = ge.props && ge.props.onVnodeUpdated) && un(
          () => zn(Be, Re, ge, Ce),
          I
        );
      } else {
        let ge;
        const { el: Se, props: Ie } = H, { bm: Re, m: Ce, parent: oe, root: Be, type: Ye } = O, Te = Sa(H);
        Ur(O, !1), Re && kl(Re), !Te && (ge = Ie && Ie.onVnodeBeforeMount) && zn(ge, oe, H), Ur(O, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            Ye,
            O.parent ? O.parent.type : void 0
          );
          const le = O.subTree = Of(O);
          F(
            null,
            le,
            Q,
            pe,
            O,
            I,
            K
          ), H.el = le.el;
        }
        if (Ce && un(Ce, I), !Te && (ge = Ie && Ie.onVnodeMounted)) {
          const le = H;
          un(
            () => zn(ge, oe, le),
            I
          );
        }
        (H.shapeFlag & 256 || oe && Sa(oe.vnode) && oe.vnode.shapeFlag & 256) && O.a && un(O.a, I), O.isMounted = !0, H = Q = pe = null;
      }
    };
    O.scope.on();
    const ae = O.effect = new ih(se);
    O.scope.off();
    const f = O.update = ae.run.bind(ae), me = O.job = ae.runIfDirty.bind(ae);
    me.i = O, me.id = O.uid, ae.scheduler = () => Rc(me), Ur(O, !0), f();
  }, $ = (O, H, Q) => {
    H.component = O;
    const pe = O.vnode.props;
    O.vnode = H, O.next = null, zb(O, H.props, pe, Q), Ub(O, H.children, Q), mr(), kf(O), pr();
  }, X = (O, H, Q, pe, I, K, ne, se, ae = !1) => {
    const f = O && O.children, me = O ? O.shapeFlag : 0, ge = H.children, { patchFlag: Se, shapeFlag: Ie } = H;
    if (Se > 0) {
      if (Se & 128) {
        $e(
          f,
          ge,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        return;
      } else if (Se & 256) {
        _e(
          f,
          ge,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        return;
      }
    }
    Ie & 8 ? (me & 16 && Mt(f, I, K), ge !== f && _(Q, ge)) : me & 16 ? Ie & 16 ? $e(
      f,
      ge,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae
    ) : Mt(f, I, K, !0) : (me & 8 && _(Q, ""), Ie & 16 && J(
      ge,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae
    ));
  }, _e = (O, H, Q, pe, I, K, ne, se, ae) => {
    O = O || Fi, H = H || Fi;
    const f = O.length, me = H.length, ge = Math.min(f, me);
    let Se;
    for (Se = 0; Se < ge; Se++) {
      const Ie = H[Se] = ae ? cr(H[Se]) : Gn(H[Se]);
      F(
        O[Se],
        Ie,
        Q,
        null,
        I,
        K,
        ne,
        se,
        ae
      );
    }
    f > me ? Mt(
      O,
      I,
      K,
      !0,
      !1,
      ge
    ) : J(
      H,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae,
      ge
    );
  }, $e = (O, H, Q, pe, I, K, ne, se, ae) => {
    let f = 0;
    const me = H.length;
    let ge = O.length - 1, Se = me - 1;
    for (; f <= ge && f <= Se; ) {
      const Ie = O[f], Re = H[f] = ae ? cr(H[f]) : Gn(H[f]);
      if (la(Ie, Re))
        F(
          Ie,
          Re,
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        );
      else
        break;
      f++;
    }
    for (; f <= ge && f <= Se; ) {
      const Ie = O[ge], Re = H[Se] = ae ? cr(H[Se]) : Gn(H[Se]);
      if (la(Ie, Re))
        F(
          Ie,
          Re,
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        );
      else
        break;
      ge--, Se--;
    }
    if (f > ge) {
      if (f <= Se) {
        const Ie = Se + 1, Re = Ie < me ? H[Ie].el : pe;
        for (; f <= Se; )
          F(
            null,
            H[f] = ae ? cr(H[f]) : Gn(H[f]),
            Q,
            Re,
            I,
            K,
            ne,
            se,
            ae
          ), f++;
      }
    } else if (f > Se)
      for (; f <= ge; )
        De(O[f], I, K, !0), f++;
    else {
      const Ie = f, Re = f, Ce = /* @__PURE__ */ new Map();
      for (f = Re; f <= Se; f++) {
        const gt = H[f] = ae ? cr(H[f]) : Gn(H[f]);
        gt.key != null && Ce.set(gt.key, f);
      }
      let oe, Be = 0;
      const Ye = Se - Re + 1;
      let Te = !1, le = 0;
      const Fn = new Array(Ye);
      for (f = 0; f < Ye; f++) Fn[f] = 0;
      for (f = Ie; f <= ge; f++) {
        const gt = O[f];
        if (Be >= Ye) {
          De(gt, I, K, !0);
          continue;
        }
        let Vt;
        if (gt.key != null)
          Vt = Ce.get(gt.key);
        else
          for (oe = Re; oe <= Se; oe++)
            if (Fn[oe - Re] === 0 && la(gt, H[oe])) {
              Vt = oe;
              break;
            }
        Vt === void 0 ? De(gt, I, K, !0) : (Fn[Vt - Re] = f + 1, Vt >= le ? le = Vt : Te = !0, F(
          gt,
          H[Vt],
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        ), Be++);
      }
      const ct = Te ? Wb(Fn) : Fi;
      for (oe = ct.length - 1, f = Ye - 1; f >= 0; f--) {
        const gt = Re + f, Vt = H[gt], Wa = H[gt + 1], li = gt + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Wa.el || Yh(Wa)
        ) : pe;
        Fn[f] === 0 ? F(
          null,
          Vt,
          Q,
          li,
          I,
          K,
          ne,
          se,
          ae
        ) : Te && (oe < 0 || f !== ct[oe] ? ze(Vt, Q, li, 2) : oe--);
      }
    }
  }, ze = (O, H, Q, pe, I = null) => {
    const { el: K, type: ne, transition: se, children: ae, shapeFlag: f } = O;
    if (f & 6) {
      ze(O.component.subTree, H, Q, pe);
      return;
    }
    if (f & 128) {
      O.suspense.move(H, Q, pe);
      return;
    }
    if (f & 64) {
      ne.move(O, H, Q, Kt);
      return;
    }
    if (ne === Ze) {
      i(K, H, Q);
      for (let ge = 0; ge < ae.length; ge++)
        ze(ae[ge], H, Q, pe);
      i(O.anchor, H, Q);
      return;
    }
    if (ne === El) {
      E(O, H, Q);
      return;
    }
    if (pe !== 2 && f & 1 && se)
      if (pe === 0)
        se.beforeEnter(K), i(K, H, Q), un(() => se.enter(K), I);
      else {
        const { leave: ge, delayLeave: Se, afterLeave: Ie } = se, Re = () => {
          O.ctx.isUnmounted ? a(K) : i(K, H, Q);
        }, Ce = () => {
          K._isLeaving && K[cb](
            !0
            /* cancelled */
          ), ge(K, () => {
            Re(), Ie && Ie();
          });
        };
        Se ? Se(K, Re, Ce) : Ce();
      }
    else
      i(K, H, Q);
  }, De = (O, H, Q, pe = !1, I = !1) => {
    const {
      type: K,
      props: ne,
      ref: se,
      children: ae,
      dynamicChildren: f,
      shapeFlag: me,
      patchFlag: ge,
      dirs: Se,
      cacheIndex: Ie,
      memo: Re
    } = O;
    if (ge === -2 && (I = !1), se != null && (mr(), wa(se, null, Q, O, !0), pr()), Ie != null && (H.renderCache[Ie] = void 0), me & 256) {
      H.ctx.deactivate(O);
      return;
    }
    const Ce = me & 1 && Se, oe = !Sa(O);
    let Be;
    if (oe && (Be = ne && ne.onVnodeBeforeUnmount) && zn(Be, H, O), me & 6)
      jt(O.component, Q, pe);
    else {
      if (me & 128) {
        O.suspense.unmount(Q, pe);
        return;
      }
      Ce && Hr(O, null, H, "beforeUnmount"), me & 64 ? O.type.remove(
        O,
        H,
        Q,
        Kt,
        pe
      ) : f && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !f.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== Ze || ge > 0 && ge & 64) ? Mt(
        f,
        H,
        Q,
        !1,
        !0
      ) : (K === Ze && ge & 384 || !I && me & 16) && Mt(ae, H, Q), pe && St(O);
    }
    const Ye = Re != null && Ie == null;
    (oe && (Be = ne && ne.onVnodeUnmounted) || Ce || Ye) && un(() => {
      Be && zn(Be, H, O), Ce && Hr(O, null, H, "unmounted"), Ye && (O.el = null);
    }, Q);
  }, St = (O) => {
    const { type: H, el: Q, anchor: pe, transition: I } = O;
    if (H === Ze) {
      Dt(Q, pe);
      return;
    }
    if (H === El) {
      D(O);
      return;
    }
    const K = () => {
      a(Q), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (O.shapeFlag & 1 && I && !I.persisted) {
      const { leave: ne, delayLeave: se } = I, ae = () => ne(Q, K);
      se ? se(O.el, K, ae) : ae();
    } else
      K();
  }, Dt = (O, H) => {
    let Q;
    for (; O !== H; )
      Q = S(O), a(O), O = Q;
    a(H);
  }, jt = (O, H, Q) => {
    const { bum: pe, scope: I, job: K, subTree: ne, um: se, m: ae, a: f } = O;
    Lf(ae), Lf(f), pe && kl(pe), I.stop(), K && (K.flags |= 8, De(ne, O, H, Q)), se && un(se, H), un(() => {
      O.isUnmounted = !0;
    }, H);
  }, Mt = (O, H, Q, pe = !1, I = !1, K = 0) => {
    for (let ne = K; ne < O.length; ne++)
      De(O[ne], H, Q, pe, I);
  }, Ct = (O) => {
    if (O.shapeFlag & 6)
      return Ct(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const H = S(O.anchor || O.el), Q = H && H[sb];
    return Q ? S(Q) : H;
  };
  let dn = !1;
  const Je = (O, H, Q) => {
    let pe;
    O == null ? H._vnode && (De(H._vnode, null, null, !0), pe = H._vnode.component) : F(
      H._vnode || null,
      O,
      H,
      null,
      null,
      null,
      Q
    ), H._vnode = O, dn || (dn = !0, kf(pe), xh(), dn = !1);
  }, Kt = {
    p: F,
    um: De,
    m: ze,
    r: St,
    mt: we,
    mc: J,
    pc: X,
    pbc: U,
    n: Ct,
    o: e
  };
  return {
    render: Je,
    hydrate: void 0,
    createApp: Tb(Je)
  };
}
function Dl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ur({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Kb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ue(i) && Ue(a))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let d = a[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[c] = cr(a[c]), d.el = u.el), !n && d.patchFlag !== -2 && Kh(u, d)), d.type === Es && (d.patchFlag === -1 && (d = a[c] = cr(d)), d.el = u.el), d.type === Dr && !d.el && (d.el = u.el);
    }
}
function Wb(e) {
  const t = e.slice(), n = [0];
  let i, a, c, u, d;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[i] = a, n.push(i);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        d = c + u >> 1, e[n[d]] < y ? c = d + 1 : u = d;
      y < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = t[u];
  return n;
}
function Wh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wh(t);
}
function Lf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Yh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Yh(t.subTree) : null;
}
const qh = (e) => e.__isSuspense;
function Yb(e, t) {
  t && t.pendingBranch ? Ue(e) ? t.effects.push(...e) : t.effects.push(e) : nb(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Es = /* @__PURE__ */ Symbol.for("v-txt"), Dr = /* @__PURE__ */ Symbol.for("v-cmt"), El = /* @__PURE__ */ Symbol.for("v-stc"), Na = [];
let vn = null;
function Me(e = !1) {
  Na.push(vn = e ? null : []);
}
function qb() {
  Na.pop(), vn = Na[Na.length - 1] || null;
}
let Oa = 1;
function $f(e, t = !1) {
  Oa += e, e < 0 && vn && t && (vn.hasOnce = !0);
}
function Xh(e) {
  return e.dynamicChildren = Oa > 0 ? vn || Fi : null, qb(), Oa > 0 && vn && vn.push(e), e;
}
function ke(e, t, n, i, a, c) {
  return Xh(
    ie(
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
function qi(e, t, n, i, a) {
  return Xh(
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
function Jh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zh = ({ key: e }) => e ?? null, Wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? At(e) || /* @__PURE__ */ Qt(e) || Ge(e) ? { i: yn, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, a = null, c = e === Ze ? 0 : 1, u = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zh(t),
    ref: t && Wo(t),
    scopeId: Sh,
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
    ctx: yn
  };
  return d ? (jc(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= At(n) ? 8 : 16), Oa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  vn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && vn.push(p), p;
}
const qe = Xb;
function Xb(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === Dh) && (e = Dr), Jh(e)) {
    const d = Gi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jc(d, n), Oa > 0 && !c && vn && (d.shapeFlag & 6 ? vn[vn.indexOf(e)] = d : vn.push(d)), d.patchFlag = -2, d;
  }
  if (ly(e) && (e = e.__vccOpts), t) {
    t = Jb(t);
    let { class: d, style: p } = t;
    d && !At(d) && (t.class = st(d)), lt(p) && (/* @__PURE__ */ Ec(p) && !Ue(p) && (p = en({}, p)), t.style = It(p));
  }
  const u = At(e) ? 1 : qh(e) ? 128 : lb(e) ? 64 : lt(e) ? 4 : Ge(e) ? 2 : 0;
  return ie(
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
function Jb(e) {
  return e ? /* @__PURE__ */ Ec(e) || jh(e) ? en({}, e) : e : null;
}
function Gi(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: u, children: d, transition: p } = e, y = t ? Ar(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Zh(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ue(c) ? c.concat(Wo(t)) : [c, Wo(t)] : Wo(t)
    ) : c,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
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
    ssContent: e.ssContent && Gi(e.ssContent),
    ssFallback: e.ssFallback && Gi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && Fc(
    _,
    p.clone(_)
  ), _;
}
function Zb(e = " ", t = 0) {
  return qe(Es, null, e, t);
}
function Rt(e = "", t = !1) {
  return t ? (Me(), qi(Dr, null, e)) : qe(Dr, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? qe(Dr) : Ue(e) ? qe(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jh(e) ? cr(e) : qe(Es, null, String(e));
}
function cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gi(e);
}
function jc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ue(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), jc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !jh(t) ? t._ctx = yn : a === 3 && yn && (yn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ge(t) ? (t = { default: t, _ctx: yn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Zb(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ar(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (a === "style")
        t.style = It([t.style, i.style]);
      else if (Ss(a)) {
        const c = t[a], u = i[a];
        u && c !== u && !(Ue(c) && c.includes(u)) ? t[a] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ms(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function zn(e, t, n, i = null) {
  Zn(e, t, 7, [
    n,
    i
  ]);
}
const Qb = Rh();
let ey = 0;
function ty(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Qb, c = {
    uid: ey++,
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
    scope: new N0(
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
    propsOptions: Hh(i, a),
    emitsOptions: Fh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: dt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: dt,
    data: dt,
    props: dt,
    attrs: dt,
    slots: dt,
    refs: dt,
    setupState: dt,
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = Db.bind(null, c), e.ce && e.ce(c), c;
}
let Zt = null;
const ny = () => Zt || yn;
let cs, cc;
{
  const e = Ps(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((u) => u(c)) : a[0](c);
    };
  };
  cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Zt = n
  ), cc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ra = n
  );
}
const Ga = (e) => {
  const t = Zt;
  return cs(e), e.scope.on(), () => {
    e.scope.off(), cs(t);
  };
}, zf = () => {
  Zt && Zt.scope.off(), cs(null);
};
function Qh(e) {
  return e.vnode.shapeFlag & 4;
}
let Ra = !1;
function ry(e, t = !1, n = !1) {
  t && cc(t);
  const { props: i, children: a } = e.vnode, c = Qh(e);
  $b(e, i, c, t), Hb(e, a, n || t);
  const u = c ? iy(e, t) : void 0;
  return t && cc(!1), u;
}
function iy(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Sb);
  const { setup: i } = n;
  if (i) {
    mr();
    const a = e.setupContext = i.length > 1 ? oy(e) : null, c = Ga(e), u = Ua(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Jd(u);
    if (pr(), c(), (d || e.sp) && !Sa(e) && Ph(e), d) {
      if (u.then(zf, zf), t)
        return u.then((p) => {
          jf(e, p);
        }).catch((p) => {
          Ts(p, e, 0);
        });
      e.asyncDep = u;
    } else
      jf(e, u);
  } else
    em(e);
}
function jf(e, t, n) {
  Ge(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : lt(t) && (e.setupState = yh(t)), em(e);
}
function em(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Xn);
  {
    const a = Ga(e);
    mr();
    try {
      Mb(e);
    } finally {
      pr(), a();
    }
  }
}
const ay = {
  get(e, t) {
    return Jt(e, "get", ""), e[t];
  }
};
function oy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ay),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yh(K0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ma)
        return Ma[n](e);
    },
    has(t, n) {
      return n in t || n in Ma;
    }
  })) : e.proxy;
}
function sy(e, t = !0) {
  return Ge(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ly(e) {
  return Ge(e) && "__vccOpts" in e;
}
const _t = (e, t) => /* @__PURE__ */ J0(e, t, Ra), cy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let uc;
const Vf = typeof window < "u" && window.trustedTypes;
if (Vf)
  try {
    uc = /* @__PURE__ */ Vf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tm = uc ? (e) => uc.createHTML(e) : (e) => e, uy = "http://www.w3.org/2000/svg", fy = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, Hf = sr && /* @__PURE__ */ sr.createElement("template"), dy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? sr.createElementNS(uy, e) : t === "mathml" ? sr.createElementNS(fy, e) : n ? sr.createElement(e, { is: n }) : sr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => sr.createTextNode(e),
  createComment: (e) => sr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => sr.querySelector(e),
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
      Hf.innerHTML = tm(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Hf.content;
      if (i === "svg" || i === "mathml") {
        const p = d.firstChild;
        for (; p.firstChild; )
          d.appendChild(p.firstChild);
        d.removeChild(p);
      }
      t.insertBefore(d, n);
    }
    return [
      // first
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, hy = /* @__PURE__ */ Symbol("_vtc");
function my(e, t, n) {
  const i = e[hy];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const us = /* @__PURE__ */ Symbol("_vod"), nm = /* @__PURE__ */ Symbol("_vsh"), Ka = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[us] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ca(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ca(e, !0), i.enter(e)) : i.leave(e, () => {
      ca(e, !1);
    }) : ca(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ca(e, t);
  }
};
function ca(e, t) {
  e.style.display = t ? e[us] : "none", e[nm] = !t;
}
const py = /* @__PURE__ */ Symbol(""), gy = /(?:^|;)\s*display\s*:/;
function by(e, t, n) {
  const i = e.style, a = At(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (At(t))
        for (const u of t.split(";")) {
          const d = u.slice(0, u.indexOf(":")).trim();
          n[d] == null && Yo(i, d, "");
        }
      else
        for (const u in t)
          n[u] == null && Yo(i, u, "");
    for (const u in n)
      u === "display" && (c = !0), Yo(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[py];
      u && (n += ";" + u), i.cssText = n, c = gy.test(n);
    }
  } else t && e.removeAttribute("style");
  us in e && (e[us] = c ? i.display : "", e[nm] && (i.display = "none"));
}
const Uf = /\s*!important$/;
function Yo(e, t, n) {
  if (Ue(n))
    n.forEach((i) => Yo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = yy(e, t);
    Uf.test(n) ? e.setProperty(
      si(i),
      n.replace(Uf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Bf = ["Webkit", "Moz", "ms"], Ol = {};
function yy(e, t) {
  const n = Ol[t];
  if (n)
    return n;
  let i = on(t);
  if (i !== "filter" && i in e)
    return Ol[t] = i;
  i = ks(i);
  for (let a = 0; a < Bf.length; a++) {
    const c = Bf[a] + i;
    if (c in e)
      return Ol[t] = c;
  }
  return t;
}
const Gf = "http://www.w3.org/1999/xlink";
function Kf(e, t, n, i, a, c = S0(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gf, t.slice(6, t.length)) : e.setAttributeNS(Gf, t, n) : n == null || c && !th(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : Jn(n) ? String(n) : n
  );
}
function Wf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tm(n) : n);
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = th(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function vy(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function _y(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Yf = /* @__PURE__ */ Symbol("_vei");
function xy(e, t, n, i, a = null) {
  const c = e[Yf] || (e[Yf] = {}), u = c[t];
  if (i && u)
    u.value = i;
  else {
    const [d, p] = wy(t);
    if (i) {
      const y = c[t] = Ny(
        i,
        a
      );
      vy(e, d, y, p);
    } else u && (_y(e, d, u, p), c[t] = void 0);
  }
}
const qf = /(?:Once|Passive|Capture)$/;
function wy(e) {
  let t;
  if (qf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(qf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : si(e.slice(2)), t];
}
let Rl = 0;
const Sy = /* @__PURE__ */ Promise.resolve(), My = () => Rl || (Sy.then(() => Rl = 0), Rl = Date.now());
function Ny(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Zn(
      ky(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = My(), n;
}
function ky(e, t) {
  if (Ue(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const Xf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Py = (e, t, n, i, a, c) => {
  const u = a === "svg";
  t === "class" ? my(e, i, u) : t === "style" ? by(e, n, i) : Ss(t) ? Ms(t) || xy(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ay(e, t, i, u)) ? (Wf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Kf(e, t, i, u, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !At(i))) ? Wf(e, on(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Kf(e, t, i, u));
};
function Ay(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xf(t) && Ge(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Xf(t) && At(n) ? !1 : t in e;
}
function Cy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = on(t);
  return Array.isArray(n) ? n.some((a) => on(a) === i) : Object.keys(n).some((a) => on(a) === i);
}
const Ty = ["ctrl", "shift", "alt", "meta"], Iy = {
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
  exact: (e, t) => Ty.some((n) => e[`${n}Key`] && !t.includes(n))
}, rm = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let u = 0; u < t.length; u++) {
      const d = Iy[t[u]];
      if (d && d(a, t)) return;
    }
    return e(a, ...c);
  }));
}, Dy = /* @__PURE__ */ en({ patchProp: Py }, dy);
let Jf;
function Ey() {
  return Jf || (Jf = Bb(Dy));
}
const Oy = ((...e) => {
  const t = Ey().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Fy(i);
    if (!a) return;
    const c = t._component;
    !Ge(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, Ry(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function Ry(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Fy(e) {
  return At(e) ? document.querySelector(e) : e;
}
const wt = Math.PI / 180, im = Math.PI * 2, Ly = 2048;
function ft(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Er(e, t, n) {
  return { x: e, y: t, z: n };
}
function fs(e, t) {
  return Er(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ri(e, t) {
  return Er(e.x * t, e.y * t, e.z * t);
}
function qo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Zf(e, t) {
  return Er(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ga(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Er(e.x / t, e.y / t, e.z / t);
}
function $y(e, t) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, a = Math.cos(i);
  return Er(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Xo(e, t, n = 0) {
  const i = $y(e, t);
  let a = Er(0, 1, 0);
  Math.abs(qo(i, a)) > 0.999 && (a = Er(0, 0, 1));
  let c = ga(Zf(a, i)), u = ga(Zf(i, c));
  const d = Number(n || 0) * wt, p = Math.cos(d), y = Math.sin(d), _ = fs(Ri(c, p), Ri(u, y)), w = fs(Ri(c, -y), Ri(u, p));
  return c = ga(_), u = ga(w), { fwd: i, right: c, up: u };
}
function zy(e, t) {
  const n = (Number(e || 0) - 0.5) * im, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Er(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Qf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, Ly), d = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function ed(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Fl(e, t, n) {
  const i = ed(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = ed(e, e.FRAGMENT_SHADER, n);
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
const Ll = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, jy = `#version 300 es
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
}`, Vy = `#version 300 es
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
}`, Hy = `#version 300 es
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
function ua(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(ft(i, 1, 179) * wt * 0.5) * (n / Math.max(t, 1))) / wt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: ft(i, 1, 179),
    vFovDeg: ft(a, 0.1, 179)
  };
}
function Uy(e) {
  const t = Xo(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(ft(Number(e.hFovDeg), 0.1, 179) * 0.5 * wt),
    tanY: Math.tan(ft(Number(e.vFovDeg), 0.1, 179) * 0.5 * wt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ft(Number(e.opacity ?? 1), 0, 1)
  };
}
function By(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, c = null, u = null, d = null, p = null, y = null, _ = null, w = null, S = null, A = !1, v = Qf(1, 1, 1), F = null, V = null, j = null, k = null, E = null;
  const D = /* @__PURE__ */ new Map();
  let L = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, W = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, R = {
    paint: !1,
    mask: !1
  };
  function J(I = null, K = null) {
    const ne = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ne), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, I ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, K ?? n.CLAMP_TO_EDGE), ne;
  }
  function ue() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = Fl(n, Ll, jy), a = Fl(n, Ll, Vy), c = Fl(n, Ll, Hy), F = {
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
      }, V = {
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
      }, j = {
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
      ]), n.STATIC_DRAW), d = J(n.REPEAT, n.CLAMP_TO_EDGE), p = J(n.REPEAT, n.CLAMP_TO_EDGE), y = J(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function U() {
    var I;
    if (n) {
      try {
        u && n.deleteBuffer(u), d && n.deleteTexture(d), p && n.deleteTexture(p), y && n.deleteTexture(y), D.forEach((K) => {
          $e(K);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, u = null, d = null, p = null, y = null, D.clear(), _ = null, w = null, S = null, W = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, R = {
        paint: !1,
        mask: !1
      }, k = null, E = null, A = !1;
    }
  }
  function ve(I, K, ne = 1) {
    v = Qf(I, K, ne), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function xe(I) {
    I === "background" ? _ = null : I === "paint" ? w = null : S = null, W[I] && (W[I].width = 0, W[I].height = 0);
  }
  function C() {
    R.paint = !1, R.mask = !1;
  }
  function we(I) {
    C(), I === "paint" ? R.paint = !0 : I === "mask" && (R.mask = !0);
  }
  function te(I, K, ne = [], se = { width: 0, height: 0 }, ae = !1) {
    if (!n || !I || !K) return !1;
    const f = Number(K.width || K.videoWidth || K.naturalWidth || 0), me = Number(K.height || K.videoHeight || K.naturalHeight || 0);
    if (!(f > 1) || !(me > 1)) return !1;
    const ge = Array.isArray(ne) ? ne.filter((Se) => Se && Se.w > 0 && Se.h > 0) : [];
    if (!ge.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ae ? 1 : 0), se.width !== f || se.height !== me)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), se.width = f, se.height = me, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (k || (k = document.createElement("canvas"), E = k.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Se of ge) {
      const Ie = Math.max(0, Math.floor(Number(Se.x || 0))), Re = Math.max(0, Math.floor(Number(Se.y || 0))), Ce = Math.min(f - Ie, Math.ceil(Number(Se.w || 0))), oe = Math.min(me - Re, Math.ceil(Number(Se.h || 0)));
      if (!(Ce <= 0 || oe <= 0)) {
        if (k.width !== Ce || k.height !== oe) {
          if (k.width = Ce, k.height = oe, E = k.getContext("2d"), !E)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          E.clearRect(0, 0, Ce, oe);
        E.drawImage(K, Ie, Re, Ce, oe, 0, 0, Ce, oe), n.texSubImage2D(n.TEXTURE_2D, 0, Ie, Re, n.RGBA, n.UNSIGNED_BYTE, k);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ye(I, K, ne, se, ae = null, f = !1) {
    if (!ue()) return !1;
    if (!ne)
      return xe(I), !1;
    const me = String(se ?? ""), ge = I === "background" ? _ : I === "paint" ? w : S, Se = W[I], Ie = Number(ne.width || ne.videoWidth || ne.naturalWidth || 0), Re = Number(ne.height || ne.videoHeight || ne.naturalHeight || 0), Ce = Se.width !== Ie || Se.height !== Re;
    if (ge === me && !Ce && !(Array.isArray(ae) && ae.length)) return !0;
    if (!(Ie > 0) || !(Re > 0))
      return xe(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, f ? 1 : 0), !(Array.isArray(ae) && ae.length ? te(K, ne, ae, Se, f) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ne), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe(I), !1;
      Se.width = Ie, Se.height = Re;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), I === "background" ? _ = me : I === "paint" ? w = me : S = me, !0;
  }
  function $(I, K) {
    return ye("background", d, I, K, null, !0);
  }
  function X(I, K, ne = null) {
    return ye("paint", p, I, K, ne, !0);
  }
  function _e(I, K, ne = null) {
    return ye("mask", y, I, K, ne, !0);
  }
  function $e(I) {
    I != null && I.texture && n && n.deleteTexture(I.texture);
  }
  function ze(I = /* @__PURE__ */ new Set()) {
    D.forEach((K, ne) => {
      I.has(ne) || ($e(K), D.delete(ne));
    });
  }
  function De(I) {
    if (!n || !(I != null && I.assetId) || !(I != null && I.source)) return null;
    const K = String(I.assetId), ne = String(I.revision ?? ""), se = I.source, ae = Number(se.width || se.naturalWidth || se.videoWidth || 0), f = Number(se.height || se.naturalHeight || se.videoHeight || 0);
    if (ae <= 0 || f <= 0) return null;
    let me = D.get(K);
    if (me || (me = {
      texture: J(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(K, me)), me.revision !== ne || me.width !== ae || me.height !== f) {
      if (n.bindTexture(n.TEXTURE_2D, me.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, se), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), me.revision = ne, me.width = ae, me.height = f;
    }
    return me.texture;
  }
  function St(I = []) {
    if (!ue()) return !1;
    const K = /* @__PURE__ */ new Set();
    return I.forEach((ne) => {
      !(ne != null && ne.assetId) || !(ne != null && ne.source) || (K.add(String(ne.assetId)), De(ne));
    }), ze(K), !0;
  }
  function Dt() {
    return ue() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function jt(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Mt(I, K = {}) {
    if (!_) return null;
    n.disable(n.BLEND), jt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(F.background, 0), n.uniform2f(F.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(F.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const ne = ua(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(F.yaw, Number(ne.yawDeg || 0) * wt), n.uniform1f(F.pitch, Number(ne.pitchDeg || 0) * wt), n.uniform1f(F.roll, Number(ne.rollDeg || 0) * wt), n.uniform1f(F.hFov, ft(Number(ne.hFovDeg || 90), 0.1, 179) * wt), n.uniform1f(F.vFov, ft(Number(ne.vFovDeg || 60), 0.1, 179) * wt), n.uniform1f(F.opacity, ft(Number(K.backgroundOpacity ?? 1), 0, 1));
    const se = Number((I == null ? void 0 : I.coverageDeg) || (K == null ? void 0 : K.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(F.coverage, se), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Ct(I, K = {}) {
    const ne = R.paint && w != null, se = R.mask && S != null;
    if (!ne && !se) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), jt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const ae = ua(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(ae.yawDeg || 0) * wt), n.uniform1f(V.pitch, Number(ae.pitchDeg || 0) * wt), n.uniform1f(V.roll, Number(ae.rollDeg || 0) * wt), n.uniform1f(V.hFov, ft(Number(ae.hFovDeg || 90), 0.1, 179) * wt), n.uniform1f(V.vFov, ft(Number(ae.vFovDeg || 60), 0.1, 179) * wt), n.uniform1f(V.paintOpacity, ft(Number(K.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, ft(Number(K.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, ne ? 1 : 0), n.uniform1i(V.hasMask, se ? 1 : 0), n.uniform1i(V.showMaskTint, K.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function dn(I, K) {
    var Se, Ie, Re, Ce, oe, Be, Ye;
    const ne = Array.isArray(I == null ? void 0 : I.objects) ? I.objects : [];
    if (!ne.length) {
      C(), ze(/* @__PURE__ */ new Set());
      return;
    }
    const se = (K == null ? void 0 : K.mode) === "unwrap" ? 0 : (K == null ? void 0 : K.mode) === "cutout" ? 2 : 1, ae = ua(K, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, f = Xo(ae.yawDeg, ae.pitchDeg, ae.rollDeg), me = ne.slice().sort((Te, le) => Number((Te == null ? void 0 : Te.zIndex) || 0) - Number((le == null ? void 0 : le.zIndex) || 0)), ge = /* @__PURE__ */ new Set();
    C();
    for (const Te of me)
      if (!(!Te || Te.visible === !1)) {
        if (Te.type === "sticker") {
          const le = String(((Se = Te == null ? void 0 : Te.params) == null ? void 0 : Se.assetId) || (Te == null ? void 0 : Te.id) || "");
          if (!le) continue;
          ge.add(le);
          const Fn = De({
            assetId: le,
            source: Te.source,
            revision: Te.revision
          });
          if (!Fn) continue;
          const ct = Uy({
            yawDeg: ((Ie = Te == null ? void 0 : Te.transform) == null ? void 0 : Ie.yawDeg) || 0,
            pitchDeg: ((Re = Te == null ? void 0 : Te.transform) == null ? void 0 : Re.pitchDeg) || 0,
            rollDeg: ((Ce = Te == null ? void 0 : Te.transform) == null ? void 0 : Ce.rollDeg) || 0,
            hFovDeg: ((oe = Te == null ? void 0 : Te.transform) == null ? void 0 : oe.hFovDeg) || 30,
            vFovDeg: ((Be = Te == null ? void 0 : Te.transform) == null ? void 0 : Be.vFovDeg) || 30,
            crop: ((Ye = Te == null ? void 0 : Te.params) == null ? void 0 : Ye.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (Te == null ? void 0 : Te.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), jt(c), n.uniform1i(j.texture, 0), n.uniform1i(j.mode, se), n.uniform3f(j.viewRight, f.right.x, f.right.y, f.right.z), n.uniform3f(j.viewUp, f.up.x, f.up.y, f.up.z), n.uniform3f(j.viewFwd, f.fwd.x, f.fwd.y, f.fwd.z), n.uniform1f(j.viewHfov, ft(Number(ae.hFovDeg || 90), 0.1, 179) * wt), n.uniform1f(j.viewVfov, ft(Number(ae.vFovDeg || 60), 0.1, 179) * wt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Fn), n.uniform3f(j.stickerRight, ct.right.x, ct.right.y, ct.right.z), n.uniform3f(j.stickerUp, ct.up.x, ct.up.y, ct.up.z), n.uniform3f(j.stickerFwd, ct.fwd.x, ct.fwd.y, ct.fwd.z), n.uniform1f(j.stickerTanX, Math.max(1e-6, ct.tanX)), n.uniform1f(j.stickerTanY, Math.max(1e-6, ct.tanY)), n.uniform4f(
            j.crop,
            ft(Number(ct.crop.x0 ?? 0), 0, 1),
            ft(Number(ct.crop.y0 ?? 0), 0, 1),
            ft(Number(ct.crop.x1 ?? 1), 0, 1),
            ft(Number(ct.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(j.opacity, ct.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (Te.type === "paint" || Te.type === "raster") {
          if (!X(Te.source, Te.revision ?? "")) continue;
          we("paint"), Ct(K, {
            paintOpacity: Number(Te.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (Te.type === "mask") {
          if (!_e(Te.source, Te.revision ?? "")) continue;
          we("mask"), Ct(K, {
            paintOpacity: 0,
            maskOpacity: Number(Te.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    ze(ge), C();
  }
  function Je(I) {
    return !Dt() || !_ ? null : (Mt({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function Kt(I) {
    return !Dt() || !_ ? null : (Mt({ mode: "unwrap" }, I), t);
  }
  function kn(I) {
    return !Dt() || !_ ? null : (Mt({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function O(I = {}) {
    if (!ue() || (ve(I.width, I.height, I.dpr || 1), !Dt())) return null;
    const K = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), ne = Object.prototype.hasOwnProperty.call(I, "paintSource"), se = Object.prototype.hasOwnProperty.call(I, "maskSource"), ae = Object.prototype.hasOwnProperty.call(I, "textures"), f = Object.prototype.hasOwnProperty.call(I, "scene");
    return K && $(I.backgroundSource, I.backgroundRevision ?? ""), ne && X(I.paintSource, I.paintRevision ?? ""), se && _e(I.maskSource, I.maskRevision ?? ""), ae && (St(I.textures || []), L.textures = I.textures || []), f && (L.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && (L.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && (L.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && (L.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && (L.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), _ && Mt(I.view, {
      ...I,
      backgroundOpacity: Number(I.backgroundOpacity ?? L.backgroundOpacity ?? 1),
      coverageDeg: Number(I.coverageDeg || L.coverageDeg || 360) === 180 ? 180 : 360
    }), dn(
      L.objectPass || { objects: [] },
      I.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function H(I = {}) {
    return ue() ? !!O({
      ...I,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(I.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function Q(I, K, ne) {
    const se = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), ae = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1)), f = Number(K), me = Number(ne);
    if (!Number.isFinite(f) || !Number.isFinite(me)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (f / se % 1 + 1) % 1, v: ft(me / ae, 0, 1) };
    const ge = ua(I, se, ae);
    if (!ge) return null;
    const Se = Xo(ge.yawDeg, ge.pitchDeg, ge.rollDeg), Ie = (f - se * 0.5) / (se * 0.5) * Math.tan(ft(ge.hFovDeg, 1, 179) * wt * 0.5), Re = (ae * 0.5 - me) / (ae * 0.5) * Math.tan(ft(ge.vFovDeg, 0.1, 179) * wt * 0.5), Ce = ga(fs(fs(Ri(Se.right, Ie), Ri(Se.up, Re)), Se.fwd));
    return {
      u: (Math.atan2(Ce.x, Ce.z) / im + 0.5 + 1) % 1,
      v: ft(0.5 - Math.asin(ft(Ce.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function pe(I, K, ne) {
    const se = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), ae = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1));
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return {
        x: (Number(K || 0) % 1 + 1) % 1 * se,
        y: ft(Number(ne || 0), 0, 1) * ae,
        visible: !0
      };
    const f = ua(I, se, ae);
    if (!f)
      return { x: se * 0.5, y: ae * 0.5, visible: !1 };
    const me = Xo(f.yawDeg, f.pitchDeg, f.rollDeg), ge = zy(K, ne), Se = qo(ge, me.right), Ie = qo(ge, me.up), Re = qo(ge, me.fwd);
    if (Re <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Ce = se * 0.5 + Se / Re * (se * 0.5 / Math.tan(ft(f.hFovDeg, 1, 179) * wt * 0.5)), oe = ae * 0.5 - Ie / Re * (ae * 0.5 / Math.tan(ft(f.vFovDeg, 0.1, 179) * wt * 0.5));
    return { x: Ce, y: oe, visible: Ce >= 0 && Ce <= se && oe >= 0 && oe <= ae };
  }
  return {
    init: ue,
    dispose: U,
    setViewport: ve,
    setBackgroundErp: $,
    setPaintErp: X,
    setMaskErp: _e,
    renderPanorama: Je,
    renderUnwrap: Kt,
    renderCutout: kn,
    renderScene: O,
    syncState: H,
    screenToErpUv: Q,
    erpUvToScreen: pe,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ue();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function td(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Gy() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, d, p) {
    const y = t(u);
    let _ = e.get(y) || null;
    if (!_) {
      const A = document.createElement("canvas"), v = A.getContext("2d");
      if (!v) return null;
      _ = {
        id: y,
        canvas: A,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(y, _);
    }
    const w = td(d), S = td(p);
    return _.width !== w && (_.canvas.width = w, _.width = w), _.height !== S && (_.canvas.height = S, _.height = S), _;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const d = i(u);
    d && d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height);
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
const Ky = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Wy = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function am(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Yy(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function qy(e = {}) {
  const t = Wy.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? am(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Xy(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Ky.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? am(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Yy(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Jy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Xy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== u ? c - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Ki(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: qy((e == null ? void 0 : e.background) || {}),
    objectPass: Jy((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Zy(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Zy(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Qy(e, t, n = {}) {
  return e ? Vc({
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
function ev(e, t, n = {}) {
  return e ? Vc({
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
function tv(e, t, n = {}) {
  return e ? Vc({
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
function om(e = {}) {
  const t = [], n = Qy(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = ev(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, u) => {
    const d = tv(
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
    d && t.push(d);
  }), t.sort((c, u) => {
    const d = Number((c == null ? void 0 : c.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return d !== p ? d - p : String((c == null ? void 0 : c.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function Hc(e, t) {
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
function Rs(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Ki({
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
      objects: Hc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ba(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = Hc(t, n), a = om({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Ki({
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
function nv(e = {}) {
  var c, u, d, p, y, _, w, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Ki(e), v = Array.isArray((c = A.objectPass) == null ? void 0 : c.objects) ? A.objectPass.objects : [], F = {
      stickers: v.filter((E) => E.type === "sticker").map((E) => {
        var D, L, W, R, J, ue, U, ve, xe, C, we, te, ye;
        return {
          id: E.id,
          assetId: String(((D = E == null ? void 0 : E.params) == null ? void 0 : D.assetId) || ((L = E == null ? void 0 : E.params) == null ? void 0 : L.asset_id) || (E == null ? void 0 : E.id) || ""),
          yawDeg: Number(((W = E == null ? void 0 : E.transform) == null ? void 0 : W.yawDeg) ?? ((R = E == null ? void 0 : E.params) == null ? void 0 : R.yawDeg) ?? 0),
          pitchDeg: Number(((J = E == null ? void 0 : E.transform) == null ? void 0 : J.pitchDeg) ?? ((ue = E == null ? void 0 : E.params) == null ? void 0 : ue.pitchDeg) ?? 0),
          rollDeg: Number(((U = E == null ? void 0 : E.transform) == null ? void 0 : U.rollDeg) ?? ((ve = E == null ? void 0 : E.params) == null ? void 0 : ve.rollDeg) ?? 0),
          hFovDeg: Number(((xe = E == null ? void 0 : E.transform) == null ? void 0 : xe.hFovDeg) ?? ((C = E == null ? void 0 : E.params) == null ? void 0 : C.hFovDeg) ?? 30),
          vFovDeg: Number(((we = E == null ? void 0 : E.transform) == null ? void 0 : we.vFovDeg) ?? ((te = E == null ? void 0 : E.params) == null ? void 0 : te.vFovDeg) ?? 30),
          crop: ((ye = E == null ? void 0 : E.params) == null ? void 0 : ye.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((E == null ? void 0 : E.opacity) ?? 1),
          visible: (E == null ? void 0 : E.visible) !== !1,
          zIndex: Number((E == null ? void 0 : E.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((d = A.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, V = v.filter((E) => E.type === "sticker").map((E) => {
      var D, L;
      return {
        assetId: String(((D = E == null ? void 0 : E.params) == null ? void 0 : D.assetId) || ((L = E == null ? void 0 : E.params) == null ? void 0 : L.asset_id) || (E == null ? void 0 : E.id) || ""),
        source: E.source || null,
        revision: String((E == null ? void 0 : E.revision) || "")
      };
    }).filter((E) => E.assetId && E.source), j = v.find((E) => E.type === "paint") || null, k = v.find((E) => E.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = A.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((y = A.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (j == null ? void 0 : j.source) || null,
      paintRevision: String((j == null ? void 0 : j.revision) || ""),
      maskSource: (k == null ? void 0 : k.source) || null,
      maskRevision: String((k == null ? void 0 : k.revision) || ""),
      textures: V,
      scene: F,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((w = A.background) == null ? void 0 : w.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Ki({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...Hc(t, n),
        ...om({
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
function rv(e) {
  let t = null;
  function n(c = {}) {
    const u = nv(c);
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
function ei(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => By(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Gy(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => rv(V), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let d = null;
  const p = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const j = { ...V }, k = a.syncState(j);
        return k && (d = j, k);
      }
      return d = { ...V }, !0;
    }
  });
  function y(V = {}) {
    return p.sync(V);
  }
  function _(V = {}, j = {}) {
    return d ? a.renderScene({
      ...d,
      view: V,
      width: j.width,
      height: j.height,
      dpr: j.dpr,
      backgroundOpacity: j.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: j.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function w(V, j, k = {}, E = {}) {
    if (!j) return !1;
    const D = _(k, {
      ...E,
      width: j.w,
      height: j.h
    });
    return D ? V ? (V.canvas && D === V.canvas || V.drawImage(D, j.x, j.y, j.w, j.h), !0) : !!c && D === c : !1;
  }
  function S(V, j = {}, k = {}) {
    const E = Number(k.width || 0), D = Number(k.height || 0);
    if (!(E > 0) || !(D > 0)) return null;
    const L = u.ensureTarget(V, E, D);
    if (!L) return null;
    const W = _(j, {
      ...k,
      width: E,
      height: D
    });
    return W ? (L.ctx.clearRect(0, 0, L.canvas.width, L.canvas.height), L.ctx.drawImage(W, 0, 0, L.canvas.width, L.canvas.height), L.canvas) : null;
  }
  function A(V) {
    u.clearTarget(V);
  }
  function v() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), d = null;
  }
  function F() {
    d = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: _,
    renderToContext: w,
    renderToTarget: S,
    clearTarget: A,
    snapshotState: p.snapshot,
    clearState: F,
    dispose: v
  };
}
function Di(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function iv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function nd(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const c = n.getImageData(0, 0, i, a).data;
  let u = i, d = a, p = -1, y = -1;
  for (let w = 0; w < a; w += 1)
    for (let S = 0; S < i; S += 1)
      c[(w * i + S) * 4 + 3] <= t || (S < u && (u = S), w < d && (d = w), S > p && (p = S), w > y && (y = w));
  return p < u || y < d ? null : {
    minX: u,
    minY: d,
    maxX: p,
    maxY: y,
    width: p - u + 1,
    height: y - d + 1,
    aspect: Number(((p - u + 1) / Math.max(1, y - d + 1)).toFixed(4))
  };
}
function Uc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function lr(e, t, n) {
  if (!e) return Di(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function vt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let $l = null, zl = null, rd = null, id = null, kt = null, fa = null, tn = null, Nr = null;
function av() {
  if (zl) return zl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), zl = n, n;
}
function jl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  $l = lr($l, n, i);
  const a = $l;
  vt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", id !== a.ctx && (rd = a.ctx.createPattern(av(), "repeat"), id = a.ctx), a.ctx.fillStyle = rd, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function ov(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function sv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function lv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function cv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const xt = /* @__PURE__ */ new Map(), Bc = 128;
function uv(e, t, n, i, a, c) {
  const u = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), p = `${u}:${d.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (xt.has(p)) {
    const k = xt.get(p);
    return xt.delete(p), xt.set(p, k), k;
  }
  xt.size >= Bc && xt.delete(xt.keys().next().value);
  const y = u * 2 + 2, _ = u + 1, w = Uc(y, y), S = w.getContext("2d"), A = d * u, v = u + 1, F = `rgba(${n},${i},${a},${c})`, V = `rgba(${n},${i},${a},0)`, j = S.createRadialGradient(_, _, A, _, _, v);
  return j.addColorStop(0, F), j.addColorStop(1, V), S.fillStyle = j, S.fillRect(0, 0, y, y), xt.set(p, w), w;
}
function fv(e, t, n, i, a, c, u) {
  const { r: d, g: p, b: y, a: _ } = i, w = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, c)), F = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${w}:${S}:${n.toFixed(2)}:${d}:${p}:${y}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${F.toFixed(2)}`;
  if (xt.has(V)) {
    const J = xt.get(V);
    return xt.delete(V), xt.set(V, J), J;
  }
  xt.size >= Bc && xt.delete(xt.keys().next().value);
  const j = Uc(w, S), k = j.getContext("2d"), E = k.createImageData(w, S), D = E.data, L = Math.max(0, e - t), W = Math.max(0, Math.min(1, n)), R = 1 + A;
  for (let J = 0; J < S; J++)
    for (let ue = 0; ue < w; ue++) {
      const U = ue + 0.5 - e, ve = J + 0.5 - t, xe = Math.max(Math.abs(U) - L, 0), we = Math.hypot(xe, ve) / t;
      if (we >= 1) continue;
      const te = we <= W ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - W)), ye = 1 - we, $ = 1 + A * (1 - ye) * (1 - ye), X = 1 - v * ye * ye, _e = $ * X / R;
      let $e = 1;
      if (F > 0) {
        const St = Math.floor((ve + t) / 1.5), Dt = Math.floor((U + e) / 8), jt = Zr(Vi(St * 41 + 500, Dt * 19 + 300));
        $e = 1 - F * 0.42 * jt;
      }
      const ze = Math.round(255 * Math.min(1, _ * te * _e * $e));
      if (ze <= 0) continue;
      const De = (J * w + ue) * 4;
      D[De] = d, D[De + 1] = p, D[De + 2] = y, D[De + 3] = ze;
    }
  return k.putImageData(E, 0, 0), xt.set(V, j), j;
}
function Vi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Zr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function dv(e, t, n, i, a, c, u) {
  const d = e + 0.5 - n, p = t + 0.5 - i, y = Math.max(0, n - i), _ = Math.max(Math.abs(d) - y, 0), w = Math.hypot(_, p) / i;
  if (w >= 1) return 0;
  const S = Zr(Vi(e * 17 + 3, t * 13 + 7)), A = w + c * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), F = hv(e, t, d, p, n, i), V = c * 0.55;
  if (F < V) return 0;
  const k = 0.45 + 0.55 * ((F - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * v * k));
}
function hv(e, t, n, i, a, c) {
  const u = Math.floor((n + a) / 3), d = Math.floor((i + c) / 2), p = Zr(Vi(u * 13 + 700, d * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((i + c) / 1.5), w = Zr(Vi(y * 23 + 800, _ * 29 + 500)), S = Zr(Vi(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + w * 0.3 + S * 0.15;
}
function mv(e, t, n, i, a) {
  const { r: c, g: u, b: d, a: p } = i, y = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, a)), S = `crayon:${y}:${_}:${n.toFixed(2)}:${c}:${u}:${d}:${p.toFixed(3)}:${w.toFixed(2)}`;
  if (xt.has(S)) {
    const k = xt.get(S);
    return xt.delete(S), xt.set(S, k), k;
  }
  xt.size >= Bc && xt.delete(xt.keys().next().value);
  const A = Uc(y, _), v = A.getContext("2d"), F = v.createImageData(y, _), V = F.data, j = Math.max(0, Math.min(1, n));
  for (let k = 0; k < _; k++)
    for (let E = 0; E < y; E++) {
      const D = dv(E, k, e, t, j, w, p);
      if (D <= 0) continue;
      const L = (k * y + E) * 4;
      V[L] = c, V[L + 1] = u, V[L + 2] = d, V[L + 3] = D;
    }
  return v.putImageData(F, 0, 0), xt.set(S, A), A;
}
function sm(e, t, n) {
  var F, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = lv(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = pv(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((F = t == null ? void 0 : t.angle) == null ? void 0 : F.value) ?? 0), y = cv(t, a), _ = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const j = a * d, k = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = fv(j, k, c, u, E, D, L);
  } else if (i === "crayon") {
    const j = a * d, k = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = mv(j, k, c, u, E);
  } else
    v = uv(a, c, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: y, desc: n, aspect: d, angle: p, stampKind: i, scatter: A, latitudeCorrection: w };
}
function pv(e) {
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
function gv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function ad(e, t, n, i, a) {
  const c = e.angle, u = e.desc.width;
  function d(y, _) {
    c === 0 ? e.ctx.drawImage(e.stampTex, y - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, _), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const p = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - p < 0 && d(t + u, n), t + p > u && d(t - u, n);
}
function Gc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: _ } = e.scatter, w = y * e.radiusPx * a, S = Vi(t, n);
    for (let A = 0; A < _; A++) {
      const v = Zr(S + A * 2) * Math.PI * 2, F = Math.sqrt(Zr(S + A * 2 + 1)) * w, V = t + Math.cos(v) * F, j = n + Math.sin(v) * F, k = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - j / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, L = k * e.aspect * D;
      ad(e, V, j, k, L);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = c * e.aspect * d;
  ad(e, t, n, c, p);
}
function od(e, t, n) {
  const i = sv(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, u = sm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * c;
    S > 0 && Math.abs(A - d[S - 1].x) > a * 0.5 && (A += A < d[S - 1].x ? a : -a), d.push({ x: A, y: v });
  }
  if (Gc(u, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let p = d[0], y = d[0], _ = d[0], w = 0;
  for (let S = 1; S < d.length; S++) {
    const A = d[S], v = { x: (y.x + A.x) * 0.5, y: (y.y + A.y) * 0.5 };
    S === 1 ? w = Fa(u, _.x, _.y, v.x, v.y, w) : w = ds(u, p, _, v, A, w), p = y, y = A, _ = v;
  }
  d.length === 2 ? Fa(u, _.x, _.y, y.x, y.y, w) : ds(u, p, _, y, y, w), e.restore();
}
function Jo(e, t, n) {
  var w;
  const i = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, u = gv(t), d = [];
  let p = 1 / 0, y = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = ov(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - d[S - 1].x) > a * 0.5 && (v += v < d[S - 1].x ? a : -a), d.push({ x: v, y: Number(A.y || 0) * c }), v < p && (p = v), v > y && (y = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(d[0].x + S, d[0].y);
    for (let A = 1; A < d.length; A++) e.lineTo(d[A].x + S, d[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, _(0), p < 0 && _(a), y > a && _(-a), e.restore();
}
function Mo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Jo(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? od(e, t, n) : (fa = lr(fa, n.width, n.height), vt(fa), od(fa.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(fa.canvas, 0, 0), e.restore());
}
function Br(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Fa(e, t, n, i, a, c) {
  const u = i - t, d = a - n, p = Math.hypot(u, d);
  if (p < 1e-9) return c;
  let y = e.spacingPx - c;
  for (; y <= p; ) {
    const _ = y / p;
    Gc(e, t + u * _, n + d * _, 1), y += e.spacingPx;
  }
  return p - y + e.spacingPx;
}
function ds(e, t, n, i, a, c) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, w = d, S = w + p, A = S + y, v = S - w, F = 16;
  let V = c, j = n.x, k = n.y;
  for (let E = 1; E <= F; E++) {
    const D = w + v * E / F, L = ((w - D) * t.x + (D - _) * n.x) / (w - _), W = ((w - D) * t.y + (D - _) * n.y) / (w - _), R = ((S - D) * n.x + (D - w) * i.x) / (S - w), J = ((S - D) * n.y + (D - w) * i.y) / (S - w), ue = ((A - D) * i.x + (D - S) * a.x) / (A - S), U = ((A - D) * i.y + (D - S) * a.y) / (A - S), ve = ((S - D) * L + (D - _) * R) / (S - _), xe = ((S - D) * W + (D - _) * J) / (S - _), C = ((A - D) * R + (D - w) * ue) / (A - w), we = ((A - D) * J + (D - w) * U) / (A - w), te = ((S - D) * ve + (D - w) * C) / (S - w), ye = ((S - D) * xe + (D - w) * we) / (S - w);
    V = Fa(e, j, k, te, ye, V), j = te, k = ye;
  }
  return V;
}
function bv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, u = c.width, d = n * c.height, p = e.activeStroke;
  let y = t * u;
  if (p && Math.abs(y - p.prev.x) > u * 0.5 && (y += y < p.prev.x ? u : -u), !p) {
    const A = sm(a, i, c), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), F = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", j = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Gc(A, y, d, 1), e.activeStroke = {
      pprev: { x: y, y: d },
      prev: { x: y, y: d },
      lastMidX: y,
      lastMidY: d,
      stampTex: A.stampTex,
      radiusPx: A.radiusPx,
      spacingPx: A.spacingPx,
      aspect: A.aspect,
      angle: A.angle,
      stampKind: A.stampKind,
      scatter: A.scatter,
      latitudeCorrection: A.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: F,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: j,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (p.prev.x + y) * 0.5, w = (p.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
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
  p.pointCount === 1 ? p.distSinceStamp = Fa(S, p.lastMidX, p.lastMidY, _, w, p.distSinceStamp) : p.distSinceStamp = ds(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: _, y: w },
    { x: y, y: d },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: y, y: d }, p.lastMidX = _, p.lastMidY = w, p.pointCount++, e.displayDirty = !0;
}
function fc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = Di(t, n), u = {
    descriptor: i,
    committedMask: Di(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Di(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = Di(t, n);
  let y = null, _ = "", w = null;
  function S(U) {
    return {
      actionGroupId: U,
      descriptor: i,
      committedPaint: Di(t, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(U) {
    let ve = a.get(U);
    return ve || (ve = S(U), a.set(U, ve)), ve;
  }
  function v(U) {
    return _ === "mask" ? u : y ? A(y) : d;
  }
  function F(U) {
    var ye;
    const ve = !w || w.length !== U.length || U.some(($, X) => $ !== w[X]), xe = _ === "paint" && ((ye = y ? a.get(y) : d) == null ? void 0 : ye.activeStroke) || null;
    let C = u.displayDirty || d.displayDirty || ve;
    for (const $ of U) {
      const X = a.get($);
      if (X != null && X.displayDirty) {
        C = !0;
        break;
      }
    }
    if (xe && (C = !0), !C) return;
    u.displayDirty = !1, d.displayDirty = !1;
    for (const $ of U) {
      const X = a.get($);
      X && (X.displayDirty = !1);
    }
    w = [...U];
    const we = p.ctx;
    vt(p);
    const te = !!(xe != null && xe.isEraser);
    for (const $ of U) {
      const X = a.get($);
      if (!X) continue;
      const $e = y === X.actionGroupId && _ === "paint" ? X.activeStroke : null;
      if (te)
        kt = lr(kt, t, n), vt(kt), kt.ctx.drawImage(X.committedPaint.canvas, 0, 0), Br(kt.ctx, c.canvas), we.drawImage(kt.canvas, 0, 0);
      else if (we.drawImage(X.committedPaint.canvas, 0, 0), $e) {
        const ze = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, $e.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = ze, we.drawImage(c.canvas, 0, 0), we.restore();
      }
    }
  }
  function V(U) {
    var xe, C, we, te, ye;
    for (const $ of a.values())
      vt($.committedPaint), vt($.currentStroke), $.activeStroke = null, $.displayDirty = !0;
    vt(u.committedMask), vt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, d.displayDirty = !0, w = null;
    const ve = [
      ...Array.isArray((C = (xe = U == null ? void 0 : U.painting) == null ? void 0 : xe.paint) == null ? void 0 : C.strokes) ? U.painting.paint.strokes : [],
      ...Array.isArray((te = (we = U == null ? void 0 : U.painting) == null ? void 0 : we.mask) == null ? void 0 : te.strokes) ? U.painting.mask.strokes : []
    ];
    for (const $ of ve) {
      if (((ye = $ == null ? void 0 : $.targetSpace) == null ? void 0 : ye.kind) !== "ERP_GLOBAL") continue;
      const X = String(($ == null ? void 0 : $.layerKind) || "paint"), $e = String(($ == null ? void 0 : $.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const ze = u.descriptor;
        $e ? (kt = lr(kt, ze.width, ze.height), vt(kt), Mo(kt.ctx, $, ze), Br(u.committedMask.ctx, kt.canvas)) : Mo(u.committedMask.ctx, $, ze);
        continue;
      }
      if ($e) {
        kt = lr(kt, i.width, i.height), vt(kt), Mo(kt.ctx, $, i);
        for (const ze of a.values())
          Br(ze.committedPaint.ctx, kt.canvas), ze.displayDirty = !0;
      } else {
        const ze = String(($ == null ? void 0 : $.actionGroupId) || "__default__"), De = A(ze), St = De.descriptor;
        Mo(De.committedPaint.ctx, $, St), De.displayDirty = !0;
      }
    }
    F([...a.keys()]);
  }
  function j(U, ve) {
    _ = String((U == null ? void 0 : U.layerKind) || "");
    const xe = String((U == null ? void 0 : U.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, vt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const C = xe ? d : A(String((U == null ? void 0 : U.actionGroupId) || "__default__"));
      y = xe ? "" : String((U == null ? void 0 : U.actionGroupId) || "__default__"), vt(C.currentStroke), C.activeStroke = null, C.displayDirty = !0;
    }
  }
  function k(U, ve) {
    var X;
    const xe = String((U == null ? void 0 : U.layerKind) || "paint"), C = String((U == null ? void 0 : U.toolKind) || "") === "eraser", we = xe === "mask" ? u : C ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__")), te = we.activeStroke, ye = we.descriptor;
    if (te && te.pointCount > 1) {
      const _e = we.currentStroke.ctx;
      _e.globalCompositeOperation = "source-over";
      const $e = {
        ctx: _e,
        stampTex: te.stampTex,
        radiusPx: te.radiusPx,
        spacingPx: te.spacingPx,
        desc: ye,
        aspect: te.aspect,
        angle: te.angle,
        stampKind: te.stampKind,
        scatter: te.scatter,
        latitudeCorrection: te.latitudeCorrection
      };
      te.pointCount === 2 ? Fa($e, te.lastMidX, te.lastMidY, te.prev.x, te.prev.y, te.distSinceStamp) : ds($e, te.pprev, { x: te.lastMidX, y: te.lastMidY }, te.prev, te.prev, te.distSinceStamp);
    }
    we.lassoPreviewActive && (vt(we.currentStroke), Jo(we.currentStroke.ctx, U, ye), we.lassoPreviewActive = !1);
    const $ = xe === "mask" ? u.committedMask : we.committedPaint;
    if (C && xe === "paint")
      for (const _e of a.values())
        Br(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (C)
      Br($.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (te == null ? void 0 : te.strokeOpacity) ?? 1));
      $.ctx.save(), $.ctx.globalAlpha = _e, $.ctx.drawImage(we.currentStroke.canvas, 0, 0), $.ctx.restore();
    }
    iv() && (String((U == null ? void 0 : U.toolKind) || ""), String((ye == null ? void 0 : ye.kind) || ""), Number((ye == null ? void 0 : ye.width) || 0), Number((ye == null ? void 0 : ye.height) || 0), String(((X = U == null ? void 0 : U.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((U == null ? void 0 : U.aspect) ?? 1), nd(we.currentStroke.canvas), nd($.canvas), void 0), vt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, y = null, _ = "", F([...a.keys()]);
  }
  function E(U) {
    if (_ === "mask")
      vt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !y)
      vt(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (y) {
      const ve = a.get(y);
      ve && (vt(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, ve.displayDirty = !0);
    }
    y = null, _ = "", F([...a.keys()]);
  }
  function D(U, ve) {
    var C;
    if (_ = String((U == null ? void 0 : U.layerKind) || ""), String(((C = U == null ? void 0 : U.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        vt(u.currentStroke), Jo(u.currentStroke.ctx, U, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const we = String((U == null ? void 0 : U.toolKind) || "") === "eraser", te = we ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__"));
        y = we ? "" : String((U == null ? void 0 : U.actionGroupId) || y || "__default__"), vt(te.currentStroke), Jo(te.currentStroke.ctx, U, te.descriptor), te.lassoPreviewActive = !0, te.displayDirty = !0;
      }
      F([...a.keys()]);
    }
  }
  function L(U) {
    return F(U ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function W(U) {
    return a.get(String(U)) ?? null;
  }
  function R() {
    return [...a.keys()];
  }
  function J(U) {
    var ye;
    const ve = a.get(String(U));
    if (!ve) return null;
    const xe = _ === "paint" && y === ve.actionGroupId, C = _ === "paint" && ((ye = y ? a.get(y) : d) == null ? void 0 : ye.activeStroke) || null;
    if (C != null && C.isEraser)
      return tn = lr(tn, t, n), vt(tn), tn.ctx.drawImage(ve.committedPaint.canvas, 0, 0), Br(tn.ctx, c.canvas), tn.canvas;
    const we = xe ? ve.activeStroke : null;
    if (!we) return ve.committedPaint.canvas;
    tn = lr(tn, t, n), vt(tn), tn.ctx.drawImage(ve.committedPaint.canvas, 0, 0);
    const te = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return tn.ctx.save(), tn.ctx.globalAlpha = te, tn.ctx.drawImage(c.canvas, 0, 0), tn.ctx.restore(), tn.canvas;
  }
  function ue() {
    return Nr = lr(Nr, t, n), vt(Nr), jl(Nr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (kt = lr(kt, t, n), vt(kt), kt.ctx.drawImage(u.committedMask.canvas, 0, 0), Br(kt.ctx, c.canvas), vt(Nr), jl(Nr.ctx, kt.canvas)) : jl(Nr.ctx, c.canvas)), Nr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: j,
    appendStrokePoint: bv,
    updateActiveStroke: D,
    commitActiveStroke: k,
    cancelActiveStroke: E,
    getErpTarget: L,
    ensureTarget: v,
    getGroupTarget: W,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: ue,
    getAllGroupIds: R
  };
}
function G(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function zt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function yv(e, t) {
  let n = zt(t) - zt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const sd = Math.PI / 180, ld = 0.12, vv = 3, _v = 35, xv = 140, ya = 100, wv = 20, cd = 0.8;
function Sv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = G(Number(e || ya), 1, 179) * sd;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / sd;
}
function Mv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Fs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ya })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(j, k = null) {
    d && d(j, k);
  }
  function _(j, k, E = null, D = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(j || 0), p.drag.lastY = Number(k || 0), p.drag.lastTs = Number(D || performance.now()), p.drag.pointerId = E, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], y("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: E }), !0;
  }
  function w(j, k, E = "pano", D = performance.now()) {
    if (!p.drag.active) return !1;
    const L = Number(D || performance.now()), W = Number(j), R = Number(k), J = W - p.drag.lastX, ue = R - p.drag.lastY;
    p.drag.lastX = W, p.drag.lastY = R, p.drag.lastTs = L;
    const U = i() || { x: 1, y: 1 }, ve = Number(U.x || 1), xe = Number(U.y || 1), C = { ...t() };
    let we = 0, te = 0;
    if (E === "unwrap") {
      const $ = a() || { w: 1, h: 1 }, X = Math.max(1, Number($.w || 1)), _e = Math.max(1, Number($.h || 1)), $e = J / X, ze = ue / _e;
      we = -$e * 360 * ve, te = ze * 180 * xe;
    } else {
      const $ = c() || { w: 0, h: 0 }, X = Math.max(1, Number($.w || 0)), _e = Math.max(1, Number($.h || 0));
      if (X > 1 && _e > 1) {
        const $e = G(Number(C.fov || ya), 1, 179), ze = G(Sv($e, X, _e), 0.1, 179);
        we = -(J / X) * $e * ve, te = ue / _e * ze * xe;
      } else
        we = -J * ld * ve, te = ue * ld * xe;
    }
    C.yaw = zt(Number(C.yaw || 0) + we), C.pitch = G(Number(C.pitch || 0) + te, -89.9, 89.9), n(C), p.velHistory.push({ ts: L, yaw: C.yaw, pitch: C.pitch });
    let ye = 0;
    for (; ye < p.velHistory.length - 1 && p.velHistory[ye].ts < L - 100; ) ye++;
    return ye > 0 && p.velHistory.splice(0, ye), p.inertia.active = !1, p.inertia.lastTs = L, u(), y("drag", { phase: "move", dx: J, dy: ue, dYaw: we, dPitch: te }), !0;
  }
  function S(j = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const k = Number(j || performance.now());
    p.drag.lastTs = k;
    const E = p.velHistory.filter((L) => k - L.ts <= 80);
    if (E.length >= 2) {
      const L = E[0], W = E.at(-1), R = Math.max(1e-3, (W.ts - L.ts) / 1e3);
      let J = W.yaw - L.yaw;
      J > 180 && (J -= 360), J < -180 && (J += 360), p.inertia.vx = J / R, p.inertia.vy = (W.pitch - L.pitch) / R;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const D = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = D > wv, p.inertia.lastTs = k, y("drag", { phase: "end", speed: D, inertiaActive: p.inertia.active }), !0;
  }
  function A(j = performance.now()) {
    if (!p.inertia.active) return !1;
    const k = Number(j || performance.now()), E = Math.max(1e-3, (k - (p.inertia.lastTs || k)) / 1e3);
    p.inertia.lastTs = k;
    const D = { ...t() };
    D.yaw = zt(Number(D.yaw || 0) + p.inertia.vx * E), D.pitch = G(Number(D.pitch || 0) + p.inertia.vy * E, -89.9, 89.9);
    const L = Math.exp(-5.5 * E);
    return p.inertia.vx *= L, p.inertia.vy *= L, Math.abs(p.inertia.vx) < cd && Math.abs(p.inertia.vy) < cd && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(D), u(), p.inertia.active;
  }
  function v(j) {
    const k = Math.sign(Number(j || 0));
    if (!k) return !1;
    const E = { ...t() }, D = Number(E.fov || ya);
    return E.fov = G(D + k * vv, _v, xv), n(E), u(), y("wheel", { deltaSign: k, fovBefore: D, fovAfter: E.fov }), !0;
  }
  function F(j) {
    return v(Math.sign(Mv(j)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: ya }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
  }
  return {
    state: p,
    startDrag: _,
    moveDrag: w,
    endDrag: S,
    stepInertia: A,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: V
  };
}
function hs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const ud = Math.PI / 180;
function da(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Nv(e) {
  const t = e || {}, n = da(t.yaw_deg, 0), i = da(t.pitch_deg, 0), a = da(t.roll_deg ?? t.rot_deg, 0), c = Vl(da(t.hFOV_deg, 90), 1, 179), u = Vl(da(t.vFOV_deg, 60), 1, 179), d = Math.tan(c * ud * 0.5) / Math.max(1e-6, Math.tan(u * ud * 0.5)), p = Vl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: u,
    aspect: p
  };
}
const lm = 0.28;
function kv(e) {
  const t = e && typeof e == "object" ? e : {}, n = G(Number(t.x0 ?? 0), 0, 1), i = G(Number(t.y0 ?? 0), 0, 1), a = G(Number(t.x1 ?? 1), 0, 1), c = G(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Pv(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), c = t.includeHidden === !0, u = e.visible === !1, d = c && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: G(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: G(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: kv(e.crop),
    opacity: d ? lm : G(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function Ls(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => Pv(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, d) => Number(u.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function cm(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Ls(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var v;
    const p = String((d == null ? void 0 : d.assetId) || "").trim(), y = p || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const _ = p ? a[p] : null, w = t(y, _, d);
    if (w instanceof HTMLImageElement && !w.complete) return;
    const S = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.videoWidth) || (w == null ? void 0 : w.width) || 0), A = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.videoHeight) || (w == null ? void 0 : w.height) || 0);
    !w || S <= 0 || A <= 0 || (u.add(y), c.push({
      assetId: y,
      source: w,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, y, _, w)) ?? [
        y,
        Number(w.naturalWidth || w.videoWidth || w.width || 0),
        Number(w.naturalHeight || w.videoHeight || w.height || 0),
        String(w.currentSrc || w.src || "")
      ].join("|"))
    }));
  }), c;
}
function Kc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Av(e, t = 360) {
  return Kc(e, t);
}
function Ir(e) {
  const t = Nv(e || {});
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
const { app: pt } = Go;
function dc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Go == null ? void 0 : Go.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ti = Math.PI / 180, ms = {}, Cv = { Nu: 24, Nv: 14 }, Tv = 10, Iv = 120;
function Dv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ha(e) {
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
function Ev() {
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
function ni(e) {
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
function um(e) {
  const t = ni(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function fm(e, t, n) {
  um(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function hc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function dm(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Ov(e) {
  return hs(dm(e));
}
function Qr(e = null) {
  var c, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (c = pt == null ? void 0 : pt.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function hm(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Qr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Qr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Qr(t)
  };
}
const ka = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Qr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Qr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, mm(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function mm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : hm(i, e).chosenPath, c = hc(e);
      this.activeBackend = c;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (c === a && c !== "none" && u === i && d === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Hi(e, { keepMonitor: i === "stickers" }), S1(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = hc(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Hi(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Hi(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Rv(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Hi(e, t = {}) {
  var i, a, c, u, d;
  if (!e) return;
  gs.unregister(e), Rv(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (d = (u = n.root) == null ? void 0 : u.remove) == null || d.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const y = String((p == null ? void 0 : p.name) || ""), _ = String((p == null ? void 0 : p.type) || ""), w = dc();
      return !(y === w || _ === w || y === "pano_preview" || _ === "pano_preview" || y === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ka.unregister(e);
}
function ri(e, t, n) {
  return { x: e, y: t, z: n };
}
function fd(e, t) {
  return ri(e.x + t.x, e.y + t.y, e.z + t.z);
}
function No(e, t) {
  return ri(e.x * t, e.y * t, e.z * t);
}
function Hl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function dd(e, t) {
  return ri(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ko(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ri(e.x / t, e.y / t, e.z / t);
}
function Yr(e, t) {
  const n = e * ti, i = t * ti, a = Math.cos(i);
  return ri(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Wc(e, t, n = 0) {
  const i = Yr(e, t), a = ri(0, 1, 0);
  let c = dd(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ri(1, 0, 0)), c = ko(c);
  let u = ko(dd(i, c));
  const d = n * ti, p = Math.cos(d), y = Math.sin(d), _ = fd(No(c, p), No(u, y)), w = fd(No(c, -y), No(u, p));
  return { fwd: i, right: ko(_), up: ko(w) };
}
function Fv(e, t = "#00ff00") {
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
function Lv(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = La(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Yc(e) {
  var d, p;
  const t = Lv(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = La(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((p = La(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const u = Fv(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function La(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function hd(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function pm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function $v(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function gm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function bm(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = $v(e == null ? void 0 : e.graph, n)), i;
}
function zv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function qc(e, t = []) {
  const n = zv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function md(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ps(e, t) {
  const n = md(e), i = md(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function jv(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = qc(e, t).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...c])], d = [];
  for (const y of u) {
    const _ = bm(e, y);
    if ((_ == null ? void 0 : _.id) != null) {
      d.push(String(_.id));
      continue;
    }
    const w = (p = n[y]) == null ? void 0 : p.link;
    if (w == null) continue;
    const S = pm(e == null ? void 0 : e.graph, w), { originId: A } = gm(S);
    A != null && d.push(String(A));
  }
  return [...new Set(d)];
}
const gs = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = an) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var y, _, w, S, A;
        if (!c) return;
        const u = ps(i, c == null ? void 0 : c.id);
        jv(c, ["erp_image", "bg_erp"]).some((v) => ps(i, v)), !(String(c.__panoPreviewMode || "") === "cutout" && !u) && (pc(c), (_ = (y = c.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || _.call(y), (w = c.setDirtyCanvas) == null || w.call(c, !0, !0), (A = (S = c.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
      });
    }, an.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = an) != null && e.removeEventListener) || (an.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function bs(e) {
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
  return typeof ((c = an) == null ? void 0 : c.apiURL) == "function" ? an.apiURL(a) : a;
}
function Vv(e) {
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
function Uv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Bv(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Vv(t)) return [t];
  const { filename: n, subfolder: i } = Hv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => bs({
    filename: n,
    subfolder: i,
    type: c
  }));
  return Uv([...a, t]);
}
function Gv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? bs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function pd(e) {
  const t = pt == null ? void 0 : pt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (ps(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const u of c)
      if (ps(u, a)) return t[u];
  }
  return null;
}
function dr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return dr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return bs({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = dr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : bs(e);
}
function Kv(e) {
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
function Wv(e, t) {
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
function Yv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => t.push(u));
  }, a = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, u + 1), a(c.ui, u + 1), a(c.data, u + 1), a(c.result, u + 1));
  };
  return a(e, 0), t;
}
function qv(e, t) {
  try {
    const n = Yv(t);
    let i = "";
    for (const a of n)
      if (i = dr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Wv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Xv(e, t = []) {
  var y, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = qc(e, t).map((w) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(w))).filter((w) => w >= 0), c = n.map((w, S) => ({ input: w, idx: S })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), u = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const w of u) {
    const S = n[w], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = pm(e.graph, A), { originId: F, originSlot: V } = gm(v);
    if (F == null) continue;
    const j = bm(e, w, F);
    if (!j) continue;
    const k = Number(V || 0), E = pd((j == null ? void 0 : j.id) ?? F), D = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (D.length) {
      const J = [];
      k >= 0 && k < D.length && J.push(D[k]), J.push(...D);
      for (const ue of J) {
        const U = dr(ue);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let L = [];
    try {
      L = typeof (pt == null ? void 0 : pt.getNodeImageUrls) == "function" ? pt.getNodeImageUrls(j) || [] : [];
    } catch {
      L = [];
    }
    if (Array.isArray(L) && L.length) {
      const J = [];
      k >= 0 && k < L.length && J.push(L[k]), J.push(...L);
      for (const ue of J) {
        const U = dr(ue);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const W = Array.isArray(j == null ? void 0 : j.imgs) ? j.imgs : [];
    if (W.length) {
      const J = [];
      k >= 0 && k < W.length && J.push(W[k]), J.push(...W);
      for (const ue of J) {
        const U = dr(ue);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const R = (y = j == null ? void 0 : j.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (R) {
      let J = dr(R.value);
      if (J && !J.includes("/") && !J.includes(":") && (j.comfyClass === "LoadImage" || j.type === "LoadImage") && (J = an.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((S == null ? void 0 : S.name) || ""), { src: J, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const d = pd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && p.push(...d.pano_input_images), Array.isArray((_ = d == null ? void 0 : d.ui) == null ? void 0 : _.pano_input_images) && p.push(...d.ui.pano_input_images), p.length > 0)
    for (const w of p) {
      const S = dr(w);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Jv(e, t = [], n = {}) {
  const i = Xv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = Bv(a);
  if (!c.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(d);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return u && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const y = new Image(), _ = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = y, e.__panoLinkedInputImageCache.set(d, _);
  let w = -1;
  const S = () => {
    var v, F, V, j;
    if (w += 1, w >= c.length) {
      if (((F = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : F.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const A = c[w];
    _.pendingResolvedSrc = A, y.src = A;
  };
  return y.onload = () => {
    var A, v, F;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, d)) === _ && _.pendingImg === y && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || y.src || ""), _.img = y, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (F = e.setDirtyCanvas) == null || F.call(e, !0, !0);
  }, y.onerror = (A) => {
    var v, F, V, j;
    if (w + 1 < c.length) {
      S();
      return;
    }
    if (((F = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : F.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), u && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : y;
}
function mc(e, t = [], n = null, i = {}) {
  const a = Jv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function pc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function ym(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Gr(e, t, n = "") {
  const i = ym(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Iv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function gc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, d = i / c, p = Math.min(u, d);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Zv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || u <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), d + Math.round(14 * n)), _ = i + (c - p) * 0.5, w = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, w, p, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + p * 0.5, w + y * 0.5 + 0.5), e.restore();
}
function Po(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function Qv(e) {
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
function vm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let d = a, p = a / u;
  return p > c && (p = c, d = c * u), {
    x: n + (a - d) * 0.5,
    y: i + (c - p) * 0.5,
    w: d,
    h: p
  };
}
function e1(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const u = vm(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function t1(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var d;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof c.computeSize == "function" ? c.computeSize(((d = ni(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Zo(e) {
  const n = t1(e) + 2, i = 8, a = ni(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: i, y: n, w: c, h: u };
}
function _m(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Gv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var p, y, _;
    (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function n1(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function bc(e, t) {
  return Ls(t, {
    selectedId: null,
    hoveredId: null
  });
}
function yc(e, t, n) {
  return cm(t, (i, a) => _m(e, i, a), { scene: n });
}
function r1(e, t) {
  var u;
  const n = Sm(e, t);
  if (!n) return [];
  const i = Mm(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], c = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const p = n.getGroupDisplayCanvas(d);
    return p ? {
      id: `paint_group:${d}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(c.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function i1(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, u = (d) => {
    const p = d.x - a, y = d.y - c, _ = Math.hypot(p, y) || 1;
    return { x: d.x + p / _ * i, y: d.y + y / _ * i };
  };
  return [u(e), u(t), u(n)];
}
function gd(e, t, n, i, a, c, u, d) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [y, _, w] = i1(c, u, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(_.x, _.y), e.lineTo(w.x, w.y), e.closePath(), e.clip();
  const S = (c.x * (i.y - a.y) + u.x * (a.y - n.y) + d.x * (n.y - i.y)) / p, A = (c.x * (a.x - i.x) + u.x * (n.x - a.x) + d.x * (i.x - n.x)) / p, v = (c.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / p, F = (c.y * (i.y - a.y) + u.y * (a.y - n.y) + d.y * (n.y - i.y)) / p, V = (c.y * (a.x - i.x) + u.y * (n.x - a.x) + d.y * (i.x - n.x)) / p, j = (c.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, F, A, V, v, j), e.drawImage(t, 0, 0), e.restore();
}
function xm(e, t, n, i) {
  const a = Hl(e, t.right), c = Hl(e, t.up), u = Hl(e, t.fwd);
  if (u <= 1e-4) return null;
  const d = c / u / i, p = a / u / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function wm(e, t, n, i, a, c, u, d = 12, p = 9) {
  var we;
  const y = G(Number(u.hFOV_deg || 30), 1, 179) * ti, _ = G(Number(u.vFOV_deg || 30), 1, 179) * ti, w = Math.tan(y * 0.5), S = Math.tan(_ * 0.5), A = u.crop || {}, v = G(Number(A.x0 ?? 0), 0, 1), F = G(Number(A.y0 ?? 0), 0, 1), V = G(Number(A.x1 ?? 1), 0, 1), j = G(Number(A.y1 ?? 1), 0, 1), k = Math.max(1e-4, V - v), E = Math.max(1e-4, j - F), D = Wc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), L = [], W = [], R = [], J = [];
  for (let te = 0; te <= p; te++) {
    const ye = te / p, X = (1 - (F + ye * E) * 2) * S;
    for (let _e = 0; _e <= d; _e++) {
      const $e = _e / d, De = ((v + $e * k) * 2 - 1) * w, St = D.fwd.x + D.right.x * De + D.up.x * X, Dt = D.fwd.y + D.right.y * De + D.up.y * X, jt = D.fwd.z + D.right.z * De + D.up.z * X, Mt = Math.hypot(St, Dt, jt) || 1e-8, Ct = St / Mt, dn = Dt / Mt, Je = jt / Mt, Kt = Ct * i.right.x + dn * i.right.y + Je * i.right.z, kn = Ct * i.up.x + dn * i.up.y + Je * i.up.z, O = Ct * i.fwd.x + dn * i.fwd.y + Je * i.fwd.z;
      if (O <= 1e-4)
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = null, W[te][_e] = null;
      else {
        const H = kn / O / a, Q = Kt / O / a;
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = n.x + n.w * 0.5 + Q * n.h * 0.5, W[te][_e] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      R[te] || (R[te] = []), J[te] || (J[te] = []), R[te][_e] = $e, J[te][_e] = ye;
    }
  }
  const ue = (we = c.assets) == null ? void 0 : we[u.asset_id], U = _m(t, u.asset_id, ue);
  if (!U || !U.complete || !U.naturalWidth) return;
  const ve = Number(U.naturalWidth || U.width || 1), xe = Number(U.naturalHeight || U.height || 1), C = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = C;
  for (let te = 0; te < p; te++)
    for (let ye = 0; ye < d; ye++) {
      const $ = L[te][ye], X = W[te][ye], _e = L[te][ye + 1], $e = W[te][ye + 1], ze = L[te + 1][ye], De = W[te + 1][ye], St = L[te + 1][ye + 1], Dt = W[te + 1][ye + 1];
      if ($ === null || _e === null || ze === null || St === null) continue;
      const jt = R[te][ye] * ve, Mt = J[te][ye] * xe, Ct = R[te][ye + 1] * ve, dn = J[te][ye + 1] * xe, Je = R[te + 1][ye] * ve, Kt = J[te + 1][ye] * xe, kn = R[te + 1][ye + 1] * ve, O = J[te + 1][ye + 1] * xe;
      gd(e, U, { x: jt, y: Mt }, { x: Ct, y: dn }, { x: kn, y: O }, { x: $, y: X }, { x: _e, y: $e }, { x: St, y: Dt }), gd(e, U, { x: jt, y: Mt }, { x: kn, y: O }, { x: Je, y: Kt }, { x: $, y: X }, { x: St, y: Dt }, { x: ze, y: De });
    }
}
function a1(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Yc(e), a = Zo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = Wc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * ti * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = mc(
    e,
    qc(e, ["erp_image", "bg_erp"]),
    () => {
      var D, L, W;
      (L = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || L.call(D), (W = e.setDirtyCanvas) == null || W.call(e, !0, !1);
    }
  ), p = !!(d && d.complete && (d.naturalWidth || d.width)), y = Pm(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = y || _, S = ms, A = bc(e, i), v = yc(e, i, A), F = Kc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = ei()), p) {
    const D = Rs({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(v) ? v.map((R) => `${String((R == null ? void 0 : R.assetId) || "")}:${String((R == null ? void 0 : R.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), W = e.__panoRuntimeCore.syncState(D) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", F, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!W, W && t.drawImage(W, a.x, a.y, a.w, a.h);
  }
  const j = w ? 8 : 12, k = w ? 6 : 9, E = n1(e, i);
  if (!p || E.length === 0) {
    const D = gc(t == null ? void 0 : t.canvas, a);
    Nm(t, a, c, u, D);
  }
  !V && p && ys(e, t, a, c, u, d, S), !V && E.length > 0 && E.forEach((D) => wm(t, e, a, c, u, i, D, j, k)), t.restore();
}
function o1(e, t, n, i, a = "preview_scene", c = "") {
  const u = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Rs({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((d) => `${String((d == null ? void 0 : d.assetId) || "")}:${String((d == null ? void 0 : d.revision) || "")}`).join(",") : ""
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
function Qo(e, t, n, i) {
  var c, u, d, p, y, _;
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
      const w = i.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(w[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = l1(e, t, i);
  return a || null;
}
function s1(e, t) {
  var w, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (w = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : w.call(a), u = (t == null ? void 0 : t.ds) || ((S = pt == null ? void 0 : pt.canvas) == null ? void 0 : S.ds);
  if (!c || !u) return null;
  const d = Number(u.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / d - Number(p[0] || 0), _ = (i - Number(c.top || 0)) / d - Number(p[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function l1(e, t, n) {
  var a, c;
  const i = s1(t, n || (pt == null ? void 0 : pt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Ao(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), ni(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", fm(e, 320, 180), Ei(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, A;
    const w = t ? t.apply(this, arguments) : void 0;
    try {
      const v = arguments[0];
      v && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), a1(this, v, i));
    } catch {
    }
    return w;
  }, e.onResize = function() {
    var S;
    const w = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, vs(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), Am(this, 220, null), w;
  };
  const i = Fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (w) => {
      e.__panoPreviewView = w;
    },
    getViewportSize: () => {
      const w = Zo(e);
      return {
        w: Math.max(1, Number((w == null ? void 0 : w.w) || 0)),
        h: Math.max(1, Number((w == null ? void 0 : w.h) || 0))
      };
    },
    onInteraction: () => {
      var w;
      km(e), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(w, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const F = Qo(this, w, S, A) || { x: 0, y: 0 }, V = ni(this), j = Number((V == null ? void 0 : V[0]) || 0), k = Number((V == null ? void 0 : V[1]) || 0);
        if (F.x >= j - 20 && F.y >= k - 20)
          return a ? a.apply(this, arguments) : void 0;
        const D = Zo(this);
        if (hd(F.x, F.y, D))
          return (w == null ? void 0 : w.button) === 0 && i.startDrag(F.x, F.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(w, S, A) {
    try {
      const v = Qo(this, w, S, A);
      if (i.state.drag.active) {
        if (typeof (w == null ? void 0 : w.buttons) == "number" && (w.buttons & 1) === 0)
          return i.endDrag(), !0;
        const F = v || i.state.drag;
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
  const d = e.onMouseLeave;
  e.onMouseLeave = function() {
    const w = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), w;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(w, S, A) {
    var v, F;
    try {
      if ((v = this.flags) != null && v.collapsed) return p ? p.apply(this, arguments) : void 0;
      const V = Qo(this, w, S, A), j = Zo(this);
      if (!V || !hd(V.x, V.y, j)) return p ? p.apply(this, arguments) : void 0;
      const k = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(k)) && ((F = this.setDirtyCanvas) == null || F.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = u, e.onMouseLeave = d, e.onMouseWheel = p, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), ka.unregister(this), gs.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function c1(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Sm(e, t) {
  var y, _, w, S, A, v, F, V, j, k, E, D;
  const n = (_ = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, i = (S = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const u = c1(e, t), d = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = fc(u), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.paint) !== p.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== p.mask || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.groups) !== p.groups || ((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Mm(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function u1(e, t) {
  const n = Sm(e, t);
  if (!n) return null;
  const i = Mm(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function f1(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = dr(i);
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
function bd(e, t) {
  var c, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = f1(e, t, () => {
      var p, y;
      return (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : y.call(p);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = u1(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function d1(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function h1(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function m1(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = d1(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = h1(e, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const y = p.getImageData(0, 0, u.width, u.height).data, _ = t.getImageData(0, 0, i, a), w = _.data, S = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let v = 0; v < a; v += 1) {
      const F = (v + 0.5) * u.height / a - 0.5, V = G(Math.floor(F), 0, A), j = G(V + 1, 0, A), k = G(F - V, 0, 1);
      for (let E = 0; E < i; E += 1) {
        const D = (E + 0.5) * u.width / i - 0.5, L = G(Math.floor(D), 0, S), W = G(L + 1, 0, S), R = G(D - L, 0, 1);
        let J = 0, ue = 0, U = 0, ve = 0;
        const xe = (te, ye, $) => {
          const X = (ye * u.width + te) * 4, _e = (y[X + 3] || 0) / 255;
          J += _e * $, ue += (y[X] || 0) / 255 * _e * $, U += (y[X + 1] || 0) / 255 * _e * $, ve += (y[X + 2] || 0) / 255 * _e * $;
        };
        if (xe(L, V, (1 - R) * (1 - k)), xe(W, V, R * (1 - k)), xe(L, j, (1 - R) * k), xe(W, j, R * k), J <= 1e-6) continue;
        const C = (v * i + E) * 4, we = 1 - J;
        w[C] = Math.round(G((ue + w[C] / 255 * we) * 255, 0, 255)), w[C + 1] = Math.round(G((U + w[C + 1] / 255 * we) * 255, 0, 255)), w[C + 2] = Math.round(G((ve + w[C + 2] / 255 * we) * 255, 0, 255)), w[C + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function yd(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== d || p.width !== a || p.height !== c) {
    (!p || p.width !== a || p.height !== c) && (p = document.createElement("canvas"), p.width = a, p.height = c, e.__panoPreviewBgPaint = p);
    const y = p.getContext("2d");
    y.clearRect(0, 0, a, c), y.drawImage(t, 0, 0, a, c), m1(e, y, n, a, c, "__panoPreviewOverlayScratch"), p.__revKey = d;
  }
  return p;
}
function p1(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  ym(e, a);
  const c = Yc(e), u = t.parentElement, d = 1, p = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(p * d)), w = Math.max(64, Math.round(y * d)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = Qv(c), v = mc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var J, ue;
          return (ue = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ue.call(J);
        },
        { preserveReadyWhilePending: !1 }
      ), F = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const V = { x: 0, y: 0, w: _, h: w }, j = F ? G(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, k = A ? Ir(A) : null, E = G(Number((k == null ? void 0 : k.aspect) || j || 1), 0.05, 20), D = vm(V, E);
      gc(t, V), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, w);
      let L = "none", W = "Open editor and add frame", R = "";
      if (R = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !F)
          L = "loading";
        else if (F) {
          const J = bc(e, c), ue = yc(e, c, J), U = r1(e, c), ve = ba({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(ue) ? ue.map((C) => `${String((C == null ? void 0 : C.assetId) || "")}:${String((C == null ? void 0 : C.revision) || "")}`).join(",") : "",
              Array.isArray(U) ? U.map((C) => `${String((C == null ? void 0 : C.id) || "")}:${String((C == null ? void 0 : C.revision) || "")}:${Number((C == null ? void 0 : C.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: J,
            textures: ue,
            rasterEntries: U,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = ei()), e.__panoRuntimeCore.syncState(ve), e.__panoRuntimeCore.renderToContext(
            S,
            D,
            Ir(A),
            { width: D.w, height: D.h, dpr: 1 }
          ) || (L = "empty", W = "Open editor or run node");
        } else
          L = "empty", W = "Connect ERP image";
      else {
        if (F) {
          const J = bd(e, c), ue = J != null && J.source ? yd(e, v, J.source, J.revision || "") : v;
          e1(S, ue, V, 0.44);
        }
        L = "empty", W = "Open editor and add frame";
      }
      L === "loading" ? (Po(e, !1), Gr(e, !0, R)) : L === "empty" ? (Po(e, !0, W), Gr(e, !1, "")) : (Po(e, !1), Gr(e, !1, ""));
    } else {
      Po(e, !1), (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const A = { x: 0, y: 0, w: _, h: w }, v = gc(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, w), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const F = Wc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * ti * 0.5), j = mc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, C;
          return (C = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : C.call(xe);
        }
      ), k = !!(j && j.complete && (j.naturalWidth || j.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, w);
      const E = bc(e, c), D = yc(e, c, E), L = Kc(e.__panoPreviewView, c == null ? void 0 : c.coverage), W = bd(e, c), R = (W == null ? void 0 : W.source) || null, J = k && R ? yd(e, j, R, (W == null ? void 0 : W.revision) || "") : j, ue = J !== j ? String(J.__revKey || "") : j ? [
        String(j.currentSrc || j.src || ""),
        Number(j.naturalWidth || j.width || 0),
        Number(j.naturalHeight || j.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = ei());
      let U = !1;
      if (k) {
        const C = e.__panoDomRuntimeCore.syncState(
          o1(J, c, E, D, "runtime_dom_scene", ue)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", L, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        C && (S.drawImage(C, A.x, A.y, A.w, A.h), U = !0);
      }
      const ve = E.stickers;
      if (k && U)
        Gr(e, !1, "");
      else if (k)
        ys(e, S, A, F, V, J, ms), Gr(e, !1, "");
      else if (R)
        ys(e, S, A, F, V, R, ms), Gr(e, !!j && !k, String((j == null ? void 0 : j.src) || ""));
      else {
        const xe = !!j && !k;
        Gr(e, xe, String((j == null ? void 0 : j.src) || "")), xe && Zv(S, A, v);
      }
      if ((!k || ve.length === 0) && Nm(S, A, F, V, v), !U && ve.length > 0) {
        const xe = Pm(e), C = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || C, te = we ? 8 : 12, ye = we ? 6 : 9;
        ve.forEach(($) => wm(S, e, A, F, V, c, $, te, ye));
      } else if (!j || !k) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, w * 0.5 + 24 * v);
      }
    }
}
function ys(e, t, n, i, a, c, u = Cv) {
  const d = Yc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = ei());
  const y = Kv(c), _ = Rs({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: y,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(_)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(p.yaw || 0),
    pitchDeg: Number(p.pitch || 0),
    fovDeg: Number(p.fov || 100),
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  S && t.drawImage(S, n.x, n.y, n.w, n.h);
}
function vd(e, t, n, i, a, c, u = 1) {
  let d = !1;
  e.strokeStyle = c, e.lineWidth = u, e.beginPath();
  for (const p of t) {
    const y = xm(p, n, i, a);
    if (!y) {
      d = !1;
      continue;
    }
    d ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), d = !0);
  }
  e.stroke();
}
function Nm(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let w = -180; w <= 180; w += 15) _.push(Yr(w, y));
    vd(e, _, n, t, i, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let w = -89; w <= 89; w += 15) _.push(Yr(y, w));
    vd(e, _, n, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: Yr(0, 0) },
    { name: "Right", dir: Yr(90, 0) },
    { name: "Back", dir: Yr(180, 0) },
    { name: "Left", dir: Yr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((y) => {
    const _ = xm(y.dir, n, t, i);
    _ && e.fillText(y.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function g1(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function km(e) {
  const t = g1(e);
  t.dragging = !1, t.hqFrames = Tv;
}
function vs(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Pm(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function b1(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function y1(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
}
function ki(e, t) {
  return y1(e, t) ? !1 : (b1(e), !0);
}
function v1() {
  var n;
  const e = (n = pt == null ? void 0 : pt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function _1(e) {
  var n;
  if (!e) return;
  const t = (n = pt == null ? void 0 : pt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function x1(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !um(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function w1(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function _d(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, vs(e, 150), t == null || t(), Am(e, 180, t);
    }
  };
}
function Am(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ei(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function S1(e, t = {}) {
  var $;
  const n = t.__allowStandalone === !0, i = Ov(e);
  if (i && !n) {
    dm(e);
    return;
  }
  i && x1(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", gs.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ka.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), p = a ? hm(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Qr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (p.chosenPath = d, p.reason = "controller_target_backend");
  const y = a ? p.chosenPath : "dom", _ = p.signature || Qr(e);
  if (Number(e.__panoRebindGeneration || 0), hc(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, ni(e), e.__panoFrontendSig = _, e.__panoStickersPath = y, a && ka.register(e), a && y === "legacy_draw") {
    if (c) return;
    Hi(e, { keepMonitor: !0 }), Ao(e);
    return;
  }
  if (($ = e.__panoDomPreview) != null && $.widget) return;
  if (e.__panoLegacyPreviewHooked && Hi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && Ao(e);
    return;
  }
  const w = t.noPreview === !0, S = a || w ? 0 : 56, A = document.createElement("div");
  if (Ev(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), w && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    w ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), w) {
    const X = e.addDOMWidget(dc(), "preview", A, _d(e, null));
    Ei(e), e.__panoDomPreview = { widget: X, root: A, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const v = document.createElement("div");
  v.style.cssText = [
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
  const V = document.createElement("div");
  V.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", v.appendChild(F), v.appendChild(V), A.appendChild(v), fm(e, 120, 120), Ei(e);
  let j = null;
  try {
    w1(e, S, () => {
      var X, _e;
      return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
    }), j = e.addDOMWidget(
      dc(),
      "preview",
      A,
      _d(e, () => {
        var X, _e;
        return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
      }, S)
    );
  } catch {
    a && Ao(e);
    return;
  }
  const k = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, E = () => {
    k.needsDraw = !0, k.raf || (k.raf = requestAnimationFrame(W));
  }, D = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    vs(e, 150), E();
  }) : null;
  D == null || D.observe(v);
  const L = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const X = 3, _e = ($e) => {
      requestAnimationFrame(() => {
        var De;
        const ze = !!(A != null && A.isConnected && (v != null && v.isConnected) && (F != null && F.isConnected) && Number(v.clientHeight || 0) > 0 && Number(F.clientHeight || 0) > 0);
        if (!ze && $e < X) {
          _e($e + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((F == null ? void 0 : F.clientHeight) || 0), !ze) {
          if (c) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((F == null ? void 0 : F.clientHeight) || 0);
            return;
          }
          Hi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Ao(e), (De = e.setDirtyCanvas) == null || De.call(e, !0, !0);
        }
      });
    };
    _e(1);
  }, W = (X) => {
    var $e, ze, De;
    k.raf = 0;
    const _e = R.stepInertia(X);
    (k.needsDraw || _e) && (k.needsDraw = !1, ($e = e.flags) != null && $e.collapsed || p1(e, F, null, R), (ze = e.setDirtyCanvas) == null || ze.call(e, !0, !1)), (_e || k.needsDraw) && (k.raf = requestAnimationFrame(W)), Dv() && (!e.__panoDebugLastTs || X - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = X, e.__panoPreviewMode, ni(e), ha(A), ha(v), ha(F), ha(A.parentElement), ha((De = A.parentElement) == null ? void 0 : De.parentElement), Number(F.width || 0), Number(F.height || 0), void 0);
  }, R = Fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (X) => {
      e.__panoPreviewView = X;
    },
    onInteraction: () => {
      E();
    }
  });
  F.addEventListener("pointerdown", (X) => {
    var _e, $e;
    ki(X, v) && u && X.button === 0 && ((_e = A.focus) == null || _e.call(A), ($e = F.setPointerCapture) == null || $e.call(F, X.pointerId), F.style.cursor = "grabbing", R.startDrag(X.clientX, X.clientY, X.pointerId));
  }), F.addEventListener("pointermove", (X) => {
    !u || !R.state.drag.active || (ki(X, v), R.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const J = (X) => {
    var _e;
    !u || !R.state.drag.active || (ki(X, v), (_e = F.releasePointerCapture) == null || _e.call(F, X.pointerId), F.style.cursor = "grab", R.endDrag(), km(e), E());
  };
  F.addEventListener("pointerup", J), F.addEventListener("pointercancel", J), F.addEventListener("pointerleave", (X) => {
    R.state.drag.active && J(X);
  });
  const ue = (X) => {
    var $e, ze, De;
    if (!ki(X, v) || !u) return;
    const _e = v1();
    R.applyWheelEvent(X) && E(), ($e = X.preventDefault) == null || $e.call(X), (ze = X.stopPropagation) == null || ze.call(X), (De = X.stopImmediatePropagation) == null || De.call(X), requestAnimationFrame(() => {
      var St, Dt;
      _1(_e), (Dt = (St = pt == null ? void 0 : pt.canvas) == null ? void 0 : St.setDirty) == null || Dt.call(St, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    v.addEventListener(X, ue, { passive: !1, capture: !0 }), F.addEventListener(X, ue, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    F.addEventListener(X, (_e) => ki(_e, v)), v.addEventListener(X, (_e) => ki(_e, v));
  });
  const U = La(e, "state_json");
  if (U && !U.__panoPreviewPatchedCb) {
    U.__panoPreviewPatchedCb = !0;
    const X = U.callback;
    U.callback = (_e) => {
      const $e = X ? X(_e) : void 0;
      return E(), $e;
    };
  }
  const ve = La(e, "bg_color");
  if (ve && !ve.__panoPreviewPatchedCb) {
    ve.__panoPreviewPatchedCb = !0;
    const X = ve.callback;
    ve.callback = (_e) => {
      const $e = X ? X(_e) : void 0;
      return E(), $e;
    };
  }
  const xe = e.onRemoved, C = e.onResize, we = e.onExecuted;
  e.onExecuted = function(X) {
    qv(e, X), pc(e), Ei(e), E();
    const _e = we ? we.apply(this, arguments) : void 0;
    return Ei(e), _e;
  };
  const te = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return pc(e), Ei(e), E(), te ? te.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var _e;
    const X = C ? C.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, vs(this, 150), E(), (_e = this.setDirtyCanvas) == null || _e.call(this, !0, !1), X;
  }, e.onRemoved = function() {
    return ye(), ka.unregister(this), gs.unregister(this), xe ? xe.apply(this, arguments) : void 0;
  };
  const ye = () => {
    var X;
    k.raf && cancelAnimationFrame(k.raf), (X = D == null ? void 0 : D.disconnect) == null || X.call(D), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = C, e.onExecuted = we, e.onConnectionsChange = te, e.onRemoved = xe;
  };
  e.__panoDomRestore = ye, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: j, root: A, canvas: F, requestDraw: E, state: k, emptyHintEl: V }, L(), E();
}
function xd(e, t = {}) {
  mm(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Or = Math.PI / 180, Wi = 180 / Math.PI;
function ii(e, t, n) {
  return { x: e, y: t, z: n };
}
function wd(e, t) {
  return ii(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Co(e, t) {
  return ii(e.x * t, e.y * t, e.z * t);
}
function Sd(e, t) {
  return ii(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function To(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ii(e.x / t, e.y / t, e.z / t);
}
function M1(e, t) {
  const n = e * Or, i = t * Or, a = Math.cos(i);
  return ii(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function N1(e, t, n = 0) {
  const i = M1(e, t), a = ii(0, 1, 0);
  let c = Sd(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ii(1, 0, 0)), c = To(c);
  const u = To(Sd(i, c)), d = n * Or, p = Math.cos(d), y = Math.sin(d), _ = wd(Co(c, p), Co(u, y)), w = wd(Co(c, -y), Co(u, p));
  return { fwd: i, right: To(_), up: To(w) };
}
const Io = 140, k1 = 180, Md = 40, Ul = 10;
function Nd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function kd(e, t) {
  const n = Nd(e), i = Nd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Pd(e) {
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
  return typeof ((c = an) == null ? void 0 : c.apiURL) == "function" ? an.apiURL(a) : a;
}
function Ui(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ui(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Pd({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = Ui(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Pd(e);
}
function Cm(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function P1(e) {
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
function vc(e) {
  var a;
  const t = (a = bn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (kd(c, n)) return t.get(c);
  } else
    for (const c of Object.keys(t))
      if (kd(c, n)) return t[c];
  return null;
}
function A1(e) {
  var i, a;
  const t = vc(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const c of n)
    if (Array.isArray(c))
      for (const u of c) {
        const d = Ui(u);
        if (d && /\.mp4(\?|$)/i.test(d) || d && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return d;
      }
  return "";
}
function C1(e, t = "erp_image") {
  var v, F, V, j, k, E, D, L, W, R, J, ue;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((U) => String((U == null ? void 0 : U.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const U = n.find((ve) => String((ve == null ? void 0 : ve.type) || "").toUpperCase() === "IMAGE" && (ve == null ? void 0 : ve.link) != null);
    (U == null ? void 0 : U.link) != null && (i = U.link);
  }
  if (i == null) return "";
  const c = ((F = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : F[i]) || ((k = (j = (V = bn) == null ? void 0 : V.graph) == null ? void 0 : j.links) == null ? void 0 : k[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const d = (L = (D = (E = bn) == null ? void 0 : E.graph) == null ? void 0 : D.getNodeById) == null ? void 0 : L.call(D, u), p = vc(u), y = vc(e == null ? void 0 : e.id), _ = [
    (W = y == null ? void 0 : y.ui) == null ? void 0 : W.pano_input_images,
    y == null ? void 0 : y.pano_input_images,
    p == null ? void 0 : p.images,
    (R = p == null ? void 0 : p.ui) == null ? void 0 : R.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const U of _)
    if (Array.isArray(U))
      for (const ve of U) {
        const xe = Ui(ve);
        if (xe) return xe;
      }
  let w = [];
  try {
    w = typeof ((J = bn) == null ? void 0 : J.getNodeImageUrls) == "function" ? bn.getNodeImageUrls(d) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const U of w) {
      const ve = Ui(U);
      if (ve) return ve;
    }
  if (d) {
    const U = Array.isArray(d == null ? void 0 : d.imgs) ? d.imgs : [];
    for (const ve of U) {
      const xe = Ui(ve);
      if (xe) return xe;
    }
  }
  const S = (ue = d == null ? void 0 : d.widgets) == null ? void 0 : ue.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image"), A = String((S == null ? void 0 : S.value) || "").trim();
  return A ? an.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function Ad(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Cd(e, t, n, i, a, c) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Cm(c) || n <= 1 || i <= 1) {
    Ad(t, n, i);
    return;
  }
  const u = N1(Number(a.yaw || 0), Number(a.pitch || 0), 0), d = Math.tan(Number(a.fov || 100) * Or * 0.5), p = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (F) => (F == null ? void 0 : F.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = ei());
  const y = P1(c), _ = Rs({
    stateRevision: [
      "standalone_preview_scene",
      y,
      p
    ].join("|"),
    backgroundSource: c,
    backgroundRevision: y,
    coverageDeg: p,
    scene: Ls(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const F = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Av(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return F ? (t.drawImage(F, 0, 0, n, i), !0) : !1;
  })() || (ys(e, t, { x: 0, y: 0, w: n, h: i }, u, d, c, ms), Ad(t, n, i));
}
function Td(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class T1 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Fs({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: zt(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: G(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: G(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, c, u, d;
        const i = (c = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : c.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((d = this.canvas) == null ? void 0 : d.clientHeight) || 0))
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
      const d = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), d;
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
        `min-height:${Io}px`,
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
          return Io;
        },
        getHeight() {
          return Io;
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
            minHeight: Math.max(Io, Number(c.minHeight || 0)),
            minWidth: Math.max(k1, Number(c.minWidth || 0))
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
      var c, u, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
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
    !(this.img instanceof HTMLVideoElement) || !Cm(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Td(a.x, a.y, c) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - c.x, a.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, _, w, S, A, v;
      const c = Qo(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!c || !Td(c.x, c.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const d = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(d));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), p && ((w = this.setDirtyCanvas) == null || w.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (v = n == null ? void 0 : n.stopImmediatePropagation) == null || v.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, c, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - Ul * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Md - Ul);
    return { x: Ul, y: Md, w: t, h: n };
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
    const t = A1(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const d = document.createElement("video");
      d.muted = !0, d.loop = !0, d.playsInline = !0, d.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = d, this.videoPaused || d.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      d.addEventListener("loadedmetadata", p), d.addEventListener("canplay", p), d.addEventListener("timeupdate", y), d.addEventListener("play", y), d.addEventListener("pause", y), d.src = t, d.load(), this.mediaCleanup = () => {
        d.pause(), d.removeEventListener("loadedmetadata", p), d.removeEventListener("canplay", p), d.removeEventListener("timeupdate", y), d.removeEventListener("play", y), d.removeEventListener("pause", y);
      };
      return;
    }
    const n = C1(this.node, this.imageInputName);
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
    var n, i, a, c, u, d, p, y, _, w, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null;
    try {
      (d = (u = this.root) == null ? void 0 : u.remove) == null || d.call(u);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((v) => v !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((w = (_ = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : _.find) == null ? void 0 : w.call(_, (v) => (v == null ? void 0 : v.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || A.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function I1(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new T1(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function D1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const d = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const c = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Tm(e) {
  return !!(e != null && e.prototype);
}
function _c(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function E1(e, t = {}) {
  Tm(e) || I1(e, {
    ...t,
    onOpen: _c(e, t.onOpen)
  });
}
function O1(e, t = {}) {
  if (!Tm(e)) {
    xd(e, {
      ...t,
      onOpen: _c(e, t.onOpen)
    });
    return;
  }
  D1(e, "cutout_preview", (n) => {
    xd(n, {
      ...t,
      onOpen: _c(n, t.onOpen)
    });
  });
}
const cn = {
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
}, ar = "pen";
function Id(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function R1(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function d(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((w) => {
      i.push(String(w || ""));
    }), !i.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function p(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > c && i.shift(), a = i.length - 1);
  }
  return d(t), {
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
      const y = i.length, _ = Math.max(0, y - u), w = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(w, w + u), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - w));
      return {
        version: 1,
        entries: S,
        index: A
      };
    },
    hydrate: d
  };
}
function ot(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function F1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function L1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const c = ot(i.z_index ?? i.zIndex, t.length);
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
function z1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = ot(e.t, 0), i = ot(e.widthScale, null), a = ot(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const c = ot(e.u, null), u = ot(e.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const c = ot(e.u, null), u = ot(e.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: c,
      v: u,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function Do(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = z1(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function j1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = Do(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = Do(e.points, t, 1);
  if (!c) return null;
  const u = Do(e.rawPoints, t, 1), d = Do(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: u || c.map((p) => ({ ...p })),
    processedPoints: d || c.map((p) => ({ ...p }))
  };
}
function V1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = $1(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = j1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const c = ot(e.size, null), u = ot(e.opacity, null);
  if (c == null || u == null) return null;
  const d = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!d || !p) return null;
  const y = ot(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, ot(S.r, 0))),
      g: Math.max(0, Math.min(1, ot(S.g, 0))),
      b: Math.max(0, Math.min(1, ot(S.b, 0))),
      a: Math.max(0, Math.min(1, ot(S.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: p,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: ot(e.hardness, null),
    flow: ot(e.flow, null),
    spacing: ot(e.spacing, null),
    createdAt: Math.trunc(ot(e.createdAt, 0)),
    color: w,
    radiusModel: _,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Dd(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = V1(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function H1(e) {
  if (!e || typeof e != "object") return null;
  const t = ot(e.u0, null), n = ot(e.v0, null), i = ot(e.u1, null), a = ot(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const c = (d) => Math.max(0, Math.min(1, d)), u = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function U1(e) {
  const t = e || {};
  return {
    du: ot(t.du, 0) ?? 0,
    dv: ot(t.dv, 0) ?? 0,
    rot_deg: ot(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ot(t.scale, 1) ?? 1)
  };
}
function B1(e, t) {
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
    z_index: Math.max(0, ot(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
    rasterDataUrl: a,
    transform: U1(e.transform)
  } : null;
}
function G1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = B1(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Pa(e) {
  const t = F1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: L1(e.groups),
    paint: Dd(e.paint, "paint"),
    mask: Dd(e.mask, "mask"),
    raster_objects: G1(e.raster_objects)
  };
}
function Ed(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function K1(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Od(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = K1((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function W1(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ki({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Ed((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, u) => Od(c, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Ed((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, u) => Od(c, u)).filter(Boolean);
  return Ki({
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
function $a(e = {}) {
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
function _s(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function Y1(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || ei((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(w) {
    var S;
    return JSON.stringify({
      stateRevision: (w == null ? void 0 : w.stateRevision) || "",
      background: (w == null ? void 0 : w.background) || null,
      objects: Array.isArray((S = w == null ? void 0 : w.objectPass) == null ? void 0 : S.objects) ? w.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (w == null ? void 0 : w.overlay) || {}
    });
  }
  function u(w = {}) {
    const S = W1(w), A = c(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function d(w = {}, S = {}) {
    if (!i) return null;
    const A = $a(w), v = _s(S);
    return n.renderToTarget(t, A, v);
  }
  function p(w, S, A = {}, v = {}) {
    if (!w || !S || !i) return !1;
    const F = $a(A), V = _s({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(w, S, F, V);
  }
  function y() {
    var w;
    i = null, a = "", (w = n.clearState) == null || w.call(n);
  }
  function _() {
    var w;
    y(), (w = n.dispose) == null || w.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: d,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: y,
    dispose: _
  };
}
function q1(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function X1(e, t = {}) {
  var p, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = $a((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = _s(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return q1(c, u, d);
}
function J1(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = $a((n == null ? void 0 : n.view) || {}), u = !1, d = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), F = _s({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(F.width * F.dpr)), i.height = Math.max(1, Math.round(F.height * F.dpr)), i.style.width = `${F.width}px`, i.style.height = `${F.height}px`, F;
  }
  function y() {
    if (u || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    u || d || (d = requestAnimationFrame(() => {
      d = 0, y();
    }));
  }
  const w = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return w == null || w.observe(t), _(), {
    canvas: i,
    setView(S) {
      c = $a(S || {}), _();
    },
    getView() {
      return { ...c };
    },
    present: y,
    requestRender: _,
    unmount() {
      u = !0, d && cancelAnimationFrame(d), w == null || w.disconnect(), i.remove();
    }
  };
}
function Z1(e = {}) {
  const t = Y1({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(Ir(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, Ir(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? Ir(i.shot) : i == null ? void 0 : i.view;
      return J1(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: Ir(n.shot) } : n;
      return X1(t, i);
    }
  };
}
const Rr = 1, Fr = 179, Rd = 85;
function Fd(e) {
  const t = ((rt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Q1(e, t) {
  let n = rt(e, 0) - rt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function e_(e, t, { shiftKey: n = !1, altKey: i = !1 } = {}) {
  let a = rt(e, 0) + rt(t, 0) * Wi;
  return n ? a = Math.round(a / 15) * 15 : !i && Math.abs(Fd(a)) <= 1 && (a = 0), Fd(a);
}
function rt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $s(e = {}) {
  const t = G(rt(e.hFOV_deg, 90), Rr, Fr), n = G(rt(e.vFOV_deg, 60), Rr, Fr), i = Math.tan(t * Or * 0.5), a = Math.tan(n * Or * 0.5);
  return {
    yawDeg: rt(e.yaw_deg, 0),
    pitchDeg: rt(e.pitch_deg, 0),
    rollDeg: rt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function Bl(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = $s(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function t_(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, rt(t, 1)), c = Math.min(n, i * a);
  return { width: c, height: c / a };
}
function n_(e, t) {
  const n = Math.max(1e-12, rt(t, 1)), i = Math.max(1e-6, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), c = G(2 * Math.atan(i / (2 * n)) * Wi, Rr, Fr), u = G(2 * Math.atan(a / (2 * n)) * Wi, Rr, Fr);
  return { hFOV_deg: c, vFOV_deg: u };
}
function r_(e, t, n) {
  const i = rt(e == null ? void 0 : e.x, 0), a = rt(e == null ? void 0 : e.y, 0), c = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), d = $s(t), p = Math.max(1e-12, rt(n, 1)), y = 2 * p * d.tanHalfX, _ = 2 * p * d.tanHalfY;
  return {
    x: i + (c - y) * 0.5,
    y: a + (u - _) * 0.5,
    w: y,
    h: _,
    focalPx: p
  };
}
function Ld(e, t, n = Rd) {
  const i = Math.max(1e-12, rt(t, 1)), a = G(rt(n, Rd), 1, 89.999), c = i * Math.tan(a * Or), u = Math.max(1, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), d = Math.max(1, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, c),
    halfH: Math.min(d * 0.5, c)
  };
}
function $d(e, t) {
  const n = G(rt(e, 60), Rr, Fr), i = Math.max(1e-6, rt(t, 1));
  return G(
    2 * Math.atan(Math.tan(n * Or * 0.5) * i) * Wi,
    Rr,
    Fr
  );
}
function i_(e, t) {
  const n = $s(e), i = rt(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * Wi, c = 2 * Math.atan(n.tanHalfY * i) * Wi;
  return a < Rr || a > Fr || c < Rr || c > Fr ? null : { hFOV_deg: a, vFOV_deg: c };
}
function Pi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function a_(e = {}) {
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
function o_({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: p
}) {
  var E, D;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
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
    historyEntries: Array.from({ length: 8 }, (L, W) => ({ index: W, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return _;
  const w = ((E = t.find((L) => a(e.paintColor, L.color))) == null ? void 0 : E.id) || "", S = !w, A = c(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), F = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[F] ?? 10, j = p(), k = Array.from({ length: 8 }, (L, W) => e.customPaintHistory[W] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: S,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...u(A.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: k.map((L, W) => ({
      index: W,
      color: L ? { cssColor: i(L, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: j,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function s_({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function l_({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: u,
  notes: d,
  visibilityRows: p,
  uiSettings: y,
  normalizeCoverageValue: _
}) {
  return {
    coverage: { value: _(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: u,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function c_({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: p,
  isExternalSticker: y,
  isStickerHidden: _,
  canRestoreSelectedToInitial: w,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let A = [];
  if (n.length > 1)
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (i === "stroke")
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], y(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), y(t)) {
      const L = w(), W = _(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: L ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !L
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? S.eye : S.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), y(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((L) => ({ value: L, label: L, active: d === L }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((L) => ({ x: Number(L == null ? void 0 : L.x), y: Number(L == null ? void 0 : L.y) })).filter((L) => Number.isFinite(L.x) && Number.isFinite(L.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = v.map((L) => L.x), V = v.map((L) => L.y), j = Math.min(...F), k = Math.max(...F), E = Math.min(...V), D = Math.max(...V);
  return {
    visible: !0,
    left: (j + k) * 0.5,
    top: D + 18,
    items: A,
    anchor: { minX: j, maxX: k, minY: E, maxY: D }
  };
}
const Oe = Object.freeze({
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
}), u_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, f_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: u_(t[2])
})), d_ = {
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
}, zd = Object.fromEntries(
  Object.entries(d_).map(([e, t]) => [e, {
    name: t.name,
    elements: f_(t.body)
  }])
), Sn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = _t(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(zd, i) ? zd[i] : null;
    });
    return (i, a) => n.value ? (Me(), ke("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: st(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), ke(Ze, null, Ft(n.value.elements, (c, u) => (Me(), ke(Ze, {
        key: `${n.value.name || e.icon || "icon"}-${c.tag}-${u}`
      }, [
        c.tag === "path" ? (Me(), ke("path", Ar({
          key: 0,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "circle" ? (Me(), ke("circle", Ar({
          key: 1,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "rect" ? (Me(), ke("rect", Ar({
          key: 2,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "line" ? (Me(), ke("line", Ar({
          key: 3,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polyline" ? (Me(), ke("polyline", Ar({
          key: 4,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polygon" ? (Me(), ke("polygon", Ar({
          key: 5,
          ref_for: !0
        }, c.attrs), null, 16)) : Rt("", !0)
      ], 64))), 128))
    ], 2)) : Rt("", !0);
  }
}, hr = {
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
    const t = e, n = _t(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Me(), qi(xb(e.tag), Ar({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Mh(() => [
        qe(Sn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, h_ = { class: "pano-floating-right" }, m_ = ["data-settled"], p_ = ["data-ready", "data-settled"], g_ = ["aria-label", "data-tip"], b_ = {
  key: 1,
  class: "pano-camera-preview-label"
}, y_ = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), ke(Ze, null, [
      ie("div", h_, [
        (Me(!0), ke(Ze, null, Ft(e.buttons, (i) => (Me(), qi(hr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ba(ie("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ie("div", {
          class: st(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ie("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), ke("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            qe(Sn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, g_)) : Rt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), ke("div", b_, mt(e.preview.label || "Preview unavailable"), 1)) : Rt("", !0)
        ], 14, p_)
      ], 8, m_), [
        [Ka, e.preview.visible]
      ])
    ], 64));
  }
}, v_ = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, __ = ["y2", "transform"], x_ = ["transform"], w_ = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, c) => c * 15), i = _t(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, c) => Ba((Me(), ke("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), ke("svg", v_, [
        c[1] || (c[1] = ie("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), ke(Ze, null, Ft(Cr(n), (u) => (Me(), ke("line", {
          key: u,
          class: st(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, __))), 128)),
        ie("g", { transform: i.value }, [...c[0] || (c[0] = [
          ie("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, x_),
        c[2] || (c[2] = ie("circle", {
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
}, S_ = { class: "pano-frame-aspect-control" }, M_ = { class: "pano-frame-aspect-popover" }, N_ = ["data-aspect", "disabled"], k_ = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), ke("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      ie("div", S_, [
        qe(hr, {
          icon: e.model.aspectIcon,
          label: "Aspect Ratio",
          tip: "Aspect ratio",
          pressed: e.model.aspectOpen ? "true" : "false",
          attrs: { "data-action": "frame-aspect", disabled: e.model.disabled === !0 }
        }, null, 8, ["icon", "pressed", "attrs"]),
        Ba(ie("div", M_, [
          (Me(!0), ke(Ze, null, Ft(e.model.aspectChoices || [], (i) => (Me(), ke("button", {
            key: i.value,
            class: st(["pano-btn pano-frame-aspect-choice", { active: i.active === !0 }]),
            type: "button",
            "data-action": "frame-aspect-set",
            "data-aspect": i.value,
            disabled: e.model.disabled === !0
          }, mt(i.label), 11, N_))), 128))
        ], 512), [
          [Ka, e.model.aspectOpen === !0]
        ])
      ]),
      qe(hr, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      qe(w_, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, P_ = ["aria-label"], A_ = { class: "pano-canvas-confirm-title" }, C_ = { class: "pano-canvas-confirm-text" }, T_ = { class: "pano-canvas-confirm-actions" }, I_ = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, D_ = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ rs(null), i = /* @__PURE__ */ rs(null);
    let a = null;
    function c() {
      const w = i.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(w) {
      const S = i.value;
      if (!S) return;
      const A = S.querySelector(`[data-action='${w}']`);
      A instanceof HTMLButtonElement && A.click();
    }
    function d() {
      var F;
      const w = i.value;
      if (!w) return;
      const S = w.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = c()[0] || w;
      (F = v == null ? void 0 : v.focus) == null || F.call(v);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(w) {
      var j;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const S = c(), A = i.value;
      if (!S.length) {
        w.preventDefault(), (j = A == null ? void 0 : A.focus) == null || j.call(A);
        return;
      }
      const v = S[0], F = S[S.length - 1], V = document.activeElement;
      if (w.shiftKey) {
        (V === v || V === A || !(A != null && A.contains(V))) && (w.preventDefault(), F.focus());
        return;
      }
      (V === F || !(A != null && A.contains(V))) && (w.preventDefault(), v.focus());
    }
    function _(w) {
      w.target === n.value && u("confirm-cancel");
    }
    return zi(() => t.model.visible, (w, S) => {
      if (w) {
        a = document.activeElement, Oc(() => {
          d();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), Lc(() => {
      p();
    }), (w, S) => e.model.visible === !0 ? (Me(), ke("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: rm(_, ["self"])
    }, [
      ie("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        ie("div", A_, mt(e.model.title), 1),
        ie("div", C_, mt(e.model.text), 1),
        ie("div", T_, [
          S[0] || (S[0] = ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ie("button", I_, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, P_)
    ], 512)) : Rt("", !0);
  }
}, E_ = ["data-paint-pane"], O_ = ["hidden"], R_ = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], F_ = ["aria-pressed", "disabled"], L_ = ["hidden"], $_ = { class: "pano-paint-color-pop-head" }, z_ = { class: "pano-paint-color-field" }, j_ = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, V_ = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, H_ = { class: "pano-paint-color-field" }, U_ = { class: "pano-paint-alpha-wrap" }, B_ = ["value"], G_ = { "data-paint-alpha-value": "" }, K_ = ["hidden"], W_ = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Y_ = ["data-paint-history-index", "aria-label", "disabled"], q_ = ["data-paint-footer"], X_ = ["data-paint-group"], J_ = ["hidden"], Z_ = ["value", "disabled"], Q_ = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, ex = ["hidden"], tx = {
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
    return (i, a) => (Me(), ke("div", {
      class: st(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), ke(Ze, null, Ft(e.panes, (c) => {
        var u;
        return Me(), ke("div", {
          key: c.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Me(), ke("div", {
            key: 0,
            class: st(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), ke(Ze, null, Ft(e.paintSwatches, (d) => (Me(), ke("button", {
              key: d.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: It(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, R_))), 128)),
            ie("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, F_),
            ie("div", {
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
              ie("div", $_, [
                ie("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ie("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ie("div", z_, [
                ie("div", j_, [
                  ie("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ie("div", V_, [
                  ie("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ie("label", H_, [
                a[1] || (a[1] = ie("span", null, "Opacity", -1)),
                ie("div", U_, [
                  ie("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, B_),
                  ie("span", G_, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ie("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ie("div", W_, [
                  (Me(!0), ke(Ze, null, Ft(e.state.historyEntries || [], (d) => (Me(), ke("button", {
                    key: d.index,
                    class: st(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: It(n(d.color))
                  }, null, 14, Y_))), 128))
                ])
              ], 8, K_)
            ], 12, L_)
          ], 10, O_)) : Rt("", !0),
          ie("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            ie("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Me(!0), ke(Ze, null, Ft(c.tools, (d) => {
                var p;
                return Me(), qi(hr, {
                  key: `${c.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[c.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, X_),
            ie("div", {
              class: st(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ie("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Z_),
              ie("span", Q_, mt(e.state.sizeText || "10"), 1)
            ], 10, J_),
            ie("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[c.key]) ?? !c.clearHidden)
            }, [
              qe(hr, {
                icon: Cr(Oe).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, ex)
          ], 8, q_)
        ], 10, E_);
      }), 128))
    ], 2));
  }
}, nx = {
  key: 0,
  class: "pano-cutout-menu"
}, rx = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, ix = ["data-aspect"], ax = ["data-action", "aria-label", "data-tip", "disabled"], ox = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), ke("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), ke(Ze, null, Ft(e.model.items || [], (i) => (Me(), ke(Ze, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), ke("div", nx, [
          ie("button", rx, [
            qe(Sn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ie("div", {
            class: st(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), ke(Ze, null, Ft(i.choices || [], (a) => (Me(), ke("button", {
              key: a.value,
              class: st(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, mt(a.label), 11, ix))), 128))
          ], 2)
        ])) : (Me(), ke("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          qe(Sn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, ax))
      ], 64))), 128))
    ], 4));
  }
}, sx = {
  class: "pano-side",
  "data-side": ""
}, lx = { class: "pano-side-head" }, cx = { class: "pano-side-title" }, ux = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, fx = {
  key: 0,
  class: "pano-side-scroll"
}, dx = { class: "pano-inspector" }, hx = { class: "pano-ui-row pano-coverage-row" }, mx = ["data-selected"], px = ["aria-pressed", "disabled"], gx = ["aria-pressed", "disabled"], bx = {
  key: 0,
  class: "pano-section-title"
}, yx = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, vx = {
  class: "pano-picker",
  "data-picker": "selection"
}, _x = ["disabled"], xx = { class: "pano-picker-label" }, wx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Sx = ["hidden"], Mx = ["data-selection-id"], Nx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, kx = {
  key: 2,
  class: "pano-state-actions"
}, Px = ["disabled"], Ax = ["data-key"], Cx = ["min", "max", "step", "value", "disabled", "data-param-key"], Tx = ["min", "max", "step", "value", "disabled", "data-param-key"], Ix = { class: "pano-visibility-section" }, Dx = { class: "pano-visibility-stack" }, Ex = ["data-visibility-row"], Ox = { class: "pano-visibility-name" }, Rx = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Fx = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], Lx = ["open"], $x = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, zx = { class: "pano-ui-settings-body" }, jx = { class: "pano-ui-row" }, Vx = ["data-selected"], Hx = ["aria-pressed"], Ux = ["aria-pressed"], Bx = { class: "pano-ui-row" }, Gx = ["data-selected"], Kx = ["aria-pressed"], Wx = ["aria-pressed"], Yx = { class: "pano-ui-row" }, qx = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Xx = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Jx = { class: "pano-picker-label" }, Zx = ["hidden"], Qx = ["data-quality"], ew = {
  key: 1,
  class: "pano-side-footer"
}, tw = ["data-action"], nw = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = _t(() => {
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
      var d, p, y, _, w;
      return Me(), ke("div", sx, [
        ie("div", lx, [
          ie("div", cx, [
            ie("span", ux, [
              qe(Sn, {
                icon: Cr(Oe).globe
              }, null, 8, ["icon"])
            ]),
            ie("span", null, mt(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = ie("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = ie("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), ke("div", fx, [
          ie("div", dx, [
            u[12] || (u[12] = ie("div", { class: "pano-section-title" }, [
              ie("span", null, "Scene")
            ], -1)),
            ie("div", hx, [
              u[1] || (u[1] = ie("label", null, "Coverage", -1)),
              ie("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, px),
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "180", 8, gx)
              ], 8, mx)
            ]),
            e.model.transformTitle !== !1 ? (Me(), ke("div", bx, [...u[2] || (u[2] = [
              ie("span", null, "Transform", -1)
            ])])) : Rt("", !0),
            e.model.selectionPicker ? (Me(), ke("div", yx, [
              ie("label", null, mt(e.model.selectionPicker.label), 1),
              ie("div", vx, [
                ie("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ie("span", xx, [
                    e.model.selectionPicker.currentIcon ? (Me(), ke("span", wx, [
                      qe(Sn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    ie("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, _x),
                ie("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), ke(Ze, null, Ft(e.model.selectionPicker.items || [], (S) => (Me(), ke("button", {
                    key: S.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), ke("span", Nx, [
                      qe(Sn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Rt("", !0),
                    ie("span", null, mt(S.label), 1)
                  ], 10, Mx))), 128))
                ], 8, Sx)
              ])
            ])) : Rt("", !0),
            e.model.copyStateButton ? (Me(), ke("div", kx, [
              ie("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                qe(Sn, {
                  icon: Cr(Oe).copy
                }, null, 8, ["icon"]),
                ie("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, Px)
            ])) : Rt("", !0),
            ie("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), ke(Ze, { key: 0 }, Ft(e.model.notes, (S) => (Me(), ke("div", {
                key: S,
                class: "pano-param-note"
              }, mt(S), 1))), 128)) : (Me(!0), ke(Ze, { key: 1 }, Ft(e.model.params || [], (S) => (Me(), ke("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                ie("label", null, mt(S.label), 1),
                ie("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: It(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, Cx),
                ie("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, Tx)
              ], 8, Ax))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), ke(Ze, { key: 3 }, [
              u[5] || (u[5] = ie("div", { class: "pano-divider" }, null, -1)),
              ie("div", Ix, [
                u[4] || (u[4] = ie("div", { class: "pano-section-title" }, [
                  ie("span", null, "Layers")
                ], -1)),
                ie("div", Dx, [
                  (Me(!0), ke(Ze, null, Ft(e.model.visibilityRows, (S) => (Me(), ke("div", {
                    key: S.key,
                    class: st(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ie("span", Ox, [
                      ie("span", Rx, [
                        qe(Sn, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      ie("span", null, mt(S.label), 1)
                    ]),
                    ie("button", {
                      class: st(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      qe(Sn, {
                        icon: S.visible === !0 ? Cr(Oe).eye : Cr(Oe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Fx)
                  ], 10, Ex))), 128))
                ])
              ])
            ], 64)) : Rt("", !0),
            e.model.uiSettings ? (Me(), ke("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ie("summary", null, [
                u[6] || (u[6] = ie("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ie("span", $x, [
                  qe(Sn, {
                    icon: Cr(Oe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ie("div", zx, [
                ie("div", jx, [
                  u[7] || (u[7] = ie("label", null, "Drag X", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, Hx),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Ux)
                  ], 8, Vx)
                ]),
                ie("div", Bx, [
                  u[8] || (u[8] = ie("label", null, "Drag Y", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, Kx),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Wx)
                  ], 8, Gx)
                ]),
                ie("div", Yx, [
                  u[10] || (u[10] = ie("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ie("div", qx, [
                    ie("button", Xx, [
                      ie("span", Jx, mt(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ie("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), ke(Ze, null, Ft(e.model.uiSettings.qualityOptions || [], (S) => (Me(), ke("button", {
                        key: S.value,
                        type: "button",
                        class: st(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, mt(S.label), 11, Qx))), 128))
                    ], 8, Zx)
                  ])
                ]),
                u[11] || (u[11] = ie("div", { class: "pano-ui-row" }, [
                  ie("span"),
                  ie("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Lx)) : Rt("", !0)
          ])
        ])) : Rt("", !0),
        (e.model.footerButtons || []).length ? (Me(), ke("div", ew, [
          (Me(!0), ke(Ze, null, Ft(e.model.footerButtons, (S) => (Me(), ke("button", {
            key: S.action,
            class: st(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, mt(S.label), 11, tw))), 128))
        ])) : Rt("", !0)
      ]);
    };
  }
}, rw = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), ke("div", {
      class: st(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, iw = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, aw = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), ke("div", iw, [
      (Me(!0), ke(Ze, null, Ft(e.buttons, (i) => Ba((Me(), qi(hr, {
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
}, ow = ["data-video-ready"], sw = { class: "pano-video-transport-shell" }, lw = { class: "pano-video-controls-left" }, cw = { class: "pano-video-filmstrip" }, uw = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, fw = ["src", "onLoad"], dw = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, hw = ["max", "value", "disabled"], mw = { class: "pano-video-controls-right" }, pw = ["data-has-audio"], gw = { class: "pano-video-volume-pop" }, bw = ["value", "disabled"], yw = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause" : "Play";
    }), i = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause video" : "Play video";
    }), a = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? Oe.pause : Oe.play;
    }), c = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), d = _t(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? Oe.loop_off : Oe.loop;
    }), p = _t(() => {
      var L, W;
      return ((L = t.state) == null ? void 0 : L.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = _t(() => {
      var L, W, R;
      return ((L = t.state) == null ? void 0 : L.hasAudio) !== !0 ? Oe.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? Oe.volume_muted : Oe.volume2;
    }), _ = _t(() => {
      var L;
      return Math.max(0, Math.min(100, Number(((L = t.state) == null ? void 0 : L.progressPct) || 0)));
    }), w = _t(() => ({ left: `${_.value}%` })), S = _t(() => {
      var J, ue;
      const L = (J = t.state) == null ? void 0 : J.volumePct, W = Number(((ue = t.state) == null ? void 0 : ue.volume) ?? 1) * 100, R = Number(L ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, R))}%`
      };
    }), A = _t(() => {
      var R, J;
      const W = [
        String(((R = t.state) == null ? void 0 : R.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((ue, U) => Math.max(ue, U.length), 4);
      return `${Math.max(4, W)}ch`;
    }), v = _t(() => ({ "--pano-video-time-ch": A.value })), F = _t(() => {
      var R, J;
      const L = Array.isArray((R = t.state) == null ? void 0 : R.thumbnails) ? t.state.thumbnails : [];
      if (L.length) return L;
      const W = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: W }, (ue, U) => ({
        id: `placeholder-${U}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ rs(/* @__PURE__ */ new Set()), j = (L) => String((L == null ? void 0 : L.id) || (L == null ? void 0 : L.src) || (L == null ? void 0 : L.label) || ""), k = (L) => V.value.has(j(L)), E = (L) => {
      const W = new Set(V.value);
      W.add(j(L)), V.value = W;
    };
    zi(F, (L) => {
      const W = new Set(L.map(j)), R = /* @__PURE__ */ new Set();
      for (const J of V.value)
        W.has(J) && R.add(J);
      V.value = R;
    }, { immediate: !0 });
    const D = _t(() => {
      var L;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((L = t.state) == null ? void 0 : L.shellMaxWidthPx) || 640))}px`
      };
    });
    return (L, W) => (Me(), ke("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(D.value)
    }, [
      W[1] || (W[1] = ie("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ie("div", sw, [
        ie("div", lw, [
          qe(hr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-time pano-video-time-start",
            style: It(v.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ie("div", cw, [
          ie("div", uw, [
            (Me(!0), ke(Ze, null, Ft(F.value, (R) => (Me(), ke("div", {
              key: j(R),
              class: st(["pano-video-thumb", {
                "is-placeholder": !R.src,
                "is-loaded": R.src && k(R)
              }])
            }, [
              R.src ? (Me(), ke("img", {
                key: 0,
                src: R.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => E(R)
              }, null, 40, fw)) : (Me(), ke("span", dw))
            ], 2))), 128))
          ]),
          ie("div", {
            class: "pano-video-playhead",
            style: It(w.value),
            "aria-hidden": "true"
          }, [...W[0] || (W[0] = [
            ie("span", { class: "pano-video-playhead-line" }, null, -1),
            ie("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ie("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, hw)
        ]),
        ie("div", mw, [
          ie("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(v.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          qe(hr, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: c.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ie("div", gw, [
              ie("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, bw)
            ]),
            qe(hr, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, pw)
        ])
      ])
    ], 14, ow));
  }
}, vw = { class: "pano-floating-top" }, _w = ["data-selected", "data-view-count"], xw = ["data-view", "aria-pressed", "aria-label", "disabled"], ww = { class: "label" }, Sw = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), ke("div", vw, [
        ie("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), ke(Ze, null, Ft(e.buttons, (a) => Ba((Me(), ke("button", {
            key: a.key,
            class: st(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            qe(Sn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ie("span", ww, mt(a.label), 1)
          ], 10, xw)), [
            [Ka, a.visible !== !1]
          ])), 128))
        ], 8, _w)
      ]);
    };
  }
};
function Im(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Oe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Oe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Oe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Oe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Oe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Oe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Oe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Oe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Oe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Oe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Oe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Oe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Oe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Oe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Oe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Oe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Oe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Oe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Oe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Oe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Oe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Oe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Oe.lasso_tool }
        ]
      }
    ]
  };
}
const Mw = ["aria-label"], Nw = { class: "pano-stage-wrap" }, kw = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Pw = {
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
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, i = t;
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ rs(null), p = _t(() => n.readOnly === !0), y = _t(() => n.shellPreset || Im(n.type)), _ = _t(() => {
      var D, L, W;
      const E = String((((D = n.uiState) == null ? void 0 : D.stageStatus) === "failed" ? (L = n.uiState) == null ? void 0 : L.stageStatusDetail : (W = n.uiState) == null ? void 0 : W.stageWarningDetail) ?? "");
      return E === "background" ? "Background preview unavailable. Re-run the node to refresh it." : E === "stickers" ? "One or more sticker previews are unavailable." : E === "frame" ? "The editor hit a rendering error. Check the browser console for details." : E.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), w = _t(() => {
      var D;
      const E = Array.isArray((D = y.value) == null ? void 0 : D.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return p.value && E.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Oe.fullscreen
      }), E;
    });
    function S() {
      const E = d.value;
      return E ? Array.from(E.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((D) => D instanceof HTMLElement ? !D.hidden && D.tabIndex >= 0 && D.offsetParent !== null : !1) : [];
    }
    function A() {
      var L;
      const D = S()[0] || d.value;
      (L = D == null ? void 0 : D.focus) == null || L.call(D);
    }
    function v() {
      var E;
      u != null && u.isConnected && ((E = u.focus) == null || E.call(u)), u = null;
    }
    function F(E) {
      var D, L, W, R;
      if (!E.defaultPrevented) {
        if (E.key === "Tab") {
          const J = S();
          if (!J.length) {
            E.preventDefault(), (L = (D = d.value) == null ? void 0 : D.focus) == null || L.call(D);
            return;
          }
          const ue = J[0], U = J[J.length - 1], ve = document.activeElement;
          if (E.shiftKey) {
            (ve === ue || ve === d.value || !((W = d.value) != null && W.contains(ve))) && (E.preventDefault(), U.focus());
            return;
          }
          (ve === U || !((R = d.value) != null && R.contains(ve))) && (E.preventDefault(), ue.focus());
          return;
        }
        E.key === "Escape" && i("close");
      }
    }
    function V() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function j() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function k(E) {
      document.removeEventListener("keydown", F), E ? (u || (u = document.activeElement), V(), document.addEventListener("keydown", F), Oc(() => {
        A();
      })) : (j(), v());
    }
    return Th(() => {
      k(n.open);
    }), Lc(() => {
      j(), document.removeEventListener("keydown", F), v();
    }), zi(() => n.open, (E) => {
      k(E);
    }), (E, D) => e.open ? (Me(), ke("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: D[0] || (D[0] = rm((L) => i("close"), ["self"]))
    }, [
      ie("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ie("div", Nw, [
          D[1] || (D[1] = ie("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          D[2] || (D[2] = ie("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          D[3] || (D[3] = ie("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), ke("div", kw, mt(_.value), 1)) : Rt("", !0),
          D[4] || (D[4] = ie("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ie("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          p.value ? Rt("", !0) : (Me(), ke(Ze, { key: 1 }, [
            qe(aw, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            qe(k_, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            qe(tx, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          qe(yw, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          qe(Sw, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          qe(y_, {
            buttons: e.uiState.floatingButtons || w.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          qe(ox, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          qe(rw, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          qe(D_, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Rt("", !0) : (Me(), qi(nw, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Mw)
    ])) : Rt("", !0);
  }
}, Kn = "loading", Yi = "ready", Yn = "failed";
function za(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ja(e, t = "") {
  return e && (e.__panoLoadState = Yi, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ai(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function xc(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? Yi : Kn : Yi;
}
function Gl(e) {
  return xc(e) === Yn;
}
function Aw({ presented: e, background: t = Yi, stickers: n = [] } = {}) {
  if (!e) return { status: Kn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Kn, c = i.includes(Kn);
  if (a && c) return { status: Kn, detail: "mixed" };
  if (a) return { status: Kn, detail: "background" };
  if (c) return { status: Kn, detail: "stickers" };
  const u = t === Yn, d = i.includes(Yn);
  return u && d ? { status: Yn, detail: "mixed" } : u ? { status: Yn, detail: "background" } : d ? { status: Yn, detail: "stickers" } : { status: Yi, detail: "" };
}
const xs = "state_json", Kr = "sticker_image_1", Kl = "external_image", Wl = "pano_sticker_input_images", es = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pt = Math.PI / 180, wn = 180 / Math.PI, Yl = 1, Cw = "rgb(255, 221, 87)", Tw = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, Iw = 64, jd = 40, ql = 16, Dw = 0.45, Vd = 180, Ew = 160, ws = 24, Ow = 4, Rw = 4, Eo = /* @__PURE__ */ new Map(), Hd = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), Fw = 12;
function Gt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ro(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Lw(e) {
  return 1 - Math.pow(1 - e, 3);
}
function $w(e, t, n) {
  const i = G((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function zw(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Tr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Tr.delete(t), Tr.set(t, n), n);
}
function jw(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Tr.delete(n), Tr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Tr.size > Fw; ) {
      const a = Tr.keys().next().value;
      if (!a) break;
      Tr.delete(a);
    }
}
function Vw(e) {
  return e * e * e;
}
function qn(e, t, n) {
  return { x: e, y: t, z: n };
}
function Fo(e, t) {
  return qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Lo(e, t) {
  return qn(e.x * t, e.y * t, e.z * t);
}
function En(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $o(e, t) {
  return qn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ai(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return qn(e.x / t, e.y / t, e.z / t);
}
function jn(e, t) {
  const n = e * Pt, i = t * Pt, a = Math.cos(i);
  return qn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function zo(e) {
  return {
    yaw: zt(Math.atan2(e.x, e.z) * wn),
    pitch: G(Math.asin(G(e.y, -1, 1)) * wn, -90, 90)
  };
}
function or(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, u = t[i].y, d = t[a].x, p = t[a].y;
    u > e.y != p > e.y && e.x < (d - c) * (e.y - u) / (p - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function kr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Xl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return kr(e, t);
  const p = G((c * i + u * a) / d, 0, 1), y = Number(t.x || 0) + i * p, _ = Number(t.y || 0) + a * p, w = Number(e.x || 0) - y, S = Number(e.y || 0) - _;
  return w * w + S * S;
}
function xn(e, t, n) {
  return e + (t - e) * n;
}
function Vn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${G(n, 0, 1)})`;
}
function Hw(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let jo = { fillStyle: "", url: "" };
function Uw(e, t, n) {
  if (jo.url && jo.fillStyle === String(e || ""))
    return jo.url;
  const i = Hw(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ws}" height="${ws}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return jo = { fillStyle: String(e || ""), url: i }, i;
}
function ts(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function gn(e) {
  return {
    r: G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: G(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Xt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Bw(e) {
  return es.some((t) => ts(e, t.color));
}
function Jl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = G(Number(t), 0, 1), c = G(Number(n), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), d = i * 6 - u, p = c * (1 - a), y = c * (1 - d * a), _ = c * (1 - (1 - d) * a);
  switch (u % 6) {
    case 0:
      return { r: c, g: _, b: p };
    case 1:
      return { r: y, g: c, b: p };
    case 2:
      return { r: p, g: c, b: _ };
    case 3:
      return { r: p, g: y, b: c };
    case 4:
      return { r: _, g: p, b: c };
    default:
      return { r: c, g: p, b: y };
  }
}
function Zl(e) {
  const t = G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), u = a - c;
  let d = 0;
  u > 1e-6 && (a === t ? d = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / u + 2) / 6 : d = ((t - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: d, s: p, v: a };
}
function ma(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Ud(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Gw(e, t) {
  const n = Ud(e, 1), i = Ud(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), d = (w, S) => S ? d(S, w % S) : w, p = d(c, u) || 1, y = Math.max(1, Math.round(c / p)), _ = Math.max(1, Math.round(u / p));
  return `${y}:${_}`;
}
function ns(e) {
  const t = G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Pt, n = G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Pt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Kw(e) {
  const t = Number(e);
  if (!Number.isFinite(t) || t <= 0) return "1:1";
  const n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], i = 0.015;
  for (const [a, c] of n)
    if (Math.abs(t - c) <= i) return a;
  return "";
}
function qr(e) {
  const t = ns(e);
  return Kw(t) || Gw(t, 1);
}
function Dm(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = qr(t), t;
}
function Ci(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : qr(e);
}
let Vo = null;
function Ww() {
  return Vo || (Vo = new Promise((e) => {
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
  }), Vo);
}
const Em = "pano_suite.ui_settings.v1", Om = "pano_suite.node_grid_visibility.v1";
let Oi = null, Hn = null, Ho = { text: null, parsed: null };
function Aa(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Yw() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Em)) || "").trim();
    if (!t) return Oi ? Aa(Oi) : null;
    const n = JSON.parse(t), i = Aa(n);
    return Oi = i, i;
  } catch {
    return Oi ? Aa(Oi) : null;
  }
}
function qw(e) {
  var n;
  const t = Aa(e);
  Oi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Em, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Rm() {
  var e;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Om)) || "").trim();
    if (!t)
      return Hn = {}, Hn;
    const n = JSON.parse(t);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function Xw(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Rm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Jw(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Rm();
  i[n] = !!t, Hn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Om, JSON.stringify(i));
  } catch {
  }
}
function Zw(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Qw(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function eS(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Bd(e) {
  const { paintCount: t, maskCount: n } = eS(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Ti(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Gd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function tS(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Dm(t)) : [];
}
function nS(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Yw(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Gt(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: Pa(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return c;
  try {
    let d = null;
    if (Ho.text === u ? d = Ho.parsed : (d = JSON.parse(u), Ho = { text: u, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return c;
    const p = {
      ...c,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Zw(d.assets),
      stickers: Qw(d.stickers),
      shots: tS(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Pa(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const y = String(((_ = d.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...c.active }
    };
    return a && (p.ui_settings = Aa({ ...p.ui_settings, ...a })), p.output_preset = Fm(t, Number(p.output_preset || c.output_preset)), p.bg_color = String(n || p.bg_color || c.bg_color), p.coverage = Gt(i), delete p.editor_history, p;
  } catch {
    return Ho = { text: u, parsed: null }, c;
  }
}
function Mn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Xc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = Mn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, u, d, p, y, _, w, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (p = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || p.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (w = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || w.call(_, !0, !0), (v = (A = (S = bn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function rS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Kd(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function iS(e) {
  var A, v, F, V, j;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = Mn(e, "coverage"), n = Mn(e, "bg_color"), i = Mn(e, xs), a = Mn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && rS(c) && (Kd(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Kd(u))
    try {
      const k = JSON.parse(u);
      y = String(Gt(k == null ? void 0 : k.coverage));
    } catch {
      y = "360";
    }
  const _ = c, w = u, S = d;
  t.value = y, (A = t.callback) == null || A.call(t, y), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = w, (F = i.callback) == null || F.call(i, w), a && (a.value = S, (V = a.callback) == null || V.call(a, S)), (j = e.setDirtyCanvas) == null || j.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function aS(e, t) {
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
function oS(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function wc(e, t, n) {
  var c, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function Uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Fm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function sS(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function lS(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function Lm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function cS(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function $m(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function uS(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = cS(e == null ? void 0 : e.graph, n)), i;
}
function Va(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = an) == null ? void 0 : a.apiURL) == "function" ? an.apiURL(i) : i;
}
function fS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function dS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function hS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function zm(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (fS(t)) return [t];
  const { filename: n, subfolder: i } = dS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Va({
    filename: n,
    subfolder: i,
    type: c
  }));
  return hS([...a, t]);
}
function mS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Va({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ca(e) {
  var i;
  const t = (i = bn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function oi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return oi(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return Va({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = oi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Va(e);
}
function pS(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (t >= 0 && t < c.length && i.push(c[t]), i.push(...c));
  return i;
}
function Ql(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = oi(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function Wd(e, t, n, i = null) {
  var w;
  const a = Ca(e == null ? void 0 : e.id), c = Array.isArray((w = a == null ? void 0 : a.ui) == null ? void 0 : w[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(c) && c.length ? c[0] : null, d = oi(u);
  if (!d) return null;
  const p = `__ui__${t}`, y = n.get(p);
  if (y && y.__panoSrc === d) return y;
  const _ = new Image();
  return _.__panoSrc = d, za(_, d), _.onload = () => {
    ja(_, d), typeof i == "function" && i(_);
  }, _.onerror = () => {
    ai(_, d), typeof i == "function" && i(_);
  }, _.src = d, n.set(p, _), _;
}
function gS(e, t) {
  var k, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((D) => String((D == null ? void 0 : D.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[a], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const d = Lm(e.graph, u), { originId: p, originSlot: y } = $m(d);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const _ = uS(e, a, p), w = Number(y || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((k = bn) == null ? void 0 : k.getNodeImageUrls) == "function" ? bn.getNodeImageUrls(_) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const D = [];
    w >= 0 && w < S.length && D.push(S[w]), D.push(...S);
    const L = Ql(D);
    if (L.length) return { src: L[0], srcCandidates: L, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = Ca((_ == null ? void 0 : _.id) ?? p), v = pS(A, w), F = Ql(v);
  if (F.length) return { src: F[0], srcCandidates: F, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (V.length) {
    const D = [];
    w >= 0 && w < V.length && D.push(V[w]), D.push(...V);
    const L = Ql(D);
    if (L.length) return { src: L[0], srcCandidates: L, sourceType: "nodeImgs", inputName: n };
  }
  const j = (E = _ == null ? void 0 : _.widgets) == null ? void 0 : E.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image");
  if (j) {
    let D = oi(j.value);
    if (D && !D.includes("/") && !D.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (D = an.apiURL(`/view?filename=${encodeURIComponent(D)}&type=input&subfolder=`)), D) return { src: D, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function bS(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const c = zm(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === a && d.img) return d.img;
  const p = new Image();
  za(p, a);
  const y = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(u, y);
  let _ = -1;
  const w = () => {
    var A;
    if (_ += 1, _ >= c.length) {
      ai(p, a), i == null || i(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
      return;
    }
    const S = c[_];
    y.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    ja(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = () => {
    var S;
    if (_ + 1 < c.length) {
      w();
      return;
    }
    ai(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, w(), p;
}
function yS(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), u = a.join(`
`), d = e.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === u && d.img) return d.img;
  const p = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    zm(v).forEach((F) => {
      const V = String(F || "").trim();
      !V || y.has(V) || (y.add(V), p.push(V));
    });
  }), !p.length) return null;
  const _ = new Image();
  za(_, u);
  const w = { srcRaw: u, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(c, w);
  let S = -1;
  const A = () => {
    var F;
    if (S += 1, S >= p.length) {
      ai(_, u), i == null || i(), (F = e.setDirtyCanvas) == null || F.call(e, !0, !0);
      return;
    }
    const v = p[S];
    w.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    ja(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v;
    if (S + 1 < p.length) {
      A();
      return;
    }
    ai(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, A(), _;
}
function jm(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = gS(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Bo(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = jm(e, a), u = String(i || a.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return yS(e, u, d, n);
  const p = String((c == null ? void 0 : c.src) || "").trim();
  return p ? bS(e, u, p, n) : null;
}
async function Ta(e, t, n = {}) {
  var yo, xf;
  try {
    (xf = (yo = e.__panoLinkedInputImageCache) == null ? void 0 : yo.forEach) == null || xf.call(yo, (r, o, s) => {
      r != null && r.img && Gl(r.img) && s.delete(o);
    });
  } catch {
  }
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, u = aS(e, t);
  await Ww();
  const d = Mn(e, "output_preset"), p = Mn(e, "coverage"), y = Mn(e, "bg_color"), _ = Mn(e, xs), w = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Bo(
      e,
      r,
      () => de(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = w();
    return lS(r);
  }, A = (r = 2048) => {
    const o = d == null ? void 0 : d.value;
    return sS(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : Fm(o, r);
  }, v = nS(
    String((_ == null ? void 0 : _.value) || ""),
    A(2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Gt(p == null ? void 0 : p.value)
  );
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, V = F ? Eu(F, !1) : { width: 220, height: 132 }, j = Im(t), k = /* @__PURE__ */ Cs({
    stageStatus: Kn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (j.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (j.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(j.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Oe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: Oe.aspect,
      rotateIcon: Oe.rotate_90,
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
      icon: Oe.fullscreen,
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
      customColorCss: Vn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Vn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: V.width,
      height: V.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), E = document.createElement("div");
  document.body.appendChild(E);
  const D = Oy(Pw, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: j,
    paintSwatches: es.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Vn(r.color, 1)
    })),
    uiState: k,
    onClose: () => {
      Mi();
    }
  });
  try {
    D.mount(E);
  } catch (r) {
    try {
      D.unmount();
    } catch {
    }
    throw E.remove(), r;
  }
  const L = E.querySelector(".pano-modal-overlay"), W = E.querySelector(".pano-modal"), R = W == null ? void 0 : W.querySelector("[data-stage-overlay]"), J = W == null ? void 0 : W.querySelector("[data-stage-background]"), ue = W == null ? void 0 : W.querySelector(".pano-stage-wrap");
  if (!L || !W || !R || !J || !ue)
    throw D.unmount(), E.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const U = document.createElement("div");
  U.setAttribute("aria-hidden", "true"), U.style.position = "absolute", U.style.left = "0", U.style.top = "0", U.style.pointerEvents = "none", U.style.zIndex = "12", U.style.display = "none", U.style.willChange = "transform,width,height,background,border-radius", ue == null || ue.appendChild(U);
  const ve = document.createElement("div");
  ve.className = "pano-paint-size-preview", ve.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", ve.appendChild(xe), ue == null || ue.appendChild(ve);
  const C = R.getContext("2d"), we = ei(), te = t === "cutout" ? Z1({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ye = W.querySelector("[data-side]"), $ = W.querySelector("[data-video-element]"), X = W.querySelector(".pano-floating-right"), _e = W.querySelector(".pano-floating-top"), $e = W.querySelector("[data-tool-rail]"), ze = W.querySelector("[data-frame-rail]"), De = W.querySelector("[data-frame-roll-knob]"), St = W.querySelector("[data-paint-dock]"), Dt = W.querySelector(".pano-video-transport"), jt = W.querySelector("[data-selection-menu]"), Mt = W.querySelector("[data-tooltip]"), Ct = W.querySelector("[data-camera-preview-host]"), dn = W.querySelector("[data-paint-color-row]"), Je = W.querySelector("[data-paint-color-pop]"), Kt = W.querySelector("[data-paint-color-sv]"), kn = W.querySelector("[data-paint-color-sv-cursor]"), O = W.querySelector("[data-paint-hue-strip]"), H = W.querySelector("[data-paint-hue-handle]");
  let Q = 0, pe = 0;
  ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", "boot"), R.style.opacity = "1", J.style.opacity = "0", a && (ye == null || ye.remove(), W.classList.add("pano-modal-readonly"));
  const I = () => {
    if (!f.customPaintSessionStart) return;
    if (ts(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (Bw(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const r = [
      gn(f.customPaintColor),
      ...f.customPaintHistory.filter((o) => !ts(o, f.customPaintColor))
    ];
    f.customPaintHistory = r.slice(0, 8), f.customPaintSessionStart = null;
  }, K = (r = !1) => {
    !Je || Je.hidden || (r ? I() : f.customPaintSessionStart = null, Je.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, ne = () => {
    Je && (Je.hidden && (f.customPaintSessionStart = gn(f.customPaintColor)), Je.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  W.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Vr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (W.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), K(!0), t === "cutout" && f.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, Ke(), de()), (o = k.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (k.frameRail.aspectOpen = !1)));
  });
  const se = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, ae = JSON.stringify(Gd(v)), f = {
    mode: "pano",
    selectedId: se,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Gt(v.coverage),
    historyController: R1(80, { entries: [ae], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ar,
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
    showGrid: Xw(e == null ? void 0 : e.id, !0),
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
    paintEngine: fc(),
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
  }, me = te && Ct ? te.mount(Ct, { shot: null }) : null;
  t === "stickers" && (f.selectedId = null, v.active.selected_sticker_id = null), f.selectedIds = f.selectedId ? [f.selectedId] : [];
  const ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Ce = document.createElement("canvas");
  Ce.__panoFrameIdx = 0;
  const oe = {
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
    tickErrorSignature: ""
  }, Be = (r) => {
    const o = String(r || "default");
    R.style.cursor !== o && (R.style.cursor = o);
  }, Ye = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  }, le = {
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
  }, Fn = 4, ct = 9, gt = [];
  let Vt = 0;
  const Wa = () => {
    var M, P;
    const r = (M = ue == null ? void 0 : ue.getBoundingClientRect) == null ? void 0 : M.call(ue), o = (P = X == null ? void 0 : X.getBoundingClientRect) == null ? void 0 : P.call(X), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, b = l > 0 ? l + 14 + 12 : 72, g = Math.max(280, Math.floor(s - b * 2)), x = f.fullscreen ? Math.min(1200, g) : g;
    k.videoTransport.shellMaxWidthPx = x;
  }, li = () => {
    Vt || (Vt = window.requestAnimationFrame(() => {
      Vt = 0, Wa();
    }));
  }, zs = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Jc = (r) => {
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
  }, Pn = typeof ResizeObserver < "u" ? new ResizeObserver(() => li()) : null;
  Pn == null || Pn.observe(ue), X && (Pn == null || Pn.observe(X)), gt.push(() => {
    var r;
    Vt && (window.cancelAnimationFrame(Vt), Vt = 0), (r = Pn == null ? void 0 : Pn.disconnect) == null || r.call(Pn);
  }), li();
  const Ya = () => {
    le.thumbnailJobId += 1, le.thumbnailSrc = "", k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = ct;
  }, Zc = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      Ya();
      return;
    }
    const h = zw(l);
    if (h) {
      le.thumbnailSrc = l, k.videoTransport.thumbnails = h.thumbnails, k.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (le.thumbnailSrc === l && Array.isArray(k.videoTransport.thumbnails) && k.videoTransport.thumbnails.length)
      return;
    const m = ++le.thumbnailJobId;
    le.thumbnailSrc = l, k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = ct;
    const b = document.createElement("video");
    if (b.preload = "auto", b.muted = !0, b.playsInline = !0, b.crossOrigin = "anonymous", !await new Promise((re) => {
      let ce = !1;
      const ee = (be) => {
        ce || (ce = !0, re(be));
      };
      b.addEventListener("loadedmetadata", () => ee(!0), { once: !0 }), b.addEventListener("canplay", () => ee(!0), { once: !0 }), b.addEventListener("error", () => ee(!1), { once: !0 }), b.src = l, b.load();
    }) || le.thumbnailJobId !== m) return;
    const x = Math.max(1, Number(b.videoWidth || 0)), M = Math.max(1, Number(b.videoHeight || 0));
    if (x < 1 || M < 1) return;
    const P = Math.max(0, Number(b.duration || o || 0)), N = document.createElement("canvas"), T = 46, z = Math.max(72, Math.round(x / M * T));
    N.width = z, N.height = T;
    const q = N.getContext("2d");
    if (!q) return;
    const B = [], Y = (re) => new Promise((ce) => {
      let ee = !1;
      const be = () => {
        ee || (ee = !0, ce());
      };
      b.addEventListener("seeked", be, { once: !0 }), b.addEventListener("error", be, { once: !0 });
      try {
        b.currentTime = re;
      } catch {
        be();
      }
    });
    for (let re = 0; re < ct; re += 1) {
      if (le.thumbnailJobId !== m) return;
      const ce = re / (ct - 1), ee = P > 0 ? Math.max(0, Math.min(P - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), P * ce)) : 0;
      if (await Y(ee), le.thumbnailJobId !== m) return;
      q.clearRect(0, 0, z, T), q.drawImage(b, 0, 0, z, T), B.push({
        id: `thumb-${re}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ee,
        label: Js(ee)
      });
    }
    le.thumbnailJobId === m && (k.videoTransport.thumbnails = B, k.videoTransport.thumbnailCount = B.length || ct, jw(l, {
      thumbnails: B,
      thumbnailCount: B.length || ct,
      duration: P,
      fps: s
    }));
  }, Qc = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, eu = (r) => {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return null;
    const o = Number($.videoWidth || 0), s = Number($.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const h = l.getContext("2d");
    if (!h) return null;
    for (h.drawImage($, 0, 0, o, s), le.frameCache.set(r, l), le.frameCacheOrder = le.frameCacheOrder.filter((m) => m !== r), le.frameCacheOrder.push(r); le.frameCacheOrder.length > Fn; ) {
      const m = le.frameCacheOrder.shift();
      m != null && le.frameCache.delete(m);
    }
    return l;
  }, Vm = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (Ce.width !== s || Ce.height !== l) && (Ce.width = s, Ce.height = l);
    const h = Ce.getContext("2d");
    return h ? (h.clearRect(0, 0, s, l), h.drawImage(r, 0, 0, s, l), Ce.__panoFrameIdx = Number(Ce.__panoFrameIdx || 0) + 1, o != null && (le.presentedTime = Number(o || 0)), !0) : !1;
  }, tu = (r) => {
    const o = Qc(r), s = le.frameCache.get(o) || null;
    return s ? (le.currentFrameNumber = o, Vm(s, r)) : !1;
  };
  if (gt.push(() => {
    Ya();
  }), $ instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof $.requestVideoFrameCallback != "function" || $.__panoFramePumpActive) return;
      $.__panoFramePumpActive = !0;
      const g = (x, M) => {
        $.__panoFramePumpActive = !1;
        const P = Number((M == null ? void 0 : M.mediaTime) ?? $.currentTime ?? 0), N = Qc(P), T = zs();
        le.mode === "scrub" ? Math.abs(P - Number(le.editorTime || 0)) <= T && (eu(N), tu(le.editorTime), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !1,
          visible: tr(),
          currentTime: le.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), de({ cause: "frame_view", localOnly: !0 })) : (le.editorTime = P, le.presentedTime = P, le.requestedTime = null, le.currentFrameNumber = N, eu(N), le.frameCounter += 1, $.dataset.panoFrameIdx = String(le.frameCounter), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !$.paused && !$.ended,
          visible: tr(),
          currentTime: P,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "playback"
        }), de({ cause: "frame_view", localOnly: !0 })), oe.running && (!$.paused || le.mode === "scrub") && r();
      };
      try {
        $.requestVideoFrameCallback(g);
      } catch {
        $.__panoFramePumpActive = !1;
      }
    }, o = () => {
      le.pendingPlaybackResume && (le.pendingPlaybackResume = !1, le.mode = "playback", le.requestedTime = null, pi() && (oe.backgroundDirty = !0, oe.dirty = !0), $.play().catch(() => {
      }));
    }, s = () => {
      le.editorTime = Number($.currentTime || 0), Number($.readyState || 0) >= 2 && pi() && (oe.backgroundDirty = !0, oe.dirty = !0), gi(), r(), de({ cause: "frame_view", localOnly: !0 });
    }, l = () => {
      le.mode = "playback", le.seeking = !1, le.requestedTime = null, gi(), r(), de({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      le.mode === "playback" && pi() && (oe.backgroundDirty = !0, oe.dirty = !0), gi(), de({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: tr(),
        currentTime: le.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: le.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      });
    }, b = () => {
      const g = le.seeking || le.pendingPlaybackResume || le.mode === "scrub";
      if (le.seeking = !1, !g) {
        le.requestedTime = null, r();
        return;
      }
      const x = Number(le.requestedTime ?? le.editorTime ?? 0), M = Number($.currentTime || 0);
      if (Math.abs(M - x) > zs()) {
        Zs(x);
        return;
      }
      le.mode === "scrub" && (pi(), oe.backgroundDirty = !0, oe.dirty = !0, de({ cause: "frame_view", localOnly: !0 })), le.requestedTime = null, o(), r();
    };
    $.addEventListener("loadedmetadata", s), $.addEventListener("loadeddata", s), $.addEventListener("canplay", s), $.addEventListener("play", l), $.addEventListener("pause", h), $.addEventListener("volumechange", m), $.addEventListener("seeked", b), gt.push(() => $.removeEventListener("loadedmetadata", s)), gt.push(() => $.removeEventListener("loadeddata", s)), gt.push(() => $.removeEventListener("canplay", s)), gt.push(() => $.removeEventListener("play", l)), gt.push(() => $.removeEventListener("pause", h)), gt.push(() => $.removeEventListener("volumechange", m)), gt.push(() => $.removeEventListener("seeked", b));
  }
  function Hm() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === f.primaryTool : s ? r.key === f.paintTool : l ? r.key === f.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function js(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => uo(s)) : !1;
  }
  function Lr(r) {
    const o = !!r;
    Te.active !== o && (Te.active = o, ue.classList.toggle("drop-active", o));
  }
  function Vs(r, o, s = f.viewFov, l = 140, h = 620) {
    const m = yv(f.viewYaw, r), b = o - f.viewPitch, g = s - f.viewFov, x = Math.hypot(m, b) + Math.abs(g) * 0.6, M = Math.round(G(l + x * 2.2, l, h));
    f.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: f.viewYaw,
      startPitch: f.viewPitch,
      startFov: f.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, f.viewInertia.active = !1, f.viewInertia.vx = 0, f.viewInertia.vy = 0, de();
  }
  yp();
  function Qn() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Wt() {
    const r = v.painting || (v.painting = Pa(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Um(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = v.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? v.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const b of o) {
      const g = String((b == null ? void 0 : b.actionGroupId) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
    }
    return s;
  }
  function Bm() {
    return Um("paint");
  }
  function Xi(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Ji(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Lt(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Zi(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Hs() {
    var o;
    let r = -1;
    for (const s of Array.isArray(v.stickers) ? v.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Wt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = v.painting) == null ? void 0 : o.raster_objects) ? v.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function nu(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = Wt();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Hs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Gm(r) {
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
  function Km() {
    const r = new Set(Bm()), s = Wt().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Hs(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = s, s;
  }
  function Wm(r, o, s) {
    var B;
    const l = (Y) => (Number(Y || 0) % 1 + 1) % 1, h = [];
    for (const Y of s) {
      const re = Y == null ? void 0 : Y.geometry, ce = (re == null ? void 0 : re.geometryKind) === "lasso_fill" ? re == null ? void 0 : re.points : (re == null ? void 0 : re.processedPoints) || (re == null ? void 0 : re.rawPoints) || (re == null ? void 0 : re.points) || [];
      Array.isArray(ce) && h.push(...ce);
    }
    if (!h.length) return null;
    const m = l(((B = h[0]) == null ? void 0 : B.u) || 0);
    let b = 0, g = 0;
    h.forEach((Y) => {
      const re = l((Y == null ? void 0 : Y.u) || 0);
      b += m + _n(re, m), g += Number((Y == null ? void 0 : Y.v) || 0);
    });
    const x = (b / h.length % 1 + 1) % 1;
    let M = 1 / 0, P = -1 / 0, N = 1 / 0, T = -1 / 0;
    h.forEach((Y) => {
      const re = l((Y == null ? void 0 : Y.u) || 0), ce = _n(re, x);
      M = Math.min(M, ce), P = Math.max(P, ce);
      const ee = Number((Y == null ? void 0 : Y.v) || 0);
      N = Math.min(N, ee), T = Math.max(T, ee);
    });
    const z = s.reduce((Y, re) => {
      const ce = Mr(String((re == null ? void 0 : re.toolKind) || "pen")), ee = cn[ce] || cn[ar], be = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ee == null ? void 0 : ee.sizeScale) ?? 1));
      return Math.max(Y, be);
    }, 0), q = Math.max(35e-4, z / 2048);
    return {
      centerUv: { u: ((x + (M + P) * 0.5) % 1 + 1) % 1, v: G((N + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - M) * 0.5 + q,
      halfH: (T - N) * 0.5 + q,
      uvPad: q
    };
  }
  function yr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const h = Wt().find((b) => String((b == null ? void 0 : b.actionGroupId) || "") === l);
    if (!h) return null;
    const m = s || An(l, o);
    return h.frame = Wm(l, o, m), h.frame;
  }
  function ci() {
    var l;
    const r = (Array.isArray(v.stickers) ? v.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Km().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((l = v.painting) == null ? void 0 : l.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Us(r = !0) {
    var s, l, h, m, b, g;
    const o = ci().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((l = (s = f.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), M = String(((m = (h = f.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((g = (b = f.interaction) == null ? void 0 : b.stroke) == null ? void 0 : g.toolKind) || "").trim();
      x && M === "paint" && P !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function Bs(r = !0) {
    var g, x, M, P, N, T;
    const o = ci();
    if (!r) return o;
    const s = String(((x = (g = f.interaction) == null ? void 0 : g.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((P = (M = f.interaction) == null ? void 0 : M.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((T = (N = f.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || o.some((z) => z.type === "strokeGroup" && String(z.actionGroupId || "") === s))
      return o;
    const m = yt();
    let b = o.reduce((z, q) => Math.max(z, Number((q == null ? void 0 : q.z_index) || 0)), -1) + 1;
    return m && Et(m) && String(m.actionGroupId || "") === s && (b = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: b,
        item: null
      }
    ].sort((z, q) => Number((z == null ? void 0 : z.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0));
  }
  function Ym() {
    return Wt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => fi(Xi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function qm() {
    var r;
    return (Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => ui(Ji((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function ru(r = f.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Xm() {
    var o, s, l, h;
    let r = null;
    try {
      const m = Us(), b = ((h = (l = (s = (o = f.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      b && (r = {
        source: b,
        revision: `${_i()}:${qa()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function qa() {
    var h, m, b, g, x, M, P;
    const r = f.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!ru(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), z = ((b = N == null ? void 0 : N.rawPoints) == null ? void 0 : b.length) ?? ((g = N == null ? void 0 : N.points) == null ? void 0 : g.length) ?? 0, q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${q}_${z}_${f.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((M = r == null ? void 0 : r.item) == null ? void 0 : M.rasterObjectId) || ((P = r == null ? void 0 : r.item) == null ? void 0 : P.id) || "");
    return `_${o}_${s || l || "active"}_${f.livePaintInteractionRevision}`;
  }
  function Gs() {
    const r = Array.isArray(v.shots) ? v.shots : [], o = Array.isArray(v.stickers) ? v.stickers : [];
    return [...r, ...o];
  }
  function hn(r) {
    return !!r && Array.isArray(v.shots) && v.shots.includes(r);
  }
  function bt(r) {
    return !!r && Array.isArray(v.stickers) && v.stickers.includes(r);
  }
  function sn() {
    var r;
    return Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : [];
  }
  function ui(r) {
    const o = Lt(r);
    if (!o) return null;
    const s = sn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ji(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Yt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Lt(r.rasterObjectId || r.id || "");
    return !!o && !!ui(Ji(o));
  }
  function fi(r) {
    const o = Zi(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const l = Wt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Xi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Et(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!fi(Xi(s, o));
  }
  function An(r, o = null) {
    const s = Zi(r, o), l = String(s.actionGroupId || "").trim();
    return l ? wi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function Jm(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${f.mode}:${ra()}`;
    if (f.mode === "frame") {
      const m = Fe(), b = String((m == null ? void 0 : m.id) || ""), g = m ? Ot(m) : null;
      return `${h}:frame:${b}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((R == null ? void 0 : R.width) || 0))}:${Math.round(Number((R == null ? void 0 : R.height) || 0))}`;
  }
  function Xa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: G(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function _n(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Ks(r, o = null, s = null) {
    var M;
    const l = Zi(r, o), h = Array.isArray(s) ? s : An(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((P) => {
      const N = (P == null ? void 0 : P.geometry) || null, T = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const b = Number(((M = m[0]) == null ? void 0 : M.u) || 0);
    let g = 0, x = 0;
    return m.forEach((P) => {
      g += b + _n(Number((P == null ? void 0 : P.u) || 0), b), x += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (g / m.length % 1 + 1) % 1,
      v: G(x / m.length, 0, 1)
    };
  }
  function Ja(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = _n(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Number(l || 0) * Pt, M = Math.cos(x), P = Math.sin(x), N = Math.max(0.02, Number(s || 1)), T = (b * M - g * P) * N, z = (b * P + g * M) * N;
    return {
      ...r,
      u: ((h + T) % 1 + 1) % 1,
      v: G(m + z, 0, 1)
    };
  }
  function iu(r, o, s, l = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let P = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== g) return;
      const T = (M == null ? void 0 : M.get(String((N == null ? void 0 : N.id) || ""))) || N, z = N == null ? void 0 : N.geometry, q = T == null ? void 0 : T.geometry;
      !z || !q || (Array.isArray(q.points) && (z.points = q.points.map((B) => Xa(B, o, s)), P = !0), Array.isArray(q.rawPoints) && (z.rawPoints = q.rawPoints.map((B) => Xa(B, o, s)), P = !0), Array.isArray(q.processedPoints) && (z.processedPoints = q.processedPoints.map((B) => Xa(B, o, s)), P = !0));
    }), P && m) {
      const N = Wt().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === g);
      N && (N.frame = null);
    }
    return P;
  }
  function au(r, o = 1, s = 0, l = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(l) ? l : An(g, b.layerKind), P = Array.isArray(M) ? new Map(M.map((z) => [String((z == null ? void 0 : z.id) || ""), z])) : null, N = (m == null ? void 0 : m.centerUv) ?? Ks(g, b.layerKind, M);
    let T = !1;
    if (x.forEach((z) => {
      if (String((z == null ? void 0 : z.actionGroupId) || "").trim() !== g) return;
      const q = (P == null ? void 0 : P.get(String((z == null ? void 0 : z.id) || ""))) || z, B = z == null ? void 0 : z.geometry, Y = q == null ? void 0 : q.geometry;
      !B || !Y || (Array.isArray(Y.points) && (B.points = Y.points.map((re) => Ja(re, N, o, s)), T = !0), Array.isArray(Y.rawPoints) && (B.rawPoints = Y.rawPoints.map((re) => Ja(re, N, o, s)), T = !0), Array.isArray(Y.processedPoints) && (B.processedPoints = Y.processedPoints.map((re) => Ja(re, N, o, s)), T = !0));
    }), T && m) {
      const z = Wt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === g);
      z && (z.frame = null);
    }
    return T;
  }
  function ou(r, o, s, l = null) {
    const h = Lt(r);
    if (!h) return !1;
    const m = sn().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!m) return !1;
    const b = l && typeof l == "object" ? l : m, g = (b == null ? void 0 : b.transform) || {}, x = Number(g.du || 0) + Number(o || 0), M = G(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = M, !0;
  }
  function Zm(r, o = 1, s = null) {
    const l = Lt(r);
    if (!l) return !1;
    const h = sn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === l);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, b = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(b.scale || 1)), x = G(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function yt() {
    const r = String(f.selectedId || "");
    if (!r) return null;
    const o = fi(r);
    if (o) return o;
    const s = ui(r);
    return s || (t === "cutout" ? Gs().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : Qn().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function Cn() {
    const r = Array.isArray(f.selectedIds) && f.selectedIds.length ? f.selectedIds : f.selectedId ? [f.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(f.selectedId || "") ? yt() : fi(h) || ui(h) || (t === "cutout" ? Gs().find((b) => String((b == null ? void 0 : b.id) || "") === h) : Qn().find((b) => String((b == null ? void 0 : b.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Ws(r = null) {
    const o = Array.isArray(r) ? r : Cn();
    if (!o || o.length < 2) return null;
    const s = o.map((M) => $t(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...l), b = Math.max(...l), g = Math.min(...h), x = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + b) * 0.5, y: (g + x) * 0.5 },
      corners: [
        { x: m, y: g },
        { x: b, y: g },
        { x: b, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + b) * 0.5, y: g, a: { x: m, y: g }, b: { x: b, y: g } },
        { edge: "right", x: b, y: (g + x) * 0.5, a: { x: b, y: g }, b: { x: b, y: x } },
        { edge: "bottom", x: (m + b) * 0.5, y: x, a: { x: b, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (g + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: g } }
      ],
      rotateStemBase: { x: (m + b) * 0.5, y: g },
      rotateHandle: { x: (m + b) * 0.5, y: g - 30 }
    };
  }
  function su(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(f.selectedIds) && f.selectedIds.includes(o);
  }
  function Za() {
    const r = yt();
    return r ? Et(r) || Yt(r) ? "stroke" : hn(r) ? "frame" : "image" : null;
  }
  function er(r) {
    if (!r || typeof r != "object") return !1;
    if (Et(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Wt().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Yt(r)) {
      const o = Lt(r.rasterObjectId || r.id || ""), s = sn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Ys(r = null) {
    const o = Array.isArray(r) ? r : Cn();
    return o.length > 0 && o.every((s) => er(s));
  }
  function Qm(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Et(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), h = Wt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Yt(r)) {
      const l = Lt(r.rasterObjectId || r.id || ""), h = sn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function ep() {
    if (i) return;
    const r = Cn();
    if (!r.length) return;
    const o = !Ys(r);
    let s = !1;
    r.forEach((l) => {
      Qm(l, o) && (s = !0);
    }), s && (Qe(), it(), Ke(), de());
  }
  function di(r) {
    f.selectedId = (r == null ? void 0 : r.id) || null, f.selectedIds = r != null && r.id ? [r.id] : [], r && bt(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && hn(r) ? v.active.selected_shot_id = r.id || null : r ? hn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function tp(r, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((b) => {
      const g = String((b == null ? void 0 : b.id) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
    }), f.selectedIds = s;
    const h = String(o || "").trim();
    f.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = yt();
    v.active.selected_sticker_id = m && bt(m) && m.id || null, m && hn(m) ? v.active.selected_shot_id = m.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function lu() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, l) => {
      var m, b;
      const h = Ht(s) ? String(s.id || Kr) : String(((b = (m = v.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : b.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function np(r) {
    return r === "frame" ? Oe.camera : r === "stroke" ? Oe.paintbrush_vertical_tool : Oe.image;
  }
  function qs(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: np(r.kind)
    };
  }
  function cu() {
    return Hs();
  }
  function Ht(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Kr || String(r.source_kind || "") === Kl;
  }
  function hi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function rp(r) {
    return Ht(r) && hi(r) ? lm : 1;
  }
  function ip() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
  }
  function ap() {
    return String(ip() || "") === "lasso_fill";
  }
  function op() {
    if (i) return;
    const r = yt();
    !r || !Ht(r) || (r.visible = hi(r), Ut(), Qe(), it(), Ve(), Ke(), de());
  }
  function sp() {
    if (i || t !== "stickers") return;
    const r = yt();
    if (!r || !Ht(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Qs(Wl, () => {
      de();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = $r(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), Qe(), it(), Ve(), Ke(), de();
  }
  function lp(r) {
    if (!r || !Ht(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Qs(Wl, () => {
      de();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = $r(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function cp() {
    const r = yt();
    if (!r || !Ht(r)) return !1;
    const o = lp(r);
    if (!o) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Xs(r) {
    var s;
    const o = Ca(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function uu(r) {
    const o = Ca(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function fu() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return hs(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function up() {
    const { metaKey: r } = fu(), o = uu(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function mi(r) {
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
  function Js(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function Ln(r = {}) {
    const o = Number(r.currentTime ?? le.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!k.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!k.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!k.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!($ instanceof HTMLVideoElement ? $.muted : k.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : $ instanceof HTMLVideoElement ? $.volume : k.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Jc($), M = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!k.videoTransport.loop;
    Object.assign(k.videoTransport, {
      ready: l,
      playing: h,
      visible: m,
      loop: M,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Js(o),
      durationLabel: Js(s),
      frameCount: Math.max(0, Number(r.frameCount ?? k.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? k.videoTransport.fps ?? 24)),
      mode: String(r.mode || le.mode || "playback"),
      hasAudio: x,
      muted: b,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : k.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? k.videoTransport.thumbnailCount ?? ct))
    });
  }
  function tr() {
    return !!($ instanceof HTMLVideoElement && $.getAttribute("src") && f.primaryTool !== "paint" && f.primaryTool !== "mask");
  }
  function fp() {
    Ln({
      visible: tr()
    });
  }
  function pi() {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return !1;
    const r = Number($.videoWidth || 0), o = Number($.videoHeight || 0);
    (Ce.width !== r || Ce.height !== o) && (Ce.width = r, Ce.height = o);
    const s = Ce.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage($, 0, 0, r, o), Ce.__panoFrameIdx = Number(Ce.__panoFrameIdx || 0) + 1, le.presentedTime = Number(le.editorTime || $.currentTime || 0), !0) : !1;
  }
  function du() {
    return le.mode === "scrub" && Number(Ce.width || 0) > 0 && Number(Ce.height || 0) > 0 && Number(Ce.__panoFrameIdx || 0) > 0 ? Ce : $ instanceof HTMLVideoElement && Number($.videoWidth || 0) > 0 && Number($.videoHeight || 0) > 0 && Number($.readyState || 0) >= 2 ? $ : null;
  }
  function Zs(r) {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (le.requestedTime = o, !le.seeking && !(Math.abs(Number($.currentTime || 0) - o) <= 5e-4)) {
      le.seeking = !0;
      try {
        $.currentTime = o;
      } catch {
        le.seeking = !1;
      }
    }
  }
  function gi() {
    if (!($ instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = fu(), o = Xs(r)[0] || null, s = o && typeof o == "object" ? Va(o) : oi(o), l = up(), h = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), m = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), b = Number((l == null ? void 0 : l.duration) || (h > 0 ? h / m : 0)), g = !!(l != null && l.has_audio) || Jc($);
    return s && $.dataset.panoSrc !== s ? ($.pause(), $.dataset.panoSrc = s, $.dataset.panoFrameIdx = "0", $.loop = !!k.videoTransport.loop, $.muted = !!k.videoTransport.muted, $.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), $.src = s, $.load(), Zc(s, b, m)) : !s && $.getAttribute("src") && ($.pause(), $.removeAttribute("src"), $.load(), Ya()), $.loop !== !!k.videoTransport.loop && ($.loop = !!k.videoTransport.loop), s && (!Array.isArray(k.videoTransport.thumbnails) || k.videoTransport.thumbnails.length === 0) && Zc(s, b, m), s || Ya(), Ln({
      ready: !!s,
      playing: !$.paused && !$.ended,
      visible: !!s && f.primaryTool !== "paint" && f.primaryTool !== "mask",
      currentTime: le.editorTime,
      duration: b,
      frameCount: h,
      fps: m,
      mode: le.mode,
      hasAudio: g,
      loop: !!$.loop,
      muted: !!$.muted,
      volume: Number($.volume ?? k.videoTransport.volume ?? 1),
      thumbnailCount: k.videoTransport.thumbnailCount
    }), s || null;
  }
  function dp(r, o = null) {
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
  function Qs(r, o = null) {
    const s = Xs(r), l = Array.isArray(s) && s.length ? s[0] : null, h = oi(l);
    if (!h) return null;
    const m = `__ui__${r}`, b = ge.get(m);
    if (b && b.__panoSrc === h) return b;
    const g = new Image();
    return g.__panoSrc = h, za(g, h), g.onload = () => {
      ja(g, h), typeof o == "function" ? o(g) : de();
    }, g.onerror = () => {
      ai(g, h), typeof o == "function" ? o(g) : de();
    }, g.src = h, ge.set(m, g), g;
  }
  function hu(r = null) {
    const o = Bo(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Qs(Wl, r);
  }
  function mu(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function $r(r, o, s) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = G(Number(r || 30), 0.1, 179) * Pt, b = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return G(b * wn, 0.1, 179);
  }
  function hp(r) {
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
      const b = Number(m.yaw_deg), g = Number(m.pitch_deg), x = Number(m.roll_deg), M = Number(m.hFOV_deg);
      if (![b, g, x, M].every((z) => Number.isFinite(z))) return null;
      let P = ((b + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const N = {
        yaw_deg: P,
        pitch_deg: G(g, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: G(M, 0.1, 179)
      }, T = Number(s.source_aspect);
      return Number.isFinite(T) && T > 0 && (N.source_aspect = T), N;
    } catch {
      return null;
    }
  }
  function pu(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = ns(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function mp(r) {
    var g;
    if (!r || typeof r != "object") return pu(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let b = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const x = G(h, 0.1, 179) * Pt, M = G(m, 0.1, 179) * Pt, P = Math.tan(M * 0.5);
      if (Math.abs(P) > 1e-6) {
        const N = Math.tan(x * 0.5) / P;
        Number.isFinite(N) && N > 0 && (b = N);
      }
    }
    if (r != null && r.asset_id && ((g = v == null ? void 0 : v.assets) != null && g[r.asset_id])) {
      const x = v.assets[r.asset_id], M = Number((x == null ? void 0 : x.w) || 0), P = Number((x == null ? void 0 : x.h) || 0);
      M > 0 && P > 0 && (b = M / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: zt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function pp(r) {
    var l, h, m, b, g;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = Lm(e.graph, s), { originId: M, originSlot: P } = $m(x), N = Ca(M), T = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (l = N == null ? void 0 : N.data) == null ? void 0 : l.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (m = N == null ? void 0 : N.ui) == null ? void 0 : m.output,
        (b = N == null ? void 0 : N.ui) == null ? void 0 : b.result
      ];
      for (const z of T) {
        if (!Array.isArray(z)) continue;
        const q = Number(P || 0), B = z[q];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((g = Mn(e, r)) == null ? void 0 : g.value) || "");
  }
  function gp(r, o, s) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : hp(o);
    if (l) {
      const b = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: $r(l.hFOV_deg, b, g),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(f.viewYaw || 0),
      pitch_deg: Number(f.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: $r(30, h, m),
      rot_deg: 0
    };
  }
  function gu(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((z) => String((z == null ? void 0 : z.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = hu(() => {
      var z;
      (z = e.__panoExternalStickerSync) == null || z.call(e, "image-loaded");
    }), h = dp(uu("pano_sticker_input_pose"), null), m = pp("sticker_state"), b = mu(h && typeof h == "object" ? JSON.stringify(h) : m), g = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], x = g.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Kr);
    if (s == null) {
      x >= 0 && (g.splice(x, 1), f.selectedId === Kr && (f.selectedId = null, f.selectedIds = [], v.active.selected_sticker_id = null), it(), Ve(), Ke(), de());
      return;
    }
    const M = g.reduce((z, q) => Math.max(z, Number((q == null ? void 0 : q.z_index) || 0)), -1);
    let P = x >= 0 ? g[x] : null;
    const N = !P || Number(P.source_link_id ?? -1) !== Number(s) || String(P.source_state_hash || "") !== b;
    P || (P = {
      id: Kr,
      source_kind: Kl
    }, g.push(P)), P.id = Kr, P.source_kind = Kl, P.source_link_id = Number(s), P.source_state_hash = b, P.visible = P.visible !== !1;
    let T = !1;
    if (N) {
      const z = gp(h, m, l);
      Object.assign(P, z, {
        initial_pose: { ...z },
        visible: !0,
        z_index: M + 1
      }), T = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const z = $r(
        Number(P.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - z) > 1e-6 && (P.vFOV_deg = z, T = !0);
    }
    T && (it(), Ve(), Ke()), de();
  }
  function Qi(r = {}) {
    const s = r.preservePanelValues !== !1 ? yt() : null;
    s && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ci(s)
    }), f.selectedId = null, f.selectedIds = [], f.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function bp() {
    if (t !== "cutout") return;
    const r = Fe();
    r && (f.selectedId = String(r.id || "") || null, f.selectedIds = f.selectedId ? [f.selectedId] : []);
  }
  function el() {
    if (t !== "cutout") return;
    const r = Fe();
    Pi(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Oe.camera : Oe.plus_circle
    });
  }
  function bu() {
    const r = t === "cutout" && f.mode === "frame", o = !r && !!f.showGrid;
    Pi(k.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), Pi(k.floatingButtons, "action", "toggle-grid", {
      icon: o ? Oe.eye : Oe.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function vr() {
    var s;
    const r = !!Fe();
    f.mode === "frame" && !r && (f.mode = "pano"), f.outputPreviewRect = null, k.viewButtons.forEach((l) => {
      const h = l.key === f.mode;
      l.pressed = h ? "true" : "false", l.visible = !(l.key === "frame" && t !== "cutout"), l.disabled = l.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && f.mode === "frame" ? Fe() : null;
    k.frameRail.visible = !!o, k.frameRail.disabled = i, k.frameRollKnob.visible = !!o && !i, k.frameRollKnob.disabled = i, k.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((s = f.interaction) == null ? void 0 : s.kind) === "roll_frame", k.frameRollKnob.armed = !!o && f.altModifier === !0, k.frameRail.rollKnob = k.frameRollKnob, k.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((l) => ({
      value: l,
      label: l,
      active: !!o && String(Ci(o)) === l
    })), o || (k.frameRail.aspectOpen = !1), k.outputPreviewToggle.visible = t === "cutout" && f.mode !== "frame" && !!Fe(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = f.mode !== "frame", k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame), bu(), Ju() ? ut(f.pointerPos) : Be(f.mode === "pano" ? "grab" : "default");
  }
  function yp() {
    const o = Mu({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function tl() {
    const r = jn(f.viewYaw, f.viewPitch);
    let o = qn(0, 1, 0);
    Math.abs(En(r, o)) > 0.999 && (o = qn(0, 0, 1));
    const s = Ai($o(o, r)), l = Ai($o(r, s));
    return { right: s, up: l, fwd: r };
  }
  function ea(r) {
    const { right: o, up: s, fwd: l } = tl(), h = En(r, o), m = En(r, s), b = En(r, l);
    if (b <= 1e-5) return null;
    const g = R.width, x = R.height, M = f.viewFov * Pt, P = 2 * Math.atan(Math.tan(M / 2) * (x / g)), N = g / 2 / Math.tan(M / 2), T = x / 2 / Math.tan(P / 2);
    return {
      x: g / 2 + h / b * N,
      y: x / 2 - m / b * T,
      z: b
    };
  }
  function nl(r, o) {
    const { right: s, up: l, fwd: h } = tl(), m = R.width, b = R.height, g = f.viewFov * Pt, x = 2 * Math.atan(Math.tan(g / 2) * (b / m)), M = (r - m / 2) / (m / 2) * Math.tan(g / 2), P = (b / 2 - o) / (b / 2) * Math.tan(x / 2), N = Fo(Fo(Lo(s, M), Lo(l, P)), h);
    return Ai(N);
  }
  function _r() {
    const r = R.width, o = R.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, x = g * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function yu(r) {
    var b;
    if (r && typeof r == "object" && (Ht(r) || r.external === !0))
      return hu(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = ge.get(o);
    if (s) return s;
    const l = (b = v.assets) == null ? void 0 : b[o], h = mS(l);
    if (!h) return null;
    const m = new Image();
    return za(m, h), m.onload = () => {
      ja(m, h), de();
    }, m.onerror = () => {
      ai(m, h), de();
    }, m.src = h, ge.set(o, m), m;
  }
  function vu(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Se.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, Se.set(s, h), h;
  }
  function vp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = Ie.get(o);
    if (s) return s.ready ? s : null;
    const l = vu(r, () => {
      const P = Ie.get(o);
      P && (P.ready = !1), de({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const b = document.createElement("canvas");
    b.width = h, b.height = m;
    const g = b.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(l, 0, 0, h, m);
    const x = g.getImageData(0, 0, h, m).data, M = { canvas: b, width: h, height: m, alpha: x, ready: !0 };
    return Ie.set(o, M), M;
  }
  function _p(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = _n(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Math.max(0.02, Number(s || 1)), M = Number(l || 0) * Pt, P = Math.cos(M), N = Math.sin(M), T = b / x, z = g / x, q = T * P + z * N, B = -T * N + z * P;
    return {
      ...r,
      u: ((h + q) % 1 + 1) % 1,
      v: m + B
    };
  }
  function xp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const l = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, b = _p(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(x > 1e-6)) return null;
    const M = _n(Number(b.u || 0), Number(s.u0 || 0)) / g, P = (Number(b.v || 0) - Number(s.v0 || 0)) / x;
    if (M < 0 || M > 1 || P < 0 || P > 1) return 0;
    const N = vp(r);
    if (!N) return null;
    const T = G(Math.floor(M * N.width), 0, N.width - 1), z = G(Math.floor(P * N.height), 0, N.height - 1);
    return Number(N.alpha[(z * N.width + T) * 4 + 3] || 0);
  }
  function _u(r, o, s, l = null) {
    if (!(o != null && o.visible) || !or(s, o.corners)) return !1;
    const h = l || In(s, performance.now()), m = xp(r, h);
    return m === null ? !0 : m > 8;
  }
  function wp() {
    var l, h, m, b, g, x, M, P;
    const r = ((h = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Us(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (b = r == null ? void 0 : r.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((P = (M = r == null ? void 0 : r.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: s };
  }
  function Sp() {
    var z, q, B;
    const r = f.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = mn(), l = `${qa()}:${s.width}:${s.height}`;
    if (((z = f._activePaintEraserPreviewInfo) == null ? void 0 : z.cacheKey) === l)
      return f._activePaintEraserPreviewInfo.value || null;
    const h = Xt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = ul(Y, h.targetSpace, !0);
    }
    const b = na(s.width, s.height, { readback: !0 });
    if (!Lu(b, h, { w: s.width, h: s.height })) return null;
    const g = ((B = (q = b.ctx) == null ? void 0 : q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let x = s.width, M = s.height, P = -1, N = -1;
    for (let Y = 0; Y < s.height; Y += 1)
      for (let re = 0; re < s.width; re += 1)
        g[(Y * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), Y < M && (M = Y), re > P && (P = re), Y > N && (N = Y));
    if (P < x || N < M)
      return f._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const T = {
      surface: b,
      bounds: { minX: x, minY: M, maxX: P, maxY: N },
      key: `${l}:${x}:${M}:${P}:${N}`
    };
    return f._activePaintEraserPreviewInfo = { cacheKey: l, value: T }, f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function bi() {
    f._activePaintEraserPreviewInfo = null, f._liveEraserPreviewCanvasCache = null;
  }
  function Mp(r, o, s) {
    var l, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
      const m = r.item.bbox, b = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(m.u0 || 0) + Number(b.du || 0), x = Number(m.u1 || 0) + Number(b.du || 0), M = Number(m.v0 || 0) + Number(b.dv || 0), P = Number(m.v1 || 0) + Number(b.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(M, 0, 1) * s),
        maxY: Math.ceil(G(P, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = An(r.actionGroupId, "paint"), b = yr(r.actionGroupId, "paint", m);
      if (!b) return null;
      const g = b.centerUv.u - b.halfW, x = b.centerUv.u + b.halfW, M = b.centerUv.v - b.halfH, P = b.centerUv.v + b.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(M, 0, 1) * s),
        maxY: Math.ceil(G(P, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    return null;
  }
  function Np(r, o, s) {
    if (!r || !o) return !1;
    const l = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: s - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], h = l(r), m = l(o);
    return h.some((b) => m.some((g) => !(b.maxX < g.minX || g.maxX < b.minX || b.maxY < g.minY || g.maxY < b.minY)));
  }
  function kp(r, o, s) {
    var be, Ee, Le, We, he, Z, fe;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return r;
    const m = Mp(o, l, h);
    if (m && !Np(m, s.bounds, l)) return r;
    const b = String(((Ee = o.item) == null ? void 0 : Ee.id) || o.id || ""), g = ((Le = o.item) == null ? void 0 : Le.transform) || {}, x = `${s.key}:${b}:${l}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, M = f._liveEraserPreviewCanvasCache instanceof Map ? f._liveEraserPreviewCanvasCache : f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(x)) return M.get(x);
    const P = G(Math.floor(Number(((We = s.bounds) == null ? void 0 : We.minX) || 0)), 0, Math.max(0, l - 1)), N = G(Math.floor(Number(((he = s.bounds) == null ? void 0 : he.minY) || 0)), 0, Math.max(0, h - 1)), T = G(Math.ceil(Number(((Z = s.bounds) == null ? void 0 : Z.maxX) || 0)), P, Math.max(0, l - 1)), z = G(Math.ceil(Number(((fe = s.bounds) == null ? void 0 : fe.maxY) || 0)), N, Math.max(0, h - 1)), q = Math.max(1, T - P + 1), B = Math.max(1, z - N + 1), Y = na(l, h, { readback: !0 });
    Y.ctx.clearRect(0, 0, l, h), Y.ctx.drawImage(r, 0, 0);
    const re = Y.ctx.getImageData(P, N, q, B);
    Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(s.surface.canvas, 0, 0), Y.ctx.restore();
    const ce = Y.ctx.getImageData(P, N, q, B);
    let ee = !1;
    for (let Ae = 0; Ae < q * B; Ae += 1) {
      const Pe = re.data[Ae * 4 + 3], Ne = ce.data[Ae * 4 + 3];
      if (Pe > Ne) {
        ee = !0;
        break;
      }
    }
    return ee ? (M.size > 64 && M.clear(), M.set(x, Y.canvas), Y.canvas) : (M.set(x, r), r);
  }
  function xu(r, o = null) {
    const s = Lt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const h = vu(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: b } = wp(), g = (r == null ? void 0 : r.transform) || {}, x = [
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
      ra()
    ].join(":"), M = Re.get(x);
    if (M) return M;
    Re.size > 64 && Re.clear();
    const P = document.createElement("canvas");
    P.width = m, P.height = b;
    const N = P.getContext("2d");
    if (!N) return null;
    const T = Number(l.u0 || 0) * m, z = Number(l.v0 || 0) * b, q = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * b), Y = T + q * 0.5 + Number(g.du || 0) * m, re = z + B * 0.5 + Number(g.dv || 0) * b, ce = Number(g.rot_deg || 0) * Pt, ee = Math.max(0.01, Number(g.scale || 1));
    for (const be of [-m, 0, m])
      N.save(), N.translate(Y + be, re), N.rotate(ce), N.scale(ee, ee), N.drawImage(h, -q * 0.5, -B * 0.5, q, B), N.restore();
    return Re.set(x, P), P;
  }
  function Pp() {
    return Ls(v, {
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ap(r) {
    return cm(
      v,
      (o, s, l) => yu(l || o),
      { scene: r }
    );
  }
  function wu(r, o, s, l, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = xr(l);
    if (Au(o, s))
      return Lp(
        o,
        s,
        m && f.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const g = no(), x = ro(g), M = f.showObjects ? io() : ta([]), N = ba({
      stateRevision: [
        h,
        m ? mi(l) : "no_bg",
        Array.isArray(x) ? x.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        M.length ? M.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && f.showPanorama ? l : null,
      backgroundRevision: m ? `${h}:${mi(l)}` : "",
      coverageDeg: Gt(v.coverage),
      scene: g,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: M,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), T = we;
    if (!T.syncState(N)) return !1;
    const q = T.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return q ? (r.drawImage(q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function rl(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await an.fetchApi("/upload/image", { method: "POST", body: s });
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
  async function il(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await an.fetchApi("/upload/image", { method: "POST", body: l });
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
    const r = Bd(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = _i();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Su() {
    const r = String(e.id ?? "0"), o = Eo.get(r);
    if (eo && o) return o;
    const s = (async () => {
      var m, b, g, x, M, P, N, T, z, q, B, Y;
      const l = _i(), h = Bd(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Qa = l, pn());
        return;
      }
      if (Qa !== l && !eo) {
        eo = !0;
        try {
          lo();
          const re = Us(!1), ce = ((b = (m = f.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : b.call(m, re)) || null, ee = ((g = ce == null ? void 0 : ce.displayPaint) == null ? void 0 : g.canvas) || null, be = ((x = ce == null ? void 0 : ce.committedMask) == null ? void 0 : x.canvas) || null, Ee = Math.max(1, Number(((M = ce == null ? void 0 : ce.descriptor) == null ? void 0 : M.width) || (ee == null ? void 0 : ee.width) || (be == null ? void 0 : be.width) || 2048)), Le = Math.max(1, Number(((P = ce == null ? void 0 : ce.descriptor) == null ? void 0 : P.height) || (ee == null ? void 0 : ee.height) || (be == null ? void 0 : be.height) || 1024));
          (!ee && h.totalPaintCount > 0 || !be && h.totalMaskCount > 0) && ((!f._paintLayerSyncBlankSurface || Number(((N = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Ee || Number(((T = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Le) && (f._paintLayerSyncBlankSurface = na(Ee, Le)), f._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ee, Le));
          const We = ee || h.totalPaintCount > 0 && ((z = f._paintLayerSyncBlankSurface) == null ? void 0 : z.canvas) || null, he = be || h.totalMaskCount > 0 && ((q = f._paintLayerSyncBlankSurface) == null ? void 0 : q.canvas) || null;
          if (!We && !he) return;
          let Z = null, fe = null;
          const Ae = [];
          if (h.totalPaintCount > 0) {
            Z = await il(We, `pano_paint_${r}.png`);
            for (const Pe of re) {
              const Ne = String(Pe || "").trim();
              if (!Ne) continue;
              const je = ((Y = (B = f.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : Y.call(B, Ne)) || null;
              if (!je) continue;
              const Xe = Ne.replace(/[^a-zA-Z0-9_-]+/g, "_"), He = await il(je, `pano_group_${r}_${Xe}.png`);
              He && Ae.push({
                id: Ne,
                actionGroupId: Ne,
                image: He
              });
            }
          }
          h.totalMaskCount > 0 && (fe = await il(he, `pano_mask_${r}.png`)), l === _i() && (v.painting_layer = {
            paint: Z,
            mask: fe,
            groups: Ae,
            revision: l
          }, Qa = l, pn());
        } catch (re) {
          throw re;
        } finally {
          eo = !1;
        }
      }
    })();
    return Eo.set(r, s), s.finally(() => {
      Eo.get(r) === s && Eo.delete(r);
    }), s;
  }
  function zr() {
    if (t === "cutout") {
      const g = du();
      if (g) return g;
      const x = Bo(
        e,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return x && !Gl(x) ? x : Wd(e, "pano_input_images", ge, () => de()) || x || null;
    }
    const r = du();
    if (r) return r;
    const o = Wd(e, "pano_input_images", ge, () => de());
    if (o && !Gl(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], l = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (l || h) ? m = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Bo(e, m, () => de(), `background:${m.join("|")}`) || o || null;
  }
  function xr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Tp() {
    let r = Yi;
    const o = [];
    if (f.showPanorama) {
      const s = zr();
      r = xc(s, xr);
    }
    if (f.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = yu(l);
        o.push(xc(h, xr));
      }
    }
    return Aw({
      presented: oe.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function yi() {
    const r = new Set(
      (v.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(v.assets || {}).forEach((o) => {
      r.has(o) || (delete v.assets[o], ge.delete(o));
    });
  }
  function al(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(G(r.y, -1, 1))
    };
  }
  function ol(r, o = null) {
    const { lon: s, lat: l } = al(r), h = _r();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const b = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: b, z: 1 };
  }
  function to(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = qn(0, 1, 0);
    Math.abs(En(o, s)) > 0.999 && (s = qn(0, 0, 1));
    const l = Ai($o(s, o)), h = Ai($o(o, l)), m = Math.tan(G(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Pt), b = Math.tan(G(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Pt), g = Number(r.rot_deg || r.roll_deg || 0) * Pt, x = Math.cos(g), M = Math.sin(g);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: b,
      cr: x,
      sr: M
    };
  }
  function wr(r, o, s) {
    const l = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return Ai(Fo(Fo(r.centerDir, Lo(r.right, l)), Lo(r.up, h)));
  }
  function Mu(r) {
    const o = to(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => wr(o, l * o.tanX, h * o.tanY));
  }
  function Nu(r, o, s) {
    const l = to(r), h = (o * 2 - 1) * l.tanX, m = (1 - s * 2) * l.tanY;
    return wr(l, h, m);
  }
  function ku(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: G((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ip(r) {
    var x, M, P, N;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), h = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.du) || 0), b = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => Xa(Ja(T, s, l, h), m, b));
  }
  function Dp(r) {
    const o = Lt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${f.mode}:${ra()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (f.mode === "frame") {
      const m = Fe(), b = m ? Ot(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((R == null ? void 0 : R.width) || 0))}:${Math.round(Number((R == null ? void 0 : R.height) || 0))}`;
  }
  function Ep(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      hn(r) ? "frame" : bt(r) ? "sticker" : "item",
      o,
      f.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Ci(r)
    ].join(":");
    if (f.mode === "frame") {
      const h = Fe(), m = h ? Ot(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((R == null ? void 0 : R.width) || 0))}:${Math.round(Number((R == null ? void 0 : R.height) || 0))}`;
  }
  function Op() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? f.hqFrames && f.hqFrames > 0 ? [28, 20] : f.interaction ? [12, 9] : [20, 14] : r === "high" ? f.hqFrames && f.hqFrames > 0 ? [48, 36] : f.interaction ? [20, 14] : [36, 26] : f.hqFrames && f.hqFrames > 0 ? [40, 30] : f.interaction ? [16, 12] : [28, 20];
  }
  function Pu() {
    var r;
    return !!J && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function Au(r, o) {
    return !Pu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((R == null ? void 0 : R.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((R == null ? void 0 : R.height) || 0));
  }
  function no() {
    return f.showObjects ? Pp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function ro(r) {
    return !f.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Ap(r);
  }
  function Cu() {
    var r, o;
    return ((o = (r = f.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Rp() {
    return Cu() ? `${fl()}:mask_display` : "";
  }
  function ta(r) {
    if (!f.showMask) return r;
    const o = Cu();
    if (!o) return r;
    const s = Rp(), l = r.reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(l, h);
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
    const r = Bs(!0), o = Sp(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const b = String(m.actionGroupId || m.id || "");
        if (!b) continue;
        const g = ((h = (l = f.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : h.call(l, b)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${b}`,
          source: g,
          revision: `${fl()}:${b}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const b = m.item || null, g = Lt((b == null ? void 0 : b.id) || m.id || "");
        if (!g) continue;
        const x = xu(b, () => de());
        if (!x) continue;
        const M = kp(x, m, o), P = (b == null ? void 0 : b.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: M,
          revision: [
            _i(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (b == null ? void 0 : b.visible) !== !1
        });
      }
    }
    return ta(s);
  }
  function Fp(r, o = "modal_bg_gl") {
    const s = no(), l = ro(s), h = xr(r), m = h ? mi(r) : "none", b = f.showObjects ? io() : ta([]), g = null, x = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((M) => String((M == null ? void 0 : M.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((M) => `${String((M == null ? void 0 : M.assetId) || "")}:${String((M == null ? void 0 : M.revision) || "")}`).join(",") : "none",
      b.length ? b.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${String((M == null ? void 0 : M.revision) || "")}:${Number((M == null ? void 0 : M.zIndex) || 0)}`).join(",") : "paint:none",
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ba({
        stateRevision: x,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Gt(v.coverage),
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
  function sl() {
    if (!J) return;
    const r = J.getContext("webgl2");
    if (r)
      r.viewport(0, 0, J.width, J.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = J.getContext("2d");
      o && (o.clearRect(0, 0, J.width, J.height), o.fillStyle = "#070707", o.fillRect(0, 0, J.width, J.height));
    }
    oe.backgroundWasVisible = !1, oe.backgroundDirty = !1;
  }
  function Lp(r, o, s, l = "modal_bg_gl") {
    var M;
    if (!Au(r, o)) return !1;
    if (!oe.backgroundDirty && oe.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = Fp(s, l);
    if (!m || !we.syncState(h))
      return sl(), !1;
    const g = we.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (M = J == null ? void 0 : J.getContext) == null ? void 0 : M.call(J, "2d");
    return !g || !x ? (sl(), !1) : (x.clearRect(0, 0, J.width, J.height), x.drawImage(g, 0, 0, J.width, J.height), oe.backgroundWasVisible = !0, oe.backgroundDirty = !1, !0);
  }
  function $p(r = !1) {
    const o = R.width, s = R.height, l = _r();
    if (C.globalAlpha = 1, C.lineWidth = 1, r || (C.fillStyle = "#070707", C.fillRect(0, 0, o, s), C.fillStyle = "#070707", C.fillRect(l.x, l.y, l.w, l.h)), lo(), wu(
      C,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      zr(),
      "modal_unwrap"
    ), f.showGrid && !f.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const b = l.x + l.w * m / 16;
        C.beginPath(), C.moveTo(b, l.y), C.lineTo(b, l.y + l.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const b = l.y + l.h * m / 8;
        C.beginPath(), C.moveTo(l.x, b), C.lineTo(l.x + l.w, b), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(l.x, l.y + l.h / 2), C.lineTo(l.x + l.w, l.y + l.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = l.y + l.h * 0.57;
      C.fillText("Left", l.x + l.w * 0.25, h), C.fillText("Front", l.x + l.w * 0.5, h), C.fillText("Right", l.x + l.w * 0.75, h), C.fillText("Back", l.x + 38, h), C.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Tu(r, o, s = 1) {
    let l = !1;
    C.strokeStyle = o, C.lineWidth = s, C.beginPath();
    for (const h of r) {
      const m = ea(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), l = !0);
    }
    C.stroke();
  }
  function zp(r = !1) {
    const o = R.width, s = R.height;
    if (r || (Pu() ? C.clearRect(0, 0, o, s) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, s))), lo(), wu(
      C,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: f.viewYaw,
        pitchDeg: f.viewPitch,
        fovDeg: f.viewFov,
        coverageDeg: Gt(v.coverage)
      },
      zr(),
      "modal_pano"
    ), f.showGrid && !f.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let b = -89; b <= 89; b += 4) m.push(jn(h, b));
        Tu(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let b = -180; b <= 180; b += 4) m.push(jn(b, h));
        Tu(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: jn(-90, 0) },
        { name: "Front", dir: jn(0, 0) },
        { name: "Right", dir: jn(90, 0) },
        { name: "Back", dir: jn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", l.forEach((h) => {
        const m = ea(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function jp(r, o = null, s = null, l = null) {
    if (f.mode === "frame") {
      const h = o || Fe();
      if (!h) return [];
      const m = s || Ot(h);
      return xg(r, h, m);
    }
    return $u(r, l);
  }
  function ao(r, o = null, s = null, l = null, h = null) {
    if (!r) return null;
    if (f.mode === "unwrap") {
      const b = $u([r], h);
      return b[0] ? { x: b[0].x, y: b[0].y, z: 1 } : null;
    }
    const m = vi(r);
    return m ? nr(m, o, s, l) : null;
  }
  function Vp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = An(s, r.layerKind), h = yr(s, r.layerKind, l), m = (h == null ? void 0 : h.centerUv) || Ks(s, r.layerKind, l), b = f.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], x = f.mode === "frame" ? Fe() : null, M = x ? Ot(x) : null;
    for (const ee of l) {
      const be = (ee == null ? void 0 : ee.geometry) || null, Ee = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Le = jp(Ee, x, M, b).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
      if (!Le.length) continue;
      const We = Mr(String((ee == null ? void 0 : ee.toolKind) || "pen")), he = cn[We] || cn[ar];
      g.push({
        points: Le,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ee == null ? void 0 : ee.size) || 10) * Math.max(0.1, Number((he == null ? void 0 : he.sizeScale) ?? 1)) + 10),
        layerKind: String((ee == null ? void 0 : ee.layerKind) || r.layerKind || "paint")
      });
    }
    const P = ao(m, null, x, M, b);
    if (!P) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(o, ee), ee;
    }
    const T = Gm(h).map((ee) => ao(ee, P.x, x, M, b)).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y)).map((ee) => ({ x: Number(ee.x || 0), y: Number(ee.y || 0) }));
    if (T.length < 4) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(o, ee), ee;
    }
    const z = (ee, be) => ({
      x: (Number((ee == null ? void 0 : ee.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((ee == null ? void 0 : ee.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: ee,
      b: be
    }), q = z(T[0], T[1]), B = z(T[1], T[2]), Y = z(T[2], T[3]), re = z(T[3], T[0]), ce = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...q },
        { edge: "right", ...B },
        { edge: "bottom", ...Y },
        { edge: "left", ...re }
      ],
      rotateStemBase: { x: q.x, y: q.y },
      rotateHandle: { x: q.x, y: q.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return f._strokeGeomCache.set(o, ce), ce;
  }
  function Hp(r, o) {
    const s = f.mode === "frame" ? Fe() : null, l = s ? Ot(s) : null, h = ku(r), m = f.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, b = ao(h, null, s, l, m), x = Ip(r).map((T) => ao(T, (b == null ? void 0 : b.x) ?? null, s, l, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(x) || x.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return f._strokeGeomCache.set(o, T), T;
    }
    const M = x.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: M.reduce((T, z) => T + Number(z.x || 0), 0) / M.length,
        y: M.reduce((T, z) => T + Number(z.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return f._strokeGeomCache.set(o, N), N;
  }
  function nr(r, o = null, s = null, l = null, h = {}) {
    if (f.mode === "frame") {
      const be = s || Fe(), Ee = l || Ot(be);
      if (!be || !Ee) return null;
      const Le = be ? ia(be, r) : null;
      return Le ? {
        x: Number(Ee.x || 0) + Number(Le.x || 0) * Number(Ee.w || 0),
        y: Number(Ee.y || 0) + Number(Le.y || 0) * Number(Ee.h || 0),
        z: 1
      } : null;
    }
    if (f.mode === "unwrap") return ol(r, o);
    const { right: m, up: b, fwd: g } = tl(), x = En(r, m), M = En(r, b), P = En(r, g), N = 1e-4;
    if (!Number.isFinite(P) || P <= N && !(h != null && h.clipBehind)) return null;
    const T = Math.max(P, N), z = R.width, q = R.height, B = f.viewFov * Pt, Y = 2 * Math.atan(Math.tan(B / 2) * (q / Math.max(z, 1))), re = z / 2 / Math.tan(B / 2), ce = q / 2 / Math.tan(Y / 2), ee = Math.max(z, q) * 2;
    return {
      x: G(z / 2 + x / T * re, -ee, z + ee),
      y: G(q / 2 - M / T * ce, -ee, q + ee),
      z: T,
      rawZ: P,
      clipped: P <= N
    };
  }
  function Up(r, o = []) {
    if (f.mode !== "pano" || bt(r)) return 1;
    const s = o.map((l) => Number((l == null ? void 0 : l.rawZ) ?? (l == null ? void 0 : l.z))).filter((l) => Number.isFinite(l));
    return s.length ? $w(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Bp(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = f.mode === "frame" ? Fe() : null, l = s ? Ot(s) : null, h = f.mode === "pano" && (bt(r) || hn(r)), m = h ? { clipBehind: !0 } : null, b = nr(o, null, s, l, m);
    if (!b) return { visible: !1 };
    const g = to(r), M = Mu(r).map((Z) => nr(Z, b.x, s, l, m)).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
    if (M.length < 4) return { visible: !1 };
    const P = wr(g, 0, g.tanY), N = wr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), T = nr(P, b.x, s, l, m);
    if (!T) return { visible: !1 };
    const z = nr(N, (T == null ? void 0 : T.x) ?? b.x, s, l, m), q = ((z == null ? void 0 : z.x) ?? T.x) - T.x, B = ((z == null ? void 0 : z.y) ?? T.y) - T.y, Y = Math.hypot(q, B) || 1, re = {
      x: T.x + q / Y * 30,
      y: T.y + B / Y * 30
    }, ce = nr(wr(g, 0, g.tanY), b.x, s, l, m), ee = nr(wr(g, g.tanX, 0), b.x, s, l, m), be = nr(wr(g, 0, -g.tanY), b.x, s, l, m), Ee = nr(wr(g, -g.tanX, 0), b.x, s, l, m);
    if (!ce || !ee || !be || !Ee) return { visible: !1 };
    const Le = [
      b,
      ...M,
      T,
      z,
      ce,
      ee,
      be,
      Ee
    ];
    if (h && !Le.some((Z) => Number((Z == null ? void 0 : Z.rawZ) ?? (Z == null ? void 0 : Z.z)) > 1e-4)) return { visible: !1 };
    const We = Up(r, Le), he = [
      {
        edge: "top",
        x: ce.x,
        y: ce.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ee.x,
        y: ee.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: be.x,
        y: be.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Ee.x,
        y: Ee.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: M.map((Z) => ({ x: Z.x, y: Z.y })),
      edgeMidpoints: he,
      rotateStemBase: { x: T.x, y: T.y },
      rotateHandle: re,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: We,
      visible: !0
    };
  }
  function $t(r) {
    if (Et(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Jm(h, r.layerKind), b = f._strokeGeomCache.get(m);
      return b || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Vp(r, m));
    }
    if (Yt(r)) {
      const h = Dp(r), m = f._strokeGeomCache.get(h);
      return m || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Hp(r, h));
    }
    const o = Ep(r), s = f._strokeGeomCache.get(o);
    if (s) return s;
    f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear();
    const l = Bp(r);
    return f._strokeGeomCache.set(o, l), l;
  }
  function oo(r, o, s, l = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const b = m / s;
      let g = 0, x = 0;
      o === 0 ? (g = b, x = 0) : o === 1 ? (g = 1, x = b) : o === 2 ? (g = 1 - b, x = 1) : (g = 0, x = 1 - b);
      const M = Nu(r, g, x), P = f.mode === "unwrap" ? ol(M, l) : ea(M);
      P && h.push(P);
    }
    return h;
  }
  function Gp(r, o) {
    const s = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = f.mode === "unwrap" ? ol(s) : null, h = l ? l.x : null, m = f.mode === "pano" ? 28 : 20, b = [
      oo(r, 0, m, h),
      oo(r, 1, m, h),
      oo(r, 2, m, h),
      oo(r, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let g = !1;
    for (const x of b)
      for (const M of x)
        g ? C.lineTo(M.x, M.y) : (C.moveTo(M.x, M.y), g = !0);
    C.closePath(), C.stroke();
  }
  function Kp() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function ll() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function so(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Iu(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const h = G(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = C.globalAlpha;
    C.globalAlpha = m * h;
    const b = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = o ? 3.2 : 2.6;
    so(C, l), C.fillStyle = g, C.fill(), C.strokeStyle = b, C.lineWidth = x, C.stroke(), C.save(), C.strokeStyle = b, C.lineWidth = o ? 3.2 : 2.6, C.lineCap = "round";
    const M = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = o ? 12 : 9;
    M.forEach((T) => {
      const q = M.find((ce) => (ce == null ? void 0 : ce.edge) === P[T == null ? void 0 : T.edge]) || {
        x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
        y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
      }, B = q.x - T.x, Y = q.y - T.y, re = Math.hypot(B, Y) || 1;
      C.beginPath(), C.moveTo(T.x, T.y), C.lineTo(T.x + B / re * N, T.y + Y / re * N), C.stroke();
    }), C.restore(), C.globalAlpha = m;
  }
  function Wp(r, o, s, l) {
    const h = G(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (hn(r)) {
      Iu(o, s, l);
      return;
    }
    if (bt(r)) {
      const b = C.globalAlpha;
      C.globalAlpha = b * rp(r) * h, f.mode === "frame" ? (C.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = s ? 2 : 1, so(C, o.corners), C.stroke()) : Gp(r, s), C.globalAlpha = b;
      return;
    }
    const m = C.globalAlpha;
    C.globalAlpha = m * h, C.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", so(C, o.corners), C.fill(), C.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = s ? 2.8 : 1.9, so(C, o.corners), C.stroke(), C.globalAlpha = m;
  }
  function Du(r, o, s) {
    C.fillStyle = s, o.corners.forEach((l) => {
      C.beginPath(), C.arc(l.x, l.y, 6.5, 0, Math.PI * 2), C.fill();
    }), hn(r) && (C.strokeStyle = s, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var P, N, T, z;
      const h = (((P = l.b) == null ? void 0 : P.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), m = (((T = l.b) == null ? void 0 : T.y) ?? l.y) - (((z = l.a) == null ? void 0 : z.y) ?? l.y), b = Math.hypot(h, m) || 1, g = h / b, x = m / b, M = 10;
      C.beginPath(), C.moveTo(l.x - g * M, l.y - x * M), C.lineTo(l.x + g * M, l.y + x * M), C.stroke();
    }), C.lineCap = "butt"), Et(r) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = s, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function Yp() {
    var g;
    const [r, o] = Op(), s = f.mode === "frame" ? [] : Cn(), l = s.length > 1, h = t === "cutout" ? Kp() : Qn(), m = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${hn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!f._sortedItemsCache || f._sortedItemsCache.src !== h || f._sortedItemsCache.orderKey !== m) && (f._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const b = f._sortedItemsCache.sorted;
    for (const x of b) {
      const M = f.mode !== "frame" && !l && su(x);
      if (f.mode === "frame" && !M || !f.showObjects && !hn(x)) continue;
      const P = bt(x), N = hn(x), T = er(x);
      if (!P && !N)
        continue;
      const z = $t(x);
      if (t !== "stickers" && !z.visible)
        continue;
      const q = G(Number((z == null ? void 0 : z.visibilityAlpha) ?? 1), 0, 1);
      if (q <= 0.01) continue;
      const B = N && t === "cutout" && f.mode === "pano" ? G(Number(f.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (C.save(), C.globalAlpha *= B, Wp(x, z, M, T), M && z.visible) {
        const Y = T ? "#ff4d4f" : P && Ht(x) ? "#f59e0b" : "#0070f3", re = C.globalAlpha;
        C.globalAlpha = re * q, Du(x, z, Y), C.globalAlpha = re;
      }
      C.restore();
    }
    if (t === "cutout" && f.mode === "pano" && !Fe() && f.cutoutPanoFrameVisual && f.cutoutPanoFrameAlpha > 1e-4) {
      const x = f.cutoutPanoFrameVisual, M = G(Number(f.cutoutPanoFrameAlpha || 0), 0, 1);
      C.save(), C.globalAlpha *= M, Iu(x.geom, x.selected, x.locked), x.selected && Du(
        x.item,
        x.geom,
        x.locked ? "#ff4d4f" : "#0070f3"
      ), C.restore();
    }
    if (l) {
      const x = Ws(s);
      if (x != null && x.visible) {
        const M = Ys(s) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(x.corners[0].x, x.corners[0].y);
        for (let P = 1; P < x.corners.length; P += 1) C.lineTo(x.corners[P].x, x.corners[P].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = M, x.corners.forEach((P) => {
          C.beginPath(), C.arc(P.x, P.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      s.forEach((x) => {
        if (!Et(x) && !Yt(x)) return;
        const M = $t(x);
        if (!(M != null && M.visible)) return;
        const P = er(x) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(M.corners[0].x, M.corners[0].y);
        for (let N = 1; N < M.corners.length; N += 1) C.lineTo(M.corners[N].x, M.corners[N].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = P, M.corners.forEach((N) => {
          C.beginPath(), C.arc(N.x, N.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      });
    if (((g = f.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const x = nf(f.interaction.start, f.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), C.fill(), C.stroke(), C.restore();
    }
    f.hqFrames && r >= 40 && o >= 30 && (f.hqFrames -= 1, f.hqFrames > 0 && de());
  }
  function qp(r) {
    const o = Ir(r), s = G(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Eu(r, o = !1) {
    const s = G(ns(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Xp(r) {
    if (!Ct || !r) return !1;
    const o = Ct.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || Ct.clientWidth || 0)), l = Math.round(Number(o.clientHeight || Ct.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function Jp() {
    return `obj:${Number(f.objectVisualRevision || 0)}`;
  }
  function Zp(r, o = {}) {
    if (!r) return "";
    const s = zr(), l = s && xr(s) ? mi(s) : "no_bg", h = qp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      fl(),
      Jp(),
      qa(),
      l,
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Qp() {
    var T, z, q, B;
    if (f.outputPreviewRect = null, k.outputPreviewToggle.visible = f.mode !== "frame" && !!Fe(), t !== "cutout" || !k.cameraPreview) return;
    if (f.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = Fe();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (T = te == null ? void 0 : te.clearScene) == null || T.call(te), (z = me == null ? void 0 : me.requestRender) == null || z.call(me);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = zr();
    if (!r || !te || !me) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (q = te == null ? void 0 : te.clearScene) == null || q.call(te), (B = me == null ? void 0 : me.requestRender) == null || B.call(me);
      return;
    }
    const s = Eu(r, !!f.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!f.outputPreviewExpanded;
    const l = no(), h = ro(l), m = xr(o), b = m ? mi(o) : "none", g = f.showObjects ? io() : ta([]), x = ba({
      stateRevision: [
        "cutout_preview_camera",
        b,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((Y) => String((Y == null ? void 0 : Y.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((Y) => `${String((Y == null ? void 0 : Y.assetId) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}`).join(",") : "none",
        g.length ? g.map((Y) => `${String((Y == null ? void 0 : Y.id) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}:${Number((Y == null ? void 0 : Y.zIndex) || 0)}`).join(",") : "paint:none",
        f.showPanorama ? "panorama:1" : "panorama:0",
        f.showObjects ? "objects:1" : "objects:0",
        f.showMask ? "showMask:1" : "showMask:0",
        Gt(v.coverage)
      ].join("|"),
      backgroundSource: m && f.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${b}` : "",
      coverageDeg: Gt(v.coverage),
      scene: l,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), me.requestRender();
      return;
    }
    if (f.showPanorama && !m && h.length === 0 && g.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), me.requestRender();
      return;
    }
    te.syncScene(x), me.setView(Ir(r));
    const P = Xp(s), N = P ? me.present() : !1;
    P || me.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = P && N ? "" : "Loading preview", k.cameraPreview.settled = P && N && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame;
  }
  function eg(r, o, s, l = {}) {
    if (!te || !s) return !1;
    const h = zr(), m = no(), b = ro(m), g = xr(h), x = f.showObjects ? io() : ta([]);
    return g || b.length > 0 || x.length > 0 ? (te.syncScene(ba({
      stateRevision: Zp(s, l),
      backgroundSource: g && f.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${mi(h)}` : "",
      coverageDeg: Gt(v.coverage),
      scene: m,
      textures: b,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), te.renderShotToContext(r, o, s, l)) : !1;
  }
  function cl(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return Nu(r, s, l);
  }
  function vi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return qn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function tg(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function ng(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: qt(r, "widthScale", 1),
      pressureLike: qt(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function rg(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function ul(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (l) {
      let B = null;
      r.forEach((Y) => {
        const re = Number((Y == null ? void 0 : Y.u) || 0), ce = Number((Y == null ? void 0 : Y.v) || 0), ee = (re % 1 + 1) % 1, be = B == null ? ee : B + _n(ee, (B % 1 + 1) % 1);
        h.set(Y, { x: be, y: ce }), B = be;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : h.get(B) || tg(B), b = (B, Y, re, ce = {}) => {
      const ee = l ? (Number(Y) % 1 + 1) % 1 : Number(Y), be = ng(B, ee, re, ce);
      return h.set(be, { x: Number(Y), y: Number(re) }), be;
    }, g = (B, Y, re) => {
      const ce = m(B), ee = m(Y);
      return b(B, xn(ce.x, ee.x, re), xn(ce.y, ee.y, re), {
        t: xn(Number((B == null ? void 0 : B.t) || 0), Number((Y == null ? void 0 : Y.t) || 0), re),
        widthScale: xn(qt(B, "widthScale", 1), qt(Y, "widthScale", 1), re),
        pressureLike: xn(qt(B, "pressureLike", 1), qt(Y, "pressureLike", 1), re)
      });
    };
    if (r.length === 1) {
      const B = m(r[0]);
      return [b(r[0], B.x, B.y)];
    }
    const x = rg(o, s), M = (B, Y) => {
      const re = [0];
      for (let Z = 1; Z < B.length; Z += 1) {
        const fe = m(B[Z - 1]), Ae = m(B[Z]);
        re.push(re[Z - 1] + Math.hypot(Ae.x - fe.x, Ae.y - fe.y));
      }
      const ce = re[re.length - 1] || 0;
      if (ce <= 1e-8) {
        const Z = B[0], fe = m(Z);
        return [b(Z, fe.x, fe.y)];
      }
      const ee = [];
      let be = 0;
      for (let Z = 0; Z <= ce + 1e-9; Z += Y) {
        for (; be < re.length - 2 && re[be + 1] < Z; ) be += 1;
        const fe = re[be], Ae = re[be + 1], Pe = Math.max(1e-8, Ae - fe);
        ee.push(g(B[be], B[be + 1], G((Z - fe) / Pe, 0, 1)));
      }
      const Ee = B[B.length - 1], Le = m(Ee), We = ee[ee.length - 1], he = We ? m(We) : null;
      return (!he || Math.hypot(he.x - Le.x, he.y - Le.y) > Y * 0.35) && ee.push(b(Ee, Le.x, Le.y)), ee;
    }, P = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const Y = m(B[0]), re = [b(B[0], Y.x, Y.y)];
      for (let be = 0; be < B.length - 1; be += 1) {
        const Ee = B[be], Le = B[be + 1], We = m(Ee), he = m(Le), Z = b(
          Ee,
          We.x * 0.75 + he.x * 0.25,
          We.y * 0.75 + he.y * 0.25,
          {
            t: Number(Ee.t || 0) * 0.75 + Number(Le.t || 0) * 0.25,
            widthScale: qt(Ee, "widthScale", 1) * 0.75 + qt(Le, "widthScale", 1) * 0.25,
            pressureLike: qt(Ee, "pressureLike", 1) * 0.75 + qt(Le, "pressureLike", 1) * 0.25
          }
        ), fe = b(
          Ee,
          We.x * 0.25 + he.x * 0.75,
          We.y * 0.25 + he.y * 0.75,
          {
            t: Number(Ee.t || 0) * 0.25 + Number(Le.t || 0) * 0.75,
            widthScale: qt(Ee, "widthScale", 1) * 0.25 + qt(Le, "widthScale", 1) * 0.75,
            pressureLike: qt(Ee, "pressureLike", 1) * 0.25 + qt(Le, "pressureLike", 1) * 0.75
          }
        );
        re.push(Z, fe);
      }
      const ce = B[B.length - 1], ee = m(ce);
      return re.push(b(ce, ee.x, ee.y)), re;
    }, N = M(r, x);
    if (N.length < 3) return N;
    const T = s ? 2 : 1;
    let z = N.slice();
    for (let B = 0; B < T; B += 1) z = P(z);
    return M(z, Math.max(x * 0.75, 55e-5));
  }
  function qt(r, o, s = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function ig(r) {
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
  function na(r, o, s = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const h = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, l.width, l.height), h.imageSmoothingEnabled = !0), { canvas: l, ctx: h };
  }
  function ra() {
    const r = co();
    return `${String(f.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function _i() {
    const r = co();
    return `${String(f.paintStrokeRevision)}:${String(f.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function fl() {
    const r = qa(), o = _i();
    return r ? `${o}:${r}` : o;
  }
  function ag() {
    f.paintStrokeRevision += 1, f.paintCompositeRevision += 1;
  }
  function og() {
    f.paintCompositeRevision += 1;
  }
  function sg() {
    f._sortedItemsCache = null, f._strokeGeomCache.clear();
  }
  function Ou() {
    var r, o;
    f.paintEngineRevisionKey = null, (o = (r = f.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), f.paintEngineRevisionKey = ra();
  }
  function Ru() {
    v.painting_layer !== null && (v.painting_layer = null), Qa = "";
  }
  function Ut() {
    f.objectVisualRevision = Number(f.objectVisualRevision || 0) + 1, sg(), oe.backgroundDirty = !0, oe.dirty = !0;
  }
  function Tn({ rebuildPaintEngine: r = !1 } = {}) {
    Ru(), ag(), Ut(), r && Ou();
  }
  function xi() {
    Ru(), og(), Ut();
  }
  function lo() {
    var l;
    const r = co(), o = `${r.width}x${r.height}`;
    f.paintEngineDescriptorKey !== o && (f.paintEngine = fc(r), f.paintEngineDescriptorKey = o, f.paintEngineRevisionKey = "");
    const s = ra();
    f.paintEngineRevisionKey !== s && (f.paintEngineRevisionKey = s, (l = f.paintEngine) == null || l.rebuildCommitted(v));
  }
  function co() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function mn() {
    return co();
  }
  function lg(r, o, s, l, h = null) {
    const m = ig(r), b = qt(o, "widthScale", 1) * qt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * b) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Pt) * s * b) : Math.max(0.5, m.value / (2 * Math.PI) * s * b) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * b);
  }
  function cg(r, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, b = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * b : 1, l === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${x})`;
  }
  function ug(r, o, s) {
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function fg(r, o, s, l, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    r.save(), cg(r, s, h);
    const b = (g) => ug(r, g, m);
    if (o.length === 1) {
      b(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const x = o[g], M = o[g + 1];
      if (!x || !M) continue;
      const P = Number(x.x || 0), N = Number(x.y || 0), T = Number(M.x || 0), z = Number(M.y || 0), q = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(N) || !Number.isFinite(T) || !Number.isFinite(z) || !Number.isFinite(q) || !Number.isFinite(B)) continue;
      const Y = T - P, re = z - N, ce = Math.hypot(Y, re);
      if (!Number.isFinite(ce) || ce < 1e-6) {
        b(x);
        continue;
      }
      if (ce > Math.max(l.w, l.h) * 0.5) continue;
      const ee = Math.max(0.5, Math.min(q, B)), be = Math.max(0.35, Math.min(ee * 0.4, 2.25)), Ee = Math.max(1, Math.ceil(ce / be));
      for (let Le = 0; Le <= Ee; Le += 1) {
        const We = Le / Ee;
        b({
          x: xn(P, T, We),
          y: xn(N, z, We),
          radiusPx: xn(q, B, We)
        });
      }
    }
    b(o[o.length - 1]), r.restore();
  }
  function dg(r, o, s, l) {
    fg(r, o, s, l, { preview: !1 });
  }
  function hg(r, o, s, l, h) {
    var g, x, M, P;
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
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[b]) || 0) * l.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((M = o[N]) == null ? void 0 : M[m]) || 0) * l.w, Number(((P = o[N]) == null ? void 0 : P[b]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Fu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function mg(r, o) {
    const s = Fu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: lg(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Lu(r, o, s = null) {
    var g, x, M, P;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return hg(r.ctx, Fu(h), h, l), !0;
    const b = mg(h, l);
    return b.length ? (dg(r.ctx, b, h, l), !0) : !1;
  }
  function pg(r, o, s, l = 8) {
    const h = new Uint8Array(o * s), m = [], b = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let M = 0; M < o; M += 1) {
        const P = x * o + M;
        if (h[P] || r[P] <= l) continue;
        let N = 0, T = 0;
        b[T] = M, g[T] = x, T += 1, h[P] = 1;
        const z = [];
        let q = M, B = x, Y = M, re = x;
        for (; N < T; ) {
          const ce = b[N], ee = g[N];
          N += 1, z.push({ x: ce, y: ee }), ce < q && (q = ce), ee < B && (B = ee), ce > Y && (Y = ce), ee > re && (re = ee);
          const be = [
            [(ce - 1 + o) % o, ee],
            [(ce + 1) % o, ee],
            [ce, ee - 1],
            [ce, ee + 1]
          ];
          for (const [Ee, Le] of be) {
            if (Le < 0 || Le >= s) continue;
            const We = Le * o + Ee;
            h[We] || r[We] <= l || (h[We] = 1, b[T] = Ee, g[T] = Le, T += 1);
          }
        }
        m.push({ pixels: z, minX: q, minY: B, maxX: Y, maxY: re });
      }
    return m;
  }
  function gg(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, M) => x - M);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let l = -1, h = 0;
    for (let x = 0; x < s.length; x += 1) {
      const M = s[x], N = (x === s.length - 1 ? s[0] + o : s[x + 1]) - M - 1;
      N > l && (l = N, h = x);
    }
    const m = (s[(h + 1) % s.length] + o) % o;
    let b = 1 / 0, g = -1 / 0;
    for (const x of s) {
      const M = (x - m + o) % o;
      b = Math.min(b, M), g = Math.max(g, M);
    }
    return {
      startX: m,
      widthPx: Math.max(1, g - b + 1)
    };
  }
  function bg(r, o, s = {}) {
    var M;
    const l = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (M = r == null ? void 0 : r.getContext) == null ? void 0 : M.call(r, "2d");
    if (!m || l < 1 || h < 1) return [];
    const b = m.getImageData(0, 0, l, h), g = new Uint8Array(l * h);
    for (let P = 0; P < g.length; P += 1) g[P] = b.data[P * 4 + 3];
    return pg(g, l, h, 8).map((P, N) => {
      const T = gg(P, l);
      if (!T) return null;
      const z = Number(T.widthPx || 0), q = P.maxY - P.minY + 1, B = Number(T.startX || 0), Y = document.createElement("canvas");
      Y.width = z, Y.height = q;
      const re = Y.getContext("2d");
      if (!re) return null;
      const ce = re.createImageData(z, q);
      return P.pixels.forEach(({ x: ee, y: be }) => {
        const Ee = (be * l + ee) * 4, Le = (Number(ee || 0) - B + l) % l, We = ((be - P.minY) * z + Le) * 4;
        ce.data[We + 0] = b.data[Ee + 0], ce.data[We + 1] = b.data[Ee + 1], ce.data[We + 2] = b.data[Ee + 2], ce.data[We + 3] = b.data[Ee + 3];
      }), re.putImageData(ce, 0, 0), {
        id: Ti("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: z / l,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: Y.toDataURL("image/png"),
        transform: {
          du: B / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ia(r, o) {
    if (!r || !o) return null;
    const s = to(r), l = En(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = En(o, s.right) / l, m = En(o, s.up) / l, b = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (b / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function yg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (f.mode === "unwrap") {
      const s = _r();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => ea(vi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function $u(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (f.mode === "unwrap") {
      const l = _r();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, b = o == null ? m : Number(o || 0) + _n(m, o);
        return {
          x: l.x + b * l.w,
          y: l.y + Number(h.v || 0) * l.h
        };
      });
    }
    const s = r.map((l) => ea(vi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function vg(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], h = r[(s + 1) % r.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function _g(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      if (!b) return [];
      l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return vg(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function xg(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      b && l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function wg() {
    var z;
    const r = Fe(), o = ml(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, l = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: b, halfH: g } = Ld(
      { width: R.width, height: R.height },
      l
    ), x = { x: h - b, y: m - g, w: b * 2, h: g * 2 }, M = {
      ...r,
      hFOV_deg: 2 * Math.atan(b / l) * wn,
      vFOV_deg: 2 * Math.atan(g / l) * wn
    }, P = Sg(s);
    C.save(), C.fillStyle = "#0a0a0a", C.fillRect(0, 0, R.width, R.height);
    const N = f.interaction ? "draft" : String(((z = v.ui_settings) == null ? void 0 : z.preview_quality) || "balanced");
    return eg(C, x, M, { quality: N }) === !0 || (C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(x.x, x.y, x.w, x.h)), C.restore(), C.save(), C.fillStyle = "rgba(0, 0, 0, 0.58)", C.beginPath(), C.rect(0, 0, R.width, R.height), C.roundRect(s.x, s.y, s.w, s.h, P), C.fill("evenodd"), C.restore(), C.save(), C.strokeStyle = Cw, C.globalAlpha = 0.62, C.lineWidth = 2, C.beginPath(), C.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, P - 1)), C.stroke(), C.restore(), !0;
  }
  function Sg(r) {
    var h;
    const o = (h = R.getBoundingClientRect) == null ? void 0 : h.call(R), s = Number.parseFloat(getComputedStyle(W).getPropertyValue("--pano-float-radius")) || 10, l = Number((o == null ? void 0 : o.width) || 0) > 0 && Number((o == null ? void 0 : o.height) || 0) > 0 ? Math.min(R.width / o.width, R.height / o.height) : 1;
    return Math.min(s * l, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function Sr() {
    var o;
    const r = f.mode === "frame" ? Fe() : null;
    k.frameRollKnob.visible = !!r && !i, k.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((o = f.interaction) == null ? void 0 : o.kind) === "roll_frame", k.frameRollKnob.armed = !!r && f.altModifier === !0;
  }
  function Mg() {
    var x, M;
    if (((x = f.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = f.interaction.stroke, o = (M = r == null ? void 0 : r.geometry) == null ? void 0 : M.points;
    let s;
    if (f.mode === "frame") {
      const P = Fe(), N = Ot(P);
      s = _g(o, P, N);
    } else
      s = yg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), b = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let P = 1; P < s.length; P++) C.lineTo(Number(s[P].x || 0), Number(s[P].y || 0));
    C.closePath(), l ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${b},${g},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function Ng() {
    const r = f.frameRollOverlayVisual, o = G(Number(f.frameRollOverlayAlpha || 0), 0, 1);
    if (f.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = Ot(r.shot);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg || 0) * Pt, m = Math.hypot(s.w, s.h) * 0.55, b = Math.cos(h) * m, g = Math.sin(h) * m;
    C.save(), C.globalAlpha *= o, C.beginPath(), C.rect(s.x, s.y, s.w, s.h), C.clip(), C.translate(l.x, l.y), C.rotate(h);
    const x = Math.max(12, Math.min(s.w, s.h) / 6);
    C.beginPath();
    for (let M = -m; M <= m; M += x)
      C.moveTo(M, -m), C.lineTo(M, m);
    for (let M = -m; M <= m; M += x)
      C.moveTo(-m, M), C.lineTo(m, M);
    C.lineWidth = 1, C.strokeStyle = "rgba(255, 255, 255, 0.22)", C.stroke(), C.setTransform(1, 0, 0, 1, 0, 0), C.beginPath(), C.moveTo(l.x - b, l.y - g), C.lineTo(l.x + b, l.y + g), C.lineWidth = 1.5, C.setLineDash([8, 6]), C.strokeStyle = "rgba(255, 255, 255, 0.92)", C.shadowColor = "rgba(0, 0, 0, 0.8)", C.shadowBlur = 3, C.stroke(), C.setLineDash([]), C.restore();
  }
  function kg() {
    return t !== "cutout" || !Fe() ? 0 : Dw;
  }
  function Pg() {
    const r = G(Number(f.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || f.mode !== "pano") return;
    const o = Fe(), s = o ? $t(o) : null, l = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    s != null && s.visible && l && (f.cutoutPanoDimCorners = l), o && (s != null && s.visible) && l && (f.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: su(o),
      locked: er(o)
    });
    const h = Number(f.cutoutPanoDimTarget || 0) <= 1e-6, m = s != null && s.visible ? l : h ? f.cutoutPanoDimCorners || [] : [];
    if (C.save(), C.fillStyle = `rgba(0, 0, 0, ${r})`, C.beginPath(), C.rect(0, 0, R.width, R.height), m.length >= 4) {
      C.moveTo(m[0].x, m[0].y);
      for (let b = 1; b < 4; b += 1) C.lineTo(m[b].x, m[b].y);
      C.closePath();
    }
    C.fill("evenodd"), C.restore();
  }
  function Ag() {
    f.mode === "frame" ? (oe.frameSafeRect = Yg(), wg()) : f.mode === "unwrap" ? $p(!1) : zp(!1), Pg(), t === "cutout" && Qp(), Yp(), Sr(), Mg(), Ng(), k.fovValue = `${Math.round(f.viewFov)}°`, Math.abs(Number(f.outputPreviewAnim || 0) - Number(f.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), oe.hasPresentedFrame || (oe.hasPresentedFrame = !0, J.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame && f.mode !== "frame");
    const r = Tp();
    k.stageStatus = r.status, k.stageStatusDetail = r.detail, r.status === Kn ? (ue == null || ue.removeAttribute("data-stage-ready"), ue == null || ue.setAttribute("data-stage-loading-kind", r.detail)) : (ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind"));
  }
  function Cg(r = f.interaction) {
    if (t !== "stickers" || f.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Tg() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Xm();
  }
  function de(r = {}) {
    var g, x, M, P, N, T, z, q, B, Y;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), h = String(((g = f.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Cg() || !!((x = f.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (oe.backgroundDirty = !0), o && ru() && (f.livePaintInteractionRevision += 1, oe.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (el(), vr()), Tg(), s && ((P = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || P.call(M), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((z = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || z.call(T, !0, !0), (Y = (B = (q = bn) == null ? void 0 : q.canvas) == null ? void 0 : B.setDirty) == null || Y.call(B, !0, !0)), oe.dirty = !0;
  }
  function zu() {
    const r = R.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return R.width !== o || R.height !== s || J.width !== o || J.height !== s ? (R.width = o, R.height = s, J.width = o, J.height = s, oe.backgroundDirty = !0, oe.dirty = !0, t === "cutout" && (oe.pendingStableLayoutFrames = Math.max(Number(oe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Ig(r = performance.now()) {
    var m, b;
    oe.lastTickTs = r;
    const o = f.mode === "frame" && ((m = f.interaction) == null ? void 0 : m.kind) === "roll_frame" ? f.interaction : null;
    o != null && o.shot && (f.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(f.frameRollOverlayTarget || 0)) > 1e-6 && (f.frameRollOverlayFrom = Number(f.frameRollOverlayAlpha || 0), f.frameRollOverlayTarget = s, f.frameRollOverlayStartTs = r), Math.abs(Number(f.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = G(
        (r - Number(f.frameRollOverlayStartTs || r)) / Ew,
        0,
        1
      );
      f.frameRollOverlayAlpha = xn(
        Number(f.frameRollOverlayFrom || 0),
        s,
        Ro(g)
      ), g >= 1 && (f.frameRollOverlayAlpha = s, s === 0 && (f.frameRollOverlayVisual = null)), oe.dirty = !0;
    }
    const l = kg();
    if (Math.abs(l - Number(f.cutoutPanoDimTarget || 0)) > 1e-6 && (f.cutoutPanoDimFrom = Number(f.cutoutPanoDimAlpha || 0), f.cutoutPanoDimTarget = l, f.cutoutPanoDimStartTs = r), Math.abs(Number(f.cutoutPanoDimAlpha || 0) - l) > 1e-6) {
      const g = G(
        (r - Number(f.cutoutPanoDimStartTs || r)) / Vd,
        0,
        1
      );
      f.cutoutPanoDimAlpha = xn(
        Number(f.cutoutPanoDimFrom || 0),
        l,
        Ro(g)
      ), g >= 1 && (f.cutoutPanoDimAlpha = l), g >= 1 && l === 0 && (f.cutoutPanoDimCorners = null), oe.dirty = !0;
    }
    const h = t === "cutout" && Fe() ? 1 : 0;
    if (Math.abs(h - Number(f.cutoutPanoFrameTarget || 0)) > 1e-6 && (f.cutoutPanoFrameFrom = Number(f.cutoutPanoFrameAlpha || 0), f.cutoutPanoFrameTarget = h, f.cutoutPanoFrameStartTs = r), Math.abs(Number(f.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = G(
        (r - Number(f.cutoutPanoFrameStartTs || r)) / Vd,
        0,
        1
      );
      f.cutoutPanoFrameAlpha = xn(
        Number(f.cutoutPanoFrameFrom || 0),
        h,
        Ro(g)
      ), g >= 1 && (f.cutoutPanoFrameAlpha = h, h === 0 && (f.cutoutPanoFrameVisual = null)), oe.dirty = !0;
    }
    if (f.outputPreviewAnim !== f.outputPreviewAnimTo) {
      const g = Math.max(1, Number(f.outputPreviewAnimDurationMs)), x = G((r - Number(f.outputPreviewAnimStartTs || 0)) / g, 0, 1), P = f.outputPreviewAnimTo > f.outputPreviewAnimFrom ? Lw(x) : Vw(x);
      f.outputPreviewAnim = xn(f.outputPreviewAnimFrom, f.outputPreviewAnimTo, P), oe.dirty = !0, x >= 1 && (f.outputPreviewAnim = f.outputPreviewAnimTo);
    }
    if ((b = f.viewTween) != null && b.active) {
      const g = f.viewTween, x = G((r - g.startTs) / g.durationMs, 0, 1), M = Ro(x);
      f.viewYaw = zt(g.startYaw + g.deltaYaw * M), f.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * M, f.viewFov = g.startFov + (g.targetFov - g.startFov) * M, oe.backgroundDirty = !0, oe.dirty = !0, x >= 1 && (f.viewTween = null);
    }
    if (f.viewInertia.vx = Number(Bt.state.inertia.vx || 0), f.viewInertia.vy = Number(Bt.state.inertia.vy || 0), f.viewInertia.active = !!Bt.state.inertia.active, Bt.stepInertia(r) && (f.viewInertia.vx = Number(Bt.state.inertia.vx || 0), f.viewInertia.vy = Number(Bt.state.inertia.vy || 0), f.viewInertia.active = !!Bt.state.inertia.active, oe.backgroundDirty = !0, oe.dirty = !0), (oe.dirty || r - oe.lastSizeCheckTs >= 220) && (zu(), oe.lastSizeCheckTs = r), oe.pendingStableLayoutFrames > 0 && (oe.pendingStableLayoutFrames -= 1, oe.dirty = !0), oe.dirty) {
      if (oe.pendingStableLayoutFrames > 0)
        return;
      oe.dirty = !1, Ag();
    }
  }
  function ju(r = performance.now()) {
    if (oe.running)
      try {
        Ig(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        oe.tickErrorSignature !== s && (oe.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), k.stageStatus = Yn, k.stageStatusDetail = "frame", ue == null || ue.setAttribute("data-stage-ready", ""), ue == null || ue.removeAttribute("data-stage-loading-kind");
      } finally {
        oe.running && (oe.rafId = requestAnimationFrame(ju));
      }
  }
  function Dg() {
    oe.running = !1, oe.rafId && cancelAnimationFrame(oe.rafId), oe.rafId = 0;
  }
  function Qe() {
    i || (f.historyController.commitActionGroup(JSON.stringify(Gd(v))), yl());
  }
  function dl(r) {
    if (i) return;
    const o = r < 0 ? f.historyController.undo() : f.historyController.redo();
    if (yl(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((l) => delete v[l]), Object.assign(v, s), f.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, f.selectedIds = f.selectedId ? [f.selectedId] : [], Tn(), ln(), Ve(), pn(), de({ cause: "cutout_frame" });
  }
  function Vu() {
    var s, l;
    const r = Array.isArray((s = f.historyController) == null ? void 0 : s.entries) ? f.historyController.entries : [], o = Number((l = f.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function ln() {
    Hm();
    const r = o_({
      editor: f,
      swatches: es,
      paintColorPopOpen: Je ? !Je.hidden : !1,
      colorToCss: Vn,
      colorsApproximatelyEqual: ts,
      rgb01ToHsv: Zl,
      hsv01ToRgb: Jl,
      getBrushPresetIdForTool: Mr,
      isActiveLassoTool: ap
    });
    if (Object.assign(k.paintDock, r), fp(), !r.visible) {
      Je && (Je.hidden = !0);
      return;
    }
    pe && (clearTimeout(pe), pe = 0), dn && (!r.colorEnabled && Je && !Je.hidden && (pe = window.setTimeout(() => {
      Je.hidden = !0, k.paintDock.colorPopOpen = !1, pe = 0;
    }, 170)), Je && (Je.style.setProperty("--picker-hue-color", r.pickerHueColor), Je.style.setProperty("--picker-sat", r.pickerSat), Je.style.setProperty("--picker-val", r.pickerVal), Je.style.setProperty("--picker-hue", r.pickerHue)), kn && (kn.style.left = r.pickerSvLeft, kn.style.top = r.pickerSvTop), H && (H.style.left = r.pickerHueLeft));
  }
  function aa() {
    const r = t === "cutout" && f.mode === "frame" ? Fe() : yt();
    r && (f.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Ci(r)
    }, Ve());
  }
  function Ve() {
    var Le, We, he, Z;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = a_(v.ui_settings);
    if (c) {
      k.sidePanel = s_({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: Gt
      });
      return;
    }
    const o = yt(), s = t === "cutout" && f.mode === "frame" ? Fe() : null, l = s || o, h = s ? [s] : Cn(), m = s ? "shot" : Za();
    h.length > 1 && (f.panelLastValues = f.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), l && m !== "stroke" && (f.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Ci(l)
    });
    const b = f.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : l, x = g || b, M = !!g;
    f.panelWasEnabled = M, el();
    let P = null;
    if (s) {
      const fe = qs({ item: s, kind: "shot", label: "Frame" });
      P = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: fe.label,
        currentIcon: fe.icon || null,
        items: [{
          id: String(s.id || ""),
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
      t === "stickers" ? Qn().forEach((Ne, je) => {
        var Tt, at;
        if (!Ne) return;
        const Xe = Ht(Ne) ? String(Ne.id || Kr) : String(((at = (Tt = v.assets) == null ? void 0 : Tt[Ne.asset_id]) == null ? void 0 : at.name) || Ne.asset_id || Ne.id), He = `${je + 1}. ${Xe}${Ht(Ne) && hi(Ne) ? " (hidden)" : ""}`, et = qs({ item: Ne, label: He, kind: "image" });
        fe.push({ id: Ne.id, label: et.label, icon: et.icon, item: Ne, kind: "image" });
      }) : lu().forEach((Ne) => {
        if (!(Ne != null && Ne.item)) return;
        const je = qs(Ne);
        fe.push({ id: Ne.item.id, label: je.label, icon: je.icon, item: Ne.item, kind: Ne.kind });
      });
      const Ae = (g == null ? void 0 : g.id) || "", Pe = fe.find((Ne) => Ne.id === Ae) || fe[0];
      P = {
        label: "Selection",
        open: !1,
        disabled: fe.length <= 1,
        currentLabel: Pe.label,
        currentIcon: Pe.icon || null,
        items: fe.map((Ne) => ({
          id: Ne.id,
          label: Ne.label,
          icon: Ne.icon || null,
          active: Ne.id === Ae
        }))
      };
    }
    const N = [], T = (fe, Ae, Pe, Ne, je) => {
      const Xe = G(Number(x[fe] || 0), Pe, Ne);
      N.push({
        key: fe,
        label: Ae,
        min: Pe,
        max: Ne,
        step: je,
        value: Xe,
        displayValue: ma(Xe),
        fillPct: G((Xe - Pe) / Math.max(1e-6, Ne - Pe) * 100, 0, 100),
        enabled: M && !i
      });
    }, z = [];
    h.length > 1 ? (z.push(`Selected objects: ${h.length}`), z.push("Multi-selection supports z-order and delete.")) : (T("yaw_deg", "Yaw", -180, 180, 0.1), T("pitch_deg", "Pitch", -90, 90, 0.1), T("hFOV_deg", "H FOV", 1, 179, 0.1), T("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? T("rot_deg", "Rotation", -180, 180, 0.1) : T("roll_deg", "Roll", -180, 180, 0.1));
    const q = Array.isArray((We = (Le = v == null ? void 0 : v.painting) == null ? void 0 : Le.paint) == null ? void 0 : We.strokes) ? v.painting.paint.strokes.length : 0, B = Array.isArray((Z = (he = v == null ? void 0 : v.painting) == null ? void 0 : he.mask) == null ? void 0 : Z.strokes) ? v.painting.mask.strokes.length : 0, Y = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((fe) => String((fe == null ? void 0 : fe.name) || "")) : [], re = jm(
      e,
      Y.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ce = !!String((re == null ? void 0 : re.src) || "").trim() || Xs("pano_input_images").length > 0, ee = Array.isArray(Qn()) && Qn().length > 0 || q > 0, be = B > 0, Ee = [
      { key: "mask", label: "Mask", icon: Oe.circle_dashed_tool, visible: !!f.showMask, enabled: be },
      { key: "objects", label: "Paint / Images", icon: Oe.image, visible: !!f.showObjects, enabled: ee },
      { key: "panorama", label: "Panorama", icon: Oe.globe, visible: !!f.showPanorama, enabled: ce }
    ].map((fe) => ({
      ...fe,
      ariaLabel: `Toggle ${fe.label.toLowerCase()}`,
      tip: fe.visible ? "Hide" : "Show"
    }));
    k.sidePanel = l_({
      coverage: v.coverage,
      readOnly: i,
      selectionPicker: P,
      enabled: M,
      selectedKind: m,
      selectedItems: h,
      params: N,
      notes: z,
      visibilityRows: Ee,
      uiSettings: r,
      normalizeCoverageValue: Gt
    });
  }
  function uo(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Hu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !uo(r)) return;
    const o = Uo("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((b, g) => {
        const x = new Image();
        x.onload = () => b(x), x.onerror = () => g(new Error("image load failed")), x.src = s;
      });
      ge.set(o, l);
      const h = Uo("st");
      v.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: f.viewYaw,
        pitch_deg: f.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: $r(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: cu()
      }), di(v.stickers[v.stickers.length - 1]), hl(), Qe(), Ve(), Ke(), de();
      const m = (async () => {
        const b = await rl(r, String(r.name || o));
        (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => String((M == null ? void 0 : M.asset_id) || "") === o).length && (v.assets[o] = b, yi(), it(), Ve(), Ke(), de());
      })();
      Oo.set(o, m);
      try {
        await m;
      } finally {
        Oo.delete(o);
      }
    } catch {
      delete v.assets[o], ge.delete(o);
      const l = Array.isArray(v.stickers) ? v.stickers : [], h = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (v.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var b;
        return String((m == null ? void 0 : m.id) || "") === String(((b = f.selection) == null ? void 0 : b.id) || "");
      }) && di(null), Ve(), Ke(), de());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Uu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const s = (l = o.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Eg() {
    i || t !== "stickers" && t !== "cutout" || Uu((r) => {
      Hu(r);
    });
  }
  async function Og(r) {
    var M;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = yt();
    if (!o || !bt(o) || Ht(o) || !uo(r)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), h = l ? Xt(((M = v.assets) == null ? void 0 : M[l]) || null) : null, m = Number(o.vFOV_deg || 0), b = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, g = Uo("asset"), x = URL.createObjectURL(r);
    try {
      const P = await new Promise((T, z) => {
        const q = new Image();
        q.onload = () => T(q), q.onerror = () => z(new Error("image load failed")), q.src = x;
      });
      ge.set(g, P), o.asset_id = g, o.vFOV_deg = $r(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ut(), Qe(), Ve(), Ke(), de();
      const N = (async () => {
        const T = await rl(r, String(r.name || g));
        (Array.isArray(v.stickers) ? v.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === g) && (v.assets[g] = T, yi(), it(), Ve(), Ke(), de());
      })();
      Oo.set(g, N);
      try {
        await N;
      } finally {
        Oo.delete(g);
      }
    } catch {
      delete v.assets[g], ge.delete(g);
      const P = (Array.isArray(v.stickers) ? v.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === s) || null;
      P && String(P.asset_id || "") === g && (l && h && (v.assets[l] = h), P.asset_id = l, P.vFOV_deg = m, P.crop = b ? { ...b } : null), Ut(), Ve(), Ke(), de();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Rg() {
    if (i) return;
    const r = yt();
    !r || !bt(r) || Ht(r) || Uu((o) => {
      Og(o);
    });
  }
  async function Fg() {
    if (i || t !== "stickers") return;
    const r = v.assets && typeof v.assets == "object" ? v.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const b = await fetch(m).then((N) => N.blob()), g = String(b.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${l}.${g}`), M = new File([b], x, { type: b.type || "image/png" }), P = await rl(M, x);
        v.assets[l] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (it(), de());
  }
  function Lg() {
    if (i || t !== "cutout") return;
    const r = Fe();
    if (r) {
      di(r), f.mode = "pano", Vs(
        zt(Number(r.yaw_deg || 0)),
        G(Number(r.pitch_deg || 0), -89.9, 89.9),
        f.viewFov
      ), Ve(), Ke(), de({ cause: "cutout_frame" });
      return;
    }
    const o = zr(), s = xr(o), l = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (R == null ? void 0 : R.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (R == null ? void 0 : R.height) || 1
    )), m = Math.max(0.1, l / h), b = G(Number(f.viewFov || 90), 1, 179), g = G(Math.min(42, b * 0.42), 8, 96), x = G(wn * (2 * Math.atan(Math.tan(g * Pt * 0.5) / Math.max(0.1, m))), 6, 72), M = Dm({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: zt(Number(f.viewYaw || 0)),
      pitch_deg: G(Number(f.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: x,
      locked: !1
    });
    v.shots = [M], di(M), hl(), f.mode = "pano", Qe(), it(), Ve(), Ke(), de({ cause: "cutout_frame" });
  }
  function $g() {
    i || t === "cutout" && (v.shots = [], f.selectedId = null, f.selectedIds = [], f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, v.active.selected_shot_id = null, Qe(), it(), Ve(), de());
  }
  function zg() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      Ht(s) && (s.visible = !1, o.push(s));
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
  async function jg() {
    var s, l;
    if (i || !await Bu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = Pa(null), Tn();
    const o = zg();
    t === "stickers" ? (v.stickers = o, v.assets = {}, f.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, yi()) : (v.stickers = o, v.assets = {}, v.shots = [], f.selectedId = null, f.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, yi()), Qe(), it(), Ve(), Ke(), de();
  }
  async function Vg(r) {
    var m, b, g, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = wi(o);
    if (!(!l.length && !(((m = f.interaction) == null ? void 0 : m.kind) === "draw" && ((b = f.interaction) == null ? void 0 : b.layerKind) === o) || !await Bu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = f.interaction) == null ? void 0 : g.kind) === "draw" && ((x = f.interaction) == null ? void 0 : x.layerKind) === o) {
        const M = mn();
        M && f.paintEngine.cancelActiveStroke(M), f.interaction = null;
      }
      l.length = 0, v.painting.raster_objects = sn().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== o), o === "paint" && (Wt().length = 0), Tn(), Qe(), it(), Ve(), Ke(), ln(), de();
    }
  }
  function Hg() {
    if (i) return;
    const r = yt();
    if (!r || !bt(r) || Ht(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Uo("st"), o.yaw_deg = zt((o.yaw_deg || 0) + 8), o.z_index = cu(), v.stickers.push(o), v.active.selected_sticker_id = o.id, f.selectedId = o.id, f.selectedIds = [o.id], Ut(), Qe(), it(), Ke(), Ve(), de();
  }
  function Gu() {
    var s, l, h, m, b, g;
    if (i) return;
    const r = Cn(), o = yt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((N) => Et(N)).map((N) => String(N.actionGroupId || N.id || ""))), M = new Set(r.filter((N) => Yt(N)).map((N) => Lt(N.rasterObjectId || N.id || ""))), P = new Set(r.filter(bt).map((N) => String(N.id || "")));
        x.size > 0 && (v.painting.paint.strokes = (Array.isArray((l = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? v.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), v.painting.groups = Wt().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), Tn()), M.size > 0 && (v.painting.raster_objects = sn().filter((N) => !M.has(String((N == null ? void 0 : N.id) || ""))), xi()), P.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => P.has(String((N == null ? void 0 : N.id) || "")) ? Ht(N) ? (hi(N) || (N.visible = !1), !0) : !1 : !0), yi(), Ut()), f.selectedId = null, f.selectedIds = [], Qe(), it(), Ve(), Ke(), de();
        return;
      }
      if (Et(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() !== x), v.painting.groups = Wt().filter((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() !== x), Tn(), f.selectedId = null, f.selectedIds = [], Qe(), it(), Ve(), Ke(), de();
        return;
      }
      if (Yt(o)) {
        const x = Lt(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = sn().filter((M) => String((M == null ? void 0 : M.id) || "").trim() !== x), xi(), f.selectedId = null, f.selectedIds = [], Qe(), it(), Ve(), Ke(), de();
        return;
      }
      if (t === "stickers" || bt(o)) {
        if (Ht(o)) {
          if (hi(o)) return;
          o.visible = !1, Ut(), Qe(), it(), Ve(), Ke(), de();
          return;
        }
        v.stickers = v.stickers.filter((x) => x.id !== o.id), yi(), Ut(), f.selectedId = ((b = v.stickers[0]) == null ? void 0 : b.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = ((g = v.stickers[0]) == null ? void 0 : g.id) || null, Qe(), it(), Ve(), Ke(), de();
        return;
      }
      $g();
    }
  }
  function Ku(r, o) {
    const s = oe.frameSafeRect;
    if (!r || !s || f.mode !== "frame") return !1;
    const l = Yl * Bl(s, r), h = n_(t_(s, o), l);
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
        const [P, N] = g.split(":").map((T) => Number(T));
        if (Number.isFinite(P) && Number.isFinite(N)) return P >= N;
      }
      const x = Number(r.hFOV_deg || 64), M = Number(r.vFOV_deg || 40);
      return Math.abs(x - M) > 1e-6 ? x >= M : ns(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const b = h / m;
    if (!Ku(r, b)) {
      const g = G(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = $d(g, b);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function Yu(r) {
    if (!r) return;
    const o = String(r.aspect_id || "").trim(), s = $s(r), l = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, l);
    if (!Ku(r, h)) {
      const m = G(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = $d(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, b] = o.split(":");
      r.aspect_id = `${b}:${m}`;
    } else
      r.aspect_id = qr(r);
  }
  function qu() {
    ci().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Ug() {
    if (i) return;
    const r = Cn();
    if (!yt() || r.length === 0) return;
    qu();
    const s = ci(), l = new Set(r.map((g) => bt(g) ? `sticker:${String(g.id || "")}` : Yt(g) ? `rasterObject:${Lt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Ut(), Qe(), it(), Ke(), de();
  }
  function Bg() {
    if (i) return;
    const r = Cn();
    if (!yt() || r.length === 0) return;
    qu();
    const s = ci(), l = new Set(r.map((g) => bt(g) ? `sticker:${String(g.id || "")}` : Yt(g) ? `rasterObject:${Lt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Ut(), Qe(), it(), Ke(), de();
  }
  function Gg() {
    i || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", d && (v.output_preset = A(Number(v.output_preset || 2048))), p && (v.coverage = Gt(p.value)), y && (v.bg_color = String(y.value || v.bg_color || "#00ff00")), pn(), e.setDirtyCanvas(!0, !0));
  }
  function pn() {
    var o;
    if (i) return;
    v.coverage = Gt(v.coverage);
    const r = JSON.stringify(v);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function fo() {
    v.ui_settings = qw(v.ui_settings), i || pn();
  }
  function it() {
    var r;
    i || (pn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Kg() {
    i || Cp() && Su().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Wg(r = {}) {
    var l, h, m, b, g, x, M, P, N, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || h.call(l), (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((M = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), (T = (N = (P = bn) == null ? void 0 : P.canvas) == null ? void 0 : N.setDirty) == null || T.call(N, !0, !0));
  }
  function hl() {
    f.primaryTool !== "cursor" && (f.primaryTool = "cursor", ln(), Ve());
  }
  function jr(r) {
    const o = R.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * R.width,
      y: (r.clientY - o.top) / o.height * R.height
    };
  }
  function ho(r) {
    const o = R.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function Xu() {
    return f.mode === "pano" || f.mode === "unwrap";
  }
  function Fe() {
    if (t !== "cutout") return null;
    const r = Array.isArray(v.shots) ? v.shots : [];
    if (!r.length) return null;
    const o = String(v.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Yg() {
    var z, q, B, Y, re;
    if (!R) return null;
    const r = (z = R.getBoundingClientRect) == null ? void 0 : z.call(R), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? R.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? R.height / r.height : 1;
    let l = 24, h = 24;
    const m = Math.max(l + 1, R.width - 24);
    let b = Math.max(h + 1, R.height - 24);
    const g = (q = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : q.call($e), x = (B = ze == null ? void 0 : ze.getBoundingClientRect) == null ? void 0 : B.call(ze);
    let M = 24;
    g && r && g.width > 0 && g.height > 0 && (M = Math.max(M, (g.right - r.left) * o + jd)), x && r && x.width > 0 && x.height > 0 && ((Y = k.frameRail) == null ? void 0 : Y.visible) === !0 && (M = Math.max(M, (r.right - x.left) * o + jd)), l = Math.max(l, M);
    const P = Math.min(m, R.width - M);
    let N = 24;
    const T = (re = _e == null ? void 0 : _e.getBoundingClientRect) == null ? void 0 : re.call(_e);
    if (T && r && T.width > 0 && T.height > 0 && (N = Math.max(N, (T.bottom - r.top) * s + ql)), [St, Dt].forEach((ce) => {
      var Ee;
      if (!ce || !r) return;
      const ee = getComputedStyle(ce);
      if (ee.display === "none" || ee.visibility === "hidden" || Number(ee.opacity) <= 0) return;
      const be = (Ee = ce.getBoundingClientRect) == null ? void 0 : Ee.call(ce);
      !be || be.width <= 0 || be.height <= 0 || (N = Math.max(N, (r.bottom - be.top) * s + ql));
    }), X && r) {
      const ce = getComputedStyle(X);
      ce.display !== "none" && ce.visibility !== "hidden" && Number(ce.opacity) > 0 && (N = Math.max(N, (Iw + ql) * s));
    }
    return h = Math.max(h, N), b = Math.max(h + 1, Math.min(b, R.height - N)), {
      x: l,
      y: h,
      w: Math.max(1, P - l),
      h: Math.max(1, b - h)
    };
  }
  function ml(r = Fe()) {
    if (!r || !R) return null;
    const o = oe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, R.width - 48),
      h: Math.max(1, R.height - 48)
    };
    return r_(o, r, Yl * Bl(o, r));
  }
  function Ot(r = Fe()) {
    const o = ml(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function pl() {
    return t === "cutout" && !!Fe();
  }
  function In(r, o = performance.now()) {
    if (f.mode === "unwrap") {
      const m = _r(), b = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (b % 1 + 1) % 1,
        v: G(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = nl(r.x, r.y), { lon: l, lat: h } = al(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Dn(r, o, s = performance.now()) {
    const l = Ot(o);
    if (!l) return null;
    const h = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = cl(o, h);
    if (!m) return null;
    const { lon: b, lat: g } = al(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (b / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function qg(r, o) {
    const s = Fe();
    if (!s) return !1;
    const l = Number(o) < 1, h = i_(s, 1 / Number(o));
    if (!h) return !1;
    if (l) {
      const m = Yl * Bl(
        oe.frameSafeRect || { w: R.width, h: R.height },
        h
      ), b = Ld({ width: R.width, height: R.height }, m);
      if (b.halfW < R.width * 0.5 - 1e-6 || b.halfH < R.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, f.frameWheelChanged = !0, f.frameWheelCommitTimer && window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = window.setTimeout(() => {
      f.frameWheelCommitTimer = 0, f.frameWheelChanged && (f.frameWheelChanged = !1, Qe(), it(), Ve());
    }, 180), Ve(), !0;
  }
  function Xg() {
    return f.frameWheelCommitTimer && (window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = 0), f.frameWheelChanged ? (f.frameWheelChanged = !1, Qe(), it(), Ve(), !0) : !1;
  }
  function oa() {
    const r = f.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Vr(), f.interaction = null, bi(), vr(), Ve(), ut(f.pointerPos), de({ localOnly: !0 }), !0;
  }
  function Jg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function Mr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? ar : cn[o] ? o : f.activeBrushPresetId || ar;
  }
  function Ju() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (Xu() || pl());
  }
  function Zu() {
    var r;
    return Ju() && ((r = f.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function mo(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = f.pointerPos || { x: 0, y: 0, inside: !1 }, b = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - l) > 0.01;
    return f.pointerPos = { x: s, y: l, inside: h }, b;
  }
  function Zg() {
    var P, N;
    if (!Zu()) return null;
    const r = f.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? f.maskTool : f.paintTool, s = Mr(o), l = cn[s] || cn[ar], h = Number(f.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : gn(f.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : G(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), M = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : G(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: b,
      fillStyle: Vn(g, x),
      strokeStyle: Vn(g, M),
      x: Number(((P = f.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((N = f.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: b,
      hotspotY: b
    };
  }
  function Qg() {
    var T, z, q;
    const r = Zg();
    if (!U) return;
    if (!r) {
      U.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, l = "999px", h = 0, m = r.fillStyle, b = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = ws, s = ws, l = "0", b = "0", g = "none", P = Ow, N = Rw, m = Uw(r.fillStyle, M, x);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((q = (z = r.preset) == null ? void 0 : z.angle) == null ? void 0 : q.value) || 0) * wn;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(o)}px`, U.style.height = `${Math.round(s)}px`, U.style.borderRadius = l, U.style.border = b, U.style.boxShadow = g, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(r.x - P)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function e0() {
    var ce;
    if (!ve || !xe) return;
    const r = f.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? f.maskTool : f.paintTool;
    if (o === "lasso_fill") return;
    const s = Mr(o), l = cn[s] || cn[ar], h = Number(f.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(6, m * 0.5), g = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : gn(f.paintColor), M = r === "mask" ? Vn(x, 0.22) : g ? "rgba(255,255,255,0.14)" : Vn(x, G(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = r === "mask" ? Vn(x, 0.96) : g ? "rgba(255,255,255,0.72)" : Vn(x, G(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = b * 2, T = b * 2, z = "999px", q = 0, B = M;
    const Y = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ee = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, b * 2 * ee), T = Math.max(10, b * 2), z = `${Math.min(8, T * 0.42)}px`, q = Number(((ce = l == null ? void 0 : l.angle) == null ? void 0 : ce.value) || 0) * wn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, b * 1.8), T = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(N)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = z, xe.style.background = B, xe.style.border = `1px solid ${Y}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${q}deg)`, Q && (clearTimeout(Q), Q = 0), ve.classList.remove("fade-out"), ve.classList.add("show");
  }
  function po() {
    !ve || !ve.classList.contains("show") || (ve.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      ve.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function Qu(r, o, s, l) {
    const h = Mr(o), m = cn[h] || cn[ar], b = f.brushSizes[h] ?? 10, g = Math.max(1, b) * Math.max(0.1, m.sizeScale ?? 1), x = Jg(l, g), M = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), P = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((N) => ({ ...N })),
        points: M.map((N) => ({ ...N }))
      }
    };
    return Id(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function ef(r, o, s, l) {
    const h = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = Mr(o), b = cn[m] || cn[ar], g = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((x) => ({ ...x }))
      }
    };
    return Id(g, b), Number(b.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function wi(r) {
    const o = v.painting || (v.painting = Pa(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function t0(r, o, s = performance.now()) {
    let l;
    if (f.mode === "frame") {
      const M = Fe();
      if (!M || (l = Dn(o, M, s), !l)) return !1;
    } else
      l = In(o, s);
    if (!l) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, b = h[h.length - 1];
    if (b) {
      const M = Math.abs(Number(l.u ?? l.x ?? 0) - Number(b.u ?? b.x ?? 0)), P = Math.abs(Number(l.v ?? l.y ?? 0) - Number(b.v ?? b.y ?? 0));
      if (M < 15e-4 && P < 15e-4) return !1;
    }
    const g = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), m.push({ ...g });
    const x = mn();
    if (x) {
      const M = f.paintEngine.ensureTarget(x);
      f.paintEngine.appendStrokePoint(M, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function n0(r, o, s = performance.now()) {
    var b, g;
    let l;
    if (f.mode === "frame") {
      const x = Fe();
      if (!x) return !1;
      l = Dn(o, x, s);
    } else
      l = In(o, s);
    const h = (g = (b = r == null ? void 0 : r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), M = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && M < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function r0(r) {
    var ee, be, Ee, Le, We;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    lo();
    const s = mn(), l = na(s.width, s.height);
    if (!Lu(l, o, { w: s.width, h: s.height })) return !1;
    const h = ((be = (ee = l.ctx) == null ? void 0 : ee.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!h) return !1;
    const m = new Map(Wt().map((he) => [String((he == null ? void 0 : he.actionGroupId) || (he == null ? void 0 : he.id) || "").trim(), he ? { ...he } : null])), b = [], g = [], x = [...sn().filter((he) => String((he == null ? void 0 : he.layerKind) || "paint") !== "paint")];
    let M = !1, P = ci().reduce((he, Z) => Math.max(he, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    function N(he, Z, fe, Ae = 8) {
      let Pe = Z, Ne = fe, je = -1, Xe = -1;
      for (let He = 0; He < fe; He += 1)
        for (let et = 0; et < Z; et += 1)
          he[(He * Z + et) * 4 + 3] <= Ae || (et < Pe && (Pe = et), He < Ne && (Ne = He), et > je && (je = et), He > Xe && (Xe = He));
      return je < Pe || Xe < Ne ? null : { minX: Pe, minY: Ne, maxX: je, maxY: Xe };
    }
    const T = N(h, s.width, s.height, 8);
    if (!T) return !1;
    function z(he, Z) {
      return !he || !Z ? !1 : !(he.maxX < Z.minX || Z.maxX < he.minX || he.maxY < Z.minY || Z.maxY < he.minY);
    }
    function q(he, Z) {
      const fe = yr((he == null ? void 0 : he.actionGroupId) || (he == null ? void 0 : he.id) || "", "paint", Z);
      if (!fe) return null;
      const Ae = fe.centerUv.u - fe.halfW, Pe = fe.centerUv.u + fe.halfW, Ne = fe.centerUv.v - fe.halfH, je = fe.centerUv.v + fe.halfH, Xe = s.width, He = s.height;
      return {
        minX: Math.floor((Ae % 1 + 1) % 1 * Xe),
        maxX: Math.ceil((Pe % 1 + 1) % 1 * Xe),
        minY: Math.floor(G(Ne, 0, 1) * He),
        maxY: Math.ceil(G(je, 0, 1) * He),
        wraps: Pe - Ae >= 1 || Ae < 0 || Pe > 1
      };
    }
    function B(he) {
      const Z = (he == null ? void 0 : he.bbox) || null;
      if (!Z) return null;
      const fe = (he == null ? void 0 : he.transform) || {}, Ae = s.width, Pe = s.height, Ne = Number(Z.u0 || 0) + Number(fe.du || 0), je = Number(Z.u1 || 0) + Number(fe.du || 0), Xe = Number(Z.v0 || 0) + Number(fe.dv || 0), He = Number(Z.v1 || 0) + Number(fe.dv || 0);
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * Ae),
        maxX: Math.ceil((je % 1 + 1) % 1 * Ae),
        minY: Math.floor(G(Xe, 0, 1) * Pe),
        maxY: Math.ceil(G(He, 0, 1) * Pe),
        wraps: je - Ne >= 1 || Ne < 0 || je > 1
      };
    }
    function Y(he) {
      return he ? he.wraps ? z(T, { minX: 0, maxX: he.maxX, minY: he.minY, maxY: he.maxY }) || z(T, { minX: he.minX, maxX: s.width - 1, minY: he.minY, maxY: he.maxY }) : z(T, he) : !0;
    }
    function re(he) {
      if (!he) return { touched: !1, canvas: null };
      const Z = na(s.width, s.height, { readback: !0 });
      Z.ctx.drawImage(he, 0, 0);
      const fe = Z.ctx.getImageData(0, 0, s.width, s.height);
      Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(l.canvas, 0, 0), Z.ctx.restore();
      const Ae = Z.ctx.getImageData(0, 0, s.width, s.height);
      for (let Pe = 0; Pe < s.width * s.height; Pe += 1) {
        if (h[Pe * 4 + 3] <= 8) continue;
        const je = fe.data[Pe * 4 + 3], Xe = Ae.data[Pe * 4 + 3];
        if (je > Xe)
          return { touched: !0, canvas: Z.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ce(he, Z, fe) {
      const Ae = Number(fe == null ? void 0 : fe.z_index), Pe = bg(he, Z, fe).map((Ne, je) => ({
        ...Ne,
        z_index: Number.isFinite(Ae) ? Ae + je * 1e-3 : P + je * 1e-3
      }));
      return Pe.length && (P = Math.max(P, ...Pe.map((Ne) => Number((Ne == null ? void 0 : Ne.z_index) || 0))) + 1), Pe;
    }
    for (const he of Wt()) {
      const Z = String((he == null ? void 0 : he.actionGroupId) || (he == null ? void 0 : he.id) || "").trim();
      if (!Z) continue;
      const fe = An(Z, "paint");
      if (!Y(q(he, fe))) {
        g.push(he), b.push(...fe);
        continue;
      }
      const Ae = ((Le = (Ee = f.paintEngine) == null ? void 0 : Ee.getGroupTarget) == null ? void 0 : Le.call(Ee, Z)) || null, Pe = ((We = Ae == null ? void 0 : Ae.committedPaint) == null ? void 0 : We.canvas) || null;
      if (!Pe) {
        g.push(he), b.push(...fe);
        continue;
      }
      const Ne = re(Pe);
      if (!Ne.touched || !Ne.canvas) {
        g.push(he), b.push(...fe);
        continue;
      }
      M = !0;
      const je = ce(Ne.canvas, "paint", m.get(Z) || he || {});
      x.push(...je);
    }
    for (const he of sn().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") === "paint")) {
      if (!Y(B(he))) {
        x.push(he);
        continue;
      }
      const Z = xu(he, null);
      if (!Z) {
        x.push(he);
        continue;
      }
      const fe = re(Z);
      if (!fe.touched || !fe.canvas) {
        x.push(he);
        continue;
      }
      M = !0;
      const Ae = ce(fe.canvas, "paint", he);
      x.push(...Ae);
    }
    return M ? (v.painting.paint.strokes = b, v.painting.groups = g.sort((he, Z) => Number((he == null ? void 0 : he.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0)), v.painting.raster_objects = x.sort((he, Z) => Number((he == null ? void 0 : he.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0)), Qi({ preservePanelValues: !1 }), !0) : !1;
  }
  function i0(r) {
    var b, g, x, M, P;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.rawPoints) || ((M = (x = r.stroke) == null ? void 0 : x.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      gl(r);
      const N = mn();
      N && (String(((P = r.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? f.paintEngine.cancelActiveStroke(N) : f.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, h = Qu(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = mn();
    m && f.paintEngine.beginStroke(h, m);
  }
  function a0(r) {
    var b, g;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      gl(r);
      const x = mn();
      x && f.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, h = ef(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = mn();
    m && f.paintEngine.beginStroke(h, m);
  }
  function gl(r) {
    var m, b, g, x;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((b = r == null ? void 0 : r.stroke) == null ? void 0 : b.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = ul(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), r0(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && nu((g = r.stroke) == null ? void 0 : g.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = ul(h, r.stroke.targetSpace, !0), l && nu((x = r.stroke) == null ? void 0 : x.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
  }
  function tf(r) {
    var s;
    if (t === "cutout" && f.mode === "frame") {
      const l = Fe(), h = Ot(l);
      if (!l || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const b = Dn(r, l, performance.now()), g = b ? vi(b) : null;
      if (g)
        for (const M of ll()) {
          if (!bt(M)) continue;
          const P = ia(M, g);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const N = $t(M);
            if (N != null && N.visible) return { item: M, geom: N };
          }
        }
      const x = Bs(!1).slice().sort((M, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of x) {
        if (M.type === "strokeGroup") {
          const T = fi(Xi("paint", M.actionGroupId || M.id || ""));
          if (!T) continue;
          const z = $t(T);
          if (!(z != null && z.visible)) continue;
          const q = Array.isArray(z.strokePaths) ? z.strokePaths : [];
          for (const B of q) {
            const Y = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!Y.length) continue;
            if (B.closed && Y.length >= 3 && or(r, Y)) return { item: T, geom: z };
            const re = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let ce = 0; ce < Y.length - 1; ce += 1)
              if (Xl(r, Y[ce], Y[ce + 1]) <= re * re) return { item: T, geom: z };
            if (Y.length === 1 && kr(r, Y[0]) <= re * re) return { item: T, geom: z };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const T = ui(Ji(((s = M.item) == null ? void 0 : s.id) || M.id || ""));
          if (!T) continue;
          const z = $t(T);
          if (_u(T, z, r, b)) return { item: T, geom: z };
          continue;
        }
        const P = M.item;
        if (!P || !bt(P) || !g) continue;
        const N = ia(P, g);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const T = $t(P);
          if (T != null && T.visible) return { item: P, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...Bs(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? fi(Xi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ui(Ji(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? ll().filter((l) => hn(l)) : []
    ];
    for (const l of o) {
      if (Et(l)) {
        const m = $t(l);
        if (!(m != null && m.visible)) continue;
        const b = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of b) {
          const x = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!x.length) continue;
          if (g.closed && x.length >= 3 && or(r, x)) return { item: l, geom: m };
          const M = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < x.length - 1; P += 1)
            if (Xl(r, x[P], x[P + 1]) <= M * M) return { item: l, geom: m };
          if (x.length === 1 && kr(r, x[0]) <= M * M) return { item: l, geom: m };
        }
        continue;
      }
      if (Yt(l)) {
        const m = $t(l);
        if (!(m != null && m.visible)) continue;
        if (_u(l, m, r)) return { item: l, geom: m };
        continue;
      }
      const h = $t(l);
      if (h.visible && or(r, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function bl(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((m) => kr(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], b = m.x - r.center.x, g = m.y - r.center.y, x = b * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: x };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const b = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && b.length >= 3 && or(o, b)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < b.length - 1; x += 1)
          if (Xl(o, b[x], b[x + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return or(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((h) => kr(h, o) <= 121);
      if (l >= 0) {
        const h = r.corners[l], m = h.x - r.center.x, b = h.y - r.center.y, g = m * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: g };
      }
      return or(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((h) => kr(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => kr(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], h = l.x - r.center.x, m = l.y - r.center.y, b = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: b };
    }
    return kr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : or(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
  }
  function nf(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function o0(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function s0(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => o0(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!or({ x: s, y: l }, o.corners);
  }
  function ut(r) {
    if (Qg(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? Be("none") : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" || f.interaction.kind === "roll_frame" ? Be("grabbing") : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? Be("move") : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" || f.interaction.kind === "scale_raster_object" ? Be(f.interaction.cursor || "nwse-resize") : f.interaction.kind === "rotate" ? Be("grabbing") : Be("default");
      return;
    }
    if (Zu()) {
      Be("none");
      return;
    }
    if (f.mode === "frame") {
      if (f.altModifier && !i) {
        Be(Tw);
        return;
      }
      if (f.primaryTool !== "cursor") {
        Be("default");
        return;
      }
      Be("grab");
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      Be("default");
      return;
    }
    const o = yt(), s = o ? $t(o) : null, l = o ? er(o) : !1, h = l ? { kind: "none", cursor: "default" } : bl(s, r);
    if (!l && h.kind !== "none") {
      Be(h.cursor);
      return;
    }
    if (f.primaryTool === "cursor" && tf(r)) {
      Be("default");
      return;
    }
    Be(f.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    var x, M;
    if (!jt) return;
    if (f.mode === "frame") {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = yt(), o = Cn();
    if (!r && o.length === 0 || f.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Za(), l = c_({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Ws(o) : $t(r),
      allLocked: Ys(o),
      selectedLocked: er(r),
      activeAspect: Ci(r),
      cutoutAspectOpen: f.cutoutAspectOpen,
      isExternalSticker: Ht,
      isStickerHidden: hi,
      canRestoreSelectedToInitial: cp,
      iconSet: Oe
    });
    if (!l.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (P, N, { requireFitsBelow: T = !0 } = {}) => {
      var be, Ee, Le;
      const q = Number((be = l.anchor) == null ? void 0 : be.minX), B = Number((Ee = l.anchor) == null ? void 0 : Ee.maxX), Y = Number((Le = l.anchor) == null ? void 0 : Le.maxY);
      if (![q, B, Y].every(Number.isFinite)) return null;
      const re = Math.max(14, R.width - P - 14), ce = G((q + B) * 0.5 - P * 0.5, 14, re), ee = Y + 18;
      return !Number.isFinite(ce) || !Number.isFinite(ee) || T && ee + N > R.height - 14 ? null : { left: ce, top: ee };
    }, m = Math.max(1, Number(((x = f.menuSize) == null ? void 0 : x.w) || 220)), b = Math.max(1, Number(((M = f.menuSize) == null ? void 0 : M.h) || 40)), g = h(m, b, { requireFitsBelow: !1 });
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
      if (!jt || k.selectionMenu.visible !== !0) return;
      const P = jt.getBoundingClientRect(), N = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, T = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      f.menuSize = { w: N, h: T, measured: !0 };
      const z = h(N, T);
      if (!z) {
        k.selectionMenu.visible = !1;
        return;
      }
      k.selectionMenu.left = z.left, k.selectionMenu.top = z.top;
    });
  }
  function Vr() {
    Ye.timer && (clearTimeout(Ye.timer), Ye.timer = 0), Ye.target = null, k.tooltip.visible = !1;
  }
  function l0(r) {
    if (!Mt || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    k.tooltip.text = o, k.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var B, Y;
      if (Ye.target !== s || !Mt || !(s != null && s.isConnected)) return;
      const l = ue.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, b = 12, g = Math.round(Number(((B = Mt.getBoundingClientRect()) == null ? void 0 : B.width) || 0)) || 100, x = Math.round(Number(((Y = Mt.getBoundingClientRect()) == null ? void 0 : Y.height) || 0)) || 24, M = !!s.closest(".pano-floating-left"), P = !!s.closest(".pano-frame-rail"), N = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let T = "", z = h.left - l.left + h.width * 0.5 - g * 0.5, q = h.top - l.top - x - b;
      if (M)
        T = "tool-rail", z = h.right - l.left + 10, q = h.top - l.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, l.width - g - m)), q = G(q, m, Math.max(m, l.height - x - m));
      else if (P)
        T = "frame-rail", z = h.left - l.left - g - 10, q = h.top - l.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, l.width - g - m)), q = G(q, m, Math.max(m, l.height - x - m));
      else if (N) {
        T = "footer";
        const re = s.closest(".pano-paint-footer"), ce = re ? re.getBoundingClientRect() : h;
        z = ce.left - l.left + ce.width * 0.5 - g * 0.5, q = ce.bottom - l.top + 5, z = G(z, m, Math.max(m, l.width - g - m)), q = Math.max(m, q);
      }
      z = G(z, m, Math.max(m, l.width - g - m)), q = Math.max(m, q), k.tooltip.left = z, k.tooltip.top = q, k.tooltip.variant = T, k.tooltip.visible = !0;
    });
  }
  const Bt = Fs({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (r) => {
      f.viewYaw = zt(Number(r.yaw || 0)), f.viewPitch = G(Number(r.pitch || 0), -89.9, 89.9), f.viewFov = G(Number(r.fov || f.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = R.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || R.clientWidth || 0)),
        h: Math.max(1, Number(r.height || R.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = v.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = v.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: _r,
    onInteraction: () => {
      oe.backgroundDirty = !0, oe.dirty = !0;
    }
  });
  function rf(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += Q1(o, r.lastAngle), r.lastAngle = o;
    const l = e_(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = l, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((b) => b.key === "roll_deg");
    h && (h.value = l, h.displayValue = ma(l), h.fillPct = (l + 180) / 360 * 100), Sr(), of(r), de({ localOnly: !0 });
  }
  const af = (r, o) => {
    const s = jr(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function of(r) {
    var b, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    Ye.timer && (clearTimeout(Ye.timer), Ye.timer = 0), Ye.target = null;
    const o = Ot(r.shot), s = (b = R.getBoundingClientRect) == null ? void 0 : b.call(R), l = (g = ue.getBoundingClientRect) == null ? void 0 : g.call(ue);
    if (!o || !s || !l || R.width <= 0 || R.height <= 0) return;
    const h = s.width / R.width, m = s.height / R.height;
    k.tooltip.text = `${ma(r.shot.roll_deg)}°`, k.tooltip.left = s.left - l.left + (o.x + o.w * 0.5) * h, k.tooltip.top = s.top - l.top + (o.y + o.h * 0.5) * m + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  De == null || De.addEventListener("pointerdown", (r) => {
    var m;
    if (r.button !== 0 || i || f.mode !== "frame") return;
    const o = Fe();
    if (!o) return;
    const s = Ot(o);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = af(r, l);
    f.interaction = {
      kind: "roll_frame",
      shot: o,
      center: l,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(o.roll_deg ?? o.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = De.setPointerCapture) == null || m.call(De, r.pointerId), r.preventDefault(), Sr(), of(f.interaction), de({ localOnly: !0 });
  }), De == null || De.addEventListener("pointermove", (r) => {
    var o;
    ((o = f.interaction) == null ? void 0 : o.kind) !== "roll_frame" || f.interaction.source !== "knob" || rf(
      f.interaction,
      af(r, f.interaction.center),
      r
    );
  });
  const c0 = () => {
    const r = f.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (Qe(), it(), Ve()), f.interaction = null, Vr(), vr(), Sr(), de());
  };
  De == null || De.addEventListener("pointerup", c0), De == null || De.addEventListener("pointercancel", () => oa()), De == null || De.addEventListener("lostpointercapture", () => {
    var r;
    ((r = f.interaction) == null ? void 0 : r.source) === "knob" && oa();
  }), De == null || De.addEventListener("dblclick", (r) => {
    const o = f.mode === "frame" && !i ? Fe() : null;
    !o || Math.abs(Number(o.roll_deg || 0)) <= 1e-9 || (o.roll_deg = 0, Qe(), it(), Ve(), Sr(), de(), r.preventDefault());
  }), R.onpointerdown = (r) => {
    const o = jr(r);
    if (mo(o, !0), f.viewTween = null, Bt.state.inertia.active = !1, Bt.state.inertia.vx = 0, Bt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), f.mode === "frame") {
        const g = Fe();
        if (!g || i) return;
        f.interaction = {
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
        const g = f.mode === "unwrap" ? o : ho(r);
        f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Bt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ut(o), R.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (f.mode === "frame" && r.altKey && !i) {
      const g = Fe(), x = Ot(g);
      if (!g || !x) return;
      const M = { x: x.x + x.w * 0.5, y: x.y + x.h * 0.5 }, P = Math.atan2(o.y - M.y, o.x - M.x);
      f.interaction = {
        kind: "roll_frame",
        shot: g,
        center: M,
        lastAngle: P,
        accumulatedRad: 0,
        start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
        changed: !1,
        altStarted: !0
      }, R.setPointerCapture(r.pointerId), r.preventDefault(), Sr(), de({ localOnly: !0 });
      return;
    }
    if (f.mode === "frame" && f.primaryTool === "cursor") {
      const g = Fe();
      if (!g || i) return;
      f.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
        changed: !1
      }, ut(o), R.setPointerCapture(r.pointerId), r.preventDefault();
      return;
    }
    if (i) {
      if (f.mode === "pano") {
        const g = ho(r);
        f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Bt.startDrag(g.x, g.y, r.pointerId, performance.now()), ut(o), R.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Je && !Je.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (Xu() || pl())) {
      const g = f.primaryTool === "mask" ? "mask" : "paint", x = f.primaryTool === "mask" ? f.maskTool : f.paintTool, M = f.mode === "frame" && pl() ? Fe() : null, P = { kind: "ERP_GLOBAL" }, N = M ? Dn(o, M, performance.now()) : In(o, performance.now());
      if (!N) {
        ut(o);
        return;
      }
      f.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Ti("live"),
        stroke: x === "lasso_fill" ? ef(g, x, [N], P) : Qu(g, x, [N], P)
      }, bi();
      const T = mn();
      if (T)
        if (f.paintEngine.beginStroke(f.interaction.stroke, T), f.interaction.kind === "paint_stroke") {
          const z = f.paintEngine.ensureTarget(T), q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          f.paintEngine.appendStrokePoint(z, q, B, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, T);
      ut(o), R.setPointerCapture(r.pointerId), de();
      return;
    }
    const s = Cn(), l = yt(), h = s.length > 1 ? Ws(s) : l ? $t(l) : null;
    if (f.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      f.interaction = { kind: "marquee_select", start: o, current: o }, ut(o), R.setPointerCapture(r.pointerId), de({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((x) => er(x)) ? { kind: "none" } : bl(h, o)).kind === "move") {
        f.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((x) => bt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var P, N;
              const M = $t(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => Et(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Xt(An(x.actionGroupId, x.layerKind)),
            frameSnapshot: Xt(yr(x.actionGroupId, x.layerKind)),
            center: (() => {
              var P, N;
              const M = $t(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ks(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => Yt(x)).map((x) => ({
            id: Lt(x.rasterObjectId || x.id || ""),
            snapshot: Xt(sn().find((M) => String((M == null ? void 0 : M.id) || "") === Lt(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var P, N;
              const M = $t(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ku(x)
          }))
        }, ut(o), R.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const g = er(l) ? { kind: "none" } : bl(h, o);
      if (g.kind === "scale") {
        f.interaction = Et(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Xt(An(l.actionGroupId, l.layerKind)),
          frameSnapshot: Xt(yr(l.actionGroupId, l.layerKind)),
          cursor: g.cursor
        } : Yt(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Xt(sn().find((x) => String((x == null ? void 0 : x.id) || "") === Lt(l.rasterObjectId || l.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor
        }, ut(o), R.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        f.interaction = {
          kind: g.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ut(o), R.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        f.interaction = Et(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Xt(An(l.actionGroupId, l.layerKind)),
          frameSnapshot: Xt(yr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ut(o), R.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Et(l)) {
          const x = f.mode === "frame" ? (() => {
            const M = Fe();
            return M ? Dn(o, M, performance.now()) : null;
          })() : In(o, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: Xt(An(l.actionGroupId, l.layerKind)),
            frameSnapshot: Xt(yr(l.actionGroupId, l.layerKind))
          }, ut(o), R.setPointerCapture(r.pointerId);
          return;
        }
        if (Yt(l)) {
          const x = f.mode === "frame" ? (() => {
            const M = Fe();
            return M ? Dn(o, M, performance.now()) : null;
          })() : In(o, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: Xt(sn().find((M) => String((M == null ? void 0 : M.id) || "") === Lt(l.rasterObjectId || l.id || "")))
          }, ut(o), R.setPointerCapture(r.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ut(o), R.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = tf(o);
    if (m) {
      const g = f.selectedId !== m.item.id;
      if (g && f.selectedId && (Qe(), pn()), di(m.item), t === "cutout" && g && (f.cutoutAspectOpen = !1), g && Ve(), Ke(), de(), er(m.item)) {
        ut(o);
        return;
      }
      f.interaction = {
        kind: Et(m.item) ? "move_stroke_group" : Yt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Et(m.item) || Yt(m.item) ? f.mode === "frame" ? (() => {
          const x = Fe();
          return x ? Dn(o, x, performance.now()) : null;
        })() : In(o, performance.now()) : null,
        snapshot: Et(m.item) ? Xt(An(m.item.actionGroupId, m.item.layerKind)) : Yt(m.item) ? Xt(sn().find((x) => String((x == null ? void 0 : x.id) || "") === Lt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Et(m.item) ? Xt(yr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ut(o), R.setPointerCapture(r.pointerId);
      return;
    }
    const b = !!f.selectedId;
    if (b && (Qe(), pn()), Qi(), b && Ve(), Ke(), de(), f.mode === "pano") {
      const g = ho(r);
      f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Bt.startDrag(g.x, g.y, r.pointerId, performance.now()), ut(o), R.setPointerCapture(r.pointerId);
    }
  }, R.onpointermove = (r) => {
    var l, h, m, b, g, x, M, P, N, T, z, q, B, Y, re, ce, ee, be, Ee, Le, We, he;
    const o = jr(r);
    if (mo(o, !0), !f.interaction) {
      ut(o);
      return;
    }
    ut(o);
    const s = f.interaction;
    if (s.kind === "paint_stroke") {
      const Z = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let fe = !1;
      Z.forEach((Ae) => {
        const Pe = jr(Ae);
        if (f.mode === "frame") {
          const Ne = Fe(), je = Ne ? Ot(Ne) : null;
          if (je) {
            const Xe = (Pe.x - je.x) / Math.max(1, je.w), He = (Pe.y - je.y) / Math.max(1, je.h);
            if (!(Xe >= 0 && Xe <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, i0(s));
          }
        }
        t0(s, Pe, performance.now()) && (fe = !0);
      }), fe && de({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Z = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let fe = !1;
      if (Z.forEach((Ae) => {
        const Pe = jr(Ae);
        if (f.mode === "frame") {
          const Ne = Fe(), je = Ne ? Ot(Ne) : null;
          if (je) {
            const Xe = (Pe.x - je.x) / Math.max(1, je.w), He = (Pe.y - je.y) / Math.max(1, je.h);
            if (!(Xe >= 0 && Xe <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, a0(s));
          }
        }
        n0(s, Pe, performance.now()) && (fe = !0);
      }), fe) {
        const Ae = mn();
        Ae && f.paintEngine.updateActiveStroke(s.stroke, Ae), de({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Z = performance.now(), fe = f.mode === "unwrap" ? o : ho(r);
      Bt.moveDrag(fe.x, fe.y, f.mode === "unwrap" ? "unwrap" : "pano", Z), s.lastTs = Z, s.last = fe, de({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const Z = ml(s.shot);
      if (!Z || !s.shot) return;
      const fe = (l = v.ui_settings) != null && l.invert_view_x ? -1 : 1, Ae = (h = v.ui_settings) != null && h.invert_view_y ? -1 : 1, Pe = (o.x - s.last.x) * fe, Ne = (o.y - s.last.y) * Ae, je = Math.max(1, Number(Z.focalPx || 1)), Xe = Number(s.shot.roll_deg ?? s.shot.rot_deg ?? 0) * Pt, He = Math.cos(Xe), et = Math.sin(Xe), Tt = Pe / je, at = -Ne / je, Nt = Tt * He - at * et, rr = Tt * et + at * He, vo = Number(s.shot.pitch_deg || 0) * Pt, _o = Math.max(0.25, Math.abs(Math.cos(vo)));
      s.shot.yaw_deg = zt(
        Number(s.shot.yaw_deg || 0) - Math.atan(Nt) / _o * wn
      ), s.shot.pitch_deg = G(
        Number(s.shot.pitch_deg || 0) - Math.atan(rr) * wn,
        -90,
        90
      ), s.changed = s.changed || Math.abs(Pe) > 0 || Math.abs(Ne) > 0, s.last = o, de({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      const Z = Math.atan2(o.y - s.center.y, o.x - s.center.x);
      rf(s, Z, r);
      return;
    }
    if (s.kind === "move") {
      const Z = o.x - s.offset.x, fe = o.y - s.offset.y;
      if (f.mode === "frame" && t === "cutout") {
        const Ae = Fe(), Pe = Ot(Ae);
        if (!Ae || !Pe) return;
        const Ne = {
          x: G((Z - Pe.x) / Math.max(1, Pe.w), 0, 1),
          y: G((fe - Pe.y) / Math.max(1, Pe.h), 0, 1)
        }, je = cl(Ae, Ne);
        if (!je) return;
        const Xe = zo(je);
        s.item.yaw_deg = Xe.yaw, s.item.pitch_deg = Xe.pitch;
      } else if (f.mode === "unwrap") {
        const Ae = _r(), Pe = G((Z - Ae.x) / Math.max(Ae.w, 1), 0, 1), Ne = G((fe - Ae.y) / Math.max(Ae.h, 1), 0, 1);
        s.item.yaw_deg = zt(Pe * 360 - 180), s.item.pitch_deg = G(90 - Ne * 180, -90, 90);
      } else {
        const Ae = nl(Z, fe), Pe = zo(Ae);
        s.item.yaw_deg = Pe.yaw, s.item.pitch_deg = Pe.pitch;
      }
      bt(s.item) && Ut(), de({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Z = f.mode === "frame" ? (() => {
        const Pe = Fe();
        return Pe ? Dn(o, Pe, performance.now()) : null;
      })() : In(o, performance.now());
      if (!Z || !s.startUv) return;
      const fe = _n(Number(Z.u || 0), Number(s.startUv.u || 0)), Ae = Number(Z.v || 0) - Number(s.startUv.v || 0);
      iu((m = s.item) == null ? void 0 : m.actionGroupId, fe, Ae, s.snapshot, (b = s.item) == null ? void 0 : b.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Z = f.mode === "frame" ? (() => {
        const Pe = Fe();
        return Pe ? Dn(o, Pe, performance.now()) : null;
      })() : In(o, performance.now());
      if (!Z || !s.startUv) return;
      const fe = _n(Number(Z.u || 0), Number(s.startUv.u || 0)), Ae = Number(Z.v || 0) - Number(s.startUv.v || 0);
      ou(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", fe, Ae, s.snapshot) && (xi(), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const fe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Zm(((M = s.item) == null ? void 0 : M.rasterObjectId) || ((P = s.item) == null ? void 0 : P.id) || "", fe, s.snapshot) && (xi(), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Z = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), fe = o.y - Number(((T = s.offset) == null ? void 0 : T.y) || 0);
      let Ae = !1, Pe = !1, Ne = !1;
      const je = Z - Number(((z = s.startCenter) == null ? void 0 : z.x) || Z), Xe = fe - Number(((q = s.startCenter) == null ? void 0 : q.y) || fe);
      for (const He of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const et = (t === "cutout" ? Gs() : Qn()).find((at) => String((at == null ? void 0 : at.id) || "") === String(He.id || ""));
        if (!et || !bt(et)) continue;
        const Tt = {
          x: Number(((B = He.center) == null ? void 0 : B.x) || 0) + je,
          y: Number(((Y = He.center) == null ? void 0 : Y.y) || 0) + Xe
        };
        if (f.mode === "frame" && t === "cutout") {
          const at = Fe(), Nt = Ot(at);
          if (!at || !Nt) continue;
          const rr = {
            x: G((Tt.x - Nt.x) / Math.max(1, Nt.w), 0, 1),
            y: G((Tt.y - Nt.y) / Math.max(1, Nt.h), 0, 1)
          }, vo = cl(at, rr);
          if (!vo) continue;
          const _o = zo(vo);
          et.yaw_deg = _o.yaw, et.pitch_deg = _o.pitch;
        } else if (f.mode === "unwrap") {
          const at = _r(), Nt = G((Tt.x - at.x) / Math.max(at.w, 1), 0, 1), rr = G((Tt.y - at.y) / Math.max(at.h, 1), 0, 1);
          et.yaw_deg = zt(Nt * 360 - 180), et.pitch_deg = G(90 - rr * 180, -90, 90);
        } else {
          const at = nl(Tt.x, Tt.y), Nt = zo(at);
          et.yaw_deg = Nt.yaw, et.pitch_deg = Nt.pitch;
        }
        Ae = !0;
      }
      for (const He of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const et = {
          x: Number(((re = He.center) == null ? void 0 : re.x) || 0) + je,
          y: Number(((ce = He.center) == null ? void 0 : ce.y) || 0) + Xe
        }, Tt = f.mode === "frame" ? (() => {
          const Nt = Fe();
          return Nt ? Dn(et, Nt, performance.now()) : null;
        })() : In(et, performance.now()), at = He.centerUv || null;
        if (Tt && at) {
          const Nt = _n(Number(Tt.u || 0), Number(at.u || 0)), rr = Number(Tt.v || 0) - Number(at.v || 0);
          iu(He.id, Nt, rr, He.snapshot, He.layerKind, He.frameSnapshot) && (Ae = !0, Pe = !0);
        }
      }
      for (const He of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const et = {
          x: Number(((ee = He.center) == null ? void 0 : ee.x) || 0) + je,
          y: Number(((be = He.center) == null ? void 0 : be.y) || 0) + Xe
        }, Tt = f.mode === "frame" ? (() => {
          const Nt = Fe();
          return Nt ? Dn(et, Nt, performance.now()) : null;
        })() : In(et, performance.now()), at = He.centerUv || null;
        if (Tt && at) {
          const Nt = _n(Number(Tt.u || 0), Number(at.u || 0)), rr = Number(Tt.v || 0) - Number(at.v || 0);
          ou(He.id, Nt, rr, He.snapshot) && (Ae = !0, Ne = !0);
        }
      }
      Ae && (Pe ? Tn({ rebuildPaintEngine: !1 }) : Ne ? xi() : Ut(), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const fe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      au((Ee = s.item) == null ? void 0 : Ee.actionGroupId, fe, 0, s.snapshot, (Le = s.item) == null ? void 0 : Le.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Z = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * wn;
      r.shiftKey && (Z = Math.round(Z / 45) * 45), au((We = s.item) == null ? void 0 : We.actionGroupId, 1, Z, s.snapshot, (he = s.item) == null ? void 0 : he.layerKind, s.frameSnapshot) && (Tn({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, de({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const fe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * fe, 1, 179), s.item.vFOV_deg = G(s.startVFOV * fe, 1, 179), s.item.aspect_id = qr(s.item), bt(s.item) && Ut(), de({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const fe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * fe, 1, 179), s.item.aspect_id = qr(s.item), bt(s.item) && Ut(), de({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const fe = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = G(s.startVFOV * fe, 1, 179), s.item.aspect_id = qr(s.item), bt(s.item) && Ut(), de({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let fe = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * wn, Ae = s.startRot - fe;
      r.shiftKey && (Ae = Math.round(Ae / 45) * 45);
      const Pe = bt(s.item) ? "rot_deg" : "roll_deg";
      s.item[Pe] = Ae, bt(s.item) && Ut(), de({ localOnly: !0 });
    }
  }, R.onpointerup = () => {
    var o, s, l, h, m, b, g, x;
    const r = f.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = f.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const M = gl(f.interaction), P = !!f.interaction._hasCommittedSegments;
        if (M || P) {
          Tn();
          const N = String(((l = f.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
          if (N) {
            const z = Wt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === N);
            z && (z.frame = null);
          }
          const T = mn();
          T && (M ? String(((h = f.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(T), Ou()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, T) : f.paintEngine.cancelActiveStroke(T)), Qe(), pn(), Ve(), Ke(), e.setDirtyCanvas(!0, !0), de();
        } else {
          const N = mn();
          N && f.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = f.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const M = nf(f.interaction.start, f.interaction.current), N = [
          ...t === "cutout" ? ll().filter((T) => !hn(T)) : [...Qn()],
          ...Ym(),
          ...qm()
        ].filter((T) => s0(M, $t(T)));
        tp(N, ((b = N[N.length - 1]) == null ? void 0 : b.id) || null), t === "cutout" && N.length && (f.cutoutAspectOpen = !1), Ve(), Ke(), de();
      } else if (((g = f.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((x = f.interaction) == null ? void 0 : x.kind) === "roll_frame")
        f.interaction.changed && (Qe(), it(), Ve());
      else if (f.interaction && f.interaction.kind !== "view") {
        let M = !1;
        (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (M = !0), (f.interaction.kind === "move_raster_object" || f.interaction.kind === "scale_raster_object") && (M = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (M = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (M = !0), M && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(f.interaction.kind) || f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length ? Tn({ rebuildPaintEngine: !0 }) : xi()), Qe(), pn(), e.setDirtyCanvas(!0, !0), aa(), f.hqFrames = 1, Ke(), de();
      }
      f.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Vr(), bi(), r && r.kind === "view" && Bt.endDrag(performance.now()), vr(), Ke(), ut(f.pointerPos), de();
    }
  }, R.onpointercancel = () => {
    var r, o, s;
    if (!oa()) {
      if (((r = f.interaction) == null ? void 0 : r.kind) === "view" && Bt.endDrag(performance.now()), ((o = f.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const l = mn();
        l && f.paintEngine.cancelActiveStroke(l);
      }
      f.interaction = null, bi(), vr(), ut(f.pointerPos), de({ localOnly: !0 });
    }
  }, R.onlostpointercapture = () => {
    oa();
  }, R.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, R.onmousemove = (r) => {
    const o = jr(r), s = mo(o, !0);
    f.interaction || (ut(o), s && f.mode === "frame" && f.primaryTool === "cursor" && de({ localOnly: !0 }));
  }, R.onmouseleave = () => {
    mo(f.pointerPos, !1), ut(f.pointerPos), f.mode === "frame" && f.primaryTool === "cursor" && de({ localOnly: !0 });
  }, R.onwheel = (r) => {
    if (f.mode === "frame") {
      const o = jr(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      qg(o, s) && de({ localOnly: !0 }), r.preventDefault();
      return;
    }
    f.mode === "pano" && (Bt.applyWheelEvent(r) && de({ localOnly: !0 }), r.preventDefault());
  }, R.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Lr(!0));
  }, R.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Te.depth = 0, Lr(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((h) => uo(h));
    s && Hu(s);
  };
  const sf = (r) => {
    t !== "stickers" && t !== "cutout" || i || js(r) && (Te.depth += 1, Lr(!0), r.preventDefault());
  }, lf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Te.active && js(r) && Lr(!0), Te.active && r.preventDefault());
  }, cf = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Te.depth === 0 || o) && Lr(!1);
  }, uf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Te.depth = 0, Lr(!1), js(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", sf, !0), window.addEventListener("dragover", lf, !0), window.addEventListener("dragleave", cf, !0), window.addEventListener("drop", uf, !0);
  function yl() {
    const { canUndo: r, canRedo: o } = Vu();
    Pi(k.toolButtons, "value", "undo", { disabled: !r }), Pi(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const ff = (r, o, s = !1) => {
    var x;
    const l = t === "cutout" && f.mode === "frame" ? Fe() : null, h = l || yt(), m = l ? "shot" : Za();
    if (!h || m === "stroke") return;
    const b = (((x = k.sidePanel) == null ? void 0 : x.params) || []).find((M) => M.key === r);
    if (!b || b.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = G(g, Number(b.min), Number(b.max)), r === "yaw_deg" && (g = zt(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = qr(h)), Ve(), de(), s && Qe();
  };
  ye == null || ye.addEventListener("click", async (r) => {
    var l, h, m, b, g, x, M, P, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = Gt(o.getAttribute("data-coverage"));
      if (T === Gt(v.coverage)) return;
      v.coverage = T, f.coverage = T, p && (p.value = String(T)), c ? oe.backgroundDirty = !0 : (pn(), Wg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ke(), de();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (l = k.sidePanel) == null ? void 0 : l.selectionPicker) != null && h.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const T = String(o.getAttribute("data-selection-id") || "");
      let z = null;
      T && (t === "stickers" ? z = Qn().find((q) => String((q == null ? void 0 : q.id) || "") === T) || null : z = ((m = lu().find((q) => {
        var B;
        return String(((B = q == null ? void 0 : q.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : m.item) || null), di(z || null), z && !Et(z) && Vs(
        zt(Number(z.yaw_deg || 0)),
        G(Number(z.pitch_deg || 0), -89.9, 89.9),
        f.viewFov
      ), Ve(), Ke(), de();
      return;
    }
    if (s === "copy-state-inline") {
      const T = yt(), z = Za();
      if (!T || z === "stroke" || Cn().length > 1) return;
      const q = JSON.stringify(t === "cutout" && z !== "image" ? pu(T) : mp(T));
      try {
        await navigator.clipboard.writeText(q), (b = k.sidePanel) != null && b.copyStateButton && (k.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = k.sidePanel) != null && B.copyStateButton && (k.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const T = String(o.getAttribute("data-visibility") || "");
      T === "panorama" ? f.showPanorama = !f.showPanorama : T === "objects" ? f.showObjects = !f.showObjects : T === "mask" && (f.showMask = !f.showMask), Ve(), de();
      return;
    }
    if (s === "set-invert-x") {
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", fo(), Ve(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), de();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", fo(), Ve(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), de();
      return;
    }
    if (s === "toggle-quality-picker") {
      (M = k.sidePanel) != null && M.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", fo(), Ve(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), de();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", fo(), Ve(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), de();
      return;
    }
    if (s === "close-preview") {
      Mi();
      return;
    }
    if (s === "cancel-close") {
      Mi();
      return;
    }
    s === "save-close" && (Gg(), Mi());
  }), ye == null || ye.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && ff(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ye == null || ye.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && ff(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const vl = () => bu();
  vl(), W.addEventListener("click", (r) => {
    var g, x, M, P;
    if ((x = (g = r.target) == null ? void 0 : g.matches) != null && x.call(g, "[data-confirm-overlay]")) {
      const N = (M = k.confirmDialog) == null ? void 0 : M.resolve;
      k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const N = f.mode;
      f.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && f.mode === "frame" && (N !== "frame" && (oe.frameSafeRect = null), Ve(), Ke()), hl(), vr(), de();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        f.primaryTool = N, (N === "paint" || N === "mask") && Qi({ preservePanelValues: !0 }), ln(), Ve(), Ke(), de();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? dl(-1) : N === "redo" ? dl(1) : N === "clear" ? jg() : N === "add" || N === "add-image" ? Eg() : N === "add-or-look" && Lg();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        f.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        f.paintTool = N, Qi({ preservePanelValues: !0 }), cn[N] && (f.activeBrushPresetId = N), ln(), Ve(), Ke(), de();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        f.primaryTool = "mask", f.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Qi({ preservePanelValues: !0 }), ln(), Ve(), Ke(), de();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Vg(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = es.find((T) => T.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        f.paintColor = gn(N.color), K(!0), ln();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), Je && !Je.hidden ? K(!0) : ne(), ln();
        return;
      }
    }
    const l = String(((P = s == null ? void 0 : s.getAttribute) == null ? void 0 : P.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      if (gi(), $.paused) {
        le.mode = "playback", le.pendingPlaybackResume = !1, le.resumeAfterScrub = !1;
        const N = Number(k.videoTransport.duration || $.duration || 0), T = Number($.currentTime || le.editorTime || 0), z = N > 0 && T >= N - 1e-3 ? 0 : Number(le.editorTime || T || 0), q = Math.max(zs(), 0.04);
        le.editorTime = z, Math.abs(T - z) > q ? (le.seeking = !1, le.pendingPlaybackResume = !0, Zs(z)) : $.play().catch(() => {
        });
      } else
        $.pause(), le.mode = "scrub", le.resumeAfterScrub = !1, le.pendingPlaybackResume = !1, le.editorTime = Number($.currentTime || 0), pi();
      Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: tr(),
        currentTime: le.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: le.mode
      }), de({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const N = !$.muted;
      $.muted = N, !N && Number($.volume || 0) <= 0 && ($.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: tr(),
        currentTime: le.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: le.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (l === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      const N = !k.videoTransport.loop;
      k.videoTransport.loop = N, $.loop = N, Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: tr(),
        currentTime: le.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: le.mode,
        hasAudio: k.videoTransport.hasAudio,
        loop: N,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (l === "frame-aspect") {
        k.frameRail.aspectOpen = !k.frameRail.aspectOpen;
        return;
      }
      if (l === "frame-aspect-set") {
        const N = f.mode === "frame" ? Fe() : null;
        if (!N) return;
        Wu(N, String(s.getAttribute("data-aspect") || "1:1")), k.frameRail.aspectOpen = !1, aa(), Qe(), it(), vr(), de();
        return;
      }
      if (l === "frame-rotate-90") {
        const N = f.mode === "frame" ? Fe() : null;
        if (!N) return;
        Yu(N), k.frameRail.aspectOpen = !1, aa(), Qe(), it(), vr(), de();
        return;
      }
      if (l === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, Ke(), de();
        return;
      }
      if (l === "aspect-set") {
        const N = yt();
        if (!N) return;
        const T = String(s.getAttribute("data-aspect") || "1:1");
        Wu(N, T), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, aa(), Qe(), it(), Ke(), de();
        return;
      }
      if (l === "rotate-90") {
        const N = yt();
        if (!N) return;
        Yu(N), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, aa(), Qe(), it(), Ke(), de();
        return;
      }
      if (l === "bring-front") {
        Ug();
        return;
      }
      if (l === "send-back") {
        Bg();
        return;
      }
      if (l === "duplicate") {
        Hg();
        return;
      }
      if (l === "replace-image") {
        Rg();
        return;
      }
      if (l === "toggle-lock") {
        ep();
        return;
      }
      if (l === "back-initial") {
        sp();
        return;
      }
      if (l === "toggle-visible") {
        op();
        return;
      }
      if (l === "delete") {
        Gu();
        return;
      }
    }
    if (l === "reset-view") {
      if (f.mode === "frame") return;
      Vs(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      if (f.mode === "frame") return;
      f.showGrid = !f.showGrid, Jw(e == null ? void 0 : e.id, f.showGrid), vl(), de();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), d0();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !f.outputPreviewExpanded;
      f.outputPreviewExpanded = N, f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = N ? 1 : 0, f.outputPreviewAnimStartTs = performance.now(), gf(), de();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), b = f.customPaintHistory[m];
    b && (f.customPaintColor = gn(b), f.paintColor = gn(b), ln());
  }), W.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!($ instanceof HTMLVideoElement)) return;
      gi();
      const m = G(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      le.mode = "scrub", !le.seeking && !$.paused && !$.ended && (le.resumeAfterScrub = !0, $.pause()), le.editorTime = m, tu(m), Ln({
        ready: !!$.getAttribute("src"),
        playing: !1,
        visible: tr(),
        currentTime: m,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: "scrub"
      }), Number(Ce.__panoFrameIdx || 0) > 0 && (oe.backgroundDirty = !0, oe.dirty = !0, de({ cause: "frame_view", localOnly: !0 })), Zs(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!($ instanceof HTMLVideoElement)) return;
      const m = G(Number(s.value || 0), 0, 1);
      $.volume = m, $.muted = m <= 1e-4, Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: tr(),
        currentTime: le.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: le.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: m
      });
      return;
    }
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(l.value)))), b = Mr(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[b] = m, ln(), e0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...f.customPaintColor, a: G(Number(h.value) / 100, 0, 1) };
      f.customPaintColor = gn(m), f.paintColor = gn(m), ln();
    }
  }), W.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!($ instanceof HTMLVideoElement)) return;
      le.pendingPlaybackResume = !!le.resumeAfterScrub, le.resumeAfterScrub = !1, le.pendingPlaybackResume || (le.mode = "scrub"), le.seeking || (le.pendingPlaybackResume ? (le.pendingPlaybackResume = !1, le.mode = "playback", $.play().catch(() => {
      })) : (pi(), de({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !W.contains(o) || Ye.target !== o && (Ye.target = o, Ye.timer && clearTimeout(Ye.timer), Ye.timer = window.setTimeout(() => {
      Ye.target === o && l0(o);
    }, 220));
  }), W.addEventListener("pointerout", (r) => {
    var l, h;
    const o = r.target.closest("[data-tip]");
    !o || Ye.target !== o || (r.relatedTarget instanceof Element ? (h = (l = r.relatedTarget).closest) == null ? void 0 : h.call(l, "[data-tip]") : null) === o || Vr();
  }), W.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Vr();
  });
  const u0 = (r, o) => {
    var g;
    if (!Kt) return;
    const s = Kt.getBoundingClientRect(), l = G((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - G((o - s.top) / Math.max(1, s.height), 0, 1), m = Zl(f.customPaintColor), b = { ...Jl(m.h, l, h), a: Number(((g = f.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    f.customPaintColor = gn(b), f.paintColor = gn(b), ln();
  }, f0 = (r) => {
    var m;
    if (!O) return;
    const o = O.getBoundingClientRect(), s = G((r - o.left) / Math.max(1, o.width), 0, 1), l = Zl(f.customPaintColor), h = { ...Jl(s, l.s, l.v), a: Number(((m = f.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    f.customPaintColor = gn(h), f.paintColor = gn(h), ln();
  }, df = (r, o) => {
    const s = r.pointerId;
    o(r);
    const l = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Kt && (Kt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), df(r, (o) => u0(o.clientX, o.clientY));
  }), O && (O.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), df(r, (o) => f0(o.clientX));
  }), W.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (h = k.confirmDialog) == null ? void 0 : h.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const hf = () => {
    const r = !!f.fullscreen;
    Pi(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Oe.fullscreen_close : Oe.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, go = (r) => {
    const o = !!r;
    f.fullscreen !== o && (f.fullscreen = o, W.classList.toggle("pano-modal-fullscreen", o), o ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), vl(), hf(), li(), de());
  }, mf = () => document.fullscreenElement === L, d0 = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        go(!f.fullscreen);
        return;
      }
      mf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = L.requestFullscreen) == null ? void 0 : r.call(L));
    } catch {
      go(!f.fullscreen);
    }
  }, pf = () => {
    document.fullscreenEnabled && go(mf());
  };
  document.addEventListener("fullscreenchange", pf), hf();
  const gf = () => {
    const r = !!f.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Oe.fullscreen_close : Oe.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  gf();
  const _l = e.onExecuted, xl = e.onConnectionsChange;
  let wl = null, Sl = null, Ml = null;
  !i && t === "stickers" && (Ml = (r = "sync") => {
    gu(r);
  }, e.__panoExternalStickerSync = Ml, wl = function(...o) {
    var s;
    typeof _l == "function" && _l.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = wl, Sl = function(...o) {
    var s;
    typeof xl == "function" && xl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Sl), i || Hd.set(String(e.id ?? "0"), () => Su());
  let Si = null;
  const Mi = async () => Si || (Si = (async () => {
    var r, o, s, l, h, m, b, g, x, M, P;
    return Hd.delete(String(e.id ?? "0")), Xg(), i || pn(), document.fullscreenElement === L && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", pf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (g = (b = (m = bn) == null ? void 0 : m.canvas) == null ? void 0 : b.setDirty) == null || g.call(b, !0, !0), Vr(), Dg(), $ instanceof HTMLVideoElement && $.pause(), gt.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (x = we == null ? void 0 : we.dispose) == null || x.call(we), (M = me == null ? void 0 : me.unmount) == null || M.call(me), (P = te == null ? void 0 : te.dispose) == null || P.call(te), Lr(!1), window.removeEventListener("keydown", bf, !0), window.removeEventListener("keydown", yf, !0), window.removeEventListener("keydown", bo, !0), window.removeEventListener("keyup", bo, !0), window.removeEventListener("blur", vf), window.removeEventListener("keydown", _f, !0), window.removeEventListener("dragenter", sf, !0), window.removeEventListener("dragover", lf, !0), window.removeEventListener("dragleave", cf, !0), window.removeEventListener("drop", uf, !0), !i && t === "stickers" && (e.onExecuted === wl && (e.onExecuted = _l), e.onConnectionsChange === Sl && (e.onConnectionsChange = xl), e.__panoExternalStickerSync === Ml && (e.__panoExternalStickerSync = null)), D.unmount(), E.remove(), Kg(), Si = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), Si = null, !1)), Si), bf = (r) => {
    var o, s, l, h, m;
    if (r.key === "Escape") {
      if (oa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (f.fullscreen && document.fullscreenElement === L) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (l = document.exitFullscreen) == null || l.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), go(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Mi();
    }
  }, yf = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const b = r.target, g = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || b != null && b.isContentEditable || !yt() || (Gu(), r.preventDefault(), r.stopPropagation());
  }, bo = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    f.marqueeModifier === o && f.altModifier === s || (f.marqueeModifier = o, f.altModifier = s, Sr(), ut(f.pointerPos));
  }, vf = () => {
    f.marqueeModifier = !1, f.altModifier = !1, Sr(), ut(f.pointerPos);
  }, _f = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: b } = Vu();
    r.shiftKey && !b || !r.shiftKey && !m || (dl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", bf, !0), window.addEventListener("keydown", yf, !0), window.addEventListener("keydown", bo, !0), window.addEventListener("keyup", bo, !0), window.addEventListener("blur", vf), window.addEventListener("keydown", _f, !0), L.addEventListener("pointerdown", (r) => {
    r.target === L && Mi();
  });
  function $n(r, o, { rollbackState: s = !1 } = {}) {
    let l = "";
    try {
      s && (l = JSON.stringify(v)), o();
    } catch (h) {
      if (l)
        try {
          const m = JSON.parse(l);
          Object.keys(v).forEach((b) => delete v[b]), Object.assign(v, m), i || pn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      k.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  $n("cutout-focus", bp), !i && t === "stickers" && $n("external-sticker-sync", () => gu("open"), { rollbackState: !0 }), Fg().catch((r) => {
    k.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), $n("history", Qe), $n("undo-redo", yl), $n("paint-ui", ln), $n("side-panel", Ve), $n("look-at-frame", el), $n("video-source", gi), $n("canvas-size", zu), $n("cursor", () => ut(f.pointerPos)), de(), oe.rafId = requestAnimationFrame(ju);
}
function Yd(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var _, w;
    try {
      (_ = y.__panoDomRestore) == null || _.call(y);
    } catch {
    }
    try {
      (w = y.__panoLegacyRestore) == null || w.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function c(y) {
    var A;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && iS(y), Xc(y), oS(y, xs);
    const S = Mn(y, xs);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (F) => {
        var j;
        const V = v ? v(F) : void 0;
        return (j = y.setDirtyCanvas) == null || j.call(y, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      const v = Mn(y, "bg_color");
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), wc(y, i, () => Ta(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    wc(y, i, () => Ta(y, "cutout")), O1(y, {
      buttonText: i,
      onOpen: () => Ta(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return c(this), y;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = d ? d.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = p ? p.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function vS(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function _S(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Xc(e), wc(e, "Open Preview", () => Ta(e, "stickers", { readOnly: !0, hideSidebar: !1 })), E1(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => Ta(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
bn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Yd(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Yd(e, t, "PanoramaCutout", "Open Cutout Editor"), hs(n) && vS(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Xc(e), hs(t) && _S(e);
  }
});
