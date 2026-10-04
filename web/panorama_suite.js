import * as Rl from "../../scripts/app.js";
import { app as Ir } from "../../scripts/app.js";
import { api as Yt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Pd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ct = {}, sa = [], Jr = () => {
}, F0 = () => !1, Tc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dc = (e) => e.startsWith("onUpdate:"), En = Object.assign, Ad = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zw = Object.prototype.hasOwnProperty, bt = (e, t) => Zw.call(e, t), Xe = Array.isArray, la = (e) => Ks(e) === "[object Map]", T0 = (e) => Ks(e) === "[object Set]", Tm = (e) => Ks(e) === "[object Date]", nt = (e) => typeof e == "function", tn = (e) => typeof e == "string", ei = (e) => typeof e == "symbol", Nt = (e) => e !== null && typeof e == "object", D0 = (e) => (Nt(e) || nt(e)) && nt(e.then) && nt(e.catch), L0 = Object.prototype.toString, Ks = (e) => L0.call(e), Qw = (e) => Ks(e).slice(8, -1), R0 = (e) => Ks(e) === "[object Object]", Cd = (e) => tn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ys = /* @__PURE__ */ Pd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, ex = /-\w/g, zn = Lc(
  (e) => e.replace(ex, (t) => t.slice(1).toUpperCase())
), tx = /\B([A-Z])/g, Ao = Lc(
  (e) => e.replace(tx, "-$1").toLowerCase()
), Rc = Lc((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hu = Lc(
  (e) => e ? `on${Rc(e)}` : ""
), Xr = (e, t) => !Object.is(e, t), Vl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, V0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Id = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Dm;
const Vc = () => Dm || (Dm = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (Xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = tn(r) ? ox(r) : Mt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (tn(e) || Nt(e))
    return e;
}
const nx = /;(?![^(]*\))/g, rx = /:([^]+)/, ix = /\/\*[^]*?\*\//g;
function ox(e) {
  const t = {};
  return e.replace(ix, "").split(nx).forEach((n) => {
    if (n) {
      const r = n.split(rx);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (tn(e))
    t = e;
  else if (Xe(e))
    for (let n = 0; n < e.length; n++) {
      const r = ct(e[n]);
      r && (t += r + " ");
    }
  else if (Nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ax = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sx = /* @__PURE__ */ Pd(ax);
function $0(e) {
  return !!e || e === "";
}
function lx(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Od(e[r], t[r]);
  return n;
}
function Od(e, t) {
  if (e === t) return !0;
  let n = Tm(e), r = Tm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ei(e), r = ei(t), n || r)
    return e === t;
  if (n = Xe(e), r = Xe(t), n || r)
    return n && r ? lx(e, t) : !1;
  if (n = Nt(e), r = Nt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Od(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const z0 = (e) => !!(e && e.__v_isRef === !0), et = (e) => tn(e) ? e : e == null ? "" : Xe(e) || Nt(e) && (e.toString === L0 || !nt(e.toString)) ? z0(e) ? et(e.value) : JSON.stringify(e, j0, 2) : String(e), j0 = (e, t) => z0(t) ? j0(e, t.value) : la(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Gu(r, a) + " =>"] = o, n),
    {}
  )
} : T0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gu(n))
} : ei(t) ? Gu(t) : Nt(t) && !Xe(t) && !R0(t) ? String(t) : t, Gu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ei(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Un;
class cx {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Un, !t && Un && (this.index = (Un.scopes || (Un.scopes = [])).push(
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
      const n = Un;
      try {
        return Un = this, t();
      } finally {
        Un = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Un, Un = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Un = this.prevScope, this.prevScope = void 0);
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
function ux() {
  return Un;
}
let Et;
const Ku = /* @__PURE__ */ new WeakSet();
class H0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Un && Un.active && Un.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ku.has(this) && (Ku.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || K0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Lm(this), W0(this);
    const t = Et, n = Or;
    Et = this, Or = !0;
    try {
      return this.fn();
    } finally {
      B0(this), Et = t, Or = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Td(t);
      this.deps = this.depsTail = void 0, Lm(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ku.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lf(this) && this.run();
  }
  get dirty() {
    return Lf(this);
  }
}
let G0 = 0, bs, vs;
function K0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = vs, vs = e;
    return;
  }
  e.next = bs, bs = e;
}
function Ed() {
  G0++;
}
function Fd() {
  if (--G0 > 0)
    return;
  if (vs) {
    let t = vs;
    for (vs = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; bs; ) {
    let t = bs;
    for (bs = void 0; t; ) {
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
function W0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function B0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Td(r), fx(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Lf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (U0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function U0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === As) || (e.globalVersion = As, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lf(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Et, r = Or;
  Et = e, Or = !0;
  try {
    W0(e);
    const o = e.fn(e._value);
    (t.version === 0 || Xr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Et = n, Or = r, B0(e), e.flags &= -3;
  }
}
function Td(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Td(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function fx(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Or = !0;
const Y0 = [];
function _i() {
  Y0.push(Or), Or = !1;
}
function wi() {
  const e = Y0.pop();
  Or = e === void 0 ? !0 : e;
}
function Lm(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Et;
    Et = void 0;
    try {
      t();
    } finally {
      Et = n;
    }
  }
}
let As = 0;
class dx {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Et || !Or || Et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Et)
      n = this.activeLink = new dx(Et, this), Et.deps ? (n.prevDep = Et.depsTail, Et.depsTail.nextDep = n, Et.depsTail = n) : Et.deps = Et.depsTail = n, X0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Et.depsTail, n.nextDep = void 0, Et.depsTail.nextDep = n, Et.depsTail = n, Et.deps === n && (Et.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, As++, this.notify(t);
  }
  notify(t) {
    Ed();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fd();
    }
  }
}
function X0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        X0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Rf = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ Symbol(
  ""
), Vf = /* @__PURE__ */ Symbol(
  ""
), Cs = /* @__PURE__ */ Symbol(
  ""
);
function An(e, t, n) {
  if (Or && Et) {
    let r = Rf.get(e);
    r || Rf.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Dd()), o.map = r, o.key = n), o.track();
  }
}
function mi(e, t, n, r, o, a) {
  const c = Rf.get(e);
  if (!c) {
    As++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Ed(), t === "clear")
    c.forEach(u);
  else {
    const d = Xe(e), b = d && Cd(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, x) => {
        (x === "length" || x === Cs || !ei(x) && x >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Cs)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(bo)), la(e) && u(c.get(Vf)));
          break;
        case "delete":
          d || (u(c.get(bo)), la(e) && u(c.get(Vf)));
          break;
        case "set":
          la(e) && u(c.get(bo));
          break;
      }
  }
  Fd();
}
function Yo(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (An(t, "iterate", Cs), /* @__PURE__ */ gr(e) ? t : t.map(Er));
}
function $c(e) {
  return An(e = /* @__PURE__ */ yt(e), "iterate", Cs), e;
}
function Ur(e, t) {
  return /* @__PURE__ */ xi(e) ? va(/* @__PURE__ */ vo(e) ? Er(t) : t) : Er(t);
}
const px = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wu(this, Symbol.iterator, (e) => Ur(this, e));
  },
  concat(...e) {
    return Yo(this).concat(
      ...e.map((t) => Xe(t) ? Yo(t) : t)
    );
  },
  entries() {
    return Wu(this, "entries", (e) => (e[1] = Ur(this, e[1]), e));
  },
  every(e, t) {
    return li(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return li(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Ur(this, r)),
      arguments
    );
  },
  find(e, t) {
    return li(
      this,
      "find",
      e,
      t,
      (n) => Ur(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return li(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return li(
      this,
      "findLast",
      e,
      t,
      (n) => Ur(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return li(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return li(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bu(this, "includes", e);
  },
  indexOf(...e) {
    return Bu(this, "indexOf", e);
  },
  join(e) {
    return Yo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Bu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return li(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qa(this, "pop");
  },
  push(...e) {
    return Qa(this, "push", e);
  },
  reduce(e, ...t) {
    return Rm(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Rm(this, "reduceRight", e, t);
  },
  shift() {
    return Qa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return li(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qa(this, "splice", e);
  },
  toReversed() {
    return Yo(this).toReversed();
  },
  toSorted(e) {
    return Yo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qa(this, "unshift", e);
  },
  values() {
    return Wu(this, "values", (e) => Ur(this, e));
  }
};
function Wu(e, t, n) {
  const r = $c(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ gr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const hx = Array.prototype;
function li(e, t, n, r, o, a) {
  const c = $c(e), u = c !== e && !/* @__PURE__ */ gr(e), d = c[t];
  if (d !== hx[t]) {
    const v = d.apply(e, a);
    return u ? Er(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, x) {
    return n.call(this, Ur(e, v), x, e);
  } : n.length > 2 && (b = function(v, x) {
    return n.call(this, v, x, e);
  }));
  const y = d.call(c, b, r);
  return u && o ? o(y) : y;
}
function Rm(e, t, n, r) {
  const o = $c(e), a = o !== e && !/* @__PURE__ */ gr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Ur(e, b)), n.call(this, b, Ur(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Ur(e, d) : d;
}
function Bu(e, t, n) {
  const r = /* @__PURE__ */ yt(e);
  An(r, "iterate", Cs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Vd(n[0]) ? (n[0] = /* @__PURE__ */ yt(n[0]), r[t](...n)) : o;
}
function Qa(e, t, n = []) {
  _i(), Ed();
  const r = (/* @__PURE__ */ yt(e))[t].apply(e, n);
  return Fd(), wi(), r;
}
const mx = /* @__PURE__ */ Pd("__proto__,__v_isRef,__isVue"), q0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ei)
);
function gx(e) {
  ei(e) || (e = String(e));
  const t = /* @__PURE__ */ yt(this);
  return An(t, "has", e), t.hasOwnProperty(e);
}
class J0 {
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
      return r === (o ? a ? Nx : ty : a ? ey : Q0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Xe(t);
    if (!o) {
      let d;
      if (c && (d = px[n]))
        return d;
      if (n === "hasOwnProperty")
        return gx;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ On(t) ? t : r
    );
    if ((ei(n) ? q0.has(n) : mx(n)) || (o || An(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ On(u)) {
      const d = c && Cd(n) ? u : u.value;
      return o && Nt(d) ? /* @__PURE__ */ zf(d) : d;
    }
    return Nt(u) ? o ? /* @__PURE__ */ zf(u) : /* @__PURE__ */ ka(u) : u;
  }
}
class Z0 extends J0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Xe(t) && Cd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ xi(a);
      if (!/* @__PURE__ */ gr(r) && !/* @__PURE__ */ xi(r) && (a = /* @__PURE__ */ yt(a), r = /* @__PURE__ */ yt(r)), !c && /* @__PURE__ */ On(a) && !/* @__PURE__ */ On(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : bt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ On(t) ? t : o
    );
    return t === /* @__PURE__ */ yt(o) && (u ? Xr(r, a) && mi(t, "set", n, r) : mi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = bt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && mi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ei(n) || !q0.has(n)) && An(t, "has", n), r;
  }
  ownKeys(t) {
    return An(
      t,
      "iterate",
      Xe(t) ? "length" : bo
    ), Reflect.ownKeys(t);
  }
}
class yx extends J0 {
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
const bx = /* @__PURE__ */ new Z0(), vx = /* @__PURE__ */ new yx(), _x = /* @__PURE__ */ new Z0(!0);
const $f = (e) => e, _l = (e) => Reflect.getPrototypeOf(e);
function wx(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ yt(o), c = la(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? $f : t ? va : Er;
    return !t && An(
      a,
      "iterate",
      d ? Vf : bo
    ), En(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: x } = b.next();
          return x ? { value: v, done: x } : {
            value: u ? [y(v[0]), y(v[1])] : y(v),
            done: x
          };
        }
      }
    );
  };
}
function wl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xx(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      e || (Xr(o, u) && An(c, "get", o), An(c, "get", u));
      const { has: d } = _l(c), b = t ? $f : e ? va : Er;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && An(/* @__PURE__ */ yt(o), "iterate", bo), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      return e || (Xr(o, u) && An(c, "has", o), An(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ yt(u), b = t ? $f : e ? va : Er;
      return !e && An(d, "iterate", bo), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return En(
    n,
    e ? {
      add: wl("add"),
      set: wl("set"),
      delete: wl("delete"),
      clear: wl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ yt(this), c = _l(a), u = /* @__PURE__ */ yt(o), d = !t && !/* @__PURE__ */ gr(o) && !/* @__PURE__ */ xi(o) ? u : o;
        return c.has.call(a, d) || Xr(o, d) && c.has.call(a, o) || Xr(u, d) && c.has.call(a, u) || (a.add(d), mi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ gr(a) && !/* @__PURE__ */ xi(a) && (a = /* @__PURE__ */ yt(a));
        const c = /* @__PURE__ */ yt(this), { has: u, get: d } = _l(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ yt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Xr(a, y) && mi(c, "set", o, a) : mi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ yt(this), { has: c, get: u } = _l(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ yt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && mi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ yt(this), a = o.size !== 0, c = o.clear();
        return a && mi(
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
    n[o] = wx(o, e, t);
  }), n;
}
function Ld(e, t) {
  const n = xx(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    bt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const Sx = {
  get: /* @__PURE__ */ Ld(!1, !1)
}, kx = {
  get: /* @__PURE__ */ Ld(!1, !0)
}, Mx = {
  get: /* @__PURE__ */ Ld(!0, !1)
};
const Q0 = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap(), ty = /* @__PURE__ */ new WeakMap(), Nx = /* @__PURE__ */ new WeakMap();
function Px(e) {
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
function Ax(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Px(Qw(e));
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return /* @__PURE__ */ xi(e) ? e : Rd(
    e,
    !1,
    bx,
    Sx,
    Q0
  );
}
// @__NO_SIDE_EFFECTS__
function Cx(e) {
  return Rd(
    e,
    !1,
    _x,
    kx,
    ey
  );
}
// @__NO_SIDE_EFFECTS__
function zf(e) {
  return Rd(
    e,
    !0,
    vx,
    Mx,
    ty
  );
}
function Rd(e, t, n, r, o) {
  if (!Nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Ax(e);
  if (a === 0)
    return e;
  const c = o.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return /* @__PURE__ */ xi(e) ? /* @__PURE__ */ vo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function xi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Vd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function Ix(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && V0(e, "__v_skip", !0), e;
}
const Er = (e) => Nt(e) ? /* @__PURE__ */ ka(e) : e, va = (e) => Nt(e) ? /* @__PURE__ */ zf(e) : e;
// @__NO_SIDE_EFFECTS__
function On(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return Ox(e, !1);
}
function Ox(e, t) {
  return /* @__PURE__ */ On(e) ? e : new Ex(e, t);
}
class Ex {
  constructor(t, n) {
    this.dep = new Dd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ yt(t), this._value = n ? t : Er(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gr(t) || /* @__PURE__ */ xi(t);
    t = r ? t : /* @__PURE__ */ yt(t), Xr(t, n) && (this._rawValue = t, this._value = r ? t : Er(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ On(e) ? e.value : e;
}
const Fx = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ On(o) && !/* @__PURE__ */ On(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ny(e) {
  return /* @__PURE__ */ vo(e) ? e : new Proxy(e, Fx);
}
class Tx {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Dd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = As - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Et !== this)
      return K0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return U0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Dx(e, t, n = !1) {
  let r, o;
  return nt(e) ? r = e : (r = e.get, o = e.set), new Tx(r, o, n);
}
const xl = {}, ic = /* @__PURE__ */ new WeakMap();
let fo;
function Lx(e, t = !1, n = fo) {
  if (n) {
    let r = ic.get(n);
    r || ic.set(n, r = []), r.push(e);
  }
}
function Rx(e, t, n = Ct) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ gr(V) || o === !1 || o === 0 ? gi(V, 1) : gi(V);
  let y, v, x, N, k = !1, P = !1;
  if (/* @__PURE__ */ On(e) ? (v = () => e.value, k = /* @__PURE__ */ gr(e)) : /* @__PURE__ */ vo(e) ? (v = () => b(e), k = !0) : Xe(e) ? (P = !0, k = e.some((V) => /* @__PURE__ */ vo(V) || /* @__PURE__ */ gr(V)), v = () => e.map((V) => {
    if (/* @__PURE__ */ On(V))
      return V.value;
    if (/* @__PURE__ */ vo(V))
      return b(V);
    if (nt(V))
      return d ? d(V, 2) : V();
  })) : nt(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (x) {
      _i();
      try {
        x();
      } finally {
        wi();
      }
    }
    const V = fo;
    fo = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      fo = V;
    }
  } : v = Jr, t && o) {
    const V = v, _ = o === !0 ? 1 / 0 : o;
    v = () => gi(V(), _);
  }
  const C = ux(), F = () => {
    y.stop(), C && C.active && Ad(C.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (..._) => {
      V(..._), F();
    };
  }
  let W = P ? new Array(e.length).fill(xl) : xl;
  const R = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const _ = y.run();
        if (o || k || (P ? _.some((L, B) => Xr(L, W[B])) : Xr(_, W))) {
          x && x();
          const L = fo;
          fo = y;
          try {
            const B = [
              _,
              // pass undefined as the old value when it's changed for the first time
              W === xl ? void 0 : P && W[0] === xl ? [] : W,
              N
            ];
            W = _, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            fo = L;
          }
        }
      } else
        y.run();
  };
  return u && u(R), y = new H0(v), y.scheduler = c ? () => c(R, !1) : R, N = (V) => Lx(V, !1, y), x = y.onStop = () => {
    const V = ic.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const _ of V) _();
      ic.delete(y);
    }
  }, t ? r ? R(!0) : W = y.run() : c ? c(R.bind(null, !0), !0) : y.run(), F.pause = y.pause.bind(y), F.resume = y.resume.bind(y), F.stop = F, F;
}
function gi(e, t = 1 / 0, n) {
  if (t <= 0 || !Nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ On(e))
    gi(e.value, t, n);
  else if (Xe(e))
    for (let r = 0; r < e.length; r++)
      gi(e[r], t, n);
  else if (T0(e) || la(e))
    e.forEach((r) => {
      gi(r, t, n);
    });
  else if (R0(e)) {
    for (const r in e)
      gi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && gi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ws(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    zc(o, t, n);
  }
}
function ti(e, t, n, r) {
  if (nt(e)) {
    const o = Ws(e, t, n, r);
    return o && D0(o) && o.catch((a) => {
      zc(a, t, n);
    }), o;
  }
  if (Xe(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(ti(e[a], t, n, r));
    return o;
  }
}
function zc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Ct;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let v = 0; v < y.length; v++)
          if (y[v](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      _i(), Ws(a, null, 10, [
        e,
        d,
        b
      ]), wi();
      return;
    }
  }
  Vx(e, n, o, r, c);
}
function Vx(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Vn = [];
let Br = -1;
const ca = [];
let Vi = null, ea = 0;
const ry = /* @__PURE__ */ Promise.resolve();
let oc = null;
function jc(e) {
  const t = oc || ry;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $x(e) {
  let t = Br + 1, n = Vn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Vn[r], a = Is(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function $d(e) {
  if (!(e.flags & 1)) {
    const t = Is(e), n = Vn[Vn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Is(n) ? Vn.push(e) : Vn.splice($x(t), 0, e), e.flags |= 1, iy();
  }
}
function iy() {
  oc || (oc = ry.then(ay));
}
function zx(e) {
  Xe(e) ? ca.push(...e) : Vi && e.id === -1 ? Vi.splice(ea + 1, 0, e) : e.flags & 1 || (ca.push(e), e.flags |= 1), iy();
}
function Vm(e, t, n = Br + 1) {
  for (; n < Vn.length; n++) {
    const r = Vn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Vn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function oy(e) {
  if (ca.length) {
    const t = [...new Set(ca)].sort(
      (n, r) => Is(n) - Is(r)
    );
    if (ca.length = 0, Vi) {
      Vi.push(...t);
      return;
    }
    for (Vi = t, ea = 0; ea < Vi.length; ea++) {
      const n = Vi[ea];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Vi = null, ea = 0;
  }
}
const Is = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ay(e) {
  try {
    for (Br = 0; Br < Vn.length; Br++) {
      const t = Vn[Br];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ws(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Br < Vn.length; Br++) {
      const t = Vn[Br];
      t && (t.flags &= -2);
    }
    Br = -1, Vn.length = 0, oy(), oc = null, (Vn.length || ca.length) && ay();
  }
}
let ir = null, sy = null;
function ac(e) {
  const t = ir;
  return ir = e, sy = e && e.type.__scopeId || null, t;
}
function ly(e, t = ir, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && qm(-1);
    const a = ac(t);
    let c;
    try {
      c = e(...o);
    } finally {
      ac(a), r._d && qm(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vi(e, t) {
  if (ir === null)
    return e;
  const n = Bc(ir), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ct] = t[o];
    a && (nt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && gi(c), r.push({
      dir: a,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function io(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (_i(), ti(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), wi());
  }
}
function jx(e, t) {
  if (Cn) {
    let n = Cn.provides;
    const r = Cn.parent && Cn.parent.provides;
    r === n && (n = Cn.provides = Object.create(r)), n[e] = t;
  }
}
function $l(e, t, n = !1) {
  const r = $S();
  if (r || ua) {
    let o = ua ? ua._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && nt(t) ? t.call(r && r.proxy) : t;
  }
}
const Hx = /* @__PURE__ */ Symbol.for("v-scx"), Gx = () => $l(Hx);
function _o(e, t, n) {
  return cy(e, t, n);
}
function cy(e, t, n = Ct) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = En({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Es) {
    if (a === "sync") {
      const N = Gx();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Jr, N.resume = Jr, N.pause = Jr, N;
    }
  }
  const y = Cn;
  u.call = (N, k, P) => ti(N, y, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Bn(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : $d(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = Rx(e, t, u);
  return Es && (b ? b.push(x) : d && x()), x;
}
function Kx(e, t, n) {
  const r = this.proxy, o = tn(e) ? e.includes(".") ? uy(r, e) : () => r[e] : e.bind(r, r);
  let a;
  nt(t) ? a = t : (a = t.handler, n = t);
  const c = Us(this), u = cy(o, a.bind(r), n);
  return c(), u;
}
function uy(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Wx = /* @__PURE__ */ Symbol("_vte"), Bx = (e) => e.__isTeleport, Ux = /* @__PURE__ */ Symbol("_leaveCb");
function zd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fy(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function $m(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const sc = /* @__PURE__ */ new WeakMap();
function _s(e, t, n, r, o = !1) {
  if (Xe(e)) {
    e.forEach(
      (P, C) => _s(
        P,
        t && (Xe(t) ? t[C] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (ws(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && _s(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Bc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Ct ? u.refs = {} : u.refs, v = u.setupState, x = /* @__PURE__ */ yt(v), N = v === Ct ? F0 : (P) => $m(y, P) ? !1 : bt(x, P), k = (P, C) => !(C && $m(y, C));
  if (b != null && b !== d) {
    if (zm(t), tn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ On(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (y[P.k] = null);
    }
  }
  if (nt(d))
    Ws(d, u, 12, [c, y]);
  else {
    const P = tn(d), C = /* @__PURE__ */ On(d);
    if (P || C) {
      const F = () => {
        if (e.f) {
          const W = P ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Xe(W) && Ad(W, a);
          else if (Xe(W))
            W.includes(a) || W.push(a);
          else if (P)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const R = [a];
            k(d, e.k) && (d.value = R), e.k && (y[e.k] = R);
          }
        } else P ? (y[d] = c, N(d) && (v[d] = c)) : C && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const W = () => {
          F(), sc.delete(e);
        };
        W.id = -1, sc.set(e, W), Bn(W, n);
      } else
        zm(e), F();
    }
  }
}
function zm(e) {
  const t = sc.get(e);
  t && (t.flags |= 8, sc.delete(e));
}
Vc().requestIdleCallback;
Vc().cancelIdleCallback;
const ws = (e) => !!e.type.__asyncLoader, dy = (e) => e.type.__isKeepAlive;
function Yx(e, t) {
  py(e, "a", t);
}
function Xx(e, t) {
  py(e, "da", t);
}
function py(e, t, n = Cn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Hc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      dy(o.parent.vnode) && qx(r, t, n, o), o = o.parent;
  }
}
function qx(e, t, n, r) {
  const o = Hc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  hy(() => {
    Ad(r[t], o);
  }, n);
}
function Hc(e, t, n = Cn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      _i();
      const u = Us(n), d = ti(t, n, e, c);
      return u(), wi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ki = (e) => (t, n = Cn) => {
  (!Es || e === "sp") && Hc(e, (...r) => t(...r), n);
}, Jx = ki("bm"), Gc = ki("m"), Zx = ki(
  "bu"
), Qx = ki("u"), Bs = ki(
  "bum"
), hy = ki("um"), eS = ki(
  "sp"
), tS = ki("rtg"), nS = ki("rtc");
function rS(e, t = Cn) {
  Hc("ec", e, t);
}
const iS = "components", my = /* @__PURE__ */ Symbol.for("v-ndc");
function oS(e) {
  return tn(e) ? aS(iS, e, !1) || e : e || my;
}
function aS(e, t, n = !0, r = !1) {
  const o = ir || Cn;
  if (o) {
    const a = o.type;
    {
      const u = KS(
        a,
        !1
      );
      if (u && (u === t || u === zn(t) || u === Rc(zn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      jm(o[e] || a[e], t) || // global registration
      jm(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function jm(e, t) {
  return e && (e[t] || e[zn(t)] || e[Rc(zn(t))]);
}
function wt(e, t, n, r) {
  let o;
  const a = n, c = Xe(e);
  if (c || tn(e)) {
    const u = c && /* @__PURE__ */ vo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ gr(e), b = /* @__PURE__ */ xi(e), e = $c(e)), o = new Array(e.length);
    for (let y = 0, v = e.length; y < v; y++)
      o[y] = t(
        d ? b ? va(Er(e[y])) : Er(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Nt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const y = u[d];
        o[d] = t(e[y], y, d, a);
      }
    }
  else
    o = [];
  return o;
}
const jf = (e) => e ? Ly(e) ? Bc(e) : jf(e.parent) : null, xs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ En(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => jf(e.parent),
    $root: (e) => jf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => yy(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $d(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jc.bind(e.proxy)),
    $watch: (e) => Kx.bind(e)
  })
), Uu = (e, t) => e !== Ct && !e.__isScriptSetup && bt(e, t), sS = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
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
        if (Uu(r, t))
          return c[t] = 1, r[t];
        if (o !== Ct && bt(o, t))
          return c[t] = 2, o[t];
        if (bt(a, t))
          return c[t] = 3, a[t];
        if (n !== Ct && bt(n, t))
          return c[t] = 4, n[t];
        Hf && (c[t] = 0);
      }
    }
    const b = xs[t];
    let y, v;
    if (b)
      return t === "$attrs" && An(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Ct && bt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, bt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Uu(o, t) ? (o[t] = n, !0) : r !== Ct && bt(r, t) ? (r[t] = n, !0) : bt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ct && u[0] !== "$" && bt(e, u) || Uu(t, u) || bt(a, u) || bt(r, u) || bt(xs, u) || bt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : bt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Hm(e) {
  return Xe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Hf = !0;
function lS(e) {
  const t = yy(e), n = e.proxy, r = e.ctx;
  Hf = !1, t.beforeCreate && Gm(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: y,
    beforeMount: v,
    mounted: x,
    beforeUpdate: N,
    updated: k,
    activated: P,
    deactivated: C,
    beforeDestroy: F,
    beforeUnmount: W,
    destroyed: R,
    unmounted: V,
    render: _,
    renderTracked: L,
    renderTriggered: B,
    errorCaptured: ce,
    serverPrefetch: we,
    // public API
    expose: E,
    inheritAttrs: z,
    // assets
    components: xe,
    directives: te,
    filters: J
  } = t;
  if (b && cS(b, r, null), c)
    for (const j in c) {
      const O = c[j];
      nt(O) && (r[j] = O.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    Nt(j) && (e.data = /* @__PURE__ */ ka(j));
  }
  if (Hf = !0, a)
    for (const j in a) {
      const O = a[j], oe = nt(O) ? O.bind(n, n) : nt(O.get) ? O.get.bind(n, n) : Jr, Q = !nt(O) && nt(O.set) ? O.set.bind(n) : Jr, Pe = pt({
        get: oe,
        set: Q
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Ee) => Pe.value = Ee
      });
    }
  if (u)
    for (const j in u)
      gy(u[j], r, n, j);
  if (d) {
    const j = nt(d) ? d.call(n) : d;
    Reflect.ownKeys(j).forEach((O) => {
      jx(O, j[O]);
    });
  }
  y && Gm(y, e, "c");
  function U(j, O) {
    Xe(O) ? O.forEach((oe) => j(oe.bind(n))) : O && j(O.bind(n));
  }
  if (U(Jx, v), U(Gc, x), U(Zx, N), U(Qx, k), U(Yx, P), U(Xx, C), U(rS, ce), U(nS, L), U(tS, B), U(Bs, W), U(hy, V), U(eS, we), Xe(E))
    if (E.length) {
      const j = e.exposed || (e.exposed = {});
      E.forEach((O) => {
        Object.defineProperty(j, O, {
          get: () => n[O],
          set: (oe) => n[O] = oe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === Jr && (e.render = _), z != null && (e.inheritAttrs = z), xe && (e.components = xe), te && (e.directives = te), we && fy(e);
}
function cS(e, t, n = Jr) {
  Xe(e) && (e = Gf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Nt(o) ? "default" in o ? a = $l(
      o.from || r,
      o.default,
      !0
    ) : a = $l(o.from || r) : a = $l(o), /* @__PURE__ */ On(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Gm(e, t, n) {
  ti(
    Xe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function gy(e, t, n, r) {
  let o = r.includes(".") ? uy(n, r) : () => n[r];
  if (tn(e)) {
    const a = t[e];
    nt(a) && _o(o, a);
  } else if (nt(e))
    _o(o, e.bind(n));
  else if (Nt(e))
    if (Xe(e))
      e.forEach((a) => gy(a, t, n, r));
    else {
      const a = nt(e.handler) ? e.handler.bind(n) : t[e.handler];
      nt(a) && _o(o, a, e);
    }
}
function yy(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => lc(d, b, c, !0)
  ), lc(d, t, c)), Nt(t) && a.set(t, d), d;
}
function lc(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && lc(e, a, n, !0), o && o.forEach(
    (c) => lc(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = uS[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const uS = {
  data: Km,
  props: Wm,
  emits: Wm,
  // objects
  methods: ls,
  computed: ls,
  // lifecycle
  beforeCreate: Rn,
  created: Rn,
  beforeMount: Rn,
  mounted: Rn,
  beforeUpdate: Rn,
  updated: Rn,
  beforeDestroy: Rn,
  beforeUnmount: Rn,
  destroyed: Rn,
  unmounted: Rn,
  activated: Rn,
  deactivated: Rn,
  errorCaptured: Rn,
  serverPrefetch: Rn,
  // assets
  components: ls,
  directives: ls,
  // watch
  watch: dS,
  // provide / inject
  provide: Km,
  inject: fS
};
function Km(e, t) {
  return t ? e ? function() {
    return En(
      nt(e) ? e.call(this, this) : e,
      nt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fS(e, t) {
  return ls(Gf(e), Gf(t));
}
function Gf(e) {
  if (Xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ls(e, t) {
  return e ? En(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wm(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : En(
    /* @__PURE__ */ Object.create(null),
    Hm(e),
    Hm(t ?? {})
  ) : t;
}
function dS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = En(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Rn(e[r], t[r]);
  return n;
}
function by() {
  return {
    app: null,
    config: {
      isNativeTag: F0,
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
let pS = 0;
function hS(e, t) {
  return function(r, o = null) {
    nt(r) || (r = En({}, r)), o != null && !Nt(o) && (o = null);
    const a = by(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: pS++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: BS,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...v) {
        return c.has(y) || (y && nt(y.install) ? (c.add(y), y.install(b, ...v)) : nt(y) && (c.add(y), y(b, ...v))), b;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), b;
      },
      component(y, v) {
        return v ? (a.components[y] = v, b) : a.components[y];
      },
      directive(y, v) {
        return v ? (a.directives[y] = v, b) : a.directives[y];
      },
      mount(y, v, x) {
        if (!d) {
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, Bc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (ti(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, v) {
        return a.provides[y] = v, b;
      },
      runWithContext(y) {
        const v = ua;
        ua = b;
        try {
          return y();
        } finally {
          ua = v;
        }
      }
    };
    return b;
  };
}
let ua = null;
const mS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${zn(t)}Modifiers`] || e[`${Ao(t)}Modifiers`];
function gS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ct;
  let o = n;
  const a = t.startsWith("update:"), c = a && mS(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => tn(y) ? y.trim() : y)), c.number && (o = n.map(Id)));
  let u, d = r[u = Hu(t)] || // also try camelCase event handler (#2249)
  r[u = Hu(zn(t))];
  !d && a && (d = r[u = Hu(Ao(t))]), d && ti(
    d,
    e,
    6,
    o
  );
  const b = r[u + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, ti(
      b,
      e,
      6,
      o
    );
  }
}
const yS = /* @__PURE__ */ new WeakMap();
function vy(e, t, n = !1) {
  const r = n ? yS : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!nt(e)) {
    const d = (b) => {
      const y = vy(b, t, !0);
      y && (u = !0, En(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Nt(e) && r.set(e, null), null) : (Xe(a) ? a.forEach((d) => c[d] = null) : En(c, a), Nt(e) && r.set(e, c), c);
}
function Kc(e, t) {
  return !e || !Tc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, Ao(t)) || bt(e, t));
}
function Bm(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: u,
    emit: d,
    render: b,
    renderCache: y,
    props: v,
    data: x,
    setupState: N,
    ctx: k,
    inheritAttrs: P
  } = e, C = ac(e);
  let F, W;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, _ = V;
      F = Yr(
        b.call(
          _,
          V,
          y,
          v,
          N,
          x,
          k
        )
      ), W = u;
    } else {
      const V = t;
      F = Yr(
        V.length > 1 ? V(
          v,
          { attrs: u, slots: c, emit: d }
        ) : V(
          v,
          null
        )
      ), W = t.props ? u : bS(u);
    }
  } catch (V) {
    Ss.length = 0, zc(V, e, 1), F = De(ji);
  }
  let R = F;
  if (W && P !== !1) {
    const V = Object.keys(W), { shapeFlag: _ } = R;
    V.length && _ & 7 && (a && V.some(Dc) && (W = vS(
      W,
      a
    )), R = _a(R, W, !1, !0));
  }
  return n.dirs && (R = _a(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && zd(R, n.transition), F = R, ac(C), F;
}
const bS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vS = (e, t) => {
  const n = {};
  for (const r in e)
    (!Dc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function _S(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Um(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const x = y[v];
        if (_y(c, r, x) && !Kc(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Um(r, c, b) : !0 : !!c;
  return !1;
}
function Um(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (_y(t, e, a) && !Kc(n, a))
      return !0;
  }
  return !1;
}
function _y(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Nt(r) && Nt(o) ? !Od(r, o) : r !== o;
}
function wS({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const wy = {}, xy = () => Object.create(wy), Sy = (e) => Object.getPrototypeOf(e) === wy;
function xS(e, t, n, r = !1) {
  const o = {}, a = xy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ky(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ Cx(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function SS(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ yt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        let x = y[v];
        if (Kc(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (bt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const k = zn(x);
            o[k] = Kf(
              d,
              u,
              k,
              N,
              e,
              !1
            );
          }
        else
          N !== a[x] && (a[x] = N, b = !0);
      }
    }
  } else {
    ky(e, t, o, a) && (b = !0);
    let y;
    for (const v in u)
      (!t || // for camelCase
      !bt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Ao(v)) === v || !bt(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = Kf(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !bt(t, v)) && (delete a[v], b = !0);
  }
  b && mi(e.attrs, "set", "");
}
function ky(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ys(d))
        continue;
      const b = t[d];
      let y;
      o && bt(o, y = zn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Kc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ yt(n), b = u || Ct;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = Kf(
        o,
        d,
        v,
        b[v],
        e,
        !bt(b, v)
      );
    }
  }
  return c;
}
function Kf(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = bt(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && nt(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = Us(o);
          r = b[n] = d.call(
            null,
            t
          ), y();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    c[
      0
      /* shouldCast */
    ] && (a && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ao(n)) && (r = !0));
  }
  return r;
}
const kS = /* @__PURE__ */ new WeakMap();
function My(e, t, n = !1) {
  const r = n ? kS : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!nt(e)) {
    const y = (v) => {
      d = !0;
      const [x, N] = My(v, t, !0);
      En(c, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return Nt(e) && r.set(e, sa), sa;
  if (Xe(a))
    for (let y = 0; y < a.length; y++) {
      const v = zn(a[y]);
      Ym(v) && (c[v] = Ct);
    }
  else if (a)
    for (const y in a) {
      const v = zn(y);
      if (Ym(v)) {
        const x = a[y], N = c[v] = Xe(x) || nt(x) ? { type: x } : En({}, x), k = N.type;
        let P = !1, C = !0;
        if (Xe(k))
          for (let F = 0; F < k.length; ++F) {
            const W = k[F], R = nt(W) && W.name;
            if (R === "Boolean") {
              P = !0;
              break;
            } else R === "String" && (C = !1);
          }
        else
          P = nt(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = P, N[
          1
          /* shouldCastTrue */
        ] = C, (P || bt(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Nt(e) && r.set(e, b), b;
}
function Ym(e) {
  return e[0] !== "$" && !ys(e);
}
const jd = (e) => e === "_" || e === "_ctx" || e === "$stable", Hd = (e) => Xe(e) ? e.map(Yr) : [Yr(e)], MS = (e, t, n) => {
  if (t._n)
    return t;
  const r = ly((...o) => Hd(t(...o)), n);
  return r._c = !1, r;
}, Ny = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (jd(o)) continue;
    const a = e[o];
    if (nt(a))
      t[o] = MS(o, a, r);
    else if (a != null) {
      const c = Hd(a);
      t[o] = () => c;
    }
  }
}, Py = (e, t) => {
  const n = Hd(t);
  e.slots.default = () => n;
}, Ay = (e, t, n) => {
  for (const r in t)
    (n || !jd(r)) && (e[r] = t[r]);
}, NS = (e, t, n) => {
  const r = e.slots = xy();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Ay(r, t, n), n && V0(r, "_", o, !0)) : Ny(t, r);
  } else t && Py(e, t);
}, PS = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ct;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Ay(o, t, n) : (a = !t.$stable, Ny(t, o)), c = t;
  } else t && (Py(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !jd(u) && c[u] == null && delete o[u];
}, Bn = ES;
function AS(e) {
  return CS(e);
}
function CS(e, t) {
  const n = Vc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: y,
    parentNode: v,
    nextSibling: x,
    setScopeId: N = Jr,
    insertStaticContent: k
  } = e, P = ($, K, le, Se = null, be = null, _e = null, Ne = void 0, Ce = null, ke = !!K.dynamicChildren) => {
    if ($ === K)
      return;
    $ && !es($, K) && (Se = Ae($), Ee($, be, _e, !0), $ = null), K.patchFlag === -2 && (ke = !1, K.dynamicChildren = null);
    const { type: he, ref: Oe, shapeFlag: Ie } = K;
    switch (he) {
      case Wc:
        C($, K, le, Se);
        break;
      case ji:
        F($, K, le, Se);
        break;
      case Xu:
        $ == null && W(K, le, Se, Ne);
        break;
      case Be:
        xe(
          $,
          K,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
        break;
      default:
        Ie & 1 ? _(
          $,
          K,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke
        ) : Ie & 6 ? te(
          $,
          K,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke
        ) : (Ie & 64 || Ie & 128) && he.process(
          $,
          K,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke,
          mn
        );
    }
    Oe != null && be ? _s(Oe, $ && $.ref, _e, K || $, !K) : Oe == null && $ && $.ref != null && _s($.ref, null, _e, $, !0);
  }, C = ($, K, le, Se) => {
    if ($ == null)
      r(
        K.el = u(K.children),
        le,
        Se
      );
    else {
      const be = K.el = $.el;
      K.children !== $.children && b(be, K.children);
    }
  }, F = ($, K, le, Se) => {
    $ == null ? r(
      K.el = d(K.children || ""),
      le,
      Se
    ) : K.el = $.el;
  }, W = ($, K, le, Se) => {
    [$.el, $.anchor] = k(
      $.children,
      K,
      le,
      Se,
      $.el,
      $.anchor
    );
  }, R = ({ el: $, anchor: K }, le, Se) => {
    let be;
    for (; $ && $ !== K; )
      be = x($), r($, le, Se), $ = be;
    r(K, le, Se);
  }, V = ({ el: $, anchor: K }) => {
    let le;
    for (; $ && $ !== K; )
      le = x($), o($), $ = le;
    o(K);
  }, _ = ($, K, le, Se, be, _e, Ne, Ce, ke) => {
    if (K.type === "svg" ? Ne = "svg" : K.type === "math" && (Ne = "mathml"), $ == null)
      L(
        K,
        le,
        Se,
        be,
        _e,
        Ne,
        Ce,
        ke
      );
    else {
      const he = $.el && $.el._isVueCE ? $.el : null;
      try {
        he && he._beginPatch(), we(
          $,
          K,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, L = ($, K, le, Se, be, _e, Ne, Ce) => {
    let ke, he;
    const { props: Oe, shapeFlag: Ie, transition: Ve, dirs: He } = $;
    if (ke = $.el = c(
      $.type,
      _e,
      Oe && Oe.is,
      Oe
    ), Ie & 8 ? y(ke, $.children) : Ie & 16 && ce(
      $.children,
      ke,
      null,
      Se,
      be,
      Yu($, _e),
      Ne,
      Ce
    ), He && io($, null, Se, "created"), B(ke, $, $.scopeId, Ne, Se), Oe) {
      for (const ot in Oe)
        ot !== "value" && !ys(ot) && a(ke, ot, null, Oe[ot], _e, Se);
      "value" in Oe && a(ke, "value", null, Oe.value, _e), (he = Oe.onVnodeBeforeMount) && Hr(he, Se, $);
    }
    He && io($, null, Se, "beforeMount");
    const it = IS(be, Ve);
    it && Ve.beforeEnter(ke), r(ke, K, le), ((he = Oe && Oe.onVnodeMounted) || it || He) && Bn(() => {
      try {
        he && Hr(he, Se, $), it && Ve.enter(ke), He && io($, null, Se, "mounted");
      } finally {
      }
    }, be);
  }, B = ($, K, le, Se, be) => {
    if (le && N($, le), Se)
      for (let _e = 0; _e < Se.length; _e++)
        N($, Se[_e]);
    if (be) {
      let _e = be.subTree;
      if (K === _e || Ey(_e.type) && (_e.ssContent === K || _e.ssFallback === K)) {
        const Ne = be.vnode;
        B(
          $,
          Ne,
          Ne.scopeId,
          Ne.slotScopeIds,
          be.parent
        );
      }
    }
  }, ce = ($, K, le, Se, be, _e, Ne, Ce, ke = 0) => {
    for (let he = ke; he < $.length; he++) {
      const Oe = $[he] = Ce ? pi($[he]) : Yr($[he]);
      P(
        null,
        Oe,
        K,
        le,
        Se,
        be,
        _e,
        Ne,
        Ce
      );
    }
  }, we = ($, K, le, Se, be, _e, Ne) => {
    const Ce = K.el = $.el;
    let { patchFlag: ke, dynamicChildren: he, dirs: Oe } = K;
    ke |= $.patchFlag & 16;
    const Ie = $.props || Ct, Ve = K.props || Ct;
    let He;
    if (le && oo(le, !1), (He = Ve.onVnodeBeforeUpdate) && Hr(He, le, K, $), Oe && io(K, $, le, "beforeUpdate"), le && oo(le, !0), (Ie.innerHTML && Ve.innerHTML == null || Ie.textContent && Ve.textContent == null) && y(Ce, ""), he ? E(
      $.dynamicChildren,
      he,
      Ce,
      le,
      Se,
      Yu(K, be),
      _e
    ) : Ne || O(
      $,
      K,
      Ce,
      null,
      le,
      Se,
      Yu(K, be),
      _e,
      !1
    ), ke > 0) {
      if (ke & 16)
        z(Ce, Ie, Ve, le, be);
      else if (ke & 2 && Ie.class !== Ve.class && a(Ce, "class", null, Ve.class, be), ke & 4 && a(Ce, "style", Ie.style, Ve.style, be), ke & 8) {
        const it = K.dynamicProps;
        for (let ot = 0; ot < it.length; ot++) {
          const ft = it[ot], dt = Ie[ft], Rt = Ve[ft];
          (Rt !== dt || ft === "value") && a(Ce, ft, dt, Rt, be, le);
        }
      }
      ke & 1 && $.children !== K.children && y(Ce, K.children);
    } else !Ne && he == null && z(Ce, Ie, Ve, le, be);
    ((He = Ve.onVnodeUpdated) || Oe) && Bn(() => {
      He && Hr(He, le, K, $), Oe && io(K, $, le, "updated");
    }, Se);
  }, E = ($, K, le, Se, be, _e, Ne) => {
    for (let Ce = 0; Ce < K.length; Ce++) {
      const ke = $[Ce], he = K[Ce], Oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ke.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ke.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !es(ke, he) || // - In the case of a component, it could contain anything.
        ke.shapeFlag & 198) ? v(ke.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      P(
        ke,
        he,
        Oe,
        null,
        Se,
        be,
        _e,
        Ne,
        !0
      );
    }
  }, z = ($, K, le, Se, be) => {
    if (K !== le) {
      if (K !== Ct)
        for (const _e in K)
          !ys(_e) && !(_e in le) && a(
            $,
            _e,
            K[_e],
            null,
            be,
            Se
          );
      for (const _e in le) {
        if (ys(_e)) continue;
        const Ne = le[_e], Ce = K[_e];
        Ne !== Ce && _e !== "value" && a($, _e, Ce, Ne, be, Se);
      }
      "value" in le && a($, "value", K.value, le.value, be);
    }
  }, xe = ($, K, le, Se, be, _e, Ne, Ce, ke) => {
    const he = K.el = $ ? $.el : u(""), Oe = K.anchor = $ ? $.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: Ve, slotScopeIds: He } = K;
    He && (Ce = Ce ? Ce.concat(He) : He), $ == null ? (r(he, le, Se), r(Oe, le, Se), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      K.children || [],
      le,
      Oe,
      be,
      _e,
      Ne,
      Ce,
      ke
    )) : Ie > 0 && Ie & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    $.dynamicChildren && $.dynamicChildren.length === Ve.length ? (E(
      $.dynamicChildren,
      Ve,
      le,
      be,
      _e,
      Ne,
      Ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (K.key != null || be && K === be.subTree) && Cy(
      $,
      K,
      !0
      /* shallow */
    )) : O(
      $,
      K,
      le,
      Oe,
      be,
      _e,
      Ne,
      Ce,
      ke
    );
  }, te = ($, K, le, Se, be, _e, Ne, Ce, ke) => {
    K.slotScopeIds = Ce, $ == null ? K.shapeFlag & 512 ? be.ctx.activate(
      K,
      le,
      Se,
      Ne,
      ke
    ) : J(
      K,
      le,
      Se,
      be,
      _e,
      Ne,
      ke
    ) : q($, K, ke);
  }, J = ($, K, le, Se, be, _e, Ne) => {
    const Ce = $.component = VS(
      $,
      Se,
      be
    );
    if (dy($) && (Ce.ctx.renderer = mn), zS(Ce, !1, Ne), Ce.asyncDep) {
      if (be && be.registerDep(Ce, U, Ne), !$.el) {
        const ke = Ce.subTree = De(ji);
        F(null, ke, K, le), $.placeholder = ke.el;
      }
    } else
      U(
        Ce,
        $,
        K,
        le,
        be,
        _e,
        Ne
      );
  }, q = ($, K, le) => {
    const Se = K.component = $.component;
    if (_S($, K, le))
      if (Se.asyncDep && !Se.asyncResolved) {
        j(Se, K, le);
        return;
      } else
        Se.next = K, Se.update();
    else
      K.el = $.el, Se.vnode = K;
  }, U = ($, K, le, Se, be, _e, Ne) => {
    const Ce = () => {
      if ($.isMounted) {
        let { next: Ie, bu: Ve, u: He, parent: it, vnode: ot } = $;
        {
          const Tn = Iy($);
          if (Tn) {
            Ie && (Ie.el = ot.el, j($, Ie, Ne)), Tn.asyncDep.then(() => {
              Bn(() => {
                $.isUnmounted || he();
              }, be);
            });
            return;
          }
        }
        let ft = Ie, dt;
        oo($, !1), Ie ? (Ie.el = ot.el, j($, Ie, Ne)) : Ie = ot, Ve && Vl(Ve), (dt = Ie.props && Ie.props.onVnodeBeforeUpdate) && Hr(dt, it, Ie, ot), oo($, !0);
        const Rt = Bm($), Fn = $.subTree;
        $.subTree = Rt, P(
          Fn,
          Rt,
          // parent may have changed if it's in a teleport
          v(Fn.el),
          // anchor may have changed if it's in a fragment
          Ae(Fn),
          $,
          be,
          _e
        ), Ie.el = Rt.el, ft === null && wS($, Rt.el), He && Bn(He, be), (dt = Ie.props && Ie.props.onVnodeUpdated) && Bn(
          () => Hr(dt, it, Ie, ot),
          be
        );
      } else {
        let Ie;
        const { el: Ve, props: He } = K, { bm: it, m: ot, parent: ft, root: dt, type: Rt } = $, Fn = ws(K);
        oo($, !1), it && Vl(it), !Fn && (Ie = He && He.onVnodeBeforeMount) && Hr(Ie, ft, K), oo($, !0);
        {
          dt.ce && dt.ce._hasShadowRoot() && dt.ce._injectChildStyle(
            Rt,
            $.parent ? $.parent.type : void 0
          );
          const Tn = $.subTree = Bm($);
          P(
            null,
            Tn,
            le,
            Se,
            $,
            be,
            _e
          ), K.el = Tn.el;
        }
        if (ot && Bn(ot, be), !Fn && (Ie = He && He.onVnodeMounted)) {
          const Tn = K;
          Bn(
            () => Hr(Ie, ft, Tn),
            be
          );
        }
        (K.shapeFlag & 256 || ft && ws(ft.vnode) && ft.vnode.shapeFlag & 256) && $.a && Bn($.a, be), $.isMounted = !0, K = le = Se = null;
      }
    };
    $.scope.on();
    const ke = $.effect = new H0(Ce);
    $.scope.off();
    const he = $.update = ke.run.bind(ke), Oe = $.job = ke.runIfDirty.bind(ke);
    Oe.i = $, Oe.id = $.uid, ke.scheduler = () => $d(Oe), oo($, !0), he();
  }, j = ($, K, le) => {
    K.component = $;
    const Se = $.vnode.props;
    $.vnode = K, $.next = null, SS($, K.props, Se, le), PS($, K.children, le), _i(), Vm($), wi();
  }, O = ($, K, le, Se, be, _e, Ne, Ce, ke = !1) => {
    const he = $ && $.children, Oe = $ ? $.shapeFlag : 0, Ie = K.children, { patchFlag: Ve, shapeFlag: He } = K;
    if (Ve > 0) {
      if (Ve & 128) {
        Q(
          he,
          Ie,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
        return;
      } else if (Ve & 256) {
        oe(
          he,
          Ie,
          le,
          Se,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
        return;
      }
    }
    He & 8 ? (Oe & 16 && gt(he, be, _e), Ie !== he && y(le, Ie)) : Oe & 16 ? He & 16 ? Q(
      he,
      Ie,
      le,
      Se,
      be,
      _e,
      Ne,
      Ce,
      ke
    ) : gt(he, be, _e, !0) : (Oe & 8 && y(le, ""), He & 16 && ce(
      Ie,
      le,
      Se,
      be,
      _e,
      Ne,
      Ce,
      ke
    ));
  }, oe = ($, K, le, Se, be, _e, Ne, Ce, ke) => {
    $ = $ || sa, K = K || sa;
    const he = $.length, Oe = K.length, Ie = Math.min(he, Oe);
    let Ve;
    for (Ve = 0; Ve < Ie; Ve++) {
      const He = K[Ve] = ke ? pi(K[Ve]) : Yr(K[Ve]);
      P(
        $[Ve],
        He,
        le,
        null,
        be,
        _e,
        Ne,
        Ce,
        ke
      );
    }
    he > Oe ? gt(
      $,
      be,
      _e,
      !0,
      !1,
      Ie
    ) : ce(
      K,
      le,
      Se,
      be,
      _e,
      Ne,
      Ce,
      ke,
      Ie
    );
  }, Q = ($, K, le, Se, be, _e, Ne, Ce, ke) => {
    let he = 0;
    const Oe = K.length;
    let Ie = $.length - 1, Ve = Oe - 1;
    for (; he <= Ie && he <= Ve; ) {
      const He = $[he], it = K[he] = ke ? pi(K[he]) : Yr(K[he]);
      if (es(He, it))
        P(
          He,
          it,
          le,
          null,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
      else
        break;
      he++;
    }
    for (; he <= Ie && he <= Ve; ) {
      const He = $[Ie], it = K[Ve] = ke ? pi(K[Ve]) : Yr(K[Ve]);
      if (es(He, it))
        P(
          He,
          it,
          le,
          null,
          be,
          _e,
          Ne,
          Ce,
          ke
        );
      else
        break;
      Ie--, Ve--;
    }
    if (he > Ie) {
      if (he <= Ve) {
        const He = Ve + 1, it = He < Oe ? K[He].el : Se;
        for (; he <= Ve; )
          P(
            null,
            K[he] = ke ? pi(K[he]) : Yr(K[he]),
            le,
            it,
            be,
            _e,
            Ne,
            Ce,
            ke
          ), he++;
      }
    } else if (he > Ve)
      for (; he <= Ie; )
        Ee($[he], be, _e, !0), he++;
    else {
      const He = he, it = he, ot = /* @__PURE__ */ new Map();
      for (he = it; he <= Ve; he++) {
        const Ge = K[he] = ke ? pi(K[he]) : Yr(K[he]);
        Ge.key != null && ot.set(Ge.key, he);
      }
      let ft, dt = 0;
      const Rt = Ve - it + 1;
      let Fn = !1, Tn = 0;
      const ri = new Array(Rt);
      for (he = 0; he < Rt; he++) ri[he] = 0;
      for (he = He; he <= Ie; he++) {
        const Ge = $[he];
        if (dt >= Rt) {
          Ee(Ge, be, _e, !0);
          continue;
        }
        let nn;
        if (Ge.key != null)
          nn = ot.get(Ge.key);
        else
          for (ft = it; ft <= Ve; ft++)
            if (ri[ft - it] === 0 && es(Ge, K[ft])) {
              nn = ft;
              break;
            }
        nn === void 0 ? Ee(Ge, be, _e, !0) : (ri[nn - it] = he + 1, nn >= Tn ? Tn = nn : Fn = !0, P(
          Ge,
          K[nn],
          le,
          null,
          be,
          _e,
          Ne,
          Ce,
          ke
        ), dt++);
      }
      const h = Fn ? OS(ri) : sa;
      for (ft = h.length - 1, he = Rt - 1; he >= 0; he--) {
        const Ge = it + he, nn = K[Ge], Jt = K[Ge + 1], Mi = Ge + 1 < Oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Jt.el || Oy(Jt)
        ) : Se;
        ri[he] === 0 ? P(
          null,
          nn,
          le,
          Mi,
          be,
          _e,
          Ne,
          Ce,
          ke
        ) : Fn && (ft < 0 || he !== h[ft] ? Pe(nn, le, Mi, 2) : ft--);
      }
    }
  }, Pe = ($, K, le, Se, be = null) => {
    const { el: _e, type: Ne, transition: Ce, children: ke, shapeFlag: he } = $;
    if (he & 6) {
      Pe($.component.subTree, K, le, Se);
      return;
    }
    if (he & 128) {
      $.suspense.move(K, le, Se);
      return;
    }
    if (he & 64) {
      Ne.move($, K, le, mn);
      return;
    }
    if (Ne === Be) {
      r(_e, K, le);
      for (let Ie = 0; Ie < ke.length; Ie++)
        Pe(ke[Ie], K, le, Se);
      r($.anchor, K, le);
      return;
    }
    if (Ne === Xu) {
      R($, K, le);
      return;
    }
    if (Se !== 2 && he & 1 && Ce)
      if (Se === 0)
        Ce.beforeEnter(_e), r(_e, K, le), Bn(() => Ce.enter(_e), be);
      else {
        const { leave: Ie, delayLeave: Ve, afterLeave: He } = Ce, it = () => {
          $.ctx.isUnmounted ? o(_e) : r(_e, K, le);
        }, ot = () => {
          _e._isLeaving && _e[Ux](
            !0
            /* cancelled */
          ), Ie(_e, () => {
            it(), He && He();
          });
        };
        Ve ? Ve(_e, it, ot) : ot();
      }
    else
      r(_e, K, le);
  }, Ee = ($, K, le, Se = !1, be = !1) => {
    const {
      type: _e,
      props: Ne,
      ref: Ce,
      children: ke,
      dynamicChildren: he,
      shapeFlag: Oe,
      patchFlag: Ie,
      dirs: Ve,
      cacheIndex: He,
      memo: it
    } = $;
    if (Ie === -2 && (be = !1), Ce != null && (_i(), _s(Ce, null, le, $, !0), wi()), He != null && (K.renderCache[He] = void 0), Oe & 256) {
      K.ctx.deactivate($);
      return;
    }
    const ot = Oe & 1 && Ve, ft = !ws($);
    let dt;
    if (ft && (dt = Ne && Ne.onVnodeBeforeUnmount) && Hr(dt, K, $), Oe & 6)
      D($.component, le, Se);
    else {
      if (Oe & 128) {
        $.suspense.unmount(le, Se);
        return;
      }
      ot && io($, null, K, "beforeUnmount"), Oe & 64 ? $.type.remove(
        $,
        K,
        le,
        mn,
        Se
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_e !== Be || Ie > 0 && Ie & 64) ? gt(
        he,
        K,
        le,
        !1,
        !0
      ) : (_e === Be && Ie & 384 || !be && Oe & 16) && gt(ke, K, le), Se && ht($);
    }
    const Rt = it != null && He == null;
    (ft && (dt = Ne && Ne.onVnodeUnmounted) || ot || Rt) && Bn(() => {
      dt && Hr(dt, K, $), ot && io($, null, K, "unmounted"), Rt && ($.el = null);
    }, le);
  }, ht = ($) => {
    const { type: K, el: le, anchor: Se, transition: be } = $;
    if (K === Be) {
      Ye(le, Se);
      return;
    }
    if (K === Xu) {
      V($);
      return;
    }
    const _e = () => {
      o(le), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if ($.shapeFlag & 1 && be && !be.persisted) {
      const { leave: Ne, delayLeave: Ce } = be, ke = () => Ne(le, _e);
      Ce ? Ce($.el, _e, ke) : ke();
    } else
      _e();
  }, Ye = ($, K) => {
    let le;
    for (; $ !== K; )
      le = x($), o($), $ = le;
    o(K);
  }, D = ($, K, le) => {
    const { bum: Se, scope: be, job: _e, subTree: Ne, um: Ce, m: ke, a: he } = $;
    Xm(ke), Xm(he), Se && Vl(Se), be.stop(), _e && (_e.flags |= 8, Ee(Ne, $, K, le)), Ce && Bn(Ce, K), Bn(() => {
      $.isUnmounted = !0;
    }, K);
  }, gt = ($, K, le, Se = !1, be = !1, _e = 0) => {
    for (let Ne = _e; Ne < $.length; Ne++)
      Ee($[Ne], K, le, Se, be);
  }, Ae = ($) => {
    if ($.shapeFlag & 6)
      return Ae($.component.subTree);
    if ($.shapeFlag & 128)
      return $.suspense.next();
    const K = x($.anchor || $.el), le = K && K[Wx];
    return le ? x(le) : K;
  };
  let xt = !1;
  const Tt = ($, K, le) => {
    let Se;
    $ == null ? K._vnode && (Ee(K._vnode, null, null, !0), Se = K._vnode.component) : P(
      K._vnode || null,
      $,
      K,
      null,
      null,
      null,
      le
    ), K._vnode = $, xt || (xt = !0, Vm(Se), oy(), xt = !1);
  }, mn = {
    p: P,
    um: Ee,
    m: Pe,
    r: ht,
    mt: J,
    mc: ce,
    pc: O,
    pbc: E,
    n: Ae,
    o: e
  };
  return {
    render: Tt,
    hydrate: void 0,
    createApp: hS(Tt)
  };
}
function Yu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function oo({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function IS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cy(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Xe(r) && Xe(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = pi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && Cy(c, u)), u.type === Wc && (u.patchFlag === -1 && (u = o[a] = pi(u)), u.el = c.el), u.type === ji && !u.el && (u.el = c.el);
    }
}
function OS(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, u;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        u = a + c >> 1, e[n[u]] < b ? a = u + 1 : c = u;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function Iy(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Iy(t);
}
function Xm(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oy(t.subTree) : null;
}
const Ey = (e) => e.__isSuspense;
function ES(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : zx(e);
}
const Be = /* @__PURE__ */ Symbol.for("v-fgt"), Wc = /* @__PURE__ */ Symbol.for("v-txt"), ji = /* @__PURE__ */ Symbol.for("v-cmt"), Xu = /* @__PURE__ */ Symbol.for("v-stc"), Ss = [];
let or = null;
function ae(e = !1) {
  Ss.push(or = e ? null : []);
}
function FS() {
  Ss.pop(), or = Ss[Ss.length - 1] || null;
}
let Os = 1;
function qm(e, t = !1) {
  Os += e, e < 0 && or && t && (or.hasOnce = !0);
}
function Fy(e) {
  return e.dynamicChildren = Os > 0 ? or || sa : null, FS(), Os > 0 && or && or.push(e), e;
}
function fe(e, t, n, r, o, a) {
  return Fy(
    X(
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
function br(e, t, n, r, o) {
  return Fy(
    De(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Ty(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function es(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Dy = ({ key: e }) => e ?? null, zl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tn(e) || /* @__PURE__ */ On(e) || nt(e) ? { i: ir, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, o = null, a = e === Be ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Dy(t),
    ref: t && zl(t),
    scopeId: sy,
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
    ctx: ir
  };
  return u ? (Gd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= tn(n) ? 8 : 16), Os > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  or && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && or.push(d), d;
}
const De = TS;
function TS(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === my) && (e = ji), Ty(e)) {
    const u = _a(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Gd(u, n), Os > 0 && !a && or && (u.shapeFlag & 6 ? or[or.indexOf(e)] = u : or.push(u)), u.patchFlag = -2, u;
  }
  if (WS(e) && (e = e.__vccOpts), t) {
    t = DS(t);
    let { class: u, style: d } = t;
    u && !tn(u) && (t.class = ct(u)), Nt(d) && (/* @__PURE__ */ Vd(d) && !Xe(d) && (d = En({}, d)), t.style = Mt(d));
  }
  const c = tn(e) ? 1 : Ey(e) ? 128 : Bx(e) ? 64 : Nt(e) ? 4 : nt(e) ? 2 : 0;
  return X(
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
function DS(e) {
  return e ? /* @__PURE__ */ Vd(e) || Sy(e) ? En({}, e) : e : null;
}
function _a(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? hi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Dy(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Xe(a) ? a.concat(zl(t)) : [a, zl(t)] : zl(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Be ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && _a(e.ssContent),
    ssFallback: e.ssFallback && _a(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && zd(
    y,
    d.clone(y)
  ), y;
}
function cs(e = " ", t = 0) {
  return De(Wc, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (ae(), br(ji, null, e)) : De(ji, null, e);
}
function Yr(e) {
  return e == null || typeof e == "boolean" ? De(ji) : Xe(e) ? De(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ty(e) ? pi(e) : De(Wc, null, String(e));
}
function pi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _a(e);
}
function Gd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Gd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Sy(t) ? t._ctx = ir : o === 3 && ir && (ir.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else nt(t) ? (t = { default: t, _ctx: ir }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [cs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function hi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ct([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (Tc(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Xe(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Hr(e, t, n, r = null) {
  ti(e, t, 7, [
    n,
    r
  ]);
}
const LS = by();
let RS = 0;
function VS(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || LS, a = {
    uid: RS++,
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
    scope: new cx(
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
    propsOptions: My(r, o),
    emitsOptions: vy(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ct,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ct,
    data: Ct,
    props: Ct,
    attrs: Ct,
    slots: Ct,
    refs: Ct,
    setupState: Ct,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = gS.bind(null, a), e.ce && e.ce(a), a;
}
let Cn = null;
const $S = () => Cn || ir;
let cc, Wf;
{
  const e = Vc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  cc = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Cn = n
  ), Wf = t(
    "__VUE_SSR_SETTERS__",
    (n) => Es = n
  );
}
const Us = (e) => {
  const t = Cn;
  return cc(e), e.scope.on(), () => {
    e.scope.off(), cc(t);
  };
}, Jm = () => {
  Cn && Cn.scope.off(), cc(null);
};
function Ly(e) {
  return e.vnode.shapeFlag & 4;
}
let Es = !1;
function zS(e, t = !1, n = !1) {
  t && Wf(t);
  const { props: r, children: o } = e.vnode, a = Ly(e);
  xS(e, r, a, t), NS(e, o, n || t);
  const c = a ? jS(e, t) : void 0;
  return t && Wf(!1), c;
}
function jS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sS);
  const { setup: r } = n;
  if (r) {
    _i();
    const o = e.setupContext = r.length > 1 ? GS(e) : null, a = Us(e), c = Ws(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = D0(c);
    if (wi(), a(), (u || e.sp) && !ws(e) && fy(e), u) {
      if (c.then(Jm, Jm), t)
        return c.then((d) => {
          Zm(e, d);
        }).catch((d) => {
          zc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Zm(e, c);
  } else
    Ry(e);
}
function Zm(e, t, n) {
  nt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = ny(t)), Ry(e);
}
function Ry(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Jr);
  {
    const o = Us(e);
    _i();
    try {
      lS(e);
    } finally {
      wi(), o();
    }
  }
}
const HS = {
  get(e, t) {
    return An(e, "get", ""), e[t];
  }
};
function GS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, HS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ny(Ix(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xs)
        return xs[n](e);
    },
    has(t, n) {
      return n in t || n in xs;
    }
  })) : e.proxy;
}
function KS(e, t = !0) {
  return nt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function WS(e) {
  return nt(e) && "__vccOpts" in e;
}
const pt = (e, t) => /* @__PURE__ */ Dx(e, t, Es), BS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bf;
const Qm = typeof window < "u" && window.trustedTypes;
if (Qm)
  try {
    Bf = /* @__PURE__ */ Qm.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vy = Bf ? (e) => Bf.createHTML(e) : (e) => e, US = "http://www.w3.org/2000/svg", YS = "http://www.w3.org/1998/Math/MathML", fi = typeof document < "u" ? document : null, eg = fi && /* @__PURE__ */ fi.createElement("template"), XS = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? fi.createElementNS(US, e) : t === "mathml" ? fi.createElementNS(YS, e) : n ? fi.createElement(e, { is: n }) : fi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => fi.createTextNode(e),
  createComment: (e) => fi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fi.querySelector(e),
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
      eg.innerHTML = Vy(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = eg.content;
      if (r === "svg" || r === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, qS = /* @__PURE__ */ Symbol("_vtc");
function JS(e, t, n) {
  const r = e[qS];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const uc = /* @__PURE__ */ Symbol("_vod"), $y = /* @__PURE__ */ Symbol("_vsh"), Po = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[uc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ts(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ts(e, !0), r.enter(e)) : r.leave(e, () => {
      ts(e, !1);
    }) : ts(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ts(e, t);
  }
};
function ts(e, t) {
  e.style.display = t ? e[uc] : "none", e[$y] = !t;
}
const ZS = /* @__PURE__ */ Symbol(""), QS = /(?:^|;)\s*display\s*:/;
function ek(e, t, n) {
  const r = e.style, o = tn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (tn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && jl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && jl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), jl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[ZS];
      c && (n += ";" + c), r.cssText = n, a = QS.test(n);
    }
  } else t && e.removeAttribute("style");
  uc in e && (e[uc] = a ? r.display : "", e[$y] && (r.display = "none"));
}
const tg = /\s*!important$/;
function jl(e, t, n) {
  if (Xe(n))
    n.forEach((r) => jl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = tk(e, t);
    tg.test(n) ? e.setProperty(
      Ao(r),
      n.replace(tg, ""),
      "important"
    ) : e[r] = n;
  }
}
const ng = ["Webkit", "Moz", "ms"], qu = {};
function tk(e, t) {
  const n = qu[t];
  if (n)
    return n;
  let r = zn(t);
  if (r !== "filter" && r in e)
    return qu[t] = r;
  r = Rc(r);
  for (let o = 0; o < ng.length; o++) {
    const a = ng[o] + r;
    if (a in e)
      return qu[t] = a;
  }
  return t;
}
const rg = "http://www.w3.org/1999/xlink";
function ig(e, t, n, r, o, a = sx(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rg, t.slice(6, t.length)) : e.setAttributeNS(rg, t, n) : n == null || a && !$0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ei(n) ? String(n) : n
  );
}
function og(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vy(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = $0(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function ta(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function nk(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ag = /* @__PURE__ */ Symbol("_vei");
function rk(e, t, n, r, o = null) {
  const a = e[ag] || (e[ag] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = ik(t);
    if (r) {
      const b = a[t] = sk(
        r,
        o
      );
      ta(e, u, b, d);
    } else c && (nk(e, u, c, d), a[t] = void 0);
  }
}
const sg = /(?:Once|Passive|Capture)$/;
function ik(e) {
  let t;
  if (sg.test(e)) {
    t = {};
    let r;
    for (; r = e.match(sg); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ao(e.slice(2)), t];
}
let Ju = 0;
const ok = /* @__PURE__ */ Promise.resolve(), ak = () => Ju || (ok.then(() => Ju = 0), Ju = Date.now());
function sk(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ti(
      lk(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = ak(), n;
}
function lk(e, t) {
  if (Xe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const lg = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ck = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? JS(e, r, c) : t === "style" ? ek(e, n, r) : Tc(t) ? Dc(t) || rk(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : uk(e, t, r, c)) ? (og(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ig(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fk(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tn(r))) ? og(e, zn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ig(e, t, r, c));
};
function uk(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && lg(t) && nt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return lg(t) && tn(n) ? !1 : t in e;
}
function fk(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = zn(t);
  return Array.isArray(n) ? n.some((o) => zn(o) === r) : Object.keys(n).some((o) => zn(o) === r);
}
const cg = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (n) => Vl(t, n) : t;
};
function dk(e) {
  e.target.composing = !0;
}
function ug(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Zu = /* @__PURE__ */ Symbol("_assign");
function fg(e, t, n) {
  return t && (e = e.trim()), n && (e = Id(e)), e;
}
const dg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Zu] = cg(o);
    const a = r || o.props && o.props.type === "number";
    ta(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Zu](fg(e.value, n, a));
    }), (n || a) && ta(e, "change", () => {
      e.value = fg(e.value, n, a);
    }), t || (ta(e, "compositionstart", dk), ta(e, "compositionend", ug), ta(e, "change", ug));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Zu] = cg(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Id(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, pk = ["ctrl", "shift", "alt", "meta"], hk = {
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
  exact: (e, t) => pk.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ft = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = hk[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, mk = /* @__PURE__ */ En({ patchProp: ck }, XS);
let pg;
function gk() {
  return pg || (pg = AS(mk));
}
const Kd = ((...e) => {
  const t = gk().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = bk(r);
    if (!o) return;
    const a = t._component;
    !nt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, yk(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function yk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bk(e) {
  return tn(e) ? document.querySelector(e) : e;
}
function na(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function vk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hg(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let x = 0; x < r; x += 1)
      a[(v * r + x) * 4 + 3] <= t || (x < c && (c = x), v < u && (u = v), x > d && (d = x), v > b && (b = v));
  return d < c || b < u ? null : {
    minX: c,
    minY: u,
    maxX: d,
    maxY: b,
    width: d - c + 1,
    height: b - u + 1,
    aspect: Number(((d - c + 1) / Math.max(1, b - u + 1)).toFixed(4))
  };
}
function Wd(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function $i(e, t, n) {
  if (!e) return na(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ut(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Pn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let Qu = null, ef = null, mg = null, gg = null, Bt = null, ns = null;
function _k() {
  if (ef) return ef;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), ef = n, n;
}
function tf(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Qu = $i(Qu, n, r);
  const o = Qu;
  Ut(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", gg !== o.ctx && (mg = o.ctx.createPattern(_k(), "repeat"), gg = o.ctx), o.ctx.fillStyle = mg, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function wk(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function xk(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Sk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function kk(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const $t = /* @__PURE__ */ new Map(), Bd = 128;
function Mk(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if ($t.has(d)) {
    const W = $t.get(d);
    return $t.delete(d), $t.set(d, W), W;
  }
  $t.size >= Bd && $t.delete($t.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = Wd(b, b), x = v.getContext("2d"), N = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, C = `rgba(${n},${r},${o},0)`, F = x.createRadialGradient(y, y, N, y, y, k);
  return F.addColorStop(0, P), F.addColorStop(1, C), x.fillStyle = F, x.fillRect(0, 0, b, b), $t.set(d, v), v;
}
function Nk(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), C = `chisel:${v}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if ($t.has(C)) {
    const ce = $t.get(C);
    return $t.delete(C), $t.set(C, ce), ce;
  }
  $t.size >= Bd && $t.delete($t.keys().next().value);
  const F = Wd(v, x), W = F.getContext("2d"), R = W.createImageData(v, x), V = R.data, _ = Math.max(0, e - t), L = Math.max(0, Math.min(1, n)), B = 1 + N;
  for (let ce = 0; ce < x; ce++)
    for (let we = 0; we < v; we++) {
      const E = we + 0.5 - e, z = ce + 0.5 - t, xe = Math.max(Math.abs(E) - _, 0), J = Math.hypot(xe, z) / t;
      if (J >= 1) continue;
      const q = J <= L ? 1 : Math.max(0, (1 - J) / Math.max(1e-4, 1 - L)), U = 1 - J, j = 1 + N * (1 - U) * (1 - U), O = 1 - k * U * U, oe = j * O / B;
      let Q = 1;
      if (P > 0) {
        const ht = Math.floor((z + t) / 1.5), Ye = Math.floor((E + e) / 8), D = wo(fa(ht * 41 + 500, Ye * 19 + 300));
        Q = 1 - P * 0.42 * D;
      }
      const Pe = Math.round(255 * Math.min(1, y * q * oe * Q));
      if (Pe <= 0) continue;
      const Ee = (ce * v + we) * 4;
      V[Ee] = u, V[Ee + 1] = d, V[Ee + 2] = b, V[Ee + 3] = Pe;
    }
  return W.putImageData(R, 0, 0), $t.set(C, F), F;
}
function fa(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function wo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Pk(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const x = wo(fa(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), P = Ak(e, t, u, d, n, r), C = a * 0.55;
  if (P < C) return 0;
  const W = 0.45 + 0.55 * ((P - C) / Math.max(1e-4, 1 - C));
  return Math.round(255 * Math.min(1, c * k * W));
}
function Ak(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = wo(fa(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = wo(fa(b * 23 + 800, y * 29 + 500)), x = wo(fa(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + x * 0.15;
}
function Ck(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if ($t.has(x)) {
    const W = $t.get(x);
    return $t.delete(x), $t.set(x, W), W;
  }
  $t.size >= Bd && $t.delete($t.keys().next().value);
  const N = Wd(b, y), k = N.getContext("2d"), P = k.createImageData(b, y), C = P.data, F = Math.max(0, Math.min(1, n));
  for (let W = 0; W < y; W++)
    for (let R = 0; R < b; R++) {
      const V = Pk(R, W, e, t, F, v, d);
      if (V <= 0) continue;
      const _ = (W * b + R) * 4;
      C[_] = a, C[_ + 1] = c, C[_ + 2] = u, C[_ + 3] = V;
    }
  return k.putImageData(P, 0, 0), $t.set(x, N), N;
}
function zy(e, t, n) {
  var P, C;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = Sk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Ik(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = kk(t, o), y = String(((C = t == null ? void 0 : t.targetSpace) == null ? void 0 : C.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const F = o * u, W = o, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = Nk(F, W, a, c, R, V, _);
  } else if (r === "crayon") {
    const F = o * u, W = o, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = Ck(F, W, a, c, R);
  } else
    k = Mk(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function Ik(e) {
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
function Ok(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function yg(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function Ud(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, x = fa(t, n);
    for (let N = 0; N < y; N++) {
      const k = wo(x + N * 2) * Math.PI * 2, P = Math.sqrt(wo(x + N * 2 + 1)) * v, C = t + Math.cos(k) * P, F = n + Math.sin(k) * P, W = Math.max(0.5, e.radiusPx * o * 0.48), R = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, _ = W * e.aspect * V;
      yg(e, C, F, W, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  yg(e, t, n, a, d);
}
function bg(e, t, n) {
  const r = xk(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = zy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const k = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (Ud(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? v = Fs(c, y.x, y.y, k.x, k.y, v) : v = fc(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Fs(c, y.x, y.y, b.x, b.y, v) : fc(c, d, y, b, b, v), e.restore();
}
function Hl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = Ok(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = wk(r[x]);
    let k = Number(N.x || 0) * o;
    x > 0 && Math.abs(k - u[x - 1].x) > o * 0.5 && (k += k < u[x - 1].x ? o : -o), u.push({ x: k, y: Number(N.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function y(x) {
    e.beginPath(), e.moveTo(u[0].x + x, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + x, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function Sl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Hl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? bg(e, t, n) : (ns = $i(ns, n.width, n.height), Ut(ns), bg(ns.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(ns.canvas, 0, 0), e.restore());
}
function ao(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Fs(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    Ud(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function fc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, x = v + d, N = x + b, k = x - v, P = 16;
  let C = a, F = n.x, W = n.y;
  for (let R = 1; R <= P; R++) {
    const V = v + k * R / P, _ = ((v - V) * t.x + (V - y) * n.x) / (v - y), L = ((v - V) * t.y + (V - y) * n.y) / (v - y), B = ((x - V) * n.x + (V - v) * r.x) / (x - v), ce = ((x - V) * n.y + (V - v) * r.y) / (x - v), we = ((N - V) * r.x + (V - x) * o.x) / (N - x), E = ((N - V) * r.y + (V - x) * o.y) / (N - x), z = ((x - V) * _ + (V - y) * B) / (x - y), xe = ((x - V) * L + (V - y) * ce) / (x - y), te = ((N - V) * B + (V - v) * we) / (N - v), J = ((N - V) * ce + (V - v) * E) / (N - v), q = ((x - V) * z + (V - v) * te) / (x - v), U = ((x - V) * xe + (V - v) * J) / (x - v);
    C = Fs(e, F, W, q, U, C), F = q, W = U;
  }
  return C;
}
function Ek(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = zy(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), C = String((r == null ? void 0 : r.toolKind) || "") === "eraser", F = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Ud(N, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: P,
      distSinceStamp: 0,
      isEraser: C,
      layerKind: F,
      pointCount: 1
    }, Pn(e);
    return;
  }
  const y = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = Fs(x, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = fc(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, Pn(e);
}
function Uf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = na(t, n), c = {
    descriptor: r,
    committedMask: na(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: na(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, d = na(t, n);
  let b = null, y = "", v = null, x = null, N = null;
  function k(te) {
    return {
      actionGroupId: te,
      descriptor: r,
      committedPaint: na(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function P(te) {
    let J = o.get(te);
    return J || (J = k(te), o.set(te, J)), J;
  }
  function C(te) {
    return y === "mask" ? c : b ? P(b) : u;
  }
  function F(te) {
    var oe;
    const J = !v || v.length !== te.length || te.some((Q, Pe) => Q !== v[Pe]), q = y === "paint" && ((oe = b ? o.get(b) : u) == null ? void 0 : oe.activeStroke) || null;
    let U = c.displayDirty || u.displayDirty || J;
    for (const Q of te) {
      const Pe = o.get(Q);
      if (Pe != null && Pe.displayDirty) {
        U = !0;
        break;
      }
    }
    if (q && (U = !0), !U) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const Q of te) {
      const Pe = o.get(Q);
      Pe && (Pe.displayDirty = !1);
    }
    v = [...te];
    const j = d.ctx;
    Ut(d);
    const O = !!(q != null && q.isEraser);
    for (const Q of te) {
      const Pe = o.get(Q);
      if (!Pe) continue;
      const ht = b === Pe.actionGroupId && y === "paint" ? Pe.activeStroke : null;
      if (O)
        Bt = $i(Bt, t, n), Ut(Bt), Bt.ctx.drawImage(Pe.committedPaint.canvas, 0, 0), ao(Bt.ctx, a.canvas), j.drawImage(Bt.canvas, 0, 0);
      else if (j.drawImage(Pe.committedPaint.canvas, 0, 0), ht) {
        const Ye = Pe.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ht.strokeOpacity ?? 1));
        j.save(), j.globalAlpha = Ye, j.drawImage(a.canvas, 0, 0), j.restore();
      }
    }
  }
  function W(te) {
    var q, U, j, O, oe;
    for (const Q of o.values())
      Ut(Q.committedPaint), Ut(Q.currentStroke), Q.activeStroke = null, Pn(Q);
    Ut(c.committedMask), Ut(c.currentStroke), c.activeStroke = null, c.painted = !1, Pn(c), Pn(u), v = null;
    const J = [
      ...Array.isArray((U = (q = te == null ? void 0 : te.painting) == null ? void 0 : q.paint) == null ? void 0 : U.strokes) ? te.painting.paint.strokes : [],
      ...Array.isArray((O = (j = te == null ? void 0 : te.painting) == null ? void 0 : j.mask) == null ? void 0 : O.strokes) ? te.painting.mask.strokes : []
    ];
    for (const Q of J) {
      if (((oe = Q == null ? void 0 : Q.targetSpace) == null ? void 0 : oe.kind) !== "ERP_GLOBAL") continue;
      const Pe = String((Q == null ? void 0 : Q.layerKind) || "paint"), ht = String((Q == null ? void 0 : Q.toolKind) || "pen") === "eraser";
      if (Pe === "mask") {
        const Ye = c.descriptor;
        ht ? (Bt = $i(Bt, Ye.width, Ye.height), Ut(Bt), Sl(Bt.ctx, Q, Ye), ao(c.committedMask.ctx, Bt.canvas)) : (Sl(c.committedMask.ctx, Q, Ye), c.painted = !0);
        continue;
      }
      if (ht) {
        Bt = $i(Bt, r.width, r.height), Ut(Bt), Sl(Bt.ctx, Q, r);
        for (const Ye of o.values())
          ao(Ye.committedPaint.ctx, Bt.canvas), Pn(Ye);
      } else {
        const Ye = String((Q == null ? void 0 : Q.actionGroupId) || "__default__"), D = P(Ye), gt = D.descriptor;
        Sl(D.committedPaint.ctx, Q, gt), Pn(D);
      }
    }
    F([...o.keys()]);
  }
  function R(te, J) {
    y = String((te == null ? void 0 : te.layerKind) || "");
    const q = String((te == null ? void 0 : te.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Ut(c.currentStroke), c.activeStroke = null, Pn(c);
    else {
      const U = q ? u : P(String((te == null ? void 0 : te.actionGroupId) || "__default__"));
      b = q ? "" : String((te == null ? void 0 : te.actionGroupId) || "__default__"), Ut(U.currentStroke), U.activeStroke = null, Pn(U);
    }
  }
  function V(te, J) {
    var Pe;
    const q = String((te == null ? void 0 : te.layerKind) || "paint"), U = String((te == null ? void 0 : te.toolKind) || "") === "eraser", j = q === "mask" ? c : U ? u : P(String((te == null ? void 0 : te.actionGroupId) || b || "__default__")), O = j.activeStroke, oe = j.descriptor;
    if (O && O.pointCount > 1) {
      const Ee = j.currentStroke.ctx;
      Ee.globalCompositeOperation = "source-over";
      const ht = {
        ctx: Ee,
        stampTex: O.stampTex,
        radiusPx: O.radiusPx,
        spacingPx: O.spacingPx,
        desc: oe,
        aspect: O.aspect,
        angle: O.angle,
        stampKind: O.stampKind,
        scatter: O.scatter,
        latitudeCorrection: O.latitudeCorrection
      };
      O.pointCount === 2 ? Fs(ht, O.lastMidX, O.lastMidY, O.prev.x, O.prev.y, O.distSinceStamp) : fc(ht, O.pprev, { x: O.lastMidX, y: O.lastMidY }, O.prev, O.prev, O.distSinceStamp);
    }
    j.lassoPreviewActive && (Ut(j.currentStroke), Hl(j.currentStroke.ctx, te, oe), j.lassoPreviewActive = !1);
    const Q = q === "mask" ? c.committedMask : j.committedPaint;
    if (U && q === "paint")
      for (const Ee of o.values())
        ao(Ee.committedPaint.ctx, j.currentStroke.canvas), Pn(Ee);
    else if (U)
      ao(Q.ctx, j.currentStroke.canvas);
    else {
      q === "mask" && (c.painted = !0);
      const Ee = Math.max(0, Math.min(1, (O == null ? void 0 : O.strokeOpacity) ?? 1));
      Q.ctx.save(), Q.ctx.globalAlpha = Ee, Q.ctx.drawImage(j.currentStroke.canvas, 0, 0), Q.ctx.restore();
    }
    vk() && (String((te == null ? void 0 : te.toolKind) || ""), String((oe == null ? void 0 : oe.kind) || ""), Number((oe == null ? void 0 : oe.width) || 0), Number((oe == null ? void 0 : oe.height) || 0), String(((Pe = te == null ? void 0 : te.targetSpace) == null ? void 0 : Pe.viewMode) || ""), Number((te == null ? void 0 : te.aspect) ?? 1), hg(j.currentStroke.canvas), hg(Q.canvas), void 0), Ut(j.currentStroke), j.activeStroke = null, Pn(j), b = null, y = "", F([...o.keys()]);
  }
  function _(te) {
    if (y === "mask")
      Ut(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, Pn(c);
    else if (y === "paint" && !b)
      Ut(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, Pn(u);
    else if (b) {
      const J = o.get(b);
      J && (Ut(J.currentStroke), J.activeStroke = null, J.lassoPreviewActive = !1, Pn(J));
    }
    b = null, y = "", F([...o.keys()]);
  }
  function L(te, J) {
    var U;
    if (y = String((te == null ? void 0 : te.layerKind) || ""), String(((U = te == null ? void 0 : te.geometry) == null ? void 0 : U.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Ut(c.currentStroke), Hl(c.currentStroke.ctx, te, c.descriptor), c.lassoPreviewActive = !0, Pn(c);
      else {
        const j = String((te == null ? void 0 : te.toolKind) || "") === "eraser", O = j ? u : P(String((te == null ? void 0 : te.actionGroupId) || b || "__default__"));
        b = j ? "" : String((te == null ? void 0 : te.actionGroupId) || b || "__default__"), Ut(O.currentStroke), Hl(O.currentStroke.ctx, te, O.descriptor), O.lassoPreviewActive = !0, Pn(O);
      }
      F([...o.keys()]);
    }
  }
  function B(te) {
    return F(te ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function ce(te) {
    return o.get(String(te)) ?? null;
  }
  function we() {
    return [...o.keys()];
  }
  function E(te) {
    var Pe;
    const J = o.get(String(te));
    if (!J) return null;
    const q = y === "paint" && b === J.actionGroupId, U = y === "paint" && ((Pe = b ? o.get(b) : u) == null ? void 0 : Pe.activeStroke) || null, j = !!(U != null && U.isEraser), O = q ? J.activeStroke : null;
    if (!j && !O) return J.committedPaint.canvas;
    const oe = `${J.actionGroupId}:${J.revision}:${u.revision}:${j}`;
    if ((x == null ? void 0 : x.key) === oe) return x.surface.canvas;
    const Q = $i((x == null ? void 0 : x.surface) ?? null, t, n);
    return Ut(Q), Q.ctx.drawImage(J.committedPaint.canvas, 0, 0), j ? ao(Q.ctx, a.canvas) : (Q.ctx.save(), Q.ctx.globalAlpha = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, O.strokeOpacity ?? 1)), Q.ctx.drawImage(a.canvas, 0, 0), Q.ctx.restore()), x = { key: oe, surface: Q }, Q.canvas;
  }
  function z() {
    const te = y === "mask" ? c.activeStroke : null;
    return !c.painted && (!te || te.isEraser) ? null : `${c.revision}:${!!te}`;
  }
  function xe() {
    const te = z();
    if (te === null)
      return N = null, null;
    if ((N == null ? void 0 : N.key) === te) return N.surface.canvas;
    const J = $i((N == null ? void 0 : N.surface) ?? null, t, n);
    Ut(J);
    const q = y === "mask" ? c.activeStroke : null;
    return q != null && q.isEraser ? (Bt = $i(Bt, t, n), Ut(Bt), Bt.ctx.drawImage(c.committedMask.canvas, 0, 0), ao(Bt.ctx, a.canvas), tf(J.ctx, Bt.canvas)) : (tf(J.ctx, c.committedMask.canvas), q && tf(J.ctx, a.canvas)), N = { key: te, surface: J }, J.canvas;
  }
  return {
    rebuildCommitted: W,
    beginStroke: R,
    appendStrokePoint: Ek,
    updateActiveStroke: L,
    commitActiveStroke: V,
    cancelActiveStroke: _,
    getErpTarget: B,
    ensureTarget: C,
    getGroupTarget: ce,
    getGroupDisplayCanvas: E,
    getMaskDisplayCanvas: xe,
    getMaskDisplayRevision: z,
    getAllGroupIds: we
  };
}
function ne(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Vt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Yd(e, t) {
  let n = Vt(t) - Vt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Yf = 3;
function rs(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function dc(e, t = 0) {
  const n = rs(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = rs(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = rs(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = rs(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(rs(t) || 0);
}
function jy(e) {
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
const vg = Math.PI / 180, _g = 0.12, Fk = Yf, Tk = 35, Dk = 140, us = 100, Lk = 20, wg = 0.8;
function Rk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = ne(Number(e || us), 1, 179) * vg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / vg;
}
function Xd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: us })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(W, R = null) {
    u && u(W, R);
  }
  function y(W, R, V = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(W || 0), d.drag.lastY = Number(R || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function v(W, R, V = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const L = Number(_ || performance.now()), B = Number(W), ce = Number(R), we = B - d.drag.lastX, E = ce - d.drag.lastY;
    d.drag.lastX = B, d.drag.lastY = ce, d.drag.lastTs = L;
    const z = r() || { x: 1, y: 1 }, xe = Number(z.x || 1), te = Number(z.y || 1), J = { ...t() };
    let q = 0, U = 0;
    if (V === "unwrap") {
      const O = o() || { w: 1, h: 1 }, oe = Math.max(1, Number(O.w || 1)), Q = Math.max(1, Number(O.h || 1)), Pe = we / oe, Ee = E / Q;
      q = -Pe * 360 * xe, U = Ee * 180 * te;
    } else {
      const O = a() || { w: 0, h: 0 }, oe = Math.max(1, Number(O.w || 0)), Q = Math.max(1, Number(O.h || 0));
      if (oe > 1 && Q > 1) {
        const Pe = ne(Number(J.fov || us), 1, 179), Ee = ne(Rk(Pe, oe, Q), 0.1, 179);
        q = -(we / oe) * Pe * xe, U = E / Q * Ee * te;
      } else
        q = -we * _g * xe, U = E * _g * te;
    }
    J.yaw = Vt(Number(J.yaw || 0) + q), J.pitch = ne(Number(J.pitch || 0) + U, -89.9, 89.9), n(J), d.velHistory.push({ ts: L, yaw: J.yaw, pitch: J.pitch });
    let j = 0;
    for (; j < d.velHistory.length - 1 && d.velHistory[j].ts < L - 100; ) j++;
    return j > 0 && d.velHistory.splice(0, j), d.inertia.active = !1, d.inertia.lastTs = L, c(), b("drag", { phase: "move", dx: we, dy: E, dYaw: q, dPitch: U }), !0;
  }
  function x(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const R = Number(W || performance.now());
    d.drag.lastTs = R;
    const V = d.velHistory.filter((L) => R - L.ts <= 80);
    if (V.length >= 2) {
      const L = V[0], B = V.at(-1), ce = Math.max(1e-3, (B.ts - L.ts) / 1e3);
      let we = B.yaw - L.yaw;
      we > 180 && (we -= 360), we < -180 && (we += 360), d.inertia.vx = we / ce, d.inertia.vy = (B.pitch - L.pitch) / ce;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > Lk, d.inertia.lastTs = R, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function N(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const R = Number(W || performance.now()), V = Math.max(1e-3, (R - (d.inertia.lastTs || R)) / 1e3);
    d.inertia.lastTs = R;
    const _ = { ...t() };
    _.yaw = Vt(Number(_.yaw || 0) + d.inertia.vx * V), _.pitch = ne(Number(_.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const L = Math.exp(-5.5 * V);
    return d.inertia.vx *= L, d.inertia.vy *= L, Math.abs(d.inertia.vx) < wg && Math.abs(d.inertia.vy) < wg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function P(W) {
    const R = Math.sign(Number(W || 0));
    if (!R) return !1;
    const V = { ...t() }, _ = Number(V.fov || us);
    return V.fov = ne(_ + R * Fk, Tk, Dk), n(V), c(), b("wheel", { deltaSign: R, fovBefore: _, fovAfter: V.fov }), !0;
  }
  function C(W, R = 0) {
    return P(dc(W, R));
  }
  function F() {
    n({ yaw: 0, pitch: 0, fov: us }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: x,
    stepInertia: N,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: C,
    resetView: F
  };
}
const vt = Math.PI / 180, un = 180 / Math.PI;
function yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function pc(e, t) {
  return yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function hc(e, t) {
  return yr(e.x * t, e.y * t, e.z * t);
}
function nf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function qd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return yr(e.x / t, e.y / t, e.z / t);
}
function Xn(e, t) {
  const n = e * vt, r = t * vt, o = Math.cos(r);
  return yr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Ma(e, t, n = 0) {
  const r = Number(e || 0) * vt, o = Number(t || 0) * vt, a = n * vt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), v = Math.sin(a);
  return {
    right: yr(
      c * y - u * b * v,
      d * v,
      -u * y - c * b * v
    ),
    up: yr(
      -c * v - u * b * y,
      d * y,
      u * v - c * b * y
    ),
    fwd: yr(u * d, b, c * d)
  };
}
function mc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function kt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Vk() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function $k(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = kt(r.z_index ?? r.zIndex, t.length);
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
function zk(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function jk(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = kt(e.t, 0), r = kt(e.widthScale, null), o = kt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = kt(e.u, null), c = kt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = kt(e.u, null), c = kt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: c,
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  return null;
}
function kl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = jk(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Hk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = kl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = kl(e.points, t, 1);
  if (!a) return null;
  const c = kl(e.rawPoints, t, 1), u = kl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Gk(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = zk(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Hk(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = kt(e.size, null), c = kt(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = kt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, kt(x.r, 0))),
      g: Math.max(0, Math.min(1, kt(x.g, 0))),
      b: Math.max(0, Math.min(1, kt(x.b, 0))),
      a: Math.max(0, Math.min(1, kt(x.a, 1)))
    };
  }
  return {
    id: u,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: kt(e.hardness, null),
    flow: kt(e.flow, null),
    spacing: kt(e.spacing, null),
    createdAt: Math.trunc(kt(e.createdAt, 0)),
    color: v,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function xg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Gk(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Kk(e) {
  if (!e || typeof e != "object") return null;
  const t = kt(e.u0, null), n = kt(e.v0, null), r = kt(e.u1, null), o = kt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Wk(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
  };
}
function Bk(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Kk(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Wk(e.transform)
  } : null;
}
function Uk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Bk(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function da(e) {
  const t = Vk();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: $k(e.groups),
    paint: xg(e.paint, "paint"),
    mask: xg(e.mask, "mask"),
    raster_objects: Uk(e.raster_objects)
  };
}
const vr = 1, _r = 179, Xf = 85;
function Uc(e) {
  const t = ((Je(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Hy(e, t) {
  let n = Je(e, 0) - Je(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Gy(e, t, { shiftKey: n = !1 } = {}) {
  let r = Je(e, 0) + Je(t, 0) * un;
  return n && (r = Math.round(r / 15) * 15), Uc(r);
}
function Je(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Si(e = {}) {
  const t = ne(Je(e.hFOV_deg || 90, 90), vr, _r), n = ne(Je(e.vFOV_deg || 60, 60), vr, _r), r = Math.tan(t * vt * 0.5), o = Math.tan(n * vt * 0.5);
  return {
    yawDeg: Je(e.yaw_deg, 0),
    pitchDeg: Je(e.pitch_deg, 0),
    rollDeg: Je(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function xo(e, t) {
  const n = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Si(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function Jd(e, t) {
  const n = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Je(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Zd(e, t) {
  const n = Math.max(1e-12, Je(t, 1)), r = Math.max(1e-6, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = ne(2 * Math.atan(r / (2 * n)) * un, vr, _r), c = ne(2 * Math.atan(o / (2 * n)) * un, vr, _r);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Yk(e, t, n) {
  const r = Je(e == null ? void 0 : e.x, 0), o = Je(e == null ? void 0 : e.y, 0), a = Math.max(1, Je((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Je((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Si(t), d = Math.max(1e-12, Je(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function Qd(e, t, n = Xf) {
  const r = Math.max(1e-12, Je(t, 1)), o = ne(Je(n, Xf), 1, 89.999), a = r * Math.tan(o * vt), c = Math.max(1, Je((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, Je((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function Ky(e, t, n) {
  const r = Math.max(1e-12, Je(t, 1));
  return {
    x: (Je(n == null ? void 0 : n.x, 0) - Je(e == null ? void 0 : e.x, 0)) / r,
    y: -(Je(n == null ? void 0 : n.y, 0) - Je(e == null ? void 0 : e.y, 0)) / r
  };
}
function Xk(e, t) {
  const n = ne(Je(e, 90), vr, _r), r = Math.max(1e-6, Je(t, 1));
  return ne(
    2 * Math.atan(Math.tan(n * vt * 0.5) / r) * un,
    vr,
    _r
  );
}
function Gl(e, t) {
  const n = ne(Je(e, 60), vr, _r), r = Math.max(1e-6, Je(t, 1));
  return ne(
    2 * Math.atan(Math.tan(n * vt * 0.5) * r) * un,
    vr,
    _r
  );
}
function Sg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function qk(e, t) {
  const n = Sg(e, 1), r = Sg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function So(e) {
  const t = ne(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * vt, n = ne(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * vt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function mo(e) {
  const t = So(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || qk(t, 1);
}
function ep(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = mo(t), t;
}
function Wy({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? ne(c, vr, _r) : ne(Math.min(42, Je(o, 100) * 0.42), 8, 96);
  return ep({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Je(t, 0),
    pitch_deg: ne(Je(n, 0), -89.9, 89.9),
    roll_deg: Uc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function di(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : mo(e);
}
function By(e, t) {
  const n = Si(e), r = Je(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * un, a = 2 * Math.atan(n.tanHalfY * r) * un;
  return o < vr || o > _r || a < vr || a > _r ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Uy(e, t, n = Yf) {
  const r = Math.sign(Je(t, 0)), o = Math.abs(Je(n, Yf));
  if (!r || !(o > 0)) return null;
  const a = Si(e), c = a.hFovDeg + r * o;
  if (c < vr || c > _r) return null;
  const u = Math.tan(c * vt * 0.5);
  return By(e, u / a.tanHalfX);
}
function Yy(e, t) {
  const n = Si(e), r = Ma(n.yawDeg, n.pitchDeg, n.rollDeg), o = Je(t == null ? void 0 : t.x, 0), a = Je(t == null ? void 0 : t.y, 0);
  return qd(pc(pc(r.fwd, hc(r.right, o)), hc(r.up, a)));
}
function Jk(e) {
  return yr(e.x, e.y, -e.z);
}
function Kl(e) {
  return yr(e.x, e.y, -e.z);
}
function qn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Ma(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Xy(e) {
  const t = Kl(yr(e[0][0], e[1][0], e[2][0])), n = Kl(yr(e[0][1], e[1][1], e[2][1])), r = Kl(yr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * un, pitchDeg: a * un, rollDeg: d * un };
}
function Ts(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Co(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, y = t + a + b;
  if (y > 0) {
    const x = 0.5 / Math.sqrt(y + 1);
    return { x: (d - c) * x, y: (r - u) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > b) {
    const x = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + u) / x, w: (d - c) / x };
  }
  if (a > b) {
    const x = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / x, y: 0.25 * x, z: (c + d) / x, w: (r - u) / x };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function Ml(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const yo = 1e-6, qf = 1e-6, Zk = 1e-9;
function Ds(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Qk(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Ds(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Ds(0, r, a, 1, 0.5 * (c + u));
}
function wa(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function xa(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (c.reduce((x, N, k) => x + N * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, k) => N + k * k, 0)), y = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= y ? d : d.map((x) => x * y / v);
}
function qy(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((y, v) => a[v] - y);
  let d = u;
  wa(e, r) && (d = xa(t, r, n[r - 1].map((y, v) => y - o[v]), u).map((y) => y * c));
  let b = u;
  return wa(e, r + 1) && (b = xa(t, r + 1, u.map((y) => -y), n[r + 2].map((y, v) => y - a[v])).map((y) => y * c)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function Jy(e, t, n, r, o) {
  const [[a], [c]] = qy(e, t, n.map((u) => [u]), r);
  return Ds(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function eM(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = qy(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Ds(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function gc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function tM(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function rf(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function nM([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Jf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function aa(e, t) {
  return nM(gc([-e[0], -e[1], -e[2], e[3]], t));
}
function of(e, t, n) {
  return gc(e, Jf(aa(e, t).map((r) => n * r)));
}
function af(e, t) {
  const n = tM(e, t);
  if (Math.abs(n) > qf) return n < 0;
  const [r, o, a] = aa(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > qf) return c < 0;
  return !1;
}
function Nl(e) {
  const { x: t, y: n, z: r, w: o } = Co(qn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Zf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function rM(e, t, n, r) {
  const o = Nl(e[n].value);
  let a = Nl(e[n + 1].value);
  af(o, a) && (a = rf(a));
  const c = t[n + 1] - t[n], u = aa(o, a);
  let d = u;
  if (wa(e, n)) {
    let _ = Nl(e[n - 1].value);
    af(_, o) && (_ = rf(_)), d = xa(t, n, aa(o, _), u).map((L) => L * c);
  }
  let b = u;
  if (wa(e, n + 1)) {
    let _ = Nl(e[n + 2].value);
    af(a, _) && (_ = rf(_)), b = xa(t, n + 1, aa(a, o), aa(a, _)).map((L) => L * c);
  }
  const y = gc(o, Jf(d.map((_, L) => 0.5 * (_ - u[L])))), v = gc(a, Jf(u.map((_, L) => 0.5 * (_ - b[L])))), [x, N, k, P] = of(of(o, a, r), of(y, v, r), 2 * r * (1 - r)), { yawDeg: C, pitchDeg: F, rollDeg: W } = Xy(Ts({ x, y: N, z: k, w: P })), R = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: Zf(C, R.yaw_deg, V.yaw_deg, r),
    pitch_deg: F,
    roll_deg: Zf(W, R.roll_deg, V.roll_deg, r)
  };
}
function Ls(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function yc(e) {
  return Math.sqrt(Ls(e, e));
}
function bc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Zy(e, t) {
  const n = Ls(e, t), r = t.map((c, u) => c - n * e[u]), o = yc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function ra(e, t) {
  const n = yc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Pl(e, t, n) {
  return ra(e, Zy(e, t).map((r) => n * r));
}
function sf(e, t) {
  const n = bc(e[t].value), r = bc(e[t + 1].value), o = Ls(n, r), a = o < 0 && yc(r.map((d, b) => d - o * n[b])) <= qf;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = Zy(n, r);
  const u = yc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function iM(e, t, n, r) {
  const o = bc(e[n].value), a = bc(e[n + 1].value), [c, u, d] = sf(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  wa(e, n) && (b = xa(t, n, sf(e, n - 1)[1].map((R) => -R), b).map((R) => R * v)), wa(e, n + 1) && (y = xa(t, n + 1, y.map((R) => -R), sf(e, n + 1)[0]).map((R) => R * v));
  let x, N, k;
  if (d) {
    const R = Math.PI, V = Ds(0, Ls(b, c) / R / 3, R - Ls(y, u) / R / 3, R, r);
    [x, N, k] = ra(o, c.map((_) => V * _ / R));
  } else {
    const R = Pl(ra(o, b.map((L) => L / 3)), ra(a, y.map((L) => -L / 3)), r), V = Pl(ra(o, b.map((L) => r * L / 3)), R, r), _ = Pl(R, ra(a, y.map((L) => -(1 - r) * L / 3)), r);
    [x, N, k] = Pl(V, _, r);
  }
  const P = Math.hypot(x, k), C = e[n].value.yaw_deg, F = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= Zk ? C + (F - C) * r : Zf(Math.atan2(x, k) * 180 / Math.PI, C, F, r), pitch_deg: Math.atan2(N, P) * 180 / Math.PI };
}
function oM(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = Jy(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function aM(e, t, n, r) {
  return Jy(e, t, e.map((o) => o.value), n, r);
}
const sM = { position: eM, rotation: rM, direction: iM, size: oM };
function Ht(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Ml(e[t].value);
  if (n <= r[0].frame + yo) return Ml(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - yo) return Ml(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + yo; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= yo || c.easing === "hold") return Ml(c.value);
  const u = r.map((b) => b.frame), d = Qk(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (sM[t] ?? aM)(r, u, a, d);
}
function Qf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function lM(e) {
  return Math.min(1, Math.max(0, e));
}
function Qy(e) {
  return Math.max(1e-6, e);
}
function eb(e, t) {
  return t - (e.start - e.in);
}
function pa(e, t) {
  return t >= e.start - yo && (e.duration === null || t < e.start + e.duration - yo);
}
function tp(e, t) {
  return {
    position: Ht(e, "position", t),
    ...Ht(e, "rotation", t),
    hFOV_deg: Qf(Ht(e, "fov", t)),
    aspect: e.aspect
  };
}
function vc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = eb(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : tp(r, n),
    scene: {
      active: o.visible && pa(o.clip, n),
      clip_frame: a,
      position: Ht(o, "position", a),
      ...Ht(o, "rotation", a),
      scale: Qy(Ht(o, "scale", a))
    },
    stickers: e.stickers.map((c) => ko(c, n))
  };
}
function cM(e, t) {
  if (e.placement === "world")
    return {
      position: Ht(e, "position", t),
      ...Ht(e, "rotation", t),
      scale: Qy(Ht(e, "scale", t))
    };
  const n = Ht(e, "size", t);
  return {
    ...Ht(e, "direction", t),
    roll_deg: Ht(e, "roll", t),
    hFOV_deg: Qf(n.hFOV_deg),
    vFOV_deg: Qf(n.vFOV_deg)
  };
}
function ko(e, t) {
  const n = eb(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && pa(e.clip, t),
    clip_frame: n,
    ...cM(e, n),
    opacity: lM(Ht(e, "opacity", n))
  };
}
const uM = 2, fM = ["sky", "world"], ed = ["perspective", "erp"], dM = ["input", "output", "temp"], tb = [0.42, 0, 0.58, 1], nb = 1, np = 240, Yc = 1e5;
function hn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function rp(e, t) {
  const n = qt(e, t);
  return n !== null && n > 0 ? n : t;
}
function ar(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Mo(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ip(e) {
  const t = rp(e, null);
  return t === null ? null : ar(t, nb, np);
}
function rb(e) {
  const t = Mo(e);
  return t !== null && t >= 1 ? Math.min(t, Yc) : null;
}
function Rs(e, t) {
  return typeof e == "boolean" ? e : t;
}
function ib(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => qt(n, null));
  return t.includes(null) ? null : t;
}
function ob(e) {
  return ib(e) || [0, 0, 0];
}
function ab(e) {
  const t = hn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: ar(qt(t.pitch_deg, 0), -90, 90),
    roll_deg: qt(t.roll_deg, 0)
  };
}
function pM(e) {
  return ar(qt(e, 90), 0.1, 179);
}
function hM(e) {
  return rp(e, 1);
}
function mM(e) {
  const t = hn(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: ar(qt(t.pitch_deg, 0), -90, 90)
  };
}
function gM(e) {
  return qt(e, 0);
}
function yM(e) {
  const t = hn(e) ? e : {};
  return {
    hFOV_deg: ar(qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: ar(qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function sb(e) {
  return ar(qt(e, 1), 0, 1);
}
const op = [["position", ob], ["rotation", ab], ["fov", pM]], Xc = [["position", ob], ["rotation", ab], ["scale", hM]], ap = [["direction", mM], ["roll", gM], ["size", yM], ["opacity", sb]], sp = [...Xc, ["opacity", sb]];
function bM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => qt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...tb];
}
function vM(e) {
  if (!hn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = ib(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function _M(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!hn(o)) continue;
    const a = Mo(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: bM(o.easing) }, u = n ? vM(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function lp(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = hn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: _M(a.keyframes, o, r === "position") };
  }
  return n;
}
function lb(e) {
  const t = hn(e) ? e : {}, n = Mo(t.start), r = Mo(t.in), o = Mo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function wM(e) {
  const t = hn(e) ? e : {}, n = ar(qt(t.x0, 0), 0, 1), r = ar(qt(t.y0, 0), 0, 1), o = ar(qt(t.x1, 1), 0, 1), a = ar(qt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function xM(e) {
  if (!hn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: dM.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function SM(e) {
  const t = xM(e.source);
  if (!t) return null;
  const n = fM.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: lb(e.clip),
    visible: Rs(e.visible, !0),
    locked: Rs(e.locked, !1),
    crop: wM(e.crop),
    ...lp(e, r ? sp : ap)
  };
  return r || (o.z_index = Mo(e.z_index) ?? 0), o;
}
function kM(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = hn(a) ? SM(a) : null;
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
function cb(e) {
  if (!hn(e)) return null;
  const t = ed.includes(e.projection) ? e.projection : ed[0];
  return { aspect: rp(e.aspect, 1), projection: t, visible: Rs(e.visible, !0), ...lp(e, op) };
}
function cp() {
  return cb({});
}
function _c(e) {
  const t = hn(e.timeline) ? e.timeline : {}, n = hn(e.scene) ? e.scene : {};
  return {
    version: uM,
    timeline: {
      fps: ip(t.fps) ?? 24,
      length: rb(t.length)
    },
    camera: cb(e.camera),
    scene: { clip: lb(n.clip), visible: Rs(n.visible, !0), ...lp(n, Xc) },
    stickers: kM(e.stickers),
    painting: da(e.painting),
    painting_layer: hn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Rs(e.painting_visible, !0)
  };
}
function MM(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!hn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function NM(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!hn(t)) return null;
  const n = ar(qt(t.hFOV_deg, 90), 1, 179), r = ar(qt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function PM(e) {
  const t = hn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(hn) : [];
  return n.sort((r, o) => qt(r.z_index, 0) - qt(o.z_index, 0)), _c({
    camera: NM(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: MM(r, t),
      visible: r.visible,
      locked: r.locked,
      crop: r.crop,
      z_index: r.z_index,
      direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg } },
      roll: { value: r.rot_deg },
      size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Zr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return _c({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!hn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? PM(t) : _c(t);
}
const lf = {
  state: { painting_visible: !0 },
  camera: { projection: ed[0], visible: !0 },
  scene: { visible: !0 }
};
function cf(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function td(e) {
  return JSON.stringify({
    ...cf(e, lf.state),
    camera: e.camera && cf(e.camera, lf.camera),
    scene: cf(e.scene, lf.scene)
  });
}
function uf(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function kg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Vs(e, t) {
  const n = ip(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, o = (u) => Mo(u * r), { length: a } = e.timeline, c = kg(e.scene.clip, o);
  return _c({
    timeline: { fps: n, length: a === null ? null : Math.max(1, o(a)) },
    camera: e.camera === null ? null : { ...e.camera, ...uf(e.camera, op, o, 0, 0) },
    scene: { clip: c.clip, visible: e.scene.visible, ...uf(e.scene, Xc, o, c.anchor, c.newAnchor) },
    stickers: e.stickers.map((u) => {
      const { clip: d, anchor: b, newAnchor: y } = kg(u.clip, o), v = u.placement === "world" ? sp : ap;
      return { ...u, clip: d, ...uf(u, v, o, b, y) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function ff(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function ub(e) {
  return Array.isArray(e) ? [...e] : e;
}
function up(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= yo);
}
function fb(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? ub(e.keyframes[r - 1].easing) : [...tb];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function In(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = ff(o.value, r);
    return;
  }
  const a = up(o, n);
  a ? a.value = ff(a.value, r) : fb(o, n, ff(Ht(e, t, n), r));
}
function Io(e) {
  return e.placement === "world" ? sp.map(([t]) => t) : e.placement === "sky" ? ap.map(([t]) => t) : (e.clip ? Xc : op).map(([t]) => t);
}
function AM(e, t) {
  for (const n of Io(e))
    up(e[n], t) || fb(e[n], t, Ht(e, n, t));
}
function CM(e) {
  const t = Io(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function IM(e, t) {
  return Io(e).every((n) => !!up(e[n], t));
}
function OM(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Ht(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function EM(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const u = e[c], d = u.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), b = new Set(d.map((y) => y.frame));
    u.keyframes = [
      ...u.keyframes.filter((y) => !a.has(y.frame) && !b.has(y.frame)),
      ...d
    ].sort((y, v) => y.frame - v.frame);
  }
  return r;
}
function db(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function FM(e, t, n) {
  const r = db(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function TM(e, t, n, r) {
  for (const o of db(e, t, n)) o.easing = ub(r);
}
function DM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function LM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function RM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function VM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function wc(e) {
  return Io(e).map((t) => e[t]);
}
function $M(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? wc(e.camera).some((r) => r.keyframes.length > 0) : hb(e, { camera: n });
}
function pb(e) {
  return wc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !VM(e.clip);
}
function hb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(pb);
}
function mb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of wc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of wc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return Number.isFinite(a) ? a : Yc;
}
function zM(e) {
  return e > 0 ? ip(Math.min(e, np)) : null;
}
function jM(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : rb(Math.max(1, Math.min(e, Yc)));
}
const df = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], HM = 2e3;
function GM(e, t, n = 56) {
  const r = df.find((a) => a * t >= n) || df[df.length - 1], o = [];
  for (let a = 0; a < e && o.length < HM; a += r) o.push(a);
  return o;
}
function KM(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Al = { text: null, parsed: null };
function Yn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function xc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function WM({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Yn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: da(null),
    painting_layer: null,
    ui_settings: xc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function gb(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function BM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function UM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function YM(e) {
  return Array.isArray(e) ? e.map((t) => ep(t)) : [];
}
function XM(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function yb(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = WM(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Al.text === o ? a = Al.parsed : (a = JSON.parse(o), Al = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: BM(a.assets),
      stickers: UM(a.stickers),
      shots: YM(a.shots),
      painting: da(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: xc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = xc({ ...u.ui_settings, ...c })), u.output_preset = gb(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Yn(n.coverage), delete u.editor_history, u;
  } catch {
    return Al = { text: o, parsed: null }, r;
  }
}
function Mg(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function qM(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function JM(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function bb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: u = null, scene: d = null, camera: b = !1 } = t;
  let y;
  try {
    y = Zr(e);
  } catch {
    y = Zr(null);
  }
  u && u !== y.timeline.fps && (y = Vs(y, u));
  const v = b && y.camera === null;
  if (v && (y = { ...y, camera: cp() }), d) {
    let x = Zr(d);
    u && u !== x.timeline.fps && (x = Vs(x, u)), y = { ...x, camera: y.camera, cutout_state: y };
  }
  return {
    ...y,
    ...v ? { default_camera: !0 } : {},
    coverage: Yn(o),
    bg_color: r,
    output_preset: gb(n),
    ui_settings: xc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function ZM(e, t) {
  e.cutout_state && (e.cutout_state = Vs(e.cutout_state, t));
  const n = Vs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Io(a)) a[u].keyframes = c[u].keyframes;
    }
}
function fp(e, t) {
  const n = ko(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const QM = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Ng(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function eN(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[QM[n]].keyframes.length));
}
function vb(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = Ng(n, ["yaw_deg", "pitch_deg"]), a = Ng(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && In(e, "direction", r, o), n.rot_deg !== void 0 && In(e, "roll", r, n.rot_deg), Object.keys(a).length && In(e, "size", r, a);
}
const qc = ["position_x", "position_y", "position_z"], Wl = "camera";
function Pg(e, t) {
  const n = tp(e, t);
  return ep({
    id: Wl,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: Xk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function tN(e) {
  return Zr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Vt(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function nN(e) {
  return e - 360 * Math.round(e / 360);
}
function rN(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + nN(n[a] - r[a]));
  Object.keys(o).length && In(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && In(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * vt * 0.5) / Math.tan(n.vFOV_deg * vt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && In(e, "position", t, [...n.position]);
}
function iN(e, t) {
  const n = Ht(e, "position", t), r = Ht(e, "rotation", t);
  return {
    ...Object.fromEntries(qc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Ht(e, "fov", t)
  };
}
function oN(e, t, n, r) {
  const o = qc.indexOf(n);
  if (o >= 0) {
    const a = Ht(e, "position", t);
    a[o] = r, In(e, "position", t, a);
  } else n === "hFOV_deg" ? In(e, "fov", t, r) : In(e, "rotation", t, { [n]: r });
}
function aN(e, t, n) {
  In(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function sN(e, t) {
  const n = ko(e, t);
  return {
    ...Object.fromEntries(qc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function lN(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = qc.indexOf(n);
  if (a >= 0) {
    const c = Ht(e, "position", o);
    c[a] = r, In(e, "position", o, c);
  } else n === "scale" ? In(e, "scale", o, r) : n === "opacity" ? In(e, "opacity", o, r / 100) : In(e, "rotation", o, { [n]: r });
}
function cN(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && In(e, o, r, n[o]);
}
function uN(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function fN(e, t, n) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...n.position], keyframes: [] },
    rotation: { value: { ...n.rotation }, keyframes: [] },
    scale: { value: n.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function Bl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function _b(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function dp(e, t, n, r) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg }, keyframes: [] },
    roll: { value: n.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: r
  };
}
function dN(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Vt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function nd(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function wb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function xb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Ag(e) {
  e.default_camera && JSON.stringify(Zr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(cp()) && delete e.default_camera;
}
function Sb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = Zr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(cp()) && (n.camera = null), td(n);
}
function kb(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = Zr(n);
    if (td(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && td(Vs(o, a)) === t;
  } catch {
    return !1;
  }
}
const pf = 0.15, pN = 0.01, hN = 1e-3, mN = 0.05, gN = 4, Cg = 250, yN = 16, Pr = 1, bN = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function sr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Qr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Jc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Na(e, t, n = 0) {
  const r = qn(e, t, n), o = Qr(r, 2);
  return { right: Qr(r, 0), up: Qr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function vN(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function rd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function _N(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : rd(e, "3dof", n);
}
function wN(e) {
  return Na(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function xN(e) {
  return sr(e.position, Na(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Ki(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ks(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function pp(e, t) {
  return ks(Ki(t, e.position), Na(e.yaw_deg, e.pitch_deg).forward);
}
function hp(e) {
  return Math.max(e, 1e-6) * mN;
}
function hf(e, t, n = null, r = Pr) {
  if (t) return t;
  const o = hp(r);
  if (n && pp(e, n) > 0) {
    const a = Ki(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : sr(e.position, a, o / c);
  }
  return sr(e.position, Na(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Ig(e, t = Pr) {
  return Math.max(e.distance, hp(t));
}
function Og(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > gN ? !1 : t.time - e.time < Cg || e.cost > yN && t.time - e.wheelTime < Cg;
}
function mp(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * vt);
  return { tanX: r, tanY: r * n / t };
}
function Eg(e, t, n, r, o = xN(e)) {
  const a = e.roll_deg ?? 0, [c, u] = SN(t, n, a), d = Vt(e.yaw_deg + c / r * 360), b = ne(e.pitch_deg - u / r * 360, -89.9, 89.9), y = qn(e.yaw_deg, e.pitch_deg, a), v = qn(d, b, a), x = Ki(e.position, o), N = [0, 1, 2].map((P) => ks(Qr(y, P), x)), k = { ...e, yaw_deg: d, pitch_deg: b, position: sr(o, Jc(v, N)) };
  return { ...k, distance: pp(k, o) };
}
function SN(e, t, n) {
  const r = Math.cos(n * vt), o = Math.sin(n * vt);
  return [e * r + t * o, t * r - e * o];
}
function Fg(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = wN(e), d = 2 * a * mp(e, r, o).tanY / o;
  return { ...e, position: sr(sr(e.position, c, -t * d), u, n * d), distance: a };
}
function Tg(e, t, n, r = Pr) {
  const o = Ki(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * pN, d = n > 0 ? Math.min(Math.max(a * pf, u), a - c * hN) : -Math.max(a * pf / (1 - pf), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: sr(e.position, o, d / a) };
  return { ...b, distance: Math.max(pp(b, t), hp(r)) };
}
function Dg(e, t, n, r) {
  const { tanX: o, tanY: a } = mp(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Na(e.yaw_deg, e.pitch_deg);
  return { ...e, position: sr(t.center, d, -u), distance: u };
}
function mf(e, t, n, r = null) {
  return Mb({
    quaternion: Co(qn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(mp(e, t, n).tanY) * un,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Mb(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Pr }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function $s(e, t, n, r) {
  const { right: o, up: a, forward: c } = Nb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * vt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function Nb(e) {
  const t = Ts(e.quaternion), n = Qr(t, 2);
  return { right: Qr(t, 0), up: Qr(t, 1), forward: n.map((r) => -r) };
}
function Lg(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function kN({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Pb(e, t) {
  if (!e || !t.active) return null;
  const n = PN(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: id(t),
    itemQuaternion: e.kind === "splat" ? bN : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function MN(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = Pb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function NN(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function PN(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function id(e) {
  return {
    position: [...e.position],
    quaternion: Co(qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function od(e, t) {
  return sr(e.position, Jc(qn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function ad(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function sd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function ld(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function AN(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...sd(t).map((a) => od(e.scene, a)));
  for (const a of n) o.push(...gp(a));
  for (const { box: a, value: c } of r) o.push(...sd(a).map((u) => od(c, u)));
  return o;
}
function CN(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Co(qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: qn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function gp(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => sr(e.position, Jc(e.rotation, [r, o, 0])));
}
function IN(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? ld(gp(o)) : a != null && a.box ? ld(sd(ad(a.kind, a.box)).map((c) => od(r, c))) : { center: [...r.position], radius: r.scale };
}
const ON = 2, EN = 0.5, FN = 30;
function Ab(e, t) {
  const n = Ki(t, e), r = Math.atan2(n[0], -n[2]) * un, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * un;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function TN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * EN : ON, a = t ? [...t] : sr(e.position, Na(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Ki(a, e.position)), u = c > 0 ? Ab(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(FN * 0.5 * vt);
  return { position: a, rotation: u, scale: d };
}
function Rg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function DN(e) {
  return [0, 1, 2].map((t) => Qr(e, t));
}
function Vg(e, t, n, r) {
  if (e === "translate") return { position: sr(t.position, Ki(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * zN(n.scale, r.scale) / n.scale };
  const o = Rg(Ts(r.quaternion), DN(Ts(n.quaternion))), a = Rg(o, qn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = Xy(a);
  return Math.abs(u) <= LN ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: RN(a, t.yaw_deg) } };
}
const LN = 89.9;
function RN(e, t) {
  const n = Qr(e, 0), r = Qr(e, 1), o = Math.cos(t * vt), a = Math.sin(t * vt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * un + 0;
}
const VN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function $N(e, t, n, r, o) {
  if (!$s(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = Nb(e), d = Ki(t, e.position), b = ks(d, a), y = ks(d, c), v = ks(d, u), x = Math.tan(e.fovY_deg * 0.5 * vt), N = x * e.aspect, k = Math.hypot(b, y, v) * VN[n] * Math.min(1.9 * x, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (V) => {
    const _ = k * Math.sqrt(V * V + v * v - k * k);
    return [(V * v - _) / (v * v - k * k), (V * v + _) / (v * v - k * k)];
  }, [C, F] = P(b), [W, R] = P(y);
  return {
    minX: r * 0.5 * (1 + C / N),
    maxX: r * 0.5 * (1 + F / N),
    minY: o * 0.5 * (1 - R / x),
    maxY: o * 0.5 * (1 - W / x)
  };
}
function zN(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function jN(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function $g(e, t) {
  const n = qn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * vt) * t, o = r / e.aspect, a = (b, y, v) => sr(e.position, Jc(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function HN(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = $s(e, c, r, o), b = $s(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, x = ne(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * x - n.x, d.y + v * x - n.y) <= a;
  });
}
function GN(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function KN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Ht(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Ht(r, "position", d);
  });
}
const zg = 2048, Cb = 0.28;
function Ib(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * vt);
  return {
    quaternion: Co(qn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * un,
    aspect: r
  };
}
function Ms(e) {
  const t = Si(e);
  return {
    quaternion: Co(qn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function jg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Qd(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * un,
      vFOV_deg: 2 * Math.atan(a / r) * un
    }
  };
}
function Ob(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = Ts(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * vt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const C = Jk(k), F = r * C.x + c * C.y + b * C.z, W = o * C.x + u * C.y + y * C.z, R = -(a * C.x + d * C.y + v * C.z), V = Math.max(R, P);
      return {
        x: t * 0.5 * (1 + F / V / N),
        y: n * 0.5 * (1 - W / V / x),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const C = (k / t * 2 - 1) * N, F = (1 - P / n * 2) * x;
      return qd(Kl({
        x: r * C + o * F - a,
        y: c * C + u * F - d,
        z: b * C + y * F - v
      }));
    }
  };
}
function WN(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = vc(e, t), c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const v = n(u);
    if (!v) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * vt), N = Math.tan(b.vFOV_deg * 0.5 * vt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: y ? Cb : b.opacity,
      zIndex: r(u),
      quaternion: Co(qn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * x,
        x1: (2 * k.x1 - 1) * x,
        y0: (1 - 2 * k.y1) * N,
        y1: (1 - 2 * k.y0) * N
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function Eb(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return WN(e, t, {
    media: (c) => {
      const u = a.get(c.id);
      return u ? r(u) : null;
    },
    zIndex: (c) => {
      var u;
      return Number(((u = a.get(c.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: o
  });
}
function BN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function UN(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = vc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: x, height: N } = BN(v.media), k = CN(b, u.crop, x, N);
    k && c.push({
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: b.opacity,
      position: k.position,
      quaternion: k.quaternion,
      rotation: k.rotation,
      width: k.width,
      height: k.height,
      crop: u.crop
    });
  }), c;
}
const gf = /* @__PURE__ */ new WeakMap();
let YN = 1;
function cd(e) {
  return gf.has(e) || gf.set(e, YN++), gf.get(e);
}
function Hg(e) {
  return e && typeof e == "object" ? cd(e) : e;
}
function Gg({ background: e, layers: t }) {
  return JSON.stringify([
    e && [cd(e.media), Hg(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, cd(n.media), Hg(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function XN({ onReady: e, onFailed: t, onUpdate: n = () => {
} }) {
  let r = null, o = !1;
  const a = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(c) {
      return r ? r.render(c) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(c) {
      return r ? r.renderUnwrap(c) : null;
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(c) {
      return r ? r.sceneBox(c) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(c, u, d, b, y) {
      return r ? r.pick(c, u, d, b, y) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(c, u, d, b, y) {
      return r ? r.pickSurface(c, u, d, b, y) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(c, u, d, b, y) {
      return r ? r.pickSticker(c, u, d, b, y) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(c, u, d, b, y, v) {
      return r ? r.gizmoPointer(c, u, d, b, y, v) : null;
    },
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-ClhLZ0Eh.js").then((c) => c.$).then((c) => {
    o || (r = c.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((c) => {
    console.error("[PanoramaStickers] three.js view is unavailable", c), a.failed = !0, t();
  }), a;
}
const Fb = "3D view unavailable. Check the browser console.";
function Sc(e, t, n) {
  return Ib({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function qN(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((c) => {
      if (n = !1, !o.size) {
        c.dispose();
        return;
      }
      t = c, o.forEach((u) => u.onChange());
    }).catch((c) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", c), o.forEach((u) => u.onChange()));
    }));
  }
  return function(u) {
    const d = { onChange: u };
    let b = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return b ? null : (a(), t ? t.render({ ...y, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        b || (b = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Tb = qN(
  () => import("./.lazy/pano_three_view-ClhLZ0Eh.js").then((e) => e.$).then((e) => e.createThreeView())
), Wi = ["erp_image", "bg_erp", "bg_media"], Ul = ["source"], yp = ["sticker_image", "sticker"], Db = ["scene"], JN = {
  background: [...Wi, ...Ul],
  "external-sticker": [...yp, ...Ul],
  scene: [...Db, ...Ul]
};
function Lb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function ud(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Lb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function ZN(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function Rb(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function QN(e, t) {
  const { graph: n, entry: r } = Rb(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = Lb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const Vb = [...Wi, ...yp, ...Db, ...Ul], e2 = 256, ia = /* @__PURE__ */ new Map(), yf = /* @__PURE__ */ new WeakMap();
let $b = () => null;
function zb(e) {
  return yf.has(e) || yf.set(e, JSON.stringify(e)), yf.get(e);
}
function t2(e) {
  $b = e;
}
function kc(e, t) {
  const n = zb(e);
  ia.delete(n), ia.set(n, t), ia.size > e2 && ia.delete(ia.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? $b(e) : null;
  if (!n) return !0;
  const r = ud(e);
  let o = ia.get(zb(n));
  if (o)
    kc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => Vb.includes(c == null ? void 0 : c.name)))) return !0;
    kc(n, r), o = r;
  }
  return JN[t].every((c) => o[c] === r[c]);
}
const Mc = /* @__PURE__ */ new WeakSet();
async function fd(e, t) {
  if (Mc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Mc.add(e), n.ok && r !== void 0 ? r : null;
}
function jb(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = Rb(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Vb.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: QN(n, t) };
}
const Yl = /* @__PURE__ */ new Map();
function n2(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Yl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await fd(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = jb(o, a);
        c && kc(c.output, c.inputs);
      }
    });
}
const r2 = 5;
function i2(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${r2}`, r = fd(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, fd(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, y, v, x;
      const d = String(c.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const k = await a(N);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((x = (v = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : v[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : jb(k, d);
      }
      return null;
    }
  };
}
function o2(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Xo = null;
async function a2(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Mc.has(n) || (u = Yl.get(o)) != null && u.has(r) || o2(t)) return null;
  (Xo == null ? void 0 : Xo.workflowId) !== o && (Xo = { workflowId: o, history: i2(n, o) }, queueMicrotask(() => {
    Xo = null;
  }));
  const c = await Xo.history.lastNodeOutput(e, a);
  return a() ? c ? (kc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (Mc.has(n) || Yl.set(o, (Yl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Kg(e, t, n, r = Wi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const Wg = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Xl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Wg.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Wg.test(String((e == null ? void 0 : e.filename) || ""));
}
const bf = /* @__PURE__ */ new WeakMap();
function s2(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function dd(e) {
  return s2(e) ? (bf.has(e) || bf.set(e, Math.random().toString(36).slice(2, 10)), bf.get(e)) : "run";
}
function Hb(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function l2(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function bp(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const u of c)
      if (Array.isArray(u))
        for (const d of u) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function c2({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var C;
  const r = ((C = e == null ? void 0 : e.createElement) == null ? void 0 : C.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, b = () => {
    if (!a) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => o(), v = () => {
    o(), d();
  }, x = () => o();
  let N = !1;
  const k = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", v), r.addEventListener("pause", x), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var F, W;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", x), r.removeEventListener("error", k), r.pause(), (F = r.removeAttribute) == null || F.call(r, "src"), (W = r.load) == null || W.call(r));
  }, failed: () => N };
}
function so(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function u2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Bg(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = u2(e == null ? void 0 : e.graph, n)), r;
}
function f2(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function d2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function p2(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Gb({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return String(_ || "").trim();
    if (Array.isArray(_)) {
      if (_.length === 0) return "";
      if (_.length === 1) return o(_[0]);
      const L = String(_[0] || "").trim();
      if (L)
        return so(t, {
          filename: L,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const B of _) {
        const ce = o(B);
        if (ce) return ce;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : so(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const L = String(_.type || "").trim().toLowerCase();
    if (L === "dataurl") return String(_.value || "");
    if (L !== "comfy_image") return "";
    const B = String(_.filename || "").trim();
    return B ? so(t, {
      filename: B,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const L = e == null ? void 0 : e.nodeOutputs;
    if (!L || _ == null) return null;
    const B = String(_);
    return L instanceof Map ? L.get(_) || L.get(B) || L.get(Number(B)) || null : L[_] || L[B] || null;
  }, u = (_, L) => {
    var ce;
    const B = c(_ == null ? void 0 : _.id);
    return Array.isArray((ce = B == null ? void 0 : B.ui) == null ? void 0 : ce[L]) ? B.ui[L] : Array.isArray(B == null ? void 0 : B[L]) ? B[L] : [];
  }, d = (_, L) => {
    const B = c(_ == null ? void 0 : _.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, L) ? B.ui[L] : B && Object.prototype.hasOwnProperty.call(B, L) ? B[L] : null;
  }, b = (_, L) => {
    const B = d(_, "pano_sticker_input_state_hash"), ce = Array.isArray(B) ? B[0] : B;
    return String(ce ?? "").trim() || p2(L);
  }, y = (_) => {
    const L = [], B = /* @__PURE__ */ new Set();
    for (const ce of _ || []) {
      const we = o(ce);
      !we || B.has(we) || (B.add(we), L.push(we));
    }
    return L;
  }, v = (_, L) => {
    var we;
    const B = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && B.push(_.images), Array.isArray((we = _ == null ? void 0 : _.ui) == null ? void 0 : we.images) && _.ui.images.length && B.push(_.ui.images);
    const ce = [];
    for (const E of B)
      L >= 0 && L < E.length && ce.push(E[L]), ce.push(...E);
    return ce;
  }, x = (_, L) => {
    var oe;
    const B = String(L || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const we = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((Q) => String((Q == null ? void 0 : Q.name) || "") === B);
    if (we < 0) return { src: "", sourceType: "", inputName: B };
    const E = _.graph ? _.getInputLink(we) : null;
    if ((E == null ? void 0 : E.origin_id) == null) return { src: "", sourceType: "", inputName: B };
    const z = E.origin_id, xe = Bg(_, we, z);
    if (!xe) return { src: "", sourceType: "", inputName: B };
    const te = Number(E.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(xe) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const Q = [];
      te >= 0 && te < J.length && Q.push(J[te]), Q.push(...J);
      const Pe = y(Q.filter((Ee) => !Xl(Ee)));
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "appNodeImageUrls", inputName: B };
    }
    const q = c((xe == null ? void 0 : xe.id) ?? z), U = y(v(q, te).filter((Q) => !Xl(Q))).map((Q) => `${Q}&pano_src=${dd(q)}`);
    if (U.length)
      return { src: U[0], srcCandidates: U, sourceType: "nodeOutputs", inputName: B };
    const j = Array.isArray(xe == null ? void 0 : xe.imgs) ? xe.imgs : [];
    if (j.length) {
      const Q = [];
      te >= 0 && te < j.length && Q.push(j[te]), Q.push(...j);
      const Pe = y(Q);
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "nodeImgs", inputName: B };
    }
    const O = (oe = xe == null ? void 0 : xe.widgets) == null ? void 0 : oe.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (O) {
      let Q = o(O.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (xe.comfyClass === "LoadImage" || xe.type === "LoadImage") && (Q = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`), Q) return { src: Q, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, N = (_, L = []) => {
    var ce;
    const B = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const we of L) {
      const E = B.findIndex((J) => String((J == null ? void 0 : J.name) || "") === we), z = E >= 0 && _.graph ? _.getInputLink(E) : null;
      if ((z == null ? void 0 : z.origin_id) == null) continue;
      const xe = c(((ce = Bg(_, E, z.origin_id)) == null ? void 0 : ce.id) ?? z.origin_id), te = (Array.isArray(xe == null ? void 0 : xe.images) ? xe.images : []).find(Xl);
      return te ? `${so(t, te)}&pano_src=${dd(xe)}` : "";
    }
    return "";
  }, k = (_, L = []) => {
    const B = Array.isArray(L) ? L : [L];
    for (const ce of B) {
      const we = x(_, ce);
      if (String((we == null ? void 0 : we.src) || "").trim()) return we;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (_) => {
    const L = String(_ || "").trim();
    if (!L) return [];
    if (f2(L)) return [L];
    const { filename: B, subfolder: ce } = d2(L);
    return B ? y([
      so(t, { filename: B, subfolder: ce, type: "temp" }),
      so(t, { filename: B, subfolder: ce, type: "output" }),
      so(t, { filename: B, subfolder: ce, type: "input" }),
      L
    ]) : [L];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var L, B;
      try {
        (B = (L = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : L.forEach) == null || B.call(L, (ce, we, E) => {
          var z;
          ce != null && ce.img && ((z = r == null ? void 0 : r.isImageLoadFailed) != null && z.call(r, ce.img)) && E.delete(we);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, L) => {
      var B;
      (B = _ == null ? void 0 : _.delete) == null || B.call(_, `__ui__${String(L || "")}`);
    },
    linkedValue: (_, L) => {
      var z, xe, te, J;
      const B = String(L || ""), ce = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((q) => String((q == null ? void 0 : q.name) || "") === B) : -1, we = ce >= 0 && _.graph ? _.getInputLink(ce) : null;
      if (we) {
        const q = c(we.origin_id), U = [
          q == null ? void 0 : q.output,
          q == null ? void 0 : q.result,
          (z = q == null ? void 0 : q.data) == null ? void 0 : z.output,
          (xe = q == null ? void 0 : q.data) == null ? void 0 : xe.result,
          (te = q == null ? void 0 : q.ui) == null ? void 0 : te.output,
          (J = q == null ? void 0 : q.ui) == null ? void 0 : J.result
        ];
        for (const j of U) {
          if (!Array.isArray(j)) continue;
          const O = j[Number(we.origin_slot || 0)];
          if (typeof O == "string" && O.trim()) return O;
        }
      }
      const E = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((q) => String((q == null ? void 0 : q.name) || "") === B) : null;
      return String((E == null ? void 0 : E.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (_, L = [], B = null, ce = "") => {
      var ht;
      const we = Array.isArray(L) ? L : [L], E = k(_, we), xe = (Array.isArray(E == null ? void 0 : E.srcCandidates) && E.srcCandidates.length ? E.srcCandidates : [E == null ? void 0 : E.src]).map((Ye) => String(Ye || "").trim()).filter(Boolean);
      if (!xe.length) return null;
      const te = y(xe.flatMap((Ye) => P(Ye)));
      if (!te.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(ce || we.join("|") || "image_exact"), q = xe.join(`
`), U = _.__panoLinkedInputImageCache.get(J);
      if (U && U.srcRaw === q && U.img) return U.img;
      const j = n || globalThis.Image;
      if (typeof j != "function") return null;
      const O = new j();
      (ht = r == null ? void 0 : r.markImageLoading) == null || ht.call(r, O, q);
      const oe = { srcRaw: q, resolvedSrc: "", img: O };
      _.__panoLinkedInputImageCache.set(J, oe);
      let Q = -1;
      const Pe = (Ye) => {
        var D, gt, Ae;
        Ye === "ready" ? (D = r == null ? void 0 : r.markImageReady) == null || D.call(r, O, q) : (gt = r == null ? void 0 : r.markImageFailed) == null || gt.call(r, O, q), B == null || B(O), (Ae = _.setDirtyCanvas) == null || Ae.call(_, !0, !0);
      }, Ee = () => {
        if (Q += 1, Q >= te.length) {
          Pe("failed");
          return;
        }
        oe.resolvedSrc = te[Q], O.src = oe.resolvedSrc;
      };
      return O.onload = () => Pe("ready"), O.onerror = () => {
        if (Q + 1 < te.length) {
          Ee();
          return;
        }
        Pe("failed");
      }, Ee(), O;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, L, B, ce = null) => {
      var q, U, j;
      const we = u(_, L)[0] || null, E = o(we);
      if (!E) return null;
      const z = `__ui__${L}`, xe = (q = B == null ? void 0 : B.get) == null ? void 0 : q.call(B, z);
      if (xe && xe.__panoSrc === E) return xe;
      const te = n || globalThis.Image;
      if (typeof te != "function") return null;
      const J = new te();
      return J.__panoSrc = E, (U = r == null ? void 0 : r.markImageLoading) == null || U.call(r, J, E), J.onload = () => {
        var O;
        (O = r == null ? void 0 : r.markImageReady) == null || O.call(r, J, E), ce == null || ce(J);
      }, J.onerror = () => {
        var O;
        (O = r == null ? void 0 : r.markImageFailed) == null || O.call(r, J, E), ce == null || ce(J);
      }, J.src = E, (j = B == null ? void 0 : B.set) == null || j.call(B, z, J), J;
    },
    uiList: u,
    uiValue: d
  };
}
const h2 = 1e-3;
function Kb(e, t, n, r) {
  if (!pa(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(h2 / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Wb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function m2(e, t) {
  return Math.floor(e * t.fps);
}
function Bb(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Ug = 4;
function Ub({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((x, N) => x !== n[N])) && (n = c, r.clear(), o = null), u === null) return null;
      const y = m2(u, d);
      for (let x = y; x < Math.min(n.length, y + Ug + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + Ug) && x !== o && r.delete(x);
      const v = r.get(y);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function Yb({
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
  let c = null, u = !1, d = !1;
  const b = () => c || e(), y = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), u = !1, y(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      c || this.beginGesture();
      const x = t(c, v);
      return x.changed ? (c = x.state, u = !0, r(c), y(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && u;
    },
    commitGesture() {
      if (d || !c) return !1;
      const v = u;
      return v && o(c), c = null, u = !1, r(null), y(), v;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, u = !1, r(null), y(), !0);
    },
    apply(v) {
      if (d) return !1;
      c && this.commitGesture();
      const x = t(e(), v);
      return x.changed ? (o(x.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const ql = "sticker_image_1", Xb = "external_image", Sa = 0;
function ha(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function vf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Hi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function pd(e, t = Sa) {
  return (e == null ? void 0 : e.version) !== 2 ? Hi(e) : Hi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: ko(n, t).active,
    external: n.source.kind === "port",
    ...fp(n, t)
  }));
}
function vp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Hi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function qb(e) {
  return String((e == null ? void 0 : e.id) || "") === ql || String((e == null ? void 0 : e.source_kind) || "") === Xb;
}
function _p(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : qb(t);
}
const Jb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Zb(e) {
  return !qb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Jb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Qb(e) {
  const t = Zb(e);
  return t ? Jb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function e1(e, t = {}) {
  var V, _, L;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === ql);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === ql;
    return {
      state: {
        ...e,
        stickers: n.filter((ce, we) => we !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const B = ha(P, v, x), ce = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? P), we = ha(ce, v, x), E = Number(((L = c == null ? void 0 : c.initial_pose) == null ? void 0 : L.vFOV_deg) ?? we);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(E - we) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((z, xe) => xe === r ? {
          ...z,
          vFOV_deg: B,
          initial_pose: z.initial_pose && typeof z.initial_pose == "object" ? { ...z.initial_pose, vFOV_deg: we } : z.initial_pose
        } : z)
      },
      changed: !0
    };
  }
  const C = n.reduce((B, ce) => Math.max(B, Number((ce == null ? void 0 : ce.z_index) || 0)), -1), F = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: y ? ha(P, v, x) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, W = {
    ...c || {},
    id: ql,
    source_kind: Xb,
    source_link_id: o,
    source_state_hash: a,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: C + 1
  }, R = r >= 0 ? n.map((B, ce) => ce === r ? W : B) : [...n, W];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function Yg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const g2 = ["IMAGE", "VIDEO"];
function Xg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => g2.includes(n)) ? "2d" : null;
}
function y2(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Xg(r.type) ?? Xg((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function t1(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Yg(e, "sticker"),
    awaitingPose: !t && (Yg(e, "sticker_state") || y2(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function qg(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Zr({ version: 2, stickers: [n] }).stickers[0];
}
function n1(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((C) => _p(e, C)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const C = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, W) => W !== c),
        active: C ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const C = { ...qg(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((F, W) => W === c ? C : F) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const C = [u.size.value, ...u.size.keyframes.map((R) => R.value)], F = C.map((R) => ha(R.hFOV_deg, o, a));
    if (C.every((R, V) => Math.abs(R.vFOV_deg - F[V]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...u.size.value, vFOV_deg: F[0] },
      keyframes: u.size.keyframes.map((R, V) => ({ ...R, value: { ...R.value, vFOV_deg: F[V + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, V) => V === c ? { ...R, size: W } : R) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((C) => C.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, qg(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (C) => d ? ha(C, o, a) : C, N = dp(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: x(v)
  }, Hi(e).reduce((C, F) => Math.max(C, F.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((C) => ({ ...C, value: { ...C.value, vFOV_deg: x(C.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function wp(e) {
  const t = Hi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: vf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: vf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: vf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function r1(e) {
  const t = vp(e), n = _p(e, t), r = Hi(e).some((u) => u && u.visible !== !1), o = wp(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Qb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function b2(e) {
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
function Jg(e, t) {
  const n = vp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = b2(e), o = String(n.id || ""), a = wp(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function v2(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function _2(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return e1(e, t.value);
  if (t.type === "sync-port") return n1(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = wp(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ha(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, dp(a, Bl(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const v = { id: a, asset_id: c, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [c]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], v],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Hi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = vp(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, locked: o } : a)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = Zb(n);
    return !o || !Qb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Jg(e, "front");
  if (t.type === "send-back") return Jg(e, "back");
  if (t.type === "delete-selected") {
    if (_p(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Hi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = v2(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? fp(n, Sa) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = eN(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return vb(b, Sa, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...u } : d)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function w2(e = {}) {
  return Yb({
    ...e,
    reduce: _2,
    projectModel: r1
  });
}
const hd = 2;
function po(e, t) {
  return Math.floor(e * t + 0.5);
}
function x2(e, t) {
  return Math.floor(e * t + 1e-3);
}
function i1({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, x = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const oe of x) oe();
    x = [];
  }
  function C(oe, Q = {}) {
    return P(), v = { name: oe, ...Q }, u(), v;
  }
  function F(oe, Q, Pe) {
    const Ee = () => {
      v === oe && Pe();
    };
    e.addEventListener(Q, Ee), x.push(() => e.removeEventListener(Q, Ee));
  }
  function W(oe, Q) {
    let Pe = t.requestFrame(function Ee(ht) {
      v === oe && (Q(ht), v === oe && (Pe = t.requestFrame(Ee)));
    });
    x.push(() => t.cancelFrame(Pe));
  }
  function R(oe) {
    d = oe, a(d);
  }
  function V() {
    return C(y ? "error" : "idle");
  }
  function _() {
    y = !0, V();
  }
  function L() {
    const { seekable: oe } = e, Q = oe != null && oe.length ? oe.end(oe.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Q) ? Q : 1 / 0));
  }
  function B(oe) {
    if (!N()) return oe === "play" ? xe() : V();
    if (e.readyState < hd) {
      const Q = C("loading", { then: oe });
      return F(Q, "loadeddata", () => B(Q.then)), F(Q, "error", _), Q;
    }
    return oe === "play" && d / n() >= Number(e.duration) ? xe() : ce(oe, !1);
  }
  function ce(oe, Q) {
    const Pe = L();
    if (!e.ended && po(Number(e.currentTime), n()) === po(Pe, n())) return we(oe);
    const Ee = C("seeking", { then: oe, frame: d, retried: Q });
    return F(Ee, "seeked", () => {
      const ht = po(Number(e.currentTime), n()) === po(L(), n()), Ye = d === Ee.frame;
      ht || Ye && Ee.retried ? we(Ee.then) : ce(Ee.then, Ye);
    }), F(Ee, "error", _), e.currentTime = Pe, Ee;
  }
  function we(oe) {
    return oe === "play" ? E() : (c(), V());
  }
  function E() {
    const oe = C("playingVideo", { shown: !1 });
    if (F(oe, "pause", () => e.ended ? z() : q()), F(oe, "ended", z), F(oe, "error", _), o() && po(Number(e.duration), n()) >= r()) {
      const Pe = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Pe;
      });
    }
    const Q = (Pe, Ee) => {
      Ee && !oe.shown && (oe.shown = !0, u()), te(po(Pe, n()));
    };
    if (k()) {
      let Pe = e.requestVideoFrameCallback(function Ee(ht, Ye) {
        v === oe && (Q(Number(Ye.mediaTime), !0), v === oe && (Pe = e.requestVideoFrameCallback(Ee)));
      });
      x.push(() => {
        var Ee;
        return (Ee = e.cancelVideoFrameCallback) == null ? void 0 : Ee.call(e, Pe);
      });
    } else
      W(oe, () => Q(Number(e.currentTime), e.readyState >= hd));
    return Promise.resolve(e.play()).catch(() => {
      v === oe && q();
    }), oe;
  }
  function z() {
    c(), xe();
  }
  function xe() {
    const oe = C("playingClock", { startTs: t.now(), startFrame: d });
    return W(oe, (Q) => te(oe.startFrame + Math.floor((Q - oe.startTs) / 1e3 * n()))), oe;
  }
  function te(oe) {
    if (oe < r()) {
      R(oe);
      return;
    }
    if (!o()) {
      J(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), R(0), B("play");
  }
  function J(oe) {
    v.name === "playingVideo" ? (P(), e.pause(), R(Math.max(0, oe)), c()) : R(Math.max(0, oe)), B("still");
  }
  function q() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const oe = x2(Number(e.currentTime), n());
      R(Math.min(oe, r() - 1)), c(), d === oe ? V() : B("still");
    } else v.name === "playingClock" && J(Math.min(d, r() - 1));
  }
  function U() {
    if (!O()) {
      if (d >= r() - 1 && R(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      B("play");
    }
  }
  function j(oe) {
    const Q = Math.max(0, Math.round(oe));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", R(Q), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), R(Q), B("still");
  }
  function O() {
    return v.name === "playingVideo" || v.name === "playingClock" || v.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return v.name;
    },
    get playing() {
      return O();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: U,
    stop: q,
    seek: j,
    toggle() {
      O() ? q() : U();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(oe) {
      P(), b = !!oe, y = !1, B("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function o1({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(P) {
    u = P, t();
  }
  function y(P) {
    c = P, e.currentTime = P;
  }
  function v() {
    const P = d;
    x(), d !== P && n();
  }
  function x() {
    if (!r || o || e.readyState < hd) return;
    const { time: P, playing: C, fps: F } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (C) {
      if (c !== null) return;
      const W = Number(e.duration), R = Number.isFinite(W) ? Math.min(P, W) : P, V = Math.abs(Number(e.currentTime) - R) > 1.5 / F;
      if (e.ended && !V) return;
      V && y(R), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === P) && (Number(e.currentTime) === P ? b(P) : y(P));
  }
  const N = {
    loadeddata: v,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: v,
    seeked: () => {
      const P = c;
      c = null, !a.playing && P === a.time ? b(P) : v();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [P, C] of Object.entries(N)) e.addEventListener(P, C);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: C = null, playing: F = !1, fps: W }) {
      P !== r && (k(P), n()), a = { time: C, playing: F, fps: W }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, C) {
      return !r || o ? C : a.time === null ? null : a.playing && d ? e : u === null ? C : P;
    },
    dispose() {
      for (const [P, C] of Object.entries(N)) e.removeEventListener(P, C);
      k("");
    }
  };
}
function S2(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function k2({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let y = "", v = "", x = 0;
  const N = /* @__PURE__ */ new Set();
  let k = null, P = null;
  const C = () => o().timeline.fps, F = (z) => z.stickers.find((xe) => xe.source.kind === "port"), W = () => {
    const z = o(), xe = F(z);
    return mb(z, {
      minimum: Math.round(C() * 5),
      frames: Math.max(
        y ? Math.round(x * C()) : 0,
        k && xe ? Wb(xe.clip, C(), k.meta) : 0
      ),
      camera: b
    });
  }, R = i1({
    video: e,
    clock: r,
    fps: C,
    span: W,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), V = () => {
    v === y && Number.isFinite(e.duration) && (x = e.duration);
  }, _ = () => {
    v && (N.add(v), d());
  }, L = o1({ video: t, onCapture: u, onChange: d }), B = Ub({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", V), e.addEventListener("error", _);
  function ce(z) {
    z !== v && (v = z, e.pause(), z ? e.src = z : e.removeAttribute("src"), e.load(), R.setSource(!!z));
  }
  function we() {
    R.playing && R.stop();
  }
  function E(z) {
    const xe = F(z);
    P = k && xe ? Kb(xe.clip, R.frame, z.timeline.fps, k.meta) : null, L.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: P,
      playing: R.advancing,
      fps: z.timeline.fps
    });
  }
  return {
    get frame() {
      return R.frame;
    },
    get playing() {
      return R.playing;
    },
    get showsVideo() {
      return R.showsVideo;
    },
    get source() {
      return v;
    },
    pause: we,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(z, xe) {
      return k != null && k.frames ? B.picture(k.frames, P, k.meta, xe) : L.picture(z, xe);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: z, sources: xe, state: te, sticker: J = null }) {
      if (k = z ? J : null, !z)
        return we(), ce(""), E(te), !1;
      for (const oe of N)
        xe.includes(oe) || N.delete(oe);
      const q = xe.find((oe) => oe && !N.has(oe)) || "", U = q !== y;
      U && (y = q, x = 0), ce(y);
      const j = hb(te, { camera: b }) || !!y && R.state !== "error" || !!k;
      return j || we(), (U || !j || !R.playing && R.frame >= W()) && R.frame !== Sa && R.seek(Sa), E(te), j;
    },
    dispose() {
      R.dispose(), L.dispose(), e.removeEventListener("loadedmetadata", V), e.removeEventListener("error", _), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const Nc = Math.PI / 180, qr = 180 / Math.PI, M2 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), N2 = 260;
function Zg(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function a1(e, t) {
  return t ? a1(t, e % t) : e;
}
function P2(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = a1(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function zs(e, t) {
  const n = Zg(e), r = Zg(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: P2(n, r) };
}
function No(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function s1(e) {
  const t = No(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? di(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function xp(e, t, n = M2) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (C, F, W) => {
    const R = C + F, V = Math.max(0, W - 1), _ = R > V && R > 0 ? V / R : 1;
    return [C * _, F * _];
  }, [y, v] = b(d, c, r), [x, N] = b(a, u, o), k = {
    x: y,
    y: x,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - x - N)
  }, P = Jd(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function A2(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = xp({ width: n, height: r }, 1), a = ne(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * Nc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Yy(d, Ky(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = C2(b, Ma(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Zd({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function l1(e) {
  return {
    yaw: Vt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * qr),
    pitch: ne(Math.asin(ne(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * qr, -89.9, 89.9)
  };
}
function C2(e, t) {
  const n = l1(e), r = Ma(n.yaw, n.pitch, 0), o = nf(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, c = Math.hypot(a.x, a.y, a.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const u = {
    x: a.x / c,
    y: a.y / c,
    z: a.z / c
  };
  return {
    ...n,
    roll: Uc(Math.atan2(
      nf(u, r.up),
      nf(u, r.right)
    ) * qr)
  };
}
function c1(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = xp({ width: n, height: r }, So(e)), a = xo(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Yy(e, Ky(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = l1(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: ne(2 * Math.atan(n / (2 * a)) * qr, 1, 179)
  };
}
function I2(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = xo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = Qd(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, x = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(Xf * Nc), P = N >= 1 ? k : k * N, C = N >= 1 ? k / N : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * qr,
      vFOV_deg: 2 * Math.atan(y / u) * qr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(P) * qr,
        vFOV_deg: 2 * Math.atan(C) * qr
      }
    }
  };
}
function qo(e, t) {
  const n = No(e);
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
function O2(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = xo(n, e);
    return Zd(Jd(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Gl(a, t) };
}
function Qg(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = zs(t, n);
  if (!a) return e;
  const c = So(e) >= 1;
  r && a.ratio >= 1 !== c && (a = zs(a.height, a.width));
  const u = O2(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function u1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (No(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Wy({
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
    const r = No(e);
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
    return qo(e, (r) => Qg(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return qo(e, (r) => {
      const a = String(di(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? zs(a[1], a[2]) : zs(So(r), 1);
      return c ? Qg(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? qo(e, (o) => {
      const a = Uc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? qo(e, (r) => {
    const o = By(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? qo(e, (r) => {
    const o = Uy(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? qo(e, (r) => {
    const o = p1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function f1({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const u = a && o ? "alt" : r ? "shift" : "";
  if (!u || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && y < Math.min(d.w, d.h) * c) return null;
  const v = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: v,
    accumulatedRad: 0
  };
}
function d1(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Hy(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Gy(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function p1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Nc, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, x = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * Nc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Vt(Number(e.yaw_deg || 0) - Math.atan(x) / P * qr),
    pitch_deg: ne(Number(e.pitch_deg || 0) - Math.atan(N) * qr, -90, 90)
  };
}
function E2({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Yb({
    readState: e,
    reduce: u1,
    projectModel: s1,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Me = Object.freeze({
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
}), F2 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, T2 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: F2(t[2])
})), D2 = {
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
}, e0 = Object.fromEntries(
  Object.entries(D2).map(([e, t]) => [e, {
    name: t.name,
    elements: T2(t.body)
  }])
), zt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(e0, r) ? e0[r] : null;
    });
    return (r, o) => n.value ? (ae(), fe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ct(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ae(!0), fe(Be, null, wt(n.value.elements, (a, c) => (ae(), fe(Be, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ae(), fe("path", hi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ae(), fe("circle", hi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ae(), fe("rect", hi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ae(), fe("line", hi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ae(), fe("polyline", hi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ae(), fe("polygon", hi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ut("", !0)
      ], 64))), 128))
    ], 2)) : ut("", !0);
  }
}, cn = {
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
    const t = e, n = pt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ae(), br(oS(e.tag), hi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: ly(() => [
        De(zt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, L2 = ["aria-expanded", "disabled"], R2 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, V2 = ["data-aspect", "disabled", "onClick"], $2 = { class: "pano-cutout-aspect-custom" }, z2 = ["disabled"], j2 = ["disabled"], H2 = ["data-custom-width", "data-custom-height", "disabled"], h1 = {
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
    ]), a = /* @__PURE__ */ Xt("1"), c = /* @__PURE__ */ Xt("1"), u = /* @__PURE__ */ Xt(null), d = pt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = pt(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], C = String(n.model.aspectLabel || "");
      return P.length ? P.map((F) => {
        const W = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), R = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || W);
        return {
          ...typeof F == "object" && F ? F : {},
          value: W,
          label: R,
          active: C ? W === C : (F == null ? void 0 : F.active) === !0
        };
      }) : o.map((F) => ({
        ...F,
        active: F.value === C
      }));
    }), y = pt(() => {
      var C;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((C = b.value.find((F) => F.active === !0)) == null ? void 0 : C.label) || "Aspect");
    });
    _o(y, (P) => {
      const C = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      C && (a.value = C[1], c.value = C[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function x(P) {
      var C;
      n.model.aspectOpen === !0 && ((C = u.value) != null && C.contains(P.target) || v({ type: "close-aspect" }));
    }
    Gc(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Bs(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(P) {
      const [C, F] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: C,
        height: F,
        preserveOrientation: !0
      });
    }
    function k() {
      v({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (P, C) => (ae(), fe("div", {
      ref_key: "rootElement",
      ref: u,
      class: ct(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ae(), br(cn, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Me).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: C[0] || (C[0] = (F) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ae(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: C[1] || (C[1] = (F) => v({ type: "toggle-aspect" }))
      }, [
        De(zt, {
          icon: e.model.aspectIcon || Qe(Me).aspect
        }, null, 8, ["icon"]),
        X("span", null, et(y.value), 1),
        De(zt, {
          icon: Qe(Me).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, L2)),
      vi(X("div", R2, [
        (ae(!0), fe(Be, null, wt(b.value, (F) => (ae(), fe("button", {
          key: F.value,
          class: ct(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: d.value,
          onClick: (W) => N(F)
        }, et(F.label), 11, V2))), 128)),
        X("div", $2, [
          vi(X("input", {
            "onUpdate:modelValue": C[2] || (C[2] = (F) => a.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, z2), [
            [dg, a.value]
          ]),
          C[4] || (C[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          vi(X("input", {
            "onUpdate:modelValue": C[3] || (C[3] = (F) => c.value = F),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, j2), [
            [dg, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, H2)
        ])
      ], 512), [
        [Po, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, G2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, K2 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Xt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ae(), fe("div", {
      class: ct(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ft(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ft(() => {
      }, ["stop"]))
    }, [
      De(cn, {
        icon: Qe(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Ft((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", G2, [
        o[3] || (o[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Be, null, wt(Qe(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, et(a[0]), 1),
          X("span", null, et(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, W2 = {
  class: "pano-view-unavailable",
  role: "status"
}, Sp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ae(), fe("div", W2, et(Qe(Fb)), 1));
  }
}, B2 = { class: "pano-cutout-node-surface" }, U2 = ["title", "disabled"], Y2 = { class: "value" }, X2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, q2 = {
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
    return (r, o) => (ae(), fe("div", B2, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Ft(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Ft(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(zt, {
            icon: Qe(Me).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(cn, {
          icon: e.model.hasShot ? Qe(Me).delete : Qe(Me).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(h1, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        X("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Ft((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(zt, {
            icon: Qe(Me).roll
          }, null, 8, ["icon"]),
          X("span", Y2, et(e.model.rollLabel || "0.0°"), 1)
        ], 40, U2),
        De(cn, {
          icon: Qe(Me).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(K2)
      ], 32),
      e.model.hasShot === !1 ? (ae(), fe("div", X2, " Choose a view · + Add Frame ")) : ut("", !0),
      e.model.viewUnavailable ? (ae(), br(Sp, { key: 1 })) : ut("", !0)
    ]));
  }
}, m1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Xt(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = v, c = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(v) {
      var P, C;
      const { active: x, intent: N } = u();
      if (!x) return;
      const k = ((C = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : C[0]) || null;
      if (k) {
        r("file-selected", { intent: N, file: k });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: v, intent: x } = u();
      v && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (v, x) => (ae(), fe("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: y
    }, null, 544));
  }
}, J2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Z2 = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Xt(!1), n = Object.freeze([
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
    return (r, o) => (ae(), fe("div", {
      class: ct(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ft(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ft(() => {
      }, ["stop"]))
    }, [
      De(cn, {
        icon: Qe(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Ft((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", J2, [
        o[3] || (o[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Be, null, wt(Qe(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, et(a[0]), 1),
          X("span", null, et(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Q2 = { class: "pano-stickers-node-surface" }, eP = ["disabled"], tP = ["aria-label", "data-tip"], nP = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, rP = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, iP = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Xt(null);
    function r(c) {
      var u;
      (u = t.onAction) == null || u.call(t, c);
    }
    function o() {
      var c, u;
      (u = (c = n.value) == null ? void 0 : c.open) == null || u.call(c, "add");
    }
    function a(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, u) => (ae(), fe("div", Q2, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Ft(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Ft(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(zt, {
            icon: Qe(Me).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(zt, {
            icon: Qe(Me).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, eP),
        De(cn, {
          icon: e.model.locked ? Qe(Me).lock_closed : Qe(Me).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(cn, {
          icon: Qe(Me).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(cn, {
          icon: Qe(Me).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(cn, {
          icon: e.model.isExternalSelection ? Qe(Me).back_initial : Qe(Me).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(Z2)
      ], 32),
      e.model.playable === !0 ? (ae(), fe("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Ft(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Ft(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(zt, {
          icon: e.model.playing ? Qe(Me).pause : Qe(Me).play
        }, null, 8, ["icon"])
      ], 40, tP)) : ut("", !0),
      e.model.hasStickers === !1 ? (ae(), fe("div", nP, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (ae(), fe("div", rP, "Drop image to add")) : ut("", !0),
      De(m1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ae(), br(Sp, { key: 3 })) : ut("", !0)
    ]));
  }
}, t0 = 24;
function oP(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ns(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function g1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function md(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Ns(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ns(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : g1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function aP(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => Ns(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => Ns(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ns(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : g1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function kp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function y1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function is(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: ne(n.x, -r, t.width + r),
    y: ne(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function sP(e) {
  const t = Ma(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(ne(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * vt * 0.5),
    tanY: Math.tan(ne(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * vt * 0.5)
  };
}
function lo(e, t, n) {
  return qd(pc(
    pc(e.centerDir, hc(e.right, t)),
    hc(e.up, n)
  ));
}
function Mp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = sP(e), r = is(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    lo(n, -n.tanX, n.tanY),
    lo(n, n.tanX, n.tanY),
    lo(n, n.tanX, -n.tanY),
    lo(n, -n.tanX, -n.tanY)
  ].map((x) => is(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const C = P / 28;
      let F, W;
      N === 0 ? (F = -n.tanX + 2 * n.tanX * C, W = n.tanY) : N === 1 ? (F = n.tanX, W = n.tanY - 2 * n.tanY * C) : N === 2 ? (F = n.tanX - 2 * n.tanX * C, W = -n.tanY) : (F = -n.tanX, W = -n.tanY + 2 * n.tanY * C);
      const R = is(lo(n, F, W), t);
      R && k.push({ x: R.x, y: R.y });
    }
    return k;
  }), c = is(lo(n, 0, n.tanY), t), u = is(
    lo(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, y = u.y - c.y, v = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * t0,
      y: c.y + y / v * t0
    },
    visible: !0
  };
}
function n0(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Mp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = md(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = md(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function lP(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Vt(Math.atan2(r.x, r.z) * un),
    pitch_deg: Math.asin(ne(r.y, -1, 1)) * un
  };
}
function cP(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: ne(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: ne(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function uP(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * un;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Cl = null;
function Np() {
  return Cl || (Cl = new Promise((e) => {
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
  }), Cl);
}
function hr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function fP(e, t = 1024) {
  const n = Math.max(1, Math.round(hr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(hr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function dP(e, t, n) {
  const r = hr(t), o = hr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = hr(a.u0), u = hr(a.v0), d = hr(a.u1), b = hr(a.v1);
  if (d <= c || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + hr(y.du)) * r,
    centerY: ((u + b) * 0.5 + hr(y.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: hr(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, hr(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function pP(e, t, n) {
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
function hP() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(a));
      }
  }
  function r(a, c) {
    let u = e.get(a);
    if (u)
      return e.delete(a), e.set(a, u), !u.settled && typeof c == "function" && u.listeners.add(c), u.image;
    const d = new Image();
    u = { image: d, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(a, u);
    const b = () => {
      u.settled = !0;
      const y = [...u.listeners];
      u.listeners.clear(), y.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), y = dP(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = pP(a, c, u), x = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), C = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || C < 1) return null;
    const F = document.createElement("canvas");
    F.width = Math.max(1, Math.round(c)), F.height = Math.max(1, Math.round(u));
    const W = F.getContext("2d");
    return W ? (y.wrapOffsets.forEach((R) => {
      W.save(), W.translate(y.centerX + R, y.centerY), W.rotate(y.rotationRad), W.scale(y.scale, y.scale), W.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), W.restore();
    }), t.set(x, { revision: v, source: F }), { source: F, revision: v }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const c = new Set(Array.from(a, (u) => String(u || "").trim()).filter(Boolean));
      for (const u of t.keys())
        c.has(u) || t.delete(u);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function mP(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function gP(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function yP({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const x = r.get(v.owner);
    (x == null ? void 0 : x.get(v.key)) === v && x.delete(v.key);
  }
  function c(v, x, N, k) {
    if (!v || typeof k != "function" || N.settled) return;
    let P = r.get(v);
    P || (P = /* @__PURE__ */ new Map(), r.set(v, P));
    const C = P.get(x);
    if ((C == null ? void 0 : C.entry) === N) {
      C.callback = k;
      return;
    }
    a(C);
    const F = { owner: v, key: x, entry: N, callback: k };
    P.set(x, F), N.listeners.add(F);
  }
  function u(v, x) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !x && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(v.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [x, N] of n) {
        if (n.size <= v) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function b(v, x, N, k = null) {
    const P = String(x || ""), C = String(N || "");
    if (!P || !C) return null;
    let F = n.get(P);
    if (F)
      n.delete(P), n.set(P, F);
    else {
      d(o - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const V = new R();
      F = { key: P, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, F), V.onload = () => u(F, !0), V.onerror = () => u(F, !1), V.src = C;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || c(v, P, F, k), F.image;
  }
  function y(v) {
    const x = r.get(v);
    x && ([...x.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const fs = /* @__PURE__ */ new WeakMap();
function b1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = fs.get(e);
  r || (r = [], fs.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = fs.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && fs.delete(e);
  };
}
function yi(e, ...t) {
  const n = fs.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Jl = Object.freeze({
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
}), v1 = "PanoramaSuite.Editor.ViewControls", bP = {
  id: v1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Jl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function vP(e) {
  return Object.hasOwn(Jl, e) ? Jl[e] : Jl.default;
}
function _P(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function wP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Pc = "state_json";
function bi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function xP(e) {
  var c, u;
  const t = bi(e, Pc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = yb(n, {
    coverage: (c = bi(e, "coverage")) == null ? void 0 : c.value
  }), o = u1(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Pp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = bi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, x, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function SP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function r0(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function kP(e) {
  var y, v, x, N, k, P;
  if (!e) return;
  const t = bi(e, "coverage"), n = bi(e, "bg_color"), r = bi(e, Pc), o = bi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && SP(a) && (r0(c) || c === ""))) return;
  let b = "360";
  if (r0(c))
    try {
      b = String(Yn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function Zl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function gd(e, t, n) {
  var a, c;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((u) => String((u == null ? void 0 : u.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (c = o.parentEl) != null && c.style && (o.parentEl.style.display = "");
    const u = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(u) || Number(u[0] || 0) <= 0 || Number(u[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function MP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function ds(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const u = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(u, u), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function _1(e, t = {}) {
  var r;
  await MP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function NP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await _1(e), n ? n.apply(this, r) : this.value;
  };
}
function PP(e) {
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
function AP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function os(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: u,
  sceneStateV2: d = !1,
  studio: b = !1
}) {
  if (!(e != null && e.prototype)) return;
  function y(v) {
    var k;
    const x = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === x) return;
    PP(v), Pp(v, t), Zl(v, Pc);
    const N = bi(v, Pc);
    if (NP(v, N), N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const P = N.callback;
      N.callback = (C) => {
        var W;
        const F = P ? P(C) : void 0;
        return (W = v.setDirtyCanvas) == null || W.call(v, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const P = bi(v, "bg_color");
      !d && P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (k = P.callback) == null || k.call(P, "#00ff00")), gd(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && Zl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
      return;
    }
    v.__panoSceneStateV2 = d, gd(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && Zl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[v];
    e.prototype[v] = function() {
      const N = x ? x.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && xP(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && kP(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && y(this), v === "onAdded" && k && yi(this, "attach"), N;
    };
  }
}
function CP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return AP(this), r;
  };
}
function IP(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), u = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = u, !c && u < 40) {
      o(a);
      return;
    }
    Pp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    gd(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Zl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function OP({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: c,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [bP],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && os(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && os(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), y === "PanoramaStudio" && os(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && os(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && os(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), mc(y) && CP(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Pp(d, e), mc(b) && IP(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const EP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Cr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : EP.test(String(e.name || "")) : !1;
}
function Ap(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Cr(n)) : !1;
}
function FP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (Ap(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, u = (d) => {
    var y;
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((v) => Cr(v));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", u, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", u, !0), n(!1);
  };
}
async function ps(e, t = {}) {
  var c, u, d, b;
  if (!Cr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((v, x) => {
      const N = new n();
      N.onload = () => v(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function ho(e, { fetchApi: t } = {}) {
  if (!Cr(e)) throw new TypeError("A supported image file is required.");
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
const i0 = /* @__PURE__ */ new WeakSet(), o0 = /* @__PURE__ */ new WeakSet();
let a0 = 0;
function yd(e) {
  if (!e || typeof e != "object" || o0.has(e)) return e;
  const t = String(e.type || "preview");
  return a0 += 1, e.type = `${t}:pano-${a0}`, o0.add(e), e;
}
function Ac(e) {
  if (!e || typeof e != "object" || i0.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, i0.add(e), e;
}
function w1(e, t) {
  var r, o;
  if (!t || ((o = (r = Ac(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function TP({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: jt } = Rl;
t2((e) => Gi(e.id));
n2(Yt);
const Cp = yP(), { linkedVideoFile: DP } = Gb({ app: jt, api: Yt });
function bd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Rl == null ? void 0 : Rl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const LP = "pano_suite.ui_settings.v1", RP = 120, VP = 2048;
function s0() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(LP)) || "").trim();
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
function $P() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function as(e) {
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
function zP() {
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
function vd(e) {
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
function x1(e) {
  const t = vd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function jP(e, t, n) {
  x1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function _d(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Ip(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function S1(e) {
  return mc(Ip(e));
}
function l0(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = jt == null ? void 0 : jt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function k1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = _d(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Ql(e), EA(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = _d(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ql(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ql(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function HP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ql(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  wd.unregister(e), HP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (u = (c = n.root) == null ? void 0 : c.remove) == null || u.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), x = bd();
      return y === x || v === x || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => cA(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function GP(e, t = "#00ff00") {
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
function KP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ma(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Wn(e) {
  var u, d;
  const t = KP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ma(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ma(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? bb(t, { backgroundColor: r, coverage: o, active: wb(e) }) : GP(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ma(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function WP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function M1(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = WP(e == null ? void 0 : e.graph, n)), r;
}
function BP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function N1(e, t = []) {
  const n = BP(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Wi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function c0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Cc(e, t) {
  const n = c0(e), r = c0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function UP(e, t) {
  var n;
  return M1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function YP(e, t = Wi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = N1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return l2(e, c, UP);
}
const wd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Yt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, v, x;
        if (!a) return;
        const c = Cc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...YP(a)].some((N) => Cc(r, N)) || Hb(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (P1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Yt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Yt) != null && e.removeEventListener) || (Yt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ic(e) {
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
  return typeof ((a = Yt) == null ? void 0 : a.apiURL) == "function" ? Yt.apiURL(o) : o;
}
function XP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function qP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function JP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function ZP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (XP(t)) return [t];
  const { filename: n, subfolder: r } = qP(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Ic({
    filename: n,
    subfolder: r,
    type: a
  }));
  return JP([...o, t]);
}
function QP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ic({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Gi(e) {
  const t = jt == null ? void 0 : jt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Cc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Cc(c, o)) return t[c];
  }
  return null;
}
function Ps(e, t, n = null) {
  const r = n || Gi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function rr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return rr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ic({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = rr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ic(e);
}
function Oc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function _f(e) {
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
function Op(e, t) {
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
function eA(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function tA(e, t) {
  try {
    e.__panoOwnOutputRev = mP(e.__panoOwnOutputRev);
    const n = eA(t);
    let r = "";
    for (const o of n)
      if (r = rr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Op(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ga(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function nA(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return ga(e), null;
  const o = Gi(r), a = bp(o, t, rr);
  if (!a)
    return ga(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = Op(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  ga(e);
  const y = c2({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function rA(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = N1(e, t).map((v) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, x) => ({ input: v, idx: x })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const x = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, P = M1(e, v, k);
    if (!P) continue;
    const C = Number(N.origin_slot ?? 0), F = Gi((P == null ? void 0 : P.id) ?? k), W = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (W.length) {
      const L = [];
      C >= 0 && C < W.length && L.push(W[C]), L.push(...W);
      for (const B of L.filter((ce) => !Xl(ce))) {
        const ce = rr(B);
        if (ce)
          return String((x == null ? void 0 : x.name) || ""), { src: `${ce}&pano_src=${dd(F)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (jt == null ? void 0 : jt.getNodeImageUrls) == "function" ? jt.getNodeImageUrls(P) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const L = [];
      C >= 0 && C < R.length && L.push(R[C]), L.push(...R);
      for (const B of L) {
        const ce = rr(B);
        if (ce)
          return String((x == null ? void 0 : x.name) || ""), { src: ce, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const V = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (V.length) {
      const L = [];
      C >= 0 && C < V.length && L.push(V[C]), L.push(...V);
      for (const B of L) {
        const ce = rr(B);
        if (ce)
          return String((x == null ? void 0 : x.name) || ""), { src: ce, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const _ = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image");
    if (_) {
      let L = rr(_.value);
      if (L && !L.includes("/") && !L.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (L = Yt.apiURL(`/view?filename=${encodeURIComponent(L)}&type=input&subfolder=`)), L)
        return String((x == null ? void 0 : x.name) || ""), { src: L, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = xn(e, "background") ? Gi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const x = rr(v);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function iA(e, t = [], n = {}) {
  const r = rA(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = ZP(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = b, e.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const x = () => {
    var k, P, C, F;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (F = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || F.call(C, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[v];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, k, P;
    ((k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : k.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, b.onerror = (N) => {
    var k, P, C, F;
    if (v + 1 < a.length) {
      x();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (F = (C = e.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || F.call(C, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function oA(e, t = [], n = null, r = {}) {
  const o = iA(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function P1(e) {
  var t, n;
  if (e) {
    Cp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ga(e), e.__panoWrappedErpCache = null;
  }
}
function aA(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ga(e), e.__panoWrappedErpCache = null;
  }
}
function A1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Il(e, t, n = "") {
  const r = A1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < RP ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function u0(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function sA(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function wf(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function lA(e) {
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
function cA(e, t) {
  return w1(e, t);
}
function js(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = QP(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const N = Gi(e == null ? void 0 : e.id), k = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = rr(P), a) break;
  }
  if (!a) return null;
  const c = Ps(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Op(a, d) : a, y = gP(a, u, d);
  return Cp.get(e, y, b, (N, k) => {
    var P, C;
    k && (r != null && r.external && e.__panoOutputFromRun && yi(e, "image-loaded"), (C = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || C.call(P));
  }) || null;
}
function uA(e, t) {
  var v, x, N, k;
  const n = mA(e, t), r = gA(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const C = n.getGroupDisplayCanvas(P);
    return C ? {
      id: `paint_group:${P}`,
      source: C,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = hP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, C;
    return (C = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : C.call(P);
  });
  const d = fP(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((P) => {
    const C = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return C ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: C.source,
      revision: C.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function fA(e, t, n, r) {
  var a, c, u, d, b, y;
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
      const v = r.convertEventToCanvasOffset(t);
      if (Array.isArray(v) && v.length >= 2)
        return {
          x: Number(v[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(v[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = pA(e, t, r);
  return o || null;
}
function dA(e, t) {
  var v, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((x = jt == null ? void 0 : jt.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function pA(e, t, n) {
  var o, a;
  const r = dA(t, n || (jt == null ? void 0 : jt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function hA(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function mA(e, t) {
  var b, y, v, x, N, k, P, C, F, W, R, V;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = hA(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = Uf(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((C = e.__panoPreviewPaintRevision) == null ? void 0 : C.mask) !== d.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function gA(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function yA(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function bA(e, t, n) {
  const r = Mp(t, n);
  r.visible && kp(e, r.boundaryEdges, { selected: !1 });
}
function vA(e, t, n) {
  const r = Mp(t, n);
  r.visible && (e.save(), kp(e, r.boundaryEdges, { selected: !0 }), y1(e, r, { accent: oP(t) }), e.restore());
}
function xd(e, t, n) {
  return Ob(Sc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ec(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Sa;
}
function _A(e) {
  return [xn(e, "background") ? bp(Gi(e.id), ["pano_input_videos"], rr) : "", DP(e, Wi)];
}
function wA(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Gi(e.id), n = Ps(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(rr), meta: n };
  const o = bp(t, ["pano_sticker_input_videos"], rr);
  return o ? { src: o, meta: n } : null;
}
function xA({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function f0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Zr({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = js(e, c.id, _b(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = Bb(b.playback.stickerMedia, u);
        return y ? { media: y, revision: _f(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = js(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Oc(u) ? { media: u, revision: _f(u) } : null;
  }, o = (t.painting_visible === !1 ? [] : uA(e, t)).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Oc(n) ? { media: n, revision: _f(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Eb(e.__panoSurfaceScene.sceneState, Ec(e), t.stickers, { media: r, paintLayers: o })
  };
}
function SA(e, t, n) {
  var V, _, L, B, ce, we, E;
  const r = String(e.__panoPreviewMode || "stickers");
  A1(e, r);
  const o = Wn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (L = (_ = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : _.refresh) == null || L.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (we = (ce = (B = e.__panoStickersNodeSurface) == null ? void 0 : B.session) == null ? void 0 : ce.refresh) == null || we.call(ce));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? xA(e.__panoSurfacePlayback) : nA(e, ["pano_input_videos"], () => {
    var z, xe;
    return (xe = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : xe.call(z);
  })) || oA(
    e,
    Wi,
    () => {
      var z, xe;
      return (xe = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : xe.call(z);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Oc(y);
  let x = null;
  const N = (z, xe) => {
    x || (x = f0(e, o, y));
    const te = n.render({ width: z.w, height: z.h, camera: xe, ...x });
    return te && d.drawImage(te.canvas, te.x, te.y, te.width, te.height, z.x, z.y, z.w, z.h), !!te;
  };
  if (r === "cutout") {
    const z = lA(o), xe = yA(y), te = z ? ne(Si(z).aspect, 0.1, 10) : v ? ne(Number(xe.width / xe.height), 0.05, 20) : 1, J = xp(b, te);
    e.__panoCutoutNodeFrame = J;
    let q = "none";
    const U = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (z)
      if (y && !v)
        q = "loading";
      else if (v) {
        const j = I2({ width: c, height: u }, J, z);
        [
          !j.fallback || N(j.fallback.rect, Ms(j.fallback.shot)),
          N(j.rect, Ms(j.shot)),
          !j.fallback || N(J, Ms(z))
        ].every(Boolean) || (q = "loading");
      } else
        q = "empty";
    else {
      const j = e.__panoLastCutoutShot;
      j ? (e.__panoPreviewView = c1(j, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, Sc(e.__panoPreviewView, c, u)) || (q = "loading") : y ? q = "loading" : q = "empty";
    }
    v || n.release(), n.failed && q === "loading" && (q = "none"), z && (e.__panoLastCutoutShot = { ...z }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(J.x, J.y, J.w, J.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(J.x + 0.5, J.y + 0.5, Math.max(0, J.w - 1), Math.max(0, J.h - 1)), d.restore()), q === "loading" ? (wf(e, !1), Il(e, !0, U)) : q === "empty" ? (wf(e, !0), Il(e, !1, "")) : (wf(e, !1), Il(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (x = f0(e, o, y), !x.background && !x.layers.length ? (n.release(), k = !0) : k = N(b, Sc(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  Il(e, P, P ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), P && sA(d, b, u0(t, b));
  const C = xd(e, c, u);
  !y && k && kA(d, C, u0(t, b));
  const F = String(((E = o == null ? void 0 : o.active) == null ? void 0 : E.selected_sticker_id) || ""), W = pd(o, Ec(e)), R = k ? W.find((z) => String((z == null ? void 0 : z.id) || "") === F && (z == null ? void 0 : z.visible) !== !1) : null;
  k && W.filter((z) => z !== R && (z == null ? void 0 : z.visible) !== !1 && (z.external || z.source_kind === "external_image")).filter((z) => !Oc(js(e, z.id, null, { external: !0 }))).forEach((z) => bA(d, z, C)), R && vA(d, R, C);
}
function d0(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const c of t) {
    const u = n.project(c);
    if (u.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(u.x, u.y) : (e.moveTo(u.x, u.y), a = !0);
  }
  e.stroke();
}
function kA(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Xn(b, u));
    d0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Xn(u, b));
    d0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Xn(0, 0) },
    { name: "Right", dir: Xn(90, 0) },
    { name: "Back", dir: Xn(180, 0) },
    { name: "Left", dir: Xn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Sd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function MA(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function dr(e, t) {
  return MA(e, t) ? !1 : (Sd(e), !0);
}
function p0() {
  var n;
  const e = (n = jt == null ? void 0 : jt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function NA(e) {
  var n;
  if (!e) return;
  const t = (n = jt == null ? void 0 : jt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function PA(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !x1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function AA(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function h0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && CA(e, 180, t);
    }
  };
}
function CA(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function hs(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const IA = /* @__PURE__ */ new WeakMap();
function C1(e, t) {
  return Hb(IA, e, t) ? !1 : (tA(e, t), P1(e), hs(e), !0);
}
async function OA(e) {
  var n, r;
  const t = await a2(e, jt, Yt);
  t && (C1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function EA(e, t = {}) {
  var Bi;
  const n = t.__allowStandalone === !0, r = S1(e);
  if (r && !n) {
    Ip(e);
    return;
  }
  r && PA(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: l0(e)
  }, u = "dom", d = c.signature || l0(e);
  if (Number(e.__panoRebindGeneration || 0), _d(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, vd(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Bi = e.__panoDomPreview) != null && Bi.widget || (e.__panoLegacyPreviewHooked && Ql(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : N2, x = document.createElement("div");
  if (zP(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    v > 0 ? `min-height:${v}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const H = Ac(yd(
      e.addDOMWidget(bd(), "preview", x, h0(e, null))
    ));
    hs(e), e.__panoDomPreview = { widget: H, root: x, requestDraw: () => {
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
  const k = document.createElement("canvas");
  k.style.cssText = [
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
  const P = document.createElement("div");
  P.style.cssText = [
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
  ].join(";"), P.textContent = "Connect ERP image", N.appendChild(k), N.appendChild(P), x.appendChild(N);
  const C = jy(x), F = document.createElement("div");
  F && (F.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(F)), jP(e, 120, 120), hs(e);
  let W = null;
  try {
    AA(e, y, () => {
      var H, ge;
      return (ge = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : ge.call(H);
    }), W = Ac(yd(e.addDOMWidget(
      bd(),
      "preview",
      x,
      h0(
        e,
        () => {
          var H, ge;
          return (ge = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : ge.call(H);
        },
        y,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const R = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, V = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(Ae)));
  }, _ = Tb(V), L = /* @__PURE__ */ ka(o ? { ...r1(Wn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...s1(Wn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((H) => ({ value: H, label: H }))
  });
  let B = null;
  if (o && e.__panoSceneStateV2) {
    const [H, ge] = [0, 1].map(() => {
      const Te = document.createElement("video");
      return Te.playsInline = !0, Te.preload = "auto", Te.crossOrigin = "anonymous", Te.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Te), Te;
    }), re = document.createElement("canvas");
    re.__panoFrameIdx = 0;
    const Fe = document.createElement("canvas");
    Fe.__panoFrameIdx = 0;
    const je = k2({
      video: H,
      stickerVideo: ge,
      createImage: (Te, Ze) => {
        const Dt = new Image();
        return Dt.onload = Ze, Dt.onerror = Ze, Dt.src = Te, Dt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Te) => requestAnimationFrame(Te),
        cancelFrame: (Te) => cancelAnimationFrame(Te)
      },
      readState: () => Wn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ze;
        if (!(H.videoWidth > 0 && H.videoHeight > 0)) return;
        const Te = Math.min(1, VP / H.videoWidth);
        re.width = Math.round(H.videoWidth * Te), re.height = Math.round(H.videoHeight * Te), (Ze = re.getContext("2d")) == null || Ze.drawImage(H, 0, 0, re.width, re.height), re.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Te;
        ge.videoWidth > 0 && ge.videoHeight > 0 && (Fe.width = ge.videoWidth, Fe.height = ge.videoHeight, (Te = Fe.getContext("2d")) == null || Te.drawImage(ge, 0, 0), Fe.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        L.playing = je.playing, V();
      }
    });
    B = { playback: je, video: H, still: re, stickerVideo: ge, stickerStill: Fe, stickerSource: "" }, e.__panoSurfacePlayback = B;
  }
  const ce = () => {
    var Dt;
    const { playback: H, still: ge, stickerStill: re } = B, Fe = S2(N, !!((Dt = e.flags) != null && Dt.collapsed)), je = H.source, Te = Fe ? wA(e) : null, Ze = H.follow({
      shown: Fe,
      sources: Fe ? _A(e) : [],
      state: Wn(e),
      sticker: Te
    });
    ((Te == null ? void 0 : Te.src) || "") !== B.stickerSource && (B.stickerSource = (Te == null ? void 0 : Te.src) || "", re.width = 0), H.source !== je && (ge.width = 0, ge.__panoFrameIdx = 0), L.playable = Ze, L.playing = H.playing;
  }, we = () => B == null ? void 0 : B.playback.pause();
  let E = null;
  const z = (o ? w2 : E2)({
    readState: () => Wn(e),
    publishLiveState: (H) => {
      H ? (E = H, e.__panoLiveStateOverride = H) : (e.__panoLiveStateOverride === E && (e.__panoLiveStateOverride = null), E = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (H) => {
      var Fe, je, Te, Ze;
      const ge = ma(e, "state_json");
      if (!ge) return;
      xb(e, H.active);
      const re = Sb(e, H);
      kb(e, re, String(ge.value ?? "")) || (ge.value = re, (Fe = ge.callback) == null || Fe.call(ge, re), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ze = (Te = e.graph) == null ? void 0 : Te.setDirtyCanvas) == null || Ze.call(Te, !0, !0));
    },
    onChange: (H) => Object.assign(L, H)
  }), te = o ? b1(e, (H = "sync", ge = null) => {
    var Pt;
    if (!o || !e.graph || !z || z.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const _t = xn(e, "external-sticker"), yn = Wn(e).stickers.find((At) => At.source.kind === "port");
      return z.apply({
        type: "sync-port",
        value: t1(e, {
          pose: _t ? Ps(e, "pano_sticker_input_pose", ge) : null,
          image: yn ? js(e, yn.id, null, { external: !0 }) : null
        })
      });
    }
    const re = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((_t) => String((_t == null ? void 0 : _t.name) || "") === "sticker_image") : -1, Fe = re >= 0 ? ((Pt = e.getInputLink(re)) == null ? void 0 : Pt.id) ?? null : null;
    if (Fe == null)
      return z.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const je = Ps(e, "pano_sticker_input_pose", ge), Te = Array.isArray(je) ? je[0] : je, Ze = String(Ps(e, "pano_sticker_input_state_hash", ge) ?? ""), Dt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, rn = Wn(e), Jn = (Array.isArray(rn == null ? void 0 : rn.stickers) ? rn.stickers : []).find((_t) => String((_t == null ? void 0 : _t.id) || "") === "sticker_image_1"), Gt = js(e, "sticker_image_1", null, { external: !0 }), Fr = Te && typeof Te == "object" ? Te : Jn || { yaw_deg: Dt.yaw, pitch_deg: Dt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return z.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: Ze,
        pose: Fr,
        imageWidth: Number((Gt == null ? void 0 : Gt.naturalWidth) || (Gt == null ? void 0 : Gt.width) || 0),
        imageHeight: Number((Gt == null ? void 0 : Gt.naturalHeight) || (Gt == null ? void 0 : Gt.height) || 0)
      }
    });
  }) : () => {
  };
  let J = 0;
  const q = async (H) => {
    if (!o || !z || !Cr(H)) return !1;
    we();
    const ge = `asset_${Math.random().toString(16).slice(2, 10)}`, re = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    J += 1, L.importing = !0;
    const je = ds(e, `add:${ge}`, async () => {
      const Te = await ps(H), Ze = await ho(H, {
        fetchApi: (Dt, rn) => Yt.fetchApi(Dt, rn)
      });
      return Pe(), z.apply({
        type: "add-sticker",
        value: {
          stickerId: re,
          assetId: ge,
          asset: Ze,
          imageWidth: Te.width,
          imageHeight: Te.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      J = Math.max(0, J - 1), L.importing = J > 0, V();
    }
  };
  let U = null, j = null, O = null, oe = !1;
  const Q = () => {
    var H;
    return O && (clearTimeout(O), O = null), oe ? (oe = !1, ((H = z == null ? void 0 : z.commitGesture) == null ? void 0 : H.call(z)) ?? !1) : !1;
  }, Pe = () => {
    var Fe, je, Te;
    const H = Q(), ge = (U == null ? void 0 : U.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (U = null, j = null, ge != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ge) && ((je = k.releasePointerCapture) == null || je.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const re = ((Te = z == null ? void 0 : z.commitGesture) == null ? void 0 : Te.call(z)) ?? !1;
    return H || re;
  }, Ee = () => {
    var Fe, je, Te;
    const H = Q(), ge = U == null ? void 0 : U.pointerId;
    if (U = null, ge != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ge) && ((je = k.releasePointerCapture) == null || je.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const re = ((Te = z == null ? void 0 : z.cancelGesture) == null ? void 0 : Te.call(z)) ?? !1;
    return H || re;
  }, ht = () => Pe();
  z && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ht));
  let Ye = null, D = !1;
  if (F && z)
    try {
      Np(), Ye = Kd(o ? iP : q2, {
        model: L,
        onAction: (H) => {
          var Fe, je;
          if ((H == null ? void 0 : H.type) === "toggle-playback") {
            Pe(), B == null || B.playback.toggle();
            return;
          }
          if (we(), (H == null ? void 0 : H.type) === "open-editor") {
            Pe(), o || (L.aspectOpen = !1), (Fe = e.__panoOpenEditor) == null || Fe.call(e);
            return;
          }
          if (o) {
            if ((H == null ? void 0 : H.type) === "add-image-file") {
              q(H.file);
              return;
            }
            z.apply(H) && V();
            return;
          }
          if ((H == null ? void 0 : H.type) === "toggle-aspect") {
            L.aspectOpen = !L.aspectOpen;
            return;
          }
          if ((H == null ? void 0 : H.type) === "close-aspect") {
            L.aspectOpen = !1;
            return;
          }
          let ge = H;
          if ((H == null ? void 0 : H.type) === "add-frame") {
            const Te = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ge = {
              ...H,
              ...A2(Te, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((H == null ? void 0 : H.type) === "delete-frame") {
            const Te = No(Wn(e));
            Te && (e.__panoPreviewView = c1(Te, {
              width: k.width,
              height: k.height
            }));
          }
          const re = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          L.aspectOpen = !1, z.apply({ ...ge, safeRect: re }) && V();
        }
      }), Ye.mount(F), D = !0;
    } catch {
      Ye = null, D = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    B && ce(), V();
  }) : null;
  gt == null || gt.observe(N);
  const Ae = (H) => {
    var re, Fe;
    R.raf = 0, R.inTick = !0;
    let ge = !1;
    try {
      ge = xt.stepInertia(H), (R.needsDraw || ge) && (R.needsDraw = !1, B && ce(), (re = e.flags) != null && re.collapsed || SA(e, k, _), L.viewUnavailable = _.failed);
    } finally {
      R.inTick = !1;
    }
    (ge || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(Ae)), $P() && (!e.__panoDebugLastTs || H - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = H, e.__panoPreviewMode, vd(e), as(x), as(N), as(k), as(x.parentElement), as((Fe = x.parentElement) == null ? void 0 : Fe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, xt = Xd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (H) => {
      e.__panoPreviewView = H;
    },
    getViewportSize: () => {
      const H = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(H.width || k.clientWidth || 0)),
        h: Math.max(1, Number(H.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const H = s0();
      return {
        x: H.invert_view_x ? -1 : 1,
        y: H.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), Tt = o ? N : x, mn = (H) => {
    const ge = k.getBoundingClientRect();
    return {
      x: (Number(H.clientX) - ge.left) * (k.width / Math.max(1, ge.width)),
      y: (Number(H.clientY) - ge.top) * (k.height / Math.max(1, ge.height))
    };
  }, ni = (H) => {
    var Fe, je;
    if (!o || !a) return;
    const ge = Wn(e), re = n0(
      pd(ge, Ec(e)),
      String(((Fe = ge == null ? void 0 : ge.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      mn(H),
      xd(e, k.width, k.height)
    );
    if (!re) {
      k.style.cursor = "grab";
      return;
    }
    if (((je = re.item) == null ? void 0 : je.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = re.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (H) => {
    var Dt, rn, Jn, Gt, Fr, Pa, Pt, _t, yn, At, Tr;
    if (!dr(H, Tt) || H.button !== 0) return;
    if (!o) {
      const fn = No(Wn(e)), Sn = e.__panoCutoutNodeFrame;
      if (!fn) {
        (Dt = x.focus) == null || Dt.call(x, { preventScroll: !0 }), (rn = k.setPointerCapture) == null || rn.call(k, H.pointerId), k.style.cursor = "grabbing", xt.startDrag(H.clientX, H.clientY, H.pointerId);
        return;
      }
      if (fn.locked === !0 || !Sn || !z) return;
      const Ys = mn(H);
      let Ui;
      if (H.shiftKey) {
        const Ni = f1({
          frame: Sn,
          point: Ys,
          startRollDeg: Number(fn.roll_deg ?? fn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Ni) return;
        Ui = { kind: "roll", pointerId: H.pointerId, rollGesture: Ni };
      } else {
        const Ni = ((Jn = Wn(e)) == null ? void 0 : Jn.ui_settings) || s0();
        Ui = {
          kind: "pan",
          pointerId: H.pointerId,
          startPoint: Ys,
          startShot: { ...fn },
          focalPx: xo(Sn, fn),
          invertX: Ni.invert_view_x === !0,
          invertY: Ni.invert_view_y === !0
        };
      }
      Pe(), (Gt = x.focus) == null || Gt.call(x, { preventScroll: !0 }), (Fr = k.setPointerCapture) == null || Fr.call(k, H.pointerId), k.style.cursor = "grabbing", z.beginGesture(), U = Ui;
      return;
    }
    if (!a) return;
    const ge = mn(H), re = Wn(e), Fe = String(((Pa = re == null ? void 0 : re.active) == null ? void 0 : Pa.selected_sticker_id) || ""), je = xd(e, k.width, k.height);
    (Pt = x.focus) == null || Pt.call(x, { preventScroll: !0 });
    const Te = () => n0(pd(re, Ec(e)), Fe, ge, je);
    let Ze = Te();
    if (Ze && (B != null && B.playback.playing) && (we(), Ze = Te()), Ze && z) {
      if (xt.stopMotion(), Pe(), String(((_t = Ze.item) == null ? void 0 : _t.id) || "") !== Fe && z.apply({ type: "select-sticker", id: Ze.item.id }), ((yn = Ze.item) == null ? void 0 : yn.locked) === !0) {
        V();
        return;
      }
      const fn = ge, Sn = Ze.geometry.center;
      j = {
        active: !0,
        kind: Ze.hit.kind,
        pointerId: H.pointerId,
        startPoint: fn,
        startCenter: { ...Sn },
        startSticker: { ...Ze.item },
        startDistance: Math.max(1, Math.hypot(fn.x - Sn.x, fn.y - Sn.y)),
        startAngle: Math.atan2(fn.y - Sn.y, fn.x - Sn.x),
        projection: je
      }, z.beginGesture(), (At = k.setPointerCapture) == null || At.call(k, H.pointerId), k.style.cursor = Ze.hit.kind === "rotate" ? "grabbing" : Ze.hit.kind === "move" ? "move" : Ze.hit.cursor, V();
      return;
    }
    (Tr = k.setPointerCapture) == null || Tr.call(k, H.pointerId), k.style.cursor = "grabbing", xt.startDrag(H.clientX, H.clientY, H.pointerId);
  }), k.addEventListener("pointermove", (H) => {
    if (!o) {
      if (!U) {
        if (!xt.state.drag.active) return;
        dr(H, Tt), xt.moveDrag(H.clientX, H.clientY, "pano");
        return;
      }
      if (U.pointerId !== H.pointerId || !z) return;
      if (dr(H, Tt), U.kind === "pan") {
        const re = mn(H);
        z.updateGesture({
          type: "pan-camera",
          startShot: U.startShot,
          dx: re.x - U.startPoint.x,
          dy: re.y - U.startPoint.y,
          focalPx: U.focalPx,
          invertX: U.invertX,
          invertY: U.invertY
        });
        return;
      }
      const ge = d1(U.rollGesture, mn(H), H);
      if (!ge) return;
      U.rollGesture = ge.gesture, z.updateGesture({ type: "set-roll", value: ge.rollDeg });
      return;
    }
    if (!j && !xt.state.drag.active) {
      ni(H);
      return;
    }
    if (j) {
      if (j.pointerId !== H.pointerId || !z) return;
      dr(H, Tt);
      const ge = mn(H);
      let re = j.startSticker;
      if (j.kind === "move")
        re = lP(
          j.startSticker,
          {
            x: j.startCenter.x + ge.x - j.startPoint.x,
            y: j.startCenter.y + ge.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Fe = Math.hypot(ge.x - j.startCenter.x, ge.y - j.startCenter.y);
        re = cP(j.startSticker, j.startDistance, Fe);
      } else if (j.kind === "rotate") {
        const Fe = Math.atan2(ge.y - j.startCenter.y, ge.x - j.startCenter.x);
        re = uP(j.startSticker, j.startAngle, Fe, H.shiftKey === !0);
      }
      z.updateGesture({ type: "set-transform", value: re }), V();
      return;
    }
    !a || !xt.state.drag.active || (dr(H, Tt), xt.moveDrag(H.clientX, H.clientY, "pano"));
  });
  const $ = () => {
    var ge, re;
    if (!U && !j) {
      if (!xt.state.drag.active) return;
      xt.endDrag(), k.style.cursor = "grab", V();
      return;
    }
    if (!z) return;
    const H = (U == null ? void 0 : U.pointerId) ?? (j == null ? void 0 : j.pointerId);
    U = null, j = null;
    try {
      (ge = k.hasPointerCapture) != null && ge.call(k, H) && ((re = k.releasePointerCapture) == null || re.call(k, H));
    } catch {
    }
    z.cancelGesture(), k.style.cursor = "grab", V();
  }, K = (H, ge = !1) => {
    var re, Fe, je, Te;
    if (!o) {
      if (!U) {
        if (!xt.state.drag.active) return;
        dr(H, Tt), (re = k.releasePointerCapture) == null || re.call(k, H.pointerId), k.style.cursor = "grab", xt.endDrag(), V();
        return;
      }
      if (U.pointerId !== H.pointerId || !z) return;
      dr(H, Tt), U = null, (Fe = k.releasePointerCapture) == null || Fe.call(k, H.pointerId), k.style.cursor = "grab", ge ? z.cancelGesture() : z.commitGesture(), ni(H), V();
      return;
    }
    if (j) {
      if (j.pointerId !== H.pointerId || !z) return;
      dr(H, Tt), j = null, (je = k.releasePointerCapture) == null || je.call(k, H.pointerId), k.style.cursor = "grab", ge ? z.cancelGesture() : z.commitGesture(), V();
      return;
    }
    !a || !xt.state.drag.active || (dr(H, Tt), (Te = k.releasePointerCapture) == null || Te.call(k, H.pointerId), k.style.cursor = "grab", xt.endDrag(), V());
  };
  k.addEventListener("pointerup", K), k.addEventListener("pointercancel", (H) => K(H, !0)), k.addEventListener("lostpointercapture", $), k.addEventListener("pointerleave", (H) => {
    !o && U || j || xt.state.drag.active && K(H);
  });
  const le = (H) => {
    const ge = document.activeElement;
    if (ge !== x && !x.contains(ge)) return;
    if (H.key === "Escape" && (U || j) && z) {
      $(), Sd(H);
      return;
    }
    if (!o || H.key !== "Delete" && H.key !== "Backspace" || !z) return;
    const re = H.target, Fe = String((re == null ? void 0 : re.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || re != null && re.isContentEditable || L.canDelete === !0 && (we(), Pe(), z.apply({ type: "delete-selected" }) && V(), Sd(H));
  };
  window.addEventListener("keydown", le, !0);
  const Se = TP({
    requestFrame: (H) => requestAnimationFrame(H),
    cancelFrame: (H) => cancelAnimationFrame(H),
    restore: (H) => NA(H)
  }), be = (H) => {
    var re, Fe, je, Te, Ze, Dt;
    if (!dr(H, Tt)) return;
    if (!o) {
      const rn = No(Wn(e));
      if (rn && rn.locked !== !0 && z) {
        const Jn = dc(H);
        Jn !== 0 && (oe || (Pe(), z.beginGesture(), oe = !0), z.updateGesture({
          type: "step-fov",
          direction: Jn
        }) ? (O && clearTimeout(O), O = setTimeout(Q, 180), V()) : z.hasGestureChanges() || (z.cancelGesture(), oe = !1));
      } else if (!rn) {
        const Jn = p0();
        xt.applyWheelEvent(H) && V(), Se.schedule(Jn);
      }
      (re = H.preventDefault) == null || re.call(H), (Fe = H.stopPropagation) == null || Fe.call(H), (je = H.stopImmediatePropagation) == null || je.call(H);
      return;
    }
    if (!a) return;
    const ge = p0();
    xt.applyWheelEvent(H) && V(), (Te = H.preventDefault) == null || Te.call(H), (Ze = H.stopPropagation) == null || Ze.call(H), (Dt = H.stopImmediatePropagation) == null || Dt.call(H), Se.schedule(ge);
  }, _e = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((H) => {
    _e.forEach((ge) => ge.addEventListener(H, be, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((H) => {
    k.addEventListener(H, (ge) => dr(ge, Tt)), N.addEventListener(H, (ge) => dr(ge, Tt));
  });
  const Ne = ma(e, "state_json");
  let Ce = null, ke = null;
  Ne && !Ne.__panoPreviewPatchedCb && (Ce = Ne.callback, ke = (H) => {
    const ge = Ce ? Ce(H) : void 0;
    return V(), ge;
  }, Ne.callback = ke, Ne.__panoPreviewPatchedCb = ke);
  const he = ma(e, "bg_color");
  let Oe = null, Ie = null;
  he && !he.__panoPreviewPatchedCb && (Oe = he.callback, Ie = (H) => {
    const ge = Oe ? Oe(H) : void 0;
    return V(), ge;
  }, he.callback = Ie, he.__panoPreviewPatchedCb = Ie);
  const Ve = e.onRemoved, He = e.onResize, it = e.onExecuted, ot = e.onDragOver, ft = e.onDragDrop;
  let dt = null;
  const Rt = () => {
    o && (L.dropActive = !0, dt && clearTimeout(dt), dt = setTimeout(() => {
      dt = null, L.dropActive = !1;
    }, 140));
  }, Fn = o ? function(H) {
    return (ot ? ot.apply(this, arguments) : !1) === !0 ? !0 : Ap(H == null ? void 0 : H.dataTransfer) ? (Rt(), !0) : !1;
  } : null, Tn = o ? function(H) {
    var Fe;
    if ((ft ? ft.apply(this, arguments) : !1) === !0) return !0;
    const re = Array.from(((Fe = H == null ? void 0 : H.dataTransfer) == null ? void 0 : Fe.files) || []).find((je) => Cr(je));
    return re ? (dt && clearTimeout(dt), dt = null, L.dropActive = !1, q(re), !0) : !1;
  } : null;
  o && (e.onDragOver = Fn, e.onDragDrop = Tn);
  const ri = o ? FP(x, {
    onActive: (H) => {
      if (H) {
        Rt();
        return;
      }
      dt && clearTimeout(dt), dt = null, L.dropActive = !1;
    },
    onDrop: (H) => {
      q(H);
    }
  }) : () => {
  }, h = function(H) {
    e.__panoOutputFromRun = !0;
    const ge = C1(e, H);
    yi(e, ge ? "executed" : "sync", H), V();
    const re = it ? it.apply(this, arguments) : void 0;
    return hs(e), re;
  };
  e.onExecuted = h;
  const Ge = e.onConnectionsChange, nn = function(H, ge) {
    const re = Kg(e, H, ge, yp), Fe = Kg(e, H, ge, Wi), je = arguments, Te = Ge ? Ge.apply(this, je) : void 0, Ze = () => {
      R.destroyed || (Fe && aA(e), re && yi(e, "connection-change"), hs(e), V());
    };
    return Ze(), queueMicrotask(Ze), Te;
  };
  e.onConnectionsChange = nn;
  const Jt = function() {
    const H = He ? He.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), H;
  };
  e.onResize = Jt;
  const Mi = function() {
    return Oo(), wd.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = Mi;
  const Oo = () => {
    var H, ge, re, Fe, je, Te, Ze, Dt, rn;
    R.destroyed = !0, (H = gt == null ? void 0 : gt.disconnect) == null || H.call(gt), o ? Pe() : Ee(), k.removeEventListener("lostpointercapture", $), ri(), C(), window.removeEventListener("keydown", le, !0), (re = (ge = e.__panoStateFlushers) == null ? void 0 : ge.delete) == null || re.call(ge, ht), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = z == null ? void 0 : z.destroy) == null || Fe.call(z), (je = Ye == null ? void 0 : Ye.unmount) == null || je.call(Ye), B && (B.playback.dispose(), B.video.remove(), B.stickerVideo.remove(), e.__panoSurfacePlayback === B && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, (Ze = (Te = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Te.dispose) == null || Ze.call(Te), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, te(), Se.dispose(), dt && clearTimeout(dt), dt = null, Cp.disposeOwner(e), ga(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((Dt = e.__panoCutoutNodeSurface) == null ? void 0 : Dt.session) === z && (e.__panoCutoutNodeSurface = null), ((rn = e.__panoStickersNodeSurface) == null ? void 0 : rn.session) === z && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Jt && (e.onResize = He), e.onExecuted === h && (e.onExecuted = it), e.onConnectionsChange === nn && (e.onConnectionsChange = Ge), ke && (Ne == null ? void 0 : Ne.callback) === ke && (Ne.callback = Ce), ke && (Ne == null ? void 0 : Ne.__panoPreviewPatchedCb) === ke && delete Ne.__panoPreviewPatchedCb, Ie && (he == null ? void 0 : he.callback) === Ie && (he.callback = Oe), Ie && (he == null ? void 0 : he.__panoPreviewPatchedCb) === Ie && delete he.__panoPreviewPatchedCb, e.onDragOver === Fn && (e.onDragOver = ot), e.onDragDrop === Tn && (e.onDragDrop = ft), e.onRemoved === Mi && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = Oo, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = z && D && !o ? { session: z, model: L } : null, e.__panoStickersNodeSurface = z && D && o ? { session: z, model: L } : null, e.__panoDomPreview = {
    widget: W,
    root: x,
    canvas: k,
    requestDraw: V,
    state: R,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, wd.register(e), e.graph && yi(e, "attach"), V();
}
function m0(e, t = {}) {
  k1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function g0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (S1(e) && !n) {
    Ip(e);
    return;
  }
  k1(e).attach(t);
}
function FA(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function TA(e, t = 1, n = zg) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : zg, v = Math.max(u, d), x = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function DA({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === u || (u = k, o(k)), k;
  }, y = () => b();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", y), b(), { toggle: async () => {
    var k;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
      } catch {
      }
      return c ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return c || (a(), b()), !1;
  }, isActive: d, destroy: () => {
    var k, P, C;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const F = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (C = F == null ? void 0 : F.catch) == null || C.call(F, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const LA = { class: "pano-preview-node-surface" }, RA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ae(), fe("div", LA, [
      De(cn, {
        icon: e.model.fullscreen ? Qe(Me).fullscreen_close : Qe(Me).fullscreen,
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
      e.model.viewUnavailable ? (ae(), br(Sp, { key: 0 })) : ut("", !0)
    ]));
  }
}, Ol = 140, VA = 180, y0 = 40, xf = 10;
function b0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function v0(e, t) {
  const n = b0(e), r = b0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function _0(e) {
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
  return typeof ((a = Yt) == null ? void 0 : a.apiURL) == "function" ? Yt.apiURL(o) : o;
}
function ya(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ya(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return _0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ya(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : _0(e);
}
function I1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function $A(e) {
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
function kd(e) {
  var o;
  const t = (o = Ir) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (v0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (v0(a, n)) return t[a];
  return null;
}
function zA(e) {
  var r, o;
  const t = kd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = ya(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function jA(e, t = "erp_image") {
  var N, k, P, C, F, W, R;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, _) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (N = Ir) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = kd(a), d = kd(e == null ? void 0 : e.id), b = [
    (C = d == null ? void 0 : d.ui) == null ? void 0 : C.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (F = u == null ? void 0 : u.ui) == null ? void 0 : F.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const _ of V) {
        const L = ya(_);
        if (L) return L;
      }
  let y = [];
  try {
    y = typeof ((W = Ir) == null ? void 0 : W.getNodeImageUrls) == "function" ? Ir.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const V of y) {
      const _ = ya(V);
      if (_) return _;
    }
  if (c) {
    const V = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const _ of V) {
      const L = ya(_);
      if (L) return L;
    }
  }
  const v = (R = c == null ? void 0 : c.widgets) == null ? void 0 : R.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), x = String((v == null ? void 0 : v.value) || "").trim();
  return x ? Yt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function Sf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function w0(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !I1(a) || n <= 1 || r <= 1) {
    Sf(t, n, r);
    return;
  }
  if (c.failed) {
    Sf(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Sc(o, n, r),
    background: { media: a, revision: $A(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Sf(t, n, r);
}
function x0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class HA {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Tb(() => this.requestDraw()), this.controller = Xd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Vt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: ne(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: ne(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, c, u;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((u = this.canvas) == null ? void 0 : u.clientHeight) || 0))
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
      const u = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), u;
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
        `min-height:${Ol}px`,
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
          return Ol;
        },
        getHeight() {
          return Ol;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Ac(yd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Ol, Number(a.minHeight || 0)),
            minWidth: Math.max(VA, Number(a.minWidth || 0))
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
      return Np(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ ka({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = DA({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Kd(RA, {
        model: this.surfaceModel,
        onAction: (u) => {
          var d, b;
          (u == null ? void 0 : u.type) === "toggle-fullscreen" && ((b = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || b.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var u, d;
          return (d = (u = this.fullscreenController) == null ? void 0 : u.toggle) == null ? void 0 : d.call(u);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (c = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || c.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = jy(n), t.addEventListener("pointerdown", (a) => {
      var c, u, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const r = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      FA(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !I1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return x0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, y, v, x, N;
      const a = fA(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !x0(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - xf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - y0 - xf);
    return { x: xf, y: y0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), w0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Fb : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = TA(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = zA(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const u = document.createElement("video");
      u.muted = !0, u.loop = !0, u.playsInline = !0, u.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = u, this.videoPaused || u.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      u.addEventListener("loadedmetadata", d), u.addEventListener("canplay", d), u.addEventListener("timeupdate", b), u.addEventListener("play", b), u.addEventListener("pause", b), u.src = t, u.load(), this.mediaCleanup = () => {
        u.pause(), u.removeEventListener("loadedmetadata", d), u.removeEventListener("canplay", d), u.removeEventListener("timeupdate", b), u.removeEventListener("play", b), u.removeEventListener("pause", b);
      };
      return;
    }
    const n = jA(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), w0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, y, v, x, N, k, P, C, F;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      w1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (C = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : C.find) == null ? void 0 : F.call(C, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function GA(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new HA(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function O1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const u = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const u = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const u = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
}
function Ep(e) {
  return !!(e != null && e.prototype);
}
function Hs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function KA(e, t = {}) {
  Ep(e) || GA(e, {
    ...t,
    onOpen: Hs(e, t.onOpen)
  });
}
function WA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Ep(e)) {
    g0(e, {
      ...r,
      onOpen: Hs(e, t.onOpen)
    });
    return;
  }
  O1(e, "stickers_node_preview", (o) => {
    g0(o, {
      ...r,
      onOpen: Hs(o, t.onOpen)
    });
  });
}
function BA(e, t = {}) {
  if (!Ep(e)) {
    m0(e, {
      ...t,
      onOpen: Hs(e, t.onOpen)
    });
    return;
  }
  O1(e, "cutout_preview", (n) => {
    m0(n, {
      ...t,
      onOpen: Hs(n, t.onOpen)
    });
  });
}
const Kn = {
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
}, ci = "pen";
function S0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function UA(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const y = Number(b.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function d(b) {
    r[o] !== b && (r.splice(o + 1), r.push(b), r.length > a && r.shift(), o = r.length - 1);
  }
  return u(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      d(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = o - 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    redo() {
      const b = o + 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const b = r.length, y = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, y)) : y, x = r.slice(v, v + c), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - v));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: u
  };
}
function YA({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let o = null;
  function a() {
    o = null;
    for (const [c, u] of Object.entries(n))
      r.delete(c) && u();
  }
  return {
    request(c) {
      r.add(c), o ?? (o = e(a));
    },
    cancel() {
      r.clear(), o !== null && t(o), o = null;
    }
  };
}
const XA = 250, qA = 600, JA = 180, ZA = 2;
function QA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ms(e, t, n) {
  return e + (t - e) * n;
}
function eC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Yd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / JA + o / ZA);
  return Math.round(ms(XA, qA, a));
}
function tC(e, t, n) {
  const r = QA(ne(n, 0, 1));
  return {
    position: e.position.map((o, a) => ms(o, t.position[a], r)),
    yaw_deg: Vt(e.yaw_deg + Yd(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ms(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ms(e.hFOV_deg, t.hFOV_deg, r),
    distance: ms(e.distance, t.distance, r)
  };
}
function nC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Yd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function rC(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return nC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: eC(e, t, r), end: o };
}
function iC(e, t) {
  const n = ne((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: tC(e.from, e.to, n), done: !1 };
}
function ec(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function oC(e, t, n) {
  const r = ec(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Jo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function aC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function sC({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: u,
  isActiveLassoTool: d
}) {
  var R, V;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (_, L) => ({ index: L, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((R = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : R.id) || "", x = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), C = e.brushSizes[P] ?? 10, F = d(), W = Array.from({ length: 8 }, (_, L) => e.customPaintHistory[L] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: W.map((_, L) => ({
      index: L,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: C,
    sizeText: String(C),
    sizeFill: `${Math.max(0, Math.min(100, (C - 1) / 119 * 100))}%`,
    sizeDisabled: F,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function lC({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const cC = {
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
function uC(e) {
  const t = [];
  for (const n of e) {
    const [r, o, a] = cC[n.key] || [], c = t[t.length - 1];
    r && (c != null && c.grouped) && c.label === r ? c.fields.push({ ...n, short: o, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: o, drag: a }] });
  }
  return t;
}
function kf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function fC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
  const a = !r && !!o;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: a ? Me.eye : Me.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function dC({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const o = !e || t;
  let a = null;
  return r && o && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: o, tip: a };
}
function pC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const ba = "erp", hC = ["1:1", "4:3", "3:2", "16:9"];
function E1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...hC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: ba, label: Number(n) === 180 ? "180°" : "360°", active: e === ba }] : []
  ];
}
function mC({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: u,
  uiSettings: d,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || o === "world" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    rows: uC(c),
    notes: u,
    paramsDisabled: !r,
    uiSettings: t ? null : d,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function gC({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: y,
  isStickerHidden: v,
  canRestoreSelectedToInitial: x,
  iconSet: N,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: k = !1,
  cameraDeletable: P = !1,
  erpChoice: C = !1,
  coverage: F = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let W = [];
  if (n.length > 1)
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if (W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (W.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), W.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const R = x(), V = v(t);
      W.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !R
      }), W.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: V ? "Show" : "Hide",
        tip: V ? "Show input image" : "Hide input image",
        icon: V ? N.eye : N.eye_dashed
      });
    }
    W.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    W = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: E1(d, { erp: C, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90, disabled: d === ba }
    ], k ? P && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return F1(o.corners, W);
}
const k0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function yC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? k0.filter((u) => u.cameraTip) : k0;
  return F1([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: c.map(({ key: u, label: d, tip: b, cameraTip: y }) => ({ key: u, label: d, tip: r ? y : b, pressed: u === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...o ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Me.delete }] : []
  ]);
}
function bC(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), x = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let P;
  return N <= x ? P = Math.max(N, 14) : k >= 14 ? P = Math.min(k, x) : P = Math.min(Math.max(N, 14), x), { left: v, top: P };
}
function F1(e, t) {
  const n = e.map((b) => ({ x: Number(b == null ? void 0 : b.x), y: Number(b == null ? void 0 : b.y) })).filter((b) => Number.isFinite(b.x) && Number.isFinite(b.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((b) => b.x), o = n.map((b) => b.y), a = Math.min(...r), c = Math.max(...r), u = Math.min(...o), d = Math.max(...o);
  return {
    visible: !0,
    left: (a + c) * 0.5,
    top: d + 18,
    items: t,
    anchor: { minX: a, maxX: c, minY: u, maxY: d }
  };
}
const T1 = "painting";
function vC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const _C = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function wC(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, cameraHideable: x = !1, stickers: N = !0, scene: k = !1, sceneLocked: P = !1 }) {
  const C = (_, L, B, ce, we, E, { keyable: z = !0, hideable: xe = !0 } = {}) => {
    const te = (J) => (r == null ? void 0 : r.owner) === _ && r.lane === J ? r.frames.map((q) => q + E) : [];
    return {
      id: _,
      label: B,
      icon: ce,
      clip: we,
      selected: _ === o,
      hideable: xe,
      visible: L.visible,
      keyable: z,
      open: z && c.has(_),
      keyed: IM(L, t - E),
      keys: CM(L).map((J) => ({ frame: J.frame + E, full: J.full })),
      selectedFrames: te(null),
      lanes: (z ? Io(L) : []).map((J) => ({
        key: `${_}:${J}`,
        lane: J,
        label: _C[J],
        frames: L[J].keyframes.map((q) => q.frame + E),
        selectedFrames: te(J)
      }))
    };
  }, F = N ? e.stickers : [], W = F.filter((_) => _.placement === "sky").sort((_, L) => L.z_index - _.z_index), R = F.filter((_) => _.placement === "world"), V = ({ start: _, in: L, duration: B }) => ({ clip: { start: _, end: B === null ? null : _ + B }, offset: _ - L });
  return {
    visible: !0,
    expanded: a,
    playing: u,
    hasAudio: !!b,
    muted: !!(b != null && b.muted),
    frame: t,
    span: n,
    label: d,
    fps: e.timeline.fps,
    fpsLocked: y || P,
    lengthLocked: P,
    lockTip: P ? "Set by the scene" : "Set by the video input",
    length: P ? n : e.timeline.length,
    rows: [
      ...v ? [C("camera", e.camera, "Camera", Me.camera, null, 0, { hideable: x })] : [],
      ...[...W, ...R].map((_) => {
        const { clip: L, offset: B } = V(_.clip);
        return C(_.id, _, nd(_), Me.image, L, B);
      }),
      ...N && (vC(e.painting) || !e.painting_visible) ? [{
        id: T1,
        label: "Paint",
        icon: Me.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keyed: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...N && (k || pb(e.scene)) ? [(() => {
        const { clip: _, offset: L } = V(e.scene.clip);
        return C("scene", e.scene, "Scene", Me.box, _, L, { keyable: !1 });
      })()] : []
    ]
  };
}
function xC(e, t, n, r) {
  const o = FM(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const SC = { class: "pano-floating-right" }, kC = {
  key: 0,
  class: "pano-floating-space"
}, MC = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, NC = ["data-settled"], PC = ["data-ready", "data-settled"], AC = ["aria-label", "data-tip"], CC = {
  key: 1,
  class: "pano-camera-preview-label"
}, IC = {
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
    return (t, n) => (ae(), fe(Be, null, [
      X("div", SC, [
        e.space ? vi((ae(), fe("div", kC, [
          X("div", MC, [
            (ae(!0), fe(Be, null, wt(e.space.modes, (r) => (ae(), br(cn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          De(cn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Po, e.space.visible]
        ]) : ut("", !0),
        (ae(!0), fe(Be, null, wt(e.buttons, (r) => (ae(), br(cn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vi(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: ct(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Mt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            X("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ae(), fe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(zt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, AC)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ae(), fe("div", CC, et(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, PC)
      ], 8, NC), [
        [Po, e.preview.visible]
      ])
    ], 64));
  }
}, OC = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, EC = ["y2", "transform"], FC = ["transform"], TC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = pt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => vi((ae(), fe("div", {
      class: ct(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ae(), fe("svg", OC, [
        a[1] || (a[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ae(!0), fe(Be, null, wt(Qe(n), (c) => (ae(), fe("line", {
          key: c,
          class: ct(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, EC))), 128)),
        X("g", { transform: r.value }, [...a[0] || (a[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, FC),
        a[2] || (a[2] = X("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Po, e.model.visible === !0]
    ]);
  }
}, DC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: ct(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(h1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(cn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(TC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, LC = ["aria-label"], RC = { class: "pano-canvas-confirm-title" }, VC = { class: "pano-canvas-confirm-text" }, $C = { class: "pano-canvas-confirm-actions" }, zC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, jC = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Xt(null), r = /* @__PURE__ */ Xt(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${v}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var P;
      const v = r.value;
      if (!v) return;
      const x = v.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const k = a()[0] || v;
      (P = k == null ? void 0 : k.focus) == null || P.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var F;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        v.preventDefault(), (F = N == null ? void 0 : N.focus) == null || F.call(N);
        return;
      }
      const k = x[0], P = x[x.length - 1], C = document.activeElement;
      if (v.shiftKey) {
        (C === k || C === N || !(N != null && N.contains(C))) && (v.preventDefault(), P.focus());
        return;
      }
      (C === P || !(N != null && N.contains(C))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return _o(() => t.model.visible, (v, x) => {
      if (v) {
        o = document.activeElement, jc(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Bs(() => {
      d();
    }), (v, x) => e.model.visible === !0 ? (ae(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ft(y, ["self"])
    }, [
      X("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        X("div", RC, et(e.model.title), 1),
        X("div", VC, et(e.model.text), 1),
        X("div", $C, [
          x[0] || (x[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", zC, et(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, LC)
    ], 512)) : ut("", !0);
  }
}, HC = ["data-paint-pane"], GC = ["hidden"], KC = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], WC = ["aria-pressed", "disabled"], BC = ["hidden"], UC = { class: "pano-paint-color-pop-head" }, YC = { class: "pano-paint-color-field" }, XC = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, qC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, JC = { class: "pano-paint-color-field" }, ZC = { class: "pano-paint-alpha-wrap" }, QC = ["value"], eI = { "data-paint-alpha-value": "" }, tI = ["hidden"], nI = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, rI = ["data-paint-history-index", "aria-label", "disabled"], iI = ["data-paint-footer"], oI = ["data-paint-group"], aI = ["hidden"], sI = ["value", "disabled"], lI = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, cI = ["hidden"], uI = {
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
    return (r, o) => (ae(), fe("div", {
      class: ct(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ae(!0), fe(Be, null, wt(e.panes, (a) => {
        var c;
        return ae(), fe("div", {
          key: a.key,
          class: ct(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ae(), fe("div", {
            key: 0,
            class: ct(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ae(!0), fe(Be, null, wt(e.paintSwatches, (u) => (ae(), fe("button", {
              key: u.id,
              class: ct(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Mt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, KC))), 128)),
            X("button", {
              class: ct(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, WC),
            X("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Mt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              X("div", UC, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", YC, [
                X("div", XC, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", qC, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", JC, [
                o[1] || (o[1] = X("span", null, "Opacity", -1)),
                X("div", ZC, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, QC),
                  X("span", eI, et(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", nI, [
                  (ae(!0), fe(Be, null, wt(e.state.historyEntries || [], (u) => (ae(), fe("button", {
                    key: u.index,
                    class: ct(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Mt(n(u.color))
                  }, null, 14, rI))), 128))
                ])
              ], 8, tI)
            ], 12, BC)
          ], 10, GC)) : ut("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ae(!0), fe(Be, null, wt(a.tools, (u) => {
                var d;
                return ae(), br(cn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, oI),
            X("div", {
              class: ct(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              X("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Mt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, sI),
              X("span", lI, et(e.state.sizeText || "10"), 1)
            ], 10, aI),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              De(cn, {
                icon: Qe(Me).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, cI)
          ], 8, iI)
        ], 10, HC);
      }), 128))
    ], 2));
  }
}, fI = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Xt(null), r = /* @__PURE__ */ Xt(null), o = /* @__PURE__ */ Xt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ae(), fe(Be, null, [
      X("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      X("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        X("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, dI = ["aria-label"], pI = ["data-tip", "aria-pressed"], hI = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ae(), fe("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Mt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ae(!0), fe(Be, null, wt(e.buttons, (a) => (ae(), fe("button", hi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), et(a.label), 17, pI))), 128))
    ], 12, dI));
  }
}, mI = {
  key: 0,
  class: "pano-cutout-menu"
}, gI = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, yI = ["data-aspect"], bI = ["data-action", "aria-label", "data-tip", "disabled"], vI = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Mt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ae(!0), fe(Be, null, wt(e.model.items || [], (r) => (ae(), fe(Be, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ae(), fe("div", mI, [
          X("button", gI, [
            De(zt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: ct(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ae(!0), fe(Be, null, wt(r.choices || [], (o) => (ae(), fe("button", {
              key: o.value,
              class: ct(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, et(o.label), 11, yI))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ae(), br(hI, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (ae(), fe("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(zt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, bI))
      ], 64))), 128))
    ], 4));
  }
}, _I = {
  key: 0,
  class: "pano-easing"
}, wI = { class: "pano-section-title" }, xI = { class: "pano-easing-range" }, SI = { class: "pano-easing-modes" }, kI = ["aria-pressed", "onClick"], MI = ["viewBox"], NI = ["x", "y"], PI = ["x1", "y1", "x2", "y2"], AI = ["d"], CI = ["x1", "y1", "x2", "y2"], II = ["x1", "y1", "x2", "y2"], OI = ["cx", "cy"], EI = ["cx", "cy"], FI = { class: "pano-easing-note" }, ui = 132, co = 14, TI = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], a = /* @__PURE__ */ Xt(null), c = pt(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => co + k * ui, d = (k) => co + (1 - k) * ui, b = pt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, C, F] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(C)} ${d(F)} ${u(1)} ${d(1)}`;
    }), y = pt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function x(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function N(k, P) {
      var V;
      if (k.button !== 0 || !c.value) return;
      const C = k.currentTarget;
      (V = C.setPointerCapture) == null || V.call(C, k.pointerId);
      let F = null;
      const W = (_) => {
        const L = a.value.getBoundingClientRect(), B = L.width / (ui + co * 2), ce = ((_.clientX - L.left) / B - co) / ui, we = 1 - ((_.clientY - L.top) / B - co) / ui;
        F = [...F || c.value], F[P] = Math.round(Math.min(1, Math.max(0, ce)) * 100) / 100, F[P + 1] = Math.round(Math.min(1, Math.max(0, we)) * 100) / 100, x(F, !1);
      }, R = () => {
        C.removeEventListener("pointermove", W), C.removeEventListener("pointerup", R), C.removeEventListener("pointercancel", R), F && x(F, !0);
      };
      C.addEventListener("pointermove", W), C.addEventListener("pointerup", R), C.addEventListener("pointercancel", R);
    }
    return (k, P) => e.model ? (ae(), fe("div", _I, [
      X("div", wI, [
        P[2] || (P[2] = X("span", null, "Easing", -1)),
        X("span", xI, et(e.model.label), 1)
      ]),
      X("div", SI, [
        (ae(), fe(Be, null, wt(o, (C) => X("button", {
          key: C.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(C) ? "true" : "false",
          onClick: (F) => x(C.easing, !0)
        }, et(C.label), 9, kI)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ae(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${ui + co * 2} ${ui + co * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        X("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: ui,
          height: ui
        }, null, 8, NI),
        X("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, PI),
        X("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, AI),
        c.value ? (ae(), fe(Be, { key: 0 }, [
          X("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, CI),
          X("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, II),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (C) => N(C, 0))
          }, null, 40, OI),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (C) => N(C, 2))
          }, null, 40, EI)
        ], 64)) : ut("", !0)
      ], 8, MI)) : ut("", !0),
      X("div", FI, [
        e.model.mixed ? (ae(), fe(Be, { key: 0 }, [
          cs("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ae(), fe(Be, { key: 1 }, [
          cs("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ae(), fe(Be, { key: 2 }, [
          cs("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ae(), fe(Be, { key: 3 }, [
          cs("cubic-bezier(" + et(y.value) + ")", 1)
        ], 64)) : ut("", !0)
      ])
    ])) : ut("", !0);
  }
}, DI = {
  class: "pano-side",
  "data-side": ""
}, LI = { class: "pano-side-head" }, RI = { class: "pano-side-title" }, VI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, $I = {
  key: 0,
  class: "pano-side-scroll"
}, zI = { class: "pano-inspector" }, jI = { class: "pano-ui-row pano-coverage-row" }, HI = ["data-selected"], GI = ["aria-pressed", "disabled"], KI = ["aria-pressed", "disabled"], WI = {
  key: 0,
  class: "pano-section-title"
}, BI = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, UI = {
  class: "pano-picker",
  "data-picker": "selection"
}, YI = ["disabled"], XI = { class: "pano-picker-label" }, qI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, JI = ["hidden"], ZI = ["data-selection-id"], QI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, eO = {
  key: 2,
  class: "pano-state-actions"
}, tO = ["disabled"], nO = ["data-key"], rO = { class: "pano-field-group-values" }, iO = ["title", "onPointerdown"], oO = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], aO = ["data-key"], sO = ["min", "max", "step", "value", "disabled", "data-param-key"], lO = ["min", "max", "step", "value", "disabled", "data-param-key"], cO = ["open"], uO = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, fO = { class: "pano-ui-settings-body" }, dO = { class: "pano-ui-row" }, pO = ["data-selected"], hO = ["aria-pressed"], mO = ["aria-pressed"], gO = { class: "pano-ui-row" }, yO = ["data-selected"], bO = ["aria-pressed"], vO = ["aria-pressed"], _O = {
  key: 1,
  class: "pano-side-footer"
}, wO = ["data-action"], xO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = pt(() => {
      const b = n.model;
      return !b || typeof b != "object" ? !1 : Object.keys(b).length > 0 && !!b.coverage;
    });
    function a(b) {
      return { "--v": `${Number((b == null ? void 0 : b.fillPct) || 0)}%` };
    }
    function c(b, y) {
      return (y == null ? void 0 : y.paramsDisabled) === !0 || (b == null ? void 0 : b.enabled) === !1;
    }
    const u = {};
    function d(b, y) {
      const v = u[y.key];
      if (b.button !== 0 || !v || c(y, n.model)) return;
      b.preventDefault();
      const x = b.currentTarget, N = b.clientX, k = Number(v.value) || 0;
      let P = !1;
      x.setPointerCapture(b.pointerId);
      const C = (W) => {
        if (!P && Math.abs(W.clientX - N) < 3) return;
        P = !0;
        const R = k + (W.clientX - N) * y.drag * (W.shiftKey ? 0.1 : 1);
        v.value = String(Number(R.toFixed(3))), v.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        x.removeEventListener("pointermove", C), x.removeEventListener("pointerup", F), x.removeEventListener("pointercancel", F), x.removeEventListener("lostpointercapture", F), P ? v.dispatchEvent(new Event("change", { bubbles: !0 })) : v.focus();
      };
      x.addEventListener("pointermove", C), x.addEventListener("pointerup", F), x.addEventListener("pointercancel", F), x.addEventListener("lostpointercapture", F);
    }
    return (b, y) => {
      var v, x, N, k, P;
      return ae(), fe("div", DI, [
        X("div", LI, [
          X("div", RI, [
            X("span", VI, [
              De(zt, {
                icon: Qe(Me).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, et(e.nodeTitle), 1)
          ]),
          y[1] || (y[1] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        y[10] || (y[10] = X("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ae(), fe("div", $I, [
          X("div", zI, [
            y[9] || (y[9] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", jI, [
              y[2] || (y[2] = X("label", null, "Coverage", -1)),
              X("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 360 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "360", 8, GI),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, KI)
              ], 8, HI)
            ]),
            e.model.transformTitle !== !1 ? (ae(), fe("div", WI, [...y[3] || (y[3] = [
              X("span", null, "Transform", -1)
            ])])) : ut("", !0),
            e.model.selectionPicker ? (ae(), fe("div", BI, [
              X("label", null, et(e.model.selectionPicker.label), 1),
              X("div", UI, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", XI, [
                    e.model.selectionPicker.currentIcon ? (ae(), fe("span", qI, [
                      De(zt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    X("span", null, et(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  y[4] || (y[4] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, YI),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ae(!0), fe(Be, null, wt(e.model.selectionPicker.items || [], (C) => (ae(), fe("button", {
                    key: C.id,
                    type: "button",
                    class: ct(["pano-picker-item", { active: C.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": C.id
                  }, [
                    C.icon ? (ae(), fe("span", QI, [
                      De(zt, {
                        icon: C.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    X("span", null, et(C.label), 1)
                  ], 10, ZI))), 128))
                ], 8, JI)
              ])
            ])) : ut("", !0),
            e.model.copyStateButton ? (ae(), fe("div", eO, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(zt, {
                  icon: Qe(Me).copy
                }, null, 8, ["icon"]),
                X("span", null, et(e.model.copyStateButton.label), 1)
              ], 8, tO)
            ])) : ut("", !0),
            X("div", {
              class: ct(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ae(!0), fe(Be, { key: 0 }, wt(e.model.notes, (C) => (ae(), fe("div", {
                key: C,
                class: "pano-param-note"
              }, et(C), 1))), 128)) : (ae(!0), fe(Be, { key: 1 }, wt(e.model.rows || [], (C) => (ae(), fe(Be, {
                key: C.key
              }, [
                C.grouped ? (ae(), fe("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": C.key
                }, [
                  X("label", null, et(C.label), 1),
                  X("div", rO, [
                    (ae(!0), fe(Be, null, wt(C.fields, (F) => (ae(), fe("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      X("span", {
                        class: ct(["pano-axis", { disabled: c(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (W) => d(W, F)
                      }, et(F.short), 43, iO),
                      X("input", {
                        ref_for: !0,
                        ref: (W) => {
                          u[F.key] = W;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: c(F, e.model),
                        "aria-label": `${C.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, oO)
                    ]))), 128))
                  ])
                ], 8, nO)) : (ae(), fe("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": C.key
                }, [
                  X("label", null, et(C.label), 1),
                  X("input", {
                    type: "range",
                    min: C.fields[0].min,
                    max: C.fields[0].max,
                    step: C.fields[0].step,
                    value: C.fields[0].value,
                    disabled: c(C.fields[0], e.model),
                    style: Mt(a(C.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": C.fields[0].key
                  }, null, 12, sO),
                  X("input", {
                    type: "number",
                    min: C.fields[0].min,
                    max: C.fields[0].max,
                    step: C.fields[0].step,
                    value: C.fields[0].displayValue,
                    disabled: c(C.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": C.fields[0].key
                  }, null, 8, lO)
                ], 8, aO))
              ], 64))), 128))
            ], 2),
            De(TI, {
              model: e.easing,
              onTimeline: y[0] || (y[0] = (C) => r("timeline", C))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (ae(), fe("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                y[5] || (y[5] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", uO, [
                  De(zt, {
                    icon: Qe(Me).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", fO, [
                X("div", dO, [
                  y[6] || (y[6] = X("label", null, "Drag X", -1)),
                  X("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, hO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, mO)
                  ], 8, pO)
                ]),
                X("div", gO, [
                  y[7] || (y[7] = X("label", null, "Drag Y", -1)),
                  X("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, bO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, vO)
                  ], 8, yO)
                ]),
                y[8] || (y[8] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, cO)) : ut("", !0)
          ])
        ])) : ut("", !0),
        (e.model.footerButtons || []).length ? (ae(), fe("div", _O, [
          (ae(!0), fe(Be, null, wt(e.model.footerButtons, (C) => (ae(), fe("button", {
            key: C.action,
            class: ct(["pano-btn", { "pano-btn-primary": C.primary === !0 }]),
            type: "button",
            "data-action": C.action
          }, et(C.label), 11, wO))), 128))
        ])) : ut("", !0)
      ]);
    };
  }
}, SO = { class: "pano-timeline-bar" }, kO = ["aria-label", "data-tip"], MO = ["aria-label", "data-tip"], NO = { class: "pano-timeline-time" }, PO = ["data-tip"], AO = { key: 0 }, CO = ["min", "max", "value"], IO = ["data-tip"], OO = { key: 0 }, EO = ["max", "value"], FO = ["aria-expanded"], TO = ["inert"], DO = { class: "pano-timeline-name" }, LO = ["aria-pressed", "aria-label", "data-tip", "onClick"], RO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, VO = ["disabled", "aria-expanded", "aria-label", "onClick"], $O = ["title", "aria-current", "onClick"], zO = ["data-keyed", "aria-label", "onClick"], jO = ["onPointerdown"], HO = ["onPointerdown"], GO = ["onPointerdown"], KO = ["onPointerdown"], WO = ["aria-label", "data-tip", "onPointerdown"], BO = { key: 0 }, UO = ["onPointerdown"], YO = ["aria-label", "data-tip", "onPointerdown"], XO = { key: 0 }, qO = 10, JO = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = /* @__PURE__ */ Xt(null), a = /* @__PURE__ */ Xt(null), c = /* @__PURE__ */ Xt(1), u = /* @__PURE__ */ Xt(0), d = /* @__PURE__ */ Xt(!1);
    let b = null, y = null, v = null;
    Gc(() => {
      b = new ResizeObserver(([J]) => {
        c.value = Math.max(1, J.contentRect.width);
      }), o.value && b.observe(o.value), y = new ResizeObserver(([J]) => {
        u.value = J.contentRect.height;
      }), a.value && y.observe(a.value);
    }), Bs(() => {
      b == null || b.disconnect(), y == null || y.disconnect(), v == null || v();
    });
    const x = pt(() => Math.max(1, Number(n.model.span || 1))), N = pt(() => c.value / x.value), k = (J) => `${J / x.value * 100}%`, P = pt(() => GM(x.value, N.value));
    function C(J) {
      const q = o.value.getBoundingClientRect(), U = Math.floor((J - q.left) / Math.max(1, q.width) * x.value);
      return Math.min(x.value - 1, Math.max(0, U));
    }
    function F(J, q, U) {
      const j = Math.ceil(qO / Math.max(1e-6, N.value)), O = new Map(q.map((oe) => [oe.frame, oe.full]));
      return KM(q.map((oe) => oe.frame), j).map((oe, Q) => ({
        ...oe,
        key: `${J}:${Q}`,
        partial: oe.frames.some((Pe) => !O.get(Pe)),
        selected: oe.frames.some((Pe) => U.includes(Pe))
      }));
    }
    function W(J) {
      return F(J.id, J.keys, J.selectedFrames);
    }
    function R(J) {
      return F(J.key, J.frames.map((q) => ({ frame: q, full: !0 })), J.selectedFrames);
    }
    function V(J) {
      const q = J.end === null ? x.value : J.end;
      return { left: k(J.start), width: k(Math.max(0, q - J.start)) };
    }
    function _(J, q) {
      const U = J.clientX, j = Math.max(1e-6, N.value);
      let O = 0;
      q("start", 0, J);
      const oe = (Pe) => {
        if (Pe.pointerId !== J.pointerId) return;
        const Ee = Math.round((Pe.clientX - U) / j);
        Ee !== O && (O = Ee, q("move", O, Pe));
      }, Q = (Pe) => {
        Pe.pointerId === J.pointerId && (v(), q("end", O, Pe));
      };
      v == null || v(), v = () => {
        window.removeEventListener("pointermove", oe), window.removeEventListener("pointerup", Q), window.removeEventListener("pointercancel", Q), v = null;
      }, window.addEventListener("pointermove", oe), window.addEventListener("pointerup", Q), window.addEventListener("pointercancel", Q);
    }
    function L(J) {
      J.button === 0 && _(J, (q, U, j) => r("action", { type: "seek", frame: C(j.clientX), phase: q }));
    }
    function B(J, q, U) {
      J.button === 0 && (r("action", { type: "select-row", id: q.id }), _(J, (j, O) => r("action", { type: "clip", id: q.id, mode: U, delta: O, phase: j })));
    }
    function ce(J, q, U, j, O) {
      if (J.button === 0) {
        if (J.shiftKey) {
          r("action", { type: "select-keys", owner: q.id, lane: U, frames: j.frames, additive: !0 });
          return;
        }
        j.frames.every((oe) => O.includes(oe)) || r("action", { type: "select-keys", owner: q.id, lane: U, frames: j.frames, additive: !1 }), _(J, (oe, Q) => r("action", { type: "move-keys", delta: Q, phase: oe }));
      }
    }
    const we = pt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function E(J, q, U) {
      r("action", q), await jc(), J.target.value = U();
    }
    function z(J) {
      E(J, { type: "fps", fps: Number(J.target.value) }, () => we.value);
    }
    function xe(J) {
      const q = J.target.value.trim();
      E(J, { type: "length", length: q ? Number(q) : null }, () => n.model.length ?? "");
    }
    function te(J, q, U) {
      J.button !== 0 || J.target !== J.currentTarget || r("action", { type: "select-keys", owner: q.id, lane: U, frames: [], additive: !1 });
    }
    return (J, q) => vi((ae(), fe("section", {
      class: ct(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      X("div", SO, [
        X("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: q[0] || (q[0] = (U) => r("action", { type: "play" }))
        }, [
          De(zt, {
            icon: e.model.playing ? Qe(Me).pause : Qe(Me).play
          }, null, 8, ["icon"])
        ], 8, kO),
        e.model.hasAudio ? (ae(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: q[1] || (q[1] = (U) => r("action", { type: "mute" }))
        }, [
          De(zt, {
            icon: e.model.muted ? Qe(Me).volume_muted : Qe(Me).volume2
          }, null, 8, ["icon"])
        ], 8, MO)) : ut("", !0),
        X("span", NO, et(e.model.label), 1),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ae(), fe("span", AO, et(we.value), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: Qe(nb),
            max: Qe(np),
            step: "any",
            value: we.value,
            "aria-label": "Timeline fps",
            onChange: z
          }, null, 40, CO)),
          q[6] || (q[6] = X("span", null, "fps", -1))
        ], 8, PO),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          q[7] || (q[7] = X("span", null, "Length", -1)),
          e.model.lengthLocked ? (ae(), fe("span", OO, et(e.model.length), 1)) : (ae(), fe("input", {
            key: 1,
            type: "number",
            min: "1",
            max: Qe(Yc),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: xe
          }, null, 40, EO))
        ], 8, IO),
        X("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: q[2] || (q[2] = (U) => r("action", { type: "toggle-expanded" }))
        }, [
          q[8] || (q[8] = X("span", null, "Timeline", -1)),
          De(zt, {
            icon: Qe(Me).chevron
          }, null, 8, ["icon"])
        ], 8, FO)
      ]),
      X("div", {
        class: ct(["pano-timeline-body", { open: e.model.expanded, sliding: d.value }]),
        style: Mt({ "--pano-timeline-rows": `${u.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: q[3] || (q[3] = Ft((U) => d.value = !0, ["self"])),
        onTransitionend: q[4] || (q[4] = Ft((U) => d.value = !1, ["self"])),
        onTransitioncancel: q[5] || (q[5] = Ft((U) => d.value = !1, ["self"]))
      }, [
        X("div", {
          ref_key: "gridRef",
          ref: a,
          class: "pano-timeline-grid"
        }, [
          q[9] || (q[9] = X("div", { class: "pano-timeline-corner" }, null, -1)),
          X("div", {
            ref_key: "rulerRef",
            ref: o,
            class: "pano-timeline-ruler",
            onPointerdown: L
          }, [
            (ae(!0), fe(Be, null, wt(P.value, (U) => (ae(), fe("span", {
              key: U,
              class: "pano-timeline-tick",
              style: Mt({ left: k(U) })
            }, et(U), 5))), 128)),
            X("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: k(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ae(!0), fe(Be, null, wt(e.model.rows || [], (U) => (ae(), fe(Be, {
            key: U.id
          }, [
            X("div", {
              class: ct(["pano-timeline-head", { selected: U.selected, "is-hidden": !U.visible }])
            }, [
              X("div", DO, [
                U.hideable ? (ae(), fe("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": U.visible ? "true" : "false",
                  "aria-label": `${U.label} visible`,
                  "data-tip": U.visible ? "Hide" : "Show",
                  onClick: Ft((j) => r("action", { type: "toggle-visible", id: U.id }), ["stop"])
                }, [
                  De(zt, {
                    icon: U.visible ? Qe(Me).eye : Qe(Me).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, LO)) : (ae(), fe("span", RO)),
                X("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !U.keyable,
                  "aria-expanded": U.open ? "true" : "false",
                  "aria-label": U.open ? `Hide ${U.label} parameters` : `Show ${U.label} parameters`,
                  onClick: Ft((j) => r("action", { type: "toggle-row", id: U.id }), ["stop"])
                }, [
                  De(zt, {
                    icon: Qe(Me).chevron
                  }, null, 8, ["icon"])
                ], 8, VO),
                X("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: U.label,
                  "aria-current": U.selected ? "true" : void 0,
                  onClick: (j) => r("action", { type: "select-row", id: U.id })
                }, [
                  De(zt, {
                    icon: U.icon
                  }, null, 8, ["icon"]),
                  X("span", null, et(U.label), 1)
                ], 8, $O),
                U.keyable ? (ae(), fe("button", {
                  key: 2,
                  class: ct(["pano-timeline-key", { keyed: U.keyed }]),
                  type: "button",
                  "data-keyed": U.keyed ? "true" : "false",
                  "aria-label": U.keyed ? `Every ${U.label} parameter has a keyframe here; update them` : `Add keyframes for every ${U.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ft((j) => r("action", { type: "key-row", owner: U.id }), ["stop"])
                }, [
                  De(zt, {
                    icon: Qe(Me).keyframe
                  }, null, 8, ["icon"])
                ], 10, zO)) : ut("", !0)
              ]),
              U.open ? (ae(!0), fe(Be, { key: 0 }, wt(U.lanes, (j) => (ae(), fe("div", {
                key: j.key,
                class: "pano-timeline-lane-head"
              }, et(j.label), 1))), 128)) : ut("", !0)
            ], 2),
            X("div", {
              class: ct(["pano-timeline-track", { selected: U.selected }])
            }, [
              X("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (j) => te(j, U, null)
              }, [
                U.clip ? (ae(), fe("div", {
                  key: 0,
                  class: ct(["pano-timeline-clip", { open: U.clip.end === null }]),
                  style: Mt(V(U.clip)),
                  onPointerdown: Ft((j) => B(j, U, "move"), ["stop"])
                }, [
                  X("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ft((j) => B(j, U, "start"), ["stop"])
                  }, null, 40, GO),
                  X("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ft((j) => B(j, U, "end"), ["stop"])
                  }, null, 40, KO)
                ], 46, HO)) : ut("", !0),
                (ae(!0), fe(Be, null, wt(W(U), (j) => (ae(), fe("button", {
                  key: j.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: j.selected, cluster: j.frames.length > 1, partial: j.partial }]),
                  style: Mt({ left: k(j.frame + 0.5) }),
                  "aria-label": `${U.label}: ${j.frames.length > 1 ? `${j.frames.length} keyframes` : `keyframe at frame ${j.frames[0]}`}`,
                  "data-tip": j.frames.length > 1 ? `${j.frames.length} keyframes` : `Frame ${j.frames[0]}`,
                  onPointerdown: Ft((O) => ce(O, U, null, j, U.selectedFrames), ["stop"])
                }, [
                  j.frames.length > 1 ? (ae(), fe("span", BO, et(j.frames.length), 1)) : ut("", !0)
                ], 46, WO))), 128))
              ], 40, jO),
              U.open ? (ae(!0), fe(Be, { key: 0 }, wt(U.lanes, (j) => (ae(), fe("div", {
                key: j.key,
                class: "pano-timeline-lane",
                onPointerdown: (O) => te(O, U, j.lane)
              }, [
                (ae(!0), fe(Be, null, wt(R(j), (O) => (ae(), fe("button", {
                  key: O.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1 }]),
                  style: Mt({ left: k(O.frame + 0.5) }),
                  "aria-label": `${j.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Ft((oe) => ce(oe, U, j.lane, O, j.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (ae(), fe("span", XO, et(O.frames.length), 1)) : ut("", !0)
                ], 46, YO))), 128))
              ], 40, UO))), 128)) : ut("", !0),
              X("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: k(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, TO)
    ], 2)), [
      [Po, e.model.visible]
    ]);
  }
}, ZO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: ct(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Mt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, et(e.model.text || ""), 7));
  }
}, QO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, eE = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", QO, [
      (ae(!0), fe(Be, null, wt(e.buttons, (r) => vi((ae(), br(cn, {
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
        [Po, r.visible !== !1]
      ])), 128))
    ]));
  }
}, tE = ["data-video-ready"], nE = { class: "pano-video-transport-shell" }, rE = { class: "pano-video-controls-left" }, iE = { class: "pano-video-filmstrip" }, oE = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, aE = ["src", "onLoad"], sE = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, lE = ["max", "value", "disabled"], cE = { class: "pano-video-controls-right" }, uE = ["data-has-audio"], fE = { class: "pano-video-volume-pop" }, dE = ["value", "disabled"], pE = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause" : "Play";
    }), r = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause video" : "Play video";
    }), o = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? Me.pause : Me.play;
    }), a = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? Me.loop_off : Me.loop;
    }), d = pt(() => {
      var _, L;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number(((L = t.state) == null ? void 0 : L.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = pt(() => {
      var _, L, B;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? Me.volume : ((L = t.state) == null ? void 0 : L.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? Me.volume_muted : Me.volume2;
    }), y = pt(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = pt(() => ({ left: `${y.value}%` })), x = pt(() => {
      var ce, we;
      const _ = (ce = t.state) == null ? void 0 : ce.volumePct, L = Number(((we = t.state) == null ? void 0 : we.volume) ?? 1) * 100, B = Number(_ ?? L ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), N = pt(() => {
      var B, ce;
      const L = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((ce = t.state) == null ? void 0 : ce.durationLabel) || "0:00")
      ].reduce((we, E) => Math.max(we, E.length), 4);
      return `${Math.max(4, L)}ch`;
    }), k = pt(() => ({ "--pano-video-time-ch": N.value })), P = pt(() => {
      var B, ce;
      const _ = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const L = Math.max(7, Number(((ce = t.state) == null ? void 0 : ce.thumbnailCount) || 9));
      return Array.from({ length: L }, (we, E) => ({
        id: `placeholder-${E}`,
        src: "",
        label: ""
      }));
    }), C = /* @__PURE__ */ Xt(/* @__PURE__ */ new Set()), F = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), W = (_) => C.value.has(F(_)), R = (_) => {
      const L = new Set(C.value);
      L.add(F(_)), C.value = L;
    };
    _o(P, (_) => {
      const L = new Set(_.map(F)), B = /* @__PURE__ */ new Set();
      for (const ce of C.value)
        L.has(ce) && B.add(ce);
      C.value = B;
    }, { immediate: !0 });
    const V = pt(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, L) => (ae(), fe("div", {
      class: ct(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Mt(V.value)
    }, [
      L[1] || (L[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      L[2] || (L[2] = X("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", nE, [
        X("div", rE, [
          De(cn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          X("div", {
            class: "pano-video-time pano-video-time-start",
            style: Mt(k.value)
          }, et(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", iE, [
          X("div", oE, [
            (ae(!0), fe(Be, null, wt(P.value, (B) => (ae(), fe("div", {
              key: F(B),
              class: ct(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && W(B)
              }])
            }, [
              B.src ? (ae(), fe("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (ce) => R(B)
              }, null, 40, aE)) : (ae(), fe("span", sE))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Mt(v.value),
            "aria-hidden": "true"
          }, [...L[0] || (L[0] = [
            X("span", { class: "pano-video-playhead-line" }, null, -1),
            X("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          X("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, lE)
        ]),
        X("div", cE, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Mt(k.value)
          }, et(e.state.durationLabel || "0:00"), 5),
          De(cn, {
            "extra-class": "pano-video-control",
            icon: u.value,
            label: a.value,
            tip: c.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          X("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            X("div", fE, [
              X("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Mt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, dE)
            ]),
            De(cn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, uE)
        ])
      ])
    ], 14, tE));
  }
}, hE = { class: "pano-floating-top" }, mE = ["data-selected", "data-view-count"], gE = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], yE = { class: "label" }, bE = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ae(), fe("div", hE, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ae(!0), fe(Be, null, wt(e.buttons, (o) => vi((ae(), fe("button", {
            key: o.key,
            class: ct(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            De(zt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            X("span", yE, et(o.label), 1)
          ], 10, gE)), [
            [Po, o.visible !== !1]
          ])), 128))
        ], 8, mE)
      ]);
    };
  }
};
function D1(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Me.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Me.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Me.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Me.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Me.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Me.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Me.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Me.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Me.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Me.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Me.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Me.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Me.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Me.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Me.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Me.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Me.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Me.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Me.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Me.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Me.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Me.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Me.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Me.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Me.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Me.lasso_tool }
        ]
      }
    ]
  };
}
const vE = ["aria-label"], _E = { class: "pano-stage-column" }, wE = { class: "pano-stage-wrap" }, xE = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, SE = {
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
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ Xt(null), b = /* @__PURE__ */ Xt(null), y = /* @__PURE__ */ Xt(null);
    function v() {
      var E, z;
      return ((z = (E = y.value) == null ? void 0 : E.getRefs) == null ? void 0 : z.call(E)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(E) {
      var z, xe;
      return ((xe = (z = b.value) == null ? void 0 : z.open) == null ? void 0 : xe.call(z, E)) === !0;
    }
    function N(E) {
      o("image-file-selected", E);
    }
    function k(E) {
      o("image-file-cancelled", E);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: x });
    const P = pt(() => r.readOnly === !0), C = pt(() => r.shellPreset || D1(r.type)), F = pt(() => {
      var z, xe, te;
      const E = String((((z = r.uiState) == null ? void 0 : z.stageStatus) === "failed" ? (xe = r.uiState) == null ? void 0 : xe.stageStatusDetail : (te = r.uiState) == null ? void 0 : te.stageWarningDetail) ?? "");
      return E === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : E === "stickers" ? "One or more sticker previews are unavailable." : E === "frame" ? "The editor hit a rendering error. Check the browser console for details." : E === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : E.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = pt(() => {
      var z;
      const E = Array.isArray((z = C.value) == null ? void 0 : z.floatingButtons) ? C.value.floatingButtons.slice() : [];
      return P.value && E.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Me.fullscreen
      }), E;
    });
    function R() {
      const E = d.value;
      return E ? Array.from(E.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((z) => z instanceof HTMLElement ? !z.hidden && z.tabIndex >= 0 && z.offsetParent !== null : !1) : [];
    }
    function V() {
      var xe;
      const z = R()[0] || d.value;
      (xe = z == null ? void 0 : z.focus) == null || xe.call(z);
    }
    function _() {
      var E;
      u != null && u.isConnected && ((E = u.focus) == null || E.call(u)), u = null;
    }
    function L(E) {
      var z, xe, te, J;
      if (!E.defaultPrevented) {
        if (E.key === "Tab") {
          const q = R();
          if (!q.length) {
            E.preventDefault(), (xe = (z = d.value) == null ? void 0 : z.focus) == null || xe.call(z);
            return;
          }
          const U = q[0], j = q[q.length - 1], O = document.activeElement;
          if (E.shiftKey) {
            (O === U || O === d.value || !((te = d.value) != null && te.contains(O))) && (E.preventDefault(), j.focus());
            return;
          }
          (O === j || !((J = d.value) != null && J.contains(O))) && (E.preventDefault(), U.focus());
          return;
        }
        E.key === "Escape" && o("close");
      }
    }
    function B() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function ce() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function we(E) {
      document.removeEventListener("keydown", L), E ? (u || (u = document.activeElement), B(), document.addEventListener("keydown", L), jc(() => {
        V();
      })) : (ce(), _());
    }
    return Gc(() => {
      we(r.open);
    }), Bs(() => {
      ce(), document.removeEventListener("keydown", L), _();
    }), _o(() => r.open, (E) => {
      we(E);
    }), (E, z) => e.open ? (ae(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: z[2] || (z[2] = Ft((xe) => o("close"), ["self"]))
    }, [
      X("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        X("div", _E, [
          X("div", wE, [
            z[3] || (z[3] = X("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            z[4] || (z[4] = X("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            z[5] || (z[5] = X("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ae(), fe("div", xE, et(F.value), 1)) : ut("", !0),
            z[6] || (z[6] = X("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(fI, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            De(m1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            P.value ? ut("", !0) : (ae(), fe(Be, { key: 1 }, [
              De(eE, {
                buttons: e.uiState.toolButtons || C.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(DC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(uI, {
                "paint-swatches": e.paintSwatches,
                panes: C.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(pE, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(bE, {
              buttons: e.uiState.viewButtons || C.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(IC, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            De(vI, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(ZO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(jC, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(JO, {
            model: e.uiState.timeline || {},
            onAction: z[0] || (z[0] = (xe) => o("timeline", xe))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ut("", !0) : (ae(), br(xO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: z[1] || (z[1] = (xe) => o("timeline", xe))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, vE)
    ])) : ut("", !0);
  }
}, Ar = "loading", Gs = "ready", mr = "failed";
function L1(e, t = "") {
  return e && (e.__panoLoadState = Ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function R1(e, t = "") {
  return e && (e.__panoLoadState = Gs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function V1(e, t = "") {
  return e && (e.__panoLoadState = mr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Md(e, t) {
  return e ? e.__panoLoadState === mr ? mr : typeof t == "function" && t(e) ? Gs : Ar : Gs;
}
function Nd(e) {
  return Md(e) === mr;
}
function kE({ presented: e, background: t = Gs, stickers: n = [] } = {}) {
  if (!e) return { status: Ar, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Ar, a = r.includes(Ar);
  if (o && a) return { status: Ar, detail: "mixed" };
  if (o) return { status: Ar, detail: "background" };
  if (a) return { status: Ar, detail: "stickers" };
  const c = t === mr, u = r.includes(mr);
  return c && u ? { status: mr, detail: "mixed" } : c ? { status: mr, detail: "background" } : u ? { status: mr, detail: "stickers" } : { status: Gs, detail: "" };
}
const ME = "state_json", NE = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Mf = "sticker_image_1", PE = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), M0 = 0.01, AE = "external_image", El = "pano_sticker_input_images", CE = "pano_sticker_input_videos", IE = "pano_sticker_input_frames", OE = "pano_sticker_input_video_meta", EE = !0, tc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Gr = Math.PI / 180, go = 180 / Math.PI, Nf = 1, N0 = "rgb(255, 221, 87)", FE = "rgb(228, 228, 231)", TE = "rgb(180, 150, 60)", DE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, LE = 64, P0 = 40, Pf = 16, RE = 0.45, A0 = 180, VE = 160, Fc = 24, $E = 4, zE = 4, Fl = /* @__PURE__ */ new Map(), C0 = /* @__PURE__ */ new Map(), zi = /* @__PURE__ */ new Map(), jE = 12, $n = Gb({
  app: Ir,
  api: Yt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Nd,
    markImageFailed: V1,
    markImageLoading: L1,
    markImageReady: R1
  }
});
function Af(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = $n.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const HE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function GE(e) {
  if (!xn(e, "background")) return null;
  const [t] = $n.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = $n.uiValue(e, "pano_timeline_frames") || [], [r] = $n.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Yn(r) };
}
const KE = $n.assetSource, ss = $n.source, Cf = $n.uiImage, WE = $n.invalidateUiImage, If = $n.loadPreferredExactLinkedImage;
function Of(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function BE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function UE(e, t, n) {
  const r = ne((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function YE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = zi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (zi.delete(t), zi.set(t, n), n);
}
function XE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (zi.delete(n), zi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); zi.size > jE; ) {
      const o = zi.keys().next().value;
      if (!o) break;
      zi.delete(o);
    }
}
function qE(e) {
  return e * e * e;
}
function Zc(e, t, n) {
  return { x: e, y: t, z: n };
}
function I0(e, t) {
  return Zc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function O0(e, t) {
  return Zc(e.x * t, e.y * t, e.z * t);
}
function Ef(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function JE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Zc(e.x / t, e.y / t, e.z / t);
}
function Tl(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * go),
    pitch: ne(Math.asin(ne(e.y, -1, 1)) * go, -90, 90)
  };
}
function Ri(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function gs(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Ff(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return gs(e, t);
  const d = ne((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, x = Number(e.y || 0) - y;
  return v * v + x * x;
}
function pr(e, t, n) {
  return e + (t - e) * n;
}
function Kr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${ne(n, 0, 1)})`;
}
function ZE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Dl = { fillStyle: "", url: "" };
function QE(e, t, n) {
  if (Dl.url && Dl.fillStyle === String(e || ""))
    return Dl.url;
  const r = ZE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Fc}" height="${Fc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Dl = { fillStyle: String(e || ""), url: r }, r;
}
function nc(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function nr(e) {
  return {
    r: ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: ne(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Nn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function eF(e) {
  return tc.some((t) => nc(e, t.color));
}
function Tf(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = ne(Number(t), 0, 1), a = ne(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), u = r * 6 - c, d = a * (1 - o), b = a * (1 - u * o), y = a * (1 - (1 - u) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g: y, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: y };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: y, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function Df(e) {
  const t = ne(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = ne(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = ne(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function Zo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const $1 = "pano_suite.ui_settings.v1", z1 = "pano_suite.node_grid_visibility.v1";
let oa = null, Wr = null;
function rc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function tF() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($1)) || "").trim();
    if (!t) return oa ? rc(oa) : null;
    const n = JSON.parse(t), r = rc(n);
    return oa = r, r;
  } catch {
    return oa ? rc(oa) : null;
  }
}
function nF(e) {
  var n;
  const t = rc(e);
  oa = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem($1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function j1() {
  var e;
  if (Wr && typeof Wr == "object")
    return Wr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(z1)) || "").trim();
    if (!t)
      return Wr = {}, Wr;
    const n = JSON.parse(t);
    return Wr = n && typeof n == "object" ? n : {}, Wr;
  } catch {
    return Wr = {}, Wr;
  }
}
function rF(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = j1()[n];
  return typeof o == "boolean" ? o : !!t;
}
function iF(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = j1();
  r[n] = !!t, Wr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(z1, JSON.stringify(r));
  } catch {
  }
}
function oF(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function E0(e) {
  const { paintCount: t, maskCount: n } = oF(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Qo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ll(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function aF(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function sF(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function lF(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function cF(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function uF(e, t, n = {}) {
  var Im, Om;
  await _1(e, { tolerateOperationFailure: !0 }), $n.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = aF(e, t);
  await Np();
  const u = Ll(e, "output_preset"), d = Ll(e, "coverage"), b = Ll(e, "bg_color"), y = Ll(e, ME), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return If(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = v();
    return cF(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return lF(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : sF(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, C = t === "cutout" && k, F = P && e.__panoStudio === !0, W = C || F, R = t === "cutout" || F, V = C ? GE(e) : null, _ = (k ? bb : yb)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: V ? V.coverage : Yn(d == null ? void 0 : d.value),
    sharedUiSettings: tF(),
    active: wb(e),
    fps: k ? Af(e) : null,
    scene: (V == null ? void 0 : V.state) ?? null,
    camera: C
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let L = null;
  W ? (L = _.camera && (!F || _.camera.visible !== !1) ? Pg(_.camera, 0) : null, _.shots = L ? [{ ...L, position: [...L.position] }] : [], _.active.selected_shot_id = L && C ? Wl : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const B = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, ce = B ? _h(B, !1) : { width: 220, height: 132 }, we = D1(F ? "studio" : t), E = /* @__PURE__ */ ka({
    stageStatus: Ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (we.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Im = we.spaceButtons) != null && Im.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: we.spaceButtons, frame: we.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (we.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...C && HE.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(we.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Me.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Me.aspect,
      rotateIcon: Me.rotate_90,
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
      icon: Me.fullscreen,
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
      customColorCss: Kr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Kr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: ce.width,
      height: ce.height,
      label: B ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const xe = ({ intent: i, file: s } = {}) => {
    if (Cr(s)) {
      if (i === "add") {
        Rh(s);
        return;
      }
      if (i === "add-world") {
        tw(s);
        return;
      }
      i === "replace" && iw(s);
    }
  }, te = ({ intent: i } = {}) => {
  }, J = Kd(SE, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: we,
    paintSwatches: tc.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Kr(i.color, 1)
    })),
    uiState: E,
    onClose: () => {
      Uo();
    },
    onTimeline: (i) => Z_(i),
    onImageFileSelected: xe,
    onImageFileCancelled: te
  });
  let q = null;
  try {
    q = J.mount(z);
  } catch (i) {
    try {
      J.unmount();
    } catch {
    }
    throw z.remove(), i;
  }
  const U = z.querySelector(".pano-modal-overlay"), j = z.querySelector(".pano-modal"), O = j == null ? void 0 : j.querySelector("[data-stage-overlay]"), oe = j == null ? void 0 : j.querySelector("[data-stage-background]"), Q = j == null ? void 0 : j.querySelector(".pano-stage-wrap"), Pe = ((Om = q == null ? void 0 : q.getPaintOverlayRefs) == null ? void 0 : Om.call(q)) || {}, Ee = Pe.cursor || null, ht = Pe.sizePreview || null, Ye = Pe.sizeSample || null;
  if (!U || !j || !O || !oe || !Q || !Ee || !ht || !Ye)
    throw J.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const D = O.getContext("2d"), gt = j.querySelector("[data-side]"), Ae = j.querySelector("[data-video-element]"), xt = j.querySelector("[data-port-video-element]"), Tt = j.querySelector(".pano-floating-right"), mn = j.querySelector(".pano-floating-top"), ni = j.querySelector("[data-tool-rail]"), $ = j.querySelector("[data-frame-rail]"), K = j.querySelector("[data-frame-roll-knob]"), le = j.querySelector("[data-paint-dock]"), Se = j.querySelector(".pano-video-transport"), be = j.querySelector("[data-selection-menu]");
  let _e = !1;
  const Ne = j.querySelector("[data-tooltip]"), Ce = j.querySelector("[data-camera-preview-host]"), ke = j.querySelector("[data-camera-preview-canvas]"), he = j.querySelector("[data-paint-color-row]"), Oe = j.querySelector("[data-paint-color-pop]"), Ie = j.querySelector("[data-paint-color-sv]"), Ve = j.querySelector("[data-paint-color-sv-cursor]"), He = j.querySelector("[data-paint-hue-strip]"), it = j.querySelector("[data-paint-hue-handle]");
  let ot = 0, ft = 0;
  Q == null || Q.removeAttribute("data-stage-ready"), Q == null || Q.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", oe.style.opacity = "0", o && (gt == null || gt.remove(), j.classList.add("pano-modal-readonly"));
  const dt = () => {
    if (!h.customPaintSessionStart) return;
    if (nc(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (eF(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      nr(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !nc(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Rt = (i = !1) => {
    !Oe || Oe.hidden || (i ? dt() : h.customPaintSessionStart = null, Oe.hidden = !0, E.paintDock.colorPopOpen = !1);
  }, Fn = () => {
    Oe && (Oe.hidden && (h.customPaintSessionStart = nr(h.customPaintColor)), Oe.hidden = !1, E.paintDock.colorPopOpen = !0);
  };
  j.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || to(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (j.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Rt(!0), R && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), ue()), (s = E.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (E.frameRail.aspectOpen = !1)));
  });
  const Tn = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, ri = JSON.stringify(Mg(_)), h = {
    mode: "pano",
    selectedId: Tn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Pr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Yn(_.coverage),
    historyController: UA(80, { entries: [ri], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ci,
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
    showGrid: rF(e == null ? void 0 : e.id, !0),
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
    paintEngine: Uf(),
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
    // PanoramaStickersNode: the id of the world Sticker selected in the space view or on its Timeline row
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
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Ge = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let nn = null;
  t === "stickers" && (h.selectedId = null, _.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const Jt = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), H = document.createElement("canvas");
  H.__panoFrameIdx = 0;
  const ge = document.createElement("canvas");
  ge.__panoFrameIdx = 0;
  const re = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, Fe = YA({
    requestFrame: (i) => requestAnimationFrame(i),
    cancelFrame: (i) => cancelAnimationFrame(i),
    tasks: {
      seek: () => Zt.seek(Ge.scrubFrame),
      timeline: () => $r(),
      view: () => {
        tr(), Lt();
      },
      sidePanel: () => Re()
    }
  }), je = XN({
    onReady: () => ue(),
    onFailed: () => ue(),
    onUpdate: () => {
      re.backgroundDirty = !0, ue({ localOnly: !0 });
    }
  });
  let Te = { key: "", projection: null }, Ze = { key: null, sceneState: null }, Dt = null, rn = null, Jn = null, Gt = null, Fr = null;
  const Pa = Number.parseFloat(
    getComputedStyle(j).getPropertyValue("--pano-float-radius")
  ) || 10, Pt = (i) => {
    const s = String(i || "default");
    O.style.cursor !== s && (O.style.cursor = s);
  }, _t = {
    timer: 0,
    target: null
  }, yn = {
    active: !1,
    depth: 0
  }, At = {
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
  }, Tr = 9, fn = [];
  let Sn = 0;
  const Ys = () => {
    var I, M;
    const i = (I = Q == null ? void 0 : Q.getBoundingClientRect) == null ? void 0 : I.call(Q), s = (M = Tt == null ? void 0 : Tt.getBoundingClientRect) == null ? void 0 : M.call(Tt), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - g * 2)), S = h.fullscreen ? Math.min(1200, w) : w;
    E.videoTransport.shellMaxWidthPx = S;
  }, Ui = () => {
    Sn || (Sn = window.requestAnimationFrame(() => {
      Sn = 0, Ys();
    }));
  }, Ni = (i) => {
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
    return !!E.videoTransport.hasAudio;
  }, wr = typeof ResizeObserver < "u" ? new ResizeObserver(() => Ui()) : null;
  wr == null || wr.observe(Q), Tt && (wr == null || wr.observe(Tt)), fn.push(() => {
    var i;
    Sn && (window.cancelAnimationFrame(Sn), Sn = 0), (i = wr == null ? void 0 : wr.disconnect) == null || i.call(wr);
  }), Ui();
  const Xs = () => {
    At.thumbnailJobId += 1, At.thumbnailSrc = "", E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Tr;
  }, H1 = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      Xs();
      return;
    }
    const p = YE(f);
    if (p) {
      At.thumbnailSrc = f, E.videoTransport.thumbnails = p.thumbnails, E.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++At.thumbnailJobId;
    At.thumbnailSrc = f, E.videoTransport.thumbnails = [], E.videoTransport.thumbnailCount = Tr;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((se) => {
      let pe = !1;
      const ie = (me) => {
        pe || (pe = !0, se(me));
      };
      g.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), g.addEventListener("canplay", () => ie(!0), { once: !0 }), g.addEventListener("error", () => ie(!1), { once: !0 }), g.src = f, g.load();
    });
    if (At.thumbnailJobId !== m) return;
    const S = Number(g.videoWidth || 0), I = Number(g.videoHeight || 0);
    if (!w || S < 1 || I < 1) {
      At.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), A = document.createElement("canvas"), T = 46, Y = Math.max(72, Math.round(S / I * T));
    A.width = Y, A.height = T;
    const G = A.getContext("2d");
    if (!G) return;
    const ee = [], Z = (se) => new Promise((pe) => {
      let ie = !1;
      const me = () => {
        ie || (ie = !0, pe());
      };
      g.addEventListener("seeked", me, { once: !0 }), g.addEventListener("error", me, { once: !0 });
      try {
        g.currentTime = se;
      } catch {
        me();
      }
    });
    for (let se = 0; se < Tr; se += 1) {
      if (At.thumbnailJobId !== m) return;
      const pe = se / (Tr - 1), ie = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * pe)) : 0;
      if (await Z(ie), At.thumbnailJobId !== m) return;
      G.clearRect(0, 0, Y, T), G.drawImage(g, 0, 0, Y, T), ee.push({
        id: `thumb-${se}`,
        src: A.toDataURL("image/jpeg", 0.72),
        time: ie,
        label: fu(ie)
      });
    }
    At.thumbnailJobId === m && (E.videoTransport.thumbnails = ee, E.videoTransport.thumbnailCount = ee.length || Tr, XE(f, {
      thumbnails: ee,
      thumbnailCount: ee.length || Tr,
      duration: M,
      fps: l
    }));
  };
  fn.push(() => {
    Xs();
  });
  const Zt = i1({
    video: Ae instanceof HTMLVideoElement ? Ae : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: el,
    span: () => {
      if (k) return fl();
      const i = Math.round(Number(E.videoTransport.duration || 0) * el());
      return Ae.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? U_(i) : Ci(), ue({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      pv() && (re.backgroundDirty = !0);
    },
    onChange: () => {
      Ci(), $r(), ue({ cause: "frame_view", localOnly: !0 });
    }
  });
  fn.push(() => Zt.dispose());
  const Eo = k && xt instanceof HTMLVideoElement ? o1({
    video: xt,
    onCapture: () => {
      var l;
      const i = Number(xt.videoWidth || 0), s = Number(xt.videoHeight || 0);
      i < 1 || s < 1 || (ge.width = i, ge.height = s, (l = ge.getContext("2d")) == null || l.drawImage(xt, 0, 0), ge.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  Eo && fn.push(() => Eo.dispose());
  const G1 = k ? Ub({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Ae instanceof HTMLVideoElement) {
    const i = () => {
      Ii(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ci({
        hasAudio: E.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ae.dataset.panoSrc;
      f && (At.failedSrcs.add(f), Ii(), ue());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ae.addEventListener(f, p), fn.push(() => Ae.removeEventListener(f, p));
  }
  function K1() {
    E.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Qc(i) {
    return Ap(i == null ? void 0 : i.dataTransfer);
  }
  function Yi(i) {
    const s = !!i;
    yn.active !== s && (yn.active = s, Q.classList.toggle("drop-active", s));
  }
  function Xi(i, s = null) {
    const l = _n();
    h.viewTransition = rC(l, i, performance.now(), { scale: Vr(), end: s }), !h.viewTransition && s && Fp(s), sn.state.inertia.active = !1, sn.state.inertia.vx = 0, sn.state.inertia.vy = 0, Dr(), ue({ localOnly: !0 });
  }
  function Fp(i) {
    Ra(rd({ ...yu(), moved: i.moved }, i.mode, Vo())), re.backgroundDirty = !0;
  }
  function Aa() {
    h.viewTransition && (h.viewTransition = null, Dr());
  }
  function Tp(i, s) {
    Xi({ ..._n(), yaw_deg: i, pitch_deg: s });
  }
  xv();
  function ii() {
    return t === "stickers" ? Ca() : _.shots;
  }
  function Ca() {
    return P ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Zn(i) {
    return P && St(i);
  }
  function eu(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function on(i) {
    return Zn(i) ? fp(i, h.frame) : i;
  }
  function xr(i, s) {
    Zn(i) ? vb(i, h.frame, s) : Object.assign(i, s);
  }
  function kn() {
    const i = _.painting || (_.painting = da(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function W1(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function B1() {
    return W1("paint");
  }
  function Ia(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Oa(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function gn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Ea(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function tu() {
    var s;
    let i = -1;
    for (const l of Ca())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of kn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Dp(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = kn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? tu() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function U1(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: ne(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: ne(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: ne(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: ne(l + p, 0, 1)
      }
    ];
  }
  function Y1() {
    const i = new Set(B1()), l = kn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: tu(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function X1(i, s, l) {
    var ee;
    const f = (Z) => (Number(Z || 0) % 1 + 1) % 1, p = [];
    for (const Z of l) {
      const se = Z == null ? void 0 : Z.geometry, pe = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(pe) && p.push(...pe);
    }
    if (!p.length) return null;
    const m = f(((ee = p[0]) == null ? void 0 : ee.u) || 0);
    let g = 0, w = 0;
    p.forEach((Z) => {
      const se = f((Z == null ? void 0 : Z.u) || 0);
      g += m + lr(se, m), w += Number((Z == null ? void 0 : Z.v) || 0);
    });
    const S = (g / p.length % 1 + 1) % 1;
    let I = 1 / 0, M = -1 / 0, A = 1 / 0, T = -1 / 0;
    p.forEach((Z) => {
      const se = f((Z == null ? void 0 : Z.u) || 0), pe = lr(se, S);
      I = Math.min(I, pe), M = Math.max(M, pe);
      const ie = Number((Z == null ? void 0 : Z.v) || 0);
      A = Math.min(A, ie), T = Math.max(T, ie);
    });
    const Y = l.reduce((Z, se) => {
      const pe = Li(String((se == null ? void 0 : se.toolKind) || "pen")), ie = Kn[pe] || Kn[ci], me = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(Z, me);
    }, 0), G = Math.max(35e-4, Y / 2048);
    return {
      centerUv: { u: ((S + (I + M) * 0.5) % 1 + 1) % 1, v: ne((A + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - I) * 0.5 + G,
      halfH: (T - A) * 0.5 + G,
      uvPad: G
    };
  }
  function Pi(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = kn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || Sr(f, s);
    return p.frame = X1(f, s, m), p.frame;
  }
  function Fo() {
    var f;
    const i = Ca().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = Y1().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((f = _.painting) == null ? void 0 : f.raster_objects) ? _.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function nu(i = !0) {
    var l, f, p, m, g, w;
    const s = Fo().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), I = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      S && I === "paint" && M !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function ru(i = !0) {
    var w, S, I, M, A, T;
    const s = Fo();
    if (!i) return s;
    const l = String(((S = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), f = String(((M = (I = h.interaction) == null ? void 0 : I.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((T = (A = h.interaction) == null ? void 0 : A.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((Y) => Y.type === "strokeGroup" && String(Y.actionGroupId || "") === l))
      return s;
    const m = It();
    let g = s.reduce((Y, G) => Math.max(Y, Number((G == null ? void 0 : G.z_index) || 0)), -1) + 1;
    return m && an(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((Y, G) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0));
  }
  function q1() {
    return kn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Do(Ia("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function J1() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => To(Oa((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Lp(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function Z1() {
    var s, l, f, p;
    let i = null;
    try {
      const m = nu(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ha()}:${iu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function iu() {
    var p, m, g, w, S, I, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Lp(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const A = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, T = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), Y = ((g = A == null ? void 0 : A.rawPoints) == null ? void 0 : g.length) ?? ((w = A == null ? void 0 : A.points) == null ? void 0 : w.length) ?? 0, G = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${T || "paint"}_${s}_live${G}_${Y}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), f = String(((I = i == null ? void 0 : i.item) == null ? void 0 : I.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function qs() {
    return C || !Array.isArray(_.stickers) ? [] : Ca();
  }
  function ou() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...qs()];
  }
  function dn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function St(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function jn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function To(i) {
    const s = gn(i);
    if (!s) return null;
    const l = jn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Oa(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function bn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = gn(i.rasterObjectId || i.id || "");
    return !!s && !!To(Oa(s));
  }
  function Do(i) {
    const s = Ea(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = kn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Ia("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function an(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Do(Ia(l, s));
  }
  function Sr(i, s = null) {
    const l = Ea(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Ko(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function Q1(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${ja()}`;
    if (h.mode === "frame") {
      const m = $e(), g = String((m == null ? void 0 : m.id) || ""), w = m ? pn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Js(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: ne(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function lr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function au(i, s = null, l = null) {
    var I;
    const f = Ea(i, s), p = Array.isArray(l) ? l : Sr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const A = (M == null ? void 0 : M.geometry) || null, T = (A == null ? void 0 : A.geometryKind) === "lasso_fill" ? A == null ? void 0 : A.points : (A == null ? void 0 : A.processedPoints) || (A == null ? void 0 : A.rawPoints) || (A == null ? void 0 : A.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((I = m[0]) == null ? void 0 : I.u) || 0);
    let w = 0, S = 0;
    return m.forEach((M) => {
      w += g + lr(Number((M == null ? void 0 : M.u) || 0), g), S += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: ne(S / m.length, 0, 1)
    };
  }
  function Zs(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = lr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Number(f || 0) * Gr, I = Math.cos(S), M = Math.sin(S), A = Math.max(0.02, Number(l || 1)), T = (g * I - w * M) * A, Y = (g * M + w * I) * A;
    return {
      ...i,
      u: ((p + T) % 1 + 1) % 1,
      v: ne(m + Y, 0, 1)
    };
  }
  function Rp(i, s, l, f = null, p = null, m = null) {
    const g = Ea(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Ko(g.layerKind), I = Array.isArray(f) ? new Map(f.map((A) => [String((A == null ? void 0 : A.id) || ""), A])) : null;
    let M = !1;
    if (S.forEach((A) => {
      if (String((A == null ? void 0 : A.actionGroupId) || "").trim() !== w) return;
      const T = (I == null ? void 0 : I.get(String((A == null ? void 0 : A.id) || ""))) || A, Y = A == null ? void 0 : A.geometry, G = T == null ? void 0 : T.geometry;
      !Y || !G || (Array.isArray(G.points) && (Y.points = G.points.map((ee) => Js(ee, s, l)), M = !0), Array.isArray(G.rawPoints) && (Y.rawPoints = G.rawPoints.map((ee) => Js(ee, s, l)), M = !0), Array.isArray(G.processedPoints) && (Y.processedPoints = G.processedPoints.map((ee) => Js(ee, s, l)), M = !0));
    }), M && m) {
      const A = kn().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === w);
      A && (A.frame = null);
    }
    return M;
  }
  function Vp(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = Ea(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Ko(g.layerKind), I = Array.isArray(f) ? f : Sr(w, g.layerKind), M = Array.isArray(I) ? new Map(I.map((Y) => [String((Y == null ? void 0 : Y.id) || ""), Y])) : null, A = (m == null ? void 0 : m.centerUv) ?? au(w, g.layerKind, I);
    let T = !1;
    if (S.forEach((Y) => {
      if (String((Y == null ? void 0 : Y.actionGroupId) || "").trim() !== w) return;
      const G = (M == null ? void 0 : M.get(String((Y == null ? void 0 : Y.id) || ""))) || Y, ee = Y == null ? void 0 : Y.geometry, Z = G == null ? void 0 : G.geometry;
      !ee || !Z || (Array.isArray(Z.points) && (ee.points = Z.points.map((se) => Zs(se, A, s, l)), T = !0), Array.isArray(Z.rawPoints) && (ee.rawPoints = Z.rawPoints.map((se) => Zs(se, A, s, l)), T = !0), Array.isArray(Z.processedPoints) && (ee.processedPoints = Z.processedPoints.map((se) => Zs(se, A, s, l)), T = !0));
    }), T && m) {
      const Y = kn().find((G) => String((G == null ? void 0 : G.actionGroupId) || "") === w);
      Y && (Y.frame = null);
    }
    return T;
  }
  function $p(i, s, l, f = null) {
    const p = gn(i);
    if (!p) return !1;
    const m = jn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, S = Number(w.du || 0) + Number(s || 0), I = ne(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = I, !0;
  }
  function ev(i, s = 1, l = null) {
    const f = gn(i);
    if (!f) return !1;
    const p = jn().find((I) => String((I == null ? void 0 : I.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, g = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(g.scale || 1)), S = ne(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = S, !0;
  }
  function It() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Do(i);
    if (s) return s;
    const l = To(i);
    return l || (R ? ou().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : ii().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function cr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? It() : Do(p) || To(p) || (R ? ou().find((g) => String((g == null ? void 0 : g.id) || "") === p) : ii().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function Fa(i = null) {
    const s = Array.isArray(i) ? i : cr();
    if (!s || s.length < 2) return null;
    const l = s.map((I) => Qt(I)).filter((I) => (I == null ? void 0 : I.visible) && Array.isArray(I.corners) && I.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), w = Math.min(...p), S = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (w + S) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: g, y: w },
        { x: g, y: S },
        { x: m, y: S }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: w, a: { x: m, y: w }, b: { x: g, y: w } },
        { edge: "right", x: g, y: (w + S) * 0.5, a: { x: g, y: w }, b: { x: g, y: S } },
        { edge: "bottom", x: (m + g) * 0.5, y: S, a: { x: g, y: S }, b: { x: m, y: S } },
        { edge: "left", x: m, y: (w + S) * 0.5, a: { x: m, y: S }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: w },
      rotateHandle: { x: (m + g) * 0.5, y: w - 30 }
    };
  }
  function zp(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Ta() {
    const i = It();
    return i ? an(i) || bn(i) ? "stroke" : dn(i) ? "frame" : "image" : null;
  }
  function vn(i) {
    if (!i || typeof i != "object") return !1;
    if (an(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = kn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (bn(i)) {
      const s = gn(i.rasterObjectId || i.id || ""), l = jn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function su(i = null) {
    const s = Array.isArray(i) ? i : cr();
    return s.length > 0 && s.every((l) => vn(l));
  }
  function tv(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (an(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = kn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (bn(i)) {
      const f = gn(i.rasterObjectId || i.id || ""), p = jn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function nv() {
    if (r) return;
    const i = cr();
    if (!i.length) return;
    const s = !su(i);
    let l = !1;
    i.forEach((f) => {
      tv(f, s) && (l = !0);
    }), l && (qe(), rt(), Ke(), Re(), ue());
  }
  function Dn(i) {
    qi(), Ge.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && St(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && dn(i) ? _.active.selected_shot_id = i.id || null : i ? dn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function rv(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, qi(), Ge.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = It();
    _.active.selected_sticker_id = m && St(m) && m.id || null, m && dn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function jp() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = qs().map((l, f) => {
      var m, g;
      const p = Kt(l) ? String(l.id || Mf) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Hp(i) {
    return i === "frame" ? Me.camera : i === "stroke" ? Me.paintbrush_vertical_tool : Me.image;
  }
  function lu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Hp(i.kind)
    };
  }
  function Qs() {
    return tu();
  }
  function Kt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Mf || String(i.source_kind || "") === AE;
  }
  function Lo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function iv(i) {
    return Kt(i) && Lo(i) ? Cb : 1;
  }
  function ov() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function av() {
    return String(ov() || "") === "lasso_fill";
  }
  function sv() {
    if (r) return;
    const i = It();
    !i || !Kt(i) || (i.visible = Lo(i), Ua(), Lt(), qe(), rt(), Re(), Ke(), ue());
  }
  function lv() {
    if (r || t !== "stickers") return;
    const i = It();
    if (!i || !Kt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = du(El, () => {
      ue();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Oi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), qe(), rt(), Re(), Ke(), ue();
  }
  function cv(i) {
    if (!i || !Kt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = du(El, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Oi(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function uv() {
    const i = It();
    if (!i || !Kt(i)) return !1;
    const s = cv(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Ai(i) {
    return $n.uiList(e, i);
  }
  function cu(i) {
    return $n.uiValue(e, i);
  }
  function Gp() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return mc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function fv() {
    const { metaKey: i } = Gp(), s = cu(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function uu(i) {
    return i ? i instanceof HTMLVideoElement ? [
      String(i.currentSrc || i.src || ""),
      Number(i.videoWidth || 0),
      Number(i.videoHeight || 0)
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
  function fu(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function el() {
    return k ? _.timeline.fps : At.metaFps || 1e3;
  }
  function Ci(i = {}) {
    const s = Number(i.duration ?? E.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? E.videoTransport.fps ?? 24)), f = Zt.frame / el(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!E.videoTransport.ready, m = Zt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!E.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ae instanceof HTMLVideoElement ? Ae.muted : E.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ae instanceof HTMLVideoElement ? Ae.volume : E.videoTransport.volume
    ), I = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ni(Ae), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!E.videoTransport.loop;
    Object.assign(E.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: fu(f),
      durationLabel: fu(s),
      frameCount: Math.max(0, Number(i.frameCount ?? E.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: I,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : E.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? E.videoTransport.thumbnailCount ?? Tr))
    });
  }
  function Kp() {
    return !!(Ae instanceof HTMLVideoElement && !k && Ae.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Wp() {
    if (!(Ae instanceof HTMLVideoElement) || !E.videoTransport.hasAudio) return;
    const i = !Ae.muted;
    Ae.muted = i, !i && Number(Ae.volume || 0) <= 0 && (Ae.volume = Math.max(0.01, Number(E.videoTransport.volume || 1))), Ci({
      hasAudio: E.videoTransport.hasAudio,
      muted: Ae.muted,
      volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
    });
  }
  function dv() {
    Ci({
      visible: Kp()
    });
  }
  function pv() {
    if (!(Ae instanceof HTMLVideoElement) || Number(Ae.videoWidth || 0) < 1 || Number(Ae.videoHeight || 0) < 1) return !1;
    const i = Number(Ae.videoWidth || 0), s = Number(Ae.videoHeight || 0);
    (H.width !== i || H.height !== s) && (H.width = i, H.height = s);
    const l = H.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ae, 0, 0, i, s), H.__panoFrameIdx = Number(H.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Bp() {
    return !Zt.showsVideo && Number(H.width || 0) > 0 && Number(H.height || 0) > 0 && Number(H.__panoFrameIdx || 0) > 0 ? H : Ae instanceof HTMLVideoElement && Number(Ae.videoWidth || 0) > 0 && Number(Ae.videoHeight || 0) > 0 && Number(Ae.readyState || 0) >= 2 ? Ae : null;
  }
  function Up() {
    H.__panoFrameIdx = 0, re.backgroundDirty = !0;
  }
  function Ii() {
    if (!(Ae instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Gp(), s = xn(e, "background") && Ai(i)[0] || null, l = ss(s), f = [l, $n.linkedVideoFile(e, uh())].filter(Boolean), p = f.find((A) => !At.failedSrcs.has(A)) || "";
    At.videoFailed = !p && f.length > 0;
    const m = p && p === l ? fv() : null;
    At.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Ae.dataset.panoSrc === p && Number.isFinite(Ae.duration) ? Ae.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), I = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * g))), M = !!(m != null && m.has_audio) || Ni(Ae);
    return p && Ae.dataset.panoSrc !== p ? (Ae.pause(), Up(), Ae.dataset.panoSrc = p, Ae.loop = !k && !!E.videoTransport.loop, Ae.muted = !!E.videoTransport.muted, Ae.volume = Math.max(0, Math.min(1, Number(E.videoTransport.volume ?? 1))), Ae.src = p, Ae.load(), Zt.setSource(!0), k || Zt.seek(0)) : !p && Ae.getAttribute("src") && (Ae.pause(), Ae.removeAttribute("src"), delete Ae.dataset.panoSrc, Ae.load(), Up(), Xs(), Zt.setSource(!1)), k || (Ae.loop = !!E.videoTransport.loop), p && !k && At.thumbnailSrc !== p && !At.thumbnailFailedSrcs.has(p) && H1(p, S, g), p || Xs(), Ci({
      ready: !!p,
      visible: !!p && Kp(),
      duration: S,
      frameCount: I,
      fps: g,
      hasAudio: M,
      loop: !!Ae.loop,
      muted: !!Ae.muted,
      volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1),
      thumbnailCount: E.videoTransport.thumbnailCount
    }), p || null;
  }
  function Yp(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const f = i[0];
      if (f && typeof f == "object" && !Array.isArray(f)) return f;
    }
    if (Array.isArray(s) && s.length > 0) {
      const f = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (f && typeof f == "object" && !Array.isArray(f))
        return {
          yaw_deg: Number(f.yaw_deg || 0),
          pitch_deg: Number(f.pitch_deg || 0),
          hFOV_deg: Number(f.hFOV_deg || 30),
          rot_deg: Number(f.roll_deg || 0)
        };
    }
    return null;
  }
  function du(i, s = null) {
    return Cf(e, i, Jt, s || (() => ue()));
  }
  function pu(i = null) {
    return xn(e, "external-sticker") ? du(El, i) : null;
  }
  function Xp() {
    if (!xn(e, "external-sticker")) return null;
    const i = Ai(OE)[0];
    if (!i || typeof i != "object") return null;
    const s = Ai(IE).map(ss).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = ss(Ai(CE)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function hv() {
    const i = _.stickers.find(Kt), s = i ? Xp() : null, l = s ? Kb(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    Eo.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: Zt.advancing, fps: _.timeline.fps });
    const f = i ? _u(i) : null, p = s != null && s.frames ? G1.picture(s.frames, l, s.meta, f) : Eo.picture(ge, f);
    return p ? { media: p, revision: uu(p), source: Bb(s, f) } : null;
  }
  function Oi(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = ne(Number(i || 30), 0.1, 179) * Gr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return ne(g * go, 0.1, 179);
  }
  function mv(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const f = l.version;
      let p = null;
      if (typeof f == "number" && Number.isInteger(f) ? p = f : typeof f == "string" && /^\d+$/.test(f) && (p = Number.parseInt(f, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), w = Number(m.pitch_deg), S = Number(m.roll_deg), I = Number(m.hFOV_deg);
      if (![g, w, S, I].every((Y) => Number.isFinite(Y))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const A = {
        yaw_deg: M,
        pitch_deg: ne(w, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: ne(I, 0.1, 179)
      }, T = Number(l.source_aspect);
      return Number.isFinite(T) && T > 0 && (A.source_aspect = T), A;
    } catch {
      return null;
    }
  }
  function qp(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = So(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(s) ? s : 0),
        pitch_deg: ne(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: ne(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function gv(i) {
    var w;
    if (!i || typeof i != "object") return qp(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const S = ne(p, 0.1, 179) * Gr, I = ne(m, 0.1, 179) * Gr, M = Math.tan(I * 0.5);
      if (Math.abs(M) > 1e-6) {
        const A = Math.tan(S * 0.5) / M;
        Number.isFinite(A) && A > 0 && (g = A);
      }
    }
    if (i != null && i.asset_id && ((w = _ == null ? void 0 : _.assets) != null && w[i.asset_id])) {
      const S = _.assets[i.asset_id], I = Number((S == null ? void 0 : S.w) || 0), M = Number((S == null ? void 0 : S.h) || 0);
      I > 0 && M > 0 && (g = I / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(s) ? s : 0),
        pitch_deg: ne(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: ne(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function yv(i) {
    return $n.linkedValue(e, i);
  }
  function bv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : mv(s);
    if (f) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), w = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Oi(f.hFOV_deg, g, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Oi(30, p, m),
      rot_deg: 0
    };
  }
  function vv() {
    const i = pu(() => {
      yi(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? Yp(cu("pano_sticker_input_pose"), null) : null;
    return n1(_, t1(e, { pose: s, image: i }));
  }
  function _v() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = pu(() => {
      yi(e, "image-loaded");
    }), f = Yp(cu("pano_sticker_input_pose"), null), p = yv("sticker_state"), m = $n.externalStateHash(e, p), g = s == null ? null : bv(f, p, l);
    return e1(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function Jp(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? vv() : _v();
    if (s.changed) {
      const l = _.stickers.find(Kt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), rt(), Re(), Ke();
    }
    ue();
  }
  function Da(i = {}) {
    const l = i.preservePanelValues !== !1 ? on(It()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: di(l)
    }), h.selectedId = null, h.selectedIds = [], qi(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function Ro() {
    return !P || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function hu(i) {
    Dn(null), h.worldSelectedId = i, re.backgroundDirty = !0;
  }
  function qi() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, re.backgroundDirty = !0);
  }
  function tl(i) {
    return !!i && !r && !i.locked;
  }
  function wv() {
    if (t !== "cutout") return;
    const i = $e();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function mu() {
    if (F && Jo(E.toolButtons, "value", "add-camera", { disabled: Qi() }), t !== "cutout") return;
    const i = $e();
    Jo(E.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Me.camera : Me.plus_circle
    });
  }
  function Dr() {
    const i = fC({
      spaceView: Zi(),
      spaceMode: ec(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: R && h.mode === "frame",
      showGrid: h.showGrid
    });
    E.space && Object.assign(E.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) Jo(E.floatingButtons, "action", s, l);
  }
  function oi() {
    var l;
    const i = dC({ hasShot: !!$e(), erp: Ji(), hidden: Qi() && !Lr(), studio: F });
    h.mode === "frame" && i.disabled && (F ? Uh($e()) : h.mode = "pano"), h.outputPreviewRect = null, E.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !R), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = R && h.mode === "frame" ? $e() : null;
    E.frameRail.visible = !!s, E.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.visible = !!s && !r && s.locked !== !0, E.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, E.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), E.frameRollKnob.displayValue = Zo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", E.frameRollKnob.armed = !!s && h.altModifier === !0, E.frameRail.rollKnob = E.frameRollKnob, E.frameRail.aspectLabel = s ? di(s) : "", E.frameRail.aspectChoices = E1(s ? String(di(s)) : null, { erp: F, coverage: _.coverage }), s || (E.frameRail.aspectOpen = !1), E.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!$e(), R && E.cameraPreview && (E.cameraPreview.visible = h.mode !== "frame" && Zp(), E.cameraPreview.expanded = !!h.outputPreviewExpanded, E.cameraPreview.settled = E.cameraPreview.settled === !0 && re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame), Dr(), tm() ? mt(h.pointerPos) : Pt(h.mode === "pano" ? "grab" : "default");
  }
  function Zp() {
    return !F || Lr() && !Ji();
  }
  function Ji() {
    return F && Lr() && _.camera.projection === "erp";
  }
  function xv() {
    const s = fh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Qp() {
    return Ib({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, O.width, O.height);
  }
  function eh() {
    return !k || !xn(e, "scene") ? null : Lg(Ai("pano_scene_files"), Ai("pano_scene_meta"), ss);
  }
  function Sv() {
    return !k || !xn(e, "external-sticker") ? null : Lg(Ai("pano_sticker_files"), Ai("pano_sticker_meta"), ss);
  }
  function Zi() {
    return h.mode === "pano" && La();
  }
  function La() {
    return k && kN({ sceneLinked: P && !!ud(e).scene, files: eh(), stickers: _.stickers });
  }
  function ur() {
    return h.spaceMode === "6dof" && Zi();
  }
  function gu() {
    var i, s, l;
    return vP((l = (s = (i = Ir.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, v1));
  }
  function yu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Ra(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function kv(i) {
    var l;
    const s = oC(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        Xi({ ..._n(), position: Vo(), distance: ((l = Rr()) == null ? void 0 : l.radius) || Pr }, { mode: i, moved: !1 });
        return;
      }
      Aa(), Ra(rd({ ...yu(), position: _n().position }, i, Vo())), re.backgroundDirty = !0, Dr(), ue({ localOnly: !0 });
    }
  }
  function _n() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Rr()) == null ? void 0 : l.radius) || Pr, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return vN(h.spaceMode, s, Vo());
  }
  function Vo() {
    return Lr() ? eo().position : [0, 0, 0];
  }
  function Qi() {
    return W && _.camera !== null;
  }
  function Lr() {
    return Qi() && (!F || _.camera.visible);
  }
  function nl() {
    return _.painting_visible !== !1;
  }
  function rl(i) {
    return i.visible && pa(i.clip, h.frame);
  }
  function eo() {
    return tp(_.camera, h.frame);
  }
  function Rr() {
    var s;
    const i = Qn();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function th(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, re.backgroundDirty = !0, ue({ localOnly: !0 });
  }
  function Vr() {
    var i;
    return ((i = Rr()) == null ? void 0 : i.radius) || Pr;
  }
  function Mv() {
    var w;
    const i = Qn().space, s = Ze.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((S) => S.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: vc(s, h.frame).stickers[f],
      plane: i.stickers.find((S) => S.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: je.sceneBox(i.sticker.url) } : null
    }, m = fr() ? hh() : IN(Rr(), p);
    if (!m) return;
    const g = _n();
    h.viewDistance = g.distance, h.viewMoved = !0, Xi(Dg(g, m, O.width, O.height));
  }
  function nh(i) {
    return je.pickSurface(Wo(), i.x, i.y, O.width, O.height);
  }
  function rh(i, s) {
    var l;
    return hf(i, s, h.viewMoved ? null : (l = Rr()) == null ? void 0 : l.center, Vr());
  }
  function ih() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function Nv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: je.contentKey(), view: ih() };
    if (!Og(Gt, f)) {
      const m = nh(i);
      Gt = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = _n();
    th(Tg(p, rh(p, Gt.hit), s, Vr())), Gt.view = ih(), Gt.wheelTime = l;
  }
  function oh(i, s, l) {
    const f = _n();
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: rh(f, nh(s)) } : { kind: "space_pan", last: s, depth: Ig(f, Vr()) }, mt(s), O.setPointerCapture(l);
  }
  function bu() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${O.width}|${O.height}`;
    return Te.key !== i && (Te = { key: i, projection: Ob(Qp(), O.width, O.height) }), Te.projection;
  }
  function Va(i) {
    const s = bu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function vu(i, s) {
    return bu().ray(i, s);
  }
  function Ei() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, S = w * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function _u(i) {
    var g;
    if (i && typeof i == "object" && (Kt(i) || i.external === !0))
      return pu(() => {
        yi(e, "image-loaded");
      });
    const s = k ? $a(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Jt.get(s);
    if (l) return l;
    const f = k ? _b(i.source) : (g = _.assets) == null ? void 0 : g[s], p = KE(f);
    if (!p) return null;
    const m = new Image();
    return L1(m, p), m.onload = () => {
      R1(m, p), ue();
    }, m.onerror = () => {
      V1(m, p), ue();
    }, m.src = p, Jt.set(s, m), m;
  }
  function $a(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function ah(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Mi.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Mi.set(l, p), p;
  }
  function Pv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Oo.get(s);
    if (l) return l.ready ? l : null;
    const f = ah(i, () => {
      const M = Oo.get(s);
      M && (M.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const w = g.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, p, m), w.drawImage(f, 0, 0, p, m);
    const S = w.getImageData(0, 0, p, m).data, I = { canvas: g, width: p, height: m, alpha: S, ready: !0 };
    return Oo.set(s, I), I;
  }
  function Av(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = lr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), I = Number(f || 0) * Gr, M = Math.cos(I), A = Math.sin(I), T = g / S, Y = w / S, G = T * M + Y * A, ee = -T * A + Y * M;
    return {
      ...i,
      u: ((p + G) % 1 + 1) % 1,
      v: m + ee
    };
  }
  function Cv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = Av(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(S > 1e-6)) return null;
    const I = lr(Number(g.u || 0), Number(l.u0 || 0)) / w, M = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (I < 0 || I > 1 || M < 0 || M > 1) return 0;
    const A = Pv(i);
    if (!A) return null;
    const T = ne(Math.floor(I * A.width), 0, A.width - 1), Y = ne(Math.floor(M * A.height), 0, A.height - 1);
    return Number(A.alpha[(Y * A.width + T) * 4 + 3] || 0);
  }
  function sh(i, s, l, f = null) {
    if (!(s != null && s.visible) || !Ri(l, s.corners)) return !1;
    const p = f || Mr(l, performance.now()), m = Cv(i, p);
    return m === null ? !0 : m > 8;
  }
  function Iv() {
    var f, p, m, g, w, S, I, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, nu(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((M = (I = i == null ? void 0 : i.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function Ov() {
    var Y, G, ee;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = er(), f = `${iu()}:${l.width}:${l.height}`;
    if (((Y = h._activePaintEraserPreviewInfo) == null ? void 0 : Y.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = Nn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Cu(Z, p.targetSpace, !0);
    }
    const g = za(l.width, l.height, { readback: !0 });
    if (!kh(g, p, { w: l.width, h: l.height })) return null;
    const w = ((ee = (G = g.ctx) == null ? void 0 : G.getImageData(0, 0, l.width, l.height)) == null ? void 0 : ee.data) || null;
    if (!w) return null;
    let S = l.width, I = l.height, M = -1, A = -1;
    for (let Z = 0; Z < l.height; Z += 1)
      for (let se = 0; se < l.width; se += 1)
        w[(Z * l.width + se) * 4 + 3] <= 8 || (se < S && (S = se), Z < I && (I = Z), se > M && (M = se), Z > A && (A = Z));
    if (M < S || A < I)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const T = {
      surface: g,
      bounds: { minX: S, minY: I, maxX: M, maxY: A },
      key: `${f}:${S}:${I}:${M}:${A}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: T }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function $o() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Ev(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(g.du || 0), S = Number(m.u1 || 0) + Number(g.du || 0), I = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(ne(I, 0, 1) * l),
        maxY: Math.ceil(ne(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Sr(i.actionGroupId, "paint"), g = Pi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const w = g.centerUv.u - g.halfW, S = g.centerUv.u + g.halfW, I = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(ne(I, 0, 1) * l),
        maxY: Math.ceil(ne(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    return null;
  }
  function Fv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function Tv(i, s, l) {
    var me, We, Ue, at, ve, de, ye;
    if (!i || !s || !((me = l == null ? void 0 : l.surface) != null && me.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = Ev(s, f, p);
    if (m && !Fv(m, l.bounds, f)) return i;
    const g = String(((We = s.item) == null ? void 0 : We.id) || s.id || ""), w = ((Ue = s.item) == null ? void 0 : Ue.transform) || {}, S = `${l.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, I = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (I.has(S)) return I.get(S);
    const M = ne(Math.floor(Number(((at = l.bounds) == null ? void 0 : at.minX) || 0)), 0, Math.max(0, f - 1)), A = ne(Math.floor(Number(((ve = l.bounds) == null ? void 0 : ve.minY) || 0)), 0, Math.max(0, p - 1)), T = ne(Math.ceil(Number(((de = l.bounds) == null ? void 0 : de.maxX) || 0)), M, Math.max(0, f - 1)), Y = ne(Math.ceil(Number(((ye = l.bounds) == null ? void 0 : ye.maxY) || 0)), A, Math.max(0, p - 1)), G = Math.max(1, T - M + 1), ee = Math.max(1, Y - A + 1), Z = za(f, p, { readback: !0 });
    Z.ctx.clearRect(0, 0, f, p), Z.ctx.drawImage(i, 0, 0);
    const se = Z.ctx.getImageData(M, A, G, ee);
    Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(l.surface.canvas, 0, 0), Z.ctx.restore();
    const pe = Z.ctx.getImageData(M, A, G, ee);
    let ie = !1;
    for (let Le = 0; Le < G * ee; Le += 1) {
      const ze = se.data[Le * 4 + 3], tt = pe.data[Le * 4 + 3];
      if (ze > tt) {
        ie = !0;
        break;
      }
    }
    return ie ? (I.size > 64 && I.clear(), I.set(S, Z.canvas), Z.canvas) : (I.set(S, i), i);
  }
  function lh(i, s = null) {
    const l = gn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = ah(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = Iv(), w = (i == null ? void 0 : i.transform) || {}, S = [
      l,
      m,
      g,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      w.du,
      w.dv,
      w.rot_deg,
      w.scale,
      ja()
    ].join(":"), I = Bi.get(S);
    if (I) return I;
    Bi.size > 64 && Bi.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const A = M.getContext("2d");
    if (!A) return null;
    const T = Number(f.u0 || 0) * m, Y = Number(f.v0 || 0) * g, G = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), ee = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), Z = T + G * 0.5 + Number(w.du || 0) * m, se = Y + ee * 0.5 + Number(w.dv || 0) * g, pe = Number(w.rot_deg || 0) * Gr, ie = Math.max(0.01, Number(w.scale || 1));
    for (const me of [-m, 0, m])
      A.save(), A.translate(Z + me, se), A.rotate(pe), A.scale(ie, ie), A.drawImage(p, -G * 0.5, -ee * 0.5, G, ee), A.restore();
    return Bi.set(S, M), M;
  }
  async function wu(i, s) {
    const l = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Yt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let il = null, ol = !1;
  function Dv() {
    if (C) return !1;
    const i = E0(_.painting), { width: s, height: l } = Ga();
    return JM(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function ch() {
    const i = String(e.id ?? "0"), s = Fl.get(i);
    if (ol && s) return s;
    const l = (async () => {
      var m, g, w, S, I, M, A, T, Y, G, ee, Z;
      const f = Ha(), p = E0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, il = f, Ln());
        return;
      }
      if (il !== f && !ol) {
        ol = !0;
        try {
          ul();
          const se = nu(!1), pe = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, se)) || null, ie = ((w = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : w.canvas) || null, me = ((S = pe == null ? void 0 : pe.committedMask) == null ? void 0 : S.canvas) || null, We = Math.max(1, Number(((I = pe == null ? void 0 : pe.descriptor) == null ? void 0 : I.width) || (ie == null ? void 0 : ie.width) || (me == null ? void 0 : me.width) || 2048)), Ue = Math.max(1, Number(((M = pe == null ? void 0 : pe.descriptor) == null ? void 0 : M.height) || (ie == null ? void 0 : ie.height) || (me == null ? void 0 : me.height) || 1024));
          (!ie && p.totalPaintCount > 0 || !me && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((A = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : A.width) || 0) !== We || Number(((T = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Ue) && (h._paintLayerSyncBlankSurface = za(We, Ue)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, We, Ue));
          const at = ie || p.totalPaintCount > 0 && ((Y = h._paintLayerSyncBlankSurface) == null ? void 0 : Y.canvas) || null, ve = me || p.totalMaskCount > 0 && ((G = h._paintLayerSyncBlankSurface) == null ? void 0 : G.canvas) || null;
          if (!at && !ve) return;
          let de = null, ye = null;
          const Le = [];
          if (p.totalPaintCount > 0) {
            de = await wu(at, `pano_paint_${i}.png`);
            for (const ze of se) {
              const tt = String(ze || "").trim();
              if (!tt) continue;
              const st = ((Z = (ee = h.paintEngine) == null ? void 0 : ee.getGroupDisplayCanvas) == null ? void 0 : Z.call(ee, tt)) || null;
              if (!st) continue;
              const Ot = tt.replace(/[^a-zA-Z0-9_-]+/g, "_"), lt = await wu(st, `pano_group_${i}_${Ot}.png`);
              lt && Le.push({
                id: tt,
                actionGroupId: tt,
                image: lt
              });
            }
          }
          p.totalMaskCount > 0 && (ye = await wu(ve, `pano_mask_${i}.png`)), f === Ha() && (_.painting_layer = {
            paint: de,
            mask: ye,
            groups: Le,
            revision: f
          }, il = f, Ln());
        } catch (se) {
          throw se;
        } finally {
          ol = !1;
        }
      }
    })();
    return Fl.set(i, l), l.finally(() => {
      Fl.get(i) === l && Fl.delete(i);
    }), l;
  }
  function xu() {
    if (t === "cutout" && !C) {
      const p = Bp();
      if (p) return p;
      const m = If(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Nd(m) ? m : Cf(e, "pano_input_images", Jt, () => ue()) || m || null;
    }
    const i = Bp();
    if (i) return i;
    const s = xn(e, "background") ? Cf(e, "pano_input_images", Jt, () => ue()) : null;
    if (s && !Nd(s)) return s;
    if (Ae instanceof HTMLVideoElement && Ae.dataset.panoSrc) return Ae;
    const l = uh();
    return If(e, l, () => ue(), `background:${l.join("|")}`) || s || null;
  }
  function Lv() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function uh() {
    if (t === "cutout") return C ? Lv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Su(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Rv() {
    if (je.failed) return { status: mr, detail: "renderer" };
    if (!je.ready) return { status: Ar, detail: "boot" };
    const i = xu(), s = At.videoFailed ? mr : Md(i, Su), l = [];
    for (const f of Ca()) {
      if ((f == null ? void 0 : f.visible) === !1) continue;
      const p = _u(f);
      l.push(Md(p, Su));
    }
    return kE({
      presented: re.hasPresentedFrame,
      background: s,
      stickers: l
    });
  }
  function zo() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], Jt.delete(s));
    });
  }
  function ku(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(ne(i.y, -1, 1))
    };
  }
  function Mu(i, s = null) {
    const { lon: l, lat: f } = ku(i), p = Ei();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function al(i) {
    const s = on(i), l = Ma(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(ne(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Gr), p = Math.tan(ne(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Gr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Fi(i, s, l) {
    return JE(I0(I0(i.centerDir, O0(i.right, s)), O0(i.up, l)));
  }
  function fh(i) {
    const s = al(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Fi(s, f * s.tanX, p * s.tanY));
  }
  function dh(i, s, l) {
    const f = al(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Fi(f, p, m);
  }
  function ph(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: ne((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Vv(i) {
    var S, I, M, A;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), p = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((T) => Js(Zs(T, l, f, p), m, g));
  }
  function $v(i) {
    const s = gn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${ja()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = $e(), g = m ? pn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function zv(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = dn(i) ? "frame" : St(i) ? "sticker" : "item", f = on(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      di(f),
      Zn(i) && rl(i)
    ].join(":");
    if (h.mode === "frame") {
      const m = $e(), g = m ? pn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function jv(i) {
    var g;
    const s = ((g = h.paintEngine) == null ? void 0 : g.getMaskDisplayCanvas()) || null;
    if (!s) return i;
    const l = `mask_display:${h.paintEngine.getMaskDisplayRevision()}`, f = i.reduce((w, S) => Math.max(w, Number((S == null ? void 0 : S.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((w, S) => Math.max(w, Number((S == null ? void 0 : S.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Hv() {
    var f, p;
    const i = ru(!0), s = Ov(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${v_()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = gn((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const S = lh(g, () => ue());
        if (!S) continue;
        const I = Tv(S, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: I,
          revision: [
            Ha(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return jv(l);
  }
  function Gv() {
    return nl() ? Hv().filter((i) => i.visible !== !1).map((i) => ({ id: i.id, media: i.source, revision: i.revision, opacity: i.opacity, zIndex: i.zIndex })) : [];
  }
  function Qn() {
    return Dt || (Dt = Kv()), Dt;
  }
  function Kv() {
    const i = xu(), s = Gv(), l = { ..._.assets };
    for (const ee of k ? [] : _.stickers) {
      const Z = String((ee == null ? void 0 : ee.asset_id) || "");
      Z && !l[Z] && Jt.has(Z) && (l[Z] = { type: "comfy_image", filename: Z });
    }
    const f = k ? _.stickers.map((ee) => eu(ee) ? { ...ee, source: { kind: "file", filename: $a(ee) } } : ee) : _.stickers, p = ({ clip: ee, ...Z }) => Z, m = JSON.stringify([f.map(p), Object.keys(l), p(_.scene ?? {})]);
    Ze.key !== m && (Ze = { key: m, sceneState: Zr({ ..._, stickers: f, assets: l, painting: null }) }), k && Wv(Ze.sceneState);
    const g = Eo ? hv() : null, w = (ee) => {
      if (k && !ee.visible) return null;
      if (Eo && Kt(ee)) return g;
      const Z = _u(ee);
      return Z ? { media: Z, revision: uu(Z) } : null;
    }, S = Eb(Ze.sceneState, h.frame, _.stickers, { media: w, paintLayers: s }), I = i && (i === Ae || i === H) ? Ae.dataset.panoSrc : i, M = Su(i) ? { media: i, revision: uu(i), coverage: Yn(_.coverage), source: I } : null, A = La(), T = _N(yu(), A, Vo());
    T.mode !== h.spaceMode && Aa(), Ra(T);
    const Y = A ? Bv(Ze.sceneState, w) : null, G = Zi() ? { ...Y, ...Uv(Y) } : null;
    return { background: M, layers: S, space: G, content: Y };
  }
  function Wv(i) {
    const s = new Map(_.stickers.map((l) => [l.id, l.clip]));
    i.scene.clip = { ..._.scene.clip };
    for (const l of i.stickers) {
      const f = s.get(l.id);
      f && (l.clip = { ...f });
    }
  }
  function Bv(i, s) {
    const l = vc(i, h.frame), f = eh(), p = Pb(f, l.scene), m = p != null && p.url ? je.sceneBox(p.url) : null, g = m && ad(p.kind, m), w = Sv(), S = MN(w, i, l), I = S != null && S.url ? je.sceneBox(S.url) : null, M = I ? [{ box: ad(S.kind, I), value: S.value }] : [], A = UN(i, h.frame, _.stickers, { media: s }), T = ld(AN(l, g, A, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: NN(w, i),
      sticker: S,
      stickers: A,
      sphere: T
    };
  }
  function Uv(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Pr;
    return {
      gizmo: fr() ? Jv() : Yv(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? jN(s) : null,
      lines: Lr() ? qv(s) : []
    };
  }
  function Yv(i) {
    const s = Ro(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !tl(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: id(l) };
  }
  function Nu(i) {
    return i * 0.2;
  }
  function hh() {
    return { center: eo().position, radius: Nu(Vr()) };
  }
  function Xv(i, s) {
    const { yaw_deg: l, pitch_deg: f } = Ab(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function fr() {
    return Lr() && h.selectedId === Wl;
  }
  function qv(i) {
    const s = GN(KN(_, fl())), l = s.length ? [{ segments: s, color: TE }] : [];
    if (!ur()) return l;
    const f = fr() ? N0 : FE;
    return [...l, { segments: $g(eo(), Nu(i)), color: f }];
  }
  function Jv() {
    return !ur() || !fr() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: id({ ...eo(), scale: 1 }) };
  }
  function Zv(i, s) {
    var p;
    const l = (p = Qn().space) == null ? void 0 : p.gizmo;
    if (fr() && l && no("hover", s) !== null && no("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: eo(), changed: !1 }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = $g(eo(), Nu(Vr()));
    return HN(Wo(), f, s, O.width, O.height) ? (fr() || (Dn($e()), Re(), Ke(), ue()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Qv() {
    if (!re.backgroundDirty && re.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = Qn(), f = oe.width, p = oe.height, m = je.render({
      width: f,
      height: p,
      camera: l ? mf(_n(), f, p, l.sphere) : Qp(),
      background: i,
      layers: s,
      space: l
    }), g = oe.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), re.backgroundWasVisible = !!m, re.backgroundDirty = !1, Jn = null, Dr(), (h.worldSelectedId || fr() || _e) && Ke();
  }
  function mh(i) {
    const { content: s } = Qn();
    return !s || !i.position ? Ms(i) : Mb(Ms(i), i.position, Xh(), s.sphere);
  }
  function gh(i, s, l, f) {
    const { background: p, layers: m, content: g } = Qn();
    if (!p && !m.length && !g) return !1;
    const w = g && l.position ? g : null, S = je.render({ width: s.w, height: s.h, camera: mh(l), background: p, layers: m, space: w, owner: f });
    return S ? (i.drawImage(S.canvas, S.x, S.y, S.width, S.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function e_(i) {
    const s = Qn(), l = JSON.stringify([i, oe.width, oe.height, Gg(s)]);
    if (l === Jn) return;
    const f = je.renderUnwrap({ width: i.w, height: i.h, ...s }), p = oe.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, oe.width, oe.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), Jn = f ? l : null, re.backgroundWasVisible = !1;
  }
  function t_(i = !1) {
    const s = O.width, l = O.height, f = Ei();
    if (D.globalAlpha = 1, D.lineWidth = 1, i || D.clearRect(0, 0, s, l), ul(), e_(f), h.showGrid && !h.fullscreen) {
      D.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        D.beginPath(), D.moveTo(g, f.y), D.lineTo(g, f.y + f.h), D.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        D.beginPath(), D.moveTo(f.x, g), D.lineTo(f.x + f.w, g), D.stroke();
      }
      D.strokeStyle = "rgba(250, 250, 250, 0.86)", D.lineWidth = 1.2, D.beginPath(), D.moveTo(f.x, f.y + f.h / 2), D.lineTo(f.x + f.w, f.y + f.h / 2), D.stroke(), D.fillStyle = "rgba(250, 250, 250, 0.42)", D.font = "500 11px Geist, sans-serif", D.textAlign = "center";
      const p = f.y + f.h * 0.57;
      D.fillText("Left", f.x + f.w * 0.25, p), D.fillText("Front", f.x + f.w * 0.5, p), D.fillText("Right", f.x + f.w * 0.75, p), D.fillText("Back", f.x + 38, p), D.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function yh(i, s, l = 1) {
    let f = !1;
    D.strokeStyle = s, D.lineWidth = l, D.beginPath();
    for (const p of i) {
      const m = Va(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? D.lineTo(m.x, m.y) : (D.moveTo(m.x, m.y), f = !0);
    }
    D.stroke();
  }
  function n_(i = !1) {
    const s = O.width, l = O.height;
    if (i || D.clearRect(0, 0, s, l), ul(), Qv(), h.showGrid && !h.fullscreen && Qn().space)
      r_();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Xn(p, g));
        yh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Xn(g, p));
        yh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Xn(-90, 0) },
        { name: "Front", dir: Xn(0, 0) },
        { name: "Right", dir: Xn(90, 0) },
        { name: "Back", dir: Xn(180, 0) }
      ];
      D.fillStyle = "rgba(250, 250, 250, 0.42)", D.font = "500 11px Geist, sans-serif", D.textAlign = "center", f.forEach((p) => {
        const m = Va(p.dir);
        m && D.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function r_() {
    const i = mf(_n(), O.width, O.height, Rr()), s = $s(i, [0, 0, 0], O.width, O.height);
    s && (D.fillStyle = "rgba(255, 221, 87, 0.9)", D.font = "500 11px Geist, sans-serif", D.textAlign = "center", D.fillText("ERP origin", s.x, s.y - 12));
  }
  function i_(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || $e();
      if (!p) return [];
      const m = l || pn(p);
      return L_(i, p, m);
    }
    return Mh(i, f);
  }
  function sl(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = Mh([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = jo(i);
    return m ? ai(m, s, l, f) : null;
  }
  function o_(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = Sr(l, i.layerKind), p = Pi(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || au(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], S = h.mode === "frame" ? $e() : null, I = S ? pn(S) : null;
    for (const ie of f) {
      const me = (ie == null ? void 0 : ie.geometry) || null, We = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], Ue = i_(We, S, I, g).filter((de) => Number.isFinite(de == null ? void 0 : de.x) && Number.isFinite(de == null ? void 0 : de.y));
      if (!Ue.length) continue;
      const at = Li(String((ie == null ? void 0 : ie.toolKind) || "pen")), ve = Kn[at] || Kn[ci];
      w.push({
        points: Ue,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((ve == null ? void 0 : ve.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || i.layerKind || "paint")
      });
    }
    const M = sl(m, null, S, I, g);
    if (!M) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const T = U1(p).map((ie) => sl(ie, M.x, S, I, g)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (T.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const Y = (ie, me) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: ie,
      b: me
    }), G = Y(T[0], T[1]), ee = Y(T[1], T[2]), Z = Y(T[2], T[3]), se = Y(T[3], T[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...G },
        { edge: "right", ...ee },
        { edge: "bottom", ...Z },
        { edge: "left", ...se }
      ],
      rotateStemBase: { x: G.x, y: G.y },
      rotateHandle: { x: G.x, y: G.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, pe), pe;
  }
  function a_(i, s) {
    const l = h.mode === "frame" ? $e() : null, f = l ? pn(l) : null, p = ph(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = sl(p, null, l, f, m), S = Vv(i).map((T) => sl(T, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(S) || S.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, T), T;
    }
    const I = S.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: I.reduce((T, Y) => T + Number(Y.x || 0), 0) / I.length,
        y: I.reduce((T, Y) => T + Number(Y.y || 0), 0) / I.length
      },
      corners: I,
      visible: !0
    };
    return h._strokeGeomCache.set(s, A), A;
  }
  function ai(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = l || $e(), A = f || pn(M);
      if (!M || !A) return null;
      const T = M ? Ka(M, i) : null;
      return T ? {
        x: Number(A.x || 0) + Number(T.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(T.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Mu(i, s);
    const m = 1e-4, g = bu().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const w = O.width, S = O.height, I = Math.max(w, S) * 2;
    return {
      x: ne(g.x, -I, w + I),
      y: ne(g.y, -I, S + I),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function s_(i, s = []) {
    if (h.mode !== "pano" || St(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? UE(0.035, 0.2, Math.min(...l)) : 1;
  }
  function l_(i) {
    if (Zn(i) && !rl(i)) return { visible: !1 };
    const s = on(i), l = Xn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? $e() : null, p = f ? pn(f) : null, m = h.mode === "pano" && (St(i) || dn(i)), g = m ? { clipBehind: !0 } : null, w = ai(l, null, f, p, g);
    if (!w) return { visible: !1 };
    const S = al(i), M = fh(i).map((ye) => ai(ye, w.x, f, p, g)).filter((ye) => Number.isFinite(ye == null ? void 0 : ye.x) && Number.isFinite(ye == null ? void 0 : ye.y));
    if (M.length < 4) return { visible: !1 };
    const A = Fi(S, 0, S.tanY), T = Fi(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), Y = ai(A, w.x, f, p, g);
    if (!Y) return { visible: !1 };
    const G = ai(T, (Y == null ? void 0 : Y.x) ?? w.x, f, p, g), ee = ((G == null ? void 0 : G.x) ?? Y.x) - Y.x, Z = ((G == null ? void 0 : G.y) ?? Y.y) - Y.y, se = Math.hypot(ee, Z) || 1, pe = {
      x: Y.x + ee / se * 30,
      y: Y.y + Z / se * 30
    }, ie = ai(Fi(S, 0, S.tanY), w.x, f, p, g), me = ai(Fi(S, S.tanX, 0), w.x, f, p, g), We = ai(Fi(S, 0, -S.tanY), w.x, f, p, g), Ue = ai(Fi(S, -S.tanX, 0), w.x, f, p, g);
    if (!ie || !me || !We || !Ue) return { visible: !1 };
    const at = [
      w,
      ...M,
      Y,
      G,
      ie,
      me,
      We,
      Ue
    ];
    if (m && !at.some((ye) => Number((ye == null ? void 0 : ye.rawZ) ?? (ye == null ? void 0 : ye.z)) > 1e-4)) return { visible: !1 };
    const ve = s_(i, at), de = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: me.x,
        y: me.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: We.x,
        y: We.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Ue.x,
        y: Ue.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((ye) => ({ x: ye.x, y: ye.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ve,
      visible: !0
    };
  }
  function Qt(i) {
    if (W && dn(i) && ur()) return { visible: !1 };
    if (!nl() && (an(i) || bn(i))) return { visible: !1 };
    if (an(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = Q1(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), o_(i, m));
    }
    if (bn(i)) {
      const p = $v(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), a_(i, p));
    }
    const s = zv(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = l_(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function ll(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let w = 0, S = 0;
      s === 0 ? (w = g, S = 0) : s === 1 ? (w = 1, S = g) : s === 2 ? (w = 1 - g, S = 1) : (w = 0, S = 1 - g);
      const I = dh(i, w, S), M = h.mode === "unwrap" ? Mu(I, f) : Va(I);
      M && p.push(M);
    }
    return p;
  }
  function c_(i, s) {
    const l = on(i), f = Xn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? Mu(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      ll(i, 0, g, m),
      ll(i, 1, g, m),
      ll(i, 2, g, m),
      ll(i, 3, g, m)
    ];
    kp(D, w, { selected: s });
  }
  function u_() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...qs()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Pu() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...qs()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function cl(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function bh(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = ne(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = D.globalAlpha;
    D.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    cl(D, f), D.fillStyle = w, D.fill(), D.strokeStyle = g, D.lineWidth = S, D.stroke(), D.save(), D.strokeStyle = g, D.lineWidth = s ? 3.2 : 2.6, D.lineCap = "round";
    const I = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, A = s ? 12 : 9;
    I.forEach((T) => {
      const G = I.find((pe) => (pe == null ? void 0 : pe.edge) === M[T == null ? void 0 : T.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, ee = G.x - T.x, Z = G.y - T.y, se = Math.hypot(ee, Z) || 1;
      D.beginPath(), D.moveTo(T.x, T.y), D.lineTo(T.x + ee / se * A, T.y + Z / se * A), D.stroke();
    }), D.restore(), D.globalAlpha = m;
  }
  function f_(i, s, l, f) {
    const p = ne(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (dn(i)) {
      bh(s, l, f);
      return;
    }
    if (St(i)) {
      const g = D.globalAlpha;
      D.globalAlpha = g * iv(i) * p, h.mode === "frame" ? (D.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", D.lineWidth = l ? 2 : 1, cl(D, s.corners), D.stroke()) : c_(i, l), D.globalAlpha = g;
      return;
    }
    const m = D.globalAlpha;
    D.globalAlpha = m * p, D.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", cl(D, s.corners), D.fill(), D.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", D.lineWidth = l ? 2.8 : 1.9, cl(D, s.corners), D.stroke(), D.globalAlpha = m;
  }
  function vh(i, s, l) {
    if (St(i)) {
      y1(D, s, { accent: l });
      return;
    }
    const f = !(dn(i) && Ji());
    D.fillStyle = l, f && s.corners.forEach((p) => {
      D.beginPath(), D.arc(p.x, p.y, 6.5, 0, Math.PI * 2), D.fill();
    }), f && dn(i) && (D.strokeStyle = l, D.lineCap = "round", D.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var A, T, Y, G;
      const m = (((A = p.b) == null ? void 0 : A.x) ?? p.x) - (((T = p.a) == null ? void 0 : T.x) ?? p.x), g = (((Y = p.b) == null ? void 0 : Y.y) ?? p.y) - (((G = p.a) == null ? void 0 : G.y) ?? p.y), w = Math.hypot(m, g) || 1, S = m / w, I = g / w, M = 10;
      D.beginPath(), D.moveTo(p.x - S * M, p.y - I * M), D.lineTo(p.x + S * M, p.y + I * M), D.stroke();
    }), D.lineCap = "butt"), an(i) || (D.strokeStyle = "rgba(250, 250, 250, 0.9)", D.lineWidth = 1.8, D.beginPath(), D.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), D.lineTo(s.rotateHandle.x, s.rotateHandle.y), D.stroke(), D.fillStyle = l, D.beginPath(), D.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), D.fill());
  }
  function d_() {
    var m;
    const i = h.mode === "frame" ? [] : cr(), s = i.length > 1, l = R ? u_() : ii(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${dn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && zp(g);
      if (h.mode === "frame" && !w) continue;
      const S = St(g), I = dn(g), M = vn(g);
      if (!S && !I || Zn(g) && !rl(g)) continue;
      const A = Qt(g);
      if (t !== "stickers" && !A.visible)
        continue;
      const T = ne(Number((A == null ? void 0 : A.visibilityAlpha) ?? 1), 0, 1);
      if (T <= 0.01) continue;
      const Y = I && R && h.mode === "pano" ? ne(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (D.save(), D.globalAlpha *= Y, f_(g, A, w, M), w && A.visible) {
        const G = M ? "#ff4d4f" : S && Kt(g) ? "#f59e0b" : "#0070f3", ee = D.globalAlpha;
        D.globalAlpha = ee * T, vh(g, A, G), D.globalAlpha = ee;
      }
      D.restore();
    }
    if (R && h.mode === "pano" && !$e() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = ne(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      D.save(), D.globalAlpha *= w, bh(g.geom, g.selected, g.locked), g.selected && vh(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), D.restore();
    }
    if (s) {
      const g = Fa(i);
      if (g != null && g.visible) {
        const w = su(i) ? "#ff4d4f" : "#0070f3";
        D.save(), D.strokeStyle = "rgba(255, 255, 255, 0.95)", D.lineWidth = 2, D.setLineDash([6, 4]), D.beginPath(), D.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) D.lineTo(g.corners[S].x, g.corners[S].y);
        D.closePath(), D.stroke(), D.setLineDash([]), D.fillStyle = w, g.corners.forEach((S) => {
          D.beginPath(), D.arc(S.x, S.y, 6.5, 0, Math.PI * 2), D.fill();
        }), D.restore();
      }
    } else
      i.forEach((g) => {
        if (!an(g) && !bn(g)) return;
        const w = Qt(g);
        if (!(w != null && w.visible)) return;
        const S = vn(g) ? "#ff4d4f" : "#0070f3";
        D.save(), D.strokeStyle = "rgba(255, 255, 255, 0.95)", D.lineWidth = 2, D.setLineDash([6, 4]), D.beginPath(), D.moveTo(w.corners[0].x, w.corners[0].y);
        for (let I = 1; I < w.corners.length; I += 1) D.lineTo(w.corners[I].x, w.corners[I].y);
        D.closePath(), D.stroke(), D.setLineDash([]), D.fillStyle = S, w.corners.forEach((I) => {
          D.beginPath(), D.arc(I.x, I.y, 6.5, 0, Math.PI * 2), D.fill();
        }), D.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = am(h.interaction.start, h.interaction.current);
      D.save(), D.strokeStyle = "rgba(255, 255, 255, 0.9)", D.fillStyle = "rgba(255, 255, 255, 0.08)", D.lineWidth = 1, D.setLineDash([5, 4]), D.beginPath(), D.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), D.fill(), D.stroke(), D.restore();
    }
  }
  function _h(i, s = !1) {
    const l = ne(So(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function p_(i) {
    if (!Ce || !i) return !1;
    const s = Ce.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ce.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ce.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function h_() {
    if (h.outputPreviewRect = null, E.outputPreviewToggle.visible = h.mode !== "frame" && !!$e(), F && (E.outputPreviewToggle.visible = !1), !R || !E.cameraPreview) return;
    if (h.mode === "frame" || !Zp()) {
      E.cameraPreview.visible = !1, E.cameraPreview.settled = !1;
      return;
    }
    const i = $e();
    E.cameraPreview.visible = !0, E.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = ke == null ? void 0 : ke.getContext("2d");
    if (!i || !s) {
      E.cameraPreview.ready = !1, E.cameraPreview.settled = !1, E.cameraPreview.width = 220, E.cameraPreview.height = 132, E.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, ke.width, ke.height), rn = null;
      return;
    }
    const l = _h(i, !!h.outputPreviewExpanded);
    E.cameraPreview.width = l.width, E.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (ke.width !== p.w || ke.height !== p.h) && (ke.width = p.w, ke.height = p.h);
    const { content: m } = Qn(), g = m && [i.position, je.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], w = JSON.stringify([p, Si(i), Gg(Qn()), g]);
    let S = w === rn;
    if (S || (s.clearRect(0, 0, p.w, p.h), S = gh(s, p, i, "camera_preview"), rn = S ? w : null), !S) {
      E.cameraPreview.ready = !1, E.cameraPreview.label = xu() ? "Loading preview" : "Connect ERP image", E.cameraPreview.settled = !1;
      return;
    }
    const I = p_(l);
    E.cameraPreview.ready = !0, E.cameraPreview.label = I ? "" : "Loading preview", E.cameraPreview.settled = I && re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame;
  }
  function Au(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return dh(i, l, f);
  }
  function jo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return Zc(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function m_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function g_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Mn(i, "widthScale", 1),
      pressureLike: Mn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function y_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Cu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let ee = null;
      i.forEach((Z) => {
        const se = Number((Z == null ? void 0 : Z.u) || 0), pe = Number((Z == null ? void 0 : Z.v) || 0), ie = (se % 1 + 1) % 1, me = ee == null ? ie : ee + lr(ie, (ee % 1 + 1) % 1);
        p.set(Z, { x: me, y: pe }), ee = me;
      });
    }
    const m = (ee) => !ee || typeof ee != "object" ? { x: 0, y: 0 } : p.get(ee) || m_(ee), g = (ee, Z, se, pe = {}) => {
      const ie = f ? (Number(Z) % 1 + 1) % 1 : Number(Z), me = g_(ee, ie, se, pe);
      return p.set(me, { x: Number(Z), y: Number(se) }), me;
    }, w = (ee, Z, se) => {
      const pe = m(ee), ie = m(Z);
      return g(ee, pr(pe.x, ie.x, se), pr(pe.y, ie.y, se), {
        t: pr(Number((ee == null ? void 0 : ee.t) || 0), Number((Z == null ? void 0 : Z.t) || 0), se),
        widthScale: pr(Mn(ee, "widthScale", 1), Mn(Z, "widthScale", 1), se),
        pressureLike: pr(Mn(ee, "pressureLike", 1), Mn(Z, "pressureLike", 1), se)
      });
    };
    if (i.length === 1) {
      const ee = m(i[0]);
      return [g(i[0], ee.x, ee.y)];
    }
    const S = y_(s, l), I = (ee, Z) => {
      const se = [0];
      for (let de = 1; de < ee.length; de += 1) {
        const ye = m(ee[de - 1]), Le = m(ee[de]);
        se.push(se[de - 1] + Math.hypot(Le.x - ye.x, Le.y - ye.y));
      }
      const pe = se[se.length - 1] || 0;
      if (pe <= 1e-8) {
        const de = ee[0], ye = m(de);
        return [g(de, ye.x, ye.y)];
      }
      const ie = [];
      let me = 0;
      for (let de = 0; de <= pe + 1e-9; de += Z) {
        for (; me < se.length - 2 && se[me + 1] < de; ) me += 1;
        const ye = se[me], Le = se[me + 1], ze = Math.max(1e-8, Le - ye);
        ie.push(w(ee[me], ee[me + 1], ne((de - ye) / ze, 0, 1)));
      }
      const We = ee[ee.length - 1], Ue = m(We), at = ie[ie.length - 1], ve = at ? m(at) : null;
      return (!ve || Math.hypot(ve.x - Ue.x, ve.y - Ue.y) > Z * 0.35) && ie.push(g(We, Ue.x, Ue.y)), ie;
    }, M = (ee) => {
      if (!Array.isArray(ee) || ee.length < 3) return ee ? ee.slice() : [];
      const Z = m(ee[0]), se = [g(ee[0], Z.x, Z.y)];
      for (let me = 0; me < ee.length - 1; me += 1) {
        const We = ee[me], Ue = ee[me + 1], at = m(We), ve = m(Ue), de = g(
          We,
          at.x * 0.75 + ve.x * 0.25,
          at.y * 0.75 + ve.y * 0.25,
          {
            t: Number(We.t || 0) * 0.75 + Number(Ue.t || 0) * 0.25,
            widthScale: Mn(We, "widthScale", 1) * 0.75 + Mn(Ue, "widthScale", 1) * 0.25,
            pressureLike: Mn(We, "pressureLike", 1) * 0.75 + Mn(Ue, "pressureLike", 1) * 0.25
          }
        ), ye = g(
          We,
          at.x * 0.25 + ve.x * 0.75,
          at.y * 0.25 + ve.y * 0.75,
          {
            t: Number(We.t || 0) * 0.25 + Number(Ue.t || 0) * 0.75,
            widthScale: Mn(We, "widthScale", 1) * 0.25 + Mn(Ue, "widthScale", 1) * 0.75,
            pressureLike: Mn(We, "pressureLike", 1) * 0.25 + Mn(Ue, "pressureLike", 1) * 0.75
          }
        );
        se.push(de, ye);
      }
      const pe = ee[ee.length - 1], ie = m(pe);
      return se.push(g(pe, ie.x, ie.y)), se;
    }, A = I(i, S);
    if (A.length < 3) return A;
    const T = l ? 2 : 1;
    let Y = A.slice();
    for (let ee = 0; ee < T; ee += 1) Y = M(Y);
    return I(Y, Math.max(S * 0.75, 55e-5));
  }
  function Mn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function b_(i) {
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
  function za(i, s, l = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function ja() {
    const i = Ga();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ha() {
    const i = Ga();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function v_() {
    const i = iu(), s = Ha();
    return i ? `${s}:${i}` : s;
  }
  function __() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function w_() {
    h.paintCompositeRevision += 1;
  }
  function x_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function wh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = ja();
  }
  function xh() {
    _.painting_layer !== null && (_.painting_layer = null), il = "";
  }
  function Lt() {
    x_(), re.backgroundDirty = !0, re.dirty = !0;
  }
  function kr({ rebuildPaintEngine: i = !1 } = {}) {
    xh(), __(), Lt(), i && wh();
  }
  function Ho() {
    xh(), w_(), Lt();
  }
  function ul() {
    var f;
    const i = Ga(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = Uf(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = ja();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(_));
  }
  function Ga() {
    const i = Math.max(1, N(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function er() {
    return Ga();
  }
  function S_(i, s, l, f, p = null) {
    const m = b_(i), g = Mn(s, "widthScale", 1) * Mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Gr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function k_(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, S = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${S})`;
  }
  function M_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function N_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), k_(i, l, p);
    const g = (w) => M_(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const S = s[w], I = s[w + 1];
      if (!S || !I) continue;
      const M = Number(S.x || 0), A = Number(S.y || 0), T = Number(I.x || 0), Y = Number(I.y || 0), G = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), ee = Math.max(0.5, Math.min(m, Number(I.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(A) || !Number.isFinite(T) || !Number.isFinite(Y) || !Number.isFinite(G) || !Number.isFinite(ee)) continue;
      const Z = T - M, se = Y - A, pe = Math.hypot(Z, se);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        g(S);
        continue;
      }
      if (pe > Math.max(f.w, f.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(G, ee)), me = Math.max(0.35, Math.min(ie * 0.4, 2.25)), We = Math.max(1, Math.ceil(pe / me));
      for (let Ue = 0; Ue <= We; Ue += 1) {
        const at = Ue / We;
        g({
          x: pr(M, T, at),
          y: pr(A, Y, at),
          radiusPx: pr(G, ee, at)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function P_(i, s, l, f) {
    N_(i, s, l, f, { preview: !1 });
  }
  function A_(i, s, l, f, p) {
    var w, S, I, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const A = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(A.r || 0) * 255)}, ${Math.round(Number(A.g || 0) * 255)}, ${Math.round(Number(A.b || 0) * 255)}, ${Number(A.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((S = s[0]) == null ? void 0 : S[g]) || 0) * f.h);
    for (let A = 1; A < s.length; A += 1)
      i.lineTo(Number(((I = s[A]) == null ? void 0 : I[m]) || 0) * f.w, Number(((M = s[A]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Sh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function C_(i, s) {
    const l = Sh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: S_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function kh(i, s, l = null) {
    var w, S, I, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return A_(i.ctx, Sh(p), p, f), !0;
    const g = C_(p, f);
    return g.length ? (P_(i.ctx, g, p, f), !0) : !1;
  }
  function I_(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let I = 0; I < s; I += 1) {
        const M = S * s + I;
        if (p[M] || i[M] <= f) continue;
        let A = 0, T = 0;
        g[T] = I, w[T] = S, T += 1, p[M] = 1;
        const Y = [];
        let G = I, ee = S, Z = I, se = S;
        for (; A < T; ) {
          const pe = g[A], ie = w[A];
          A += 1, Y.push({ x: pe, y: ie }), pe < G && (G = pe), ie < ee && (ee = ie), pe > Z && (Z = pe), ie > se && (se = ie);
          const me = [
            [(pe - 1 + s) % s, ie],
            [(pe + 1) % s, ie],
            [pe, ie - 1],
            [pe, ie + 1]
          ];
          for (const [We, Ue] of me) {
            if (Ue < 0 || Ue >= l) continue;
            const at = Ue * s + We;
            p[at] || i[at] <= f || (p[at] = 1, g[T] = We, w[T] = Ue, T += 1);
          }
        }
        m.push({ pixels: Y, minX: G, minY: ee, maxX: Z, maxY: se });
      }
    return m;
  }
  function O_(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, I) => S - I);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let S = 0; S < l.length; S += 1) {
      const I = l[S], A = (S === l.length - 1 ? l[0] + s : l[S + 1]) - I - 1;
      A > f && (f = A, p = S);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let g = 1 / 0, w = -1 / 0;
    for (const S of l) {
      const I = (S - m + s) % s;
      g = Math.min(g, I), w = Math.max(w, I);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - g + 1)
    };
  }
  function E_(i, s, l = {}) {
    var I;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (I = i == null ? void 0 : i.getContext) == null ? void 0 : I.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return I_(w, f, p, 8).map((M, A) => {
      const T = O_(M, f);
      if (!T) return null;
      const Y = Number(T.widthPx || 0), G = M.maxY - M.minY + 1, ee = Number(T.startX || 0), Z = document.createElement("canvas");
      Z.width = Y, Z.height = G;
      const se = Z.getContext("2d");
      if (!se) return null;
      const pe = se.createImageData(Y, G);
      return M.pixels.forEach(({ x: ie, y: me }) => {
        const We = (me * f + ie) * 4, Ue = (Number(ie || 0) - ee + f) % f, at = ((me - M.minY) * Y + Ue) * 4;
        pe.data[at + 0] = g.data[We + 0], pe.data[at + 1] = g.data[We + 1], pe.data[at + 2] = g.data[We + 2], pe.data[at + 3] = g.data[We + 3];
      }), se.putImageData(pe, 0, 0), {
        id: Qo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + A * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: Y / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: Z.toDataURL("image/png"),
        transform: {
          du: ee / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ka(i, s) {
    if (!i || !s) return null;
    const l = al(i), f = Ef(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Ef(s, l.right) / f, m = Ef(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function F_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Ei();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Va(jo(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Mh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Ei();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + lr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => Va(jo(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function T_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function D_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = jo(p), g = Ka(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return T_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function L_(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = jo(p), g = Ka(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function R_() {
    const i = $e(), s = ml(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = jg(i, s, { width: O.width, height: O.height }), m = V_(l);
    return D.save(), D.fillStyle = "#0a0a0a", D.fillRect(0, 0, O.width, O.height), gh(D, f, p) || (D.fillStyle = "rgba(255, 255, 255, 0.03)", D.fillRect(f.x, f.y, f.w, f.h)), D.restore(), D.save(), D.fillStyle = "rgba(0, 0, 0, 0.58)", D.beginPath(), D.rect(0, 0, O.width, O.height), D.roundRect(l.x, l.y, l.w, l.h, m), D.fill("evenodd"), D.restore(), D.save(), D.strokeStyle = N0, D.globalAlpha = 0.62, D.lineWidth = 2, D.beginPath(), D.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), D.stroke(), D.restore(), !0;
  }
  function V_(i) {
    const s = Math.max(1e-6, Number(re.frameCanvasScale || 1));
    return Math.min(Pa * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function si() {
    var s;
    const i = h.mode === "frame" ? $e() : null;
    E.frameRollKnob.visible = !!i && !r && i.locked !== !0, E.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), E.frameRollKnob.displayValue = Zo(E.frameRollKnob.rollDeg), E.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", E.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function $_() {
    var S, I;
    if (((S = h.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (I = i == null ? void 0 : i.geometry) == null ? void 0 : I.points;
    let l;
    if (h.mode === "frame") {
      const M = $e(), A = pn(M);
      l = D_(s, M, A);
    } else
      l = F_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    D.save(), D.beginPath(), D.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) D.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    D.closePath(), f ? (D.lineWidth = 2, D.setLineDash([6, 6]), D.lineDashOffset = 0, D.strokeStyle = "rgba(0,0,0,0.96)", D.stroke(), D.lineDashOffset = -6, D.strokeStyle = "rgba(255,255,255,0.96)", D.stroke(), D.setLineDash([]), D.lineDashOffset = 0) : (D.lineWidth = 1.5, D.setLineDash([6, 4]), D.strokeStyle = `rgba(${m},${g},${w},1)`, D.stroke(), D.setLineDash([])), D.restore();
  }
  function z_() {
    const i = h.frameRollOverlayVisual, s = ne(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = pn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Gr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    D.save(), D.globalAlpha *= s, D.beginPath(), D.rect(l.x, l.y, l.w, l.h), D.clip(), D.translate(f.x, f.y), D.rotate(p);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    D.beginPath();
    for (let I = -m; I <= m; I += S)
      D.moveTo(I, -m), D.lineTo(I, m);
    for (let I = -m; I <= m; I += S)
      D.moveTo(-m, I), D.lineTo(m, I);
    D.lineWidth = 1, D.strokeStyle = "rgba(255, 255, 255, 0.22)", D.stroke(), D.setTransform(1, 0, 0, 1, 0, 0), D.beginPath(), D.moveTo(f.x - g, f.y - w), D.lineTo(f.x + g, f.y + w), D.lineWidth = 1.5, D.setLineDash([8, 6]), D.strokeStyle = "rgba(255, 255, 255, 0.92)", D.shadowColor = "rgba(0, 0, 0, 0.8)", D.shadowBlur = 3, D.stroke(), D.setLineDash([]), D.restore();
  }
  function j_() {
    return !R || !$e() || W && ur() || F && !fr() ? 0 : RE;
  }
  function H_() {
    const i = ne(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !R || h.mode !== "pano") return;
    const s = $e(), l = s ? Qt(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: zp(s),
      locked: vn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (D.save(), D.fillStyle = `rgba(0, 0, 0, ${i})`, D.beginPath(), D.rect(0, 0, O.width, O.height), m.length >= 4) {
      D.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) D.lineTo(m[g].x, m[g].y);
      D.closePath();
    }
    D.fill("evenodd"), D.restore();
  }
  function Nh() {
    Dt = null, h.mode === "frame" ? (re.frameSafeRect = kw(), R_()) : h.mode === "unwrap" ? t_(!1) : n_(!1), H_(), R && h_(), d_(), si(), $_(), z_(), E.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), re.hasPresentedFrame || (re.hasPresentedFrame = !0, oe.style.opacity = "1"), R && E.cameraPreview && (E.cameraPreview.settled = re.pendingStableLayoutFrames <= 0 && re.hasPresentedFrame && h.mode !== "frame");
    const i = Rv();
    E.stageStatus = i.status, E.stageStatusDetail = i.detail, i.status === Ar ? (Q == null || Q.removeAttribute("data-stage-ready"), Q == null || Q.setAttribute("data-stage-loading-kind", i.detail)) : (Q == null || Q.setAttribute("data-stage-ready", ""), Q == null || Q.removeAttribute("data-stage-loading-kind"));
  }
  function G_(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ph() {
    return !!h.interaction || !!Ge.drag;
  }
  function Ah() {
    re.nodePreviewPending = !1, e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Z1();
  }
  function ue(i = {}) {
    var w, S, I, M, A, T, Y, G, ee;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || G_() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (re.backgroundDirty = !0), s && Lp() && (h.livePaintInteractionRevision += 1, re.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (mu(), oi()), Ph() ? re.nodePreviewPending = !0 : Ah(), l && ((I = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || I.call(S), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((T = (A = e.graph) == null ? void 0 : A.setDirtyCanvas) == null || T.call(A, !0, !0), (ee = (G = (Y = Ir) == null ? void 0 : Y.canvas) == null ? void 0 : G.setDirty) == null || ee.call(G, !0, !0)), re.dirty = !0;
  }
  function Ch() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || oe.width !== s || oe.height !== l ? (O.width = s, O.height = l, oe.width = s, oe.height = l, re.backgroundDirty = !0, re.dirty = !0, R && (re.pendingStableLayoutFrames = Math.max(Number(re.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function K_(i = performance.now()) {
    var m;
    re.nodePreviewPending && !Ph() && Ah(), tr(), re.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = ne(
        (i - Number(h.frameRollOverlayStartTs || i)) / VE,
        0,
        1
      );
      h.frameRollOverlayAlpha = pr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        Of(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), re.dirty = !0;
    }
    const f = j_();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = ne(
        (i - Number(h.cutoutPanoDimStartTs || i)) / A0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = pr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        Of(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), re.dirty = !0;
    }
    const p = R && $e() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = ne(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / A0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = pr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        Of(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), re.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), w = ne((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), I = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? BE(w) : qE(w);
      h.outputPreviewAnim = pr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, I), re.dirty = !0, w >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: w } = iC(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, w) {
        const { end: S } = h.viewTransition;
        h.viewTransition = null, S && Fp(S), Dr();
      }
      re.backgroundDirty = !0, re.dirty = !0;
    }
    if (h.viewInertia.vx = Number(sn.state.inertia.vx || 0), h.viewInertia.vy = Number(sn.state.inertia.vy || 0), h.viewInertia.active = !!sn.state.inertia.active, sn.stepInertia(i) && (h.viewInertia.vx = Number(sn.state.inertia.vx || 0), h.viewInertia.vy = Number(sn.state.inertia.vy || 0), h.viewInertia.active = !!sn.state.inertia.active, re.backgroundDirty = !0, re.dirty = !0), re.pendingStableLayoutFrames > 0 && (re.pendingStableLayoutFrames -= 1, re.dirty = !0), re.dirty) {
      if (re.pendingStableLayoutFrames > 0)
        return;
      re.dirty = !1, Nh();
    }
  }
  function Ih(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      re.tickErrorSignature !== l && (re.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), E.stageStatus = mr, E.stageStatusDetail = "frame", Q == null || Q.setAttribute("data-stage-ready", ""), Q == null || Q.removeAttribute("data-stage-loading-kind");
    }
  }
  function Oh(i = performance.now()) {
    re.running && (Ih(() => K_(i)), re.running && (re.rafId = requestAnimationFrame(Oh)));
  }
  function W_() {
    !re.running || !Ch() || Ih(() => {
      re.dirty = !1, Nh();
    });
  }
  const Eh = new ResizeObserver(W_);
  Eh.observe(O);
  function B_() {
    re.running = !1, re.rafId && cancelAnimationFrame(re.rafId), re.rafId = 0, Eh.disconnect();
  }
  function qe() {
    r || (tr(), Ag(_), !(k && _.stickers.some(eu)) && (h.historyController.commitActionGroup(JSON.stringify(Mg(_))), Vu()));
  }
  function Iu(i) {
    var p, m;
    if (r) return;
    wn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Vu(), !s) return;
    const l = qM(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, l.state), tr(!1), k && _.timeline.fps !== f && Zt.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, F && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = $e()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && qi(), Ua(), re.backgroundDirty = !0, l.paintingChanged ? kr() : Lt(), Hn(), Re(), Ln(), ue({ cause: "cutout_frame" });
  }
  function Fh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Hn() {
    K1();
    const i = sC({
      editor: h,
      swatches: tc,
      paintColorPopOpen: Oe ? !Oe.hidden : !1,
      colorToCss: Kr,
      colorsApproximatelyEqual: nc,
      rgb01ToHsv: Df,
      hsv01ToRgb: Tf,
      getBrushPresetIdForTool: Li,
      isActiveLassoTool: av
    });
    if (Object.assign(E.paintDock, i), dv(), !i.visible) {
      Oe && (Oe.hidden = !0);
      return;
    }
    ft && (clearTimeout(ft), ft = 0), he && (!i.colorEnabled && Oe && !Oe.hidden && (ft = window.setTimeout(() => {
      Oe.hidden = !0, E.paintDock.colorPopOpen = !1, ft = 0;
    }, 170)), Oe && (Oe.style.setProperty("--picker-hue-color", i.pickerHueColor), Oe.style.setProperty("--picker-sat", i.pickerSat), Oe.style.setProperty("--picker-val", i.pickerVal), Oe.style.setProperty("--picker-hue", i.pickerHue)), Ve && (Ve.style.left = i.pickerSvLeft, Ve.style.top = i.pickerSvTop), it && (it.style.left = i.pickerHueLeft));
  }
  function Go() {
    const i = on(R && h.mode === "frame" ? $e() : It());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: di(i)
    }, Re());
  }
  function Re() {
    if (tr(), $r(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = aC(_.ui_settings);
    if (a) {
      E.sidePanel = lC({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Yn
      });
      return;
    }
    const s = It(), l = R && h.mode === "frame" ? $e() : null, f = l || s, p = l ? [l] : cr(), m = l ? "shot" : Ta();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const Z = on(f);
      h.panelLastValues = {
        yaw_deg: Number(Z.yaw_deg || 0),
        pitch_deg: Number(Z.pitch_deg || 0),
        hFOV_deg: Number(Z.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(Z.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(Z.rot_deg || 0),
        roll_deg: Number(Z.roll_deg || 0),
        aspect_id: di(Z)
      }, Zn(f) && (h.panelLastValues.opacity = ko(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, S = Ro(), I = W && (m === "shot" || m === "frame") && La(), M = S ? sN(S, h.frame) : I ? { ...w, ...iN(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : Zn(w) ? h.panelLastValues : w || g, A = S ? tl(S) : !!w && !vn(w);
    h.panelWasEnabled = A, mu();
    let T = null;
    if (l) {
      const Z = lu({ item: l, kind: "shot", label: "Frame" });
      T = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Z.label,
        currentIcon: Z.icon || null,
        items: [{
          id: String(l.id || ""),
          label: Z.label,
          icon: Z.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const Z = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const ie = $e();
        ie && Z.push({ id: ie.id, label: "Camera", icon: Hp("frame"), item: ie, kind: "frame" }), ii().forEach((me, We) => {
          var de, ye;
          if (!me || Zn(me) && !me.visible) return;
          const Ue = P ? nd(me) : Kt(me) ? String(me.id || Mf) : String(((ye = (de = _.assets) == null ? void 0 : de[me.asset_id]) == null ? void 0 : ye.name) || me.asset_id || me.id), at = `${We + 1}. ${Ue}${Kt(me) && Lo(me) ? " (hidden)" : ""}`, ve = lu({ item: me, label: at, kind: "image" });
          Z.push({ id: me.id, label: ve.label, icon: ve.icon, item: me, kind: "image" });
        });
      } else
        jp().forEach((ie) => {
          if (!(ie != null && ie.item)) return;
          const me = lu(ie);
          Z.push({ id: ie.item.id, label: me.label, icon: me.icon, item: ie.item, kind: ie.kind });
        });
      const se = (w == null ? void 0 : w.id) || "", pe = S ? { label: nd(S), icon: Me.globe } : Z.find((ie) => ie.id === se) || Z[0];
      T = {
        label: "Selection",
        open: !1,
        disabled: Z.length <= 1,
        currentLabel: pe.label,
        currentIcon: pe.icon || null,
        items: Z.map((ie) => ({
          id: ie.id,
          label: ie.label,
          icon: ie.icon || null,
          active: ie.id === se
        }))
      };
    }
    const Y = [], G = (Z, se, pe, ie, me) => {
      const We = ne(Number(M[Z] || 0), pe, ie);
      Y.push({
        key: Z,
        label: se,
        min: pe,
        max: ie,
        step: me,
        value: We,
        displayValue: Zo(We),
        fillPct: ne((We - pe) / Math.max(1e-6, ie - pe) * 100, 0, 100),
        enabled: A && !r
      });
    }, ee = [];
    if (S) {
      for (const [Z, se] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const pe = kf(M[Z]);
        G(Z, se, -pe, pe, 0.01);
      }
      G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G("roll_deg", "Roll", -180, 180, 0.1), G("scale", "Scale", M0, kf(M.scale), 0.01), G("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      ee.push(`Selected objects: ${p.length}`), ee.push("Multi-selection supports z-order and delete.");
    else {
      const Z = m === "shot" || m === "frame";
      if (I)
        for (const [se, pe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ie = kf(M[se]);
          G(se, pe, -ie, ie, 0.01);
        }
      G("yaw_deg", "Yaw", -180, 180, 0.1), G("pitch_deg", "Pitch", -90, 90, 0.1), G(m === "image" || t === "stickers" && !Z ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), G("hFOV_deg", "H FOV", 1, 179, 0.1), G("vFOV_deg", "V FOV", 1, 179, 0.1), Z && Y.forEach((se) => {
        se.enabled = se.enabled && pC(se.key, { erp: Ji() });
      }), P && !Z && G("opacity", "Opacity", 0, 100, 1);
    }
    E.sidePanel = mC({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: T,
      enabled: A,
      selectedKind: S ? "world" : m,
      selectedItems: p,
      params: Y,
      notes: ee,
      uiSettings: i,
      normalizeCoverageValue: Yn
    });
  }
  function $r() {
    if (!k || r) return;
    const i = fl(), s = Ge.selection, l = s && zr(s.owner);
    if (s) {
      const p = l ? Wa(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((w) => w.frame === m))), s.frames.length || (Ge.selection = null);
    }
    const f = _.timeline.fps;
    E.timeline = wC(_, {
      frame: h.frame,
      span: i,
      selection: Ge.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ge.expanded ?? Th(),
      openRows: Ge.openRows,
      audio: Y_() && E.videoTransport.hasAudio ? { muted: Ae.muted } : null,
      playing: Zt.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Af(e) !== null || ZN(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Qi(),
      cameraHideable: F,
      stickers: !C,
      scene: P && !!ud(e).scene,
      sceneLocked: !!V
    }), E.easing = Ge.selection ? xC(l, Wa(Ge.selection), Ge.selection.frames, Ba(Ge.selection.owner)) : null;
  }
  function Th() {
    return $M(_, { cameraOnly: C, camera: F });
  }
  function fl(i = null) {
    if (V != null && V.frames) return V.frames;
    const s = _.timeline.fps, l = _.stickers.find(Kt), f = l ? Xp() : null, p = Math.max(
      E.videoTransport.ready ? Math.round(Number(E.videoTransport.duration || 0) * s) : 0,
      f ? Wb(l.clip, s, f.meta) : 0
    );
    return mb(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: C && !V || F });
  }
  function zr(i) {
    return i === "camera" ? Qi() ? _.camera : null : i === "scene" ? P ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Wa(i) {
    return i.lane ? [i.lane] : Io(zr(i.owner));
  }
  function Ba(i) {
    if (i === "camera") return 0;
    const { clip: s } = zr(i);
    return s.start - s.in;
  }
  function Dh(i) {
    return `${pa(i, h.frame)}:${i.start - i.in}`;
  }
  function dl(i) {
    const s = zr(i);
    return !!s && s.locked !== !0;
  }
  function Ua() {
    var s;
    const i = It();
    (Zn(i) && !rl(i) || h.selectedId === Wl && Qi() && !Lr() || Ta() === "stroke" && !nl()) && Dn(null), ((s = Ro()) == null ? void 0 : s.visible) === !1 && qi();
  }
  function U_(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (tr(), h.frame = s, tr(), Ua(), Lt(), Re(), Ke(), ue());
  }
  function Y_() {
    return Ae instanceof HTMLVideoElement && !!Ae.getAttribute("src");
  }
  function X_(i) {
    Ii(), Zt.seek(i);
  }
  function wn() {
    k && Zt.stop();
  }
  function Ou() {
    Ii(), Zt.toggle();
  }
  function pl() {
    tr(), Lt(), Re(), Ke(), ue();
  }
  function Ti() {
    qe(), rt(), pl();
  }
  function q_() {
    const { selection: i } = Ge;
    dl(i.owner) && (wn(), OM(zr(i.owner), Wa(i), i.frames, h.frame - Ba(i.owner)), Ge.selection = null, Ti());
  }
  function Lh(i) {
    wn();
    const s = Math.round(h.frame * i / _.timeline.fps);
    ZM(_, i), Ge.selection = null, Zt.seek(s), Ti();
  }
  function J_() {
    const i = Af(e);
    i !== null && i !== _.timeline.fps && Lh(i);
  }
  function Z_(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        if (i.phase === "move") {
          Ge.scrubFrame = i.frame, Fe.request("seek");
          return;
        }
        Fe.cancel(), i.phase === "start" && Ii(), Zt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Ou();
        return;
      }
      if (i.type === "mute") {
        Wp(), $r();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ge.expanded = !(Ge.expanded ?? Th()), Ge.selection = null, $r();
        return;
      }
      if (i.type === "toggle-row") {
        Ge.openRows.has(i.id) ? Ge.openRows.delete(i.id) : Ge.openRows.add(i.id), $r();
        return;
      }
      if (i.type === "toggle-visible") {
        if (i.id === T1) _.painting_visible = !_.painting_visible;
        else {
          const s = zr(i.id);
          if (!s || i.id === "camera" && !F) return;
          s.visible = !s.visible;
        }
        Ua(), Ti();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        if (s && !s.visible || i.id === "camera" && !Lr()) return;
        s && !pa(s.clip, h.frame) && X_(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? hu(s.id) : i.id === "camera" ? Dn($e()) : Dn(ii().find((l) => l.id === i.id) || null), Dr(), Ge.selection = null, Re(), Ke(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ba(i.owner), l = i.frames.map((m) => m - s), f = Ge.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, w) => g - w);
        } else
          Ge.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        $r();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ge.selection;
        if (!s || !dl(s.owner)) return;
        const l = zr(s.owner), f = Wa(s);
        if (i.phase === "start") {
          wn(), Ge.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ge;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          l[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = EM(l, f, p.frames, i.delta, -Ba(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Fe.request("timeline"), Fe.request("view");
          return;
        }
        Fe.cancel(), Ge.drag = null, m ? Ti() : pl();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? zr("scene") : _.stickers.find((m) => m.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          wn(), Ge.drag = { clip: { ...s.clip }, span: fl(s.clip) };
          return;
        }
        const { drag: l } = Ge;
        if (!(l != null && l.clip)) return;
        const f = l.clip, p = Dh(s.clip);
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? DM(s.clip, i.delta) : i.delta && i.mode === "start" ? LM(s.clip, f.start + i.delta) : i.delta && RM(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Fe.request("timeline"), Dh(s.clip) !== p && Fe.request("view");
          return;
        }
        Fe.cancel(), Ge.drag = null, Ua(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Ti() : pl();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !dl(i.owner)) return;
        wn(), AM(zr(i.owner), h.frame - Ba(i.owner)), Ti();
        return;
      }
      if (i.type === "fps") {
        const s = zM(i.fps);
        if (s === null || s === _.timeline.fps || E.timeline.fpsLocked) {
          $r();
          return;
        }
        Lh(s);
        return;
      }
      if (i.type === "length") {
        const s = jM(i.length);
        if (s === void 0 || s === _.timeline.length) {
          $r();
          return;
        }
        wn(), _.timeline.length = s, Ti();
        return;
      }
      if (i.type === "easing") {
        const s = Ge.selection;
        if (!s || !dl(s.owner)) return;
        wn(), TM(zr(s.owner), Wa(s), s.frames, i.easing), i.commit ? Ti() : pl();
      }
    }
  }
  async function Rh(i) {
    if (r || C || t !== "stickers" && t !== "cutout" || !Cr(i)) return;
    if (P) {
      wn(), await Vh(i);
      return;
    }
    const s = uo("asset"), l = ds(e, `add:${s}`, async () => {
      try {
        const { image: f } = await ps(i);
        Jt.set(s, f);
        const p = uo("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Oi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Qs()
        }), Dn(_.stickers[_.stickers.length - 1]), Ya(), Re(), Ke(), ue();
        const m = await ho(i, {
          fetchApi: (S, I) => Yt.fetchApi(S, I)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, zo(), qe(), rt(), Re(), Ke(), ue();
      } catch (f) {
        delete _.assets[s], Jt.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && Dn(null), Re(), Ke(), ue(), rt()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Q_() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = q == null ? void 0 : q.openImagePicker) == null || i.call(q, "add");
  }
  function ew() {
    var i;
    r || !P || (i = q == null ? void 0 : q.openImagePicker) == null || i.call(q, "add-world");
  }
  async function tw(i) {
    r || !P || !Cr(i) || (wn(), await Vh(i, "world"));
  }
  function nw() {
    const i = { x: O.width / 2, y: O.height / 2 }, s = Zi() ? je.pick(Wo(), i.x, i.y, O.width, O.height) : null;
    return TN(_n(), s, Rr());
  }
  async function Vh(i, s = "sky") {
    const l = uo("st"), f = ds(e, `add:${l}`, async () => {
      const { image: p } = await ps(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Oi(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? fN(l, g, nw()) : dp(l, g, m, Qs());
      Jt.set($a(w), p), _.stickers.push(w), s === "world" ? hu(l) : Dn(w), Ya(), Re(), Ke(), ue();
      try {
        const S = await ho(i, {
          fetchApi: (M, A) => Yt.fetchApi(M, A)
        }), I = _.stickers.find((M) => M.id === l);
        if (!I) return;
        I.source = Bl(S), Jt.set($a(I), p), qe(), rt();
      } catch (S) {
        throw _.stickers = _.stickers.filter((I) => I.id !== l), h.selectedId === l && Dn(null), h.worldSelectedId === l && qi(), qe(), rt(), S;
      } finally {
        Re(), Ke(), ue();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function rw(i, s) {
    const l = ds(e, `replace:${s}:${uo("asset")}`, async () => {
      const { image: f } = await ps(i), p = await ho(i, {
        fetchApi: (g, w) => Yt.fetchApi(g, w)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Bl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = Oi(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Jt.set($a(m), f), Lt(), qe(), rt(), Re(), Ke(), ue();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function iw(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = It();
    if (!s || !St(s) || Kt(s) || !Cr(i)) return;
    if (P) {
      await rw(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = uo("asset"), p = ds(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === l) || null;
      if (!m || !St(m) || Kt(m)) return;
      const g = String(m.asset_id || ""), w = g ? Nn(((M = _.assets) == null ? void 0 : M[g]) || null) : null, S = Number(m.vFOV_deg || 0), I = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: A } = await ps(i);
        Jt.set(f, A), m.asset_id = f, m.vFOV_deg = Oi(
          Number(m.hFOV_deg || 30),
          Number(A.naturalWidth || A.width || 1),
          Number(A.naturalHeight || A.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Lt(), Re(), Ke(), ue();
        const T = await ho(i, {
          fetchApi: (G, ee) => Yt.fetchApi(G, ee)
        }), Y = (Array.isArray(_.stickers) ? _.stickers : []).find((G) => String((G == null ? void 0 : G.id) || "") === l) || null;
        if (!Y || String(Y.asset_id || "") !== f) return;
        _.assets[f] = T, zo(), qe(), rt(), Re(), Ke(), ue();
      } catch (A) {
        delete _.assets[f], Jt.delete(f);
        const T = (Array.isArray(_.stickers) ? _.stickers : []).find((Y) => String((Y == null ? void 0 : Y.id) || "") === l) || null;
        throw T && String(T.asset_id || "") === f && (g && w && (_.assets[g] = w), T.asset_id = g, T.vFOV_deg = S, T.crop = I ? { ...I } : null), Lt(), rt(), Re(), Ke(), ue(), A;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function ow() {
    var s;
    if (r) return;
    const i = It();
    !i || !St(i) || Kt(i) || (s = q == null ? void 0 : q.openImagePicker) == null || s.call(q, "replace");
  }
  async function aw() {
    if (r || t !== "stickers") return;
    if (P) {
      await sw();
      return;
    }
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((A) => A.blob()), w = String(g.type || "image/png").split("/")[1] || "png", S = String((p == null ? void 0 : p.name) || `${f}.${w}`), I = new File([g], S, { type: g.type || "image/png" }), M = await ho(I, {
          fetchApi: (A, T) => Yt.fetchApi(A, T)
        });
        _.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (rt(), ue());
  }
  async function sw() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await ho(m, {
            fetchApi: (w, S) => Yt.fetchApi(w, S)
          });
          s.source = Bl(g), i = !0;
        } catch {
        }
    }
    i && (rt(), ue());
  }
  function lw() {
    if (r || t !== "cutout") return;
    const i = $e();
    if (i) {
      Dn(i), h.mode = "pano", C && ur() ? Xi(Dg(Xv(_n(), i.position), hh(), O.width, O.height)) : Tp(Vt(Number(i.yaw_deg || 0)), ne(Number(i.pitch_deg || 0), -89.9, 89.9)), Re(), Ke(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = Wy({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Vt(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Dn(s), Ya(), h.mode = "pano", qe(), rt(), Re(), Ke(), ue({ cause: "cutout_frame" });
  }
  function cw() {
    r || !F || Qi() || (wn(), _.camera = tN(_n()), tr(), Dn($e()), Ya(), qe(), rt(), Re(), Ke(), ue({ cause: "cutout_frame" }));
  }
  function uw() {
    wn(), _.camera = null, Dn(null), tr(), qe(), rt(), Re(), Ke(), ue({ cause: "cutout_frame" });
  }
  function $h(i, s) {
    F && dn(i) && (_.camera.projection = s === ba ? "erp" : "perspective", s === ba) || yw(i, s);
  }
  function fw() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, qe(), rt(), Re(), Ke(), ue());
  }
  function dw() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Kt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function zh(i, s, l = "Clear") {
    return new Promise((f) => {
      E.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function pw() {
    var l, f;
    if (r || !await zh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = da(null), kr();
    const s = dw();
    if (t === "stickers")
      _.stickers = P ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, zo();
    else {
      const p = XM(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, zo();
    }
    qe(), rt(), Re(), Ke(), ue();
  }
  async function hw(i) {
    var m, g, w, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Ko(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await zh(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((S = h.interaction) == null ? void 0 : S.layerKind) === s) {
        const I = er();
        I && h.paintEngine.cancelActiveStroke(I), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = jn().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") !== s), s === "paint" && (kn().length = 0), kr(), qe(), rt(), Re(), Ke(), Hn(), ue();
    }
  }
  function mw() {
    if (r) return;
    const i = It();
    if (!i || !St(i) || Kt(i) || P && eu(i)) return;
    let s;
    P ? s = dN(i, uo("st"), Qs()) : (s = JSON.parse(JSON.stringify(i)), s.id = uo("st"), s.yaw_deg = Vt((s.yaw_deg || 0) + 8), s.z_index = Qs()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Lt(), qe(), rt(), Ke(), Re(), ue();
  }
  function gw() {
    const i = Ro();
    return i ? (tl(i) && (wn(), uN(_, i.id), qi(), Lt(), qe(), rt(), Re(), Ke(), Dr(), ue()), !0) : !1;
  }
  function jh() {
    var l, f, p, m, g;
    if (r || C) return;
    const i = cr(), s = It();
    if (!(!s && i.length === 0) && !i.some((w) => vn(w))) {
      if (wn(), i.length > 1) {
        const w = new Set(i.filter((M) => an(M)).map((M) => String(M.actionGroupId || M.id || ""))), S = new Set(i.filter((M) => bn(M)).map((M) => gn(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(St).map((M) => String(M.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = kn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), kr()), S.size > 0 && (_.painting.raster_objects = jn().filter((M) => !S.has(String((M == null ? void 0 : M.id) || ""))), Ho()), I.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Kt(M) ? (Lo(M) || (M.visible = !1), !0) : !1 : !0), zo(), Lt()), h.selectedId = null, h.selectedIds = [], qe(), rt(), Re(), Ke(), ue();
        return;
      }
      if (an(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== w), _.painting.groups = kn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== w), kr(), h.selectedId = null, h.selectedIds = [], qe(), rt(), Re(), Ke(), ue();
        return;
      }
      if (bn(s)) {
        const w = gn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = jn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== w), Ho(), h.selectedId = null, h.selectedIds = [], qe(), rt(), Re(), Ke(), ue();
        return;
      }
      if (F && dn(s)) {
        uw();
        return;
      }
      if (t === "stickers" || St(s)) {
        if (Kt(s)) {
          if (Lo(s)) return;
          s.visible = !1, Lt(), qe(), rt(), Re(), Ke(), ue();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), zo(), Lt(), h.selectedId = ((g = ii()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, qe(), rt(), Re(), Ke(), ue();
        return;
      }
      fw();
    }
  }
  function Eu(i, s) {
    const l = re.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = Nf * xo(l, i), p = Zd(Jd(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function yw(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, A] = w.split(":").map((T) => Number(T));
        if (Number.isFinite(M) && Number.isFinite(A)) return M >= A;
      }
      const S = Number(i.hFOV_deg || 64), I = Number(i.vFOV_deg || 40);
      return Math.abs(S - I) > 1e-6 ? S >= I : So(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Eu(i, g)) {
      const w = ne(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = Gl(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function bw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = zs(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Eu(i, p)) {
      const m = ne(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Hh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Si(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Eu(i, p)) {
      const m = ne(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = mo(i);
  }
  function Gh() {
    Fo().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function vw() {
    if (r) return;
    const i = cr();
    if (!It() || i.length === 0 || i.some((w) => vn(w))) return;
    Gh();
    const l = Fo(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : bn(w) ? `rasterObject:${gn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), Lt(), qe(), rt(), Ke(), ue();
  }
  function _w() {
    if (r) return;
    const i = cr();
    if (!It() || i.length === 0 || i.some((w) => vn(w))) return;
    Gh();
    const l = Fo(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : bn(w) ? `rasterObject:${gn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), Lt(), qe(), rt(), Ke(), ue();
  }
  function ww() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = Yn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Ln(), e.setDirtyCanvas(!0, !0));
  }
  function Ln() {
    var s;
    if (r) return;
    tr(), Ag(_), _.coverage = Yn(_.coverage), xb(e, _.active);
    const i = Sb(e, _);
    y && !kb(e, i, String(y.value ?? ""), { rebased: W }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Kh = () => Ln();
  r || (e.__panoFlushStateBeforeQueue = Kh);
  function Fu() {
    _.ui_settings = nF(_.ui_settings), r || Ln();
  }
  function rt() {
    var i;
    r || (Ln(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function xw() {
    r || Dv() && ch().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Sw(i = {}) {
    var f, p, m, g, w, S, I, M, A, T;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((I = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || I.call(S, !0, !0), (T = (A = (M = Ir) == null ? void 0 : M.canvas) == null ? void 0 : A.setDirty) == null || T.call(A, !0, !0));
  }
  function Ya() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Hn(), Re());
  }
  function Di(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function hl(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Wh() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function tr(i = !0) {
    var f, p;
    if (!W) return;
    const s = L;
    if (!Lr()) {
      L = null, (f = _.shots) != null && f.length && (_.shots = []), s && Bh(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && L && rN(_.camera, h.frame, l, L), L = Pg(_.camera, h.frame), l ? Object.assign(l, L, { position: [...L.position] }) : _.shots = [{ ...L, position: [...L.position] }], s || Bh(null, L);
  }
  function Bh(i, s) {
    var m, g;
    !s && h.mode === "frame" && Uh(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((g = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : g.mode) === "3dof") {
      Xi({ ..._n(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !La()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, S) => w === l[S])) return;
    const p = { ..._n(), position: f };
    Ra({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, Xi({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function Uh(i) {
    if (h.mode = "pano", !i) return;
    Aa();
    const s = _n().distance;
    h.viewYaw = Vt(i.yaw_deg), h.viewPitch = ne(i.pitch_deg, -89.9, 89.9), h.viewFov = ne(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && Ra({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, re.backgroundDirty = !0;
  }
  function $e() {
    if (!R) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function kw() {
    var Y, G, ee, Z, se;
    if (!O) return null;
    const i = (Y = O.getBoundingClientRect) == null ? void 0 : Y.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    re.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, O.width - 24);
    let g = Math.max(p + 1, O.height - 24);
    const w = (G = ni == null ? void 0 : ni.getBoundingClientRect) == null ? void 0 : G.call(ni), S = (ee = $ == null ? void 0 : $.getBoundingClientRect) == null ? void 0 : ee.call($);
    let I = 24;
    w && i && w.width > 0 && w.height > 0 && (I = Math.max(I, (w.right - i.left) * s + P0)), S && i && S.width > 0 && S.height > 0 && ((Z = E.frameRail) == null ? void 0 : Z.visible) === !0 && (I = Math.max(I, (i.right - S.left) * s + P0)), f = Math.max(f, I);
    const M = Math.min(m, O.width - I);
    let A = 24;
    const T = (se = mn == null ? void 0 : mn.getBoundingClientRect) == null ? void 0 : se.call(mn);
    if (T && i && T.width > 0 && T.height > 0 && (A = Math.max(A, (T.bottom - i.top) * l + Pf)), [le, Se].forEach((pe) => {
      var We;
      if (!pe || !i) return;
      const ie = getComputedStyle(pe);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const me = (We = pe.getBoundingClientRect) == null ? void 0 : We.call(pe);
      !me || me.width <= 0 || me.height <= 0 || (A = Math.max(A, (i.bottom - me.top) * l + Pf));
    }), Tt && i) {
      const pe = getComputedStyle(Tt);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (A = Math.max(A, (LE + Pf) * l));
    }
    return p = Math.max(p, A), g = Math.max(p + 1, Math.min(g, O.height - A)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function ml(i = $e()) {
    if (!i || !O) return null;
    const s = re.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return Yk(s, i, Nf * xo(s, i));
  }
  function pn(i = $e()) {
    const s = ml(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Tu() {
    return R && !!$e();
  }
  function Mr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Ei(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: ne(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = vu(i.x, i.y), { lon: f, lat: p } = ku(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ne(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Nr(i, s, l = performance.now()) {
    const f = pn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Au(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = ku(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: ne(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Mw(i, s) {
    const l = $e();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = Uy(l, s);
    if (!p) return !1;
    if (f) {
      const m = Nf * xo(
        re.frameSafeRect || { w: O.width, h: O.height },
        p
      ), g = Qd({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, Yh(), Re(), !0;
  }
  function Yh() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, qe(), rt(), Re());
    }, 180);
  }
  function Du() {
    return W && h.mode === "frame" && La();
  }
  function Xa() {
    const i = $e(), s = ml(i);
    return i && s ? jg(i, s, { width: O.width, height: O.height }) : null;
  }
  function Xh() {
    var i;
    return ((i = Rr()) == null ? void 0 : i.radius) || Pr;
  }
  function qa(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: Xh() };
  }
  function qh(i, s) {
    const { rect: l } = i;
    return je.pickSurface(mh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function Jh(i, s, l) {
    return hf(s, qh(i, l), null, Vr());
  }
  function Zh(i) {
    return JSON.stringify([qa(i), i.rect]);
  }
  function Qh(i) {
    const s = $e();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg;
  }
  function em(i, s) {
    const l = $e();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, mt(i), O.setPointerCapture(s));
  }
  function Nw(i, s, l) {
    const f = Xa();
    if (!f || r) return;
    const p = qa(f);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: Jh(f, p, s), changed: !1 } : { kind: "frame_pan", last: s, depth: Ig(p, Vr()), changed: !1 }, mt(s), O.setPointerCapture(l);
  }
  function Pw(i, s) {
    const l = Xa();
    if (!l) return;
    const f = qa(l), p = s.x - i.last.x, m = s.y - i.last.y;
    Qh(i.kind === "frame_pan" ? Fg(f, p, m, l.rect.w, l.rect.h, i.depth) : Eg(f, p, m, O.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ue({ localOnly: !0, cause: "frame_view" });
  }
  function Aw(i, s) {
    const l = Xa();
    if (!l || r) return;
    const f = qa(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: je.contentKey(), view: Zh(l) };
    if (!Og(Fr, m)) {
      const g = qh(l, i);
      Fr = { ...m, cost: performance.now() - p, hit: g };
    }
    Qh(Tg(f, hf(f, Fr.hit, null, Vr()), s, Vr())), Fr.view = Zh(Xa() ?? l), Fr.wheelTime = p, Yh(), Re(), ue({ localOnly: !0, cause: "frame_view" });
  }
  function Cw() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, qe(), rt(), Re(), !0) : !1;
  }
  function Ja() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && to(), h.interaction = null, $o(), oi(), Re(), mt(h.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function Iw(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Li(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? ci : Kn[s] ? s : h.activeBrushPresetId || ci;
  }
  function tm() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (Wh() || Tu());
  }
  function nm() {
    var i;
    return tm() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function gl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function Ow() {
    var M, A;
    if (!nm()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = Li(s), f = Kn[l] || Kn[ci], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : nr(h.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : ne(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), I = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : ne(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: Kr(w, S),
      strokeStyle: Kr(w, I),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((A = h.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Ew() {
    var T, Y, G;
    const i = Ow();
    if (!Ee) return;
    if (!i) {
      Ee.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", I = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), A = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Fc, l = Fc, f = "0", g = "0", w = "none", M = $E, A = zE, m = QE(i.fillStyle, I, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const ee = Math.max(1, Number(((T = i.preset) == null ? void 0 : T.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * ee), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((G = (Y = i.preset) == null ? void 0 : Y.angle) == null ? void 0 : G.value) || 0) * go;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Ee.style.display = "block", Ee.style.width = `${Math.round(s)}px`, Ee.style.height = `${Math.round(l)}px`, Ee.style.borderRadius = f, Ee.style.border = g, Ee.style.boxShadow = w, Ee.style.background = m, Ee.style.backgroundRepeat = "no-repeat", Ee.style.backgroundPosition = "center", Ee.style.backgroundSize = "contain", Ee.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - A)}px) rotate(${p}deg)`;
  }
  function Fw() {
    var pe;
    if (!ht || !Ye) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = Li(s), f = Kn[l] || Kn[ci], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : nr(h.paintColor), I = i === "mask" ? Kr(S, 0.22) : w ? "rgba(255,255,255,0.14)" : Kr(S, ne(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Kr(S, 0.96) : w ? "rgba(255,255,255,0.72)" : Kr(S, ne(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let A = g * 2, T = g * 2, Y = "999px", G = 0, ee = I;
    const Z = "rgba(222, 222, 222, 0.72)", se = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      ee = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ie = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      A = Math.max(16, g * 2 * ie), T = Math.max(10, g * 2), Y = `${Math.min(8, T * 0.42)}px`, G = Number(((pe = f == null ? void 0 : f.angle) == null ? void 0 : pe.value) || 0) * go;
    } else s === "brush" ? ee = `radial-gradient(circle at 50% 50%, ${M} 0%, ${I} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (A = Math.max(18, g * 1.8), T = A, ee = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (ee = "rgba(255,255,255,0.12)");
    Ye.style.width = `${Math.round(A)}px`, Ye.style.height = `${Math.round(T)}px`, Ye.style.borderRadius = Y, Ye.style.background = ee, Ye.style.border = `1px solid ${Z}`, Ye.style.boxShadow = `0 0 0 1px ${se}`, Ye.style.transform = `rotate(${G}deg)`, ot && (clearTimeout(ot), ot = 0), ht.classList.remove("fade-out"), ht.classList.add("show");
  }
  function yl() {
    !ht || !ht.classList.contains("show") || (ht.classList.add("fade-out"), ot && clearTimeout(ot), ot = window.setTimeout(() => {
      ht.classList.remove("show", "fade-out"), ot = 0;
    }, 180));
  }
  function rm(i, s, l, f) {
    const p = Li(s), m = Kn[p] || Kn[ci], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = Iw(f, w), I = l.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), M = {
      id: Qo(i),
      actionGroupId: Qo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: S.radiusModel,
      radiusValue: S.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: I.map((A) => ({ ...A })),
        points: I.map((A) => ({ ...A }))
      }
    };
    return S0(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function im(i, s, l, f) {
    const p = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = Li(s), g = Kn[m] || Kn[ci], w = {
      id: Qo(i),
      actionGroupId: Qo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: p.map((S) => ({ ...S }))
      }
    };
    return S0(w, g), Number(g.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Ko(i) {
    const s = _.painting || (_.painting = da(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function Tw(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const I = $e();
      if (!I || (f = Nr(s, I, l), !f)) return !1;
    } else
      f = Mr(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const I = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (I < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const S = er();
    if (S) {
      const I = h.paintEngine.ensureTarget(S);
      h.paintEngine.appendStrokePoint(I, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Dw(i, s, l = performance.now()) {
    var g, w;
    let f;
    if (h.mode === "frame") {
      const S = $e();
      if (!S) return !1;
      f = Nr(s, S, l);
    } else
      f = Mr(s, l);
    const p = (w = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const S = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), I = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && I < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Lw(i) {
    var ie, me, We, Ue, at;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    ul();
    const l = er(), f = za(l.width, l.height);
    if (!kh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((me = (ie = f.ctx) == null ? void 0 : ie.getImageData(0, 0, l.width, l.height)) == null ? void 0 : me.data) || null;
    if (!p) return !1;
    const m = new Map(kn().map((ve) => [String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim(), ve ? { ...ve } : null])), g = [], w = [], S = [...jn().filter((ve) => String((ve == null ? void 0 : ve.layerKind) || "paint") !== "paint")];
    let I = !1, M = Fo().reduce((ve, de) => Math.max(ve, Number((de == null ? void 0 : de.z_index) || 0)), -1) + 1;
    function A(ve, de, ye, Le = 8) {
      let ze = de, tt = ye, st = -1, Ot = -1;
      for (let lt = 0; lt < ye; lt += 1)
        for (let en = 0; en < de; en += 1)
          ve[(lt * de + en) * 4 + 3] <= Le || (en < ze && (ze = en), lt < tt && (tt = lt), en > st && (st = en), lt > Ot && (Ot = lt));
      return st < ze || Ot < tt ? null : { minX: ze, minY: tt, maxX: st, maxY: Ot };
    }
    const T = A(p, l.width, l.height, 8);
    if (!T) return !1;
    function Y(ve, de) {
      return !ve || !de ? !1 : !(ve.maxX < de.minX || de.maxX < ve.minX || ve.maxY < de.minY || de.maxY < ve.minY);
    }
    function G(ve, de) {
      const ye = Pi((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "", "paint", de);
      if (!ye) return null;
      const Le = ye.centerUv.u - ye.halfW, ze = ye.centerUv.u + ye.halfW, tt = ye.centerUv.v - ye.halfH, st = ye.centerUv.v + ye.halfH, Ot = l.width, lt = l.height;
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((ze % 1 + 1) % 1 * Ot),
        minY: Math.floor(ne(tt, 0, 1) * lt),
        maxY: Math.ceil(ne(st, 0, 1) * lt),
        wraps: ze - Le >= 1 || Le < 0 || ze > 1
      };
    }
    function ee(ve) {
      const de = (ve == null ? void 0 : ve.bbox) || null;
      if (!de) return null;
      const ye = (ve == null ? void 0 : ve.transform) || {}, Le = l.width, ze = l.height, tt = Number(de.u0 || 0) + Number(ye.du || 0), st = Number(de.u1 || 0) + Number(ye.du || 0), Ot = Number(de.v0 || 0) + Number(ye.dv || 0), lt = Number(de.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((tt % 1 + 1) % 1 * Le),
        maxX: Math.ceil((st % 1 + 1) % 1 * Le),
        minY: Math.floor(ne(Ot, 0, 1) * ze),
        maxY: Math.ceil(ne(lt, 0, 1) * ze),
        wraps: st - tt >= 1 || tt < 0 || st > 1
      };
    }
    function Z(ve) {
      return ve ? ve.wraps ? Y(T, { minX: 0, maxX: ve.maxX, minY: ve.minY, maxY: ve.maxY }) || Y(T, { minX: ve.minX, maxX: l.width - 1, minY: ve.minY, maxY: ve.maxY }) : Y(T, ve) : !0;
    }
    function se(ve) {
      if (!ve) return { touched: !1, canvas: null };
      const de = za(l.width, l.height, { readback: !0 });
      de.ctx.drawImage(ve, 0, 0);
      const ye = de.ctx.getImageData(0, 0, l.width, l.height);
      de.ctx.save(), de.ctx.globalCompositeOperation = "destination-out", de.ctx.drawImage(f.canvas, 0, 0), de.ctx.restore();
      const Le = de.ctx.getImageData(0, 0, l.width, l.height);
      for (let ze = 0; ze < l.width * l.height; ze += 1) {
        if (p[ze * 4 + 3] <= 8) continue;
        const st = ye.data[ze * 4 + 3], Ot = Le.data[ze * 4 + 3];
        if (st > Ot)
          return { touched: !0, canvas: de.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(ve, de, ye) {
      const Le = Number(ye == null ? void 0 : ye.z_index), ze = E_(ve, de, ye).map((tt, st) => ({
        ...tt,
        z_index: Number.isFinite(Le) ? Le + st * 1e-3 : M + st * 1e-3
      }));
      return ze.length && (M = Math.max(M, ...ze.map((tt) => Number((tt == null ? void 0 : tt.z_index) || 0))) + 1), ze;
    }
    for (const ve of kn()) {
      const de = String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim();
      if (!de) continue;
      const ye = Sr(de, "paint");
      if (!Z(G(ve, ye))) {
        w.push(ve), g.push(...ye);
        continue;
      }
      const Le = ((Ue = (We = h.paintEngine) == null ? void 0 : We.getGroupTarget) == null ? void 0 : Ue.call(We, de)) || null, ze = ((at = Le == null ? void 0 : Le.committedPaint) == null ? void 0 : at.canvas) || null;
      if (!ze) {
        w.push(ve), g.push(...ye);
        continue;
      }
      const tt = se(ze);
      if (!tt.touched || !tt.canvas) {
        w.push(ve), g.push(...ye);
        continue;
      }
      I = !0;
      const st = pe(tt.canvas, "paint", m.get(de) || ve || {});
      S.push(...st);
    }
    for (const ve of jn().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") === "paint")) {
      if (!Z(ee(ve))) {
        S.push(ve);
        continue;
      }
      const de = lh(ve, null);
      if (!de) {
        S.push(ve);
        continue;
      }
      const ye = se(de);
      if (!ye.touched || !ye.canvas) {
        S.push(ve);
        continue;
      }
      I = !0;
      const Le = pe(ye.canvas, "paint", ve);
      S.push(...Le);
    }
    return I ? (_.painting.paint.strokes = g, _.painting.groups = w.sort((ve, de) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), _.painting.raster_objects = S.sort((ve, de) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), Da({ preservePanelValues: !1 }), !0) : !1;
  }
  function Rw(i) {
    var g, w, S, I, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((I = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : I.points) || []).length >= 1) {
      Lu(i);
      const A = er();
      A && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(A) : h.paintEngine.commitActiveStroke(i.stroke, A)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = rm(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Vw(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Lu(i);
      const S = er();
      S && h.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = im(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Lu(i) {
    var m, g, w, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Cu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Lw(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Dp((w = i.stroke) == null ? void 0 : w.actionGroupId), Ko(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Cu(p, i.stroke.targetSpace, !0), f && Dp((S = i.stroke) == null ? void 0 : S.actionGroupId), Ko(i.layerKind).push(i.stroke), !0);
  }
  function om(i) {
    var l;
    if (R && h.mode === "frame") {
      const f = $e(), p = pn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Nr(i, f, performance.now()), w = g ? jo(g) : null;
      if (w)
        for (const I of Pu()) {
          if (!St(I)) continue;
          const M = Ka(I, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const A = Qt(I);
            if (A != null && A.visible) return { item: I, geom: A };
          }
        }
      const S = ru(!1).slice().sort((I, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of S) {
        if (I.type === "strokeGroup") {
          const T = Do(Ia("paint", I.actionGroupId || I.id || ""));
          if (!T) continue;
          const Y = Qt(T);
          if (!(Y != null && Y.visible)) continue;
          const G = Array.isArray(Y.strokePaths) ? Y.strokePaths : [];
          for (const ee of G) {
            const Z = Array.isArray(ee == null ? void 0 : ee.points) ? ee.points : [];
            if (!Z.length) continue;
            if (ee.closed && Z.length >= 3 && Ri(i, Z)) return { item: T, geom: Y };
            const se = Math.max(8, Number((ee == null ? void 0 : ee.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < Z.length - 1; pe += 1)
              if (Ff(i, Z[pe], Z[pe + 1]) <= se * se) return { item: T, geom: Y };
            if (Z.length === 1 && gs(i, Z[0]) <= se * se) return { item: T, geom: Y };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const T = To(Oa(((l = I.item) == null ? void 0 : l.id) || I.id || ""));
          if (!T) continue;
          const Y = Qt(T);
          if (sh(T, Y, i, g)) return { item: T, geom: Y };
          continue;
        }
        const M = I.item;
        if (!M || !St(M) || !w) continue;
        const A = Ka(M, w);
        if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
          const T = Qt(M);
          if (T != null && T.visible) return { item: M, geom: T };
        }
      }
      return null;
    }
    const s = [
      ...ru(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Do(Ia("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? To(Oa(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...R ? Pu().filter((f) => dn(f)) : []
    ];
    for (const f of s) {
      if (an(f)) {
        const m = Qt(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const S = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!S.length) continue;
          if (w.closed && S.length >= 3 && Ri(i, S)) return { item: f, geom: m };
          const I = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < S.length - 1; M += 1)
            if (Ff(i, S[M], S[M + 1]) <= I * I) return { item: f, geom: m };
          if (S.length === 1 && gs(i, S[0]) <= I * I) return { item: f, geom: m };
        }
        continue;
      }
      if (bn(f)) {
        const m = Qt(f);
        if (!(m != null && m.visible)) continue;
        if (sh(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = Qt(f);
      if (p.visible && Ri(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Za(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (St(l)) return md(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => gs(m, s) <= 121);
      if (f >= 0) {
        const m = i.corners[f], g = m.x - i.center.x, w = m.y - i.center.y, S = g * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: S };
      }
      const p = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of p) {
        const g = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && g.length >= 3 && Ri(s, g)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let S = 0; S < g.length - 1; S += 1)
          if (Ff(s, g[S], g[S + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Ri(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => gs(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: w };
      }
      return Ri(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return aP(i, s, {
      edges: t === "cutout" || dn(l),
      resize: !(dn(l) && Ji()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function am(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function $w(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function zw(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => $w(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Ri({ x: l, y: f }, s.corners);
  }
  function mt(i) {
    if (Ew(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Pt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Pt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? Pt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Pt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Pt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Pt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Pt("grabbing") : Pt("default");
      return;
    }
    if (nm()) {
      Pt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Pt(DE);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Pt("default");
        return;
      }
      Pt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Pt("default");
      return;
    }
    if (h.gizmoAxis) {
      Pt("grab");
      return;
    }
    const s = It(), l = s ? Qt(s) : null, f = s ? vn(s) : !1, p = f ? { kind: "none", cursor: "default" } : Za(l, i, s);
    if (!f && p.kind !== "none") {
      Pt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && om(i)) {
      Pt("default");
      return;
    }
    Pt(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!be) return;
    if (_e = !1, h.mode === "frame") {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || fr() && ur()) {
      const p = jw();
      _e = p.visible, sm(p);
      return;
    }
    const i = It(), s = cr();
    if (!i && s.length === 0 || h.interaction) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Ta(), f = gC({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Fa(s) : Qt(i),
      allLocked: su(s),
      anyLocked: s.some((p) => vn(p)),
      selectedLocked: vn(i),
      activeAspect: dn(i) && Ji() ? ba : di(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Kt,
      isStickerHidden: Lo,
      canRestoreSelectedToInitial: uv,
      iconSet: Me,
      cameraShot: W,
      cameraDeletable: F,
      erpChoice: F,
      coverage: _.coverage
    });
    sm(f);
  }
  function jw() {
    const i = Zi() && !h.interaction ? Qn().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Wo(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? gp(l) : [i.gizmo.transform.position]).map((g) => $s(s, g, O.width, O.height)).filter(Boolean), m = $N(s, i.gizmo.transform.position, i.gizmo.mode, O.width, O.height);
    return yC({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: fr(), deletable: F && fr() });
  }
  function sm(i) {
    var m, g;
    if (!i.visible) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, S) => bC(i.anchor, w, S, O.width, O.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
    if (!p) {
      E.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    E.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!be || E.selectionMenu.visible !== !0) return;
      const w = be.getBoundingClientRect(), S = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, I = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: S, h: I, measured: !0 };
      const M = s(S, I);
      M && (E.selectionMenu.left = M.left, E.selectionMenu.top = M.top);
    });
  }
  function to() {
    _t.timer && (clearTimeout(_t.timer), _t.timer = 0), _t.target = null, E.tooltip.visible = !1;
  }
  function Hw(i) {
    if (!Ne || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    E.tooltip.text = s, E.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var ee, Z;
      if (_t.target !== l || !Ne || !(l != null && l.isConnected)) return;
      const f = Q.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((ee = Ne.getBoundingClientRect()) == null ? void 0 : ee.width) || 0)) || 100, S = Math.round(Number(((Z = Ne.getBoundingClientRect()) == null ? void 0 : Z.height) || 0)) || 24, I = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), A = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let T = "", Y = p.left - f.left + p.width * 0.5 - w * 0.5, G = p.top - f.top - S - g;
      if (l.closest(".pano-floating-top") && (G = p.bottom - f.top + g), I)
        T = "tool-rail", Y = p.right - f.left + 10, G = p.top - f.top + p.height * 0.5 - S * 0.5, Y = ne(Y, m, Math.max(m, f.width - w - m)), G = ne(G, m, Math.max(m, f.height - S - m));
      else if (M)
        T = "frame-rail", Y = p.left - f.left - w - 10, G = p.top - f.top + p.height * 0.5 - S * 0.5, Y = ne(Y, m, Math.max(m, f.width - w - m)), G = ne(G, m, Math.max(m, f.height - S - m));
      else if (A) {
        T = "footer";
        const se = l.closest(".pano-paint-footer"), pe = se ? se.getBoundingClientRect() : p;
        Y = pe.left - f.left + pe.width * 0.5 - w * 0.5, G = pe.bottom - f.top + 5, Y = ne(Y, m, Math.max(m, f.width - w - m)), G = Math.max(m, G);
      }
      Y = ne(Y, m, Math.max(m, f.width - w - m)), G = Math.max(m, G), E.tooltip.left = Y, E.tooltip.top = G, E.tooltip.variant = T, E.tooltip.visible = !0;
    });
  }
  const sn = Xd({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Vt(Number(i.yaw || 0)), h.viewPitch = ne(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = ne(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = O.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || O.clientWidth || 0)),
        h: Math.max(1, Number(i.height || O.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Ei,
    onInteraction: () => {
      re.backgroundDirty = !0, re.dirty = !0;
    }
  });
  function Gw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Hy(s, i.lastAngle), i.lastAngle = s;
    const f = Gy(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Zo(f), p.fillPct = (f + 180) / 360 * 100), si(), Ru(i), ue({ localOnly: !0 });
  }
  function Kw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = d1(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = E.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Zo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), si(), Ru(i), ue({ localOnly: !0 });
  }
  const lm = (i, s) => {
    const l = Di(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Ru(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    _t.timer && (clearTimeout(_t.timer), _t.timer = 0), _t.target = null;
    const s = pn(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), f = (w = Q.getBoundingClientRect) == null ? void 0 : w.call(Q);
    if (!s || !l || !f || O.width <= 0 || O.height <= 0) return;
    const p = l.width / O.width, m = l.height / O.height;
    E.tooltip.text = `${Zo(i.shot.roll_deg)}°`, E.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, E.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, E.tooltip.variant = "roll", E.tooltip.visible = !0;
  }
  K == null || K.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = $e();
    if (!s || s.locked === !0) return;
    const l = pn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = lm(i, f);
    h.interaction = {
      kind: "roll_frame",
      shot: s,
      center: f,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = K.setPointerCapture) == null || m.call(K, i.pointerId), i.preventDefault(), si(), Ru(h.interaction), ue({ localOnly: !0 });
  }), K == null || K.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || Gw(
      h.interaction,
      lm(i, h.interaction.center),
      i
    );
  });
  const Ww = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (qe(), rt(), Re()), h.interaction = null, to(), oi(), si(), ue());
  };
  K == null || K.addEventListener("pointerup", Ww), K == null || K.addEventListener("pointercancel", () => Ja()), K == null || K.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Ja();
  }), K == null || K.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? $e() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, qe(), rt(), Re(), si(), ue(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    Ge.selection && (Ge.selection = null, $r());
    const s = Di(i);
    nn = s, gl(s, !0), Aa(), sn.state.inertia.active = !1, sn.state.inertia.vx = 0, sn.state.inertia.vy = 0;
    const l = ur(), f = Du(), p = l || f ? _P(gu(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? em(s, i.pointerId) : Nw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = hl(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, sn.startDrag(M.x, M.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), oh(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const M = $e();
        if (!M || r || M.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: M,
          last: s,
          start: {
            yaw_deg: Number(M.yaw_deg || 0),
            pitch_deg: Number(M.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const M = h.mode === "unwrap" ? s : hl(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, sn.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = $e(), A = pn(M);
      if (!M || M.locked === !0 || !A) return;
      const T = f1({
        frame: A,
        point: s,
        startRollDeg: Number(M.roll_deg ?? M.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!T) return;
      h.interaction = {
        kind: "roll_frame",
        shot: M,
        center: T.center,
        lastAngle: T.lastAngle,
        accumulatedRad: T.accumulatedRad,
        rollGesture: T,
        start: { roll_deg: Number(M.roll_deg ?? M.rot_deg ?? 0) },
        changed: !1,
        altStarted: T.source === "alt",
        source: T.source
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), si(), ue({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      em(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && fm(i, s);
      return;
    }
    if (Oe && !Oe.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (Wh() || Tu())) {
      if (!nl()) return;
      wn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", A = h.primaryTool === "mask" ? h.maskTool : h.paintTool, T = h.mode === "frame" && Tu() ? $e() : null, Y = { kind: "ERP_GLOBAL" }, G = T ? Nr(s, T, performance.now()) : Mr(s, performance.now());
      if (!G) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: A === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: Qo("live"),
        stroke: A === "lasso_fill" ? im(M, A, [G], Y) : rm(M, A, [G], Y)
      }, $o();
      const ee = er();
      if (ee)
        if (h.paintEngine.beginStroke(h.interaction.stroke, ee), h.interaction.kind === "paint_stroke") {
          const Z = h.paintEngine.ensureTarget(ee), se = Number((G == null ? void 0 : G.u) ?? (G == null ? void 0 : G.x) ?? 0), pe = Number((G == null ? void 0 : G.v) ?? (G == null ? void 0 : G.y) ?? 0);
          h.paintEngine.appendStrokePoint(Z, se, pe, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, ee);
      mt(s), O.setPointerCapture(i.pointerId), ue();
      return;
    }
    const m = cr(), g = It(), w = m.length > 1 ? Fa(m) : g ? Qt(g) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, mt(s), O.setPointerCapture(i.pointerId), ue({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && Lr() && ur() && Zv(i, s) || h.primaryTool === "cursor" && P && Zi() && Bw(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((A) => vn(A)) ? { kind: "none" } : Za(w, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((A) => A),
          offset: { x: s.x - w.center.x, y: s.y - w.center.y },
          startCenter: { x: w.center.x, y: w.center.y },
          stickerSnapshots: m.filter((A) => St(A)).map((A) => ({
            id: String(A.id || ""),
            yaw_deg: Number(on(A).yaw_deg || 0),
            pitch_deg: Number(on(A).pitch_deg || 0),
            center: (() => {
              var Y, G;
              const T = Qt(A);
              return T != null && T.visible ? { x: Number(((Y = T.center) == null ? void 0 : Y.x) || 0), y: Number(((G = T.center) == null ? void 0 : G.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((A) => an(A)).map((A) => ({
            id: String(A.actionGroupId || A.id || ""),
            layerKind: String(A.layerKind || "paint"),
            snapshot: Nn(Sr(A.actionGroupId, A.layerKind)),
            frameSnapshot: Nn(Pi(A.actionGroupId, A.layerKind)),
            center: (() => {
              var Y, G;
              const T = Qt(A);
              return T != null && T.visible ? { x: Number(((Y = T.center) == null ? void 0 : Y.x) || 0), y: Number(((G = T.center) == null ? void 0 : G.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: au(A.actionGroupId, A.layerKind)
          })),
          rasterSnapshots: m.filter((A) => bn(A)).map((A) => ({
            id: gn(A.rasterObjectId || A.id || ""),
            snapshot: Nn(jn().find((T) => String((T == null ? void 0 : T.id) || "") === gn(A.rasterObjectId || A.id || ""))),
            center: (() => {
              var Y, G;
              const T = Qt(A);
              return T != null && T.visible ? { x: Number(((Y = T.center) == null ? void 0 : Y.x) || 0), y: Number(((G = T.center) == null ? void 0 : G.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: ph(A)
          }))
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (w != null && w.visible)) {
      const M = vn(g) ? { kind: "none" } : Za(w, s, g);
      if (M.kind === "scale") {
        h.interaction = an(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : bn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Nn(jn().find((A) => String((A == null ? void 0 : A.id) || "") === gn(g.rasterObjectId || g.id || ""))),
          cursor: M.cursor
        } : {
          kind: "scale",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(on(g).hFOV_deg || 20),
          startVFOV: Number(on(g).vFOV_deg || 20),
          cursor: M.cursor
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "scale_x" || M.kind === "scale_y") {
        h.interaction = {
          kind: M.kind,
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(on(g).hFOV_deg || 20),
          startVFOV: Number(on(g).vFOV_deg || 20),
          cursor: M.cursor,
          edge: M.edge
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "rotate") {
        h.interaction = an(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind))
        } : {
          kind: "rotate",
          item: g,
          center: w.center,
          startRot: Number(on(g).rot_deg || on(g).roll_deg || 0),
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x)
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "move") {
        if (an(g)) {
          const A = h.mode === "frame" ? (() => {
            const T = $e();
            return T ? Nr(s, T, performance.now()) : null;
          })() : Mr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: A,
            snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
            frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind))
          }, mt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        if (bn(g)) {
          const A = h.mode === "frame" ? (() => {
            const T = $e();
            return T ? Nr(s, T, performance.now()) : null;
          })() : Mr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: g,
            startUv: A,
            snapshot: Nn(jn().find((T) => String((T == null ? void 0 : T.id) || "") === gn(g.rasterObjectId || g.id || "")))
          }, mt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: g,
          offset: { x: s.x - w.center.x, y: s.y - w.center.y }
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const S = om(s);
    if (S) {
      const M = h.selectedId !== S.item.id;
      if (M && h.selectedId && (qe(), Ln()), Dn(S.item), R && M && (h.cutoutAspectOpen = !1), M && Re(), Ke(), ue(), vn(S.item)) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: an(S.item) ? "move_stroke_group" : bn(S.item) ? "move_raster_object" : "move",
        item: S.item,
        offset: { x: s.x - S.geom.center.x, y: s.y - S.geom.center.y },
        startUv: an(S.item) || bn(S.item) ? h.mode === "frame" ? (() => {
          const A = $e();
          return A ? Nr(s, A, performance.now()) : null;
        })() : Mr(s, performance.now()) : null,
        snapshot: an(S.item) ? Nn(Sr(S.item.actionGroupId, S.item.layerKind)) : bn(S.item) ? Nn(jn().find((A) => String((A == null ? void 0 : A.id) || "") === gn(S.item.rasterObjectId || S.item.id || ""))) : null,
        frameSnapshot: an(S.item) ? Nn(Pi(S.item.actionGroupId, S.item.layerKind)) : null
      }, mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const I = !!h.selectedId;
    I && (qe(), Ln()), Da(), I && Re(), Ke(), ue(), h.mode === "pano" && fm(i, s);
  };
  function Wo() {
    return mf(_n(), O.width, O.height, Rr());
  }
  function no(i, s) {
    return je.gizmoPointer(i, Wo(), s.x, s.y, O.width, O.height);
  }
  function Bw(i, s) {
    var w;
    const l = (w = Qn().space) == null ? void 0 : w.gizmo;
    if (l && no("hover", s) !== null && no("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: ko(Ro(), h.frame),
        changed: !1
      }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = cr(), p = It(), m = f.length > 1 ? f.some((S) => vn(S)) ? "none" : Za(Fa(f), s).kind : p && !vn(p) ? Za(Qt(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = je.pickSticker(Wo(), s.x, s.y, O.width, O.height);
    return _.stickers.some((S) => S.id === g && S.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (qe(), Ln()), hu(g), Re(), Ke(), Dr(), ue()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function cm(i) {
    var f;
    const l = !!(h.worldSelectedId || fr()) && h.primaryTool === "cursor" && Zi() && !!((f = Qn().space) != null && f.gizmo) ? no("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, re.backgroundDirty = !0, ue({ localOnly: !0 }));
  }
  function Uw(i, s) {
    const l = no("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(Vg(i.mode, i.base, i.start, l))) In(_.camera, p, h.frame, m);
      tr(), i.changed = !0, Fe.request("sidePanel"), ue({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (cN(f, h.frame, Vg(i.mode, i.base, i.start, l)), i.changed = !0, Lt(), Fe.request("sidePanel"), ue({ localOnly: !0 }));
  }
  function um(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (no("up", h.pointerPos), re.backgroundDirty = !0, i.changed && (qe(), rt(), Re())), mt(h.pointerPos), ue();
  }
  function fm(i, s) {
    if (ur()) {
      const f = gu().emptyLeft;
      f && oh(f, s, i.pointerId);
      return;
    }
    const l = hl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, sn.startDrag(l.x, l.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
  }
  function Yw(i, s) {
    if (!k || !Zt.playing || (Zt.stop(), i.kind === "frame_pan")) return;
    if (i.kind === "frame_orbit") {
      const p = Xa();
      p && (i.pivot = Jh(p, qa(p), s));
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = _.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = eo() : p && (i.base = ko(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = Fa(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((S) => String((S == null ? void 0 : S.id) || "") === m.id), w = g ? Qt(g) : null;
        w != null && w.visible && (m.yaw_deg = Number(on(g).yaw_deg || 0), m.pitch_deg = Number(on(g).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = Qt(i.item);
    if (!(l != null && l.visible)) return;
    const f = on(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - l.center.x, y: s.y - l.center.y };
      return;
    }
    if (i.center = l.center, i.kind === "rotate") {
      i.startRot = Number(f.rot_deg || f.roll_deg || 0), i.startAng = Math.atan2(s.y - l.center.y, s.x - l.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)), i.startHFOV = Number(f.hFOV_deg || 20), i.startVFOV = Number(f.vFOV_deg || 20);
  }
  O.onpointermove = (i) => {
    var f, p, m, g, w, S, I, M, A, T, Y, G, ee, Z, se, pe, ie, me, We, Ue, at, ve;
    const s = Di(i);
    if (gl(s, !0), !h.interaction) {
      cm(s), mt(s);
      return;
    }
    mt(s);
    const l = h.interaction;
    if (nn && (s.x !== nn.x || s.y !== nn.y)) {
      const de = nn;
      nn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || Yw(l, de);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        Uw(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let ye = !1;
        de.forEach((Le) => {
          const ze = Di(Le);
          if (h.mode === "frame") {
            const tt = $e(), st = tt ? pn(tt) : null;
            if (st) {
              const Ot = (ze.x - st.x) / Math.max(1, st.w), lt = (ze.y - st.y) / Math.max(1, st.h);
              if (!(Ot >= 0 && Ot <= 1 && lt >= 0 && lt <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Rw(l));
            }
          }
          Tw(l, ze, performance.now()) && (ye = !0);
        }), ye && ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let ye = !1;
        if (de.forEach((Le) => {
          const ze = Di(Le);
          if (h.mode === "frame") {
            const tt = $e(), st = tt ? pn(tt) : null;
            if (st) {
              const Ot = (ze.x - st.x) / Math.max(1, st.w), lt = (ze.y - st.y) / Math.max(1, st.h);
              if (!(Ot >= 0 && Ot <= 1 && lt >= 0 && lt <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Vw(l));
            }
          }
          Dw(l, ze, performance.now()) && (ye = !0);
        }), ye) {
          const Le = er();
          Le && h.paintEngine.updateActiveStroke(l.stroke, Le), ue({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const de = performance.now(), ye = h.mode === "unwrap" ? s : hl(i);
        sn.moveDrag(ye.x, ye.y, h.mode === "unwrap" ? "unwrap" : "pano", de), l.lastTs = de, l.last = ye, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        Pw(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const de = _n();
        th(l.kind === "space_pan" ? Fg(de, s.x - l.last.x, s.y - l.last.y, O.width, O.height, l.depth) : Eg(de, s.x - l.last.x, s.y - l.last.y, O.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const de = ml(l.shot);
        if (!de || !l.shot) return;
        const ye = s.x - l.last.x, Le = s.y - l.last.y, ze = p1(l.shot, {
          dx: ye,
          dy: Le,
          focalPx: de.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = ze.yaw_deg, l.shot.pitch_deg = ze.pitch_deg, l.changed = l.changed || Math.abs(ye) > 0 || Math.abs(Le) > 0, l.last = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        Kw(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const de = s.x - l.offset.x, ye = s.y - l.offset.y;
        if (h.mode === "frame" && R) {
          const Le = $e(), ze = pn(Le);
          if (!Le || !ze) return;
          const tt = {
            x: ne((de - ze.x) / Math.max(1, ze.w), 0, 1),
            y: ne((ye - ze.y) / Math.max(1, ze.h), 0, 1)
          }, st = Au(Le, tt);
          if (!st) return;
          const Ot = Tl(st);
          xr(l.item, { yaw_deg: Ot.yaw, pitch_deg: Ot.pitch });
        } else if (h.mode === "unwrap") {
          const Le = Ei(), ze = ne((de - Le.x) / Math.max(Le.w, 1), 0, 1), tt = ne((ye - Le.y) / Math.max(Le.h, 1), 0, 1);
          xr(l.item, { yaw_deg: Vt(ze * 360 - 180), pitch_deg: ne(90 - tt * 180, -90, 90) });
        } else {
          const Le = vu(de, ye), ze = Tl(Le);
          xr(l.item, { yaw_deg: ze.yaw, pitch_deg: ze.pitch });
        }
        St(l.item) && Lt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const de = h.mode === "frame" ? (() => {
          const ze = $e();
          return ze ? Nr(s, ze, performance.now()) : null;
        })() : Mr(s, performance.now());
        if (!de || !l.startUv) return;
        const ye = lr(Number(de.u || 0), Number(l.startUv.u || 0)), Le = Number(de.v || 0) - Number(l.startUv.v || 0);
        Rp((m = l.item) == null ? void 0 : m.actionGroupId, ye, Le, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const de = h.mode === "frame" ? (() => {
          const ze = $e();
          return ze ? Nr(s, ze, performance.now()) : null;
        })() : Mr(s, performance.now());
        if (!de || !l.startUv) return;
        const ye = lr(Number(de.u || 0), Number(l.startUv.u || 0)), Le = Number(de.v || 0) - Number(l.startUv.v || 0);
        $p(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", ye, Le, l.snapshot) && (Ho(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        ev(((I = l.item) == null ? void 0 : I.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", ye, l.snapshot) && (Ho(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const de = s.x - Number(((A = l.offset) == null ? void 0 : A.x) || 0), ye = s.y - Number(((T = l.offset) == null ? void 0 : T.y) || 0);
        let Le = !1, ze = !1, tt = !1;
        const st = de - Number(((Y = l.startCenter) == null ? void 0 : Y.x) || de), Ot = ye - Number(((G = l.startCenter) == null ? void 0 : G.y) || ye);
        for (const lt of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const en = (t === "cutout" ? ou() : ii()).find((Wt) => String((Wt == null ? void 0 : Wt.id) || "") === String(lt.id || ""));
          if (!en || !St(en)) continue;
          const Gn = {
            x: Number(((ee = lt.center) == null ? void 0 : ee.x) || 0) + st,
            y: Number(((Z = lt.center) == null ? void 0 : Z.y) || 0) + Ot
          };
          if (h.mode === "frame" && R) {
            const Wt = $e(), ln = pn(Wt);
            if (!Wt || !ln) continue;
            const ro = {
              x: ne((Gn.x - ln.x) / Math.max(1, ln.w), 0, 1),
              y: ne((Gn.y - ln.y) / Math.max(1, ln.h), 0, 1)
            }, Em = Au(Wt, ro);
            if (!Em) continue;
            const Fm = Tl(Em);
            xr(en, { yaw_deg: Fm.yaw, pitch_deg: Fm.pitch });
          } else if (h.mode === "unwrap") {
            const Wt = Ei(), ln = ne((Gn.x - Wt.x) / Math.max(Wt.w, 1), 0, 1), ro = ne((Gn.y - Wt.y) / Math.max(Wt.h, 1), 0, 1);
            xr(en, { yaw_deg: Vt(ln * 360 - 180), pitch_deg: ne(90 - ro * 180, -90, 90) });
          } else {
            const Wt = vu(Gn.x, Gn.y), ln = Tl(Wt);
            xr(en, { yaw_deg: ln.yaw, pitch_deg: ln.pitch });
          }
          Le = !0;
        }
        for (const lt of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const en = {
            x: Number(((se = lt.center) == null ? void 0 : se.x) || 0) + st,
            y: Number(((pe = lt.center) == null ? void 0 : pe.y) || 0) + Ot
          }, Gn = h.mode === "frame" ? (() => {
            const ln = $e();
            return ln ? Nr(en, ln, performance.now()) : null;
          })() : Mr(en, performance.now()), Wt = lt.centerUv || null;
          if (Gn && Wt) {
            const ln = lr(Number(Gn.u || 0), Number(Wt.u || 0)), ro = Number(Gn.v || 0) - Number(Wt.v || 0);
            Rp(lt.id, ln, ro, lt.snapshot, lt.layerKind, lt.frameSnapshot) && (Le = !0, ze = !0);
          }
        }
        for (const lt of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const en = {
            x: Number(((ie = lt.center) == null ? void 0 : ie.x) || 0) + st,
            y: Number(((me = lt.center) == null ? void 0 : me.y) || 0) + Ot
          }, Gn = h.mode === "frame" ? (() => {
            const ln = $e();
            return ln ? Nr(en, ln, performance.now()) : null;
          })() : Mr(en, performance.now()), Wt = lt.centerUv || null;
          if (Gn && Wt) {
            const ln = lr(Number(Gn.u || 0), Number(Wt.u || 0)), ro = Number(Gn.v || 0) - Number(Wt.v || 0);
            $p(lt.id, ln, ro, lt.snapshot) && (Le = !0, tt = !0);
          }
        }
        Le && (ze ? kr({ rebuildPaintEngine: !1 }) : tt ? Ho() : Lt(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        Vp((We = l.item) == null ? void 0 : We.actionGroupId, ye, 0, l.snapshot, (Ue = l.item) == null ? void 0 : Ue.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let de = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * go;
        i.shiftKey && (de = Math.round(de / 45) * 45), Vp((at = l.item) == null ? void 0 : at.actionGroupId, 1, de, l.snapshot, (ve = l.item) == null ? void 0 : ve.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { hFOV_deg: ne(l.startHFOV * ye, 1, 179), vFOV_deg: ne(l.startVFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = mo(l.item)), St(l.item) && Lt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { hFOV_deg: ne(l.startHFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = mo(l.item)), St(l.item) && Lt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { vFOV_deg: ne(l.startVFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = mo(l.item)), St(l.item) && Lt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let ye = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * go, Le = l.startRot - ye;
        i.shiftKey && (Le = Math.round(Le / 45) * 45), xr(l.item, { [St(l.item) ? "rot_deg" : "roll_deg"]: Le }), St(l.item) && Lt(), ue({ localOnly: !0 });
      }
    }
  }, O.onpointerup = () => {
    var s, l, f, p, m, g, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, mt(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        um(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        $o();
        const S = Lu(h.interaction), I = !!h.interaction._hasCommittedSegments;
        if (S || I) {
          kr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const T = kn().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === M);
            T && (T.frame = null);
          }
          const A = er();
          A && (S ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(A), wh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, A) : h.paintEngine.cancelActiveStroke(A)), qe(), Ln(), Re(), Ke(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const M = er();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const S = am(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? Pu().filter((A) => !dn(A)) : [...ii()],
          ...q1(),
          ...J1()
        ].filter((A) => zw(S, Qt(A)));
        rv(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), R && M.length && (h.cutoutAspectOpen = !1), Re(), Ke(), ue();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (qe(), rt(), Re());
      else if (h.interaction && h.interaction.kind !== "view") {
        let S = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (S = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (S = !0), S && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? kr({ rebuildPaintEngine: !0 }) : Ho()), qe(), Ln(), e.setDirtyCanvas(!0, !0), Go(), Ke(), ue();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && to(), $o(), i && i.kind === "view" && sn.endDrag(performance.now()), oi(), Ke(), mt(h.pointerPos), ue();
    }
  }, O.onpointercancel = () => {
    var i, s, l, f, p;
    if (!Ja()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        um(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && sn.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        $o();
        const m = er();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, $o(), oi(), mt(h.pointerPos), ue({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    Ja();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.oncontextmenu = (i) => {
    (ur() || Du()) && wP(gu(), 2) && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Di(i), l = gl(s, !0);
    h.interaction || (mt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 }));
  }, O.onpointerleave = () => {
    h.interaction || cm({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    gl(h.pointerPos, !1), mt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Di(i), l = dc(i);
      l && wn(), l && Du() ? Aw(s, -l) : l && Mw(s, l) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Aa(), ur()) {
        const s = dc(i);
        s && Nv(Di(i), -s);
      } else sn.applyWheelEvent(i) && ue({ localOnly: !0 });
      i.preventDefault();
    }
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Yi(!0));
  }, O.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), yn.depth = 0, Yi(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Cr(p));
    l && Rh(l);
  };
  const dm = (i) => {
    t !== "stickers" && t !== "cutout" || r || Qc(i) && (yn.depth += 1, Yi(!0), i.preventDefault());
  }, pm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!yn.active && Qc(i) && Yi(!0), yn.active && i.preventDefault());
  }, hm = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !yn.active) return;
    yn.depth = Math.max(0, yn.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (yn.depth === 0 || s) && Yi(!1);
  }, mm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (yn.depth = 0, Yi(!1), Qc(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", dm, !0), window.addEventListener("dragover", pm, !0), window.addEventListener("dragleave", hm, !0), window.addEventListener("drop", mm, !0);
  function Vu() {
    const { canUndo: i, canRedo: s } = Fh();
    Jo(E.toolButtons, "value", "undo", { disabled: !i }), Jo(E.toolButtons, "value", "redo", { disabled: !s });
  }
  const gm = (i, s, l = !1) => {
    var I;
    wn();
    const f = R && h.mode === "frame" ? $e() : null, p = f || It(), m = f ? "shot" : Ta(), g = Ro();
    if (g && !tl(g) || !g && (!p || m === "stroke" || vn(p))) return;
    const w = (((I = E.sidePanel) == null ? void 0 : I.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), (g || W) && PE.has(i) ? S = i === "scale" ? Math.max(S, M0) : S : S = ne(S, Number(w.min), Number(w.max)), i === "yaw_deg" && (S = Vt(S)), !g && W && i.startsWith("position_")) {
      tr(), oN(_.camera, h.frame, i, S), Re(), ue(), l && qe();
      return;
    }
    if (g) {
      lN(g, h.frame, i, S), Lt(), Re(), ue(), l && qe();
      return;
    }
    i === "opacity" ? aN(p, h.frame, S / 100) : xr(p, { [i]: S }), R && !Zn(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = mo(p)), Re(), ue(), l && qe();
  };
  gt == null || gt.addEventListener("click", async (i) => {
    var f, p, m, g, w, S, I;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = Yn(s.getAttribute("data-coverage"));
      if (M === Yn(_.coverage)) return;
      _.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? re.backgroundDirty = !0 : (Ln(), Sw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Re(), Ke(), ue();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = E.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      E.sidePanel.selectionPicker.open = !E.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      E.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let A = null;
      if (M && (t === "stickers" ? A = [...ii(), ...F ? _.shots : []].find((T) => String((T == null ? void 0 : T.id) || "") === M) || null : A = ((m = jp().find((T) => {
        var Y;
        return String(((Y = T == null ? void 0 : T.item) == null ? void 0 : Y.id) || "") === M;
      })) == null ? void 0 : m.item) || null), Dn(A || null), A && !an(A)) {
        const T = on(A);
        Tp(Vt(Number(T.yaw_deg || 0)), ne(Number(T.pitch_deg || 0), -89.9, 89.9));
      }
      Re(), Ke(), ue();
      return;
    }
    if (l === "copy-state-inline") {
      const M = It(), A = Ta();
      if (!M || A === "stroke" || cr().length > 1) return;
      const T = JSON.stringify(R && A !== "image" ? qp(M) : gv(on(M)));
      try {
        await navigator.clipboard.writeText(T), (g = E.sidePanel) != null && g.copyStateButton && (E.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Y;
          (Y = E.sidePanel) != null && Y.copyStateButton && (E.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Fu(), Re(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ue();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Fu(), Re(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), ue();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, Fu(), Re(), (I = e.setDirtyCanvas) == null || I.call(e, !0, !0), ue();
      return;
    }
    if (l === "close-preview") {
      Uo();
      return;
    }
    if (l === "cancel-close") {
      Uo();
      return;
    }
    l === "save-close" && (ww(), Uo());
  }), gt == null || gt.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && gm(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), gt == null || gt.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && gm(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const $u = () => Dr();
  $u(), j.addEventListener("click", (i) => {
    var I, M, A, T, Y;
    if ((M = (I = i.target) == null ? void 0 : I.matches) != null && M.call(I, "[data-confirm-overlay]")) {
      const G = (A = E.confirmDialog) == null ? void 0 : A.resolve;
      E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, G == null || G(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      kv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), re.backgroundDirty = !0, Ke(), ue({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const G = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), R && h.mode === "frame" && (G !== "frame" && (re.frameSafeRect = null), Re(), Ke()), Ya(), oi(), ue();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const G = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = G, (G === "paint" || G === "mask") && Da({ preservePanelValues: !0 }), Hn(), Re(), Ke(), ue();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const G = String(p.getAttribute("data-tool-ui-action") || "");
        if ((G === "undo" || G === "redo") && p.disabled) return;
        G === "undo" ? Iu(-1) : G === "redo" ? Iu(1) : G === "clear" ? pw() : G === "add" || G === "add-image" ? Q_() : G === "add-world" ? ew() : G === "add-or-look" ? lw() : G === "add-camera" && cw();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const G = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = G, Da({ preservePanelValues: !0 }), Kn[G] && (h.activeBrushPresetId = G), Hn(), Re(), Ke(), ue();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), Da({ preservePanelValues: !0 }), Hn(), Re(), Ke(), ue();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const G = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        hw(G);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const G = tc.find((ee) => ee.id === p.getAttribute("data-paint-color-swatch"));
        if (!G) return;
        h.paintColor = nr(G.color), Rt(!0), Hn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Oe && !Oe.hidden ? Rt(!0) : Fn(), Hn();
        return;
      }
    }
    const m = String(((T = p == null ? void 0 : p.getAttribute) == null ? void 0 : T.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      At.resumeAfterScrub = !1, Ou();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Wp(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      const G = !E.videoTransport.loop;
      E.videoTransport.loop = G, Ae.loop = G, Ci({
        hasAudio: E.videoTransport.hasAudio,
        loop: G,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? E.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        E.frameRail.aspectOpen = !E.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const G = h.mode === "frame" ? $e() : null;
        if (!G || G.locked === !0) return;
        $h(G, String(p.getAttribute("data-aspect") || "1:1")), E.frameRail.aspectOpen = !1, Go(), qe(), rt(), oi(), Re(), Ke(), ue();
        return;
      }
      if (m === "frame-aspect-custom") {
        const G = h.mode === "frame" ? $e() : null, ee = p.getAttribute("data-custom-width"), Z = p.getAttribute("data-custom-height");
        if (!G || !bw(G, ee, Z)) return;
        E.frameRail.aspectOpen = !1, Go(), qe(), rt(), oi(), ue();
        return;
      }
      if (m === "frame-rotate-90") {
        const G = h.mode === "frame" ? $e() : null;
        if (!G || G.locked === !0) return;
        Hh(G), E.frameRail.aspectOpen = !1, Go(), qe(), rt(), oi(), ue();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), ue();
        return;
      }
      if (m === "aspect-set") {
        const G = It();
        if (!G) return;
        const ee = String(p.getAttribute("data-aspect") || "1:1");
        $h(G, ee), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Go(), qe(), rt(), Ke(), ue();
        return;
      }
      if (m === "rotate-90") {
        const G = It();
        if (!G || Ji()) return;
        Hh(G), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Go(), qe(), rt(), Ke(), ue();
        return;
      }
      if (m === "bring-front") {
        vw();
        return;
      }
      if (m === "send-back") {
        _w();
        return;
      }
      if (m === "duplicate") {
        mw();
        return;
      }
      if (m === "replace-image") {
        ow();
        return;
      }
      if (m === "toggle-lock") {
        nv();
        return;
      }
      if (m === "back-initial") {
        lv();
        return;
      }
      if (m === "toggle-visible") {
        sv();
        return;
      }
      if (m === "delete") {
        jh();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      Xi(
        { position: Vo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Y = Rr()) == null ? void 0 : Y.radius) || Pr },
        { mode: ec(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!ur() || ec(h.spaceMode, h.viewTransition) !== "6dof") return;
      Mv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, iF(e == null ? void 0 : e.id, h.showGrid), $u(), ue();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Jw();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const G = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = G, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = G ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), wm(), ue();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), S = h.customPaintHistory[w];
    S && (h.customPaintColor = nr(S), h.paintColor = nr(S), Hn());
  }), j.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      Zt.playing && (At.resumeAfterScrub = !0), Zt.seek(po(Number(s.value || 0), el()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      const m = ne(Number(l.value || 0), 0, 1);
      Ae.volume = m, Ae.muted = m <= 1e-4, Ci({
        hasAudio: E.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Li(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Hn(), Fw();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: ne(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = nr(m), h.paintColor = nr(m), Hn();
    }
  }), j.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      At.resumeAfterScrub && Zt.play(), At.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), j.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), j.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), j.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && yl();
  }), j.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !j.contains(s) || _t.target !== s && (_t.target = s, _t.timer && clearTimeout(_t.timer), _t.timer = window.setTimeout(() => {
      _t.target === s && Hw(s);
    }, 220));
  }), j.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || _t.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || to();
  }), j.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || to();
  });
  const Xw = (i, s) => {
    var w;
    if (!Ie) return;
    const l = Ie.getBoundingClientRect(), f = ne((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - ne((s - l.top) / Math.max(1, l.height), 0, 1), m = Df(h.customPaintColor), g = { ...Tf(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = nr(g), h.paintColor = nr(g), Hn();
  }, qw = (i) => {
    var m;
    if (!He) return;
    const s = He.getBoundingClientRect(), l = ne((i - s.left) / Math.max(1, s.width), 0, 1), f = Df(h.customPaintColor), p = { ...Tf(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = nr(p), h.paintColor = nr(p), Hn();
  }, ym = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ie && (Ie.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ym(i, (s) => Xw(s.clientX, s.clientY));
  }), He && (He.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ym(i, (s) => qw(s.clientX));
  }), j.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = E.confirmDialog) == null ? void 0 : p.resolve;
    E.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const bm = () => {
    const i = !!h.fullscreen;
    Jo(E.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Me.fullscreen_close : Me.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, bl = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, j.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), $u(), bm(), Ui(), ue());
  }, vm = () => document.fullscreenElement === U, Jw = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        bl(!h.fullscreen);
        return;
      }
      vm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = U.requestFullscreen) == null ? void 0 : i.call(U));
    } catch {
      bl(!h.fullscreen);
    }
  }, _m = () => {
    document.fullscreenEnabled && bl(vm());
  };
  document.addEventListener("fullscreenchange", _m), bm();
  const wm = () => {
    const i = !!h.outputPreviewExpanded;
    E.outputPreviewToggle.icon = i ? Me.fullscreen_close : Me.fullscreen, E.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", E.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  wm();
  const zu = e.onConnectionsChange;
  let ju = null, xm = () => {
  };
  !r && t === "stickers" && (xm = b1(e, (i = "sync") => {
    i === "executed" && (WE(Jt, El), Ii(), P && J_()), Jp(i);
  }, { editor: !0 }), ju = function(...s) {
    typeof zu == "function" && zu.apply(this, s), Ii(), yi(this, "connections");
  }, e.onConnectionsChange = ju), !r && !C && C0.set(String(e.id ?? "0"), () => ch());
  let Bo = null;
  const Uo = async () => Bo || (Bo = (async () => {
    var i, s, l, f, p, m, g, w;
    return C0.delete(String(e.id ?? "0")), Cw(), r || Ln(), document.fullscreenElement === U && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", _m), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Kh && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = Ir) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), to(), B_(), Ae instanceof HTMLVideoElement && Ae.pause(), fn.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), je.dispose(), Yi(!1), window.removeEventListener("keydown", Sm, !0), window.removeEventListener("keydown", km, !0), window.removeEventListener("keydown", Nm, !0), window.removeEventListener("keyup", Pm, !0), window.removeEventListener("keydown", vl, !0), window.removeEventListener("keyup", vl, !0), window.removeEventListener("blur", Am), window.removeEventListener("keydown", Cm, !0), window.removeEventListener("dragenter", dm, !0), window.removeEventListener("dragover", pm, !0), window.removeEventListener("dragleave", hm, !0), window.removeEventListener("drop", mm, !0), !r && t === "stickers" && (e.onConnectionsChange === ju && (e.onConnectionsChange = zu), xm()), J.unmount(), z.remove(), xw(), Bo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Bo = null, !1)), Bo), Sm = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (Ja()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === U) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), bl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Uo();
    }
  }, km = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Ge.selection) {
      q_(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (gw()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    It() && (jh(), i.preventDefault(), i.stopPropagation());
  }, Mm = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !E.timeline.visible || E.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !U.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !NE.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, Nm = (i) => {
    Mm(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Ou());
  }, Pm = (i) => {
    Mm(i) && (i.preventDefault(), i.stopPropagation());
  }, vl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, si(), mt(h.pointerPos));
  }, Am = () => {
    h.marqueeModifier = !1, h.altModifier = !1, si(), mt(h.pointerPos);
  }, Cm = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Fh();
    i.shiftKey && !g || !i.shiftKey && !m || (Iu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Sm, !0), window.addEventListener("keydown", km, !0), window.addEventListener("keydown", Nm, !0), window.addEventListener("keyup", Pm, !0), window.addEventListener("keydown", vl, !0), window.addEventListener("keyup", vl, !0), window.addEventListener("blur", Am), window.addEventListener("keydown", Cm, !0), U.addEventListener("pointerdown", (i) => {
    i.target === U && Uo();
  });
  function jr(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(_)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || Ln();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      E.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  jr("cutout-focus", wv), !r && t === "stickers" && jr("external-sticker-sync", () => Jp("open"), { rollbackState: !0 }), aw().catch((i) => {
    E.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), jr("history", qe), jr("undo-redo", Vu), jr("paint-ui", Hn), jr("side-panel", Re), jr("look-at-frame", mu), jr("video-source", Ii), jr("canvas-size", Ch), jr("cursor", () => mt(h.pointerPos)), ue(), re.rafId = requestAnimationFrame(Oh);
}
Ir.registerExtension(OP({
  app: Ir,
  openEditor: uF,
  attachStickers: WA,
  attachCutout: BA,
  attachPreview: KA,
  restoreOutput: OA,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: EE
}));
