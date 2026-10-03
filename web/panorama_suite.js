import * as Nl from "../../scripts/app.js";
import { app as Cr } from "../../scripts/app.js";
import { api as Xt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function pd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ot = {}, na = [], Xr = () => {
}, c0 = () => !1, xc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sc = (e) => e.startsWith("onUpdate:"), En = Object.assign, hd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, bw = Object.prototype.hasOwnProperty, _t = (e, t) => bw.call(e, t), Ze = Array.isArray, ra = (e) => Es(e) === "[object Map]", u0 = (e) => Es(e) === "[object Set]", cm = (e) => Es(e) === "[object Date]", it = (e) => typeof e == "function", nn = (e) => typeof e == "string", Jr = (e) => typeof e == "symbol", Pt = (e) => e !== null && typeof e == "object", f0 = (e) => (Pt(e) || it(e)) && it(e.then) && it(e.catch), d0 = Object.prototype.toString, Es = (e) => d0.call(e), vw = (e) => Es(e).slice(8, -1), p0 = (e) => Es(e) === "[object Object]", md = (e) => nn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ pd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), kc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, _w = /-\w/g, $n = kc(
  (e) => e.replace(_w, (t) => t.slice(1).toUpperCase())
), ww = /\B([A-Z])/g, ko = kc(
  (e) => e.replace(ww, "-$1").toLowerCase()
), Mc = kc((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ou = kc(
  (e) => e ? `on${Mc(e)}` : ""
), Ur = (e, t) => !Object.is(e, t), Pl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, h0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, gd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let um;
const Nc = () => um || (um = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = nn(r) ? Mw(r) : Mt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (nn(e) || Pt(e))
    return e;
}
const xw = /;(?![^(]*\))/g, Sw = /:([^]+)/, kw = /\/\*[^]*?\*\//g;
function Mw(e) {
  const t = {};
  return e.replace(kw, "").split(xw).forEach((n) => {
    if (n) {
      const r = n.split(Sw);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function lt(e) {
  let t = "";
  if (nn(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = lt(e[n]);
      r && (t += r + " ");
    }
  else if (Pt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Nw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Pw = /* @__PURE__ */ pd(Nw);
function m0(e) {
  return !!e || e === "";
}
function Aw(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = yd(e[r], t[r]);
  return n;
}
function yd(e, t) {
  if (e === t) return !0;
  let n = cm(e), r = cm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Jr(e), r = Jr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Aw(e, t) : !1;
  if (n = Pt(e), r = Pt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !yd(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const g0 = (e) => !!(e && e.__v_isRef === !0), rt = (e) => nn(e) ? e : e == null ? "" : Ze(e) || Pt(e) && (e.toString === d0 || !it(e.toString)) ? g0(e) ? rt(e.value) : JSON.stringify(e, y0, 2) : String(e), y0 = (e, t) => g0(t) ? y0(e, t.value) : ra(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Eu(r, a) + " =>"] = o, n),
    {}
  )
} : u0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Eu(n))
} : Jr(t) ? Eu(t) : Pt(t) && !Ze(t) && !p0(t) ? String(t) : t, Eu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Jr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yn;
class Cw {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Yn, !t && Yn && (this.index = (Yn.scopes || (Yn.scopes = [])).push(
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
      const n = Yn;
      try {
        return Yn = this, t();
      } finally {
        Yn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Yn, Yn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Yn = this.prevScope, this.prevScope = void 0);
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
function Iw() {
  return Yn;
}
let Dt;
const Fu = /* @__PURE__ */ new WeakSet();
class b0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yn && Yn.active && Yn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fu.has(this) && (Fu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fm(this), w0(this);
    const t = Dt, n = Ir;
    Dt = this, Ir = !0;
    try {
      return this.fn();
    } finally {
      x0(this), Dt = t, Ir = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _d(t);
      this.deps = this.depsTail = void 0, fm(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xf(this) && this.run();
  }
  get dirty() {
    return xf(this);
  }
}
let v0 = 0, cs, us;
function _0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = us, us = e;
    return;
  }
  e.next = cs, cs = e;
}
function bd() {
  v0++;
}
function vd() {
  if (--v0 > 0)
    return;
  if (us) {
    let t = us;
    for (us = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; cs; ) {
    let t = cs;
    for (cs = void 0; t; ) {
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
function w0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function x0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), _d(r), Ow(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function xf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (S0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function S0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bs) || (e.globalVersion = bs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xf(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Dt, r = Ir;
  Dt = e, Ir = !0;
  try {
    w0(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ur(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Dt = n, Ir = r, x0(e), e.flags &= -3;
  }
}
function _d(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      _d(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ow(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ir = !0;
const k0 = [];
function _i() {
  k0.push(Ir), Ir = !1;
}
function wi() {
  const e = k0.pop();
  Ir = e === void 0 ? !0 : e;
}
function fm(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Dt;
    Dt = void 0;
    try {
      t();
    } finally {
      Dt = n;
    }
  }
}
let bs = 0;
class Ew {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Dt || !Ir || Dt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Dt)
      n = this.activeLink = new Ew(Dt, this), Dt.deps ? (n.prevDep = Dt.depsTail, Dt.depsTail.nextDep = n, Dt.depsTail = n) : Dt.deps = Dt.depsTail = n, M0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Dt.depsTail, n.nextDep = void 0, Dt.depsTail.nextDep = n, Dt.depsTail = n, Dt.deps === n && (Dt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, bs++, this.notify(t);
  }
  notify(t) {
    bd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      vd();
    }
  }
}
function M0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        M0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Sf = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ Symbol(
  ""
), kf = /* @__PURE__ */ Symbol(
  ""
), vs = /* @__PURE__ */ Symbol(
  ""
);
function Pn(e, t, n) {
  if (Ir && Dt) {
    let r = Sf.get(e);
    r || Sf.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new wd()), o.map = r, o.key = n), o.track();
  }
}
function hi(e, t, n, r, o, a) {
  const c = Sf.get(e);
  if (!c) {
    bs++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (bd(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), b = d && md(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, w) => {
        (w === "length" || w === vs || !Jr(w) && w >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(vs)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(ho)), ra(e) && u(c.get(kf)));
          break;
        case "delete":
          d || (u(c.get(ho)), ra(e) && u(c.get(kf)));
          break;
        case "set":
          ra(e) && u(c.get(ho));
          break;
      }
  }
  vd();
}
function Ko(e) {
  const t = /* @__PURE__ */ vt(e);
  return t === e ? t : (Pn(t, "iterate", vs), /* @__PURE__ */ gr(e) ? t : t.map(Or));
}
function Pc(e) {
  return Pn(e = /* @__PURE__ */ vt(e), "iterate", vs), e;
}
function Wr(e, t) {
  return /* @__PURE__ */ xi(e) ? pa(/* @__PURE__ */ mo(e) ? Or(t) : t) : Or(t);
}
const Fw = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tu(this, Symbol.iterator, (e) => Wr(this, e));
  },
  concat(...e) {
    return Ko(this).concat(
      ...e.map((t) => Ze(t) ? Ko(t) : t)
    );
  },
  entries() {
    return Tu(this, "entries", (e) => (e[1] = Wr(this, e[1]), e));
  },
  every(e, t) {
    return oi(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return oi(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Wr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return oi(
      this,
      "find",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return oi(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return oi(
      this,
      "findLast",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return oi(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return oi(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Du(this, "includes", e);
  },
  indexOf(...e) {
    return Du(this, "indexOf", e);
  },
  join(e) {
    return Ko(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Du(this, "lastIndexOf", e);
  },
  map(e, t) {
    return oi(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wa(this, "pop");
  },
  push(...e) {
    return Wa(this, "push", e);
  },
  reduce(e, ...t) {
    return dm(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dm(this, "reduceRight", e, t);
  },
  shift() {
    return Wa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return oi(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wa(this, "splice", e);
  },
  toReversed() {
    return Ko(this).toReversed();
  },
  toSorted(e) {
    return Ko(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ko(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wa(this, "unshift", e);
  },
  values() {
    return Tu(this, "values", (e) => Wr(this, e));
  }
};
function Tu(e, t, n) {
  const r = Pc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ gr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Tw = Array.prototype;
function oi(e, t, n, r, o, a) {
  const c = Pc(e), u = c !== e && !/* @__PURE__ */ gr(e), d = c[t];
  if (d !== Tw[t]) {
    const v = d.apply(e, a);
    return u ? Or(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, w) {
    return n.call(this, Wr(e, v), w, e);
  } : n.length > 2 && (b = function(v, w) {
    return n.call(this, v, w, e);
  }));
  const y = d.call(c, b, r);
  return u && o ? o(y) : y;
}
function dm(e, t, n, r) {
  const o = Pc(e), a = o !== e && !/* @__PURE__ */ gr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Wr(e, b)), n.call(this, b, Wr(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Wr(e, d) : d;
}
function Du(e, t, n) {
  const r = /* @__PURE__ */ vt(e);
  Pn(r, "iterate", vs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ kd(n[0]) ? (n[0] = /* @__PURE__ */ vt(n[0]), r[t](...n)) : o;
}
function Wa(e, t, n = []) {
  _i(), bd();
  const r = (/* @__PURE__ */ vt(e))[t].apply(e, n);
  return vd(), wi(), r;
}
const Dw = /* @__PURE__ */ pd("__proto__,__v_isRef,__isVue"), N0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jr)
);
function Lw(e) {
  Jr(e) || (e = String(e));
  const t = /* @__PURE__ */ vt(this);
  return Pn(t, "has", e), t.hasOwnProperty(e);
}
class P0 {
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
      return r === (o ? a ? Bw : O0 : a ? I0 : C0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ze(t);
    if (!o) {
      let d;
      if (c && (d = Fw[n]))
        return d;
      if (n === "hasOwnProperty")
        return Lw;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ On(t) ? t : r
    );
    if ((Jr(n) ? N0.has(n) : Dw(n)) || (o || Pn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ On(u)) {
      const d = c && md(n) ? u : u.value;
      return o && Pt(d) ? /* @__PURE__ */ Nf(d) : d;
    }
    return Pt(u) ? o ? /* @__PURE__ */ Nf(u) : /* @__PURE__ */ va(u) : u;
  }
}
class A0 extends P0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Ze(t) && md(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ xi(a);
      if (!/* @__PURE__ */ gr(r) && !/* @__PURE__ */ xi(r) && (a = /* @__PURE__ */ vt(a), r = /* @__PURE__ */ vt(r)), !c && /* @__PURE__ */ On(a) && !/* @__PURE__ */ On(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : _t(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ On(t) ? t : o
    );
    return t === /* @__PURE__ */ vt(o) && (u ? Ur(r, a) && hi(t, "set", n, r) : hi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = _t(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && hi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Jr(n) || !N0.has(n)) && Pn(t, "has", n), r;
  }
  ownKeys(t) {
    return Pn(
      t,
      "iterate",
      Ze(t) ? "length" : ho
    ), Reflect.ownKeys(t);
  }
}
class Rw extends P0 {
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
const Vw = /* @__PURE__ */ new A0(), $w = /* @__PURE__ */ new Rw(), zw = /* @__PURE__ */ new A0(!0);
const Mf = (e) => e, ll = (e) => Reflect.getPrototypeOf(e);
function jw(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ vt(o), c = ra(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? Mf : t ? pa : Or;
    return !t && Pn(
      a,
      "iterate",
      d ? kf : ho
    ), En(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: w } = b.next();
          return w ? { value: v, done: w } : {
            value: u ? [y(v[0]), y(v[1])] : y(v),
            done: w
          };
        }
      }
    );
  };
}
function cl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hw(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ vt(a), u = /* @__PURE__ */ vt(o);
      e || (Ur(o, u) && Pn(c, "get", o), Pn(c, "get", u));
      const { has: d } = ll(c), b = t ? Mf : e ? pa : Or;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Pn(/* @__PURE__ */ vt(o), "iterate", ho), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ vt(a), u = /* @__PURE__ */ vt(o);
      return e || (Ur(o, u) && Pn(c, "has", o), Pn(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ vt(u), b = t ? Mf : e ? pa : Or;
      return !e && Pn(d, "iterate", ho), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return En(
    n,
    e ? {
      add: cl("add"),
      set: cl("set"),
      delete: cl("delete"),
      clear: cl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ vt(this), c = ll(a), u = /* @__PURE__ */ vt(o), d = !t && !/* @__PURE__ */ gr(o) && !/* @__PURE__ */ xi(o) ? u : o;
        return c.has.call(a, d) || Ur(o, d) && c.has.call(a, o) || Ur(u, d) && c.has.call(a, u) || (a.add(d), hi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ gr(a) && !/* @__PURE__ */ xi(a) && (a = /* @__PURE__ */ vt(a));
        const c = /* @__PURE__ */ vt(this), { has: u, get: d } = ll(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ vt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Ur(a, y) && hi(c, "set", o, a) : hi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ vt(this), { has: c, get: u } = ll(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ vt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && hi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ vt(this), a = o.size !== 0, c = o.clear();
        return a && hi(
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
    n[o] = jw(o, e, t);
  }), n;
}
function xd(e, t) {
  const n = Hw(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    _t(n, o) && o in r ? n : r,
    o,
    a
  );
}
const Gw = {
  get: /* @__PURE__ */ xd(!1, !1)
}, Kw = {
  get: /* @__PURE__ */ xd(!1, !0)
}, Ww = {
  get: /* @__PURE__ */ xd(!0, !1)
};
const C0 = /* @__PURE__ */ new WeakMap(), I0 = /* @__PURE__ */ new WeakMap(), O0 = /* @__PURE__ */ new WeakMap(), Bw = /* @__PURE__ */ new WeakMap();
function Uw(e) {
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
function Yw(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Uw(vw(e));
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return /* @__PURE__ */ xi(e) ? e : Sd(
    e,
    !1,
    Vw,
    Gw,
    C0
  );
}
// @__NO_SIDE_EFFECTS__
function Xw(e) {
  return Sd(
    e,
    !1,
    zw,
    Kw,
    I0
  );
}
// @__NO_SIDE_EFFECTS__
function Nf(e) {
  return Sd(
    e,
    !0,
    $w,
    Ww,
    O0
  );
}
function Sd(e, t, n, r, o) {
  if (!Pt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Yw(e);
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
function mo(e) {
  return /* @__PURE__ */ xi(e) ? /* @__PURE__ */ mo(e.__v_raw) : !!(e && e.__v_isReactive);
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
function kd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ vt(t) : e;
}
function qw(e) {
  return !_t(e, "__v_skip") && Object.isExtensible(e) && h0(e, "__v_skip", !0), e;
}
const Or = (e) => Pt(e) ? /* @__PURE__ */ va(e) : e, pa = (e) => Pt(e) ? /* @__PURE__ */ Nf(e) : e;
// @__NO_SIDE_EFFECTS__
function On(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return Jw(e, !1);
}
function Jw(e, t) {
  return /* @__PURE__ */ On(e) ? e : new Zw(e, t);
}
class Zw {
  constructor(t, n) {
    this.dep = new wd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ vt(t), this._value = n ? t : Or(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gr(t) || /* @__PURE__ */ xi(t);
    t = r ? t : /* @__PURE__ */ vt(t), Ur(t, n) && (this._rawValue = t, this._value = r ? t : Or(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ On(e) ? e.value : e;
}
const Qw = {
  get: (e, t, n) => t === "__v_raw" ? e : nt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ On(o) && !/* @__PURE__ */ On(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function E0(e) {
  return /* @__PURE__ */ mo(e) ? e : new Proxy(e, Qw);
}
class ex {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new wd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Dt !== this)
      return _0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return S0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function tx(e, t, n = !1) {
  let r, o;
  return it(e) ? r = e : (r = e.get, o = e.set), new ex(r, o, n);
}
const ul = {}, Bl = /* @__PURE__ */ new WeakMap();
let so;
function nx(e, t = !1, n = so) {
  if (n) {
    let r = Bl.get(n);
    r || Bl.set(n, r = []), r.push(e);
  }
}
function rx(e, t, n = Ot) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (j) => o ? j : /* @__PURE__ */ gr(j) || o === !1 || o === 0 ? mi(j, 1) : mi(j);
  let y, v, w, N, k = !1, P = !1;
  if (/* @__PURE__ */ On(e) ? (v = () => e.value, k = /* @__PURE__ */ gr(e)) : /* @__PURE__ */ mo(e) ? (v = () => b(e), k = !0) : Ze(e) ? (P = !0, k = e.some((j) => /* @__PURE__ */ mo(j) || /* @__PURE__ */ gr(j)), v = () => e.map((j) => {
    if (/* @__PURE__ */ On(j))
      return j.value;
    if (/* @__PURE__ */ mo(j))
      return b(j);
    if (it(j))
      return d ? d(j, 2) : j();
  })) : it(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (w) {
      _i();
      try {
        w();
      } finally {
        wi();
      }
    }
    const j = so;
    so = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      so = j;
    }
  } : v = Xr, t && o) {
    const j = v, F = o === !0 ? 1 / 0 : o;
    v = () => mi(j(), F);
  }
  const E = Iw(), L = () => {
    y.stop(), E && E.active && hd(E.effects, y);
  };
  if (a && t) {
    const j = t;
    t = (...F) => {
      j(...F), L();
    };
  }
  let S = P ? new Array(e.length).fill(ul) : ul;
  const W = (j) => {
    if (!(!(y.flags & 1) || !y.dirty && !j))
      if (t) {
        const F = y.run();
        if (o || k || (P ? F.some((G, A) => Ur(G, S[A])) : Ur(F, S))) {
          w && w();
          const G = so;
          so = y;
          try {
            const A = [
              F,
              // pass undefined as the old value when it's changed for the first time
              S === ul ? void 0 : P && S[0] === ul ? [] : S,
              N
            ];
            S = F, d ? d(t, 3, A) : (
              // @ts-expect-error
              t(...A)
            );
          } finally {
            so = G;
          }
        }
      } else
        y.run();
  };
  return u && u(W), y = new b0(v), y.scheduler = c ? () => c(W, !1) : W, N = (j) => nx(j, !1, y), w = y.onStop = () => {
    const j = Bl.get(y);
    if (j) {
      if (d)
        d(j, 4);
      else
        for (const F of j) F();
      Bl.delete(y);
    }
  }, t ? r ? W(!0) : S = y.run() : c ? c(W.bind(null, !0), !0) : y.run(), L.pause = y.pause.bind(y), L.resume = y.resume.bind(y), L.stop = L, L;
}
function mi(e, t = 1 / 0, n) {
  if (t <= 0 || !Pt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ On(e))
    mi(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      mi(e[r], t, n);
  else if (u0(e) || ra(e))
    e.forEach((r) => {
      mi(r, t, n);
    });
  else if (p0(e)) {
    for (const r in e)
      mi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && mi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Ac(o, t, n);
  }
}
function Zr(e, t, n, r) {
  if (it(e)) {
    const o = Fs(e, t, n, r);
    return o && f0(o) && o.catch((a) => {
      Ac(a, t, n);
    }), o;
  }
  if (Ze(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Zr(e[a], t, n, r));
    return o;
  }
}
function Ac(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Ot;
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
      _i(), Fs(a, null, 10, [
        e,
        d,
        b
      ]), wi();
      return;
    }
  }
  ix(e, n, o, r, c);
}
function ix(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Vn = [];
let Gr = -1;
const ia = [];
let Ri = null, Xo = 0;
const F0 = /* @__PURE__ */ Promise.resolve();
let Ul = null;
function Cc(e) {
  const t = Ul || F0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ox(e) {
  let t = Gr + 1, n = Vn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Vn[r], a = _s(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Md(e) {
  if (!(e.flags & 1)) {
    const t = _s(e), n = Vn[Vn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _s(n) ? Vn.push(e) : Vn.splice(ox(t), 0, e), e.flags |= 1, T0();
  }
}
function T0() {
  Ul || (Ul = F0.then(L0));
}
function ax(e) {
  Ze(e) ? ia.push(...e) : Ri && e.id === -1 ? Ri.splice(Xo + 1, 0, e) : e.flags & 1 || (ia.push(e), e.flags |= 1), T0();
}
function pm(e, t, n = Gr + 1) {
  for (; n < Vn.length; n++) {
    const r = Vn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Vn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function D0(e) {
  if (ia.length) {
    const t = [...new Set(ia)].sort(
      (n, r) => _s(n) - _s(r)
    );
    if (ia.length = 0, Ri) {
      Ri.push(...t);
      return;
    }
    for (Ri = t, Xo = 0; Xo < Ri.length; Xo++) {
      const n = Ri[Xo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ri = null, Xo = 0;
  }
}
const _s = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function L0(e) {
  try {
    for (Gr = 0; Gr < Vn.length; Gr++) {
      const t = Vn[Gr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Fs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gr < Vn.length; Gr++) {
      const t = Vn[Gr];
      t && (t.flags &= -2);
    }
    Gr = -1, Vn.length = 0, D0(), Ul = null, (Vn.length || ia.length) && L0();
  }
}
let rr = null, R0 = null;
function Yl(e) {
  const t = rr;
  return rr = e, R0 = e && e.type.__scopeId || null, t;
}
function V0(e, t = rr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Mm(-1);
    const a = Yl(t);
    let c;
    try {
      c = e(...o);
    } finally {
      Yl(a), r._d && Mm(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function bi(e, t) {
  if (rr === null)
    return e;
  const n = Tc(rr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ot] = t[o];
    a && (it(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && mi(c), r.push({
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
function eo(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (_i(), Zr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), wi());
  }
}
function sx(e, t) {
  if (Cn) {
    let n = Cn.provides;
    const r = Cn.parent && Cn.parent.provides;
    r === n && (n = Cn.provides = Object.create(r)), n[e] = t;
  }
}
function Al(e, t, n = !1) {
  const r = oS();
  if (r || oa) {
    let o = oa ? oa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && it(t) ? t.call(r && r.proxy) : t;
  }
}
const lx = /* @__PURE__ */ Symbol.for("v-scx"), cx = () => Al(lx);
function go(e, t, n) {
  return $0(e, t, n);
}
function $0(e, t, n = Ot) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = En({}, n), d = t && r || !t && a !== "post";
  let b;
  if (xs) {
    if (a === "sync") {
      const N = cx();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Xr, N.resume = Xr, N.pause = Xr, N;
    }
  }
  const y = Cn;
  u.call = (N, k, P) => Zr(N, y, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Un(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : Md(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const w = rx(e, t, u);
  return xs && (b ? b.push(w) : d && w()), w;
}
function ux(e, t, n) {
  const r = this.proxy, o = nn(e) ? e.includes(".") ? z0(r, e) : () => r[e] : e.bind(r, r);
  let a;
  it(t) ? a = t : (a = t.handler, n = t);
  const c = Ds(this), u = $0(o, a.bind(r), n);
  return c(), u;
}
function z0(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const fx = /* @__PURE__ */ Symbol("_vte"), dx = (e) => e.__isTeleport, px = /* @__PURE__ */ Symbol("_leaveCb");
function Nd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Nd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function j0(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hm(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Xl = /* @__PURE__ */ new WeakMap();
function fs(e, t, n, r, o = !1) {
  if (Ze(e)) {
    e.forEach(
      (P, E) => fs(
        P,
        t && (Ze(t) ? t[E] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (ds(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && fs(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Tc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Ot ? u.refs = {} : u.refs, v = u.setupState, w = /* @__PURE__ */ vt(v), N = v === Ot ? c0 : (P) => hm(y, P) ? !1 : _t(w, P), k = (P, E) => !(E && hm(y, E));
  if (b != null && b !== d) {
    if (mm(t), nn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ On(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (y[P.k] = null);
    }
  }
  if (it(d))
    Fs(d, u, 12, [c, y]);
  else {
    const P = nn(d), E = /* @__PURE__ */ On(d);
    if (P || E) {
      const L = () => {
        if (e.f) {
          const S = P ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Ze(S) && hd(S, a);
          else if (Ze(S))
            S.includes(a) || S.push(a);
          else if (P)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const W = [a];
            k(d, e.k) && (d.value = W), e.k && (y[e.k] = W);
          }
        } else P ? (y[d] = c, N(d) && (v[d] = c)) : E && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const S = () => {
          L(), Xl.delete(e);
        };
        S.id = -1, Xl.set(e, S), Un(S, n);
      } else
        mm(e), L();
    }
  }
}
function mm(e) {
  const t = Xl.get(e);
  t && (t.flags |= 8, Xl.delete(e));
}
Nc().requestIdleCallback;
Nc().cancelIdleCallback;
const ds = (e) => !!e.type.__asyncLoader, H0 = (e) => e.type.__isKeepAlive;
function hx(e, t) {
  G0(e, "a", t);
}
function mx(e, t) {
  G0(e, "da", t);
}
function G0(e, t, n = Cn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ic(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      H0(o.parent.vnode) && gx(r, t, n, o), o = o.parent;
  }
}
function gx(e, t, n, r) {
  const o = Ic(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  K0(() => {
    hd(r[t], o);
  }, n);
}
function Ic(e, t, n = Cn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      _i();
      const u = Ds(n), d = Zr(t, n, e, c);
      return u(), wi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ki = (e) => (t, n = Cn) => {
  (!xs || e === "sp") && Ic(e, (...r) => t(...r), n);
}, yx = ki("bm"), Oc = ki("m"), bx = ki(
  "bu"
), vx = ki("u"), Ts = ki(
  "bum"
), K0 = ki("um"), _x = ki(
  "sp"
), wx = ki("rtg"), xx = ki("rtc");
function Sx(e, t = Cn) {
  Ic("ec", e, t);
}
const kx = "components", W0 = /* @__PURE__ */ Symbol.for("v-ndc");
function Mx(e) {
  return nn(e) ? Nx(kx, e, !1) || e : e || W0;
}
function Nx(e, t, n = !0, r = !1) {
  const o = rr || Cn;
  if (o) {
    const a = o.type;
    {
      const u = uS(
        a,
        !1
      );
      if (u && (u === t || u === $n(t) || u === Mc($n(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      gm(o[e] || a[e], t) || // global registration
      gm(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function gm(e, t) {
  return e && (e[t] || e[$n(t)] || e[Mc($n(t))]);
}
function wt(e, t, n, r) {
  let o;
  const a = n, c = Ze(e);
  if (c || nn(e)) {
    const u = c && /* @__PURE__ */ mo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ gr(e), b = /* @__PURE__ */ xi(e), e = Pc(e)), o = new Array(e.length);
    for (let y = 0, v = e.length; y < v; y++)
      o[y] = t(
        d ? b ? pa(Or(e[y])) : Or(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Pt(e))
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
const Pf = (e) => e ? dy(e) ? Tc(e) : Pf(e.parent) : null, ps = (
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
    $parent: (e) => Pf(e.parent),
    $root: (e) => Pf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => U0(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Md(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Cc.bind(e.proxy)),
    $watch: (e) => ux.bind(e)
  })
), Lu = (e, t) => e !== Ot && !e.__isScriptSetup && _t(e, t), Px = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
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
        if (Lu(r, t))
          return c[t] = 1, r[t];
        if (o !== Ot && _t(o, t))
          return c[t] = 2, o[t];
        if (_t(a, t))
          return c[t] = 3, a[t];
        if (n !== Ot && _t(n, t))
          return c[t] = 4, n[t];
        Af && (c[t] = 0);
      }
    }
    const b = ps[t];
    let y, v;
    if (b)
      return t === "$attrs" && Pn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Ot && _t(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, _t(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Lu(o, t) ? (o[t] = n, !0) : r !== Ot && _t(r, t) ? (r[t] = n, !0) : _t(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ot && u[0] !== "$" && _t(e, u) || Lu(t, u) || _t(a, u) || _t(r, u) || _t(ps, u) || _t(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : _t(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ym(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Af = !0;
function Ax(e) {
  const t = U0(e), n = e.proxy, r = e.ctx;
  Af = !1, t.beforeCreate && bm(t.beforeCreate, e, "bc");
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
    mounted: w,
    beforeUpdate: N,
    updated: k,
    activated: P,
    deactivated: E,
    beforeDestroy: L,
    beforeUnmount: S,
    destroyed: W,
    unmounted: j,
    render: F,
    renderTracked: G,
    renderTriggered: A,
    errorCaptured: ee,
    serverPrefetch: Se,
    // public API
    expose: K,
    inheritAttrs: R,
    // assets
    components: se,
    directives: Pe,
    filters: J
  } = t;
  if (b && Cx(b, r, null), c)
    for (const V in c) {
      const Z = c[V];
      it(Z) && (r[V] = Z.bind(n));
    }
  if (o) {
    const V = o.call(n, n);
    Pt(V) && (e.data = /* @__PURE__ */ va(V));
  }
  if (Af = !0, a)
    for (const V in a) {
      const Z = a[V], te = it(Z) ? Z.bind(n, n) : it(Z.get) ? Z.get.bind(n, n) : Xr, de = !it(Z) && it(Z.set) ? Z.set.bind(n) : Xr, Ce = dt({
        get: te,
        set: de
      });
      Object.defineProperty(r, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (T) => Ce.value = T
      });
    }
  if (u)
    for (const V in u)
      B0(u[V], r, n, V);
  if (d) {
    const V = it(d) ? d.call(n) : d;
    Reflect.ownKeys(V).forEach((Z) => {
      sx(Z, V[Z]);
    });
  }
  y && bm(y, e, "c");
  function X(V, Z) {
    Ze(Z) ? Z.forEach((te) => V(te.bind(n))) : Z && V(Z.bind(n));
  }
  if (X(yx, v), X(Oc, w), X(bx, N), X(vx, k), X(hx, P), X(mx, E), X(Sx, ee), X(xx, G), X(wx, A), X(Ts, S), X(K0, j), X(_x, Se), Ze(K))
    if (K.length) {
      const V = e.exposed || (e.exposed = {});
      K.forEach((Z) => {
        Object.defineProperty(V, Z, {
          get: () => n[Z],
          set: (te) => n[Z] = te,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === Xr && (e.render = F), R != null && (e.inheritAttrs = R), se && (e.components = se), Pe && (e.directives = Pe), Se && j0(e);
}
function Cx(e, t, n = Xr) {
  Ze(e) && (e = Cf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Pt(o) ? "default" in o ? a = Al(
      o.from || r,
      o.default,
      !0
    ) : a = Al(o.from || r) : a = Al(o), /* @__PURE__ */ On(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function bm(e, t, n) {
  Zr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function B0(e, t, n, r) {
  let o = r.includes(".") ? z0(n, r) : () => n[r];
  if (nn(e)) {
    const a = t[e];
    it(a) && go(o, a);
  } else if (it(e))
    go(o, e.bind(n));
  else if (Pt(e))
    if (Ze(e))
      e.forEach((a) => B0(a, t, n, r));
    else {
      const a = it(e.handler) ? e.handler.bind(n) : t[e.handler];
      it(a) && go(o, a, e);
    }
}
function U0(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => ql(d, b, c, !0)
  ), ql(d, t, c)), Pt(t) && a.set(t, d), d;
}
function ql(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && ql(e, a, n, !0), o && o.forEach(
    (c) => ql(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = Ix[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Ix = {
  data: vm,
  props: _m,
  emits: _m,
  // objects
  methods: es,
  computed: es,
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
  components: es,
  directives: es,
  // watch
  watch: Ex,
  // provide / inject
  provide: vm,
  inject: Ox
};
function vm(e, t) {
  return t ? e ? function() {
    return En(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ox(e, t) {
  return es(Cf(e), Cf(t));
}
function Cf(e) {
  if (Ze(e)) {
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
function es(e, t) {
  return e ? En(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _m(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : En(
    /* @__PURE__ */ Object.create(null),
    ym(e),
    ym(t ?? {})
  ) : t;
}
function Ex(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = En(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Rn(e[r], t[r]);
  return n;
}
function Y0() {
  return {
    app: null,
    config: {
      isNativeTag: c0,
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
let Fx = 0;
function Tx(e, t) {
  return function(r, o = null) {
    it(r) || (r = En({}, r)), o != null && !Pt(o) && (o = null);
    const a = Y0(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Fx++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: dS,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...v) {
        return c.has(y) || (y && it(y.install) ? (c.add(y), y.install(b, ...v)) : it(y) && (c.add(y), y(b, ...v))), b;
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
      mount(y, v, w) {
        if (!d) {
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(N, y, w), d = !0, b._container = y, y.__vue_app__ = b, Tc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (Zr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, v) {
        return a.provides[y] = v, b;
      },
      runWithContext(y) {
        const v = oa;
        oa = b;
        try {
          return y();
        } finally {
          oa = v;
        }
      }
    };
    return b;
  };
}
let oa = null;
const Dx = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$n(t)}Modifiers`] || e[`${ko(t)}Modifiers`];
function Lx(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ot;
  let o = n;
  const a = t.startsWith("update:"), c = a && Dx(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => nn(y) ? y.trim() : y)), c.number && (o = n.map(gd)));
  let u, d = r[u = Ou(t)] || // also try camelCase event handler (#2249)
  r[u = Ou($n(t))];
  !d && a && (d = r[u = Ou(ko(t))]), d && Zr(
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
    e.emitted[u] = !0, Zr(
      b,
      e,
      6,
      o
    );
  }
}
const Rx = /* @__PURE__ */ new WeakMap();
function X0(e, t, n = !1) {
  const r = n ? Rx : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!it(e)) {
    const d = (b) => {
      const y = X0(b, t, !0);
      y && (u = !0, En(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Pt(e) && r.set(e, null), null) : (Ze(a) ? a.forEach((d) => c[d] = null) : En(c, a), Pt(e) && r.set(e, c), c);
}
function Ec(e, t) {
  return !e || !xc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _t(e, t[0].toLowerCase() + t.slice(1)) || _t(e, ko(t)) || _t(e, t));
}
function wm(e) {
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
    data: w,
    setupState: N,
    ctx: k,
    inheritAttrs: P
  } = e, E = Yl(e);
  let L, S;
  try {
    if (n.shapeFlag & 4) {
      const j = o || r, F = j;
      L = Br(
        b.call(
          F,
          j,
          y,
          v,
          N,
          w,
          k
        )
      ), S = u;
    } else {
      const j = t;
      L = Br(
        j.length > 1 ? j(
          v,
          { attrs: u, slots: c, emit: d }
        ) : j(
          v,
          null
        )
      ), S = t.props ? u : Vx(u);
    }
  } catch (j) {
    hs.length = 0, Ac(j, e, 1), L = De(zi);
  }
  let W = L;
  if (S && P !== !1) {
    const j = Object.keys(S), { shapeFlag: F } = W;
    j.length && F & 7 && (a && j.some(Sc) && (S = $x(
      S,
      a
    )), W = ha(W, S, !1, !0));
  }
  return n.dirs && (W = ha(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition && Nd(W, n.transition), L = W, Yl(E), L;
}
const Vx = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || xc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, $x = (e, t) => {
  const n = {};
  for (const r in e)
    (!Sc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function zx(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? xm(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const w = y[v];
        if (q0(c, r, w) && !Ec(b, w))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? xm(r, c, b) : !0 : !!c;
  return !1;
}
function xm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (q0(t, e, a) && !Ec(n, a))
      return !0;
  }
  return !1;
}
function q0(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Pt(r) && Pt(o) ? !yd(r, o) : r !== o;
}
function jx({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const J0 = {}, Z0 = () => Object.create(J0), Q0 = (e) => Object.getPrototypeOf(e) === J0;
function Hx(e, t, n, r = !1) {
  const o = {}, a = Z0();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ey(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ Xw(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Gx(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ vt(o), [d] = e.propsOptions;
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
        let w = y[v];
        if (Ec(e.emitsOptions, w))
          continue;
        const N = t[w];
        if (d)
          if (_t(a, w))
            N !== a[w] && (a[w] = N, b = !0);
          else {
            const k = $n(w);
            o[k] = If(
              d,
              u,
              k,
              N,
              e,
              !1
            );
          }
        else
          N !== a[w] && (a[w] = N, b = !0);
      }
    }
  } else {
    ey(e, t, o, a) && (b = !0);
    let y;
    for (const v in u)
      (!t || // for camelCase
      !_t(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = ko(v)) === v || !_t(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = If(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !_t(t, v)) && (delete a[v], b = !0);
  }
  b && hi(e.attrs, "set", "");
}
function ey(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ls(d))
        continue;
      const b = t[d];
      let y;
      o && _t(o, y = $n(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Ec(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ vt(n), b = u || Ot;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = If(
        o,
        d,
        v,
        b[v],
        e,
        !_t(b, v)
      );
    }
  }
  return c;
}
function If(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = _t(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && it(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = Ds(o);
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
    ] && (r === "" || r === ko(n)) && (r = !0));
  }
  return r;
}
const Kx = /* @__PURE__ */ new WeakMap();
function ty(e, t, n = !1) {
  const r = n ? Kx : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!it(e)) {
    const y = (v) => {
      d = !0;
      const [w, N] = ty(v, t, !0);
      En(c, w), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return Pt(e) && r.set(e, na), na;
  if (Ze(a))
    for (let y = 0; y < a.length; y++) {
      const v = $n(a[y]);
      Sm(v) && (c[v] = Ot);
    }
  else if (a)
    for (const y in a) {
      const v = $n(y);
      if (Sm(v)) {
        const w = a[y], N = c[v] = Ze(w) || it(w) ? { type: w } : En({}, w), k = N.type;
        let P = !1, E = !0;
        if (Ze(k))
          for (let L = 0; L < k.length; ++L) {
            const S = k[L], W = it(S) && S.name;
            if (W === "Boolean") {
              P = !0;
              break;
            } else W === "String" && (E = !1);
          }
        else
          P = it(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = P, N[
          1
          /* shouldCastTrue */
        ] = E, (P || _t(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Pt(e) && r.set(e, b), b;
}
function Sm(e) {
  return e[0] !== "$" && !ls(e);
}
const Pd = (e) => e === "_" || e === "_ctx" || e === "$stable", Ad = (e) => Ze(e) ? e.map(Br) : [Br(e)], Wx = (e, t, n) => {
  if (t._n)
    return t;
  const r = V0((...o) => Ad(t(...o)), n);
  return r._c = !1, r;
}, ny = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Pd(o)) continue;
    const a = e[o];
    if (it(a))
      t[o] = Wx(o, a, r);
    else if (a != null) {
      const c = Ad(a);
      t[o] = () => c;
    }
  }
}, ry = (e, t) => {
  const n = Ad(t);
  e.slots.default = () => n;
}, iy = (e, t, n) => {
  for (const r in t)
    (n || !Pd(r)) && (e[r] = t[r]);
}, Bx = (e, t, n) => {
  const r = e.slots = Z0();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (iy(r, t, n), n && h0(r, "_", o, !0)) : ny(t, r);
  } else t && ry(e, t);
}, Ux = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ot;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : iy(o, t, n) : (a = !t.$stable, ny(t, o)), c = t;
  } else t && (ry(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !Pd(u) && c[u] == null && delete o[u];
}, Un = Zx;
function Yx(e) {
  return Xx(e);
}
function Xx(e, t) {
  const n = Nc();
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
    nextSibling: w,
    setScopeId: N = Xr,
    insertStaticContent: k
  } = e, P = ($, B, re, _e = null, me = null, pe = null, Ae = void 0, be = null, ke = !!B.dynamicChildren) => {
    if ($ === B)
      return;
    $ && !Ba($, B) && (_e = _n($), T($, me, pe, !0), $ = null), B.patchFlag === -2 && (ke = !1, B.dynamicChildren = null);
    const { type: fe, ref: $e, shapeFlag: Ie } = B;
    switch (fe) {
      case Fc:
        E($, B, re, _e);
        break;
      case zi:
        L($, B, re, _e);
        break;
      case Vu:
        $ == null && S(B, re, _e, Ae);
        break;
      case Ue:
        se(
          $,
          B,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke
        );
        break;
      default:
        Ie & 1 ? F(
          $,
          B,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke
        ) : Ie & 6 ? Pe(
          $,
          B,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke
        ) : (Ie & 64 || Ie & 128) && fe.process(
          $,
          B,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke,
          pt
        );
    }
    $e != null && me ? fs($e, $ && $.ref, pe, B || $, !B) : $e == null && $ && $.ref != null && fs($.ref, null, pe, $, !0);
  }, E = ($, B, re, _e) => {
    if ($ == null)
      r(
        B.el = u(B.children),
        re,
        _e
      );
    else {
      const me = B.el = $.el;
      B.children !== $.children && b(me, B.children);
    }
  }, L = ($, B, re, _e) => {
    $ == null ? r(
      B.el = d(B.children || ""),
      re,
      _e
    ) : B.el = $.el;
  }, S = ($, B, re, _e) => {
    [$.el, $.anchor] = k(
      $.children,
      B,
      re,
      _e,
      $.el,
      $.anchor
    );
  }, W = ({ el: $, anchor: B }, re, _e) => {
    let me;
    for (; $ && $ !== B; )
      me = w($), r($, re, _e), $ = me;
    r(B, re, _e);
  }, j = ({ el: $, anchor: B }) => {
    let re;
    for (; $ && $ !== B; )
      re = w($), o($), $ = re;
    o(B);
  }, F = ($, B, re, _e, me, pe, Ae, be, ke) => {
    if (B.type === "svg" ? Ae = "svg" : B.type === "math" && (Ae = "mathml"), $ == null)
      G(
        B,
        re,
        _e,
        me,
        pe,
        Ae,
        be,
        ke
      );
    else {
      const fe = $.el && $.el._isVueCE ? $.el : null;
      try {
        fe && fe._beginPatch(), Se(
          $,
          B,
          me,
          pe,
          Ae,
          be,
          ke
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, G = ($, B, re, _e, me, pe, Ae, be) => {
    let ke, fe;
    const { props: $e, shapeFlag: Ie, transition: Le, dirs: je } = $;
    if (ke = $.el = c(
      $.type,
      pe,
      $e && $e.is,
      $e
    ), Ie & 8 ? y(ke, $.children) : Ie & 16 && ee(
      $.children,
      ke,
      null,
      _e,
      me,
      Ru($, pe),
      Ae,
      be
    ), je && eo($, null, _e, "created"), A(ke, $, $.scopeId, Ae, _e), $e) {
      for (const ft in $e)
        ft !== "value" && !ls(ft) && a(ke, ft, null, $e[ft], pe, _e);
      "value" in $e && a(ke, "value", null, $e.value, pe), (fe = $e.onVnodeBeforeMount) && $r(fe, _e, $);
    }
    je && eo($, null, _e, "beforeMount");
    const at = qx(me, Le);
    at && Le.beforeEnter(ke), r(ke, B, re), ((fe = $e && $e.onVnodeMounted) || at || je) && Un(() => {
      try {
        fe && $r(fe, _e, $), at && Le.enter(ke), je && eo($, null, _e, "mounted");
      } finally {
      }
    }, me);
  }, A = ($, B, re, _e, me) => {
    if (re && N($, re), _e)
      for (let pe = 0; pe < _e.length; pe++)
        N($, _e[pe]);
    if (me) {
      let pe = me.subTree;
      if (B === pe || ly(pe.type) && (pe.ssContent === B || pe.ssFallback === B)) {
        const Ae = me.vnode;
        A(
          $,
          Ae,
          Ae.scopeId,
          Ae.slotScopeIds,
          me.parent
        );
      }
    }
  }, ee = ($, B, re, _e, me, pe, Ae, be, ke = 0) => {
    for (let fe = ke; fe < $.length; fe++) {
      const $e = $[fe] = be ? di($[fe]) : Br($[fe]);
      P(
        null,
        $e,
        B,
        re,
        _e,
        me,
        pe,
        Ae,
        be
      );
    }
  }, Se = ($, B, re, _e, me, pe, Ae) => {
    const be = B.el = $.el;
    let { patchFlag: ke, dynamicChildren: fe, dirs: $e } = B;
    ke |= $.patchFlag & 16;
    const Ie = $.props || Ot, Le = B.props || Ot;
    let je;
    if (re && to(re, !1), (je = Le.onVnodeBeforeUpdate) && $r(je, re, B, $), $e && eo(B, $, re, "beforeUpdate"), re && to(re, !0), (Ie.innerHTML && Le.innerHTML == null || Ie.textContent && Le.textContent == null) && y(be, ""), fe ? K(
      $.dynamicChildren,
      fe,
      be,
      re,
      _e,
      Ru(B, me),
      pe
    ) : Ae || Z(
      $,
      B,
      be,
      null,
      re,
      _e,
      Ru(B, me),
      pe,
      !1
    ), ke > 0) {
      if (ke & 16)
        R(be, Ie, Le, re, me);
      else if (ke & 2 && Ie.class !== Le.class && a(be, "class", null, Le.class, me), ke & 4 && a(be, "style", Ie.style, Le.style, me), ke & 8) {
        const at = B.dynamicProps;
        for (let ft = 0; ft < at.length; ft++) {
          const yt = at[ft], ut = Ie[yt], Wt = Le[yt];
          (Wt !== ut || yt === "value") && a(be, yt, ut, Wt, me, re);
        }
      }
      ke & 1 && $.children !== B.children && y(be, B.children);
    } else !Ae && fe == null && R(be, Ie, Le, re, me);
    ((je = Le.onVnodeUpdated) || $e) && Un(() => {
      je && $r(je, re, B, $), $e && eo(B, $, re, "updated");
    }, _e);
  }, K = ($, B, re, _e, me, pe, Ae) => {
    for (let be = 0; be < B.length; be++) {
      const ke = $[be], fe = B[be], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ke.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ke.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ba(ke, fe) || // - In the case of a component, it could contain anything.
        ke.shapeFlag & 198) ? v(ke.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      P(
        ke,
        fe,
        $e,
        null,
        _e,
        me,
        pe,
        Ae,
        !0
      );
    }
  }, R = ($, B, re, _e, me) => {
    if (B !== re) {
      if (B !== Ot)
        for (const pe in B)
          !ls(pe) && !(pe in re) && a(
            $,
            pe,
            B[pe],
            null,
            me,
            _e
          );
      for (const pe in re) {
        if (ls(pe)) continue;
        const Ae = re[pe], be = B[pe];
        Ae !== be && pe !== "value" && a($, pe, be, Ae, me, _e);
      }
      "value" in re && a($, "value", B.value, re.value, me);
    }
  }, se = ($, B, re, _e, me, pe, Ae, be, ke) => {
    const fe = B.el = $ ? $.el : u(""), $e = B.anchor = $ ? $.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: Le, slotScopeIds: je } = B;
    je && (be = be ? be.concat(je) : je), $ == null ? (r(fe, re, _e), r($e, re, _e), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      re,
      $e,
      me,
      pe,
      Ae,
      be,
      ke
    )) : Ie > 0 && Ie & 64 && Le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    $.dynamicChildren && $.dynamicChildren.length === Le.length ? (K(
      $.dynamicChildren,
      Le,
      re,
      me,
      pe,
      Ae,
      be
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || me && B === me.subTree) && oy(
      $,
      B,
      !0
      /* shallow */
    )) : Z(
      $,
      B,
      re,
      $e,
      me,
      pe,
      Ae,
      be,
      ke
    );
  }, Pe = ($, B, re, _e, me, pe, Ae, be, ke) => {
    B.slotScopeIds = be, $ == null ? B.shapeFlag & 512 ? me.ctx.activate(
      B,
      re,
      _e,
      Ae,
      ke
    ) : J(
      B,
      re,
      _e,
      me,
      pe,
      Ae,
      ke
    ) : O($, B, ke);
  }, J = ($, B, re, _e, me, pe, Ae) => {
    const be = $.component = iS(
      $,
      _e,
      me
    );
    if (H0($) && (be.ctx.renderer = pt), aS(be, !1, Ae), be.asyncDep) {
      if (me && me.registerDep(be, X, Ae), !$.el) {
        const ke = be.subTree = De(zi);
        L(null, ke, B, re), $.placeholder = ke.el;
      }
    } else
      X(
        be,
        $,
        B,
        re,
        me,
        pe,
        Ae
      );
  }, O = ($, B, re) => {
    const _e = B.component = $.component;
    if (zx($, B, re))
      if (_e.asyncDep && !_e.asyncResolved) {
        V(_e, B, re);
        return;
      } else
        _e.next = B, _e.update();
    else
      B.el = $.el, _e.vnode = B;
  }, X = ($, B, re, _e, me, pe, Ae) => {
    const be = () => {
      if ($.isMounted) {
        let { next: Ie, bu: Le, u: je, parent: at, vnode: ft } = $;
        {
          const Ye = ay($);
          if (Ye) {
            Ie && (Ie.el = ft.el, V($, Ie, Ae)), Ye.asyncDep.then(() => {
              Un(() => {
                $.isUnmounted || fe();
              }, me);
            });
            return;
          }
        }
        let yt = Ie, ut;
        to($, !1), Ie ? (Ie.el = ft.el, V($, Ie, Ae)) : Ie = ft, Le && Pl(Le), (ut = Ie.props && Ie.props.onVnodeBeforeUpdate) && $r(ut, at, Ie, ft), to($, !0);
        const Wt = wm($), h = $.subTree;
        $.subTree = Wt, P(
          h,
          Wt,
          // parent may have changed if it's in a teleport
          v(h.el),
          // anchor may have changed if it's in a fragment
          _n(h),
          $,
          me,
          pe
        ), Ie.el = Wt.el, yt === null && jx($, Wt.el), je && Un(je, me), (ut = Ie.props && Ie.props.onVnodeUpdated) && Un(
          () => $r(ut, at, Ie, ft),
          me
        );
      } else {
        let Ie;
        const { el: Le, props: je } = B, { bm: at, m: ft, parent: yt, root: ut, type: Wt } = $, h = ds(B);
        to($, !1), at && Pl(at), !h && (Ie = je && je.onVnodeBeforeMount) && $r(Ie, yt, B), to($, !0);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(
            Wt,
            $.parent ? $.parent.type : void 0
          );
          const Ye = $.subTree = wm($);
          P(
            null,
            Ye,
            re,
            _e,
            $,
            me,
            pe
          ), B.el = Ye.el;
        }
        if (ft && Un(ft, me), !h && (Ie = je && je.onVnodeMounted)) {
          const Ye = B;
          Un(
            () => $r(Ie, yt, Ye),
            me
          );
        }
        (B.shapeFlag & 256 || yt && ds(yt.vnode) && yt.vnode.shapeFlag & 256) && $.a && Un($.a, me), $.isMounted = !0, B = re = _e = null;
      }
    };
    $.scope.on();
    const ke = $.effect = new b0(be);
    $.scope.off();
    const fe = $.update = ke.run.bind(ke), $e = $.job = ke.runIfDirty.bind(ke);
    $e.i = $, $e.id = $.uid, ke.scheduler = () => Md($e), to($, !0), fe();
  }, V = ($, B, re) => {
    B.component = $;
    const _e = $.vnode.props;
    $.vnode = B, $.next = null, Gx($, B.props, _e, re), Ux($, B.children, re), _i(), pm($), wi();
  }, Z = ($, B, re, _e, me, pe, Ae, be, ke = !1) => {
    const fe = $ && $.children, $e = $ ? $.shapeFlag : 0, Ie = B.children, { patchFlag: Le, shapeFlag: je } = B;
    if (Le > 0) {
      if (Le & 128) {
        de(
          fe,
          Ie,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke
        );
        return;
      } else if (Le & 256) {
        te(
          fe,
          Ie,
          re,
          _e,
          me,
          pe,
          Ae,
          be,
          ke
        );
        return;
      }
    }
    je & 8 ? ($e & 16 && At(fe, me, pe), Ie !== fe && y(re, Ie)) : $e & 16 ? je & 16 ? de(
      fe,
      Ie,
      re,
      _e,
      me,
      pe,
      Ae,
      be,
      ke
    ) : At(fe, me, pe, !0) : ($e & 8 && y(re, ""), je & 16 && ee(
      Ie,
      re,
      _e,
      me,
      pe,
      Ae,
      be,
      ke
    ));
  }, te = ($, B, re, _e, me, pe, Ae, be, ke) => {
    $ = $ || na, B = B || na;
    const fe = $.length, $e = B.length, Ie = Math.min(fe, $e);
    let Le;
    for (Le = 0; Le < Ie; Le++) {
      const je = B[Le] = ke ? di(B[Le]) : Br(B[Le]);
      P(
        $[Le],
        je,
        re,
        null,
        me,
        pe,
        Ae,
        be,
        ke
      );
    }
    fe > $e ? At(
      $,
      me,
      pe,
      !0,
      !1,
      Ie
    ) : ee(
      B,
      re,
      _e,
      me,
      pe,
      Ae,
      be,
      ke,
      Ie
    );
  }, de = ($, B, re, _e, me, pe, Ae, be, ke) => {
    let fe = 0;
    const $e = B.length;
    let Ie = $.length - 1, Le = $e - 1;
    for (; fe <= Ie && fe <= Le; ) {
      const je = $[fe], at = B[fe] = ke ? di(B[fe]) : Br(B[fe]);
      if (Ba(je, at))
        P(
          je,
          at,
          re,
          null,
          me,
          pe,
          Ae,
          be,
          ke
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ie && fe <= Le; ) {
      const je = $[Ie], at = B[Le] = ke ? di(B[Le]) : Br(B[Le]);
      if (Ba(je, at))
        P(
          je,
          at,
          re,
          null,
          me,
          pe,
          Ae,
          be,
          ke
        );
      else
        break;
      Ie--, Le--;
    }
    if (fe > Ie) {
      if (fe <= Le) {
        const je = Le + 1, at = je < $e ? B[je].el : _e;
        for (; fe <= Le; )
          P(
            null,
            B[fe] = ke ? di(B[fe]) : Br(B[fe]),
            re,
            at,
            me,
            pe,
            Ae,
            be,
            ke
          ), fe++;
      }
    } else if (fe > Le)
      for (; fe <= Ie; )
        T($[fe], me, pe, !0), fe++;
    else {
      const je = fe, at = fe, ft = /* @__PURE__ */ new Map();
      for (fe = at; fe <= Le; fe++) {
        const rn = B[fe] = ke ? di(B[fe]) : Br(B[fe]);
        rn.key != null && ft.set(rn.key, fe);
      }
      let yt, ut = 0;
      const Wt = Le - at + 1;
      let h = !1, Ye = 0;
      const zn = new Array(Wt);
      for (fe = 0; fe < Wt; fe++) zn[fe] = 0;
      for (fe = je; fe <= Ie; fe++) {
        const rn = $[fe];
        if (ut >= Wt) {
          T(rn, me, pe, !0);
          continue;
        }
        let yn;
        if (rn.key != null)
          yn = ft.get(rn.key);
        else
          for (yt = at; yt <= Le; yt++)
            if (zn[yt - at] === 0 && Ba(rn, B[yt])) {
              yn = yt;
              break;
            }
        yn === void 0 ? T(rn, me, pe, !0) : (zn[yn - at] = fe + 1, yn >= Ye ? Ye = yn : h = !0, P(
          rn,
          B[yn],
          re,
          null,
          me,
          pe,
          Ae,
          be,
          ke
        ), ut++);
      }
      const Qt = h ? Jx(zn) : na;
      for (yt = Qt.length - 1, fe = Wt - 1; fe >= 0; fe--) {
        const rn = at + fe, yn = B[rn], Er = B[rn + 1], on = rn + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Er.el || sy(Er)
        ) : _e;
        zn[fe] === 0 ? P(
          null,
          yn,
          re,
          on,
          me,
          pe,
          Ae,
          be,
          ke
        ) : h && (yt < 0 || fe !== Qt[yt] ? Ce(yn, re, on, 2) : yt--);
      }
    }
  }, Ce = ($, B, re, _e, me = null) => {
    const { el: pe, type: Ae, transition: be, children: ke, shapeFlag: fe } = $;
    if (fe & 6) {
      Ce($.component.subTree, B, re, _e);
      return;
    }
    if (fe & 128) {
      $.suspense.move(B, re, _e);
      return;
    }
    if (fe & 64) {
      Ae.move($, B, re, pt);
      return;
    }
    if (Ae === Ue) {
      r(pe, B, re);
      for (let Ie = 0; Ie < ke.length; Ie++)
        Ce(ke[Ie], B, re, _e);
      r($.anchor, B, re);
      return;
    }
    if (Ae === Vu) {
      W($, B, re);
      return;
    }
    if (_e !== 2 && fe & 1 && be)
      if (_e === 0)
        be.beforeEnter(pe), r(pe, B, re), Un(() => be.enter(pe), me);
      else {
        const { leave: Ie, delayLeave: Le, afterLeave: je } = be, at = () => {
          $.ctx.isUnmounted ? o(pe) : r(pe, B, re);
        }, ft = () => {
          pe._isLeaving && pe[px](
            !0
            /* cancelled */
          ), Ie(pe, () => {
            at(), je && je();
          });
        };
        Le ? Le(pe, at, ft) : ft();
      }
    else
      r(pe, B, re);
  }, T = ($, B, re, _e = !1, me = !1) => {
    const {
      type: pe,
      props: Ae,
      ref: be,
      children: ke,
      dynamicChildren: fe,
      shapeFlag: $e,
      patchFlag: Ie,
      dirs: Le,
      cacheIndex: je,
      memo: at
    } = $;
    if (Ie === -2 && (me = !1), be != null && (_i(), fs(be, null, re, $, !0), wi()), je != null && (B.renderCache[je] = void 0), $e & 256) {
      B.ctx.deactivate($);
      return;
    }
    const ft = $e & 1 && Le, yt = !ds($);
    let ut;
    if (yt && (ut = Ae && Ae.onVnodeBeforeUnmount) && $r(ut, B, $), $e & 6)
      gn($.component, re, _e);
    else {
      if ($e & 128) {
        $.suspense.unmount(re, _e);
        return;
      }
      ft && eo($, null, B, "beforeUnmount"), $e & 64 ? $.type.remove(
        $,
        B,
        re,
        pt,
        _e
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (pe !== Ue || Ie > 0 && Ie & 64) ? At(
        fe,
        B,
        re,
        !1,
        !0
      ) : (pe === Ue && Ie & 384 || !me && $e & 16) && At(ke, B, re), _e && ht($);
    }
    const Wt = at != null && je == null;
    (yt && (ut = Ae && Ae.onVnodeUnmounted) || ft || Wt) && Un(() => {
      ut && $r(ut, B, $), ft && eo($, null, B, "unmounted"), Wt && ($.el = null);
    }, re);
  }, ht = ($) => {
    const { type: B, el: re, anchor: _e, transition: me } = $;
    if (B === Ue) {
      we(re, _e);
      return;
    }
    if (B === Vu) {
      j($);
      return;
    }
    const pe = () => {
      o(re), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if ($.shapeFlag & 1 && me && !me.persisted) {
      const { leave: Ae, delayLeave: be } = me, ke = () => Ae(re, pe);
      be ? be($.el, pe, ke) : ke();
    } else
      pe();
  }, we = ($, B) => {
    let re;
    for (; $ !== B; )
      re = w($), o($), $ = re;
    o(B);
  }, gn = ($, B, re) => {
    const { bum: _e, scope: me, job: pe, subTree: Ae, um: be, m: ke, a: fe } = $;
    km(ke), km(fe), _e && Pl(_e), me.stop(), pe && (pe.flags |= 8, T(Ae, $, B, re)), be && Un(be, B), Un(() => {
      $.isUnmounted = !0;
    }, B);
  }, At = ($, B, re, _e = !1, me = !1, pe = 0) => {
    for (let Ae = pe; Ae < $.length; Ae++)
      T($[Ae], B, re, _e, me);
  }, _n = ($) => {
    if ($.shapeFlag & 6)
      return _n($.component.subTree);
    if ($.shapeFlag & 128)
      return $.suspense.next();
    const B = w($.anchor || $.el), re = B && B[fx];
    return re ? w(re) : B;
  };
  let xt = !1;
  const Zt = ($, B, re) => {
    let _e;
    $ == null ? B._vnode && (T(B._vnode, null, null, !0), _e = B._vnode.component) : P(
      B._vnode || null,
      $,
      B,
      null,
      null,
      null,
      re
    ), B._vnode = $, xt || (xt = !0, pm(_e), D0(), xt = !1);
  }, pt = {
    p: P,
    um: T,
    m: Ce,
    r: ht,
    mt: J,
    mc: ee,
    pc: Z,
    pbc: K,
    n: _n,
    o: e
  };
  return {
    render: Zt,
    hydrate: void 0,
    createApp: Tx(Zt)
  };
}
function Ru({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function to({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function qx(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oy(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ze(r) && Ze(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = di(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && oy(c, u)), u.type === Fc && (u.patchFlag === -1 && (u = o[a] = di(u)), u.el = c.el), u.type === zi && !u.el && (u.el = c.el);
    }
}
function Jx(e) {
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
function ay(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ay(t);
}
function km(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function sy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? sy(t.subTree) : null;
}
const ly = (e) => e.__isSuspense;
function Zx(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : ax(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), Fc = /* @__PURE__ */ Symbol.for("v-txt"), zi = /* @__PURE__ */ Symbol.for("v-cmt"), Vu = /* @__PURE__ */ Symbol.for("v-stc"), hs = [];
let ir = null;
function ne(e = !1) {
  hs.push(ir = e ? null : []);
}
function Qx() {
  hs.pop(), ir = hs[hs.length - 1] || null;
}
let ws = 1;
function Mm(e, t = !1) {
  ws += e, e < 0 && ir && t && (ir.hasOnce = !0);
}
function cy(e) {
  return e.dynamicChildren = ws > 0 ? ir || na : null, Qx(), ws > 0 && ir && ir.push(e), e;
}
function ue(e, t, n, r, o, a) {
  return cy(
    U(
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
  return cy(
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
function uy(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ba(e, t) {
  return e.type === t.type && e.key === t.key;
}
const fy = ({ key: e }) => e ?? null, Cl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nn(e) || /* @__PURE__ */ On(e) || it(e) ? { i: rr, r: e, k: t, f: !!n } : e : null);
function U(e, t = null, n = null, r = 0, o = null, a = e === Ue ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && fy(t),
    ref: t && Cl(t),
    scopeId: R0,
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
    ctx: rr
  };
  return u ? (Cd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= nn(n) ? 8 : 16), ws > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ir && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ir.push(d), d;
}
const De = eS;
function eS(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === W0) && (e = zi), uy(e)) {
    const u = ha(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cd(u, n), ws > 0 && !a && ir && (u.shapeFlag & 6 ? ir[ir.indexOf(e)] = u : ir.push(u)), u.patchFlag = -2, u;
  }
  if (fS(e) && (e = e.__vccOpts), t) {
    t = tS(t);
    let { class: u, style: d } = t;
    u && !nn(u) && (t.class = lt(u)), Pt(d) && (/* @__PURE__ */ kd(d) && !Ze(d) && (d = En({}, d)), t.style = Mt(d));
  }
  const c = nn(e) ? 1 : ly(e) ? 128 : dx(e) ? 64 : Pt(e) ? 4 : it(e) ? 2 : 0;
  return U(
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
function tS(e) {
  return e ? /* @__PURE__ */ kd(e) || Q0(e) ? En({}, e) : e : null;
}
function ha(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? pi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && fy(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ze(a) ? a.concat(Cl(t)) : [a, Cl(t)] : Cl(t)
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
    patchFlag: t && e.type !== Ue ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && ha(e.ssContent),
    ssFallback: e.ssFallback && ha(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Nd(
    y,
    d.clone(y)
  ), y;
}
function ts(e = " ", t = 0) {
  return De(Fc, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ne(), br(zi, null, e)) : De(zi, null, e);
}
function Br(e) {
  return e == null || typeof e == "boolean" ? De(zi) : Ze(e) ? De(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : uy(e) ? di(e) : De(Fc, null, String(e));
}
function di(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ha(e);
}
function Cd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Cd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Q0(t) ? t._ctx = rr : o === 3 && rr && (rr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else it(t) ? (t = { default: t, _ctx: rr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ts(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = lt([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (xc(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Ze(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function $r(e, t, n, r = null) {
  Zr(e, t, 7, [
    n,
    r
  ]);
}
const nS = Y0();
let rS = 0;
function iS(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || nS, a = {
    uid: rS++,
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
    scope: new Cw(
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
    propsOptions: ty(r, o),
    emitsOptions: X0(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ot,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ot,
    data: Ot,
    props: Ot,
    attrs: Ot,
    slots: Ot,
    refs: Ot,
    setupState: Ot,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Lx.bind(null, a), e.ce && e.ce(a), a;
}
let Cn = null;
const oS = () => Cn || rr;
let Jl, Of;
{
  const e = Nc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  Jl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Cn = n
  ), Of = t(
    "__VUE_SSR_SETTERS__",
    (n) => xs = n
  );
}
const Ds = (e) => {
  const t = Cn;
  return Jl(e), e.scope.on(), () => {
    e.scope.off(), Jl(t);
  };
}, Nm = () => {
  Cn && Cn.scope.off(), Jl(null);
};
function dy(e) {
  return e.vnode.shapeFlag & 4;
}
let xs = !1;
function aS(e, t = !1, n = !1) {
  t && Of(t);
  const { props: r, children: o } = e.vnode, a = dy(e);
  Hx(e, r, a, t), Bx(e, o, n || t);
  const c = a ? sS(e, t) : void 0;
  return t && Of(!1), c;
}
function sS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Px);
  const { setup: r } = n;
  if (r) {
    _i();
    const o = e.setupContext = r.length > 1 ? cS(e) : null, a = Ds(e), c = Fs(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = f0(c);
    if (wi(), a(), (u || e.sp) && !ds(e) && j0(e), u) {
      if (c.then(Nm, Nm), t)
        return c.then((d) => {
          Pm(e, d);
        }).catch((d) => {
          Ac(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Pm(e, c);
  } else
    py(e);
}
function Pm(e, t, n) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = E0(t)), py(e);
}
function py(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Xr);
  {
    const o = Ds(e);
    _i();
    try {
      Ax(e);
    } finally {
      wi(), o();
    }
  }
}
const lS = {
  get(e, t) {
    return Pn(e, "get", ""), e[t];
  }
};
function cS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(E0(qw(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ps)
        return ps[n](e);
    },
    has(t, n) {
      return n in t || n in ps;
    }
  })) : e.proxy;
}
function uS(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fS(e) {
  return it(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ tx(e, t, xs), dS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ef;
const Am = typeof window < "u" && window.trustedTypes;
if (Am)
  try {
    Ef = /* @__PURE__ */ Am.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const hy = Ef ? (e) => Ef.createHTML(e) : (e) => e, pS = "http://www.w3.org/2000/svg", hS = "http://www.w3.org/1998/Math/MathML", ci = typeof document < "u" ? document : null, Cm = ci && /* @__PURE__ */ ci.createElement("template"), mS = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? ci.createElementNS(pS, e) : t === "mathml" ? ci.createElementNS(hS, e) : n ? ci.createElement(e, { is: n }) : ci.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => ci.createTextNode(e),
  createComment: (e) => ci.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ci.querySelector(e),
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
      Cm.innerHTML = hy(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Cm.content;
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
}, gS = /* @__PURE__ */ Symbol("_vtc");
function yS(e, t, n) {
  const r = e[gS];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zl = /* @__PURE__ */ Symbol("_vod"), my = /* @__PURE__ */ Symbol("_vsh"), So = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Zl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ua(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ua(e, !0), r.enter(e)) : r.leave(e, () => {
      Ua(e, !1);
    }) : Ua(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ua(e, t);
  }
};
function Ua(e, t) {
  e.style.display = t ? e[Zl] : "none", e[my] = !t;
}
const bS = /* @__PURE__ */ Symbol(""), vS = /(?:^|;)\s*display\s*:/;
function _S(e, t, n) {
  const r = e.style, o = nn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (nn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Il(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Il(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Il(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[bS];
      c && (n += ";" + c), r.cssText = n, a = vS.test(n);
    }
  } else t && e.removeAttribute("style");
  Zl in e && (e[Zl] = a ? r.display : "", e[my] && (r.display = "none"));
}
const Im = /\s*!important$/;
function Il(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Il(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = wS(e, t);
    Im.test(n) ? e.setProperty(
      ko(r),
      n.replace(Im, ""),
      "important"
    ) : e[r] = n;
  }
}
const Om = ["Webkit", "Moz", "ms"], $u = {};
function wS(e, t) {
  const n = $u[t];
  if (n)
    return n;
  let r = $n(t);
  if (r !== "filter" && r in e)
    return $u[t] = r;
  r = Mc(r);
  for (let o = 0; o < Om.length; o++) {
    const a = Om[o] + r;
    if (a in e)
      return $u[t] = a;
  }
  return t;
}
const Em = "http://www.w3.org/1999/xlink";
function Fm(e, t, n, r, o, a = Pw(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Em, t.slice(6, t.length)) : e.setAttributeNS(Em, t, n) : n == null || a && !m0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Jr(n) ? String(n) : n
  );
}
function Tm(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? hy(n) : n);
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
    u === "boolean" ? n = m0(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function qo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function xS(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Dm = /* @__PURE__ */ Symbol("_vei");
function SS(e, t, n, r, o = null) {
  const a = e[Dm] || (e[Dm] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = kS(t);
    if (r) {
      const b = a[t] = PS(
        r,
        o
      );
      qo(e, u, b, d);
    } else c && (xS(e, u, c, d), a[t] = void 0);
  }
}
const Lm = /(?:Once|Passive|Capture)$/;
function kS(e) {
  let t;
  if (Lm.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Lm); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ko(e.slice(2)), t];
}
let zu = 0;
const MS = /* @__PURE__ */ Promise.resolve(), NS = () => zu || (MS.then(() => zu = 0), zu = Date.now());
function PS(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Zr(
      AS(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = NS(), n;
}
function AS(e, t) {
  if (Ze(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Rm = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, CS = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? yS(e, r, c) : t === "style" ? _S(e, n, r) : xc(t) ? Sc(t) || SS(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : IS(e, t, r, c)) ? (Tm(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fm(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (OS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nn(r))) ? Tm(e, $n(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Fm(e, t, r, c));
};
function IS(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Rm(t) && it(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Rm(t) && nn(n) ? !1 : t in e;
}
function OS(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = $n(t);
  return Array.isArray(n) ? n.some((o) => $n(o) === r) : Object.keys(n).some((o) => $n(o) === r);
}
const Vm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Pl(t, n) : t;
};
function ES(e) {
  e.target.composing = !0;
}
function $m(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ju = /* @__PURE__ */ Symbol("_assign");
function zm(e, t, n) {
  return t && (e = e.trim()), n && (e = gd(e)), e;
}
const jm = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[ju] = Vm(o);
    const a = r || o.props && o.props.type === "number";
    qo(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ju](zm(e.value, n, a));
    }), (n || a) && qo(e, "change", () => {
      e.value = zm(e.value, n, a);
    }), t || (qo(e, "compositionstart", ES), qo(e, "compositionend", $m), qo(e, "change", $m));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[ju] = Vm(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? gd(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, FS = ["ctrl", "shift", "alt", "meta"], TS = {
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
  exact: (e, t) => FS.some((n) => e[`${n}Key`] && !t.includes(n))
}, Rt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = TS[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, DS = /* @__PURE__ */ En({ patchProp: CS }, mS);
let Hm;
function LS() {
  return Hm || (Hm = Yx(DS));
}
const Id = ((...e) => {
  const t = LS().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = VS(r);
    if (!o) return;
    const a = t._component;
    !it(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, RS(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function RS(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function VS(e) {
  return nn(e) ? document.querySelector(e) : e;
}
function Jo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function $S() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Gm(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let w = 0; w < r; w += 1)
      a[(v * r + w) * 4 + 3] <= t || (w < c && (c = w), v < u && (u = v), w > d && (d = w), v > b && (b = v));
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
function Od(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function ui(e, t, n) {
  if (!e) return Jo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function zt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Hu = null, Gu = null, Km = null, Wm = null, Ut = null, Ya = null, Ln = null, Di = null;
function zS() {
  if (Gu) return Gu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Gu = n, n;
}
function Ku(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Hu = ui(Hu, n, r);
  const o = Hu;
  zt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Wm !== o.ctx && (Km = o.ctx.createPattern(zS(), "repeat"), Wm = o.ctx), o.ctx.fillStyle = Km, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function jS(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function HS(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function GS(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function KS(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const jt = /* @__PURE__ */ new Map(), Ed = 128;
function WS(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (jt.has(d)) {
    const S = jt.get(d);
    return jt.delete(d), jt.set(d, S), S;
  }
  jt.size >= Ed && jt.delete(jt.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = Od(b, b), w = v.getContext("2d"), N = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, E = `rgba(${n},${r},${o},0)`, L = w.createRadialGradient(y, y, N, y, y, k);
  return L.addColorStop(0, P), L.addColorStop(1, E), w.fillStyle = L, w.fillRect(0, 0, b, b), jt.set(d, v), v;
}
function BS(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), E = `chisel:${v}:${w}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if (jt.has(E)) {
    const ee = jt.get(E);
    return jt.delete(E), jt.set(E, ee), ee;
  }
  jt.size >= Ed && jt.delete(jt.keys().next().value);
  const L = Od(v, w), S = L.getContext("2d"), W = S.createImageData(v, w), j = W.data, F = Math.max(0, e - t), G = Math.max(0, Math.min(1, n)), A = 1 + N;
  for (let ee = 0; ee < w; ee++)
    for (let Se = 0; Se < v; Se++) {
      const K = Se + 0.5 - e, R = ee + 0.5 - t, se = Math.max(Math.abs(K) - F, 0), J = Math.hypot(se, R) / t;
      if (J >= 1) continue;
      const O = J <= G ? 1 : Math.max(0, (1 - J) / Math.max(1e-4, 1 - G)), X = 1 - J, V = 1 + N * (1 - X) * (1 - X), Z = 1 - k * X * X, te = V * Z / A;
      let de = 1;
      if (P > 0) {
        const ht = Math.floor((R + t) / 1.5), we = Math.floor((K + e) / 8), gn = yo(aa(ht * 41 + 500, we * 19 + 300));
        de = 1 - P * 0.42 * gn;
      }
      const Ce = Math.round(255 * Math.min(1, y * O * te * de));
      if (Ce <= 0) continue;
      const T = (ee * v + Se) * 4;
      j[T] = u, j[T + 1] = d, j[T + 2] = b, j[T + 3] = Ce;
    }
  return S.putImageData(W, 0, 0), jt.set(E, L), L;
}
function aa(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function yo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function US(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const w = yo(aa(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (w - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), P = YS(e, t, u, d, n, r), E = a * 0.55;
  if (P < E) return 0;
  const S = 0.45 + 0.55 * ((P - E) / Math.max(1e-4, 1 - E));
  return Math.round(255 * Math.min(1, c * k * S));
}
function YS(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = yo(aa(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = yo(aa(b * 23 + 800, y * 29 + 500)), w = yo(aa(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + w * 0.15;
}
function XS(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), w = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (jt.has(w)) {
    const S = jt.get(w);
    return jt.delete(w), jt.set(w, S), S;
  }
  jt.size >= Ed && jt.delete(jt.keys().next().value);
  const N = Od(b, y), k = N.getContext("2d"), P = k.createImageData(b, y), E = P.data, L = Math.max(0, Math.min(1, n));
  for (let S = 0; S < y; S++)
    for (let W = 0; W < b; W++) {
      const j = US(W, S, e, t, L, v, d);
      if (j <= 0) continue;
      const F = (S * b + W) * 4;
      E[F] = a, E[F + 1] = c, E[F + 2] = u, E[F + 3] = j;
    }
  return k.putImageData(P, 0, 0), jt.set(w, N), N;
}
function gy(e, t, n) {
  var P, E;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = GS(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = qS(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = KS(t, o), y = String(((E = t == null ? void 0 : t.targetSpace) == null ? void 0 : E.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", w = t == null ? void 0 : t.scatter, N = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const L = o * u, S = o, W = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), j = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = BS(L, S, a, c, W, j, F);
  } else if (r === "crayon") {
    const L = o * u, S = o, W = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = XS(L, S, a, c, W);
  } else
    k = WS(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function qS(e) {
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
function JS(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Bm(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function Fd(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, w = aa(t, n);
    for (let N = 0; N < y; N++) {
      const k = yo(w + N * 2) * Math.PI * 2, P = Math.sqrt(yo(w + N * 2 + 1)) * v, E = t + Math.cos(k) * P, L = n + Math.sin(k) * P, S = Math.max(0.5, e.radiusPx * o * 0.48), W = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, j = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(W)) : 1, F = S * e.aspect * j;
      Bm(e, E, L, S, F);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  Bm(e, t, n, a, d);
}
function Um(e, t, n) {
  const r = HS(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = gy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let w = 0; w < r.length; w++) {
    let N = Number(r[w].u || 0) * o;
    const k = Number(r[w].v || 0) * a;
    w > 0 && Math.abs(N - u[w - 1].x) > o * 0.5 && (N += N < u[w - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (Fd(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let w = 1; w < u.length; w++) {
    const N = u[w], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    w === 1 ? v = Ss(c, y.x, y.y, k.x, k.y, v) : v = Ql(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Ss(c, y.x, y.y, b.x, b.y, v) : Ql(c, d, y, b, b, v), e.restore();
}
function Ol(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = JS(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let w = 0; w < r.length; w++) {
    const N = jS(r[w]);
    let k = Number(N.x || 0) * o;
    w > 0 && Math.abs(k - u[w - 1].x) > o * 0.5 && (k += k < u[w - 1].x ? o : -o), u.push({ x: k, y: Number(N.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function y(w) {
    e.beginPath(), e.moveTo(u[0].x + w, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + w, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function fl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Ol(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Um(e, t, n) : (Ya = ui(Ya, n.width, n.height), zt(Ya), Um(Ya.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(Ya.canvas, 0, 0), e.restore());
}
function no(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ss(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    Fd(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function Ql(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, w = v + d, N = w + b, k = w - v, P = 16;
  let E = a, L = n.x, S = n.y;
  for (let W = 1; W <= P; W++) {
    const j = v + k * W / P, F = ((v - j) * t.x + (j - y) * n.x) / (v - y), G = ((v - j) * t.y + (j - y) * n.y) / (v - y), A = ((w - j) * n.x + (j - v) * r.x) / (w - v), ee = ((w - j) * n.y + (j - v) * r.y) / (w - v), Se = ((N - j) * r.x + (j - w) * o.x) / (N - w), K = ((N - j) * r.y + (j - w) * o.y) / (N - w), R = ((w - j) * F + (j - y) * A) / (w - y), se = ((w - j) * G + (j - y) * ee) / (w - y), Pe = ((N - j) * A + (j - v) * Se) / (N - v), J = ((N - j) * ee + (j - v) * K) / (N - v), O = ((w - j) * R + (j - v) * Pe) / (w - v), X = ((w - j) * se + (j - v) * J) / (w - v);
    E = Ss(e, L, S, O, X, E), L = O, S = X;
  }
  return E;
}
function ZS(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = gy(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), E = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Fd(N, b, u, 1), e.activeStroke = {
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
      isEraser: E,
      layerKind: L,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
  o.globalCompositeOperation = "source-over";
  const w = {
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
  d.pointCount === 1 ? d.distSinceStamp = Ss(w, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = Ql(
    w,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, e.displayDirty = !0;
}
function Ff(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Jo(t, n), c = {
    descriptor: r,
    committedMask: Jo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Jo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Jo(t, n);
  let b = null, y = "", v = null;
  function w(K) {
    return {
      actionGroupId: K,
      descriptor: r,
      committedPaint: Jo(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(K) {
    let R = o.get(K);
    return R || (R = w(K), o.set(K, R)), R;
  }
  function k(K) {
    return y === "mask" ? c : b ? N(b) : u;
  }
  function P(K) {
    var X;
    const R = !v || v.length !== K.length || K.some((V, Z) => V !== v[Z]), se = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    let Pe = c.displayDirty || u.displayDirty || R;
    for (const V of K) {
      const Z = o.get(V);
      if (Z != null && Z.displayDirty) {
        Pe = !0;
        break;
      }
    }
    if (se && (Pe = !0), !Pe) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const V of K) {
      const Z = o.get(V);
      Z && (Z.displayDirty = !1);
    }
    v = [...K];
    const J = d.ctx;
    zt(d);
    const O = !!(se != null && se.isEraser);
    for (const V of K) {
      const Z = o.get(V);
      if (!Z) continue;
      const de = b === Z.actionGroupId && y === "paint" ? Z.activeStroke : null;
      if (O)
        Ut = ui(Ut, t, n), zt(Ut), Ut.ctx.drawImage(Z.committedPaint.canvas, 0, 0), no(Ut.ctx, a.canvas), J.drawImage(Ut.canvas, 0, 0);
      else if (J.drawImage(Z.committedPaint.canvas, 0, 0), de) {
        const Ce = Z.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, de.strokeOpacity ?? 1));
        J.save(), J.globalAlpha = Ce, J.drawImage(a.canvas, 0, 0), J.restore();
      }
    }
  }
  function E(K) {
    var se, Pe, J, O, X;
    for (const V of o.values())
      zt(V.committedPaint), zt(V.currentStroke), V.activeStroke = null, V.displayDirty = !0;
    zt(c.committedMask), zt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, u.displayDirty = !0, v = null;
    const R = [
      ...Array.isArray((Pe = (se = K == null ? void 0 : K.painting) == null ? void 0 : se.paint) == null ? void 0 : Pe.strokes) ? K.painting.paint.strokes : [],
      ...Array.isArray((O = (J = K == null ? void 0 : K.painting) == null ? void 0 : J.mask) == null ? void 0 : O.strokes) ? K.painting.mask.strokes : []
    ];
    for (const V of R) {
      if (((X = V == null ? void 0 : V.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const Z = String((V == null ? void 0 : V.layerKind) || "paint"), de = String((V == null ? void 0 : V.toolKind) || "pen") === "eraser";
      if (Z === "mask") {
        const Ce = c.descriptor;
        de ? (Ut = ui(Ut, Ce.width, Ce.height), zt(Ut), fl(Ut.ctx, V, Ce), no(c.committedMask.ctx, Ut.canvas)) : fl(c.committedMask.ctx, V, Ce);
        continue;
      }
      if (de) {
        Ut = ui(Ut, r.width, r.height), zt(Ut), fl(Ut.ctx, V, r);
        for (const Ce of o.values())
          no(Ce.committedPaint.ctx, Ut.canvas), Ce.displayDirty = !0;
      } else {
        const Ce = String((V == null ? void 0 : V.actionGroupId) || "__default__"), T = N(Ce), ht = T.descriptor;
        fl(T.committedPaint.ctx, V, ht), T.displayDirty = !0;
      }
    }
    P([...o.keys()]);
  }
  function L(K, R) {
    y = String((K == null ? void 0 : K.layerKind) || "");
    const se = String((K == null ? void 0 : K.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, zt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const Pe = se ? u : N(String((K == null ? void 0 : K.actionGroupId) || "__default__"));
      b = se ? "" : String((K == null ? void 0 : K.actionGroupId) || "__default__"), zt(Pe.currentStroke), Pe.activeStroke = null, Pe.displayDirty = !0;
    }
  }
  function S(K, R) {
    var Z;
    const se = String((K == null ? void 0 : K.layerKind) || "paint"), Pe = String((K == null ? void 0 : K.toolKind) || "") === "eraser", J = se === "mask" ? c : Pe ? u : N(String((K == null ? void 0 : K.actionGroupId) || b || "__default__")), O = J.activeStroke, X = J.descriptor;
    if (O && O.pointCount > 1) {
      const te = J.currentStroke.ctx;
      te.globalCompositeOperation = "source-over";
      const de = {
        ctx: te,
        stampTex: O.stampTex,
        radiusPx: O.radiusPx,
        spacingPx: O.spacingPx,
        desc: X,
        aspect: O.aspect,
        angle: O.angle,
        stampKind: O.stampKind,
        scatter: O.scatter,
        latitudeCorrection: O.latitudeCorrection
      };
      O.pointCount === 2 ? Ss(de, O.lastMidX, O.lastMidY, O.prev.x, O.prev.y, O.distSinceStamp) : Ql(de, O.pprev, { x: O.lastMidX, y: O.lastMidY }, O.prev, O.prev, O.distSinceStamp);
    }
    J.lassoPreviewActive && (zt(J.currentStroke), Ol(J.currentStroke.ctx, K, X), J.lassoPreviewActive = !1);
    const V = se === "mask" ? c.committedMask : J.committedPaint;
    if (Pe && se === "paint")
      for (const te of o.values())
        no(te.committedPaint.ctx, J.currentStroke.canvas), te.displayDirty = !0;
    else if (Pe)
      no(V.ctx, J.currentStroke.canvas);
    else {
      const te = Math.max(0, Math.min(1, (O == null ? void 0 : O.strokeOpacity) ?? 1));
      V.ctx.save(), V.ctx.globalAlpha = te, V.ctx.drawImage(J.currentStroke.canvas, 0, 0), V.ctx.restore();
    }
    $S() && (String((K == null ? void 0 : K.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((Z = K == null ? void 0 : K.targetSpace) == null ? void 0 : Z.viewMode) || ""), Number((K == null ? void 0 : K.aspect) ?? 1), Gm(J.currentStroke.canvas), Gm(V.canvas), void 0), zt(J.currentStroke), J.activeStroke = null, J.displayDirty = !0, b = null, y = "", P([...o.keys()]);
  }
  function W(K) {
    if (y === "mask")
      zt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !b)
      zt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const R = o.get(b);
      R && (zt(R.currentStroke), R.activeStroke = null, R.lassoPreviewActive = !1, R.displayDirty = !0);
    }
    b = null, y = "", P([...o.keys()]);
  }
  function j(K, R) {
    var Pe;
    if (y = String((K == null ? void 0 : K.layerKind) || ""), String(((Pe = K == null ? void 0 : K.geometry) == null ? void 0 : Pe.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        zt(c.currentStroke), Ol(c.currentStroke.ctx, K, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const J = String((K == null ? void 0 : K.toolKind) || "") === "eraser", O = J ? u : N(String((K == null ? void 0 : K.actionGroupId) || b || "__default__"));
        b = J ? "" : String((K == null ? void 0 : K.actionGroupId) || b || "__default__"), zt(O.currentStroke), Ol(O.currentStroke.ctx, K, O.descriptor), O.lassoPreviewActive = !0, O.displayDirty = !0;
      }
      P([...o.keys()]);
    }
  }
  function F(K) {
    return P(K ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function G(K) {
    return o.get(String(K)) ?? null;
  }
  function A() {
    return [...o.keys()];
  }
  function ee(K) {
    var X;
    const R = o.get(String(K));
    if (!R) return null;
    const se = y === "paint" && b === R.actionGroupId, Pe = y === "paint" && ((X = b ? o.get(b) : u) == null ? void 0 : X.activeStroke) || null;
    if (Pe != null && Pe.isEraser)
      return Ln = ui(Ln, t, n), zt(Ln), Ln.ctx.drawImage(R.committedPaint.canvas, 0, 0), no(Ln.ctx, a.canvas), Ln.canvas;
    const J = se ? R.activeStroke : null;
    if (!J) return R.committedPaint.canvas;
    Ln = ui(Ln, t, n), zt(Ln), Ln.ctx.drawImage(R.committedPaint.canvas, 0, 0);
    const O = R.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, J.strokeOpacity ?? 1));
    return Ln.ctx.save(), Ln.ctx.globalAlpha = O, Ln.ctx.drawImage(a.canvas, 0, 0), Ln.ctx.restore(), Ln.canvas;
  }
  function Se() {
    return Di = ui(Di, t, n), zt(Di), Ku(Di.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Ut = ui(Ut, t, n), zt(Ut), Ut.ctx.drawImage(c.committedMask.canvas, 0, 0), no(Ut.ctx, a.canvas), zt(Di), Ku(Di.ctx, Ut.canvas)) : Ku(Di.ctx, a.canvas)), Di.canvas;
  }
  return {
    rebuildCommitted: E,
    beginStroke: L,
    appendStrokePoint: ZS,
    updateActiveStroke: j,
    commitActiveStroke: S,
    cancelActiveStroke: W,
    getErpTarget: F,
    ensureTarget: k,
    getGroupTarget: G,
    getGroupDisplayCanvas: ee,
    getMaskDisplayCanvas: Se,
    getAllGroupIds: A
  };
}
function Q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Yt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Td(e, t) {
  let n = Yt(t) - Yt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Tf = 3;
function Xa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function ec(e, t = 0) {
  const n = Xa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = Xa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = Xa(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = Xa(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(Xa(t) || 0);
}
function yy(e) {
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
const Ym = Math.PI / 180, Xm = 0.12, QS = Tf, ek = 35, tk = 140, ns = 100, nk = 20, qm = 0.8;
function rk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Q(Number(e || ns), 1, 179) * Ym;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Ym;
}
function Dd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ns })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(S, W = null) {
    u && u(S, W);
  }
  function y(S, W, j = null, F = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(S || 0), d.drag.lastY = Number(W || 0), d.drag.lastTs = Number(F || performance.now()), d.drag.pointerId = j, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: j }), !0;
  }
  function v(S, W, j = "pano", F = performance.now()) {
    if (!d.drag.active) return !1;
    const G = Number(F || performance.now()), A = Number(S), ee = Number(W), Se = A - d.drag.lastX, K = ee - d.drag.lastY;
    d.drag.lastX = A, d.drag.lastY = ee, d.drag.lastTs = G;
    const R = r() || { x: 1, y: 1 }, se = Number(R.x || 1), Pe = Number(R.y || 1), J = { ...t() };
    let O = 0, X = 0;
    if (j === "unwrap") {
      const Z = o() || { w: 1, h: 1 }, te = Math.max(1, Number(Z.w || 1)), de = Math.max(1, Number(Z.h || 1)), Ce = Se / te, T = K / de;
      O = -Ce * 360 * se, X = T * 180 * Pe;
    } else {
      const Z = a() || { w: 0, h: 0 }, te = Math.max(1, Number(Z.w || 0)), de = Math.max(1, Number(Z.h || 0));
      if (te > 1 && de > 1) {
        const Ce = Q(Number(J.fov || ns), 1, 179), T = Q(rk(Ce, te, de), 0.1, 179);
        O = -(Se / te) * Ce * se, X = K / de * T * Pe;
      } else
        O = -Se * Xm * se, X = K * Xm * Pe;
    }
    J.yaw = Yt(Number(J.yaw || 0) + O), J.pitch = Q(Number(J.pitch || 0) + X, -89.9, 89.9), n(J), d.velHistory.push({ ts: G, yaw: J.yaw, pitch: J.pitch });
    let V = 0;
    for (; V < d.velHistory.length - 1 && d.velHistory[V].ts < G - 100; ) V++;
    return V > 0 && d.velHistory.splice(0, V), d.inertia.active = !1, d.inertia.lastTs = G, c(), b("drag", { phase: "move", dx: Se, dy: K, dYaw: O, dPitch: X }), !0;
  }
  function w(S = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const W = Number(S || performance.now());
    d.drag.lastTs = W;
    const j = d.velHistory.filter((G) => W - G.ts <= 80);
    if (j.length >= 2) {
      const G = j[0], A = j.at(-1), ee = Math.max(1e-3, (A.ts - G.ts) / 1e3);
      let Se = A.yaw - G.yaw;
      Se > 180 && (Se -= 360), Se < -180 && (Se += 360), d.inertia.vx = Se / ee, d.inertia.vy = (A.pitch - G.pitch) / ee;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const F = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = F > nk, d.inertia.lastTs = W, b("drag", { phase: "end", speed: F, inertiaActive: d.inertia.active }), !0;
  }
  function N(S = performance.now()) {
    if (!d.inertia.active) return !1;
    const W = Number(S || performance.now()), j = Math.max(1e-3, (W - (d.inertia.lastTs || W)) / 1e3);
    d.inertia.lastTs = W;
    const F = { ...t() };
    F.yaw = Yt(Number(F.yaw || 0) + d.inertia.vx * j), F.pitch = Q(Number(F.pitch || 0) + d.inertia.vy * j, -89.9, 89.9);
    const G = Math.exp(-5.5 * j);
    return d.inertia.vx *= G, d.inertia.vy *= G, Math.abs(d.inertia.vx) < qm && Math.abs(d.inertia.vy) < qm && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(F), c(), d.inertia.active;
  }
  function k() {
    const S = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], S;
  }
  function P(S) {
    const W = Math.sign(Number(S || 0));
    if (!W) return !1;
    const j = { ...t() }, F = Number(j.fov || ns);
    return j.fov = Q(F + W * QS, ek, tk), n(j), c(), b("wheel", { deltaSign: W, fovBefore: F, fovAfter: j.fov }), !0;
  }
  function E(S, W = 0) {
    return P(ec(S, W));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: ns }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: w,
    stepInertia: N,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: E,
    resetView: L
  };
}
const Nt = Math.PI / 180, cn = 180 / Math.PI;
function yr(e, t, n) {
  return { x: e, y: t, z: n };
}
function tc(e, t) {
  return yr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function nc(e, t) {
  return yr(e.x * t, e.y * t, e.z * t);
}
function Wu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Ld(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return yr(e.x / t, e.y / t, e.z / t);
}
function qn(e, t) {
  const n = e * Nt, r = t * Nt, o = Math.cos(r);
  return yr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function _a(e, t, n = 0) {
  const r = Number(e || 0) * Nt, o = Number(t || 0) * Nt, a = n * Nt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), v = Math.sin(a);
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
function rc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function kt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function ik() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function ok(e) {
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
function ak(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function sk(e, t) {
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
function dl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = sk(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function lk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = dl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = dl(e.points, t, 1);
  if (!a) return null;
  const c = dl(e.rawPoints, t, 1), u = dl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function ck(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = ak(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = lk(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = kt(e.size, null), c = kt(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = kt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, kt(w.r, 0))),
      g: Math.max(0, Math.min(1, kt(w.g, 0))),
      b: Math.max(0, Math.min(1, kt(w.b, 0))),
      a: Math.max(0, Math.min(1, kt(w.a, 1)))
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
function Jm(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = ck(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function uk(e) {
  if (!e || typeof e != "object") return null;
  const t = kt(e.u0, null), n = kt(e.v0, null), r = kt(e.u1, null), o = kt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function fk(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
  };
}
function dk(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = uk(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: fk(e.transform)
  } : null;
}
function pk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = dk(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function sa(e) {
  const t = ik();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: ok(e.groups),
    paint: Jm(e.paint, "paint"),
    mask: Jm(e.mask, "mask"),
    raster_objects: pk(e.raster_objects)
  };
}
const vr = 1, _r = 179, Df = 85;
function Dc(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function by(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function vy(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * cn;
  return n && (r = Math.round(r / 15) * 15), Dc(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Si(e = {}) {
  const t = Q(Qe(e.hFOV_deg || 90, 90), vr, _r), n = Q(Qe(e.vFOV_deg || 60, 60), vr, _r), r = Math.tan(t * Nt * 0.5), o = Math.tan(n * Nt * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function bo(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Si(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function Rd(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Qe(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Vd(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Q(2 * Math.atan(r / (2 * n)) * cn, vr, _r), c = Q(2 * Math.atan(o / (2 * n)) * cn, vr, _r);
  return { hFOV_deg: a, vFOV_deg: c };
}
function hk(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), o = Qe(e == null ? void 0 : e.y, 0), a = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Si(t), d = Math.max(1e-12, Qe(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function $d(e, t, n = Df) {
  const r = Math.max(1e-12, Qe(t, 1)), o = Q(Qe(n, Df), 1, 89.999), a = r * Math.tan(o * Nt), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function _y(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function mk(e, t) {
  const n = Q(Qe(e, 90), vr, _r), r = Math.max(1e-6, Qe(t, 1));
  return Q(
    2 * Math.atan(Math.tan(n * Nt * 0.5) / r) * cn,
    vr,
    _r
  );
}
function El(e, t) {
  const n = Q(Qe(e, 60), vr, _r), r = Math.max(1e-6, Qe(t, 1));
  return Q(
    2 * Math.atan(Math.tan(n * Nt * 0.5) * r) * cn,
    vr,
    _r
  );
}
function Zm(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function gk(e, t) {
  const n = Zm(e, 1), r = Zm(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function vo(e) {
  const t = Q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Nt, n = Q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Nt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function uo(e) {
  const t = vo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || gk(t, 1);
}
function zd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = uo(t), t;
}
function wy({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? Q(c, vr, _r) : Q(Math.min(42, Qe(o, 100) * 0.42), 8, 96);
  return zd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: Q(Qe(n, 0), -89.9, 89.9),
    roll_deg: Dc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function fi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : uo(e);
}
function xy(e, t) {
  const n = Si(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * cn, a = 2 * Math.atan(n.tanHalfY * r) * cn;
  return o < vr || o > _r || a < vr || a > _r ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Sy(e, t, n = Tf) {
  const r = Math.sign(Qe(t, 0)), o = Math.abs(Qe(n, Tf));
  if (!r || !(o > 0)) return null;
  const a = Si(e), c = a.hFovDeg + r * o;
  if (c < vr || c > _r) return null;
  const u = Math.tan(c * Nt * 0.5);
  return xy(e, u / a.tanHalfX);
}
function ky(e, t) {
  const n = Si(e), r = _a(n.yawDeg, n.pitchDeg, n.rollDeg), o = Qe(t == null ? void 0 : t.x, 0), a = Qe(t == null ? void 0 : t.y, 0);
  return Ld(tc(tc(r.fwd, nc(r.right, o)), nc(r.up, a)));
}
function yk(e) {
  return yr(e.x, e.y, -e.z);
}
function Fl(e) {
  return yr(e.x, e.y, -e.z);
}
function Jn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = _a(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function My(e) {
  const t = Fl(yr(e[0][0], e[1][0], e[2][0])), n = Fl(yr(e[0][1], e[1][1], e[2][1])), r = Fl(yr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * cn, pitchDeg: a * cn, rollDeg: d * cn };
}
function ks(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Mo(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, y = t + a + b;
  if (y > 0) {
    const w = 0.5 / Math.sqrt(y + 1);
    return { x: (d - c) * w, y: (r - u) * w, z: (o - n) * w, w: 0.25 / w };
  }
  if (t > a && t > b) {
    const w = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * w, y: (n + o) / w, z: (r + u) / w, w: (d - c) / w };
  }
  if (a > b) {
    const w = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / w, y: 0.25 * w, z: (c + d) / w, w: (r - u) / w };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function pl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const po = 1e-6, Lf = 1e-6, bk = 1e-9;
function Ms(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function vk(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Ms(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Ms(0, r, a, 1, 0.5 * (c + u));
}
function ma(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ga(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((w) => -w / o), u = r.map((w) => w / a);
  if (c.reduce((w, N, k) => w + N * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((w, N) => (w * a + u[N] * o) / (o + a)), b = (w) => Math.sqrt(w.reduce((N, k) => N + k * k, 0)), y = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= y ? d : d.map((w) => w * y / v);
}
function Ny(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((y, v) => a[v] - y);
  let d = u;
  ma(e, r) && (d = ga(t, r, n[r - 1].map((y, v) => y - o[v]), u).map((y) => y * c));
  let b = u;
  return ma(e, r + 1) && (b = ga(t, r + 1, u.map((y) => -y), n[r + 2].map((y, v) => y - a[v])).map((y) => y * c)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function Py(e, t, n, r, o) {
  const [[a], [c]] = Ny(e, t, n.map((u) => [u]), r);
  return Ms(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function _k(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = Ny(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Ms(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function ic([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function wk(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Bu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function xk([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Rf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ta(e, t) {
  return xk(ic([-e[0], -e[1], -e[2], e[3]], t));
}
function Uu(e, t, n) {
  return ic(e, Rf(ta(e, t).map((r) => n * r)));
}
function Yu(e, t) {
  const n = wk(e, t);
  if (Math.abs(n) > Lf) return n < 0;
  const [r, o, a] = ta(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Lf) return c < 0;
  return !1;
}
function hl(e) {
  const { x: t, y: n, z: r, w: o } = Mo(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Vf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Sk(e, t, n, r) {
  const o = hl(e[n].value);
  let a = hl(e[n + 1].value);
  Yu(o, a) && (a = Bu(a));
  const c = t[n + 1] - t[n], u = ta(o, a);
  let d = u;
  if (ma(e, n)) {
    let F = hl(e[n - 1].value);
    Yu(F, o) && (F = Bu(F)), d = ga(t, n, ta(o, F), u).map((G) => G * c);
  }
  let b = u;
  if (ma(e, n + 1)) {
    let F = hl(e[n + 2].value);
    Yu(a, F) && (F = Bu(F)), b = ga(t, n + 1, ta(a, o), ta(a, F)).map((G) => G * c);
  }
  const y = ic(o, Rf(d.map((F, G) => 0.5 * (F - u[G])))), v = ic(a, Rf(u.map((F, G) => 0.5 * (F - b[G])))), [w, N, k, P] = Uu(Uu(o, a, r), Uu(y, v, r), 2 * r * (1 - r)), { yawDeg: E, pitchDeg: L, rollDeg: S } = My(ks({ x: w, y: N, z: k, w: P })), W = e[n].value, j = e[n + 1].value;
  return {
    yaw_deg: Vf(E, W.yaw_deg, j.yaw_deg, r),
    pitch_deg: L,
    roll_deg: Vf(S, W.roll_deg, j.roll_deg, r)
  };
}
function Ns(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function oc(e) {
  return Math.sqrt(Ns(e, e));
}
function ac(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Ay(e, t) {
  const n = Ns(e, t), r = t.map((c, u) => c - n * e[u]), o = oc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function Zo(e, t) {
  const n = oc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function ml(e, t, n) {
  return Zo(e, Ay(e, t).map((r) => n * r));
}
function Xu(e, t) {
  const n = ac(e[t].value), r = ac(e[t + 1].value), o = Ns(n, r), a = o < 0 && oc(r.map((d, b) => d - o * n[b])) <= Lf;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = Ay(n, r);
  const u = oc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function kk(e, t, n, r) {
  const o = ac(e[n].value), a = ac(e[n + 1].value), [c, u, d] = Xu(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  ma(e, n) && (b = ga(t, n, Xu(e, n - 1)[1].map((W) => -W), b).map((W) => W * v)), ma(e, n + 1) && (y = ga(t, n + 1, y.map((W) => -W), Xu(e, n + 1)[0]).map((W) => W * v));
  let w, N, k;
  if (d) {
    const W = Math.PI, j = Ms(0, Ns(b, c) / W / 3, W - Ns(y, u) / W / 3, W, r);
    [w, N, k] = Zo(o, c.map((F) => j * F / W));
  } else {
    const W = ml(Zo(o, b.map((G) => G / 3)), Zo(a, y.map((G) => -G / 3)), r), j = ml(Zo(o, b.map((G) => r * G / 3)), W, r), F = ml(W, Zo(a, y.map((G) => -(1 - r) * G / 3)), r);
    [w, N, k] = ml(j, F, r);
  }
  const P = Math.hypot(w, k), E = e[n].value.yaw_deg, L = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= bk ? E + (L - E) * r : Vf(Math.atan2(w, k) * 180 / Math.PI, E, L, r), pitch_deg: Math.atan2(N, P) * 180 / Math.PI };
}
function Mk(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = Py(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Nk(e, t, n, r) {
  return Py(e, t, e.map((o) => o.value), n, r);
}
const Pk = { position: _k, rotation: Sk, direction: kk, size: Mk };
function Kt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return pl(e[t].value);
  if (n <= r[0].frame + po) return pl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - po) return pl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + po; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= po || c.easing === "hold") return pl(c.value);
  const u = r.map((b) => b.frame), d = vk(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (Pk[t] ?? Nk)(r, u, a, d);
}
function $f(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Ak(e) {
  return Math.min(1, Math.max(0, e));
}
function Cy(e) {
  return Math.max(1e-6, e);
}
function Iy(e, t) {
  return t - (e.start - e.in);
}
function Vi(e, t) {
  return t >= e.start - po && (e.duration === null || t < e.start + e.duration - po);
}
function jd(e, t) {
  return {
    position: Kt(e, "position", t),
    ...Kt(e, "rotation", t),
    hFOV_deg: $f(Kt(e, "fov", t)),
    aspect: e.aspect
  };
}
function sc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Iy(o.clip, n);
  return {
    frame: n,
    camera: jd(r, n),
    scene: {
      active: Vi(o.clip, n),
      clip_frame: a,
      position: Kt(o, "position", a),
      ...Kt(o, "rotation", a),
      scale: Cy(Kt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => _o(c, n))
  };
}
function Ck(e, t) {
  if (e.placement === "world")
    return {
      position: Kt(e, "position", t),
      ...Kt(e, "rotation", t),
      scale: Cy(Kt(e, "scale", t))
    };
  const n = Kt(e, "size", t);
  return {
    ...Kt(e, "direction", t),
    roll_deg: Kt(e, "roll", t),
    hFOV_deg: $f(n.hFOV_deg),
    vFOV_deg: $f(n.vFOV_deg)
  };
}
function _o(e, t) {
  const n = Iy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Vi(e.clip, t),
    clip_frame: n,
    ...Ck(e, n),
    opacity: Ak(Kt(e, "opacity", n))
  };
}
const Ik = 2, Ok = ["sky", "world"], Ek = ["input", "output", "temp"], Oy = [0.42, 0, 0.58, 1];
function pn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Jt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function lc(e, t) {
  const n = Jt(e, t);
  return n !== null && n > 0 ? n : t;
}
function mr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function wo(e) {
  const t = Jt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function Qm(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Ey(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Jt(n, null));
  return t.includes(null) ? null : t;
}
function Fy(e) {
  return Ey(e) || [0, 0, 0];
}
function Ty(e) {
  const t = pn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: mr(Jt(t.pitch_deg, 0), -90, 90),
    roll_deg: Jt(t.roll_deg, 0)
  };
}
function Fk(e) {
  return mr(Jt(e, 90), 0.1, 179);
}
function Tk(e) {
  return lc(e, 1);
}
function Dk(e) {
  const t = pn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: mr(Jt(t.pitch_deg, 0), -90, 90)
  };
}
function Lk(e) {
  return Jt(e, 0);
}
function Rk(e) {
  const t = pn(e) ? e : {};
  return {
    hFOV_deg: mr(Jt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: mr(Jt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Dy(e) {
  return mr(Jt(e, 1), 0, 1);
}
const Hd = [["position", Fy], ["rotation", Ty], ["fov", Fk]], Lc = [["position", Fy], ["rotation", Ty], ["scale", Tk]], Gd = [["direction", Dk], ["roll", Lk], ["size", Rk], ["opacity", Dy]], Kd = [...Lc, ["opacity", Dy]];
function Vk(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Jt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Oy];
}
function $k(e) {
  if (!pn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Ey(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function zk(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!pn(o)) continue;
    const a = wo(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: Vk(o.easing) }, u = n ? $k(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function zf(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = pn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: zk(a.keyframes, o, r === "position") };
  }
  return n;
}
function Ly(e) {
  const t = pn(e) ? e : {}, n = wo(t.start), r = wo(t.in), o = wo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function jk(e) {
  const t = pn(e) ? e : {}, n = mr(Jt(t.x0, 0), 0, 1), r = mr(Jt(t.y0, 0), 0, 1), o = mr(Jt(t.x1, 1), 0, 1), a = mr(Jt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function Hk(e) {
  if (!pn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Ek.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Gk(e) {
  const t = Hk(e.source);
  if (!t) return null;
  const n = Ok.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Ly(e.clip),
    visible: Qm(e.visible, !0),
    locked: Qm(e.locked, !1),
    crop: jk(e.crop),
    ...zf(e, r ? Kd : Gd)
  };
  return r || (o.z_index = wo(e.z_index) ?? 0), o;
}
function Kk(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = pn(a) ? Gk(a) : null;
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
function cc(e) {
  const t = pn(e.timeline) ? e.timeline : {}, n = pn(e.camera) ? e.camera : {}, r = pn(e.scene) ? e.scene : {}, o = wo(t.length);
  return {
    version: Ik,
    timeline: {
      fps: lc(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: lc(n.aspect, 1), ...zf(n, Hd) },
    scene: { clip: Ly(r.clip), ...zf(r, Lc) },
    stickers: Kk(e.stickers),
    painting: sa(e.painting),
    painting_layer: pn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function Wk(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!pn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Bk(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!pn(t)) return {};
  const n = mr(Jt(t.hFOV_deg, 90), 1, 179), r = mr(Jt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Uk(e) {
  const t = pn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(pn) : [];
  return n.sort((r, o) => Jt(r.z_index, 0) - Jt(o.z_index, 0)), cc({
    camera: Bk(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: Wk(r, t),
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
function vi(e) {
  if (e == null || typeof e == "string" && !e.trim()) return cc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!pn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Uk(t) : cc(t);
}
function qu(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function eg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Ps(e, t) {
  if (lc(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => wo(c * n), { length: o } = e.timeline, a = eg(e.scene.clip, r);
  return cc({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...qu(e.camera, Hd, r, 0, 0) },
    scene: { clip: a.clip, ...qu(e.scene, Lc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: u, anchor: d, newAnchor: b } = eg(c.clip, r), y = c.placement === "world" ? Kd : Gd;
      return { ...c, clip: u, ...qu(c, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Ju(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Ry(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Wd(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= po);
}
function Vy(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Ry(e.keyframes[r - 1].easing) : [...Oy];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function In(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Ju(o.value, r);
    return;
  }
  const a = Wd(o, n);
  a ? a.value = Ju(a.value, r) : Vy(o, n, Ju(Kt(e, t, n), r));
}
function ji(e) {
  return e.placement === "world" ? Kd.map(([t]) => t) : e.placement === "sky" ? Gd.map(([t]) => t) : (e.clip ? Lc : Hd).map(([t]) => t);
}
function Yk(e, t) {
  for (const n of ji(e))
    Wd(e[n], t) || Vy(e[n], t, Kt(e, n, t));
}
function Xk(e) {
  const t = ji(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function qk(e, t) {
  return ji(e).every((n) => !!Wd(e[n], t));
}
function Jk(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Kt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function Zk(e, t, n, r, o) {
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
function $y(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function Qk(e, t, n) {
  const r = $y(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function eM(e, t, n, r) {
  for (const o of $y(e, t, n)) o.easing = Ry(r);
}
function tM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function nM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function rM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function tg(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function jf(e) {
  return ji(e).map((t) => e[t]);
}
function zy(e, { camera: t = !1 } = {}) {
  return [...t ? [e.camera] : [], e.scene, ...e.stickers].some((n) => jf(n).some((r) => r.keyframes.length > 0)) || !tg(e.scene.clip) || e.stickers.some((n) => !tg(n.clip));
}
function jy(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o)
    for (const c of jf(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of jf(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return a;
}
function iM(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let gl = { text: null, parsed: null };
function Xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function uc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function oM({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Xn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: sa(null),
    painting_layer: null,
    ui_settings: uc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Hy(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function aM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function sM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function lM(e) {
  return Array.isArray(e) ? e.map((t) => zd(t)) : [];
}
function cM(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Gy(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = oM(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (gl.text === o ? a = gl.parsed : (a = JSON.parse(o), gl = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: aM(a.assets),
      stickers: sM(a.stickers),
      shots: lM(a.shots),
      painting: sa(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: uc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = uc({ ...u.ui_settings, ...c })), u.output_preset = Hy(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Xn(n.coverage), delete u.editor_history, u;
  } catch {
    return gl = { text: o, parsed: null }, r;
  }
}
function ng(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function uM(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function fM(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Ky(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: u = null, scene: d = null } = t;
  let b;
  try {
    b = vi(e);
  } catch {
    b = vi(null);
  }
  if (u && u !== b.timeline.fps && (b = Ps(b, u)), d) {
    let y = vi(d);
    u && u !== y.timeline.fps && (y = Ps(y, u)), b = { ...y, camera: b.camera, cutout_state: b };
  }
  return {
    ...b,
    coverage: Xn(o),
    bg_color: r,
    output_preset: Hy(n),
    ui_settings: uc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function dM(e, t) {
  e.cutout_state && (e.cutout_state = Ps(e.cutout_state, t));
  const n = Ps(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of ji(a)) a[u].keyframes = c[u].keyframes;
    }
}
function Bd(e, t) {
  const n = _o(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const pM = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function rg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function hM(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[pM[n]].keyframes.length));
}
function Wy(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = rg(n, ["yaw_deg", "pitch_deg"]), a = rg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && In(e, "direction", r, o), n.rot_deg !== void 0 && In(e, "roll", r, n.rot_deg), Object.keys(a).length && In(e, "size", r, a);
}
const Rc = ["position_x", "position_y", "position_z"], Hf = "camera";
function ig(e, t) {
  const n = jd(e, t);
  return zd({
    id: Hf,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: mk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function mM(e) {
  return e - 360 * Math.round(e / 360);
}
function gM(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + mM(n[a] - r[a]));
  Object.keys(o).length && In(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && In(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Nt * 0.5) / Math.tan(n.vFOV_deg * Nt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && In(e, "position", t, [...n.position]);
}
function yM(e, t) {
  const n = Kt(e, "position", t), r = Kt(e, "rotation", t);
  return {
    ...Object.fromEntries(Rc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Kt(e, "fov", t)
  };
}
function bM(e, t, n, r) {
  const o = Rc.indexOf(n);
  if (o >= 0) {
    const a = Kt(e, "position", t);
    a[o] = r, In(e, "position", t, a);
  } else n === "hFOV_deg" ? In(e, "fov", t, r) : In(e, "rotation", t, { [n]: r });
}
function vM(e, t, n) {
  In(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function _M(e, t) {
  const n = _o(e, t);
  return {
    ...Object.fromEntries(Rc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function wM(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = Rc.indexOf(n);
  if (a >= 0) {
    const c = Kt(e, "position", o);
    c[a] = r, In(e, "position", o, c);
  } else n === "scale" ? In(e, "scale", o, r) : n === "opacity" ? In(e, "opacity", o, r / 100) : In(e, "rotation", o, { [n]: r });
}
function xM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && In(e, o, r, n[o]);
}
function SM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function kM(e, t, n) {
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
function Tl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function By(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ud(e, t, n, r) {
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
function MM(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Yt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Gf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Uy(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Yy(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Xy(e, t) {
  return e != null && e.__panoSceneStateV2 ? JSON.stringify(vi(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t)) : JSON.stringify(t);
}
function qy(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = vi(n);
    if (JSON.stringify(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && JSON.stringify(vi(Ps(o, a))) === t;
  } catch {
    return !1;
  }
}
const Zu = 0.15, NM = 0.01, PM = 1e-3, AM = 0.05, CM = 4, og = 250, IM = 16, Kr = 1, OM = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function or(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function qr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Vc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function wa(e, t, n = 0) {
  const r = Jn(e, t, n), o = qr(r, 2);
  return { right: qr(r, 0), up: qr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function EM(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Kf(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function FM(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Kf(e, "3dof", n);
}
function TM(e) {
  return or(e.position, wa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Ki(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ms(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function la(e, t) {
  return ms(Ki(t, e.position), wa(e.yaw_deg, e.pitch_deg).forward);
}
function Qu(e, t, n = null, r = Kr) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * AM;
  if (n && la(e, n) > 0) {
    const a = Ki(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : or(e.position, a, o / c);
  }
  return or(e.position, wa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function ag(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > CM ? !1 : t.time - e.time < og || e.cost > IM && t.time - e.wheelTime < og;
}
function Yd(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return { tanX: r, tanY: r * n / t };
}
function sg(e, t, n, r, o = TM(e)) {
  const a = Yt(e.yaw_deg + t / r * 360), c = Q(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Jn(e.yaw_deg, e.pitch_deg, 0), d = Jn(a, c, 0), b = Ki(e.position, o), y = [0, 1, 2].map((w) => ms(qr(u, w), b)), v = { ...e, yaw_deg: a, pitch_deg: c, position: or(o, Vc(d, y)) };
  return { ...v, distance: la(v, o) };
}
function lg(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = wa(e.yaw_deg, e.pitch_deg), d = 2 * a * Yd(e, r, o).tanY / o;
  return { ...e, position: or(or(e.position, c, -t * d), u, n * d), distance: a };
}
function cg(e, t, n, r = Kr) {
  const o = Ki(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * NM, d = n > 0 ? Math.min(Math.max(a * Zu, u), a - c * PM) : -Math.max(a * Zu / (1 - Zu), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: or(e.position, o, d / a) };
  return { ...b, distance: la(b, t) };
}
function ug(e, t, n, r) {
  const { tanX: o, tanY: a } = Yd(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = wa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: or(t.center, d, -u), distance: u };
}
function ef(e, t, n, r = null) {
  return Jy({
    quaternion: Mo(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Yd(e, t, n).tanY) * cn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Jy(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Kr }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function As(e, t, n, r) {
  const { right: o, up: a, forward: c } = Zy(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Nt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], w = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - w / d / b), z: d };
}
function Zy(e) {
  const t = ks(e.quaternion), n = qr(t, 2);
  return { right: qr(t, 0), up: qr(t, 1), forward: n.map((r) => -r) };
}
function fg(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function DM({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function Qy(e, t) {
  if (!e || !t.active) return null;
  const n = VM(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Wf(t),
    itemQuaternion: e.kind === "splat" ? OM : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function LM(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = Qy(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function RM(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function VM(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Wf(e) {
  return {
    position: [...e.position],
    quaternion: Mo(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Bf(e, t) {
  return or(e.position, Vc(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Uf(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Yf({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function Xf(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function $M(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...Yf(t).map((a) => Bf(e.scene, a)));
  for (const a of n) o.push(...Xd(a));
  for (const { box: a, value: c } of r) o.push(...Yf(a).map((u) => Bf(c, u)));
  return o;
}
function zM(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Mo(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function Xd(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => or(e.position, Vc(e.rotation, [r, o, 0])));
}
function jM(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? Xf(Xd(o)) : a != null && a.box ? Xf(Yf(Uf(a.kind, a.box)).map((c) => Bf(r, c))) : { center: [...r.position], radius: r.scale };
}
const HM = 2, GM = 0.5, KM = 30;
function eb(e, t) {
  const n = Ki(t, e), r = Math.atan2(n[0], -n[2]) * cn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * cn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function WM(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * GM : HM, a = t ? [...t] : or(e.position, wa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Ki(a, e.position)), u = c > 0 ? eb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(KM * 0.5 * Nt);
  return { position: a, rotation: u, scale: d };
}
function dg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function BM(e) {
  return [0, 1, 2].map((t) => qr(e, t));
}
function pg(e, t, n, r) {
  if (e === "translate") return { position: or(t.position, Ki(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * JM(n.scale, r.scale) / n.scale };
  const o = dg(ks(r.quaternion), BM(ks(n.quaternion))), a = dg(o, Jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = My(a);
  return Math.abs(u) <= UM ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: YM(a, t.yaw_deg) } };
}
const UM = 89.9;
function YM(e, t) {
  const n = qr(e, 0), r = qr(e, 1), o = Math.cos(t * Nt), a = Math.sin(t * Nt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * cn + 0;
}
const XM = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function qM(e, t, n, r, o) {
  if (!As(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = Zy(e), d = Ki(t, e.position), b = ms(d, a), y = ms(d, c), v = ms(d, u), w = Math.tan(e.fovY_deg * 0.5 * Nt), N = w * e.aspect, k = Math.hypot(b, y, v) * XM[n] * Math.min(1.9 * w, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (j) => {
    const F = k * Math.sqrt(j * j + v * v - k * k);
    return [(j * v - F) / (v * v - k * k), (j * v + F) / (v * v - k * k)];
  }, [E, L] = P(b), [S, W] = P(y);
  return {
    minX: r * 0.5 * (1 + E / N),
    maxX: r * 0.5 * (1 + L / N),
    minY: o * 0.5 * (1 - W / w),
    maxY: o * 0.5 * (1 - S / w)
  };
}
function JM(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function ZM(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function hg(e, t) {
  const n = Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Nt) * t, o = r / e.aspect, a = (b, y, v) => or(e.position, Vc(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function QM(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = As(e, c, r, o), b = As(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, w = Q(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * w - n.x, d.y + v * w - n.y) <= a;
  });
}
function eN(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function tN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Kt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Kt(r, "position", d);
  });
}
const mg = 2048, tb = 0.28;
function nb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return {
    quaternion: Mo(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * cn,
    aspect: r
  };
}
function gs(e) {
  const t = Si(e);
  return {
    quaternion: Mo(Jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function gg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = $d(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * cn,
      vFOV_deg: 2 * Math.atan(a / r) * cn
    }
  };
}
function rb(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = ks(e.quaternion), w = Math.tan(e.fovY_deg * 0.5 * Nt), N = w * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const E = yk(k), L = r * E.x + c * E.y + b * E.z, S = o * E.x + u * E.y + y * E.z, W = -(a * E.x + d * E.y + v * E.z), j = Math.max(W, P);
      return {
        x: t * 0.5 * (1 + L / j / N),
        y: n * 0.5 * (1 - S / j / w),
        z: W
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const E = (k / t * 2 - 1) * N, L = (1 - P / n * 2) * w;
      return Ld(Fl({
        x: r * E + o * L - a,
        y: c * E + u * L - d,
        z: b * E + y * L - v
      }));
    }
  };
}
function nN(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = sc(e, t), c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const v = n(u);
    if (!v) return;
    const w = Math.tan(b.hFOV_deg * 0.5 * Nt), N = Math.tan(b.vFOV_deg * 0.5 * Nt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: y ? tb : b.opacity,
      zIndex: r(u),
      quaternion: Mo(Jn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * w,
        x1: (2 * k.x1 - 1) * w,
        y0: (1 - 2 * k.y1) * N,
        y1: (1 - 2 * k.y0) * N
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function ib(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return nN(e, t, {
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
function rN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function iN(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = sc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: w, height: N } = rN(v.media), k = zM(b, u.crop, w, N);
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
const tf = /* @__PURE__ */ new WeakMap();
let oN = 1;
function qf(e) {
  return tf.has(e) || tf.set(e, oN++), tf.get(e);
}
function yg(e) {
  return e && typeof e == "object" ? qf(e) : e;
}
function bg({ background: e, layers: t }) {
  return JSON.stringify([
    e && [qf(e.media), yg(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, qf(n.media), yg(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function aN({ onReady: e, onFailed: t, onUpdate: n = () => {
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
  return import("./.lazy/pano_three_view-BX28enPX.js").then((c) => c.$).then((c) => {
    o || (r = c.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((c) => {
    console.error("[PanoramaStickers] three.js view is unavailable", c), a.failed = !0, t();
  }), a;
}
const ob = "3D view unavailable. Check the browser console.";
function fc(e, t, n) {
  return nb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function sN(e) {
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
const ab = sN(
  () => import("./.lazy/pano_three_view-BX28enPX.js").then((e) => e.$).then((e) => e.createThreeView())
), Wi = ["erp_image", "bg_erp", "bg_media"], Dl = ["source"], qd = ["sticker_image", "sticker"], sb = ["scene"], lN = {
  background: [...Wi, ...Dl],
  "external-sticker": [...qd, ...Dl],
  scene: [...sb, ...Dl]
};
function lb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function cb(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = lb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function cN(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function ub(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function uN(e, t) {
  const { graph: n, entry: r } = ub(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = lb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const fb = [...Wi, ...qd, ...sb, ...Dl], fN = 256, Qo = /* @__PURE__ */ new Map(), nf = /* @__PURE__ */ new WeakMap();
let db = () => null;
function pb(e) {
  return nf.has(e) || nf.set(e, JSON.stringify(e)), nf.get(e);
}
function dN(e) {
  db = e;
}
function dc(e, t) {
  const n = pb(e);
  Qo.delete(n), Qo.set(n, t), Qo.size > fN && Qo.delete(Qo.keys().next().value);
}
function vn(e, t) {
  var a;
  const n = e ? db(e) : null;
  if (!n) return !0;
  const r = cb(e);
  let o = Qo.get(pb(n));
  if (o)
    dc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => fb.includes(c == null ? void 0 : c.name)))) return !0;
    dc(n, r), o = r;
  }
  return lN[t].every((c) => o[c] === r[c]);
}
const pc = /* @__PURE__ */ new WeakSet();
async function Jf(e, t) {
  if (pc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && pc.add(e), n.ok && r !== void 0 ? r : null;
}
function hb(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = ub(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => fb.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: uN(n, t) };
}
const Ll = /* @__PURE__ */ new Map();
function pN(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Ll.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Jf(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = hb(o, a);
        c && dc(c.output, c.inputs);
      }
    });
}
const hN = 5;
function mN(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${hN}`, r = Jf(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Jf(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, y, v, w;
      const d = String(c.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const k = await a(N);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((w = (v = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : v[d]) == null ? void 0 : w.class_type) !== c.comfyClass ? null : hb(k, d);
      }
      return null;
    }
  };
}
function gN(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Wo = null;
async function yN(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || pc.has(n) || (u = Ll.get(o)) != null && u.has(r) || gN(t)) return null;
  (Wo == null ? void 0 : Wo.workflowId) !== o && (Wo = { workflowId: o, history: mN(n, o) }, queueMicrotask(() => {
    Wo = null;
  }));
  const c = await Wo.history.lastNodeOutput(e, a);
  return a() ? c ? (dc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (pc.has(n) || Ll.set(o, (Ll.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function vg(e, t, n, r = Wi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const _g = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Rl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return _g.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return _g.test(String((e == null ? void 0 : e.filename) || ""));
}
const rf = /* @__PURE__ */ new WeakMap();
function bN(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Zf(e) {
  return bN(e) ? (rf.has(e) || rf.set(e, Math.random().toString(36).slice(2, 10)), rf.get(e)) : "run";
}
function mb(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function vN(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function Jd(e, t = [], n = null) {
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
function _N({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var E;
  const r = ((E = e == null ? void 0 : e.createElement) == null ? void 0 : E.call(e, "video")) || null;
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
  }, w = () => o();
  let N = !1;
  const k = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", v), r.addEventListener("pause", w), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var L, S;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", w), r.removeEventListener("error", k), r.pause(), (L = r.removeAttribute) == null || L.call(r, "src"), (S = r.load) == null || S.call(r));
  }, failed: () => N };
}
function ro(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function wN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function wg(e, t, n = null) {
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
  return !r && n != null && (r = wN(e == null ? void 0 : e.graph, n)), r;
}
function xN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function SN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function kN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function gb({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (F) => {
    if (!F) return "";
    if (typeof F == "string") return String(F || "").trim();
    if (Array.isArray(F)) {
      if (F.length === 0) return "";
      if (F.length === 1) return o(F[0]);
      const G = String(F[0] || "").trim();
      if (G)
        return ro(t, {
          filename: G,
          subfolder: String(F[1] || "").trim(),
          type: String(F[2] || "output").trim() || "output"
        });
      for (const A of F) {
        const ee = o(A);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (F == null ? void 0 : F.src) == "string" && F.src ? F.src : typeof (F == null ? void 0 : F.url) == "string" && F.url ? F.url : ro(t, F);
  }, a = (F) => {
    if (!F || typeof F != "object") return "";
    const G = String(F.type || "").trim().toLowerCase();
    if (G === "dataurl") return String(F.value || "");
    if (G !== "comfy_image") return "";
    const A = String(F.filename || "").trim();
    return A ? ro(t, {
      filename: A,
      subfolder: String(F.subfolder || ""),
      type: String(F.storage || "input")
    }) : "";
  }, c = (F) => {
    const G = e == null ? void 0 : e.nodeOutputs;
    if (!G || F == null) return null;
    const A = String(F);
    return G instanceof Map ? G.get(F) || G.get(A) || G.get(Number(A)) || null : G[F] || G[A] || null;
  }, u = (F, G) => {
    var ee;
    const A = c(F == null ? void 0 : F.id);
    return Array.isArray((ee = A == null ? void 0 : A.ui) == null ? void 0 : ee[G]) ? A.ui[G] : Array.isArray(A == null ? void 0 : A[G]) ? A[G] : [];
  }, d = (F, G) => {
    const A = c(F == null ? void 0 : F.id);
    return A != null && A.ui && Object.prototype.hasOwnProperty.call(A.ui, G) ? A.ui[G] : A && Object.prototype.hasOwnProperty.call(A, G) ? A[G] : null;
  }, b = (F, G) => {
    const A = d(F, "pano_sticker_input_state_hash"), ee = Array.isArray(A) ? A[0] : A;
    return String(ee ?? "").trim() || kN(G);
  }, y = (F) => {
    const G = [], A = /* @__PURE__ */ new Set();
    for (const ee of F || []) {
      const Se = o(ee);
      !Se || A.has(Se) || (A.add(Se), G.push(Se));
    }
    return G;
  }, v = (F, G) => {
    var Se;
    const A = [];
    Array.isArray(F == null ? void 0 : F.images) && F.images.length && A.push(F.images), Array.isArray((Se = F == null ? void 0 : F.ui) == null ? void 0 : Se.images) && F.ui.images.length && A.push(F.ui.images);
    const ee = [];
    for (const K of A)
      G >= 0 && G < K.length && ee.push(K[G]), ee.push(...K);
    return ee;
  }, w = (F, G) => {
    var te;
    const A = String(G || "").trim();
    if (!A) return { src: "", sourceType: "", inputName: "" };
    const Se = (Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : []).findIndex((de) => String((de == null ? void 0 : de.name) || "") === A);
    if (Se < 0) return { src: "", sourceType: "", inputName: A };
    const K = F.graph ? F.getInputLink(Se) : null;
    if ((K == null ? void 0 : K.origin_id) == null) return { src: "", sourceType: "", inputName: A };
    const R = K.origin_id, se = wg(F, Se, R);
    if (!se) return { src: "", sourceType: "", inputName: A };
    const Pe = Number(K.origin_slot ?? 0);
    let J = [];
    try {
      J = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      J = [];
    }
    if (Array.isArray(J) && J.length) {
      const de = [];
      Pe >= 0 && Pe < J.length && de.push(J[Pe]), de.push(...J);
      const Ce = y(de.filter((T) => !Rl(T)));
      if (Ce.length)
        return { src: Ce[0], srcCandidates: Ce, sourceType: "appNodeImageUrls", inputName: A };
    }
    const O = c((se == null ? void 0 : se.id) ?? R), X = y(v(O, Pe).filter((de) => !Rl(de))).map((de) => `${de}&pano_src=${Zf(O)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: A };
    const V = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (V.length) {
      const de = [];
      Pe >= 0 && Pe < V.length && de.push(V[Pe]), de.push(...V);
      const Ce = y(de);
      if (Ce.length)
        return { src: Ce[0], srcCandidates: Ce, sourceType: "nodeImgs", inputName: A };
    }
    const Z = (te = se == null ? void 0 : se.widgets) == null ? void 0 : te.find((de) => String((de == null ? void 0 : de.name) || "").toLowerCase() === "image");
    if (Z) {
      let de = o(Z.value);
      if (de && !de.includes("/") && !de.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (de = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(de)}&type=input&subfolder=`), de) return { src: de, sourceType: "widget", inputName: A };
    }
    return { src: "", sourceType: "", inputName: A };
  }, N = (F, G = []) => {
    var ee;
    const A = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs : [];
    for (const Se of G) {
      const K = A.findIndex((J) => String((J == null ? void 0 : J.name) || "") === Se), R = K >= 0 && F.graph ? F.getInputLink(K) : null;
      if ((R == null ? void 0 : R.origin_id) == null) continue;
      const se = c(((ee = wg(F, K, R.origin_id)) == null ? void 0 : ee.id) ?? R.origin_id), Pe = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(Rl);
      return Pe ? `${ro(t, Pe)}&pano_src=${Zf(se)}` : "";
    }
    return "";
  }, k = (F, G = []) => {
    const A = Array.isArray(G) ? G : [G];
    for (const ee of A) {
      const Se = w(F, ee);
      if (String((Se == null ? void 0 : Se.src) || "").trim()) return Se;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (F) => {
    const G = String(F || "").trim();
    if (!G) return [];
    if (xN(G)) return [G];
    const { filename: A, subfolder: ee } = SN(G);
    return A ? y([
      ro(t, { filename: A, subfolder: ee, type: "temp" }),
      ro(t, { filename: A, subfolder: ee, type: "output" }),
      ro(t, { filename: A, subfolder: ee, type: "input" }),
      G
    ]) : [G];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (F) => {
      var G, A;
      try {
        (A = (G = F == null ? void 0 : F.__panoLinkedInputImageCache) == null ? void 0 : G.forEach) == null || A.call(G, (ee, Se, K) => {
          var R;
          ee != null && ee.img && ((R = r == null ? void 0 : r.isImageLoadFailed) != null && R.call(r, ee.img)) && K.delete(Se);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (F, G) => {
      var A;
      (A = F == null ? void 0 : F.delete) == null || A.call(F, `__ui__${String(G || "")}`);
    },
    linkedValue: (F, G) => {
      var R, se, Pe, J;
      const A = String(G || ""), ee = Array.isArray(F == null ? void 0 : F.inputs) ? F.inputs.findIndex((O) => String((O == null ? void 0 : O.name) || "") === A) : -1, Se = ee >= 0 && F.graph ? F.getInputLink(ee) : null;
      if (Se) {
        const O = c(Se.origin_id), X = [
          O == null ? void 0 : O.output,
          O == null ? void 0 : O.result,
          (R = O == null ? void 0 : O.data) == null ? void 0 : R.output,
          (se = O == null ? void 0 : O.data) == null ? void 0 : se.result,
          (Pe = O == null ? void 0 : O.ui) == null ? void 0 : Pe.output,
          (J = O == null ? void 0 : O.ui) == null ? void 0 : J.result
        ];
        for (const V of X) {
          if (!Array.isArray(V)) continue;
          const Z = V[Number(Se.origin_slot || 0)];
          if (typeof Z == "string" && Z.trim()) return Z;
        }
      }
      const K = Array.isArray(F == null ? void 0 : F.widgets) ? F.widgets.find((O) => String((O == null ? void 0 : O.name) || "") === A) : null;
      return String((K == null ? void 0 : K.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (F, G = [], A = null, ee = "") => {
      var ht;
      const Se = Array.isArray(G) ? G : [G], K = k(F, Se), se = (Array.isArray(K == null ? void 0 : K.srcCandidates) && K.srcCandidates.length ? K.srcCandidates : [K == null ? void 0 : K.src]).map((we) => String(we || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const Pe = y(se.flatMap((we) => P(we)));
      if (!Pe.length) return null;
      F.__panoLinkedInputImageCache || (F.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const J = String(ee || Se.join("|") || "image_exact"), O = se.join(`
`), X = F.__panoLinkedInputImageCache.get(J);
      if (X && X.srcRaw === O && X.img) return X.img;
      const V = n || globalThis.Image;
      if (typeof V != "function") return null;
      const Z = new V();
      (ht = r == null ? void 0 : r.markImageLoading) == null || ht.call(r, Z, O);
      const te = { srcRaw: O, resolvedSrc: "", img: Z };
      F.__panoLinkedInputImageCache.set(J, te);
      let de = -1;
      const Ce = (we) => {
        var gn, At, _n;
        we === "ready" ? (gn = r == null ? void 0 : r.markImageReady) == null || gn.call(r, Z, O) : (At = r == null ? void 0 : r.markImageFailed) == null || At.call(r, Z, O), A == null || A(Z), (_n = F.setDirtyCanvas) == null || _n.call(F, !0, !0);
      }, T = () => {
        if (de += 1, de >= Pe.length) {
          Ce("failed");
          return;
        }
        te.resolvedSrc = Pe[de], Z.src = te.resolvedSrc;
      };
      return Z.onload = () => Ce("ready"), Z.onerror = () => {
        if (de + 1 < Pe.length) {
          T();
          return;
        }
        Ce("failed");
      }, T(), Z;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (F, G, A, ee = null) => {
      var O, X, V;
      const Se = u(F, G)[0] || null, K = o(Se);
      if (!K) return null;
      const R = `__ui__${G}`, se = (O = A == null ? void 0 : A.get) == null ? void 0 : O.call(A, R);
      if (se && se.__panoSrc === K) return se;
      const Pe = n || globalThis.Image;
      if (typeof Pe != "function") return null;
      const J = new Pe();
      return J.__panoSrc = K, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, J, K), J.onload = () => {
        var Z;
        (Z = r == null ? void 0 : r.markImageReady) == null || Z.call(r, J, K), ee == null || ee(J);
      }, J.onerror = () => {
        var Z;
        (Z = r == null ? void 0 : r.markImageFailed) == null || Z.call(r, J, K), ee == null || ee(J);
      }, J.src = K, (V = A == null ? void 0 : A.set) == null || V.call(A, R, J), J;
    },
    uiList: u,
    uiValue: d
  };
}
const MN = 1e-3;
function yb(e, t, n, r) {
  if (!Vi(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(MN / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function bb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function NN(e, t) {
  return Math.floor(e * t.fps);
}
function vb(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const xg = 4;
function _b({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((w, N) => w !== n[N])) && (n = c, r.clear(), o = null), u === null) return null;
      const y = NN(u, d);
      for (let w = y; w < Math.min(n.length, y + xg + 1); w += 1) a(w);
      for (const w of r.keys())
        (w < y || w > y + xg) && w !== o && r.delete(w);
      const v = r.get(y);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function wb({
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
      const w = t(c, v);
      return w.changed ? (c = w.state, u = !0, r(c), y(), !0) : !1;
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
      const w = t(e(), v);
      return w.changed ? (o(w.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const Vl = "sticker_image_1", xb = "external_image", ya = 0;
function ca(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function of(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Hi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Qf(e, t = ya) {
  return (e == null ? void 0 : e.version) !== 2 ? Hi(e) : Hi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: _o(n, t).active,
    external: n.source.kind === "port",
    ...Bd(n, t)
  }));
}
function Zd(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Hi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Sb(e) {
  return String((e == null ? void 0 : e.id) || "") === Vl || String((e == null ? void 0 : e.source_kind) || "") === xb;
}
function Qd(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Sb(t);
}
const kb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Mb(e) {
  return !Sb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(kb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Nb(e) {
  const t = Mb(e);
  return t ? kb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Pb(e, t = {}) {
  var j, F, G;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((A) => String((A == null ? void 0 : A.id) || "") === Vl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const A = String(((j = e.active) == null ? void 0 : j.selected_sticker_id) || "") === Vl;
    return {
      state: {
        ...e,
        stickers: n.filter((ee, Se) => Se !== r),
        active: A ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), w = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const A = ca(P, v, w), ee = Number(((F = c == null ? void 0 : c.initial_pose) == null ? void 0 : F.hFOV_deg) ?? P), Se = ca(ee, v, w), K = Number(((G = c == null ? void 0 : c.initial_pose) == null ? void 0 : G.vFOV_deg) ?? Se);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - A) <= 1e-6 && Math.abs(K - Se) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((R, se) => se === r ? {
          ...R,
          vFOV_deg: A,
          initial_pose: R.initial_pose && typeof R.initial_pose == "object" ? { ...R.initial_pose, vFOV_deg: Se } : R.initial_pose
        } : R)
      },
      changed: !0
    };
  }
  const E = n.reduce((A, ee) => Math.max(A, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), L = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: y ? ca(P, v, w) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, S = {
    ...c || {},
    id: Vl,
    source_kind: xb,
    source_link_id: o,
    source_state_hash: a,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: E + 1
  }, W = r >= 0 ? n.map((A, ee) => ee === r ? S : A) : [...n, S];
  return { state: { ...e, stickers: W }, changed: !0 };
}
function Sg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const PN = ["IMAGE", "VIDEO"];
function kg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => PN.includes(n)) ? "2d" : null;
}
function AN(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? kg(r.type) ?? kg((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Ab(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Sg(e, "sticker"),
    awaitingPose: !t && (Sg(e, "sticker_state") || AN(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Mg(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return vi({ version: 2, stickers: [n] }).stickers[0];
}
function Cb(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((E) => Qd(e, E)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const E = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((L, S) => S !== c),
        active: E ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const E = { ...Mg(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((L, S) => S === c ? E : L) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const E = [u.size.value, ...u.size.keyframes.map((W) => W.value)], L = E.map((W) => ca(W.hFOV_deg, o, a));
    if (E.every((W, j) => Math.abs(W.vFOV_deg - L[j]) <= 1e-6)) return { state: e, changed: !1 };
    const S = {
      value: { ...u.size.value, vFOV_deg: L[0] },
      keyframes: u.size.keyframes.map((W, j) => ({ ...W, value: { ...W.value, vFOV_deg: L[j + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((W, j) => j === c ? { ...W, size: S } : W) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((E) => E.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Mg(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), w = (E) => d ? ca(E, o, a) : E, N = Ud(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: w(v)
  }, Hi(e).reduce((E, L) => Math.max(E, L.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((E) => ({ ...E, value: { ...E.value, vFOV_deg: w(E.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function ep(e) {
  const t = Hi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: of(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: of(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: of(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function Ib(e) {
  const t = Zd(e), n = Qd(e, t), r = Hi(e).some((u) => u && u.visible !== !1), o = ep(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Nb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function CN(e) {
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
function Ng(e, t) {
  const n = Zd(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = CN(e), o = String(n.id || ""), a = ep(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function IN(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function ON(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Pb(e, t.value);
  if (t.type === "sync-port") return Cb(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((w) => String((w == null ? void 0 : w.id) || "") === a))
      return { state: e, changed: !1 };
    const d = ep(e).reduce((w, N) => Math.max(w, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ca(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ud(a, Tl(o.asset), y, d + 1)],
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
  const n = Zd(e);
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
    const o = Mb(n);
    return !o || !Nb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Ng(e, "front");
  if (t.type === "send-back") return Ng(e, "back");
  if (t.type === "delete-selected") {
    if (Qd(e, n))
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
    return e.version !== 2 && (u.assets = IN(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? Bd(n, ya) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = hM(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return Wy(b, ya, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
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
function EN(e = {}) {
  return wb({
    ...e,
    reduce: ON,
    projectModel: Ib
  });
}
const ed = 2;
function lo(e, t) {
  return Math.floor(e * t + 0.5);
}
function FN(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Ob({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, w = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const te of w) te();
    w = [];
  }
  function E(te, de = {}) {
    return P(), v = { name: te, ...de }, u(), v;
  }
  function L(te, de, Ce) {
    const T = () => {
      v === te && Ce();
    };
    e.addEventListener(de, T), w.push(() => e.removeEventListener(de, T));
  }
  function S(te, de) {
    let Ce = t.requestFrame(function T(ht) {
      v === te && (de(ht), v === te && (Ce = t.requestFrame(T)));
    });
    w.push(() => t.cancelFrame(Ce));
  }
  function W(te) {
    d = te, a(d);
  }
  function j() {
    return E(y ? "error" : "idle");
  }
  function F() {
    y = !0, j();
  }
  function G() {
    const { seekable: te } = e, de = te != null && te.length ? te.end(te.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(de) ? de : 1 / 0));
  }
  function A(te) {
    if (!N()) return te === "play" ? se() : j();
    if (e.readyState < ed) {
      const de = E("loading", { then: te });
      return L(de, "loadeddata", () => A(de.then)), L(de, "error", F), de;
    }
    return te === "play" && d / n() >= Number(e.duration) ? se() : ee(te, !1);
  }
  function ee(te, de) {
    const Ce = G();
    if (!e.ended && lo(Number(e.currentTime), n()) === lo(Ce, n())) return Se(te);
    const T = E("seeking", { then: te, frame: d, retried: de });
    return L(T, "seeked", () => {
      const ht = lo(Number(e.currentTime), n()) === lo(G(), n()), we = d === T.frame;
      ht || we && T.retried ? Se(T.then) : ee(T.then, we);
    }), L(T, "error", F), e.currentTime = Ce, T;
  }
  function Se(te) {
    return te === "play" ? K() : (c(), j());
  }
  function K() {
    const te = E("playingVideo", { shown: !1 });
    if (L(te, "pause", () => e.ended ? R() : O()), L(te, "ended", R), L(te, "error", F), o() && lo(Number(e.duration), n()) >= r()) {
      const Ce = e.loop;
      e.loop = !0, w.push(() => {
        e.loop = Ce;
      });
    }
    const de = (Ce, T) => {
      T && !te.shown && (te.shown = !0, u()), Pe(lo(Ce, n()));
    };
    if (k()) {
      let Ce = e.requestVideoFrameCallback(function T(ht, we) {
        v === te && (de(Number(we.mediaTime), !0), v === te && (Ce = e.requestVideoFrameCallback(T)));
      });
      w.push(() => {
        var T;
        return (T = e.cancelVideoFrameCallback) == null ? void 0 : T.call(e, Ce);
      });
    } else
      S(te, () => de(Number(e.currentTime), e.readyState >= ed));
    return Promise.resolve(e.play()).catch(() => {
      v === te && O();
    }), te;
  }
  function R() {
    c(), se();
  }
  function se() {
    const te = E("playingClock", { startTs: t.now(), startFrame: d });
    return S(te, (de) => Pe(te.startFrame + Math.floor((de - te.startTs) / 1e3 * n()))), te;
  }
  function Pe(te) {
    if (te < r()) {
      W(te);
      return;
    }
    if (!o()) {
      J(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), W(0), A("play");
  }
  function J(te) {
    v.name === "playingVideo" ? (P(), e.pause(), W(Math.max(0, te)), c()) : W(Math.max(0, te)), A("still");
  }
  function O() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const te = FN(Number(e.currentTime), n());
      W(Math.min(te, r() - 1)), c(), d === te ? j() : A("still");
    } else v.name === "playingClock" && J(Math.min(d, r() - 1));
  }
  function X() {
    if (!Z()) {
      if (d >= r() - 1 && W(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      A("play");
    }
  }
  function V(te) {
    const de = Math.max(0, Math.round(te));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", W(de), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), W(de), A("still");
  }
  function Z() {
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
      return Z();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: X,
    stop: O,
    seek: V,
    toggle() {
      Z() ? O() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(te) {
      P(), b = !!te, y = !1, A("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function Eb({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(P) {
    u = P, t();
  }
  function y(P) {
    c = P, e.currentTime = P;
  }
  function v() {
    const P = d;
    w(), d !== P && n();
  }
  function w() {
    if (!r || o || e.readyState < ed) return;
    const { time: P, playing: E, fps: L } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (E) {
      if (c !== null) return;
      const S = Number(e.duration), W = Number.isFinite(S) ? Math.min(P, S) : P, j = Math.abs(Number(e.currentTime) - W) > 1.5 / L;
      if (e.ended && !j) return;
      j && y(W), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
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
  for (const [P, E] of Object.entries(N)) e.addEventListener(P, E);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: E = null, playing: L = !1, fps: S }) {
      P !== r && (k(P), n()), a = { time: E, playing: L, fps: S }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, E) {
      return !r || o ? E : a.time === null ? null : a.playing && d ? e : u === null ? E : P;
    },
    dispose() {
      for (const [P, E] of Object.entries(N)) e.removeEventListener(P, E);
      k("");
    }
  };
}
function TN(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function DN({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d }) {
  let b = "", y = "", v = 0;
  const w = /* @__PURE__ */ new Set();
  let N = null, k = null;
  const P = () => o().timeline.fps, E = (K) => K.stickers.find((R) => R.source.kind === "port"), L = () => {
    const K = o(), R = E(K);
    return jy(K, {
      minimum: Math.round(P() * 5),
      frames: Math.max(
        b ? Math.round(v * P()) : 0,
        N && R ? bb(R.clip, P(), N.meta) : 0
      )
    });
  }, S = Ob({
    video: e,
    clock: r,
    fps: P,
    span: L,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), W = () => {
    y === b && Number.isFinite(e.duration) && (v = e.duration);
  }, j = () => {
    y && (w.add(y), d());
  }, F = Eb({ video: t, onCapture: u, onChange: d }), G = _b({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", W), e.addEventListener("error", j);
  function A(K) {
    K !== y && (y = K, e.pause(), K ? e.src = K : e.removeAttribute("src"), e.load(), S.setSource(!!K));
  }
  function ee() {
    S.playing && S.stop();
  }
  function Se(K) {
    const R = E(K);
    k = N && R ? yb(R.clip, S.frame, K.timeline.fps, N.meta) : null, F.follow({
      src: (N == null ? void 0 : N.src) || "",
      time: k,
      playing: S.advancing,
      fps: K.timeline.fps
    });
  }
  return {
    get frame() {
      return S.frame;
    },
    get playing() {
      return S.playing;
    },
    get showsVideo() {
      return S.showsVideo;
    },
    get source() {
      return y;
    },
    pause: ee,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return N;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(K, R) {
      return N != null && N.frames ? G.picture(N.frames, k, N.meta, R) : F.picture(K, R);
    },
    toggle() {
      S.playing ? S.stop() : S.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: K, sources: R, state: se, sticker: Pe = null }) {
      if (N = K ? Pe : null, !K)
        return ee(), A(""), Se(se), !1;
      for (const Z of w)
        R.includes(Z) || w.delete(Z);
      const J = R.find((Z) => Z && !w.has(Z)) || "", O = J !== b;
      O && (b = J, v = 0), A(b);
      const X = zy(se) || !!b && S.state !== "error" || !!N;
      return X || ee(), (O || !X || !S.playing && S.frame >= L()) && S.frame !== ya && S.seek(ya), Se(se), X;
    },
    dispose() {
      S.dispose(), F.dispose(), e.removeEventListener("loadedmetadata", W), e.removeEventListener("error", j), e.pause(), e.removeAttribute("src"), e.load(), y = "";
    }
  };
}
const hc = Math.PI / 180, Yr = 180 / Math.PI, LN = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), RN = 260;
function Pg(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Fb(e, t) {
  return t ? Fb(t, e % t) : e;
}
function VN(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Fb(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function Cs(e, t) {
  const n = Pg(e), r = Pg(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: VN(n, r) };
}
function xo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Tb(e) {
  const t = xo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? fi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function tp(e, t, n = LN) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (E, L, S) => {
    const W = E + L, j = Math.max(0, S - 1), F = W > j && W > 0 ? j / W : 1;
    return [E * F, L * F];
  }, [y, v] = b(d, c, r), [w, N] = b(a, u, o), k = {
    x: y,
    y: w,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - w - N)
  }, P = Rd(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function $N(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = tp({ width: n, height: r }, 1), a = Q(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * hc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = ky(d, _y(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = zN(b, _a(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Vd({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function Db(e) {
  return {
    yaw: Yt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Yr),
    pitch: Q(Math.asin(Q(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Yr, -89.9, 89.9)
  };
}
function zN(e, t) {
  const n = Db(e), r = _a(n.yaw, n.pitch, 0), o = Wu(t, e), a = {
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
    roll: Dc(Math.atan2(
      Wu(u, r.up),
      Wu(u, r.right)
    ) * Yr)
  };
}
function Lb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = tp({ width: n, height: r }, vo(e)), a = bo(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = ky(e, _y(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Db(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Q(2 * Math.atan(n / (2 * a)) * Yr, 1, 179)
  };
}
function jN(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = bo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = $d(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, w = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(Df * hc), P = N >= 1 ? k : k * N, E = N >= 1 ? k / N : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Yr,
      vFOV_deg: 2 * Math.atan(y / u) * Yr
    },
    fallback: w ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(P) * Yr,
        vFOV_deg: 2 * Math.atan(E) * Yr
      }
    }
  };
}
function Bo(e, t) {
  const n = xo(e);
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
function HN(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = bo(n, e);
    return Vd(Rd(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: El(a, t) };
}
function Ag(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Cs(t, n);
  if (!a) return e;
  const c = vo(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Cs(a.height, a.width));
  const u = HN(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function Rb(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (xo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = wy({
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
    const r = xo(e);
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
    return Bo(e, (r) => Ag(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Bo(e, (r) => {
      const a = String(fi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Cs(a[1], a[2]) : Cs(vo(r), 1);
      return c ? Ag(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Bo(e, (o) => {
      const a = Dc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Bo(e, (r) => {
    const o = xy(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Bo(e, (r) => {
    const o = Sy(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Bo(e, (r) => {
    const o = zb(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Vb({
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
function $b(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + by(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: vy(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function zb(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * hc, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, w = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * hc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Yt(Number(e.yaw_deg || 0) - Math.atan(w) / P * Yr),
    pitch_deg: Q(Number(e.pitch_deg || 0) - Math.atan(N) * Yr, -90, 90)
  };
}
function GN({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return wb({
    readState: e,
    reduce: Rb,
    projectModel: Tb,
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
  dof_6: "dof_6"
}), KN = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, WN = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: KN(t[2])
})), BN = {
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
  dof_6: { name: "arrows-move", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 9l3 3l-3 3' /><path d='M15 12h6' /><path d='M6 9l-3 3l3 3' /><path d='M3 12h6' /><path d='M9 18l3 3l3 -3' /><path d='M12 15v6' /><path d='M15 6l-3 -3l-3 3' /><path d='M12 3v6' />" }
}, Cg = Object.fromEntries(
  Object.entries(BN).map(([e, t]) => [e, {
    name: t.name,
    elements: WN(t.body)
  }])
), Vt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Cg, r) ? Cg[r] : null;
    });
    return (r, o) => n.value ? (ne(), ue("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: lt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ne(!0), ue(Ue, null, wt(n.value.elements, (a, c) => (ne(), ue(Ue, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ne(), ue("path", pi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ne(), ue("circle", pi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ne(), ue("rect", pi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ne(), ue("line", pi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ne(), ue("polyline", pi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ne(), ue("polygon", pi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, ln = {
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
    const t = e, n = dt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ne(), br(Mx(e.tag), pi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: V0(() => [
        De(Vt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, UN = ["aria-expanded", "disabled"], YN = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, XN = ["data-aspect", "disabled", "onClick"], qN = { class: "pano-cutout-aspect-custom" }, JN = ["disabled"], ZN = ["disabled"], QN = ["data-custom-width", "data-custom-height", "disabled"], jb = {
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
    ]), a = /* @__PURE__ */ qt("1"), c = /* @__PURE__ */ qt("1"), u = /* @__PURE__ */ qt(null), d = dt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = dt(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], E = String(n.model.aspectLabel || "");
      return P.length ? P.map((L) => {
        const S = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), W = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || S);
        return {
          ...typeof L == "object" && L ? L : {},
          value: S,
          label: W,
          active: E ? S === E : (L == null ? void 0 : L.active) === !0
        };
      }) : o.map((L) => ({
        ...L,
        active: L.value === E
      }));
    }), y = dt(() => {
      var E;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((E = b.value.find((L) => L.active === !0)) == null ? void 0 : E.label) || "Aspect");
    });
    go(y, (P) => {
      const E = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      E && (a.value = E[1], c.value = E[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function w(P) {
      var E;
      n.model.aspectOpen === !0 && ((E = u.value) != null && E.contains(P.target) || v({ type: "close-aspect" }));
    }
    Oc(() => {
      document.addEventListener("pointerdown", w, !0);
    }), Ts(() => {
      document.removeEventListener("pointerdown", w, !0);
    });
    function N(P) {
      const [E, L] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: E,
        height: L,
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
    return (P, E) => (ne(), ue("div", {
      ref_key: "rootElement",
      ref: u,
      class: lt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ne(), br(ln, {
        key: 0,
        icon: e.model.aspectIcon || nt(Ne).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: E[0] || (E[0] = (L) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ne(), ue("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: E[1] || (E[1] = (L) => v({ type: "toggle-aspect" }))
      }, [
        De(Vt, {
          icon: e.model.aspectIcon || nt(Ne).aspect
        }, null, 8, ["icon"]),
        U("span", null, rt(y.value), 1),
        De(Vt, {
          icon: nt(Ne).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, UN)),
      bi(U("div", YN, [
        (ne(!0), ue(Ue, null, wt(b.value, (L) => (ne(), ue("button", {
          key: L.value,
          class: lt(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: d.value,
          onClick: (S) => N(L)
        }, rt(L.label), 11, XN))), 128)),
        U("div", qN, [
          bi(U("input", {
            "onUpdate:modelValue": E[2] || (E[2] = (L) => a.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, JN), [
            [jm, a.value]
          ]),
          E[4] || (E[4] = U("span", { "aria-hidden": "true" }, ":", -1)),
          bi(U("input", {
            "onUpdate:modelValue": E[3] || (E[3] = (L) => c.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, ZN), [
            [jm, c.value]
          ]),
          U("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, QN)
        ])
      ], 512), [
        [So, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, e2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, t2 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ne(), ue("div", {
      class: lt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Rt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Rt(() => {
      }, ["stop"]))
    }, [
      De(ln, {
        icon: nt(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Rt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      U("div", e2, [
        o[3] || (o[3] = U("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ne(!0), ue(Ue, null, wt(nt(n), (a) => (ne(), ue("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          U("kbd", null, rt(a[0]), 1),
          U("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, n2 = {
  class: "pano-view-unavailable",
  role: "status"
}, np = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ne(), ue("div", n2, rt(nt(ob)), 1));
  }
}, r2 = { class: "pano-cutout-node-surface" }, i2 = ["title", "disabled"], o2 = { class: "value" }, a2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, s2 = {
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
    return (r, o) => (ne(), ue("div", r2, [
      U("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Rt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Rt(() => {
        }, ["stop"]))
      }, [
        U("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Vt, {
            icon: nt(Ne).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = U("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(ln, {
          icon: e.model.hasShot ? nt(Ne).delete : nt(Ne).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(jb, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        U("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Rt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Vt, {
            icon: nt(Ne).roll
          }, null, 8, ["icon"]),
          U("span", o2, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, i2),
        De(ln, {
          icon: nt(Ne).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(t2)
      ], 32),
      e.model.hasShot === !1 ? (ne(), ue("div", a2, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ne(), br(np, { key: 1 })) : ct("", !0)
    ]));
  }
}, Hb = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ qt(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const w = o.value;
      return w instanceof HTMLInputElement ? (a = v, c = !0, w.value = "", w.click(), !0) : !1;
    }
    function b(v) {
      var P, E;
      const { active: w, intent: N } = u();
      if (!w) return;
      const k = ((E = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : E[0]) || null;
      if (k) {
        r("file-selected", { intent: N, file: k });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: v, intent: w } = u();
      v && r("file-cancelled", { intent: w });
    }
    return t({ open: d }), (v, w) => (ne(), ue("input", {
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
}, l2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, c2 = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
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
    return (r, o) => (ne(), ue("div", {
      class: lt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Rt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Rt(() => {
      }, ["stop"]))
    }, [
      De(ln, {
        icon: nt(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Rt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      U("div", l2, [
        o[3] || (o[3] = U("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ne(!0), ue(Ue, null, wt(nt(n), (a) => (ne(), ue("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          U("kbd", null, rt(a[0]), 1),
          U("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, u2 = { class: "pano-stickers-node-surface" }, f2 = ["disabled"], d2 = ["aria-label", "data-tip"], p2 = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, h2 = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, m2 = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ qt(null);
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
    return (c, u) => (ne(), ue("div", u2, [
      U("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Rt(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Rt(() => {
        }, ["stop"]))
      }, [
        U("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Vt, {
            icon: nt(Ne).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = U("span", { class: "label" }, "Full Editor", -1))
        ]),
        U("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Vt, {
            icon: nt(Ne).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = U("span", { class: "label" }, "Add Image", -1))
        ], 8, f2),
        De(ln, {
          icon: e.model.locked ? nt(Ne).lock_closed : nt(Ne).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(ln, {
          icon: nt(Ne).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(ln, {
          icon: nt(Ne).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(ln, {
          icon: e.model.isExternalSelection ? nt(Ne).back_initial : nt(Ne).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(c2)
      ], 32),
      e.model.playable === !0 ? (ne(), ue("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Rt(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Rt(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Vt, {
          icon: e.model.playing ? nt(Ne).pause : nt(Ne).play
        }, null, 8, ["icon"])
      ], 40, d2)) : ct("", !0),
      e.model.hasStickers === !1 ? (ne(), ue("div", p2, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ne(), ue("div", h2, "Drop image to add")) : ct("", !0),
      De(Hb, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ne(), br(np, { key: 3 })) : ct("", !0)
    ]));
  }
}, Ig = 24;
function g2(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Og(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function y2(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function td(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Og(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Og(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : y2(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function rp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function Gb(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function qa(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Q(n.x, -r, t.width + r),
    y: Q(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function b2(e) {
  const t = _a(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Q(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Nt * 0.5),
    tanY: Math.tan(Q(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Nt * 0.5)
  };
}
function io(e, t, n) {
  return Ld(tc(
    tc(e.centerDir, nc(e.right, t)),
    nc(e.up, n)
  ));
}
function ip(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = b2(e), r = qa(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    io(n, -n.tanX, n.tanY),
    io(n, n.tanX, n.tanY),
    io(n, n.tanX, -n.tanY),
    io(n, -n.tanX, -n.tanY)
  ].map((w) => qa(w, t)), a = Array.from({ length: 4 }, (w, N) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const E = P / 28;
      let L, S;
      N === 0 ? (L = -n.tanX + 2 * n.tanX * E, S = n.tanY) : N === 1 ? (L = n.tanX, S = n.tanY - 2 * n.tanY * E) : N === 2 ? (L = n.tanX - 2 * n.tanX * E, S = -n.tanY) : (L = -n.tanX, S = -n.tanY + 2 * n.tanY * E);
      const W = qa(io(n, L, S), t);
      W && k.push({ x: W.x, y: W.y });
    }
    return k;
  }), c = qa(io(n, 0, n.tanY), t), u = qa(
    io(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((w) => !w || !Number.isFinite(w.x) || !Number.isFinite(w.y)))
    return { visible: !1 };
  if (!d.some((w) => w.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, y = u.y - c.y, v = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((w) => ({ x: w.x, y: w.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * Ig,
      y: c.y + y / v * Ig
    },
    visible: !0
  };
}
function Eg(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: ip(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = td(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = td(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function v2(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Yt(Math.atan2(r.x, r.z) * cn),
    pitch_deg: Math.asin(Q(r.y, -1, 1)) * cn
  };
}
function _2(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Q(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Q(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function w2(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * cn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let yl = null;
function op() {
  return yl || (yl = new Promise((e) => {
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
  }), yl);
}
function pr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function x2(e, t = 1024) {
  const n = Math.max(1, Math.round(pr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(pr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function S2(e, t, n) {
  const r = pr(t), o = pr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = pr(a.u0), u = pr(a.v0), d = pr(a.u1), b = pr(a.v1);
  if (d <= c || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + pr(y.du)) * r,
    centerY: ((u + b) * 0.5 + pr(y.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: pr(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, pr(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function k2(e, t, n) {
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
function M2() {
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
    const b = String(a.rasterDataUrl || "").trim(), y = S2(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = k2(a, c, u), w = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(w);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), E = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || E < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(c)), L.height = Math.max(1, Math.round(u));
    const S = L.getContext("2d");
    return S ? (y.wrapOffsets.forEach((W) => {
      S.save(), S.translate(y.centerX + W, y.centerY), S.rotate(y.rotationRad), S.scale(y.scale, y.scale), S.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), S.restore();
    }), t.set(w, { revision: v, source: L }), { source: L, revision: v }) : null;
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
function N2(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function P2(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function A2({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const w = r.get(v.owner);
    (w == null ? void 0 : w.get(v.key)) === v && w.delete(v.key);
  }
  function c(v, w, N, k) {
    if (!v || typeof k != "function" || N.settled) return;
    let P = r.get(v);
    P || (P = /* @__PURE__ */ new Map(), r.set(v, P));
    const E = P.get(w);
    if ((E == null ? void 0 : E.entry) === N) {
      E.callback = k;
      return;
    }
    a(E);
    const L = { owner: v, key: w, entry: N, callback: k };
    P.set(w, L), N.listeners.add(L);
  }
  function u(v, w) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !w && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(v.image, w);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [w, N] of n) {
        if (n.size <= v) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(w));
      }
  }
  function b(v, w, N, k = null) {
    const P = String(w || ""), E = String(N || "");
    if (!P || !E) return null;
    let L = n.get(P);
    if (L)
      n.delete(P), n.set(P, L);
    else {
      d(o - 1);
      const W = e || globalThis.Image;
      if (typeof W != "function") return null;
      const j = new W();
      L = { key: P, image: j, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, L), j.onload = () => u(L, !0), j.onerror = () => u(L, !1), j.src = E;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || c(v, P, L, k), L.image;
  }
  function y(v) {
    const w = r.get(v);
    w && ([...w.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const rs = /* @__PURE__ */ new WeakMap();
function Kb(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = rs.get(e);
  r || (r = [], rs.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = rs.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && rs.delete(e);
  };
}
function gi(e, ...t) {
  const n = rs.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const $l = Object.freeze({
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
}), Wb = "PanoramaSuite.Editor.ViewControls", C2 = {
  id: Wb,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries($l).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function I2(e) {
  return Object.hasOwn($l, e) ? $l[e] : $l.default;
}
function O2(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function E2(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const mc = "state_json";
function yi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function F2(e) {
  var c, u;
  const t = yi(e, mc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Gy(n, {
    coverage: (c = yi(e, "coverage")) == null ? void 0 : c.value
  }), o = Rb(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function ap(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = yi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, w, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (w = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || w.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function T2(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Fg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function D2(e) {
  var y, v, w, N, k, P;
  if (!e) return;
  const t = yi(e, "coverage"), n = yi(e, "bg_color"), r = yi(e, mc), o = yi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && T2(a) && (Fg(c) || c === ""))) return;
  let b = "360";
  if (Fg(c))
    try {
      b = String(Xn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (w = n.callback) == null || w.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function zl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function nd(e, t, n) {
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
async function L2(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function is(e, t, n) {
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
async function Bb(e, t = {}) {
  var r;
  await L2(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function R2(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await Bb(e), n ? n.apply(this, r) : this.value;
  };
}
function V2(e) {
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
function $2(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function bl(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: u,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function b(y) {
    var N;
    const v = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === v) return;
    V2(y), ap(y, t), zl(y, mc);
    const w = yi(y, mc);
    if (R2(y, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const k = w.callback;
      w.callback = (P) => {
        var L;
        const E = k ? k(P) : void 0;
        return (L = y.setDirtyCanvas) == null || L.call(y, !0, !1), E;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const k = yi(y, "bg_color");
      !d && k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (N = k.callback) == null || N.call(k, "#00ff00")), nd(y, r, () => o(y, "stickers")), u && (a(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && zl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
      return;
    }
    y.__panoSceneStateV2 = d, nd(y, r, () => o(y, "cutout")), d || c(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && zl(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const v = e.prototype[y];
    e.prototype[y] = function() {
      const w = v ? v.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && !d && F2(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && D2(this);
      const N = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && b(this), y === "onAdded" && N && gi(this, "attach"), w;
    };
  }
}
function z2(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return $2(this), r;
  };
}
function j2(e, {
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
    ap(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    nd(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && zl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function H2({
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
    settings: [C2],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && bl(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && bl(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && bl(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && bl(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), rc(y) && z2(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      ap(d, e), rc(b) && j2(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const G2 = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Ar(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : G2.test(String(e.name || "")) : !1;
}
function sp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Ar(n)) : !1;
}
function K2(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (sp(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((v) => Ar(v));
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
async function os(e, t = {}) {
  var c, u, d, b;
  if (!Ar(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((v, w) => {
      const N = new n();
      N.onload = () => v(N), N.onerror = () => w(new Error("image load failed")), N.src = a;
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
async function co(e, { fetchApi: t } = {}) {
  if (!Ar(e)) throw new TypeError("A supported image file is required.");
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
const Tg = /* @__PURE__ */ new WeakSet(), Dg = /* @__PURE__ */ new WeakSet();
let Lg = 0;
function rd(e) {
  if (!e || typeof e != "object" || Dg.has(e)) return e;
  const t = String(e.type || "preview");
  return Lg += 1, e.type = `${t}:pano-${Lg}`, Dg.add(e), e;
}
function gc(e) {
  if (!e || typeof e != "object" || Tg.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Tg.add(e), e;
}
function Ub(e, t) {
  var r, o;
  if (!t || ((o = (r = gc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function W2({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ht } = Nl;
dN((e) => Gi(e.id));
pN(Xt);
const lp = A2(), { linkedVideoFile: B2 } = gb({ app: Ht, api: Xt });
function id() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Nl == null ? void 0 : Nl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const U2 = "pano_suite.ui_settings.v1", Y2 = 120, X2 = 2048;
function Rg() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(U2)) || "").trim();
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
function q2() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ja(e) {
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
function J2() {
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
function od(e) {
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
function Yb(e) {
  const t = od(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Z2(e, t, n) {
  Yb(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function ad(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function cp(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Xb(e) {
  return rc(cp(e));
}
function Vg(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function qb(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = ad(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && jl(e), GP(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = ad(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      jl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      jl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Q2(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function jl(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  sd.unregister(e), Q2(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), w = id();
      return y === w || v === w || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => _P(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function eP(e, t = "#00ff00") {
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
function tP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ua(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bn(e) {
  var u, d;
  const t = tP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ua(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ua(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Ky(t, { backgroundColor: r, coverage: o, active: Uy(e) }) : eP(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ua(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function nP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Jb(e, t, n = null) {
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
  return !r && n != null && (r = nP(e == null ? void 0 : e.graph, n)), r;
}
function rP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Zb(e, t = []) {
  const n = rP(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Wi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function $g(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function yc(e, t) {
  const n = $g(e), r = $g(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function iP(e, t) {
  var n;
  return Jb(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function oP(e, t = Wi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = Zb(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return vN(e, c, iP);
}
const sd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Xt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, v, w;
        if (!a) return;
        const c = yc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...oP(a)].some((N) => yc(r, N)) || mb(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (Qb(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (w = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || w.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Xt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Xt) != null && e.removeEventListener) || (Xt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function bc(e) {
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
  return typeof ((a = Xt) == null ? void 0 : a.apiURL) == "function" ? Xt.apiURL(o) : o;
}
function aP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function sP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function lP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function cP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (aP(t)) return [t];
  const { filename: n, subfolder: r } = sP(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => bc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return lP([...o, t]);
}
function uP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? bc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Gi(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (yc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (yc(c, o)) return t[c];
  }
  return null;
}
function ys(e, t, n = null) {
  const r = n || Gi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function nr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return nr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return bc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = nr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : bc(e);
}
function vc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function af(e) {
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
function up(e, t) {
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
function fP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function dP(e, t) {
  try {
    e.__panoOwnOutputRev = N2(e.__panoOwnOutputRev);
    const n = fP(t);
    let r = "";
    for (const o of n)
      if (r = nr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), up(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function fa(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function pP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!vn(e, "background"))
    return fa(e), null;
  const o = Gi(r), a = Jd(o, t, nr);
  if (!a)
    return fa(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = up(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  fa(e);
  const y = _N({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function hP(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = Zb(e, t).map((v) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, w) => ({ input: v, idx: w })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const w = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, P = Jb(e, v, k);
    if (!P) continue;
    const E = Number(N.origin_slot ?? 0), L = Gi((P == null ? void 0 : P.id) ?? k), S = Array.isArray(L == null ? void 0 : L.images) ? L.images : [];
    if (S.length) {
      const G = [];
      E >= 0 && E < S.length && G.push(S[E]), G.push(...S);
      for (const A of G.filter((ee) => !Rl(ee))) {
        const ee = nr(A);
        if (ee)
          return String((w == null ? void 0 : w.name) || ""), { src: `${ee}&pano_src=${Zf(L)}`, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let W = [];
    try {
      W = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(P) || [] : [];
    } catch {
      W = [];
    }
    if (Array.isArray(W) && W.length) {
      const G = [];
      E >= 0 && E < W.length && G.push(W[E]), G.push(...W);
      for (const A of G) {
        const ee = nr(A);
        if (ee)
          return String((w == null ? void 0 : w.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const j = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (j.length) {
      const G = [];
      E >= 0 && E < j.length && G.push(j[E]), G.push(...j);
      for (const A of G) {
        const ee = nr(A);
        if (ee)
          return String((w == null ? void 0 : w.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const F = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((G) => String((G == null ? void 0 : G.name) || "").toLowerCase() === "image");
    if (F) {
      let G = nr(F.value);
      if (G && !G.includes("/") && !G.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (G = Xt.apiURL(`/view?filename=${encodeURIComponent(G)}&type=input&subfolder=`)), G)
        return String((w == null ? void 0 : w.name) || ""), { src: G, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const u = vn(e, "background") ? Gi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const w = nr(v);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function mP(e, t = [], n = {}) {
  const r = hP(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = cP(o);
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
  const w = () => {
    var k, P, E, L;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (L = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || L.call(E, u);
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
    var k, P, E, L;
    if (v + 1 < a.length) {
      w();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (L = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || L.call(E, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, w(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function gP(e, t = [], n = null, r = {}) {
  const o = mP(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function Qb(e) {
  var t, n;
  if (e) {
    lp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, fa(e), e.__panoWrappedErpCache = null;
  }
}
function yP(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, fa(e), e.__panoWrappedErpCache = null;
  }
}
function e1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function vl(e, t, n = "") {
  const r = e1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < Y2 ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function zg(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function bP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function sf(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function vP(e) {
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
function _P(e, t) {
  return Ub(e, t);
}
function Is(e, t, n, r = null) {
  var w;
  if (!String(t || "")) return null;
  let a = uP(n);
  if (!a && (r != null && r.external)) {
    if (!vn(e, "external-sticker")) return null;
    const N = Gi(e == null ? void 0 : e.id), k = ((w = N == null ? void 0 : N.ui) == null ? void 0 : w.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = nr(P), a) break;
  }
  if (!a) return null;
  const c = ys(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? up(a, d) : a, y = P2(a, u, d);
  return lp.get(e, y, b, (N, k) => {
    var P, E;
    k && (r != null && r.external && e.__panoOutputFromRun && gi(e, "image-loaded"), (E = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || E.call(P));
  }) || null;
}
function wP(e, t) {
  var v, w, N, k;
  const n = NP(e, t), r = PP(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const E = n.getGroupDisplayCanvas(P);
    return E ? {
      id: `paint_group:${P}`,
      source: E,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = M2()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, E;
    return (E = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : E.call(P);
  });
  const d = x2(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((P) => {
    const E = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return E ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: E.source,
      revision: E.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function xP(e, t, n, r) {
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
  const o = kP(e, t, r);
  return o || null;
}
function SP(e, t) {
  var v, w;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((w = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : w.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function kP(e, t, n) {
  var o, a;
  const r = SP(t, n || (Ht == null ? void 0 : Ht.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function MP(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function NP(e, t) {
  var b, y, v, w, N, k, P, E, L, S, W, j;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (w = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : w.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = MP(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = Ff(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((E = e.__panoPreviewPaintRevision) == null ? void 0 : E.mask) !== d.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== d.groups || ((S = e.__panoPreviewPaintRevision) == null ? void 0 : S.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((W = t == null ? void 0 : t.painting) == null ? void 0 : W.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((j = t == null ? void 0 : t.painting) == null ? void 0 : j.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function PP(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function AP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function CP(e, t, n) {
  const r = ip(t, n);
  r.visible && rp(e, r.boundaryEdges, { selected: !1 });
}
function IP(e, t, n) {
  const r = ip(t, n);
  r.visible && (e.save(), rp(e, r.boundaryEdges, { selected: !0 }), Gb(e, r, { accent: g2(t) }), e.restore());
}
function ld(e, t, n) {
  return rb(fc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function _c(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ya;
}
function OP(e) {
  return [vn(e, "background") ? Jd(Gi(e.id), ["pano_input_videos"], nr) : "", B2(e, Wi)];
}
function EP(e) {
  var a;
  if (!vn(e, "external-sticker")) return null;
  const t = Gi(e.id), n = ys(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(nr), meta: n };
  const o = Jd(t, ["pano_sticker_input_videos"], nr);
  return o ? { src: o, meta: n } : null;
}
function FP({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function jg(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: vi({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Is(e, c.id, By(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = vb(b.playback.stickerMedia, u);
        return y ? { media: y, revision: af(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Is(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return vc(u) ? { media: u, revision: af(u) } : null;
  }, o = wP(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: vc(n) ? { media: n, revision: af(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: ib(e.__panoSurfaceScene.sceneState, _c(e), t.stickers, { media: r, paintLayers: o })
  };
}
function TP(e, t, n) {
  var j, F, G, A, ee, Se, K;
  const r = String(e.__panoPreviewMode || "stickers");
  e1(e, r);
  const o = Bn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (G = (F = (j = e.__panoCutoutNodeSurface) == null ? void 0 : j.session) == null ? void 0 : F.refresh) == null || G.call(F)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (Se = (ee = (A = e.__panoStickersNodeSurface) == null ? void 0 : A.session) == null ? void 0 : ee.refresh) == null || Se.call(ee));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? FP(e.__panoSurfacePlayback) : pP(e, ["pano_input_videos"], () => {
    var R, se;
    return (se = (R = e.__panoDomPreview) == null ? void 0 : R.requestDraw) == null ? void 0 : se.call(R);
  })) || gP(
    e,
    Wi,
    () => {
      var R, se;
      return (se = (R = e.__panoDomPreview) == null ? void 0 : R.requestDraw) == null ? void 0 : se.call(R);
    },
    { preserveReadyWhilePending: !1 }
  ), v = vc(y);
  let w = null;
  const N = (R, se) => {
    w || (w = jg(e, o, y));
    const Pe = n.render({ width: R.w, height: R.h, camera: se, ...w });
    return Pe && d.drawImage(Pe.canvas, Pe.x, Pe.y, Pe.width, Pe.height, R.x, R.y, R.w, R.h), !!Pe;
  };
  if (r === "cutout") {
    const R = vP(o), se = AP(y), Pe = R ? Q(Si(R).aspect, 0.1, 10) : v ? Q(Number(se.width / se.height), 0.05, 20) : 1, J = tp(b, Pe);
    e.__panoCutoutNodeFrame = J;
    let O = "none";
    const X = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (R)
      if (y && !v)
        O = "loading";
      else if (v) {
        const V = jN({ width: c, height: u }, J, R);
        [
          !V.fallback || N(V.fallback.rect, gs(V.fallback.shot)),
          N(V.rect, gs(V.shot)),
          !V.fallback || N(J, gs(R))
        ].every(Boolean) || (O = "loading");
      } else
        O = "empty";
    else {
      const V = e.__panoLastCutoutShot;
      V ? (e.__panoPreviewView = Lb(V, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, fc(e.__panoPreviewView, c, u)) || (O = "loading") : y ? O = "loading" : O = "empty";
    }
    v || n.release(), n.failed && O === "loading" && (O = "none"), R && (e.__panoLastCutoutShot = { ...R }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(J.x, J.y, J.w, J.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(J.x + 0.5, J.y + 0.5, Math.max(0, J.w - 1), Math.max(0, J.h - 1)), d.restore()), O === "loading" ? (sf(e, !1), vl(e, !0, X)) : O === "empty" ? (sf(e, !0), vl(e, !1, "")) : (sf(e, !1), vl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (w = jg(e, o, y), !w.background && !w.layers.length ? (n.release(), k = !0) : k = N(b, fc(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  vl(e, P, P ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), P && bP(d, b, zg(t, b));
  const E = ld(e, c, u);
  !y && k && DP(d, E, zg(t, b));
  const L = String(((K = o == null ? void 0 : o.active) == null ? void 0 : K.selected_sticker_id) || ""), S = Qf(o, _c(e)), W = k ? S.find((R) => String((R == null ? void 0 : R.id) || "") === L && (R == null ? void 0 : R.visible) !== !1) : null;
  k && S.filter((R) => R !== W && (R == null ? void 0 : R.visible) !== !1 && (R.external || R.source_kind === "external_image")).filter((R) => !vc(Is(e, R.id, null, { external: !0 }))).forEach((R) => CP(d, R, E)), W && IP(d, W, E);
}
function Hg(e, t, n, r, o = 1) {
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
function DP(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(qn(b, u));
    Hg(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(qn(u, b));
    Hg(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: qn(0, 0) },
    { name: "Right", dir: qn(90, 0) },
    { name: "Back", dir: qn(180, 0) },
    { name: "Left", dir: qn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function cd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function LP(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function fr(e, t) {
  return LP(e, t) ? !1 : (cd(e), !0);
}
function Gg() {
  var n;
  const e = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function RP(e) {
  var n;
  if (!e) return;
  const t = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function VP(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Yb(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function $P(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Kg(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && zP(e, 180, t);
    }
  };
}
function zP(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function as(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const jP = /* @__PURE__ */ new WeakMap();
function t1(e, t) {
  return mb(jP, e, t) ? !1 : (dP(e, t), Qb(e), as(e), !0);
}
async function HP(e) {
  var n, r;
  const t = await yN(e, Ht, Xt);
  t && (t1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function GP(e, t = {}) {
  var Ee;
  const n = t.__allowStandalone === !0, r = Xb(e);
  if (r && !n) {
    cp(e);
    return;
  }
  r && VP(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Vg(e)
  }, u = "dom", d = c.signature || Vg(e);
  if (Number(e.__panoRebindGeneration || 0), ad(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, od(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Ee = e.__panoDomPreview) != null && Ee.widget || (e.__panoLegacyPreviewHooked && jl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : RN, w = document.createElement("div");
  if (J2(), w.className = "pano-node-preview-dom", w.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && w.classList.add("pano-node-preview--no-preview"), w.setAttribute("data-capture-wheel", "true"), w.tabIndex = 0, w.style.cssText = [
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
    const z = gc(rd(
      e.addDOMWidget(id(), "preview", w, Kg(e, null))
    ));
    as(e), e.__panoDomPreview = { widget: z, root: w, requestDraw: () => {
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
  ].join(";"), P.textContent = "Connect ERP image", N.appendChild(k), N.appendChild(P), w.appendChild(N);
  const E = yy(w), L = document.createElement("div");
  L && (L.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", w.appendChild(L)), Z2(e, 120, 120), as(e);
  let S = null;
  try {
    $P(e, y, () => {
      var z, ge;
      return (ge = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ge.call(z);
    }), S = gc(rd(e.addDOMWidget(
      id(),
      "preview",
      w,
      Kg(
        e,
        () => {
          var z, ge;
          return (ge = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ge.call(z);
        },
        y,
        v,
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
  }, j = () => {
    W.destroyed || (W.needsDraw = !0, !W.inTick && !W.raf && (W.raf = requestAnimationFrame(_n)));
  }, F = ab(j), G = /* @__PURE__ */ va(o ? { ...Ib(Bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Tb(Bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let A = null;
  if (o && e.__panoSceneStateV2) {
    const [z, ge] = [0, 1].map(() => {
      const Fe = document.createElement("video");
      return Fe.playsInline = !0, Fe.preload = "auto", Fe.crossOrigin = "anonymous", Fe.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Fe), Fe;
    }), Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const Re = document.createElement("canvas");
    Re.__panoFrameIdx = 0;
    const Je = DN({
      video: z,
      stickerVideo: ge,
      createImage: (Fe, et) => {
        const Ct = new Image();
        return Ct.onload = et, Ct.onerror = et, Ct.src = Fe, Ct;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Fe) => requestAnimationFrame(Fe),
        cancelFrame: (Fe) => cancelAnimationFrame(Fe)
      },
      readState: () => Bn(e),
      onFrame: j,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var et;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Fe = Math.min(1, X2 / z.videoWidth);
        Oe.width = Math.round(z.videoWidth * Fe), Oe.height = Math.round(z.videoHeight * Fe), (et = Oe.getContext("2d")) == null || et.drawImage(z, 0, 0, Oe.width, Oe.height), Oe.__panoFrameIdx += 1, j();
      },
      onStickerCapture: () => {
        var Fe;
        ge.videoWidth > 0 && ge.videoHeight > 0 && (Re.width = ge.videoWidth, Re.height = ge.videoHeight, (Fe = Re.getContext("2d")) == null || Fe.drawImage(ge, 0, 0), Re.__panoFrameIdx += 1, j());
      },
      onChange: () => {
        G.playing = Je.playing, j();
      }
    });
    A = { playback: Je, video: z, still: Oe, stickerVideo: ge, stickerStill: Re, stickerSource: "" }, e.__panoSurfacePlayback = A;
  }
  const ee = () => {
    var Ct;
    const { playback: z, still: ge, stickerStill: Oe } = A, Re = TN(N, !!((Ct = e.flags) != null && Ct.collapsed)), Je = z.source, Fe = Re ? EP(e) : null, et = z.follow({
      shown: Re,
      sources: Re ? OP(e) : [],
      state: Bn(e),
      sticker: Fe
    });
    ((Fe == null ? void 0 : Fe.src) || "") !== A.stickerSource && (A.stickerSource = (Fe == null ? void 0 : Fe.src) || "", Oe.width = 0), z.source !== Je && (ge.width = 0, ge.__panoFrameIdx = 0), G.playable = et, G.playing = z.playing;
  }, Se = () => A == null ? void 0 : A.playback.pause();
  let K = null;
  const R = (o ? EN : GN)({
    readState: () => Bn(e),
    publishLiveState: (z) => {
      z ? (K = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === K && (e.__panoLiveStateOverride = null), K = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, j();
    },
    commitState: (z) => {
      var Re, Je, Fe, et;
      const ge = ua(e, "state_json");
      if (!ge) return;
      Yy(e, z.active);
      const Oe = Xy(e, z);
      qy(e, Oe, String(ge.value ?? "")) || (ge.value = Oe, (Re = ge.callback) == null || Re.call(ge, Oe), e.__panoStateCache = null, (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), (et = (Fe = e.graph) == null ? void 0 : Fe.setDirtyCanvas) == null || et.call(Fe, !0, !0));
    },
    onChange: (z) => Object.assign(G, z)
  }), Pe = o ? Kb(e, (z = "sync", ge = null) => {
    var Zn;
    if (!o || !e.graph || !R || R.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const un = vn(e, "external-sticker"), ar = Bn(e).stickers.find((No) => No.source.kind === "port");
      return R.apply({
        type: "sync-port",
        value: Ab(e, {
          pose: un ? ys(e, "pano_sticker_input_pose", ge) : null,
          image: ar ? Is(e, ar.id, null, { external: !0 }) : null
        })
      });
    }
    const Oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((un) => String((un == null ? void 0 : un.name) || "") === "sticker_image") : -1, Re = Oe >= 0 ? ((Zn = e.getInputLink(Oe)) == null ? void 0 : Zn.id) ?? null : null;
    if (Re == null)
      return R.apply({ type: "sync-external", value: { connected: !1 } });
    if (!vn(e, "external-sticker")) return !1;
    const Je = ys(e, "pano_sticker_input_pose", ge), Fe = Array.isArray(Je) ? Je[0] : Je, et = String(ys(e, "pano_sticker_input_state_hash", ge) ?? ""), Ct = e.__panoPreviewView || { yaw: 0, pitch: 0 }, hn = Bn(e), bt = (Array.isArray(hn == null ? void 0 : hn.stickers) ? hn.stickers : []).find((un) => String((un == null ? void 0 : un.id) || "") === "sticker_image_1"), mt = Is(e, "sticker_image_1", null, { external: !0 }), wn = Fe && typeof Fe == "object" ? Fe : bt || { yaw_deg: Ct.yaw, pitch_deg: Ct.pitch, hFOV_deg: 30, rot_deg: 0 };
    return R.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: et,
        pose: wn,
        imageWidth: Number((mt == null ? void 0 : mt.naturalWidth) || (mt == null ? void 0 : mt.width) || 0),
        imageHeight: Number((mt == null ? void 0 : mt.naturalHeight) || (mt == null ? void 0 : mt.height) || 0)
      }
    });
  }) : () => {
  };
  let J = 0;
  const O = async (z) => {
    if (!o || !R || !Ar(z)) return !1;
    Se();
    const ge = `asset_${Math.random().toString(16).slice(2, 10)}`, Oe = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    J += 1, G.importing = !0;
    const Je = is(e, `add:${ge}`, async () => {
      const Fe = await os(z), et = await co(z, {
        fetchApi: (Ct, hn) => Xt.fetchApi(Ct, hn)
      });
      return Ce(), R.apply({
        type: "add-sticker",
        value: {
          stickerId: Oe,
          assetId: ge,
          asset: et,
          imageWidth: Fe.width,
          imageHeight: Fe.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Je;
    } catch {
      return !1;
    } finally {
      J = Math.max(0, J - 1), G.importing = J > 0, j();
    }
  };
  let X = null, V = null, Z = null, te = !1;
  const de = () => {
    var z;
    return Z && (clearTimeout(Z), Z = null), te ? (te = !1, ((z = R == null ? void 0 : R.commitGesture) == null ? void 0 : z.call(R)) ?? !1) : !1;
  }, Ce = () => {
    var Re, Je, Fe;
    const z = de(), ge = (X == null ? void 0 : X.pointerId) ?? (V == null ? void 0 : V.pointerId);
    if (X = null, V = null, ge != null) {
      try {
        (Re = k.hasPointerCapture) != null && Re.call(k, ge) && ((Je = k.releasePointerCapture) == null || Je.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Oe = ((Fe = R == null ? void 0 : R.commitGesture) == null ? void 0 : Fe.call(R)) ?? !1;
    return z || Oe;
  }, T = () => {
    var Re, Je, Fe;
    const z = de(), ge = X == null ? void 0 : X.pointerId;
    if (X = null, ge != null) {
      try {
        (Re = k.hasPointerCapture) != null && Re.call(k, ge) && ((Je = k.releasePointerCapture) == null || Je.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Oe = ((Fe = R == null ? void 0 : R.cancelGesture) == null ? void 0 : Fe.call(R)) ?? !1;
    return z || Oe;
  }, ht = () => Ce();
  R && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(ht));
  let we = null, gn = !1;
  if (L && R)
    try {
      op(), we = Id(o ? m2 : s2, {
        model: G,
        onAction: (z) => {
          var Re, Je;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ce(), A == null || A.playback.toggle();
            return;
          }
          if (Se(), (z == null ? void 0 : z.type) === "open-editor") {
            Ce(), o || (G.aspectOpen = !1), (Re = e.__panoOpenEditor) == null || Re.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              O(z.file);
              return;
            }
            R.apply(z) && j();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            G.aspectOpen = !G.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            G.aspectOpen = !1;
            return;
          }
          let ge = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Fe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ge = {
              ...z,
              ...$N(Fe, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Fe = xo(Bn(e));
            Fe && (e.__panoPreviewView = Lb(Fe, {
              width: k.width,
              height: k.height
            }));
          }
          const Oe = ((Je = e.__panoCutoutNodeFrame) == null ? void 0 : Je.safeRect) || null;
          G.aspectOpen = !1, R.apply({ ...ge, safeRect: Oe }) && j();
        }
      }), we.mount(L), gn = !0;
    } catch {
      we = null, gn = !1;
    }
  const At = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    A && ee(), j();
  }) : null;
  At == null || At.observe(N);
  const _n = (z) => {
    var Oe, Re;
    W.raf = 0, W.inTick = !0;
    let ge = !1;
    try {
      ge = xt.stepInertia(z), (W.needsDraw || ge) && (W.needsDraw = !1, A && ee(), (Oe = e.flags) != null && Oe.collapsed || TP(e, k, F), G.viewUnavailable = F.failed);
    } finally {
      W.inTick = !1;
    }
    (ge || W.needsDraw) && !W.raf && (W.raf = requestAnimationFrame(_n)), q2() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, od(e), Ja(w), Ja(N), Ja(k), Ja(w.parentElement), Ja((Re = w.parentElement) == null ? void 0 : Re.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, xt = Dd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || k.clientWidth || 0)),
        h: Math.max(1, Number(z.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = Rg();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      j();
    }
  }), Zt = o ? N : w, pt = (z) => {
    const ge = k.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - ge.left) * (k.width / Math.max(1, ge.width)),
      y: (Number(z.clientY) - ge.top) * (k.height / Math.max(1, ge.height))
    };
  }, xa = (z) => {
    var Re, Je;
    if (!o || !a) return;
    const ge = Bn(e), Oe = Eg(
      Qf(ge, _c(e)),
      String(((Re = ge == null ? void 0 : ge.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      pt(z),
      ld(e, k.width, k.height)
    );
    if (!Oe) {
      k.style.cursor = "grab";
      return;
    }
    if (((Je = Oe.item) == null ? void 0 : Je.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Oe.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (z) => {
    var Ct, hn, bt, mt, wn, Et, Zn, un, ar, No, Po;
    if (!fr(z, Zt) || z.button !== 0) return;
    if (!o) {
      const Fn = xo(Bn(e)), en = e.__panoCutoutNodeFrame;
      if (!Fn) {
        (Ct = w.focus) == null || Ct.call(w, { preventScroll: !0 }), (hn = k.setPointerCapture) == null || hn.call(k, z.pointerId), k.style.cursor = "grabbing", xt.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (Fn.locked === !0 || !en || !R) return;
      const Bi = pt(z);
      let Sa;
      if (z.shiftKey) {
        const Ft = Vb({
          frame: en,
          point: Bi,
          startRollDeg: Number(Fn.roll_deg ?? Fn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Ft) return;
        Sa = { kind: "roll", pointerId: z.pointerId, rollGesture: Ft };
      } else {
        const Ft = ((bt = Bn(e)) == null ? void 0 : bt.ui_settings) || Rg();
        Sa = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: Bi,
          startShot: { ...Fn },
          focalPx: bo(en, Fn),
          invertX: Ft.invert_view_x === !0,
          invertY: Ft.invert_view_y === !0
        };
      }
      Ce(), (mt = w.focus) == null || mt.call(w, { preventScroll: !0 }), (wn = k.setPointerCapture) == null || wn.call(k, z.pointerId), k.style.cursor = "grabbing", R.beginGesture(), X = Sa;
      return;
    }
    if (!a) return;
    const ge = pt(z), Oe = Bn(e), Re = String(((Et = Oe == null ? void 0 : Oe.active) == null ? void 0 : Et.selected_sticker_id) || ""), Je = ld(e, k.width, k.height);
    (Zn = w.focus) == null || Zn.call(w, { preventScroll: !0 });
    const Fe = () => Eg(Qf(Oe, _c(e)), Re, ge, Je);
    let et = Fe();
    if (et && (A != null && A.playback.playing) && (Se(), et = Fe()), et && R) {
      if (xt.stopMotion(), Ce(), String(((un = et.item) == null ? void 0 : un.id) || "") !== Re && R.apply({ type: "select-sticker", id: et.item.id }), ((ar = et.item) == null ? void 0 : ar.locked) === !0) {
        j();
        return;
      }
      const Fn = ge, en = et.geometry.center;
      V = {
        active: !0,
        kind: et.hit.kind,
        pointerId: z.pointerId,
        startPoint: Fn,
        startCenter: { ...en },
        startSticker: { ...et.item },
        startDistance: Math.max(1, Math.hypot(Fn.x - en.x, Fn.y - en.y)),
        startAngle: Math.atan2(Fn.y - en.y, Fn.x - en.x),
        projection: Je
      }, R.beginGesture(), (No = k.setPointerCapture) == null || No.call(k, z.pointerId), k.style.cursor = et.hit.kind === "rotate" ? "grabbing" : et.hit.kind === "move" ? "move" : et.hit.cursor, j();
      return;
    }
    (Po = k.setPointerCapture) == null || Po.call(k, z.pointerId), k.style.cursor = "grabbing", xt.startDrag(z.clientX, z.clientY, z.pointerId);
  }), k.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!X) {
        if (!xt.state.drag.active) return;
        fr(z, Zt), xt.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (X.pointerId !== z.pointerId || !R) return;
      if (fr(z, Zt), X.kind === "pan") {
        const Oe = pt(z);
        R.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Oe.x - X.startPoint.x,
          dy: Oe.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ge = $b(X.rollGesture, pt(z), z);
      if (!ge) return;
      X.rollGesture = ge.gesture, R.updateGesture({ type: "set-roll", value: ge.rollDeg });
      return;
    }
    if (!V && !xt.state.drag.active) {
      xa(z);
      return;
    }
    if (V) {
      if (V.pointerId !== z.pointerId || !R) return;
      fr(z, Zt);
      const ge = pt(z);
      let Oe = V.startSticker;
      if (V.kind === "move")
        Oe = v2(
          V.startSticker,
          {
            x: V.startCenter.x + ge.x - V.startPoint.x,
            y: V.startCenter.y + ge.y - V.startPoint.y
          },
          V.projection
        );
      else if (V.kind === "scale") {
        const Re = Math.hypot(ge.x - V.startCenter.x, ge.y - V.startCenter.y);
        Oe = _2(V.startSticker, V.startDistance, Re);
      } else if (V.kind === "rotate") {
        const Re = Math.atan2(ge.y - V.startCenter.y, ge.x - V.startCenter.x);
        Oe = w2(V.startSticker, V.startAngle, Re, z.shiftKey === !0);
      }
      R.updateGesture({ type: "set-transform", value: Oe }), j();
      return;
    }
    !a || !xt.state.drag.active || (fr(z, Zt), xt.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const $ = () => {
    var ge, Oe;
    if (!X && !V) {
      if (!xt.state.drag.active) return;
      xt.endDrag(), k.style.cursor = "grab", j();
      return;
    }
    if (!R) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (V == null ? void 0 : V.pointerId);
    X = null, V = null;
    try {
      (ge = k.hasPointerCapture) != null && ge.call(k, z) && ((Oe = k.releasePointerCapture) == null || Oe.call(k, z));
    } catch {
    }
    R.cancelGesture(), k.style.cursor = "grab", j();
  }, B = (z, ge = !1) => {
    var Oe, Re, Je, Fe;
    if (!o) {
      if (!X) {
        if (!xt.state.drag.active) return;
        fr(z, Zt), (Oe = k.releasePointerCapture) == null || Oe.call(k, z.pointerId), k.style.cursor = "grab", xt.endDrag(), j();
        return;
      }
      if (X.pointerId !== z.pointerId || !R) return;
      fr(z, Zt), X = null, (Re = k.releasePointerCapture) == null || Re.call(k, z.pointerId), k.style.cursor = "grab", ge ? R.cancelGesture() : R.commitGesture(), xa(z), j();
      return;
    }
    if (V) {
      if (V.pointerId !== z.pointerId || !R) return;
      fr(z, Zt), V = null, (Je = k.releasePointerCapture) == null || Je.call(k, z.pointerId), k.style.cursor = "grab", ge ? R.cancelGesture() : R.commitGesture(), j();
      return;
    }
    !a || !xt.state.drag.active || (fr(z, Zt), (Fe = k.releasePointerCapture) == null || Fe.call(k, z.pointerId), k.style.cursor = "grab", xt.endDrag(), j());
  };
  k.addEventListener("pointerup", B), k.addEventListener("pointercancel", (z) => B(z, !0)), k.addEventListener("lostpointercapture", $), k.addEventListener("pointerleave", (z) => {
    !o && X || V || xt.state.drag.active && B(z);
  });
  const re = (z) => {
    const ge = document.activeElement;
    if (ge !== w && !w.contains(ge)) return;
    if (z.key === "Escape" && (X || V) && R) {
      $(), cd(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !R) return;
    const Oe = z.target, Re = String((Oe == null ? void 0 : Oe.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Oe != null && Oe.isContentEditable || G.canDelete === !0 && (Se(), Ce(), R.apply({ type: "delete-selected" }) && j(), cd(z));
  };
  window.addEventListener("keydown", re, !0);
  const _e = W2({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => RP(z)
  }), me = (z) => {
    var Oe, Re, Je, Fe, et, Ct;
    if (!fr(z, Zt)) return;
    if (!o) {
      const hn = xo(Bn(e));
      if (hn && hn.locked !== !0 && R) {
        const bt = ec(z);
        bt !== 0 && (te || (Ce(), R.beginGesture(), te = !0), R.updateGesture({
          type: "step-fov",
          direction: bt
        }) ? (Z && clearTimeout(Z), Z = setTimeout(de, 180), j()) : R.hasGestureChanges() || (R.cancelGesture(), te = !1));
      } else if (!hn) {
        const bt = Gg();
        xt.applyWheelEvent(z) && j(), _e.schedule(bt);
      }
      (Oe = z.preventDefault) == null || Oe.call(z), (Re = z.stopPropagation) == null || Re.call(z), (Je = z.stopImmediatePropagation) == null || Je.call(z);
      return;
    }
    if (!a) return;
    const ge = Gg();
    xt.applyWheelEvent(z) && j(), (Fe = z.preventDefault) == null || Fe.call(z), (et = z.stopPropagation) == null || et.call(z), (Ct = z.stopImmediatePropagation) == null || Ct.call(z), _e.schedule(ge);
  }, pe = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    pe.forEach((ge) => ge.addEventListener(z, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    k.addEventListener(z, (ge) => fr(ge, Zt)), N.addEventListener(z, (ge) => fr(ge, Zt));
  });
  const Ae = ua(e, "state_json");
  let be = null, ke = null;
  Ae && !Ae.__panoPreviewPatchedCb && (be = Ae.callback, ke = (z) => {
    const ge = be ? be(z) : void 0;
    return j(), ge;
  }, Ae.callback = ke, Ae.__panoPreviewPatchedCb = ke);
  const fe = ua(e, "bg_color");
  let $e = null, Ie = null;
  fe && !fe.__panoPreviewPatchedCb && ($e = fe.callback, Ie = (z) => {
    const ge = $e ? $e(z) : void 0;
    return j(), ge;
  }, fe.callback = Ie, fe.__panoPreviewPatchedCb = Ie);
  const Le = e.onRemoved, je = e.onResize, at = e.onExecuted, ft = e.onDragOver, yt = e.onDragDrop;
  let ut = null;
  const Wt = () => {
    o && (G.dropActive = !0, ut && clearTimeout(ut), ut = setTimeout(() => {
      ut = null, G.dropActive = !1;
    }, 140));
  }, h = o ? function(z) {
    return (ft ? ft.apply(this, arguments) : !1) === !0 ? !0 : sp(z == null ? void 0 : z.dataTransfer) ? (Wt(), !0) : !1;
  } : null, Ye = o ? function(z) {
    var Re;
    if ((yt ? yt.apply(this, arguments) : !1) === !0) return !0;
    const Oe = Array.from(((Re = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Re.files) || []).find((Je) => Ar(Je));
    return Oe ? (ut && clearTimeout(ut), ut = null, G.dropActive = !1, O(Oe), !0) : !1;
  } : null;
  o && (e.onDragOver = h, e.onDragDrop = Ye);
  const zn = o ? K2(w, {
    onActive: (z) => {
      if (z) {
        Wt();
        return;
      }
      ut && clearTimeout(ut), ut = null, G.dropActive = !1;
    },
    onDrop: (z) => {
      O(z);
    }
  }) : () => {
  }, Qt = function(z) {
    e.__panoOutputFromRun = !0;
    const ge = t1(e, z);
    gi(e, ge ? "executed" : "sync", z), j();
    const Oe = at ? at.apply(this, arguments) : void 0;
    return as(e), Oe;
  };
  e.onExecuted = Qt;
  const rn = e.onConnectionsChange, yn = function(z, ge) {
    const Oe = vg(e, z, ge, qd), Re = vg(e, z, ge, Wi), Je = arguments, Fe = rn ? rn.apply(this, Je) : void 0, et = () => {
      W.destroyed || (Re && yP(e), Oe && gi(e, "connection-change"), as(e), j());
    };
    return et(), queueMicrotask(et), Fe;
  };
  e.onConnectionsChange = yn;
  const Er = function() {
    const z = je ? je.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, j(), z;
  };
  e.onResize = Er;
  const on = function() {
    return Qr(), sd.unregister(this), Le ? Le.apply(this, arguments) : void 0;
  };
  e.onRemoved = on;
  const Qr = () => {
    var z, ge, Oe, Re, Je, Fe, et, Ct, hn;
    W.destroyed = !0, (z = At == null ? void 0 : At.disconnect) == null || z.call(At), o ? Ce() : T(), k.removeEventListener("lostpointercapture", $), zn(), E(), window.removeEventListener("keydown", re, !0), (Oe = (ge = e.__panoStateFlushers) == null ? void 0 : ge.delete) == null || Oe.call(ge, ht), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Re = R == null ? void 0 : R.destroy) == null || Re.call(R), (Je = we == null ? void 0 : we.unmount) == null || Je.call(we), A && (A.playback.dispose(), A.video.remove(), A.stickerVideo.remove(), e.__panoSurfacePlayback === A && (e.__panoSurfacePlayback = null)), F.dispose(), e.__panoSurfaceScene = null, (et = (Fe = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Fe.dispose) == null || et.call(Fe), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Pe(), _e.dispose(), ut && clearTimeout(ut), ut = null, lp.disposeOwner(e), fa(e), W.raf && cancelAnimationFrame(W.raf), W.raf = 0, ((Ct = e.__panoCutoutNodeSurface) == null ? void 0 : Ct.session) === R && (e.__panoCutoutNodeSurface = null), ((hn = e.__panoStickersNodeSurface) == null ? void 0 : hn.session) === R && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Er && (e.onResize = je), e.onExecuted === Qt && (e.onExecuted = at), e.onConnectionsChange === yn && (e.onConnectionsChange = rn), ke && (Ae == null ? void 0 : Ae.callback) === ke && (Ae.callback = be), ke && (Ae == null ? void 0 : Ae.__panoPreviewPatchedCb) === ke && delete Ae.__panoPreviewPatchedCb, Ie && (fe == null ? void 0 : fe.callback) === Ie && (fe.callback = $e), Ie && (fe == null ? void 0 : fe.__panoPreviewPatchedCb) === Ie && delete fe.__panoPreviewPatchedCb, e.onDragOver === h && (e.onDragOver = ft), e.onDragDrop === Ye && (e.onDragDrop = yt), e.onRemoved === on && (e.onRemoved = Le);
  };
  e.__panoDomRestore = Qr, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = R && gn && !o ? { session: R, model: G } : null, e.__panoStickersNodeSurface = R && gn && o ? { session: R, model: G } : null, e.__panoDomPreview = {
    widget: S,
    root: w,
    canvas: k,
    requestDraw: j,
    state: W,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, sd.register(e), e.graph && gi(e, "attach"), j();
}
function Wg(e, t = {}) {
  qb(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Bg(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (Xb(e) && !n) {
    cp(e);
    return;
  }
  qb(e).attach(t);
}
function KP(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function WP(e, t = 1, n = mg) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : mg, v = Math.max(u, d), w = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * w)),
    height: Math.max(1, Math.round(d * w))
  };
}
function BP({
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
    var k, P, E;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const L = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (E = L == null ? void 0 : L.catch) == null || E.call(L, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const UP = { class: "pano-preview-node-surface" }, YP = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ne(), ue("div", UP, [
      De(ln, {
        icon: e.model.fullscreen ? nt(Ne).fullscreen_close : nt(Ne).fullscreen,
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
      e.model.viewUnavailable ? (ne(), br(np, { key: 0 })) : ct("", !0)
    ]));
  }
}, _l = 140, XP = 180, Ug = 40, lf = 10;
function Yg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Xg(e, t) {
  const n = Yg(e), r = Yg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function qg(e) {
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
  return typeof ((a = Xt) == null ? void 0 : a.apiURL) == "function" ? Xt.apiURL(o) : o;
}
function da(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return da(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return qg({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = da(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : qg(e);
}
function n1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function qP(e) {
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
function ud(e) {
  var o;
  const t = (o = Cr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Xg(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Xg(a, n)) return t[a];
  return null;
}
function JP(e) {
  var r, o;
  const t = ud(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = da(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function ZP(e, t = "erp_image") {
  var N, k, P, E, L, S, W;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((j) => String((j == null ? void 0 : j.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((j, F) => String((j == null ? void 0 : j.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(F))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (N = Cr) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = ud(a), d = ud(e == null ? void 0 : e.id), b = [
    (E = d == null ? void 0 : d.ui) == null ? void 0 : E.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (L = u == null ? void 0 : u.ui) == null ? void 0 : L.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const j of b)
    if (Array.isArray(j))
      for (const F of j) {
        const G = da(F);
        if (G) return G;
      }
  let y = [];
  try {
    y = typeof ((S = Cr) == null ? void 0 : S.getNodeImageUrls) == "function" ? Cr.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const j of y) {
      const F = da(j);
      if (F) return F;
    }
  if (c) {
    const j = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const F of j) {
      const G = da(F);
      if (G) return G;
    }
  }
  const v = (W = c == null ? void 0 : c.widgets) == null ? void 0 : W.find((j) => String((j == null ? void 0 : j.name) || "").toLowerCase() === "image"), w = String((v == null ? void 0 : v.value) || "").trim();
  return w ? Xt.apiURL(`/view?filename=${encodeURIComponent(w)}&type=input&subfolder=`) : "";
}
function cf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Jg(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !n1(a) || n <= 1 || r <= 1) {
    cf(t, n, r);
    return;
  }
  if (c.failed) {
    cf(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (w) => (w == null ? void 0 : w.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: fc(o, n, r),
    background: { media: a, revision: qP(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : cf(t, n, r);
}
function Zg(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class QP {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = ab(() => this.requestDraw()), this.controller = Dd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Yt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Q(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Q(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${_l}px`,
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
          return _l;
        },
        getHeight() {
          return _l;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = gc(rd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(_l, Number(a.minHeight || 0)),
            minWidth: Math.max(XP, Number(a.minWidth || 0))
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
      return op(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ va({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = BP({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Id(YP, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = yy(n), t.addEventListener("pointerdown", (a) => {
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
      KP(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !n1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Zg(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, y, v, w, N;
      const a = xP(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !Zg(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (w = n == null ? void 0 : n.stopPropagation) == null || w.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - lf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - Ug - lf);
    return { x: lf, y: Ug, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Jg(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? ob : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = WP(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = JP(this.node);
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
    const n = ZP(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Jg(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, y, v, w, N, k, P, E, L;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (w = this.mediaCleanup) == null || w.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      Ub(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((L = (E = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : E.find) == null ? void 0 : L.call(E, (S) => (S == null ? void 0 : S.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function eA(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new QP(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function r1(e, t, n) {
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
function fp(e) {
  return !!(e != null && e.prototype);
}
function Os(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function tA(e, t = {}) {
  fp(e) || eA(e, {
    ...t,
    onOpen: Os(e, t.onOpen)
  });
}
function nA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!fp(e)) {
    Bg(e, {
      ...r,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  r1(e, "stickers_node_preview", (o) => {
    Bg(o, {
      ...r,
      onOpen: Os(o, t.onOpen)
    });
  });
}
function rA(e, t = {}) {
  if (!fp(e)) {
    Wg(e, {
      ...t,
      onOpen: Os(e, t.onOpen)
    });
    return;
  }
  r1(e, "cutout_preview", (n) => {
    Wg(n, {
      ...t,
      onOpen: Os(n, t.onOpen)
    });
  });
}
const Wn = {
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
}, ai = "pen";
function Qg(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function iA(e = 80, t = null, n = 8) {
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
      const b = r.length, y = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, y)) : y, w = r.slice(v, v + c), N = o < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, o - v));
      return {
        version: 1,
        entries: w,
        index: N
      };
    },
    hydrate: u
  };
}
const oA = 250, aA = 600, sA = 180, lA = 2;
function cA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ss(e, t, n) {
  return e + (t - e) * n;
}
function uA(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Td(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / sA + o / lA);
  return Math.round(ss(oA, aA, a));
}
function fA(e, t, n) {
  const r = cA(Q(n, 0, 1));
  return {
    position: e.position.map((o, a) => ss(o, t.position[a], r)),
    yaw_deg: Yt(e.yaw_deg + Td(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ss(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ss(e.hFOV_deg, t.hFOV_deg, r),
    distance: ss(e.distance, t.distance, r)
  };
}
function dA(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Td(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function pA(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return dA(e, t) ? null : { from: e, to: t, startTs: n, durationMs: uA(e, t, r), end: o };
}
function hA(e, t) {
  const n = Q((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: fA(e.from, e.to, n), done: !1 };
}
function Hl(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function mA(e, t, n) {
  const r = Hl(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Za(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function gA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function yA({
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
  var W, j;
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
    historyEntries: Array.from({ length: 8 }, (F, G) => ({ index: G, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((W = t.find((F) => o(e.paintColor, F.color))) == null ? void 0 : W.id) || "", w = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((j = e.customPaintColor) == null ? void 0 : j.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), E = e.brushSizes[P] ?? 10, L = d(), S = Array.from({ length: 8 }, (F, G) => e.customPaintHistory[G] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: w,
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
    historyEntries: S.map((F, G) => ({
      index: G,
      color: F ? { cssColor: r(F, 1) } : null
    })),
    sizeValue: E,
    sizeText: String(E),
    sizeFill: `${Math.max(0, Math.min(100, (E - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function bA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function uf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function vA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
        icon: a ? Ne.eye : Ne.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function _A({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: u,
  visibilityRows: d,
  uiSettings: b,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || o === "world" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: u,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function wA({
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
  canRestoreSelectedToInitial: w,
  iconSet: N,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked.
  cameraShot: k = !1
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let P = [];
  if (n.length > 1)
    P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (e === "stickers" || r === "image") {
    if (P = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (P.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), P.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const E = w(), L = v(t);
      P.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: E ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !E
      }), P.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: L ? "Show" : "Hide",
        tip: L ? "Show input image" : "Hide input image",
        icon: L ? N.eye : N.eye_dashed
      });
    }
    P.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || P.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    P = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((E) => ({ value: E, label: E, active: d === E }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90 }
    ], k || P.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return i1(o.corners, P);
}
const e0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function xA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1 }) {
  const o = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], a = r ? e0.filter((c) => c.cameraTip) : e0;
  return i1([...e, ...o], [{
    key: "gizmo-mode",
    kind: "segments",
    attr: "data-gizmo-mode",
    label: "Gizmo mode",
    buttons: a.map(({ key: c, label: u, tip: d, cameraTip: b }) => ({ key: c, label: u, tip: r ? b : d, pressed: c === n ? "true" : "false" }))
  }]);
}
function SA(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), w = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let P;
  return N <= w ? P = Math.max(N, 14) : k >= 14 ? P = Math.min(k, w) : P = Math.min(Math.max(N, 14), w), { left: v, top: P };
}
function i1(e, t) {
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
const kA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function MA(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, stickers: w = !0, sceneLocked: N = !1 }) {
  const k = (S, W, j, F, G) => {
    const A = (ee) => (r == null ? void 0 : r.owner) === S && r.lane === ee ? r.frames.map((Se) => Se + G) : [];
    return {
      id: S,
      label: j,
      clip: F,
      selected: S === o,
      open: c.has(S),
      keyed: qk(W, t - G),
      keys: Xk(W).map((ee) => ({ frame: ee.frame + G, full: ee.full })),
      selectedFrames: A(null),
      lanes: ji(W).map((ee) => ({
        key: `${S}:${ee}`,
        lane: ee,
        label: kA[ee],
        frames: W[ee].keyframes.map((Se) => Se.frame + G),
        selectedFrames: A(ee)
      }))
    };
  }, P = w ? e.stickers : [], E = P.filter((S) => S.placement === "sky").sort((S, W) => W.z_index - S.z_index), L = P.filter((S) => S.placement === "world");
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
    fpsLocked: y || N,
    lengthLocked: N,
    lockTip: N ? "Set by the scene" : "Set by the video input",
    length: N ? n : e.timeline.length,
    rows: [
      ...v ? [k("camera", e.camera, "Camera", null, 0)] : [],
      ...[...E, ...L].map((S) => {
        const { start: W, in: j, duration: F } = S.clip;
        return k(S.id, S, Gf(S), { start: W, end: F === null ? null : W + F }, W - j);
      })
    ]
  };
}
function NA(e, t, n, r) {
  const o = Qk(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const PA = { class: "pano-floating-right" }, AA = {
  key: 0,
  class: "pano-floating-space"
}, CA = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, IA = ["data-settled"], OA = ["data-ready", "data-settled"], EA = ["aria-label", "data-tip"], FA = {
  key: 1,
  class: "pano-camera-preview-label"
}, TA = {
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
    return (t, n) => (ne(), ue(Ue, null, [
      U("div", PA, [
        e.space ? bi((ne(), ue("div", AA, [
          U("div", CA, [
            (ne(!0), ue(Ue, null, wt(e.space.modes, (r) => (ne(), br(ln, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          De(ln, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [So, e.space.visible]
        ]) : ct("", !0),
        (ne(!0), ue(Ue, null, wt(e.buttons, (r) => (ne(), br(ln, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      bi(U("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        U("div", {
          class: lt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Mt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = U("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            U("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ne(), ue("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Vt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, EA)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ne(), ue("div", FA, rt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, OA)
      ], 8, IA), [
        [So, e.preview.visible]
      ])
    ], 64));
  }
}, DA = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, LA = ["y2", "transform"], RA = ["transform"], VA = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => bi((ne(), ue("div", {
      class: lt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ne(), ue("svg", DA, [
        a[1] || (a[1] = U("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ne(!0), ue(Ue, null, wt(nt(n), (c) => (ne(), ue("line", {
          key: c,
          class: lt(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, LA))), 128)),
        U("g", { transform: r.value }, [...a[0] || (a[0] = [
          U("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, RA),
        a[2] || (a[2] = U("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [So, e.model.visible === !0]
    ]);
  }
}, $A = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: lt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(jb, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(ln, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(VA, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, zA = ["aria-label"], jA = { class: "pano-canvas-confirm-title" }, HA = { class: "pano-canvas-confirm-text" }, GA = { class: "pano-canvas-confirm-actions" }, KA = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, WA = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const w = r.value;
      if (!w) return;
      const N = w.querySelector(`[data-action='${v}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var P;
      const v = r.value;
      if (!v) return;
      const w = v.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const k = a()[0] || v;
      (P = k == null ? void 0 : k.focus) == null || P.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var L;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const w = a(), N = r.value;
      if (!w.length) {
        v.preventDefault(), (L = N == null ? void 0 : N.focus) == null || L.call(N);
        return;
      }
      const k = w[0], P = w[w.length - 1], E = document.activeElement;
      if (v.shiftKey) {
        (E === k || E === N || !(N != null && N.contains(E))) && (v.preventDefault(), P.focus());
        return;
      }
      (E === P || !(N != null && N.contains(E))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return go(() => t.model.visible, (v, w) => {
      if (v) {
        o = document.activeElement, Cc(() => {
          u();
        });
        return;
      }
      w && d();
    }, { immediate: !0 }), Ts(() => {
      d();
    }), (v, w) => e.model.visible === !0 ? (ne(), ue("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Rt(y, ["self"])
    }, [
      U("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        U("div", jA, rt(e.model.title), 1),
        U("div", HA, rt(e.model.text), 1),
        U("div", GA, [
          w[0] || (w[0] = U("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          U("button", KA, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, zA)
    ], 512)) : ct("", !0);
  }
}, BA = ["data-paint-pane"], UA = ["hidden"], YA = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], XA = ["aria-pressed", "disabled"], qA = ["hidden"], JA = { class: "pano-paint-color-pop-head" }, ZA = { class: "pano-paint-color-field" }, QA = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, eC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, tC = { class: "pano-paint-color-field" }, nC = { class: "pano-paint-alpha-wrap" }, rC = ["value"], iC = { "data-paint-alpha-value": "" }, oC = ["hidden"], aC = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, sC = ["data-paint-history-index", "aria-label", "disabled"], lC = ["data-paint-footer"], cC = ["data-paint-group"], uC = ["hidden"], fC = ["value", "disabled"], dC = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, pC = ["hidden"], hC = {
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
    return (r, o) => (ne(), ue("div", {
      class: lt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ne(!0), ue(Ue, null, wt(e.panes, (a) => {
        var c;
        return ne(), ue("div", {
          key: a.key,
          class: lt(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ne(), ue("div", {
            key: 0,
            class: lt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ne(!0), ue(Ue, null, wt(e.paintSwatches, (u) => (ne(), ue("button", {
              key: u.id,
              class: lt(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Mt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, YA))), 128)),
            U("button", {
              class: lt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, XA),
            U("div", {
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
              U("div", JA, [
                U("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = U("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              U("div", ZA, [
                U("div", QA, [
                  U("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                U("div", eC, [
                  U("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              U("label", tC, [
                o[1] || (o[1] = U("span", null, "Opacity", -1)),
                U("div", nC, [
                  U("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, rC),
                  U("span", iC, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              U("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                U("div", aC, [
                  (ne(!0), ue(Ue, null, wt(e.state.historyEntries || [], (u) => (ne(), ue("button", {
                    key: u.index,
                    class: lt(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Mt(n(u.color))
                  }, null, 14, sC))), 128))
                ])
              ], 8, oC)
            ], 12, qA)
          ], 10, UA)) : ct("", !0),
          U("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            U("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ne(!0), ue(Ue, null, wt(a.tools, (u) => {
                var d;
                return ne(), br(ln, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, cC),
            U("div", {
              class: lt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              U("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Mt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, fC),
              U("span", dC, rt(e.state.sizeText || "10"), 1)
            ], 10, uC),
            U("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              De(ln, {
                icon: nt(Ne).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, pC)
          ], 8, lC)
        ], 10, BA);
      }), 128))
    ], 2));
  }
}, mC = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null), o = /* @__PURE__ */ qt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ne(), ue(Ue, null, [
      U("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      U("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        U("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, gC = ["aria-label"], yC = ["data-tip", "aria-pressed"], bC = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ne(), ue("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Mt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ne(!0), ue(Ue, null, wt(e.buttons, (a) => (ne(), ue("button", pi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), rt(a.label), 17, yC))), 128))
    ], 12, gC));
  }
}, vC = {
  key: 0,
  class: "pano-cutout-menu"
}, _C = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, wC = ["data-aspect"], xC = ["data-action", "aria-label", "data-tip", "disabled"], SC = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Mt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ne(!0), ue(Ue, null, wt(e.model.items || [], (r) => (ne(), ue(Ue, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ne(), ue("div", vC, [
          U("button", _C, [
            De(Vt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          U("div", {
            class: lt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ne(!0), ue(Ue, null, wt(r.choices || [], (o) => (ne(), ue("button", {
              key: o.value,
              class: lt(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, rt(o.label), 11, wC))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ne(), br(bC, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (ne(), ue("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(Vt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, xC))
      ], 64))), 128))
    ], 4));
  }
}, kC = {
  key: 0,
  class: "pano-easing"
}, MC = { class: "pano-section-title" }, NC = { class: "pano-easing-range" }, PC = { class: "pano-easing-modes" }, AC = ["aria-pressed", "onClick"], CC = ["viewBox"], IC = ["x", "y"], OC = ["x1", "y1", "x2", "y2"], EC = ["d"], FC = ["x1", "y1", "x2", "y2"], TC = ["x1", "y1", "x2", "y2"], DC = ["cx", "cy"], LC = ["cx", "cy"], RC = { class: "pano-easing-note" }, si = 132, oo = 14, VC = {
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
    ], a = /* @__PURE__ */ qt(null), c = dt(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => oo + k * si, d = (k) => oo + (1 - k) * si, b = dt(() => {
      var S;
      if (((S = n.model) == null ? void 0 : S.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, E, L] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(E)} ${d(L)} ${u(1)} ${d(1)}`;
    }), y = dt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function w(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function N(k, P) {
      var j;
      if (k.button !== 0 || !c.value) return;
      const E = k.currentTarget;
      (j = E.setPointerCapture) == null || j.call(E, k.pointerId);
      let L = null;
      const S = (F) => {
        const G = a.value.getBoundingClientRect(), A = G.width / (si + oo * 2), ee = ((F.clientX - G.left) / A - oo) / si, Se = 1 - ((F.clientY - G.top) / A - oo) / si;
        L = [...L || c.value], L[P] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, L[P + 1] = Math.round(Math.min(1, Math.max(0, Se)) * 100) / 100, w(L, !1);
      }, W = () => {
        E.removeEventListener("pointermove", S), E.removeEventListener("pointerup", W), E.removeEventListener("pointercancel", W), L && w(L, !0);
      };
      E.addEventListener("pointermove", S), E.addEventListener("pointerup", W), E.addEventListener("pointercancel", W);
    }
    return (k, P) => e.model ? (ne(), ue("div", kC, [
      U("div", MC, [
        P[2] || (P[2] = U("span", null, "Easing", -1)),
        U("span", NC, rt(e.model.label), 1)
      ]),
      U("div", PC, [
        (ne(), ue(Ue, null, wt(o, (E) => U("button", {
          key: E.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(E) ? "true" : "false",
          onClick: (L) => w(E.easing, !0)
        }, rt(E.label), 9, AC)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ne(), ue("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${si + oo * 2} ${si + oo * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        U("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: si,
          height: si
        }, null, 8, IC),
        U("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, OC),
        U("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, EC),
        c.value ? (ne(), ue(Ue, { key: 0 }, [
          U("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, FC),
          U("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, TC),
          U("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (E) => N(E, 0))
          }, null, 40, DC),
          U("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (E) => N(E, 2))
          }, null, 40, LC)
        ], 64)) : ct("", !0)
      ], 8, CC)) : ct("", !0),
      U("div", RC, [
        e.model.mixed ? (ne(), ue(Ue, { key: 0 }, [
          ts("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ne(), ue(Ue, { key: 1 }, [
          ts("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ne(), ue(Ue, { key: 2 }, [
          ts("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ne(), ue(Ue, { key: 3 }, [
          ts("cubic-bezier(" + rt(y.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, $C = {
  class: "pano-side",
  "data-side": ""
}, zC = { class: "pano-side-head" }, jC = { class: "pano-side-title" }, HC = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, GC = {
  key: 0,
  class: "pano-side-scroll"
}, KC = { class: "pano-inspector" }, WC = { class: "pano-ui-row pano-coverage-row" }, BC = ["data-selected"], UC = ["aria-pressed", "disabled"], YC = ["aria-pressed", "disabled"], XC = {
  key: 0,
  class: "pano-section-title"
}, qC = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, JC = {
  class: "pano-picker",
  "data-picker": "selection"
}, ZC = ["disabled"], QC = { class: "pano-picker-label" }, eI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, tI = ["hidden"], nI = ["data-selection-id"], rI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, iI = {
  key: 2,
  class: "pano-state-actions"
}, oI = ["disabled"], aI = ["data-key"], sI = ["min", "max", "step", "value", "disabled", "data-param-key"], lI = ["min", "max", "step", "value", "disabled", "data-param-key"], cI = { class: "pano-visibility-section" }, uI = { class: "pano-visibility-stack" }, fI = ["data-visibility-row"], dI = { class: "pano-visibility-name" }, pI = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, hI = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], mI = ["open"], gI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, yI = { class: "pano-ui-settings-body" }, bI = { class: "pano-ui-row" }, vI = ["data-selected"], _I = ["aria-pressed"], wI = ["aria-pressed"], xI = { class: "pano-ui-row" }, SI = ["data-selected"], kI = ["aria-pressed"], MI = ["aria-pressed"], NI = {
  key: 1,
  class: "pano-side-footer"
}, PI = ["data-action"], AI = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = dt(() => {
      const u = n.model;
      return !u || typeof u != "object" ? !1 : Object.keys(u).length > 0 && !!u.coverage;
    });
    function a(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function c(u, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    return (u, d) => {
      var b, y, v, w, N;
      return ne(), ue("div", $C, [
        U("div", zC, [
          U("div", jC, [
            U("span", HC, [
              De(Vt, {
                icon: nt(Ne).globe
              }, null, 8, ["icon"])
            ]),
            U("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = U("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = U("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ne(), ue("div", GC, [
          U("div", KC, [
            d[11] || (d[11] = U("div", { class: "pano-section-title" }, [
              U("span", null, "Scene")
            ], -1)),
            U("div", WC, [
              d[2] || (d[2] = U("label", null, "Coverage", -1)),
              U("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                U("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((v = e.model.coverage) == null ? void 0 : v.disabled) === !0
                }, "360", 8, UC),
                U("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, YC)
              ], 8, BC)
            ]),
            e.model.transformTitle !== !1 ? (ne(), ue("div", XC, [...d[3] || (d[3] = [
              U("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ne(), ue("div", qC, [
              U("label", null, rt(e.model.selectionPicker.label), 1),
              U("div", JC, [
                U("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  U("span", QC, [
                    e.model.selectionPicker.currentIcon ? (ne(), ue("span", eI, [
                      De(Vt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    U("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = U("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, ZC),
                U("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ne(!0), ue(Ue, null, wt(e.model.selectionPicker.items || [], (k) => (ne(), ue("button", {
                    key: k.id,
                    type: "button",
                    class: lt(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (ne(), ue("span", rI, [
                      De(Vt, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    U("span", null, rt(k.label), 1)
                  ], 10, nI))), 128))
                ], 8, tI)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ne(), ue("div", iI, [
              U("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Vt, {
                  icon: nt(Ne).copy
                }, null, 8, ["icon"]),
                U("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, oI)
            ])) : ct("", !0),
            U("div", {
              class: lt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ne(!0), ue(Ue, { key: 0 }, wt(e.model.notes, (k) => (ne(), ue("div", {
                key: k,
                class: "pano-param-note"
              }, rt(k), 1))), 128)) : (ne(!0), ue(Ue, { key: 1 }, wt(e.model.params || [], (k) => (ne(), ue("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                U("label", null, rt(k.label), 1),
                U("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: c(k, e.model),
                  style: Mt(a(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, sI),
                U("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: c(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, lI)
              ], 8, aI))), 128))
            ], 2),
            De(VC, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ne(), ue(Ue, { key: 3 }, [
              d[6] || (d[6] = U("div", { class: "pano-divider" }, null, -1)),
              U("div", cI, [
                d[5] || (d[5] = U("div", { class: "pano-section-title" }, [
                  U("span", null, "Layers")
                ], -1)),
                U("div", uI, [
                  (ne(!0), ue(Ue, null, wt(e.model.visibilityRows, (k) => (ne(), ue("div", {
                    key: k.key,
                    class: lt(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    U("span", dI, [
                      U("span", pI, [
                        De(Vt, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      U("span", null, rt(k.label), 1)
                    ]),
                    U("button", {
                      class: lt(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1
                    }, [
                      De(Vt, {
                        icon: k.visible === !0 ? nt(Ne).eye : nt(Ne).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, hI)
                  ], 10, fI))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (ne(), ue("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              U("summary", null, [
                d[7] || (d[7] = U("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                U("span", gI, [
                  De(Vt, {
                    icon: nt(Ne).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              U("div", yI, [
                U("div", bI, [
                  d[8] || (d[8] = U("label", null, "Drag X", -1)),
                  U("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    U("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, _I),
                    U("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, wI)
                  ], 8, vI)
                ]),
                U("div", xI, [
                  d[9] || (d[9] = U("label", null, "Drag Y", -1)),
                  U("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    U("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, kI),
                    U("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, MI)
                  ], 8, SI)
                ]),
                d[10] || (d[10] = U("div", { class: "pano-ui-row" }, [
                  U("span"),
                  U("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, mI)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ne(), ue("div", NI, [
          (ne(!0), ue(Ue, null, wt(e.model.footerButtons, (k) => (ne(), ue("button", {
            key: k.action,
            class: lt(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, rt(k.label), 11, PI))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, CI = { class: "pano-timeline-bar" }, II = ["aria-label", "data-tip"], OI = ["aria-label", "data-tip"], EI = { class: "pano-timeline-time" }, FI = ["data-tip"], TI = { key: 0 }, DI = ["value"], LI = ["data-tip"], RI = { key: 0 }, VI = ["value"], $I = ["aria-expanded"], zI = ["inert"], jI = { class: "pano-timeline-name" }, HI = ["aria-expanded", "aria-label", "onClick"], GI = ["title", "aria-current", "onClick"], KI = ["data-keyed", "aria-label", "onClick"], WI = ["onPointerdown"], BI = ["onPointerdown"], UI = ["onPointerdown"], YI = ["onPointerdown"], XI = ["aria-label", "data-tip", "onPointerdown"], qI = { key: 0 }, JI = ["onPointerdown"], ZI = ["aria-label", "data-tip", "onPointerdown"], QI = { key: 0 }, eO = 10, tO = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ qt(null), c = /* @__PURE__ */ qt(null), u = /* @__PURE__ */ qt(1), d = /* @__PURE__ */ qt(0), b = /* @__PURE__ */ qt(!1);
    let y = null, v = null, w = null;
    Oc(() => {
      y = new ResizeObserver(([O]) => {
        u.value = Math.max(1, O.contentRect.width);
      }), a.value && y.observe(a.value), v = new ResizeObserver(([O]) => {
        d.value = O.contentRect.height;
      }), c.value && v.observe(c.value);
    }), Ts(() => {
      y == null || y.disconnect(), v == null || v.disconnect(), w == null || w();
    });
    const N = dt(() => Math.max(1, Number(n.model.span || 1))), k = dt(() => u.value / N.value), P = (O) => `${O / N.value * 100}%`, E = dt(() => {
      const O = o.find((V) => V * k.value >= 56) || o[o.length - 1], X = [];
      for (let V = 0; V < N.value; V += O) X.push(V);
      return X;
    });
    function L(O) {
      const X = a.value.getBoundingClientRect(), V = Math.floor((O - X.left) / Math.max(1, X.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, V));
    }
    function S(O, X, V) {
      const Z = Math.ceil(eO / Math.max(1e-6, k.value)), te = new Map(X.map((de) => [de.frame, de.full]));
      return iM(X.map((de) => de.frame), Z).map((de, Ce) => ({
        ...de,
        key: `${O}:${Ce}`,
        partial: de.frames.some((T) => !te.get(T)),
        selected: de.frames.some((T) => V.includes(T))
      }));
    }
    function W(O) {
      return S(O.id, O.keys, O.selectedFrames);
    }
    function j(O) {
      return S(O.key, O.frames.map((X) => ({ frame: X, full: !0 })), O.selectedFrames);
    }
    function F(O) {
      const X = O.end === null ? N.value : O.end;
      return { left: P(O.start), width: P(Math.max(0, X - O.start)) };
    }
    function G(O, X) {
      const V = O.clientX, Z = Math.max(1e-6, k.value);
      let te = 0;
      X("start", 0, O);
      const de = (T) => {
        if (T.pointerId !== O.pointerId) return;
        const ht = Math.round((T.clientX - V) / Z);
        ht !== te && (te = ht, X("move", te, T));
      }, Ce = (T) => {
        T.pointerId === O.pointerId && (w(), X("end", te, T));
      };
      w == null || w(), w = () => {
        window.removeEventListener("pointermove", de), window.removeEventListener("pointerup", Ce), window.removeEventListener("pointercancel", Ce), w = null;
      }, window.addEventListener("pointermove", de), window.addEventListener("pointerup", Ce), window.addEventListener("pointercancel", Ce);
    }
    function A(O) {
      O.button === 0 && G(O, (X, V, Z) => r("action", { type: "seek", frame: L(Z.clientX), phase: X }));
    }
    function ee(O, X, V) {
      O.button === 0 && (r("action", { type: "select-row", id: X.id }), G(O, (Z, te) => r("action", { type: "clip", id: X.id, mode: V, delta: te, phase: Z })));
    }
    function Se(O, X, V, Z, te) {
      if (O.button === 0) {
        if (O.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: V, frames: Z.frames, additive: !0 });
          return;
        }
        Z.frames.every((de) => te.includes(de)) || r("action", { type: "select-keys", owner: X.id, lane: V, frames: Z.frames, additive: !1 }), G(O, (de, Ce) => r("action", { type: "move-keys", delta: Ce, phase: de }));
      }
    }
    const K = dt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function R(O, X, V) {
      r("action", X), await Cc(), O.target.value = V();
    }
    function se(O) {
      R(O, { type: "fps", fps: Number(O.target.value) }, () => K.value);
    }
    function Pe(O) {
      const X = O.target.value.trim();
      R(O, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function J(O, X, V) {
      O.button !== 0 || O.target !== O.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: V, frames: [], additive: !1 });
    }
    return (O, X) => bi((ne(), ue("section", {
      class: lt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      U("div", CI, [
        U("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (V) => r("action", { type: "play" }))
        }, [
          De(Vt, {
            icon: e.model.playing ? nt(Ne).pause : nt(Ne).play
          }, null, 8, ["icon"])
        ], 8, II),
        e.model.hasAudio ? (ne(), ue("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (V) => r("action", { type: "mute" }))
        }, [
          De(Vt, {
            icon: e.model.muted ? nt(Ne).volume_muted : nt(Ne).volume2
          }, null, 8, ["icon"])
        ], 8, OI)) : ct("", !0),
        U("span", EI, rt(e.model.label), 1),
        U("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ne(), ue("span", TI, rt(K.value), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: K.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, DI)),
          X[6] || (X[6] = U("span", null, "fps", -1))
        ], 8, FI),
        U("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          X[7] || (X[7] = U("span", null, "Length", -1)),
          e.model.lengthLocked ? (ne(), ue("span", RI, rt(e.model.length), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Pe
          }, null, 40, VI))
        ], 8, LI),
        U("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (V) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = U("span", null, "Timeline", -1)),
          De(Vt, {
            icon: nt(Ne).chevron
          }, null, 8, ["icon"])
        ], 8, $I)
      ]),
      U("div", {
        class: lt(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: Mt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Rt((V) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Rt((V) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Rt((V) => b.value = !1, ["self"]))
      }, [
        U("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = U("div", { class: "pano-timeline-corner" }, null, -1)),
          U("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: A
          }, [
            (ne(!0), ue(Ue, null, wt(E.value, (V) => (ne(), ue("span", {
              key: V,
              class: "pano-timeline-tick",
              style: Mt({ left: P(V) })
            }, rt(V), 5))), 128)),
            U("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: P(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ne(!0), ue(Ue, null, wt(e.model.rows || [], (V) => (ne(), ue(Ue, {
            key: V.id
          }, [
            U("div", {
              class: lt(["pano-timeline-head", { selected: V.selected }])
            }, [
              U("div", jI, [
                U("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": V.open ? "true" : "false",
                  "aria-label": V.open ? `Hide ${V.label} parameters` : `Show ${V.label} parameters`,
                  onClick: Rt((Z) => r("action", { type: "toggle-row", id: V.id }), ["stop"])
                }, [
                  De(Vt, {
                    icon: nt(Ne).chevron
                  }, null, 8, ["icon"])
                ], 8, HI),
                U("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: V.label,
                  "aria-current": V.selected ? "true" : void 0,
                  onClick: (Z) => r("action", { type: "select-row", id: V.id })
                }, [
                  De(Vt, {
                    icon: V.clip ? nt(Ne).image : nt(Ne).camera
                  }, null, 8, ["icon"]),
                  U("span", null, rt(V.label), 1)
                ], 8, GI),
                U("button", {
                  class: lt(["pano-timeline-key", { keyed: V.keyed }]),
                  type: "button",
                  "data-keyed": V.keyed ? "true" : "false",
                  "aria-label": V.keyed ? `Every ${V.label} parameter has a keyframe here; update them` : `Add keyframes for every ${V.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Rt((Z) => r("action", { type: "key-row", owner: V.id }), ["stop"])
                }, [
                  De(Vt, {
                    icon: nt(Ne).keyframe
                  }, null, 8, ["icon"])
                ], 10, KI)
              ]),
              V.open ? (ne(!0), ue(Ue, { key: 0 }, wt(V.lanes, (Z) => (ne(), ue("div", {
                key: Z.key,
                class: "pano-timeline-lane-head"
              }, rt(Z.label), 1))), 128)) : ct("", !0)
            ], 2),
            U("div", {
              class: lt(["pano-timeline-track", { selected: V.selected }])
            }, [
              U("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (Z) => J(Z, V, null)
              }, [
                V.clip ? (ne(), ue("div", {
                  key: 0,
                  class: lt(["pano-timeline-clip", { open: V.clip.end === null }]),
                  style: Mt(F(V.clip)),
                  onPointerdown: Rt((Z) => ee(Z, V, "move"), ["stop"])
                }, [
                  U("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Rt((Z) => ee(Z, V, "start"), ["stop"])
                  }, null, 40, UI),
                  U("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Rt((Z) => ee(Z, V, "end"), ["stop"])
                  }, null, 40, YI)
                ], 46, BI)) : ct("", !0),
                (ne(!0), ue(Ue, null, wt(W(V), (Z) => (ne(), ue("button", {
                  key: Z.key,
                  type: "button",
                  class: lt(["pano-timeline-pin", { selected: Z.selected, cluster: Z.frames.length > 1, partial: Z.partial }]),
                  style: Mt({ left: P(Z.frame + 0.5) }),
                  "aria-label": `${V.label}: ${Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `keyframe at frame ${Z.frames[0]}`}`,
                  "data-tip": Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `Frame ${Z.frames[0]}`,
                  onPointerdown: Rt((te) => Se(te, V, null, Z, V.selectedFrames), ["stop"])
                }, [
                  Z.frames.length > 1 ? (ne(), ue("span", qI, rt(Z.frames.length), 1)) : ct("", !0)
                ], 46, XI))), 128))
              ], 40, WI),
              V.open ? (ne(!0), ue(Ue, { key: 0 }, wt(V.lanes, (Z) => (ne(), ue("div", {
                key: Z.key,
                class: "pano-timeline-lane",
                onPointerdown: (te) => J(te, V, Z.lane)
              }, [
                (ne(!0), ue(Ue, null, wt(j(Z), (te) => (ne(), ue("button", {
                  key: te.key,
                  type: "button",
                  class: lt(["pano-timeline-pin", { selected: te.selected, cluster: te.frames.length > 1 }]),
                  style: Mt({ left: P(te.frame + 0.5) }),
                  "aria-label": `${Z.label}: ${te.frames.length > 1 ? `${te.frames.length} keyframes` : `keyframe at frame ${te.frames[0]}`}`,
                  "data-tip": te.frames.length > 1 ? `${te.frames.length} keyframes` : `Frame ${te.frames[0]}`,
                  onPointerdown: Rt((de) => Se(de, V, Z.lane, te, Z.selectedFrames), ["stop"])
                }, [
                  te.frames.length > 1 ? (ne(), ue("span", QI, rt(te.frames.length), 1)) : ct("", !0)
                ], 46, ZI))), 128))
              ], 40, JI))), 128)) : ct("", !0),
              U("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: P(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, zI)
    ], 2)), [
      [So, e.model.visible]
    ]);
  }
}, nO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: lt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Mt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, rO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, iO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", rO, [
      (ne(!0), ue(Ue, null, wt(e.buttons, (r) => bi((ne(), br(ln, {
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
        [So, r.visible !== !1]
      ])), 128))
    ]));
  }
}, oO = ["data-video-ready"], aO = { class: "pano-video-transport-shell" }, sO = { class: "pano-video-controls-left" }, lO = { class: "pano-video-filmstrip" }, cO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, uO = ["src", "onLoad"], fO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, dO = ["max", "value", "disabled"], pO = { class: "pano-video-controls-right" }, hO = ["data-has-audio"], mO = { class: "pano-video-volume-pop" }, gO = ["value", "disabled"], yO = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), r = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), o = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? Ne.pause : Ne.play;
    }), a = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = dt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? Ne.loop_off : Ne.loop;
    }), d = dt(() => {
      var F, G;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = dt(() => {
      var F, G, A;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? Ne.volume : ((G = t.state) == null ? void 0 : G.muted) === !0 || Number(((A = t.state) == null ? void 0 : A.volume) ?? 1) <= 0 ? Ne.volume_muted : Ne.volume2;
    }), y = dt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), v = dt(() => ({ left: `${y.value}%` })), w = dt(() => {
      var ee, Se;
      const F = (ee = t.state) == null ? void 0 : ee.volumePct, G = Number(((Se = t.state) == null ? void 0 : Se.volume) ?? 1) * 100, A = Number(F ?? G ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, A))}%`
      };
    }), N = dt(() => {
      var A, ee;
      const G = [
        String(((A = t.state) == null ? void 0 : A.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((Se, K) => Math.max(Se, K.length), 4);
      return `${Math.max(4, G)}ch`;
    }), k = dt(() => ({ "--pano-video-time-ch": N.value })), P = dt(() => {
      var A, ee;
      const F = Array.isArray((A = t.state) == null ? void 0 : A.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const G = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: G }, (Se, K) => ({
        id: `placeholder-${K}`,
        src: "",
        label: ""
      }));
    }), E = /* @__PURE__ */ qt(/* @__PURE__ */ new Set()), L = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), S = (F) => E.value.has(L(F)), W = (F) => {
      const G = new Set(E.value);
      G.add(L(F)), E.value = G;
    };
    go(P, (F) => {
      const G = new Set(F.map(L)), A = /* @__PURE__ */ new Set();
      for (const ee of E.value)
        G.has(ee) && A.add(ee);
      E.value = A;
    }, { immediate: !0 });
    const j = dt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, G) => (ne(), ue("div", {
      class: lt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Mt(j.value)
    }, [
      G[1] || (G[1] = U("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      G[2] || (G[2] = U("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      U("div", aO, [
        U("div", sO, [
          De(ln, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          U("div", {
            class: "pano-video-time pano-video-time-start",
            style: Mt(k.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        U("div", lO, [
          U("div", cO, [
            (ne(!0), ue(Ue, null, wt(P.value, (A) => (ne(), ue("div", {
              key: L(A),
              class: lt(["pano-video-thumb", {
                "is-placeholder": !A.src,
                "is-loaded": A.src && S(A)
              }])
            }, [
              A.src ? (ne(), ue("img", {
                key: 0,
                src: A.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => W(A)
              }, null, 40, uO)) : (ne(), ue("span", fO))
            ], 2))), 128))
          ]),
          U("div", {
            class: "pano-video-playhead",
            style: Mt(v.value),
            "aria-hidden": "true"
          }, [...G[0] || (G[0] = [
            U("span", { class: "pano-video-playhead-line" }, null, -1),
            U("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          U("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, dO)
        ]),
        U("div", pO, [
          U("div", {
            class: "pano-video-time pano-video-time-end",
            style: Mt(k.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          De(ln, {
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
          U("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            U("div", mO, [
              U("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Mt(w.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, gO)
            ]),
            De(ln, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, hO)
        ])
      ])
    ], 14, oO));
  }
}, bO = { class: "pano-floating-top" }, vO = ["data-selected", "data-view-count"], _O = ["data-view", "aria-pressed", "aria-label", "disabled"], wO = { class: "label" }, xO = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ne(), ue("div", bO, [
        U("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ne(!0), ue(Ue, null, wt(e.buttons, (o) => bi((ne(), ue("button", {
            key: o.key,
            class: lt(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            De(Vt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            U("span", wO, rt(o.label), 1)
          ], 10, _O)), [
            [So, o.visible !== !1]
          ])), 128))
        ], 8, vO)
      ]);
    };
  }
};
function o1(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ne.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ne.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ne.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Ne.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Ne.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Ne.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ne.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ne.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ne.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ne.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ne.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ne.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Ne.globe, pressed: null, visible: !1 }
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
const SO = ["aria-label"], kO = { class: "pano-stage-column" }, MO = { class: "pano-stage-wrap" }, NO = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, PO = {
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
    const d = /* @__PURE__ */ qt(null), b = /* @__PURE__ */ qt(null), y = /* @__PURE__ */ qt(null);
    function v() {
      var K, R;
      return ((R = (K = y.value) == null ? void 0 : K.getRefs) == null ? void 0 : R.call(K)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function w(K) {
      var R, se;
      return ((se = (R = b.value) == null ? void 0 : R.open) == null ? void 0 : se.call(R, K)) === !0;
    }
    function N(K) {
      o("image-file-selected", K);
    }
    function k(K) {
      o("image-file-cancelled", K);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: w });
    const P = dt(() => r.readOnly === !0), E = dt(() => r.shellPreset || o1(r.type)), L = dt(() => {
      var R, se, Pe;
      const K = String((((R = r.uiState) == null ? void 0 : R.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (Pe = r.uiState) == null ? void 0 : Pe.stageWarningDetail) ?? "");
      return K === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : K === "stickers" ? "One or more sticker previews are unavailable." : K === "frame" ? "The editor hit a rendering error. Check the browser console for details." : K === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : K.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), S = dt(() => {
      var R;
      const K = Array.isArray((R = E.value) == null ? void 0 : R.floatingButtons) ? E.value.floatingButtons.slice() : [];
      return P.value && K.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ne.fullscreen
      }), K;
    });
    function W() {
      const K = d.value;
      return K ? Array.from(K.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((R) => R instanceof HTMLElement ? !R.hidden && R.tabIndex >= 0 && R.offsetParent !== null : !1) : [];
    }
    function j() {
      var se;
      const R = W()[0] || d.value;
      (se = R == null ? void 0 : R.focus) == null || se.call(R);
    }
    function F() {
      var K;
      u != null && u.isConnected && ((K = u.focus) == null || K.call(u)), u = null;
    }
    function G(K) {
      var R, se, Pe, J;
      if (!K.defaultPrevented) {
        if (K.key === "Tab") {
          const O = W();
          if (!O.length) {
            K.preventDefault(), (se = (R = d.value) == null ? void 0 : R.focus) == null || se.call(R);
            return;
          }
          const X = O[0], V = O[O.length - 1], Z = document.activeElement;
          if (K.shiftKey) {
            (Z === X || Z === d.value || !((Pe = d.value) != null && Pe.contains(Z))) && (K.preventDefault(), V.focus());
            return;
          }
          (Z === V || !((J = d.value) != null && J.contains(Z))) && (K.preventDefault(), X.focus());
          return;
        }
        K.key === "Escape" && o("close");
      }
    }
    function A() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function ee() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function Se(K) {
      document.removeEventListener("keydown", G), K ? (u || (u = document.activeElement), A(), document.addEventListener("keydown", G), Cc(() => {
        j();
      })) : (ee(), F());
    }
    return Oc(() => {
      Se(r.open);
    }), Ts(() => {
      ee(), document.removeEventListener("keydown", G), F();
    }), go(() => r.open, (K) => {
      Se(K);
    }), (K, R) => e.open ? (ne(), ue("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: R[2] || (R[2] = Rt((se) => o("close"), ["self"]))
    }, [
      U("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        U("div", kO, [
          U("div", MO, [
            R[3] || (R[3] = U("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            R[4] || (R[4] = U("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            R[5] || (R[5] = U("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ne(), ue("div", NO, rt(L.value), 1)) : ct("", !0),
            R[6] || (R[6] = U("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              U("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(mC, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            De(Hb, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            P.value ? ct("", !0) : (ne(), ue(Ue, { key: 1 }, [
              De(iO, {
                buttons: e.uiState.toolButtons || E.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De($A, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(hC, {
                "paint-swatches": e.paintSwatches,
                panes: E.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(yO, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(xO, {
              buttons: e.uiState.viewButtons || E.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(TA, {
              buttons: e.uiState.floatingButtons || S.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            De(SC, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(nO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(WA, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(tO, {
            model: e.uiState.timeline || {},
            onAction: R[0] || (R[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ne(), br(AI, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: R[1] || (R[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, SO)
    ])) : ct("", !0);
  }
}, Pr = "loading", ba = "ready", hr = "failed";
function a1(e, t = "") {
  return e && (e.__panoLoadState = Pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function s1(e, t = "") {
  return e && (e.__panoLoadState = ba, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function l1(e, t = "") {
  return e && (e.__panoLoadState = hr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function fd(e, t) {
  return e ? e.__panoLoadState === hr ? hr : typeof t == "function" && t(e) ? ba : Pr : ba;
}
function dd(e) {
  return fd(e) === hr;
}
function AO({ presented: e, background: t = ba, stickers: n = [] } = {}) {
  if (!e) return { status: Pr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Pr, a = r.includes(Pr);
  if (o && a) return { status: Pr, detail: "mixed" };
  if (o) return { status: Pr, detail: "background" };
  if (a) return { status: Pr, detail: "stickers" };
  const c = t === hr, u = r.includes(hr);
  return c && u ? { status: hr, detail: "mixed" } : c ? { status: hr, detail: "background" } : u ? { status: hr, detail: "stickers" } : { status: ba, detail: "" };
}
const CO = "state_json", IO = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), ff = "sticker_image_1", OO = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), t0 = 0.01, EO = "external_image", wl = "pano_sticker_input_images", FO = "pano_sticker_input_videos", TO = "pano_sticker_input_frames", DO = "pano_sticker_input_video_meta", LO = !0, Gl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], zr = Math.PI / 180, fo = 180 / Math.PI, df = 1, n0 = "rgb(255, 221, 87)", RO = "rgb(228, 228, 231)", VO = "rgb(180, 150, 60)", $O = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, zO = 64, r0 = 40, pf = 16, jO = 0.45, i0 = 180, HO = 160, wc = 24, GO = 4, KO = 4, xl = /* @__PURE__ */ new Map(), o0 = /* @__PURE__ */ new Map(), $i = /* @__PURE__ */ new Map(), WO = 12, An = gb({
  app: Cr,
  api: Xt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: dd,
    markImageFailed: l1,
    markImageLoading: a1,
    markImageReady: s1
  }
});
function hf(e) {
  if (!vn(e, "background") || !vn(e, "external-sticker")) return null;
  const t = An.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const BO = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function UO(e) {
  if (!vn(e, "background")) return null;
  const [t] = An.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = An.uiValue(e, "pano_timeline_frames") || [], [r] = An.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Xn(r) };
}
const YO = An.assetSource, Qa = An.source, mf = An.uiImage, XO = An.invalidateUiImage, qO = An.resolvePreferredExactLinkedSource, gf = An.loadPreferredExactLinkedImage;
function yf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function JO(e) {
  return 1 - Math.pow(1 - e, 3);
}
function ZO(e, t, n) {
  const r = Q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function QO(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = $i.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : ($i.delete(t), $i.set(t, n), n);
}
function eE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for ($i.delete(n), $i.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); $i.size > WO; ) {
      const o = $i.keys().next().value;
      if (!o) break;
      $i.delete(o);
    }
}
function tE(e) {
  return e * e * e;
}
function $c(e, t, n) {
  return { x: e, y: t, z: n };
}
function a0(e, t) {
  return $c(e.x + t.x, e.y + t.y, e.z + t.z);
}
function s0(e, t) {
  return $c(e.x * t, e.y * t, e.z * t);
}
function bf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function nE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return $c(e.x / t, e.y / t, e.z / t);
}
function Sl(e) {
  return {
    yaw: Yt(Math.atan2(e.x, e.z) * fo),
    pitch: Q(Math.asin(Q(e.y, -1, 1)) * fo, -90, 90)
  };
}
function li(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function Li(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function vf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return Li(e, t);
  const d = Q((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, w = Number(e.y || 0) - y;
  return v * v + w * w;
}
function dr(e, t, n) {
  return e + (t - e) * n;
}
function jr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Q(n, 0, 1)})`;
}
function rE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let kl = { fillStyle: "", url: "" };
function iE(e, t, n) {
  if (kl.url && kl.fillStyle === String(e || ""))
    return kl.url;
  const r = rE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${wc}" height="${wc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return kl = { fillStyle: String(e || ""), url: r }, r;
}
function Kl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function tr(e) {
  return {
    r: Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Nn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function oE(e) {
  return Gl.some((t) => Kl(e, t.color));
}
function _f(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Q(Number(t), 0, 1), a = Q(Number(n), 0, 1);
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
function wf(e) {
  const t = Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function Uo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const c1 = "pano_suite.ui_settings.v1", u1 = "pano_suite.node_grid_visibility.v1";
let ea = null, Hr = null;
function Wl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function aE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(c1)) || "").trim();
    if (!t) return ea ? Wl(ea) : null;
    const n = JSON.parse(t), r = Wl(n);
    return ea = r, r;
  } catch {
    return ea ? Wl(ea) : null;
  }
}
function sE(e) {
  var n;
  const t = Wl(e);
  ea = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(c1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function f1() {
  var e;
  if (Hr && typeof Hr == "object")
    return Hr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(u1)) || "").trim();
    if (!t)
      return Hr = {}, Hr;
    const n = JSON.parse(t);
    return Hr = n && typeof n == "object" ? n : {}, Hr;
  } catch {
    return Hr = {}, Hr;
  }
}
function lE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = f1()[n];
  return typeof o == "boolean" ? o : !!t;
}
function cE(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = f1();
  r[n] = !!t, Hr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(u1, JSON.stringify(r));
  } catch {
  }
}
function uE(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function l0(e) {
  const { paintCount: t, maskCount: n } = uE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function Yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ml(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function fE(e, t) {
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
function ao(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function dE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function pE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function hE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function mE(e, t, n = {}) {
  var om, am;
  await Bb(e, { tolerateOperationFailure: !0 }), An.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = fE(e, t);
  await op();
  const u = Ml(e, "output_preset"), d = Ml(e, "coverage"), b = Ml(e, "bg_color"), y = Ml(e, CO), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return gf(
      e,
      i,
      () => oe(),
      `background:size:${i.join("|")}`
    );
  }, w = () => {
    const i = v();
    return hE(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return pE(s) ? w() || Math.max(1, Math.round(Number(i || 2048))) : dE(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, E = t === "cutout" && k, L = E ? UO(e) : null, S = (k ? Ky : Gy)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: L ? L.coverage : Xn(d == null ? void 0 : d.value),
    sharedUiSettings: aE(),
    active: Uy(e),
    fps: k ? hf(e) : null,
    scene: (L == null ? void 0 : L.state) ?? null
  });
  e.__panoLiveStateOverride = S, e.__panoLiveStateVersion = 0;
  let W = null;
  E ? (W = ig(S.camera, 0), S.shots = [{ ...W, position: [...W.position] }], S.active.selected_shot_id = Hf) : t === "cutout" && (S.shots = Array.isArray(S.shots) ? S.shots.slice(0, 1) : [], S.shots.length || (S.active.selected_shot_id = null));
  const j = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(S.shots) ? S.shots : [], s = String(((l = S == null ? void 0 : S.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, F = j ? Zp(j, !1) : { width: 220, height: 132 }, G = o1(t), A = /* @__PURE__ */ va({
    stageStatus: Pr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (G.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (om = G.spaceButtons) != null && om.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: G.spaceButtons, frame: G.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (G.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...E && BO.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(G.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: jr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: jr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: F.width,
      height: F.height,
      label: j ? "Loading preview" : "Add Frame to preview"
    }
  }), ee = document.createElement("div");
  document.body.appendChild(ee);
  const Se = ({ intent: i, file: s } = {}) => {
    if (Ar(s)) {
      if (i === "add") {
        hh(s);
        return;
      }
      if (i === "add-world") {
        k_(s);
        return;
      }
      i === "replace" && P_(s);
    }
  }, K = ({ intent: i } = {}) => {
  }, R = Id(PO, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: G,
    paintSwatches: Gl.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: jr(i.color, 1)
    })),
    uiState: A,
    onClose: () => {
      Go();
    },
    onTimeline: (i) => w_(i),
    onImageFileSelected: Se,
    onImageFileCancelled: K
  });
  let se = null;
  try {
    se = R.mount(ee);
  } catch (i) {
    try {
      R.unmount();
    } catch {
    }
    throw ee.remove(), i;
  }
  const Pe = ee.querySelector(".pano-modal-overlay"), J = ee.querySelector(".pano-modal"), O = J == null ? void 0 : J.querySelector("[data-stage-overlay]"), X = J == null ? void 0 : J.querySelector("[data-stage-background]"), V = J == null ? void 0 : J.querySelector(".pano-stage-wrap"), Z = ((am = se == null ? void 0 : se.getPaintOverlayRefs) == null ? void 0 : am.call(se)) || {}, te = Z.cursor || null, de = Z.sizePreview || null, Ce = Z.sizeSample || null;
  if (!Pe || !J || !O || !X || !V || !te || !de || !Ce)
    throw R.unmount(), ee.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const T = O.getContext("2d"), ht = J.querySelector("[data-side]"), we = J.querySelector("[data-video-element]"), gn = J.querySelector("[data-port-video-element]"), At = J.querySelector(".pano-floating-right"), _n = J.querySelector(".pano-floating-top"), xt = J.querySelector("[data-tool-rail]"), Zt = J.querySelector("[data-frame-rail]"), pt = J.querySelector("[data-frame-roll-knob]"), xa = J.querySelector("[data-paint-dock]"), $ = J.querySelector(".pano-video-transport"), B = J.querySelector("[data-selection-menu]");
  let re = !1;
  const _e = J.querySelector("[data-tooltip]"), me = J.querySelector("[data-camera-preview-host]"), pe = J.querySelector("[data-camera-preview-canvas]"), Ae = J.querySelector("[data-paint-color-row]"), be = J.querySelector("[data-paint-color-pop]"), ke = J.querySelector("[data-paint-color-sv]"), fe = J.querySelector("[data-paint-color-sv-cursor]"), $e = J.querySelector("[data-paint-hue-strip]"), Ie = J.querySelector("[data-paint-hue-handle]");
  let Le = 0, je = 0;
  V == null || V.removeAttribute("data-stage-ready"), V == null || V.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", X.style.opacity = "0", o && (ht == null || ht.remove(), J.classList.add("pano-modal-readonly"));
  const at = () => {
    if (!h.customPaintSessionStart) return;
    if (Kl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (oE(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      tr(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !Kl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, ft = (i = !1) => {
    !be || be.hidden || (i ? at() : h.customPaintSessionStart = null, be.hidden = !0, A.paintDock.colorPopOpen = !1);
  }, yt = () => {
    be && (be.hidden && (h.customPaintSessionStart = tr(h.customPaintColor)), be.hidden = !1, A.paintDock.colorPopOpen = !0);
  };
  J.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Zi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (J.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ft(!0), t === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), oe()), (s = A.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (A.frameRail.aspectOpen = !1)));
  });
  const ut = t === "stickers" ? S.active.selected_sticker_id : S.active.selected_shot_id, Wt = JSON.stringify(ng(S)), h = {
    mode: "pano",
    selectedId: ut,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Kr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Xn(S.coverage),
    historyController: iA(80, { entries: [Wt], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ai,
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
    showGrid: lE(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ff(),
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
    // PanoramaCutoutNode's Frame view with World content: the pivot distance its last move left (#77).
    frameDistance: null,
    panelWasEnabled: !1,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Ye = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let zn = null;
  t === "stickers" && (h.selectedId = null, S.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const Qt = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), yn = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), on = document.createElement("canvas");
  on.__panoFrameIdx = 0;
  const Qr = document.createElement("canvas");
  Qr.__panoFrameIdx = 0;
  const Ee = {
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
    tickErrorSignature: ""
  }, z = aN({
    onReady: () => oe(),
    onFailed: () => oe(),
    onUpdate: () => {
      Ee.backgroundDirty = !0, oe({ localOnly: !0 });
    }
  });
  let ge = { key: "", projection: null }, Oe = { key: null, sceneState: null }, Re = null, Je = null, Fe = null, et = null, Ct = null;
  const hn = Number.parseFloat(
    getComputedStyle(J).getPropertyValue("--pano-float-radius")
  ) || 10, bt = (i) => {
    const s = String(i || "default");
    O.style.cursor !== s && (O.style.cursor = s);
  }, mt = {
    timer: 0,
    target: null
  }, wn = {
    active: !1,
    depth: 0
  }, Et = {
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
  }, Zn = 9, un = [];
  let ar = 0;
  const No = () => {
    var I, M;
    const i = (I = V == null ? void 0 : V.getBoundingClientRect) == null ? void 0 : I.call(V), s = (M = At == null ? void 0 : At.getBoundingClientRect) == null ? void 0 : M.call(At), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, _ = Math.max(280, Math.floor(l - g * 2)), x = h.fullscreen ? Math.min(1200, _) : _;
    A.videoTransport.shellMaxWidthPx = x;
  }, Po = () => {
    ar || (ar = window.requestAnimationFrame(() => {
      ar = 0, No();
    }));
  }, Fn = (i) => {
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
  }, en = typeof ResizeObserver < "u" ? new ResizeObserver(() => Po()) : null;
  en == null || en.observe(V), At && (en == null || en.observe(At)), un.push(() => {
    var i;
    ar && (window.cancelAnimationFrame(ar), ar = 0), (i = en == null ? void 0 : en.disconnect) == null || i.call(en);
  }), Po();
  const Bi = () => {
    Et.thumbnailJobId += 1, Et.thumbnailSrc = "", A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = Zn;
  }, Sa = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      Bi();
      return;
    }
    const p = QO(f);
    if (p) {
      Et.thumbnailSrc = f, A.videoTransport.thumbnails = p.thumbnails, A.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Et.thumbnailJobId;
    Et.thumbnailSrc = f, A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = Zn;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const _ = await new Promise((ce) => {
      let ye = !1;
      const le = (Me) => {
        ye || (ye = !0, ce(Me));
      };
      g.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), g.addEventListener("canplay", () => le(!0), { once: !0 }), g.addEventListener("error", () => le(!1), { once: !0 }), g.src = f, g.load();
    });
    if (Et.thumbnailJobId !== m) return;
    const x = Number(g.videoWidth || 0), I = Number(g.videoHeight || 0);
    if (!_ || x < 1 || I < 1) {
      Et.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), C = document.createElement("canvas"), D = 46, Y = Math.max(72, Math.round(x / I * D));
    C.width = Y, C.height = D;
    const H = C.getContext("2d");
    if (!H) return;
    const q = [], ie = (ce) => new Promise((ye) => {
      let le = !1;
      const Me = () => {
        le || (le = !0, ye());
      };
      g.addEventListener("seeked", Me, { once: !0 }), g.addEventListener("error", Me, { once: !0 });
      try {
        g.currentTime = ce;
      } catch {
        Me();
      }
    });
    for (let ce = 0; ce < Zn; ce += 1) {
      if (Et.thumbnailJobId !== m) return;
      const ye = ce / (Zn - 1), le = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * ye)) : 0;
      if (await ie(le), Et.thumbnailJobId !== m) return;
      H.clearRect(0, 0, Y, D), H.drawImage(g, 0, 0, Y, D), q.push({
        id: `thumb-${ce}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: le,
        label: Zc(le)
      });
    }
    Et.thumbnailJobId === m && (A.videoTransport.thumbnails = q, A.videoTransport.thumbnailCount = q.length || Zn, eE(f, {
      thumbnails: q,
      thumbnailCount: q.length || Zn,
      duration: M,
      fps: l
    }));
  };
  un.push(() => {
    Bi();
  });
  const Ft = Ob({
    video: we instanceof HTMLVideoElement ? we : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: Gs,
    span: () => {
      if (k) return Qs();
      const i = Math.round(Number(A.videoTransport.duration || 0) * Gs());
      return we.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? g_(i) : Ni(), oe({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      R1() && (Ee.backgroundDirty = !0);
    },
    onChange: () => {
      Ni(), ii(), oe({ cause: "frame_view", localOnly: !0 });
    }
  });
  un.push(() => Ft.dispose());
  const Ao = k && gn instanceof HTMLVideoElement ? Eb({
    video: gn,
    onCapture: () => {
      var l;
      const i = Number(gn.videoWidth || 0), s = Number(gn.videoHeight || 0);
      i < 1 || s < 1 || (Qr.width = i, Qr.height = s, (l = Qr.getContext("2d")) == null || l.drawImage(gn, 0, 0), Qr.__panoFrameIdx += 1, oe({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => oe({ cause: "frame_view", localOnly: !0 })
  }) : null;
  Ao && un.push(() => Ao.dispose());
  const d1 = k ? _b({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => oe({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (we instanceof HTMLVideoElement) {
    const i = () => {
      Pi(), oe({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ni({
        hasAudio: A.videoTransport.hasAudio,
        muted: we.muted,
        volume: Number(we.volume ?? A.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = we.dataset.panoSrc;
      f && (Et.failedSrcs.add(f), Pi(), oe());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      we.addEventListener(f, p), un.push(() => we.removeEventListener(f, p));
  }
  function p1() {
    A.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function zc(i) {
    return sp(i == null ? void 0 : i.dataTransfer);
  }
  function Ui(i) {
    const s = !!i;
    wn.active !== s && (wn.active = s, V.classList.toggle("drop-active", s));
  }
  function ka(i, s = null) {
    const l = Gn();
    h.viewTransition = pA(l, i, performance.now(), { scale: Ci(), end: s }), !h.viewTransition && s && dp(s), sn.state.inertia.active = !1, sn.state.inertia.vx = 0, sn.state.inertia.vy = 0, Tr(), oe({ localOnly: !0 });
  }
  function dp(i) {
    ou(Kf({ ...iu(), moved: i.moved }, i.mode, To())), Ee.backgroundDirty = !0;
  }
  function Ls() {
    h.viewTransition && (h.viewTransition = null, Tr());
  }
  function pp(i, s) {
    ka({ ...Gn(), yaw_deg: i, pitch_deg: s });
  }
  B1();
  function Fr() {
    return t === "stickers" ? Rs() : S.shots;
  }
  function Rs() {
    return P ? S.stickers.filter((i) => i.placement === "sky") : S.stickers;
  }
  function wr(i) {
    return P && St(i);
  }
  function jc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function an(i) {
    return wr(i) ? Bd(i, h.frame) : i;
  }
  function xr(i, s) {
    wr(i) ? Wy(i, h.frame, s) : Object.assign(i, s);
  }
  function xn() {
    const i = S.painting || (S.painting = sa(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function h1(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = S.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? S.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const _ = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !_ || f.has(_) || (f.add(_), l.push(_));
    }
    return l;
  }
  function m1() {
    return h1("paint");
  }
  function Ma(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Na(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function mn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Pa(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Hc() {
    var s;
    let i = -1;
    for (const l of Rs())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of xn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = S.painting) == null ? void 0 : s.raster_objects) ? S.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function hp(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = xn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Hc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function g1(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(l + p, 0, 1)
      }
    ];
  }
  function y1() {
    const i = new Set(m1()), l = xn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: Hc(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), S.painting.groups = l, l;
  }
  function b1(i, s, l) {
    var q;
    const f = (ie) => (Number(ie || 0) % 1 + 1) % 1, p = [];
    for (const ie of l) {
      const ce = ie == null ? void 0 : ie.geometry, ye = (ce == null ? void 0 : ce.geometryKind) === "lasso_fill" ? ce == null ? void 0 : ce.points : (ce == null ? void 0 : ce.processedPoints) || (ce == null ? void 0 : ce.rawPoints) || (ce == null ? void 0 : ce.points) || [];
      Array.isArray(ye) && p.push(...ye);
    }
    if (!p.length) return null;
    const m = f(((q = p[0]) == null ? void 0 : q.u) || 0);
    let g = 0, _ = 0;
    p.forEach((ie) => {
      const ce = f((ie == null ? void 0 : ie.u) || 0);
      g += m + sr(ce, m), _ += Number((ie == null ? void 0 : ie.v) || 0);
    });
    const x = (g / p.length % 1 + 1) % 1;
    let I = 1 / 0, M = -1 / 0, C = 1 / 0, D = -1 / 0;
    p.forEach((ie) => {
      const ce = f((ie == null ? void 0 : ie.u) || 0), ye = sr(ce, x);
      I = Math.min(I, ye), M = Math.max(M, ye);
      const le = Number((ie == null ? void 0 : ie.v) || 0);
      C = Math.min(C, le), D = Math.max(D, le);
    });
    const Y = l.reduce((ie, ce) => {
      const ye = Ti(String((ce == null ? void 0 : ce.toolKind) || "pen")), le = Wn[ye] || Wn[ai], Me = Math.max(1, Number((ce == null ? void 0 : ce.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(ie, Me);
    }, 0), H = Math.max(35e-4, Y / 2048);
    return {
      centerUv: { u: ((x + (I + M) * 0.5) % 1 + 1) % 1, v: Q((C + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - I) * 0.5 + H,
      halfH: (D - C) * 0.5 + H,
      uvPad: H
    };
  }
  function Mi(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = xn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || Sr(f, s);
    return p.frame = b1(f, s, m), p.frame;
  }
  function Co() {
    var f;
    const i = Rs().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = y1().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((f = S.painting) == null ? void 0 : f.raster_objects) ? S.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function Gc(i = !0) {
    var l, f, p, m, g, _;
    const s = Co().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), I = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((_ = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : _.toolKind) || "").trim();
      x && I === "paint" && M !== "eraser" && !s.includes(x) && s.push(x);
    }
    return s;
  }
  function Kc(i = !0) {
    var _, x, I, M, C, D;
    const s = Co();
    if (!i) return s;
    const l = String(((x = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), f = String(((M = (I = h.interaction) == null ? void 0 : I.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((D = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((Y) => Y.type === "strokeGroup" && String(Y.actionGroupId || "") === l))
      return s;
    const m = Tt();
    let g = s.reduce((Y, H) => Math.max(Y, Number((H == null ? void 0 : H.z_index) || 0)), -1) + 1;
    return m && fn(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((Y, H) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((H == null ? void 0 : H.z_index) || 0));
  }
  function v1() {
    return xn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Oo(Ma("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function _1() {
    var i;
    return (Array.isArray((i = S.painting) == null ? void 0 : i.raster_objects) ? S.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Io(Na((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function mp(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function w1() {
    var s, l, f, p;
    let i = null;
    try {
      const m = Gc(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Da()}:${Wc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Wc() {
    var p, m, g, _, x, I, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!mp(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, D = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), Y = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((_ = C == null ? void 0 : C.points) == null ? void 0 : _.length) ?? 0, H = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${D || "paint"}_${s}_live${H}_${Y}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), f = String(((I = i == null ? void 0 : i.item) == null ? void 0 : I.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Vs() {
    return E || !Array.isArray(S.stickers) ? [] : S.stickers;
  }
  function Bc() {
    return [...Array.isArray(S.shots) ? S.shots : [], ...Vs()];
  }
  function jn(i) {
    return !!i && Array.isArray(S.shots) && S.shots.includes(i);
  }
  function St(i) {
    return !!i && Array.isArray(S.stickers) && S.stickers.includes(i);
  }
  function Hn() {
    var i;
    return Array.isArray((i = S.painting) == null ? void 0 : i.raster_objects) ? S.painting.raster_objects : [];
  }
  function Io(i) {
    const s = mn(i);
    if (!s) return null;
    const l = Hn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Na(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function Sn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = mn(i.rasterObjectId || i.id || "");
    return !!s && !!Io(Na(s));
  }
  function Oo(i) {
    const s = Pa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = xn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Ma("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function fn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Oo(Ma(l, s));
  }
  function Sr(i, s = null) {
    const l = Pa(i, s), f = String(l.actionGroupId || "").trim();
    return f ? jo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function x1(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ta()}`;
    if (h.mode === "frame") {
      const m = He(), g = String((m == null ? void 0 : m.id) || ""), _ = m ? dn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function $s(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Q(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function sr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Uc(i, s = null, l = null) {
    var I;
    const f = Pa(i, s), p = Array.isArray(l) ? l : Sr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const C = (M == null ? void 0 : M.geometry) || null, D = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(D) && m.push(...D);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((I = m[0]) == null ? void 0 : I.u) || 0);
    let _ = 0, x = 0;
    return m.forEach((M) => {
      _ += g + sr(Number((M == null ? void 0 : M.u) || 0), g), x += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: Q(x / m.length, 0, 1)
    };
  }
  function zs(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), _ = Number(i.v || 0) - m, x = Number(f || 0) * zr, I = Math.cos(x), M = Math.sin(x), C = Math.max(0.02, Number(l || 1)), D = (g * I - _ * M) * C, Y = (g * M + _ * I) * C;
    return {
      ...i,
      u: ((p + D) % 1 + 1) % 1,
      v: Q(m + Y, 0, 1)
    };
  }
  function gp(i, s, l, f = null, p = null, m = null) {
    const g = Pa(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const x = jo(g.layerKind), I = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let M = !1;
    if (x.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== _) return;
      const D = (I == null ? void 0 : I.get(String((C == null ? void 0 : C.id) || ""))) || C, Y = C == null ? void 0 : C.geometry, H = D == null ? void 0 : D.geometry;
      !Y || !H || (Array.isArray(H.points) && (Y.points = H.points.map((q) => $s(q, s, l)), M = !0), Array.isArray(H.rawPoints) && (Y.rawPoints = H.rawPoints.map((q) => $s(q, s, l)), M = !0), Array.isArray(H.processedPoints) && (Y.processedPoints = H.processedPoints.map((q) => $s(q, s, l)), M = !0));
    }), M && m) {
      const C = xn().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === _);
      C && (C.frame = null);
    }
    return M;
  }
  function yp(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = Pa(i, p), _ = String(g.actionGroupId || "").trim();
    if (!_) return !1;
    const x = jo(g.layerKind), I = Array.isArray(f) ? f : Sr(_, g.layerKind), M = Array.isArray(I) ? new Map(I.map((Y) => [String((Y == null ? void 0 : Y.id) || ""), Y])) : null, C = (m == null ? void 0 : m.centerUv) ?? Uc(_, g.layerKind, I);
    let D = !1;
    if (x.forEach((Y) => {
      if (String((Y == null ? void 0 : Y.actionGroupId) || "").trim() !== _) return;
      const H = (M == null ? void 0 : M.get(String((Y == null ? void 0 : Y.id) || ""))) || Y, q = Y == null ? void 0 : Y.geometry, ie = H == null ? void 0 : H.geometry;
      !q || !ie || (Array.isArray(ie.points) && (q.points = ie.points.map((ce) => zs(ce, C, s, l)), D = !0), Array.isArray(ie.rawPoints) && (q.rawPoints = ie.rawPoints.map((ce) => zs(ce, C, s, l)), D = !0), Array.isArray(ie.processedPoints) && (q.processedPoints = ie.processedPoints.map((ce) => zs(ce, C, s, l)), D = !0));
    }), D && m) {
      const Y = xn().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === _);
      Y && (Y.frame = null);
    }
    return D;
  }
  function bp(i, s, l, f = null) {
    const p = mn(i);
    if (!p) return !1;
    const m = Hn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, _ = (g == null ? void 0 : g.transform) || {}, x = Number(_.du || 0) + Number(s || 0), I = Q(Number(_.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = I, !0;
  }
  function S1(i, s = 1, l = null) {
    const f = mn(i);
    if (!f) return !1;
    const p = Hn().find((I) => String((I == null ? void 0 : I.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, g = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(g.scale || 1)), x = Q(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = x, !0;
  }
  function Tt() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Oo(i);
    if (s) return s;
    const l = Io(i);
    return l || (t === "cutout" ? Bc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : Fr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function lr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? Tt() : Oo(p) || Io(p) || (t === "cutout" ? Bc().find((g) => String((g == null ? void 0 : g.id) || "") === p) : Fr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function Aa(i = null) {
    const s = Array.isArray(i) ? i : lr();
    if (!s || s.length < 2) return null;
    const l = s.map((I) => tn(I)).filter((I) => (I == null ? void 0 : I.visible) && Array.isArray(I.corners) && I.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), _ = Math.min(...p), x = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (_ + x) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x: g, y: _ },
        { x: g, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: _, a: { x: m, y: _ }, b: { x: g, y: _ } },
        { edge: "right", x: g, y: (_ + x) * 0.5, a: { x: g, y: _ }, b: { x: g, y: x } },
        { edge: "bottom", x: (m + g) * 0.5, y: x, a: { x: g, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (_ + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: _ },
      rotateHandle: { x: (m + g) * 0.5, y: _ - 30 }
    };
  }
  function vp(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function js() {
    const i = Tt();
    return i ? fn(i) || Sn(i) ? "stroke" : jn(i) ? "frame" : "image" : null;
  }
  function bn(i) {
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = xn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (Sn(i)) {
      const s = mn(i.rasterObjectId || i.id || ""), l = Hn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Yc(i = null) {
    const s = Array.isArray(i) ? i : lr();
    return s.length > 0 && s.every((l) => bn(l));
  }
  function k1(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = xn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (Sn(i)) {
      const f = mn(i.rasterObjectId || i.id || ""), p = Hn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function M1() {
    if (r) return;
    const i = lr();
    if (!i.length) return;
    const s = !Yc(i);
    let l = !1;
    i.forEach((f) => {
      k1(f, s) && (l = !0);
    }), l && (tt(), st(), Ke(), Ve(), oe());
  }
  function cr(i) {
    Fo(), Ye.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && St(i) ? S.active.selected_sticker_id = i.id || null : S.active.selected_sticker_id = null, i && jn(i) ? S.active.selected_shot_id = i.id || null : i ? jn(i) || (S.active.selected_shot_id = S.active.selected_shot_id) : S.active.selected_shot_id = null;
  }
  function N1(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const _ = String((g == null ? void 0 : g.id) || "").trim();
      !_ || f.has(_) || (f.add(_), l.push(_));
    }), h.selectedIds = l, Fo(), Ye.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Tt();
    S.active.selected_sticker_id = m && St(m) && m.id || null, m && jn(m) ? S.active.selected_shot_id = m.id || null : l.length || (S.active.selected_shot_id = null);
  }
  function _p() {
    const i = (Array.isArray(S.shots) ? S.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = Vs().map((l, f) => {
      var m, g;
      const p = Bt(l) ? String(l.id || ff) : String(((g = (m = S.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function P1(i) {
    return i === "frame" ? Ne.camera : i === "stroke" ? Ne.paintbrush_vertical_tool : Ne.image;
  }
  function Xc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: P1(i.kind)
    };
  }
  function Hs() {
    return Hc();
  }
  function Bt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === ff || String(i.source_kind || "") === EO;
  }
  function Eo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function A1(i) {
    return Bt(i) && Eo(i) ? tb : 1;
  }
  function C1() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function I1() {
    return String(C1() || "") === "lasso_fill";
  }
  function O1() {
    if (r) return;
    const i = Tt();
    !i || !Bt(i) || (i.visible = Eo(i), $t(), tt(), st(), Ve(), Ke(), oe());
  }
  function E1() {
    if (r || t !== "stickers") return;
    const i = Tt();
    if (!i || !Bt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Qc(wl, () => {
      oe();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Ai(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), tt(), st(), Ve(), Ke(), oe();
  }
  function F1(i) {
    if (!i || !Bt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Qc(wl, () => {
      oe();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Ai(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function T1() {
    const i = Tt();
    if (!i || !Bt(i)) return !1;
    const s = F1(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function ei(i) {
    return An.uiList(e, i);
  }
  function qc(i) {
    return An.uiValue(e, i);
  }
  function wp() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return rc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function D1() {
    const { metaKey: i } = wp(), s = qc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Jc(i) {
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
  function Zc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function Gs() {
    return k ? S.timeline.fps : Et.metaFps || 1e3;
  }
  function Ni(i = {}) {
    const s = Number(i.duration ?? A.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? A.videoTransport.fps ?? 24)), f = Ft.frame / Gs(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!A.videoTransport.ready, m = Ft.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!A.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(we instanceof HTMLVideoElement ? we.muted : A.videoTransport.muted), x = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : we instanceof HTMLVideoElement ? we.volume : A.videoTransport.volume
    ), I = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Fn(we), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!A.videoTransport.loop;
    Object.assign(A.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: Zc(f),
      durationLabel: Zc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? A.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: I,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : A.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? A.videoTransport.thumbnailCount ?? Zn))
    });
  }
  function xp() {
    return !!(we instanceof HTMLVideoElement && !k && we.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Sp() {
    if (!(we instanceof HTMLVideoElement) || !A.videoTransport.hasAudio) return;
    const i = !we.muted;
    we.muted = i, !i && Number(we.volume || 0) <= 0 && (we.volume = Math.max(0.01, Number(A.videoTransport.volume || 1))), Ni({
      hasAudio: A.videoTransport.hasAudio,
      muted: we.muted,
      volume: Number(we.volume ?? A.videoTransport.volume ?? 1)
    });
  }
  function L1() {
    Ni({
      visible: xp()
    });
  }
  function R1() {
    if (!(we instanceof HTMLVideoElement) || Number(we.videoWidth || 0) < 1 || Number(we.videoHeight || 0) < 1) return !1;
    const i = Number(we.videoWidth || 0), s = Number(we.videoHeight || 0);
    (on.width !== i || on.height !== s) && (on.width = i, on.height = s);
    const l = on.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(we, 0, 0, i, s), on.__panoFrameIdx = Number(on.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function kp() {
    return !Ft.showsVideo && Number(on.width || 0) > 0 && Number(on.height || 0) > 0 && Number(on.__panoFrameIdx || 0) > 0 ? on : we instanceof HTMLVideoElement && Number(we.videoWidth || 0) > 0 && Number(we.videoHeight || 0) > 0 && Number(we.readyState || 0) >= 2 ? we : null;
  }
  function Mp() {
    on.__panoFrameIdx = 0, Ee.backgroundDirty = !0;
  }
  function Pi() {
    if (!(we instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = wp(), s = vn(e, "background") && ei(i)[0] || null, l = Qa(s), f = [l, An.linkedVideoFile(e, zp())].filter(Boolean), p = f.find((C) => !Et.failedSrcs.has(C)) || "";
    Et.videoFailed = !p && f.length > 0;
    const m = p && p === l ? D1() : null;
    Et.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? S.timeline.fps : 24))), _ = we.dataset.panoSrc === p && Number.isFinite(we.duration) ? we.duration : 0, x = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : _)), I = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(x * g))), M = !!(m != null && m.has_audio) || Fn(we);
    return p && we.dataset.panoSrc !== p ? (we.pause(), Mp(), we.dataset.panoSrc = p, we.loop = !k && !!A.videoTransport.loop, we.muted = !!A.videoTransport.muted, we.volume = Math.max(0, Math.min(1, Number(A.videoTransport.volume ?? 1))), we.src = p, we.load(), Ft.setSource(!0), k || Ft.seek(0)) : !p && we.getAttribute("src") && (we.pause(), we.removeAttribute("src"), delete we.dataset.panoSrc, we.load(), Mp(), Bi(), Ft.setSource(!1)), k || (we.loop = !!A.videoTransport.loop), p && !k && Et.thumbnailSrc !== p && !Et.thumbnailFailedSrcs.has(p) && Sa(p, x, g), p || Bi(), Ni({
      ready: !!p,
      visible: !!p && xp(),
      duration: x,
      frameCount: I,
      fps: g,
      hasAudio: M,
      loop: !!we.loop,
      muted: !!we.muted,
      volume: Number(we.volume ?? A.videoTransport.volume ?? 1),
      thumbnailCount: A.videoTransport.thumbnailCount
    }), p || null;
  }
  function Np(i, s = null) {
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
  function Qc(i, s = null) {
    return mf(e, i, Qt, s || (() => oe()));
  }
  function eu(i = null) {
    return vn(e, "external-sticker") ? Qc(wl, i) : null;
  }
  function Pp() {
    if (!vn(e, "external-sticker")) return null;
    const i = ei(DO)[0];
    if (!i || typeof i != "object") return null;
    const s = ei(TO).map(Qa).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = Qa(ei(FO)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function V1() {
    const i = S.stickers.find(Bt), s = i ? Pp() : null, l = s ? yb(i.clip, h.frame, S.timeline.fps, s.meta) : null;
    Ao.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: Ft.advancing, fps: S.timeline.fps });
    const f = i ? cu(i) : null, p = s != null && s.frames ? d1.picture(s.frames, l, s.meta, f) : Ao.picture(Qr, f);
    return p ? { media: p, revision: Jc(p), source: vb(s, f) } : null;
  }
  function Ai(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = Q(Number(i || 30), 0.1, 179) * zr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return Q(g * fo, 0.1, 179);
  }
  function $1(i) {
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
      const g = Number(m.yaw_deg), _ = Number(m.pitch_deg), x = Number(m.roll_deg), I = Number(m.hFOV_deg);
      if (![g, _, x, I].every((Y) => Number.isFinite(Y))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const C = {
        yaw_deg: M,
        pitch_deg: Q(_, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: Q(I, 0.1, 179)
      }, D = Number(l.source_aspect);
      return Number.isFinite(D) && D > 0 && (C.source_aspect = D), C;
    } catch {
      return null;
    }
  }
  function Ap(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = vo(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Yt(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function z1(i) {
    var _;
    if (!i || typeof i != "object") return Ap(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const x = Q(p, 0.1, 179) * zr, I = Q(m, 0.1, 179) * zr, M = Math.tan(I * 0.5);
      if (Math.abs(M) > 1e-6) {
        const C = Math.tan(x * 0.5) / M;
        Number.isFinite(C) && C > 0 && (g = C);
      }
    }
    if (i != null && i.asset_id && ((_ = S == null ? void 0 : S.assets) != null && _[i.asset_id])) {
      const x = S.assets[i.asset_id], I = Number((x == null ? void 0 : x.w) || 0), M = Number((x == null ? void 0 : x.h) || 0);
      I > 0 && M > 0 && (g = I / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Yt(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function j1(i) {
    return An.linkedValue(e, i);
  }
  function H1(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : $1(s);
    if (f) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), _ = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Ai(f.hFOV_deg, g, _),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ai(30, p, m),
      rot_deg: 0
    };
  }
  function G1() {
    const i = eu(() => {
      gi(e, "image-loaded");
    }), s = vn(e, "external-sticker") ? Np(qc("pano_sticker_input_pose"), null) : null;
    return Cb(S, Ab(e, { pose: s, image: i }));
  }
  function K1() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((x) => String((x == null ? void 0 : x.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, l = eu(() => {
      gi(e, "image-loaded");
    }), f = Np(qc("pano_sticker_input_pose"), null), p = j1("sticker_state"), m = An.externalStateHash(e, p), g = s == null ? null : H1(f, p, l);
    return Pb(S, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function Cp(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? G1() : K1();
    if (s.changed) {
      const l = S.stickers.find(Bt);
      S.stickers = s.state.stickers, S.active = s.state.active, l && h.selectedId === l.id && !S.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), st(), Ve(), Ke();
    }
    oe();
  }
  function Ca(i = {}) {
    const l = i.preservePanelValues !== !1 ? an(Tt()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: fi(l)
    }), h.selectedId = null, h.selectedIds = [], Fo(), h.cutoutAspectOpen = !1, S.active.selected_sticker_id = null, S.active.selected_shot_id = null;
  }
  function Ia() {
    return !P || !h.worldSelectedId ? null : S.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function tu(i) {
    cr(null), h.worldSelectedId = i, Ee.backgroundDirty = !0;
  }
  function Fo() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, Ee.backgroundDirty = !0);
  }
  function Ks(i) {
    return !!i && !r && !i.locked;
  }
  function W1() {
    if (t !== "cutout") return;
    const i = He();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function nu() {
    if (t !== "cutout") return;
    const i = He();
    Za(A.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ne.camera : Ne.plus_circle
    });
  }
  function Tr() {
    const i = vA({
      spaceView: Yi(),
      spaceMode: Hl(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: t === "cutout" && h.mode === "frame",
      showGrid: h.showGrid
    });
    A.space && Object.assign(A.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) Za(A.floatingButtons, "action", s, l);
  }
  function ti() {
    var l;
    const i = !!He();
    h.mode === "frame" && !i && (h.mode = "pano"), h.outputPreviewRect = null, A.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && t !== "cutout"), f.disabled = f.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && h.mode === "frame" ? He() : null;
    A.frameRail.visible = !!s, A.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.visible = !!s && !r && s.locked !== !0, A.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), A.frameRollKnob.displayValue = Uo(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", A.frameRollKnob.armed = !!s && h.altModifier === !0, A.frameRail.rollKnob = A.frameRollKnob, A.frameRail.aspectLabel = s ? fi(s) : "", A.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((f) => ({
      value: f,
      label: f,
      active: !!s && String(fi(s)) === f
    })), s || (A.frameRail.aspectOpen = !1), A.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!He(), t === "cutout" && A.cameraPreview && (A.cameraPreview.visible = h.mode !== "frame", A.cameraPreview.expanded = !!h.outputPreviewExpanded, A.cameraPreview.settled = A.cameraPreview.settled === !0 && Ee.pendingStableLayoutFrames <= 0 && Ee.hasPresentedFrame), Tr(), Ih() ? gt(h.pointerPos) : bt(h.mode === "pano" ? "grab" : "default");
  }
  function B1() {
    const s = jp({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Ip() {
    return nb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, O.width, O.height);
  }
  function Op() {
    return !k || !vn(e, "scene") ? null : fg(ei("pano_scene_files"), ei("pano_scene_meta"), Qa);
  }
  function U1() {
    return !k || !vn(e, "external-sticker") ? null : fg(ei("pano_sticker_files"), ei("pano_sticker_meta"), Qa);
  }
  function Yi() {
    return h.mode === "pano" && Ws();
  }
  function Ws() {
    return k && DM({ sceneLinked: P && !!cb(e).scene, files: Op(), stickers: S.stickers });
  }
  function ur() {
    return h.spaceMode === "6dof" && Yi();
  }
  function ru() {
    var i, s, l;
    return I2((l = (s = (i = Cr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, Wb));
  }
  function iu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function ou(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function Y1(i) {
    var l;
    const s = mA(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        ka({ ...Gn(), position: To(), distance: ((l = Dr()) == null ? void 0 : l.radius) || Kr }, { mode: i, moved: !1 });
        return;
      }
      Ls(), ou(Kf({ ...iu(), position: Gn().position }, i, To())), Ee.backgroundDirty = !0, Tr(), oe({ localOnly: !0 });
    }
  }
  function Gn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Dr()) == null ? void 0 : l.radius) || Kr, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return EM(h.spaceMode, s, To());
  }
  function To() {
    return E ? Xi().position : [0, 0, 0];
  }
  function Xi() {
    return jd(S.camera, h.frame);
  }
  function Dr() {
    var s;
    const i = Qn();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function Ep(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, Ee.backgroundDirty = !0, oe({ localOnly: !0 });
  }
  function Ci() {
    var i;
    return ((i = Dr()) == null ? void 0 : i.radius) || Kr;
  }
  function X1() {
    var _;
    const i = Qn().space, s = Oe.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((x) => x.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: sc(s, h.frame).stickers[f],
      plane: i.stickers.find((x) => x.id === l) ?? null,
      item: ((_ = i.sticker) == null ? void 0 : _.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: z.sceneBox(i.sticker.url) } : null
    }, m = qi() ? Bp() : jM(Dr(), p);
    if (!m) return;
    const g = Gn();
    h.viewDistance = g.distance, h.viewMoved = !0, ka(ug(g, m, O.width, O.height));
  }
  function au(i) {
    return z.pick(Ka(), i.x, i.y, O.width, O.height);
  }
  function Fp(i, s) {
    var l;
    return Qu(i, s, h.viewMoved ? null : (l = Dr()) == null ? void 0 : l.center, Ci());
  }
  function Tp() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function q1(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: z.contentKey(), view: Tp() };
    if (!ag(et, f)) {
      const m = au(i);
      et = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = Gn();
    Ep(cg(p, Fp(p, et.hit), s, Ci())), et.view = Tp(), et.wheelTime = l;
  }
  function Dp(i, s, l) {
    const f = Fp(Gn(), au(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: la(Gn(), f) }, gt(s), O.setPointerCapture(l);
  }
  function su() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${O.width}|${O.height}`;
    return ge.key !== i && (ge = { key: i, projection: rb(Ip(), O.width, O.height) }), ge.projection;
  }
  function Oa(i) {
    const s = su().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function lu(i, s) {
    return su().ray(i, s);
  }
  function Ii() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const _ = s, x = _ * l;
      return { x: (i - x) * 0.5, y: 0, w: x, h: _ };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function cu(i) {
    var g;
    if (i && typeof i == "object" && (Bt(i) || i.external === !0))
      return eu(() => {
        gi(e, "image-loaded");
      });
    const s = k ? Ea(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Qt.get(s);
    if (l) return l;
    const f = k ? By(i.source) : (g = S.assets) == null ? void 0 : g[s], p = YO(f);
    if (!p) return null;
    const m = new Image();
    return a1(m, p), m.onload = () => {
      s1(m, p), oe();
    }, m.onerror = () => {
      l1(m, p), oe();
    }, m.src = p, Qt.set(s, m), m;
  }
  function Ea(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Lp(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = rn.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, rn.set(l, p), p;
  }
  function J1(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = yn.get(s);
    if (l) return l.ready ? l : null;
    const f = Lp(i, () => {
      const M = yn.get(s);
      M && (M.ready = !1), oe({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const _ = g.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, p, m), _.drawImage(f, 0, 0, p, m);
    const x = _.getImageData(0, 0, p, m).data, I = { canvas: g, width: p, height: m, alpha: x, ready: !0 };
    return yn.set(s, I), I;
  }
  function Z1(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), _ = Number(i.v || 0) - m, x = Math.max(0.02, Number(l || 1)), I = Number(f || 0) * zr, M = Math.cos(I), C = Math.sin(I), D = g / x, Y = _ / x, H = D * M + Y * C, q = -D * C + Y * M;
    return {
      ...i,
      u: ((p + H) % 1 + 1) % 1,
      v: m + q
    };
  }
  function Q1(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = Z1(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), _ = Number(l.u1 || 0) - Number(l.u0 || 0), x = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(_ > 1e-6) || !(x > 1e-6)) return null;
    const I = sr(Number(g.u || 0), Number(l.u0 || 0)) / _, M = (Number(g.v || 0) - Number(l.v0 || 0)) / x;
    if (I < 0 || I > 1 || M < 0 || M > 1) return 0;
    const C = J1(i);
    if (!C) return null;
    const D = Q(Math.floor(I * C.width), 0, C.width - 1), Y = Q(Math.floor(M * C.height), 0, C.height - 1);
    return Number(C.alpha[(Y * C.width + D) * 4 + 3] || 0);
  }
  function Rp(i, s, l, f = null) {
    if (!(s != null && s.visible) || !li(l, s.corners)) return !1;
    const p = f || Mr(l, performance.now()), m = Q1(i, p);
    return m === null ? !0 : m > 8;
  }
  function ev() {
    var f, p, m, g, _, x, I, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, Gc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : _.width) || 2048)), l = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((M = (I = i == null ? void 0 : i.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function tv() {
    var Y, H, q;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = er(), f = `${Wc()}:${l.width}:${l.height}`;
    if (((Y = h._activePaintEraserPreviewInfo) == null ? void 0 : Y.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = Nn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ie = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = bu(ie, p.targetSpace, !0);
    }
    const g = Fa(l.width, l.height, { readback: !0 });
    if (!rh(g, p, { w: l.width, h: l.height })) return null;
    const _ = ((q = (H = g.ctx) == null ? void 0 : H.getImageData(0, 0, l.width, l.height)) == null ? void 0 : q.data) || null;
    if (!_) return null;
    let x = l.width, I = l.height, M = -1, C = -1;
    for (let ie = 0; ie < l.height; ie += 1)
      for (let ce = 0; ce < l.width; ce += 1)
        _[(ie * l.width + ce) * 4 + 3] <= 8 || (ce < x && (x = ce), ie < I && (I = ie), ce > M && (M = ce), ie > C && (C = ie));
    if (M < x || C < I)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const D = {
      surface: g,
      bounds: { minX: x, minY: I, maxX: M, maxY: C },
      key: `${f}:${x}:${I}:${M}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: D }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function Do() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function nv(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, _ = Number(m.u0 || 0) + Number(g.du || 0), x = Number(m.u1 || 0) + Number(g.du || 0), I = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(Q(I, 0, 1) * l),
        maxY: Math.ceil(Q(M, 0, 1) * l),
        wraps: x - _ >= 1 || _ < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Sr(i.actionGroupId, "paint"), g = Mi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const _ = g.centerUv.u - g.halfW, x = g.centerUv.u + g.halfW, I = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(Q(I, 0, 1) * l),
        maxY: Math.ceil(Q(M, 0, 1) * l),
        wraps: x - _ >= 1 || _ < 0 || x > 1
      };
    }
    return null;
  }
  function rv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((_) => !(g.maxX < _.minX || _.maxX < g.minX || g.maxY < _.minY || _.maxY < g.minY)));
  }
  function iv(i, s, l) {
    var Me, Be, Xe, ot, ve, ae, he;
    if (!i || !s || !((Me = l == null ? void 0 : l.surface) != null && Me.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = nv(s, f, p);
    if (m && !rv(m, l.bounds, f)) return i;
    const g = String(((Be = s.item) == null ? void 0 : Be.id) || s.id || ""), _ = ((Xe = s.item) == null ? void 0 : Xe.transform) || {}, x = `${l.key}:${g}:${f}:${p}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, I = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (I.has(x)) return I.get(x);
    const M = Q(Math.floor(Number(((ot = l.bounds) == null ? void 0 : ot.minX) || 0)), 0, Math.max(0, f - 1)), C = Q(Math.floor(Number(((ve = l.bounds) == null ? void 0 : ve.minY) || 0)), 0, Math.max(0, p - 1)), D = Q(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), M, Math.max(0, f - 1)), Y = Q(Math.ceil(Number(((he = l.bounds) == null ? void 0 : he.maxY) || 0)), C, Math.max(0, p - 1)), H = Math.max(1, D - M + 1), q = Math.max(1, Y - C + 1), ie = Fa(f, p, { readback: !0 });
    ie.ctx.clearRect(0, 0, f, p), ie.ctx.drawImage(i, 0, 0);
    const ce = ie.ctx.getImageData(M, C, H, q);
    ie.ctx.save(), ie.ctx.globalCompositeOperation = "destination-out", ie.ctx.drawImage(l.surface.canvas, 0, 0), ie.ctx.restore();
    const ye = ie.ctx.getImageData(M, C, H, q);
    let le = !1;
    for (let Te = 0; Te < H * q; Te += 1) {
      const xe = ce.data[Te * 4 + 3], We = ye.data[Te * 4 + 3];
      if (xe > We) {
        le = !0;
        break;
      }
    }
    return le ? (I.size > 64 && I.clear(), I.set(x, ie.canvas), ie.canvas) : (I.set(x, i), i);
  }
  function Vp(i, s = null) {
    const l = mn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = Lp(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = ev(), _ = (i == null ? void 0 : i.transform) || {}, x = [
      l,
      m,
      g,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      Ta()
    ].join(":"), I = Er.get(x);
    if (I) return I;
    Er.size > 64 && Er.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const C = M.getContext("2d");
    if (!C) return null;
    const D = Number(f.u0 || 0) * m, Y = Number(f.v0 || 0) * g, H = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), q = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), ie = D + H * 0.5 + Number(_.du || 0) * m, ce = Y + q * 0.5 + Number(_.dv || 0) * g, ye = Number(_.rot_deg || 0) * zr, le = Math.max(0.01, Number(_.scale || 1));
    for (const Me of [-m, 0, m])
      C.save(), C.translate(ie + Me, ce), C.rotate(ye), C.scale(le, le), C.drawImage(p, -H * 0.5, -q * 0.5, H, q), C.restore();
    return Er.set(x, M), M;
  }
  async function uu(i, s) {
    const l = await new Promise((_) => i.toBlob(_, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Xt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let Bs = null, Us = !1;
  function ov() {
    if (E) return !1;
    const i = l0(S.painting), { width: s, height: l } = La();
    return fM(S.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function $p() {
    const i = String(e.id ?? "0"), s = xl.get(i);
    if (Us && s) return s;
    const l = (async () => {
      var m, g, _, x, I, M, C, D, Y, H, q, ie;
      const f = Da(), p = l0(S.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        S.painting_layer !== null && (S.painting_layer = null, Bs = f, Dn());
        return;
      }
      if (Bs !== f && !Us) {
        Us = !0;
        try {
          Zs();
          const ce = Gc(!1), ye = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ce)) || null, le = ((_ = ye == null ? void 0 : ye.displayPaint) == null ? void 0 : _.canvas) || null, Me = ((x = ye == null ? void 0 : ye.committedMask) == null ? void 0 : x.canvas) || null, Be = Math.max(1, Number(((I = ye == null ? void 0 : ye.descriptor) == null ? void 0 : I.width) || (le == null ? void 0 : le.width) || (Me == null ? void 0 : Me.width) || 2048)), Xe = Math.max(1, Number(((M = ye == null ? void 0 : ye.descriptor) == null ? void 0 : M.height) || (le == null ? void 0 : le.height) || (Me == null ? void 0 : Me.height) || 1024));
          (!le && p.totalPaintCount > 0 || !Me && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Be || Number(((D = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== Xe) && (h._paintLayerSyncBlankSurface = Fa(Be, Xe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Be, Xe));
          const ot = le || p.totalPaintCount > 0 && ((Y = h._paintLayerSyncBlankSurface) == null ? void 0 : Y.canvas) || null, ve = Me || p.totalMaskCount > 0 && ((H = h._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null;
          if (!ot && !ve) return;
          let ae = null, he = null;
          const Te = [];
          if (p.totalPaintCount > 0) {
            ae = await uu(ot, `pano_paint_${i}.png`);
            for (const xe of ce) {
              const We = String(xe || "").trim();
              if (!We) continue;
              const Ge = ((ie = (q = h.paintEngine) == null ? void 0 : q.getGroupDisplayCanvas) == null ? void 0 : ie.call(q, We)) || null;
              if (!Ge) continue;
              const ze = We.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await uu(Ge, `pano_group_${i}_${ze}.png`);
              qe && Te.push({
                id: We,
                actionGroupId: We,
                image: qe
              });
            }
          }
          p.totalMaskCount > 0 && (he = await uu(ve, `pano_mask_${i}.png`)), f === Da() && (S.painting_layer = {
            paint: ae,
            mask: he,
            groups: Te,
            revision: f
          }, Bs = f, Dn());
        } catch (ce) {
          throw ce;
        } finally {
          Us = !1;
        }
      }
    })();
    return xl.set(i, l), l.finally(() => {
      xl.get(i) === l && xl.delete(i);
    }), l;
  }
  function fu() {
    if (t === "cutout" && !E) {
      const p = kp();
      if (p) return p;
      const m = gf(
        e,
        ["erp_image", "bg_erp"],
        () => oe(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !dd(m) ? m : mf(e, "pano_input_images", Qt, () => oe()) || m || null;
    }
    const i = kp();
    if (i) return i;
    const s = vn(e, "background") ? mf(e, "pano_input_images", Qt, () => oe()) : null;
    if (s && !dd(s)) return s;
    if (we instanceof HTMLVideoElement && we.dataset.panoSrc) return we;
    const l = zp();
    return gf(e, l, () => oe(), `background:${l.join("|")}`) || s || null;
  }
  function av() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function zp() {
    if (t === "cutout") return E ? av() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function du(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function sv() {
    if (z.failed) return { status: hr, detail: "renderer" };
    if (!z.ready) return { status: Pr, detail: "boot" };
    let i = ba;
    const s = [];
    if (h.showPanorama) {
      const l = fu();
      i = Et.videoFailed ? hr : fd(l, du);
    }
    if (h.showObjects)
      for (const l of Rs()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const f = cu(l);
        s.push(fd(f, du));
      }
    return AO({
      presented: Ee.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function Lo() {
    const i = new Set(
      (S.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(S.assets || {}).forEach((s) => {
      i.has(s) || (delete S.assets[s], Qt.delete(s));
    });
  }
  function pu(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Q(i.y, -1, 1))
    };
  }
  function hu(i, s = null) {
    const { lon: l, lat: f } = pu(i), p = Ii();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function Ys(i) {
    const s = an(i), l = _a(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(Q(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * zr), p = Math.tan(Q(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * zr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Oi(i, s, l) {
    return nE(a0(a0(i.centerDir, s0(i.right, s)), s0(i.up, l)));
  }
  function jp(i) {
    const s = Ys(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Oi(s, f * s.tanX, p * s.tanY));
  }
  function Hp(i, s, l) {
    const f = Ys(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Oi(f, p, m);
  }
  function Gp(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Q((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function lv(i) {
    var x, I, M, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), p = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((D) => $s(zs(D, l, f, p), m, g));
  }
  function cv(i) {
    const s = mn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ta()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = He(), g = m ? dn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function uv(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = jn(i) ? "frame" : St(i) ? "sticker" : "item", f = an(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      fi(f),
      wr(i) && Vi(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = He(), g = m ? dn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Kp() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function fv() {
    return Kp() ? `${Qp()}:mask_display` : "";
  }
  function Wp(i) {
    if (!h.showMask) return i;
    const s = Kp();
    if (!s) return i;
    const l = fv(), f = i.reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), p = (Array.isArray(S.stickers) ? S.stickers : []).reduce((g, _) => Math.max(g, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function dv() {
    var f, p;
    const i = Kc(!0), s = tv(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const _ = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!_) continue;
        l.push({
          id: `paint_group:${g}`,
          source: _,
          revision: `${Qp()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, _ = mn((g == null ? void 0 : g.id) || m.id || "");
        if (!_) continue;
        const x = Vp(g, () => oe());
        if (!x) continue;
        const I = iv(x, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${_}`,
          source: I,
          revision: [
            Da(),
            (s == null ? void 0 : s.key) || "",
            _,
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
    return Wp(l);
  }
  function pv() {
    return (h.showObjects ? dv() : Wp([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Qn() {
    return Re || (Re = hv()), Re;
  }
  function hv() {
    const i = fu(), s = pv(), l = { ...S.assets };
    for (const H of k ? [] : S.stickers) {
      const q = String((H == null ? void 0 : H.asset_id) || "");
      q && !l[q] && Qt.has(q) && (l[q] = { type: "comfy_image", filename: q });
    }
    const f = k ? S.stickers.map((H) => jc(H) ? { ...H, source: { kind: "file", filename: Ea(H) } } : H) : S.stickers, p = JSON.stringify([f, Object.keys(l), S.scene]);
    Oe.key !== p && (Oe = { key: p, sceneState: vi({ ...S, stickers: f, assets: l, painting: null }) });
    const m = Ao ? V1() : null, g = (H) => {
      if (Ao && Bt(H)) return m;
      const q = cu(H);
      return q ? { media: q, revision: Jc(q) } : null;
    }, _ = h.showObjects ? ib(Oe.sceneState, h.frame, S.stickers, { media: g, paintLayers: s }) : s.map((H) => ({ kind: "erp", ...H })), x = i && (i === we || i === on) ? we.dataset.panoSrc : i, I = h.showPanorama && du(i) ? { media: i, revision: Jc(i), coverage: Xn(S.coverage), source: x } : null, M = Ws(), C = FM(iu(), M, To());
    C.mode !== h.spaceMode && Ls(), ou(C);
    const D = M ? mv(Oe.sceneState, g) : null, Y = Yi() ? { ...D, ...gv(D) } : null;
    return { background: I, layers: _, space: Y, content: D };
  }
  function mv(i, s) {
    const l = sc(i, h.frame), f = Op(), p = Qy(f, l.scene), m = p != null && p.url ? z.sceneBox(p.url) : null, g = m && Uf(p.kind, m), _ = U1(), x = h.showObjects ? LM(_, i, l) : null, I = x != null && x.url ? z.sceneBox(x.url) : null, M = I ? [{ box: Uf(x.kind, I), value: x.value }] : [], C = h.showObjects ? iN(i, h.frame, S.stickers, { media: s }) : [], D = Xf($M(l, g, C, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: RM(_, i),
      sticker: x,
      stickers: C,
      sphere: D
    };
  }
  function gv(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Kr;
    return {
      gizmo: E ? _v() : yv(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? ZM(s) : null,
      lines: E ? vv(s) : []
    };
  }
  function yv(i) {
    const s = Ia(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !h.showObjects || !Ks(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: Wf(l) };
  }
  function mu(i) {
    return i * 0.2;
  }
  function Bp() {
    return { center: Xi().position, radius: mu(Ci()) };
  }
  function bv(i, s) {
    const { yaw_deg: l, pitch_deg: f } = eb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function qi() {
    return E && h.selectedId === Hf;
  }
  function vv(i) {
    const s = h.showObjects ? eN(tN(S, Qs())) : [], l = s.length ? [{ segments: s, color: VO }] : [];
    if (!ur()) return l;
    const f = qi() ? n0 : RO;
    return [...l, { segments: hg(Xi(), mu(i)), color: f }];
  }
  function _v() {
    return !ur() || !qi() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: Wf({ ...Xi(), scale: 1 }) };
  }
  function wv(i, s) {
    var p;
    const l = (p = Qn().space) == null ? void 0 : p.gizmo;
    if (l && Qi("hover", s) !== null && Qi("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: Xi(), changed: !1 }, O.setPointerCapture(i.pointerId), gt(s), !0;
    const f = hg(Xi(), mu(Ci()));
    return QM(Ka(), f, s, O.width, O.height) ? (qi() || (cr(He()), Ve(), Ke(), oe()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function xv() {
    if (!Ee.backgroundDirty && Ee.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = Qn(), f = X.width, p = X.height, m = z.render({
      width: f,
      height: p,
      camera: l ? ef(Gn(), f, p, l.sphere) : Ip(),
      background: i,
      layers: s,
      space: l
    }), g = X.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), Ee.backgroundWasVisible = !!m, Ee.backgroundDirty = !1, Fe = null, Tr(), (h.worldSelectedId || qi() || re) && Ke();
  }
  function Up(i) {
    const { content: s } = Qn();
    return !s || !i.position ? gs(i) : Jy(gs(i), i.position, kh(), s.sphere);
  }
  function Yp(i, s, l, f) {
    const { background: p, layers: m, content: g } = Qn();
    if (!p && !m.length && !g) return !1;
    const _ = g && l.position ? g : null, x = z.render({ width: s.w, height: s.h, camera: Up(l), background: p, layers: m, space: _, owner: f });
    return x ? (i.drawImage(x.canvas, x.x, x.y, x.width, x.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Sv(i) {
    const s = Qn(), l = JSON.stringify([i, X.width, X.height, bg(s)]);
    if (l === Fe) return;
    const f = z.renderUnwrap({ width: i.w, height: i.h, ...s }), p = X.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, X.width, X.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), Fe = f ? l : null, Ee.backgroundWasVisible = !1;
  }
  function kv(i = !1) {
    const s = O.width, l = O.height, f = Ii();
    if (T.globalAlpha = 1, T.lineWidth = 1, i || T.clearRect(0, 0, s, l), Zs(), Sv(f), h.showGrid && !h.fullscreen) {
      T.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        T.beginPath(), T.moveTo(g, f.y), T.lineTo(g, f.y + f.h), T.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        T.beginPath(), T.moveTo(f.x, g), T.lineTo(f.x + f.w, g), T.stroke();
      }
      T.strokeStyle = "rgba(250, 250, 250, 0.86)", T.lineWidth = 1.2, T.beginPath(), T.moveTo(f.x, f.y + f.h / 2), T.lineTo(f.x + f.w, f.y + f.h / 2), T.stroke(), T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center";
      const p = f.y + f.h * 0.57;
      T.fillText("Left", f.x + f.w * 0.25, p), T.fillText("Front", f.x + f.w * 0.5, p), T.fillText("Right", f.x + f.w * 0.75, p), T.fillText("Back", f.x + 38, p), T.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function Xp(i, s, l = 1) {
    let f = !1;
    T.strokeStyle = s, T.lineWidth = l, T.beginPath();
    for (const p of i) {
      const m = Oa(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? T.lineTo(m.x, m.y) : (T.moveTo(m.x, m.y), f = !0);
    }
    T.stroke();
  }
  function Mv(i = !1) {
    const s = O.width, l = O.height;
    if (i || T.clearRect(0, 0, s, l), Zs(), xv(), h.showGrid && !h.fullscreen && Qn().space)
      Nv();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(qn(p, g));
        Xp(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(qn(g, p));
        Xp(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: qn(-90, 0) },
        { name: "Front", dir: qn(0, 0) },
        { name: "Right", dir: qn(90, 0) },
        { name: "Back", dir: qn(180, 0) }
      ];
      T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center", f.forEach((p) => {
        const m = Oa(p.dir);
        m && T.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function Nv() {
    const i = ef(Gn(), O.width, O.height, Dr()), s = As(i, [0, 0, 0], O.width, O.height);
    s && (T.fillStyle = "rgba(255, 221, 87, 0.9)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center", T.fillText("ERP origin", s.x, s.y - 12));
  }
  function Pv(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || He();
      if (!p) return [];
      const m = l || dn(p);
      return i_(i, p, m);
    }
    return ih(i, f);
  }
  function Xs(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = ih([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Ro(i);
    return m ? ni(m, s, l, f) : null;
  }
  function Av(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = Sr(l, i.layerKind), p = Mi(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || Uc(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], x = h.mode === "frame" ? He() : null, I = x ? dn(x) : null;
    for (const le of f) {
      const Me = (le == null ? void 0 : le.geometry) || null, Be = (Me == null ? void 0 : Me.geometryKind) === "lasso_fill" ? Me == null ? void 0 : Me.points : (Me == null ? void 0 : Me.processedPoints) || (Me == null ? void 0 : Me.rawPoints) || (Me == null ? void 0 : Me.points) || [], Xe = Pv(Be, x, I, g).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!Xe.length) continue;
      const ot = Ti(String((le == null ? void 0 : le.toolKind) || "pen")), ve = Wn[ot] || Wn[ai];
      _.push({
        points: Xe,
        closed: String((Me == null ? void 0 : Me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((ve == null ? void 0 : ve.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || i.layerKind || "paint")
      });
    }
    const M = Xs(m, null, x, I, g);
    if (!M) {
      const le = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, le), le;
    }
    const D = g1(p).map((le) => Xs(le, M.x, x, I, g)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (D.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, le), le;
    }
    const Y = (le, Me) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((Me == null ? void 0 : Me.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((Me == null ? void 0 : Me.y) || 0)) * 0.5,
      a: le,
      b: Me
    }), H = Y(D[0], D[1]), q = Y(D[1], D[2]), ie = Y(D[2], D[3]), ce = Y(D[3], D[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...H },
        { edge: "right", ...q },
        { edge: "bottom", ...ie },
        { edge: "left", ...ce }
      ],
      rotateStemBase: { x: H.x, y: H.y },
      rotateHandle: { x: H.x, y: H.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return h._strokeGeomCache.set(s, ye), ye;
  }
  function Cv(i, s) {
    const l = h.mode === "frame" ? He() : null, f = l ? dn(l) : null, p = Gp(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = Xs(p, null, l, f, m), x = lv(i).map((D) => Xs(D, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(x) || x.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, D), D;
    }
    const I = x.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: I.reduce((D, Y) => D + Number(Y.x || 0), 0) / I.length,
        y: I.reduce((D, Y) => D + Number(Y.y || 0), 0) / I.length
      },
      corners: I,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function ni(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = l || He(), C = f || dn(M);
      if (!M || !C) return null;
      const D = M ? Ra(M, i) : null;
      return D ? {
        x: Number(C.x || 0) + Number(D.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(D.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return hu(i, s);
    const m = 1e-4, g = su().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const _ = O.width, x = O.height, I = Math.max(_, x) * 2;
    return {
      x: Q(g.x, -I, _ + I),
      y: Q(g.y, -I, x + I),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function Iv(i, s = []) {
    if (h.mode !== "pano" || St(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? ZO(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Ov(i) {
    if (wr(i) && !Vi(i.clip, h.frame)) return { visible: !1 };
    const s = an(i), l = qn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? He() : null, p = f ? dn(f) : null, m = h.mode === "pano" && (St(i) || jn(i)), g = m ? { clipBehind: !0 } : null, _ = ni(l, null, f, p, g);
    if (!_) return { visible: !1 };
    const x = Ys(i), M = jp(i).map((he) => ni(he, _.x, f, p, g)).filter((he) => Number.isFinite(he == null ? void 0 : he.x) && Number.isFinite(he == null ? void 0 : he.y));
    if (M.length < 4) return { visible: !1 };
    const C = Oi(x, 0, x.tanY), D = Oi(x, 0, x.tanY + Math.max(x.tanY * 0.43, 0.053)), Y = ni(C, _.x, f, p, g);
    if (!Y) return { visible: !1 };
    const H = ni(D, (Y == null ? void 0 : Y.x) ?? _.x, f, p, g), q = ((H == null ? void 0 : H.x) ?? Y.x) - Y.x, ie = ((H == null ? void 0 : H.y) ?? Y.y) - Y.y, ce = Math.hypot(q, ie) || 1, ye = {
      x: Y.x + q / ce * 30,
      y: Y.y + ie / ce * 30
    }, le = ni(Oi(x, 0, x.tanY), _.x, f, p, g), Me = ni(Oi(x, x.tanX, 0), _.x, f, p, g), Be = ni(Oi(x, 0, -x.tanY), _.x, f, p, g), Xe = ni(Oi(x, -x.tanX, 0), _.x, f, p, g);
    if (!le || !Me || !Be || !Xe) return { visible: !1 };
    const ot = [
      _,
      ...M,
      Y,
      H,
      le,
      Me,
      Be,
      Xe
    ];
    if (m && !ot.some((he) => Number((he == null ? void 0 : he.rawZ) ?? (he == null ? void 0 : he.z)) > 1e-4)) return { visible: !1 };
    const ve = Iv(i, ot), ae = [
      {
        edge: "top",
        x: le.x,
        y: le.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: Me.x,
        y: Me.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Be.x,
        y: Be.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Xe.x,
        y: Xe.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: M.map((he) => ({ x: he.x, y: he.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ve,
      visible: !0
    };
  }
  function tn(i) {
    if (E && jn(i) && ur()) return { visible: !1 };
    if (fn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = x1(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Av(i, m));
    }
    if (Sn(i)) {
      const p = cv(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Cv(i, p));
    }
    const s = uv(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = Ov(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function qs(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let _ = 0, x = 0;
      s === 0 ? (_ = g, x = 0) : s === 1 ? (_ = 1, x = g) : s === 2 ? (_ = 1 - g, x = 1) : (_ = 0, x = 1 - g);
      const I = Hp(i, _, x), M = h.mode === "unwrap" ? hu(I, f) : Oa(I);
      M && p.push(M);
    }
    return p;
  }
  function Ev(i, s) {
    const l = an(i), f = qn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? hu(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, _ = [
      qs(i, 0, g, m),
      qs(i, 1, g, m),
      qs(i, 2, g, m),
      qs(i, 3, g, m)
    ];
    rp(T, _, { selected: s });
  }
  function Fv() {
    const i = [...Array.isArray(S.shots) ? S.shots : []], s = [...Vs()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function gu() {
    const i = [...Array.isArray(S.shots) ? S.shots : []];
    return [...[...Vs()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function Js(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function qp(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = Q(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = T.globalAlpha;
    T.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = s ? 3.2 : 2.6;
    Js(T, f), T.fillStyle = _, T.fill(), T.strokeStyle = g, T.lineWidth = x, T.stroke(), T.save(), T.strokeStyle = g, T.lineWidth = s ? 3.2 : 2.6, T.lineCap = "round";
    const I = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    I.forEach((D) => {
      const H = I.find((ye) => (ye == null ? void 0 : ye.edge) === M[D == null ? void 0 : D.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, q = H.x - D.x, ie = H.y - D.y, ce = Math.hypot(q, ie) || 1;
      T.beginPath(), T.moveTo(D.x, D.y), T.lineTo(D.x + q / ce * C, D.y + ie / ce * C), T.stroke();
    }), T.restore(), T.globalAlpha = m;
  }
  function Tv(i, s, l, f) {
    const p = Q(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (jn(i)) {
      qp(s, l, f);
      return;
    }
    if (St(i)) {
      const g = T.globalAlpha;
      T.globalAlpha = g * A1(i) * p, h.mode === "frame" ? (T.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", T.lineWidth = l ? 2 : 1, Js(T, s.corners), T.stroke()) : Ev(i, l), T.globalAlpha = g;
      return;
    }
    const m = T.globalAlpha;
    T.globalAlpha = m * p, T.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Js(T, s.corners), T.fill(), T.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", T.lineWidth = l ? 2.8 : 1.9, Js(T, s.corners), T.stroke(), T.globalAlpha = m;
  }
  function Jp(i, s, l) {
    if (St(i)) {
      Gb(T, s, { accent: l });
      return;
    }
    T.fillStyle = l, s.corners.forEach((f) => {
      T.beginPath(), T.arc(f.x, f.y, 6.5, 0, Math.PI * 2), T.fill();
    }), jn(i) && (T.strokeStyle = l, T.lineCap = "round", T.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, C, D, Y;
      const p = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((C = f.a) == null ? void 0 : C.x) ?? f.x), m = (((D = f.b) == null ? void 0 : D.y) ?? f.y) - (((Y = f.a) == null ? void 0 : Y.y) ?? f.y), g = Math.hypot(p, m) || 1, _ = p / g, x = m / g, I = 10;
      T.beginPath(), T.moveTo(f.x - _ * I, f.y - x * I), T.lineTo(f.x + _ * I, f.y + x * I), T.stroke();
    }), T.lineCap = "butt"), fn(i) || (T.strokeStyle = "rgba(250, 250, 250, 0.9)", T.lineWidth = 1.8, T.beginPath(), T.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), T.lineTo(s.rotateHandle.x, s.rotateHandle.y), T.stroke(), T.fillStyle = l, T.beginPath(), T.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), T.fill());
  }
  function Dv() {
    var m;
    const i = h.mode === "frame" ? [] : lr(), s = i.length > 1, l = t === "cutout" ? Fv() : Fr(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${jn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const _ = h.mode !== "frame" && !s && vp(g);
      if (h.mode === "frame" && !_ || !h.showObjects && !jn(g)) continue;
      const x = St(g), I = jn(g), M = bn(g);
      if (!x && !I || wr(g) && !Vi(g.clip, h.frame)) continue;
      const C = tn(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const D = Q(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (D <= 0.01) continue;
      const Y = I && t === "cutout" && h.mode === "pano" ? Q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (T.save(), T.globalAlpha *= Y, Tv(g, C, _, M), _ && C.visible) {
        const H = M ? "#ff4d4f" : x && Bt(g) ? "#f59e0b" : "#0070f3", q = T.globalAlpha;
        T.globalAlpha = q * D, Jp(g, C, H), T.globalAlpha = q;
      }
      T.restore();
    }
    if (t === "cutout" && h.mode === "pano" && !He() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, _ = Q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      T.save(), T.globalAlpha *= _, qp(g.geom, g.selected, g.locked), g.selected && Jp(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), T.restore();
    }
    if (s) {
      const g = Aa(i);
      if (g != null && g.visible) {
        const _ = Yc(i) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(g.corners[0].x, g.corners[0].y);
        for (let x = 1; x < g.corners.length; x += 1) T.lineTo(g.corners[x].x, g.corners[x].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = _, g.corners.forEach((x) => {
          T.beginPath(), T.arc(x.x, x.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      }
    } else
      i.forEach((g) => {
        if (!fn(g) && !Sn(g)) return;
        const _ = tn(g);
        if (!(_ != null && _.visible)) return;
        const x = bn(g) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(_.corners[0].x, _.corners[0].y);
        for (let I = 1; I < _.corners.length; I += 1) T.lineTo(_.corners[I].x, _.corners[I].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = x, _.corners.forEach((I) => {
          T.beginPath(), T.arc(I.x, I.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Dh(h.interaction.start, h.interaction.current);
      T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.9)", T.fillStyle = "rgba(255, 255, 255, 0.08)", T.lineWidth = 1, T.setLineDash([5, 4]), T.beginPath(), T.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), T.fill(), T.stroke(), T.restore();
    }
  }
  function Zp(i, s = !1) {
    const l = Q(vo(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function Lv(i) {
    if (!me || !i) return !1;
    const s = me.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || me.clientWidth || 0)), f = Math.round(Number(s.clientHeight || me.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function Rv() {
    if (h.outputPreviewRect = null, A.outputPreviewToggle.visible = h.mode !== "frame" && !!He(), t !== "cutout" || !A.cameraPreview) return;
    if (h.mode === "frame") {
      A.cameraPreview.visible = !1, A.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    A.cameraPreview.visible = !0, A.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = pe == null ? void 0 : pe.getContext("2d");
    if (!i || !s) {
      A.cameraPreview.ready = !1, A.cameraPreview.settled = !1, A.cameraPreview.width = 220, A.cameraPreview.height = 132, A.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, pe.width, pe.height), Je = null;
      return;
    }
    const l = Zp(i, !!h.outputPreviewExpanded);
    A.cameraPreview.width = l.width, A.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (pe.width !== p.w || pe.height !== p.h) && (pe.width = p.w, pe.height = p.h);
    const { content: m } = Qn(), g = m && [i.position, z.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], _ = JSON.stringify([p, Si(i), bg(Qn()), g]);
    let x = _ === Je;
    if (x || (s.clearRect(0, 0, p.w, p.h), x = Yp(s, p, i, "camera_preview"), Je = x ? _ : null), !x) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = fu() ? "Loading preview" : "Connect ERP image", A.cameraPreview.settled = !1;
      return;
    }
    const I = Lv(l);
    A.cameraPreview.ready = !0, A.cameraPreview.label = I ? "" : "Loading preview", A.cameraPreview.settled = I && Ee.pendingStableLayoutFrames <= 0 && Ee.hasPresentedFrame;
  }
  function yu(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return Hp(i, l, f);
  }
  function Ro(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return $c(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function Vv(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function $v(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: kn(i, "widthScale", 1),
      pressureLike: kn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function zv(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function bu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let q = null;
      i.forEach((ie) => {
        const ce = Number((ie == null ? void 0 : ie.u) || 0), ye = Number((ie == null ? void 0 : ie.v) || 0), le = (ce % 1 + 1) % 1, Me = q == null ? le : q + sr(le, (q % 1 + 1) % 1);
        p.set(ie, { x: Me, y: ye }), q = Me;
      });
    }
    const m = (q) => !q || typeof q != "object" ? { x: 0, y: 0 } : p.get(q) || Vv(q), g = (q, ie, ce, ye = {}) => {
      const le = f ? (Number(ie) % 1 + 1) % 1 : Number(ie), Me = $v(q, le, ce, ye);
      return p.set(Me, { x: Number(ie), y: Number(ce) }), Me;
    }, _ = (q, ie, ce) => {
      const ye = m(q), le = m(ie);
      return g(q, dr(ye.x, le.x, ce), dr(ye.y, le.y, ce), {
        t: dr(Number((q == null ? void 0 : q.t) || 0), Number((ie == null ? void 0 : ie.t) || 0), ce),
        widthScale: dr(kn(q, "widthScale", 1), kn(ie, "widthScale", 1), ce),
        pressureLike: dr(kn(q, "pressureLike", 1), kn(ie, "pressureLike", 1), ce)
      });
    };
    if (i.length === 1) {
      const q = m(i[0]);
      return [g(i[0], q.x, q.y)];
    }
    const x = zv(s, l), I = (q, ie) => {
      const ce = [0];
      for (let ae = 1; ae < q.length; ae += 1) {
        const he = m(q[ae - 1]), Te = m(q[ae]);
        ce.push(ce[ae - 1] + Math.hypot(Te.x - he.x, Te.y - he.y));
      }
      const ye = ce[ce.length - 1] || 0;
      if (ye <= 1e-8) {
        const ae = q[0], he = m(ae);
        return [g(ae, he.x, he.y)];
      }
      const le = [];
      let Me = 0;
      for (let ae = 0; ae <= ye + 1e-9; ae += ie) {
        for (; Me < ce.length - 2 && ce[Me + 1] < ae; ) Me += 1;
        const he = ce[Me], Te = ce[Me + 1], xe = Math.max(1e-8, Te - he);
        le.push(_(q[Me], q[Me + 1], Q((ae - he) / xe, 0, 1)));
      }
      const Be = q[q.length - 1], Xe = m(Be), ot = le[le.length - 1], ve = ot ? m(ot) : null;
      return (!ve || Math.hypot(ve.x - Xe.x, ve.y - Xe.y) > ie * 0.35) && le.push(g(Be, Xe.x, Xe.y)), le;
    }, M = (q) => {
      if (!Array.isArray(q) || q.length < 3) return q ? q.slice() : [];
      const ie = m(q[0]), ce = [g(q[0], ie.x, ie.y)];
      for (let Me = 0; Me < q.length - 1; Me += 1) {
        const Be = q[Me], Xe = q[Me + 1], ot = m(Be), ve = m(Xe), ae = g(
          Be,
          ot.x * 0.75 + ve.x * 0.25,
          ot.y * 0.75 + ve.y * 0.25,
          {
            t: Number(Be.t || 0) * 0.75 + Number(Xe.t || 0) * 0.25,
            widthScale: kn(Be, "widthScale", 1) * 0.75 + kn(Xe, "widthScale", 1) * 0.25,
            pressureLike: kn(Be, "pressureLike", 1) * 0.75 + kn(Xe, "pressureLike", 1) * 0.25
          }
        ), he = g(
          Be,
          ot.x * 0.25 + ve.x * 0.75,
          ot.y * 0.25 + ve.y * 0.75,
          {
            t: Number(Be.t || 0) * 0.25 + Number(Xe.t || 0) * 0.75,
            widthScale: kn(Be, "widthScale", 1) * 0.25 + kn(Xe, "widthScale", 1) * 0.75,
            pressureLike: kn(Be, "pressureLike", 1) * 0.25 + kn(Xe, "pressureLike", 1) * 0.75
          }
        );
        ce.push(ae, he);
      }
      const ye = q[q.length - 1], le = m(ye);
      return ce.push(g(ye, le.x, le.y)), ce;
    }, C = I(i, x);
    if (C.length < 3) return C;
    const D = l ? 2 : 1;
    let Y = C.slice();
    for (let q = 0; q < D; q += 1) Y = M(Y);
    return I(Y, Math.max(x * 0.75, 55e-5));
  }
  function kn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function jv(i) {
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
  function Fa(i, s, l = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Ta() {
    const i = La();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Da() {
    const i = La();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Qp() {
    const i = Wc(), s = Da();
    return i ? `${s}:${i}` : s;
  }
  function Hv() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function Gv() {
    h.paintCompositeRevision += 1;
  }
  function Kv() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function eh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, S), h.paintEngineRevisionKey = Ta();
  }
  function th() {
    S.painting_layer !== null && (S.painting_layer = null), Bs = "";
  }
  function $t() {
    Kv(), Ee.backgroundDirty = !0, Ee.dirty = !0;
  }
  function kr({ rebuildPaintEngine: i = !1 } = {}) {
    th(), Hv(), $t(), i && eh();
  }
  function Vo() {
    th(), Gv(), $t();
  }
  function Zs() {
    var f;
    const i = La(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = Ff(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Ta();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(S));
  }
  function La() {
    const i = Math.max(1, N(Number((S == null ? void 0 : S.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function er() {
    return La();
  }
  function Wv(i, s, l, f, p = null) {
    const m = jv(i), g = kn(s, "widthScale", 1) * kn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * zr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function Bv(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const _ = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(_.a ?? 1) * 0.88) : Math.max(0.12, Number(_.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${x})`;
  }
  function Uv(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function Yv(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), Bv(i, l, p);
    const g = (_) => Uv(i, _, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const x = s[_], I = s[_ + 1];
      if (!x || !I) continue;
      const M = Number(x.x || 0), C = Number(x.y || 0), D = Number(I.x || 0), Y = Number(I.y || 0), H = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), q = Math.max(0.5, Math.min(m, Number(I.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(C) || !Number.isFinite(D) || !Number.isFinite(Y) || !Number.isFinite(H) || !Number.isFinite(q)) continue;
      const ie = D - M, ce = Y - C, ye = Math.hypot(ie, ce);
      if (!Number.isFinite(ye) || ye < 1e-6) {
        g(x);
        continue;
      }
      if (ye > Math.max(f.w, f.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(H, q)), Me = Math.max(0.35, Math.min(le * 0.4, 2.25)), Be = Math.max(1, Math.ceil(ye / Me));
      for (let Xe = 0; Xe <= Be; Xe += 1) {
        const ot = Xe / Be;
        g({
          x: dr(M, D, ot),
          y: dr(C, Y, ot),
          radiusPx: dr(H, q, ot)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function Xv(i, s, l, f) {
    Yv(i, s, l, f, { preview: !1 });
  }
  function qv(i, s, l, f, p) {
    var _, x, I, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * f.w, Number(((x = s[0]) == null ? void 0 : x[g]) || 0) * f.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((I = s[C]) == null ? void 0 : I[m]) || 0) * f.w, Number(((M = s[C]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function nh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function Jv(i, s) {
    const l = nh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: Wv(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function rh(i, s, l = null) {
    var _, x, I, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return qv(i.ctx, nh(p), p, f), !0;
    const g = Jv(p, f);
    return g.length ? (Xv(i.ctx, g, p, f), !0) : !1;
  }
  function Zv(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), _ = new Int32Array(s * l);
    for (let x = 0; x < l; x += 1)
      for (let I = 0; I < s; I += 1) {
        const M = x * s + I;
        if (p[M] || i[M] <= f) continue;
        let C = 0, D = 0;
        g[D] = I, _[D] = x, D += 1, p[M] = 1;
        const Y = [];
        let H = I, q = x, ie = I, ce = x;
        for (; C < D; ) {
          const ye = g[C], le = _[C];
          C += 1, Y.push({ x: ye, y: le }), ye < H && (H = ye), le < q && (q = le), ye > ie && (ie = ye), le > ce && (ce = le);
          const Me = [
            [(ye - 1 + s) % s, le],
            [(ye + 1) % s, le],
            [ye, le - 1],
            [ye, le + 1]
          ];
          for (const [Be, Xe] of Me) {
            if (Xe < 0 || Xe >= l) continue;
            const ot = Xe * s + Be;
            p[ot] || i[ot] <= f || (p[ot] = 1, g[D] = Be, _[D] = Xe, D += 1);
          }
        }
        m.push({ pixels: Y, minX: H, minY: q, maxX: ie, maxY: ce });
      }
    return m;
  }
  function Qv(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, I) => x - I);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let x = 0; x < l.length; x += 1) {
      const I = l[x], C = (x === l.length - 1 ? l[0] + s : l[x + 1]) - I - 1;
      C > f && (f = C, p = x);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let g = 1 / 0, _ = -1 / 0;
    for (const x of l) {
      const I = (x - m + s) % s;
      g = Math.min(g, I), _ = Math.max(_, I);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - g + 1)
    };
  }
  function e_(i, s, l = {}) {
    var I;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (I = i == null ? void 0 : i.getContext) == null ? void 0 : I.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), _ = new Uint8Array(f * p);
    for (let M = 0; M < _.length; M += 1) _[M] = g.data[M * 4 + 3];
    return Zv(_, f, p, 8).map((M, C) => {
      const D = Qv(M, f);
      if (!D) return null;
      const Y = Number(D.widthPx || 0), H = M.maxY - M.minY + 1, q = Number(D.startX || 0), ie = document.createElement("canvas");
      ie.width = Y, ie.height = H;
      const ce = ie.getContext("2d");
      if (!ce) return null;
      const ye = ce.createImageData(Y, H);
      return M.pixels.forEach(({ x: le, y: Me }) => {
        const Be = (Me * f + le) * 4, Xe = (Number(le || 0) - q + f) % f, ot = ((Me - M.minY) * Y + Xe) * 4;
        ye.data[ot + 0] = g.data[Be + 0], ye.data[ot + 1] = g.data[Be + 1], ye.data[ot + 2] = g.data[Be + 2], ye.data[ot + 3] = g.data[Be + 3];
      }), ce.putImageData(ye, 0, 0), {
        id: Yo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: Y / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: ie.toDataURL("image/png"),
        transform: {
          du: q / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ra(i, s) {
    if (!i || !s) return null;
    const l = Ys(i), f = bf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = bf(s, l.right) / f, m = bf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function t_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Ii();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Oa(Ro(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function ih(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Ii();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + sr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => Oa(Ro(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function n_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function r_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ro(p), g = Ra(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return n_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function i_(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ro(p), g = Ra(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function o_() {
    const i = He(), s = rl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = gg(i, s, { width: O.width, height: O.height }), m = a_(l);
    return T.save(), T.fillStyle = "#0a0a0a", T.fillRect(0, 0, O.width, O.height), Yp(T, f, p) || (T.fillStyle = "rgba(255, 255, 255, 0.03)", T.fillRect(f.x, f.y, f.w, f.h)), T.restore(), T.save(), T.fillStyle = "rgba(0, 0, 0, 0.58)", T.beginPath(), T.rect(0, 0, O.width, O.height), T.roundRect(l.x, l.y, l.w, l.h, m), T.fill("evenodd"), T.restore(), T.save(), T.strokeStyle = n0, T.globalAlpha = 0.62, T.lineWidth = 2, T.beginPath(), T.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), T.stroke(), T.restore(), !0;
  }
  function a_(i) {
    const s = Math.max(1e-6, Number(Ee.frameCanvasScale || 1));
    return Math.min(hn * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function ri() {
    var s;
    const i = h.mode === "frame" ? He() : null;
    A.frameRollKnob.visible = !!i && !r && i.locked !== !0, A.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), A.frameRollKnob.displayValue = Uo(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", A.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function s_() {
    var x, I;
    if (((x = h.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (I = i == null ? void 0 : i.geometry) == null ? void 0 : I.points;
    let l;
    if (h.mode === "frame") {
      const M = He(), C = dn(M);
      l = r_(s, M, C);
    } else
      l = t_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), _ = Math.round(Number(p.b || 0) * 255);
    T.save(), T.beginPath(), T.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) T.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    T.closePath(), f ? (T.lineWidth = 2, T.setLineDash([6, 6]), T.lineDashOffset = 0, T.strokeStyle = "rgba(0,0,0,0.96)", T.stroke(), T.lineDashOffset = -6, T.strokeStyle = "rgba(255,255,255,0.96)", T.stroke(), T.setLineDash([]), T.lineDashOffset = 0) : (T.lineWidth = 1.5, T.setLineDash([6, 4]), T.strokeStyle = `rgba(${m},${g},${_},1)`, T.stroke(), T.setLineDash([])), T.restore();
  }
  function l_() {
    const i = h.frameRollOverlayVisual, s = Q(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = dn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * zr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, _ = Math.sin(p) * m;
    T.save(), T.globalAlpha *= s, T.beginPath(), T.rect(l.x, l.y, l.w, l.h), T.clip(), T.translate(f.x, f.y), T.rotate(p);
    const x = Math.max(12, Math.min(l.w, l.h) / 6);
    T.beginPath();
    for (let I = -m; I <= m; I += x)
      T.moveTo(I, -m), T.lineTo(I, m);
    for (let I = -m; I <= m; I += x)
      T.moveTo(-m, I), T.lineTo(m, I);
    T.lineWidth = 1, T.strokeStyle = "rgba(255, 255, 255, 0.22)", T.stroke(), T.setTransform(1, 0, 0, 1, 0, 0), T.beginPath(), T.moveTo(f.x - g, f.y - _), T.lineTo(f.x + g, f.y + _), T.lineWidth = 1.5, T.setLineDash([8, 6]), T.strokeStyle = "rgba(255, 255, 255, 0.92)", T.shadowColor = "rgba(0, 0, 0, 0.8)", T.shadowBlur = 3, T.stroke(), T.setLineDash([]), T.restore();
  }
  function c_() {
    return t !== "cutout" || !He() || E && ur() ? 0 : jO;
  }
  function u_() {
    const i = Q(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || h.mode !== "pano") return;
    const s = He(), l = s ? tn(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: vp(s),
      locked: bn(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (T.save(), T.fillStyle = `rgba(0, 0, 0, ${i})`, T.beginPath(), T.rect(0, 0, O.width, O.height), m.length >= 4) {
      T.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) T.lineTo(m[g].x, m[g].y);
      T.closePath();
    }
    T.fill("evenodd"), T.restore();
  }
  function oh() {
    Re = null, h.mode === "frame" ? (Ee.frameSafeRect = K_(), o_()) : h.mode === "unwrap" ? kv(!1) : Mv(!1), u_(), t === "cutout" && Rv(), Dv(), ri(), s_(), l_(), A.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), Ee.hasPresentedFrame || (Ee.hasPresentedFrame = !0, X.style.opacity = "1"), t === "cutout" && A.cameraPreview && (A.cameraPreview.settled = Ee.pendingStableLayoutFrames <= 0 && Ee.hasPresentedFrame && h.mode !== "frame");
    const i = sv();
    A.stageStatus = i.status, A.stageStatusDetail = i.detail, i.status === Pr ? (V == null || V.removeAttribute("data-stage-ready"), V == null || V.setAttribute("data-stage-loading-kind", i.detail)) : (V == null || V.setAttribute("data-stage-ready", ""), V == null || V.removeAttribute("data-stage-loading-kind"));
  }
  function f_(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function d_() {
    e.__panoLiveStateOverride = S, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = w1();
  }
  function oe(i = {}) {
    var _, x, I, M, C, D, Y, H, q;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((_ = h.interaction) == null ? void 0 : _.kind) || "");
    (!s || p === "view" || p === "pan_frame" || f_() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Ee.backgroundDirty = !0), s && mp() && (h.livePaintInteractionRevision += 1, Ee.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (nu(), ti()), d_(), l && ((I = (x = e.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || I.call(x), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((D = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || D.call(C, !0, !0), (q = (H = (Y = Cr) == null ? void 0 : Y.canvas) == null ? void 0 : H.setDirty) == null || q.call(H, !0, !0)), Ee.dirty = !0;
  }
  function ah() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || X.width !== s || X.height !== l ? (O.width = s, O.height = l, X.width = s, X.height = l, Ee.backgroundDirty = !0, Ee.dirty = !0, t === "cutout" && (Ee.pendingStableLayoutFrames = Math.max(Number(Ee.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function p_(i = performance.now()) {
    var m;
    Lr(), Ee.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = Q(
        (i - Number(h.frameRollOverlayStartTs || i)) / HO,
        0,
        1
      );
      h.frameRollOverlayAlpha = dr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        yf(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), Ee.dirty = !0;
    }
    const f = c_();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = Q(
        (i - Number(h.cutoutPanoDimStartTs || i)) / i0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = dr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        yf(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), Ee.dirty = !0;
    }
    const p = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = Q(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / i0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = dr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        yf(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), Ee.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), _ = Q((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), I = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? JO(_) : tE(_);
      h.outputPreviewAnim = dr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, I), Ee.dirty = !0, _ >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: _ } = hA(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, _) {
        const { end: x } = h.viewTransition;
        h.viewTransition = null, x && dp(x), Tr();
      }
      Ee.backgroundDirty = !0, Ee.dirty = !0;
    }
    if (h.viewInertia.vx = Number(sn.state.inertia.vx || 0), h.viewInertia.vy = Number(sn.state.inertia.vy || 0), h.viewInertia.active = !!sn.state.inertia.active, sn.stepInertia(i) && (h.viewInertia.vx = Number(sn.state.inertia.vx || 0), h.viewInertia.vy = Number(sn.state.inertia.vy || 0), h.viewInertia.active = !!sn.state.inertia.active, Ee.backgroundDirty = !0, Ee.dirty = !0), Ee.pendingStableLayoutFrames > 0 && (Ee.pendingStableLayoutFrames -= 1, Ee.dirty = !0), Ee.dirty) {
      if (Ee.pendingStableLayoutFrames > 0)
        return;
      Ee.dirty = !1, oh();
    }
  }
  function sh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Ee.tickErrorSignature !== l && (Ee.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), A.stageStatus = hr, A.stageStatusDetail = "frame", V == null || V.setAttribute("data-stage-ready", ""), V == null || V.removeAttribute("data-stage-loading-kind");
    }
  }
  function lh(i = performance.now()) {
    Ee.running && (sh(() => p_(i)), Ee.running && (Ee.rafId = requestAnimationFrame(lh)));
  }
  function h_() {
    !Ee.running || !ah() || sh(() => {
      Ee.dirty = !1, oh();
    });
  }
  const ch = new ResizeObserver(h_);
  ch.observe(O);
  function m_() {
    Ee.running = !1, Ee.rafId && cancelAnimationFrame(Ee.rafId), Ee.rafId = 0, ch.disconnect();
  }
  function tt() {
    r || (Lr(), !(k && S.stickers.some(jc)) && (h.historyController.commitActionGroup(JSON.stringify(ng(S))), Pu()));
  }
  function vu(i) {
    var p;
    if (r) return;
    Tn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Pu(), !s) return;
    const l = uM(S, s), f = (p = S.timeline) == null ? void 0 : p.fps;
    Object.keys(S).forEach((m) => delete S[m]), Object.assign(S, l.state), Lr(!1), k && S.timeline.fps !== f && Ft.seek(Math.round(h.frame * S.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? S.active.selected_sticker_id : S.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && Fo(), Ee.backgroundDirty = !0, l.paintingChanged ? kr() : $t(), Kn(), Ve(), Dn(), oe({ cause: "cutout_frame" });
  }
  function uh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Kn() {
    p1();
    const i = yA({
      editor: h,
      swatches: Gl,
      paintColorPopOpen: be ? !be.hidden : !1,
      colorToCss: jr,
      colorsApproximatelyEqual: Kl,
      rgb01ToHsv: wf,
      hsv01ToRgb: _f,
      getBrushPresetIdForTool: Ti,
      isActiveLassoTool: I1
    });
    if (Object.assign(A.paintDock, i), L1(), !i.visible) {
      be && (be.hidden = !0);
      return;
    }
    je && (clearTimeout(je), je = 0), Ae && (!i.colorEnabled && be && !be.hidden && (je = window.setTimeout(() => {
      be.hidden = !0, A.paintDock.colorPopOpen = !1, je = 0;
    }, 170)), be && (be.style.setProperty("--picker-hue-color", i.pickerHueColor), be.style.setProperty("--picker-sat", i.pickerSat), be.style.setProperty("--picker-val", i.pickerVal), be.style.setProperty("--picker-hue", i.pickerHue)), fe && (fe.style.left = i.pickerSvLeft, fe.style.top = i.pickerSvTop), Ie && (Ie.style.left = i.pickerHueLeft));
  }
  function $o() {
    const i = an(t === "cutout" && h.mode === "frame" ? He() : Tt());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: fi(i)
    }, Ve());
  }
  function Ve() {
    var ve, ae, he, Te;
    if (Lr(), ii(), o) return;
    S.ui_settings = S.ui_settings || {};
    const i = gA(S.ui_settings);
    if (a) {
      A.sidePanel = bA({
        coverage: S.coverage,
        uiSettings: i,
        normalizeCoverageValue: Xn
      });
      return;
    }
    const s = Tt(), l = t === "cutout" && h.mode === "frame" ? He() : null, f = l || s, p = l ? [l] : lr(), m = l ? "shot" : js();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const xe = an(f);
      h.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: fi(xe)
      }, wr(f) && (h.panelLastValues.opacity = _o(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : f, x = Ia(), I = E && (m === "shot" || m === "frame") && Ws(), M = x ? _M(x, h.frame) : I ? { ..._, ...yM(S.camera, h.frame), vFOV_deg: _.vFOV_deg } : wr(_) ? h.panelLastValues : _ || g, C = x ? Ks(x) : !!_ && !bn(_);
    h.panelWasEnabled = C, nu();
    let D = null;
    if (l) {
      const xe = Xc({ item: l, kind: "shot", label: "Frame" });
      D = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(l.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const xe = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Fr().forEach((ze, qe) => {
        var Gt, Vr;
        if (!ze) return;
        const It = P ? Gf(ze) : Bt(ze) ? String(ze.id || ff) : String(((Vr = (Gt = S.assets) == null ? void 0 : Gt[ze.asset_id]) == null ? void 0 : Vr.name) || ze.asset_id || ze.id), Mn = `${qe + 1}. ${It}${Bt(ze) && Eo(ze) ? " (hidden)" : ""}`, Lt = Xc({ item: ze, label: Mn, kind: "image" });
        xe.push({ id: ze.id, label: Lt.label, icon: Lt.icon, item: ze, kind: "image" });
      }) : _p().forEach((ze) => {
        if (!(ze != null && ze.item)) return;
        const qe = Xc(ze);
        xe.push({ id: ze.item.id, label: qe.label, icon: qe.icon, item: ze.item, kind: ze.kind });
      });
      const We = (_ == null ? void 0 : _.id) || "", Ge = x ? { label: Gf(x), icon: Ne.globe } : xe.find((ze) => ze.id === We) || xe[0];
      D = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: Ge.label,
        currentIcon: Ge.icon || null,
        items: xe.map((ze) => ({
          id: ze.id,
          label: ze.label,
          icon: ze.icon || null,
          active: ze.id === We
        }))
      };
    }
    const Y = [], H = (xe, We, Ge, ze, qe) => {
      const It = Q(Number(M[xe] || 0), Ge, ze);
      Y.push({
        key: xe,
        label: We,
        min: Ge,
        max: ze,
        step: qe,
        value: It,
        displayValue: Uo(It),
        fillPct: Q((It - Ge) / Math.max(1e-6, ze - Ge) * 100, 0, 100),
        enabled: C && !r
      });
    }, q = [];
    if (x) {
      for (const [xe, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = uf(M[xe]);
        H(xe, We, -Ge, Ge, 0.01);
      }
      H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("roll_deg", "Roll", -180, 180, 0.1), H("scale", "Scale", t0, uf(M.scale), 0.01), H("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      q.push(`Selected objects: ${p.length}`), q.push("Multi-selection supports z-order and delete.");
    else if (H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("hFOV_deg", "H FOV", 1, 179, 0.1), H("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? H("rot_deg", "Rotation", -180, 180, 0.1) : H("roll_deg", "Roll", -180, 180, 0.1), P && H("opacity", "Opacity", 0, 100, 1), I)
      for (const [xe, We] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ge = uf(M[xe]);
        H(xe, We, -Ge, Ge, 0.01);
      }
    const ie = Array.isArray((ae = (ve = S == null ? void 0 : S.painting) == null ? void 0 : ve.paint) == null ? void 0 : ae.strokes) ? S.painting.paint.strokes.length : 0, ce = Array.isArray((Te = (he = S == null ? void 0 : S.painting) == null ? void 0 : he.mask) == null ? void 0 : Te.strokes) ? S.painting.mask.strokes.length : 0, ye = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], le = qO(
      e,
      ye.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), Me = !!String((le == null ? void 0 : le.src) || "").trim() || ei("pano_input_images").length > 0, Be = Fr().length > 0 || ie > 0, Xe = ce > 0, ot = [
      { key: "mask", label: "Mask", icon: Ne.circle_dashed_tool, visible: !!h.showMask, enabled: Xe },
      { key: "objects", label: "Paint / Images", icon: Ne.image, visible: !!h.showObjects, enabled: Be },
      { key: "panorama", label: "Panorama", icon: Ne.globe, visible: !!h.showPanorama, enabled: Me }
    ].map((xe) => ({
      ...xe,
      ariaLabel: `Toggle ${xe.label.toLowerCase()}`,
      tip: xe.visible ? "Hide" : "Show"
    }));
    A.sidePanel = _A({
      coverage: S.coverage,
      readOnly: r,
      selectionPicker: D,
      enabled: C,
      selectedKind: x ? "world" : m,
      selectedItems: p,
      params: Y,
      notes: q,
      visibilityRows: ot,
      uiSettings: i,
      normalizeCoverageValue: Xn
    });
  }
  function ii() {
    if (!k || r) return;
    const i = Qs(), s = Ye.selection, l = s && Ei(s.owner);
    if (s) {
      const p = l ? Va(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((_) => _.frame === m))), s.frames.length || (Ye.selection = null);
    }
    const f = S.timeline.fps;
    A.timeline = MA(S, {
      frame: h.frame,
      span: i,
      selection: Ye.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ye.expanded ?? fh(),
      openRows: Ye.openRows,
      audio: y_() && A.videoTransport.hasAudio ? { muted: we.muted } : null,
      playing: Ft.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: hf(e) !== null || cN(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77).
      camera: E,
      stickers: !E,
      sceneLocked: !!L
    }), A.easing = Ye.selection ? NA(l, Va(Ye.selection), Ye.selection.frames, $a(Ye.selection.owner)) : null;
  }
  function fh() {
    return E ? ji(S.camera).some((i) => S.camera[i].keyframes.length > 0) : zy(S);
  }
  function Qs(i = null) {
    if (L != null && L.frames) return L.frames;
    const s = S.timeline.fps, l = S.stickers.find(Bt), f = l ? Pp() : null, p = Math.max(
      A.videoTransport.ready ? Math.round(Number(A.videoTransport.duration || 0) * s) : 0,
      f ? bb(l.clip, s, f.meta) : 0
    );
    return jy(S, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: E && !L });
  }
  function Ei(i) {
    return i === "camera" ? E ? S.camera : null : S.stickers.find((s) => s.id === i) || null;
  }
  function Va(i) {
    return i.lane ? [i.lane] : ji(Ei(i.owner));
  }
  function $a(i) {
    if (i === "camera") return 0;
    const { clip: s } = Ei(i);
    return s.start - s.in;
  }
  function el(i) {
    const s = Ei(i);
    return !!s && s.locked !== !0;
  }
  function dh() {
    const i = Tt();
    wr(i) && !Vi(i.clip, h.frame) && cr(null);
  }
  function g_(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (Lr(), h.frame = s, Lr(), dh(), $t(), Ve(), Ke(), oe());
  }
  function y_() {
    return we instanceof HTMLVideoElement && !!we.getAttribute("src");
  }
  function b_(i) {
    Pi(), Ft.seek(i);
  }
  function Tn() {
    k && Ft.stop();
  }
  function _u() {
    Pi(), Ft.toggle();
  }
  function zo() {
    Lr(), $t(), Ve(), Ke(), oe();
  }
  function Ji() {
    tt(), st(), zo();
  }
  function v_() {
    const { selection: i } = Ye;
    el(i.owner) && (Tn(), Jk(Ei(i.owner), Va(i), i.frames, h.frame - $a(i.owner)), Ye.selection = null, Ji());
  }
  function ph(i) {
    Tn();
    const s = Math.round(h.frame * i / S.timeline.fps);
    dM(S, i), Ye.selection = null, Ft.seek(s), Ji();
  }
  function __() {
    const i = hf(e);
    i !== null && i !== S.timeline.fps && ph(i);
  }
  function w_(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && Pi(), Ft.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        _u();
        return;
      }
      if (i.type === "mute") {
        Sp(), ii();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ye.expanded = !(Ye.expanded ?? fh()), Ye.selection = null, ii();
        return;
      }
      if (i.type === "toggle-row") {
        Ye.openRows.has(i.id) ? Ye.openRows.delete(i.id) : Ye.openRows.add(i.id), ii();
        return;
      }
      if (i.type === "select-row") {
        const s = S.stickers.find((l) => l.id === i.id);
        s && !Vi(s.clip, h.frame) && b_(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? tu(s.id) : cr(Fr().find((l) => l.id === i.id) || null), Tr(), Ye.selection = null, Ve(), Ke(), oe();
        return;
      }
      if (i.type === "select-keys") {
        const s = $a(i.owner), l = i.frames.map((m) => m - s), f = Ye.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, _) => g - _);
        } else
          Ye.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        ii();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ye.selection;
        if (!s || !el(s.owner)) return;
        const l = Ei(s.owner), f = Va(s);
        if (i.phase === "start") {
          Tn(), Ye.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ye;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, _) => {
          l[g].keyframes = structuredClone(p.keyframes[_]);
        });
        const m = Zk(l, f, p.frames, i.delta, -$a(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          zo();
          return;
        }
        Ye.drag = null, m ? Ji() : zo();
        return;
      }
      if (i.type === "clip") {
        const s = S.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Tn(), Ye.drag = { clip: { ...s.clip }, span: Qs(s.clip) };
          return;
        }
        const { drag: l } = Ye;
        if (!(l != null && l.clip)) return;
        const f = l.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? tM(s.clip, i.delta) : i.delta && i.mode === "start" ? nM(s.clip, f.start + i.delta) : i.delta && rM(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          zo();
          return;
        }
        Ye.drag = null, dh(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Ji() : zo();
        return;
      }
      if (i.type === "key-row") {
        if (!el(i.owner)) return;
        Tn(), Yk(Ei(i.owner), h.frame - $a(i.owner)), Ji();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === S.timeline.fps || A.timeline.fpsLocked) {
          ii();
          return;
        }
        ph(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === S.timeline.length) {
          ii();
          return;
        }
        Tn(), S.timeline.length = s, Ji();
        return;
      }
      if (i.type === "easing") {
        const s = Ye.selection;
        if (!s || !el(s.owner)) return;
        Tn(), eM(Ei(s.owner), Va(s), s.frames, i.easing), i.commit ? Ji() : zo();
      }
    }
  }
  async function hh(i) {
    if (r || E || t !== "stickers" && t !== "cutout" || !Ar(i)) return;
    if (P) {
      Tn(), await mh(i);
      return;
    }
    const s = ao("asset"), l = is(e, `add:${s}`, async () => {
      try {
        const { image: f } = await os(i);
        Qt.set(s, f);
        const p = ao("st");
        S.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ai(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Hs()
        }), cr(S.stickers[S.stickers.length - 1]), tl(), Ve(), Ke(), oe();
        const m = await co(i, {
          fetchApi: (x, I) => Xt.fetchApi(x, I)
        });
        if (!(Array.isArray(S.stickers) ? S.stickers : []).filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s).length) return;
        S.assets[s] = m, Lo(), tt(), st(), Ve(), Ke(), oe();
      } catch (f) {
        delete S.assets[s], Qt.delete(s);
        const p = Array.isArray(S.stickers) ? S.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (S.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && cr(null), Ve(), Ke(), oe(), st()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function x_() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = se == null ? void 0 : se.openImagePicker) == null || i.call(se, "add");
  }
  function S_() {
    var i;
    r || !P || (i = se == null ? void 0 : se.openImagePicker) == null || i.call(se, "add-world");
  }
  async function k_(i) {
    r || !P || !Ar(i) || (Tn(), await mh(i, "world"));
  }
  function M_() {
    const i = { x: O.width / 2, y: O.height / 2 }, s = Yi() ? au(i) : null;
    return WM(Gn(), s, Dr());
  }
  async function mh(i, s = "sky") {
    const l = ao("st"), f = is(e, `add:${l}`, async () => {
      const { image: p } = await os(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ai(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, _ = s === "world" ? kM(l, g, M_()) : Ud(l, g, m, Hs());
      Qt.set(Ea(_), p), S.stickers.push(_), s === "world" ? tu(l) : cr(_), tl(), Ve(), Ke(), oe();
      try {
        const x = await co(i, {
          fetchApi: (M, C) => Xt.fetchApi(M, C)
        }), I = S.stickers.find((M) => M.id === l);
        if (!I) return;
        I.source = Tl(x), Qt.set(Ea(I), p), tt(), st();
      } catch (x) {
        throw S.stickers = S.stickers.filter((I) => I.id !== l), h.selectedId === l && cr(null), h.worldSelectedId === l && Fo(), tt(), st(), x;
      } finally {
        Ve(), Ke(), oe();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function N_(i, s) {
    const l = is(e, `replace:${s}:${ao("asset")}`, async () => {
      const { image: f } = await os(i), p = await co(i, {
        fetchApi: (g, _) => Xt.fetchApi(g, _)
      }), m = S.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Tl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          g.vFOV_deg = Ai(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Qt.set(Ea(m), f), $t(), tt(), st(), Ve(), Ke(), oe();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function P_(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Tt();
    if (!s || !St(s) || Bt(s) || !Ar(i)) return;
    if (P) {
      await N_(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = ao("asset"), p = is(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(S.stickers) ? S.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !St(m) || Bt(m)) return;
      const g = String(m.asset_id || ""), _ = g ? Nn(((M = S.assets) == null ? void 0 : M[g]) || null) : null, x = Number(m.vFOV_deg || 0), I = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await os(i);
        Qt.set(f, C), m.asset_id = f, m.vFOV_deg = Ai(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, $t(), Ve(), Ke(), oe();
        const D = await co(i, {
          fetchApi: (H, q) => Xt.fetchApi(H, q)
        }), Y = (Array.isArray(S.stickers) ? S.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        if (!Y || String(Y.asset_id || "") !== f) return;
        S.assets[f] = D, Lo(), tt(), st(), Ve(), Ke(), oe();
      } catch (C) {
        delete S.assets[f], Qt.delete(f);
        const D = (Array.isArray(S.stickers) ? S.stickers : []).find((Y) => String((Y == null ? void 0 : Y.id) || "") === l) || null;
        throw D && String(D.asset_id || "") === f && (g && _ && (S.assets[g] = _), D.asset_id = g, D.vFOV_deg = x, D.crop = I ? { ...I } : null), $t(), st(), Ve(), Ke(), oe(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function A_() {
    var s;
    if (r) return;
    const i = Tt();
    !i || !St(i) || Bt(i) || (s = se == null ? void 0 : se.openImagePicker) == null || s.call(se, "replace");
  }
  async function C_() {
    if (r || t !== "stickers") return;
    if (P) {
      await I_();
      return;
    }
    const i = S.assets && typeof S.assets == "object" ? S.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((C) => C.blob()), _ = String(g.type || "image/png").split("/")[1] || "png", x = String((p == null ? void 0 : p.name) || `${f}.${_}`), I = new File([g], x, { type: g.type || "image/png" }), M = await co(I, {
          fetchApi: (C, D) => Xt.fetchApi(C, D)
        });
        S.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (st(), oe());
  }
  async function I_() {
    let i = !1;
    for (const s of S.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((_) => _.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await co(m, {
            fetchApi: (_, x) => Xt.fetchApi(_, x)
          });
          s.source = Tl(g), i = !0;
        } catch {
        }
    }
    i && (st(), oe());
  }
  function O_() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      cr(i), h.mode = "pano", E && ur() ? ka(ug(bv(Gn(), i.position), Bp(), O.width, O.height)) : pp(Yt(Number(i.yaw_deg || 0)), Q(Number(i.pitch_deg || 0), -89.9, 89.9)), Ve(), Ke(), oe({ cause: "cutout_frame" });
      return;
    }
    const s = wy({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Yt(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    S.shots = [s], cr(s), tl(), h.mode = "pano", tt(), st(), Ve(), Ke(), oe({ cause: "cutout_frame" });
  }
  function E_() {
    r || t !== "cutout" || (S.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, S.active.selected_shot_id = null, tt(), st(), Ve(), Ke(), oe());
  }
  function F_() {
    const i = Array.isArray(S.stickers) ? S.stickers : [], s = [];
    for (const l of i)
      Bt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function gh(i, s, l = "Clear") {
    return new Promise((f) => {
      A.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function T_() {
    var l, f;
    if (r || !await gh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    S.painting = sa(null), kr();
    const s = F_();
    if (t === "stickers")
      S.stickers = P ? S.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (S.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], S.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Lo();
    else {
      const p = cM(S.shots, S.active.selected_shot_id);
      S.stickers = s, S.assets = {}, S.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], S.active.selected_sticker_id = null, S.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Lo();
    }
    tt(), st(), Ve(), Ke(), oe();
  }
  async function D_(i) {
    var m, g, _, x;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = jo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await gh(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((_ = h.interaction) == null ? void 0 : _.kind) === "draw" && ((x = h.interaction) == null ? void 0 : x.layerKind) === s) {
        const I = er();
        I && h.paintEngine.cancelActiveStroke(I), h.interaction = null;
      }
      f.length = 0, S.painting.raster_objects = Hn().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") !== s), s === "paint" && (xn().length = 0), kr(), tt(), st(), Ve(), Ke(), Kn(), oe();
    }
  }
  function L_() {
    if (r) return;
    const i = Tt();
    if (!i || !St(i) || Bt(i) || P && jc(i)) return;
    let s;
    P ? s = MM(i, ao("st"), Hs()) : (s = JSON.parse(JSON.stringify(i)), s.id = ao("st"), s.yaw_deg = Yt((s.yaw_deg || 0) + 8), s.z_index = Hs()), S.stickers.push(s), S.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], $t(), tt(), st(), Ke(), Ve(), oe();
  }
  function R_() {
    const i = Ia();
    return i ? (Ks(i) && (Tn(), SM(S, i.id), Fo(), $t(), tt(), st(), Ve(), Ke(), Tr(), oe()), !0) : !1;
  }
  function yh() {
    var l, f, p, m, g;
    if (r || E) return;
    const i = lr(), s = Tt();
    if (!(!s && i.length === 0) && !i.some((_) => bn(_))) {
      if (Tn(), i.length > 1) {
        const _ = new Set(i.filter((M) => fn(M)).map((M) => String(M.actionGroupId || M.id || ""))), x = new Set(i.filter((M) => Sn(M)).map((M) => mn(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(St).map((M) => String(M.id || "")));
        _.size > 0 && (S.painting.paint.strokes = (Array.isArray((f = (l = S.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? S.painting.paint.strokes : []).filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || ""))), S.painting.groups = xn().filter((M) => !_.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), kr()), x.size > 0 && (S.painting.raster_objects = Hn().filter((M) => !x.has(String((M == null ? void 0 : M.id) || ""))), Vo()), I.size > 0 && (S.stickers = (Array.isArray(S.stickers) ? S.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Bt(M) ? (Eo(M) || (M.visible = !1), !0) : !1 : !0), Lo(), $t()), h.selectedId = null, h.selectedIds = [], tt(), st(), Ve(), Ke(), oe();
        return;
      }
      if (fn(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        S.painting.paint.strokes = (Array.isArray((m = (p = S.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? S.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== _), S.painting.groups = xn().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== _), kr(), h.selectedId = null, h.selectedIds = [], tt(), st(), Ve(), Ke(), oe();
        return;
      }
      if (Sn(s)) {
        const _ = mn(s.rasterObjectId || s.id || "");
        S.painting.raster_objects = Hn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== _), Vo(), h.selectedId = null, h.selectedIds = [], tt(), st(), Ve(), Ke(), oe();
        return;
      }
      if (t === "stickers" || St(s)) {
        if (Bt(s)) {
          if (Eo(s)) return;
          s.visible = !1, $t(), tt(), st(), Ve(), Ke(), oe();
          return;
        }
        S.stickers = S.stickers.filter((_) => _.id !== s.id), Lo(), $t(), h.selectedId = ((g = Fr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], S.active.selected_sticker_id = h.selectedId, tt(), st(), Ve(), Ke(), oe();
        return;
      }
      E_();
    }
  }
  function wu(i, s) {
    const l = Ee.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = df * bo(l, i), p = Vd(Rd(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function bh(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [M, C] = _.split(":").map((D) => Number(D));
        if (Number.isFinite(M) && Number.isFinite(C)) return M >= C;
      }
      const x = Number(i.hFOV_deg || 64), I = Number(i.vFOV_deg || 40);
      return Math.abs(x - I) > 1e-6 ? x >= I : vo(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!wu(i, g)) {
      const _ = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = El(_, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function V_(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = Cs(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!wu(i, p)) {
      const m = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = El(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function vh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Si(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!wu(i, p)) {
      const m = Q(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = El(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = uo(i);
  }
  function _h() {
    Co().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function $_() {
    if (r) return;
    const i = lr();
    if (!Tt() || i.length === 0 || i.some((_) => bn(_))) return;
    _h();
    const l = Co(), f = new Set(i.map((_) => St(_) ? `sticker:${String(_.id || "")}` : Sn(_) ? `rasterObject:${mn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (l.forEach((_) => {
      var I, M;
      const x = _.type === "sticker" ? `sticker:${String(((I = _.item) == null ? void 0 : I.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(x) ? p.push(_) : m.push(_);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((_, x) => {
      _.type === "sticker" && _.item && (_.item.z_index = x), _.type === "strokeGroup" && _.item && (_.item.z_index = x), _.type === "rasterObject" && _.item && (_.item.z_index = x);
    }), $t(), tt(), st(), Ke(), oe();
  }
  function z_() {
    if (r) return;
    const i = lr();
    if (!Tt() || i.length === 0 || i.some((_) => bn(_))) return;
    _h();
    const l = Co(), f = new Set(i.map((_) => St(_) ? `sticker:${String(_.id || "")}` : Sn(_) ? `rasterObject:${mn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), p = [], m = [];
    if (l.forEach((_) => {
      var I, M;
      const x = _.type === "sticker" ? `sticker:${String(((I = _.item) == null ? void 0 : I.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((M = _.item) == null ? void 0 : M.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      f.has(x) ? p.push(_) : m.push(_);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((_, x) => {
      _.type === "sticker" && _.item && (_.item.z_index = x), _.type === "strokeGroup" && _.item && (_.item.z_index = x), _.type === "rasterObject" && _.item && (_.item.z_index = x);
    }), $t(), tt(), st(), Ke(), oe();
  }
  function j_() {
    r || (S.projection_model = "pinhole_rectilinear", S.alpha_mode = "straight", u && (S.output_preset = N(Number(S.output_preset || 2048))), d && (S.coverage = Xn(d.value)), b && (S.bg_color = String(b.value || S.bg_color || "#00ff00")), Dn(), e.setDirtyCanvas(!0, !0));
  }
  function Dn() {
    var s;
    if (r) return;
    Lr(), S.coverage = Xn(S.coverage), Yy(e, S.active);
    const i = Xy(e, S);
    y && !qy(e, i, String(y.value ?? ""), { rebased: E }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const wh = () => Dn();
  r || (e.__panoFlushStateBeforeQueue = wh);
  function xu() {
    S.ui_settings = sE(S.ui_settings), r || Dn();
  }
  function st() {
    var i;
    r || (Dn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function H_() {
    r || ov() && $p().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function G_(i = {}) {
    var f, p, m, g, _, x, I, M, C, D;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), l && ((I = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || I.call(x, !0, !0), (D = (C = (M = Cr) == null ? void 0 : M.canvas) == null ? void 0 : C.setDirty) == null || D.call(C, !0, !0));
  }
  function tl() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Kn(), Ve());
  }
  function Fi(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function nl(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function xh() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Lr(i = !0) {
    var l;
    if (!E) return;
    const s = (l = S.shots) == null ? void 0 : l[0];
    i && s && W && gM(S.camera, h.frame, s, W), W = ig(S.camera, h.frame), s ? Object.assign(s, W, { position: [...W.position] }) : S.shots = [{ ...W, position: [...W.position] }];
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(S.shots) ? S.shots : [];
    if (!i.length) return null;
    const s = String(S.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function K_() {
    var Y, H, q, ie, ce;
    if (!O) return null;
    const i = (Y = O.getBoundingClientRect) == null ? void 0 : Y.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    Ee.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, O.width - 24);
    let g = Math.max(p + 1, O.height - 24);
    const _ = (H = xt == null ? void 0 : xt.getBoundingClientRect) == null ? void 0 : H.call(xt), x = (q = Zt == null ? void 0 : Zt.getBoundingClientRect) == null ? void 0 : q.call(Zt);
    let I = 24;
    _ && i && _.width > 0 && _.height > 0 && (I = Math.max(I, (_.right - i.left) * s + r0)), x && i && x.width > 0 && x.height > 0 && ((ie = A.frameRail) == null ? void 0 : ie.visible) === !0 && (I = Math.max(I, (i.right - x.left) * s + r0)), f = Math.max(f, I);
    const M = Math.min(m, O.width - I);
    let C = 24;
    const D = (ce = _n == null ? void 0 : _n.getBoundingClientRect) == null ? void 0 : ce.call(_n);
    if (D && i && D.width > 0 && D.height > 0 && (C = Math.max(C, (D.bottom - i.top) * l + pf)), [xa, $].forEach((ye) => {
      var Be;
      if (!ye || !i) return;
      const le = getComputedStyle(ye);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const Me = (Be = ye.getBoundingClientRect) == null ? void 0 : Be.call(ye);
      !Me || Me.width <= 0 || Me.height <= 0 || (C = Math.max(C, (i.bottom - Me.top) * l + pf));
    }), At && i) {
      const ye = getComputedStyle(At);
      ye.display !== "none" && ye.visibility !== "hidden" && Number(ye.opacity) > 0 && (C = Math.max(C, (zO + pf) * l));
    }
    return p = Math.max(p, C), g = Math.max(p + 1, Math.min(g, O.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function rl(i = He()) {
    if (!i || !O) return null;
    const s = Ee.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return hk(s, i, df * bo(s, i));
  }
  function dn(i = He()) {
    const s = rl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Su() {
    return t === "cutout" && !!He();
  }
  function Mr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Ii(), g = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Q(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = lu(i.x, i.y), { lon: f, lat: p } = pu(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Nr(i, s, l = performance.now()) {
    const f = dn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = yu(s, p);
    if (!m) return null;
    const { lon: g, lat: _ } = pu(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - _ / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function W_(i, s) {
    const l = He();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = Sy(l, s);
    if (!p) return !1;
    if (f) {
      const m = df * bo(
        Ee.frameSafeRect || { w: O.width, h: O.height },
        p
      ), g = $d({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, Sh(), Ve(), !0;
  }
  function Sh() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, tt(), st(), Ve());
    }, 180);
  }
  function ku() {
    return E && h.mode === "frame" && Ws();
  }
  function za() {
    const i = He(), s = rl(i);
    return i && s ? gg(i, s, { width: O.width, height: O.height }) : null;
  }
  function kh() {
    var i;
    return h.frameDistance || ((i = Dr()) == null ? void 0 : i.radius) || Kr;
  }
  function ja(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: kh() };
  }
  function Mh(i, s) {
    const { rect: l } = i;
    return z.pick(Up(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function Nh(i, s, l) {
    return Qu(s, Mh(i, l), null, Ci());
  }
  function Ph(i) {
    return JSON.stringify([ja(i), i.rect]);
  }
  function Ah(i) {
    const s = He();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg, h.frameDistance = i.distance;
  }
  function Ch(i, s) {
    const l = He();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, gt(i), O.setPointerCapture(s));
  }
  function B_(i, s, l) {
    const f = za();
    if (!f || r) return;
    const p = ja(f), m = Nh(f, p, s);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: m, changed: !1 } : { kind: "frame_pan", last: s, depth: la(p, m), changed: !1 }, gt(s), O.setPointerCapture(l);
  }
  function U_(i, s) {
    const l = za();
    if (!l) return;
    const f = ja(l), p = s.x - i.last.x, m = s.y - i.last.y;
    Ah(i.kind === "frame_pan" ? lg(f, p, m, l.rect.w, l.rect.h, i.depth) : sg(f, p, m, O.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, oe({ localOnly: !0, cause: "frame_view" });
  }
  function Y_(i, s) {
    const l = za();
    if (!l || r) return;
    const f = ja(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: z.contentKey(), view: Ph(l) };
    if (!ag(Ct, m)) {
      const g = Mh(l, i);
      Ct = { ...m, cost: performance.now() - p, hit: g };
    }
    Ah(cg(f, Qu(f, Ct.hit, null, Ci()), s, Ci())), Ct.view = Ph(za() ?? l), Ct.wheelTime = p, Sh(), Ve(), oe({ localOnly: !0, cause: "frame_view" });
  }
  function X_() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, tt(), st(), Ve(), !0) : !1;
  }
  function Ha() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Zi(), h.interaction = null, Do(), ti(), Ve(), gt(h.pointerPos), oe({ localOnly: !0 }), !0;
  }
  function q_(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Ti(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? ai : Wn[s] ? s : h.activeBrushPresetId || ai;
  }
  function Ih() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (xh() || Su());
  }
  function Oh() {
    var i;
    return Ih() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function il(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function J_() {
    var M, C;
    if (!Oh()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = Ti(s), f = Wn[l] || Wn[ai], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : tr(h.paintColor), x = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Q(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), I = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Q(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: jr(_, x),
      strokeStyle: jr(_, I),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Z_() {
    var D, Y, H;
    const i = J_();
    if (!te) return;
    if (!i) {
      te.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", I = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = wc, l = wc, f = "0", g = "0", _ = "none", M = GO, C = KO, m = iE(i.fillStyle, I, x);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const q = Math.max(1, Number(((D = i.preset) == null ? void 0 : D.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * q), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((H = (Y = i.preset) == null ? void 0 : Y.angle) == null ? void 0 : H.value) || 0) * fo;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    te.style.display = "block", te.style.width = `${Math.round(s)}px`, te.style.height = `${Math.round(l)}px`, te.style.borderRadius = f, te.style.border = g, te.style.boxShadow = _, te.style.background = m, te.style.backgroundRepeat = "no-repeat", te.style.backgroundPosition = "center", te.style.backgroundSize = "contain", te.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function Q_() {
    var ye;
    if (!de || !Ce) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = Ti(s), f = Wn[l] || Wn[ai], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), _ = s === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : tr(h.paintColor), I = i === "mask" ? jr(x, 0.22) : _ ? "rgba(255,255,255,0.14)" : jr(x, Q(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? jr(x, 0.96) : _ ? "rgba(255,255,255,0.72)" : jr(x, Q(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, D = g * 2, Y = "999px", H = 0, q = I;
    const ie = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const le = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, g * 2 * le), D = Math.max(10, g * 2), Y = `${Math.min(8, D * 0.42)}px`, H = Number(((ye = f == null ? void 0 : f.angle) == null ? void 0 : ye.value) || 0) * fo;
    } else s === "brush" ? q = `radial-gradient(circle at 50% 50%, ${M} 0%, ${I} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, g * 1.8), D = C, q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : _ && (q = "rgba(255,255,255,0.12)");
    Ce.style.width = `${Math.round(C)}px`, Ce.style.height = `${Math.round(D)}px`, Ce.style.borderRadius = Y, Ce.style.background = q, Ce.style.border = `1px solid ${ie}`, Ce.style.boxShadow = `0 0 0 1px ${ce}`, Ce.style.transform = `rotate(${H}deg)`, Le && (clearTimeout(Le), Le = 0), de.classList.remove("fade-out"), de.classList.add("show");
  }
  function ol() {
    !de || !de.classList.contains("show") || (de.classList.add("fade-out"), Le && clearTimeout(Le), Le = window.setTimeout(() => {
      de.classList.remove("show", "fade-out"), Le = 0;
    }, 180));
  }
  function Eh(i, s, l, f) {
    const p = Ti(s), m = Wn[p] || Wn[ai], g = h.brushSizes[p] ?? 10, _ = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), x = q_(f, _), I = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), M = {
      id: Yo(i),
      actionGroupId: Yo("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: _,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: I.map((C) => ({ ...C })),
        points: I.map((C) => ({ ...C }))
      }
    };
    return Qg(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Fh(i, s, l, f) {
    const p = l.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = Ti(s), g = Wn[m] || Wn[ai], _ = {
      id: Yo(i),
      actionGroupId: Yo("ag"),
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
        points: p.map((x) => ({ ...x }))
      }
    };
    return Qg(_, g), Number(g.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function jo(i) {
    const s = S.painting || (S.painting = sa(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function ew(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const I = He();
      if (!I || (f = Nr(s, I, l), !f)) return !1;
    } else
      f = Mr(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const I = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (I < 15e-4 && M < 15e-4) return !1;
    }
    const _ = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ..._ }), m.push({ ..._ });
    const x = er();
    if (x) {
      const I = h.paintEngine.ensureTarget(x);
      h.paintEngine.appendStrokePoint(I, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function tw(i, s, l = performance.now()) {
    var g, _;
    let f;
    if (h.mode === "frame") {
      const x = He();
      if (!x) return !1;
      f = Nr(s, x, l);
    } else
      f = Mr(s, l);
    const p = (_ = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const x = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), I = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && I < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function nw(i) {
    var le, Me, Be, Xe, ot;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    Zs();
    const l = er(), f = Fa(l.width, l.height);
    if (!rh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((Me = (le = f.ctx) == null ? void 0 : le.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Me.data) || null;
    if (!p) return !1;
    const m = new Map(xn().map((ve) => [String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim(), ve ? { ...ve } : null])), g = [], _ = [], x = [...Hn().filter((ve) => String((ve == null ? void 0 : ve.layerKind) || "paint") !== "paint")];
    let I = !1, M = Co().reduce((ve, ae) => Math.max(ve, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function C(ve, ae, he, Te = 8) {
      let xe = ae, We = he, Ge = -1, ze = -1;
      for (let qe = 0; qe < he; qe += 1)
        for (let It = 0; It < ae; It += 1)
          ve[(qe * ae + It) * 4 + 3] <= Te || (It < xe && (xe = It), qe < We && (We = qe), It > Ge && (Ge = It), qe > ze && (ze = qe));
      return Ge < xe || ze < We ? null : { minX: xe, minY: We, maxX: Ge, maxY: ze };
    }
    const D = C(p, l.width, l.height, 8);
    if (!D) return !1;
    function Y(ve, ae) {
      return !ve || !ae ? !1 : !(ve.maxX < ae.minX || ae.maxX < ve.minX || ve.maxY < ae.minY || ae.maxY < ve.minY);
    }
    function H(ve, ae) {
      const he = Mi((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "", "paint", ae);
      if (!he) return null;
      const Te = he.centerUv.u - he.halfW, xe = he.centerUv.u + he.halfW, We = he.centerUv.v - he.halfH, Ge = he.centerUv.v + he.halfH, ze = l.width, qe = l.height;
      return {
        minX: Math.floor((Te % 1 + 1) % 1 * ze),
        maxX: Math.ceil((xe % 1 + 1) % 1 * ze),
        minY: Math.floor(Q(We, 0, 1) * qe),
        maxY: Math.ceil(Q(Ge, 0, 1) * qe),
        wraps: xe - Te >= 1 || Te < 0 || xe > 1
      };
    }
    function q(ve) {
      const ae = (ve == null ? void 0 : ve.bbox) || null;
      if (!ae) return null;
      const he = (ve == null ? void 0 : ve.transform) || {}, Te = l.width, xe = l.height, We = Number(ae.u0 || 0) + Number(he.du || 0), Ge = Number(ae.u1 || 0) + Number(he.du || 0), ze = Number(ae.v0 || 0) + Number(he.dv || 0), qe = Number(ae.v1 || 0) + Number(he.dv || 0);
      return {
        minX: Math.floor((We % 1 + 1) % 1 * Te),
        maxX: Math.ceil((Ge % 1 + 1) % 1 * Te),
        minY: Math.floor(Q(ze, 0, 1) * xe),
        maxY: Math.ceil(Q(qe, 0, 1) * xe),
        wraps: Ge - We >= 1 || We < 0 || Ge > 1
      };
    }
    function ie(ve) {
      return ve ? ve.wraps ? Y(D, { minX: 0, maxX: ve.maxX, minY: ve.minY, maxY: ve.maxY }) || Y(D, { minX: ve.minX, maxX: l.width - 1, minY: ve.minY, maxY: ve.maxY }) : Y(D, ve) : !0;
    }
    function ce(ve) {
      if (!ve) return { touched: !1, canvas: null };
      const ae = Fa(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(ve, 0, 0);
      const he = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(f.canvas, 0, 0), ae.ctx.restore();
      const Te = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let xe = 0; xe < l.width * l.height; xe += 1) {
        if (p[xe * 4 + 3] <= 8) continue;
        const Ge = he.data[xe * 4 + 3], ze = Te.data[xe * 4 + 3];
        if (Ge > ze)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(ve, ae, he) {
      const Te = Number(he == null ? void 0 : he.z_index), xe = e_(ve, ae, he).map((We, Ge) => ({
        ...We,
        z_index: Number.isFinite(Te) ? Te + Ge * 1e-3 : M + Ge * 1e-3
      }));
      return xe.length && (M = Math.max(M, ...xe.map((We) => Number((We == null ? void 0 : We.z_index) || 0))) + 1), xe;
    }
    for (const ve of xn()) {
      const ae = String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim();
      if (!ae) continue;
      const he = Sr(ae, "paint");
      if (!ie(H(ve, he))) {
        _.push(ve), g.push(...he);
        continue;
      }
      const Te = ((Xe = (Be = h.paintEngine) == null ? void 0 : Be.getGroupTarget) == null ? void 0 : Xe.call(Be, ae)) || null, xe = ((ot = Te == null ? void 0 : Te.committedPaint) == null ? void 0 : ot.canvas) || null;
      if (!xe) {
        _.push(ve), g.push(...he);
        continue;
      }
      const We = ce(xe);
      if (!We.touched || !We.canvas) {
        _.push(ve), g.push(...he);
        continue;
      }
      I = !0;
      const Ge = ye(We.canvas, "paint", m.get(ae) || ve || {});
      x.push(...Ge);
    }
    for (const ve of Hn().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!ie(q(ve))) {
        x.push(ve);
        continue;
      }
      const ae = Vp(ve, null);
      if (!ae) {
        x.push(ve);
        continue;
      }
      const he = ce(ae);
      if (!he.touched || !he.canvas) {
        x.push(ve);
        continue;
      }
      I = !0;
      const Te = ye(he.canvas, "paint", ve);
      x.push(...Te);
    }
    return I ? (S.painting.paint.strokes = g, S.painting.groups = _.sort((ve, ae) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), S.painting.raster_objects = x.sort((ve, ae) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Ca({ preservePanelValues: !1 }), !0) : !1;
  }
  function rw(i) {
    var g, _, x, I, M;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.rawPoints) || ((I = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : I.points) || []).length >= 1) {
      Mu(i);
      const C = er();
      C && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Eh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function iw(i) {
    var g, _;
    if ((((_ = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      Mu(i);
      const x = er();
      x && h.paintEngine.commitActiveStroke(i.stroke, x), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Fh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Mu(i) {
    var m, g, _, x;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = bu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), nw(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && hp((_ = i.stroke) == null ? void 0 : _.actionGroupId), jo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = bu(p, i.stroke.targetSpace, !0), f && hp((x = i.stroke) == null ? void 0 : x.actionGroupId), jo(i.layerKind).push(i.stroke), !0);
  }
  function Th(i) {
    var l;
    if (t === "cutout" && h.mode === "frame") {
      const f = He(), p = dn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Nr(i, f, performance.now()), _ = g ? Ro(g) : null;
      if (_)
        for (const I of gu()) {
          if (!St(I)) continue;
          const M = Ra(I, _);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const C = tn(I);
            if (C != null && C.visible) return { item: I, geom: C };
          }
        }
      const x = Kc(!1).slice().sort((I, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of x) {
        if (I.type === "strokeGroup") {
          const D = Oo(Ma("paint", I.actionGroupId || I.id || ""));
          if (!D) continue;
          const Y = tn(D);
          if (!(Y != null && Y.visible)) continue;
          const H = Array.isArray(Y.strokePaths) ? Y.strokePaths : [];
          for (const q of H) {
            const ie = Array.isArray(q == null ? void 0 : q.points) ? q.points : [];
            if (!ie.length) continue;
            if (q.closed && ie.length >= 3 && li(i, ie)) return { item: D, geom: Y };
            const ce = Math.max(8, Number((q == null ? void 0 : q.lineWidth) || 0) * 0.5 + 6);
            for (let ye = 0; ye < ie.length - 1; ye += 1)
              if (vf(i, ie[ye], ie[ye + 1]) <= ce * ce) return { item: D, geom: Y };
            if (ie.length === 1 && Li(i, ie[0]) <= ce * ce) return { item: D, geom: Y };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const D = Io(Na(((l = I.item) == null ? void 0 : l.id) || I.id || ""));
          if (!D) continue;
          const Y = tn(D);
          if (Rp(D, Y, i, g)) return { item: D, geom: Y };
          continue;
        }
        const M = I.item;
        if (!M || !St(M) || !_) continue;
        const C = Ra(M, _);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const D = tn(M);
          if (D != null && D.visible) return { item: M, geom: D };
        }
      }
      return null;
    }
    const s = [
      ...Kc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Oo(Ma("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Io(Na(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...t === "cutout" ? gu().filter((f) => jn(f)) : []
    ];
    for (const f of s) {
      if (fn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of g) {
          const x = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!x.length) continue;
          if (_.closed && x.length >= 3 && li(i, x)) return { item: f, geom: m };
          const I = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < x.length - 1; M += 1)
            if (vf(i, x[M], x[M + 1]) <= I * I) return { item: f, geom: m };
          if (x.length === 1 && Li(i, x[0]) <= I * I) return { item: f, geom: m };
        }
        continue;
      }
      if (Sn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        if (Rp(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = tn(f);
      if (p.visible && li(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Ga(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (St(l)) return td(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((g) => Li(g, s) <= 121);
      if (p >= 0) {
        const g = i.corners[p], _ = g.x - i.center.x, x = g.y - i.center.y, I = _ * x >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: I };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && li(s, _)) return { kind: "move", cursor: "default" };
        const x = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let I = 0; I < _.length - 1; I += 1)
          if (vf(s, _[I], _[I + 1]) <= x * x) return { kind: "move", cursor: "default" };
      }
      return li(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => Li(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], g = m.x - i.center.x, _ = m.y - i.center.y, x = g * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: x };
      }
      return li(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => Li(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const f = i.corners.findIndex((p) => Li(p, s) <= 121);
    if (f >= 0) {
      const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, _ = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: _ };
    }
    return Li(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : li(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function Dh(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function ow(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function aw(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => ow(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!li({ x: l, y: f }, s.corners);
  }
  function gt(i) {
    if (Z_(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? bt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? bt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? bt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? bt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? bt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? bt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? bt("grabbing") : bt("default");
      return;
    }
    if (Oh()) {
      bt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        bt($O);
        return;
      }
      if (h.primaryTool !== "cursor") {
        bt("default");
        return;
      }
      bt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      bt("default");
      return;
    }
    if (h.gizmoAxis) {
      bt("grab");
      return;
    }
    const s = Tt(), l = s ? tn(s) : null, f = s ? bn(s) : !1, p = f ? { kind: "none", cursor: "default" } : Ga(l, i, s);
    if (!f && p.kind !== "none") {
      bt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Th(i)) {
      bt("default");
      return;
    }
    bt(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!B) return;
    if (re = !1, h.mode === "frame") {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || qi() && ur()) {
      const p = sw();
      re = p.visible, Lh(p);
      return;
    }
    const i = Tt(), s = lr();
    if (!i && s.length === 0 || h.interaction) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = js(), f = wA({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Aa(s) : tn(i),
      allLocked: Yc(s),
      anyLocked: s.some((p) => bn(p)),
      selectedLocked: bn(i),
      activeAspect: fi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Bt,
      isStickerHidden: Eo,
      canRestoreSelectedToInitial: T1,
      iconSet: Ne,
      cameraShot: E
    });
    Lh(f);
  }
  function sw() {
    const i = Yi() && !h.interaction ? Qn().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Ka(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? Xd(l) : [i.gizmo.transform.position]).map((g) => As(s, g, O.width, O.height)).filter(Boolean), m = qM(s, i.gizmo.transform.position, i.gizmo.mode, O.width, O.height);
    return xA({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: E });
  }
  function Lh(i) {
    var m, g;
    if (!i.visible) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (_, x) => SA(i.anchor, _, x, O.width, O.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
    if (!p) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    A.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!B || A.selectionMenu.visible !== !0) return;
      const _ = B.getBoundingClientRect(), x = Math.round(Number((_ == null ? void 0 : _.width) || 0)) || 220, I = Math.round(Number((_ == null ? void 0 : _.height) || 0)) || 40;
      h.menuSize = { w: x, h: I, measured: !0 };
      const M = s(x, I);
      M && (A.selectionMenu.left = M.left, A.selectionMenu.top = M.top);
    });
  }
  function Zi() {
    mt.timer && (clearTimeout(mt.timer), mt.timer = 0), mt.target = null, A.tooltip.visible = !1;
  }
  function lw(i) {
    if (!_e || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    A.tooltip.text = s, A.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var q, ie;
      if (mt.target !== l || !_e || !(l != null && l.isConnected)) return;
      const f = V.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, _ = Math.round(Number(((q = _e.getBoundingClientRect()) == null ? void 0 : q.width) || 0)) || 100, x = Math.round(Number(((ie = _e.getBoundingClientRect()) == null ? void 0 : ie.height) || 0)) || 24, I = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let D = "", Y = p.left - f.left + p.width * 0.5 - _ * 0.5, H = p.top - f.top - x - g;
      if (I)
        D = "tool-rail", Y = p.right - f.left + 10, H = p.top - f.top + p.height * 0.5 - x * 0.5, Y = Q(Y, m, Math.max(m, f.width - _ - m)), H = Q(H, m, Math.max(m, f.height - x - m));
      else if (M)
        D = "frame-rail", Y = p.left - f.left - _ - 10, H = p.top - f.top + p.height * 0.5 - x * 0.5, Y = Q(Y, m, Math.max(m, f.width - _ - m)), H = Q(H, m, Math.max(m, f.height - x - m));
      else if (C) {
        D = "footer";
        const ce = l.closest(".pano-paint-footer"), ye = ce ? ce.getBoundingClientRect() : p;
        Y = ye.left - f.left + ye.width * 0.5 - _ * 0.5, H = ye.bottom - f.top + 5, Y = Q(Y, m, Math.max(m, f.width - _ - m)), H = Math.max(m, H);
      }
      Y = Q(Y, m, Math.max(m, f.width - _ - m)), H = Math.max(m, H), A.tooltip.left = Y, A.tooltip.top = H, A.tooltip.variant = D, A.tooltip.visible = !0;
    });
  }
  const sn = Dd({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Yt(Number(i.yaw || 0)), h.viewPitch = Q(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = Q(Number(i.fov || h.viewFov || 100), 35, 140);
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
        x: (i = S.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = S.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Ii,
    onInteraction: () => {
      Ee.backgroundDirty = !0, Ee.dirty = !0;
    }
  });
  function cw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += by(s, i.lastAngle), i.lastAngle = s;
    const f = vy(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Uo(f), p.fillPct = (f + 180) / 360 * 100), ri(), Nu(i), oe({ localOnly: !0 });
  }
  function uw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = $b(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Uo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), ri(), Nu(i), oe({ localOnly: !0 });
  }
  const Rh = (i, s) => {
    const l = Fi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Nu(i) {
    var g, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    mt.timer && (clearTimeout(mt.timer), mt.timer = 0), mt.target = null;
    const s = dn(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), f = (_ = V.getBoundingClientRect) == null ? void 0 : _.call(V);
    if (!s || !l || !f || O.width <= 0 || O.height <= 0) return;
    const p = l.width / O.width, m = l.height / O.height;
    A.tooltip.text = `${Uo(i.shot.roll_deg)}°`, A.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, A.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, A.tooltip.variant = "roll", A.tooltip.visible = !0;
  }
  pt == null || pt.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const l = dn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Rh(i, f);
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
    }, (m = pt.setPointerCapture) == null || m.call(pt, i.pointerId), i.preventDefault(), ri(), Nu(h.interaction), oe({ localOnly: !0 });
  }), pt == null || pt.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || cw(
      h.interaction,
      Rh(i, h.interaction.center),
      i
    );
  });
  const fw = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (tt(), st(), Ve()), h.interaction = null, Zi(), ti(), ri(), oe());
  };
  pt == null || pt.addEventListener("pointerup", fw), pt == null || pt.addEventListener("pointercancel", () => Ha()), pt == null || pt.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Ha();
  }), pt == null || pt.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, tt(), st(), Ve(), ri(), oe(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    Ye.selection && (Ye.selection = null, ii());
    const s = Fi(i);
    zn = s, il(s, !0), Ls(), sn.state.inertia.active = !1, sn.state.inertia.vx = 0, sn.state.inertia.vy = 0;
    const l = ur(), f = ku(), p = l || f ? O2(ru(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? Ch(s, i.pointerId) : B_(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = nl(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, sn.startDrag(M.x, M.y, i.pointerId, performance.now()), gt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), Dp(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const M = He();
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
        const M = h.mode === "unwrap" ? s : nl(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, sn.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      gt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = He(), C = dn(M);
      if (!M || M.locked === !0 || !C) return;
      const D = Vb({
        frame: C,
        point: s,
        startRollDeg: Number(M.roll_deg ?? M.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!D) return;
      h.interaction = {
        kind: "roll_frame",
        shot: M,
        center: D.center,
        lastAngle: D.lastAngle,
        accumulatedRad: D.accumulatedRad,
        rollGesture: D,
        start: { roll_deg: Number(M.roll_deg ?? M.rot_deg ?? 0) },
        changed: !1,
        altStarted: D.source === "alt",
        source: D.source
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), ri(), oe({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      Ch(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && zh(i, s);
      return;
    }
    if (be && !be.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (xh() || Su())) {
      Tn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, D = h.mode === "frame" && Su() ? He() : null, Y = { kind: "ERP_GLOBAL" }, H = D ? Nr(s, D, performance.now()) : Mr(s, performance.now());
      if (!H) {
        gt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: Yo("live"),
        stroke: C === "lasso_fill" ? Fh(M, C, [H], Y) : Eh(M, C, [H], Y)
      }, Do();
      const q = er();
      if (q)
        if (h.paintEngine.beginStroke(h.interaction.stroke, q), h.interaction.kind === "paint_stroke") {
          const ie = h.paintEngine.ensureTarget(q), ce = Number((H == null ? void 0 : H.u) ?? (H == null ? void 0 : H.x) ?? 0), ye = Number((H == null ? void 0 : H.v) ?? (H == null ? void 0 : H.y) ?? 0);
          h.paintEngine.appendStrokePoint(ie, ce, ye, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, q);
      gt(s), O.setPointerCapture(i.pointerId), oe();
      return;
    }
    const m = lr(), g = Tt(), _ = m.length > 1 ? Aa(m) : g ? tn(g) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, gt(s), O.setPointerCapture(i.pointerId), oe({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && E && ur() && wv(i, s) || h.primaryTool === "cursor" && P && Yi() && dw(i, s)) return;
    if (m.length > 1 && (_ != null && _.visible)) {
      if ((m.some((C) => bn(C)) ? { kind: "none" } : Ga(_, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - _.center.x, y: s.y - _.center.y },
          startCenter: { x: _.center.x, y: _.center.y },
          stickerSnapshots: m.filter((C) => St(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(an(C).yaw_deg || 0),
            pitch_deg: Number(an(C).pitch_deg || 0),
            center: (() => {
              var Y, H;
              const D = tn(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => fn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: Nn(Sr(C.actionGroupId, C.layerKind)),
            frameSnapshot: Nn(Mi(C.actionGroupId, C.layerKind)),
            center: (() => {
              var Y, H;
              const D = tn(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Uc(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => Sn(C)).map((C) => ({
            id: mn(C.rasterObjectId || C.id || ""),
            snapshot: Nn(Hn().find((D) => String((D == null ? void 0 : D.id) || "") === mn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var Y, H;
              const D = tn(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Gp(C)
          }))
        }, gt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (_ != null && _.visible)) {
      const M = bn(g) ? { kind: "none" } : Ga(_, s, g);
      if (M.kind === "scale") {
        h.interaction = fn(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Mi(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : Sn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          snapshot: Nn(Hn().find((C) => String((C == null ? void 0 : C.id) || "") === mn(g.rasterObjectId || g.id || ""))),
          cursor: M.cursor
        } : {
          kind: "scale",
          item: g,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          startHFOV: Number(an(g).hFOV_deg || 20),
          startVFOV: Number(an(g).vFOV_deg || 20),
          cursor: M.cursor
        }, gt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "scale_x" || M.kind === "scale_y") {
        h.interaction = {
          kind: M.kind,
          item: g,
          center: _.center,
          startDist: Math.max(1, Math.hypot(s.x - _.center.x, s.y - _.center.y)),
          startHFOV: Number(an(g).hFOV_deg || 20),
          startVFOV: Number(an(g).vFOV_deg || 20),
          cursor: M.cursor,
          edge: M.edge
        }, gt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "rotate") {
        h.interaction = fn(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: _.center,
          startAng: Math.atan2(s.y - _.center.y, s.x - _.center.x),
          snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Mi(g.actionGroupId, g.layerKind))
        } : {
          kind: "rotate",
          item: g,
          center: _.center,
          startRot: Number(an(g).rot_deg || an(g).roll_deg || 0),
          startAng: Math.atan2(s.y - _.center.y, s.x - _.center.x)
        }, gt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "move") {
        if (fn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = He();
            return D ? Nr(s, D, performance.now()) : null;
          })() : Mr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: C,
            snapshot: Nn(Sr(g.actionGroupId, g.layerKind)),
            frameSnapshot: Nn(Mi(g.actionGroupId, g.layerKind))
          }, gt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        if (Sn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = He();
            return D ? Nr(s, D, performance.now()) : null;
          })() : Mr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: g,
            startUv: C,
            snapshot: Nn(Hn().find((D) => String((D == null ? void 0 : D.id) || "") === mn(g.rasterObjectId || g.id || "")))
          }, gt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: g,
          offset: { x: s.x - _.center.x, y: s.y - _.center.y }
        }, gt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const x = Th(s);
    if (x) {
      const M = h.selectedId !== x.item.id;
      if (M && h.selectedId && (tt(), Dn()), cr(x.item), t === "cutout" && M && (h.cutoutAspectOpen = !1), M && Ve(), Ke(), oe(), bn(x.item)) {
        gt(s);
        return;
      }
      h.interaction = {
        kind: fn(x.item) ? "move_stroke_group" : Sn(x.item) ? "move_raster_object" : "move",
        item: x.item,
        offset: { x: s.x - x.geom.center.x, y: s.y - x.geom.center.y },
        startUv: fn(x.item) || Sn(x.item) ? h.mode === "frame" ? (() => {
          const C = He();
          return C ? Nr(s, C, performance.now()) : null;
        })() : Mr(s, performance.now()) : null,
        snapshot: fn(x.item) ? Nn(Sr(x.item.actionGroupId, x.item.layerKind)) : Sn(x.item) ? Nn(Hn().find((C) => String((C == null ? void 0 : C.id) || "") === mn(x.item.rasterObjectId || x.item.id || ""))) : null,
        frameSnapshot: fn(x.item) ? Nn(Mi(x.item.actionGroupId, x.item.layerKind)) : null
      }, gt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const I = !!h.selectedId;
    I && (tt(), Dn()), Ca(), I && Ve(), Ke(), oe(), h.mode === "pano" && zh(i, s);
  };
  function Ka() {
    return ef(Gn(), O.width, O.height, Dr());
  }
  function Qi(i, s) {
    return z.gizmoPointer(i, Ka(), s.x, s.y, O.width, O.height);
  }
  function dw(i, s) {
    var _;
    const l = (_ = Qn().space) == null ? void 0 : _.gizmo;
    if (l && Qi("hover", s) !== null && Qi("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: _o(Ia(), h.frame),
        changed: !1
      }, O.setPointerCapture(i.pointerId), gt(s), !0;
    const f = lr(), p = Tt(), m = f.length > 1 ? f.some((x) => bn(x)) ? "none" : Ga(Aa(f), s).kind : p && !bn(p) ? Ga(tn(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = z.pickSticker(Ka(), s.x, s.y, O.width, O.height);
    return S.stickers.some((x) => x.id === g && x.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (tt(), Dn()), tu(g), Ve(), Ke(), Tr(), oe()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Vh(i) {
    var f;
    const l = !!(h.worldSelectedId || qi()) && h.primaryTool === "cursor" && Yi() && !!((f = Qn().space) != null && f.gizmo) ? Qi("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, Ee.backgroundDirty = !0, oe({ localOnly: !0 }));
  }
  function pw(i, s) {
    const l = Qi("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(pg(i.mode, i.base, i.start, l))) In(S.camera, p, h.frame, m);
      Lr(), i.changed = !0, Ve(), oe({ localOnly: !0 });
      return;
    }
    const f = S.stickers.find((p) => p.id === i.id);
    !l || !f || (xM(f, h.frame, pg(i.mode, i.base, i.start, l)), i.changed = !0, $t(), Ve(), oe({ localOnly: !0 }));
  }
  function $h(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (Qi("up", h.pointerPos), Ee.backgroundDirty = !0, i.changed && (tt(), st(), Ve())), gt(h.pointerPos), oe();
  }
  function zh(i, s) {
    if (ur()) {
      const f = ru().emptyLeft;
      f && Dp(f, s, i.pointerId);
      return;
    }
    const l = nl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, sn.startDrag(l.x, l.y, i.pointerId, performance.now()), gt(s), O.setPointerCapture(i.pointerId);
  }
  function hw(i, s) {
    if (!k || !Ft.playing) return;
    if (Ft.stop(), i.kind === "frame_orbit" || i.kind === "frame_pan") {
      const p = za();
      if (!p) return;
      const m = ja(p), g = Nh(p, m, s);
      i.kind === "frame_orbit" ? i.pivot = g : i.depth = la(m, g);
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = S.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = Xi() : p && (i.base = _o(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = Aa(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((x) => String((x == null ? void 0 : x.id) || "") === m.id), _ = g ? tn(g) : null;
        _ != null && _.visible && (m.yaw_deg = Number(an(g).yaw_deg || 0), m.pitch_deg = Number(an(g).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = tn(i.item);
    if (!(l != null && l.visible)) return;
    const f = an(i.item);
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
    var f, p, m, g, _, x, I, M, C, D, Y, H, q, ie, ce, ye, le, Me, Be, Xe, ot, ve;
    const s = Fi(i);
    if (il(s, !0), !h.interaction) {
      Vh(s), gt(s);
      return;
    }
    gt(s);
    const l = h.interaction;
    if (zn && (s.x !== zn.x || s.y !== zn.y)) {
      const ae = zn;
      zn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || hw(l, ae);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        pw(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        ae.forEach((Te) => {
          const xe = Fi(Te);
          if (h.mode === "frame") {
            const We = He(), Ge = We ? dn(We) : null;
            if (Ge) {
              const ze = (xe.x - Ge.x) / Math.max(1, Ge.w), qe = (xe.y - Ge.y) / Math.max(1, Ge.h);
              if (!(ze >= 0 && ze <= 1 && qe >= 0 && qe <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, rw(l));
            }
          }
          ew(l, xe, performance.now()) && (he = !0);
        }), he && oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let he = !1;
        if (ae.forEach((Te) => {
          const xe = Fi(Te);
          if (h.mode === "frame") {
            const We = He(), Ge = We ? dn(We) : null;
            if (Ge) {
              const ze = (xe.x - Ge.x) / Math.max(1, Ge.w), qe = (xe.y - Ge.y) / Math.max(1, Ge.h);
              if (!(ze >= 0 && ze <= 1 && qe >= 0 && qe <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, iw(l));
            }
          }
          tw(l, xe, performance.now()) && (he = !0);
        }), he) {
          const Te = er();
          Te && h.paintEngine.updateActiveStroke(l.stroke, Te), oe({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const ae = performance.now(), he = h.mode === "unwrap" ? s : nl(i);
        sn.moveDrag(he.x, he.y, h.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = he, oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        U_(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const ae = Gn();
        Ep(l.kind === "space_pan" ? lg(ae, s.x - l.last.x, s.y - l.last.y, O.width, O.height, l.depth) : sg(ae, s.x - l.last.x, s.y - l.last.y, O.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const ae = rl(l.shot);
        if (!ae || !l.shot) return;
        const he = s.x - l.last.x, Te = s.y - l.last.y, xe = zb(l.shot, {
          dx: he,
          dy: Te,
          focalPx: ae.focalPx,
          invertX: ((f = S.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = S.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = xe.yaw_deg, l.shot.pitch_deg = xe.pitch_deg, l.changed = l.changed || Math.abs(he) > 0 || Math.abs(Te) > 0, l.last = s, oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        uw(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const ae = s.x - l.offset.x, he = s.y - l.offset.y;
        if (h.mode === "frame" && t === "cutout") {
          const Te = He(), xe = dn(Te);
          if (!Te || !xe) return;
          const We = {
            x: Q((ae - xe.x) / Math.max(1, xe.w), 0, 1),
            y: Q((he - xe.y) / Math.max(1, xe.h), 0, 1)
          }, Ge = yu(Te, We);
          if (!Ge) return;
          const ze = Sl(Ge);
          xr(l.item, { yaw_deg: ze.yaw, pitch_deg: ze.pitch });
        } else if (h.mode === "unwrap") {
          const Te = Ii(), xe = Q((ae - Te.x) / Math.max(Te.w, 1), 0, 1), We = Q((he - Te.y) / Math.max(Te.h, 1), 0, 1);
          xr(l.item, { yaw_deg: Yt(xe * 360 - 180), pitch_deg: Q(90 - We * 180, -90, 90) });
        } else {
          const Te = lu(ae, he), xe = Sl(Te);
          xr(l.item, { yaw_deg: xe.yaw, pitch_deg: xe.pitch });
        }
        St(l.item) && $t(), oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const ae = h.mode === "frame" ? (() => {
          const xe = He();
          return xe ? Nr(s, xe, performance.now()) : null;
        })() : Mr(s, performance.now());
        if (!ae || !l.startUv) return;
        const he = sr(Number(ae.u || 0), Number(l.startUv.u || 0)), Te = Number(ae.v || 0) - Number(l.startUv.v || 0);
        gp((m = l.item) == null ? void 0 : m.actionGroupId, he, Te, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const ae = h.mode === "frame" ? (() => {
          const xe = He();
          return xe ? Nr(s, xe, performance.now()) : null;
        })() : Mr(s, performance.now());
        if (!ae || !l.startUv) return;
        const he = sr(Number(ae.u || 0), Number(l.startUv.u || 0)), Te = Number(ae.v || 0) - Number(l.startUv.v || 0);
        bp(((_ = l.item) == null ? void 0 : _.rasterObjectId) || ((x = l.item) == null ? void 0 : x.id) || "", he, Te, l.snapshot) && (Vo(), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const he = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        S1(((I = l.item) == null ? void 0 : I.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", he, l.snapshot) && (Vo(), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const ae = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), he = s.y - Number(((D = l.offset) == null ? void 0 : D.y) || 0);
        let Te = !1, xe = !1, We = !1;
        const Ge = ae - Number(((Y = l.startCenter) == null ? void 0 : Y.x) || ae), ze = he - Number(((H = l.startCenter) == null ? void 0 : H.y) || he);
        for (const qe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const It = (t === "cutout" ? Bc() : Fr()).find((Lt) => String((Lt == null ? void 0 : Lt.id) || "") === String(qe.id || ""));
          if (!It || !St(It)) continue;
          const Mn = {
            x: Number(((q = qe.center) == null ? void 0 : q.x) || 0) + Ge,
            y: Number(((ie = qe.center) == null ? void 0 : ie.y) || 0) + ze
          };
          if (h.mode === "frame" && t === "cutout") {
            const Lt = He(), Gt = dn(Lt);
            if (!Lt || !Gt) continue;
            const Vr = {
              x: Q((Mn.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Q((Mn.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, sm = yu(Lt, Vr);
            if (!sm) continue;
            const lm = Sl(sm);
            xr(It, { yaw_deg: lm.yaw, pitch_deg: lm.pitch });
          } else if (h.mode === "unwrap") {
            const Lt = Ii(), Gt = Q((Mn.x - Lt.x) / Math.max(Lt.w, 1), 0, 1), Vr = Q((Mn.y - Lt.y) / Math.max(Lt.h, 1), 0, 1);
            xr(It, { yaw_deg: Yt(Gt * 360 - 180), pitch_deg: Q(90 - Vr * 180, -90, 90) });
          } else {
            const Lt = lu(Mn.x, Mn.y), Gt = Sl(Lt);
            xr(It, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          Te = !0;
        }
        for (const qe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const It = {
            x: Number(((ce = qe.center) == null ? void 0 : ce.x) || 0) + Ge,
            y: Number(((ye = qe.center) == null ? void 0 : ye.y) || 0) + ze
          }, Mn = h.mode === "frame" ? (() => {
            const Gt = He();
            return Gt ? Nr(It, Gt, performance.now()) : null;
          })() : Mr(It, performance.now()), Lt = qe.centerUv || null;
          if (Mn && Lt) {
            const Gt = sr(Number(Mn.u || 0), Number(Lt.u || 0)), Vr = Number(Mn.v || 0) - Number(Lt.v || 0);
            gp(qe.id, Gt, Vr, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (Te = !0, xe = !0);
          }
        }
        for (const qe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const It = {
            x: Number(((le = qe.center) == null ? void 0 : le.x) || 0) + Ge,
            y: Number(((Me = qe.center) == null ? void 0 : Me.y) || 0) + ze
          }, Mn = h.mode === "frame" ? (() => {
            const Gt = He();
            return Gt ? Nr(It, Gt, performance.now()) : null;
          })() : Mr(It, performance.now()), Lt = qe.centerUv || null;
          if (Mn && Lt) {
            const Gt = sr(Number(Mn.u || 0), Number(Lt.u || 0)), Vr = Number(Mn.v || 0) - Number(Lt.v || 0);
            bp(qe.id, Gt, Vr, qe.snapshot) && (Te = !0, We = !0);
          }
        }
        Te && (xe ? kr({ rebuildPaintEngine: !1 }) : We ? Vo() : $t(), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const he = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        yp((Be = l.item) == null ? void 0 : Be.actionGroupId, he, 0, l.snapshot, (Xe = l.item) == null ? void 0 : Xe.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let ae = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * fo;
        i.shiftKey && (ae = Math.round(ae / 45) * 45), yp((ot = l.item) == null ? void 0 : ot.actionGroupId, 1, ae, l.snapshot, (ve = l.item) == null ? void 0 : ve.layerKind, l.frameSnapshot) && (kr({ rebuildPaintEngine: !1 }), oe({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const he = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { hFOV_deg: Q(l.startHFOV * he, 1, 179), vFOV_deg: Q(l.startVFOV * he, 1, 179) }), wr(l.item) || (l.item.aspect_id = uo(l.item)), St(l.item) && $t(), oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const he = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { hFOV_deg: Q(l.startHFOV * he, 1, 179) }), wr(l.item) || (l.item.aspect_id = uo(l.item)), St(l.item) && $t(), oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const he = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        xr(l.item, { vFOV_deg: Q(l.startVFOV * he, 1, 179) }), wr(l.item) || (l.item.aspect_id = uo(l.item)), St(l.item) && $t(), oe({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let he = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * fo, Te = l.startRot - he;
        i.shiftKey && (Te = Math.round(Te / 45) * 45), xr(l.item, { [St(l.item) ? "rot_deg" : "roll_deg"]: Te }), St(l.item) && $t(), oe({ localOnly: !0 });
      }
    }
  }, O.onpointerup = () => {
    var s, l, f, p, m, g, _;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, gt(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        $h(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Do();
        const x = Mu(h.interaction), I = !!h.interaction._hasCommittedSegments;
        if (x || I) {
          kr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const D = xn().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === M);
            D && (D.frame = null);
          }
          const C = er();
          C && (x ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), eh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), tt(), Dn(), Ve(), Ke(), e.setDirtyCanvas(!0, !0), oe();
        } else {
          const M = er();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const x = Dh(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? gu().filter((C) => !jn(C)) : [...Fr()],
          ...v1(),
          ..._1()
        ].filter((C) => aw(x, tn(C)));
        N1(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && M.length && (h.cutoutAspectOpen = !1), Ve(), Ke(), oe();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((_ = h.interaction) == null ? void 0 : _.kind))
        h.interaction.changed && (tt(), st(), Ve());
      else if (h.interaction && h.interaction.kind !== "view") {
        let x = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (x = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (x = !0), x && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? kr({ rebuildPaintEngine: !0 }) : Vo()), tt(), Dn(), e.setDirtyCanvas(!0, !0), $o(), Ke(), oe();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Zi(), Do(), i && i.kind === "view" && sn.endDrag(performance.now()), ti(), Ke(), gt(h.pointerPos), oe();
    }
  }, O.onpointercancel = () => {
    var i, s, l, f, p;
    if (!Ha()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        $h(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && sn.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Do();
        const m = er();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Do(), ti(), gt(h.pointerPos), oe({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    Ha();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.oncontextmenu = (i) => {
    (ur() || ku()) && E2(ru(), 2) && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Fi(i), l = il(s, !0);
    h.interaction || (gt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && oe({ localOnly: !0 }));
  }, O.onpointerleave = () => {
    h.interaction || Vh({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    il(h.pointerPos, !1), gt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && oe({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Fi(i), l = ec(i);
      l && Tn(), l && ku() ? Y_(s, -l) : l && W_(s, l) && oe({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Ls(), ur()) {
        const s = ec(i);
        s && q1(Fi(i), -s);
      } else sn.applyWheelEvent(i) && oe({ localOnly: !0 });
      i.preventDefault();
    }
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Ui(!0));
  }, O.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), wn.depth = 0, Ui(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Ar(p));
    l && hh(l);
  };
  const jh = (i) => {
    t !== "stickers" && t !== "cutout" || r || zc(i) && (wn.depth += 1, Ui(!0), i.preventDefault());
  }, Hh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!wn.active && zc(i) && Ui(!0), wn.active && i.preventDefault());
  }, Gh = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !wn.active) return;
    wn.depth = Math.max(0, wn.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (wn.depth === 0 || s) && Ui(!1);
  }, Kh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (wn.depth = 0, Ui(!1), zc(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", jh, !0), window.addEventListener("dragover", Hh, !0), window.addEventListener("dragleave", Gh, !0), window.addEventListener("drop", Kh, !0);
  function Pu() {
    const { canUndo: i, canRedo: s } = uh();
    Za(A.toolButtons, "value", "undo", { disabled: !i }), Za(A.toolButtons, "value", "redo", { disabled: !s });
  }
  const Wh = (i, s, l = !1) => {
    var I;
    Tn();
    const f = t === "cutout" && h.mode === "frame" ? He() : null, p = f || Tt(), m = f ? "shot" : js(), g = Ia();
    if (g && !Ks(g) || !g && (!p || m === "stroke" || bn(p))) return;
    const _ = (((I = A.sidePanel) == null ? void 0 : I.params) || []).find((M) => M.key === i);
    if (!_ || _.enabled === !1) return;
    let x = Number(s);
    if (Number.isNaN(x) && (x = 0), (g || E) && OO.has(i) ? x = i === "scale" ? Math.max(x, t0) : x : x = Q(x, Number(_.min), Number(_.max)), i === "yaw_deg" && (x = Yt(x)), E && i.startsWith("position_")) {
      Lr(), bM(S.camera, h.frame, i, x), Ve(), oe(), l && tt();
      return;
    }
    if (g) {
      wM(g, h.frame, i, x), $t(), Ve(), oe(), l && tt();
      return;
    }
    i === "opacity" ? vM(p, h.frame, x / 100) : xr(p, { [i]: x }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = uo(p)), Ve(), oe(), l && tt();
  };
  ht == null || ht.addEventListener("click", async (i) => {
    var f, p, m, g, _, x, I;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = Xn(s.getAttribute("data-coverage"));
      if (M === Xn(S.coverage)) return;
      S.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? Ee.backgroundDirty = !0 : (Dn(), G_({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ke(), oe();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = A.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      A.sidePanel.selectionPicker.open = !A.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      A.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (M && (t === "stickers" ? C = Fr().find((D) => String((D == null ? void 0 : D.id) || "") === M) || null : C = ((m = _p().find((D) => {
        var Y;
        return String(((Y = D == null ? void 0 : D.item) == null ? void 0 : Y.id) || "") === M;
      })) == null ? void 0 : m.item) || null), cr(C || null), C && !fn(C)) {
        const D = an(C);
        pp(Yt(Number(D.yaw_deg || 0)), Q(Number(D.pitch_deg || 0), -89.9, 89.9));
      }
      Ve(), Ke(), oe();
      return;
    }
    if (l === "copy-state-inline") {
      const M = Tt(), C = js();
      if (!M || C === "stroke" || lr().length > 1) return;
      const D = JSON.stringify(t === "cutout" && C !== "image" ? Ap(M) : z1(an(M)));
      try {
        await navigator.clipboard.writeText(D), (g = A.sidePanel) != null && g.copyStateButton && (A.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Y;
          (Y = A.sidePanel) != null && Y.copyStateButton && (A.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? h.showPanorama = !h.showPanorama : M === "objects" ? h.showObjects = !h.showObjects : M === "mask" && (h.showMask = !h.showMask), Ve(), oe();
      return;
    }
    if (l === "set-invert-x") {
      S.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", xu(), Ve(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), oe();
      return;
    }
    if (l === "set-invert-y") {
      S.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", xu(), Ve(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), oe();
      return;
    }
    if (l === "ui-reset-defaults") {
      S.ui_settings.invert_view_x = !1, S.ui_settings.invert_view_y = !1, xu(), Ve(), (I = e.setDirtyCanvas) == null || I.call(e, !0, !0), oe();
      return;
    }
    if (l === "close-preview") {
      Go();
      return;
    }
    if (l === "cancel-close") {
      Go();
      return;
    }
    l === "save-close" && (j_(), Go());
  }), ht == null || ht.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Wh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ht == null || ht.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Wh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Au = () => Tr();
  Au(), J.addEventListener("click", (i) => {
    var I, M, C, D, Y;
    if ((M = (I = i.target) == null ? void 0 : I.matches) != null && M.call(I, "[data-confirm-overlay]")) {
      const H = (C = A.confirmDialog) == null ? void 0 : C.resolve;
      A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, H == null || H(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Y1(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), Ee.backgroundDirty = !0, Ke(), oe({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.disabled) return;
      const H = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), t === "cutout" && h.mode === "frame" && (H !== "frame" && (Ee.frameSafeRect = null), Ve(), Ke()), tl(), ti(), oe();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const H = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = H, (H === "paint" || H === "mask") && Ca({ preservePanelValues: !0 }), Kn(), Ve(), Ke(), oe();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const H = String(p.getAttribute("data-tool-ui-action") || "");
        if ((H === "undo" || H === "redo") && p.disabled) return;
        H === "undo" ? vu(-1) : H === "redo" ? vu(1) : H === "clear" ? T_() : H === "add" || H === "add-image" ? x_() : H === "add-world" ? S_() : H === "add-or-look" && O_();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const H = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = H, Ca({ preservePanelValues: !0 }), Wn[H] && (h.activeBrushPresetId = H), Kn(), Ve(), Ke(), oe();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), Ca({ preservePanelValues: !0 }), Kn(), Ve(), Ke(), oe();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const H = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        D_(H);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const H = Gl.find((q) => q.id === p.getAttribute("data-paint-color-swatch"));
        if (!H) return;
        h.paintColor = tr(H.color), ft(!0), Kn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), be && !be.hidden ? ft(!0) : yt(), Kn();
        return;
      }
    }
    const m = String(((D = p == null ? void 0 : p.getAttribute) == null ? void 0 : D.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(we instanceof HTMLVideoElement)) return;
      Et.resumeAfterScrub = !1, _u();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Sp(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(we instanceof HTMLVideoElement)) return;
      const H = !A.videoTransport.loop;
      A.videoTransport.loop = H, we.loop = H, Ni({
        hasAudio: A.videoTransport.hasAudio,
        loop: H,
        muted: we.muted,
        volume: Number(we.volume ?? A.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        A.frameRail.aspectOpen = !A.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const H = h.mode === "frame" ? He() : null;
        if (!H || H.locked === !0) return;
        bh(H, String(p.getAttribute("data-aspect") || "1:1")), A.frameRail.aspectOpen = !1, $o(), tt(), st(), ti(), oe();
        return;
      }
      if (m === "frame-aspect-custom") {
        const H = h.mode === "frame" ? He() : null, q = p.getAttribute("data-custom-width"), ie = p.getAttribute("data-custom-height");
        if (!H || !V_(H, q, ie)) return;
        A.frameRail.aspectOpen = !1, $o(), tt(), st(), ti(), oe();
        return;
      }
      if (m === "frame-rotate-90") {
        const H = h.mode === "frame" ? He() : null;
        if (!H || H.locked === !0) return;
        vh(H), A.frameRail.aspectOpen = !1, $o(), tt(), st(), ti(), oe();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), oe();
        return;
      }
      if (m === "aspect-set") {
        const H = Tt();
        if (!H) return;
        const q = String(p.getAttribute("data-aspect") || "1:1");
        bh(H, q), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, $o(), tt(), st(), Ke(), oe();
        return;
      }
      if (m === "rotate-90") {
        const H = Tt();
        if (!H) return;
        vh(H), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, $o(), tt(), st(), Ke(), oe();
        return;
      }
      if (m === "bring-front") {
        $_();
        return;
      }
      if (m === "send-back") {
        z_();
        return;
      }
      if (m === "duplicate") {
        L_();
        return;
      }
      if (m === "replace-image") {
        A_();
        return;
      }
      if (m === "toggle-lock") {
        M1();
        return;
      }
      if (m === "back-initial") {
        E1();
        return;
      }
      if (m === "toggle-visible") {
        O1();
        return;
      }
      if (m === "delete") {
        yh();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      ka(
        { position: To(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Y = Dr()) == null ? void 0 : Y.radius) || Kr },
        { mode: Hl(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!ur() || Hl(h.spaceMode, h.viewTransition) !== "6dof") return;
      X1();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, cE(e == null ? void 0 : e.id, h.showGrid), Au(), oe();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), yw();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const H = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = H, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = H ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), qh(), oe();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const _ = Number(g.getAttribute("data-paint-history-index")), x = h.customPaintHistory[_];
    x && (h.customPaintColor = tr(x), h.paintColor = tr(x), Kn());
  }), J.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(we instanceof HTMLVideoElement)) return;
      Ft.playing && (Et.resumeAfterScrub = !0), Ft.seek(lo(Number(s.value || 0), Gs()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(we instanceof HTMLVideoElement)) return;
      const m = Q(Number(l.value || 0), 0, 1);
      we.volume = m, we.muted = m <= 1e-4, Ni({
        hasAudio: A.videoTransport.hasAudio,
        muted: we.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Ti(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Kn(), Q_();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: Q(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = tr(m), h.paintColor = tr(m), Kn();
    }
  }), J.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(we instanceof HTMLVideoElement)) return;
      Et.resumeAfterScrub && Ft.play(), Et.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ol();
  }), J.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ol();
  }), J.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && ol();
  }), J.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && ol();
  }), J.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !J.contains(s) || mt.target !== s && (mt.target = s, mt.timer && clearTimeout(mt.timer), mt.timer = window.setTimeout(() => {
      mt.target === s && lw(s);
    }, 220));
  }), J.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || mt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || Zi();
  }), J.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Zi();
  });
  const mw = (i, s) => {
    var _;
    if (!ke) return;
    const l = ke.getBoundingClientRect(), f = Q((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - Q((s - l.top) / Math.max(1, l.height), 0, 1), m = wf(h.customPaintColor), g = { ..._f(m.h, f, p), a: Number(((_ = h.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    h.customPaintColor = tr(g), h.paintColor = tr(g), Kn();
  }, gw = (i) => {
    var m;
    if (!$e) return;
    const s = $e.getBoundingClientRect(), l = Q((i - s.left) / Math.max(1, s.width), 0, 1), f = wf(h.customPaintColor), p = { ..._f(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = tr(p), h.paintColor = tr(p), Kn();
  }, Bh = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  ke && (ke.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Bh(i, (s) => mw(s.clientX, s.clientY));
  }), $e && ($e.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Bh(i, (s) => gw(s.clientX));
  }), J.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = A.confirmDialog) == null ? void 0 : p.resolve;
    A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const Uh = () => {
    const i = !!h.fullscreen;
    Za(A.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ne.fullscreen_close : Ne.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, al = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, J.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Au(), Uh(), Po(), oe());
  }, Yh = () => document.fullscreenElement === Pe, yw = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        al(!h.fullscreen);
        return;
      }
      Yh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = Pe.requestFullscreen) == null ? void 0 : i.call(Pe));
    } catch {
      al(!h.fullscreen);
    }
  }, Xh = () => {
    document.fullscreenEnabled && al(Yh());
  };
  document.addEventListener("fullscreenchange", Xh), Uh();
  const qh = () => {
    const i = !!h.outputPreviewExpanded;
    A.outputPreviewToggle.icon = i ? Ne.fullscreen_close : Ne.fullscreen, A.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", A.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  qh();
  const Cu = e.onConnectionsChange;
  let Iu = null, Jh = () => {
  };
  !r && t === "stickers" && (Jh = Kb(e, (i = "sync") => {
    i === "executed" && (XO(Qt, wl), Pi(), P && __()), Cp(i);
  }, { editor: !0 }), Iu = function(...s) {
    typeof Cu == "function" && Cu.apply(this, s), Pi(), gi(this, "connections");
  }, e.onConnectionsChange = Iu), !r && !E && o0.set(String(e.id ?? "0"), () => $p());
  let Ho = null;
  const Go = async () => Ho || (Ho = (async () => {
    var i, s, l, f, p, m, g, _;
    return o0.delete(String(e.id ?? "0")), X_(), r || Dn(), document.fullscreenElement === Pe && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Xh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === wh && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (_ = (g = (m = Cr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || _.call(g, !0, !0), Zi(), m_(), we instanceof HTMLVideoElement && we.pause(), un.forEach((x) => {
      try {
        x();
      } catch {
      }
    }), z.dispose(), Ui(!1), window.removeEventListener("keydown", Zh, !0), window.removeEventListener("keydown", Qh, !0), window.removeEventListener("keydown", tm, !0), window.removeEventListener("keyup", nm, !0), window.removeEventListener("keydown", sl, !0), window.removeEventListener("keyup", sl, !0), window.removeEventListener("blur", rm), window.removeEventListener("keydown", im, !0), window.removeEventListener("dragenter", jh, !0), window.removeEventListener("dragover", Hh, !0), window.removeEventListener("dragleave", Gh, !0), window.removeEventListener("drop", Kh, !0), !r && t === "stickers" && (e.onConnectionsChange === Iu && (e.onConnectionsChange = Cu), Jh()), R.unmount(), ee.remove(), H_(), Ho = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Ho = null, !1)), Ho), Zh = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (Ha()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === Pe) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), al(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Go();
    }
  }, Qh = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, _ = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Ye.selection) {
      v_(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (R_()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Tt() && (yh(), i.preventDefault(), i.stopPropagation());
  }, em = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !A.timeline.visible || A.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !Pe.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !IO.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, tm = (i) => {
    em(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || _u());
  }, nm = (i) => {
    em(i) && (i.preventDefault(), i.stopPropagation());
  }, sl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, ri(), gt(h.pointerPos));
  }, rm = () => {
    h.marqueeModifier = !1, h.altModifier = !1, ri(), gt(h.pointerPos);
  }, im = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = uh();
    i.shiftKey && !g || !i.shiftKey && !m || (vu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Zh, !0), window.addEventListener("keydown", Qh, !0), window.addEventListener("keydown", tm, !0), window.addEventListener("keyup", nm, !0), window.addEventListener("keydown", sl, !0), window.addEventListener("keyup", sl, !0), window.addEventListener("blur", rm), window.addEventListener("keydown", im, !0), Pe.addEventListener("pointerdown", (i) => {
    i.target === Pe && Go();
  });
  function Rr(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(S)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(S).forEach((g) => delete S[g]), Object.assign(S, m), r || Dn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      A.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Rr("cutout-focus", W1), !r && t === "stickers" && Rr("external-sticker-sync", () => Cp("open"), { rollbackState: !0 }), C_().catch((i) => {
    A.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Rr("history", tt), Rr("undo-redo", Pu), Rr("paint-ui", Kn), Rr("side-panel", Ve), Rr("look-at-frame", nu), Rr("video-source", Pi), Rr("canvas-size", ah), Rr("cursor", () => gt(h.pointerPos)), oe(), Ee.rafId = requestAnimationFrame(lh);
}
Cr.registerExtension(H2({
  app: Cr,
  openEditor: mE,
  attachStickers: nA,
  attachCutout: rA,
  attachPreview: tA,
  restoreOutput: HP,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: LO
}));
